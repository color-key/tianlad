import React from 'react';
import Content from './content';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Nav from '../../layout/footer/nav';
// import {PATH_PREFIX} from '@/env';

export default () => {

  React.useEffect(() => {
    // const script = document.createElement('script');
    // script.src = PATH_PREFIX+'/static/js/home.js';
    // document.body.appendChild(script);
  }, [])

  return (
    <>
      <div className="container">
        <Header/>
        <Content/>
        <Footer/>
      </div>
      <Nav/>
    </>
  )
}