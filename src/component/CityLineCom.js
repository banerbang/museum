import React from 'react';
import '../style/cityLine.css';
import 'antd/dist/antd.css';
import CityLineItem from './CityLineItem.js';
import MuseumList from './MuseumList';
// import { Museumlist0, museumlist1, museumlist2, museumlist3, museumlist4, museumlist5, museumlist6, museumlist7, museumlist8} from './SumMuseumList.js'
import TabComponent from './TabComponent';
import SecondContent from './SecondContent.js';
import {tabData, cityname} from './SecondData.js';

export default class CityLineCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : cityname,
            selectedId:0,
            tabData: tabData,
            selectedMusId:0
        }
    }
    handleClick = (clickId)  => {
        this.setState({
            selectedId: clickId,
        })
        let tempdata = this.state.data;
        let musData = this.state.tabData;
        tempdata.map((item,index) => {
            if(item.id == clickId){
                item.ifChoosed = true;
                musData.map((item,index) => {
                        item.ifMusChoosed = true;
                    }
                )
            }
            else{
                item.ifChoosed = false;
            }
        })
        this.setState({
            data: tempdata,
        })
    }
    componentDidMount(){
        let domHeight = document.getElementsByClassName('cityLineDiv')[0].offsetHeight;
        document.getElementsByClassName('grayLine2')[0].style.height= `${domHeight}px`;
    }
    render(){
        const { data, selectedId, tabData } =this.state;
        return(
            <div>
                <div className = 'cityLineDiv'>{
                    data.map((item, index) => {
                                return(
                                    <CityLineItem
                                        key={index}
                                        cityName={item.cityName}
                                        ifChoosed={item.ifChoosed}
                                        onCityClicked={this.handleClick.bind(this,item.id)}
                                    ></CityLineItem>
                                )
                            }
                        )
                    }
                    <div className = 'grayLine2'>
                    </div>
                </div>
                {
                    data.map((item,index) => {
                        return(
                            
                                <SecondContent>
                                { selectedId == item.id ? 
                                    <TabComponent
                                        key = {index}
                                        tabInfo={tabData[selectedId].tabInfo}
                                        ifMusChoosed={tabData[selectedId].ifMusChoosed}
                                    ></TabComponent>: null}
                                </SecondContent> 
                        )        
                    })
                } 
            </div>
        )
    }
}