import React from 'react';
import Head from 'next/head';
import App from '@/app/service/xcxkf';
import {PATH_PREFIX, SERVER_URL} from '@/env';

const css = [
  'style',
  'base',
  'css',
  'component',
  'will',
  'resize750',
]

export const getStaticProps = async () => {
  const tdkRes = await fetch(SERVER_URL+'/tdk/findByPath?path=/service/xcxkf');
  const tdkData = await tdkRes.json();
  const tdk = tdkData.result[0];
  return {
    props: {
      tdk
    },
  }
}

export default (props: any) => {
  const {tdk} = props;
  return (
    <>
      <Head>
        <title>{tdk.title}</title>
        <meta name="keywords" content={tdk.keywords}/>
        <meta name="description" content={tdk.description}/>
        <meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi"></meta>
        {
          css.map((path) => {
            return <link key={path} href={`${PATH_PREFIX}/static/css/${path}.css`} rel="stylesheet" type="text/css"/>;
          })
        }
      </Head>
      <App/>
    </>
  )
}