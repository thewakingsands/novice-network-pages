(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{248:function(t,a,s){},263:function(t,a,s){"use strict";s(248)},306:function(t,a,s){"use strict";s.r(a);var i=s(274),e=s.n(i),o={inject:["gotoId"],props:["isDark"],data:()=>({showQr:!1,showToc:!1,dataUrl:""}),methods:{scrollToTop(){this.gotoId("")},headClicked(){this.$page.headers?this.showToc=!this.showToc:this.gotoId("")},handleClick(t){for(var a=t.target;a;){if("A"===a.tagName){this.handleClickLink(a,t);break}a=a.parentElement}},handleClickLink(t,a){if(t.origin===location.origin&&t.pathname===location.pathname&&t.search===location.search){var s=t.hash,i="";s&&(i=decodeURIComponent(s.slice(1))),this.gotoId(i),this.showToc=!1,a.preventDefault(),a.stopPropagation()}}},watch:{showQr(t){t?e.a.toDataURL(location.origin+this.$withBase(this.$page.path)+"?utm_source=self&utm_medium=qrcode",{width:320,margin:2},(t,a)=>{t||(this.dataUrl=a)}):this.dataUrl=""},$page(){this.showToc=!1}}},c=(s(263),s(16)),n=Object(c.a)(o,(function(){var t=this,a=t._self._c;return a("nav",{staticClass:"nav-top"},[a("div",{staticClass:"ui inverted menu"},[a("a",{staticClass:"item icon-item hide-large",attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.$emit("barClicked")}}},[a("i",{staticClass:"bars icon"})]),t._v(" "),a("router-link",{staticClass:"item icon-item",attrs:{to:"/"}},[a("i",{staticClass:"home angle icon"})]),t._v(" "),a("router-link",{staticClass:"item icon-item hide-small",attrs:{to:"/search.htm"}},[a("i",{staticClass:"search icon"})]),t._v(" "),a("a",{staticClass:"item page-title",attrs:{href:"javascript:;"},on:{click:t.headClicked}},[t.$page.headers?a("i",{staticClass:"icon caret square down",class:{outline:!t.showToc}}):t._e(),t._v(" "),a("span",{staticClass:"hide-large"},[t._v(t._s(t.$page.title))]),t._v(" "),a("div",{staticClass:"hide-small"},[t._v("\n        "+t._s(t.$page.headers?"章节目录":t.$page.title)+"\n      ")])]),t._v(" "),a("div",{staticClass:"right menu"},[a("a",{staticClass:"item icon-item hide-small",attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.scrollToTop.apply(null,arguments)}}},[a("i",{staticClass:"double up angle icon"})]),t._v(" "),a("a",{staticClass:"item icon-item",attrs:{href:"javascript:;"},on:{click:function(a){return a.preventDefault(),t.$emit("toggleDark")}}},[a("i",{staticClass:"icon",class:[t.isDark?"moon":"sun"]})]),t._v(" "),a("a",{staticClass:"item icon-item hide-small",attrs:{href:"javascript:;"},on:{mouseenter:function(a){t.showQr=!0},mouseleave:function(a){t.showQr=!1}}},[a("i",{staticClass:"qrcode icon"})])])],1),t._v(" "),t.showQr?a("div",{staticClass:"qr-container"},[a("div",[a("img",{attrs:{src:t.dataUrl}})]),t._v(" "),a("p",[t._v("\n      使用手机扫描二维码，即可在手机上阅读本文。如遇微信无法打开，请使用自带浏览器或谷歌浏览器。\n    ")])]):t._e(),t._v(" "),t.showToc&&t.$page.headers?a("div",{staticClass:"toc-container",on:{"!click":function(a){return t.handleClick.apply(null,arguments)}}},[a("div",{staticClass:"toc"},[a("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$page.title)+" ")]),t._v(" "),a("TOC")],1)]):t._e()])}),[],!1,null,null,null);a.default=n.exports}}]);