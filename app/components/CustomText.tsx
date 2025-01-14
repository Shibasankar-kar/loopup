import React from 'react';
import {Text, StyleSheet, TextStyle, TextProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Fonts} from '../assets/component/component';

interface Props {
  fontFamily?: any;
  fontSize?: number;
  style?: TextStyle;
  children?: React.ReactNode;
  numberOfLines?: number;
}

const CustomText: React.FC<Props> = ({
  fontFamily = Fonts.regular,
  fontSize,
  style,
  children,
  numberOfLines,
}) => {
  const {colors} = useTheme();

  return (
    <Text
      style={[
        styles.text,
        {
          color: colors.text,
          fontSize: fontSize,
          fontFamily: fontFamily,
        },
        style,
      ]}
      numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});

export default CustomText;
