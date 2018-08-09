import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Layout } from 'antd';

const { Content, Header } = Layout;

const SpinR = keyframes`
  from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
const SpinL = keyframes`
  from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(-360deg);
	}
`;

const Title = styled.h1`
  margin-left: 20px;
  font-weight: bold;
`;
const Container = styled.div`
  margin: 19px auto 0 auto;
  max-width: 545px;
  box-sizing: border-box;
`;
const FlexContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
`;
const FlexContainerLi = styled.li`
  padding: 10px;
  height: 97px;
  width: 97px;
  margin: 29px 19px;
  position: relative;
  text-align: center;
`;
const Loading = styled.span`
  display: inline-block;
  position: relative;
  width: 83px;
  height: 83px;
  border-radius: 100%;
  border: 5px solid transparent;
  border-bottom: 5px solid rgb(0, 0, 0);
  border-left: 5px solid rgb(0, 0, 0);
  border-right: 5px solid rgb(0, 0, 0);
  animation: ${SpinR} 2.3s linear infinite;
  &:before {
    content: '';
    display: block;
    border-radius: 100%;
    position: absolute;
    height: 49px;
    width: 49px;
    border: 5px solid transparent;
    border-top: 5px solid rgb(0, 0, 0);
    border-right: 5px solid rgb(0, 0, 0);
    animation: ${SpinL} 0.86s linear infinite;
    transform-origin: center center;
    top: 17%;
    left: 17%;
  }
`;

export default () => (
  <React.Fragment>
    <Header style={{ background: '#fff', padding: 0 }}>
      <Title>Индикатор загрузки</Title>
    </Header>
    <Content style={{ margin: '24px 16px 0' }}>
      <div style={{ padding: 24, background: '#fff', minHeight: 560 }}>
        <Container>
          <FlexContainer>
            <FlexContainerLi>
              <Loading />
            </FlexContainerLi>
          </FlexContainer>
        </Container>
      </div>
    </Content>
  </React.Fragment>
);
