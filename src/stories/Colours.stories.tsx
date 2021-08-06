import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';

import kebabCase from 'lodash/fp/kebabCase';

type ColorVarsProps = {
  tokens?: MappedTokensProps;
};

const defaultTokens = { Example: '#000000' };

// MDX rendering of tokens appears to be temperamental without a default prop
export const ColorVariables = ({ tokens = defaultTokens }: ColorVarsProps) => {
  return tokens ? (
    <ul className="sb-swatch-grid">
      {Object.entries(tokens).map(([key, value]) => {
        const cssVariable = `--${kebabCase(key)}`;
        return (
          <li key={key}>
            <figure className="sb-swatch">
              <div
                className="sb-swatch__color"
                style={{ backgroundColor: value }}
              />
              <figcaption className="sb-swatch__name">
                <dl>
                  <dt className="u-visually-hidden">Token</dt>
                  <dd>{key}</dd>
                  <dt className="u-visually-hidden">Hex colour</dt>
                  <dd>{value}</dd>
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

export const ColorPaletteStatus = () => (
  <ColorPalette>
    <ColorItem
      title="Error"
      subtitle="--color-red-60"
      colors={['var(--color-red-60)']}
    />
    <ColorItem
      title="Success"
      subtitle="--color-green-60"
      colors={['var(--color-green-60)']}
    />
  </ColorPalette>
);
