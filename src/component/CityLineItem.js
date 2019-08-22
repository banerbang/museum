import React from 'react';
import '../style/cityLine.css';

export default class CityLineItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { cityName, ifChoosed, onCityClicked } = this.props;
        return(
            <div className = 'cityDiv' onClick = {onCityClicked} style={{cursor: 'pointer'}}>
                <div className = {ifChoosed ? 'choosedCity' : 'otherCity'}>{ cityName }</div>
                {ifChoosed ? <div className='redLine2'></div> : null}
            </div>
        )
    }
}