/* eslint-disable */
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import styles from "../styles/Style";

export default class CountryList extends Component {


    myData = [
        {id: 554, title: "Bangladesh", subtitle: "Mycountry"},
        {id: 555, title: "India", subtitle: "MyCountry"},
        {id: 556, title: "Canada", subtitle: "MyCountry"}, 
        {id: 557, title: "Pakistan", subtitle:"Country"},
        {id: 558, title: "America", subtitle: "MyCountry"},
        {id: 559, title: "France", subtitle: "MyCountry"},
        {id: 551, title: "Spain",subtitle: "MyCountry"},
        {id: 550, title: "Italy", subtitle: "MyCountry"},
        {id: 552, title: "Portugal", subtitle: "MyCountry"},
        {id: 553, title: "Africa", subtitle: "myCountry"}
    ];

    onClickItem = (alertTitle) => {
        Alert.alert(`Are you from ${alertTitle}`);
    }

    ChildView = ({ChildTitle, ChildSubTitle}) => {
        return (
            <View onPress={this.onClickItem.bind(ChildTitle)} style={styles.card}>
                <Text style={styles.cardTitle}>{ChildTitle}</Text>
                <Text style={styles.cardTitle2}>{ChildSubTitle}</Text>
            </View>
        )
    }

    render() {
        return (
            <FlatList data={this.myData} renderItem={({item}) => <this.ChildView ChildTitle={item.title} ChildSubTitle={item.subtitle}/>} keyExtractor={item => item.id}/>
        )
    }
}
