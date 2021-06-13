import React from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Redux
import {useSelector, useDispatch} from 'react-redux';
import { setSearch} from '../redux/redux';
// interfaces
import {ReduxState} from '../models/redux.model';

const SearchBarContainer = () => {
  let dispatch = useDispatch();
  const reduxStore = useSelector((state: ReduxState) => state.searchState);

  const searchHandler = text => {
    dispatch(setSearch(text));
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.input_container}>
        <TextInput
          styles={styles.input}
          placeholder="Search"
          value={reduxStore}
          onChangeText={searchHandler}
        />
      </View>

      <View style={styles.icon_container}>
        <TouchableOpacity
          onPress={() => {
            searchHandler('');
          }}>
          <Icon name="times" size={20} color="dimgray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBarContainer;

const styles = StyleSheet.create({
  main_container: {
    flex: 1.1,
    backgroundColor: '#fff',
    width: '85%',
    borderWidth: 1.5,
    borderColor: 'lightskyblue',
    borderRadius: 5,
    marginTop: 25,
    marginBottom: 40,
    flexDirection: 'row',
  },
  input: {
    paddingLeft: 15,
    paddingTop: 7,
    fontSize: 25,
  },
  icon_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_container: {
    flex: 9,
    marginHorizontal: 4,
  },
});
