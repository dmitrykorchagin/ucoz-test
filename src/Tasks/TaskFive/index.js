import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import AddNewWish from './AddWish';
import WishList from './WishList';

const { Content, Header } = Layout;

const Title = styled.h1`
  margin-left: 20px;
  font-weight: bold;
`;

const wishList = [
  {
    index: 1,
    value: 'React'
  },
  {
    index: 2,
    value: 'Redux'
  },
  {
    index: 3,
    value: 'TypeScript'
  },
  {
    index: 3,
    value: 'Vue?'
  }
];

class FiveTask extends React.Component {
  constructor() {
    super();
    this.updateList = this.updateList.bind(this);
    this.removeWish = this.removeWish.bind(this);
    this.state = {
      wishs: wishList
    };
  }

  updateList(text) {
    const updateWish = this.state.wishs;
    updateWish.push({ index: updateWish.length + 1, value: text });
    this.setState({ wishs: updateWish });
  }

  removeWish(text) {
    const updateWish = this.state.wishs;
    updateWish.splice(updateWish.indexOf(text), 1);
    this.setState({ wishs: updateWish });
  }

  render() {
    const { wishs } = this.state;
    return (
      <React.Fragment>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Title>Вишлист</Title>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: 560
            }}
          >
            <AddNewWish updateList={this.updateList} />
            <WishList wishs={wishs} remove={this.removeWish} />
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default FiveTask;
