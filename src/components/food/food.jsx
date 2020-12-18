import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import './food.less'
import Cata from './cata'
import FoodList from './foodlist'

class Food extends Component {
    state = {
        current: 0,
        tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }],
        tabCont: [{ val: 'wo shi tab 1' }, { val: 'wo shi tab 2' }]
    }
    handleTabClick(index) {
        this.setState({
            current: index
        })
    }
    render() {
        let {current, tabList, tabCont} = this.state;
        return (
            <View>
                <AtTabs current={current} tabList={tabList} onClick={this.handleTabClick.bind(this)}>
                <AtTabsPane>
                    <View className="food">
                    <Cata /><FoodList />
                    </View>
                </AtTabsPane>
                <AtTabsPane>评价</AtTabsPane>
                <AtTabsPane>商家</AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}

export default Food