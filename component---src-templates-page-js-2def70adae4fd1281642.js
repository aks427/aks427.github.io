(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return c});var a=n(8),r=(n(0),n(154)),i=n(155);e.default=function(t){var e=t.data.markdownRemark;return Object(a.b)(i.a,null,Object(a.b)(r.Helmet,null,Object(a.b)("title",null,e.frontmatter.title," | Andrew Stevens")),Object(a.b)("div",null,Object(a.b)("h2",null,e.frontmatter.title),Object(a.b)("div",{dangerouslySetInnerHTML:{__html:e.html}})))};var c="1046032807"},151:function(t,e,n){var a;t.exports=(a=n(157))&&a.default||a},152:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return f}),n.d(e,"StaticQuery",function(){return p}),n.d(e,"useStaticQuery",function(){return h});var a=n(8),r=n(0),i=n.n(r),c=n(4),o=n.n(c),u=n(150),s=n.n(u);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var l=n(151),b=n.n(l);n.d(e,"PageRenderer",function(){return b.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var f=i.a.createContext({}),p=function(t){return Object(a.b)(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})},h=function(t){i.a.useContext;var e=i.a.useContext(f);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n(158),r=n.n(a),i=n(159),c=n.n(i);c.a.baseFontSize="18px";var o=new r.a(c.a),u=o.rhythm},155:function(t,e,n){"use strict";var a=n(8),r=n(156),i=(n(0),n(152)),c=n(154),o=n(160),u=n(153),s={name:"146q31f",styles:"float:right;"};e.a=function(t){var e=t.children,n=r.data;return Object(a.b)("div",{css:Object(a.a)("margin:0 auto;max-width:700px;padding:",Object(u.a)(2),";padding-top:",Object(u.a)(1.5),";")},Object(a.b)(c.Helmet,null,Object(a.b)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),Object(a.b)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),Object(a.b)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),Object(a.b)("meta",{property:"og:logo",content:"/android-chrome-512x512.png"}),Object(a.b)("link",{rel:"manifest",href:"/site.webmanifest"}),Object(a.b)("title",null,n.site.siteMetadata.title)),Object(a.b)(i.Link,{to:"/"},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(u.a)(2),";display:inline-block;font-style:normal;")},"Andrew's Dev Site")),Object(a.b)(i.Link,{to:"/about/",css:s},"About"),e,Object(a.b)("div",{className:"social-links"},Object(a.b)("a",{href:"https://github.com/aks427",target:"_blank",title:"GitHub"},Object(a.b)(o.a,null)),Object(a.b)("a",{href:"https://twitter.com/aks427",target:"_blank",title:"Twitter"},Object(a.b)(o.d,null)),Object(a.b)("a",{href:"https://stackoverflow.com/users/505108/andrew-stevens",target:"_blank",title:"Stack Overflow"},Object(a.b)(o.c,null)),Object(a.b)("a",{href:"https://www.linkedin.com/in/aks427/",target:"_blank",title:"LinkedIn"},Object(a.b)(o.b,null))))}},156:function(t){t.exports={data:{site:{siteMetadata:{title:"Andrew Stevens | Dev Site"}}}}},157:function(t,e,n){"use strict";n.r(e);n(52);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(53),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=s}}]);
//# sourceMappingURL=component---src-templates-page-js-2def70adae4fd1281642.js.map