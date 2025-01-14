import {SafeAreaView, StatusBar, StyleSheet, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface BgWrapperProps {
  children: ReactNode;
}

const BgWrapper: React.FC<BgWrapperProps> = ({children}) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#9cfbe5', '#fff', '#eee']}
      style={styles.container}>
      <SafeAreaView style={{height: insets.top}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
      </SafeAreaView>
      {children}
    </LinearGradient>
  );
};

export default BgWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle, // Ensure the style is typed as a ViewStyle
});
