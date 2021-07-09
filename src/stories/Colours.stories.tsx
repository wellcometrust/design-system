import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs/blocks';

import colourTokens from 'src/build/js/colours';
import { toCssVariable } from 'utils/change-case';

type TokensProps = {
  [key: string]: string;
};

export const ColourVariables = ({ tokens }: TokensProps) => {
  // const tokenKeys = Object.keys(colourTokens) as Array<keyof typeof colourTokens>;
  const tokenKeys = Object.keys(tokens);

  return (
    <table className="sb-table sb-table--swatches">
      <thead>
        <tr>
          <th scope="col">Token name</th>
          <th scope="col">CSS variable</th>
          <th scope="col">Swatch and value</th>
        </tr>
      </thead>
      <tbody>
        {/* {tokenKeys.map((key: keyof typeof colourTokens) => { */}
        {tokenKeys.map((key) => {
          const value = colourTokens[key];
          const cssValue = /rgb/i.test(key) ? `rgb(${value})` : value;
          const cssVariable = toCssVariable(key);
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{cssVariable}</td>
              <td>
                <figure className="sb-swatch">
                  <div className="sb-swatch__colour" style={{ 'backgroundColor': cssValue}}></div>
                  <figcaption className="sb-swatch__name">{value}</figcaption>
                </figure>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

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
