import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Movies from './components/movies';
import NotFound from './components/notFound';
import Details from './components/details';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import AddMovie from './components/addMovie';
import {isExpired} from 'react-jwt'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
                   
      <Route index element={<Movies/>}/>

      <Route path="details/:id" element={<Details/>}/>

      <Route path="details" element={<Navigate to="/"/>}/>

      <Route path="add" element={isExpired(localStorage.getItem("token"))? <Navigate to="/"/> : <AddMovie/>}/>

      <Route path="signup" element={isExpired(localStorage.getItem("token"))? <SignupForm/> : <Navigate to="/"/>}/>

      <Route path="login" element={isExpired(localStorage.getItem("token"))? <LoginForm/>:<Navigate to="/"/>}/>

      <Route path="*" element={<NotFound/>}/>
      
      </Route>

    </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
