/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var Main = require('./Main')
var Launch = React.createClass({
  render() {
    return (
     <Image source={{uri:'launchimage'}} style={styles.launchImageStyle}/>
    );
  },
  // 复杂的网络请求:定时器|网络请求
  componentDidMount(){
    // 定时:隔2秒切换到Main
    setTimeout(()=>{
      // 页面切换
      this.props.navigator.replace({
        component:Main, // 具体路径的板块
      });
    },1000);
  }
});

const styles = StyleSheet.create({
  launchImageStyle:{
    flex:1,
  }
});

// 输出组件类
module.exports = Launch;
