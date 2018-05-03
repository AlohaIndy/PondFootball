import React from 'react';
import {
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage
} from 'react-native';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Button,
    Label,
    Icon
} from "native-base";
import {NavigationActions} from "react-navigation";
import {Col, Row, Grid} from 'react-native-easy-grid';

import styles from "./styles";

import API from '../../API';

const bg = require("../../../assets/bg/bg-01.png");
const logo = require("../../../assets/logo/logo.png");
const logoFacebook = require("../../../assets/icon/banner/facebook.png");
const logoGoogle = require("../../../assets/icon/banner/google.png");
const logoTwitter = require("../../../assets/icon/banner/twitter.png");

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            inputUsername: false,
            inputPassword: false,
            inputUsernamePlaceholder: 'Username',
            inputPasswordPlaceholder: 'Password'
        };
    };
    componentDidMount() {
        this
            ._loadInitialState()
            .done();
    };
    _loadInitialState = async() => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this
                .props
                .navigation
                .dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: "Match"})]
                }));
        };
    };
    login = async() => {
        alert('URL => ' + API.login);
        // this.setState({     inputUsername: true,     inputPassword: false,
        // inputUsernamePlaceholder: '5555',     inputPasswordPlaceholder: 'Password',
        // });

        await AsyncStorage.setItem('user', 'token');
        this
            .props
            .navigation
            .dispatch(NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: "Match"})]
            }));

        // fetch(API.login, {     method: 'POST',     headers: {         'Accept':
        // 'application/json',         'Content-Type': 'application/json'     }, body:
        // JSON.stringify({username: this.state.username, password:
        // this.state.password}) }).then((response) => response.json()).then((res) => {
        //  if (res.succes === true) {         await AsyncStorage.setItem('user',
        // res.user); this.props.navigation.dispatch(     NavigationActions.reset({
        // index: 0,       actions: [NavigationActions.navigate({ routeName: "Match" })]
        //     })   );     } else {         alert(res.message);     } })
    };
    render() {
        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={{
                flex: 1
            }}>
                <Container>
                    <StatusBar barStyle="light-content"/>
                    <ImageBackground source={bg} style={styles.background}>
                        <Content
                            contentContainerStyle={{
                            flex: 1
                        }}>
                            <View
                                style={[
                                styles.center, {
                                    flex: 4
                                }
                            ]}>
                                <Image source={logo} style={styles.logo}/>
                            </View>
                            <View
                                style={[{
                                    flex: 5
                                }
                            ]}>
                                <Form
                                    style={{
                                    paddingRight: 30,
                                    paddingLeft: 30,
                                    marginTop: 10
                                }}>
                                    <Item
                                        error={this.state.inputUsername}
                                        rounded
                                        style={styles.inputLoginUsername}>
                                        <Input
                                            style={styles.inputText}
                                            placeholder={this.state.inputUsernamePlaceholder}
                                            onChangeText={(username) => this.setState({username})}/>
                                        <Icon name='close-circle'/>
                                    </Item>
                                    <Item
                                        error={this.state.inputPassword}
                                        rounded
                                        style={styles.inputLoginPassword}>
                                        <Input
                                            secureTextEntry={true}
                                            style={styles.inputText}
                                            placeholder={this.state.inputPasswordPlaceholder}
                                            onChangeText={(password) => this.setState({password})}/>
                                        <Icon name='close-circle'/>
                                    </Item>
                                    <Button block light style={styles.btnLogin} onPress={this.login}>
                                        <Text style={styles.btnLoginText}>Log in</Text>
                                    </Button>
                                </Form>
                                <TouchableOpacity
                                    style={{
                                    marginTop: 20
                                }}>
                                    <Text style={styles.text}>Forgot your password?</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={[{
                                    flex: 2
                                }
                            ]}>
                                <Grid>
                                    <Row
                                        size={2}
                                        style={{
                                        marginBottom: 15
                                    }}>
                                        <Col
                                            style={[
                                            styles.center, {
                                                marginLeft: 30
                                            }
                                        ]}>
                                            <View style={styles.viewBar}/>
                                        </Col>
                                        <Col style={styles.center}>
                                            <Text style={styles.text}>Or Log in with</Text>
                                        </Col>
                                        <Col
                                            style={[
                                            styles.center, {
                                                marginRight: 30
                                            }
                                        ]}>
                                            <View style={styles.viewBar}/>
                                        </Col>
                                    </Row>
                                    <Row size={6}>
                                        <Col size={2} style={styles.center}></Col>
                                        <Col size={2}>
                                            <TouchableOpacity style={styles.center}>
                                                <Image source={logoGoogle} style={styles.logoWith}/>
                                                <Text style={styles.textWith}>Google+</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col size={2}>
                                            <TouchableOpacity style={[styles.center]}>
                                                <Image source={logoFacebook} style={styles.logoWith}/>
                                                <Text style={styles.textWith}>Facebook</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col size={2}>
                                            <TouchableOpacity style={[styles.center]}>
                                                <Image source={logoTwitter} style={styles.logoWith}/>
                                                <Text style={styles.textWith}>Twitter</Text>
                                            </TouchableOpacity>
                                        </Col>
                                        <Col size={2} style={styles.center}></Col>
                                    </Row>
                                </Grid>
                            </View>
                            <View
                                style={[
                                styles.center, {
                                    flex: 2
                                }
                            ]}>
                                <Grid>
                                    <Col
                                        style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        paddingLeft: 30
                                    }}>
                                        <Button bordered light style={styles.btnFooter}>
                                            <Text style={styles.text}>Register</Text>
                                        </Button>
                                    </Col>
                                    <Col
                                        style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        paddingRight: 30
                                    }}>
                                        <Button
                                            onPress={() => {
                                            this
                                                .props
                                                .navigation
                                                .dispatch(NavigationActions.reset({
                                                    index: 0,
                                                    actions: [NavigationActions.navigate({routeName: "Match"})]
                                                }));
                                        }}
                                            bordered
                                            light
                                            style={styles.btnFooter}>
                                            <Text style={styles.text}>Skip</Text>
                                        </Button>
                                    </Col>
                                </Grid>
                            </View>
                        </Content>
                    </ImageBackground>
                </Container>
            </KeyboardAvoidingView>
        );
    }
}
