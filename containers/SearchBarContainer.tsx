import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBarContainer =  ()=>  {

    return (
        <View style={styles.main_container}>
            <View style={styles.input_container}>
                <TextInput
            styles={styles.input}
            placeholder="Search"
            />
            </View>
            
        {/* <FontAwesome5 name="book" size={30} color="#4F8EF7" /> */}
        <View style={styles.icon_container}>
           <Icon name="times" size={20} color="#323131" /> 
        </View>
        
        </View>
    )

}

export default SearchBarContainer;

const styles = StyleSheet.create({
    main_container:{
        flex: 0.7,
        backgroundColor:"#fff",
        height: 55,
        width: "85%",
        borderWidth:1.5,
        borderColor: "lightskyblue",
        borderRadius:5,
        marginTop: 25,
        marginBottom:25,
        flexDirection: "row",
    },
    input: {
        paddingLeft:15,
        fontSize:25,

    },
    icon_container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    input_container:{
        flex:9,
    }
})