import React from 'react';
import Content from './content';
import Header from '../../layout/header';
import Nav from '../../layout/footer/nav';

export default () => {

  return (
    <>
      <div className="whole">
        <Header/>
        <Content/>
      </div>
      <Nav/>
    </>
  )
}