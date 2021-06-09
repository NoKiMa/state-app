import * as React from 'react';
import { Text, View, FlatList,SafeAreaView, StyleSheet } from 'react-native';
import CityInfo from '../components/CityInfo';
import ListOfCities from '../components/ListOfCities';
import ListOfSelectedCities from '../components/ListOfSelectedCities';

interface ListContainerProps {}

const ListContainer = (props: ListContainerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListOfCities/>
      <CityInfo/>
      <ListOfSelectedCities/>
    </SafeAreaView>
  );
};

export default ListContainer;

const styles = StyleSheet.create({
  container: {
      flex:9.5,
      backgroundColor:"#fff",
      width:"85%",
      marginBottom: 50,
      borderWidth:1.5,
      borderColor: "lightskyblue",
      borderRadius:5,
      flexDirection: "row"

  }
});
