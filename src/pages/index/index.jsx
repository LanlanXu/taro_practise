import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import Child from './Child';
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  state = {
    name:'Helloworld'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidMount(){
    this.setState({name: '徐兰兰'}, ()=>{
      console.log('cb--->', this.state.name)
    })
    console.log(this.state.name)
  }
  componentWillUnmount () { }

  componentDidShow () { 
    
  }

  componentDidHide () { }
  
  click(){
    console.log(this.state)
    this.setState({name: '徐兰兰和崔力'})
  }

  change(){
    this.setState({name: '崔鸿'})
  }
  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <Button onClick={this.click.bind(this)}>点击</Button>
        <View><Text>{this.state.name}</Text></View>
        <Child name={this.state.name} change={this.change.bind(this)}></Child>
      </View>
    )
  }
}

export default Index

