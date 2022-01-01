"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[3318],{73447:function(e,t,n){n.d(t,{Z:function(){return J}});var r,o,a=n(36732),i=n(93219),s=n(27378),l=n(91542),c=n(80757),d=n(51302),p=n(67231),u=n(79892),h=n(75801),m=n(91285),f=n(21815),g=l.default.a.withConfig({displayName:"ApiPreview__Link",componentId:"sc-1tjndi9-0"})(["position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;"]),b=l.default.img.withConfig({displayName:"ApiPreview__Image",componentId:"sc-1tjndi9-1"})(["max-width:100%;max-height:100%;"]),v=l.default.div.withConfig({displayName:"ApiPreview__EmptyContainer",componentId:"sc-1tjndi9-2"})(["font-size:14px;line-height:1.6em;color:",";display:flex;align-items:center;justify-content:center;width:100%;height:100%;"],(function(e){return e.theme.colors.textLight})),x=function(e){var t=e.responseStatus,n=e.chartUrl;return 201===t&&n?s.createElement(g,{href:n,target:"_blank",rel:"noopener noreferrer"},s.createElement(b,{src:n,alt:"api result"})):s.createElement(v,null,"Click the generate button in order to generate the chart.",s.createElement("br",null),"You can customize settings by using dedicated controls.")},y=n(90230),w=n(1914),C=["preview","body","data"],E=function(e){var t=e.chartClass,n=e.data,r=e.body,o=e.isLoading,a=e.responseStatus,i=e.chartUrl,l=(0,y.F)(),c=(0,s.useState)("preview"),d=c[0],p=c[1],u=(0,s.useState)(null),h=u[0],m=u[1];return s.createElement(k,{className:"chart-tabs--"+d},s.createElement(_,null,C.map((function(e){var n=e===d,r="preview"===e?t:"data",o=n||h===e?"colored":"neutral";return s.createElement(S,{key:e,className:"no-select",isCurrent:n,onClick:function(){return p(e)},onMouseEnter:function(){return m(e)},onMouseLeave:function(){return m(null)}},s.createElement(N,{className:"sprite-icons-"+r+"-"+l.id+"-"+o}),e)}))),s.createElement(P,null,"preview"===d&&s.createElement(x,{isLoading:o,responseStatus:a,chartUrl:i}),"body"===d&&s.createElement(w.d,null,JSON.stringify(r,null,"  ")),"data"===d&&s.createElement(w.d,null,n),s.createElement(L,{isLoading:o})))},k=l.default.div.withConfig({displayName:"ApiTabs__Wrapper",componentId:"sc-wcngb8-0"})(["position:fixed;top:","px;right:0;width:60%;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.6);--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.55);z-index:10;overflow:hidden;background:",";border-bottom:1px solid ",";"," ",""],(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border}),d.Z.tablet(r||(r=(0,a.Z)(["\n        & {\n            top: ","px;\n            right: 0;\n            width: 60%;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.55);\n        }\n    "])),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.headerHeight})),d.Z.mobile(o||(o=(0,a.Z)(["\n        & {\n            position: relative;\n            top: auto;\n            right: auto;\n            width: auto;\n            height: 460px;\n            z-index: 0;\n            border-top: 1px solid ",";\n        }\n    "])),(function(e){return e.theme.colors.border}))),_=l.default.nav.withConfig({displayName:"ApiTabs__Nav",componentId:"sc-wcngb8-1"})(["height:46px;background:",";display:flex;font-size:15px;color:#aaa;position:relative;"],(function(e){return e.theme.colors.background})),S=l.default.span.withConfig({displayName:"ApiTabs__NavItem",componentId:"sc-wcngb8-2"})(["cursor:pointer;height:46px;display:block;position:relative;padding-left:46px;padding-right:14px;padding-top:11px;background:",";&:hover{color:",";}"],(function(e){var t=e.isCurrent,n=e.theme;return t?n.colors.cardBackground:"transparent"}),(function(e){return e.theme.colors.text})),N=l.default.span.withConfig({displayName:"ApiTabs__Icon",componentId:"sc-wcngb8-3"})(["position:absolute;top:0;left:0;display:block;transform:scale(0.44);transform-origin:top left;margin:12px 0 0 12px;"]),P=l.default.div.withConfig({displayName:"ApiTabs__Content",componentId:"sc-wcngb8-4"})(["position:absolute;top:46px;bottom:0;width:100%;overflow-x:hidden;overflow-y:auto;"]),A=l.default.div.withConfig({displayName:"ApiTabs__LoaderContainer",componentId:"sc-wcngb8-5"})(["position:absolute;top:50%;left:50%;width:100px;height:80px;margin-top:-40px;margin-left:-50px;background:",";display:grid;grid-template-columns:10px 10px 10px 10px 10px;grid-column-gap:6px;padding:10px 13px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.15);pointer-events:none;opacity:",";transform:translate3d(0,",",0);transition:transform 200ms,opacity 200ms;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.isLoading?1:0}),(function(e){return e.isLoading?0:"20px"})),I=(0,l.keyframes)(["0%,100%{transform:scale3d(1,0,1);}50%{transform:scale3d(1,1,1);}"]),T=l.default.span.withConfig({displayName:"ApiTabs__LoaderBar",componentId:"sc-wcngb8-6"})(["display:block;background:",";width:100%;height:100%;transform:scale3d(1,0,1);transform-origin:100% 100%;animation-name:",";animation-duration:800ms;animation-iteration-count:infinite;animation-delay:","ms;"],(function(e){return e.theme.colors.accent}),I,(function(e){return 60*(e.index+1)})),L=function(e){var t=e.isLoading;return s.createElement(A,{isLoading:t},s.createElement("span",null,s.createElement(T,{index:0})),s.createElement("span",null,s.createElement(T,{index:1})),s.createElement("span",null,s.createElement(T,{index:2})),s.createElement("span",null,s.createElement(T,{index:3})),s.createElement("span",null,s.createElement(T,{index:4})))},H=l.default.span.withConfig({displayName:"ApiSubmit__Button",componentId:"sc-y9yvg5-0"})(["display:block;background-color:",";color:#fff;text-align:center;padding:12px 24px;border-radius:2px;cursor:pointer;text-decoration:none;"],(function(e){return e.theme.colors.accent})),Z=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,n=e.onClick;return s.createElement(H,{onClick:n},t?"sending":"generate")},t}(s.Component);Z.defaultProps={};var W=Z,j=l.default.div.withConfig({displayName:"ApiResponse__Container",componentId:"sc-usxrxs-0"})(["background:",";border-top:1px solid ",";overflow-x:hidden;overflow-y:auto;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border})),z=l.default.div.withConfig({displayName:"ApiResponse__Header",componentId:"sc-usxrxs-1"})(["padding:12px 20px;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.borderLight})),B=l.default.pre.withConfig({displayName:"ApiResponse__ResponseJson",componentId:"sc-usxrxs-2"})(["padding:12px 20px;font-size:13px;line-height:1.6em;overflow:hidden;width:100%;margin:0;"]),O=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.responseStatus,n=e.response,r="no response available";return n&&(r=JSON.stringify(n,null,"  ")),s.createElement(j,null,s.createElement(z,null,"Response ",t?s.createElement("strong",null,t):"n/a"),s.createElement(B,null,r))},t}(s.Component);O.defaultProps={};var R,U,M=O,F=n(49047),J=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleSettingsUpdate=function(e){n.setState({props:e})},n.handleDataUpdate=function(e){var t,r=n.props.dataProperty,o=n.state.props;n.setState({props:Object.assign({},o,(t={},t[r]=e.target.value,t))})},n.handleSubmit=function(){var e=n.props,t=e.apiPath,r=e.propsMapper,o=n.state.props;n.setState({loading:!0}),fetch(""+F.Z.nivoApiUrl+t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r(o))}).then((function(e){return n.setState({loading:!1,responseStatus:e.status}),e.json()})).then((function(e){n.setState({response:e})})).catch((function(e){console.error(e)}))},n.state={props:t.defaultProps,loading:!1,responseStatus:null,response:null},n}return(0,i.Z)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.componentName,r=t.chartClass,o=t.apiPath,a=t.controlGroups,i=t.dataProperty,l=t.propsMapper,d=t.flavors,g=this.state,b=g.props,v=g.loading,x=g.responseStatus,y=g.response,w=d.map((function(e){return e.flavor}));return s.createElement(c.Z,null,s.createElement(p.L,null,s.createElement(u.y,{chartClass:n+" HTTP API",tags:["POST "+o]}),d&&s.createElement(h.Z,{flavors:d,current:"api"}),s.createElement(m.l,{description:(e=n,"\nThe `"+e+"`component is available in the nivo\nHTTP rendering API.\nThe API generates a SVG and return a path to this SVG\nwhich can then be easily embedded.\n\nThe api accepts almost the same properties as the regular component,\nin json, however it's not interactive and you cannot use code\nin properties (functions).\n\nPlease note that the demo API server is installed on heroku\nusing a free plan, so it might be unavailable from times to times.\n")}),s.createElement(E,{chartClass:r,data:b[i],body:l(b),isLoading:v,responseStatus:x,chartUrl:y?y.url:null}),s.createElement(G,null,s.createElement(D,null,s.createElement(W,{loading:v,onClick:this.handleSubmit})),s.createElement(M,{responseStatus:x,response:y})),s.createElement(f.Z,{component:n,settings:b,flavors:w,currentFlavor:"api",groups:a,onChange:this.handleSettingsUpdate})))},t}(s.Component);J.defaultProps={dataProperty:"data",propsMapper:function(e){return e}};var G=l.default.div.withConfig({displayName:"ApiClient__ControlPanel",componentId:"sc-50le0s-0"})(["position:fixed;right:0;bottom:0;--innerWidth:calc(100% - ","px);--partialWidth:calc(var(--innerWidth) * 0.6);width:var(--partialWidth);background:",";--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.45);z-index:10;overflow:hidden;display:grid;grid-template-rows:1fr 2fr;"," ",""],(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.colors.cardAltBackground}),(function(e){return e.theme.dimensions.headerHeight}),d.Z.tablet(R||(R=(0,a.Z)(["\n        & {\n            right: 0;\n            bottom: 0;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.45);\n            width: 60%;\n        }\n    "])),(function(e){return e.theme.dimensions.headerHeight})),d.Z.mobile(U||(U=(0,a.Z)(["\n        & {\n            position: relative;\n            right: auto;\n            bottom: auto;\n            width: auto;\n            height: auto;\n            border-left-width: 0;\n            z-index: 0;\n        }\n    "])))),D=l.default.div.withConfig({displayName:"ApiClient__SubmitWrapper",componentId:"sc-50le0s-1"})(["display:flex;align-items:center;justify-content:center;padding:12px 0;"])},15603:function(e,t,n){n.r(t);var r=n(649),o=n(27378),a=n(38681),i=n(95546),s=n(73447),l=n(31312),c=n(63470),d=n(44063),p=(0,a.zn)(),u=p.data,h=p.keys;t.default=function(){return o.createElement(o.Fragment,null,o.createElement(i.p,{title:"Radar HTTP API",keywords:[].concat((0,r.Z)(d.F.tags),["HTTP API"])}),o.createElement(s.Z,{componentName:"Radar",chartClass:"radar",apiPath:"/charts/radar",flavors:d.K,dataProperty:"data",controlGroups:l.X,propsMapper:c.Z,defaultProps:{width:600,height:600,data:JSON.stringify(u,null,"  "),keys:h,indexBy:"taste",maxValue:"auto",valueFormat:{format:">-.2f",enabled:!0},margin:{top:70,right:80,bottom:40,left:80},colors:{scheme:"nivo"},curve:"catmullRomClosed",borderWidth:2,borderColor:{from:"color"},gridLevels:5,gridShape:"circular",gridLabelOffset:36,enableDots:!0,dotSize:8,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{theme:"background"},enableDotLabel:!0,dotLabel:"value",dotLabelYOffset:-12,fillOpacity:.1}}))}}}]);
//# sourceMappingURL=component---src-pages-radar-api-js-2f26bd91e40176bc1975.js.map