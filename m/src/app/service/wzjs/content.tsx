import React from 'react';

export default () => {

  const ShowTag = (TagName: any,TagClass: any,num: any,count: any,more: any) => {
    for(var i=0;i<count;i++) {
      const tag: any = document.getElementById(TagName+"_tab_"+i);
      const cont: any = document.getElementById(TagName+"_cont_"+i);
      let mores: any;
      if(more) {
        mores = document.getElementById(TagName+"_more_"+i);
      }
      if(i==num) {
        tag.className = TagClass+"On";
        cont.style.display = "block";
        if(more) {
          mores.style.display = "block";
        }
        } else {
          tag.className = TagClass;
          cont.style.display = "none";
        if(more) {
          mores.style.display = "none";
      }
    }
  }}

  return (
    <>
        <div className="banner">
		<img src="/m/static/picture/wap_server_63.jpg" alt="" />
	</div>

	<div className="con_title">我们的技术服务</div>
	<div>
			<img src="/m/static/picture/wap_server_64.jpg" alt="" />
			<img src="/m/static/picture/wap_server_65.jpg" alt="" />
			<img src="/m/static/picture/wap_server_66.jpg" alt="" />
			<img src="/m/static/picture/wap_server_67.jpg" alt="" />
	</div>
	<div style={{clear:"both"}}></div>


	<div className="con_title">我们的案例</div>
  <ul className="center jsfw_case_tab">
		<li className="jsfwOn" id="jsfw_tab_0" onMouseOver={() => ShowTag('jsfw','jsfw',0,4,0)}>高端定制网站建设</li>
		<li className="jsfw" id="jsfw_tab_1" onMouseOver={() => ShowTag('jsfw','jsfw',1,4,0)}>移动端设计</li>
		<li className="jsfw" id="jsfw_tab_2" onMouseOver={() => ShowTag('jsfw','jsfw',2,4,0)}>微信</li>
		<li className="jsfw" id="jsfw_tab_3" onMouseOver={() => ShowTag('jsfw','jsfw',3,4,0)}>平面设计</li>
	</ul>
	<ul className="center con_jsfw" id="jsfw_cont_0" style={{display: "block"}}>
		<li>
			<img src="/m/static/picture/img-piece1.jpg" alt="" />
			<p>旧街场白咖啡</p>
		</li>
		<li>
			<img src="/m/static/picture/img-piece3.jpg" alt="" />
			<p>富通保险有限公司</p>
		</li>
		<li>
			<img src="/m/static/picture/img-piece4.jpg" alt="" />
			<p>兰思诺</p>
		</li>
		<li>
			<img src="/m/static/picture/img-piece5.jpg" alt="" />
			<p>乔治巴顿</p>
		</li>
	</ul>

	<ul className="con_jsfw-piece center con_jsfw" id="jsfw_cont_1" style={{display: 'none'}}>
		<li className="jsfw_phone">
			<img src="/m/static/picture/img-piece2.jpg" alt="" />
			<p>晨光科力普商城小程序</p>
		</li>
		<li className="jsfw_phone">
			<img src="/m/static/picture/img-piece8.jpg" alt="" />
			<p>紫馨活动六期小程序</p>
		</li>
		<li className="jsfw_phone">
		
			<img src="/m/static/picture/img-piece10.jpg" alt="" />
		
			<p>乔治巴顿小程序</p>
		
		</li>
		<li className="jsfw_phone">
		
			<img src="/m/static/picture/img-piece11.jpg" alt="" />
		
			<p>無印良品餐堂H5开发</p>
		
		</li>
	</ul>

	<ul className="con_jsfw-piece center con_jsfw" id="jsfw_cont_2" style={{display: 'none'}}>
		<li className="jsfw_phone">
			<img src="/m/static/picture/img-piece16.jpg" alt="" />
			<p>买道微信公众号开发</p>
		</li>
		<li className="jsfw_phone">
			<img src="/m/static/picture/img-piece17.jpg" alt="" />
			<p>素氧微信公众号开发</p>
		</li>
	</ul>

	<ul className="con_jsfw-piece center con_jsfw" id="jsfw_cont_3" style={{display: 'none'}}>
		<li className="jsfw_phone">
			<img src="/m/static/picture/img-piece12.jpg" alt="" />
			<p>小火客服</p>
		</li>
		<li className="jsfw_phone">
		
			<img src="/m/static/picture/img-piece13.jpg" alt="" />
		
			<p>链接易</p>
		
		</li>
		<li className="jsfw_phone">
		
			<img src="/m/static/picture/img-piece14.jpg" alt="" />
		
			<p>晓税通</p>
		
		</li>
		<li className="jsfw_phone">
			<img src="/m/static/picture/img-piece15.jpg" alt="" />
			<p>美狮</p>
		</li>
	</ul>

	<div style={{clear:"both"}}></div>

<img src="/m/static/picture/wap_server_72.jpg" alt="" />
	<div className="con_title" style={{fontSize:'28px'}}>天蕾网络团队具有专业的项目管理与执行能力</div>
	<div className="subtitled">严谨的工作流程、完善的团队配置，保证优质产品的输出。</div>
	<img src="/assets/picture/wap_server_79.jpg" alt="" />
    </>
  )
}