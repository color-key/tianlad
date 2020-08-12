import React from 'react';
import Header from '../layout/header';
import Swiper from './swiper';
import Service from './service';
import Banquan from '../layout/footer/banquan';
import Nav from '../layout/footer/nav';

export default () => {

  return (
    <div className="whole">
      <div className="m-top">
        <Header/>
      </div>
      <Swiper/>
      <Service/>
      <Banquan/>
      <Nav/>
    </div>
  )
}