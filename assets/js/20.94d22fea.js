(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{291:function(t,s,a){},345:function(t,s,a){"use strict";a(291)},838:function(t,s,a){"use strict";a.r(s);a(25);var i={props:{name:String,className:String},methods:{details(){this.hasPage?this.$router.push(`/job/${this.name}.htm`):alert("还在填坑中")}},computed:{hasPage(){return!(!this.$site||!this.$site.pages)&&!!this.$site.pages.find(t=>t.relativePath===`job/${this.name}.md`)}}},e=(a(345),a(16)),n=Object(e.a)(i,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"job-card"},[s("div",{staticClass:"ui card",class:t.className},[s("div",{staticClass:"content"},[s("img",{staticClass:"no-zoom right floated tiny ui image",attrs:{src:t.$withBase("/images/jobs/singlecolor/"+t.name+".png")}}),t._v(" "),t._t("default")],2),t._v(" "),s("div",{staticClass:"ui bottom attached button",on:{click:t.details}},[s("i",{staticClass:"angle right icon"}),t._v(" "),t.hasPage?s("span",[t._v("查看详情")]):s("span",[t._v("(细节攻略还在填坑中)")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);