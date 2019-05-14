import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 72px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(40, 36, 52);

  border-bottom: 1px solid rgb(59, 54, 73);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: rgb(113, 89, 193);
    padding: 20px 30px;
  }
  strong {
    color: #fff;
    font-size: 24px;
    margin-left: 30px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 36px;
    height: 36px;
    border-radius: 100%;
    margin-right: 15px;
  }
  span {
    color: #fff;
    font-size: 15px;
    margin-right: 20px;
  }
`;
