"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[231],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6796:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},c="iOS",p={unversionedId:"getting-started/prerequisites/react-native/ios",id:"getting-started/prerequisites/react-native/ios",title:"iOS",description:"It is presumed that you have a working [React",source:"@site/guides/getting-started/prerequisites/react-native/ios.md",sourceDirName:"getting-started/prerequisites/react-native",slug:"/getting-started/prerequisites/react-native/ios",permalink:"/guides/getting-started/prerequisites/react-native/ios",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Native",permalink:"/guides/getting-started/prerequisites/react-native/"},next:{title:"Android",permalink:"/guides/getting-started/prerequisites/react-native/android"}},u={},l=[{value:"Adding the Indy.Framework to a React Native application",id:"adding-the-indyframework-to-a-react-native-application",level:3}],d={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ios"},"iOS"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is presumed that you have a working ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev"},"React\nNative")," as explained\n",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"here"),".")),(0,o.kt)("h3",{id:"adding-the-indyframework-to-a-react-native-application"},"Adding the Indy.Framework to a React Native application"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your iOS target version has to be above 10.0 in order to work")),(0,o.kt)("p",null,"In order for the Aries JavaScript Ecosystem to use the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"indy-sdk")," on iOS the ",(0,o.kt)("inlineCode",{parentName:"p"},"Indy.Framework"),"\nhas to be added."),(0,o.kt)("p",null,"Due to some issues with manually building this library we have decided to host\na most up-to-date pre-built version. this is located\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/animo/Indy.Framework"},"here"),"."),(0,o.kt)("p",null,"Adding this to your application is just three simple steps."),(0,o.kt)("p",null,"First, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/animo/Indy.Framework"},"Indy.Framework")," has to be\ncloned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/animo/Indy.Framework\ncd Indy.Framework\n")),(0,o.kt)("p",null,"Secondly, we have to add the framework to your React Native project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mv Indy.Framework <YOUR_PROJECT_DIRECTORY>/ios/Pods/Frameworks/Indy.Framework\n")),(0,o.kt)("p",null,"Lastly, a command has to be ran, from the root of your project, to include the\nframework."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pod install --project-directory ios\n")))}m.isMDXComponent=!0}}]);