(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="170",Zd=0,xl=1,Qd=2,su=1,au=2,si=3,zi=0,an=1,pt=2,Li=0,Ci=1,Ui=2,_l=3,Ml=4,ef=5,Zi=100,tf=101,nf=102,sf=103,af=104,rf=200,of=201,cf=202,lf=203,Lo=204,Co=205,hf=206,uf=207,df=208,ff=209,pf=210,mf=211,gf=212,vf=213,xf=214,Po=0,Do=1,ko=2,Is=3,Io=4,zo=5,Uo=6,No=7,ru=0,_f=1,Mf=2,Pi=0,yf=1,Sf=2,bf=3,ou=4,Ef=5,wf=6,Rf=7,cu=300,zs=301,Us=302,Oo=303,Fo=304,vr=306,Bo=1e3,ts=1001,lr=1002,On=1003,Af=1004,Ra=1005,qn=1006,Ur=1007,ns=1008,di=1009,lu=1010,hu=1011,pa=1012,bc=1013,as=1014,ri=1015,_a=1016,Ec=1017,wc=1018,Ns=1020,uu=35902,du=1021,fu=1022,Nn=1023,pu=1024,mu=1025,Ps=1026,Os=1027,gu=1028,Rc=1029,vu=1030,Ac=1031,Tc=1033,er=33776,tr=33777,nr=33778,ir=33779,Vo=35840,Ho=35841,Go=35842,Wo=35843,qo=36196,Xo=37492,Ko=37496,Yo=37808,$o=37809,Jo=37810,jo=37811,Zo=37812,Qo=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,ac=37819,rc=37820,oc=37821,sr=36492,cc=36494,lc=36495,xu=36283,hc=36284,uc=36285,dc=36286,Tf=3200,Lf=3201,_u=0,Cf=1,Ri="",dn="srgb",Vs="srgb-linear",xr="linear",yt="srgb",hs=7680,yl=519,Pf=512,Df=513,kf=514,Mu=515,If=516,zf=517,Uf=518,Nf=519,Sl=35044,bl="300 es",oi=2e3,hr=2001;class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,fc=180/Math.PI;function Ma(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Jt(i,e,t){return Math.max(e,Math.min(t,i))}function Of(i,e){return(i%e+e)%e}function Or(i,e,t){return(1-t)*i+t*e}function js(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,s,a,r,o,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l)}set(e,t,n,s,a,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],v=s[0],m=s[3],f=s[6],y=s[1],S=s[4],_=s[7],T=s[2],w=s[5],A=s[8];return a[0]=r*v+o*y+c*T,a[3]=r*m+o*S+c*w,a[6]=r*f+o*_+c*A,a[1]=l*v+h*y+u*T,a[4]=l*m+h*S+u*w,a[7]=l*f+h*_+u*A,a[2]=p*v+d*y+g*T,a[5]=p*m+d*S+g*w,a[8]=p*f+d*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*a*h+n*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,p=o*c-h*a,d=l*a-r*c,g=t*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*r)*v,e[3]=p*v,e[4]=(h*t-s*c)*v,e[5]=(s*a-o*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new je;function yu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ff(){const i=ma("canvas");return i.style.display="block",i}const El={};function oa(i){i in El||(El[i]=!0,console.warn(i))}function Bf(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Vf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ht={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wl=[.64,.33,.3,.6,.15,.06],Rl=[.2126,.7152,.0722],Al=[.3127,.329],Tl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[Vs]:{primaries:wl,whitePoint:Al,transfer:xr,toXYZ:Tl,fromXYZ:Ll,luminanceCoefficients:Rl,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:wl,whitePoint:Al,transfer:yt,toXYZ:Tl,fromXYZ:Ll,luminanceCoefficients:Rl,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}});let us;class Gf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=ma("canvas")),us.width=e.width,us.height=e.height;const n=us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=li(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wf=0;class Su{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Ma(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Br(s[r].image)):a.push(Br(s[r]))}else a=Br(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qf=0;class rn extends Hs{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=ts,s=ts,a=qn,r=ns,o=Nn,c=di,l=rn.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Ma(),this.name="",this.source=new Su(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bo:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bo:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=cu;rn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,_=(d+1)/2,T=(f+1)/2,w=(h+p)/4,A=(u+v)/4,R=(g+m)/4;return S>_&&S>T?S<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(S),s=w/n,a=A/n):_>T?_<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(_),n=w/s,a=R/s):T<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),n=A/a,s=R/a),this.set(n,s,a,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(p-h)/y,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xf extends Hs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Su(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends Xf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bu extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kf extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=a[r+0],d=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==p||l!==d||h!==g){let m=1-o;const f=c*p+l*d+h*g+u*v,y=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const T=Math.sqrt(S),w=Math.atan2(T,f*y);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const _=o*y;if(c=c*m+p*_,l=l*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=a[r],p=a[r+1],d=a[r+2],g=a[r+3];return e[t]=o*g+h*u+c*d-l*p,e[t+1]=c*g+h*p+l*u-o*d,e[t+2]=l*g+h*d+o*p-c*u,e[t+3]=h*g-o*u-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(a/2),p=c(n/2),d=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"YZX":this._x=p*h*u+l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u-p*d*g;break;case"XZY":this._x=p*h*u-l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(a-l)*d,this._z=(r-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(a-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(r-s)/d,this._x=(a+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=r*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=a*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*n),h=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-a*u,this.z=s+c*u+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vr.copy(this).projectOnVector(e),this.sub(Vr)}reflect(e){return this.sub(Vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vr=new I,Cl=new ya;class Sa{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Dn):Dn.fromBufferAttribute(a,r),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Ta.subVectors(this.max,Zs),ds.subVectors(e.a,Zs),fs.subVectors(e.b,Zs),ps.subVectors(e.c,Zs),vi.subVectors(fs,ds),xi.subVectors(ps,fs),Bi.subVectors(ds,ps);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Bi.z,Bi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Bi.z,0,-Bi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Bi.y,Bi.x,0];return!Hr(t,ds,fs,ps,Ta)||(t=[1,0,0,0,1,0,0,0,1],!Hr(t,ds,fs,ps,Ta))?!1:(La.crossVectors(vi,xi),t=[La.x,La.y,La.z],Hr(t,ds,fs,ps,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new I,new I,new I,new I,new I,new I,new I,new I],Dn=new I,Aa=new Sa,ds=new I,fs=new I,ps=new I,vi=new I,xi=new I,Bi=new I,Zs=new I,Ta=new I,La=new I,Vi=new I;function Hr(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Vi.fromArray(i,a);const o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),c=e.dot(Vi),l=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Yf=new Sa,Qs=new I,Gr=new I;class _r{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yf.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Gr)),this.expandByPoint(Qs.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new I,Wr=new I,Ca=new I,_i=new I,qr=new I,Pa=new I,Xr=new I;class Eu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wr.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Wr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Ca),o=_i.dot(this.direction),c=-_i.dot(Ca),l=_i.lengthSq(),h=Math.abs(1-r*r);let u,p,d,g;if(h>0)if(u=r*c-o,p=r*o-c,g=a*h,u>=0)if(p>=-g)if(p<=g){const v=1/h;u*=v,p*=v,d=u*(u+r*p+2*o)+p*(r*u+p+2*c)+l}else p=a,u=Math.max(0,-(r*p+o)),d=-u*u+p*(p+2*c)+l;else p=-a,u=Math.max(0,-(r*p+o)),d=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-r*a+o)),p=u>0?-a:Math.min(Math.max(-a,-c),a),d=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-a,-c),a),d=p*(p+2*c)+l):(u=Math.max(0,-(r*a+o)),p=u>0?a:Math.min(Math.max(-a,-c),a),d=-u*u+p*(p+2*c)+l);else p=r>0?-a:a,u=Math.max(0,-(r*p+o)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wr).addScaledVector(Ca,p),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(a=(e.min.y-p.y)*h,r=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,r=(e.min.y-p.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,a){qr.subVectors(t,e),Pa.subVectors(n,e),Xr.crossVectors(qr,Pa);let r=this.direction.dot(Xr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;_i.subVectors(this.origin,e);const c=o*this.direction.dot(Pa.crossVectors(_i,Pa));if(c<0)return null;const l=o*this.direction.dot(qr.cross(_i));if(l<0||c+l>r)return null;const h=-o*_i.dot(Xr);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,n,s,a,r,o,c,l,h,u,p,d,g,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l,h,u,p,d,g,v,m)}set(e,t,n,s,a,r,o,c,l,h,u,p,d,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),a=1/ms.setFromMatrixColumn(e,1).length(),r=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const p=r*h,d=r*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=p-v*l,t[9]=-o*c,t[2]=v-p*l,t[6]=g+d*l,t[10]=r*c}else if(e.order==="YXZ"){const p=c*h,d=c*u,g=l*h,v=l*u;t[0]=p+v*o,t[4]=g*o-d,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=d*o-g,t[6]=v+p*o,t[10]=r*c}else if(e.order==="ZXY"){const p=c*h,d=c*u,g=l*h,v=l*u;t[0]=p-v*o,t[4]=-r*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=r*h,t[9]=v-p*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const p=r*h,d=r*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=p*l+v,t[1]=c*u,t[5]=v*l+p,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const p=r*c,d=r*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-p*u,t[8]=g*u+d,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=p-v*u}else if(e.order==="XZY"){const p=r*c,d=r*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+v,t[5]=r*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($f,e,Jf)}lookAt(e,t,n){const s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Mi.crossVectors(n,gn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Mi.crossVectors(n,gn)),Mi.normalize(),Da.crossVectors(gn,Mi),s[0]=Mi.x,s[4]=Da.x,s[8]=gn.x,s[1]=Mi.y,s[5]=Da.y,s[9]=gn.y,s[2]=Mi.z,s[6]=Da.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],v=n[6],m=n[10],f=n[14],y=n[3],S=n[7],_=n[11],T=n[15],w=s[0],A=s[4],R=s[8],x=s[12],M=s[1],D=s[5],H=s[9],F=s[13],G=s[2],O=s[6],z=s[10],K=s[14],k=s[3],J=s[7],Q=s[11],Z=s[15];return a[0]=r*w+o*M+c*G+l*k,a[4]=r*A+o*D+c*O+l*J,a[8]=r*R+o*H+c*z+l*Q,a[12]=r*x+o*F+c*K+l*Z,a[1]=h*w+u*M+p*G+d*k,a[5]=h*A+u*D+p*O+d*J,a[9]=h*R+u*H+p*z+d*Q,a[13]=h*x+u*F+p*K+d*Z,a[2]=g*w+v*M+m*G+f*k,a[6]=g*A+v*D+m*O+f*J,a[10]=g*R+v*H+m*z+f*Q,a[14]=g*x+v*F+m*K+f*Z,a[3]=y*w+S*M+_*G+T*k,a[7]=y*A+S*D+_*O+T*J,a[11]=y*R+S*H+_*z+T*Q,a[15]=y*x+S*F+_*K+T*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],d=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+a*c*u-s*l*u-a*o*p+n*l*p+s*o*d-n*c*d)+v*(+t*c*d-t*l*p+a*r*p-s*r*d+s*l*h-a*c*h)+m*(+t*l*u-t*o*d-a*r*u+n*r*d+a*o*h-n*l*h)+f*(-s*o*h-t*c*u+t*o*p+s*r*u-n*r*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],d=e[11],g=e[12],v=e[13],m=e[14],f=e[15],y=u*m*l-v*p*l+v*c*d-o*m*d-u*c*f+o*p*f,S=g*p*l-h*m*l-g*c*d+r*m*d+h*c*f-r*p*f,_=h*v*l-g*u*l+g*o*d-r*v*d-h*o*f+r*u*f,T=g*u*c-h*v*c-g*o*p+r*v*p+h*o*m-r*u*m,w=t*y+n*S+s*_+a*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=y*A,e[1]=(v*p*a-u*m*a-v*s*d+n*m*d+u*s*f-n*p*f)*A,e[2]=(o*m*a-v*c*a+v*s*l-n*m*l-o*s*f+n*c*f)*A,e[3]=(u*c*a-o*p*a-u*s*l+n*p*l+o*s*d-n*c*d)*A,e[4]=S*A,e[5]=(h*m*a-g*p*a+g*s*d-t*m*d-h*s*f+t*p*f)*A,e[6]=(g*c*a-r*m*a-g*s*l+t*m*l+r*s*f-t*c*f)*A,e[7]=(r*p*a-h*c*a+h*s*l-t*p*l-r*s*d+t*c*d)*A,e[8]=_*A,e[9]=(g*u*a-h*v*a-g*n*d+t*v*d+h*n*f-t*u*f)*A,e[10]=(r*v*a-g*o*a+g*n*l-t*v*l-r*n*f+t*o*f)*A,e[11]=(h*o*a-r*u*a-h*n*l+t*u*l+r*n*d-t*o*d)*A,e[12]=T*A,e[13]=(h*v*s-g*u*s+g*n*p-t*v*p-h*n*m+t*u*m)*A,e[14]=(g*o*s-r*v*s-g*n*c+t*v*c+r*n*m-t*o*m)*A,e[15]=(r*u*s-h*o*s+h*n*c-t*u*c-r*n*p+t*o*p)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,u=o+o,p=a*l,d=a*h,g=a*u,v=r*h,m=r*u,f=o*u,y=c*l,S=c*h,_=c*u,T=n.x,w=n.y,A=n.z;return s[0]=(1-(v+f))*T,s[1]=(d+_)*T,s[2]=(g-S)*T,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(p+f))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+S)*A,s[9]=(m-y)*A,s[10]=(1-(p+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=ms.set(s[0],s[1],s[2]).length();const r=ms.set(s[4],s[5],s[6]).length(),o=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);const l=1/a,h=1/r,u=1/o;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=oi){const c=this.elements,l=2*a/(t-e),h=2*a/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let d,g;if(o===oi)d=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===hr)d=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=oi){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(r-a),p=(t+e)*l,d=(n+s)*h;let g,v;if(o===oi)g=(r+a)*u,v=-2*u;else if(o===hr)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ms=new I,kn=new Ct,$f=new I(0,0,0),Jf=new I(1,1,1),Mi=new I,Da=new I,gn=new I,Pl=new Ct,Dl=new ya;class Yn{constructor(e=0,t=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jf=0;const kl=new I,gs=new ya,ei=new Ct,ka=new I,ea=new I,Zf=new I,Qf=new ya,Il=new I(1,0,0),zl=new I(0,1,0),Ul=new I(0,0,1),Nl={type:"added"},ep={type:"removed"},vs={type:"childadded",child:null},Kr={type:"childremoved",child:null};class Vt extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new I,t=new Yn,n=new ya,s=new I(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new je}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ka.copy(e):ka.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ea,ka,this.up):ei.lookAt(ka,ea,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ei),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nl),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ep),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nl),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),p=r(e.skeletons),d=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new I(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new I,ti=new I,Yr=new I,ni=new I,xs=new I,_s=new I,Ol=new I,$r=new I,Jr=new I,jr=new I,Zr=new St,Qr=new St,eo=new St;class Un{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){In.subVectors(s,t),ti.subVectors(n,t),Yr.subVectors(e,t);const r=In.dot(In),o=In.dot(ti),c=In.dot(Yr),l=ti.dot(ti),h=ti.dot(Yr),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const p=1/u,d=(l*c-o*h)*p,g=(r*h-o*c)*p;return a.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,a,r,o,c){return this.getBarycoord(e,t,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ni.x),c.addScaledVector(r,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(e,t,n,s,a,r){return Zr.setScalar(0),Qr.setScalar(0),eo.setScalar(0),Zr.fromBufferAttribute(e,t),Qr.fromBufferAttribute(e,n),eo.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Zr,a.x),r.addScaledVector(Qr,a.y),r.addScaledVector(eo,a.z),r}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),ti.subVectors(e,t),In.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),In.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;xs.subVectors(s,n),_s.subVectors(a,n),$r.subVectors(e,n);const c=xs.dot($r),l=_s.dot($r);if(c<=0&&l<=0)return t.copy(n);Jr.subVectors(e,s);const h=xs.dot(Jr),u=_s.dot(Jr);if(h>=0&&u<=h)return t.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(xs,r);jr.subVectors(e,a);const d=xs.dot(jr),g=_s.dot(jr);if(g>=0&&d<=g)return t.copy(a);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(_s,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ol.subVectors(a,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Ol,o);const f=1/(m+v+p);return r=v*f,o=p*f,t.copy(n).addScaledVector(xs,r).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function to(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Of(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=to(r,a,e+1/3),this.g=to(r,a,e),this.b=to(r,a,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=dn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=Ru[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return ht.fromWorkingColorSpace(en.copy(this),e),Math.round(Jt(en.r*255,0,255))*65536+Math.round(Jt(en.g*255,0,255))*256+Math.round(Jt(en.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(en.copy(this),t);const n=en.r,s=en.g,a=en.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-n)/u+2;break;case a:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=dn){ht.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,s=en.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Ia);const n=Or(yi.h,Ia.h,t),s=Or(yi.s,Ia.s,t),a=Or(yi.l,Ia.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new it;it.NAMES=Ru;let tp=0;class Gs extends Hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Ma(),this.name="",this.blending=Ci,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Co,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lo&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kt extends Gs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new I,za=new be;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=js(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=js(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=js(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=js(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),s=un(s,this.array),a=un(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class Au extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tu extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let np=0;const Sn=new Ct,no=new Vt,Ms=new I,vn=new Sa,ta=new Sa,qt=new I;class jt extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?Tu:Au)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new mt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];vn.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(vn.min,ta.min),vn.expandByPoint(qt),qt.addVectors(vn.max,ta.max),vn.expandByPoint(qt)):(vn.expandByPoint(ta.min),vn.expandByPoint(ta.max))}vn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)qt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)qt.fromBufferAttribute(o,l),c&&(Ms.fromBufferAttribute(e,l),qt.add(Ms)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new I,c[R]=new I;const l=new I,h=new I,u=new I,p=new be,d=new be,g=new be,v=new I,m=new I;function f(R,x,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),p.fromBufferAttribute(a,R),d.fromBufferAttribute(a,x),g.fromBufferAttribute(a,M),h.sub(l),u.sub(l),d.sub(p),g.sub(p);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[R].add(v),o[x].add(v),o[M].add(v),c[R].add(m),c[x].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,x=y.length;R<x;++R){const M=y[R],D=M.start,H=M.count;for(let F=D,G=D+H;F<G;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new I,_=new I,T=new I,w=new I;function A(R){T.fromBufferAttribute(s,R),w.copy(T);const x=o[R];S.copy(x),S.sub(T.multiplyScalar(T.dot(x))).normalize(),_.crossVectors(w,x);const D=_.dot(c[R])<0?-1:1;r.setXYZW(R,S.x,S.y,S.z,D)}for(let R=0,x=y.length;R<x;++R){const M=y[R],D=M.start,H=M.count;for(let F=D,G=D+H;F<G;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new I,a=new I,r=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),r.fromBufferAttribute(t,p+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let f=0;f<h;f++)p[g++]=l[d++]}return new fn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const p=l[h],d=e(p,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],u=a[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new Ct,Hi=new Eu,Ua=new _r,Bl=new I,Na=new I,Oa=new I,Fa=new I,io=new I,Ba=new I,Vl=new I,Va=new I;class Ne extends Vt{constructor(e=new jt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){Ba.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],u=a[c];h!==0&&(io.fromBufferAttribute(u,e),r?Ba.addScaledVector(io,h):Ba.addScaledVector(io.sub(t),h))}t.add(Ba)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(a),Hi.copy(e.ray).recast(e.near),!(Ua.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Ua,Bl)===null||Hi.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(Fl.copy(a).invert(),Hi.copy(e.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,p=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=r[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,T=S;_<T;_+=3){const w=o.getX(_),A=o.getX(_+1),R=o.getX(_+2);s=Ha(this,f,e,n,l,h,u,w,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const y=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);s=Ha(this,r,e,n,l,h,u,y,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=r[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,T=S;_<T;_+=3){const w=_,A=_+1,R=_+2;s=Ha(this,f,e,n,l,h,u,w,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const y=m,S=m+1,_=m+2;s=Ha(this,r,e,n,l,h,u,y,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ip(i,e,t,n,s,a,r,o){let c;if(e.side===an?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,e.side===zi,o),c===null)return null;Va.copy(o),Va.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Va);return l<t.near||l>t.far?null:{distance:l,point:Va.clone(),object:i}}function Ha(i,e,t,n,s,a,r,o,c,l){i.getVertexPosition(o,Na),i.getVertexPosition(c,Oa),i.getVertexPosition(l,Fa);const h=ip(i,e,t,n,Na,Oa,Fa,Vl);if(h){const u=new I;Un.getBarycoord(Vl,Na,Oa,Fa,u),s&&(h.uv=Un.getInterpolatedAttribute(s,o,c,l,u,new be)),a&&(h.uv1=Un.getInterpolatedAttribute(a,o,c,l,u,new be)),r&&(h.normal=Un.getInterpolatedAttribute(r,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new I,materialIndex:0};Un.getNormal(Na,Oa,Fa,p.normal),h.face=p,h.barycoord=u}return h}class ft extends jt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function g(v,m,f,y,S,_,T,w,A,R,x){const M=_/A,D=T/R,H=_/2,F=T/2,G=w/2,O=A+1,z=R+1;let K=0,k=0;const J=new I;for(let Q=0;Q<z;Q++){const Z=Q*D-F;for(let de=0;de<O;de++){const le=de*M-H;J[v]=le*y,J[m]=Z*S,J[f]=G,l.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[f]=w>0?1:-1,h.push(J.x,J.y,J.z),u.push(de/A),u.push(1-Q/R),K+=1}}for(let Q=0;Q<R;Q++)for(let Z=0;Z<A;Z++){const de=p+Z+O*Q,le=p+Z+O*(Q+1),W=p+(Z+1)+O*(Q+1),se=p+(Z+1)+O*Q;c.push(de,le,se),c.push(le,W,se),k+=6}o.addGroup(d,k,x),d+=k,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){const e={};for(let t=0;t<i.length;t++){const n=Fs(i[t]);for(const s in n)e[s]=n[s]}return e}function sp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const ap={clone:Fs,merge:on};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Gs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cu extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new I,Hl=new be,Gl=new be;class _n extends Cu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,Gl),t.subVectors(Gl,Hl)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ys=-90,Ss=1;class cp extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(ys,Ss,e,t);s.layers=this.layers,this.add(s);const a=new _n(ys,Ss,e,t);a.layers=this.layers,this.add(a);const r=new _n(ys,Ss,e,t);r.layers=this.layers,this.add(r);const o=new _n(ys,Ss,e,t);o.layers=this.layers,this.add(o);const c=new _n(ys,Ss,e,t);c.layers=this.layers,this.add(c);const l=new _n(ys,Ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pu extends rn{constructor(e,t,n,s,a,r,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,n,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lp extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ft(5,5,5),a=new fi({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Li});a.uniforms.tEquirect.value=t;const r=new Ne(s,a),o=t.minFilter;return t.minFilter===ns&&(t.minFilter=qn),new cp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const so=new I,hp=new I,up=new je;class $i{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=so.subVectors(n,t).cross(hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(so),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||up.getNormalMatrix(e),s=this.coplanarPoint(so).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new _r,Ga=new I;class Lc{constructor(e=new $i,t=new $i,n=new $i,s=new $i,a=new $i,r=new $i){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],d=s[8],g=s[9],v=s[10],m=s[11],f=s[12],y=s[13],S=s[14],_=s[15];if(n[0].setComponents(c-a,p-l,m-d,_-f).normalize(),n[1].setComponents(c+a,p+l,m+d,_+f).normalize(),n[2].setComponents(c+r,p+h,m+g,_+y).normalize(),n[3].setComponents(c-r,p-h,m-g,_-y).normalize(),n[4].setComponents(c-o,p-u,m-v,_-S).normalize(),t===oi)n[5].setComponents(c+o,p+u,m+v,_+S).normalize();else if(t===hr)n[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function dp(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){const g=u[p],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,u[p]=v)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class Ws extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,p=t/c,d=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const y=f*p-r;for(let S=0;S<l;S++){const _=S*u-a;g.push(_,-y,0),v.push(0,0,1),m.push(S/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const S=y+l*f,_=y+l*(f+1),T=y+1+l*(f+1),w=y+1+l*f;d.push(S,_,w),d.push(_,T,w)}this.setIndex(d),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.widthSegments,e.heightSegments)}}var fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Up=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,um=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,k0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,W0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:fp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:vp,alphatest_pars_fragment:xp,aomap_fragment:_p,aomap_pars_fragment:Mp,batching_pars_vertex:yp,batching_vertex:Sp,begin_vertex:bp,beginnormal_vertex:Ep,bsdfs:wp,iridescence_fragment:Rp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Pp,color_fragment:Dp,color_pars_fragment:kp,color_pars_vertex:Ip,color_vertex:zp,common:Up,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Op,displacementmap_pars_vertex:Fp,displacementmap_vertex:Bp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Hp,colorspace_fragment:Gp,colorspace_pars_fragment:Wp,envmap_fragment:qp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:Kp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:am,envmap_vertex:$p,fog_vertex:Jp,fog_pars_vertex:jp,fog_fragment:Zp,fog_pars_fragment:Qp,gradientmap_pars_fragment:em,lightmap_pars_fragment:tm,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:rm,lights_toon_pars_fragment:om,lights_phong_fragment:cm,lights_phong_pars_fragment:lm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:xm,map_fragment:_m,map_pars_fragment:Mm,map_particle_fragment:ym,map_particle_pars_fragment:Sm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:Em,morphinstance_vertex:wm,morphcolor_vertex:Rm,morphnormal_vertex:Am,morphtarget_pars_vertex:Tm,morphtarget_vertex:Lm,normal_fragment_begin:Cm,normal_fragment_maps:Pm,normal_pars_fragment:Dm,normal_pars_vertex:km,normal_vertex:Im,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:Om,iridescence_pars_fragment:Fm,opaque_fragment:Bm,packing:Vm,premultiplied_alpha_fragment:Hm,project_vertex:Gm,dithering_fragment:Wm,dithering_pars_fragment:qm,roughnessmap_fragment:Xm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:$m,shadowmap_vertex:Jm,shadowmask_pars_fragment:jm,skinbase_vertex:Zm,skinning_pars_vertex:Qm,skinning_vertex:e0,skinnormal_vertex:t0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:s0,tonemapping_pars_fragment:a0,transmission_fragment:r0,transmission_pars_fragment:o0,uv_pars_fragment:c0,uv_pars_vertex:l0,uv_vertex:h0,worldpos_vertex:u0,background_vert:d0,background_frag:f0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:g0,cube_frag:v0,depth_vert:x0,depth_frag:_0,distanceRGBA_vert:M0,distanceRGBA_frag:y0,equirect_vert:S0,equirect_frag:b0,linedashed_vert:E0,linedashed_frag:w0,meshbasic_vert:R0,meshbasic_frag:A0,meshlambert_vert:T0,meshlambert_frag:L0,meshmatcap_vert:C0,meshmatcap_frag:P0,meshnormal_vert:D0,meshnormal_frag:k0,meshphong_vert:I0,meshphong_frag:z0,meshphysical_vert:U0,meshphysical_frag:N0,meshtoon_vert:O0,meshtoon_frag:F0,points_vert:B0,points_frag:V0,shadow_vert:H0,shadow_frag:G0,sprite_vert:W0,sprite_frag:q0},ge={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Gn={basic:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:on([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:on([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:on([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:on([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:on([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:on([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:on([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:on([ge.lights,ge.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Gn.physical={uniforms:on([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Wa={r:0,b:0,g:0},Wi=new Yn,X0=new Ct;function K0(i,e,t,n,s,a,r){const o=new it(0);let c=a===!0?0:1,l,h,u=null,p=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function v(y){let S=!1;const _=g(y);_===null?f(o,c):_&&_.isColor&&(f(_,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const _=g(S);_&&(_.isCubeTexture||_.mapping===vr)?(h===void 0&&(h=new Ne(new ft(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Fs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wi.copy(S.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Wi)),h.material.toneMapped=ht.getTransfer(_.colorSpace)!==yt,(u!==_||p!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,p=_.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ne(new Ws(2,2),new fi({name:"BackgroundMaterial",uniforms:Fs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ht.getTransfer(_.colorSpace)!==yt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||p!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,p=_.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,S){y.getRGB(Wa,Lu(i)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,S,r)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),c=S,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(o,c)},render:v,addToRenderList:m}}function Y0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let a=s,r=!1;function o(M,D,H,F,G){let O=!1;const z=u(F,H,D);a!==z&&(a=z,l(a.object)),O=d(M,F,H,G),O&&g(M,F,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,_(M,D,H,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,H){const F=H.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let O=G[D.id];O===void 0&&(O={},G[D.id]=O);let z=O[F];return z===void 0&&(z=p(c()),O[F]=z),z}function p(M){const D=[],H=[],F=[];for(let G=0;G<t;G++)D[G]=0,H[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,D,H,F){const G=a.attributes,O=D.attributes;let z=0;const K=H.getAttributes();for(const k in K)if(K[k].location>=0){const Q=G[k];let Z=O[k];if(Z===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Q===void 0||Q.attribute!==Z||Z&&Q.data!==Z.data)return!0;z++}return a.attributesNum!==z||a.index!==F}function g(M,D,H,F){const G={},O=D.attributes;let z=0;const K=H.getAttributes();for(const k in K)if(K[k].location>=0){let Q=O[k];Q===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const Z={};Z.attribute=Q,Q&&Q.data&&(Z.data=Q.data),G[k]=Z,z++}a.attributes=G,a.attributesNum=z,a.index=F}function v(){const M=a.newAttributes;for(let D=0,H=M.length;D<H;D++)M[D]=0}function m(M){f(M,0)}function f(M,D){const H=a.newAttributes,F=a.enabledAttributes,G=a.attributeDivisors;H[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),G[M]!==D&&(i.vertexAttribDivisor(M,D),G[M]=D)}function y(){const M=a.newAttributes,D=a.enabledAttributes;for(let H=0,F=D.length;H<F;H++)D[H]!==M[H]&&(i.disableVertexAttribArray(H),D[H]=0)}function S(M,D,H,F,G,O,z){z===!0?i.vertexAttribIPointer(M,D,H,G,O):i.vertexAttribPointer(M,D,H,F,G,O)}function _(M,D,H,F){v();const G=F.attributes,O=H.getAttributes(),z=D.defaultAttributeValues;for(const K in O){const k=O[K];if(k.location>=0){let J=G[K];if(J===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const Q=J.normalized,Z=J.itemSize,de=e.get(J);if(de===void 0)continue;const le=de.buffer,W=de.type,se=de.bytesPerElement,oe=W===i.INT||W===i.UNSIGNED_INT||J.gpuType===bc;if(J.isInterleavedBufferAttribute){const ae=J.data,$=ae.stride,ie=J.offset;if(ae.isInstancedInterleavedBuffer){for(let pe=0;pe<k.locationSize;pe++)f(k.location+pe,ae.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<k.locationSize;pe++)m(k.location+pe);i.bindBuffer(i.ARRAY_BUFFER,le);for(let pe=0;pe<k.locationSize;pe++)S(k.location+pe,Z/k.locationSize,W,Q,$*se,(ie+Z/k.locationSize*pe)*se,oe)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)f(k.location+ae,J.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<k.locationSize;ae++)m(k.location+ae);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ae=0;ae<k.locationSize;ae++)S(k.location+ae,Z/k.locationSize,W,Q,Z*se,Z/k.locationSize*ae*se,oe)}}else if(z!==void 0){const Q=z[K];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(k.location,Q);break;case 3:i.vertexAttrib3fv(k.location,Q);break;case 4:i.vertexAttrib4fv(k.location,Q);break;default:i.vertexAttrib1fv(k.location,Q)}}}}y()}function T(){R();for(const M in n){const D=n[M];for(const H in D){const F=D[H];for(const G in F)h(F[G].object),delete F[G];delete D[H]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const H in D){const F=D[H];for(const G in F)h(F[G].object),delete F[G];delete D[H]}delete n[M.id]}function A(M){for(const D in n){const H=n[D];if(H[M.id]===void 0)continue;const F=H[M.id];for(const G in F)h(F[G].object),delete F[G];delete H[M.id]}}function R(){x(),r=!0,a!==s&&(a=s,l(a.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function $0(i,e,t){let n;function s(l){n=l}function a(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,p){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*p[v];t.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function J0(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==Nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==di&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ri&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:T,maxSamples:w}}function j0(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new $i,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):l();else{const y=a?0:n,S=y*4;let _=f.clippingState||null;c.value=_,_=h(g,p,S,d);for(let T=0;T!==S;++T)_[T]=t[T];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=d+v*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,_=d;S!==v;++S,_+=4)r.copy(u[S]).applyMatrix4(y,o),r.normal.toArray(m,_),m[_+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Z0(i){let e=new WeakMap;function t(r,o){return o===Oo?r.mapping=zs:o===Fo&&(r.mapping=Us),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Oo||o===Fo)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new lp(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class ku extends Cu{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Wl=[.125,.215,.35,.446,.526,.582],Qi=20,ao=new ku,ql=new it;let ro=null,oo=0,co=0,lo=!1;const Ji=(1+Math.sqrt(5))/2,bs=1/Ji,Xl=[new I(-Ji,bs,0),new I(Ji,bs,0),new I(-bs,0,Ji),new I(bs,0,Ji),new I(0,Ji,-bs),new I(0,Ji,bs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ro=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,oo,co),this._renderer.xr.enabled=lo,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:_a,format:Nn,colorSpace:Vs,depthBuffer:!1},s=Yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q0(a)),this._blurMaterial=eg(a,e,t)}return s}_compileMaterial(e){const t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,n,s){const o=new _n(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(ql),h.toneMapping=Pi,h.autoClear=!1;const d=new kt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new Ne(new ft,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(ql),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const S=this._cubeSize;qa(s,y*S,f>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===zs||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new Ne(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,ao)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Xl[(s-a-1)%Xl.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ne(this._lodPlanes[s],l),p=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Qi-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):Qi;m>Qi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const f=[];let y=0;for(let A=0;A<Qi;++A){const R=A/v,x=Math.exp(-R*R/2);f.push(x),A===0?y+=x:A<m&&(y+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-n;const _=this._sizeLods[s],T=3*_*(s>S-Ts?s-S+Ts:0),w=4*(this._cubeSize-_);qa(t,T,w,3*_,2*_),c.setRenderTarget(t),c.render(u,ao)}}function Q0(i){const e=[],t=[],n=[];let s=i;const a=i-Ts+1+Wl.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>i-Ts?c=Wl[r-i+Ts-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,f=1,y=new Float32Array(v*g*d),S=new Float32Array(m*g*d),_=new Float32Array(f*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,R=w>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];y.set(x,v*g*w),S.set(p,m*g*w);const M=[w,w,w,w,w,w];_.set(M,f*g*w)}const T=new jt;T.setAttribute("position",new fn(y,v)),T.setAttribute("uv",new fn(S,m)),T.setAttribute("faceIndex",new fn(_,f)),e.push(T),s>Ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yl(i,e,t){const n=new rs(i,e,t);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function eg(i,e,t){const n=new Float32Array(Qi),s=new I(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function $l(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Jl(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Oo||c===Fo,h=c===zs||c===Us;if(l||h){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Kl(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Kl(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function ng(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&oa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,e,t,n){const s={},a=new WeakMap;function r(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}p.removeEventListener("dispose",r),delete s[p.id];const d=a.get(p);d&&(e.remove(d),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],i.ARRAY_BUFFER)}}function l(u){const p=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let S=0,_=y.length;S<_;S+=3){const T=y[S+0],w=y[S+1],A=y[S+2];p.push(T,w,w,A,A,T)}}else if(g!==void 0){const y=g.array;v=g.version;for(let S=0,_=y.length/3-1;S<_;S+=3){const T=S+0,w=S+1,A=S+2;p.push(T,w,w,A,A,T)}}else return;const m=new(yu(p)?Tu:Au)(p,1);m.version=v;const f=a.get(u);f&&e.remove(f),a.set(u,m)}function h(u){const p=a.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function sg(i,e,t){let n;function s(p){n=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function c(p,d){i.drawElements(n,d,a,p*r),t.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,a,p*r,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function u(p,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/r,d[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,a,p,0,v,0,g);let f=0;for(let y=0;y<g;y++)f+=d[y]*v[y];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ag(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function rg(i,e,t){const n=new WeakMap,s=new St;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let T=o.attributes.position.count*_,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*u),R=new bu(A,T,w,u);R.type=ri,R.needsUpdate=!0;const x=_*4;for(let D=0;D<u;D++){const H=f[D],F=y[D],G=S[D],O=T*w*4*D;for(let z=0;z<H.count;z++){const K=z*x;g===!0&&(s.fromBufferAttribute(H,z),A[O+K+0]=s.x,A[O+K+1]=s.y,A[O+K+2]=s.z,A[O+K+3]=0),v===!0&&(s.fromBufferAttribute(F,z),A[O+K+4]=s.x,A[O+K+5]=s.y,A[O+K+6]=s.z,A[O+K+7]=0),m===!0&&(s.fromBufferAttribute(G,z),A[O+K+8]=s.x,A[O+K+9]=s.y,A[O+K+10]=s.z,A[O+K+11]=G.itemSize===4?s.w:1)}}p={count:u,texture:R,size:new be(T,w)},n.set(o,p),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function og(i,e,t,n){let s=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}class Iu extends rn{constructor(e,t,n,s,a,r,o,c,l,h=Ps){if(h!==Ps&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=as),n===void 0&&h===Os&&(n=Ns),super(null,s,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:On,this.minFilter=c!==void 0?c:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zu=new rn,jl=new Iu(1,1),Uu=new bu,Nu=new Kf,Ou=new Pu,Zl=[],Ql=[],eh=new Float32Array(16),th=new Float32Array(9),nh=new Float32Array(4);function qs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Zl[s];if(a===void 0&&(a=new Float32Array(s),Zl[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mr(i,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function dg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;nh.set(n),i.uniformMatrix2fv(this.addr,!1,nh),Wt(t,n)}}function fg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),Wt(t,n)}}function pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),Wt(t,n)}}function mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function _g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function bg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(jl.compareFunction=Mu,a=jl):a=zu,t.setTexture2D(e||a,s)}function Eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nu,s)}function wg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ou,s)}function Rg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uu,s)}function Ag(i){switch(i){case 5126:return cg;case 35664:return lg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return vg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return Mg;case 36295:return yg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Rg}}function Tg(i,e){i.uniform1fv(this.addr,e)}function Lg(i,e){const t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Cg(i,e){const t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Pg(i,e){const t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function Dg(i,e){const t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kg(i,e){const t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ig(i,e){const t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zg(i,e){i.uniform1iv(this.addr,e)}function Ug(i,e){i.uniform2iv(this.addr,e)}function Ng(i,e){i.uniform3iv(this.addr,e)}function Og(i,e){i.uniform4iv(this.addr,e)}function Fg(i,e){i.uniform1uiv(this.addr,e)}function Bg(i,e){i.uniform2uiv(this.addr,e)}function Vg(i,e){i.uniform3uiv(this.addr,e)}function Hg(i,e){i.uniform4uiv(this.addr,e)}function Gg(i,e,t){const n=this.cache,s=e.length,a=Mr(t,s);Gt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||zu,a[r])}function Wg(i,e,t){const n=this.cache,s=e.length,a=Mr(t,s);Gt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Nu,a[r])}function qg(i,e,t){const n=this.cache,s=e.length,a=Mr(t,s);Gt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Ou,a[r])}function Xg(i,e,t){const n=this.cache,s=e.length,a=Mr(t,s);Gt(n,a)||(i.uniform1iv(this.addr,a),Wt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Uu,a[r])}function Kg(i){switch(i){case 5126:return Tg;case 35664:return Lg;case 35665:return Cg;case 35666:return Pg;case 35674:return Dg;case 35675:return kg;case 35676:return Ig;case 5124:case 35670:return zg;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Og;case 5125:return Fg;case 36294:return Bg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Xg}}class Yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ag(t.type)}}class $g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}}class Jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function ih(i,e){i.seq.push(e),i.map[e.id]=e}function jg(i,e,t){const n=i.name,s=n.length;for(ho.lastIndex=0;;){const a=ho.exec(n),r=ho.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){ih(t,l===void 0?new Yg(o,i,e):new $g(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Jg(o),ih(t,u)),t=u}}}class ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);jg(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function sh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zg=37297;let Qg=0;function e1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const ah=new je;function t1(i){ht._getMatrix(ah,ht.workingColorSpace,i);const e=`mat3( ${ah.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case xr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+e1(i.getShaderSource(e),r)}else return s}function n1(i,e){const t=t1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function i1(i,e){let t;switch(e){case yf:t="Linear";break;case Sf:t="Reinhard";break;case bf:t="Cineon";break;case ou:t="ACESFilmic";break;case wf:t="AgX";break;case Rf:t="Neutral";break;case Ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xa=new I;function s1(){ht.getLuminanceCoefficients(Xa);const i=Xa.x.toFixed(4),e=Xa.y.toFixed(4),t=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function r1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function ca(i){return i!==""}function oh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c1=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(c1,h1)}const l1=new Map;function h1(i,e){let t=Qe[e];if(t===void 0){const n=l1.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}const u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(u1,d1)}function d1(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function hh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===au?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function p1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Us:e="ENVMAP_TYPE_CUBE";break;case vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function g1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ru:e="ENVMAP_BLENDING_MULTIPLY";break;case _f:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function v1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function x1(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=f1(t),l=p1(t),h=m1(t),u=g1(t),p=v1(t),d=a1(t),g=r1(a),v=s.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ca).join(`
`),f.length>0&&(f+=`
`)):(m=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),f=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Pi?i1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,n1("linearToOutputTexel",t.outputColorSpace),s1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),r=pc(r),r=oh(r,t),r=ch(r,t),o=pc(o),o=oh(o,t),o=ch(o,t),r=lh(r),o=lh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=y+m+r,_=y+f+o,T=sh(s,s.VERTEX_SHADER,S),w=sh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,T),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(D){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(T).trim(),G=s.getShaderInfoLog(w).trim();let O=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,w);else{const K=rh(s,T,"vertex"),k=rh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+K+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||G==="")&&(z=!1);z&&(D.diagnostics={runnable:O,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:f}})}s.deleteShader(T),s.deleteShader(w),R=new ar(s,v),x=o1(s,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Zg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let _1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new y1(e),t.set(e,n)),n}}class y1{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}}function S1(i,e,t,n,s,a,r){const o=new wu,c=new M1,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,M,D,H,F){const G=H.fog,O=F.geometry,z=x.isMeshStandardMaterial?H.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),k=K&&K.mapping===vr?K.image.height:null,J=g[x.type];x.precision!==null&&(d=s.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=Q!==void 0?Q.length:0;let de=0;O.morphAttributes.position!==void 0&&(de=1),O.morphAttributes.normal!==void 0&&(de=2),O.morphAttributes.color!==void 0&&(de=3);let le,W,se,oe;if(J){const _t=Gn[J];le=_t.vertexShader,W=_t.fragmentShader}else le=x.vertexShader,W=x.fragmentShader,c.update(x),se=c.getVertexShaderID(x),oe=c.getFragmentShaderID(x);const ae=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),ie=F.isInstancedMesh===!0,pe=F.isBatchedMesh===!0,Ye=!!x.map,Xe=!!x.matcap,ut=!!K,N=!!x.aoMap,et=!!x.lightMap,Be=!!x.bumpMap,Ke=!!x.normalMap,Ie=!!x.displacementMap,Rt=!!x.emissiveMap,Oe=!!x.metalnessMap,C=!!x.roughnessMap,b=x.anisotropy>0,q=x.clearcoat>0,te=x.dispersion>0,ce=x.iridescence>0,ee=x.sheen>0,De=x.transmission>0,xe=b&&!!x.anisotropyMap,we=q&&!!x.clearcoatMap,ct=q&&!!x.clearcoatNormalMap,ue=q&&!!x.clearcoatRoughnessMap,Re=ce&&!!x.iridescenceMap,Fe=ce&&!!x.iridescenceThicknessMap,Ve=ee&&!!x.sheenColorMap,Ae=ee&&!!x.sheenRoughnessMap,rt=!!x.specularMap,Ze=!!x.specularColorMap,bt=!!x.specularIntensityMap,U=De&&!!x.transmissionMap,ve=De&&!!x.thicknessMap,j=!!x.gradientMap,ne=!!x.alphaMap,ye=x.alphaTest>0,_e=!!x.alphaHash,$e=!!x.extensions;let Ut=Pi;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ut=i.toneMapping);const Zt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:W,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:pe,batchingColor:pe&&F._colorsTexture!==null,instancing:ie,instancingColor:ie&&F.instanceColor!==null,instancingMorph:ie&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Vs,alphaToCoverage:!!x.alphaToCoverage,map:Ye,matcap:Xe,envMap:ut,envMapMode:ut&&K.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:et,bumpMap:Be,normalMap:Ke,displacementMap:p&&Ie,emissiveMap:Rt,normalMapObjectSpace:Ke&&x.normalMapType===Cf,normalMapTangentSpace:Ke&&x.normalMapType===_u,metalnessMap:Oe,roughnessMap:C,anisotropy:b,anisotropyMap:xe,clearcoat:q,clearcoatMap:we,clearcoatNormalMap:ct,clearcoatRoughnessMap:ue,dispersion:te,iridescence:ce,iridescenceMap:Re,iridescenceThicknessMap:Fe,sheen:ee,sheenColorMap:Ve,sheenRoughnessMap:Ae,specularMap:rt,specularColorMap:Ze,specularIntensityMap:bt,transmission:De,transmissionMap:U,thicknessMap:ve,gradientMap:j,opaque:x.transparent===!1&&x.blending===Ci&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:ye,alphaHash:_e,combine:x.combine,mapUv:Ye&&v(x.map.channel),aoMapUv:N&&v(x.aoMap.channel),lightMapUv:et&&v(x.lightMap.channel),bumpMapUv:Be&&v(x.bumpMap.channel),normalMapUv:Ke&&v(x.normalMap.channel),displacementMapUv:Ie&&v(x.displacementMap.channel),emissiveMapUv:Rt&&v(x.emissiveMap.channel),metalnessMapUv:Oe&&v(x.metalnessMap.channel),roughnessMapUv:C&&v(x.roughnessMap.channel),anisotropyMapUv:xe&&v(x.anisotropyMap.channel),clearcoatMapUv:we&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(x.sheenRoughnessMap.channel),specularMapUv:rt&&v(x.specularMap.channel),specularColorMapUv:Ze&&v(x.specularColorMap.channel),specularIntensityMapUv:bt&&v(x.specularIntensityMap.channel),transmissionMapUv:U&&v(x.transmissionMap.channel),thicknessMapUv:ve&&v(x.thicknessMap.channel),alphaMapUv:ne&&v(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ke||b),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Ye||ne),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:$,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:de,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Ye&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:Rt&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pt,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:$e&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&x.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function f(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(y(M,x),S(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function _(x){const M=g[x.type];let D;if(M){const H=Gn[M];D=ap.clone(H.uniforms)}else D=x.uniforms;return D}function T(x,M){let D;for(let H=0,F=h.length;H<F;H++){const G=h[H];if(G.cacheKey===M){D=G,++D.usedTimes;break}}return D===void 0&&(D=new x1(i,M,x,a),h.push(D)),D}function w(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function A(x){c.remove(x)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:R}}function b1(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function E1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dh(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u,p,d,g,v,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,p,d,g,v,m){const f=r(u,p,d,g,v,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):t.push(f)}function c(u,p,d,g,v,m){const f=r(u,p,d,g,v,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,p){t.length>1&&t.sort(u||E1),n.length>1&&n.sort(p||uh),s.length>1&&s.sort(p||uh)}function h(){for(let u=e,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function w1(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new dh,i.set(n,[r])):s>=a.length?(r=new dh,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function R1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new it};break;case"SpotLight":t={position:new I,direction:new I,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function A1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let T1=0;function L1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C1(i){const e=new R1,t=A1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,a=new Ct,r=new Ct;function o(l){let h=0,u=0,p=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,y=0,S=0,_=0,T=0,w=0,A=0;l.sort(L1);for(let x=0,M=l.length;x<M;x++){const D=l[x],H=D.color,F=D.intensity,G=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*F,u+=H.g*F,p+=H.b*F;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],F);A++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,k=t.get(D);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=D.shadow.matrix,y++}n.directional[d]=z,d++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(H).multiplyScalar(F),z.distance=G,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[v]=z;const K=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,K.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[v]=K.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[v]=k,n.spotShadowMap[v]=O,_++}v++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(H).multiplyScalar(F),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const K=D.shadow,k=t.get(D);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=z,g++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(F),z.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==_||R.numSpotMaps!==T||R.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=d,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=_,R.numSpotMaps=T,R.numLightProbes=A,n.version=T1++)}function c(l,h){let u=0,p=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const S=l[f];if(S.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(S.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),r.identity(),a.copy(S.matrixWorld),a.premultiply(m),r.extractRotation(a),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const _=n.point[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function fh(i){const e=new C1(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function P1(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new fh(i),e.set(s,[o])):a>=r.length?(o=new fh(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class D1 extends Gs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k1 extends Gs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U1(i,e,t){let n=new Lc;const s=new be,a=new be,r=new St,o=new D1({depthPacking:Lf}),c=new k1,l={},h=t.maxTextureSize,u={[zi]:an,[an]:zi,[pt]:pt},p=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:I1,fragmentShader:z1}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ne(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let f=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Li),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=f!==si&&this.type===si,G=f===si&&this.type!==si;for(let O=0,z=w.length;O<z;O++){const K=w[O],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const J=k.getFrameExtents();if(s.multiply(J),a.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/J.x),s.x=a.x*J.x,k.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/J.y),s.y=a.y*J.y,k.mapSize.y=a.y)),k.map===null||F===!0||G===!0){const Z=this.type!==si?{minFilter:On,magFilter:On}:{};k.map!==null&&k.map.dispose(),k.map=new rs(s.x,s.y,Z),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const Q=k.getViewportCount();for(let Z=0;Z<Q;Z++){const de=k.getViewport(Z);r.set(a.x*de.x,a.y*de.y,a.x*de.z,a.y*de.w),H.viewport(r),k.updateMatrices(K,Z),n=k.getFrustum(),_(A,R,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===si&&y(k,R),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(x,M,D)};function y(w,A){const R=e.update(v);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rs(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,R,p,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,R,d,v,null)}function S(w,A,R,x){let M=null;const D=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,F=A.uuid;let G=l[H];G===void 0&&(G={},l[H]=G);let O=G[F];O===void 0&&(O=M.clone(),G[F]=O,A.addEventListener("dispose",T)),M=O}if(M.visible=A.visible,M.wireframe=A.wireframe,x===si?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=R}return M}function _(w,A,R,x,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===si)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const F=e.update(w),G=w.material;if(Array.isArray(G)){const O=F.groups;for(let z=0,K=O.length;z<K;z++){const k=O[z],J=G[k.materialIndex];if(J&&J.visible){const Q=S(w,J,x,M);w.onBeforeShadow(i,w,A,R,F,Q,k),i.renderBufferDirect(R,null,F,Q,w,k),w.onAfterShadow(i,w,A,R,F,Q,k)}}}else if(G.visible){const O=S(w,G,x,M);w.onBeforeShadow(i,w,A,R,F,O,null),i.renderBufferDirect(R,null,F,O,w,null),w.onAfterShadow(i,w,A,R,F,O,null)}}const H=w.children;for(let F=0,G=H.length;F<G;F++)_(H[F],A,R,x,M)}function T(w){w.target.removeEventListener("dispose",T);for(const R in l){const x=l[R],M=w.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const N1={[Po]:Do,[ko]:Uo,[Io]:No,[Is]:zo,[Do]:Po,[Uo]:ko,[No]:Io,[zo]:Is};function O1(i,e){function t(){let U=!1;const ve=new St;let j=null;const ne=new St(0,0,0,0);return{setMask:function(ye){j!==ye&&!U&&(i.colorMask(ye,ye,ye,ye),j=ye)},setLocked:function(ye){U=ye},setClear:function(ye,_e,$e,Ut,Zt){Zt===!0&&(ye*=Ut,_e*=Ut,$e*=Ut),ve.set(ye,_e,$e,Ut),ne.equals(ve)===!1&&(i.clearColor(ye,_e,$e,Ut),ne.copy(ve))},reset:function(){U=!1,j=null,ne.set(-1,0,0,0)}}}function n(){let U=!1,ve=!1,j=null,ne=null,ye=null;return{setReversed:function(_e){if(ve!==_e){const $e=e.get("EXT_clip_control");ve?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const Ut=ye;ye=null,this.setClear(Ut)}ve=_e},getReversed:function(){return ve},setTest:function(_e){_e?ae(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(_e){j!==_e&&!U&&(i.depthMask(_e),j=_e)},setFunc:function(_e){if(ve&&(_e=N1[_e]),ne!==_e){switch(_e){case Po:i.depthFunc(i.NEVER);break;case Do:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Io:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Uo:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=_e}},setLocked:function(_e){U=_e},setClear:function(_e){ye!==_e&&(ve&&(_e=1-_e),i.clearDepth(_e),ye=_e)},reset:function(){U=!1,j=null,ne=null,ye=null,ve=!1}}}function s(){let U=!1,ve=null,j=null,ne=null,ye=null,_e=null,$e=null,Ut=null,Zt=null;return{setTest:function(_t){U||(_t?ae(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(_t){ve!==_t&&!U&&(i.stencilMask(_t),ve=_t)},setFunc:function(_t,Cn,Jn){(j!==_t||ne!==Cn||ye!==Jn)&&(i.stencilFunc(_t,Cn,Jn),j=_t,ne=Cn,ye=Jn)},setOp:function(_t,Cn,Jn){(_e!==_t||$e!==Cn||Ut!==Jn)&&(i.stencilOp(_t,Cn,Jn),_e=_t,$e=Cn,Ut=Jn)},setLocked:function(_t){U=_t},setClear:function(_t){Zt!==_t&&(i.clearStencil(_t),Zt=_t)},reset:function(){U=!1,ve=null,j=null,ne=null,ye=null,_e=null,$e=null,Ut=null,Zt=null}}}const a=new t,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,y=null,S=null,_=null,T=null,w=null,A=new it(0,0,0),R=0,x=!1,M=null,D=null,H=null,F=null,G=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=K>=2);let J=null,Q={};const Z=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),le=new St().fromArray(Z),W=new St().fromArray(de);function se(U,ve,j,ne){const ye=new Uint8Array(4),_e=i.createTexture();i.bindTexture(U,_e),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<j;$e++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ve+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return _e}const oe={};oe[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),r.setFunc(Is),Be(!1),Ke(xl),ae(i.CULL_FACE),N(Li);function ae(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function $(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ie(U,ve){return u[U]!==ve?(i.bindFramebuffer(U,ve),u[U]=ve,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function pe(U,ve){let j=d,ne=!1;if(U){j=p.get(ve),j===void 0&&(j=[],p.set(ve,j));const ye=U.textures;if(j.length!==ye.length||j[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,$e=ye.length;_e<$e;_e++)j[_e]=i.COLOR_ATTACHMENT0+_e;j.length=ye.length,ne=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ne=!0);ne&&i.drawBuffers(j)}function Ye(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Xe={[Zi]:i.FUNC_ADD,[tf]:i.FUNC_SUBTRACT,[nf]:i.FUNC_REVERSE_SUBTRACT};Xe[sf]=i.MIN,Xe[af]=i.MAX;const ut={[rf]:i.ZERO,[of]:i.ONE,[cf]:i.SRC_COLOR,[Lo]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[df]:i.DST_COLOR,[hf]:i.DST_ALPHA,[lf]:i.ONE_MINUS_SRC_COLOR,[Co]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[uf]:i.ONE_MINUS_DST_ALPHA,[mf]:i.CONSTANT_COLOR,[gf]:i.ONE_MINUS_CONSTANT_COLOR,[vf]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function N(U,ve,j,ne,ye,_e,$e,Ut,Zt,_t){if(U===Li){v===!0&&($(i.BLEND),v=!1);return}if(v===!1&&(ae(i.BLEND),v=!0),U!==ef){if(U!==m||_t!==x){if((f!==Zi||_!==Zi)&&(i.blendEquation(i.FUNC_ADD),f=Zi,_=Zi),_t)switch(U){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,S=null,T=null,w=null,A.set(0,0,0),R=0,m=U,x=_t}return}ye=ye||ve,_e=_e||j,$e=$e||ne,(ve!==f||ye!==_)&&(i.blendEquationSeparate(Xe[ve],Xe[ye]),f=ve,_=ye),(j!==y||ne!==S||_e!==T||$e!==w)&&(i.blendFuncSeparate(ut[j],ut[ne],ut[_e],ut[$e]),y=j,S=ne,T=_e,w=$e),(Ut.equals(A)===!1||Zt!==R)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Zt),A.copy(Ut),R=Zt),m=U,x=!1}function et(U,ve){U.side===pt?$(i.CULL_FACE):ae(i.CULL_FACE);let j=U.side===an;ve&&(j=!j),Be(j),U.blending===Ci&&U.transparent===!1?N(Li):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);const ne=U.stencilWrite;o.setTest(ne),ne&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Rt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Ke(U){U!==Zd?(ae(i.CULL_FACE),U!==D&&(U===xl?i.cullFace(i.BACK):U===Qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),D=U}function Ie(U){U!==H&&(z&&i.lineWidth(U),H=U)}function Rt(U,ve,j){U?(ae(i.POLYGON_OFFSET_FILL),(F!==ve||G!==j)&&(i.polygonOffset(ve,j),F=ve,G=j)):$(i.POLYGON_OFFSET_FILL)}function Oe(U){U?ae(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function C(U){U===void 0&&(U=i.TEXTURE0+O-1),J!==U&&(i.activeTexture(U),J=U)}function b(U,ve,j){j===void 0&&(J===null?j=i.TEXTURE0+O-1:j=J);let ne=Q[j];ne===void 0&&(ne={type:void 0,texture:void 0},Q[j]=ne),(ne.type!==U||ne.texture!==ve)&&(J!==j&&(i.activeTexture(j),J=j),i.bindTexture(U,ve||oe[U]),ne.type=U,ne.texture=ve)}function q(){const U=Q[J];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(U){le.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function Ae(U){W.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function rt(U,ve){let j=l.get(ve);j===void 0&&(j=new WeakMap,l.set(ve,j));let ne=j.get(U);ne===void 0&&(ne=i.getUniformBlockIndex(ve,U.name),j.set(U,ne))}function Ze(U,ve){const ne=l.get(ve).get(U);c.get(ve)!==ne&&(i.uniformBlockBinding(ve,ne,U.__bindingPointIndex),c.set(ve,ne))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,Q={},u={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,y=null,S=null,_=null,T=null,w=null,A=new it(0,0,0),R=0,x=!1,M=null,D=null,H=null,F=null,G=null,le.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ae,disable:$,bindFramebuffer:ie,drawBuffers:pe,useProgram:Ye,setBlending:N,setMaterial:et,setFlipSided:Be,setCullFace:Ke,setLineWidth:Ie,setPolygonOffset:Rt,setScissorTest:Oe,activeTexture:C,bindTexture:b,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:ce,texImage2D:Re,texImage3D:Fe,updateUBOMapping:rt,uniformBlockBinding:Ze,texStorage2D:ct,texStorage3D:ue,texSubImage2D:ee,texSubImage3D:De,compressedTexSubImage2D:xe,compressedTexSubImage3D:we,scissor:Ve,viewport:Ae,reset:bt}}function ph(i,e,t,n){const s=F1(n);switch(t){case du:return i*e;case pu:return i*e;case mu:return i*e*2;case gu:return i*e/s.components*s.byteLength;case Rc:return i*e/s.components*s.byteLength;case vu:return i*e*2/s.components*s.byteLength;case Ac:return i*e*2/s.components*s.byteLength;case fu:return i*e*3/s.components*s.byteLength;case Nn:return i*e*4/s.components*s.byteLength;case Tc:return i*e*4/s.components*s.byteLength;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Wo:return Math.max(i,16)*Math.max(e,8)/4;case Vo:case Go:return Math.max(i,8)*Math.max(e,8)/2;case qo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sr:case cc:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xu:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function F1(i){switch(i){case di:case lu:return{byteLength:1,components:1};case pa:case hu:case _a:return{byteLength:2,components:1};case Ec:case wc:return{byteLength:2,components:4};case as:case bc:case ri:return{byteLength:4,components:1};case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function B1(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new be,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return d?new OffscreenCanvas(C,b):ma("canvas")}function v(C,b,q){let te=1;const ce=Oe(C);if((ce.width>q||ce.height>q)&&(te=q/Math.max(ce.width,ce.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(te*ce.width),De=Math.floor(te*ce.height);u===void 0&&(u=g(ee,De));const xe=b?g(ee,De):u;return xe.width=ee,xe.height=De,xe.getContext("2d").drawImage(C,0,0,ee,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ee+"x"+De+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,b,q,te,ce=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=b;if(b===i.RED&&(q===i.FLOAT&&(ee=i.R32F),q===i.HALF_FLOAT&&(ee=i.R16F),q===i.UNSIGNED_BYTE&&(ee=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.R8UI),q===i.UNSIGNED_SHORT&&(ee=i.R16UI),q===i.UNSIGNED_INT&&(ee=i.R32UI),q===i.BYTE&&(ee=i.R8I),q===i.SHORT&&(ee=i.R16I),q===i.INT&&(ee=i.R32I)),b===i.RG&&(q===i.FLOAT&&(ee=i.RG32F),q===i.HALF_FLOAT&&(ee=i.RG16F),q===i.UNSIGNED_BYTE&&(ee=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RG8UI),q===i.UNSIGNED_SHORT&&(ee=i.RG16UI),q===i.UNSIGNED_INT&&(ee=i.RG32UI),q===i.BYTE&&(ee=i.RG8I),q===i.SHORT&&(ee=i.RG16I),q===i.INT&&(ee=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),q===i.UNSIGNED_INT&&(ee=i.RGB32UI),q===i.BYTE&&(ee=i.RGB8I),q===i.SHORT&&(ee=i.RGB16I),q===i.INT&&(ee=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),q===i.UNSIGNED_INT&&(ee=i.RGBA32UI),q===i.BYTE&&(ee=i.RGBA8I),q===i.SHORT&&(ee=i.RGBA16I),q===i.INT&&(ee=i.RGBA32I)),b===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),b===i.RGBA){const De=ce?xr:ht.getTransfer(te);q===i.FLOAT&&(ee=i.RGBA32F),q===i.HALF_FLOAT&&(ee=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ee=De===yt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(C,b){let q;return C?b===null||b===as||b===Ns?q=i.DEPTH24_STENCIL8:b===ri?q=i.DEPTH32F_STENCIL8:b===pa&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===as||b===Ns?q=i.DEPTH_COMPONENT24:b===ri?q=i.DEPTH_COMPONENT32F:b===pa&&(q=i.DEPTH_COMPONENT16),q}function T(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==On&&C.minFilter!==qn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){const b=C.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&h.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),M(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const q=C.source,te=p.get(q);if(te){const ce=te[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&x(C),Object.keys(te).length===0&&p.delete(q)}n.remove(C)}function x(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const q=C.source,te=p.get(q);delete te[b.__cacheKey],r.memory.textures--}function M(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let ce=0;ce<b.__webglFramebuffer[te].length;ce++)i.deleteFramebuffer(b.__webglFramebuffer[te][ce]);else i.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)i.deleteFramebuffer(b.__webglFramebuffer[te]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=C.textures;for(let te=0,ce=q.length;te<ce;te++){const ee=n.get(q[te]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),r.memory.textures--),n.remove(q[te])}n.remove(C)}let D=0;function H(){D=0}function F(){const C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function G(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function O(C,b){const q=n.get(C);if(C.isVideoTexture&&Ie(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(q,C,b);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function z(C,b){const q=n.get(C);if(C.version>0&&q.__version!==C.version){W(q,C,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function K(C,b){const q=n.get(C);if(C.version>0&&q.__version!==C.version){W(q,C,b);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function k(C,b){const q=n.get(C);if(C.version>0&&q.__version!==C.version){se(q,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}const J={[Bo]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},Q={[On]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[Ra]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},Z={[Pf]:i.NEVER,[Nf]:i.ALWAYS,[Df]:i.LESS,[Mu]:i.LEQUAL,[kf]:i.EQUAL,[Uf]:i.GEQUAL,[If]:i.GREATER,[zf]:i.NOTEQUAL};function de(C,b){if(b.type===ri&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qn||b.magFilter===Ur||b.magFilter===Ra||b.magFilter===ns||b.minFilter===qn||b.minFilter===Ur||b.minFilter===Ra||b.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,J[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,J[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,J[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Q[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Q[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Z[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===On||b.minFilter!==Ra&&b.minFilter!==ns||b.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function le(C,b){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));const te=b.source;let ce=p.get(te);ce===void 0&&(ce={},p.set(te,ce));const ee=G(b);if(ee!==C.__cacheKey){ce[ee]===void 0&&(ce[ee]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),ce[ee].usedTimes++;const De=ce[C.__cacheKey];De!==void 0&&(ce[C.__cacheKey].usedTimes--,De.usedTimes===0&&x(b)),C.__cacheKey=ee,C.__webglTexture=ce[ee].texture}return q}function W(C,b,q){let te=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=i.TEXTURE_3D);const ce=le(C,b),ee=b.source;t.bindTexture(te,C.__webglTexture,i.TEXTURE0+q);const De=n.get(ee);if(ee.version!==De.__version||ce===!0){t.activeTexture(i.TEXTURE0+q);const xe=ht.getPrimaries(ht.workingColorSpace),we=b.colorSpace===Ri?null:ht.getPrimaries(b.colorSpace),ct=b.colorSpace===Ri||xe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ue=v(b.image,!1,s.maxTextureSize);ue=Rt(b,ue);const Re=a.convert(b.format,b.colorSpace),Fe=a.convert(b.type);let Ve=S(b.internalFormat,Re,Fe,b.colorSpace,b.isVideoTexture);de(te,b);let Ae;const rt=b.mipmaps,Ze=b.isVideoTexture!==!0,bt=De.__version===void 0||ce===!0,U=ee.dataReady,ve=T(b,ue);if(b.isDepthTexture)Ve=_(b.format===Os,b.type),bt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Ve,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Re,Fe,null));else if(b.isDataTexture)if(rt.length>0){Ze&&bt&&t.texStorage2D(i.TEXTURE_2D,ve,Ve,rt[0].width,rt[0].height);for(let j=0,ne=rt.length;j<ne;j++)Ae=rt[j],Ze?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ae.width,Ae.height,Re,Fe,Ae.data):t.texImage2D(i.TEXTURE_2D,j,Ve,Ae.width,Ae.height,0,Re,Fe,Ae.data);b.generateMipmaps=!1}else Ze?(bt&&t.texStorage2D(i.TEXTURE_2D,ve,Ve,ue.width,ue.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Re,Fe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Re,Fe,ue.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ve,rt[0].width,rt[0].height,ue.depth);for(let j=0,ne=rt.length;j<ne;j++)if(Ae=rt[j],b.format!==Nn)if(Re!==null)if(Ze){if(U)if(b.layerUpdates.size>0){const ye=ph(Ae.width,Ae.height,b.format,b.type);for(const _e of b.layerUpdates){const $e=Ae.data.subarray(_e*ye/Ae.data.BYTES_PER_ELEMENT,(_e+1)*ye/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,_e,Ae.width,Ae.height,1,Re,$e)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ae.width,Ae.height,ue.depth,Re,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Ve,Ae.width,Ae.height,ue.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Ae.width,Ae.height,ue.depth,Re,Fe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Ve,Ae.width,Ae.height,ue.depth,0,Re,Fe,Ae.data)}else{Ze&&bt&&t.texStorage2D(i.TEXTURE_2D,ve,Ve,rt[0].width,rt[0].height);for(let j=0,ne=rt.length;j<ne;j++)Ae=rt[j],b.format!==Nn?Re!==null?Ze?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ae.width,Ae.height,Re,Fe,Ae.data):t.texImage2D(i.TEXTURE_2D,j,Ve,Ae.width,Ae.height,0,Re,Fe,Ae.data)}else if(b.isDataArrayTexture)if(Ze){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ve,ue.width,ue.height,ue.depth),U)if(b.layerUpdates.size>0){const j=ph(ue.width,ue.height,b.format,b.type);for(const ne of b.layerUpdates){const ye=ue.data.subarray(ne*j/ue.data.BYTES_PER_ELEMENT,(ne+1)*j/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,ue.width,ue.height,1,Re,Fe,ye)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,Fe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,ue.width,ue.height,ue.depth,0,Re,Fe,ue.data);else if(b.isData3DTexture)Ze?(bt&&t.texStorage3D(i.TEXTURE_3D,ve,Ve,ue.width,ue.height,ue.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,Fe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,ue.width,ue.height,ue.depth,0,Re,Fe,ue.data);else if(b.isFramebufferTexture){if(bt)if(Ze)t.texStorage2D(i.TEXTURE_2D,ve,Ve,ue.width,ue.height);else{let j=ue.width,ne=ue.height;for(let ye=0;ye<ve;ye++)t.texImage2D(i.TEXTURE_2D,ye,Ve,j,ne,0,Re,Fe,null),j>>=1,ne>>=1}}else if(rt.length>0){if(Ze&&bt){const j=Oe(rt[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ve,j.width,j.height)}for(let j=0,ne=rt.length;j<ne;j++)Ae=rt[j],Ze?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Re,Fe,Ae):t.texImage2D(i.TEXTURE_2D,j,Ve,Re,Fe,Ae);b.generateMipmaps=!1}else if(Ze){if(bt){const j=Oe(ue);t.texStorage2D(i.TEXTURE_2D,ve,Ve,j.width,j.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Fe,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Re,Fe,ue);m(b)&&f(te),De.__version=ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function se(C,b,q){if(b.image.length!==6)return;const te=le(C,b),ce=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);const ee=n.get(ce);if(ce.version!==ee.__version||te===!0){t.activeTexture(i.TEXTURE0+q);const De=ht.getPrimaries(ht.workingColorSpace),xe=b.colorSpace===Ri?null:ht.getPrimaries(b.colorSpace),we=b.colorSpace===Ri||De===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ct=b.isCompressedTexture||b.image[0].isCompressedTexture,ue=b.image[0]&&b.image[0].isDataTexture,Re=[];for(let ne=0;ne<6;ne++)!ct&&!ue?Re[ne]=v(b.image[ne],!0,s.maxCubemapSize):Re[ne]=ue?b.image[ne].image:b.image[ne],Re[ne]=Rt(b,Re[ne]);const Fe=Re[0],Ve=a.convert(b.format,b.colorSpace),Ae=a.convert(b.type),rt=S(b.internalFormat,Ve,Ae,b.colorSpace),Ze=b.isVideoTexture!==!0,bt=ee.__version===void 0||te===!0,U=ce.dataReady;let ve=T(b,Fe);de(i.TEXTURE_CUBE_MAP,b);let j;if(ct){Ze&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,rt,Fe.width,Fe.height);for(let ne=0;ne<6;ne++){j=Re[ne].mipmaps;for(let ye=0;ye<j.length;ye++){const _e=j[ye];b.format!==Nn?Ve!==null?Ze?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,_e.width,_e.height,Ve,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,rt,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,0,0,_e.width,_e.height,Ve,Ae,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye,rt,_e.width,_e.height,0,Ve,Ae,_e.data)}}}else{if(j=b.mipmaps,Ze&&bt){j.length>0&&ve++;const ne=Oe(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,rt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ue){Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re[ne].width,Re[ne].height,Ve,Ae,Re[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,Re[ne].width,Re[ne].height,0,Ve,Ae,Re[ne].data);for(let ye=0;ye<j.length;ye++){const $e=j[ye].image[ne].image;Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,$e.width,$e.height,Ve,Ae,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,rt,$e.width,$e.height,0,Ve,Ae,$e.data)}}else{Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ve,Ae,Re[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,Ve,Ae,Re[ne]);for(let ye=0;ye<j.length;ye++){const _e=j[ye];Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,0,0,Ve,Ae,_e.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye+1,rt,Ve,Ae,_e.image[ne])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),ee.__version=ce.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function oe(C,b,q,te,ce,ee){const De=a.convert(q.format,q.colorSpace),xe=a.convert(q.type),we=S(q.internalFormat,De,xe,q.colorSpace),ct=n.get(b),ue=n.get(q);if(ue.__renderTarget=b,!ct.__hasExternalTextures){const Re=Math.max(1,b.width>>ee),Fe=Math.max(1,b.height>>ee);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ee,we,Re,Fe,b.depth,0,De,xe,null):t.texImage2D(ce,ee,we,Re,Fe,0,De,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ke(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ce,ue.__webglTexture,0,Be(b)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ce,ue.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const te=b.depthTexture,ce=te&&te.isDepthTexture?te.type:null,ee=_(b.stencilBuffer,ce),De=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=Be(b);Ke(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,ee,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ee,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,C)}else{const te=b.textures;for(let ce=0;ce<te.length;ce++){const ee=te[ce],De=a.convert(ee.format,ee.colorSpace),xe=a.convert(ee.type),we=S(ee.internalFormat,De,xe,ee.colorSpace),ct=Be(b);q&&Ke(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,we,b.width,b.height):Ke(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,we,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,we,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(b.depthTexture);te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const ce=te.__webglTexture,ee=Be(b);if(b.depthTexture.format===Ps)Ke(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(b.depthTexture.format===Os)Ke(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ie(C){const b=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){const ce=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",ce)};te.addEventListener("dispose",ce),b.__depthDisposeCallback=ce}b.__boundDepthTexture=te}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");$(b.__webglFramebuffer,C)}else if(q){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=i.createRenderbuffer(),ae(b.__webglDepthbuffer[te],C,!1);else{const ce=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ae(b.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,b,q){const te=n.get(C);b!==void 0&&oe(te.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ie(C)}function Ye(C){const b=C.texture,q=n.get(C),te=n.get(b);C.addEventListener("dispose",A);const ce=C.textures,ee=C.isWebGLCubeRenderTarget===!0,De=ce.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=b.version,r.memory.textures++),ee){q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[xe]=[];for(let we=0;we<b.mipmaps.length;we++)q.__webglFramebuffer[xe][we]=i.createFramebuffer()}else q.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)q.__webglFramebuffer[xe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(De)for(let xe=0,we=ce.length;xe<we;xe++){const ct=n.get(ce[xe]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&Ke(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let xe=0;xe<ce.length;xe++){const we=ce[xe];q.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[xe]);const ct=a.convert(we.format,we.colorSpace),ue=a.convert(we.type),Re=S(we.internalFormat,ct,ue,we.colorSpace,C.isXRRenderTarget===!0),Fe=Be(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Re,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,q.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),de(i.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)oe(q.__webglFramebuffer[xe][we],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else oe(q.__webglFramebuffer[xe],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(b)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let xe=0,we=ce.length;xe<we;xe++){const ct=ce[xe],ue=n.get(ct);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),de(i.TEXTURE_2D,ct),oe(q.__webglFramebuffer,C,ct,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(ct)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,te.__webglTexture),de(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)oe(q.__webglFramebuffer[we],C,b,i.COLOR_ATTACHMENT0,xe,we);else oe(q.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,xe,0);m(b)&&f(xe),t.unbindTexture()}C.depthBuffer&&ie(C)}function Xe(C){const b=C.textures;for(let q=0,te=b.length;q<te;q++){const ce=b[q];if(m(ce)){const ee=y(C),De=n.get(ce).__webglTexture;t.bindTexture(ee,De),f(ee),t.unbindTexture()}}}const ut=[],N=[];function et(C){if(C.samples>0){if(Ke(C)===!1){const b=C.textures,q=C.width,te=C.height;let ce=i.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(C),xe=b.length>1;if(xe)for(let we=0;we<b.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let we=0;we<b.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const ct=n.get(b[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,q,te,0,0,q,te,ce,i.NEAREST),c===!0&&(ut.length=0,N.length=0,ut.push(i.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ut.push(ee),N.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let we=0;we<b.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const ct=n.get(b[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ct,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Be(C){return Math.min(s.maxSamples,C.samples)}function Ke(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ie(C){const b=r.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Rt(C,b){const q=C.colorSpace,te=C.format,ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==Vs&&q!==Ri&&(ht.getTransfer(q)===yt?(te!==Nn||ce!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=pe,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ke}function V1(i,e){function t(n,s=Ri){let a;const r=ht.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.BYTE;if(n===hu)return i.SHORT;if(n===pa)return i.UNSIGNED_SHORT;if(n===bc)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===_a)return i.HALF_FLOAT;if(n===du)return i.ALPHA;if(n===fu)return i.RGB;if(n===Nn)return i.RGBA;if(n===pu)return i.LUMINANCE;if(n===mu)return i.LUMINANCE_ALPHA;if(n===Ps)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===gu)return i.RED;if(n===Rc)return i.RED_INTEGER;if(n===vu)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Tc)return i.RGBA_INTEGER;if(n===er||n===tr||n===nr||n===ir)if(r===yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===er)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===er)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Ho||n===Go||n===Wo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Vo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===Xo||n===Ko)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===qo||n===Xo)return r===yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ko)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yo||n===$o||n===Jo||n===jo||n===Zo||n===Qo||n===ec||n===tc||n===nc||n===ic||n===sc||n===ac||n===rc||n===oc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Yo)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return r===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sr||n===cc||n===lc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===sr)return r===yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xu||n===hc||n===uc||n===dc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===sr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class H1 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class at extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G1={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(G1)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const W1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new rn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fi({vertexShader:W1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K1 extends Hs{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,g=null;const v=new X1,m=t.getContextAttributes();let f=null,y=null;const S=[],_=[],T=new be;let w=null;const A=new _n;A.viewport=new St;const R=new _n;R.viewport=new St;const x=[A,R],M=new H1;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let se=S[W];return se===void 0&&(se=new uo,S[W]=se),se.getTargetRaySpace()},this.getControllerGrip=function(W){let se=S[W];return se===void 0&&(se=new uo,S[W]=se),se.getGripSpace()},this.getHand=function(W){let se=S[W];return se===void 0&&(se=new uo,S[W]=se),se.getHandSpace()};function F(W){const se=_.indexOf(W.inputSource);if(se===-1)return;const oe=S[se];oe!==void 0&&(oe.update(W.inputSource,W.frame,l||r),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",O);for(let W=0;W<S.length;W++){const se=_[W];se!==null&&(_[W]=null,S[W].disconnect(se))}D=null,H=null,v.reset(),e.setRenderTarget(f),d=null,p=null,u=null,s=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new rs(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,oe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?Os:Ps,oe=m.stencil?Ns:as);const $={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:a};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer($),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new rs(p.textureWidth,p.textureHeight,{format:Nn,type:di,depthTexture:new Iu(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(W){for(let se=0;se<W.removed.length;se++){const oe=W.removed[se],ae=_.indexOf(oe);ae>=0&&(_[ae]=null,S[ae].disconnect(oe))}for(let se=0;se<W.added.length;se++){const oe=W.added[se];let ae=_.indexOf(oe);if(ae===-1){for(let ie=0;ie<S.length;ie++)if(ie>=_.length){_.push(oe),ae=ie;break}else if(_[ie]===null){_[ie]=oe,ae=ie;break}if(ae===-1)break}const $=S[ae];$&&$.connect(oe)}}const z=new I,K=new I;function k(W,se,oe){z.setFromMatrixPosition(se.matrixWorld),K.setFromMatrixPosition(oe.matrixWorld);const ae=z.distanceTo(K),$=se.projectionMatrix.elements,ie=oe.projectionMatrix.elements,pe=$[14]/($[10]-1),Ye=$[14]/($[10]+1),Xe=($[9]+1)/$[5],ut=($[9]-1)/$[5],N=($[8]-1)/$[0],et=(ie[8]+1)/ie[0],Be=pe*N,Ke=pe*et,Ie=ae/(-N+et),Rt=Ie*-N;if(se.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Rt),W.translateZ(Ie),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),$[10]===-1)W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Oe=pe+Ie,C=Ye+Ie,b=Be-Rt,q=Ke+(ae-Rt),te=Xe*Ye/C*Oe,ce=ut*Ye/C*Oe;W.projectionMatrix.makePerspective(b,q,te,ce,Oe,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function J(W,se){se===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(se.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let se=W.near,oe=W.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),M.near=R.near=A.near=se,M.far=R.far=A.far=oe,(D!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,H=M.far),A.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;const ae=W.parent,$=M.cameras;J(M,ae);for(let ie=0;ie<$.length;ie++)J($[ie],ae);$.length===2?k(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),Q(W,M,ae)};function Q(W,se,oe){oe===null?W.matrix.copy(se.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(se.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(W){c=W,p!==null&&(p.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Z=null;function de(W,se){if(h=se.getViewerPose(l||r),g=se,h!==null){const oe=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ae=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let ie=0;ie<oe.length;ie++){const pe=oe[ie];let Ye=null;if(d!==null)Ye=d.getViewport(pe);else{const ut=u.getViewSubImage(p,pe);Ye=ut.viewport,ie===0&&(e.setRenderTargetTextures(y,ut.colorTexture,p.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(y))}let Xe=x[ie];Xe===void 0&&(Xe=new _n,Xe.layers.enable(ie),Xe.viewport=new St,x[ie]=Xe),Xe.matrix.fromArray(pe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(pe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ie===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(Xe)}const $=s.enabledFeatures;if($&&$.includes("depth-sensing")){const ie=u.getDepthInformation(oe[0]);ie&&ie.isValid&&ie.texture&&v.init(e,ie,s.renderState)}}for(let oe=0;oe<S.length;oe++){const ae=_[oe],$=S[oe];ae!==null&&$!==void 0&&$.update(ae,se,l||r)}Z&&Z(W,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const le=new Du;le.setAnimationLoop(de),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}}const qi=new Yn,Y1=new Ct;function $1(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Lu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,S,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,_)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,qi.copy(_),qi.x*=-1,qi.y*=-1,qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(qi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function J1(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const _=S.program;n.uniformBlockBinding(y,_)}function l(y,S){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(y,T);const w=e.render.frame;a[y.id]!==w&&(p(y),a[y.id]=w)}function h(y){const S=u();y.__bindingPointIndex=S;const _=i.createBuffer(),T=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function u(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const S=s[y.id],_=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,A=_.length;w<A;w++){const R=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,M=R.length;x<M;x++){const D=R[x];if(d(D,w,x,T)===!0){const H=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let O=0;O<F.length;O++){const z=F[O],K=v(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+G,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,_,T){const w=y.value,A=S+"_"+_;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const R=T[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return T[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(y){const S=y.uniforms;let _=0;const T=16;for(let A=0,R=S.length;A<R;A++){const x=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,D=x.length;M<D;M++){const H=x[M],F=Array.isArray(H.value)?H.value:[H.value];for(let G=0,O=F.length;G<O;G++){const z=F[G],K=v(z),k=_%T,J=k%K.boundary,Q=k+J;_+=J,Q!==0&&T-Q<K.storage&&(_+=T-Q),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=K.storage}}}const w=_%T;return w>0&&(_+=T-w),y.__size=_,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const _=r.indexOf(S.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete a[S.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:c,update:l,dispose:f}}class j1{constructor(e={}){const{canvas:t=Ff(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Pi,this.toneMappingExposure=1;const _=this;let T=!1,w=0,A=0,R=null,x=-1,M=null;const D=new St,H=new St;let F=null;const G=new it(0);let O=0,z=t.width,K=t.height,k=1,J=null,Q=null;const Z=new St(0,0,z,K),de=new St(0,0,z,K);let le=!1;const W=new Lc;let se=!1,oe=!1;const ae=new Ct,$=new Ct,ie=new I,pe=new St,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ut(){return R===null?k:1}let N=n;function et(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),N===null){const B="webgl2";if(N=et(B,E),N===null)throw et(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Be,Ke,Ie,Rt,Oe,C,b,q,te,ce,ee,De,xe,we,ct,ue,Re,Fe,Ve,Ae,rt,Ze,bt,U;function ve(){Be=new ng(N),Be.init(),Ze=new V1(N,Be),Ke=new J0(N,Be,e,Ze),Ie=new O1(N,Be),Ke.reverseDepthBuffer&&p&&Ie.buffers.depth.setReversed(!0),Rt=new ag(N),Oe=new b1,C=new B1(N,Be,Ie,Oe,Ke,Ze,Rt),b=new Z0(_),q=new tg(_),te=new dp(N),bt=new Y0(N,te),ce=new ig(N,te,Rt,bt),ee=new og(N,ce,te,Rt),Ve=new rg(N,Ke,C),ue=new j0(Oe),De=new S1(_,b,q,Be,Ke,bt,ue),xe=new $1(_,Oe),we=new w1,ct=new P1(Be),Fe=new K0(_,b,q,Ie,ee,d,c),Re=new U1(_,ee,Ke),U=new J1(N,Rt,Ke,Ie),Ae=new $0(N,Be,Rt),rt=new sg(N,Be,Rt),Rt.programs=De.programs,_.capabilities=Ke,_.extensions=Be,_.properties=Oe,_.renderLists=we,_.shadowMap=Re,_.state=Ie,_.info=Rt}ve();const j=new K1(_,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(z,K,!1))},this.getSize=function(E){return E.set(z,K)},this.setSize=function(E,B,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,K=B,t.width=Math.floor(E*k),t.height=Math.floor(B*k),X===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(z*k,K*k).floor()},this.setDrawingBufferSize=function(E,B,X){z=E,K=B,k=X,t.width=Math.floor(E*X),t.height=Math.floor(B*X),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,B,X,Y){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,B,X,Y),Ie.viewport(D.copy(Z).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(de)},this.setScissor=function(E,B,X,Y){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,B,X,Y),Ie.scissor(H.copy(de).multiplyScalar(k).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){Ie.setScissorTest(le=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(E=!0,B=!0,X=!0){let Y=0;if(E){let V=!1;if(R!==null){const fe=R.texture.format;V=fe===Tc||fe===Ac||fe===Rc}if(V){const fe=R.texture.type,Me=fe===di||fe===as||fe===pa||fe===Ns||fe===Ec||fe===wc,Le=Fe.getClearColor(),Ce=Fe.getClearAlpha(),He=Le.r,Je=Le.g,Pe=Le.b;Me?(g[0]=He,g[1]=Je,g[2]=Pe,g[3]=Ce,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=He,v[1]=Je,v[2]=Pe,v[3]=Ce,N.clearBufferiv(N.COLOR,0,v))}else Y|=N.COLOR_BUFFER_BIT}B&&(Y|=N.DEPTH_BUFFER_BIT),X&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),we.dispose(),ct.dispose(),Oe.dispose(),b.dispose(),q.dispose(),ee.dispose(),bt.dispose(),U.dispose(),De.dispose(),j.dispose(),j.removeEventListener("sessionstart",hl),j.removeEventListener("sessionend",ul),Fi.stop()};function ne(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=Rt.autoReset,B=Re.enabled,X=Re.autoUpdate,Y=Re.needsUpdate,V=Re.type;ve(),Rt.autoReset=E,Re.enabled=B,Re.autoUpdate=X,Re.needsUpdate=Y,Re.type=V}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){const B=E.target;B.removeEventListener("dispose",$e),Ut(B)}function Ut(E){Zt(E),Oe.remove(E)}function Zt(E){const B=Oe.get(E).programs;B!==void 0&&(B.forEach(function(X){De.releaseProgram(X)}),E.isShaderMaterial&&De.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,X,Y,V,fe){B===null&&(B=Ye);const Me=V.isMesh&&V.matrixWorld.determinant()<0,Le=$d(E,B,X,Y,V);Ie.setMaterial(Y,Me);let Ce=X.index,He=1;if(Y.wireframe===!0){if(Ce=ce.getWireframeAttribute(X),Ce===void 0)return;He=2}const Je=X.drawRange,Pe=X.attributes.position;let dt=Je.start*He,Et=(Je.start+Je.count)*He;fe!==null&&(dt=Math.max(dt,fe.start*He),Et=Math.min(Et,(fe.start+fe.count)*He)),Ce!==null?(dt=Math.max(dt,0),Et=Math.min(Et,Ce.count)):Pe!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,Pe.count));const At=Et-dt;if(At<0||At===1/0)return;bt.setup(V,Y,Le,X,Ce);let hn,gt=Ae;if(Ce!==null&&(hn=te.get(Ce),gt=rt,gt.setIndex(hn)),V.isMesh)Y.wireframe===!0?(Ie.setLineWidth(Y.wireframeLinewidth*ut()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(V.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),Ie.setLineWidth(ke*ut()),V.isLineSegments?gt.setMode(N.LINES):V.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else V.isPoints?gt.setMode(N.POINTS):V.isSprite&&gt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)gt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const ke=V._multiDrawStarts,jn=V._multiDrawCounts,vt=V._multiDrawCount,Pn=Ce?te.get(Ce).bytesPerElement:1,ls=Oe.get(Y).currentProgram.getUniforms();for(let mn=0;mn<vt;mn++)ls.setValue(N,"_gl_DrawID",mn),gt.render(ke[mn]/Pn,jn[mn])}else if(V.isInstancedMesh)gt.renderInstances(dt,At,V.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,jn=Math.min(X.instanceCount,ke);gt.renderInstances(dt,At,jn)}else gt.render(dt,At)};function _t(E,B,X){E.transparent===!0&&E.side===pt&&E.forceSinglePass===!1?(E.side=an,E.needsUpdate=!0,wa(E,B,X),E.side=zi,E.needsUpdate=!0,wa(E,B,X),E.side=pt):wa(E,B,X)}this.compile=function(E,B,X=null){X===null&&(X=E),f=ct.get(X),f.init(B),S.push(f),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const Y=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Le=fe[Me];_t(Le,X,V),Y.add(Le)}else _t(fe,X,V),Y.add(fe)}),S.pop(),f=null,Y},this.compileAsync=function(E,B,X=null){const Y=this.compile(E,B,X);return new Promise(V=>{function fe(){if(Y.forEach(function(Me){Oe.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){V(E);return}setTimeout(fe,10)}Be.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Cn=null;function Jn(E){Cn&&Cn(E)}function hl(){Fi.stop()}function ul(){Fi.start()}const Fi=new Du;Fi.setAnimationLoop(Jn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(E){Cn=E,j.setAnimationLoop(E),E===null?Fi.stop():Fi.start()},j.addEventListener("sessionstart",hl),j.addEventListener("sessionend",ul),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,B,R),f=ct.get(E,S.length),f.init(B),S.push(f),$.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix($),oe=this.localClippingEnabled,se=ue.init(this.clippingPlanes,oe),m=we.get(E,y.length),m.init(),y.push(m),j.enabled===!0&&j.isPresenting===!0){const fe=_.xr.getDepthSensingMesh();fe!==null&&zr(fe,B,-1/0,_.sortObjects)}zr(E,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(J,Q),Xe=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Xe&&Fe.addToRenderList(m,E),this.info.render.frame++,se===!0&&ue.beginShadows();const X=f.state.shadowsArray;Re.render(X,E,B),se===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,V=m.transmissive;if(f.setupLights(),B.isArrayCamera){const fe=B.cameras;if(V.length>0)for(let Me=0,Le=fe.length;Me<Le;Me++){const Ce=fe[Me];fl(Y,V,E,Ce)}Xe&&Fe.render(E);for(let Me=0,Le=fe.length;Me<Le;Me++){const Ce=fe[Me];dl(m,E,Ce,Ce.viewport)}}else V.length>0&&fl(Y,V,E,B),Xe&&Fe.render(E),dl(m,E,B);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(_,E,B),bt.resetDefaultState(),x=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],se===!0&&ue.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function zr(E,B,X,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){Y&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const Me=ee.update(E),Le=E.material;Le.visible&&m.push(E,Me,Le,X,pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const Me=ee.update(E),Le=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pe.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),pe.copy(Me.boundingSphere.center)),pe.applyMatrix4(E.matrixWorld).applyMatrix4($)),Array.isArray(Le)){const Ce=Me.groups;for(let He=0,Je=Ce.length;He<Je;He++){const Pe=Ce[He],dt=Le[Pe.materialIndex];dt&&dt.visible&&m.push(E,Me,dt,X,pe.z,Pe)}}else Le.visible&&m.push(E,Me,Le,X,pe.z,null)}}const fe=E.children;for(let Me=0,Le=fe.length;Me<Le;Me++)zr(fe[Me],B,X,Y)}function dl(E,B,X,Y){const V=E.opaque,fe=E.transmissive,Me=E.transparent;f.setupLightsView(X),se===!0&&ue.setGlobalState(_.clippingPlanes,X),Y&&Ie.viewport(D.copy(Y)),V.length>0&&Ea(V,B,X),fe.length>0&&Ea(fe,B,X),Me.length>0&&Ea(Me,B,X),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function fl(E,B,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new rs(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?_a:di,minFilter:ns,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const fe=f.state.transmissionRenderTarget[Y.id],Me=Y.viewport||D;fe.setSize(Me.z,Me.w);const Le=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(G),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Xe&&Fe.render(X);const Ce=_.toneMapping;_.toneMapping=Pi;const He=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),se===!0&&ue.setGlobalState(_.clippingPlanes,Y),Ea(E,X,Y),C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Pe=0,dt=B.length;Pe<dt;Pe++){const Et=B[Pe],At=Et.object,hn=Et.geometry,gt=Et.material,ke=Et.group;if(gt.side===pt&&At.layers.test(Y.layers)){const jn=gt.side;gt.side=an,gt.needsUpdate=!0,pl(At,X,Y,hn,gt,ke),gt.side=jn,gt.needsUpdate=!0,Je=!0}}Je===!0&&(C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe))}_.setRenderTarget(Le),_.setClearColor(G,O),He!==void 0&&(Y.viewport=He),_.toneMapping=Ce}function Ea(E,B,X){const Y=B.isScene===!0?B.overrideMaterial:null;for(let V=0,fe=E.length;V<fe;V++){const Me=E[V],Le=Me.object,Ce=Me.geometry,He=Y===null?Me.material:Y,Je=Me.group;Le.layers.test(X.layers)&&pl(Le,B,X,Ce,He,Je)}}function pl(E,B,X,Y,V,fe){E.onBeforeRender(_,B,X,Y,V,fe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(_,B,X,Y,E,fe),V.transparent===!0&&V.side===pt&&V.forceSinglePass===!1?(V.side=an,V.needsUpdate=!0,_.renderBufferDirect(X,B,Y,V,E,fe),V.side=zi,V.needsUpdate=!0,_.renderBufferDirect(X,B,Y,V,E,fe),V.side=pt):_.renderBufferDirect(X,B,Y,V,E,fe),E.onAfterRender(_,B,X,Y,V,fe)}function wa(E,B,X){B.isScene!==!0&&(B=Ye);const Y=Oe.get(E),V=f.state.lights,fe=f.state.shadowsArray,Me=V.state.version,Le=De.getParameters(E,V.state,fe,B,X),Ce=De.getProgramCacheKey(Le);let He=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?q:b).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",$e),He=new Map,Y.programs=He);let Je=He.get(Ce);if(Je!==void 0){if(Y.currentProgram===Je&&Y.lightsStateVersion===Me)return gl(E,Le),Je}else Le.uniforms=De.getUniforms(E),E.onBeforeCompile(Le,_),Je=De.acquireProgram(Le,Ce),He.set(Ce,Je),Y.uniforms=Le.uniforms;const Pe=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=ue.uniform),gl(E,Le),Y.needsLights=jd(E),Y.lightsStateVersion=Me,Y.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMap.value=V.state.directionalShadowMap,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotShadowMap.value=V.state.spotShadowMap,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMap.value=V.state.pointShadowMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Je,Y.uniformsList=null,Je}function ml(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=ar.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function gl(E,B){const X=Oe.get(E);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function $d(E,B,X,Y,V){B.isScene!==!0&&(B=Ye),C.resetTextureUnits();const fe=B.fog,Me=Y.isMeshStandardMaterial?B.environment:null,Le=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vs,Ce=(Y.isMeshStandardMaterial?q:b).get(Y.envMap||Me),He=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Je=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pe=!!X.morphAttributes.position,dt=!!X.morphAttributes.normal,Et=!!X.morphAttributes.color;let At=Pi;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=_.toneMapping);const hn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=hn!==void 0?hn.length:0,ke=Oe.get(Y),jn=f.state.lights;if(se===!0&&(oe===!0||E!==M)){const yn=E===M&&Y.id===x;ue.setState(Y,E,yn)}let vt=!1;Y.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==jn.state.version||ke.outputColorSpace!==Le||V.isBatchedMesh&&ke.batching===!1||!V.isBatchedMesh&&ke.batching===!0||V.isBatchedMesh&&ke.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ke.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ke.instancing===!1||!V.isInstancedMesh&&ke.instancing===!0||V.isSkinnedMesh&&ke.skinning===!1||!V.isSkinnedMesh&&ke.skinning===!0||V.isInstancedMesh&&ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ke.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ke.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ke.instancingMorph===!1&&V.morphTexture!==null||ke.envMap!==Ce||Y.fog===!0&&ke.fog!==fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ue.numPlanes||ke.numIntersection!==ue.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Je||ke.morphTargets!==Pe||ke.morphNormals!==dt||ke.morphColors!==Et||ke.toneMapping!==At||ke.morphTargetsCount!==gt)&&(vt=!0):(vt=!0,ke.__version=Y.version);let Pn=ke.currentProgram;vt===!0&&(Pn=wa(Y,B,V));let ls=!1,mn=!1,$s=!1;const Tt=Pn.getUniforms(),Bn=ke.uniforms;if(Ie.useProgram(Pn.program)&&(ls=!0,mn=!0,$s=!0),Y.id!==x&&(x=Y.id,mn=!0),ls||M!==E){Ie.buffers.depth.getReversed()?(ae.copy(E.projectionMatrix),Vf(ae),Hf(ae),Tt.setValue(N,"projectionMatrix",ae)):Tt.setValue(N,"projectionMatrix",E.projectionMatrix),Tt.setValue(N,"viewMatrix",E.matrixWorldInverse);const mi=Tt.map.cameraPosition;mi!==void 0&&mi.setValue(N,ie.setFromMatrixPosition(E.matrixWorld)),Ke.logarithmicDepthBuffer&&Tt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,mn=!0,$s=!0)}if(V.isSkinnedMesh){Tt.setOptional(N,V,"bindMatrix"),Tt.setOptional(N,V,"bindMatrixInverse");const yn=V.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Tt.setValue(N,"boneTexture",yn.boneTexture,C))}V.isBatchedMesh&&(Tt.setOptional(N,V,"batchingTexture"),Tt.setValue(N,"batchingTexture",V._matricesTexture,C),Tt.setOptional(N,V,"batchingIdTexture"),Tt.setValue(N,"batchingIdTexture",V._indirectTexture,C),Tt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Tt.setValue(N,"batchingColorTexture",V._colorsTexture,C));const Js=X.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&Ve.update(V,X,Pn),(mn||ke.receiveShadow!==V.receiveShadow)&&(ke.receiveShadow=V.receiveShadow,Tt.setValue(N,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Bn.envMap.value=Ce,Bn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Bn.envMapIntensity.value=B.environmentIntensity),mn&&(Tt.setValue(N,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&Jd(Bn,$s),fe&&Y.fog===!0&&xe.refreshFogUniforms(Bn,fe),xe.refreshMaterialUniforms(Bn,Y,k,K,f.state.transmissionRenderTarget[E.id]),ar.upload(N,ml(ke),Bn,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ar.upload(N,ml(ke),Bn,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(N,"center",V.center),Tt.setValue(N,"modelViewMatrix",V.modelViewMatrix),Tt.setValue(N,"normalMatrix",V.normalMatrix),Tt.setValue(N,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const yn=Y.uniformsGroups;for(let mi=0,gi=yn.length;mi<gi;mi++){const vl=yn[mi];U.update(vl,Pn),U.bind(vl,Pn)}}return Pn}function Jd(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function jd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,B,X){Oe.get(E.texture).__webglTexture=B,Oe.get(E.depthTexture).__webglTexture=X;const Y=Oe.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const X=Oe.get(E);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,X=0){R=E,w=B,A=X;let Y=!0,V=null,fe=!1,Me=!1;if(E){const Ce=Oe.get(E);if(Ce.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(Ce.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Ce.__hasExternalTextures)C.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pe=E.depthTexture;if(Ce.__boundDepthTexture!==Pe){if(Pe!==null&&Oe.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Je=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Je[B])?V=Je[B][X]:V=Je[B],fe=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?V=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Je)?V=Je[X]:V=Je,D.copy(E.viewport),H.copy(E.scissor),F=E.scissorTest}else D.copy(Z).multiplyScalar(k).floor(),H.copy(de).multiplyScalar(k).floor(),F=le;if(Ie.bindFramebuffer(N.FRAMEBUFFER,V)&&Y&&Ie.drawBuffers(E,V),Ie.viewport(D),Ie.scissor(H),Ie.setScissorTest(F),fe){const Ce=Oe.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,X)}else if(Me){const Ce=Oe.get(E.texture),He=B||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.__webglTexture,X||0,He)}x=-1},this.readRenderTargetPixels=function(E,B,X,Y,V,fe,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){Ie.bindFramebuffer(N.FRAMEBUFFER,Le);try{const Ce=E.texture,He=Ce.format,Je=Ce.type;if(!Ke.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&X>=0&&X<=E.height-V&&N.readPixels(B,X,Y,V,Ze.convert(He),Ze.convert(Je),fe)}finally{const Ce=R!==null?Oe.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,B,X,Y,V,fe,Me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Le=Le[Me]),Le){const Ce=E.texture,He=Ce.format,Je=Ce.type;if(!Ke.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-Y&&X>=0&&X<=E.height-V){Ie.bindFramebuffer(N.FRAMEBUFFER,Le);const Pe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),N.readPixels(B,X,Y,V,Ze.convert(He),Ze.convert(Je),0);const dt=R!==null?Oe.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,dt);const Et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Bf(N,Et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.deleteBuffer(Pe),N.deleteSync(Et),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,X=0){E.isTexture!==!0&&(oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-X),V=Math.floor(E.image.width*Y),fe=Math.floor(E.image.height*Y),Me=B!==null?B.x:0,Le=B!==null?B.y:0;C.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Me,Le,V,fe),Ie.unbindTexture()},this.copyTextureToTexture=function(E,B,X=null,Y=null,V=0){E.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],B=arguments[2],V=arguments[3]||0,X=null);let fe,Me,Le,Ce,He,Je,Pe,dt,Et;const At=E.isCompressedTexture?E.mipmaps[V]:E.image;X!==null?(fe=X.max.x-X.min.x,Me=X.max.y-X.min.y,Le=X.isBox3?X.max.z-X.min.z:1,Ce=X.min.x,He=X.min.y,Je=X.isBox3?X.min.z:0):(fe=At.width,Me=At.height,Le=At.depth||1,Ce=0,He=0,Je=0),Y!==null?(Pe=Y.x,dt=Y.y,Et=Y.z):(Pe=0,dt=0,Et=0);const hn=Ze.convert(B.format),gt=Ze.convert(B.type);let ke;B.isData3DTexture?(C.setTexture3D(B,0),ke=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),ke=N.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),ke=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const jn=N.getParameter(N.UNPACK_ROW_LENGTH),vt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Pn=N.getParameter(N.UNPACK_SKIP_PIXELS),ls=N.getParameter(N.UNPACK_SKIP_ROWS),mn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ce),N.pixelStorei(N.UNPACK_SKIP_ROWS,He),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Je);const $s=E.isDataArrayTexture||E.isData3DTexture,Tt=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Bn=Oe.get(E),Js=Oe.get(B),yn=Oe.get(Bn.__renderTarget),mi=Oe.get(Js.__renderTarget);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let gi=0;gi<Le;gi++)$s&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.get(E).__webglTexture,V,Je+gi),E.isDepthTexture?(Tt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.get(B).__webglTexture,V,Et+gi),N.blitFramebuffer(Ce,He,fe,Me,Pe,dt,fe,Me,N.DEPTH_BUFFER_BIT,N.NEAREST)):Tt?N.copyTexSubImage3D(ke,V,Pe,dt,Et+gi,Ce,He,fe,Me):N.copyTexSubImage2D(ke,V,Pe,dt,Et+gi,Ce,He,fe,Me);Ie.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Tt?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(ke,V,Pe,dt,Et,fe,Me,Le,hn,gt,At.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(ke,V,Pe,dt,Et,fe,Me,Le,hn,At.data):N.texSubImage3D(ke,V,Pe,dt,Et,fe,Me,Le,hn,gt,At):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,Pe,dt,fe,Me,hn,gt,At.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,Pe,dt,At.width,At.height,hn,At.data):N.texSubImage2D(N.TEXTURE_2D,V,Pe,dt,fe,Me,hn,gt,At);N.pixelStorei(N.UNPACK_ROW_LENGTH,jn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ls),N.pixelStorei(N.UNPACK_SKIP_IMAGES,mn),V===0&&B.generateMipmaps&&N.generateMipmap(ke),Ie.unbindTexture()},this.copyTextureToTexture3D=function(E,B,X=null,Y=null,V=0){return E.isTexture!==!0&&(oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],B=arguments[3],V=arguments[4]||0),oa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,X,Y,V)},this.initRenderTarget=function(E){Oe.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,Ie.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class Pc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(e),this.density=t}clone(){return new Pc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Z1 extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Q1 extends Gs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mh=new Ct,mc=new Eu,Ka=new _r,Ya=new I;class ev extends Vt{constructor(e=new jt,t=new Q1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=a,e.ray.intersectsSphere(Ka)===!1)return;mh.copy(s).invert(),mc.copy(e.ray).applyMatrix4(mh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=p,v=d;g<v;g++){const m=l.getX(g);Ya.fromBufferAttribute(u,m),gh(Ya,m,c,s,e,t,this)}}else{const p=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=p,v=d;g<v;g++)Ya.fromBufferAttribute(u,g),gh(Ya,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function gh(i,e,t,n,s,a,r){const o=mc.distanceSqToPoint(i);if(o<t){const c=new I;mc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class tv extends rn{constructor(e,t,n,s,a,r,o,c,l){super(e,t,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let r;t?r=t:r=e*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(a-1);const h=n[s],p=n[s+1]-h,d=(r-h)/p;return(s+d)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=t||(r.isVector2?new be:new I);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],a=[],r=[],o=new I,c=new Ct;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new I)}a[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Jt(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(c.makeRotationAxis(o,g))}r[d].crossVectors(s[d],a[d])}if(t===!0){let d=Math.acos(Jt(a[0].dot(a[e]),-1,1));d/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(d=-d);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dc extends $n{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new be){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nv extends Dc{constructor(e,t,n,s,a,r){super(e,t,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function kc(){let i=0,e=0,t=0,n=0;function s(a,r,o,c){i=a,e=o,t=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,h,u){let p=(r-a)/l-(o-a)/(l+h)+(o-r)/h,d=(o-r)/h-(c-r)/(h+u)+(c-o)/u;p*=h,d*=h,s(r,o,p,d)},calc:function(a){const r=a*a,o=r*a;return i+e*a+t*r+n*o}}}const $a=new I,fo=new kc,po=new kc,mo=new kc;class Fu extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%a]:($a.subVectors(s[0],s[1]).add(s[0]),l=$a);const u=s[o%a],p=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:($a.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=$a),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),fo.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,v,m),po.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,v,m),mo.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),po.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),mo.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(fo.calc(c),po.calc(c),mo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vh(i,e,t,n,s){const a=(n-e)*.5,r=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+a+r)*c+(-3*t+3*n-2*a-r)*o+a*i+t}function iv(i,e){const t=1-i;return t*t*e}function sv(i,e){return 2*(1-i)*i*e}function av(i,e){return i*i*e}function ha(i,e,t,n){return iv(i,e)+sv(i,t)+av(i,n)}function rv(i,e){const t=1-i;return t*t*t*e}function ov(i,e){const t=1-i;return 3*t*t*i*e}function cv(i,e){return 3*(1-i)*i*i*e}function lv(i,e){return i*i*i*e}function ua(i,e,t,n,s){return rv(i,e)+ov(i,t)+cv(i,n)+lv(i,s)}class Bu extends $n{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ua(e,s.x,a.x,r.x,o.x),ua(e,s.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hv extends $n{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ua(e,s.x,a.x,r.x,o.x),ua(e,s.y,a.y,r.y,o.y),ua(e,s.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vu extends $n{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uv extends $n{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hu extends $n{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(ha(e,s.x,a.x,r.x),ha(e,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gu extends $n{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(ha(e,s.x,a.x,r.x),ha(e,s.y,a.y,r.y),ha(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wu extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(vh(o,c.x,l.x,h.x,u.x),vh(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new be().fromArray(s))}return this}}var gc=Object.freeze({__proto__:null,ArcCurve:nv,CatmullRomCurve3:Fu,CubicBezierCurve:Bu,CubicBezierCurve3:hv,EllipseCurve:Dc,LineCurve:Vu,LineCurve3:uv,QuadraticBezierCurve:Hu,QuadraticBezierCurve3:Gu,SplineCurve:Wu});class dv extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new gc[s.type]().fromJSON(s))}return this}}class fv extends dv{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vu(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const a=new Hu(this.currentPoint.clone(),new be(e,t),new be(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,r){const o=new Bu(this.currentPoint.clone(),new be(e,t),new be(n,s),new be(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Wu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,a,r),this}absarc(e,t,n,s,a,r){return this.absellipse(e,t,n,n,s,a,r),this}ellipse(e,t,n,s,a,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,a,r,o,c),this}absellipse(e,t,n,s,a,r,o,c){const l=new Dc(e,t,n,s,a,r,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ic extends jt{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Jt(s,0,Math.PI*2);const a=[],r=[],o=[],c=[],l=[],h=1/t,u=new I,p=new be,d=new I,g=new I,v=new I;let m=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=f*1,d.y=-m,d.z=f*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let y=0;y<=t;y++){const S=n+y*h*s,_=Math.sin(S),T=Math.cos(S);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*_,u.y=e[w].y,u.z=e[w].x*T,r.push(u.x,u.y,u.z),p.x=y/t,p.y=w/(e.length-1),o.push(p.x,p.y);const A=c[3*w+0]*_,R=c[3*w+1],x=c[3*w+0]*T;l.push(A,R,x)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){const _=S+y*e.length,T=_,w=_+e.length,A=_+e.length+1,R=_+1;a.push(T,w,R),a.push(A,R,w)}this.setIndex(a),this.setAttribute("position",new mt(r,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.points,e.segments,e.phiStart,e.phiLength)}}class zc extends Ic{constructor(e=1,t=1,n=4,s=8){const a=new fv;a.absarc(0,-t/2,e,Math.PI*1.5,0),a.absarc(0,t/2,e,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new zc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Bt extends jt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],c=[],l=new I,h=new be;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[p]/e+1)/2,h.y=(r[p+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ln extends jt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],p=[],d=[];let g=0;const v=[],m=n/2;let f=0;y(),r===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(d,2));function y(){const _=new I,T=new I;let w=0;const A=(t-e)/n;for(let R=0;R<=a;R++){const x=[],M=R/a,D=M*(t-e)+e;for(let H=0;H<=s;H++){const F=H/s,G=F*c+o,O=Math.sin(G),z=Math.cos(G);T.x=D*O,T.y=-M*n+m,T.z=D*z,u.push(T.x,T.y,T.z),_.set(O,A,z).normalize(),p.push(_.x,_.y,_.z),d.push(F,1-M),x.push(g++)}v.push(x)}for(let R=0;R<s;R++)for(let x=0;x<a;x++){const M=v[x][R],D=v[x+1][R],H=v[x+1][R+1],F=v[x][R+1];(e>0||x!==0)&&(h.push(M,D,F),w+=3),(t>0||x!==a-1)&&(h.push(D,H,F),w+=3)}l.addGroup(f,w,0),f+=w}function S(_){const T=g,w=new be,A=new I;let R=0;const x=_===!0?e:t,M=_===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*M,0),p.push(0,M,0),d.push(.5,.5),g++;const D=g;for(let H=0;H<=s;H++){const G=H/s*c+o,O=Math.cos(G),z=Math.sin(G);A.x=x*z,A.y=m*M,A.z=x*O,u.push(A.x,A.y,A.z),p.push(0,M,0),w.x=O*.5+.5,w.y=z*.5*M+.5,d.push(w.x,w.y),g++}for(let H=0;H<s;H++){const F=T+H,G=D+H;_===!0?h.push(G,G+1,F):h.push(G+1,G,F),R+=3}l.addGroup(f,R,_===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nt extends ln{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new nt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uc extends jt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),l(n),h(),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(a.slice(),3)),this.setAttribute("uv",new mt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new I,_=new I,T=new I;for(let w=0;w<t.length;w+=3)d(t[w+0],S),d(t[w+1],_),d(t[w+2],T),c(S,_,T,y)}function c(y,S,_,T){const w=T+1,A=[];for(let R=0;R<=w;R++){A[R]=[];const x=y.clone().lerp(_,R/w),M=S.clone().lerp(_,R/w),D=w-R;for(let H=0;H<=D;H++)H===0&&R===w?A[R][H]=x:A[R][H]=x.clone().lerp(M,H/D)}for(let R=0;R<w;R++)for(let x=0;x<2*(w-R)-1;x++){const M=Math.floor(x/2);x%2===0?(p(A[R][M+1]),p(A[R+1][M]),p(A[R][M])):(p(A[R][M+1]),p(A[R+1][M+1]),p(A[R+1][M]))}}function l(y){const S=new I;for(let _=0;_<a.length;_+=3)S.x=a[_+0],S.y=a[_+1],S.z=a[_+2],S.normalize().multiplyScalar(y),a[_+0]=S.x,a[_+1]=S.y,a[_+2]=S.z}function h(){const y=new I;for(let S=0;S<a.length;S+=3){y.x=a[S+0],y.y=a[S+1],y.z=a[S+2];const _=m(y)/2/Math.PI+.5,T=f(y)/Math.PI+.5;r.push(_,1-T)}g(),u()}function u(){for(let y=0;y<r.length;y+=6){const S=r[y+0],_=r[y+2],T=r[y+4],w=Math.max(S,_,T),A=Math.min(S,_,T);w>.9&&A<.1&&(S<.2&&(r[y+0]+=1),_<.2&&(r[y+2]+=1),T<.2&&(r[y+4]+=1))}}function p(y){a.push(y.x,y.y,y.z)}function d(y,S){const _=y*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){const y=new I,S=new I,_=new I,T=new I,w=new be,A=new be,R=new be;for(let x=0,M=0;x<a.length;x+=9,M+=6){y.set(a[x+0],a[x+1],a[x+2]),S.set(a[x+3],a[x+4],a[x+5]),_.set(a[x+6],a[x+7],a[x+8]),w.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),R.set(r[M+4],r[M+5]),T.copy(y).add(S).add(_).divideScalar(3);const D=m(T);v(w,M+0,y,D),v(A,M+2,S,D),v(R,M+4,_,D)}}function v(y,S,_,T){T<0&&y.x===1&&(r[S]=y.x-1),_.x===0&&_.z===0&&(r[S]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.vertices,e.indices,e.radius,e.details)}}class Nc extends Uc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nc(e.radius,e.detail)}}class Xn extends jt{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=e;const p=(t-e)/s,d=new I,g=new be;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=a+m/n*r;d.x=u*Math.cos(f),d.y=u*Math.sin(f),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=p}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const y=f+m,S=y,_=y+n+1,T=y+n+2,w=y+1;o.push(S,_,w),o.push(_,T,w)}}this.setIndex(o),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ft extends jt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new I,p=new I,d=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const y=[],S=f/n;let _=0;f===0&&r===0?_=.5/t:f===n&&c===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){const w=T/t;u.x=-e*Math.cos(s+w*a)*Math.sin(r+S*o),u.y=e*Math.cos(r+S*o),u.z=e*Math.sin(s+w*a)*Math.sin(r+S*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),m.push(w+_,1-S),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const S=h[f][y+1],_=h[f][y],T=h[f+1][y],w=h[f+1][y+1];(f!==0||r>0)&&d.push(S,_,w),(f!==n-1||c<Math.PI)&&d.push(_,T,w)}this.setIndex(d),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pn extends jt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],c=[],l=[],h=new I,u=new I,p=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*a,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,y=(s+1)*d+g;r.push(v,m,y),r.push(m,f,y)}this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Oc extends jt{constructor(e=new Gu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:a};const r=e.computeFrenetFrames(t,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new I,c=new I,l=new be;let h=new I;const u=[],p=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(d,2));function v(){for(let S=0;S<t;S++)m(S);m(a===!1?t:0),y(),f()}function m(S){h=e.getPointAt(S/t,h);const _=r.normals[S],T=r.binormals[S];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,R=Math.sin(A),x=-Math.cos(A);c.x=x*_.x+R*T.x,c.y=x*_.y+R*T.y,c.z=x*_.z+R*T.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=t;S++)for(let _=1;_<=s;_++){const T=(s+1)*(S-1)+(_-1),w=(s+1)*S+(_-1),A=(s+1)*S+_,R=(s+1)*(S-1)+_;g.push(T,w,R),g.push(w,A,R)}}function y(){for(let S=0;S<=t;S++)for(let _=0;_<=s;_++)l.x=S/t,l.y=_/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Oc(new gc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class wn extends Gs{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const xh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class pv{constructor(e,t,n){const s=this;let a=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const mv=new pv;class Fc{constructor(e){this.manager=e!==void 0?e:mv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fc.DEFAULT_MATERIAL_NAME="__DEFAULT";class gv extends Fc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=xh.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const o=ma("img");function c(){h(),xh.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){h(),s&&s(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class vv extends Fc{constructor(e){super(e)}load(e,t,n,s){const a=new rn,r=new gv(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Bc extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xv extends Bc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const go=new Ct,_h=new I,Mh=new I;class qu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yh=new Ct,na=new I,vo=new I;class _v extends qu{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),n.position.copy(na),vo.copy(n.position),vo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vo),n.updateMatrixWorld(),s.makeTranslation(-na.x,-na.y,-na.z),yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh)}}class Xu extends Bc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _v}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mv extends qu{constructor(){super(new ku(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends Bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Mv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const Sv=`attribute float aSize; attribute float aAlpha; attribute vec3 aColor; uniform float uScale;
varying vec3 vC; varying float vA;
void main(){ vC=aColor; vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.);
  gl_PointSize=aSize*uScale/max(.1,-mv.z); gl_Position=projectionMatrix*mv; }`,bv=`varying vec3 vC; varying float vA;
void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.12,d)*vA; if(a<.01) discard; gl_FragColor=vec4(vC,a); }`;class Eh{constructor(e,t,n){this.max=t,this.cur=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.grow=new Float32Array(t),this.a0=new Float32Array(t);const s=this.geo=new jt;s.setAttribute("position",new fn(this.pos,3)),s.setAttribute("aColor",new fn(this.col,3)),s.setAttribute("aSize",new fn(this.size,1)),s.setAttribute("aAlpha",new fn(this.alpha,1)),this.mat=new fi({vertexShader:Sv,fragmentShader:bv,uniforms:{uScale:{value:900}},transparent:!0,depthWrite:!1,blending:n?Ui:Ci}),this.points=new ev(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?11:10,e.add(this.points)}emit(e,t,n,s,a,r,o,c,l,h,u,p=0,d=0,g=0,v=1){const m=this.cur;this.cur=(m+1)%this.max;const f=m*3;this.pos[f]=e,this.pos[f+1]=t,this.pos[f+2]=n,this.vel[f]=s,this.vel[f+1]=a,this.vel[f+2]=r,this.col[f]=o,this.col[f+1]=c,this.col[f+2]=l,this.size[m]=h,this.life[m]=this.maxLife[m]=u,this.grav[m]=p,this.drag[m]=d,this.grow[m]=g,this.a0[m]=v}update(e){for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=e;const s=n*3,a=Math.max(0,1-this.drag[n]*e);this.vel[s]*=a,this.vel[s+1]=this.vel[s+1]*a-this.grav[n]*e,this.vel[s+2]*=a,this.pos[s]+=this.vel[s]*e,this.pos[s+1]+=this.vel[s+1]*e,this.pos[s+2]+=this.vel[s+2]*e,this.pos[s+1]<.02&&this.grav[n]>0&&(this.pos[s+1]=.02,this.vel[s+1]*=-.3,this.vel[s]*=.6,this.vel[s+2]*=.6),this.size[n]=Math.max(0,this.size[n]+this.grow[n]*e),this.alpha[n]=this.a0[n]*Math.max(0,Math.min(1,this.life[n]/this.maxLife[n]*1.6))}const t=this.geo.attributes;t.position.needsUpdate=t.aColor.needsUpdate=t.aSize.needsUpdate=t.aAlpha.needsUpdate=!0}}const ot=()=>Math.random(),It=()=>Math.random()*2-1,Ev=[[.45,.3,.1],[.3,.32,.1],[.5,.18,.08],[.35,.22,.1]];class wv{constructor(e){this.scene=e,this.add=new Eh(e,5e3,!0),this.norm=new Eh(e,3500,!1),this.objs=[]}resize(e){this.add.mat.uniforms.uScale.value=this.norm.mat.uniforms.uScale.value=e*1.25}frac(e){return e*=this.mult??1,Math.floor(e)+(ot()<e%1?1:0)}fire(e,t,n=.15,s=2,a=.5){for(let r=this.frac(t);r>0;r--){const o=ot();this.add.emit(e.x+It()*n,e.y+It()*n*.5,e.z+It()*n,It()*.5,s*(.5+ot()*.8),It()*.5,.75,.22+o*.3,.03+o*.1,a*(.6+ot()*.8),.3+ot()*.45,-1.2,1,-a*.9)}}fireJet(e,t,n,s=14,a=.7){for(let r=this.frac(n);r>0;r--){const o=ot(),c=s*(.6+ot()*.6);this.add.emit(e.x,e.y,e.z,t.x*c+It()*1.4,t.y*c+It()*1.2+.5,t.z*c+It()*1.4,.8,.25+o*.3,.04+o*.1,a*(.5+ot()),.35+ot()*.3,-2,.8,a*1.2)}}embers(e,t,n=.6,s=3){for(let a=this.frac(t);a>0;a--)this.add.emit(e.x+It()*n,e.y+It()*n,e.z+It()*n,It()*s,ot()*s*1.2,It()*s,1,.5,.12,.07+ot()*.06,.6+ot()*.9,2.5,.6,0)}sparks(e,t,n=[1,.8,.5]){for(let s=this.frac(t);s>0;s--)this.add.emit(e.x,e.y,e.z,It()*6,It()*5+1.5,It()*6,n[0],n[1],n[2],.1+ot()*.1,.18+ot()*.25,9,1.5,-.15)}dust(e,t,n=0,s=0,a=3,r=[.32,.24,.18],o=.7){for(let c=this.frac(t);c>0;c--){const l=ot()*6.283,h=ot()*a*.6,u=.7+ot()*.5;this.norm.emit(e.x+It()*.2,e.y+ot()*.25,e.z+It()*.2,n*a*(.4+ot()*.8)+Math.cos(l)*h,ot()*1.6,s*a*(.4+ot()*.8)+Math.sin(l)*h,r[0]*u,r[1]*u,r[2]*u,o*(.5+ot()*.8),.5+ot()*.7,.6,1.8,o*1.1,.4)}}smoke(e,t,n=.8){for(let s=this.frac(t);s>0;s--)this.norm.emit(e.x+It()*.25,e.y+It()*.5,e.z+It()*.25,It()*.8,.6+ot()*1.2,It()*.8,.13,.12,.12,n*(.5+ot()*.7),.6+ot()*.8,-.3,1,n,.45)}leaves(e,t,n=4,s=0){for(let a=this.frac(t);a>0;a--){const r=ot()*6.283,o=n*(.3+ot()*.8),c=Ev[ot()*4|0],l=s?.3+ot()*s:0;this.norm.emit(e.x+Math.cos(r)*l,e.y+ot()*1.6,e.z+Math.sin(r)*l,-Math.sin(r)*o+Math.cos(r)*o*(s?.15:1),ot()*3.5,Math.cos(r)*o+Math.sin(r)*o*(s?.15:1),c[0],c[1],c[2],.1+ot()*.09,.7+ot()*.9,3.5,.9,0,1)}}ring(e,t=14207144,n=5,s=.5,a=.06){const r=new Ne(new Xn(.82,1,56),new kt({color:t,transparent:!0,opacity:.9,side:pt,depthWrite:!1,blending:Ui,fog:!1}));r.rotation.x=-Math.PI/2,r.position.set(e.x,a,e.z),this.scene.add(r);let o=0;this.objs.push(c=>{o+=c;const l=Math.min(1,o/s),h=1-(1-l)*(1-l);if(r.scale.setScalar(.2+h*n),r.material.opacity=.9*(1-l),l>=1)return this.scene.remove(r),r.geometry.dispose(),r.material.dispose(),!0})}update(e){this.add.update(e),this.norm.update(e);for(let t=this.objs.length-1;t>=0;t--)this.objs[t](e)&&this.objs.splice(t,1)}}function Ku(){const i=new at;for(let e=0;e<7;e++){const t=new Ne(new ln(.24+e*.13,.1+e*.13,.42,18,1,!0),new kt({color:e%2?10126440:7232586,transparent:!0,opacity:.26,side:pt,depthWrite:!1}));t.position.y=.21+e*.4,t.userData.i=e,i.add(t)}return i.userData.spin=e=>{for(const t of i.children){const n=t.userData.i;t.rotation.y=e*(9+n*1.7),t.position.x=Math.sin(e*7+n*.9)*.05*n,t.position.z=Math.cos(e*6+n*.7)*.05*n}},i}const $t=(i,e)=>new kt({color:i,transparent:!0,opacity:e,side:pt,depthWrite:!1,blending:Ui,fog:!1});function Yu(){const i=new at,e=new wn({color:4862752,roughness:1}),t=new wn({color:4155946,roughness:1}),n=new Ne(new Xn(.72,.95,40),$t(10215520,.8));n.rotation.x=-Math.PI/2,n.position.y=.05,i.add(n);const s=new Ne(new Bt(.72,32),$t(6270522,.25));s.rotation.x=-Math.PI/2,s.position.y=.04,i.add(s);const a=[];for(let r=0;r<9;r++){const o=r/9*6.2832+Math.random()*.3,c=.35+Math.random()*.45,l=1+Math.random()*.8,h=new at;h.position.set(Math.sin(o)*c,0,Math.cos(o)*c),h.rotation.set(Math.cos(o)*-.38,0,Math.sin(o)*.38);const u=new Ne(new nt(.075+Math.random()*.05,l,6),r%3?e:t);u.position.y=l/2,u.castShadow=!0,h.add(u),h.userData.ph=Math.random()*6,h.userData.bx=h.rotation.x,h.userData.bz=h.rotation.z,i.add(h),a.push(h)}return i.userData.set=(r,o,c,l=0)=>{n.visible=s.visible=r>0,n.material.opacity=r*(.55+.35*Math.sin(c*28)),s.material.opacity=r*.28,n.scale.setScalar(1.25-.25*Math.min(1,r));for(const h of a)h.scale.set(1,Math.max(.001,o),1),h.visible=o>.01,h.rotation.y=Math.sin(c*9+h.userData.ph)*.25*o,h.rotation.x=h.userData.bx*(1-2.3*l),h.rotation.z=h.userData.bz*(1-2.3*l)},i.userData.set(0,0,0),i}function Rv(){const i=new at,e=new Ft(.5,10,6);for(let t=0;t<3;t++){const n=new Ne(e,new kt({color:t===1?14221194:7327804,transparent:!0,opacity:.9,depthWrite:!1}));n.scale.set(1.25,.035,.34),n.rotation.z=t*2.094,i.add(n)}return i}function Av(){const i=new at;for(let t=0;t<3;t++){const n=new Ne(new pn(1-t*.26,.07+t*.02,6,22,Math.PI),$t(t===1?14264575:9063935,.75));n.position.z=t*.22,n.position.y=-.9+t*.1,i.add(n)}const e=new Ne(new Ft(.2,10,8),$t(15784191,.9));return e.scale.set(1,.5,.5),e.position.set(0,-.25,.45),i.add(e),i}function Tv(){const i=new at,e=$t(8011007,.32),t=$t(15918847,.85),n=new Ft(1,16,8,0,6.2832,0,Math.PI/2),s=o=>{const c=new at;c.position.z=-1.5;const l=new at;l.position.z=1.5,l.scale.y=o,c.add(l);const h=new Ne(n,e);h.scale.set(1.15,.6,1.7),l.add(h);for(let u=0;u<9;u++){const p=(u/8-.5)*2.6,d=new Ne(new nt(.09,.42,5),t);d.position.set(Math.sin(p)*1.08,-.2,Math.cos(p)*1.6),d.rotation.x=Math.PI,l.add(d)}return i.add(c),c},a=s(1),r=s(-1);return i.userData.open=o=>{a.rotation.x=-o*.85,r.rotation.x=o*.85},i.userData.fade=o=>{e.opacity=.32*o,t.opacity=.85*o},i.userData.open(1),i}function wh(){const i=new at,e=[];for(let t=0;t<3;t++){const n=new Ne(new pn(.3,.025,6,28),$t(14221232,.7));i.add(n),e.push(n)}return i.userData.set=(t,n=1)=>e.forEach((s,a)=>{const r=(t*1.8+a/3)%1;s.scale.setScalar(.25+r*2.4),s.material.opacity=.7*(1-r)*n}),i}function Lv(i=6){const e=new at,t=[],n=new Bt(.11,14),s=new Bt(.035,8),a=$t(10215520,0);for(let r=0;r<i;r++){const o=new at,c=r%2?1:-1;o.position.set(c*.17+Math.sin(r*.9)*.25*(r/i),.03,.5+r*.52),o.rotation.y=c*.12;const l=new Ne(n,a);l.rotation.x=-Math.PI/2,l.scale.set(.75,1.45,1),o.add(l);for(let h=0;h<4;h++){const u=new Ne(s,a);u.rotation.x=-Math.PI/2,u.position.set((h-1.5)*.055,0,-.21-Math.abs(h-1.5)*.015),o.add(u)}o.visible=!1,e.add(o),t.push(o)}return e.userData.set=(r,o=1)=>{t.forEach((c,l)=>{c.visible=r*i>l}),a.opacity=.85*o},e}function $u(){const i=new at,e=[];for(let n=0;n<3;n++){const s=new Ne(new pn(.55,.045,6,28),$t(n===1?14220287:6281448,.7));s.position.z=-n*.3,i.add(s),e.push(s)}const t=new Ne(new Ft(.16,10,8),$t(15269887,.8));return i.add(t),i.userData.set=n=>e.forEach((s,a)=>{const r=(n*2.2+a/3)%1;s.scale.setScalar(.6+r*.9),s.material.opacity=.75*(1-r*.7)}),i}function Vc(){const i=new at,e=[];for(let n=0;n<3;n++){const s=new Ne(new pn(.95-n*.2,.1+n*.03,6,22,Math.PI),$t(n===1?12580095:3121096,.7));s.rotation.x=-Math.PI/2+.5,s.position.z=-n*.25,i.add(s),e.push(s)}const t=new Ne(new Bt(1,20),$t(7327976,.3));return t.rotation.x=-Math.PI/2,t.position.y=-.12,t.scale.set(1,.6,1),i.add(t),i.userData.set=n=>e.forEach((s,a)=>{s.position.y=Math.sin(n*14+a)*.06,s.scale.y=1+Math.sin(n*10+a*2)*.15}),i}function Ju(){const i=new at,e=$t(871002,0),t=new kt({color:201756,transparent:!0,opacity:0,side:an,depthWrite:!1,fog:!1}),n=new Ne(new Ft(5.5,24,12,0,6.2832,0,Math.PI/2),t);i.add(n);const s=new Ne(new Bt(5.5,32),e);s.rotation.x=-Math.PI/2,s.position.y=.04,i.add(s);const a=new kt({color:2058810,transparent:!0,opacity:0,side:pt,depthWrite:!1,fog:!1}),r=[];for(let c=0;c<22;c++){const l=c/22*6.2832+Math.random()*.2,h=3.2+Math.random()*1.8,u=.8+Math.random()*1.8,p=new at;p.position.set(Math.sin(l)*h,0,Math.cos(l)*h);const d=new Ne(new nt(.12,u,4),a);d.position.y=u/2,d.scale.z=.3,p.add(d),p.userData.ph=Math.random()*6,i.add(p),r.push(p)}const o=$t(8382719,0);for(let c=0;c<5;c++){const l=new Ne(new nt(.6,6,8,1,!0),o);l.position.set((c-2)*1.6,3,Math.sin(c*2)*1.5),l.rotation.z=.2-c*.08,i.add(l)}return i.userData.set=(c,l)=>{t.opacity=.82*c,e.opacity=.5*c,a.opacity=.9*c,o.opacity=.1*c*(1+Math.sin(l*3)*.3);for(const h of r)h.rotation.z=Math.sin(l*1.6+h.userData.ph)*.25;i.visible=c>.01},i.userData.set(0,0),i}function ju(){const i=new at,e=[];for(let t=0;t<6;t++){const n=new Ne(new Xn(.9,1.05,40),$t(8380671,0));n.rotation.x=-Math.PI/2,n.position.set(Math.sin(t*2.4)*3,.03,Math.cos(t*1.7)*3),i.add(n),e.push(n)}return i.userData.set=(t,n)=>e.forEach((s,a)=>{const r=(n*.7+a/6)%1;s.scale.setScalar(.3+r*2.2),s.material.opacity=t*.4*(1-r)}),i}function Zu(){const i=new at,e=[];for(let r=0;r<=60;r++){const o=r/60,c=o*6.2832*2.6;e.push(new I(Math.sin(c)*(.95-o*.25),.1+o*2.1,Math.cos(c)*(.95-o*.25)))}const t=new Fu(e),n=new Ne(new Oc(t,90,.13,7),new wn({color:1014357,emissive:735834,emissiveIntensity:.6,roughness:.3,metalness:.35,transparent:!0,opacity:1}));i.add(n);const s=n.geometry.index.count,a=[];for(let r=0;r<4;r++){const o=new Ne(new pn(1.1-r*.12,.05,5,30),$t(9431295,0));o.rotation.x=-Math.PI/2+.25,o.position.y=.4+r*.5,i.add(o),a.push(o)}return i.userData.set=(r,o,c)=>{n.visible=r>.01,n.geometry.setDrawRange(0,Math.floor(s*Math.min(1,r)/3)*3),n.material.opacity=o,n.rotation.y=c*.8,a.forEach((l,h)=>{l.rotation.z=c*(6+h),l.material.opacity=o*.55,l.scale.setScalar(1+Math.sin(c*5+h)*.08)})},i.userData.set(0,0,0),i}function Qu(){const i=new at,e=[16762970,16743066,9429247,16773280],t=[],n=new wn({color:3810840,roughness:1,transparent:!0,opacity:0});for(let a=0;a<8;a++){const r=a/8*6.2832,o=Math.sin(r)*4.6,c=Math.cos(r)*4.6,l=new Ne(new ln(.05,.06,3,6),n);l.position.set(o,1.5,c),i.add(l);for(let h=1;h<5;h++){const u=r+h/5*6.2832/8,p=Math.sin(h/5*Math.PI)*.5,d=$t(e[(a+h)%4],0);t.push(d);const g=new Ne(new Ft(.12,8,6),d);g.position.set(Math.sin(u)*4.6,2.9-p,Math.cos(u)*4.6),i.add(g)}}const s=new Ne(new Bt(4.4,32),$t(16751210,0));return s.rotation.x=-Math.PI/2,s.position.y=.03,i.add(s),t.push(s.material),i.userData.set=(a,r)=>{n.opacity=a,t.forEach((o,c)=>{o.opacity=a*(o===s.material?.12:.75+Math.sin(r*4+c)*.2)}),i.visible=a>.01},i.userData.set(0,0),i}function Cv(){const i=document.createElement("canvas");i.width=i.height=1024;const e=i.getContext("2d");e.fillStyle="#3a241b",e.fillRect(0,0,1024,1024);for(let n=0;n<90;n++){const s=Math.random()*1024,a=Math.random()*1024,r=70+Math.random()*150,o=50+Math.random()*110,c=30+Math.random()*30;e.fillStyle=`rgb(${c+28},${c+4},${c-8})`,e.globalAlpha=.55,e.beginPath(),e.moveTo(s,a),e.lineTo(s+r,a+Math.random()*20),e.lineTo(s+r-Math.random()*25,a+o),e.lineTo(s+Math.random()*20,a+o-Math.random()*20),e.closePath(),e.fill(),e.globalAlpha=.8,e.strokeStyle="#120a07",e.lineWidth=2+Math.random()*3,e.stroke()}e.globalAlpha=1;for(let n=0;n<9e3;n++){const s=Math.random()*60;e.fillStyle=`rgba(${s+20},${s},${s*.7},.25)`,e.fillRect(Math.random()*1024,Math.random()*1024,2,2)}for(let n=0;n<40;n++){const s=Math.random()*1024,a=Math.random()*1024,r=20+Math.random()*60,o=e.createRadialGradient(s,a,0,s,a,r);o.addColorStop(0,n%3?"rgba(20,12,8,.6)":"rgba(40,50,18,.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.fillRect(s-r,a-r,r*2,r*2)}const t=new tv(i);return t.colorSpace=dn,t.anisotropy=8,t}function Pv(i,e,t){i.background=new it(1378823),i.fog=new Pc(2363658,.02);const n=new vv().load("./assets/arena.webp");n.colorSpace=dn,n.wrapS=lr,n.repeat.x=4;const s=new Ne(new ln(70,70,62,64,1,!0),new kt({map:n,side:an,fog:!1,color:13619151}));s.position.y=5.5,i.add(s);const a=new Ne(new Bt(t+2.5,72),new wn({map:Cv(),roughness:.48,metalness:.12}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a);const r=new Ne(new Bt(75,48),new wn({color:1707786,roughness:.3,metalness:.3}));r.rotation.x=-Math.PI/2,r.position.y=-.04,i.add(r);const o=new wn({color:2759959,roughness:.9}),c=new wn({color:2824720,roughness:.95}),l=new wn({color:1848084,roughness:.8,side:pt});for(let g=0;g<26;g++){const v=Math.random()*6.283,m=t+2.2+Math.random()*2.5,f=.25+Math.random()*.6,y=new Ne(new Nc(f,0),o);y.position.set(Math.cos(v)*m,f*.3,Math.sin(v)*m),y.rotation.set(Math.random()*3,Math.random()*3,0),y.castShadow=!0,i.add(y)}for(let g=0;g<16;g++){const v=g/16*6.283+Math.random()*.2,m=t+2.6+Math.random()*1.5,f=new Ne(new pn(.9+Math.random()*.8,.09+Math.random()*.08,6,14,Math.PI),c);f.position.set(Math.cos(v)*m,-.1,Math.sin(v)*m),f.rotation.y=Math.random()*6,f.castShadow=!0,i.add(f);for(let y=0;y<5;y++){const S=new Ne(new nt(.16,1+Math.random()*.7,4),l);S.position.set(Math.cos(v+.25)*(m+.6),.4,Math.sin(v+.25)*(m+.6)),S.rotation.set(ia()*.9,Math.random()*6,ia()*.9),S.scale.z=.25,i.add(S)}}for(let g=0;g<7;g++){const v=g/7*6.283+.4,m=19+Math.random()*9,f=new Ne(new ln(.9+Math.random()*.6,1.6+Math.random()*.8,26,9),c);f.position.set(Math.cos(v)*m,12.5,Math.sin(v)*m),f.rotation.z=ia()*.08,i.add(f);for(let y=0;y<5;y++){const S=new Ne(new ln(.03,.03,5+Math.random()*8,4),l);S.position.set(Math.cos(v)*m+ia()*4,14-Math.random()*3,Math.sin(v)*m+ia()*4),i.add(S)}}i.add(new xv(12166550,1840402,1.7));const h=new Sh(16754026,2.3);h.position.set(-12,13,-9),h.castShadow=!0,h.shadow.mapSize.set(2048,2048);const u=h.shadow.camera;u.left=u.bottom=-15,u.right=u.top=15,u.far=50,h.shadow.bias=-5e-4,i.add(h);const p=new Sh(8365272,1.7);p.position.set(10,6,12),i.add(p);const d=[];for(let g=0;g<5;g++){const v=g/5*6.283+.6,m=Math.cos(v)*(t+1.7),f=Math.sin(v)*(t+1.7),y=new Ne(new ln(.07,.1,1.7,7),c);y.position.set(m,.85,f),y.castShadow=!0,i.add(y);const S=new Ne(new ln(.24,.1,.22,9),o);S.position.set(m,1.78,f),i.add(S);const _={p:new I(m,1.95,f),light:null};g%2===0&&(_.light=new Xu(16742954,30,16,2),_.light.position.copy(_.p).setY(2.3),i.add(_.light)),d.push(_)}return{sun:h,torchLights:d.filter(g=>g.light).map(g=>g.light),update(g,v){for(const m of d)e.fire(m.p,60*g,.09,1.6,.5),m.light&&(m.light.intensity=16+Math.sin(v*17+m.p.x)*5+Math.random()*4);if(Math.random()<g*6){const m=Math.random()*6.283,f=Math.random()*14;e.embers({x:Math.cos(m)*f,y:.2,z:Math.sin(m)*f},1,.2,.5)}}}}const ia=()=>Math.random()*2-1,Ee=(i,e={})=>new wn({color:i,roughness:.75,...e}),P=(i,e,t,n=0,s=0,a=0)=>{const r=new Ne(e,t);return r.position.set(n,s,a),r.castShadow=!0,i.add(r),r},Te=(i,e=0,t=0,n=0)=>{const s=new at;return s.position.set(e,t,n),i.add(s),s},Lt=(i,e)=>new zc(i,e,4,10),We=(i,e,t,n=10,s=!1)=>new ln(i,e,t,n,1,s),me=i=>new Ft(i,14,10),tt=(i,e,t=6.2832)=>new pn(i,e,6,18,t),st=(i,e,t)=>new I(i,e,t),ze=Math.PI/2,Dt=Math.PI*2,cn=(i,e,t)=>i+(e-i)*t,Nt=i=>i*i*(3-2*i),pi=i=>i<0?0:i>1?1:i,Dv=(i,e,t)=>pi((i-e)/(t-e)),As=i=>i-Dt*Math.round(i/Dt),hi=i=>i-Math.floor(i),ed=(i,e,t)=>{const n=As((i-e)*Dt)/Dt;return Math.exp(-(n*n)/(t*t))},xo={spin:1,roll:1,lean:1,yaw:1},_o=new I;function yr(i){const e=Object.keys(i).filter(s=>s!=="rate"),t={},n={};for(const s of e)t[s]=i[s],n[s]=0;return{cur:t,snap(s){for(const a of e)t[a]=xo[a]?As(s[a]):s[a],n[a]=0},step(s,a,r){const o=Math.min(Math.max(a,0),.05);if(!(o>0))return;const c=s.rate*1.4,l=Math.min(10,Math.max(1,Math.ceil(o*c/.3))),h=o/l,u=c*c,p=2*r*c;for(const d of e){const g=s[d];if(g===void 0)continue;if(d==="spin"&&s.spinHard){const f=As(g);n.spin=As(f-t.spin)/o,t.spin=f;continue}let v=t[d],m=n[d];for(let f=0;f<l;f++){const y=xo[d]?As(g-v):g-v;m+=(y*u-p*m)*h,v+=m*h}t[d]=xo[d]?As(v):v,n[d]=m}}}}const Hc=(i,e)=>i.damp??(e.phase===1&&i.rate>=30?.62:.8);function Sr(i,e,t){const n=i.mover,s=pi(e.gnd);if(n.position.y=0,s<.001){n.position.y=e.y;return}i.root.updateMatrixWorld(!0);let a=1/0;for(const[r,o]of i.feet){const c=_o.copy(o).applyMatrix4(r.matrixWorld).y;c<a&&(a=c)}{const r=(1-pi(e.hnd))*.3;for(const[o,c]of i.hands){const l=_o.copy(c).applyMatrix4(o.matrixWorld).y+r;l<a&&(a=l)}}if(i.body)for(const[r,o]of i.body){const c=_o.copy(o).applyMatrix4(r.matrixWorld).y;c<a&&(a=c)}a-=i.root.matrixWorld.elements[13],n.position.y=cn(e.y,Math.max(t,e.y)-a,s)}const td={y:0,lean:.14,twist:.45,roll:0,spine:.12,head:-.05,aLx:-1,aLz:.2,eL:-1.6,aRx:-.55,aRz:-.25,eR:-1.8,legX:-.12,legZ:0,knee:.35,sc:1,spin:0,gnd:1,hnd:0,rate:16};function Rh(i,e){const t={...td},n=i.pk,s=i.phase;let a=0;const r=c=>Object.assign(t,c),o=(c,l)=>s===0?-c*l*Nt(n):s===1?c*cn(-l,Dt,Nt(n)):c*Dt;switch(i.anim){case"idle":{const c=Math.sin(e*4.4),l=c*c,h=(1+c)/2,u=1-h;r({y:.02*(1-l),knee:.5+l*.45,legX:-.1-l*.08,legZ:c*.06,lean:.16+l*.1,roll:-c*.1,twist:.35+c*.5,spine:.1+l*.08,head:-.06-l*.06,aLx:cn(.35,-1.85,h),eL:cn(-.5,-2.2,h),aLz:cn(.35,.05,h),aRx:cn(.35,-1.85,u),eR:cn(-.5,-2.2,u),aRz:cn(-.35,-.05,u),rate:14,damp:.9});break}case"walk":{const c=i.mvF>.3?1:i.mvF<-.3?-1:0,l=hi(e*1.75),h=Dv(l,.26,.86),u=Math.sin(h*Math.PI),p=ed(l,.03,.13),d=Math.sin(l*Dt);r({y:u*.24,knee:.3+p*1+u*.25,legX:-.12-c*.3*(u-.5*p),legZ:c?0:d*.14,lean:.14+c*.13+p*.22,roll:d*(c?.09:.17),twist:.4+d*.35,spine:.12-d*.06,aLx:-1+d*.6-u*.35,aRx:-1-d*.6-u*.35,aLz:.3+u*.35,aRz:-.3-u*.35,eL:-1.5-p*.4,eR:-1.5-p*.4,head:-.05-p*.1,rate:22,damp:.8});break}case"block":r({aLx:-1.75,eL:-2.2,aRx:-1.75,eR:-2.2,aLz:-.2,aRz:.2,lean:-.05,spine:.32,knee:.8,head:.25,twist:.35});break;case"punchL":r(s===0?{aLx:-.3,eL:-2.3,twist:.85,knee:.6,lean:.05}:s===1?{aLx:-1.55,eL:-.05,aLz:-.1,twist:-.25,lean:.32,knee:.45,rate:40}:{aLx:-1.3,eL:-.9,twist:.1,lean:.2,rate:14});break;case"punchR":r(s===0?{aRx:-.3,eR:-2.3,twist:-.05,knee:.6,lean:.05}:s===1?{aRx:-1.55,eR:-.05,aRz:.1,twist:1.1,lean:.34,knee:.45,rate:40}:{aRx:-1.3,eR:-.9,twist:.8,lean:.2,rate:14});break;case"elbow":s===0?r({aLx:.5,eL:-1.2,twist:1.05,y:.08,knee:.9}):s===1&&r({aLx:-1.9,eL:-1.9,aLz:-.5,twist:-.55,lean:.45,y:.12,knee:.3,rate:40});break;case"spinkick":a=o(1,.55),r(s===0?{knee:1.25,lean:.25,twist:-.4,spine:.25,aLx:-1.3,aRx:-1.3,aLz:-.25,aRz:.25,eL:-2,eR:-2,legX:-.2}:s===1?{y:.48,gnd:0,lean:-1.1,knee:.05,legX:-.1,twist:0,aLz:1.25,aRz:-1.25,aLx:-.2,aRx:-.2,eL:-.3,eR:-.3,rate:40}:{knee:1-n*.5,lean:.3-n*.12,aLz:.95-n*.5,aRz:-.95+n*.5,aLx:-.6,aRx:-.6,eL:-.6,eR:-.6,twist:.2,rate:12});break;case"blocklow":r({aLx:-1.5,eL:-2.1,aRx:-1.5,eR:-2.1,aLz:-.2,aRz:.2,lean:.25,spine:.5,knee:1.55,head:.3});break;case"hopPunch":r(s===0?{y:.1+n*.25,knee:1.2-n*.4,aRx:-.3,eR:-2.3,twist:0,lean:.3}:s===1?{y:.12,aRx:-1.6,eR:-.05,aRz:.1,twist:1.1,lean:.5,knee:.4,rate:40}:{knee:.9-n*.4,lean:.3,rate:14});break;case"axe":r(s===0?{y:.15+n*.45,gnd:0,lean:-.55,legX:-1.7,knee:0,aLz:.8,aRz:-.8,rate:26}:s===1?{y:.05,gnd:0,lean:.15,legX:-.5,knee:0,aLx:.4,aRx:.4,rate:44}:{knee:1-n*.5,lean:.3});break;case"slap":s===0?r({aLx:-1.3,aLz:1.3,eL:-.4,twist:.95,lean:-.2,knee:.7}):s===1&&r({aLx:-1.5,aLz:-.7,eL:-.05,twist:-.7,lean:-.15,rate:40});break;case"meialua":a=o(-1,.5),r(s===0?{knee:1.3,lean:.55,spine:.35,twist:.5,aLx:-.9,aRx:-.9,eL:-.4,eR:-.4,hnd:.6}:s===1?{lean:1.25,spine:.3,head:-.6,twist:0,roll:.25,aLx:-1.25,aRx:-1.25,aLz:.35,aRz:-.35,eL:-.1,eR:-.1,legX:2.1,legZ:.3,knee:.05,hnd:1,rate:40}:{knee:1-n*.5,lean:.35,aLz:.8,aRz:-.8,aLx:-.7,aRx:-.7,hnd:.3*(1-n),rate:12});break;case"lowJab":r(s===0?{knee:1.5,lean:.35,aRx:-.2,eR:-2.2,twist:0}:s===1?{knee:1.6,lean:.7,spine:.35,aRx:-.9,eR:-.05,twist:1,rate:40}:{knee:1.1,lean:.4});break;case"sweep":a=o(1,.45),r(s===0?{knee:1.6,lean:.5,spine:.3,twist:-.4,aLx:-.8,aRx:-.8,eL:-.3,eR:-.3,hnd:.7}:s===1?{knee:.05,lean:1.2,spine:.2,head:-.6,twist:0,legX:-.2,legZ:1.7,aLx:-1.2,aRx:-1.2,eL:-.5,eR:-.5,hnd:1,rate:40}:{knee:1.2-n*.6,lean:.45,aLz:.7,aRz:-.7,hnd:.4*(1-n),rate:12});break;case"dodge":{const c=i.dodgeSide,l=pi(n*1.12),h=Nt(l),u=Math.sin(l*Math.PI);r(c?{roll:c*Dt*h,twist:0,lean:.08,spine:.05,head:.15,aLx:-.15,aRx:-.15,aLz:2.35,aRz:-2.35,eL:-.25,eR:-.25,legX:0,legZ:c*.45*u,knee:.25,y:.08*u,hnd:1,rate:34,damp:.78}:{lean:-Dt*h,twist:0,roll:0,spine:-.15,head:-.35,aLx:-2.85,aRx:-2.85,aLz:.25,aRz:-.25,eL:-.15,eR:-.15,legX:.15,knee:.4+.5*u,y:.18*u,hnd:1,rate:34,damp:.78});break}case"grab":s===0?r({aLx:-1.4,aRx:-1.4,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,lean:.2,twist:0,knee:.8}):s===1&&r({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.7,eR:-.7,lean:.5,twist:0,rate:40});break;case"grabHold":r({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.9,eR:-.9,lean:.45,twist:0,y:Math.abs(Math.sin(e*40))*.015,rate:30});break;case"grabThrow":a=-Nt(n)*Math.PI,r({aLx:-2.3,aRx:-2.3,eL:-.2,eR:-.2,lean:-.25,twist:0,y:.15,rate:34});break;case"whirl":a=i.st*26,t.spinHard=1,r({aLx:0,aRx:0,aLz:1.45,aRz:-1.45,eL:-.2,eR:-.2,y:.12,lean:0,twist:0,knee:.5}),s===2&&(a=i.st*26*(1-n*.5));break;case"voadora":s===0?r({knee:1.6,lean:.55,aLx:.9,aRx:.9,eL:-.4,eR:-.4,legX:-.9}):s===1?(t.gnd=0,n<.4?(a=n/.4*Dt,r({knee:1.9,legX:-1.2,lean:.2,aLz:.8,aRz:-.8,rate:30})):(a=Dt,r({lean:-1.2,knee:0,legX:0,aLx:.3,aRx:.3,aLz:1.1,aRz:-1.1,eL:-.2,eR:-.2,twist:0,rate:30}))):r({knee:1.3*(1-n)+.3,lean:.5*(1-n)});break;case"dive":r({gnd:0,lean:-.75,knee:0,legX:0,aLx:.6,aRx:.6,aLz:1.2,aRz:-1.2,eL:-.2,eR:-.2,twist:0,rate:40});break;case"vanish":a=i.st*30,t.spinHard=1,r({sc:0,rate:22,aLz:1,aRz:-1});break;case"gone":r({sc:0,rate:60});break;case"appear":a=(1-n)*8,t.spinHard=1,r({sc:1,rate:22});break;case"superstart":a=i.st*14,t.spinHard=1,r({y:.35,gnd:0,aLx:0,aRx:0,aLz:1.5,aRz:-1.5,eL:0,eR:0,knee:.9});break;case"hit":r({lean:-.4,head:-.5,spine:-.25,aLx:-.3,aRx:-.2,eL:-.8,eR:-.8,knee:.6,rate:35});break;case"air":r({gnd:0,lean:-1.05,head:-.3,knee:.7,legX:-.5,aLx:-2.2,aRx:-2.4,eL:-.3,eR:-.3,aLz:.5,aRz:-.5,y:.2});break;case"down":case"ko":r({gnd:0,y:-.84,lean:-1.52,knee:.25,legX:0,aLx:-.2,aRx:-.2,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,head:-.1,twist:0,spine:0,rate:22});break;case"getup":{const c=Nt(n);r({gnd:c,y:-.84*(1-c),lean:cn(-1.4,.4,c),knee:1.3*(1-n)+.3});break}case"win":{const c=Math.abs(Math.sin(e*6));r({y:c*.35,knee:.9-c*.8,aLx:-2.9,aRx:-2.9,aLz:.35,aRz:-.35,eL:-.2,eR:-.2,twist:0,lean:0,head:-.25});break}}return t.spin=a,t}function kv(){const i=Ee(6042659,{roughness:.5}),e=Ee(4663323,{roughness:.55}),t=Ee(8197394,{roughness:.95,side:pt}),n=Ee(4853005,{roughness:1,side:pt}),s=Ee(1643027,{roughness:1,side:pt}),a=Ee(10256985,{roughness:1}),r=Ee(11897914,{metalness:.8,roughness:.35}),o=Ee(14537398,{roughness:.6}),c=Ee(8145442,{roughness:.45}),l=new kt({color:16756800}),h=Ee(13483936,{roughness:1}),u=new at,p=Te(u),d=Te(p,0,1,0);P(d,me(.17),i,0,.02,0).scale.set(1.15,.85,.9),P(d,We(.19,.35,.44,14,!0),t,0,-.17,0);for(let k=0;k<18;k++){const J=k/18*6.2832,Q=.18+Math.random()*.36,Z=.33;P(d,new ft(.1,Q,.012),[t,n,s][k%3],Math.sin(J)*Z,-.36-Q/2,Math.cos(J)*Z).rotation.set(-.15,J,0,"YXZ")}P(d,new ft(.3,.5,.012),s,-.24,-.3,.16).rotation.set(.1,-.9,.15),P(d,tt(.2,.035),a,0,.05,0).rotation.x=ze,P(d,tt(.21,.025),n,0,0,0).rotation.x=ze+.12;for(let k=0;k<6;k++)P(d,me(.022),o,Math.sin(k*.35-.9)*.23,.02-k%2*.05,Math.cos(k*.35-.9)*.23);P(d,me(.11),c,-.29,-.1,.04),P(d,me(.055),c,-.29,.03,.04),P(d,We(.02,.025,.05),s,-.29,.09,.04),P(d,We(.06,.06,.014,12),r,.09,-.14,.3).rotation.x=ze,P(d,We(.02,.04,.07,8),r,.17,-.2,.27);const v=Te(d,0,-.05,0);P(v,Lt(.108,.3),i,0,-.23,0);const m=Te(v,0,-.46,0);P(m,me(.095),e),P(m,Lt(.085,.28),i,0,-.2,0),P(m,We(.097,.085,.24,10),a,0,-.27,0),P(m,tt(.088,.016),t,0,-.4,0).rotation.x=ze,P(m,tt(.086,.012),r,0,-.43,0).rotation.x=ze,P(m,new ft(.13,.07,.27),e,0,-.455,.06);const f=Te(d,0,.08,0);P(f,We(.175,.16,.26,12),i,0,.12,0).scale.z=.8,P(f,me(.2),i,0,.37,0).scale.set(1.35,1,.82);for(const k of[1,-1])P(f,me(.085),i,k*.1,.4,.11).scale.set(1.1,.8,.6),P(f,me(.09),i,k*.28,.48,0);for(let k=0;k<3;k++)for(const J of[1,-1])P(f,me(.04),e,J*.055,.2-k*.07,.12).scale.z=.5;const y=P(f,tt(.15,.014),t,0,.5,.02);y.rotation.x=ze+.35;const S=P(f,tt(.19,.012),o,0,.44,.05);S.rotation.x=ze+.55;const _=P(f,tt(.12,.012),r,0,.54,.01);_.rotation.x=ze+.2,P(f,me(.03),o,0,.31,.19),P(f,tt(.09,.012,2.6),h,.2,.42,.1).rotation.set(.3,.5,.2),P(f,We(.058,.065,.1),i,0,.6,0);const w=Te(f,0,.71,0);P(w,me(.115),i).scale.set(.9,1.08,.97),P(w,me(.06),i,0,-.07,.05).scale.set(1.1,.8,1);for(const k of[1,-1])P(w,me(.014),l,k*.042,.015,.1),P(w,tt(.026,.006),r,k*.108,-.06,0),P(w,new ft(.05,.012,.02),s,k*.042,.04,.102).rotation.z=-k*.35;P(w,new nt(.02,.06,5),s,0,-.13,.08).rotation.x=Math.PI;for(let k=0;k<10;k++){const J=k/10*6.28;Math.cos(J)>.5||P(w,Lt(.016,.05),s,Math.sin(J)*.1,-.01,Math.cos(J)*.1)}P(w,We(.008,.008,.1,6),s,.035,-.065,.15).rotation.x=ze,P(w,We(.02,.014,.035,8),c,.035,-.05,.2),P(w,We(.118,.125,.1,12),t,0,.075,0);const A=Te(w,0,.11,0);A.rotation.set(-.35,0,-.45),P(A,We(.07,.118,.17,10),t,0,.07,0);const R=Te(A,0,.15,0);R.rotation.z=-.8,P(R,We(.035,.07,.19,8),n,0,.08,0);const x=Te(R,0,.17,0);x.rotation.z=-.9,P(x,We(.012,.035,.2,6),t,0,.09,0),P(x,tt(.022,.006),r,0,.21,0);const M=k=>{const J=Te(f,k*.31,.49,0);P(J,Lt(.072,.19),i,0,-.14,0),P(J,tt(.078,.013),t,0,-.12,0).rotation.x=ze,P(J,tt(.076,.008),h,0,-.2,0).rotation.x=ze;const Q=Te(J,0,-.3,0);return P(Q,Lt(.058,.19),i,0,-.13,0),P(Q,We(.068,.06,.12),a,0,-.2,0),P(Q,tt(.064,.012),t,0,-.13,0).rotation.x=ze,P(Q,me(.06),e,0,-.31,0),[J,Q]},[D,H]=M(1),[F,G]=M(-1),O=yr(td),z=O.cur,K={root:u,mover:p,feet:[[m,st(0,-.49,-.07)],[m,st(0,-.49,.19)]],hands:[[H,st(0,-.37,0)],[G,st(0,-.37,0)]],body:[[w,st(0,.24,0)],[x,st(0,.22,0)],[R,st(0,.2,0)],...[0,1,2,3,4,5].map(k=>[d,st(Math.sin(k*1.047)*.3,-.78,Math.cos(k*1.047)*.3)])]};return{root:u,cur:z,flameK:0,snap(k,J){O.snap(Rh(k,J))},update(k,J,Q){const Z=Rh(k,Q);O.step(Z,J,Hc(Z,k)),p.rotation.y=z.spin+(k.spinExtra||0),p.scale.setScalar(Math.max(.001,z.sc)),u.visible=z.sc>.03,d.rotation.set(z.lean,z.twist,z.roll),f.rotation.set(z.spine,-z.twist*.6,0),w.rotation.set(z.head,-z.twist*.4,0),D.rotation.set(z.aLx,0,z.aLz),H.rotation.x=z.eL,F.rotation.set(z.aRx,0,z.aRz),G.rotation.x=z.eR,v.rotation.set(z.legX,0,z.legZ),m.rotation.x=z.knee,Sr(K,z,0);const de=Math.sin(Q*4)*.15;R.rotation.z=-.8+de,x.rotation.z=-.9+de*1.5,R.rotation.x=Math.cos(Q*3)*.2}}}const nd={y:0,pitch:0,roll:0,yaw:0,fl:0,fr:0,hl:0,hr:0,kfl:0,kfr:0,khl:0,khr:0,tail:.3,nk:0,flame:1,gnd:1,rate:12};function Ah(i,e){const t={...nd},n=i.pk,s=i.phase,a=h=>Object.assign(t,h),r=(h,u,p)=>{if(h<u){const d=h/u;return[cn(.35,-.4,Nt(d)),Math.sin(Math.PI*d)*p]}return[cn(-.4,.35,(h-u)/(1-u)),.05]},o=(h,u,p,d,g,v)=>{const m=hi(e*h*(i.mvF<-.3?-1:1)),f=M=>r(hi(m+M),p,d),[y,S]=f(u[0]),[_,T]=f(u[1]),[w,A]=f(u[2]),[R,x]=f(u[3]);a({hl:y*g,khl:S,fl:_*g,kfl:T,hr:w*g,khr:A,fr:R*g,kfr:x,pitch:Math.sin(m*Dt*2)*.035*v,roll:Math.sin(m*Dt)*.05*v,nk:Math.sin(m*Dt*2+1)*.1*v,tail:.35+Math.sin(m*Dt)*.25})},c=[0,.25,.5,.75],l=[0,.5,.1,.6];switch(i.anim){case"idle":{const h=ed(hi(e*.3),.5,.12);a({pitch:Math.sin(e*1.6)*.02,roll:Math.sin(e*.9)*.03,nk:Math.sin(e*1.1)*.12,tail:.3+Math.sin(e*1.7)*.25,fl:-.5*h+.25*h*Math.sin(e*9),kfl:1.1*h,khl:.08+Math.max(0,Math.sin(e*.9))*.12,rate:8,damp:.9});break}case"walk":o(1.4,c,.3,1,1,1),t.rate=18,t.damp=.85;break;case"block":a({pitch:.1,fl:-.35,fr:-.35,kfl:.3,kfr:.3,hl:.2,hr:.2,khl:.3,khr:.3,nk:.2,flame:.7});break;case"hoofL":a(s===0?{pitch:-.28,fl:-.9,kfl:1.6,nk:-.15}:s===1?{pitch:-.2,fl:-1.45,kfl:.05,nk:.15,rate:38}:{pitch:-.05,fl:-.3,kfl:.4,rate:9});break;case"hoofR":a(s===0?{pitch:-.28,fr:-.9,kfr:1.6,nk:-.15}:s===1?{pitch:-.2,fr:-1.45,kfr:.05,nk:.15,rate:38}:{pitch:-.05,fr:-.3,kfr:.4,rate:9});break;case"stomp":a(s===0?{pitch:-.85,fl:-.5,fr:-.8,kfl:1.5,kfr:1.3,hl:-.3,hr:-.3,khl:.7,khr:.7,nk:-.3,flame:1.6}:s===1?{pitch:.12,fl:-.45,fr:-.45,kfl:.2,kfr:.2,nk:.3,rate:40}:{pitch:.1,kfl:.45,kfr:.45,nk:.2,rate:8});break;case"blocklow":a({pitch:.22,fl:-.6,fr:-.6,kfl:1,kfr:1,hl:.3,hr:.3,khl:.7,khr:.7,nk:.3,flame:.6});break;case"check":a(s===0?{pitch:.12,hl:.25,hr:.25,khl:.4,khr:.4,nk:.25}:s===1?{pitch:-.16,fl:-.5,fr:-.5,kfl:1.3,kfr:1.3,nk:-.2,rate:40}:{rate:10});break;case"chargeAtk":s===0?a({pitch:-.2,hl:-.25,hr:-.25,khl:.6,khr:.6,nk:.3,fl:-.6+Math.sin(e*30)*.5,kfl:1+Math.cos(e*30)*.4,flame:1.2+n*1.4,rate:26}):s===1?(o(3,l,.45,1.2,1.25,2),t.pitch-=.06,t.nk+=.25,t.flame=2.8,t.rate=30):a({pitch:-.15,fl:-.6,fr:-.6,kfl:.1,kfr:.1,hl:.3,hr:.3,khl:.5,khr:.5,nk:-.2,flame:1.2,rate:10});break;case"rear":if(s===0){const h=Math.sin(e*14);a({pitch:-1*Nt(Math.min(1,n*1.4)),hl:-.35,hr:-.35,khl:.8,khr:.8,fl:-.6+h*.4,fr:-.9-h*.4,kfl:1.5,kfr:1.3,nk:-.3,tail:.9,flame:1.8})}else a(s===1?{pitch:.2,fl:-.5,fr:-.5,kfl:.4,kfr:.4,khl:.3,khr:.3,nk:.35,rate:42}:{pitch:.1*(1-n),kfl:.3*(1-n),kfr:.3*(1-n),nk:.2*(1-n),rate:8});break;case"scrape":a(s===0?{pitch:.14,fr:.2,kfr:1.3,nk:.2}:s===1?{pitch:.24,fr:-1.05,kfr:.1,nk:.3,rate:38}:{rate:10});break;case"lowsweep":a(s===0?{pitch:.2,yaw:.55*n,fl:-.4,fr:-.4,kfl:.8,kfr:.8}:s===1?{pitch:.3,yaw:-.6,fl:-1.15,fr:-1.15,kfl:.05,kfr:.05,rate:34}:{pitch:.12,rate:10});break;case"dodge":{const h=Math.sin(n*Math.PI);o(2.6,c,.35,1,1.1,1.5),t.roll=-i.dodgeSide*.28*h,t.pitch=i.dodgeSide?-.05:-.25*h,t.rate=28;break}case"grab":s===0?a({pitch:-.5,fl:-.9,fr:-.9,kfl:1.3,kfr:1.3,khl:.4,khr:.4}):s===1&&a({pitch:-.32,fl:-1.3,fr:-1.3,kfl:.3,kfr:.3,rate:40});break;case"grabHold":a({pitch:-.4,fl:-1.2,fr:-1.2,kfl:.6,kfr:.6,khl:.4,khr:.4,flame:1.6,rate:30});break;case"grabThrow":a({pitch:.22,fl:-.4,fr:-.4,nk:.3,flame:1.4,rate:40});break;case"coice":{t.yaw=i.kickTurn?Math.PI:0,s===0?a({pitch:-.12,fl:-.25,fr:-.25,hl:-.5,hr:-.5,khl:1.3,khr:1.3,nk:.25,rate:20}):s===1?a({pitch:.55,hl:1.9,hr:1.9,khl:0,khr:0,fl:-.3,fr:-.3,kfl:.15,kfr:.15,nk:.35,rate:40,tail:1.6}):(a({pitch:.08,khl:.6,khr:.6,kfl:.25,kfr:.25,nk:.1,rate:10}),n>=.45&&(t.yaw=0));break}case"fire":a(s===0?{pitch:-.8*Math.sin(Math.min(1,n*1.3)*Math.PI)-.08,fl:-.5,fr:-.7,kfl:1.4,kfr:1.2,khl:.5,khr:.5,nk:-.3,flame:1+n*2.2}:s===1?{pitch:.1,fl:-.4,fr:-.4,hl:.25,hr:.25,nk:.4,flame:3.2,rate:30}:{flame:1.4,rate:10});break;case"dust":a({pitch:.12,fl:-.7+Math.sin(e*42)*.6,kfl:1+Math.cos(e*42)*.5,nk:.2,rate:40});break;case"superstart":case"superprep":a({pitch:-.1,fl:-.5+Math.sin(e*16)*.5,kfl:1.1,nk:-.2+Math.sin(e*8)*.1,flame:1.5+n*2.5});break;case"charge":o(3,l,.45,1.2,1.25,2),t.pitch-=.06,t.nk+=.25,t.flame=4,t.rate=30;break;case"hit":a({pitch:-.14,roll:.16,hl:.2,hr:.2,khl:.3,khr:.3,nk:-.35,rate:30,flame:.8});break;case"air":a({gnd:0,roll:1.1,y:-.2,fl:-.6,fr:.4,hl:.5,hr:-.4,kfl:.8,khr:.8,flame:.7});break;case"down":case"ko":a({gnd:0,roll:1.45,y:-.92,fl:-.3,fr:.25,hl:.3,hr:-.2,kfl:.5,kfr:.9,khl:.4,khr:.9,nk:.3,tail:1,flame:i.anim==="ko"?.25:.6,rate:18});break;case"getup":{const h=Nt(n);a({gnd:h,roll:1.45*(1-h),y:-.92*(1-h),kfl:1-n,kfr:1-n,khl:.6*(1-n),khr:.6*(1-n),rate:14});break}case"win":{const h=.5+.5*Math.sin(e*2.4);a({pitch:-.55-h*.35,hl:-.3,hr:-.3,khl:.6,khr:.6,fl:-.6+Math.sin(e*9)*.4,fr:-.6-Math.sin(e*9)*.4,kfl:1.2,kfr:1.2,nk:-.3,flame:2.4});break}}return t}function Iv(){const i=Ee(3350810,{roughness:.55}),e=Ee(1774096,{roughness:.7}),t=Ee(4207659,{metalness:.85,roughness:.4,emissive:16730640,emissiveIntensity:0}),n=Ee(7213840,{roughness:.95,side:pt}),s=Ee(4000523,{roughness:1,side:pt}),a=Ee(920073,{roughness:1}),r=Ee(2893346,{metalness:.5,roughness:.35}),o=Ee(7823407,{metalness:.85,roughness:.35}),c=Ee(6032653,{roughness:.4,emissive:3146756}),l=new kt({color:16738840}),h=new at,u=Te(h),p=Te(u,0,1.38,-.75),d=P(p,Lt(.44,1),i,0,0,.72);d.rotation.x=ze,d.scale.x=.95,P(p,me(.5),i,0,-.02,1.3).scale.set(1,1.06,1),P(p,me(.49),i,0,.03,.12);for(const k of[1,-1])P(p,me(.22),i,k*.3,-.12,1.38),P(p,me(.27),i,k*.27,-.1,.1),P(p,me(.16),e,k*.2,-.3,1.55);const g=Te(p,0,.22,1.5);g.rotation.x=.62,P(g,We(.21,.31,.62,14),i,0,.25,0),P(g,tt(.2,.04),e,0,.56,0).rotation.x=ze,P(g,new Bt(.19,16),l,0,.565,0).rotation.x=-ze;for(let k=0;k<6;k++)P(g,new ft(.03,.16,.1),a,0,.1+k*.08,-.26+k*.012).rotation.x=-.4;const v=new Vt;v.position.set(0,.62,0),g.add(v);const m=new Xu(16741408,30,11,2);m.position.set(0,.9,0),g.add(m);const f=P(p,tt(.37,.05),t,0,.12,1.58);f.rotation.x=-.35,P(p,tt(.07,.015),t,0,-.3,1.82).rotation.y=ze,P(p,We(.035,.1,.16,10),o,0,-.47,1.82),P(p,tt(.475,.035),t,0,0,1.02),P(p,tt(.455,.035),t,0,0,.36);for(const k of[1,-1]){for(let J=0;J<9;J++)P(p,tt(.04,.012),t,k*.44,.22-Math.sin(J/8*Math.PI)*.1,.36+J*.083).rotation.set(J%2?0:ze,ze*(J%2),0);for(const J of[1.02,.36])P(p,We(.006,.006,.16,4),t,k*.47,-.22,J),P(p,We(.03,.08,.13,10),o,k*.47,-.35,J);for(let J=0;J<9;J++){const Q=.2+Math.random()*.42;P(p,new ft(.015,Q,.085),J%3?n:s,k*(.46-Math.random()*.02),.02-Q/2,.38+J*.078).rotation.z=k*.12}for(let J=0;J<4;J++)P(p,new ft(.012,.028,.16+Math.random()*.16),c,k*.43,.05-J*.09,.02+Math.random()*.12).rotation.set(.5,k*.35,0);P(p,new ft(.012,.03,.25),c,k*.47,.1,1.3).rotation.x=.6}const y=P(p,new ln(.475,.475,.74,14,1,!0,ze,Math.PI),n,0,.02,.7);y.rotation.x=ze;const S=(k,J)=>{const Q=Te(p,k,-.18,J);P(Q,We(.155,.1,.62,9),i,0,-.3,0);const Z=Te(Q,0,-.6,0);return P(Z,me(.1),e),P(Z,We(.085,.072,.5,8),e,0,-.25,0),P(Z,We(.075,.15,.22,9),a,0,-.44,0),P(Z,We(.115,.14,.12,10),r,0,-.56,0),[Q,Z]},[_,T]=S(.3,1.3),[w,A]=S(-.3,1.3),[R,x]=S(.3,.1),[M,D]=S(-.3,.1),H=Te(p,0,.22,-.3);P(H,We(.1,.02,1.15,7),a,0,-.55,0),P(H,We(.06,.01,.9,5),a,.04,-.5,.03);const F=yr(nd),G=F.cur,O=new I(0,2.4,0),z=[];for(const k of[T,A,x,D])z.push([k,st(0,-.62,.09)],[k,st(0,-.62,-.09)]);const K={root:h,mover:u,feet:z,hands:[]};return{root:h,cur:G,flameK:1,flamePos:O,flame:v,snap(k,J){F.snap(Ah(k,J))},update(k,J,Q){const Z=Ah(k,Q);F.step(Z,J,Z.damp??.8),u.rotation.y=G.yaw+(k.spinExtra||0),p.rotation.set(G.pitch,0,G.roll),_.rotation.x=G.fl-G.pitch*.5,w.rotation.x=G.fr-G.pitch*.5,R.rotation.x=G.hl-G.pitch,M.rotation.x=G.hr-G.pitch,T.rotation.x=G.kfl,A.rotation.x=G.kfr,x.rotation.x=G.khl,D.rotation.x=G.khr,H.rotation.x=G.tail,H.rotation.z=Math.sin(Q*2.3)*.12,g.rotation.x=.62+G.nk,Sr(K,G,-.04),this.flameK=G.flame,m.intensity=G.flame*(26+Math.sin(Q*23)*5+Math.random()*5),t.emissiveIntensity=Math.max(0,(G.flame-1.3)*.9),v.getWorldPosition(O)}}}function Gc(i,e,t,n){const s=yr(e),a=s.cur,r={root:i.root,mover:i.spinG,feet:i.feet,hands:i.hands,body:[[i.head,st(0,.22,0)]]};return{root:i.root,cur:a,flameK:0,snap(o,c){s.snap(t(o,c))},update(o,c,l){const h=t(o,l);s.step(h,c,Hc(h,o)),i.spinG.rotation.y=a.spin+(o.spinExtra||0),i.spinG.scale.setScalar(Math.max(.001,a.sc)),i.root.visible=a.sc>.03,i.hips.rotation.set(a.lean,a.twist,a.roll),i.spine.rotation.set(a.spine,-a.twist*.6,0),i.head.rotation.set(a.head,-a.twist*.4+a.hy,0),i.shL.rotation.set(a.aLx,0,a.aLz),i.elL.rotation.x=a.eL,i.shR.rotation.set(a.aRx,0,a.aRz),i.elR.rotation.x=a.eR;const u=a.lean*a.lc;i.lL.rotation.set(a.lLx-u,0,a.lLz),i.kL.rotation.x=a.kL,i.lR.rotation.set(a.lRx-u,0,a.lRz),i.kR.rotation.x=a.kR,n&&n(a,o,l),Sr(r,a,0)}}}const An=(i,e,t)=>{const n=i.pk;return i.phase===0?-e*t*Nt(n):i.phase===1?e*cn(-t,Dt,Nt(n)):e*Dt};function br(i,e,t,n,s){const a=e.pk,r=e.phase;switch(e.anim){case"idle":{const o=Math.sin(t*s.breath);return n({spine:i.spine+o*.03,aLx:i.aLx+o*.05,aRx:i.aRx-o*.05}),0}case"walk":{const o=Math.sin(t*s.gait),c=Math.cos(t*s.gait);return n({lLx:o*.55,lRx:-o*.55,kL:.25+Math.max(0,c)*.9,kR:.25+Math.max(0,-c)*.9,lean:i.lean+.1,tail:o*.35}),0}case"block":return n({aLx:-1.75,eL:-2.2,aRx:-1.75,eR:-2.2,aLz:-.2,aRz:.2,lean:-.02,spine:i.spine+.15,kL:i.kL+.25,kR:i.kR+.25,head:i.head+.2}),0;case"blocklow":return n({aLx:-1.3,eL:-2,aRx:-1.3,eR:-2,aLz:-.2,aRz:.2,lean:.3,spine:i.spine+.3,lLx:-1,kL:1.9,lRx:.1,kR:1.6,head:i.head+.2,tailP:.05}),0;case"grab":return r===0?n({aLx:-1.4,aRx:-1.4,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,lean:.2,twist:0,jaw:.5}):r===1&&n({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.7,eR:-.7,lean:.45,twist:0,lLx:-.5,lRx:.5,rate:40}),0;case"grabHold":return n({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.9,eR:-.9,lean:.4,twist:0,y:Math.abs(Math.sin(t*40))*.015,jaw:.7,rate:30}),0;case"grabThrow":return n({aLx:-2.3,aRx:-2.3,eL:-.2,eR:-.2,lean:-.2,twist:0,y:.1,rate:34}),-Nt(a)*Math.PI;case"vanish":return n({sc:0,rate:16,aLz:1,aRz:-1}),i.spinHard=1,e.st*22;case"gone":return n({sc:0,rate:60}),0;case"appear":return n({sc:1,rate:22}),i.spinHard=1,(1-a)*8;case"hit":return n({lean:-.35,head:i.head-.4,spine:i.spine-.3,aLx:-.3,aRx:-.2,eL:-.8,eR:-.8,kL:.7,kR:.5,jaw:.6,tail:.4,rate:35}),0;case"air":return n({gnd:0,lean:-1.05,lc:0,head:-.3,spine:0,lLx:-.6,kL:.9,lRx:-.2,kR:.5,aLx:-2.2,aRx:-2.4,eL:-.3,eR:-.3,aLz:.5,aRz:-.5,y:.2,jaw:.7,tailP:0}),0;case"down":case"ko":return n({gnd:0,y:-s.lie,lean:-1.52,lc:0,spine:0,head:-.05,hy:0,lLx:-.1,kL:.2,lRx:.15,kR:.35,lLz:.15,lRz:-.15,aLx:-.2,aRx:-.2,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,twist:0,jaw:e.anim==="ko"?.5:.15,tailP:0,rate:22}),0;case"getup":{const o=Nt(a);return n({gnd:o,y:-s.lie*(1-o),lean:cn(-1.4,i.lean,o),lc:o,lLx:-.8*(1-a),kL:1.4*(1-a)+.3,kR:1.2*(1-a)+.3}),0}}return null}const id={y:0,lean:.28,twist:.35,roll:0,spine:.12,head:-.12,aLx:-1.1,aLz:.25,eL:-1.5,aRx:-.55,aRz:-.3,eR:-1.6,lLx:-.5,lLz:.07,kL:.95,lRx:-.1,lRz:-.07,kR:.8,lc:1,jaw:0,tail:0,tailP:0,sc:1,spin:0,gnd:1,hnd:0,hy:0,rate:16},zv={breath:4.2,gait:10,lie:.84},Th=i=>{if(i=hi(i),i<.42){const t=i/.42;return[cn(.3,-.8,Nt(t)),.8+Math.sin(Math.PI*t)*1.2-.05*t]}const e=(i-.42)/.58;return[cn(-.8,.3,e),.75+Math.sin(Math.PI*e)*.2]};function Uv(i,e){const t={...id},n=i.pk,s=i.phase,a=o=>Object.assign(t,o);let r=null;switch(i.anim){case"idle":{const o=Math.sin(e*3.2),c=Math.tanh(Math.sin(e*1.3)*5)*.45+Math.sin(e*4.1)*.05;a({lean:.32+o*.03,spine:.14+o*.03,hy:c,head:-.14-Math.abs(c)*.1,twist:.35+c*.25,kL:1+o*.06,kR:.85+o*.06,aLx:-1.15+o*.06,aRx:-.5-o*.06,eL:-1.6+c*.2,rate:12,damp:.88}),r=0;break}case"walk":{const o=i.mvF<-.3?-1:1,c=hi(e*1.7*o),l=Math.sin(c*Dt),[h,u]=Th(c),[p,d]=Th(c+.5);a({lLx:h-.1,kL:u,lRx:p-.1,kR:d,lean:.38,spine:.14,twist:.3-l*.22,roll:l*.04,aLx:-1.2+l*.25,aRx:-.6-l*.3,eL:-1.6,eR:-1.5,hy:Math.sin(e*2.3)*.35,head:-.16,rate:20,damp:.82}),r=0;break}case"dodge":{const o=i.dodgeSide,c=Math.sin(n*Math.PI),l=Nt(pi(n*1.4));a(o?{lean:.95,spine:.3,head:-.55,hnd:1,twist:.3+o*.6*c-o*.25*(1-l),roll:-o*.2*c,aLx:-1.35,aRx:-1.35,aLz:.45,aRz:-.45,eL:-.35,eR:-.35,lLx:-1,kL:1.85,lRx:.35,kR:1.3,lLz:o*.2*c,lRz:o*.2*c,rate:30}:{lean:.75,spine:.25,head:-.5,hnd:1,twist:.1,aLx:-1.4,aRx:-1.4,aLz:.3,aRz:-.3,eL:-.3,eR:-.3,lLx:-.9,kL:1.8,lRx:-.6,kR:1.7,y:.06*c,rate:30}),r=0;break}case"whistle":{const o=Math.abs(Math.sin(e*22));a({aRx:-2,aRz:.35,eR:-2.4,head:-.28,aLx:-.6,aLz:1,eL:-.4,lean:.08,spine:.05,twist:.15,kL:.7,kR:.6,y:o*.02,rate:18}),r=0;break}case"rootsPull":{const o=Math.sin(e*40)*.03;a({aLx:-2.8,aRx:-2.8,aLz:.5,aRz:-.5,eL:-.6+o,eR:-.6-o,lean:-.2,spine:-.05,head:-.3,twist:o,kL:.65,kR:.6,lLx:-.4,lRx:.2,rate:24}),r=0;break}case"rootsSlam":a({aLx:-.4,aRx:-.4,aLz:.2,aRz:-.2,eL:-.1,eR:-.1,lean:.8,spine:.35,head:-.5,twist:0,kL:1.8,kR:1.6,lLx:-.9,lRx:.3,hnd:1,rate:40}),r=0;break;default:r=br(t,i,e,a,zv)}if(r===null)switch(r=0,i.anim){case"palm":a(s===0?{aLx:-.3,eL:-2.3,twist:.8}:s===1?{aLx:-1.55,eL:-.05,aLz:-.1,twist:-.25,lean:.32,lLx:-.6,rate:40}:{aLx:-1.3,eL:-.8,rate:12});break;case"elbowR":s===0?a({aRx:.4,eR:-2.2,twist:-.1}):s===1&&a({aRx:-1.7,eR:-2.1,aRz:.55,twist:1.15,lean:.38,lLx:-.6,rate:40});break;case"heel":a(s===0?{lRx:-1.2,kR:1.7,lean:-.1,twist:.1}:s===1?{lRx:-1.45,kR:.05,lean:-.35,twist:0,aLz:.8,aRz:-.8,rate:42}:{kR:1,rate:12});break;case"spinkick":r=An(i,1,.5),a(s===0?{lRx:-.7,kR:1.5,lean:-.1,kL:1.2,aLz:.9,aRz:-.9}:s===1?{lean:-.5,lRx:-1.6,kR:0,lLx:-.2,kL:.5,aLz:1.2,aRz:-1.2,aLx:0,aRx:0,eL:-.3,eR:-.3,rate:40}:{kR:.9-n*.3,rate:12});break;case"stepIn":s===0?a({lean:.38,kL:1.2,kR:1.1,aRx:-.3,eR:-2.2,twist:0}):s===1&&a({lean:.5,aRx:-1.5,eR:-.35,aRz:.1,twist:1,lLx:-.7,kL:.9,lRx:.65,kR:.3,rate:40});break;case"axe":a(s===0?{lean:-.3,lRx:-2.4,kR:0,kL:.7,twist:0,aLz:.8,aRz:-.8,rate:26}:s===1?{lean:.15,lRx:-.55,kR:0,twist:0,aLx:.4,aRx:.4,rate:44}:{kR:.8-n*.3});break;case"backKick":s===0?a({lLx:-.9,kL:1.6,lean:-.2,twist:.1}):s===1&&a({lLx:-1.75,kL:0,lean:-.45,twist:0,aLx:.3,aRx:.3,aLz:.7,aRz:-.7,rate:40});break;case"wheel":r=An(i,-1,.5),a(s===0?{lean:.55,spine:.35,kL:1.3,kR:1.3,aLx:-.6,aRx:-.6,eL:-.2,eR:-.2}:s===1?{lean:-.6,roll:.3,lRx:-1.7,kR:0,lLx:-.2,kL:.5,aLx:0,aRx:0,aLz:1.45,aRz:-1.45,eL:-.1,eR:-.1,rate:40}:{kR:.9-n*.4,rate:12});break;case"lowStep":a(s===0?{lLx:-.9,kL:1.8,lRx:-.6,kR:1.6,lean:.25}:s===1?{lLx:-.9,kL:1.9,lRx:-1.15,kR:.1,lean:.05,twist:.1,aLz:.6,aRz:-.6,rate:40}:{kL:1.3});break;case"sweep":r=An(i,1,.4),a(s===0?{lLx:-1,kL:2,lRx:-.8,kR:1.2,lean:.3,aLx:-.9,aRx:-.9,eL:-.3,eR:-.3,hnd:.6}:s===1?{lLx:-1.1,kL:2.2,lRx:-1.5,kR:0,lean:.45,aLx:-1.2,aRx:-.4,aLz:.3,aRz:-.9,eL:-.2,eR:-.2,hnd:1,rate:40}:{kL:1.4,hnd:.3*(1-n)});break;case"blade":a(s===0?{aRx:-2.7,aRz:-.6,eR:-.3,twist:-.45,lean:-.05}:s===1?{aRx:-1,aRz:.75,eR:-.05,twist:1.05,lean:.35,lLx:-.6,rate:42}:{aRx:-.9,aRz:.5,eR:-.4,twist:.7*(1-n)+.4});break;case"roots":a(s===0?{aRx:-2.9,eR:-.15,aLx:-2.9,eL:-.15,lean:-.12,twist:0,kL:.6,kR:.6}:{lean:.75,spine:.4,twist:0,lLx:-1,kL:1.9,lRx:.35,kR:1.6,aRx:-.95,eR:-.05,aLx:-.95,eL:-.05,hnd:s===1?1:1-n,rate:34});break;case"superstart":a({aRx:-2,aRz:.35,eR:-2.4,head:-.28,aLx:-.6,aLz:1,eL:-.4,lean:.08,twist:.15,kL:.7,kR:.6});break;case"superprep":{const o=Math.abs(Math.sin(e*9));a({y:o*.1,lean:.1,twist:0,aLx:-2.9,aRx:-2.9,aLz:.4,aRz:-.4,eL:-.3-o*.4,eR:-.3-o*.4,lLx:-.6,kL:1.2,lRx:.2,kR:1,head:-.3});break}case"leap":a({lean:.65,twist:.2,lLx:-1,kL:1.45,lRx:.3,kR:1.7,aLx:-1.4,aRx:-.7,aLz:.5,aRz:-.5,eL:-.2,eR:-.2,rate:24});break;case"dive":a({lean:.95,twist:.15,spine:.22,lRx:.5,kR:1.4,lLx:-.8,kL:1.6,aLx:-1.4,aRx:-1.35,aLz:.55,aRz:-.5,eL:-.2,eR:-.2,hnd:1,rate:35});break;case"win":{const o=Math.abs(Math.sin(e*5));a({y:o*.2,kL:.8-o*.6,kR:.8-o*.6,lLx:-.2,lRx:.2,aLx:-2.9,aRx:-.6,aLz:.3,aRz:-.9,eL:-.2,eR:-1.6,twist:0,lean:0,head:-.25});break}}return t.spin=r,t}function Nv(){const i=Ee(9723962,{roughness:.55}),e=Ee(7226664,{roughness:.6}),t=Ee(4160044,{roughness:.9,side:pt}),n=Ee(2379807,{roughness:1,side:pt}),s=Ee(8367674,{roughness:.9,side:pt}),a=Ee(5917222,{roughness:1}),r=Ee(14272410,{roughness:.6}),o=Ee(3038506,{roughness:1}),c=Ee(14829850,{roughness:.7,emissive:10496512,emissiveIntensity:.55}),l=Ee(16753198,{roughness:.6,emissive:12605952,emissiveIntensity:.7}),h=new kt({color:10354522}),u=Ee(1840144,{roughness:1}),p=new at,d=Te(p),g=Te(d,0,1,0);P(g,me(.18),i,0,.02,0).scale.set(1.2,.85,.9),P(g,tt(.21,.03),a,0,.06,0).rotation.x=ze;for(let O=0;O<16;O++){const z=O/16*6.2832,K=.26+Math.random()*.18,k=.25,J=P(g,new nt(.075,K,4),[t,n,s][O%3],Math.sin(z)*k,-.06-K/2,Math.cos(z)*k);J.rotation.set(-.32,z,Math.PI,"YXZ"),J.scale.z=.25}for(let O=0;O<5;O++)P(g,me(.026),r,Math.sin(O*.4-.8)*.23,.04,Math.cos(O*.4-.8)*.23);const v=O=>{const z=Te(g,O*.12,-.05,0);P(z,Lt(.095,.3),i,0,-.23,0);const K=Te(z,0,-.46,0);P(K,me(.085),e),P(K,Lt(.075,.28),i,0,-.2,0),P(K,tt(.08,.014),a,0,-.28,0).rotation.x=ze,P(K,tt(.078,.012),s,0,-.33,0).rotation.x=ze,P(K,new ft(.12,.07,.25),e,0,-.455,-.085),P(K,me(.052),e,0,-.445,.045).scale.set(1,.8,1);for(let k=-1;k<=1;k++)P(K,me(.03),i,k*.04,-.465,-.215).scale.set(1,.7,1.3);return[z,K]},[m,f]=v(1),[y,S]=v(-1),_=Te(g,0,.08,0);P(_,We(.17,.155,.26,12),i,0,.12,0).scale.z=.8,P(_,me(.19),i,0,.36,0).scale.set(1.3,1,.8);for(const O of[1,-1])P(_,me(.08),i,O*.1,.39,.1).scale.set(1.1,.8,.6),P(_,me(.085),i,O*.27,.47,0);for(let O=0;O<3;O++)for(const z of[1,-1])P(_,me(.038),e,z*.05,.2-O*.07,.115).scale.z=.5;const T=P(_,tt(.2,.016),a,0,.34,0);T.rotation.set(ze-.2,.75,0),T.scale.set(1.1,.8,1);for(let O=0;O<9;O++){const z=(O/8-.5)*2.2;P(_,me(.024),r,Math.sin(z)*.15,.5-Math.cos(z)*.06,.05+Math.cos(z)*.11)}for(const O of[1,-1]){const z=P(_,new ft(.03,.12,.01),o,O*.12,.3,.165);z.rotation.z=O*.5}P(_,We(.055,.062,.1),i,0,.59,0);for(const O of[1,-1])for(let z=0;z<3;z++){const K=P(_,new nt(.07,.22,4),[t,s,n][z],O*(.3+z*.015),.52,-.05+z*.05);K.rotation.set(0,0,-O*(1.9+z*.2)),K.scale.z=.3}const w=Te(_,0,.7,0);P(w,me(.115),i).scale.set(.92,1.05,.97),P(w,me(.058),i,0,-.07,.05).scale.set(1.1,.8,1);for(const O of[1,-1])P(w,me(.016),h,O*.042,.012,.1),P(w,new ft(.05,.012,.02),u,O*.042,.04,.102).rotation.z=-O*.3,P(w,new nt(.03,.1,4),i,O*.118,.01,-.01).rotation.z=-O*1.2,P(w,new ft(.035,.01,.01),o,O*.06,-.03,.1);P(w,new ft(.05,.008,.01),u,0,-.085,.1);const A=[];for(let O=0;O<16;O++){const z=O/16*6.2832,K=Math.cos(z)<.3,k=.2+Math.random()*.16+(K?.1:0),J=.075,Q=Te(w,Math.sin(z)*J,.07,Math.cos(z)*J-.01);Q.rotation.set(-.35-(K?.45:0)+Math.cos(z)*.5,0,-Math.sin(z)*.55),P(Q,new nt(.05,k,5),O%3?c:l,0,k/2,0),A.push(Q)}for(let O=0;O<5;O++){const z=Te(w,(O-2)*.035,.12,-.02);z.rotation.x=-.5-Math.random()*.3,P(z,new nt(.045,.34,5),O%2?l:c,0,.17,0),A.push(z)}P(w,tt(.112,.014),a,0,.055,0).rotation.x=ze-.1;const R=O=>{const z=Te(_,O*.3,.48,0);P(z,Lt(.068,.19),i,0,-.14,0),P(z,tt(.074,.013),a,0,-.16,0).rotation.x=ze;const K=Te(z,0,-.3,0);return P(K,Lt(.055,.19),i,0,-.13,0),P(K,We(.065,.058,.1),n,0,-.2,0),P(K,tt(.062,.01),s,0,-.14,0).rotation.x=ze,P(K,me(.057),e,0,-.31,0),[z,K]},[x,M]=R(1),[D,H]=R(-1),F=A.map(O=>O.rotation.x),G=[[f,st(0,-.49,.045)],[f,st(0,-.49,-.215)],[S,st(0,-.49,.045)],[S,st(0,-.49,-.215)]];return Gc({root:p,spinG:d,hips:g,spine:_,head:w,shL:x,elL:M,shR:D,elR:H,lL:m,kL:f,lR:y,kR:S,feet:G,hands:[[M,st(0,-.37,0)],[H,st(0,-.37,0)]]},id,Uv,(O,z,K)=>{for(let k=0;k<A.length;k++)A[k].rotation.x=F[k]+Math.sin(K*7+k*1.7)*.1})}const sd={y:0,lean:.3,twist:.2,roll:0,spine:.42,head:-.45,aLx:-1.2,aLz:.45,eL:-1.4,aRx:-.9,aRz:-.45,eR:-1.5,lLx:-.35,lLz:.12,kL:.7,lRx:.15,lRz:-.12,kR:.65,lc:1,jaw:.06,tail:0,tailP:-.22,sc:1,spin:0,gnd:1,hnd:0,hy:0,rate:12},Ov={breath:2.6,gait:7.5,lie:.68};function Fv(i,e){const t={...sd},n=i.pk,s=i.phase,a=o=>Object.assign(t,o);let r=null;switch(i.anim){case"idle":{const o=Math.sin(e*2.2);a({spine:.42+o*.03,roll:Math.sin(e*1.1)*.04,hy:Math.sin(e*.7)*.3,tail:Math.sin(e*1.8)*.35,eL:-1.4+Math.sin(e*3.1)*.22,eR:-1.5+Math.sin(e*3.1+1.5)*.22,aLz:.45+Math.sin(e*1.4)*.08,aRz:-.45-Math.sin(e*1.4+1)*.08,jaw:.06+Math.pow(Math.max(0,Math.sin(e*.8)),8)*.45,rate:10,damp:.88}),r=0;break}case"walk":{const o=i.mvF<-.3?-1:1,c=hi(e*1.25*o),l=Math.sin(c*Dt),h=Math.cos(c*Dt);a({lLx:l*.45-.2,lRx:-l*.45,kL:.55+Math.max(0,h)*.75,kR:.55+Math.max(0,-h)*.75,roll:l*.12,tail:-l*.6,twist:.2+l*.15,aLx:-1.2-l*.25,aRx:-.9+l*.25,lean:.36,hy:-l*.12,rate:14}),r=0;break}case"dodge":{const o=i.dodgeSide,c=Math.sin(n*Math.PI);a(o?{twist:.2+o*.6*c,roll:-o*.3*c,lean:.55,spine:.5,lLx:-.8,kL:1.3,lRx:.1,kR:1.2,tail:o*.9*c,tailP:.1,aLz:.9,aRz:-.9,eL:-.8,eR:-.8,rate:28}:{lean:.1,y:.12*c,kL:1,kR:1,aLx:-1.7,aRx:-1.7,eL:-2,eR:-2,tail:.6*c,jaw:.4,rate:28}),r=0;break}case"nmHold":a({jaw:1.1,aLx:-1.7,aRx:-1.7,aLz:-.1,aRz:.1,eL:-1,eR:-1,lean:.2,spine:.3,head:-.7,tail:Math.sin(e*6)*.5,tailP:.15,rate:20}),r=0;break;case"nmSnap":a({jaw:0,lean:.7,spine:.6,head:-.85,aLx:-.6,aRx:-.6,aLz:.5,aRz:-.5,eL:-.3,eR:-.3,lLx:-.7,kL:1,tail:.6,tailP:.3,rate:40}),r=0;break;default:r=br(t,i,e,a,Ov)}if(r===null)switch(r=0,i.anim){case"clawL":a(s===0?{aLx:-2.3,aLz:.7,eL:-.9,twist:.7,jaw:.3,lean:.2}:s===1?{aLx:-1.35,aLz:-.5,eL:-.1,twist:-.35,lean:.42,jaw:.5,rate:36}:{aLx:-1.1,aLz:.2,eL:-.8,twist:.1,lean:.4,rate:10});break;case"clawR":a(s===0?{aRx:-2.3,aRz:-.7,eR:-.9,twist:-.3,jaw:.3,lean:.2}:s===1?{aRx:-1.35,aRz:.5,eR:-.1,twist:1,lean:.44,jaw:.5,rate:36}:{aRx:-1,aRz:-.2,eR:-.8,twist:.5,lean:.4,rate:10});break;case"tailSwing":r=An(i,1,.45),a(s===0?{lean:.35,kL:1,kR:1,tail:-.7,tailP:.1,aLz:.8,aRz:-.8}:s===1?{lean:.4,kL:.9,kR:.9,tail:.3,tailP:.22,aLz:1,aRz:-1,rate:30}:{tail:.5*(1-n),rate:12});break;case"tailWhip":r=An(i,-1,.45),a(s===0?{lean:.5,tail:.7,tailP:.5,spine:.5}:s===1?{lean:.6,spine:.55,tail:-.3,tailP:.75,aLz:.9,aRz:-.9,rate:30}:{tailP:.4*(1-n),rate:12});break;case"tailSweep":r=An(i,1,.4),a(s===0?{lean:.2,lLx:-.9,kL:1.7,lRx:-.3,kR:1.5,tail:-.7,tailP:-.25}:s===1?{lean:.15,lLx:-.9,kL:1.8,lRx:-.3,kR:1.6,tail:.3,tailP:-.3,aLz:.8,aRz:-.8,hnd:.5,rate:30}:{kL:1.1,kR:1,rate:12});break;case"snap":a(s===0?{lean:.05,spine:.2,head:-.1,jaw:.75,kL:1,kR:1}:s===1?{lean:.6,spine:.6,head:-.8,jaw:0,lLx:-.6,lRx:.6,aLx:.4,aRx:.4,rate:40}:{jaw:.15,rate:10});break;case"bite":a(s===0?{lean:-.05,spine:.1,head:-.35-n*.2,jaw:1.05,aLx:-1.6,aRx:-1.6,aLz:.9,aRz:-.9,eL:-.5,eR:-.5}:s===1?{lean:.6,spine:.6,head:-.8,jaw:0,lLx:-.6,lRx:.6,aLx:-1.3,aRx:-1.3,aLz:-.2,aRz:.2,rate:44}:{jaw:.1,lean:.35,rate:10});break;case"lowClaw":a(s===0?{lean:.4,lLx:-.9,kL:1.7,lRx:-.2,kR:1.5,aRx:-1.9,aRz:-.6,eR:-.8}:s===1?{lean:.6,spine:.55,lLx:-.9,kL:1.8,lRx:-.2,kR:1.6,aRx:-.75,aRz:.4,eR:-.05,twist:.9,rate:38}:{kL:1.1,rate:12});break;case"claws":if(s===0)a({aLx:-2.2,aRx:-2.2,aLz:.7,aRz:-.7,eL:-.9,eR:-.9,jaw:.5,lean:.15,kL:.9,kR:.9});else if(s===1){const o=Math.sin(n*3*Math.PI);a({lean:.45,aLx:-1.6-o*.6,aLz:.1-o*.5,eL:-.5+o*.4,aRx:-1.6+o*.6,aRz:-.1-o*.5,eR:-.5-o*.4,twist:.25+o*.8,jaw:.4,lLx:-.5,lRx:.5,rate:44})}else a({aLx:-1,aRx:-1.4,eL:-.6,eR:-.9,twist:-.2,lean:.45,rate:10});break;case"cast":a(s===0?{aLx:-2.8,aRx:-2.8,aLz:.5-n*.4+Math.sin(e*12)*.3,aRz:-.5+n*.4-Math.sin(e*12+1)*.3,eL:-.4+Math.sin(e*9)*.3,eR:-.4-Math.sin(e*9)*.3,lean:-.05,spine:.1,head:-.5,twist:0,jaw:.5,y:.02}:s===1?{aLx:-1.5,aRx:-1.5,aLz:-.15,aRz:.15,eL:-.05,eR:-.05,lean:.45,twist:0,jaw:.9,lLx:-.5,lRx:.5,rate:40}:{aLx:-1.3,aRx:-1.3,eL:-.4,eR:-.4,twist:0,lean:.3});break;case"veil":a({aLx:-1.7,aRx:-1.7,aLz:s===0?-.5:.9,aRz:s===0?.5:-.9,eL:s===0?-1.9:-.3,eR:s===0?-1.9:-.3,twist:0,lean:.05,spine:.2,head:-.25,rate:30});break;case"superstart":case"superprep":{const o=Math.sin(e*14);a({twist:0,lean:0,spine:.1,head:-.55,aLx:-2.8,aRx:-2.8,aLz:.55+o*.12,aRz:-.55-o*.12,eL:-.5+Math.sin(e*9)*.3,eR:-.5-Math.sin(e*9)*.3,jaw:.8,tail:o*.4,tailP:.2});break}case"leap":case"dive":a({gnd:0,lean:-.5,lc:0,aLx:-2.2,aRx:-2.2,jaw:.9});break;case"win":{const o=Math.sin(e*3);a({twist:0,lean:0,spine:.12,head:-.6,aLx:-2.6,aRx:-2.6,aLz:.7,aRz:-.7,eL:-.6,eR:-.6,jaw:.5+o*.4,tail:o*.6,tailP:.3,y:Math.abs(o)*.05});break}}return t.spin=r,t}function Bv(){const i=Ee(2786424,{roughness:.5}),e=Ee(1530716,{roughness:.6}),t=Ee(11128730,{roughness:.65}),n=Ee(1001299,{roughness:.9,side:pt}),s=Ee(601914,{roughness:1,side:pt}),a=Ee(13279804,{metalness:.8,roughness:.32}),r=Ee(15657695,{roughness:.85}),o=Ee(15920344,{roughness:.4}),c=Ee(15129792,{roughness:.4}),l=Ee(4854838,{roughness:.6}),h=new kt({color:16765498}),u=new kt({color:1182212}),p=new kt({color:10116351}),d=new at,g=Te(d),v=Te(g,0,.86,0);P(v,me(.27),i,0,.02,0).scale.set(1.15,.9,1.05),P(v,We(.3,.5,.52,16,!0),n,0,-.26,0),P(v,tt(.5,.022),a,0,-.52,0).rotation.x=ze;for(let Z=0;Z<10;Z++){const de=Z/10*6.2832;P(v,new nt(.09,.2,4),s,Math.sin(de)*.47,-.6,Math.cos(de)*.47).rotation.set(Math.PI,de,0)}P(v,tt(.3,.035),a,0,0,0).rotation.x=ze,P(v,me(.05),p,0,0,.31).scale.z=.5;const m=Z=>{const de=Te(v,Z*.17,-.04,0);P(de,Lt(.12,.2),i,0,-.18,0);const le=Te(de,0,-.38,0);P(le,me(.1),e),P(le,Lt(.085,.22),i,0,-.18,0),P(le,new ft(.2,.08,.34),e,0,-.4,.09);for(let W=-1;W<=1;W++)P(le,new nt(.028,.12,5),c,W*.065,-.41,.3).rotation.x=ze;return[de,le]},[f,y]=m(1),[S,_]=m(-1),T=[];let w=v;for(let Z=0;Z<3;Z++){const de=Te(w,0,Z?0:-.04,Z?-.48:-.2),le=[.17,.12,.075][Z],W=[.12,.075,.012][Z];P(de,We(le,W,.5,9),Z===1?e:i,0,0,-.25).rotation.x=ze;for(let se=0;se<2;se++)P(de,new nt(.04-Z*.008,.12-Z*.02,4),e,0,le*.85-se*.03,-.12-se*.24);T.push(de),w=de}const A=Te(v,0,.08,0);P(A,me(.26),i,0,.2,0).scale.set(1.2,1.1,.95),P(A,me(.2),t,0,.16,.1).scale.set(1,1.15,.7),P(A,me(.24),i,0,.46,-.02).scale.set(1.35,.85,.9),P(A,We(.3,.31,.2,14,!0),n,0,.12,0).scale.z=.92;const R=P(A,We(.2,.38,.2,12,!0),n,0,.52,-.02);R.scale.z=.85,P(A,tt(.37,.018),a,0,.43,-.02).rotation.x=ze,P(A,tt(.2,.02),a,0,.62,-.02).rotation.x=ze,P(A,me(.045),p,0,.5,.3).scale.z=.5;for(let Z=0;Z<4;Z++)P(A,new nt(.045,.12,4),e,0,.25+Z*.11,-.25);const x=Te(A,0,.7,.06);P(x,me(.19),i).scale.set(1.05,.82,1.1);const M=P(x,We(.1,.17,.44,10),i,0,-.02,.34);M.rotation.x=ze,M.scale.set(1.15,1,.5);for(const Z of[1,-1]){P(x,me(.065),i,Z*.11,.11,.06),P(x,me(.038),h,Z*.125,.12,.1),P(x,me(.018),u,Z*.135,.12,.132).scale.set(.5,1.2,.5),P(x,me(.022),e,Z*.045,.035,.54),P(x,tt(.035,.008),a,Z*.19,-.05,-.02);for(let de=0;de<5;de++)P(x,new nt(.016,.055,4),o,Z*(.15-de*.016),-.075,.2+de*.075).rotation.x=Math.PI}const D=Te(x,0,-.09,.04),H=P(D,We(.085,.15,.44,10),t,0,-.025,.28);H.rotation.x=ze,H.scale.set(1.1,1,.32),P(D,new ft(.2,.012,.36),l,0,.012,.26);for(const Z of[1,-1])for(let de=0;de<4;de++)P(D,new nt(.015,.05,4),o,Z*(.135-de*.016),.03,.22+de*.08);const F=[];for(let Z=0;Z<11;Z++){const de=(Z/10-.5)*3.6,le=.5+Math.random()*.3,W=Te(x,Math.sin(de)*.17,.08,-.05-Math.cos(de)*.13);W.rotation.set(.25+Math.cos(de)*.25,0,Math.sin(de)*.28),P(W,Lt(.04,le),r,0,-le/2,0),F.push(W)}P(x,me(.17),r,0,.07,-.07).scale.set(1.05,.7,.95),P(x,tt(.15,.016),a,0,.12,-.02).rotation.x=ze-.25,P(x,me(.03),p,0,.15,.12);const G=Z=>{const de=Te(A,Z*.37,.48,0);P(de,me(.1),i),P(de,Lt(.078,.2),i,0,-.16,0);const le=Te(de,0,-.34,0);P(le,Lt(.064,.2),e,0,-.14,0),P(le,tt(.07,.014),a,0,-.22,0).rotation.x=ze,P(le,me(.075),i,0,-.32,0).scale.set(1,.9,.8);for(let W=-1;W<=1;W++)P(le,new nt(.02,.15,5),c,W*.045,-.43,.02).rotation.set(Math.PI+.25,0,W*.25);return[de,le]},[O,z]=G(1),[K,k]=G(-1),J=F.map(Z=>Z.rotation.x),Q=[[y,st(0,-.44,-.08)],[y,st(0,-.44,.26)],[_,st(0,-.44,-.08)],[_,st(0,-.44,.26)]];return Gc({root:d,spinG:g,hips:v,spine:A,head:x,shL:O,elL:z,shR:K,elR:k,lL:f,kL:y,lR:S,kR:_,feet:Q,hands:[[z,st(0,-.45,0)],[k,st(0,-.45,0)]]},sd,Fv,(Z,de,le)=>{D.rotation.x=Z.jaw;for(let W=0;W<3;W++)T[W].rotation.y=Z.tail*(.3+W*.15)+Math.sin(le*1.7-W*1.1)*(.16+W*.08),T[W].rotation.x=(W?Z.tailP*.45:Z.tailP*.5+Z.lean*(1-2*Z.lc))+Math.sin(le*1.3-W)*.05;for(let W=0;W<F.length;W++)F[W].rotation.x=J[W]-Z.head*.6-Z.spine*.5+Math.sin(le*2+W)*.04})}const ad={y:0,lean:.06,twist:.25,roll:0,spine:.05,head:-.05,hy:0,aLx:-.5,aLz:.35,eL:-.9,aRx:-.4,aRz:-.35,eR:-1,lc:1,tb:0,tl:0,tw:.12,tz:0,wf:2.4,hair:0,mouth:0,glow:0,arc:0,film:1,sc:1,spin:0,gnd:1,hnd:0,rate:12},Vv={breath:2.2,gait:6,lie:.9};function Lh(i,e){const t={...ad},n=i.pk,s=i.phase,a=o=>Object.assign(t,o);let r=null;switch(i.anim){case"idle":{const o=Math.sin(e*1.6);a({spine:.05+o*.03,roll:Math.sin(e*.9)*.05,twist:.25+Math.sin(e*.7)*.1,aLx:-.5+o*.12,aRx:-.4-o*.12,aLz:.35+Math.sin(e*1.3)*.08,aRz:-.35-Math.sin(e*1.3+1)*.08,eL:-.9+Math.sin(e*2.1)*.15,eR:-1+Math.sin(e*2.1+1.4)*.15,hair:.1+Math.sin(e*.8)*.1,y:.04+o*.03,tw:.16,wf:2.4,rate:8,damp:.9}),r=0;break}case"walk":{const o=i.mvF<-.3?-1:1,c=Math.sin(e*5);a({lean:.16*o,roll:c*.06,twist:.25+c*.12,tw:.34,wf:7*o,tz:c*.25,aLx:-.3-c*.2,aRx:-.3+c*.2,aLz:.5,aRz:-.5,eL:-.6,eR:-.6,hair:.45,y:.07+Math.abs(c)*.03,rate:14}),r=0;break}case"dodge":{const o=i.dodgeSide,c=Math.sin(n*Math.PI);a(o?{roll:-o*.45*c,twist:.25+o*.5*c,tz:o*1*c,tw:.4,wf:9,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,hair:.7,rate:28}:{lean:-.3*c,tb:.6*c,tw:.35,wf:9,aLx:-1.4,aRx:-1.4,eL:-.6,eR:-.6,hair:.6,rate:28}),r=0;break}case"submerge":a({gnd:0,y:-2.6*Nt(n),lean:.1,twist:0,aLx:-2.8,aRx:-2.8,aLz:.2,aRz:-.2,eL:-.2,eR:-.2,tw:.5,wf:10,hair:1,film:1.7,rate:22}),r=Nt(n)*3;break;case"emerge":a({gnd:Nt(n),y:-2.2*(1-Nt(n)),twist:0,aLx:-2.4*(1-n)-.4,aRx:-2.4*(1-n)-.4,aLz:.5,aRz:-.5,hair:1-n*.7,film:1.7,tw:.45,wf:8,rate:26}),r=0;break;case"iaraSing":{const o=Math.sin(e*3);a({head:-.42,spine:-.15,lean:-.1,twist:0,aLx:-2.5,aRx:-2.5,aLz:.75+o*.1,aRz:-.75-o*.1,eL:-.3,eR:-.3,mouth:1,glow:1.5,hair:.9+o*.1,tw:.3,wf:4,y:.3+o*.05,film:1.5,rate:14}),r=0;break}case"iaraCoil":{const o=Math.sin(e*6);a({lean:.3,twist:0,tl:-1.1,tb:.7,tz:o*.2,tw:.25,wf:6,aLx:-1.6,aRx:-1.6,aLz:.3,aRz:-.3,eL:-.5,eR:-.5,hair:.6,mouth:.4,glow:.6,y:.45,film:1.5,rate:18}),r=0;break}case"iaraHurl":a({lean:.45,twist:-.7,spine:.25,tl:.8,tz:-.6,tw:.4,wf:9,aLx:-1.5,aRx:-1.5,aLz:.1,aRz:-.1,eL:-.05,eR:-.05,hair:1,film:1.5,rate:32}),r=0;break;case"grabbed":case"rooted":a({lean:-.25,head:-.3,aLx:-.4,aRx:-.3,eL:-1,eR:-1,tw:.3,wf:8,rate:20}),r=0;break;default:r=br(t,i,e,a,Vv)}if(r===null)switch(r=0,i.anim){case"finL":a(s===0?{aLx:-1.9,aLz:.9,eL:-1.2,twist:.7,lean:.05,tz:-.3}:s===1?{aLx:-1.5,aLz:-.4,eL:-.1,twist:-.5,lean:.25,tz:.35,hair:.4,rate:38}:{aLx:-.9,aLz:.2,eL:-.8,twist:0,lean:.15,rate:10});break;case"finR":a(s===0?{aRx:-1.9,aRz:-.9,eR:-1.2,twist:-.3,tz:.3}:s===1?{aRx:-1.5,aRz:.4,eR:-.1,twist:.9,lean:.25,tz:-.35,hair:.4,rate:38}:{aRx:-.9,aRz:-.2,eR:-.8,twist:.3,lean:.15,rate:10});break;case"tailWhip":r=An(i,-1,.5),a(s===0?{lean:.2,tb:.4,tz:.5,twist:.5,aLz:.8,aRz:-.8,hair:.3}:s===1?{lean:.35,spine:.2,tb:-.5,tl:1,tz:-.4,y:.35,aLz:1.1,aRz:-1.1,eL:-.3,eR:-.3,hair:1,tw:.3,rate:30}:{tl:.3*(1-n),lean:.2,rate:12});break;case"surge":a(s===0?{lean:-.1,tb:.5,aLx:-.8,aRx:-.8,aLz:.6,aRz:-.6,eL:-1.6,eR:-1.6,twist:0}:s===1?{lean:.5,spine:.2,tb:-.3,tw:.5,wf:12,aLx:-1.5,aRx:-1.5,aLz:.1,aRz:-.1,eL:-.1,eR:-.1,twist:0,hair:.9,rate:36}:{lean:.2,rate:10});break;case"charge":a(s===0?{lean:-.2,tb:.8,tw:.2,aLx:-.3,aRx:-.3,aLz:.8,aRz:-.8,eL:-1.4,eR:-1.4,twist:0,hair:.3}:s===1?{lean:.85,lc:.6,spine:.1,head:-.5,tb:-.4,tw:.6,wf:16,aLx:-2.6,aRx:-2.6,aLz:.15,aRz:-.15,eL:-.05,eR:-.05,twist:0,hair:1,y:.2,rate:32}:{lean:.3,tb:.2,rate:10});break;case"retreat":a(s===0?{lean:-.25,tb:.4,twist:-.4,tz:.6,aLz:.9,aRz:-.9}:s===1?{lean:-.2,twist:.7,tz:-1,tl:-.5,tw:.4,wf:12,aLz:.7,aRz:-1.2,eR:-.2,hair:.8,rate:36}:{lean:-.05,rate:10});break;case"waterArc":r=An(i,1,.35),a(s===0?{twist:.8,lean:-.05,aLx:-2.6,aRx:-2.2,aLz:.6,aRz:-.2,eL:-.4,eR:-.4,tb:.3}:s===1?{twist:-.5,lean:.3,spine:.2,aLx:-1,aRx:-1.3,aLz:-.3,aRz:-.8,eL:-.1,eR:-.1,tz:.7,tw:.4,arc:1,hair:.8,rate:32}:{arc:0,twist:0,rate:10});break;case"tailScrape":a(s===0?{lean:.2,tb:.7,twist:.6,tz:-.8}:s===1?{lean:.4,spine:.2,tb:.9,twist:-.7,tz:1.1,tw:.3,wf:12,aLz:.9,aRz:-.6,hnd:.2,rate:38}:{tb:.5,rate:10});break;case"aquaSweep":r=An(i,1,.4),a(s===0?{lean:.3,tb:1,tz:-.6,aLz:.8,aRz:-.8}:s===1?{lean:.45,spine:.2,tb:1.1,tz:.9,tw:.3,aLz:1.2,aRz:-1.2,eL:-.2,eR:-.2,arc:1,hair:.7,rate:30}:{tb:.5*(1-n),arc:0,rate:12});break;case"sing":a(s===0?{head:-.38,spine:-.12,lean:-.1,twist:0,aLx:-.9,aRx:-.9,aLz:-.5,aRz:.5,eL:-1.9,eR:-1.9,mouth:.5,glow:n*1.2,hair:.5*n,tw:.22,y:.1*n}:s===1?{head:-.15,spine:.1,lean:.15,twist:0,aLx:-1.6,aRx:-1.6,aLz:.6,aRz:-.6,eL:-.2,eR:-.2,mouth:1,glow:1.5,hair:.9,y:.1,rate:30}:{mouth:.3*(1-n),glow:.4*(1-n),twist:0,aLx:-1,aRx:-1,eL:-.6,eR:-.6});break;case"current":a(s===0?{twist:.9,lean:.05,tb:.5,tz:-.6,aLx:-.6,aRx:-.4,aLz:1,aRz:.4,eL:-1.2,eR:-1.4,hair:.3,film:1.3}:s===1?{twist:-.3,lean:.5,spine:.3,tb:.6,tl:.3,tz:.5,aLx:-1.1,aRx:-1.1,aLz:.2,aRz:-.2,eL:-.1,eR:-.1,hair:.6,arc:.8,film:1.6,rate:38}:{twist:0,lean:.25,aLx:-.8,aRx:-.8,arc:0,rate:10});break;case"superstart":case"superprep":{const o=Math.sin(e*9);a({head:-.4,spine:-.1,twist:0,lean:-.05,aLx:-2.6,aRx:-2.6,aLz:.5+o*.15,aRz:-.5-o*.15,eL:-.4,eR:-.4,mouth:.8,glow:1.2,hair:1,tw:.35,wf:6,y:.15,film:1.6});break}case"win":{const o=Math.sin(e*2);a({head:-.3,twist:0,aLx:-1.8+o*.2,aRx:-1.6-o*.2,aLz:1,aRz:-1,eL:-.4,eR:-.4,mouth:.6+o*.3,glow:.6,hair:.5+o*.2,tw:.3,wf:3,y:.12+o*.04,film:1.3});break}}return(i.anim==="air"||i.anim==="down"||i.anim==="ko"||i.anim==="getup")&&(t.tb=-.9,t.tl=0,t.film=i.anim==="getup"?n:0),t.spin=r,t}function Hv(){const i=Ee(10119752,{roughness:.5}),e=Ee(1014357,{roughness:.32,metalness:.35,emissive:735834,emissiveIntensity:.35}),t=Ee(675644,{roughness:.4,metalness:.3,emissive:402490,emissiveIntensity:.3}),n=Ee(4177824,{roughness:.3,metalness:.4,emissive:1731226,emissiveIntensity:.45}),s=Ee(4175560,{roughness:.25,metalness:.2,transparent:!0,opacity:.85,side:pt,emissive:871018,emissiveIntensity:.5}),a=Ee(461068,{roughness:.5,metalness:.15}),r=Ee(15260096,{roughness:.4}),o=Ee(16052458,{roughness:.2,metalness:.3}),c=Ee(15899320,{roughness:.6,side:pt}),l=Ee(3107642,{roughness:.9,side:pt}),h=Ee(7223862,{roughness:.5}),u=new kt({color:9433343}),p=($,ie)=>new kt({color:$,transparent:!0,opacity:ie,depthWrite:!1,blending:Ui,side:pt,fog:!1}),d=new at,g=Te(d),v=Te(g,0,1.05,0),m=Te(d,0,.03,0),f=p(7327976,.26),y=P(m,new Bt(.95,28),f);y.rotation.x=-ze,y.castShadow=!1;const S=[];for(let $=0;$<2;$++){const ie=P(m,new Xn(.72,.78,32),p(12580095,.3),0,.01,0);ie.rotation.x=-ze,ie.castShadow=!1,S.push(ie)}P(v,me(.2),e,0,-.02,0).scale.set(1.15,.8,.9),P(v,We(.19,.21,.14,14),i,0,.09,0).scale.z=.82;for(let $=0;$<14;$++){const ie=$/14*Dt,pe=P(v,me(.05),$%2?n:e,Math.sin(ie)*.2,.06+$%3*.02,Math.cos(ie)*.165);pe.scale.set(1,.6,.4),pe.rotation.y=ie}for(let $=0;$<10;$++){const ie=$/10*Dt,pe=.18+Math.random()*.12,Ye=P(v,new nt(.05,pe,4),l,Math.sin(ie)*.21,-.02-pe/2,Math.cos(ie)*.18);Ye.rotation.set(-.2,ie,Math.PI,"YXZ"),Ye.scale.z=.3}const _=.3,T=[.2,.175,.145,.11,.075],w=[];let A=v;for(let $=0;$<5;$++){const ie=Te(A,0,$?-_:-.05,0);if(w.push(ie),P(ie,Lt(T[$],Math.max(.05,_-T[$]*.8)),$%2?e:t,0,-_/2,0).scale.z=.82,P(ie,me(T[$]*.72),n,0,-_/2,T[$]*.42).scale.set(1,2,.5),$>0&&$<4){const pe=P(ie,new nt(.06,.2,3),s,0,-_/2,-T[$]*.85);pe.rotation.x=-2.3,pe.scale.x=.25}if($===3)for(const pe of[1,-1]){const Ye=P(ie,new nt(.06,.22,3),s,pe*T[$],-_*.4,0);Ye.rotation.z=pe*2.3,Ye.scale.z=.2}A=ie}const R=Te(w[4],0,-_,0);for(const $ of[1,-1]){const ie=$*(Math.PI-.55),pe=P(R,new nt(.17,.58,4),s,-Math.sin(ie)*.27,Math.cos(ie)*.27,0);pe.rotation.z=ie,pe.scale.z=.18}const x=Te(v,0,.1,0);P(x,We(.16,.19,.26,12),i,0,.12,0).scale.z=.78,P(x,me(.19),i,0,.36,0).scale.set(1.2,.95,.78);for(const $ of[1,-1])P(x,me(.085),r,$*.085,.37,.12).scale.set(1,.85,.5),P(x,me(.08),i,$*.25,.46,0);P(x,tt(.17,.008),o,0,.37,0).rotation.x=ze;for(let $=0;$<11;$++){const ie=($/10-.5)*2.4;P(x,me($%3?.02:.03),$%3?o:r,Math.sin(ie)*.15,.52-Math.cos(ie)*.07,.04+Math.cos(ie)*.11)}P(x,We(.055,.062,.1),i,0,.6,0);const M=Te(x,0,.7,0);P(M,me(.112),i).scale.set(.9,1.06,.96),P(M,me(.055),i,0,-.07,.045).scale.set(1.05,.8,1);for(const $ of[1,-1])P(M,me(.017),u,$*.04,.012,.098).scale.set(1.2,.8,.6),P(M,new nt(.03,.09,3),s,$*.11,0,-.01).rotation.z=-$*1.3;const D=P(M,me(.022),h,0,-.072,.098);D.scale.set(1.3,.5,.5),P(M,me(.124),a,0,.03,-.02).scale.set(1,.95,1.02);const H=[];for(let $=0;$<15;$++){const ie=Math.PI+($/14-.5)*3.4,pe=.36+Math.random()*.1,Ye=.34+Math.random()*.16,Xe=.05+Math.random()*.025,ut=Te(M,Math.sin(ie)*.1,.04,Math.cos(ie)*.1);ut.rotation.z=Math.sin(ie)*.3,P(ut,Lt(Xe,pe),a,0,-pe/2,0).scale.z=.55;const N=Te(ut,0,-pe,0);P(N,new nt(Xe*1.1,Ye,5),a,0,-Ye/2,0).rotation.x=Math.PI,H.push([ut,N,.12+Math.random()*.1+Math.max(0,-Math.cos(ie))*.1,Math.random()*6])}const F=Te(M,.09,.09,.03);for(let $=0;$<6;$++){const ie=P(F,new nt(.03,.08,3),c,Math.sin($)*.03,0,Math.cos($)*.03);ie.rotation.set(Math.cos($)*.9,0,-Math.sin($)*.9),ie.scale.z=.3}P(F,me(.018),Ee(16769658,{roughness:.5}));const G=$=>{const ie=Te(x,$*.27,.47,0);P(ie,Lt(.06,.2),i,0,-.14,0),P(ie,tt(.066,.014),n,0,-.1,0).rotation.x=ze;const pe=Te(ie,0,-.3,0);P(pe,Lt(.05,.19),i,0,-.13,0);const Ye=P(pe,new nt(.06,.26,3),s,$*.02,-.1,-.07);return Ye.rotation.x=.3,Ye.scale.x=.2,P(pe,tt(.055,.01),o,0,-.22,0).rotation.x=ze,P(pe,me(.05),i,0,-.3,0).scale.set(.8,1.1,.6),[ie,pe]},[O,z]=G(1),[K,k]=G(-1),J=p(9431295,0),Q=P(g,new pn(1,.07,6,24,Math.PI),J);Q.castShadow=!1,Q.visible=!1;const Z=[];for(let $=0;$<3;$++){const ie=P(M,new pn(.1,.012,4,20),p(13170431,0),0,-.06,.16);ie.castShadow=!1,Z.push(ie)}const de=yr(ad),le=de.cur,W=[.05,.12,.32,.85,1.3],se=[.05,.15,.3,.4,.3],oe={root:d,mover:g,hands:[],body:[[M,st(0,.2,0)]],feet:[[w[2],st(0,-_,0)],[w[3],st(0,-_*.5,0)],[w[3],st(0,-_,0)],[w[4],st(0,-_*.5,0)],[w[4],st(0,-_,0)],[R,st(0,-.25,0)]]};let ae=0;return{root:d,cur:le,flameK:0,snap($,ie){de.snap(Lh($,ie))},update($,ie,pe){const Ye=Lh($,pe);de.step(Ye,ie,Hc(Ye,$)),ae+=Math.max(0,ie)*le.wf,g.rotation.y=le.spin+($.spinExtra||0),g.scale.setScalar(Math.max(.001,le.sc)),d.visible=le.sc>.03,v.rotation.set(le.lean,le.twist*.25,le.roll),x.rotation.set(le.spine,le.twist*.75,0),M.rotation.set(le.head,-le.twist*.5+le.hy,0),O.rotation.set(le.aLx,0,le.aLz),z.rotation.x=le.eL,K.rotation.set(le.aRx,0,le.aRz),k.rotation.x=le.eR;const Xe=le.lean*le.lc;for(let et=0;et<5;et++){const Be=Math.sin(ae-et*1.05)*le.tw*(.5+et*.25);w[et].rotation.x=W[et]+le.tb*se[et]+Be*.6+(et===0?le.tl-Xe:0),w[et].rotation.z=le.tz*(.15+et*.1)+Math.sin(ae*.5-et*.9)*le.tw*.3*et}R.rotation.x=Math.sin(ae-5.2)*le.tw*.9;for(const[et,Be,Ke,Ie]of H)et.rotation.x=Math.max(-.2,Ke+le.hair*.9-le.head*.7-le.spine*.6-le.lean*.6)+Math.sin(pe*1.8+Ie)*(.04+le.hair*.06),Be.rotation.x=.1+le.hair*.5+Math.sin(pe*2.3+Ie)*(.06+le.hair*.1);D.scale.y=.5+pi(le.mouth)*1.6;const ut=Math.max(0,le.glow);for(let et=0;et<3;et++){const Be=hi(pe*1.7+et/3),Ke=Z[et];Ke.visible=ut>.05,Ke.visible&&(Ke.position.z=.16+Be*.55,Ke.scale.setScalar(1+Be*2.5),Ke.material.opacity=Math.min(1,ut)*(1-Be)*.8)}Q.visible=le.arc>.03,Q.visible&&(J.opacity=Math.min(1,le.arc)*.7,$.anim==="waterArc"?(Q.position.set(0,.55,.75),Q.rotation.set(0,0,0),Q.scale.setScalar(1.25)):(Q.position.set(0,.2,$.anim==="current"?1:.3),Q.rotation.set(-ze,0,pe*7),Q.scale.setScalar($.anim==="current"?.9:1.7))),Sr(oe,le,0),g.position.y+=.08*pi(le.gnd);const N=Math.max(0,le.film);if(m.visible=N>.03,m.visible){f.opacity=.24*Math.min(1.6,N),y.scale.setScalar(.85+N*.15+Math.sin(pe*2)*.04);for(let et=0;et<2;et++){const Be=hi(pe*.6+et*.5);S[et].scale.setScalar(.5+Be*(.7+N*.3)),S[et].material.opacity=(1-Be)*.32*Math.min(1.5,N)}}}}}const rd={y:0,lean:.05,twist:.2,roll:0,spine:.05,head:-.05,aLx:-.3,aLz:.15,eL:-.5,aRx:-.35,aRz:-.15,eR:-.6,lLx:-.15,lLz:.06,kL:.35,lRx:.05,lRz:-.06,kR:.3,lc:1,jaw:0,tail:0,tailP:0,tf:0,dol:0,hat:0,glint:0,sc:1,spin:0,gnd:1,hnd:0,hy:0,rate:14},Gv={breath:2.8,gait:9,lie:.84};function Wv(i,e){const t={...rd},n=i.pk,s=i.phase,a=o=>Object.assign(t,o);let r=null;switch(i.anim){case"idle":{const o=Math.sin(e*2.2);a({roll:o*.06,twist:.2+Math.sin(e*1.1)*.15,hy:-Math.sin(e*1.1)*.1,lLx:-.15+o*.08,lRx:.05-o*.08,kL:.35+Math.max(0,o)*.2,kR:.3+Math.max(0,-o)*.2,aLx:-.3+o*.06,aRx:-.35-o*.06,y:Math.abs(o)*.015,rate:10,damp:.88}),r=0;break}case"walk":{const o=Math.sin(e*9),c=Math.cos(e*9);a({lLx:o*.5,lRx:-o*.5,kL:.25+Math.max(0,c)*.8,kR:.25+Math.max(0,-c)*.8,lLz:.06+Math.max(0,o)*.14,lRz:-.06-Math.max(0,-o)*.14,roll:o*.08,twist:.2+o*.22,aLx:-.3-o*.35,aRx:-.35+o*.35,aLz:.25,aRz:-.25,y:Math.abs(c)*.035,head:-.05-o*.04,rate:16}),r=0;break}case"dodge":{const o=i.dodgeSide,c=Math.sin(n*Math.PI);o?(a({roll:-o*.2*c,lean:.1,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,lLx:-.4,kL:.7,lRx:.3,kR:.5,rate:30}),r=-o*Dt*Nt(n)):(a({lean:-.25*c,aLx:-.6,aRx:-.6,aLz:.6,aRz:-.6,lLx:.4,kL:.5,rate:28}),r=0);break}case"dance":i.cphase===0?(a({lean:.05,roll:i.dodgeSide*.15,aLx:-.2,aLz:1.3,eL:-.2,aRx:-2.6,aRz:-.3,eR:-1.7,lLx:-.6,kL:1,lRx:.3,kR:.3,y:.06,rate:30}),r=i.dodgeSide*Dt*Nt(n)):(a({aLz:.8,aRz:-.5,rate:14}),r=0);break;case"transform":a({head:-.5,spine:-.15,lean:-.1,twist:0,aLz:1.2,aRz:-1.2,aLx:-.5,aRx:-.5,eL:-.3,eR:-.3,tf:Nt(n),y:Math.abs(Math.sin(e*30))*.03*(1-n),rate:22}),r=0;break;case"feint":a({lean:-.25,twist:.9,spine:-.1,aRx:-2.6,aRz:-.6,eR:-1.4,aLx:-.8,aLz:.7,eL:-.6,lLx:-.6,kL:.7,lRx:.4,kR:.3,glint:1,head:-.25,rate:18}),r=0;break;case"baile":{const o=Math.sin(e*6),c=Math.cos(e*6);a({roll:o*.12,twist:o*.5,lLx:o*.6,lRx:-o*.6,kL:.4+Math.max(0,o)*.6,kR:.4+Math.max(0,-o)*.6,aLx:-.5,aLz:1.1+o*.3,eL:-.4,aRx:-1.6,aRz:-.4,eR:-1-c*.3,y:Math.abs(c)*.05,rate:18}),r=Math.sin(e*3)*.7;break}case"hatOff":a({hat:1,aRx:-1.3,aRz:-1,eR:-.3,aLz:.5,aLx:-.2,head:-.15,lean:.1,twist:-.2,rate:16}),r=0;break;case"reveal":a({hat:1,tf:1,aLz:1.4,aRz:-1.4,aLx:-.6,aRx:-.6,eL:-.3,eR:-.3,head:-.55,spine:-.2,lean:-.12,twist:0,y:Math.abs(Math.sin(e*24))*.03,rate:20}),r=0;break;case"dolphin":a({dol:1,tf:1,hat:1,gnd:0,rate:30}),r=0;break;case"botoCharge":a({tf:1,hat:1,lean:.75,head:-.7,aLx:.45,aRx:.45,aLz:.15,aRz:-.15,eL:0,eR:0,lLx:-.5,kL:.3,lRx:.8,kR:.4,twist:0,rate:30}),r=0;break;case"grabbed":case"rooted":a({lean:-.25,head:-.3,aLx:-.4,aRx:-.3,eL:-1,eR:-1,kL:.6,kR:.5,rate:20}),r=0;break;default:r=br(t,i,e,a,Gv)}if(r===null)switch(r=0,i.anim){case"slap":a(s===0?{aRx:-1.4,aRz:-.9,eR:-1.2,twist:.5}:s===1?{aRx:-1.5,aRz:.5,eR:-.2,twist:-.6,lean:.15,rate:40}:{aRx:-.8,aRz:-.2,eR:-.7,twist:0,rate:12});break;case"backhand":a(s===0?{aLx:-1.5,aLz:-.4,eL:-1.6,twist:-.3}:s===1?{aLx:-1.4,aLz:1,eL:-.2,twist:.7,lean:.15,rate:40}:{aLx:-.7,aLz:.4,eL:-.7,twist:.3,rate:12});break;case"elbow":a(s===0?{aRx:-1.2,aRz:-.2,eR:-2.4,twist:.7}:s===1?{aRx:-1.4,aRz:.7,eR:-2.5,twist:-.6,lean:.25,lLx:-.5,kL:.6,rate:40}:{aRx:-.6,eR:-1.2,twist:0,rate:12});break;case"shoulder":r=An(i,1,.35),a(s===0?{lean:.25,aLz:.2,aRz:-.2,eL:-2,eR:-2,kL:.8,kR:.8}:s===1?{lean:.35,aLz:1.3,aRz:-1.3,eL:-.2,eR:-.2,kL:.5,kR:.5,rate:34}:{rate:12});break;case"danceStep":a(s===0?{lLx:-.7,kL:1.1,aLz:.9,aRz:-.9,lean:-.05,y:.04}:s===1?{lLx:-.9,kL:.3,lRx:.6,kR:.2,lean:.3,aRx:-1.5,eR:-.1,aLz:1.1,twist:.5,rate:36}:{lean:.1,rate:12});break;case"dolphinCharge":a(s===0?{lean:.2,kL:1.1,kR:1,aLx:.4,aRx:.4,head:-.3,tf:.6}:s===1?{lean:1,lLx:.5,lRx:.7,kL:.2,kR:.2,aLx:.5,aRx:.5,aLz:.15,aRz:-.15,eL:0,eR:0,tf:1,head:-.9,y:.2,rate:30}:{lean:.2,tf:.4,rate:10});break;case"backSpin":r=An(i,-1,.3),a(s===0?{aLz:.5,aRz:-.5,lean:-.1}:s===1?{aRz:-1.4,aRx:-1.5,eR:-.1,lean:-.1,rate:34}:{rate:12});break;case"counterElbow":a(s===0?{lean:-.25,roll:.25,twist:-.6,aLx:-1,eL:-2.2,lLx:.3,kL:.6,lRx:-.5,kR:.9,y:.05,rate:34}:s===1?{twist:.8,aLx:-1.4,aLz:-.6,eL:-2.4,lean:.3,rate:40}:{twist:.2,rate:12});break;case"legSweep":a(s===0?{kL:1.4,kR:1.5,lean:.3,lLx:-.6}:s===1?{lLx:-1.2,lLz:.9,kL:.1,kR:1.7,lRx:-.3,lean:.35,twist:.6,aLz:.9,hnd:.3,rate:38}:{kL:.8,kR:.9,rate:12});break;case"spinSweep":r=An(i,1,.4),a(s===0?{kL:1.4,kR:1.5,lean:.3}:s===1?{lLx:-.9,lLz:1.1,kL:.1,lRx:-.4,kR:1.8,lean:.3,hnd:.5,aLz:.5,aRz:-1,rate:32}:{kL:.8,kR:.9,rate:12});break;case"superstart":case"superprep":a({aRx:-2.6,aRz:-.3,eR:-1.7,aLz:.9,aLx:-.3,eL:-.4,head:-.1,twist:.1,glint:1,y:Math.abs(Math.sin(e*6))*.03,rate:16});break;case"win":{const o=Math.sin(e*2);a({hat:1,lean:.35+o*.05,aRx:-1.2,aRz:-.9,eR:-.4,aLx:.3,aLz:.2,eL:-1.4,lLx:-.2,lRx:.4,twist:0});break}}return i.skin>0&&i.anim!=="dolphin"&&(t.tf=Math.max(t.tf,1)),t.spin=r,t}function qv(){const i=Ee(13146234,{roughness:.5,emissive:16740250,emissiveIntensity:0}),e=Ee(15921126,{roughness:.85}),t=Ee(14275782,{roughness:.9}),n=Ee(3811872,{roughness:.6}),s=Ee(13215834,{metalness:.8,roughness:.3}),a=Ee(15129800,{roughness:.5}),r=Ee(16184298,{roughness:.7}),o=Ee(1840150,{roughness:.4,emissive:16773824,emissiveIntensity:0}),c=Ee(1577230,{roughness:.6}),l=Ee(1182730,{roughness:1}),h=Ee(14183050,{roughness:.7}),u=Ee(15768242,{roughness:.35,emissive:8006212,emissiveIntensity:.25}),p=Ee(2365972,{roughness:.2}),d=new at,g=Te(d),v=Te(g,0,1,0);P(v,me(.18),e,0,.02,0).scale.set(1.2,.85,.9),P(v,tt(.19,.025),n,0,.08,0).rotation.x=ze,P(v,new ft(.06,.045,.02),s,0,.08,.19);const m=oe=>{const ae=Te(v,oe*.11,-.05,0);P(ae,Lt(.09,.3),e,0,-.23,0);const $=Te(ae,0,-.46,0);return P($,me(.08),t),P($,Lt(.08,.28),e,0,-.2,0),P($,We(.085,.1,.08,10),t,0,-.36,0),P($,new ft(.11,.07,.27),a,0,-.455,.055),P($,me(.055),a,0,-.45,.17).scale.set(1,.6,1.2),[ae,$]},[f,y]=m(1),[S,_]=m(-1),T=Te(v,0,.08,0);P(T,We(.165,.15,.28,12),e,0,.13,0).scale.z=.8,P(T,me(.19),e,0,.37,0).scale.set(1.25,.95,.8);const w=P(T,new nt(.07,.16,3),i,0,.47,.13);w.rotation.x=Math.PI,w.scale.z=.3,P(T,tt(.075,.02),h,0,.56,.02).rotation.x=ze-.3;for(let oe=0;oe<3;oe++)P(T,me(.012),t,0,.32-oe*.08,.155);for(const oe of[1,-1])P(T,me(.085),e,oe*.26,.47,0),P(T,new ft(.06,.16,.012),t,oe*.06,.44,.15).rotation.z=oe*.35;const A=P(T,new nt(.1,.3,4),u,0,.42,-.15);A.rotation.x=-.7,P(T,We(.055,.06,.1),i,0,.6,0);const R=Te(T,0,.7,0);P(R,me(.112),i).scale.set(.92,1.06,.98),P(R,me(.055),i,0,-.07,.045).scale.set(1.05,.8,1);const x=Te(R,0,-.02,.1),M=P(x,new nt(.028,.09,8),i,0,0,.035);M.rotation.x=ze;for(const oe of[1,-1])P(R,me(.015),p,oe*.042,.015,.1),P(R,new ft(.045,.01,.015),c,oe*.042,.045,.1).rotation.z=-oe*.15,P(R,new ft(.045,.01,.012),c,oe*.024,-.05,.108).rotation.z=oe*.35;P(R,me(.116),c,0,.03,-.025).scale.set(1,.85,1),P(R,new Bt(.026,10),l,0,.131,-.01).rotation.x=-ze;const D=oe=>{const ae=Te(oe);return P(ae,We(.22,.22,.014,22),r),P(ae,We(.11,.125,.13,16),r,0,.07,0),P(ae,We(.128,.128,.032,16),o,0,.024,0),P(ae,new ft(.12,.01,.05),r,0,.138,0),ae},H=D(R);H.position.set(0,.11,-.005),H.rotation.set(-.08,0,.1);const F=[],G=oe=>{const ae=Te(T,oe*.28,.47,0);P(ae,Lt(.068,.2),e,0,-.14,0);const $=Te(ae,0,-.3,0);P($,Lt(.058,.14),e,0,-.1,0),P($,We(.064,.06,.06,10),t,0,-.19,0),P($,Lt(.045,.06),i,0,-.24,0),P($,me(.052),i,0,-.31,0).scale.set(.8,1.1,.7);const ie=P($,new nt(.05,.2,4),u,oe*.06,-.14,-.03);return ie.rotation.z=oe*2.4,F.push(ie),[ae,$]},[O,z]=G(1),[K,k]=G(-1),J=D(k);J.position.set(0,-.36,.1),J.rotation.set(ze,0,0),J.visible=!1;const Q=Te(g,0,.9,0);Q.visible=!1,P(Q,Lt(.28,.95),u).rotation.x=ze,P(Q,me(.25),u,0,.05,.62).scale.set(1,1.05,1.1),P(Q,new nt(.065,.48,8),u,0,-.02,1.02).rotation.x=ze;for(const oe of[1,-1]){P(Q,me(.025),p,oe*.17,.02,.76);const ae=P(Q,new nt(.08,.3,4),u,oe*.25,-.15,.3);ae.rotation.set(.5,0,oe*2.2),ae.scale.z=.25}const Z=P(Q,new nt(.12,.18,4),u,0,.3,-.05);Z.rotation.x=-.5,Z.scale.x=.25;const de=Te(Q,0,0,-.72);for(const oe of[1,-1]){const ae=oe*(ze+.35),$=P(de,new nt(.12,.4,4),u,-Math.sin(ae)*.2,0,-.08);$.rotation.set(ze,0,ae),$.scale.z=.2}const le=[[y,st(0,-.49,.2)],[y,st(0,-.49,-.07)],[_,st(0,-.49,.2)],[_,st(0,-.49,-.07)]];let W=null;const se=new it(15768242);return Gc({root:d,spinG:g,hips:v,spine:T,head:R,shL:O,elL:z,shR:K,elR:k,lL:f,kL:y,lR:S,kR:_,feet:le,hands:[[z,st(0,-.36,0)],[k,st(0,-.36,0)]]},rd,Wv,(oe,ae,$)=>{const ie=pi(oe.tf),pe=Math.max(.001,ie);W||(W=i.color.clone()),i.color.copy(W).lerp(se,ie*.85),i.emissiveIntensity=ie*.12,M.scale.set(1+ie*.3,1+ie*2.4,1+ie*.3),M.position.z=.035+ie*.1,A.visible=ie>.02,A.scale.set(.25*pe,pe,pe);for(const ut of F)ut.visible=ie>.02,ut.scale.set(pe,pe,.25*pe);const Ye=oe.hat>.5;H.visible=!Ye,J.visible=Ye,o.emissiveIntensity=pi(oe.glint)*(1.2+Math.sin($*30)*.6);const Xe=oe.dol>.5;v.visible=!Xe,Q.visible=Xe,Xe&&(Q.rotation.x=Math.sin($*5)*.35,de.rotation.x=Math.sin($*10)*.5)})}const Di={saci:{name:"SACI",hp:90,speed:5.4,radius:.45,turn:16,mass:1,hitY:1.3,tagY:2.3,super:"VOADORA DO REDEMOINHO",dodge:{t:.3,dist:2.4,ev:[0,.22],cd:.5}},mula:{name:"MULA SEM CABEÇA",hp:130,speed:3.3,radius:.95,turn:5.5,mass:3,hitY:1.4,tagY:2.9,super:"FOGO DA CONDENAÇÃO",dodge:{t:.42,dist:1.9,ev:[.04,.26],cd:.8}},curupira:{name:"CURUPIRA",hp:100,speed:5,radius:.45,turn:14,mass:1,hitY:1.25,tagY:2.35,super:"JULGAMENTO DA FLORESTA",dodge:{t:.3,dist:2.3,ev:[.02,.22],cd:.55}},cuca:{name:"CUCA",hp:115,speed:3.6,radius:.6,turn:8,mass:2,hitY:1.3,tagY:2.55,super:"ÚLTIMO PESADELO",dodge:{t:.4,dist:1.9,ev:[.05,.25],cd:.75}},iara:{name:"IARA",hp:105,speed:4.2,radius:.55,turn:10,mass:1.5,hitY:1.3,tagY:2.55,super:"CHAMADO DAS PROFUNDEZAS",dodge:{t:.36,dist:2.1,ev:[.03,.24],cd:.65}},boto:{name:"BOTO",hp:100,speed:4.9,radius:.45,turn:15,mass:1.1,hitY:1.3,tagY:2.4,super:"O ÚLTIMO BAILE",dodge:{t:.28,dist:2.5,ev:[0,.24],cd:.45}}},Rn=["saci","mula","curupira","cuca","iara","boto"],tn={buffer:.28,tap:.2,perfect:.13,perfectStagger:.5,counterDmg:1.2,counterStun:.12,scale:.1,scaleMin:.35,maxHits:7,maxJuggle:2,breakWindow:.36,chip:.15},Fn={saci:{light1:{name:"Soco",h:"high",t:[.07,.08,.17],dmg:4,range:1.25,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"punchL",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Cruzado",h:"mid",t:[.06,.08,.19],dmg:4,range:1.3,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"punchR",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Cotovelada",h:"mid",t:[.1,.08,.26],dmg:6,range:1.35,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"elbow",next:{K:"heavy",L:"@"}},heavy:{name:"Giro de perna",h:"high",t:[.2,.12,.36],dmg:11,range:1.75,arc:1.3,stun:.5,bstun:.22,push:7,launch:4.8,anim:"spinkick",lunge:3,track:!0},fLight:{name:"Pulo-soco",h:"mid",t:[.16,.1,.2],dmg:6,range:1.45,arc:.9,stun:.38,bstun:.26,push:2,lunge:6,anim:"hopPunch",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Martelo",h:"mid",t:[.3,.1,.42],dmg:13,range:1.65,arc:.8,stun:.5,bstun:.22,push:3,launch:2.6,lunge:2.5,anim:"axe"},bLight:{name:"Tapa de recuo",h:"high",t:[.14,.08,.2],dmg:5,range:1.75,arc:.9,stun:.4,bstun:.2,push:3,lunge:-3.5,anim:"slap",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Meia-lua",h:"high",t:[.24,.14,.34],dmg:9,range:1.9,arc:2.4,stun:.45,bstun:.4,push:9,anim:"meialua",track:!0},dLight:{name:"Canelada",h:"low",t:[.1,.08,.2],dmg:3,range:1.3,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"lowJab",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira",h:"low",t:[.3,.12,.5],dmg:9,range:1.7,arc:1.6,stun:.5,bstun:.2,push:2,launch:2.2,anim:"sweep",track:!0},mid:{name:"Redemoinho",h:"mid",t:[.32,.06,.42],spawn:"tornado",anim:"whirl",cd:1.6},special:{name:"Voadora",h:"mid",custom:"voadora",cd:1.2},def:{name:"Sumiu no vento",custom:"teleport",cost:20,cd:3},grab:{name:"Derrubada",grab:!0,t:[.2,.05,.42],range:.75,dmg:12,launch:3,push:5,anim:"grab"}},mula:{light1:{name:"Patada",h:"high",t:[.14,.1,.26],dmg:6,range:2.1,arc:.7,stun:.4,bstun:.3,push:3.5,anim:"hoofL",next:{J:"light2",K:"heavy",fJ:"fLight",dK:"dHeavy"}},light2:{name:"Patada dupla",h:"mid",t:[.13,.1,.3],dmg:7,range:2.1,arc:.7,stun:.46,bstun:.3,push:4.5,lunge:2.5,anim:"hoofR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy"}},heavy:{name:"Pisão",h:"mid",t:[.38,.12,.48],dmg:16,range:2.35,arc:.8,stun:.6,bstun:.26,push:5,launch:3.6,anim:"stomp",lunge:1.5,quake:!0},fLight:{name:"Peitada",h:"mid",t:[.16,.12,.28],dmg:7,range:2.2,arc:.8,stun:.42,bstun:.34,push:4,lunge:5,anim:"check",next:{J:"light2",fK:"fHeavy",dK:"dHeavy"}},fHeavy:{name:"Investida",h:"mid",t:[.38,.36,.55],dmg:15,range:2.3,arc:.7,stun:.5,bstun:.28,push:8,launch:4.2,rush:9,armor:!0,anim:"chargeAtk"},bLight:{name:"Patada de recuo",h:"high",t:[.18,.1,.26],dmg:6,range:2.35,arc:.7,stun:.42,bstun:.3,push:4,lunge:-3,anim:"hoofR",next:{K:"heavy"}},bHeavy:{name:"Empinada",h:"mid",t:[.5,.12,.55],dmg:19,range:2.5,arc:.8,stun:.6,bstun:.4,push:6,launch:5.2,lunge:-1.5,chip:.3,anim:"rear",quake:!0},dLight:{name:"Raspada",h:"low",t:[.16,.1,.26],dmg:5,range:2.1,arc:.8,stun:.58,bstun:.22,push:2,anim:"scrape",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida",h:"low",t:[.4,.14,.56],dmg:12,range:2.4,arc:1.5,stun:.5,bstun:.22,push:3,launch:2.2,anim:"lowsweep",track:!0},mid:{name:"Coice",h:"mid",t:[.3,.1,.46],dmg:14,range:2.5,arc:1,stun:.5,bstun:.24,push:10,launch:4.6,anim:"coice",kick:!0,cd:.8},special:{name:"Inferno",h:"mid",t:[.65,.55,.5],anim:"fire",beam:!0,cd:2.5},def:{name:"Poeira",h:"mid",t:[.12,.2,.36],dmg:3,range:3.6,arc:1,stun:.45,bstun:.24,push:12,anim:"dust",dustFx:!0,cd:2.5,track:!0},grab:{name:"Prensada",grab:!0,t:[.28,.05,.5],range:.8,dmg:16,launch:3.4,push:7,anim:"grab"}},curupira:{light1:{name:"Palma",h:"high",t:[.08,.08,.18],dmg:4,range:1.5,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"palm",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Cotovelo",h:"mid",t:[.07,.08,.2],dmg:6,range:1.5,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"elbowR",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Calcanhar torto",h:"mid",t:[.11,.09,.26],dmg:7,range:1.6,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"heel",next:{K:"heavy",L:"@"}},heavy:{name:"Chute rodado",h:"high",t:[.21,.12,.36],dmg:12,range:1.85,arc:1.3,stun:.5,bstun:.22,push:7,launch:4.6,anim:"spinkick",lunge:2.5,track:!0},fLight:{name:"Passo torto",h:"mid",t:[.15,.1,.2],dmg:5,range:1.5,arc:.9,stun:.38,bstun:.26,push:2,lunge:6.5,anim:"stepIn",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Machado de calcanhar",h:"mid",t:[.3,.1,.42],dmg:13,range:1.7,arc:.8,stun:.5,bstun:.22,push:3,launch:2.6,lunge:2.5,anim:"axe"},bLight:{name:"Coice de recuo",h:"high",t:[.15,.08,.22],dmg:5,range:1.9,arc:.9,stun:.4,bstun:.2,push:3.5,lunge:-3.5,anim:"backKick",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Giro da mata",h:"high",t:[.25,.14,.34],dmg:9,range:2,arc:2.4,stun:.45,bstun:.4,push:9,anim:"wheel",track:!0},dLight:{name:"Pisada torta",h:"low",t:[.1,.08,.2],dmg:3,range:1.4,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"lowStep",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira de calcanhar",h:"low",t:[.3,.12,.5],dmg:10,range:1.85,arc:1.6,stun:.5,bstun:.2,push:2,launch:2.2,anim:"sweep",track:!0},mid:{name:"Lâmina da Mata",h:"mid",t:[.22,.06,.36],spawn:"leaf",anim:"blade",cd:1.5},special:{name:"Ira da Floresta",h:"low",t:[.34,.1,.52],spawn:"roots",anim:"roots",cd:5},def:{name:"Caminho Invertido",custom:"invert",cd:3.5},grab:{name:"Laço de cipó",grab:!0,t:[.2,.05,.42],range:.8,dmg:12,launch:3,push:5,anim:"grab"}},cuca:{light1:{name:"Garra",h:"high",t:[.13,.1,.26],dmg:5,range:1.9,arc:.8,stun:.4,bstun:.28,push:3,anim:"clawL",next:{J:"light2",K:"heavy",fJ:"fLight",dK:"dHeavy"}},light2:{name:"Garra cruzada",h:"mid",t:[.13,.1,.3],dmg:6,range:1.95,arc:.8,stun:.5,bstun:.28,push:3.5,lunge:2,anim:"clawR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy"}},heavy:{name:"Rabada",h:"mid",t:[.34,.14,.46],dmg:14,range:2.6,arc:1.6,stun:.55,bstun:.26,push:8,launch:3.8,anim:"tailSwing",track:!0},fLight:{name:"Bote",h:"mid",t:[.2,.1,.3],dmg:7,range:2,arc:.8,stun:.42,bstun:.3,push:3,lunge:5,anim:"snap",next:{J:"light2",fK:"fHeavy",dK:"dHeavy"}},fHeavy:{name:"Mordida",h:"mid",t:[.44,.12,.52],dmg:17,range:2.1,arc:.8,stun:.6,bstun:.26,push:5,launch:3,lunge:1.5,chip:.3,anim:"bite"},bLight:{name:"Arranhão de recuo",h:"high",t:[.18,.1,.26],dmg:5,range:2.2,arc:.8,stun:.42,bstun:.28,push:4,lunge:-3,anim:"clawR",next:{K:"heavy"}},bHeavy:{name:"Chicote de cauda",h:"high",t:[.36,.16,.42],dmg:11,range:2.9,arc:2.6,stun:.5,bstun:.4,push:10,anim:"tailWhip",track:!0},dLight:{name:"Garra rasteira",h:"low",t:[.16,.1,.26],dmg:4,range:1.9,arc:.8,stun:.58,bstun:.2,push:2,anim:"lowClaw",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida de cauda",h:"low",t:[.42,.14,.54],dmg:11,range:2.7,arc:1.7,stun:.5,bstun:.22,push:3,launch:2.2,anim:"tailSweep",track:!0},mid:{name:"Garras da Bruxa",h:"mid",t:[.2,.36,.32],dmg:4,multi:3,range:1.95,arc:.9,stun:.46,bstun:.2,push:6,rush:2.2,anim:"claws",cd:1.8},special:{name:"Pesadelo da Cuca",h:"mid",t:[.5,.08,.5],spawn:"wave",anim:"cast",cd:3.8},def:{name:"Véu do Pesadelo",t:[.12,.06,.22],veil:2.5,anim:"veil",cd:6},grab:{name:"Abraço da bruxa",grab:!0,t:[.26,.05,.5],range:.85,dmg:15,launch:3.2,push:6,anim:"grab"}},iara:{light1:{name:"Golpe de barbatana",h:"high",t:[.1,.08,.22],dmg:5,range:1.75,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"finL",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Barbatana cruzada",h:"mid",t:[.1,.08,.24],dmg:5,range:1.8,arc:.9,stun:.4,bstun:.2,push:3.2,anim:"finR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},heavy:{name:"Chicote de cauda",h:"high",t:[.28,.12,.4],dmg:12,range:2.4,arc:1.4,stun:.5,bstun:.24,push:7,launch:4,anim:"tailWhip",track:!0},fLight:{name:"Avanço ondulante",h:"mid",t:[.18,.1,.24],dmg:6,range:1.7,arc:.9,stun:.38,bstun:.24,push:2.5,lunge:5.5,anim:"surge",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Investida da correnteza",h:"mid",t:[.34,.2,.46],dmg:13,range:1.9,arc:.8,stun:.5,bstun:.22,push:5,launch:3,rush:7,anim:"charge"},bLight:{name:"Recuo com cauda",h:"high",t:[.16,.08,.24],dmg:5,range:2.1,arc:.9,stun:.4,bstun:.22,push:3.5,lunge:-3.8,anim:"retreat",next:{K:"heavy",bK:"bHeavy"}},bHeavy:{name:"Arco d'água",h:"mid",t:[.3,.14,.4],dmg:10,range:2.6,arc:1.9,stun:.45,bstun:.34,push:9,anim:"waterArc",track:!0},dLight:{name:"Raspão de cauda",h:"low",t:[.13,.08,.24],dmg:4,range:1.9,arc:.9,stun:.5,bstun:.18,push:1.8,anim:"tailScrape",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida aquática",h:"low",t:[.36,.14,.52],dmg:10,range:2.5,arc:1.7,stun:.5,bstun:.2,push:3,launch:2.2,anim:"aquaSweep",track:!0},mid:{name:"Canto da Mãe-d'Água",h:"mid",t:[.45,.1,.4],spawn:"song",anim:"sing",cd:4.5},special:{name:"Correnteza",h:"low",t:[.3,.08,.42],spawn:"current",anim:"current",cd:2.6},def:{name:"Mergulho Encantado",custom:"dive",cd:3.2},grab:{name:"Abraço do rio",grab:!0,t:[.24,.05,.46],range:.85,dmg:13,launch:3,push:6,anim:"grab"}},boto:{light1:{name:"Tapa malandro",h:"high",t:[.08,.08,.18],dmg:4,range:1.4,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"slap",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light2:{name:"Tapa de volta",h:"mid",t:[.07,.08,.2],dmg:5,range:1.45,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"backhand",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Cotovelo do baile",h:"mid",t:[.11,.08,.26],dmg:6,range:1.45,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"elbow",next:{K:"heavy",dK:"dHeavy"}},heavy:{name:"Giro de ombro",h:"mid",t:[.2,.12,.34],dmg:11,range:1.7,arc:1.2,stun:.5,bstun:.22,push:7,launch:4.2,lunge:2.5,anim:"shoulder",track:!0},fLight:{name:"Passo de dança",h:"mid",t:[.15,.1,.2],dmg:5,range:1.5,arc:.9,stun:.38,bstun:.26,push:2,lunge:6,anim:"danceStep",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy"}},fHeavy:{name:"Investida encantada",h:"mid",t:[.3,.18,.44],dmg:12,range:1.7,arc:.8,stun:.5,bstun:.22,push:5,launch:3,rush:7,anim:"dolphinCharge"},bLight:{name:"Giro de recuo",h:"high",t:[.14,.08,.22],dmg:5,range:1.7,arc:1.6,stun:.4,bstun:.2,push:3,lunge:-3.5,anim:"backSpin",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Cotovelada de contrapasso",h:"mid",t:[.2,.08,.38],dmg:9,range:1.55,arc:1,stun:.5,bstun:.2,push:5,evade:[.02,.16],anim:"counterElbow"},dLight:{name:"Rasteira elegante",h:"low",t:[.1,.08,.2],dmg:3,range:1.4,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"legSweep",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira giratória",h:"low",t:[.3,.12,.5],dmg:10,range:1.8,arc:2.2,stun:.5,bstun:.2,push:2,launch:2.2,anim:"spinSweep",track:!0},mid:{name:"Dança do Encantado",custom:"dance",cd:2.4},special:{name:"Pele de Boto",custom:"skin",cd:14},def:{name:"Disfarce do Galanteador",custom:"feint",cd:2.2},grab:{name:"Valsa",grab:!0,t:[.2,.05,.42],range:.8,dmg:12,launch:3,push:5,anim:"grab"}}},Ch={light1:{dmg:3,range:1.65},light2:{dmg:4,range:1.7},light3:{dmg:5,range:1.7},heavy:{range:2,push:9,name:"Giro de nadadeira"},fHeavy:{armor:!0,rush:9,dmg:13,name:"Investida do boto"},dHeavy:{range:2.1,name:"Varrida de cauda"}},od={tornado:{name:"Redemoinho",dmg:8,stun:.6,push:4,speed:7.5,life:1.5,hitR:.75},leaf:{name:"Lâmina da Mata",h:"mid",dmg:8,stun:.46,bstun:.2,push:3,speed:13,life:.5,hitR:.6},wave:{name:"Pesadelo da Cuca",h:"mid",dmg:7,stun:.5,bstun:.24,push:4,speed:6.5,life:1.45,hitR:.95,daze:1.6},song:{name:"Canto da Mãe-d'Água",h:"mid",dmg:6,stun:.45,bstun:.22,push:3,speed:7,life:1,hitR:1.1,charm:1.4},current:{name:"Correnteza",h:"low",dmg:8,stun:.4,bstun:.2,push:7,speed:9,life:.7,hitR:.85},roots:{name:"Ira da Floresta",h:"low",dmg:5,stun:.35,bstun:.2,push:0,root:.85,warn:.42,reach:7.5,hitR:.95}};for(const i in Fn)for(const e in Fn[i])Fn[i][e].id=e;const vc={J:{n:"light1",f:"fLight",b:"bLight",d:"dLight"},K:{n:"heavy",f:"fHeavy",b:"bHeavy",d:"dHeavy"},L:{n:"mid"},I:{n:"special"},O:{n:"def"}},rr={saci:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · termina arremessando"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"martelo fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a canelada acertar"},{name:"Pressão",cmd:["fJ","J","bK"],note:"seguro: a meia-lua afasta"}],mula:[{name:"Dano e arremesso",cmd:["J","J","L"],note:"garantido · coice arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","K"],note:"pisão fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a raspada acertar"},{name:"Pressão",cmd:["fJ","J","fK"],note:"investida aguenta um golpe fraco · muito punível"}],curupira:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · termina arremessando"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"machado fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a pisada acertar"},{name:"Pressão",cmd:["fJ","J","bK"],note:"seguro: o giro afasta e abre espaço para as raízes"}],cuca:[{name:"Dano e arremesso",cmd:["J","J","K"],note:"garantido · rabada arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida de cauda não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"mordida fura a defesa baixa · muito punível"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a garra rasteira acertar"},{name:"Pressão",cmd:["fJ","J","L"],note:"termina nas Garras da Bruxa · três golpes"}],iara:[{name:"Dano e arremesso",cmd:["J","J","K"],note:"garantido · chicote de cauda arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida aquática não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"investida fura a defesa baixa · punível se bloqueada"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se o raspão acertar"},{name:"Pressão",cmd:["fJ","J","L"],note:"termina no Canto · encanta quem for atingido"}],boto:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · giro de ombro arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira giratória não garantida: defenda agachado"},{name:"Punição",cmd:["J","bK"],note:"a cotovelada desvia golpes sem rastreio no começo"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a rasteira acertar"},{name:"Pressão",cmd:["fJ","J","fK"],note:"com Pele de Boto a investida aguenta um golpe fraco"}]},cd={high:"ALTO",mid:"MÉDIO",low:"BAIXO"},Xi=i=>Math.round(i*60);function ld(i){if(!i.t)return null;const[e,t,n]=i.t,s={startup:Xi(e),active:Xi(t),recovery:Xi(n)};return i.dmg&&i.multi?(s.onHit=Xi((i.stun||.35)-n),s.onBlock=Xi((i.bstun||.22)-n)):i.dmg&&(s.onHit=i.launch?"derruba":Xi((i.stun||.35)-t-n),s.onBlock=Xi((i.bstun||.22)-t-n)),s}const hd={saci:kv,mula:Iv,curupira:Nv,cuca:Bv,iara:Hv,boto:qv},nn=()=>new I,Xv=i=>{for(;i>Math.PI;)i-=6.2832;for(;i<-Math.PI;)i+=6.2832;return i};class xc{constructor(e,t){this.kind=e,this.game=t,Object.assign(this,Di[e]),this.maxHp=this.hp,this.level=1,this.dmgMul=1,this.model=hd[e](),t.scene.add(this.model.root),this.pos=nn(),this.vel=nn(),this.dir=nn(),this.wins=0,this.energy=0,this.reset(0,0,0)}dispose(){this.game.scene.remove(this.model.root),this.model.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}reset(e,t,n){this.pos.set(e,0,t),this.vel.set(0,0,0),this.y=0,this.vy=0,this.facing=n,this.hp=this.maxHp,this.cd={mid:0,special:0,def:0,dodge:0},this.invuln=0,this.burn=0,this.buf=null,this.bufT=0,this.combo=0,this.comboT=0,this.comboDmg=0,this.taken=0,this.juggle=0,this.chain=[],this.wasBlock=!1,this.blockAt=9,this.pgCd=0,this.pgOk=!1,this.dodgeSide=0,this.veil=0,this.daze=0,this.dazeImm=0,this.rootImm=0,this.charm=0,this.charmImm=0,this.skin=0,this.baited=!1,this.danced=!1,this.spinExtra=0,this.kickTurn=!1,this.lastMove=nn(),this.setState("idle"),this.updDir()}updDir(){this.dir.set(Math.sin(this.facing),0,Math.cos(this.facing))}dist(){return Math.hypot(this.opp.pos.x-this.pos.x,this.opp.pos.z-this.pos.z)}gain(e){this.energy=Math.min(100,this.energy+e)}setState(e){this.state=e,this.st=0,this.blocking=!1,this.guard="high",this.phase=0,this.pk=0,e==="idle"?(this.anim="idle",this.kickTurn=!1,this.taken=0,this.juggle=0,this.opp&&this.opp.comboT>.7&&(this.opp.comboT=.7)):e!=="attack"&&e!=="custom"&&(this.anim=e==="blockstun"?"block":e)}faceOpp(e=99){const t=Math.atan2(this.opp.pos.x-this.pos.x,this.opp.pos.z-this.pos.z),n=Xv(t-this.facing);this.facing+=Math.max(-e,Math.min(e,n)),this.updDir()}inReach(e,t,n=this.dir){const s=this.opp,a=s.pos.x-this.pos.x,r=s.pos.z-this.pos.z,o=Math.hypot(a,r);return o>e+s.radius||s.y>1.9?!1:o<this.radius+s.radius+.15||Math.acos(Math.max(-1,Math.min(1,(a*n.x+r*n.z)/(o||1))))<=t}cmdDir(e){if(e.dir)return e.dir;const t=e.move;if(!t||t.lengthSq()<.09)return"n";const n=this.opp,s=n.pos.x-this.pos.x,a=n.pos.z-this.pos.z,r=(t.x*s+t.z*a)/(Math.hypot(s,a)||1);return e.down?"d":r>.5?"f":r<-.5?"b":"s"}tryStart(e){const t=e.b;if(this.lastDir=e.dir||"n",t==="SP")return this.energy<100?!1:(this.startSuper(),!0);if(t==="EV")return this.startDodge(e.v);if(t==="GR")return this.chain=[],this.startMove("grab"),!0;const n=vc[t];if(!n)return!1;const s=n[e.dir]||n.n,a=Fn[this.kind][s];if(!a||a.cd&&this.cd[s]>0||a.cost&&this.energy<a.cost)return!1;if(a.cost&&(this.energy-=a.cost),a.cd&&(this.cd[s]=a.cd),this.state!=="attack"&&(this.chain=[]),a.custom&&this.game.log({t:"move",f:this,m:a}),a.custom==="voadora")this.setState("custom"),this.anim="voadora",this.cphase=0,this.connected=!1,this.custom=this.updVoadora;else if(a.custom==="invert"){const r=this.opp,o=nn().subVectors(r.pos,this.pos).setY(0).normalize(),c=nn().set(-o.z,0,o.x),l=this.lastMove.lengthSq()>.09?this.lastMove.clone().setY(0).normalize():o.clone().negate(),h=l.dot(c);this.game.spawnGhost(this),this.setState("custom"),this.anim="dodge",this.dodgeSide=Math.abs(h)>.5?Math.sign(h):0,this.dv=l,this.cphase=0,this.custom=this.updInvert,r.state==="attack"&&(this.gain(12),this.game.tag(this,"ENGANOU!")),this.game.fx.leaves(this.pos,22,3,.5)}else if(a.custom==="teleport")this.setState("custom"),this.anim="vanish",this.cphase=0,this.custom=this.updTeleport,this.opp.state==="attack"&&this.gain(12),this.game.fx.leaves(this.pos,26,3,.5),this.game.fx.smoke({x:this.pos.x,y:1,z:this.pos.z},10);else if(a.custom==="dive")this.setState("custom"),this.anim="submerge",this.cphase=0,this.custom=this.updDive,this.opp.state==="attack"&&this.gain(8),this.game.fx.ring(this.pos,6279392,2.2,.35),this.splash(this.pos,26);else if(a.custom==="dance"){const r=nn().subVectors(this.opp.pos,this.pos).setY(0).normalize(),o=nn().set(-r.z,0,r.x),c=this.lastMove.lengthSq()>.09?this.lastMove.dot(o):0;this.dodgeSide=Math.abs(c)>.3?Math.sign(c):this.dodgeSide===1?-1:1,this.setState("custom"),this.anim="dance",this.cphase=0,this.danced=!1,this.custom=this.updDance,this.game.fx.ring(this.pos,16756936,1.6,.3)}else a.custom==="skin"?(this.setState("custom"),this.anim="transform",this.cphase=0,this.custom=this.updSkin,this.game.tag(this,"PELE DE BOTO")):a.custom==="feint"?(this.setState("custom"),this.anim="feint",this.cphase=0,this.baited=!1,this.custom=this.updFeint,this.game.tag(this,"DISFARCE"),this.game.fx.ring(this.pos,16773328,1.3,.25)):this.startMove(s);return!0}splash(e,t){this.game.fx.dust(e,t,0,0,4,[.45,.75,.85],.5)}startMove(e){let t=Fn[this.kind][e];if(this.skin>0&&Ch[e]&&(t={...t,...Ch[e]}),this.setState("attack"),this.move=t,this.mt=t.t.slice(),this.anim=t.anim,this.hitDone=!1,this.fired=!1,this.connected=!1,this.kickBack=!1,this.kickTurn=!1,this.chain.push(e),this.armorUsed=!1,this.hitN=0,t.kick){const n=this.opp,s=(n.pos.x-this.pos.x)*this.dir.x+(n.pos.z-this.pos.z)*this.dir.z<0;this.kickBack=s,this.kickTurn=!s,s&&(this.mt=[.14,.1,.34])}t.h==="low"&&this.game.fx.ring(this.pos,8376575,1.5,.28),this.game.log({t:"move",f:this,m:t})}startDodge(e){const t=this.dodge;if(this.cd.dodge>0)return!1;const n=this.opp,s=nn().subVectors(n.pos,this.pos).setY(0).normalize(),a=nn().set(-s.z,0,s.x),r=e?e.dot(s):0,o=e?e.dot(a):0,c=Math.abs(o)>=Math.abs(r)||r>0;return this.setState("dodge"),this.cd.dodge=t.t+t.cd,this.dodgeSide=c?o<0?-1:1:0,this.dv=c?a.multiplyScalar(this.dodgeSide).addScaledVector(s,.25).normalize():s.negate(),this.game.fx.dust(this.pos,8,0,0,2),this.game.log({t:"move",f:this,m:{name:c?"Esquiva lateral":"Recuo",t:[t.ev[0],t.ev[1]-t.ev[0],t.t-t.ev[1]]}}),!0}updDodge(e){const t=this.dodge;this.pk=Math.min(1,this.st/t.t),this.pos.addScaledVector(this.dv,t.dist/t.t*(1.6-1.2*this.pk)*(this.charm>0?.7:1)*e),this.faceOpp(this.turn*1.5*e),this.st>=t.t&&this.setState("idle")}tryGrab(){const e=this.opp,t=this.move;return this.dist()>this.radius+e.radius+t.range||e.y>.1||e.invuln>0||e.state!=="idle"&&e.state!=="blockstun"&&e.state!=="rooted"?!1:(this.setState("custom"),this.anim="grabHold",this.cphase=0,this.custom=this.updThrow,this.throwM=t,e.setState("grabbed"),e.anim="hit",e.vel.set(0,0,0),this.game.tag(e,"AGARRADO!"),this.game.log({t:"hit",att:this,def:e,m:t,res:"grab",dmg:0}),!0)}updThrow(){const e=this.opp,t=this.throwM,n=this.st;this.cphase===0?(this.pk=Math.min(1,n/tn.breakWindow),e.state!=="grabbed"?(this.cphase=1,this.st=0):n>=tn.breakWindow&&(this.cphase=1,this.st=0,this.anim="grabThrow",e.receive(this,{name:t.name,dmg:t.dmg,launch:t.launch,push:t.push,thrown:!0,unblockable:!0}))):(this.pk=Math.min(1,n/.35),n>=.35&&this.setState("idle"))}breakGrab(){const e=this.opp,t=nn().subVectors(this.pos,e.pos).setY(0).normalize();this.setState("hit"),this.stun=.28,this.vel.copy(t).multiplyScalar(5),e.setState("hit"),e.stun=.3,e.vel.copy(t).multiplyScalar(-5),this.buf=null,this.game.tag(this,"SOLTOU!"),this.game.fx.sparks({x:(this.pos.x+e.pos.x)/2,y:1.2,z:(this.pos.z+e.pos.z)/2},10,[.7,.8,1]),this.game.log({t:"hit",att:e,def:this,m:e.throwM,res:"break",dmg:0})}update(e,t){const n=this.game.fx;for(const o in this.cd)this.cd[o]=Math.max(0,this.cd[o]-e);this.invuln-=e,this.pgCd-=e,this.veil-=e,this.daze-=e,this.dazeImm-=e,this.rootImm-=e,this.charm-=e,this.charmImm-=e,this.skin>0&&(this.skin-=e)<=0&&(this.skin=0,this.game.tag(this,"VOLTOU A SER GENTE"),n.smoke({x:this.pos.x,y:1,z:this.pos.z},8,.8)),(this.comboT-=e)<=0&&(this.combo=0,this.comboDmg=0),this.burn>0&&(this.burn-=e,this.hp=Math.max(1,this.hp-2*e),n.fire({x:this.pos.x,y:this.y+.9+Math.random()*.5,z:this.pos.z},40*e,this.radius*.7,1.5,.4));const s=this.cmdDir(t);switch(t.block?(this.wasBlock||(this.blockAt=0,this.tapBlocked=!1,this.pgOk=this.pgCd<=0,this.pgCd=.45),this.blockAt+=e):this.wasBlock&&this.blockAt<=tn.tap&&s!=="n"&&!this.tapBlocked&&(this.buf=s==="f"?{b:"GR"}:{b:"EV",v:t.move.clone()},this.bufT=tn.buffer+e),this.wasBlock=!!t.block,t.press==="EV"||t.press==="GR"?(this.buf={b:t.press,v:t.move&&t.move.clone()},this.bufT=tn.buffer):t.press?(this.buf={b:t.press,dir:s},this.bufT=tn.buffer):(this.bufT-=e)<=0&&(this.buf=null),t.move&&this.lastMove.copy(t.move),this.st+=e,this.state){case"idle":this.free(e,t);break;case"attack":this.updAttack(e);break;case"custom":this.custom(e);break;case"dodge":this.updDodge(e);break;case"grabbed":t.press==="J"||t.press==="K"?this.breakGrab():(this.opp.state!=="custom"||this.st>tn.breakWindow+.3)&&this.setState("idle");break;case"rooted":this.st>=this.stun&&this.setState("idle");break;case"hit":case"blockstun":this.pos.addScaledVector(this.vel,e),this.vel.multiplyScalar(Math.max(0,1-9*e)),this.state==="blockstun"&&(this.blocking=!!t.block,this.guard=t.down?"low":"high",this.anim=this.guard==="low"?"blocklow":"block"),this.st>=this.stun&&this.setState("idle");break;case"air":this.y+=this.vy*e,this.vy-=22*e,this.pos.addScaledVector(this.vel,e),this.spinExtra=0,this.y<=0&&(this.y=0,n.dust(this.pos,16,0,0,3),this.game.shake=Math.max(this.game.shake,.15+this.mass*.12),this.setState(this.hp<=0?"ko":"down"),this.invuln=1.2);break;case"down":this.st>.7&&this.setState("getup");break;case"getup":this.pk=this.st/.38,this.st>.38&&this.setState("idle");break}const a=Math.hypot(this.pos.x,this.pos.z),r=this.game.R-this.radius*.5;a>r&&(this.pos.x*=r/a,this.pos.z*=r/a)}free(e,t){if(this.faceOpp(this.turn*e),this.buf&&this.tryStart(this.buf)){this.buf=null;return}if(t.block){this.blocking=!0,this.guard=t.down?"low":"high",this.anim=this.guard==="low"?"blocklow":"block";return}this.blocking=!1;const n=t.move;if(this.mvF=n&&n.lengthSq()>.01?n.dot(this.dir):0,n&&n.lengthSq()>.01){const s=n.dot(this.dir)<-.3?.72:1;this.pos.addScaledVector(n,this.speed*s*(this.charm>0?.62:1)*e),this.anim="walk"}else this.anim="idle"}updAttack(e){const t=this.move,[n,s,a]=this.mt,r=this.st,o=this.opp,c=this.game,l=c.fx;if(r<n)this.phase=0,this.pk=r/n,t.track&&this.faceOpp(this.turn*e),t.lunge&&(t.lunge<0||this.dist()>this.radius+o.radius+.4)&&this.pos.addScaledVector(this.dir,t.lunge*e);else if(r<n+s){if(this.phase=1,this.pk=(r-n)/s,!this.fired){if(this.fired=!0,t.spawn&&c.spawn(t.spawn,this),t.veil&&(this.veil=t.veil,l.ring(this.pos,8380624,2.4,.35),c.tag(this,"VÉU")),t.dustFx){const h=this.pos.clone().addScaledVector(this.dir,1.2);l.dust(h,70,this.dir.x,this.dir.z,11,[.36,.25,.17],.9),l.sparks({x:h.x,y:.2,z:h.z},14,[.6,.45,.3])}if(t.quake){const h=this.pos.clone().addScaledVector(this.dir,1.5);l.dust(h,30,0,0,4),l.ring(h,13148272,2.6,.35),c.shake=Math.max(c.shake,.4)}}if(t.rush&&this.dist()>this.radius+o.radius+.3&&(this.pos.addScaledVector(this.dir,t.rush*e),l.dust(this.pos,40*e,-this.dir.x,-this.dir.z,3)),t.beam)this.beam(e);else if(t.grab)this.hitDone||(this.hitDone=!0,this.tryGrab());else if(t.multi){const h=Math.min(t.multi,Math.floor(this.pk*t.multi)+1);h>this.hitN&&(this.hitN=h,this.inReach(t.range,t.arc)&&(this.hitDone=!0,o.receive(this,h<t.multi?{...t,push:1.2}:t)!=="miss"&&(this.connected=!0)))}else if(t.dmg&&!this.hitDone){const h=this.kickBack?this.dir.clone().negate():this.dir;this.inReach(t.range,t.arc,h)&&(this.hitDone=!0,this.connected=o.receive(this,t)!=="miss")}}else if(r<n+s+a){this.phase=2,this.pk=(r-n-s)/a,t.dmg&&!this.hitDone&&(this.hitDone=!0,c.log({t:"hit",att:this,def:o,m:t,res:"whiff",dmg:0}));const h=this.buf;if(h&&t.next&&this.connected){const u=t.next[(h.dir==="f"||h.dir==="b"||h.dir==="d"?h.dir:"")+h.b]||t.next[h.b];u==="@"?(this.faceOpp(.5),this.tryStart({b:h.b,dir:"n"})&&(this.buf=null)):u&&!this.chain.includes(u)&&(this.buf=null,this.faceOpp(.5),this.startMove(u))}}else this.setState("idle")}beam(e){const t=this.opp,n=this.game,s=this.model.flamePos,a=nn().set(this.dir.x,-.16,this.dir.z).normalize();if(n.fx.fireJet(s,a,420*e,15,.8),n.fx.embers(s,60*e,.2,5),n.shake=Math.max(n.shake,.15),this.hitDone)return;const r=t.pos.x-this.pos.x,o=t.pos.z-this.pos.z,c=r*this.dir.x+o*this.dir.z,l=Math.abs(r*this.dir.z-o*this.dir.x);c>.4&&c<7.5+t.radius&&l<.65+t.radius*.6&&t.y<2.2&&t.receive(this,{name:"Inferno",dmg:20,stun:.6,push:6,burn:3,chip:.3,fire:!0})!=="miss"&&(this.hitDone=!0)}updVoadora(e){const t=this.opp,n=this.st,s=this.game.fx;if(this.cphase===0)this.phase=0,this.pk=n/.35,n>=.35&&(this.cphase=1,this.st=0,this.from=this.pos.clone(),this.to=this.pos.clone().addScaledVector(this.dir,Math.max(1.2,Math.min(this.dist(),7.5)-.3)),this.hitDone=!1,s.dust(this.pos,18,0,0,3),s.leaves(this.pos,10,3));else if(this.cphase===1){const a=Math.min(1,n/.6);this.phase=1,this.pk=a,this.pos.lerpVectors(this.from,this.to,a),this.y=9.6*a*(1-a),s.norm.emit(this.pos.x,this.y+.8,this.pos.z,0,0,0,.6,.55,.45,.5,.25,0,0,.5,.25),!this.hitDone&&a>.5&&this.dist()<1.25+t.radius&&t.y<2&&(this.hitDone=!0,t.receive(this,{name:"Voadora",dmg:20,stun:.6,push:10,launch:6.5})!=="miss"&&(this.connected=!0,s.ring(t.pos,15259832,4.5,.45),s.dust(t.pos,40,0,0,6),s.leaves(t.pos,30,6))),a>=1&&(this.y=0,this.cphase=2,this.st=0,this.rec=this.connected?.25:.8,s.dust(this.pos,14,0,0,2.5))}else this.phase=2,this.pk=Math.min(1,n/this.rec),n>=this.rec&&this.setState("idle")}updInvert(e){const n=this.st;this.cphase===0?(this.invuln=.05,this.pk=Math.min(1,n/.26),this.pos.addScaledVector(this.dv,3.4/.26*(1.5-this.pk)*e),this.faceOpp(this.turn*2*e),this.game.fx.leaves(this.pos,60*e,2,.3),n>=.26&&(this.cphase=1,this.st=0)):n>=.1&&this.setState("idle")}updTeleport(){const e=this.opp,t=this.st,n=this.game.fx;if(this.invuln=.08,this.cphase===0){if(t>=.2){const s=this.lastMove.lengthSq()>.01?this.lastMove.clone().normalize():e.dir.clone().negate(),a=e.pos.clone().addScaledVector(s,e.radius+this.radius+.8);a.y=0;const r=Math.hypot(a.x,a.z),o=this.game.R-1;r>o&&a.multiplyScalar(o/r),this.pos.copy(a),this.faceOpp(),this.cphase=1,this.st=0,this.anim="appear",n.leaves(this.pos,30,3,.5),n.smoke({x:a.x,y:1,z:a.z},12)}}else this.pk=Math.min(1,t/.16),t>=.16&&this.setState("idle")}updDive(){const e=this.opp,t=this.st,n=this.game.fx;if(this.cphase===0){if(this.invuln=.08,this.pk=Math.min(1,t/.3),t>=.3){let s;if(this.lastMove.lengthSq()>.09)s=this.pos.clone().addScaledVector(this.lastMove.clone().setY(0).normalize(),3.2);else{const o=nn().subVectors(this.pos,e.pos).setY(0);o.lengthSq()<.01&&o.set(1,0,0),s=e.pos.clone().addScaledVector(o.normalize(),3.4)}s.y=0;const a=Math.hypot(s.x,s.z),r=this.game.R-1;a>r&&s.multiplyScalar(r/a),this.pos.copy(s),this.faceOpp(),this.cphase=1,this.st=0,this.anim="emerge",n.ring(this.pos,6279392,2.6,.4),this.splash(this.pos,40)}}else this.pk=Math.min(1,t/.5),t>=.5&&this.setState("idle")}updDance(e){const t=this.opp,n=this.st,s=.32;if(this.cphase===0){this.pk=Math.min(1,n/s);const a=nn().subVectors(t.pos,this.pos).setY(0).normalize(),r=nn().set(-a.z,0,a.x).multiplyScalar(this.dodgeSide);if(this.pos.addScaledVector(r,6.5*(1.2-this.pk)*e),this.faceOpp(this.turn*2*e),this.danced||t.state==="attack"&&t.phase===2&&!t.connected&&t.move&&t.move.dmg){this.game.tag(this,"ENCANTOU!"),this.gain(10),this.game.fx.ring(this.pos,16752320,2,.3),this.setState("idle");return}n>=s&&(this.cphase=1,this.st=0)}else this.pk=Math.min(1,n/.2),n>=.2&&this.setState("idle")}updSkin(){const e=this.st;this.pk=Math.min(1,e/.4),e>=.4&&(this.skin=8,this.game.fx.ring(this.pos,16748472,3,.4),this.splash(this.pos,30),this.setState("idle"))}updFeint(e){const t=this.opp,n=this.st;if(this.pk=Math.min(1,n/.4),this.faceOpp(this.turn*.5*e),!this.baited&&(t.state==="attack"||t.state==="dodge"||t.blocking)&&(this.baited=!0,this.gain(8),this.game.tag(t,"CAIU NO DISFARCE")),n>=.14&&this.buf&&this.buf.b!=="O"){const s=this.buf;this.setState("idle"),this.tryStart(s)&&(this.buf=null);return}n>=.4&&this.setState("idle")}startSuper(){this.energy=0,this.setState("custom"),this.anim="superstart",this.invuln=.55,this.cphase=0,this.game.flash(this),this.custom=()=>{this.pk=Math.min(1,this.st/.45),this.cphase===0&&this.st>=.45?this.dist()<9.5&&this.opp.state!=="ko"?this.game.startCine(this,this.opp):(this.cphase=1,this.st=0,this.anim="hit"):this.cphase===1&&this.st>=.7&&this.setState("idle")}}receive(e,t){if(this.invuln>0||this.state==="down"||this.state==="getup"||this.state==="ko")return"miss";const n=this.game,s=n.fx,a=this.state,r={t:"hit",att:e,def:this,m:t,dmg:0};if(a==="air"&&this.juggle>=tn.maxJuggle)return"miss";if(a==="dodge"&&!t.track&&!t.thrown&&this.st>=this.dodge.ev[0]&&this.st<=this.dodge.ev[1])return n.tag(this,"ESQUIVOU"),n.log({...r,res:"dodge"}),"miss";if(!t.track&&!t.thrown&&!t.unblockable&&(a==="attack"&&this.move.evade&&this.st>=this.move.evade[0]&&this.st<=this.move.evade[1]||a==="custom"&&this.custom===this.updDance&&this.cphase===0))return a==="custom"&&!t.dirv&&(this.danced=!0),n.tag(this,"DESVIOU"),n.log({...r,res:"dodge"}),"miss";const o=t.dirv?t.dirv.clone():nn().subVectors(this.pos,e.pos).setY(0).normalize(),c={x:this.pos.x-o.x*this.radius*.6,y:this.y+(t.h==="low"?.35:this.hitY),z:this.pos.z-o.z*this.radius*.6};if(this.veil>0&&!t.thrown&&!t.unblockable)return this.veil=0,n.tag(this,"VÉU ABSORVEU"),s.ring(this.pos,8380624,4.5,.4),s.sparks(c,26,[.5,1,.9]),n.hitstop=.06,e.y<.5&&Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z)<3.2+e.radius&&(e.state==="attack"||e.state==="idle"||e.state==="custom")&&!n.cine&&(e.setState("hit"),e.stun=.4,e.vel.copy(o).multiplyScalar(-9),e.y=0),n.log({...r,res:"veil"}),"block";if((a==="idle"||a==="blockstun")&&this.blocking&&this.dir.dot(o)<-.1&&!t.unblockable){const d=this.guard==="low";if(t.h==="high"&&d)return n.tag(this,"ABAIXOU"),n.log({...r,res:"duck"}),"miss";if(t.h==="low"&&!d||t.h==="mid"&&d)n.tag(this,t.h==="low"?"BAIXO!":"POR CIMA!");else{const g=a==="idle"&&this.pgOk&&this.blockAt<=tn.perfect,v=g?0:t.dmg*e.dmgMul*(t.chip??tn.chip);return this.hp=Math.max(1,this.hp-v),this.setState("blockstun"),this.blocking=!0,this.guard=d?"low":"high",this.anim=d?"blocklow":"block",this.stun=g?.12:t.bstun||.22,this.tapBlocked=!0,this.vel.copy(o).multiplyScalar((t.push||2)*(g?.2:.55)),s.sparks(c,g?22:8,g?[1,1,.8]:[.7,.8,1]),e.gain(t.dmg*.4),this.gain(t.dmg*(g?1.2:.5)),n.hitstop=g?.09:.04,g&&(n.tag(this,"DEFESA PERFEITA"),t.id&&e.state==="attack"&&(e.setState("hit"),e.stun=tn.perfectStagger,e.vel.copy(o).multiplyScalar(-3))),n.log({...r,res:g?"perfect":"block",dmg:v}),"block"}}if(a==="attack"&&this.move.armor&&this.phase<2&&!this.armorUsed&&!t.launch&&!t.thrown&&t.dmg<=8)return this.armorUsed=!0,this.hp=Math.max(1,this.hp-t.dmg*e.dmgMul),e.gain(t.dmg),s.sparks(c,10,[1,.6,.3]),n.hitstop=.05,n.tag(this,"AGUENTOU"),n.log({...r,res:"armor",dmg:t.dmg}),"hit";const l=a==="air",h=a==="attack"&&!t.thrown,u=a==="hit"||a==="rooted"||l,p=t.dmg*e.dmgMul*Math.max(tn.scaleMin,1-tn.scale*this.taken)*(l?.7:1)*(h?tn.counterDmg:1);return this.taken||(e.comboDmg=0),this.taken++,l&&this.juggle++,this.hp-=p,e.gain(p*1.5+this.taken*1.5),this.gain(p*.6),e.combo=this.taken,e.comboT=1.3,e.comboDmg+=p,t.burn&&(this.burn=t.burn),this.vel.copy(o).multiplyScalar(t.push||2),t.launch||this.hp<=0||l||this.y>.05||this.taken>=tn.maxHits?(this.y=Math.max(this.y,.02),this.vy=t.launch||(this.hp<=0?5.5:4),this.vel.multiplyScalar(.7),this.setState("air")):t.root&&this.rootImm<=0?(this.setState("rooted"),this.anim="hit",this.stun=t.root,this.rootImm=t.root+4,this.vel.set(0,0,0),n.tag(this,"PRESO!")):(this.setState("hit"),this.stun=(t.stun||.35)+(h?tn.counterStun:0)),t.daze&&this.dazeImm<=0&&(this.daze=t.daze,this.dazeImm=t.daze+3,n.tag(this,"DESORIENTADO")),t.charm&&this.charmImm<=0&&(this.charm=t.charm,this.charmImm=t.charm+4,n.tag(this,"ENCANTADO")),h&&n.tag(e,"CONTRA-ATAQUE!"),this.model.snap(this,n.time),n.hitstop=Math.min(.14,.03+p*.006),n.shake=Math.max(n.shake,Math.min(.8,p*.04)),s.sparks(c,6+p,t.fire?[1,.5,.15]:[1,.85,.6]),t.fire?s.fire(c,30,.4,3,.9):s.dust(c,5,o.x,o.z,3),n.onHit(e,this,p),n.log({...r,res:"hit",dmg:p,counter:h,sure:u,hits:this.taken,total:e.comboDmg}),"hit"}}const Kv={saci:["bJ","fK","bK","dJ","K"],mula:["fJ","bK","dJ","K","bJ"],curupira:["fJ","bJ","dJ","dK","K"],cuca:["fJ","K","bK","dK","dJ"],iara:["bJ","bK","dJ","K","fK","J"],boto:["fJ","bJ","dJ","bK","K","dK"]},Ph={saci:[["J","J","J","K"],1.1],mula:[["J","J","L"],1.6],curupira:[["fJ","J","J","K"],1.6],cuca:[null,1.5],iara:[null,1.3],boto:[["fJ","J","J"],1.5]};class ud{constructor(e){this.me=e,this.t=.5,this.queue=[],this.blockT=0,this.low=!1,this.seen=null,this.grabRoll=null,this.punished=null,this.mv=new I}q(...e){this.queue=e.map((t,n)=>[t,n===0?0:.2])}press(e,t){t.length===2&&t!=="SP"&&t!=="EV"&&t!=="GR"?(e.dir=t[0],e.press=t[1]):(e.dir="n",e.press=t),t==="EV"&&e.move.copy(this.ev||this.mv)}guard(e){if(e.state==="attack"&&e.move!==this.seen){this.seen=e.move;const t=e.move.h;this.low=t==="low"?Math.random()<.55:t==="mid"?Math.random()<.12:Math.random()<.25,this.me.daze>0&&(this.low=Math.random()<.5)}return this.low}think(e,t){const n=this.me,s=n.opp,a={move:new I,block:!1,press:null};if(n.state==="grabbed")return this.grabRoll===null&&(this.grabRoll=Math.random()<.38?.1+Math.random()*.2:9),(this.grabRoll-=e)<=0&&(a.press="J",this.grabRoll=9),this.queue.length=0,a;if(this.grabRoll=null,n.state==="blockstun")return a.block=!0,a.down=this.guard(s),this.blockT=Math.max(this.blockT,.12),this.queue.length=0,a;if(this.dodgeRoots(e,t,a))return a;if(n.state!=="idle"&&n.state!=="attack")return this.queue.length=0,a;if(this.queue.length)return this.queue[0][1]-=e,this.queue[0][1]<=0&&this.press(a,this.queue.shift()[0]),a;if(n.state!=="idle")return a;if(s.state==="attack"&&s.phase===2&&s.move!==this.punished){const o=s.mt[2]*(1-s.pk),c=n.dist()-n.radius-s.radius,[l,h]=Ph[n.kind];if(o>.22&&c<h&&(this.punished=s.move,Math.random()<(n.daze>0?.3:.7)))return this.blockT=0,this.q(...l||rr[n.kind][0].cmd),a}if(s.state!=="attack"&&(this.punished=null),!(s.state==="custom"&&s.anim==="emerge"))this.emergeSeen=!1;else if(!this.emergeSeen){this.emergeSeen=!0;const o=n.dist()-n.radius-s.radius;if(o<2.4&&Math.random()<.6)return this.blockT=0,o>1.1?this.q("fJ","J"):this.q(...Ph[n.kind][0]||rr[n.kind][0].cmd),a}if(n.kind==="boto"&&s.state==="attack"&&s.phase===0&&s.move!==this.read&&n.dist()-n.radius-s.radius<2.4){this.read=s.move;const o=Math.random(),c=.05+Math.random()*.1;if(s.move.track||s.move.h==="low"){if(o<.55)return this.seen=null,this.blockT=.5,a}else{if(o<.5&&n.cd.mid<=0)return this.queue=[["L",c]],a;if(o<.65)return this.queue=[["bK",c]],a;if(o<.85)return this.seen=null,this.blockT=.45,a}}return this.blockT>0?(this.blockT-=e,a.block=!0,a.down=this.guard(s),a):((this.t-=e)<=0&&(this.t=.16+Math.random()*.22+(n.daze>0?.25:0),this.decide(t)),a.move.copy(this.mv),a)}dodgeRoots(e,t,n){const s=this.me;for(const c of t.projectiles)c.type==="roots"&&c.owner!==s&&!c.hit&&!c.aiSeen&&(c.aiSeen=!0,this.roots={p:c,t:.15+Math.random()*.2,plan:Math.random()});const a=this.roots;if(!a)return!1;if(a.p.hit||!t.projectiles.includes(a.p))return this.roots=null,!1;if((a.t-=e)>0||a.done||s.state!=="idle"||(a.done=!0,a.p.pos.distanceTo(s.pos)>1.9))return!1;const r=new I().subVectors(s.pos,a.p.pos).setY(0);r.lengthSq()<.01&&r.set(-s.dir.z,0,s.dir.x),r.normalize(),this.queue.length=0;const o=()=>{this.seen=s.opp.move,this.low=!0,this.blockT=.6,n.block=!0,n.down=!0};if(a.plan<.45)o();else if(a.plan<.72)s.cd.dodge<=0?(this.ev=r,this.q("EV")):o();else if(a.plan<.86)this.mv.copy(r),this.t=.45,n.move.copy(r);else return!1;return!0}decide(e){const t=this.me,n=t.opp,s=t.dist(),a=Math.random(),r=new I().subVectors(n.pos,t.pos).setY(0).normalize(),o=new I(-r.z,0,r.x).multiplyScalar(Math.random()<.5?1:-1),c=()=>{this.mv.copy(r),Math.random()<.3&&this.mv.addScaledVector(o,.7).normalize()},l=()=>{const g=rr[t.kind];this.q(...g[Math.floor(Math.random()*g.length)].cmd)},h=()=>{const g=Kv[t.kind];this.q(g[Math.floor(Math.random()*g.length)])};if(this.mv.set(0,0,0),Math.random()<.12)return;const u=n.state==="attack"&&n.phase===0||n.state==="custom"&&n.anim==="voadora";if(u&&n.move&&n.move.beam&&s<8.2){if(a<.4&&t.cd.dodge<=0){this.ev=o.clone(),this.q("EV");return}if(a<.7){this.mv.copy(o),this.t=.55;return}if(a<.85){this.seen=null,this.blockT=.7;return}}if(u&&s<4.5){if(a<.4){this.seen=null,this.blockT=.5;return}if(a<.5&&t.cd.def<=0){this.q("O");return}if(a<.64&&t.cd.dodge<=0){this.ev=Math.random()<.75?o.clone():r.clone().negate(),this.q("EV");return}if(a<.72){this.mv.copy(o),this.t=.4;return}}for(const g of e.projectiles)if(g.type!=="roots"&&g.owner!==t&&g.pos.distanceTo(t.pos)<(g.type==="wave"?4.2:g.type==="current"?5.5:g.type==="song"?4.5:3.5)){g.type==="current"?a<.7?(this.low=!0,this.seen=n.move,this.blockT=.5):a<.85&&t.cd.dodge<=0?(this.ev=o.clone(),this.q("EV")):(this.mv.copy(o),this.t=.4):g.type==="song"?a<.5?(this.low=!1,this.seen=n.move,this.blockT=.5):a<.7&&t.cd.dodge<=0?(this.ev=o.clone(),this.q("EV")):(this.mv.copy(o),this.t=.45):g.type==="wave"?a<.22&&t.cd.def<=0&&(t.kind==="curupira"||t.kind==="saci")?this.q("O"):a<.8?(this.low=!1,this.seen=n.move,this.blockT=.65):(this.mv.copy(o),this.t=.45):a<.45?(this.low=!1,this.blockT=.45):(this.mv.copy(o),this.t=.45);return}if(t.energy>=100&&s<7&&a<.5){this.q("SP");return}if(n.state==="down"||n.state==="getup"||n.state==="air"){s<3?this.mv.copy(r).negate().multiplyScalar(.6):s>5&&c();return}const d=s-t.radius-n.radius;if(n.state==="rooted"){d>2.4&&t.kind==="curupira"&&t.cd.mid<=0?this.q("L"):d>.7?this.mv.copy(r):a<.45?this.q("GR"):l();return}if(n.veil>0&&a<.75){a<.25&&s>3&&t.cd.mid<=0&&(t.kind==="saci"||t.kind==="curupira")?this.q("L"):d<2.2?(this.mv.copy(r).negate().addScaledVector(o,.7).normalize(),this.t=.5):(this.mv.copy(o),this.t=.4);return}if(n.state==="custom"&&n.anim==="dance"&&a<.75){d<1.2&&(this.seen=null,this.blockT=.3);return}if(n.state==="custom"&&n.anim==="feint"&&d<2){a<.4?(this.seen=null,this.blockT=.45):a<.6?(this.mv.copy(r).negate(),this.t=.35):a<.72&&d<.6?this.q("GR"):h();return}if(n.kind==="iara"&&d>1.1&&s<7&&a<.45&&t.kind!=="iara"){c(),a<.15&&t.cd.dodge<=0&&(this.ev=r.clone(),this.q("EV"));return}if(n.skin>0&&d<2.4&&a<.3){this.seen=null,this.blockT=.45;return}if(n.blocking&&n.state==="idle"&&d<1.4&&a<.5){d<.55?this.q("GR"):this.mv.copy(r);return}if(t.kind==="saci")s>6?a<.45&&t.cd.mid<=0?this.q("L"):c():s>3?a<.28&&t.cd.special<=0?this.q("I"):a<.4&&t.cd.mid<=0?this.q("L"):c():d>.65?d<1.5&&a<.3?this.q("fJ","J"):d<1.3&&a<.45?this.q("fK"):this.mv.copy(r):a<.5?l():a<.7?h():a<.76?this.q("GR"):a<.88?(this.mv.copy(r).negate().addScaledVector(o,.6).normalize(),this.t=.45):(this.seen=null,this.blockT=.4);else if(t.kind==="curupira")s>6?a<.4&&s<7.3&&t.cd.special<=0?this.q("I"):a<.62&&t.cd.mid<=0?this.q("L"):c():s>3?a<.24&&t.cd.special<=0?this.q("I"):a<.44&&t.cd.mid<=0?this.q("L"):a<.58&&s<3.9?this.q("fJ","J"):c():d>.7?this.mv.copy(r):a<.48?l():a<.68?h():a<.75?this.q("GR"):a<.88?(this.mv.copy(r).negate().addScaledVector(o,.6).normalize(),this.t=.45):(this.seen=null,this.blockT=.4);else if(t.kind==="iara"){const g=n.vel&&n.state==="idle"&&d<4&&this.prevGap!==void 0&&d<this.prevGap-.05;if(this.prevGap=d,a>.68){d>2&&(this.mv.copy(o),this.t=.35);return}d<1.1?a<.12&&t.cd.def<=0?this.q("O"):a<.34?this.q("bJ"):a<.58?this.q("dJ"):a<.7?l():a<.78&&d<.6?this.q("GR"):a<.9?(this.mv.copy(r).negate().addScaledVector(o,.7).normalize(),this.t=.45):(this.seen=null,this.blockT=.45):g&&a<.22?t.cd.mid<=0&&a<.3?this.q("L"):t.cd.special<=0?this.q("I"):this.q("bK"):s>6.5?a<.14&&t.cd.special<=0?this.q("I"):a<.3&&t.cd.mid<=0?this.q("L"):a<.8&&c():s>3.4?a<.12&&t.cd.special<=0?this.q("I"):a<.22&&t.cd.mid<=0?this.q("L"):a<.32&&s<4.4?this.q("fK"):a<.7?(this.mv.copy(o),this.t=.35):a<.82&&this.mv.copy(r).negate():a<.2?this.q("bK"):a<.32?this.q("K"):a<.58?this.q("dK"):a<.7&&t.cd.special<=0?this.q("I"):a<.88?(this.mv.copy(r).negate().addScaledVector(o,.4).normalize(),this.t=.45):h()}else if(t.kind==="boto"){const g=S=>{let _;do _=S[Math.floor(Math.random()*S.length)];while(_===this.last&&S.length>1);return this.last=_,_},v={dance:()=>this.q("L"),feint:()=>this.q("O",g(["J","fJ","K","dJ"])),feintGrab:()=>this.q("O","GR"),route:l,poke:h,counter:()=>this.q("bK"),charge:()=>this.q("fK"),step:()=>this.q("fJ"),sweep:()=>this.q(Math.random()<.5?"dJ":"dK"),skin:()=>this.q("I"),circle:()=>{this.mv.copy(o).addScaledVector(r,.25).normalize(),this.t=.3},guard:()=>{this.seen=null,this.blockT=.4},back:()=>{this.mv.copy(r).negate().addScaledVector(o,.6).normalize(),this.t=.35}},m=S=>S==="dance"?t.cd.mid<=0:S==="feint"||S==="feintGrab"?t.cd.def<=0:S==="skin"?t.cd.special<=0&&t.skin<=0:!0,f=S=>{const _=S.filter(m);v[g(_.length?_:["circle"])]()};n.state==="attack"&&n.phase===0&&d<2.2&&a<.55?f(["dance","dance","counter","guard"]):t.skin<=0&&s<6&&a<.1?f(["skin"]):s>5.5?t.skin>0&&a<.3?f(["charge"]):a<.7?(c(),this.mv.addScaledVector(o,.5).normalize()):f(["circle"]):d>1.1?f(t.skin>0?["charge","charge","step","circle","feint"]:["step","circle","circle","feint","back","charge"]):f(t.skin>0?["route","poke","charge","feintGrab","sweep","dance"]:["route","poke","feint","feintGrab","sweep","counter","dance","back","guard"])}else if(t.kind==="cuca")s>5.5?a<.5&&t.cd.special<=0?this.q("I"):a<.62&&t.cd.def<=0&&s<7.5?this.q("O"):a<.85&&c():s>2.8?a<.34&&t.cd.special<=0?this.q("I"):a<.48&&s<4?this.q("fK"):a<.58&&s<3.6?this.q("K"):a<.68&&t.cd.def<=0?this.q("O"):a<.8?(this.mv.copy(r).negate().addScaledVector(o,.5).normalize(),this.t=.4):c():d>.9?a<.3&&t.cd.mid<=0?this.q("L"):a<.5?this.q("fJ"):a<.62?this.q("K"):this.mv.copy(r):a<.34?l():a<.54?h():a<.68&&t.cd.mid<=0?this.q("L"):a<.78&&d<.6?this.q("GR"):a<.88&&t.cd.def<=0?this.q("O"):(this.seen=null,this.blockT=.45);else{if(t.dir.dot(r)<0&&s<3.2&&a<.7){this.q("L");return}s>7.5?c():s>3.3?a<.24&&t.cd.special<=0?this.q("I"):a<.36&&s<5.5?this.q("fK"):c():d>.95?a<.16&&t.cd.def<=0?this.q("O"):a<.3?this.q("fJ","J","fK"):this.mv.copy(r):a<.42?l():a<.62?h():a<.74?this.q("L"):a<.8&&d<.6?this.q("GR"):a<.9&&t.cd.def<=0?this.q("O"):(this.seen=null,this.blockT=.45)}}}const Dh={KeyJ:"J",KeyK:"K",KeyL:"L",KeyI:"I",KeyO:"O",Space:"SP"},kh={2:"J",3:"K",0:"L",1:"I",5:"O",7:"SP"},Ih=i=>Math.max(-1,Math.min(1,i));class Yv{constructor({onPause:e,onTouch:t}){this.keys=new Set,this.presses=[],this.onPause=e,this.onTouch=t,this.touch=!1,this.t={x:0,y:0,block:!1},this.p={x:0,y:0,block:!1},this.prev=[],this.prevDir=0,this.nav={dx:0,ok:!1},addEventListener("keydown",n=>{(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),!n.repeat&&(this.keys.add(n.code),Dh[n.code]&&this.presses.push(Dh[n.code]),(n.code==="Escape"||n.code==="KeyP")&&e())}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.keys.clear(),this.t.x=this.t.y=0,this.t.block=!1}),addEventListener("contextmenu",n=>n.preventDefault()),matchMedia("(pointer: coarse)").matches&&this.enableTouch(),addEventListener("pointerdown",n=>{n.pointerType==="touch"&&this.enableTouch()},!0),this.bindTouch()}enableTouch(){this.touch||(this.touch=!0,document.body.classList.add("touch"),this.onTouch&&this.onTouch())}bindTouch(){const e=document.getElementById("stickZone"),t=document.getElementById("stickBase"),n=document.getElementById("stickKnob");let s=null,a=0,r=0;const o=l=>{const h=t.offsetWidth*.5||50;let u=(l.clientX-a)/h,p=(l.clientY-r)/h;const d=Math.hypot(u,p);d>1&&(u/=d,p/=d),n.style.transform=`translate(${u*h}px, ${p*h}px)`;const g=Math.min(1,d),v=.2,m=g<v?0:(g-v)/(1-v);this.t.x=g?u/g*m:0,this.t.y=g?-p/g*m:0},c=l=>{l.pointerId===s&&(s=null,this.t.x=this.t.y=0,n.style.transform="",t.style.left=t.style.top="",t.classList.remove("on"))};e.addEventListener("pointerdown",l=>{if(s===null){l.preventDefault(),s=l.pointerId;try{e.setPointerCapture(s)}catch{}a=l.clientX,r=l.clientY,t.style.left=a+"px",t.style.top=r+"px",t.classList.add("on"),o(l)}}),e.addEventListener("pointermove",l=>{l.pointerId===s&&o(l)}),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c),document.querySelectorAll("[data-btn]").forEach(l=>{const h=l.dataset.btn;let u=null;const p=d=>{d.pointerId===u&&(u=null,l.classList.remove("down"),h==="BLOCK"&&(this.t.block=!1))};l.addEventListener("pointerdown",d=>{d.preventDefault(),u=d.pointerId;try{l.setPointerCapture(u)}catch{}l.classList.add("down"),h==="BLOCK"?this.t.block=!0:this.presses.push(h)}),l.addEventListener("pointerup",p),l.addEventListener("pointercancel",p)})}frame(){const e=this.nav;e.dx=0,e.ok=!1,this.p.x=this.p.y=0,this.p.block=!1;let t=null;const n=navigator.getGamepads?navigator.getGamepads():[];for(const h of n)if(h&&h.connected){t=h;break}if(!t)return this.prev.length=0,e;const s=h=>!!(t.buttons[h]&&t.buttons[h].pressed),a=h=>s(h)&&!this.prev[h];let r=t.axes[0]||0,o=-(t.axes[1]||0);const c=Math.hypot(r,o);c<.22?r=o=0:c>1&&(r/=c,o/=c),this.p.x=Ih(r+(s(15)?1:0)-(s(14)?1:0)),this.p.y=Ih(o+(s(12)?1:0)-(s(13)?1:0)),this.p.block=s(4)||s(6);for(const h in kh)a(h)&&this.presses.push(kh[h]);a(9)&&this.onPause();const l=this.p.x>.5?1:this.p.x<-.5?-1:this.p.y<-.5?1:this.p.y>.5?-1:0;return l&&l!==this.prevDir&&(e.dx=l),this.prevDir=l,e.ok=a(0),this.prev=t.buttons.map(h=>h.pressed),e}poll(){const e=this.keys,t=(o,c)=>e.has(o)||e.has(c)?1:0;let n=t("KeyD","ArrowRight")-t("KeyA","ArrowLeft")+this.t.x+this.p.x,s=t("KeyW","ArrowUp")-t("KeyS","ArrowDown")+this.t.y+this.p.y;const a=Math.hypot(n,s);a>1&&(n/=a,s/=a);const r=Math.abs(Math.atan2(n,-s));return this.down=this.down?s<-.35&&r<1.08:s<-.5&&r<.873,{x:n,y:s,down:this.down,block:e.has("ShiftLeft")||e.has("ShiftRight")||this.t.block||this.p.block,press:this.presses.shift()||null}}clear(){this.presses.length=0}}const zh={low:{ratio:1.25,shadow:0,lights:!1,fx:.55},medium:{ratio:1.6,shadow:1024,lights:!0,fx:.8},high:{ratio:2,shadow:2048,lights:!0,fx:1}},Uh=["low","medium","high"],dd="fs.quality",$v=()=>{try{return localStorage.getItem(dd)}catch{return null}},Jv=i=>{try{localStorage.setItem(dd,i)}catch{}};function jv({renderer:i,arena:e,fx:t,mobile:n,onChange:s}){let a=$v();a!=="auto"&&!zh[a]&&(a="auto");let r="high",o=0,c=0,l=3;function h(p){r=p;const d=zh[p];i.setPixelRatio(Math.min(devicePixelRatio||1,d.ratio));const g=e.sun;g.castShadow=!!d.shadow,d.shadow&&g.shadow.mapSize.x!==d.shadow&&(g.shadow.mapSize.set(d.shadow,d.shadow),g.shadow.map&&(g.shadow.map.dispose(),g.shadow.map=null));for(const v of e.torchLights)v.visible=d.lights;t.mult=d.fx,o=c=0,l=2.5,s(u)}const u={get pref(){return a},get tier(){return r},set(p){a=p,Jv(p),h(p==="auto"?n()?"medium":"high":p)},tick(p){if(a!=="auto"||p>.25)return;if(l>0){l-=p;return}if(o+=p,c++,o<2.5)return;const d=o/c;o=c=0;const g=Uh.indexOf(r);d>1/40&&g>0&&h(Uh[g-1])}};return u.set(a),u}const Ja="M25 3c1 9 12 13 12 25a13 13 0 0 1-26 0c0-6 3-9 6-12 0 4 1 7 4 7 2-6-1-12 4-20z",Nh="M16 6h16l7 24c1 6-5 12-15 12S8 36 9 30z",Mo="M24 4l16 6v12c0 10-7 17-16 22C15 39 8 32 8 22V10z",Zv={fist:'<path d="M11 23c0-3 2-5 4.500-5 2 0 3.500 1 4.200 2.600.600-2.100 2.300-3.600 4.500-3.600 2.300 0 4 1.400 4.500 3.400.700-1.400 2.100-2.400 3.800-2.400 2.500 0 4.500 2 4.500 5v9c0 6-4.500 10-11 10h-4c-6.500 0-11-4-11-10z"/><path class="k" d="M16 30h13c2 0 3 1 3 3"/>',leg:'<path d="M17 5h11v19l11 7c3 2 2 8-2 8H15c-2 0-3-2-3-4l3-12z"/><path class="k" d="M14 33h24"/>',flykick:'<g transform="rotate(-35 26 22)"><path d="M6 17h20l7-6 9 6c2 1.500 2 5 0 6.500L36 28H6z"/></g><path class="s" d="M5 34l8-5M10 42l8-5M22 44l6-4"/>',tornado:'<path class="s" d="M7 9c8 3 26 3 34 0M11 18c7 2.500 19 2.500 26 0M16 27c5 2 11 2 16 0M20 35c3 1.500 6 1.500 9 0M24 42h1"/>',smoke:'<circle cx="17" cy="30" r="9"/><circle cx="29" cy="25" r="11"/><circle cx="34" cy="35" r="7"/><path d="M11 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/><path d="M40 4l1.200 3 3 1.200-3 1.200-1.200 3-1.200-3-3-1.200 3-1.200z"/>',cap:'<path d="M9 35c1-15 9-26 24-31-4 7-3 12 1 15 4 4 6 9 6 16z"/><path d="M5 36h38v6H5z"/><path class="k" d="M9 35h31"/>',shieldWind:`<path d="${Mo}"/><path class="k" d="M15 19h13a4 4 0 1 0-4-4M15 27h16a4 4 0 1 1-4 4"/>`,shieldDust:`<path d="${Mo}"/><circle class="kf" cx="19" cy="24" r="5"/><circle class="kf" cx="28" cy="20" r="6"/><circle class="kf" cx="28" cy="30" r="4"/>`,hoof:`<path d="${Nh}"/><path class="k" d="M24 27v15"/>`,kick:`<g transform="translate(1 12) rotate(-28 18 20) scale(.74)"><path d="${Nh}"/></g><path class="s" d="M33 9l4-6M39 17l7-2M37 26l7 3"/>`,shoe:'<path class="s" style="stroke-width:8" d="M13 8v17a11 11 0 0 0 22 0V8"/><g class="kf"><circle cx="13" cy="13" r="1.700"/><circle cx="13" cy="22" r="1.700"/><circle cx="35" cy="13" r="1.700"/><circle cx="35" cy="22" r="1.700"/><circle cx="24" cy="36" r="1.700"/></g>',flame:`<path d="${Ja}"/><path class="kf" d="M24 26c3 4 6 6 6 10a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 2 3-3z"/>`,dust:'<circle cx="14" cy="29" r="8"/><circle cx="26" cy="24" r="10"/><circle cx="36" cy="30" r="7"/><path d="M5 33h38v6H5z"/><circle cx="9" cy="12" r="2.500"/><circle cx="21" cy="7" r="2"/><circle cx="39" cy="11" r="3"/>',inferno:`<g transform="translate(-7 15) scale(.58)"><path d="${Ja}"/></g><g transform="translate(27 15) scale(.58)"><path d="${Ja}"/></g><path d="${Ja}"/><path class="kf" d="M24 24c3 4 7 7 7 12a7 7 0 0 1-14 0c0-4 2-6 4-8 1 2 2 2 3-4z"/>`,leaf:'<path d="M7 41C7 19 21 6 42 6c0 21-13 35-35 35z"/><path class="k" d="M10 38L33 15M18 30l1-9M24 24l9 0"/>',roots:'<path class="s" d="M24 5v15M24 20c-4 7-11 6-13 16M24 20c4 7 11 6 13 16M24 20v23M11 36l-5 7M37 36l5 7M18 9l6 5 6-5"/>',invert:'<path d="M27 8L10 24l17 16V30h14V18H27z"/><path class="s" d="M44 14v20" style="opacity:.55"/>',tree:'<path d="M24 2l13 15h-6l10 12H29v15H19V29H7l10-12h-6z"/><path class="k" d="M24 30v12"/>',claw:'<path d="M9 5c5 11 6 24 2 38 7-11 9-24 5-38zM21 3c5 13 6 28 2 42 7-13 9-28 5-42zM33 5c5 11 6 24 2 38 7-11 9-24 5-38z"/>',tail:'<path class="s" style="stroke-width:8" d="M7 13c18-5 32 3 32 15 0 9-9 13-16 8"/><path d="M40 6l5 9-9 2z"/><path class="s" d="M6 40h18"/>',eye:'<path d="M2 24c9-14 35-14 44 0-9 14-35 14-44 0z"/><circle class="kf" cx="24" cy="24" r="8"/><path class="s" d="M8 8l4 5M40 8l-4 5M24 3v6"/>',veil:`<path d="${Mo}"/><path class="kf" d="M29 13a11 11 0 1 0 0 22 9 9 0 1 1 0-22z"/>`,fin:'<path d="M6 38c4-16 16-28 36-32-6 8-8 16-6 26-8-4-18-2-30 6z"/><path class="k" d="M14 32c6-8 14-14 22-18M20 34c4-6 9-10 15-12"/>',tailFin:'<path class="s" style="stroke-width:7" d="M8 10c10 2 18 10 18 20"/><path d="M26 28l16-6-6 12 8 10-18-6z"/>',note:'<circle cx="14" cy="36" r="7"/><circle cx="34" cy="32" r="7"/><path class="s" style="stroke-width:4" d="M20 36V9l20-4v27"/><path class="s" d="M20 15l20-4"/>',current:'<path class="s" style="stroke-width:5" d="M3 30c5-6 9-6 14 0s9 6 14 0 9-6 14 0"/><path class="s" style="stroke-width:3;opacity:.7" d="M3 40c5-4 9-4 14 0s9 4 14 0 9-4 14 0"/><path d="M38 14l8 8-11 2z"/>',dive:'<path d="M24 4c6 8 10 14 10 20a10 10 0 0 1-20 0c0-6 4-12 10-20z"/><path class="s" d="M4 38c5-3 10-3 14 0s10 3 14 0 10-3 14 0M10 45h28"/>',coil:'<path class="s" style="stroke-width:6" d="M24 44c-12 0-16-8-10-13s20-3 20-11-10-11-16-6"/><path d="M14 10l-8-6 2 10z"/><circle class="kf" cx="34" cy="38" r="3"/>',hand:'<path d="M14 42c-4-6-6-12-6-20 0-3 4-3 5 0l2 6V8c0-3 4-3 4 0v12V5c0-3 4-3 4 0v15V7c0-3 4-3 4 0v15V11c0-3 4-3 4 0v17c0 7-3 12-7 14z"/>',shoeW:'<path d="M4 30c8 0 14-6 18-12l6 4c4 3 10 4 16 4v8H4z"/><path class="k" d="M4 34h40"/>',dance:'<circle cx="28" cy="7" r="4"/><path d="M27 13l-5 13 6 6-2 12M22 26l-10 4M27 16l10 6M28 32l10 4"/><path class="s" d="M6 42c6 3 14 3 20 0" style="opacity:.6"/>',dolphin:'<path d="M3 30c8-14 26-20 38-10l5-2-3 6c1 4-2 7-6 7l-8-2-6 7-1-7c-7 0-13 1-19 1z"/><circle class="kf" cx="35" cy="21" r="1.600"/>',hat:'<path d="M4 34c6 4 34 4 40 0-4-2-8-3-11-3l-2-17c-2-4-12-4-14 0l-2 17c-3 0-7 1-11 3z"/><path class="k" d="M15 28h18"/>',mask:'<path d="M4 16c8-3 16-3 20 2 4-5 12-5 20-2-1 12-6 18-12 18-4 0-6-3-8-6-2 3-4 6-8 6-6 0-11-6-12-18z"/><circle class="kf" cx="15" cy="23" r="3"/><circle class="kf" cx="33" cy="23" r="3"/>',jaw:'<path d="M3 6h42l-4 15-5-7-4 7-4-7-4 7-4-7-4 7-4-7-5 7zM3 42h42l-4-15-5 7-4-7-4 7-4-7-4 7-4-7-4 7-5-7z"/>'},bn="#eadfc6",Oh={saci:{J:["fist",bn],K:["leg",bn],BLOCK:["shieldWind","#b9c8e6"],L:["tornado","#8fe6d2"],I:["flykick","#ff9466"],O:["smoke","#cdb9ff"],SP:["cap","#ffd27a"]},mula:{J:["hoof",bn],K:["kick",bn],BLOCK:["shieldDust","#b9c8e6"],L:["shoe","#d6dbe4"],I:["flame","#ffa23a"],O:["dust","#e0c090"],SP:["inferno","#ffd27a"]},curupira:{J:["fist",bn],K:["leg",bn],BLOCK:["shieldWind","#b9c8e6"],L:["leaf","#9be06a"],I:["roots","#d8b86a"],O:["invert","#7fe0c0"],SP:["tree","#ffd27a"]},iara:{J:["fin",bn],K:["tailFin",bn],BLOCK:["shieldDust","#b9c8e6"],L:["note","#9ff0ff"],I:["current","#5fd0e0"],O:["dive","#7fc8e8"],SP:["coil","#ffd27a"]},boto:{J:["hand",bn],K:["shoeW",bn],BLOCK:["shieldWind","#b9c8e6"],L:["dance","#ffb0c8"],I:["dolphin","#ff8fb8"],O:["mask","#fff0d0"],SP:["hat","#ffd27a"]},cuca:{J:["claw",bn],K:["tail",bn],BLOCK:["shieldDust","#b9c8e6"],L:["claw","#7fd8e0"],I:["eye","#c79bff"],O:["veil","#5fd0c8"],SP:["jaw","#ffd27a"]}},Fh={L:"mid",I:"special",O:"def"};function Qv(){const i={},e={};document.querySelectorAll("[data-btn]").forEach(n=>{n.innerHTML='<i class="ring"></i><span class="ico"></span><b class="n"></b>',i[n.dataset.btn]=n,e[n.dataset.btn]={prev:0,max:1,cool:!1,nores:!1,avail:null,q:-1,n:""},n.addEventListener("animationend",s=>{s.animationName==="back"&&n.classList.remove("back")})});function t(n,s,a,r,o){const c=i[n],l=e[n];l.cool!==s&&(l.cool=s,c.classList.toggle("cool",s)),l.nores!==a&&(l.nores=a,c.classList.toggle("nores",a));const h=Math.round(Math.max(0,Math.min(1,r))*100);h!==l.q&&(l.q=h,c.style.setProperty("--p",h+"%")),o!==l.n&&(l.n=o,c.lastElementChild.textContent=o);const u=!s&&!a;u&&l.avail===!1&&(c.classList.remove("back"),c.offsetWidth,c.classList.add("back")),l.avail=u}return{setKind(n){for(const s in Oh[n]){const[a,r]=Oh[n][s],o=i[s];o.querySelector(".ico").innerHTML=`<svg viewBox="0 0 48 48" aria-hidden="true">${Zv[a]}</svg>`,o.style.setProperty("--ic",r),o.classList.remove("back"),Object.assign(e[s],{prev:0,max:1,avail:null})}},update(n){for(const a in Fh){const r=Fh[a],o=e[a],c=n.cd[r];c>o.prev+1e-4&&(o.max=c),o.prev=c;const l=c>0,h=!l&&n.energy<(Fn[n.kind][r].cost||0);t(a,l,h,l?1-c/o.max:1,l&&c>=1?String(Math.ceil(c)):"")}const s=n.energy>=100;t("SP",!1,!s,n.energy/100,""),i.SP.classList.toggle("ready",s)}}}const fd="fs.controls";function ex(){const i={scale:1,pad:[0,0],stick:[0,0]};try{Object.assign(i,JSON.parse(localStorage.getItem(fd))||{})}catch{}return i}function pd(i){const e=document.documentElement.style;e.setProperty("--cs",i.scale),e.setProperty("--padx",i.pad[0]+"px"),e.setProperty("--pady",i.pad[1]+"px"),e.setProperty("--stx",i.stick[0]+"px"),e.setProperty("--sty",i.stick[1]+"px");try{localStorage.setItem(fd,JSON.stringify(i))}catch{}document.querySelectorAll("[data-cs]").forEach(t=>t.classList.toggle("sel",+t.dataset.cs===i.scale))}var Bh=["faces/boto.webp","faces/cuca.webp","faces/curupira.webp","faces/iara.webp","faces/mula.webp","faces/saci.webp","portraits/boto.webp","portraits/cuca.webp","portraits/curupira.webp","portraits/iara.webp","portraits/mula.webp","portraits/saci.webp"];const tx=typeof Bh<"u"?Bh:[],ur={};for(const i of tx){const e=i.replace(/\.[^.]+$/,"");ur[e]||(ur[e]="./media/"+i)}const Xs=i=>ur[i]||null,nx=i=>Object.keys(ur).filter(e=>e.startsWith(i));function Wc(i,e,t=""){const n=Xs(i),s=document.createElement("span");if(s.className="pic "+t,!n)return s.innerHTML=e,s;const a=new Image;return a.alt="",a.draggable=!1,a.decoding="async",a.onerror=()=>{s.innerHTML=e},a.src=n,s.append(a),s}const md="fs.audio",ix=i=>Math.max(0,Math.min(1,i)),Ei={sfx:.8,voice:.8,music:.5};try{Object.assign(Ei,JSON.parse(localStorage.getItem(md)||"{}"))}catch{}let xt=null,sa=null,Vh=null,la=null;const bi={},or={},Hh={};let Gh=0;const sn={want:null,on:null,timer:null,g:null,src:null};function sx(){clearInterval(sn.timer),sn.timer=null;const i=sn.g,e=sn.src;sn.g=sn.src=null,sn.on=null,i&&(i.gain.cancelScheduledValues(xt.currentTime),i.gain.setTargetAtTime(0,xt.currentTime,.25),setTimeout(()=>{try{e&&e.stop()}catch{}i.disconnect()},1500))}function yo(i){if(!xt||sn.on===i||(sx(),!i))return;sn.on=i;const e=sn.g=xt.createGain();e.gain.setValueAtTime(0,xt.currentTime),e.gain.linearRampToValueAtTime(1,xt.currentTime+1.2),e.connect(la);const t=or["audio/music/"+i];if(t){const n=sn.src=xt.createBufferSource();n.buffer=t,n.loop=!0,n.connect(e),n.start();return}}function Wh(i,e,t=1){const n=xt.createBufferSource();n.buffer=i,n.playbackRate.value=t,n.connect(e),n.start()}const qh=()=>xt&&xt.state==="running",qe={vol:Ei,get unlocked(){return!!xt},unlock(){if(xt){xt.state==="suspended"&&!document.hidden&&xt.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;try{xt=new i}catch{return}sa=xt.createDynamicsCompressor(),sa.threshold.value=-14,sa.ratio.value=4,sa.connect(xt.destination);for(const t of["sfx","voice","music"])bi[t]=xt.createGain(),bi[t].gain.value=Ei[t],bi[t].connect(sa);la=xt.createGain(),la.connect(bi.music),Vh=xt.createBuffer(1,xt.sampleRate*2,xt.sampleRate);const e=Vh.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;for(const t of nx("audio/"))fetch(Xs(t)).then(n=>n.arrayBuffer()).then(n=>xt.decodeAudioData(n)).then(n=>{or[t]=n,t==="audio/music/"+sn.on&&(sn.on=null,yo(sn.want))}).catch(()=>{});document.addEventListener("visibilitychange",()=>{document.hidden?xt.suspend():xt.resume()}),xt.state==="suspended"&&xt.resume(),yo(sn.want)},setVol(i,e){Ei[i]=Math.round(ix(e)*10)/10,bi[i]&&bi[i].gain.setTargetAtTime(Ei[i],xt.currentTime,.03);try{localStorage.setItem(md,JSON.stringify(Ei))}catch{}},play(i,e=1){if(!qh()||Ei.sfx<=0)return;const t=performance.now();if(t-(Hh[i]||0)<30)return;Hh[i]=t;const n=or["audio/sfx/"+i];if(n)return Wh(n,bi.sfx,e)},voice(i,e,t=!1){if(!qh()||Ei.voice<=0)return;const n=performance.now();if(!t&&n-Gh<220)return;Gh=n;const s=or[`audio/voice/${i}_${e}`];if(s)return Wh(s,bi.voice,.96+Math.random()*.08)},music(i){sn.want=i,xt&&yo(i)},duck(i){la&&la.gain.setTargetAtTime(i?.3:1,xt.currentTime,.1)}},Xh=["","FÁCIL","MÉDIO","DIFÍCIL"],ax=["Força","Velocidade","Resistência","Alcance","Mobilidade"],Ht={saci:{short:"SACI",tags:"VELOCIDADE · EVASÃO · CONTROLE",diff:2,attrs:[60,100,50,70,100],color:"#c21d12",why:"Rápido e frágil: vence quem entra, bate e some.",tips:["Comece com LEVE, LEVE, LEVE e feche com PESADO.","Solte o Redemoinho de longe e entre atrás dele.","Sumiu no vento atravessa o golpe do adversário — custa energia."],svg:'<svg viewBox="0 0 48 48"><circle cx="24" cy="29" r="13" fill="#3a2418"/><path d="M9 24c1-13 8-20 22-22-3 5-2 9 2 12 4 3 6 6 6 10z" fill="#c21d12"/><circle cx="19" cy="30" r="2" fill="#ffd27a"/><circle cx="29" cy="30" r="2" fill="#ffd27a"/><path d="M19 37q5 4 10 0" stroke="#e6d9bd" stroke-width="2" fill="none"/></svg>'},mula:{short:"MULA",tags:"FORÇA · RESISTÊNCIA · PRESSÃO",diff:1,attrs:[90,50,90,70,40],color:"#ff7a1f",why:"Muita vida, golpes longos e fortes: perdoa erros.",tips:["As patadas alcançam longe: bata antes de o adversário chegar.","A Investida (→ PESADO) aguenta um golpe no caminho.","Adversário nas suas costas? O Coice responde na hora."],svg:'<svg viewBox="0 0 48 48"><path d="M12 46V30c0-6 5-10 12-10s12 4 12 10v16z" fill="#2a1a16"/><path d="M25 2c1 7 10 10 10 19a11 11 0 0 1-22 0c0-5 3-7 5-10 0 3 1 5 3 5 2-4-1-9 4-14z" fill="#ff7a1f"/><path d="M24 14c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-4 2-5 1 1 2 1 3-4z" fill="#ffd27a"/></svg>'},curupira:{short:"CURUPIRA",tags:"AGILIDADE · ARMADILHA · TERRITÓRIO",diff:3,attrs:[70,90,60,80,90],color:"#e2491a",why:"Depende de armadilhas e de ler o adversário.",tips:["A Ira da Floresta nasce sob o adversário: prenda e corra para o combo.","A Lâmina da Mata é rápida: use para interromper de longe.","O Caminho Invertido desliza para onde você apontar e engana o ataque."],svg:'<svg viewBox="0 0 48 48"><path d="M6 24l3-14 5 7 2-13 6 10 4-12 4 12 6-9 1 13 6-6-3 14z" fill="#e2491a"/><path d="M14 22l3-9 4 6 3-9 4 9 4-6 3 9z" fill="#ffa22e"/><circle cx="24" cy="30" r="12" fill="#94603a"/><circle cx="19" cy="29" r="2" fill="#9dff5a"/><circle cx="29" cy="29" r="2" fill="#9dff5a"/><path d="M12 42c6-5 18-5 24 0l-4 5H16z" fill="#3f7a2c"/><path d="M20 36h8" stroke="#2a160c" stroke-width="2"/></svg>'},cuca:{short:"CUCA",tags:"MAGIA · LONGO ALCANCE · AGARRÕES",diff:2,attrs:[70,40,70,90,50],color:"#2a8478",why:"Lenta, mas controla a luta de longe.",tips:["O Pesadelo da Cuca desorienta: acertou, avance.","O Véu do Pesadelo absorve um golpe — levante antes de atacar.","De perto, as Garras da Bruxa e o agarrão castigam quem só defende."],svg:'<svg viewBox="0 0 48 48"><path d="M8 46c-3-16 0-30 10-36h12c10 6 13 20 10 36z" fill="#eeeadf"/><path d="M13 20c0-7 5-11 11-11s11 4 11 11l-3 20c-1 4-4 6-8 6s-7-2-8-6z" fill="#2a8478"/><path d="M17 34h14l-1 8c-1 3-3 4-6 4s-5-1-6-4z" fill="#a9cf9a"/><circle cx="18" cy="19" r="3.2" fill="#ffd23a"/><circle cx="30" cy="19" r="3.2" fill="#ffd23a"/><path d="M18 17v4M30 17v4" stroke="#120a04" stroke-width="1.5"/><path d="M17 34l2 3 2-3 2 3 2-3 2 3 2-3 2 3" stroke="#f2ecd8" stroke-width="1.5" fill="none"/><path d="M13 12h22" stroke="#caa23c" stroke-width="2.5"/></svg>'},iara:{short:"IARA",tags:"ALCANCE · CONTROLE · ÁGUA",diff:3,attrs:[60,60,60,95,70],color:"#2fb3c4",why:"Forte de longe e frágil de perto: a luta é sobre manter a distância.",tips:["O Canto encanta quem vem chegando: ele anda e esquiva mais devagar por um tempo.","A Correnteza corre rente ao chão — defenda baixo quando ela vier.","O Mergulho Encantado tira a Iara do aperto, mas quem ressurge fica exposta."],svg:'<svg viewBox="0 0 48 48"><path d="M4 46c6-6 12-6 20-3s14 3 20-3v8H4z" fill="#1d6f80"/><path d="M10 40c-2-14 1-27 14-31 13 4 16 17 14 31-3-5-7-7-14-7s-11 2-14 7z" fill="#0c3b2c"/><ellipse cx="24" cy="22" rx="9" ry="11" fill="#a07a5a"/><path d="M15 18c2-7 16-7 18 0-4-2-14-2-18 0z" fill="#0c3b2c"/><circle cx="20" cy="22" r="1.8" fill="#9ff0ff"/><circle cx="28" cy="22" r="1.8" fill="#9ff0ff"/><path d="M21 28q3 2 6 0" stroke="#5a2a2a" stroke-width="1.5" fill="none"/><path class="w" d="M6 44c4-3 8-3 12 0s8 3 12 0 8-3 12 0" stroke="#9ff0ff" stroke-width="1.4" fill="none" opacity=".7"/></svg>'},boto:{short:"BOTO",tags:"EVASÃO · LEITURA · FINTA",diff:3,attrs:[65,85,60,60,95],color:"#ff8fb8",why:"Escorregadio e enganador: vence lendo o adversário, não trocando golpes.",tips:["A Dança do Encantado desvia de um golpe no começo do passo — erre a leitura e apanha.","A Pele de Boto dura alguns segundos e muda a investida e a ombrada.","O Disfarce provoca uma reação; aperte um golpe logo depois para emendar."],svg:'<svg viewBox="0 0 48 48"><path d="M8 48c1-10 7-15 16-15s15 5 16 15z" fill="#f2efe6"/><path d="M21 33l3 6 3-6z" fill="#ff8fb8"/><ellipse cx="24" cy="23" rx="8" ry="9.5" fill="#d9a184"/><path d="M8 15h32v3H8z" fill="#f6f3ea"/><path d="M15 15c0-8 18-8 18 0z" fill="#f6f3ea"/><path d="M15 13h18v2H15z" fill="#ff8fb8"/><circle cx="20.5" cy="23" r="1.6" fill="#2a1a16"/><circle cx="27.5" cy="23" r="1.6" fill="#2a1a16"/><path d="M20 28q4 3 8 0" stroke="#7a3a3a" stroke-width="1.5" fill="none"/></svg>'}},dr="fs.progress",qc=1,Kt=[{id:"causos",name:"Primeiros Causos",trophies:0,cap:3,cpu:1,legends:["saci","mula","cuca"],text:"Rodas de conversa, beira de fogueira: onde os causos começam."},{id:"trilhas",name:"Trilhas da Mata",trophies:100,cap:5,cpu:2,legends:["curupira"],text:"Mata fechada, rastros que enganam. Aqui o Curupira pode ser encontrado."},{id:"aguas",name:"Águas Encantadas",trophies:300,cap:7,cpu:3,legends:["iara","boto"],text:"Rios e igarapés da Amazônia, território da Iara e do Boto."}],is=Kt.flatMap(i=>i.legends),Xc=Kt[0].legends,wt={unlock:6,daily:3,achadoCoins:40,win:{trophies:30,xp:50,coins:25},loss:{trophies:-10,xp:20,coins:10},minTime:20,minDmg:25,hpPerLv:.04,dmgPerLv:.03,trade:[200,300,400]},Ls=i=>({vest:i+1,coins:50*i});function gd(i){let e=1,t=100;for(;i>=t;)i-=t,e++,t=100+50*(e-1);return{level:e,into:i,need:t}}function vd(i){const e=Math.max(1,i|0)-1;return{hpMul:1+wt.hpPerLv*e,dmgMul:1+wt.dmgPerLv*e}}const xd=(i=new Date)=>`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,Kc=i=>Kt.reduce((e,t,n)=>i>=t.trophies?n:e,0),fr=i=>Kt.findIndex(e=>e.legends.includes(i));function da(){const i={};for(const e of is)i[e]={vest:0,unlocked:Xc.includes(e),level:1};return{v:qc,trophies:0,maxArena:0,xp:0,coins:0,daily:{day:"",n:0,t:0},pending:0,fav:null,team:[],legends:i}}const ii=(i,e,t,n)=>Number.isFinite(i)?Math.min(t,Math.max(e,Math.floor(i))):n;function _d(i){if(!i||typeof i!="object"||i.v!==qc)return null;const e=da();e.trophies=ii(i.trophies,0,1e6,0),e.xp=ii(i.xp,0,1e8,0),e.coins=ii(i.coins,0,1e8,0),e.maxArena=Math.max(Kc(e.trophies),ii(i.maxArena,0,Kt.length-1,0)),i.daily&&typeof i.daily.day=="string"&&/^\d{4}-\d\d-\d\d$/.test(i.daily.day)&&(e.daily={day:i.daily.day,n:ii(i.daily.n,0,wt.daily,0),t:ii(i.daily.t,0,wt.trade.length,0)}),e.pending=ii(i.pending,0,wt.daily,0);const t=i.legends&&typeof i.legends=="object"?i.legends:{};for(const n of is){const s=t[n]&&typeof t[n]=="object"?t[n]:{},a=e.legends[n],r=fr(n)<=e.maxArena;a.vest=r?ii(s.vest,0,9999,0):0,a.unlocked=Xc.includes(n)||r&&s.unlocked===!0,a.level=a.unlocked?ii(s.level,1,Kt[e.maxArena].cap,1):1}return e.fav=is.includes(i.fav)&&Ni(e).includes(i.fav)?i.fav:null,e.team=Array.isArray(i.team)?[...new Set(i.team.filter(n=>is.includes(n)&&e.legends[n].unlocked))].slice(0,3):[],e}function Md(i){let e=null;try{e=i.getItem(dr)}catch{return{s:da(),recovered:!1}}if(e==null)return{s:da(),recovered:!1};let t=null;try{t=JSON.parse(e)}catch{}const n=_d(t);if(n)return{s:n,recovered:!1};try{i.setItem(dr+".bak",String(e).slice(0,2e4))}catch{}return{s:da(),recovered:!0}}function _c(i,e){try{return i.setItem(dr,JSON.stringify(e)),!0}catch{return!1}}const es=i=>Kt[i.maxArena].cap,Ni=i=>Kt.slice(0,i.maxArena+1).flatMap(e=>e.legends),rx=i=>is.filter(e=>i.legends[e].unlocked);function Yc(i,e){const t=xd(e);i.daily.day!==t&&(i.daily={day:t,n:0,t:0})}function $c(i,e){return Yc(i,e),wt.daily-i.daily.n}function yd(i,e){i.trophies=Math.max(0,e);const t=Kc(i.trophies),n=t>i.maxArena;return n&&(i.maxArena=t),n}function Sd(i,e,t=new Date){const n={valid:!1,reason:"",trophies:0,xp:0,coins:0,achado:!1,newArena:-1};if(e.training)return n.reason="Treino não rende recompensas",n;if(!(e.time>=wt.minTime)||!(e.dmg>=wt.minDmg))return n.reason="Partida sem disputa: sem recompensas",n;const s=e.win?wt.win:wt.loss;n.valid=!0;const a=i.trophies;return yd(i,a+s.trophies)&&(n.newArena=i.maxArena),n.trophies=i.trophies-a,n.xp=s.xp,n.coins=s.coins,i.xp+=s.xp,i.coins+=s.coins,e.win&&$c(i,t)>0&&(i.daily.n++,i.pending++,n.achado=!0),n}function Jc(i,e,t=1){if(!Ni(i).includes(e))return{ok:!1};const n=i.legends[e];n.vest+=t;let s=!1;return!n.unlocked&&n.vest>=wt.unlock&&(n.vest-=wt.unlock,n.unlocked=!0,n.level=1,s=!0),{ok:!0,awakened:s}}function bd(i,e){return i.pending<=0||!Ni(i).includes(e)?{ok:!1}:(i.pending--,i.coins+=wt.achadoCoins,{...Jc(i,e),coins:wt.achadoCoins})}function Ed(i,e=new Date){Yc(i,e);const t=i.daily.t,n=wt.trade.length-t;return{left:n,price:n>0?wt.trade[t]:null,max:wt.trade.length}}function jc(i,e,t=new Date){const n=Ed(i,t);return Ni(i).includes(e)?n.left<=0?{ok:!1,why:"Trocas de hoje esgotadas",...n}:i.coins<n.price?{ok:!1,why:"Faltam moedas",...n}:{ok:!0,...n}:{ok:!1,why:"Arena ainda não alcançada",...n}}function wd(i,e,t=new Date){const n=jc(i,e,t);return n.ok?(i.coins-=n.price,i.daily.t++,{...Jc(i,e),ok:!0,price:n.price}):{ok:!1,why:n.why}}function Zc(i,e){const t=i.legends[e];if(!t||!t.unlocked)return{ok:!1,why:"Lenda ainda adormecida"};if(t.level>=es(i))return{ok:!1,why:t.level>=Kt[Kt.length-1].cap?"Nível máximo":"Limite da arena atual"};const n=Ls(t.level);return t.vest<n.vest?{ok:!1,why:"Faltam Vestígios",c:n}:i.coins<n.coins?{ok:!1,why:"Faltam moedas",c:n}:{ok:!0,c:n}}function Rd(i,e){const t=Zc(i,e);if(!t.ok)return!1;const n=i.legends[e];return n.vest-=t.c.vest,i.coins-=t.c.coins,n.level++,!0}function Ad(i,e){return e!==null&&!Ni(i).includes(e)?!1:(i.fav=e,!0)}function Td(i,e){const t=i.team.indexOf(e);return t>=0?(i.team.splice(t,1),!0):!i.legends[e]||!i.legends[e].unlocked||i.team.length>=3?!1:(i.team.push(e),!0)}const Ld=(i,e)=>i.legends[e]&&i.legends[e].unlocked?i.legends[e].level:1,ox=Object.freeze(Object.defineProperty({__proto__:null,ARENAS:Kt,KEY:dr,LEGENDS:is,RULES:wt,SCHEMA:qc,START:Xc,accountLevel:gd,achadosLeft:$c,addVestigio:Jc,arenaFor:Kc,arenaOfLegend:fr,canEvolve:Zc,canTrade:jc,cap:es,day:xd,effective:vd,eligible:Ni,evoCost:Ls,evolve:Rd,fresh:da,levelOf:Ld,load:Md,matchResult:Sd,openAchado:bd,rollDay:Yc,sanitize:_d,save:_c,setFav:Ad,setTrophies:yd,toggleTeam:Td,trade:wd,tradeInfo:Ed,unlocked:rx},Symbol.toStringTag,{value:"Module"})),Es=i=>`<svg viewBox="0 0 64 64" aria-hidden="true">${i}</svg>`,ja={saci:Es('<path d="M14 50 C22 30 30 14 46 8 C44 22 46 36 52 50 Z" fill="#c8241c" stroke="#ffb08a" stroke-width="2"/><path d="M12 50 h42 a3 3 0 0 1 0 6 h-42 a3 3 0 0 1 0-6Z" fill="#8a140e"/><path d="M46 8 q6 -2 8 3" fill="none" stroke="#ffb08a" stroke-width="2"/><path d="M8 28 q6-4 10 0 t10 0" fill="none" stroke="#e8d9b5" stroke-width="2" opacity=".6"/>'),mula:Es('<path d="M18 52 C10 40 12 20 32 14 C52 20 54 40 46 52 L40 52 C44 42 42 28 32 24 C22 28 20 42 24 52 Z" fill="#9a9a9a" stroke="#e8e8e8" stroke-width="2"/><circle cx="21" cy="47" r="1.8" fill="#333"/><circle cx="43" cy="47" r="1.8" fill="#333"/><path d="M32 4 C38 12 40 18 32 24 C24 18 26 12 32 4Z" fill="#ff7a1f"/><path d="M32 10 C35 15 35 19 32 22 C29 19 29 15 32 10Z" fill="#ffd27a"/>'),curupira:Es('<g fill="#c9572a" stroke="#ffb08a" stroke-width="1.5"><ellipse cx="22" cy="40" rx="7" ry="11"/><circle cx="17" cy="54" r="2.4"/><circle cx="22" cy="56" r="2.4"/><circle cx="27" cy="54" r="2.4"/><ellipse cx="42" cy="22" rx="7" ry="11"/><circle cx="37" cy="36" r="2.4"/><circle cx="42" cy="38" r="2.4"/><circle cx="47" cy="36" r="2.4"/></g><path d="M8 10 l6 6 M56 54 l-6-6" stroke="#7fd04a" stroke-width="2"/>'),cuca:Es('<path d="M12 30 h40 l-4 20 a6 6 0 0 1-6 5 h-20 a6 6 0 0 1-6-5Z" fill="#3a2a40" stroke="#b58ae0" stroke-width="2"/><rect x="9" y="26" width="46" height="6" rx="3" fill="#5a3b6a"/><g fill="#9dff5a" opacity=".85"><circle cx="24" cy="20" r="4"/><circle cx="34" cy="14" r="3"/><circle cx="41" cy="21" r="2.5"/></g><path d="M48 6 a8 8 0 1 0 8 10 a6 6 0 1 1-8-10Z" fill="#e8d9b5"/>'),iara:Es('<g fill="#2fa8a0" stroke="#bff3ee" stroke-width="1.4"><path d="M10 34 a8 8 0 0 1 16 0Z"/><path d="M26 34 a8 8 0 0 1 16 0Z"/><path d="M18 46 a8 8 0 0 1 16 0Z"/><path d="M34 46 a8 8 0 0 1 16 0Z"/><path d="M42 34 a8 8 0 0 1 16 0Z"/></g><g fill="#ffd27a"><path d="M20 6 v14 a4 3 0 1 1-2-2.6 V8 l12-3 v12 a4 3 0 1 1-2-2.6 V8Z"/></g><path d="M6 56 q8-5 16 0 t16 0 t16 0" fill="none" stroke="#5fd0e0" stroke-width="2"/>'),boto:Es('<ellipse cx="32" cy="40" rx="27" ry="7" fill="#f4efe4" stroke="#c9b48a" stroke-width="2"/><path d="M17 40 C17 22 21 14 32 14 C43 14 47 22 47 40Z" fill="#f4efe4" stroke="#c9b48a" stroke-width="2"/><path d="M17 33 h30 v5 h-30Z" fill="#ff8fb8"/><path d="M8 54 q8-5 16 0 t16 0 t16 0" fill="none" stroke="#ff8fb8" stroke-width="2" opacity=".7"/>')},So={saci:{name:"Gorro Vermelho",desc:"Fio de lã do gorro que, dizem, guarda o poder do Saci. Quem tomasse o gorro mandaria nele."},mula:{name:"Ferradura em Brasa",desc:"Ferradura ainda quente, deixada no galope das noites de quinta para sexta."},curupira:{name:"Pegadas Invertidas",desc:"Rastro de pés virados para trás: quem segue a trilha vai para o lado errado."},cuca:{name:"Caldeirão da Cuca",desc:"Fumaça de um caldeirão de feitiços. A Cuca vem pegar quem não dorme, diz a cantiga."},iara:{name:"Escama e Canto",desc:"Escama brilhante e um eco de canto que chama para o fundo do rio."},boto:{name:"Chapéu Branco",desc:"Chapéu de festa que o Boto nunca tira: esconde o furo de respirar no alto da cabeça."}},cx={saci:{origin:"Sul e Sudeste do Brasil · raízes indígenas (guarani), africanas e europeias",intro:"Menino travesso de uma perna só, que aparece nos redemoinhos de vento, esconde objetos, embaraça a crina dos cavalos e some numa risada.",trad:["Uma perna só, gorro vermelho e cachimbo","Surge e some dentro de redemoinhos","O gorro é a fonte do seu poder","Brincadeiras e travessuras pela casa e pelo pasto"],jogo:["Golpes, combos e o Poder Folclórico de luta",'Vestígio "Gorro Vermelho" como item colecionável',"Valores de vida, dano e níveis"]},mula:{origin:"Tradição ibérica trazida ao Brasil colonial · difundida no interior (Sudeste, Nordeste e Centro-Oeste)",intro:"Mulher amaldiçoada que vira uma mula sem cabeça, com fogo no lugar do pescoço, e galopa pelos campos nas noites de quinta para sexta-feira.",trad:["Fogo no lugar da cabeça","Ferraduras que soltam faíscas e relincho assustador","Maldição que dura até o canto do galo","Corre sete povoados numa só noite"],jogo:["Coices, investidas e o Poder Folclórico de luta",'Vestígio "Ferradura em Brasa" como item colecionável',"Valores de vida, dano e níveis"]},curupira:{origin:"Tupi · registrado já no século XVI · presente em todo o Brasil, sobretudo no Norte",intro:"Guardião das matas, de cabelos cor de fogo e pés virados para trás. Confunde caçadores que matam sem necessidade e faz quem o persegue se perder.",trad:["Pés virados para trás e rastro enganador","Protetor dos bichos e das árvores","Faz caçadores e lenhadores se perderem","Assobios e sons estranhos na mata"],jogo:["Raízes, folhas e o Poder Folclórico de luta",'Vestígio "Pegadas Invertidas" como item colecionável',"Valores de vida, dano e níveis"]},cuca:{origin:'Coca/Coco da tradição portuguesa e galega · no Brasil, a "papona" das cantigas de ninar',intro:"Velha bruxa que vem pegar as crianças que não querem dormir. Vive na mata e prepara feitiços; sua figura mudou muito ao longo do tempo.",trad:["Assombração das cantigas de ninar","Bruxa velha que faz feitiços","Pega quem não dorme ou desobedece","Mora longe, na mata ou em cavernas"],jogo:["Feitiços, véu e o Poder Folclórico de luta",'Vestígio "Caldeirão da Cuca" como item colecionável',"Valores de vida, dano e níveis"]},iara:{origin:'Amazônia e rios do Norte · nome de origem tupi, "senhora das águas" · mistura com a sereia europeia',intro:"Mulher dos rios de beleza e canto irresistíveis. Quem escuta seu canto, sobretudo pescadores, é levado para o fundo das águas e não volta.",trad:["Metade mulher, metade peixe","Canto que encanta e atrai","Leva quem a segue para o fundo do rio","Aparece no fim da tarde, à beira d'água"],jogo:["Mergulho, correntezas e o Poder Folclórico de luta",'Vestígio "Escama e Canto" como item colecionável',"Valores de vida, dano e níveis"]},boto:{origin:"Amazônia · ribeirinhos dos rios Amazonas, Negro e afluentes",intro:"O boto-cor-de-rosa sai do rio nas noites de festa transformado em rapaz elegante, todo de branco e de chapéu, dança, seduz e volta às águas antes do amanhecer.",trad:["Vira homem nas noites de festa","Roupa branca e chapéu que nunca tira","Galanteador e ótimo dançarino","Volta ao rio antes de o dia nascer"],jogo:['Dança, disfarce, "Pele de Boto" e o Poder Folclórico de luta','Vestígio "Chapéu Branco" como item colecionável',"Valores de vida, dano e níveis"]}},Mt=i=>document.getElementById(i),Za=i=>Wc((Xs("faces/"+i)?"faces/":"portraits/")+i,Ht[i].svg),Ge=(i,e,t)=>{const n=document.createElement(i);return e&&(n.className=e),t!=null&&(n.innerHTML=t),n},Vn=(i,e,t="")=>{const n=Ge("button",t,i);return n.addEventListener("click",e),n};function lx({store:i=localStorage,onChange:e=()=>{},sound:t=()=>{}}={}){const n=Md(i),s=n.s;let a=null;const r=()=>{_c(i,s),h(),e()},o=R=>Ht[R].short,c=R=>Kt[R];function l(R){const x=s.legends[R];if(!x.unlocked)return`${Math.min(x.vest,wt.unlock)}/${wt.unlock} VESTÍGIOS`;const M=Ls(x.level);return x.level>=es(s)?`NV ${x.level} · ${x.vest} VESTÍGIOS`:`NV ${x.level} · ${x.vest}/${M.vest} PARA EVOLUIR`}function h(){const R=gd(s.xp),x=$c(s);Mt("prof").innerHTML=`<span><b>ARENA</b> ${c(s.maxArena).name}</span><span><b>TROFÉUS</b> ${s.trophies}</span><span><b>CONTA</b> NV ${R.level}</span><span><b>MOEDAS</b> ${s.coins}</span><span><b>ACHADOS HOJE</b> ${x}/${wt.daily}</span>`;const M=Ge("span","pbtn");M.append(Vn("CAMINHO",()=>u("path")),Vn("COLEÇÃO",()=>u("col"))),s.pending>0&&M.append(Vn(`ABRIR ACHADO ·${s.pending}`,()=>y(),"hot")),Mt("prof").append(M)}function u(R){Mt("menu").style.display="none",Mt(R).style.display="flex",R==="path"?p():d(),t("sel")}for(const R of["path","col"])Mt(R).querySelector(".cback").addEventListener("click",()=>{Mt(R).style.display="none",Mt("menu").style.display="flex"});Mt("ficha").querySelector(".cback").addEventListener("click",()=>{Mt("ficha").style.display="none"});function p(){const R=Kt[Kt.length-1].trophies,x=Mt("pathA");x.replaceChildren(),Mt("pathBar").style.width=Math.min(100,100*s.trophies/R)+"%",Mt("pathT").textContent=`${s.trophies} TROFÉUS`,Kt.forEach((M,D)=>{const H=D<=s.maxArena,F=Ge("div","arena"+(H?" got":"")+(D===s.maxArena?" cur":""));F.innerHTML=`<small>${M.trophies} TROFÉUS · NÍVEL MÁX. ${M.cap}</small><h3>${M.name}</h3><p>${M.text}</p><em>${H?D===s.maxArena?"ARENA ATUAL":"CONQUISTADA":`FALTAM ${M.trophies-s.trophies} TROFÉUS`}</em>`;const G=Ge("div","alg");for(const O of M.legends){const z=s.legends[O],K=Ge("span","mini"+(z.unlocked?"":" off"));K.append(Za(O),Ge("b","",H?z.unlocked?o(O):l(O).split(" ")[0]:"?")),G.append(K)}F.append(G),x.append(F)})}function d(){Mt("team").replaceChildren(Ge("b","","EQUIPE"));for(let W=0;W<3;W++){const se=s.team[W],oe=Ge("span","slot");se?oe.append(Za(se)):oe.textContent="+",Mt("team").append(oe)}Mt("team").append(Ge("em","","Monte uma equipe de 3 lendas despertas (lutas em equipe chegam numa versão futura)."));const R=Mt("colG");R.replaceChildren(),a||(a=s.fav||"saci");for(const W of is){const se=s.legends[W],oe=fr(W)<=s.maxArena,ae=Ge("button","lc"+(se.unlocked?"":" off")+(W===a?" on":""));ae.append(Za(W),Ge("b","",o(W)+(s.fav===W?" ★":"")),Ge("i","",se.unlocked?`NV ${se.level}`:oe?`${Math.min(se.vest,6)}/6`:"🔒")),ae.addEventListener("click",()=>{a=W,d()}),R.append(ae)}const x=a,M=s.legends[x],D=fr(x),H=D<=s.maxArena,F=Zc(s,x),G=Mt("colD");G.replaceChildren();const O=Ge("div","dtop");O.append(Ge("span","sym",ja[x]),Ge("div","",`<h3>${Di[x].name}</h3><small>${c(D).name.toUpperCase()}${M.unlocked?" · DESPERTA":H?" · ADORMECIDA":" · ARENA NÃO ALCANÇADA"}</small>`)),G.append(O);const z=M.unlocked?M.level>=es(s)?100:100*Math.min(1,M.vest/Ls(M.level).vest):100*Math.min(1,M.vest/wt.unlock);G.append(Ge("div","vbar",`<i style="width:${z}%"></i>`),Ge("p","vt",`<b>${So[x].name}</b> · ${l(x)}`));let K;if(!H)K=`Pode ser descoberta a partir de <b>${c(D).name}</b> (${c(D).trophies} troféus). Chegar à arena não desperta a lenda: junte 6 Vestígios.`;else if(!M.unlocked)K=`Junte ${wt.unlock} Vestígios (em Achados ou na troca de moedas) para despertar.`;else if(M.level>=es(s))K=M.level>=Kt[Kt.length-1].cap?"Nível máximo.":`Limite da arena atual (NV ${es(s)}). Avance no Caminho para evoluir mais.`;else{const W=Ls(M.level),se=vd(M.level+1);K=`Próxima evolução: NV ${M.level+1} · ${W.vest} Vestígios + ${W.coins} moedas · vida +${Math.round((se.hpMul-1)*100)}%, dano +${Math.round((se.dmgMul-1)*100)}% sobre a base`}G.append(Ge("p","nx",K));const k=jc(s,x);H&&G.append(Ge("p","nx tr",k.left>0?`Troca: <b>${k.price} moedas</b> → 1 Vestígio · ${k.left}/${k.max} trocas hoje (o preço sobe a cada troca)`:`Trocas de hoje esgotadas (${k.max}/${k.max}). Amanhã voltam a partir de ${wt.trade[0]} moedas.`));const J=Ge("div","dbtn"),Q=Vn(k.left>0?`TROCAR ${k.price} MOEDAS`:"TROCAS ESGOTADAS",()=>g(x));Q.disabled=!k.ok,k.ok||(Q.title=k.why);const Z=Vn("EVOLUIR",()=>{Rd(s,x)&&(r(),t("sel"),d())});Z.disabled=!F.ok,!F.ok&&M.unlocked&&(Z.title=F.why);const de=Vn(s.fav===x?"FAVORITA ★":"FAVORITA",()=>{Ad(s,s.fav===x?null:x)&&(r(),d())});de.disabled=!H;const le=Vn(s.team.includes(x)?"TIRAR DA EQUIPE":"PÔR NA EQUIPE",()=>{Td(s,x)&&(r(),d())});le.disabled=!M.unlocked||!s.team.includes(x)&&s.team.length>=3,J.append(Z,Q,de,le,Vn("FICHA",()=>v(x))),G.append(J)}function g(R){const x=wd(s,R);x.ok&&(r(),x.awakened?(w(R,x,"CONTINUAR",()=>{Mt("ach").style.display="none",d()}),Mt("ach").style.display="flex"):(t("sel"),d()))}function v(R){const x=cx[R],M=Mt("fichaB");M.replaceChildren();const D=Ge("div","dtop");D.append(Ge("span","sym",ja[R]),Ge("div","",`<h3>${Di[R].name}</h3><small>${x.origin}</small>`)),M.append(D,Ge("p","intro",x.intro));const H=Ge("div","fcols");H.append(Ge("div","",`<b>DA TRADIÇÃO POPULAR</b><ul>${x.trad.map(F=>`<li>${F}</li>`).join("")}</ul>`),Ge("div","inv",`<b>CRIADO PARA O JOGO</b><ul>${x.jogo.map(F=>`<li>${F}</li>`).join("")}</ul>`)),M.append(H,Ge("p","note","Versões dos causos variam de região para região; aqui está um resumo das mais conhecidas.")),Mt("ficha").style.display="flex",Mt("ficha").scrollTop=0}let m=null,f=null;function y(R){if(s.pending<=0)return;m=R||m;const x=S();f=x.includes(s.fav)?s.fav:x.find(M=>!s.legends[M].unlocked)||x[0],Mt("ach").className="screen",Mt("ach").style.display="flex",_(),t("sel")}const S=()=>Ni(s);function _(){const R=Mt("achB");R.replaceChildren(Ge("small","","ACHADO"),Ge("h2","",`+${wt.achadoCoins} MOEDAS e 1 VESTÍGIO`),Ge("p","","Escolha a lenda que vai receber o Vestígio"+(s.fav?" (a favorita já vem marcada)":"")+":"));const x=Ge("div","apick");for(const M of S()){const D=Ge("button",M===f?"on":"");D.append(Ge("span","sym",ja[M]),Ge("b","",o(M)+(s.fav===M?" ★":"")),Ge("i","",l(M))),D.addEventListener("click",()=>{f=M,_()}),x.append(D)}R.append(x,Vn("GUARDAR VESTÍGIO",T,"btn"))}function T(){const R=f,x=bd(s,R);x.ok&&(_c(i,s),h(),e(),w(R,x,s.pending>0?"PRÓXIMO ACHADO":"CONTINUAR",()=>{s.pending>0?_():A()}))}function w(R,x,M,D){const H=Mt("achB"),F=s.legends[R];H.replaceChildren();const G=Ge("div","abig");G.append(Ge("span","sym",ja[R])),x.awakened&&G.append(Za(R)),H.append(Ge("small","","VESTÍGIO ENCONTRADO"),G,Ge("h2","",So[R].name),Ge("p","",So[R].desc));const O=x.awakened?100:F.unlocked?F.level>=es(s)?100:100*Math.min(1,F.vest/Ls(F.level).vest):100*F.vest/wt.unlock;H.append(Ge("div","vbar",`<i style="width:${O}%"></i>`),Ge("p","vt",x.awakened?`<b>${Di[R].name} DESPERTOU!</b> Agora pode lutar com essa lenda.`:`${o(R)} · ${l(R)}`)),H.append(Vn(M,D,"btn")),Mt("ach").className="screen "+(x.awakened?"wake":"got"),t(x.awakened?"win":"sel")}function A(){Mt("ach").style.display="none";const R=m;m=null,R&&R()}return{s,P:ox,recovered:n.recovered,refresh:h,openAchado:y,save:()=>r(),unlocked:R=>s.legends[R].unlocked,level:R=>Ld(s,R),progressLine:l,pool:()=>Ni(s),cpuLevel:()=>Kt[s.maxArena].cpu,result(R){const x=Sd(s,R);return x.valid&&r(),x}}}const hx="A RODA DOS CAUSOS",ux=[{who:"narr",text:"Uma vez a cada cem anos, numa noite em que a fogueira queima azul, as lendas se reúnem na Roda dos Causos."},{who:"narr",text:"Quem vence a Roda ganha o direito de ter seu causo contado primeiro. E causo que é contado não morre: atravessa mais cem anos na boca do povo."},{who:"narr",text:"Ninguém ali é herói. Ninguém ali é vilão. Cada um luta pelo que é seu: território, fama, memória, liberdade."},{who:"narr",text:"Mas nesta noite a fogueira acendeu pálida. E, nas bordas da Roda, as histórias começaram a desbotar."}],dx={saci:"Roda boa é roda com bagunça. Vou ganhar, vou rir de todo mundo e ainda volto pra casa com o gorro na cabeça. Quem tentar tomar, que tente.",mula:"Dizem que quem vence a Roda pode mudar o fim do próprio causo. Cem anos galopando em brasa já bastam. Eu quero outro final.",curupira:"A Roda é feita na beira da minha mata. Vou vencer para que ninguém esqueça de quem são estas trilhas. Quem entrar sem respeito sai pelo caminho errado.",cuca:"As crianças já não perdem o sono por minha causa. Medo é memória, e eu não aceito ser esquecida. Vou vencer e voltar a ser cantada antes de dormir.",iara:"Os rios andam calados. Meu canto não chega mais à margem. Vencendo a Roda, minha voz volta a correr com a água.",boto:"Festa sem baile não é festa. Ultimamente a música some no meio da noite e ninguém sabe por quê. Vim dançar, vencer e descobrir quem anda roubando o som."},Kh=[{n:"ATO I",name:"A Fogueira Pálida",text:"As primeiras lutas da Roda. A chama perdeu a cor, e um sino distante marca o fim de alguma coisa a cada toque."},{n:"ATO II",name:"A Maré de Fuligem",text:"Onde uma história se apaga sobra cinza. A cinza juntou, criou vontade e agora avança sobre as trilhas da Roda."},{n:"ATO III",name:"O Apagador",text:"Alguém está apagando os causos de propósito. A Roda inteira desbota. Só resta uma luta antes de enfrentar quem segura a borracha."}],Yh={saci:{early:"Ô, chegou mais um pra Roda! Aposto meu cachimbo que você nem me vê passar.",late:"Você também viu as histórias sumindo? Eu prefiro brincar do que ficar com medo. Vem!",lost:"Tá bom, tá bom… mas escuta: meu redemoinho perdeu metade das folhas. Tem alguém comendo as histórias pelas beiradas."},mula:{early:"Saia do meu caminho. Esta noite eu galopo até o fim da Roda.",late:"Se tudo vai ser apagado, que eu ao menos queime antes. Lute.",lost:"O fogo ainda arde… mas ouvi um sino tocar e, por um instante, esqueci de quem eu fui. Isso nunca tinha acontecido."},curupira:{early:"Pegada virada, caminho trocado. Na minha mata quem manda sou eu.",late:"A mata está ficando cinza. Se você quer passar, prove que merece.",lost:"Perdi o rastro… e não foi por sua causa. Tem trilha minha que simplesmente deixou de existir."},cuca:{early:"Quem não dorme a Cuca vem pegar. E você parece bem acordado.",late:"Sem medo não há lembrança. Vou mostrar que ainda sei assustar.",lost:"Hmpf. Repare na fumaça do meu caldeirão: está ficando branca. Alguém está tirando o sabor dos pesadelos."},iara:{early:"Chegue mais perto da água. Escute… só um pouco.",late:"O rio está esquecendo o próprio nome. Não tenho mais paciência, só canto.",lost:"Minha voz falhou no meio da nota. Há um silêncio crescendo, e ele não é natural."},boto:{early:"Boa noite. Concede esta dança? Prometo que não piso no seu pé… muito.",late:"A festa acabou mais cedo em todo lugar. Pelo menos esta luta ainda tem música.",lost:"Belo passo. Agora escute: a cinza que sobe da fogueira não está caindo. Está andando."}},fx={"saci:curupira":"Saci! Você embaraçou de novo as trilhas da minha mata. Hoje eu desembaraço você.","curupira:saci":"Pé virado pra trás, é? Eu só tenho um pé e ainda chego antes!","iara:boto":"Iara, minha cara. Rio e baile sempre disputaram quem encanta mais. Vamos resolver?","boto:iara":"Boto de chapéu branco. Esse sorriso não funciona debaixo d’água.","mula:cuca":"Mula, você assusta galopando. Eu assusto sem sair da cozinha. Quem dá mais medo?","cuca:mula":"Bruxa velha, nenhum feitiço apaga meu fogo.","cuca:saci":"Velha Cuca! Vim buscar a receita do seu caldeirão. Prometo devolver… um dia.","saci:cuca":"Moleque de uma perna só. Você vai acabar dentro do meu caldeirão.","mula:curupira":"Fogo perto da minha mata, não. Dê meia-volta, Mula.","curupira:mula":"Guardião, eu não vim queimar suas árvores. Só vim passar.","cuca:iara":"Água de rio apaga fogo de caldeirão, bruxa.","iara:cuca":"Sereia, sua voz não me encanta. Já ouvi pesadelos mais afinados."},Ai={boss1:{name:"O SINEIRO DE CERA",short:"SINEIRO",color:"#e8c87a",about:"Feito da cera das velas esquecidas nas janelas, toca um sino que marca a hora em que um causo termina.",intro:["Dlém. Dlém. Cada toque é um fim. Eu só anuncio, não escolho.","Mas agora alguém me pediu para tocar muitas vezes… e eu não consigo parar."],tip:"Ele repete sempre a mesma sequência. Conte os toques: 1 = pancada de frente (defenda ou saia de perto), 2 = onda rasteira (defesa baixa ou esquiva), 3 = gotas de cera caindo (corra das marcas). Depois da sequência ele derrete por um instante: ataque.",lost:"O sino… finalmente parou. Eu não queria. Quem me deu esta corda tinha mãos brancas como página nova."},boss2:{name:"A MARÉ DE FULIGEM",short:"MARÉ",color:"#7a7a8a",about:"A cinza das histórias apagadas juntou-se e ganhou fome. Avança em ondas, ora devagar, ora num repente.",intro:["…","A Maré não fala. Ela sobe. Os passos que você ouve são os das histórias que ela já engoliu."],tip:"Leia o chão: a faixa marca a investida (saia para o lado), os anéis se abrem em ondas (defesa baixa ou esquiva na hora certa). Quando ela muda de ritmo, tudo fica mais rápido. Depois da investida ela fica parada: é a sua chance.",lost:"A fuligem assenta. No meio dela, letras soltas, pedaços de causos. Todos com a mesma marca: alguém os esfregou até sumir."},apagador:{name:"O APAGADOR",short:"APAGADOR",color:"#f2efe6",about:"Sem rosto, sem nome, sem causo. Acredita que histórias só servem para assustar e prender, e quer devolver ao mundo uma página em branco.",intro:["Medo, castigo, encanto, maldição. Vocês chamam isso de memória.","Eu chamo de peso. Uma página em branco não machuca ninguém.","Deixe-me apagar você também. Não vai doer. Não vai nada."],tip:"Ele usa os truques dos outros dois e muda de fase ao perder vida. Na última fase, a Página em Branco cobre a arena: procure a marca clara onde é seguro ficar.",phase:["","Você ainda lembra quem é? Vou tirar isso de você.","Chega de sinos e maré. Agora só existe o branco."],lost:"Uma página em branco… também pode ser o começo de uma história. Eu nunca… tinha pensado nisso."}},px={saci:["Um sino que não para de tocar? Isso eu calo rapidinho.","Uma maré de cinza… nem meu redemoinho varre tanta sujeira. Mas vou tentar.","Então é você que anda comendo as histórias. Devolve o meu causo!"],mula:["Esse toque… foi ele que me fez esquecer. Não de novo.","Fogo contra cinza. Já sei quem ganha.","Você quer apagar meu fim? Eu quero escrever outro. Não é a mesma coisa."],curupira:["Esse barulho espanta os bichos da mata. Vai acabar agora.","Ela engoliu minhas trilhas. Vou abrir caminho no meio dela.","Quem apaga rastros não conhece a floresta. Ela lembra de tudo."],cuca:["Sininho irritante. Nem para fazer medo serve.","Cinza no meu caldeirão? Que desaforo.","Sem medo as crianças não aprendem a voltar para casa. Você não entende nada de histórias."],iara:["Esse sino abafa o meu canto. Vou silenciá-lo.","A fuligem está entupindo os rios. Saia da água!","Você calou meu rio. Agora vai ouvir a voz inteira."],boto:["Sino fora de ritmo estraga qualquer baile.","Uma dança com a maré. Sempre quis.","Então foi você quem roubou a música. A última valsa é minha."]},mx=[{who:"narr",text:"O Apagador se desfez como giz molhado. Do branco que ele deixou começaram a brotar letras, e das letras, causos."},{who:"narr",text:"A fogueira voltou a queimar azul. Uma a uma, as lendas sentaram de novo na Roda, cada uma com sua história de volta."}],gx={saci:"O Saci venceu a Roda e foi o primeiro a ser contado. Seu causo correu de casa em casa por cem anos: leite derramado, crina trançada, chaleira que some. Ele nunca deixou ninguém tomar seu gorro. Dizem que, num redemoinho, dá para ouvir ele rindo da página em branco.",mula:"A Mula venceu a Roda e, como prometia a tradição, pôde mudar o fim do próprio causo. Escolheu não apagar nada: o fogo continuou, mas agora é ela quem decide para onde galopa. Nas noites de quinta para sexta, há quem jure ver a chama iluminando estradas para viajantes perdidos.",curupira:"O Curupira venceu a Roda e devolveu à mata todas as trilhas que a cinza havia engolido. Seu causo foi contado primeiro, e cada criança que o ouviu aprendeu a pedir licença antes de entrar no mato. As pegadas viradas continuam enganando caçadores, como deve ser.",cuca:"A Cuca venceu a Roda e voltou a ser cantada antes de dormir. O medo voltou, mas veio junto com ele a lembrança: quem ouve a cantiga sabe a hora de voltar para casa. No fundo do caldeirão, ela guardou um pedaço de giz do Apagador. Nunca se sabe quando um feitiço novo vai precisar de branco.",iara:"A Iara venceu a Roda e o canto voltou a correr com a água. Pescadores ouviram de novo a voz na curva do rio e souberam respeitá-la. O primeiro causo contado foi o dela, e por cem anos nenhum rio esqueceu o próprio nome.",boto:"O Boto venceu a Roda e a música voltou para as festas. Na primeira noite de baile, um moço de chapéu branco dançou até o amanhecer e sumiu antes de alguém perguntar o nome. Seu causo foi contado primeiro, entre risadas e desconfiança, como ele gosta."},vx="FIM DA RODA · Uma nova Roda pode começar com qualquer lenda.",Cd=["boss1","boss2","apagador"],Pd=i=>Cd.includes(i),wi=()=>new I,Dd=Math.PI*2,ui=i=>i<0?0:i>1?1:i,ki=(i,e,t)=>i+(e-i)*t,ai=.04,xx=(i,e,t)=>new kt({color:i,transparent:!0,opacity:e,depthWrite:!1,side:pt,fog:!1,blending:t?Ui:Ci}),Hn=(i,e,t=ai)=>{const n=new Ne(i,e);return n.rotation.x=-Math.PI/2,n.position.y=t,n.renderOrder=5,n};function _x(i,e){const t=new at,n=i.color,s=[],a=(r,o,c)=>{const l=xx(r,o,c);return s.push(l),l};if(i.type==="circle")t.position.set(i.x,0,i.z),t.add(Hn(new Xn(i.r-.12,i.r,48),a(n,.9))),i.base=Hn(new Bt(i.r,48),a(n,.12)),t.add(i.base),i.fill=Hn(new Bt(i.r,48),a(n,.4),ai+.005),t.add(i.fill);else if(i.type==="wedge"){t.position.set(i.x,0,i.z),t.rotation.y=i.ang;const r=-Math.PI/2-i.arc,o=i.arc*2;t.add(Hn(new Xn(i.r-.12,i.r,24,1,r,o),a(n,.9))),i.base=Hn(new Bt(i.r,24,r,o),a(n,.14)),t.add(i.base),i.fill=Hn(new Bt(i.r,24,r,o),a(n,.4),ai+.005),t.add(i.fill)}else if(i.type==="line"){t.position.set(i.x,0,i.z),t.rotation.y=i.ang;const r=(o,c,l)=>{const h=new Ws(o,i.L).translate(0,i.L/2,0),u=new Ne(h,a(n,c));return u.rotation.x=Math.PI/2,u.position.y=l,u.renderOrder=5,u};i.base=r(i.w,.14,ai),t.add(i.base);for(const o of[-1,1]){const c=r(.1,.9,ai+.003);c.position.x=o*i.w/2,t.add(c)}i.fill=r(i.w,.4,ai+.005),t.add(i.fill)}else if(i.type==="ring")t.position.set(i.x,0,i.z),i.fill=Hn(new Xn(.82,1,64),a(n,.85)),t.add(i.fill);else if(i.type==="blank"){i.base=Hn(new Bt(e+2.5,72),a(9341568,0),ai-.01),t.add(i.base);const r=new at;r.position.set(i.sx,0,i.sz),t.add(r),i.fill=Hn(new Bt(i.safeR,48),a(16774080,.55,!0),ai+.01),r.add(i.fill),i.edge=Hn(new Xn(i.safeR-.14,i.safeR,48),a(16777215,.95),ai+.012),r.add(i.edge)}return i.mats=s,t}const Mx=.4;class yx extends xc{constructor(e,t){super(e,t),this.isBoss=!0,this.haz=[],this.bin={move:wi(),block:!1,press:null},this.warnMul=1,this.diff="experiente",this.reset(this.pos.x,this.pos.z,this.facing)}reset(e,t,n){super.reset(e,t,n),this.haz&&this.clearHaz(),this.wait=1.2,this.seq=0,this.cur=null,this.hits=[],this.armorTag=0,this.tide=0,this.tideT=7,this.phaseN=1,this.nAct=0,this.forceRest=!1,this.strafe=1,this.strafeT=2}setup(e){this.diff=e;const t=e==="casual";this.warnMul=t?1.3:1,this.dmgMul*=t?.75:1,this.maxHp=Math.round(this.maxHp*(t?.85:1)),this.hp=this.maxHp}wm(){return this.warnMul*(this.kind==="apagador"&&this.phaseN===3?.8:1)}tw(){return this.wm()*(this.tide?.7:1)}col(){return this.kind==="boss1"?16762976:this.kind==="boss2"?10467583:16777215}spawnHaz(e){const t={t:0,fired:!1,ft:0,color:this.col(),h:"mid",push:4,stun:.45,...e};return t.g=_x(t,this.game.R),this.game.scene.add(t.g),this.haz.push(t),t}dropHaz(e){this.game.scene.remove(e.g),e.g.traverse(t=>{t.geometry&&t.geometry.dispose()}),e.mats.forEach(t=>t.dispose())}clearHaz(){for(const e of this.haz)this.dropHaz(e);this.haz.length=0}updHaz(e){const t=this.opp,n=this.game;for(const s of this.haz){s.t+=e;const a=ui(s.t/s.warn),r=a>.72?.5+.5*Math.sin(s.t*40):1;if(s.type==="ring"){if(s.fired){s.rr+=s.speed*e,s.g.scale.set(s.rr,1,s.rr),s.fill.material.opacity=.85;const o=Math.hypot(t.pos.x-s.x,t.pos.z-s.z);!s.hit&&Math.abs(o-s.rr)<.5&&t.y<.4&&(s.hit=!0,this.hitPlayer(s)),s.rr>n.R+2&&(s.dead=!0)}else{const o=.8+.5*a+.12*Math.sin(s.t*20);s.g.scale.set(o,1,o),s.fill.material.opacity=.35+.5*a*r,s.t>=s.warn&&(s.fired=!0,s.rr=1.2,n.fx.ring(s.g.position,s.color,2,.3))}continue}if(s.fired){s.ft+=e;const o=1-s.ft/.35;for(const c of s.mats)c.opacity=Math.max(0,Math.min(c.opacity,o));s.ft>.35&&(s.dead=!0)}else{if(s.fill)if(s.type==="blank")s.fill.material.opacity=.35+.45*r,s.base.material.opacity=.5*a;else{const o=Math.max(.01,a);s.type==="line"?s.fill.scale.y=o:s.fill.scale.set(o,o,1),s.fill.material.opacity=.25+.3*r*a}s.t>=s.warn&&(s.fired=!0,this.resolveHaz(s))}}for(let s=this.haz.length-1;s>=0;s--)this.haz[s].dead&&(this.dropHaz(this.haz[s]),this.haz.splice(s,1))}resolveHaz(e){const t=this.opp,n=this.game,s=n.fx,a=t.pos.x-e.x,r=t.pos.z-e.z,o=Math.hypot(a,r);let c=!1;if(e.type==="circle")c=o<e.r+t.radius*.5&&t.y<1.6;else if(e.type==="wedge"){const l=Math.sin(e.ang),h=Math.cos(e.ang);c=o<e.r+t.radius*.5&&t.y<1.6&&(o<1||Math.acos(Math.max(-1,Math.min(1,(a*l+r*h)/o)))<=e.arc+.15)}else if(e.type==="line"){const l=Math.sin(e.ang),h=Math.cos(e.ang),u=a*l+r*h,p=Math.abs(a*h-r*l);c=u>-t.radius&&u<e.L+t.radius&&p<e.w/2+t.radius*.5&&t.y<1.6}else e.type==="blank"&&(c=Math.hypot(t.pos.x-e.sx,t.pos.z-e.sz)>e.safeR);e.fill&&(e.fill.material.opacity=.95,e.fill.scale&&(e.type==="line"?e.fill.scale.y=1:e.type!=="blank"&&e.fill.scale.set(1,1,1))),e.type==="blank"&&(e.base.material.color.set(16777215),e.base.material.opacity=.9,n.shake=Math.max(n.shake,.5)),e.fx?e.fx(e):(s.ring({x:e.x,y:0,z:e.z},e.color,(e.r||2)*1.2,.3),s.dust({x:e.x,y:0,z:e.z},18,0,0,4)),n.audio.play("hitH",.8),c&&this.hitPlayer(e)}hitPlayer(e){const t=this.opp;if(t.state==="ko"||t.hp<=0)return;const n=e.dirv?e.dirv.clone():wi().set(t.pos.x-e.x,0,t.pos.z-e.z);n.lengthSq()<1e-4&&n.copy(this.dir),n.setY(0).normalize(),t.receive(this,{name:e.name,dmg:e.dmg,h:e.h,unblockable:e.unb,track:e.track,push:e.push,stun:e.stun,launch:e.launch,dirv:n,chip:.12})}doAct(e){e.i=0,this.setState("custom"),this.cur=e,this.anim=e.anim||"windup",this.custom=this.updAct,this.nAct++}updAct(e){const t=this.cur;if(!t||this.game.phase!=="fight"||this.game.mode!=="fight"){this.cur=null,this.setState("idle");return}for(this.st<(t.faceUntil??0)&&this.faceOpp(this.turn*e),this.pk=ui(this.st/t.dur);t.ev&&t.i<t.ev.length&&this.st>=t.ev[t.i][0];)t.ev[t.i++][1]();this.cur!==t||this.state!=="custom"||(t.tick&&t.tick(this.st,e),this.st>=t.dur&&(this.cur=null,this.setState("idle"),this.wait=t.after??.6))}canAct(){const e=this.opp.state;return e!=="down"&&e!=="getup"&&e!=="air"&&e!=="ko"&&e!=="grabbed"}tollEv(e,t){const n=this.game,s=Mx*this.warnMul,a=["DLÉM!","DLÉM DLÉM!","DLÉM DLÉM DLÉM!"];for(let r=0;r<e;r++)t.push([r*s,()=>{this.anim="toll",this.tollT=n.time,n.tag(this,a[r]),n.audio.play("count",1-r*.12),n.fx.ring(this.pos,this.col(),1.6+r*.7,.3,2.2)}]);return e*s}aSmash(){const e=[],t=this.tollEv(1,e),n=.75*this.wm();return e.push([t,()=>{this.anim="windup";const s=this.pos.clone().addScaledVector(this.dir,1.9);this.spawnHaz({type:"circle",x:s.x,z:s.z,r:1.9,warn:n,dmg:16,h:"mid",push:7,stun:.5,name:"Badalada",fx:a=>{const r=this.game.fx;r.ring({x:a.x,y:0,z:a.z},a.color,3,.35),r.dust({x:a.x,y:0,z:a.z},40,0,0,6,[.75,.62,.38]),this.game.shake=Math.max(this.game.shake,.45)}})}]),e.push([t+n,()=>{this.anim="strike"}]),{anim:"toll",dur:t+n+.5,armor:!0,after:.5,faceUntil:t,ev:e}}aWave(){const e=[],t=this.tollEv(2,e),n=.8*this.wm();return e.push([t,()=>{this.anim="windup",this.spawnHaz({type:"line",x:this.pos.x,z:this.pos.z,ang:this.facing,w:1.6,L:11,warn:n,dmg:13,h:"low",push:5,stun:.45,name:"Onda de Cera",dirv:this.dir.clone(),fx:s=>{const a=this.game.fx,r=Math.sin(s.ang),o=Math.cos(s.ang);for(let c=1;c<s.L;c+=1.4)a.dust({x:s.x+r*c,y:0,z:s.z+o*c},6,r,o,5,[.85,.72,.45],.6)}})}]),e.push([t+n,()=>{this.anim="strike"}]),{anim:"toll",dur:t+n+.5,armor:!0,after:.5,faceUntil:t,ev:e}}aDrops(){const e=[],t=this.tollEv(3,e),n=.9*this.wm(),s=this.opp;for(let a=0;a<3;a++)e.push([t+a*.45,()=>{this.anim="cast",this.spawnHaz({type:"circle",x:s.pos.x,z:s.pos.z,r:1.5,warn:n,dmg:11,unb:!0,push:3,stun:.4,name:"Gota de Cera",fx:r=>{const o=this.game.fx;o.sparks({x:r.x,y:.3,z:r.z},18,[1,.85,.5]),o.ring({x:r.x,y:0,z:r.z},r.color,2.2,.3),o.dust({x:r.x,y:0,z:r.z},14,0,0,3,[.9,.78,.5])}})}]);return{anim:"toll",dur:t+.9+n+.3,armor:!0,after:.4,faceUntil:t,ev:e}}aRest(e,t){const n=this.hp<this.maxHp*.5;return{anim:"tired",dur:(e||(n?1.8:2.2))*(this.diff==="casual"?1.15:1),vuln:!0,after:.5,ev:[[0,()=>{this.game.tag(this,t||(this.kind==="boss1"?"CERA MOLE!":"ABERTO!")),this.game.fx.ring(this.pos,16777215,2.4,.35)}]]}}aDash(e){const t=[],n=.7*this.tw();this.opp;const s=this.game.R-1;let a=0;const r={anim:"windup",dur:0,armor:!0,after:.5,ev:t};for(let o=0;o<e;o++){const c=a;t.push([c,()=>{this.anim="windup",this.faceOpp();const l=this.dir.clone();let h=Math.max(4,Math.min(9,this.dist()+2.5));for(;h>2&&Math.hypot(this.pos.x+l.x*h,this.pos.z+l.z*h)>s;)h-=.5;r.from=this.pos.clone(),r.to=this.pos.clone().addScaledVector(l,h),r.d0=c+n,this.spawnHaz({type:"line",x:this.pos.x,z:this.pos.z,ang:this.facing,w:1.8,L:h,warn:n+.12,dmg:15,h:"mid",push:8,stun:.5,name:"Investida de Fuligem",dirv:l,fx:()=>{}})}]),t.push([c+n,()=>{this.anim="dash",this.game.audio.play("whoosh",.8)}]),a=c+n+.3}return t.push([a,()=>{r.armor=!1,r.vuln=!0,r.from=null,this.anim="recover",this.game.tag(this,"EXPOSTA!")}]),r.tick=o=>{if(r.from&&o>=r.d0&&o<=r.d0+.3){const c=ui((o-r.d0)/.25);this.pos.lerpVectors(r.from,r.to,c),this.game.fx.smoke({x:this.pos.x,y:.6,z:this.pos.z},2,.7)}},r.dur=a+1.2*(this.diff==="casual"?1.15:1),r}aRings(e){const t=[],n=.6*this.tw();for(let s=0;s<e;s++)t.push([s*.8,()=>{this.anim="cast",this.spawnHaz({type:"ring",x:this.pos.x,z:this.pos.z,warn:n,speed:6.5,dmg:10,h:"low",push:3,stun:.4,name:"Anel de Fuligem"})}]);return{anim:"cast",dur:(e-1)*.8+n+.6,armor:!0,after:.7,ev:t}}aSwipe(){const e=[],t=.5*this.tw();return e.push([0,()=>{this.faceOpp(),this.spawnHaz({type:"wedge",x:this.pos.x,z:this.pos.z,ang:this.facing,r:2.4,arc:1.05,warn:t,dmg:12,h:"mid",push:6,stun:.45,name:"Varrida"})}]),e.push([t,()=>{this.anim="strike"}]),{anim:"windup",dur:t+.45,armor:!0,after:.55,ev:e}}aBlank(){const e=[],t=1.6*this.warnMul,n=this.opp,s=this.game;return e.push([0,()=>{let a=0,r=0;for(let o=0;o<16;o++){const c=Math.random()*Dd,l=2.5+Math.random()*1.5;if(a=n.pos.x+Math.sin(c)*l,r=n.pos.z+Math.cos(c)*l,Math.hypot(a,r)<7)break;if(o===15){const h=3/(Math.hypot(n.pos.x,n.pos.z)||1);a=n.pos.x*(1-h),r=n.pos.z*(1-h)}}this.spawnHaz({type:"blank",x:0,z:0,sx:a,sz:r,safeR:1.8,warn:t,dmg:22,unb:!0,track:!0,push:5,stun:.6,name:"Página em Branco",color:16777215,fx:()=>{s.fx.ring({x:a,y:0,z:r},16774080,3,.4),s.fx.smoke({x:n.pos.x,y:1,z:n.pos.z},8,1)}}),s.tag(this,"PÁGINA EM BRANCO"),s.say&&s.say("PÁGINA EM BRANCO<small>fique na marca clara</small>",1.5)}]),{anim:"cast",dur:t+.5,armor:!0,after:.1,ev:e}}aShift(e){const t=this.game;return{anim:"shift",dur:1.7,after:.6,ev:[[0,()=>{t.fx.ring(this.pos,16777215,6,.6),t.shake=Math.max(t.shake,.5)}],[.9,()=>t.tag(this,e===3?"FASE FINAL":"FASE 2")]],tick:()=>{Math.random()<.5&&t.fx.add.emit(this.pos.x+(Math.random()-.5)*2,.3+Math.random()*2.5,this.pos.z+(Math.random()-.5)*2,0,1.5,0,1,1,.95,.35,.9,0,1,.4,.9)}}}approach(e,t,n=0){const s=this.opp,a=wi().subVectors(s.pos,this.pos).setY(0),r=a.length();if(r<.01)return;a.divideScalar(r);const o=Math.max(-1,Math.min(1,(r-t)*.8)),c=wi().set(-a.z,0,a.x);e.move.copy(a).multiplyScalar(o).addScaledVector(c,n),e.move.lengthSq()>1&&e.move.normalize(),e.move.lengthSq()<.04&&e.move.set(0,0,0)}brainBell(e){if(this.approach(e,2.4),this.wait>0||!this.canAct())return;const t=["aSmash","aWave","aDrops","aRest"],n=t[this.seq++%4];this.doAct(n==="aRest"?this.aRest():this[n]())}brainTide(e,t){if((this.strafeT-=e)<=0&&(this.strafe=Math.random()<.5?-1:1,this.strafeT=1.5+Math.random()*1.5),this.approach(t,5,.7*this.strafe),this.wait>0||!this.canAct())return;const n=this.dist(),s=Math.random();n<2.6&&s<.7?this.doAct(this.aSwipe()):s<.55?this.doAct(this.aDash(this.tide?2:1)):this.doAct(this.aRings(this.tide?2:1)),this.tide&&(this.cur.after*=.7)}brainEraser(e,t){if(this.phaseN===1)return this.brainBell(t);if(this.phaseN===2)return this.brainTide(e,t);if(this.approach(t,3.4,.4*this.strafe),this.wait>0||!this.canAct())return;if(this.forceRest){this.forceRest=!1,this.doAct(this.aRest(1.6,"ABERTO!"));return}if(this.seq++,this.seq%4===0){this.doAct(this.aBlank()),this.forceRest=!0;return}const n=this.dist(),s=n<2.6?["aSwipe","aSmash","aDrops"]:["aWave","aDrops","aDash","aRings","aSmash"],a=s[Math.floor(Math.random()*s.length)];this.doAct(a==="aDash"?this.aDash(1):a==="aRings"?this.aRings(2):this[a]())}tideTick(e){(this.tideT-=e)>0||(this.tide=1-this.tide,this.tideT=this.tide?6:8,this.game.tag(this,this.tide?"MARÉ CHEIA!":"MARÉ BAIXA"),this.game.fx.ring(this.pos,this.tide?10467583:6316144,4,.5))}floor(){if(this.kind!=="apagador"||this.phaseN>=3)return;const e=this.maxHp*(this.phaseN===1?.55:.22);this.hp<e&&(this.hp=e)}checkPhase(){const e=this.hp/this.maxHp;(this.state==="idle"||this.state==="hit"||this.state==="custom"||this.state==="rooted")&&(this.phaseN===1&&e<=.66?this.go(2):this.phaseN===2&&e<=.33&&this.go(3))}go(e){const t=this.game,n=this.opp;if(this.phaseN=e,this.clearHaz(),this.invuln=1.9,this.hits=[],this.seq=0,this.tide=0,this.tideT=6,this.forceRest=!1,t.say&&t.say(`<span class="lmsg">${Ai.apagador.phase[e-1]}</span>`,2.6),this.dist()<4.5&&n.y<.5&&n.invuln<=0&&!["down","getup","air","ko","grabbed"].includes(n.state)){const s=wi().subVectors(n.pos,this.pos).setY(0).normalize();n.setState("hit"),n.stun=.4,n.vel.copy(s).multiplyScalar(9)}this.doAct(this.aShift(e))}resist(){const e=this.game,t=this.opp;if(this.hits=[],this.setState("idle"),this.invuln=.7,this.wait=.35,e.fx.ring(this.pos,16777215,3.5,.35),e.tag(this,"RESISTIU"),this.dist()<3.2&&t.y<.5&&t.invuln<=0&&!["down","getup","air","ko","grabbed"].includes(t.state)){const n=wi().subVectors(t.pos,this.pos).setY(0).normalize();t.setState("hit"),t.stun=.3,t.vel.copy(n).multiplyScalar(8)}}receive(e,t){if(this.invuln>0||this.state==="ko")return"miss";const n=this.state==="custom"?this.cur:null,s=this.game;if(n&&n.armor&&!t.thrown){const r=t.dmg*e.dmgMul*.4;if(this.hp-r>0)return this.hp-=r,this.floor(),e.gain(r*1.2),s.fx.sparks({x:this.pos.x,y:this.hitY,z:this.pos.z},10,[1,.95,.8]),s.hitstop=.04,this.armorTag<=0&&(s.tag(this,"NÃO PARA!"),this.armorTag=2.5),s.log({t:"hit",att:e,def:this,m:t,res:"armor",dmg:r}),"hit"}if(n&&n.vuln){const r=this.st,o=this.anim,c=this.custom,l=super.receive(e,t);return this.floor(),l==="hit"&&this.hp>0&&(this.state="custom",this.st=r,this.anim=o,this.custom=c,this.cur=n,this.y=0,this.vy=0,this.vel.set(0,0,0)),l}const a=super.receive(e,t);if(this.floor(),a==="hit"&&this.hp>0){this.state==="air"&&(this.y=0,this.vy=0,this.vel.multiplyScalar(.5),this.setState("hit"),this.stun=.45),this.wait=Math.max(this.wait,.45);const r=s.time;this.hits=this.hits.filter(o=>r-o<2.2),this.hits.push(r),this.hits.length>=5&&this.resist()}return a}update(e,t){const n=this.game,s=n.mode==="fight"&&n.phase==="fight"&&!n.cine;n.mode!=="fight"||n.phase==="ko"||n.phase==="over"?this.haz.length&&this.clearHaz():s&&this.updHaz(e),this.armorTag-=e,s&&this.kind==="apagador"&&this.checkPhase(),s&&(this.kind==="boss2"||this.kind==="apagador"&&this.phaseN===2)&&this.tideTick(e);const a=this.bin;a.move.set(0,0,0),a.block=!1,a.press=null,s&&this.state==="idle"&&this.opp.state!=="ko"&&(this.wait-=e,this.kind==="boss1"?this.brainBell(a):this.kind==="boss2"?this.brainTide(e,a):this.brainEraser(e,a)),super.update(e,this.state==="idle"?a:this.bin),this.kind==="boss2"&&e>0&&Math.random()<e*10&&n.fx.smoke({x:this.pos.x+(Math.random()-.5),y:.4,z:this.pos.z+(Math.random()-.5)},1,.6)}}function Sx(i,e){return new yx(i,e)}const ci=(i,e={})=>new wn({color:i,roughness:.8,...e}),zt=(i,e,t,n=0,s=0,a=0)=>{const r=new Ne(e,t);return r.position.set(n,s,a),i.add(r),r},Ti=(i,e=0,t=0,n=0)=>{const s=new at;return s.position.set(e,t,n),i.add(s),s};function Qc(i,e){const t={lean:0,fall:0,sq:1,bob:0,spin:0};switch(i.anim){case"walk":t.bob=Math.abs(Math.sin(e*6))*.08,t.lean=.08;break;case"hit":case"grabbed":case"rooted":t.lean=-.3;break;case"air":t.fall=-.9;break;case"down":case"ko":t.fall=-1.45;break;case"getup":t.fall=-1.45*(1-ui(i.pk));break;case"win":t.sq=1.06,t.lean=-.12;break;default:t.bob=Math.sin(e*2)*.03}return t}function el(i,e,t){const n={lean:0,fall:0,sq:1,bob:0,jolt:0};return{S:n,snap(){n.jolt=1},step(s,a,r){const o=t(s,r),c=ui(a*12);for(const l of["lean","fall","sq","bob"])n[l]=ki(n[l],o[l],l==="fall"?ui(a*7):c);n.jolt=Math.max(0,n.jolt-a*5),i.rotation.x=n.lean+n.fall-n.jolt*.25,i.scale.y=n.sq,i.position.y=n.bob;for(const l of e)l.emissiveIntensity=(l.userData.e||0)+n.jolt*.8;return o}}}const tl=(...i)=>{for(const e of i)e.userData.e=e.emissiveIntensity||0,(!e.emissive||e.emissive.getHex()===0)&&(e.emissive=new it(16777215),e.userData.e=0,e.emissiveIntensity=0);return i};function bx(){const i=new at,e=Ti(i),t=ci(14270602),n=ci(15721410),s=ci(10119722,{metalness:.6,roughness:.45}),a=new kt({color:1707784});zt(e,new nt(1,2,18),t,0,1,0);for(let g=0;g<7;g++){const v=g*.9;zt(e,new Ft(.12+g%3*.04,8,6),n,Math.sin(v)*(.55+g*.03),.4+g*.18,Math.cos(v)*(.55+g*.03))}zt(e,new Ft(.6,16,12),t,0,2.05,0).scale.set(1,.85,.9);const o=Ti(e,0,2.55,0);zt(o,new ln(.27,.3,.8,14),n,0,.4,0),zt(o,new Ft(.07,8,6),a,-.11,.45,.26),zt(o,new Ft(.07,8,6),a,.11,.45,.26);const c=zt(o,new Ft(.1,8,6),new kt({color:16762976}),0,.9,0);c.scale.set(1,1.8,1);const l=Ti(e,.55,2.15,.15);zt(l,new ln(.11,.1,1,8),t,0,-.45,.1).rotation.x=.5;const h=Ti(e,0,1.75,.8),u=zt(h,new ln(.2,.6,.75,18,1,!0),s,0,-.35,0);u.material.side=pt,zt(h,new Ft(.12,10,8),s,0,-.62,0),zt(h,new pn(.12,.04,6,12),s,0,.08,0);const p=el(e,tl(t,n),Qc);wi();const d={root:i,flamePos:wi(),flameK:.35,snap(){p.snap()},update(g,v,m){p.step(g,v,m);const f=ui(v*14);let y=0,S=1.75,_=.8,T=1;g.anim==="toll"?y=Math.sin((m-(g.tollT||0))*18)*.7*Math.exp(-(m-(g.tollT||0))*3):g.anim==="windup"?(y=-1.6,S=2.7,_=.6,e.rotation.x-=.15):g.anim==="strike"?(y=1.2,S=.9,_=1.3,e.rotation.x+=.45):g.anim==="cast"?(y=-2.6,S=3.1,_=.2):g.anim==="tired"&&(T=.78,e.rotation.x+=.35,y=.4,S=1),h.rotation.x=ki(h.rotation.x,y,f),h.position.y=ki(h.position.y,S,f),h.position.z=ki(h.position.z,_,f),e.scale.y*=T,e.scale.x=e.scale.z=1+(1-T)*.6,c.scale.set(1,1.8*(T<1?.5:1)+Math.sin(m*23)*.2,1),c.getWorldPosition(d.flamePos),d.flameK=T<1?.15:.35}};return d}function Ex(){const i=new at,e=Ti(i),t=ci(2829107,{roughness:1}),n=ci(5658212,{roughness:.9}),s=new kt({color:12574975}),a=[];for(let h=0;h<6;h++){const u=.75-h*.07;a.push(zt(e,new Ft(u,14,10),t,0,.45+h*.38,0))}const r=Ti(e,0,2.35,0),o=zt(r,new pn(.75,.16,8,20,Math.PI*1.1),n,0,.1,.1);o.rotation.y=Math.PI/2,zt(r,new Ft(.08,8,6),s,-.18,-.05,.45),zt(r,new Ft(.08,8,6),s,.18,-.05,.45);const c=zt(i,new pn(.95,.22,6,24),t,0,.15,0);c.rotation.x=Math.PI/2;const l=el(e,tl(t),Qc);return{root:i,snap(){l.snap()},update(h,u,p){l.step(h,u,p);let d=1,g=1,v=0;h.anim==="dash"?(d=1.7,g=.8,v=.55):h.anim==="windup"?(g=.85,v=-.25):h.anim==="cast"?g=1.15:h.anim==="recover"||h.anim==="tired"?(g=.75,v=.35):h.anim==="strike"&&(v=.5),e.rotation.x+=v,e.scale.y*=g,e.scale.z=ki(e.scale.z,d,ui(u*10)),a.forEach((m,f)=>{m.position.x=Math.sin(p*3+f*.9)*.12,m.position.z=Math.cos(p*2.3+f)*.08}),o.rotation.z=Math.sin(p*2)*.15+(h.anim==="strike"?-.6:0),c.rotation.z=p*1.5,c.scale.setScalar(1+Math.sin(p*4)*.06)}}}function wx(){const i=new at,e=Ti(i),t=ci(15921126,{roughness:.95}),n=ci(14472904,{roughness:.95}),s=ci(15243936,{roughness:.9}),a=ci(16250351,{roughness:.6});zt(e,new ft(.28,1.15,.28),n,-.25,.58,0),zt(e,new ft(.28,1.15,.28),n,.25,.58,0);for(let u=0;u<3;u++)zt(e,new ft(1-u*.08,1.35-u*.1,.1),u%2?n:t,(u-1)*.04,1.85-u*.03,.14-u*.14).rotation.z=(u-1)*.04;zt(e,new Ft(.32,16,12),a,0,2.85,0).scale.set(.85,1.15,.85);const o=[-1,1].map(u=>{const p=Ti(e,u*.62,2.4,0);return zt(p,new ft(.15,1.5,.15),t,0,-.75,0),zt(p,new ft(.34,.24,.48),s,0,-1.55,0),p}),c=[],l=new wn({color:15921126,roughness:.9,side:pt});for(let u=0;u<8;u++)c.push(zt(i,new Ws(.34,.44),l));const h=el(e,tl(t,a),Qc);return{root:i,snap(){h.snap()},update(u,p,d){h.step(u,p,d);const g=u.phaseN||1,v=ui(p*12);let m=0,f=.12,y=0;switch(u.anim){case"walk":m=Math.sin(d*6)*.4;break;case"toll":m=-1.4+Math.sin(d*16)*.3,f=-.25;break;case"windup":m=-2.8,f=.1;break;case"strike":m=-.2,f=.05,e.rotation.x+=.4;break;case"cast":m=-1.6,f=1.2;break;case"dash":m=.9,e.rotation.x+=.5;break;case"tired":case"recover":m=.3,f=.05,e.rotation.x+=.4;break;case"shift":m=-2.6,f=1.5,y=d*8;break;case"win":m=-2.4,f=.6;break}o.forEach((_,T)=>{const w=T?1:-1;_.rotation.x=ki(_.rotation.x,m,v),_.rotation.z=ki(_.rotation.z,w*f,v)}),e.rotation.y=y||ki(e.rotation.y,0,v);const S=g===1?3:g===2?5:8;l.color.setHex(g===3?6973024:15921126),c.forEach((_,T)=>{_.visible=T<S;const w=d*(1.2+g*.4)+T*Dd/S;_.position.set(Math.sin(w)*1.35,1.6+Math.sin(d*2+T)*.4,Math.cos(w)*1.35),_.rotation.set(Math.sin(d+T)*.5,w,Math.cos(d*1.3+T)*.4)})}}}const Rx={super:"",dodge:{t:.4,dist:1.5,ev:[0,0],cd:9}},Ax={boss1:{hp:230,speed:2.6,radius:.8,turn:6,mass:4,hitY:1.6,tagY:3.4,make:bx,attrs:[80,30,90,70,30],svg:'<svg viewBox="0 0 48 48"><path d="M10 46l8-24h12l8 24z" fill="#d9c08a"/><rect x="19" y="8" width="10" height="16" rx="2" fill="#efe3c2"/><path d="M24 1c3 4 3 6 0 8-3-2-3-4 0-8z" fill="#ffb347"/><circle cx="21.5" cy="15" r="1.6" fill="#2a1a10"/><circle cx="26.5" cy="15" r="1.6" fill="#2a1a10"/><path d="M31 38h12l-2-9h-8z" fill="#9a6a2a"/></svg>'},boss2:{hp:210,speed:3.8,radius:.75,turn:9,mass:3,hitY:1.3,tagY:2.8,make:Ex,attrs:[70,90,70,90,90],svg:'<svg viewBox="0 0 48 48"><path d="M4 46c2-14 6-22 14-26 4-8 12-12 20-10-6 2-8 6-6 10 6 2 10 10 12 26z" fill="#2b2b33"/><path d="M14 20c6-10 16-14 26-10" stroke="#7a7a8a" stroke-width="3" fill="none"/><circle cx="20" cy="28" r="2" fill="#bfe0ff"/><circle cx="28" cy="28" r="2" fill="#bfe0ff"/></svg>'},apagador:{hp:320,speed:3.2,radius:.7,turn:8,mass:4,hitY:1.6,tagY:3.6,make:wx,attrs:[90,70,90,90,70],svg:'<svg viewBox="0 0 48 48"><rect x="13" y="20" width="22" height="26" fill="#f2efe6"/><rect x="16" y="23" width="20" height="23" fill="#d8d2c4" opacity=".7"/><ellipse cx="24" cy="12" rx="7" ry="9" fill="#f7f5ef"/><rect x="3" y="34" width="10" height="6" fill="#e89aa0"/><rect x="35" y="34" width="10" height="6" fill="#e89aa0"/></svg>'}};for(const i of Cd){const e=Ax[i],t=Ai[i];Di[i]={...Rx,name:t.name,hp:e.hp,speed:e.speed,radius:e.radius,turn:e.turn,mass:e.mass,hitY:e.hitY,tagY:e.tagY},Fn[i]={},hd[i]=e.make,Ht[i]={short:t.short,tags:"CHEFE · CARREIRA",diff:3,attrs:e.attrs,color:t.color,why:t.about,tips:[t.tip],svg:e.svg}}const kd="fs.carreira",ga=["saci","mula","curupira","cuca","iara","boto"],Tx=["boss1","boss2","apagador"],Id=["casual","experiente"],Bs=[{act:0,r:0},{act:0,r:1},{act:0,b:"boss1"},{act:1,r:2},{act:1,r:3},{act:1,b:"boss2"},{act:2,r:4},{act:2,b:"apagador"}],$h={casual:{you:3,rival:[1,1,2]},experiente:{you:3,rival:[3,4,5]}},Lx=(i,e)=>{i=i.slice();for(let t=i.length-1;t>0;t--){const n=Math.floor(e()*(t+1));[i[t],i[n]]=[i[n],i[t]]}return i};function Cx(i,e="casual",t=Math.random){if(!ga.includes(i))throw new Error("lenda inválida");return{v:1,kind:i,diff:Id.includes(e)?e:"casual",stage:0,order:Lx(ga.filter(n=>n!==i),t),done:!1,tries:0,losses:0,seen:-1}}const Er=(i,e=i.stage)=>Bs[Math.min(e,Bs.length-1)];function Ki(i,e=i.stage){const t=Er(i,e);return t.b||i.order[t.r]}const cr=(i,e=i.stage)=>!!Er(i,e).b,ks=(i,e=i.stage)=>Er(i,e).act;function Px(i,e=i.stage){const t=$h[i.diff]||$h.casual;return{you:t.you,opp:cr(i,e)?1:t.rival[ks(i,e)]}}function Dx(i){if(i.done)return[];const e=[];return i.stage===0&&e.push("intro"),(i.stage===0||ks(i,i.stage)!==ks(i,i.stage-1))&&e.push("act"),e}function kx(i){return i.done||(i.tries=0,i.stage>=Bs.length-1?(i.done=!0,i.stage=Bs.length-1):i.stage++),i}function Ix(i){return i.done||(i.tries++,i.losses++),i}const ws=()=>Bs.length;function zx(i){return!i||typeof i!="object"||i.v!==1||!ga.includes(i.kind)||!Id.includes(i.diff)||!Number.isInteger(i.stage)||i.stage<0||i.stage>=Bs.length||!Array.isArray(i.order)||i.order.length!==5||new Set(i.order).size!==5||i.order.includes(i.kind)||!i.order.every(e=>ga.includes(e))?!1:typeof i.done=="boolean"}function Jh(i){try{const e=JSON.parse(i.getItem(kd));return zx(e)?(e.tries=e.tries|0,e.losses=e.losses|0,e.seen=Number.isInteger(e.seen)?e.seen:-1,e):null}catch{return null}}function bo(i,e){try{return i.setItem(kd,JSON.stringify(e)),!0}catch{return!1}}const Ux='<svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="fg" cx=".5" cy=".7" r=".6"><stop offset="0" stop-color="#cfe6ff"/><stop offset=".45" stop-color="#5a8fd8"/><stop offset="1" stop-color="#1a2440" stop-opacity="0"/></radialGradient></defs><ellipse cx="50" cy="80" rx="46" ry="46" fill="url(#fg)" opacity=".55"/><path d="M50 22c10 18 24 26 20 52-2 14-10 22-20 22s-18-8-20-22c-3-18 10-24 8-38 7 6 9 12 12 14-2-10-2-18 0-28z" fill="#7fb2ff"/><path d="M50 52c5 9 11 14 9 26-1 7-5 11-9 11s-8-4-9-11c-1-9 5-12 5-20 2 4 3 6 4 7z" fill="#e6f3ff"/><path d="M18 112l64-12M22 100l60 14" stroke="#3a2416" stroke-width="7" stroke-linecap="round"/></svg>',Yi=i=>String(i).replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]),aa=i=>Ai[i]?Ai[i].name:Ht[i]?.short||i,jh={casual:"CASUAL",experiente:"EXPERIENTE"};function Nx(i){const{$:e}=i,t=localStorage;let n=Jh(t),s=!1,a=!1,r=n?.kind||"saci",o=n?.diff||"casual",c=!1,l=[],h=0,u=null;function p(T){const w=e("stArt"),A=e("story");A.className="screen"+(T.who==="act"?" act":T.who==="tip"?" tip":""),T.who==="act"?(w.innerHTML="",e("stWho").textContent=T.n,e("stText").innerHTML=`<b>${Yi(T.name)}</b>${Yi(T.text)}`):(T.who==="narr"||T.who==="tip"?w.innerHTML=Ux:w.replaceChildren(i.art(T.who)),e("stWho").textContent=T.who==="narr"?hx:T.who==="tip"?"COMO VENCER":aa(T.who),e("stText").textContent=T.text),e("stText").classList.remove("in"),e("stText").offsetWidth,e("stText").classList.add("in"),e("stCount").textContent=`${h+1}/${l.length}`,e("stNext").textContent=h===l.length-1?"LUTAR":"AVANÇAR",u===f&&h===l.length-1&&(e("stNext").textContent="FIM")}function d(T,w){if(l=T.filter(A=>A&&A.text),h=0,u=w,e("car").style.display="none",e("menu").style.display="none",!l.length)return u=null,w();e("story").style.display="flex",p(l[0]),e("stNext").focus({preventScroll:!0})}function g(T){if(e("story").style.display!=="flex")return;if(i.audio.play("sel"),!T&&++h<l.length)return p(l[h]);e("story").style.display="none";const w=u;u=null,w?.()}e("stNext").addEventListener("click",()=>g(!1)),e("stSkip").addEventListener("click",()=>g(!0)),e("stBox").addEventListener("click",T=>{T.target.closest("button")||g(!1)});function v(T){const w=T.kind,A=Ki(T),R=ks(T);if(!cr(T))return[{who:A,text:fx[w+":"+A]||Yh[A][R<2?"early":"late"]}];const x=Tx.indexOf(A),M=Ai[A];return[{who:w,text:px[w][x]},...M.intro.map(D=>({who:A,text:D})),{who:"tip",text:M.tip}]}function m(){const T=n,w=T.kind,A=Ki(T),R=[];for(const x of Dx(T))x==="intro"&&R.push(...ux,{who:w,text:dx[w]}),x==="act"&&R.push({who:"act",...Kh[ks(T)]});T.seen!==T.stage&&R.push(...v(T)),T.seen=T.stage,bo(t,T),d(R,()=>{s=!0,i.vsIntro(w,A)})}function f(){s=!1,i.toMenu(),S()}function y(){const T=n&&!n.done,w=e("carSave");if(n){const R=Er(n),x=Ki(n);w.innerHTML=n.done?`<b>${Yi(aa(n.kind))}</b> · CARREIRA CONCLUÍDA · ${jh[n.diff]} · ${n.losses} derrota${n.losses===1?"":"s"}`:`<b>${Yi(aa(n.kind))}</b> · ${Kh[R.act].n} · LUTA ${n.stage+1}/${ws()} · ${jh[n.diff]}<br><span>Próxima: ${Yi(aa(x))}${cr(n)?" (chefe)":""}</span>`,w.style.display=""}else w.style.display="none";e("carCont").style.display=T?"":"none";const A=e("carFaces");A.replaceChildren();for(const R of ga){const x=document.createElement("button");x.className="face"+(R===r?" on":""),x.dataset.k=R,x.append(i.art(R));const M=document.createElement("b");M.textContent=Ht[R].short,x.append(M),x.addEventListener("click",()=>{r=R,c=!1,i.audio.play("sel"),y(),A.querySelector(`[data-k="${R}"]`)?.focus({preventScroll:!0})}),A.append(x)}document.querySelectorAll("#car [data-cd]").forEach(R=>R.classList.toggle("on",R.dataset.cd===o)),e("carNew").textContent=c?"CONFIRMAR · APAGA O SAVE ATUAL":"NOVA CARREIRA · "+Ht[r].short,e("carNote").textContent=o==="casual"?"Casual: rivais mais lentos para defender e chefes com mais aberturas.":"Experiente: rivais mais fortes a cada ato e chefes mais rápidos."}function S(){s=!1,n=Jh(t),e("menu").style.display="none",e("car").style.display="flex",c=!1,y(),(e("carCont").style.display===""?e("carCont"):e("carNew")).focus({preventScroll:!0})}function _(){e("car").style.display="none",i.menuOpen()}return e("carBtn").addEventListener("click",()=>{i.audio.unlock?.(),i.audio.play("sel"),S()}),e("carBack").addEventListener("click",_),e("carCont").addEventListener("click",()=>{n&&!n.done&&(i.audio.play("sel"),m())}),document.querySelectorAll("#car [data-cd]").forEach(T=>T.addEventListener("click",()=>{o=T.dataset.cd,c=!1,i.audio.play("sel"),y()})),e("carNew").addEventListener("click",()=>{if(n&&!n.done&&!c){c=!0,y();return}n=Cx(r,o),bo(t,n),c=!1,m()}),{open:S,fight:()=>s&&n?{lv:Px(n),diff:n.diff,kind:n.kind}:null,mood(T){document.body.classList.remove("act0","act1","act2"),T&&document.body.classList.add("act"+ks(n))},leave(){s=!1,document.body.classList.remove("act0","act1","act2")},result(T){const w=Ki(n),A=cr(n),R=n.stage+1;a=T,T?kx(n):Ix(n),bo(t,n);let x;T?x=n.done?`CARREIRA · ${ws()}/${ws()} · A RODA ESTÁ SALVA`:`CARREIRA · LUTA ${R}/${ws()} VENCIDA · PRÓXIMA: ${Yi(aa(Ki(n)))}`:x=`CARREIRA · LUTA ${R}/${ws()} · TENTATIVA ${n.tries} · NADA FOI PERDIDO`+(A?`<br><span class="tipL">${Yi(Ai[w].tip)}</span>`:n.tries>=2?'<br><span class="tipL">Dica: defenda o primeiro golpe e puna na volta. O rival sempre ataca primeiro quando está perto.</span>':""),e("rew").innerHTML=x,e("again").textContent=T?"CONTINUAR":"TENTAR DE NOVO",e("tomenu").textContent="SAIR DA CARREIRA"},again(){if(!s||!n)return!1;if(!a)return i.startMatch(n.kind,!1,Ki(n)),!0;const T=n.done?ws()-1:n.stage-1,w=Ki(n,T),A={who:w,text:Ai[w]?Ai[w].lost:Yh[w].lost};return i.toMenu(),s=!0,n.done?d([A,...mx,{who:n.kind,text:gx[n.kind]},{who:"narr",text:vx}],f):d([A],m),!0},key(T){return e("story").style.display==="flex"?(T.key==="Escape"?(T.preventDefault(),g(!0)):(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),g(!1)),!0):e("car").style.display==="flex"?(T.key==="Escape"&&(T.preventDefault(),_()),!0):!1}}}const nl=10,re=i=>document.getElementById(i),Kn=(i=0,e=0,t=0)=>new I(i,e,t),Pt=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),zd=matchMedia("(pointer: coarse)").matches,Ln=new j1({antialias:!zd,powerPreference:"high-performance"});Ln.shadowMap.enabled=!0;Ln.shadowMap.type=au;Ln.toneMapping=ou;Ln.toneMappingExposure=1.15;document.body.prepend(Ln.domElement);const lt=new Z1,xn=new _n(42,1,.1,300),he=new wv(lt),Ud=Pv(lt,he,nl);function wr(){Ln.setSize(innerWidth,innerHeight),xn.aspect=innerWidth/innerHeight,xn.updateProjectionMatrix(),he.resize(Ln.domElement.height)}addEventListener("resize",wr);addEventListener("orientationchange",()=>setTimeout(wr,250));wr();const L={scene:lt,fx:he,R:nl,time:0,hitstop:0,shake:0,projectiles:[],cine:null,mode:"menu",phase:"intro",pt:0,timer:60,round:1,slow:1,spawn(i,e){const t=od[i],n=e.opp;if(qe.play(i==="roots"?"roots":"shot"),i==="roots"){const o=Kn().subVectors(n.pos,e.pos).setY(0),c=o.length();c>t.reach&&o.multiplyScalar(t.reach/c);const l=e.pos.clone().add(o),h=Yu();h.position.copy(l),lt.add(h),L.projectiles.push({type:i,owner:e,mesh:h,pos:l,vel:Kn(),t:0,up:0,hit:!1,held:!1,life:9});return}const s=i==="tornado"?Ku():i==="leaf"?Rv():i==="song"?$u():i==="current"?Vc():Av(),a=i==="tornado"?0:i==="leaf"?1.15:i==="song"?1.45:i==="current"?.22:1,r=e.pos.clone().addScaledVector(e.dir,1);s.position.set(r.x,a,r.z),s.rotation.y=Math.atan2(e.dir.x,e.dir.z),s.scale.setScalar(.2),lt.add(s),L.projectiles.push({type:i,owner:e,mesh:s,pos:r,h:a,vel:e.dir.clone().multiplyScalar(t.speed),life:t.life})},spawnGhost(i){const e=i.model.root.clone(!0),t=new kt({color:9305978,transparent:!0,opacity:.5,depthWrite:!1});e.traverse(s=>{s.isMesh&&(s.material=t,s.castShadow=!1)}),lt.add(e);let n=0;he.objs.push(s=>{if(n+=s,t.opacity=.5*Math.max(0,1-n/.7),n>=.7)return lt.remove(e),t.dispose(),!0})},flash(i){ji(.55),Ks(`<span style="font-size:.36em">${i.super}</span><small>PODER FOLCLÓRICO</small>`,1.3),qe.play("super"),qe.voice(i.kind,"super",!0),L.stats&&L.stats[i===Se?0:1].supers++,L.tutorial&&i===Se&&L.tut&&os[L.tut.i]?.full&&!(L.tut.ok>0)&&ll()},startCine(i,e){const t=Kn().subVectors(e.pos,i.pos).setY(0);t.lengthSq()<.01&&t.copy(i.dir),t.normalize(),L.cine={att:i,def:e,d:t,t:0,s:{},from:i.pos.clone(),tor:null,ghosts:[],y0:e.y},i.custom=()=>{},e.setState("idle"),e.vel.set(0,0,0),Tr(),re("bars").classList.add("on"),re("hud").classList.add("cine")},onHit(i,e,t){if(e===Se&&Tn.touch&&navigator.vibrate&&navigator.userActivation?.hasBeenActive!==!1)try{navigator.vibrate(Math.min(70,12+t*2))}catch{}},paused:!1,training:!1,dummy:"parado",events:[],tag(i,e){const t=re(i===Se?"tag1":"tag2");t.textContent=e,t.classList.remove("on"),t.offsetWidth,t.classList.add("on")},log(i){L.events.push(i),L.events.length>80&&L.events.shift(),L.training&&Gx(i),jx(i),L.tutorial&&Zx(i)}};window.__game=L;L.say=(i,e)=>Ks(i,e);L.gfx={renderer:Ln,camera:xn};let Se=null,Ue=null,il=null,Wn=null;function Rr(i,e){if(!(Se&&Se.kind===i&&Ue.kind===e)){for(const t of[Se,Ue])t&&(t.veilMesh&&lt.remove(t.veilMesh),t.clearHaz?.(),t.dispose());Se=new xc(i,L),Ue=Pd(e)?Sx(e,L):new xc(e,L),Se.opp=Ue,Ue.opp=Se,il=new ud(Ue),L.F=[Se,Ue];for(const t of[Se,Ue])t.model.root.traverse(n=>{n.isMesh&&!n.material.transparent&&(n.castShadow=!0)});if(i===e){const t=new Set;Ue.model.root.traverse(n=>{const s=n.material;n.isMesh&&s.color&&!t.has(s)&&(t.add(s),s.color.offsetHSL(.14,-.1,.05))})}}}const Ar=()=>{Se.reset(-2.4,0,Math.PI/2),Ue.reset(2.4,0,-Math.PI/2)};Rr("curupira","cuca");Ar();L.KINDS=Rn;let ss=null;const Tn=new Yv({onPause:()=>cs(),onTouch:()=>ss&&ss.pref==="auto"&&ss.set("auto")});ss=jv({renderer:Ln,arena:Ud,fx:he,mobile:()=>zd||Tn.touch,onChange(i){wr(),document.querySelectorAll("[data-q]").forEach(e=>e.classList.toggle("sel",e.dataset.q===i.pref))}});document.querySelectorAll("[data-q]").forEach(i=>i.addEventListener("click",()=>ss.set(i.dataset.q)));const zn=()=>({move:Kn(),block:!1,press:null}),Xt=Kn(0,0,1);function Ox(){const i=Tn.poll();return{move:Kn(Xt.z*i.x-Xt.x*i.y,0,-Xt.x*i.x-Xt.z*i.y),block:i.block,press:i.press,down:i.down}}function cs(i){i=i??!L.paused,(L.mode!=="fight"||L.phase==="over")&&(i=!1),L.paused=i,re("pause").style.display=i?"flex":"none",Tn.clear(),qe.duck(i),i&&Ir()}re("pauseBtn").addEventListener("click",()=>cs(!0));re("resume").addEventListener("click",()=>cs(!1));re("quit").addEventListener("click",()=>al());document.addEventListener("visibilitychange",()=>{document.hidden&&cs(!0)});function Fx(){if(!(!Tn.touch||window.Capacitor))try{const i=document.documentElement,e=()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}};!document.fullscreenElement&&i.requestFullscreen?i.requestFullscreen({navigationUI:"hide"}).then(e,()=>{}):e()}catch{}}function Bx(i){if(!i.dx&&!i.ok)return;const e=["story","car","ach","ficha","path","col","opts","how","pause","over","menu"].map(re).find(s=>getComputedStyle(s).display!=="none");if(!e)return;const t=[...e.querySelectorAll("button")].filter(s=>s.offsetParent);let n=t.indexOf(document.activeElement);i.dx?(n=n<0?0:(n+i.dx+t.length)%t.length,t[n].focus()):n>=0&&t[n].click()}let Mc=0;function Ks(i,e=1.2){const t=re("msg");t.innerHTML=i,t.style.transition="none",t.classList.remove("on"),t.offsetWidth,t.style.transition="",t.classList.add("on"),Mc=e}function ji(i){const e=re("flash");e.style.transition="none",e.style.opacity=i,e.offsetWidth,e.style.transition="",e.style.opacity=0}const Nd=Qv(),yc=ex();pd(yc);document.querySelectorAll("[data-cs]").forEach(i=>i.addEventListener("click",()=>{yc.scale=+i.dataset.cs,pd(yc)}));const Od=[["mid","L"],["special","I"],["def","O"]],Cs=[1,1];function Vx(i){[Se,Ue].forEach((n,s)=>{const a=s+1,r=Math.max(0,n.hp)/n.maxHp;Cs[s]=r>Cs[s]?r:Math.max(r,Cs[s]-i*.35),re("h"+a).style.width=r*100+"%",re("g"+a).style.width=Cs[s]*100+"%",re("h"+a).classList.toggle("burn",n.burn>0);const o=re("e"+a);o.firstElementChild.style.width=n.energy+"%",o.classList.toggle("full",n.energy>=100),[...re("w"+a).children].forEach((c,l)=>c.classList.toggle("on",l<n.wins))}),re("timer").textContent=L.training?"∞":Math.ceil(Math.max(0,L.timer));for(const[n,s]of[["tag1",Se],["tag2",Ue]]){const a=re(n);a.classList.contains("on")&&(En.set(s.pos.x,s.y+s.tagY,s.pos.z).project(xn),a.style.transform=`translate(calc(${((En.x*.5+.5)*innerWidth).toFixed(0)}px - 50%), ${((-En.y*.5+.5)*innerHeight).toFixed(0)}px)`)}const e=n=>Se.cd[n]>0||Se.energy<(Fn[Se.kind][n].cost||0);[...re("cds").children].forEach((n,s)=>n.classList.toggle("off",e(Od[s][0]))),document.body.classList.toggle("dazed",Se.daze>0&&L.phase==="fight"),document.body.classList.toggle("charmed",Se.charm>0&&L.phase==="fight"),Nd.update(Se);const t=re("combo");Se.combo>=2?(t.textContent=Se.combo+" GOLPES",t.style.opacity=1):t.style.opacity=0}const Hx={hit:"ACERTOU",block:"BLOQUEADO",perfect:"DEFESA PERFEITA",dodge:"ESQUIVADO",duck:"PASSOU POR CIMA",armor:"ABSORVIDO",whiff:"ERROU",grab:"AGARROU",break:"ESCAPOU DO AGARRÃO",veil:"ABSORVIDO PELO VÉU"},pr=i=>typeof i=="number"?(i>0?"+":"")+i:i;function Gx(i){const e=(i.f||i.att)===Se;if(i.t==="move"){if(!e)return;const t=i.m,n=ld(t);re("dMove").textContent=(sl[Se.lastDir]||"")+t.name+(t.h?" · "+cd[t.h]:""),re("dFrames").textContent=n?`prep ${n.startup} · ativo ${n.active} · recup ${n.recovery}`+(n.onBlock!==void 0?` · no acerto ${pr(n.onHit)} · no bloqueio ${pr(n.onBlock)}`:""):"",re("dRes").textContent=""}else{let t=(e?"VOCÊ: ":"ADVERSÁRIO: ")+(i.m&&i.m.name||"Golpe")+" · "+Hx[i.res]+(i.dmg?" · dano "+i.dmg.toFixed(1):"");i.res==="hit"&&(t+=` · ${i.hits} golpe${i.hits>1?"s":""} · total ${i.total.toFixed(1)}`+(i.hits>1?i.sure?" · GARANTIDO":" · NÃO GARANTIDO":"")+(i.counter?" · CONTRA-ATAQUE":"")),re(e?"dRes":"dOpp").textContent=t}}let Qa=0,Zh=!1;function Wx(i){const e=L.dummy;if(e==="cpu")return il.think(i,L);const t=zn();if(e==="parado")return t;if(e==="ataca"){const n=Se.pos.x-Ue.pos.x,s=Se.pos.z-Ue.pos.z,a=Math.hypot(n,s);return a>1.7?t.move.set(n/a,0,s/a):(Qa-=i)<=0&&(Qa=1.2,t.press="J"),t}return(Qa-=i)<=0&&(Qa=.7,Zh=Math.random()<.5),t.block=!0,t.down=e==="baixo"||e==="misto"&&Zh,e==="misto"&&Ue.state==="grabbed"&&Math.random()<i*4&&(t.press="J"),t}function Ys(i){L.dummy=i,document.querySelectorAll("[data-dm]").forEach(e=>e.classList.toggle("sel",e.dataset.dm===i))}document.querySelectorAll("[data-dm]").forEach(i=>i.addEventListener("click",()=>Ys(i.dataset.dm)));let Ii="luta";const Fd=i=>{Ii=i,document.querySelectorAll("[data-mode]").forEach(e=>e.classList.toggle("sel",e.dataset.mode===i)),ol()};document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",()=>Fd(i.dataset.mode)));Fd("luta");const mr={J:"LEVE",K:"PESADO",L:"PODER 1",I:"PODER 2",O:"PODER 3"},sl={f:"→ ",b:"← ",d:"↓ ",n:""},qx=i=>i.length===2?sl[i[0]]+mr[i[1]]:mr[i];function Bd(i){const e=Fn[i],t=(s,a)=>{const r=ld(a)||{};return`<tr><td>${s}</td><td>${a.name}</td><td>${a.grab?"AGARRÃO":cd[a.h]||"—"}</td><td>${r.startup??"—"}</td><td>${pr(r.onHit)??"—"}</td><td>${pr(r.onBlock)??"—"}</td></tr>`};let n="<table><tr><th>COMANDO</th><th>GOLPE</th><th>ALTURA</th><th>PREP.</th><th>ACERTO</th><th>BLOQUEIO</th></tr>";for(const s of["J","K"])for(const a of["n","f","b","d"])n+=t(sl[a]+mr[s],e[vc[s][a]]);for(const s of["L","I","O"])n+=t(mr[s],e[vc[s].n]);return n+=t("→ + toque na DEFESA",e.grab)+"</table>",n+="<p><b>COMBOS</b><br>"+rr[i].map(s=>`<b>${s.name}:</b> ${s.cmd.map(qx).join(", ")} — <i>${s.note}</i>`).join("<br>")+"</p>",n+="<p><b>→</b> na direção do adversário · <b>←</b> para longe dele · <b>↓</b> direcional para baixo (tem prioridade: na diagonal também vale como baixo). Números em quadros (60/s): positivo = vantagem de quem bate.<br><b>DEFESA</b> segurar = defesa alta (para golpes altos e médios) · <b>↓ + DEFESA</b> = defesa baixa (para golpes baixos; golpes altos passam por cima, médios acertam).<br><b>ESQUIVA</b> toque rápido na DEFESA com o direcional para o lado ou para trás · golpes giratórios acompanham a esquiva.<br><b>DEFESA PERFEITA</b> levantar a defesa no instante do golpe desequilibra o atacante · <b>AGARRÃO</b> fura a defesa; aperte LEVE ou PESADO para se soltar.</p>",n}re("movesBtn").addEventListener("click",()=>{const i=re("moves"),e=i.style.display!=="block";e&&(i.innerHTML=Bd(Se.kind)),i.style.display=e?"block":"none"});for(const i of["tag1","tag2"])re(i).addEventListener("animationend",e=>e.target.classList.remove("on"));function Tr(){for(const i of L.projectiles)lt.remove(i.mesh);L.projectiles.length=0,Ue?.clearHaz?.()}function Lr(){const i=L.cine;if(i){i.tor&&lt.remove(i.tor);for(const e of i.ghosts)lt.remove(e);for(const e of i.extra||[])lt.remove(e);i.def.spinExtra=0,L.cine=null,re("bars").classList.remove("on"),re("hud").classList.remove("cine"),document.body.classList.remove("night","deep","party")}}function Vd(){Lr(),Tr(),Se.reset(-3,0,Math.PI/2),Ue.reset(3,0,-Math.PI/2),Se.model.snap(Se,L.time),Ue.model.snap(Ue,L.time),Cs[0]=Cs[1]=1,Xt.set(0,0,1),L.timer=L.need===1?120:60,L.phase="intro",L.pt=0,L.slow=1,Wn=null,Tn.clear(),gr[0]=Se.hp,gr[1]=Ue.hp;const i=!L.training&&L.round===1,e=Se.wins===1&&Ue.wins===1;L.cues=L.training?[[0,L.tutorial?"TUTORIAL":"TREINO",1,null],[.9,"LUTE!",.7,"go"]]:i?[[0,Ue.isBoss?`${Ht[Ue.kind].short}<small>DUELO ÚNICO · LEIA OS AVISOS NO CHÃO</small>`:`ROUND 1<small>${Ht[Se.kind].short} × ${Ht[Ue.kind].short}</small>`,1,null],[1.1,"3",.5,"count"],[1.7,"2",.5,"count"],[2.3,"1",.5,"count"],[2.9,"LUTE!",.7,"go"]]:[[0,`ROUND ${L.round}`+(e?"<small>ROUND FINAL</small>":""),1.2,null],[1.4,"LUTE!",.7,"go"]],L.fightAt=L.training?1:i?2.9:1.5,L.longIntro=i}const gr=[0,0],Qh=()=>({dmg:0,tries:0,hits:0,combo:0,blocks:0,perfect:0,dodges:0,grabs:0,supers:0});let fa="random";const Eo=["random",...Rn];function Hd(i,e=Ii==="luta"){const t=e?Yt.pool():Rn;if(fa!=="random"&&t.includes(fa))return fa;const n=t.filter(s=>s!==i);return n.length?n[Math.floor(Math.random()*n.length)]:t[0]}const eu=new Set;function Xx(i){const e={iara:[ju,Ju,Zu,$u,Vc],boto:[Qu]},t=new at;for(const n of i)if(e[n]&&!eu.has(n)){eu.add(n);for(const s of e[n])t.add(s())}if(t.children.length){t.position.set(0,-50,0),lt.add(t);try{Ln.compile(lt,xn)}catch{}lt.remove(t)}}function ba(i,e=!1,t=null,n=!1){!Rn.includes(t)&&!Pd(t)&&(t=Hd(i));const s=Oi.fight();s&&(e=n=!1),Lr(),Tr(),Rr(i,t),Xx([i,t]),e=e||n;const a=s?[s.lv.you,s.lv.opp]:e?[1,1]:[Yt.level(i),Yt.cpuLevel()];L.F.forEach((r,o)=>{const c=Yt.P.effective(a[o]);r.level=a[o],r.dmgMul=c.dmgMul,r.maxHp=Di[r.kind].hp*c.hpMul,r.hp=r.maxHp}),Ue.isBoss&&Ue.setup(s?s.diff:"experiente"),L.need=Ue.isBoss?1:2,L.carreira=s,Oi.mood(s),L.training=e,document.body.classList.toggle("training",e),L.events.length=0,re("moves").style.display="none",L.tutorial=n,document.body.classList.toggle("tutorial",n),re("tut").classList.remove("ok"),(n||L.dummy==="ataca")&&Ys("parado"),L.stats=[Qh(),Qh()],L.matchT=0;for(const r of["opts","how"])re(r).style.display="none";for(const r of["dMove","dFrames","dRes","dOpp"])re(r).textContent="";re("dMove").textContent="MODO TREINO · pausa: boneco e lista de golpes";for(const r of[Se,Ue])r.wins=0,r.energy=0;re("n1").textContent=Se.name+(e?"":" · NV "+Se.level),re("n2").textContent=Ue.name+(e?" · BONECO":Ue.isBoss?" · CHEFE":" · CPU NV "+Ue.level),re("cds").innerHTML=Od.map(([r,o])=>`<span>${o} · ${Fn[i][r].name.toUpperCase()}</span>`).join(""),Nd.setKind(i),re("menu").style.display="none",re("over").style.display="none",re("hud").style.display="block",L.mode="fight",cs(!1),L.round=1,Vd(),L.tut=n?{i:0,ok:0,n:0,mv:0,fin:!1}:null,n&&Kd(),qe.music("fight")}function tu(i,e){if(Wn=i,i&&i.wins++,L.phase="ko",L.pt=0,Ks(e,2.2),qe.play("ko"),e==="K.O.")for(const t of[Se,Ue])t!==i&&qe.voice(t.kind,"ko",!0)}re("again").addEventListener("click",()=>{Oi.again()||ba(Se.kind,L.training,Ue.kind,L.tutorial)});const Kx=i=>{fa=i,re("oppBtn").textContent=i==="random"?"ALEATÓRIO":Ht[i].short};re("oppBtn").addEventListener("click",()=>Kx(Eo[(Eo.indexOf(fa)+1)%Eo.length]));function al(){Oi.leave(),Yt.refresh(),rl(),L.training=!1,L.tutorial=!1,L.tut=null,document.body.classList.remove("training","dazed","charmed","tutorial"),qe.music("menu"),L.dummy==="ataca"&&Ys("parado"),L.mode="menu",cs(!1),Lr(),Tr(),re("over").style.display="none",re("hud").style.display="none",re("menu").style.display="flex",re("msg").classList.remove("on"),L.slow=1;for(const i of[Se,Ue])i.energy=0;Ar()}re("tomenu").addEventListener("click",()=>{const i=!!L.carreira;al(),i&&Oi.open()});let Mn=(()=>{try{const i=localStorage.getItem("fs.sel");return Rn.includes(i)?i:"saci"}catch{return"saci"}})();const va={},xa=i=>Wc("portraits/"+i,Ht[i].svg);for(const i of Rn){const e=document.createElement("button");e.className="face",e.dataset.k=i,e.setAttribute("aria-label",Di[i].name);const t=document.createElement("b");t.textContent=Ht[i].short,e.append(Wc((Xs("faces/"+i)?"faces/":"portraits/")+i,Ht[i].svg),t,document.createElement("i")),e.addEventListener("click",()=>{Mn===i&&e.classList.contains("on")?Pr():Cr(i)}),re("faces").append(e),va[i]=e}function Cr(i,e=!1){Mn=i;try{localStorage.setItem("fs.sel",i)}catch{}const t=Ht[i];for(const n of Rn)va[n].classList.toggle("on",n===i);re("selArt").replaceChildren(xa(i)),re("selArt").style.setProperty("--glow",t.color+"70"),re("selName").textContent=Di[i].name,re("selTags").textContent=t.tags,re("selDiff").innerHTML="★".repeat(t.diff)+"<i>"+"★".repeat(3-t.diff)+"</i> "+Xh[t.diff],re("selAttrs").innerHTML=ax.map((n,s)=>`<dt>${n}</dt><dd><i style="width:${t.attrs[s]}%"></i></dd>`).join(""),re("selWhy").textContent=t.why,re("selTips").innerHTML=t.tips.map(n=>`<li>${n}</li>`).join(""),re("howTips").innerHTML=`<b>${t.short} · ${Xh[t.diff]}</b><br>`+t.tips.join("<br>"),e||qe.play("sel"),ol()}var Yt=lx({onChange:()=>rl(),sound:i=>qe.play(i)});L.causos=Yt;function rl(){for(const i of Rn){const e=Yt.unlocked(i);va[i].classList.toggle("lock",!e),va[i].querySelector("i").textContent=e?"NV "+Yt.level(i):"🔒"}ol()}function ol(){if(!Yt)return;const i=Ii==="luta"&&!Yt.unlocked(Mn),e=re("fightBtn");e.classList.toggle("locked",i),e.textContent=i?"ADORMECIDA · "+Yt.progressLine(Mn):Ii==="luta"?"LUTAR":Ii==="treino"?"TREINAR":"TUTORIAL"}Yt.refresh();rl();Cr(Mn,!0);var Oi=Nx({$:re,art:xa,audio:qe,say:Ks,vsIntro:cl,startMatch:ba,toMenu:()=>al(),setFighters:(i,e)=>{Rr(i,e),Ar()},menuOpen:()=>{re("menu").style.display="flex"}});L.carreiraUI=Oi;function Pr(){if(L.mode!=="menu")return;if(qe.unlock(),Fx(),document.activeElement?.blur?.(),Ii==="luta"&&!Yt.unlocked(Mn)){const e=re("fightBtn");e.classList.remove("nope"),e.offsetWidth,e.classList.add("nope");return}const i=Hd(Mn);Ii==="luta"?cl(Mn,i):ba(Mn,!0,i,Ii==="tutorial")}re("fightBtn").addEventListener("click",Pr);const Gd=i=>{re("menu").style.display="none",re(i).style.display="flex",Ir()},Wd=i=>{re(i).style.display="none",re("menu").style.display="flex"};re("optsBtn").addEventListener("click",()=>Gd("opts"));re("howBtn").addEventListener("click",()=>Gd("how"));document.querySelectorAll(".back").forEach(i=>i.addEventListener("click",()=>Wd(i.closest(".screen").id)));for(const[i,e]of[["menu","bg/menu"],["over","bg/results"]]){const t=Xs(e);t&&(re(i).style.backgroundImage=`linear-gradient(rgba(13,7,6,.55),rgba(13,7,6,.88)), url("${t}")`)}{const i=Xs("bg/vs");i&&document.querySelectorAll("#vs .half").forEach(e=>{e.style.backgroundImage=`linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.6)), url("${i}")`})}let Dr=0,qd=null;function cl(i,e){Rr(i,e),Ar(),qd=[i,e],re("menu").style.display="none",re("vsA").replaceChildren(xa(i)),re("vsB").replaceChildren(xa(e)),re("vsNA").textContent=Ht[i].short,re("vsNB").textContent=Ht[e].short;const t=re("vs");t.classList.remove("out","on"),t.offsetWidth,t.classList.add("on"),L.mode="vs",Dr=2.4,qe.play("vs")}function kr(){if(L.mode!=="vs")return;const[i,e]=qd;ba(i,!1,e),qe.play("doors");const t=re("vs");t.classList.add("out"),setTimeout(()=>{t.classList.contains("out")&&t.classList.remove("on","out")},650)}re("vs").addEventListener("pointerdown",()=>{Dr<2.1&&kr()});addEventListener("keydown",i=>{if(L.mode==="vs"){["Escape","Enter"," "].includes(i.key)&&Dr<2.2&&(i.preventDefault(),kr());return}if(L.mode!=="menu"||re("ach").style.display==="flex"||Oi.key(i))return;if(re("ficha").style.display==="flex"){i.key==="Escape"&&(re("ficha").style.display="none");return}for(const s of["path","col","opts","how"])if(re(s).style.display==="flex"){i.key==="Escape"&&Wd(s);return}if(re("menu").style.display==="none")return;const e=i.key.toLowerCase(),t=Rn.indexOf(Mn),n=e==="arrowright"||e==="d"?1:e==="arrowleft"||e==="a"?-1:e==="arrowdown"||e==="s"?2:e==="arrowup"||e==="w"?-2:0;n?(i.preventDefault(),Cr(Rn[(t+n+Rn.length)%Rn.length]),va[Mn].focus()):e==="enter"&&!(document.activeElement instanceof HTMLButtonElement)&&(i.preventDefault(),Pr())});const Yx=[["DANO CAUSADO","dmg",i=>Math.round(i)],["GOLPES ACERTADOS","hits"],["PRECISÃO","acc",i=>i+"%"],["MAIOR COMBO","combo"],["DEFESAS","blocks"],["DEFESAS PERFEITAS","perfect"],["ESQUIVAS","dodges"],["AGARRÕES","grabs"],["PODER FOLCLÓRICO","supers"]];function $x(){const i=Wn===Se,e=L.stats,t=re("over");t.classList.toggle("lose",!i),re("oArt").replaceChildren(xa(Se.kind)),re("overT").textContent=i?"VITÓRIA":"DERROTA";const n=Math.round(L.matchT);re("overS").textContent=`${Wn.name} VENCE · ${Se.wins} × ${Ue.wins} · ${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;for(const a of e)a.acc=a.tries?Math.min(100,Math.round(100*a.hits/a.tries)):0;let s=`<tr><th></th><th>${Ht[Se.kind].short}<small>VOCÊ</small></th><th>${Ht[Ue.kind].short}<small>CPU</small></th></tr>`;for(const[a,r,o=c=>c]of Yx){const c=e[0][r],l=e[1][r];s+=`<tr><td>${a}</td><td${c>l?' class="b"':""}>${o(c)}</td><td${l>c?' class="b"':""}>${o(l)}</td></tr>`}re("stats").innerHTML=s,t.style.display="flex",re("again").textContent="REVANCHE",re("tomenu").textContent="TROCAR LUTADOR",L.carreira?(re("achBtn").style.display="none",Oi.result(i)):Jx(i),qe.music(null),qe.play(i?"win":"lose")}function Jx(i){const e=Yt.result({win:i,training:L.training,time:L.matchT,dmg:L.stats[0].dmg}),t=Yt.P,n=t.ARENAS;let s=e.valid?`${e.trophies>=0?"+":""}${e.trophies} TROFÉUS · +${e.xp} EXPERIÊNCIA · +${e.coins} MOEDAS`:e.reason.toUpperCase();if(e.achado?s+=` · ACHADO! (${t.achadosLeft(Yt.s)} restantes hoje)`:e.valid&&i&&(s+=" · ACHADOS DE HOJE ESGOTADOS"),e.newArena>=0){const a=n[e.newArena],r=a.legends.length>1;s+=`<br><b>NOVA ARENA: ${a.name.toUpperCase()}</b> · ${a.legends.map(o=>Ht[o].short).join(" e ")} já pode${r?"m":""} aparecer em Achados`}re("rew").innerHTML=s,Xd(),L.lastReward=e}const Xd=()=>{const i=Yt.s.pending;re("achBtn").style.display=i>0?"":"none",re("achBtn").textContent="ABRIR ACHADO"+(i>1?" ·"+i:"")};re("achBtn").addEventListener("click",()=>Yt.openAchado(Xd));function jx(i){if(L.mode!=="fight"||!L.stats)return;const e=L.stats;if(i.t==="move"){const s=i.f===Se?0:1;if(i.m.name==="Esquiva lateral"||i.m.name==="Recuo"){e[s].dodges++,qe.play("dodge");return}e[s].tries++,qe.play("whoosh",.9+Math.random()*.2),Math.random()<.35&&qe.voice(i.f.kind,"attack");return}const t=i.att===Se?0:1,n=1-t;switch(i.res){case"hit":e[t].hits++,e[t].combo=Math.max(e[t].combo,i.hits||1),qe.play(i.dmg>=8?"hitH":"hitL"),qe.voice(i.def.kind,"hurt");break;case"block":e[n].blocks++,qe.play("block");break;case"perfect":e[n].blocks++,e[n].perfect++,qe.play("perfect");break;case"veil":qe.play("perfect");break;case"grab":e[t].hits++,e[t].grabs++,qe.play("grab");break;case"break":case"armor":qe.play("block");break;case"dodge":case"duck":qe.play("dodge");break}}const wo=(i,e)=>e.some(t=>Fn[Se.kind][t]===i),ra=i=>i.t==="move"&&i.f===Se,os=[{t:"MOVER-SE",k:"W A S D movem em 3D: W/S andam em profundidade",m:"Arraste o lado esquerdo da tela",move:!0},{t:"COMBO LEVE",k:"Chegue perto e aperte J, J, J",m:"Chegue perto e toque 3× no botão grande",ev:i=>i.t==="hit"&&i.att===Se&&i.res==="hit"&&i.hits>=3},{t:"ATAQUE PESADO",k:"K: mais lento, mais forte",m:"Botão ao lado do grande",ev:i=>ra(i)&&wo(i.m,["heavy","fHeavy","bHeavy","dHeavy"])},{t:"GOLPE BAIXO",k:"S + J ou S + K (S manda, mesmo na diagonal)",m:"Direcional para baixo + ataque",ev:i=>ra(i)&&i.m.h==="low"},{t:"GOLPE DE AVANÇO",k:"Direção do adversário + J ou K",m:"Direcional na direção do boneco + ataque",ev:i=>ra(i)&&wo(i.m,["fLight","fHeavy"])},{t:"DEFESA",k:"Segure Shift: o boneco vai atacar (2 defesas)",m:"Segure o botão de defesa: o boneco vai atacar (2 defesas)",dummy:"ataca",need:2,ev:i=>i.t==="hit"&&i.att===Ue&&(i.res==="block"||i.res==="perfect")},{t:"ESQUIVA",k:"Toque rápido em Shift + lado ou trás",m:"Toque rápido na defesa + direcional para o lado ou para trás",ev:i=>ra(i)&&(i.m.name==="Esquiva lateral"||i.m.name==="Recuo")},{t:"AGARRÃO",k:"Perto: toque rápido em Shift + direção do adversário",m:"Perto: toque na defesa + direcional para o boneco",ev:i=>i.t==="hit"&&i.att===Se&&i.res==="grab"},{t:"PODERES",k:"L, I ou O: golpes sobrenaturais com recarga",m:"Botões de aro colorido",ev:i=>ra(i)&&wo(i.m,["mid","special","def"])},{t:"PODER FOLCLÓRICO",k:"Barra cheia: Espaço",m:"Barra cheia: botão dourado",full:!0}];function Kd(){const i=L.tut,e=os[i.i];re("tutN").textContent=`PASSO ${i.i+1} DE ${os.length}`,re("tutT").textContent=e.t,re("tutH").textContent=Tn.touch?e.m:e.k,Ys(e.dummy||"parado")}function ll(){L.tut.ok=.8,re("tut").classList.add("ok"),qe.play("perfect")}function Zx(i){const e=L.tut;if(!e||e.fin||e.ok>0||L.phase!=="fight")return;const t=os[e.i];t.ev&&t.ev(i)&&++e.n>=(t.need||1)&&ll()}function Qx(i){const e=L.tut;if(!e||e.fin||L.phase!=="fight")return;if(e.ok>0){if((e.ok-=i)>0)return;e.i++,e.n=0,e.mv=0,e.ok=0,re("tut").classList.remove("ok"),e.i>=os.length?(e.fin=!0,document.body.classList.remove("tutorial"),Ys("parado"),Ks("TUTORIAL<small>CONCLUÍDO · CONTINUE TREINANDO</small>",2.6),qe.play("win")):Kd();return}const t=os[e.i];t.move&&L.lastIn&&L.lastIn.move.lengthSq()>.1&&(e.mv+=i)>=1.2&&ll(),t.full&&Se.energy<100&&!L.cine&&(Se.energy=100)}for(const i of["pointerdown","keydown"])addEventListener(i,()=>qe.unlock(),{capture:!0});document.addEventListener("click",i=>{const e=i.target.closest("button");e&&!e.closest(".face, #touch, .vol")&&qe.play("ui")},{capture:!0});const e_=[["music","MÚSICA"],["sfx","EFEITOS"],["voice","VOZES"]];document.querySelectorAll(".volbox").forEach(i=>{i.innerHTML=e_.map(([e,t])=>`<div class="vol" data-vol="${e}"><span>${t}</span><button data-d="-1" aria-label="Diminuir ${t}">−</button><i><b></b></i><button data-d="1" aria-label="Aumentar ${t}">+</button><em></em></div>`).join("")});function Ir(){document.querySelectorAll(".vol").forEach(i=>{const e=qe.vol[i.dataset.vol];i.querySelector("i b").style.width=e*100+"%",i.querySelector("em").textContent=Math.round(e*100)+"%"})}document.querySelectorAll(".vol button").forEach(i=>i.addEventListener("click",()=>{const e=i.parentElement.dataset.vol;qe.unlock(),qe.setVol(e,qe.vol[e]+.1*i.dataset.d),Ir(),e==="voice"?qe.voice(Mn,"attack",!0):e==="sfx"&&qe.play("hitL")}));Ir();qe.music("menu");function t_(){const i=Se,e=Ue;if(i.y>.6||e.y>.6||i.anim==="gone"||e.anim==="gone")return;const t=e.pos.x-i.pos.x,n=e.pos.z-i.pos.z,s=Math.hypot(t,n)||.001,a=i.radius+e.radius;if(s>=a)return;const r=a-s,o=e.mass/(i.mass+e.mass),c=t/s,l=n/s;i.pos.x-=c*r*o,i.pos.z-=l*r*o,e.pos.x+=c*r*(1-o),e.pos.z+=l*r*(1-o)}function n_(i){for(let e=L.projectiles.length-1;e>=0;e--){const t=L.projectiles[e],n=od[t.type],s=t.owner.opp,a=Math.hypot(s.pos.x-t.pos.x,s.pos.z-t.pos.z);let r=!1;if(t.type==="roots")if(t.t+=i,!t.hit)t.mesh.userData.set(1,0,L.time),he.dust(t.pos,16*i,0,0,1.6),t.t>=n.warn&&(t.hit=!0,t.t=0,qe.play("rootsUp"),he.dust(t.pos,36,0,0,5),he.leaves(t.pos,26,5),L.shake=Math.max(L.shake,.3),s.y<.4&&a<n.hitR+s.radius&&(s.receive(t.owner,{...n,dirv:Kn().subVectors(s.pos,t.owner.pos).setY(0).normalize()}),t.held=s.state==="rooted",t.held&&t.mesh.position.copy(s.pos).setY(0)));else{const o=t.t<.4||t.held&&s.state==="rooted";t.up+=((o?1:0)-t.up)*Math.min(1,i*(o?24:8)),t.mesh.userData.set(0,t.up,L.time),r=!o&&t.up<.04}else{t.life-=i,t.pos.addScaledVector(t.vel,i),t.mesh.position.set(t.pos.x,t.h,t.pos.z);const o=n.life-t.life,c=Math.min(1,t.life/.2,o/.15+.2);if(t.type==="tornado")t.mesh.userData.spin(L.time),t.mesh.scale.setScalar(.85*c),he.leaves(t.pos,24*i,2.5,.7),he.dust(t.pos,14*i,0,0,2);else if(t.type==="leaf")t.mesh.rotation.z+=24*i,t.mesh.scale.setScalar(c),he.leaves({x:t.pos.x,y:t.h,z:t.pos.z},40*i,1.5,.3);else if(t.type==="song")t.mesh.userData.set(L.time),t.mesh.scale.setScalar((.7+o*.6)*c),Math.random()<i*30&&he.add.emit(t.pos.x+(Math.random()-.5),t.h+(Math.random()-.5),t.pos.z+(Math.random()-.5),0,.6,0,.5,.9,1,.3,.4,0,1,.4,.8);else if(t.type==="current")t.mesh.userData.set(L.time),t.mesh.scale.setScalar((.8+o*.5)*c),he.dust(t.pos,30*i,t.vel.x*.1,t.vel.z*.1,2.5,[.45,.75,.85],.4);else{t.mesh.scale.setScalar((1+o*.3)*c);for(let l=0;l<2;l++)he.add.emit(t.pos.x+(Math.random()-.5)*1.6,.3+Math.random()*1.6,t.pos.z+(Math.random()-.5)*1.6,0,.8,0,.55,.3,1,.45,.4,0,1,.6,.7)}r=t.life<=0||Math.hypot(t.pos.x,t.pos.z)>nl+1,!r&&s.y<2&&a<n.hitR+s.radius&&s.receive(t.owner,{...n,dirv:t.vel.clone().normalize()})!=="miss"&&(r=!0,t.type==="wave"?(he.ring(s.pos,10116351,3,.4),he.sparks({x:t.pos.x,y:1.2,z:t.pos.z},18,[.7,.4,1])):t.type==="song"||t.type==="current"?(he.ring(s.pos,6279392,3,.4),he.sparks({x:t.pos.x,y:t.h+.3,z:t.pos.z},16,[.5,.9,1]),he.dust(t.pos,24,0,0,4,[.45,.75,.85],.5)):(he.leaves(t.pos,30,5),he.dust(t.pos,20,0,0,4)))}r&&(lt.remove(t.mesh),L.projectiles.splice(e,1))}}function i_(i){const e=L.cine,{att:t,def:n,d:s}=e;e.t+=i;const a=e.t,r=(o,c)=>a>=c&&!e.s[o]&&(e.s[o]=!0);if(t.kind==="saci"){if(r("v",0)&&(t.anim="vanish",he.leaves(t.pos,30,3,.5),he.smoke({x:t.pos.x,y:1,z:t.pos.z},12)),r("g",.3)&&(t.anim="gone",e.tor=Ku(),e.tor.position.copy(n.pos).setY(0),lt.add(e.tor)),e.tor&&!e.s.hit){const o=.8+n.radius,c=Pt((a-.5)/.9);e.tor.scale.setScalar(.001+o*Pt((a-.3)/.6)),e.tor.userData.spin(L.time),n.y=e.y0+(2.6-e.y0)*c,n.anim="air",n.spinExtra+=13*i*c,he.leaves(n.pos,90*i,5,1.6),he.dust(n.pos,30*i,0,0,4),L.shake=Math.max(L.shake,.12)}if(a>=1.5&&!e.s.hit){r("a",1.5)&&(e.S=n.pos.clone().addScaledVector(s,-3.4),t.facing=Math.atan2(s.x,s.z),t.updDir(),t.anim="dive",t.pos.copy(e.S),t.y=7,t.model.snap(t,L.time));const o=Math.min(1,(a-1.5)/.7)**2;t.pos.lerpVectors(e.S,e.E||(e.E=n.pos.clone().addScaledVector(s,-.5)),o),t.y=7+(n.y+.5-7)*o,he.norm.emit(t.pos.x,t.y+.8,t.pos.z,0,0,0,.6,.55,.45,.6,.3,0,0,.5,.3)}if(r("hit",2.2)){lt.remove(e.tor),e.tor=null,n.hp-=38*n.opp.dmgMul,n.spinExtra=0,n.setState("air"),n.vy=-13,n.vel.copy(s).multiplyScalar(3.5),n.model.snap(n,L.time);const o=n.pos;he.ring(o,15259832,8,.6),he.ring(o,16777215,4,.35),he.dust(o,90,0,0,8),he.leaves(o,90,9),he.sparks({x:o.x,y:n.y,z:o.z},40),L.shake=1,L.hitstop=.2,ji(.5),e.L=n.pos.clone().addScaledVector(s,-1.8)}e.s.hit&&(t.y=Math.max(0,t.y-11*i),t.pos.lerp(e.L,Math.min(1,i*6)),t.y===0&&(t.anim="idle"),n.update(i,zn())),a>=3.2&&Rs()}else if(t.kind==="curupira"){const o=e.tor;if(r("p",0)&&(t.anim="whistle",t.faceOpp(),e.tor=Yu(),e.tor.position.copy(n.pos).setY(0),e.tor.scale.setScalar(.9+n.radius*.9),lt.add(e.tor),e.wh=wh(),lt.add(e.wh),e.tr=Lv(6),e.tr.position.copy(t.pos).setY(0),e.tr.rotation.y=Math.atan2(s.x,s.z)+2.3,lt.add(e.tr),e.extra=[e.wh,e.tr]),e.wh&&(e.wh.position.set(t.pos.x+t.dir.x*.35,1.55,t.pos.z+t.dir.z*.35),e.wh.rotation.y=Math.atan2(t.dir.x,t.dir.z),e.wh.userData.set(a,Math.max(0,1-(a-.45)/.25)),a>.7&&(lt.remove(e.wh),e.wh=null)),e.tr&&e.tr.userData.set(Pt((a-.25)/.65),Math.min(1,(a-.2)*6,Math.max(0,(1.9-a)/.5))),a<.4&&(n.y=Math.max(0,n.y-8*i),he.leaves(t.pos,30*i,3,1.2)),!e.s.hit){const c=Pt((a-.4)/.25)*(1+.25*Pt((a-.7)/.6)),l=Pt((a-1.5)/.35);if(e.tor.userData.set(a<.4?1:0,c+.3*l,L.time,l),a>=.4){n.anim="hit";const h=.9*Pt((a-.45)/.5)+.5*l,u=Pt((a-1.85)/.25);n.y=h*(1-u*u),he.dust(n.pos,25*i,0,0,3),L.shake=Math.max(L.shake,.08+l*.12)}}if(r("r",.4)&&(n.hp-=10*n.opp.dmgMul,he.dust(n.pos,60,0,0,6),he.leaves(n.pos,50,6),he.ring(n.pos,8376394,4,.4),L.shake=.6,L.hitstop=.08,L.tag(n,"PRESO!")),r("v",.9)&&(t.anim="vanish",he.leaves(t.pos,50,4,1),he.smoke({x:t.pos.x,y:1,z:t.pos.z},14,1.1)),r("g",1.12)&&(t.anim="gone"),r("ap",1.35)&&(t.pos.copy(n.pos).addScaledVector(s,-1.8),t.y=0,t.facing=Math.atan2(s.x,s.z),t.updDir(),t.anim="rootsPull",t.model.snap(t,L.time),he.leaves(t.pos,60,5,1.2),he.smoke({x:t.pos.x,y:.8,z:t.pos.z},10,1),L.shake=.3),r("sl",1.85)&&(t.anim="rootsSlam",he.leaves(n.pos,40,5)),r("hit",2.1)){n.y=0,n.hp-=28*n.opp.dmgMul,n.setState("air"),n.vy=6,n.vel.copy(s).multiplyScalar(4),n.model.snap(n,L.time);const c=n.pos;he.ring(c,10215520,8,.6),he.ring(c,16777215,4,.35),he.dust(c,110,0,0,8),he.leaves(c,110,9),he.sparks({x:c.x,y:.4,z:c.z},40,[.7,1,.4]),L.shake=1,L.hitstop=.2,ji(.5),e.up=1.55}e.s.hit&&(e.up=Math.max(0,e.up-i*3.2),o&&o.userData.set(0,e.up,L.time,Math.max(0,e.up-.6)),a>2.6&&(t.anim="idle"),n.update(i,zn())),a>=3.1&&Rs()}else if(t.kind==="cuca"){if(r("p",0)){t.anim="superprep",document.body.classList.add("night");const o=new kt({color:9063935,transparent:!0,opacity:0,depthWrite:!1});e.gmat=o;for(let c=0;c<4;c++){const l=t.model.root.clone(!0);l.traverse(h=>{h.isMesh?(h.material=o,h.castShadow=!1):h.isLight&&(h.visible=!1)}),l.visible=!1,lt.add(l),e.ghosts.push(l)}}if(a<.5&&(n.y=Math.max(0,n.y-8*i),t.faceOpp(4*i),he.add.emit(t.pos.x+(Math.random()-.5),.4+Math.random()*2,t.pos.z+(Math.random()-.5),0,1.5,0,.6,.3,1,.5,.5,0,1,.6,.8)),r("v",.5)&&(t.anim="vanish",he.smoke({x:t.pos.x,y:1,z:t.pos.z},14,1.2)),r("g",.8)&&(t.anim="gone"),a>=.6&&a<1.7){const o=Math.min(1,(a-.6)/.25,(1.7-a)/.2),c=3.1-Pt((a-.6)/1.1)*1.2+n.radius;e.gmat.opacity=.5*o,n.anim="hit",e.ghosts.forEach((l,h)=>{const u=a*3.4+h*1.5708,p=Math.exp(-(((a-(.8+h*.22))/.08)**2)),d=Math.max(n.radius+.2,c-.9*p*(c-n.radius));l.visible=!0,l.position.set(n.pos.x+Math.sin(u)*d,.15*p,n.pos.z+Math.cos(u)*d),l.rotation.set(.35*p,u+Math.PI,0),p>.6&&!e.s["gl"+h]&&(e.s["gl"+h]=1,he.sparks({x:n.pos.x,y:1.3,z:n.pos.z},10,[.6,.9,.8]),L.shake=Math.max(L.shake,.25))}),L.shake=Math.max(L.shake,.06)}if(r("ap",1.7)){for(const o of e.ghosts)o.visible=!1;t.pos.copy(n.pos).addScaledVector(s,-(t.radius+n.radius+.15)),t.facing=Math.atan2(s.x,s.z),t.updDir(),t.anim="nmHold",t.model.snap(t,L.time),n.hp-=12*n.opp.dmgMul,he.smoke({x:t.pos.x,y:1,z:t.pos.z},12,1.2),he.sparks({x:n.pos.x,y:1.2,z:n.pos.z},24,[.7,.4,1]),L.shake=.6,L.hitstop=.1,L.tag(n,"AGARRADO!"),e.tor=Tv(),e.tor.position.set(n.pos.x,1.3,n.pos.z),e.tor.rotation.y=Math.atan2(-s.x,-s.z),e.tor.scale.setScalar(.01),lt.add(e.tor)}if(a>=1.7&&!e.s.hit&&(n.anim="hit",n.y=.45*Pt((a-1.7)/.4),e.tor.scale.setScalar((.75+n.radius*.55)*Pt((a-1.7)/.35)),e.tor.userData.open(1-Pt((a-2.25)/.15)),a>=2.25&&t.anim==="nmHold"&&(t.anim="nmSnap"),e.tor.userData.fade(1),e.tor.position.y=1.3+n.y),r("hit",2.4)){t.anim="grabThrow",n.hp-=26*n.opp.dmgMul,n.setState("air"),n.vy=7.5,n.vel.copy(s).multiplyScalar(5),n.model.snap(n,L.time);const o={x:n.pos.x,y:n.y+1,z:n.pos.z};he.sparks(o,60,[.75,.45,1]),he.smoke(o,18,1.4),he.ring(n.pos,9063935,8,.6),he.ring(n.pos,15259903,4,.35),L.shake=1,L.hitstop=.2,ji(.5),document.body.classList.remove("night")}e.s.hit&&(e.tor&&e.tor.userData.fade(Math.max(0,1-(a-2.4)/.35)),a>2.8&&(t.anim="idle"),n.update(i,zn())),a>=3.3&&Rs()}else if(t.kind==="iara"){r("p",0)&&(t.anim="iaraSing",t.faceOpp(),document.body.classList.add("deep"),e.wh=wh(),e.wh.traverse(l=>{l.material&&l.material.color.setHex(10481919)}),lt.add(e.wh),e.rf=ju(),e.rf.position.set((t.pos.x+n.pos.x)/2,0,(t.pos.z+n.pos.z)/2),lt.add(e.rf),e.bed=Ju(),e.bed.position.copy(n.pos).setY(0),lt.add(e.bed),e.co=Zu(),e.co.position.copy(n.pos).setY(0),e.co.scale.setScalar(.8+n.radius*.5),lt.add(e.co),e.extra=[e.wh,e.rf,e.bed,e.co]),a<.5&&(n.y=Math.max(0,n.y-8*i),t.faceOpp(4*i)),e.wh&&(e.wh.position.set(t.pos.x+t.dir.x*.3,1.85,t.pos.z+t.dir.z*.3),e.wh.rotation.y=Math.atan2(t.dir.x,t.dir.z),e.wh.userData.set(a,Math.max(0,1-(a-.9)/.3))),e.rf.userData.set(Pt(a/.5)*(1-Pt((a-2.5)/.4)),L.time);const o=Pt((a-.7)/.4),c=Pt((a-1.1)/.35)*(1-Pt((a-2.45)/.35));if(e.bed.userData.set(c,L.time),a>=.7&&!e.s.hit&&(n.anim="hit",n.spinExtra+=7*i*o,n.y=.55*o,L.shake=Math.max(L.shake,.08),e.co.userData.set(Pt((a-1.4)/.5),1,L.time),he.dust({x:n.pos.x,y:n.y+.3,z:n.pos.z},40*i,0,0,3,[.45,.75,.85],.5),Math.random()<i*25&&he.add.emit(n.pos.x+(Math.random()-.5)*2,Math.random()*2.4,n.pos.z+(Math.random()-.5)*2,0,1.4,0,.6,.9,1,.18,1,0,1,.2,.7)),r("w",.8)&&(n.hp-=10*n.opp.dmgMul,he.ring(n.pos,6279392,4,.45),L.shake=.4,L.hitstop=.06,L.tag(n,"ENVOLVIDO!")),r("dv",1.3)&&(t.pos.copy(n.pos).addScaledVector(s,-(t.radius+n.radius+.35)),t.facing=Math.atan2(s.x,s.z),t.updDir(),t.anim="iaraCoil",t.model.snap(t,L.time),he.ring(t.pos,6279392,3,.4),he.dust(t.pos,40,0,0,4,[.45,.75,.85],.5),lt.remove(e.wh),e.wh=null),r("cl",1.9)&&(n.hp-=10*n.opp.dmgMul,he.sparks({x:n.pos.x,y:1.2,z:n.pos.z},24,[.4,1,.8]),L.shake=.5,L.hitstop=.08,L.tag(n,"ENROLADO!")),r("h",2.45)){t.anim="iaraHurl",n.hp-=18*n.opp.dmgMul,n.spinExtra=0,n.setState("air"),n.vy=8,n.vel.copy(s).multiplyScalar(7),n.model.snap(n,L.time);const l=n.pos;he.ring(l,6279392,8,.6),he.ring(l,16777215,4,.35),he.dust(l,110,s.x*4,s.z*4,8,[.45,.75,.85],.6),he.sparks({x:l.x,y:1,z:l.z},40,[.5,.9,1]),L.shake=1,L.hitstop=.18,ji(.5),document.body.classList.remove("deep")}e.s.h&&(e.co.userData.set(1-Pt((a-2.45)/.25),Math.max(0,1-(a-2.45)/.35),L.time),a>2.9&&(t.anim="idle"),n.update(i,zn())),a>=3.3&&Rs()}else if(t.kind==="boto"){if(r("p",0)&&(t.anim="baile",document.body.classList.add("party"),e.ln=Qu(),e.ln.position.set((t.pos.x+n.pos.x)/2,0,(t.pos.z+n.pos.z)/2),lt.add(e.ln),e.cu=Vc(),e.cu.visible=!1,lt.add(e.cu),e.extra=[e.ln,e.cu],e.a0=Math.atan2(t.pos.x-n.pos.x,t.pos.z-n.pos.z),e.r0=Math.max(1.6,Math.hypot(t.pos.x-n.pos.x,t.pos.z-n.pos.z))),e.ln.userData.set(Pt(a/.4)*(1-Pt((a-3)/.4)),L.time),a<1.2){n.y=Math.max(0,n.y-8*i);const o=Pt(a/1.2),c=e.a0+o*1.6,l=e.r0+(1.5+n.radius-e.r0)*o;t.pos.set(n.pos.x+Math.sin(c)*l,0,n.pos.z+Math.cos(c)*l),t.faceOpp(10*i),n.faceOpp(3*i),Math.random()<i*20&&he.add.emit(t.pos.x,.1,t.pos.z,0,.5,0,1,.7,.8,.25,.5,0,1,.3,.7)}if(r("hat",1.2)&&(t.anim="hatOff",t.faceOpp(),he.sparks({x:t.pos.x,y:2,z:t.pos.z},18,[1,.9,.8])),r("rv",1.6)&&(t.anim="reveal",he.ring(t.pos,16748472,4,.45),he.smoke({x:t.pos.x,y:1.2,z:t.pos.z},10,.9),n.hp-=8*n.opp.dmgMul,n.anim="hit",L.tag(n,"ENCANTADO!"),L.shake=.4),r("dv",2)&&(s.subVectors(n.pos,t.pos).setY(0).normalize(),e.from.copy(t.pos),e.to=n.pos.clone().addScaledVector(s,-4.2),t.anim="dolphin",t.model.snap(t,L.time),e.cu.visible=!0,e.cu.position.copy(e.to).setY(.15),e.cu.rotation.y=Math.atan2(s.x,s.z),he.ring(t.pos,16748472,3,.35)),a>=2&&a<2.5){const o=(a-2)/.5;t.pos.lerpVectors(e.from,e.to,o),t.y=Math.sin(o*Math.PI)*1.6,t.facing=Math.atan2(e.to.x-e.from.x,e.to.z-e.from.z),t.updDir(),e.cu.userData.set(L.time),e.cu.scale.setScalar(1.2*Pt(o/.5))}if(r("sp",2.5)&&(t.y=0,t.pos.copy(e.to),he.ring(t.pos,6279392,3,.4),he.dust(t.pos,50,0,0,5,[.45,.75,.85],.6),t.anim="botoCharge",t.faceOpp(),e.from.copy(t.pos),e.to=n.pos.clone().addScaledVector(s,-(t.radius+n.radius+.1))),a>=2.5&&a<2.8&&(t.pos.lerpVectors(e.from,e.to,((a-2.5)/.3)**2),e.cu.position.copy(t.pos).setY(.15),e.cu.userData.set(L.time),he.dust(t.pos,60*i,-s.x,-s.z,4,[.45,.75,.85],.5)),r("h",2.8)){t.pos.copy(e.to),n.hp-=30*n.opp.dmgMul,n.setState("air"),n.vy=7,n.vel.copy(s).multiplyScalar(6.5),n.model.snap(n,L.time),e.cu.visible=!1;const o=n.pos;he.ring(o,16748472,8,.6),he.ring(o,16777215,4,.35),he.sparks({x:o.x,y:1.1,z:o.z},50,[1,.6,.8]),he.dust(o,80,s.x*4,s.z*4,7,[.45,.75,.85],.6),L.shake=1,L.hitstop=.18,ji(.5)}e.s.h&&(a>3.05&&t.anim!=="idle"&&(t.anim="idle",he.smoke({x:t.pos.x,y:1,z:t.pos.z},8,.8)),n.update(i,zn())),a>=3.4&&(document.body.classList.remove("party"),Rs())}else{const o=t.model.flamePos;if(r("p",0)&&(t.anim="superprep"),a<1.2&&(t.faceOpp(4*i),n.y=Math.max(0,n.y-8*i),he.fire(o,260*i,.35,4.5,1.3),he.embers(o,80*i,.5,5),L.shake=Math.max(L.shake,.2)),r("c",1.2)&&(t.faceOpp(),s.subVectors(n.pos,t.pos).setY(0).normalize(),e.from.copy(t.pos),e.to=n.pos.clone().addScaledVector(s,-(t.radius+n.radius+.1)),t.anim="charge"),a>=1.2&&a<1.7&&(t.pos.lerpVectors(e.from,e.to,((a-1.2)/.5)**2),he.fire(o,200*i,.4,3,1.2),he.embers(o,60*i,.4,5),he.dust(t.pos,70*i,-s.x,-s.z,5),L.shake=Math.max(L.shake,.3)),r("h",1.7)){t.pos.copy(e.to),t.anim="idle",n.hp-=24*n.opp.dmgMul,n.burn=3,n.setState("air"),n.vy=9,n.vel.copy(s).multiplyScalar(6.5),n.model.snap(n,L.time);const c={x:n.pos.x,y:1.2,z:n.pos.z};he.sparks(c,50,[1,.5,.15]),he.fire(c,60,.6,4,1.2),L.shake=.9,L.hitstop=.16}if(e.s.h&&n.update(i,zn()),r("x",2.4)){n.hp-=16*n.opp.dmgMul,n.state==="air"&&(n.vy=7);const c={x:n.pos.x,y:n.y+.8,z:n.pos.z};he.fire(c,170,1.3,6,1.9),he.embers(c,120,.8,9),he.sparks(c,60,[1,.6,.2]),he.smoke(c,25,1.6),he.ring(n.pos,16742954,9,.6),he.ring(n.pos,16767392,5,.4),L.shake=1,L.hitstop=.12,ji(.6)}a>=3.3&&Rs()}}function Rs(){const i=L.cine.att;i.y=0,i.invuln=.3,i.setState("idle"),Lr()}const Ro=Kn(0,3,12),Ao=Kn(0,1.3,0),En=Kn();function s_(i,e){const t=Se,n=Ue,s=e?1:Math.min(1,i*5);if(L.mode!=="fight"){const a=L.time*.12;En.set(Math.sin(a)*9.5,2.5,Math.cos(a)*9.5),Ro.lerp(En,s),Ao.lerp(En.set(0,1.3,0),s)}else{const a=n.pos.x-t.pos.x,r=n.pos.z-t.pos.z,o=Math.hypot(a,r);if(L.cine){const m=.45*i,f=Math.cos(m),y=Math.sin(m),S=Xt.x;Xt.x=S*f-Xt.z*y,Xt.z=S*y+Xt.z*f}else o>.6&&t.anim!=="gone"&&n.anim!=="gone"&&(En.set(-r/o,0,a/o),En.dot(Xt)<0&&En.negate(),Xt.lerp(En,Math.min(1,i*3.5)).normalize());const c=Math.max(t.y,n.y),l=L.cine?8.5+c*.5:Math.max(6.6,Math.min(14,5.2+o*.8)),h=(t.pos.x+n.pos.x)/2,u=(t.pos.z+n.pos.z)/2;let p=Xt.x,d=Xt.z,g=0;if(L.phase==="intro"&&L.longIntro){g=1-Pt(L.pt/2.6);const m=g*1.1,f=Math.cos(m),y=Math.sin(m);p=Xt.x*f-Xt.z*y,d=Xt.x*y+Xt.z*f}const v=l+3*g;Ro.lerp(En.set(h+p*v,2.3+c*.25+l*.06+1.6*g,u+d*v),s),Ao.lerp(En.set(h,1.25+c*.4,u),s)}if(xn.position.copy(Ro),L.shake>.01){const a=L.shake*.16;xn.position.x+=(Math.random()-.5)*a,xn.position.y+=(Math.random()-.5)*a,xn.position.z+=(Math.random()-.5)*a}if(xn.lookAt(Ao),L.mode==="fight"&&Se.daze>0){const a=Math.min(1,Se.daze/.3);xn.rotateZ(Math.sin(L.time*6)*.08*a),xn.position.y+=Math.sin(L.time*9)*.12*a}}let nu=0,iu=!1;function a_(i){if(Ue.isBoss)return zn();if(L.training)return Wx(i);const e=il.think(i,L),t=L.carreira;return t&&t.diff==="casual"&&((nu-=i)<=0&&(nu=.6,iu=Math.random()<.3),iu&&(e.block=!1),e.press&&Math.random()<.3&&(e.press=null)),e}const r_=new yv;function Yd(i){L.time+=i,L.shake=Math.max(0,L.shake-i*2.2),Mc>0&&(Mc-=i)<=0&&re("msg").classList.remove("on");let e=i*L.slow;if(L.hitstop>0&&(L.hitstop-=i,e=0),L.mode!=="fight"){for(const t of[Se,Ue])t.update(e,zn());L.mode==="vs"&&(Dr-=i)<=0&&kr()}else{if(L.cine)i_(e);else{const t=L.phase==="fight",n=t?Ox():zn();L.lastIn=n,Se.update(e,n),Ue.update(e,t?a_(e):zn()),n_(e),t_()}if(L.pt+=i,[Se,Ue].forEach((t,n)=>{const s=Math.max(0,t.hp),a=gr[n]-s;a>0&&L.phase!=="intro"&&(L.stats[1-n].dmg+=a,L.cine&&a>=8&&qe.play("hitH")),gr[n]=s}),L.phase==="fight"&&!L.cine&&(L.matchT+=e),L.phase==="intro"){for(;L.cues.length&&L.pt>=L.cues[0][0];){const[,t,n,s]=L.cues.shift();Ks(t,n),s&&qe.play(s)}L.pt>=L.fightAt&&(L.phase="fight",Tn.clear())}else if(L.phase==="fight"&&!L.cine&&L.training)for(const t of[Se,Ue])t.hp=Math.max(1,t.hp),t.state==="idle"&&t.opp.comboT<=0&&(t.hp=Math.min(t.maxHp,t.hp+45*e)),t.gain(8*e);else if(L.phase==="fight"&&!L.cine){L.timer-=e,Ue.floor?.();const t=Se.hp<=0,n=Ue.hp<=0;if(t||n)tu(t&&n?null:t?Ue:Se,t&&n?"EMPATE":"K.O.");else if(L.timer<=0){const s=Se.hp/Se.maxHp,a=Ue.hp/Ue.maxHp;tu(s===a?null:s>a?Se:Ue,s===a?"EMPATE":"TEMPO!")}}else L.phase==="ko"&&(L.slow=L.pt<1?.3:1,Wn&&L.pt>1.3&&Wn.state==="idle"&&!L.cine&&(Wn.setState("win"),qe.voice(Wn.kind,"win",!0)),L.pt>3.6&&!L.cine&&(Wn&&Wn.wins>=(L.need||2)?(L.phase="over",$x()):(L.round++,Vd())));Vx(i),L.tutorial&&Qx(i)}for(const t of[Se,Ue]){const n=t.model;if(n.root.position.set(t.pos.x,t.y,t.pos.z),n.root.rotation.y=t.facing,n.update(t,e,L.time),t.veil>0){t.veilMesh||(t.veilMesh=new Ne(new Ft(1,20,14),new kt({color:6283471,transparent:!0,opacity:.2,depthWrite:!1,blending:Ui,fog:!1})),lt.add(t.veilMesh));const s=t.veilMesh;s.visible=!0,s.position.set(t.pos.x,t.y+1.15,t.pos.z),s.scale.set(1.15+t.radius*.5,1.45,1.15+t.radius*.5),s.rotation.y=L.time*2,s.material.opacity=t.veil<.5?.1+.12*Math.abs(Math.sin(L.time*22)):.2+.05*Math.sin(L.time*6)}else t.veilMesh&&(t.veilMesh.visible=!1);if(t.daze>0&&e>0){const s=L.time*9;he.add.emit(t.pos.x+Math.sin(s)*.35,t.y+t.tagY-.25,t.pos.z+Math.cos(s)*.35,0,.3,0,.7,.4,1,.3,.35,0,1,.5,.9)}if(t.charm>0&&e>0&&Math.random()<e*14){const s=Math.random()*6.28;he.add.emit(t.pos.x+Math.sin(s)*.4,t.y+t.tagY-.5,t.pos.z+Math.cos(s)*.4,0,.7,0,.45,.9,1,.28,.6,0,1,.3,.8)}if(n.flamePos&&e>0){const s=n.flameK;he.fire(n.flamePos,95*e*s,.1+.05*s,2+s*.6,.55+.25*s),Math.random()<e*8*s&&he.embers(n.flamePos,1,.15,1.5)}}Ud.update(i,L.time),he.update(e||i*.15)}let To=!0;Ln.setAnimationLoop(()=>{const i=r_.getDelta(),e=Math.min(.05,i);Bx(Tn.frame());const t=L.mode==="fight"&&L.phase!=="over"&&!L.paused;document.body.classList.toggle("playing",t),(!t||L.phase!=="fight"||L.cine)&&Tn.clear();const n=Tn.touch&&innerHeight>innerWidth;if(!L.paused&&!n&&Yd(e),s_(e,To),Ln.render(lt,xn),ss.tick(i),To){To=!1;const s=re("boot");s.classList.add("hide"),setTimeout(()=>s.remove(),600)}});"serviceWorker"in navigator&&!window.Capacitor&&navigator.serviceWorker.register("./sw.js").catch(()=>{});L.input=Tn;L.quality=ss;L.setPause=cs;L.step=Yd;L.startMatch=ba;L.vsIntro=cl;L.vsGo=kr;L.pick=Cr;L.go=Pr;L.audio=qe;L.TUT=os;Object.defineProperty(L,"selKind",{get:()=>Mn});L.setDummy=Ys;L.moveList=Bd;L.AI=ud;Object.defineProperty(L,"player",{get:()=>Se});Object.defineProperty(L,"cpu",{get:()=>Ue});
