import React from 'react';

import { ReactComponent as ClickToOpenChevronSvg } from '^/assets/chevrons/click-to-open-chevron.svg';
import { ReactComponent as ClickToCloseChevronSvg } from '^/assets/chevrons/click-to-close-chevron.svg';

interface Props {
  isOpen: boolean;
  fillColor: string;
}

export function Chevron({ isOpen, fillColor }: Props) {
  return isOpen ? (
    <ClickToCloseChevronSvg style={{ fill: fillColor }} />
  ) : (
    <ClickToOpenChevronSvg style={{ fill: fillColor }} />
  );
}
