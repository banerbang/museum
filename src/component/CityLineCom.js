import React from 'react';
import '../style/cityLine.css';
import 'antd/dist/antd.css';
import CityLineItem from './CityLineItem.js';
import MuseumList from './MuseumList';
// import { Museumlist0, museumlist1, museumlist2, museumlist3, museumlist4, museumlist5, museumlist6, museumlist7, museumlist8} from './SumMuseumList.js'
import TabComponent from './TabComponent';

export default class CityLineCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    cityName: '全国',
                    ifChoosed: true,
                    id: 0,
                },
                {
                    cityName: '北京',
                    ifChoosed: false,
                    id: 1,
                },
                {
                    cityName: '陕西',
                    ifChoosed: false,
                    id: 2,
                },
                {
                    cityName: '河南',
                    ifChoosed: false,
                    id: 3,
                },
                {
                    cityName: '四川',
                    ifChoosed: false,
                    id: 4,
                },
                {
                    cityName: '重庆',
                    ifChoosed: false,
                    id: 5,
                },
                {
                    cityName: '湖南',
                    ifChoosed: false,
                    id: 6,
                },
                {
                    cityName: '湖北',
                    ifChoosed: false,
                    id: 7,
                },
                {
                    cityName: '安徽',
                    ifChoosed: false,
                    id: 8,
                },
            ],
            selectedId:0,
            tabData:[
                {
                    tabName: [],
                    tabContent: [
                        {
                            musName: '国家博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        },
                        {
                            musName: '故宫博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        },
                        {
                            musName: '陕西历史博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        },
                        {
                            musName: '中国青铜器博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        },
                        {
                            musName: '大唐秦王陵',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        }
                    ],
                    ifMusChoosed: true,
                    key: 0
                },
                {
                    tabName: ['北京'],
                    tabContent: [
                        {
                            musName: '国家博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        },
                        {
                            musName: '故宫博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        }
                    ],
                    ifMusChoosed: false,
                    key: 1
                },
                {    
                    tabName: ['全部'],
                    tabContent: [
                        {
                            musName: '陕西历史博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        },
                        {
                            musName: '中国青铜器博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        },
                        {
                            musName: '大唐秦王陵',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        }
                    ],
                    ifMusChoosed: false,
                    key: 2
                },
                {
                    tabName: ['西安'],
                    tabContene: [
                        {
                            musName: '陕西历史博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        }
                    ],
                    ifMusChoosed: false,
                    key: 3
                },
                {
                    tabName: ['宝鸡'],
                    tabContene: [
                        {
                            musName: '中国青铜器博物馆',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        },
                        {
                            musName: '大唐秦王陵',
                            musImg: 'http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg',
                            musDes: '简介123',
                        }
                    ],
                    ifMusChoosed: false,
                    key: 4
                },
            ],
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
                }
            )
            this.setState({
                 data: tempdata,
                }
            )
    }
    componentDidMount(){
        let domHeight = document.getElementsByClassName('cityLineDiv')[0].offsetHeight;
        document.getElementsByClassName('grayLine2')[0].style.height= `${domHeight}px`;
    }
    render(){
        const { data, selectedId, tabData, selectedMusId } =this.state;
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
                    <div className = 'grayLine2'></div>
                </div>
                <div className='contentDiv2'>{
                    tabData.map((item, index) => {
                            return(
                                <TabComponent
                                    key={index}
                                    musName={item.musName}
                                    ifMusChoosed={item.ifMusChoosed}
                                    
                                ></TabComponent>
                            )
                        }
                    )
                }
                    {/* <MuseumList ifMuseumList={selectedId == 0 ? true : false} content={Museumlist0}>
                    </MuseumList>
                    <MuseumList ifMuseumList={selectedId == 1 ? true : false} content={museumlist1}>
                    </MuseumList>
                    <MuseumList ifMuseumList={selectedId == 2 ? true : false} content={museumlist2}>
                    </MuseumList>
                    <MuseumList ifMuseumList={selectedId == 3 ? true : false} content={museumlist3}>
                    </MuseumList>
                    <MuseumList ifMuseumList={selectedId == 4 ? true : false} content={museumlist4}>
                    </MuseumList>
                    <MuseumList ifMuseumList={selectedId == 5 ? true : false} content={museumlist5}>
                    </MuseumList>
                    <MuseumList ifMuseumList={selectedId == 6 ? true : false} content={museumlist6}>
                    </MuseumList>
                    <MuseumList ifMuseumList={selectedId == 7 ? true : false} content={museumlist7}>
                    </MuseumList> */}

                </div>
            </div>
        )
    }
}