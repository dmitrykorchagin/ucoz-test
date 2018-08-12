import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Form = styled.form``;
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 16px;
  outline: none;
  font-size: 14px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

class AddNewWish extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const input = event.target.querySelector('input');
    const value = input.value;
    input.value = '';
    this.props.updateList(value);
  }

  render() {
    return (
      <Form id="myForm" onSubmit={this.onSubmit}>
        <Input type="text" placeholder="Wish..." />
        <Button
          style={{ width: '100%', marginTop: '20px' }}
          form="myForm"
          htmlType="submit"
          onSubmit={this.onSubmit}
          type="primary"
          size="large"
        >
          Add
        </Button>
      </Form>
    );
  }
}

export default AddNewWish;
