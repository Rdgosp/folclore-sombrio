(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="170",iu=0,ac=1,su=2,Ol=1,kl=2,Bn=3,ci=0,qe=1,Se=2,ai=0,Ei=1,Ji=2,oc=3,cc=4,ru=5,xi=100,au=101,ou=102,cu=103,lu=104,hu=200,uu=201,du=202,fu=203,La=204,Pa=205,pu=206,mu=207,gu=208,vu=209,_u=210,xu=211,Mu=212,yu=213,Su=214,Da=0,Ia=1,Ua=2,$i=3,Na=4,Oa=5,ka=6,Fa=7,Fl=0,Eu=1,bu=2,oi=0,Tu=1,wu=2,Au=3,zl=4,Ru=5,Cu=6,Lu=7,Bl=300,ji=301,Zi=302,za=303,Ba=304,br=306,Va=1e3,yi=1001,gr=1002,Mn=1003,Pu=1004,Os=1005,wn=1006,Vr=1007,Si=1008,Wn=1009,Vl=1010,Hl=1011,ws=1012,Ao=1013,Ti=1014,Vn=1015,Rs=1016,Ro=1017,Co=1018,Qi=1020,Gl=35902,Wl=1021,Xl=1022,vn=1023,ql=1024,Yl=1025,Yi=1026,ts=1027,Kl=1028,Lo=1029,Jl=1030,Po=1031,Do=1033,lr=33776,hr=33777,ur=33778,dr=33779,Ha=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,Ka=37496,Ja=37808,$a=37809,ja=37810,Za=37811,Qa=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,co=37821,fr=36492,lo=36494,ho=36495,$l=36283,uo=36284,fo=36285,po=36286,Du=3200,Iu=3201,jl=0,Uu=1,ii="",Je="srgb",ss="srgb-linear",Tr="linear",he="srgb",Pi=7680,lc=519,Nu=512,Ou=513,ku=514,Zl=515,Fu=516,zu=517,Bu=518,Vu=519,hc=35044,uc="300 es",Hn=2e3,vr=2001;class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,mo=180/Math.PI;function Cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Hu(i,t){return(i%t+t)%t}function Gr(i,t,e){return(1-e)*i+e*t}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,s,r,a,o,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],E=s[1],b=s[4],_=s[7],N=s[2],w=s[5],A=s[8];return r[0]=a*v+o*E+c*N,r[3]=a*m+o*b+c*w,r[6]=a*d+o*_+c*A,r[1]=l*v+h*E+u*N,r[4]=l*m+h*b+u*w,r[7]=l*d+h*_+u*A,r[2]=f*v+p*E+g*N,r[5]=f*m+p*b+g*w,r[8]=f*d+p*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wr.makeScale(t,e)),this}rotate(t){return this.premultiply(Wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wr=new zt;function Ql(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){const i=As("canvas");return i.style.display="block",i}const dc={};function Ms(i){i in dc||(dc[i]=!0,console.warn(i))}function Wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Tr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fc=[.64,.33,.3,.6,.15,.06],pc=[.2126,.7152,.0722],mc=[.3127,.329],gc=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[ss]:{primaries:fc,whitePoint:mc,transfer:Tr,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:pc,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:fc,whitePoint:mc,transfer:he,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:pc,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});let Di;class Yu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=As("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ku=0;class th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xr(s[a].image)):r.push(Xr(s[a]))}else r=Xr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ju=0;class Ve extends rs{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=yi,s=yi,r=wn,a=Si,o=vn,c=Wn,l=Ve.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Cs(),this.name="",this.source=new th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Bl;Ve.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,_=(p+1)/2,N=(d+1)/2,w=(h+f)/4,A=(u+v)/4,L=(g+m)/4;return b>_&&b>N?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):_>N?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=L/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=A/r,s=L/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new th(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends $u{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class eh extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ju extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==p||h!==g){let m=1-o;const d=c*f+l*p+h*g+u*v,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const N=Math.sqrt(b),w=Math.atan2(N,d*E);m=Math.sin(m*w)/N,o=Math.sin(o*w)/N}const _=o*E;if(c=c*m+f*_,l=l*m+p*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const N=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=N,l*=N,h*=N,u*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-o*p,t[e+2]=l*g+h*p+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new P,_c=new Ls;class Ps{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Fs.subVectors(this.max,ds),Ii.subVectors(t.a,ds),Ui.subVectors(t.b,ds),Ni.subVectors(t.c,ds),Kn.subVectors(Ui,Ii),Jn.subVectors(Ni,Ui),hi.subVectors(Ii,Ni);let e=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-hi.z,hi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,hi.z,0,-hi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-hi.y,hi.x,0];return!Yr(e,Ii,Ui,Ni,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,Ii,Ui,Ni,Fs))?!1:(zs.crossVectors(Kn,Jn),e=[zs.x,zs.y,zs.z],Yr(e,Ii,Ui,Ni,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,ks=new Ps,Ii=new P,Ui=new P,Ni=new P,Kn=new P,Jn=new P,hi=new P,ds=new P,Fs=new P,zs=new P,ui=new P;function Yr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Zu=new Ps,fs=new P,Kr=new P;class wr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);const e=fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Kr)),this.expandByPoint(fs.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new P,Jr=new P,Bs=new P,$n=new P,$r=new P,Vs=new P,jr=new P;class nh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Jr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Bs),o=$n.dot(this.direction),c=-$n.dot(Bs),l=$n.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jr).addScaledVector(Bs,f),p}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){$r.subVectors(e,t),Vs.subVectors(n,t),jr.crossVectors($r,Vs);let a=this.direction.dot(jr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const c=o*this.direction.dot(Vs.crossVectors($n,Vs));if(c<0)return null;const l=o*this.direction.dot($r.cross($n));if(l<0||c+l>a)return null;const h=-o*$n.dot(jr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,s,r,a,o,c,l,h,u,f,p,g,v,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,p,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,u,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,v=l*u;e[0]=f+v*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,v=l*u;e[0]=f-v*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qu,t,td)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),jn.crossVectors(n,Ze),jn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),jn.crossVectors(n,Ze)),jn.normalize(),Hs.crossVectors(Ze,jn),s[0]=jn.x,s[4]=Hs.x,s[8]=Ze.x,s[1]=jn.y,s[5]=Hs.y,s[9]=Ze.y,s[2]=jn.z,s[6]=Hs.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],E=n[3],b=n[7],_=n[11],N=n[15],w=s[0],A=s[4],L=s[8],y=s[12],M=s[1],C=s[5],W=s[9],F=s[13],B=s[2],I=s[6],D=s[10],X=s[14],H=s[3],it=s[7],J=s[11],et=s[15];return r[0]=a*w+o*M+c*B+l*H,r[4]=a*A+o*C+c*I+l*it,r[8]=a*L+o*W+c*D+l*J,r[12]=a*y+o*F+c*X+l*et,r[1]=h*w+u*M+f*B+p*H,r[5]=h*A+u*C+f*I+p*it,r[9]=h*L+u*W+f*D+p*J,r[13]=h*y+u*F+f*X+p*et,r[2]=g*w+v*M+m*B+d*H,r[6]=g*A+v*C+m*I+d*it,r[10]=g*L+v*W+m*D+d*J,r[14]=g*y+v*F+m*X+d*et,r[3]=E*w+b*M+_*B+N*H,r[7]=E*A+b*C+_*I+N*it,r[11]=E*L+b*W+_*D+N*J,r[15]=E*y+b*F+_*X+N*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+v*(+e*c*p-e*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],E=u*m*l-v*f*l+v*c*p-o*m*p-u*c*d+o*f*d,b=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,_=h*v*l-g*u*l+g*o*p-a*v*p-h*o*d+a*u*d,N=g*u*c-h*v*c-g*o*f+a*v*f+h*o*m-a*u*m,w=e*E+n*b+s*_+r*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=E*A,t[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*d+n*c*d)*A,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*A,t[4]=b*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*d-e*c*d)*A,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*p+e*c*p)*A,t[8]=_*A,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*d-e*u*d)*A,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*d+e*o*d)*A,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*A,t[12]=N*A,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,v=a*h,m=a*u,d=o*u,E=c*l,b=c*h,_=c*u,N=n.x,w=n.y,A=n.z;return s[0]=(1-(v+d))*N,s[1]=(p+_)*N,s[2]=(g-b)*N,s[3]=0,s[4]=(p-_)*w,s[5]=(1-(f+d))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+b)*A,s[9]=(m-E)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const a=Oi.set(s[4],s[5],s[6]).length(),o=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const l=1/r,h=1/a,u=1/o;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Hn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===Hn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===vr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*l,p=(n+s)*h;let g,v;if(o===Hn)g=(a+r)*u,v=-2*u;else if(o===vr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new P,un=new xe,Qu=new P(0,0,0),td=new P(1,1,1),jn=new P,Hs=new P,Ze=new P,xc=new xe,Mc=new Ls;class Ln{constructor(t=0,e=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ed=0;const yc=new P,ki=new Ls,kn=new xe,Gs=new P,ps=new P,nd=new P,id=new Ls,Sc=new P(1,0,0),Ec=new P(0,1,0),bc=new P(0,0,1),Tc={type:"added"},sd={type:"removed"},Fi={type:"childadded",child:null},Zr={type:"childremoved",child:null};class Re extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new P,e=new Ln,n=new Ls,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new zt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ps,Gs,this.up):kn.lookAt(Gs,ps,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(kn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sd),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tc),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new P(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new P,Fn=new P,Qr=new P,zn=new P,zi=new P,Bi=new P,wc=new P,ta=new P,ea=new P,na=new P,ia=new ue,sa=new ue,ra=new ue;class mn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Fn.subVectors(n,e),Qr.subVectors(t,e);const a=dn.dot(dn),o=dn.dot(Fn),c=dn.dot(Qr),l=Fn.dot(Fn),h=Fn.dot(Qr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Fn.subVectors(t,e),dn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),dn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),Bi.subVectors(r,n),ta.subVectors(t,n);const c=zi.dot(ta),l=Bi.dot(ta);if(c<=0&&l<=0)return e.copy(n);ea.subVectors(t,s);const h=zi.dot(ea),u=Bi.dot(ea);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(zi,a);na.subVectors(t,r);const p=zi.dot(na),g=Bi.dot(na);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Bi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return wc.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(wc,o);const d=1/(m+v+f);return a=v*d,o=f*d,e.copy(n).addScaledVector(zi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Hu(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=aa(a,r,t+1/3),this.g=aa(a,r,t),this.b=aa(a,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ie.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ne(ze.r*255,0,255))*65536+Math.round(Ne(ze.g*255,0,255))*256+Math.round(Ne(ze.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Je){ie.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Ws);const n=Gr(Zn.h,Ws.h,e),s=Gr(Zn.s,Ws.s,e),r=Gr(Zn.l,Ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Kt;Kt.NAMES=sh;let rd=0;class as extends rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Cs(),this.name="",this.blending=Ei,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Pa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class He extends as{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new P,Xs=new pt;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class rh extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ah extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ad=0;const sn=new xe,oa=new Re,Vi=new P,Qe=new Ps,ms=new Ps,Pe=new P;class Ge extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ql(t)?ah:rh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Qe.min,ms.min),Qe.expandByPoint(Pe),Pe.addVectors(Qe.max,ms.max),Qe.expandByPoint(Pe)):(Qe.expandByPoint(ms.min),Qe.expandByPoint(ms.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pe.fromBufferAttribute(o,l),c&&(Vi.fromBufferAttribute(t,l),Pe.add(Vi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new P,c[L]=new P;const l=new P,h=new P,u=new P,f=new pt,p=new pt,g=new pt,v=new P,m=new P;function d(L,y,M){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[L].add(v),o[y].add(v),o[M].add(v),c[L].add(m),c[y].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,y=E.length;L<y;++L){const M=E[L],C=M.start,W=M.count;for(let F=C,B=C+W;F<B;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new P,_=new P,N=new P,w=new P;function A(L){N.fromBufferAttribute(s,L),w.copy(N);const y=o[L];b.copy(y),b.sub(N.multiplyScalar(N.dot(y))).normalize(),_.crossVectors(w,y);const C=_.dot(c[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,C)}for(let L=0,y=E.length;L<y;++L){const M=E[L],C=M.start,W=M.count;for(let F=C,B=C+W;F<B;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new $e(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new xe,di=new nh,qs=new wr,Rc=new P,Ys=new P,Ks=new P,Js=new P,ca=new P,$s=new P,Cc=new P,js=new P;class ae extends Re{constructor(t=new Ge,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ca.fromBufferAttribute(u,t),a?$s.addScaledVector(ca,h):$s.addScaledVector(ca.sub(e),h))}e.add($s)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(qs.containsPoint(di.origin)===!1&&(di.intersectSphere(qs,Rc)===null||di.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Ac.copy(r).invert(),di.copy(t.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,N=b;_<N;_+=3){const w=o.getX(_),A=o.getX(_+1),L=o.getX(_+2);s=Zs(this,d,t,n,l,h,u,w,A,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);s=Zs(this,a,t,n,l,h,u,E,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,N=b;_<N;_+=3){const w=_,A=_+1,L=_+2;s=Zs(this,d,t,n,l,h,u,w,A,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const E=m,b=m+1,_=m+2;s=Zs(this,a,t,n,l,h,u,E,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function od(i,t,e,n,s,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ci,o),c===null)return null;js.copy(o),js.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(js);return l<e.near||l>e.far?null:{distance:l,point:js.clone(),object:i}}function Zs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ys),i.getVertexPosition(c,Ks),i.getVertexPosition(l,Js);const h=od(i,t,e,n,Ys,Ks,Js,Cc);if(h){const u=new P;mn.getBarycoord(Cc,Ys,Ks,Js,u),s&&(h.uv=mn.getInterpolatedAttribute(s,o,c,l,u,new pt)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,c,l,u,new pt)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};mn.getNormal(Ys,Ks,Js,f.normal),h.face=f,h.barycoord=u}return h}class we extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(v,m,d,E,b,_,N,w,A,L,y){const M=_/A,C=N/L,W=_/2,F=N/2,B=w/2,I=A+1,D=L+1;let X=0,H=0;const it=new P;for(let J=0;J<D;J++){const et=J*C-F;for(let _t=0;_t<I;_t++){const Tt=_t*M-W;it[v]=Tt*E,it[m]=et*b,it[d]=B,l.push(it.x,it.y,it.z),it[v]=0,it[m]=0,it[d]=w>0?1:-1,h.push(it.x,it.y,it.z),u.push(_t/A),u.push(1-J/L),X+=1}}for(let J=0;J<L;J++)for(let et=0;et<A;et++){const _t=f+et+I*J,Tt=f+et+I*(J+1),$=f+(et+1)+I*(J+1),at=f+(et+1)+I*J;c.push(_t,Tt,at),c.push(Tt,$,at),H+=6}o.addGroup(p,H,y),p+=H,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=es(i[e]);for(const s in n)t[s]=n[s]}return t}function cd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const ld={clone:es,merge:We};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends as{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ch extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new P,Lc=new pt,Pc=new pt;class tn extends ch{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Pc),e.subVectors(Pc,Lc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class dd extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new tn(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const a=new tn(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const o=new tn(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const c=new tn(Hi,Gi,t,e);c.layers=this.layers,this.add(c);const l=new tn(Hi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lh extends Ve{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fd extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ai});r.uniforms.tEquirect.value=e;const a=new ae(s,r),o=e.minFilter;return e.minFilter===Si&&(e.minFilter=wn),new dd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const la=new P,pd=new P,md=new zt;class vi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=la.subVectors(n,e).cross(pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(la),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||md.getNormalMatrix(t),s=this.coplanarPoint(la).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new wr,Qs=new P;class Io{constructor(t=new vi,e=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],E=s[13],b=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-p,_-d).normalize(),n[1].setComponents(c+r,f+l,m+p,_+d).normalize(),n[2].setComponents(c+a,f+h,m+g,_+E).normalize(),n[3].setComponents(c-a,f-h,m-g,_-E).normalize(),n[4].setComponents(c-o,f-u,m-v,_-b).normalize(),e===Hn)n[5].setComponents(c+o,f+u,m+v,_+b).normalize();else if(e===vr)n[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gd(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Ar extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const E=d*f-a;for(let b=0;b<l;b++){const _=b*u-r;g.push(_,-E,0),v.push(0,0,1),m.push(b/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<o;E++){const b=E+l*d,_=E+l*(d+1),N=E+1+l*(d+1),w=E+1+l*d;p.push(b,_,w),p.push(_,N,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.width,t.height,t.widthSegments,t.heightSegments)}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
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
#endif`,wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bd=`#define PI 3.141592653589793
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hd=`vec3 transformedNormal = objectNormal;
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
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
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
}`,af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
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
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
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
#endif`,gf=`struct PhysicalMaterial {
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
}`,vf=`
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Af=`#if defined( USE_POINTS_UV )
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
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bf=`#ifdef USE_NORMALMAP
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
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,np=`float getShadowMask() {
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
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
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
}`,bp=`#if DEPTH_PACKING == 3200
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
}`,Tp=`#define DISTANCE
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
}`,wp=`#define DISTANCE
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define MATCAP
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
}`,Op=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,Fp=`#define NORMAL
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
}`,zp=`#define PHONG
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
}`,Bp=`#define PHONG
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
}`,Vp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
}`,Gp=`#define TOON
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
}`,Wp=`#define TOON
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
}`,Xp=`uniform float size;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,Kp=`uniform vec3 color;
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
}`,Jp=`uniform float rotation;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:vd,alphahash_pars_fragment:_d,alphamap_fragment:xd,alphamap_pars_fragment:Md,alphatest_fragment:yd,alphatest_pars_fragment:Sd,aomap_fragment:Ed,aomap_pars_fragment:bd,batching_pars_vertex:Td,batching_vertex:wd,begin_vertex:Ad,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Ld,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Nd,color_fragment:Od,color_pars_fragment:kd,color_pars_vertex:Fd,color_vertex:zd,common:Bd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:Hd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:Kd,envmap_fragment:Jd,envmap_common_pars_fragment:$d,envmap_pars_fragment:jd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:hf,envmap_vertex:Qd,fog_vertex:tf,fog_pars_vertex:ef,fog_fragment:nf,fog_pars_fragment:sf,gradientmap_pars_fragment:rf,lightmap_pars_fragment:af,lights_lambert_fragment:of,lights_lambert_pars_fragment:cf,lights_pars_begin:lf,lights_toon_fragment:uf,lights_toon_pars_fragment:df,lights_phong_fragment:ff,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:vf,lights_fragment_maps:_f,lights_fragment_end:xf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:Ef,map_fragment:bf,map_pars_fragment:Tf,map_particle_fragment:wf,map_particle_pars_fragment:Af,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Cf,morphinstance_vertex:Lf,morphcolor_vertex:Pf,morphnormal_vertex:Df,morphtarget_pars_vertex:If,morphtarget_vertex:Uf,normal_fragment_begin:Nf,normal_fragment_maps:Of,normal_pars_fragment:kf,normal_pars_vertex:Ff,normal_vertex:zf,normalmap_pars_fragment:Bf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Wf,opaque_fragment:Xf,packing:qf,premultiplied_alpha_fragment:Yf,project_vertex:Kf,dithering_fragment:Jf,dithering_pars_fragment:$f,roughnessmap_fragment:jf,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:Qf,shadowmap_pars_vertex:tp,shadowmap_vertex:ep,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:sp,skinning_vertex:rp,skinnormal_vertex:ap,specularmap_fragment:op,specularmap_pars_fragment:cp,tonemapping_fragment:lp,tonemapping_pars_fragment:hp,transmission_fragment:up,transmission_pars_fragment:dp,uv_pars_fragment:fp,uv_pars_vertex:pp,uv_vertex:mp,worldpos_vertex:gp,background_vert:vp,background_frag:_p,backgroundCube_vert:xp,backgroundCube_frag:Mp,cube_vert:yp,cube_frag:Sp,depth_vert:Ep,depth_frag:bp,distanceRGBA_vert:Tp,distanceRGBA_frag:wp,equirect_vert:Ap,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Lp,meshbasic_vert:Pp,meshbasic_frag:Dp,meshlambert_vert:Ip,meshlambert_frag:Up,meshmatcap_vert:Np,meshmatcap_frag:Op,meshnormal_vert:kp,meshnormal_frag:Fp,meshphong_vert:zp,meshphong_frag:Bp,meshphysical_vert:Vp,meshphysical_frag:Hp,meshtoon_vert:Gp,meshtoon_frag:Wp,points_vert:Xp,points_frag:qp,shadow_vert:Yp,shadow_frag:Kp,sprite_vert:Jp,sprite_frag:$p},ot={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},bn={basic:{uniforms:We([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:We([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:We([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:We([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:We([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:We([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:We([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:We([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:We([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:We([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:We([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:We([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:We([ot.lights,ot.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};bn.physical={uniforms:We([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const tr={r:0,b:0,g:0},pi=new Ln,jp=new xe;function Zp(i,t,e,n,s,r,a){const o=new Kt(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function v(E){let b=!1;const _=g(E);_===null?d(o,c):_&&_.isColor&&(d(_,1),b=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){const _=g(b);_&&(_.isCubeTexture||_.mapping===br)?(h===void 0&&(h=new ae(new we(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:es(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(b.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(pi)),h.material.toneMapped=ie.getTransfer(_.colorSpace)!==he,(u!==_||f!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ae(new Ar(2,2),new Xn({name:"BackgroundMaterial",uniforms:es(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ie.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,b){E.getRGB(tr,oh(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:v,addToRenderList:m}}function Qp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,C,W,F,B){let I=!1;const D=u(F,W,C);r!==D&&(r=D,l(r.object)),I=p(M,F,W,B),I&&g(M,F,W,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,_(M,C,W,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,W){const F=W.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let I=B[C.id];I===void 0&&(I={},B[C.id]=I);let D=I[F];return D===void 0&&(D=f(c()),I[F]=D),D}function f(M){const C=[],W=[],F=[];for(let B=0;B<e;B++)C[B]=0,W[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,C,W,F){const B=r.attributes,I=C.attributes;let D=0;const X=W.getAttributes();for(const H in X)if(X[H].location>=0){const J=B[H];let et=I[H];if(et===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),J===void 0||J.attribute!==et||et&&J.data!==et.data)return!0;D++}return r.attributesNum!==D||r.index!==F}function g(M,C,W,F){const B={},I=C.attributes;let D=0;const X=W.getAttributes();for(const H in X)if(X[H].location>=0){let J=I[H];J===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const et={};et.attribute=J,J&&J.data&&(et.data=J.data),B[H]=et,D++}r.attributes=B,r.attributesNum=D,r.index=F}function v(){const M=r.newAttributes;for(let C=0,W=M.length;C<W;C++)M[C]=0}function m(M){d(M,0)}function d(M,C){const W=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;W[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),B[M]!==C&&(i.vertexAttribDivisor(M,C),B[M]=C)}function E(){const M=r.newAttributes,C=r.enabledAttributes;for(let W=0,F=C.length;W<F;W++)C[W]!==M[W]&&(i.disableVertexAttribArray(W),C[W]=0)}function b(M,C,W,F,B,I,D){D===!0?i.vertexAttribIPointer(M,C,W,B,I):i.vertexAttribPointer(M,C,W,F,B,I)}function _(M,C,W,F){v();const B=F.attributes,I=W.getAttributes(),D=C.defaultAttributeValues;for(const X in I){const H=I[X];if(H.location>=0){let it=B[X];if(it===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const J=it.normalized,et=it.itemSize,_t=t.get(it);if(_t===void 0)continue;const Tt=_t.buffer,$=_t.type,at=_t.bytesPerElement,bt=$===i.INT||$===i.UNSIGNED_INT||it.gpuType===Ao;if(it.isInterleavedBufferAttribute){const lt=it.data,Dt=lt.stride,Ot=it.offset;if(lt.isInstancedInterleavedBuffer){for(let qt=0;qt<H.locationSize;qt++)d(H.location+qt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let qt=0;qt<H.locationSize;qt++)m(H.location+qt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let qt=0;qt<H.locationSize;qt++)b(H.location+qt,et/H.locationSize,$,J,Dt*at,(Ot+et/H.locationSize*qt)*at,bt)}else{if(it.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)d(H.location+lt,it.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let lt=0;lt<H.locationSize;lt++)b(H.location+lt,et/H.locationSize,$,J,et*at,et/H.locationSize*lt*at,bt)}}else if(D!==void 0){const J=D[X];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(H.location,J);break;case 3:i.vertexAttrib3fv(H.location,J);break;case 4:i.vertexAttrib4fv(H.location,J);break;default:i.vertexAttrib1fv(H.location,J)}}}}E()}function N(){L();for(const M in n){const C=n[M];for(const W in C){const F=C[W];for(const B in F)h(F[B].object),delete F[B];delete C[W]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const W in C){const F=C[W];for(const B in F)h(F[B].object),delete F[B];delete C[W]}delete n[M.id]}function A(M){for(const C in n){const W=n[C];if(W[M.id]===void 0)continue;const F=W[M.id];for(const B in F)h(F[B].object),delete F[B];delete W[M.id]}}function L(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function tm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function em(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const L=A===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Vn&&!L)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:N,maxSamples:w}}function nm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new vi,o=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,b=E*4;let _=d.clippingState||null;c.value=_,_=h(g,f,b,p);for(let N=0;N!==b;++N)_[N]=e[N];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=p+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,_=p;b!==v;++b,_+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function im(i){let t=new WeakMap;function e(a,o){return o===za?a.mapping=ji:o===Ba&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===za||o===Ba)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new fd(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uh extends ch{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,Dc=[.125,.215,.35,.446,.526,.582],Mi=20,ha=new uh,Ic=new Kt;let ua=null,da=0,fa=0,pa=!1;const _i=(1+Math.sqrt(5))/2,Wi=1/_i,Uc=[new P(-_i,Wi,0),new P(_i,Wi,0),new P(-Wi,0,_i),new P(Wi,0,_i),new P(0,_i,-Wi),new P(0,_i,Wi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Rs,format:vn,colorSpace:ss,depthBuffer:!1},s=Oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(r)),this._blurMaterial=rm(r,t,e)}return s}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){const o=new tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ic),h.toneMapping=oi,h.autoClear=!1;const p=new He({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new ae(new we,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Ic),v=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):E===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const b=this._cubeSize;er(s,E*b,d>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ji||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;er(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uc[(s-r-1)%Uc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ae(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const d=[];let E=0;for(let A=0;A<Mi;++A){const L=A/v,y=Math.exp(-L*L/2);d.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const _=this._sizeLods[s],N=3*_*(s>b-Xi?s-b+Xi:0),w=4*(this._cubeSize-_);er(e,N,w,3*_,2*_),c.setRenderTarget(e),c.render(u,ha)}}function sm(i){const t=[],e=[],n=[];let s=i;const r=i-Xi+1+Dc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Xi?c=Dc[a-i+Xi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),b=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,L=w>2?0:-1,y=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];E.set(y,v*g*w),b.set(f,m*g*w);const M=[w,w,w,w,w,w];_.set(M,d*g*w)}const N=new Ge;N.setAttribute("position",new $e(E,v)),N.setAttribute("uv",new $e(b,m)),N.setAttribute("faceIndex",new $e(_,d)),t.push(N),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oc(i,t,e){const n=new wi(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rm(i,t,e){const n=new Float32Array(Mi),s=new P(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function kc(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Fc(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Uo(){return`

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
	`}function am(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===za||c===Ba,h=c===ji||c===Zi;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Nc(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Nc(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function om(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cm(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let b=0,_=E.length;b<_;b+=3){const N=E[b+0],w=E[b+1],A=E[b+2];f.push(N,w,w,A,A,N)}}else if(g!==void 0){const E=g.array;v=g.version;for(let b=0,_=E.length/3-1;b<_;b+=3){const N=b+0,w=b+1,A=b+2;f.push(N,w,w,A,A,N)}}else return;const m=new(Ql(f)?ah:rh)(f,1);m.version=v;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function lm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*v[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function um(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let N=o.attributes.position.count*_,w=1;N>t.maxTextureSize&&(w=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const A=new Float32Array(N*w*4*u),L=new eh(A,N,w,u);L.type=Vn,L.needsUpdate=!0;const y=_*4;for(let C=0;C<u;C++){const W=d[C],F=E[C],B=b[C],I=N*w*4*C;for(let D=0;D<W.count;D++){const X=D*y;g===!0&&(s.fromBufferAttribute(W,D),A[I+X+0]=s.x,A[I+X+1]=s.y,A[I+X+2]=s.z,A[I+X+3]=0),v===!0&&(s.fromBufferAttribute(F,D),A[I+X+4]=s.x,A[I+X+5]=s.y,A[I+X+6]=s.z,A[I+X+7]=0),m===!0&&(s.fromBufferAttribute(B,D),A[I+X+8]=s.x,A[I+X+9]=s.y,A[I+X+10]=s.z,A[I+X+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new pt(N,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function dm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class dh extends Ve{constructor(t,e,n,s,r,a,o,c,l,h=Yi){if(h!==Yi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=Ti),n===void 0&&h===ts&&(n=Qi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Mn,this.minFilter=c!==void 0?c:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fh=new Ve,zc=new dh(1,1),ph=new eh,mh=new ju,gh=new lh,Bc=[],Vc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Bc[s];if(r===void 0&&(r=new Float32Array(s),Bc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=Vc[t];e===void 0&&(e=new Int32Array(t),Vc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ce(e,n))return;Wc.set(n),i.uniformMatrix2fv(this.addr,!1,Wc),Le(e,n)}}function _m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ce(e,n))return;Gc.set(n),i.uniformMatrix3fv(this.addr,!1,Gc),Le(e,n)}}function xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ce(e,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),Le(e,n)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zc.compareFunction=Zl,r=zc):r=fh,e.setTexture2D(t||r,s)}function Cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mh,s)}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gh,s)}function Pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ph,s)}function Dm(i){switch(i){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return vm;case 35675:return _m;case 35676:return xm;case 5124:case 35670:return Mm;case 35667:case 35671:return ym;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return bm;case 36294:return Tm;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Im(i,t){i.uniform1fv(this.addr,t)}function Um(i,t){const e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function Nm(i,t){const e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function Om(i,t){const e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function km(i,t){const e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fm(i,t){const e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zm(i,t){const e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bm(i,t){i.uniform1iv(this.addr,t)}function Vm(i,t){i.uniform2iv(this.addr,t)}function Hm(i,t){i.uniform3iv(this.addr,t)}function Gm(i,t){i.uniform4iv(this.addr,t)}function Wm(i,t){i.uniform1uiv(this.addr,t)}function Xm(i,t){i.uniform2uiv(this.addr,t)}function qm(i,t){i.uniform3uiv(this.addr,t)}function Ym(i,t){i.uniform4uiv(this.addr,t)}function Km(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fh,r[a])}function Jm(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mh,r[a])}function $m(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gh,r[a])}function jm(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ph,r[a])}function Zm(i){switch(i){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Om;case 35674:return km;case 35675:return Fm;case 35676:return zm;case 5124:case 35670:return Bm;case 35667:case 35671:return Vm;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return jm}}class Qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dm(e.type)}}class t0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}}class e0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function Xc(i,t){i.seq.push(t),i.map[t.id]=t}function n0(i,t,e){const n=i.name,s=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Xc(e,l===void 0?new Qm(o,i,t):new t0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new e0(o),Xc(e,u)),e=u}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);n0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function qc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i0=37297;let s0=0;function r0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Yc=new zt;function a0(i){ie._getMatrix(Yc,ie.workingColorSpace,i);const t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Tr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+r0(i.getShaderSource(t),a)}else return s}function o0(i,t){const e=a0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function c0(i,t){let e;switch(t){case Tu:e="Linear";break;case wu:e="Reinhard";break;case Au:e="Cineon";break;case zl:e="ACESFilmic";break;case Cu:e="AgX";break;case Lu:e="Neutral";break;case Ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const nr=new P;function l0(){ie.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),t=nr.y.toFixed(4),e=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function u0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ys(i){return i!==""}function Jc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(f0,m0)}const p0=new Map;function m0(i,t){let e=Gt[t];if(e===void 0){const n=p0.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(g0,v0)}function v0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function x0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Zi:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function y0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fl:t="ENVMAP_BLENDING_MULTIPLY";break;case Eu:t="ENVMAP_BLENDING_MIX";break;case bu:t="ENVMAP_BLENDING_ADD";break}return t}function S0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function E0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=_0(e),l=x0(e),h=M0(e),u=y0(e),f=S0(e),p=h0(e),g=u0(r),v=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ys).join(`
`),d.length>0&&(d+=`
`)):(m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),d=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==oi?c0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),l0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),a=go(a),a=Jc(a,e),a=$c(a,e),o=go(o),o=Jc(o,e),o=$c(o,e),a=jc(a),o=jc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=E+m+a,_=E+d+o,N=qc(s,s.VERTEX_SHADER,b),w=qc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,N),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(C){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(N).trim(),B=s.getShaderInfoLog(w).trim();let I=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,N,w);else{const X=Kc(s,N,"vertex"),H=Kc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+X+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||B==="")&&(D=!1);D&&(C.diagnostics={runnable:I,programLog:W,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(N),s.deleteShader(w),L=new pr(s,v),y=d0(s,v)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,i0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=w,this}let b0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w0(t),e.set(t,n)),n}}class w0{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}}function A0(i,t,e,n,s,r,a){const o=new ih,c=new T0,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,C,W,F){const B=W.fog,I=F.geometry,D=y.isMeshStandardMaterial?W.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||D),H=X&&X.mapping===br?X.image.height:null,it=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=J!==void 0?J.length:0;let _t=0;I.morphAttributes.position!==void 0&&(_t=1),I.morphAttributes.normal!==void 0&&(_t=2),I.morphAttributes.color!==void 0&&(_t=3);let Tt,$,at,bt;if(it){const le=bn[it];Tt=le.vertexShader,$=le.fragmentShader}else Tt=y.vertexShader,$=y.fragmentShader,c.update(y),at=c.getVertexShaderID(y),bt=c.getFragmentShaderID(y);const lt=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,qt=F.isBatchedMesh===!0,Me=!!y.map,Qt=!!y.matcap,be=!!X,z=!!y.aoMap,en=!!y.lightMap,Jt=!!y.bumpMap,$t=!!y.normalMap,Lt=!!y.displacementMap,ge=!!y.emissiveMap,Rt=!!y.metalnessMap,T=!!y.roughnessMap,x=y.anisotropy>0,G=y.clearcoat>0,Z=y.dispersion>0,tt=y.iridescence>0,j=y.sheen>0,wt=y.transmission>0,ht=x&&!!y.anisotropyMap,mt=G&&!!y.clearcoatMap,te=G&&!!y.clearcoatNormalMap,st=G&&!!y.clearcoatRoughnessMap,xt=tt&&!!y.iridescenceMap,Pt=tt&&!!y.iridescenceThicknessMap,Ut=j&&!!y.sheenColorMap,Mt=j&&!!y.sheenRoughnessMap,jt=!!y.specularMap,Ht=!!y.specularColorMap,fe=!!y.specularIntensityMap,U=wt&&!!y.transmissionMap,ct=wt&&!!y.thicknessMap,K=!!y.gradientMap,Q=!!y.alphaMap,ft=y.alphaTest>0,ut=!!y.alphaHash,kt=!!y.extensions;let Ee=oi;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const ke={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Tt,fragmentShader:$,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:bt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:qt,batchingColor:qt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ss,alphaToCoverage:!!y.alphaToCoverage,map:Me,matcap:Qt,envMap:be,envMapMode:be&&X.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:en,bumpMap:Jt,normalMap:$t,displacementMap:f&&Lt,emissiveMap:ge,normalMapObjectSpace:$t&&y.normalMapType===Uu,normalMapTangentSpace:$t&&y.normalMapType===jl,metalnessMap:Rt,roughnessMap:T,anisotropy:x,anisotropyMap:ht,clearcoat:G,clearcoatMap:mt,clearcoatNormalMap:te,clearcoatRoughnessMap:st,dispersion:Z,iridescence:tt,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:j,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:jt,specularColorMap:Ht,specularIntensityMap:fe,transmission:wt,transmissionMap:U,thicknessMap:ct,gradientMap:K,opaque:y.transparent===!1&&y.blending===Ei&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:ft,alphaHash:ut,combine:y.combine,mapUv:Me&&v(y.map.channel),aoMapUv:z&&v(y.aoMap.channel),lightMapUv:en&&v(y.lightMap.channel),bumpMapUv:Jt&&v(y.bumpMap.channel),normalMapUv:$t&&v(y.normalMap.channel),displacementMapUv:Lt&&v(y.displacementMap.channel),emissiveMapUv:ge&&v(y.emissiveMap.channel),metalnessMapUv:Rt&&v(y.metalnessMap.channel),roughnessMapUv:T&&v(y.roughnessMap.channel),anisotropyMapUv:ht&&v(y.anisotropyMap.channel),clearcoatMapUv:mt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(y.sheenRoughnessMap.channel),specularMapUv:jt&&v(y.specularMap.channel),specularColorMapUv:Ht&&v(y.specularColorMap.channel),specularIntensityMapUv:fe&&v(y.specularIntensityMap.channel),transmissionMapUv:U&&v(y.transmissionMap.channel),thicknessMapUv:ct&&v(y.thicknessMap.channel),alphaMapUv:Q&&v(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($t||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Me||Q),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Dt,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:_t,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Me&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:ge&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Se,flipSided:y.side===qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&y.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(E(M,y),b(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){const M=g[y.type];let C;if(M){const W=bn[M];C=ld.clone(W.uniforms)}else C=y.uniforms;return C}function N(y,M){let C;for(let W=0,F=h.length;W<F;W++){const B=h[W];if(B.cacheKey===M){C=B,++C.usedTimes;break}}return C===void 0&&(C=new E0(i,M,y,r),h.push(C)),C}function w(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function A(y){c.remove(y)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:N,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:L}}function R0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function C0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function tl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,v,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function o(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||C0),n.length>1&&n.sort(f||Qc),s.length>1&&s.sort(f||Qc)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function L0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new tl,i.set(n,[a])):s>=r.length?(a=new tl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function P0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Kt};break;case"SpotLight":e={position:new P,direction:new P,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function D0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I0=0;function U0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N0(i){const t=new P0,e=D0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new xe,a=new xe;function o(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,E=0,b=0,_=0,N=0,w=0,A=0;l.sort(U0);for(let y=0,M=l.length;y<M;y++){const C=l[y],W=C.color,F=C.intensity,B=C.distance,I=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=W.r*F,u+=W.g*F,f+=W.b*F;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],F);A++}else if(C.isDirectionalLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=I,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=D,p++}else if(C.isSpotLight){const D=t.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(W).multiplyScalar(F),D.distance=B,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[v]=D;const X=C.shadow;if(C.map&&(n.spotLightMap[N]=C.map,N++,X.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=X.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=I,_++}v++}else if(C.isRectAreaLight){const D=t.get(C);D.color.copy(W).multiplyScalar(F),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=D,m++}else if(C.isPointLight){const D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){const X=C.shadow,H=e.get(C);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=D,g++}else if(C.isHemisphereLight){const D=t.get(C);D.skyColor.copy(C.color).multiplyScalar(F),D.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[d]=D,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==_||L.numSpotMaps!==N||L.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+N-w,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=_,L.numSpotMaps=N,L.numLightProbes=A,n.version=I0++)}function c(l,h){let u=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){const b=l[d];if(b.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(b.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function el(i){const t=new N0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function O0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new el(i),t.set(s,[o])):r>=a.length?(o=new el(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class k0 extends as{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class F0 extends as{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
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
}`;function V0(i,t,e){let n=new Io;const s=new pt,r=new pt,a=new ue,o=new k0({depthPacking:Iu}),c=new F0,l={},h=e.maxTextureSize,u={[ci]:qe,[qe]:ci,[Se]:Se},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:z0,fragmentShader:B0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ae(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let d=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ai),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const F=d!==Bn&&this.type===Bn,B=d===Bn&&this.type!==Bn;for(let I=0,D=w.length;I<D;I++){const X=w[I],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||F===!0||B===!0){const et=this.type!==Bn?{minFilter:Mn,magFilter:Mn}:{};H.map!==null&&H.map.dispose(),H.map=new wi(s.x,s.y,et),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const J=H.getViewportCount();for(let et=0;et<J;et++){const _t=H.getViewport(et);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),W.viewport(a),H.updateMatrices(X,et),n=H.getFrustum(),_(A,L,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Bn&&E(H,L),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,C)};function E(w,A){const L=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,L,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,L,p,v,null)}function b(w,A,L,y){let M=null;const C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=L.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=M.uuid,F=A.uuid;let B=l[W];B===void 0&&(B={},l[W]=B);let I=B[F];I===void 0&&(I=M.clone(),B[F]=I,A.addEventListener("dispose",N)),M=I}if(M.visible=A.visible,M.wireframe=A.wireframe,y===Bn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=L}return M}function _(w,A,L,y,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Bn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const F=t.update(w),B=w.material;if(Array.isArray(B)){const I=F.groups;for(let D=0,X=I.length;D<X;D++){const H=I[D],it=B[H.materialIndex];if(it&&it.visible){const J=b(w,it,y,M);w.onBeforeShadow(i,w,A,L,F,J,H),i.renderBufferDirect(L,null,F,J,w,H),w.onAfterShadow(i,w,A,L,F,J,H)}}}else if(B.visible){const I=b(w,B,y,M);w.onBeforeShadow(i,w,A,L,F,I,null),i.renderBufferDirect(L,null,F,I,w,null),w.onAfterShadow(i,w,A,L,F,I,null)}}const W=w.children;for(let F=0,B=W.length;F<B;F++)_(W[F],A,L,y,M)}function N(w){w.target.removeEventListener("dispose",N);for(const L in l){const y=l[L],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const H0={[Da]:Ia,[Ua]:ka,[Na]:Fa,[$i]:Oa,[Ia]:Da,[ka]:Ua,[Fa]:Na,[Oa]:$i};function G0(i,t){function e(){let U=!1;const ct=new ue;let K=null;const Q=new ue(0,0,0,0);return{setMask:function(ft){K!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),K=ft)},setLocked:function(ft){U=ft},setClear:function(ft,ut,kt,Ee,ke){ke===!0&&(ft*=Ee,ut*=Ee,kt*=Ee),ct.set(ft,ut,kt,Ee),Q.equals(ct)===!1&&(i.clearColor(ft,ut,kt,Ee),Q.copy(ct))},reset:function(){U=!1,K=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,K=null,Q=null,ft=null;return{setReversed:function(ut){if(ct!==ut){const kt=t.get("EXT_clip_control");ct?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const Ee=ft;ft=null,this.setClear(Ee)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?lt(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(ut){K!==ut&&!U&&(i.depthMask(ut),K=ut)},setFunc:function(ut){if(ct&&(ut=H0[ut]),Q!==ut){switch(ut){case Da:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Na:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ut}},setLocked:function(ut){U=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){U=!1,K=null,Q=null,ft=null,ct=!1}}}function s(){let U=!1,ct=null,K=null,Q=null,ft=null,ut=null,kt=null,Ee=null,ke=null;return{setTest:function(le){U||(le?lt(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(le){ct!==le&&!U&&(i.stencilMask(le),ct=le)},setFunc:function(le,cn,In){(K!==le||Q!==cn||ft!==In)&&(i.stencilFunc(le,cn,In),K=le,Q=cn,ft=In)},setOp:function(le,cn,In){(ut!==le||kt!==cn||Ee!==In)&&(i.stencilOp(le,cn,In),ut=le,kt=cn,Ee=In)},setLocked:function(le){U=le},setClear:function(le){ke!==le&&(i.clearStencil(le),ke=le)},reset:function(){U=!1,ct=null,K=null,Q=null,ft=null,ut=null,kt=null,Ee=null,ke=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,b=null,_=null,N=null,w=null,A=new Kt(0,0,0),L=0,y=!1,M=null,C=null,W=null,F=null,B=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,X=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=X>=2);let it=null,J={};const et=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Tt=new ue().fromArray(et),$=new ue().fromArray(_t);function at(U,ct,K,Q){const ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(U,ut),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<K;kt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ct+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}const bt={};bt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc($i),Jt(!1),$t(ac),lt(i.CULL_FACE),z(ai);function lt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Dt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ot(U,ct){return u[U]!==ct?(i.bindFramebuffer(U,ct),u[U]=ct,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function qt(U,ct){let K=p,Q=!1;if(U){K=f.get(ct),K===void 0&&(K=[],f.set(ct,K));const ft=U.textures;if(K.length!==ft.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,kt=ft.length;ut<kt;ut++)K[ut]=i.COLOR_ATTACHMENT0+ut;K.length=ft.length,Q=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,Q=!0);Q&&i.drawBuffers(K)}function Me(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Qt={[xi]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};Qt[cu]=i.MIN,Qt[lu]=i.MAX;const be={[hu]:i.ZERO,[uu]:i.ONE,[du]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[gu]:i.DST_COLOR,[pu]:i.DST_ALPHA,[fu]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[vu]:i.ONE_MINUS_DST_COLOR,[mu]:i.ONE_MINUS_DST_ALPHA,[xu]:i.CONSTANT_COLOR,[Mu]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function z(U,ct,K,Q,ft,ut,kt,Ee,ke,le){if(U===ai){v===!0&&(Dt(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),U!==ru){if(U!==m||le!==y){if((d!==xi||_!==xi)&&(i.blendEquation(i.FUNC_ADD),d=xi,_=xi),le)switch(U){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ji:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,b=null,N=null,w=null,A.set(0,0,0),L=0,m=U,y=le}return}ft=ft||ct,ut=ut||K,kt=kt||Q,(ct!==d||ft!==_)&&(i.blendEquationSeparate(Qt[ct],Qt[ft]),d=ct,_=ft),(K!==E||Q!==b||ut!==N||kt!==w)&&(i.blendFuncSeparate(be[K],be[Q],be[ut],be[kt]),E=K,b=Q,N=ut,w=kt),(Ee.equals(A)===!1||ke!==L)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ke),A.copy(Ee),L=ke),m=U,y=!1}function en(U,ct){U.side===Se?Dt(i.CULL_FACE):lt(i.CULL_FACE);let K=U.side===qe;ct&&(K=!K),Jt(K),U.blending===Ei&&U.transparent===!1?z(ai):z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Q=U.stencilWrite;o.setTest(Q),Q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ge(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function $t(U){U!==iu?(lt(i.CULL_FACE),U!==C&&(U===ac?i.cullFace(i.BACK):U===su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),C=U}function Lt(U){U!==W&&(D&&i.lineWidth(U),W=U)}function ge(U,ct,K){U?(lt(i.POLYGON_OFFSET_FILL),(F!==ct||B!==K)&&(i.polygonOffset(ct,K),F=ct,B=K)):Dt(i.POLYGON_OFFSET_FILL)}function Rt(U){U?lt(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+I-1),it!==U&&(i.activeTexture(U),it=U)}function x(U,ct,K){K===void 0&&(it===null?K=i.TEXTURE0+I-1:K=it);let Q=J[K];Q===void 0&&(Q={type:void 0,texture:void 0},J[K]=Q),(Q.type!==U||Q.texture!==ct)&&(it!==K&&(i.activeTexture(K),it=K),i.bindTexture(U,ct||bt[U]),Q.type=U,Q.texture=ct)}function G(){const U=J[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(U){Tt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Tt.copy(U))}function Mt(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function jt(U,ct){let K=l.get(ct);K===void 0&&(K=new WeakMap,l.set(ct,K));let Q=K.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(ct,U.name),K.set(U,Q))}function Ht(U,ct){const Q=l.get(ct).get(U);c.get(ct)!==Q&&(i.uniformBlockBinding(ct,Q,U.__bindingPointIndex),c.set(ct,Q))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,J={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,b=null,_=null,N=null,w=null,A=new Kt(0,0,0),L=0,y=!1,M=null,C=null,W=null,F=null,B=null,Tt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Dt,bindFramebuffer:Ot,drawBuffers:qt,useProgram:Me,setBlending:z,setMaterial:en,setFlipSided:Jt,setCullFace:$t,setLineWidth:Lt,setPolygonOffset:ge,setScissorTest:Rt,activeTexture:T,bindTexture:x,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:xt,texImage3D:Pt,updateUBOMapping:jt,uniformBlockBinding:Ht,texStorage2D:te,texStorage3D:st,texSubImage2D:j,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Ut,viewport:Mt,reset:fe}}function nl(i,t,e,n){const s=W0(n);switch(e){case Wl:return i*t;case ql:return i*t;case Yl:return i*t*2;case Kl:return i*t/s.components*s.byteLength;case Lo:return i*t/s.components*s.byteLength;case Jl:return i*t*2/s.components*s.byteLength;case Po:return i*t*2/s.components*s.byteLength;case Xl:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Do:return i*t*4/s.components*s.byteLength;case lr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case lo:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $l:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W0(i){switch(i){case Wn:case Vl:return{byteLength:1,components:1};case ws:case Hl:case Rs:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case Ti:case Ao:case Vn:return{byteLength:4,components:1};case Gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function X0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):As("canvas")}function v(T,x,G){let Z=1;const tt=Rt(T);if((tt.width>G||tt.height>G)&&(Z=G/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(Z*tt.width),wt=Math.floor(Z*tt.height);u===void 0&&(u=g(j,wt));const ht=x?g(j,wt):u;return ht.width=j,ht.height=wt,ht.getContext("2d").drawImage(T,0,0,j,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+wt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,G,Z,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=x;if(x===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),x===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),x===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),x===i.RGBA){const wt=tt?Tr:ie.getTransfer(Z);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=wt===he?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(T,x){let G;return T?x===null||x===Ti||x===Qi?G=i.DEPTH24_STENCIL8:x===Vn?G=i.DEPTH32F_STENCIL8:x===ws&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===Qi?G=i.DEPTH_COMPONENT24:x===Vn?G=i.DEPTH_COMPONENT32F:x===ws&&(G=i.DEPTH_COMPONENT16),G}function N(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Mn&&T.minFilter!==wn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){const x=T.target;x.removeEventListener("dispose",w),L(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),M(x)}function L(T){const x=n.get(T);if(x.__webglInit===void 0)return;const G=T.source,Z=f.get(G);if(Z){const tt=Z[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(T),Object.keys(Z).length===0&&f.delete(G)}n.remove(T)}function y(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const G=T.source,Z=f.get(G);delete Z[x.__cacheKey],a.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let tt=0;tt<x.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=T.textures;for(let Z=0,tt=G.length;Z<tt;Z++){const j=n.get(G[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(T)}let C=0;function W(){C=0}function F(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function B(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function I(T,x){const G=n.get(T);if(T.isVideoTexture&&Lt(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,T,x);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function D(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){$(G,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function X(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){$(G,T,x);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function H(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){at(G,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const it={[Va]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},J={[Mn]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[Vr]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},et={[Nu]:i.NEVER,[Vu]:i.ALWAYS,[Ou]:i.LESS,[Zl]:i.LEQUAL,[ku]:i.EQUAL,[Bu]:i.GEQUAL,[Fu]:i.GREATER,[zu]:i.NOTEQUAL};function _t(T,x){if(x.type===Vn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===wn||x.magFilter===Vr||x.magFilter===Os||x.magFilter===Si||x.minFilter===wn||x.minFilter===Vr||x.minFilter===Os||x.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,J[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,J[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Mn||x.minFilter!==Os&&x.minFilter!==Si||x.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Tt(T,x){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));const Z=x.source;let tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));const j=B(x);if(j!==T.__cacheKey){tt[j]===void 0&&(tt[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),tt[j].usedTimes++;const wt=tt[T.__cacheKey];wt!==void 0&&(tt[T.__cacheKey].usedTimes--,wt.usedTimes===0&&y(x)),T.__cacheKey=j,T.__webglTexture=tt[j].texture}return G}function $(T,x,G){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Tt(T,x),j=x.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+G);const wt=n.get(j);if(j.version!==wt.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);const ht=ie.getPrimaries(ie.workingColorSpace),mt=x.colorSpace===ii?null:ie.getPrimaries(x.colorSpace),te=x.colorSpace===ii||ht===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let st=v(x.image,!1,s.maxTextureSize);st=ge(x,st);const xt=r.convert(x.format,x.colorSpace),Pt=r.convert(x.type);let Ut=b(x.internalFormat,xt,Pt,x.colorSpace,x.isVideoTexture);_t(Z,x);let Mt;const jt=x.mipmaps,Ht=x.isVideoTexture!==!0,fe=wt.__version===void 0||tt===!0,U=j.dataReady,ct=N(x,st);if(x.isDepthTexture)Ut=_(x.format===ts,x.type),fe&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Pt,null));else if(x.isDataTexture)if(jt.length>0){Ht&&fe&&e.texStorage2D(i.TEXTURE_2D,ct,Ut,jt[0].width,jt[0].height);for(let K=0,Q=jt.length;K<Q;K++)Mt=jt[K],Ht?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Mt.width,Mt.height,xt,Pt,Mt.data):e.texImage2D(i.TEXTURE_2D,K,Ut,Mt.width,Mt.height,0,xt,Pt,Mt.data);x.generateMipmaps=!1}else Ht?(fe&&e.texStorage2D(i.TEXTURE_2D,ct,Ut,st.width,st.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,xt,Pt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Pt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ht&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Ut,jt[0].width,jt[0].height,st.depth);for(let K=0,Q=jt.length;K<Q;K++)if(Mt=jt[K],x.format!==vn)if(xt!==null)if(Ht){if(U)if(x.layerUpdates.size>0){const ft=nl(Mt.width,Mt.height,x.format,x.type);for(const ut of x.layerUpdates){const kt=Mt.data.subarray(ut*ft/Mt.data.BYTES_PER_ELEMENT,(ut+1)*ft/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ut,Mt.width,Mt.height,1,xt,kt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,st.depth,xt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ut,Mt.width,Mt.height,st.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,st.depth,xt,Pt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Ut,Mt.width,Mt.height,st.depth,0,xt,Pt,Mt.data)}else{Ht&&fe&&e.texStorage2D(i.TEXTURE_2D,ct,Ut,jt[0].width,jt[0].height);for(let K=0,Q=jt.length;K<Q;K++)Mt=jt[K],x.format!==vn?xt!==null?Ht?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Ut,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Mt.width,Mt.height,xt,Pt,Mt.data):e.texImage2D(i.TEXTURE_2D,K,Ut,Mt.width,Mt.height,0,xt,Pt,Mt.data)}else if(x.isDataArrayTexture)if(Ht){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Ut,st.width,st.height,st.depth),U)if(x.layerUpdates.size>0){const K=nl(st.width,st.height,x.format,x.type);for(const Q of x.layerUpdates){const ft=st.data.subarray(Q*K/st.data.BYTES_PER_ELEMENT,(Q+1)*K/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,xt,Pt,ft)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Pt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,xt,Pt,st.data);else if(x.isData3DTexture)Ht?(fe&&e.texStorage3D(i.TEXTURE_3D,ct,Ut,st.width,st.height,st.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Pt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,xt,Pt,st.data);else if(x.isFramebufferTexture){if(fe)if(Ht)e.texStorage2D(i.TEXTURE_2D,ct,Ut,st.width,st.height);else{let K=st.width,Q=st.height;for(let ft=0;ft<ct;ft++)e.texImage2D(i.TEXTURE_2D,ft,Ut,K,Q,0,xt,Pt,null),K>>=1,Q>>=1}}else if(jt.length>0){if(Ht&&fe){const K=Rt(jt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Ut,K.width,K.height)}for(let K=0,Q=jt.length;K<Q;K++)Mt=jt[K],Ht?U&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt,Pt,Mt):e.texImage2D(i.TEXTURE_2D,K,Ut,xt,Pt,Mt);x.generateMipmaps=!1}else if(Ht){if(fe){const K=Rt(st);e.texStorage2D(i.TEXTURE_2D,ct,Ut,K.width,K.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Pt,st)}else e.texImage2D(i.TEXTURE_2D,0,Ut,xt,Pt,st);m(x)&&d(Z),wt.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function at(T,x,G){if(x.image.length!==6)return;const Z=Tt(T,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const j=n.get(tt);if(tt.version!==j.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);const wt=ie.getPrimaries(ie.workingColorSpace),ht=x.colorSpace===ii?null:ie.getPrimaries(x.colorSpace),mt=x.colorSpace===ii||wt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const te=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!te&&!st?xt[Q]=v(x.image[Q],!0,s.maxCubemapSize):xt[Q]=st?x.image[Q].image:x.image[Q],xt[Q]=ge(x,xt[Q]);const Pt=xt[0],Ut=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),jt=b(x.internalFormat,Ut,Mt,x.colorSpace),Ht=x.isVideoTexture!==!0,fe=j.__version===void 0||Z===!0,U=tt.dataReady;let ct=N(x,Pt);_t(i.TEXTURE_CUBE_MAP,x);let K;if(te){Ht&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,jt,Pt.width,Pt.height);for(let Q=0;Q<6;Q++){K=xt[Q].mipmaps;for(let ft=0;ft<K.length;ft++){const ut=K[ft];x.format!==vn?Ut!==null?Ht?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,Ut,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,jt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,Ut,Mt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,jt,ut.width,ut.height,0,Ut,Mt,ut.data)}}}else{if(K=x.mipmaps,Ht&&fe){K.length>0&&ct++;const Q=Rt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Ut,Mt,xt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,xt[Q].width,xt[Q].height,0,Ut,Mt,xt[Q].data);for(let ft=0;ft<K.length;ft++){const kt=K[ft].image[Q].image;Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,kt.width,kt.height,Ut,Mt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,jt,kt.width,kt.height,0,Ut,Mt,kt.data)}}else{Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ut,Mt,xt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Ut,Mt,xt[Q]);for(let ft=0;ft<K.length;ft++){const ut=K[ft];Ht?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Ut,Mt,ut.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,jt,Ut,Mt,ut.image[Q])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),j.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function bt(T,x,G,Z,tt,j){const wt=r.convert(G.format,G.colorSpace),ht=r.convert(G.type),mt=b(G.internalFormat,wt,ht,G.colorSpace),te=n.get(x),st=n.get(G);if(st.__renderTarget=x,!te.__hasExternalTextures){const xt=Math.max(1,x.width>>j),Pt=Math.max(1,x.height>>j);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,mt,xt,Pt,x.depth,0,wt,ht,null):e.texImage2D(tt,j,mt,xt,Pt,0,wt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),$t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,st.__webglTexture,0,Jt(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,st.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const Z=x.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,j=_(x.stencilBuffer,tt),wt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Jt(x);$t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,j,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,T)}else{const Z=x.textures;for(let tt=0;tt<Z.length;tt++){const j=Z[tt],wt=r.convert(j.format,j.colorSpace),ht=r.convert(j.type),mt=b(j.internalFormat,wt,ht,j.colorSpace),te=Jt(x);G&&$t(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,mt,x.width,x.height):$t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),I(x.depthTexture,0);const tt=Z.__webglTexture,j=Jt(x);if(x.depthTexture.format===Yi)$t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===ts)$t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ot(T){const x=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Z}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Dt(x.__webglFramebuffer,T)}else if(G){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),lt(x.__webglDepthbuffer[Z],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),lt(x.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(T,x,G){const Z=n.get(T);x!==void 0&&bt(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ot(T)}function Me(T){const x=T.texture,G=n.get(T),Z=n.get(x);T.addEventListener("dispose",A);const tt=T.textures,j=T.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let mt=0;mt<x.mipmaps.length;mt++)G.__webglFramebuffer[ht][mt]=i.createFramebuffer()}else G.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)G.__webglFramebuffer[ht]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ht=0,mt=tt.length;ht<mt;ht++){const te=n.get(tt[ht]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&$t(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const mt=tt[ht];G.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ht]);const te=r.convert(mt.format,mt.colorSpace),st=r.convert(mt.type),xt=b(mt.internalFormat,te,st,mt.colorSpace,T.isXRRenderTarget===!0),Pt=Jt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,G.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),_t(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)bt(G.__webglFramebuffer[ht][mt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else bt(G.__webglFramebuffer[ht],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,mt=tt.length;ht<mt;ht++){const te=tt[ht],st=n.get(te);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),_t(i.TEXTURE_2D,te),bt(G.__webglFramebuffer,T,te,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(te)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),_t(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)bt(G.__webglFramebuffer[mt],T,x,i.COLOR_ATTACHMENT0,ht,mt);else bt(G.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ht,0);m(x)&&d(ht),e.unbindTexture()}T.depthBuffer&&Ot(T)}function Qt(T){const x=T.textures;for(let G=0,Z=x.length;G<Z;G++){const tt=x[G];if(m(tt)){const j=E(T),wt=n.get(tt).__webglTexture;e.bindTexture(j,wt),d(j),e.unbindTexture()}}}const be=[],z=[];function en(T){if(T.samples>0){if($t(T)===!1){const x=T.textures,G=T.width,Z=T.height;let tt=i.COLOR_BUFFER_BIT;const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(T),ht=x.length>1;if(ht)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const te=n.get(x[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,tt,i.NEAREST),c===!0&&(be.length=0,z.length=0,be.push(i.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(j),z.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const te=n.get(x[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Jt(T){return Math.min(s.maxSamples,T.samples)}function $t(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Lt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function ge(T,x){const G=T.colorSpace,Z=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==ss&&G!==ii&&(ie.getTransfer(G)===he?(Z!==vn||tt!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=W,this.setTexture2D=I,this.setTexture2DArray=D,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=qt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=$t}function q0(i,t){function e(n,s=ii){let r;const a=ie.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vl)return i.BYTE;if(n===Hl)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===Wl)return i.ALPHA;if(n===Xl)return i.RGB;if(n===vn)return i.RGBA;if(n===ql)return i.LUMINANCE;if(n===Yl)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===Jl)return i.RG;if(n===Po)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===lr||n===hr||n===ur||n===dr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Ya)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===$a||n===ja||n===Za||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===lo||n===ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===uo||n===fo||n===po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Y0 extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Oe extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K0={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const J0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xn({vertexShader:J0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z0 extends rs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const v=new j0,m=e.getContextAttributes();let d=null,E=null;const b=[],_=[],N=new pt;let w=null;const A=new tn;A.viewport=new ue;const L=new tn;L.viewport=new ue;const y=[A,L],M=new Y0;let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=b[$];return at===void 0&&(at=new ga,b[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=b[$];return at===void 0&&(at=new ga,b[$]=at),at.getGripSpace()},this.getHand=function($){let at=b[$];return at===void 0&&(at=new ga,b[$]=at),at.getHandSpace()};function F($){const at=_.indexOf($.inputSource);if(at===-1)return;const bt=b[at];bt!==void 0&&(bt.update($.inputSource,$.frame,l||a),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",I);for(let $=0;$<b.length;$++){const at=_[$];at!==null&&(_[$]=null,b[$].disconnect(at))}C=null,W=null,v.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new wi(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,bt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?ts:Yi,bt=m.stencil?Qi:Ti);const Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new wi(f.textureWidth,f.textureHeight,{format:vn,type:Wn,depthTexture:new dh(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function I($){for(let at=0;at<$.removed.length;at++){const bt=$.removed[at],lt=_.indexOf(bt);lt>=0&&(_[lt]=null,b[lt].disconnect(bt))}for(let at=0;at<$.added.length;at++){const bt=$.added[at];let lt=_.indexOf(bt);if(lt===-1){for(let Ot=0;Ot<b.length;Ot++)if(Ot>=_.length){_.push(bt),lt=Ot;break}else if(_[Ot]===null){_[Ot]=bt,lt=Ot;break}if(lt===-1)break}const Dt=b[lt];Dt&&Dt.connect(bt)}}const D=new P,X=new P;function H($,at,bt){D.setFromMatrixPosition(at.matrixWorld),X.setFromMatrixPosition(bt.matrixWorld);const lt=D.distanceTo(X),Dt=at.projectionMatrix.elements,Ot=bt.projectionMatrix.elements,qt=Dt[14]/(Dt[10]-1),Me=Dt[14]/(Dt[10]+1),Qt=(Dt[9]+1)/Dt[5],be=(Dt[9]-1)/Dt[5],z=(Dt[8]-1)/Dt[0],en=(Ot[8]+1)/Ot[0],Jt=qt*z,$t=qt*en,Lt=lt/(-z+en),ge=Lt*-z;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ge),$.translateZ(Lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Dt[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Rt=qt+Lt,T=Me+Lt,x=Jt-ge,G=$t+(lt-ge),Z=Qt*Me/T*Rt,tt=be*Me/T*Rt;$.projectionMatrix.makePerspective(x,G,Z,tt,Rt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let at=$.near,bt=$.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(bt=v.depthFar)),M.near=L.near=A.near=at,M.far=L.far=A.far=bt,(C!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,W=M.far),A.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,M.layers.mask=A.layers.mask|L.layers.mask;const lt=$.parent,Dt=M.cameras;it(M,lt);for(let Ot=0;Ot<Dt.length;Ot++)it(Dt[Ot],lt);Dt.length===2?H(M,A,L):M.projectionMatrix.copy(A.projectionMatrix),J($,M,lt)};function J($,at,bt){bt===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=mo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let et=null;function _t($,at){if(h=at.getViewerPose(l||a),g=at,h!==null){const bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let lt=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Ot=0;Ot<bt.length;Ot++){const qt=bt[Ot];let Me=null;if(p!==null)Me=p.getViewport(qt);else{const be=u.getViewSubImage(f,qt);Me=be.viewport,Ot===0&&(t.setRenderTargetTextures(E,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(E))}let Qt=y[Ot];Qt===void 0&&(Qt=new tn,Qt.layers.enable(Ot),Qt.viewport=new ue,y[Ot]=Qt),Qt.matrix.fromArray(qt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(qt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Me.x,Me.y,Me.width,Me.height),Ot===0&&(M.matrix.copy(Qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Qt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ot=u.getDepthInformation(bt[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,s.renderState)}}for(let bt=0;bt<b.length;bt++){const lt=_[bt],Dt=b[bt];lt!==null&&Dt!==void 0&&Dt.update(lt,at,l||a)}et&&et($,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const Tt=new hh;Tt.setAnimationLoop(_t),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}}const mi=new Ln,Q0=new xe;function tg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,oh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,b,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,E,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),b=E.envMap,_=E.envMapRotation;b&&(m.envMap.value=b,mi.copy(_),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(mi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function eg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const _=b.program;n.uniformBlockBinding(E,_)}function l(E,b){let _=s[E.id];_===void 0&&(g(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",m));const N=b.program;n.updateUBOMapping(E,N);const w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function h(E){const b=u();E.__bindingPointIndex=b;const _=i.createBuffer(),N=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,N,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=s[E.id],_=E.uniforms,N=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,A=_.length;w<A;w++){const L=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,M=L.length;y<M;y++){const C=L[y];if(p(C,w,y,N)===!0){const W=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let I=0;I<F.length;I++){const D=F[I],X=v(D);typeof D=="number"||typeof D=="boolean"?(C.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,W+B,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=0,C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=0,C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=0):(D.toArray(C.__data,B),B+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,_,N){const w=E.value,A=b+"_"+_;if(N[A]===void 0)return typeof w=="number"||typeof w=="boolean"?N[A]=w:N[A]=w.clone(),!0;{const L=N[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return N[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(E){const b=E.uniforms;let _=0;const N=16;for(let A=0,L=b.length;A<L;A++){const y=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,C=y.length;M<C;M++){const W=y[M],F=Array.isArray(W.value)?W.value:[W.value];for(let B=0,I=F.length;B<I;B++){const D=F[B],X=v(D),H=_%N,it=H%X.boundary,J=H+it;_+=it,J!==0&&N-J<X.storage&&(_+=N-J),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=X.storage}}}const w=_%N;return w>0&&(_+=N-w),E.__size=_,E.__cache={},this}function v(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class ng{constructor(t={}){const{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=oi,this.toneMappingExposure=1;const _=this;let N=!1,w=0,A=0,L=null,y=-1,M=null;const C=new ue,W=new ue;let F=null;const B=new Kt(0);let I=0,D=e.width,X=e.height,H=1,it=null,J=null;const et=new ue(0,0,D,X),_t=new ue(0,0,D,X);let Tt=!1;const $=new Io;let at=!1,bt=!1;const lt=new xe,Dt=new xe,Ot=new P,qt=new ue,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function be(){return L===null?H:1}let z=n;function en(S,O){return e.getContext(S,O)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),z===null){const O="webgl2";if(z=en(O,S),z===null)throw en(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Jt,$t,Lt,ge,Rt,T,x,G,Z,tt,j,wt,ht,mt,te,st,xt,Pt,Ut,Mt,jt,Ht,fe,U;function ct(){Jt=new om(z),Jt.init(),Ht=new q0(z,Jt),$t=new em(z,Jt,t,Ht),Lt=new G0(z,Jt),$t.reverseDepthBuffer&&f&&Lt.buffers.depth.setReversed(!0),ge=new hm(z),Rt=new R0,T=new X0(z,Jt,Lt,Rt,$t,Ht,ge),x=new im(_),G=new am(_),Z=new gd(z),fe=new Qp(z,Z),tt=new cm(z,Z,ge,fe),j=new dm(z,tt,Z,ge),Ut=new um(z,$t,T),st=new nm(Rt),wt=new A0(_,x,G,Jt,$t,fe,st),ht=new tg(_,Rt),mt=new L0,te=new O0(Jt),Pt=new Zp(_,x,G,Lt,j,p,c),xt=new V0(_,j,$t),U=new eg(z,ge,$t,Lt),Mt=new tm(z,Jt,ge),jt=new lm(z,Jt,ge),ge.programs=wt.programs,_.capabilities=$t,_.extensions=Jt,_.properties=Rt,_.renderLists=mt,_.shadowMap=xt,_.state=Lt,_.info=ge}ct();const K=new Z0(_,z);this.xr=K,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const S=Jt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Jt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(D,X,!1))},this.getSize=function(S){return S.set(D,X)},this.setSize=function(S,O,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=S,X=O,e.width=Math.floor(S*H),e.height=Math.floor(O*H),q===!0&&(e.style.width=S+"px",e.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(D*H,X*H).floor()},this.setDrawingBufferSize=function(S,O,q){D=S,X=O,H=q,e.width=Math.floor(S*q),e.height=Math.floor(O*q),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(et)},this.setViewport=function(S,O,q,Y){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,O,q,Y),Lt.viewport(C.copy(et).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(_t)},this.setScissor=function(S,O,q,Y){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,O,q,Y),Lt.scissor(W.copy(_t).multiplyScalar(H).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(S){Lt.setScissorTest(Tt=S)},this.setOpaqueSort=function(S){it=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(S=!0,O=!0,q=!0){let Y=0;if(S){let k=!1;if(L!==null){const rt=L.texture.format;k=rt===Do||rt===Po||rt===Lo}if(k){const rt=L.texture.type,dt=rt===Wn||rt===Ti||rt===ws||rt===Qi||rt===Ro||rt===Co,yt=Pt.getClearColor(),St=Pt.getClearAlpha(),Nt=yt.r,Ft=yt.g,Et=yt.b;dt?(g[0]=Nt,g[1]=Ft,g[2]=Et,g[3]=St,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=Nt,v[1]=Ft,v[2]=Et,v[3]=St,z.clearBufferiv(z.COLOR,0,v))}else Y|=z.COLOR_BUFFER_BIT}O&&(Y|=z.DEPTH_BUFFER_BIT),q&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),te.dispose(),Rt.dispose(),x.dispose(),G.dispose(),j.dispose(),fe.dispose(),U.dispose(),wt.dispose(),K.dispose(),K.removeEventListener("sessionstart",Zo),K.removeEventListener("sessionend",Qo),li.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const S=ge.autoReset,O=xt.enabled,q=xt.autoUpdate,Y=xt.needsUpdate,k=xt.type;ct(),ge.autoReset=S,xt.enabled=O,xt.autoUpdate=q,xt.needsUpdate=Y,xt.type=k}function ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function kt(S){const O=S.target;O.removeEventListener("dispose",kt),Ee(O)}function Ee(S){ke(S),Rt.remove(S)}function ke(S){const O=Rt.get(S).programs;O!==void 0&&(O.forEach(function(q){wt.releaseProgram(q)}),S.isShaderMaterial&&wt.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,q,Y,k,rt){O===null&&(O=Me);const dt=k.isMesh&&k.matrixWorld.determinant()<0,yt=tu(S,O,q,Y,k);Lt.setMaterial(Y,dt);let St=q.index,Nt=1;if(Y.wireframe===!0){if(St=tt.getWireframeAttribute(q),St===void 0)return;Nt=2}const Ft=q.drawRange,Et=q.attributes.position;let se=Ft.start*Nt,pe=(Ft.start+Ft.count)*Nt;rt!==null&&(se=Math.max(se,rt.start*Nt),pe=Math.min(pe,(rt.start+rt.count)*Nt)),St!==null?(se=Math.max(se,0),pe=Math.min(pe,St.count)):Et!=null&&(se=Math.max(se,0),pe=Math.min(pe,Et.count));const ve=pe-se;if(ve<0||ve===1/0)return;fe.setup(k,Y,yt,q,St);let Ye,oe=Mt;if(St!==null&&(Ye=Z.get(St),oe=jt,oe.setIndex(Ye)),k.isMesh)Y.wireframe===!0?(Lt.setLineWidth(Y.wireframeLinewidth*be()),oe.setMode(z.LINES)):oe.setMode(z.TRIANGLES);else if(k.isLine){let At=Y.linewidth;At===void 0&&(At=1),Lt.setLineWidth(At*be()),k.isLineSegments?oe.setMode(z.LINES):k.isLineLoop?oe.setMode(z.LINE_LOOP):oe.setMode(z.LINE_STRIP)}else k.isPoints?oe.setMode(z.POINTS):k.isSprite&&oe.setMode(z.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)oe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))oe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const At=k._multiDrawStarts,Un=k._multiDrawCounts,ce=k._multiDrawCount,ln=St?Z.get(St).bytesPerElement:1,Li=Rt.get(Y).currentProgram.getUniforms();for(let je=0;je<ce;je++)Li.setValue(z,"_gl_DrawID",je),oe.render(At[je]/ln,Un[je])}else if(k.isInstancedMesh)oe.renderInstances(se,ve,k.count);else if(q.isInstancedBufferGeometry){const At=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Un=Math.min(q.instanceCount,At);oe.renderInstances(se,ve,Un)}else oe.render(se,ve)};function le(S,O,q){S.transparent===!0&&S.side===Se&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,Ns(S,O,q),S.side=ci,S.needsUpdate=!0,Ns(S,O,q),S.side=Se):Ns(S,O,q)}this.compile=function(S,O,q=null){q===null&&(q=S),d=te.get(q),d.init(O),b.push(d),q.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),S!==q&&S.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const Y=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const rt=k.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){const yt=rt[dt];le(yt,q,k),Y.add(yt)}else le(rt,q,k),Y.add(rt)}),b.pop(),d=null,Y},this.compileAsync=function(S,O,q=null){const Y=this.compile(S,O,q);return new Promise(k=>{function rt(){if(Y.forEach(function(dt){Rt.get(dt).currentProgram.isReady()&&Y.delete(dt)}),Y.size===0){k(S);return}setTimeout(rt,10)}Jt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let cn=null;function In(S){cn&&cn(S)}function Zo(){li.stop()}function Qo(){li.start()}const li=new hh;li.setAnimationLoop(In),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(S){cn=S,K.setAnimationLoop(S),S===null?li.stop():li.start()},K.addEventListener("sessionstart",Zo),K.addEventListener("sessionend",Qo),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,O,L),d=te.get(S,b.length),d.init(O),b.push(d),Dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(Dt),bt=this.localClippingEnabled,at=st.init(this.clippingPlanes,bt),m=mt.get(S,E.length),m.init(),E.push(m),K.enabled===!0&&K.isPresenting===!0){const rt=_.xr.getDepthSensingMesh();rt!==null&&Br(rt,O,-1/0,_.sortObjects)}Br(S,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(it,J),Qt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Qt&&Pt.addToRenderList(m,S),this.info.render.frame++,at===!0&&st.beginShadows();const q=d.state.shadowsArray;xt.render(q,S,O),at===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,k=m.transmissive;if(d.setupLights(),O.isArrayCamera){const rt=O.cameras;if(k.length>0)for(let dt=0,yt=rt.length;dt<yt;dt++){const St=rt[dt];ec(Y,k,S,St)}Qt&&Pt.render(S);for(let dt=0,yt=rt.length;dt<yt;dt++){const St=rt[dt];tc(m,S,St,St.viewport)}}else k.length>0&&ec(Y,k,S,O),Qt&&Pt.render(S),tc(m,S,O);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(_,S,O),fe.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],at===!0&&st.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Br(S,O,q,Y){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){Y&&qt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Dt);const dt=j.update(S),yt=S.material;yt.visible&&m.push(S,dt,yt,q,qt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){const dt=j.update(S),yt=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),qt.copy(S.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),qt.copy(dt.boundingSphere.center)),qt.applyMatrix4(S.matrixWorld).applyMatrix4(Dt)),Array.isArray(yt)){const St=dt.groups;for(let Nt=0,Ft=St.length;Nt<Ft;Nt++){const Et=St[Nt],se=yt[Et.materialIndex];se&&se.visible&&m.push(S,dt,se,q,qt.z,Et)}}else yt.visible&&m.push(S,dt,yt,q,qt.z,null)}}const rt=S.children;for(let dt=0,yt=rt.length;dt<yt;dt++)Br(rt[dt],O,q,Y)}function tc(S,O,q,Y){const k=S.opaque,rt=S.transmissive,dt=S.transparent;d.setupLightsView(q),at===!0&&st.setGlobalState(_.clippingPlanes,q),Y&&Lt.viewport(C.copy(Y)),k.length>0&&Us(k,O,q),rt.length>0&&Us(rt,O,q),dt.length>0&&Us(dt,O,q),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ec(S,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new wi(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Rs:Wn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const rt=d.state.transmissionRenderTarget[Y.id],dt=Y.viewport||C;rt.setSize(dt.z,dt.w);const yt=_.getRenderTarget();_.setRenderTarget(rt),_.getClearColor(B),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear(),Qt&&Pt.render(q);const St=_.toneMapping;_.toneMapping=oi;const Nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),at===!0&&st.setGlobalState(_.clippingPlanes,Y),Us(S,q,Y),T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Et=0,se=O.length;Et<se;Et++){const pe=O[Et],ve=pe.object,Ye=pe.geometry,oe=pe.material,At=pe.group;if(oe.side===Se&&ve.layers.test(Y.layers)){const Un=oe.side;oe.side=qe,oe.needsUpdate=!0,nc(ve,q,Y,Ye,oe,At),oe.side=Un,oe.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt))}_.setRenderTarget(yt),_.setClearColor(B,I),Nt!==void 0&&(Y.viewport=Nt),_.toneMapping=St}function Us(S,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,rt=S.length;k<rt;k++){const dt=S[k],yt=dt.object,St=dt.geometry,Nt=Y===null?dt.material:Y,Ft=dt.group;yt.layers.test(q.layers)&&nc(yt,O,q,St,Nt,Ft)}}function nc(S,O,q,Y,k,rt){S.onBeforeRender(_,O,q,Y,k,rt),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(_,O,q,Y,S,rt),k.transparent===!0&&k.side===Se&&k.forceSinglePass===!1?(k.side=qe,k.needsUpdate=!0,_.renderBufferDirect(q,O,Y,k,S,rt),k.side=ci,k.needsUpdate=!0,_.renderBufferDirect(q,O,Y,k,S,rt),k.side=Se):_.renderBufferDirect(q,O,Y,k,S,rt),S.onAfterRender(_,O,q,Y,k,rt)}function Ns(S,O,q){O.isScene!==!0&&(O=Me);const Y=Rt.get(S),k=d.state.lights,rt=d.state.shadowsArray,dt=k.state.version,yt=wt.getParameters(S,k.state,rt,O,q),St=wt.getProgramCacheKey(yt);let Nt=Y.programs;Y.environment=S.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(S.isMeshStandardMaterial?G:x).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Nt===void 0&&(S.addEventListener("dispose",kt),Nt=new Map,Y.programs=Nt);let Ft=Nt.get(St);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===dt)return sc(S,yt),Ft}else yt.uniforms=wt.getUniforms(S),S.onBeforeCompile(yt,_),Ft=wt.acquireProgram(yt,St),Nt.set(St,Ft),Y.uniforms=yt.uniforms;const Et=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=st.uniform),sc(S,yt),Y.needsLights=nu(S),Y.lightsStateVersion=dt,Y.needsLights&&(Et.ambientLightColor.value=k.state.ambient,Et.lightProbe.value=k.state.probe,Et.directionalLights.value=k.state.directional,Et.directionalLightShadows.value=k.state.directionalShadow,Et.spotLights.value=k.state.spot,Et.spotLightShadows.value=k.state.spotShadow,Et.rectAreaLights.value=k.state.rectArea,Et.ltc_1.value=k.state.rectAreaLTC1,Et.ltc_2.value=k.state.rectAreaLTC2,Et.pointLights.value=k.state.point,Et.pointLightShadows.value=k.state.pointShadow,Et.hemisphereLights.value=k.state.hemi,Et.directionalShadowMap.value=k.state.directionalShadowMap,Et.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Et.spotShadowMap.value=k.state.spotShadowMap,Et.spotLightMatrix.value=k.state.spotLightMatrix,Et.spotLightMap.value=k.state.spotLightMap,Et.pointShadowMap.value=k.state.pointShadowMap,Et.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function ic(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=pr.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function sc(S,O){const q=Rt.get(S);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function tu(S,O,q,Y,k){O.isScene!==!0&&(O=Me),T.resetTextureUnits();const rt=O.fog,dt=Y.isMeshStandardMaterial?O.environment:null,yt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ss,St=(Y.isMeshStandardMaterial?G:x).get(Y.envMap||dt),Nt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ft=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Et=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,pe=!!q.morphAttributes.color;let ve=oi;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ve=_.toneMapping);const Ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=Ye!==void 0?Ye.length:0,At=Rt.get(Y),Un=d.state.lights;if(at===!0&&(bt===!0||S!==M)){const nn=S===M&&Y.id===y;st.setState(Y,S,nn)}let ce=!1;Y.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Un.state.version||At.outputColorSpace!==yt||k.isBatchedMesh&&At.batching===!1||!k.isBatchedMesh&&At.batching===!0||k.isBatchedMesh&&At.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&At.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&At.instancing===!1||!k.isInstancedMesh&&At.instancing===!0||k.isSkinnedMesh&&At.skinning===!1||!k.isSkinnedMesh&&At.skinning===!0||k.isInstancedMesh&&At.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&At.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&At.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&At.instancingMorph===!1&&k.morphTexture!==null||At.envMap!==St||Y.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Nt||At.vertexTangents!==Ft||At.morphTargets!==Et||At.morphNormals!==se||At.morphColors!==pe||At.toneMapping!==ve||At.morphTargetsCount!==oe)&&(ce=!0):(ce=!0,At.__version=Y.version);let ln=At.currentProgram;ce===!0&&(ln=Ns(Y,O,k));let Li=!1,je=!1,ls=!1;const _e=ln.getUniforms(),Sn=At.uniforms;if(Lt.useProgram(ln.program)&&(Li=!0,je=!0,ls=!0),Y.id!==y&&(y=Y.id,je=!0),Li||M!==S){Lt.buffers.depth.getReversed()?(lt.copy(S.projectionMatrix),Xu(lt),qu(lt),_e.setValue(z,"projectionMatrix",lt)):_e.setValue(z,"projectionMatrix",S.projectionMatrix),_e.setValue(z,"viewMatrix",S.matrixWorldInverse);const qn=_e.map.cameraPosition;qn!==void 0&&qn.setValue(z,Ot.setFromMatrixPosition(S.matrixWorld)),$t.logarithmicDepthBuffer&&_e.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_e.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,je=!0,ls=!0)}if(k.isSkinnedMesh){_e.setOptional(z,k,"bindMatrix"),_e.setOptional(z,k,"bindMatrixInverse");const nn=k.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),_e.setValue(z,"boneTexture",nn.boneTexture,T))}k.isBatchedMesh&&(_e.setOptional(z,k,"batchingTexture"),_e.setValue(z,"batchingTexture",k._matricesTexture,T),_e.setOptional(z,k,"batchingIdTexture"),_e.setValue(z,"batchingIdTexture",k._indirectTexture,T),_e.setOptional(z,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(z,"batchingColorTexture",k._colorsTexture,T));const hs=q.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Ut.update(k,q,ln),(je||At.receiveShadow!==k.receiveShadow)&&(At.receiveShadow=k.receiveShadow,_e.setValue(z,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Sn.envMap.value=St,Sn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Sn.envMapIntensity.value=O.environmentIntensity),je&&(_e.setValue(z,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&eu(Sn,ls),rt&&Y.fog===!0&&ht.refreshFogUniforms(Sn,rt),ht.refreshMaterialUniforms(Sn,Y,H,X,d.state.transmissionRenderTarget[S.id]),pr.upload(z,ic(At),Sn,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(pr.upload(z,ic(At),Sn,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_e.setValue(z,"center",k.center),_e.setValue(z,"modelViewMatrix",k.modelViewMatrix),_e.setValue(z,"normalMatrix",k.normalMatrix),_e.setValue(z,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const nn=Y.uniformsGroups;for(let qn=0,Yn=nn.length;qn<Yn;qn++){const rc=nn[qn];U.update(rc,ln),U.bind(rc,ln)}}return ln}function eu(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function nu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,O,q){Rt.get(S.texture).__webglTexture=O,Rt.get(S.depthTexture).__webglTexture=q;const Y=Rt.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,O){const q=Rt.get(S);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,q=0){L=S,w=O,A=q;let Y=!0,k=null,rt=!1,dt=!1;if(S){const St=Rt.get(S);if(St.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1;else if(St.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(St.__hasExternalTextures)T.rebindTextures(S,Rt.get(S.texture).__webglTexture,Rt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Et=S.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&Rt.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(dt=!0);const Ft=Rt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?k=Ft[O][q]:k=Ft[O],rt=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?k=Rt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[q]:k=Ft,C.copy(S.viewport),W.copy(S.scissor),F=S.scissorTest}else C.copy(et).multiplyScalar(H).floor(),W.copy(_t).multiplyScalar(H).floor(),F=Tt;if(Lt.bindFramebuffer(z.FRAMEBUFFER,k)&&Y&&Lt.drawBuffers(S,k),Lt.viewport(C),Lt.scissor(W),Lt.setScissorTest(F),rt){const St=Rt.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,St.__webglTexture,q)}else if(dt){const St=Rt.get(S.texture),Nt=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,q||0,Nt)}y=-1},this.readRenderTargetPixels=function(S,O,q,Y,k,rt,dt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){Lt.bindFramebuffer(z.FRAMEBUFFER,yt);try{const St=S.texture,Nt=St.format,Ft=St.type;if(!$t.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Y&&q>=0&&q<=S.height-k&&z.readPixels(O,q,Y,k,Ht.convert(Nt),Ht.convert(Ft),rt)}finally{const St=L!==null?Rt.get(L).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(S,O,q,Y,k,rt,dt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Rt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){const St=S.texture,Nt=St.format,Ft=St.type;if(!$t.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=S.width-Y&&q>=0&&q<=S.height-k){Lt.bindFramebuffer(z.FRAMEBUFFER,yt);const Et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.bufferData(z.PIXEL_PACK_BUFFER,rt.byteLength,z.STREAM_READ),z.readPixels(O,q,Y,k,Ht.convert(Nt),Ht.convert(Ft),0);const se=L!==null?Rt.get(L).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,se);const pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Wu(z,pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,rt),z.deleteBuffer(Et),z.deleteSync(pe),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,O=null,q=0){S.isTexture!==!0&&(Ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1]);const Y=Math.pow(2,-q),k=Math.floor(S.image.width*Y),rt=Math.floor(S.image.height*Y),dt=O!==null?O.x:0,yt=O!==null?O.y:0;T.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,dt,yt,k,rt),Lt.unbindTexture()},this.copyTextureToTexture=function(S,O,q=null,Y=null,k=0){S.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],O=arguments[2],k=arguments[3]||0,q=null);let rt,dt,yt,St,Nt,Ft,Et,se,pe;const ve=S.isCompressedTexture?S.mipmaps[k]:S.image;q!==null?(rt=q.max.x-q.min.x,dt=q.max.y-q.min.y,yt=q.isBox3?q.max.z-q.min.z:1,St=q.min.x,Nt=q.min.y,Ft=q.isBox3?q.min.z:0):(rt=ve.width,dt=ve.height,yt=ve.depth||1,St=0,Nt=0,Ft=0),Y!==null?(Et=Y.x,se=Y.y,pe=Y.z):(Et=0,se=0,pe=0);const Ye=Ht.convert(O.format),oe=Ht.convert(O.type);let At;O.isData3DTexture?(T.setTexture3D(O,0),At=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),At=z.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),At=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const Un=z.getParameter(z.UNPACK_ROW_LENGTH),ce=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ln=z.getParameter(z.UNPACK_SKIP_PIXELS),Li=z.getParameter(z.UNPACK_SKIP_ROWS),je=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ve.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ve.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,St),z.pixelStorei(z.UNPACK_SKIP_ROWS,Nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ft);const ls=S.isDataArrayTexture||S.isData3DTexture,_e=O.isDataArrayTexture||O.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Sn=Rt.get(S),hs=Rt.get(O),nn=Rt.get(Sn.__renderTarget),qn=Rt.get(hs.__renderTarget);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,nn.__webglFramebuffer),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Yn=0;Yn<yt;Yn++)ls&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.get(S).__webglTexture,k,Ft+Yn),S.isDepthTexture?(_e&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Rt.get(O).__webglTexture,k,pe+Yn),z.blitFramebuffer(St,Nt,rt,dt,Et,se,rt,dt,z.DEPTH_BUFFER_BIT,z.NEAREST)):_e?z.copyTexSubImage3D(At,k,Et,se,pe+Yn,St,Nt,rt,dt):z.copyTexSubImage2D(At,k,Et,se,pe+Yn,St,Nt,rt,dt);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _e?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(At,k,Et,se,pe,rt,dt,yt,Ye,oe,ve.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(At,k,Et,se,pe,rt,dt,yt,Ye,ve.data):z.texSubImage3D(At,k,Et,se,pe,rt,dt,yt,Ye,oe,ve):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,k,Et,se,rt,dt,Ye,oe,ve.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,k,Et,se,ve.width,ve.height,Ye,ve.data):z.texSubImage2D(z.TEXTURE_2D,k,Et,se,rt,dt,Ye,oe,ve);z.pixelStorei(z.UNPACK_ROW_LENGTH,Un),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ln),z.pixelStorei(z.UNPACK_SKIP_ROWS,Li),z.pixelStorei(z.UNPACK_SKIP_IMAGES,je),k===0&&O.generateMipmaps&&z.generateMipmap(At),Lt.unbindTexture()},this.copyTextureToTexture3D=function(S,O,q=null,Y=null,k=0){return S.isTexture!==!0&&(Ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],O=arguments[3],k=arguments[4]||0),Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,q,Y,k)},this.initRenderTarget=function(S){Rt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Lt.unbindTexture()},this.resetState=function(){w=0,A=0,L=null,Lt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class No{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new No(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ig extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sg extends as{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const il=new xe,vo=new nh,ir=new wr,sr=new P;class rg extends Re{constructor(t=new Ge,e=new sg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;il.copy(s).invert(),vo.copy(t.ray).applyMatrix4(il);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,v=p;g<v;g++){const m=l.getX(g);sr.fromBufferAttribute(u,m),sl(sr,m,c,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,v=p;g<v;g++)sr.fromBufferAttribute(u,g),sl(sr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sl(i,t,e,n,s,r,a){const o=vo.distanceSqToPoint(i);if(o<e){const c=new P;vo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ag extends Ve{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new pt:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,c=new xe;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ne(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ne(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Oo extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class og extends Oo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ko(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const rr=new P,va=new ko,_a=new ko,xa=new ko;class cg extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(rr.subVectors(s[0],s[1]).add(s[0]),l=rr);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(rr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),va.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),_a.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),xa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(va.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),_a.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),xa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(va.calc(c),_a.calc(c),xa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function lg(i,t){const e=1-i;return e*e*t}function hg(i,t){return 2*(1-i)*i*t}function ug(i,t){return i*i*t}function bs(i,t,e,n){return lg(i,t)+hg(i,e)+ug(i,n)}function dg(i,t){const e=1-i;return e*e*e*t}function fg(i,t){const e=1-i;return 3*e*e*i*t}function pg(i,t){return 3*(1-i)*i*i*t}function mg(i,t){return i*i*i*t}function Ts(i,t,e,n,s){return dg(i,t)+fg(i,e)+pg(i,n)+mg(i,s)}class vh extends Dn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gg extends Dn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(t,s.x,r.x,a.x,o.x),Ts(t,s.y,r.y,a.y,o.y),Ts(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _h extends Dn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vg extends Dn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xh extends Dn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bs(t,s.x,r.x,a.x),bs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends Dn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bs(t,s.x,r.x,a.x),bs(t,s.y,r.y,a.y),bs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mh extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(rl(o,c.x,l.x,h.x,u.x),rl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var al=Object.freeze({__proto__:null,ArcCurve:og,CatmullRomCurve3:cg,CubicBezierCurve:vh,CubicBezierCurve3:gg,EllipseCurve:Oo,LineCurve:_h,LineCurve3:vg,QuadraticBezierCurve:xh,QuadraticBezierCurve3:_g,SplineCurve:Mh});class xg extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new al[s.type]().fromJSON(s))}return this}}class Mg extends xg{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _h(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new xh(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new vh(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Oo(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Fo extends Ge{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new P,f=new pt,p=new P,g=new P,v=new P;let m=0,d=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let E=0;E<=e;E++){const b=n+E*h*s,_=Math.sin(b),N=Math.cos(b);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*_,u.y=t[w].y,u.z=t[w].x*N,a.push(u.x,u.y,u.z),f.x=E/e,f.y=w/(t.length-1),o.push(f.x,f.y);const A=c[3*w+0]*_,L=c[3*w+1],y=c[3*w+0]*N;l.push(A,L,y)}}for(let E=0;E<e;E++)for(let b=0;b<t.length-1;b++){const _=b+E*t.length,N=_,w=_+t.length,A=_+t.length+1,L=_+1;r.push(N,w,L),r.push(A,L,w)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("uv",new de(o,2)),this.setAttribute("normal",new de(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.points,t.segments,t.phiStart,t.phiLength)}}class zo extends Fo{constructor(t=1,e=1,n=4,s=8){const r=new Mg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new zo(t.radius,t.length,t.capSegments,t.radialSegments)}}class ns extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new pt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gn extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const v=[],m=n/2;let d=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(p,2));function E(){const _=new P,N=new P;let w=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const y=[],M=L/r,C=M*(e-t)+t;for(let W=0;W<=s;W++){const F=W/s,B=F*c+o,I=Math.sin(B),D=Math.cos(B);N.x=C*I,N.y=-M*n+m,N.z=C*D,u.push(N.x,N.y,N.z),_.set(I,A,D).normalize(),f.push(_.x,_.y,_.z),p.push(F,1-M),y.push(g++)}v.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const M=v[y][L],C=v[y+1][L],W=v[y+1][L+1],F=v[y][L+1];(t>0||y!==0)&&(h.push(M,C,F),w+=3),(e>0||y!==r-1)&&(h.push(C,W,F),w+=3)}l.addGroup(d,w,0),d+=w}function b(_){const N=g,w=new pt,A=new P;let L=0;const y=_===!0?t:e,M=_===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let W=0;W<=s;W++){const B=W/s*c+o,I=Math.cos(B),D=Math.sin(B);A.x=y*D,A.y=m*M,A.z=y*I,u.push(A.x,A.y,A.z),f.push(0,M,0),w.x=I*.5+.5,w.y=D*.5*M+.5,p.push(w.x,w.y),g++}for(let W=0;W<s;W++){const F=N+W,B=C+W;_===!0?h.push(B,B+1,F):h.push(B+1,B,F),L+=3}l.addGroup(d,L,_===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ie extends gn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ie(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bo extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const b=new P,_=new P,N=new P;for(let w=0;w<e.length;w+=3)p(e[w+0],b),p(e[w+1],_),p(e[w+2],N),c(b,_,N,E)}function c(E,b,_,N){const w=N+1,A=[];for(let L=0;L<=w;L++){A[L]=[];const y=E.clone().lerp(_,L/w),M=b.clone().lerp(_,L/w),C=w-L;for(let W=0;W<=C;W++)W===0&&L===w?A[L][W]=y:A[L][W]=y.clone().lerp(M,W/C)}for(let L=0;L<w;L++)for(let y=0;y<2*(w-L)-1;y++){const M=Math.floor(y/2);y%2===0?(f(A[L][M+1]),f(A[L+1][M]),f(A[L][M])):(f(A[L][M+1]),f(A[L+1][M+1]),f(A[L+1][M]))}}function l(E){const b=new P;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(E),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){const E=new P;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const _=m(E)/2/Math.PI+.5,N=d(E)/Math.PI+.5;a.push(_,1-N)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const b=a[E+0],_=a[E+2],N=a[E+4],w=Math.max(b,_,N),A=Math.min(b,_,N);w>.9&&A<.1&&(b<.2&&(a[E+0]+=1),_<.2&&(a[E+2]+=1),N<.2&&(a[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,b){const _=E*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function g(){const E=new P,b=new P,_=new P,N=new P,w=new pt,A=new pt,L=new pt;for(let y=0,M=0;y<r.length;y+=9,M+=6){E.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),_.set(r[y+6],r[y+7],r[y+8]),w.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),N.copy(E).add(b).add(_).divideScalar(3);const C=m(N);v(w,M+0,E,C),v(A,M+2,b,C),v(L,M+4,_,C)}}function v(E,b,_,N){N<0&&E.x===1&&(a[b]=E.x-1),_.x===0&&_.z===0&&(a[b]=N/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.vertices,t.indices,t.radius,t.details)}}class Vo extends Bo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vo(t.radius,t.detail)}}class Cr extends Ge{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,p=new P,g=new pt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let d=0;d<n;d++){const E=d+m,b=E,_=E+n+1,N=E+n+2,w=E+1;o.push(b,_,w),o.push(_,N,w)}}this.setIndex(o),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ri extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,f=new P,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const E=[],b=d/n;let _=0;d===0&&a===0?_=.5/e:d===n&&c===Math.PI&&(_=-.5/e);for(let N=0;N<=e;N++){const w=N/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(w+_,1-b),E.push(l++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const b=h[d][E+1],_=h[d][E],N=h[d+1][E],w=h[d+1][E+1];(d!==0||a>0)&&p.push(b,_,w),(d!==n-1||c<Math.PI)&&p.push(_,N,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ds extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new P,u=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;a.push(v,m,E),a.push(m,d,E)}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class si extends as{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ol={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class yg{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Sg=new yg;class Ho{constructor(t){this.manager=t!==void 0?t:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";class Eg extends Ho{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ol.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=As("img");function c(){h(),ol.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class bg extends Ho{constructor(t){super(t)}load(t,e,n,s){const r=new Ve,a=new Eg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Go extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Tg extends Go{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ma=new xe,cl=new P,ll=new P;class yh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;cl.setFromMatrixPosition(t.matrixWorld),e.position.copy(cl),ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ll),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hl=new xe,gs=new P,ya=new P;class wg extends yh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(gs),ya.copy(n.position),ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ya),n.updateMatrixWorld(),s.makeTranslation(-gs.x,-gs.y,-gs.z),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}}class Sh extends Go{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ag extends yh{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ul extends Go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=dl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);const Cg=`attribute float aSize; attribute float aAlpha; attribute vec3 aColor; uniform float uScale;
varying vec3 vC; varying float vA;
void main(){ vC=aColor; vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.);
  gl_PointSize=aSize*uScale/max(.1,-mv.z); gl_Position=projectionMatrix*mv; }`,Lg=`varying vec3 vC; varying float vA;
void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.12,d)*vA; if(a<.01) discard; gl_FragColor=vec4(vC,a); }`;class fl{constructor(t,e,n){this.max=e,this.cur=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.grow=new Float32Array(e),this.a0=new Float32Array(e);const s=this.geo=new Ge;s.setAttribute("position",new $e(this.pos,3)),s.setAttribute("aColor",new $e(this.col,3)),s.setAttribute("aSize",new $e(this.size,1)),s.setAttribute("aAlpha",new $e(this.alpha,1)),this.mat=new Xn({vertexShader:Cg,fragmentShader:Lg,uniforms:{uScale:{value:900}},transparent:!0,depthWrite:!1,blending:n?Ji:Ei}),this.points=new rg(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?11:10,t.add(this.points)}emit(t,e,n,s,r,a,o,c,l,h,u,f=0,p=0,g=0,v=1){const m=this.cur;this.cur=(m+1)%this.max;const d=m*3;this.pos[d]=t,this.pos[d+1]=e,this.pos[d+2]=n,this.vel[d]=s,this.vel[d+1]=r,this.vel[d+2]=a,this.col[d]=o,this.col[d+1]=c,this.col[d+2]=l,this.size[m]=h,this.life[m]=this.maxLife[m]=u,this.grav[m]=f,this.drag[m]=p,this.grow[m]=g,this.a0[m]=v}update(t){for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;const s=n*3,r=Math.max(0,1-this.drag[n]*t);this.vel[s]*=r,this.vel[s+1]=this.vel[s+1]*r-this.grav[n]*t,this.vel[s+2]*=r,this.pos[s]+=this.vel[s]*t,this.pos[s+1]+=this.vel[s+1]*t,this.pos[s+2]+=this.vel[s+2]*t,this.pos[s+1]<.02&&this.grav[n]>0&&(this.pos[s+1]=.02,this.vel[s+1]*=-.3,this.vel[s]*=.6,this.vel[s+2]*=.6),this.size[n]=Math.max(0,this.size[n]+this.grow[n]*t),this.alpha[n]=this.a0[n]*Math.max(0,Math.min(1,this.life[n]/this.maxLife[n]*1.6))}const e=this.geo.attributes;e.position.needsUpdate=e.aColor.needsUpdate=e.aSize.needsUpdate=e.aAlpha.needsUpdate=!0}}const Zt=()=>Math.random(),ye=()=>Math.random()*2-1,Pg=[[.45,.3,.1],[.3,.32,.1],[.5,.18,.08],[.35,.22,.1]];class Dg{constructor(t){this.scene=t,this.add=new fl(t,5e3,!0),this.norm=new fl(t,3500,!1),this.objs=[]}resize(t){this.add.mat.uniforms.uScale.value=this.norm.mat.uniforms.uScale.value=t*1.25}frac(t){return t*=this.mult??1,Math.floor(t)+(Zt()<t%1?1:0)}fire(t,e,n=.15,s=2,r=.5){for(let a=this.frac(e);a>0;a--){const o=Zt();this.add.emit(t.x+ye()*n,t.y+ye()*n*.5,t.z+ye()*n,ye()*.5,s*(.5+Zt()*.8),ye()*.5,.75,.22+o*.3,.03+o*.1,r*(.6+Zt()*.8),.3+Zt()*.45,-1.2,1,-r*.9)}}fireJet(t,e,n,s=14,r=.7){for(let a=this.frac(n);a>0;a--){const o=Zt(),c=s*(.6+Zt()*.6);this.add.emit(t.x,t.y,t.z,e.x*c+ye()*1.4,e.y*c+ye()*1.2+.5,e.z*c+ye()*1.4,.8,.25+o*.3,.04+o*.1,r*(.5+Zt()),.35+Zt()*.3,-2,.8,r*1.2)}}embers(t,e,n=.6,s=3){for(let r=this.frac(e);r>0;r--)this.add.emit(t.x+ye()*n,t.y+ye()*n,t.z+ye()*n,ye()*s,Zt()*s*1.2,ye()*s,1,.5,.12,.07+Zt()*.06,.6+Zt()*.9,2.5,.6,0)}sparks(t,e,n=[1,.8,.5]){for(let s=this.frac(e);s>0;s--)this.add.emit(t.x,t.y,t.z,ye()*6,ye()*5+1.5,ye()*6,n[0],n[1],n[2],.1+Zt()*.1,.18+Zt()*.25,9,1.5,-.15)}dust(t,e,n=0,s=0,r=3,a=[.32,.24,.18],o=.7){for(let c=this.frac(e);c>0;c--){const l=Zt()*6.283,h=Zt()*r*.6,u=.7+Zt()*.5;this.norm.emit(t.x+ye()*.2,t.y+Zt()*.25,t.z+ye()*.2,n*r*(.4+Zt()*.8)+Math.cos(l)*h,Zt()*1.6,s*r*(.4+Zt()*.8)+Math.sin(l)*h,a[0]*u,a[1]*u,a[2]*u,o*(.5+Zt()*.8),.5+Zt()*.7,.6,1.8,o*1.1,.4)}}smoke(t,e,n=.8){for(let s=this.frac(e);s>0;s--)this.norm.emit(t.x+ye()*.25,t.y+ye()*.5,t.z+ye()*.25,ye()*.8,.6+Zt()*1.2,ye()*.8,.13,.12,.12,n*(.5+Zt()*.7),.6+Zt()*.8,-.3,1,n,.45)}leaves(t,e,n=4,s=0){for(let r=this.frac(e);r>0;r--){const a=Zt()*6.283,o=n*(.3+Zt()*.8),c=Pg[Zt()*4|0],l=s?.3+Zt()*s:0;this.norm.emit(t.x+Math.cos(a)*l,t.y+Zt()*1.6,t.z+Math.sin(a)*l,-Math.sin(a)*o+Math.cos(a)*o*(s?.15:1),Zt()*3.5,Math.cos(a)*o+Math.sin(a)*o*(s?.15:1),c[0],c[1],c[2],.1+Zt()*.09,.7+Zt()*.9,3.5,.9,0,1)}}ring(t,e=14207144,n=5,s=.5,r=.06){const a=new ae(new Cr(.82,1,56),new He({color:e,transparent:!0,opacity:.9,side:Se,depthWrite:!1,blending:Ji,fog:!1}));a.rotation.x=-Math.PI/2,a.position.set(t.x,r,t.z),this.scene.add(a);let o=0;this.objs.push(c=>{o+=c;const l=Math.min(1,o/s),h=1-(1-l)*(1-l);if(a.scale.setScalar(.2+h*n),a.material.opacity=.9*(1-l),l>=1)return this.scene.remove(a),a.geometry.dispose(),a.material.dispose(),!0})}update(t){this.add.update(t),this.norm.update(t);for(let e=this.objs.length-1;e>=0;e--)this.objs[e](t)&&this.objs.splice(e,1)}}function Eh(){const i=new Oe;for(let t=0;t<7;t++){const e=new ae(new gn(.24+t*.13,.1+t*.13,.42,18,1,!0),new He({color:t%2?10126440:7232586,transparent:!0,opacity:.26,side:Se,depthWrite:!1}));e.position.y=.21+t*.4,e.userData.i=t,i.add(e)}return i.userData.spin=t=>{for(const e of i.children){const n=e.userData.i;e.rotation.y=t*(9+n*1.7),e.position.x=Math.sin(t*7+n*.9)*.05*n,e.position.z=Math.cos(t*6+n*.7)*.05*n}},i}const is=(i,t)=>new He({color:i,transparent:!0,opacity:t,side:Se,depthWrite:!1,blending:Ji,fog:!1});function bh(){const i=new Oe,t=new si({color:4862752,roughness:1}),e=new si({color:4155946,roughness:1}),n=new ae(new Cr(.72,.95,40),is(10215520,.8));n.rotation.x=-Math.PI/2,n.position.y=.05,i.add(n);const s=new ae(new ns(.72,32),is(6270522,.25));s.rotation.x=-Math.PI/2,s.position.y=.04,i.add(s);const r=[];for(let a=0;a<9;a++){const o=a/9*6.2832+Math.random()*.3,c=.35+Math.random()*.45,l=1+Math.random()*.8,h=new Oe;h.position.set(Math.sin(o)*c,0,Math.cos(o)*c),h.rotation.set(Math.cos(o)*-.38,0,Math.sin(o)*.38);const u=new ae(new Ie(.075+Math.random()*.05,l,6),a%3?t:e);u.position.y=l/2,u.castShadow=!0,h.add(u),h.userData.ph=Math.random()*6,i.add(h),r.push(h)}return i.userData.set=(a,o,c)=>{n.visible=s.visible=a>0,n.material.opacity=a*(.55+.35*Math.sin(c*28)),s.material.opacity=a*.28,n.scale.setScalar(1.25-.25*Math.min(1,a));for(const l of r)l.scale.set(1,Math.max(.001,o),1),l.visible=o>.01,l.rotation.y=Math.sin(c*9+l.userData.ph)*.25*o},i.userData.set(0,0,0),i}function Ig(){const i=new Oe,t=new Ri(.5,10,6);for(let e=0;e<3;e++){const n=new ae(t,new He({color:e===1?14221194:7327804,transparent:!0,opacity:.9,depthWrite:!1}));n.scale.set(1.25,.035,.34),n.rotation.z=e*2.094,i.add(n)}return i}function Ug(){const i=new Oe;for(let e=0;e<3;e++){const n=new ae(new Ds(1-e*.26,.07+e*.02,6,22,Math.PI),is(e===1?14264575:9063935,.75));n.position.z=e*.22,n.position.y=-.9+e*.1,i.add(n)}const t=new ae(new Ri(.2,10,8),is(15784191,.9));return t.scale.set(1,.5,.5),t.position.set(0,-.25,.45),i.add(t),i}function Ng(){const i=new Oe,t=is(8011007,.32),e=is(15918847,.85),n=new Ri(1,16,8,0,6.2832,0,Math.PI/2),s=o=>{const c=new Oe;c.position.z=-1.5;const l=new Oe;l.position.z=1.5,l.scale.y=o,c.add(l);const h=new ae(n,t);h.scale.set(1.15,.6,1.7),l.add(h);for(let u=0;u<9;u++){const f=(u/8-.5)*2.6,p=new ae(new Ie(.09,.42,5),e);p.position.set(Math.sin(f)*1.08,-.2,Math.cos(f)*1.6),p.rotation.x=Math.PI,l.add(p)}return i.add(c),c},r=s(1),a=s(-1);return i.userData.open=o=>{r.rotation.x=-o*.85,a.rotation.x=o*.85},i.userData.fade=o=>{t.opacity=.32*o,e.opacity=.85*o},i.userData.open(1),i}function Og(){const i=document.createElement("canvas");i.width=i.height=1024;const t=i.getContext("2d");t.fillStyle="#3a241b",t.fillRect(0,0,1024,1024);for(let n=0;n<90;n++){const s=Math.random()*1024,r=Math.random()*1024,a=70+Math.random()*150,o=50+Math.random()*110,c=30+Math.random()*30;t.fillStyle=`rgb(${c+28},${c+4},${c-8})`,t.globalAlpha=.55,t.beginPath(),t.moveTo(s,r),t.lineTo(s+a,r+Math.random()*20),t.lineTo(s+a-Math.random()*25,r+o),t.lineTo(s+Math.random()*20,r+o-Math.random()*20),t.closePath(),t.fill(),t.globalAlpha=.8,t.strokeStyle="#120a07",t.lineWidth=2+Math.random()*3,t.stroke()}t.globalAlpha=1;for(let n=0;n<9e3;n++){const s=Math.random()*60;t.fillStyle=`rgba(${s+20},${s},${s*.7},.25)`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2)}for(let n=0;n<40;n++){const s=Math.random()*1024,r=Math.random()*1024,a=20+Math.random()*60,o=t.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,n%3?"rgba(20,12,8,.6)":"rgba(40,50,18,.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(s-a,r-a,a*2,a*2)}const e=new ag(i);return e.colorSpace=Je,e.anisotropy=8,e}function kg(i,t,e){i.background=new Kt(1378823),i.fog=new No(2363658,.02);const n=new bg().load("./assets/arena.webp");n.colorSpace=Je,n.wrapS=gr,n.repeat.x=4;const s=new ae(new gn(70,70,62,64,1,!0),new He({map:n,side:qe,fog:!1,color:13619151}));s.position.y=5.5,i.add(s);const r=new ae(new ns(e+2.5,72),new si({map:Og(),roughness:.48,metalness:.12}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,i.add(r);const a=new ae(new ns(75,48),new si({color:1707786,roughness:.3,metalness:.3}));a.rotation.x=-Math.PI/2,a.position.y=-.04,i.add(a);const o=new si({color:2759959,roughness:.9}),c=new si({color:2824720,roughness:.95}),l=new si({color:1848084,roughness:.8,side:Se});for(let g=0;g<26;g++){const v=Math.random()*6.283,m=e+2.2+Math.random()*2.5,d=.25+Math.random()*.6,E=new ae(new Vo(d,0),o);E.position.set(Math.cos(v)*m,d*.3,Math.sin(v)*m),E.rotation.set(Math.random()*3,Math.random()*3,0),E.castShadow=!0,i.add(E)}for(let g=0;g<16;g++){const v=g/16*6.283+Math.random()*.2,m=e+2.6+Math.random()*1.5,d=new ae(new Ds(.9+Math.random()*.8,.09+Math.random()*.08,6,14,Math.PI),c);d.position.set(Math.cos(v)*m,-.1,Math.sin(v)*m),d.rotation.y=Math.random()*6,d.castShadow=!0,i.add(d);for(let E=0;E<5;E++){const b=new ae(new Ie(.16,1+Math.random()*.7,4),l);b.position.set(Math.cos(v+.25)*(m+.6),.4,Math.sin(v+.25)*(m+.6)),b.rotation.set(vs()*.9,Math.random()*6,vs()*.9),b.scale.z=.25,i.add(b)}}for(let g=0;g<7;g++){const v=g/7*6.283+.4,m=19+Math.random()*9,d=new ae(new gn(.9+Math.random()*.6,1.6+Math.random()*.8,26,9),c);d.position.set(Math.cos(v)*m,12.5,Math.sin(v)*m),d.rotation.z=vs()*.08,i.add(d);for(let E=0;E<5;E++){const b=new ae(new gn(.03,.03,5+Math.random()*8,4),l);b.position.set(Math.cos(v)*m+vs()*4,14-Math.random()*3,Math.sin(v)*m+vs()*4),i.add(b)}}i.add(new Tg(12166550,1840402,1.7));const h=new ul(16754026,2.3);h.position.set(-12,13,-9),h.castShadow=!0,h.shadow.mapSize.set(2048,2048);const u=h.shadow.camera;u.left=u.bottom=-15,u.right=u.top=15,u.far=50,h.shadow.bias=-5e-4,i.add(h);const f=new ul(8365272,1.7);f.position.set(10,6,12),i.add(f);const p=[];for(let g=0;g<5;g++){const v=g/5*6.283+.6,m=Math.cos(v)*(e+1.7),d=Math.sin(v)*(e+1.7),E=new ae(new gn(.07,.1,1.7,7),c);E.position.set(m,.85,d),E.castShadow=!0,i.add(E);const b=new ae(new gn(.24,.1,.22,9),o);b.position.set(m,1.78,d),i.add(b);const _={p:new P(m,1.95,d),light:null};g%2===0&&(_.light=new Sh(16742954,30,16,2),_.light.position.copy(_.p).setY(2.3),i.add(_.light)),p.push(_)}return{sun:h,torchLights:p.filter(g=>g.light).map(g=>g.light),update(g,v){for(const m of p)t.fire(m.p,60*g,.09,1.6,.5),m.light&&(m.light.intensity=16+Math.sin(v*17+m.p.x)*5+Math.random()*4);if(Math.random()<g*6){const m=Math.random()*6.283,d=Math.random()*14;t.embers({x:Math.cos(m)*d,y:.2,z:Math.sin(m)*d},1,.2,.5)}}}}const vs=()=>Math.random()*2-1,Wt=(i,t={})=>new si({color:i,roughness:.75,...t}),V=(i,t,e,n=0,s=0,r=0)=>{const a=new ae(t,e);return a.position.set(n,s,r),a.castShadow=!0,i.add(a),a},Xt=(i,t=0,e=0,n=0)=>{const s=new Oe;return s.position.set(t,e,n),i.add(s),s},Xe=(i,t)=>new zo(i,t,4,10),ee=(i,t,e,n=10,s=!1)=>new gn(i,t,e,n,1,s),Ct=i=>new Ri(i,14,10),ne=(i,t,e=6.2832)=>new Ds(i,t,6,18,e),Yt=Math.PI/2,Th=(i,t,e)=>i+(t-i)*e,_n=i=>i*i*(3-2*i),_o={y:0,lean:.12,twist:.45,roll:0,spine:.12,head:-.05,aLx:-1,aLz:.2,eL:-1.6,aRx:-.55,aRz:-.25,eR:-1.8,legX:-.1,knee:.3,sc:1,rate:16};function pl(i,t){const e={..._o},n=i.pk,s=i.phase;let r=0;const a=o=>Object.assign(e,o);switch(i.anim){case"idle":{const o=Math.abs(Math.sin(t*5));e.y=o*.07,e.knee=.5-o*.35;break}case"walk":{const o=Math.abs(Math.sin(t*10));a({y:o*.22,knee:.8-o*.7,lean:.24,legX:-.3+o*.25});break}case"block":a({aLx:-1.75,eL:-2.2,aRx:-1.75,eR:-2.2,aLz:-.2,aRz:.2,lean:-.05,spine:.32,knee:.7,y:-.06,head:.25});break;case"punchL":s===0?a({aLx:-.3,eL:-2.3,twist:.8}):s===1&&a({aLx:-1.55,eL:-.05,aLz:-.1,twist:-.25,lean:.3,rate:40});break;case"punchR":s===0?a({aRx:-.3,eR:-2.3,twist:0}):s===1&&a({aRx:-1.55,eR:-.05,aRz:.1,twist:1.1,lean:.32,rate:40});break;case"elbow":s===0?a({aLx:.5,eL:-1.2,twist:1,y:.1}):s===1&&a({aLx:-1.9,eL:-1.9,aLz:-.5,twist:-.5,lean:.45,y:.12,rate:40});break;case"spinkick":{const o=i.mt[0]+i.mt[1];r=Math.min(1,i.st/o)*6.2832,a(s===0?{y:.1+n*.4,knee:1.5-n,lean:-.3,legX:-.6,aLz:.9,aRz:-.9}:s===1?{y:.5,lean:-1.15,knee:0,legX:0,aLz:1.2,aRz:-1.2,aLx:0,aRx:0,eL:-.3,eR:-.3,rate:40}:{knee:.9-n*.5,y:0});break}case"blocklow":a({aLx:-1.5,eL:-2.1,aRx:-1.5,eR:-2.1,aLz:-.2,aRz:.2,lean:.25,spine:.5,knee:1.55,y:-.42,head:.3});break;case"hopPunch":s===0?a({y:.15+n*.3,knee:1.2,aRx:-.3,eR:-2.3,twist:0,lean:.3}):s===1&&a({y:.12,aRx:-1.6,eR:-.05,aRz:.1,twist:1.1,lean:.5,knee:.4,rate:40});break;case"axe":a(s===0?{y:.15+n*.45,lean:-.55,legX:-1.7,knee:0,aLz:.8,aRz:-.8,rate:26}:s===1?{y:.05,lean:.15,legX:-.5,knee:0,aLx:.4,aRx:.4,rate:44}:{knee:.8-n*.4});break;case"slap":s===0?a({aLx:-1.3,aLz:1.3,eL:-.4,twist:.95,lean:-.2,y:.12}):s===1&&a({aLx:-1.5,aLz:-.7,eL:-.05,twist:-.7,lean:-.15,rate:40});break;case"meialua":{const o=i.mt[0]+i.mt[1];r=-Math.min(1,i.st/o)*6.2832,a(s===0?{y:-.1,lean:.7,spine:.4,knee:1.1,aLx:-.6,aRx:-.6,eL:-.2,eR:-.2}:s===1?{y:.22,lean:-1.3,roll:.35,knee:0,legX:0,aLx:.9,aRx:.9,eL:-.15,eR:-.15,rate:40}:{knee:.9-n*.5});break}case"lowJab":a(s===0?{y:-.32,knee:1.5,lean:.35,aRx:-.2,eR:-2.2,twist:0}:s===1?{y:-.4,knee:1.6,lean:.7,spine:.35,aRx:-.9,eR:-.05,twist:1,rate:40}:{y:-.2*(1-n),knee:1.1});break;case"sweep":{const o=i.mt[0]+i.mt[1];r=Math.min(1,i.st/o)*6.2832,a(s===0?{y:-.3-n*.25,knee:1.5-n,lean:-.5-n*.5,aLx:.9,aRx:.9,eL:-.3,eR:-.3}:s===1?{y:-.6,lean:-1.42,knee:0,legX:0,aLx:1,aRx:1,aLz:.7,aRz:-.7,eL:-.2,eR:-.2,rate:40}:{y:-.4*(1-n),knee:1.2});break}case"dodge":{const o=Math.sin(n*Math.PI);i.dodgeSide?(r=i.dodgeSide*_n(n)*6.2832,a({y:o*.3,knee:1.5,legX:-.7,roll:-i.dodgeSide*.3*o,aLz:.9,aRz:-.9,rate:30})):a({y:o*.4,lean:-.35,knee:1.1,aLx:-1.6,aRx:-1.6,rate:30});break}case"grab":s===0?a({aLx:-1.4,aRx:-1.4,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,lean:.2,twist:0}):s===1&&a({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.7,eR:-.7,lean:.5,twist:0,rate:40});break;case"grabHold":a({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.9,eR:-.9,lean:.45,twist:0,y:Math.sin(t*40)*.015,rate:30});break;case"grabThrow":r=-_n(n)*3.1416,a({aLx:-2.3,aRx:-2.3,eL:-.2,eR:-.2,lean:-.25,twist:0,y:.15,rate:34});break;case"whirl":r=i.st*26,a({aLx:0,aRx:0,aLz:1.45,aRz:-1.45,eL:-.2,eR:-.2,y:.12,lean:0,twist:0,knee:.5}),s===2&&(r=i.st*26*(1-n*.5));break;case"voadora":s===0?a({y:-.28,knee:1.6,lean:.55,aLx:.9,aRx:.9,eL:-.4,eR:-.4,legX:-.9}):s===1?n<.4?(r=n/.4*6.2832,a({knee:1.9,legX:-1.2,lean:.2,aLz:.8,aRz:-.8,rate:30})):a({lean:-1.2,knee:0,legX:0,aLx:.3,aRx:.3,aLz:1.1,aRz:-1.1,eL:-.2,eR:-.2,twist:0,rate:30}):a({y:-.2*(1-n),knee:1.3*(1-n)+.3,lean:.5*(1-n)});break;case"dive":a({lean:-.75,knee:0,legX:0,aLx:.6,aRx:.6,aLz:1.2,aRz:-1.2,eL:-.2,eR:-.2,twist:0,rate:40});break;case"vanish":r=i.st*30,a({sc:0,rate:22,aLz:1,aRz:-1});break;case"gone":a({sc:0,rate:60});break;case"appear":r=(1-n)*8,a({sc:1,rate:22});break;case"superstart":r=i.st*14,a({y:.35,aLx:0,aRx:0,aLz:1.5,aRz:-1.5,eL:0,eR:0,knee:.9});break;case"hit":a({lean:-.4,head:-.5,spine:-.25,aLx:-.3,aRx:-.2,eL:-.8,eR:-.8,knee:.6,rate:35});break;case"air":a({lean:-1.05,head:-.3,knee:.7,legX:-.5,aLx:-2.2,aRx:-2.4,eL:-.3,eR:-.3,aLz:.5,aRz:-.5,y:.2});break;case"down":case"ko":a({y:-.84,lean:-1.52,knee:.25,legX:0,aLx:-.2,aRx:-.2,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,head:-.1,twist:0,spine:0,rate:22});break;case"getup":a({y:-.84*(1-_n(n)),lean:Th(-1.4,.4,_n(n)),knee:1.3*(1-n)+.3});break;case"win":{const o=Math.abs(Math.sin(t*6));a({y:o*.35,knee:.9-o*.8,aLx:-2.9,aRx:-2.9,aLz:.35,aRz:-.35,eL:-.2,eR:-.2,twist:0,lean:0,head:-.25});break}}return e.spin=r,e}function Fg(){const i=Wt(6042659,{roughness:.5}),t=Wt(4663323,{roughness:.55}),e=Wt(8197394,{roughness:.95,side:Se}),n=Wt(4853005,{roughness:1,side:Se}),s=Wt(1643027,{roughness:1,side:Se}),r=Wt(10256985,{roughness:1}),a=Wt(11897914,{metalness:.8,roughness:.35}),o=Wt(14537398,{roughness:.6}),c=Wt(8145442,{roughness:.45}),l=new He({color:16756800}),h=Wt(13483936,{roughness:1}),u=new Oe,f=Xt(u),p=Xt(f,0,1,0);V(p,Ct(.17),i,0,.02,0).scale.set(1.15,.85,.9),V(p,ee(.19,.35,.44,14,!0),e,0,-.17,0);for(let D=0;D<18;D++){const X=D/18*6.2832,H=.18+Math.random()*.36,it=.33;V(p,new we(.1,H,.012),[e,n,s][D%3],Math.sin(X)*it,-.36-H/2,Math.cos(X)*it).rotation.set(-.15,X,0,"YXZ")}V(p,new we(.3,.5,.012),s,-.24,-.3,.16).rotation.set(.1,-.9,.15),V(p,ne(.2,.035),r,0,.05,0).rotation.x=Yt,V(p,ne(.21,.025),n,0,0,0).rotation.x=Yt+.12;for(let D=0;D<6;D++)V(p,Ct(.022),o,Math.sin(D*.35-.9)*.23,.02-D%2*.05,Math.cos(D*.35-.9)*.23);V(p,Ct(.11),c,-.29,-.1,.04),V(p,Ct(.055),c,-.29,.03,.04),V(p,ee(.02,.025,.05),s,-.29,.09,.04),V(p,ee(.06,.06,.014,12),a,.09,-.14,.3).rotation.x=Yt,V(p,ee(.02,.04,.07,8),a,.17,-.2,.27);const v=Xt(p,0,-.05,0);V(v,Xe(.108,.3),i,0,-.23,0);const m=Xt(v,0,-.46,0);V(m,Ct(.095),t),V(m,Xe(.085,.28),i,0,-.2,0),V(m,ee(.097,.085,.24,10),r,0,-.27,0),V(m,ne(.088,.016),e,0,-.4,0).rotation.x=Yt,V(m,ne(.086,.012),a,0,-.43,0).rotation.x=Yt,V(m,new we(.13,.07,.27),t,0,-.455,.06);const d=Xt(p,0,.08,0);V(d,ee(.175,.16,.26,12),i,0,.12,0).scale.z=.8,V(d,Ct(.2),i,0,.37,0).scale.set(1.35,1,.82);for(const D of[1,-1])V(d,Ct(.085),i,D*.1,.4,.11).scale.set(1.1,.8,.6),V(d,Ct(.09),i,D*.28,.48,0);for(let D=0;D<3;D++)for(const X of[1,-1])V(d,Ct(.04),t,X*.055,.2-D*.07,.12).scale.z=.5;const E=V(d,ne(.15,.014),e,0,.5,.02);E.rotation.x=Yt+.35;const b=V(d,ne(.19,.012),o,0,.44,.05);b.rotation.x=Yt+.55;const _=V(d,ne(.12,.012),a,0,.54,.01);_.rotation.x=Yt+.2,V(d,Ct(.03),o,0,.31,.19),V(d,ne(.09,.012,2.6),h,.2,.42,.1).rotation.set(.3,.5,.2),V(d,ee(.058,.065,.1),i,0,.6,0);const w=Xt(d,0,.71,0);V(w,Ct(.115),i).scale.set(.9,1.08,.97),V(w,Ct(.06),i,0,-.07,.05).scale.set(1.1,.8,1);for(const D of[1,-1])V(w,Ct(.014),l,D*.042,.015,.1),V(w,ne(.026,.006),a,D*.108,-.06,0),V(w,new we(.05,.012,.02),s,D*.042,.04,.102).rotation.z=-D*.35;V(w,new Ie(.02,.06,5),s,0,-.13,.08).rotation.x=Math.PI;for(let D=0;D<10;D++){const X=D/10*6.28;Math.cos(X)>.5||V(w,Xe(.016,.05),s,Math.sin(X)*.1,-.01,Math.cos(X)*.1)}V(w,ee(.008,.008,.1,6),s,.035,-.065,.15).rotation.x=Yt,V(w,ee(.02,.014,.035,8),c,.035,-.05,.2),V(w,ee(.118,.125,.1,12),e,0,.075,0);const A=Xt(w,0,.11,0);A.rotation.set(-.35,0,-.45),V(A,ee(.07,.118,.17,10),e,0,.07,0);const L=Xt(A,0,.15,0);L.rotation.z=-.8,V(L,ee(.035,.07,.19,8),n,0,.08,0);const y=Xt(L,0,.17,0);y.rotation.z=-.9,V(y,ee(.012,.035,.2,6),e,0,.09,0),V(y,ne(.022,.006),a,0,.21,0);const M=D=>{const X=Xt(d,D*.31,.49,0);V(X,Xe(.072,.19),i,0,-.14,0),V(X,ne(.078,.013),e,0,-.12,0).rotation.x=Yt,V(X,ne(.076,.008),h,0,-.2,0).rotation.x=Yt;const H=Xt(X,0,-.3,0);return V(H,Xe(.058,.19),i,0,-.13,0),V(H,ee(.068,.06,.12),r,0,-.2,0),V(H,ne(.064,.012),e,0,-.13,0).rotation.x=Yt,V(H,Ct(.06),t,0,-.31,0),[X,H]},[C,W]=M(1),[F,B]=M(-1),I={..._o};return{root:u,cur:I,flameK:0,snap(D,X){Object.assign(I,pl(D,X))},update(D,X,H){const it=pl(D,H),J=Math.min(1,X*it.rate);for(const _t in _o)_t!=="rate"&&(I[_t]+=(it[_t]-I[_t])*J);f.position.y=I.y,f.rotation.y=it.spin+(D.spinExtra||0),f.scale.setScalar(Math.max(.001,I.sc)),u.visible=I.sc>.03,p.rotation.set(I.lean,I.twist,I.roll),d.rotation.set(I.spine,-I.twist*.6,0),w.rotation.set(I.head,-I.twist*.4,0),C.rotation.set(I.aLx,0,I.aLz),W.rotation.x=I.eL,F.rotation.set(I.aRx,0,I.aRz),B.rotation.x=I.eR,v.rotation.x=I.legX,m.rotation.x=I.knee;const et=Math.sin(H*4)*.15;L.rotation.z=-.8+et,y.rotation.z=-.9+et*1.5,L.rotation.x=Math.cos(H*3)*.2}}}const xo={y:0,pitch:0,roll:0,yaw:0,fl:0,fr:0,hl:0,hr:0,kfl:0,kfr:0,khl:0,khr:0,tail:.3,flame:1,rate:12};function ml(i,t){const e={...xo},n=i.pk,s=i.phase,r=o=>Object.assign(e,o),a=(o,c)=>{const l=Math.sin(t*o),h=Math.cos(t*o);r({fl:l*c,hr:l*c,fr:-l*c,hl:-l*c,kfl:Math.max(0,h)*c*1.6,khr:Math.max(0,h)*c*1.2,kfr:Math.max(0,-h)*c*1.6,khl:Math.max(0,-h)*c*1.2,y:Math.abs(h)*.04})};switch(i.anim){case"idle":{const o=Math.max(0,Math.sin(t*2.2));r({y:Math.sin(t*2)*.012,fl:-o*.45,kfl:o*1,tail:.3+Math.sin(t*3)*.2});break}case"walk":a(9,.45);break;case"block":r({pitch:.1,y:-.12,fl:-.35,fr:-.35,hl:.2,hr:.2,khl:.3,khr:.3,flame:.7});break;case"hoofL":s===0?r({pitch:-.28,fl:-.9,kfl:1.6}):s===1&&r({pitch:-.2,fl:-1.45,kfl:.05,rate:38});break;case"hoofR":s===0?r({pitch:-.28,fr:-.9,kfr:1.6}):s===1&&r({pitch:-.2,fr:-1.45,kfr:.05,rate:38});break;case"stomp":s===0?r({pitch:-.85,fl:-.5,fr:-.8,kfl:1.5,kfr:1.3,flame:1.6}):s===1&&r({pitch:.1,fl:-.45,fr:-.45,y:-.06,rate:40});break;case"blocklow":r({pitch:.22,y:-.32,fl:-.6,fr:-.6,kfl:1.3,kfr:1.3,hl:.3,hr:.3,khl:.7,khr:.7,flame:.6});break;case"check":s===0?r({pitch:.12,y:-.1,hl:.25,hr:.25,khl:.4,khr:.4}):s===1&&r({pitch:-.16,y:.06,fl:-.5,fr:-.5,kfl:1.3,kfr:1.3,rate:40});break;case"chargeAtk":s===0?r({pitch:.16,y:-.06,fl:-.6+Math.sin(t*30)*.5,kfl:1+Math.cos(t*30)*.4,flame:1.2+n*1.4,rate:30}):s===1?(a(24,.85),e.pitch=-.06,e.flame=2.8,e.rate=30):r({pitch:.08,flame:1.2});break;case"rear":s===0?r({pitch:-1*_n(Math.min(1,n*1.4)),fl:-.6,fr:-.9,kfl:1.5,kfr:1.3,flame:1.8}):s===1&&r({pitch:.16,y:-.1,fl:-.5,fr:-.5,rate:42});break;case"scrape":s===0?r({pitch:.14,y:-.08,fr:.2,kfr:1.3}):s===1&&r({pitch:.24,y:-.16,fr:-1.05,kfr:.1,rate:38});break;case"lowsweep":r(s===0?{pitch:.2,y:-.14,yaw:.55*n,fl:-.4,fr:-.4,kfl:.8,kfr:.8}:s===1?{pitch:.3,y:-.24,yaw:-.6,fl:-1.15,fr:-1.15,kfl:.05,kfr:.05,rate:34}:{pitch:.12,y:-.1*(1-n)});break;case"dodge":{const o=Math.sin(n*Math.PI);a(22,.6),e.roll=-i.dodgeSide*.28*o,e.pitch=i.dodgeSide?-.05:-.25*o,e.rate=28;break}case"grab":s===0?r({pitch:-.5,fl:-.9,fr:-.9,kfl:1.3,kfr:1.3}):s===1&&r({pitch:-.32,fl:-1.3,fr:-1.3,kfl:.3,kfr:.3,rate:40});break;case"grabHold":r({pitch:-.4,fl:-1.2,fr:-1.2,kfl:.6,kfr:.6,flame:1.6,y:Math.sin(t*40)*.012,rate:30});break;case"grabThrow":r({pitch:.22,y:-.08,fl:-.4,fr:-.4,flame:1.4,rate:40});break;case"coice":{e.yaw=i.kickTurn?Math.PI:0,s===0?r({pitch:.15,hl:-.5,hr:-.5,khl:1.3,khr:1.3,y:.05,rate:20}):s===1?r({pitch:.42,y:.28,hl:1.75,hr:1.75,fl:.3,fr:.3,rate:40,tail:1.4}):(r({rate:14}),n<.45&&(e.yaw=i.kickTurn?Math.PI:0));break}case"fire":r(s===0?{pitch:-.8*Math.sin(Math.min(1,n*1.3)*Math.PI)-.08,fl:-.5,fr:-.7,kfl:1.4,kfr:1.2,flame:1+n*2.2}:s===1?{pitch:.1,y:-.08,fl:-.4,fr:-.4,hl:.25,hr:.25,flame:3.2,rate:30}:{flame:1.4});break;case"dust":r({pitch:.12,fl:-.7+Math.sin(t*42)*.6,kfl:1+Math.cos(t*42)*.5,rate:40});break;case"superstart":case"superprep":r({pitch:-.1,fl:-.5+Math.sin(t*16)*.5,kfl:1.1,flame:1.5+n*2.5,y:Math.sin(t*40)*.012});break;case"charge":a(24,.85),e.pitch=-.06,e.flame=4,e.rate=30;break;case"hit":r({pitch:-.14,roll:.16,hl:.2,hr:.2,khl:.3,khr:.3,rate:30,flame:.8});break;case"air":r({roll:1.1,y:-.2,fl:-.6,fr:.4,hl:.5,hr:-.4,kfl:.8,khr:.8,flame:.7});break;case"down":case"ko":r({roll:1.45,y:-.92,fl:-.3,fr:.25,hl:.3,hr:-.2,kfl:.5,kfr:.9,khl:.4,khr:.9,tail:1,flame:i.anim==="ko"?.25:.6,rate:18});break;case"getup":r({roll:1.45*(1-_n(n)),y:-.92*(1-_n(n)),kfl:1-n,kfr:1-n});break;case"win":{const o=.5+.5*Math.sin(t*2.4);r({pitch:-.55-o*.35,fl:-.6+Math.sin(t*9)*.4,fr:-.6-Math.sin(t*9)*.4,kfl:1.2,kfr:1.2,flame:2.4});break}}return e}function zg(){const i=Wt(3350810,{roughness:.55}),t=Wt(1774096,{roughness:.7}),e=Wt(4207659,{metalness:.85,roughness:.4,emissive:16730640,emissiveIntensity:0}),n=Wt(7213840,{roughness:.95,side:Se}),s=Wt(4000523,{roughness:1,side:Se}),r=Wt(920073,{roughness:1}),a=Wt(2893346,{metalness:.5,roughness:.35}),o=Wt(7823407,{metalness:.85,roughness:.35}),c=Wt(6032653,{roughness:.4,emissive:3146756}),l=new He({color:16738840}),h=new Oe,u=Xt(h),f=Xt(u,0,1.38,-.75),p=V(f,Xe(.44,1),i,0,0,.72);p.rotation.x=Yt,p.scale.x=.95,V(f,Ct(.5),i,0,-.02,1.3).scale.set(1,1.06,1),V(f,Ct(.49),i,0,.03,.12);for(const I of[1,-1])V(f,Ct(.22),i,I*.3,-.12,1.38),V(f,Ct(.27),i,I*.27,-.1,.1),V(f,Ct(.16),t,I*.2,-.3,1.55);const g=Xt(f,0,.22,1.5);g.rotation.x=.62,V(g,ee(.21,.31,.62,14),i,0,.25,0),V(g,ne(.2,.04),t,0,.56,0).rotation.x=Yt,V(g,new ns(.19,16),l,0,.565,0).rotation.x=-Yt;for(let I=0;I<6;I++)V(g,new we(.03,.16,.1),r,0,.1+I*.08,-.26+I*.012).rotation.x=-.4;const v=new Re;v.position.set(0,.62,0),g.add(v);const m=new Sh(16741408,30,11,2);m.position.set(0,.9,0),g.add(m);const d=V(f,ne(.37,.05),e,0,.12,1.58);d.rotation.x=-.35,V(f,ne(.07,.015),e,0,-.3,1.82).rotation.y=Yt,V(f,ee(.035,.1,.16,10),o,0,-.47,1.82),V(f,ne(.475,.035),e,0,0,1.02),V(f,ne(.455,.035),e,0,0,.36);for(const I of[1,-1]){for(let D=0;D<9;D++)V(f,ne(.04,.012),e,I*.44,.22-Math.sin(D/8*Math.PI)*.1,.36+D*.083).rotation.set(D%2?0:Yt,Yt*(D%2),0);for(const D of[1.02,.36])V(f,ee(.006,.006,.16,4),e,I*.47,-.22,D),V(f,ee(.03,.08,.13,10),o,I*.47,-.35,D);for(let D=0;D<9;D++){const X=.2+Math.random()*.42;V(f,new we(.015,X,.085),D%3?n:s,I*(.46-Math.random()*.02),.02-X/2,.38+D*.078).rotation.z=I*.12}for(let D=0;D<4;D++)V(f,new we(.012,.028,.16+Math.random()*.16),c,I*.43,.05-D*.09,.02+Math.random()*.12).rotation.set(.5,I*.35,0);V(f,new we(.012,.03,.25),c,I*.47,.1,1.3).rotation.x=.6}const E=V(f,new gn(.475,.475,.74,14,1,!0,Yt,Math.PI),n,0,.02,.7);E.rotation.x=Yt;const b=(I,D)=>{const X=Xt(f,I,-.18,D);V(X,ee(.155,.1,.62,9),i,0,-.3,0);const H=Xt(X,0,-.6,0);return V(H,Ct(.1),t),V(H,ee(.085,.072,.5,8),t,0,-.25,0),V(H,ee(.075,.15,.22,9),r,0,-.44,0),V(H,ee(.115,.14,.12,10),a,0,-.56,0),[X,H]},[_,N]=b(.3,1.3),[w,A]=b(-.3,1.3),[L,y]=b(.3,.1),[M,C]=b(-.3,.1),W=Xt(f,0,.22,-.3);V(W,ee(.1,.02,1.15,7),r,0,-.55,0),V(W,ee(.06,.01,.9,5),r,.04,-.5,.03);const F={...xo},B=new P(0,2.4,0);return{root:h,cur:F,flameK:1,flamePos:B,flame:v,snap(I,D){Object.assign(F,ml(I,D))},update(I,D,X){const H=ml(I,X),it=Math.min(1,D*H.rate);for(const J in xo)J!=="rate"&&(F[J]+=(H[J]-F[J])*(J==="yaw"?Math.min(1,D*11):it));u.position.y=F.y,u.rotation.y=F.yaw+(I.spinExtra||0),f.rotation.set(F.pitch,0,F.roll),_.rotation.x=F.fl-F.pitch*.5,w.rotation.x=F.fr-F.pitch*.5,L.rotation.x=F.hl-F.pitch,M.rotation.x=F.hr-F.pitch,N.rotation.x=F.kfl,A.rotation.x=F.kfr,y.rotation.x=F.khl,C.rotation.x=F.khr,W.rotation.x=F.tail,this.flameK=F.flame,m.intensity=F.flame*(26+Math.sin(X*23)*5+Math.random()*5),e.emissiveIntensity=Math.max(0,(F.flame-1.3)*.9),v.getWorldPosition(B)}}}const Bg=["y","lean","twist","roll","spine","head","aLx","aLz","eL","aRx","aRz","eR","lLx","lLz","kL","lRx","lRz","kR","lc","jaw","tail","tailP","sc"];function wh(i,t,e,n){const s={...t};return{root:i.root,cur:s,flameK:0,snap(r,a){Object.assign(s,e(r,a))},update(r,a,o){const c=e(r,o),l=Math.min(1,a*c.rate);for(const u of Bg)s[u]+=(c[u]-s[u])*l;i.spinG.position.y=s.y,i.spinG.rotation.y=c.spin+(r.spinExtra||0),i.spinG.scale.setScalar(Math.max(.001,s.sc)),i.root.visible=s.sc>.03,i.hips.rotation.set(s.lean,s.twist,s.roll),i.spine.rotation.set(s.spine,-s.twist*.6,0),i.head.rotation.set(s.head,-s.twist*.4,0),i.shL.rotation.set(s.aLx,0,s.aLz),i.elL.rotation.x=s.eL,i.shR.rotation.set(s.aRx,0,s.aRz),i.elR.rotation.x=s.eR;const h=s.lean*s.lc;i.lL.rotation.set(s.lLx-h,0,s.lLz),i.kL.rotation.x=s.kL,i.lR.rotation.set(s.lRx-h,0,s.lRz),i.kR.rotation.x=s.kR,n&&n(s,r,o)}}}function Ah(i,t,e,n,s){const r=t.pk,a=t.phase;switch(t.anim){case"idle":{const o=Math.sin(e*s.breath);return n({y:i.y+o*.025,spine:i.spine+o*.03,aLx:i.aLx+o*.05,aRx:i.aRx-o*.05}),0}case"walk":{const o=Math.sin(e*s.gait),c=Math.cos(e*s.gait);return n({y:i.y+Math.abs(c)*.05,lLx:o*.55,lRx:-o*.55,kL:.25+Math.max(0,c)*.9,kR:.25+Math.max(0,-c)*.9,lean:i.lean+.1,tail:o*.35}),0}case"block":return n({aLx:-1.75,eL:-2.2,aRx:-1.75,eR:-2.2,aLz:-.2,aRz:.2,lean:-.02,spine:i.spine+.15,y:i.y-.06,kL:i.kL+.2,kR:i.kR+.2,head:i.head+.2}),0;case"blocklow":return n({aLx:-1.3,eL:-2,aRx:-1.3,eR:-2,aLz:-.2,aRz:.2,lean:.3,spine:i.spine+.3,y:-.42*s.h,lLx:-1,kL:1.9,lRx:.1,kR:1.6,head:i.head+.2,tailP:.05}),0;case"dodge":{const o=Math.sin(r*Math.PI);return t.dodgeSide?(n({y:-.2*o*s.h,lLx:-.9,kL:1.6,lRx:-.5,kR:1.5,roll:-t.dodgeSide*.3*o,aLz:.9,aRz:-.9,rate:30}),t.dodgeSide*_n(r)*6.2832*s.roll):(n({y:o*.15,lean:-.3,lLx:-.5,kL:1,lRx:.3,kR:.9,aLx:-1.6,aRx:-1.6,rate:30}),0)}case"grab":return a===0?n({aLx:-1.4,aRx:-1.4,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,lean:.2,twist:0,jaw:.5}):a===1&&n({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.7,eR:-.7,lean:.45,twist:0,lLx:-.5,lRx:.5,rate:40}),0;case"grabHold":return n({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.9,eR:-.9,lean:.4,twist:0,y:i.y+Math.sin(e*40)*.015,jaw:.7,rate:30}),0;case"grabThrow":return n({aLx:-2.3,aRx:-2.3,eL:-.2,eR:-.2,lean:-.2,twist:0,y:i.y+.1,rate:34}),-_n(r)*3.1416;case"vanish":return n({sc:0,rate:16,aLz:1,aRz:-1}),t.st*22;case"gone":return n({sc:0,rate:60}),0;case"appear":return n({sc:1,rate:22}),(1-r)*8;case"hit":return n({lean:-.35,head:i.head-.4,spine:i.spine-.3,aLx:-.3,aRx:-.2,eL:-.8,eR:-.8,kL:.7,kR:.5,jaw:.6,tail:.4,rate:35}),0;case"air":return n({lean:-1.05,lc:0,head:-.3,spine:0,lLx:-.6,kL:.9,lRx:-.2,kR:.5,aLx:-2.2,aRx:-2.4,eL:-.3,eR:-.3,aLz:.5,aRz:-.5,y:.2,jaw:.7,tailP:0}),0;case"down":case"ko":return n({y:-s.lie,lean:-1.52,lc:0,spine:0,head:-.05,lLx:-.1,kL:.2,lRx:.15,kR:.35,lLz:.15,lRz:-.15,aLx:-.2,aRx:-.2,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,twist:0,jaw:t.anim==="ko"?.5:.15,tailP:0,rate:22}),0;case"getup":{const o=_n(r);return n({y:-s.lie*(1-o),lean:Th(-1.4,.35,o),lc:o,lLx:-.8*(1-r),kL:1.4*(1-r)+.3,kR:1.2*(1-r)+.3}),0}}return null}const Rh={y:-.04,lean:.1,twist:.4,roll:0,spine:.1,head:-.02,aLx:-1,aLz:.2,eL:-1.6,aRx:-.55,aRz:-.25,eR:-1.8,lLx:-.3,lLz:.06,kL:.45,lRx:.3,lRz:-.06,kR:.5,lc:1,jaw:0,tail:0,tailP:0,sc:1,rate:16},Vg={breath:4.2,gait:10,h:1,lie:.84,roll:1};function Hg(i,t){const e={...Rh},n=i.pk,s=i.phase,r=l=>Object.assign(e,l),a=i.mt?i.mt[0]+i.mt[1]:1,o=()=>Math.min(1,i.st/a)*6.2832;let c=Ah(e,i,t,r,Vg);if(c===null)switch(c=0,i.anim){case"palm":s===0?r({aLx:-.3,eL:-2.3,twist:.8}):s===1&&r({aLx:-1.55,eL:-.05,aLz:-.1,twist:-.25,lean:.28,lLx:-.5,rate:40});break;case"elbowR":s===0?r({aRx:.4,eR:-2.2,twist:-.1}):s===1&&r({aRx:-1.7,eR:-2.1,aRz:.55,twist:1.15,lean:.35,lLx:-.5,rate:40});break;case"heel":s===0?r({lRx:-1.2,kR:1.7,lean:-.15,twist:.1}):s===1&&r({lRx:-1.45,kR:.05,lean:-.4,twist:0,aLz:.8,aRz:-.8,rate:42});break;case"spinkick":c=o(),r(s===0?{y:.02,lRx:-.7,kR:1.5,lean:-.2,aLz:.9,aRz:-.9}:s===1?{y:.08,lean:-.55,lRx:-1.6,kR:0,lLx:0,kL:.1,aLz:1.2,aRz:-1.2,aLx:0,aRx:0,eL:-.3,eR:-.3,rate:40}:{kR:.9-n*.4});break;case"stepIn":s===0?r({y:-.16,lean:.32,kL:.9,kR:.9,aRx:-.3,eR:-2.2,twist:0}):s===1&&r({y:-.1,lean:.5,aRx:-1.5,eR:-.35,aRz:.1,twist:1,lLx:-.7,kL:.7,lRx:.65,kR:.2,rate:40});break;case"axe":r(s===0?{y:.04,lean:-.35,lRx:-2.5,kR:0,twist:0,aLz:.8,aRz:-.8,rate:26}:s===1?{y:-.06,lean:.15,lRx:-.55,kR:0,twist:0,aLx:.4,aRx:.4,rate:44}:{kR:.8-n*.3});break;case"backKick":s===0?r({y:.06,lLx:-.9,kL:1.6,lean:-.25,twist:.1}):s===1&&r({y:.04,lLx:-1.75,kL:0,lean:-.5,twist:0,aLx:.3,aRx:.3,aLz:.7,aRz:-.7,rate:40});break;case"wheel":c=-o(),r(s===0?{y:-.14,lean:.55,spine:.35,kL:1,kR:1,aLx:-.6,aRx:-.6,eL:-.2,eR:-.2}:s===1?{y:.06,lean:-.7,roll:.35,lRx:-1.7,kR:0,lLx:0,kL:.1,aLx:0,aRx:0,aLz:1.45,aRz:-1.45,eL:-.1,eR:-.1,rate:40}:{kR:.9-n*.5});break;case"lowStep":r(s===0?{y:-.28,lLx:-.9,kL:1.7,lRx:-.6,kR:1.6,lean:.2}:s===1?{y:-.34,lLx:-.9,kL:1.9,lRx:-1.15,kR:.1,lean:-.05,twist:.1,aLz:.6,aRz:-.6,rate:40}:{y:-.2*(1-n),kL:1.1});break;case"sweep":c=o(),r(s===0?{y:-.3-n*.2,lLx:-1,kL:2,lRx:-.8,kR:1.2,lean:-.3,aLx:.9,aRx:.9,eL:-.3,eR:-.3}:s===1?{y:-.52,lLx:-1.1,kL:2.2,lRx:-1.5,kR:0,lean:-.75,aLx:1,aRx:1,aLz:.7,aRz:-.7,eL:-.2,eR:-.2,rate:40}:{y:-.4*(1-n),kL:1.3});break;case"blade":r(s===0?{aRx:-2.7,aRz:-.6,eR:-.3,twist:-.45,lean:-.1}:s===1?{aRx:-1,aRz:.75,eR:-.05,twist:1.05,lean:.3,lLx:-.5,rate:42}:{aRx:-.9,aRz:.5,eR:-.4,twist:.7*(1-n)+.4});break;case"roots":r(s===0?{aRx:-2.9,eR:-.15,aLx:-2.9,eL:-.15,y:.04,lean:-.12,twist:0}:{y:-.46*(s===1?1:1-n*.7),lean:.75,spine:.4,twist:0,lLx:-1,kL:1.9,lRx:.35,kR:1.6,aRx:-.95,eR:-.05,aLx:-.95,eL:-.05,rate:34});break;case"superstart":r({y:.12,aLx:0,aRx:0,aLz:1.5,aRz:-1.5,eL:0,eR:0,twist:0,kL:.8,kR:.8}),c=i.st*12;break;case"superprep":{const l=Math.abs(Math.sin(t*9));r({y:-.2+l*.12,lean:.1,twist:0,aLx:-2.9,aRx:-2.9,aLz:.4,aRz:-.4,eL:-.3-l*.4,eR:-.3-l*.4,lLx:-.6,kL:1.2,lRx:.2,kR:1,head:-.3});break}case"leap":r({lean:.2,twist:0,lLx:-1.3,kL:2,lRx:-1,kR:1.9,aLx:-2.8,aRx:-2.8,aLz:.5,aRz:-.5,eL:-.2,eR:-.2,rate:24});break;case"dive":r({lean:-.8,lc:0,twist:0,spine:.3,lRx:-.1,kR:0,lLx:-1.2,kL:1.9,aLx:.6,aRx:.6,aLz:1.2,aRz:-1.2,eL:-.2,eR:-.2,rate:40});break;case"win":{const l=Math.abs(Math.sin(t*5));r({y:l*.2,kL:.8-l*.6,kR:.8-l*.6,lLx:-.2,lRx:.2,aLx:-2.9,aRx:-.6,aLz:.3,aRz:-.9,eL:-.2,eR:-1.6,twist:0,lean:0,head:-.25});break}}return e.spin=c,e}function Gg(){const i=Wt(9723962,{roughness:.55}),t=Wt(7226664,{roughness:.6}),e=Wt(4160044,{roughness:.9,side:Se}),n=Wt(2379807,{roughness:1,side:Se}),s=Wt(8367674,{roughness:.9,side:Se}),r=Wt(5917222,{roughness:1}),a=Wt(14272410,{roughness:.6}),o=Wt(3038506,{roughness:1}),c=Wt(14829850,{roughness:.7,emissive:10496512,emissiveIntensity:.55}),l=Wt(16753198,{roughness:.6,emissive:12605952,emissiveIntensity:.7}),h=new He({color:10354522}),u=Wt(1840144,{roughness:1}),f=new Oe,p=Xt(f),g=Xt(p,0,1,0);V(g,Ct(.18),i,0,.02,0).scale.set(1.2,.85,.9),V(g,ne(.21,.03),r,0,.06,0).rotation.x=Yt;for(let B=0;B<16;B++){const I=B/16*6.2832,D=.26+Math.random()*.18,X=.25,H=V(g,new Ie(.075,D,4),[e,n,s][B%3],Math.sin(I)*X,-.06-D/2,Math.cos(I)*X);H.rotation.set(-.32,I,Math.PI,"YXZ"),H.scale.z=.25}for(let B=0;B<5;B++)V(g,Ct(.026),a,Math.sin(B*.4-.8)*.23,.04,Math.cos(B*.4-.8)*.23);const v=B=>{const I=Xt(g,B*.12,-.05,0);V(I,Xe(.095,.3),i,0,-.23,0);const D=Xt(I,0,-.46,0);V(D,Ct(.085),t),V(D,Xe(.075,.28),i,0,-.2,0),V(D,ne(.08,.014),r,0,-.28,0).rotation.x=Yt,V(D,ne(.078,.012),s,0,-.33,0).rotation.x=Yt,V(D,new we(.12,.07,.25),t,0,-.455,-.085),V(D,Ct(.052),t,0,-.445,.045).scale.set(1,.8,1);for(let X=-1;X<=1;X++)V(D,Ct(.03),i,X*.04,-.465,-.215).scale.set(1,.7,1.3);return[I,D]},[m,d]=v(1),[E,b]=v(-1),_=Xt(g,0,.08,0);V(_,ee(.17,.155,.26,12),i,0,.12,0).scale.z=.8,V(_,Ct(.19),i,0,.36,0).scale.set(1.3,1,.8);for(const B of[1,-1])V(_,Ct(.08),i,B*.1,.39,.1).scale.set(1.1,.8,.6),V(_,Ct(.085),i,B*.27,.47,0);for(let B=0;B<3;B++)for(const I of[1,-1])V(_,Ct(.038),t,I*.05,.2-B*.07,.115).scale.z=.5;const N=V(_,ne(.2,.016),r,0,.34,0);N.rotation.set(Yt-.2,.75,0),N.scale.set(1.1,.8,1);for(let B=0;B<9;B++){const I=(B/8-.5)*2.2;V(_,Ct(.024),a,Math.sin(I)*.15,.5-Math.cos(I)*.06,.05+Math.cos(I)*.11)}for(const B of[1,-1]){const I=V(_,new we(.03,.12,.01),o,B*.12,.3,.165);I.rotation.z=B*.5}V(_,ee(.055,.062,.1),i,0,.59,0);for(const B of[1,-1])for(let I=0;I<3;I++){const D=V(_,new Ie(.07,.22,4),[e,s,n][I],B*(.3+I*.015),.52,-.05+I*.05);D.rotation.set(0,0,-B*(1.9+I*.2)),D.scale.z=.3}const w=Xt(_,0,.7,0);V(w,Ct(.115),i).scale.set(.92,1.05,.97),V(w,Ct(.058),i,0,-.07,.05).scale.set(1.1,.8,1);for(const B of[1,-1])V(w,Ct(.016),h,B*.042,.012,.1),V(w,new we(.05,.012,.02),u,B*.042,.04,.102).rotation.z=-B*.3,V(w,new Ie(.03,.1,4),i,B*.118,.01,-.01).rotation.z=-B*1.2,V(w,new we(.035,.01,.01),o,B*.06,-.03,.1);V(w,new we(.05,.008,.01),u,0,-.085,.1);const A=[];for(let B=0;B<16;B++){const I=B/16*6.2832,D=Math.cos(I)<.3,X=.2+Math.random()*.16+(D?.1:0),H=.075,it=Xt(w,Math.sin(I)*H,.07,Math.cos(I)*H-.01);it.rotation.set(-.35-(D?.45:0)+Math.cos(I)*.5,0,-Math.sin(I)*.55),V(it,new Ie(.05,X,5),B%3?c:l,0,X/2,0),A.push(it)}for(let B=0;B<5;B++){const I=Xt(w,(B-2)*.035,.12,-.02);I.rotation.x=-.5-Math.random()*.3,V(I,new Ie(.045,.34,5),B%2?l:c,0,.17,0),A.push(I)}V(w,ne(.112,.014),r,0,.055,0).rotation.x=Yt-.1;const L=B=>{const I=Xt(_,B*.3,.48,0);V(I,Xe(.068,.19),i,0,-.14,0),V(I,ne(.074,.013),r,0,-.16,0).rotation.x=Yt;const D=Xt(I,0,-.3,0);return V(D,Xe(.055,.19),i,0,-.13,0),V(D,ee(.065,.058,.1),n,0,-.2,0),V(D,ne(.062,.01),s,0,-.14,0).rotation.x=Yt,V(D,Ct(.057),t,0,-.31,0),[I,D]},[y,M]=L(1),[C,W]=L(-1),F=A.map(B=>B.rotation.x);return wh({root:f,spinG:p,hips:g,spine:_,head:w,shL:y,elL:M,shR:C,elR:W,lL:m,kL:d,lR:E,kR:b},Rh,Hg,(B,I,D)=>{for(let X=0;X<A.length;X++)A[X].rotation.x=F[X]+Math.sin(D*7+X*1.7)*.1})}const Ch={y:-.03,lean:.18,twist:.25,roll:0,spine:.3,head:-.32,aLx:-.9,aLz:.35,eL:-1.3,aRx:-.7,aRz:-.35,eR:-1.4,lLx:-.25,lLz:.1,kL:.5,lRx:.25,lRz:-.1,kR:.55,lc:1,jaw:.06,tail:0,tailP:-.22,sc:1,rate:12},Wg={breath:2.6,gait:7.5,h:.8,lie:.68,roll:0};function Xg(i,t){const e={...Ch},n=i.pk,s=i.phase,r=l=>Object.assign(e,l),a=i.mt?i.mt[0]+i.mt[1]:1,o=()=>_n(Math.min(1,i.st/a))*6.2832;let c=Ah(e,i,t,r,Wg);if(i.anim==="idle"&&(e.tail=Math.sin(t*1.8)*.35),c===null)switch(c=0,i.anim){case"clawL":s===0?r({aLx:-2.3,aLz:.7,eL:-.9,twist:.7,jaw:.3}):s===1&&r({aLx:-1.35,aLz:-.5,eL:-.1,twist:-.35,lean:.32,rate:36});break;case"clawR":s===0?r({aRx:-2.3,aRz:-.7,eR:-.9,twist:-.3,jaw:.3}):s===1&&r({aRx:-1.35,aRz:.5,eR:-.1,twist:1,lean:.34,rate:36});break;case"tailSwing":c=o(),r(s===0?{lean:.3,y:-.12,tail:-.7,tailP:.1,aLz:.8,aRz:-.8}:s===1?{lean:.35,y:-.1,tail:.3,tailP:.22,aLz:1,aRz:-1,rate:30}:{tail:.5*(1-n)});break;case"tailWhip":c=-o(),r(s===0?{lean:.5,y:-.05,tail:.7,tailP:.5,spine:.5}:s===1?{lean:.6,spine:.5,tail:-.3,tailP:.75,aLz:.9,aRz:-.9,rate:30}:{tailP:.4*(1-n)});break;case"tailSweep":c=o(),r(s===0?{y:-.3,lean:.1,lLx:-.9,kL:1.7,lRx:-.3,kR:1.5,tail:-.7,tailP:-.25}:s===1?{y:-.36,lean:.05,lLx:-.9,kL:1.8,lRx:-.3,kR:1.6,tail:.3,tailP:-.3,aLz:.8,aRz:-.8,rate:30}:{y:-.25*(1-n),kL:1.1,kR:1});break;case"snap":s===0?r({lean:.05,spine:.1,head:-.1,jaw:.75,y:-.1,kL:.9,kR:.9}):s===1&&r({lean:.55,spine:.55,head:-.75,jaw:0,lLx:-.6,lRx:.6,aLx:.4,aRx:.4,rate:40});break;case"bite":r(s===0?{lean:-.1,spine:0,head:-.35-n*.2,jaw:1.05,aLx:-1.6,aRx:-1.6,aLz:.9,aRz:-.9,eL:-.5,eR:-.5,y:-.05}:s===1?{lean:.6,spine:.6,head:-.8,jaw:0,lLx:-.6,lRx:.6,aLx:-1.3,aRx:-1.3,aLz:-.2,aRz:.2,rate:44}:{jaw:.1,lean:.3});break;case"lowClaw":r(s===0?{y:-.3,lean:.35,lLx:-.9,kL:1.7,lRx:-.2,kR:1.5,aRx:-1.9,aRz:-.6,eR:-.8}:s===1?{y:-.36,lean:.6,spine:.5,lLx:-.9,kL:1.8,lRx:-.2,kR:1.6,aRx:-.75,aRz:.4,eR:-.05,twist:.9,rate:38}:{y:-.2*(1-n),kL:1.1});break;case"claws":if(s===0)r({aLx:-2.2,aRx:-2.2,aLz:.7,aRz:-.7,eL:-.9,eR:-.9,jaw:.5,lean:.1});else if(s===1){const l=Math.sin(n*3*Math.PI);r({lean:.4,aLx:-1.6-l*.6,aLz:.1-l*.5,eL:-.5+l*.4,aRx:-1.6+l*.6,aRz:-.1-l*.5,eR:-.5-l*.4,twist:.25+l*.8,jaw:.4,lLx:-.5,lRx:.5,rate:44})}break;case"cast":r(s===0?{aLx:-2.8,aRx:-2.8,aLz:.5-n*.4,aRz:-.5+n*.4,eL:-.4,eR:-.4,lean:-.08,spine:.05,head:-.5,twist:0,jaw:.5,y:.02}:s===1?{aLx:-1.5,aRx:-1.5,aLz:-.15,aRz:.15,eL:-.05,eR:-.05,lean:.4,twist:0,jaw:.9,lLx:-.5,lRx:.5,rate:40}:{aLx:-1.3,aRx:-1.3,eL:-.4,eR:-.4,twist:0,lean:.25});break;case"veil":r({aLx:-1.7,aRx:-1.7,aLz:s===0?-.5:.9,aRz:s===0?.5:-.9,eL:s===0?-1.9:-.3,eR:s===0?-1.9:-.3,twist:0,lean:0,spine:.12,head:-.2,rate:30});break;case"superstart":case"superprep":{const l=Math.sin(t*14);r({y:.02,twist:0,lean:-.05,spine:.05,head:-.55,aLx:-2.8,aRx:-2.8,aLz:.55+l*.12,aRz:-.55-l*.12,eL:-.5,eR:-.5,jaw:.8,tail:l*.4,tailP:.2});break}case"leap":case"dive":r({lean:-.5,lc:0,aLx:-2.2,aRx:-2.2,jaw:.9});break;case"win":{const l=Math.sin(t*3);r({twist:0,lean:-.05,spine:.08,head:-.6,aLx:-2.6,aRx:-2.6,aLz:.7,aRz:-.7,eL:-.6,eR:-.6,jaw:.5+l*.4,tail:l*.6,tailP:.3,y:Math.abs(l)*.05});break}}return e.spin=c,e}function qg(){const i=Wt(2786424,{roughness:.5}),t=Wt(1530716,{roughness:.6}),e=Wt(11128730,{roughness:.65}),n=Wt(1001299,{roughness:.9,side:Se}),s=Wt(601914,{roughness:1,side:Se}),r=Wt(13279804,{metalness:.8,roughness:.32}),a=Wt(15657695,{roughness:.85}),o=Wt(15920344,{roughness:.4}),c=Wt(15129792,{roughness:.4}),l=Wt(4854838,{roughness:.6}),h=new He({color:16765498}),u=new He({color:1182212}),f=new He({color:10116351}),p=new Oe,g=Xt(p),v=Xt(g,0,.86,0);V(v,Ct(.27),i,0,.02,0).scale.set(1.15,.9,1.05),V(v,ee(.3,.5,.52,16,!0),n,0,-.26,0),V(v,ne(.5,.022),r,0,-.52,0).rotation.x=Yt;for(let J=0;J<10;J++){const et=J/10*6.2832;V(v,new Ie(.09,.2,4),s,Math.sin(et)*.47,-.6,Math.cos(et)*.47).rotation.set(Math.PI,et,0)}V(v,ne(.3,.035),r,0,0,0).rotation.x=Yt,V(v,Ct(.05),f,0,0,.31).scale.z=.5;const m=J=>{const et=Xt(v,J*.17,-.04,0);V(et,Xe(.12,.2),i,0,-.18,0);const _t=Xt(et,0,-.38,0);V(_t,Ct(.1),t),V(_t,Xe(.085,.22),i,0,-.18,0),V(_t,new we(.2,.08,.34),t,0,-.4,.09);for(let Tt=-1;Tt<=1;Tt++)V(_t,new Ie(.028,.12,5),c,Tt*.065,-.41,.3).rotation.x=Yt;return[et,_t]},[d,E]=m(1),[b,_]=m(-1),N=[];let w=v;for(let J=0;J<3;J++){const et=Xt(w,0,J?0:-.04,J?-.48:-.2),_t=[.17,.12,.075][J],Tt=[.12,.075,.012][J];V(et,ee(_t,Tt,.5,9),J===1?t:i,0,0,-.25).rotation.x=Yt;for(let $=0;$<2;$++)V(et,new Ie(.04-J*.008,.12-J*.02,4),t,0,_t*.85-$*.03,-.12-$*.24);N.push(et),w=et}const A=Xt(v,0,.08,0);V(A,Ct(.26),i,0,.2,0).scale.set(1.2,1.1,.95),V(A,Ct(.2),e,0,.16,.1).scale.set(1,1.15,.7),V(A,Ct(.24),i,0,.46,-.02).scale.set(1.35,.85,.9),V(A,ee(.3,.31,.2,14,!0),n,0,.12,0).scale.z=.92;const L=V(A,ee(.2,.38,.2,12,!0),n,0,.52,-.02);L.scale.z=.85,V(A,ne(.37,.018),r,0,.43,-.02).rotation.x=Yt,V(A,ne(.2,.02),r,0,.62,-.02).rotation.x=Yt,V(A,Ct(.045),f,0,.5,.3).scale.z=.5;for(let J=0;J<4;J++)V(A,new Ie(.045,.12,4),t,0,.25+J*.11,-.25);const y=Xt(A,0,.7,.06);V(y,Ct(.19),i).scale.set(1.05,.82,1.1);const M=V(y,ee(.1,.17,.44,10),i,0,-.02,.34);M.rotation.x=Yt,M.scale.set(1.15,1,.5);for(const J of[1,-1]){V(y,Ct(.065),i,J*.11,.11,.06),V(y,Ct(.038),h,J*.125,.12,.1),V(y,Ct(.018),u,J*.135,.12,.132).scale.set(.5,1.2,.5),V(y,Ct(.022),t,J*.045,.035,.54),V(y,ne(.035,.008),r,J*.19,-.05,-.02);for(let et=0;et<5;et++)V(y,new Ie(.016,.055,4),o,J*(.15-et*.016),-.075,.2+et*.075).rotation.x=Math.PI}const C=Xt(y,0,-.09,.04),W=V(C,ee(.085,.15,.44,10),e,0,-.025,.28);W.rotation.x=Yt,W.scale.set(1.1,1,.32),V(C,new we(.2,.012,.36),l,0,.012,.26);for(const J of[1,-1])for(let et=0;et<4;et++)V(C,new Ie(.015,.05,4),o,J*(.135-et*.016),.03,.22+et*.08);const F=[];for(let J=0;J<11;J++){const et=(J/10-.5)*3.6,_t=.5+Math.random()*.3,Tt=Xt(y,Math.sin(et)*.17,.08,-.05-Math.cos(et)*.13);Tt.rotation.set(.25+Math.cos(et)*.25,0,Math.sin(et)*.28),V(Tt,Xe(.04,_t),a,0,-_t/2,0),F.push(Tt)}V(y,Ct(.17),a,0,.07,-.07).scale.set(1.05,.7,.95),V(y,ne(.15,.016),r,0,.12,-.02).rotation.x=Yt-.25,V(y,Ct(.03),f,0,.15,.12);const B=J=>{const et=Xt(A,J*.37,.48,0);V(et,Ct(.1),i),V(et,Xe(.078,.2),i,0,-.16,0);const _t=Xt(et,0,-.34,0);V(_t,Xe(.064,.2),t,0,-.14,0),V(_t,ne(.07,.014),r,0,-.22,0).rotation.x=Yt,V(_t,Ct(.075),i,0,-.32,0).scale.set(1,.9,.8);for(let Tt=-1;Tt<=1;Tt++)V(_t,new Ie(.02,.15,5),c,Tt*.045,-.43,.02).rotation.set(Math.PI+.25,0,Tt*.25);return[et,_t]},[I,D]=B(1),[X,H]=B(-1),it=F.map(J=>J.rotation.x);return wh({root:p,spinG:g,hips:v,spine:A,head:y,shL:I,elL:D,shR:X,elR:H,lL:d,kL:E,lR:b,kR:_},Ch,Xg,(J,et,_t)=>{C.rotation.x=J.jaw;for(let Tt=0;Tt<3;Tt++)N[Tt].rotation.y=J.tail*(.3+Tt*.15)+Math.sin(_t*2.2-Tt*.9)*.08,N[Tt].rotation.x=Tt?J.tailP*.45:J.tailP*.5+J.lean*(1-2*J.lc);for(let Tt=0;Tt<F.length;Tt++)F[Tt].rotation.x=it[Tt]-J.head*.6-J.spine*.5+Math.sin(_t*2+Tt)*.04})}const Wo={saci:{name:"SACI",hp:90,speed:5.4,radius:.45,turn:16,mass:1,hitY:1.3,tagY:2.3,super:"VOADORA DO REDEMOINHO",dodge:{t:.3,dist:2.4,ev:[0,.22],cd:.5}},mula:{name:"MULA SEM CABEÇA",hp:130,speed:3.3,radius:.95,turn:5.5,mass:3,hitY:1.4,tagY:2.9,super:"FOGO DA CONDENAÇÃO",dodge:{t:.42,dist:1.9,ev:[.04,.26],cd:.8}},curupira:{name:"CURUPIRA",hp:100,speed:5,radius:.45,turn:14,mass:1,hitY:1.25,tagY:2.35,super:"JULGAMENTO DA FLORESTA",dodge:{t:.3,dist:2.3,ev:[.02,.22],cd:.55}},cuca:{name:"CUCA",hp:115,speed:3.6,radius:.6,turn:8,mass:2,hitY:1.3,tagY:2.55,super:"ÚLTIMO PESADELO",dodge:{t:.4,dist:1.9,ev:[.05,.25],cd:.75}}},xn=["saci","mula","curupira","cuca"],Be={buffer:.28,tap:.2,perfect:.13,perfectStagger:.5,counterDmg:1.2,counterStun:.12,scale:.1,scaleMin:.35,maxHits:7,maxJuggle:2,breakWindow:.36,chip:.15},An={saci:{light1:{name:"Soco",h:"high",t:[.07,.08,.17],dmg:4,range:1.25,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"punchL",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Cruzado",h:"mid",t:[.06,.08,.19],dmg:4,range:1.3,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"punchR",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Cotovelada",h:"mid",t:[.1,.08,.26],dmg:6,range:1.35,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"elbow",next:{K:"heavy",L:"@"}},heavy:{name:"Giro de perna",h:"high",t:[.2,.12,.36],dmg:11,range:1.75,arc:1.3,stun:.5,bstun:.22,push:7,launch:4.8,anim:"spinkick",lunge:3,track:!0},fLight:{name:"Pulo-soco",h:"mid",t:[.16,.1,.2],dmg:6,range:1.45,arc:.9,stun:.38,bstun:.26,push:2,lunge:6,anim:"hopPunch",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Martelo",h:"mid",t:[.3,.1,.42],dmg:13,range:1.65,arc:.8,stun:.5,bstun:.22,push:3,launch:2.6,lunge:2.5,anim:"axe"},bLight:{name:"Tapa de recuo",h:"high",t:[.14,.08,.2],dmg:5,range:1.75,arc:.9,stun:.4,bstun:.2,push:3,lunge:-3.5,anim:"slap",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Meia-lua",h:"high",t:[.24,.14,.34],dmg:9,range:1.9,arc:2.4,stun:.45,bstun:.4,push:9,anim:"meialua",track:!0},dLight:{name:"Canelada",h:"low",t:[.1,.08,.2],dmg:3,range:1.3,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"lowJab",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira",h:"low",t:[.3,.12,.5],dmg:9,range:1.7,arc:1.6,stun:.5,bstun:.2,push:2,launch:2.2,anim:"sweep",track:!0},mid:{name:"Redemoinho",h:"mid",t:[.32,.06,.42],spawn:"tornado",anim:"whirl",cd:1.6},special:{name:"Voadora",h:"mid",custom:"voadora",cd:1.2},def:{name:"Sumiu no vento",custom:"teleport",cost:20,cd:3},grab:{name:"Derrubada",grab:!0,t:[.2,.05,.42],range:.75,dmg:12,launch:3,push:5,anim:"grab"}},mula:{light1:{name:"Patada",h:"high",t:[.14,.1,.26],dmg:6,range:2.1,arc:.7,stun:.4,bstun:.3,push:3.5,anim:"hoofL",next:{J:"light2",K:"heavy",fJ:"fLight",dK:"dHeavy"}},light2:{name:"Patada dupla",h:"mid",t:[.13,.1,.3],dmg:7,range:2.1,arc:.7,stun:.46,bstun:.3,push:4.5,lunge:2.5,anim:"hoofR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy"}},heavy:{name:"Pisão",h:"mid",t:[.38,.12,.48],dmg:16,range:2.35,arc:.8,stun:.6,bstun:.26,push:5,launch:3.6,anim:"stomp",lunge:1.5,quake:!0},fLight:{name:"Peitada",h:"mid",t:[.16,.12,.28],dmg:7,range:2.2,arc:.8,stun:.42,bstun:.34,push:4,lunge:5,anim:"check",next:{J:"light2",fK:"fHeavy",dK:"dHeavy"}},fHeavy:{name:"Investida",h:"mid",t:[.38,.36,.55],dmg:15,range:2.3,arc:.7,stun:.5,bstun:.28,push:8,launch:4.2,rush:9,armor:!0,anim:"chargeAtk"},bLight:{name:"Patada de recuo",h:"high",t:[.18,.1,.26],dmg:6,range:2.35,arc:.7,stun:.42,bstun:.3,push:4,lunge:-3,anim:"hoofR",next:{K:"heavy"}},bHeavy:{name:"Empinada",h:"mid",t:[.5,.12,.55],dmg:19,range:2.5,arc:.8,stun:.6,bstun:.4,push:6,launch:5.2,lunge:-1.5,chip:.3,anim:"rear",quake:!0},dLight:{name:"Raspada",h:"low",t:[.16,.1,.26],dmg:5,range:2.1,arc:.8,stun:.58,bstun:.22,push:2,anim:"scrape",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida",h:"low",t:[.4,.14,.56],dmg:12,range:2.4,arc:1.5,stun:.5,bstun:.22,push:3,launch:2.2,anim:"lowsweep",track:!0},mid:{name:"Coice",h:"mid",t:[.3,.1,.46],dmg:14,range:2.5,arc:1,stun:.5,bstun:.24,push:10,launch:4.6,anim:"coice",kick:!0,cd:.8},special:{name:"Inferno",h:"mid",t:[.65,.55,.5],anim:"fire",beam:!0,cd:2.5},def:{name:"Poeira",h:"mid",t:[.12,.2,.36],dmg:3,range:3.6,arc:1,stun:.45,bstun:.24,push:12,anim:"dust",dustFx:!0,cd:2.5,track:!0},grab:{name:"Prensada",grab:!0,t:[.28,.05,.5],range:.8,dmg:16,launch:3.4,push:7,anim:"grab"}},curupira:{light1:{name:"Palma",h:"high",t:[.08,.08,.18],dmg:4,range:1.5,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"palm",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Cotovelo",h:"mid",t:[.07,.08,.2],dmg:6,range:1.5,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"elbowR",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Calcanhar torto",h:"mid",t:[.11,.09,.26],dmg:7,range:1.6,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"heel",next:{K:"heavy",L:"@"}},heavy:{name:"Chute rodado",h:"high",t:[.21,.12,.36],dmg:12,range:1.85,arc:1.3,stun:.5,bstun:.22,push:7,launch:4.6,anim:"spinkick",lunge:2.5,track:!0},fLight:{name:"Passo torto",h:"mid",t:[.15,.1,.2],dmg:5,range:1.5,arc:.9,stun:.38,bstun:.26,push:2,lunge:6.5,anim:"stepIn",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Machado de calcanhar",h:"mid",t:[.3,.1,.42],dmg:13,range:1.7,arc:.8,stun:.5,bstun:.22,push:3,launch:2.6,lunge:2.5,anim:"axe"},bLight:{name:"Coice de recuo",h:"high",t:[.15,.08,.22],dmg:5,range:1.9,arc:.9,stun:.4,bstun:.2,push:3.5,lunge:-3.5,anim:"backKick",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Giro da mata",h:"high",t:[.25,.14,.34],dmg:9,range:2,arc:2.4,stun:.45,bstun:.4,push:9,anim:"wheel",track:!0},dLight:{name:"Pisada torta",h:"low",t:[.1,.08,.2],dmg:3,range:1.4,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"lowStep",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira de calcanhar",h:"low",t:[.3,.12,.5],dmg:10,range:1.85,arc:1.6,stun:.5,bstun:.2,push:2,launch:2.2,anim:"sweep",track:!0},mid:{name:"Lâmina da Mata",h:"mid",t:[.22,.06,.36],spawn:"leaf",anim:"blade",cd:1.5},special:{name:"Ira da Floresta",h:"low",t:[.34,.1,.52],spawn:"roots",anim:"roots",cd:5},def:{name:"Caminho Invertido",custom:"invert",cd:3.5},grab:{name:"Laço de cipó",grab:!0,t:[.2,.05,.42],range:.8,dmg:12,launch:3,push:5,anim:"grab"}},cuca:{light1:{name:"Garra",h:"high",t:[.13,.1,.26],dmg:5,range:1.9,arc:.8,stun:.4,bstun:.28,push:3,anim:"clawL",next:{J:"light2",K:"heavy",fJ:"fLight",dK:"dHeavy"}},light2:{name:"Garra cruzada",h:"mid",t:[.13,.1,.3],dmg:6,range:1.95,arc:.8,stun:.5,bstun:.28,push:3.5,lunge:2,anim:"clawR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy"}},heavy:{name:"Rabada",h:"mid",t:[.34,.14,.46],dmg:14,range:2.6,arc:1.6,stun:.55,bstun:.26,push:8,launch:3.8,anim:"tailSwing",track:!0},fLight:{name:"Bote",h:"mid",t:[.2,.1,.3],dmg:7,range:2,arc:.8,stun:.42,bstun:.3,push:3,lunge:5,anim:"snap",next:{J:"light2",fK:"fHeavy",dK:"dHeavy"}},fHeavy:{name:"Mordida",h:"mid",t:[.44,.12,.52],dmg:17,range:2.1,arc:.8,stun:.6,bstun:.26,push:5,launch:3,lunge:1.5,chip:.3,anim:"bite"},bLight:{name:"Arranhão de recuo",h:"high",t:[.18,.1,.26],dmg:5,range:2.2,arc:.8,stun:.42,bstun:.28,push:4,lunge:-3,anim:"clawR",next:{K:"heavy"}},bHeavy:{name:"Chicote de cauda",h:"high",t:[.36,.16,.42],dmg:11,range:2.9,arc:2.6,stun:.5,bstun:.4,push:10,anim:"tailWhip",track:!0},dLight:{name:"Garra rasteira",h:"low",t:[.16,.1,.26],dmg:4,range:1.9,arc:.8,stun:.58,bstun:.2,push:2,anim:"lowClaw",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida de cauda",h:"low",t:[.42,.14,.54],dmg:11,range:2.7,arc:1.7,stun:.5,bstun:.22,push:3,launch:2.2,anim:"tailSweep",track:!0},mid:{name:"Garras da Bruxa",h:"mid",t:[.2,.36,.32],dmg:4,multi:3,range:1.95,arc:.9,stun:.46,bstun:.2,push:6,rush:2.2,anim:"claws",cd:1.8},special:{name:"Pesadelo da Cuca",h:"mid",t:[.5,.08,.5],spawn:"wave",anim:"cast",cd:3.8},def:{name:"Véu do Pesadelo",t:[.12,.06,.22],veil:2.5,anim:"veil",cd:6},grab:{name:"Abraço da bruxa",grab:!0,t:[.26,.05,.5],range:.85,dmg:15,launch:3.2,push:6,anim:"grab"}}},Lh={tornado:{name:"Redemoinho",dmg:8,stun:.6,push:4,speed:7.5,life:1.5,hitR:.75},leaf:{name:"Lâmina da Mata",h:"mid",dmg:8,stun:.46,bstun:.2,push:3,speed:13,life:.5,hitR:.6},wave:{name:"Pesadelo da Cuca",h:"mid",dmg:7,stun:.5,bstun:.24,push:4,speed:6.5,life:1.45,hitR:.95,daze:1.6},roots:{name:"Ira da Floresta",h:"low",dmg:5,stun:.35,bstun:.2,push:0,root:.85,warn:.42,reach:7.5,hitR:.95}};for(const i in An)for(const t in An[i])An[i][t].id=t;const Mo={J:{n:"light1",f:"fLight",b:"bLight",d:"dLight"},K:{n:"heavy",f:"fHeavy",b:"bHeavy",d:"dHeavy"},L:{n:"mid"},I:{n:"special"},O:{n:"def"}},yo={saci:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · termina arremessando"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"martelo fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a canelada acertar"},{name:"Pressão",cmd:["fJ","J","bK"],note:"seguro: a meia-lua afasta"}],mula:[{name:"Dano e arremesso",cmd:["J","J","L"],note:"garantido · coice arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","K"],note:"pisão fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a raspada acertar"},{name:"Pressão",cmd:["fJ","J","fK"],note:"investida aguenta um golpe fraco · muito punível"}],curupira:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · termina arremessando"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"machado fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a pisada acertar"},{name:"Pressão",cmd:["fJ","J","bK"],note:"seguro: o giro afasta e abre espaço para as raízes"}],cuca:[{name:"Dano e arremesso",cmd:["J","J","K"],note:"garantido · rabada arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida de cauda não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"mordida fura a defesa baixa · muito punível"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a garra rasteira acertar"},{name:"Pressão",cmd:["fJ","J","L"],note:"termina nas Garras da Bruxa · três golpes"}]},Ph={high:"ALTO",mid:"MÉDIO",low:"BAIXO"},gi=i=>Math.round(i*60);function Dh(i){if(!i.t)return null;const[t,e,n]=i.t,s={startup:gi(t),active:gi(e),recovery:gi(n)};return i.dmg&&i.multi?(s.onHit=gi((i.stun||.35)-n),s.onBlock=gi((i.bstun||.22)-n)):i.dmg&&(s.onHit=i.launch?"derruba":gi((i.stun||.35)-e-n),s.onBlock=gi((i.bstun||.22)-e-n)),s}const Yg={saci:Fg,mula:zg,curupira:Gg,cuca:qg},fn=()=>new P,Kg=i=>{for(;i>Math.PI;)i-=6.2832;for(;i<-Math.PI;)i+=6.2832;return i};class gl{constructor(t,e){this.kind=t,this.game=e,Object.assign(this,Wo[t]),this.maxHp=this.hp,this.model=Yg[t](),e.scene.add(this.model.root),this.pos=fn(),this.vel=fn(),this.dir=fn(),this.wins=0,this.energy=0,this.reset(0,0,0)}dispose(){this.game.scene.remove(this.model.root),this.model.root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}reset(t,e,n){this.pos.set(t,0,e),this.vel.set(0,0,0),this.y=0,this.vy=0,this.facing=n,this.hp=this.maxHp,this.cd={mid:0,special:0,def:0,dodge:0},this.invuln=0,this.burn=0,this.buf=null,this.bufT=0,this.combo=0,this.comboT=0,this.comboDmg=0,this.taken=0,this.juggle=0,this.chain=[],this.wasBlock=!1,this.blockAt=9,this.pgCd=0,this.pgOk=!1,this.dodgeSide=0,this.veil=0,this.daze=0,this.dazeImm=0,this.rootImm=0,this.spinExtra=0,this.kickTurn=!1,this.lastMove=fn(),this.setState("idle"),this.updDir()}updDir(){this.dir.set(Math.sin(this.facing),0,Math.cos(this.facing))}dist(){return Math.hypot(this.opp.pos.x-this.pos.x,this.opp.pos.z-this.pos.z)}gain(t){this.energy=Math.min(100,this.energy+t)}setState(t){this.state=t,this.st=0,this.blocking=!1,this.guard="high",this.phase=0,this.pk=0,t==="idle"?(this.anim="idle",this.kickTurn=!1,this.taken=0,this.juggle=0,this.opp&&this.opp.comboT>.7&&(this.opp.comboT=.7)):t!=="attack"&&t!=="custom"&&(this.anim=t==="blockstun"?"block":t)}faceOpp(t=99){const e=Math.atan2(this.opp.pos.x-this.pos.x,this.opp.pos.z-this.pos.z),n=Kg(e-this.facing);this.facing+=Math.max(-t,Math.min(t,n)),this.updDir()}inReach(t,e,n=this.dir){const s=this.opp,r=s.pos.x-this.pos.x,a=s.pos.z-this.pos.z,o=Math.hypot(r,a);return o>t+s.radius||s.y>1.9?!1:o<this.radius+s.radius+.15||Math.acos(Math.max(-1,Math.min(1,(r*n.x+a*n.z)/(o||1))))<=e}cmdDir(t){if(t.dir)return t.dir;const e=t.move;if(!e||e.lengthSq()<.09)return"n";const n=this.opp,s=n.pos.x-this.pos.x,r=n.pos.z-this.pos.z,a=(e.x*s+e.z*r)/(Math.hypot(s,r)||1);return t.down?"d":a>.5?"f":a<-.5?"b":"s"}tryStart(t){const e=t.b;if(this.lastDir=t.dir||"n",e==="SP")return this.energy<100?!1:(this.startSuper(),!0);if(e==="EV")return this.startDodge(t.v);if(e==="GR")return this.chain=[],this.startMove("grab"),!0;const n=Mo[e];if(!n)return!1;const s=n[t.dir]||n.n,r=An[this.kind][s];if(!r||r.cd&&this.cd[s]>0||r.cost&&this.energy<r.cost)return!1;if(r.cost&&(this.energy-=r.cost),r.cd&&(this.cd[s]=r.cd),this.state!=="attack"&&(this.chain=[]),r.custom&&this.game.log({t:"move",f:this,m:r}),r.custom==="voadora")this.setState("custom"),this.anim="voadora",this.cphase=0,this.connected=!1,this.custom=this.updVoadora;else if(r.custom==="invert"){const a=this.opp,o=fn().subVectors(a.pos,this.pos).setY(0).normalize(),c=fn().set(-o.z,0,o.x),l=this.lastMove.lengthSq()>.09?this.lastMove.clone().setY(0).normalize():o.clone().negate(),h=l.dot(c);this.game.spawnGhost(this),this.setState("custom"),this.anim="dodge",this.dodgeSide=Math.abs(h)>.5?Math.sign(h):0,this.dv=l,this.cphase=0,this.custom=this.updInvert,a.state==="attack"&&(this.gain(12),this.game.tag(this,"ENGANOU!")),this.game.fx.leaves(this.pos,22,3,.5)}else r.custom==="teleport"?(this.setState("custom"),this.anim="vanish",this.cphase=0,this.custom=this.updTeleport,this.opp.state==="attack"&&this.gain(12),this.game.fx.leaves(this.pos,26,3,.5),this.game.fx.smoke({x:this.pos.x,y:1,z:this.pos.z},10)):this.startMove(s);return!0}startMove(t){const e=An[this.kind][t];if(this.setState("attack"),this.move=e,this.mt=e.t.slice(),this.anim=e.anim,this.hitDone=!1,this.fired=!1,this.connected=!1,this.kickBack=!1,this.kickTurn=!1,this.chain.push(t),this.armorUsed=!1,this.hitN=0,e.kick){const n=this.opp,s=(n.pos.x-this.pos.x)*this.dir.x+(n.pos.z-this.pos.z)*this.dir.z<0;this.kickBack=s,this.kickTurn=!s,s&&(this.mt=[.14,.1,.34])}e.h==="low"&&this.game.fx.ring(this.pos,8376575,1.5,.28),this.game.log({t:"move",f:this,m:e})}startDodge(t){const e=this.dodge;if(this.cd.dodge>0)return!1;const n=this.opp,s=fn().subVectors(n.pos,this.pos).setY(0).normalize(),r=fn().set(-s.z,0,s.x),a=t?t.dot(s):0,o=t?t.dot(r):0,c=Math.abs(o)>=Math.abs(a)||a>0;return this.setState("dodge"),this.cd.dodge=e.t+e.cd,this.dodgeSide=c?o<0?-1:1:0,this.dv=c?r.multiplyScalar(this.dodgeSide).addScaledVector(s,.25).normalize():s.negate(),this.game.fx.dust(this.pos,8,0,0,2),this.game.log({t:"move",f:this,m:{name:c?"Esquiva lateral":"Recuo",t:[e.ev[0],e.ev[1]-e.ev[0],e.t-e.ev[1]]}}),!0}updDodge(t){const e=this.dodge;this.pk=Math.min(1,this.st/e.t),this.pos.addScaledVector(this.dv,e.dist/e.t*(1.6-1.2*this.pk)*t),this.faceOpp(this.turn*1.5*t),this.st>=e.t&&this.setState("idle")}tryGrab(){const t=this.opp,e=this.move;return this.dist()>this.radius+t.radius+e.range||t.y>.1||t.invuln>0||t.state!=="idle"&&t.state!=="blockstun"&&t.state!=="rooted"?!1:(this.setState("custom"),this.anim="grabHold",this.cphase=0,this.custom=this.updThrow,this.throwM=e,t.setState("grabbed"),t.anim="hit",t.vel.set(0,0,0),this.game.tag(t,"AGARRADO!"),this.game.log({t:"hit",att:this,def:t,m:e,res:"grab",dmg:0}),!0)}updThrow(){const t=this.opp,e=this.throwM,n=this.st;this.cphase===0?(this.pk=Math.min(1,n/Be.breakWindow),t.state!=="grabbed"?(this.cphase=1,this.st=0):n>=Be.breakWindow&&(this.cphase=1,this.st=0,this.anim="grabThrow",t.receive(this,{name:e.name,dmg:e.dmg,launch:e.launch,push:e.push,thrown:!0,unblockable:!0}))):(this.pk=Math.min(1,n/.35),n>=.35&&this.setState("idle"))}breakGrab(){const t=this.opp,e=fn().subVectors(this.pos,t.pos).setY(0).normalize();this.setState("hit"),this.stun=.28,this.vel.copy(e).multiplyScalar(5),t.setState("hit"),t.stun=.3,t.vel.copy(e).multiplyScalar(-5),this.buf=null,this.game.tag(this,"SOLTOU!"),this.game.fx.sparks({x:(this.pos.x+t.pos.x)/2,y:1.2,z:(this.pos.z+t.pos.z)/2},10,[.7,.8,1]),this.game.log({t:"hit",att:t,def:this,m:t.throwM,res:"break",dmg:0})}update(t,e){const n=this.game.fx;for(const o in this.cd)this.cd[o]=Math.max(0,this.cd[o]-t);this.invuln-=t,this.pgCd-=t,this.veil-=t,this.daze-=t,this.dazeImm-=t,this.rootImm-=t,(this.comboT-=t)<=0&&(this.combo=0,this.comboDmg=0),this.burn>0&&(this.burn-=t,this.hp=Math.max(1,this.hp-2*t),n.fire({x:this.pos.x,y:this.y+.9+Math.random()*.5,z:this.pos.z},40*t,this.radius*.7,1.5,.4));const s=this.cmdDir(e);switch(e.block?(this.wasBlock||(this.blockAt=0,this.tapBlocked=!1,this.pgOk=this.pgCd<=0,this.pgCd=.45),this.blockAt+=t):this.wasBlock&&this.blockAt<=Be.tap&&s!=="n"&&!this.tapBlocked&&(this.buf=s==="f"?{b:"GR"}:{b:"EV",v:e.move.clone()},this.bufT=Be.buffer+t),this.wasBlock=!!e.block,e.press==="EV"||e.press==="GR"?(this.buf={b:e.press,v:e.move&&e.move.clone()},this.bufT=Be.buffer):e.press?(this.buf={b:e.press,dir:s},this.bufT=Be.buffer):(this.bufT-=t)<=0&&(this.buf=null),e.move&&this.lastMove.copy(e.move),this.st+=t,this.state){case"idle":this.free(t,e);break;case"attack":this.updAttack(t);break;case"custom":this.custom(t);break;case"dodge":this.updDodge(t);break;case"grabbed":e.press==="J"||e.press==="K"?this.breakGrab():(this.opp.state!=="custom"||this.st>Be.breakWindow+.3)&&this.setState("idle");break;case"rooted":this.st>=this.stun&&this.setState("idle");break;case"hit":case"blockstun":this.pos.addScaledVector(this.vel,t),this.vel.multiplyScalar(Math.max(0,1-9*t)),this.state==="blockstun"&&(this.blocking=!!e.block,this.guard=e.down?"low":"high",this.anim=this.guard==="low"?"blocklow":"block"),this.st>=this.stun&&this.setState("idle");break;case"air":this.y+=this.vy*t,this.vy-=22*t,this.pos.addScaledVector(this.vel,t),this.spinExtra=0,this.y<=0&&(this.y=0,n.dust(this.pos,16,0,0,3),this.game.shake=Math.max(this.game.shake,.15+this.mass*.12),this.setState(this.hp<=0?"ko":"down"),this.invuln=1.2);break;case"down":this.st>.7&&this.setState("getup");break;case"getup":this.pk=this.st/.38,this.st>.38&&this.setState("idle");break}const r=Math.hypot(this.pos.x,this.pos.z),a=this.game.R-this.radius*.5;r>a&&(this.pos.x*=a/r,this.pos.z*=a/r)}free(t,e){if(this.faceOpp(this.turn*t),this.buf&&this.tryStart(this.buf)){this.buf=null;return}if(e.block){this.blocking=!0,this.guard=e.down?"low":"high",this.anim=this.guard==="low"?"blocklow":"block";return}this.blocking=!1;const n=e.move;if(n&&n.lengthSq()>.01){const s=n.dot(this.dir)<-.3?.72:1;this.pos.addScaledVector(n,this.speed*s*t),this.anim="walk"}else this.anim="idle"}updAttack(t){const e=this.move,[n,s,r]=this.mt,a=this.st,o=this.opp,c=this.game,l=c.fx;if(a<n)this.phase=0,this.pk=a/n,e.track&&this.faceOpp(this.turn*t),e.lunge&&(e.lunge<0||this.dist()>this.radius+o.radius+.4)&&this.pos.addScaledVector(this.dir,e.lunge*t);else if(a<n+s){if(this.phase=1,this.pk=(a-n)/s,!this.fired){if(this.fired=!0,e.spawn&&c.spawn(e.spawn,this),e.veil&&(this.veil=e.veil,l.ring(this.pos,8380624,2.4,.35),c.tag(this,"VÉU")),e.dustFx){const h=this.pos.clone().addScaledVector(this.dir,1.2);l.dust(h,70,this.dir.x,this.dir.z,11,[.36,.25,.17],.9),l.sparks({x:h.x,y:.2,z:h.z},14,[.6,.45,.3])}if(e.quake){const h=this.pos.clone().addScaledVector(this.dir,1.5);l.dust(h,30,0,0,4),l.ring(h,13148272,2.6,.35),c.shake=Math.max(c.shake,.4)}}if(e.rush&&this.dist()>this.radius+o.radius+.3&&(this.pos.addScaledVector(this.dir,e.rush*t),l.dust(this.pos,40*t,-this.dir.x,-this.dir.z,3)),e.beam)this.beam(t);else if(e.grab)this.hitDone||(this.hitDone=!0,this.tryGrab());else if(e.multi){const h=Math.min(e.multi,Math.floor(this.pk*e.multi)+1);h>this.hitN&&(this.hitN=h,this.inReach(e.range,e.arc)&&(this.hitDone=!0,o.receive(this,h<e.multi?{...e,push:1.2}:e)!=="miss"&&(this.connected=!0)))}else if(e.dmg&&!this.hitDone){const h=this.kickBack?this.dir.clone().negate():this.dir;this.inReach(e.range,e.arc,h)&&(this.hitDone=!0,this.connected=o.receive(this,e)!=="miss")}}else if(a<n+s+r){this.phase=2,this.pk=(a-n-s)/r,e.dmg&&!this.hitDone&&(this.hitDone=!0,c.log({t:"hit",att:this,def:o,m:e,res:"whiff",dmg:0}));const h=this.buf;if(h&&e.next&&this.connected){const u=e.next[(h.dir==="f"||h.dir==="b"||h.dir==="d"?h.dir:"")+h.b]||e.next[h.b];u==="@"?(this.faceOpp(.5),this.tryStart({b:h.b,dir:"n"})&&(this.buf=null)):u&&!this.chain.includes(u)&&(this.buf=null,this.faceOpp(.5),this.startMove(u))}}else this.setState("idle")}beam(t){const e=this.opp,n=this.game,s=this.model.flamePos,r=fn().set(this.dir.x,-.16,this.dir.z).normalize();if(n.fx.fireJet(s,r,420*t,15,.8),n.fx.embers(s,60*t,.2,5),n.shake=Math.max(n.shake,.15),this.hitDone)return;const a=e.pos.x-this.pos.x,o=e.pos.z-this.pos.z,c=a*this.dir.x+o*this.dir.z,l=Math.abs(a*this.dir.z-o*this.dir.x);c>.4&&c<7.5+e.radius&&l<.65+e.radius*.6&&e.y<2.2&&e.receive(this,{name:"Inferno",dmg:20,stun:.6,push:6,burn:3,chip:.3,fire:!0})!=="miss"&&(this.hitDone=!0)}updVoadora(t){const e=this.opp,n=this.st,s=this.game.fx;if(this.cphase===0)this.phase=0,this.pk=n/.35,n>=.35&&(this.cphase=1,this.st=0,this.from=this.pos.clone(),this.to=this.pos.clone().addScaledVector(this.dir,Math.max(1.2,Math.min(this.dist(),7.5)-.3)),this.hitDone=!1,s.dust(this.pos,18,0,0,3),s.leaves(this.pos,10,3));else if(this.cphase===1){const r=Math.min(1,n/.6);this.phase=1,this.pk=r,this.pos.lerpVectors(this.from,this.to,r),this.y=9.6*r*(1-r),s.norm.emit(this.pos.x,this.y+.8,this.pos.z,0,0,0,.6,.55,.45,.5,.25,0,0,.5,.25),!this.hitDone&&r>.5&&this.dist()<1.25+e.radius&&e.y<2&&(this.hitDone=!0,e.receive(this,{name:"Voadora",dmg:20,stun:.6,push:10,launch:6.5})!=="miss"&&(this.connected=!0,s.ring(e.pos,15259832,4.5,.45),s.dust(e.pos,40,0,0,6),s.leaves(e.pos,30,6))),r>=1&&(this.y=0,this.cphase=2,this.st=0,this.rec=this.connected?.25:.8,s.dust(this.pos,14,0,0,2.5))}else this.phase=2,this.pk=Math.min(1,n/this.rec),n>=this.rec&&this.setState("idle")}updInvert(t){const n=this.st;this.cphase===0?(this.invuln=.05,this.pk=Math.min(1,n/.26),this.pos.addScaledVector(this.dv,3.4/.26*(1.5-this.pk)*t),this.faceOpp(this.turn*2*t),this.game.fx.leaves(this.pos,60*t,2,.3),n>=.26&&(this.cphase=1,this.st=0)):n>=.1&&this.setState("idle")}updTeleport(){const t=this.opp,e=this.st,n=this.game.fx;if(this.invuln=.08,this.cphase===0){if(e>=.2){const s=this.lastMove.lengthSq()>.01?this.lastMove.clone().normalize():t.dir.clone().negate(),r=t.pos.clone().addScaledVector(s,t.radius+this.radius+.8);r.y=0;const a=Math.hypot(r.x,r.z),o=this.game.R-1;a>o&&r.multiplyScalar(o/a),this.pos.copy(r),this.faceOpp(),this.cphase=1,this.st=0,this.anim="appear",n.leaves(this.pos,30,3,.5),n.smoke({x:r.x,y:1,z:r.z},12)}}else this.pk=Math.min(1,e/.16),e>=.16&&this.setState("idle")}startSuper(){this.energy=0,this.setState("custom"),this.anim="superstart",this.invuln=.55,this.cphase=0,this.game.flash(this),this.custom=()=>{this.pk=Math.min(1,this.st/.45),this.cphase===0&&this.st>=.45?this.dist()<9.5&&this.opp.state!=="ko"?this.game.startCine(this,this.opp):(this.cphase=1,this.st=0,this.anim="hit"):this.cphase===1&&this.st>=.7&&this.setState("idle")}}receive(t,e){if(this.invuln>0||this.state==="down"||this.state==="getup"||this.state==="ko")return"miss";const n=this.game,s=n.fx,r=this.state,a={t:"hit",att:t,def:this,m:e,dmg:0};if(r==="air"&&this.juggle>=Be.maxJuggle)return"miss";if(r==="dodge"&&!e.track&&!e.thrown&&this.st>=this.dodge.ev[0]&&this.st<=this.dodge.ev[1])return n.tag(this,"ESQUIVOU"),n.log({...a,res:"dodge"}),"miss";const o=e.dirv?e.dirv.clone():fn().subVectors(this.pos,t.pos).setY(0).normalize(),c={x:this.pos.x-o.x*this.radius*.6,y:this.y+(e.h==="low"?.35:this.hitY),z:this.pos.z-o.z*this.radius*.6};if(this.veil>0&&!e.thrown&&!e.unblockable)return this.veil=0,n.tag(this,"VÉU ABSORVEU"),s.ring(this.pos,8380624,4.5,.4),s.sparks(c,26,[.5,1,.9]),n.hitstop=.06,t.y<.5&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<3.2+t.radius&&(t.state==="attack"||t.state==="idle"||t.state==="custom")&&!n.cine&&(t.setState("hit"),t.stun=.4,t.vel.copy(o).multiplyScalar(-9),t.y=0),n.log({...a,res:"veil"}),"block";if((r==="idle"||r==="blockstun")&&this.blocking&&this.dir.dot(o)<-.1&&!e.unblockable){const p=this.guard==="low";if(e.h==="high"&&p)return n.tag(this,"ABAIXOU"),n.log({...a,res:"duck"}),"miss";if(e.h==="low"&&!p||e.h==="mid"&&p)n.tag(this,e.h==="low"?"BAIXO!":"POR CIMA!");else{const g=r==="idle"&&this.pgOk&&this.blockAt<=Be.perfect,v=g?0:e.dmg*(e.chip??Be.chip);return this.hp=Math.max(1,this.hp-v),this.setState("blockstun"),this.blocking=!0,this.guard=p?"low":"high",this.anim=p?"blocklow":"block",this.stun=g?.12:e.bstun||.22,this.tapBlocked=!0,this.vel.copy(o).multiplyScalar((e.push||2)*(g?.2:.55)),s.sparks(c,g?22:8,g?[1,1,.8]:[.7,.8,1]),t.gain(e.dmg*.4),this.gain(e.dmg*(g?1.2:.5)),n.hitstop=g?.09:.04,g&&(n.tag(this,"DEFESA PERFEITA"),e.id&&t.state==="attack"&&(t.setState("hit"),t.stun=Be.perfectStagger,t.vel.copy(o).multiplyScalar(-3))),n.log({...a,res:g?"perfect":"block",dmg:v}),"block"}}if(r==="attack"&&this.move.armor&&this.phase<2&&!this.armorUsed&&!e.launch&&!e.thrown&&e.dmg<=8)return this.armorUsed=!0,this.hp=Math.max(1,this.hp-e.dmg),t.gain(e.dmg),s.sparks(c,10,[1,.6,.3]),n.hitstop=.05,n.tag(this,"AGUENTOU"),n.log({...a,res:"armor",dmg:e.dmg}),"hit";const l=r==="air",h=r==="attack"&&!e.thrown,u=r==="hit"||r==="rooted"||l,f=e.dmg*Math.max(Be.scaleMin,1-Be.scale*this.taken)*(l?.7:1)*(h?Be.counterDmg:1);return this.taken||(t.comboDmg=0),this.taken++,l&&this.juggle++,this.hp-=f,t.gain(f*1.5+this.taken*1.5),this.gain(f*.6),t.combo=this.taken,t.comboT=1.3,t.comboDmg+=f,e.burn&&(this.burn=e.burn),this.vel.copy(o).multiplyScalar(e.push||2),e.launch||this.hp<=0||l||this.y>.05||this.taken>=Be.maxHits?(this.y=Math.max(this.y,.02),this.vy=e.launch||(this.hp<=0?5.5:4),this.vel.multiplyScalar(.7),this.setState("air")):e.root&&this.rootImm<=0?(this.setState("rooted"),this.anim="hit",this.stun=e.root,this.rootImm=e.root+4,this.vel.set(0,0,0),n.tag(this,"PRESO!")):(this.setState("hit"),this.stun=(e.stun||.35)+(h?Be.counterStun:0)),e.daze&&this.dazeImm<=0&&(this.daze=e.daze,this.dazeImm=e.daze+3,n.tag(this,"DESORIENTADO")),h&&n.tag(t,"CONTRA-ATAQUE!"),this.model.snap(this,n.time),n.hitstop=Math.min(.14,.03+f*.006),n.shake=Math.max(n.shake,Math.min(.8,f*.04)),s.sparks(c,6+f,e.fire?[1,.5,.15]:[1,.85,.6]),e.fire?s.fire(c,30,.4,3,.9):s.dust(c,5,o.x,o.z,3),n.onHit(t,this,f),n.log({...a,res:"hit",dmg:f,counter:h,sure:u,hits:this.taken,total:t.comboDmg}),"hit"}}const Jg={saci:["bJ","fK","bK","dJ","K"],mula:["fJ","bK","dJ","K","bJ"],curupira:["fJ","bJ","dJ","dK","K"],cuca:["fJ","K","bK","dK","dJ"]},$g={saci:[["J","J","J","K"],1.1],mula:[["J","J","L"],1.6],curupira:[["fJ","J","J","K"],1.6],cuca:[null,1.5]};class Ih{constructor(t){this.me=t,this.t=.5,this.queue=[],this.blockT=0,this.low=!1,this.seen=null,this.grabRoll=null,this.punished=null,this.mv=new P}q(...t){this.queue=t.map((e,n)=>[e,n===0?0:.2])}press(t,e){e.length===2&&e!=="SP"&&e!=="EV"&&e!=="GR"?(t.dir=e[0],t.press=e[1]):(t.dir="n",t.press=e),e==="EV"&&t.move.copy(this.ev||this.mv)}guard(t){if(t.state==="attack"&&t.move!==this.seen){this.seen=t.move;const e=t.move.h;this.low=e==="low"?Math.random()<.55:e==="mid"?Math.random()<.12:Math.random()<.25,this.me.daze>0&&(this.low=Math.random()<.5)}return this.low}think(t,e){const n=this.me,s=n.opp,r={move:new P,block:!1,press:null};if(n.state==="grabbed")return this.grabRoll===null&&(this.grabRoll=Math.random()<.38?.1+Math.random()*.2:9),(this.grabRoll-=t)<=0&&(r.press="J",this.grabRoll=9),this.queue.length=0,r;if(this.grabRoll=null,n.state==="blockstun")return r.block=!0,r.down=this.guard(s),this.blockT=Math.max(this.blockT,.12),this.queue.length=0,r;if(this.dodgeRoots(t,e,r))return r;if(n.state!=="idle"&&n.state!=="attack")return this.queue.length=0,r;if(this.queue.length)return this.queue[0][1]-=t,this.queue[0][1]<=0&&this.press(r,this.queue.shift()[0]),r;if(n.state!=="idle")return r;if(s.state==="attack"&&s.phase===2&&s.move!==this.punished){const o=s.mt[2]*(1-s.pk),c=n.dist()-n.radius-s.radius,[l,h]=$g[n.kind];if(o>.22&&c<h&&(this.punished=s.move,Math.random()<(n.daze>0?.3:.7)))return this.blockT=0,this.q(...l||yo[n.kind][0].cmd),r}return s.state!=="attack"&&(this.punished=null),this.blockT>0?(this.blockT-=t,r.block=!0,r.down=this.guard(s),r):((this.t-=t)<=0&&(this.t=.16+Math.random()*.22+(n.daze>0?.25:0),this.decide(e)),r.move.copy(this.mv),r)}dodgeRoots(t,e,n){const s=this.me;for(const c of e.projectiles)c.type==="roots"&&c.owner!==s&&!c.hit&&!c.aiSeen&&(c.aiSeen=!0,this.roots={p:c,t:.15+Math.random()*.2,plan:Math.random()});const r=this.roots;if(!r)return!1;if(r.p.hit||!e.projectiles.includes(r.p))return this.roots=null,!1;if((r.t-=t)>0||r.done||s.state!=="idle"||(r.done=!0,r.p.pos.distanceTo(s.pos)>1.9))return!1;const a=new P().subVectors(s.pos,r.p.pos).setY(0);a.lengthSq()<.01&&a.set(-s.dir.z,0,s.dir.x),a.normalize(),this.queue.length=0;const o=()=>{this.seen=s.opp.move,this.low=!0,this.blockT=.6,n.block=!0,n.down=!0};if(r.plan<.45)o();else if(r.plan<.72)s.cd.dodge<=0?(this.ev=a,this.q("EV")):o();else if(r.plan<.86)this.mv.copy(a),this.t=.45,n.move.copy(a);else return!1;return!0}decide(t){const e=this.me,n=e.opp,s=e.dist(),r=Math.random(),a=new P().subVectors(n.pos,e.pos).setY(0).normalize(),o=new P(-a.z,0,a.x).multiplyScalar(Math.random()<.5?1:-1),c=()=>{this.mv.copy(a),Math.random()<.3&&this.mv.addScaledVector(o,.7).normalize()},l=()=>{const g=yo[e.kind];this.q(...g[Math.floor(Math.random()*g.length)].cmd)},h=()=>{const g=Jg[e.kind];this.q(g[Math.floor(Math.random()*g.length)])};if(this.mv.set(0,0,0),Math.random()<.12)return;const u=n.state==="attack"&&n.phase===0||n.state==="custom"&&n.anim==="voadora";if(u&&n.move&&n.move.beam&&s<8.2){if(r<.4&&e.cd.dodge<=0){this.ev=o.clone(),this.q("EV");return}if(r<.7){this.mv.copy(o),this.t=.55;return}if(r<.85){this.seen=null,this.blockT=.7;return}}if(u&&s<4.5){if(r<.4){this.seen=null,this.blockT=.5;return}if(r<.5&&e.cd.def<=0){this.q("O");return}if(r<.64&&e.cd.dodge<=0){this.ev=Math.random()<.75?o.clone():a.clone().negate(),this.q("EV");return}if(r<.72){this.mv.copy(o),this.t=.4;return}}for(const g of t.projectiles)if(g.type!=="roots"&&g.owner!==e&&g.pos.distanceTo(e.pos)<(g.type==="wave"?4.2:3.5)){g.type==="wave"?r<.22&&e.cd.def<=0&&(e.kind==="curupira"||e.kind==="saci")?this.q("O"):r<.8?(this.low=!1,this.seen=n.move,this.blockT=.65):(this.mv.copy(o),this.t=.45):r<.45?(this.low=!1,this.blockT=.45):(this.mv.copy(o),this.t=.45);return}if(e.energy>=100&&s<7&&r<.5){this.q("SP");return}if(n.state==="down"||n.state==="getup"||n.state==="air"){s<3?this.mv.copy(a).negate().multiplyScalar(.6):s>5&&c();return}const p=s-e.radius-n.radius;if(n.state==="rooted"){p>2.4&&e.kind==="curupira"&&e.cd.mid<=0?this.q("L"):p>.7?this.mv.copy(a):r<.45?this.q("GR"):l();return}if(n.veil>0&&r<.75){r<.25&&s>3&&e.cd.mid<=0&&(e.kind==="saci"||e.kind==="curupira")?this.q("L"):p<2.2?(this.mv.copy(a).negate().addScaledVector(o,.7).normalize(),this.t=.5):(this.mv.copy(o),this.t=.4);return}if(n.blocking&&n.state==="idle"&&p<1.4&&r<.5){p<.55?this.q("GR"):this.mv.copy(a);return}if(e.kind==="saci")s>6?r<.45&&e.cd.mid<=0?this.q("L"):c():s>3?r<.28&&e.cd.special<=0?this.q("I"):r<.4&&e.cd.mid<=0?this.q("L"):c():p>.65?p<1.5&&r<.3?this.q("fJ","J"):p<1.3&&r<.45?this.q("fK"):this.mv.copy(a):r<.5?l():r<.7?h():r<.76?this.q("GR"):r<.88?(this.mv.copy(a).negate().addScaledVector(o,.6).normalize(),this.t=.45):(this.seen=null,this.blockT=.4);else if(e.kind==="curupira")s>6?r<.4&&s<7.3&&e.cd.special<=0?this.q("I"):r<.62&&e.cd.mid<=0?this.q("L"):c():s>3?r<.24&&e.cd.special<=0?this.q("I"):r<.44&&e.cd.mid<=0?this.q("L"):r<.58&&s<3.9?this.q("fJ","J"):c():p>.7?this.mv.copy(a):r<.48?l():r<.68?h():r<.75?this.q("GR"):r<.88?(this.mv.copy(a).negate().addScaledVector(o,.6).normalize(),this.t=.45):(this.seen=null,this.blockT=.4);else if(e.kind==="cuca")s>5.5?r<.5&&e.cd.special<=0?this.q("I"):r<.62&&e.cd.def<=0&&s<7.5?this.q("O"):r<.85&&c():s>2.8?r<.34&&e.cd.special<=0?this.q("I"):r<.48&&s<4?this.q("fK"):r<.58&&s<3.6?this.q("K"):r<.68&&e.cd.def<=0?this.q("O"):r<.8?(this.mv.copy(a).negate().addScaledVector(o,.5).normalize(),this.t=.4):c():p>.9?r<.3&&e.cd.mid<=0?this.q("L"):r<.5?this.q("fJ"):r<.62?this.q("K"):this.mv.copy(a):r<.34?l():r<.54?h():r<.68&&e.cd.mid<=0?this.q("L"):r<.78&&p<.6?this.q("GR"):r<.88&&e.cd.def<=0?this.q("O"):(this.seen=null,this.blockT=.45);else{if(e.dir.dot(a)<0&&s<3.2&&r<.7){this.q("L");return}s>7.5?c():s>3.3?r<.24&&e.cd.special<=0?this.q("I"):r<.36&&s<5.5?this.q("fK"):c():p>.95?r<.16&&e.cd.def<=0?this.q("O"):r<.3?this.q("fJ","J","fK"):this.mv.copy(a):r<.42?l():r<.62?h():r<.74?this.q("L"):r<.8&&p<.6?this.q("GR"):r<.9&&e.cd.def<=0?this.q("O"):(this.seen=null,this.blockT=.45)}}}const vl={KeyJ:"J",KeyK:"K",KeyL:"L",KeyI:"I",KeyO:"O",Space:"SP"},_l={2:"J",3:"K",0:"L",1:"I",5:"O",7:"SP"},xl=i=>Math.max(-1,Math.min(1,i));class jg{constructor({onPause:t,onTouch:e}){this.keys=new Set,this.presses=[],this.onPause=t,this.onTouch=e,this.touch=!1,this.t={x:0,y:0,block:!1},this.p={x:0,y:0,block:!1},this.prev=[],this.prevDir=0,this.nav={dx:0,ok:!1},addEventListener("keydown",n=>{(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),!n.repeat&&(this.keys.add(n.code),vl[n.code]&&this.presses.push(vl[n.code]),(n.code==="Escape"||n.code==="KeyP")&&t())}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.keys.clear(),this.t.x=this.t.y=0,this.t.block=!1}),addEventListener("contextmenu",n=>n.preventDefault()),matchMedia("(pointer: coarse)").matches&&this.enableTouch(),addEventListener("pointerdown",n=>{n.pointerType==="touch"&&this.enableTouch()},!0),this.bindTouch()}enableTouch(){this.touch||(this.touch=!0,document.body.classList.add("touch"),this.onTouch&&this.onTouch())}bindTouch(){const t=document.getElementById("stickZone"),e=document.getElementById("stickBase"),n=document.getElementById("stickKnob");let s=null,r=0,a=0;const o=l=>{const h=e.offsetWidth*.5||50;let u=(l.clientX-r)/h,f=(l.clientY-a)/h;const p=Math.hypot(u,f);p>1&&(u/=p,f/=p),n.style.transform=`translate(${u*h}px, ${f*h}px)`;const g=Math.min(1,p),v=.2,m=g<v?0:(g-v)/(1-v);this.t.x=g?u/g*m:0,this.t.y=g?-f/g*m:0},c=l=>{l.pointerId===s&&(s=null,this.t.x=this.t.y=0,n.style.transform="",e.style.left=e.style.top="",e.classList.remove("on"))};t.addEventListener("pointerdown",l=>{if(s===null){l.preventDefault(),s=l.pointerId;try{t.setPointerCapture(s)}catch{}r=l.clientX,a=l.clientY,e.style.left=r+"px",e.style.top=a+"px",e.classList.add("on"),o(l)}}),t.addEventListener("pointermove",l=>{l.pointerId===s&&o(l)}),t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c),document.querySelectorAll("[data-btn]").forEach(l=>{const h=l.dataset.btn;let u=null;const f=p=>{p.pointerId===u&&(u=null,l.classList.remove("down"),h==="BLOCK"&&(this.t.block=!1))};l.addEventListener("pointerdown",p=>{p.preventDefault(),u=p.pointerId;try{l.setPointerCapture(u)}catch{}l.classList.add("down"),h==="BLOCK"?this.t.block=!0:this.presses.push(h)}),l.addEventListener("pointerup",f),l.addEventListener("pointercancel",f)})}frame(){const t=this.nav;t.dx=0,t.ok=!1,this.p.x=this.p.y=0,this.p.block=!1;let e=null;const n=navigator.getGamepads?navigator.getGamepads():[];for(const h of n)if(h&&h.connected){e=h;break}if(!e)return this.prev.length=0,t;const s=h=>!!(e.buttons[h]&&e.buttons[h].pressed),r=h=>s(h)&&!this.prev[h];let a=e.axes[0]||0,o=-(e.axes[1]||0);const c=Math.hypot(a,o);c<.22?a=o=0:c>1&&(a/=c,o/=c),this.p.x=xl(a+(s(15)?1:0)-(s(14)?1:0)),this.p.y=xl(o+(s(12)?1:0)-(s(13)?1:0)),this.p.block=s(4)||s(6);for(const h in _l)r(h)&&this.presses.push(_l[h]);r(9)&&this.onPause();const l=this.p.x>.5?1:this.p.x<-.5?-1:this.p.y<-.5?1:this.p.y>.5?-1:0;return l&&l!==this.prevDir&&(t.dx=l),this.prevDir=l,t.ok=r(0),this.prev=e.buttons.map(h=>h.pressed),t}poll(){const t=this.keys,e=(o,c)=>t.has(o)||t.has(c)?1:0;let n=e("KeyD","ArrowRight")-e("KeyA","ArrowLeft")+this.t.x+this.p.x,s=e("KeyW","ArrowUp")-e("KeyS","ArrowDown")+this.t.y+this.p.y;const r=Math.hypot(n,s);r>1&&(n/=r,s/=r);const a=Math.abs(Math.atan2(n,-s));return this.down=this.down?s<-.35&&a<1.08:s<-.5&&a<.873,{x:n,y:s,down:this.down,block:t.has("ShiftLeft")||t.has("ShiftRight")||this.t.block||this.p.block,press:this.presses.shift()||null}}clear(){this.presses.length=0}}const Ml={low:{ratio:1.25,shadow:0,lights:!1,fx:.55},medium:{ratio:1.6,shadow:1024,lights:!0,fx:.8},high:{ratio:2,shadow:2048,lights:!0,fx:1}},yl=["low","medium","high"],Uh="fs.quality",Zg=()=>{try{return localStorage.getItem(Uh)}catch{return null}},Qg=i=>{try{localStorage.setItem(Uh,i)}catch{}};function tv({renderer:i,arena:t,fx:e,mobile:n,onChange:s}){let r=Zg();r!=="auto"&&!Ml[r]&&(r="auto");let a="high",o=0,c=0,l=3;function h(f){a=f;const p=Ml[f];i.setPixelRatio(Math.min(devicePixelRatio||1,p.ratio));const g=t.sun;g.castShadow=!!p.shadow,p.shadow&&g.shadow.mapSize.x!==p.shadow&&(g.shadow.mapSize.set(p.shadow,p.shadow),g.shadow.map&&(g.shadow.map.dispose(),g.shadow.map=null));for(const v of t.torchLights)v.visible=p.lights;e.mult=p.fx,o=c=0,l=2.5,s(u)}const u={get pref(){return r},get tier(){return a},set(f){r=f,Qg(f),h(f==="auto"?n()?"medium":"high":f)},tick(f){if(r!=="auto"||f>.25)return;if(l>0){l-=f;return}if(o+=f,c++,o<2.5)return;const p=o/c;o=c=0;const g=yl.indexOf(a);p>1/40&&g>0&&h(yl[g-1])}};return u.set(r),u}const ar="M25 3c1 9 12 13 12 25a13 13 0 0 1-26 0c0-6 3-9 6-12 0 4 1 7 4 7 2-6-1-12 4-20z",Sl="M16 6h16l7 24c1 6-5 12-15 12S8 36 9 30z",Sa="M24 4l16 6v12c0 10-7 17-16 22C15 39 8 32 8 22V10z",ev={fist:'<path d="M11 23c0-3 2-5 4.500-5 2 0 3.500 1 4.200 2.600.600-2.100 2.300-3.600 4.500-3.600 2.300 0 4 1.400 4.500 3.400.700-1.400 2.100-2.400 3.800-2.400 2.500 0 4.500 2 4.500 5v9c0 6-4.500 10-11 10h-4c-6.500 0-11-4-11-10z"/><path class="k" d="M16 30h13c2 0 3 1 3 3"/>',leg:'<path d="M17 5h11v19l11 7c3 2 2 8-2 8H15c-2 0-3-2-3-4l3-12z"/><path class="k" d="M14 33h24"/>',flykick:'<g transform="rotate(-35 26 22)"><path d="M6 17h20l7-6 9 6c2 1.500 2 5 0 6.500L36 28H6z"/></g><path class="s" d="M5 34l8-5M10 42l8-5M22 44l6-4"/>',tornado:'<path class="s" d="M7 9c8 3 26 3 34 0M11 18c7 2.500 19 2.500 26 0M16 27c5 2 11 2 16 0M20 35c3 1.500 6 1.500 9 0M24 42h1"/>',smoke:'<circle cx="17" cy="30" r="9"/><circle cx="29" cy="25" r="11"/><circle cx="34" cy="35" r="7"/><path d="M11 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/><path d="M40 4l1.200 3 3 1.200-3 1.200-1.200 3-1.200-3-3-1.200 3-1.200z"/>',cap:'<path d="M9 35c1-15 9-26 24-31-4 7-3 12 1 15 4 4 6 9 6 16z"/><path d="M5 36h38v6H5z"/><path class="k" d="M9 35h31"/>',shieldWind:`<path d="${Sa}"/><path class="k" d="M15 19h13a4 4 0 1 0-4-4M15 27h16a4 4 0 1 1-4 4"/>`,shieldDust:`<path d="${Sa}"/><circle class="kf" cx="19" cy="24" r="5"/><circle class="kf" cx="28" cy="20" r="6"/><circle class="kf" cx="28" cy="30" r="4"/>`,hoof:`<path d="${Sl}"/><path class="k" d="M24 27v15"/>`,kick:`<g transform="translate(1 12) rotate(-28 18 20) scale(.74)"><path d="${Sl}"/></g><path class="s" d="M33 9l4-6M39 17l7-2M37 26l7 3"/>`,shoe:'<path class="s" style="stroke-width:8" d="M13 8v17a11 11 0 0 0 22 0V8"/><g class="kf"><circle cx="13" cy="13" r="1.700"/><circle cx="13" cy="22" r="1.700"/><circle cx="35" cy="13" r="1.700"/><circle cx="35" cy="22" r="1.700"/><circle cx="24" cy="36" r="1.700"/></g>',flame:`<path d="${ar}"/><path class="kf" d="M24 26c3 4 6 6 6 10a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 2 3-3z"/>`,dust:'<circle cx="14" cy="29" r="8"/><circle cx="26" cy="24" r="10"/><circle cx="36" cy="30" r="7"/><path d="M5 33h38v6H5z"/><circle cx="9" cy="12" r="2.500"/><circle cx="21" cy="7" r="2"/><circle cx="39" cy="11" r="3"/>',inferno:`<g transform="translate(-7 15) scale(.58)"><path d="${ar}"/></g><g transform="translate(27 15) scale(.58)"><path d="${ar}"/></g><path d="${ar}"/><path class="kf" d="M24 24c3 4 7 7 7 12a7 7 0 0 1-14 0c0-4 2-6 4-8 1 2 2 2 3-4z"/>`,leaf:'<path d="M7 41C7 19 21 6 42 6c0 21-13 35-35 35z"/><path class="k" d="M10 38L33 15M18 30l1-9M24 24l9 0"/>',roots:'<path class="s" d="M24 5v15M24 20c-4 7-11 6-13 16M24 20c4 7 11 6 13 16M24 20v23M11 36l-5 7M37 36l5 7M18 9l6 5 6-5"/>',invert:'<path d="M27 8L10 24l17 16V30h14V18H27z"/><path class="s" d="M44 14v20" style="opacity:.55"/>',tree:'<path d="M24 2l13 15h-6l10 12H29v15H19V29H7l10-12h-6z"/><path class="k" d="M24 30v12"/>',claw:'<path d="M9 5c5 11 6 24 2 38 7-11 9-24 5-38zM21 3c5 13 6 28 2 42 7-13 9-28 5-42zM33 5c5 11 6 24 2 38 7-11 9-24 5-38z"/>',tail:'<path class="s" style="stroke-width:8" d="M7 13c18-5 32 3 32 15 0 9-9 13-16 8"/><path d="M40 6l5 9-9 2z"/><path class="s" d="M6 40h18"/>',eye:'<path d="M2 24c9-14 35-14 44 0-9 14-35 14-44 0z"/><circle class="kf" cx="24" cy="24" r="8"/><path class="s" d="M8 8l4 5M40 8l-4 5M24 3v6"/>',veil:`<path d="${Sa}"/><path class="kf" d="M29 13a11 11 0 1 0 0 22 9 9 0 1 1 0-22z"/>`,jaw:'<path d="M3 6h42l-4 15-5-7-4 7-4-7-4 7-4-7-4 7-4-7-5 7zM3 42h42l-4-15-5 7-4-7-4 7-4-7-4 7-4-7-4 7-5-7z"/>'},ti="#eadfc6",El={saci:{J:["fist",ti],K:["leg",ti],BLOCK:["shieldWind","#b9c8e6"],L:["tornado","#8fe6d2"],I:["flykick","#ff9466"],O:["smoke","#cdb9ff"],SP:["cap","#ffd27a"]},mula:{J:["hoof",ti],K:["kick",ti],BLOCK:["shieldDust","#b9c8e6"],L:["shoe","#d6dbe4"],I:["flame","#ffa23a"],O:["dust","#e0c090"],SP:["inferno","#ffd27a"]},curupira:{J:["fist",ti],K:["leg",ti],BLOCK:["shieldWind","#b9c8e6"],L:["leaf","#9be06a"],I:["roots","#d8b86a"],O:["invert","#7fe0c0"],SP:["tree","#ffd27a"]},cuca:{J:["claw",ti],K:["tail",ti],BLOCK:["shieldDust","#b9c8e6"],L:["claw","#7fd8e0"],I:["eye","#c79bff"],O:["veil","#5fd0c8"],SP:["jaw","#ffd27a"]}},bl={L:"mid",I:"special",O:"def"};function nv(){const i={},t={};document.querySelectorAll("[data-btn]").forEach(n=>{n.innerHTML='<i class="ring"></i><span class="ico"></span><b class="n"></b>',i[n.dataset.btn]=n,t[n.dataset.btn]={prev:0,max:1,cool:!1,nores:!1,avail:null,q:-1,n:""},n.addEventListener("animationend",s=>{s.animationName==="back"&&n.classList.remove("back")})});function e(n,s,r,a,o){const c=i[n],l=t[n];l.cool!==s&&(l.cool=s,c.classList.toggle("cool",s)),l.nores!==r&&(l.nores=r,c.classList.toggle("nores",r));const h=Math.round(Math.max(0,Math.min(1,a))*100);h!==l.q&&(l.q=h,c.style.setProperty("--p",h+"%")),o!==l.n&&(l.n=o,c.lastElementChild.textContent=o);const u=!s&&!r;u&&l.avail===!1&&(c.classList.remove("back"),c.offsetWidth,c.classList.add("back")),l.avail=u}return{setKind(n){for(const s in El[n]){const[r,a]=El[n][s],o=i[s];o.querySelector(".ico").innerHTML=`<svg viewBox="0 0 48 48" aria-hidden="true">${ev[r]}</svg>`,o.style.setProperty("--ic",a),o.classList.remove("back"),Object.assign(t[s],{prev:0,max:1,avail:null})}},update(n){for(const r in bl){const a=bl[r],o=t[r],c=n.cd[a];c>o.prev+1e-4&&(o.max=c),o.prev=c;const l=c>0,h=!l&&n.energy<(An[n.kind][a].cost||0);e(r,l,h,l?1-c/o.max:1,l&&c>=1?String(Math.ceil(c)):"")}const s=n.energy>=100;e("SP",!1,!s,n.energy/100,""),i.SP.classList.toggle("ready",s)}}}const Nh="fs.controls";function iv(){const i={scale:1,pad:[0,0],stick:[0,0]};try{Object.assign(i,JSON.parse(localStorage.getItem(Nh))||{})}catch{}return i}function Oh(i){const t=document.documentElement.style;t.setProperty("--cs",i.scale),t.setProperty("--padx",i.pad[0]+"px"),t.setProperty("--pady",i.pad[1]+"px"),t.setProperty("--stx",i.stick[0]+"px"),t.setProperty("--sty",i.stick[1]+"px");try{localStorage.setItem(Nh,JSON.stringify(i))}catch{}document.querySelectorAll("[data-cs]").forEach(e=>e.classList.toggle("sel",+e.dataset.cs===i.scale))}var Tl=["faces/cuca.webp","faces/curupira.webp","faces/mula.webp","faces/saci.webp","portraits/cuca.webp","portraits/curupira.webp","portraits/mula.webp","portraits/saci.webp"];const sv=typeof Tl<"u"?Tl:[],_r={};for(const i of sv){const t=i.replace(/\.[^.]+$/,"");_r[t]||(_r[t]="./media/"+i)}const Is=i=>_r[i]||null,rv=i=>Object.keys(_r).filter(t=>t.startsWith(i));function kh(i,t,e=""){const n=Is(i),s=document.createElement("span");if(s.className="pic "+e,!n)return s.innerHTML=t,s;const r=new Image;return r.alt="",r.draggable=!1,r.decoding="async",r.onerror=()=>{s.innerHTML=t},r.src=n,s.append(r),s}const Fh="fs.audio",av=i=>Math.max(0,Math.min(1,i)),ni={sfx:.8,voice:.8,music:.5};try{Object.assign(ni,JSON.parse(localStorage.getItem(Fh)||"{}"))}catch{}let It=null,_s=null,So=null,Ss=null;const En={},mr={},wl={};let Al=0;function re(i,t,e,n,s,r="sine",a=.3,o=.005){const c=It.createOscillator(),l=It.createGain();c.type=r,c.frequency.setValueAtTime(e,t),n!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(1,n),t+s),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(a,t+o),l.gain.exponentialRampToValueAtTime(8e-4,t+s),c.connect(l).connect(i),c.start(t),c.stop(t+s+.05)}function Ue(i,t,e,n,s="lowpass",r=2e3,a=r,o=1){const c=It.createBufferSource(),l=It.createBiquadFilter(),h=It.createGain();c.buffer=So,l.type=s,l.frequency.setValueAtTime(r,t),a!==r&&l.frequency.exponentialRampToValueAtTime(a,t+e),l.Q.value=o,h.gain.setValueAtTime(n,t),h.gain.exponentialRampToValueAtTime(8e-4,t+e),c.connect(l).connect(h).connect(i),c.start(t,Math.random()*1.5),c.stop(t+e+.05)}function Rl(i,t,e,n,s){const r=It.createBiquadFilter(),a=It.createGain();r.type="lowpass",r.frequency.value=520,r.connect(a).connect(i),a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(s,t+n*.35),a.gain.linearRampToValueAtTime(0,t+n);for(const o of[-6,7]){const c=It.createOscillator();c.type="sawtooth",c.frequency.value=e,c.detune.value=o,c.connect(r),c.start(t),c.stop(t+n+.05)}}const ov={hitL:(i,t)=>{Ue(i,t,.09,.55,"bandpass",1900,600,1.2),re(i,t,190,60,.11,"sine",.55)},hitH:(i,t)=>{Ue(i,t,.2,.8,"lowpass",2600,280),re(i,t,130,38,.24,"sine",.8),re(i,t,70,30,.3,"triangle",.4)},block:(i,t)=>{re(i,t,950,700,.07,"square",.1),Ue(i,t,.06,.3,"highpass",2800)},perfect:(i,t)=>{re(i,t,1250,1250,.3,"triangle",.22),re(i,t+.04,1870,1870,.35,"sine",.14),Ue(i,t,.05,.25,"highpass",5e3)},whoosh:(i,t)=>Ue(i,t,.15,.22,"bandpass",500,2600,2.2),dodge:(i,t)=>Ue(i,t,.24,.22,"bandpass",2600,450,1.6),grab:(i,t)=>{re(i,t,210,85,.22,"sawtooth",.16),Ue(i,t,.14,.4,"lowpass",1200,300)},shot:(i,t)=>{re(i,t,280,880,.26,"triangle",.14),Ue(i,t,.3,.2,"bandpass",700,2400,1.5)},roots:(i,t)=>{Ue(i,t,.42,.35,"lowpass",180,260),re(i,t,48,60,.42,"sine",.35,.2)},rootsUp:(i,t)=>{Ue(i,t,.32,.7,"lowpass",1100,140),re(i,t,85,38,.32,"sine",.55)},super:(i,t)=>{re(i,t,110,440,.9,"sawtooth",.12,.3),Ue(i,t,1,.3,"bandpass",300,3e3,1.4),re(i,t+.5,880,880,.6,"triangle",.1)},ko:(i,t)=>{re(i,t,230,40,1.2,"sawtooth",.22),Ue(i,t,1.1,.55,"lowpass",900,90),re(i,t,60,30,1.4,"sine",.6)},ui:(i,t)=>re(i,t,660,660,.05,"triangle",.12),sel:(i,t)=>{re(i,t,520,780,.09,"triangle",.16),re(i,t+.05,1040,1040,.08,"sine",.06)},count:(i,t)=>re(i,t,440,440,.2,"square",.1),go:(i,t)=>{re(i,t,660,660,.45,"square",.1),re(i,t,990,990,.45,"triangle",.1),Ue(i,t,.4,.35,"bandpass",900,3500)},vs:(i,t)=>{Ue(i,t,.8,.6,"lowpass",3200,160),re(i,t,72,34,.9,"sine",.7)},doors:(i,t)=>Ue(i,t,.5,.45,"bandpass",300,1800,.8),win:(i,t)=>[392,494,587,784].forEach((e,n)=>re(i,t+n*.13,e,e,n===3?1.1:.3,"triangle",.2)),lose:(i,t)=>[330,294,262,196].forEach((e,n)=>re(i,t+n*.22,e,e*(n===3?.97:1),n===3?1.3:.35,"sawtooth",.07))},Cl={saci:[340,"square",2400],mula:[85,"sawtooth",700],curupira:[240,"sawtooth",1600],cuca:[170,"sawtooth",1100]};function cv(i,t,e,n){const[s,r,a]=Cl[i]||Cl.saci,o=It.createBiquadFilter();o.type="bandpass",o.frequency.value=a,o.Q.value=2.5,o.connect(e);const c=(l,h,u,f=.45)=>re(o,n,l,h,u,r,f,.02);if(t==="attack")c(s*1.15,s*.9,.13);else if(t==="hurt")c(s*1.35,s*.75,.22,.5);else if(t==="ko")c(s*1.2,s*.45,.75,.55);else if(t==="super")c(s,s*1.5,.5,.5);else if(t==="win")for(let l=0;l<3;l++)re(o,n+l*.12,s*1.3,s*1.1,.1,r,.4,.01)}const Ea=[0,3,5,7,10,12,15],ei=i=>440*2**((i-69)/12),lv={menu:{bpm:62,fn(i,t,e,n){if(i%32===0){const s=[38,34,36,33][i/32%4];Rl(n,t,ei(s),e*34,.07),Rl(n,t,ei(s+7),e*34,.045)}if(i%16===0&&(re(n,t,55,40,.25,"sine",.3),re(n,t+e*1.5,52,38,.22,"sine",.2)),i%4===2&&Math.random()<.45){const s=62+Ea[Math.floor(Math.random()*Ea.length)];re(n,t,ei(s),ei(s),e*6,"triangle",.05,.01)}}},fight:{bpm:118,fn(i,t,e,n){const s=i%16,r=Math.floor(i/16)%4,a=[38,38,34,36][r];if((s===0||s===6||s===8||s===11)&&re(n,t,120,42,.2,"sine",.55),(s===4||s===12)&&Ue(n,t,.12,.28,"bandpass",1700,1200,1.2),i%2===0&&Ue(n,t,.035,s%4===2?.09:.045,"highpass",6500),(s%4===0||s===14)&&re(n,t,ei(a-12+(s===14?7:0)),ei(a-12),e*2.6,"sawtooth",.09,.01),s%8===2&&Math.random()<.5){const o=a+24+Ea[Math.floor(Math.random()*5)];re(n,t,ei(o),ei(o),e*3,"triangle",.045,.01)}}}},me={want:null,on:null,next:0,step:0,timer:null,g:null,src:null};function hv(){clearInterval(me.timer),me.timer=null;const i=me.g,t=me.src;me.g=me.src=null,me.on=null,i&&(i.gain.cancelScheduledValues(It.currentTime),i.gain.setTargetAtTime(0,It.currentTime,.25),setTimeout(()=>{try{t&&t.stop()}catch{}i.disconnect()},1500))}function ba(i){if(!It||me.on===i||(hv(),!i))return;me.on=i;const t=me.g=It.createGain();t.gain.setValueAtTime(0,It.currentTime),t.gain.linearRampToValueAtTime(1,It.currentTime+1.2),t.connect(Ss);const e=mr["audio/music/"+i];if(e){const r=me.src=It.createBufferSource();r.buffer=e,r.loop=!0,r.connect(t),r.start();return}const n=lv[i];if(!n)return;me.next=It.currentTime+.08,me.step=0;const s=()=>{if(It.state!=="running")return;const r=60/n.bpm/4;for(me.next<It.currentTime&&(me.next=It.currentTime+.02);me.next<It.currentTime+.4;)n.fn(me.step,me.next,r,t),me.next+=r,me.step++};s(),me.timer=setInterval(s,100)}function Ll(i,t,e=1){const n=It.createBufferSource();n.buffer=i,n.playbackRate.value=e,n.connect(t),n.start()}const Pl=()=>It&&It.state==="running",Bt={vol:ni,get unlocked(){return!!It},unlock(){if(It){It.state==="suspended"&&!document.hidden&&It.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;try{It=new i}catch{return}_s=It.createDynamicsCompressor(),_s.threshold.value=-14,_s.ratio.value=4,_s.connect(It.destination);for(const e of["sfx","voice","music"])En[e]=It.createGain(),En[e].gain.value=ni[e],En[e].connect(_s);Ss=It.createGain(),Ss.connect(En.music),So=It.createBuffer(1,It.sampleRate*2,It.sampleRate);const t=So.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;for(const e of rv("audio/"))fetch(Is(e)).then(n=>n.arrayBuffer()).then(n=>It.decodeAudioData(n)).then(n=>{mr[e]=n,e==="audio/music/"+me.on&&(me.on=null,ba(me.want))}).catch(()=>{});document.addEventListener("visibilitychange",()=>{document.hidden?It.suspend():It.resume()}),It.state==="suspended"&&It.resume(),ba(me.want)},setVol(i,t){ni[i]=Math.round(av(t)*10)/10,En[i]&&En[i].gain.setTargetAtTime(ni[i],It.currentTime,.03);try{localStorage.setItem(Fh,JSON.stringify(ni))}catch{}},play(i,t=1){if(!Pl()||ni.sfx<=0)return;const e=performance.now();if(e-(wl[i]||0)<30)return;wl[i]=e;const n=mr["audio/sfx/"+i];if(n)return Ll(n,En.sfx,t);const s=ov[i];s&&s(En.sfx,It.currentTime+.005)},voice(i,t,e=!1){if(!Pl()||ni.voice<=0)return;const n=performance.now();if(!e&&n-Al<220)return;Al=n;const s=mr[`audio/voice/${i}_${t}`];if(s)return Ll(s,En.voice,.96+Math.random()*.08);cv(i,t,En.voice,It.currentTime+.005)},music(i){me.want=i,It&&ba(i)},duck(i){Ss&&Ss.gain.setTargetAtTime(i?.3:1,It.currentTime,.1)}},Dl=["","FÁCIL","MÉDIO","DIFÍCIL"],uv=["Força","Velocidade","Resistência","Alcance","Mobilidade"],Pn={saci:{short:"SACI",tags:"VELOCIDADE · EVASÃO · CONTROLE",diff:2,attrs:[60,100,50,70,100],color:"#c21d12",why:"Rápido e frágil: vence quem entra, bate e some.",tips:["Comece com LEVE, LEVE, LEVE e feche com PESADO.","Solte o Redemoinho de longe e entre atrás dele.","Sumiu no vento atravessa o golpe do adversário — custa energia."],svg:'<svg viewBox="0 0 48 48"><circle cx="24" cy="29" r="13" fill="#3a2418"/><path d="M9 24c1-13 8-20 22-22-3 5-2 9 2 12 4 3 6 6 6 10z" fill="#c21d12"/><circle cx="19" cy="30" r="2" fill="#ffd27a"/><circle cx="29" cy="30" r="2" fill="#ffd27a"/><path d="M19 37q5 4 10 0" stroke="#e6d9bd" stroke-width="2" fill="none"/></svg>'},mula:{short:"MULA",tags:"FORÇA · RESISTÊNCIA · PRESSÃO",diff:1,attrs:[90,50,90,70,40],color:"#ff7a1f",why:"Muita vida, golpes longos e fortes: perdoa erros.",tips:["As patadas alcançam longe: bata antes de o adversário chegar.","A Investida (→ PESADO) aguenta um golpe no caminho.","Adversário nas suas costas? O Coice responde na hora."],svg:'<svg viewBox="0 0 48 48"><path d="M12 46V30c0-6 5-10 12-10s12 4 12 10v16z" fill="#2a1a16"/><path d="M25 2c1 7 10 10 10 19a11 11 0 0 1-22 0c0-5 3-7 5-10 0 3 1 5 3 5 2-4-1-9 4-14z" fill="#ff7a1f"/><path d="M24 14c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-4 2-5 1 1 2 1 3-4z" fill="#ffd27a"/></svg>'},curupira:{short:"CURUPIRA",tags:"AGILIDADE · ARMADILHA · TERRITÓRIO",diff:3,attrs:[70,90,60,80,90],color:"#e2491a",why:"Depende de armadilhas e de ler o adversário.",tips:["A Ira da Floresta nasce sob o adversário: prenda e corra para o combo.","A Lâmina da Mata é rápida: use para interromper de longe.","O Caminho Invertido desliza para onde você apontar e engana o ataque."],svg:'<svg viewBox="0 0 48 48"><path d="M6 24l3-14 5 7 2-13 6 10 4-12 4 12 6-9 1 13 6-6-3 14z" fill="#e2491a"/><path d="M14 22l3-9 4 6 3-9 4 9 4-6 3 9z" fill="#ffa22e"/><circle cx="24" cy="30" r="12" fill="#94603a"/><circle cx="19" cy="29" r="2" fill="#9dff5a"/><circle cx="29" cy="29" r="2" fill="#9dff5a"/><path d="M12 42c6-5 18-5 24 0l-4 5H16z" fill="#3f7a2c"/><path d="M20 36h8" stroke="#2a160c" stroke-width="2"/></svg>'},cuca:{short:"CUCA",tags:"MAGIA · LONGO ALCANCE · AGARRÕES",diff:2,attrs:[70,40,70,90,50],color:"#2a8478",why:"Lenta, mas controla a luta de longe.",tips:["O Pesadelo da Cuca desorienta: acertou, avance.","O Véu do Pesadelo absorve um golpe — levante antes de atacar.","De perto, as Garras da Bruxa e o agarrão castigam quem só defende."],svg:'<svg viewBox="0 0 48 48"><path d="M8 46c-3-16 0-30 10-36h12c10 6 13 20 10 36z" fill="#eeeadf"/><path d="M13 20c0-7 5-11 11-11s11 4 11 11l-3 20c-1 4-4 6-8 6s-7-2-8-6z" fill="#2a8478"/><path d="M17 34h14l-1 8c-1 3-3 4-6 4s-5-1-6-4z" fill="#a9cf9a"/><circle cx="18" cy="19" r="3.2" fill="#ffd23a"/><circle cx="30" cy="19" r="3.2" fill="#ffd23a"/><path d="M18 17v4M30 17v4" stroke="#120a04" stroke-width="1.5"/><path d="M17 34l2 3 2-3 2 3 2-3 2 3 2-3 2 3" stroke="#f2ecd8" stroke-width="1.5" fill="none"/><path d="M13 12h22" stroke="#caa23c" stroke-width="2.5"/></svg>'}},Xo=10,nt=i=>document.getElementById(i),Rn=(i=0,t=0,e=0)=>new P(i,t,e),pn=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),zh=matchMedia("(pointer: coarse)").matches,yn=new ng({antialias:!zh,powerPreference:"high-performance"});yn.shadowMap.enabled=!0;yn.shadowMap.type=kl;yn.toneMapping=zl;yn.toneMappingExposure=1.15;document.body.prepend(yn.domElement);const Ae=new ig,an=new tn(42,1,.1,300),gt=new Dg(Ae),Bh=kg(Ae,gt,Xo);function Lr(){yn.setSize(innerWidth,innerHeight),an.aspect=innerWidth/innerHeight,an.updateProjectionMatrix(),gt.resize(yn.domElement.height)}addEventListener("resize",Lr);addEventListener("orientationchange",()=>setTimeout(Lr,250));Lr();const R={scene:Ae,fx:gt,R:Xo,time:0,hitstop:0,shake:0,projectiles:[],cine:null,mode:"menu",phase:"intro",pt:0,timer:60,round:1,slow:1,spawn(i,t){const e=Lh[i],n=t.opp;if(Bt.play(i==="roots"?"roots":"shot"),i==="roots"){const o=Rn().subVectors(n.pos,t.pos).setY(0),c=o.length();c>e.reach&&o.multiplyScalar(e.reach/c);const l=t.pos.clone().add(o),h=bh();h.position.copy(l),Ae.add(h),R.projectiles.push({type:i,owner:t,mesh:h,pos:l,vel:Rn(),t:0,up:0,hit:!1,held:!1,life:9});return}const s=i==="tornado"?Eh():i==="leaf"?Ig():Ug(),r=i==="tornado"?0:i==="leaf"?1.15:1,a=t.pos.clone().addScaledVector(t.dir,1);s.position.set(a.x,r,a.z),s.rotation.y=Math.atan2(t.dir.x,t.dir.z),s.scale.setScalar(.2),Ae.add(s),R.projectiles.push({type:i,owner:t,mesh:s,pos:a,h:r,vel:t.dir.clone().multiplyScalar(e.speed),life:e.life})},spawnGhost(i){const t=i.model.root.clone(!0),e=new He({color:9305978,transparent:!0,opacity:.5,depthWrite:!1});t.traverse(s=>{s.isMesh&&(s.material=e,s.castShadow=!1)}),Ae.add(t);let n=0;gt.objs.push(s=>{if(n+=s,e.opacity=.5*Math.max(0,1-n/.7),n>=.7)return Ae.remove(t),e.dispose(),!0})},flash(i){Es(.55),Pr(`<span style="font-size:.36em">${i.super}</span><small>PODER FOLCLÓRICO</small>`,1.3),Bt.play("super"),Bt.voice(i.kind,"super",!0),R.stats&&R.stats[i===vt?0:1].supers++,R.tutorial&&i===vt&&R.tut&&Ai[R.tut.i]?.full&&!(R.tut.ok>0)&&jo()},startCine(i,t){const e=Rn().subVectors(t.pos,i.pos).setY(0);e.lengthSq()<.01&&e.copy(i.dir),e.normalize(),R.cine={att:i,def:t,d:e,t:0,s:{},from:i.pos.clone(),tor:null,ghosts:[],y0:t.y},i.custom=()=>{},t.setState("idle"),t.vel.set(0,0,0),Dr(),nt("bars").classList.add("on"),nt("hud").classList.add("cine")},onHit(i,t,e){if(t===vt&&on.touch&&navigator.vibrate&&navigator.userActivation?.hasBeenActive!==!1)try{navigator.vibrate(Math.min(70,12+e*2))}catch{}},paused:!1,training:!1,dummy:"parado",events:[],tag(i,t){const e=nt(i===vt?"tag1":"tag2");e.textContent=t,e.classList.remove("on"),e.offsetWidth,e.classList.add("on")},log(i){R.events.push(i),R.events.length>80&&R.events.shift(),R.training&&vv(i),Ev(i),R.tutorial&&bv(i)}};window.__game=R;R.gfx={renderer:yn,camera:an};let vt=null,Vt=null,qo=null,Tn=null;function Yo(i,t){if(!(vt&&vt.kind===i&&Vt.kind===t)){for(const e of[vt,Vt])e&&(e.veilMesh&&Ae.remove(e.veilMesh),e.dispose());vt=new gl(i,R),Vt=new gl(t,R),vt.opp=Vt,Vt.opp=vt,qo=new Ih(Vt);for(const e of[vt,Vt])e.model.root.traverse(n=>{n.isMesh&&!n.material.transparent&&(n.castShadow=!0)});if(i===t){const e=new Set;Vt.model.root.traverse(n=>{const s=n.material;n.isMesh&&s.color&&!e.has(s)&&(e.add(s),s.color.offsetHSL(.14,-.1,.05))})}}}const Ko=()=>{vt.reset(-2.4,0,Math.PI/2),Vt.reset(2.4,0,-Math.PI/2)};Yo("curupira","cuca");Ko();R.KINDS=xn;let bi=null;const on=new jg({onPause:()=>Ci(),onTouch:()=>bi&&bi.pref==="auto"&&bi.set("auto")});bi=tv({renderer:yn,arena:Bh,fx:gt,mobile:()=>zh||on.touch,onChange(i){Lr(),document.querySelectorAll("[data-q]").forEach(t=>t.classList.toggle("sel",t.dataset.q===i.pref))}});document.querySelectorAll("[data-q]").forEach(i=>i.addEventListener("click",()=>bi.set(i.dataset.q)));const ri=()=>({move:Rn(),block:!1,press:null}),De=Rn(0,0,1);function dv(){const i=on.poll();return{move:Rn(De.z*i.x-De.x*i.y,0,-De.x*i.x-De.z*i.y),block:i.block,press:i.press,down:i.down}}function Ci(i){i=i??!R.paused,(R.mode!=="fight"||R.phase==="over")&&(i=!1),R.paused=i,nt("pause").style.display=i?"flex":"none",on.clear(),Bt.duck(i),i&&zr()}nt("pauseBtn").addEventListener("click",()=>Ci(!0));nt("resume").addEventListener("click",()=>Ci(!1));nt("quit").addEventListener("click",()=>Yh());document.addEventListener("visibilitychange",()=>{document.hidden&&Ci(!0)});function fv(){if(!(!on.touch||window.Capacitor))try{const i=document.documentElement,t=()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}};!document.fullscreenElement&&i.requestFullscreen?i.requestFullscreen({navigationUI:"hide"}).then(t,()=>{}):t()}catch{}}function pv(i){if(!i.dx&&!i.ok)return;const t=["opts","how","pause","over","menu"].map(nt).find(s=>getComputedStyle(s).display!=="none");if(!t)return;const e=[...t.querySelectorAll("button")].filter(s=>s.offsetParent);let n=e.indexOf(document.activeElement);i.dx?(n=n<0?0:(n+i.dx+e.length)%e.length,e[n].focus()):n>=0&&e[n].click()}let Eo=0;function Pr(i,t=1.2){const e=nt("msg");e.innerHTML=i,e.style.transition="none",e.classList.remove("on"),e.offsetWidth,e.style.transition="",e.classList.add("on"),Eo=t}function Es(i){const t=nt("flash");t.style.transition="none",t.style.opacity=i,t.offsetWidth,t.style.transition="",t.style.opacity=0}const Vh=nv(),bo=iv();Oh(bo);document.querySelectorAll("[data-cs]").forEach(i=>i.addEventListener("click",()=>{bo.scale=+i.dataset.cs,Oh(bo)}));const Hh=[["mid","L"],["special","I"],["def","O"]],qi=[1,1];function mv(i){[vt,Vt].forEach((n,s)=>{const r=s+1,a=Math.max(0,n.hp)/n.maxHp;qi[s]=a>qi[s]?a:Math.max(a,qi[s]-i*.35),nt("h"+r).style.width=a*100+"%",nt("g"+r).style.width=qi[s]*100+"%",nt("h"+r).classList.toggle("burn",n.burn>0);const o=nt("e"+r);o.firstElementChild.style.width=n.energy+"%",o.classList.toggle("full",n.energy>=100),[...nt("w"+r).children].forEach((c,l)=>c.classList.toggle("on",l<n.wins))}),nt("timer").textContent=R.training?"∞":Math.ceil(Math.max(0,R.timer));for(const[n,s]of[["tag1",vt],["tag2",Vt]]){const r=nt(n);r.classList.contains("on")&&(rn.set(s.pos.x,s.y+s.tagY,s.pos.z).project(an),r.style.transform=`translate(calc(${((rn.x*.5+.5)*innerWidth).toFixed(0)}px - 50%), ${((-rn.y*.5+.5)*innerHeight).toFixed(0)}px)`)}const t=n=>vt.cd[n]>0||vt.energy<(An[vt.kind][n].cost||0);[...nt("cds").children].forEach((n,s)=>n.classList.toggle("off",t(Hh[s][0]))),document.body.classList.toggle("dazed",vt.daze>0&&R.phase==="fight"),Vh.update(vt);const e=nt("combo");vt.combo>=2?(e.textContent=vt.combo+" GOLPES",e.style.opacity=1):e.style.opacity=0}const gv={hit:"ACERTOU",block:"BLOQUEADO",perfect:"DEFESA PERFEITA",dodge:"ESQUIVADO",duck:"PASSOU POR CIMA",armor:"ABSORVIDO",whiff:"ERROU",grab:"AGARROU",break:"ESCAPOU DO AGARRÃO",veil:"ABSORVIDO PELO VÉU"},xr=i=>typeof i=="number"?(i>0?"+":"")+i:i;function vv(i){const t=(i.f||i.att)===vt;if(i.t==="move"){if(!t)return;const e=i.m,n=Dh(e);nt("dMove").textContent=(Jo[vt.lastDir]||"")+e.name+(e.h?" · "+Ph[e.h]:""),nt("dFrames").textContent=n?`prep ${n.startup} · ativo ${n.active} · recup ${n.recovery}`+(n.onBlock!==void 0?` · no acerto ${xr(n.onHit)} · no bloqueio ${xr(n.onBlock)}`:""):"",nt("dRes").textContent=""}else{let e=(t?"VOCÊ: ":"ADVERSÁRIO: ")+(i.m&&i.m.name||"Golpe")+" · "+gv[i.res]+(i.dmg?" · dano "+i.dmg.toFixed(1):"");i.res==="hit"&&(e+=` · ${i.hits} golpe${i.hits>1?"s":""} · total ${i.total.toFixed(1)}`+(i.hits>1?i.sure?" · GARANTIDO":" · NÃO GARANTIDO":"")+(i.counter?" · CONTRA-ATAQUE":"")),nt(t?"dRes":"dOpp").textContent=e}}let or=0,Il=!1;function _v(i){const t=R.dummy;if(t==="cpu")return qo.think(i,R);const e=ri();if(t==="parado")return e;if(t==="ataca"){const n=vt.pos.x-Vt.pos.x,s=vt.pos.z-Vt.pos.z,r=Math.hypot(n,s);return r>1.7?e.move.set(n/r,0,s/r):(or-=i)<=0&&(or=1.2,e.press="J"),e}return(or-=i)<=0&&(or=.7,Il=Math.random()<.5),e.block=!0,e.down=t==="baixo"||t==="misto"&&Il,t==="misto"&&Vt.state==="grabbed"&&Math.random()<i*4&&(e.press="J"),e}function cs(i){R.dummy=i,document.querySelectorAll("[data-dm]").forEach(t=>t.classList.toggle("sel",t.dataset.dm===i))}document.querySelectorAll("[data-dm]").forEach(i=>i.addEventListener("click",()=>cs(i.dataset.dm)));let To="luta";const Gh=i=>{To=i,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("sel",t.dataset.mode===i))};document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",()=>Gh(i.dataset.mode)));Gh("luta");const Mr={J:"LEVE",K:"PESADO",L:"PODER 1",I:"PODER 2",O:"PODER 3"},Jo={f:"→ ",b:"← ",d:"↓ ",n:""},xv=i=>i.length===2?Jo[i[0]]+Mr[i[1]]:Mr[i];function Wh(i){const t=An[i],e=(s,r)=>{const a=Dh(r)||{};return`<tr><td>${s}</td><td>${r.name}</td><td>${r.grab?"AGARRÃO":Ph[r.h]||"—"}</td><td>${a.startup??"—"}</td><td>${xr(a.onHit)??"—"}</td><td>${xr(a.onBlock)??"—"}</td></tr>`};let n="<table><tr><th>COMANDO</th><th>GOLPE</th><th>ALTURA</th><th>PREP.</th><th>ACERTO</th><th>BLOQUEIO</th></tr>";for(const s of["J","K"])for(const r of["n","f","b","d"])n+=e(Jo[r]+Mr[s],t[Mo[s][r]]);for(const s of["L","I","O"])n+=e(Mr[s],t[Mo[s].n]);return n+=e("→ + toque na DEFESA",t.grab)+"</table>",n+="<p><b>COMBOS</b><br>"+yo[i].map(s=>`<b>${s.name}:</b> ${s.cmd.map(xv).join(", ")} — <i>${s.note}</i>`).join("<br>")+"</p>",n+="<p><b>→</b> na direção do adversário · <b>←</b> para longe dele · <b>↓</b> direcional para baixo (tem prioridade: na diagonal também vale como baixo). Números em quadros (60/s): positivo = vantagem de quem bate.<br><b>DEFESA</b> segurar = defesa alta (para golpes altos e médios) · <b>↓ + DEFESA</b> = defesa baixa (para golpes baixos; golpes altos passam por cima, médios acertam).<br><b>ESQUIVA</b> toque rápido na DEFESA com o direcional para o lado ou para trás · golpes giratórios acompanham a esquiva.<br><b>DEFESA PERFEITA</b> levantar a defesa no instante do golpe desequilibra o atacante · <b>AGARRÃO</b> fura a defesa; aperte LEVE ou PESADO para se soltar.</p>",n}nt("movesBtn").addEventListener("click",()=>{const i=nt("moves"),t=i.style.display!=="block";t&&(i.innerHTML=Wh(vt.kind)),i.style.display=t?"block":"none"});for(const i of["tag1","tag2"])nt(i).addEventListener("animationend",t=>t.target.classList.remove("on"));function Dr(){for(const i of R.projectiles)Ae.remove(i.mesh);R.projectiles.length=0}function Ir(){const i=R.cine;if(i){i.tor&&Ae.remove(i.tor);for(const t of i.ghosts)Ae.remove(t);i.def.spinExtra=0,R.cine=null,nt("bars").classList.remove("on"),nt("hud").classList.remove("cine"),document.body.classList.remove("night")}}function Xh(){Ir(),Dr(),vt.reset(-3,0,Math.PI/2),Vt.reset(3,0,-Math.PI/2),vt.model.snap(vt,R.time),Vt.model.snap(Vt,R.time),qi[0]=qi[1]=1,De.set(0,0,1),R.timer=60,R.phase="intro",R.pt=0,R.slow=1,Tn=null,on.clear(),yr[0]=vt.hp,yr[1]=Vt.hp;const i=!R.training&&R.round===1,t=vt.wins===1&&Vt.wins===1;R.cues=R.training?[[0,R.tutorial?"TUTORIAL":"TREINO",1,null],[.9,"LUTE!",.7,"go"]]:i?[[0,`ROUND 1<small>${Pn[vt.kind].short} × ${Pn[Vt.kind].short}</small>`,1,null],[1.1,"3",.5,"count"],[1.7,"2",.5,"count"],[2.3,"1",.5,"count"],[2.9,"LUTE!",.7,"go"]]:[[0,`ROUND ${R.round}`+(t?"<small>ROUND FINAL</small>":""),1.2,null],[1.4,"LUTE!",.7,"go"]],R.fightAt=R.training?1:i?2.9:1.5,R.longIntro=i}const yr=[0,0],Ul=()=>({dmg:0,tries:0,hits:0,combo:0,blocks:0,perfect:0,dodges:0,grabs:0,supers:0});let Sr="random";const Ta=["random",...xn];function qh(i){if(Sr!=="random")return Sr;const t=xn.filter(e=>e!==i);return t[Math.floor(Math.random()*t.length)]}function Ur(i,t=!1,e=null,n=!1){xn.includes(e)||(e=qh(i)),Ir(),Dr(),Yo(i,e),t=t||n,R.training=t,document.body.classList.toggle("training",t),R.events.length=0,nt("moves").style.display="none",R.tutorial=n,document.body.classList.toggle("tutorial",n),nt("tut").classList.remove("ok"),(n||R.dummy==="ataca")&&cs("parado"),R.stats=[Ul(),Ul()],R.matchT=0;for(const s of["opts","how"])nt(s).style.display="none";for(const s of["dMove","dFrames","dRes","dOpp"])nt(s).textContent="";nt("dMove").textContent="MODO TREINO · pausa: boneco e lista de golpes";for(const s of[vt,Vt])s.wins=0,s.energy=0;nt("n1").textContent=vt.name,nt("n2").textContent=Vt.name+(t?" · BONECO":" · CPU"),nt("cds").innerHTML=Hh.map(([s,r])=>`<span>${r} · ${An[i][s].name.toUpperCase()}</span>`).join(""),Vh.setKind(i),nt("menu").style.display="none",nt("over").style.display="none",nt("hud").style.display="block",R.mode="fight",Ci(!1),R.round=1,Xh(),R.tut=n?{i:0,ok:0,n:0,mv:0,fin:!1}:null,n&&Zh(),Bt.music("fight")}function Nl(i,t){if(Tn=i,i&&i.wins++,R.phase="ko",R.pt=0,Pr(t,2.2),Bt.play("ko"),t==="K.O.")for(const e of[vt,Vt])e!==i&&Bt.voice(e.kind,"ko",!0)}nt("again").addEventListener("click",()=>Ur(vt.kind,R.training,Vt.kind,R.tutorial));const Mv=i=>{Sr=i,nt("oppBtn").textContent=i==="random"?"ALEATÓRIO":i==="mula"?"MULA":i.toUpperCase()};nt("oppBtn").addEventListener("click",()=>Mv(Ta[(Ta.indexOf(Sr)+1)%Ta.length]));function Yh(){R.training=!1,R.tutorial=!1,R.tut=null,document.body.classList.remove("training","dazed","tutorial"),Bt.music("menu"),R.dummy==="ataca"&&cs("parado"),R.mode="menu",Ci(!1),Ir(),Dr(),nt("over").style.display="none",nt("hud").style.display="none",nt("menu").style.display="flex",nt("msg").classList.remove("on"),R.slow=1;for(const i of[vt,Vt])i.energy=0;Ko()}nt("tomenu").addEventListener("click",Yh);let Cn=(()=>{try{const i=localStorage.getItem("fs.sel");return xn.includes(i)?i:"curupira"}catch{return"curupira"}})();const $o={},Er=i=>kh("portraits/"+i,Pn[i].svg);for(const i of xn){const t=document.createElement("button");t.className="face",t.dataset.k=i,t.setAttribute("aria-label",Wo[i].name);const e=document.createElement("b");e.textContent=Pn[i].short,t.append(kh((Is("faces/"+i)?"faces/":"portraits/")+i,Pn[i].svg),e),t.addEventListener("click",()=>{Cn===i&&t.classList.contains("on")?Or():Nr(i)}),nt("faces").append(t),$o[i]=t}function Nr(i,t=!1){Cn=i;try{localStorage.setItem("fs.sel",i)}catch{}const e=Pn[i];for(const n of xn)$o[n].classList.toggle("on",n===i);nt("selArt").replaceChildren(Er(i)),nt("selArt").style.setProperty("--glow",e.color+"70"),nt("selName").textContent=Wo[i].name,nt("selTags").textContent=e.tags,nt("selDiff").innerHTML="★".repeat(e.diff)+"<i>"+"★".repeat(3-e.diff)+"</i> "+Dl[e.diff],nt("selAttrs").innerHTML=uv.map((n,s)=>`<dt>${n}</dt><dd><i style="width:${e.attrs[s]}%"></i></dd>`).join(""),nt("selWhy").textContent=e.why,nt("selTips").innerHTML=e.tips.map(n=>`<li>${n}</li>`).join(""),nt("howTips").innerHTML=`<b>${e.short} · ${Dl[e.diff]}</b><br>`+e.tips.join("<br>"),t||Bt.play("sel")}Nr(Cn,!0);function Or(){if(R.mode!=="menu")return;Bt.unlock(),fv(),document.activeElement?.blur?.();const i=qh(Cn);To==="luta"?jh(Cn,i):Ur(Cn,!0,i,To==="tutorial")}nt("fightBtn").addEventListener("click",Or);const Kh=i=>{nt("menu").style.display="none",nt(i).style.display="flex",zr()},Jh=i=>{nt(i).style.display="none",nt("menu").style.display="flex"};nt("optsBtn").addEventListener("click",()=>Kh("opts"));nt("howBtn").addEventListener("click",()=>Kh("how"));document.querySelectorAll(".back").forEach(i=>i.addEventListener("click",()=>Jh(i.closest(".screen").id)));for(const[i,t]of[["menu","bg/menu"],["over","bg/results"]]){const e=Is(t);e&&(nt(i).style.backgroundImage=`linear-gradient(rgba(13,7,6,.55),rgba(13,7,6,.88)), url("${e}")`)}{const i=Is("bg/vs");i&&document.querySelectorAll("#vs .half").forEach(t=>{t.style.backgroundImage=`linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.6)), url("${i}")`})}let kr=0,$h=null;function jh(i,t){Yo(i,t),Ko(),$h=[i,t],nt("menu").style.display="none",nt("vsA").replaceChildren(Er(i)),nt("vsB").replaceChildren(Er(t)),nt("vsNA").textContent=Pn[i].short,nt("vsNB").textContent=Pn[t].short;const e=nt("vs");e.classList.remove("out","on"),e.offsetWidth,e.classList.add("on"),R.mode="vs",kr=2.4,Bt.play("vs")}function Fr(){if(R.mode!=="vs")return;const[i,t]=$h;Ur(i,!1,t),Bt.play("doors");const e=nt("vs");e.classList.add("out"),setTimeout(()=>{e.classList.contains("out")&&e.classList.remove("on","out")},650)}nt("vs").addEventListener("pointerdown",()=>{kr<2.1&&Fr()});addEventListener("keydown",i=>{if(R.mode==="vs"){["Escape","Enter"," "].includes(i.key)&&kr<2.2&&(i.preventDefault(),Fr());return}if(R.mode!=="menu")return;for(const s of["opts","how"])if(nt(s).style.display==="flex"){i.key==="Escape"&&Jh(s);return}if(nt("menu").style.display==="none")return;const t=i.key.toLowerCase(),e=xn.indexOf(Cn),n=t==="arrowright"||t==="d"?1:t==="arrowleft"||t==="a"?-1:t==="arrowdown"||t==="s"?2:t==="arrowup"||t==="w"?-2:0;n?(i.preventDefault(),Nr(xn[(e+n+xn.length)%xn.length]),$o[Cn].focus()):t==="enter"&&!(document.activeElement instanceof HTMLButtonElement)&&(i.preventDefault(),Or())});const yv=[["DANO CAUSADO","dmg",i=>Math.round(i)],["GOLPES ACERTADOS","hits"],["PRECISÃO","acc",i=>i+"%"],["MAIOR COMBO","combo"],["DEFESAS","blocks"],["DEFESAS PERFEITAS","perfect"],["ESQUIVAS","dodges"],["AGARRÕES","grabs"],["PODER FOLCLÓRICO","supers"]];function Sv(){const i=Tn===vt,t=R.stats,e=nt("over");e.classList.toggle("lose",!i),nt("oArt").replaceChildren(Er(vt.kind)),nt("overT").textContent=i?"VITÓRIA":"DERROTA";const n=Math.round(R.matchT);nt("overS").textContent=`${Tn.name} VENCE · ${vt.wins} × ${Vt.wins} · ${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;for(const r of t)r.acc=r.tries?Math.min(100,Math.round(100*r.hits/r.tries)):0;let s=`<tr><th></th><th>${Pn[vt.kind].short}<small>VOCÊ</small></th><th>${Pn[Vt.kind].short}<small>CPU</small></th></tr>`;for(const[r,a,o=c=>c]of yv){const c=t[0][a],l=t[1][a];s+=`<tr><td>${r}</td><td${c>l?' class="b"':""}>${o(c)}</td><td${l>c?' class="b"':""}>${o(l)}</td></tr>`}nt("stats").innerHTML=s,e.style.display="flex",Bt.music(null),Bt.play(i?"win":"lose")}function Ev(i){if(R.mode!=="fight"||!R.stats)return;const t=R.stats;if(i.t==="move"){const s=i.f===vt?0:1;if(i.m.name==="Esquiva lateral"||i.m.name==="Recuo"){t[s].dodges++,Bt.play("dodge");return}t[s].tries++,Bt.play("whoosh",.9+Math.random()*.2),Math.random()<.35&&Bt.voice(i.f.kind,"attack");return}const e=i.att===vt?0:1,n=1-e;switch(i.res){case"hit":t[e].hits++,t[e].combo=Math.max(t[e].combo,i.hits||1),Bt.play(i.dmg>=8?"hitH":"hitL"),Bt.voice(i.def.kind,"hurt");break;case"block":t[n].blocks++,Bt.play("block");break;case"perfect":t[n].blocks++,t[n].perfect++,Bt.play("perfect");break;case"veil":Bt.play("perfect");break;case"grab":t[e].hits++,t[e].grabs++,Bt.play("grab");break;case"break":case"armor":Bt.play("block");break;case"dodge":case"duck":Bt.play("dodge");break}}const wa=(i,t)=>t.some(e=>An[vt.kind][e]===i),xs=i=>i.t==="move"&&i.f===vt,Ai=[{t:"MOVER-SE",k:"W A S D movem em 3D: W/S andam em profundidade",m:"Arraste o lado esquerdo da tela",move:!0},{t:"COMBO LEVE",k:"Chegue perto e aperte J, J, J",m:"Chegue perto e toque 3× no botão grande",ev:i=>i.t==="hit"&&i.att===vt&&i.res==="hit"&&i.hits>=3},{t:"ATAQUE PESADO",k:"K: mais lento, mais forte",m:"Botão ao lado do grande",ev:i=>xs(i)&&wa(i.m,["heavy","fHeavy","bHeavy","dHeavy"])},{t:"GOLPE BAIXO",k:"S + J ou S + K (S manda, mesmo na diagonal)",m:"Direcional para baixo + ataque",ev:i=>xs(i)&&i.m.h==="low"},{t:"GOLPE DE AVANÇO",k:"Direção do adversário + J ou K",m:"Direcional na direção do boneco + ataque",ev:i=>xs(i)&&wa(i.m,["fLight","fHeavy"])},{t:"DEFESA",k:"Segure Shift: o boneco vai atacar (2 defesas)",m:"Segure o botão de defesa: o boneco vai atacar (2 defesas)",dummy:"ataca",need:2,ev:i=>i.t==="hit"&&i.att===Vt&&(i.res==="block"||i.res==="perfect")},{t:"ESQUIVA",k:"Toque rápido em Shift + lado ou trás",m:"Toque rápido na defesa + direcional para o lado ou para trás",ev:i=>xs(i)&&(i.m.name==="Esquiva lateral"||i.m.name==="Recuo")},{t:"AGARRÃO",k:"Perto: toque rápido em Shift + direção do adversário",m:"Perto: toque na defesa + direcional para o boneco",ev:i=>i.t==="hit"&&i.att===vt&&i.res==="grab"},{t:"PODERES",k:"L, I ou O: golpes sobrenaturais com recarga",m:"Botões de aro colorido",ev:i=>xs(i)&&wa(i.m,["mid","special","def"])},{t:"PODER FOLCLÓRICO",k:"Barra cheia: Espaço",m:"Barra cheia: botão dourado",full:!0}];function Zh(){const i=R.tut,t=Ai[i.i];nt("tutN").textContent=`PASSO ${i.i+1} DE ${Ai.length}`,nt("tutT").textContent=t.t,nt("tutH").textContent=on.touch?t.m:t.k,cs(t.dummy||"parado")}function jo(){R.tut.ok=.8,nt("tut").classList.add("ok"),Bt.play("perfect")}function bv(i){const t=R.tut;if(!t||t.fin||t.ok>0||R.phase!=="fight")return;const e=Ai[t.i];e.ev&&e.ev(i)&&++t.n>=(e.need||1)&&jo()}function Tv(i){const t=R.tut;if(!t||t.fin||R.phase!=="fight")return;if(t.ok>0){if((t.ok-=i)>0)return;t.i++,t.n=0,t.mv=0,t.ok=0,nt("tut").classList.remove("ok"),t.i>=Ai.length?(t.fin=!0,document.body.classList.remove("tutorial"),cs("parado"),Pr("TUTORIAL<small>CONCLUÍDO · CONTINUE TREINANDO</small>",2.6),Bt.play("win")):Zh();return}const e=Ai[t.i];e.move&&R.lastIn&&R.lastIn.move.lengthSq()>.1&&(t.mv+=i)>=1.2&&jo(),e.full&&vt.energy<100&&!R.cine&&(vt.energy=100)}for(const i of["pointerdown","keydown"])addEventListener(i,()=>Bt.unlock(),{capture:!0});document.addEventListener("click",i=>{const t=i.target.closest("button");t&&!t.closest(".face, #touch, .vol")&&Bt.play("ui")},{capture:!0});const wv=[["music","MÚSICA"],["sfx","EFEITOS"],["voice","VOZES"]];document.querySelectorAll(".volbox").forEach(i=>{i.innerHTML=wv.map(([t,e])=>`<div class="vol" data-vol="${t}"><span>${e}</span><button data-d="-1" aria-label="Diminuir ${e}">−</button><i><b></b></i><button data-d="1" aria-label="Aumentar ${e}">+</button><em></em></div>`).join("")});function zr(){document.querySelectorAll(".vol").forEach(i=>{const t=Bt.vol[i.dataset.vol];i.querySelector("i b").style.width=t*100+"%",i.querySelector("em").textContent=Math.round(t*100)+"%"})}document.querySelectorAll(".vol button").forEach(i=>i.addEventListener("click",()=>{const t=i.parentElement.dataset.vol;Bt.unlock(),Bt.setVol(t,Bt.vol[t]+.1*i.dataset.d),zr(),t==="voice"?Bt.voice(Cn,"attack",!0):t==="sfx"&&Bt.play("hitL")}));zr();Bt.music("menu");function Av(){const i=vt,t=Vt;if(i.y>.6||t.y>.6||i.anim==="gone"||t.anim==="gone")return;const e=t.pos.x-i.pos.x,n=t.pos.z-i.pos.z,s=Math.hypot(e,n)||.001,r=i.radius+t.radius;if(s>=r)return;const a=r-s,o=t.mass/(i.mass+t.mass),c=e/s,l=n/s;i.pos.x-=c*a*o,i.pos.z-=l*a*o,t.pos.x+=c*a*(1-o),t.pos.z+=l*a*(1-o)}function Rv(i){for(let t=R.projectiles.length-1;t>=0;t--){const e=R.projectiles[t],n=Lh[e.type],s=e.owner.opp,r=Math.hypot(s.pos.x-e.pos.x,s.pos.z-e.pos.z);let a=!1;if(e.type==="roots")if(e.t+=i,!e.hit)e.mesh.userData.set(1,0,R.time),gt.dust(e.pos,16*i,0,0,1.6),e.t>=n.warn&&(e.hit=!0,e.t=0,Bt.play("rootsUp"),gt.dust(e.pos,36,0,0,5),gt.leaves(e.pos,26,5),R.shake=Math.max(R.shake,.3),s.y<.4&&r<n.hitR+s.radius&&(s.receive(e.owner,{...n,dirv:Rn().subVectors(s.pos,e.owner.pos).setY(0).normalize()}),e.held=s.state==="rooted",e.held&&e.mesh.position.copy(s.pos).setY(0)));else{const o=e.t<.4||e.held&&s.state==="rooted";e.up+=((o?1:0)-e.up)*Math.min(1,i*(o?24:8)),e.mesh.userData.set(0,e.up,R.time),a=!o&&e.up<.04}else{e.life-=i,e.pos.addScaledVector(e.vel,i),e.mesh.position.set(e.pos.x,e.h,e.pos.z);const o=n.life-e.life,c=Math.min(1,e.life/.2,o/.15+.2);if(e.type==="tornado")e.mesh.userData.spin(R.time),e.mesh.scale.setScalar(.85*c),gt.leaves(e.pos,24*i,2.5,.7),gt.dust(e.pos,14*i,0,0,2);else if(e.type==="leaf")e.mesh.rotation.z+=24*i,e.mesh.scale.setScalar(c),gt.leaves({x:e.pos.x,y:e.h,z:e.pos.z},40*i,1.5,.3);else{e.mesh.scale.setScalar((1+o*.3)*c);for(let l=0;l<2;l++)gt.add.emit(e.pos.x+(Math.random()-.5)*1.6,.3+Math.random()*1.6,e.pos.z+(Math.random()-.5)*1.6,0,.8,0,.55,.3,1,.45,.4,0,1,.6,.7)}a=e.life<=0||Math.hypot(e.pos.x,e.pos.z)>Xo+1,!a&&s.y<2&&r<n.hitR+s.radius&&s.receive(e.owner,{...n,dirv:e.vel.clone().normalize()})!=="miss"&&(a=!0,e.type==="wave"?(gt.ring(s.pos,10116351,3,.4),gt.sparks({x:e.pos.x,y:1.2,z:e.pos.z},18,[.7,.4,1])):(gt.leaves(e.pos,30,5),gt.dust(e.pos,20,0,0,4)))}a&&(Ae.remove(e.mesh),R.projectiles.splice(t,1))}}function Cv(i){const t=R.cine,{att:e,def:n,d:s}=t;t.t+=i;const r=t.t,a=(o,c)=>r>=c&&!t.s[o]&&(t.s[o]=!0);if(e.kind==="saci"){if(a("v",0)&&(e.anim="vanish",gt.leaves(e.pos,30,3,.5),gt.smoke({x:e.pos.x,y:1,z:e.pos.z},12)),a("g",.3)&&(e.anim="gone",t.tor=Eh(),t.tor.position.copy(n.pos).setY(0),Ae.add(t.tor)),t.tor&&!t.s.hit){const o=.8+n.radius,c=pn((r-.5)/.9);t.tor.scale.setScalar(.001+o*pn((r-.3)/.6)),t.tor.userData.spin(R.time),n.y=t.y0+(2.6-t.y0)*c,n.anim="air",n.spinExtra+=13*i*c,gt.leaves(n.pos,90*i,5,1.6),gt.dust(n.pos,30*i,0,0,4),R.shake=Math.max(R.shake,.12)}if(r>=1.5&&!t.s.hit){a("a",1.5)&&(t.S=n.pos.clone().addScaledVector(s,-3.4),e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="dive",e.pos.copy(t.S),e.y=7,e.model.snap(e,R.time));const o=Math.min(1,(r-1.5)/.7)**2;e.pos.lerpVectors(t.S,t.E||(t.E=n.pos.clone().addScaledVector(s,-.5)),o),e.y=7+(n.y+.5-7)*o,gt.norm.emit(e.pos.x,e.y+.8,e.pos.z,0,0,0,.6,.55,.45,.6,.3,0,0,.5,.3)}if(a("hit",2.2)){Ae.remove(t.tor),t.tor=null,n.hp-=38,n.spinExtra=0,n.setState("air"),n.vy=-13,n.vel.copy(s).multiplyScalar(3.5),n.model.snap(n,R.time);const o=n.pos;gt.ring(o,15259832,8,.6),gt.ring(o,16777215,4,.35),gt.dust(o,90,0,0,8),gt.leaves(o,90,9),gt.sparks({x:o.x,y:n.y,z:o.z},40),R.shake=1,R.hitstop=.2,Es(.5),t.L=n.pos.clone().addScaledVector(s,-1.8)}t.s.hit&&(e.y=Math.max(0,e.y-11*i),e.pos.lerp(t.L,Math.min(1,i*6)),e.y===0&&(e.anim="idle"),n.update(i,ri())),r>=3.2&&cr()}else if(e.kind==="curupira"){if(a("p",0)&&(e.anim="superprep",t.tor=bh(),t.tor.position.copy(n.pos).setY(0),t.tor.scale.setScalar(.9+n.radius*.9),Ae.add(t.tor)),!t.s.hit){const o=pn((r-.4)/.25);t.tor.userData.set(r<.4?1:0,o*(1+.25*pn((r-.7)/.6)),R.time),r<.4?(n.y=Math.max(0,n.y-8*i),gt.leaves(e.pos,60*i,4,1.2)):(n.anim="hit",n.y=.5*pn((r-.5)/.6),gt.dust(n.pos,30*i,0,0,3),R.shake=Math.max(R.shake,.1))}if(a("r",.4)&&(n.hp-=10,gt.dust(n.pos,60,0,0,6),gt.leaves(n.pos,50,6),gt.ring(n.pos,8376394,4,.4),R.shake=.6,R.hitstop=.08,R.tag(n,"PRESO!")),a("j",.9)&&(e.anim="leap",t.S=n.pos.clone().addScaledVector(s,-3.2),gt.dust(e.pos,30,0,0,4),gt.leaves(e.pos,30,5)),r>=.9&&r<1.5){const o=pn((r-.9)/.6);e.pos.lerpVectors(t.from,t.S,o),e.y=6.5*(1-(1-o)*(1-o)),e.faceOpp(8*i)}if(r>=1.5&&!t.s.hit){a("a",1.5)&&(e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="dive",e.model.snap(e,R.time));const o=Math.min(1,(r-1.5)/.6)**2;e.pos.lerpVectors(t.S,t.E||(t.E=n.pos.clone().addScaledVector(s,-.5)),o),e.y=6.5+(n.y+.7-6.5)*o,gt.leaves({x:e.pos.x,y:e.y+.8,z:e.pos.z},70*i,2,.6)}if(a("hit",2.1)){n.hp-=28,n.setState("air"),n.vy=6,n.vel.copy(s).multiplyScalar(4),n.model.snap(n,R.time);const o=n.pos;gt.ring(o,10215520,8,.6),gt.ring(o,16777215,4,.35),gt.dust(o,90,0,0,8),gt.leaves(o,110,9),gt.sparks({x:o.x,y:n.y+1,z:o.z},40,[.7,1,.4]),R.shake=1,R.hitstop=.2,Es(.5),t.L=n.pos.clone().addScaledVector(s,-1.8),t.up=1.25}t.s.hit&&(t.up=Math.max(0,t.up-i*4),t.tor&&t.tor.userData.set(0,t.up,R.time),e.y=Math.max(0,e.y-11*i),e.pos.lerp(t.L,Math.min(1,i*6)),e.y===0&&(e.anim="idle"),n.update(i,ri())),r>=3.1&&cr()}else if(e.kind==="cuca"){if(a("p",0)){e.anim="superprep",document.body.classList.add("night");const o=new He({color:9063935,transparent:!0,opacity:0,depthWrite:!1});t.gmat=o;for(let c=0;c<4;c++){const l=e.model.root.clone(!0);l.traverse(h=>{h.isMesh?(h.material=o,h.castShadow=!1):h.isLight&&(h.visible=!1)}),l.visible=!1,Ae.add(l),t.ghosts.push(l)}}if(r<.5&&(n.y=Math.max(0,n.y-8*i),e.faceOpp(4*i),gt.add.emit(e.pos.x+(Math.random()-.5),.4+Math.random()*2,e.pos.z+(Math.random()-.5),0,1.5,0,.6,.3,1,.5,.5,0,1,.6,.8)),a("v",.5)&&(e.anim="vanish",gt.smoke({x:e.pos.x,y:1,z:e.pos.z},14,1.2)),a("g",.8)&&(e.anim="gone"),r>=.6&&r<1.7){const o=Math.min(1,(r-.6)/.25,(1.7-r)/.2),c=3.1-pn((r-.6)/1.1)*1.2+n.radius;t.gmat.opacity=.5*o,n.anim="hit",t.ghosts.forEach((l,h)=>{const u=r*3.4+h*1.5708;l.visible=!0,l.position.set(n.pos.x+Math.sin(u)*c,0,n.pos.z+Math.cos(u)*c),l.rotation.y=u+Math.PI}),R.shake=Math.max(R.shake,.06)}if(a("ap",1.7)){for(const o of t.ghosts)o.visible=!1;e.pos.copy(n.pos).addScaledVector(s,-(e.radius+n.radius+.15)),e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="grabHold",e.model.snap(e,R.time),n.hp-=12,gt.smoke({x:e.pos.x,y:1,z:e.pos.z},12,1.2),gt.sparks({x:n.pos.x,y:1.2,z:n.pos.z},24,[.7,.4,1]),R.shake=.6,R.hitstop=.1,R.tag(n,"AGARRADO!"),t.tor=Ng(),t.tor.position.set(n.pos.x,1.3,n.pos.z),t.tor.rotation.y=Math.atan2(-s.x,-s.z),t.tor.scale.setScalar(.01),Ae.add(t.tor)}if(r>=1.7&&!t.s.hit&&(n.anim="hit",n.y=.45*pn((r-1.7)/.4),t.tor.scale.setScalar((.75+n.radius*.55)*pn((r-1.7)/.35)),t.tor.userData.open(1-pn((r-2.25)/.15)),t.tor.userData.fade(1),t.tor.position.y=1.3+n.y),a("hit",2.4)){e.anim="grabThrow",n.hp-=26,n.setState("air"),n.vy=7.5,n.vel.copy(s).multiplyScalar(5),n.model.snap(n,R.time);const o={x:n.pos.x,y:n.y+1,z:n.pos.z};gt.sparks(o,60,[.75,.45,1]),gt.smoke(o,18,1.4),gt.ring(n.pos,9063935,8,.6),gt.ring(n.pos,15259903,4,.35),R.shake=1,R.hitstop=.2,Es(.5),document.body.classList.remove("night")}t.s.hit&&(t.tor&&t.tor.userData.fade(Math.max(0,1-(r-2.4)/.35)),r>2.8&&(e.anim="idle"),n.update(i,ri())),r>=3.3&&cr()}else{const o=e.model.flamePos;if(a("p",0)&&(e.anim="superprep"),r<1.2&&(e.faceOpp(4*i),n.y=Math.max(0,n.y-8*i),gt.fire(o,260*i,.35,4.5,1.3),gt.embers(o,80*i,.5,5),R.shake=Math.max(R.shake,.2)),a("c",1.2)&&(e.faceOpp(),s.subVectors(n.pos,e.pos).setY(0).normalize(),t.from.copy(e.pos),t.to=n.pos.clone().addScaledVector(s,-(e.radius+n.radius+.1)),e.anim="charge"),r>=1.2&&r<1.7&&(e.pos.lerpVectors(t.from,t.to,((r-1.2)/.5)**2),gt.fire(o,200*i,.4,3,1.2),gt.embers(o,60*i,.4,5),gt.dust(e.pos,70*i,-s.x,-s.z,5),R.shake=Math.max(R.shake,.3)),a("h",1.7)){e.pos.copy(t.to),e.anim="idle",n.hp-=24,n.burn=3,n.setState("air"),n.vy=9,n.vel.copy(s).multiplyScalar(6.5),n.model.snap(n,R.time);const c={x:n.pos.x,y:1.2,z:n.pos.z};gt.sparks(c,50,[1,.5,.15]),gt.fire(c,60,.6,4,1.2),R.shake=.9,R.hitstop=.16}if(t.s.h&&n.update(i,ri()),a("x",2.4)){n.hp-=16,n.state==="air"&&(n.vy=7);const c={x:n.pos.x,y:n.y+.8,z:n.pos.z};gt.fire(c,170,1.3,6,1.9),gt.embers(c,120,.8,9),gt.sparks(c,60,[1,.6,.2]),gt.smoke(c,25,1.6),gt.ring(n.pos,16742954,9,.6),gt.ring(n.pos,16767392,5,.4),R.shake=1,R.hitstop=.12,Es(.6)}r>=3.3&&cr()}}function cr(){const i=R.cine.att;i.y=0,i.invuln=.3,i.setState("idle"),Ir()}const Aa=Rn(0,3,12),Ra=Rn(0,1.3,0),rn=Rn();function Lv(i,t){const e=vt,n=Vt,s=t?1:Math.min(1,i*5);if(R.mode!=="fight"){const r=R.time*.12;rn.set(Math.sin(r)*9.5,2.5,Math.cos(r)*9.5),Aa.lerp(rn,s),Ra.lerp(rn.set(0,1.3,0),s)}else{const r=n.pos.x-e.pos.x,a=n.pos.z-e.pos.z,o=Math.hypot(r,a);if(R.cine){const m=.45*i,d=Math.cos(m),E=Math.sin(m),b=De.x;De.x=b*d-De.z*E,De.z=b*E+De.z*d}else o>.6&&e.anim!=="gone"&&n.anim!=="gone"&&(rn.set(-a/o,0,r/o),rn.dot(De)<0&&rn.negate(),De.lerp(rn,Math.min(1,i*3.5)).normalize());const c=Math.max(e.y,n.y),l=R.cine?8.5+c*.5:Math.max(6.6,Math.min(14,5.2+o*.8)),h=(e.pos.x+n.pos.x)/2,u=(e.pos.z+n.pos.z)/2;let f=De.x,p=De.z,g=0;if(R.phase==="intro"&&R.longIntro){g=1-pn(R.pt/2.6);const m=g*1.1,d=Math.cos(m),E=Math.sin(m);f=De.x*d-De.z*E,p=De.x*E+De.z*d}const v=l+3*g;Aa.lerp(rn.set(h+f*v,2.3+c*.25+l*.06+1.6*g,u+p*v),s),Ra.lerp(rn.set(h,1.25+c*.4,u),s)}if(an.position.copy(Aa),R.shake>.01){const r=R.shake*.16;an.position.x+=(Math.random()-.5)*r,an.position.y+=(Math.random()-.5)*r,an.position.z+=(Math.random()-.5)*r}if(an.lookAt(Ra),R.mode==="fight"&&vt.daze>0){const r=Math.min(1,vt.daze/.3);an.rotateZ(Math.sin(R.time*6)*.08*r),an.position.y+=Math.sin(R.time*9)*.12*r}}const Pv=new Rg;function Qh(i){R.time+=i,R.shake=Math.max(0,R.shake-i*2.2),Eo>0&&(Eo-=i)<=0&&nt("msg").classList.remove("on");let t=i*R.slow;if(R.hitstop>0&&(R.hitstop-=i,t=0),R.mode!=="fight"){for(const e of[vt,Vt])e.update(t,ri());R.mode==="vs"&&(kr-=i)<=0&&Fr()}else{if(R.cine)Cv(t);else{const e=R.phase==="fight",n=e?dv():ri();R.lastIn=n,vt.update(t,n),Vt.update(t,e?R.training?_v(t):qo.think(t,R):ri()),Rv(t),Av()}if(R.pt+=i,[vt,Vt].forEach((e,n)=>{const s=Math.max(0,e.hp),r=yr[n]-s;r>0&&R.phase!=="intro"&&(R.stats[1-n].dmg+=r,R.cine&&r>=8&&Bt.play("hitH")),yr[n]=s}),R.phase==="fight"&&!R.cine&&(R.matchT+=t),R.phase==="intro"){for(;R.cues.length&&R.pt>=R.cues[0][0];){const[,e,n,s]=R.cues.shift();Pr(e,n),s&&Bt.play(s)}R.pt>=R.fightAt&&(R.phase="fight",on.clear())}else if(R.phase==="fight"&&!R.cine&&R.training)for(const e of[vt,Vt])e.hp=Math.max(1,e.hp),e.state==="idle"&&e.opp.comboT<=0&&(e.hp=Math.min(e.maxHp,e.hp+45*t)),e.gain(8*t);else if(R.phase==="fight"&&!R.cine){R.timer-=t;const e=vt.hp<=0,n=Vt.hp<=0;if(e||n)Nl(e&&n?null:e?Vt:vt,e&&n?"EMPATE":"K.O.");else if(R.timer<=0){const s=vt.hp/vt.maxHp,r=Vt.hp/Vt.maxHp;Nl(s===r?null:s>r?vt:Vt,s===r?"EMPATE":"TEMPO!")}}else R.phase==="ko"&&(R.slow=R.pt<1?.3:1,Tn&&R.pt>1.3&&Tn.state==="idle"&&!R.cine&&(Tn.setState("win"),Bt.voice(Tn.kind,"win",!0)),R.pt>3.6&&!R.cine&&(Tn&&Tn.wins>=2?(R.phase="over",Sv()):(R.round++,Xh())));mv(i),R.tutorial&&Tv(i)}for(const e of[vt,Vt]){const n=e.model;if(n.root.position.set(e.pos.x,e.y,e.pos.z),n.root.rotation.y=e.facing,n.update(e,t,R.time),e.veil>0){e.veilMesh||(e.veilMesh=new ae(new Ri(1,20,14),new He({color:6283471,transparent:!0,opacity:.2,depthWrite:!1,blending:Ji,fog:!1})),Ae.add(e.veilMesh));const s=e.veilMesh;s.visible=!0,s.position.set(e.pos.x,e.y+1.15,e.pos.z),s.scale.set(1.15+e.radius*.5,1.45,1.15+e.radius*.5),s.rotation.y=R.time*2,s.material.opacity=e.veil<.5?.1+.12*Math.abs(Math.sin(R.time*22)):.2+.05*Math.sin(R.time*6)}else e.veilMesh&&(e.veilMesh.visible=!1);if(e.daze>0&&t>0){const s=R.time*9;gt.add.emit(e.pos.x+Math.sin(s)*.35,e.y+e.tagY-.25,e.pos.z+Math.cos(s)*.35,0,.3,0,.7,.4,1,.3,.35,0,1,.5,.9)}if(n.flamePos&&t>0){const s=n.flameK;gt.fire(n.flamePos,95*t*s,.1+.05*s,2+s*.6,.55+.25*s),Math.random()<t*8*s&&gt.embers(n.flamePos,1,.15,1.5)}}Bh.update(i,R.time),gt.update(t||i*.15)}let Ca=!0;yn.setAnimationLoop(()=>{const i=Pv.getDelta(),t=Math.min(.05,i);pv(on.frame());const e=R.mode==="fight"&&R.phase!=="over"&&!R.paused;document.body.classList.toggle("playing",e),(!e||R.phase!=="fight"||R.cine)&&on.clear();const n=on.touch&&innerHeight>innerWidth;if(!R.paused&&!n&&Qh(t),Lv(t,Ca),yn.render(Ae,an),bi.tick(i),Ca){Ca=!1;const s=nt("boot");s.classList.add("hide"),setTimeout(()=>s.remove(),600)}});"serviceWorker"in navigator&&!window.Capacitor&&navigator.serviceWorker.register("./sw.js").catch(()=>{});R.input=on;R.quality=bi;R.setPause=Ci;R.step=Qh;R.startMatch=Ur;R.vsIntro=jh;R.vsGo=Fr;R.pick=Nr;R.go=Or;R.audio=Bt;R.TUT=Ai;Object.defineProperty(R,"selKind",{get:()=>Cn});R.setDummy=cs;R.moveList=Wh;R.AI=Ih;Object.defineProperty(R,"player",{get:()=>vt});Object.defineProperty(R,"cpu",{get:()=>Vt});
