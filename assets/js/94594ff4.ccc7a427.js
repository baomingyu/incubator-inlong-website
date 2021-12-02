"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8606],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=r,p=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return t?a.createElement(p,i(i({ref:n},m),{},{components:t})):a.createElement(p,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2887:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return h}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Overview"},c=void 0,l={unversionedId:"modules/dataproxy/overview",id:"modules/dataproxy/overview",isDocsHomePage:!1,title:"Overview",description:"1 intro",source:"@site/docs/modules/dataproxy/overview.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/overview",permalink:"/docs/next/modules/dataproxy/overview",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/dataproxy/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/next/modules/agent/quick_start"},next:{title:"Deployment",permalink:"/docs/next/modules/dataproxy/quick_start"}},m=[{value:"1 intro",id:"1-intro",children:[]},{value:"2 architecture",id:"2-architecture",children:[]},{value:"3 DataProxy support configuration instructions",id:"3-dataproxy-support-configuration-instructions",children:[]},{value:"4 Monitor metrics configuration instructions",id:"4-monitor-metrics-configuration-instructions",children:[]}],u={toc:m};function h(e){var n=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-intro"},"1 intro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Inlong-dataProxy belongs to the inlong proxy layer and is used for data collection, reception and forwarding. Through format conversion, the data is converted into TDMsg1 format that can be cached and processed by the cache layer\nInLong-dataProxy acts as a bridge from the InLong collection end to the InLong buffer end. Dataproxy pulls the relationship between the business group id and the corresponding topic name from the manager module, and internally manages the producers of multiple topics\nThe overall architecture of inlong-dataproxy is based on Apache Flume. On the basis of this project, inlong-bus expands the source layer and sink layer, and optimizes disaster tolerance forwarding, which improves the stability of the system.\n")),(0,o.kt)("h2",{id:"2-architecture"},"2 architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(2961).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The source layer opens port monitoring, which is realized through netty server. The decoded data is sent to the channel layer"),(0,o.kt)("li",{parentName:"ol"},"The channel layer has a selector, which is used to choose which type of channel to go. If the memory is eventually full, the data will be processed."),(0,o.kt)("li",{parentName:"ol"},"The data of the channel layer will be forwarded through the sink layer. The main purpose here is to convert the data to the TDMsg1 format and push it to the cache layer (tube is more commonly used here)")),(0,o.kt)("h2",{id:"3-dataproxy-support-configuration-instructions"},"3 DataProxy support configuration instructions"),(0,o.kt)("p",null,"DataProxy supports configurable source-channel-sink, and the configuration method is the same as the configuration file structure of flume:"),(0,o.kt)("p",null,"Source configuration example and corresponding notes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"agent1.sources.tcp-source.channels = ch-msg1 ch-msg2 ch-msg3 ch-more1 ch-more2 ch-more3 ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9 ch-msg10 ch-transfer ch -Back\nDefine the channel used in the source. Note that if the configuration below this source uses the channel, it needs to be annotated here\n\nagent1.sources.tcp-source.type = org.apache.flume.source.SimpleTcpSource\ntcp resolution type definition, here provide the class name for instantiation, SimpleTcpSource is mainly to initialize the configuration and start port monitoring\n\nagent1.sources.tcp-source.msg-factory-name = org.apache.flume.source.ServerMessageFactory\nHandler used for message structure analysis, and set read stream handler and write stream handler\n\nagent1.sources.tcp-source.host = 0.0.0.0\ntcp ip binding monitoring, binding all network cards by default\n\nagent1.sources.tcp-source.port = 46801\ntcp port binding, port 46801 is bound by default\n\nagent1.sources.tcp-source.highWaterMark=2621440\nThe concept of netty, set the netty high water level value\n\nagent1.sources.tcp-source.enableExceptionReturn=true\nThe new function of v1.7 version, optional, the default is false, used to open the exception channel, when an exception occurs, the data is written to the exception channel to prevent other normal data transmission (the open source version does not add this function), Details: Increase the local disk of abnormal data landing\n\nagent1.sources.tcp-source.max-msg-length = 524288\nLimit the size of a single package, here if the compressed package is transmitted, it is the compressed package size, the limit is 512KB\n\nagent1.sources.tcp-source.topic = test_token\nThe default topic value, if the mapping relationship between groupId and topic cannot be found, it will be sent to this topic\n\nagent1.sources.tcp-source.attr = m=9\nThe default value of m is set, where the value of m is the version of inlong's internal TdMsg protocol\n\nagent1.sources.tcp-source.connections = 5000\nConcurrent connections go online, new connections will be broken when the upper limit is exceeded\n\nagent1.sources.tcp-source.max-threads = 64\nNetty thread pool work thread upper limit, generally recommended to choose twice the cpu\n\nagent1.sources.tcp-source.receiveBufferSize = 524288\nNetty server tcp tuning parameters\n\nagent1.sources.tcp-source.sendBufferSize = 524288\nNetty server tcp tuning parameters\n\nagent1.sources.tcp-source.custom-cp = true\nWhether to use the self-developed channel process, the self-developed channel process can select the alternate channel to send when the main channel is blocked\n\nagent1.sources.tcp-source.selector.type = org.apache.flume.channel.FailoverChannelSelector\nThis channel selector is a self-developed channel selector, which is not much different from the official website, mainly because of the channel master-slave selection logic\n\nagent1.sources.tcp-source.selector.master = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9\nSpecify the master channel, these channels will be preferentially selected for data push. Those channels that are not in the master, transfer, fileMetric, and slaMetric configuration items, but are in\nThere are defined channels in channels, which are all classified as slave channels. When the master channel is full, the slave channel will be selected. Generally, the file channel type is recommended for the slave channel.\n\nagent1.sources.tcp-source.selector.transfer = ch-msg5 ch-msg6 ch-msg7 ch-msg8 ch-msg9\nSpecify the transfer channel to accept the transfer type data. The transfer here generally refers to the data pushed to the non-tube cluster, which is only for forwarding, and it is reserved for subsequent functions.\n\nagent1.sources.tcp-source.selector.fileMetric = ch-back\nSpecify the fileMetric channel to receive the metric data reported by the agent\n")),(0,o.kt)("p",null,"Channel configuration examples and corresponding annotations"),(0,o.kt)("p",null,"memory channel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"agent1.channels.ch-more1.type = memory\nmemory channel type\n\nagent1.channels.ch-more1.capacity = 10000000\nMemory channel queue size, the maximum number of messages that can be cached\n\nagent1.channels.ch-more1.keep-alive = 0\n\nagent1.channels.ch-more1.transactionCapacity = 20\nThe maximum number of batches are processed in atomic operations, and the memory channel needs to be locked when used, so there will be a batch process to increase efficiency\n")),(0,o.kt)("p",null,"file channel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"agent1.channels.ch-msg5.type = file\nfile channel type\n\nagent1.channels.ch-msg5.capacity = 100000000\nThe maximum number of messages that can be cached in a file channel\n\nagent1.channels.ch-msg5.maxFileSize = 1073741824\nfile channel file maximum limit, the number of bytes\n\nagent1.channels.ch-msg5.minimumRequiredSpace = 1073741824\nThe minimum free space of the disk where the file channel is located. Setting this value can prevent the disk from being full\n\nagent1.channels.ch-msg5.checkpointDir = /data/work/file/ch-msg5/check\nfile channel checkpoint path\n\nagent1.channels.ch-msg5.dataDirs = /data/work/file/ch-msg5/data\nfile channel data path\n\nagent1.channels.ch-msg5.fsyncPerTransaction = false\nWhether to synchronize the disk for each atomic operation, it is recommended to change it to false, otherwise it will affect the performance\n\nagent1.channels.ch-msg5.fsyncInterval = 5\nThe time interval between data flush from memory to disk, in seconds\n")),(0,o.kt)("p",null,"Sink configuration example and corresponding notes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"agent1.sinks.meta-sink-more1.channel = ch-msg1\nThe upstream channel name of the sink\n\nagent1.sinks.meta-sink-more1.type = org.apache.flume.sink.MetaSink\nThe sink class is implemented, where the message is implemented to push data to the tube cluster\n\nagent1.sinks.meta-sink-more1.master-host-port-list =\nTube cluster master node list\n\nagent1.sinks.meta-sink-more1.send_timeout = 30000\nTimeout limit when sending to tube\n\nagent1.sinks.meta-sink-more1.stat-interval-sec = 60\nSink indicator statistics interval time, in seconds\n\nagent1.sinks.meta-sink-more1.thread-num = 8\nSink class sends messages to the worker thread, 8 means to start 8 concurrent threads\n\nagent1.sinks.meta-sink-more1.client-id-cache = true\nagent id cache, used to check the data reported by the agent to remove duplicates\n\nagent1.sinks.meta-sink-more1.max-survived-time = 300000\nMaximum cache time\n\nagent1.sinks.meta-sink-more1.max-survived-size = 3000000\nMaximum number of caches\n")),(0,o.kt)("h2",{id:"4-monitor-metrics-configuration-instructions"},"4 Monitor metrics configuration instructions"),(0,o.kt)("p",null,"  DataProxy provide monitor indicator based on JMX, user can implement the code that read the metrics and report to user-defined monitor system.\nSource-module and Sink-module can add monitor metric class that is the subclass of org.apache.inlong.commons.config.metrics.MetricItemSet, and register it to MBeanServer. User-defined plugin can get module metric with JMX, and report metric data to different monitor system."),(0,o.kt)("p",null,'  User can describe the configuration in the file "common.properties ". For example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"metricDomains=DataProxy\nmetricDomains.DataProxy.domainListeners=org.apache.inlong.dataproxy.metrics.prometheus.PrometheusMetricListener\nmetricDomains.DataProxy.snapshotInterval=60000\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The JMX domain name of DataProxy is "DataProxy". ')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'It is defined by the parameter "metricDomains".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The listeners of JMX domain is defined by the parameter "metricDomains.$domainName.domainListeners".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The class names of the listeners is separated by the space char.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The listener class need to implement the interface "org.apache.inlong.dataproxy.metrics.MetricListener".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The snapshot interval of the listeners is defined by the parameter "metricDomains.$domainName.snapshotInterval", the parameter unit is "millisecond".'),(0,o.kt)("p",{parentName:"li"},"The method proto of org.apache.inlong.dataproxy.metrics.MetricListener is:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public void snapshot(String domain, List itemValues);\n")),(0,o.kt)("p",null,'  The field of MetricItemValue.dimensions has these dimensions(The fields of DataProxyMetricItem defined by the Annotation "@Dimension"):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"clusterId: DataProxy cluster ID.\nsourceId: DataProxy source component name.\nsourceDataId: DataProxy source component data id, when source is a TCP source, it will be port number.\ninlongGroupId: Inlong data group ID.\ninlongStreamId: Inlong data stream ID.\nsinkId: DataProxy sink component name.\nsinkDataId: DataProxy sink component data id, when sink is a pulsar sink, it will be topic name.\n")),(0,o.kt)("p",null,'  The field of MetricItemValue.metrics has these metrics(The fields of DataProxyMetricItem defined by the Annotation "@CountMetric"):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"readSuccessCount: Successful event count reading from source component.\nreadSuccessSize: Successful event body size reading from source component.\nreadFailCount: Failure event count reading from source component.\nreadFailSize: Failure event body size reading from source component.\nsendCount: Event count sending to sink destination.\nsendSize: Event body size sending to sink destination.\nsendSuccessCount: Successful event count sending to sink destination.\nsendSuccessSize: Successful event body size sending to sink destination.    \nsendFailCount: Failure event count sending to sink destination.\nsendFailSize: Failure event body size sending to sink destination.\nsinkDuration: The unit is millisecond, the duration is between current timepoint and the timepoint in sending to sink destination.\nnodeDuration: The unit is millisecond, the duration is between current timepoint and the timepoint in getting event from source.\nwholeDuration: The unit is millisecond, the duration is between current timepoint and the timepoint in generating event.\n")),(0,o.kt)("p",null,"  Monitor indicators have registered to MBeanServer, user can append JMX parameters when running DataProxy, remote server can get monitor metrics with RMI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"-Dcom.sun.management.jmxremote\n-Djava.rmi.server.hostname=127.0.0.1\n-Dcom.sun.management.jmxremote.port=9999\n-Dcom.sun.management.jmxremote.authenticate=false\n-Dcom.sun.management.jmxremote.ssl=false\n")))}h.isMDXComponent=!0},2961:function(e,n,t){n.Z=t.p+"assets/images/architecture-138d6143f4f9784999e3161f0797676e.png"}}]);