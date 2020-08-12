import React from 'react';

export default () => {

  return (
    <>
      <div className="m-service">
          <p className="m-service-title">
              <span>热门</span>服务
          </p>
          <div className="m-service-content">
              <dl>
                <a href="/m/service/seo">
                  <dt>
                    <img src="/m/static/picture/index-sem.png"/>
                  </dt>
                  <dd>SEO</dd>
                </a>
              </dl>
              <dl>
                <a href="/m/service/wzjs">
                  <dt><img src="/m/static/picture/index-wangjian.png"/></dt>
                  <dd>网站建设</dd>
                </a>
              </dl>
              <dl>
                <a href="/m/service/xcxkf">
                  <dt><img src="/m/static/picture/index-applet.png"/></dt>
                  <dd>小程序开发</dd>
                </a>
              </dl>
              <dl>
                <a href="/m/service/xinwen">
                  <dt><img src="/m/static/picture/index-wechat.png"/></dt>
                  <dd>新闻营销</dd>
                </a>
              </dl>
          </div>
      </div>
      <div className="m-line"></div>
      <div className="m-serach">
        <p className="m-service-title">
          <span>搜索引擎</span>营销
        </p>
        <div className="m-serach-content">
          <ul>
            <li>
              <a href="/m/service/seo">
                <img src="/m/static/picture/serach1.png" />
                <span>
                  <p>SEO</p>搜索引擎优化
                </span>
              </a>
            </li>
            <li>
              <a href="/m/service/sem">
                <img src="/m/static/picture/serach2.png" />
                <span>
                  <p>SEM</p>搜索引擎付费广告
                </span>
              </a>
            </li>
            <li style={{borderRight: '1px solid #eeeeee'}}>
              <a href="/m/service/aso">
                <img src="/m/static/picture/serach4.png" />
                <span>
                  <p>ASO</p>应用商店搜索优化
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="m-line"></div>
      <div className="m-mouth">
          <p className="m-service-title">
            <span>口碑</span>营销
          </p>
          <div className="m-mouth-content">
            <dl><a href="/m/service/wenda">
                    <dt><img src="/m/static/picture/mouth1.png"/></dt>
                    <dd>问答营销</dd>
                </a>
            </dl>
            
            <dl>
              <a href="/m/service/xinwen">
                  <dt><img src="/m/static/picture/mouth3.png"/></dt>
                  <dd>新闻营销</dd>
              </a>
            </dl>
          </div>
      </div>
      <div className="m-line"></div>
      <div className="m-technology">
          <p className="m-service-title">
              <span>技术</span>服务
          </p>
          <div className="m-technology-content">
              <dl><a href="/m/service/wzjs">
                      <dt><img src="/m/static/picture/technology1.png"/></dt>
                      <dd>高端定制企业网站建设</dd>
                  </a>
              </dl>
              <dl><a href="/m/service/wzjs">
                      <dt><img src="/m/static/picture/technology2.png"/></dt>
                      <dd>移动端网站设计开发</dd>
                  </a>
              </dl>
              <dl><a href="/m/service/wzjs">
                      <dt><img src="/m/static/picture/technology3.png"/></dt>
                      <dd>微信页面开发</dd>
                  </a>
              </dl>
              <dl><a href="/m/service/xcxkf">
                      <dt><img src="/m/static/picture/technology4.png"/></dt>
                      <dd>小程序开发</dd>
                  </a>
              </dl>
          </div>
      </div>
    </>
  )
}