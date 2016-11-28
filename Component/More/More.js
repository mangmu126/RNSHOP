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
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';

var More = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        {/*导航条*/}
        {this.renderNavBar()}
        <Text style={styles.welcome}>
         更多
        </Text>
 
      </View>
    );
  },
  renderNavBar()
  {
    return (
        <View style={styles.navOutViewStyle}>
            <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>更多</Text>
             <TouchableOpacity onPress={()=>{alert("点击了");}} style={styles.rightViewStyle}>
                <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
            </TouchableOpacity>
        </View>
      );
  }

});

const styles = StyleSheet.create({
  navImageStyle:{
    width:Platform.OS=='ios'?28:24,
    height:Platform.OS=='ios'?28:24,
   
  },
  rightViewStyle:{
     // 绝对定位
    position:'absolute',
    right:10,
    bottom:12
  },
  navOutViewStyle:{
    height:Platform.OS=='ios'?64:44,
    backgroundColor:'rgba(255,96,0,1.0)',
    // 设置主轴的方向
    flexDirection:'row',
    //  垂直居中---->设置侧轴的对齐方向
    alignItems:'center',
    // 主轴方向居中
    justifyContent:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 输出组件类
module.exports = More;
