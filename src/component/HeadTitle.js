import React from 'react';
import '../style/headTitle.css'
import oval from '../assets/oval.png'


export default class HeadTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
  
    render () {
        const { thirdPartFont, ifClicked, onHeadClick, ifHover, onHeadOver, onHeadLeave} = this.props;
        return (
            <div className='headDiv' onClick={onHeadClick} onMouseOver={onHeadOver} onMouseLeave={onHeadLeave}>
                <div className='firstPart'>
                    {this.props.children}
                    {
                        ifClicked || ifHover ? <img className='ovalImg' src={oval}></img> : null
                    }
                </div>
                {
                    ifClicked || ifHover ? <div className='secondPart'></div> : null
                }
                <div className='thirdPart'>{thirdPartFont}</div>
            </div>
        )
    }
    
}