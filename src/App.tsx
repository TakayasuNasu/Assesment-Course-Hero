import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Reset } from 'styled-reset'
import Home from '@/pages'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
