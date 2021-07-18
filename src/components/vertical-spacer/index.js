import React from 'react';
import {View} from 'react-native';

import {spacings} from '../../config/theme';

export const VerticalSpacer = ({size = spacings.xs}) => {
  return <View style={{height: size}} />;
};
