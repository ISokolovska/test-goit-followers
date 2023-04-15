import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { Loader } from './Loader/Loader';

const LazyHomePage = lazy(() => import('../pages/HomePage'));
const LazyUsersPage = lazy(() => import('../pages/UsersPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index path="/" element={<LazyHomePage />} />
          <Route path="/users" element={<LazyUsersPage />} />
          <Route path="*" element={<LazyHomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
