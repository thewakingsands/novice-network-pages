(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{242:function(t,e,a){},246:function(t,e,a){"use strict";a(242)},256:function(t,e,a){"use strict";a.r(e);var n={inject:["getPhotoSwipe","gotoId"],data:()=>({slotKeys:["default"]}),methods:{scrollToTop(){this.gotoId("")},handleClick(t){for(var e=t.target;e;){if("A"===e.tagName){this.handleClickLink(e,t);break}if("IMG"===e.tagName){this.handleClickImg(e,t);break}e=e.parentElement}},handleClickLink(t,e){if(t.origin===location.origin&&t.pathname===location.pathname&&t.search===location.search){var a=t.hash,n="";a&&(n=decodeURIComponent(a.slice(1))),this.gotoId(n),e.preventDefault(),e.stopPropagation()}},handleClickImg(t,e){if(!t.classList.contains("no-zoom")){var a=t.src;this.getPhotoSwipe().openSingle(a,t)}},updateSlotKeys(){this.$page&&this.$page.frontmatter&&this.$page.frontmatter.slots?this.slotKeys=this.$page.frontmatter.slots:this.slotKeys=["default"]}},watch:{$page(){this.updateSlotKeys()}},created(){this.updateSlotKeys()}},s=(a(246),a(16)),o=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-container"},[e("article",{staticClass:"content-container-inner",on:{"!click":function(e){return t.handleClick.apply(null,arguments)}}},[t._t("default"),t._v(" "),t._l(t.slotKeys,(function(t){return e("Content",{key:t,attrs:{"slot-key":t}})}))],2),t._v(" "),e("aside",{staticClass:"hide-small"},[e("TOC",{staticClass:"articleTOC"}),t._v(" "),e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return e.preventDefault(),t.scrollToTop.apply(null,arguments)}}},[e("i",{staticClass:"double up angle icon"}),t._v(" 回到页首\n    ")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);