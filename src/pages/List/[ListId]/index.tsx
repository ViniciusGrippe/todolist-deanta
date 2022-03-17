import React, { useEffect, useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import Button from '../../../components/Button';
import MessageToast from '../../../components/MessageToast';
import Modal from '../../../components/Modal';
import TaskItemComponent from '../../../components/Tasks';
import { Flex, Input, Text } from '../../../styles/ComponentsUI';
import { ListTasks } from './style';

import animationNoList from '../../../assets/lotties/no_list.json';

export default function ListItemsPage() {
  const params = useParams<{ slug: string }>();

  const [modalTask, setModalTask] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messageState, setMessageState] = React.useState(false);
  const [tasks, setTasks] = useState<Array<string>>([]);

  useEffect(() => setTasks([]), [params]);

  const createTask = () => {
    showToast();
    taskName !== ''
      ? (setTasks([...tasks, taskName]),
        setMessage('task created 😀'),
        setTaskName(''),
        setModalTask(false))
      : setMessage('add some name 😓');
  };

  const showToast = () => {
    setMessageState(true);
    setTimeout(() => {
      setMessageState(false);
    }, 3000);
  };

  return (
    <>
      <Flex justifyContent="flex-start" width="100%">
        <Flex
          justifyContent="space-between"
          direction="row"
          width="100%"
          data-animation="fadeUp"
        >
          <Flex>
            <Text>your list:</Text>
            <Text variant="title">{params.slug}</Text>
          </Flex>
          <Button
            variant="ghost"
            onClick={() => {
              setModalTask(true);
            }}
          >
            <HiPlus />
            add new task
          </Button>
        </Flex>
        <ListTasks>
          {tasks.length > 0 ? (
            tasks.map((item: string) => (
              <TaskItemComponent
                tasks={tasks}
                set={setTasks}
                taskItem={item}
                key={item}
              />
            ))
          ) : (
            <Flex
              alignItems="center"
              justifyContent="center"
              data-animation="fadeUp"
            >
              <Lottie
                loop
                animationData={animationNoList}
                play
                style={{ width: '300px', height: 'auto' }}
              />
              <Flex
                alignItems="center"
                justifyContent="center"
                style={{ margin: -40 }}
              >
                <Text variant="subtitle">You don't have tasks yet</Text>
                <Text gutter={15}>Create your first task and enjoy it!</Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    setModalTask(true);
                  }}
                >
                  create task
                </Button>
              </Flex>
            </Flex>
          )}
        </ListTasks>
      </Flex>

      <Modal state={modalTask} set={setModalTask}>
        <Text variant="title" gutter={15}>
          add new task
        </Text>
        <Flex spacing={15} as="form" width="100%">
          <Text>task's name</Text>
          <Input
            type="text"
            placeholder="what is my name?"
            required
            autoFocus
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
          <Flex direction="row" spacing={15} width="100%">
            <Button
              variant="ghost"
              type="button"
              full
              onClick={() => {
                setModalTask(false);
              }}
            >
              cancel
            </Button>
            <Button variant="primary" type="submit" full onClick={createTask}>
              add task
            </Button>
          </Flex>
        </Flex>
      </Modal>

      <MessageToast open={messageState}>{message}</MessageToast>
    </>
  );
}
