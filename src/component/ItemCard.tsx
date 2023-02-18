import React from "react";
import {Item} from "../model/Item";

type ItemCardProps ={

    item: Item
}

export default function(props: ItemCardProps){
    return(
        <section>
            <p>{props.item.name}</p>
        </section>
    )
}


