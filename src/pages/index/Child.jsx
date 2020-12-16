import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'

class Child extends Component {
    componentWillReceiveProps(nextProps) {
    }
    render() {
        return (
            <View>
                <View><Text>{this.props.name}</Text></View>
                <Button onClick={this.props.change}>点击</Button>
            </View>
        )
    }
}

export default Child