(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(e,t,n){"use strict";n.r(t);n(57),n(19),n(22),n(43),n(42);var r=n(14),o=(n(20),n(21),n(11),n(1)),c=(n(117),n(54)),d=n(130);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l=o.default.extend({fetchOnServer:!1,middleware:"user-agent",asyncData:function(e){return{asyncMessage:"I'm defined on asyncData()",userAgent:e.userAgent}},data:function(){return{message:"I'm defined on data()",fetchedTodos:[],asyncMessage:"I will be overwritten by asyncData",userAgent:"I will be overwritten by asyncData"}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})).then((function(data){e.fetchedTodos=data}))})),head:function(){return{title:"Options API Demo",meta:[{name:"message",content:this.computedMessage}]}},computed:v(v({computedMessage:function(){return this.message.replace("data()","computed()")}},Object(c.c)({descriptionOnStore:function(e){return e.description}})),Object(c.c)(d.namespace,{isDarkMode:function(e){return e.darkMode}})),methods:v({},Object(c.b)(d.namespace,{toggleDarkMode:d.actionType.TOGGLE_DARK_MODE}))}),f=n(39),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("h1",[e._v("With Options API")]),e._v(" "),n("h2",[e._v("data ()")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.message)+"\n  ")]),e._v(" "),n("h2",[e._v("computed ()")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.computedMessage)+"\n  ")]),e._v(" "),n("h2",[e._v("asyncData ()")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.asyncMessage)+"\n  ")]),e._v(" "),n("h2",[e._v("fetch ()")]),e._v(" "),e.$fetchState.pending?n("p",[e._v("\n    Fetching from frontend...\n  ")]):n("ul",e._l(e.fetchedTodos.slice(0,5),(function(t){return n("li",{key:t.id},[e._v("\n      "+e._s(t.completed?"✅":"⬜")+" "+e._s(t.id)+": "+e._s(t.title)+"\n    ")])})),0),e._v(" "),n("h2",[e._v("Vuex Store")]),e._v(" "),n("ul",[n("li",[e._v("On root store: "+e._s(e.descriptionOnStore))]),e._v(" "),n("li",[e._v("On setting store (namespaced): dark mode is "),n("strong",[e._v(e._s(e.isDarkMode?"enabled":"disabled"))])]),e._v(" "),n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.toggleDarkMode(t)}}},[e._v("\n      Toggle dark mode\n    ")])]),e._v(" "),n("h2",[e._v("Nuxt Middleware")]),e._v(" "),n("p",[e._v(e._s(e.userAgent))]),e._v(" "),n("h2",[e._v("Nuxt Plugin")]),e._v(" "),n("p",[e._v(e._s(e.$truncate(e.userAgent)))])])}),[],!1,null,null,null);t.default=component.exports}}]);