import React from 'react';
import {ImageBackground, View, Image, Animated, AsyncStorage} from 'react-native';

import styles from "./styles";

const bg = require("../../../assets/bg/bg-01.png");
const logo = require("../../../assets/logo/logo.png");

export default class Splash extends React.Component {
    static navigationOptions = {
        header: null
    };
    componentWillMount() {
        setTimeout( async() => {
            var value = await AsyncStorage.getItem('user');
            if (value !== null) {
                this
                    .props
                    .navigation
                    .navigate('Match');
            } else {
                this
                    .props
                    .navigation
                    .navigate('Login')
            };

        }, 3000)
    }
    render() {
        return (
            <ImageBackground source={bg} style={styles.background}>
                <View
                    style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FadeInView>
                        <Image source={logo} style={styles.imageLogo}/>
                    </FadeInView>
                </View>
            </ImageBackground>
        );
    }
}

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0)
    }

    componentDidMount() {
        Animated
            .timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 2000
        })
            .start();
    }

    render() {
        let {fadeAnim} = this.state;

        return (
            <Animated.View
                style={{
                ...this.props.style,
                opacity: fadeAnim
            }}>
                {this.props.children}
            </Animated.View>
        );
    }
}
