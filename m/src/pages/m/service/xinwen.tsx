import React from 'react';
import Head from 'next/head';
import App from '@/app/service/xinwen';
import {PATH_PREFIX, SERVER_URL} from '@/env';

const css = [
  'style',
  'base',
  'css',
  'component',
  'will',
  'new_will',
  'resize750',
]

export const getStaticProps = async () => {
  const tdkRes = await fetch(SERVER_URL+'/tdk/findByPath?path=/service/xinwen');
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
    <div>
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
    </div>
  )
}