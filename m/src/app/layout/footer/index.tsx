import React from 'react';

export default () => {

  return (
    <>
      <div style={{clear: 'both'}}></div>
      <div className="contact">
        <a href="tel://4007806980">联系天蕾顾问</a>
      </div>
      <div className="copy_right_main">
        <img src="/m/static/picture/qrcode/wechat.png" alt="扫描图中的二维码，关注天蕾官方公众号"  style={{width: '141px'}} /> 
        <p className="cr_wechat">
          扫描图中的二维码，关注天蕾官方公众号。
        </p>
        <p className="cr_address">
          地址：上海市普陀区金沙江路788号
        </p>
        <p className="cr_tel">
          电话：13176083657
        </p>
        <div className="copy_right">
          ©2019天蕾广告 版权所有
        </div>
      </div>
    </>
  )
}