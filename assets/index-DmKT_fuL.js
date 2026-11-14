(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="170",lh=0,Eo=1,hh=2,Xc=1,qc=2,Cn=3,jn=0,Be=1,ve=2,Jn=0,di=1,Fi=2,bo=3,To=4,uh=5,ci=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,vh=202,xh=203,ta=204,ea=205,Mh=206,yh=207,Sh=208,Eh=209,bh=210,Th=211,wh=212,Ah=213,Rh=214,na=0,ia=1,sa=2,ki=3,ra=4,aa=5,oa=6,ca=7,Yc=0,Ch=1,Lh=2,$n=0,Ph=1,Dh=2,Ih=3,Kc=4,Uh=5,Nh=6,Oh=7,Jc=300,zi=301,Bi=302,la=303,ha=304,ir=306,ua=1e3,hi=1001,js=1002,dn=1003,Fh=1004,xs=1005,_n=1006,pr=1007,ui=1008,Nn=1009,$c=1010,jc=1011,hs=1012,Ka=1013,pi=1014,Pn=1015,ds=1016,Ja=1017,$a=1018,Hi=1020,Zc=35902,Qc=1021,tl=1022,hn=1023,el=1024,nl=1025,Ni=1026,Vi=1027,il=1028,ja=1029,sl=1030,Za=1031,Qa=1033,Xs=33776,qs=33777,Ys=33778,Ks=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,_a=37492,va=37496,xa=37808,Ma=37809,ya=37810,Sa=37811,Ea=37812,ba=37813,Ta=37814,wa=37815,Aa=37816,Ra=37817,Ca=37818,La=37819,Pa=37820,Da=37821,Js=36492,Ia=36494,Ua=36495,rl=36283,Na=36284,Oa=36285,Fa=36286,kh=3200,zh=3201,al=0,Bh=1,qn="",We="srgb",qi="srgb-linear",sr="linear",oe="srgb",xi=7680,wo=519,Hh=512,Vh=513,Gh=514,ol=515,Wh=516,Xh=517,qh=518,Yh=519,Ao=35044,Ro="300 es",Dn=2e3,Zs=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,ka=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function Kh(i,t){return(i%t+t)%t}function gr(i,t,e){return(1-e)*i+e*t}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,a,o,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],b=s[4],v=s[7],U=s[2],w=s[5],A=s[8];return r[0]=a*_+o*E+c*U,r[3]=a*m+o*b+c*w,r[6]=a*f+o*v+c*A,r[1]=l*_+h*E+u*U,r[4]=l*m+h*b+u*w,r[7]=l*f+h*v+u*A,r[2]=d*_+p*E+g*U,r[5]=d*m+p*b+g*w,r[8]=d*f+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_r.makeScale(t,e)),this}rotate(t){return this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new kt;function cl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){const i=us("canvas");return i.style.display="block",i}const Co={};function rs(i){i in Co||(Co[i]=!0,console.warn(i))}function $h(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function jh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?sr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Lo=[.64,.33,.3,.6,.15,.06],Po=[.2126,.7152,.0722],Do=[.3127,.329],Io=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uo=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[qi]:{primaries:Lo,whitePoint:Do,transfer:sr,toXYZ:Io,fromXYZ:Uo,luminanceCoefficients:Po,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:Lo,whitePoint:Do,transfer:oe,toXYZ:Io,fromXYZ:Uo,luminanceCoefficients:Po,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});let Mi;class Qh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=us("canvas")),Mi.width=t.width,Mi.height=t.height;const n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tu=0;class ll{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vr(s[a].image)):r.push(vr(s[a]))}else r=vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;class Ne extends Yi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=hi,s=hi,r=_n,a=ui,o=hn,c=Nn,l=Ne.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=fs(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case js:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case js:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Jc;Ne.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,v=(p+1)/2,U=(f+1)/2,w=(h+d)/4,A=(u+_)/4,C=(g+m)/4;return b>v&&b>U?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=C/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=A/r,s=C/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends Yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ll(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends nu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hl extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iu extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-o;const f=c*d+l*p+h*g+u*_,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const U=Math.sqrt(b),w=Math.atan2(U,f*E);m=Math.sin(m*w)/U,o=Math.sin(o*w)/U}const v=o*E;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-o*p,t[e+2]=l*g+h*p+o*d-c*u,t[e+3]=h*g-o*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(No.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(No.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new L,No=new ps;class ms{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qi),ys.subVectors(this.max,Qi),yi.subVectors(t.a,Qi),Si.subVectors(t.b,Qi),Ei.subVectors(t.c,Qi),zn.subVectors(Si,yi),Bn.subVectors(Ei,Si),Qn.subVectors(yi,Ei);let e=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-Qn.z,Qn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,Qn.z,0,-Qn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-Qn.y,Qn.x,0];return!Mr(e,yi,Si,Ei,ys)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,yi,Si,Ei,ys))?!1:(Ss.crossVectors(zn,Bn),e=[Ss.x,Ss.y,Ss.z],Mr(e,yi,Si,Ei,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new L,new L,new L,new L,new L,new L,new L,new L],nn=new L,Ms=new ms,yi=new L,Si=new L,Ei=new L,zn=new L,Bn=new L,Qn=new L,Qi=new L,ys=new L,Ss=new L,ti=new L;function Mr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);const o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const su=new ms,ts=new L,yr=new L;class rr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);const e=ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(yr)),this.expandByPoint(ts.copy(t.center).sub(yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new L,Sr=new L,Es=new L,Hn=new L,Er=new L,bs=new L,br=new L;class ul{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Sr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Es),o=Hn.dot(this.direction),c=-Hn.dot(Es),l=Hn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sr).addScaledVector(Es,d),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){Er.subVectors(e,t),bs.subVectors(n,t),br.crossVectors(Er,bs);let a=this.direction.dot(br),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const c=o*this.direction.dot(bs.crossVectors(Hn,bs));if(c<0)return null;const l=o*this.direction.dot(Er.cross(Hn));if(l<0||c+l>a)return null;const h=-o*Hn.dot(br);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,r,a,o,c,l,h,u,d,p,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,_,m)}set(t,e,n,s,r,a,o,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/bi.setFromMatrixColumn(t,0).length(),r=1/bi.setFromMatrixColumn(t,1).length(),a=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,au)}lookAt(t,e,n){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Vn.crossVectors(n,Ye),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Vn.crossVectors(n,Ye)),Vn.normalize(),Ts.crossVectors(Ye,Vn),s[0]=Vn.x,s[4]=Ts.x,s[8]=Ye.x,s[1]=Vn.y,s[5]=Ts.y,s[9]=Ye.y,s[2]=Vn.z,s[6]=Ts.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],b=n[7],v=n[11],U=n[15],w=s[0],A=s[4],C=s[8],y=s[12],M=s[1],R=s[5],W=s[9],F=s[13],z=s[2],D=s[6],P=s[10],X=s[14],V=s[3],nt=s[7],J=s[11],et=s[15];return r[0]=a*w+o*M+c*z+l*V,r[4]=a*A+o*R+c*D+l*nt,r[8]=a*C+o*W+c*P+l*J,r[12]=a*y+o*F+c*X+l*et,r[1]=h*w+u*M+d*z+p*V,r[5]=h*A+u*R+d*D+p*nt,r[9]=h*C+u*W+d*P+p*J,r[13]=h*y+u*F+d*X+p*et,r[2]=g*w+_*M+m*z+f*V,r[6]=g*A+_*R+m*D+f*nt,r[10]=g*C+_*W+m*P+f*J,r[14]=g*y+_*F+m*X+f*et,r[3]=E*w+b*M+v*z+U*V,r[7]=E*A+b*R+v*D+U*nt,r[11]=E*C+b*W+v*P+U*J,r[15]=E*y+b*F+v*X+U*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*p-n*c*p)+_*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+m*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=u*m*l-_*d*l+_*c*p-o*m*p-u*c*f+o*d*f,b=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,v=h*_*l-g*u*l+g*o*p-a*_*p-h*o*f+a*u*f,U=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,w=e*E+n*b+s*v+r*U;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=E*A,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*f+n*c*f)*A,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*p-n*c*p)*A,t[4]=b*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*f-e*c*f)*A,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*p+e*c*p)*A,t[8]=v*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*A,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*p-e*o*p)*A,t[12]=U*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,E=c*l,b=c*h,v=c*u,U=n.x,w=n.y,A=n.z;return s[0]=(1-(_+f))*U,s[1]=(p+v)*U,s[2]=(g-b)*U,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(d+f))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+b)*A,s[9]=(m-E)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=bi.set(s[0],s[1],s[2]).length();const a=bi.set(s[4],s[5],s[6]).length(),o=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const l=1/r,h=1/a,u=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Dn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(o===Dn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Zs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,p=(n+s)*h;let g,_;if(o===Dn)g=(a+r)*u,_=-2*u;else if(o===Zs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new L,sn=new me,ru=new L(0,0,0),au=new L(1,1,1),Vn=new L,Ts=new L,Ye=new L,Oo=new me,Fo=new ps;class xn{constructor(t=0,e=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ou=0;const ko=new L,Ti=new ps,wn=new me,ws=new L,es=new L,cu=new L,lu=new ps,zo=new L(1,0,0),Bo=new L(0,1,0),Ho=new L(0,0,1),Vo={type:"added"},hu={type:"removed"},wi={type:"childadded",child:null},Tr={type:"childremoved",child:null};class be extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new L,e=new xn,n=new ps,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new kt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(zo,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(Ho,t)}translateOnAxis(t,e){return ko.copy(t).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zo,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(Ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ws.copy(t):ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(es,ws,this.up):wn.lookAt(ws,es,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(wn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vo),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hu),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vo),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new L(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new L,An=new L,wr=new L,Rn=new L,Ai=new L,Ri=new L,Go=new L,Ar=new L,Rr=new L,Cr=new L,Lr=new ce,Pr=new ce,Dr=new ce;class cn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),An.subVectors(n,e),wr.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(An),c=rn.dot(wr),l=An.dot(An),h=An.dot(wr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(a,Rn.y),c.addScaledVector(o,Rn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Lr.setScalar(0),Pr.setScalar(0),Dr.setScalar(0),Lr.fromBufferAttribute(t,e),Pr.fromBufferAttribute(t,n),Dr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Lr,r.x),a.addScaledVector(Pr,r.y),a.addScaledVector(Dr,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),An.subVectors(t,e),rn.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),rn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ai.subVectors(s,n),Ri.subVectors(r,n),Ar.subVectors(t,n);const c=Ai.dot(Ar),l=Ri.dot(Ar);if(c<=0&&l<=0)return e.copy(n);Rr.subVectors(t,s);const h=Ai.dot(Rr),u=Ri.dot(Rr);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ai,a);Cr.subVectors(t,r);const p=Ai.dot(Cr),g=Ri.dot(Cr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ri,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Go.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Go,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(Ai,a).addScaledVector(Ri,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},As={h:0,s:0,l:0};function Ir(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Kh(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ir(a,r,t+1/3),this.g=Ir(a,r,t),this.b=Ir(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=fl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return te.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Ce(Ie.r*255,0,255))*65536+Math.round(Ce(Ie.g*255,0,255))*256+Math.round(Ce(Ie.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=We){te.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(As);const n=gr(Gn.h,As.h,e),s=gr(Gn.s,As.s,e),r=gr(Gn.l,As.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Xt;Xt.NAMES=fl;let uu=0;class Ki extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=fs(),this.name="",this.blending=di,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oe extends Ki{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new L,Rs=new ft;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ao&&(t.usage=this.usage),t}}class pl extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ml extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let du=0;const Ze=new me,Ur=new be,Ci=new L,Ke=new ms,ns=new ms,Ae=new L;class Fe extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cl(t)?ml:pl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Ke.min,ns.min),Ke.expandByPoint(Ae),Ae.addVectors(Ke.max,ns.max),Ke.expandByPoint(Ae)):(Ke.expandByPoint(ns.min),Ke.expandByPoint(ns.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ae.fromBufferAttribute(o,l),c&&(Ci.fromBufferAttribute(t,l),Ae.add(Ci)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const l=new L,h=new L,u=new L,d=new ft,p=new ft,g=new ft,_=new L,m=new L;function f(C,y,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[C].add(_),o[y].add(_),o[M].add(_),c[C].add(m),c[y].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,y=E.length;C<y;++C){const M=E[C],R=M.start,W=M.count;for(let F=R,z=R+W;F<z;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new L,v=new L,U=new L,w=new L;function A(C){U.fromBufferAttribute(s,C),w.copy(U);const y=o[C];b.copy(y),b.sub(U.multiplyScalar(U.dot(y))).normalize(),v.crossVectors(w,y);const R=v.dot(c[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,R)}for(let C=0,y=E.length;C<y;++C){const M=E[C],R=M.start,W=M.count;for(let F=R,z=R+W;F<z;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new me,ei=new ul,Cs=new rr,Xo=new L,Ls=new L,Ps=new L,Ds=new L,Nr=new L,Is=new L,qo=new L,Us=new L;class ne extends be{constructor(t=new Fe,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Is.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Nr.fromBufferAttribute(u,t),a?Is.addScaledVector(Nr,h):Is.addScaledVector(Nr.sub(e),h))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Cs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Cs,Xo)===null||ei.origin.distanceToSquared(Xo)>(t.far-t.near)**2))&&(Wo.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Wo),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,U=b;v<U;v+=3){const w=o.getX(v),A=o.getX(v+1),C=o.getX(v+2);s=Ns(this,f,t,n,l,h,u,w,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);s=Ns(this,a,t,n,l,h,u,E,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,U=b;v<U;v+=3){const w=v,A=v+1,C=v+2;s=Ns(this,f,t,n,l,h,u,w,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,b=m+1,v=m+2;s=Ns(this,a,t,n,l,h,u,E,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function fu(i,t,e,n,s,r,a,o){let c;if(t.side===Be?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===jn,o),c===null)return null;Us.copy(o),Us.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Us);return l<e.near||l>e.far?null:{distance:l,point:Us.clone(),object:i}}function Ns(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ls),i.getVertexPosition(c,Ps),i.getVertexPosition(l,Ds);const h=fu(i,t,e,n,Ls,Ps,Ds,qo);if(h){const u=new L;cn.getBarycoord(qo,Ls,Ps,Ds,u),s&&(h.uv=cn.getInterpolatedAttribute(s,o,c,l,u,new ft)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,c,l,u,new ft)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};cn.getNormal(Ls,Ps,Ds,d.normal),h.face=d,h.barycoord=u}return h}class Se extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(_,m,f,E,b,v,U,w,A,C,y){const M=v/A,R=U/C,W=v/2,F=U/2,z=w/2,D=A+1,P=C+1;let X=0,V=0;const nt=new L;for(let J=0;J<P;J++){const et=J*R-F;for(let gt=0;gt<D;gt++){const Et=gt*M-W;nt[_]=Et*E,nt[m]=et*b,nt[f]=z,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[f]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(gt/A),u.push(1-J/C),X+=1}}for(let J=0;J<C;J++)for(let et=0;et<A;et++){const gt=d+et+D*J,Et=d+et+D*(J+1),$=d+(et+1)+D*(J+1),rt=d+(et+1)+D*J;c.push(gt,Et,rt),c.push(Et,$,rt),V+=6}o.addGroup(p,V,y),p+=V,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=Gi(i[e]);for(const s in n)t[s]=n[s]}return t}function pu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const mu={clone:Gi,merge:ke};var gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Ki{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=_u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=pu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _l extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new L,Yo=new ft,Ko=new ft;class Je extends _l{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Yo,Ko),e.subVectors(Ko,Yo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Pi=1;class vu extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(Li,Pi,t,e);s.layers=this.layers,this.add(s);const r=new Je(Li,Pi,t,e);r.layers=this.layers,this.add(r);const a=new Je(Li,Pi,t,e);a.layers=this.layers,this.add(a);const o=new Je(Li,Pi,t,e);o.layers=this.layers,this.add(o);const c=new Je(Li,Pi,t,e);c.layers=this.layers,this.add(c);const l=new Je(Li,Pi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vl extends Ne{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xu extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Se(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Jn});r.uniforms.tEquirect.value=e;const a=new ne(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=_n),new vu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Or=new L,Mu=new L,yu=new kt;class ai{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Or.subVectors(n,e).cross(Mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Or),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yu.getNormalMatrix(t),s=this.coplanarPoint(Or).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new rr,Os=new L;class to{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],b=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-p,v-f).normalize(),n[1].setComponents(c+r,d+l,m+p,v+f).normalize(),n[2].setComponents(c+a,d+h,m+g,v+E).normalize(),n[3].setComponents(c-a,d-h,m-g,v-E).normalize(),n[4].setComponents(c-o,d-u,m-_,v-b).normalize(),e===Dn)n[5].setComponents(c+o,d+u,m+_,v+b).normalize();else if(e===Zs)n[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Os.x=s.normal.x>0?t.max.x:t.min.x,Os.y=s.normal.y>0?t.max.y:t.min.y,Os.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Su(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class ar extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-a;for(let b=0;b<l;b++){const v=b*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<o;E++){const b=E+l*f,v=E+l*(f+1),U=E+1+l*(f+1),w=E+1+l*f;p.push(b,v,w),p.push(v,U,w)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.widthSegments,t.heightSegments)}}var Eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bu=`#ifdef USE_ALPHAHASH
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
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cu=`#ifdef USE_AOMAP
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
#endif`,Lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pu=`#ifdef USE_BATCHING
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
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ou=`#ifdef USE_IRIDESCENCE
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
#endif`,Fu=`#ifdef USE_BUMPMAP
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qu=`#define PI 3.141592653589793
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
} // validated`,Yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ku=`vec3 transformedNormal = objectNormal;
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
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
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
}`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
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
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Md=`PhysicalMaterial material;
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
#endif`,yd=`struct PhysicalMaterial {
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
}`,Sd=`
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dd=`#if defined( USE_POINTS_UV )
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
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
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
#endif`,zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
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
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cf=`float getShadowMask() {
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
}`,lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
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
#endif`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`#include <common>
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
}`,Lf=`#if DEPTH_PACKING == 3200
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
}`,Pf=`#define DISTANCE
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
}`,Df=`#define DISTANCE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`uniform float scale;
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
}`,Of=`uniform vec3 diffuse;
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
}`,Ff=`#include <common>
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
}`,kf=`uniform vec3 diffuse;
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
}`,zf=`#define LAMBERT
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
}`,Bf=`#define LAMBERT
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
}`,Hf=`#define MATCAP
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
}`,Vf=`#define MATCAP
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
}`,Gf=`#define NORMAL
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
}`,Wf=`#define NORMAL
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
}`,Xf=`#define PHONG
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
}`,qf=`#define PHONG
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
}`,Yf=`#define STANDARD
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
}`,Kf=`#define STANDARD
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
}`,Jf=`#define TOON
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
}`,$f=`#define TOON
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
}`,jf=`uniform float size;
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Qf=`#include <common>
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
}`,tp=`uniform vec3 color;
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
}`,ep=`uniform float rotation;
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
}`,np=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Eu,alphahash_pars_fragment:bu,alphamap_fragment:Tu,alphamap_pars_fragment:wu,alphatest_fragment:Au,alphatest_pars_fragment:Ru,aomap_fragment:Cu,aomap_pars_fragment:Lu,batching_pars_vertex:Pu,batching_vertex:Du,begin_vertex:Iu,beginnormal_vertex:Uu,bsdfs:Nu,iridescence_fragment:Ou,bumpmap_pars_fragment:Fu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:zu,clipping_planes_pars_vertex:Bu,clipping_planes_vertex:Hu,color_fragment:Vu,color_pars_fragment:Gu,color_pars_vertex:Wu,color_vertex:Xu,common:qu,cube_uv_reflection_fragment:Yu,defaultnormal_vertex:Ku,displacementmap_pars_vertex:Ju,displacementmap_vertex:$u,emissivemap_fragment:ju,emissivemap_pars_fragment:Zu,colorspace_fragment:Qu,colorspace_pars_fragment:td,envmap_fragment:ed,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:sd,envmap_physical_pars_fragment:md,envmap_vertex:rd,fog_vertex:ad,fog_pars_vertex:od,fog_fragment:cd,fog_pars_fragment:ld,gradientmap_pars_fragment:hd,lightmap_pars_fragment:ud,lights_lambert_fragment:dd,lights_lambert_pars_fragment:fd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:_d,lights_phong_fragment:vd,lights_phong_pars_fragment:xd,lights_physical_fragment:Md,lights_physical_pars_fragment:yd,lights_fragment_begin:Sd,lights_fragment_maps:Ed,lights_fragment_end:bd,logdepthbuf_fragment:Td,logdepthbuf_pars_fragment:wd,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:Rd,map_fragment:Cd,map_pars_fragment:Ld,map_particle_fragment:Pd,map_particle_pars_fragment:Dd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Ud,morphinstance_vertex:Nd,morphcolor_vertex:Od,morphnormal_vertex:Fd,morphtarget_pars_vertex:kd,morphtarget_vertex:zd,normal_fragment_begin:Bd,normal_fragment_maps:Hd,normal_pars_fragment:Vd,normal_pars_vertex:Gd,normal_vertex:Wd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:Jd,opaque_fragment:$d,packing:jd,premultiplied_alpha_fragment:Zd,project_vertex:Qd,dithering_fragment:tf,dithering_pars_fragment:ef,roughnessmap_fragment:nf,roughnessmap_pars_fragment:sf,shadowmap_pars_fragment:rf,shadowmap_pars_vertex:af,shadowmap_vertex:of,shadowmask_pars_fragment:cf,skinbase_vertex:lf,skinning_pars_vertex:hf,skinning_vertex:uf,skinnormal_vertex:df,specularmap_fragment:ff,specularmap_pars_fragment:pf,tonemapping_fragment:mf,tonemapping_pars_fragment:gf,transmission_fragment:_f,transmission_pars_fragment:vf,uv_pars_fragment:xf,uv_pars_vertex:Mf,uv_vertex:yf,worldpos_vertex:Sf,background_vert:Ef,background_frag:bf,backgroundCube_vert:Tf,backgroundCube_frag:wf,cube_vert:Af,cube_frag:Rf,depth_vert:Cf,depth_frag:Lf,distanceRGBA_vert:Pf,distanceRGBA_frag:Df,equirect_vert:If,equirect_frag:Uf,linedashed_vert:Nf,linedashed_frag:Of,meshbasic_vert:Ff,meshbasic_frag:kf,meshlambert_vert:zf,meshlambert_frag:Bf,meshmatcap_vert:Hf,meshmatcap_frag:Vf,meshnormal_vert:Gf,meshnormal_frag:Wf,meshphong_vert:Xf,meshphong_frag:qf,meshphysical_vert:Yf,meshphysical_frag:Kf,meshtoon_vert:Jf,meshtoon_frag:$f,points_vert:jf,points_frag:Zf,shadow_vert:Qf,shadow_frag:tp,sprite_vert:ep,sprite_frag:np},at={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},gn={basic:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:ke([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:ke([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:ke([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:ke([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:ke([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:ke([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:ke([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:ke([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:ke([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:ke([at.lights,at.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};gn.physical={uniforms:ke([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Fs={r:0,b:0,g:0},ii=new xn,ip=new me;function sp(i,t,e,n,s,r,a){const o=new Xt(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const v=g(E);v===null?f(o,c):v&&v.isColor&&(f(v,1),b=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===ir)?(h===void 0&&(h=new ne(new Se(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Gi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(b.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ip.makeRotationFromEuler(ii)),h.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ne(new ar(2,2),new On({name:"BackgroundMaterial",uniforms:Gi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,b){E.getRGB(Fs,gl(i)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:_,addToRenderList:m}}function rp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,R,W,F,z){let D=!1;const P=u(F,W,R);r!==P&&(r=P,l(r.object)),D=p(M,F,W,z),D&&g(M,F,W,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,v(M,R,W,F),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,R,W){const F=W.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let D=z[R.id];D===void 0&&(D={},z[R.id]=D);let P=D[F];return P===void 0&&(P=d(c()),D[F]=P),P}function d(M){const R=[],W=[],F=[];for(let z=0;z<e;z++)R[z]=0,W[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,R,W,F){const z=r.attributes,D=R.attributes;let P=0;const X=W.getAttributes();for(const V in X)if(X[V].location>=0){const J=z[V];let et=D[V];if(et===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),J===void 0||J.attribute!==et||et&&J.data!==et.data)return!0;P++}return r.attributesNum!==P||r.index!==F}function g(M,R,W,F){const z={},D=R.attributes;let P=0;const X=W.getAttributes();for(const V in X)if(X[V].location>=0){let J=D[V];J===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const et={};et.attribute=J,J&&J.data&&(et.data=J.data),z[V]=et,P++}r.attributes=z,r.attributesNum=P,r.index=F}function _(){const M=r.newAttributes;for(let R=0,W=M.length;R<W;R++)M[R]=0}function m(M){f(M,0)}function f(M,R){const W=r.newAttributes,F=r.enabledAttributes,z=r.attributeDivisors;W[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),z[M]!==R&&(i.vertexAttribDivisor(M,R),z[M]=R)}function E(){const M=r.newAttributes,R=r.enabledAttributes;for(let W=0,F=R.length;W<F;W++)R[W]!==M[W]&&(i.disableVertexAttribArray(W),R[W]=0)}function b(M,R,W,F,z,D,P){P===!0?i.vertexAttribIPointer(M,R,W,z,D):i.vertexAttribPointer(M,R,W,F,z,D)}function v(M,R,W,F){_();const z=F.attributes,D=W.getAttributes(),P=R.defaultAttributeValues;for(const X in D){const V=D[X];if(V.location>=0){let nt=z[X];if(nt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const J=nt.normalized,et=nt.itemSize,gt=t.get(nt);if(gt===void 0)continue;const Et=gt.buffer,$=gt.type,rt=gt.bytesPerElement,St=$===i.INT||$===i.UNSIGNED_INT||nt.gpuType===Ka;if(nt.isInterleavedBufferAttribute){const ct=nt.data,Pt=ct.stride,Nt=nt.offset;if(ct.isInstancedInterleavedBuffer){for(let Gt=0;Gt<V.locationSize;Gt++)f(V.location+Gt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Gt=0;Gt<V.locationSize;Gt++)m(V.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Gt=0;Gt<V.locationSize;Gt++)b(V.location+Gt,et/V.locationSize,$,J,Pt*rt,(Nt+et/V.locationSize*Gt)*rt,St)}else{if(nt.isInstancedBufferAttribute){for(let ct=0;ct<V.locationSize;ct++)f(V.location+ct,nt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ct=0;ct<V.locationSize;ct++)m(V.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let ct=0;ct<V.locationSize;ct++)b(V.location+ct,et/V.locationSize,$,J,et*rt,et/V.locationSize*ct*rt,St)}}else if(P!==void 0){const J=P[X];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(V.location,J);break;case 3:i.vertexAttrib3fv(V.location,J);break;case 4:i.vertexAttrib4fv(V.location,J);break;default:i.vertexAttrib1fv(V.location,J)}}}}E()}function U(){C();for(const M in n){const R=n[M];for(const W in R){const F=R[W];for(const z in F)h(F[z].object),delete F[z];delete R[W]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const W in R){const F=R[W];for(const z in F)h(F[z].object),delete F[z];delete R[W]}delete n[M.id]}function A(M){for(const R in n){const W=n[R];if(W[M.id]===void 0)continue;const F=W[M.id];for(const z in F)h(F[z].object),delete F[z];delete W[M.id]}}function C(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function ap(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function op(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pn&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:U,maxSamples:w}}function cp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ai,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,b=E*4;let v=f.clippingState||null;c.value=v,v=h(g,d,b,p);for(let U=0;U!==b;++U)v[U]=e[U];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,v=p;b!==_;++b,v+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function lp(i){let t=new WeakMap;function e(a,o){return o===la?a.mapping=zi:o===ha&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===la||o===ha)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new xu(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ml extends _l{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,Jo=[.125,.215,.35,.446,.526,.582],li=20,Fr=new Ml,$o=new Xt;let kr=null,zr=0,Br=0,Hr=!1;const oi=(1+Math.sqrt(5))/2,Di=1/oi,jo=[new L(-oi,Di,0),new L(oi,Di,0),new L(-Di,0,oi),new L(Di,0,oi),new L(0,oi,-Di),new L(0,oi,Di),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Zo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){kr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,zr,Br),this._renderer.xr.enabled=Hr,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:ds,format:hn,colorSpace:qi,depthBuffer:!1},s=Qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(r)),this._blurMaterial=up(r,t,e)}return s}_compileMaterial(t){const e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,n,s){const o=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($o),h.toneMapping=$n,h.autoClear=!1;const p=new Oe({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new ne(new Se,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy($o),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const b=this._cubeSize;ks(s,E*b,f>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===zi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ks(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jo[(s-r-1)%jo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ne(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const f=[];let E=0;for(let A=0;A<li;++A){const C=A/_,y=Math.exp(-C*C/2);f.push(y),A===0?E+=y:A<m&&(E+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const v=this._sizeLods[s],U=3*v*(s>b-Ii?s-b+Ii:0),w=4*(this._cubeSize-v);ks(e,U,w,3*v,2*v),c.setRenderTarget(e),c.render(u,Fr)}}function hp(i){const t=[],e=[],n=[];let s=i;const r=i-Ii+1+Jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ii?c=Jo[a-i+Ii-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,C=w>2?0:-1,y=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(y,_*g*w),b.set(d,m*g*w);const M=[w,w,w,w,w,w];v.set(M,f*g*w)}const U=new Fe;U.setAttribute("position",new Xe(E,_)),U.setAttribute("uv",new Xe(b,m)),U.setAttribute("faceIndex",new Xe(v,f)),t.push(U),s>Ii&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qo(i,t,e){const n=new mi(i,t,e);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function up(i,t,e){const n=new Float32Array(li),s=new L(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function tc(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ec(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function eo(){return`

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
	`}function dp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===la||c===ha,h=c===zi||c===Bi;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Zo(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Zo(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function fp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pp(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,v=E.length;b<v;b+=3){const U=E[b+0],w=E[b+1],A=E[b+2];d.push(U,w,w,A,A,U)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const U=b+0,w=b+1,A=b+2;d.push(U,w,w,A,A,U)}}else return;const m=new(cl(d)?ml:pl)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function mp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _p(i,t,e){const n=new WeakMap,s=new ce;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let U=o.attributes.position.count*v,w=1;U>t.maxTextureSize&&(w=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*w*4*u),C=new hl(A,U,w,u);C.type=Pn,C.needsUpdate=!0;const y=v*4;for(let R=0;R<u;R++){const W=f[R],F=E[R],z=b[R],D=U*w*4*R;for(let P=0;P<W.count;P++){const X=P*y;g===!0&&(s.fromBufferAttribute(W,P),A[D+X+0]=s.x,A[D+X+1]=s.y,A[D+X+2]=s.z,A[D+X+3]=0),_===!0&&(s.fromBufferAttribute(F,P),A[D+X+4]=s.x,A[D+X+5]=s.y,A[D+X+6]=s.z,A[D+X+7]=0),m===!0&&(s.fromBufferAttribute(z,P),A[D+X+8]=s.x,A[D+X+9]=s.y,A[D+X+10]=s.z,A[D+X+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ft(U,w)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class yl extends Ne{constructor(t,e,n,s,r,a,o,c,l,h=Ni){if(h!==Ni&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=pi),n===void 0&&h===Vi&&(n=Hi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sl=new Ne,nc=new yl(1,1),El=new hl,bl=new iu,Tl=new vl,ic=[],sc=[],rc=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ic[s];if(r===void 0&&(r=new Float32Array(s),ic[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function or(i,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function Ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;oc.set(n),i.uniformMatrix2fv(this.addr,!1,oc),we(e,n)}}function bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;ac.set(n),i.uniformMatrix3fv(this.addr,!1,ac),we(e,n)}}function Tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Te(e,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),we(e,n)}}function wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function Lp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function Up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nc.compareFunction=ol,r=nc):r=Sl,e.setTexture2D(t||r,s)}function Np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bl,s)}function Op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tl,s)}function Fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||El,s)}function kp(i){switch(i){case 5126:return xp;case 35664:return Mp;case 35665:return yp;case 35666:return Sp;case 35674:return Ep;case 35675:return bp;case 35676:return Tp;case 5124:case 35670:return wp;case 35667:case 35671:return Ap;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Lp;case 36294:return Pp;case 36295:return Dp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Fp}}function zp(i,t){i.uniform1fv(this.addr,t)}function Bp(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Hp(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Vp(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Gp(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wp(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xp(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qp(i,t){i.uniform1iv(this.addr,t)}function Yp(i,t){i.uniform2iv(this.addr,t)}function Kp(i,t){i.uniform3iv(this.addr,t)}function Jp(i,t){i.uniform4iv(this.addr,t)}function $p(i,t){i.uniform1uiv(this.addr,t)}function jp(i,t){i.uniform2uiv(this.addr,t)}function Zp(i,t){i.uniform3uiv(this.addr,t)}function Qp(i,t){i.uniform4uiv(this.addr,t)}function tm(i,t,e){const n=this.cache,s=t.length,r=or(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Sl,r[a])}function em(i,t,e){const n=this.cache,s=t.length,r=or(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bl,r[a])}function nm(i,t,e){const n=this.cache,s=t.length,r=or(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Tl,r[a])}function im(i,t,e){const n=this.cache,s=t.length,r=or(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||El,r[a])}function sm(i){switch(i){case 5126:return zp;case 35664:return Bp;case 35665:return Hp;case 35666:return Vp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Kp;case 35669:case 35673:return Jp;case 5125:return $p;case 36294:return jp;case 36295:return Zp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kp(e.type)}}class am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sm(e.type)}}class om{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function cc(i,t){i.seq.push(t),i.map[t.id]=t}function cm(i,t,e){const n=i.name,s=n.length;for(Vr.lastIndex=0;;){const r=Vr.exec(n),a=Vr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){cc(e,l===void 0?new rm(o,i,t):new am(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new om(o),cc(e,u)),e=u}}}class $s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);cm(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function lc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lm=37297;let hm=0;function um(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const hc=new kt;function dm(i){te._getMatrix(hc,te.workingColorSpace,i);const t=`mat3( ${hc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case sr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+um(i.getShaderSource(t),a)}else return s}function fm(i,t){const e=dm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pm(i,t){let e;switch(t){case Ph:e="Linear";break;case Dh:e="Reinhard";break;case Ih:e="Cineon";break;case Kc:e="ACESFilmic";break;case Nh:e="AgX";break;case Oh:e="Neutral";break;case Uh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new L;function mm(){te.getLuminanceCoefficients(zs);const i=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function _m(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function as(i){return i!==""}function dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(xm,ym)}const Mm=new Map;function ym(i,t){let e=Bt[t];if(e===void 0){const n=Mm.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return za(e)}const Sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(Sm,Em)}function Em(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function bm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Tm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Bi:t="ENVMAP_TYPE_CUBE";break;case ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Am(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ch:t="ENVMAP_BLENDING_MIX";break;case Lh:t="ENVMAP_BLENDING_ADD";break}return t}function Rm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=bm(e),l=Tm(e),h=wm(e),u=Am(e),d=Rm(e),p=gm(e),g=_m(r),_=s.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),f.length>0&&(f+=`
`)):(m=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),f=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Bt.tonemapping_pars_fragment:"",e.toneMapping!==$n?pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,fm("linearToOutputTexel",e.outputColorSpace),mm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),a=za(a),a=dc(a,e),a=fc(a,e),o=za(o),o=dc(o,e),o=fc(o,e),a=pc(a),o=pc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+m+a,v=E+f+o,U=lc(s,s.VERTEX_SHADER,b),w=lc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,U),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(U).trim(),z=s.getShaderInfoLog(w).trim();let D=!0,P=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,w);else{const X=uc(s,U,"vertex"),V=uc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+X+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(F===""||z==="")&&(P=!1);P&&(R.diagnostics={runnable:D,programLog:W,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:f}})}s.deleteShader(U),s.deleteShader(w),C=new $s(s,_),y=vm(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,lm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=w,this}let Lm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dm(t),e.set(t,n)),n}}class Dm{constructor(t){this.id=Lm++,this.code=t,this.usedTimes=0}}function Im(i,t,e,n,s,r,a){const o=new dl,c=new Pm,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,W,F){const z=W.fog,D=F.geometry,P=y.isMeshStandardMaterial?W.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||P),V=X&&X.mapping===ir?X.image.height:null,nt=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,et=J!==void 0?J.length:0;let gt=0;D.morphAttributes.position!==void 0&&(gt=1),D.morphAttributes.normal!==void 0&&(gt=2),D.morphAttributes.color!==void 0&&(gt=3);let Et,$,rt,St;if(nt){const ae=gn[nt];Et=ae.vertexShader,$=ae.fragmentShader}else Et=y.vertexShader,$=y.fragmentShader,c.update(y),rt=c.getVertexShaderID(y),St=c.getFragmentShaderID(y);const ct=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Gt=F.isBatchedMesh===!0,ge=!!y.map,$t=!!y.matcap,Me=!!X,k=!!y.aoMap,$e=!!y.lightMap,qt=!!y.bumpMap,Yt=!!y.normalMap,Ct=!!y.displacementMap,de=!!y.emissiveMap,wt=!!y.metalnessMap,T=!!y.roughnessMap,x=y.anisotropy>0,G=y.clearcoat>0,Z=y.dispersion>0,tt=y.iridescence>0,j=y.sheen>0,bt=y.transmission>0,lt=x&&!!y.anisotropyMap,pt=G&&!!y.clearcoatMap,jt=G&&!!y.clearcoatNormalMap,it=G&&!!y.clearcoatRoughnessMap,_t=tt&&!!y.iridescenceMap,Lt=tt&&!!y.iridescenceThicknessMap,Dt=j&&!!y.sheenColorMap,vt=j&&!!y.sheenRoughnessMap,Kt=!!y.specularMap,zt=!!y.specularColorMap,he=!!y.specularIntensityMap,I=bt&&!!y.transmissionMap,ot=bt&&!!y.thicknessMap,K=!!y.gradientMap,Q=!!y.alphaMap,dt=y.alphaTest>0,ht=!!y.alphaHash,Ot=!!y.extensions;let xe=$n;y.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Pe={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:Et,fragmentShader:$,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Gt,batchingColor:Gt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:qi,alphaToCoverage:!!y.alphaToCoverage,map:ge,matcap:$t,envMap:Me,envMapMode:Me&&X.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:$e,bumpMap:qt,normalMap:Yt,displacementMap:d&&Ct,emissiveMap:de,normalMapObjectSpace:Yt&&y.normalMapType===Bh,normalMapTangentSpace:Yt&&y.normalMapType===al,metalnessMap:wt,roughnessMap:T,anisotropy:x,anisotropyMap:lt,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:Z,iridescence:tt,iridescenceMap:_t,iridescenceThicknessMap:Lt,sheen:j,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:Kt,specularColorMap:zt,specularIntensityMap:he,transmission:bt,transmissionMap:I,thicknessMap:ot,gradientMap:K,opaque:y.transparent===!1&&y.blending===di&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:dt,alphaHash:ht,combine:y.combine,mapUv:ge&&_(y.map.channel),aoMapUv:k&&_(y.aoMap.channel),lightMapUv:$e&&_(y.lightMap.channel),bumpMapUv:qt&&_(y.bumpMap.channel),normalMapUv:Yt&&_(y.normalMap.channel),displacementMapUv:Ct&&_(y.displacementMap.channel),emissiveMapUv:de&&_(y.emissiveMap.channel),metalnessMapUv:wt&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:lt&&_(y.anisotropyMap.channel),clearcoatMapUv:pt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(y.sheenRoughnessMap.channel),specularMapUv:Kt&&_(y.specularMap.channel),specularColorMapUv:zt&&_(y.specularColorMap.channel),specularIntensityMapUv:he&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:ot&&_(y.thicknessMap.channel),alphaMapUv:Q&&_(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Yt||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(ge||Q),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:F.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:ge&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===oe,decodeVideoTextureEmissive:de&&y.emissiveMap.isVideoTexture===!0&&te.getTransfer(y.emissiveMap.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ve,flipSided:y.side===Be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ot&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&y.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(E(M,y),b(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const M=g[y.type];let R;if(M){const W=gn[M];R=mu.clone(W.uniforms)}else R=y.uniforms;return R}function U(y,M){let R;for(let W=0,F=h.length;W<F;W++){const z=h[W];if(z.cacheKey===M){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Cm(i,M,y,r),h.push(R)),R}function w(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function A(y){c.remove(y)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:U,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function Um(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Nm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _c(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Nm),n.length>1&&n.sort(d||gc),s.length>1&&s.sort(d||gc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Om(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new _c,i.set(n,[a])):s>=r.length?(a=new _c,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function km(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zm=0;function Bm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hm(i){const t=new Fm,e=km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new me,a=new me;function o(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,b=0,v=0,U=0,w=0,A=0;l.sort(Bm);for(let y=0,M=l.length;y<M;y++){const R=l[y],W=R.color,F=R.intensity,z=R.distance,D=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=W.r*F,u+=W.g*F,d+=W.b*F;else if(R.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(R.sh.coefficients[P],F);A++}else if(R.isDirectionalLight){const P=t.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=D,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=P,p++}else if(R.isSpotLight){const P=t.get(R);P.position.setFromMatrixPosition(R.matrixWorld),P.color.copy(W).multiplyScalar(F),P.distance=z,P.coneCos=Math.cos(R.angle),P.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),P.decay=R.decay,n.spot[_]=P;const X=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,X.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=X.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=D,v++}_++}else if(R.isRectAreaLight){const P=t.get(R);P.color.copy(W).multiplyScalar(F),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=P,m++}else if(R.isPointLight){const P=t.get(R);if(P.color.copy(R.color).multiplyScalar(R.intensity),P.distance=R.distance,P.decay=R.decay,R.castShadow){const X=R.shadow,V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=P,g++}else if(R.isHemisphereLight){const P=t.get(R);P.skyColor.copy(R.color).multiplyScalar(F),P.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[f]=P,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==E||C.numPointShadows!==b||C.numSpotShadows!==v||C.numSpotMaps!==U||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+U-w,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=E,C.numPointShadows=b,C.numSpotShadows=v,C.numSpotMaps=U,C.numLightProbes=A,n.version=zm++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const b=l[f];if(b.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(b.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function vc(i){const t=new Hm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Vm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new vc(i),t.set(s,[o])):r>=a.length?(o=new vc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Gm extends Ki{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wm extends Ki{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
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
}`;function Ym(i,t,e){let n=new to;const s=new ft,r=new ft,a=new ce,o=new Gm({depthPacking:zh}),c=new Wm,l={},h=e.maxTextureSize,u={[jn]:Be,[Be]:jn,[ve]:ve},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let f=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Jn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const F=f!==Cn&&this.type===Cn,z=f===Cn&&this.type!==Cn;for(let D=0,P=w.length;D<P;D++){const X=w[D],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const nt=V.getFrameExtents();if(s.multiply(nt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y)),V.map===null||F===!0||z===!0){const et=this.type!==Cn?{minFilter:dn,magFilter:dn}:{};V.map!==null&&V.map.dispose(),V.map=new mi(s.x,s.y,et),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const J=V.getViewportCount();for(let et=0;et<J;et++){const gt=V.getViewport(et);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),W.viewport(a),V.updateMatrices(X,et),n=V.getFrustum(),v(A,C,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Cn&&E(V,C),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,R)};function E(w,A){const C=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,p,_,null)}function b(w,A,C,y){let M=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=M.uuid,F=A.uuid;let z=l[W];z===void 0&&(z={},l[W]=z);let D=z[F];D===void 0&&(D=M.clone(),z[F]=D,A.addEventListener("dispose",U)),M=D}if(M.visible=A.visible,M.wireframe=A.wireframe,y===Cn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=C}return M}function v(w,A,C,y,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=t.update(w),z=w.material;if(Array.isArray(z)){const D=F.groups;for(let P=0,X=D.length;P<X;P++){const V=D[P],nt=z[V.materialIndex];if(nt&&nt.visible){const J=b(w,nt,y,M);w.onBeforeShadow(i,w,A,C,F,J,V),i.renderBufferDirect(C,null,F,J,w,V),w.onAfterShadow(i,w,A,C,F,J,V)}}}else if(z.visible){const D=b(w,z,y,M);w.onBeforeShadow(i,w,A,C,F,D,null),i.renderBufferDirect(C,null,F,D,w,null),w.onAfterShadow(i,w,A,C,F,D,null)}}const W=w.children;for(let F=0,z=W.length;F<z;F++)v(W[F],A,C,y,M)}function U(w){w.target.removeEventListener("dispose",U);for(const C in l){const y=l[C],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Km={[na]:ia,[sa]:oa,[ra]:ca,[ki]:aa,[ia]:na,[oa]:sa,[ca]:ra,[aa]:ki};function Jm(i,t){function e(){let I=!1;const ot=new ce;let K=null;const Q=new ce(0,0,0,0);return{setMask:function(dt){K!==dt&&!I&&(i.colorMask(dt,dt,dt,dt),K=dt)},setLocked:function(dt){I=dt},setClear:function(dt,ht,Ot,xe,Pe){Pe===!0&&(dt*=xe,ht*=xe,Ot*=xe),ot.set(dt,ht,Ot,xe),Q.equals(ot)===!1&&(i.clearColor(dt,ht,Ot,xe),Q.copy(ot))},reset:function(){I=!1,K=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,ot=!1,K=null,Q=null,dt=null;return{setReversed:function(ht){if(ot!==ht){const Ot=t.get("EXT_clip_control");ot?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const xe=dt;dt=null,this.setClear(xe)}ot=ht},getReversed:function(){return ot},setTest:function(ht){ht?ct(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(ht){K!==ht&&!I&&(i.depthMask(ht),K=ht)},setFunc:function(ht){if(ot&&(ht=Km[ht]),Q!==ht){switch(ht){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ht}},setLocked:function(ht){I=ht},setClear:function(ht){dt!==ht&&(ot&&(ht=1-ht),i.clearDepth(ht),dt=ht)},reset:function(){I=!1,K=null,Q=null,dt=null,ot=!1}}}function s(){let I=!1,ot=null,K=null,Q=null,dt=null,ht=null,Ot=null,xe=null,Pe=null;return{setTest:function(ae){I||(ae?ct(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(ae){ot!==ae&&!I&&(i.stencilMask(ae),ot=ae)},setFunc:function(ae,tn,Sn){(K!==ae||Q!==tn||dt!==Sn)&&(i.stencilFunc(ae,tn,Sn),K=ae,Q=tn,dt=Sn)},setOp:function(ae,tn,Sn){(ht!==ae||Ot!==tn||xe!==Sn)&&(i.stencilOp(ae,tn,Sn),ht=ae,Ot=tn,xe=Sn)},setLocked:function(ae){I=ae},setClear:function(ae){Pe!==ae&&(i.clearStencil(ae),Pe=ae)},reset:function(){I=!1,ot=null,K=null,Q=null,dt=null,ht=null,Ot=null,xe=null,Pe=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,v=null,U=null,w=null,A=new Xt(0,0,0),C=0,y=!1,M=null,R=null,W=null,F=null,z=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,X=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),P=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),P=X>=2);let nt=null,J={};const et=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Et=new ce().fromArray(et),$=new ce().fromArray(gt);function rt(I,ot,K,Q){const dt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(I,ht),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<K;Ot++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(ot+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return ht}const St={};St[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(ki),qt(!1),Yt(Eo),ct(i.CULL_FACE),k(Jn);function ct(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Pt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Nt(I,ot){return u[I]!==ot?(i.bindFramebuffer(I,ot),u[I]=ot,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Gt(I,ot){let K=p,Q=!1;if(I){K=d.get(ot),K===void 0&&(K=[],d.set(ot,K));const dt=I.textures;if(K.length!==dt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ot=dt.length;ht<Ot;ht++)K[ht]=i.COLOR_ATTACHMENT0+ht;K.length=dt.length,Q=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,Q=!0);Q&&i.drawBuffers(K)}function ge(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const $t={[ci]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};$t[ph]=i.MIN,$t[mh]=i.MAX;const Me={[gh]:i.ZERO,[_h]:i.ONE,[vh]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[bh]:i.SRC_ALPHA_SATURATE,[Sh]:i.DST_COLOR,[Mh]:i.DST_ALPHA,[xh]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[Eh]:i.ONE_MINUS_DST_COLOR,[yh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[wh]:i.ONE_MINUS_CONSTANT_COLOR,[Ah]:i.CONSTANT_ALPHA,[Rh]:i.ONE_MINUS_CONSTANT_ALPHA};function k(I,ot,K,Q,dt,ht,Ot,xe,Pe,ae){if(I===Jn){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(ct(i.BLEND),_=!0),I!==uh){if(I!==m||ae!==y){if((f!==ci||v!==ci)&&(i.blendEquation(i.FUNC_ADD),f=ci,v=ci),ae)switch(I){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fi:i.blendFunc(i.ONE,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case To:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,U=null,w=null,A.set(0,0,0),C=0,m=I,y=ae}return}dt=dt||ot,ht=ht||K,Ot=Ot||Q,(ot!==f||dt!==v)&&(i.blendEquationSeparate($t[ot],$t[dt]),f=ot,v=dt),(K!==E||Q!==b||ht!==U||Ot!==w)&&(i.blendFuncSeparate(Me[K],Me[Q],Me[ht],Me[Ot]),E=K,b=Q,U=ht,w=Ot),(xe.equals(A)===!1||Pe!==C)&&(i.blendColor(xe.r,xe.g,xe.b,Pe),A.copy(xe),C=Pe),m=I,y=!1}function $e(I,ot){I.side===ve?Pt(i.CULL_FACE):ct(i.CULL_FACE);let K=I.side===Be;ot&&(K=!K),qt(K),I.blending===di&&I.transparent===!1?k(Jn):k(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),de(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function Yt(I){I!==lh?(ct(i.CULL_FACE),I!==R&&(I===Eo?i.cullFace(i.BACK):I===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),R=I}function Ct(I){I!==W&&(P&&i.lineWidth(I),W=I)}function de(I,ot,K){I?(ct(i.POLYGON_OFFSET_FILL),(F!==ot||z!==K)&&(i.polygonOffset(ot,K),F=ot,z=K)):Pt(i.POLYGON_OFFSET_FILL)}function wt(I){I?ct(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+D-1),nt!==I&&(i.activeTexture(I),nt=I)}function x(I,ot,K){K===void 0&&(nt===null?K=i.TEXTURE0+D-1:K=nt);let Q=J[K];Q===void 0&&(Q={type:void 0,texture:void 0},J[K]=Q),(Q.type!==I||Q.texture!==ot)&&(nt!==K&&(i.activeTexture(K),nt=K),i.bindTexture(I,ot||St[I]),Q.type=I,Q.texture=ot)}function G(){const I=J[nt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){Et.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Et.copy(I))}function vt(I){$.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Kt(I,ot){let K=l.get(ot);K===void 0&&(K=new WeakMap,l.set(ot,K));let Q=K.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(ot,I.name),K.set(I,Q))}function zt(I,ot){const Q=l.get(ot).get(I);c.get(ot)!==Q&&(i.uniformBlockBinding(ot,Q,I.__bindingPointIndex),c.set(ot,Q))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,J={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,v=null,U=null,w=null,A=new Xt(0,0,0),C=0,y=!1,M=null,R=null,W=null,F=null,z=null,Et.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Pt,bindFramebuffer:Nt,drawBuffers:Gt,useProgram:ge,setBlending:k,setMaterial:$e,setFlipSided:qt,setCullFace:Yt,setLineWidth:Ct,setPolygonOffset:de,setScissorTest:wt,activeTexture:T,bindTexture:x,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:_t,texImage3D:Lt,updateUBOMapping:Kt,uniformBlockBinding:zt,texStorage2D:jt,texStorage3D:it,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Dt,viewport:vt,reset:he}}function xc(i,t,e,n){const s=$m(n);switch(e){case Qc:return i*t;case el:return i*t;case nl:return i*t*2;case il:return i*t/s.components*s.byteLength;case ja:return i*t/s.components*s.byteLength;case sl:return i*t*2/s.components*s.byteLength;case Za:return i*t*2/s.components*s.byteLength;case tl:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Qa:return i*t*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:case ma:return Math.max(i,16)*Math.max(t,8)/4;case da:case pa:return Math.max(i,8)*Math.max(t,8)/2;case ga:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Js:case Ia:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rl:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oa:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $m(i){switch(i){case Nn:case $c:return{byteLength:1,components:1};case hs:case jc:case ds:return{byteLength:2,components:1};case Ja:case $a:return{byteLength:2,components:4};case pi:case Ka:case Pn:return{byteLength:4,components:1};case Zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function jm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):us("canvas")}function _(T,x,G){let Z=1;const tt=wt(T);if((tt.width>G||tt.height>G)&&(Z=G/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(Z*tt.width),bt=Math.floor(Z*tt.height);u===void 0&&(u=g(j,bt));const lt=x?g(j,bt):u;return lt.width=j,lt.height=bt,lt.getContext("2d").drawImage(T,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+bt+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,x,G,Z,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=x;if(x===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8)),x===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),x===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8)),x===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),x===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),x===i.RGBA){const bt=tt?sr:te.getTransfer(Z);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=bt===oe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(T,x){let G;return T?x===null||x===pi||x===Hi?G=i.DEPTH24_STENCIL8:x===Pn?G=i.DEPTH32F_STENCIL8:x===hs&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===pi||x===Hi?G=i.DEPTH_COMPONENT24:x===Pn?G=i.DEPTH_COMPONENT32F:x===hs&&(G=i.DEPTH_COMPONENT16),G}function U(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==dn&&T.minFilter!==_n?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){const x=T.target;x.removeEventListener("dispose",w),C(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),M(x)}function C(T){const x=n.get(T);if(x.__webglInit===void 0)return;const G=T.source,Z=d.get(G);if(Z){const tt=Z[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(T),Object.keys(Z).length===0&&d.delete(G)}n.remove(T)}function y(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const G=T.source,Z=d.get(G);delete Z[x.__cacheKey],a.memory.textures--}function M(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let tt=0;tt<x.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=T.textures;for(let Z=0,tt=G.length;Z<tt;Z++){const j=n.get(G[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(T)}let R=0;function W(){R=0}function F(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function z(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function D(T,x){const G=n.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,T,x);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+x)}function P(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){$(G,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+x)}function X(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){$(G,T,x);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+x)}function V(T,x){const G=n.get(T);if(T.version>0&&G.__version!==T.version){rt(G,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+x)}const nt={[ua]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},J={[dn]:i.NEAREST,[Fh]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[pr]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},et={[Hh]:i.NEVER,[Yh]:i.ALWAYS,[Vh]:i.LESS,[ol]:i.LEQUAL,[Gh]:i.EQUAL,[qh]:i.GEQUAL,[Wh]:i.GREATER,[Xh]:i.NOTEQUAL};function gt(T,x){if(x.type===Pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===_n||x.magFilter===pr||x.magFilter===xs||x.magFilter===ui||x.minFilter===_n||x.minFilter===pr||x.minFilter===xs||x.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,nt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,nt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,nt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,J[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,J[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==xs&&x.minFilter!==ui||x.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Et(T,x){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));const Z=x.source;let tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));const j=z(x);if(j!==T.__cacheKey){tt[j]===void 0&&(tt[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),tt[j].usedTimes++;const bt=tt[T.__cacheKey];bt!==void 0&&(tt[T.__cacheKey].usedTimes--,bt.usedTimes===0&&y(x)),T.__cacheKey=j,T.__webglTexture=tt[j].texture}return G}function $(T,x,G){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Et(T,x),j=x.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+G);const bt=n.get(j);if(j.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);const lt=te.getPrimaries(te.workingColorSpace),pt=x.colorSpace===qn?null:te.getPrimaries(x.colorSpace),jt=x.colorSpace===qn||lt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=_(x.image,!1,s.maxTextureSize);it=de(x,it);const _t=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type);let Dt=b(x.internalFormat,_t,Lt,x.colorSpace,x.isVideoTexture);gt(Z,x);let vt;const Kt=x.mipmaps,zt=x.isVideoTexture!==!0,he=bt.__version===void 0||tt===!0,I=j.dataReady,ot=U(x,it);if(x.isDepthTexture)Dt=v(x.format===Vi,x.type),he&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,_t,Lt,null));else if(x.isDataTexture)if(Kt.length>0){zt&&he&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,Kt[0].width,Kt[0].height);for(let K=0,Q=Kt.length;K<Q;K++)vt=Kt[K],zt?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,_t,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,K,Dt,vt.width,vt.height,0,_t,Lt,vt.data);x.generateMipmaps=!1}else zt?(he&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,_t,Lt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,_t,Lt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Dt,Kt[0].width,Kt[0].height,it.depth);for(let K=0,Q=Kt.length;K<Q;K++)if(vt=Kt[K],x.format!==hn)if(_t!==null)if(zt){if(I)if(x.layerUpdates.size>0){const dt=xc(vt.width,vt.height,x.format,x.type);for(const ht of x.layerUpdates){const Ot=vt.data.subarray(ht*dt/vt.data.BYTES_PER_ELEMENT,(ht+1)*dt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ht,vt.width,vt.height,1,_t,Ot)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,it.depth,_t,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Dt,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,vt.width,vt.height,it.depth,_t,Lt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Dt,vt.width,vt.height,it.depth,0,_t,Lt,vt.data)}else{zt&&he&&e.texStorage2D(i.TEXTURE_2D,ot,Dt,Kt[0].width,Kt[0].height);for(let K=0,Q=Kt.length;K<Q;K++)vt=Kt[K],x.format!==hn?_t!==null?zt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt.width,vt.height,_t,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,K,Dt,vt.width,vt.height,0,_t,Lt,vt.data)}else if(x.isDataArrayTexture)if(zt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Dt,it.width,it.height,it.depth),I)if(x.layerUpdates.size>0){const K=xc(it.width,it.height,x.format,x.type);for(const Q of x.layerUpdates){const dt=it.data.subarray(Q*K/it.data.BYTES_PER_ELEMENT,(Q+1)*K/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,_t,Lt,dt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Lt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,_t,Lt,it.data);else if(x.isData3DTexture)zt?(he&&e.texStorage3D(i.TEXTURE_3D,ot,Dt,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Lt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,_t,Lt,it.data);else if(x.isFramebufferTexture){if(he)if(zt)e.texStorage2D(i.TEXTURE_2D,ot,Dt,it.width,it.height);else{let K=it.width,Q=it.height;for(let dt=0;dt<ot;dt++)e.texImage2D(i.TEXTURE_2D,dt,Dt,K,Q,0,_t,Lt,null),K>>=1,Q>>=1}}else if(Kt.length>0){if(zt&&he){const K=wt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Dt,K.width,K.height)}for(let K=0,Q=Kt.length;K<Q;K++)vt=Kt[K],zt?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,_t,Lt,vt):e.texImage2D(i.TEXTURE_2D,K,Dt,_t,Lt,vt);x.generateMipmaps=!1}else if(zt){if(he){const K=wt(it);e.texStorage2D(i.TEXTURE_2D,ot,Dt,K.width,K.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Lt,it)}else e.texImage2D(i.TEXTURE_2D,0,Dt,_t,Lt,it);m(x)&&f(Z),bt.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function rt(T,x,G){if(x.image.length!==6)return;const Z=Et(T,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const j=n.get(tt);if(tt.version!==j.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);const bt=te.getPrimaries(te.workingColorSpace),lt=x.colorSpace===qn?null:te.getPrimaries(x.colorSpace),pt=x.colorSpace===qn||bt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const jt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!jt&&!it?_t[Q]=_(x.image[Q],!0,s.maxCubemapSize):_t[Q]=it?x.image[Q].image:x.image[Q],_t[Q]=de(x,_t[Q]);const Lt=_t[0],Dt=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),Kt=b(x.internalFormat,Dt,vt,x.colorSpace),zt=x.isVideoTexture!==!0,he=j.__version===void 0||Z===!0,I=tt.dataReady;let ot=U(x,Lt);gt(i.TEXTURE_CUBE_MAP,x);let K;if(jt){zt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Kt,Lt.width,Lt.height);for(let Q=0;Q<6;Q++){K=_t[Q].mipmaps;for(let dt=0;dt<K.length;dt++){const ht=K[dt];x.format!==hn?Dt!==null?zt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,ht.width,ht.height,Dt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,Kt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,0,0,ht.width,ht.height,Dt,vt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt,Kt,ht.width,ht.height,0,Dt,vt,ht.data)}}}else{if(K=x.mipmaps,zt&&he){K.length>0&&ot++;const Q=wt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Dt,vt,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,_t[Q].width,_t[Q].height,0,Dt,vt,_t[Q].data);for(let dt=0;dt<K.length;dt++){const Ot=K[dt].image[Q].image;zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,Ot.width,Ot.height,Dt,vt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,Kt,Ot.width,Ot.height,0,Dt,vt,Ot.data)}}else{zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Dt,vt,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,Dt,vt,_t[Q]);for(let dt=0;dt<K.length;dt++){const ht=K[dt];zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,0,0,Dt,vt,ht.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,dt+1,Kt,Dt,vt,ht.image[Q])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),j.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function St(T,x,G,Z,tt,j){const bt=r.convert(G.format,G.colorSpace),lt=r.convert(G.type),pt=b(G.internalFormat,bt,lt,G.colorSpace),jt=n.get(x),it=n.get(G);if(it.__renderTarget=x,!jt.__hasExternalTextures){const _t=Math.max(1,x.width>>j),Lt=Math.max(1,x.height>>j);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,pt,_t,Lt,x.depth,0,bt,lt,null):e.texImage2D(tt,j,pt,_t,Lt,0,bt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,it.__webglTexture,0,qt(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,it.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(T,x,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const Z=x.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,j=v(x.stencilBuffer,tt),bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=qt(x);Yt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,j,x.width,x.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,T)}else{const Z=x.textures;for(let tt=0;tt<Z.length;tt++){const j=Z[tt],bt=r.convert(j.format,j.colorSpace),lt=r.convert(j.type),pt=b(j.internalFormat,bt,lt,j.colorSpace),jt=qt(x);G&&Yt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,pt,x.width,x.height):Yt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,pt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,pt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),D(x.depthTexture,0);const tt=Z.__webglTexture,j=qt(x);if(x.depthTexture.format===Ni)Yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Vi)Yt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Nt(T){const x=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Z}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Pt(x.__webglFramebuffer,T)}else if(G){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),ct(x.__webglDepthbuffer[Z],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ct(x.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(T,x,G){const Z=n.get(T);x!==void 0&&St(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Nt(T)}function ge(T){const x=T.texture,G=n.get(T),Z=n.get(x);T.addEventListener("dispose",A);const tt=T.textures,j=T.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[lt]=[];for(let pt=0;pt<x.mipmaps.length;pt++)G.__webglFramebuffer[lt][pt]=i.createFramebuffer()}else G.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)G.__webglFramebuffer[lt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(bt)for(let lt=0,pt=tt.length;lt<pt;lt++){const jt=n.get(tt[lt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Yt(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){const pt=tt[lt];G.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[lt]);const jt=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),_t=b(pt.internalFormat,jt,it,pt.colorSpace,T.isXRRenderTarget===!0),Lt=qt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,_t,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,G.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),gt(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)St(G.__webglFramebuffer[lt][pt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else St(G.__webglFramebuffer[lt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,pt=tt.length;lt<pt;lt++){const jt=tt[lt],it=n.get(jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),gt(i.TEXTURE_2D,jt),St(G.__webglFramebuffer,T,jt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(jt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),gt(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let pt=0;pt<x.mipmaps.length;pt++)St(G.__webglFramebuffer[pt],T,x,i.COLOR_ATTACHMENT0,lt,pt);else St(G.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,lt,0);m(x)&&f(lt),e.unbindTexture()}T.depthBuffer&&Nt(T)}function $t(T){const x=T.textures;for(let G=0,Z=x.length;G<Z;G++){const tt=x[G];if(m(tt)){const j=E(T),bt=n.get(tt).__webglTexture;e.bindTexture(j,bt),f(j),e.unbindTexture()}}}const Me=[],k=[];function $e(T){if(T.samples>0){if(Yt(T)===!1){const x=T.textures,G=T.width,Z=T.height;let tt=i.COLOR_BUFFER_BIT;const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(T),lt=x.length>1;if(lt)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const jt=n.get(x[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,tt,i.NEAREST),c===!0&&(Me.length=0,k.length=0,Me.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Me.push(j),k.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const jt=n.get(x[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function qt(T){return Math.min(s.maxSamples,T.samples)}function Yt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ct(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function de(T,x){const G=T.colorSpace,Z=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==qi&&G!==qn&&(te.getTransfer(G)===oe?(Z!==hn||tt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=W,this.setTexture2D=D,this.setTexture2DArray=P,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Gt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Yt}function Zm(i,t){function e(n,s=qn){let r;const a=te.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.BYTE;if(n===jc)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===ds)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===tl)return i.RGB;if(n===hn)return i.RGBA;if(n===el)return i.LUMINANCE;if(n===nl)return i.LUMINANCE_ALPHA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===sl)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===Ks)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===_a||n===va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===_a)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===Ma||n===ya||n===Sa||n===Ea||n===ba||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===La||n===Pa||n===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Js||n===Ia||n===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Js)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===Na||n===Oa||n===Fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Qm extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Le extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n0=`
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

}`;class i0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:e0,fragmentShader:n0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s0 extends Yi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new i0,m=e.getContextAttributes();let f=null,E=null;const b=[],v=[],U=new ft;let w=null;const A=new Je;A.viewport=new ce;const C=new Je;C.viewport=new ce;const y=[A,C],M=new Qm;let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=b[$];return rt===void 0&&(rt=new Gr,b[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=b[$];return rt===void 0&&(rt=new Gr,b[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=b[$];return rt===void 0&&(rt=new Gr,b[$]=rt),rt.getHandSpace()};function F($){const rt=v.indexOf($.inputSource);if(rt===-1)return;const St=b[rt];St!==void 0&&(St.update($.inputSource,$.frame,l||a),St.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",D);for(let $=0;$<b.length;$++){const rt=v[$];rt!==null&&(v[$]=null,b[$].disconnect(rt))}R=null,W=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",z),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new mi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,St=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Vi:Ni,St=m.stencil?Hi:pi);const Pt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new mi(d.textureWidth,d.textureHeight,{format:hn,type:Nn,depthTexture:new yl(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D($){for(let rt=0;rt<$.removed.length;rt++){const St=$.removed[rt],ct=v.indexOf(St);ct>=0&&(v[ct]=null,b[ct].disconnect(St))}for(let rt=0;rt<$.added.length;rt++){const St=$.added[rt];let ct=v.indexOf(St);if(ct===-1){for(let Nt=0;Nt<b.length;Nt++)if(Nt>=v.length){v.push(St),ct=Nt;break}else if(v[Nt]===null){v[Nt]=St,ct=Nt;break}if(ct===-1)break}const Pt=b[ct];Pt&&Pt.connect(St)}}const P=new L,X=new L;function V($,rt,St){P.setFromMatrixPosition(rt.matrixWorld),X.setFromMatrixPosition(St.matrixWorld);const ct=P.distanceTo(X),Pt=rt.projectionMatrix.elements,Nt=St.projectionMatrix.elements,Gt=Pt[14]/(Pt[10]-1),ge=Pt[14]/(Pt[10]+1),$t=(Pt[9]+1)/Pt[5],Me=(Pt[9]-1)/Pt[5],k=(Pt[8]-1)/Pt[0],$e=(Nt[8]+1)/Nt[0],qt=Gt*k,Yt=Gt*$e,Ct=ct/(-k+$e),de=Ct*-k;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(de),$.translateZ(Ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pt[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const wt=Gt+Ct,T=ge+Ct,x=qt-de,G=Yt+(ct-de),Z=$t*ge/T*wt,tt=Me*ge/T*wt;$.projectionMatrix.makePerspective(x,G,Z,tt,wt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,St=$.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),M.near=C.near=A.near=rt,M.far=C.far=A.far=St,(R!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,W=M.far),A.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const ct=$.parent,Pt=M.cameras;nt(M,ct);for(let Nt=0;Nt<Pt.length;Nt++)nt(Pt[Nt],ct);Pt.length===2?V(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),J($,M,ct)};function J($,rt,St){St===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(St.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ka*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let et=null;function gt($,rt){if(h=rt.getViewerPose(l||a),g=rt,h!==null){const St=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let ct=!1;St.length!==M.cameras.length&&(M.cameras.length=0,ct=!0);for(let Nt=0;Nt<St.length;Nt++){const Gt=St[Nt];let ge=null;if(p!==null)ge=p.getViewport(Gt);else{const Me=u.getViewSubImage(d,Gt);ge=Me.viewport,Nt===0&&(t.setRenderTargetTextures(E,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(E))}let $t=y[Nt];$t===void 0&&($t=new Je,$t.layers.enable(Nt),$t.viewport=new ce,y[Nt]=$t),$t.matrix.fromArray(Gt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Gt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ge.x,ge.y,ge.width,ge.height),Nt===0&&(M.matrix.copy($t.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ct===!0&&M.cameras.push($t)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Nt=u.getDepthInformation(St[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,s.renderState)}}for(let St=0;St<b.length;St++){const ct=v[St],Pt=b[St];ct!==null&&Pt!==void 0&&Pt.update(ct,rt,l||a)}et&&et($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Et=new xl;Et.setAnimationLoop(gt),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}}const si=new xn,r0=new me;function a0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,gl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,E,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),b=E.envMap,v=E.envMapRotation;b&&(m.envMap.value=b,si.copy(v),si.x*=-1,si.y*=-1,si.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(r0.makeRotationFromEuler(si)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function o0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const v=b.program;n.uniformBlockBinding(E,v)}function l(E,b){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const U=b.program;n.updateUBOMapping(E,U);const w=t.render.frame;r[E.id]!==w&&(d(E),r[E.id]=w)}function h(E){const b=u();E.__bindingPointIndex=b;const v=i.createBuffer(),U=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=s[E.id],v=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,A=v.length;w<A;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,M=C.length;y<M;y++){const R=C[y];if(p(R,w,y,U)===!0){const W=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let D=0;D<F.length;D++){const P=F[D],X=_(P);typeof P=="number"||typeof P=="boolean"?(R.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,W+z,R.__data)):P.isMatrix3?(R.__data[0]=P.elements[0],R.__data[1]=P.elements[1],R.__data[2]=P.elements[2],R.__data[3]=0,R.__data[4]=P.elements[3],R.__data[5]=P.elements[4],R.__data[6]=P.elements[5],R.__data[7]=0,R.__data[8]=P.elements[6],R.__data[9]=P.elements[7],R.__data[10]=P.elements[8],R.__data[11]=0):(P.toArray(R.__data,z),z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,v,U){const w=E.value,A=b+"_"+v;if(U[A]===void 0)return typeof w=="number"||typeof w=="boolean"?U[A]=w:U[A]=w.clone(),!0;{const C=U[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return U[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(E){const b=E.uniforms;let v=0;const U=16;for(let A=0,C=b.length;A<C;A++){const y=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,R=y.length;M<R;M++){const W=y[M],F=Array.isArray(W.value)?W.value:[W.value];for(let z=0,D=F.length;z<D;z++){const P=F[z],X=_(P),V=v%U,nt=V%X.boundary,J=V+nt;v+=nt,J!==0&&U-J<X.storage&&(v+=U-J),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=X.storage}}}const w=v%U;return w>0&&(v+=U-w),E.__size=v,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class c0{constructor(t={}){const{canvas:e=Jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=$n,this.toneMappingExposure=1;const v=this;let U=!1,w=0,A=0,C=null,y=-1,M=null;const R=new ce,W=new ce;let F=null;const z=new Xt(0);let D=0,P=e.width,X=e.height,V=1,nt=null,J=null;const et=new ce(0,0,P,X),gt=new ce(0,0,P,X);let Et=!1;const $=new to;let rt=!1,St=!1;const ct=new me,Pt=new me,Nt=new L,Gt=new ce,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Me(){return C===null?V:1}let k=n;function $e(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),k===null){const N="webgl2";if(k=$e(N,S),k===null)throw $e(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let qt,Yt,Ct,de,wt,T,x,G,Z,tt,j,bt,lt,pt,jt,it,_t,Lt,Dt,vt,Kt,zt,he,I;function ot(){qt=new fp(k),qt.init(),zt=new Zm(k,qt),Yt=new op(k,qt,t,zt),Ct=new Jm(k,qt),Yt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),de=new gp(k),wt=new Um,T=new jm(k,qt,Ct,wt,Yt,zt,de),x=new lp(v),G=new dp(v),Z=new Su(k),he=new rp(k,Z),tt=new pp(k,Z,de,he),j=new vp(k,tt,Z,de),Dt=new _p(k,Yt,T),it=new cp(wt),bt=new Im(v,x,G,qt,Yt,he,it),lt=new a0(v,wt),pt=new Om,jt=new Vm(qt),Lt=new sp(v,x,G,Ct,j,p,c),_t=new Ym(v,j,Yt),I=new o0(k,de,Yt,Ct),vt=new ap(k,qt,de),Kt=new mp(k,qt,de),de.programs=bt.programs,v.capabilities=Yt,v.extensions=qt,v.properties=wt,v.renderLists=pt,v.shadowMap=_t,v.state=Ct,v.info=de}ot();const K=new s0(v,k);this.xr=K,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const S=qt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=qt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(P,X,!1))},this.getSize=function(S){return S.set(P,X)},this.setSize=function(S,N,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=S,X=N,e.width=Math.floor(S*V),e.height=Math.floor(N*V),q===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(P*V,X*V).floor()},this.setDrawingBufferSize=function(S,N,q){P=S,X=N,V=q,e.width=Math.floor(S*q),e.height=Math.floor(N*q),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(et)},this.setViewport=function(S,N,q,Y){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,N,q,Y),Ct.viewport(R.copy(et).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(gt)},this.setScissor=function(S,N,q,Y){S.isVector4?gt.set(S.x,S.y,S.z,S.w):gt.set(S,N,q,Y),Ct.scissor(W.copy(gt).multiplyScalar(V).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(S){Ct.setScissorTest(Et=S)},this.setOpaqueSort=function(S){nt=S},this.setTransparentSort=function(S){J=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(S=!0,N=!0,q=!0){let Y=0;if(S){let O=!1;if(C!==null){const st=C.texture.format;O=st===Qa||st===Za||st===ja}if(O){const st=C.texture.type,ut=st===Nn||st===pi||st===hs||st===Hi||st===Ja||st===$a,xt=Lt.getClearColor(),Mt=Lt.getClearAlpha(),It=xt.r,Ft=xt.g,yt=xt.b;ut?(g[0]=It,g[1]=Ft,g[2]=yt,g[3]=Mt,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=It,_[1]=Ft,_[2]=yt,_[3]=Mt,k.clearBufferiv(k.COLOR,0,_))}else Y|=k.COLOR_BUFFER_BIT}N&&(Y|=k.DEPTH_BUFFER_BIT),q&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),jt.dispose(),wt.dispose(),x.dispose(),G.dispose(),j.dispose(),he.dispose(),I.dispose(),bt.dispose(),K.dispose(),K.removeEventListener("sessionstart",mo),K.removeEventListener("sessionend",go),Zn.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=de.autoReset,N=_t.enabled,q=_t.autoUpdate,Y=_t.needsUpdate,O=_t.type;ot(),de.autoReset=S,_t.enabled=N,_t.autoUpdate=q,_t.needsUpdate=Y,_t.type=O}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ot(S){const N=S.target;N.removeEventListener("dispose",Ot),xe(N)}function xe(S){Pe(S),wt.remove(S)}function Pe(S){const N=wt.get(S).programs;N!==void 0&&(N.forEach(function(q){bt.releaseProgram(q)}),S.isShaderMaterial&&bt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,q,Y,O,st){N===null&&(N=ge);const ut=O.isMesh&&O.matrixWorld.determinant()<0,xt=ah(S,N,q,Y,O);Ct.setMaterial(Y,ut);let Mt=q.index,It=1;if(Y.wireframe===!0){if(Mt=tt.getWireframeAttribute(q),Mt===void 0)return;It=2}const Ft=q.drawRange,yt=q.attributes.position;let ee=Ft.start*It,ue=(Ft.start+Ft.count)*It;st!==null&&(ee=Math.max(ee,st.start*It),ue=Math.min(ue,(st.start+st.count)*It)),Mt!==null?(ee=Math.max(ee,0),ue=Math.min(ue,Mt.count)):yt!=null&&(ee=Math.max(ee,0),ue=Math.min(ue,yt.count));const fe=ue-ee;if(fe<0||fe===1/0)return;he.setup(O,Y,xt,q,Mt);let He,se=vt;if(Mt!==null&&(He=Z.get(Mt),se=Kt,se.setIndex(He)),O.isMesh)Y.wireframe===!0?(Ct.setLineWidth(Y.wireframeLinewidth*Me()),se.setMode(k.LINES)):se.setMode(k.TRIANGLES);else if(O.isLine){let Tt=Y.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*Me()),O.isLineSegments?se.setMode(k.LINES):O.isLineLoop?se.setMode(k.LINE_LOOP):se.setMode(k.LINE_STRIP)}else O.isPoints?se.setMode(k.POINTS):O.isSprite&&se.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)se.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))se.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Tt=O._multiDrawStarts,En=O._multiDrawCounts,re=O._multiDrawCount,en=Mt?Z.get(Mt).bytesPerElement:1,vi=wt.get(Y).currentProgram.getUniforms();for(let qe=0;qe<re;qe++)vi.setValue(k,"_gl_DrawID",qe),se.render(Tt[qe]/en,En[qe])}else if(O.isInstancedMesh)se.renderInstances(ee,fe,O.count);else if(q.isInstancedBufferGeometry){const Tt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,En=Math.min(q.instanceCount,Tt);se.renderInstances(ee,fe,En)}else se.render(ee,fe)};function ae(S,N,q){S.transparent===!0&&S.side===ve&&S.forceSinglePass===!1?(S.side=Be,S.needsUpdate=!0,vs(S,N,q),S.side=jn,S.needsUpdate=!0,vs(S,N,q),S.side=ve):vs(S,N,q)}this.compile=function(S,N,q=null){q===null&&(q=S),f=jt.get(q),f.init(N),b.push(f),q.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),S!==q&&S.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const Y=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const st=O.material;if(st)if(Array.isArray(st))for(let ut=0;ut<st.length;ut++){const xt=st[ut];ae(xt,q,O),Y.add(xt)}else ae(st,q,O),Y.add(st)}),b.pop(),f=null,Y},this.compileAsync=function(S,N,q=null){const Y=this.compile(S,N,q);return new Promise(O=>{function st(){if(Y.forEach(function(ut){wt.get(ut).currentProgram.isReady()&&Y.delete(ut)}),Y.size===0){O(S);return}setTimeout(st,10)}qt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let tn=null;function Sn(S){tn&&tn(S)}function mo(){Zn.stop()}function go(){Zn.start()}const Zn=new xl;Zn.setAnimationLoop(Sn),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(S){tn=S,K.setAnimationLoop(S),S===null?Zn.stop():Zn.start()},K.addEventListener("sessionstart",mo),K.addEventListener("sessionend",go),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,C),f=jt.get(S,b.length),f.init(N),b.push(f),Pt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Pt),St=this.localClippingEnabled,rt=it.init(this.clippingPlanes,St),m=pt.get(S,E.length),m.init(),E.push(m),K.enabled===!0&&K.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&fr(st,N,-1/0,v.sortObjects)}fr(S,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,J),$t=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,$t&&Lt.addToRenderList(m,S),this.info.render.frame++,rt===!0&&it.beginShadows();const q=f.state.shadowsArray;_t.render(q,S,N),rt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,O=m.transmissive;if(f.setupLights(),N.isArrayCamera){const st=N.cameras;if(O.length>0)for(let ut=0,xt=st.length;ut<xt;ut++){const Mt=st[ut];vo(Y,O,S,Mt)}$t&&Lt.render(S);for(let ut=0,xt=st.length;ut<xt;ut++){const Mt=st[ut];_o(m,S,Mt,Mt.viewport)}}else O.length>0&&vo(Y,O,S,N),$t&&Lt.render(S),_o(m,S,N);C!==null&&(T.updateMultisampleRenderTarget(C),T.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(v,S,N),he.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],rt===!0&&it.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function fr(S,N,q,Y){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){Y&&Gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);const ut=j.update(S),xt=S.material;xt.visible&&m.push(S,ut,xt,q,Gt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){const ut=j.update(S),xt=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Gt.copy(S.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Gt.copy(ut.boundingSphere.center)),Gt.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray(xt)){const Mt=ut.groups;for(let It=0,Ft=Mt.length;It<Ft;It++){const yt=Mt[It],ee=xt[yt.materialIndex];ee&&ee.visible&&m.push(S,ut,ee,q,Gt.z,yt)}}else xt.visible&&m.push(S,ut,xt,q,Gt.z,null)}}const st=S.children;for(let ut=0,xt=st.length;ut<xt;ut++)fr(st[ut],N,q,Y)}function _o(S,N,q,Y){const O=S.opaque,st=S.transmissive,ut=S.transparent;f.setupLightsView(q),rt===!0&&it.setGlobalState(v.clippingPlanes,q),Y&&Ct.viewport(R.copy(Y)),O.length>0&&_s(O,N,q),st.length>0&&_s(st,N,q),ut.length>0&&_s(ut,N,q),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function vo(S,N,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new mi(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?ds:Nn,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const st=f.state.transmissionRenderTarget[Y.id],ut=Y.viewport||R;st.setSize(ut.z,ut.w);const xt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(z),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),$t&&Lt.render(q);const Mt=v.toneMapping;v.toneMapping=$n;const It=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),rt===!0&&it.setGlobalState(v.clippingPlanes,Y),_s(S,q,Y),T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let yt=0,ee=N.length;yt<ee;yt++){const ue=N[yt],fe=ue.object,He=ue.geometry,se=ue.material,Tt=ue.group;if(se.side===ve&&fe.layers.test(Y.layers)){const En=se.side;se.side=Be,se.needsUpdate=!0,xo(fe,q,Y,He,se,Tt),se.side=En,se.needsUpdate=!0,Ft=!0}}Ft===!0&&(T.updateMultisampleRenderTarget(st),T.updateRenderTargetMipmap(st))}v.setRenderTarget(xt),v.setClearColor(z,D),It!==void 0&&(Y.viewport=It),v.toneMapping=Mt}function _s(S,N,q){const Y=N.isScene===!0?N.overrideMaterial:null;for(let O=0,st=S.length;O<st;O++){const ut=S[O],xt=ut.object,Mt=ut.geometry,It=Y===null?ut.material:Y,Ft=ut.group;xt.layers.test(q.layers)&&xo(xt,N,q,Mt,It,Ft)}}function xo(S,N,q,Y,O,st){S.onBeforeRender(v,N,q,Y,O,st),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(v,N,q,Y,S,st),O.transparent===!0&&O.side===ve&&O.forceSinglePass===!1?(O.side=Be,O.needsUpdate=!0,v.renderBufferDirect(q,N,Y,O,S,st),O.side=jn,O.needsUpdate=!0,v.renderBufferDirect(q,N,Y,O,S,st),O.side=ve):v.renderBufferDirect(q,N,Y,O,S,st),S.onAfterRender(v,N,q,Y,O,st)}function vs(S,N,q){N.isScene!==!0&&(N=ge);const Y=wt.get(S),O=f.state.lights,st=f.state.shadowsArray,ut=O.state.version,xt=bt.getParameters(S,O.state,st,N,q),Mt=bt.getProgramCacheKey(xt);let It=Y.programs;Y.environment=S.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(S.isMeshStandardMaterial?G:x).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",Ot),It=new Map,Y.programs=It);let Ft=It.get(Mt);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===ut)return yo(S,xt),Ft}else xt.uniforms=bt.getUniforms(S),S.onBeforeCompile(xt,v),Ft=bt.acquireProgram(xt,Mt),It.set(Mt,Ft),Y.uniforms=xt.uniforms;const yt=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=it.uniform),yo(S,xt),Y.needsLights=ch(S),Y.lightsStateVersion=ut,Y.needsLights&&(yt.ambientLightColor.value=O.state.ambient,yt.lightProbe.value=O.state.probe,yt.directionalLights.value=O.state.directional,yt.directionalLightShadows.value=O.state.directionalShadow,yt.spotLights.value=O.state.spot,yt.spotLightShadows.value=O.state.spotShadow,yt.rectAreaLights.value=O.state.rectArea,yt.ltc_1.value=O.state.rectAreaLTC1,yt.ltc_2.value=O.state.rectAreaLTC2,yt.pointLights.value=O.state.point,yt.pointLightShadows.value=O.state.pointShadow,yt.hemisphereLights.value=O.state.hemi,yt.directionalShadowMap.value=O.state.directionalShadowMap,yt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,yt.spotShadowMap.value=O.state.spotShadowMap,yt.spotLightMatrix.value=O.state.spotLightMatrix,yt.spotLightMap.value=O.state.spotLightMap,yt.pointShadowMap.value=O.state.pointShadowMap,yt.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function Mo(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=$s.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function yo(S,N){const q=wt.get(S);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function ah(S,N,q,Y,O){N.isScene!==!0&&(N=ge),T.resetTextureUnits();const st=N.fog,ut=Y.isMeshStandardMaterial?N.environment:null,xt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:qi,Mt=(Y.isMeshStandardMaterial?G:x).get(Y.envMap||ut),It=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ft=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),yt=!!q.morphAttributes.position,ee=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let fe=$n;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=v.toneMapping);const He=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=He!==void 0?He.length:0,Tt=wt.get(Y),En=f.state.lights;if(rt===!0&&(St===!0||S!==M)){const je=S===M&&Y.id===y;it.setState(Y,S,je)}let re=!1;Y.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==En.state.version||Tt.outputColorSpace!==xt||O.isBatchedMesh&&Tt.batching===!1||!O.isBatchedMesh&&Tt.batching===!0||O.isBatchedMesh&&Tt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Tt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Tt.instancing===!1||!O.isInstancedMesh&&Tt.instancing===!0||O.isSkinnedMesh&&Tt.skinning===!1||!O.isSkinnedMesh&&Tt.skinning===!0||O.isInstancedMesh&&Tt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Tt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Tt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Tt.instancingMorph===!1&&O.morphTexture!==null||Tt.envMap!==Mt||Y.fog===!0&&Tt.fog!==st||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==it.numPlanes||Tt.numIntersection!==it.numIntersection)||Tt.vertexAlphas!==It||Tt.vertexTangents!==Ft||Tt.morphTargets!==yt||Tt.morphNormals!==ee||Tt.morphColors!==ue||Tt.toneMapping!==fe||Tt.morphTargetsCount!==se)&&(re=!0):(re=!0,Tt.__version=Y.version);let en=Tt.currentProgram;re===!0&&(en=vs(Y,N,O));let vi=!1,qe=!1,$i=!1;const pe=en.getUniforms(),pn=Tt.uniforms;if(Ct.useProgram(en.program)&&(vi=!0,qe=!0,$i=!0),Y.id!==y&&(y=Y.id,qe=!0),vi||M!==S){Ct.buffers.depth.getReversed()?(ct.copy(S.projectionMatrix),jh(ct),Zh(ct),pe.setValue(k,"projectionMatrix",ct)):pe.setValue(k,"projectionMatrix",S.projectionMatrix),pe.setValue(k,"viewMatrix",S.matrixWorldInverse);const Fn=pe.map.cameraPosition;Fn!==void 0&&Fn.setValue(k,Nt.setFromMatrixPosition(S.matrixWorld)),Yt.logarithmicDepthBuffer&&pe.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pe.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,qe=!0,$i=!0)}if(O.isSkinnedMesh){pe.setOptional(k,O,"bindMatrix"),pe.setOptional(k,O,"bindMatrixInverse");const je=O.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),pe.setValue(k,"boneTexture",je.boneTexture,T))}O.isBatchedMesh&&(pe.setOptional(k,O,"batchingTexture"),pe.setValue(k,"batchingTexture",O._matricesTexture,T),pe.setOptional(k,O,"batchingIdTexture"),pe.setValue(k,"batchingIdTexture",O._indirectTexture,T),pe.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&pe.setValue(k,"batchingColorTexture",O._colorsTexture,T));const ji=q.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Dt.update(O,q,en),(qe||Tt.receiveShadow!==O.receiveShadow)&&(Tt.receiveShadow=O.receiveShadow,pe.setValue(k,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(pn.envMap.value=Mt,pn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(pn.envMapIntensity.value=N.environmentIntensity),qe&&(pe.setValue(k,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&oh(pn,$i),st&&Y.fog===!0&&lt.refreshFogUniforms(pn,st),lt.refreshMaterialUniforms(pn,Y,V,X,f.state.transmissionRenderTarget[S.id]),$s.upload(k,Mo(Tt),pn,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&($s.upload(k,Mo(Tt),pn,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pe.setValue(k,"center",O.center),pe.setValue(k,"modelViewMatrix",O.modelViewMatrix),pe.setValue(k,"normalMatrix",O.normalMatrix),pe.setValue(k,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const je=Y.uniformsGroups;for(let Fn=0,kn=je.length;Fn<kn;Fn++){const So=je[Fn];I.update(So,en),I.bind(So,en)}}return en}function oh(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function ch(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,N,q){wt.get(S.texture).__webglTexture=N,wt.get(S.depthTexture).__webglTexture=q;const Y=wt.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const q=wt.get(S);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,q=0){C=S,w=N,A=q;let Y=!0,O=null,st=!1,ut=!1;if(S){const Mt=wt.get(S);if(Mt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(k.FRAMEBUFFER,null),Y=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Mt.__hasExternalTextures)T.rebindTextures(S,wt.get(S.texture).__webglTexture,wt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const yt=S.depthTexture;if(Mt.__boundDepthTexture!==yt){if(yt!==null&&wt.has(yt)&&(S.width!==yt.image.width||S.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const It=S.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ut=!0);const Ft=wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?O=Ft[N][q]:O=Ft[N],st=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?O=wt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[q]:O=Ft,R.copy(S.viewport),W.copy(S.scissor),F=S.scissorTest}else R.copy(et).multiplyScalar(V).floor(),W.copy(gt).multiplyScalar(V).floor(),F=Et;if(Ct.bindFramebuffer(k.FRAMEBUFFER,O)&&Y&&Ct.drawBuffers(S,O),Ct.viewport(R),Ct.scissor(W),Ct.setScissorTest(F),st){const Mt=wt.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,q)}else if(ut){const Mt=wt.get(S.texture),It=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Mt.__webglTexture,q||0,It)}y=-1},this.readRenderTargetPixels=function(S,N,q,Y,O,st,ut){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Ct.bindFramebuffer(k.FRAMEBUFFER,xt);try{const Mt=S.texture,It=Mt.format,Ft=Mt.type;if(!Yt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-Y&&q>=0&&q<=S.height-O&&k.readPixels(N,q,Y,O,zt.convert(It),zt.convert(Ft),st)}finally{const Mt=C!==null?wt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(k.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,N,q,Y,O,st,ut){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const Mt=S.texture,It=Mt.format,Ft=Mt.type;if(!Yt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-Y&&q>=0&&q<=S.height-O){Ct.bindFramebuffer(k.FRAMEBUFFER,xt);const yt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,yt),k.bufferData(k.PIXEL_PACK_BUFFER,st.byteLength,k.STREAM_READ),k.readPixels(N,q,Y,O,zt.convert(It),zt.convert(Ft),0);const ee=C!==null?wt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(k.FRAMEBUFFER,ee);const ue=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await $h(k,ue,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,yt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,st),k.deleteBuffer(yt),k.deleteSync(ue),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,q=0){S.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const Y=Math.pow(2,-q),O=Math.floor(S.image.width*Y),st=Math.floor(S.image.height*Y),ut=N!==null?N.x:0,xt=N!==null?N.y:0;T.setTexture2D(S,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,ut,xt,O,st),Ct.unbindTexture()},this.copyTextureToTexture=function(S,N,q=null,Y=null,O=0){S.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],N=arguments[2],O=arguments[3]||0,q=null);let st,ut,xt,Mt,It,Ft,yt,ee,ue;const fe=S.isCompressedTexture?S.mipmaps[O]:S.image;q!==null?(st=q.max.x-q.min.x,ut=q.max.y-q.min.y,xt=q.isBox3?q.max.z-q.min.z:1,Mt=q.min.x,It=q.min.y,Ft=q.isBox3?q.min.z:0):(st=fe.width,ut=fe.height,xt=fe.depth||1,Mt=0,It=0,Ft=0),Y!==null?(yt=Y.x,ee=Y.y,ue=Y.z):(yt=0,ee=0,ue=0);const He=zt.convert(N.format),se=zt.convert(N.type);let Tt;N.isData3DTexture?(T.setTexture3D(N,0),Tt=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Tt=k.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Tt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);const En=k.getParameter(k.UNPACK_ROW_LENGTH),re=k.getParameter(k.UNPACK_IMAGE_HEIGHT),en=k.getParameter(k.UNPACK_SKIP_PIXELS),vi=k.getParameter(k.UNPACK_SKIP_ROWS),qe=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,fe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,fe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Mt),k.pixelStorei(k.UNPACK_SKIP_ROWS,It),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ft);const $i=S.isDataArrayTexture||S.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const pn=wt.get(S),ji=wt.get(N),je=wt.get(pn.__renderTarget),Fn=wt.get(ji.__renderTarget);Ct.bindFramebuffer(k.READ_FRAMEBUFFER,je.__webglFramebuffer),Ct.bindFramebuffer(k.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let kn=0;kn<xt;kn++)$i&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wt.get(S).__webglTexture,O,Ft+kn),S.isDepthTexture?(pe&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wt.get(N).__webglTexture,O,ue+kn),k.blitFramebuffer(Mt,It,st,ut,yt,ee,st,ut,k.DEPTH_BUFFER_BIT,k.NEAREST)):pe?k.copyTexSubImage3D(Tt,O,yt,ee,ue+kn,Mt,It,st,ut):k.copyTexSubImage2D(Tt,O,yt,ee,ue+kn,Mt,It,st,ut);Ct.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?k.texSubImage3D(Tt,O,yt,ee,ue,st,ut,xt,He,se,fe.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(Tt,O,yt,ee,ue,st,ut,xt,He,fe.data):k.texSubImage3D(Tt,O,yt,ee,ue,st,ut,xt,He,se,fe):S.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,yt,ee,st,ut,He,se,fe.data):S.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,yt,ee,fe.width,fe.height,He,fe.data):k.texSubImage2D(k.TEXTURE_2D,O,yt,ee,st,ut,He,se,fe);k.pixelStorei(k.UNPACK_ROW_LENGTH,En),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,re),k.pixelStorei(k.UNPACK_SKIP_PIXELS,en),k.pixelStorei(k.UNPACK_SKIP_ROWS,vi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qe),O===0&&N.generateMipmaps&&k.generateMipmap(Tt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(S,N,q=null,Y=null,O=0){return S.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],N=arguments[3],O=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,q,Y,O)},this.initRenderTarget=function(S){wt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Ct.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,Ct.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class no{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new no(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class l0 extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class h0 extends Ki{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mc=new me,Ba=new ul,Bs=new rr,Hs=new L;class u0 extends be{constructor(t=new Fe,e=new h0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=r,t.ray.intersectsSphere(Bs)===!1)return;Mc.copy(s).invert(),Ba.copy(t.ray).applyMatrix4(Mc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Hs.fromBufferAttribute(u,m),yc(Hs,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Hs.fromBufferAttribute(u,g),yc(Hs,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yc(i,t,e,n,s,r,a){const o=Ba.distanceSqToPoint(i);if(o<e){const c=new L;Ba.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class d0 extends Ne{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ft:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],a=[],o=new L,c=new me;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ce(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ce(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class io extends yn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class f0 extends io{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function so(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Vs=new L,Wr=new so,Xr=new so,qr=new so;class p0 extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Vs.subVectors(s[0],s[1]).add(s[0]),l=Vs);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Vs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Wr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Xr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),qr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Wr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Xr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),qr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Wr.calc(c),Xr.calc(c),qr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function m0(i,t){const e=1-i;return e*e*t}function g0(i,t){return 2*(1-i)*i*t}function _0(i,t){return i*i*t}function cs(i,t,e,n){return m0(i,t)+g0(i,e)+_0(i,n)}function v0(i,t){const e=1-i;return e*e*e*t}function x0(i,t){const e=1-i;return 3*e*e*i*t}function M0(i,t){return 3*(1-i)*i*i*t}function y0(i,t){return i*i*i*t}function ls(i,t,e,n,s){return v0(i,t)+x0(i,e)+M0(i,n)+y0(i,s)}class wl extends yn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ls(t,s.x,r.x,a.x,o.x),ls(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class S0 extends yn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ls(t,s.x,r.x,a.x,o.x),ls(t,s.y,r.y,a.y,o.y),ls(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Al extends yn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E0 extends yn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rl extends yn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cs(t,s.x,r.x,a.x),cs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b0 extends yn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cs(t,s.x,r.x,a.x),cs(t,s.y,r.y,a.y),cs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cl extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Sc(o,c.x,l.x,h.x,u.x),Sc(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var Ec=Object.freeze({__proto__:null,ArcCurve:f0,CatmullRomCurve3:p0,CubicBezierCurve:wl,CubicBezierCurve3:S0,EllipseCurve:io,LineCurve:Al,LineCurve3:E0,QuadraticBezierCurve:Rl,QuadraticBezierCurve3:b0,SplineCurve:Cl});class T0 extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ec[s.type]().fromJSON(s))}return this}}class w0 extends T0{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Al(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Rl(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new wl(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Cl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new io(t,e,n,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ro extends Fe{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ce(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new L,d=new ft,p=new L,g=new L,_=new L;let m=0,f=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let E=0;E<=e;E++){const b=n+E*h*s,v=Math.sin(b),U=Math.cos(b);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*U,a.push(u.x,u.y,u.z),d.x=E/e,d.y=w/(t.length-1),o.push(d.x,d.y);const A=c[3*w+0]*v,C=c[3*w+1],y=c[3*w+0]*U;l.push(A,C,y)}}for(let E=0;E<e;E++)for(let b=0;b<t.length-1;b++){const v=b+E*t.length,U=v,w=v+t.length,A=v+t.length+1,C=v+1;r.push(U,w,C),r.push(A,C,w)}this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("uv",new le(o,2)),this.setAttribute("normal",new le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.points,t.segments,t.phiStart,t.phiLength)}}class ao extends ro{constructor(t=1,e=1,n=4,s=8){const r=new w0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ao(t.radius,t.length,t.capSegments,t.radialSegments)}}class Wi extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new L,h=new ft;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ln extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2));function E(){const v=new L,U=new L;let w=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const y=[],M=C/r,R=M*(e-t)+t;for(let W=0;W<=s;W++){const F=W/s,z=F*c+o,D=Math.sin(z),P=Math.cos(z);U.x=R*D,U.y=-M*n+m,U.z=R*P,u.push(U.x,U.y,U.z),v.set(D,A,P).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-M),y.push(g++)}_.push(y)}for(let C=0;C<s;C++)for(let y=0;y<r;y++){const M=_[y][C],R=_[y+1][C],W=_[y+1][C+1],F=_[y][C+1];(t>0||y!==0)&&(h.push(M,R,F),w+=3),(e>0||y!==r-1)&&(h.push(R,W,F),w+=3)}l.addGroup(f,w,0),f+=w}function b(v){const U=g,w=new ft,A=new L;let C=0;const y=v===!0?t:e,M=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const R=g;for(let W=0;W<=s;W++){const z=W/s*c+o,D=Math.cos(z),P=Math.sin(z);A.x=y*P,A.y=m*M,A.z=y*D,u.push(A.x,A.y,A.z),d.push(0,M,0),w.x=D*.5+.5,w.y=P*.5*M+.5,p.push(w.x,w.y),g++}for(let W=0;W<s;W++){const F=U+W,z=R+W;v===!0?h.push(z,z+1,F):h.push(z+1,z,F),C+=3}l.addGroup(f,C,v===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Re extends ln{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Re(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oo extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const b=new L,v=new L,U=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],b),p(e[w+1],v),p(e[w+2],U),c(b,v,U,E)}function c(E,b,v,U){const w=U+1,A=[];for(let C=0;C<=w;C++){A[C]=[];const y=E.clone().lerp(v,C/w),M=b.clone().lerp(v,C/w),R=w-C;for(let W=0;W<=R;W++)W===0&&C===w?A[C][W]=y:A[C][W]=y.clone().lerp(M,W/R)}for(let C=0;C<w;C++)for(let y=0;y<2*(w-C)-1;y++){const M=Math.floor(y/2);y%2===0?(d(A[C][M+1]),d(A[C+1][M]),d(A[C][M])):(d(A[C][M+1]),d(A[C+1][M+1]),d(A[C+1][M]))}}function l(E){const b=new L;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(E),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){const E=new L;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const v=m(E)/2/Math.PI+.5,U=f(E)/Math.PI+.5;a.push(v,1-U)}g(),u()}function u(){for(let E=0;E<a.length;E+=6){const b=a[E+0],v=a[E+2],U=a[E+4],w=Math.max(b,v,U),A=Math.min(b,v,U);w>.9&&A<.1&&(b<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),U<.2&&(a[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,b){const v=E*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){const E=new L,b=new L,v=new L,U=new L,w=new ft,A=new ft,C=new ft;for(let y=0,M=0;y<r.length;y+=9,M+=6){E.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),w.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),U.copy(E).add(b).add(v).divideScalar(3);const R=m(U);_(w,M+0,E,R),_(A,M+2,b,R),_(C,M+4,v,R)}}function _(E,b,v,U){U<0&&E.x===1&&(a[b]=E.x-1),v.x===0&&v.z===0&&(a[b]=U/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.vertices,t.indices,t.radius,t.details)}}class co extends oo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new co(t.radius,t.detail)}}class cr extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,p=new L,g=new ft;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const E=f+m,b=E,v=E+n+1,U=E+n+2,w=E+1;o.push(b,v,w),o.push(v,U,w)}}this.setIndex(o),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gi extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new L,d=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],b=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){const w=U/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+v,1-b),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const b=h[f][E+1],v=h[f][E],U=h[f+1][E],w=h[f+1][E+1];(f!==0||a>0)&&p.push(b,v,w),(f!==n-1||c<Math.PI)&&p.push(v,U,w)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gs extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;a.push(_,m,E),a.push(m,f,E)}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yn extends Ki{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const bc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class A0{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const R0=new A0;class lo{constructor(t){this.manager=t!==void 0?t:R0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}lo.DEFAULT_MATERIAL_NAME="__DEFAULT";class C0 extends lo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=bc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=us("img");function c(){h(),bc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class L0 extends lo{constructor(t){super(t)}load(t,e,n,s){const r=new Ne,a=new C0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ho extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class P0 extends ho{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yr=new me,Tc=new L,wc=new L;class Ll{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ac=new me,is=new L,Kr=new L;class D0 extends Ll{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),is.setFromMatrixPosition(t.matrixWorld),n.position.copy(is),Kr.copy(n.position),Kr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Kr),n.updateMatrixWorld(),s.makeTranslation(-is.x,-is.y,-is.z),Ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac)}}class Pl extends ho{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new D0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class I0 extends Ll{constructor(){super(new Ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rc extends ho{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new I0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class U0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);const N0=`attribute float aSize; attribute float aAlpha; attribute vec3 aColor; uniform float uScale;
varying vec3 vC; varying float vA;
void main(){ vC=aColor; vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.);
  gl_PointSize=aSize*uScale/max(.1,-mv.z); gl_Position=projectionMatrix*mv; }`,O0=`varying vec3 vC; varying float vA;
void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.12,d)*vA; if(a<.01) discard; gl_FragColor=vec4(vC,a); }`;class Lc{constructor(t,e,n){this.max=e,this.cur=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.grow=new Float32Array(e),this.a0=new Float32Array(e);const s=this.geo=new Fe;s.setAttribute("position",new Xe(this.pos,3)),s.setAttribute("aColor",new Xe(this.col,3)),s.setAttribute("aSize",new Xe(this.size,1)),s.setAttribute("aAlpha",new Xe(this.alpha,1)),this.mat=new On({vertexShader:N0,fragmentShader:O0,uniforms:{uScale:{value:900}},transparent:!0,depthWrite:!1,blending:n?Fi:di}),this.points=new u0(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?11:10,t.add(this.points)}emit(t,e,n,s,r,a,o,c,l,h,u,d=0,p=0,g=0,_=1){const m=this.cur;this.cur=(m+1)%this.max;const f=m*3;this.pos[f]=t,this.pos[f+1]=e,this.pos[f+2]=n,this.vel[f]=s,this.vel[f+1]=r,this.vel[f+2]=a,this.col[f]=o,this.col[f+1]=c,this.col[f+2]=l,this.size[m]=h,this.life[m]=this.maxLife[m]=u,this.grav[m]=d,this.drag[m]=p,this.grow[m]=g,this.a0[m]=_}update(t){for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;const s=n*3,r=Math.max(0,1-this.drag[n]*t);this.vel[s]*=r,this.vel[s+1]=this.vel[s+1]*r-this.grav[n]*t,this.vel[s+2]*=r,this.pos[s]+=this.vel[s]*t,this.pos[s+1]+=this.vel[s+1]*t,this.pos[s+2]+=this.vel[s+2]*t,this.pos[s+1]<.02&&this.grav[n]>0&&(this.pos[s+1]=.02,this.vel[s+1]*=-.3,this.vel[s]*=.6,this.vel[s+2]*=.6),this.size[n]=Math.max(0,this.size[n]+this.grow[n]*t),this.alpha[n]=this.a0[n]*Math.max(0,Math.min(1,this.life[n]/this.maxLife[n]*1.6))}const e=this.geo.attributes;e.position.needsUpdate=e.aColor.needsUpdate=e.aSize.needsUpdate=e.aAlpha.needsUpdate=!0}}const Jt=()=>Math.random(),_e=()=>Math.random()*2-1,F0=[[.45,.3,.1],[.3,.32,.1],[.5,.18,.08],[.35,.22,.1]];class k0{constructor(t){this.scene=t,this.add=new Lc(t,5e3,!0),this.norm=new Lc(t,3500,!1),this.objs=[]}resize(t){this.add.mat.uniforms.uScale.value=this.norm.mat.uniforms.uScale.value=t*1.25}frac(t){return t*=this.mult??1,Math.floor(t)+(Jt()<t%1?1:0)}fire(t,e,n=.15,s=2,r=.5){for(let a=this.frac(e);a>0;a--){const o=Jt();this.add.emit(t.x+_e()*n,t.y+_e()*n*.5,t.z+_e()*n,_e()*.5,s*(.5+Jt()*.8),_e()*.5,.75,.22+o*.3,.03+o*.1,r*(.6+Jt()*.8),.3+Jt()*.45,-1.2,1,-r*.9)}}fireJet(t,e,n,s=14,r=.7){for(let a=this.frac(n);a>0;a--){const o=Jt(),c=s*(.6+Jt()*.6);this.add.emit(t.x,t.y,t.z,e.x*c+_e()*1.4,e.y*c+_e()*1.2+.5,e.z*c+_e()*1.4,.8,.25+o*.3,.04+o*.1,r*(.5+Jt()),.35+Jt()*.3,-2,.8,r*1.2)}}embers(t,e,n=.6,s=3){for(let r=this.frac(e);r>0;r--)this.add.emit(t.x+_e()*n,t.y+_e()*n,t.z+_e()*n,_e()*s,Jt()*s*1.2,_e()*s,1,.5,.12,.07+Jt()*.06,.6+Jt()*.9,2.5,.6,0)}sparks(t,e,n=[1,.8,.5]){for(let s=this.frac(e);s>0;s--)this.add.emit(t.x,t.y,t.z,_e()*6,_e()*5+1.5,_e()*6,n[0],n[1],n[2],.1+Jt()*.1,.18+Jt()*.25,9,1.5,-.15)}dust(t,e,n=0,s=0,r=3,a=[.32,.24,.18],o=.7){for(let c=this.frac(e);c>0;c--){const l=Jt()*6.283,h=Jt()*r*.6,u=.7+Jt()*.5;this.norm.emit(t.x+_e()*.2,t.y+Jt()*.25,t.z+_e()*.2,n*r*(.4+Jt()*.8)+Math.cos(l)*h,Jt()*1.6,s*r*(.4+Jt()*.8)+Math.sin(l)*h,a[0]*u,a[1]*u,a[2]*u,o*(.5+Jt()*.8),.5+Jt()*.7,.6,1.8,o*1.1,.4)}}smoke(t,e,n=.8){for(let s=this.frac(e);s>0;s--)this.norm.emit(t.x+_e()*.25,t.y+_e()*.5,t.z+_e()*.25,_e()*.8,.6+Jt()*1.2,_e()*.8,.13,.12,.12,n*(.5+Jt()*.7),.6+Jt()*.8,-.3,1,n,.45)}leaves(t,e,n=4,s=0){for(let r=this.frac(e);r>0;r--){const a=Jt()*6.283,o=n*(.3+Jt()*.8),c=F0[Jt()*4|0],l=s?.3+Jt()*s:0;this.norm.emit(t.x+Math.cos(a)*l,t.y+Jt()*1.6,t.z+Math.sin(a)*l,-Math.sin(a)*o+Math.cos(a)*o*(s?.15:1),Jt()*3.5,Math.cos(a)*o+Math.sin(a)*o*(s?.15:1),c[0],c[1],c[2],.1+Jt()*.09,.7+Jt()*.9,3.5,.9,0,1)}}ring(t,e=14207144,n=5,s=.5,r=.06){const a=new ne(new cr(.82,1,56),new Oe({color:e,transparent:!0,opacity:.9,side:ve,depthWrite:!1,blending:Fi,fog:!1}));a.rotation.x=-Math.PI/2,a.position.set(t.x,r,t.z),this.scene.add(a);let o=0;this.objs.push(c=>{o+=c;const l=Math.min(1,o/s),h=1-(1-l)*(1-l);if(a.scale.setScalar(.2+h*n),a.material.opacity=.9*(1-l),l>=1)return this.scene.remove(a),a.geometry.dispose(),a.material.dispose(),!0})}update(t){this.add.update(t),this.norm.update(t);for(let e=this.objs.length-1;e>=0;e--)this.objs[e](t)&&this.objs.splice(e,1)}}function Dl(){const i=new Le;for(let t=0;t<7;t++){const e=new ne(new ln(.24+t*.13,.1+t*.13,.42,18,1,!0),new Oe({color:t%2?10126440:7232586,transparent:!0,opacity:.26,side:ve,depthWrite:!1}));e.position.y=.21+t*.4,e.userData.i=t,i.add(e)}return i.userData.spin=t=>{for(const e of i.children){const n=e.userData.i;e.rotation.y=t*(9+n*1.7),e.position.x=Math.sin(t*7+n*.9)*.05*n,e.position.z=Math.cos(t*6+n*.7)*.05*n}},i}const Xi=(i,t)=>new Oe({color:i,transparent:!0,opacity:t,side:ve,depthWrite:!1,blending:Fi,fog:!1});function Il(){const i=new Le,t=new Yn({color:4862752,roughness:1}),e=new Yn({color:4155946,roughness:1}),n=new ne(new cr(.72,.95,40),Xi(10215520,.8));n.rotation.x=-Math.PI/2,n.position.y=.05,i.add(n);const s=new ne(new Wi(.72,32),Xi(6270522,.25));s.rotation.x=-Math.PI/2,s.position.y=.04,i.add(s);const r=[];for(let a=0;a<9;a++){const o=a/9*6.2832+Math.random()*.3,c=.35+Math.random()*.45,l=1+Math.random()*.8,h=new Le;h.position.set(Math.sin(o)*c,0,Math.cos(o)*c),h.rotation.set(Math.cos(o)*-.38,0,Math.sin(o)*.38);const u=new ne(new Re(.075+Math.random()*.05,l,6),a%3?t:e);u.position.y=l/2,u.castShadow=!0,h.add(u),h.userData.ph=Math.random()*6,i.add(h),r.push(h)}return i.userData.set=(a,o,c)=>{n.visible=s.visible=a>0,n.material.opacity=a*(.55+.35*Math.sin(c*28)),s.material.opacity=a*.28,n.scale.setScalar(1.25-.25*Math.min(1,a));for(const l of r)l.scale.set(1,Math.max(.001,o),1),l.visible=o>.01,l.rotation.y=Math.sin(c*9+l.userData.ph)*.25*o},i.userData.set(0,0,0),i}function z0(){const i=new Le,t=new gi(.5,10,6);for(let e=0;e<3;e++){const n=new ne(t,new Oe({color:e===1?14221194:7327804,transparent:!0,opacity:.9,depthWrite:!1}));n.scale.set(1.25,.035,.34),n.rotation.z=e*2.094,i.add(n)}return i}function B0(){const i=new Le;for(let e=0;e<3;e++){const n=new ne(new gs(1-e*.26,.07+e*.02,6,22,Math.PI),Xi(e===1?14264575:9063935,.75));n.position.z=e*.22,n.position.y=-.9+e*.1,i.add(n)}const t=new ne(new gi(.2,10,8),Xi(15784191,.9));return t.scale.set(1,.5,.5),t.position.set(0,-.25,.45),i.add(t),i}function H0(){const i=new Le,t=Xi(8011007,.32),e=Xi(15918847,.85),n=new gi(1,16,8,0,6.2832,0,Math.PI/2),s=o=>{const c=new Le;c.position.z=-1.5;const l=new Le;l.position.z=1.5,l.scale.y=o,c.add(l);const h=new ne(n,t);h.scale.set(1.15,.6,1.7),l.add(h);for(let u=0;u<9;u++){const d=(u/8-.5)*2.6,p=new ne(new Re(.09,.42,5),e);p.position.set(Math.sin(d)*1.08,-.2,Math.cos(d)*1.6),p.rotation.x=Math.PI,l.add(p)}return i.add(c),c},r=s(1),a=s(-1);return i.userData.open=o=>{r.rotation.x=-o*.85,a.rotation.x=o*.85},i.userData.fade=o=>{t.opacity=.32*o,e.opacity=.85*o},i.userData.open(1),i}function V0(){const i=document.createElement("canvas");i.width=i.height=1024;const t=i.getContext("2d");t.fillStyle="#3a241b",t.fillRect(0,0,1024,1024);for(let n=0;n<90;n++){const s=Math.random()*1024,r=Math.random()*1024,a=70+Math.random()*150,o=50+Math.random()*110,c=30+Math.random()*30;t.fillStyle=`rgb(${c+28},${c+4},${c-8})`,t.globalAlpha=.55,t.beginPath(),t.moveTo(s,r),t.lineTo(s+a,r+Math.random()*20),t.lineTo(s+a-Math.random()*25,r+o),t.lineTo(s+Math.random()*20,r+o-Math.random()*20),t.closePath(),t.fill(),t.globalAlpha=.8,t.strokeStyle="#120a07",t.lineWidth=2+Math.random()*3,t.stroke()}t.globalAlpha=1;for(let n=0;n<9e3;n++){const s=Math.random()*60;t.fillStyle=`rgba(${s+20},${s},${s*.7},.25)`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2)}for(let n=0;n<40;n++){const s=Math.random()*1024,r=Math.random()*1024,a=20+Math.random()*60,o=t.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,n%3?"rgba(20,12,8,.6)":"rgba(40,50,18,.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(s-a,r-a,a*2,a*2)}const e=new d0(i);return e.colorSpace=We,e.anisotropy=8,e}function G0(i,t,e){i.background=new Xt(1378823),i.fog=new no(2363658,.02);const n=new L0().load("./assets/arena.webp");n.colorSpace=We,n.wrapS=js,n.repeat.x=4;const s=new ne(new ln(70,70,62,64,1,!0),new Oe({map:n,side:Be,fog:!1,color:13619151}));s.position.y=5.5,i.add(s);const r=new ne(new Wi(e+2.5,72),new Yn({map:V0(),roughness:.48,metalness:.12}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,i.add(r);const a=new ne(new Wi(75,48),new Yn({color:1707786,roughness:.3,metalness:.3}));a.rotation.x=-Math.PI/2,a.position.y=-.04,i.add(a);const o=new Yn({color:2759959,roughness:.9}),c=new Yn({color:2824720,roughness:.95}),l=new Yn({color:1848084,roughness:.8,side:ve});for(let g=0;g<26;g++){const _=Math.random()*6.283,m=e+2.2+Math.random()*2.5,f=.25+Math.random()*.6,E=new ne(new co(f,0),o);E.position.set(Math.cos(_)*m,f*.3,Math.sin(_)*m),E.rotation.set(Math.random()*3,Math.random()*3,0),E.castShadow=!0,i.add(E)}for(let g=0;g<16;g++){const _=g/16*6.283+Math.random()*.2,m=e+2.6+Math.random()*1.5,f=new ne(new gs(.9+Math.random()*.8,.09+Math.random()*.08,6,14,Math.PI),c);f.position.set(Math.cos(_)*m,-.1,Math.sin(_)*m),f.rotation.y=Math.random()*6,f.castShadow=!0,i.add(f);for(let E=0;E<5;E++){const b=new ne(new Re(.16,1+Math.random()*.7,4),l);b.position.set(Math.cos(_+.25)*(m+.6),.4,Math.sin(_+.25)*(m+.6)),b.rotation.set(ss()*.9,Math.random()*6,ss()*.9),b.scale.z=.25,i.add(b)}}for(let g=0;g<7;g++){const _=g/7*6.283+.4,m=19+Math.random()*9,f=new ne(new ln(.9+Math.random()*.6,1.6+Math.random()*.8,26,9),c);f.position.set(Math.cos(_)*m,12.5,Math.sin(_)*m),f.rotation.z=ss()*.08,i.add(f);for(let E=0;E<5;E++){const b=new ne(new ln(.03,.03,5+Math.random()*8,4),l);b.position.set(Math.cos(_)*m+ss()*4,14-Math.random()*3,Math.sin(_)*m+ss()*4),i.add(b)}}i.add(new P0(12166550,1840402,1.7));const h=new Rc(16754026,2.3);h.position.set(-12,13,-9),h.castShadow=!0,h.shadow.mapSize.set(2048,2048);const u=h.shadow.camera;u.left=u.bottom=-15,u.right=u.top=15,u.far=50,h.shadow.bias=-5e-4,i.add(h);const d=new Rc(8365272,1.7);d.position.set(10,6,12),i.add(d);const p=[];for(let g=0;g<5;g++){const _=g/5*6.283+.6,m=Math.cos(_)*(e+1.7),f=Math.sin(_)*(e+1.7),E=new ne(new ln(.07,.1,1.7,7),c);E.position.set(m,.85,f),E.castShadow=!0,i.add(E);const b=new ne(new ln(.24,.1,.22,9),o);b.position.set(m,1.78,f),i.add(b);const v={p:new L(m,1.95,f),light:null};g%2===0&&(v.light=new Pl(16742954,30,16,2),v.light.position.copy(v.p).setY(2.3),i.add(v.light)),p.push(v)}return{sun:h,torchLights:p.filter(g=>g.light).map(g=>g.light),update(g,_){for(const m of p)t.fire(m.p,60*g,.09,1.6,.5),m.light&&(m.light.intensity=16+Math.sin(_*17+m.p.x)*5+Math.random()*4);if(Math.random()<g*6){const m=Math.random()*6.283,f=Math.random()*14;t.embers({x:Math.cos(m)*f,y:.2,z:Math.sin(m)*f},1,.2,.5)}}}}const ss=()=>Math.random()*2-1,Ht=(i,t={})=>new Yn({color:i,roughness:.75,...t}),B=(i,t,e,n=0,s=0,r=0)=>{const a=new ne(t,e);return a.position.set(n,s,r),a.castShadow=!0,i.add(a),a},Vt=(i,t=0,e=0,n=0)=>{const s=new Le;return s.position.set(t,e,n),i.add(s),s},ze=(i,t)=>new ao(i,t,4,10),Zt=(i,t,e,n=10,s=!1)=>new ln(i,t,e,n,1,s),At=i=>new gi(i,14,10),Qt=(i,t,e=6.2832)=>new gs(i,t,6,18,e),Wt=Math.PI/2,Ul=(i,t,e)=>i+(t-i)*e,un=i=>i*i*(3-2*i),Ha={y:0,lean:.12,twist:.45,roll:0,spine:.12,head:-.05,aLx:-1,aLz:.2,eL:-1.6,aRx:-.55,aRz:-.25,eR:-1.8,legX:-.1,knee:.3,sc:1,rate:16};function Pc(i,t){const e={...Ha},n=i.pk,s=i.phase;let r=0;const a=o=>Object.assign(e,o);switch(i.anim){case"idle":{const o=Math.abs(Math.sin(t*5));e.y=o*.07,e.knee=.5-o*.35;break}case"walk":{const o=Math.abs(Math.sin(t*10));a({y:o*.22,knee:.8-o*.7,lean:.24,legX:-.3+o*.25});break}case"block":a({aLx:-1.75,eL:-2.2,aRx:-1.75,eR:-2.2,aLz:-.2,aRz:.2,lean:-.05,spine:.32,knee:.7,y:-.06,head:.25});break;case"punchL":s===0?a({aLx:-.3,eL:-2.3,twist:.8}):s===1&&a({aLx:-1.55,eL:-.05,aLz:-.1,twist:-.25,lean:.3,rate:40});break;case"punchR":s===0?a({aRx:-.3,eR:-2.3,twist:0}):s===1&&a({aRx:-1.55,eR:-.05,aRz:.1,twist:1.1,lean:.32,rate:40});break;case"elbow":s===0?a({aLx:.5,eL:-1.2,twist:1,y:.1}):s===1&&a({aLx:-1.9,eL:-1.9,aLz:-.5,twist:-.5,lean:.45,y:.12,rate:40});break;case"spinkick":{const o=i.mt[0]+i.mt[1];r=Math.min(1,i.st/o)*6.2832,a(s===0?{y:.1+n*.4,knee:1.5-n,lean:-.3,legX:-.6,aLz:.9,aRz:-.9}:s===1?{y:.5,lean:-1.15,knee:0,legX:0,aLz:1.2,aRz:-1.2,aLx:0,aRx:0,eL:-.3,eR:-.3,rate:40}:{knee:.9-n*.5,y:0});break}case"blocklow":a({aLx:-1.5,eL:-2.1,aRx:-1.5,eR:-2.1,aLz:-.2,aRz:.2,lean:.25,spine:.5,knee:1.55,y:-.42,head:.3});break;case"hopPunch":s===0?a({y:.15+n*.3,knee:1.2,aRx:-.3,eR:-2.3,twist:0,lean:.3}):s===1&&a({y:.12,aRx:-1.6,eR:-.05,aRz:.1,twist:1.1,lean:.5,knee:.4,rate:40});break;case"axe":a(s===0?{y:.15+n*.45,lean:-.55,legX:-1.7,knee:0,aLz:.8,aRz:-.8,rate:26}:s===1?{y:.05,lean:.15,legX:-.5,knee:0,aLx:.4,aRx:.4,rate:44}:{knee:.8-n*.4});break;case"slap":s===0?a({aLx:-1.3,aLz:1.3,eL:-.4,twist:.95,lean:-.2,y:.12}):s===1&&a({aLx:-1.5,aLz:-.7,eL:-.05,twist:-.7,lean:-.15,rate:40});break;case"meialua":{const o=i.mt[0]+i.mt[1];r=-Math.min(1,i.st/o)*6.2832,a(s===0?{y:-.1,lean:.7,spine:.4,knee:1.1,aLx:-.6,aRx:-.6,eL:-.2,eR:-.2}:s===1?{y:.22,lean:-1.3,roll:.35,knee:0,legX:0,aLx:.9,aRx:.9,eL:-.15,eR:-.15,rate:40}:{knee:.9-n*.5});break}case"lowJab":a(s===0?{y:-.32,knee:1.5,lean:.35,aRx:-.2,eR:-2.2,twist:0}:s===1?{y:-.4,knee:1.6,lean:.7,spine:.35,aRx:-.9,eR:-.05,twist:1,rate:40}:{y:-.2*(1-n),knee:1.1});break;case"sweep":{const o=i.mt[0]+i.mt[1];r=Math.min(1,i.st/o)*6.2832,a(s===0?{y:-.3-n*.25,knee:1.5-n,lean:-.5-n*.5,aLx:.9,aRx:.9,eL:-.3,eR:-.3}:s===1?{y:-.6,lean:-1.42,knee:0,legX:0,aLx:1,aRx:1,aLz:.7,aRz:-.7,eL:-.2,eR:-.2,rate:40}:{y:-.4*(1-n),knee:1.2});break}case"dodge":{const o=Math.sin(n*Math.PI);i.dodgeSide?(r=i.dodgeSide*un(n)*6.2832,a({y:o*.3,knee:1.5,legX:-.7,roll:-i.dodgeSide*.3*o,aLz:.9,aRz:-.9,rate:30})):a({y:o*.4,lean:-.35,knee:1.1,aLx:-1.6,aRx:-1.6,rate:30});break}case"grab":s===0?a({aLx:-1.4,aRx:-1.4,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,lean:.2,twist:0}):s===1&&a({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.7,eR:-.7,lean:.5,twist:0,rate:40});break;case"grabHold":a({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.9,eR:-.9,lean:.45,twist:0,y:Math.sin(t*40)*.015,rate:30});break;case"grabThrow":r=-un(n)*3.1416,a({aLx:-2.3,aRx:-2.3,eL:-.2,eR:-.2,lean:-.25,twist:0,y:.15,rate:34});break;case"whirl":r=i.st*26,a({aLx:0,aRx:0,aLz:1.45,aRz:-1.45,eL:-.2,eR:-.2,y:.12,lean:0,twist:0,knee:.5}),s===2&&(r=i.st*26*(1-n*.5));break;case"voadora":s===0?a({y:-.28,knee:1.6,lean:.55,aLx:.9,aRx:.9,eL:-.4,eR:-.4,legX:-.9}):s===1?n<.4?(r=n/.4*6.2832,a({knee:1.9,legX:-1.2,lean:.2,aLz:.8,aRz:-.8,rate:30})):a({lean:-1.2,knee:0,legX:0,aLx:.3,aRx:.3,aLz:1.1,aRz:-1.1,eL:-.2,eR:-.2,twist:0,rate:30}):a({y:-.2*(1-n),knee:1.3*(1-n)+.3,lean:.5*(1-n)});break;case"dive":a({lean:-.75,knee:0,legX:0,aLx:.6,aRx:.6,aLz:1.2,aRz:-1.2,eL:-.2,eR:-.2,twist:0,rate:40});break;case"vanish":r=i.st*30,a({sc:0,rate:22,aLz:1,aRz:-1});break;case"gone":a({sc:0,rate:60});break;case"appear":r=(1-n)*8,a({sc:1,rate:22});break;case"superstart":r=i.st*14,a({y:.35,aLx:0,aRx:0,aLz:1.5,aRz:-1.5,eL:0,eR:0,knee:.9});break;case"hit":a({lean:-.4,head:-.5,spine:-.25,aLx:-.3,aRx:-.2,eL:-.8,eR:-.8,knee:.6,rate:35});break;case"air":a({lean:-1.05,head:-.3,knee:.7,legX:-.5,aLx:-2.2,aRx:-2.4,eL:-.3,eR:-.3,aLz:.5,aRz:-.5,y:.2});break;case"down":case"ko":a({y:-.84,lean:-1.52,knee:.25,legX:0,aLx:-.2,aRx:-.2,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,head:-.1,twist:0,spine:0,rate:22});break;case"getup":a({y:-.84*(1-un(n)),lean:Ul(-1.4,.4,un(n)),knee:1.3*(1-n)+.3});break;case"win":{const o=Math.abs(Math.sin(t*6));a({y:o*.35,knee:.9-o*.8,aLx:-2.9,aRx:-2.9,aLz:.35,aRz:-.35,eL:-.2,eR:-.2,twist:0,lean:0,head:-.25});break}}return e.spin=r,e}function W0(){const i=Ht(6042659,{roughness:.5}),t=Ht(4663323,{roughness:.55}),e=Ht(8197394,{roughness:.95,side:ve}),n=Ht(4853005,{roughness:1,side:ve}),s=Ht(1643027,{roughness:1,side:ve}),r=Ht(10256985,{roughness:1}),a=Ht(11897914,{metalness:.8,roughness:.35}),o=Ht(14537398,{roughness:.6}),c=Ht(8145442,{roughness:.45}),l=new Oe({color:16756800}),h=Ht(13483936,{roughness:1}),u=new Le,d=Vt(u),p=Vt(d,0,1,0);B(p,At(.17),i,0,.02,0).scale.set(1.15,.85,.9),B(p,Zt(.19,.35,.44,14,!0),e,0,-.17,0);for(let P=0;P<18;P++){const X=P/18*6.2832,V=.18+Math.random()*.36,nt=.33;B(p,new Se(.1,V,.012),[e,n,s][P%3],Math.sin(X)*nt,-.36-V/2,Math.cos(X)*nt).rotation.set(-.15,X,0,"YXZ")}B(p,new Se(.3,.5,.012),s,-.24,-.3,.16).rotation.set(.1,-.9,.15),B(p,Qt(.2,.035),r,0,.05,0).rotation.x=Wt,B(p,Qt(.21,.025),n,0,0,0).rotation.x=Wt+.12;for(let P=0;P<6;P++)B(p,At(.022),o,Math.sin(P*.35-.9)*.23,.02-P%2*.05,Math.cos(P*.35-.9)*.23);B(p,At(.11),c,-.29,-.1,.04),B(p,At(.055),c,-.29,.03,.04),B(p,Zt(.02,.025,.05),s,-.29,.09,.04),B(p,Zt(.06,.06,.014,12),a,.09,-.14,.3).rotation.x=Wt,B(p,Zt(.02,.04,.07,8),a,.17,-.2,.27);const _=Vt(p,0,-.05,0);B(_,ze(.108,.3),i,0,-.23,0);const m=Vt(_,0,-.46,0);B(m,At(.095),t),B(m,ze(.085,.28),i,0,-.2,0),B(m,Zt(.097,.085,.24,10),r,0,-.27,0),B(m,Qt(.088,.016),e,0,-.4,0).rotation.x=Wt,B(m,Qt(.086,.012),a,0,-.43,0).rotation.x=Wt,B(m,new Se(.13,.07,.27),t,0,-.455,.06);const f=Vt(p,0,.08,0);B(f,Zt(.175,.16,.26,12),i,0,.12,0).scale.z=.8,B(f,At(.2),i,0,.37,0).scale.set(1.35,1,.82);for(const P of[1,-1])B(f,At(.085),i,P*.1,.4,.11).scale.set(1.1,.8,.6),B(f,At(.09),i,P*.28,.48,0);for(let P=0;P<3;P++)for(const X of[1,-1])B(f,At(.04),t,X*.055,.2-P*.07,.12).scale.z=.5;const E=B(f,Qt(.15,.014),e,0,.5,.02);E.rotation.x=Wt+.35;const b=B(f,Qt(.19,.012),o,0,.44,.05);b.rotation.x=Wt+.55;const v=B(f,Qt(.12,.012),a,0,.54,.01);v.rotation.x=Wt+.2,B(f,At(.03),o,0,.31,.19),B(f,Qt(.09,.012,2.6),h,.2,.42,.1).rotation.set(.3,.5,.2),B(f,Zt(.058,.065,.1),i,0,.6,0);const w=Vt(f,0,.71,0);B(w,At(.115),i).scale.set(.9,1.08,.97),B(w,At(.06),i,0,-.07,.05).scale.set(1.1,.8,1);for(const P of[1,-1])B(w,At(.014),l,P*.042,.015,.1),B(w,Qt(.026,.006),a,P*.108,-.06,0),B(w,new Se(.05,.012,.02),s,P*.042,.04,.102).rotation.z=-P*.35;B(w,new Re(.02,.06,5),s,0,-.13,.08).rotation.x=Math.PI;for(let P=0;P<10;P++){const X=P/10*6.28;Math.cos(X)>.5||B(w,ze(.016,.05),s,Math.sin(X)*.1,-.01,Math.cos(X)*.1)}B(w,Zt(.008,.008,.1,6),s,.035,-.065,.15).rotation.x=Wt,B(w,Zt(.02,.014,.035,8),c,.035,-.05,.2),B(w,Zt(.118,.125,.1,12),e,0,.075,0);const A=Vt(w,0,.11,0);A.rotation.set(-.35,0,-.45),B(A,Zt(.07,.118,.17,10),e,0,.07,0);const C=Vt(A,0,.15,0);C.rotation.z=-.8,B(C,Zt(.035,.07,.19,8),n,0,.08,0);const y=Vt(C,0,.17,0);y.rotation.z=-.9,B(y,Zt(.012,.035,.2,6),e,0,.09,0),B(y,Qt(.022,.006),a,0,.21,0);const M=P=>{const X=Vt(f,P*.31,.49,0);B(X,ze(.072,.19),i,0,-.14,0),B(X,Qt(.078,.013),e,0,-.12,0).rotation.x=Wt,B(X,Qt(.076,.008),h,0,-.2,0).rotation.x=Wt;const V=Vt(X,0,-.3,0);return B(V,ze(.058,.19),i,0,-.13,0),B(V,Zt(.068,.06,.12),r,0,-.2,0),B(V,Qt(.064,.012),e,0,-.13,0).rotation.x=Wt,B(V,At(.06),t,0,-.31,0),[X,V]},[R,W]=M(1),[F,z]=M(-1),D={...Ha};return{root:u,cur:D,flameK:0,snap(P,X){Object.assign(D,Pc(P,X))},update(P,X,V){const nt=Pc(P,V),J=Math.min(1,X*nt.rate);for(const gt in Ha)gt!=="rate"&&(D[gt]+=(nt[gt]-D[gt])*J);d.position.y=D.y,d.rotation.y=nt.spin+(P.spinExtra||0),d.scale.setScalar(Math.max(.001,D.sc)),u.visible=D.sc>.03,p.rotation.set(D.lean,D.twist,D.roll),f.rotation.set(D.spine,-D.twist*.6,0),w.rotation.set(D.head,-D.twist*.4,0),R.rotation.set(D.aLx,0,D.aLz),W.rotation.x=D.eL,F.rotation.set(D.aRx,0,D.aRz),z.rotation.x=D.eR,_.rotation.x=D.legX,m.rotation.x=D.knee;const et=Math.sin(V*4)*.15;C.rotation.z=-.8+et,y.rotation.z=-.9+et*1.5,C.rotation.x=Math.cos(V*3)*.2}}}const Va={y:0,pitch:0,roll:0,yaw:0,fl:0,fr:0,hl:0,hr:0,kfl:0,kfr:0,khl:0,khr:0,tail:.3,flame:1,rate:12};function Dc(i,t){const e={...Va},n=i.pk,s=i.phase,r=o=>Object.assign(e,o),a=(o,c)=>{const l=Math.sin(t*o),h=Math.cos(t*o);r({fl:l*c,hr:l*c,fr:-l*c,hl:-l*c,kfl:Math.max(0,h)*c*1.6,khr:Math.max(0,h)*c*1.2,kfr:Math.max(0,-h)*c*1.6,khl:Math.max(0,-h)*c*1.2,y:Math.abs(h)*.04})};switch(i.anim){case"idle":{const o=Math.max(0,Math.sin(t*2.2));r({y:Math.sin(t*2)*.012,fl:-o*.45,kfl:o*1,tail:.3+Math.sin(t*3)*.2});break}case"walk":a(9,.45);break;case"block":r({pitch:.1,y:-.12,fl:-.35,fr:-.35,hl:.2,hr:.2,khl:.3,khr:.3,flame:.7});break;case"hoofL":s===0?r({pitch:-.28,fl:-.9,kfl:1.6}):s===1&&r({pitch:-.2,fl:-1.45,kfl:.05,rate:38});break;case"hoofR":s===0?r({pitch:-.28,fr:-.9,kfr:1.6}):s===1&&r({pitch:-.2,fr:-1.45,kfr:.05,rate:38});break;case"stomp":s===0?r({pitch:-.85,fl:-.5,fr:-.8,kfl:1.5,kfr:1.3,flame:1.6}):s===1&&r({pitch:.1,fl:-.45,fr:-.45,y:-.06,rate:40});break;case"blocklow":r({pitch:.22,y:-.32,fl:-.6,fr:-.6,kfl:1.3,kfr:1.3,hl:.3,hr:.3,khl:.7,khr:.7,flame:.6});break;case"check":s===0?r({pitch:.12,y:-.1,hl:.25,hr:.25,khl:.4,khr:.4}):s===1&&r({pitch:-.16,y:.06,fl:-.5,fr:-.5,kfl:1.3,kfr:1.3,rate:40});break;case"chargeAtk":s===0?r({pitch:.16,y:-.06,fl:-.6+Math.sin(t*30)*.5,kfl:1+Math.cos(t*30)*.4,flame:1.2+n*1.4,rate:30}):s===1?(a(24,.85),e.pitch=-.06,e.flame=2.8,e.rate=30):r({pitch:.08,flame:1.2});break;case"rear":s===0?r({pitch:-1*un(Math.min(1,n*1.4)),fl:-.6,fr:-.9,kfl:1.5,kfr:1.3,flame:1.8}):s===1&&r({pitch:.16,y:-.1,fl:-.5,fr:-.5,rate:42});break;case"scrape":s===0?r({pitch:.14,y:-.08,fr:.2,kfr:1.3}):s===1&&r({pitch:.24,y:-.16,fr:-1.05,kfr:.1,rate:38});break;case"lowsweep":r(s===0?{pitch:.2,y:-.14,yaw:.55*n,fl:-.4,fr:-.4,kfl:.8,kfr:.8}:s===1?{pitch:.3,y:-.24,yaw:-.6,fl:-1.15,fr:-1.15,kfl:.05,kfr:.05,rate:34}:{pitch:.12,y:-.1*(1-n)});break;case"dodge":{const o=Math.sin(n*Math.PI);a(22,.6),e.roll=-i.dodgeSide*.28*o,e.pitch=i.dodgeSide?-.05:-.25*o,e.rate=28;break}case"grab":s===0?r({pitch:-.5,fl:-.9,fr:-.9,kfl:1.3,kfr:1.3}):s===1&&r({pitch:-.32,fl:-1.3,fr:-1.3,kfl:.3,kfr:.3,rate:40});break;case"grabHold":r({pitch:-.4,fl:-1.2,fr:-1.2,kfl:.6,kfr:.6,flame:1.6,y:Math.sin(t*40)*.012,rate:30});break;case"grabThrow":r({pitch:.22,y:-.08,fl:-.4,fr:-.4,flame:1.4,rate:40});break;case"coice":{e.yaw=i.kickTurn?Math.PI:0,s===0?r({pitch:.15,hl:-.5,hr:-.5,khl:1.3,khr:1.3,y:.05,rate:20}):s===1?r({pitch:.42,y:.28,hl:1.75,hr:1.75,fl:.3,fr:.3,rate:40,tail:1.4}):(r({rate:14}),n<.45&&(e.yaw=i.kickTurn?Math.PI:0));break}case"fire":r(s===0?{pitch:-.8*Math.sin(Math.min(1,n*1.3)*Math.PI)-.08,fl:-.5,fr:-.7,kfl:1.4,kfr:1.2,flame:1+n*2.2}:s===1?{pitch:.1,y:-.08,fl:-.4,fr:-.4,hl:.25,hr:.25,flame:3.2,rate:30}:{flame:1.4});break;case"dust":r({pitch:.12,fl:-.7+Math.sin(t*42)*.6,kfl:1+Math.cos(t*42)*.5,rate:40});break;case"superstart":case"superprep":r({pitch:-.1,fl:-.5+Math.sin(t*16)*.5,kfl:1.1,flame:1.5+n*2.5,y:Math.sin(t*40)*.012});break;case"charge":a(24,.85),e.pitch=-.06,e.flame=4,e.rate=30;break;case"hit":r({pitch:-.14,roll:.16,hl:.2,hr:.2,khl:.3,khr:.3,rate:30,flame:.8});break;case"air":r({roll:1.1,y:-.2,fl:-.6,fr:.4,hl:.5,hr:-.4,kfl:.8,khr:.8,flame:.7});break;case"down":case"ko":r({roll:1.45,y:-.92,fl:-.3,fr:.25,hl:.3,hr:-.2,kfl:.5,kfr:.9,khl:.4,khr:.9,tail:1,flame:i.anim==="ko"?.25:.6,rate:18});break;case"getup":r({roll:1.45*(1-un(n)),y:-.92*(1-un(n)),kfl:1-n,kfr:1-n});break;case"win":{const o=.5+.5*Math.sin(t*2.4);r({pitch:-.55-o*.35,fl:-.6+Math.sin(t*9)*.4,fr:-.6-Math.sin(t*9)*.4,kfl:1.2,kfr:1.2,flame:2.4});break}}return e}function X0(){const i=Ht(3350810,{roughness:.55}),t=Ht(1774096,{roughness:.7}),e=Ht(4207659,{metalness:.85,roughness:.4,emissive:16730640,emissiveIntensity:0}),n=Ht(7213840,{roughness:.95,side:ve}),s=Ht(4000523,{roughness:1,side:ve}),r=Ht(920073,{roughness:1}),a=Ht(2893346,{metalness:.5,roughness:.35}),o=Ht(7823407,{metalness:.85,roughness:.35}),c=Ht(6032653,{roughness:.4,emissive:3146756}),l=new Oe({color:16738840}),h=new Le,u=Vt(h),d=Vt(u,0,1.38,-.75),p=B(d,ze(.44,1),i,0,0,.72);p.rotation.x=Wt,p.scale.x=.95,B(d,At(.5),i,0,-.02,1.3).scale.set(1,1.06,1),B(d,At(.49),i,0,.03,.12);for(const D of[1,-1])B(d,At(.22),i,D*.3,-.12,1.38),B(d,At(.27),i,D*.27,-.1,.1),B(d,At(.16),t,D*.2,-.3,1.55);const g=Vt(d,0,.22,1.5);g.rotation.x=.62,B(g,Zt(.21,.31,.62,14),i,0,.25,0),B(g,Qt(.2,.04),t,0,.56,0).rotation.x=Wt,B(g,new Wi(.19,16),l,0,.565,0).rotation.x=-Wt;for(let D=0;D<6;D++)B(g,new Se(.03,.16,.1),r,0,.1+D*.08,-.26+D*.012).rotation.x=-.4;const _=new be;_.position.set(0,.62,0),g.add(_);const m=new Pl(16741408,30,11,2);m.position.set(0,.9,0),g.add(m);const f=B(d,Qt(.37,.05),e,0,.12,1.58);f.rotation.x=-.35,B(d,Qt(.07,.015),e,0,-.3,1.82).rotation.y=Wt,B(d,Zt(.035,.1,.16,10),o,0,-.47,1.82),B(d,Qt(.475,.035),e,0,0,1.02),B(d,Qt(.455,.035),e,0,0,.36);for(const D of[1,-1]){for(let P=0;P<9;P++)B(d,Qt(.04,.012),e,D*.44,.22-Math.sin(P/8*Math.PI)*.1,.36+P*.083).rotation.set(P%2?0:Wt,Wt*(P%2),0);for(const P of[1.02,.36])B(d,Zt(.006,.006,.16,4),e,D*.47,-.22,P),B(d,Zt(.03,.08,.13,10),o,D*.47,-.35,P);for(let P=0;P<9;P++){const X=.2+Math.random()*.42;B(d,new Se(.015,X,.085),P%3?n:s,D*(.46-Math.random()*.02),.02-X/2,.38+P*.078).rotation.z=D*.12}for(let P=0;P<4;P++)B(d,new Se(.012,.028,.16+Math.random()*.16),c,D*.43,.05-P*.09,.02+Math.random()*.12).rotation.set(.5,D*.35,0);B(d,new Se(.012,.03,.25),c,D*.47,.1,1.3).rotation.x=.6}const E=B(d,new ln(.475,.475,.74,14,1,!0,Wt,Math.PI),n,0,.02,.7);E.rotation.x=Wt;const b=(D,P)=>{const X=Vt(d,D,-.18,P);B(X,Zt(.155,.1,.62,9),i,0,-.3,0);const V=Vt(X,0,-.6,0);return B(V,At(.1),t),B(V,Zt(.085,.072,.5,8),t,0,-.25,0),B(V,Zt(.075,.15,.22,9),r,0,-.44,0),B(V,Zt(.115,.14,.12,10),a,0,-.56,0),[X,V]},[v,U]=b(.3,1.3),[w,A]=b(-.3,1.3),[C,y]=b(.3,.1),[M,R]=b(-.3,.1),W=Vt(d,0,.22,-.3);B(W,Zt(.1,.02,1.15,7),r,0,-.55,0),B(W,Zt(.06,.01,.9,5),r,.04,-.5,.03);const F={...Va},z=new L(0,2.4,0);return{root:h,cur:F,flameK:1,flamePos:z,flame:_,snap(D,P){Object.assign(F,Dc(D,P))},update(D,P,X){const V=Dc(D,X),nt=Math.min(1,P*V.rate);for(const J in Va)J!=="rate"&&(F[J]+=(V[J]-F[J])*(J==="yaw"?Math.min(1,P*11):nt));u.position.y=F.y,u.rotation.y=F.yaw+(D.spinExtra||0),d.rotation.set(F.pitch,0,F.roll),v.rotation.x=F.fl-F.pitch*.5,w.rotation.x=F.fr-F.pitch*.5,C.rotation.x=F.hl-F.pitch,M.rotation.x=F.hr-F.pitch,U.rotation.x=F.kfl,A.rotation.x=F.kfr,y.rotation.x=F.khl,R.rotation.x=F.khr,W.rotation.x=F.tail,this.flameK=F.flame,m.intensity=F.flame*(26+Math.sin(X*23)*5+Math.random()*5),e.emissiveIntensity=Math.max(0,(F.flame-1.3)*.9),_.getWorldPosition(z)}}}const q0=["y","lean","twist","roll","spine","head","aLx","aLz","eL","aRx","aRz","eR","lLx","lLz","kL","lRx","lRz","kR","lc","jaw","tail","tailP","sc"];function Nl(i,t,e,n){const s={...t};return{root:i.root,cur:s,flameK:0,snap(r,a){Object.assign(s,e(r,a))},update(r,a,o){const c=e(r,o),l=Math.min(1,a*c.rate);for(const u of q0)s[u]+=(c[u]-s[u])*l;i.spinG.position.y=s.y,i.spinG.rotation.y=c.spin+(r.spinExtra||0),i.spinG.scale.setScalar(Math.max(.001,s.sc)),i.root.visible=s.sc>.03,i.hips.rotation.set(s.lean,s.twist,s.roll),i.spine.rotation.set(s.spine,-s.twist*.6,0),i.head.rotation.set(s.head,-s.twist*.4,0),i.shL.rotation.set(s.aLx,0,s.aLz),i.elL.rotation.x=s.eL,i.shR.rotation.set(s.aRx,0,s.aRz),i.elR.rotation.x=s.eR;const h=s.lean*s.lc;i.lL.rotation.set(s.lLx-h,0,s.lLz),i.kL.rotation.x=s.kL,i.lR.rotation.set(s.lRx-h,0,s.lRz),i.kR.rotation.x=s.kR,n&&n(s,r,o)}}}function Ol(i,t,e,n,s){const r=t.pk,a=t.phase;switch(t.anim){case"idle":{const o=Math.sin(e*s.breath);return n({y:i.y+o*.025,spine:i.spine+o*.03,aLx:i.aLx+o*.05,aRx:i.aRx-o*.05}),0}case"walk":{const o=Math.sin(e*s.gait),c=Math.cos(e*s.gait);return n({y:i.y+Math.abs(c)*.05,lLx:o*.55,lRx:-o*.55,kL:.25+Math.max(0,c)*.9,kR:.25+Math.max(0,-c)*.9,lean:i.lean+.1,tail:o*.35}),0}case"block":return n({aLx:-1.75,eL:-2.2,aRx:-1.75,eR:-2.2,aLz:-.2,aRz:.2,lean:-.02,spine:i.spine+.15,y:i.y-.06,kL:i.kL+.2,kR:i.kR+.2,head:i.head+.2}),0;case"blocklow":return n({aLx:-1.3,eL:-2,aRx:-1.3,eR:-2,aLz:-.2,aRz:.2,lean:.3,spine:i.spine+.3,y:-.42*s.h,lLx:-1,kL:1.9,lRx:.1,kR:1.6,head:i.head+.2,tailP:.05}),0;case"dodge":{const o=Math.sin(r*Math.PI);return t.dodgeSide?(n({y:-.2*o*s.h,lLx:-.9,kL:1.6,lRx:-.5,kR:1.5,roll:-t.dodgeSide*.3*o,aLz:.9,aRz:-.9,rate:30}),t.dodgeSide*un(r)*6.2832*s.roll):(n({y:o*.15,lean:-.3,lLx:-.5,kL:1,lRx:.3,kR:.9,aLx:-1.6,aRx:-1.6,rate:30}),0)}case"grab":return a===0?n({aLx:-1.4,aRx:-1.4,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,lean:.2,twist:0,jaw:.5}):a===1&&n({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.7,eR:-.7,lean:.45,twist:0,lLx:-.5,lRx:.5,rate:40}),0;case"grabHold":return n({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.9,eR:-.9,lean:.4,twist:0,y:i.y+Math.sin(e*40)*.015,jaw:.7,rate:30}),0;case"grabThrow":return n({aLx:-2.3,aRx:-2.3,eL:-.2,eR:-.2,lean:-.2,twist:0,y:i.y+.1,rate:34}),-un(r)*3.1416;case"vanish":return n({sc:0,rate:16,aLz:1,aRz:-1}),t.st*22;case"gone":return n({sc:0,rate:60}),0;case"appear":return n({sc:1,rate:22}),(1-r)*8;case"hit":return n({lean:-.35,head:i.head-.4,spine:i.spine-.3,aLx:-.3,aRx:-.2,eL:-.8,eR:-.8,kL:.7,kR:.5,jaw:.6,tail:.4,rate:35}),0;case"air":return n({lean:-1.05,lc:0,head:-.3,spine:0,lLx:-.6,kL:.9,lRx:-.2,kR:.5,aLx:-2.2,aRx:-2.4,eL:-.3,eR:-.3,aLz:.5,aRz:-.5,y:.2,jaw:.7,tailP:0}),0;case"down":case"ko":return n({y:-s.lie,lean:-1.52,lc:0,spine:0,head:-.05,lLx:-.1,kL:.2,lRx:.15,kR:.35,lLz:.15,lRz:-.15,aLx:-.2,aRx:-.2,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,twist:0,jaw:t.anim==="ko"?.5:.15,tailP:0,rate:22}),0;case"getup":{const o=un(r);return n({y:-s.lie*(1-o),lean:Ul(-1.4,.35,o),lc:o,lLx:-.8*(1-r),kL:1.4*(1-r)+.3,kR:1.2*(1-r)+.3}),0}}return null}const Fl={y:-.04,lean:.1,twist:.4,roll:0,spine:.1,head:-.02,aLx:-1,aLz:.2,eL:-1.6,aRx:-.55,aRz:-.25,eR:-1.8,lLx:-.3,lLz:.06,kL:.45,lRx:.3,lRz:-.06,kR:.5,lc:1,jaw:0,tail:0,tailP:0,sc:1,rate:16},Y0={breath:4.2,gait:10,h:1,lie:.84,roll:1};function K0(i,t){const e={...Fl},n=i.pk,s=i.phase,r=l=>Object.assign(e,l),a=i.mt?i.mt[0]+i.mt[1]:1,o=()=>Math.min(1,i.st/a)*6.2832;let c=Ol(e,i,t,r,Y0);if(c===null)switch(c=0,i.anim){case"palm":s===0?r({aLx:-.3,eL:-2.3,twist:.8}):s===1&&r({aLx:-1.55,eL:-.05,aLz:-.1,twist:-.25,lean:.28,lLx:-.5,rate:40});break;case"elbowR":s===0?r({aRx:.4,eR:-2.2,twist:-.1}):s===1&&r({aRx:-1.7,eR:-2.1,aRz:.55,twist:1.15,lean:.35,lLx:-.5,rate:40});break;case"heel":s===0?r({lRx:-1.2,kR:1.7,lean:-.15,twist:.1}):s===1&&r({lRx:-1.45,kR:.05,lean:-.4,twist:0,aLz:.8,aRz:-.8,rate:42});break;case"spinkick":c=o(),r(s===0?{y:.02,lRx:-.7,kR:1.5,lean:-.2,aLz:.9,aRz:-.9}:s===1?{y:.08,lean:-.55,lRx:-1.6,kR:0,lLx:0,kL:.1,aLz:1.2,aRz:-1.2,aLx:0,aRx:0,eL:-.3,eR:-.3,rate:40}:{kR:.9-n*.4});break;case"stepIn":s===0?r({y:-.16,lean:.32,kL:.9,kR:.9,aRx:-.3,eR:-2.2,twist:0}):s===1&&r({y:-.1,lean:.5,aRx:-1.5,eR:-.35,aRz:.1,twist:1,lLx:-.7,kL:.7,lRx:.65,kR:.2,rate:40});break;case"axe":r(s===0?{y:.04,lean:-.35,lRx:-2.5,kR:0,twist:0,aLz:.8,aRz:-.8,rate:26}:s===1?{y:-.06,lean:.15,lRx:-.55,kR:0,twist:0,aLx:.4,aRx:.4,rate:44}:{kR:.8-n*.3});break;case"backKick":s===0?r({y:.06,lLx:-.9,kL:1.6,lean:-.25,twist:.1}):s===1&&r({y:.04,lLx:-1.75,kL:0,lean:-.5,twist:0,aLx:.3,aRx:.3,aLz:.7,aRz:-.7,rate:40});break;case"wheel":c=-o(),r(s===0?{y:-.14,lean:.55,spine:.35,kL:1,kR:1,aLx:-.6,aRx:-.6,eL:-.2,eR:-.2}:s===1?{y:.06,lean:-.7,roll:.35,lRx:-1.7,kR:0,lLx:0,kL:.1,aLx:0,aRx:0,aLz:1.45,aRz:-1.45,eL:-.1,eR:-.1,rate:40}:{kR:.9-n*.5});break;case"lowStep":r(s===0?{y:-.28,lLx:-.9,kL:1.7,lRx:-.6,kR:1.6,lean:.2}:s===1?{y:-.34,lLx:-.9,kL:1.9,lRx:-1.15,kR:.1,lean:-.05,twist:.1,aLz:.6,aRz:-.6,rate:40}:{y:-.2*(1-n),kL:1.1});break;case"sweep":c=o(),r(s===0?{y:-.3-n*.2,lLx:-1,kL:2,lRx:-.8,kR:1.2,lean:-.3,aLx:.9,aRx:.9,eL:-.3,eR:-.3}:s===1?{y:-.52,lLx:-1.1,kL:2.2,lRx:-1.5,kR:0,lean:-.75,aLx:1,aRx:1,aLz:.7,aRz:-.7,eL:-.2,eR:-.2,rate:40}:{y:-.4*(1-n),kL:1.3});break;case"blade":r(s===0?{aRx:-2.7,aRz:-.6,eR:-.3,twist:-.45,lean:-.1}:s===1?{aRx:-1,aRz:.75,eR:-.05,twist:1.05,lean:.3,lLx:-.5,rate:42}:{aRx:-.9,aRz:.5,eR:-.4,twist:.7*(1-n)+.4});break;case"roots":r(s===0?{aRx:-2.9,eR:-.15,aLx:-2.9,eL:-.15,y:.04,lean:-.12,twist:0}:{y:-.46*(s===1?1:1-n*.7),lean:.75,spine:.4,twist:0,lLx:-1,kL:1.9,lRx:.35,kR:1.6,aRx:-.95,eR:-.05,aLx:-.95,eL:-.05,rate:34});break;case"superstart":r({y:.12,aLx:0,aRx:0,aLz:1.5,aRz:-1.5,eL:0,eR:0,twist:0,kL:.8,kR:.8}),c=i.st*12;break;case"superprep":{const l=Math.abs(Math.sin(t*9));r({y:-.2+l*.12,lean:.1,twist:0,aLx:-2.9,aRx:-2.9,aLz:.4,aRz:-.4,eL:-.3-l*.4,eR:-.3-l*.4,lLx:-.6,kL:1.2,lRx:.2,kR:1,head:-.3});break}case"leap":r({lean:.2,twist:0,lLx:-1.3,kL:2,lRx:-1,kR:1.9,aLx:-2.8,aRx:-2.8,aLz:.5,aRz:-.5,eL:-.2,eR:-.2,rate:24});break;case"dive":r({lean:-.8,lc:0,twist:0,spine:.3,lRx:-.1,kR:0,lLx:-1.2,kL:1.9,aLx:.6,aRx:.6,aLz:1.2,aRz:-1.2,eL:-.2,eR:-.2,rate:40});break;case"win":{const l=Math.abs(Math.sin(t*5));r({y:l*.2,kL:.8-l*.6,kR:.8-l*.6,lLx:-.2,lRx:.2,aLx:-2.9,aRx:-.6,aLz:.3,aRz:-.9,eL:-.2,eR:-1.6,twist:0,lean:0,head:-.25});break}}return e.spin=c,e}function J0(){const i=Ht(9723962,{roughness:.55}),t=Ht(7226664,{roughness:.6}),e=Ht(4160044,{roughness:.9,side:ve}),n=Ht(2379807,{roughness:1,side:ve}),s=Ht(8367674,{roughness:.9,side:ve}),r=Ht(5917222,{roughness:1}),a=Ht(14272410,{roughness:.6}),o=Ht(3038506,{roughness:1}),c=Ht(14829850,{roughness:.7,emissive:10496512,emissiveIntensity:.55}),l=Ht(16753198,{roughness:.6,emissive:12605952,emissiveIntensity:.7}),h=new Oe({color:10354522}),u=Ht(1840144,{roughness:1}),d=new Le,p=Vt(d),g=Vt(p,0,1,0);B(g,At(.18),i,0,.02,0).scale.set(1.2,.85,.9),B(g,Qt(.21,.03),r,0,.06,0).rotation.x=Wt;for(let z=0;z<16;z++){const D=z/16*6.2832,P=.26+Math.random()*.18,X=.25,V=B(g,new Re(.075,P,4),[e,n,s][z%3],Math.sin(D)*X,-.06-P/2,Math.cos(D)*X);V.rotation.set(-.32,D,Math.PI,"YXZ"),V.scale.z=.25}for(let z=0;z<5;z++)B(g,At(.026),a,Math.sin(z*.4-.8)*.23,.04,Math.cos(z*.4-.8)*.23);const _=z=>{const D=Vt(g,z*.12,-.05,0);B(D,ze(.095,.3),i,0,-.23,0);const P=Vt(D,0,-.46,0);B(P,At(.085),t),B(P,ze(.075,.28),i,0,-.2,0),B(P,Qt(.08,.014),r,0,-.28,0).rotation.x=Wt,B(P,Qt(.078,.012),s,0,-.33,0).rotation.x=Wt,B(P,new Se(.12,.07,.25),t,0,-.455,-.085),B(P,At(.052),t,0,-.445,.045).scale.set(1,.8,1);for(let X=-1;X<=1;X++)B(P,At(.03),i,X*.04,-.465,-.215).scale.set(1,.7,1.3);return[D,P]},[m,f]=_(1),[E,b]=_(-1),v=Vt(g,0,.08,0);B(v,Zt(.17,.155,.26,12),i,0,.12,0).scale.z=.8,B(v,At(.19),i,0,.36,0).scale.set(1.3,1,.8);for(const z of[1,-1])B(v,At(.08),i,z*.1,.39,.1).scale.set(1.1,.8,.6),B(v,At(.085),i,z*.27,.47,0);for(let z=0;z<3;z++)for(const D of[1,-1])B(v,At(.038),t,D*.05,.2-z*.07,.115).scale.z=.5;const U=B(v,Qt(.2,.016),r,0,.34,0);U.rotation.set(Wt-.2,.75,0),U.scale.set(1.1,.8,1);for(let z=0;z<9;z++){const D=(z/8-.5)*2.2;B(v,At(.024),a,Math.sin(D)*.15,.5-Math.cos(D)*.06,.05+Math.cos(D)*.11)}for(const z of[1,-1]){const D=B(v,new Se(.03,.12,.01),o,z*.12,.3,.165);D.rotation.z=z*.5}B(v,Zt(.055,.062,.1),i,0,.59,0);for(const z of[1,-1])for(let D=0;D<3;D++){const P=B(v,new Re(.07,.22,4),[e,s,n][D],z*(.3+D*.015),.52,-.05+D*.05);P.rotation.set(0,0,-z*(1.9+D*.2)),P.scale.z=.3}const w=Vt(v,0,.7,0);B(w,At(.115),i).scale.set(.92,1.05,.97),B(w,At(.058),i,0,-.07,.05).scale.set(1.1,.8,1);for(const z of[1,-1])B(w,At(.016),h,z*.042,.012,.1),B(w,new Se(.05,.012,.02),u,z*.042,.04,.102).rotation.z=-z*.3,B(w,new Re(.03,.1,4),i,z*.118,.01,-.01).rotation.z=-z*1.2,B(w,new Se(.035,.01,.01),o,z*.06,-.03,.1);B(w,new Se(.05,.008,.01),u,0,-.085,.1);const A=[];for(let z=0;z<16;z++){const D=z/16*6.2832,P=Math.cos(D)<.3,X=.2+Math.random()*.16+(P?.1:0),V=.075,nt=Vt(w,Math.sin(D)*V,.07,Math.cos(D)*V-.01);nt.rotation.set(-.35-(P?.45:0)+Math.cos(D)*.5,0,-Math.sin(D)*.55),B(nt,new Re(.05,X,5),z%3?c:l,0,X/2,0),A.push(nt)}for(let z=0;z<5;z++){const D=Vt(w,(z-2)*.035,.12,-.02);D.rotation.x=-.5-Math.random()*.3,B(D,new Re(.045,.34,5),z%2?l:c,0,.17,0),A.push(D)}B(w,Qt(.112,.014),r,0,.055,0).rotation.x=Wt-.1;const C=z=>{const D=Vt(v,z*.3,.48,0);B(D,ze(.068,.19),i,0,-.14,0),B(D,Qt(.074,.013),r,0,-.16,0).rotation.x=Wt;const P=Vt(D,0,-.3,0);return B(P,ze(.055,.19),i,0,-.13,0),B(P,Zt(.065,.058,.1),n,0,-.2,0),B(P,Qt(.062,.01),s,0,-.14,0).rotation.x=Wt,B(P,At(.057),t,0,-.31,0),[D,P]},[y,M]=C(1),[R,W]=C(-1),F=A.map(z=>z.rotation.x);return Nl({root:d,spinG:p,hips:g,spine:v,head:w,shL:y,elL:M,shR:R,elR:W,lL:m,kL:f,lR:E,kR:b},Fl,K0,(z,D,P)=>{for(let X=0;X<A.length;X++)A[X].rotation.x=F[X]+Math.sin(P*7+X*1.7)*.1})}const kl={y:-.03,lean:.18,twist:.25,roll:0,spine:.3,head:-.32,aLx:-.9,aLz:.35,eL:-1.3,aRx:-.7,aRz:-.35,eR:-1.4,lLx:-.25,lLz:.1,kL:.5,lRx:.25,lRz:-.1,kR:.55,lc:1,jaw:.06,tail:0,tailP:-.22,sc:1,rate:12},$0={breath:2.6,gait:7.5,h:.8,lie:.68,roll:0};function j0(i,t){const e={...kl},n=i.pk,s=i.phase,r=l=>Object.assign(e,l),a=i.mt?i.mt[0]+i.mt[1]:1,o=()=>un(Math.min(1,i.st/a))*6.2832;let c=Ol(e,i,t,r,$0);if(i.anim==="idle"&&(e.tail=Math.sin(t*1.8)*.35),c===null)switch(c=0,i.anim){case"clawL":s===0?r({aLx:-2.3,aLz:.7,eL:-.9,twist:.7,jaw:.3}):s===1&&r({aLx:-1.35,aLz:-.5,eL:-.1,twist:-.35,lean:.32,rate:36});break;case"clawR":s===0?r({aRx:-2.3,aRz:-.7,eR:-.9,twist:-.3,jaw:.3}):s===1&&r({aRx:-1.35,aRz:.5,eR:-.1,twist:1,lean:.34,rate:36});break;case"tailSwing":c=o(),r(s===0?{lean:.3,y:-.12,tail:-.7,tailP:.1,aLz:.8,aRz:-.8}:s===1?{lean:.35,y:-.1,tail:.3,tailP:.22,aLz:1,aRz:-1,rate:30}:{tail:.5*(1-n)});break;case"tailWhip":c=-o(),r(s===0?{lean:.5,y:-.05,tail:.7,tailP:.5,spine:.5}:s===1?{lean:.6,spine:.5,tail:-.3,tailP:.75,aLz:.9,aRz:-.9,rate:30}:{tailP:.4*(1-n)});break;case"tailSweep":c=o(),r(s===0?{y:-.3,lean:.1,lLx:-.9,kL:1.7,lRx:-.3,kR:1.5,tail:-.7,tailP:-.25}:s===1?{y:-.36,lean:.05,lLx:-.9,kL:1.8,lRx:-.3,kR:1.6,tail:.3,tailP:-.3,aLz:.8,aRz:-.8,rate:30}:{y:-.25*(1-n),kL:1.1,kR:1});break;case"snap":s===0?r({lean:.05,spine:.1,head:-.1,jaw:.75,y:-.1,kL:.9,kR:.9}):s===1&&r({lean:.55,spine:.55,head:-.75,jaw:0,lLx:-.6,lRx:.6,aLx:.4,aRx:.4,rate:40});break;case"bite":r(s===0?{lean:-.1,spine:0,head:-.35-n*.2,jaw:1.05,aLx:-1.6,aRx:-1.6,aLz:.9,aRz:-.9,eL:-.5,eR:-.5,y:-.05}:s===1?{lean:.6,spine:.6,head:-.8,jaw:0,lLx:-.6,lRx:.6,aLx:-1.3,aRx:-1.3,aLz:-.2,aRz:.2,rate:44}:{jaw:.1,lean:.3});break;case"lowClaw":r(s===0?{y:-.3,lean:.35,lLx:-.9,kL:1.7,lRx:-.2,kR:1.5,aRx:-1.9,aRz:-.6,eR:-.8}:s===1?{y:-.36,lean:.6,spine:.5,lLx:-.9,kL:1.8,lRx:-.2,kR:1.6,aRx:-.75,aRz:.4,eR:-.05,twist:.9,rate:38}:{y:-.2*(1-n),kL:1.1});break;case"claws":if(s===0)r({aLx:-2.2,aRx:-2.2,aLz:.7,aRz:-.7,eL:-.9,eR:-.9,jaw:.5,lean:.1});else if(s===1){const l=Math.sin(n*3*Math.PI);r({lean:.4,aLx:-1.6-l*.6,aLz:.1-l*.5,eL:-.5+l*.4,aRx:-1.6+l*.6,aRz:-.1-l*.5,eR:-.5-l*.4,twist:.25+l*.8,jaw:.4,lLx:-.5,lRx:.5,rate:44})}break;case"cast":r(s===0?{aLx:-2.8,aRx:-2.8,aLz:.5-n*.4,aRz:-.5+n*.4,eL:-.4,eR:-.4,lean:-.08,spine:.05,head:-.5,twist:0,jaw:.5,y:.02}:s===1?{aLx:-1.5,aRx:-1.5,aLz:-.15,aRz:.15,eL:-.05,eR:-.05,lean:.4,twist:0,jaw:.9,lLx:-.5,lRx:.5,rate:40}:{aLx:-1.3,aRx:-1.3,eL:-.4,eR:-.4,twist:0,lean:.25});break;case"veil":r({aLx:-1.7,aRx:-1.7,aLz:s===0?-.5:.9,aRz:s===0?.5:-.9,eL:s===0?-1.9:-.3,eR:s===0?-1.9:-.3,twist:0,lean:0,spine:.12,head:-.2,rate:30});break;case"superstart":case"superprep":{const l=Math.sin(t*14);r({y:.02,twist:0,lean:-.05,spine:.05,head:-.55,aLx:-2.8,aRx:-2.8,aLz:.55+l*.12,aRz:-.55-l*.12,eL:-.5,eR:-.5,jaw:.8,tail:l*.4,tailP:.2});break}case"leap":case"dive":r({lean:-.5,lc:0,aLx:-2.2,aRx:-2.2,jaw:.9});break;case"win":{const l=Math.sin(t*3);r({twist:0,lean:-.05,spine:.08,head:-.6,aLx:-2.6,aRx:-2.6,aLz:.7,aRz:-.7,eL:-.6,eR:-.6,jaw:.5+l*.4,tail:l*.6,tailP:.3,y:Math.abs(l)*.05});break}}return e.spin=c,e}function Z0(){const i=Ht(2786424,{roughness:.5}),t=Ht(1530716,{roughness:.6}),e=Ht(11128730,{roughness:.65}),n=Ht(1001299,{roughness:.9,side:ve}),s=Ht(601914,{roughness:1,side:ve}),r=Ht(13279804,{metalness:.8,roughness:.32}),a=Ht(15657695,{roughness:.85}),o=Ht(15920344,{roughness:.4}),c=Ht(15129792,{roughness:.4}),l=Ht(4854838,{roughness:.6}),h=new Oe({color:16765498}),u=new Oe({color:1182212}),d=new Oe({color:10116351}),p=new Le,g=Vt(p),_=Vt(g,0,.86,0);B(_,At(.27),i,0,.02,0).scale.set(1.15,.9,1.05),B(_,Zt(.3,.5,.52,16,!0),n,0,-.26,0),B(_,Qt(.5,.022),r,0,-.52,0).rotation.x=Wt;for(let J=0;J<10;J++){const et=J/10*6.2832;B(_,new Re(.09,.2,4),s,Math.sin(et)*.47,-.6,Math.cos(et)*.47).rotation.set(Math.PI,et,0)}B(_,Qt(.3,.035),r,0,0,0).rotation.x=Wt,B(_,At(.05),d,0,0,.31).scale.z=.5;const m=J=>{const et=Vt(_,J*.17,-.04,0);B(et,ze(.12,.2),i,0,-.18,0);const gt=Vt(et,0,-.38,0);B(gt,At(.1),t),B(gt,ze(.085,.22),i,0,-.18,0),B(gt,new Se(.2,.08,.34),t,0,-.4,.09);for(let Et=-1;Et<=1;Et++)B(gt,new Re(.028,.12,5),c,Et*.065,-.41,.3).rotation.x=Wt;return[et,gt]},[f,E]=m(1),[b,v]=m(-1),U=[];let w=_;for(let J=0;J<3;J++){const et=Vt(w,0,J?0:-.04,J?-.48:-.2),gt=[.17,.12,.075][J],Et=[.12,.075,.012][J];B(et,Zt(gt,Et,.5,9),J===1?t:i,0,0,-.25).rotation.x=Wt;for(let $=0;$<2;$++)B(et,new Re(.04-J*.008,.12-J*.02,4),t,0,gt*.85-$*.03,-.12-$*.24);U.push(et),w=et}const A=Vt(_,0,.08,0);B(A,At(.26),i,0,.2,0).scale.set(1.2,1.1,.95),B(A,At(.2),e,0,.16,.1).scale.set(1,1.15,.7),B(A,At(.24),i,0,.46,-.02).scale.set(1.35,.85,.9),B(A,Zt(.3,.31,.2,14,!0),n,0,.12,0).scale.z=.92;const C=B(A,Zt(.2,.38,.2,12,!0),n,0,.52,-.02);C.scale.z=.85,B(A,Qt(.37,.018),r,0,.43,-.02).rotation.x=Wt,B(A,Qt(.2,.02),r,0,.62,-.02).rotation.x=Wt,B(A,At(.045),d,0,.5,.3).scale.z=.5;for(let J=0;J<4;J++)B(A,new Re(.045,.12,4),t,0,.25+J*.11,-.25);const y=Vt(A,0,.7,.06);B(y,At(.19),i).scale.set(1.05,.82,1.1);const M=B(y,Zt(.1,.17,.44,10),i,0,-.02,.34);M.rotation.x=Wt,M.scale.set(1.15,1,.5);for(const J of[1,-1]){B(y,At(.065),i,J*.11,.11,.06),B(y,At(.038),h,J*.125,.12,.1),B(y,At(.018),u,J*.135,.12,.132).scale.set(.5,1.2,.5),B(y,At(.022),t,J*.045,.035,.54),B(y,Qt(.035,.008),r,J*.19,-.05,-.02);for(let et=0;et<5;et++)B(y,new Re(.016,.055,4),o,J*(.15-et*.016),-.075,.2+et*.075).rotation.x=Math.PI}const R=Vt(y,0,-.09,.04),W=B(R,Zt(.085,.15,.44,10),e,0,-.025,.28);W.rotation.x=Wt,W.scale.set(1.1,1,.32),B(R,new Se(.2,.012,.36),l,0,.012,.26);for(const J of[1,-1])for(let et=0;et<4;et++)B(R,new Re(.015,.05,4),o,J*(.135-et*.016),.03,.22+et*.08);const F=[];for(let J=0;J<11;J++){const et=(J/10-.5)*3.6,gt=.5+Math.random()*.3,Et=Vt(y,Math.sin(et)*.17,.08,-.05-Math.cos(et)*.13);Et.rotation.set(.25+Math.cos(et)*.25,0,Math.sin(et)*.28),B(Et,ze(.04,gt),a,0,-gt/2,0),F.push(Et)}B(y,At(.17),a,0,.07,-.07).scale.set(1.05,.7,.95),B(y,Qt(.15,.016),r,0,.12,-.02).rotation.x=Wt-.25,B(y,At(.03),d,0,.15,.12);const z=J=>{const et=Vt(A,J*.37,.48,0);B(et,At(.1),i),B(et,ze(.078,.2),i,0,-.16,0);const gt=Vt(et,0,-.34,0);B(gt,ze(.064,.2),t,0,-.14,0),B(gt,Qt(.07,.014),r,0,-.22,0).rotation.x=Wt,B(gt,At(.075),i,0,-.32,0).scale.set(1,.9,.8);for(let Et=-1;Et<=1;Et++)B(gt,new Re(.02,.15,5),c,Et*.045,-.43,.02).rotation.set(Math.PI+.25,0,Et*.25);return[et,gt]},[D,P]=z(1),[X,V]=z(-1),nt=F.map(J=>J.rotation.x);return Nl({root:p,spinG:g,hips:_,spine:A,head:y,shL:D,elL:P,shR:X,elR:V,lL:f,kL:E,lR:b,kR:v},kl,j0,(J,et,gt)=>{R.rotation.x=J.jaw;for(let Et=0;Et<3;Et++)U[Et].rotation.y=J.tail*(.3+Et*.15)+Math.sin(gt*2.2-Et*.9)*.08,U[Et].rotation.x=Et?J.tailP*.45:J.tailP*.5+J.lean*(1-2*J.lc);for(let Et=0;Et<F.length;Et++)F[Et].rotation.x=nt[Et]-J.head*.6-J.spine*.5+Math.sin(gt*2+Et)*.04})}const Q0={saci:{name:"SACI",hp:90,speed:5.4,radius:.45,turn:16,mass:1,hitY:1.3,tagY:2.3,super:"VOADORA DO REDEMOINHO",dodge:{t:.3,dist:2.4,ev:[0,.22],cd:.5}},mula:{name:"MULA SEM CABEÇA",hp:130,speed:3.3,radius:.95,turn:5.5,mass:3,hitY:1.4,tagY:2.9,super:"FOGO DA CONDENAÇÃO",dodge:{t:.42,dist:1.9,ev:[.04,.26],cd:.8}},curupira:{name:"CURUPIRA",hp:100,speed:5,radius:.45,turn:14,mass:1,hitY:1.25,tagY:2.35,super:"JULGAMENTO DA FLORESTA",dodge:{t:.3,dist:2.3,ev:[.02,.22],cd:.55}},cuca:{name:"CUCA",hp:115,speed:3.6,radius:.6,turn:8,mass:2,hitY:1.3,tagY:2.55,super:"ÚLTIMO PESADELO",dodge:{t:.4,dist:1.9,ev:[.05,.25],cd:.75}}},Qs=["saci","mula","curupira","cuca"],Ue={buffer:.28,tap:.2,perfect:.13,perfectStagger:.5,counterDmg:1.2,counterStun:.12,scale:.1,scaleMin:.35,maxHits:7,maxJuggle:2,breakWindow:.36,chip:.15},Un={saci:{light1:{name:"Soco",h:"high",t:[.07,.08,.17],dmg:4,range:1.25,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"punchL",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Cruzado",h:"mid",t:[.06,.08,.19],dmg:4,range:1.3,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"punchR",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Cotovelada",h:"mid",t:[.1,.08,.26],dmg:6,range:1.35,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"elbow",next:{K:"heavy",L:"@"}},heavy:{name:"Giro de perna",h:"high",t:[.2,.12,.36],dmg:11,range:1.75,arc:1.3,stun:.5,bstun:.22,push:7,launch:4.8,anim:"spinkick",lunge:3,track:!0},fLight:{name:"Pulo-soco",h:"mid",t:[.16,.1,.2],dmg:6,range:1.45,arc:.9,stun:.38,bstun:.26,push:2,lunge:6,anim:"hopPunch",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Martelo",h:"mid",t:[.3,.1,.42],dmg:13,range:1.65,arc:.8,stun:.5,bstun:.22,push:3,launch:2.6,lunge:2.5,anim:"axe"},bLight:{name:"Tapa de recuo",h:"high",t:[.14,.08,.2],dmg:5,range:1.75,arc:.9,stun:.4,bstun:.2,push:3,lunge:-3.5,anim:"slap",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Meia-lua",h:"high",t:[.24,.14,.34],dmg:9,range:1.9,arc:2.4,stun:.45,bstun:.4,push:9,anim:"meialua",track:!0},dLight:{name:"Canelada",h:"low",t:[.1,.08,.2],dmg:3,range:1.3,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"lowJab",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira",h:"low",t:[.3,.12,.5],dmg:9,range:1.7,arc:1.6,stun:.5,bstun:.2,push:2,launch:2.2,anim:"sweep",track:!0},mid:{name:"Redemoinho",h:"mid",t:[.32,.06,.42],spawn:"tornado",anim:"whirl",cd:1.6},special:{name:"Voadora",h:"mid",custom:"voadora",cd:1.2},def:{name:"Sumiu no vento",custom:"teleport",cost:20,cd:3},grab:{name:"Derrubada",grab:!0,t:[.2,.05,.42],range:.75,dmg:12,launch:3,push:5,anim:"grab"}},mula:{light1:{name:"Patada",h:"high",t:[.14,.1,.26],dmg:6,range:2.1,arc:.7,stun:.4,bstun:.3,push:3.5,anim:"hoofL",next:{J:"light2",K:"heavy",fJ:"fLight",dK:"dHeavy"}},light2:{name:"Patada dupla",h:"mid",t:[.13,.1,.3],dmg:7,range:2.1,arc:.7,stun:.46,bstun:.3,push:4.5,lunge:2.5,anim:"hoofR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy"}},heavy:{name:"Pisão",h:"mid",t:[.38,.12,.48],dmg:16,range:2.35,arc:.8,stun:.6,bstun:.26,push:5,launch:3.6,anim:"stomp",lunge:1.5,quake:!0},fLight:{name:"Peitada",h:"mid",t:[.16,.12,.28],dmg:7,range:2.2,arc:.8,stun:.42,bstun:.34,push:4,lunge:5,anim:"check",next:{J:"light2",fK:"fHeavy",dK:"dHeavy"}},fHeavy:{name:"Investida",h:"mid",t:[.38,.36,.55],dmg:15,range:2.3,arc:.7,stun:.5,bstun:.28,push:8,launch:4.2,rush:9,armor:!0,anim:"chargeAtk"},bLight:{name:"Patada de recuo",h:"high",t:[.18,.1,.26],dmg:6,range:2.35,arc:.7,stun:.42,bstun:.3,push:4,lunge:-3,anim:"hoofR",next:{K:"heavy"}},bHeavy:{name:"Empinada",h:"mid",t:[.5,.12,.55],dmg:19,range:2.5,arc:.8,stun:.6,bstun:.4,push:6,launch:5.2,lunge:-1.5,chip:.3,anim:"rear",quake:!0},dLight:{name:"Raspada",h:"low",t:[.16,.1,.26],dmg:5,range:2.1,arc:.8,stun:.58,bstun:.22,push:2,anim:"scrape",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida",h:"low",t:[.4,.14,.56],dmg:12,range:2.4,arc:1.5,stun:.5,bstun:.22,push:3,launch:2.2,anim:"lowsweep",track:!0},mid:{name:"Coice",h:"mid",t:[.3,.1,.46],dmg:14,range:2.5,arc:1,stun:.5,bstun:.24,push:10,launch:4.6,anim:"coice",kick:!0,cd:.8},special:{name:"Inferno",h:"mid",t:[.65,.55,.5],anim:"fire",beam:!0,cd:2.5},def:{name:"Poeira",h:"mid",t:[.12,.2,.36],dmg:3,range:3.6,arc:1,stun:.45,bstun:.24,push:12,anim:"dust",dustFx:!0,cd:2.5,track:!0},grab:{name:"Prensada",grab:!0,t:[.28,.05,.5],range:.8,dmg:16,launch:3.4,push:7,anim:"grab"}},curupira:{light1:{name:"Palma",h:"high",t:[.08,.08,.18],dmg:4,range:1.5,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"palm",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Cotovelo",h:"mid",t:[.07,.08,.2],dmg:6,range:1.5,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"elbowR",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Calcanhar torto",h:"mid",t:[.11,.09,.26],dmg:7,range:1.6,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"heel",next:{K:"heavy",L:"@"}},heavy:{name:"Chute rodado",h:"high",t:[.21,.12,.36],dmg:12,range:1.85,arc:1.3,stun:.5,bstun:.22,push:7,launch:4.6,anim:"spinkick",lunge:2.5,track:!0},fLight:{name:"Passo torto",h:"mid",t:[.15,.1,.2],dmg:5,range:1.5,arc:.9,stun:.38,bstun:.26,push:2,lunge:6.5,anim:"stepIn",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Machado de calcanhar",h:"mid",t:[.3,.1,.42],dmg:13,range:1.7,arc:.8,stun:.5,bstun:.22,push:3,launch:2.6,lunge:2.5,anim:"axe"},bLight:{name:"Coice de recuo",h:"high",t:[.15,.08,.22],dmg:5,range:1.9,arc:.9,stun:.4,bstun:.2,push:3.5,lunge:-3.5,anim:"backKick",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Giro da mata",h:"high",t:[.25,.14,.34],dmg:9,range:2,arc:2.4,stun:.45,bstun:.4,push:9,anim:"wheel",track:!0},dLight:{name:"Pisada torta",h:"low",t:[.1,.08,.2],dmg:3,range:1.4,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"lowStep",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira de calcanhar",h:"low",t:[.3,.12,.5],dmg:10,range:1.85,arc:1.6,stun:.5,bstun:.2,push:2,launch:2.2,anim:"sweep",track:!0},mid:{name:"Lâmina da Mata",h:"mid",t:[.22,.06,.36],spawn:"leaf",anim:"blade",cd:1.5},special:{name:"Ira da Floresta",h:"low",t:[.34,.1,.52],spawn:"roots",anim:"roots",cd:5},def:{name:"Caminho Invertido",custom:"invert",cd:3.5},grab:{name:"Laço de cipó",grab:!0,t:[.2,.05,.42],range:.8,dmg:12,launch:3,push:5,anim:"grab"}},cuca:{light1:{name:"Garra",h:"high",t:[.13,.1,.26],dmg:5,range:1.9,arc:.8,stun:.4,bstun:.28,push:3,anim:"clawL",next:{J:"light2",K:"heavy",fJ:"fLight",dK:"dHeavy"}},light2:{name:"Garra cruzada",h:"mid",t:[.13,.1,.3],dmg:6,range:1.95,arc:.8,stun:.5,bstun:.28,push:3.5,lunge:2,anim:"clawR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy"}},heavy:{name:"Rabada",h:"mid",t:[.34,.14,.46],dmg:14,range:2.6,arc:1.6,stun:.55,bstun:.26,push:8,launch:3.8,anim:"tailSwing",track:!0},fLight:{name:"Bote",h:"mid",t:[.2,.1,.3],dmg:7,range:2,arc:.8,stun:.42,bstun:.3,push:3,lunge:5,anim:"snap",next:{J:"light2",fK:"fHeavy",dK:"dHeavy"}},fHeavy:{name:"Mordida",h:"mid",t:[.44,.12,.52],dmg:17,range:2.1,arc:.8,stun:.6,bstun:.26,push:5,launch:3,lunge:1.5,chip:.3,anim:"bite"},bLight:{name:"Arranhão de recuo",h:"high",t:[.18,.1,.26],dmg:5,range:2.2,arc:.8,stun:.42,bstun:.28,push:4,lunge:-3,anim:"clawR",next:{K:"heavy"}},bHeavy:{name:"Chicote de cauda",h:"high",t:[.36,.16,.42],dmg:11,range:2.9,arc:2.6,stun:.5,bstun:.4,push:10,anim:"tailWhip",track:!0},dLight:{name:"Garra rasteira",h:"low",t:[.16,.1,.26],dmg:4,range:1.9,arc:.8,stun:.58,bstun:.2,push:2,anim:"lowClaw",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida de cauda",h:"low",t:[.42,.14,.54],dmg:11,range:2.7,arc:1.7,stun:.5,bstun:.22,push:3,launch:2.2,anim:"tailSweep",track:!0},mid:{name:"Garras da Bruxa",h:"mid",t:[.2,.36,.32],dmg:4,multi:3,range:1.95,arc:.9,stun:.46,bstun:.2,push:6,rush:2.2,anim:"claws",cd:1.8},special:{name:"Pesadelo da Cuca",h:"mid",t:[.5,.08,.5],spawn:"wave",anim:"cast",cd:3.8},def:{name:"Véu do Pesadelo",t:[.12,.06,.22],veil:2.5,anim:"veil",cd:6},grab:{name:"Abraço da bruxa",grab:!0,t:[.26,.05,.5],range:.85,dmg:15,launch:3.2,push:6,anim:"grab"}}},zl={tornado:{name:"Redemoinho",dmg:8,stun:.6,push:4,speed:7.5,life:1.5,hitR:.75},leaf:{name:"Lâmina da Mata",h:"mid",dmg:8,stun:.46,bstun:.2,push:3,speed:13,life:.5,hitR:.6},wave:{name:"Pesadelo da Cuca",h:"mid",dmg:7,stun:.5,bstun:.24,push:4,speed:6.5,life:1.45,hitR:.95,daze:1.6},roots:{name:"Ira da Floresta",h:"low",dmg:5,stun:.35,bstun:.2,push:0,root:.85,warn:.42,reach:7.5,hitR:.95}};for(const i in Un)for(const t in Un[i])Un[i][t].id=t;const Ga={J:{n:"light1",f:"fLight",b:"bLight",d:"dLight"},K:{n:"heavy",f:"fHeavy",b:"bHeavy",d:"dHeavy"},L:{n:"mid"},I:{n:"special"},O:{n:"def"}},Wa={saci:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · termina arremessando"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"martelo fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a canelada acertar"},{name:"Pressão",cmd:["fJ","J","bK"],note:"seguro: a meia-lua afasta"}],mula:[{name:"Dano e arremesso",cmd:["J","J","L"],note:"garantido · coice arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","K"],note:"pisão fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a raspada acertar"},{name:"Pressão",cmd:["fJ","J","fK"],note:"investida aguenta um golpe fraco · muito punível"}],curupira:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · termina arremessando"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"machado fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a pisada acertar"},{name:"Pressão",cmd:["fJ","J","bK"],note:"seguro: o giro afasta e abre espaço para as raízes"}],cuca:[{name:"Dano e arremesso",cmd:["J","J","K"],note:"garantido · rabada arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida de cauda não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"mordida fura a defesa baixa · muito punível"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a garra rasteira acertar"},{name:"Pressão",cmd:["fJ","J","L"],note:"termina nas Garras da Bruxa · três golpes"}]},Bl={high:"ALTO",mid:"MÉDIO",low:"BAIXO"},ri=i=>Math.round(i*60);function Hl(i){if(!i.t)return null;const[t,e,n]=i.t,s={startup:ri(t),active:ri(e),recovery:ri(n)};return i.dmg&&i.multi?(s.onHit=ri((i.stun||.35)-n),s.onBlock=ri((i.bstun||.22)-n)):i.dmg&&(s.onHit=i.launch?"derruba":ri((i.stun||.35)-e-n),s.onBlock=ri((i.bstun||.22)-e-n)),s}const tg={saci:W0,mula:X0,curupira:J0,cuca:Z0},an=()=>new L,eg=i=>{for(;i>Math.PI;)i-=6.2832;for(;i<-Math.PI;)i+=6.2832;return i};class Ic{constructor(t,e){this.kind=t,this.game=e,Object.assign(this,Q0[t]),this.maxHp=this.hp,this.model=tg[t](),e.scene.add(this.model.root),this.pos=an(),this.vel=an(),this.dir=an(),this.wins=0,this.energy=0,this.reset(0,0,0)}dispose(){this.game.scene.remove(this.model.root),this.model.root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}reset(t,e,n){this.pos.set(t,0,e),this.vel.set(0,0,0),this.y=0,this.vy=0,this.facing=n,this.hp=this.maxHp,this.cd={mid:0,special:0,def:0,dodge:0},this.invuln=0,this.burn=0,this.buf=null,this.bufT=0,this.combo=0,this.comboT=0,this.comboDmg=0,this.taken=0,this.juggle=0,this.chain=[],this.wasBlock=!1,this.blockAt=9,this.pgCd=0,this.pgOk=!1,this.dodgeSide=0,this.veil=0,this.daze=0,this.dazeImm=0,this.rootImm=0,this.spinExtra=0,this.kickTurn=!1,this.lastMove=an(),this.setState("idle"),this.updDir()}updDir(){this.dir.set(Math.sin(this.facing),0,Math.cos(this.facing))}dist(){return Math.hypot(this.opp.pos.x-this.pos.x,this.opp.pos.z-this.pos.z)}gain(t){this.energy=Math.min(100,this.energy+t)}setState(t){this.state=t,this.st=0,this.blocking=!1,this.guard="high",this.phase=0,this.pk=0,t==="idle"?(this.anim="idle",this.kickTurn=!1,this.taken=0,this.juggle=0,this.opp&&this.opp.comboT>.7&&(this.opp.comboT=.7)):t!=="attack"&&t!=="custom"&&(this.anim=t==="blockstun"?"block":t)}faceOpp(t=99){const e=Math.atan2(this.opp.pos.x-this.pos.x,this.opp.pos.z-this.pos.z),n=eg(e-this.facing);this.facing+=Math.max(-t,Math.min(t,n)),this.updDir()}inReach(t,e,n=this.dir){const s=this.opp,r=s.pos.x-this.pos.x,a=s.pos.z-this.pos.z,o=Math.hypot(r,a);return o>t+s.radius||s.y>1.9?!1:o<this.radius+s.radius+.15||Math.acos(Math.max(-1,Math.min(1,(r*n.x+a*n.z)/(o||1))))<=e}cmdDir(t){if(t.dir)return t.dir;const e=t.move;if(!e||e.lengthSq()<.09)return"n";const n=this.opp,s=n.pos.x-this.pos.x,r=n.pos.z-this.pos.z,a=(e.x*s+e.z*r)/(Math.hypot(s,r)||1);return t.down&&Math.abs(a)<.7?"d":a>.5?"f":a<-.5?"b":"s"}tryStart(t){const e=t.b;if(e==="SP")return this.energy<100?!1:(this.startSuper(),!0);if(e==="EV")return this.startDodge(t.v);if(e==="GR")return this.chain=[],this.startMove("grab"),!0;const n=Ga[e];if(!n)return!1;const s=n[t.dir]||n.n,r=Un[this.kind][s];if(!r||r.cd&&this.cd[s]>0||r.cost&&this.energy<r.cost)return!1;if(r.cost&&(this.energy-=r.cost),r.cd&&(this.cd[s]=r.cd),this.state!=="attack"&&(this.chain=[]),r.custom&&this.game.log({t:"move",f:this,m:r}),r.custom==="voadora")this.setState("custom"),this.anim="voadora",this.cphase=0,this.connected=!1,this.custom=this.updVoadora;else if(r.custom==="invert"){const a=this.opp,o=an().subVectors(a.pos,this.pos).setY(0).normalize(),c=an().set(-o.z,0,o.x),l=this.lastMove.lengthSq()>.09?this.lastMove.clone().setY(0).normalize():o.clone().negate(),h=l.dot(c);this.game.spawnGhost(this),this.setState("custom"),this.anim="dodge",this.dodgeSide=Math.abs(h)>.5?Math.sign(h):0,this.dv=l,this.cphase=0,this.custom=this.updInvert,a.state==="attack"&&(this.gain(12),this.game.tag(this,"ENGANOU!")),this.game.fx.leaves(this.pos,22,3,.5)}else r.custom==="teleport"?(this.setState("custom"),this.anim="vanish",this.cphase=0,this.custom=this.updTeleport,this.opp.state==="attack"&&this.gain(12),this.game.fx.leaves(this.pos,26,3,.5),this.game.fx.smoke({x:this.pos.x,y:1,z:this.pos.z},10)):this.startMove(s);return!0}startMove(t){const e=Un[this.kind][t];if(this.setState("attack"),this.move=e,this.mt=e.t.slice(),this.anim=e.anim,this.hitDone=!1,this.fired=!1,this.connected=!1,this.kickBack=!1,this.kickTurn=!1,this.chain.push(t),this.armorUsed=!1,this.hitN=0,e.kick){const n=this.opp,s=(n.pos.x-this.pos.x)*this.dir.x+(n.pos.z-this.pos.z)*this.dir.z<0;this.kickBack=s,this.kickTurn=!s,s&&(this.mt=[.14,.1,.34])}e.h==="low"&&this.game.fx.ring(this.pos,8376575,1.5,.28),this.game.log({t:"move",f:this,m:e})}startDodge(t){const e=this.dodge;if(this.cd.dodge>0)return!1;const n=this.opp,s=an().subVectors(n.pos,this.pos).setY(0).normalize(),r=an().set(-s.z,0,s.x),a=t?t.dot(s):0,o=t?t.dot(r):0,c=Math.abs(o)>=Math.abs(a)||a>0;return this.setState("dodge"),this.cd.dodge=e.t+e.cd,this.dodgeSide=c?o<0?-1:1:0,this.dv=c?r.multiplyScalar(this.dodgeSide).addScaledVector(s,.25).normalize():s.negate(),this.game.fx.dust(this.pos,8,0,0,2),this.game.log({t:"move",f:this,m:{name:c?"Esquiva lateral":"Recuo",t:[e.ev[0],e.ev[1]-e.ev[0],e.t-e.ev[1]]}}),!0}updDodge(t){const e=this.dodge;this.pk=Math.min(1,this.st/e.t),this.pos.addScaledVector(this.dv,e.dist/e.t*(1.6-1.2*this.pk)*t),this.faceOpp(this.turn*1.5*t),this.st>=e.t&&this.setState("idle")}tryGrab(){const t=this.opp,e=this.move;return this.dist()>this.radius+t.radius+e.range||t.y>.1||t.invuln>0||t.state!=="idle"&&t.state!=="blockstun"&&t.state!=="rooted"?!1:(this.setState("custom"),this.anim="grabHold",this.cphase=0,this.custom=this.updThrow,this.throwM=e,t.setState("grabbed"),t.anim="hit",t.vel.set(0,0,0),this.game.tag(t,"AGARRADO!"),this.game.log({t:"hit",att:this,def:t,m:e,res:"grab",dmg:0}),!0)}updThrow(){const t=this.opp,e=this.throwM,n=this.st;this.cphase===0?(this.pk=Math.min(1,n/Ue.breakWindow),t.state!=="grabbed"?(this.cphase=1,this.st=0):n>=Ue.breakWindow&&(this.cphase=1,this.st=0,this.anim="grabThrow",t.receive(this,{name:e.name,dmg:e.dmg,launch:e.launch,push:e.push,thrown:!0,unblockable:!0}))):(this.pk=Math.min(1,n/.35),n>=.35&&this.setState("idle"))}breakGrab(){const t=this.opp,e=an().subVectors(this.pos,t.pos).setY(0).normalize();this.setState("hit"),this.stun=.28,this.vel.copy(e).multiplyScalar(5),t.setState("hit"),t.stun=.3,t.vel.copy(e).multiplyScalar(-5),this.buf=null,this.game.tag(this,"SOLTOU!"),this.game.fx.sparks({x:(this.pos.x+t.pos.x)/2,y:1.2,z:(this.pos.z+t.pos.z)/2},10,[.7,.8,1]),this.game.log({t:"hit",att:t,def:this,m:t.throwM,res:"break",dmg:0})}update(t,e){const n=this.game.fx;for(const o in this.cd)this.cd[o]=Math.max(0,this.cd[o]-t);this.invuln-=t,this.pgCd-=t,this.veil-=t,this.daze-=t,this.dazeImm-=t,this.rootImm-=t,(this.comboT-=t)<=0&&(this.combo=0,this.comboDmg=0),this.burn>0&&(this.burn-=t,this.hp=Math.max(1,this.hp-2*t),n.fire({x:this.pos.x,y:this.y+.9+Math.random()*.5,z:this.pos.z},40*t,this.radius*.7,1.5,.4));const s=this.cmdDir(e);switch(e.block?(this.wasBlock||(this.blockAt=0,this.pgOk=this.pgCd<=0,this.pgCd=.45),this.blockAt+=t):this.wasBlock&&this.blockAt<=Ue.tap&&s!=="n"&&(this.buf=s==="f"?{b:"GR"}:{b:"EV",v:e.move.clone()},this.bufT=Ue.buffer+t),this.wasBlock=!!e.block,e.press==="EV"||e.press==="GR"?(this.buf={b:e.press,v:e.move&&e.move.clone()},this.bufT=Ue.buffer):e.press?(this.buf={b:e.press,dir:s},this.bufT=Ue.buffer):(this.bufT-=t)<=0&&(this.buf=null),e.move&&this.lastMove.copy(e.move),this.st+=t,this.state){case"idle":this.free(t,e);break;case"attack":this.updAttack(t);break;case"custom":this.custom(t);break;case"dodge":this.updDodge(t);break;case"grabbed":e.press==="J"||e.press==="K"?this.breakGrab():(this.opp.state!=="custom"||this.st>Ue.breakWindow+.3)&&this.setState("idle");break;case"rooted":this.st>=this.stun&&this.setState("idle");break;case"hit":case"blockstun":this.pos.addScaledVector(this.vel,t),this.vel.multiplyScalar(Math.max(0,1-9*t)),this.state==="blockstun"&&(this.blocking=!!e.block,this.guard=e.down?"low":"high",this.anim=this.guard==="low"?"blocklow":"block"),this.st>=this.stun&&this.setState("idle");break;case"air":this.y+=this.vy*t,this.vy-=22*t,this.pos.addScaledVector(this.vel,t),this.spinExtra=0,this.y<=0&&(this.y=0,n.dust(this.pos,16,0,0,3),this.game.shake=Math.max(this.game.shake,.15+this.mass*.12),this.setState(this.hp<=0?"ko":"down"),this.invuln=1.2);break;case"down":this.st>.7&&this.setState("getup");break;case"getup":this.pk=this.st/.38,this.st>.38&&this.setState("idle");break}const r=Math.hypot(this.pos.x,this.pos.z),a=this.game.R-this.radius*.5;r>a&&(this.pos.x*=a/r,this.pos.z*=a/r)}free(t,e){if(this.faceOpp(this.turn*t),this.buf&&this.tryStart(this.buf)){this.buf=null;return}if(e.block){this.blocking=!0,this.guard=e.down?"low":"high",this.anim=this.guard==="low"?"blocklow":"block";return}this.blocking=!1;const n=e.move;if(n&&n.lengthSq()>.01){const s=n.dot(this.dir)<-.3?.72:1;this.pos.addScaledVector(n,this.speed*s*t),this.anim="walk"}else this.anim="idle"}updAttack(t){const e=this.move,[n,s,r]=this.mt,a=this.st,o=this.opp,c=this.game,l=c.fx;if(a<n)this.phase=0,this.pk=a/n,e.track&&this.faceOpp(this.turn*t),e.lunge&&(e.lunge<0||this.dist()>this.radius+o.radius+.4)&&this.pos.addScaledVector(this.dir,e.lunge*t);else if(a<n+s){if(this.phase=1,this.pk=(a-n)/s,!this.fired){if(this.fired=!0,e.spawn&&c.spawn(e.spawn,this),e.veil&&(this.veil=e.veil,l.ring(this.pos,8380624,2.4,.35),c.tag(this,"VÉU")),e.dustFx){const h=this.pos.clone().addScaledVector(this.dir,1.2);l.dust(h,70,this.dir.x,this.dir.z,11,[.36,.25,.17],.9),l.sparks({x:h.x,y:.2,z:h.z},14,[.6,.45,.3])}if(e.quake){const h=this.pos.clone().addScaledVector(this.dir,1.5);l.dust(h,30,0,0,4),l.ring(h,13148272,2.6,.35),c.shake=Math.max(c.shake,.4)}}if(e.rush&&this.dist()>this.radius+o.radius+.3&&(this.pos.addScaledVector(this.dir,e.rush*t),l.dust(this.pos,40*t,-this.dir.x,-this.dir.z,3)),e.beam)this.beam(t);else if(e.grab)this.hitDone||(this.hitDone=!0,this.tryGrab());else if(e.multi){const h=Math.min(e.multi,Math.floor(this.pk*e.multi)+1);h>this.hitN&&(this.hitN=h,this.inReach(e.range,e.arc)&&(this.hitDone=!0,o.receive(this,h<e.multi?{...e,push:1.2}:e)!=="miss"&&(this.connected=!0)))}else if(e.dmg&&!this.hitDone){const h=this.kickBack?this.dir.clone().negate():this.dir;this.inReach(e.range,e.arc,h)&&(this.hitDone=!0,this.connected=o.receive(this,e)!=="miss")}}else if(a<n+s+r){this.phase=2,this.pk=(a-n-s)/r,e.dmg&&!this.hitDone&&(this.hitDone=!0,c.log({t:"hit",att:this,def:o,m:e,res:"whiff",dmg:0}));const h=this.buf;if(h&&e.next&&this.connected){const u=e.next[(h.dir==="f"||h.dir==="b"||h.dir==="d"?h.dir:"")+h.b]||e.next[h.b];u==="@"?(this.faceOpp(.5),this.tryStart({b:h.b,dir:"n"})&&(this.buf=null)):u&&!this.chain.includes(u)&&(this.buf=null,this.faceOpp(.5),this.startMove(u))}}else this.setState("idle")}beam(t){const e=this.opp,n=this.game,s=this.model.flamePos,r=an().set(this.dir.x,-.16,this.dir.z).normalize();if(n.fx.fireJet(s,r,420*t,15,.8),n.fx.embers(s,60*t,.2,5),n.shake=Math.max(n.shake,.15),this.hitDone)return;const a=e.pos.x-this.pos.x,o=e.pos.z-this.pos.z,c=a*this.dir.x+o*this.dir.z,l=Math.abs(a*this.dir.z-o*this.dir.x);c>.4&&c<7.5+e.radius&&l<.65+e.radius*.6&&e.y<2.2&&e.receive(this,{name:"Inferno",dmg:20,stun:.6,push:6,burn:3,chip:.3,fire:!0})!=="miss"&&(this.hitDone=!0)}updVoadora(t){const e=this.opp,n=this.st,s=this.game.fx;if(this.cphase===0)this.phase=0,this.pk=n/.35,n>=.35&&(this.cphase=1,this.st=0,this.from=this.pos.clone(),this.to=this.pos.clone().addScaledVector(this.dir,Math.max(1.2,Math.min(this.dist(),7.5)-.3)),this.hitDone=!1,s.dust(this.pos,18,0,0,3),s.leaves(this.pos,10,3));else if(this.cphase===1){const r=Math.min(1,n/.6);this.phase=1,this.pk=r,this.pos.lerpVectors(this.from,this.to,r),this.y=9.6*r*(1-r),s.norm.emit(this.pos.x,this.y+.8,this.pos.z,0,0,0,.6,.55,.45,.5,.25,0,0,.5,.25),!this.hitDone&&r>.5&&this.dist()<1.25+e.radius&&e.y<2&&(this.hitDone=!0,e.receive(this,{name:"Voadora",dmg:20,stun:.6,push:10,launch:6.5})!=="miss"&&(this.connected=!0,s.ring(e.pos,15259832,4.5,.45),s.dust(e.pos,40,0,0,6),s.leaves(e.pos,30,6))),r>=1&&(this.y=0,this.cphase=2,this.st=0,this.rec=this.connected?.25:.8,s.dust(this.pos,14,0,0,2.5))}else this.phase=2,this.pk=Math.min(1,n/this.rec),n>=this.rec&&this.setState("idle")}updInvert(t){const n=this.st;this.cphase===0?(this.invuln=.05,this.pk=Math.min(1,n/.26),this.pos.addScaledVector(this.dv,3.4/.26*(1.5-this.pk)*t),this.faceOpp(this.turn*2*t),this.game.fx.leaves(this.pos,60*t,2,.3),n>=.26&&(this.cphase=1,this.st=0)):n>=.1&&this.setState("idle")}updTeleport(){const t=this.opp,e=this.st,n=this.game.fx;if(this.invuln=.08,this.cphase===0){if(e>=.2){const s=this.lastMove.lengthSq()>.01?this.lastMove.clone().normalize():t.dir.clone().negate(),r=t.pos.clone().addScaledVector(s,t.radius+this.radius+.8);r.y=0;const a=Math.hypot(r.x,r.z),o=this.game.R-1;a>o&&r.multiplyScalar(o/a),this.pos.copy(r),this.faceOpp(),this.cphase=1,this.st=0,this.anim="appear",n.leaves(this.pos,30,3,.5),n.smoke({x:r.x,y:1,z:r.z},12)}}else this.pk=Math.min(1,e/.16),e>=.16&&this.setState("idle")}startSuper(){this.energy=0,this.setState("custom"),this.anim="superstart",this.invuln=.55,this.cphase=0,this.game.flash(this),this.custom=()=>{this.pk=Math.min(1,this.st/.45),this.cphase===0&&this.st>=.45?this.dist()<9.5&&this.opp.state!=="ko"?this.game.startCine(this,this.opp):(this.cphase=1,this.st=0,this.anim="hit"):this.cphase===1&&this.st>=.7&&this.setState("idle")}}receive(t,e){if(this.invuln>0||this.state==="down"||this.state==="getup"||this.state==="ko")return"miss";const n=this.game,s=n.fx,r=this.state,a={t:"hit",att:t,def:this,m:e,dmg:0};if(r==="air"&&this.juggle>=Ue.maxJuggle)return"miss";if(r==="dodge"&&!e.track&&!e.thrown&&this.st>=this.dodge.ev[0]&&this.st<=this.dodge.ev[1])return n.tag(this,"ESQUIVOU"),n.log({...a,res:"dodge"}),"miss";const o=e.dirv?e.dirv.clone():an().subVectors(this.pos,t.pos).setY(0).normalize(),c={x:this.pos.x-o.x*this.radius*.6,y:this.y+(e.h==="low"?.35:this.hitY),z:this.pos.z-o.z*this.radius*.6};if(this.veil>0&&!e.thrown&&!e.unblockable)return this.veil=0,n.tag(this,"VÉU ABSORVEU"),s.ring(this.pos,8380624,4.5,.4),s.sparks(c,26,[.5,1,.9]),n.hitstop=.06,t.y<.5&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<3.2+t.radius&&(t.state==="attack"||t.state==="idle"||t.state==="custom")&&!n.cine&&(t.setState("hit"),t.stun=.4,t.vel.copy(o).multiplyScalar(-9),t.y=0),n.log({...a,res:"veil"}),"block";if((r==="idle"||r==="blockstun")&&this.blocking&&this.dir.dot(o)<-.1&&!e.unblockable){const p=this.guard==="low";if(e.h==="high"&&p)return n.tag(this,"ABAIXOU"),n.log({...a,res:"duck"}),"miss";if(e.h==="low"&&!p||e.h==="mid"&&p)n.tag(this,e.h==="low"?"BAIXO!":"POR CIMA!");else{const g=r==="idle"&&this.pgOk&&this.blockAt<=Ue.perfect,_=g?0:e.dmg*(e.chip??Ue.chip);return this.hp=Math.max(1,this.hp-_),this.setState("blockstun"),this.blocking=!0,this.guard=p?"low":"high",this.anim=p?"blocklow":"block",this.stun=g?.12:e.bstun||.22,this.vel.copy(o).multiplyScalar((e.push||2)*(g?.2:.55)),s.sparks(c,g?22:8,g?[1,1,.8]:[.7,.8,1]),t.gain(e.dmg*.4),this.gain(e.dmg*(g?1.2:.5)),n.hitstop=g?.09:.04,g&&(n.tag(this,"DEFESA PERFEITA"),e.id&&t.state==="attack"&&(t.setState("hit"),t.stun=Ue.perfectStagger,t.vel.copy(o).multiplyScalar(-3))),n.log({...a,res:g?"perfect":"block",dmg:_}),"block"}}if(r==="attack"&&this.move.armor&&this.phase<2&&!this.armorUsed&&!e.launch&&!e.thrown&&e.dmg<=8)return this.armorUsed=!0,this.hp=Math.max(1,this.hp-e.dmg),t.gain(e.dmg),s.sparks(c,10,[1,.6,.3]),n.hitstop=.05,n.tag(this,"AGUENTOU"),n.log({...a,res:"armor",dmg:e.dmg}),"hit";const l=r==="air",h=r==="attack"&&!e.thrown,u=r==="hit"||r==="rooted"||l,d=e.dmg*Math.max(Ue.scaleMin,1-Ue.scale*this.taken)*(l?.7:1)*(h?Ue.counterDmg:1);return this.taken||(t.comboDmg=0),this.taken++,l&&this.juggle++,this.hp-=d,t.gain(d*1.5+this.taken*1.5),this.gain(d*.6),t.combo=this.taken,t.comboT=1.3,t.comboDmg+=d,e.burn&&(this.burn=e.burn),this.vel.copy(o).multiplyScalar(e.push||2),e.launch||this.hp<=0||l||this.y>.05||this.taken>=Ue.maxHits?(this.y=Math.max(this.y,.02),this.vy=e.launch||(this.hp<=0?5.5:4),this.vel.multiplyScalar(.7),this.setState("air")):e.root&&this.rootImm<=0?(this.setState("rooted"),this.anim="hit",this.stun=e.root,this.rootImm=e.root+4,this.vel.set(0,0,0),n.tag(this,"PRESO!")):(this.setState("hit"),this.stun=(e.stun||.35)+(h?Ue.counterStun:0)),e.daze&&this.dazeImm<=0&&(this.daze=e.daze,this.dazeImm=e.daze+3,n.tag(this,"DESORIENTADO")),h&&n.tag(t,"CONTRA-ATAQUE!"),this.model.snap(this,n.time),n.hitstop=Math.min(.14,.03+d*.006),n.shake=Math.max(n.shake,Math.min(.8,d*.04)),s.sparks(c,6+d,e.fire?[1,.5,.15]:[1,.85,.6]),e.fire?s.fire(c,30,.4,3,.9):s.dust(c,5,o.x,o.z,3),n.onHit(t,this,d),n.log({...a,res:"hit",dmg:d,counter:h,sure:u,hits:this.taken,total:t.comboDmg}),"hit"}}const ng={saci:["bJ","fK","bK","dJ","K"],mula:["fJ","bK","dJ","K","bJ"],curupira:["fJ","bJ","dJ","dK","K"],cuca:["fJ","K","bK","dK","dJ"]},ig={saci:[["J","J","J","K"],1.1],mula:[["J","J","L"],1.6],curupira:[["fJ","J","J","K"],1.6],cuca:[null,1.5]};class Vl{constructor(t){this.me=t,this.t=.5,this.queue=[],this.blockT=0,this.low=!1,this.seen=null,this.grabRoll=null,this.punished=null,this.mv=new L}q(...t){this.queue=t.map((e,n)=>[e,n===0?0:.2])}press(t,e){e.length===2&&e!=="SP"&&e!=="EV"&&e!=="GR"?(t.dir=e[0],t.press=e[1]):(t.dir="n",t.press=e),e==="EV"&&t.move.copy(this.ev||this.mv)}guard(t){if(t.state==="attack"&&t.move!==this.seen){this.seen=t.move;const e=t.move.h;this.low=e==="low"?Math.random()<.55:e==="mid"?Math.random()<.12:Math.random()<.25,this.me.daze>0&&(this.low=Math.random()<.5)}return this.low}think(t,e){const n=this.me,s=n.opp,r={move:new L,block:!1,press:null};if(n.state==="grabbed")return this.grabRoll===null&&(this.grabRoll=Math.random()<.38?.1+Math.random()*.2:9),(this.grabRoll-=t)<=0&&(r.press="J",this.grabRoll=9),this.queue.length=0,r;if(this.grabRoll=null,n.state==="blockstun")return r.block=!0,r.down=this.guard(s),this.blockT=Math.max(this.blockT,.12),this.queue.length=0,r;if(n.state!=="idle"&&n.state!=="attack")return this.queue.length=0,r;if(this.queue.length)return this.queue[0][1]-=t,this.queue[0][1]<=0&&this.press(r,this.queue.shift()[0]),r;if(n.state!=="idle")return r;if(s.state==="attack"&&s.phase===2&&s.move!==this.punished){const a=s.mt[2]*(1-s.pk),o=n.dist()-n.radius-s.radius,[c,l]=ig[n.kind];if(a>.22&&o<l&&(this.punished=s.move,Math.random()<(n.daze>0?.3:.7)))return this.blockT=0,this.q(...c||Wa[n.kind][0].cmd),r}return s.state!=="attack"&&(this.punished=null),this.blockT>0?(this.blockT-=t,r.block=!0,r.down=this.guard(s),r):((this.t-=t)<=0&&(this.t=.16+Math.random()*.22+(n.daze>0?.25:0),this.decide(e)),r.move.copy(this.mv),r)}decide(t){const e=this.me,n=e.opp,s=e.dist(),r=Math.random(),a=new L().subVectors(n.pos,e.pos).setY(0).normalize(),o=new L(-a.z,0,a.x).multiplyScalar(Math.random()<.5?1:-1),c=()=>{this.mv.copy(a),Math.random()<.3&&this.mv.addScaledVector(o,.7).normalize()},l=()=>{const p=Wa[e.kind];this.q(...p[Math.floor(Math.random()*p.length)].cmd)},h=()=>{const p=ng[e.kind];this.q(p[Math.floor(Math.random()*p.length)])};if(this.mv.set(0,0,0),Math.random()<.12)return;if((n.state==="attack"&&n.phase===0||n.state==="custom"&&n.anim==="voadora")&&s<4.5){if(r<.4){this.seen=null,this.blockT=.5;return}if(r<.5&&e.cd.def<=0){this.q("O");return}if(r<.64&&e.cd.dodge<=0){this.ev=Math.random()<.75?o.clone():a.clone().negate(),this.q("EV");return}if(r<.72){this.mv.copy(o),this.t=.4;return}}for(const p of t.projectiles)if(p.type==="roots"&&p.owner!==e&&!p.hit&&p.pos.distanceTo(e.pos)<1.7){r<.5?(this.mv.copy(Math.random()<.6?o:a),this.t=.45):r<.62&&e.cd.dodge<=0?(this.ev=o.clone(),this.q("EV")):r<.82&&(this.seen=n.move,this.low=!0,this.blockT=.6);return}for(const p of t.projectiles)if(p.type!=="roots"&&p.owner!==e&&p.pos.distanceTo(e.pos)<(p.type==="wave"?4.2:3.5)){p.type==="wave"?r<.22&&e.cd.def<=0&&(e.kind==="curupira"||e.kind==="saci")?this.q("O"):r<.8?(this.low=!1,this.seen=n.move,this.blockT=.65):(this.mv.copy(o),this.t=.45):r<.45?(this.low=!1,this.blockT=.45):(this.mv.copy(o),this.t=.45);return}if(e.energy>=100&&s<7&&r<.5){this.q("SP");return}if(n.state==="down"||n.state==="getup"||n.state==="air"){s<3?this.mv.copy(a).negate().multiplyScalar(.6):s>5&&c();return}const d=s-e.radius-n.radius;if(n.state==="rooted"){d>2.4&&e.kind==="curupira"&&e.cd.mid<=0?this.q("L"):d>.7?this.mv.copy(a):r<.45?this.q("GR"):l();return}if(n.veil>0&&r<.75){r<.25&&s>3&&e.cd.mid<=0&&(e.kind==="saci"||e.kind==="curupira")?this.q("L"):d<2.2?(this.mv.copy(a).negate().addScaledVector(o,.7).normalize(),this.t=.5):(this.mv.copy(o),this.t=.4);return}if(n.blocking&&n.state==="idle"&&d<1.4&&r<.5){d<.55?this.q("GR"):this.mv.copy(a);return}if(e.kind==="saci")s>6?r<.45&&e.cd.mid<=0?this.q("L"):c():s>3?r<.2&&e.cd.special<=0?this.q("I"):r<.32&&e.cd.mid<=0?this.q("L"):r<.42?this.q("fJ","J","bK"):c():d>.65?this.mv.copy(a):r<.5?l():r<.7?h():r<.76?this.q("GR"):r<.88?(this.mv.copy(a).negate().addScaledVector(o,.6).normalize(),this.t=.45):(this.seen=null,this.blockT=.4);else if(e.kind==="curupira")s>6?r<.4&&s<7.3&&e.cd.special<=0?this.q("I"):r<.62&&e.cd.mid<=0?this.q("L"):c():s>3?r<.24&&e.cd.special<=0?this.q("I"):r<.44&&e.cd.mid<=0?this.q("L"):r<.58&&s<3.9?this.q("fJ","J"):c():d>.7?this.mv.copy(a):r<.48?l():r<.68?h():r<.75?this.q("GR"):r<.88?(this.mv.copy(a).negate().addScaledVector(o,.6).normalize(),this.t=.45):(this.seen=null,this.blockT=.4);else if(e.kind==="cuca")s>5.5?r<.5&&e.cd.special<=0?this.q("I"):r<.62&&e.cd.def<=0&&s<7.5?this.q("O"):r<.85&&c():s>2.8?r<.34&&e.cd.special<=0?this.q("I"):r<.48&&s<4?this.q("fK"):r<.58&&s<3.6?this.q("K"):r<.68&&e.cd.def<=0?this.q("O"):r<.8?(this.mv.copy(a).negate().addScaledVector(o,.5).normalize(),this.t=.4):c():d>.9?r<.3&&e.cd.mid<=0?this.q("L"):r<.5?this.q("fJ"):r<.62?this.q("K"):this.mv.copy(a):r<.34?l():r<.54?h():r<.68&&e.cd.mid<=0?this.q("L"):r<.78&&d<.6?this.q("GR"):r<.88&&e.cd.def<=0?this.q("O"):(this.seen=null,this.blockT=.45);else{if(e.dir.dot(a)<0&&s<3.2&&r<.7){this.q("L");return}s>7.5?c():s>3.3?r<.24&&e.cd.special<=0?this.q("I"):r<.36&&s<5.5?this.q("fK"):c():d>.95?r<.16&&e.cd.def<=0?this.q("O"):r<.3?this.q("fJ","J","fK"):this.mv.copy(a):r<.42?l():r<.62?h():r<.74?this.q("L"):r<.8&&d<.6?this.q("GR"):r<.9&&e.cd.def<=0?this.q("O"):(this.seen=null,this.blockT=.45)}}}const Uc={KeyJ:"J",KeyK:"K",KeyL:"L",KeyI:"I",KeyO:"O",Space:"SP"},Nc={2:"J",3:"K",0:"L",1:"I",5:"O",7:"SP"},Oc=i=>Math.max(-1,Math.min(1,i));class sg{constructor({onPause:t,onTouch:e}){this.keys=new Set,this.presses=[],this.onPause=t,this.onTouch=e,this.touch=!1,this.t={x:0,y:0,block:!1},this.p={x:0,y:0,block:!1},this.prev=[],this.prevDir=0,this.nav={dx:0,ok:!1},addEventListener("keydown",n=>{(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),!n.repeat&&(this.keys.add(n.code),Uc[n.code]&&this.presses.push(Uc[n.code]),(n.code==="Escape"||n.code==="KeyP")&&t())}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.keys.clear(),this.t.x=this.t.y=0,this.t.block=!1}),addEventListener("contextmenu",n=>n.preventDefault()),matchMedia("(pointer: coarse)").matches&&this.enableTouch(),addEventListener("pointerdown",n=>{n.pointerType==="touch"&&this.enableTouch()},!0),this.bindTouch()}enableTouch(){this.touch||(this.touch=!0,document.body.classList.add("touch"),this.onTouch&&this.onTouch())}bindTouch(){const t=document.getElementById("stickZone"),e=document.getElementById("stickBase"),n=document.getElementById("stickKnob");let s=null,r=0,a=0;const o=l=>{const h=e.offsetWidth*.5||50;let u=(l.clientX-r)/h,d=(l.clientY-a)/h;const p=Math.hypot(u,d);p>1&&(u/=p,d/=p),n.style.transform=`translate(${u*h}px, ${d*h}px)`;const g=Math.min(1,p),_=.2,m=g<_?0:(g-_)/(1-_);this.t.x=g?u/g*m:0,this.t.y=g?-d/g*m:0},c=l=>{l.pointerId===s&&(s=null,this.t.x=this.t.y=0,n.style.transform="",e.style.left=e.style.top="",e.classList.remove("on"))};t.addEventListener("pointerdown",l=>{if(s===null){l.preventDefault(),s=l.pointerId;try{t.setPointerCapture(s)}catch{}r=l.clientX,a=l.clientY,e.style.left=r+"px",e.style.top=a+"px",e.classList.add("on"),o(l)}}),t.addEventListener("pointermove",l=>{l.pointerId===s&&o(l)}),t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c),document.querySelectorAll("[data-btn]").forEach(l=>{const h=l.dataset.btn;let u=null;const d=p=>{p.pointerId===u&&(u=null,l.classList.remove("down"),h==="BLOCK"&&(this.t.block=!1))};l.addEventListener("pointerdown",p=>{p.preventDefault(),u=p.pointerId;try{l.setPointerCapture(u)}catch{}l.classList.add("down"),h==="BLOCK"?this.t.block=!0:this.presses.push(h)}),l.addEventListener("pointerup",d),l.addEventListener("pointercancel",d)})}frame(){const t=this.nav;t.dx=0,t.ok=!1,this.p.x=this.p.y=0,this.p.block=!1;let e=null;const n=navigator.getGamepads?navigator.getGamepads():[];for(const h of n)if(h&&h.connected){e=h;break}if(!e)return this.prev.length=0,t;const s=h=>!!(e.buttons[h]&&e.buttons[h].pressed),r=h=>s(h)&&!this.prev[h];let a=e.axes[0]||0,o=-(e.axes[1]||0);const c=Math.hypot(a,o);c<.22?a=o=0:c>1&&(a/=c,o/=c),this.p.x=Oc(a+(s(15)?1:0)-(s(14)?1:0)),this.p.y=Oc(o+(s(12)?1:0)-(s(13)?1:0)),this.p.block=s(4)||s(6);for(const h in Nc)r(h)&&this.presses.push(Nc[h]);r(9)&&this.onPause();const l=this.p.x>.5?1:this.p.x<-.5?-1:this.p.y<-.5?1:this.p.y>.5?-1:0;return l&&l!==this.prevDir&&(t.dx=l),this.prevDir=l,t.ok=r(0),this.prev=e.buttons.map(h=>h.pressed),t}poll(){const t=this.keys,e=(a,o)=>t.has(a)||t.has(o)?1:0;let n=e("KeyD","ArrowRight")-e("KeyA","ArrowLeft")+this.t.x+this.p.x,s=e("KeyW","ArrowUp")-e("KeyS","ArrowDown")+this.t.y+this.p.y;const r=Math.hypot(n,s);return r>1&&(n/=r,s/=r),{x:n,y:s,block:t.has("ShiftLeft")||t.has("ShiftRight")||this.t.block||this.p.block,press:this.presses.shift()||null}}clear(){this.presses.length=0}}const Fc={low:{ratio:1.25,shadow:0,lights:!1,fx:.55},medium:{ratio:1.6,shadow:1024,lights:!0,fx:.8},high:{ratio:2,shadow:2048,lights:!0,fx:1}},kc=["low","medium","high"],Gl="fs.quality",rg=()=>{try{return localStorage.getItem(Gl)}catch{return null}},ag=i=>{try{localStorage.setItem(Gl,i)}catch{}};function og({renderer:i,arena:t,fx:e,mobile:n,onChange:s}){let r=rg();r!=="auto"&&!Fc[r]&&(r="auto");let a="high",o=0,c=0,l=3;function h(d){a=d;const p=Fc[d];i.setPixelRatio(Math.min(devicePixelRatio||1,p.ratio));const g=t.sun;g.castShadow=!!p.shadow,p.shadow&&g.shadow.mapSize.x!==p.shadow&&(g.shadow.mapSize.set(p.shadow,p.shadow),g.shadow.map&&(g.shadow.map.dispose(),g.shadow.map=null));for(const _ of t.torchLights)_.visible=p.lights;e.mult=p.fx,o=c=0,l=2.5,s(u)}const u={get pref(){return r},get tier(){return a},set(d){r=d,ag(d),h(d==="auto"?n()?"medium":"high":d)},tick(d){if(r!=="auto"||d>.25)return;if(l>0){l-=d;return}if(o+=d,c++,o<2.5)return;const p=o/c;o=c=0;const g=kc.indexOf(a);p>1/40&&g>0&&h(kc[g-1])}};return u.set(r),u}const Gs="M25 3c1 9 12 13 12 25a13 13 0 0 1-26 0c0-6 3-9 6-12 0 4 1 7 4 7 2-6-1-12 4-20z",zc="M16 6h16l7 24c1 6-5 12-15 12S8 36 9 30z",Jr="M24 4l16 6v12c0 10-7 17-16 22C15 39 8 32 8 22V10z",cg={fist:'<path d="M11 23c0-3 2-5 4.500-5 2 0 3.500 1 4.200 2.600.600-2.100 2.300-3.600 4.500-3.600 2.300 0 4 1.400 4.500 3.400.700-1.400 2.100-2.400 3.800-2.400 2.500 0 4.500 2 4.500 5v9c0 6-4.500 10-11 10h-4c-6.500 0-11-4-11-10z"/><path class="k" d="M16 30h13c2 0 3 1 3 3"/>',leg:'<path d="M17 5h11v19l11 7c3 2 2 8-2 8H15c-2 0-3-2-3-4l3-12z"/><path class="k" d="M14 33h24"/>',flykick:'<g transform="rotate(-35 26 22)"><path d="M6 17h20l7-6 9 6c2 1.500 2 5 0 6.500L36 28H6z"/></g><path class="s" d="M5 34l8-5M10 42l8-5M22 44l6-4"/>',tornado:'<path class="s" d="M7 9c8 3 26 3 34 0M11 18c7 2.500 19 2.500 26 0M16 27c5 2 11 2 16 0M20 35c3 1.500 6 1.500 9 0M24 42h1"/>',smoke:'<circle cx="17" cy="30" r="9"/><circle cx="29" cy="25" r="11"/><circle cx="34" cy="35" r="7"/><path d="M11 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/><path d="M40 4l1.200 3 3 1.200-3 1.200-1.200 3-1.200-3-3-1.200 3-1.200z"/>',cap:'<path d="M9 35c1-15 9-26 24-31-4 7-3 12 1 15 4 4 6 9 6 16z"/><path d="M5 36h38v6H5z"/><path class="k" d="M9 35h31"/>',shieldWind:`<path d="${Jr}"/><path class="k" d="M15 19h13a4 4 0 1 0-4-4M15 27h16a4 4 0 1 1-4 4"/>`,shieldDust:`<path d="${Jr}"/><circle class="kf" cx="19" cy="24" r="5"/><circle class="kf" cx="28" cy="20" r="6"/><circle class="kf" cx="28" cy="30" r="4"/>`,hoof:`<path d="${zc}"/><path class="k" d="M24 27v15"/>`,kick:`<g transform="translate(1 12) rotate(-28 18 20) scale(.74)"><path d="${zc}"/></g><path class="s" d="M33 9l4-6M39 17l7-2M37 26l7 3"/>`,shoe:'<path class="s" style="stroke-width:8" d="M13 8v17a11 11 0 0 0 22 0V8"/><g class="kf"><circle cx="13" cy="13" r="1.700"/><circle cx="13" cy="22" r="1.700"/><circle cx="35" cy="13" r="1.700"/><circle cx="35" cy="22" r="1.700"/><circle cx="24" cy="36" r="1.700"/></g>',flame:`<path d="${Gs}"/><path class="kf" d="M24 26c3 4 6 6 6 10a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 2 3-3z"/>`,dust:'<circle cx="14" cy="29" r="8"/><circle cx="26" cy="24" r="10"/><circle cx="36" cy="30" r="7"/><path d="M5 33h38v6H5z"/><circle cx="9" cy="12" r="2.500"/><circle cx="21" cy="7" r="2"/><circle cx="39" cy="11" r="3"/>',inferno:`<g transform="translate(-7 15) scale(.58)"><path d="${Gs}"/></g><g transform="translate(27 15) scale(.58)"><path d="${Gs}"/></g><path d="${Gs}"/><path class="kf" d="M24 24c3 4 7 7 7 12a7 7 0 0 1-14 0c0-4 2-6 4-8 1 2 2 2 3-4z"/>`,leaf:'<path d="M7 41C7 19 21 6 42 6c0 21-13 35-35 35z"/><path class="k" d="M10 38L33 15M18 30l1-9M24 24l9 0"/>',roots:'<path class="s" d="M24 5v15M24 20c-4 7-11 6-13 16M24 20c4 7 11 6 13 16M24 20v23M11 36l-5 7M37 36l5 7M18 9l6 5 6-5"/>',invert:'<path d="M27 8L10 24l17 16V30h14V18H27z"/><path class="s" d="M44 14v20" style="opacity:.55"/>',tree:'<path d="M24 2l13 15h-6l10 12H29v15H19V29H7l10-12h-6z"/><path class="k" d="M24 30v12"/>',claw:'<path d="M9 5c5 11 6 24 2 38 7-11 9-24 5-38zM21 3c5 13 6 28 2 42 7-13 9-28 5-42zM33 5c5 11 6 24 2 38 7-11 9-24 5-38z"/>',tail:'<path class="s" style="stroke-width:8" d="M7 13c18-5 32 3 32 15 0 9-9 13-16 8"/><path d="M40 6l5 9-9 2z"/><path class="s" d="M6 40h18"/>',eye:'<path d="M2 24c9-14 35-14 44 0-9 14-35 14-44 0z"/><circle class="kf" cx="24" cy="24" r="8"/><path class="s" d="M8 8l4 5M40 8l-4 5M24 3v6"/>',veil:`<path d="${Jr}"/><path class="kf" d="M29 13a11 11 0 1 0 0 22 9 9 0 1 1 0-22z"/>`,jaw:'<path d="M3 6h42l-4 15-5-7-4 7-4-7-4 7-4-7-4 7-4-7-5 7zM3 42h42l-4-15-5 7-4-7-4 7-4-7-4 7-4-7-4 7-5-7z"/>'},Xn="#eadfc6",Bc={saci:{J:["fist",Xn],K:["leg",Xn],BLOCK:["shieldWind","#b9c8e6"],L:["tornado","#8fe6d2"],I:["flykick","#ff9466"],O:["smoke","#cdb9ff"],SP:["cap","#ffd27a"]},mula:{J:["hoof",Xn],K:["kick",Xn],BLOCK:["shieldDust","#b9c8e6"],L:["shoe","#d6dbe4"],I:["flame","#ffa23a"],O:["dust","#e0c090"],SP:["inferno","#ffd27a"]},curupira:{J:["fist",Xn],K:["leg",Xn],BLOCK:["shieldWind","#b9c8e6"],L:["leaf","#9be06a"],I:["roots","#d8b86a"],O:["invert","#7fe0c0"],SP:["tree","#ffd27a"]},cuca:{J:["claw",Xn],K:["tail",Xn],BLOCK:["shieldDust","#b9c8e6"],L:["claw","#7fd8e0"],I:["eye","#c79bff"],O:["veil","#5fd0c8"],SP:["jaw","#ffd27a"]}},Hc={L:"mid",I:"special",O:"def"};function lg(){const i={},t={};document.querySelectorAll("[data-btn]").forEach(n=>{n.innerHTML='<i class="ring"></i><span class="ico"></span><b class="n"></b>',i[n.dataset.btn]=n,t[n.dataset.btn]={prev:0,max:1,cool:!1,nores:!1,avail:null,q:-1,n:""},n.addEventListener("animationend",s=>{s.animationName==="back"&&n.classList.remove("back")})});function e(n,s,r,a,o){const c=i[n],l=t[n];l.cool!==s&&(l.cool=s,c.classList.toggle("cool",s)),l.nores!==r&&(l.nores=r,c.classList.toggle("nores",r));const h=Math.round(Math.max(0,Math.min(1,a))*100);h!==l.q&&(l.q=h,c.style.setProperty("--p",h+"%")),o!==l.n&&(l.n=o,c.lastElementChild.textContent=o);const u=!s&&!r;u&&l.avail===!1&&(c.classList.remove("back"),c.offsetWidth,c.classList.add("back")),l.avail=u}return{setKind(n){for(const s in Bc[n]){const[r,a]=Bc[n][s],o=i[s];o.querySelector(".ico").innerHTML=`<svg viewBox="0 0 48 48" aria-hidden="true">${cg[r]}</svg>`,o.style.setProperty("--ic",a),o.classList.remove("back"),Object.assign(t[s],{prev:0,max:1,avail:null})}},update(n){for(const r in Hc){const a=Hc[r],o=t[r],c=n.cd[a];c>o.prev+1e-4&&(o.max=c),o.prev=c;const l=c>0,h=!l&&n.energy<(Un[n.kind][a].cost||0);e(r,l,h,l?1-c/o.max:1,l&&c>=1?String(Math.ceil(c)):"")}const s=n.energy>=100;e("SP",!1,!s,n.energy/100,""),i.SP.classList.toggle("ready",s)}}}const Wl="fs.controls";function hg(){const i={scale:1,pad:[0,0],stick:[0,0]};try{Object.assign(i,JSON.parse(localStorage.getItem(Wl))||{})}catch{}return i}function Xl(i){const t=document.documentElement.style;t.setProperty("--cs",i.scale),t.setProperty("--padx",i.pad[0]+"px"),t.setProperty("--pady",i.pad[1]+"px"),t.setProperty("--stx",i.stick[0]+"px"),t.setProperty("--sty",i.stick[1]+"px");try{localStorage.setItem(Wl,JSON.stringify(i))}catch{}document.querySelectorAll("[data-cs]").forEach(e=>e.classList.toggle("sel",+e.dataset.cs===i.scale))}const uo=10,Rt=i=>document.getElementById(i),vn=(i=0,t=0,e=0)=>new L(i,t,e),mn=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),ql=matchMedia("(pointer: coarse)").matches,Mn=new c0({antialias:!ql,powerPreference:"high-performance"});Mn.shadowMap.enabled=!0;Mn.shadowMap.type=qc;Mn.toneMapping=Kc;Mn.toneMappingExposure=1.15;document.body.prepend(Mn.domElement);const Ee=new l0,on=new Je(42,1,.1,300),mt=new k0(Ee),Yl=G0(Ee,mt,uo);function lr(){Mn.setSize(innerWidth,innerHeight),on.aspect=innerWidth/innerHeight,on.updateProjectionMatrix(),mt.resize(Mn.domElement.height)}addEventListener("resize",lr);addEventListener("orientationchange",()=>setTimeout(lr,250));lr();const H={scene:Ee,fx:mt,R:uo,time:0,hitstop:0,shake:0,projectiles:[],cine:null,mode:"menu",phase:"intro",pt:0,timer:60,round:1,slow:1,spawn(i,t){const e=zl[i],n=t.opp;if(i==="roots"){const o=vn().subVectors(n.pos,t.pos).setY(0),c=o.length();c>e.reach&&o.multiplyScalar(e.reach/c);const l=t.pos.clone().add(o),h=Il();h.position.copy(l),Ee.add(h),H.projectiles.push({type:i,owner:t,mesh:h,pos:l,vel:vn(),t:0,up:0,hit:!1,held:!1,life:9});return}const s=i==="tornado"?Dl():i==="leaf"?z0():B0(),r=i==="tornado"?0:i==="leaf"?1.15:1,a=t.pos.clone().addScaledVector(t.dir,1);s.position.set(a.x,r,a.z),s.rotation.y=Math.atan2(t.dir.x,t.dir.z),s.scale.setScalar(.2),Ee.add(s),H.projectiles.push({type:i,owner:t,mesh:s,pos:a,h:r,vel:t.dir.clone().multiplyScalar(e.speed),life:e.life})},spawnGhost(i){const t=i.model.root.clone(!0),e=new Oe({color:9305978,transparent:!0,opacity:.5,depthWrite:!1});t.traverse(s=>{s.isMesh&&(s.material=e,s.castShadow=!1)}),Ee.add(t);let n=0;mt.objs.push(s=>{if(n+=s,e.opacity=.5*Math.max(0,1-n/.7),n>=.7)return Ee.remove(t),e.dispose(),!0})},flash(i){os(.55),hr(`<span style="font-size:.36em">${i.super}</span><small>PODER FOLCLÓRICO</small>`,1.3)},startCine(i,t){const e=vn().subVectors(t.pos,i.pos).setY(0);e.lengthSq()<.01&&e.copy(i.dir),e.normalize(),H.cine={att:i,def:t,d:e,t:0,s:{},from:i.pos.clone(),tor:null,ghosts:[],y0:t.y},i.custom=()=>{},t.setState("idle"),t.vel.set(0,0,0),ur(),Rt("bars").classList.add("on"),Rt("hud").classList.add("cine")},onHit(i,t,e){if(t===Ut&&fn.touch&&navigator.vibrate&&navigator.userActivation?.hasBeenActive!==!1)try{navigator.vibrate(Math.min(70,12+e*2))}catch{}},paused:!1,training:!1,dummy:"parado",events:[],tag(i,t){const e=Rt(i===Ut?"tag1":"tag2");e.textContent=t,e.classList.remove("on"),e.offsetWidth,e.classList.add("on")},log(i){H.events.push(i),H.events.length>80&&H.events.shift(),H.training&&gg(i)}};window.__game=H;let Ut=null,ie=null,fo=null,Ln=null;function Kl(i,t){if(!(Ut&&Ut.kind===i&&ie.kind===t)){for(const e of[Ut,ie])e&&(e.veilMesh&&Ee.remove(e.veilMesh),e.dispose());Ut=new Ic(i,H),ie=new Ic(t,H),Ut.opp=ie,ie.opp=Ut,fo=new Vl(ie);for(const e of[Ut,ie])e.model.root.traverse(n=>{n.isMesh&&!n.material.transparent&&(n.castShadow=!0)});if(i===t){const e=new Set;ie.model.root.traverse(n=>{const s=n.material;n.isMesh&&s.color&&!e.has(s)&&(e.add(s),s.color.offsetHSL(.14,-.1,.05))})}}}const Jl=()=>{Ut.reset(-2.4,0,Math.PI/2),ie.reset(2.4,0,-Math.PI/2)};Kl("curupira","cuca");Jl();H.KINDS=Qs;let fi=null;const fn=new sg({onPause:()=>_i(),onTouch:()=>fi&&fi.pref==="auto"&&fi.set("auto")});fi=og({renderer:Mn,arena:Yl,fx:mt,mobile:()=>ql||fn.touch,onChange(i){lr(),document.querySelectorAll("[data-q]").forEach(t=>t.classList.toggle("sel",t.dataset.q===i.pref))}});document.querySelectorAll("[data-q]").forEach(i=>i.addEventListener("click",()=>fi.set(i.dataset.q)));const Kn=()=>({move:vn(),block:!1,press:null}),Ge=vn(0,0,1);function ug(){const i=fn.poll();return{move:vn(Ge.z*i.x-Ge.x*i.y,0,-Ge.x*i.x-Ge.z*i.y),block:i.block,press:i.press,down:i.y<-.5}}function _i(i){i=i??!H.paused,(H.mode!=="fight"||H.phase==="over")&&(i=!1),H.paused=i,Rt("pause").style.display=i?"flex":"none",fn.clear()}Rt("pauseBtn").addEventListener("click",()=>_i(!0));Rt("resume").addEventListener("click",()=>_i(!1));Rt("quit").addEventListener("click",()=>sh());document.addEventListener("visibilitychange",()=>{document.hidden&&_i(!0)});function dg(){if(!(!fn.touch||window.Capacitor))try{const i=document.documentElement,t=()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}};!document.fullscreenElement&&i.requestFullscreen?i.requestFullscreen({navigationUI:"hide"}).then(t,()=>{}):t()}catch{}}function fg(i){if(!i.dx&&!i.ok)return;const t=["pause","over","menu"].map(Rt).find(s=>getComputedStyle(s).display!=="none");if(!t)return;const e=[...t.querySelectorAll("button")].filter(s=>s.offsetParent);let n=e.indexOf(document.activeElement);i.dx?(n=n<0?0:(n+i.dx+e.length)%e.length,e[n].focus()):n>=0&&e[n].click()}let Xa=0;function hr(i,t=1.2){const e=Rt("msg");e.innerHTML=i,e.classList.add("on"),Xa=t}function os(i){const t=Rt("flash");t.style.transition="none",t.style.opacity=i,t.offsetWidth,t.style.transition="",t.style.opacity=0}const $l=lg(),qa=hg();Xl(qa);document.querySelectorAll("[data-cs]").forEach(i=>i.addEventListener("click",()=>{qa.scale=+i.dataset.cs,Xl(qa)}));const jl=[["mid","L"],["special","I"],["def","O"]],Ui=[1,1];function pg(i){[Ut,ie].forEach((n,s)=>{const r=s+1,a=Math.max(0,n.hp)/n.maxHp;Ui[s]=a>Ui[s]?a:Math.max(a,Ui[s]-i*.35),Rt("h"+r).style.width=a*100+"%",Rt("g"+r).style.width=Ui[s]*100+"%",Rt("h"+r).classList.toggle("burn",n.burn>0);const o=Rt("e"+r);o.firstElementChild.style.width=n.energy+"%",o.classList.toggle("full",n.energy>=100),[...Rt("w"+r).children].forEach((c,l)=>c.classList.toggle("on",l<n.wins))}),Rt("timer").textContent=H.training?"∞":Math.ceil(Math.max(0,H.timer));for(const[n,s]of[["tag1",Ut],["tag2",ie]]){const r=Rt(n);r.classList.contains("on")&&(Qe.set(s.pos.x,s.y+s.tagY,s.pos.z).project(on),r.style.transform=`translate(calc(${((Qe.x*.5+.5)*innerWidth).toFixed(0)}px - 50%), ${((-Qe.y*.5+.5)*innerHeight).toFixed(0)}px)`)}const t=n=>Ut.cd[n]>0||Ut.energy<(Un[Ut.kind][n].cost||0);[...Rt("cds").children].forEach((n,s)=>n.classList.toggle("off",t(jl[s][0]))),document.body.classList.toggle("dazed",Ut.daze>0&&H.phase==="fight"),$l.update(Ut);const e=Rt("combo");Ut.combo>=2?(e.textContent=Ut.combo+" GOLPES",e.style.opacity=1):e.style.opacity=0}const mg={hit:"ACERTOU",block:"BLOQUEADO",perfect:"DEFESA PERFEITA",dodge:"ESQUIVADO",duck:"PASSOU POR CIMA",armor:"ABSORVIDO",whiff:"ERROU",grab:"AGARROU",break:"ESCAPOU DO AGARRÃO",veil:"ABSORVIDO PELO VÉU"},tr=i=>typeof i=="number"?(i>0?"+":"")+i:i;function gg(i){const t=(i.f||i.att)===Ut;if(i.t==="move"){if(!t)return;const e=i.m,n=Hl(e);Rt("dMove").textContent=e.name+(e.h?" · "+Bl[e.h]:""),Rt("dFrames").textContent=n?`prep ${n.startup} · ativo ${n.active} · recup ${n.recovery}`+(n.onBlock!==void 0?` · no acerto ${tr(n.onHit)} · no bloqueio ${tr(n.onBlock)}`:""):"",Rt("dRes").textContent=""}else{let e=(t?"VOCÊ: ":"ADVERSÁRIO: ")+(i.m&&i.m.name||"Golpe")+" · "+mg[i.res]+(i.dmg?" · dano "+i.dmg.toFixed(1):"");i.res==="hit"&&(e+=` · ${i.hits} golpe${i.hits>1?"s":""} · total ${i.total.toFixed(1)}`+(i.hits>1?i.sure?" · GARANTIDO":" · NÃO GARANTIDO":"")+(i.counter?" · CONTRA-ATAQUE":"")),Rt(t?"dRes":"dOpp").textContent=e}}let Vc=0,Gc=!1;function _g(i){const t=H.dummy;if(t==="cpu")return fo.think(i,H);const e=Kn();return t==="parado"||((Vc-=i)<=0&&(Vc=.7,Gc=Math.random()<.5),e.block=!0,e.down=t==="baixo"||t==="misto"&&Gc,t==="misto"&&ie.state==="grabbed"&&Math.random()<i*4&&(e.press="J")),e}function Zl(i){H.dummy=i,document.querySelectorAll("[data-dm]").forEach(t=>t.classList.toggle("sel",t.dataset.dm===i))}document.querySelectorAll("[data-dm]").forEach(i=>i.addEventListener("click",()=>Zl(i.dataset.dm)));let Ql="luta";const th=i=>{Ql=i,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("sel",t.dataset.mode===i))};document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",()=>th(i.dataset.mode)));th("luta");const er={J:"LEVE",K:"PESADO",L:"PODER 1",I:"PODER 2",O:"PODER 3"},eh={f:"→ ",b:"← ",d:"↓ ",n:""},vg=i=>i.length===2?eh[i[0]]+er[i[1]]:er[i];function nh(i){const t=Un[i],e=(s,r)=>{const a=Hl(r)||{};return`<tr><td>${s}</td><td>${r.name}</td><td>${r.grab?"AGARRÃO":Bl[r.h]||"—"}</td><td>${a.startup??"—"}</td><td>${tr(a.onHit)??"—"}</td><td>${tr(a.onBlock)??"—"}</td></tr>`};let n="<table><tr><th>COMANDO</th><th>GOLPE</th><th>ALTURA</th><th>PREP.</th><th>ACERTO</th><th>BLOQUEIO</th></tr>";for(const s of["J","K"])for(const r of["n","f","b","d"])n+=e(eh[r]+er[s],t[Ga[s][r]]);for(const s of["L","I","O"])n+=e(er[s],t[Ga[s].n]);return n+=e("→ + toque na DEFESA",t.grab)+"</table>",n+="<p><b>COMBOS</b><br>"+Wa[i].map(s=>`<b>${s.name}:</b> ${s.cmd.map(vg).join(", ")} — <i>${s.note}</i>`).join("<br>")+"</p>",n+="<p><b>→</b> na direção do adversário · <b>←</b> para longe dele · <b>↓</b> direcional para baixo. Números em quadros (60/s): positivo = vantagem de quem bate.<br><b>DEFESA</b> segurar = defesa alta (para golpes altos e médios) · <b>↓ + DEFESA</b> = defesa baixa (para golpes baixos; golpes altos passam por cima, médios acertam).<br><b>ESQUIVA</b> toque rápido na DEFESA com o direcional para o lado ou para trás · golpes giratórios acompanham a esquiva.<br><b>DEFESA PERFEITA</b> levantar a defesa no instante do golpe desequilibra o atacante · <b>AGARRÃO</b> fura a defesa; aperte LEVE ou PESADO para se soltar.</p>",n}Rt("movesBtn").addEventListener("click",()=>{const i=Rt("moves"),t=i.style.display!=="block";t&&(i.innerHTML=nh(Ut.kind)),i.style.display=t?"block":"none"});for(const i of["tag1","tag2"])Rt(i).addEventListener("animationend",t=>t.target.classList.remove("on"));function ur(){for(const i of H.projectiles)Ee.remove(i.mesh);H.projectiles.length=0}function dr(){const i=H.cine;if(i){i.tor&&Ee.remove(i.tor);for(const t of i.ghosts)Ee.remove(t);i.def.spinExtra=0,H.cine=null,Rt("bars").classList.remove("on"),Rt("hud").classList.remove("cine"),document.body.classList.remove("night")}}function ih(){dr(),ur(),Ut.reset(-3,0,Math.PI/2),ie.reset(3,0,-Math.PI/2),Ut.model.snap(Ut,H.time),ie.model.snap(ie,H.time),Ui[0]=Ui[1]=1,Ge.set(0,0,1),H.timer=60,H.phase="intro",H.pt=0,H.slow=1,H.saidFight=!1,Ln=null,fn.clear(),hr(H.training?"TREINO":`ROUND ${H.round}`,1.3)}let nr="random";const $r=["random",...Qs];function po(i,t=!1,e=null){if(!Qs.includes(e))if(nr!=="random")e=nr;else{const n=Qs.filter(s=>s!==i);e=n[Math.floor(Math.random()*n.length)]}dr(),ur(),Kl(i,e),H.training=t,document.body.classList.toggle("training",t),H.events.length=0,Rt("moves").style.display="none";for(const n of["dMove","dFrames","dRes","dOpp"])Rt(n).textContent="";Rt("dMove").textContent="MODO TREINO · pausa: boneco e lista de golpes";for(const n of[Ut,ie])n.wins=0,n.energy=0;Rt("n1").textContent=Ut.name,Rt("n2").textContent=ie.name+(t?" · BONECO":" · CPU"),Rt("cds").innerHTML=jl.map(([n,s])=>`<span>${s} · ${Un[i][n].name.toUpperCase()}</span>`).join(""),$l.setKind(i),Rt("menu").style.display="none",Rt("over").style.display="none",Rt("hud").style.display="block",H.mode="fight",_i(!1),H.round=1,ih()}function Wc(i,t){Ln=i,i&&i.wins++,H.phase="ko",H.pt=0,hr(t,2.2)}document.querySelectorAll(".card").forEach(i=>i.addEventListener("click",()=>{i.blur(),dg(),po(i.dataset.k,Ql==="treino")}));Rt("again").addEventListener("click",()=>po(Ut.kind,H.training,ie.kind));const xg=i=>{nr=i,Rt("oppBtn").textContent=i==="random"?"ALEATÓRIO":i==="mula"?"MULA":i.toUpperCase()};Rt("oppBtn").addEventListener("click",()=>xg($r[($r.indexOf(nr)+1)%$r.length]));function sh(){H.training=!1,document.body.classList.remove("training","dazed"),H.mode="menu",_i(!1),dr(),ur(),Rt("over").style.display="none",Rt("hud").style.display="none",Rt("menu").style.display="flex",Rt("msg").classList.remove("on"),H.slow=1;for(const i of[Ut,ie])i.energy=0;Jl()}Rt("tomenu").addEventListener("click",sh);function Mg(){const i=Ut,t=ie;if(i.y>.6||t.y>.6||i.anim==="gone"||t.anim==="gone")return;const e=t.pos.x-i.pos.x,n=t.pos.z-i.pos.z,s=Math.hypot(e,n)||.001,r=i.radius+t.radius;if(s>=r)return;const a=r-s,o=t.mass/(i.mass+t.mass),c=e/s,l=n/s;i.pos.x-=c*a*o,i.pos.z-=l*a*o,t.pos.x+=c*a*(1-o),t.pos.z+=l*a*(1-o)}function yg(i){for(let t=H.projectiles.length-1;t>=0;t--){const e=H.projectiles[t],n=zl[e.type],s=e.owner.opp,r=Math.hypot(s.pos.x-e.pos.x,s.pos.z-e.pos.z);let a=!1;if(e.type==="roots")if(e.t+=i,!e.hit)e.mesh.userData.set(1,0,H.time),mt.dust(e.pos,16*i,0,0,1.6),e.t>=n.warn&&(e.hit=!0,e.t=0,mt.dust(e.pos,36,0,0,5),mt.leaves(e.pos,26,5),H.shake=Math.max(H.shake,.3),s.y<.4&&r<n.hitR+s.radius&&(s.receive(e.owner,{...n,dirv:vn().subVectors(s.pos,e.owner.pos).setY(0).normalize()}),e.held=s.state==="rooted",e.held&&e.mesh.position.copy(s.pos).setY(0)));else{const o=e.t<.4||e.held&&s.state==="rooted";e.up+=((o?1:0)-e.up)*Math.min(1,i*(o?24:8)),e.mesh.userData.set(0,e.up,H.time),a=!o&&e.up<.04}else{e.life-=i,e.pos.addScaledVector(e.vel,i),e.mesh.position.set(e.pos.x,e.h,e.pos.z);const o=n.life-e.life,c=Math.min(1,e.life/.2,o/.15+.2);if(e.type==="tornado")e.mesh.userData.spin(H.time),e.mesh.scale.setScalar(.85*c),mt.leaves(e.pos,24*i,2.5,.7),mt.dust(e.pos,14*i,0,0,2);else if(e.type==="leaf")e.mesh.rotation.z+=24*i,e.mesh.scale.setScalar(c),mt.leaves({x:e.pos.x,y:e.h,z:e.pos.z},40*i,1.5,.3);else{e.mesh.scale.setScalar((1+o*.3)*c);for(let l=0;l<2;l++)mt.add.emit(e.pos.x+(Math.random()-.5)*1.6,.3+Math.random()*1.6,e.pos.z+(Math.random()-.5)*1.6,0,.8,0,.55,.3,1,.45,.4,0,1,.6,.7)}a=e.life<=0||Math.hypot(e.pos.x,e.pos.z)>uo+1,!a&&s.y<2&&r<n.hitR+s.radius&&s.receive(e.owner,{...n,dirv:e.vel.clone().normalize()})!=="miss"&&(a=!0,e.type==="wave"?(mt.ring(s.pos,10116351,3,.4),mt.sparks({x:e.pos.x,y:1.2,z:e.pos.z},18,[.7,.4,1])):(mt.leaves(e.pos,30,5),mt.dust(e.pos,20,0,0,4)))}a&&(Ee.remove(e.mesh),H.projectiles.splice(t,1))}}function Sg(i){const t=H.cine,{att:e,def:n,d:s}=t;t.t+=i;const r=t.t,a=(o,c)=>r>=c&&!t.s[o]&&(t.s[o]=!0);if(e.kind==="saci"){if(a("v",0)&&(e.anim="vanish",mt.leaves(e.pos,30,3,.5),mt.smoke({x:e.pos.x,y:1,z:e.pos.z},12)),a("g",.3)&&(e.anim="gone",t.tor=Dl(),t.tor.position.copy(n.pos).setY(0),Ee.add(t.tor)),t.tor&&!t.s.hit){const o=.8+n.radius,c=mn((r-.5)/.9);t.tor.scale.setScalar(.001+o*mn((r-.3)/.6)),t.tor.userData.spin(H.time),n.y=t.y0+(2.6-t.y0)*c,n.anim="air",n.spinExtra+=13*i*c,mt.leaves(n.pos,90*i,5,1.6),mt.dust(n.pos,30*i,0,0,4),H.shake=Math.max(H.shake,.12)}if(r>=1.5&&!t.s.hit){a("a",1.5)&&(t.S=n.pos.clone().addScaledVector(s,-3.4),e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="dive",e.pos.copy(t.S),e.y=7,e.model.snap(e,H.time));const o=Math.min(1,(r-1.5)/.7)**2;e.pos.lerpVectors(t.S,t.E||(t.E=n.pos.clone().addScaledVector(s,-.5)),o),e.y=7+(n.y+.5-7)*o,mt.norm.emit(e.pos.x,e.y+.8,e.pos.z,0,0,0,.6,.55,.45,.6,.3,0,0,.5,.3)}if(a("hit",2.2)){Ee.remove(t.tor),t.tor=null,n.hp-=38,n.spinExtra=0,n.setState("air"),n.vy=-13,n.vel.copy(s).multiplyScalar(3.5),n.model.snap(n,H.time);const o=n.pos;mt.ring(o,15259832,8,.6),mt.ring(o,16777215,4,.35),mt.dust(o,90,0,0,8),mt.leaves(o,90,9),mt.sparks({x:o.x,y:n.y,z:o.z},40),H.shake=1,H.hitstop=.2,os(.5),t.L=n.pos.clone().addScaledVector(s,-1.8)}t.s.hit&&(e.y=Math.max(0,e.y-11*i),e.pos.lerp(t.L,Math.min(1,i*6)),e.y===0&&(e.anim="idle"),n.update(i,Kn())),r>=3.2&&Ws()}else if(e.kind==="curupira"){if(a("p",0)&&(e.anim="superprep",t.tor=Il(),t.tor.position.copy(n.pos).setY(0),t.tor.scale.setScalar(.9+n.radius*.9),Ee.add(t.tor)),!t.s.hit){const o=mn((r-.4)/.25);t.tor.userData.set(r<.4?1:0,o*(1+.25*mn((r-.7)/.6)),H.time),r<.4?(n.y=Math.max(0,n.y-8*i),mt.leaves(e.pos,60*i,4,1.2)):(n.anim="hit",n.y=.5*mn((r-.5)/.6),mt.dust(n.pos,30*i,0,0,3),H.shake=Math.max(H.shake,.1))}if(a("r",.4)&&(n.hp-=10,mt.dust(n.pos,60,0,0,6),mt.leaves(n.pos,50,6),mt.ring(n.pos,8376394,4,.4),H.shake=.6,H.hitstop=.08,H.tag(n,"PRESO!")),a("j",.9)&&(e.anim="leap",t.S=n.pos.clone().addScaledVector(s,-3.2),mt.dust(e.pos,30,0,0,4),mt.leaves(e.pos,30,5)),r>=.9&&r<1.5){const o=mn((r-.9)/.6);e.pos.lerpVectors(t.from,t.S,o),e.y=6.5*(1-(1-o)*(1-o)),e.faceOpp(8*i)}if(r>=1.5&&!t.s.hit){a("a",1.5)&&(e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="dive",e.model.snap(e,H.time));const o=Math.min(1,(r-1.5)/.6)**2;e.pos.lerpVectors(t.S,t.E||(t.E=n.pos.clone().addScaledVector(s,-.5)),o),e.y=6.5+(n.y+.7-6.5)*o,mt.leaves({x:e.pos.x,y:e.y+.8,z:e.pos.z},70*i,2,.6)}if(a("hit",2.1)){n.hp-=28,n.setState("air"),n.vy=6,n.vel.copy(s).multiplyScalar(4),n.model.snap(n,H.time);const o=n.pos;mt.ring(o,10215520,8,.6),mt.ring(o,16777215,4,.35),mt.dust(o,90,0,0,8),mt.leaves(o,110,9),mt.sparks({x:o.x,y:n.y+1,z:o.z},40,[.7,1,.4]),H.shake=1,H.hitstop=.2,os(.5),t.L=n.pos.clone().addScaledVector(s,-1.8),t.up=1.25}t.s.hit&&(t.up=Math.max(0,t.up-i*4),t.tor&&t.tor.userData.set(0,t.up,H.time),e.y=Math.max(0,e.y-11*i),e.pos.lerp(t.L,Math.min(1,i*6)),e.y===0&&(e.anim="idle"),n.update(i,Kn())),r>=3.1&&Ws()}else if(e.kind==="cuca"){if(a("p",0)){e.anim="superprep",document.body.classList.add("night");const o=new Oe({color:9063935,transparent:!0,opacity:0,depthWrite:!1});t.gmat=o;for(let c=0;c<4;c++){const l=e.model.root.clone(!0);l.traverse(h=>{h.isMesh?(h.material=o,h.castShadow=!1):h.isLight&&(h.visible=!1)}),l.visible=!1,Ee.add(l),t.ghosts.push(l)}}if(r<.5&&(n.y=Math.max(0,n.y-8*i),e.faceOpp(4*i),mt.add.emit(e.pos.x+(Math.random()-.5),.4+Math.random()*2,e.pos.z+(Math.random()-.5),0,1.5,0,.6,.3,1,.5,.5,0,1,.6,.8)),a("v",.5)&&(e.anim="vanish",mt.smoke({x:e.pos.x,y:1,z:e.pos.z},14,1.2)),a("g",.8)&&(e.anim="gone"),r>=.6&&r<1.7){const o=Math.min(1,(r-.6)/.25,(1.7-r)/.2),c=3.1-mn((r-.6)/1.1)*1.2+n.radius;t.gmat.opacity=.5*o,n.anim="hit",t.ghosts.forEach((l,h)=>{const u=r*3.4+h*1.5708;l.visible=!0,l.position.set(n.pos.x+Math.sin(u)*c,0,n.pos.z+Math.cos(u)*c),l.rotation.y=u+Math.PI}),H.shake=Math.max(H.shake,.06)}if(a("ap",1.7)){for(const o of t.ghosts)o.visible=!1;e.pos.copy(n.pos).addScaledVector(s,-(e.radius+n.radius+.15)),e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="grabHold",e.model.snap(e,H.time),n.hp-=12,mt.smoke({x:e.pos.x,y:1,z:e.pos.z},12,1.2),mt.sparks({x:n.pos.x,y:1.2,z:n.pos.z},24,[.7,.4,1]),H.shake=.6,H.hitstop=.1,H.tag(n,"AGARRADO!"),t.tor=H0(),t.tor.position.set(n.pos.x,1.3,n.pos.z),t.tor.rotation.y=Math.atan2(-s.x,-s.z),t.tor.scale.setScalar(.01),Ee.add(t.tor)}if(r>=1.7&&!t.s.hit&&(n.anim="hit",n.y=.45*mn((r-1.7)/.4),t.tor.scale.setScalar((.75+n.radius*.55)*mn((r-1.7)/.35)),t.tor.userData.open(1-mn((r-2.25)/.15)),t.tor.userData.fade(1),t.tor.position.y=1.3+n.y),a("hit",2.4)){e.anim="grabThrow",n.hp-=26,n.setState("air"),n.vy=7.5,n.vel.copy(s).multiplyScalar(5),n.model.snap(n,H.time);const o={x:n.pos.x,y:n.y+1,z:n.pos.z};mt.sparks(o,60,[.75,.45,1]),mt.smoke(o,18,1.4),mt.ring(n.pos,9063935,8,.6),mt.ring(n.pos,15259903,4,.35),H.shake=1,H.hitstop=.2,os(.5),document.body.classList.remove("night")}t.s.hit&&(t.tor&&t.tor.userData.fade(Math.max(0,1-(r-2.4)/.35)),r>2.8&&(e.anim="idle"),n.update(i,Kn())),r>=3.3&&Ws()}else{const o=e.model.flamePos;if(a("p",0)&&(e.anim="superprep"),r<1.2&&(e.faceOpp(4*i),n.y=Math.max(0,n.y-8*i),mt.fire(o,260*i,.35,4.5,1.3),mt.embers(o,80*i,.5,5),H.shake=Math.max(H.shake,.2)),a("c",1.2)&&(e.faceOpp(),s.subVectors(n.pos,e.pos).setY(0).normalize(),t.from.copy(e.pos),t.to=n.pos.clone().addScaledVector(s,-(e.radius+n.radius+.1)),e.anim="charge"),r>=1.2&&r<1.7&&(e.pos.lerpVectors(t.from,t.to,((r-1.2)/.5)**2),mt.fire(o,200*i,.4,3,1.2),mt.embers(o,60*i,.4,5),mt.dust(e.pos,70*i,-s.x,-s.z,5),H.shake=Math.max(H.shake,.3)),a("h",1.7)){e.pos.copy(t.to),e.anim="idle",n.hp-=24,n.burn=3,n.setState("air"),n.vy=9,n.vel.copy(s).multiplyScalar(6.5),n.model.snap(n,H.time);const c={x:n.pos.x,y:1.2,z:n.pos.z};mt.sparks(c,50,[1,.5,.15]),mt.fire(c,60,.6,4,1.2),H.shake=.9,H.hitstop=.16}if(t.s.h&&n.update(i,Kn()),a("x",2.4)){n.hp-=16,n.state==="air"&&(n.vy=7);const c={x:n.pos.x,y:n.y+.8,z:n.pos.z};mt.fire(c,170,1.3,6,1.9),mt.embers(c,120,.8,9),mt.sparks(c,60,[1,.6,.2]),mt.smoke(c,25,1.6),mt.ring(n.pos,16742954,9,.6),mt.ring(n.pos,16767392,5,.4),H.shake=1,H.hitstop=.12,os(.6)}r>=3.3&&Ws()}}function Ws(){const i=H.cine.att;i.y=0,i.invuln=.3,i.setState("idle"),dr()}const jr=vn(0,3,12),Zr=vn(0,1.3,0),Qe=vn();function Eg(i,t){const e=Ut,n=ie,s=t?1:Math.min(1,i*5);if(H.mode==="menu"){const r=H.time*.12;Qe.set(Math.sin(r)*9.5,2.5,Math.cos(r)*9.5),jr.lerp(Qe,s),Zr.lerp(Qe.set(0,1.3,0),s)}else{const r=n.pos.x-e.pos.x,a=n.pos.z-e.pos.z,o=Math.hypot(r,a);if(H.cine){const d=.45*i,p=Math.cos(d),g=Math.sin(d),_=Ge.x;Ge.x=_*p-Ge.z*g,Ge.z=_*g+Ge.z*p}else o>.6&&e.anim!=="gone"&&n.anim!=="gone"&&(Qe.set(-a/o,0,r/o),Qe.dot(Ge)<0&&Qe.negate(),Ge.lerp(Qe,Math.min(1,i*3.5)).normalize());const c=Math.max(e.y,n.y),l=H.cine?8.5+c*.5:Math.max(6.6,Math.min(14,5.2+o*.8)),h=(e.pos.x+n.pos.x)/2,u=(e.pos.z+n.pos.z)/2;jr.lerp(Qe.set(h+Ge.x*l,2.3+c*.25+l*.06,u+Ge.z*l),s),Zr.lerp(Qe.set(h,1.25+c*.4,u),s)}if(on.position.copy(jr),H.shake>.01){const r=H.shake*.16;on.position.x+=(Math.random()-.5)*r,on.position.y+=(Math.random()-.5)*r,on.position.z+=(Math.random()-.5)*r}if(on.lookAt(Zr),H.mode==="fight"&&Ut.daze>0){const r=Math.min(1,Ut.daze/.3);on.rotateZ(Math.sin(H.time*6)*.08*r),on.position.y+=Math.sin(H.time*9)*.12*r}}const bg=new U0;function rh(i){H.time+=i,H.shake=Math.max(0,H.shake-i*2.2),Xa>0&&(Xa-=i)<=0&&Rt("msg").classList.remove("on");let t=i*H.slow;if(H.hitstop>0&&(H.hitstop-=i,t=0),H.mode==="menu")for(const e of[Ut,ie])e.update(t,Kn());else{if(H.cine)Sg(t);else{const e=H.phase==="fight";Ut.update(t,e?ug():Kn()),ie.update(t,e?H.training?_g(t):fo.think(t,H):Kn()),yg(t),Mg()}if(H.pt+=i,H.phase==="intro")H.pt>1.5&&!H.saidFight&&(H.saidFight=!0,hr("LUTE!",.7)),H.pt>2.1&&(H.phase="fight",fn.clear());else if(H.phase==="fight"&&!H.cine&&H.training)for(const e of[Ut,ie])e.hp=Math.max(1,e.hp),e.state==="idle"&&e.opp.comboT<=0&&(e.hp=Math.min(e.maxHp,e.hp+45*t)),e.gain(8*t);else if(H.phase==="fight"&&!H.cine){H.timer-=t;const e=Ut.hp<=0,n=ie.hp<=0;if(e||n)Wc(e&&n?null:e?ie:Ut,e&&n?"EMPATE":"K.O.");else if(H.timer<=0){const s=Ut.hp/Ut.maxHp,r=ie.hp/ie.maxHp;Wc(s===r?null:s>r?Ut:ie,s===r?"EMPATE":"TEMPO!")}}else H.phase==="ko"&&(H.slow=H.pt<1?.3:1,Ln&&H.pt>1.3&&Ln.state==="idle"&&!H.cine&&Ln.setState("win"),H.pt>3.6&&!H.cine&&(Ln&&Ln.wins>=2?(H.phase="over",Rt("overT").textContent=Ln===Ut?"VITÓRIA":"DERROTA",Rt("overS").textContent=Ln.name+" VENCE A LUTA",Rt("over").style.display="flex"):(H.round++,ih())));pg(i)}for(const e of[Ut,ie]){const n=e.model;if(n.root.position.set(e.pos.x,e.y,e.pos.z),n.root.rotation.y=e.facing,n.update(e,t,H.time),e.veil>0){e.veilMesh||(e.veilMesh=new ne(new gi(1,20,14),new Oe({color:6283471,transparent:!0,opacity:.2,depthWrite:!1,blending:Fi,fog:!1})),Ee.add(e.veilMesh));const s=e.veilMesh;s.visible=!0,s.position.set(e.pos.x,e.y+1.15,e.pos.z),s.scale.set(1.15+e.radius*.5,1.45,1.15+e.radius*.5),s.rotation.y=H.time*2,s.material.opacity=e.veil<.5?.1+.12*Math.abs(Math.sin(H.time*22)):.2+.05*Math.sin(H.time*6)}else e.veilMesh&&(e.veilMesh.visible=!1);if(e.daze>0&&t>0){const s=H.time*9;mt.add.emit(e.pos.x+Math.sin(s)*.35,e.y+e.tagY-.25,e.pos.z+Math.cos(s)*.35,0,.3,0,.7,.4,1,.3,.35,0,1,.5,.9)}if(n.flamePos&&t>0){const s=n.flameK;mt.fire(n.flamePos,95*t*s,.1+.05*s,2+s*.6,.55+.25*s),Math.random()<t*8*s&&mt.embers(n.flamePos,1,.15,1.5)}}Yl.update(i,H.time),mt.update(t||i*.15)}let Qr=!0;Mn.setAnimationLoop(()=>{const i=bg.getDelta(),t=Math.min(.05,i);fg(fn.frame());const e=H.mode==="fight"&&H.phase!=="over"&&!H.paused;document.body.classList.toggle("playing",e),(!e||H.phase!=="fight"||H.cine)&&fn.clear();const n=fn.touch&&innerHeight>innerWidth;if(!H.paused&&!n&&rh(t),Eg(t,Qr),Mn.render(Ee,on),fi.tick(i),Qr){Qr=!1;const s=Rt("boot");s.classList.add("hide"),setTimeout(()=>s.remove(),600)}});"serviceWorker"in navigator&&!window.Capacitor&&navigator.serviceWorker.register("./sw.js").catch(()=>{});H.input=fn;H.quality=fi;H.setPause=_i;H.step=rh;H.startMatch=po;H.setDummy=Zl;H.moveList=nh;H.AI=Vl;Object.defineProperty(H,"player",{get:()=>Ut});Object.defineProperty(H,"cpu",{get:()=>ie});
