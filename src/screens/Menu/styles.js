const React = require("react-native");
const {Dimensions, Platform} = React;

const {fonts} = require("../../utils/fonts");

const deviceHeight = Dimensions
				.get("window")
				.height;
const deviceWidth = Dimensions
				.get("window")
				.width;

export default {
				text : {
								fontFamily: fonts.Kanit
				},
				listText : {
								fontFamily: fonts.Kanit,
								fontSize: 14
				},
				textName : {
								alignSelf: 'center',
								fontFamily: fonts.KanitBold,
								paddingLeft: 10,
								color: 'orange'
				},
				barProfile : {
								backgroundColor: 'black',
								flexDirection: 'row',
								padding: 16
				}
};
