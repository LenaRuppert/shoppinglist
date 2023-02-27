import React from "react";
import {Item} from "../model/Item";
import ItemCard from "./ItemCard";
import "./ItemList.css"

type ItemListProps ={
    items: Item[]
}

export default function ItemList(props: ItemListProps){

    const itemList = props.items.map((item) => {
        return (
        <ItemCard item={item} key={item.name}/>
        )
    })

    return (
        <section className={"item-list"}>
            <h3>Einkaufszettel</h3>
            {itemList}
        </section>
    )
}
