import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Tasks} from './src/components/tasksList';

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <Tasks />;
}

export default App;
