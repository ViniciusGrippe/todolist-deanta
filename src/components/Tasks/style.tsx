import styled from 'styled-components';
import { SubTaskItem } from '../SubTasks/style';

export const TaskItem = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
  background: #fff;
  padding: 8px 20px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 10px 20px -10px #11111115;
`;

export const ListSubTasks = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: -10px 30px 30px;
  background: #fff;
  padding: 10px 20px 8px 20px;
  border-radius: 0 0 10px 10px;
  width: calc(100% - 60px);
  box-shadow: 0 10px 20px -10px #11111115, 0 10px 20px -10px #11111115 inset;
  z-index: -1;
  position: relative;

  & > ${SubTaskItem}:last-child {
    border: none;
  }

  @media only screen and (max-width: 768px) {
    margin: -10px 15px 15px;
    width: -webkit-fill-available;
  }
`;
