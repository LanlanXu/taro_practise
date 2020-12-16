import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import Head from '../../components/head/head';
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'



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
        <Head />
      </View>
    )
  }
}

export default Index

