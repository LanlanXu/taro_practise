import React, {Component} from 'react'
import {View, Text, Image} from '@tarojs/components'
import Top from './top'
import Activity from '../../components/head/activity'
import './head.less'

class Head extends Component{
    state = {
        store: {
            title: '川香居',
            notice: '欢迎光临，很高兴为您服务',
            tags: ['干净', '味道好', '服务好']
        }
    }
    render(){
        let {store} = this.state
        return (
            <View className="head">
                <Top />
                <Image src={require('../../assets/img/head-bg.jpg')} className="back-bg" />
                <View className="store">
                    <Image className="store-bg" src={require('../../assets/img/store.jpg')} />
                    <View className="store-text">
                        <Text>{store.title}</Text>
                        <Text>{store.notice}</Text>
                        <View>{
                            store.tags.map((item, index) => 
                                <Text className="tags-text" key={index}>{item}</Text>
                            )
                            }</View>
                    </View>
                </View>
                <Activity />
            </View>
            
        )
    }
}
export default Head