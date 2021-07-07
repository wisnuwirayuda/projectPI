const mainColors = {
  blue1: '#487CFF',
  blue2: '#0BCAD4',
  blue3: '#EDFCFD',
  dark1: '#112340',
  dark2: '#2B5DDB',
  dark3: '#C7C7C7',
  gray1: '#7D8797',
  gray2: '#E9E9E9',
  gray3: '#EDEEF0',
  border1: '#0066CB',
};

export const colors = {
  primary: mainColors.blue1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  disable: mainColors.gray3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
    active: mainColors.blue2,
    inActive: mainColors.dark2,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.blue1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  icon: {
    active: mainColors.blue2,
    inActive: mainColors.dark2,
  },
  border: mainColors.gray2,
  borderFocus: mainColors.border1,
  card: {
    primary: mainColors.blue2,
    secondary: mainColors.blue3,
  },
};
