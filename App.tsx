import React, {useState, useEffect, Node, useMemo} from 'react';
import MainContainer from './containers/MainContainer';


// Redux
import {Provider} from 'react-redux';
import {store} from './redux/redux';

const App: () => Node = () => {
  return (
    <Provider store={store}>

        <MainContainer
        // statesInfo = {statesInfo}
        />
      
    </Provider>
  );
};

export default App;
