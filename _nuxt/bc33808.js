(window.webpackJsonp=window.webpackJsonp||[]).push([[39,14],{421:function(t,e,n){t.exports=n.p+"img/32629ce.avif"},422:function(t,e,n){t.exports=n.p+"img/632461b.jpg"},423:function(t,e,n){t.exports=n.p+"img/0c1bd7f.webp"},424:function(t,e,n){t.exports=n.p+"img/3c85787.avif"},425:function(t,e,n){t.exports=n.p+"img/5514877.jpg"},426:function(t,e,n){t.exports=n.p+"img/778f741.webp"},427:function(t,e,n){t.exports=n.p+"img/6575c14.avif"},428:function(t,e,n){t.exports=n.p+"img/d7edc2f.jpg"},429:function(t,e,n){t.exports=n.p+"img/2fe72f7.webp"},430:function(t,e,n){t.exports=n.p+"img/710d6cf.png"},461:function(t,e,n){var content=n(675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("3d024aca",content,!0,{sourceMap:!1})},674:function(t,e,n){"use strict";n(461)},675:function(t,e,n){var r=n(39)(!1);r.push([t.i,".layer[data-v-404eac9a]{position:absolute;top:0;overflow:hidden}.layer[data-v-404eac9a],.layer__zone[data-v-404eac9a]{height:100%;width:100%}.layer-container[data-v-404eac9a]{position:sticky;top:12.5%;aspect-ratio:.5587761675}@media screen and (min-width:768px){.layer-container[data-v-404eac9a]{aspect-ratio:none;position:relative;height:100%;top:0}}.ephemeris[data-v-404eac9a]{display:none}@media screen and (min-width:768px){.ephemeris[data-v-404eac9a]{display:block;position:absolute;top:95%;left:50%;max-width:none;width:350%;transform:translate(-35%,-50%)}}@media screen and (min-width:1200px){.ephemeris[data-v-404eac9a]{top:102%;left:50%;max-width:none;width:282%;transform:translate(-50%,-50%)}}.defi[data-v-404eac9a]{position:relative;height:auto;width:100%}@media screen and (min-width:768px){.defi[data-v-404eac9a]{transform:translateY(-25%)}}@media screen and (min-width:1200px){.defi[data-v-404eac9a]{transform:none}}",""]),t.exports=r},702:function(t,e,n){var content=n(866);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("4089ff16",content,!0,{sourceMap:!1})},714:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layer defi-2"},[r("div",{staticClass:"layer__zone"},[r("picture",[r("source",{attrs:{srcset:n(424),type:"image/avif"}}),t._v(" "),r("source",{attrs:{srcset:n(426),type:"image/webp"}}),t._v(" "),r("img",{staticClass:"defi z-1",attrs:{src:n(425),alt:""}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layer defi-1"},[r("div",{staticClass:"layer__zone"},[r("picture",[r("source",{attrs:{srcset:n(427),type:"image/avif"}}),t._v(" "),r("source",{attrs:{srcset:n(429),type:"image/webp"}}),t._v(" "),r("img",{staticClass:"defi z-1",attrs:{src:n(428),alt:""}})])])])}],o=(n(28),n(416)),c=n(415),d={beforeDestroy:function(){window.removeEventListener("resize",this.sizeImages),c.ScrollTrigger.getAll().forEach((function(t){return t.kill()}))},mounted:function(){var t=this;window.addEventListener("resize",this.sizeImages),o.gsap.registerPlugin(c.ScrollTrigger),c.ScrollTrigger.saveStyles(".defi-1, .defi-2");var e=o.gsap.timeline();e.to(".defi-1",{height:"0%"}),e.to(".defi-2",{height:"0%"}),this.$nextTick((function(){var img=new Image;img.src=t.$refs.defi.src,img.onload=function(){return t.sizeImages()},c.ScrollTrigger.matchMedia({"(min-width: 768px)":function(){t.scrollTrigger(e,".js-section-defi")},"(max-width: 767px)":function(){t.scrollTrigger(e,".js-graphics-container")}})}))},methods:{sizeImages:function(){var t=this.$refs.container.getBoundingClientRect().height,e=this.$refs.defi.getBoundingClientRect().height;o.gsap.set(".defi",{y:t-e})},scrollTrigger:function(t,e){c.ScrollTrigger.create({animation:t,trigger:e,scrub:!0,start:"33.333% bottom",end:"66.666% top"})}}},l=(n(674),n(14)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"defiCanvas",staticClass:"canvas"},[r("img",{staticClass:"layer ephemeris",attrs:{src:n(430),alt:"Gold Ephemeris",loading:"lazy"}}),t._v(" "),r("div",{ref:"container",staticClass:"layer-container js-defi-container"},[r("div",{staticClass:"layer defi-3"},[r("div",{staticClass:"layer__zone"},[r("picture",[r("source",{attrs:{srcset:n(421),type:"image/avif"}}),t._v(" "),r("source",{attrs:{srcset:n(423),type:"image/webp"}}),t._v(" "),r("img",{ref:"defi",staticClass:"defi z-1",attrs:{src:n(422),alt:""}})])])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])}),r,!1,null,"404eac9a",null);e.default=component.exports},865:function(t,e,n){"use strict";n(702)},866:function(t,e,n){var r=n(39)(!1);r.push([t.i,"@media screen and (min-width:768px){.rate-title>span[data-v-f45e4a02]{display:inline-block}}@media screen and (min-width:768px){.rate-text[data-v-f45e4a02],.rate-title>span[data-v-f45e4a02]{opacity:0;transform:translateY(80px)}}@media screen and (min-width:768px){.tm-section[data-v-f45e4a02]{height:300vh}}.graphics-container[data-v-f45e4a02],.section-defi[data-v-f45e4a02],.stats[data-v-f45e4a02],.text[data-v-f45e4a02]{position:relative}.section-defi[data-v-f45e4a02]{top:4rem}@media screen and (min-width:768px){.section-defi[data-v-f45e4a02]{position:sticky;margin-bottom:var(--spacing-10)}}@media screen and (min-width:1200px){.section-defi[data-v-f45e4a02]{margin-bottom:var(--spacing-11)}}.graphics-container[data-v-f45e4a02]{margin-left:auto;margin-right:auto;width:100%}@media screen and (min-width:768px){.graphics-container[data-v-f45e4a02]{height:auto;position:absolute;left:var(--wrap-gap);top:1rem;bottom:-1rem;width:100%;max-width:calc(50% - var(--grid-gap-x)/2 - var(--wrap-gap))}}@media screen and (min-width:1200px){.graphics-container[data-v-f45e4a02]{left:50%;top:1.5rem;bottom:-4.5rem;width:100%;max-width:21.6875rem;transform:translateX(-50%)}}.column-title[data-v-f45e4a02]{grid-column:1/-1}@media screen and (min-width:768px){.column-title[data-v-f45e4a02]{grid-column:5/span 4;margin-top:var(--spacing-9)}}@media screen and (min-width:1200px){.column-title[data-v-f45e4a02]{grid-column:2/span 10;margin-top:0}}.column-info[data-v-f45e4a02]{grid-column:1/-1;margin-bottom:var(--spacing-9)}@media screen and (min-width:768px){.column-info[data-v-f45e4a02]{grid-column:5/span 4;margin-bottom:var(--spacing-8)}}@media screen and (min-width:1200px){.column-info[data-v-f45e4a02]{grid-column:9/span 3;margin-top:var(--spacing-9);margin-bottom:0}}.column-stats[data-v-f45e4a02]{grid-column:1/-1}@media screen and (min-width:768px){.column-stats[data-v-f45e4a02]{grid-column:5/span 4}}@media screen and (min-width:1200px){.column-stats[data-v-f45e4a02]{grid-column:2/span 4;margin-top:calc(var(--spacing-7)*-1)}}.text[data-v-f45e4a02]{max-width:23.375rem}.stats-item[data-v-f45e4a02]{margin-bottom:var(--spacing-9)}@media screen and (min-width:768px){.stats-item[data-v-f45e4a02]{margin-bottom:var(--spacing-8);opacity:0;transform:translateY(80px)}}@media screen and (min-width:1200px){.stats-item[data-v-f45e4a02]{margin-bottom:var(--spacing-7)}}@media screen and (min-width:1200px){.stats-item[data-v-f45e4a02]:last-child{margin-bottom:0}}@media screen and (max-width:575.98px){.section-rates[data-v-f45e4a02]{position:unset}}@media screen and (min-width:576px){.section-rates[data-v-f45e4a02]{position:unset}}@media screen and (min-width:768px){.section-rates[data-v-f45e4a02]{position:relative}}",""]),t.exports=r},904:function(t,e,n){"use strict";n.r(e);n(28);var r=n(416),o=n(415),c={data:function(){return{items:[{overline:"Average transaction fee",num:"$0.08",info:"+0.3% swap fee"},{overline:"Average swap speed",num:"00:07",info:"seconds"}]}},beforeDestroy:function(){o.ScrollTrigger.getAll().forEach((function(t){return t.kill()}))},mounted:function(){r.gsap.registerPlugin(o.ScrollTrigger),o.ScrollTrigger.saveStyles(".js-rate-title > span, .js-rate-text,.js-rate-stat "),this.$nextTick((function(){o.ScrollTrigger.matchMedia({"(min-width: 768px)":function(){r.gsap.to(".js-rate-title > span",{y:0,opacity:1,duration:1.2,stagger:.1,ease:"ease2.out",scrollTrigger:{trigger:".js-section-defi",start:"25% bottom"}}),r.gsap.to(".js-rate-text",{opacity:1,y:0,duration:1.2,ease:"ease2.out",scrollTrigger:{trigger:".js-section-defi",start:"43% bottom"}}),r.gsap.to(".js-rate-stat",{y:0,opacity:1,stagger:.2,duration:1.2,ease:"ease4.out",scrollTrigger:{trigger:".js-section-defi",start:"75% bottom"}})}})}))}},d=(n(865),n(14)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tm-section js-section-defi"},[n("div",{staticClass:"tm-wrapper tm-container section-defi"},[n("div",{staticClass:"tm-grid-base"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"column-stats"},[n("div",{staticClass:"stats z-2"},t._l(t.items,(function(e){return n("div",{key:e.overline,staticClass:"stats-item js-rate-stat"},[n("div",{staticClass:"tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted"},[t._v("\n              "+t._s(e.overline)+"\n            ")]),t._v(" "),n("div",{staticClass:"mt-1 tm-rf2 tm-bold tm-lh-title tm-title tm-serif"},[t._v("\n              "+t._s(e.num)+"\n            ")]),t._v(" "),n("div",{staticClass:"tm-rf0 tm-bold tm-lh-title tm-overline tm-title"},[t._v("\n              "+t._s(e.info)+"\n            ")])])})),0)])]),t._v(" "),n("graphics-defi",{staticClass:"graphics-container js-graphics-container"})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column-title"},[n("div",{staticClass:"text z-2"},[n("h2",{staticClass:"\n              tm-title tm-rf7 tm-rf6-m-up tm-bold tm-lh-title tm-serif\n              rate-title\n              js-rate-title\n            "},[n("span",[t._v("DeFi")]),n("br"),n("span",[t._v("for")]),t._v(" "),n("span",[t._v("all")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column-info z-2"},[n("p",{staticClass:"\n            mt-6\n            tm-rf0 tm-lh-copy tm-text tm-measure-narrow\n            rate-text\n            js-rate-text\n          "},[t._v("\n          Emeris beta allows you to swap coins with substantially lower fees\n          than typical DeFi exchanges by connecting you to the best\n          cross-chain DeFi protocols, starting with Gravity DEX.\n        ")])])}],!1,null,"f45e4a02",null);e.default=component.exports;installComponents(component,{GraphicsDefi:n(714).default})}}]);