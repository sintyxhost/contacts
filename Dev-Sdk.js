!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("commonninja-js-sdk",[],t):"object"==typeof exports?exports["commonninja-js-sdk"]=t():e["commonninja-js-sdk"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,i){function o(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function l(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?n(e.value):o(e.value).then(s,l)}a((i=i.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){function n(e){return function(t){return i([e,t])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,r&&(s=2&n[0]?r.return:n[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,r=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],r=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,s,l,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return l={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l},s=this&&this.__spreadArray||function(e,t){for(var n=0,i=t.length,o=e.length;n<i;n++,o++)e[o]=t[n];return e};Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),a=function(){function e(e){var t=this;this.window=e,this.defaultIconUri="data:image/png;base64,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",this.minPluginHeight=0,this.cnElmSelector=".commonninja_component",this.cnLSKey="cn_uc__",this.nonBlockablePlugins=["announcements"],this.eventTypes={COMMONNINJA_PLUGIN_LOADED:"COMMONNINJA_PLUGIN_LOADED",COMMONNINJA_PLUGIN_REQUESTED_DATA:"COMMONNINJA_PLUGIN_REQUESTED_DATA",COMMONNINJA_DIMENSIONS_UPDATE:"COMMONNINJA_DIMENSIONS_UPDATE",COMMONNINJA_STYLES_UPDATE:"COMMONNINJA_STYLES_UPDATE",COMMONNINJA_PARENT_WINDOW_SCROLL:"COMMONNINJA_PARENT_WINDOW_SCROLL",COMMONNINJA_ENGAGEMENT_EVENT:"COMMONNINJA_ENGAGEMENT_EVENT",COMMONNINJA_OPEN_POPUP:"COMMONNINJA_OPEN_POPUP",COMMONNINJA_UPDATE_POPUP_STYLES:"COMMONNINJA_UPDATE_POPUP_STYLES",COMMONNINJA_UPDATE_POPUP_URL:"COMMONNINJA_UPDATE_POPUP_URL",COMMONNINJA_DISPATCH_ACTION_TO_FRAME:"COMMONNINJA_DISPATCH_ACTION_TO_FRAME",COMMONNINJA_CLOSE_POPUP:"COMMONNINJA_CLOSE_POPUP",COMMONNINJA_USER_CONTEXT_UPDATED:"COMMONNINJA_USER_CONTEXT_UPDATED",COMMONNINJA_SCROLL_TO:"COMMONNINJA_SCROLL_TO"},this.installedPlugins={},this.loadedScripts=[],document.addEventListener("DOMContentLoaded",function(){t.init()},!1),this.init()}return e.prototype.init=function(){if(this.log("Initializing..."),this.findPlugins(),this.installAllPlugins(),!this.initiatedOnce)return this.initiatedOnce=!0,this.listenToNetworkIdle(),this.addEventListeners(),this.listenToMessages(),void this.initUserContext()},e.prototype.register=function(e){var t=this,n=e.pluginId,i=e.wrapper,o=e.muteEvents,r=void 0!==o&&o,s=e.props,l=void 0===s?"":s;document.addEventListener("DOMContentLoaded",function(){if(!i||!n)return void t.log("Missing wrapper or pluginId");var e="string"==typeof i?document.querySelector(i):i;if(!e)return void t.log("Could not find wrapper element");if(e.querySelector(t.cnElmSelector))return void t.log("Plugin is already installed");var o=document.createElement("div");o.className=t.cnElmSelector.replace(".","")+" pid-"+n,e.appendChild(o);var s={muteEvents:r,props:l,wrapperElm:o,iframeElm:null,id:n,type:"",refUrl:t.getTopWindowUrl(),reportedEvents:[]};t.installedPlugins[s.id]=s,t.installPlugin(s)},!1)},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.getTopWindowUrl().includes("debug=true")&&console.log.apply(console,e)},e.prototype.getCurrentDevice=function(){return/iPhone|iPad|iPod|Android/i.test((null===navigator||void 0===navigator?void 0:navigator.userAgent)||"")?"mobile":"desktop"},e.prototype.getDefaultUserContext=function(){var e,t,n,i,o,r,s;return{country:"",language:(null===(e=null===navigator||void 0===navigator?void 0:navigator.languages)||void 0===e?void 0:e[0])||(null===navigator||void 0===navigator?void 0:navigator.language)||"en-US",timezone:(null===(i=null===(n=null===(t=null===Intl||void 0===Intl?void 0:Intl.DateTimeFormat)||void 0===t?void 0:t.call(Intl))||void 0===n?void 0:n.resolvedOptions)||void 0===i?void 0:i.call(n).timeZone)||"",domain:null===(o=this.window)||void 0===o?void 0:o.location.origin,currentUrl:null===(r=this.window)||void 0===r?void 0:r.location.href,currentPage:null===(s=this.window)||void 0===s?void 0:s.location.pathname,device:this.getCurrentDevice(),lastActivity:Date.now(),pageSession:{},scrollPercantage:0,hasExitIntent:!1,lastElementClick:[],websiteSession:{firstVisit:Date.now(),lastVisit:Date.now(),clicks:0,pages:0,visits:0},widgetSession:{},version:1,dimensions:{width:this.window.innerWidth,height:this.window.outerHeight}}},e.prototype.getUserContext=function(){var e;try{var t=null===(e=this.window)||void 0===e?void 0:e.localStorage.getItem(this.cnLSKey);return t?JSON.parse(t):null}catch(e){return null}},e.prototype.setUserContext=function(e){var t,n=this;try{null===(t=this.window)||void 0===t||t.localStorage.setItem(this.cnLSKey,JSON.stringify(e))}catch(e){}return Object.keys(this.installedPlugins).map(function(t){var i=n.installedPlugins[t];return n.sendMessageToFrame(i.iframeElm,{type:n.eventTypes.COMMONNINJA_USER_CONTEXT_UPDATED,compId:i.id,userContext:e}),i}),e},e.prototype.initUserContext=function(){var e,t,n,o,r=this.getUserContext();r||(r=this.getDefaultUserContext());var s=null===(e=this.window)||void 0===e?void 0:e.location.href,l=null===(t=this.window)||void 0===t?void 0:t.location.pathname;r.hasExitIntent=!1,r.currentUrl=s,r.currentPage=l,r.domain=null===(n=this.window)||void 0===n?void 0:n.location.origin,r.device=this.getCurrentDevice(),r.lastActivity=Date.now(),r.websiteSession=i(i({},r.websiteSession),{lastVisit:Date.now(),clicks:0,visits:((null===(o=r.websiteSession)||void 0===o?void 0:o.visits)||0)+1}),r.pageSession||(r.pageSession={}),r.pageSession[l]||(r.pageSession[l]={clicks:0,visits:0,firstVisit:Date.now(),lastVisit:Date.now()},r.websiteSession.pages+=1),r.pageSession[l].lastVisit=Date.now(),r.pageSession[l].clicks=0,r.pageSession[l].visits+=1,r.widgetSession||(r.widgetSession={}),r.dimensions||(r.dimensions={}),r.dimensions.width=this.window.innerWidth,r.dimensions.height=this.window.outerHeight,this.setUserContext(r)},e.prototype.updateUserContextFields=function(e){var t=i(i({},this.getUserContext()),e);this.setUserContext(t)},e.prototype.updateUserContextWidgetSession=function(e){var t,n,o,r=(null===(n=this.getUserContext())||void 0===n?void 0:n.widgetSession)||{},l=(null===(o=r[e])||void 0===o?void 0:o.views)||[];l.length>100&&l.splice(0,l.length-100),this.updateUserContextFields({widgetSession:i(i({},r),(t={},t[e]={views:s(s([],l),[Date.now()])},t))})},e.prototype.onDocClick=function(e){var t,n=this,i=null===(t=this.window)||void 0===t?void 0:t.location.pathname,o=this.getUserContext();o.lastActivity=Date.now(),o.websiteSession.clicks+=1,o.pageSession[i]&&(o.pageSession[i].clicks+=1);var r=e.target,l=r.tagName,a=r.id,d=r.classList;o.lastElementClick=[l.toLowerCase()],a&&o.lastElementClick.push("#"+a),d.length>0&&(o.lastElementClick=s(s([],o.lastElementClick),d.toString().split(" ").map(function(e){return"."+e}))),this.log("lastElementClick",o.lastElementClick),this.setUserContext(o),this.window.setTimeout(function(){var e=n.getUserContext();e.lastElementClick=[],n.log("resetting lastElementClick",e.lastElementClick),n.setUserContext(e)},1500)},e.prototype.onMouseOut=function(e){var t=this.getUserContext();if(!e.toElement&&!e.relatedTarget){if(t.hasExitIntent)return;t.hasExitIntent=!0,this.setUserContext(t)}},e.prototype.onMouseOver=function(e){var t=this.getUserContext();t.hasExitIntent&&(t.hasExitIntent=!1,this.setUserContext(t))},e.prototype.findPlugins=function(){var e=this,t=Array.from(document.querySelectorAll(this.cnElmSelector));this.log("Found "+t.length+" plugins on page."),t.forEach(function(t,n){var i=t.getAttribute("comp-id");try{i||t.classList.forEach(function(e){var t;e.startsWith("pid-")&&(t=e.split("pid-"),i=t[1])})}catch(e){}if(e.installedPlugins[i]){if(document.querySelector(e.cnElmSelector+".pid-"+i+" iframe")||document.querySelector(e.cnElmSelector+'[comp-id="'+i+'"] iframe'))return void e.log('Plugin "'+i+'" was already found and installed.')}var o={id:i,wrapperElm:t,iframeElm:null,type:t.getAttribute("comp-type")||"",refUrl:e.getTopWindowUrl(),muteEvents:t.hasAttribute("mute-events"),reportedEvents:[],props:t.getAttribute("comp-props")||""};o.id&&(e.installedPlugins[o.id]=o)})},e.prototype.installPlugin=function(e){var t,n;return o(this,void 0,void 0,function(){var i,o,s,a,d,c,u,p,m,v,f,h,g,E,A,y=this;return r(this,function(r){switch(r.label){case 0:return this.log('Installing plugin "'+e.id+'".'),(i=document.querySelector(this.cnElmSelector+".pid-"+e.id+" iframe")||document.querySelector(this.cnElmSelector+'[comp-id="'+e.id+'"] iframe')||document.querySelector(this.cnElmSelector+".pid-"+e.id+" div")||document.querySelector(this.cnElmSelector+'[comp-id="'+e.id+'"] div'))?(this.log('Plugin "'+e.id+'" was already installed.'),e.iframeElm=i,[2]):(o="border: none; margin: 0; padding: 0; background: none; transition: all 0.2s ease;",s=this.nonBlockablePlugins.includes(e.type),a=this.minPluginHeight+"px",d=o+"; width: "+(s?"0":"100%")+"; height: "+a+"; min-height: "+a+";",c=this.extractPluginPathFromUrl(e.refUrl,e.id),u=e.props||"",p=encodeURIComponent(e.refUrl.split("?")[0]),m="refUrl="+p+"&props="+encodeURIComponent(u),e.wrapperElm.style.textAlign="center",e.wrapperElm.style.webkitOverflowScrolling="touch",e.wrapperElm.style.transition="all 0.2s ease",s||(e.wrapperElm.style.width="100%"),[4,this.getEmbedCode(e)]);case 1:return v=r.sent(),(f=JSON.parse(v),h=f.success,g=f.message,E=f.data,h&&E.html)?(A=E.renderMode||"iframe","iframe"===A?e.wrapperElm.innerHTML='<iframe\n\t\t\tstyle="'+d+'"\n\t\t\ttitle="Common Ninja\'s Widget"\n\t\t\tframeborder="0"\n\t\t\tsrc="'+E.html+"/"+c+"?"+m+'"\n\t\t\tloading="eager"\n\t\t\tallowfullscreen\n\t\t\tscrolling="no"\n\t\t>\n\t\t</iframe>':("crawler"===A&&(e.muteEvents=!0),e.wrapperElm.innerHTML=E.html,(null===(t=E.scripts)||void 0===t?void 0:t.length)&&E.scripts.forEach(function(e){var t=e.type,n=e.attrs,i=e.content,o=null===n||void 0===n?void 0:n.src;if(o){if(y.loadedScripts.includes(o))return;y.loadedScripts.push(o)}y.log("Appending "+t+" to head",n);var r=document.createElement(t);n&&Object.keys(n).forEach(function(e){r[e]=n[e]}),i&&(r.innerHTML=i),"meta"===t||"link"===t?document.head.appendChild(r):document.body.appendChild(r)})),e.iframeElm=e.wrapperElm.querySelector("iframe")||e.wrapperElm.querySelector("div:first-child"),"IFRAME"===(null===(n=e.iframeElm)||void 0===n?void 0:n.tagName)&&(e.iframeElm.onload=function(){y.sendMessageToFrame(e.iframeElm,{type:y.eventTypes.COMMONNINJA_USER_CONTEXT_UPDATED,compId:e.id,userContext:y.getUserContext()})}),E.adsRemoval||this.addWatermark(e),(null===e||void 0===e?void 0:e.reportedEvents.indexOf(l.ClientEvent.INSTALL))<0&&this.reportEvent(e.id,l.EventGroupType.CLIENT,l.ClientEvent.INSTALL),[2]):(e.wrapperElm.innerHTML='<div style="text-align: center">'+(g||"Could not load app.")+"</div>",e.iframeElm=e.wrapperElm.querySelector("iframe")||e.wrapperElm.querySelector("div:first-child"),[2])}})})},e.prototype.installAllPlugins=function(){return o(this,void 0,void 0,function(){var e,t=this;return r(this,function(n){switch(n.label){case 0:return e=Object.keys(this.installedPlugins).map(function(e){return o(t,void 0,void 0,function(){var t;return r(this,function(n){switch(n.label){case 0:return t=this.installedPlugins[e],[4,this.installPlugin(t)];case 1:return n.sent(),[2]}})})}),[4,Promise.all(e)];case 1:return n.sent(),[2]}})})},e.prototype.getTopWindowUrl=function(){return window.location.href},e.prototype.extractPluginPathFromUrl=function(e,t){var n="";try{var i=new URL(e).searchParams,o=decodeURIComponent(i.get("cnPluginPath")||"");if(o.includes(",")||o.includes(":")){o.split(",").forEach(function(e){var i=e.split(":"),o=i[0],r=i[1];o===t&&(n=r||"")})}else n=o}catch(e){}return n.startsWith("/")&&(n=n.substring(1)),n},e.prototype.updatePluginStyles=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n="wrapper");var i=this.installedPlugins[e];i&&Object.keys(t).forEach(function(e){"wrapper"!==n&&"both"!==n||(i.wrapperElm.style[e]=t[e]),"iframe"!==n&&"both"!==n||(i.iframeElm.style[e]=t[e])})},e.prototype.updatePluginDimensions=function(e,t,n){var i=this.installedPlugins[e];if(i){var o=i.wrapperElm.querySelector("iframe");"number"==typeof t&&(o.style.height=t+"px",o.style.minHeight=t+"px"),"number"==typeof n&&(o.style.width=n+"px",i.wrapperElm.style.width=n+"px")}},e.prototype.scrollPage=function(e,t,n){if(this.log("scroll triggered",t,n),"top"===t)this.window.scroll({behavior:"smooth",top:0});else if("bottom"===t)this.window.scroll({behavior:"smooth",top:this.window.outerHeight});else{var i=document.querySelector(n.selector);if(!i)return;this.window.scroll({behavior:"smooth",top:i.offsetTop})}},e.prototype.isInViewport=function(e){return e.top+e.height/5<=(window.innerHeight||document.documentElement.clientHeight)&&e.top>=0&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)},e.prototype.reportViewIfNeeded=function(e){var t=this.installedPlugins[e];if(!t||!t.iframeElm)return this.log('Could not report view for plugin "'+e+'".'),{bounding:{},inViewport:!1};var n=t.iframeElm.getBoundingClientRect()||{},i=this.isInViewport(n);return(null===t||void 0===t?void 0:t.reportedEvents.indexOf(l.ClientEvent.IMPRESSION))>=0&&i&&t.reportedEvents.indexOf(l.ClientEvent.VIEW)<0&&(this.log("Reporting view for plugin",t.id),this.updateUserContextWidgetSession(t.id),this.reportEvent(t.id,l.EventGroupType.CLIENT,l.ClientEvent.VIEW)),{bounding:n,inViewport:i}},e.prototype.onScroll=function(){var e=this;if(!document.body)return!0;var t=window.scrollY,n=document.body.offsetHeight||0,i=window.innerHeight,o=t/(n-i),r=Math.round(100*o);this.updateUserContextFields({scrollPercantage:r,lastActivity:Date.now()}),Object.keys(this.installedPlugins).map(function(t){var n=e.installedPlugins[t],i=e.reportViewIfNeeded(t),o=i.bounding,r=i.inViewport;return o&&n.iframeElm&&"IFRAME"===n.iframeElm.tagName?(e.sendMessageToFrame(n.iframeElm,{inViewport:r,type:e.eventTypes.COMMONNINJA_PARENT_WINDOW_SCROLL,fromTop:o.top,windowHeight:window.innerHeight,compId:n.id}),n):void e.log('Could not calculate bounding for plugin "'+t+'".')})},e.prototype.addEventListeners=function(){var e=this,t=this;document.addEventListener("click",this.onDocClick.bind(this)),setTimeout(function(){document.addEventListener("mouseout",e.onMouseOut.bind(e)),document.addEventListener("mouseover",e.onMouseOver.bind(e))},5e3);var n=function(e,t){var n;return function(){n&&clearTimeout(n),n=setTimeout(e,t)}}(function(){t.onScroll()},50);document.addEventListener("scroll",n)},e.prototype.listenToNetworkIdle=function(e){var t=this;if(void 0===e&&(e=500),"undefined"==typeof PerformanceObserver)return this.log("PerformanceObserver is not supported."),!0;var n;new PerformanceObserver(function(i){i.getEntries().filter(function(e){return"xmlhttprequest"===e.initiatorType}).forEach(function(i){t.log("Made fetch request",i.name),n&&clearTimeout(n),n=setTimeout(function(){t.log("(idle) After "+e/1e3+" sec"),i.name.includes("www.commoninja.com")||i.name.includes("cdn.commoninja.com")?t.log("Skipping init for",i.name):t.init()},e)})}).observe({entryTypes:["resource"]})},e.prototype.openPopup=function(e,t,n,i){if(void 0===n&&(n={}),void 0===i&&(i={}),!document.querySelector("#"+(e||""))){var o=document.createElement("iframe");Object.keys(i).forEach(function(e){o.style[e]=i[e]}),o.frameBorder="0",o.src=t,o.id=e+"-iframe";var r=document.createElement("div");Object.keys(n).forEach(function(e){r.style[e]=n[e]}),r.id=e,r.appendChild(o),document.body.appendChild(r)}},e.prototype.updatePopupStyles=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n={});var i=document.querySelector("#"+e+"-iframe");i&&Object.keys(n).forEach(function(e){i.style[e]=n[e]});var o=document.querySelector("#"+e);o&&Object.keys(t).forEach(function(e){o.style[e]=t[e]})},e.prototype.updatePopupUrl=function(e,t){var n=document.querySelector("#"+e+"-iframe");n&&(n.src=t)},e.prototype.closePopup=function(e){var t=document.querySelector("#"+e);t&&(t.outerHTML="")},e.prototype.addWatermark=function(e,t,n){if(!e.wrapperElm.querySelector("p")){var i='<a style="color: #16171B !important;\n    direction: ltr !important;\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding: 5px 10px;" className="commonninja-ribbon-link" href="'+(t||"https://www.commoninja.com")+'?utm_medium=Embed"} target="_blank" rel="noopener noreferrer">\n      <img style="height: 17px;\n    width: 17px;\n    border-radius: 50em;\n    margin-right: 5px;" src="'+this.defaultIconUri+'" alt="Common Ninja" />\n      <span style="line-height: 1.4em;\n    padding-top: 2px;">'+(n||"Powered by Common Ninja")+"</span>\n    </a>",o=document.createElement("div");o.className="commonninja-ribbon",o.title="Powered by Common Ninja",o.style.whiteSpace="nowrap",o.style.fontFamily='"Spartan","Helvetica Neue",Helvetica',o.style.margin="10px auto 0",o.style.fontSize="12px",o.style.fontWeight="500",o.style.textAlign="center",o.style.background="#fefefe",o.style.borderRadius="50em",o.style.maxWidth="100%",o.style.boxShadow="0 1px 5px rgba(0,0,0,0.1)",o.style.transition="background 0.2s ease",o.style.display="inline-block",o.innerHTML=i,e.wrapperElm.appendChild(o)}},e.prototype.sendMessageToFrame=function(e,t){var n;(null===(n=null===e||void 0===e?void 0:e.contentWindow)||void 0===n?void 0:n.postMessage)&&e.contentWindow.postMessage(JSON.stringify(t),"*")},e.prototype.listenToMessages=function(){var e=this,t=window.addEventListener?"addEventListener":"attachEvent";(0,window[t])("attachEvent"===t?"onmessage":"message",function(t){if(t.data){var n={};try{n="string"==typeof t.data?JSON.parse(t.data):t.data}catch(e){}if(!n.compId)return;switch(n.type){case e.eventTypes.COMMONNINJA_DIMENSIONS_UPDATE:e.updatePluginDimensions(n.compId,n.height,n.width);break;case e.eventTypes.COMMONNINJA_STYLES_UPDATE:e.updatePluginStyles(n.compId,n.styles,n.elmToUpdate);break;case e.eventTypes.COMMONNINJA_SCROLL_TO:e.scrollPage(n.compId,n.scrollType,n.scrollParams);break;case e.eventTypes.COMMONNINJA_PLUGIN_REQUESTED_DATA:e.reportEvent(n.compId,l.EventGroupType.CLIENT,l.ClientEvent.REQUEST);break;case e.eventTypes.COMMONNINJA_PLUGIN_LOADED:e.reportEvent(n.compId,l.EventGroupType.CLIENT,l.ClientEvent.IMPRESSION),e.reportViewIfNeeded(n.compId);break;case e.eventTypes.COMMONNINJA_ENGAGEMENT_EVENT:e.reportEvent(n.compId,l.EventGroupType.ENGAGEMENT,n.eventType,{eventVersion:n.version||"",eventSubType:n.eventSubType,entityPath:n.entityPath});break;case e.eventTypes.COMMONNINJA_OPEN_POPUP:e.openPopup(n.popupId,n.url,n.overlayStyles,n.iframeStyles);break;case e.eventTypes.COMMONNINJA_UPDATE_POPUP_STYLES:e.updatePopupStyles(n.popupId,n.overlayStyles,n.iframeStyles);break;case e.eventTypes.COMMONNINJA_UPDATE_POPUP_URL:e.updatePopupUrl(n.popupId,n.url);break;case e.eventTypes.COMMONNINJA_CLOSE_POPUP:e.closePopup(n.popupId);break;case e.eventTypes.COMMONNINJA_DISPATCH_ACTION_TO_FRAME:var i=document.querySelector("#"+n.frameId);i?("IFRAME"!==i.tagName&&(i=i.querySelector("iframe")),e.sendMessageToFrame(i,n.actionData)):e.log('Could not find frame "#'+n.frameId+'"')}}},!1)},e.prototype.makeRequest=function(e,t){try{var n=new XMLHttpRequest;n.open("GET",e),n.send(),n.onreadystatechange=function(){if(4===this.readyState){var e="{}";e=200===this.status?n.responseText:JSON.stringify({success:!1,message:"Could not make request."}),t&&t(e)}}}catch(e){t&&t(JSON.stringify({success:!1,message:e.message||"Could not make request."}))}},e.prototype.getEmbedCode=function(e){return o(this,void 0,void 0,function(){var t=this;return r(this,function(n){return[2,new Promise(function(n){var i=t.commonninjaBaseUrl||"https://cdn.commoninja.com",o=i+"/api/v1/embed/"+e.id;e.type&&(o+="?componentType="+e.type),t.makeRequest(o,function(e){n(e)})})]})})},e.prototype.reportEvent=function(e,t,n,i){var o=this.installedPlugins[e],r=encodeURIComponent(this.getTopWindowUrl());if(!o||!o.muteEvents){t===l.EventGroupType.CLIENT&&(null===o||void 0===o||o.reportedEvents.push(n));var s=this.commonninjaBaseUrl||"https://www.commoninja.com",a="";if(i&&"object"==typeof i)for(var d in i){var c="object"==typeof i[d]?JSON.stringify(i[d]):i[d];a+="&"+d+"="+c}this.makeRequest(s+"/api/v1/event/report/"+e+"?groupType="+t+"&eventType="+n+a+"&refUrl="+r)}},e}();if(void 0===window.CommonNinja){var d=new a(window||new Window);window.CommonNinja=d}t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventGroupType=t.EngagementEvent=t.ClientEvent=void 0;!function(e){e.INSTALL="INSTALL",e.REQUEST="REQUEST",e.IMPRESSION="IMPRESSION",e.VIEW="VIEW"}(t.ClientEvent||(t.ClientEvent={}));!function(e){e.CLICK="click",e.HOVER="hover",e.SCROL="scroll"}(t.EngagementEvent||(t.EngagementEvent={}));!function(e){e.CLIENT="client",e.ENGAGEMENT="engagement"}(t.EventGroupType||(t.EventGroupType={}))}]).default});
