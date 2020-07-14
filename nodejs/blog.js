const {query} = require('./mysql');
const {getQueryString} = require('./lib/query');
const moment = require('moment');

const mysqlTable = "tianlad_blog";

// id，title，keywords，description，thumbnail，content

const add = async (ctx) => {
  const data = ctx.request.body;
  const sql = 'INSERT INTO '+mysqlTable+' SET ?';
  const args = data;
  const res = await query(sql, args);
  return res;
}

const edit = async (ctx) => {
  const data = ctx.request.body;
  const sql = "UPDATE "+mysqlTable+" SET title='"+data.title+"', keywords='"+data.keywords+"', description='"+data.description+"', thumbnail='"+data.thumbnail+"', content='"+data.content+"' WHERE id='"+data.id+"'";
  const res = await query(sql);
  return res;
}

const findById = async (ctx) => {
  const id = getQueryString(ctx.request, 'id');
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE `id` = ?';
  const args = [id];
  const res = await query(sql, args);
  return res;
}

const findByPage = async (ctx) => {
  const title = getQueryString(ctx.request, 'title') || '';
  const keywords = getQueryString(ctx.request, 'keywords') || '';
  const description = getQueryString(ctx.request, 'description') || '';
  const content = getQueryString(ctx.request, 'content') || '';
  const pageNum = getQueryString(ctx.request, 'pageNum') || 0;
  const pageSize = getQueryString(ctx.request, 'pageSize') || 10;
  let queryDataStr = '';
  queryDataStr += ' title like "%'+title+'%"';
  queryDataStr += ' or';
  queryDataStr += ' keywords like "%'+keywords+'%"';
  queryDataStr += ' or';
  queryDataStr += ' description like "%'+description+'%"';
  queryDataStr += ' or';
  queryDataStr += ' content like "%'+content+'%"';
  let pageQueryStr = ' limit '+(pageNum*pageSize)+','+pageSize+';'
  const sql = 'SELECT * FROM '+mysqlTable+' WHERE'+queryDataStr+pageQueryStr;
  const args = [];
  const res = await query(sql, args);
  if(res.success){
    res.result.map((item) => {
      item.createTime = moment(item.createTime).format('YYYY/MM/DD HH:mm');
      item.updateTime = moment(item.updateTime).format('YYYY/MM/DD HH:mm');
    })
  }
  const findCountRes = await findCount(queryDataStr);
  if(findCountRes.success && findCountRes.result[0]){
    res.count = findCountRes.result[0].total;
  }else{
    res.count = 0;
  }
  return res;
}

const findCount = async (queryDataStr) => {
  const sql = 'SELECT COUNT(*) as total FROM '+mysqlTable + (queryDataStr?(' WHERE'+queryDataStr):'');
  const args = [];
  const res = await query(sql, args);
  return res;
}

const findIds = async () => {
  const sql = 'SELECT id FROM '+mysqlTable;
  const args = [];
  const res = await query(sql, args);
  return res;
}

module.exports = {
  add,
  edit,
  findByPage,
  findById,
  findCount,
  findIds
}