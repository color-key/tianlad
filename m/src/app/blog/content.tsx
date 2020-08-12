import React from 'react';
import {Text} from '@fay-react/material/richText';
import {BlogType} from '.';

interface Props{
  blog: BlogType
  preBlog: BlogType
  nextBlog: BlogType
}

export default ({blog, preBlog, nextBlog}: Props) => {

  React.useEffect(() => {
    $(function() {
      $('#dl-menu').dlmenu();
    });
  }, []);

  return (
    <>
      <div className="wzy_title_main">
        <div className="wzy_title">
          {blog.title}
        </div>
        <div className="wzy_date_write">
          <div className="blog_date blog_bg">{blog.createTime}</div>
        </div>
      </div>
      <div className="content">
        <Text value={blog.content}/>
      </div>
      <div className="details_tag"/>
        <div className="details_page">
        <ul>
          {
            preBlog &&
            <li className="pre">上一篇：<a href={"/m/blog/"+preBlog.id}>{preBlog.title}</a> </li>
          }
          {
            nextBlog &&
            <li className="next">下一篇：<a href={"/m/blog/"+nextBlog.id}>{nextBlog.title}</a> </li>
          }
        </ul>
      </div>
    </>
  )
}