(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"33Qb":function(e,t,n){var r=n("UnPy");e.exports=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}},"85gc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n("mXGw")),a=i(n("2KUO"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return o.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),o.default.createElement("g",null,o.default.createElement("path",{d:"m12.3 25.7l-2.3-2.3 10-10 10 10-2.3 2.3-7.7-7.7z"})))},e.exports=t.default},J8Ov:function(e,t,n){"use strict";n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return R})),n.d(t,"c",(function(){return z}));n("UKgA");var r=n("mXGw"),o=n.n(r),a=n("5QYd"),i=n("ySTC"),l=n("FFEP"),c=n("w0VL"),u=n("56Mt"),d=n("W0B4"),s=n.n(d),p=n("llhf"),f=n("aBO9"),m=n("0YW8"),g=n("OQCi"),b=function(e){var t=e.layer,n=e.fillOpacity,i=e.borderWidth,l=e.getBorderColor,d=e.getTooltipLabel,s=e.isInteractive,p=Object(u.i)(),f=p.showTooltipFromEvent,m=p.hideTooltip,g=Object(r.useCallback)((function(e){f(o.a.createElement(u.a,{id:d(t),enableChip:!0,color:t.color}),e,"left")}),[f,d,t]),b=Object(a.qb)(),h=b.animate,y=b.config,v=Object(a.mb)(t.path),O=Object(c.useSpring)({color:t.color,config:y,immediate:!h});return o.a.createElement(c.animated.path,{d:v,fill:t.fill?t.fill:O.color,fillOpacity:n,stroke:l(t),strokeWidth:i,onMouseMove:s?g:void 0,onMouseEnter:s?g:void 0,onMouseLeave:s?m:void 0})},h=Object(r.memo)(b),y=function(e){var t=e.layers,n=e.fillOpacity,r=e.borderWidth,a=e.getBorderColor,i=e.getTooltipLabel,l=e.isInteractive;return o.a.createElement("g",null,t.map((function(e,t){return o.a.createElement(h,{key:t,layer:e,getBorderColor:a,borderWidth:r,fillOpacity:n,getTooltipLabel:i,isInteractive:l})})))};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e,t){var n=e.y2;return"center"===t?n=e.y1+(e.y2-e.y1)/2:"start"===t&&(n=e.y1),n},E=function(e){var t=e.id,n=e.color,r=e.data,a=e.dotComponent,i=e.position,l=e.getSize,c=e.getColor,u=e.getBorderWidth,d=e.getBorderColor;return r.map((function(e,r){var s=j(j({},e),{},{key:t,color:n});return o.a.createElement(a,{key:r,datum:s,x:s.x,y:x(s,i),size:l(s),color:c(s),borderWidth:u(s),borderColor:d(s)})}))},k=Object(r.memo)(E);function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||C(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e){var t=e.slice,n=e.height,a=e.getTooltipLabel,i=e.getTooltipValue,l=P(Object(r.useState)(!1),2),c=l[0],d=l[1],s=Object(u.i)(),p=s.showTooltipFromEvent,f=s.hideTooltip,m=Object(r.useMemo)((function(){return t.stack.map((function(e){return[o.a.createElement(u.b,{key:e.id,color:e.color}),a(e),i(e.value)]}))}),[t,a,i]),g=Object(r.useCallback)((function(e){d(!0),p(o.a.createElement(u.d,{rows:m}),e,"left")}),[d,p,m]),b=Object(r.useCallback)((function(){d(!1),f()}),[d,f]);return o.a.createElement("g",{transform:"translate(".concat(t.x,", 0)")},c&&o.a.createElement("line",{x1:0,x2:0,y1:0,y2:n,stroke:"#000",strokeOpacity:.35,strokeWidth:1}),o.a.createElement("rect",{x:-20,width:40,height:n,fill:"#000",fillOpacity:0,onMouseEnter:g,onMouseMove:g,onMouseLeave:b}))},T=Object(r.memo)(S),q=function(e){var t=e.slices,n=e.height,r=e.getTooltipLabel,a=e.getTooltipValue;return o.a.createElement("g",null,t.map((function(e){return o.a.createElement(T,{key:e.index,slice:e,height:n,getTooltipLabel:r,getTooltipValue:a})})))},B=Object(r.memo)(q),W=function(e){var t=e.x,n=e.y,r=e.size,i=e.color,l=e.borderWidth,u=e.borderColor,d=Object(a.qb)(),s=d.animate,p=d.config,f=Object(c.useSpring)({x:t,y:n,radius:.5*r,color:i,config:p,immediate:!s});return o.a.createElement(c.animated.circle,{cx:f.x,cy:f.y,r:f.radius,fill:f.color,strokeWidth:l,stroke:u})},_=Object(r.memo)(W),z=(s.a.arrayOf(s.a.object).isRequired,s.a.array.isRequired,a.hb.isRequired,a.eb.isRequired,a.q.isRequired,s.a.object,s.a.object,s.a.object,s.a.object,s.a.bool.isRequired,s.a.bool.isRequired,p.p.isRequired,s.a.number.isRequired,s.a.arrayOf(s.a.shape({id:s.a.string.isRequired})).isRequired,s.a.arrayOf(s.a.shape({id:s.a.string,match:s.a.oneOfType([s.a.oneOf(["*"]),s.a.object,s.a.func]).isRequired})).isRequired,s.a.number.isRequired,p.k.isRequired,s.a.bool.isRequired,s.a.oneOfType([s.a.func,s.a.object]).isRequired,s.a.oneOf(["start","center","end"]).isRequired,s.a.oneOfType([s.a.number,s.a.func]).isRequired,p.k.isRequired,s.a.oneOfType([s.a.number,s.a.func]).isRequired,p.k.isRequired,s.a.bool,s.a.func,s.a.oneOfType([s.a.func,s.a.string]),s.a.bool.isRequired,s.a.arrayOf(s.a.shape(l.b)).isRequired,s.a.string.isRequired,{order:"none",offsetType:"wiggle",curve:"catmullRom",axisBottom:{},enableGridX:!0,enableGridY:!1,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},colors:{scheme:"nivo"},fillOpacity:1,defs:[],fill:[],enableDots:!1,dotPosition:"center",dotComponent:_,dotSize:6,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{from:"color"},isInteractive:!0,enableStackTooltip:!0,legends:[],role:"img",animate:!0,motionConfig:"gentle"});function D(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||C(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=function(e){var t=e.width,n=e.height,o=e.data,i=e.keys,l=e.offsetType,c=e.order,u=e.curve,d=e.colors,s=e.borderColor,b=e.dotSize,h=e.dotColor,y=e.dotBorderWidth,v=e.dotBorderColor,O=e.tooltipLabel,x=e.tooltipFormat,E=Object(r.useMemo)((function(){return Object(f.b)().x((function(e){return e.x})).y0((function(e){return e.y1})).y1((function(e){return e.y2})).curve(Object(a.x)(u))}),[u]),k=Object(r.useMemo)((function(){return Object(f.y)().keys(i).offset(Object(a.cb)(l)).order(Object(a.fb)(c))}),[i,l,c]),w=P(Object(r.useMemo)((function(){var e=k(o);e.forEach((function(e){e.forEach((function(t){t.value=t.data[e.key]}))}));var r=function(e){return Math.min.apply(Math,D(e.reduce((function(e,t){return[].concat(D(e),D(t.map((function(e){return e[0]}))))}),[])))}(e),a=function(e){return Math.max.apply(Math,D(e.reduce((function(e,t){return[].concat(D(e),D(t.map((function(e){return e[1]}))))}),[])))}(e);return[e,Object(m.b)().domain(Array.from({length:o.length},(function(e,t){return t}))).range([0,t]),Object(g.a)().domain([r,a]).range([n,0])]}),[k,o,t,n]),3),C=w[0],S=w[1],T=w[2],q=Object(a.sb)(),B=Object(p.s)(d,"index"),W=Object(p.r)(s,q),_=Object(r.useMemo)((function(){return"function"==typeof b?b:function(){return b}}),[b]),z=Object(p.r)(h,q),I=Object(r.useMemo)((function(){return"function"==typeof y?y:function(){return y}}),[y]),R=Object(p.r)(v,q),L=Object(r.useMemo)((function(){return C.map((function(e,t){var n=e.map((function(e,t){return{index:t,x:S(t),value:e.value,y1:T(e[0]),y2:T(e[1])}}));return{id:i[t],layer:n,path:E(n),color:B({index:t})}}))}),[C,i,E,B]),M=Object(r.useMemo)((function(){return Array.from({length:o.length},(function(e,t){var n=L.map((function(e){return j({id:e.id,color:e.color},e.layer[t])})).sort((function(e,t){return e.y2-t.y2}));return{index:t,x:L[0].layer[t].x,stack:n}}))}),[o.length,L]),A=Object(r.useMemo)((function(){return"function"==typeof O?O:function(e){return e.id}}),[O]),N=Object(a.tb)(x);return{xScale:S,yScale:T,layers:L,slices:M,getBorderColor:W,getDotSize:_,getDotColor:z,getDotBorderWidth:I,getDotBorderColor:R,getTooltipLabel:A,getTooltipValue:N}},R=Object(a.ub)((function(e){var t=e.data,n=e.keys,r=e.offsetType,c=e.order,u=e.curve,d=e.width,s=e.height,p=e.margin,f=e.axisTop,m=e.axisRight,g=e.axisBottom,b=e.axisLeft,h=e.enableGridX,v=e.enableGridY,O=e.colors,j=e.fillOpacity,x=e.borderWidth,E=e.borderColor,w=e.defs,C=e.fill,P=e.enableDots,S=e.dotPosition,T=e.dotComponent,q=e.dotSize,W=e.dotColor,_=e.dotBorderWidth,z=e.dotBorderColor,D=e.isInteractive,R=e.tooltipLabel,L=e.tooltipFormat,M=e.enableStackTooltip,A=e.legends,N=e.role,V=Object(a.ob)(d,s,p),G=V.margin,U=V.innerWidth,Y=V.innerHeight,F=V.outerWidth,X=V.outerHeight,J=I({width:U,height:Y,data:t,keys:n,offsetType:r,order:c,curve:u,colors:O,borderColor:E,dotSize:q,dotColor:W,dotBorderWidth:_,dotBorderColor:z,tooltipLabel:R,tooltipFormat:L}),Q=J.xScale,K=J.yScale,H=J.layers,Z=J.slices,$=J.getBorderColor,ee=J.getDotSize,te=J.getDotColor,ne=J.getDotBorderWidth,re=J.getDotBorderColor,oe=J.getTooltipLabel,ae=J.getTooltipValue,ie=Object(a.r)(w,H,C);return o.a.createElement(a.l,{width:F,height:X,margin:G,defs:ie,role:N},o.a.createElement(i.c,{width:U,height:Y,xScale:h?Q:null,yScale:v?K:null}),o.a.createElement(y,{layers:H,fillOpacity:j,borderWidth:x,getBorderColor:$,getTooltipLabel:oe,isInteractive:D}),o.a.createElement(i.a,{xScale:Q,yScale:K,width:U,height:Y,top:f,right:m,bottom:g,left:b}),P&&H.map((function(e){return o.a.createElement(k,{key:e.id,id:e.id,color:e.color,data:e.layer,dotComponent:T,position:S,getSize:ee,getColor:te,getBorderWidth:ne,getBorderColor:re})})),D&&M&&o.a.createElement(B,{slices:Z,height:Y,getTooltipValue:ae,getTooltipLabel:oe}),A.map((function(e,t){var n=H.map((function(e){return{id:e.id,label:e.id,color:e.color,fill:e.fill}})).reverse();return o.a.createElement(l.a,Object.assign({key:t},e,{containerWidth:U,containerHeight:Y,data:n}))})))}));R.defaultProps=z;var L=function(e){return o.a.createElement(a.k,null,(function(t){var n=t.width,r=t.height;return o.a.createElement(R,Object.assign({width:n,height:r},e))}))}},KXzt:function(e,t,n){var r=n("yjvR")("toUpperCase");e.exports=r},Kd9P:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var r=n("Z+yb"),o=n("UutA"),a=n("UmRm");function i(){var e=Object(r.a)(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "]);return l=function(){return e},e}var c=o.d.div.withConfig({displayName:"styled__FullWidthBanner",componentId:"sc-1iih7ob-0"})(["background:",";margin-bottom:40px;padding:20px;"],(function(e){return e.theme.colors.cardBackground})),u=o.d.div.withConfig({displayName:"styled__DescriptionBlock",componentId:"sc-1iih7ob-1"})(["max-width:800px;margin:0 auto 50px;"," ",""],a.a.tablet(l()),a.a.mobile(i())),d=o.d.div.withConfig({displayName:"styled__Card",componentId:"sc-1iih7ob-2"})(["background:",";box-shadow:",";"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.cardShadow}))},O4Im:function(e,t){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+r+"|"+o+")"+"?",u="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+[a,i,l].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),d="(?:"+[a+r+"?",r,i,l,n].join("|")+")",s=RegExp(o+"(?="+o+")|"+d+u,"g");e.exports=function(e){return e.match(s)||[]}},SAih:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},Sz22:function(e,t,n){"use strict";n.r(t);var r=n("mXGw"),o=n.n(r),a=n("Wbzz"),i=n("7oih"),l=n("vrFN"),c=n("kIY5"),u=n("5QYd"),d=n("PQXq"),s=n("J8Ov"),p=n("myAg"),f=n("6zZa"),m=n("Kd9P"),g=n("TurY"),b=function(){var e=Object(g.b)();return o.a.createElement(m.c,null,o.a.createElement("div",{className:"guide__illustrations"},o.a.createElement("div",{className:"guide__illustrations__item"},o.a.createElement(s.a,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:Object(f.c)(["a","b","c"],{size:7}),indexBy:"country",keys:["a","b","c"],offsetType:"expand",axisLeft:null,axisBottom:null,enableGridX:!1,defs:[Object(u.W)("example1.lines.1",{rotation:45,lineWidth:4,spacing:6,background:"transparent",color:"inherit"}),Object(u.W)("example1.lines.2",{rotation:-45,lineWidth:1,spacing:3,background:"transparent",color:"inherit"}),Object(u.V)("example1.dots",{background:"transparent",color:"inherit",size:4,padding:0,stagger:!0})],fill:[{match:{id:"a"},id:"example1.lines.1"},{match:{id:"b"},id:"example1.dots"},{match:{id:"c"},id:"example1.lines.2"}],borderWidth:2,borderColor:"#333",isInteractive:!1,animate:!1,theme:e.nivo})),o.a.createElement("div",{className:"guide__illustrations__item"},o.a.createElement(d.c,{margin:{top:15,right:-2,bottom:-2,left:-2},data:Object(f.c)(["a","b","c"],{size:7}),indexBy:"country",keys:["a","b","c"],colors:{scheme:"spectral"},padding:.3,axisLeft:null,axisBottom:null,enableGridY:!1,enableLabel:!1,colorBy:"index",defs:[Object(u.W)("example2.lines",{rotation:-45,lineWidth:4,spacing:6,background:"transparent",color:"inherit"}),Object(u.V)("example2.dots",{background:"transparent",color:"inherit",size:4,padding:0,stagger:!0}),Object(u.X)("example2.squares",{background:"transparent",color:"inherit",stagger:!0,size:8,padding:0})],fill:[{match:function(e){return e.data.index%3==0},id:"example2.lines"},{match:function(e){return e.data.index%3==1},id:"example2.dots"},{match:function(e){return e.data.index%3==2},id:"example2.squares"}],borderWidth:2,borderColor:"inherit",isInteractive:!1,animate:!1,theme:e.nivo})),o.a.createElement("div",{className:"guide__illustrations__item"},o.a.createElement(p.a,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:{country:"root",children:Object(f.c)(["value"],{size:9})},identity:"country",leavesOnly:!0,colors:{scheme:"spectral"},colorBy:"id",borderWidth:4,outerPadding:10,innerPadding:4,nodeOpacity:1,borderColor:"inherit",isInteractive:!1,animate:!1,enableLabel:!1,enableParentLabel:!1,defs:[Object(u.W)("example3.lines",{rotation:-45,lineWidth:4,spacing:6,background:"transparent",color:"inherit"})],fill:[{match:"*",id:"example3.lines"}],theme:e.nivo})),o.a.createElement("div",{className:"guide__illustrations__legend"},"patterns applied to various nivo components.")))},h=n("mBwQ"),y="\nimport { patternDotsDef, patternSquaresDef } from '@nivo/core'\nimport { Stream } from '@nivo/stream'\n\nconst MyChart = () => (\n    <Stream\n        data={/*…*/}\n        keys={['react', 'vue', 'elm']}\n        // 1. defining patterns\n        defs={[\n            // using helpers (cannot be used with http rendering API)\n            // will use color from current element\n            patternDotsDef('dots', { color: 'inherit' }),\n            // will use background color from current element\n            patternSquaresDef('squares', { background: 'inherit' }),\n            // using plain object\n            { id: 'custom', type: 'patternSquares', size: 24 },\n        ]}\n        // 2. defining rules to apply those patterns\n        fill={[\n            // match using query object\n            // (can be used with http rendering API\n            { match: { id: 'react' }, id: 'dots' },\n            // match using function\n            // (cannot be used with http rendering API\n            { match: d => d.id === 'vue', id: 'squares' },\n            // match all, will only affect 'elm' because once\n            // a rule match, others are skipped\n            // (can be used with http rendering API\n            { match: '*', id: 'custom' },\n        ]}\n    />\n)\n".trim(),v=function(){return o.a.createElement(h.a,{code:y,language:"jsx"})},O=n("Z+yb"),j=n("UutA"),x=n("UmRm"),E=n("hsa5"),k=n("85gc"),w=n.n(k),C=n("IMp1"),P=n.n(C),S=Object(j.d)(m.a).withConfig({displayName:"CollapsibleCard__Wrapper",componentId:"sc-1yvbjtm-0"})(["margin-bottom:15px;margin-bottom:",";svg{font-size:26px;}"],(function(e){return e.isExpanded?"30px":0})),T=j.d.div.withConfig({displayName:"CollapsibleCard__Header",componentId:"sc-1yvbjtm-1"})(["height:52px;width:100%;position:relative;padding:0 24px;cursor:pointer;color:",";display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.borderLight})),q=j.d.h3.withConfig({displayName:"CollapsibleCard__Title",componentId:"sc-1yvbjtm-2"})(["margin:0;color:",";"],(function(e){return e.theme.colors.text})),B=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleToggleClick=function(){var e=n.state.expanded;n.setState({expanded:!e})},n.state={expanded:t.expandedByDefault},n}return Object(E.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.children,r=this.state.expanded;return o.a.createElement(S,{isExpanded:r},o.a.createElement(T,{className:"no-select",onClick:this.handleToggleClick},o.a.createElement(q,null,t),r?o.a.createElement(w.a,null):o.a.createElement(P.a,null)),r&&o.a.createElement("div",{className:"card_body"},n))},t}(r.Component);B.defaultProps={expandedByDefault:!1};var W=n("WELh");function _(){var e=Object(O.a)(["\n        & {\n            padding: 20px 0;\n            border-bottom: 1px solid ",";\n        }\n    "]);return _=function(){return e},e}function z(){var e=Object(O.a)(["\n        & {\n            display: block;\n            max-height: none;\n        }\n    "]);return z=function(){return e},e}var D=j.d.div.withConfig({displayName:"GuideDemoBlock__Container",componentId:"sc-1j35ki3-0"})(["display:grid;grid-template-columns:4fr 6fr;grid-template-rows:4fr 6fr;max-height:600px;",""],x.a.mobile(z())),I=j.d.div.withConfig({displayName:"GuideDemoBlock__Preview",componentId:"sc-1j35ki3-1"})(["display:flex;align-items:center;justify-content:center;background:",";",""],(function(e){return e.theme.colors.cardAltBackground}),x.a.mobile(_(),(function(e){return e.theme.colors.borderLight}))),R=j.d.div.withConfig({displayName:"GuideDemoBlock__Code",componentId:"sc-1j35ki3-2"})(["grid-column-start:1;grid-row-start:2;overflow-x:hidden;overflow-y:auto;border-top:1px solid ",";"],(function(e){return e.theme.colors.borderLight})),L=j.d.div.withConfig({displayName:"GuideDemoBlock__Controls",componentId:"sc-1j35ki3-3"})(["background:",";border-left:1px solid ",";grid-row-start:1;grid-row-end:3;grid-column-start:2;overflow-x:hidden;overflow-y:auto;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.borderLight})),M=function(e){var t=e.title,n=e.initialSettings,a=e.controls,i=e.generateCode,l=e.children,c=Object(r.useState)(n),u=c[0],d=c[1];return o.a.createElement(B,{title:t,expandedByDefault:!0},o.a.createElement(D,null,o.a.createElement(I,null,l(u)),o.a.createElement(L,null,o.a.createElement(W.a,{name:t,controls:a,settings:u,onChange:d})),o.a.createElement(R,null,o.a.createElement(h.a,{language:"jsx",code:i(u)}))))},A=[{name:"size",type:"number",help:"dots size.",controlType:"range",defaultValue:u.h.defaultProps.size,controlOptions:{unit:"px",min:1,max:24}},{name:"padding",type:"number",help:"padding between dots.",controlType:"range",defaultValue:u.h.defaultProps.padding,controlOptions:{unit:"px",min:0,max:36}},{name:"stagger",type:"boolean",help:"staggered dots.",defaultValue:u.h.defaultProps.stagger,controlType:"switch"},{name:"background",type:"string",help:"pattern background color.",defaultValue:u.h.defaultProps.background,controlType:"colorPicker"},{name:"color",type:"string",help:"dots color.",defaultValue:u.h.defaultProps.color,controlType:"colorPicker"}],N={size:u.h.defaultProps.size,padding:u.h.defaultProps.padding,stagger:u.h.defaultProps.stagger,background:u.h.defaultProps.background,color:u.h.defaultProps.color},V=function(e){return("\n// helper\npatternDotsDef('dots-pattern', "+JSON.stringify(e,null,"  ")+")\n// plain object\n"+JSON.stringify(Object(u.V)("dots-pattern",e),null,"    ")+"\n").trim()},G=function(){return o.a.createElement(M,{title:"Dots",controls:A,initialSettings:N,generateCode:V},(function(e){return o.a.createElement("svg",{width:120,height:120},o.a.createElement(u.c,{defs:[Object(u.V)("dots-pattern",e)]}),o.a.createElement("rect",{width:120,height:120,fill:"url(#dots-pattern)"}))}))},U=[{name:"spacing",type:"number",help:"spacing between lines.",defaultValue:u.i.defaultProps.spacing,controlType:"range",controlOptions:{min:0,max:32}},{name:"rotation",type:"number",help:"lines rotation.",defaultValue:u.i.defaultProps.rotation,controlType:"angle",controlOptions:{start:90,min:-360,max:360}},{name:"lineWidth",type:"number",help:"lines thickness.",defaultValue:u.i.defaultProps.lineWidth,controlType:"lineWidth",controlOptions:{min:1}},{name:"background",type:"string",help:"pattern background color.",defaultValue:u.i.defaultProps.background,controlType:"colorPicker"},{name:"color",type:"string",help:"lines color.",defaultValue:u.i.defaultProps.color,controlType:"colorPicker"}],Y={spacing:u.i.defaultProps.spacing,rotation:u.i.defaultProps.rotation,lineWidth:u.i.defaultProps.lineWidth,background:u.i.defaultProps.background,color:u.i.defaultProps.color},F=function(e){return("\n// helper\npatternLinesDef('lines-pattern', "+JSON.stringify(e,null,"  ")+")\n// plain object\n"+JSON.stringify(Object(u.W)("lines-pattern",e),null,"    ")+"\n").trim()},X=function(){return o.a.createElement(M,{title:"Lines",controls:U,initialSettings:Y,generateCode:F},(function(e){return o.a.createElement("svg",{width:120,height:120},o.a.createElement(u.c,{defs:[Object(u.W)("lines-pattern",e)]}),o.a.createElement("rect",{width:120,height:120,fill:"url(#lines-pattern)"}))}))},J=[{name:"size",type:"number",help:"squares size.",defaultValue:u.j.defaultProps.size,controlType:"range",controlOptions:{unit:"px",min:1,max:24}},{name:"padding",type:"number",help:"padding between squares.",defaultValue:u.j.defaultProps.padding,controlType:"range",controlOptions:{unit:"px",min:0,max:36}},{name:"stagger",type:"boolean",help:"staggered squares.",defaultValue:u.j.defaultProps.stagger,controlType:"switch"},{name:"background",type:"string",help:"pattern background color.",defaultValue:u.j.defaultProps.background,controlType:"colorPicker"},{name:"color",type:"string",help:"squares color.",defaultValue:u.j.defaultProps.color,controlType:"colorPicker"}],Q={size:u.j.defaultProps.size,padding:u.j.defaultProps.padding,stagger:u.j.defaultProps.stagger,background:u.j.defaultProps.background,color:u.j.defaultProps.color},K=function(e){return("\n// helper\npatternSquaresDef('squares-pattern', "+JSON.stringify(e,null,"  ")+")\n// plain object\n"+JSON.stringify(Object(u.X)("squares-pattern",e),null,"    ")+"\n").trim()},H=function(){return o.a.createElement(M,{title:"Squares",controls:J,initialSettings:Q,generateCode:K},(function(e){return o.a.createElement("svg",{width:120,height:120},o.a.createElement(u.c,{defs:[Object(u.X)("squares-pattern",e)]}),o.a.createElement("rect",{width:120,height:120,fill:"url(#squares-pattern)"}))}))};t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(l.a,{title:"Patterns Guide"}),o.a.createElement(c.a,null,o.a.createElement("div",{className:"guide__header"},o.a.createElement("h1",null,"Patterns"))),o.a.createElement(m.b,null,o.a.createElement("h2",null,"Purpose"),o.a.createElement("p",null,"Using patterns can be useful to ",o.a.createElement("strong",null,"group similar items"),", for example imagine you want to build a pie chart displaying various foods, you can use a color scale to assign a unique color to each one, then you can group vegetables/fruits/meats/… using a similar pattern for each group (while keeping color variation)."),o.a.createElement("h2",null,"Using patterns in nivo"),o.a.createElement("p",null,"Defining patterns in nivo is a ",o.a.createElement("strong",null,"2 steps process"),", first you'll have to declare available definitions (the same goes for"," ",o.a.createElement(a.Link,{to:"/guides/gradients"},"gradients"),") using dedicated helpers or providing plain objects.",o.a.createElement("br",null),"Then you must define the rules to apply those definitions using the"," ",o.a.createElement("code",null,"fill")," property.")),o.a.createElement(b,null),o.a.createElement(m.b,null,o.a.createElement("p",null,o.a.createElement("strong",null,"Separating pattern definitions from application")," allows us to reuse those in various places, like fills and borders, and while maintaining a direct mapping for a bar chart with 5 items can be simple enough, when you're dealing with a complex heatmap with tens of nodes it can quickly become cumbersome. Doing so also provides the ability to"," ",o.a.createElement("strong",null,"use a pattern depending on chart element value"),". Last but not least,"," ",o.a.createElement("strong",null,"patterns colors can be inherited")," from current node ones."),o.a.createElement("h2",null,"Example"),o.a.createElement(v,null),o.a.createElement("h2",null,"Available patterns"),o.a.createElement(G,null),o.a.createElement(X,null),o.a.createElement(H,null),o.a.createElement("h2",null,"Known limitations"),o.a.createElement("p",null,"Please be aware that pattern usage has some limitations, it's"," ",o.a.createElement("strong",null,"not supported for canvas")," chart implementations for now, and tooltips involving colored chips will use plain element color.")))}},YIRF:function(e,t){e.exports=function(e){return e.split("")}},gPdB:function(e,t,n){var r=n("YIRF"),o=n("SAih"),a=n("O4Im");e.exports=function(e){return o(e)?a(e):r(e)}},kIY5:function(e,t,n){"use strict";var r=n("Z+yb"),o=n("UutA"),a=n("UmRm");function i(){var e=Object(r.a)(["\n        & {\n            margin: 0 15px;\n        }\n    "]);return i=function(){return e},e}function l(){var e=Object(r.a)(["\n        & {\n            margin: 0 30px;\n        }\n    "]);return l=function(){return e},e}t.a=o.d.div.withConfig({displayName:"PageContent",componentId:"xla6zc-0"})(["margin:0 50px;position:relative;"," ",""],a.a.tablet(l()),a.a.mobile(i()))},yjvR:function(e,t,n){var r=n("33Qb"),o=n("SAih"),a=n("gPdB"),i=n("zYYD");e.exports=function(e){return function(t){t=i(t);var n=o(t)?a(t):void 0,l=n?n[0]:t.charAt(0),c=n?r(n,1).join(""):t.slice(1);return l[e]()+c}}}}]);
//# sourceMappingURL=component---src-pages-guides-patterns-js-7d48b1666c3706d4587c.js.map