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
interface signIn {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>;
}

const LoginScreen: FC<signIn> = ({navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={{height: insets.top}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
      </View>

      <View style={styles.contentModal}>
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
            fontSize: SizeConfig.fontSize * 3,
            textAlign: 'center',
          }}>
          Don't have an account?
        </CustomText>
        <CustomInput label="Name" />
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
    backgroundColor: 'green',
    justifyContent: 'center',
    padding: SizeConfig.width * 4.5,
  },
  contentModal: {
    backgroundColor: 'rgba(255,255,255,.6)',
    alignSelf: 'center',
    borderRadius: 12,
    padding: SizeConfig.width * 4,
    width: '100%',
  },
});
