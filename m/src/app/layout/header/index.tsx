import React from 'react';

export default () => {

  return (
    <header className="header">
      <a href="/m" className="logo" style={{zIndex: 100000}}>
        <img src="/m/static/picture/logo/1.png" style={{position: 'absolute'}}/>
      </a>
      <div id="dl-menu" className="dl-menuwrapper">
        <button id="dl-menu-button" className="m-nav">Open Menu</button>
        <ul className="dl-menu">
          <li><a href="/m">首页</a></li>
          <li><a href="/m/service">服务项目</a></li>
          <li><a href="/m/blogs">公司热点</a></li>
          <li className="jiahao">
            <a>关于我们</a>
            <ul className="dl-submenu">
              <li className="dl-back"><a>返回上一级</a></li>
              <li><a href="/m/about/intro">公司简介</a></li>
              <li><a href="/m/about/contact">加入我们</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  )
}