(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"3r/D":function(e,t,n){"use strict";n.r(t);var a=n("Eo5u"),r=n("mXGw"),o=n.n(r),i=n("vrFN"),l=n("vrO3"),s=n("egfL"),c=n("8fPj"),u=n("49sA"),d=n("44gg"),p=n.n(d),h=Object(u.b)();t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{title:"HeatMap HTTP API",keywords:[].concat(Object(a.a)(p.a.HeatMap.tags),["HTTP API"])}),o.a.createElement(l.a,{componentName:"HeatMap",chartClass:"heatmap",apiPath:"/charts/heatmap",flavors:p.a.flavors,dataProperty:"data",controlGroups:s.a,propsMapper:c.a,defaultProps:{width:800,height:600,data:JSON.stringify(h.data,null,"  "),keys:h.keys,indexBy:"country",margin:{top:100,right:60,bottom:30,left:60},minValue:"auto",maxValue:"auto",forceSquare:!0,sizeVariation:.4,padding:2,colors:"nivo",axisTop:{enable:!0,orient:"top",tickSize:5,tickPadding:5,tickRotation:-55,legend:"",legendOffset:36},axisRight:{enable:!1,orient:"right",tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:0},axisBottom:{enable:!1,orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:36},axisLeft:{enable:!0,orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:-40},enableGridX:!1,enableGridY:!0,cellShape:"circle",cellOpacity:1,cellBorderWidth:0,cellBorderColor:{from:"color",modifiers:[["darker",.4]]},enableLabels:!0,labelTextColor:{from:"color",modifiers:[["darker",1.4]]}}}))}},"49sA":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n("6zZa"),r=["hot dog","burger","sandwich","kebab","fries","donut","junk","sushi","ramen","curry","udon","bagel","yakitori","takoyaki","tacos","miso soup","tortilla","tapas","chipirones","gazpacho","soba","bavette","steak","pizza","spaghetti","ravioli","salad","pad thai","bun","waffle","crepe","churros","paella","empanadas","bruschetta","onion soup","cassoulet","bouillabaisse","unagi","tempura","tonkatsu","shabu-shabu","twinkies","jerky","fajitas","jambalaya","meatloaf","mac n' cheese","baked beans","popcorn","buffalo wings","BBQ ribs","apple pie","nachos","risotto","tiramisu"],o=function(){return{data:Object(a.c)(r.slice(0,11),{size:9,min:0,max:100}),keys:r.slice(0,11)}},i=function(){return{data:Object(a.c)(r,{size:22,min:0,max:100}),keys:r}}},"8fPj":function(e,t,n){"use strict";var a=n("mXGw"),r=n.n(a),o=n("nLLr"),i=function(e){var t=e.value,n=e.x,a=e.y,o=e.width,i=e.height,l=e.color,s=e.opacity,c=e.borderWidth,u=e.borderColor,d=e.textColor;return r.a.createElement("g",{transform:"translate("+n+", "+a+")"},r.a.createElement("path",{transform:"rotate("+(t<50?180:0)+")",fill:l,fillOpacity:s,strokeWidth:c,stroke:u,d:"\n                M0 -"+Math.round(i/2)+"\n                L"+Math.round(o/2)+" "+Math.round(i/2)+"\n                L-"+Math.round(o/2)+" "+Math.round(i/2)+"\n                L0 -"+Math.round(i/2)+"\n            "}),r.a.createElement("text",{alignmentBaseline:"central",textAnchor:"middle",style:{fill:d},dy:t<50?-6:6},t))};t.a=Object(o.c)({cellShape:function(e){return"Custom(props) => (…)"===e?i:e},axisTop:Object(o.a)("top"),axisRight:Object(o.a)("right"),axisBottom:Object(o.a)("bottom"),axisLeft:Object(o.a)("left")},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft"]})},egfL:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("Eo5u"),r=n("NNTJ"),o=n("RQLE"),i=[{key:"data",group:"Base",help:"Chart data.",type:"object[]",required:!0},{key:"indexBy",group:"Base",help:"Key to use to index the data.",description:"\n            Key to use to index the data,\n            this key must exist in each data item.\n            You can also provide a function which will\n            receive the data item and must return\n            the desired index\n        ",type:"string | Function",required:!1,defaultValue:r.b.indexBy},{key:"keys",group:"Base",help:"Keys to use to determine each serie.",type:"string[]",required:!1,defaultValue:r.b.keys},{key:"minValue",help:"Minimum value.",description:"\n            Minimum value.\n            If 'auto', will pick the lowest value\n            in the provided data set. Should be overriden\n            if your data set does not contain desired\n            lower bound value.\n        ",required:!1,defaultValue:r.b.minValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:0,min:-100,max:100}},{key:"maxValue",help:"Maximum value.",description:"\n            Maximum value. If 'auto', will pick the highest value\n            in the provided data set. Should be overriden\n            if your data set does not contain desired\n            higher bound value.\n        ",required:!1,defaultValue:r.b.maxValue,type:"number | 'auto'",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:100,min:-100,max:100}},{key:"forceSquare",help:"Force square cells (width = height).",required:!1,defaultValue:r.b.forceSquare,type:"boolean",controlType:"switch",group:"Base"},{key:"sizeVariation",help:"Cell size variation.",description:"Size variation (0~1), if value is 0 size won't be affected. If you use for example the value 0.3, cell width/height will vary between 0.7~1 according to its corresponding value.",required:!1,defaultValue:r.b.sizeVariation,type:"number",controlType:"range",group:"Base",controlOptions:{min:0,max:1,step:.02}},{key:"padding",help:"Padding.",required:!1,defaultValue:r.b.padding,type:"number",controlType:"range",group:"Base",controlOptions:{min:0,max:36,unit:"px"}},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using\n            `<ResponsiveHeatMap/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1200,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using\n            `<ResponsiveHeatMap/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1200,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},o.f,{key:"cellShape",help:"Cell shape/component.",description:"\n            Cell shape, can be one of: `'rect'`, `'circle'`,\n            if a function is provided, it must return\n            a valid SVG element and will receive\n            the following props:\n            ```\n            {\n                value:       number,\n                x:           number,\n                y:           number,\n                width:       number,\n                height:      number,\n                color:       string,\n                opacity:     number,\n                borderWidth: number,\n                borderColor: string,\n                textColor:   string,\n            }\n            ```\n        ",type:"string | Function",required:!1,defaultValue:r.b.cellShape,controlType:"choices",group:"Style",controlOptions:{choices:["rect","circle","Custom(props) => (…)"].map((function(e){return{label:e,value:e}}))}},{key:"colors",help:"Defines color range.",type:"string | Function | string[]",required:!1,defaultValue:"nivo",controlType:"quantizeColors",group:"Style"},{key:"cellOpacity",help:"Cell opacity (0~1).",required:!1,defaultValue:r.b.cellOpacity,type:"number",controlType:"opacity",group:"Style"},{key:"cellBorderWidth",help:"Cell border width.",required:!1,defaultValue:r.b.cellBorderWidth,type:"number",controlType:"lineWidth",group:"Style"},{key:"cellBorderColor",help:"Method to compute cell border color.",description:"\n            how to compute cell border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.b.cellBorderColor,controlType:"inheritedColor",group:"Style"},{key:"enableLabels",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:r.b.enableLabels,controlType:"switch",group:"Labels"},{key:"labelTextColor",help:"Method to compute label text color.",description:"\n            how to compute label text color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.b.labelTextColor,controlType:"inheritedColor",group:"Labels"},{key:"enableGridX",help:"Enable/disable x grid.",type:"boolean",required:!1,defaultValue:r.b.enableGridX,controlType:"switch",group:"Grid & Axes"},{key:"enableGridY",help:"Enable/disable y grid.",type:"boolean",required:!1,defaultValue:r.b.enableGridY,controlType:"switch",group:"Grid & Axes"}].concat(Object(a.a)(Object(o.a)()),[{key:"isInteractive",flavors:["svg","canvas"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:r.b.isInteractive,controlType:"switch",group:"Interactivity"},{key:"onClick",flavors:["svg","canvas"],group:"Interactivity",type:"(cell, event) => void",required:!1,help:"onClick handler.",description:"\n            onClick handler, will receive node data\n            as first argument & event as second one.\n            The node data has the following shape:\n            ```\n            {\n                key:        string,\n                value:      number,\n                x:          number,\n                xKey:       {string|number},\n                y:          number,\n                yKey:       {string|number},\n                width:      number,\n                height:     number,\n                opacity:    number\n            }\n            ```\n        "},{key:"hoverTarget",flavors:["svg","canvas"],help:"Defines hover behavior.",description:"\n            Defines hover behavior:\n\n            - **cell**: highlight the current cell\n            - **row**: highlight the current cell's row\n            - **column**: highlight the current cell's column\n            - **rowColumn**: highlight the current cell's row & column\n        ",required:!1,defaultValue:r.b.hoverTarget,type:"string",controlType:"choices",group:"Interactivity",controlOptions:{choices:["cell","row","column","rowColumn"].map((function(e){return{label:e,value:e}}))}},{key:"cellHoverOpacity",flavors:["svg","canvas"],help:"Cell opacity on hover.",required:!1,defaultValue:r.b.cellHoverOpacity,type:"number",controlType:"opacity",group:"Interactivity"},{key:"cellHoverOthersOpacity",flavors:["svg","canvas"],help:"Cell opacity when not hovered.",required:!1,defaultValue:r.b.cellHoverOthersOpacity,type:"number",controlType:"opacity",group:"Interactivity"}],Object(a.a)(Object(o.e)(["svg"],r.b,"react-spring"))),l=Object(o.d)(i)},vrO3:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));var a=n("Z+yb"),r=n("hsa5"),o=n("mXGw"),i=n.n(o),l=n("UutA"),s=n("7oih"),c=n("UmRm"),u=n("QbkB"),d=n("1h20"),p=n("yHyT"),h=n("SBeK"),m=n("MF9i"),g=l.d.a.withConfig({displayName:"ApiPreview__Link",componentId:"sc-1tjndi9-0"})(["position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;"]),f=l.d.img.withConfig({displayName:"ApiPreview__Image",componentId:"sc-1tjndi9-1"})(["max-width:100%;max-height:100%;"]),b=l.d.div.withConfig({displayName:"ApiPreview__EmptyContainer",componentId:"sc-1tjndi9-2"})(["font-size:14px;line-height:1.6em;color:",";display:flex;align-items:center;justify-content:center;width:100%;height:100%;"],(function(e){return e.theme.colors.textLight})),y=function(e){var t=e.responseStatus,n=e.chartUrl;return 201===t&&n?i.a.createElement(g,{href:n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f,{src:n,alt:"api result"})):i.a.createElement(b,null,"Click the generate button in order to generate the chart.",i.a.createElement("br",null),"You can customize settings by using dedicated controls.")},v=n("TurY"),x=n("DA+T");function w(){var e=Object(a.a)(["\n        & {\n            position: relative;\n            top: auto;\n            right: auto;\n            width: auto;\n            height: 460px;\n            z-index: 0;\n            border-top: 1px solid ",";\n        }\n    "]);return w=function(){return e},e}function k(){var e=Object(a.a)(["\n        & {\n            top: ","px;\n            right: 0;\n            width: 60%;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.55);\n        }\n    "]);return k=function(){return e},e}var C=["preview","body","data"],O=function(e){var t=e.chartClass,n=e.data,a=e.body,r=e.isLoading,l=e.responseStatus,s=e.chartUrl,c=Object(v.b)(),u=Object(o.useState)("preview"),d=u[0],p=u[1],h=Object(o.useState)(null),m=h[0],g=h[1];return i.a.createElement(T,{className:"chart-tabs--"+d},i.a.createElement(E,null,C.map((function(e){var n=e===d,a="preview"===e?t:"data",r=n||m===e?"colored":"neutral";return i.a.createElement(S,{key:e,className:"no-select",isCurrent:n,onClick:function(){return p(e)},onMouseEnter:function(){return g(e)},onMouseLeave:function(){return g(null)}},i.a.createElement(j,{className:"sprite-icons-"+a+"-"+c.id+"-"+r}),e)}))),i.a.createElement(P,null,"preview"===d&&i.a.createElement(y,{isLoading:r,responseStatus:l,chartUrl:s}),"body"===d&&i.a.createElement(x.a,null,JSON.stringify(a,null,"  ")),"data"===d&&i.a.createElement(x.a,null,n),i.a.createElement(q,{isLoading:r})))},T=l.d.div.withConfig({displayName:"ApiTabs__Wrapper",componentId:"wcngb8-0"})(["position:fixed;top:","px;right:0;width:60%;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.6);--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.55);z-index:10;overflow:hidden;background:",";border-bottom:1px solid ",";"," ",""],(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border}),c.a.tablet(k(),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.headerHeight})),c.a.mobile(w(),(function(e){return e.theme.colors.border}))),E=l.d.nav.withConfig({displayName:"ApiTabs__Nav",componentId:"wcngb8-1"})(["height:46px;background:",";display:flex;font-size:15px;color:#aaa;position:relative;"],(function(e){return e.theme.colors.background})),S=l.d.span.withConfig({displayName:"ApiTabs__NavItem",componentId:"wcngb8-2"})(["cursor:pointer;height:46px;display:block;position:relative;padding-left:46px;padding-right:14px;padding-top:11px;background:",";&:hover{color:",";}"],(function(e){var t=e.isCurrent,n=e.theme;return t?n.colors.cardBackground:"transparent"}),(function(e){return e.theme.colors.text})),j=l.d.span.withConfig({displayName:"ApiTabs__Icon",componentId:"wcngb8-3"})(["position:absolute;top:0;left:0;display:block;transform:scale(0.44);transform-origin:top left;margin:12px 0 0 12px;"]),P=l.d.div.withConfig({displayName:"ApiTabs__Content",componentId:"wcngb8-4"})(["position:absolute;top:46px;bottom:0;width:100%;overflow-x:hidden;overflow-y:auto;"]),V=l.d.div.withConfig({displayName:"ApiTabs__LoaderContainer",componentId:"wcngb8-5"})(["position:absolute;top:50%;left:50%;width:100px;height:80px;margin-top:-40px;margin-left:-50px;background:",";display:grid;grid-template-columns:10px 10px 10px 10px 10px;grid-column-gap:6px;padding:10px 13px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.15);pointer-events:none;opacity:",";transform:translate3d(0,",",0);transition:transform 200ms,opacity 200ms;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.isLoading?1:0}),(function(e){return e.isLoading?0:"20px"})),B=Object(l.e)(["0%,100%{transform:scale3d(1,0,1);}50%{transform:scale3d(1,1,1);}"]),I=l.d.span.withConfig({displayName:"ApiTabs__LoaderBar",componentId:"wcngb8-6"})(["display:block;background:",";width:100%;height:100%;transform:scale3d(1,0,1);transform-origin:100% 100%;animation-name:",";animation-duration:800ms;animation-iteration-count:infinite;animation-delay:","ms;"],(function(e){return e.theme.colors.accent}),B,(function(e){return 60*(e.index+1)})),q=function(e){var t=e.isLoading;return i.a.createElement(V,{isLoading:t},i.a.createElement("span",null,i.a.createElement(I,{index:0})),i.a.createElement("span",null,i.a.createElement(I,{index:1})),i.a.createElement("span",null,i.a.createElement(I,{index:2})),i.a.createElement("span",null,i.a.createElement(I,{index:3})),i.a.createElement("span",null,i.a.createElement(I,{index:4})))},A=l.d.span.withConfig({displayName:"ApiSubmit__Button",componentId:"y9yvg5-0"})(["display:block;background-color:",";color:#fff;text-align:center;padding:12px 24px;border-radius:2px;cursor:pointer;text-decoration:none;"],(function(e){return e.theme.colors.accent})),_=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,n=e.onClick;return i.a.createElement(A,{onClick:n},t?"sending":"generate")},t}(o.Component);_.defaultProps={};var N=_,H=l.d.div.withConfig({displayName:"ApiResponse__Container",componentId:"usxrxs-0"})(["background:",";border-top:1px solid ",";overflow-x:hidden;overflow-y:auto;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border})),L=l.d.div.withConfig({displayName:"ApiResponse__Header",componentId:"usxrxs-1"})(["padding:12px 20px;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.borderLight})),z=l.d.pre.withConfig({displayName:"ApiResponse__ResponseJson",componentId:"usxrxs-2"})(["padding:12px 20px;font-size:13px;line-height:1.6em;overflow:hidden;width:100%;margin:0;"]),M=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.responseStatus,n=e.response,a="no response available";return n&&(a=JSON.stringify(n,null,"  ")),i.a.createElement(H,null,i.a.createElement(L,null,"Response ",t?i.a.createElement("strong",null,t):"n/a"),i.a.createElement(z,null,a))},t}(o.Component);M.defaultProps={};var R=M,W=n("S6qR");function G(){var e=Object(a.a)(["\n        & {\n            position: relative;\n            right: auto;\n            bottom: auto;\n            width: auto;\n            height: auto;\n            border-left-width: 0;\n            z-index: 0;\n        }\n    "]);return G=function(){return e},e}function F(){var e=Object(a.a)(["\n        & {\n            right: 0;\n            bottom: 0;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.45);\n            width: 60%;\n        }\n    "]);return F=function(){return e},e}var U=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleSettingsUpdate=function(e){n.setState({props:e})},n.handleDataUpdate=function(e){var t,a=n.props.dataProperty,r=n.state.props;n.setState({props:Object.assign({},r,(t={},t[a]=e.target.value,t))})},n.handleSubmit=function(){var e=n.props,t=e.apiPath,a=e.propsMapper,r=n.state.props;n.setState({loading:!0}),fetch(""+W.a.nivoApiUrl+t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a(r))}).then((function(e){return n.setState({loading:!1,responseStatus:e.status}),e.json()})).then((function(e){n.setState({response:e})})).catch((function(e){console.error(e)}))},n.state={props:t.defaultProps,loading:!1,responseStatus:null,response:null},n}return Object(r.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.componentName,a=t.chartClass,r=t.apiPath,o=t.controlGroups,l=t.dataProperty,c=t.propsMapper,g=t.flavors,f=this.state,b=f.props,y=f.loading,v=f.responseStatus,x=f.response,w=g.map((function(e){return e.flavor}));return i.a.createElement(s.a,null,i.a.createElement(u.a,null,i.a.createElement(d.a,{chartClass:n+" HTTP API",tags:["POST "+r]}),g&&i.a.createElement(p.a,{flavors:g,current:"api"}),i.a.createElement(h.a,{description:(e=n,"\nThe `"+e+"`component is available in the nivo\nHTTP rendering API.\nThe API generates a SVG and return a path to this SVG\nwhich can then be easily embedded.\n\nThe api accepts almost the same properties as the regular component,\nin json, however it's not interactive and you cannot use code\nin properties (functions).\n\nPlease note that the demo API server is installed on heroku\nusing a free plan, so it might be unavailable from times to times.\n")}),i.a.createElement(O,{chartClass:a,data:b[l],body:c(b),isLoading:y,responseStatus:v,chartUrl:x?x.url:null}),i.a.createElement(D,null,i.a.createElement(J,null,i.a.createElement(N,{loading:y,onClick:this.handleSubmit})),i.a.createElement(R,{responseStatus:v,response:x})),i.a.createElement(m.a,{component:n,settings:b,flavors:w,currentFlavor:"api",groups:o,onChange:this.handleSettingsUpdate})))},t}(o.Component);U.defaultProps={dataProperty:"data",propsMapper:function(e){return e}};var D=l.d.div.withConfig({displayName:"ApiClient__ControlPanel",componentId:"sc-50le0s-0"})(["position:fixed;right:0;bottom:0;--innerWidth:calc(100% - ","px);--partialWidth:calc(var(--innerWidth) * 0.6);width:var(--partialWidth);background:",";--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.45);z-index:10;overflow:hidden;display:grid;grid-template-rows:1fr 2fr;"," ",""],(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.colors.cardAltBackground}),(function(e){return e.theme.dimensions.headerHeight}),c.a.tablet(F(),(function(e){return e.theme.dimensions.headerHeight})),c.a.mobile(G())),J=l.d.div.withConfig({displayName:"ApiClient__SubmitWrapper",componentId:"sc-50le0s-1"})(["display:flex;align-items:center;justify-content:center;padding:12px 0;"])}}]);
//# sourceMappingURL=component---src-pages-heatmap-api-js-5a6eb8c53e8588c2015d.js.map