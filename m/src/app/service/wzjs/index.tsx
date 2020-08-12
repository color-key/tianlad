import React from 'react';
import Content from './content';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Nav from '../../layout/footer/nav';

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