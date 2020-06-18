import React from 'react';
import './index.css';
import Card from './Card';
import data from '../data/data.json';

export default class Index extends React.Component {
    static async getInitialProps(){
        return {cards: data}
    }
    render() {
        return(
            <>
                <header className="App">
                    <img src="/static/logo.png" className= "static-logo" alt="logo"/>
                </header>
                <div className="Grid">
                    {
                        this.props.cards.map((cards) => (
                            <Card key={cards.id}/>
                        ))
                    }
                    <Card />
                    <Card />
                    <Card />
                </div>
            </>
        );
    }

}