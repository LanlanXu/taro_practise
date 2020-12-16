import React, {Component} from 'react'
import {View, Text, Image} from '@tarojs/components'
import './top.less'

class Top extends Component{
    render(){
        return (
            <View className="top">
                <View className="left">
                    <Image className="img" src={require('../../assets/img/arrow-left-bold.png')}></Image>
                </View>
                <View className="right">
                    <Image className="img" src={require('../../assets/img/search.png')}></Image>
                    <Image className="img" src={require('../../assets/img/favorite.png')}></Image>
                    <Image className="img" src={require('../../assets/img/zoom-out.png')}></Image>
                    <Image className="img" src={require('../../assets/img/more.png')}></Image>
                </View>
            </View>
        )
    }
}

export default Top