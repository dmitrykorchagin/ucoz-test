import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';
import TaskOne from './Tasks/TaskOne';
import TaskTwo from './Tasks/TaskTwo';
import TaskThree from './Tasks/TaskThree';
import TaskFour from './Tasks/TaskFour';
import TaskFive from './Tasks/TaskFive/';

const { Footer, Sider } = Layout;

const Text = styled.span``;

class MainPage extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <NavLink to="/ucoz-test/1">
                <Icon type="right" />
                <Text>Задание 1</Text>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/ucoz-test/2">
                <Icon type="right" />
                <Text>Задание 2</Text>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/ucoz-test/3">
                <Icon type="right" />
                <Text>Задание 3</Text>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/ucoz-test/4">
                <Icon type="right" />
                <Text>Задание 4</Text>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink to="/ucoz-test/5">
                <Icon type="right" />
                <Text>Задание 5</Text>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Switch>
            <Route path={`/ucoz-test/1`} component={TaskOne} />
            <Route path={`/ucoz-test/2`} component={TaskTwo} />
            <Route path={`/ucoz-test/3`} component={TaskThree} />
            <Route path={`/ucoz-test/4`} component={TaskFour} />
            <Route path={`/ucoz-test/5`} component={TaskFive} />
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
