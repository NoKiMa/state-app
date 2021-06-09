import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import CityItem from './CityItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    cityName: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    cityName: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    cityName: 'Third Item',
  },
  
];

interface ListOfCitiesProps {}

const ListOfCities = (props: ListOfCitiesProps) => {
  const renderItem = ({item}) => <CityItem cityName={item.cityName} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListOfCities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
});
