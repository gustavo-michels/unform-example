import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;

  form {
    color: #fff;
    width: 1000px;
    h1 {
      display: block;
      font-size: 2em;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
      color: #fff;
      margin: 100px 10px 30px 10px;
    }

    section {
      display: flex;
      margin: 0px 0px 10px;
      div {
        width: 100%;
        margin: 0px 10px;
        label {
          font-size: 16px;
          display: flex;
          font-weight: 600;
          -webkit-box-align: center;
          align-items: center;
          margin: 0px 0px 5px;
        }
        input {
          height: 36px;
          font-size: 14px;
          color: rgb(68, 68, 68);
          width: 100%;
          border-width: 0px;
          border-style: initial;
          border-color: initial;
          border-image: initial;
          border-radius: 4px;
          background: rgb(255, 255, 255);
          padding: 0px 12px;
        }
        span {
          color: red;
        }
      }
    }
    button {
      color: rgb(255, 255, 255);
      font-weight: 500;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      align-self: stretch;
      width: 98%;
      -webkit-box-pack: center;
      justify-content: center;
      height: 46px;
      border-radius: 4px;
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      text-decoration: none;
      transition: all 0.2s ease 0s;
      padding: 0px 25px;
      background: rgb(79, 205, 165);
      margin: 30px 10px 10px;
    }
    button:hover {
      opacity: 0.8;
    }
  }
`;

export const Form = styled.div``;
