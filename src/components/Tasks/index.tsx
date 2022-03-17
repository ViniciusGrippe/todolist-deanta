import React, { useState } from 'react';
import { HiOutlineTrash, HiReply } from 'react-icons/hi';
import CheckIcon from '../../assets/icons/check';
import { CheckBox, Flex, Input, Text } from '../../styles/ComponentsUI';
import Button from '../Button';
import MessageToast from '../MessageToast';
import Modal from '../Modal';
import SubTaskList from '../SubTasks';
import { ListSubTasks, TaskItem } from './style';

const TaskItemComponent = ({ set, tasks, taskItem }: any) => {
  const [check, setCheck] = useState<boolean>(false);
  const [subTaskName, setSubTaskName] = useState<string>('');
  const [modalSubTask, setModalSubTask] = useState<boolean>(false);
  const [subtasks, setSubTasks] = useState<Array<string>>([]);

  const [message, setMessage] = useState<string>('');
  const [messageState, setMessageState] = React.useState(false);

  const createSubTask = () => {
    showToast();
    subTaskName !== ''
      ? (setSubTasks([...subtasks, subTaskName]),
        setSubTaskName(''),
        setMessage('subtask created 😀'),
        setModalSubTask(false))
      : setMessage('add some name 😓');
  };

  const updateTask = (e: string) => {
    showToast();
    setMessage('task update 🎉');
  };

  const deleteTask = () => {
    const updateTasks = tasks.filter((id: string) => id !== taskItem);
    set(updateTasks);
  };

  const showToast = () => {
    setMessageState(true);
    setTimeout(() => {
      setMessageState(false);
    }, 3000);
  };

  return (
    <>
      <TaskItem data-animation="fadeUp">
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
          defaultValue={taskItem}
          onKeyDown={(e: any) => {
            e.key === 'Enter' && updateTask(e.target.value);
          }}
        />
        <Flex
          spacing={15}
          direction="row"
          alignItems="center"
          width="auto"
          justifyContent="flex-end"
        >
          <Flex
            direction="row"
            alignItems="center"
            spacing={10}
            style={{ minWidth: 86 }}
          >
            <Button
              variant="icon"
              full
              onClick={() => {
                setModalSubTask(true);
              }}
            >
              <HiReply />
            </Button>
            <Button variant="icon" full onClick={deleteTask}>
              <HiOutlineTrash />
            </Button>
          </Flex>
        </Flex>
      </TaskItem>
      {subtasks.length > 0 && (
        <ListSubTasks data-animation="fadeUp">
          {subtasks.map((subitem: string) => (
            <SubTaskList
              subtaskItem={subitem}
              subtasks={subtasks}
              set={setSubTasks}
              key={subitem}
            />
          ))}
        </ListSubTasks>
      )}

      <Modal state={modalSubTask} set={setModalSubTask}>
        <Text variant="title" gutter={15}>
          add new subtask
        </Text>
        <Flex spacing={15} as="form" width="100%">
          <Text>subtask's name</Text>
          <Input
            type="text"
            placeholder="what is my name?"
            required
            autoFocus
            onChange={(e) => setSubTaskName(e.target.value)}
            value={subTaskName}
          />
          <Flex direction="row" spacing={15} width="100%">
            <Button
              variant="ghost"
              type="button"
              full
              onClick={() => {
                setModalSubTask(false);
              }}
            >
              cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              full
              onClick={createSubTask}
            >
              add subtask
            </Button>
          </Flex>
        </Flex>
      </Modal>

      <MessageToast open={messageState}>{message}</MessageToast>
    </>
  );
};

export default TaskItemComponent;
