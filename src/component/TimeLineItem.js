import React from 'react';
import '../style/timeLine.css'
import { Button } from 'antd/lib/radio';

export default class TimeLineItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { firstTitle, secondTitle, ifChoosed, onTimeClick} = this.props;
        return (
            <div className='itemDiv' onClick= {onTimeClick} style={{cursor: 'pointer'}}>
                <div className={ifChoosed ? 'choosedFist':'firstDiv'}>{firstTitle}</div>
                <div className={ifChoosed ? 'choosedSecond':'secondDiv'}>{secondTitle}</div>
                {ifChoosed ? <div className='redLine'></div> : null}
            </div>
        )
    }
}