import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import './cata.less'

class Cata extends Component {
    state = {
        current: 0,
        cata: [
            {name: '专场', id: 1},
            {name: '热销', id: 2},
            {name: '折扣', id: 3},
            {name: '主食', id: 4},
            {name: '热炒', id: 5},
            {name: '凉菜', id: 6},
            {name: '特色菜', id: 7},
        ]
    }

    handleClick(index){
        this.setState({
            current: index
        })
    }

    render(){
        return (<View className="cata">
            {
                this.state.cata.map((item, index) => (
                    <Text onClick={this.handleClick.bind(this, index)} key={index} className={"cata-name " + (this.state.current === index ? 'active' : '')} >{item.name}</Text>
                ))
            }
        </View>)
    }
}

export default Cata