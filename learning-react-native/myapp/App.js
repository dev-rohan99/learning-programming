/* eslint-disable */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Home from './pages/Home';
import styles from "./styles/Style";

export default class App extends Component {

  render() {
    return (
      <ScrollView style={[styles.body]}>
          <Home/>
      </ScrollView>
    )
  }
}


