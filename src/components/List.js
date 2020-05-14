import React from 'react';
import { Card } from './Card';


export class List extends React.Component {
    constructor(props){
        super(props)
        this.cards = [{title:"test",content:"test"}];
    }

    componentDidMount= () =>{
        let storage = window.localStorage;
        // this.cards = storage.getItem("test");
    }

    render() {
        return (
            this.cards.map((props, id) =>{
                return <Card key={id} title={props.title} content={props.content}/>}
            )
        )
    }
}

  