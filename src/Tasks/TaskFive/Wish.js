import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'antd';

const Span = styled.span`
  color: ${props => (props.completed === true ? 'green' : 'black')};
  text-decoration: ${props =>
    props.completed === true ? 'line-through' : 'none'};
`;

const Wish = props => {
  return (
    <React.Fragment>
      <Span completed={props.wish.complete}>{props.wish.value}</Span>
      <div>
        <Button
          size="small"
          type="primary"
          onClick={() => props.complete(props.wish.value)}
        >
          <Icon type="check" />
        </Button>
        <Button
          style={{ marginLeft: '5px' }}
          size="small"
          type="danger"
          onClick={() => props.remove(props.wish.value)}
        >
          <Icon type="close" />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Wish;
