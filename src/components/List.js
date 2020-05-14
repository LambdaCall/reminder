import React from 'react';
import { Card } from './Card';


export class List extends React.Component {


    constructor(props){
        super(props)
        this.cards = [{title:"test",content:"test"}];
    }




    render() {
        return (
            this.cards.map((props) =>{
                return <Card title={props.title} content={props.content}/>}
            )
        )
    }
}

  