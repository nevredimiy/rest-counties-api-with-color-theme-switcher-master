import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import MainContent from './MainContent/MainContent';

const Layout = () => {
  return (
    <>
      <Header />
      <MainContent />  
      <Outlet />
    </>
  )
}

export { Layout }
