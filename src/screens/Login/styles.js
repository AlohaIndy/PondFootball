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
								width: deviceWidth,
								height: deviceHeight,
								backgroundColor: "white"
				},
				center : {
								justifyContent: 'center',
								alignItems: 'center'
				},
				logo : {
								resizeMode: "contain",
								height: deviceWidth / 3
				},
				logoWith : {
								resizeMode: "contain",
								height: 30
				},
				btnLogin : {
								borderRadius: 19,
								width: deviceWidth / 2,
								height: 40,
								alignSelf: "center"
				},
				btnLoginText : {
								fontSize: 19,
								fontFamily: fonts.Kanit,
								color: 'black'
				},
				inputLoginUsername : {
								height: 40,
								marginBottom: 15,
								backgroundColor: 'black',
								borderRadius: 19,
								paddingLeft: 10,
								paddingRight: 10,
								borderColor: 'gray'
				},
				inputLoginPassword : {
								height: 40,
								marginBottom: 15,
								backgroundColor: 'black',
								borderRadius: 19,
								paddingLeft: 10,
								paddingRight: 10,
								borderColor: 'gray'
				},
				inputText : {
								fontFamily: fonts.Kanit,
								color: 'white'
				},
				text : {
								fontFamily: fonts.Kanit,
								color: 'white',
								alignSelf: 'center'
				},
				textWith : {
								fontFamily: fonts.Kanit,
								color: 'white',
								alignSelf: 'center',
								fontSize: 10
				},
				viewBar : {
								//	borderRadius: 19,
								width: deviceWidth / 4,
								height: 2,
								alignSelf: "center",
								backgroundColor: "white"
				},
				btnLoginWith : {
								backgroundColor: "red"
				},
				btnFooter : {
								width: 80,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 19,
								height: 40
				}
};
