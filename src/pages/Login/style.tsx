import styled from 'styled-components';

export const LoginDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-basis: 60%;
  padding: 30px 10%;
  background: #f7f7fa;
  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
    align-items: center;
  }
`;

export const IntroduceDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-basis: 40%;
  padding: 30px 30px 30px 10%;
  gap: 40px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const List = styled.div`
  color: #032152;
  & > p {
    position: relative;
    padding-left: 27px;
    padding-bottom: 10px;
    &:before {
      left: 0px;
      top: 9px;
      transform: translateY(-50%);
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url('icons/check.svg');
    }
  }
`;
