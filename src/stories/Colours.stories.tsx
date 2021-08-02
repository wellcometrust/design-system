import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';

import kebabCase from 'lodash/fp/kebabCase';

type MappedTokensProps = {
  [key: string]: string;
};

type ColourVarsProps = {
  tokens?: MappedTokensProps;
};

const defaultTokens = { Example: '#000000' };

// MDX rendering of tokens appears to be temperamental without a default prop
export const ColourVariables = ({
  tokens = defaultTokens
}: ColourVarsProps) => {
  return tokens ? (
    <ul className="sb-swatch-grid">
      {Object.entries(tokens).map(([key, value]) => {
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
  ) : (
    <>No tokens to render</>
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
