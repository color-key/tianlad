import React from 'react';

export default () => {

  React.useEffect(() => {
    $(function() {
      $('#dl-menu').dlmenu();
    });
  }, []);

  return (
    <div className="m-footer">
        <dl><a href="tel://4007806980">
                <dt><img src="/m/static/picture/m-footer1.png"/></dt>
                <dd>联系电话</dd>
            </a>
        </dl>
        <dl><a href="http://p.qiao.baidu.com/cps/chat?siteId=15196220&userId=30743658&siteToken=79fc3112d44425ae09db65c527978fb7">
                <dt><img src="/m/static/picture/m-footer2.png"/></dt>
                <dd>在线咨询</dd>
            </a>
        </dl>
        {/* <dl><a href="/html/form/">
                <dt><img src="/m/static/picture/m-footer3.png"/></dt>
                <dd>需求</dd>
            </a>
        </dl> */}
        <dl><a href="/m/about/intro">
            <dt><img src="/m/static/picture/m-footer4.png"/></dt>
            <dd>联系</dd>
        </a>
        </dl>
    </div>
  )
}