import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import TaskOne from './Tasks/TaskOne';
import TaskTwo from './Tasks/TaskTwo';
import TaskThree from './Tasks/TaskThree';
import TaskFour from './Tasks/TaskFour';
import TaskFive from './Tasks/TaskFive/';

const { Footer, Sider } = Layout;

class MainPage extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <NavLink to="/1">
                <Icon type="right" />
                <span>Задание 1</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/2">
                <Icon type="right" />
                <span>Задание 2</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/3">
                <Icon type="right" />
                <span>Задание 3</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/4">
                <Icon type="right" />
                <span>Задание 4</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink to="/5">
                <Icon type="right" />
                <span>Задание 5</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Switch>
            <Route path={`/1`} component={TaskOne} />
            <Route path={`/2`} component={TaskTwo} />
            <Route path={`/3`} component={TaskThree} />
            <Route path={`/4`} component={TaskFour} />
            <Route path={`/5`} component={TaskFive} />
          </Switch>
          <Footer style={{ textAlign: 'center' }}>
            Dmitry Korchagin © 2018
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;
