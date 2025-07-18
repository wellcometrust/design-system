import designSystemTokens from '@wellcometrust/wellcome-design-system/tokens-generated/wds-tokens.json';
import capitalise from 'utils/capitalise';

export const legacyTokens: {
  [key: string]: string;
} = {
  ColorLegacyGrey90: '#000',
  ColorLegacyGrey80: '#292929',
  ColorLegacyGrey70: '#5c5c5c',
  ColorLegacyGrey60: '#767676',
  ColorLegacyGrey50: '#878787',
  ColorLegacyGrey40: '#999',
  ColorLegacyGrey30: '#b3b3b3',
  ColorLegacyGrey20: '#ccc',
  ColorLegacyGrey10: '#e6e6e6',
  ColorLegacyGrey05: '#f2f2f2',
  ColorLegacyOrange90: '#331e0f',
  ColorLegacyOrange80: '#572b00',
  ColorLegacyOrange70: '#8a471e',
  ColorLegacyOrange60: '#b45c04',
  ColorLegacyOrange50: '#f07f0a',
  ColorLegacyOrange40: '#ffa64d',
  ColorLegacyOrange30: '#ffbf80',
  ColorLegacyOrange20: '#ffd9b2',
  ColorLegacyOrange10: '#ffeddb',
  ColorLegacyOrange05: '#fff7f0',
  ColorLegacyAmber90: '#382a00',
  ColorLegacyAmber80: '#4d3900',
  ColorLegacyAmber70: '#705400',
  ColorLegacyAmber60: '#946f00',
  ColorLegacyAmber50: '#c29207',
  ColorLegacyAmber40: '#e7ae04',
  ColorLegacyAmber30: '#fec200',
  ColorLegacyAmber20: '#ffe699',
  ColorLegacyAmber10: '#fff4d1',
  ColorLegacyAmber05: '#fffbf0',
  ColorLegacyYellow90: '#3d3800',
  ColorLegacyYellow80: '#574f00',
  ColorLegacyYellow70: '#706601',
  ColorLegacyYellow60: '#817818',
  ColorLegacyYellow50: '#bfa70d',
  ColorLegacyYellow40: '#ffea00',
  ColorLegacyYellow30: '#fff266',
  ColorLegacyYellow20: '#fff9a6',
  ColorLegacyYellow10: '#fffde2',
  ColorLegacyYellow05: '#fffef0',
  ColorLegacyGreen90: '#133800',
  ColorLegacyGreen80: '#2a512c',
  ColorLegacyGreen70: '#236126',
  ColorLegacyGreen60: '#4c8026',
  ColorLegacyGreen50: '#6ba136',
  ColorLegacyGreen40: '#8cc059',
  ColorLegacyGreen30: '#b6d99c',
  ColorLegacyGreen20: '#e6f1d3',
  ColorLegacyGreen10: '#f0f9e7',
  ColorLegacyGreen05: '#f7fcf2',
  ColorLegacyCyan90: '#002c33',
  ColorLegacyCyan80: '#00424d',
  ColorLegacyCyan70: '#005361',
  ColorLegacyCyan60: '#006272',
  ColorLegacyCyan50: '#009bb2',
  ColorLegacyCyan40: '#71bdd0',
  ColorLegacyCyan30: '#9dd8e7',
  ColorLegacyCyan20: '#beebf4',
  ColorLegacyCyan10: '#dcf4f9',
  ColorLegacyCyan05: '#f1fcfd',
  ColorLegacyBlue90: '#002e45',
  ColorLegacyBlue80: '#003170',
  ColorLegacyBlue70: '#004099',
  ColorLegacyBlue60: '#05c',
  ColorLegacyBlue50: '#1672f3',
  ColorLegacyBlue40: '#4d97ff',
  ColorLegacyBlue30: '#80b5ff',
  ColorLegacyBlue20: '#b3d2ff',
  ColorLegacyBlue10: '#dbeaff',
  ColorLegacyBlue05: '#f0f6ff',
  ColorLegacyRed90: '#40120d',
  ColorLegacyRed80: '#6c131d',
  ColorLegacyRed70: '#b3001e',
  ColorLegacyRed60: '#e10f2d',
  ColorLegacyRed50: '#e72343',
  ColorLegacyRed40: '#f04763',
  ColorLegacyRed30: '#f2637b',
  ColorLegacyRed20: '#ed858e',
  ColorLegacyRed10: '#f9cdca',
  ColorLegacyRed05: '#fff0f2',
};

export const uiTokens = Object.entries(designSystemTokens.color.UI).reduce(
  (acc, [key, value]) => {
    const colors = Object.entries(value).reduce(
      (colorAcc, [colorIntensity, colorString]) => {
        return {
          ...colorAcc,
          [`ColorUI${capitalise(key)}${colorIntensity}`]: colorString,
        };
      },
      {}
    );
    return { ...acc, ...colors };
  },
  {}
);

export const wdsTokens = Object.entries(designSystemTokens.color)
  .filter(([key]) => key !== 'UI')
  .reduce((acc, [key, value]) => {
    if (typeof value !== 'object') {
      return acc;
    }

    const colors = Object.entries(value).reduce(
      (colorAcc, [colorIntensity, colorString]) => {
        return {
          ...colorAcc,
          [`Color${capitalise(key)}${colorIntensity}`]: colorString,
        };
      },
      {}
    );

    return { ...acc, ...colors };
  }, {});

export const solidTokens = Object.entries(designSystemTokens.color)
  .filter(([key]) => key !== 'UI')
  .reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      return acc;
    }

    const color = { [`Color${capitalise(key)}`]: value };

    return { ...acc, ...color };
  }, {});

export default wdsTokens;
