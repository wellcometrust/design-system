import React from 'react';

import kebabCase from 'lodash/fp/kebabCase';

type SizeProps = {
  [key: string]: {
    [key: string]: string;
  };
};

export const SpacingBlocks = () => {
  const sizes: SizeProps = {
    SpaceXl: {
      color: '--color-green-50',
      mqBase: '32',
      mqSmall: '48',
      mqMedium: '64'
    },
    SpaceLg: {
      color: '--color-blue-50',
      mqBase: '16',
      mqSmall: '24',
      mqMedium: '32'
    },
    SpaceMd: {
      color: '--color-orange-50',
      mqBase: '8',
      mqSmall: '12',
      mqMedium: '16'
    },
    SpaceSm: {
      color: '--color-red-50',
      mqBase: '6',
      mqSmall: '8',
      mqMedium: '8'
    },
    SpaceXs: {
      color: '--color-amber-40',
      mqBase: '4',
      mqSmall: '4',
      mqMedium: '4'
    }
  };

  return (
    <table>
      <caption>Standard space units and their sizes across breakpoints</caption>
      <thead>
        <tr>
          <th scope="col">Token</th>
          <th scope="col">CSS variable</th>
          <th scope="col">Preview</th>
          <th scope="col">Default size, small screens up to 767 pixels</th>
          <th scope="col">Medium screens from 768 up to 1023 pixels</th>
          <th scope="col">Large screens 1024 pixels wide and above</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(sizes).map(([key, value]) => {
          const size = `--${kebabCase(key)}`;

          return (
            <tr key={size}>
              <td>{key}</td>
              <td className="sb-variable">{size}</td>
              <td>
                <figure>
                  <div
                    className="sb-space"
                    style={{
                      backgroundColor: `var(${value.color})`,
                      height: `var(${size})`,
                      width: `var(${size})`
                    }}
                  />
                  <figcaption className="u-visually-hidden">
                    Coloured square indicating the size of {size}
                  </figcaption>
                </figure>
              </td>
              <td>{value.mqBase} pixels</td>
              <td>{value.mqSmall} pixels</td>
              <td>{value.mqMedium} pixels</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

/* eslint-disable import/prefer-default-export */
