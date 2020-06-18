import React from 'react';
import { bindActionCreators } from 'redux';
import { initStore, initialCards, addItem } from '../store';
import withRedux from 'next-redux-wrapper';
import './index.css';
import Card from './Card';
//import data from '../data/data.json';

class Index extends React.Component {
    static async getInitialProps( { store } ){
        store.dispatch(initialCards());
        //return {cards: data}
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

const mapDispatchToProps =  (dispatch) => {
    return{
        initialCards: bindActionCreators(initialCards, dispatch),
        addItem: bindActionCreators(addItem, dispatch)
    }
}

const mapStateToProps = (state) => {
    return{
        cards: state.cards
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)
;