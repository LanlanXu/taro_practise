import React, { Component } from 'react'
import {View, Text} from '@tarojs/components'

class Child extends Component{
    componentWillReceiveProps(nextProps){
        // console.log(this.props, nextProps)
    }
    render () {
    return (<View onClick={this.props.change}>{this.props.name}</View>)
    }
}

export default Child