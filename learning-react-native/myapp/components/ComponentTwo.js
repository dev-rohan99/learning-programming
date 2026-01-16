/* eslint-disable */
import { Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';
import styles from "../styles/Style";


const ComponentTwo = ({componentName}) => {

    const [state, setState] = useState({
        name: "Rohan Mostofa",
        location: "Narail, Dhaka, Bangladesh"
    });

    const changeVal = () => {
        setState({
            name: "SM Abdullah",
            location: "Krishnapur, Chachuri Purulia, Narail, Dhaka, Bangladesh"
        })
    }

    return (
        <View>
            
            <Text style={styles.title}>{componentName}</Text>
            <Text style={{color:'black'}}>{state.name}</Text>
            <Text style={{color:'black'}}>{state.location}</Text>
            <Button onPress={changeVal} title={"Change Value"}/>

            <View style={{flex:50}}>
                <Image style={{width:200,height:70,borderRadius:20,marginTop:20}} source={require('../images/cardImage.jpg')}/>
            </View>

            <View style={{flex:50}}>
                <Image style={{width:200,height:70,borderRadius:20,marginTop:20}} source={{uri:'https://content.pymnts.com/wp-content/uploads/2016/06/Credit-Cards-Stack.jpg'}}/>
            </View>

            <Image style={{width:200,height:70,borderRadius:20,marginTop:20,shadowColor:'black'}} source={require('../images/cardImage.jpg')}/>
            <Image style={{width:200,height:70,borderRadius:20,marginTop:20,shadowColor:'black',marginBottom:20}} source={{uri:'https://content.pymnts.com/wp-content/uploads/2016/06/Credit-Cards-Stack.jpg'}}/>

        </View>
    )
}

export default ComponentTwo;
