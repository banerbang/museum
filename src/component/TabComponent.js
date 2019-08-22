import React from 'react';
import '../style/museumlist.css'
import { Tabs, Card  } from 'antd';

const { TabPane } = Tabs;
const { Meta } = Card;

export default class TabComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: 0,
            selectedMuseum: '',
        }
    }
    callback(key) {
        console.log(key);
    }
    render() {
        const { tabName, tabContent, ifMumChoosed, onMumClicked } = this.props;
        return (
            <Tabs defaultActiveKey="1" onChange={onMumClicked}>
                {/* <TabPane tab="全部" key="1">
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
                </TabPane> */}
            </Tabs>
        )
    }
}