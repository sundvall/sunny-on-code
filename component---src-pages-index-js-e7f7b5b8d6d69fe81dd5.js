(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(e,t,n){"use strict";n.r(t);var a=n(224),r=n.n(a),i=(n(240),n(0)),o=n.n(i),l=n(195),c=n(201),u=n(202),d=n(241),s=n.n(d),p=(n(62),n(196)),m=l.default.a.withConfig({displayName:"owner__Base"})(["color:",";margin:20px 0;width:fit-content;white-space:nowrap;&:hover{cursor:pointer;-webkit-background-clip:text;text-decoration:none;color:",";}"],p.c.hex,p.b.hex),f=function(e){return o.a.createElement(m,Object.assign({},e,{href:"#home"}),"Martin Sundvall")},h=function(){return Object(l.css)(["@media (max-width:767px){",";}"],l.css.apply(void 0,arguments))};function g(){var e=r()(["\n    & ul {\n      display: none;\n    }\n  "]);return g=function(){return e},e}var x=l.default.div.withConfig({displayName:"nav-bar__Base"})(["padding:0;margin:0;max-height:62px;line-height:62px;width:100vw;& ul{width:100%;height:62px;padding:0;margin:0;list-style:none;font-size:13px;}& ul > li a,& ul > li{height:62px;font-size:11px;float:right;position:relative;color:",";text-decoration:none;cursor:pointer;transition:opacity .3s ease;}& ul > li a{font-family:'Raleway';text-transform:uppercase;font-weight:600;letter-spacing:1px;margin-right:32px;}"," "," ",""],p.b.hex,function(e){return e.dark&&Object(l.css)(["background:",";& ul > li a,& ul > li{color:",";opacity:0.6;}& ul > li a:hover{opacity:1;}a{color:",";}"],p.b.hex,p.a.hex,p.a.hex)},function(e){return e.main&&Object(l.css)(["background:transparent;position:absolute;top:0;left:0;z-index:100;"])},h(g())),b=function(e){var t=e.links;return o.a.createElement(x,e,o.a.createElement(c.Flex,null,o.a.createElement(c.Box,{px:2,width:[1,1/3,2/6]},o.a.createElement(f,null)),o.a.createElement(c.Box,{px:2,width:[0,2/3,4/6]},o.a.createElement("ul",null,t&&t.map(function(e){return o.a.createElement("li",{key:e.title},o.a.createElement("a",{href:e.href,onClick:function(){s()(e.href)}},e.title))})))))},w=n(197),v=n(206),y=n.n(v),E=n(223),k=l.default.ol.withConfig({displayName:"blog-post-part__Tags"})(["float:right;list-style:none;margin:0;& li a,& li{font-weight:600;text-transform:uppercase;text-decoration:none;display:inline-block;color:#222;}& > li + li:before{padding:0 8px;font-weight:400;color:#444;content:'|';}"]),_=l.default.div.withConfig({displayName:"blog-post-part__Content"})(["margin:0 auto;max-width:960px;padding:0px 1.0875rem 1.45rem;padding-top:5vh;hr{margin:0 0 40px;}"]),C=l.default.i.withConfig({displayName:"blog-post-part__Timestamp"})(["float:left;"]),B=l.default.h5.withConfig({displayName:"blog-post-part__TimeToRead"})(["text-transform:uppercase;margin-top:0.5em;margin-right:0.5em;display:inline-block;float:left;"]),j=function(e){var t=e.title,n=e.slug,a=e.date,r=e.excerpt,i=e.tags,l=e.timeToRead,c=e.tagLinkPrefix,u=void 0===c?"tags":c,d=i&&i.map(function(e){return o.a.createElement("li",{key:e},o.a.createElement(w.Link,{to:"/"+u+"/"+e},e))});return o.a.createElement(_,null,o.a.createElement(B,null,l," min read"),o.a.createElement(C,null,"Posted: ",o.a.createElement(y.a,{date:a})),o.a.createElement(k,null,d),o.a.createElement(E.a,null),o.a.createElement(w.Link,{to:n},o.a.createElement("h2",null,t),o.a.createElement("p",null,r)))},N=l.default.div.withConfig({displayName:"top-background-wrapper__TopBackgroundWrapper"})(["position:relative;z-index:1;margin:0;padding:0;width:100%;padding-top:100%;background-color:",";background-size:600% 600%;button{position:absolute;bottom:5%;left:15%;}"," "," ",""],p.a.hex,function(e){return e.img&&Object(l.css)(["background-image:url(",");background-repeat:no-repeat;background-size:cover;image-rendering:-webkit-optimize-contrast;"],e.img)},function(e){return e.fillPage&&Object(l.css)(["padding-top:0;width:100vw;height:100vh;"])},function(e){return e.overlay&&Object(l.css)(["&:after{background:",";content:'';width:100%;height:auto;position:absolute;z-index:-1;top:0;right:0;left:0;bottom:0;}"],p.a.hex)}),O=(n(205),n(312)),z=n.n(O),T=function(e){var t=e.name,n=e.href;return o.a.createElement("a",{href:n},o.a.createElement(z.a,{name:t}))},R=l.default.div.withConfig({displayName:"socmedia__Base"})(["margin:20px 0;text-align:center;& a{display:inline-block;margin 5px;color:#fff;}& a span{transition:color .2s ease-in;}& a:hover{text-decoration:none;}& a:hover span.fa-linkedin{color:#4875b4;}& a:hover span.fa-twitter{color:#3cf;}& a:hover span.fa-github-alt{color:#fc6d26;}"]),q=function(e){var t=e.icons.map(function(e){return o.a.createElement(T,{key:e.name,name:e.name,href:e.href})});return o.a.createElement(R,e,t)},I=n(314),S=n.n(I),F=l.default.button.withConfig({displayName:"button__Button"})(["border:2px solid #47b475;background-color:#fff;padding:0 26px;height:40px;min-width:150px;line-height:36px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;border-radius:0;color:#47b475;text-align:center;transition:all 0.3s ease;-webkit-transition:all 0.3s ease;-moz-transition:all 0.3s ease;margin-right:8px;margin-bottom:24px;cursor:pointer;&:hover{color:#fff;background-color:#47b475;}"," "," ",""],function(e){return e.dark&&Object(l.css)(["color:#949494;border-color:#949494;&:hover{color:#fff;background-color:#949494;}"])},function(e){return e.opaque&&Object(l.css)(["background:none;&:hover{background-color:transparent;color:#fff;border-color:#fff;}"])},function(e){return e.small&&Object(l.css)(["height:30px;font-size:11px;line-height:27px;min-width:0;"])}),P=l.default.div.withConfig({displayName:"footer__Base"})(["height:fit-contents;padding:0;background:",";"],p.e.hex),L=l.default.div.withConfig({displayName:"footer__FooterText"})(["padding-top:6px;color:LIGHT.hex;text-align:center;a{color:",";}"],p.c.hex),G=Object(l.default)(q).withConfig({displayName:"footer__SocmediaStyled"})(["margin-left:-8px;text-align:left;"]),A=Object(l.default)(c.Box).withConfig({displayName:"footer__CenteredButtonBox"})(["margin:2em auto;"]),D=function(e){return o.a.createElement(P,e,o.a.createElement(c.Flex,{flexWrap:"wrap",justifyContent:"space-around"},o.a.createElement(c.Box,{width:[1,.5,1/3,1/6]},o.a.createElement(c.Flex,{justifyContent:"center",flexDirection:"column"},o.a.createElement(A,null,o.a.createElement(F,{onClick:function(){s()("html")},small:"small",dark:"dark",opaque:"opaque"},"Top")),o.a.createElement(A,null,o.a.createElement(f,{block:!0}),o.a.createElement("p",null,"martin@martinsundvall.se"),o.a.createElement("p",null,"+46 739 84 61 91")),o.a.createElement(A,null,o.a.createElement(G,{icons:[{name:"github-alt",href:"https://github.com/sundvall/"},{name:"linkedin",href:"https://www.linkedin.com/in/martinsundvall"}]}),o.a.createElement(c.Box,null,o.a.createElement(L,null,o.a.createElement("h4",null,"Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"GatsbyJS")))))))))};function H(){var e=r()(['\n@import "//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";\n  html {\n    max-width: 100vw;\n    overflow-x: hidden;\n  }\n']);return H=function(){return e},e}Object(l.injectGlobal)(H());var M=l.default.div.withConfig({displayName:"layout__WrapAll"})(["display:flex;min-height:100vh;flex-direction:column;width:100vw;background:",";img{margin-bottom:0;}"],p.b.hex),J=l.default.div.withConfig({displayName:"layout__Content"})(["flex:1;"]),Q=function(e){var t=e.location,n=e.children;return o.a.createElement(M,{id:"home"},o.a.createElement(S.a,{title:"Martin Sundvall",meta:[{name:"description",content:"portfolio"},{name:"keywords",content:"martin, sundvall, portfolio, javascript"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}),o.a.createElement(J,null,n),"/404"!==t.pathname&&o.a.createElement(D,null))};function W(){var e=r()(["\n        & > div {\n          margin-left: 3vw !important;\n        }\n    "]);return W=function(){return e},e}n.d(t,"query",function(){return $});var U=Object(l.default)(q).withConfig({displayName:"pages__SocmediaStyled"})(["position:absolute;margin:0 auto;left:0;right:0;bottom:16px;"]),X=l.default.div.withConfig({displayName:"pages__Content"})(["& > a{visibility:hidden;display:block;height:0;}& > h1{text-align:center;}"]),K=l.default.h1.withConfig({displayName:"pages__Title"})(["font-family:'Raleway';text-transform:uppercase;letter-spacing:6px;margin-bottom:40px;font-weight:400;font-size:32px;line-height:40px;border:none;color:#292929;",";"],function(e){return e.small&&Object(l.css)(["font-size:12px;letter-spacing:2px;font-weight:700;line-height:24px;"])}),V=l.default.div.withConfig({displayName:"pages__Section"})(["text-align:center;padding-top:45px;padding-bottom:40px;a{font-family:'Lato';}p{margin-bottom:64px;color:#666;}h1,h2,h3,h4,h5,h6{font-family:'Raleway';text-transform:uppercase;color:#292929;}h4{letter-spacing:3px;font-weight:400;font-size:24px;line-height:32px;color:#292929;}span{color:#666;opacity:0.5;display:block;}& > div:last-child{border-bottom:none !important;}"," ",";"],function(e){return e.center&&Object(l.css)(["text-align:left;& > *{margin-left:30vw;}h4{margin-left:20vw;}",";"],h(W()))},function(e){return e.background&&Object(l.css)(["background:",";*{color:#eee;}span{text-align:left;font-size:16px;line-height:28px;font-weight:400;opacity:0.5;}span,p{color:#fefefe !important;}h6{color:#fff;font-weight:700;}h4{color:#fff;}div{border-bottom:1px solid #333 !important;}"],e.background)}),Y=function(e){var t=e.background,n=e.navBarId;return o.a.createElement(V,{id:n,background:t},o.a.createElement(K,null,"Contact"),o.a.createElement(c.Flex,{alignItems:"center",flexDirection:"column"},o.a.createElement(c.Box,{px:2,width:[1,.5]},o.a.createElement("p",null,"martin@martinsundvall.se"),o.a.createElement("p",null,"+46 739 84 61 91"),o.a.createElement("a",{href:"https://www.linkedin.com/in/martinsundvall"},"https://www.linkedin.com/in/martinsundvall"),o.a.createElement(q,{icons:[{name:"linkedin",href:"https://www.linkedin.com/in/martinsundvall"}]}))))},Z=function(e){var t=e.background,n=e.navBarId;return o.a.createElement(V,{id:n,background:t},o.a.createElement(K,null,"About me"),o.a.createElement(c.Flex,{alignItems:"center",flexDirection:"column"},o.a.createElement(c.Box,{px:2,width:[1,.5]},o.a.createElement("p",null,"I am a front end developer focused on javascript and functionality. I work at an igame company"," ",o.a.createElement("a",{href:"https://www.comeon.com/"},"comeon"),". Previous experience includes banners for ads and self-service platforms."),o.a.createElement("p",null,"My background is partly artistic. (see",o.a.createElement("a",{href:"http://martinsundvall.se/wordpress/"},"here"),"if you are curious)"))))},$="2619785691";t.default=function(e){var t=e.data,n=e.location,a=t.allMarkdownRemark.edges;return o.a.createElement(Q,{location:n},o.a.createElement("div",null,o.a.createElement(b,{main:!0,links:[{title:"posts",href:"#posts"},{title:"all-tags",href:"/tags"},{title:"about",href:"#about"},{title:"contact",href:"#contact"}]}),o.a.createElement(X,null,o.a.createElement(N,{overlay:!0,fillPage:!0},o.a.createElement(U,{icons:[{name:"github-alt",href:"https://github.com/sundvall/"},{name:"linkedin",href:"https://www.linkedin.com/in/martinsundvall"}]})),o.a.createElement(u.a,{navBarId:"posts",title:"INDEX OF POSTS",crumbs:[{name:"home",link:"/"}]}),a.map(function(e){var t=e.node,n=t.frontmatter,a=t.timeToRead,r=t.fields.slug,i=n.date,l=n.title,c=n.excerpt,u=n.tags;return o.a.createElement("div",{key:t.id},o.a.createElement(j,{title:l,slug:r,date:i,excerpt:c,tags:u,timeToRead:a}))}),o.a.createElement(Z,{background:p.d.hex,navBarId:"about"}),o.a.createElement(Y,{background:p.c.hex,navBarId:"contact"}))))}},196:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"a",function(){return l});var a={rgb:[241,228,219],hex:"#F1E4DB"},r={rgb:[234,87,75],hex:"#EA574B"},i={rgb:[240,174,36],hex:"#F0AE24"},o={rgb:[63,180,198],hex:"#3FB4C6"},l={rgb:[86,93,106],hex:"#565D6A"}},197:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(15),o=n.n(i),l=n(194),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(199),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var s=n(38);n.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},199:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},200:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),o=n.n(i),l=n(42),c=n(1),u=function(e){var t=e.location,n=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:n})};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},202:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(195),o=n(201),l=(n(212),n(205),n(204)),c=n.n(l),u=n(197),d=i.default.ol.withConfig({displayName:"breadcrumb__Base"})(["padding-top:10px;list-style:none;margin:0;& li a,& li{font-family:'Raleway','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:24px;font-weight:400;text-transform:uppercase;letter-spacing:2px;font-weight:700;font-size:11px;font-weight:600;text-decoration:none;display:inline-block;color:#fff;}& > li + li:before{padding:0 8px;color:#ccc;content:'/';}& > li:last-child > a{color:#777;pointer-events:none;cursor:default;}@media (min-width:831px){float:right;}",";"],function(e){return e.dark&&Object(i.css)(["& li a,& li{color:#444;}"])}),s=function(e){var t=e.crumbs,n=c()(e,["crumbs"]),a=t.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(u.Link,{to:e.link},e.name))});return r.a.createElement(d,n,a)},p=n(196),m=i.default.div.withConfig({displayName:"page-head__Header"})(["height:fit-contents;padding:0;background:",";position:relative;overflow:hidden;& > div{padding-top:120px;margin:auto;max-width:600px;}"],p.d.hex),f=i.default.h1.withConfig({displayName:"page-head__Title"})(["margin-top:0;text-transform:capitalize;color:#fff;"]);t.a=function(e){var t=e.title,n=e.crumbs,a=e.navBarId;return r.a.createElement(m,{id:a},r.a.createElement(o.Flex,null,r.a.createElement(o.Box,{px:2,width:[1,2/3,1/3]},r.a.createElement(f,null,t)),r.a.createElement(o.Box,{px:2,width:[1,2/3]},r.a.createElement(s,{crumbs:n}))))}},223:function(e,t,n){"use strict";var a=n(195).default.hr.withConfig({displayName:"bar__Bar"})(["margin-bottom:48px;border:none;border-top:1px solid #555;margin:0 0 24px;width:100%;height:0;box-sizing:content-box;"]);t.a=a}}]);
//# sourceMappingURL=component---src-pages-index-js-e7f7b5b8d6d69fe81dd5.js.map