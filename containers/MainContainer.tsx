import * as React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import SearchBarContainer from '../containers/SearchBarContainer';
import ListContainer from '../containers/ListContainer';

const MainContainer = () => {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      >
      <View style={styles.mainContainer}>
        <SearchBarContainer />
        <ListContainer/>
      </View>
   </KeyboardAvoidingView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
