import React from 'react';

export default () => {

  React.useEffect(() => {
    new Swiper('.swiper-container', {
      paginationClickable: true,
      spaceBetween: 30,
      autoplay: 2000, //每秒中轮播一次
      loop: true, //--可以让图片循环轮播
      autoplayDisableOnInteraction: false, //--在点击之后可以继续实现轮播
      pagination: ".swiper-pagination", //--让小圆点显示
    });
  }, []);

  return (
    <div className="m-banner" style={{backgroundColor: '#3C9BFB'}}>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="/m/static/picture/banner/3.jpg"/>
            <div style={{position: 'absolute', color: '#ffffff', fontSize: '32px',left: '32px', textAlign: 'left'}}>
              <p>SEO服务-按结果付费</p>
              <p style={{fontSize: '24px', marginTop: '20px'}}>千余家用户经验，五年诚信品牌实力见证</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src="/m/static/picture/banner/1.jpg"/>
            <div style={{position: 'absolute', color: '#ffffff', fontSize: '32px',left: '32px', textAlign: 'left'}}>
              <p>新媒体营销</p>
              <p style={{fontSize: '24px', marginTop: '20px'}}>知名上海新媒体营销</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src="/m/static/picture/banner/2.jpg"/>
            <div style={{position: 'absolute', color: '#ffffff', fontSize: '32px',left: '32px', textAlign: 'left'}}>
              <p>网站建设</p>
              <p style={{fontSize: '24px', marginTop: '20px'}}>坚持做有用的网站和有效果的网络营销</p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}