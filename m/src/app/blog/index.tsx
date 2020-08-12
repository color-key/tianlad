import React from 'react';

import Content from './content';
import Header from '../layout/header';

export interface BlogType{
  id: number
  title: string
  keywords: string
  description: string
  thumbnail: string
  content: string
  createTime: string
  updateTime: string
}

interface Props{
  blog: BlogType
  preBlog: BlogType
  nextBlog: BlogType
}

function Blog(props: Props) {
  return (
    <div className="container">
      <Header/>
      <Content {...props}/>
    </div>
  )
}

export default Blog