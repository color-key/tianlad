import React from 'react';

export default () => {

  return (
    <> 
      <div className="con_title">我们的服务</div>

<div className="center">

  <ul className="index_service_main">

    <li>
      <img src="/m/static/picture/wap_index_1.png" alt="" />

      <p>搜索引擎营销</p>

      <div className="server_list">

        <span><a href="/m/service/sem">搜索引擎付费广告-SEM</a></span>

        <span><a href="/m/service/seo">搜索引擎优化-SEO</a></span>


        <span><a href="/m/service/aso">应用商店搜索优化-ASO</a></span>

      </div>

    </li>

    {/* <li>

      <img src="/m/static/picture/wap_index_2.png" alt="" />

      <p>口碑营销</p>

      <div className="server_list">

        <span><a href="/m/service/wenda">问答营销</a></span>

        <span><a href="/m/service/sem">论坛营销</a></span>

        <span><a href="/m/service/xinwen">新闻营销</a></span>

        <span><a href="/m/service/sem">视频营销</a></span>

      </div>

    </li> */}



    {/* <li>

      <img src="/m/static/picture/wap_index_3.png" alt="" />

      <p>互动营销</p>

      <div className="server_list">

        <span><a href="{$CATEGORYS[19]['url']}">微信营销</a></span>

        <span><a href="{$CATEGORYS[20]['url']}">微博营销</a></span>

        <span><a href="{$CATEGORYS[21]['url']}">公关活动</a></span>

        <span><a href="{$CATEGORYS[22]['url']}">社群营销</a></span>

      </div>

    </li> */}

    <li>

      <img src="/m/static/picture/wap_index_4.png" alt="" />

      <p>技术服务</p>

      <div className="server_list">

        <span><a href="/m/service/wzjs">高端定制企业网站建设</a></span>

        <span><a href="/m/service/wzjs">移动端网站设计开发</a></span>

        <span><a href="/m/service/wzjs">微信页面开发</a></span>

        <span><a href="/m/service/xcxkf">小程序开发</a></span>

      </div>

    </li>

  </ul>

</div>

<div style={{clear:'both'}}></div>


<div className="con_title">我们的客户</div>

<div className="center">

  <div className="index_case">
    <li>
      <span><img src="/m/static/picture/partner/001.png" alt="" /></span>
    </li>
    <li>
      <span><img src="/m/static/picture/partner/002.png" alt="" /></span>
    </li>
    <li>
      <span><img src="/m/static/picture/partner/003.png" alt="" /></span>
    </li>
    <li>
      <span><img src="/m/static/picture/partner/004.png" alt="" /></span>
    </li>
    <li>
      <span><img src="/m/static/picture/partner/005.png" alt="" /></span>
    </li>
    <li>
      <span><img src="/m/static/picture/partner/006.png" alt="" /></span>
    </li>
    <li>
      <span><img src="/m/static/picture/partner/007.png" alt="" /></span>
    </li>
    <li>
      <span><img src="/m/static/picture/partner/008.png" alt="" /></span>
    </li>
    <li>
      <span><img src="/m/static/picture/partner/009.png" alt="" /></span>
    </li>
  </div>
</div>
<div style={{clear:'both'}}></div>
<div className="con_title">服务流程</div>

<div className="center">

  <img src="/m/static/picture/wap_server_1.jpg" alt="服务流程" style={{marginTop:'40px'}} />

</div>
<div style={{clear:'both'}}></div>
<div className="con_title">天蕾服务理念</div>

<div className="center" style={{paddingTop:'20px'}}>

  <div className="server_1">

    <h3>精益</h3>

    <p>在项目执行时，我们会根据执行情况不断调整方法及策略以求精益求精。</p>

  </div>

  <div className="server_1">

    <h3>精密</h3>

    <p>项目节点管控及实施方便执行结果不偏离目标，同时为超额完成任务打下目标。</p>

  </div>

  <div className="server_1">

    <h3>精确</h3>

    <p>从项目接触时，我们就要求数字化，并写进合同，同时多维度考核服务。</p>

  </div>

  <div className="server_1">

    <h3>精细</h3>

    <p>多份报表系统展示执行结果，多层次的会议制度保障项目进度及实施无障碍。</p>

  </div>



</div>
    </>
  )
}