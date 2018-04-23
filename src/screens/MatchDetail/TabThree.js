import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
    Text,
    Content,
    Badge,
    Card,
    CardItem,
    Body,
    View
} from "native-base";
import Timeline from 'react-native-timeline-listview';

// import styles from "./styles";

export default class TabThree extends React.Component {
    constructor() {
        super()
        this.onEventPress = this
            .onEventPress
            .bind(this)
        this.renderSelected = this
            .renderSelected
            .bind(this)
        this.renderDetail = this
            .renderDetail
            .bind(this)

        this.data = [
            {
                time: '09:00',
                title: 'ชื่อทีม',
                description: 'T. Nakamura เปลี่ยนตัวกับ D.Gerrad',
                icon: require('../../../assets/icon/event/football.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-' +
                        '8964-fe66e4d9be7a.jpg'
            }, {
                time: '10:45',
                title: 'ชื่อทีม',
                description: 'คำอธิบายเหตุการณ์',
                icon: require('../../../assets/icon/event/football.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-' +
                        '919b-c3f88ced349c.jpg'
            }, {
                time: '14:00',
                title: 'ชื่อทีม',
                description: 'คำอธิบายเหตุการณ์',
                icon: require('../../../assets/icon/event/football.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-' +
                        '8638-6025682232b1.jpg'
            }, {
                time: '16:30',
                title: 'ชื่อทีม',
                description: 'คำอธิบายเหตุการณ์ :)',
                icon: require('../../../assets/icon/event/football.png'),
                imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-' +
                        '8f1d-9dbc594d0cfa.jpg'
            }
        ]
        this.state = {
            selected: null
        }
    }

    onEventPress(data) {
        this.setState({selected: data})
    }

    renderSelected() {
        if (this.state.selected) 
            return <Text style={{
                marginTop: 10
            }}>Selected event: {this.state.selected.title}
                at {this.state.selected.time}</Text>
    }

    renderDetail(rowData, sectionID, rowID) {
        let title = <Text style={[styles.title]}>{rowData.title}</Text>
        var desc = null
        if (rowData.description && rowData.imageUrl) 
            desc = (
                <View style={styles.descriptionContainer}>
                    <Image
                        source={{
                        uri: rowData.imageUrl
                    }}
                        style={styles.image}/>
                    <Text style={[styles.textDescription]}>{rowData.description}</Text>
                </View>
            )

        return (
            <View style={{
                flex: 1
            }}>
                {title}
                {desc}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderSelected()}
                <Timeline
                    style={styles.list}
                    data={this.data}
                    circleSize={20}
                    circleColor='rgba(0,0,0,0)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{
                    minWidth: 52,
                    marginTop: 0
                }}
                    timeStyle={{
                    textAlign: 'center',
                    backgroundColor: 'orange',
                    color: 'white',
                    padding: 0,
                    borderRadius: 13,
                    fontFamily: fonts.Kanit
                }}
                    descriptionStyle={{
                    color: 'gray'
                }}
                    options={{
                    style: {
                        paddingTop: 5
                    }
                }}
                    innerCircle={'icon'}
                    onEventPress={this.onEventPress}
                    renderDetail={this.renderDetail}/>
            </View>
        );
    }
}

const {fonts} = require("../../utils/fonts");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 0,
        backgroundColor: 'white'
    },
    list: {
        flex: 1,
        marginTop: 0
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.KanitBold
    },
    descriptionContainer: {
        flexDirection: 'row',
        paddingRight: 50
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textDescription: {
        marginLeft: 10,
        color: 'gray',
        fontSize: 14,
        fontFamily: fonts.Kanit
    }
});