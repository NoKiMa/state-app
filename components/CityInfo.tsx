import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CityInfoProps {}

const CityInfo = (props: CityInfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:23, color:'red'}}>CityInfo</Text>
    </View>
  );
};

export default CityInfo;

const styles = StyleSheet.create({
  container: {
    flex:1.1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderColor: "lightskyblue",
}
});
