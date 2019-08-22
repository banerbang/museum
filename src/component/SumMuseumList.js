import React from 'react';
import '../style/museumlist.css'
import { Tabs } from 'antd';
import { Card } from 'antd';
const { TabPane } = Tabs;
const { Meta } = Card;
function callback(key) {
    console.log(key);
}
export class  Museumlist0 extends React.Component{
    render() {
        return (
        <Tabs defaultActiveKey="1" onChange={callback}>
        </Tabs>)
    }
}
    
export const museumlist1= 
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="北京" key="1">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="http://img.mp.itc.cn/upload/20170518/e9ea8933105e4bfdaebe40d0b529b3bc_th.jpg" />}
            >
                <Meta title="国家博物馆" description="隶属国家文化部国家级历史博物馆" />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="http://5b0988e595225.cdn.sohucs.com/images/20180829/313141c458f74f97a9eedc7afc118ff9.jpeg" />}
            >
                <Meta title="故宫博物院" description="隶属国家文化部国家级历史博物馆" />
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="国家博物馆" description="隶属国家文化部国家级历史博物馆" />
            </Card>
        </TabPane>
    </Tabs>
export const museumlist2= 
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="全部" key="1">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </TabPane>      
        <TabPane tab="西安" key="2">
            Content of Tab Pane 2
        </TabPane>
        <TabPane tab="宝鸡" key="3">
            Content of Tab Pane 2
        </TabPane>
    </Tabs>
export const museumlist3= 
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="全部" key="1">
            Content of Tab Pane 1
        </TabPane>
        <TabPane tab="安阳" key="2">
            Content of Tab Pane 2
        </TabPane>
        <TabPane tab="洛阳" key="3">
            Content of Tab Pane 3
        </TabPane>
    </Tabs>
export const museumlist4= 
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="成都" key="1">
            Content of Tab Pane 1
        </TabPane>
    </Tabs>
export const museumlist5= 
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="重庆" key="1">
            Content of Tab Pane 1
        </TabPane>
    </Tabs>
export const museumlist6= 
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="长沙" key="1">
            Content of Tab Pane 1
        </TabPane>
    </Tabs>
export const museumlist7= 
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="武汉" key="1">
          Content of Tab Pane 1
        </TabPane>
    </Tabs>
export const museumlist8= 
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="合肥" key="1">
        Content of Tab Pane 1
          </TabPane>
    </Tabs>