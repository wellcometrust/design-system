import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';

export const ColoursPaletteStatus = () => (
  <ColorPalette>
    <ColorItem
      title="Error"
      subtitle="--colour-red-60"
      colors={['var(--colour-red-60)']}
    />
    <ColorItem
      title="Success"
      subtitle="--colour-green-60"
      colors={['var(--colour-green-60)']}
    />
  </ColorPalette>
);

/* eslint-disable import/prefer-default-export */
