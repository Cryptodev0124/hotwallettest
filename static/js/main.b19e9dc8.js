/*! For license information please see main.b19e9dc8.js.LICENSE.txt */
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ly=wy`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Fy=wy`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Dy=ky("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Uy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ly} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Fy} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,zy=wy`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Hy=ky("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${zy} 1s linear infinite;
`,qy=wy`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Gy=wy`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Vy=ky("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Gy} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ky=ky("div")`
  position: absolute;
`,Wy=ky("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Zy=wy`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Yy=ky("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Zy} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Jy=({toast:e})=>{let{icon:r,type:n,iconTheme:i}=e;return void 0!==r?"string"==typeof r?t.createElement(Yy,null,r):r:"blank"===n?null:t.createElement(Wy,null,t.createElement(Hy,{...i}),"loading"!==n&&t.createElement(Ky,null,"error"===n?t.createElement(Dy,{...i}):t.createElement(Vy,{...i})))},Qy=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Xy=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,$y=ky("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eg=ky("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,tg=t.memo((({toast:e,position:r,style:n,children:i})=>{let o=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,i]=Ey()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Qy(r),Xy(r)];return{animation:t?`${wy(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${wy(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||r||"top-center",e.visible):{opacity:0},a=t.createElement(Jy,{toast:e}),s=t.createElement(eg,{...e.ariaProps},xy(e.message,e));return t.createElement($y,{className:e.className,style:{...o,...n,...e.style}},"function"==typeof i?i({icon:a,message:s}):t.createElement(t.Fragment,null,a,s))}));!function(e,t,r,n){ly.p=t,yy=e,gy=r,vy=n}(t.createElement);var rg=({id:e,className:r,style:n,onHeightUpdate:i,children:o})=>{let a=t.useCallback((t=>{if(t){let r=()=>{let r=t.getBoundingClientRect().height;i(e,r)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,i]);return t.createElement("div",{ref:a,className:r,style:n},o)},ng=by`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ig=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:i,children:o,containerStyle:a,containerClassName:s})=>{let{toasts:u,handlers:c}=Ry(n);return t.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map((n=>{let a=n.position||r,s=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ey()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...i}})(a,c.calculateOffset(n,{reverseOrder:e,gutter:i,defaultPosition:r}));return t.createElement(rg,{id:n.id,key:n.id,onHeightUpdate:c.updateHeight,className:n.visible?ng:"",style:s},"custom"===n.type?xy(n.message,n):o?o(n):t.createElement(tg,{toast:n,position:a}))})))},og=jy,ag=class extends Wt{#m;#b;#y;#s;#g;#v;constructor(e){super(),this.#v=!1,this.#g=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#y=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#m=function(e){const t="function"===typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,n=r?"function"===typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=e.state??this.#m,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#s?.promise}setOptions(e){this.options={...this.#g,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#y.remove(this)}setData(e,t){const r=Ht(this.state.data,e,this.options);return this.#u({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),r}setState(e,t){this.#u({type:"setState",state:e,setStateOptions:t})}cancel(e){const t=this.#s?.promise;return this.#s?.cancel(e),t?t.then(Bt).catch(Bt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#m)}isActive(){return this.observers.some((e=>{return!1!==(t=e.options.enabled,r=this,"function"===typeof t?t(r):t);var t,r}))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Vt||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some((e=>e.getCurrentResult().isStale)):void 0===this.state.data)}isStaleByTime(e=0){return this.state.isInvalidated||void 0===this.state.data||!function(e,t){return Math.max(e+(t||0)-Date.now(),0)}(this.state.dataUpdatedAt,e)}onFocus(){const e=this.observers.find((e=>e.shouldFetchOnWindowFocus()));e?.refetch({cancelRefetch:!1}),this.#s?.continue()}onOnline(){const e=this.observers.find((e=>e.shouldFetchOnReconnect()));e?.refetch({cancelRefetch:!1}),this.#s?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#y.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter((t=>t!==e)),this.observers.length||(this.#s&&(this.#v?this.#s.cancel({revert:!0}):this.#s.cancelRetry()),this.scheduleGc()),this.#y.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#u({type:"invalidate"})}fetch(e,t){if("idle"!==this.state.fetchStatus)if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#s)return this.#s.continueRetry(),this.#s.promise;if(e&&this.setOptions(e),!this.options.queryFn){const e=this.observers.find((e=>e.options.queryFn));e&&this.setOptions(e.options)}const r=new AbortController,n=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#v=!0,r.signal)})},i={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{const e=Kt(this.options,t),r={queryKey:this.queryKey,meta:this.meta};return n(r),this.#v=!1,this.options.persister?this.options.persister(e,r,this):e(r)}};n(i),this.options.behavior?.onFetch(i,this),this.#b=this.state,"idle"!==this.state.fetchStatus&&this.state.fetchMeta===i.fetchOptions?.meta||this.#u({type:"fetch",meta:i.fetchOptions?.meta});const o=e=>{er(e)&&e.silent||this.#u({type:"error",error:e}),er(e)||(this.#y.config.onError?.(e,this),this.#y.config.onSettled?.(this.state.data,e,this)),this.scheduleGc()};return this.#s=tr({initialPromise:t?.initialPromise,fn:i.fetchFn,abort:r.abort.bind(r),onSuccess:e=>{if(void 0!==e){try{this.setData(e)}catch(t){return void o(t)}this.#y.config.onSuccess?.(e,this),this.#y.config.onSettled?.(e,this.state.error,this),this.scheduleGc()}else o(new Error(`${this.queryHash} data is undefined`))},onError:o,onFail:(e,t)=>{this.#u({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#u({type:"pause"})},onContinue:()=>{this.#u({type:"continue"})},retry:i.options.retry,retryDelay:i.options.retryDelay,networkMode:i.options.networkMode,canRun:()=>!0}),this.#s.start()}#u(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...sg(t.data,this.options),fetchMeta:e.meta??null};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return er(r)&&r.revert&&this.#b?{...this.#b,fetchStatus:"idle"}:{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),Ct.batch((()=>{this.observers.forEach((e=>{e.onQueryUpdate()})),this.#y.notify({query:this,type:"updated",action:e})}))}};function sg(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Xt(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}var ug=class extends Zt{constructor(e={}){super(),this.config=e,this.#w=new Map}#w;build(e,t,r){const n=t.queryKey,i=t.queryHash??Nt(n,t);let o=this.get(i);return o||(o=new ag({cache:this,queryKey:n,queryHash:i,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(o)),o}add(e){this.#w.has(e.queryHash)||(this.#w.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#w.get(e.queryHash);t&&(e.destroy(),t===e&&this.#w.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Ct.batch((()=>{this.getAll().forEach((e=>{this.remove(e)}))}))}get(e){return this.#w.get(e)}getAll(){return[...this.#w.values()]}find(e){const t={exact:!0,...e};return this.getAll().find((e=>jt(t,e)))}findAll(e={}){const t=this.getAll();return Object.keys(e).length>0?t.filter((t=>jt(e,t))):t}notify(e){Ct.batch((()=>{this.listeners.forEach((t=>{t(e)}))}))}onFocus(){Ct.batch((()=>{this.getAll().forEach((e=>{e.onFocus()}))}))}onOnline(){Ct.batch((()=>{this.getAll().forEach((e=>{e.onOnline()}))}))}},cg=class extends Zt{constructor(e={}){super(),this.config=e,this.#k=new Map,this.#x=Date.now()}#k;#x;build(e,t,r){const n=new rr({mutationCache:this,mutationId:++this.#x,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){const t=fg(e),r=this.#k.get(t)??[];r.push(e),this.#k.set(t,r),this.notify({type:"added",mutation:e})}remove(e){const t=fg(e);if(this.#k.has(t)){const r=this.#k.get(t)?.filter((t=>t!==e));r&&(0===r.length?this.#k.delete(t):this.#k.set(t,r))}this.notify({type:"removed",mutation:e})}canRun(e){const t=this.#k.get(fg(e))?.find((e=>"pending"===e.state.status));return!t||t===e}runNext(e){const t=this.#k.get(fg(e))?.find((t=>t!==e&&t.state.isPaused));return t?.continue()??Promise.resolve()}clear(){Ct.batch((()=>{this.getAll().forEach((e=>{this.remove(e)}))}))}getAll(){return[...this.#k.values()].flat()}find(e){const t={exact:!0,...e};return this.getAll().find((e=>Mt(t,e)))}findAll(e={}){return this.getAll().filter((t=>Mt(e,t)))}notify(e){Ct.batch((()=>{this.listeners.forEach((t=>{t(e)}))}))}resumePausedMutations(){const e=this.getAll().filter((e=>e.state.isPaused));return Ct.batch((()=>Promise.all(e.map((e=>e.continue().catch(Bt))))))}};function fg(e){return e.options.scope?.id??String(e.mutationId)}function lg(e){return{onFetch:(t,r)=>{const n=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,o=t.state.data?.pages||[],a=t.state.data?.pageParams||[];let s={pages:[],pageParams:[]},u=0;const c=async()=>{let r=!1;const c=Kt(t.options,t.fetchOptions),f=async(e,n,i)=>{if(r)return Promise.reject();if(null==n&&e.pages.length)return Promise.resolve(e);const o={queryKey:t.queryKey,pageParam:n,direction:i?"backward":"forward",meta:t.options.meta};var a;a=o,Object.defineProperty(a,"signal",{enumerable:!0,get:()=>(t.signal.aborted?r=!0:t.signal.addEventListener("abort",(()=>{r=!0})),t.signal)});const s=await c(o),{maxPages:u}=t.options,f=i?Gt:qt;return{pages:f(e.pages,s,u),pageParams:f(e.pageParams,n,u)}};if(i&&o.length){const e="backward"===i,t={pages:o,pageParams:a},r=(e?hg:dg)(n,t);s=await f(t,r,e)}else{const t=e??o.length;do{const e=0===u?a[0]??n.initialPageParam:dg(n,s);if(u>0&&null==e)break;s=await f(s,e),u++}while(u<t)}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r):t.fetchFn=c}}}function dg(e,{pages:t,pageParams:r}){const n=t.length-1;return t.length>0?e.getNextPageParam(t[n],t,r[n],r):void 0}function hg(e,{pages:t,pageParams:r}){return t.length>0?e.getPreviousPageParam?.(t[0],t,r[0],r):void 0}const pg=function(e){const{multiInjectedProviderDiscovery:t=!0,storage:r=zb({storage:"undefined"!==typeof window&&window.localStorage?window.localStorage:Hb}),syncConnectedChain:n=!0,ssr:i=!1,...o}=e,a="undefined"!==typeof window&&t?Ob():void 0,s=Mb((()=>o.chains)),u=Mb((()=>[...o.connectors??[],...i?[]:a?.getProviders().map(f)??[]].map(c)));function c(e){const t=function(e){return new Rb(e)}(function(e=11){if(!Gb||Vb+e>2*qb){Gb="",Vb=0;for(let e=0;e<qb;e++)Gb+=(256+256*Math.random()|0).toString(16).substring(1)}return Gb.substring(Vb,Vb+++e)}()),n={...e({emitter:t,chains:s.getState(),storage:r,transports:o.transports}),emitter:t,uid:t.uid};return t.on("connect",y),n.setup?.(),n}function f(e){const{info:t}=e,r=e.provider;return pl({target:{...t,id:t.rdns,provider:r}})}const l=new Map;function d(){return{chainId:s.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let h;const p="0.0.0-canary-";h=gt.startsWith(p)?Number.parseInt(gt.replace(p,"")):Number.parseInt(gt.split(".")[0]??"0");const m=Mb(Cb(r?Tb(d,{migrate(e,t){if(t===h)return e;const r=d(),n=e&&"object"===typeof e&&"chainId"in e&&"number"===typeof e.chainId&&s.getState().some((t=>t.id===e.chainId))?e.chainId:r.chainId;return{...r,chainId:n}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map((([e,t])=>{const{id:r,name:n,type:i,uid:o}=t.connector,a={id:r,name:n,type:i,uid:o};return[e,{...t,connector:a}]}))},chainId:e.chainId,current:e.current}),merge:(e,t)=>("object"===typeof e&&e&&"status"in e&&delete e.status,{...t,...e}),skipHydration:i,storage:r,version:h}):d));function b(e){m.setState((t=>{const r=t.connections.get(e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??r.accounts,chainId:e.chainId??r.chainId,connector:r.connector})}:t}))}function y(e){"connecting"!==m.getState().status&&"reconnecting"!==m.getState().status&&m.setState((t=>{const r=u.getState().find((t=>t.uid===e.uid));return r?(r.emitter.listenerCount("connect")&&r.emitter.off("connect",b),r.emitter.listenerCount("change")||r.emitter.on("change",b),r.emitter.listenerCount("disconnect")||r.emitter.on("disconnect",g),{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:r}),current:e.uid,status:"connected"}):t}))}function g(e){m.setState((t=>{const r=t.connections.get(e.uid);if(r){const e=r.connector;e.emitter.listenerCount("change")&&r.connector.emitter.off("change",b),e.emitter.listenerCount("disconnect")&&r.connector.emitter.off("disconnect",g),e.emitter.listenerCount("connect")||r.connector.emitter.on("connect",y)}if(t.connections.delete(e.uid),0===t.connections.size)return{...t,connections:new Map,current:null,status:"disconnected"};const n=t.connections.values().next().value;return{...t,connections:new Map(t.connections),current:n.connector.uid}}))}return n&&m.subscribe((({connections:e,current:t})=>t?e.get(t)?.chainId:void 0),(e=>{const t=s.getState().some((t=>t.id===e));if(t)return m.setState((t=>({...t,chainId:e??t.chainId})))})),a?.subscribe((e=>{const t=new Map;for(const r of u.getState())t.set(r.id,!0);const n=[];for(const r of e){const e=c(f(r));t.has(e.id)||n.push(e)}r&&!m.persist.hasHydrated()||u.setState((e=>[...e,...n]),!0)})),{get chains(){return s.getState()},get connectors(){return u.getState()},storage:r,getClient:function(e={}){const t=e.chainId??m.getState().chainId,r=s.getState().find((e=>e.id===t));if(e.chainId&&!r)throw new hr;{const e=l.get(m.getState().chainId);if(e&&!r)return e;if(!r)throw new hr}{const e=l.get(t);if(e)return e}let n;if(o.client)n=o.client({chain:r});else{const e=r.id,t=s.getState().map((e=>e.id)),i={},a=Object.entries(o);for(const[r,n]of a)if("chains"!==r&&"client"!==r&&"connectors"!==r&&"transports"!==r)if("object"===typeof n)if(e in n)i[r]=n[e];else{const e=t.some((e=>e in n));if(e)continue;i[r]=n}else i[r]=n;n=Na({...i,chain:r,batch:i.batch??{multicall:!0},transport:t=>o.transports[e]({...t,connectors:u})})}return l.set(t,n),n},get state(){return m.getState()},setState(e){let t;t="function"===typeof e?e(m.getState()):e;const r=d();"object"!==typeof t&&(t=r);const n=Object.keys(r).some((e=>!(e in t)));n&&(t=r),m.setState(t,!0)},subscribe:(e,t,r)=>m.subscribe(e,t,r?{...r,fireImmediately:r.emitImmediately}:void 0),_internal:{mipd:a,store:m,ssr:Boolean(i),syncConnectedChain:n,transports:o.transports,chains:{setState(e){const t="function"===typeof e?e(s.getState()):e;if(0!==t.length)return s.setState(t,!0)},subscribe:e=>s.subscribe(e)},connectors:{providerDetailToConnector:f,setup:c,setState:e=>u.setState("function"===typeof e?e(u.getState()):e,!0),subscribe:e=>u.subscribe(e)},events:{change:b,connect:y,disconnect:g}}}}({chains:[iy,oy],connectors:[pl()],transports:{[iy.id]:Df(),[oy.id]:Df()}}),mg=new class{#A;#a;#g;#E;#S;#_;#P;#O;constructor(e={}){this.#A=e.queryCache||new ug,this.#a=e.mutationCache||new cg,this.#g=e.defaultOptions||{},this.#E=new Map,this.#S=new Map,this.#_=0}mount(){this.#_++,1===this.#_&&(this.#P=Yt.subscribe((async e=>{e&&(await this.resumePausedMutations(),this.#A.onFocus())})),this.#O=Jt.subscribe((async e=>{e&&(await this.resumePausedMutations(),this.#A.onOnline())})))}unmount(){this.#_--,0===this.#_&&(this.#P?.(),this.#P=void 0,this.#O?.(),this.#O=void 0)}isFetching(e){return this.#A.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#a.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#A.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{const r=this.defaultQueryOptions(e),n=this.#A.build(this,r);return e.revalidateIfStale&&n.isStaleByTime(Tt(r.staleTime,n))&&this.prefetchQuery(r),Promise.resolve(t)}}getQueriesData(e){return this.#A.findAll(e).map((({queryKey:e,state:t})=>[e,t.data]))}setQueryData(e,t,r){const n=this.defaultQueryOptions({queryKey:e}),i=this.#A.get(n.queryHash),o=i?.state.data,a=function(e,t){return"function"===typeof e?e(t):e}(t,o);if(void 0!==a)return this.#A.build(this,n).setData(a,{...r,manual:!0})}setQueriesData(e,t,r){return Ct.batch((()=>this.#A.findAll(e).map((({queryKey:e})=>[e,this.setQueryData(e,t,r)]))))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#A.get(t.queryHash)?.state}removeQueries(e){const t=this.#A;Ct.batch((()=>{t.findAll(e).forEach((e=>{t.remove(e)}))}))}resetQueries(e,t){const r=this.#A,n={type:"active",...e};return Ct.batch((()=>(r.findAll(e).forEach((e=>{e.reset()})),this.refetchQueries(n,t))))}cancelQueries(e={},t={}){const r={revert:!0,...t},n=Ct.batch((()=>this.#A.findAll(e).map((e=>e.cancel(r)))));return Promise.all(n).then(Bt).catch(Bt)}invalidateQueries(e={},t={}){return Ct.batch((()=>{if(this.#A.findAll(e).forEach((e=>{e.invalidate()})),"none"===e.refetchType)return Promise.resolve();const r={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(r,t)}))}refetchQueries(e={},t){const r={...t,cancelRefetch:t?.cancelRefetch??!0},n=Ct.batch((()=>this.#A.findAll(e).filter((e=>!e.isDisabled())).map((e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(Bt)),"paused"===e.state.fetchStatus?Promise.resolve():t}))));return Promise.all(n).then(Bt)}fetchQuery(e){const t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);const r=this.#A.build(this,t);return r.isStaleByTime(Tt(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Bt).catch(Bt)}fetchInfiniteQuery(e){return e.behavior=lg(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Bt).catch(Bt)}ensureInfiniteQueryData(e){return e.behavior=lg(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Jt.isOnline()?this.#a.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#A}getMutationCache(){return this.#a}getDefaultOptions(){return this.#g}setDefaultOptions(e){this.#g=e}setQueryDefaults(e,t){this.#E.set(Rt(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#E.values()];let r={};return t.forEach((t=>{Ut(e,t.queryKey)&&(r={...r,...t.defaultOptions})})),r}setMutationDefaults(e,t){this.#S.set(Rt(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#S.values()];let r={};return t.forEach((t=>{Ut(e,t.mutationKey)&&(r={...r,...t.defaultOptions})})),r}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#g.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Nt(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===Vt&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#g.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#A.clear(),this.#a.clear()}},bg=()=>(0,Xe.jsx)(qe,{children:(0,Xe.jsx)(Pb,{children:(0,Xe.jsx)("div",{children:(0,Xe.jsx)(yt,{config:pg,children:(0,Xe.jsxs)(ar,{client:mg,children:[(0,Xe.jsx)(ig,{position:"top-right",reverseOrder:!0,toastOptions:{duration:5e3},children:e=>(0,Xe.jsx)("div",{style:{cursor:"pointer"},onClick:()=>og.dismiss(e.id),children:(0,Xe.jsx)(tg,{onClick:()=>alert(1),toast:e})})}),(0,Xe.jsx)(He,{children:(0,Xe.jsx)(Re,{exact:!0,path:"/",children:(0,Xe.jsx)(lb,{})})})]})})})})});i.createRoot(document.getElementById("root")).render((0,Xe.jsx)(bg,{}))})()})();
//# sourceMappingURL=main.b19e9dc8.js.map