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
  Platform,
  Navigator
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
      
      
          {/*--首页--*/}
          {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home,10)}
      
          {/*--商家--*/}
          {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop,10)}
          
          {/*--我的--*/}
          {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine,10)}

          {/*--更多--*/}
          {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','misc','更多',More,10)}
        
    </TabNavigator>        
    );
  },
  renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component,badgeText){
    return (
     <TabNavigator.Item
         title={title}
          renderIcon={()=><Image source={{uri:iconName}} style={styles.iconStyle}/>}
          renderSelectedIcon={()=><Image source={{uri:selectedIconName}} style={styles.iconStyle}/>}  
          onPress={()=>{this.setState({selectedTab:selectedTab})}}
          selected={this.state.selectedTab===selectedTab}
          badgeText='10'
        >
         <Navigator
              initialRoute={{name:componentName,component:component}}
              configureScene={()=>{
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route,navigator)=>{
                let Component = route.component;
                return <Component {...route.passProps} navigator={navigator}/>
              }}
          />
      </TabNavigator.Item>
    );
  }
});

const styles = StyleSheet.create({
  iconStyle: {
    width:Platform.OS === 'ios' ? 30:25,
    height:Platform.OS === 'ios' ? 30:25
  }
});

// 输出组件类
module.exports = Main;
