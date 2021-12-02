"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7034],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1590:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"\u7f16\u8bd1\u90e8\u7f72"},u=void 0,c={unversionedId:"modules/dataproxy/quick_start",id:"version-0.11.0/modules/dataproxy/quick_start",isDocsHomePage:!1,title:"\u7f16\u8bd1\u90e8\u7f72",description:"\u90e8\u7f72 DataProxy",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/zh-CN/docs/modules/dataproxy/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/dataproxy/quick_start.md",tags:[],version:"0.11.0",frontMatter:{title:"\u7f16\u8bd1\u90e8\u7f72"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"\u67b6\u6784\u4ecb\u7ecd",permalink:"/zh-CN/docs/modules/dataproxy/architecture"},next:{title:"\u67b6\u6784\u4ecb\u7ecd",permalink:"/zh-CN/docs/modules/dataproxy-sdk/architecture"}},p=[{value:"\u90e8\u7f72 DataProxy",id:"\u90e8\u7f72-dataproxy",children:[{value:"\u914d\u7f6etube\u5730\u5740\u548c\u7aef\u53e3\u53f7",id:"\u914d\u7f6etube\u5730\u5740\u548c\u7aef\u53e3\u53f7",children:[]},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u914d\u7f6emanager\u5730\u5740",id:"\u914d\u7f6emanager\u5730\u5740",children:[]}]},{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[]},{value:"\u68c0\u67e5\u542f\u52a8\u72b6\u6001",id:"\u68c0\u67e5\u542f\u52a8\u72b6\u6001",children:[]},{value:"\u5c06 DataProxy \u914d\u7f6e\u6dfb\u52a0\u5230 InLong-Manager",id:"\u5c06-dataproxy-\u914d\u7f6e\u6dfb\u52a0\u5230-inlong-manager",children:[]}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u90e8\u7f72-dataproxy"},"\u90e8\u7f72 DataProxy"),(0,o.kt)("p",null,"\u6240\u6709\u7684\u5b89\u88c5\u6587\u4ef6\u90fd\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," \u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("h3",{id:"\u914d\u7f6etube\u5730\u5740\u548c\u7aef\u53e3\u53f7"},"\u914d\u7f6etube\u5730\u5740\u548c\u7aef\u53e3\u53f7"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tubemq_master_list"),"\u662fTubeMQ master rpc\u5730\u5740\uff0c\u591a\u4e2a\u9017\u53f7\u5206\u9694\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sed -i 's/TUBE_LIST/tubemq_master_list/g' conf/flume.conf\n")),(0,o.kt)("p",null,"\u6ce8\u610fconf/flume.conf\u4e2dFLUME_HOME\u4e3aproxy\u7684\u4e2d\u95f4\u6570\u636e\u6587\u4ef6\u5b58\u653e\u5730\u5740"),(0,o.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh prepare_env.sh\n")),(0,o.kt)("h3",{id:"\u914d\u7f6emanager\u5730\u5740"},"\u914d\u7f6emanager\u5730\u5740"),(0,o.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# manager web url \nmanager_hosts=ip:port \n")),(0,o.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh bin/start.sh\n")),(0,o.kt)("h2",{id:"\u68c0\u67e5\u542f\u52a8\u72b6\u6001"},"\u68c0\u67e5\u542f\u52a8\u72b6\u6001"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,o.kt)("h2",{id:"\u5c06-dataproxy-\u914d\u7f6e\u6dfb\u52a0\u5230-inlong-manager"},"\u5c06 DataProxy \u914d\u7f6e\u6dfb\u52a0\u5230 InLong-Manager"),(0,o.kt)("p",null,"\u5b89\u88c5\u5b8c DataProxy \u540e\uff0c\u9700\u8981\u5c06 DataProxy \u6240\u5728\u4e3b\u673a\u7684 IP \u63d2\u5165\u5230 InLong-Manager \u7684\u540e\u53f0\u6570\u636e\u5e93\u4e2d\u3002"),(0,o.kt)("p",null,"InLong-Manager \u7684\u540e\u53f0\u6570\u636e\u5e93\u5730\u5740\uff0c\u8bf7\u53c2\u8003 InLong-Manager \u6a21\u5757\u7684\u90e8\u7f72\u6587\u6863\u3002"),(0,o.kt)("p",null,"\u63d2\u5165 SQL \u8bed\u53e5\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'-- name \u4e3a DataProxy \u7684\u540d\u79f0\uff0c\u53ef\u81ea\u5b9a\u4e49\n-- address \u4e3a DataProxy \u670d\u52a1\u6240\u5728\u4e3b\u673a\u7684 IP\n-- port \u4e3a DataProxy \u670d\u52a1\u6240\u5728\u7684\u7aef\u53e3\u53f7\uff0c\u9ed8\u8ba4\u662f 46801\ninsert into data_proxy_cluster (name, address, port, status, is_deleted, create_time, modify_time)\nvalues ("data_proxy_name", "data_proxy_ip", 46801, 0, 0, now(), now());\n')))}d.isMDXComponent=!0}}]);