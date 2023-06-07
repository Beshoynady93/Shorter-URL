import { Outlet } from 'react-router-dom';

import Header from '../../component/header/header.component';
import Footer from '../../component/footer/footer.component';

import './layout.styles.scss';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
