import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import {Item} from "./model/Item";
import ItemList from "./component/ItemList";


function App() {

    const [items, setItems] = useState<Item[]>([{name: "Paprika", id: "1"}])

  return <div className="App">
   <Header/>
      <ItemList items={items}/>

  </div>

}

export default App;
