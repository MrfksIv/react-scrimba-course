import React from 'react';
import './App.css';
import Card from './components/Card';
import CTA from "./components/CallToAction";
import {withExtraPropAdded} from "./components/withExtraPropHOC";
import Menu from "./components/ToggableMenuV3";

function App(props: any) {
    console.log(props)
  return (
    <div className="App">

        <CTA border='10px solid orange'>
            <h1>This is a CTA with a child of h1</h1>
        </CTA>
        <Card cardColor="red" />
        <Card cardColor="blue" />
        <Card cardColor="green" />
        <Card width={200}/>
        <Menu />

    </div>
  );
}

export default withExtraPropAdded(App);
