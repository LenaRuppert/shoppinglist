import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import {Item} from "./model/Item";
import ItemList from "./component/ItemList";
import AddItem from "./component/AddItem";


function App() {

    const [items, setItems] = useState<Item[]>([{name: "Paprika", id: "1", isCompleted: false}])


    function addItem(newItem: Item) {
        setItems(prevState => [...prevState, newItem])
    }


    return <div className="App">
        <Header/>
        <ItemList items={items}/>
        <AddItem onAddItem={addItem}/>

    </div>

}

export default App;
