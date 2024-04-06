import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './myRoutes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
