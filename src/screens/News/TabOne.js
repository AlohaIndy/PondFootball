import React from 'react';
import {TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import {
    Text,
    Content,
    Badge,
    Card,
    CardItem,
    Body,
    Spinner
} from "native-base";

import styles from "./styles";

import API from "../../API";

export default class TabOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    };
    componentDidMount() {
        // return fetch(API.newsone).then((response) =>
        // response.json()).then((responseJson) => {   this     .setState({ isLoading:
        // false,       dataSource: responseJson.movies     }, function () {});
        // }).catch((error) => {   console.error(error); });
        this.setState({
            isLoading: false,
            dataSource: [
                {
                    "id": "0",
                    "key": "keyNews",
                    "header": "ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง",
                    "body": "เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ 3" +
                            "0 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย",
                    "time": "12 นาทีที่แล้ว",
                    "image": "http://epi-rsc.rsc-cdn.org/globalassets/00-sitewide/media/1734_news-and-events-h" +
                            "eader_f1-2400.jpg?version=3f1b984a&width=1120&format=jpg&quality=70"
                }, {
                    "id": "1",
                    "key": "keyNews",
                    "header": "ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง",
                    "body": "เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ 3" +
                            "0 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย",
                    "time": "12 นาทีที่แล้ว",
                    "image": "http://epi-rsc.rsc-cdn.org/globalassets/00-sitewide/media/1734_news-and-events-h" +
                            "eader_f1-2400.jpg?version=3f1b984a&width=1120&format=jpg&quality=70"
                }, {
                    "id": "2",
                    "key": "keyNews",
                    "header": "ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง",
                    "body": "เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ 3" +
                            "0 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย",
                    "time": "12 นาทีที่แล้ว",
                    "image": "http://epi-rsc.rsc-cdn.org/globalassets/00-sitewide/media/1734_news-and-events-h" +
                            "eader_f1-2400.jpg?version=3f1b984a&width=1120&format=jpg&quality=70"
                }, {
                    "id": "3",
                    "key": "keyNews",
                    "header": "ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง",
                    "body": "เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ 3" +
                            "0 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย",
                    "time": "12 นาทีที่แล้ว",
                    "image": "http://epi-rsc.rsc-cdn.org/globalassets/00-sitewide/media/1734_news-and-events-h" +
                            "eader_f1-2400.jpg?version=3f1b984a&width=1120&format=jpg&quality=70"
                }, {
                    "id": "4",
                    "key": "keyNews",
                    "header": "ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง",
                    "body": "เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ 3" +
                            "0 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย",
                    "time": "12 นาทีที่แล้ว",
                    "image": "http://epi-rsc.rsc-cdn.org/globalassets/00-sitewide/media/1734_news-and-events-h" +
                            "eader_f1-2400.jpg?version=3f1b984a&width=1120&format=jpg&quality=70"
                }, {
                    "id": "5",
                    "key": "keyNews",
                    "header": "ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง",
                    "body": "เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ 3" +
                            "0 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย",
                    "time": "12 นาทีที่แล้ว",
                    "image": "http://epi-rsc.rsc-cdn.org/globalassets/00-sitewide/media/1734_news-and-events-h" +
                            "eader_f1-2400.jpg?version=3f1b984a&width=1120&format=jpg&quality=70"
                }
            ]
        });
    };
    _linkdata = (keylink) => {
        alert(keylink);
    };
    render() {
        if (this.state.isLoading) {
            return (
                <Content
                    style={{
                    backgroundColor: '#DCDCDC'
                }}>
                    <Spinner color='orange'/>
                </Content>
            )
        }
        return (
            <Content style={{
                backgroundColor: '#DCDCDC'
            }}>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <TouchableOpacity onPress={() => this._linkdata(item.key)}>
                    <Card>
                        <CardItem cardBody>
                            <ImageBackground
                                style={styles.background}
                                source={{
                                uri: item.image
                            }}>
                                <Body style={styles.cardBoxText}>
                                    <Text style={styles.cardTextHeader}>
                                        {item.header}
                                    </Text>
                                </Body>
                            </ImageBackground>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.cardTextTime}>
                                    {item.time}
                                </Text>
                                <Text style={styles.cardTextBody}>
                                    {item.body}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>}
                    keyExtractor={item => item.id}/>

            </Content>
        );
    }
}
