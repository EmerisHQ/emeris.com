(window.webpackJsonp=window.webpackJsonp||[]).push([[30,24,42,47],{403:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("c3b6999a",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";n.r(e);var o={props:{size:{type:String,default:"m"},variant:{type:String,default:"contained"},backgroundColor:{type:String,default:null},lightBackgroundColor:{type:String,default:null},borderColor:{type:String,default:null},lightBorderColor:{type:String,default:null},color:{type:String,default:null},lightColor:{type:String,default:null},glow:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:null},toLink:{type:String,default:null},to:{type:String,default:null},href:{type:String,default:null},target:{type:String,default:null},rel:{type:String,default:null},classes:{type:String,default:""}},computed:{_classes:function(){var t=this.classes;switch(this.size){case"s":t+=" tm-rf-1 tm-rf0-l-up";break;case"l":t+=" tm-rf1";break;default:t+=" tm-rf0"}return t},_styles:function(){var t={},e="light"===this.$nuxt.$colorMode.value,n=e?this.lightBackgroundColor:this.backgroundColor,o=e?this.lightBorderColor:this.borderColor,r=e?this.lightColor:this.color;return n&&(t["--bg-color"]=n),o&&(t["--border-color"]=o),r&&(t["--color"]=r),t}}},r=(n(407),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"internal"===t.toLink?n("nuxt-link",t._b({class:["tm-button","tm-button__size__"+t.size,"tm-button__variant__"+t.variant,"tm-lh-title","tm-medium",t.glow&&"tm-button__glow",t._classes],style:t._styles,attrs:{to:t.to}},"nuxt-link",{disabled:t.disabled},!1),[n("span",{staticClass:"tm-button__content"},[t._t("default")],2)]):"external"===t.toLink?n("a",t._b({class:["tm-button","tm-button__size__"+t.size,"tm-button__variant__"+t.variant,"tm-lh-title","tm-medium",t.glow&&"tm-button__glow","tm-button__external",t._classes],style:t._styles,attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},"a",{target:t.target,href:t.href,rel:t.rel,disabled:t.disabled},!1),[n("span",{staticClass:"tm-button__content"},[t._t("default")],2)]):t.disabled?n("button",t._b({class:["tm-button","tm-button__size__"+t.size,"tm-button__variant__"+t.variant,"tm-lh-title","tm-medium",t.glow&&"tm-button__glow",t._classes],style:t._styles,attrs:{"aria-disabled":"true"}},"button",{type:t.type,target:t.target,href:t.href,rel:t.rel,disabled:t.disabled},!1),[n("span",{staticClass:"tm-button__content"},[t._t("default")],2)]):n("button",t._b({class:["tm-button","tm-button__size__"+t.size,"tm-button__variant__"+t.variant,"tm-lh-title","tm-medium",t.glow&&"tm-button__glow",t._classes],style:t._styles,attrs:{disabled:t.disabled}},"button",{type:t.type,target:t.target,href:t.href,rel:t.rel,disabled:t.disabled},!1),[n("span",{staticClass:"tm-button__content"},[t._t("default")],2)])}),[],!1,null,"3e2a912b",null);e.default=component.exports},407:function(t,e,n){"use strict";n(403)},408:function(t,e,n){var o=n(39)(!1);o.push([t.i,'.tm-button[data-v-3e2a912b]{--bg-color:var(--title);--border-color:var(--title);--color:var(--bg);position:relative;display:inline-flex;align-items:center;justify-content:center;color:var(--color);border-radius:.47em;transition:all .25s cubic-bezier(.165,.84,.44,1)}.tm-button[data-v-3e2a912b]:active{opacity:.88;transition-duration:.05s}.tm-button__glow[data-v-3e2a912b]:before{content:"";position:absolute;border-radius:inherit;transform:translateZ(0);z-index:0;opacity:.4;transition:background-position .4s cubic-bezier(.165,.84,.44,1),opacity .5s cubic-bezier(.165,.84,.44,1)}.tm-button__glow[data-v-3e2a912b]:focus,.tm-button__glow[data-v-3e2a912b]:focus:before,.tm-button__glow[data-v-3e2a912b]:hover,.tm-button__glow[data-v-3e2a912b]:hover:before{background-position:100% 100%}.tm-button__glow[data-v-3e2a912b]:focus:before,.tm-button__glow[data-v-3e2a912b]:hover:before{transition-duration:.2s;opacity:.5}.tm-button__variant__text[data-v-3e2a912b]{--color:var(--link)}.tm-button__variant__text[data-v-3e2a912b]:focus,.tm-button__variant__text[data-v-3e2a912b]:hover{opacity:.8}.tm-button__variant__text[data-v-3e2a912b]:active{opacity:.6}.tm-button__variant__outlined[data-v-3e2a912b]{--border-color:transparent;--color:var(--black);background:var(--bg);transition:none}.tm-button__variant__outlined.tm-button__glow[data-v-3e2a912b]{box-shadow:3px 9px 24px rgba(0,0,0,.07)}@media screen and (min-width:768px){.tm-button__variant__outlined.tm-button__glow[data-v-3e2a912b]{box-shadow:3px 9px 24px rgba(0,0,0,.32)}}.tm-button__variant__outlined.tm-button__glow[data-v-3e2a912b]:before,.tm-button__variant__outlined[data-v-3e2a912b]:after{border:.0625rem solid var(--border-color)}.tm-button__variant__outlined[data-v-3e2a912b]:after{content:"";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;border:0;border-radius:inherit;margin:-.0625rem;background:linear-gradient(280.46deg,#fff0ca 12.71%,#d3ad5f 33.34%,#ffecc4 41.61%,#997736 59.2%,#fff2c0 77.69%,#cea851 97.39%);transition:opacity .25s cubic-bezier(.165,.84,.44,1)}.light-mode .tm-button__variant__outlined[data-v-3e2a912b]:after{opacity:1}.tm-button__variant__outlined.tm-button__glow[data-v-3e2a912b]:before{top:-.0625em;left:-.0625em;right:-.0625em;bottom:-.0625em;filter:blur(.4rem)}.tm-button__variant__outlined .tm-button__content[data-v-3e2a912b],.tm-button__variant__outlined .tm-button__content[data-v-3e2a912b] span{display:block;color:var(--color);background:var(--title-gradient);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-fill-color:transparent}.tm-button__variant__outlined[data-v-3e2a912b]:active:after,.tm-button__variant__outlined[data-v-3e2a912b]:hover:after{background:radial-gradient(144.8% 78% at 90.48%,at 100%,#fffd38 0,rgba(158,255,185,0) 100%),linear-gradient(153.31deg,#64dafb 5.41%,#30ffdf 30.23%,#b0ff94 54.73%);background:radial-gradient(144.8% 78% at 90.48% 100%,#fffd38 25.95%,rgba(158,255,185,0) 100%),linear-gradient(153.31deg,#64dafb 5.41%,#30ffdf 30.23%,#b0ff94 54.73%)}.tm-button__variant__outlined[data-v-3e2a912b]:focus:after{background:linear-gradient(102.36deg,#64dbfc -2.26%,#30ffdf 34.48%,#fffe39 92.77%)}.tm-button__variant__outlined[data-v-3e2a912b]:active,.tm-button__variant__outlined[data-v-3e2a912b]:focus,.tm-button__variant__outlined[data-v-3e2a912b]:hover{background:transparent}.tm-button__variant__outlined[data-v-3e2a912b]:active:after,.tm-button__variant__outlined[data-v-3e2a912b]:focus:after,.tm-button__variant__outlined[data-v-3e2a912b]:hover:after{opacity:1}.tm-button__variant__outlined:active .tm-button__content[data-v-3e2a912b],.tm-button__variant__outlined:active .tm-button__content[data-v-3e2a912b] span,.tm-button__variant__outlined:focus .tm-button__content[data-v-3e2a912b],.tm-button__variant__outlined:focus .tm-button__content[data-v-3e2a912b] span,.tm-button__variant__outlined:hover .tm-button__content[data-v-3e2a912b],.tm-button__variant__outlined:hover .tm-button__content[data-v-3e2a912b] span{color:#000;color:initial;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.tm-button__variant__outlined[disabled] .tm-button__content[data-v-3e2a912b]{opacity:1!important}.tm-button__variant__outlined[disabled][data-v-3e2a912b]:after{background:hsla(0,0%,100%,.44)}.tm-button__variant__gradient[data-v-3e2a912b]{--border-color:transparent;--color:var(--black);position:relative;transition:none}.tm-button__variant__gradient.tm-button__glow[data-v-3e2a912b]:before,.tm-button__variant__gradient[data-v-3e2a912b]:after{border:.0625rem solid var(--border-color)}.tm-button__variant__gradient[data-v-3e2a912b]:after{content:"";position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;border:0;border-radius:inherit;margin:-.0625rem;background:linear-gradient(102.36deg,#64dbfc -2.26%,#30ffdf 34.48%,#fffe39 92.77%);transition:opacity .25s cubic-bezier(.165,.84,.44,1)}.light-mode .tm-button__variant__gradient[data-v-3e2a912b]:after{opacity:1}.tm-button__variant__gradient.tm-button__glow[data-v-3e2a912b]:before{top:-.0625em;left:-.0625em;right:-.0625em;bottom:-.0625em;filter:blur(.4rem)}.tm-button__variant__gradient .tm-button__content[data-v-3e2a912b]{display:block;color:var(--color)}.tm-button__variant__gradient[data-v-3e2a912b]:active:after,.tm-button__variant__gradient[data-v-3e2a912b]:hover:after{background:radial-gradient(144.8% 78% at 90.48%,at 100%,#fffd38 0,rgba(158,255,185,0) 100%),linear-gradient(153.31deg,#64dafb 5.41%,#30ffdf 30.23%,#b0ff94 54.73%);background:radial-gradient(144.8% 78% at 90.48% 100%,#fffd38 25.95%,rgba(158,255,185,0) 100%),linear-gradient(153.31deg,#64dafb 5.41%,#30ffdf 30.23%,#b0ff94 54.73%)}.tm-button__variant__gradient[data-v-3e2a912b]:focus:after{background:linear-gradient(102.36deg,#64dbfc -2.26%,#30ffdf 34.48%,#fffe39 92.77%)}.tm-button__variant__gradient[data-v-3e2a912b]:active,.tm-button__variant__gradient[data-v-3e2a912b]:focus,.tm-button__variant__gradient[data-v-3e2a912b]:hover{background:transparent}.tm-button__variant__gradient[data-v-3e2a912b]:active:after,.tm-button__variant__gradient[data-v-3e2a912b]:focus:after,.tm-button__variant__gradient[data-v-3e2a912b]:hover:after{opacity:1}.tm-button__variant__gradient:active .tm-button__content[data-v-3e2a912b],.tm-button__variant__gradient:active .tm-button__content[data-v-3e2a912b] span,.tm-button__variant__gradient:focus .tm-button__content[data-v-3e2a912b],.tm-button__variant__gradient:focus .tm-button__content[data-v-3e2a912b] span,.tm-button__variant__gradient:hover .tm-button__content[data-v-3e2a912b],.tm-button__variant__gradient:hover .tm-button__content[data-v-3e2a912b] span{color:#000;color:initial;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.tm-button__variant__contained[data-v-3e2a912b]{background:var(--bg-color);background-size:200% auto;box-shadow:var(--elevation-4);cursor:pointer;position:relative}.tm-button__variant__contained[data-v-3e2a912b]:after{content:"";box-shadow:var(--elevation-16-ambient);border-radius:inherit;opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:0}.tm-button__variant__contained[data-v-3e2a912b]:focus:after,.tm-button__variant__contained[data-v-3e2a912b]:hover:after{opacity:.6;transition-duration:.2s}.tm-button__variant__contained[data-v-3e2a912b]:active:after{opacity:.4;transition-duration:.05s}.tm-button__variant__contained[data-v-3e2a912b]:before{top:.125em;left:1em;right:1em;bottom:0;background:inherit;filter:blur(1.25rem) brightness(1.5)}.tm-button__variant__contained[data-v-3e2a912b]:after{transition:opacity .25s cubic-bezier(.165,.84,.44,1)}.tm-button__variant__contained[data-v-3e2a912b]:active:after,.tm-button__variant__contained[data-v-3e2a912b]:hover:after{opacity:1;background:radial-gradient(144.8% 78% at 90.48%,at 100%,#fffd38 0,rgba(158,255,185,0) 100%),linear-gradient(153.31deg,#64dafb 5.41%,#30ffdf 30.23%,#b0ff94 54.73%);background:radial-gradient(144.8% 78% at 90.48% 100%,#fffd38 25.95%,rgba(158,255,185,0) 100%),linear-gradient(153.31deg,#64dafb 5.41%,#30ffdf 30.23%,#b0ff94 54.73%)}.tm-button[disabled][data-v-3e2a912b]{pointer-events:none}.tm-button[disabled] .tm-button__content[data-v-3e2a912b]{opacity:.44}.tm-button__size__s[data-v-3e2a912b]{padding-top:var(--spacing-3);padding-bottom:var(--spacing-3)}.tm-button__size__s.tm-button__variant__contained[data-v-3e2a912b],.tm-button__size__s.tm-button__variant__gradient[data-v-3e2a912b],.tm-button__size__s.tm-button__variant__outlined[data-v-3e2a912b]{padding-left:var(--spacing-5);padding-right:var(--spacing-5)}.tm-button__size__m[data-v-3e2a912b]{height:3rem;padding-top:var(--spacing-4);padding-bottom:var(--spacing-4)}.tm-button__size__m.tm-button__variant__contained[data-v-3e2a912b],.tm-button__size__m.tm-button__variant__gradient[data-v-3e2a912b],.tm-button__size__m.tm-button__variant__outlined[data-v-3e2a912b]{padding-left:var(--spacing-7);padding-right:var(--spacing-7)}.tm-button__size__l[data-v-3e2a912b]{padding-top:var(--spacing-5);padding-bottom:var(--spacing-5)}.tm-button__size__l.tm-button__variant__contained[data-v-3e2a912b],.tm-button__size__l.tm-button__variant__gradient[data-v-3e2a912b],.tm-button__size__l.tm-button__variant__outlined[data-v-3e2a912b]{padding-left:var(--spacing-8);padding-right:var(--spacing-8)}.tm-button__content[data-v-3e2a912b]{position:relative;z-index:1;white-space:nowrap;display:grid;grid-auto-flow:column;align-items:center}.tm-button[data-v-3e2a912b] .icon__left,.tm-button[data-v-3e2a912b] .icon__right{-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0);display:inline-block;transition:transform .25s cubic-bezier(.165,.84,.44,1)}.tm-button[data-v-3e2a912b] .icon__left{margin-right:.5em}.tm-button[data-v-3e2a912b] .icon__right{margin-left:.5em}.tm-button[data-v-3e2a912b] .icon__hover{display:none}.tm-button[data-v-3e2a912b]:focus .icon__right,.tm-button[data-v-3e2a912b]:hover .icon__right{transform:translateX(10%)}.tm-button[data-v-3e2a912b]:focus .icon__right._external,.tm-button[data-v-3e2a912b]:hover .icon__right._external{transform:translate(10%,-10%)}.tm-button[data-v-3e2a912b]:focus .icon__left,.tm-button[data-v-3e2a912b]:hover .icon__left{transform:translateX(-10%)}.tm-button[data-v-3e2a912b]:focus .icon__down,.tm-button[data-v-3e2a912b]:hover .icon__down{transform:translateY(10%)}.tm-button__external.tm-button__variant__text.tm-button[data-v-3e2a912b]:focus .icon__right,.tm-button__external.tm-button__variant__text.tm-button[data-v-3e2a912b]:hover .icon__right{transform:translate(10%,-10%)}.tm-button__external.tm-button__variant__text.tm-button[data-v-3e2a912b]:focus .icon__down,.tm-button__external.tm-button__variant__text.tm-button[data-v-3e2a912b]:hover .icon__down{transform:translateY(10%)}.tm-button[data-v-3e2a912b]:focus .icon,.tm-button[data-v-3e2a912b]:hover .icon{display:none}.tm-button[data-v-3e2a912b]:focus .icon__hover,.tm-button[data-v-3e2a912b]:hover .icon__hover{display:inline-block}.tm-button+.tm-button[data-v-3e2a912b]{margin-top:var(--spacing-6)}@media screen and (min-width:576px){.tm-button+.tm-button[data-v-3e2a912b]{margin-left:var(--spacing-8);margin-top:0}}',""]),t.exports=o},440:function(t,e,n){var content=n(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("2e864e44",content,!0,{sourceMap:!1})},481:function(t,e,n){"use strict";n(440)},482:function(t,e,n){var o=n(39)(!1);o.push([t.i,".overlay[data-v-2ba1cf08]{top:0;left:0;height:100vh;width:100vw}.overlay[data-v-2ba1cf08],.sidebar[data-v-2ba1cf08]{position:fixed;z-index:100000}.sidebar[data-v-2ba1cf08]{overflow-y:hidden;transform:translateX(var(--sidebar-translate-x)) translateY(var(--sidebar-translate-y));-webkit-overflow-scrolling:touch}.close[data-v-2ba1cf08]{border-radius:50%;stroke:hsla(0,0%,100%,.75);box-sizing:border-box;padding:8px;width:48px;height:48px;position:absolute;top:0;right:0;margin:1rem;cursor:pointer}.close__icon[data-v-2ba1cf08]{display:block}.sidebar.sidebar__side__left[data-v-2ba1cf08]{left:0;right:auto}.sidebar.sidebar__side__left[data-v-2ba1cf08],.sidebar.sidebar__side__right[data-v-2ba1cf08]{top:0;width:300px;width:var(--sidebar-width,300px);max-width:75%;max-width:var(--sidebar-max-width,75%);height:100%;height:var(--sidebar-height,100%);max-height:100%;max-height:var(--sidebar-max-height,100%);box-shadow:var(--sidebar-box-shadow)}.sidebar.sidebar__side__right[data-v-2ba1cf08]{left:auto;right:0}.sidebar.sidebar__side__bottom[data-v-2ba1cf08]{max-width:none;width:100%;width:var(--sidebar-width,100%);max-width:100%;max-width:var(--sidebar-width,100%);height:100%;margin-left:auto;margin-right:auto}.sidebar.sidebar__side__bottom[data-v-2ba1cf08],.sidebar.sidebar__side__center[data-v-2ba1cf08]{top:0;left:0;right:0;overflow-y:scroll;-webkit-overflow-scrolling:touch}.sidebar.sidebar__side__center[data-v-2ba1cf08]{bottom:0;width:100%;max-width:100%;pointer-events:all;height:100vh}.sidebar__content[data-v-2ba1cf08]{position:absolute;pointer-events:all;overflow-y:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%}.sidebar__content.sidebar__content__side__bottom[data-v-2ba1cf08]{margin-top:var(--sidebar-margin-top);overflow-y:hidden;height:auto;box-shadow:var(--sidebar-box-shadow)}.sidebar__content.sidebar__content__side__center[data-v-2ba1cf08]{pointer-events:all;position:absolute;height:auto;top:0;bottom:0;transform:translateX(-50%);left:50%;box-shadow:var(--sidebar-box-shadow)}.sidebar__content.sidebar__content__side__center.sidebar__fullscreen__true[data-v-2ba1cf08]{top:0;width:100%;height:100%;max-width:100%;max-height:100%;margin-bottom:0;border-radius:0}.overlay-enter-active[data-v-2ba1cf08]{transition:all .25s ease-out}.overlay-enter[data-v-2ba1cf08]{opacity:0}.overlay-enter-to[data-v-2ba1cf08]{opacity:1}.overlay-leave-active[data-v-2ba1cf08]{transition:all .25s}.overlay-leave[data-v-2ba1cf08]{opacity:1}.overlay-leave-to[data-v-2ba1cf08]{opacity:0}.sidebar__bottom-enter-active[data-v-2ba1cf08],.sidebar__bottom-leave-active[data-v-2ba1cf08],.sidebar__center-enter-active[data-v-2ba1cf08],.sidebar__center-leave-active[data-v-2ba1cf08],.sidebar__left-enter-active[data-v-2ba1cf08],.sidebar__left-leave-active[data-v-2ba1cf08],.sidebar__right-enter-active[data-v-2ba1cf08],.sidebar__right-leave-active[data-v-2ba1cf08]{transition:all .5s}.sidebar__left-enter[data-v-2ba1cf08],.sidebar__left-leave-to[data-v-2ba1cf08]{transform:translateX(-100%)}.sidebar__right-enter[data-v-2ba1cf08],.sidebar__right-leave-to[data-v-2ba1cf08]{transform:translateX(100%)}.sidebar__left-enter-to[data-v-2ba1cf08],.sidebar__left-leave .sidebar__right-enter-to[data-v-2ba1cf08],.sidebar__right-leave[data-v-2ba1cf08]{transform:translateX(0)}.sidebar__bottom-enter[data-v-2ba1cf08],.sidebar__bottom-leave-to[data-v-2ba1cf08]{transform:translateY(100%)}.sidebar__bottom-enter-to[data-v-2ba1cf08],.sidebar__bottom-leave[data-v-2ba1cf08]{transform:translateY(0)}.sidebar__center-enter[data-v-2ba1cf08],.sidebar__center-leave-to[data-v-2ba1cf08]{opacity:0;transform:scale(.95)}.sidebar__center-enter-to[data-v-2ba1cf08],.sidebar__center-leave[data-v-2ba1cf08]{opacity:1;transform:scale(1)}@media screen and (max-width:500px){.sidebar__content.sidebar__content__side__center[data-v-2ba1cf08]{margin-top:3rem}}",""]),t.exports=o},690:function(t,e,n){var content=n(743);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("2666b2f4",content,!0,{sourceMap:!1})},691:function(t,e,n){var content=n(745);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("34b6105c",content,!0,{sourceMap:!1})},710:function(t,e,n){"use strict";n.r(e);var o={props:{visible:{type:Boolean,default:!1},width:{type:String},maxWidth:{type:String},height:{type:String},maxHeight:{type:String},side:{type:String,default:"left"},backgroundColor:{type:String,default:"#000"},boxShadow:{type:String,default:"none"},marginTop:{type:String},fullscreen:{type:Boolean,default:!1},buttonClose:{type:Boolean,default:!1}},data:function(){return{visibleLocal:!0,startX:null,startY:null,currentX:null,currentY:null,translateX:null,translateY:null,isScrolling:null,marginTopComputed:null,fullscreenComputed:null}},computed:{deltaX:function(){return this.currentX-this.startX},deltaY:function(){return this.currentY-this.startY},style:function(){return{"--sidebar-max-width":this.maxWidth,"--sidebar-width":this.width,"--sidebar-max-height":this.maxHeight,"--sidebar-height":this.height,"--sidebar-box-shadow":this.boxShadow,"--sidebar-margin-top":this.marginTopComputed+"px","--sidebar-translate-x":"".concat(this.translateX||0,"px"),"--sidebar-translate-y":"".concat(this.translateY||0,"px")}}},watch:{visible:function(t){t&&(this.visibleLocal=!0)}},mounted:function(){this.adjustVertically(),window.addEventListener("resize",this.adjustVertically)},methods:{adjustVertically:function(){if(this.$refs.content){var content=this.$refs.content.offsetHeight,t=window.innerHeight,e=parseInt(this.marginTop)||100;"center"===this.side&&(this.marginTopComputed=content>t-40?20:(t-content)/2,this.fullscreenComputed=window.innerWidth<=parseInt(this.width)&&this.fullscreen),"bottom"===this.side&&(this.marginTopComputed=content>t-e?e:t-content)}},sidebarClick:function(t){"center"===this.side&&(this.visibleLocal=null),"bottom"===this.side&&(this.visibleLocal=null)},setScrolling:function(t){this.isScrolling=t},beforeEnter:function(){document.querySelector("body").style.overflow="hidden"},emitVisible:function(){document.querySelector("body").style.overflow="",this.$emit("visible",!1)},close:function(t){if(this.visibleLocal=null,this.$refs.overlay.style["pointer-events"]="none",t.clientX&&t.clientY){var e=document.elementFromPoint(t.clientX,t.clientY);e&&e.click&&e.click()}},touchstart:function(t){this.$refs.sidebar.style.transition="",this.currentX=this.startX=t.changedTouches[0].clientX,this.currentY=this.startY=t.changedTouches[0].clientY},touchmove:function(t){this.currentX=t.changedTouches[0].clientX,this.currentY=t.changedTouches[0].clientY,"left"!==this.side||this.isScrolling||(this.translateX=this.deltaX>0?0:this.deltaX),"right"!==this.side||this.isScrolling||(this.translateX=this.deltaX<0?0:this.deltaX)},touchend:function(t){var e=Math.abs(100*this.deltaX/window.screen.width)>25,n="left"===this.side,o="right"===this.side;n&&(this.translateX=this.deltaX>0?0:this.deltaX),o&&(this.translateX=this.deltaX<0?0:this.deltaX),e&&!this.isScrolling&&(n||o)?this.close(t):this.$refs.sidebar&&(this.$refs.sidebar.style.transition="all .5s"),this.startX=null,this.startY=null,this.currentX=null,this.currentY=null,this.translateX=null,this.isScrolling=null}}},r=(n(481),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"overlay",appear:""}},[t.visible&&t.visibleLocal?n("div",{ref:"overlay",staticClass:"overlay",style:{"background-color":t.backgroundColor||"#000"},on:{click:t.close,touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}}):t._e()]),t._v(" "),n("transition",{attrs:{name:"sidebar__"+t.side,appear:""},on:{"before-enter":function(e){return t.beforeEnter()},"after-leave":function(e){return t.emitVisible()}}},[t.visible&&t.visibleLocal?n("div",{ref:"sidebar",class:["sidebar","sidebar__side__"+t.side],style:t.style,on:{click:function(e){return e.target!==e.currentTarget?null:t.sidebarClick.apply(null,arguments)},touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},[n("div",{ref:"content",class:["sidebar__content","sidebar__content__side__"+t.side,"sidebar__fullscreen__"+!!t.fullscreenComputed],on:{scroll:function(e){return t.setScrolling(!0)}}},[t._t("default")],2),t._v(" "),"center"===t.side&&t.buttonClose?n("div",{staticClass:"close",on:{click:t.close}},[n("svg",{staticClass:"close__icon",attrs:{width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 4l16 16m0-16L4 20","stroke-width":"1.5","stroke-linecap":"round"}})])]):t._e()]):t._e()])],1)}),[],!1,null,"2ba1cf08",null);e.default=component.exports},718:function(t,e,n){"use strict";n.r(e);var o=n(14),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("rect",{attrs:{x:"0.5",y:"0.5",width:"47",height:"47",rx:"23.5",fill:"black"}}),t._v(" "),n("path",{attrs:{d:"M31 17L17 31",stroke:"url(#paint0_linear_2802_14890)","stroke-width":"2","stroke-miterlimit":"10","stroke-linecap":"round"}}),t._v(" "),n("path",{attrs:{d:"M31 31L17 17",stroke:"url(#paint1_linear_2802_14890)","stroke-width":"2","stroke-miterlimit":"10","stroke-linecap":"round"}}),t._v(" "),n("rect",{attrs:{x:"0.5",y:"0.5",width:"47",height:"47",rx:"23.5",stroke:"url(#paint2_linear_2802_14890)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_2802_14890",x1:"21.2",y1:"17",x2:"27.8889",y2:"31",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#64DAFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.291667","stop-color":"#30FFDF"}}),t._v(" "),n("stop",{attrs:{offset:"0.71875","stop-color":"#FFFD38"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_2802_14890",x1:"21.2",y1:"17",x2:"27.8889",y2:"31",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#64DAFB"}}),t._v(" "),n("stop",{attrs:{offset:"0.291667","stop-color":"#30FFDF"}}),t._v(" "),n("stop",{attrs:{offset:"0.71875","stop-color":"#FFFD38"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_2802_14890",x1:"-5.0625",y1:"17.0625",x2:"48",y2:"28.6875",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#64DBFC"}}),t._v(" "),n("stop",{attrs:{offset:"0.386644","stop-color":"#30FFDF"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#FFFE39"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports},742:function(t,e,n){"use strict";n(690)},743:function(t,e,n){var o=n(39)(!1);o.push([t.i,'.container[data-v-608bebe2]{display:flex;flex-direction:column;justify-content:space-between;height:100%;padding-top:var(--spacing-9);padding-bottom:var(--spacing-9);padding-left:0;padding-right:0;text-align:center}@media screen and (min-width:1200px){.container[data-v-608bebe2]{padding-left:var(--wrap-gap);padding-right:var(--wrap-gap)}}.container[data-v-608bebe2]:before{content:""}',""]),t.exports=o},744:function(t,e,n){"use strict";n(691)},745:function(t,e,n){var o=n(39)(!1);o.push([t.i,'.youtube{position:relative;width:100%;height:0;padding-bottom:64%}@media screen and (min-width:1200px){.youtube{padding-bottom:56.25%}}.youtube:before{content:"";position:absolute;top:50%;left:50%;height:.35rem;width:10rem;background:linear-gradient(270deg,hsla(0,0%,100%,.2),hsla(0,0%,100%,.7));background-size:200% 200%;-webkit-animation:gradient 3s ease infinite;animation:gradient 3s ease infinite;border-radius:6px;transform:translate(-50%,-50%)}.youtube .iframe{position:absolute;top:0;left:0;right:0;bottom:0}@-webkit-keyframes gradient{0%,to{background-position:0 50%}50%{background-position:100% 50%}}@keyframes gradient{0%,to{background-position:0 50%}50%{background-position:100% 50%}}',""]),t.exports=o},896:function(t,e,n){"use strict";n.r(e);var o={components:{IconClose:n(718).default},props:{visible:{type:Boolean,default:!1},closeModal:{type:Function,default:function(){}}},data:function(){return{videoId:"umQ5vJ4S4lY",playerVars:{rel:0,enablejsapi:1,autoplay:1}}},computed:{player:function(){return this.$refs.youtube.player}},methods:{}},r=(n(742),n(744),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tm-modal",t._b({},"tm-modal",{visible:t.visible,side:"center"},!1),[n("div",{staticClass:"tm-wrapper tm-container container"},[n("div",{staticClass:"youtube"},[n("youtube",{ref:"youtube",staticClass:"iframe",attrs:{width:"100%",height:"100%","video-id":t.videoId,"player-vars":t.playerVars}})],1),t._v(" "),n("div",[n("tm-button",{attrs:{variant:"text",background:"regular",size:"s"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.closeModal(t.player)}},nativeOn:{click:function(e){return t.closeModal(t.player)}}},[n("icon-close")],1)],1)])])],1)}),[],!1,null,"608bebe2",null);e.default=component.exports;installComponents(component,{TmButton:n(406).default,TmModal:n(710).default})}}]);