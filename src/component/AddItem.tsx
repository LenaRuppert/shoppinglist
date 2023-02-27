import React, {ChangeEvent, useState} from "react";
import {Item} from "../model/Item";
import "./AddItem.css"

type AddItemProps = {
    onAddItem: (newItem: Item) => void
}

export default function AddItem(props: AddItemProps){

    const[name, setName] = useState<string>("")

    function onNameChange(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }

    function onNameSave(){
        props.onAddItem({name, id: "1", isCompleted: false})
    }

    return(
        <div className={"additem"}>
            <label>neues Produkt</label>
            <input value={name} onChange={onNameChange}/>
            <button onClick={onNameSave}>ok</button>
        </div>
    )
}
