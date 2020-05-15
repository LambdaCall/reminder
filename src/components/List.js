import React from 'react';
import { Card } from './Card';


export class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cards : []
        }
    }

    componentDidMount= () =>{
        let storage = window.localStorage;
    
        for(let i = 0; i < 100; i++){
            const newCards = this.state.cards
            newCards.push({title:"test",content:"test"});
            this.setState({
                cards : newCards
            });
        }
        // this.cards = storage.getItem("test");
    }

    
    render() {
        return (
            this.state.cards.map((props, id) =>{
                return <Card key={id} title={props.title} content={props.content}/>}
            )
        )
    }
}

  