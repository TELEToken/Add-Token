(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,r){e.exports=r.p+"static/media/switch-network.8fcbc12d.jpg"},105:function(e,t,r){e.exports=r.p+"static/media/download-metamask.14c35a62.png"},107:function(e,t,r){e.exports=r.p+"static/media/coin.d28f2529.jpg"},113:function(e,t,r){e.exports=r.p+"static/media/loading.cc261999.svg"},115:function(e,t,r){e.exports=r(291)},120:function(e,t,r){},218:function(e,t,r){},291:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(18),i=r.n(a),c=(r(120),r(8)),s=r(32),u=r(65),l=r(33),h=r.n(l),f=r(294),d=r(295),p=r(296),m=r(297),v=r(41),y=r(42),g=r(45),w=r(46),k=r(28),E=r(104),b=r.n(E),x=function(e){var t="";switch(e){case"1":t="The Main Ethereum Network";break;case"2":t="The OLD Ropsten Test Network";break;case"3":t="The Ropsten Test Network";break;case"4":t="The Rinkeby Test Network";break;case"42":t="The Kovan Test Network";break;default:t="Network #".concat(e)}return t},L=function(e){var t=e.net,r=e.tokenNet;return o.a.createElement("div",null,o.a.createElement("h1",null,"Add Token"),o.a.createElement("h2",null,"Wrong Network Detected"),o.a.createElement("p",null,"You have ",x(t)," selected, but this token requires ",x(r),". Please switch the current network in your web3 client."),o.a.createElement("p",null,"You can switch your current network in MetaMask like this:"),o.a.createElement("img",{src:b.a,alt:"Network can be switched in the MetaMask network menu in the top right hand corner."}))},N=r(29),O=r.n(N),j=r(108),T=r.n(j),_=r(110),S=r.n(_),M=r(64),A=r.n(M),G=r(35),P=r.n(G),R=r(111),I=r.n(R),D=r(105),F=r.n(D),C=function(){return o.a.createElement("a",{href:"https://metamask.io"},o.a.createElement("img",{className:"downloadButton",src:F.a,alt:"Download MetaMask"}))},q=r(106),W=r.n(q),B=r(63),Y=r.n(B),K=r(293),J=r(107),U=r.n(J),z=r(34),H=r.n(z);function Q(){Q=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(j){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=u;var h={};function f(){}function d(){}function p(){}var m={};s(m,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&r.call(y,o)&&(m=y);var g=p.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){var n;this._invoke=function(o,a){function i(){return new t(function(n,i){!function n(o,a,i,s){var u=l(e[o],e,a);if("throw"!==u.type){var h=u.arg,f=h.value;return f&&"object"==Object(c.a)(f)&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,s)},function(e){n("throw",e,i,s)}):t.resolve(f).then(function(e){h.value=e,i(h)},function(e){return n("throw",e,i,s)})}s(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=p,s(g,"constructor",p),s(p,"constructor",d),d.displayName=s(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(k.prototype),s(k.prototype,a,function(){return this}),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(g),s(g,i,"Generator"),s(g,o,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(k.a)(e);if(t){var o=Object(k.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(w.a)(this,r)}}var $="0x617b3f8050a0bd94b6b1da02b4384ee5b4df13f4",X=function(e){Object(g.a)(r,e);var t=V(r);function r(e){var n;Object(v.a)(this,r);var o=e.tokenName,a=void 0===o?"MetaMarks":o,i=e.tokenSymbol,c=void 0===i?"MARK":i,s=e.tokenDecimals,u=void 0===s?18:s,l=e.tokenAddress,h=void 0===l?$:l,f=e.tokenImage,d=void 0===f?"https://pbs.twimg.com/profile_images/802481220340908032/M_vde_oi_400x400.jpg":f,p=e.tokenNet,m=void 0===p?"1":p,y=e.message,g=void 0===y?"":y,w=e.errorMessage,k=void 0===w?"":w,E=e.net,b=void 0===E?"1":E;(n=t.call(this)).state={tokenName:a,tokenSymbol:c,tokenDecimals:u,tokenAddress:h,tokenImage:d,tokenNet:m,message:g,errorMessage:k,net:b};var x=window.location.search,L=H.a.parse(x);for(var N in L)n.state[N]=L[N];return n.updateNet(),n}return Object(y.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.location.search,t=H.a.parse(e);this.setState(t)}},{key:"updateNet",value:function(){var e=Object(s.a)(Q().mark(function e(){var t,r,n;return Q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()();case 2:return t=e.sent,r=new W.a(t),e.next=6,r.net_version();case 6:n=e.sent,this.setState({net:n});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(e,t){var r,n=this,a=this.state,i=a.tokenName,c=a.tokenSymbol,u=a.tokenDecimals,l=a.tokenNet,f=a.net,d=a.tokenImage,p=a.tokenAddress,m=a.message;return""!==a.errorMessage&&(r=o.a.createElement("p",{className:"errorMessage"},"There was a problem adding this token to your wallet. Make sure you have the latest version of MetaMask installed!",o.a.createElement(C,null))),l!==f?o.a.createElement(L,{net:f,tokenNet:l}):o.a.createElement("div",{className:"values"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:d||U.a,className:"logo",alt:"Coin"}),o.a.createElement("h1",{className:"App-title"},"Watch ",i)),o.a.createElement(T.a,null,o.a.createElement(S.a,null,o.a.createElement(A.a,null,o.a.createElement(P.a,null,"Symbol"),o.a.createElement(P.a,null,c)),o.a.createElement(A.a,null,o.a.createElement(P.a,null,"Decimals"),o.a.createElement(P.a,null,u)))),o.a.createElement("div",null,o.a.createElement(O.a,{onClick:function(){var e=n.state,t=e.tokenAddress,r=e.net;window.location.href=Y.a.createAccountLink(t,r)},href:Y.a.createAccountLink(p,f)},"View on Etherscan"),o.a.createElement(O.a,{onClick:function(){var e=Object(s.a)(Q().mark(function e(t){return Q().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()();case 2:e.sent.sendAsync({method:"metamask_watchAsset",params:{type:"ERC20",options:{address:p,symbol:c,decimals:u,image:d}},id:Math.round(1e5*Math.random())},function(e,t){console.log("provider returned",e,t),e||"error"in t?n.setState({errorMessage:"There was a problem adding the token.",message:""}):n.setState({message:"Token added!",errorMessage:""})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},"Watch in Wallet")),o.a.createElement("p",null,m),r,o.a.createElement("div",{className:"spacer"}),o.a.createElement(I.a,{gutterBottom:!0,noWrap:!0},"\n            Create a simple page to watch your token with one click.\n          "),o.a.createElement(K.a,{to:"/edit"},o.a.createElement(O.a,null,"Create Page")))}}]),r}(n.Component),Z=(r(218),r(112)),ee=r.n(Z);function te(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(k.a)(e);if(t){var o=Object(k.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(w.a)(this,r)}}var re={title:"Token Details",properties:{tokenName:{type:"string",title:"Token Name",default:"My Token",required:!0},tokenAddress:{type:"string",title:"Token Address",required:!0},tokenSymbol:{type:"string",title:"Token Symbol",default:"TKN",required:!0},tokenDecimals:{type:"number",title:"Token Decimals",default:18,required:!0},tokenNet:{type:"number",title:"Token Network Id",default:1,required:!0},tokenImage:{type:"string",title:"Token Image URL (optional)",required:!1}}},ne=function(e){Object(g.a)(r,e);var t=te(r);function r(){var e;return Object(v.a)(this,r),(e=t.call(this)).state={},e}return Object(y.a)(r,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"my-form"},o.a.createElement("h1",null,"Enter Token Details"),o.a.createElement("p",null,"To create an easy token-suggesting page."),o.a.createElement("div",{className:"form-content"},Object.keys(re.properties).map(function(t){return o.a.createElement("div",{key:t},o.a.createElement(ee.a,{id:t,required:re.properties[t].required,errormessage:e.state[t+"Error"],label:re.properties[t].title,margin:"normal"}))}),o.a.createElement(O.a,{onClick:this.visitForm},"Create Add Token Page")))}},{key:"visitForm",value:function(){var e={};["tokenImage","tokenName","tokenAddress","tokenNet","tokenSymbol","tokenDecimals"].forEach(function(t){var r=document.querySelector("#"+t);r&&(e[t]=r.value)}),window.location.href="./add?"+H.a.stringify(e)}}]),r}(n.Component),oe=r(113),ae=r.n(oe);function ie(){ie=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(j){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=u;var h={};function f(){}function d(){}function p(){}var m={};s(m,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&r.call(y,o)&&(m=y);var g=p.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach(function(t){s(e,t,function(e){return this._invoke(t,e)})})}function k(e,t){var n;this._invoke=function(o,a){function i(){return new t(function(n,i){!function n(o,a,i,s){var u=l(e[o],e,a);if("throw"!==u.type){var h=u.arg,f=h.value;return f&&"object"==Object(c.a)(f)&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,s)},function(e){n("throw",e,i,s)}):t.resolve(f).then(function(e){h.value=e,i(h)},function(e){return n("throw",e,i,s)})}s(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=p,s(g,"constructor",p),s(p,"constructor",d),d.displayName=s(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(k.prototype),s(k.prototype,a,function(){return this}),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(g),s(g,i,"Generator"),s(g,o,function(){return this}),s(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var ce=function(){return o.a.createElement("div",null,o.a.createElement(f.a,{basename:"/Add-Token"},o.a.createElement(d.a,{hashType:"noslash"},o.a.createElement(p.a,null,o.a.createElement(m.a,{path:"/edit",component:ne}),o.a.createElement(m.a,{path:"/add",component:X}),o.a.createElement(m.a,{path:"/",component:X})))))},se=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",null,"You need a web3 browser like MetaMask to use this site and manage cryptocurrencies."),o.a.createElement(C,null)))},ue=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),r=t[0],a=t[1],i=Object(n.useState)([!0]),c=Object(u.a)(i,2),l=c[0],f=c[1];return(d=Object(s.a)(ie().mark(function e(){var t;return ie().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()();case 2:t=e.sent,f(!1),a(t);case 5:case"end":return e.stop()}},e)})),function(){return d.apply(this,arguments)})(),o.a.createElement("div",{className:"App"},l?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("img",{className:"loading-spinner",src:ae.a}),o.a.createElement("h2",null,"Loading....."))):o.a.createElement("div",null,o.a.createElement("a",{className:"github-banner",href:"https://github.com/MetaMask/Add-Token"},o.a.createElement("img",{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png",alt:"Fork me on GitHub"})),r?o.a.createElement(ce,null):o.a.createElement(se,null)));var d},le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(f.a,null,o.a.createElement(ue,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Add-Token",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Add-Token","/service-worker.js");le?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):he(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):he(e)})}}()}},[[115,2,1]]]);
//# sourceMappingURL=main.f2a064e2.chunk.js.map