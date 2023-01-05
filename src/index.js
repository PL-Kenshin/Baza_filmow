import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Movies from './components/movies';
import NotFound from './components/notFound';
import Details from './components/details';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';
import AddMovie from './components/addMovie';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
                   
      <Route index element={<Movies/>}/>

      <Route path="details" element={<Details/>}/>

      <Route path="add" element={<AddMovie/>}/>

      <Route path="signup" element={<SignupForm/>}/>

      <Route path="login" element={<LoginForm/>}/>

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
