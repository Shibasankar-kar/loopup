import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/RouteTypes';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';
import {Fonts, SizeConfig} from '../../assets/component/component';
import App from '../../../App';
import CustomInput from '../../components/CustomInput';
import {useTheme} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
interface signIn {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>;
}

const LoginScreen: FC<signIn> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={{height: insets.top}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
      </View>

      <View style={[styles.contentModal, {backgroundColor: colors.background}]}>
        <CustomText
          fontFamily={Fonts.bold}
          style={{
            fontSize: SizeConfig.fontSize * 7,
            textAlign: 'center',
            paddingVertical: SizeConfig.height * 1.6,
            fontWeight: '700',
          }}>
          Login
        </CustomText>
        <CustomText
          fontFamily={Fonts.bold}
          style={{
            fontSize: SizeConfig.fontSize * 4,
            textAlign: 'center',
          }}>
          Don't have an account?
        </CustomText>
        <CustomInput label="Name" />
        <CustomInput label="password" rightIcon={<Feather></Feather>} />
      </View>
    </View>
    // <View
    //   style={{
    //     backgroundColor: 'red',
    //     flex: 1,
    //     paddingHorizontal: SizeConfig.width * 5,
    //   }}>
    //   <View
    //     style={{
    //       backgroundColor: 'green',
    //       flex: 1,

    //       alignItems: 'center',
    //     }}>
    //     <View
    //       style={{
    //         backgroundColor: 'blue',
    //         paddingHorizontal: SizeConfig.width * 5,
    //         height: SizeConfig.height * 20,
    //         width: '100%',
    //       }}>
    //       <View style={{backgroundColor: 'red', flex: 1}}></View>
    //     </View>
    //   </View>
    // </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B72E7',
    justifyContent: 'center',
    padding: SizeConfig.width * 4.5,
  },
  contentModal: {
    borderColor: '#fff',
    borderWidth: 0.8,
    alignSelf: 'center',
    borderRadius: 12,
    padding: SizeConfig.width * 4,
    width: '100%',
  },
});
