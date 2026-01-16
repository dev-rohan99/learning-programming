/* eslint-disable */
import React, { Component } from 'react';
import { View } from "react-native";
import ComponentOne from '../components/ComponentOne';
import ComponentTwo from '../components/ComponentTwo';
import CountryList from '../components/CountryList';
import CardSlider from '../components/CardSlider';


export default class Home extends Component {
  render() {
    return (
      <View>

        <ComponentOne componentName={"Component One"}/>
        <ComponentTwo componentName={"Component Two"}/>
        <CardSlider/>
        <CountryList/>

      </View>
    )
  }
}
