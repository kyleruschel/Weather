import React from 'react';
import { Card } from 'react-bootstrap';
import './card.css';

const day = require('../../Assets/dayTime.svg');
const night = require('../../Assets/nightTime.svg');

const MainCard = ({ Temperature, IsDayTime, WeatherText, weather, title }) => {
    const temperatureData = () => {
        const tempData = Object(Temperature);
        for (let i in tempData) {
            const temp = tempData['Imperial'].Value;
            const deg = tempData['Imperial'].Unit;
            return `${temp}° ${deg}`
        }
    }

    const capitalizeFirstLetter = str => {
        if (!str.length) {
            return;
        }
        const body = str.slice(1, str.length);
        const first = str[0].toUpperCase();
        return first.concat(body);
    }

    const dayOrNight = IsDayTime;
    const show = weather.length ? true : false;

    return (
        <div className='mainCardContainer'>
            {show && <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dayOrNight ? day : night} />
                <Card.Body>
                    <Card.Title>{capitalizeFirstLetter(title)}</Card.Title>
                    <Card.Text>
                        {WeatherText}
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