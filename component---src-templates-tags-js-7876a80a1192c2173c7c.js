(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(197),o=n(206),u=n.n(o),l=n(202);t.default=function(e){var t=e.pageContext,n=t.posts,r=t.tagName;if(!n)throw new Error("tags: no posts: 54");return a.a.createElement("div",null,a.a.createElement(l.a,{title:r,crumbs:[{name:"home",link:"/"},{name:"tags",link:"/tags"},{name:r,link:r}]}),a.a.createElement("span",null,"Posts about ",r,":"),a.a.createElement("ul",null,n.map(function(e){var t=e.fields,n=e.frontmatter,r=n.excerpt,o=n.date,l=n.title,c=t.slug;return a.a.createElement("li",{key:c},a.a.createElement(i.Link,{to:c},a.a.createElement("h2",null,l),a.a.createElement("p",null,r),a.a.createElement("p",null,"Posted:",a.a.createElement(u.a,{date:o}))))})))}},196:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"a",function(){return u});var r={rgb:[241,228,219],hex:"#F1E4DB"},a={rgb:[234,87,75],hex:"#EA574B"},i={rgb:[240,174,36],hex:"#F0AE24"},o={rgb:[63,180,198],hex:"#3FB4C6"},u={rgb:[86,93,106],hex:"#565D6A"}},197:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),i=n(15),o=n.n(i),u=n(194),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(199),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var f=n(38);n.d(t,"parsePath",function(){return f.a});var d=a.a.createContext({}),p=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},199:function(e,t,n){var r;e.exports=(r=n(200))&&r.default||r},200:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(15),o=n.n(i),u=n(42),l=n(1),c=function(e){var t=e.location,n=l.a.getResourcesForPathname(t.pathname);return a.a.createElement(u.a,{location:t,pageResources:n})};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},202:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(195),o=n(201),u=(n(212),n(205),n(204)),l=n.n(u),c=n(197),s=i.default.ol.withConfig({displayName:"breadcrumb__Base"})(["padding-top:10px;list-style:none;margin:0;& li a,& li{font-family:'Raleway','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:24px;font-weight:400;text-transform:uppercase;letter-spacing:2px;font-weight:700;font-size:11px;font-weight:600;text-decoration:none;display:inline-block;color:#fff;}& > li + li:before{padding:0 8px;color:#ccc;content:'/';}& > li:last-child > a{color:#777;pointer-events:none;cursor:default;}@media (min-width:831px){float:right;}",";"],function(e){return e.dark&&Object(i.css)(["& li a,& li{color:#444;}"])}),f=function(e){var t=e.crumbs,n=l()(e,["crumbs"]),r=t.map(function(e){return a.a.createElement("li",{key:e.name},a.a.createElement(c.Link,{to:e.link},e.name))});return a.a.createElement(s,n,r)},d=n(196),p=i.default.div.withConfig({displayName:"page-head__Header"})(["height:fit-contents;padding:0;background:",";position:relative;overflow:hidden;& > div{padding-top:120px;margin:auto;max-width:600px;}"],d.d.hex),m=i.default.h1.withConfig({displayName:"page-head__Title"})(["margin-top:0;text-transform:capitalize;color:#fff;"]);t.a=function(e){var t=e.title,n=e.crumbs,r=e.navBarId;return a.a.createElement(p,{id:r},a.a.createElement(o.Flex,null,a.a.createElement(o.Box,{px:2,width:[1,2/3,1/3]},a.a.createElement(m,null,t)),a.a.createElement(o.Box,{px:2,width:[1,2/3]},a.a.createElement(f,{crumbs:n}))))}},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),u=c(n(207)),l=c(n(208));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=o.Component,d=60,p=60*d,m=24*p,h=7*m,v=30*m,y=365*m,g=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.isStillMounted=!1,r.tick=function(e){if(r.isStillMounted&&r.props.live){var t=(0,l.default)(r.props.date).valueOf();if(t){var n=r.props.now(),a=Math.round(Math.abs(n-t)/1e3),i=a<d?1e3:a<p?1e3*d:a<m?1e3*p:0,o=Math.min(Math.max(i,1e3*r.props.minPeriod),1e3*r.props.maxPeriod);o&&(r.timeoutId=setTimeout(r.tick,o)),e||r.forceUpdate()}else console.warn("[react-timeago] Invalid Date provided")}},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,f),i(t,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.props.live&&this.tick(!0)}},{key:"componentDidUpdate",value:function(e){this.props.live===e.live&&this.props.date===e.date||(!this.props.live&&this.timeoutId&&clearTimeout(this.timeoutId),this.tick())}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1,this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}},{key:"render",value:function(){var e=this.props,t=e.date,n=(e.formatter,e.component),i=(e.live,e.minPeriod,e.maxPeriod,e.title),c=e.now,s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["date","formatter","component","live","minPeriod","maxPeriod","title","now"]),f=(0,l.default)(t).valueOf();if(!f)return null;var g=c(),b=Math.round(Math.abs(g-f)/1e3),w=f<g?"ago":"from now",x=b<d?[Math.round(b),"second"]:b<p?[Math.round(b/d),"minute"]:b<m?[Math.round(b/p),"hour"]:b<h?[Math.round(b/m),"day"]:b<v?[Math.round(b/h),"week"]:b<y?[Math.round(b/v),"month"]:[Math.round(b/y),"year"],E=a(x,2),O=E[0],k=E[1],P=void 0===i?"string"==typeof t?t:(0,l.default)(t).toISOString().substr(0,16).replace("T"," "):i,_="time"===n?Object.assign({},s,{dateTime:(0,l.default)(t).toISOString()}):s,M=u.default.bind(null,O,k,w);return o.createElement(n,r({},_,{title:P}),this.props.formatter(O,k,w,f,M))}}]),t}();g.displayName="TimeAgo",g.defaultProps={live:!0,component:"time",minPeriod:0,maxPeriod:1/0,formatter:u.default,now:function(){return Date.now()}},t.default=g},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return 1!==e&&(t+="s"),e+" "+t+" "+n}},208:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(e);if(!Number.isNaN(t.valueOf()))return t;var n=String(e).match(/\d+/g);if(null==n||n.length<=2)return t;var a,i=(a=n.map(function(e){return parseInt(e)}),Array.isArray(a)?a:Array.from(a)),o=i[0],u=i[1],l=i.slice(2),c=[o,u-1].concat(r(l));return new Date(Date.UTC.apply(Date,r(c)))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-7876a80a1192c2173c7c.js.map