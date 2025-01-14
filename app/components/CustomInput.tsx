import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TextStyle, Text} from 'react-native';
import {Fonts, SizeConfig} from '../assets/component/component';

interface InputProps {
  label?: string;
  iconName?: string;
  error?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disabled?: boolean;
  disabledBackground?: boolean;
  password?: boolean;
  textTop?: boolean;
  containerStyle?: TextStyle;
  required?: boolean;
  textInputStyle?: TextStyle;
  onFocus?: () => void;
}

const CustomInput: React.FC<
  InputProps & React.ComponentProps<typeof TextInput>
> = ({
  label,
  iconName,
  error,
  rightIcon,
  leftIcon,
  disabled,
  disabledBackground,
  password,
  textTop,
  required,
  containerStyle,
  textInputStyle,
  onFocus = () => {},
  ...props
}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.inputMainContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        {rightIcon && <Text>+</Text>}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputMainContainer: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  label: {
    paddingVertical: SizeConfig.height * 0.6,
    fontSize: SizeConfig.fontSize * 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SizeConfig.width * 1.5,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
  },
  input: {
    width: '100%',
  },
});
