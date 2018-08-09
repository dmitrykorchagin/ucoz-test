import React from 'react';
import styled from 'styled-components';
import SmoothCollapse from 'react-smooth-collapse';
import { Layout } from 'antd';
import arrow from '../arrow.svg';

const { Content, Header } = Layout;

const Title = styled.h1`
  margin-left: 20px;
  font-weight: bold;
`;
const Form = styled.div`
  max-width: 370px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  background-color: #ffffff;

  @media (max-width: 576px) {
    max-width: 270px;
  }
`;
const Registration = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  line-height: 24px;
  padding-top: 38px;
  padding-bottom: 37px;
  margin: 0;
  text-align: center;
`;
const BtnVk = styled.button`
  width: 100%;
  margin-bottom: 14px;
  padding-top: 12px;
  padding-bottom: 11px;
  border-radius: 3px;
  border: none;
  background-color: #3b5f94;
  font-size: 18px;
  font-weight: 400;
  line-height: 17px;
  color: #fff;
  outline: none;
  cursor: pointer;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
const BtnFb = BtnVk.extend`
  background-color: #323c89;
`;
const HiddenBtn = styled.div``;
const BtnG = BtnVk.extend`
  background-color: #da3d2c;
`;
const BtnYa = BtnVk.extend`
  background-color: #fff;
  border: 2px solid #da3d2c;
  color: #000;
  padding-top: 10px;
  padding-bottom: 9px;
`;
const Ya = styled.span`
  color: #da3d2c;
`;
const Other = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 31px;
`;

const Arrow = styled.img`
  widht: 7px;
  height: 5px;
`;
const BtnOther = styled.button`
  color: #52ac62;
  font-size: 14px;
  line-height: 13px;
  font-weight: 400;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
`;
const IfTitle = styled.span`
  display: flex;
  justify-content: center;
  line-height: 8px;
  color: #cdd0d4;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 15px;
`;
const Cont = styled.div`
  padding: 0 41px;
`;
const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #e5e8ec;
  background-color: #fcfcfc;
  font-size: 14px;
  font-weight: 400;
  line-height: 10px;
  padding: 10px 14px;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
const Password = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
const Remember = styled.div``;
const Check = styled.input``;
const Label = styled.label`
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
const Forgot = styled.a`
  color: #2c88d5;
  font-size: 14px;
  font-weight: 400;
  justify-content: flex-end;
  display: flex;

  @media (max-width: 576px) {
    font-size: 13px;
    max-width: 50px;
  }
`;
const SignIn = styled.input`
  border-radius: 3px;
  border: none;
  outline: none;
  background-color: #52ac62;
  padding: 12px;
  width: 100%;
  line-height: 17px;
  color: #fcf9f9;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 46px;
  margin-bottom: 50px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

class TwoTask extends React.Component {
  state = {
    expanded: false,
    rotation: 0
  };

  handleClick = () => {
    let newRotation = this.state.rotation + 180;
    if (newRotation >= 360) {
      newRotation = -360;
    }

    this.setState({
      expanded: !this.state.expanded,
      rotation: newRotation
    });
  };

  render() {
    const { expanded, rotation } = this.state;
    return (
      <React.Fragment>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Title>Форма</Title>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: 560,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Form>
              <Registration>Регистрация</Registration>
              <Cont>
                <BtnVk>Регистрация из Вконтакте</BtnVk>
                <BtnFb>Регистрация из Facebook</BtnFb>
                <SmoothCollapse
                  expanded={expanded}
                  heightTransition="0.7s ease"
                >
                  <HiddenBtn>
                    <BtnG>Регистрация из Google Plus</BtnG>
                    <BtnYa>
                      Регистрация из <Ya>Яндекс</Ya>
                    </BtnYa>
                  </HiddenBtn>
                </SmoothCollapse>

                <Other>
                  <BtnOther onClick={this.handleClick}>
                    Другие{' '}
                    <Arrow
                      style={{ transform: `rotate(${rotation}deg)` }}
                      src={arrow}
                    />
                  </BtnOther>
                </Other>
                <IfTitle>или</IfTitle>
                <Input placeholder="Введите логин или E-mail" type="email" />
                <Input placeholder="Пароль" type="password" />
                <Password>
                  <Remember>
                    <Check type="checkbox" />
                    <Label>Запомнить меня</Label>
                  </Remember>
                  <Forgot>Забыли пароль?</Forgot>
                </Password>
                <SignIn type="submit" value="Зарегистрироваться" />
              </Cont>
            </Form>
          </div>
        </Content>
      </React.Fragment>
    );
  }
}

export default TwoTask;
