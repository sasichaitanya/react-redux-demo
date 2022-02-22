import './App.css';
import react from 'react';
// redux related
import { Provider } from 'react-redux';
import store from './redux/store';
// components
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
