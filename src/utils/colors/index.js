const mainColors = {
  blue1: '#487CFF',
  blue2: '#0BCAD4',
  dark1: '#112340',
  dark2: '#2B5DDB',
  gray1: '#7D8797',
  gray2: '#E9E9E9',
};

export const colors = {
  primary: mainColors.blue1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
    active: mainColors.blue2,
    inActive: mainColors.dark2,
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
};
