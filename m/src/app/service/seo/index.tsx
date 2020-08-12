import React from 'react';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Nav from '../../layout/footer/nav';
import Content from './content';

export default () => {

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