import React from 'react';
import '../style/cityLine.css';
import 'antd/dist/antd.css';
import CityLineItem from './CityLineItem.js';

export default class CityLineCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    cityName: '北京',
                    ifChoosed: true,
                    id: 0,
                },
                {
                    cityName: '陕西',
                    ifChoosed: false,
                    id: 1,
                },
                {
                    cityName: '河南',
                    ifChoosed: false,
                    id: 2,
                },
                {
                    cityName: '四川',
                    ifChoosed: false,
                    id: 3,
                },
                {
                    cityName: '重庆',
                    ifChoosed: false,
                    id: 4,
                },
                {
                    cityName: '湖南',
                    ifChoosed: false,
                    id: 5,
                },
                {
                    cityName: '湖北',
                    ifChoosed: false,
                    id: 6,
                },
                {
                    cityName: '安徽',
                    ifChoosed: false,
                    id: 7,
                },
            ]
        }
    }
    handleClick = (clickId)  => {
            let tempdata = this.state.data;
            tempdata.map((item,index) => {
                    if(item.id == clickId){
                        item.ifChoosed = true;
                    }
                    else{
                        item.ifChoosed = false;
                    }
                }
            )
            this.setState({
                    data: tempdata,
                }
            )
    }
    componentDidMount(){
        let domHeight = document.getElementsByClassName('cityLineDiv')[0].offsetHeight;
        document.getElementsByClassName('grayLine')[0].style.height= `${domHeight}px`;
      }
    render(){
        const { data } =this.state;
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
                    <div className = 'grayLine'></div>
                </div>
            </div>
        )
    }
}