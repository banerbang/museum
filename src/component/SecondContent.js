import React from 'react'
export default class SecondContent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = 'contentDiv2'>
                {this.props.children}
            </div>
        )
    }
}