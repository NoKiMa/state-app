import React, {useState, useEffect, Node, useMemo} from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import ListContainer from './containers/ListContainer'
import {
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
// interfaces
import {State, County} from './models/state.model';

//services
import restServiceApi from './services/restServiceApi/restServiceApi';
import dataPreperingService from './services/dataPreperingService/dataPreperingService';

const App: () => Node = () => {
    const [statesInfo, setStatesInfo] = useState<State>([]);

    useEffect(()=>{
        restServiceApi.getStates().then(data =>{
            setStatesInfo(dataPreperingService.getStatesObject(data.data)); 
        })
    },[]);
 
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <View style={styles.mainContainer}>
              <SearchBarContainer/>
              <ListContainer/>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'lightcyan',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;