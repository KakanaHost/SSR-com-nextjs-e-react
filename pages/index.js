import './index.css';
import Card from './Card';
//import {icon} from '../static/logo.png';

export default () => (
    <>
        <header className="App">
            <img src="/static/logo.png" className= "static-logo" alt="logo"/>
        </header>
        <div className="Grid">
            <Card />
            <Card />
            <Card />
        </div>
    </>
)