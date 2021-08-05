import React from 'react';

import kebabCase from 'lodash/fp/kebabCase';

type SizeProps = {
  [key: string]: MappedTokensProps;
};

export const fontSizesHeadings: SizeProps = {
  FontSizeHeadingXxl: {
    sampleText: 'H0 Heading XXL',
    mqBase: '32',
    mqSmall: '34',
    mqMedium: '40'
  },
  FontSizeHeadingXl: {
    sampleText: 'H1 Heading XL',
    mqBase: '24',
    mqSmall: '28',
    mqMedium: '32'
  },
  FontSizeHeadingLg: {
    sampleText: 'H2 Heading LG',
    mqBase: '22',
    mqSmall: '22',
    mqMedium: '24'
  },
  FontSizeHeadingMd: {
    sampleText: 'H3 Heading MD',
    mqBase: '18',
    mqSmall: '18',
    mqMedium: '20'
  },
  FontSizeHeadingSm: {
    sampleText: 'H4 Heading SM',
    mqBase: '16',
    mqSmall: '16',
    mqMedium: '16'
  },
  FontSizeHeadingXs: {
    sampleText: 'H5 Heading XS',
    mqBase: '14',
    mqSmall: '14',
    mqMedium: '14'
  }
};

export const fontSizesBody: SizeProps = {
  FontSizeBodyXl: {
    sampleText: 'Body XL',
    mqBase: '24'
  },
  FontSizeBodyLg: {
    sampleText: 'Body LG',
    mqBase: '20'
  },
  FontSizeBodyMd: {
    sampleText: 'Body MD',
    mqBase: '16'
  },
  FontSizeBodySm: {
    sampleText: 'Body SM',
    mqBase: '14'
  },
  FontSizeBodyXs: {
    sampleText: 'Body XS',
    mqBase: '12'
  }
};

export const typographyTokens: MappedTokensProps = {
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
  sizes: SizeProps;
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
        const { sampleText, ...rest } = value;

        return (
          <tr key={size}>
            <td>{key}</td>
            <td className="sb-variable">{size}</td>
            <td style={{ fontSize: `var(${size})` }}>{sampleText}</td>
            {Object.entries(rest).map(([sizeKey, sizeValue]) => (
              <td key={sizeKey}>{sizeValue} pixels</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
);

export const FontFamilies = () => (
  <table>
    <thead>
      <tr>
        <th scope="col">Token</th>
        <th scope="col">CSS variable</th>
        <th scope="col">Preview</th>
        <th scope="col">Application</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>FontPrimary</td>
        <td className="sb-variable">--font-primary</td>
        <td style={{ fontFamily: `var(--font-primary)` }}>
          Font primary preview
        </td>
        <td>Standard body text, headings and links</td>
      </tr>
      <tr>
        <td>FontSecondary</td>
        <td className="sb-variable">--font-secondary</td>
        <td style={{ fontFamily: `var(--font-secondary)` }}>
          Font secondary preview
        </td>
        <td>Main page headings and quote text (to be used sparingly)</td>
      </tr>
      <tr>
        <td>FontTertiary</td>
        <td className="sb-variable">--font-tertiary</td>
        <td style={{ fontFamily: `var(--font-tertiary)` }}>
          Font tertiary preview
        </td>
        <td>Image and video captions, licensing info</td>
      </tr>
    </tbody>
  </table>
);

/* eslint-disable import/prefer-default-export */
