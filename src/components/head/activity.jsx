import React, {Component} from 'react'
import {View, Text, Image} from '@tarojs/components'
import './activity.less'

class Activity extends Component{
    state = {
        activity: [
            {
                type: 'cut',
                info: [
                    {to: 48, cut: 10},
                    {to: 58, cut: 15},
                    {to: 78, cut: 30}
                ]
            }
        ],
        types: {
            cut: '减'
        }
    }
    getTextByType(type){
        return this.state.types[type]
    }
    getInfo(arr){
        return arr.map(item => `满${item.to}减${item.cut}`).join(';')
    }
    render(){
        let {activity:[firstItem]} = this.state
        return (
            <View className="activity">
                <View>
                    <Text className="type">{this.getTextByType(firstItem.type)}</Text>
                    <Text>{this.getInfo(firstItem.info)}</Text>
                </View>
                <Text className="len">{this.state.activity.length}个活动</Text>
            </View>
        )
    }
}

export default Activity