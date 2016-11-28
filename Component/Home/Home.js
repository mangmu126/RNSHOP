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
  Dimensions,
  TextInput,
  Image,
  Platform
} from 'react-native';

var HomeDetail = require('./HomeDetail');
var {width,height} = Dimensions.get("window");
var Home = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        {/*首页的导航条*/}
        {this.renderNavBar()}
      <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
        <Text style={styles.welcome}>
         首页
        </Text>
      </TouchableOpacity>
      </View>
    );
  },
  renderNavBar(){
    return(
      <View style={styles.naBarStyle}>
        {/*左边*/}
        <TouchableOpacity onPress={this.pushToDetail}>
        <Text style={{color:'white'}}>广州</Text>
        </TouchableOpacity>
        {/*中间*/}
        <TextInput 
          placeholder="输入商家,品类,商圈"
          style={styles.topInputStyle}
        />
        <View style={styles.rightNavViewStyle}>
         <TouchableOpacity onPress={()=>{alert("点击了");}}>
            <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{alert("点击了");}}>
            <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
         </TouchableOpacity>
        </View>
      </View>
    );
  },
  // 跳转到二级界面
  pushToDetail()
  {
    this.props.navigator.push({
      component:HomeDetail,
      title:'详情页'
    });
  }
});

const styles = StyleSheet.create({
  naBarStyle:{
    height:Platform.OS=='ios'?64:44,
    backgroundColor:'rgba(255,96,0,1.0)',
    flexDirection:'row',
    alignItems:'center',
    // 设置主轴对齐方式
    justifyContent:'space-around'
  },
  rightNavViewStyle:{
    flexDirection:'row',
    // backgroundColor:'blue'
    height:64,
    alignItems:'center'
  },
  topInputStyle:{
      width:width*0.7,
      height:Platform.OS == 'ios' ?35:30,
      backgroundColor:'white',
      // 设置圆角
      borderRadius:17,
      // 内左边距
      paddingLeft:10,
      marginTop:Platform.OS == 'ios' ? 16:0
  },
  navRightImgStyle:{
    width:28,
    height:28
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 输出组件类
module.exports = Home;