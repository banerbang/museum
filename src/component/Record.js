import React from 'react';
import '../style/record.css'
import Article from './Article.js'

export default class Record extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { ifRecord, content } =this.props;
        return(
            <div>
                <div className='recordDiv'>
                    {
                        ifRecord ?
                        < Article articleContent={content}/> : null
                    }
                </div>
                {this.props.children}
            </div>
            
        )
    }
}