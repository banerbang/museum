import React from 'react';
import '../style/museumlist.css'
import Museum from './Museum.js'

export default class MuseumList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { ifMuseumList, content } = this.props;
        return (
            <div>
                <div className = 'MuseumList'>
                    {
                        ifMuseumList ? 
                        <Museum museumContent={content}/> : null
                    }
                </div>
            </div>
        )
    }
}