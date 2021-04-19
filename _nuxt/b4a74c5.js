(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{232:function(t,e,n){var map={"./ana.jpeg":233,"./ana.webp":234,"./lica-profile.jpeg":235,"./lica-profile.webp":236,"./lica.jpeg":237,"./lica.webp":238};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=232},233:function(t,e,n){t.exports=n.p+"img/ana.f042927.jpeg"},234:function(t,e,n){t.exports=n.p+"img/ana.ffd84b1.webp"},235:function(t,e,n){t.exports=n.p+"img/lica-profile.2ba38d5.jpeg"},236:function(t,e,n){t.exports=n.p+"img/lica-profile.fff19ce.webp"},237:function(t,e,n){t.exports=n.p+"img/lica.7b42ae4.jpeg"},238:function(t,e,n){t.exports=n.p+"img/lica.1baca8d.webp"},239:function(t,e,n){"use strict";n.r(e);var r=n(37),o=Object(r.defineComponent)({props:{artistName:{type:String,required:!0},image:{type:String,required:!0},location:{type:String,required:!0},aliases:{type:String,required:!0},images:{type:Array,required:!0},qanda:{type:Array,required:!0},soundcloud:{type:String,required:!1,default:void 0},facebook:{type:String,required:!1,default:void 0},instagram:{type:String,required:!1,default:void 0}}}),l=n(19),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-h-screen pt-16 bg-gray-100"},[r("main",{staticClass:"py-10"},[r("div",{staticClass:"max-w-3xl px-4 mx-auto sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"},[r("div",{staticClass:"flex items-center space-x-5"},[r("div",{staticClass:"flex-shrink-0"},[r("div",{staticClass:"relative"},[r("img",{staticClass:"object-cover object-center rounded-full w-28 h-28",attrs:{src:n(232)("./"+t.image),alt:"Photo of "+t.artistName}}),t._v(" "),r("span",{staticClass:"absolute inset-0 rounded-full shadow-inner",attrs:{"aria-hidden":"true"}})])]),t._v(" "),r("div",[r("h1",{staticClass:"text-2xl font-bold text-gray-900"},[t._v("\n            "+t._s(t.artistName)+"\n          ")]),t._v(" "),r("p",{staticClass:"text-sm font-medium text-gray-500"},[t._v("\n            "+t._s(t.location)+"\n          ")]),t._v(" "),r("ul",{staticClass:"flex mt-2 space-x-3"},[t.soundcloud?r("li",[r("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.soundcloud,target:"_blank"}},[r("span",{staticClass:"sr-only"},[t._v("Soundcloud")]),t._v(" "),r("svg",{staticClass:"w-5 h-5",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[r("path",{attrs:{d:"m20.25 11c-.267 0-.529.029-.782.082-.337-3.409-3.222-6.082-6.718-6.082-.414 0-.75.336-.75.75v12c0 .414.336.75.75.75h7.5c2.069 0 3.75-1.681 3.75-3.75 0-2.067-1.681-3.75-3.75-3.75z"}}),t._v(" "),r("path",{attrs:{d:"m9 7.25v10.5c0 .414.336.75.75.75s.75-.336.75-.75v-10.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"}}),t._v(" "),r("path",{attrs:{d:"m6 10.25v7.5c0 .414.336.75.75.75s.75-.336.75-.75v-7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"}}),t._v(" "),r("path",{attrs:{d:"m3 17.75c0 .414.336.75.75.75s.75-.336.75-.75v-7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"}}),t._v(" "),r("path",{attrs:{d:"m.75 18.5c.414 0 .75-.336.75-.75v-4.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.5c0 .414.336.75.75.75z"}})])])]):t._e(),t._v(" "),t.facebook?r("li",[r("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.facebook,target:"_blank"}},[r("span",{staticClass:"sr-only"},[t._v("Facebook")]),t._v(" "),r("svg",{staticClass:"w-5 h-5",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[r("path",{attrs:{d:"m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"}})])])]):t._e(),t._v(" "),t.instagram?r("li",[r("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:t.instagram,target:"_blank"}},[r("span",{staticClass:"sr-only"},[t._v("Instagram")]),t._v(" "),r("svg",{staticClass:"w-5 h-5",attrs:{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[r("path",{attrs:{d:"m301 256c0 24.851562-20.148438 45-45 45s-45-20.148438-45-45 20.148438-45 45-45 45 20.148438 45 45zm0 0"}}),t._v(" "),r("path",{attrs:{d:"m332 120h-152c-33.085938 0-60 26.914062-60 60v152c0 33.085938 26.914062 60 60 60h152c33.085938 0 60-26.914062 60-60v-152c0-33.085938-26.914062-60-60-60zm-76 211c-41.355469 0-75-33.644531-75-75s33.644531-75 75-75 75 33.644531 75 75-33.644531 75-75 75zm86-146c-8.285156 0-15-6.714844-15-15s6.714844-15 15-15 15 6.714844 15 15-6.714844 15-15 15zm0 0"}}),t._v(" "),r("path",{attrs:{d:"m377 0h-242c-74.4375 0-135 60.5625-135 135v242c0 74.4375 60.5625 135 135 135h242c74.4375 0 135-60.5625 135-135v-242c0-74.4375-60.5625-135-135-135zm45 332c0 49.625-40.375 90-90 90h-152c-49.625 0-90-40.375-90-90v-152c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"}})])])]):t._e()])])])]),t._v(" "),r("div",{staticClass:"grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"},[r("div",{staticClass:"space-y-6 lg:col-start-1 lg:col-span-2"},[r("section",{attrs:{"aria-labelledby":"applicant-information-title"}},[r("div",{staticClass:"bg-white shadow sm:rounded-lg"},[r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h2",{staticClass:"text-lg font-medium leading-6 text-gray-900",attrs:{id:"applicant-information-title"}},[t._v("\n                Biography\n              ")]),t._v(" "),r("p",{staticClass:"max-w-2xl mt-1 text-sm text-gray-500"},[t._t("default")],2)]),t._v(" "),t._e()])]),t._v(" "),r("section",{attrs:{"aria-labelledby":"notes-title"}},[r("div",{staticClass:"bg-white shadow sm:rounded-lg sm:overflow-hidden"},[r("div",{staticClass:"divide-y divide-gray-200"},[r("div",{staticClass:"px-4 py-5 sm:px-6"},[r("h2",{staticClass:"text-lg font-medium text-gray-900",attrs:{id:"notes-title"}},[t._v("\n                  About "+t._s(t.artistName)+"\n                ")])]),t._v(" "),r("div",{staticClass:"px-4 py-6 sm:px-6"},[r("ul",{staticClass:"space-y-8"},t._l(t.qanda,(function(q,i){return r("li",{key:i},[r("div",{staticClass:"flex space-x-3"},[r("div",[r("div",{staticClass:"text-base text-gray-900"},[t._v("\n                          "+t._s(q.question)+"\n                        ")]),t._v(" "),r("div",{staticClass:"mt-1 text-sm text-gray-500"},[r("p",[t._v("\n                            "+t._s(q.answer)+"\n                          ")])])])])])})),0)])])])])]),t._v(" "),r("section",{staticClass:"lg:col-start-3 lg:col-span-1",attrs:{"aria-labelledby":"timeline-title"}},[r("div",{staticClass:"px-4 py-5 bg-white shadow sm:rounded-lg sm:px-6"},[r("ul",{staticClass:"space-y-6"},t._l(t.images,(function(img){return r("li",{key:img},[r("img",{staticClass:"object-cover rounded-lg shadow-lg",attrs:{src:n(232)("./"+img),alt:"Photo of "+t.artistName}})])})),0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sm:col-span-1"},[e("dt",{staticClass:"text-sm font-medium text-gray-500"},[this._v("\n                    Booking\n                  ")]),this._v(" "),e("dd",{staticClass:"mt-1 text-sm text-gray-900"},[this._v("\n                    booking@lica.com\n                  ")])])}],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var r=n(19),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("artistdetails",{attrs:{"artist-name":"Ana",image:"ana.jpeg",location:"Belo Horizonte, Brazil",aliases:"Ana",images:["ana.jpeg"],qanda:[{question:"When and why did you enter the music industry?",answer:"I’ve always felt that I had something to say as an artist, but through music, was where I found my voice. I entered the music industry in 2016! But my first contact with music as an artist happened when I was 12. I was invited in school to be in a band. There, I’ve learn the basics of singing. In 2016 I had my first contact with DJ equipment, and most of what I know was self taught."},{question:"Who inspires you and why?",answer:"That is a tough one! I guess in life, my mom. Her strength and determination made a huge difference in my life, specially in my career. Inside the music industry we have lots of talented artist, but for me, the ones who carefully show what they have to say, or do their best to create sensations and emotions through their performance, are the ones who truly inspire me! I had also a mentor here in Brazil, his brilliant career and faith in my work also impacted my journey and kept me going!"},{question:"The number of female DJ’s are growing exponentially. What do you think is changing in your career because of female inclusion?",answer:"Opportunities. For the fist time ever in my career, my music is more important then my gender."},{question:"What goes on your mind when you are preparing a set for a crowd? Is there a process you go through?",answer:"The first thing is pure excitement! I start my process by understanding where, when and with who am I playing with. Then I start organizing my music and I always bring a little bit of everything, music that’s already a part of my identity as an artist, the new ones and the classics. When I’m on stage, I decide what I wanna say, doing it though my emotions and performance!"},{question:"What advice would you give to aspiring females arriving now in the industry?",answer:"Sometimes as a female in the industry is VERY hard to understand that you need to be strong, that you need to be truthful to what you believe and that you need to be aware of where do you stand as an artist. So don’t give up, is what I tell myself everyday."}],instagram:"https://www.instagram.com/anajablonski/",soundcloud:"https://soundcloud.com/ana-jablonski"}},[e("strong",[this._v("Elegance.")]),this._v(" The word that describes the melody within Ana\n  Jablonski’s sound. "),e("br"),e("br"),this._v("\n  She fell under the spell of house music at a young age\n  through her father, a music enthusiast.\n  The Brazilian artist started her\n  career in 2016 and captivated the music scene with her performance,\n  versatile sound and dazzling the club and fashion circuit in Brazil.\n  "),e("br"),e("br"),this._v("\n  Ana worked as a model for ten years, but with time, the young artist\n  collected experience all over the world, getting to know different cultures,\n  impacting her identity. Those years contributed to her knowledge in music,\n  becoming a DJ with good references and a strong personality.\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Artistdetails:n(239).default})}}]);