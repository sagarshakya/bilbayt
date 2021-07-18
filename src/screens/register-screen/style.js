import {StyleSheet} from 'react-native';

import {spacings} from '../../config/theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: spacings.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
  },
});
