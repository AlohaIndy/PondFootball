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
				headerText : {
								fontFamily: fonts.Kanit,
								alignSelf: 'center',
								paddingLeft: 5,
								paddingRight: 5,
								color: 'white'
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
				cardTextHeaderTabOne : {
								fontFamily: fonts.KanitBold,
								color: 'orange',
								fontSize: 17
				},
				cardTextHeaderTabFour : {
								fontFamily: fonts.KanitBold,
								color: 'black',
								fontSize: 17
				},
				cardTextHeaderSecondTabOne : {
								fontFamily: fonts.KanitBold,
								color: 'black',
								fontSize: 15
				},
				cardTextBodyTabOne : {
								fontFamily: fonts.Kanit,
								color: 'black',
								fontSize: 15
				},
				cardTextBodyTabFour : {
								fontFamily: fonts.Kanit,
								color: 'black',
								fontSize: 15
				},
				cardTextBodySecondTabOne : {
								fontFamily: fonts.Kanit,
								color: 'gray',
								fontSize: 15,
								alignSelf: 'flex-end'
				},
				cardTextBodySecondTabSeven : {
								fontFamily: fonts.Kanit,
								color: 'gray',
								fontSize: 12
				},
				cardTextBodySecondTabNine : {
								fontFamily: fonts.Kanit,
								color: 'black',
								fontSize: 12
				},
				cardBoxText : {
								padding: 16,
								justifyContent: 'flex-end',
								alignItems: 'flex-start'
				}
};
