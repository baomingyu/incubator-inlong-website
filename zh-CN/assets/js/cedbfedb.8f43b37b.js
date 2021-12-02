"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8541],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9092:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"\u5165\u5e93 Hive \u793a\u4f8b",sidebar_position:2},c=void 0,p={unversionedId:"quick_start/hive_example",id:"quick_start/hive_example",isDocsHomePage:!1,title:"\u5165\u5e93 Hive \u793a\u4f8b",description:"\u672c\u8282\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5e2e\u52a9\u60a8\u4f7f\u7528 Docker \u5feb\u901f\u4f53\u9a8c InLong \u7684\u5b8c\u6574\u6d41\u7a0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/quick_start/hive_example.md",sourceDirName:"quick_start",slug:"/quick_start/hive_example",permalink:"/zh-CN/docs/next/quick_start/hive_example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/quick_start/hive_example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5165\u5e93 Hive \u793a\u4f8b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u7f16\u8bd1",permalink:"/zh-CN/docs/next/quick_start/how_to_build"},next:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/next/deployment/standalone"}},u=[{value:"1 \u5b89\u88c5 Hive",id:"1-\u5b89\u88c5-hive",children:[]},{value:"2 \u5b89\u88c5 InLong",id:"2-\u5b89\u88c5-inlong",children:[]},{value:"3 \u65b0\u5efa\u63a5\u5165",id:"3-\u65b0\u5efa\u63a5\u5165",children:[]},{value:"4 \u5ba1\u6279\u63a5\u5165",id:"4-\u5ba1\u6279\u63a5\u5165",children:[]},{value:"5 \u914d\u7f6e agent",id:"5-\u914d\u7f6e-agent",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u8282\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5e2e\u52a9\u60a8\u4f7f\u7528 Docker \u5feb\u901f\u4f53\u9a8c InLong \u7684\u5b8c\u6574\u6d41\u7a0b\u3002"),(0,o.kt)("h2",{id:"1-\u5b89\u88c5-hive"},"1 \u5b89\u88c5 Hive"),(0,o.kt)("p",null,"Hive \u662f\u8fd0\u884c\u7684\u5fc5\u5907\u7ec4\u4ef6\u3002\u5982\u679c\u60a8\u7684\u673a\u5668\u4e0a\u6ca1\u6709 Hive\uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 Docker \u8fdb\u884c\u5feb\u901f\u5b89\u88c5\uff0c\u8be6\u60c5\u53ef\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/big-data-europe/docker-hive"},"\u8fd9\u91cc"),"\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5982\u679c\u4f7f\u7528\u4ee5\u4e0a Docker \u955c\u50cf\u7684\u8bdd\uff0c\u6211\u4eec\u9700\u8981\u5728 namenode \u4e2d\u6dfb\u52a0\u4e00\u4e2a\u7aef\u53e3\u6620\u5c04 ",(0,o.kt)("inlineCode",{parentName:"p"},"8020:8020"),"\uff0c\u56e0\u4e3a\u5b83\u662f HDFS DefaultFS \u7684\u7aef\u53e3\uff0c\u540e\u9762\u5728\u914d\u7f6e Hive \u65f6\u9700\u8981\u7528\u5230\u3002")),(0,o.kt)("h2",{id:"2-\u5b89\u88c5-inlong"},"2 \u5b89\u88c5 InLong"),(0,o.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b89\u88c5 InLong \u7684\u5168\u90e8\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6309\u7167 ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/deployment/docker"},"\u8fd9\u91cc\u7684\u8bf4\u660e"),"\uff0c\u4f7f\u7528 Docker \u8fdb\u884c\u5feb\u901f\u90e8\u7f72\u3002\uff08\u63a8\u8350\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u6309\u7167 ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/deployment/bare_metal"},"\u8fd9\u91cc\u7684\u8bf4\u660e"),"\uff0c\u4f7f\u7528\u4e8c\u8fdb\u5236\u5305\u4f9d\u6b21\u5b89\u88c5\u5404\u7ec4\u4ef6\u3002")),(0,o.kt)("h2",{id:"3-\u65b0\u5efa\u63a5\u5165"},"3 \u65b0\u5efa\u63a5\u5165"),(0,o.kt)("p",null,"\u90e8\u7f72\u5b8c\u6bd5\u540e\uff0c\u9996\u5148\u6211\u4eec\u8fdb\u5165 \u201c\u6570\u636e\u63a5\u5165\u201d \u754c\u9762\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684 \u201c\u65b0\u5efa\u63a5\u5165\u201d\uff0c\u65b0\u5efa\u4e00\u6761\u63a5\u5165\uff0c\u6309\u4e0b\u56fe\u6240\u793a\u586b\u5165\u4e1a\u52a1\u4fe1\u606f"),(0,o.kt)("img",{src:"../../img/create-business.png",align:"center",alt:"Create Business"}),(0,o.kt)("p",null,"\u7136\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u6309\u4e0b\u56fe\u6240\u793a\u586b\u5165\u6570\u636e\u6d41\u4fe1\u606f"),(0,o.kt)("img",{src:"../../img/create-stream.png",align:"center",alt:"Create Stream"}),(0,o.kt)("p",null,"\u6ce8\u610f\u5176\u4e2d\u6d88\u606f\u6765\u6e90\u9009\u62e9\u201c\u6587\u4ef6\u201d\uff0c\u6682\u65f6\u4e0d\u7528\u65b0\u5efa\u6570\u636e\u6e90\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5728\u4e0b\u9762\u7684\u201c\u6570\u636e\u4fe1\u606f\u201d\u4e00\u680f\u4e2d\u586b\u5165\u4ee5\u4e0b\u4fe1\u606f"),(0,o.kt)("img",{src:"../../img/data-information.png",align:"center",alt:"Data Information"}),(0,o.kt)("p",null,"\u7136\u540e\u5728\u6570\u636e\u6d41\u5411\u4e2d\u9009\u62e9 Hive\uff0c\u5e76\u70b9\u51fb \u201c\u6dfb\u52a0\u201d\uff0c\u6dfb\u52a0 Hive \u914d\u7f6e"),(0,o.kt)("img",{src:"../../img/hive-config.png",align:"center",alt:"Hive Config"}),(0,o.kt)("p",null,"\u6ce8\u610f\u8fd9\u91cc\u76ee\u6807\u8868\u65e0\u9700\u63d0\u524d\u521b\u5efa\uff0cInLong Manager \u4f1a\u5728\u63a5\u5165\u901a\u8fc7\u4e4b\u540e\u81ea\u52a8\u4e3a\u6211\u4eec\u521b\u5efa\u8868\u3002\u53e6\u5916\uff0c\u8bf7\u4f7f\u7528 \u201c\u8fde\u63a5\u6d4b\u8bd5\u201d \u4fdd\u8bc1 InLong Manager \u53ef\u4ee5\u8fde\u63a5\u5230\u4f60\u7684 Hive\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u70b9\u51fb\u201c\u63d0\u4ea4\u5ba1\u6279\u201d\u6309\u94ae\uff0c\u8be5\u63a5\u5165\u5c31\u4f1a\u521b\u5efa\u6210\u529f\uff0c\u8fdb\u5165\u5ba1\u6279\u72b6\u6001\u3002"),(0,o.kt)("h2",{id:"4-\u5ba1\u6279\u63a5\u5165"},"4 \u5ba1\u6279\u63a5\u5165"),(0,o.kt)("p",null,"\u8fdb\u5165\u201c\u5ba1\u6279\u7ba1\u7406\u201d\u754c\u9762\uff0c\u70b9\u51fb\u201c\u6211\u7684\u5ba1\u6279\u201d\uff0c\u5c06\u521a\u521a\u7533\u8bf7\u7684\u63a5\u5165\u901a\u8fc7\u3002"),(0,o.kt)("p",null,"\u5230\u6b64\u63a5\u5165\u5c31\u5df2\u7ecf\u521b\u5efa\u5b8c\u6bd5\u4e86\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Hive \u4e2d\u770b\u5230\u76f8\u5e94\u7684\u8868\u5df2\u7ecf\u88ab\u521b\u5efa\uff0c\u5e76\u4e14\u5728 TubeMQ \u7684\u7ba1\u7406\u754c\u9762\u4e2d\u53ef\u4ee5\u770b\u5230\u76f8\u5e94\u7684 topic \u5df2\u7ecf\u521b\u5efa\u6210\u529f\u3002"),(0,o.kt)("h2",{id:"5-\u914d\u7f6e-agent"},"5 \u914d\u7f6e agent"),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u4f7f\u7528 docker \u8fdb\u5165 agent \u5bb9\u5668\u5185\uff0c\u521b\u5efa\u76f8\u5e94\u7684 agent \u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker exec -it agent sh\n")),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u65b0\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},".inlong")," \u6587\u4ef6\u5939\uff0c\u5e76\u521b\u5efa\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"groupId.local")," \u547d\u540d\u7684\u6587\u4ef6\uff0c\u5728\u5176\u4e2d\u586b\u5165 Dataproxy \u6709\u5173\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ mkdir .inlong\n$ cd .inlong\n$ touch b_test.local\n$ echo \'{"cluster_id":1,"isInterVisit":1,"size":1,"address": [{"port":46801,"host":"dataproxy"}], "switch":0}\' >> b_test.local\n')),(0,o.kt)("p",null,"\u7136\u540e\u9000\u51fa\u5bb9\u5668\uff0c\u4f7f\u7528 curl \u5411 agent \u5bb9\u5668\u53d1\u9001\u8bf7\u6c42\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/collect-data/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"groupId": "b_test",\n"streamId": "test_stream"\n},\n"op": "add"\n}\'\n')),(0,o.kt)("p",null,"\u81f3\u6b64\uff0cagent \u5c31\u914d\u7f6e\u5b8c\u6bd5\u4e86\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u53ef\u4ee5\u65b0\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"./collect-data/test.log")," \uff0c\u5e76\u5f80\u91cc\u9762\u6dfb\u52a0\u5185\u5bb9\uff0c\u6765\u89e6\u53d1 agent \u5411 dataproxy \u53d1\u9001\u6570\u636e\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ touch collect-data/test.log\n$ echo 'test,24' >> collect-data/test.log\n")),(0,o.kt)("p",null,"\u7136\u540e\u89c2\u5bdf agent \u548c dataproxy \u7684\u65e5\u5fd7\uff0c\u53ef\u4ee5\u770b\u5230\u76f8\u5173\u6570\u636e\u5df2\u7ecf\u6210\u529f\u53d1\u9001\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker logs agent\n$ docker logs dataproxy\n")))}d.isMDXComponent=!0}}]);