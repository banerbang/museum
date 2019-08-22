import React from 'react';
import 'antd/dist/antd.css';
import Record from './Record.js'
import '../style/mapLine.css';

export default class MapLineCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className = 'mapLineDiv'></div>
        )
    }
}