import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CustomText from '../../../components/CustomText';
import {Fonts} from '../../../assets/component/component';

interface SocialLoginButtonProps {
  onPress: () => void;
  text: string;
  icon: React.ReactNode;
}

const SocialLoginButton: FC<SocialLoginButtonProps> = ({
  text,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}>
      {icon}
      {text && (
        <CustomText fontFamily={Fonts.medium} style={styles.text}>
          {text}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    gap: 10,
  },
  text: {
    color: 'black',
  },
});

export default SocialLoginButton;
