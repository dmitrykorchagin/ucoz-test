import React from 'react';
import { List } from 'antd';
import Wish from './Wish';

class WishList extends React.Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
    this.complete = this.complete.bind(this);
  }

  remove(value) {
    this.props.remove(value);
  }

  complete(value) {
    this.props.complete(value);
  }

  render() {
    const { wishs } = this.props;

    return (
      <List
        style={{ marginTop: '20px' }}
        size="small"
        bordered
        dataSource={wishs}
        renderItem={item => (
          <List.Item key={item.index}>
            <Wish complete={this.complete} wish={item} />
          </List.Item>
        )}
      />
    );
  }
}

export default WishList;
