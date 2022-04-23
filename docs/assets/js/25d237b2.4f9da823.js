"use strict";(self.webpackChunknugetdefense_docs=self.webpackChunknugetdefense_docs||[]).push([[241],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3607:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={},s="Summary",u={unversionedId:"API Reference/NuGetDefense.Lib",id:"API Reference/NuGetDefense.Lib",title:"Summary",description:"NuGetDefense.Lib provides programmatic access to all the features of NuGetDefense. The main use is in the Scanner.Scan method which returns the number of vulnerabilities found.",source:"@site/docs/API Reference/NuGetDefense.Lib.md",sourceDirName:"API Reference",slug:"/API Reference/NuGetDefense.Lib",permalink:"/NuGetDefense/docs/API Reference/NuGetDefense.Lib",editUrl:"https://github.com/digitalcoyote/NuGetDefenseDocs/tree/master/docs/API Reference/NuGetDefense.Lib.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI Reference",permalink:"/NuGetDefense/docs/cli-reference"}},l={},p=[{value:"Scanner",id:"scanner",level:2},{value:"Scan(Scanoptions)",id:"scanscanoptions",level:3},{value:"GetNonSensitivePackages(out Dictionary&lt;string, NuGetPackage[]&gt;)",id:"getnonsensitivepackagesout-dictionarystring-nugetpackage",level:3},{value:"Scanoptions",id:"scanoptions",level:2},{value:"Cache",id:"cache",level:3}],f={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"summary"},"Summary"),(0,i.kt)("p",null,"NuGetDefense.Lib provides programmatic access to all the features of NuGetDefense. The main use is in the Scanner.Scan method which returns the number of vulnerabilities found."),(0,i.kt)("h2",{id:"scanner"},"Scanner"),(0,i.kt)("h3",{id:"scanscanoptions"},"Scan(Scanoptions)"),(0,i.kt)("p",null,"Scan is the main method and performs the same scan as NuGetDefense"),(0,i.kt)("h3",{id:"getnonsensitivepackagesout-dictionarystring-nugetpackage"},"GetNonSensitivePackages(out Dictionary<string, NuGetPackage[]>)"),(0,i.kt)("p",null,"Reads SensitivePackages in Settings and escapes all characters for Regex, then replaces ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," with ",(0,i.kt)("inlineCode",{parentName:"p"},".*")," (Regex wild Card for 0 or more of any character). Then returns a list of packages that do not match the wild card strings in SensitivePackages."),(0,i.kt)("h2",{id:"scanoptions"},"Scanoptions"),(0,i.kt)("h3",{id:"cache"},"Cache"),(0,i.kt)("p",null,"Currently this only accepts a SQLLitVulnerabilityCache (with ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Enabled"),") fields. Future versions will include a Type field to support non-local caches."))}d.isMDXComponent=!0}}]);