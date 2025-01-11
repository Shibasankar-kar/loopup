import {Dimensions} from 'react-native';



export const SizeConfig = {
  width: Dimensions.get('window').width / 100,
  deviceWidth: Dimensions.get('window').width,
  height: Dimensions.get('window').height / 100,
  deviceHeight: Dimensions.get('window').height,
  fontSize: Dimensions.get('window').width / 100,
};
export interface FontsStyle {
  fontFamily: string;
  fontWeight: any;
}
export interface Fonts {
  bold: FontsStyle;
  semiBold: FontsStyle;
  medium: FontsStyle;
  regular: FontsStyle;
}

export const Fonts: Fonts = {
  bold: {
    fontFamily: 'RedHatDisplay-Bold',
    fontWeight: '700',
  },
  semiBold: {
    fontFamily: 'RedHatDisplay-SemiBold',
    fontWeight: '600',
  },
  medium: {
    fontFamily: 'RedHatDisplay-Medium',
    fontWeight: '500',
  },
  regular: {
    fontFamily: 'RedHatDisplay-Regular',
    fontWeight: '500',
  },
};
