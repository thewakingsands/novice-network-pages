(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{298:function(s,o,t){},353:function(s,o,t){"use strict";t(298)},844:function(s,o,t){"use strict";t.r(o);var n={data:()=>({loading:!0,error:"",sponsors:[]}),async mounted(){await this.updateSponsors()},methods:{async updateSponsors(){this.loading=!0;try{const s=await fetch("https://novice-network-asl.wakingsands.com/sponsors"),o=await s.json();s.ok?this.sponsors=o.data:this.error=(null==s?void 0:s.message)||"未知错误"}catch(s){this.error=s.message}finally{this.loading=!1}}}},a=(t(353),t(16)),r=Object(a.a)(n,(function(){var s=this,o=s._self._c;return o("div",{staticClass:"sponsors-container"},[o("div",{staticClass:"sponsors-header"},[s._v("感谢以下赞助者：")]),s._v(" "),s.loading?o("div",{staticClass:"sponsor-loading"},[s._v("正在加载赞助者……")]):s._e(),s._v(" "),s.error?o("div",{staticClass:"sponsor-error",on:{click:function(o){return s.updateSponsors()}}},[s._v("\n    赞助者加载失败："+s._s(s.error)+"\n  ")]):o("ul",{staticClass:"sponsors"},s._l(s.sponsors,(function(t,n){return o("li",{key:n,staticClass:"sponsor"},[o("div",{staticClass:"sponsor-avatar"},[o("img",{attrs:{src:t.avatar,alt:t.sponsor}})]),s._v(" "),o("div",{staticClass:"sponsor-name"},[s._v(s._s(t.sponsor))])])})),0),s._v(" "),s._m(0)])}),[function(){var s=this._self._c;return s("div",{staticClass:"sponsors-footer"},[s("a",{attrs:{href:"https://afdian.com/a/hikarievo",target:"_blank",rel:"noopener noreferrer"}},[this._v("\n      点我发电\n    ")])])}],!1,null,null,null);o.default=r.exports}}]);