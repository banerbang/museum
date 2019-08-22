import React from 'react'
import '../style/museumlist.css'

export default class Museum extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { museumContent } = this.props;
        return(
            <div className = 'museumDiv'>
                {museumContent}
            </div>
        )
    }
}