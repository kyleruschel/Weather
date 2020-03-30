import React from 'react';
import { Card } from 'react-bootstrap';
import './card.css';

const day = require('../../Assets/dayTime.svg');
const night = require('../../Assets/nightTime.svg');

const MainCard = props => {
    const temperatureData = () => {
        const tempData = Object(props.Temperature);
        for (let i in tempData) {
            const temp = tempData['Imperial'].Value;
            const deg = tempData['Imperial'].Unit;
            return `${temp}° ${deg}`
        }
    }

    const capitalizeFirstLetter = str => {
        if(!str.length) {
            return;
        }
        const body = str.slice(1, str.lengh);
        const first = str[0].toUpperCase();
        return first.concat(body);
    }

    const dayOrNight = props.IsDayTime;
    const show = props.weather.length ? true : false;

    return (
        <div className='mainCardContainer'>
            {show && <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dayOrNight ? day : night} />
                <Card.Body>
                    <Card.Title>{capitalizeFirstLetter(props.title)}</Card.Title> 
                    <Card.Text>
                        {props.WeatherText}
                    </Card.Text>
                    <Card.Text>
                        {temperatureData()}
                    </Card.Text>
                </Card.Body>
            </Card>}
        </div>
    )
}

export default MainCard;