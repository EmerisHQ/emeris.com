(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{698:function(t,e,n){"use strict";(function(t){function r(t,e){return{x:t,y:e}}function o(t){const{target:e,event:n}=t,o=n.clientX,d=n.clientY,l=o-e.left,h=d-e.top,c=r((element=e)?element.width/2:0,element?element.height/2:0);var element;return{...r(l/c.x,h/c.y),target:e}}function d(t){const{target:e}=t;return{...r((e.left-window.innerWidth)/(e.width+window.innerWidth),(e.top-window.innerHeight)/(e.height+window.innerHeight)),target:e}}function l(t){const{event:e,target:n}=t;return{...r(e.gamma/45,e.beta/90),target:n}}function h(element){return element.bottom>=0&&element.right>=0&&element.top<=(window.innerHeight||document.documentElement.clientHeight)&&element.left<=(window.innerWidth||document.documentElement.clientWidth)}function c(){try{return/Mobi|Android/i.test(navigator.userAgent)}catch(t){return!0}}function m(t,e,n){let r,o;return function(){const d=this;let l;l="scroll"===n||d.duration>1e3?e:d.duration/10;const h=+new Date,c=arguments;r&&h<r+l?(clearTimeout(o),o=setTimeout((()=>{requestAnimationFrame((()=>{r=h,t.apply(d,c)}))}),l)):requestAnimationFrame((()=>{r=h,t.apply(d,c)}))}}function f(template,style,script,t,e,n,r,o,d,l){"boolean"!=typeof r&&(d=o,o=r,r=!1);const h="function"==typeof script?script.options:script;let c;if(template&&template.render&&(h.render=template.render,h.staticRenderFns=template.staticRenderFns,h._compiled=!0,e&&(h.functional=!0)),t&&(h._scopeId=t),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},h._ssrRegister=c):style&&(c=r?function(t){style.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,o(t))}),c)if(h.functional){const t=h.render;h.render=function(e,n){return c.call(n),t(e,n)}}else{const t=h.beforeCreate;h.beforeCreate=t?[].concat(t,c):[c]}return script}n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return w}));const v=f({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",style:t.style,on:{mousemove:t.handleMovement,mouseenter:t.handleMovementStart,mouseleave:t.handleMovementStop}},[t._t("default"),t._v(" "),t.audio?n("audio",{ref:"audio",attrs:{type:"audio/mpeg"},on:{ended:t.stop}},[n("source",{attrs:{src:t.audio}})]):t._e()],2)},staticRenderFns:[]},undefined,{name:"KinesisContainer",mixins:[{props:{audio:{type:String,required:!1},playAudio:{type:Boolean,default:!1}},data:()=>({analyser:null,audioArray:null,audioData:null,audioRef:null,wasPlayed:!1,isPlaying:!1}),watch:{audio(){this.wasPlayed=!1,this.isPlaying=!1},playAudio(t){t?this.play():this.stop()}},methods:{play(){this.active&&(this.wasPlayed||(this.handleAudio(),this.wasPlayed=!0),this.isPlaying=!0,this.audioRef.play(),this.getSongData())},stop(){this.isPlaying=!1,this.audioRef.pause()},handleAudio(){const{audio:audio}=this.$refs;this.audioRef=audio;const t=new AudioContext,e=t.createMediaElementSource(audio),n=t.createAnalyser();e.connect(n),n.connect(t.destination),n.fftSize=256;const r=n.frequencyBinCount,o=new Uint8Array(r);this.audioArray=o,this.analyser=n},getSongData(){this.isPlaying&&(this.analyser.getByteFrequencyData(this.audioArray),this.audioData=new Array(this.audioArray),requestAnimationFrame(this.getSongData))}}}],props:{tag:{type:String,default:"div"},event:{type:String,default:"move"},active:{type:Boolean,default:!0},duration:{type:Number,default:1e3},easing:{type:String,default:"cubic-bezier(0.23, 1, 0.32, 1)"},perspective:{type:Number,default:1e3}},provide(){const t={};return["audioData","duration","easing","event","eventData","isMoving","movement","shape"].forEach((e=>Object.defineProperty(t,e,{enumerable:!0,get:()=>this[e]}))),{context:t}},data(){var t;return{shape:null===(t=this.$el)||void 0===t?void 0:t.getBoundingClientRect(),isMoving:!1,leftOnce:!1,movement:{x:0,y:0},eventMap:{orientation:"deviceorientation",scroll:"scroll",move:c()?"deviceorientation":null}}},computed:{eventActions(){var t;return{move:{action:o,condition:this.isMoving&&!c(),type:c()?"deviceorientation":null},scroll:{action:d,condition:!(null===(t=this.shape)||void 0===t||!t.height),type:"scroll"},orientation:{action:l,condition:"move"===this.event&&c(),type:"deviceorientation"}}},style(){return{perspective:`${this.perspective}px`}}},mounted(){this.addEvents()},beforeDestroy(){this.removeEvents()},methods:{handleMovementStart(){this.active&&(this.isMoving=!0)},handleMovementStop(){this.active&&(this.leftOnce=!0,this.isMoving=!1)},handleMovement:m((function(t){if(!this.active)return;this.isMoving||this.leftOnce||this.handleMovementStart(),this.shape=this.$el.getBoundingClientRect();const e=h(this.shape),n=this.eventActions[this.event].condition,o=this.eventActions[this.event].action;e&&n&&(this.movement=o({target:this.shape,event:t}),this.eventData=r(t.clientX,t.clientY))}),100),addEvents(){this.eventMap[this.event]&&window.addEventListener(this.eventMap[this.event],this.handleMovement,!0)},removeEvents(){this.eventMap[this.event]&&window.removeEventListener(this.eventMap[this.event],this.handleMovement,!0)}}},undefined,false,undefined,!1,void 0,void 0,void 0);function y(t,e,n){return n&&t>n?n:e&&t<e?e:t}var x={methods:{transformSwitch(t,e,n,s){let r;switch(t="scaleX"===t||"scaleY"===t?"scale":t){case"translate":r=this.translateMovement(e,n);break;case"rotate":r=this.rotateMovement(e,n);break;case"depth":r=this.depthMovement(e,n,s);break;case"depth_inv":r=this.depthMovement(-e,-n,s);break;case"scale":r=this.scaleMovement(e,n)}return r},translateMovement:(t,e)=>`translate3d(${-t}px, ${-e}px, 0)`,rotateMovement(t,e){let n;return this.axis?"x"===this.axis?n=2*t:"y"===this.axis&&(n=2*e):n=t+e,`rotate3d(0,0,1,${n}deg)`},depthMovement:(t,e,s)=>`rotateX(${-e}deg) rotateY(${t}deg) translate3d(0,0,${2*s}px)`,scaleMovement(t,e){const{type:n}=this,r=Math.sign(this.strength)*(Math.abs(t)+Math.abs(e))/10+1;return`scale3d(${"scaleX"===n||"scale"===n?r:1},\n            ${"scaleY"===n||"scale"===n?r:1},\n            1)`}}};const w=f({},undefined,{name:"KinesisElement",mixins:[x],props:{tag:{type:String,default:"div"},type:{type:String,default:"translate"},transformOrigin:{type:String,default:"center"},originX:{type:Number,default:50},originY:{type:Number,default:50},strength:{type:Number,default:10},axis:{type:String,default:null},maxX:{type:Number,default:null},maxY:{type:Number,default:null},minX:{type:Number,default:null},minY:{type:Number,default:null},cycle:{type:Number,default:0}},inject:["context"],computed:{transform(){return this.transformCalculation()},transformParameters(){return{transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.transitionTimingFunction}},transitionDuration(){const{duration:t}=this.context;return`${t}ms`},transitionTimingFunction(){return this.context.easing}},methods:{transformCalculation(){const{context:t}=this;if(!t.shape||!t.isMoving&&"move"===t.event)return{};let e,n;const{x:o,y:d}=this.cycle<1?function(t){const{y:e,x:n,target:o,originX:d=50,strength:l=10,event:h=null,minX:c,minY:m,maxX:f,maxY:v}=t;let{originY:x=50}=t;return"scroll"===h&&(x=-x/2),{...r(y((n-d/50)*l,c,f),y((e-x/50)*l,m,v)),target:o}}({...t.movement,originX:this.originX,originY:this.originY,strength:this.strengthManager(),event:t.event,minX:this.minX,minY:this.minY,maxX:this.maxX,maxY:this.maxY}):function(t){const{referencePosition:e,shape:n,event:o,cycles:d,strength:l}=t,h="scroll"===o?window.innerWidth:n.width,c="scroll"===o?window.innerHeight:n.height,m=(e.x-n.left)*(2*Math.PI)/h,f=(e.y-n.top)*(2*Math.PI)/c;return r(h*Math.sin(m*d)*l/(h/2),c*Math.sin(f*d)*l/(c/2))}({referencePosition:"scroll"===t.event?{x:0,y:0}:t.eventData,shape:t.shape,event:t.event,cycles:this.cycle,strength:this.strengthManager()});return"scroll"!==t.event?(e="y"===this.axis?0:o,n="x"===this.axis?0:d):"scroll"===t.event?(e="x"===this.axis?d:0,n="y"!==this.axis&&this.axis?0:d):this.cycle>0&&(e="x"===this.axis?o:0,n="y"===this.axis?d:0),{transform:this.transformSwitch(this.type,e,n,this.strength)}},strengthManager(){return"depth"===this.type||"depth_inv"===this.type?Math.abs(this.strength):this.strength}},render(t){const e=this;return t(e.tag,{style:{...e.transform,...e.transformParameters}},e.$slots.default)}},undefined,undefined,undefined,!1,void 0,void 0,void 0);var M={props:{type:{type:String,default:"translate"},transformOrigin:{type:String,default:"center"},originX:{type:Number,default:50},originY:{type:Number,default:50},strength:{type:Number,default:10},audioIndex:{type:Number,default:50},axis:{type:String,default:null},maxX:{type:Number,default:null},maxY:{type:Number,default:null},minX:{type:Number,default:null},minY:{type:Number,default:null},cycle:{type:Number,default:0}},methods:{strengthManager(){return"depth"===this.type||"depth_inv"===this.type?Math.abs(this.strength):this.strength}}};const S=f({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",style:Object.assign({},t.transform,t.transformParameters)},[t._t("default")],2)},staticRenderFns:[]},undefined,{name:"KinesisAudio",inject:["context"],mixins:[M],props:{tag:{type:String,default:"div"},audioIndex:{type:Number,default:50}},computed:{transform(){return this.transformAudio()},transformParameters(){return{transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.transitionTimingFunction}},transitionDuration(){const{duration:t}=this.context;return`${t}ms`},transitionTimingFunction(){return this.context.easing}},methods:{transformAudio(){const{audioData:t}=this.context;if(!t)return;const e=this.type,{strength:n}=this;let r,o;switch(e){case"translate":r=t?t[0][this.audioIndex]:0,o=`translate3d(${r*n}px, 0, 0)`;break;case"rotate":r=t?t[0][this.audioIndex]:0,o=`rotate3d(0,0,1,${r*n/10}deg)`;break;case"scale":r=t?t[0][this.audioIndex]/n<1?1:t[0][this.audioIndex]/(2*n):1,o=`scale(${r})`}return{transform:o}}}},undefined,false,undefined,!1,void 0,void 0,void 0);const $=f({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",style:Object.assign({},t.transform,t.transformParameters)},[t._t("default")],2)},staticRenderFns:[]},undefined,{name:"KinesisScroll",mixins:[{props:{active:{type:Boolean,default:!0},duration:{type:Number,default:1e3},easing:{type:String,default:"cubic-bezier(0.23, 1, 0.32, 1)"},tag:{type:String,default:"div"}}},{props:{perspective:{type:Number,default:1e3}},computed:{style(){return{perspective:`${this.perspective}px`}}}},M,x],data:()=>({transform:{}}),computed:{transformParameters(){return{transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.easing}},transitionDuration(){return`${this.duration}ms`}},mounted(){window.addEventListener("scroll",this.handleScroll,{passive:!0})},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll,{passive:!0})},methods:{getCycleMovement(t,e,n,r,o){const d=(t-o.left)*(2*Math.PI)/n,l=(e-o.top)*(2*Math.PI)/r;this.cycleMovement={x:d,y:l,width:n,height:r}},handleScroll:m((function(){if(!this.active)return;const t=this.$el.getBoundingClientRect();h(t)&&t.height&&this.transformBehavior(t)}),19,"scroll"),transformBehavior(t){let e,n;const r=(t.top-window.innerHeight)/(t.height+window.innerHeight);if(this.cycle<=0){const t=r*this.strength;e="x"===this.axis?t:0,n="y"!==this.axis&&this.axis?0:t,this.maxX&&(e=Math.min(e,this.maxX)),this.minX&&(e=Math.max(e,this.minX)),this.maxY&&(n=Math.min(n,this.maxY)),this.minY&&(n=Math.max(n,this.minY))}else if(this.cycle>0){const{x:r,y:o,width:d,height:l}=this.getCycleMovement(0,0,window.innerWidth,window.innerHeight,t),h=d*Math.sin(r*this.cycle),c=l*Math.sin(o*this.cycle);e="x"===this.axis?h/(d/2)*this.strength:0,n="y"!==this.axis&&this.axis?0:c/(l/2)*this.strength}let o=this.type;o="scaleX"===o||"scaleY"===o?"scale":o;const d=this.transformSwitch(o,e,n,this.strength);this.transform={transform:d}}}},undefined,false,undefined,!1,void 0,void 0,void 0);const _=f({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",style:Object.assign({},t.transform,t.transformParameters)},[t._t("default")],2)},staticRenderFns:[]},undefined,{name:"KinesisDistance",props:{tag:{type:String,default:"div"},type:{type:String,default:"translate"},transformOrigin:{type:String,default:"center"},originX:{type:Number,default:50},originY:{type:Number,default:50},strength:{type:Number,default:10},axis:{type:String,default:null},maxX:{type:Number,default:null},maxY:{type:Number,default:null},minX:{type:Number,default:null},minY:{type:Number,default:null},distance:{type:Number,default:100},cycle:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:1001},easing:{type:String,default:"cubic-bezier(0.23, 1, 0.32, 1)"},perspective:{type:Number,default:1e3}},data:()=>({pointer:{x:0,y:0},transform:{},component:"kidistance",throttle:500}),computed:{style(){return{perspective:`${this.perspective}px`}},transformParameters(){return{position:"relative",transitionProperty:"transform",transitionDuration:this.transitionDuration,transformOrigin:this.transformOrigin,transitionTimingFunction:this.easing}},transitionDuration(){return`${this.duration}ms`}},mounted(){window.addEventListener("scroll",this.handleMovement)},beforeDestroy(){window.removeEventListener("scroll",this.handleMovement)},methods:{getCoordinates(t,e){const n=this.$el.getBoundingClientRect();return{x:t+n.left,y:e+n.top}},getDistance:(t,e,n,r)=>Math.floor(Math.hypot(e-t,r-n)),handleMovement:m((function(t){window.addEventListener("mousemove",this.handleMovement);const{pointer:e}=this;e.x=t.clientX,e.y=t.clientY,this.transformBehavior()}),50),transformBehavior(){const t=this.$el.getBoundingClientRect(),e=this.getCoordinates(t.width/2,t.height/2),n=this.getDistance(this.pointer.x,e.x,this.pointer.y,e.y);if(n>this.distance)return this.transform={},void(this.throttle=500);this.throttle=50;const r=`scale(${n/this.distance})`;this.transform={transform:r}},scaleMovement(t,e){const{type:n}=this,r=Math.sign(this.strength)*(Math.abs(t)+Math.abs(e))/10+1;return`scale3d(${"scaleX"===n||"scale"===n?r:1},\n      ${"scaleY"===n||"scale"===n?r:1},\n      1)`}}},undefined,false,undefined,!1,void 0,void 0,void 0),N={install(t){t.component(S.name,S),t.component(v.name,v),t.component(_.name,_),t.component(w.name,w),t.component($.name,$)}};let X=null;"undefined"!=typeof window?X=window.vue:void 0!==t&&(X=t.vue),X&&X.use(N);var D=Object.freeze({__proto__:null,default:N,KinesisAudio:S,KinesisContainer:v,KinesisDistance:_,KinesisElement:w,KinesisScroll:$});const Y=function(t){if(!Y.installed){Y.installed=!0;for(const e in D)t.use(D[e]);t.component("kinesis-container",v),t.component("kinesis-element",w),t.component("kinesis-audio",S),t.component("kinesis-scroll",$),t.component("kinesis-distance",_)}},P={install:Y};let E=null;"undefined"!=typeof window?E=window.vue:void 0!==t&&(E=t.vue),E&&E.use(P)}).call(this,n(13))}}]);