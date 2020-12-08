import './App.css';

import Header from './components/Header'
import Map from './components/Map'

import { AppContextProvider } from './context/AppContext.js'

const App = () => {
  return (
    <div className="app">
      <AppContextProvider>
        <Header />
        <Map />
      </AppContextProvider>
    </div>
  );
}

export default App;
