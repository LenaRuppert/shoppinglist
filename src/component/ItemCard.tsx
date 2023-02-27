import React from "react";
import {Item} from "../model/Item";
import "./ItemCard.css"

type ItemCardProps ={

    item: Item
}

export default function(props: ItemCardProps){
    return(
        <section className={"item-card"}>
            <p>{props.item.name}</p>
            <p>{props.item.isCompleted}</p>
            <button className={"button-delete"}>delete</button>
        </section>
    )
}


