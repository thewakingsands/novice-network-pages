(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{289:function(t,e,n){},343:function(t,e,n){"use strict";n(289)},836:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(1),s={props:{file:String,slotKey:{type:String,default:"default"}},computed:{currentComponent(){if(!this.file)return!1;var t=this.$site.pages.find(t=>t.relativePath===this.file);return!!t&&(t.key in o.a.options.components||o.a.component(t.key,Object(i.b)(t.key)),t.key)}}},r=(n(343),n(16)),u=Object(r.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"included-page"},[this.currentComponent?t(this.currentComponent,{tag:"component"}):this._e()],1)}),[],!1,null,null,null);e.default=u.exports}}]);