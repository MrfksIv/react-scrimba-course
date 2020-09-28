import React from 'react';
import './App.css';
import Card from './components/Card';
import CTA from "./components/CallToAction";
import {withExtraPropAdded} from "./components/withExtraPropHOC";
import Menu from "./components/ToggableMenuV4";
import Counter from './components/Counter';
import TypingGame from './components/TypingGame';
import { Link, Switch, Route } from 'react-router-dom';


function App(props: any) {
    console.log(props)
  return (
    <div className="App">
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/game'>Typing Game</Link>
            <Link to='/card'>Cards</Link>
            <Link to='/counter'>Counter</Link>
        </nav>

        <CTA border='10px solid orange'>
            <h1>This is a CTA with a child of h1</h1>
        </CTA>

        <Switch>
            <Route exact path='/'>
                <h1>Welcome!</h1>
            </Route>
            <Route path='/menu' component={Menu} />
            <Route path='/counter' render={() => <Counter />} />
            <Route path='/card'>
                <Card cardColor="red" />
                <Card cardColor="blue" />
                <Card cardColor="green" />
                <Card width={200}/>
            </Route>
            <Route path='/game'>
                <TypingGame />
            </Route>
        </Switch>






    </div>
  );
}

export default withExtraPropAdded(App);
