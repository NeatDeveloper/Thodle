// @bun
// Hello
function M(){let{process:e,Deno:r}=globalThis;return!(typeof r?.noColor==="boolean"?r.noColor:e!==void 0?"NO_COLOR"in e?.env:!1)}var _=(e)=>{let r=e.split("/");if(r[0]==="")r.shift();return r},ae=(e)=>{let{groups:r,path:n}=Ee(e),t=_(n);return Pe(t,r)},Ee=(e)=>{let r=[];return e=e.replace(/\{[^}]+\}/g,(n,t)=>{let i=`@${t}`;return r.push([i,n]),i}),{groups:r,path:e}},Pe=(e,r)=>{for(let n=r.length-1;n>=0;n--){let[t]=r[n];for(let i=e.length-1;i>=0;i--)if(e[i].includes(t)){e[i]=e[i].replace(t,r[n][1]);break}}return e},G={},R=(e)=>{if(e==="*")return"*";let r=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(r){if(!G[e])if(r[2])G[e]=[e,r[1],new RegExp("^"+r[2]+"$")];else G[e]=[e,r[1],!0];return G[e]}return null},S=(e,r)=>{try{return r(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,(n)=>{try{return r(n)}catch{return n}})}},_e=(e)=>S(e,decodeURI),A=(e)=>{let r=e.url,n=r.indexOf("/",8),t=n;for(;t<r.length;t++){let i=r.charCodeAt(t);if(i===37){let c=r.indexOf("?",t),l=r.slice(n,c===-1?void 0:c);return _e(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(i===63)break}return r.slice(n,t)};var ye=(e)=>{let r=A(e);return r.length>1&&r[r.length-1]==="/"?r.slice(0,-1):r},$=(...e)=>{let r="",n=!1;for(let t of e){if(r[r.length-1]==="/")r=r.slice(0,-1),n=!0;if(t[0]!=="/")t=`/${t}`;if(t==="/"&&n)r=`${r}/`;else if(t!=="/")r=`${r}${t}`;if(t==="/"&&r==="")r="/"}return r},J=(e)=>{if(!e.match(/\:.+\?$/))return null;let r=e.split("/"),n=[],t="";return r.forEach((i)=>{if(i!==""&&!/\:/.test(i))t+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){if(n.length===0&&t==="")n.push("/");else n.push(t);let c=i.replace("?","");t+="/"+c,n.push(t)}else t+="/"+i}),n.filter((i,c,l)=>l.indexOf(i)===c)},P=(e)=>{if(!/[%+]/.test(e))return e;if(e.indexOf("+")!==-1)e=e.replace(/\+/g," ");return e.indexOf("%")!==-1?C(e):e},xe=(e,r,n)=>{let t;if(!n&&r&&!/[%+]/.test(r)){let l=e.indexOf(`?${r}`,8);if(l===-1)l=e.indexOf(`&${r}`,8);while(l!==-1){let f=e.charCodeAt(l+r.length+1);if(f===61){let o=l+r.length+2,s=e.indexOf("&",o);return P(e.slice(o,s===-1?void 0:s))}else if(f==38||isNaN(f))return"";l=e.indexOf(`&${r}`,l+1)}if(t=/[%+]/.test(e),!t)return}let i={};t??=/[%+]/.test(e);let c=e.indexOf("?",8);while(c!==-1){let l=e.indexOf("&",c+1),f=e.indexOf("=",c);if(f>l&&l!==-1)f=-1;let o=e.slice(c+1,f===-1?l===-1?void 0:l:f);if(t)o=P(o);if(c=l,o==="")continue;let s;if(f===-1)s="";else if(s=e.slice(f+1,l===-1?void 0:l),t)s=P(s);if(n){if(!(i[o]&&Array.isArray(i[o])))i[o]=[];i[o].push(s)}else i[o]??=s}return r?i[r]:i},me=xe,we=(e,r)=>{return xe(e,r,!0)},C=decodeURIComponent;var Re=(e)=>{let[r,n]=[",","."];return e.map((i)=>i.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+r)).join(n)},Se=(e)=>{let r=Date.now()-e;return Re([r<1000?r+"ms":Math.round(r/1000)+"s"])},Ce=(e)=>{if(M())switch(e/100|0){case 5:return`\x1B[31m${e}\x1B[0m`;case 4:return`\x1B[33m${e}\x1B[0m`;case 3:return`\x1B[36m${e}\x1B[0m`;case 2:return`\x1B[32m${e}\x1B[0m`}return`${e}`};function ve(e,r,n,t,i=0,c){let l=r==="<--"?`${r} ${n} ${t}`:`${r} ${n} ${t} ${Ce(i)} ${c}`;e(l)}var be=(e=console.log)=>{return async function r(n,t){let{method:i}=n.req,c=A(n.req.raw);ve(e,"<--",i,c);let l=Date.now();await t(),ve(e,"-->",i,c,n.res.status,Se(l))}};var de=()=>{return async function e(r,n){if(await n(),r.res.status===404&&r.req.method==="GET"&&r.req.path!=="/"&&r.req.path[r.req.path.length-1]==="/"){let t=new URL(r.req.url);t.pathname=t.pathname.substring(0,t.pathname.length-1),r.res=r.redirect(t.toString(),301)}}};var qe=(e)=>{let n={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},t=((i)=>{if(typeof i==="string")if(i==="*")return()=>i;else return(c)=>i===c?c:null;else if(typeof i==="function")return i;else return(c)=>i.includes(c)?c:null})(n.origin);return async function i(c,l){function f(s,h){c.res.headers.set(s,h)}let o=t(c.req.header("origin")||"",c);if(o)f("Access-Control-Allow-Origin",o);if(n.origin!=="*"){let s=c.req.header("Vary");if(s)f("Vary",s);else f("Vary","Origin")}if(n.credentials)f("Access-Control-Allow-Credentials","true");if(n.exposeHeaders?.length)f("Access-Control-Expose-Headers",n.exposeHeaders.join(","));if(c.req.method==="OPTIONS"){if(n.maxAge!=null)f("Access-Control-Max-Age",n.maxAge.toString());if(n.allowMethods?.length)f("Access-Control-Allow-Methods",n.allowMethods.join(","));let s=n.allowHeaders;if(!s?.length){let h=c.req.header("Access-Control-Request-Headers");if(h)s=h.split(/\s*,\s*/)}if(s?.length)f("Access-Control-Allow-Headers",s.join(",")),c.res.headers.append("Vary","Access-Control-Request-Headers");return c.res.headers.delete("Content-Length"),c.res.headers.delete("Content-Type"),new Response(null,{headers:c.res.headers,status:204,statusText:c.res.statusText})}await l()}};var j=class extends Error{res;status;constructor(e=500,r){super(r?.message,{cause:r?.cause});this.res=r?.res,this.status=e}getResponse(){if(this.res)return new Response(this.res.body,{status:this.status,headers:this.res.headers});return new Response(this.message,{status:this.status})}};var $e="Payload Too Large",je=class extends Error{constructor(e){super(e);this.name="BodyLimitError"}},He=(e)=>{let r=e.onError||(()=>{let t=new Response($e,{status:413});throw new j(413,{res:t})}),n=e.maxSize;return async function t(i,c){if(!i.req.raw.body)return c();if(i.req.raw.headers.has("content-length"))return parseInt(i.req.raw.headers.get("content-length")||"0",10)>n?r(i):c();let l=0,f=i.req.raw.body.getReader(),s={body:new ReadableStream({async start(h){try{for(;;){let{done:p,value:u}=await f.read();if(p)break;if(l+=u.length,l>n){h.error(new je($e));break}h.enqueue(u)}}finally{h.close()}}}),duplex:"half"};if(i.req.raw=new Request(i.req.raw,s),await c(),i.error instanceof je)i.res=await r(i)}};var W=(e)=>new RegExp(`^(https?:\\/\\/)?(localhost:${Bun.env.API_PORT}|([a-z0-9-]+\\.)?(${Bun.env.APP_HOST}))\$`,"i").test(e);var Fe=async(e,r=Object.create(null))=>{let{all:n=!1,dot:t=!1}=r,c=(e instanceof X?e.raw.headers:e.headers).get("Content-Type");if(c?.startsWith("multipart/form-data")||c?.startsWith("application/x-www-form-urlencoded"))return er(e,{all:n,dot:t});return{}};async function er(e,r){let n=await e.formData();if(n)return rr(n,r);return{}}function rr(e,r){let n=Object.create(null);if(e.forEach((t,i)=>{if(!(r.all||i.endsWith("[]")))n[i]=t;else tr(n,i,t)}),r.dot)Object.entries(n).forEach(([t,i])=>{if(t.includes("."))nr(n,t,i),delete n[t]});return n}var tr=(e,r,n)=>{if(e[r]!==void 0)if(Array.isArray(e[r]))e[r].push(n);else e[r]=[e[r],n];else e[r]=n},nr=(e,r,n)=>{let t=e,i=r.split(".");i.forEach((c,l)=>{if(l===i.length-1)t[c]=n;else{if(!t[c]||typeof t[c]!=="object"||Array.isArray(t[c])||t[c]instanceof File)t[c]=Object.create(null);t=t[c]}})};var Be=(e)=>S(e,C),X=class{raw;#r;#e;routeIndex=0;path;bodyCache={};constructor(e,r="/",n=[[]]){this.raw=e,this.path=r,this.#e=n,this.#r={}}param(e){return e?this.#n(e):this.#o()}#n(e){let r=this.#e[0][this.routeIndex][1][e],n=this.#i(r);return n?/\%/.test(n)?Be(n):n:void 0}#o(){let e={},r=Object.keys(this.#e[0][this.routeIndex][1]);for(let n of r){let t=this.#i(this.#e[0][this.routeIndex][1][n]);if(t&&typeof t==="string")e[n]=/\%/.test(t)?Be(t):t}return e}#i(e){return this.#e[1]?this.#e[1][e]:e}query(e){return me(this.url,e)}queries(e){return we(this.url,e)}header(e){if(e)return this.raw.headers.get(e.toLowerCase())??void 0;let r={};return this.raw.headers.forEach((n,t)=>{r[t]=n}),r}async parseBody(e){return this.bodyCache.parsedBody??=await Fe(this,e)}#t=(e)=>{let{bodyCache:r,raw:n}=this,t=r[e];if(t)return t;let i=Object.keys(r)[0];if(i)return r[i].then((c)=>{if(i==="json")c=JSON.stringify(c);return new Response(c)[e]()});return r[e]=n[e]()};json(){return this.#t("json")}text(){return this.#t("text")}arrayBuffer(){return this.#t("arrayBuffer")}blob(){return this.#t("blob")}formData(){return this.#t("formData")}addValidatedData(e,r){this.#r[e]=r}valid(e){return this.#r[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return this.#e[0].map(([[,e]])=>e)}get routePath(){return this.#e[0].map(([[,e]])=>e)[this.routeIndex].path}};var Le={Stringify:1,BeforeStream:2,Stream:3},ir=(e,r)=>{let n=new String(e);return n.isEscaped=!0,n.callbacks=r,n};var ee=async(e,r,n,t,i)=>{if(typeof e==="object"&&!(e instanceof String)){if(!(e instanceof Promise))e=e.toString();if(e instanceof Promise)e=await e}let c=e.callbacks;if(!c?.length)return Promise.resolve(e);if(i)i[0]+=e;else i=[e];let l=Promise.all(c.map((f)=>f({phase:r,buffer:i,context:t}))).then((f)=>Promise.all(f.filter(Boolean).map((o)=>ee(o,r,!1,t,i))).then(()=>i[0]));if(n)return ir(await l,c);else return l};var cr="text/plain; charset=UTF-8",re=(e,r={})=>{for(let n of Object.keys(r))e.set(n,r[n]);return e},Z=class{#r;#e;env={};#n;finalized=!1;error;#o=200;#i;#t;#c;#f;#s=!0;#u;#h;#p;#g;#a;constructor(e,r){if(this.#r=e,r)this.#i=r.executionCtx,this.env=r.env,this.#p=r.notFoundHandler,this.#a=r.path,this.#g=r.matchResult}get req(){return this.#e??=new X(this.#r,this.#a,this.#g),this.#e}get event(){if(this.#i&&"respondWith"in this.#i)return this.#i;else throw Error("This context has no FetchEvent")}get executionCtx(){if(this.#i)return this.#i;else throw Error("This context has no ExecutionContext")}get res(){return this.#s=!1,this.#f||=new Response("404 Not Found",{status:404})}set res(e){if(this.#s=!1,this.#f&&e)try{for(let[r,n]of this.#f.headers.entries()){if(r==="content-type")continue;if(r==="set-cookie"){let t=this.#f.headers.getSetCookie();e.headers.delete("set-cookie");for(let i of t)e.headers.append("set-cookie",i)}else e.headers.set(r,n)}}catch(r){if(r instanceof TypeError&&r.message.includes("immutable")){this.res=new Response(e.body,{headers:e.headers,status:e.status});return}else throw r}this.#f=e,this.finalized=!0}render=(...e)=>{return this.#h??=(r)=>this.html(r),this.#h(...e)};setLayout=(e)=>this.#u=e;getLayout=()=>this.#u;setRenderer=(e)=>{this.#h=e};header=(e,r,n)=>{if(r===void 0){if(this.#t)this.#t.delete(e);else if(this.#c)delete this.#c[e.toLocaleLowerCase()];if(this.finalized)this.res.headers.delete(e);return}if(n?.append){if(!this.#t)this.#s=!1,this.#t=new Headers(this.#c),this.#c={};this.#t.append(e,r)}else if(this.#t)this.#t.set(e,r);else this.#c??={},this.#c[e.toLowerCase()]=r;if(this.finalized)if(n?.append)this.res.headers.append(e,r);else this.res.headers.set(e,r)};status=(e)=>{this.#s=!1,this.#o=e};set=(e,r)=>{this.#n??=new Map,this.#n.set(e,r)};get=(e)=>{return this.#n?this.#n.get(e):void 0};get var(){if(!this.#n)return{};return Object.fromEntries(this.#n)}#l(e,r,n){if(this.#s&&!n&&!r&&this.#o===200)return new Response(e,{headers:this.#c});if(r&&typeof r!=="number"){let i=new Headers(r.headers);if(this.#t)this.#t.forEach((l,f)=>{if(f==="set-cookie")i.append(f,l);else i.set(f,l)});let c=re(i,this.#c);return new Response(e,{headers:c,status:r.status??this.#o})}let t=typeof r==="number"?r:this.#o;if(this.#c??={},this.#t??=new Headers,re(this.#t,this.#c),this.#f)this.#f.headers.forEach((i,c)=>{if(c==="set-cookie")this.#t?.append(c,i);else this.#t?.set(c,i)}),re(this.#t,this.#c);n??={};for(let[i,c]of Object.entries(n))if(typeof c==="string")this.#t.set(i,c);else{this.#t.delete(i);for(let l of c)this.#t.append(i,l)}return new Response(e,{status:t,headers:this.#t})}newResponse=(...e)=>this.#l(...e);body=(e,r,n)=>{return typeof r==="number"?this.#l(e,r,n):this.#l(e,r)};text=(e,r,n)=>{if(!this.#c){if(this.#s&&!n&&!r)return new Response(e);this.#c={}}return this.#c["content-type"]=cr,typeof r==="number"?this.#l(e,r,n):this.#l(e,r)};json=(e,r,n)=>{let t=JSON.stringify(e);return this.#c??={},this.#c["content-type"]="application/json; charset=UTF-8",typeof r==="number"?this.#l(t,r,n):this.#l(t,r)};html=(e,r,n)=>{if(this.#c??={},this.#c["content-type"]="text/html; charset=UTF-8",typeof e==="object")return ee(e,Le.Stringify,!1,{}).then((t)=>{return typeof r==="number"?this.#l(t,r,n):this.#l(t,r)});return typeof r==="number"?this.#l(e,r,n):this.#l(e,r)};redirect=(e,r)=>{return this.#t??=new Headers,this.#t.set("Location",String(e)),this.newResponse(null,r??302)};notFound=()=>{return this.#p??=()=>new Response,this.#p(this)}};var te=(e,r,n)=>{return(t,i)=>{let c=-1,l=t instanceof Z;return f(0);async function f(o){if(o<=c)throw new Error("next() called multiple times");c=o;let s,h=!1,p;if(e[o]){if(p=e[o][0][0],l)t.req.routeIndex=o}else p=o===e.length&&i||void 0;if(!p){if(l&&t.finalized===!1&&n)s=await n(t)}else try{s=await p(t,()=>{return f(o+1)})}catch(u){if(u instanceof Error&&l&&r)t.error=u,s=await r(u,t),h=!0;else throw u}if(s&&(t.finalized===!1||h))t.res=s;return t}}};var g="ALL",ze="all",Ae=["get","post","put","delete","options","patch"],D="Can not add a route since the matcher is already built.",Q=class extends Error{};var N=Symbol("composedHandler"),or=(e)=>{return e.text("404 Not Found",404)},Ve=(e,r)=>{if("getResponse"in e)return e.getResponse();return r.text("Internal Server Error",500)},ne=class{get;post;put;delete;options;patch;all;on;use;router;getPath;_basePath="/";#r="/";routes=[];constructor(e={}){[...Ae,ze].forEach((t)=>{this[t]=(i,...c)=>{if(typeof i==="string")this.#r=i;else this.#i(t,this.#r,i);return c.forEach((l)=>{this.#i(t,this.#r,l)}),this}}),this.on=(t,i,...c)=>{for(let l of[i].flat()){this.#r=l;for(let f of[t].flat())c.map((o)=>{this.#i(f.toUpperCase(),this.#r,o)})}return this},this.use=(t,...i)=>{if(typeof t==="string")this.#r=t;else this.#r="*",i.unshift(t);return i.forEach((c)=>{this.#i(g,this.#r,c)}),this};let n=e.strict??!0;delete e.strict,Object.assign(this,e),this.getPath=n?e.getPath??A:ye}#e(){let e=new ne({router:this.router,getPath:this.getPath});return e.routes=this.routes,e}#n=or;#o=Ve;route(e,r){let n=this.basePath(e);return r.routes.map((t)=>{let i;if(r.#o===Ve)i=t.handler;else i=async(c,l)=>(await te([],r.#o)(c,()=>t.handler(c,l))).res,i[N]=t.handler;n.#i(t.method,t.path,i)}),this}basePath(e){let r=this.#e();return r._basePath=$(this._basePath,e),r}onError=(e)=>{return this.#o=e,this};notFound=(e)=>{return this.#n=e,this};mount(e,r,n){let t,i;if(n)if(typeof n==="function")i=n;else i=n.optionHandler,t=n.replaceRequest;let c=i?(f)=>{let o=i(f);return Array.isArray(o)?o:[o]}:(f)=>{let o=void 0;try{o=f.executionCtx}catch{}return[f.env,o]};t||=(()=>{let f=$(this._basePath,e),o=f==="/"?0:f.length;return(s)=>{let h=new URL(s.url);return h.pathname=h.pathname.slice(o)||"/",new Request(h,s)}})();let l=async(f,o)=>{let s=await r(t(f.req.raw),...c(f));if(s)return s;await o()};return this.#i(g,$(e,"*"),l),this}#i(e,r,n){e=e.toUpperCase(),r=$(this._basePath,r);let t={path:r,method:e,handler:n};this.router.add(e,r,[n,t]),this.routes.push(t)}#t(e,r){if(e instanceof Error)return this.#o(e,r);throw e}#c(e,r,n,t){if(t==="HEAD")return(async()=>new Response(null,await this.#c(e,r,n,"GET")))();let i=this.getPath(e,{env:n}),c=this.router.match(t,i),l=new Z(e,{path:i,matchResult:c,env:n,executionCtx:r,notFoundHandler:this.#n});if(c[0].length===1){let o;try{o=c[0][0][0][0](l,async()=>{l.res=await this.#n(l)})}catch(s){return this.#t(s,l)}return o instanceof Promise?o.then((s)=>s||(l.finalized?l.res:this.#n(l))).catch((s)=>this.#t(s,l)):o??this.#n(l)}let f=te(c[0],this.#o,this.#n);return(async()=>{try{let o=await f(l);if(!o.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return o.res}catch(o){return this.#t(o,l)}})()}fetch=(e,...r)=>{return this.#c(e,r[1],r[0],e.method)};request=(e,r,n,t)=>{if(e instanceof Request)return this.fetch(r?new Request(e,r):e,n,t);return e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${$("/",e)}`,r),n,t)};fire=()=>{addEventListener("fetch",(e)=>{e.respondWith(this.#c(e.request,e,void 0,e.request.method))})}};var U="[^/]+",V=".*",K="(?:|/.*)",H=Symbol(),lr=new Set(".\\+*[^]$()");function fr(e,r){if(e.length===1)return r.length===1?e<r?-1:1:-1;if(r.length===1)return 1;if(e===V||e===K)return 1;else if(r===V||r===K)return-1;if(e===U)return 1;else if(r===U)return-1;return e.length===r.length?e<r?-1:1:r.length-e.length}var T=class{#r;#e;#n=Object.create(null);insert(e,r,n,t,i){if(e.length===0){if(this.#r!==void 0)throw H;if(i)return;this.#r=r;return}let[c,...l]=e,f=c==="*"?l.length===0?["","",V]:["","",U]:c==="/*"?["","",K]:c.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),o;if(f){let s=f[1],h=f[2]||U;if(s&&f[2]){if(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h))throw H}if(o=this.#n[h],!o){if(Object.keys(this.#n).some((p)=>p!==V&&p!==K))throw H;if(i)return;if(o=this.#n[h]=new T,s!=="")o.#e=t.varIndex++}if(!i&&s!=="")n.push([s,o.#e])}else if(o=this.#n[c],!o){if(Object.keys(this.#n).some((s)=>s.length>1&&s!==V&&s!==K))throw H;if(i)return;o=this.#n[c]=new T}o.insert(l,r,n,t,i)}buildRegExpStr(){let r=Object.keys(this.#n).sort(fr).map((n)=>{let t=this.#n[n];return(typeof t.#e==="number"?`(${n})@${t.#e}`:lr.has(n)?`\\${n}`:n)+t.buildRegExpStr()});if(typeof this.#r==="number")r.unshift(`#${this.#r}`);if(r.length===0)return"";if(r.length===1)return r[0];return"(?:"+r.join("|")+")"}};var Ke=class{#r={varIndex:0};#e=new T;insert(e,r,n){let t=[],i=[];for(let l=0;;){let f=!1;if(e=e.replace(/\{[^}]+\}/g,(o)=>{let s=`@\\${l}`;return i[l]=[s,o],l++,f=!0,s}),!f)break}let c=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let l=i.length-1;l>=0;l--){let[f]=i[l];for(let o=c.length-1;o>=0;o--)if(c[o].indexOf(f)!==-1){c[o]=c[o].replace(f,i[l][1]);break}}return this.#e.insert(c,r,t,this.#r,n),t}buildRegExp(){let e=this.#e.buildRegExpStr();if(e==="")return[/^$/,[],[]];let r=0,n=[],t=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,c,l)=>{if(c!==void 0)return n[++r]=Number(c),"$()";if(l!==void 0)return t[Number(l)]=++r,"";return""}),[new RegExp(`^${e}`),n,t]}};var ke=[],sr=[/^$/,[],Object.create(null)],Me=Object.create(null);function Ge(e){return Me[e]??=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(r,n)=>n?`\\${n}`:"(?:|/.*)")}\$`)}function hr(){Me=Object.create(null)}function pr(e){let r=new Ke,n=[];if(e.length===0)return sr;let t=e.map((s)=>[!/\*|\/:/.test(s[0]),...s]).sort(([s,h],[p,u])=>s?1:p?-1:h.length-u.length),i=Object.create(null);for(let s=0,h=-1,p=t.length;s<p;s++){let[u,x,a]=t[s];if(u)i[x]=[a.map(([m])=>[m,Object.create(null)]),ke];else h++;let y;try{y=r.insert(x,h,u)}catch(m){throw m===H?new Q(x):m}if(u)continue;n[h]=a.map(([m,d])=>{let z=Object.create(null);d-=1;for(;d>=0;d--){let[w,I]=y[d];z[w]=I}return[m,z]})}let[c,l,f]=r.buildRegExp();for(let s=0,h=n.length;s<h;s++)for(let p=0,u=n[s].length;p<u;p++){let x=n[s][p]?.[1];if(!x)continue;let a=Object.keys(x);for(let y=0,m=a.length;y<m;y++)x[a[y]]=f[x[a[y]]]}let o=[];for(let s in l)o[s]=n[l[s]];return[c,o,i]}function F(e,r){if(!e)return;for(let n of Object.keys(e).sort((t,i)=>i.length-t.length))if(Ge(n).test(r))return[...e[n]];return}var ie=class{name="RegExpRouter";#r;#e;constructor(){this.#r={[g]:Object.create(null)},this.#e={[g]:Object.create(null)}}add(e,r,n){let t=this.#r,i=this.#e;if(!t||!i)throw new Error(D);if(!t[e])[t,i].forEach((f)=>{f[e]=Object.create(null),Object.keys(f[g]).forEach((o)=>{f[e][o]=[...f[g][o]]})});if(r==="/*")r="*";let c=(r.match(/\/:/g)||[]).length;if(/\*$/.test(r)){let f=Ge(r);if(e===g)Object.keys(t).forEach((o)=>{t[o][r]||=F(t[o],r)||F(t[g],r)||[]});else t[e][r]||=F(t[e],r)||F(t[g],r)||[];Object.keys(t).forEach((o)=>{if(e===g||e===o)Object.keys(t[o]).forEach((s)=>{f.test(s)&&t[o][s].push([n,c])})}),Object.keys(i).forEach((o)=>{if(e===g||e===o)Object.keys(i[o]).forEach((s)=>f.test(s)&&i[o][s].push([n,c]))});return}let l=J(r)||[r];for(let f=0,o=l.length;f<o;f++){let s=l[f];Object.keys(i).forEach((h)=>{if(e===g||e===h)i[h][s]||=[...F(t[h],s)||F(t[g],s)||[]],i[h][s].push([n,c-o+f+1])})}}match(e,r){hr();let n=this.#n();return this.match=(t,i)=>{let c=n[t]||n[g],l=c[2][i];if(l)return l;let f=i.match(c[0]);if(!f)return[[],ke];let o=f.indexOf("",1);return[c[1][o],f]},this.match(e,r)}#n(){let e=Object.create(null);return Object.keys(this.#e).concat(Object.keys(this.#r)).forEach((r)=>{e[r]||=this.#o(r)}),this.#r=this.#e=void 0,e}#o(e){let r=[],n=e===g;if([this.#r,this.#e].forEach((t)=>{let i=t[e]?Object.keys(t[e]).map((c)=>[c,t[e][c]]):[];if(i.length!==0)n||=!0,r.push(...i);else if(e!==g)r.push(...Object.keys(t[g]).map((c)=>[c,t[g][c]]))}),!n)return null;else return pr(r)}};var ce=class{name="SmartRouter";#r=[];#e=[];constructor(e){this.#r=e.routers}add(e,r,n){if(!this.#e)throw new Error(D);this.#e.push([e,r,n])}match(e,r){if(!this.#e)throw new Error("Fatal error");let n=this.#r,t=this.#e,i=n.length,c=0,l;for(;c<i;c++){let f=n[c];try{for(let o=0,s=t.length;o<s;o++)f.add(...t[o]);l=f.match(e,r)}catch(o){if(o instanceof Q)continue;throw o}this.match=f.match.bind(f),this.#r=[f],this.#e=void 0;break}if(c===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,l}get activeRouter(){if(this.#e||this.#r.length!==1)throw new Error("No active router has been determined yet.");return this.#r[0]}};var oe=class{#r;#e;#n;#o=0;#i=Object.create(null);constructor(e,r,n){if(this.#e=n||Object.create(null),this.#r=[],e&&r){let t=Object.create(null);t[e]={handler:r,possibleKeys:[],score:0},this.#r=[t]}this.#n=[]}insert(e,r,n){this.#o=++this.#o;let t=this,i=ae(r),c=[];for(let o=0,s=i.length;o<s;o++){let h=i[o];if(Object.keys(t.#e).includes(h)){t=t.#e[h];let u=R(h);if(u)c.push(u[1]);continue}t.#e[h]=new oe;let p=R(h);if(p)t.#n.push(p),c.push(p[1]);t=t.#e[h]}let l=Object.create(null),f={handler:n,possibleKeys:c.filter((o,s,h)=>h.indexOf(o)===s),score:this.#o};return l[e]=f,t.#r.push(l),t}#t(e,r,n,t){let i=[];for(let c=0,l=e.#r.length;c<l;c++){let f=e.#r[c],o=f[r]||f[g],s={};if(o!==void 0){o.params=Object.create(null);for(let h=0,p=o.possibleKeys.length;h<p;h++){let u=o.possibleKeys[h],x=s[o.score];o.params[u]=t[u]&&!x?t[u]:n[u]??t[u],s[o.score]=!0}i.push(o)}}return i}search(e,r){let n=[];this.#i=Object.create(null);let i=[this],c=_(r);for(let f=0,o=c.length;f<o;f++){let s=c[f],h=f===o-1,p=[];for(let u=0,x=i.length;u<x;u++){let a=i[u],y=a.#e[s];if(y)if(y.#i=a.#i,h){if(y.#e["*"])n.push(...this.#t(y.#e["*"],e,a.#i,Object.create(null)));n.push(...this.#t(y,e,a.#i,Object.create(null)))}else p.push(y);for(let m=0,d=a.#n.length;m<d;m++){let z=a.#n[m],w={...a.#i};if(z==="*"){let E=a.#e["*"];if(E)n.push(...this.#t(E,e,a.#i,Object.create(null))),p.push(E);continue}if(s==="")continue;let[I,ue,k]=z,q=a.#e[I],ge=c.slice(f).join("/");if(k instanceof RegExp&&k.test(ge)){w[ue]=ge,n.push(...this.#t(q,e,a.#i,w));continue}if(k===!0||k.test(s))if(w[ue]=s,h){if(n.push(...this.#t(q,e,w,a.#i)),q.#e["*"])n.push(...this.#t(q.#e["*"],e,w,a.#i))}else q.#i=w,p.push(q)}}i=p}return[n.sort((f,o)=>{return f.score-o.score}).map(({handler:f,params:o})=>[f,o])]}};var le=class{name="TrieRouter";#r;constructor(){this.#r=new oe}add(e,r,n){let t=J(r);if(t){for(let i=0,c=t.length;i<c;i++)this.#r.insert(e,t[i],n);return}this.#r.insert(e,r,n)}match(e,r){return this.#r.search(e,r)}};var Je=class extends ne{constructor(e={}){super(e);this.router=e.router??new ce({routers:[new ie,new le]})}};var ur=class{initApp;constructor(e){this.initApp=e?.initApp}createApp=()=>{let e=new Je;if(this.initApp)this.initApp(e);return e};createMiddleware=(e)=>e;createHandlers=(...e)=>{return e.filter((r)=>r!==void 0)}},We=(e)=>new ur(e);var b=We();var gr=202,ar=502,yr=400,xr=409,mr=100,wr=201,vr=417;var br=403,dr=504,qr=410,$r=505,jr=418,Hr=419,Fr=507,Br=500,Lr=411,zr=423,Ar=420,Vr=405,Kr=301,kr=302,Mr=207,Gr=300,Jr=511,Wr=204,Xr=203,Zr=406,Dr=404,Qr=501,Nr=304,Ur=200,Tr=206,Or=402,Yr=308,Ir=412,Er=428,Pr=102,_r=407,Rr=431,Sr=408,Cr=413,et=414,rt=416,tt=205,nt=303,it=503,ct=101,ot=307,lt=429,ft=401,st=422,ht=415,pt=305,Xe={ACCEPTED:gr,BAD_GATEWAY:ar,BAD_REQUEST:yr,CONFLICT:xr,CONTINUE:mr,CREATED:wr,EXPECTATION_FAILED:vr,FORBIDDEN:br,GATEWAY_TIMEOUT:dr,GONE:qr,HTTP_VERSION_NOT_SUPPORTED:$r,IM_A_TEAPOT:jr,INSUFFICIENT_SPACE_ON_RESOURCE:Hr,INSUFFICIENT_STORAGE:Fr,INTERNAL_SERVER_ERROR:Br,LENGTH_REQUIRED:Lr,LOCKED:zr,METHOD_FAILURE:Ar,METHOD_NOT_ALLOWED:Vr,MOVED_PERMANENTLY:Kr,MOVED_TEMPORARILY:kr,MULTI_STATUS:Mr,MULTIPLE_CHOICES:Gr,NETWORK_AUTHENTICATION_REQUIRED:Jr,NO_CONTENT:Wr,NON_AUTHORITATIVE_INFORMATION:Xr,NOT_ACCEPTABLE:Zr,NOT_FOUND:Dr,NOT_IMPLEMENTED:Qr,NOT_MODIFIED:Nr,OK:Ur,PARTIAL_CONTENT:Tr,PAYMENT_REQUIRED:Or,PERMANENT_REDIRECT:Yr,PRECONDITION_FAILED:Ir,PRECONDITION_REQUIRED:Er,PROCESSING:Pr,PROXY_AUTHENTICATION_REQUIRED:_r,REQUEST_HEADER_FIELDS_TOO_LARGE:Rr,REQUEST_TIMEOUT:Sr,REQUEST_TOO_LONG:Cr,REQUEST_URI_TOO_LONG:et,REQUESTED_RANGE_NOT_SATISFIABLE:rt,RESET_CONTENT:tt,SEE_OTHER:nt,SERVICE_UNAVAILABLE:it,SWITCHING_PROTOCOLS:ct,TEMPORARY_REDIRECT:ot,TOO_MANY_REQUESTS:lt,UNAUTHORIZED:ft,UNPROCESSABLE_ENTITY:st,UNSUPPORTED_MEDIA_TYPE:ht,USE_PROXY:pt};var Ze={"202":"Accepted","502":"Bad Gateway","400":"Bad Request","409":"Conflict","100":"Continue","201":"Created","417":"Expectation Failed","424":"Failed Dependency","403":"Forbidden","504":"Gateway Timeout","410":"Gone","505":"HTTP Version Not Supported","418":"I'm a teapot","419":"Insufficient Space on Resource","507":"Insufficient Storage","500":"Internal Server Error","411":"Length Required","423":"Locked","420":"Method Failure","405":"Method Not Allowed","301":"Moved Permanently","302":"Moved Temporarily","207":"Multi-Status","300":"Multiple Choices","511":"Network Authentication Required","204":"No Content","203":"Non Authoritative Information","406":"Not Acceptable","404":"Not Found","501":"Not Implemented","304":"Not Modified","200":"OK","206":"Partial Content","402":"Payment Required","308":"Permanent Redirect","412":"Precondition Failed","428":"Precondition Required","102":"Processing","103":"Early Hints","426":"Upgrade Required","407":"Proxy Authentication Required","431":"Request Header Fields Too Large","408":"Request Timeout","413":"Request Entity Too Large","414":"Request-URI Too Long","416":"Requested Range Not Satisfiable","205":"Reset Content","303":"See Other","503":"Service Unavailable","101":"Switching Protocols","307":"Temporary Redirect","429":"Too Many Requests","401":"Unauthorized","451":"Unavailable For Legal Reasons","422":"Unprocessable Entity","415":"Unsupported Media Type","305":"Use Proxy","421":"Misdirected Request"},De={Accepted:202,"Bad Gateway":502,"Bad Request":400,Conflict:409,Continue:100,Created:201,"Expectation Failed":417,"Failed Dependency":424,Forbidden:403,"Gateway Timeout":504,Gone:410,"HTTP Version Not Supported":505,"I'm a teapot":418,"Insufficient Space on Resource":419,"Insufficient Storage":507,"Internal Server Error":500,"Length Required":411,Locked:423,"Method Failure":420,"Method Not Allowed":405,"Moved Permanently":301,"Moved Temporarily":302,"Multi-Status":207,"Multiple Choices":300,"Network Authentication Required":511,"No Content":204,"Non Authoritative Information":203,"Not Acceptable":406,"Not Found":404,"Not Implemented":501,"Not Modified":304,OK:200,"Partial Content":206,"Payment Required":402,"Permanent Redirect":308,"Precondition Failed":412,"Precondition Required":428,Processing:102,"Early Hints":103,"Upgrade Required":426,"Proxy Authentication Required":407,"Request Header Fields Too Large":431,"Request Timeout":408,"Request Entity Too Large":413,"Request-URI Too Long":414,"Requested Range Not Satisfiable":416,"Reset Content":205,"See Other":303,"Service Unavailable":503,"Switching Protocols":101,"Temporary Redirect":307,"Too Many Requests":429,Unauthorized:401,"Unavailable For Legal Reasons":451,"Unprocessable Entity":422,"Unsupported Media Type":415,"Use Proxy":305,"Misdirected Request":421};function ut(e){var r=Ze[e.toString()];if(!r)throw new Error("Status code does not exist: "+e);return r}function Qe(e){var r=De[e];if(!r)throw new Error("Reason phrase does not exist: "+e);return r}var Ne=ut;var B;(function(e){e[e.CONTINUE=100]="CONTINUE",e[e.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",e[e.PROCESSING=102]="PROCESSING",e[e.EARLY_HINTS=103]="EARLY_HINTS",e[e.OK=200]="OK",e[e.CREATED=201]="CREATED",e[e.ACCEPTED=202]="ACCEPTED",e[e.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",e[e.NO_CONTENT=204]="NO_CONTENT",e[e.RESET_CONTENT=205]="RESET_CONTENT",e[e.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",e[e.MULTI_STATUS=207]="MULTI_STATUS",e[e.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",e[e.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",e[e.MOVED_TEMPORARILY=302]="MOVED_TEMPORARILY",e[e.SEE_OTHER=303]="SEE_OTHER",e[e.NOT_MODIFIED=304]="NOT_MODIFIED",e[e.USE_PROXY=305]="USE_PROXY",e[e.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",e[e.PERMANENT_REDIRECT=308]="PERMANENT_REDIRECT",e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",e[e.FORBIDDEN=403]="FORBIDDEN",e[e.NOT_FOUND=404]="NOT_FOUND",e[e.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",e[e.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",e[e.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",e[e.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",e[e.CONFLICT=409]="CONFLICT",e[e.GONE=410]="GONE",e[e.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",e[e.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",e[e.REQUEST_TOO_LONG=413]="REQUEST_TOO_LONG",e[e.REQUEST_URI_TOO_LONG=414]="REQUEST_URI_TOO_LONG",e[e.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",e[e.REQUESTED_RANGE_NOT_SATISFIABLE=416]="REQUESTED_RANGE_NOT_SATISFIABLE",e[e.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",e[e.IM_A_TEAPOT=418]="IM_A_TEAPOT",e[e.INSUFFICIENT_SPACE_ON_RESOURCE=419]="INSUFFICIENT_SPACE_ON_RESOURCE",e[e.METHOD_FAILURE=420]="METHOD_FAILURE",e[e.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST",e[e.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",e[e.LOCKED=423]="LOCKED",e[e.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",e[e.UPGRADE_REQUIRED=426]="UPGRADE_REQUIRED",e[e.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",e[e.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",e[e.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",e[e.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",e[e.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",e[e.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",e[e.BAD_GATEWAY=502]="BAD_GATEWAY",e[e.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",e[e.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",e[e.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",e[e.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",e[e.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED"})(B||(B={}));var L;(function(e){e.ACCEPTED="Accepted",e.BAD_GATEWAY="Bad Gateway",e.BAD_REQUEST="Bad Request",e.CONFLICT="Conflict",e.CONTINUE="Continue",e.CREATED="Created",e.EXPECTATION_FAILED="Expectation Failed",e.FAILED_DEPENDENCY="Failed Dependency",e.FORBIDDEN="Forbidden",e.GATEWAY_TIMEOUT="Gateway Timeout",e.GONE="Gone",e.HTTP_VERSION_NOT_SUPPORTED="HTTP Version Not Supported",e.IM_A_TEAPOT="I'm a teapot",e.INSUFFICIENT_SPACE_ON_RESOURCE="Insufficient Space on Resource",e.INSUFFICIENT_STORAGE="Insufficient Storage",e.INTERNAL_SERVER_ERROR="Internal Server Error",e.LENGTH_REQUIRED="Length Required",e.LOCKED="Locked",e.METHOD_FAILURE="Method Failure",e.METHOD_NOT_ALLOWED="Method Not Allowed",e.MOVED_PERMANENTLY="Moved Permanently",e.MOVED_TEMPORARILY="Moved Temporarily",e.MULTI_STATUS="Multi-Status",e.MULTIPLE_CHOICES="Multiple Choices",e.NETWORK_AUTHENTICATION_REQUIRED="Network Authentication Required",e.NO_CONTENT="No Content",e.NON_AUTHORITATIVE_INFORMATION="Non Authoritative Information",e.NOT_ACCEPTABLE="Not Acceptable",e.NOT_FOUND="Not Found",e.NOT_IMPLEMENTED="Not Implemented",e.NOT_MODIFIED="Not Modified",e.OK="OK",e.PARTIAL_CONTENT="Partial Content",e.PAYMENT_REQUIRED="Payment Required",e.PERMANENT_REDIRECT="Permanent Redirect",e.PRECONDITION_FAILED="Precondition Failed",e.PRECONDITION_REQUIRED="Precondition Required",e.PROCESSING="Processing",e.EARLY_HINTS="Early Hints",e.UPGRADE_REQUIRED="Upgrade Required",e.PROXY_AUTHENTICATION_REQUIRED="Proxy Authentication Required",e.REQUEST_HEADER_FIELDS_TOO_LARGE="Request Header Fields Too Large",e.REQUEST_TIMEOUT="Request Timeout",e.REQUEST_TOO_LONG="Request Entity Too Large",e.REQUEST_URI_TOO_LONG="Request-URI Too Long",e.REQUESTED_RANGE_NOT_SATISFIABLE="Requested Range Not Satisfiable",e.RESET_CONTENT="Reset Content",e.SEE_OTHER="See Other",e.SERVICE_UNAVAILABLE="Service Unavailable",e.SWITCHING_PROTOCOLS="Switching Protocols",e.TEMPORARY_REDIRECT="Temporary Redirect",e.TOO_MANY_REQUESTS="Too Many Requests",e.UNAUTHORIZED="Unauthorized",e.UNAVAILABLE_FOR_LEGAL_REASONS="Unavailable For Legal Reasons",e.UNPROCESSABLE_ENTITY="Unprocessable Entity",e.UNSUPPORTED_MEDIA_TYPE="Unsupported Media Type",e.USE_PROXY="Use Proxy",e.MISDIRECTED_REQUEST="Misdirected Request"})(L||(L={}));var O=function(){return O=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++){r=arguments[n];for(var i in r)if(Object.prototype.hasOwnProperty.call(r,i))e[i]=r[i]}return e},O.apply(this,arguments)},On=O(O({},Xe),{getStatusCode:Qe,getStatusText:Ne});var fe=(e,r)=>{let n=new Response(r?.message||L[e],{status:B[e],statusText:r?.message||L[e]});if(r?.response)return n;return new j(B[e],{res:n})};var Y=b.createApp().basePath("/users");Y.get("/",async(e)=>{let r=e.req.param("name");return e.json({status:"ok"})});Y.get("/",async(e)=>{let r=e.req.query("sdf");return e.json({status:"ok"})});Y.put("/",async(e)=>{return e.json({status:"ok"})});var Ue=Y;var se=b.createApp().basePath("/");se.get("/",async(e)=>{return e.json({message:"hello"})});se.route("/",Ue);var Te=se;var he=(e)=>e.length>1,pe=(e)=>{return e[N]?pe(e[N]):e};var gt=(e)=>{return e.name||(he(e)?"[middleware]":"[handler]")},at=(e)=>{return e.routes.map(({path:r,method:n,handler:t})=>{let i=pe(t);return{path:r,method:n,name:gt(i),isMiddleware:he(i)}})},Oe=(e,r)=>{let n=r?.colorize??M(),t={},i=0,c=0;at(e).filter(({isMiddleware:l})=>r?.verbose||!l).map((l)=>{let f=`${l.method}-${l.path}`;if((t[f]||=[]).push(l),t[f].length>1)return;return i=Math.max(i,l.method.length),c=Math.max(c,l.path.length),{method:l.method,path:l.path,routes:t[f]}}).forEach((l)=>{if(!l)return;let{method:f,path:o,routes:s}=l,h=n?`\x1B[32m${f}\x1B[0m`:f;if(!r?.verbose)return;s.forEach(({name:p})=>{})})};var yt=/^(GET|HEAD)$/,xt=/^\b(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)\b/i,Ye=(e)=>{let r=((t)=>{if(!t)return(i,c)=>i===new URL(c.req.url).origin;else if(typeof t==="string")return(i)=>i===t;else if(typeof t==="function")return t;else return(i)=>t.includes(i)})(e?.origin),n=(t,i)=>{if(t===void 0)return!1;return r(t,i)};return async function t(i,c){if(!yt.test(i.req.method)&&xt.test(i.req.header("content-type")||"text/plain")&&!n(i.req.header("origin"),i)){let l=new Response("Forbidden",{status:403});throw new j(403,{res:l})}await c()}};var v=b.createApp();Bun.env.MODE==="DEV"&&v.use(be());v.use(de());v.use(Ye({origin:W}));v.use(qe({origin:(e,r)=>W(e)?e:void 0,credentials:!0}));v.use(He({maxSize:51200,onError:(e)=>fe("REQUEST_TOO_LONG",{response:!0})}));v.route("/",Te);Bun.env.MODE==="DEV"&&Oe(v);var Ie=v;var Hi={port:Bun.env.API_PORT,fetch:Ie.fetch};export{Hi as default};

// World!

//# debugId=B9C0AEE5742493C964756E2164756E21
//# sourceMappingURL=index.js.map