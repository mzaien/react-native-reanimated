"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[2731],{79271:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294);const o="collapseButton_X7H2",r="arrow_XdVJ";var i;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",l({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,i||(i=a.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#001A72",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var c;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",u({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,c||(c=a.createElement("path",{d:"m1 1 5 5 5-5",stroke:"#F8F9FF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};var h=n(92949),m=n(86010);const p=e=>{let{label:t,labelCollapsed:n,collapsed:i,onCollapse:l,className:c}=e;const{colorMode:u}=(0,h.I)();return a.createElement("div",{className:(0,m.default)(o,c),"data-collapsed":i,onClick:()=>l()},"light"===u?a.createElement(s,{className:r}):a.createElement(d,{className:r}),a.createElement("button",null,i?n:t))}},61837:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(60614);const r={container:"container_oGcb",collapseButton:"collapseButton_YVdr"};var i=n(79271);function l(e){let{src:t,showLines:n}=e;const[l,s]=(0,a.useState)(!0);if(!n)return a.createElement(o.Z,{language:"jsx"},t);const[c,u]=n,d=t.split("\n").slice(c,u+1).join("\n");return a.createElement("div",{className:r.container},a.createElement(i.Z,{label:"Collapse the full code",labelCollapsed:"Expand the full code",collapsed:l,onCollapse:()=>s(!l),className:r.collapseButton}),a.createElement(o.Z,{language:"jsx"},l?d:t))}},59261:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),o=n(70399),r=n(28033),i=n(76636),l=n(67177),s=n(72400),c=n(42233);const u={code:"function SwitchJs1(){const{interpolateColor,value,trackColors,withTiming,duration,height}=this.__closure;const color=interpolateColor(value.value,[0,1],[trackColors.off,trackColors.on]);const colorValue=withTiming(color,{duration:duration});return{backgroundColor:colorValue,borderRadius:height.value/2};}"},d={code:"function SwitchJs2(){const{interpolate,value,width,height,withTiming,duration}=this.__closure;const moveValue=interpolate(Number(value.value),[0,1],[0,width.value-height.value]);const translateValue=withTiming(moveValue,{duration:duration});return{transform:[{translateX:translateValue}],borderRadius:height.value/2};}"},h=e=>{let{value:t,onPress:n,style:r,duration:i=400,trackColors:l={on:"#82cab2",off:"#fa7f7c"}}=e;const s=(0,c.useSharedValue)(0),h=(0,c.useSharedValue)(0),p=(0,c.useAnimatedStyle)(function(){const e=function(){const e=(0,c.interpolateColor)(t.value,[0,1],[l.off,l.on]);return{backgroundColor:(0,c.withTiming)(e,{duration:i}),borderRadius:s.value/2}};return e.__closure={interpolateColor:c.interpolateColor,value:t,trackColors:l,withTiming:c.withTiming,duration:i,height:s},e.__workletHash=1970655606697,e.__initData=u,e}()),w=(0,c.useAnimatedStyle)(function(){const e=function(){const e=(0,c.interpolate)(Number(t.value),[0,1],[0,h.value-s.value]);return{transform:[{translateX:(0,c.withTiming)(e,{duration:i})}],borderRadius:s.value/2}};return e.__closure={interpolate:c.interpolate,value:t,width:h,height:s,withTiming:c.withTiming,duration:i},e.__workletHash=9540285382782,e.__initData=d,e}());return a.createElement(o.Z,{onPress:n},a.createElement(c.default.View,{onLayout:e=>{s.value=e.nativeEvent.layout.height,h.value=e.nativeEvent.layout.width},style:[m.track,r,p]},a.createElement(c.default.View,{style:[m.thumb,w]})))},m=r.Z.create({track:{alignItems:"flex-start",width:100,height:40,padding:5},thumb:{height:"100%",aspectRatio:1,backgroundColor:"white"}});function p(){const e=(0,c.useSharedValue)(!1),t=()=>{e.value=!e.value};return a.createElement(i.Z,{style:w.container},a.createElement(h,{value:e,onPress:t,style:w.switch}),a.createElement(l.Z,{style:w.buttonContainer},a.createElement(s.Z,{onPress:t,title:"Click me"})))}const w=r.Z.create({switch:{width:200,height:80,padding:10},container:{flex:1,height:300,alignItems:"center",justifyContent:"center"},buttonContainer:{paddingTop:"1rem",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}})},93145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var a=n(87462),o=(n(67294),n(3905)),r=n(59261),i=n(80220),l=n(61837);const s={slug:"switch",title:"Switch"},c=void 0,u={permalink:"/react-native-reanimated/examples/switch",source:"@site/blog/switch.md",title:"Switch",description:"A switch element is a user interface component that allows users to toggle between two or more states. It is commonly used to turn on/off a setting, enable/disable a feature, or select between options.",date:"2024-09-02T12:14:07.000Z",formattedDate:"September 2, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{slug:"switch",title:"Switch"},prevItem:{title:"Slider",permalink:"/react-native-reanimated/examples/slider"}},d={authorsImageUrls:[]},h=[],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=m("InteractiveExample"),w=m("ExampleVideo"),f={toc:h},g="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A switch element is a user interface component that allows users to toggle between two or more states. It is commonly used to turn on/off a setting, enable/disable a feature, or select between options."),(0,o.kt)(p,{src:i.Z,component:r.Z,mdxType:"InteractiveExample"}),(0,o.kt)("p",null,"The following implementation of a switch relies on ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#animatable-value"},"animatable values"),". Leveraging animatable values of color and position enables smooth transition between the two states."),(0,o.kt)("samp",{id:"Switch"},"Switch"),(0,o.kt)(l.Z,{src:i.Z,showLines:[26,52],mdxType:"CollapsibleCode"}),(0,o.kt)(w,{sources:{android:"/react-native-reanimated/recordings/examples/switch_android.mp4",ios:"/react-native-reanimated/recordings/examples/switch_ios.mov"},mdxType:"ExampleVideo"}),(0,o.kt)("p",null,"We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSharedValue")," hook to store the dimensions of the element, which allows for precise calculation of position changes during the animation. The hook is there to prevent unnecessary re-renders."),(0,o.kt)(l.Z,{src:i.Z,showLines:[23,25],mdxType:"CollapsibleCode"}),(0,o.kt)("p",null,"The values are updated during the ",(0,o.kt)("inlineCode",{parentName:"p"},"onLayout")," event of the element."),(0,o.kt)(l.Z,{src:i.Z,showLines:[56,61],mdxType:"CollapsibleCode"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Switch")," component can represent any boolean value passed as a prop. The state dynamically adjusts based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," prop resulting in smooth transition animations. It enables passing any function using the ",(0,o.kt)("inlineCode",{parentName:"p"},"onPress")," prop. The ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," prop controls the duration of the animation. The ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"trackColors")," props enable personalization."),(0,o.kt)("samp",{id:"Switch"},"Switch"),(0,o.kt)(l.Z,{src:i.Z,showLines:[16,67],mdxType:"CollapsibleCode"}))}v.isMDXComponent=!0},80220:(e,t,n)=>{n.d(t,{Z:()=>a});const a="import React from 'react';\nimport {\n  Pressable,\n  SafeAreaView,\n  View,\n  StyleSheet,\n  Button,\n} from 'react-native';\nimport Animated, {\n  interpolate,\n  interpolateColor,\n  useAnimatedStyle,\n  useSharedValue,\n  withTiming,\n} from 'react-native-reanimated';\n\nconst Switch = ({\n  value,\n  onPress,\n  style,\n  duration = 400,\n  trackColors = { on: '#82cab2', off: '#fa7f7c' },\n}) => {\n  const height = useSharedValue(0);\n  const width = useSharedValue(0);\n\n  const trackAnimatedStyle = useAnimatedStyle(() => {\n    const color = interpolateColor(\n      value.value,\n      [0, 1],\n      [trackColors.off, trackColors.on]\n    );\n    const colorValue = withTiming(color, { duration });\n\n    return {\n      backgroundColor: colorValue,\n      borderRadius: height.value / 2,\n    };\n  });\n\n  const thumbAnimatedStyle = useAnimatedStyle(() => {\n    const moveValue = interpolate(\n      Number(value.value),\n      [0, 1],\n      [0, width.value - height.value]\n    );\n    const translateValue = withTiming(moveValue, { duration });\n\n    return {\n      transform: [{ translateX: translateValue }],\n      borderRadius: height.value / 2,\n    };\n  });\n\n  return (\n    <Pressable onPress={onPress}>\n      <Animated.View\n        onLayout={(e) => {\n          height.value = e.nativeEvent.layout.height;\n          width.value = e.nativeEvent.layout.width;\n        }}\n        style={[switchStyles.track, style, trackAnimatedStyle]}>\n        <Animated.View\n          style={[switchStyles.thumb, thumbAnimatedStyle]}></Animated.View>\n      </Animated.View>\n    </Pressable>\n  );\n};\n\nconst switchStyles = StyleSheet.create({\n  track: {\n    alignItems: 'flex-start',\n    width: 100,\n    height: 40,\n    padding: 5,\n  },\n  thumb: {\n    height: '100%',\n    aspectRatio: 1,\n    backgroundColor: 'white',\n  },\n});\n\nexport default function App() {\n  const isOn = useSharedValue(false);\n\n  const handlePress = () => {\n    isOn.value = !isOn.value;\n  };\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <Switch value={isOn} onPress={handlePress} style={styles.switch} />\n      <View style={styles.buttonContainer}>\n        <Button onPress={handlePress} title=\"Click me\" />\n      </View>\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  switch: {\n    width: 200,\n    height: 80,\n    padding: 10,\n  },\n  container: {\n    flex: 1,\n    height: 300,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  buttonContainer: {\n    paddingTop: '1rem',\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'center',\n    alignItems: 'center',\n  },\n});\n"},72400:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),o=n(28033),r=n(88548),i=n(24404),l=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,o=e.color,l=e.disabled,c=e.onPress,u=e.testID,d=e.title;return a.createElement(r.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:l,focusable:!l,onPress:c,ref:t,style:[s.button,o&&{backgroundColor:o},l&&s.buttonDisabled],testID:u},a.createElement(i.Z,{style:[s.text,l&&s.textDisabled]},d))}));l.displayName="Button";var s=o.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const c=l},76636:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(63366),r=n(67294),i=n(28033),l=n(67177),s=n(13145),c=["style"],u=s.Z&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",d=r.forwardRef(((e,t)=>{var n=e.style,s=(0,o.Z)(e,c);return r.createElement(l.Z,(0,a.Z)({},s,{ref:t,style:i.Z.compose(h.root,n)}))}));d.displayName="SafeAreaView";var h=i.Z.create({root:{paddingTop:u+"(safe-area-inset-top)",paddingRight:u+"(safe-area-inset-right)",paddingBottom:u+"(safe-area-inset-bottom)",paddingLeft:u+"(safe-area-inset-left)"}});const m=d}}]);