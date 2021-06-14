import * as React from 'react';
// import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import StateInfo from '../components/StateInfo';
import ListOfCities from '../components/ListOfCities';
import ListOfSelectedCities from '../components/ListOfSelectedCities';

const ListContainer = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ListOfCities/>
      <StateInfo/>
      <ListOfSelectedCities/>
    </SafeAreaView>
  );
};

export default ListContainer;

const styles = StyleSheet.create({
  container: {
      flex:10,
      backgroundColor:"#fff",
      width:"85%",
      marginBottom: 30,
      borderWidth:1.5,
      borderColor: "lightskyblue",
      borderRadius:5,
      flexDirection: "row"

  }
});
