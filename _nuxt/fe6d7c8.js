(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(t,e,n){var map={"./ana.jpeg":233,"./ana.webp":234,"./lica-profile.jpeg":235,"./lica-profile.webp":236,"./lica.jpeg":237,"./lica.webp":238};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=232},233:function(t,e,n){t.exports=n.p+"img/ana.f042927.jpeg"},234:function(t,e,n){t.exports=n.p+"img/ana.ffd84b1.webp"},235:function(t,e,n){t.exports=n.p+"img/lica-profile.2ba38d5.jpeg"},236:function(t,e,n){t.exports=n.p+"img/lica-profile.fff19ce.webp"},237:function(t,e,n){t.exports=n.p+"img/lica.7b42ae4.jpeg"},238:function(t,e,n){t.exports=n.p+"img/lica.1baca8d.webp"},262:function(t,e,n){"use strict";n.r(e);var r=n(37),o=Object(r.defineComponent)({props:{name:{type:String,required:!0},image:{type:String,required:!0},location:{type:String,required:!0},soundcloud:{type:String,required:!1,default:void 0},facebook:{type:String,required:!1,default:void 0},instagram:{type:String,required:!1,default:void 0}},setup:function(){return{getArtistName:function(t){return t.toLowerCase()}}}}),c=n(19),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0"},[r("div",{staticClass:"aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4"},[r("img",{staticClass:"object-cover rounded-lg shadow-lg",attrs:{src:n(232)("./"+t.image),alt:"Press Photo of DJ Lica"}}),t._v(" "),r("div",{staticClass:"flex"},[r("nuxt-link",{staticClass:"items-center w-full px-8 py-4 mt-2 text-xl font-medium text-center text-white bg-gray-500 border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",attrs:{to:"/artists/"+t.getArtistName(t.name)}},[t._v("\n        More About "+t._s(t.name)+"\n      ")])],1)]),t._v(" "),r("div",{staticClass:"sm:col-span-2"},[r("div",{staticClass:"space-y-4"},[r("div",{staticClass:"space-y-1 font-medium leading-6"},[r("nuxt-link",{attrs:{to:"artists/"+t.getArtistName(t.name)}},[r("h3",{staticClass:"text-xl"},[t._v("\n            "+t._s(t.name)+"\n          ")])]),t._v(" "),r("p",{staticClass:"text-lg text-gray-400"},[t._v("\n          "+t._s(t.location)+"\n        ")])],1),t._v(" "),r("div",{staticClass:"text-lg"},[r("p",{staticClass:"text-gray-500"},[t._t("default")],2)]),t._v(" "),r("ul",{staticClass:"flex space-x-5"},[t.soundcloud?r("li",[r("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.soundcloud,target:"_blank"}},[r("span",{staticClass:"sr-only"},[t._v("Soundcloud")]),t._v(" "),r("svg",{staticClass:"w-5 h-5",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[r("path",{attrs:{d:"m20.25 11c-.267 0-.529.029-.782.082-.337-3.409-3.222-6.082-6.718-6.082-.414 0-.75.336-.75.75v12c0 .414.336.75.75.75h7.5c2.069 0 3.75-1.681 3.75-3.75 0-2.067-1.681-3.75-3.75-3.75z"}}),t._v(" "),r("path",{attrs:{d:"m9 7.25v10.5c0 .414.336.75.75.75s.75-.336.75-.75v-10.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"}}),t._v(" "),r("path",{attrs:{d:"m6 10.25v7.5c0 .414.336.75.75.75s.75-.336.75-.75v-7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"}}),t._v(" "),r("path",{attrs:{d:"m3 17.75c0 .414.336.75.75.75s.75-.336.75-.75v-7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"}}),t._v(" "),r("path",{attrs:{d:"m.75 18.5c.414 0 .75-.336.75-.75v-4.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.5c0 .414.336.75.75.75z"}})])])]):t._e(),t._v(" "),t.facebook?r("li",[r("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.facebook,target:"_blank"}},[r("span",{staticClass:"sr-only"},[t._v("Facebook")]),t._v(" "),r("svg",{staticClass:"w-5 h-5",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[r("path",{attrs:{d:"m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"}})])])]):t._e(),t._v(" "),t.instagram?r("li",[r("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.instagram,target:"_blank"}},[r("span",{staticClass:"sr-only"},[t._v("Instagram")]),t._v(" "),r("svg",{staticClass:"w-5 h-5",attrs:{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[r("path",{attrs:{d:"m301 256c0 24.851562-20.148438 45-45 45s-45-20.148438-45-45 20.148438-45 45-45 45 20.148438 45 45zm0 0"}}),t._v(" "),r("path",{attrs:{d:"m332 120h-152c-33.085938 0-60 26.914062-60 60v152c0 33.085938 26.914062 60 60 60h152c33.085938 0 60-26.914062 60-60v-152c0-33.085938-26.914062-60-60-60zm-76 211c-41.355469 0-75-33.644531-75-75s33.644531-75 75-75 75 33.644531 75 75-33.644531 75-75 75zm86-146c-8.285156 0-15-6.714844-15-15s6.714844-15 15-15 15 6.714844 15 15-6.714844 15-15 15zm0 0"}}),t._v(" "),r("path",{attrs:{d:"m377 0h-242c-74.4375 0-135 60.5625-135 135v242c0 74.4375 60.5625 135 135 135h242c74.4375 0 135-60.5625 135-135v-242c0-74.4375-60.5625-135-135-135zm45 332c0 49.625-40.375 90-90 90h-152c-49.625 0-90-40.375-90-90v-152c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"}})])])]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r=n(19),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("section",{staticClass:"pt-16",attrs:{id:"artists"}},[e("div",{staticClass:"px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24"},[e("div",{staticClass:"space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0"},[this._m(0),this._v(" "),e("div",{staticClass:"lg:col-span-2"},[e("ul",{staticClass:"space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"},[e("li",{staticClass:"sm:py-8"},[e("artist",{attrs:{name:"Lica",location:"London, United Kingdom",soundcloud:"https://soundcloud.com/ilonalica",facebook:"https://www.facebook.com/licaofficial/about/",instagram:"https://www.instagram.com/ilona.lica",image:"lica.jpeg"}},[this._v("\n                Estonian born, Ilona aka LICA has enjoyed a rapid ascent\n                through the Electronic music scene with her energetic and\n                mesmerising sound inspired by a spectrum of genres and\n                diversity of tempo. Touching the decks for the first time 10\n                years ago in her home country, LICA became well-known on the\n                Drum’n’Bass underground music scene orchestrating events and\n                projects.\n              ")])],1),this._v(" "),e("li",{staticClass:"sm:py-8"},[e("artist",{attrs:{name:"Ana",location:"Belo Horizonte, Brazil",instagram:"https://www.instagram.com/ilona.lica",soundcloud:"https://soundcloud.com/ana-jablonski",image:"ana.jpeg"}},[this._v("\n                Ana fell under the spell of house music at a young age\n                through her father, a music enthusiast.\n                The Brazilian artist started her\n                career in 2016 and captivated the music scene with her performance,\n                versatile sound and dazzling the club and fashion circuit in Brazil.\n                Ana worked as a model for ten years, but with time, the young artist\n                collected experience all over the world, getting to know different cultures,\n                impacting her identity. Those years contributed to her knowledge in music,\n                becoming a DJ with good references and a strong personality.\n              ")])],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"space-y-5 sm:space-y-4"},[e("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-center sm:text-4xl sm:text-left"},[this._v("\n            Artists\n          ")]),this._v(" "),e("p",{staticClass:"text-xl text-center text-gray-500 sm:text-left"},[this._v("\n            Meet our international community of artists that share the same\n            passion for electronic music production. We frequently add new\n            artists to our tribe and provide you with exclusive content for\n            the anaca tribe community.\n          ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Artist:n(262).default})}}]);