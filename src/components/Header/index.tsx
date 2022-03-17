import React from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { Flex, Text } from '../../styles/ComponentsUI';
import Button from '../Button';
import { MenuHeader, Avatar } from './style';

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <MenuHeader as={Flex} alignItems="flex-end">
        <Flex
          direction="row"
          spacing={10}
          alignItems="center"
          data-animation="fadeUp"
        >
          <Avatar src="/img/profile.jpg" alt="Vinícius" />
          <Flex>
            <Text>loggin as</Text>
            <Text variant="label">Vinícius Grippe</Text>
          </Flex>
          <Button variant="icon" onClick={() => navigate('/login')}>
            <HiOutlineLogout />
          </Button>
        </Flex>
      </MenuHeader>
    </>
  );
}
