(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{J8Ov:function(e,t,r){"use strict";r.d(t,"a",(function(){return V})),r.d(t,"b",(function(){return z})),r.d(t,"c",(function(){return W}));r("UKgA");var o=r("mXGw"),n=r.n(o),i=r("5QYd"),a=r("ySTC"),c=r("FFEP"),l=r("w0VL"),u=r("56Mt"),s=r("W0B4"),d=r.n(s),f=r("llhf"),b=r("aBO9"),y=r("wbYc"),p=function(e){var t=e.layer,r=e.fillOpacity,a=e.borderWidth,c=e.getBorderColor,s=e.getTooltipLabel,d=e.isInteractive,f=Object(u.i)(),b=f.showTooltipFromEvent,y=f.hideTooltip,p=Object(o.useCallback)((function(e){b(n.a.createElement(u.a,{id:s(t),enableChip:!0,color:t.color}),e,"left")}),[b,s,t]),m=Object(i.rb)(),g=m.animate,h=m.config,x=Object(i.nb)(t.path),v=Object(l.useSpring)({color:t.color,config:h,immediate:!g});return n.a.createElement(l.animated.path,{d:x,fill:t.fill?t.fill:v.color,fillOpacity:r,stroke:c(t),strokeWidth:a,onMouseMove:d?p:void 0,onMouseEnter:d?p:void 0,onMouseLeave:d?y:void 0})},m=Object(o.memo)(p),g=function(e){var t=e.layers,r=e.fillOpacity,o=e.borderWidth,i=e.getBorderColor,a=e.getTooltipLabel,c=e.isInteractive;return n.a.createElement("g",null,t.map((function(e,t){return n.a.createElement(m,{key:t,layer:e,getBorderColor:i,borderWidth:o,fillOpacity:r,getTooltipLabel:a,isInteractive:c})})))};function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e,t){var r=e.y2;return"center"===t?r=e.y1+(e.y2-e.y1)/2:"start"===t&&(r=e.y1),r},k=function(e){var t=e.id,r=e.color,o=e.data,i=e.dotComponent,a=e.position,c=e.getSize,l=e.getColor,u=e.getBorderWidth,s=e.getBorderColor;return o.map((function(e,o){var d=v(v({},e),{},{key:t,color:r});return n.a.createElement(i,{key:o,datum:d,x:d.x,y:O(d,a),size:c(d),color:l(d),borderWidth:u(d),borderColor:s(d)})}))},j=Object(o.memo)(k);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function S(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,n=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(l){n=!0,i=l}finally{try{o||null==c.return||c.return()}finally{if(n)throw i}}return r}}(e,t)||S(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(e){var t=e.slice,r=e.height,i=e.getTooltipLabel,a=e.getTooltipValue,c=C(Object(o.useState)(!1),2),l=c[0],s=c[1],d=Object(u.i)(),f=d.showTooltipFromEvent,b=d.hideTooltip,y=Object(o.useMemo)((function(){return t.stack.map((function(e){return[n.a.createElement(u.b,{key:e.id,color:e.color}),i(e),a(e.value)]}))}),[t,i,a]),p=Object(o.useCallback)((function(e){s(!0),f(n.a.createElement(u.d,{rows:y}),e,"left")}),[s,f,y]),m=Object(o.useCallback)((function(){s(!1),b()}),[s,b]);return n.a.createElement("g",{transform:"translate(".concat(t.x,", 0)")},l&&n.a.createElement("line",{x1:0,x2:0,y1:0,y2:r,stroke:"#000",strokeOpacity:.35,strokeWidth:1}),n.a.createElement("rect",{x:-20,width:40,height:r,fill:"#000",fillOpacity:0,onMouseEnter:p,onMouseMove:p,onMouseLeave:m}))},E=Object(o.memo)(w),P=function(e){var t=e.slices,r=e.height,o=e.getTooltipLabel,i=e.getTooltipValue;return n.a.createElement("g",null,t.map((function(e){return n.a.createElement(E,{key:e.index,slice:e,height:r,getTooltipLabel:o,getTooltipValue:i})})))},q=Object(o.memo)(P),B=function(e){var t=e.x,r=e.y,o=e.size,a=e.color,c=e.borderWidth,u=e.borderColor,s=Object(i.rb)(),d=s.animate,f=s.config,b=Object(l.useSpring)({x:t,y:r,radius:.5*o,color:a,config:f,immediate:!d});return n.a.createElement(l.animated.circle,{cx:b.x,cy:b.y,r:b.radius,fill:b.color,strokeWidth:c,stroke:u})},R=Object(o.memo)(B),W=(d.a.arrayOf(d.a.object).isRequired,d.a.array.isRequired,i.ib.isRequired,i.fb.isRequired,i.r.isRequired,d.a.object,d.a.object,d.a.object,d.a.object,d.a.bool.isRequired,d.a.bool.isRequired,f.p.isRequired,d.a.number.isRequired,d.a.arrayOf(d.a.shape({id:d.a.string.isRequired})).isRequired,d.a.arrayOf(d.a.shape({id:d.a.string,match:d.a.oneOfType([d.a.oneOf(["*"]),d.a.object,d.a.func]).isRequired})).isRequired,d.a.number.isRequired,f.k.isRequired,d.a.bool.isRequired,d.a.oneOfType([d.a.func,d.a.object]).isRequired,d.a.oneOf(["start","center","end"]).isRequired,d.a.oneOfType([d.a.number,d.a.func]).isRequired,f.k.isRequired,d.a.oneOfType([d.a.number,d.a.func]).isRequired,f.k.isRequired,d.a.bool,d.a.func,d.a.oneOfType([d.a.func,d.a.string]),d.a.bool.isRequired,d.a.arrayOf(d.a.shape(c.o)).isRequired,d.a.string.isRequired,{order:"none",offsetType:"wiggle",curve:"catmullRom",axisBottom:{},enableGridX:!0,enableGridY:!1,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},colors:{scheme:"nivo"},fillOpacity:1,defs:[],fill:[],enableDots:!1,dotPosition:"center",dotComponent:R,dotSize:6,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{from:"color"},isInteractive:!0,enableStackTooltip:!0,legends:[],role:"img",animate:!0,motionConfig:"gentle"});function M(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D=function(e){var t=e.width,r=e.height,n=e.data,a=e.keys,c=e.offsetType,l=e.order,u=e.curve,s=e.colors,d=e.borderColor,p=e.dotSize,m=e.dotColor,g=e.dotBorderWidth,h=e.dotBorderColor,x=e.tooltipLabel,O=e.tooltipFormat,k=Object(o.useMemo)((function(){return Object(b.b)().x((function(e){return e.x})).y0((function(e){return e.y1})).y1((function(e){return e.y2})).curve(Object(i.z)(u))}),[u]),j=Object(o.useMemo)((function(){return Object(b.y)().keys(a).offset(Object(i.db)(c)).order(Object(i.gb)(l))}),[a,c,l]),T=C(Object(o.useMemo)((function(){var e=j(n);e.forEach((function(e){e.forEach((function(t){t.value=t.data[e.key]}))}));var o=function(e){return Math.min.apply(Math,M(e.reduce((function(e,t){return[].concat(M(e),M(t.map((function(e){return e[0]}))))}),[])))}(e),i=function(e){return Math.max.apply(Math,M(e.reduce((function(e,t){return[].concat(M(e),M(t.map((function(e){return e[1]}))))}),[])))}(e);return[e,Object(y.e)().domain(Array.from({length:n.length},(function(e,t){return t}))).range([0,t]),Object(y.b)().domain([o,i]).range([r,0])]}),[j,n,t,r]),3),S=T[0],w=T[1],E=T[2],P=Object(i.sb)(),q=Object(f.s)(s,"index"),B=Object(f.r)(d,P),R=Object(o.useMemo)((function(){return"function"==typeof p?p:function(){return p}}),[p]),W=Object(f.r)(m,P),D=Object(o.useMemo)((function(){return"function"==typeof g?g:function(){return g}}),[g]),z=Object(f.r)(h,P),V=Object(o.useMemo)((function(){return S.map((function(e,t){var r=e.map((function(e,t){return{index:t,x:w(t),value:e.value,y1:E(e[0]),y2:E(e[1])}}));return{id:a[t],layer:r,path:k(r),color:q({index:t})}}))}),[S,a,k,q]),L=Object(o.useMemo)((function(){return Array.from({length:n.length},(function(e,t){var r=V.map((function(e){return v({id:e.id,color:e.color},e.layer[t])})).sort((function(e,t){return e.y2-t.y2}));return{index:t,x:V[0].layer[t].x,stack:r}}))}),[n.length,V]),A=Object(o.useMemo)((function(){return"function"==typeof x?x:function(e){return e.id}}),[x]),F=Object(i.tb)(O);return{xScale:w,yScale:E,layers:V,slices:L,getBorderColor:B,getDotSize:R,getDotColor:W,getDotBorderWidth:D,getDotBorderColor:z,getTooltipLabel:A,getTooltipValue:F}},z=Object(i.ub)((function(e){var t=e.data,r=e.keys,o=e.offsetType,l=e.order,u=e.curve,s=e.width,d=e.height,f=e.margin,b=e.axisTop,y=e.axisRight,p=e.axisBottom,m=e.axisLeft,h=e.enableGridX,x=e.enableGridY,v=e.colors,O=e.fillOpacity,k=e.borderWidth,T=e.borderColor,S=e.defs,C=e.fill,w=e.enableDots,E=e.dotPosition,P=e.dotComponent,B=e.dotSize,R=e.dotColor,W=e.dotBorderWidth,M=e.dotBorderColor,z=e.isInteractive,V=e.tooltipLabel,L=e.tooltipFormat,A=e.enableStackTooltip,F=e.legends,I=e.role,Y=Object(i.pb)(s,d,f),X=Y.margin,G=Y.innerWidth,J=Y.innerHeight,H=Y.outerWidth,Q=Y.outerHeight,U=D({width:G,height:J,data:t,keys:r,offsetType:o,order:l,curve:u,colors:v,borderColor:T,dotSize:B,dotColor:R,dotBorderWidth:W,dotBorderColor:M,tooltipLabel:V,tooltipFormat:L}),Z=U.xScale,K=U.yScale,$=U.layers,N=U.slices,_=U.getBorderColor,ee=U.getDotSize,te=U.getDotColor,re=U.getDotBorderWidth,oe=U.getDotBorderColor,ne=U.getTooltipLabel,ie=U.getTooltipValue,ae=Object(i.s)(S,$,C);return n.a.createElement(i.l,{width:H,height:Q,margin:X,defs:ae,role:I},n.a.createElement(a.c,{width:G,height:J,xScale:h?Z:null,yScale:x?K:null}),n.a.createElement(g,{layers:$,fillOpacity:O,borderWidth:k,getBorderColor:_,getTooltipLabel:ne,isInteractive:z}),n.a.createElement(a.a,{xScale:Z,yScale:K,width:G,height:J,top:b,right:y,bottom:p,left:m}),w&&$.map((function(e){return n.a.createElement(j,{key:e.id,id:e.id,color:e.color,data:e.layer,dotComponent:P,position:E,getSize:ee,getColor:te,getBorderWidth:re,getBorderColor:oe})})),z&&A&&n.a.createElement(q,{slices:N,height:J,getTooltipValue:ie,getTooltipLabel:ne}),F.map((function(e,t){var r=$.map((function(e){return{id:e.id,label:e.id,color:e.color,fill:e.fill}})).reverse();return n.a.createElement(c.j,Object.assign({key:t},e,{containerWidth:G,containerHeight:J,data:r}))})))}));z.defaultProps=W;var V=function(e){return n.a.createElement(i.k,null,(function(t){var r=t.width,o=t.height;return n.a.createElement(z,Object.assign({width:r,height:o},e))}))}},JCgZ:function(e,t,r){var o=r("VPOt"),n=r("/Qyy"),i=r("UzdM"),a=parseFloat,c=Math.min,l=Math.random;e.exports=function(e,t,r){if(r&&"boolean"!=typeof r&&n(e,t,r)&&(t=r=void 0),void 0===r&&("boolean"==typeof t?(r=t,t=void 0):"boolean"==typeof e&&(r=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=i(e),void 0===t?(t=e,e=0):t=i(t)),e>t){var u=e;e=t,t=u}if(r||e%1||t%1){var s=l();return c(e+s*(t-e+a("1e-"+((s+"").length-1))),t)}return o(e,t)}},O04C:function(e,t,r){"use strict";r.r(t);var o=r("mXGw"),n=r.n(o),i=r("J8Ov"),a=r("ZS2m"),c=r("IuDB"),l=r.n(c),u=r("nLLr"),s=Object(u.c)({markersLabel:function(e){return"d => `${d.x}: ${d.y}`"===e?function(e){return e.x+": "+e.y}:e},axisTop:Object(u.a)("top"),axisRight:Object(u.a)("right"),axisBottom:Object(u.a)("bottom"),axisLeft:Object(u.a)("left")},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft"]}),d=r("Eo5u"),f=r("5QYd"),b=r("RQLE"),y=[{key:"offsetType",help:"Offset type.",type:"string",required:!1,controlType:"choices",group:"Base",controlOptions:{choices:f.eb.map((function(e){return{label:e,value:e}}))}},{key:"order",help:"Layers order.",type:"string",required:!1,controlType:"choices",group:"Base",controlOptions:{choices:f.hb.map((function(e){return{label:e,value:e}}))}},{key:"curve",description:"\n            Defines the curve factory to use\n            for the area generator.\n        ",help:"Curve interpolation.",type:"string",required:!1,defaultValue:i.c.curve,controlType:"choices",group:"Base",controlOptions:{choices:f.q.map((function(e){return{label:e,value:e}}))}},{key:"width",enableControlForFlavors:["api"],description:"\n            not required if using\n            `<ResponsiveStream/>`.\n        ",help:"Chart width.",type:"{number}",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],description:"\n            not required if using\n            `<ResponsiveStream/>`.\n        ",help:"Chart height.",type:"{number}",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},b.f,{key:"colors",help:"Defines how to compute line color.",type:"string | Function",required:!1,defaultValue:i.c.colors,controlType:"ordinalColors",group:"Style"},{key:"fillOpacity",help:"Layers fill opacity.",type:"number",required:!1,defaultValue:i.c.fillOpacity,controlType:"opacity",group:"Style"},{key:"borderWidth",help:"Width of layer border.",type:"number",required:!1,defaultValue:i.c.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",description:"\n            How to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",help:"Method to compute layer border color.",type:"string | object | Function",required:!1,defaultValue:i.c.borderColor,controlType:"inheritedColor",group:"Style"}].concat(Object(d.a)(Object(b.b)("Style")),[{key:"enableGridX",help:"Enable/disable x grid.",type:"boolean",required:!1,defaultValue:i.c.enableGridX,controlType:"switch",group:"Grid & Axes"},{key:"enableGridY",help:"Enable/disable y grid.",type:"boolean",required:!1,defaultValue:i.c.enableGridY,controlType:"switch",group:"Grid & Axes"}],Object(d.a)(Object(b.a)()),[{key:"enableDots",help:"Enable/disable dots.",type:"boolean",required:!1,defaultValue:i.c.enableDots,controlType:"switch",group:"Dots"},{key:"renderDot",group:"Dots",flavors:["svg"],help:"Custom rendering function for dots.",type:"Function",required:!1},{key:"dotSize",help:"Size of the dots",description:"Size of the dots, it also accepts a function which can be used to make it vary according to the associated datum.",type:"number | Function",required:!1,defaultValue:i.c.dotSize,controlType:"range",group:"Dots",controlOptions:{unit:"px",min:2,max:20}},{key:"dotColor",help:"Method to compute dots color.",type:"string | object | Function",required:!1,defaultValue:i.c.dotColor,controlType:"inheritedColor",group:"Dots"},{key:"dotBorderWidth",help:"Width of the dots border.",description:"Width of the dots border, it also accepts a function which can be used to make it vary according to the associated datum.",type:"number | Function",required:!1,defaultValue:i.c.dotBorderWidth,controlType:"lineWidth",group:"Dots"},{key:"dotBorderColor",help:"Method to compute dots border color.",type:"string | object | Function",required:!1,defaultValue:i.c.dotBorderColor,controlType:"inheritedColor",group:"Dots"},{key:"isInteractive",flavors:["svg"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:i.c.isInteractive,controlType:"switch",group:"Interactivity"},{key:"enableStackTooltip",flavors:["svg"],help:"Enable/disable stack tooltip ('isInteractive' must also be 'true').",type:"boolean",required:!1,defaultValue:i.c.enableStackTooltip,controlType:"switch",group:"Interactivity"}],Object(d.a)(Object(b.e)(["svg"],i.c,"react-spring"))),p=Object(b.d)(y),m=(r("UKgA"),r("q8Y+")),g=r.n(m),h=r("JCgZ"),x=r.n(h),v=["Raoul","Josiane","Marcel","René","Paul","Jacques","Jane","André","Guillaume","Lyu","Maki","Junko","Emi","Kae","Tomoko","Camille","Jared","Ibrahim","Mohamed","Claude","Jean","Leonard","David"],O=function(){return{data:g()(9).map((function(){return v.slice(0,6).reduce((function(e,t){return e[t]=x()(10,200),e}),{})})),keys:v.slice(0,6)}},k={margin:{top:50,right:110,bottom:50,left:60},axisTop:{enable:!1,orient:"top",tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:36},axisRight:{enable:!1,orient:"right",tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:0},axisBottom:{enable:!0,orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:36},axisLeft:{enable:!0,orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:-40},enableGridX:!0,enableGridY:!1,curve:"catmullRom",offsetType:"silhouette",order:"none",colors:{scheme:"nivo"},fillOpacity:.85,borderWidth:0,borderColor:{theme:"background"},defs:[Object(f.W)("dots",{background:"inherit",color:"#2c998f",size:4,padding:2,stagger:!0}),Object(f.Y)("squares",{background:"inherit",color:"#e4c912",size:6,padding:2,stagger:!0})],fill:[{match:{id:"Paul"},id:"dots"},{match:{id:"Marcel"},id:"squares"}],enableDots:i.c.enableDots,dotSize:8,dotColor:{from:"color"},dotBorderWidth:2,dotBorderColor:{from:"color",modifiers:[["darker",.7]]},animate:i.c.animate,motionConfig:i.c.motionConfig,isInteractive:i.c.isInteractive,enableStackTooltip:!0},j=Object.assign({},k,{legends:[{anchor:"bottom-right",direction:"column",translateX:100,itemWidth:80,itemHeight:20,itemTextColor:"#999999",symbolSize:12,symbolShape:"circle",onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000000"}}]}]});t.default=function(){return n.a.createElement(a.a,{name:"Stream",meta:l.a.Stream,icon:"stream",flavors:l.a.flavors,currentFlavor:"svg",properties:p,initialProperties:j,defaultProperties:i.c,propertiesMapper:s,codePropertiesMapper:function(e,t){return Object.assign({keys:t.keys},e)},generateData:O,getTabData:function(e){return e.data}},(function(e,t,r){return n.a.createElement(i.a,Object.assign({data:t.data,keys:t.keys},e,{theme:r}))}))}},VPOt:function(e,t){var r=Math.floor,o=Math.random;e.exports=function(e,t){return e+r(o()*(t-e+1))}},nLLr:function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var o=r("PWxN"),n=r.n(o),i=r("KXzt"),a=r.n(i),c=function(e,t){var r=(void 0===t?{}:t).exclude,o=void 0===r?[]:r;return function(t,r){void 0===r&&(r={});var i={};return Object.keys(t).forEach((function(o){e[o]&&(i[o]=e[o](t[o],t,r))})),Object.assign({},n()(t,o),i)}},l=function(e){return function(t,r){return r["axis"+a()(e)].enable?n()(t,["enable"]):null}},u=function(e){var t=e.format;return!0===e.enabled?t:void 0}},ySTC:function(e,t,r){"use strict";r.d(t,"a",(function(){return R})),r.d(t,"b",(function(){return P})),r.d(t,"c",(function(){return L})),r.d(t,"d",(function(){return S})),r.d(t,"e",(function(){return Y})),r.d(t,"f",(function(){return F})),r.d(t,"g",(function(){return X}));var o=r("mXGw"),n=r.n(o),i=r("w0VL"),a=r("5QYd"),c=r("qsVS"),l=r("ibHE"),u=r("ZZWI"),s=r("W0B4"),d=r.n(s);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.bandwidth();if(0===t)return e;var r=t/2;return e.round()&&(r=Math.round(r)),function(t){return e(t)+r}},m={millisecond:[c.e,c.v],second:[c.k,c.A],minute:[c.f,c.w],hour:[c.d,c.u],day:[c.a,c.s],week:[c.p,c.F],sunday:[c.l,c.B],monday:[c.g,c.x],tuesday:[c.n,c.D],wednesday:[c.o,c.E],thursday:[c.m,c.C],friday:[c.c,c.t],saturday:[c.j,c.z],month:[c.h,c.y],year:[c.r,c.G]},g=Object.keys(m),h=new RegExp("^every\\s*(\\d+)?\\s*(".concat(g.join("|"),")s?$"),"i"),x=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},v=function(e,t){if(Array.isArray(t))return t;if(e.ticks){if(void 0===t)return e.ticks();if(x(t))return e.ticks(t);if("string"==typeof t){var r=t.match(h);if(r){var o=m[r[2]][e.useUTC?1:0];return void 0===r[1]?e.ticks(o):e.ticks(o.every(Number(r[1])))}throw new Error("Invalid tickValues: ".concat(t))}}return e.domain()},O=function(e){var t,r=e.axis,o=e.scale,n=e.ticksPosition,i=e.tickValues,c=e.tickSize,l=e.tickPadding,u=e.tickRotation,s=e.engine,d=void 0===s?"svg":s,f=v(o,i),b=a.jb[d],m=o.bandwidth?p(o):o,g={lineX:0,lineY:0},h={textX:0,textY:0},x=b.align.center,O=b.baseline.center;return"x"===r?(t=function(e){return{x:m(e),y:0}},g.lineY=c*("after"===n?1:-1),h.textY=(c+l)*("after"===n?1:-1),O="after"===n?b.baseline.top:b.baseline.bottom,0===u?x=b.align.center:"after"===n&&u<0||"before"===n&&u>0?(x=b.align.right,O=b.baseline.center):("after"===n&&u>0||"before"===n&&u<0)&&(x=b.align.left,O=b.baseline.center)):(t=function(e){return{x:0,y:m(e)}},g.lineX=c*("after"===n?1:-1),h.textX=(c+l)*("after"===n?1:-1),x="after"===n?b.align.left:b.align.right),{ticks:f.map((function(e){return y(y(y({key:e,value:e},t(e)),g),h)})),textAlign:x,textBaseline:O}},k=function(e,t){if(!e||"function"==typeof e)return e;if("time"===t.type){var r=Object(l.a)(e);return function(e){return r(new Date(e))}}return Object(u.a)(e)},j=function(e){var t,r=e.width,o=e.height,n=e.scale,i=e.axis,a=e.values,c=Array.isArray(a)?a:void 0,l=x(a)?a:void 0,u=c||v(n,l),s=n.bandwidth?p(n):n;return"x"===i?t=u.map((function(e){return{key:"".concat(e),x1:s(e),x2:s(e),y1:0,y2:o}})):"y"===i&&(t=u.map((function(e){return{key:"".concat(e),x1:0,x2:r,y1:s(e),y2:s(e)}}))),t},T={ticksPosition:d.a.oneOf(["before","after"]),tickValues:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.oneOfType([d.a.number,d.a.string,d.a.instanceOf(Date)])),d.a.string]),tickSize:d.a.number,tickPadding:d.a.number,tickRotation:d.a.number,format:d.a.oneOfType([d.a.func,d.a.string]),renderTick:d.a.func,legend:d.a.node,legendPosition:d.a.oneOf(["start","middle","end"]),legendOffset:d.a.number,ariaHidden:d.a.bool},S=d.a.shape(T),C=function(e){var t=e.value,r=e.format,o=e.lineX,c=e.lineY,l=e.onClick,u=e.textBaseline,s=e.textAnchor,d=e.animatedProps,f=Object(a.sb)(),b=t;void 0!==r&&(b=r(b));var y={opacity:d.opacity};return l&&(y.cursor="pointer"),n.a.createElement(i.animated.g,Object.assign({transform:d.transform},l?{onClick:function(e){return l(e,b)}}:{},{style:y}),n.a.createElement("line",{x1:0,x2:o,y1:0,y2:c,style:f.axis.ticks.line}),n.a.createElement(i.animated.text,{dominantBaseline:u,textAnchor:s,transform:d.textTransform,style:f.axis.ticks.text},b))};C.defaultProps={opacity:1,rotate:0};var w=Object(o.memo)(C),E=function(e){var t=e.axis,r=e.scale,c=e.x,l=e.y,u=e.length,s=e.ticksPosition,d=e.tickValues,f=e.tickSize,b=e.tickPadding,p=e.tickRotation,m=e.format,g=e.renderTick,h=e.legend,x=e.legendPosition,v=e.legendOffset,j=e.onClick,T=e.ariaHidden,S=Object(a.sb)(),C=Object(o.useMemo)((function(){return k(m,r)}),[m,r]),w=O({axis:t,scale:r,ticksPosition:s,tickValues:d,tickSize:f,tickPadding:b,tickRotation:p}),E=w.ticks,P=w.textAlign,q=w.textBaseline,B=null;if(void 0!==h){var R,W=0,M=0,D=0;"y"===t?(D=-90,W=v,"start"===x?(R="start",M=u):"middle"===x?(R="middle",M=u/2):"end"===x&&(R="end")):(M=v,"start"===x?R="start":"middle"===x?(R="middle",W=u/2):"end"===x&&(R="end",W=u)),B=n.a.createElement("text",{transform:"translate(".concat(W,", ").concat(M,") rotate(").concat(D,")"),textAnchor:R,style:y({dominantBaseline:"central"},S.axis.legend.text)},h)}var z=Object(a.rb)(),V=z.animate,L=z.config,A=Object(i.useSpring)({transform:"translate(".concat(c,",").concat(l,")"),lineX2:"x"===t?u:0,lineY2:"x"===t?0:u,config:L,immediate:!V}),F=Object(i.useTransition)(E,{key:function(e){return e.key},initial:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(p,")")}},from:function(e){return{opacity:0,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(p,")")}},enter:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(p,")")}},update:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(p,")")}},leave:{opacity:0},config:L,immediate:!V});return n.a.createElement(i.animated.g,{transform:A.transform,"aria-hidden":T},F((function(e,t,r,o){return n.a.createElement(g,y(y(y({tickIndex:o,format:C,rotate:p,textBaseline:q,textAnchor:P,animatedProps:e},t),j?{onClick:j}:{}),{},{key:t.key}))})),n.a.createElement(i.animated.line,{style:S.axis.domain.line,x1:0,x2:A.lineX2,y1:0,y2:A.lineY2}),B)};E.defaultProps={x:0,y:0,tickSize:5,tickPadding:5,tickRotation:0,renderTick:function(e){return n.a.createElement(w,e)},legendPosition:"end",legendOffset:0};var P=Object(o.memo)(E),q=["top","right","bottom","left"],B=function(e){var t=e.xScale,r=e.yScale,o=e.width,i=e.height,a={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return q.map((function(e){var c=a[e];if(!c)return null;var l="top"===e||"bottom"===e,u="top"===e||"left"===e?"before":"after";return n.a.createElement(P,Object.assign({key:e},c,{axis:l?"x":"y",x:"right"===e?o:0,y:"bottom"===e?i:0,scale:l?t:r,length:l?o:i,ticksPosition:u}))}))},R=Object(o.memo)(B),W=function(e){var t=e.animatedProps,r=Object(a.sb)();return n.a.createElement(i.animated.line,Object.assign({},t,r.grid.line))};W.defaultProps={x1:0,x2:0,y1:0,y2:0};var M=Object(o.memo)(W),D=function(e){var t=e.lines,r=Object(a.rb)(),o=r.animate,c=r.config,l=Object(i.useTransition)(t,{key:function(e){return e.key},initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:c,immediate:!o});return n.a.createElement("g",null,l((function(e,t){return n.a.createElement(M,Object.assign({},t,{key:t.key,animatedProps:e}))})))},z=Object(o.memo)(D),V=function(e){var t=e.width,r=e.height,i=e.xScale,a=e.yScale,c=e.xValues,l=e.yValues,u=Object(o.useMemo)((function(){return!!i&&j({width:t,height:r,scale:i,axis:"x",values:c})}),[i,c,t,r]),s=!!a&&j({width:t,height:r,scale:a,axis:"y",values:l});return n.a.createElement(n.a.Fragment,null,u&&n.a.createElement(z,{type:"x",lines:u}),s&&n.a.createElement(z,{type:"y",lines:s}))},L=Object(o.memo)(V),A=function(e){return e*Math.PI/180},F=function(e,t){var r=t.axis,o=t.scale,n=t.x,i=void 0===n?0:n,a=t.y,c=void 0===a?0:a,l=t.length,u=t.ticksPosition,s=t.tickValues,d=t.tickSize,f=void 0===d?5:d,b=t.tickPadding,y=void 0===b?5:b,p=t.tickRotation,m=void 0===p?0:p,g=t.format,h=t.legend,x=t.legendPosition,v=void 0===x?"end":x,k=t.legendOffset,j=void 0===k?0:k,T=t.theme,S=O({axis:r,scale:o,ticksPosition:u,tickValues:s,tickSize:f,tickPadding:y,tickRotation:m,engine:"canvas"}),C=S.ticks,w=S.textAlign,E=S.textBaseline;if(e.save(),e.translate(i,c),e.textAlign=w,e.textBaseline=E,e.font="".concat(T.axis.ticks.text.fontSize,"px ").concat(T.axis.ticks.text.fontFamily),T.axis.domain.line.strokeWidth>0&&(e.lineWidth=T.axis.domain.line.strokeWidth,e.lineCap="square",e.strokeStyle=T.axis.domain.line.stroke,e.beginPath(),e.moveTo(0,0),e.lineTo("x"===r?l:0,"x"===r?0:l),e.stroke()),C.forEach((function(t){T.axis.ticks.line.strokeWidth>0&&(e.lineWidth=T.axis.ticks.line.strokeWidth,e.lineCap="square",e.strokeStyle=T.axis.ticks.line.stroke,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var r=void 0!==g?g(t.value):t.value;e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate(A(m)),e.fillStyle=T.axis.ticks.text.fill,e.fillText(r,0,0),e.restore()})),void 0!==h){var P,q=0,B=0,R=0;"y"===r?(R=-90,q=j,"start"===v?(P="start",B=l):"middle"===v?(P="center",B=l/2):"end"===v&&(P="end")):(B=j,"start"===v?P="start":"middle"===v?(P="center",q=l/2):"end"===v&&(P="end",q=l)),e.translate(q,B),e.rotate(A(R)),e.font="".concat(T.axis.legend.text.fontWeight?"".concat(T.axis.legend.text.fontWeight," "):"").concat(T.axis.legend.text.fontSize,"px ").concat(T.axis.legend.text.fontFamily),e.fillStyle=T.axis.legend.text.fill,e.textAlign=P,e.textBaseline="middle",e.fillText(h,0,0)}e.restore()},I=["top","right","bottom","left"],Y=function(e,t){var r=t.xScale,o=t.yScale,n=t.width,i=t.height,a=t.top,c=t.right,l=t.bottom,u=t.left,s=t.theme,d={top:a,right:c,bottom:l,left:u};I.forEach((function(t){var a=d[t];if(!a)return null;var c="top"===t||"bottom"===t,l="top"===t||"left"===t?"before":"after",u=c?r:o,f=k(a.format,u);F(e,y(y({},a),{},{axis:c?"x":"y",x:"right"===t?n:0,y:"bottom"===t?i:0,scale:u,format:f,length:c?n:i,ticksPosition:l,theme:s}))}))},X=function(e,t){var r=t.width,o=t.height,n=t.scale,i=t.axis,a=t.values;j({width:r,height:o,scale:n,axis:i,values:a}).forEach((function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()}))}}}]);
//# sourceMappingURL=component---src-pages-stream-index-js-dbcce632811a26c49dfb.js.map