import React, {Component} from 'react';
import './Meal.css';
import Routes from './routes';
import SERVER_URL from './consts.js'


const Meal = (props) => {
    const some = props.match.params.name
    const [message, setMessage] = React.useState('???');
    function getInfo() {
        console.log('getInfo called');
        fetch(SERVER_URL + '/' + some)
            .then(r => {
                return r.json();
            }).then(data => {
                setMessage(data.description);
        })
    }
    getInfo();

    return(
        <div>
            <h1>Hi there this is {some} and it is {message}</h1>
        </div>
    );
}
export default Meal;

