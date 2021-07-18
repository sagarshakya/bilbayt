import React from 'react';
import {View} from 'react-native';

import {spacings} from '../../config/theme';

export const HorizontalSpacer = ({size = spacings.xs}) => {
  return <View style={{width: size}} />;
};
