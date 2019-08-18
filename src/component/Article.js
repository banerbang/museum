import React from 'react';
import '../style/record.css'

export default class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { articleContent } = this.props;
        return(
            <div className = 'articleDiv'>
                {articleContent}
            </div>
        )
    }
}