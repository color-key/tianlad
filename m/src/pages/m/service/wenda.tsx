import React from 'react';
import Head from 'next/head';
import App from '@/app/service/wenda';
import {SERVER_URL, PATH_PREFIX} from '@/env';

const css = [
  'global',
  'style',
  'component',
]

export const getStaticProps = async () => {
  const tdkRes = await fetch(SERVER_URL+'/tdk/findByPath?path=/service/wenda');
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