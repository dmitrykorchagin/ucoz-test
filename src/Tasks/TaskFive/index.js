import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
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
    value: 'React',
    complete: false
  },
  {
    index: 2,
    value: 'Redux',
    complete: false
  },
  {
    index: 3,
    value: 'TypeScript',
    complete: false
  },
  {
    index: 4,
    value: 'Vue?',
    complete: false
  }
];

class FiveTask extends React.Component {
  constructor() {
    super();
    this.updateList = this.updateList.bind(this);
    this.removeWish = this.removeWish.bind(this);
    this.completeWish = this.completeWish.bind(this);
    this.state = { wishs: wishList };
  }

  updateList(text) {
    const updateWish = this.state.wishs;
    const complete = false;
    updateWish.push({
      index: updateWish.length + 1,
      value: text,
      complete: complete
    });
    this.setState({ wishs: updateWish });
  }

  removeWish(text) {
    const updateWish = this.state.wishs;
    _.remove(updateWish, wish => wish.value === text);
    this.setState({ wishs: updateWish });
  }

  completeWish(text) {
    const updateWish = this.state.wishs;
    for (var i in updateWish) {
      if (updateWish[i].value === text) {
        updateWish[i].complete = updateWish[i].complete === true ? false : true;
      }
    }
    this.setState({ updateWish });
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
            <AddNewWish value={this.state.wish} updateList={this.updateList} />
            <WishList
              wishs={wishs}
              remove={this.removeWish}
              complete={this.completeWish}
            />
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default FiveTask;
