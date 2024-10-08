import { Feature, Map as OpenLayersMap, View } from 'ol';
import Control from 'ol/control/Control';
import { LineString, Point } from 'ol/geom';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import { OSM, Vector } from 'ol/source';
import Icon from 'ol/style/Icon';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AkatronicsPngUrl from '^/assets/icons/akatronics-logo.png';
import { DescriptionTemplate } from '^/components/molecules/DescriptionTemplate';
import { Tabbar } from '^/components/molecules/Tabbar';
import {
  routeCoordsFromMirinaeMaeul,
  routeCoordsFromSinjungdongExit3,
  routeCoordsFromSinjungdongExit4,
} from '^/constants/coords';
import { DescriptionListItem } from '^/types';

const routeCoordsByIndex = [
  routeCoordsFromSinjungdongExit3,
  routeCoordsFromSinjungdongExit4,
  routeCoordsFromMirinaeMaeul,
];

const routeDescriptionByIndex: DescriptionListItem[][] = [
  [
    {
      id: 'shinjungdong-station-exit-3',
      description:
        '신중동역 3번 출구에서 롯데시네마를 바라보는 방향(왼쪽, 서쪽)으로 나오기',
    },
    {
      id: 'straight-until-mcdonald',
      description: '왼쪽을 바라볼 때 맥도날드 건물이 나올 때까지 직진',
    },
    {
      id: 'go-to-mcdonald',
      description:
        '왼쪽으로 돌아 맥도날드 건물을 향해 직진하여 다다랐을 때 우회전',
    },
    {
      id: 'straight-until-akatronics',
      description:
        '왼쪽을 바라볼 때 3층에 아카트로닉스 건물이 보일 때까지 직진 (2층에는 엔젤스코인노래방이 있음)',
    },
    {
      id: '3rd-floor',
      description: '3층에 도착하여 아카트로닉스 방문',
    },
  ],
  [
    {
      id: 'sinjungdong-bus-station-exit3or4',
      description:
        '신중동역 3/4번 출구 버스 정류장에서 하차 (4번 출구 버스정류장의 경우 횡단보도를 건너야 함)',
    },
    {
      id: 'daewoo-mybill-cosmopolitan',
      description:
        '대우마이빌2 건물과 코스모폴리탄 오피스텔 사이의 거리로 들어오기 (들어오면 좌측에 짱이네 매콤돈가스 냉면이 있고, 우측에 메가커피, 공차, 테라커피가 보이며, 바로 앞에 CU 편의점이 보임)',
    },
    {
      id: 'cu-right',
      description:
        'CU 건물의 오른쪽 방향으로 이동하여 3층에 아카트로닉스 건물이 보일 때까지 직진 (2층에는 엔젤스코인노래방이 있음)',
    },
    {
      id: '3rd-floor',
      description: '3층에 도착하여 아카트로닉스 방문',
    },
  ],
  [
    {
      id: 'mirinae-maeul-bus-station',
      description:
        '미리내마을 버스 정류장에서 하차 (부천시청역 방면에서 왔다면 횡단보도를 건너야 함)',
    },
    {
      id: 'crossroad-nonghyeop',
      description: '횡단보도 바로 근처에 있는 농협은행으로 이동',
    },
    {
      id: 'bukkyeong-jjajang',
      description: '북경짜장 건물이 보일 때까지 직진 후 CU 편의점에서 좌회전',
    },
    {
      id: 'straight-until-akatronics',
      description:
        '오른쪽을 바라볼 때 3층에 아카트로닉스 건물이 보일 때까지 직진 (2층에는 엔젤스코인노래방이 있음)',
    },
    {
      id: '3rd-floor',
      description: '3층에 도착하여 아카트로닉스 방문',
    },
  ],
];

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  row-gap: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const OpenLayersMapContainer = styled.div`
  width: 100%;
  height: 360px;
`;

export function WayToAkatronicsPage() {
  const [mapObject, setMapObject] = useState<OpenLayersMap | null>(null);
  // const [clickedCoords, setClickedCoords] = useState<Coordinate[]>([]);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  useEffect(() => {
    const openLayersLicenseContainer = document.createElement('div');
    openLayersLicenseContainer.style.fontWeight = '400';
    openLayersLicenseContainer.style.color = 'var(--white-color)';
    openLayersLicenseContainer.style.textShadow =
      '1px 1px 2px var(--black-color)';
    openLayersLicenseContainer.style.padding = '4px';
    openLayersLicenseContainer.style.position = 'absolute';
    openLayersLicenseContainer.style.left = '0px';
    openLayersLicenseContainer.style.bottom = '0px';
    openLayersLicenseContainer.style.pointerEvents = 'none';

    const openLayersElement = document.createElement('div');
    openLayersElement.textContent = 'OpenLayers';
    const openLayersLicenseElement = document.createElement('div');
    openLayersLicenseElement.textContent = 'BSD 2-Clause License';
    const openLayersCopyrightElement = document.createElement('div');
    openLayersCopyrightElement.textContent =
      'Copyright 2005-present, OpenLayers Contributors All rights reserved.';

    openLayersLicenseContainer.appendChild(openLayersElement);
    openLayersLicenseContainer.appendChild(openLayersLicenseElement);
    openLayersLicenseContainer.appendChild(openLayersCopyrightElement);

    const map = new OpenLayersMap({
      target: 'map-area',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: [
        new Control({
          element: openLayersLicenseContainer,
        }),
      ],
    });

    setMapObject(map);
    return () => {
      map.setTarget();
    };
  }, []);

  useEffect(() => {
    if (!mapObject) {
      return () => {};
    }

    const zoomLevel = (() => {
      if (window.innerWidth < 400) {
        return 16.3;
      }

      if (window.innerWidth >= 400 && window.innerWidth < 470) {
        return 16.5;
      }

      if (window.innerWidth >= 470 && window.innerWidth < 510) {
        return 16.7;
      }

      if (window.innerWidth >= 510 && window.innerWidth < 650) {
        return 17;
      }

      return 17.5;
    })();

    const centerLon =
      (routeCoordsByIndex[currentTabIndex][0][0] +
        routeCoordsByIndex[currentTabIndex][
          routeCoordsByIndex[currentTabIndex].length - 1
        ][0]) /
      2;
    const centerLat =
      (routeCoordsByIndex[currentTabIndex][0][1] +
        routeCoordsByIndex[currentTabIndex][
          routeCoordsByIndex[currentTabIndex].length - 1
        ][1]) /
      2;

    mapObject.setView(
      new View({
        projection: 'EPSG:3857',
        center: fromLonLat([centerLon, centerLat], 'EPSG:3857'),
        zoom: zoomLevel,
      })
    );

    /**
     * Draw line
     */
    // const lineCoordinates = clickedCoords.map((coord) => fromLonLat(coord));
    const lineCoordinates = routeCoordsByIndex[currentTabIndex].map((coord) =>
      fromLonLat(coord, 'EPSG:3857')
    );
    const lineFeature = new Feature({
      geometry: new LineString(lineCoordinates),
    });
    const lineStyle = new Style({
      stroke: new Stroke({
        color: '#22b14c',
        width: 5,
      }),
    });
    lineFeature.setStyle(lineStyle);

    const lineLayer = new VectorLayer({
      source: new Vector({
        features: [lineFeature],
      }),
    });
    mapObject.addLayer(lineLayer);

    /**
     * Draw marker
     */
    const markerCoordinate = fromLonLat(
      routeCoordsFromSinjungdongExit3[
        routeCoordsFromSinjungdongExit3.length - 1
      ],
      'EPSG:3857'
    );
    const markerFeature = new Feature({
      geometry: new Point(markerCoordinate),
    });
    const markerStyle = new Style({
      image: new Icon({
        src: AkatronicsPngUrl,
        scale: 0.064,
      }),
    });
    markerFeature.setStyle(markerStyle);

    const markerLayer = new VectorLayer({
      source: new Vector({
        features: [markerFeature],
      }),
    });
    mapObject.addLayer(markerLayer);

    /**
     * Add handler
     */
    // function onClickHandler(event: MapBrowserEvent<UIEvent>) {
    //   setClickedCoords(
    //     clickedCoords.concat([toLonLat(event.coordinate, 'EPSG:3857')])
    //   );
    // }
    // mapObject.on('click', onClickHandler);

    // console.log(clickedCoords);

    return () => {
      mapObject.removeLayer(lineLayer);
      // mapObject.un('click', onClickHandler);
    };
  }, [mapObject, currentTabIndex /* , clickedCoords */]);

  return (
    <Root>
      <Title>아카트로닉스 오시는 길</Title>
      <OpenLayersMapContainer id="map-area" />
      <Tabbar
        tabNames={[
          '신중동역 3번출구',
          '신중동역 버스정류장',
          '미리내마을 버스정류장',
        ]}
        currentTabIndex={currentTabIndex}
        onClick={setCurrentTabIndex}
      />
      <DescriptionTemplate
        title=""
        descriptionListItems={routeDescriptionByIndex[currentTabIndex]}
      />
    </Root>
  );
}
