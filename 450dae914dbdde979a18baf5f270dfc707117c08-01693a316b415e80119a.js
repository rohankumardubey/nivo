"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[4570],{85473:function(e,t,n){n.d(t,{by:function(){return j},Y2:function(){return S},ni:function(){return E},lG:function(){return R}});var r=n(27378),i=n(45434),a=n(30042),o=n(47425),l=n(24246),s=n(3583);function d(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function u(e){return e}var c=n(79074);var f=n(79234),v=n(89193);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=function(e){var t=e.width,n=e.height,r=e.legends,i=e.data,a=e.toggleSerie;return(0,l.jsx)(l.Fragment,{children:r.map((function(e,r){var s;return(0,l.jsx)(o.$6,b(b({},e),{},{containerWidth:t,containerHeight:n,data:null!==(s=e.data)&&void 0!==s?s:i,toggleSerie:e.toggleSerie?a:void 0}),r)}))})};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function A(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y,R={id:"id",value:"value",sortByValue:!1,innerRadius:0,padAngle:0,cornerRadius:0,layers:["arcLinkLabels","arcs","arcLabels","legends"],startAngle:0,endAngle:360,fit:!0,activeInnerRadiusOffset:0,activeOuterRadiusOffset:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableArcLabels:!0,arcLabel:"formattedValue",arcLabelsSkipAngle:0,arcLabelsRadiusOffset:.5,arcLabelsTextColor:{theme:"labels.text.fill"},enableArcLinkLabels:!0,arcLinkLabel:"id",arcLinkLabelsSkipAngle:0,arcLinkLabelsOffset:0,arcLinkLabelsDiagonalLength:16,arcLinkLabelsStraightLength:24,arcLinkLabelsThickness:1,arcLinkLabelsTextOffset:6,arcLinkLabelsTextColor:{theme:"labels.text.fill"},arcLinkLabelsColor:{theme:"axis.ticks.line.stroke"},colors:{scheme:"nivo"},defs:[],fill:[],isInteractive:!0,animate:!0,motionConfig:"gentle",transitionMode:"innerRadius",tooltip:function(e){var t=e.datum;return(0,l.jsx)(v._5,{id:t.id,value:t.formattedValue,enableChip:!0,color:t.color})},legends:[],role:"img",pixelRatio:"undefined"!=typeof window&&null!==(y=window.devicePixelRatio)&&void 0!==y?y:1},x=function(e){var t=e.data,n=e.id,a=void 0===n?R.id:n,o=e.value,l=void 0===o?R.value:o,s=e.valueFormat,d=e.colors,u=void 0===d?R.colors:d,c=(0,i.LR)(a),v=(0,i.LR)(l),g=(0,i.O_)(s),h=(0,f.U)(u,"id");return(0,r.useMemo)((function(){return t.map((function(e){var t,n=c(e),r=v(e),i={id:n,label:null!==(t=e.label)&&void 0!==t?t:n,hidden:!1,value:r,formattedValue:g(r),data:e};return b(b({},i),{},{color:h(i)})}))}),[t,c,v,g,h])},C=function(e){var t=e.data,n=e.startAngle,a=e.endAngle,o=e.innerRadius,l=e.outerRadius,f=e.padAngle,v=e.sortByValue,g=e.activeId,h=e.activeInnerRadiusOffset,L=e.activeOuterRadiusOffset,p=e.hiddenIds,m=(0,r.useMemo)((function(){var e=function(){var e=u,t=d,n=null,r=(0,s.Z)(0),i=(0,s.Z)(c.BZ),a=(0,s.Z)(0);function o(o){var l,s,d,u,f,v=o.length,g=0,h=new Array(v),b=new Array(v),L=+r.apply(this,arguments),p=Math.min(c.BZ,Math.max(-c.BZ,i.apply(this,arguments)-L)),m=Math.min(Math.abs(p)/v,a.apply(this,arguments)),k=m*(p<0?-1:1);for(l=0;l<v;++l)(f=b[h[l]=l]=+e(o[l],l,o))>0&&(g+=f);for(null!=t?h.sort((function(e,n){return t(b[e],b[n])})):null!=n&&h.sort((function(e,t){return n(o[e],o[t])})),l=0,d=g?(p-v*k)/g:0;l<v;++l,L=u)s=h[l],u=L+((f=b[s])>0?f*d:0)+k,b[s]={data:o[s],index:l,value:f,startAngle:L,endAngle:u,padAngle:m};return b}return o.value=function(t){return arguments.length?(e="function"==typeof t?t:(0,s.Z)(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r="function"==typeof e?e:(0,s.Z)(+e),o):r},o.endAngle=function(e){return arguments.length?(i="function"==typeof e?e:(0,s.Z)(+e),o):i},o.padAngle=function(e){return arguments.length?(a="function"==typeof e?e:(0,s.Z)(+e),o):a},o}().value((function(e){return e.value})).startAngle((0,i.Ht)(n)).endAngle((0,i.Ht)(a)).padAngle((0,i.Ht)(f));return v||e.sortValues(null),e}),[n,a,f,v]);return(0,r.useMemo)((function(){var e=t.filter((function(e){return!p.includes(e.id)}));return{dataWithArc:m(e).map((function(e){var t=Math.abs(e.endAngle-e.startAngle);return b(b({},e.data),{},{arc:{index:e.index,startAngle:e.startAngle,endAngle:e.endAngle,innerRadius:g===e.data.id?o-h:o,outerRadius:g===e.data.id?l+L:l,thickness:l-o,padAngle:e.padAngle,angle:t,angleDeg:(0,i.vi)(t)}})})),legendData:t.map((function(e){return b(b({},e),{},{hidden:p.includes(e.id)})}))}}),[m,t,p,g,o,h,l,L])},M=function(e){var t=e.data,n=e.width,o=e.height,l=e.innerRadius,s=void 0===l?R.innerRadius:l,d=e.startAngle,u=void 0===d?R.startAngle:d,c=e.endAngle,f=void 0===c?R.endAngle:c,v=e.padAngle,g=void 0===v?R.padAngle:v,h=e.sortByValue,p=void 0===h?R.sortByValue:h,m=e.cornerRadius,k=void 0===m?R.cornerRadius:m,y=e.fit,x=void 0===y?R.fit:y,M=e.activeInnerRadiusOffset,w=void 0===M?R.activeInnerRadiusOffset:M,I=e.activeOuterRadiusOffset,j=void 0===I?R.activeOuterRadiusOffset:I,S=O((0,r.useState)(null),2),W=S[0],T=S[1],E=O((0,r.useState)([]),2),B=E[0],V=E[1],D=(0,r.useMemo)((function(){var e,t=Math.min(n,o)/2,r=t*Math.min(s,1),i=n/2,l=o/2;if(x){var d=(0,a.CU)(i,l,t,u-90,f-90),c=d.points,v=L(d,["points"]),g=Math.min(n/v.width,o/v.height),h={width:v.width*g,height:v.height*g};h.x=(n-h.width)/2,h.y=(o-h.height)/2,i=(i-v.x)/v.width*v.width*g+h.x,l=(l-v.y)/v.height*v.height*g+h.y,e={box:v,ratio:g,points:c},t*=g,r*=g}return{centerX:i,centerY:l,radius:t,innerRadius:r,debug:e}}),[n,o,s,u,f,x,k]),P=C({data:t,startAngle:u,endAngle:f,innerRadius:D.innerRadius,outerRadius:D.radius,padAngle:g,sortByValue:p,activeId:W,activeInnerRadiusOffset:w,activeOuterRadiusOffset:j,hiddenIds:B}),G=(0,r.useCallback)((function(e){V((function(t){return t.indexOf(e)>-1?t.filter((function(t){return t!==e})):[].concat(A(t),[e])}))}),[]);return b(b({arcGenerator:(0,a.aG)({cornerRadius:k,padAngle:(0,i.Ht)(g)}),setActiveId:T,toggleSerie:G},P),D)},w=function(e){var t=e.center,n=e.data,i=e.arcGenerator,o=e.borderWidth,s=e.borderColor,d=e.isInteractive,u=e.onClick,c=e.onMouseEnter,f=e.onMouseMove,g=e.onMouseLeave,h=e.setActiveId,b=e.tooltip,L=e.transitionMode,p=(0,v.lL)(),m=p.showTooltipFromEvent,k=p.hideTooltip,A=(0,r.useMemo)((function(){if(d)return function(e,t){null==u||u(e,t)}}),[d,u]),O=(0,r.useMemo)((function(){if(d)return function(e,t){m((0,r.createElement)(b,{datum:e}),t),h(e.id),null==c||c(e,t)}}),[d,m,h,c]),y=(0,r.useMemo)((function(){if(d)return function(e,t){m((0,r.createElement)(b,{datum:e}),t),null==f||f(e,t)}}),[d,m,f]),R=(0,r.useMemo)((function(){if(d)return function(e,t){k(),h(null),null==g||g(e,t)}}),[d,k,h,g]);return(0,l.jsx)(a.Bs,{center:t,data:n,arcGenerator:i,borderWidth:o,borderColor:s,transitionMode:L,onClick:A,onMouseEnter:O,onMouseMove:y,onMouseLeave:R})},I=function(e){var t=e.data,n=e.id,o=void 0===n?R.id:n,s=e.value,d=void 0===s?R.value:s,u=e.valueFormat,c=e.sortByValue,f=void 0===c?R.sortByValue:c,v=e.layers,g=void 0===v?R.layers:v,h=e.startAngle,b=void 0===h?R.startAngle:h,L=e.endAngle,m=void 0===L?R.endAngle:L,k=e.padAngle,A=void 0===k?R.padAngle:k,O=e.fit,y=void 0===O?R.fit:O,C=e.innerRadius,I=void 0===C?R.innerRadius:C,j=e.cornerRadius,S=void 0===j?R.cornerRadius:j,W=e.activeInnerRadiusOffset,T=void 0===W?R.activeInnerRadiusOffset:W,E=e.activeOuterRadiusOffset,B=void 0===E?R.activeOuterRadiusOffset:E,V=e.width,D=e.height,P=e.margin,G=e.colors,F=void 0===G?R.colors:G,H=e.borderWidth,Z=void 0===H?R.borderWidth:H,X=e.borderColor,Y=void 0===X?R.borderColor:X,U=e.enableArcLabels,_=void 0===U?R.enableArcLabels:U,N=e.arcLabel,$=void 0===N?R.arcLabel:N,z=e.arcLabelsSkipAngle,q=void 0===z?R.arcLabelsSkipAngle:z,J=e.arcLabelsTextColor,K=void 0===J?R.arcLabelsTextColor:J,Q=e.arcLabelsRadiusOffset,ee=void 0===Q?R.arcLabelsRadiusOffset:Q,te=e.arcLabelsComponent,ne=e.enableArcLinkLabels,re=void 0===ne?R.enableArcLinkLabels:ne,ie=e.arcLinkLabel,ae=void 0===ie?R.arcLinkLabel:ie,oe=e.arcLinkLabelsSkipAngle,le=void 0===oe?R.arcLinkLabelsSkipAngle:oe,se=e.arcLinkLabelsOffset,de=void 0===se?R.arcLinkLabelsOffset:se,ue=e.arcLinkLabelsDiagonalLength,ce=void 0===ue?R.arcLinkLabelsDiagonalLength:ue,fe=e.arcLinkLabelsStraightLength,ve=void 0===fe?R.arcLinkLabelsStraightLength:fe,ge=e.arcLinkLabelsThickness,he=void 0===ge?R.arcLinkLabelsThickness:ge,be=e.arcLinkLabelsTextOffset,Le=void 0===be?R.arcLinkLabelsTextOffset:be,pe=e.arcLinkLabelsTextColor,me=void 0===pe?R.arcLinkLabelsTextColor:pe,ke=e.arcLinkLabelsColor,Ae=void 0===ke?R.arcLinkLabelsColor:ke,Oe=e.arcLinkLabelComponent,ye=e.defs,Re=void 0===ye?R.defs:ye,xe=e.fill,Ce=void 0===xe?R.fill:xe,Me=e.isInteractive,we=void 0===Me?R.isInteractive:Me,Ie=e.onClick,je=e.onMouseEnter,Se=e.onMouseMove,We=e.onMouseLeave,Te=e.tooltip,Ee=void 0===Te?R.tooltip:Te,Be=e.transitionMode,Ve=void 0===Be?R.transitionMode:Be,De=e.legends,Pe=void 0===De?R.legends:De,Ge=e.role,Fe=void 0===Ge?R.role:Ge,He=(0,i.Bs)(V,D,P),Ze=He.outerWidth,Xe=He.outerHeight,Ye=He.margin,Ue=He.innerWidth,_e=He.innerHeight,Ne=x({data:t,id:o,value:d,valueFormat:u,colors:F}),$e=M({data:Ne,width:Ue,height:_e,fit:y,innerRadius:I,startAngle:b,endAngle:m,padAngle:A,sortByValue:f,cornerRadius:S,activeInnerRadiusOffset:T,activeOuterRadiusOffset:B}),ze=$e.dataWithArc,qe=$e.legendData,Je=$e.arcGenerator,Ke=$e.centerX,Qe=$e.centerY,et=$e.radius,tt=$e.innerRadius,nt=$e.setActiveId,rt=$e.toggleSerie,it=(0,i.yU)(Re,ze,Ce),at={arcLinkLabels:null,arcs:null,arcLabels:null,legends:null};re&&g.includes("arcLinkLabels")&&(at.arcLinkLabels=(0,l.jsx)(a._D,{center:[Ke,Qe],data:ze,label:ae,skipAngle:le,offset:de,diagonalLength:ce,straightLength:ve,strokeWidth:he,textOffset:Le,textColor:me,linkColor:Ae,component:Oe},"arcLinkLabels")),g.includes("arcs")&&(at.arcs=(0,l.jsx)(w,{center:[Ke,Qe],data:ze,arcGenerator:Je,borderWidth:Z,borderColor:Y,isInteractive:we,onClick:Ie,onMouseEnter:je,onMouseMove:Se,onMouseLeave:We,setActiveId:nt,tooltip:Ee,transitionMode:Ve},"arcs")),_&&g.includes("arcLabels")&&(at.arcLabels=(0,l.jsx)(a.Xr,{center:[Ke,Qe],data:ze,label:$,radiusOffset:ee,skipAngle:q,textColor:K,transitionMode:Ve,component:te},"arcLabels")),Pe.length>0&&g.includes("legends")&&(at.legends=(0,l.jsx)(p,{width:Ue,height:_e,data:qe,legends:Pe,toggleSerie:rt},"legends"));var ot=function(e){var t=e.dataWithArc,n=e.arcGenerator,i=e.centerX,a=e.centerY,o=e.radius,l=e.innerRadius;return(0,r.useMemo)((function(){return{dataWithArc:t,arcGenerator:n,centerX:i,centerY:a,radius:o,innerRadius:l}}),[t,n,i,a,o,l])}({dataWithArc:ze,arcGenerator:Je,centerX:Ke,centerY:Qe,radius:et,innerRadius:tt});return(0,l.jsx)(i.tM,{width:Ze,height:Xe,margin:Ye,defs:it,role:Fe,children:g.map((function(e,t){return void 0!==at[e]?at[e]:"function"==typeof e?(0,l.jsx)(r.Fragment,{children:(0,r.createElement)(e,ot)},t):null}))})},j=function(e){var t=e.isInteractive,n=void 0===t?R.isInteractive:t,r=e.animate,a=void 0===r?R.animate:r,o=e.motionConfig,s=void 0===o?R.motionConfig:o,d=e.theme,u=e.renderWrapper,c=L(e,["isInteractive","animate","motionConfig","theme","renderWrapper"]);return(0,l.jsx)(i.W2,{animate:a,isInteractive:n,motionConfig:s,renderWrapper:u,theme:d,children:(0,l.jsx)(I,b({isInteractive:n},c))})},S=function(e){return(0,l.jsx)(i.d,{children:function(t){var n=t.width,r=t.height;return(0,l.jsx)(j,b({width:n,height:r},e))}})},W=function(e){var t=e.data,n=e.id,s=void 0===n?R.id:n,d=e.value,u=void 0===d?R.value:d,c=e.valueFormat,g=e.sortByValue,h=void 0===g?R.sortByValue:g,L=e.startAngle,p=void 0===L?R.startAngle:L,m=e.endAngle,k=void 0===m?R.endAngle:m,A=e.padAngle,y=void 0===A?R.padAngle:A,C=e.fit,w=void 0===C?R.fit:C,I=e.innerRadius,j=void 0===I?R.innerRadius:I,S=e.cornerRadius,W=void 0===S?R.cornerRadius:S,T=e.activeInnerRadiusOffset,E=void 0===T?R.activeInnerRadiusOffset:T,B=e.activeOuterRadiusOffset,V=void 0===B?R.activeOuterRadiusOffset:B,D=e.width,P=e.height,G=e.margin,F=e.pixelRatio,H=void 0===F?1:F,Z=e.colors,X=void 0===Z?R.colors:Z,Y=e.borderWidth,U=void 0===Y?R.borderWidth:Y,_=e.borderColor,N=void 0===_?R.borderColor:_,$=e.enableArcLabels,z=void 0===$?R.enableArcLabels:$,q=e.arcLabel,J=void 0===q?R.arcLabel:q,K=e.arcLabelsSkipAngle,Q=void 0===K?R.arcLabelsSkipAngle:K,ee=e.arcLabelsTextColor,te=void 0===ee?R.arcLabelsTextColor:ee,ne=e.arcLabelsRadiusOffset,re=void 0===ne?R.arcLabelsRadiusOffset:ne,ie=e.enableArcLinkLabels,ae=void 0===ie?R.enableArcLinkLabels:ie,oe=e.arcLinkLabel,le=void 0===oe?R.arcLinkLabel:oe,se=e.arcLinkLabelsSkipAngle,de=void 0===se?R.arcLinkLabelsSkipAngle:se,ue=e.arcLinkLabelsOffset,ce=void 0===ue?R.arcLinkLabelsOffset:ue,fe=e.arcLinkLabelsDiagonalLength,ve=void 0===fe?R.arcLinkLabelsDiagonalLength:fe,ge=e.arcLinkLabelsStraightLength,he=void 0===ge?R.arcLinkLabelsStraightLength:ge,be=e.arcLinkLabelsThickness,Le=void 0===be?R.arcLinkLabelsThickness:be,pe=e.arcLinkLabelsTextOffset,me=void 0===pe?R.arcLinkLabelsTextOffset:pe,ke=e.arcLinkLabelsTextColor,Ae=void 0===ke?R.arcLinkLabelsTextColor:ke,Oe=e.arcLinkLabelsColor,ye=void 0===Oe?R.arcLinkLabelsColor:Oe,Re=e.isInteractive,xe=void 0===Re?R.isInteractive:Re,Ce=e.onClick,Me=e.onMouseMove,we=e.tooltip,Ie=void 0===we?R.tooltip:we,je=e.legends,Se=void 0===je?R.legends:je,We=(0,r.useRef)(null),Te=(0,i.Fg)(),Ee=(0,i.Bs)(D,P,G),Be=Ee.margin,Ve=Ee.innerWidth,De=Ee.innerHeight,Pe=Ee.outerWidth,Ge=Ee.outerHeight,Fe=x({data:t,id:s,value:u,valueFormat:c,colors:X}),He=M({data:Fe,width:Ve,height:De,fit:w,innerRadius:j,startAngle:p,endAngle:k,padAngle:y,sortByValue:h,cornerRadius:W,activeInnerRadiusOffset:E,activeOuterRadiusOffset:V}),Ze=He.dataWithArc,Xe=He.arcGenerator,Ye=He.centerX,Ue=He.centerY,_e=He.radius,Ne=He.innerRadius,$e=He.setActiveId,ze=(0,f.Bf)(N,Te),qe=(0,a.DW)({data:Ze,label:J,skipAngle:Q,offset:re,textColor:te}),Je=(0,a.Uz)({data:Ze,skipAngle:de,offset:ce,diagonalLength:ve,straightLength:he,label:le,linkColor:ye,textOffset:me,textColor:Ae});(0,r.useEffect)((function(){if(We.current){We.current.width=Pe*H,We.current.height=Ge*H;var e=We.current.getContext("2d");e.scale(H,H),e.fillStyle=Te.background,e.fillRect(0,0,Pe,Ge),e.save(),e.translate(Be.left,Be.top),Xe.context(e),e.save(),e.translate(Ye,Ue),Ze.forEach((function(t){e.beginPath(),e.fillStyle=t.color,e.strokeStyle=ze(t),e.lineWidth=U,Xe(t.arc),e.fill(),U>0&&e.stroke()})),!0===ae&&(0,a.Vf)(e,Je,Te,Le),!0===z&&(0,a.N5)(e,qe,Te),e.restore(),Se.forEach((function(t){(0,o.as)(e,b(b({},t),{},{data:Ze,containerWidth:Ve,containerHeight:De,theme:Te}))}))}}),[We,Ve,De,Pe,Ge,Be.top,Be.left,H,Ye,Ue,Xe,Ze,ze,z,qe,ae,Je,Le,Se,Te]);var Ke=(0,r.useMemo)((function(){return Ze.map((function(e){return b({id:e.id},e.arc)}))}),[Ze]),Qe=function(e){if(!We.current)return null;var t=O((0,i.P6)(We.current,e),2),n=t[0],r=t[1],o=(0,a.oO)(Be.left+Ye,Be.top+Ue,_e,Ne,Ke,n,r);return o?Ze.find((function(e){return e.id===o.id})):null},et=(0,v.lL)(),tt=et.showTooltipFromEvent,nt=et.hideTooltip,rt=function(e){var t=Qe(e);t?(null==Me||Me(t,e),$e(t.id),tt((0,r.createElement)(Ie,{datum:t}),e)):($e(null),nt())};return(0,l.jsx)("canvas",{ref:We,width:Pe*H,height:Ge*H,style:{width:Pe,height:Ge,cursor:xe?"auto":"normal"},onMouseEnter:xe?rt:void 0,onMouseMove:xe?rt:void 0,onMouseLeave:xe?function(){nt()}:void 0,onClick:xe?function(e){if(Ce){var t=Qe(e);t&&Ce(t,e)}}:void 0})},T=function(e){var t=e.isInteractive,n=void 0===t?R.isInteractive:t,r=e.theme,a=e.renderWrapper,o=L(e,["isInteractive","theme","renderWrapper"]);return(0,l.jsx)(i.W2,{isInteractive:n,renderWrapper:a,theme:r,children:(0,l.jsx)(W,b({isInteractive:n},o))})},E=function(e){return(0,l.jsx)(i.d,{children:function(t){var n=t.width,r=t.height;return(0,l.jsx)(T,b({width:n,height:r},e))}})}}}]);
//# sourceMappingURL=450dae914dbdde979a18baf5f270dfc707117c08-01693a316b415e80119a.js.map