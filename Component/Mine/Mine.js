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
  TouchableOpacity,
  ScrollView
} from 'react-native';
var MyCell = require("./CommonMyCell");
var HeaderView = require("./MineHeaderView");
var Mine = React.createClass({
  render() {
    return (
       <ScrollView style={{backgroundColor:'#e8e8e8'}}>
             {/*头部的View*/}
               <HeaderView />
          <View style={{marginTop:20}}>
              <MyCell 
                leftIconName='draft'
                leftTitle="小码哥钱包"
                rightTitle="账户余额:$100"
              />
              <MyCell 
                leftIconName='like'
                leftTitle="抵用卷"
                rightTitle="10张"
              />
            </View>
          
          <View style={{marginTop:20}}>
              <MyCell 
                leftIconName='card'
                leftTitle="积分商城"
              />
       
            </View>
           <View style={{marginTop:20}}>
              <MyCell 
                leftIconName='new_friend'
                leftTitle="今日推荐"
                rightIconName="me_new"
              />
       
            </View>    
            <View style={{marginTop:20}}>
              <MyCell 
                leftIconName='pay'
                leftTitle="我要合作"
                rightTitle="轻松开店,招财进宝"
              />
       
            </View>    
        </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 输出组件类
module.exports = Mine;
