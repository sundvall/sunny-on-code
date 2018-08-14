webpackJsonp([0x620f737b6699],{68:function(t,e){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t){return Array.isArray(t)?t:Array.from(t)}function o(t){var e=new Date(t);if(!Number.isNaN(e.valueOf()))return e;var o=String(t).match(/\d+/g);if(null==o||o.length<=2)return e;var a=o.map(function(t){return parseInt(t)}),i=r(a),l=i[0],u=i[1],f=i.slice(2),d=[l,u-1].concat(n(f)),c=new Date(Date.UTC.apply(Date,n(d)));return c}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},69:function(t,e){"use strict";function n(t,e,n){return 1!==t&&(e+="s"),t+" "+e+" "+n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},70:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.YEAR=e.MONTH=e.WEEK=e.DAY=e.HOUR=e.MINUTE=void 0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f=function(){function t(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=t[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(1),p=r(c),s=n(69),m=r(s),h=n(68),v=r(h),g=e.MINUTE=60,y=e.HOUR=60*g,b=e.DAY=24*y,x=e.WEEK=7*b,w=e.MONTH=30*b,M=e.YEAR=365*b,O=function(t){function e(){var t,n,r,o;a(this,e);for(var l=arguments.length,u=Array(l),f=0;f<l;f++)u[f]=arguments[f];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),r.isStillMounted=!1,r.tick=function(t){if(r.isStillMounted&&r.props.live){var e=(0,v.default)(r.props.date).valueOf();if(!e)return void console.warn("[react-timeago] Invalid Date provided");var n=r.props.now(),o=Math.round(Math.abs(n-e)/1e3),a=o<g?1e3:o<y?1e3*g:o<b?1e3*y:0,i=Math.min(Math.max(a,1e3*r.props.minPeriod),1e3*r.props.maxPeriod);i&&(r.timeoutId=setTimeout(r.tick,i)),t||r.forceUpdate()}},o=n,i(r,o)}return l(e,t),d(e,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.props.live&&this.tick(!0)}},{key:"componentDidUpdate",value:function(t){this.props.live===t.live&&this.props.date===t.date||(!this.props.live&&this.timeoutId&&clearTimeout(this.timeoutId),this.tick())}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1,this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}},{key:"render",value:function(){var t=this.props,e=t.date,n=(t.formatter,t.component),r=(t.live,t.minPeriod,t.maxPeriod,t.title),a=t.now,i=o(t,["date","formatter","component","live","minPeriod","maxPeriod","title","now"]),l=(0,v.default)(e).valueOf();if(!l)return null;var d=a(),c=Math.round(Math.abs(d-l)/1e3),s=l<d?"ago":"from now",h=c<g?[Math.round(c),"second"]:c<y?[Math.round(c/g),"minute"]:c<b?[Math.round(c/y),"hour"]:c<x?[Math.round(c/b),"day"]:c<w?[Math.round(c/x),"week"]:c<M?[Math.round(c/w),"month"]:[Math.round(c/M),"year"],O=f(h,2),E=O[0],_=O[1],k="undefined"==typeof r?"string"==typeof e?e:(0,v.default)(e).toISOString().substr(0,16).replace("T"," "):r;"time"===n&&(i.dateTime=(0,v.default)(e).toISOString());var P=m.default.bind(null,E,_,s);return p.default.createElement(n,u({},i,{title:k}),this.props.formatter(E,_,s,l,P))}}]),e}(c.Component);O.displayName="TimeAgo",O.defaultProps={live:!0,component:"time",minPeriod:0,maxPeriod:1/0,formatter:m.default,now:function(){return Date.now()}},e.default=O},103:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return t.raw=e,t}e.__esModule=!0;var a=o(["\n\tmargin-bottom: 48px;\n\tborder: none;\n\tborder-top: 1px solid #555;\n\tmargin: 0 0 24px;\n\twidth: 100%;\n\theight: 0;\n\tbox-sizing: content-box;\n"],["\n\tmargin-bottom: 48px;\n\tborder: none;\n\tborder-top: 1px solid #555;\n\tmargin: 0 0 24px;\n\twidth: 100%;\n\theight: 0;\n\tbox-sizing: content-box;\n"]),i=n(9),l=r(i),u=l.default.hr(a);e.default=u,t.exports=e.default},299:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return t.raw=e,t}e.__esModule=!0,e.query=void 0;var a=o(["\n\tfloat: right;\n\tlist-style: none;\n\tmargin: 0;\n\t& li a,\n\t& li {\n\t\tfont-weight: 600;\n\t\ttext-transform: uppercase;\n\t\ttext-decoration: none;\n\t\tdisplay: inline-block;\n\t\tcolor: #222;\n\t}\n\t& > li + li:before {\n\t\tpadding: 0 8px;\n\t\tfont-weight: 400;\n\t\tcolor: #444;\n\t\tcontent: '|';\n\t}\n"],["\n\tfloat: right;\n\tlist-style: none;\n\tmargin: 0;\n\t& li a,\n\t& li {\n\t\tfont-weight: 600;\n\t\ttext-transform: uppercase;\n\t\ttext-decoration: none;\n\t\tdisplay: inline-block;\n\t\tcolor: #222;\n\t}\n\t& > li + li:before {\n\t\tpadding: 0 8px;\n\t\tfont-weight: 400;\n\t\tcolor: #444;\n\t\tcontent: '|';\n\t}\n"]),i=o(["\n\tmargin: 0 auto;\n\tmax-width: 960px;\n\tpadding: 0px 1.0875rem 1.45rem;\n\tpadding-top: 5vh;\n\thr {\n\t\tmargin: 0 0 40px;\n\t}\n"],["\n\tmargin: 0 auto;\n\tmax-width: 960px;\n\tpadding: 0px 1.0875rem 1.45rem;\n\tpadding-top: 5vh;\n\thr {\n\t\tmargin: 0 0 40px;\n\t}\n"]),l=o(["\n\tfloat: left;\n"],["\n\tfloat: left;\n"]),u=o(["\n\ttext-transform: uppercase;\n\tmargin-top: 0.5em;\n\tmargin-right: 0.5em;\n\tdisplay: inline-block;\n\tfloat: left;\n"],["\n\ttext-transform: uppercase;\n\tmargin-top: 0.5em;\n\tmargin-right: 0.5em;\n\tdisplay: inline-block;\n\tfloat: left;\n"]),f=n(1),d=r(f),c=n(9),p=r(c),s=n(58),m=r(s),h=n(70),v=r(h),g=n(72),y=r(g),b=n(103),x=r(b),w=p.default.ol(a),M=p.default.div(i),O=p.default.i(l),E=p.default.h5(u);e.default=function(t){console.log("blog-post:p",t);var e=t.data,n=t.location,r=t.pathContext,o=e.markdownRemark,a=r.tagLinkPrefix,i=r.next,l=r.previous,u=[{name:"home",link:"/"},{name:o.frontmatter.title,link:n.pathname}],f=o&&o.frontmatter&&o.frontmatter.tags,c=f&&o.frontmatter.tags.map(function(t){return d.default.createElement("li",{key:t},d.default.createElement(m.default,{to:"/"+a+"/"+t},t))});return d.default.createElement("div",null,d.default.createElement(y.default,{title:o.frontmatter.title,crumbs:u,previous:l,next:i}),d.default.createElement(M,null,d.default.createElement(E,null,o.timeToRead," min read"),d.default.createElement(O,null,"Posted: ",d.default.createElement(v.default,{date:o.frontmatter.date})),d.default.createElement(w,null,c),d.default.createElement(x.default,null),d.default.createElement("div",{dangerouslySetInnerHTML:{__html:o.html}})),l&&d.default.createElement(m.default,{to:l},"previous"),i&&d.default.createElement(m.default,{to:i},"next"))};e.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-6281ac30187507f1541b.js.map