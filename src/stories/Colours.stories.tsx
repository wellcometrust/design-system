import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';

import kebabCase from 'lodash/fp/kebabCase';
import colourTokens from './colour-tokens';

type TokensProps = {
  [key: string]: string;
};

// TODO: Ideally we would import tokens as a prop but type declarations
// are not implicit at the node level i.e. `tokenKeys.map((key) =>`
export const ColourVariables = ({ tokens }: TokensProps) => {
  const tokenKeys = Object.keys(colourTokens) as Array<
    keyof typeof colourTokens
  >;

  return (
    <ul className="sb-swatch-grid">
      {tokenKeys.map(key => {
        const value = colourTokens[key];
        const cssVariable = `--${kebabCase(key)}`;
        return (
          <li key={key}>
            <figure className="sb-swatch">
              <div
                className="sb-swatch__colour"
                style={{ backgroundColor: value }}
              />
              <figcaption className="sb-swatch__name">
                <dl>
                  <dt className="u-visually-hidden">Token</dt>
                  <dd>{key}</dd>
                  <dt className="u-visually-hidden">CSS variable</dt>
                  <dd className="sb-variable">{cssVariable}</dd>
                </dl>
              </figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

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
