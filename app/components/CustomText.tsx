import React from 'react';
import {Text, StyleSheet, TextStyle, TextProps, View} from 'react-native';
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
        },
        style,
      ]}
      numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});
