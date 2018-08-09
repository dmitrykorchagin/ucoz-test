import React from 'react';
import styled from 'styled-components';
import Clipboard from 'react-clipboard.js';
import { Layout, Card } from 'antd';
import photo from '../photo.jpeg';
import telegram from '../telegram.svg';
import skype from '../skype.svg';
import phone from '../phone.svg';
import github from '../github.svg';

const { Content, Header } = Layout;

const Title = styled.h1`
  margin-left: 20px;
  font-weight: bold;
`;
const Text = styled.p``;
const Stack = styled.ul``;
const StackItem = styled.li``;
const RightInfo = styled.div`
  display: block;
  float: right;
`;
const Photo = styled.img`
  width: 200px;
  height: 200px;
`;
const List = styled.ul`
  padding: 0;
  list-style: none;
`;
const Contact = styled.li`
  margin-top: 5px;
`;
const Icon = styled.img`
  widht: 26px;
  height: 26px;
  margin-right: 5px;
`;

class OneTask extends React.Component {
  onSuccess() {
    alert('Скопировано в буфер обмена.');
  }

  render() {
    return (
      <React.Fragment>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Title>О себе</Title>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: 560
            }}
          >
            <Card>
              <RightInfo>
                <Photo src={photo} />
                <List>
                  <Contact>
                    <Icon src={github} />
                    <Clipboard
                      component="a"
                      data-clipboard-text="https://github.com/dmitrykorchagin"
                      onSuccess={this.onSuccess}
                    >
                      GitHub
                    </Clipboard>
                  </Contact>
                  <Contact>
                    <Icon src={telegram} />
                    <Clipboard
                      component="a"
                      data-clipboard-text="https://t.me/dkorchagin"
                      onSuccess={this.onSuccess}
                    >
                      Telegram
                    </Clipboard>
                  </Contact>
                  <Contact>
                    <Icon src={skype} />
                    <Clipboard
                      component="a"
                      data-clipboard-text="skype:dmitrykorchagin11"
                      onSuccess={this.onSuccess}
                    >
                      Skype
                    </Clipboard>
                  </Contact>
                  <Contact>
                    <Icon src={phone} />
                    <Clipboard
                      component="a"
                      data-clipboard-text="tel:+7 (911) 163 88 20"
                      onSuccess={this.onSuccess}
                    >
                      +7(911)163-88-20
                    </Clipboard>
                  </Contact>
                </List>
              </RightInfo>

              <Text>
                Привет! Меня зовут Дмитрий Корчагин. Я начинающий фронтэнд
                разработчик. Учу фронтэнд с мая 2018 года.
              </Text>
              <Text>
                Стэк в этом приложении: react, react-router v4, react-clipboard,
                styled-components, ant-design
              </Text>
              <Text>Также я умею:</Text>
              <Stack>
                <StackItem>Работать с git</StackItem>
                <StackItem>Адаптивно верстать</StackItem>
                <StackItem>Flexbox, bootstrap, flexbox grid </StackItem>
                <StackItem>Немножко знаком с препроцессорами</StackItem>
                <StackItem>Управлять пакетами в yarn, npm</StackItem>
                <StackItem>Gulp</StackItem>
                <StackItem>БЭМ (Наименование классов)</StackItem>
                <StackItem>
                  Работать с макетами в Sketch, Figma, Photoshop
                </StackItem>
              </Stack>
            </Card>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default OneTask;
