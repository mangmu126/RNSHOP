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
/**----------引入外部类------------**/
import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

var Main = React.createClass({
  // 初始化函数(变量是可以改变的,充当状态机的角色)
  getInitialState(){
    return{
      selectedTab:'home' //默认的第一个
    }
  },
  render() {
    return (
      <TabNavigator>
      
        <TabNavigator.Item
          title="首页"
          renderIcon={()=><Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
          renderSelectedIcon={()=><Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
          onPress={()=>{this.setState({selectedTab:'home'})}}
          selected={this.state.selectedTab==='home'}
        >
       
        </TabNavigator.Item>

       

         <TabNavigator.Item
         title="商家"
          renderIcon={()=><Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
          renderSelectedIcon={()=><Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}  
          onPress={()=>{this.setState({selectedTab:'shop'})}}
          selected={this.state.selectedTab==='shop'}
        >
        
        </TabNavigator.Item>
       
        <TabNavigator.Item
         title="我的"
          renderIcon={()=><Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}/>}
          renderSelectedIcon={()=><Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}  >
          onPress={()=>{this.setState({selectedTab:'mine'})}}
          selected={this.state.selectedTab==='mine'}
        />
        
        </TabNavigator.Item>
        

        <TabNavigator.Item
        title="更多"
          renderIcon={()=><Image source={{uri:'icon_tabbar_misc'}} style={styles.iconStyle}/>}
          renderSelectedIcon={()=><Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>} 
          onPress={()=>{this.setState({selectedTab:'more'})}}
          selected={this.state.selectedTab==='more'}
        >
        
        </TabNavigator.Item>
        
 
      </TabNavigator>
    );
  }
});

const styles = StyleSheet.create({
  iconStyle: {
    width:30,
    height:30
  }
});

// 输出组件类
module.exports = Main;
