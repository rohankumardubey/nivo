(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{NNTJ:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return E})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return W})),r.d(t,"d",(function(){return V}));r("UKgA");var o=r("mXGw"),a=r.n(o),l=r("5QYd"),n=r("ySTC"),i=r("56Mt"),c=r("W0B4"),u=r.n(c),d=r("llhf"),s=r("wbYc"),f=r("fWs0");function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}y(y({},{data:u.a.arrayOf(u.a.object).isRequired,indexBy:u.a.oneOfType([u.a.string,u.a.func]).isRequired,keys:u.a.arrayOf(u.a.string).isRequired,minValue:u.a.oneOfType([u.a.oneOf(["auto"]),u.a.number]).isRequired,maxValue:u.a.oneOfType([u.a.oneOf(["auto"]),u.a.number]).isRequired,forceSquare:u.a.bool.isRequired,sizeVariation:u.a.number.isRequired,padding:u.a.number.isRequired,cellShape:u.a.oneOfType([u.a.oneOf(["rect","circle"]),u.a.func]).isRequired,cellOpacity:u.a.number.isRequired,cellBorderWidth:u.a.number.isRequired,cellBorderColor:d.k.isRequired,axisTop:n.d,axisRight:n.d,axisBottom:n.d,axisLeft:n.d,enableGridX:u.a.bool.isRequired,enableGridY:u.a.bool.isRequired,enableLabels:u.a.bool.isRequired,labelTextColor:d.k.isRequired,colors:l.Z.isRequired,nanColor:u.a.string,isInteractive:u.a.bool,onClick:u.a.func.isRequired,hoverTarget:u.a.oneOf(["cell","row","column","rowColumn"]).isRequired,cellHoverOpacity:u.a.number.isRequired,cellHoverOthersOpacity:u.a.number.isRequired,tooltipFormat:u.a.oneOfType([u.a.func,u.a.string]),tooltip:u.a.func,pixelRatio:u.a.number.isRequired}),{},{role:u.a.string.isRequired});var m={indexBy:"id",minValue:"auto",maxValue:"auto",forceSquare:!1,sizeVariation:0,padding:0,cellShape:"rect",cellOpacity:.85,cellBorderWidth:0,cellBorderColor:{from:"color"},axisTop:{},axisLeft:{},enableGridX:!1,enableGridY:!1,enableLabels:!0,labelTextColor:{from:"color",modifiers:[["darker",1.4]]},colors:"nivo",nanColor:"#000000",isInteractive:!0,onClick:l.U,hoverTarget:"rowColumn",cellHoverOpacity:1,cellHoverOthersOpacity:.35,pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1},p=y(y({},m),{},{role:"img"});function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function v(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}function g(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,a=!1,l=void 0;try{for(var n,i=e[Symbol.iterator]();!(o=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(c){a=!0,l=c}finally{try{o||null==i.return||i.return()}finally{if(a)throw l}}return r}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C={cell:function(e,t){return e.xKey===t.xKey&&e.yKey===t.yKey},row:function(e,t){return e.yKey===t.yKey},column:function(e,t){return e.xKey===t.xKey},rowColumn:function(e,t){return e.xKey===t.xKey||e.yKey===t.yKey}},j=function(e){var t=e.data,r=e.keys,a=e.indexBy,n=e.minValue,i=void 0===n?"auto":n,c=e.maxValue,u=void 0===c?"auto":c,f=e.width,h=e.height,b=e.padding,m=e.forceSquare,p=e.sizeVariation,O=e.colors,v=e.nanColor,j=e.cellOpacity,w=e.cellBorderColor,S=e.labelTextColor,T=e.hoverTarget,k=e.cellHoverOpacity,M=e.cellHoverOthersOpacity,R=x(Object(o.useState)(null),2),q=R[0],E=R[1],L=Object(l.rb)(a),B=Object(o.useMemo)((function(){return t.map(L)}),[t,L]),H=Object(o.useMemo)((function(){var e=r.length,o=t.length,a=Math.max((f-b*(e+1))/e,0),l=Math.max((h-b*(o+1))/o,0),n=0,i=0;if(!0===m){var c=Math.min(a,l);n=(f-(((a=c)+b)*e+b))/2,i=(h-(((l=c)+b)*o+b))/2}return{cellWidth:a,cellHeight:l,offsetX:n,offsetY:i}}),[t,r,f,h,b,m]),W=Object(o.useMemo)((function(){return{x:Object(s.d)(r.map((function(e,t){return function(e,t,r){return e*t+.5*t+r*e+r}(t,H.cellWidth,b)}))).domain(r),y:Object(s.d)(B.map((function(e,t){return function(e,t,r){return e*t+.5*t+r*e+r}(t,H.cellHeight,b)}))).domain(B)}}),[B,r,H,b]),V=Object(o.useMemo)((function(){var e=i,o=u;if("auto"===e||"auto"===o){var a=t.reduce((function(e,t){return e.concat(r.map((function(e){return t[e]})))}),[]);"auto"===e&&(e=Math.min.apply(Math,g(a))),"auto"===o&&(o=Math.max.apply(Math,g(a)))}return{min:Math.min(e,o),max:Math.max(o,e)}}),[t,r,i,u]),I=Object(o.useMemo)((function(){if(p>0)return Object(s.b)().range([1-p,1]).domain([V.min,V.max])}),[p,V]),K=Object(o.useMemo)((function(){return Object(l.M)(O).domain([V.min,V.max])}),[O,V]),A=Object(l.sb)(),P=Object(d.r)(w,A),z=Object(d.r)(S,A),Y=Object(o.useMemo)((function(){return function(e){var t=e.data,r=e.keys,o=e.getIndex,a=e.xScale,l=e.yScale,n=e.sizeScale,i=e.cellOpacity,c=e.cellWidth,u=e.cellHeight,d=e.colorScale,s=e.nanColor,f=e.getLabelTextColor,h=[];return t.forEach((function(e){r.forEach((function(t){var r=e[t],b=o(e),y=n?n(r):1,m=y*c,p=y*u,O={id:"".concat(t,".").concat(b),xKey:t,yKey:b,x:a(t),y:l(b),width:m,height:p,value:r,color:isNaN(r)?s:d(r),opacity:i};O.labelTextColor=f(O),h.push(O)}))})),h}({data:t,keys:r,getIndex:L,xScale:W.x,yScale:W.y,sizeScale:I,cellOpacity:j,cellWidth:H.cellWidth,cellHeight:H.cellHeight,colorScale:K,nanColor:v,getLabelTextColor:z})}),[t,r,L,W,I,j,H,K,v,z]),F=Object(o.useMemo)((function(){if(null===q)return Y;var e=C[T],t=Y.find((function(e){return e.id===q}));return Y.map((function(r){var o=e(r,t)?k:M;return o===r.opacity?r:y(y({},r),{},{opacity:o})}))}),[Y,q,T,k,M]);return y(y({cells:F,getIndex:L,xScale:W.x,yScale:W.y},H),{},{sizeScale:I,setCurrentCellId:E,colorScale:K,getCellBorderColor:P,getLabelTextColor:z})},w=function(e){var t=e.cells,r=e.cellComponent,o=e.cellBorderWidth,l=e.getCellBorderColor,n=e.enableLabels,i=e.getLabelTextColor,c=e.handleCellHover,u=e.handleCellLeave,d=e.onClick;return t.map((function(e){return a.a.createElement(r,{key:e.id,data:e,value:e.value,x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:e.opacity,borderWidth:o,borderColor:l(e),enableLabel:n,textColor:i(e),onHover:c?function(t){return c(e,t)}:void 0,onLeave:u,onClick:d})}))},S=function(e){var t=e.data,r=e.value,o=e.x,n=e.y,i=e.width,c=e.height,u=e.color,d=e.opacity,s=e.borderWidth,h=e.borderColor,b=e.enableLabel,m=e.textColor,p=e.onHover,O=e.onLeave,v=e.onClick,g=Object(l.sb)(),x=Object(l.qb)(),C=x.animate,j=x.config,w=Object(f.useSpring)({transform:"translate(".concat(o,", ").concat(n,")"),width:i,height:c,xOffset:-.5*i,yOffset:-.5*c,color:u,opacity:d,textColor:m,borderWidth:s,borderColor:h,config:j,immediate:!C});return a.a.createElement(f.animated.g,{transform:w.transform,style:{cursor:"pointer"},onMouseEnter:p,onMouseMove:p,onMouseLeave:O,onClick:v?function(e){return v(t,e)}:void 0},a.a.createElement(f.animated.rect,{x:w.xOffset,y:w.yOffset,width:w.width,height:w.height,fill:w.color,fillOpacity:w.opacity,strokeWidth:w.borderWidth,stroke:w.borderColor,strokeOpacity:w.opacity}),b&&a.a.createElement(f.animated.text,{dominantBaseline:"central",textAnchor:"middle",style:y(y({},g.labels.text),{},{fill:w.textColor}),fillOpacity:w.opacity},r))},T=Object(o.memo)(S),k=function(e){var t=e.data,r=e.value,o=e.x,n=e.y,i=e.width,c=e.height,u=e.color,d=e.opacity,s=e.borderWidth,h=e.borderColor,b=e.enableLabel,m=e.textColor,p=e.onHover,O=e.onLeave,v=e.onClick,g=Object(l.sb)(),x=Object(l.qb)(),C=x.animate,j=x.config,w=Object(f.useSpring)({transform:"translate(".concat(o,", ").concat(n,")"),radius:Math.min(i,c)/2,color:u,opacity:d,textColor:m,borderWidth:s,borderColor:h,config:j,immediate:!C});return a.a.createElement(f.animated.g,{transform:w.transform,style:{cursor:"pointer"},onMouseEnter:p,onMouseMove:p,onMouseLeave:O,onClick:v?function(e){return v(t,e)}:void 0},a.a.createElement(f.animated.circle,{r:w.radius,fill:w.color,fillOpacity:w.opacity,strokeWidth:w.borderWidth,stroke:w.borderColor,strokeOpacity:w.opacity}),b&&a.a.createElement(f.animated.text,{dominantBaseline:"central",textAnchor:"middle",style:y(y({},g.labels.text),{},{fill:w.textColor}),fillOpacity:w.opacity},r))},M=Object(o.memo)(k),R=function(e){var t=e.cell,r=e.format,o=e.tooltip;return a.a.createElement(i.a,{id:"".concat(t.yKey," - ").concat(t.xKey),value:t.value,enableChip:!0,color:t.color,format:r,renderContent:"function"==typeof o?o.bind(null,y({},t)):null})},q=Object(o.memo)(R),E=Object(l.ub)((function(e){var t,r=e.data,c=e.keys,u=e.indexBy,d=e.minValue,s=e.maxValue,f=e.width,h=e.height,b=e.margin,y=e.forceSquare,m=e.padding,p=e.sizeVariation,O=e.cellShape,v=e.cellOpacity,g=e.cellBorderWidth,x=e.cellBorderColor,C=e.axisTop,S=e.axisRight,k=e.axisBottom,R=e.axisLeft,E=e.enableGridX,L=e.enableGridY,B=e.enableLabels,H=e.labelTextColor,W=e.colors,V=e.nanColor,I=e.isInteractive,K=e.onClick,A=e.hoverTarget,P=e.cellHoverOpacity,z=e.cellHoverOthersOpacity,Y=e.tooltipFormat,F=e.tooltip,G=e.role,X=Object(l.ob)(f,h,b),N=X.margin,D=X.innerWidth,J=X.innerHeight,U=X.outerWidth,Q=X.outerHeight,Z=j({data:r,keys:c,indexBy:u,minValue:d,maxValue:s,width:D,height:J,padding:m,forceSquare:y,sizeVariation:p,colors:W,nanColor:V,cellOpacity:v,cellBorderColor:x,labelTextColor:H,hoverTarget:A,cellHoverOpacity:P,cellHoverOthersOpacity:z}),$=Z.cells,_=Z.xScale,ee=Z.yScale,te=Z.offsetX,re=Z.offsetY,oe=Z.setCurrentCellId,ae=Z.getCellBorderColor,le=Z.getLabelTextColor,ne=Object(i.i)(),ie=ne.showTooltipFromEvent,ce=ne.hideTooltip,ue=Object(o.useCallback)((function(e,t){oe(e.id),ie(a.a.createElement(q,{cell:e,format:Y,tooltip:F}),t)}),[oe,ie,Y,F]),de=Object(o.useCallback)((function(){oe(null),ce()}),[oe,ce]);return t="rect"===O?T:"circle"===O?M:O,a.a.createElement(l.l,{width:U,height:Q,margin:Object.assign({},N,{top:N.top+re,left:N.left+te}),role:G},a.a.createElement(n.c,{width:D-2*te,height:J-2*re,xScale:E?_:null,yScale:L?ee:null}),a.a.createElement(n.a,{xScale:_,yScale:ee,width:D-2*te,height:J-2*re,top:C,right:S,bottom:k,left:R}),a.a.createElement(w,{cells:$,cellComponent:t,cellBorderWidth:g,getCellBorderColor:ae,enableLabels:B,getLabelTextColor:le,handleCellHover:I?ue:void 0,handleCellLeave:I?de:void 0,onClick:I?K:void 0}))}));E.defaultProps=p;var L=function(e,t,r){var o=t.enableLabels,a=t.theme,l=r.x,n=r.y,i=r.width,c=r.height,u=r.color,d=r.opacity,s=r.labelTextColor,f=r.value;e.save(),e.globalAlpha=d,e.fillStyle=u,e.fillRect(l-i/2,n-c/2,i,c),!0===o&&(e.fillStyle=s,e.font="".concat(a.labels.text.fontSize,"px ").concat(a.labels.text.fontFamily),e.fillText(f,l,n)),e.restore()},B=function(e,t,r){var o=t.enableLabels,a=t.theme,l=r.x,n=r.y,i=r.width,c=r.height,u=r.color,d=r.opacity,s=r.labelTextColor,f=r.value;e.save(),e.globalAlpha=d;var h=Math.min(i,c)/2;e.fillStyle=u,e.beginPath(),e.arc(l,n,h,0,2*Math.PI),e.fill(),!0===o&&(e.fillStyle=s,e.font="".concat(a.labels.text.fontSize,"px ").concat(a.labels.text.fontFamily),e.fillText(f,l,n)),e.restore()},H=Object(l.ub)((function(e){var t=e.data,r=e.keys,c=e.indexBy,u=e.minValue,d=e.maxValue,s=e.width,f=e.height,h=e.margin,b=e.forceSquare,y=e.padding,m=e.sizeVariation,p=e.cellShape,O=e.cellOpacity,v=e.cellBorderColor,g=e.axisTop,C=e.axisRight,w=e.axisBottom,S=e.axisLeft,T=e.enableLabels,k=e.labelTextColor,M=e.colors,R=e.nanColor,E=e.isInteractive,H=e.onClick,W=e.hoverTarget,V=e.cellHoverOpacity,I=e.cellHoverOthersOpacity,K=e.tooltipFormat,A=e.tooltip,P=e.pixelRatio,z=Object(o.useRef)(null),Y=Object(l.ob)(s,f,h),F=Y.margin,G=Y.innerWidth,X=Y.innerHeight,N=Y.outerWidth,D=Y.outerHeight,J=j({data:t,keys:r,indexBy:c,minValue:u,maxValue:d,width:G,height:X,padding:y,forceSquare:b,sizeVariation:m,colors:M,nanColor:R,cellOpacity:O,cellBorderColor:v,labelTextColor:k,hoverTarget:W,cellHoverOpacity:V,cellHoverOthersOpacity:I}),U=J.cells,Q=J.xScale,Z=J.yScale,$=J.offsetX,_=J.offsetY,ee=J.currentCellId,te=J.setCurrentCellId,re=Object(l.sb)();Object(o.useEffect)((function(){z.current.width=N*P,z.current.height=D*P;var e,t=z.current.getContext("2d");t.scale(P,P),t.fillStyle=re.background,t.fillRect(0,0,N,D),t.translate(F.left+$,F.top+_),Object(n.e)(t,{xScale:Q,yScale:Z,width:G-2*$,height:X-2*_,top:g,right:C,bottom:w,left:S,theme:re}),t.textAlign="center",t.textBaseline="middle",e="rect"===p?L:B,U.forEach((function(r){e(t,{enableLabels:T,theme:re},r)}))}),[z,U,N,D,G,X,F,$,_,p,g,C,w,S,re,T,P]);var oe=Object(i.i)(),ae=oe.showTooltipFromEvent,le=oe.hideTooltip,ne=Object(o.useCallback)((function(e){var t=x(Object(l.L)(z.current,e),2),r=t[0],o=t[1],n=U.find((function(e){return Object(l.N)(e.x+F.left+$-e.width/2,e.y+F.top+_-e.height/2,e.width,e.height,r,o)}));void 0!==n?(te(n.id),ae(a.a.createElement(q,{cell:n,tooltip:A,format:K}),e)):(te(null),le())}),[z,U,F,$,_,te,ae,le,A]),ie=Object(o.useCallback)((function(){te(null),le()}),[te,le]),ce=Object(o.useCallback)((function(e){if(null!==ee){var t=U.find((function(e){return e.id===ee}));t&&H(t,e)}}),[U,ee,H]);return a.a.createElement("canvas",{ref:z,width:N*P,height:D*P,style:{width:N,height:D},onMouseEnter:E?ne:void 0,onMouseMove:E?ne:void 0,onMouseLeave:E?ie:void 0,onClick:E?ce:void 0})}));H.defaultProps=m;var W=function(e){return a.a.createElement(l.k,null,(function(t){var r=t.width,o=t.height;return a.a.createElement(E,Object.assign({width:r,height:o},e))}))},V=function(e){return a.a.createElement(l.k,null,(function(t){var r=t.width,o=t.height;return a.a.createElement(H,Object.assign({width:r,height:o},e))}))}}).call(this,r("pCvA"))}}]);
//# sourceMappingURL=288594faa4f4df84db7f04ec3315d48a3b666501-3139b7ab064d54620c51.js.map