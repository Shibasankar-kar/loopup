import {useTheme} from '@react-navigation/native';
import React, {ReactNode, useState} from 'react';
import {StyleSheet, View, TextInput, TextStyle, Text} from 'react-native';
import {Fonts, SizeConfig} from '../assets/component/component';
import BgWrapper from '../screens/Auth/components/BgWrapper';

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
  multiline?: boolean;
  numberOfLines?: number;
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
  multiline = false,
  numberOfLines = 4,
  ...props
}) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.inputMainContainer, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.BtmContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              textInputStyle,
              multiline ? styles.multilineInput : null,
            ]}
            multiline={multiline}
            numberOfLines={numberOfLines}
            onChangeText={text => {
              console.log('tes', text);
            }}
            {...props}
          />
        </View>
        {rightIcon && rightIcon}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputMainContainer: {
    alignSelf: 'center',
    width: '100%',
    paddingVertical: SizeConfig.height * 0.8,
  },
  label: {
    paddingVertical: SizeConfig.height * 0.6,
    fontSize: SizeConfig.fontSize * 3.8,
    paddingBottom: SizeConfig.height,
    paddingHorizontal: SizeConfig.width * 0.5,
    color: '#6C7278',
  },
  BtmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    borderRadius: SizeConfig.width * 1.5,
    borderColor: '#ECF1F3',
    borderWidth: 1,
    paddingHorizontal: SizeConfig.width * 0.5,
  },
  input: {
    width: '100%',
    height: SizeConfig.height * 4,
    fontSize: SizeConfig.fontSize * 3.8,
    paddingHorizontal: SizeConfig.width * 1,
  },
  multilineInput: {
    height: 'auto',
    minHeight: SizeConfig.height * 3,
    maxHeight: SizeConfig.height * 6,
    textAlignVertical: 'top',
  },
  errorText: {
    color: 'red',
    fontSize: SizeConfig.fontSize * 3.5,
    marginTop: SizeConfig.height * 0.5,
    paddingHorizontal: SizeConfig.width * 0.5,
  },
});
