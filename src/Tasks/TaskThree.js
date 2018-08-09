import React from 'react';
import styled from 'styled-components';
import '../task3.css';
import { Layout } from 'antd';

const { Content, Header } = Layout;

const Title = styled.h1`
  margin-left: 20px;
  font-weight: bold;
`;

export default () => (
  <React.Fragment>
    <Header style={{ background: '#fff', padding: 0 }}>
      <Title>Всплывающая подсказка</Title>
    </Header>
    <Content style={{ margin: '24px 16px 0' }}>
      <div style={{ padding: 24, background: '#fff', minHeight: 560 }}>
        <main>
          <div>
            <span tooltip="Up">Up</span>
          </div>
          <div>
            <span tooltip="Left" flow="left">
              Left
            </span>
            <span tooltip="Right" flow="right">
              Right
            </span>
          </div>
          <div>
            <span tooltip="Down" flow="down">
              Down
            </span>
          </div>
        </main>
      </div>
    </Content>
  </React.Fragment>
);
