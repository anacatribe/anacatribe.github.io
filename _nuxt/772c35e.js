(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(n,t,e){"use strict";var r=e(38),component=Object(r.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},133:function(n,t,e){"use strict";e.r(t),e.d(t,"namespace",(function(){return o})),e.d(t,"state",(function(){return c})),e.d(t,"getters",(function(){return f})),e.d(t,"MutationType",(function(){return d})),e.d(t,"mutations",(function(){return E})),e.d(t,"actionType",(function(){return D})),e.d(t,"actions",(function(){return _}));var r=e(15),o="setting",c=function(){return{darkMode:!1}},f={},d={CHANGE_DARK_MODE:"changeDarkMode"},E=Object(r.a)({},d.CHANGE_DARK_MODE,(function(n,t){n.darkMode=t})),D={TOGGLE_DARK_MODE:"toggleDarkMode"},_=Object(r.a)({nuxtServerInit:function(n,t){(0,n.commit)(d.CHANGE_DARK_MODE,!0)}},D.TOGGLE_DARK_MODE,(function(n){var t=n.commit,e=n.state;t(d.CHANGE_DARK_MODE,!e.darkMode)}))},134:function(n,t,e){e(135),n.exports=e(136)},153:function(n,t,e){"use strict";e.r(t);t.default=function(n){n.userAgent=navigator.userAgent}},169:function(n,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return o})),e.d(t,"getters",(function(){return c})),e.d(t,"MutationType",(function(){return f})),e.d(t,"mutations",(function(){return d})),e.d(t,"actions",(function(){return E}));var r=e(15),o=(e(54),function(){return{description:"I'm defined as an initial state"}}),c={reversedName:function(n){return n.description.split("").reverse().join("")}},f={CHANGE_DESCRIPTION:"changeDescription"},d=Object(r.a)({},f.CHANGE_DESCRIPTION,(function(n,t){n.description=t})),E={nuxtServerInit:function(n,t){(0,n.commit)(f.CHANGE_DESCRIPTION,"I'm defined by server side")}}},97:function(n,t,e){"use strict";var r=function(text){return text.length>15?text.substring(0,15):text};t.a=function(n,t){t("truncate",r)}}},[[134,5,1,6]]]);