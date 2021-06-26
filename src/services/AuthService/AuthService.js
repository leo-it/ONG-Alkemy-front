import React, { useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { verify } from 'jsonwebtoken';

import { CardAlertService, ToastAlertService} from '../AlertService/AlertService';
import { login } from '../../store/UserStore/UserStore';
import { ALERT_ERROR, TOKEN_ERROR, ERROR_QUERY_TITLE} from '../../consts/const';
import clientAxios from '../Axios/axios';

export const AuthContextService = createContext();

export const AuthProviderService = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [auth, setAuth] = useState({success: false, msg: {show: false, info: { icon: '', title: '', text: ''}}});

  useEffect(() => {
    if (auth.success) {
      history.push('/');
    }
    if (auth.msg.show) {
      CardAlertService(auth.msg.info);
    }
  })

  const onSubmitLogin = async (data, res) => {
    try {
      const userData = await clientAxios.post('/auth/login', data);        
      localStorage.setItem ("token", userData);
      
      setAuth({...auth, success: true, msg: {show: false, info: {icon: '', title: '', text: ''}}});

      const user = verify ( userData.data.token, process.env.REACT_APP_AUTH_TOKEN_KEY, (error, decoded) =>{
        if (error) {
          return ToastAlertService ({icon: ALERT_ERROR, title: TOKEN_ERROR});
        }

        if (decoded) {
          return decoded;
        }
      });

      dispatch(login(user.data));
    } catch (error) {
      setAuth({...auth, success: false, msg: {show: true, info: {icon: ALERT_ERROR, title: ERROR_QUERY_TITLE, text: error}}});
    }  
  }

  const onSubmitUser = async(data) =>{
    try {
      await clientAxios.post('/users', data)
      history.push('/')
    } catch (error) {
      return ToastAlertService({icon: ALERT_ERROR, title: error})
    }
  }
    
  return (
    <AuthContextService.Provider value={{onSubmitLogin, onSubmitUser}}>
      {props.children}
    </AuthContextService.Provider>
  );
}