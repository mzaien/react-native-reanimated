"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[3474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,p=d["".concat(s,".").concat(m)]||d[m]||f[m]||a;return n?r.createElement(p,l(l({ref:t},u),{},{components:n})):r.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>O,default:()=>Z,frontMatter:()=>C,metadata:()=>E,toc:()=>T});var r=n(87462),o=n(67294),a=n(3905),l=n(67177),i=n(24404),s=n(72400),c=n(28033),u=n(92747),d=n(82334),f=n(22238),m=n(56389),p=n(72290),v=n(99435),h=n(78069),y=n(68592);const b={code:'function anonymous(){const{offset}=this.__closure;return"Scroll offset: "+offset.value.toFixed(1);}'};function g(){const e=(0,d.m)(),t=(0,f.b)(e),n=(0,m.o)(function(){const e=()=>`Scroll offset: ${t.value.toFixed(1)}`;return e.__closure={offset:t},e.__workletHash=7742984832955,e.__initData=b,e}()),[r,a]=o.useState(!1);return o.createElement(l.Z,{style:S.container},o.createElement(R,{text:n}),o.createElement(p.n,{style:S.scroll,contentContainerStyle:S.scrollContent,ref:e,horizontal:r},Array.from({length:10}).map(((e,t)=>o.createElement(l.Z,{key:t,style:S.box},o.createElement(i.Z,{style:S.center},t))))),o.createElement(s.Z,{title:"Toggle scroll to "+(r?"vertical":"horizontal"),onPress:()=>a(!r)}))}const S=c.Z.create({container:{alignItems:"center"},scroll:{borderWidth:1,borderColor:"gray",height:250,width:250,margin:20},scrollContent:{alignItems:"center"},box:{width:100,height:100,margin:10,borderRadius:15,backgroundColor:"#b58df1",alignItems:"center",justifyContent:"center"},center:{textAlign:"center"}}),w=v.F(u.Z);h.Yv({text:!0});const k={code:"function anonymous(){const{text}=this.__closure;return{text:text.value,defaultValue:text.value};}"};function R(e){let{text:t,...n}=e;const a=(0,y.u)(function(){const e=()=>({text:t.value,defaultValue:t.value});return e.__closure={text:t},e.__workletHash=0xa1240974236,e.__initData=k,e}());return o.createElement(w,(0,r.Z)({editable:!1},n,{value:t.value,animatedProps:a}))}const x="import React from 'react';\nimport { View, Text, StyleSheet, TextInput, Button } from 'react-native';\nimport Animated, {\n  useAnimatedProps,\n  useAnimatedRef,\n  useDerivedValue,\n  useScrollViewOffset,\n} from 'react-native-reanimated';\nimport type { DerivedValue } from 'react-native-reanimated';\n\nexport default function App() {\n  const animatedRef = useAnimatedRef<Animated.ScrollView>();\n  // highlight-start\n  const offset = useScrollViewOffset(animatedRef);\n  const text = useDerivedValue(\n    () => `Scroll offset: ${offset.value.toFixed(1)}`\n  );\n  // highlight-end\n  const [isScrollHorizontal, setIsScrollHorizontal] =\n    React.useState<boolean>(false);\n\n  return (\n    <View style={styles.container}>\n      <AnimatedText text={text} />\n      <Animated.ScrollView\n        style={styles.scroll}\n        contentContainerStyle={styles.scrollContent}\n        ref={animatedRef}\n        horizontal={isScrollHorizontal}>\n        {Array.from({ length: 10 }).map((_, i) => (\n          <View key={i} style={styles.box}>\n            <Text style={styles.center}>{i}</Text>\n          </View>\n        ))}\n      </Animated.ScrollView>\n      <Button\n        title={`Toggle scroll to ${\n          isScrollHorizontal ? 'vertical' : 'horizontal'\n        }`}\n        onPress={() => setIsScrollHorizontal(!isScrollHorizontal)}\n      />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    alignItems: 'center',\n  },\n  scroll: {\n    borderWidth: 1,\n    borderColor: 'gray',\n    height: 250,\n    width: 250,\n    margin: 20,\n  },\n  scrollContent: {\n    alignItems: 'center',\n  },\n  box: {\n    width: 100,\n    height: 100,\n    margin: 10,\n    borderRadius: 15,\n    backgroundColor: '#b58df1',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  center: {\n    textAlign: 'center',\n  },\n});\n\nconst AnimatedTextInput = Animated.createAnimatedComponent(TextInput);\nAnimated.addWhitelistedNativeProps({ text: true });\n\nfunction AnimatedText({ text, ...props }: { text: DerivedValue<string> }) {\n  const animatedProps = useAnimatedProps(() => ({\n    text: text.value,\n    defaultValue: text.value,\n  }));\n  return (\n    <AnimatedTextInput\n      editable={false}\n      {...props}\n      value={text.value}\n      animatedProps={animatedProps}\n    />\n  );\n}\n",C={sidebar_position:2},O="useScrollViewOffset",E={unversionedId:"scroll/useScrollViewOffset",id:"scroll/useScrollViewOffset",title:"useScrollViewOffset",description:"useScrollViewOffset lets you to create animations based on the offset of a ScrollView.",source:"@site/docs/scroll/useScrollViewOffset.mdx",sourceDirName:"scroll",slug:"/scroll/useScrollViewOffset",permalink:"/react-native-reanimated/docs/scroll/useScrollViewOffset",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/edit/main/packages/docs-reanimated/docs/scroll/useScrollViewOffset.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"scrollTo",permalink:"/react-native-reanimated/docs/scroll/scrollTo"},next:{title:"useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/scroll/useAnimatedScrollHandler"}},A={},T=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>animatedRef</code>",id:"animatedref",level:4},{value:"<code>initialRef</code> <Optional/>",id:"initialref-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],P=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},V=P("Optional"),N=P("InteractiveExample"),_={toc:T},j="wrapper";function Z(e){let{components:t,...n}=e;return(0,a.kt)(j,(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usescrollviewoffset"},"useScrollViewOffset"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useScrollViewOffset")," lets you to create animations based on the offset of a ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),".\nThe hook automatically detects if the ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," is horizontal or vertical."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useScrollViewOffset } from 'react-native-reanimated';\n\nfunction App() {\n  const animatedRef = useAnimatedRef();\n  // highlight-next-line\n  const scrollOffset = useScrollViewOffset(animatedRef);\n  return (\n    <Animated.ScrollView ref={animatedRef}>{/* ... */}</Animated.ScrollView>\n  );\n}\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Type definitions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useScrollViewOffset(\n  animatedRef: AnimatedRef<AnimatedScrollView>,\n  initialRef?: SharedValue<number>\n): SharedValue<number>;\n"))),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"animatedref"},(0,a.kt)("inlineCode",{parentName:"h4"},"animatedRef")),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/useAnimatedRef#returns"},"animated ref")," connected to the ScrollView component you'd want to scroll on. The animated ref has to be passed either to an ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animated-component"},"Animated component")," or a React Native built-in component."),(0,a.kt)("h4",{id:"initialref-"},(0,a.kt)("inlineCode",{parentName:"h4"},"initialRef")," ",(0,a.kt)(V,{mdxType:"Optional"})),(0,a.kt)("p",null,"An optional shared value to be updated with the scroll offset. If not provided a new shared value will be created internally."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useScrollViewOffset")," returns a ",(0,a.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," which holds the current offset of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(N,{src:x,component:g,showCode:!0,mdxType:"InteractiveExample"}),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"animatedRef")," argument can be changed at will and the hook will correctly return values based on the ScrollView component it is connected to, for example:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useScrollViewOffset(someState ? someScrollRefA : someScrollRefB)")))),(0,a.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,a.kt)("div",{className:"platform-compatibility"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Android"),(0,a.kt)("th",{parentName:"tr",align:null},"iOS"),(0,a.kt)("th",{parentName:"tr",align:null},"Web"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}Z.isMDXComponent=!0},72290:(e,t,n)=>{n.d(t,{n:()=>u});var r=n(67294),o=n(5943),a=n(99435),l=n(82334),i=n(22238);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const c=(0,a.F)(o.Z),u=(0,r.forwardRef)(((e,t)=>{const{scrollViewOffset:n,...o}=e,a=null===t?(0,l.m)():t;return n&&(0,i.b)(a,n),"scrollEventThrottle"in o||(o.scrollEventThrottle=1),r.createElement(c,s({ref:a},o))}))},68592:(e,t,n)=>{n.d(t,{u:()=>l});var r=n(35842),o=n(83442);const a=r.l,l=(0,o.Wr)()?function(e,t,n){return(0,r.l)(e,t,n,!0)}:a},82334:(e,t,n)=>{n.d(t,{m:()=>p});var r=n(67294),o=n(10758),a=n(7737),l=n(86425),i=n(26496),s=n(82747),c=n(22805),u=n(83442);const d=(0,u.$L)();function f(e){return(0,u.aw)()&&e.getNativeScrollRef?e.getNativeScrollRef():!(0,u.aw)()&&e.getScrollableNode?e.getScrollableNode():e}const m=(0,u.aw)()?a.b:s.Z;function p(){const e=(0,o.y)(-1),t=(0,o.y)(null),n=(0,r.useRef)();if(!n.current){const r=n=>{var o;n&&(e.value=d?f(n):m(f(n)),r.current=n,"ios"!==c.Z.OS||(0,u.aw)()||(t.value=(null==n||null===(o=n.viewConfig)||void 0===o?void 0:o.uiViewClassName)||"RCTView"));return e.value};r.current=null;const o=(0,l.wH)({__init:()=>{const n=()=>e.value;return n.viewName=t,n}});i.z.set(r,o),n.current=r}return n.current}},35842:(e,t,n)=>{n.d(t,{l:()=>h});var r=n(67294),o=n(86425),a=n(97604),l=n(49402),i=n(76933),s=n(10758),c=n(40093),u=n(41956),d=n(83442);const f=(0,d.Wr)();function m(e,t,n,r){if(Array.isArray(t)&&t.forEach(((t,o)=>{m(e,t,n&&n[o],r&&r[o])})),"object"==typeof t&&t.onFrame){const o=t;let a=o.current;null!=r&&("object"==typeof r?void 0!==r.value?a=r.value:void 0!==r.onFrame&&(void 0!==(null==n?void 0:n.current)?a=n.current:void 0!==(null==r?void 0:r.current)&&(a=r.current)):a=r),o.callStart=e=>{o.onStart(o,a,e,n)},o.callStart(e),o.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((o=>m(e,t[o],n&&n[o],r&&r[o])))}function p(e,t,n,r,o){if(!o.value)return!0;if(Array.isArray(e)){r[n]=[];let a=!0;return e.forEach(((e,l)=>{p(e,t,l,r[n],o)||(a=!1)})),a}if("object"==typeof e&&e.onFrame){let o=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),o=e.onFrame(e,t),e.timestamp=t,o&&(e.finished=!0,e.callback&&e.callback(!0))),r[n]=e.current,o}if("object"==typeof e){r[n]={};let a=!0;return Object.keys(e).forEach((l=>{p(e[l],t,l,r[n],o)||(a=!1)})),a}return r[n]=e,!0}function v(e,t){if(Array.isArray(e))for(const n of e)v(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))v(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function h(e,t,h){let y=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const b=(0,u.H)(),g=(0,r.useRef)();let S=Object.values(e.__closure??{});var w;f&&(!S.length&&null!==(w=t)&&void 0!==w&&w.length&&(S=t));const k=h?Array.isArray(h)?h:[h]:[],R=h?(0,c.Nq)(k):null,x=(0,s.y)(!0),C=(0,r.useRef)({});if(t?t.push(e.__workletHash):t=[...S,e.__workletHash],R&&t.push(R),!g.current){const t=(0,i.AX)(e);0,g.current={initial:{value:t,updater:e},remoteState:(0,o.Uv)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,u.G)()}}const{initial:O,remoteState:E,viewDescriptors:A}=g.current,T=A.shareableViewDescriptors;t.push(T),(0,r.useEffect)((()=>{let t,r=e;h&&(r=()=>{const t=e();return k.forEach((e=>{e(t)})),t}),t=(0,d.V5)()?()=>{!function(e,t,r,o,a,i,s){const u=r.animations??{},d=t()??{},f=r.last;let v,h=!1;Object.keys(u).forEach((e=>{const t=d[e];(0,c.mE)(t)||delete u[e]})),Object.keys(d).forEach((e=>{const t=d[e];(0,c.mE)(t)&&(v=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),m(v,t,u[e],f[e]),u[e]=t,h=!0)})),h?(r.animations=u,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,function t(n){const{animations:c,last:u,isAnimationCancelled:d}=r;if(d)return void(r.isAnimationRunning=!1);const f={};let m=!0;Object.keys(c).forEach((e=>{p(c[e],n,e,f,a)?(u[e]=f[e],delete c[e]):m=!1})),Object.keys(f).length&&(0,l.R)(e,f,o,i,s),m?r.isAnimationRunning=!1:requestAnimationFrame(t)}(v))):(r.isAnimationCancelled=!0,r.animations=[]),r.last=d,(0,c.wU)(f,d)||(0,l.R)(e,d,o,i,s)}(T,e,E,b,x,C,k)}:()=>{!function(e,t,r,o,a){let i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const s=r.animations??{},u=t()??{},d=r.last,f={};let v,h=!1,y=!1;for(const l in u){const e=u[l];(0,c.mE)(e)?(v=n.g.__frameTimestamp||n.g._getAnimationTimestamp(),m(v,e,s[l],d[l]),s[l]=e,h=!0):(y=!0,f[l]=e,delete s[l])}if(h){const t=n=>{const{animations:i,last:s,isAnimationCancelled:c}=r;if(c)return void(r.isAnimationRunning=!1);const u={};let d=!0;for(const e in i)p(i[e],n,e,u,a)?(s[e]=u[e],delete i[e]):d=!1;u&&(0,l.Z)(e,u,o),d?r.isAnimationRunning=!1:requestAnimationFrame(t)};r.animations=s,r.isAnimationRunning||(r.isAnimationCancelled=!1,r.isAnimationRunning=!0,t(v)),y&&(0,l.Z)(e,f,o)}else r.isAnimationCancelled=!0,r.animations=[],(0,c.wU)(d,u)||(0,l.Z)(e,u,o,i);r.last=u}(T,r,E,b,x,y)};const o=(0,a.R)(t,S);return()=>{(0,a.B)(o)}}),t),(0,r.useEffect)((()=>(x.value=!0,()=>{x.value=!1})),[x]),v(O.value);const P=(0,r.useRef)(null);return P.current||(P.current=(0,d.V5)()?{viewDescriptors:A,initial:O,viewsRef:b,jestAnimatedStyle:C}:{initial:O,viewsRef:b,viewDescriptors:A}),P.current}},56389:(e,t,n)=>{n.d(t,{o:()=>s});var r=n(67294),o=n(76933),a=n(96085),l=n(97604),i=n(83442);function s(e,t){const n=(0,r.useRef)(null);let s=Object.values(e.__closure??{});var c;(0,i.Wr)()&&(!s.length&&null!==(c=t)&&void 0!==c&&c.length&&(s=t));void 0===t?t=[...s,e.__workletHash]:t.push(e.__workletHash),null===n.current&&(n.current=(0,a.v)((0,o.AX)(e)));const u=n.current;return(0,r.useEffect)((()=>{const t=(0,l.R)((()=>{u.value=e()}),s,[u]);return()=>{(0,l.B)(t)}}),t),(0,r.useEffect)((()=>()=>{n.current=null}),[]),u}},91370:(e,t,n)=>{n.d(t,{z:()=>a});var r=n(67294),o=n(18452);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const a=(0,r.useRef)(null);if(null===a.current){const n=new o.Z(e,t);a.current={workletEventHandler:n}}else if(n){const t=a.current.workletEventHandler;t.updateWorklet(e),a.current={workletEventHandler:t}}return a.current}},22238:(e,t,n)=>{n.d(t,{b:()=>s});var r=n(67294),o=n(82747),a=n(91370),l=n(10758);const i=(0,n(83442).$L)(),s=i?function(e,t){const n=(0,r.useRef)(void 0!==t?t:(0,l.y)(0)),o=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{const t=e.current;n.current.value=0===t.scrollLeft?t.scrollTop:t.scrollLeft}),[e,e.current]);return(0,r.useEffect)((()=>{null!==o.current&&o.current.removeEventListener("scroll",a),o.current=e.current;const t=e.current;return t.addEventListener("scroll",a),()=>{t.removeEventListener("scroll",a)}}),[e,e.current,a]),n.current}:function(e,t){const n=(0,r.useRef)(void 0!==t?t:(0,l.y)(0)),s=(0,a.z)((e=>{n.current.value=0===e.contentOffset.x?e.contentOffset.y:e.contentOffset.x}),c);return(0,r.useEffect)((()=>{const t=e.current,n=i?t:(0,o.Z)(t);return s.workletEventHandler.registerForEvents(n),()=>{var e;null===(e=s.workletEventHandler)||void 0===e||e.unregisterFromEvents()}}),[e,e.current,s]),n.current};const c=["onScroll","onScrollBeginDrag","onScrollEndDrag","onMomentumScrollBegin","onMomentumScrollEnd"]},72400:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),o=n(28033),a=n(88548),l=n(24404),i=r.forwardRef(((e,t)=>{var n=e.accessibilityLabel,o=e.color,i=e.disabled,c=e.onPress,u=e.testID,d=e.title;return r.createElement(a.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:i,focusable:!i,onPress:c,ref:t,style:[s.button,o&&{backgroundColor:o},i&&s.buttonDisabled],testID:u},r.createElement(l.Z,{style:[s.text,i&&s.textDisabled]},d))}));i.displayName="Button";var s=o.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const c=i},92747:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),o=n(37353),a=n(13250),l=n(45819),i=n(30042),s=n(39863),c=n(16528),u=n(60091),d=n(72359),f=n(72931),m=n(28033),p=n(3177),v=Object.assign({},a.lG,a.LO,a._T,a.YB,a.Uy,a.hJ,a.E5,a.vr,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0});var h=null,y=r.forwardRef(((e,t)=>{var n,a,m=e.autoCapitalize,y=void 0===m?"sentences":m,g=e.autoComplete,S=e.autoCompleteType,w=e.autoCorrect,k=void 0===w||w,R=e.blurOnSubmit,x=e.clearTextOnFocus,C=e.dir,O=e.editable,E=void 0===O||O,A=e.keyboardType,T=void 0===A?"default":A,P=e.multiline,V=void 0!==P&&P,N=e.numberOfLines,_=void 0===N?1:N,j=e.onBlur,Z=e.onChange,D=e.onChangeText,F=e.onContentSizeChange,I=e.onFocus,H=e.onKeyPress,z=e.onLayout,L=e.onMoveShouldSetResponder,M=e.onMoveShouldSetResponderCapture,B=e.onResponderEnd,W=e.onResponderGrant,$=e.onResponderMove,X=e.onResponderReject,q=e.onResponderRelease,G=e.onResponderStart,K=e.onResponderTerminate,U=e.onResponderTerminationRequest,Y=e.onScrollShouldSetResponder,J=e.onScrollShouldSetResponderCapture,Q=e.onSelectionChange,ee=e.onSelectionChangeShouldSetResponder,te=e.onSelectionChangeShouldSetResponderCapture,ne=e.onStartShouldSetResponder,re=e.onStartShouldSetResponderCapture,oe=e.onSubmitEditing,ae=e.placeholderTextColor,le=e.returnKeyType,ie=e.secureTextEntry,se=void 0!==ie&&ie,ce=e.selection,ue=e.selectTextOnFocus,de=e.spellCheck;switch(T){case"email-address":n="email";break;case"number-pad":case"numeric":a="numeric";break;case"decimal-pad":a="decimal";break;case"phone-pad":n="tel";break;case"search":case"web-search":n="search";break;case"url":n="url";break;default:n="text"}se&&(n="password");var fe=r.useRef({height:null,width:null}),me=r.useRef(null),pe=r.useCallback((e=>{if(V&&F&&null!=e){var t=e.scrollHeight,n=e.scrollWidth;t===fe.current.height&&n===fe.current.width||(fe.current.height=t,fe.current.width=n,F({nativeEvent:{contentSize:{height:fe.current.height,width:fe.current.width}}}))}}),[V,F]),ve=r.useMemo((()=>e=>{null!=e&&(e.clear=function(){null!=e&&(e.value="")},e.isFocused=function(){return null!=e&&p.Z.currentlyFocusedField()===e},pe(e))}),[pe]);(0,s.Z)((()=>{var e=me.current;null!=e&&null!=ce&&((e,t)=>{if(((e,t)=>{var n=e.selectionEnd,r=e.selectionStart,o=t.start,a=t.end;return o!==r||a!==n})(e,t)){var n=t.start,r=t.end;try{e.setSelectionRange(n,r||n)}catch(o){}}})(e,ce),document.activeElement===e&&(p.Z._currentlyFocusedNode=e)}),[me,ce]);var he=V?"textarea":"input";(0,i.Z)(me,z),(0,d.Z)(me,{onMoveShouldSetResponder:L,onMoveShouldSetResponderCapture:M,onResponderEnd:B,onResponderGrant:W,onResponderMove:$,onResponderReject:X,onResponderRelease:q,onResponderStart:G,onResponderTerminate:K,onResponderTerminationRequest:U,onScrollShouldSetResponder:Y,onScrollShouldSetResponderCapture:J,onSelectionChangeShouldSetResponder:ee,onSelectionChangeShouldSetResponderCapture:te,onStartShouldSetResponder:ne,onStartShouldSetResponderCapture:re});var ye=(0,f.PE)().direction,be=(e=>(0,l.Z)(e,v))(e);be.autoCapitalize=y,be.autoComplete=g||S||"on",be.autoCorrect=k?"on":"off",be.dir=void 0!==C?C:"auto",be.enterKeyHint=le,be.inputMode=a,be.onBlur=function(e){p.Z._currentlyFocusedNode=null,j&&(e.nativeEvent.text=e.target.value,j(e))},be.onChange=function(e){var t=e.target,n=t.value;e.nativeEvent.text=n,pe(t),Z&&Z(e),D&&D(n)},be.onFocus=function(e){var t=e.target;I&&(e.nativeEvent.text=t.value,I(e)),null!=t&&(p.Z._currentlyFocusedNode=t,x&&(t.value=""),ue&&(null!=h&&clearTimeout(h),h=setTimeout((()=>{null!=t&&t.select()}),0)))},be.onKeyDown=function(e){var t=e.target;e.stopPropagation();var n=null==R?!V:R,r=e.nativeEvent,o=function(e){return e.isComposing||229===e.keyCode}(r);H&&H(e),"Enter"!==e.key||e.shiftKey||o||e.isDefaultPrevented()||(!R&&V||!oe||(e.preventDefault(),r.text=e.target.value,oe(e)),n&&null!=t&&setTimeout((()=>t.blur()),0))},be.onSelect=function(e){if(Q)try{var t=e.target,n=t.selectionStart,r=t.selectionEnd;e.nativeEvent.selection={start:n,end:r},e.nativeEvent.text=e.target.value,Q(e)}catch(e){}},be.readOnly=!E,be.rows=V?_:void 0,be.spellCheck=null!=de?de:k,be.style=[{"--placeholderTextColor":ae},b.textinput$raw,b.placeholder,e.style],be.type=V?void 0:n;var ge=(0,u.Z)(be),Se=(0,c.Z)(me,ge,ve,t);be.ref=Se;var we=null!=e.lang?(0,f.w1)(e.lang):null,ke=e.dir||we||ye;return(0,o.Z)(he,be,{writingDirection:ke})}));y.displayName="TextInput",y.State=p.Z;var b=m.Z.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"}});const g=y},88548:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(87462),o=n(63366),a=n(67294),l=n(16528),i=n(94119),s=n(28033),c=n(67177),u=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,s=e.delayPressIn,d=e.delayPressOut,m=e.delayLongPress,p=e.disabled,v=e.focusable,h=e.onLongPress,y=e.onPress,b=e.onPressIn,g=e.onPressOut,S=e.rejectResponderTermination,w=e.style,k=(0,o.Z)(e,u),R=(0,a.useRef)(null),x=(0,l.Z)(t,R),C=(0,a.useState)("0s"),O=C[0],E=C[1],A=(0,a.useState)(null),T=A[0],P=A[1],V=(0,a.useCallback)(((e,t)=>{P(e),E(t?t/1e3+"s":"0s")}),[P,E]),N=(0,a.useCallback)((e=>{V(null!=n?n:.2,e)}),[n,V]),_=(0,a.useCallback)((e=>{V(null,e)}),[V]),j=(0,a.useMemo)((()=>({cancelable:!S,disabled:p,delayLongPress:m,delayPressStart:s,delayPressEnd:d,onLongPress:h,onPress:y,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;N(t?0:150),null!=b&&b(e)},onPressEnd(e){_(250),null!=g&&g(e)}})),[m,s,d,p,h,y,b,g,S,N,_]),Z=(0,i.Z)(R,j);return a.createElement(c.Z,(0,r.Z)({},k,Z,{accessibilityDisabled:p,focusable:!p&&!1!==v,pointerEvents:p?"none":void 0,ref:x,style:[f.root,!p&&f.actionable,w,null!=T&&{opacity:T},{transitionDuration:O}]}))}var f=s.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),m=a.memo(a.forwardRef(d));m.displayName="TouchableOpacity";const p=m}}]);