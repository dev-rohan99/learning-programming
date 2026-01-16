/* eslint-disable */
import React, { Component } from 'react';
import { View, Text, Button, Alert } from "react-native";
import styles from "../styles/Style";


export default class ComponentOne extends Component {

    constructor(){
        super();
        this.state = {
            name: "Rohan Mostofa",
            age: 22,
            location: "Narail, Dhaka, Bangladesh"
        }
    }

    // state = {
    //     name: "Rohan Mostofa",
    //     age: "22"
    // }

    change = () => {
        this.setState({
            name: "SM Abdullah",
            age: 22,
            location: "Krishnapur, Chachuri Purulia, Narail, Dhaka, Bangladesh"
        });
    }

    alertShow = () => {
        Alert.alert("Are you sure?")
    }

    render() {
        return (
            <View>
                <Button onPress={this.alertShow} title="Alert Show" color={"coral"}/>
                <Text style={styles.title}>{this.props.componentName}</Text>
                <Text style={{color:'black'}}>{this.state.name}</Text>
                <Text style={{color:'black'}}>{this.state.age}</Text>
                <Text style={{color:'black'}}>{this.state.location}</Text>
                <Button onPress={this.change} title="Change Value"/>
            </View>
        )
    }
}
