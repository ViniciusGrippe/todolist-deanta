/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, Outlet } from 'react-router-dom';

import LoginPage from './pages/Login';
import ListPage from './pages/List';
import ListItemsPage from './pages/List/[ListId]';
import { Content, Layout } from './components/SideBar/style';
import SideBar from './components/SideBar';
import { Flex } from './styles/ComponentsUI';
import Header from './components/Header';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Private />}>
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/:slug" element={<ListItemsPage />} />
        <Route path="*" element={<ListPage />} />
      </Route>
    </Routes>
  );
}

function Private() {
  return (
    <>
      <Flex
        alignItems="stretch"
        direction="row"
        style={{ minHeight: '100vh', width: '100%' }}
      >
        <SideBar />
        <Layout>
          <Header />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Flex>
    </>
  );
}
