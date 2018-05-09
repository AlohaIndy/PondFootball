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
				cardText : {
								fontFamily: fonts.Kanit,
								fontSize: 14
				},
				image : {
								height: 30,
								width: 23,
								marginRight: 5
				},
				colRigth : {
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-end'
				},
				colLeft : {
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start'
				},
				cardTextHeader : {
								fontFamily: fonts.KanitBold,
								color: 'black',
								fontSize: 16
				},
				cardImageHeader : {
								height: 40,
								width: 40,
								marginRight: 5
				},
				cardTextBody : {
								fontFamily: fonts.Kanit,
								color: 'black',
								fontSize: 14
				},
				cardTextBodyPale : {
								fontFamily: fonts.Kanit,
								color: 'gray',
								fontSize: 12
				},
				cardTextBodyCenter : {
								fontFamily: fonts.Kanit,
								color: 'black',
								fontSize: 12
				},
				cardImageBody : {
								height: 30,
								width: 20
				},
				cardColCenter : {
								justifyContent: 'center',
								alignItems: 'center'
				},
				cardColLeft : {
								justifyContent: 'center',
								alignItems: 'flex-start',
								paddingLeft: 5
				},
				cardColRight : {
								justifyContent: 'center',
								alignItems: 'flex-end',
								paddingRight: 5
				},
				cardColIcon : {
								justifyContent: 'center',
								alignItems: 'flex-end',
								paddingRight: 0
				}
};
