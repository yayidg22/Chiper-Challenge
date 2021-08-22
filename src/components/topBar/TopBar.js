import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../theme/Colors';

export default function TopBar({ content,selectedMenu,setSelectedMenu }) {

    const Button = ({onPress,title,id}) => {
         return (
            <TouchableOpacity style={selectedMenu != id ? styles.buttonContainer : styles.buttonSelectedContainer} onPress={ () => {
               setSelectedMenu(id);
                onPress();
            }}>
                <Text style={selectedMenu != id ? styles.buttonTitle : styles.buttonSelectedTitle}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {content.map((item) => (
                <Button key={item.id} id={item.id} onPress={item.onPress} title={item.title}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:hp('7%'),
        flexDirection:'row',
        backgroundColor: Colors.white,
        alignItems: 'center',
        borderColor:Colors.primaryColor,
        borderWidth:wp('0.2%'),
        borderEndWidth:0,
        borderStartWidth:0
    },
    buttonContainer:{
        flex:1,
        height:'100%',
        backgroundColor:Colors.white,
        justifyContent:'center'
    },
    buttonSelectedContainer:{
        flex:1,
        height:'100%',
        backgroundColor:Colors.primaryColor,
        justifyContent:'center'

    },  
    buttonTitle:{
        color:Colors.primaryColor,
        fontSize:wp('5%'),
        textAlign:'center'
    },
    buttonSelectedTitle:{
        color:Colors.white,
        fontSize:wp('5%'),
        textAlign:'center'
    },
    

});