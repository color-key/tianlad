import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Nav from '../layout/footer/nav';
import Contain from './contain';

function Blog({ blogs=[], prePage, nextPage, count, pageSize, page }: any) {
  return (
    <>
      <div className="container">
        <Header/>
        <Contain page={Number(page)} pageSize={pageSize} blogs={blogs} prePage={prePage} nextPage={nextPage} count={count}/>
        <Footer/>
      </div>
      <Nav/>
    </>
  )
}

export default Blog