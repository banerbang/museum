import React from 'react';
import '../style/timeLine.css'
import 'antd/dist/antd.css';
import TimeLineItem from './TimeLineItem.js';
import Record from './Record.js'
import CommentCom from './CommentCom.js'
import {article1, article2, article3} from './SumArticle.js'

export default class TimeLineCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          data: [
            {
              firstTitle: '九城游记(一)',
              secondTitle: '己亥年七月十九',
              ifChoosed: true,
              id: 0,
            },
            {
              firstTitle: '九城游记(二)',
              secondTitle: '己亥年七月十九',
              ifChoosed: false,
              id: 1,
            },
            {
              firstTitle: '九城游记(三)',
              secondTitle: '己亥年七月十九',
              ifChoosed: false,
              id: 2,
            }
          ],
          selectedId:0,
        }
    }
    handleClick = (clickId) => {
      this.setState({
        selectedId: clickId,
      })
      let tempdata = this.state.data;
      tempdata.map((item,index) => {
        if(item.id == clickId){
          item.ifChoosed = true;
        }else{
          item.ifChoosed = false;
        }
      })
      this.setState({
        data: tempdata,
      })
    }

    componentDidMount(){
      let imgNum = document.getElementsByClassName('mapImg').length;
      let domHeight = document.getElementsByClassName('contentDiv')[0].offsetHeight + imgNum * 300;
      document.getElementsByClassName('grayLine')[0].style.height= `${domHeight}px`;
      document.getElementsByClassName('timeLineDiv')[0].style.height= `${domHeight}px`;
    }
    
    render () {
        const { data, selectedId } = this.state;
        return (
          <div>
            <div className='timeLineDiv'>
              {
                data.map((item, index) => {
                  return (
                    <TimeLineItem 
                      key={index}  
                      firstTitle={item.firstTitle} 
                      secondTitle={item.secondTitle} 
                      ifChoosed={item.ifChoosed} 
                      onTimeClick={this.handleClick.bind(this,item.id)}
                    ></TimeLineItem>
                  )
                })
              }
              <div className='grayLine'></div>
            </div>
            <div className='contentDiv'>
              <Record ifRecord={selectedId == 0 ? true : false} content={article1}>
                {selectedId == 0 ? <CommentCom /> : null}
              </Record>
              <Record ifRecord={selectedId == 1 ? true : false} content={article2}>
                {selectedId == 1 ? <CommentCom /> : null}
              </Record>
              <Record ifRecord={selectedId == 2 ? true : false} content={article3}>
                {selectedId == 2 ? <CommentCom /> : null} 
              </Record>
            </div>
          </div>
        )
    }
}