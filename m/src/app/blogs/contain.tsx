import React from 'react';
import {BlogType} from '../blog';
import {PATH_PREFIX} from '@/env';
import Pagination from '@material-ui/lab/Pagination';
import {useRouter} from 'next/router';

interface Props{
  blogs: BlogType[]
  prePage: number
  nextPage: number
  count: number,
  pageSize: number,
  page: number
}

export default ({blogs, count, pageSize, page}: Props) => {
  const router = useRouter();

  const handleChange = (_event: any, value: any) => {
    router.push('/m/blogs/'+value);
  };

  return (
    <>
      {
        blogs.map((blog: BlogType) => {
          const url = PATH_PREFIX + '/blog/'+blog.id;
          return (
            <div key={blog.id} className="index_blog">
              <a href={url} className='preview'>
                <div className="toux">
                </div>
              </a>
              <a href={url} title={blog.title}>
                <div className="blog_cont">
                  <div className="blog_title">{blog.title}</div>
                  <div className="blog_biref">{blog.description.substr(0, 35)}......</div>
                  <div className="blog_date blog_bg">{blog.createTime}</div>
                </div>
              </a>
            </div>
          );
        })
      }
      <div id="pageNav">
        <Pagination page={page} count={Math.ceil(count/pageSize)} onChange={handleChange} showFirstButton showLastButton/>
      </div>
    </>
  )
}