import React from "react";
import {Item} from "../model/Item";
import ItemCard from "./ItemCard";

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
        <section>
            <h3>Einkaufszettel</h3>
            {itemList}
        </section>
    )
}
