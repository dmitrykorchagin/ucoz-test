import React from 'react';
import { Button, List } from 'antd';

class WishList extends React.Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
  }

  remove(wish) {
    var value = wish.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
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
            <span>{item.value}</span>
            <Button
              style={{ display: 'block' }}
              size="small"
              type="danger"
              onClick={this.remove}
            >
              X
            </Button>
          </List.Item>
        )}
      />
    );
  }
}

export default WishList;
