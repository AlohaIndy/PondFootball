const React = require("react-native");
const {Dimensions, Platform} = React;

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
		}
};
