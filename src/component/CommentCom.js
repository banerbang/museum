import React from 'react';
import '../style/comment.css';
import { Comment, List, Input, Button, message} from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import { thisExpression } from '@babel/types';

const { TextArea } = Input;


export default class CommentCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commentData: [
                            {
                            author: '123497459@qq.com',
                            content: (
                                <p>
                                    写的挺好的!
                                </p>
                            ),
                            datetime: (
                                <span>
                                    {moment()
                                    .subtract(1, '天')
                                    .fromNow()}
                                </span>
                            ),
                            },
                            {
                            author: 'sdzqlyn@gmail.com',
                            content: (
                                <p>
                                666
                                </p>
                            ),
                            datetime: (
                                <span>
                                    {moment()
                                    .subtract(2, '天')
                                    .fromNow()}
                                </span>
                            ),
                            },
                        ],
            value: '',
            value2: '',
        }
    }
    onChange = (e) =>{
        this.setState({
            value: e.target.value
        })
        

    }

    onSubmit = () =>{
        const {value, value2, commentData} = this.state;
        if(!value){
            message.info('评论不能为空！');
        }
        if(!value2){
            message.info('邮箱不能为空！');
        }
        if(value&&value2){
            //数据检查完毕开始提交评论
            let tempData = commentData;
            let obj = {
                author: value2,
                content: (<p>{value}</p>),
                datetime: (<span>{new Date().toLocaleString()}</span>)
            }
            tempData.push(obj);
            this.setState({
                commentData: tempData,
            })
        }
    }

    onEmail = (e) =>{
        this.setState({
            value2: e.target.value
        })
    }

    render(){
        const { commentData, value, value2} = this.state;
        return(
            <div className = 'commentDiv'>
                 <List
                    className="comment-list"
                    header={<div className = 'commentNum'> {commentData.length} 评论</div>}
                    itemLayout="horizontal"
                    dataSource={commentData}
                    renderItem={item => (
                    <li>
                        <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                        />
                    </li>
                    )}
                />
                <TextArea className = 'textArea1' rows={4} onChange={this.onChange} value={value} placeholder='请输入你的评论' />
                <Input className = 'inputArea1' onChange={this.onEmail} value={value2} placeholder='请输入你的邮箱' />
                <Button className = 'buttonArea1' onClick={this.onSubmit} type="primary">提交评论</Button>
            </div>
        )
    }
}