import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Flex, Input, Text } from '../../styles/ComponentsUI';
import { IntroduceDiv, List, LoginDiv } from './style';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import MessageToast from '../../components/MessageToast';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [modalSignUp, setModalSignUp] = useState<boolean>(false);
  const [modalRecover, setModalRecover] = useState<boolean>(false);

  const [message, setMessage] = useState<string>('');
  const [messageState, setMessageState] = React.useState(false);

  const createAccount = (data: any) => {
    console.log(data, errors);
    showToast();
    if (data.password !== data.password_confirm) {
      setMessage('the passwords don`t match 😞');
    } else {
      loginSucessful();
    }
  };

  const loginSucessful = () => {
    setMessage('welcome, champion 🎉');
    navigate('/list');
  };

  const showToast = () => {
    setMessageState(true);
    setTimeout(() => {
      setMessageState(false);
    }, 3000);
  };

  return (
    <>
      <Flex
        alignItems={['stretch', 'stretch', 'center', 'center']}
        direction={['row', 'row', 'column', 'column']}
        spacing={40}
        style={{ height: '100vh', width: '100%' }}
      >
        <IntroduceDiv>
          <img src="img/logo.svg" alt="todo.list" width="200px" height="50px" />
          <div>
            <Text variant="title" style={{ fontWeight: 400 }}>
              smart to do list
            </Text>
            <Text variant="title">for time and focused work</Text>
          </div>
          <List>
            <Text>
              <b>distraction free:</b> focus on your work
            </Text>
            <Text>
              <b>lore ipsum:</b> Lorem ipsum dolor sit amet, consectetur
              adipisici elit, sed eiusmod.
            </Text>
            <Text>
              <b>organization work:</b> no more troubles
            </Text>
          </List>
        </IntroduceDiv>
        <LoginDiv>
          <Flex
            spacing={15}
            width="100%"
            style={{ maxWidth: 425 }}
            justifyContent="center"
            data-animation="fadeUp"
          >
            <Text>Sign in </Text>
            <Input placeholder="e-mail" type="email" />
            <span style={{ position: 'relative', width: '100%' }}>
              <Input
                placeholder="password"
                type={passwordShow ? 'text' : 'password'}
              />
              <Button
                variant="icon"
                type="button"
                style={{
                  position: 'absolute',
                  background: 'transparent',
                  right: 4,
                  top: 4,
                }}
                onClick={() => setPasswordShow(!passwordShow)}
              >
                {passwordShow ? (
                  <HiOutlineEyeOff size="18px" />
                ) : (
                  <HiOutlineEye size="18px" />
                )}
              </Button>
            </span>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              style={{ paddingBottom: 30 }}
            >
              <Button variant="primary" onClick={loginSucessful}>
                sign in
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  setModalRecover(true);
                }}
              >
                forgot your password?
              </Button>
            </Flex>
            <Text>
              don't have an account yet?{' '}
              <Button
                variant="link"
                onClick={() => {
                  setModalSignUp(true);
                }}
              >
                sign up
              </Button>
            </Text>
          </Flex>
        </LoginDiv>
      </Flex>

      <Modal state={modalSignUp} set={setModalSignUp} width="400px">
        <Text variant="title" gutter={15}>
          create an account
        </Text>
        <Flex spacing={15} as="form" width="100%">
          <Text>your name</Text>
          <Input
            type="text"
            placeholder="full name"
            required
            autoFocus
            {...register('name', { required: true })}
            error={errors.name}
          />
          <Text>your email</Text>
          <Input
            type="email"
            placeholder="ex.: email@example.com"
            required
            {...register('email', { required: true })}
            error={errors.email}
          />
          <Text>password</Text>
          <Input
            type="password"
            placeholder="******"
            required
            {...register('password', { required: true })}
            error={errors.password}
          />
          <Text>confirm password</Text>
          <Input
            type="password"
            placeholder="******"
            required
            {...register('password_confirm', { required: true })}
            error={errors.password_confirm}
          />
          <Flex direction="row" spacing={15} width="100%">
            <Button
              variant="ghost"
              type="button"
              full
              onClick={() => {
                setModalSignUp(false);
              }}
            >
              cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              full
              onClick={handleSubmit(createAccount)}
            >
              sign up
            </Button>
          </Flex>
        </Flex>
      </Modal>

      <Modal state={modalRecover} set={setModalRecover}>
        <Text variant="title" gutter={15}>
          recovery account
        </Text>
        <Flex spacing={15} as="form" width="100%">
          <Text>your email</Text>
          <Input type="email" placeholder="ex.: email@example.com" required />
          <Flex direction="row" spacing={15} width="100%">
            <Button
              variant="ghost"
              type="button"
              full
              onClick={() => {
                setModalRecover(false);
              }}
            >
              cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              full
              onClick={() => {
                setModalRecover(false);
              }}
            >
              send to me
            </Button>
          </Flex>
        </Flex>
      </Modal>

      <MessageToast open={messageState}>{message}</MessageToast>
    </>
  );
}
