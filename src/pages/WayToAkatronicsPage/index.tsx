import { Map as OpenLayersMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import { OSM } from 'ol/source';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { DescriptionTemplate } from '^/components/molecules/DescriptionTemplate';

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
  height: 400px;
`;

export function WayToAkatronicsPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new OpenLayersMap({
      target: 'map-area',
      view: new View({
        projection: 'EPSG:3857',
        center: fromLonLat([126.77313987879374, 37.502897100388466]),
        zoom: 17,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: [],
    });

    map.setTarget(mapRef.current || '');
    return () => {
      map.setTarget('');
    };
  }, [mapRef.current]);

  return (
    <Root>
      <Title>아카트로닉스 오시는 길</Title>
      <OpenLayersMapContainer id="map-area" ref={mapRef} />
      <DescriptionTemplate
        title=""
        descriptionListItems={[
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
        ]}
      />
    </Root>
  );
}
