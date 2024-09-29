import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

/**
 * 로그인 상태에 따른 경로 보호 컴포넌트
 * @param {Object} children - 보호할 자식 컴포넌트
 * @param {Object} rest - 나머지 props
 * @returns 로그인 상태에 따른 경로 이동
 */
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext); 

  return user || window.location.pathname === '/register'
    ? children
    : <Navigate to="/" />;
};

export default PrivateRoute;