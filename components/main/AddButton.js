import React ,{ Component } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'


export class AddButton extends Component {
    render(){
        return (
            <View style = {[styles.container, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style = {[styles.button, styles.menu]}>
                        <AntDesign name = "plus" size = {24} color = "#fff" />
                    </Animated.View>
                </TouchableWithoutFeedback>

            </View>
    );
}}

const styles = StyleSheet.create({
    container: {
        
        alignItems: "center",
        position: "absolute",

    },
    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60/2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10}

    },
    
    menu: {
        backgroundColor: '#F02A4B'
    }
})
