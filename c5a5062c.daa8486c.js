(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(179)),i={title:"Code"},s={unversionedId:"api-contract/start/code",id:"api-contract/start/code",isDocsHomePage:!1,title:"Code",description:"The CodePromise class allows the developer to manage calls to code deployment. In itself, it is easy to use for code deployment and it generally the first step, especially in cases where an existing codeHash is not available -",source:"@site/docs/api-contract/start/code.md",slug:"/api-contract/start/code",permalink:"/docs/api-contract/start/code",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/code.md",version:"current",sidebar:"reference",previous:{title:"Basics",permalink:"/docs/api-contract/start/basics"},next:{title:"Blueprint",permalink:"/docs/api-contract/start/blueprint"}},c=[{value:"Create a blueprint",id:"create-a-blueprint",children:[]},{value:"Use the blueprint",id:"use-the-blueprint",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"CodePromise")," class allows the developer to manage calls to code deployment. In itself, it is easy to use for code deployment and it generally the first step, especially in cases where an existing ",Object(o.b)("inlineCode",{parentName:"p"},"codeHash")," is not available -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import { ApiPromise } from '@polkadot/api';\nimport { CodePromise } from '@polkadot/api-contracts';\n\n...\n// Construct the API as per the API sections\n// (as in all examples, this connects to a local chain)\nconst api = await ApiPromise.create();\n\n// Construct our Code helper. The abi is an Abi object, an unparsed JSON string\n// or the raw JSON data (after doing a JSON.parse). The wasm is either a hex\n// string (0x prefixed), an Uint8Array or a Node.js Buffer object\nconst code = new CodePromise(api, abi, wasm);\n\n// Deploy the WASM, retrieve a Blueprint\n...\n")),Object(o.b)("p",null,"It is important to understand that the interfaces provided here are higher-level helpers, so some assumptions are made to make subsequent use easier. In the case of the ",Object(o.b)("inlineCode",{parentName:"p"},"CodePromise")," class this is quite visible. While a ",Object(o.b)("inlineCode",{parentName:"p"},"contracts.putCode")," is independent of any ABIs, for out helpers we always assume that the developer does have access to the ABI right at the start. This means that when code is deployed a Blueprint can be created with the correct ABI (and subsequent deployments can, once again, create a Contract with an attached ABI)."),Object(o.b)("p",null,"The helpers are there to help and make development easier by integrating the parts, nothing would stop a developer from making ",Object(o.b)("inlineCode",{parentName:"p"},"putCode")," or ",Object(o.b)("inlineCode",{parentName:"p"},"instantiate")," calls themselves."),Object(o.b)("h2",{id:"create-a-blueprint"},"Create a blueprint"),Object(o.b)("p",null,"After we have the initial structure above, the next step would be to actually deploy the code and retrieve a ",Object(o.b)("inlineCode",{parentName:"p"},"BlueprintPromise")," from the result. Building on the above example -"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"// Deploy the WASM, retrieve a Blueprint\nlet blueprint;\n\n// createBlueprint is a normal submittable, so use signAndSend\n// with an known Alice keypair (as per the API samples)\nconst unsub = await code\n  .createBlueprint()\n  .signAndSend(alicePair, (result) => {\n    if (result.status.isInBlock || result.status.isFinalized) {\n      // here we have an additional field in the result, containing the blueprint\n      blueprint = result.blueprint;\n      unsub();\n    }\n  })\n")),Object(o.b)("p",null,"As noted above the ",Object(o.b)("inlineCode",{parentName:"p"},"createBlueprint")," helper on the ",Object(o.b)("inlineCode",{parentName:"p"},"Code")," interface is a normal submittable, although it is enhanced to return an actual ",Object(o.b)("inlineCode",{parentName:"p"},"Blueprint")," based on the ",Object(o.b)("inlineCode",{parentName:"p"},"codeHash")," retrieved. Internally it sends a ",Object(o.b)("inlineCode",{parentName:"p"},"putCode")," and will listen for the correct emitted events. Based on the results and events (and the input ABI) it will subsequently create a helper object that can be used to deploy contracts."),Object(o.b)("h2",{id:"use-the-blueprint"},"Use the blueprint"),Object(o.b)("p",null,"After we have deployed the WASM on-chain, next we can use the ",Object(o.b)("a",{parentName:"p",href:"/docs/api-contract/start/blueprint"},"Blueprint result to deploy")," a contract on-chain."))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);