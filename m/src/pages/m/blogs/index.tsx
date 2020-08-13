import React from 'react';
import {PATH_PREFIX, SERVER_URL} from '@/env';
import fetch from 'node-fetch';
import Blogs from '@/app/blogs';
import {BlogType} from '@/app/blog';
import Head from 'next/head';
const pageSize = 10;

const css = [
  'global',
  'style',
  'component',
]

export const getStaticProps = async () => {
  const res = await fetch(SERVER_URL+'/blog/findByPage?pageNum=0&pageSize='+pageSize);
  const data = await res.json();
  const blogs: BlogType[] = data.result;
  const total = data.count;
  const hasNext = pageSize < total;
  const tdkRes = await fetch(SERVER_URL+'/tdk/findByPath?path=/blogs');
  const tdkData = await tdkRes.json();
  const tdk = tdkData.result[0];
  return {
    props: {
      blogs,
      count: total,
      prePage: -1,
      nextPage: hasNext ? 1 : -1,
      tdk,
      pageSize,
      page: 1
    },
  }
}

export default (props: any) => {
  const {tdk} = props;
  return (
    <div>
      <title>{tdk.title}</title>
      <meta name="keywords" content={tdk.keywords}/>
      <meta name="description" content={tdk.description}/>
      <Head>
        {
          css.map((path) => {
            return <link key={path} href={`${PATH_PREFIX}/static/css/${path}.css`} rel="stylesheet" type="text/css"/>;
          })
        }
      </Head>
      <Blogs {...props}/>
    </div>
  )
}