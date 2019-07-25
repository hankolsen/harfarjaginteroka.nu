import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router';
import Home from './containers/Home';
import Page from './containers/Page';


// The "data" for the page
let items = [
  { url: 'train-station', title: 'Tågperrong', content: 'På en tågperrong' },
  { url: 'store-entrance', title: 'Affärsentré', content: 'Vid en affärsentré' }
];

// Add index as id (needed as key in the Grid listing)
items = items.map((item, index) => {
  item.id = index;
  return item;
});

// Put all items in the AppContext so it can be reused
const AppContext = React.createContext();

function App() {
  return (
    <AppContext.Provider value={{ items }}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/:component" component={Page} />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };
