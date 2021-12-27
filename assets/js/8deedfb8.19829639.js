"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[556],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),d=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),k=n,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||i;return a?l.createElement(c,r(r({ref:t},m),{},{components:a})):l.createElement(c,r({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26437:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return s}});var l=a(87462),n=a(63366),i=(a(67294),a(3905)),r=["components"],o={},p=void 0,d={type:"mdx",permalink:"/Knit/CHANGELOG",source:"@site/pages/CHANGELOG.md"},m=[{value:"1.4.1",id:"141",children:[],level:2},{value:"1.4.0",id:"140",children:[],level:2},{value:"1.3.0",id:"130",children:[],level:2},{value:"1.2.1",id:"121",children:[],level:2},{value:"1.2.0",id:"120",children:[],level:2},{value:"1.1.0-rc.2",id:"110-rc2",children:[],level:2},{value:"1.1.0-rc.1",id:"110-rc1",children:[],level:2},{value:"0.0.22-alpha",id:"0022-alpha",children:[],level:2},{value:"0.0.21-alpha",id:"0021-alpha",children:[],level:2},{value:"0.0.20-alpha",id:"0020-alpha",children:[],level:2},{value:"0.0.19-alpha",id:"0019-alpha",children:[],level:2},{value:"0.0.18-alpha",id:"0018-alpha",children:[{value:"Components",id:"components",children:[],level:3},{value:"Documentation",id:"documentation",children:[],level:3},{value:"Stability",id:"stability",children:[],level:3}],level:2},{value:"0.0.17-alpha",id:"0017-alpha",children:[],level:2},{value:"0.0.16-alpha",id:"0016-alpha",children:[],level:2},{value:"0.0.15-alpha",id:"0015-alpha",children:[],level:2},{value:"0.0.14-alpha",id:"0014-alpha",children:[],level:2},{value:"0.0.13-alpha",id:"0013-alpha",children:[],level:2},{value:"0.0.12-alpha",id:"0012-alpha",children:[],level:2},{value:"0.0.11-alpha",id:"0011-alpha",children:[],level:2},{value:"0.0.10-alpha",id:"0010-alpha",children:[],level:2},{value:"0.0.9-alpha",id:"009-alpha",children:[],level:2},{value:"0.0.8-alpha",id:"008-alpha",children:[],level:2},{value:"0.0.7-alpha",id:"007-alpha",children:[],level:2},{value:"0.0.6-alpha",id:"006-alpha",children:[],level:2},{value:"0.0.5-alpha",id:"005-alpha",children:[],level:2},{value:"0.0.4-alpha",id:"004-alpha",children:[],level:2},{value:"0.0.3-alpha",id:"003-alpha",children:[],level:2},{value:"0.0.2-alpha",id:"002-alpha",children:[],level:2},{value:"0.0.1-alpha",id:"001-alpha",children:[],level:2}],u={toc:m};function s(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"141"},"1.4.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update the Comm module to patch a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Sleitnick/RbxUtil/pull/27"},"middleware bug")," only affecting middleware that tries to change number of arguments (i.e. injecting custom arguments will now be fixed)")),(0,i.kt)("h2",{id:"140"},"1.4.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ability to set independent middleware per service, but on the server and the client"),(0,i.kt)("li",{parentName:"ul"},"Added tutorial video links"),(0,i.kt)("li",{parentName:"ul"},"Add short-circuit evaluation to ",(0,i.kt)("inlineCode",{parentName:"li"},"GetService")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"GetController")," functions for better performance when the service/controller exists"),(0,i.kt)("li",{parentName:"ul"},"Change Comm module to use service name as namespace instead of nested ",(0,i.kt)("inlineCode",{parentName:"li"},"__comm__")," folder"),(0,i.kt)("li",{parentName:"ul"},"Documentation improvements"),(0,i.kt)("li",{parentName:"ul"},"Breaking changes to middleware assignment (now within one ",(0,i.kt)("inlineCode",{parentName:"li"},"Middleware")," table instead of two for inbound/outbound)")),(0,i.kt)("h2",{id:"130"},"1.3.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add support for RemoteProperties via Comm library")),(0,i.kt)("h2",{id:"121"},"1.2.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add updated dependencies to the ",(0,i.kt)("inlineCode",{parentName:"li"},"wally_bundle.toml")," dependency list")),(0,i.kt)("h2",{id:"120"},"1.2.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added options to include middleware")),(0,i.kt)("h2",{id:"110-rc2"},"1.1.0-rc.2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"Services")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Controllers")," properties to force use of ",(0,i.kt)("inlineCode",{parentName:"li"},"GetService")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"GetController")," functions"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"KnitOptions")," argument for KnitClient to toggle whether service methods simply yield or return promises (promises by default)"),(0,i.kt)("li",{parentName:"ul"},"Various documentation improvements")),(0,i.kt)("h2",{id:"110-rc1"},"1.1.0-rc.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrated all core modules to Wally"),(0,i.kt)("li",{parentName:"ul"},"Revamped documentation")),(0,i.kt)("h2",{id:"0022-alpha"},"0.0.22-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix ",(0,i.kt)("inlineCode",{parentName:"li"},"TableUtil.Sample")," algorithm to properly implement a partial Fisher-Yates shuffle"),(0,i.kt)("li",{parentName:"ul"},"Fix ",(0,i.kt)("inlineCode",{parentName:"li"},"TableUtil.Reduce")," to handle the ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," parameter properly"),(0,i.kt)("li",{parentName:"ul"},"Update Janitor to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/howmanysmall/Janitor/releases/tag/V1.13.6"},"v1.13.6")),(0,i.kt)("li",{parentName:"ul"},"Small documentation adjustments")),(0,i.kt)("h2",{id:"0021-alpha"},"0.0.21-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix issue with having multiple required components"),(0,i.kt)("li",{parentName:"ul"},"Adds ",(0,i.kt)("inlineCode",{parentName:"li"},"Sample")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Zip")," to TableUtil"),(0,i.kt)("li",{parentName:"ul"},"Improvements to Timer module")),(0,i.kt)("h2",{id:"0020-alpha"},"0.0.20-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixes bug with Timer class"),(0,i.kt)("li",{parentName:"ul"},"Updates Janitor"),(0,i.kt)("li",{parentName:"ul"},"Removes unnecessary parentheses"),(0,i.kt)("li",{parentName:"ul"},"Adds some more Luau types")),(0,i.kt)("h2",{id:"0019-alpha"},"0.0.19-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New Signal implementation"),(0,i.kt)("li",{parentName:"ul"},"Remove Thread module in favor of new ",(0,i.kt)("inlineCode",{parentName:"li"},"task.spawn")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"task.defer")," functions"),(0,i.kt)("li",{parentName:"ul"},"Add Janitor / Remove Maid"),(0,i.kt)("li",{parentName:"ul"},"Add Timer module")),(0,i.kt)("h2",{id:"0018-alpha"},"0.0.18-alpha"),(0,i.kt)("h3",{id:"components"},"Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added optional ",(0,i.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/Knit/util/component/#required-components"},(0,i.kt)("inlineCode",{parentName:"a"},"RequiredComponents"))," table for components"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/Knit/util/component/#observe"},(0,i.kt)("inlineCode",{parentName:"a"},"Observe"))," method for components"),(0,i.kt)("li",{parentName:"ul"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"li"},"Added")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Removed")," events not being cleaned up when component class destroyed"),(0,i.kt)("li",{parentName:"ul"},"Fixed lifecycle RunService method bindings not being cleaned up properly for future reuse")),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/Knit/util/component"},"more documentation")," for components")),(0,i.kt)("h3",{id:"stability"},"Stability"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upgraded CI/CD pipeline to use latest packages")),(0,i.kt)("h2",{id:"0017-alpha"},"0.0.17-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hotfix for TableUtil ",(0,i.kt)("inlineCode",{parentName:"li"},"Sync"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Assign"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Extend"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"Shuffle")," functions to do shallow copies instead of deep copies"),(0,i.kt)("li",{parentName:"ul"},"Fix release GitHub action to properly use ",(0,i.kt)("inlineCode",{parentName:"li"},'"Knit"')," as the top-level directory name within the zipped file"),(0,i.kt)("li",{parentName:"ul"},"Fix documentation to properly use user preference theme (light/dark)")),(0,i.kt)("h2",{id:"0016-alpha"},"0.0.16-alpha"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"[BR]")," = Breaking Change"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Project directory restructure"),(0,i.kt)("li",{parentName:"ul"},"Can now include Knit as a Git submodule and reference the default rojo project to sync in (see below)"),(0,i.kt)("li",{parentName:"ul"},"Added unit tests for Knit-specific utility modules"),(0,i.kt)("li",{parentName:"ul"},"Added simple integration tests"),(0,i.kt)("li",{parentName:"ul"},"TableUtil fixes, additions, and improvements:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[BR]")," All functions (except ",(0,i.kt)("inlineCode",{parentName:"li"},"FastRemove")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"FastRemoveFirstValue"),") no longer mutate table"),(0,i.kt)("li",{parentName:"ul"},"Fix ",(0,i.kt)("inlineCode",{parentName:"li"},"Filter")," bug introduced in v0.0.15-alpha"),(0,i.kt)("li",{parentName:"ul"},"Fix behavior of ",(0,i.kt)("inlineCode",{parentName:"li"},"Extend")," to extend arrays and not dictionaries (use ",(0,i.kt)("inlineCode",{parentName:"li"},"Assign")," to extend a dictionary)"),(0,i.kt)("li",{parentName:"ul"},"Add optional RNG override parameter for ",(0,i.kt)("inlineCode",{parentName:"li"},"Shuffle")),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"Flat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"FlatMap"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Keys"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Find"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Every"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"Some")," functions"),(0,i.kt)("li",{parentName:"ul"},"Add documentation page for TableUtil"))),(0,i.kt)("li",{parentName:"ul"},"Simplify ",(0,i.kt)("inlineCode",{parentName:"li"},"Knit.OnStart()")," internally to use ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise.FromEvent")),(0,i.kt)("li",{parentName:"ul"},"Update Rojo version used by CI/CD pipeline"),(0,i.kt)("li",{parentName:"ul"},"Fix broken links in documentation pages")),(0,i.kt)("h2",{id:"0015-alpha"},"0.0.15-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory leak fixed with Streamable when instance was immediately available"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Knit.GetService(serviceName)")," added to server-side Knit"),(0,i.kt)("li",{parentName:"ul"},"Minor improvements to TableUtil"),(0,i.kt)("li",{parentName:"ul"},"Util documentation split across multiple pages")),(0,i.kt)("h2",{id:"0014-alpha"},"0.0.14-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix Signal leak when firing with no connections"),(0,i.kt)("li",{parentName:"ul"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"._instance")," to ",(0,i.kt)("inlineCode",{parentName:"li"},".Instance")," in Component"),(0,i.kt)("li",{parentName:"ul"},"Components will use attributes to store unique ID instead of StringValue"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"Signal.Proxy")," constructor to wrap built-in RBXScriptSignals"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"Maid:GivePromise")," method"),(0,i.kt)("li",{parentName:"ul"},"Allow dictionary tables in ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamableUtil.Compound")," observers list")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note breaking changes from above:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When upgrading, make sure to change ",(0,i.kt)("inlineCode",{parentName:"li"},"._instance")," field accessors to ",(0,i.kt)("inlineCode",{parentName:"li"},".Instance")," for components"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ServerID")," StringValue for components has been switched to use attributes: ",(0,i.kt)("inlineCode",{parentName:"li"},'instance:GetAttribute("ComponentServerId")'))),(0,i.kt)("h2",{id:"0013-alpha"},"0.0.13-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Component:WaitFor")," has been rewritten to utilize built-in promise features better, which also eliminated an existing event connection leak."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Streamable")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamableUtil")," modules added to easily manage parts that may stream in & out during runtime when using ",(0,i.kt)("a",{parentName:"li",href:"https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingEnabled"},(0,i.kt)("inlineCode",{parentName:"a"},"StreamingEnabled")),"."),(0,i.kt)("li",{parentName:"ul"},"Documentation improvements.")),(0,i.kt)("h2",{id:"0012-alpha"},"0.0.12-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added new 'Add' functions to automatically load all modules in a folder. This is useful for quickly loading a bunch of service or controller modules:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KnitServer.AddServices(folder: Instance)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KnitServer.AddServicesDeep(folder: Instance)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KnitClient.AddControllers(folder: Instance)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KnitClient.AddControllersDeep(folder: Instance)")))),(0,i.kt)("li",{parentName:"ul"},"Split up remotes to server/client versions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RemoteEvent")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"RemoteSignal")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ClientRemoteSignal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RemoteProperty")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"RemoteProperty")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ClientRemoteProperty")))),(0,i.kt)("li",{parentName:"ul"},"Knit module isn't required to live in ReplicatedStorage now"),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"EnumList")," class which wraps ",(0,i.kt)("inlineCode",{parentName:"li"},"Symbol"),"s to create pseudo-enums"),(0,i.kt)("li",{parentName:"ul"},"Added style guide in documentation")),(0,i.kt)("h2",{id:"0011-alpha"},"0.0.11-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Documentation fixes and additions"),(0,i.kt)("li",{parentName:"ul"},"Better table support for ",(0,i.kt)("inlineCode",{parentName:"li"},"RemoteProperty")," class"),(0,i.kt)("li",{parentName:"ul"},"Fixes and additions to ",(0,i.kt)("inlineCode",{parentName:"li"},"Option")," class"),(0,i.kt)("li",{parentName:"ul"},"Optional behavior argument for ",(0,i.kt)("inlineCode",{parentName:"li"},"Thread.DelayRepeat"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Note:")," If using var-args list for ",(0,i.kt)("inlineCode",{parentName:"li"},"DelayRepeat"),", this is a breaking change. ",(0,i.kt)("inlineCode",{parentName:"li"},"DelayRepeat"),"'s third argument must be the behavior (",(0,i.kt)("inlineCode",{parentName:"li"},"Thread.DelayRepeatBehavior.Delayed")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Thread.DelayRepeatBehavior.Immediate"),")."))),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"Symbol")," class")),(0,i.kt)("h2",{id:"0010-alpha"},"0.0.10-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Switch default branch from ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"main")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Component:WaitFor")," first arg can now be a name or instance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Init")," for individual components is called after a heartbeat, which helps allow components to get other components without race conditions when ",(0,i.kt)("inlineCode",{parentName:"li"},"Component.Auto")," is used.")),(0,i.kt)("h2",{id:"009-alpha"},"0.0.9-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed issue where remote objects were parented before services completed initialization. This created a possible race condition between services initializing and clients loading Knit.")),(0,i.kt)("h2",{id:"008-alpha"},"0.0.8-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"Option")," class for creating optionals."),(0,i.kt)("li",{parentName:"ul"},"Added serialization/deserialization automatic flow for RemoteEvents and RemoteFunctions."),(0,i.kt)("li",{parentName:"ul"},"Upgraded ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise")," to v3.0.1.")),(0,i.kt)("h2",{id:"007-alpha"},"0.0.7-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added a few tests (very few so far)"),(0,i.kt)("li",{parentName:"ul"},"Added PascalCase methods to Promise module"),(0,i.kt)("li",{parentName:"ul"},"Components will only trigger for instances that are descendants of Players or Workspace by default"),(0,i.kt)("li",{parentName:"ul"},"GitHub workflow to auto-publish the ",(0,i.kt)("a",{parentName:"li",href:"https://www.roblox.com/library/5530714855/Knit"},"Knit")," module to Roblox.")),(0,i.kt)("h2",{id:"006-alpha"},"0.0.6-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add more functionality to Component module")),(0,i.kt)("h2",{id:"005-alpha"},"0.0.5-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added Component class, which allows developers to bind component classes to in-game instances using the CollectionService tags"),(0,i.kt)("li",{parentName:"ul"},"Renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"Event")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Signal"))),(0,i.kt)("h2",{id:"004-alpha"},"0.0.4-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ability to use tables within RemoteProperty object"),(0,i.kt)("li",{parentName:"ul"},"RemoteProperty now has ",(0,i.kt)("inlineCode",{parentName:"li"},"property:Replicate()")," method server-side that must be called when a table value is changed (",(0,i.kt)("a",{parentName:"li",href:"https://sleitnick.github.io/Knit/util/#remoteproperty"},"see doc"),")")),(0,i.kt)("h2",{id:"003-alpha"},"0.0.3-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add more documentation"),(0,i.kt)("li",{parentName:"ul"},"Inject ",(0,i.kt)("inlineCode",{parentName:"li"},"Player")," field into ",(0,i.kt)("inlineCode",{parentName:"li"},"KnitClient"))),(0,i.kt)("h2",{id:"002-alpha"},"0.0.2-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"Knit.OnStart()")," to capture when Knit starts"),(0,i.kt)("li",{parentName:"ul"},"Add RemoteEvent and RemoteProperty"),(0,i.kt)("li",{parentName:"ul"},"Add documentation")),(0,i.kt)("h2",{id:"001-alpha"},"0.0.1-alpha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initial release")))}s.isMDXComponent=!0}}]);