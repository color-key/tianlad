(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),i=n("FYa8"),u=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],d=r[s]||new Set;d.has(l)?a=!1:(d.add(l),r[s]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var v=m;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PDHd:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=n("XwMy"),i=n("y21Y"),u=n("8Kt/"),c=n.n(u),s=o.a.createElement,l=["basic","css","inside_page","tianlad"],f=!0;t.default=function(e){var t=e.tdk;return s("div",null,s(c.a,null,s("title",null,t.title),s("meta",{name:"keywords",content:t.keywords}),s("meta",{name:"description",content:t.description}),l.map((function(e){return s("link",{key:e,href:"".concat(a.b,"/static/css/").concat(e,".css"),rel:"stylesheet",type:"text/css"})}))),s(i.a,e))}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),s=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(s,u);var c=l(s);function s(e){var a;return r(this,s),a=c.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},XwMy:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r="/home",o="/api"},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},wekt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/blogs/[page]",function(){return n("PDHd")}])},y21Y:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=o.a.createElement,i=function(){return a("div",{className:"inside-page-banner-common"},a("p",{className:"inside-page-p1"},"\u5929\u857e\u5e7f\u544a"),a("span",{className:"inside-page-span1"},"\u60a8\u8eab\u8fb9\u7684\u4e92\u8054\u7f51\u5e94\u7528\u65b9\u6848\u63d0\u4f9b\u5546"))},u=n("XwMy"),c=o.a.createElement,s=u.b+"/blog/",l=function(e){var t=e.blog;return c("div",{className:"blog_list"},c("div",{className:"blog_tx"},c("a",{href:s+t.id,"data-img":t.thumbnail,"data-litpic":t.thumbnail,className:"preview"},c("img",{src:t.thumbnail}),c("br",null))),c("div",{className:"blog_list_nr"},c("h2",{style:{marginTop:"20px"}},c("a",{href:s+t.id,className:"blog_title"},t.title)),c("p",null,t.description),c("div",{className:"blog_list_more"},c("a",{href:s+t.id},"Read More >>"))),c("div",{className:"clear"}))},f=o.a.createElement,d=u.b+"/blogs/",p=function(e){var t=e.blogs,n=e.prePage,r=e.nextPage,o=e.count;return f("div",{className:"contain"},f("div",{className:"blog_path"},f("a",{href:"/"},"\u9996\u9875"),"\xa0>\xa0",f("a",{href:"/home/blogs"},"\u5929\u857e\u5b66\u5802")),f("div",{className:"blog_left",style:{float:"left"}},t.map((function(e){return f(l,{key:e.id,blog:e})})),f("div",{id:"pageNav"},f("a",{className:"a1"},o,"\u6761"),n>-1&&f("a",{href:d+n,className:"a1"},"\u4e0a\u4e00\u9875"),r>-1&&f("a",{href:d+r,className:"a1"},"\u4e0b\u4e00\u9875"))),f("div",{className:"clear"}))},m=o.a.createElement;t.a=function(e){var t=e.blogs,n=void 0===t?[]:t,r=e.prePage,a=e.nextPage,u=e.count;return m(o.a.Fragment,null,m(i,null),m(p,{blogs:n,prePage:r,nextPage:a,count:u}),m("div",{className:"clear"}),m("div",{style:{height:"30px"}}))}}},[["wekt",0,1]]]);