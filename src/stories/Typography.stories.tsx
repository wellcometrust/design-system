import React from 'react';

import kebabCase from 'lodash/fp/kebabCase';

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

export const tokensFontFamilies: NestedTokenProps = {
  FontPrimary: {
    value: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
    comment: 'Standard body text, headings and links'
  },
  FontPrimaryAlt: {
    value: 'Helvetica, Arial, sans-serif',
    comment:
      'Alternative for FontPrimary, this font stack removes odd line-height issue encountered with Helvetica Neue'
  },
  FontSecondary: {
    value: `'Wellcome-Bold', sans-serif`,
    comment: 'Main page headings and quote text (to be used sparingly)'
  },
  FontTertiary: {
    value: `'Courier New', Courier, monospace`,
    comment: 'Image and video captions, licensing info'
  }
};

export const tokensFontSizeHeadings: NestedTokenProps = {
  FontSizeHeadingXxl: {
    comment: 'H0 Heading XXL',
    mqBase: '32',
    mqSmall: '34',
    mqMedium: '40'
  },
  FontSizeHeadingXl: {
    comment: 'H1 Heading XL',
    mqBase: '24',
    mqSmall: '28',
    mqMedium: '32'
  },
  FontSizeHeadingLg: {
    comment: 'H2 Heading LG',
    mqBase: '22',
    mqSmall: '22',
    mqMedium: '24'
  },
  FontSizeHeadingMd: {
    comment: 'H3 Heading MD',
    mqBase: '18',
    mqSmall: '18',
    mqMedium: '20'
  },
  FontSizeHeadingSm: {
    comment: 'H4 Heading SM',
    mqBase: '16',
    mqSmall: '16',
    mqMedium: '16'
  },
  FontSizeHeadingXs: {
    comment: 'H5 Heading XS',
    mqBase: '14',
    mqSmall: '14',
    mqMedium: '14'
  }
};

export const tokensFontSizeBody: NestedTokenProps = {
  FontSizeBodyXl: {
    comment: 'Body XL',
    mqBase: '24'
  },
  FontSizeBodyLg: {
    comment: 'Body LG',
    mqBase: '20'
  },
  FontSizeBodyMd: {
    comment: 'Body MD',
    mqBase: '16'
  },
  FontSizeBodySm: {
    comment: 'Body SM',
    mqBase: '14'
  },
  FontSizeBodyXs: {
    comment: 'Body XS',
    mqBase: '12'
  }
};

export const tokensTypography: MappedTokensProps = {
  FontSizeBase: '1rem',
  FontSizeBasePx: '16',
  FontWeightHeading: '500',
  LetterSpacingBody: '0.4px',
  LetterSpacingHeadingMajor: '-0.5px',
  LetterSpacingHeadingMinor: '0.2px',
  LineHeightBody: '1.6',
  LineHeightHeading: '1.6'
};

export const TokensTable = ({ tokens }: { tokens: MappedTokensProps }) => (
  <table>
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">CSS variable</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(tokens).map(([key, value]) => {
        const cssVariable = `--${kebabCase(key)}`;

        return (
          <tr key={key}>
            <td>{key}</td>
            <td className="sb-variable">{cssVariable}</td>
            <td>{value}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export const TypographySizes = ({
  isResponsive = false,
  sizes
}: {
  isResponsive?: boolean;
  sizes: NestedTokenProps;
}) => (
  <table>
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">CSS variable</th>
        <th scope="col">Preview</th>
        {isResponsive ? (
          <>
            <th scope="col">Default size, small screens up to 767 pixels</th>
            <th scope="col">Medium screens from 768 up to 1023 pixels</th>
            <th scope="col">Large screens 1024 pixels wide and above</th>
          </>
        ) : (
          <th scope="col">Size</th>
        )}
      </tr>
    </thead>
    <tbody>
      {Object.entries(sizes).map(([key, value]) => {
        const size = `--${kebabCase(key)}`;
        const { comment, ...rest } = value;

        return (
          <tr key={size}>
            <td>{key}</td>
            <td className="sb-variable">{size}</td>
            <td style={{ fontSize: `var(${size})` }}>{comment}</td>
            {Object.entries(rest).map(([sizeKey, sizeValue]) => (
              <td key={sizeKey}>{sizeValue} pixels</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
);

export const FontFamilies = ({ tokens }: { tokens: NestedTokenProps }) => (
  <table>
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">CSS variable</th>
        <th scope="col">Preview / value</th>
        <th scope="col">Application</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(tokens).map(([key, value]) => {
        const cssVariable = `--${kebabCase(key)}`;
        const { comment, value: nestedValue } = value;

        return (
          <tr key={key}>
            <td>{key}</td>
            <td className="sb-variable">{cssVariable}</td>
            <td style={{ fontFamily: `var(${cssVariable})` }}>{nestedValue}</td>
            <td>{comment}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
