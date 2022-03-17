import React, { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import CheckIcon from '../../assets/icons/check';
import { CheckBox, Flex, Input } from '../../styles/ComponentsUI';
import Button from '../Button';
import MessageToast from '../MessageToast';
import { SubTaskItem } from './style';

export default function SubTaskList({ subtasks, set, subtaskItem }: any) {
  const [check, setCheck] = useState<boolean>(false);

  const [message, setMessage] = useState<string>('');
  const [messageState, setMessageState] = React.useState(false);

  const updateTask = (e: string) => {
    showToast();
    setMessage('task update 🎉');
  };

  const deleteSubTask = () => {
    const updateSubTask = subtasks.filter(
      (item: string) => item !== subtaskItem,
    );
    set(updateSubTask);
  };

  const showToast = () => {
    setMessageState(true);
    setTimeout(() => {
      setMessageState(false);
    }, 3000);
  };

  return (
    <>
      <SubTaskItem data-animation="fadeUp">
        <CheckBox>
          <input
            type="checkbox"
            id="id"
            onChange={(e) => {
              setCheck(e.target.checked);
            }}
          />
          <CheckIcon />
        </CheckBox>
        <Input
          disabled={check}
          clean
          defaultValue={subtaskItem}
          onKeyDown={(e: any) => {
            e.key === 'Enter' && updateTask(e.target.value);
          }}
        />
        <Flex
          spacing={15}
          direction="row"
          alignItems="center"
          width="41px"
          justifyContent="flex-end"
          style={{ minWidth: 38 }}
        >
          <Button variant="icon" full onClick={deleteSubTask}>
            <HiOutlineTrash />
          </Button>
        </Flex>
      </SubTaskItem>

      <MessageToast open={messageState}>{message}</MessageToast>
    </>
  );
}
