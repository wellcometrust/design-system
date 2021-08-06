import React from 'react';

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

export const SpacingBlocks = () => {
  const sizes: SizeProps = {
    xl: {
      color: '--color-green-50',
      mqBase: '32',
      mqSmall: '48',
      mqMedium: '64'
    },
    lg: {
      color: '--color-blue-50',
      mqBase: '16',
      mqSmall: '24',
      mqMedium: '32'
    },
    md: {
      color: '--color-orange-50',
      mqBase: '8',
      mqSmall: '12',
      mqMedium: '16'
    },
    sm: {
      color: '--color-red-50',
      mqBase: '6',
      mqSmall: '8',
      mqMedium: '8'
    },
    xs: {
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
          <th scope="col">Space unit</th>
          <th scope="col">Default size, small screens up to 767 pixels</th>
          <th scope="col">Medium screens from 768 up to 1023 pixels</th>
          <th scope="col">Large screens 1024 pixels wide and above</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(sizes).map(([key, value]) => {
          const size = `--space-${key}`;
          return (
            <tr key={size}>
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
                  <figcaption className="sb-swatch__name">
                    <dl>
                      <dt className="u-visually-hidden">Space unit name</dt>
                      <dd>{key.toUpperCase()}</dd>
                      <dt className="u-visually-hidden">CSS variable</dt>
                      <dd className="sb-variable">{size}</dd>
                    </dl>
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
