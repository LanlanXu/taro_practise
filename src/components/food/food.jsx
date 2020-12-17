import React, {Component} from 'react'
import {View, Text, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import './food.less'

class Food extends Component{
    state = {
        current: 0
    }
    handleTabClick(){

    }
    render(){
        return (
            <View>
                <AtTabs current={this.state.current} tabList={[{title: 'a'}, {title: 'd'}]} onClick={this.handleTabClick}>
                <AtTabsPane current={this.state.current} index={0}>
                11
                </AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}

export default Food