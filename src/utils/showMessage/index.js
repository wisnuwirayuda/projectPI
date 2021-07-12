import {showMessage} from 'react-native-flash-message';
import {colors} from '../';

export const showError = message => {
  showMessage({
    message: message,
    type: 'default',
    duration: 2000,
    backgroundColor: colors.error,
    color: colors.white,
  });
};

export const showSuccess = message => {
  showMessage({
    message: message,
    type: 'success',
    duration: 2000,
  });
};
