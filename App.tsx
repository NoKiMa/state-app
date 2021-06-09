import React, {useState, useEffect, Node, useMemo} from 'react';

import {
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

const App: () => Node = () => {
 
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <View style={styles.mainContainer}>
              <Text>Hi</Text>
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