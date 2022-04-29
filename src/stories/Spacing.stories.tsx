import React from 'react';

import kebabCase from 'lodash/fp/kebabCase';

type SizeProps = {
  [key: string]: {
    [key: string]: string;
  };
};

/*
 * TODO: #8709 - Automate documentation of styling fundamentals
 *
 * The token objects and React component tables are a stop-gap. The token
 * objects will be supplanted by files generated from design tokens using Style
 * Dictionary and React components will be refactored to handle them so that
 * table values automatically update. This discovery work is underway but not
 * yet completed.
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8709}
 */

const TokenTableRows = ({ sizes }: { sizes: SizeProps }) => (
  <>
    {Object.entries(sizes).map(([key, value]) => {
      const size = `--${kebabCase(key)}`;
      const { color, mqBase, mqSmall, mqMedium } = value;

      return (
        <tr key={size}>
          <td>{key}</td>
          <td className="sb-variable">{size}</td>
          <td>
            <figure>
              <div
                className="sb-space"
                style={{
                  backgroundColor: `var(${color})`,
                  height: `var(${size})`,
                  width: `var(${size})`
                }}
              />
              <figcaption className="u-visually-hidden">
                Coloured square indicating the size of {size}
              </figcaption>
            </figure>
          </td>
          {mqBase && <td>{mqBase} pixels</td>}
          {mqSmall && <td>{mqSmall} pixels</td>}
          {mqMedium && <td>{mqMedium} pixels</td>}
        </tr>
      );
    })}
  </>
);

export const StaticSpacingBlocks = () => {
  const sizes: SizeProps = {
    SpaceStaticXxxl: {
      color: '--color-amber-60',
      mqBase: '64'
    },
    SpaceStaticXxl: {
      color: '--color-grey-60',
      mqBase: '48'
    },
    SpaceStaticXl: {
      color: '--color-cyan-60',
      mqBase: '32'
    },
    SpaceStaticLg: {
      color: '--color-green-60',
      mqBase: '24'
    },
    SpaceStaticMd: {
      color: '--color-blue-60',
      mqBase: '16'
    },
    SpaceStaticSm: {
      color: '--color-orange-60',
      mqBase: '12'
    },
    SpaceStaticXs: {
      color: '--color-red-60',
      mqBase: '8'
    },
    SpaceStaticXxs: {
      color: '--color-yellow-60',
      mqBase: '4'
    }
  };

  return (
    <table>
      <caption>Static spacing units</caption>
      <thead>
        <tr>
          <th scope="col">Token</th>
          <th scope="col">CSS variable</th>
          <th scope="col">Preview</th>
          <th scope="col">Size</th>
        </tr>
      </thead>
      <tbody>
        <TokenTableRows sizes={sizes} />
      </tbody>
    </table>
  );
};

export const ResponsiveSpacingBlocks = () => {
  const sizes: SizeProps = {
    SpaceResponsiveXxl: {
      color: '--color-grey-60',
      mqBase: '48',
      mqSmall: '72',
      mqMedium: '96'
    },
    SpaceResponsiveXl: {
      color: '--color-cyan-60',
      mqBase: '32',
      mqSmall: '48',
      mqMedium: '64'
    },
    SpaceResponsiveLg: {
      color: '--color-green-60',
      mqBase: '24',
      mqSmall: '32',
      mqMedium: '48'
    },
    SpaceResponsiveMd: {
      color: '--color-blue-60',
      mqBase: '16',
      mqSmall: '24',
      mqMedium: '32'
    },
    SpaceResponsiveSm: {
      color: '--color-orange-60',
      mqBase: '12',
      mqSmall: '16',
      mqMedium: '16'
    },
    SpaceResponsiveXs: {
      color: '--color-red-60',
      mqBase: '8',
      mqSmall: '8',
      mqMedium: '8'
    },
    SpaceResponsiveXxs: {
      color: '--color-yellow-60',
      mqBase: '4',
      mqSmall: '4',
      mqMedium: '4'
    }
  };

  return (
    <table>
      <caption>
        Responsive spacing units and their sizes across breakpoints
      </caption>
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
        <TokenTableRows sizes={sizes} />
      </tbody>
    </table>
  );
};
