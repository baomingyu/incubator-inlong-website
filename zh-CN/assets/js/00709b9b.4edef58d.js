"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1810],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),g=s,f=p["".concat(a,".").concat(g)]||p[g]||m[g]||o;return t?r.createElement(f,u(u({ref:n},c),{},{components:t})):r.createElement(f,u({ref:n},c))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,u=new Array(o);u[0]=p;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:s,u[1]=i;for(var l=2;l<o;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1014:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=t(7462),s=t(3366),o=(t(7294),t(3905)),u=["components"],i={title:"\u6d88\u8d39\u8005\u793a\u4f8b",sidebar_position:5},a=void 0,l={unversionedId:"modules/tubemq/consumer_example",id:"modules/tubemq/consumer_example",isDocsHomePage:!1,title:"\u6d88\u8d39\u8005\u793a\u4f8b",description:"1 Consumer \u793a\u4f8b",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/tubemq/consumer_example.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/consumer_example",permalink:"/zh-CN/docs/next/modules/tubemq/consumer_example",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/tubemq/consumer_example.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u6d88\u8d39\u8005\u793a\u4f8b",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u751f\u4ea7\u8005\u793a\u4f8b",permalink:"/zh-CN/docs/next/modules/tubemq/producer_example"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/next/modules/tubemq/tubemq-manager/overview"}},c=[{value:"1 Consumer \u793a\u4f8b",id:"1-consumer-\u793a\u4f8b",children:[{value:"1.1 PullConsumer",id:"11-pullconsumer",children:[]},{value:"1.2 PushConsumer",id:"12-pushconsumer",children:[]}]}],m={toc:c};function p(e){var n=e.components,t=(0,s.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-consumer-\u793a\u4f8b"},"1 Consumer \u793a\u4f8b"),(0,o.kt)("p",null,"  TubeMQ \u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u6765\u6d88\u8d39\u6d88\u606f\uff1a PullConsumer and PushConsumer\u3002"),(0,o.kt)("h3",{id:"11-pullconsumer"},"1.1 PullConsumer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class PullConsumerExample {\n    public static void main(String[] args) throws Throwable {\n        final String masterHostAndPort = "localhost:8000";\n        final String topic = "test";\n        final String group = "test-group";\n        final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n        consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n        final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n        final PullMessageConsumer messagePullConsumer = messageSessionFactory.createPullConsumer(consumerConfig);\n        messagePullConsumer.subscribe(topic, null);\n        messagePullConsumer.completeSubscribe();\n        // wait for client to join the exact consumer queue that consumer group allocated\n        while (!messagePullConsumer.isPartitionsReady(1000)) {\n            ThreadUtils.sleep(1000);\n        }\n        while (true) {\n            ConsumerResult result = messagePullConsumer.getMessage();\n            if (result.isSuccess()) {\n                List<Message> messageList = result.getMessageList();\n                for (Message message : messageList) {\n                    System.out.println("received message : " + message);\n                }\n                messagePullConsumer.confirmConsume(result.getConfirmContext(), true);\n            }\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"12-pushconsumer"},"1.2 PushConsumer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'  public class PushConsumerExample {\n  \n       public static void test(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final String topic = "test";\n           final String group = "test-group";\n           final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n           consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n           final PushMessageConsumer pushConsumer = messageSessionFactory.createPushConsumer(consumerConfig);\n           pushConsumer.subscribe(topic, null, new MessageListener() {\n               @Override\n               public void receiveMessages(PeerInfo peerInfo, List<Message> messages) throws InterruptedException {\n                   for (Message message : messages) {\n                       System.out.println("received message : " + new String(message.getData()));\n                   }\n               }\n               @Override\n               public Executor getExecutor() {\n                   return null;\n               }\n               @Override\n               public void stop() {\n                   //\n               }\n           });\n           pushConsumer.completeSubscribe();\n           CountDownLatch latch = new CountDownLatch(1);\n           latch.await(10, TimeUnit.MINUTES);\n       }\n   }\n')),(0,o.kt)("hr",null),(0,o.kt)("a",{href:"#top"},"Back to top"))}p.isMDXComponent=!0}}]);