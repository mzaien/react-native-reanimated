"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[5770],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),y=r,m=s["".concat(c,".").concat(y)]||s[y]||u[y]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},20247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={id:"withDecay",title:"withDecay",sidebar_label:"withDecay"},l=void 0,o={unversionedId:"api/animations/withDecay",id:"version-2.x/api/animations/withDecay",title:"withDecay",description:'Starts a velocity based "scroll" animation.',source:"@site/versioned_docs/version-2.x/api/animations/withDecay.md",sourceDirName:"api/animations",slug:"/api/animations/withDecay",permalink:"/react-native-reanimated/docs/2.x/api/animations/withDecay",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/versioned_docs/version-2.x/api/animations/withDecay.md",tags:[],version:"2.x",frontMatter:{id:"withDecay",title:"withDecay",sidebar_label:"withDecay"},sidebar:"docs",previous:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/2.x/api/animations/cancelAnimation"},next:{title:"withDelay",permalink:"/react-native-reanimated/docs/2.x/api/animations/withDelay"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>options</code> object",id:"options-object",level:4},{value:"<code>velocityFactor</code>",id:"velocityfactor",level:5},{value:"<code>callback</code> function(optional)",id:"callback-functionoptional",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],d={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,'Starts a velocity based "scroll" animation.'),(0,r.yg)("h3",{id:"arguments"},"Arguments"),(0,r.yg)("h4",{id:"options-object"},(0,r.yg)("inlineCode",{parentName:"h4"},"options")," ","[object]"),(0,r.yg)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Options"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"velocity"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"Initial velocity")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"deceleration"),(0,r.yg)("td",{parentName:"tr",align:null},"0.998"),(0,r.yg)("td",{parentName:"tr",align:null},"Rate of decay")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"clamp"),(0,r.yg)("td",{parentName:"tr",align:null},"[]"),(0,r.yg)("td",{parentName:"tr",align:null},"Array of two animation boundaries (optional)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"velocityFactor"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Factor to modify velocity unit (optional)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rubberBandEffect"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Rubber band effect after reach clamp limit (optional)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rubberBandFactor"),(0,r.yg)("td",{parentName:"tr",align:null},"0.6"),(0,r.yg)("td",{parentName:"tr",align:null},"Factor to modify rubberBandEffect force (optional)")))),(0,r.yg)("h5",{id:"velocityfactor"},(0,r.yg)("inlineCode",{parentName:"h5"},"velocityFactor")),(0,r.yg)("p",null,"The default unit of velocity in decay is pixels per second but it can be problematic when you want to animate a value not related to pixels for example opacity ",(0,r.yg)("inlineCode",{parentName:"p"},"[0, 1]")," or progress bar ",(0,r.yg)("inlineCode",{parentName:"p"},"[0, 1]"),". In this case, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"velocityFactor")," property with value ",(0,r.yg)("inlineCode",{parentName:"p"},"< 1")," to modify the velocity of change to fit the required domain."),(0,r.yg)("h4",{id:"callback-functionoptional"},(0,r.yg)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),(0,r.yg)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,r.yg)("h3",{id:"returns"},"Returns"),(0,r.yg)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.x/api/hooks/useAnimatedStyle"},(0,r.yg)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: (evt) => {\n      x.value = withDecay({\n        velocity: evt.velocityX,\n        clamp: [0, 200], // optionally define boundaries for the animation\n      });\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}u.isMDXComponent=!0}}]);