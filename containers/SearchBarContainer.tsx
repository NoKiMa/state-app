import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const SearchBarContainer =  ()=>  {

    return (
        <View style={styles.main_container}>
            <TextInput
            styles={styles.input}
            placeholder="Search"
            />
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
        marginBottom:25
    },
    input: {
        paddingLeft:15,
        fontSize:25,

    }
})