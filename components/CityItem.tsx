import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type CityItemProps = {
    cityName: string;
    // id: string;
}

const CityItem = (props: CityItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:15, color:"#000000"}}>{props.cityName}</Text>
    </View>
  );
};

export default CityItem;

const styles = StyleSheet.create({
  container: {
      height:45,
      width: "95%",
      borderBottomWidth:0.5,
      borderRadius:3,
    //   alignItems: 'center',
      justifyContent: "center",
      borderColor: "lightskyblue",
      margin:3,
      padding:3
  }
});
