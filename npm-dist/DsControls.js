!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DsGallery=t():e.DsGallery=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=53)}([function(e,t,n){"use strict";function r(e,t,n,r,i,a,u,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,a,u,s],p=0;c=new Error(t.replace(/%s/g,function(){return l[p++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";var r=n(4),o=r;e.exports=o},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)i.call(n,l)&&(s[l]=n[l]);if(o){u=o(n);for(var p=0;p<u.length;p++)a.call(n,u[p])&&(s[u[p]]=n[u[p]])}}return s}},function(e,t,n){"use strict";function r(e){return void 0!==e.ref}function o(e){return void 0!==e.key}var i=n(2),a=n(8),u=(n(1),n(16),Object.prototype.hasOwnProperty),s=n(14),c={key:!0,ref:!0,__self:!0,__source:!0},l=function(e,t,n,r,o,i,a){var u={$$typeof:s,type:e,key:t,ref:n,props:a,_owner:i};return u};l.createElement=function(e,t,n){var i,s={},p=null,f=null;if(null!=t){r(t)&&(f=t.ref),o(t)&&(p=""+t.key),void 0===t.__self?null:t.__self,void 0===t.__source?null:t.__source;for(i in t)u.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var y=Array(d),h=0;h<d;h++)y[h]=arguments[h+2];s.children=y}if(e&&e.defaultProps){var m=e.defaultProps;for(i in m)void 0===s[i]&&(s[i]=m[i])}return l(e,p,f,0,0,a.current,s)},l.createFactory=function(e){var t=l.createElement.bind(null,e);return t.type=e,t},l.cloneAndReplaceKey=function(e,t){return l(e.type,t,e.ref,e._self,e._source,e._owner,e.props)},l.cloneElement=function(e,t,n){var s,p=i({},e.props),f=e.key,d=e.ref,y=(e._self,e._source,e._owner);if(null!=t){r(t)&&(d=t.ref,y=a.current),o(t)&&(f=""+t.key);var h;e.type&&e.type.defaultProps&&(h=e.type.defaultProps);for(s in t)u.call(t,s)&&!c.hasOwnProperty(s)&&(void 0===t[s]&&void 0!==h?p[s]=h[s]:p[s]=t[s])}var m=arguments.length-2;if(1===m)p.children=n;else if(m>1){for(var v=Array(m),b=0;b<m;b++)v[b]=arguments[b+2];p.children=v}return l(e.type,f,d,0,0,y,p)},l.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===s},e.exports=l},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},,function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}e.exports=r},,function(e,t,n){"use strict";var r={current:null};e.exports=r},function(e,t,n){"use strict";e.exports=n(12)},function(e,t,n){"use strict";var r={};e.exports=r},,function(e,t,n){"use strict";var r=n(2),o=n(13),i=n(27),a=n(28),u=n(3),s=n(29),c=n(30),l=n(31),p=n(34),f=u.createElement,d=u.createFactory,y=u.cloneElement,h=r,m=function(e){return e},v={Children:{map:i.map,forEach:i.forEach,count:i.count,toArray:i.toArray,only:p},Component:o.Component,PureComponent:o.PureComponent,createElement:f,cloneElement:y,isValidElement:u.isValidElement,PropTypes:s,createClass:l,createFactory:d,createMixin:m,DOM:a,version:c,__spread:h};e.exports=v},function(e,t,n){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||s}function o(e,t,n){this.props=e,this.context=t,this.refs=c,this.updater=n||s}function i(){}var a=n(6),u=n(2),s=n(15),c=(n(16),n(10));n(0),n(33);r.prototype.isReactComponent={},r.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&a("85"),this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")};i.prototype=r.prototype,o.prototype=new i,o.prototype.constructor=o,u(o.prototype,r.prototype),o.prototype.isPureReactComponent=!0,e.exports={Component:r,PureComponent:o}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=r},function(e,t,n){"use strict";var r=(n(1),{isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){},enqueueReplaceState:function(e,t){},enqueueSetState:function(e,t){}});e.exports=r},function(e,t,n){"use strict";var r=!1;e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,function(e,t,n){"use strict";var r=n(23);e.exports=function(e){return r(e,!1)}},,function(e,t,n){"use strict";function r(e){return e}function o(e,t,n){function o(e,t){var n=b.hasOwnProperty(t)?b[t]:null;P.hasOwnProperty(t)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function c(e,n){if(n){u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,i=r.__reactAutoBindPairs;n.hasOwnProperty(s)&&g.mixins(e,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==s){var c=n[a],l=r.hasOwnProperty(a);if(o(l,a),g.hasOwnProperty(a))g[a](e,c);else{var p=b.hasOwnProperty(a),y="function"==typeof c,h=y&&!p&&!l&&!1!==n.autobind;if(h)i.push(a,c),r[a]=c;else if(l){var m=b[a];u(p&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,a),"DEFINE_MANY_MERGED"===m?r[a]=f(r[a],c):"DEFINE_MANY"===m&&(r[a]=d(r[a],c))}else r[a]=c}}}else;}function l(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in g;u(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in e;u(!i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=r}}}function p(e,t){u(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(u(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return p(o,n),p(o,r),o}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function y(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=y(e,o)}}function m(e){var t=r(function(e,r,o){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=r,this.refs=a,this.updater=o||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;u("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=i});t.prototype=new _,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],v.forEach(c.bind(null,t)),c(t,x),c(t,e),c(t,E),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),u(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in b)t.prototype[o]||(t.prototype[o]=null);return t}var v=[],b={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)c(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},x={componentDidMount:function(){this.__isMounted=!0}},E={componentWillUnmount:function(){this.__isMounted=!1}},P={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},_=function(){};return i(_.prototype,e.prototype,P),m}var i=n(2),a=n(10),u=n(0),s="mixins";e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,o){}e.exports=r},function(e,t,n){"use strict";var r=n(4),o=n(0),i=n(1),a=n(17),u=n(22);e.exports=function(e,t){function n(e){var t=e&&(w&&e[w]||e[j]);if("function"==typeof t)return t}function s(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function c(e){this.message=e,this.stack=""}function l(e){function n(n,r,i,u,s,l,p){if(u=u||O,l=l||i,p!==a)if(t)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else;return null==r[i]?n?new c(null===r[i]?"The "+s+" `"+l+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+s+" `"+l+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(r,i,u,s,l)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function p(e){function t(t,n,r,o,i,a){var u=t[n];if(x(u)!==e)return new c("Invalid "+o+" `"+i+"` of type `"+E(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return l(t)}function f(e){function t(t,n,r,o,i){if("function"!=typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new c("Invalid "+o+" `"+i+"` of type `"+x(u)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<u.length;s++){var l=e(u,s,r,o,i+"["+s+"]",a);if(l instanceof Error)return l}return null}return l(t)}function d(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||O;return new c("Invalid "+o+" `"+i+"` of type `"+_(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return l(t)}function y(e){function t(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(s(a,e[u]))return null;return new c("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?l(t):r.thatReturnsNull}function h(e){function t(t,n,r,o,i){if("function"!=typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=x(u);if("object"!==s)return new c("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var p=e(u,l,r,o,i+"."+l,a);if(p instanceof Error)return p}return null}return l(t)}function m(e){function t(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,a))return null}return new c("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",P(o),n),r.thatReturnsNull}return l(t)}function v(e){function t(t,n,r,o,i){var u=t[n],s=x(u);if("object"!==s)return new c("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var p=e[l];if(p){var f=p(u,l,r,o,i+"."+l,a);if(f)return f}}return null}return l(t)}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var r=n(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!b(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function g(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function x(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":g(t,e)?"symbol":t}function E(e){if(void 0===e||null===e)return""+e;var t=x(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function P(e){var t=E(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function _(e){return e.constructor&&e.constructor.name?e.constructor.name:O}var w="function"==typeof Symbol&&Symbol.iterator,j="@@iterator",O="<<anonymous>>",N={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return l(r.thatReturnsNull)}(),arrayOf:f,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new c("Invalid "+o+" `"+i+"` of type `"+x(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return l(t)}(),instanceOf:d,node:function(){function e(e,t,n,r,o){return b(e[t])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return l(e)}(),objectOf:h,oneOf:y,oneOfType:m,shape:v};return c.prototype=Error.prototype,N.checkPropTypes=u,N.PropTypes=N,N}},,function(e,t,n){"use strict";function r(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function o(e){var t=/(=0|=2)/g,n={"=0":"=","=2":":"};return(""+("."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1))).replace(t,function(e){return n[e]})}var i={escape:r,unescape:o};e.exports=i},function(e,t,n){"use strict";var r=n(6),o=(n(0),function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)}),i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r){var o=this;if(o.instancePool.length){var i=o.instancePool.pop();return o.call(i,e,t,n,r),i}return new o(e,t,n,r)},s=function(e){var t=this;e instanceof t||r("25"),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},c=o,l=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=10),n.release=s,n},p={addPoolingTo:l,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fourArgumentPooler:u};e.exports=p},function(e,t,n){"use strict";function r(e){return(""+e).replace(x,"$&/")}function o(e,t){this.func=e,this.context=t,this.count=0}function i(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function a(e,t,n){if(null==e)return e;var r=o.getPooled(t,n);v(e,i,r),o.release(r)}function u(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function s(e,t,n){var o=e.result,i=e.keyPrefix,a=e.func,u=e.context,s=a.call(u,t,e.count++);Array.isArray(s)?c(s,o,n,m.thatReturnsArgument):null!=s&&(h.isValidElement(s)&&(s=h.cloneAndReplaceKey(s,i+(!s.key||t&&t.key===s.key?"":r(s.key)+"/")+n)),o.push(s))}function c(e,t,n,o,i){var a="";null!=n&&(a=r(n)+"/");var c=u.getPooled(t,a,o,i);v(e,s,c),u.release(c)}function l(e,t,n){if(null==e)return e;var r=[];return c(e,r,null,t,n),r}function p(e,t,n){return null}function f(e,t){return v(e,p,null)}function d(e){var t=[];return c(e,t,null,m.thatReturnsArgument),t}var y=n(26),h=n(3),m=n(4),v=n(35),b=y.twoArgumentPooler,g=y.fourArgumentPooler,x=/\/+/g;o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},y.addPoolingTo(o,b),u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},y.addPoolingTo(u,g);var E={forEach:a,map:l,mapIntoWithKeyPrefixInternal:c,count:f,toArray:d};e.exports=E},function(e,t,n){"use strict";var r=n(3),o=r.createFactory,i={a:o("a"),abbr:o("abbr"),address:o("address"),area:o("area"),article:o("article"),aside:o("aside"),audio:o("audio"),b:o("b"),base:o("base"),bdi:o("bdi"),bdo:o("bdo"),big:o("big"),blockquote:o("blockquote"),body:o("body"),br:o("br"),button:o("button"),canvas:o("canvas"),caption:o("caption"),cite:o("cite"),code:o("code"),col:o("col"),colgroup:o("colgroup"),data:o("data"),datalist:o("datalist"),dd:o("dd"),del:o("del"),details:o("details"),dfn:o("dfn"),dialog:o("dialog"),div:o("div"),dl:o("dl"),dt:o("dt"),em:o("em"),embed:o("embed"),fieldset:o("fieldset"),figcaption:o("figcaption"),figure:o("figure"),footer:o("footer"),form:o("form"),h1:o("h1"),h2:o("h2"),h3:o("h3"),h4:o("h4"),h5:o("h5"),h6:o("h6"),head:o("head"),header:o("header"),hgroup:o("hgroup"),hr:o("hr"),html:o("html"),i:o("i"),iframe:o("iframe"),img:o("img"),input:o("input"),ins:o("ins"),kbd:o("kbd"),keygen:o("keygen"),label:o("label"),legend:o("legend"),li:o("li"),link:o("link"),main:o("main"),map:o("map"),mark:o("mark"),menu:o("menu"),menuitem:o("menuitem"),meta:o("meta"),meter:o("meter"),nav:o("nav"),noscript:o("noscript"),object:o("object"),ol:o("ol"),optgroup:o("optgroup"),option:o("option"),output:o("output"),p:o("p"),param:o("param"),picture:o("picture"),pre:o("pre"),progress:o("progress"),q:o("q"),rp:o("rp"),rt:o("rt"),ruby:o("ruby"),s:o("s"),samp:o("samp"),script:o("script"),section:o("section"),select:o("select"),small:o("small"),source:o("source"),span:o("span"),strong:o("strong"),style:o("style"),sub:o("sub"),summary:o("summary"),sup:o("sup"),table:o("table"),tbody:o("tbody"),td:o("td"),textarea:o("textarea"),tfoot:o("tfoot"),th:o("th"),thead:o("thead"),time:o("time"),title:o("title"),tr:o("tr"),track:o("track"),u:o("u"),ul:o("ul"),var:o("var"),video:o("video"),wbr:o("wbr"),circle:o("circle"),clipPath:o("clipPath"),defs:o("defs"),ellipse:o("ellipse"),g:o("g"),image:o("image"),line:o("line"),linearGradient:o("linearGradient"),mask:o("mask"),path:o("path"),pattern:o("pattern"),polygon:o("polygon"),polyline:o("polyline"),radialGradient:o("radialGradient"),rect:o("rect"),stop:o("stop"),svg:o("svg"),text:o("text"),tspan:o("tspan")};e.exports=i},function(e,t,n){"use strict";var r=n(3),o=r.isValidElement,i=n(19);e.exports=i(o)},function(e,t,n){"use strict";e.exports="15.6.1"},function(e,t,n){"use strict";var r=n(13),o=r.Component,i=n(3),a=i.isValidElement,u=n(15),s=n(21);e.exports=s(o,a,u)},function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);if("function"==typeof t)return t}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";e.exports=r},function(e,t,n){"use strict";var r=function(){};e.exports=r},function(e,t,n){"use strict";function r(e){return i.isValidElement(e)||o("143"),e}var o=n(6),i=n(3);n(0);e.exports=r},function(e,t,n){"use strict";function r(e,t){return e&&"object"==typeof e&&null!=e.key?c.escape(e.key):t.toString(36)}function o(e,t,n,i){var f=typeof e;if("undefined"!==f&&"boolean"!==f||(e=null),null===e||"string"===f||"number"===f||"object"===f&&e.$$typeof===u)return n(i,e,""===t?l+r(e,0):t),1;var d,y,h=0,m=""===t?l:t+p;if(Array.isArray(e))for(var v=0;v<e.length;v++)d=e[v],y=m+r(d,v),h+=o(d,y,n,i);else{var b=s(e);if(b){var g,x=b.call(e);if(b!==e.entries)for(var E=0;!(g=x.next()).done;)d=g.value,y=m+r(d,E++),h+=o(d,y,n,i);else for(;!(g=x.next()).done;){var P=g.value;P&&(d=P[1],y=m+c.escape(P[0])+p+r(d,0),h+=o(d,y,n,i))}}else if("object"===f){var _="",w=String(e);a("31","[object Object]"===w?"object with keys {"+Object.keys(e).join(", ")+"}":w,_)}}return h}function i(e,t,n){return null==e?0:o(e,"",t,n)}var a=n(6),u=(n(8),n(14)),s=n(32),c=(n(0),n(25)),l=(n(1),"."),p=":";e.exports=i},function(e,t,n){e.exports=n(42)()},,,,,,function(e,t,n){"use strict";var r=n(4),o=n(0),i=n(17);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(9),c=r(s),l=n(36),p=r(l),f=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={index:e.index},n}return a(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){e.index!==this.state.index&&this.setState({index:e.index})}},{key:"getDots",value:function(e,t){var n=this;return e.map(function(e,r){return c.default.createElement("div",{key:r,onClick:t.bind(null,r),className:"ds-control-dot",style:{transform:"scale("+(r===n.state.index?1.5:1)+")"}})})}},{key:"render",value:function(){return c.default.createElement("div",{className:"ds-controls"},c.default.createElement("svg",{onClick:this.props.actions.prev,className:"ds-control-arrow",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),c.default.createElement("div",{className:"ds-control-dots"},this.getDots(this.props.images,this.props.actions.jumpTo)),c.default.createElement("svg",{onClick:this.props.actions.next,className:"ds-control-arrow",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.default.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})))}}]),t}(s.Component);f.propTypes={actions:p.default.objectOf(p.default.func).isRequired,images:p.default.array.isRequired,index:p.default.number.isRequired},t.default=f}])});