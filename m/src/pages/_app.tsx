import React from 'react';
import Head from 'next/head';
import {PATH_PREFIX} from "@/env";
import '../styles/global.css';

interface Props {
  Component: any
  pageProps: object
}

export default function MyApp(props: Props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>「天蕾」您身边的互联网方案提供商-网站建设-seo优化-网络推广-小程序开发</title>
        <meta name="keywords" content="seo优化,seo推广,网站排名,网络推广,关键词优化,网站制作,网站建设,微信开发,公众号开发,小程序开发,天蕾"/>
        <meta name="description" content="天蕾致力于互联网品牌建设与网络营销，服务领域包括品牌网站建设、移动应用定制、互联网全案制作，一站式整合营销网络推广！全国热线电话：4007806980"/>
        <link rel="canonical" href="http://www.tianlad.com" />
        <meta name="HandheldFriendly" content="true"/>
        <meta baidu-gxt-verify-token="48ce440e470715eb5874ccb010c376a3"/>
        <meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi"></meta>
        <link rel="manifest" href={`${PATH_PREFIX}/manifest.json?v=1`} />
        <link rel="icon" type="image/x-icon" href={`${PATH_PREFIX}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${PATH_PREFIX}/static/pwa.png`}></link>
        {/* <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui"/> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="full-screen" content="yes"/>
        <meta name="x5-fullscreen" content="true"/>
        <meta content="telephone=no" name="format-detection" />
        <meta content="email=no" name="format-detection" />
        <meta name="toTop" content="true"/>
        <script src={`${PATH_PREFIX}/static/js/judge-terminal-equipment.js`}/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        {/* <link rel="stylesheet" href="/m/static/css/base.css" /> */}
        {/* <link rel="stylesheet" href="/m/static/css/css.css" /> */}
        {/* <link rel="stylesheet" href="/m/static/css/will.css" /> */}
        {/* <link rel="stylesheet" href="/m/static/css/new_will.css" /> */}
        <script src="/m/static/js/swiper.min.js"/>
        <script src="/m/static/js/jquery.js"/>
        <script src="/m/static/js/jquery.meanmenu.min.js"/>
        <script src="/m/static/js/modernizr.custom.js"/>
        <script src="/m/static/js/jquery.dlmenu.js"/>
        <script src="/m/static/js/totop.js"/>
        {/* <script src="/m/static/js/c.js"/> */}
        <script src={`${PATH_PREFIX}/static/js/seo.js`}/>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

