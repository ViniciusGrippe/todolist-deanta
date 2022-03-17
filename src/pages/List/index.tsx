import React from 'react';
import { Flex, Text } from '../../styles/ComponentsUI';

export default function ListPage() {
  return (
    <>
      <Flex justifyContent="flex-start" width="100%">
        <Flex
          justifyContent="space-between"
          direction="row"
          width="100%"
          data-animation="fadeUp"
        >
          <Flex
            width="100%"
            alignItems="center"
            justifyContent="center"
            style={{
              flex: 1,
              height: 'calc(100vh - 130px)',
            }}
          >
            <Text>you're back,</Text>
            <Text variant="title">welcome 👋</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
