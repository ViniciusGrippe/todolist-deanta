import React, { useState } from 'react';
import { HiArrowLeft, HiMenu, HiPlus } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import IconList from '../../assets/icons/list';
import { Flex, Input, Text } from '../../styles/ComponentsUI';
import Modal from '../Modal';
import Button from '../Button';
import { ListItems, NavBar, NavMobile } from './style';
import MessageToast from '../MessageToast';
import ToolTip from '../ToolTip';

import animationNoList from '../../assets/lotties/no_list.json';

export default function SideBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [modalNew, setModalNew] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [listName, setListName] = useState<string>('');

  const [data, setData] = useState<Array<string>>([]);
  const [filteredData, setFilteredData] = useState<Array<string>>(data);

  const [messageState, setMessageState] = React.useState(false);
  const showToast = () => {
    setMessageState(true);
    setTimeout(() => {
      setMessageState(false);
    }, 3000);
  };

  const createList = () => {
    showToast();
    listName !== ''
      ? (setData([...data, listName]),
        setFilteredData([...data, listName]),
        setMessage('list created 😀'),
        setListName(''),
        setModalNew(false),
        navigate(`/list/${listName}`))
      : setMessage('add some same 😓');
  };

  return (
    <>
      <NavMobile>
        <Button
          variant="icon"
          onClick={() => {
            setMobileMenu(true);
          }}
        >
          <HiMenu />
        </Button>
      </NavMobile>
      <NavBar show={mobileMenu}>
        <Flex padding="25px 20px 12px" data-animation="fadeUp">
          <Flex direction="row" justifyContent="space-between" width="100%">
            <Link to="/list">
              <img
                src="/img/logo.svg"
                alt="todo.list"
                width="140px"
                height="40px"
              />
            </Link>
            {mobileMenu && (
              <Button
                variant="icon"
                onClick={() => {
                  setMobileMenu(false);
                }}
              >
                <HiArrowLeft />
              </Button>
            )}
          </Flex>
          <Flex
            direction="row"
            spacing={10}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            padding="30px 0 0"
          >
            <Flex direction="row" spacing={10} alignItems="center">
              <IconList />
              <Text variant="label">your lists</Text>
            </Flex>
            <Button
              variant="icon"
              type="button"
              onClick={() => {
                setModalNew(true);
              }}
            >
              <HiPlus />
              <ToolTip>add new</ToolTip>
            </Button>
          </Flex>
        </Flex>
        <ListItems data-animation="fadeUp">
          <Input
            placeholder="Search ..."
            clean
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              let result = [];
              result = data.filter((item) => {
                return item.search(value) !== -1;
              });
              setFilteredData(result);
            }}
          />
          {data.length > 0 ? (
            filteredData.map((item) => (
              <li
                key={item}
                onClick={() => navigate(`/list/${item}`)}
                aria-hidden="true"
                className={pathname === `/list/${item}` ? 'actived' : ''}
                data-animation="fadeUp"
              >
                {item}
              </li>
            ))
          ) : (
            <Flex alignItems="center" justifyContent="center">
              <Lottie
                loop
                animationData={animationNoList}
                play
                style={{ width: '100%', height: 'auto' }}
              />
              <Flex
                alignItems="center"
                justifyContent="center"
                style={{ margin: -40 }}
              >
                <Text variant="subtitle">Not list created</Text>
                <Text gutter={15}>Create your first list, right now!</Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    setModalNew(true);
                  }}
                >
                  create list
                </Button>
              </Flex>
            </Flex>
          )}
        </ListItems>
      </NavBar>

      <Modal state={modalNew} set={setModalNew}>
        <Text variant="title" gutter={15}>
          add new list
        </Text>
        <Flex spacing={15} as="form" width="100%">
          <Text>list's name</Text>
          <Input
            type="text"
            placeholder="give me a cool name"
            required
            autoFocus
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            // error={!!message}
          />
          <Flex direction="row" spacing={15} width="100%">
            <Button
              variant="ghost"
              type="button"
              full
              onClick={() => {
                setModalNew(false);
              }}
            >
              cancel
            </Button>
            <Button variant="primary" type="submit" full onClick={createList}>
              add list
            </Button>
          </Flex>
        </Flex>
      </Modal>

      <MessageToast open={messageState}>{message}</MessageToast>
    </>
  );
}
