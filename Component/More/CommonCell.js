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
  Image,
  TouchableOpacity,
  Platform,
  Switch
} from 'react-native';

var Common = React.createClass({
  getDefaultProps(){
    return{
      title:'',
      isSwitch:false,
      rightTitle:''
    }
  },
  getInitialState(){
    return {
      isOn:false
    }
  },
  render() {
    return (
      <TouchableOpacity onPress={()=>{alert('点了')}}>
      <View style={styles.container}>
        <Text style={{marginLeft:8}}>{this.props.title}</Text>
        {this.renderRightView()}
      </View>
      </TouchableOpacity>
    );
  },
  // cell 右边显示的内容
  renderRightView(){
    // 判断
    if (this.props.isSwitch) {
       return (
        <Switch value={this.state.isOn==true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} style={{marginRight:8}}/>
      ) 
    }else
    {
      return (
        <View style={{flexDirection:'row',alignItems:'center'}}>
          {this.rightTitle()}
         <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
        </View>
      )
    }
  },
  rightTitle(){
    if (this.props.rightTitle.length>0) {
      return(
        <Text style={{color:'gray',marginRight:3}}>{this.props.rightTitle}</Text>
      );
    }
  }
});

const styles = StyleSheet.create({
  container: {
    height:Platform.OS=='ios'?44:30,
    backgroundColor:'white',
    borderBottomColor:'#dddddd',
    borderBottomWidth:0.5,
    flexDirection:'row',
    // 主轴的对齐方向
    justifyContent:'space-between',
    alignItems:'center'
  }
});

// 输出组件类
module.exports = Common;
