require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// import ReactDOM from 'react-dom';
import { Menu ,Breadcrumb} from 'element-react';
import 'element-theme-default';
 //底部版权信息组件
import FooterC from './FooterC';

import TableC from './TableC';

// 导航菜单组件
class MenuC extends React.Component{
  onSelect(){
    console.log('select');
  }
  render(){
    return (
      <div>
      <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
        <Menu.Item index="1">处理中心</Menu.Item>
        <Menu.SubMenu index="2" title="我的工作台">
          <Menu.Item index="2-1">选项1</Menu.Item>
          <Menu.Item index="2-2">选项2</Menu.Item>
          <Menu.Item index="2-3">选项3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item index="3">订单管理</Menu.Item>
      </Menu>
    </div>
    );
  }
}
// 面包屑导航
class BreadcrumbC extends React.Component{
   render(){
     return (
       <Breadcrumb separator="/">
          <Breadcrumb.Item>首页</Breadcrumb.Item>
         <Breadcrumb.Item>活动管理</Breadcrumb.Item>
         <Breadcrumb.Item>活动列表</Breadcrumb.Item>
         <Breadcrumb.Item>活动详情</Breadcrumb.Item>
      </Breadcrumb>
     );
   }
}


class AppComponent extends React.Component {
  render() {
    return (
      <div className="app-layout">
        <MenuC></MenuC>
        <BreadcrumbC className="breadcrumb"></BreadcrumbC>
        <TableC></TableC>
        <FooterC></FooterC>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
