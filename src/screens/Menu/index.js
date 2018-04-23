import React from 'react';
import {View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {
    Text,
    Container,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Footer,
    FooterTab,
    Badge,
    List,
    ListItem,
    Thumbnail
} from "native-base";
import {Col, Row, Grid} from 'react-native-easy-grid';

import styles from "./styles";

const urlPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4h6I3mMYRMYflFTvRQjSS8_vCTgC677yJaLnD8L0yaEiDH1e";

export default class Menu extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <Content  style={{backgroundColor: '#DCDCDC'}}>
                    <TouchableOpacity>
                        <View style={styles.barProfile}>
                            <Thumbnail large source={{uri: urlPhoto}} style={{borderWidth: 3, borderColor: 'orange'}} />
                            <Text style={styles.textName}>Sirakorn Mongkud</Text>
                        </View>
                    </TouchableOpacity>
                    <List style={{backgroundColor: 'white'}}>
                        <TouchableOpacity>
                            <ListItem>
                                <Text style={styles.listText}>อันดับฟีฟ่า</Text>
                            </ListItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem>
                                <Text style={styles.listText}>เอาโฆษณาออก</Text>
                            </ListItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem>
                                <Text style={styles.listText}>การตั้งค่า</Text>
                            </ListItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem>
                                <Text style={styles.listText}>ส่งความคิดเห็น</Text>
                            </ListItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem>
                                <Text style={styles.listText}>นโยบายความเป็นส่วนตัว</Text>
                            </ListItem>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListItem>
                                <Text style={styles.listText}>ออกจากระบบ</Text>
                            </ListItem>
                        </TouchableOpacity>
                    </List>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            onPress={() => {
                            this
                                .props
                                .navigation
                                .navigate('Match')
                        }}>
                            <Icon name="stopwatch"/>
                            <Text style={styles.text}>แมตช์</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => {
                            this
                                .props
                                .navigation
                                .navigate('News')
                        }}>
                            <Icon name="globe"/>
                            <Text style={styles.text}>ข่าวสาร</Text>
                        </Button>
                        <Button
                            badge
                            vertical
                            onPress={() => {
                            this
                                .props
                                .navigation
                                .navigate('Follow')
                        }}>
                            <Badge >
                                <Text>51</Text>
                            </Badge>
                            <Icon active name="star"/>
                            <Text style={styles.text}>ติดตาม</Text>
                        </Button>
                        <Button
                            active
                            vertical
                            onPress={() => {
                            this
                                .props
                                .navigation
                                .navigate('Menu')
                        }}>
                            <Icon name="menu"/>
                            <Text style={styles.text}>เมนู</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
