import React from 'react'
import './App.css'
import List from './components/List';
import Navbar from './components/Navbar'
import DateTime from './components/DateTime'
import Inspire from './components/Inspire'
import Entries from './components/Entries'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App()  {

    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={DateTime} />
          <Route path="/" exact component={List} />
          <Route path="/" exact component={Inspire} />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/entries" component={Entries} />
          </Switch>

        </div>
      </Router>

    )
  }


export default App