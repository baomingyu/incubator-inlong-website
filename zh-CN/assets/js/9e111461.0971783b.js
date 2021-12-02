"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3220],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=r.createContext({}),g=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=g(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),s=g(t),d=a,h=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return t?r.createElement(h,i(i({ref:e},p),{},{components:t})):r.createElement(h,i({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:a,i[1]=l;for(var g=2;g<o;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7080:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return g},toc:function(){return p},default:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"\u5b89\u88c5\u90e8\u7f72"},c=void 0,g={unversionedId:"modules/agent/quick_start",id:"modules/agent/quick_start",isDocsHomePage:!1,title:"\u5b89\u88c5\u90e8\u7f72",description:"1 \u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/agent/quick_start.md",sourceDirName:"modules/agent",slug:"/modules/agent/quick_start",permalink:"/zh-CN/docs/next/modules/agent/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/agent/quick_start.md",tags:[],version:"current",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/agent/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/dataproxy/overview"}},p=[{value:"1 \u914d\u7f6e",id:"1-\u914d\u7f6e",children:[{value:"1.1 Agent \u7ebf\u4e0a\u8fd0\u884c\u76f8\u5173\u8bbe\u7f6e",id:"11-agent-\u7ebf\u4e0a\u8fd0\u884c\u76f8\u5173\u8bbe\u7f6e",children:[]}]},{value:"2 \u8fd0\u884c",id:"2-\u8fd0\u884c",children:[]},{value:"3 \u5b9e\u65f6\u6dfb\u52a0job\u914d\u7f6e",id:"3-\u5b9e\u65f6\u6dfb\u52a0job\u914d\u7f6e",children:[{value:"3.1 agent.properties \u4fee\u6539\u4e0b\u9762\u4e24\u5904",id:"31-agentproperties-\u4fee\u6539\u4e0b\u9762\u4e24\u5904",children:[]},{value:"3.2 \u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a",id:"32-\u6267\u884c\u5982\u4e0b\u547d\u4ee4",children:[]}]},{value:"4 \u53ef\u652f\u6301\u7684\u8def\u5f84\u914d\u7f6e\u65b9\u6848",id:"4-\u53ef\u652f\u6301\u7684\u8def\u5f84\u914d\u7f6e\u65b9\u6848",children:[]},{value:"5 \u652f\u6301\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u6570\u636e\u65f6\u95f4",id:"5-\u652f\u6301\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u6570\u636e\u65f6\u95f4",children:[]},{value:"6 \u652f\u6301\u65f6\u95f4\u504f\u79fb\u91cfoffset\u8bfb\u53d6",id:"6-\u652f\u6301\u65f6\u95f4\u504f\u79fb\u91cfoffset\u8bfb\u53d6",children:[]}],u={toc:p};function s(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u914d\u7f6e"},"1 \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd inlong-agent\n")),(0,o.kt)("p",null,"agent \u652f\u6301\u672c\u5730\u8fd0\u884c\u4ee5\u53ca\u7ebf\u4e0a\u8fd0\u884c\uff0c\u5176\u4e2d\u7ebf\u4e0a\u8fd0\u884c\u4eceinlong manager\u62c9\u53d6\u4efb\u52a1\uff0c\u672c\u5730\u8fd0\u884c\u53ef\u4f7f\u7528http\u8bf7\u6c42\u63d0\u4ea4\u4efb\u52a1"),(0,o.kt)("h3",{id:"11-agent-\u7ebf\u4e0a\u8fd0\u884c\u76f8\u5173\u8bbe\u7f6e"},"1.1 Agent \u7ebf\u4e0a\u8fd0\u884c\u76f8\u5173\u8bbe\u7f6e"),(0,o.kt)("p",null,"\u7ebf\u4e0a\u8fd0\u884c\u9700\u8981\u4eceinlong-manager\u62c9\u53d6\u914d\u7f6e\uff0c\u914d\u7f6econf/agent.properties\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"agent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (\u8bbe\u7f6e\u4efb\u52a1\u83b7\u53d6\u7684\u7c7b\u540d\uff0c\u9ed8\u8ba4\u4e3aManagerFetcher\uff09\nagent.local.ip=\u5199\u5165\u672c\u673aip\nagent.manager.vip.http.host=manager web host\nagent.manager.vip.http.port=manager web port\n")),(0,o.kt)("h2",{id:"2-\u8fd0\u884c"},"2 \u8fd0\u884c"),(0,o.kt)("p",null,"\u89e3\u538b\u540e\u5982\u4e0b\u547d\u4ee4\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh agent.sh start\n")),(0,o.kt)("h2",{id:"3-\u5b9e\u65f6\u6dfb\u52a0job\u914d\u7f6e"},"3 \u5b9e\u65f6\u6dfb\u52a0job\u914d\u7f6e"),(0,o.kt)("h3",{id:"31-agentproperties-\u4fee\u6539\u4e0b\u9762\u4e24\u5904"},"3.1 agent.properties \u4fee\u6539\u4e0b\u9762\u4e24\u5904"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# whether enable http service\nagent.http.enable=true\n# http default port\nagent.http.port=\u53ef\u7528\u7aef\u53e3\n")),(0,o.kt)("h3",{id:"32-\u6267\u884c\u5982\u4e0b\u547d\u4ee4"},"3.2 \u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"groupId": "groupId10",\n"streamId": "streamId10"\n},\n"op": "add"\n}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5176\u4e2d\u5404\u4e2a\u53c2\u6570\u542b\u4e49\u4e3a\uff1a\n- job.dir.pattern: \u914d\u7f6e\u8bfb\u53d6\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u5305\u542b\u6b63\u5219\u8868\u8fbe\u5f0f\n- job.trigger: \u89e6\u53d1\u5668\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3aDirectoryTrigger\uff0c\u529f\u80fd\u4e3a\u76d1\u542c\u6587\u4ef6\u5939\u4e0b\u7684\u6587\u4ef6\u4ea7\u751f\u4e8b\u4ef6\uff0c\u4efb\u52a1\u8fd0\u884c\u65f6\u5df2\u6709\u7684\u6587\u4ef6\u4e0d\u4f1a\u8bfb\u53d6\n- job.source: \u4f7f\u7528\u7684\u6570\u636e\u6e90\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3aTextFileSource\uff0c\u8bfb\u53d6\u6587\u672c\u6587\u4ef6\n- job.sink\uff1a\u4f7f\u7528\u7684\u5199\u5165\u5668\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3aProxySink\uff0c\u53d1\u9001\u6d88\u606f\u5230dataproxy\u4e2d\n- proxy.groupId: \u5199\u5165proxy\u65f6\u4f7f\u7528\u7684groupId\uff0cgroupId\u662f\u6307manager\u754c\u9762\u4e2d\uff0c\u6570\u636e\u63a5\u5165\u4e2d\u4e1a\u52a1\u4fe1\u606f\u7684\u4e1a\u52a1ID\uff0c\u6b64\u5904\u4e0d\u662f\u521b\u5efa\u7684tube topic\u540d\u79f0\n- proxy.streamId: \u5199\u5165proxy\u65f6\u4f7f\u7528\u7684streamId\uff0cstreamId\u662f\u6307manager\u754c\u9762\u4e2d\uff0c\u6570\u636e\u63a5\u5165\u4e2d\u6570\u636e\u6d41\u7684\u6570\u636e\u6d41ID\n")),(0,o.kt)("h2",{id:"4-\u53ef\u652f\u6301\u7684\u8def\u5f84\u914d\u7f6e\u65b9\u6848"},"4 \u53ef\u652f\u6301\u7684\u8def\u5f84\u914d\u7f6e\u65b9\u6848"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u4f8b\u5982\uff1a\n/data/inlong-agent/test.log  //\u4ee3\u8868\u8bfb\u53d6inlong-agent\u6587\u4ef6\u5939\u4e0b\u7684\u7684\u65b0\u589e\u6587\u4ef6test.log\n/data/inlong-agent/test[0-9]{1} //\u4ee3\u8868\u8bfb\u53d6inlong-agent\u6587\u4ef6\u5939\u4e0b\u7684\u65b0\u589e\u6587\u4ef6test\u540e\u63a5\u4e00\u4e2a\u6570\u5b57\u7ed3\u5c3e\n/data/inlong-agent/test //\u5982\u679ctest\u4e3a\u76ee\u5f55\uff0c\u5219\u4ee3\u8868\u8bfb\u53d6test\u4e0b\u7684\u6240\u6709\u65b0\u589e\u6587\u4ef6\n/data/inlong-agent/^\\\\d+(\\\\.\\\\d+)? // \u4ee5\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u5b57\u5f00\u5934,\u4e4b\u540e\u53ef\u4ee5\u662f.\u6216\u8005\u4e00\u4e2a.\u6216\u591a\u4e2a\u6570\u5b57\u7ed3\u5c3e\uff0c?\u4ee3\u8868\u53ef\u9009,\u53ef\u4ee5\u5339\u914d\u7684\u5b9e\u4f8b\uff1a"5", "1.5" \u548c "2.21"\n')),(0,o.kt)("h2",{id:"5-\u652f\u6301\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u6570\u636e\u65f6\u95f4"},"5 \u652f\u6301\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u6570\u636e\u65f6\u95f4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Agent\u652f\u6301\u4ece\u6587\u4ef6\u540d\u79f0\u4e2d\u83b7\u53d6\u65f6\u95f4\u5f53\u4f5c\u6570\u636e\u7684\u751f\u4ea7\u65f6\u95f4\uff0c\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\uff1a\n/data/inlong-agent/***YYYYMMDDHH***\n\u5176\u4e2dYYYYDDMMHH\u4ee3\u8868\u6570\u636e\u65f6\u95f4\uff0cYYYY\u8868\u793a\u5e74\uff0cMM\u8868\u793a\u6708\u4efd\uff0cDD\u8868\u793a\u5929\uff0cHH\u8868\u793a\u5c0f\u65f6\n\u5176\u4e2d***\u4e3a\u4efb\u610f\u5b57\u7b26\n\n\u540c\u65f6\u9700\u8981\u5728job conf\u4e2d\u52a0\u5165\u5f53\u524d\u6570\u636e\u7684\u5468\u671f\uff0c\u5f53\u524d\u652f\u6301\u5929\u5468\u671f\u4ee5\u53ca\u5c0f\u65f6\u5468\u671f\uff0c\n\u5728\u6dfb\u52a0\u4efb\u52a1\u65f6\uff0c\u52a0\u5165\u5c5e\u6027job.cycleUnit\n\njob.cycleUnit \u5305\u542b\u5982\u4e0b\u4e24\u79cd\u7c7b\u578b\uff1a\n1\u3001D : \u4ee3\u8868\u6570\u636e\u65f6\u95f4\u5929\u7ef4\u5ea6\n2\u3001H : \u4ee3\u8868\u6570\u636e\u65f6\u95f4\u5c0f\u65f6\u7ef4\u5ea6\n\n\u4f8b\u5982\uff1a\n\u914d\u7f6e\u6570\u636e\u6e90\u4e3a\n/data/inlong-agent/YYYYMMDDHH.log\n\u5199\u5165\u6570\u636e\u5230 2021020211.log\n\u914d\u7f6e job.cycleUnit \u4e3a D\n\u5219agent\u4f1a\u57282021020211\u65f6\u95f4\u5c1d\u8bd52021020211.log\u6587\u4ef6\uff0c\u8bfb\u53d6\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u65f6\uff0c\u4f1a\u5c06\u6240\u6709\u6570\u636e\u4ee520210202\u8fd9\u4e2a\u65f6\u95f4\u5199\u5165\u5230\u540e\u7aefproxy\n\u5982\u679c\u914d\u7f6e job.cycleUnit \u4e3a H\n\u5219\u91c7\u96c62021020211.log\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u65f6\uff0c\u4f1a\u5c06\u6240\u6709\u6570\u636e\u4ee52021020211\u8fd9\u4e2a\u65f6\u95f4\u5199\u5165\u5230\u540e\u7aefproxy\n\n\n\u63d0\u4ea4job\u4e3e\u4f8b\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"groupId": "groupId",\n"streamId": "streamId"\n},\n"op": "add"\n}\'\n')),(0,o.kt)("h2",{id:"6-\u652f\u6301\u65f6\u95f4\u504f\u79fb\u91cfoffset\u8bfb\u53d6"},"6 \u652f\u6301\u65f6\u95f4\u504f\u79fb\u91cfoffset\u8bfb\u53d6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5728\u914d\u7f6e\u6309\u7167\u65f6\u95f4\u8bfb\u53d6\u4e4b\u540e\uff0c\u5982\u679c\u60f3\u8981\u8bfb\u53d6\u5f53\u524d\u65f6\u95f4\u4e4b\u5916\u7684\u5176\u4ed6\u65f6\u95f4\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u65f6\u95f4\u504f\u79fb\u91cf\u5b8c\u6210\n\u914d\u7f6ejob\u5c5e\u6027\u540d\u79f0\u4e3ajob.timeOffset\uff0c\u503c\u4e3a\u6570\u5b57 + \u65f6\u95f4\u7ef4\u5ea6\uff0c\u65f6\u95f4\u7ef4\u5ea6\u5305\u62ec\u5929\u548c\u5c0f\u65f6\n\u4f8b\u5982\u652f\u6301\u5982\u4e0b\u8bbe\u7f6e\n1\u3001 1d \u8bfb\u53d6\u5f53\u524d\u65f6\u95f4\u540e\u4e00\u5929\u7684\u6570\u636e \n2\u3001 -1h \u8bfb\u53d6\u5f53\u524d\u65f6\u95f4\u524d\u4e00\u4e2a\u5c0f\u65f6\u7684\u6570\u636e\n\n\n\u63d0\u4ea4job\u4e3e\u4f8b\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8008/config/job\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"timeOffset": "-1d",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"groupId": "groupId",\n"streamId": "streamId"\n},\n"op": "add"\n}\'\n')))}s.isMDXComponent=!0}}]);