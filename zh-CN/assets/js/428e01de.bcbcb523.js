"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3935],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||c;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3532:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={title:"HTTP API\u4ecb\u7ecd"},u=void 0,s={unversionedId:"modules/tubemq/http_access_api",id:"modules/tubemq/http_access_api",isDocsHomePage:!1,title:"HTTP API\u4ecb\u7ecd",description:"HTTP API\u662fMaster\u6216\u8005Broker\u5bf9\u5916\u529f\u80fd\u66b4\u9732\u7684\u63a5\u53e3\uff0c\u7ba1\u63a7\u53f0\u7684\u5404\u9879\u64cd\u4f5c\u90fd\u662f\u57fa\u4e8e\u8fd9\u4e9bAPI\u8fdb\u884c\uff1b\u5982\u679c\u6709\u6700\u65b0\u7684\u529f\u80fd\uff0c\u6216\u8005\u7ba1\u63a7\u53f0\u6ca1\u6709\u6db5\u76d6\u7684\u529f\u80fd\uff0c\u4e1a\u52a1\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u8c03\u7528HTTP API\u63a5\u53e3\u5b8c\u6210\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/tubemq/http_access_api.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/http_access_api",permalink:"/zh-CN/docs/next/modules/tubemq/http_access_api",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/tubemq/http_access_api.md",tags:[],version:"current",frontMatter:{title:"HTTP API\u4ecb\u7ecd"},sidebar:"tutorialSidebar",previous:{title:"\u9519\u8bef\u7801\u5b9a\u4e49",permalink:"/zh-CN/docs/next/modules/tubemq/error_code"},next:{title:"TubeMQ VS Kafka",permalink:"/zh-CN/docs/next/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"}},l=[],p={toc:l};function m(e){var t=e.components,i=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"HTTP API\u662fMaster\u6216\u8005Broker\u5bf9\u5916\u529f\u80fd\u66b4\u9732\u7684\u63a5\u53e3\uff0c\u7ba1\u63a7\u53f0\u7684\u5404\u9879\u64cd\u4f5c\u90fd\u662f\u57fa\u4e8e\u8fd9\u4e9bAPI\u8fdb\u884c\uff1b\u5982\u679c\u6709\u6700\u65b0\u7684\u529f\u80fd\uff0c\u6216\u8005\u7ba1\u63a7\u53f0\u6ca1\u6709\u6db5\u76d6\u7684\u529f\u80fd\uff0c\u4e1a\u52a1\u90fd\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u8c03\u7528HTTP API\u63a5\u53e3\u5b8c\u6210\u3002"),(0,c.kt)("p",null,"\u8be5\u90e8\u5206\u63a5\u53e3\u4e00\u5171\u67094\u4e2a\u90e8\u5206\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Master\u5143\u6570\u636e\u914d\u7f6e\u76f8\u5173\u7684\u64cd\u4f5c\u63a5\u53e3\uff0c\u63a5\u53e3\u6570\u91cf 24\u4e2a"),(0,c.kt)("li",{parentName:"ul"},"Master\u6d88\u8d39\u6743\u9650\u64cd\u4f5c\u63a5\u53e3\uff0c\u63a5\u53e3\u6570\u91cf 33\u4e2a "),(0,c.kt)("li",{parentName:"ul"},"Master\u8ba2\u9605\u5173\u7cfb\u63a5\u53e3\uff0c\u63a5\u53e3\u6570\u91cf 2\u4e2a"),(0,c.kt)("li",{parentName:"ul"},"Broker\u76f8\u5173\u64cd\u4f5c\u63a5\u53e3\u5b9a\u4e49\uff0c\u63a5\u53e3\u6570\u91cf 6\u4e2a\n",(0,c.kt)("img",{src:r(6820).Z}))),(0,c.kt)("p",null,"\u7531\u4e8e\u63a5\u53e3\u4f17\u591a\u4e14\u53c2\u6570\u7e41\u6742\uff0cmd\u683c\u5f0f\u4e0d\u80fd\u6bd4\u8f83\u597d\u7684\u8868\u8fbe\uff0c\u56e0\u800c\u4ee5excel\u9644\u4ef6\u5f62\u5f0f\u63d0\u4f9b\u7ed9\u5230\u5927\u5bb6\uff1a"),(0,c.kt)("a",{href:"/appendixfiles/http_access_api_definition_cn.xls",download:"http_access_api_definition_cn.xls"},"TubeMQ HTTP API"),(0,c.kt)("hr",null),(0,c.kt)("a",{href:"#top"},"Back to top"))}m.isMDXComponent=!0},6820:function(e,t,r){t.Z=r.p+"assets/images/http-api-4e87591b4f9c3ccfc757e8c5ebc7de74.png"}}]);