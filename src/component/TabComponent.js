import React from 'react';
import '../style/museumlist.css'
import { Tabs, Card  } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;
const { Meta } = Card;

export default class TabComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: 0,
            selectedMuseum: '',
            active: '1',
            animated: false,
        }
    }
    callback = (key) => {
        this.setState({
            active: key
        })
    }
    render() {
        const { tabInfo, onMumClicked} = this.props;
        const { active, animated } = this.state;
        return (
            <Tabs onChange={this.callback} activeKey = {active} animated={animated}>
                {
                    tabInfo.map((item, index) => {
                        return(
                            <TabPane tab={item.tabName} key={`${index+1}`}> 
                                {item.tabContent.map((a,i) => {
                                    return(
                                        <Card
                                            key = {i}
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={a.musImg}/>}
                                        >
                                            <Meta title={a.musName} description={a.musDes}/>
                                        </Card>
                                    )
                                })}
                            </TabPane>  
                        )
                    })
                }
            </Tabs>
        )
    }
}