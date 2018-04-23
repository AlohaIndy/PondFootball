import React from 'react';
import {TouchableOpacity, ImageBackground} from 'react-native';
import {
    Text,
    Content,
    Badge,
    Card,
    CardItem,
    Body,

} from "native-base";

import styles from "./styles";

const urlPhoto = "https://metrouk2.files.wordpress.com/2018/04/946262984.jpg?quality=80&strip=all&crop=0px%2C0px%2C1024px%2C512px&resize=650%2C325&w=644&h=322";

export default class TabTwo extends React.Component {
    render() {
        return (
            <Content style={{backgroundColor: '#DCDCDC'}}>
                <TouchableOpacity>
                    <Card>
                        <CardItem cardBody>
                            <ImageBackground
                                style={styles.background}
                                source={{
                                uri: urlPhoto
                            }}>
                                <Body style={styles.cardBoxText}>
                                    <Text style={styles.cardTextHeader}>
                                        ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง
                                    </Text>
                                </Body>
                            </ImageBackground>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.cardTextTime}>
                                    12 นาทีที่แล้ว
                                </Text>
                                <Text style={styles.cardTextBody}>
                                    เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ
                                    30 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Card>
                        <CardItem cardBody>
                            <ImageBackground
                                style={styles.background}
                                source={{
                                uri: urlPhoto
                            }}>
                                <Body style={styles.cardBoxText}>
                                    <Text style={styles.cardTextHeader}>
                                        ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง
                                    </Text>
                                </Body>
                            </ImageBackground>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.cardTextTime}>
                                    12 นาทีที่แล้ว
                                </Text>
                                <Text style={styles.cardTextBody}>
                                    เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ
                                    30 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Card>
                        <CardItem cardBody>
                            <ImageBackground
                                style={styles.background}
                                source={{
                                uri: urlPhoto
                            }}>
                                <Body style={styles.cardBoxText}>
                                    <Text style={styles.cardTextHeader}>
                                        ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง
                                    </Text>
                                </Body>
                            </ImageBackground>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.cardTextTime}>
                                    12 นาทีที่แล้ว
                                </Text>
                                <Text style={styles.cardTextBody}>
                                    เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ
                                    30 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Card>
                        <CardItem cardBody>
                            <ImageBackground
                                style={styles.background}
                                source={{
                                uri: urlPhoto
                            }}>
                                <Body style={styles.cardBoxText}>
                                    <Text style={styles.cardTextHeader}>
                                        ซาลาห์เข้าทำเนียบ!8แข้งยิงพรีเมียร์ฯทะลุ30ตุง
                                    </Text>
                                </Body>
                            </ImageBackground>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.cardTextTime}>
                                    12 นาทีที่แล้ว
                                </Text>
                                <Text style={styles.cardTextBody}>
                                    เปิดสถิติ โม ซาลาห์ ดาวเตะ ลิเวอร์พูล เป็นแข้ง พรีเมียร์ลีก คนที่ 8 ที่ยิงทะลุ
                                    30 ลูกในซีซั่นเดียว โดย 7 คนก่อนหน้าที่ทำได้มีใครบ้างไปดูกันได้เลย
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            </Content>
        );
    }
}
