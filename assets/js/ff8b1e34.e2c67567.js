"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9985],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6258:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),c=["components"],i={title:"Docker",sidebar_position:2},a=void 0,p={unversionedId:"deployment/docker",id:"deployment/docker",isDocsHomePage:!1,title:"Docker",description:"Deploy all InLong module by Docker Compose, it's only available for development.",source:"@site/docs/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/docs/next/deployment/docker",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/deployment/docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Docker",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Standalone",permalink:"/docs/next/deployment/standalone"},next:{title:"Kubernetes",permalink:"/docs/next/deployment/k8s"}},u=[{value:"Deploy",id:"deploy",children:[]},{value:"Use InLong",id:"use-inlong",children:[]},{value:"Destroy",id:"destroy",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Deploy all InLong module by Docker Compose, it's only available for development."),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,l.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,l.kt)("h2",{id:"deploy"},"Deploy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,l.kt)("h2",{id:"use-inlong"},"Use InLong"),(0,l.kt)("p",null,"After all containers run successfully, you can access ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost")," with default account:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,l.kt)("h2",{id:"destroy"},"Destroy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker-compose down\n")))}d.isMDXComponent=!0}}]);