import React, { Component } from 'react';

import { Container, Logo, User } from './styles';
import logo from '../assets/logo.svg';
import avatar from '../assets/avatar.jpg';

export default class components extends Component {
  render() {
    return (
      <Container>
        <Logo>
          <img src={logo} width={80} height={72} alt="Logo" />
          <strong>Perfil</strong>
        </Logo>
        <User>
          <img src={avatar} alt="" />
          <span>Gustavo Henrique Michels</span>
        </User>
      </Container>
    );
  }
}
