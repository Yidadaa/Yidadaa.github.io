(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{380:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},381:function(e,t,n){var s=n(2),o=n(31),u=n(22),i=n(380),r=s("".replace),a="["+i+"]",c=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),l=function(e){return function(t){var n=u(o(t));return 1&e&&(n=r(n,c,"")),2&e&&(n=r(n,f,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},395:function(e,t,n){},409:function(e,t,n){"use strict";var s=n(1),o=n(381).trim;s({target:"String",proto:!0,forced:n(410)("trim")},{trim:function(){return o(this)}})},410:function(e,t,n){var s=n(82).PROPER,o=n(3),u=n(380);e.exports=function(e){return o((function(){return!!u[e]()||"​᠎"!=="​᠎"[e]()||s&&u[e].name!==e}))}},411:function(e,t,n){"use strict";var s=n(10),o=n(196),u=n(8),i=n(81),r=n(22),a=n(31),c=n(56),f=n(197),l=n(198);o("match",(function(e,t,n){return[function(t){var n=a(this),o=null==t?void 0:c(t,e);return o?s(o,t,n):new RegExp(t)[e](r(n))},function(e){var s=u(this),o=r(e),a=n(t,s,o);if(a.done)return a.value;if(!s.global)return l(s,o);var c=s.unicode;s.lastIndex=0;for(var h,d=[],g=0;null!==(h=l(s,o));){var p=r(h[0]);d[g]=p,""===p&&(s.lastIndex=f(o,i(s.lastIndex),c)),g++}return 0===g?null:d}]}))},412:function(e,t,n){"use strict";n(395)},421:function(e,t,n){"use strict";n.r(t);n(409),n(202),n(112),n(57),n(7),n(37),n(411),n(199);var s=["s","/"],o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:""}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var e=this.query.trim().toLowerCase();if(e){for(var t=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,o=function(t){return t&&t.title&&t.title.toLowerCase().indexOf(e)>-1},u=[],i=0;i<t.length&&!(u.length>=n);i++){var r=t[i];if(this.getPageLocalePath(r)===s&&this.isSearchable(r))if(o(r))u.push(r);else if(r.headers)for(var a=0;a<r.headers.length&&!(u.length>=n);a++){var c=r.headers[a];o(c)&&u.push(Object.assign({},r,{path:r.path+"#"+c.slug,header:c}))}}return u}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(e){for(var t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable:function(e){var t=null;return null===t||(t=Array.isArray(t)?t:new Array(t)).filter((function(t){return e.path.match(t)})).length>0},onHotkey:function(e){e.srcElement===document.body&&s.includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus:function(e){this.focusIndex=e},unfocus:function(){this.focusIndex=-1}}},u=(n(412),n(54)),i=Object(u.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,s){return n("li",{key:s,staticClass:"suggestion",class:{focused:s===e.focusIndex},on:{mousedown:function(t){return e.go(s)},mouseenter:function(t){return e.focus(s)}}},[n("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[n("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?n("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);t.default=i.exports}}]);