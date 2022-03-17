import styled from 'styled-components';

export const NavMobile = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 99;
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const SideBarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: #04225280;
  backdrop-filter: blur(7px);
`;

export const NavBar = styled.div<{ show: boolean }>`
  /* flex: 1; */
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-basis: 15%;
  background: #fff;
  border-right: 1px solid #08275510;
  min-width: 270px;
  max-width: 270px;
  position: sticky;
  top: 0;
  height: fit-content;
  transition: 400ms ease all;
  z-index: 0;
  @media only screen and (max-width: 768px) {
    position: fixed;
    z-index: 100;
    left: ${(props) => (props.show ? '0' : '-100%')};
    height: 100vh;
  }
`;

export const Content = styled.div`
  padding: 25px;
`;

export const Layout = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: #f7f7fa;
`;

export const ProfileResume = styled.div`
  background: #f7f7fa;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  margin: 20px 0 20px;
  & > img {
    border-radius: 50%;
    object-fit: cover;
    width: 40px;
    height: 40px;
  }
`;

export const ListItems = styled.ul`
  z-index: -1;
  list-style: none;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border-top: 1px solid #03215215;
  padding: 3px 0;
  & > li {
    margin-bottom: 5px;
    font-size: 1rem;
    background: transparent;
    color: #042252;
    padding: 12px 20px;
    transition: 400ms ease all;
    position: relative;
    cursor: pointer;
    &:hover {
      background: #d7efff;
      color: #1a57b5;
    }
    &.actived {
      font-weight: 700;
      background: #d7efff;
      &::before {
        position: absolute;
        content: '';
        right: 0;
        top: 0;
        height: 100%;
        width: 5px;
        border-radius: 8px 0 0 8px;
        background-size: 200%;
        background-position: center;
        background: linear-gradient(180deg, #e087ff 0%, #1a57b5 71.35%);
      }
    }
  }
`;
