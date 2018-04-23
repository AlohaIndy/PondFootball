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
				background : {
								height: 200,
								width: null,
								flex: 1
				},
				text : {
								fontFamily: fonts.Kanit
				},
				cardTextHeader : {
								fontFamily: fonts.Kanit,
								color: 'white',
								fontSize: 18
				},
				cardTextTime : {
								fontFamily: fonts.Kanit,
								color: 'gray',
								fontSize: 12
				},
				cardTextBody : {
								fontFamily: fonts.Kanit,
								color: 'black',
								fontSize: 14
				},
				cardBoxText : {
								padding: 16,
								justifyContent: 'flex-end',
								alignItems: 'flex-start'
				}
};
