import { Outlet } from 'react-router';
import { InfinitySpin } from 'react-loader-spinner';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Layout.module.css';

const Layout = () => {
  return (
    <div className={style.box}>
      <nav className={style.nav}>
        <NavLink to="/" className={style.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={style.link}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<InfinitySpin width="300" color="#640dd6" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
