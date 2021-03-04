import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './routes/Home';
import Leaderboard from './routes/Leaderboard';
import Studentrecord from './routes/Studentrecord';


/*const Home = lazy(() => import('./routes/Home'));
const Leaderboard = lazy(() => import('./routes/Leaderboard'));*/

const App = () => (
  <div className="app">
  <Sidebar/>
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/leaderboard" component={Leaderboard}/>
        <Route path="/add-student-record" component={Studentrecord}/>
      </Switch>
    </Suspense>
  </Router>
  </div>
);

export default App;
