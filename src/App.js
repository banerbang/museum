import React from 'react';
import './App.css';
import HeadTitle from './component/HeadTitle.js'
import shou from './assets/shou.png'
import gui from './assets/gui.png'
import guan from './assets/guan.png'
import TimeLineCom from './component/TimeLineCom.js'
import CityLineCom from './component/CityLineCom.js'
import MapLineCom from './component/MapLineCom.js'
import { Icon } from 'antd'
import toTop from './assets/toTop@3x.png'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      clickedIndex: 0,
      hoverIndex: 0,
    }
  }
  handleClick = (index) => {
    this.setState({
      clickedIndex: index,
    })
  }
  handleOver = (index) => {
    this.setState({
      hoverIndex: index,
    })
  }
  handleLeave = (index) => {
    this.setState({
      hoverIndex: -1,
    })
  }
  goTop(){
    const scrollToptimer = setInterval(function () {
      console.log("定时循环回到顶部")
      var top = document.body.scrollTop || document.documentElement.scrollTop;
      var speed = top / 4;
      if (document.body.scrollTop!=0) {
          document.body.scrollTop -= speed;
      }else {
          document.documentElement.scrollTop -= speed;
      }
      if (top == 0) {
          clearInterval(scrollToptimer);
      }
  }, 25); 
  }

  render () {
    const { clickedIndex, hoverIndex } = this.state;
    return (
      <div>
        <div style={{display: 'inline-block',marginLeft: '140px',marginTop: '160px',}}>
          <HeadTitle 
            thirdPartFont='游记讯息'
            onHeadClick={this.handleClick.bind(this, 0)} 
            ifClicked={clickedIndex == 0 ? true : false}
            onHeadOver={this.handleOver.bind(this, 0)}
            ifHover={hoverIndex == 0 ? true : false}
            onHeadLeave={this.handleLeave.bind(this, 0)}
          >
            <img className='headImg' src={shou}></img>
          </HeadTitle>
          <HeadTitle 
            thirdPartFont='博物馆志' 
            onHeadClick={this.handleClick.bind(this, 1)} 
            ifClicked={clickedIndex == 1 ? true : false}
            onHeadOver={this.handleOver.bind(this, 1)}
            ifHover={hoverIndex == 1 ? true : false}
            onHeadLeave={this.handleLeave.bind(this, 1)}
          >
            <img className='headImg' src={guan}></img>
          </HeadTitle>
          <HeadTitle 
            thirdPartFont='行程规划' 
            onHeadClick={this.handleClick.bind(this, 2)} 
            ifClicked={clickedIndex == 2 ? true : false}
            onHeadOver={this.handleOver.bind(this, 2)}
            ifHover={hoverIndex == 2 ? true : false}
            onHeadLeave={this.handleLeave.bind(this, 2)}
          >
            <img className='headImg' src={gui}></img>
          </HeadTitle>
        </div>
        <div>
          {clickedIndex == 0 ? <TimeLineCom /> : null}
          {clickedIndex == 1 ? <CityLineCom /> : null}
          {clickedIndex == 2 ? <MapLineCom />: null}
        </div>
        <div className = 'backToTop' onClick = {this.goTop} ß/>
      </div>
    )
  }
}

export default App;
