(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="170",fd=0,Gc=1,pd=2,bh=1,Eh=2,ti=3,bi=0,tn=1,Me=2,Mi=0,Bi=1,Wi=2,Wc=3,qc=4,md=5,Ui=100,gd=101,vd=102,xd=103,_d=104,Md=200,yd=201,Sd=202,bd=203,ro=204,oo=205,Ed=206,wd=207,Rd=208,Ad=209,Td=210,Ld=211,Cd=212,Pd=213,Dd=214,co=0,lo=1,ho=2,_s=3,uo=4,fo=5,po=6,mo=7,wh=0,Id=1,kd=2,yi=0,Ud=1,zd=2,Nd=3,Rh=4,Od=5,Fd=6,Bd=7,Ah=300,Ms=301,ys=302,go=303,vo=304,$a=306,xo=1e3,Oi=1001,Va=1002,In=1003,Vd=1004,aa=1005,Bn=1006,mr=1007,Fi=1008,ai=1009,Th=1010,Lh=1011,$s=1012,tc=1013,qi=1014,ei=1015,Qs=1016,ec=1017,nc=1018,Ss=1020,Ch=35902,Ph=1021,Dh=1022,Dn=1023,Ih=1024,kh=1025,vs=1026,bs=1027,Uh=1028,ic=1029,zh=1030,sc=1031,ac=1033,Ia=33776,ka=33777,Ua=33778,za=33779,_o=35840,Mo=35841,yo=35842,So=35843,bo=36196,Eo=37492,wo=37496,Ro=37808,Ao=37809,To=37810,Lo=37811,Co=37812,Po=37813,Do=37814,Io=37815,ko=37816,Uo=37817,zo=37818,No=37819,Oo=37820,Fo=37821,Na=36492,Bo=36494,Vo=36495,Nh=36283,Ho=36284,Go=36285,Wo=36286,Hd=3200,Gd=3201,Oh=0,Wd=1,_i="",on="srgb",ws="srgb-linear",ja="linear",xe="srgb",ji=7680,Xc=519,qd=512,Xd=513,Kd=514,Fh=515,Jd=516,Yd=517,$d=518,jd=519,Kc=35044,Jc="300 es",ni=2e3,Ha=2001;class Rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gr=Math.PI/180,qo=180/Math.PI;function ta(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function Zd(i,t){return(i%t+t)%t}function vr(i,t,e){return(1-e)*i+e*t}function ks(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,a,r,o,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,c,l)}set(t,e,n,s,a,r,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],v=s[0],m=s[3],f=s[6],b=s[1],y=s[4],x=s[7],k=s[2],E=s[5],R=s[8];return a[0]=r*v+o*b+c*k,a[3]=r*m+o*y+c*E,a[6]=r*f+o*x+c*R,a[1]=l*v+h*b+u*k,a[4]=l*m+h*y+u*E,a[7]=l*f+h*x+u*R,a[2]=p*v+d*b+g*k,a[5]=p*m+d*y+g*E,a[8]=p*f+d*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-n*a*h+n*o*c+s*a*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*r-o*l,p=o*c-h*a,d=l*a-r*c,g=e*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*r)*v,t[3]=p*v,t[4]=(h*e-s*c)*v,t[5]=(s*a-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(r*e-n*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-s*l,s*c,-s*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new jt;function Bh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){const i=js("canvas");return i.style.display="block",i}const Yc={};function Gs(i){i in Yc||(Yc[i]=!0,console.warn(i))}function tf(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function ef(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const le={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?ja:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const $c=[.64,.33,.3,.6,.15,.06],jc=[.2126,.7152,.0722],Zc=[.3127,.329],Qc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[ws]:{primaries:$c,whitePoint:Zc,transfer:ja,toXYZ:Qc,fromXYZ:tl,luminanceCoefficients:jc,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:$c,whitePoint:Zc,transfer:xe,toXYZ:Qc,fromXYZ:tl,luminanceCoefficients:jc,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let Zi;class sf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=js("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ii(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let af=0;class Vh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(_r(s[r].image)):a.push(_r(s[r]))}else a=_r(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;class en extends Rs{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=Oi,s=Oi,a=Bn,r=Fi,o=Dn,c=ai,l=en.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=ta(),this.name="",this.source=new Vh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Ah;en.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(d+1)/2,k=(f+1)/2,E=(h+p)/4,R=(u+v)/4,A=(g+m)/4;return y>x&&y>k?y<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(y),s=E/n,a=R/n):x>k?x<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),n=E/s,a=A/s):k<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(k),n=R/a,s=A/a),this.set(n,s,a,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(p-h)/b,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends Rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends of{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hh extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cf extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ea{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=a[r+0],d=a[r+1],g=a[r+2],v=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==p||l!==d||h!==g){let m=1-o;const f=c*p+l*d+h*g+u*v,b=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const k=Math.sqrt(y),E=Math.atan2(k,f*b);m=Math.sin(m*E)/k,o=Math.sin(o*E)/k}const x=o*b;if(c=c*m+p*x,l=l*m+d*x,h=h*m+g*x,u=u*m+v*x,m===1-o){const k=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=k,l*=k,h*=k,u*=k}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=a[r],p=a[r+1],d=a[r+2],g=a[r+3];return t[e]=o*g+h*u+c*d-l*p,t[e+1]=c*g+h*p+l*u-o*d,t[e+2]=l*g+h*d+o*p-c*u,t[e+3]=h*g-o*u-c*p-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(a/2),p=c(n/2),d=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"YZX":this._x=p*h*u+l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u-p*d*g;break;case"XZY":this._x=p*h*u-l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+o+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(a-l)*d,this._z=(r-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(a-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(r-s)/d,this._x=(a+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=r*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=a*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(el.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(el.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*s-o*n),h=2*(o*e-a*s),u=2*(a*n-r*e);return this.x=e+c*l+r*u-o*h,this.y=n+c*h+o*l-a*u,this.z=s+c*u+a*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new I,el=new ea;class na{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Tn):Tn.fromBufferAttribute(a,r),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),oa.subVectors(this.max,Us),Qi.subVectors(t.a,Us),ts.subVectors(t.b,Us),es.subVectors(t.c,Us),hi.subVectors(ts,Qi),ui.subVectors(es,ts),wi.subVectors(Qi,es);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-wi.z,wi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!yr(e,Qi,ts,es,oa)||(e=[1,0,0,0,1,0,0,0,1],!yr(e,Qi,ts,es,oa))?!1:(ca.crossVectors(hi,ui),e=[ca.x,ca.y,ca.z],yr(e,Qi,ts,es,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Jn=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,ra=new na,Qi=new I,ts=new I,es=new I,hi=new I,ui=new I,wi=new I,Us=new I,oa=new I,ca=new I,Ri=new I;function yr(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Ri.fromArray(i,a);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=t.dot(Ri),l=e.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const lf=new na,zs=new I,Sr=new I;class Za{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lf.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const e=zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Sr)),this.expandByPoint(zs.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new I,br=new I,la=new I,di=new I,Er=new I,ha=new I,wr=new I;class Gh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){br.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),di.copy(this.origin).sub(br);const a=t.distanceTo(e)*.5,r=-this.direction.dot(la),o=di.dot(this.direction),c=-di.dot(la),l=di.lengthSq(),h=Math.abs(1-r*r);let u,p,d,g;if(h>0)if(u=r*c-o,p=r*o-c,g=a*h,u>=0)if(p>=-g)if(p<=g){const v=1/h;u*=v,p*=v,d=u*(u+r*p+2*o)+p*(r*u+p+2*c)+l}else p=a,u=Math.max(0,-(r*p+o)),d=-u*u+p*(p+2*c)+l;else p=-a,u=Math.max(0,-(r*p+o)),d=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-r*a+o)),p=u>0?-a:Math.min(Math.max(-a,-c),a),d=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-a,-c),a),d=p*(p+2*c)+l):(u=Math.max(0,-(r*a+o)),p=u>0?a:Math.min(Math.max(-a,-c),a),d=-u*u+p*(p+2*c)+l);else p=r>0?-a:a,u=Math.max(0,-(r*p+o)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(br).addScaledVector(la,p),d}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(a=(t.min.y-p.y)*h,r=(t.max.y-p.y)*h):(a=(t.max.y-p.y)*h,r=(t.min.y-p.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,a){Er.subVectors(e,t),ha.subVectors(n,t),wr.crossVectors(Er,ha);let r=this.direction.dot(wr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;di.subVectors(this.origin,t);const c=o*this.direction.dot(ha.crossVectors(di,ha));if(c<0)return null;const l=o*this.direction.dot(Er.cross(di));if(l<0||c+l>r)return null;const h=-o*di.dot(wr);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,n,s,a,r,o,c,l,h,u,p,d,g,v,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,c,l,h,u,p,d,g,v,m)}set(t,e,n,s,a,r,o,c,l,h,u,p,d,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),a=1/ns.setFromMatrixColumn(t,1).length(),r=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const p=r*h,d=r*u,g=o*h,v=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=p-v*l,e[9]=-o*c,e[2]=v-p*l,e[6]=g+d*l,e[10]=r*c}else if(t.order==="YXZ"){const p=c*h,d=c*u,g=l*h,v=l*u;e[0]=p+v*o,e[4]=g*o-d,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=d*o-g,e[6]=v+p*o,e[10]=r*c}else if(t.order==="ZXY"){const p=c*h,d=c*u,g=l*h,v=l*u;e[0]=p-v*o,e[4]=-r*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=r*h,e[9]=v-p*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const p=r*h,d=r*u,g=o*h,v=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=p*l+v,e[1]=c*u,e[5]=v*l+p,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const p=r*c,d=r*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-p*u,e[8]=g*u+d,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=p-v*u}else if(t.order==="XZY"){const p=r*c,d=r*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+v,e[5]=r*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hf,t,uf)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),fi.crossVectors(n,un),fi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),fi.crossVectors(n,un)),fi.normalize(),ua.crossVectors(un,fi),s[0]=fi.x,s[4]=ua.x,s[8]=un.x,s[1]=fi.y,s[5]=ua.y,s[9]=un.y,s[2]=fi.z,s[6]=ua.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],v=n[6],m=n[10],f=n[14],b=n[3],y=n[7],x=n[11],k=n[15],E=s[0],R=s[4],A=s[8],M=s[12],_=s[1],P=s[5],V=s[9],H=s[13],G=s[2],O=s[6],U=s[10],Y=s[14],D=s[3],$=s[7],j=s[11],Z=s[15];return a[0]=r*E+o*_+c*G+l*D,a[4]=r*R+o*P+c*O+l*$,a[8]=r*A+o*V+c*U+l*j,a[12]=r*M+o*H+c*Y+l*Z,a[1]=h*E+u*_+p*G+d*D,a[5]=h*R+u*P+p*O+d*$,a[9]=h*A+u*V+p*U+d*j,a[13]=h*M+u*H+p*Y+d*Z,a[2]=g*E+v*_+m*G+f*D,a[6]=g*R+v*P+m*O+f*$,a[10]=g*A+v*V+m*U+f*j,a[14]=g*M+v*H+m*Y+f*Z,a[3]=b*E+y*_+x*G+k*D,a[7]=b*R+y*P+x*O+k*$,a[11]=b*A+y*V+x*U+k*j,a[15]=b*M+y*H+x*Y+k*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],d=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+a*c*u-s*l*u-a*o*p+n*l*p+s*o*d-n*c*d)+v*(+e*c*d-e*l*p+a*r*p-s*r*d+s*l*h-a*c*h)+m*(+e*l*u-e*o*d-a*r*u+n*r*d+a*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*p+s*r*u-n*r*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],d=t[11],g=t[12],v=t[13],m=t[14],f=t[15],b=u*m*l-v*p*l+v*c*d-o*m*d-u*c*f+o*p*f,y=g*p*l-h*m*l-g*c*d+r*m*d+h*c*f-r*p*f,x=h*v*l-g*u*l+g*o*d-r*v*d-h*o*f+r*u*f,k=g*u*c-h*v*c-g*o*p+r*v*p+h*o*m-r*u*m,E=e*b+n*y+s*x+a*k;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=b*R,t[1]=(v*p*a-u*m*a-v*s*d+n*m*d+u*s*f-n*p*f)*R,t[2]=(o*m*a-v*c*a+v*s*l-n*m*l-o*s*f+n*c*f)*R,t[3]=(u*c*a-o*p*a-u*s*l+n*p*l+o*s*d-n*c*d)*R,t[4]=y*R,t[5]=(h*m*a-g*p*a+g*s*d-e*m*d-h*s*f+e*p*f)*R,t[6]=(g*c*a-r*m*a-g*s*l+e*m*l+r*s*f-e*c*f)*R,t[7]=(r*p*a-h*c*a+h*s*l-e*p*l-r*s*d+e*c*d)*R,t[8]=x*R,t[9]=(g*u*a-h*v*a-g*n*d+e*v*d+h*n*f-e*u*f)*R,t[10]=(r*v*a-g*o*a+g*n*l-e*v*l-r*n*f+e*o*f)*R,t[11]=(h*o*a-r*u*a-h*n*l+e*u*l+r*n*d-e*o*d)*R,t[12]=k*R,t[13]=(h*v*s-g*u*s+g*n*p-e*v*p-h*n*m+e*u*m)*R,t[14]=(g*o*s-r*v*s-g*n*c+e*v*c+r*n*m-e*o*m)*R,t[15]=(r*u*s-h*o*s+h*n*c-e*u*c-r*n*p+e*o*p)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,c=t.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,h=r+r,u=o+o,p=a*l,d=a*h,g=a*u,v=r*h,m=r*u,f=o*u,b=c*l,y=c*h,x=c*u,k=n.x,E=n.y,R=n.z;return s[0]=(1-(v+f))*k,s[1]=(d+x)*k,s[2]=(g-y)*k,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(p+f))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+y)*R,s[9]=(m-b)*R,s[10]=(1-(p+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=ns.set(s[0],s[1],s[2]).length();const r=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ln.copy(this);const l=1/a,h=1/r,u=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=ni){const c=this.elements,l=2*a/(e-t),h=2*a/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let d,g;if(o===ni)d=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Ha)d=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=ni){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(r-a),p=(e+t)*l,d=(n+s)*h;let g,v;if(o===ni)g=(r+a)*u,v=-2*u;else if(o===Ha)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new I,Ln=new Le,hf=new I(0,0,0),uf=new I(1,1,1),fi=new I,ua=new I,un=new I,nl=new Le,il=new ea;class Gn{constructor(t=0,e=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return il.setFromEuler(this),this.setFromQuaternion(il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let df=0;const sl=new I,is=new ea,$n=new Le,da=new I,Ns=new I,ff=new I,pf=new ea,al=new I(1,0,0),rl=new I(0,1,0),ol=new I(0,0,1),cl={type:"added"},mf={type:"removed"},ss={type:"childadded",child:null},Rr={type:"childremoved",child:null};class Oe extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new I,e=new Gn,n=new ea,s=new I(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new jt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(ol,t)}translateOnAxis(t,e){return sl.copy(t).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ns,da,this.up):$n.lookAt(da,Ns,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),is.setFromRotationMatrix($n),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cl),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mf),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cl),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(t.shapes,u)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),p=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new I(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new I,jn=new I,Ar=new I,Zn=new I,as=new I,rs=new I,ll=new I,Tr=new I,Lr=new I,Cr=new I,Pr=new _e,Dr=new _e,Ir=new _e;class Pn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){Cn.subVectors(s,e),jn.subVectors(n,e),Ar.subVectors(t,e);const r=Cn.dot(Cn),o=Cn.dot(jn),c=Cn.dot(Ar),l=jn.dot(jn),h=jn.dot(Ar),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const p=1/u,d=(l*c-o*h)*p,g=(r*h-o*c)*p;return a.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,a,r,o,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Zn.x),c.addScaledVector(r,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,a,r){return Pr.setScalar(0),Dr.setScalar(0),Ir.setScalar(0),Pr.fromBufferAttribute(t,e),Dr.fromBufferAttribute(t,n),Ir.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Pr,a.x),r.addScaledVector(Dr,a.y),r.addScaledVector(Ir,a.z),r}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),jn.subVectors(t,e),Cn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Cn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;as.subVectors(s,n),rs.subVectors(a,n),Tr.subVectors(t,n);const c=as.dot(Tr),l=rs.dot(Tr);if(c<=0&&l<=0)return e.copy(n);Lr.subVectors(t,s);const h=as.dot(Lr),u=rs.dot(Lr);if(h>=0&&u<=h)return e.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(as,r);Cr.subVectors(t,a);const d=as.dot(Cr),g=rs.dot(Cr);if(g>=0&&d<=g)return e.copy(a);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(rs,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ll.subVectors(a,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(ll,o);const f=1/(m+v+p);return r=v*f,o=p*f,e.copy(n).addScaledVector(as,r).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Zd(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=kr(r,a,t+1/3),this.g=kr(r,a,t),this.b=kr(r,a,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=on){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return le.fromWorkingColorSpace($e.copy(this),t),Math.round(Xe($e.r*255,0,255))*65536+Math.round(Xe($e.g*255,0,255))*256+Math.round(Xe($e.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,a=$e.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-n)/u+2;break;case a:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=on){le.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(fa);const n=vr(pi.h,fa.h,e),s=vr(pi.s,fa.s,e),a=vr(pi.l,fa.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new se;se.NAMES=qh;let gf=0;class As extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ta(),this.name="",this.blending=Bi,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=oo,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ne extends As{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new I,pa=new bt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),s=rn(s,this.array),a=rn(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}}class Xh extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kh extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let vf=0;const xn=new Le,Ur=new Oe,os=new I,dn=new na,Os=new na,Ve=new I;class Ke extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bh(t)?Kh:Xh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new jt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];dn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(dn.min,Os.min),dn.expandByPoint(Ve),Ve.addVectors(dn.max,Os.max),dn.expandByPoint(Ve)):(dn.expandByPoint(Os.min),dn.expandByPoint(Os.max))}dn.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)Ve.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ve.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(t,l),Ve.add(os)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new I,c[A]=new I;const l=new I,h=new I,u=new I,p=new bt,d=new bt,g=new bt,v=new I,m=new I;function f(A,M,_){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),p.fromBufferAttribute(a,A),d.fromBufferAttribute(a,M),g.fromBufferAttribute(a,_),h.sub(l),u.sub(l),d.sub(p),g.sub(p);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[A].add(v),o[M].add(v),o[_].add(v),c[A].add(m),c[M].add(m),c[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,M=b.length;A<M;++A){const _=b[A],P=_.start,V=_.count;for(let H=P,G=P+V;H<G;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new I,x=new I,k=new I,E=new I;function R(A){k.fromBufferAttribute(s,A),E.copy(k);const M=o[A];y.copy(M),y.sub(k.multiplyScalar(k.dot(M))).normalize(),x.crossVectors(E,M);const P=x.dot(c[A])<0?-1:1;r.setXYZW(A,y.x,y.y,y.z,P)}for(let A=0,M=b.length;A<M;++A){const _=b[A],P=_.start,V=_.count;for(let H=P,G=P+V;H<G;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new I,a=new I,r=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let p=0,d=t.count;p<d;p+=3){const g=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let f=0;f<h;f++)p[g++]=l[d++]}return new cn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const p=l[h],d=t(p,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const a=t.morphAttributes;for(const l in a){const h=[],u=a[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new Le,Ai=new Gh,ma=new Za,ul=new I,ga=new I,va=new I,xa=new I,zr=new I,_a=new I,dl=new I,Ma=new I;class Ot extends Oe{constructor(t=new Ke,e=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){_a.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],u=a[c];h!==0&&(zr.fromBufferAttribute(u,t),r?_a.addScaledVector(zr,h):_a.addScaledVector(zr.sub(e),h))}e.add(_a)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(a),Ai.copy(t.ray).recast(t.near),!(ma.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(ma,ul)===null||Ai.origin.distanceToSquared(ul)>(t.far-t.near)**2))&&(hl.copy(a).invert(),Ai.copy(t.ray).applyMatrix4(hl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,p=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=r[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,k=y;x<k;x+=3){const E=o.getX(x),R=o.getX(x+1),A=o.getX(x+2);s=ya(this,f,t,n,l,h,u,E,R,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const b=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=ya(this,r,t,n,l,h,u,b,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const m=p[g],f=r[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,k=y;x<k;x+=3){const E=x,R=x+1,A=x+2;s=ya(this,f,t,n,l,h,u,E,R,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,f=v;m<f;m+=3){const b=m,y=m+1,x=m+2;s=ya(this,r,t,n,l,h,u,b,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function xf(i,t,e,n,s,a,r,o){let c;if(t.side===tn?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,t.side===bi,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ma);return l<e.near||l>e.far?null:{distance:l,point:Ma.clone(),object:i}}function ya(i,t,e,n,s,a,r,o,c,l){i.getVertexPosition(o,ga),i.getVertexPosition(c,va),i.getVertexPosition(l,xa);const h=xf(i,t,e,n,ga,va,xa,dl);if(h){const u=new I;Pn.getBarycoord(dl,ga,va,xa,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,o,c,l,u,new bt)),a&&(h.uv1=Pn.getInterpolatedAttribute(a,o,c,l,u,new bt)),r&&(h.normal=Pn.getInterpolatedAttribute(r,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new I,materialIndex:0};Pn.getNormal(ga,va,xa,p.normal),h.face=p,h.barycoord=u}return h}class Ee extends Ke{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(v,m,f,b,y,x,k,E,R,A,M){const _=x/R,P=k/A,V=x/2,H=k/2,G=E/2,O=R+1,U=A+1;let Y=0,D=0;const $=new I;for(let j=0;j<U;j++){const Z=j*P-H;for(let ut=0;ut<O;ut++){const at=ut*_-V;$[v]=at*b,$[m]=Z*y,$[f]=G,l.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[f]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(ut/R),u.push(1-j/A),Y+=1}}for(let j=0;j<A;j++)for(let Z=0;Z<R;Z++){const ut=p+Z+O*j,at=p+Z+O*(j+1),q=p+(Z+1)+O*(j+1),lt=p+(Z+1)+O*j;c.push(ut,at,lt),c.push(at,q,lt),D+=6}o.addGroup(d,D,M),d+=D,p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function _f(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Mf={clone:Es,merge:nn};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends As{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=_f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yh extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new I,fl=new bt,pl=new bt;class pn extends Yh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,fl,pl),e.subVectors(pl,fl)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cs=-90,ls=1;class bf extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(cs,ls,t,e);s.layers=this.layers,this.add(s);const a=new pn(cs,ls,t,e);a.layers=this.layers,this.add(a);const r=new pn(cs,ls,t,e);r.layers=this.layers,this.add(r);const o=new pn(cs,ls,t,e);o.layers=this.layers,this.add(o);const c=new pn(cs,ls,t,e);c.layers=this.layers,this.add(c);const l=new pn(cs,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $h extends en{constructor(t,e,n,s,a,r,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ef extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $h(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),a=new ri({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Mi});a.uniforms.tEquirect.value=e;const r=new Ot(s,a),o=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Bn),new bf(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}const Nr=new I,wf=new I,Rf=new jt;class Di{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Nr.subVectors(n,e).cross(wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rf.getNormalMatrix(t),s=this.coplanarPoint(Nr).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Za,Sa=new I;class rc{constructor(t=new Di,e=new Di,n=new Di,s=new Di,a=new Di,r=new Di){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){const n=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],d=s[8],g=s[9],v=s[10],m=s[11],f=s[12],b=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-a,p-l,m-d,x-f).normalize(),n[1].setComponents(c+a,p+l,m+d,x+f).normalize(),n[2].setComponents(c+r,p+h,m+g,x+b).normalize(),n[3].setComponents(c-r,p-h,m-g,x-b).normalize(),n[4].setComponents(c-o,p-u,m-v,x-y).normalize(),e===ni)n[5].setComponents(c+o,p+u,m+v,x+y).normalize();else if(e===Ha)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sa.x=s.normal.x>0?t.max.x:t.min.x,Sa.y=s.normal.y>0?t.max.y:t.min.y,Sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jh(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Af(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){const g=u[p],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,u[p]=v)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class Qa extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,p=e/c,d=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const b=f*p-r;for(let y=0;y<l;y++){const x=y*u-a;g.push(x,-b,0),v.push(0,0,1),m.push(y/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){const y=b+l*f,x=b+l*(f+1),k=b+1+l*(f+1),E=b+1+l*f;d.push(y,x,E),d.push(x,k,E)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jf=`#define PI 3.141592653589793
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
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qf=`vec3 transformedNormal = objectNormal;
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
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
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
}`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
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
#endif`,Rp=`struct PhysicalMaterial {
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
}`,Ap=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d0=`float getShadowMask() {
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
}`,f0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,k0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,K0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,Y0=`#define PHONG
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
}`,$0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,Q0=`#define TOON
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
}`,tm=`#define TOON
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
}`,em=`uniform float size;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,sm=`uniform vec3 color;
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
}`,am=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Tf,alphahash_pars_fragment:Lf,alphamap_fragment:Cf,alphamap_pars_fragment:Pf,alphatest_fragment:Df,alphatest_pars_fragment:If,aomap_fragment:kf,aomap_pars_fragment:Uf,batching_pars_vertex:zf,batching_vertex:Nf,begin_vertex:Of,beginnormal_vertex:Ff,bsdfs:Bf,iridescence_fragment:Vf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Xf,color_fragment:Kf,color_pars_fragment:Jf,color_pars_vertex:Yf,color_vertex:$f,common:jf,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:tp,displacementmap_vertex:ep,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:sp,colorspace_pars_fragment:ap,envmap_fragment:rp,envmap_common_pars_fragment:op,envmap_pars_fragment:cp,envmap_pars_vertex:lp,envmap_physical_pars_fragment:Mp,envmap_vertex:hp,fog_vertex:up,fog_pars_vertex:dp,fog_fragment:fp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_pars_fragment:gp,lights_lambert_fragment:vp,lights_lambert_pars_fragment:xp,lights_pars_begin:_p,lights_toon_fragment:yp,lights_toon_pars_fragment:Sp,lights_phong_fragment:bp,lights_phong_pars_fragment:Ep,lights_physical_fragment:wp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Ap,lights_fragment_maps:Tp,lights_fragment_end:Lp,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Pp,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Ip,map_fragment:kp,map_pars_fragment:Up,map_particle_fragment:zp,map_particle_pars_fragment:Np,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Bp,morphcolor_vertex:Vp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Wp,normal_fragment_begin:qp,normal_fragment_maps:Xp,normal_pars_fragment:Kp,normal_pars_vertex:Jp,normal_vertex:Yp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:s0,dithering_fragment:a0,dithering_pars_fragment:r0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:d0,skinbase_vertex:f0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:v0,specularmap_pars_fragment:x0,tonemapping_fragment:_0,tonemapping_pars_fragment:M0,transmission_fragment:y0,transmission_pars_fragment:S0,uv_pars_fragment:b0,uv_pars_vertex:E0,uv_vertex:w0,worldpos_vertex:R0,background_vert:A0,background_frag:T0,backgroundCube_vert:L0,backgroundCube_frag:C0,cube_vert:P0,cube_frag:D0,depth_vert:I0,depth_frag:k0,distanceRGBA_vert:U0,distanceRGBA_frag:z0,equirect_vert:N0,equirect_frag:O0,linedashed_vert:F0,linedashed_frag:B0,meshbasic_vert:V0,meshbasic_frag:H0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:q0,meshmatcap_frag:X0,meshnormal_vert:K0,meshnormal_frag:J0,meshphong_vert:Y0,meshphong_frag:$0,meshphysical_vert:j0,meshphysical_frag:Z0,meshtoon_vert:Q0,meshtoon_frag:tm,points_vert:em,points_frag:nm,shadow_vert:im,shadow_frag:sm,sprite_vert:am,sprite_frag:rm},gt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},zn={basic:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:nn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:nn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:nn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:nn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:nn([gt.points,gt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:nn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:nn([gt.common,gt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:nn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:nn([gt.sprite,gt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:nn([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:nn([gt.lights,gt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};zn.physical={uniforms:nn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const ba={r:0,b:0,g:0},Li=new Gn,om=new Le;function cm(i,t,e,n,s,a,r){const o=new se(0);let c=a===!0?0:1,l,h,u=null,p=0,d=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function v(b){let y=!1;const x=g(b);x===null?f(o,c):x&&x.isColor&&(f(x,1),y=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,r):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===$a)?(h===void 0&&(h=new Ot(new Ee(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Es(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Li.copy(y.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(om.makeRotationFromEuler(Li)),h.material.toneMapped=le.getTransfer(x.colorSpace)!==xe,(u!==x||p!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ot(new Qa(2,2),new ri({name:"BackgroundMaterial",uniforms:Es(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=le.getTransfer(x.colorSpace)!==xe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,y){b.getRGB(ba,Jh(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,y,r)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),c=y,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(o,c)},render:v,addToRenderList:m}}function lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let a=s,r=!1;function o(_,P,V,H,G){let O=!1;const U=u(H,V,P);a!==U&&(a=U,l(a.object)),O=d(_,H,V,G),O&&g(_,H,V,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,x(_,P,V,H),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,P,V){const H=V.wireframe===!0;let G=n[_.id];G===void 0&&(G={},n[_.id]=G);let O=G[P.id];O===void 0&&(O={},G[P.id]=O);let U=O[H];return U===void 0&&(U=p(c()),O[H]=U),U}function p(_){const P=[],V=[],H=[];for(let G=0;G<e;G++)P[G]=0,V[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:H,object:_,attributes:{},index:null}}function d(_,P,V,H){const G=a.attributes,O=P.attributes;let U=0;const Y=V.getAttributes();for(const D in Y)if(Y[D].location>=0){const j=G[D];let Z=O[D];if(Z===void 0&&(D==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),D==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),j===void 0||j.attribute!==Z||Z&&j.data!==Z.data)return!0;U++}return a.attributesNum!==U||a.index!==H}function g(_,P,V,H){const G={},O=P.attributes;let U=0;const Y=V.getAttributes();for(const D in Y)if(Y[D].location>=0){let j=O[D];j===void 0&&(D==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),D==="instanceColor"&&_.instanceColor&&(j=_.instanceColor));const Z={};Z.attribute=j,j&&j.data&&(Z.data=j.data),G[D]=Z,U++}a.attributes=G,a.attributesNum=U,a.index=H}function v(){const _=a.newAttributes;for(let P=0,V=_.length;P<V;P++)_[P]=0}function m(_){f(_,0)}function f(_,P){const V=a.newAttributes,H=a.enabledAttributes,G=a.attributeDivisors;V[_]=1,H[_]===0&&(i.enableVertexAttribArray(_),H[_]=1),G[_]!==P&&(i.vertexAttribDivisor(_,P),G[_]=P)}function b(){const _=a.newAttributes,P=a.enabledAttributes;for(let V=0,H=P.length;V<H;V++)P[V]!==_[V]&&(i.disableVertexAttribArray(V),P[V]=0)}function y(_,P,V,H,G,O,U){U===!0?i.vertexAttribIPointer(_,P,V,G,O):i.vertexAttribPointer(_,P,V,H,G,O)}function x(_,P,V,H){v();const G=H.attributes,O=V.getAttributes(),U=P.defaultAttributeValues;for(const Y in O){const D=O[Y];if(D.location>=0){let $=G[Y];if($===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),$!==void 0){const j=$.normalized,Z=$.itemSize,ut=t.get($);if(ut===void 0)continue;const at=ut.buffer,q=ut.type,lt=ut.bytesPerElement,ht=q===i.INT||q===i.UNSIGNED_INT||$.gpuType===tc;if($.isInterleavedBufferAttribute){const rt=$.data,J=rt.stride,it=$.offset;if(rt.isInstancedInterleavedBuffer){for(let pt=0;pt<D.locationSize;pt++)f(D.location+pt,rt.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let pt=0;pt<D.locationSize;pt++)m(D.location+pt);i.bindBuffer(i.ARRAY_BUFFER,at);for(let pt=0;pt<D.locationSize;pt++)y(D.location+pt,Z/D.locationSize,q,j,J*lt,(it+Z/D.locationSize*pt)*lt,ht)}else{if($.isInstancedBufferAttribute){for(let rt=0;rt<D.locationSize;rt++)f(D.location+rt,$.meshPerAttribute);_.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let rt=0;rt<D.locationSize;rt++)m(D.location+rt);i.bindBuffer(i.ARRAY_BUFFER,at);for(let rt=0;rt<D.locationSize;rt++)y(D.location+rt,Z/D.locationSize,q,j,Z*lt,Z/D.locationSize*rt*lt,ht)}}else if(U!==void 0){const j=U[Y];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(D.location,j);break;case 3:i.vertexAttrib3fv(D.location,j);break;case 4:i.vertexAttrib4fv(D.location,j);break;default:i.vertexAttrib1fv(D.location,j)}}}}b()}function k(){A();for(const _ in n){const P=n[_];for(const V in P){const H=P[V];for(const G in H)h(H[G].object),delete H[G];delete P[V]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const P=n[_.id];for(const V in P){const H=P[V];for(const G in H)h(H[G].object),delete H[G];delete P[V]}delete n[_.id]}function R(_){for(const P in n){const V=n[P];if(V[_.id]===void 0)continue;const H=V[_.id];for(const G in H)h(H[G].object),delete H[G];delete V[_.id]}}function A(){M(),r=!0,a!==s&&(a=s,l(a.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:k,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function hm(i,t,e){let n;function s(l){n=l}function a(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,p){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*p[v];e.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function um(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==Dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const A=R===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ai&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ei&&!A)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:k,maxSamples:E}}function dm(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new Di,o=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):l();else{const b=a?0:n,y=b*4;let x=f.clippingState||null;c.value=x,x=h(g,p,y,d);for(let k=0;k!==y;++k)x[k]=e[k];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=d+v*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=d;y!==v;++y,x+=4)r.copy(u[y]).applyMatrix4(b,o),r.normal.toArray(m,x),m[x+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function fm(i){let t=new WeakMap;function e(r,o){return o===go?r.mapping=Ms:o===vo&&(r.mapping=ys),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===go||o===vo)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Ef(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Zh extends Yh{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,ml=[.125,.215,.35,.446,.526,.582],zi=20,Or=new Zh,gl=new se;let Fr=null,Br=0,Vr=0,Hr=!1;const Ii=(1+Math.sqrt(5))/2,hs=1/Ii,vl=[new I(-Ii,hs,0),new I(Ii,hs,0),new I(-hs,0,Ii),new I(hs,0,Ii),new I(0,Ii,-hs),new I(0,Ii,hs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fr,Br,Vr),this._renderer.xr.enabled=Hr,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Qs,format:Dn,colorSpace:ws,depthBuffer:!1},s=_l(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(a)),this._blurMaterial=mm(a,t,e)}return s}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,s){const o=new pn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(gl),h.toneMapping=yi,h.autoClear=!1;const d=new Ne({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Ot(new Ee,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(gl),v=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):b===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const y=this._cubeSize;Ea(s,b*y,f>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ms||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new Ot(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;Ea(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=vl[(s-a-1)%vl.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ot(this._lodPlanes[s],l),p=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*zi-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):zi;m>zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const f=[];let b=0;for(let R=0;R<zi;++R){const A=R/v,M=Math.exp(-A*A/2);f.push(M),R===0?b+=M:R<m&&(b+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/b;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;const x=this._sizeLods[s],k=3*x*(s>y-ps?s-y+ps:0),E=4*(this._cubeSize-x);Ea(e,k,E,3*x,2*x),c.setRenderTarget(e),c.render(u,Or)}}function pm(i){const t=[],e=[],n=[];let s=i;const a=i-ps+1+ml.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let c=1/o;r>i-ps?c=ml[r-i+ps-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,f=1,b=new Float32Array(v*g*d),y=new Float32Array(m*g*d),x=new Float32Array(f*g*d);for(let E=0;E<d;E++){const R=E%3*2/3-1,A=E>2?0:-1,M=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];b.set(M,v*g*E),y.set(p,m*g*E);const _=[E,E,E,E,E,E];x.set(_,f*g*E)}const k=new Ke;k.setAttribute("position",new cn(b,v)),k.setAttribute("uv",new cn(y,m)),k.setAttribute("faceIndex",new cn(x,f)),t.push(k),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _l(i,t,e){const n=new Xi(i,t,e);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mm(i,t,e){const n=new Float32Array(zi),s=new I(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Ml(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function yl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function gm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===go||c===vo,h=c===Ms||c===ys;if(l||h){let u=t.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new xl(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new xl(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xm(i,t,e,n){const s={},a=new WeakMap;function r(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}p.removeEventListener("dispose",r),delete s[p.id];const d=a.get(p);d&&(t.remove(d),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(u){const p=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let y=0,x=b.length;y<x;y+=3){const k=b[y+0],E=b[y+1],R=b[y+2];p.push(k,E,E,R,R,k)}}else if(g!==void 0){const b=g.array;v=g.version;for(let y=0,x=b.length/3-1;y<x;y+=3){const k=y+0,E=y+1,R=y+2;p.push(k,E,E,R,R,k)}}else return;const m=new(Bh(p)?Kh:Xh)(p,1);m.version=v;const f=a.get(u);f&&t.remove(f),a.set(u,m)}function h(u){const p=a.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function _m(i,t,e){let n;function s(p){n=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function c(p,d){i.drawElements(n,d,a,p*r),e.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,a,p*r,g),e.update(d,n,g))}function h(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];e.update(m,n,1)}function u(p,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/r,d[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,a,p,0,v,0,g);let f=0;for(let b=0;b<g;b++)f+=d[b]*v[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,t,e){const n=new WeakMap,s=new _e;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let _=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let k=o.attributes.position.count*x,E=1;k>t.maxTextureSize&&(E=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const R=new Float32Array(k*E*4*u),A=new Hh(R,k,E,u);A.type=ei,A.needsUpdate=!0;const M=x*4;for(let P=0;P<u;P++){const V=f[P],H=b[P],G=y[P],O=k*E*4*P;for(let U=0;U<V.count;U++){const Y=U*M;g===!0&&(s.fromBufferAttribute(V,U),R[O+Y+0]=s.x,R[O+Y+1]=s.y,R[O+Y+2]=s.z,R[O+Y+3]=0),v===!0&&(s.fromBufferAttribute(H,U),R[O+Y+4]=s.x,R[O+Y+5]=s.y,R[O+Y+6]=s.z,R[O+Y+7]=0),m===!0&&(s.fromBufferAttribute(G,U),R[O+Y+8]=s.x,R[O+Y+9]=s.y,R[O+Y+10]=s.z,R[O+Y+11]=G.itemSize===4?s.w:1)}}p={count:u,texture:A,size:new bt(k,E)},n.set(o,p),o.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function Sm(i,t,e,n){let s=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class Qh extends en{constructor(t,e,n,s,a,r,o,c,l,h=vs){if(h!==vs&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=qi),n===void 0&&h===bs&&(n=Ss),super(null,s,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tu=new en,Sl=new Qh(1,1),eu=new Hh,nu=new cf,iu=new $h,bl=[],El=[],wl=new Float32Array(16),Rl=new Float32Array(9),Al=new Float32Array(4);function Ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=bl[s];if(a===void 0&&(a=new Float32Array(s),bl[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tr(i,t){let e=El[t];e===void 0&&(e=new Int32Array(t),El[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;Al.set(n),i.uniformMatrix2fv(this.addr,!1,Al),Be(e,n)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;Rl.set(n),i.uniformMatrix3fv(this.addr,!1,Rl),Be(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Fe(e,n))return;wl.set(n),i.uniformMatrix4fv(this.addr,!1,wl),Be(e,n)}}function Cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Sl.compareFunction=Fh,a=Sl):a=tu,e.setTexture2D(t||a,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nu,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||iu,s)}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eu,s)}function Hm(i){switch(i){case 5126:return bm;case 35664:return Em;case 35665:return wm;case 35666:return Rm;case 35674:return Am;case 35675:return Tm;case 35676:return Lm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Dm;case 35669:case 35673:return Im;case 5125:return km;case 36294:return Um;case 36295:return zm;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Gm(i,t){i.uniform1fv(this.addr,t)}function Wm(i,t){const e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function qm(i,t){const e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Xm(i,t){const e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Km(i,t){const e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jm(i,t){const e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ym(i,t){const e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $m(i,t){i.uniform1iv(this.addr,t)}function jm(i,t){i.uniform2iv(this.addr,t)}function Zm(i,t){i.uniform3iv(this.addr,t)}function Qm(i,t){i.uniform4iv(this.addr,t)}function tg(i,t){i.uniform1uiv(this.addr,t)}function eg(i,t){i.uniform2uiv(this.addr,t)}function ng(i,t){i.uniform3uiv(this.addr,t)}function ig(i,t){i.uniform4uiv(this.addr,t)}function sg(i,t,e){const n=this.cache,s=t.length,a=tr(e,s);Fe(n,a)||(i.uniform1iv(this.addr,a),Be(n,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||tu,a[r])}function ag(i,t,e){const n=this.cache,s=t.length,a=tr(e,s);Fe(n,a)||(i.uniform1iv(this.addr,a),Be(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||nu,a[r])}function rg(i,t,e){const n=this.cache,s=t.length,a=tr(e,s);Fe(n,a)||(i.uniform1iv(this.addr,a),Be(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||iu,a[r])}function og(i,t,e){const n=this.cache,s=t.length,a=tr(e,s);Fe(n,a)||(i.uniform1iv(this.addr,a),Be(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||eu,a[r])}function cg(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return qm;case 35666:return Xm;case 35674:return Km;case 35675:return Jm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return jm;case 35668:case 35672:return Zm;case 35669:case 35673:return Qm;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hm(e.type)}}class hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}}class ug{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function Tl(i,t){i.seq.push(t),i.map[t.id]=t}function dg(i,t,e){const n=i.name,s=n.length;for(Gr.lastIndex=0;;){const a=Gr.exec(n),r=Gr.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){Tl(e,l===void 0?new lg(o,i,t):new hg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ug(o),Tl(e,u)),e=u}}}class Oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);dg(a,r,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Ll(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fg=37297;let pg=0;function mg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Cl=new jt;function gg(i){le._getMatrix(Cl,le.workingColorSpace,i);const t=`mat3( ${Cl.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case ja:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+mg(i.getShaderSource(t),r)}else return s}function vg(i,t){const e=gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xg(i,t){let e;switch(t){case Ud:e="Linear";break;case zd:e="Reinhard";break;case Nd:e="Cineon";break;case Rh:e="ACESFilmic";break;case Fd:e="AgX";break;case Bd:e="Neutral";break;case Od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wa=new I;function _g(){le.getLuminanceCoefficients(wa);const i=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function Ws(i){return i!==""}function Dl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Il(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(bg,wg)}const Eg=new Map;function wg(i,t){let e=Qt[t];if(e===void 0){const n=Eg.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xo(e)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kl(i){return i.replace(Rg,Ag)}function Ag(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Ul(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Lg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case ys:t="ENVMAP_TYPE_CUBE";break;case $a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wh:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case kd:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ig(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=Tg(e),l=Lg(e),h=Cg(e),u=Pg(e),p=Dg(e),d=Mg(e),g=yg(a),v=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ws).join(`
`),f.length>0&&(f+=`
`)):(m=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),f=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==yi?xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),r=Xo(r),r=Dl(r,e),r=Il(r,e),o=Xo(o),o=Dl(o,e),o=Il(o,e),r=kl(r),o=kl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=b+m+r,x=b+f+o,k=Ll(s,s.VERTEX_SHADER,y),E=Ll(s,s.FRAGMENT_SHADER,x);s.attachShader(v,k),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(k).trim(),G=s.getShaderInfoLog(E).trim();let O=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,k,E);else{const Y=Pl(s,k,"vertex"),D=Pl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+Y+`
`+D)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||G==="")&&(U=!1);U&&(P.diagnostics={runnable:O,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:G,prefix:f}})}s.deleteShader(k),s.deleteShader(E),A=new Oa(s,v),M=Sg(s,v)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,fg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=E,this}let kg=0;class Ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zg(t),e.set(t,n)),n}}class zg{constructor(t){this.id=kg++,this.code=t,this.usedTimes=0}}function Ng(i,t,e,n,s,a,r){const o=new Wh,c=new Ug,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,_,P,V,H){const G=V.fog,O=H.geometry,U=M.isMeshStandardMaterial?V.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),D=Y&&Y.mapping===$a?Y.image.height:null,$=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=j!==void 0?j.length:0;let ut=0;O.morphAttributes.position!==void 0&&(ut=1),O.morphAttributes.normal!==void 0&&(ut=2),O.morphAttributes.color!==void 0&&(ut=3);let at,q,lt,ht;if($){const ve=zn[$];at=ve.vertexShader,q=ve.fragmentShader}else at=M.vertexShader,q=M.fragmentShader,c.update(M),lt=c.getVertexShaderID(M),ht=c.getFragmentShaderID(M);const rt=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),it=H.isInstancedMesh===!0,pt=H.isBatchedMesh===!0,Jt=!!M.map,Wt=!!M.matcap,he=!!Y,N=!!M.aoMap,te=!!M.lightMap,Ft=!!M.bumpMap,qt=!!M.normalMap,kt=!!M.displacementMap,we=!!M.emissiveMap,zt=!!M.metalnessMap,T=!!M.roughnessMap,S=M.anisotropy>0,W=M.clearcoat>0,et=M.dispersion>0,st=M.iridescence>0,tt=M.sheen>0,Dt=M.transmission>0,xt=S&&!!M.anisotropyMap,wt=W&&!!M.clearcoatMap,oe=W&&!!M.clearcoatNormalMap,dt=W&&!!M.clearcoatRoughnessMap,Rt=st&&!!M.iridescenceMap,Nt=st&&!!M.iridescenceThicknessMap,Bt=tt&&!!M.sheenColorMap,At=tt&&!!M.sheenRoughnessMap,ae=!!M.specularMap,Zt=!!M.specularColorMap,ye=!!M.specularIntensityMap,z=Dt&&!!M.transmissionMap,vt=Dt&&!!M.thicknessMap,Q=!!M.gradientMap,nt=!!M.alphaMap,yt=M.alphaTest>0,_t=!!M.alphaHash,Yt=!!M.extensions;let Ie=yi;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Je={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:at,fragmentShader:q,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:pt,batchingColor:pt&&H._colorsTexture!==null,instancing:it,instancingColor:it&&H.instanceColor!==null,instancingMorph:it&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ws,alphaToCoverage:!!M.alphaToCoverage,map:Jt,matcap:Wt,envMap:he,envMapMode:he&&Y.mapping,envMapCubeUVHeight:D,aoMap:N,lightMap:te,bumpMap:Ft,normalMap:qt,displacementMap:p&&kt,emissiveMap:we,normalMapObjectSpace:qt&&M.normalMapType===Wd,normalMapTangentSpace:qt&&M.normalMapType===Oh,metalnessMap:zt,roughnessMap:T,anisotropy:S,anisotropyMap:xt,clearcoat:W,clearcoatMap:wt,clearcoatNormalMap:oe,clearcoatRoughnessMap:dt,dispersion:et,iridescence:st,iridescenceMap:Rt,iridescenceThicknessMap:Nt,sheen:tt,sheenColorMap:Bt,sheenRoughnessMap:At,specularMap:ae,specularColorMap:Zt,specularIntensityMap:ye,transmission:Dt,transmissionMap:z,thicknessMap:vt,gradientMap:Q,opaque:M.transparent===!1&&M.blending===Bi&&M.alphaToCoverage===!1,alphaMap:nt,alphaTest:yt,alphaHash:_t,combine:M.combine,mapUv:Jt&&v(M.map.channel),aoMapUv:N&&v(M.aoMap.channel),lightMapUv:te&&v(M.lightMap.channel),bumpMapUv:Ft&&v(M.bumpMap.channel),normalMapUv:qt&&v(M.normalMap.channel),displacementMapUv:kt&&v(M.displacementMap.channel),emissiveMapUv:we&&v(M.emissiveMap.channel),metalnessMapUv:zt&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:xt&&v(M.anisotropyMap.channel),clearcoatMapUv:wt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:At&&v(M.sheenRoughnessMap.channel),specularMapUv:ae&&v(M.specularMap.channel),specularColorMapUv:Zt&&v(M.specularColorMap.channel),specularIntensityMapUv:ye&&v(M.specularIntensityMap.channel),transmissionMapUv:z&&v(M.transmissionMap.channel),thicknessMapUv:vt&&v(M.thicknessMap.channel),alphaMapUv:nt&&v(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(qt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(Jt||nt),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:J,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ut,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Jt&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===xe,decodeVideoTextureEmissive:we&&M.emissiveMap.isVideoTexture===!0&&le.getTransfer(M.emissiveMap.colorSpace)===xe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Me,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Yt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&M.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function f(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)_.push(P),_.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(b(_,M),y(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function b(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function y(M,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const _=g[M.type];let P;if(_){const V=zn[_];P=Mf.clone(V.uniforms)}else P=M.uniforms;return P}function k(M,_){let P;for(let V=0,H=h.length;V<H;V++){const G=h[V];if(G.cacheKey===_){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Ig(i,_,M,a),h.push(P)),P}function E(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function R(M){c.remove(M)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:k,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:A}}function Og(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function Fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nl(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(u,p,d,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function o(u,p,d,g,v,m){const f=r(u,p,d,g,v,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function c(u,p,d,g,v,m){const f=r(u,p,d,g,v,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,p){e.length>1&&e.sort(u||Fg),n.length>1&&n.sort(p||zl),s.length>1&&s.sort(p||zl)}function h(){for(let u=t,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function Bg(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new Nl,i.set(n,[r])):s>=a.length?(r=new Nl,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new se};break;case"SpotLight":e={position:new I,direction:new I,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gg=0;function Wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qg(i){const t=new Vg,e=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,a=new Le,r=new Le;function o(l){let h=0,u=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,v=0,m=0,f=0,b=0,y=0,x=0,k=0,E=0,R=0;l.sort(Wg);for(let M=0,_=l.length;M<_;M++){const P=l[M],V=P.color,H=P.intensity,G=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*H,u+=V.g*H,p+=V.b*H;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],H);R++}else if(P.isDirectionalLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,D=e.get(P);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,n.directionalShadow[d]=D,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=P.shadow.matrix,b++}n.directional[d]=U,d++}else if(P.isSpotLight){const U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(V).multiplyScalar(H),U.distance=G,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[v]=U;const Y=P.shadow;if(P.map&&(n.spotLightMap[k]=P.map,k++,Y.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=Y.matrix,P.castShadow){const D=e.get(P);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,n.spotShadow[v]=D,n.spotShadowMap[v]=O,x++}v++}else if(P.isRectAreaLight){const U=t.get(P);U.color.copy(V).multiplyScalar(H),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=U,m++}else if(P.isPointLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const Y=P.shadow,D=e.get(P);D.shadowIntensity=Y.intensity,D.shadowBias=Y.bias,D.shadowNormalBias=Y.normalBias,D.shadowRadius=Y.radius,D.shadowMapSize=Y.mapSize,D.shadowCameraNear=Y.camera.near,D.shadowCameraFar=Y.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=U,g++}else if(P.isHemisphereLight){const U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(H),U.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[f]=U,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==b||A.numPointShadows!==y||A.numSpotShadows!==x||A.numSpotMaps!==k||A.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+k-E,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,A.directionalLength=d,A.pointLength=g,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=b,A.numPointShadows=y,A.numSpotShadows=x,A.numSpotMaps=k,A.numLightProbes=R,n.version=Gg++)}function c(l,h){let u=0,p=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const y=l[f];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),r.identity(),a.copy(y.matrixWorld),a.premultiply(m),r.extractRotation(a),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Ol(i){const t=new qg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Xg(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Ol(i),t.set(s,[o])):a>=r.length?(o=new Ol(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Kg extends As{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jg extends As{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`;function jg(i,t,e){let n=new rc;const s=new bt,a=new bt,r=new _e,o=new Kg({depthPacking:Gd}),c=new Jg,l={},h=e.maxTextureSize,u={[bi]:tn,[tn]:bi,[Me]:Me},p=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Yg,fragmentShader:$g}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let f=this.type;this.render=function(E,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Mi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=f!==ti&&this.type===ti,G=f===ti&&this.type!==ti;for(let O=0,U=E.length;O<U;O++){const Y=E[O],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const $=D.getFrameExtents();if(s.multiply($),a.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/$.x),s.x=a.x*$.x,D.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/$.y),s.y=a.y*$.y,D.mapSize.y=a.y)),D.map===null||H===!0||G===!0){const Z=this.type!==ti?{minFilter:In,magFilter:In}:{};D.map!==null&&D.map.dispose(),D.map=new Xi(s.x,s.y,Z),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const j=D.getViewportCount();for(let Z=0;Z<j;Z++){const ut=D.getViewport(Z);r.set(a.x*ut.x,a.y*ut.y,a.x*ut.z,a.y*ut.w),V.viewport(r),D.updateMatrices(Y,Z),n=D.getFrustum(),x(R,A,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===ti&&b(D,A),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,P)};function b(E,R){const A=t.update(v);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xi(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,A,p,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,A,d,v,null)}function y(E,R,A,M){let _=null;const P=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)_=P;else if(_=A.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=_.uuid,H=R.uuid;let G=l[V];G===void 0&&(G={},l[V]=G);let O=G[H];O===void 0&&(O=_.clone(),G[H]=O,R.addEventListener("dispose",k)),_=O}if(_.visible=R.visible,_.wireframe=R.wireframe,M===ti?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=i.properties.get(_);V.light=A}return _}function x(E,R,A,M,_){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const H=t.update(E),G=E.material;if(Array.isArray(G)){const O=H.groups;for(let U=0,Y=O.length;U<Y;U++){const D=O[U],$=G[D.materialIndex];if($&&$.visible){const j=y(E,$,M,_);E.onBeforeShadow(i,E,R,A,H,j,D),i.renderBufferDirect(A,null,H,j,E,D),E.onAfterShadow(i,E,R,A,H,j,D)}}}else if(G.visible){const O=y(E,G,M,_);E.onBeforeShadow(i,E,R,A,H,O,null),i.renderBufferDirect(A,null,H,O,E,null),E.onAfterShadow(i,E,R,A,H,O,null)}}const V=E.children;for(let H=0,G=V.length;H<G;H++)x(V[H],R,A,M,_)}function k(E){E.target.removeEventListener("dispose",k);for(const A in l){const M=l[A],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Zg={[co]:lo,[ho]:po,[uo]:mo,[_s]:fo,[lo]:co,[po]:ho,[mo]:uo,[fo]:_s};function Qg(i,t){function e(){let z=!1;const vt=new _e;let Q=null;const nt=new _e(0,0,0,0);return{setMask:function(yt){Q!==yt&&!z&&(i.colorMask(yt,yt,yt,yt),Q=yt)},setLocked:function(yt){z=yt},setClear:function(yt,_t,Yt,Ie,Je){Je===!0&&(yt*=Ie,_t*=Ie,Yt*=Ie),vt.set(yt,_t,Yt,Ie),nt.equals(vt)===!1&&(i.clearColor(yt,_t,Yt,Ie),nt.copy(vt))},reset:function(){z=!1,Q=null,nt.set(-1,0,0,0)}}}function n(){let z=!1,vt=!1,Q=null,nt=null,yt=null;return{setReversed:function(_t){if(vt!==_t){const Yt=t.get("EXT_clip_control");vt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const Ie=yt;yt=null,this.setClear(Ie)}vt=_t},getReversed:function(){return vt},setTest:function(_t){_t?rt(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(_t){Q!==_t&&!z&&(i.depthMask(_t),Q=_t)},setFunc:function(_t){if(vt&&(_t=Zg[_t]),nt!==_t){switch(_t){case co:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=_t}},setLocked:function(_t){z=_t},setClear:function(_t){yt!==_t&&(vt&&(_t=1-_t),i.clearDepth(_t),yt=_t)},reset:function(){z=!1,Q=null,nt=null,yt=null,vt=!1}}}function s(){let z=!1,vt=null,Q=null,nt=null,yt=null,_t=null,Yt=null,Ie=null,Je=null;return{setTest:function(ve){z||(ve?rt(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(ve){vt!==ve&&!z&&(i.stencilMask(ve),vt=ve)},setFunc:function(ve,Rn,Xn){(Q!==ve||nt!==Rn||yt!==Xn)&&(i.stencilFunc(ve,Rn,Xn),Q=ve,nt=Rn,yt=Xn)},setOp:function(ve,Rn,Xn){(_t!==ve||Yt!==Rn||Ie!==Xn)&&(i.stencilOp(ve,Rn,Xn),_t=ve,Yt=Rn,Ie=Xn)},setLocked:function(ve){z=ve},setClear:function(ve){Je!==ve&&(i.clearStencil(ve),Je=ve)},reset:function(){z=!1,vt=null,Q=null,nt=null,yt=null,_t=null,Yt=null,Ie=null,Je=null}}}const a=new e,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,b=null,y=null,x=null,k=null,E=null,R=new se(0,0,0),A=0,M=!1,_=null,P=null,V=null,H=null,G=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Y=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(D)[1]),U=Y>=1):D.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),U=Y>=2);let $=null,j={};const Z=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),at=new _e().fromArray(Z),q=new _e().fromArray(ut);function lt(z,vt,Q,nt){const yt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(z,_t),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Q;Yt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(vt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return _t}const ht={};ht[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),r.setFunc(_s),Ft(!1),qt(Gc),rt(i.CULL_FACE),N(Mi);function rt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function J(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function it(z,vt){return u[z]!==vt?(i.bindFramebuffer(z,vt),u[z]=vt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function pt(z,vt){let Q=d,nt=!1;if(z){Q=p.get(vt),Q===void 0&&(Q=[],p.set(vt,Q));const yt=z.textures;if(Q.length!==yt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Yt=yt.length;_t<Yt;_t++)Q[_t]=i.COLOR_ATTACHMENT0+_t;Q.length=yt.length,nt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,nt=!0);nt&&i.drawBuffers(Q)}function Jt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const Wt={[Ui]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[vd]:i.FUNC_REVERSE_SUBTRACT};Wt[xd]=i.MIN,Wt[_d]=i.MAX;const he={[Md]:i.ZERO,[yd]:i.ONE,[Sd]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[Td]:i.SRC_ALPHA_SATURATE,[Rd]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[bd]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Dd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(z,vt,Q,nt,yt,_t,Yt,Ie,Je,ve){if(z===Mi){v===!0&&(J(i.BLEND),v=!1);return}if(v===!1&&(rt(i.BLEND),v=!0),z!==md){if(z!==m||ve!==M){if((f!==Ui||x!==Ui)&&(i.blendEquation(i.FUNC_ADD),f=Ui,x=Ui),ve)switch(z){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wi:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,y=null,k=null,E=null,R.set(0,0,0),A=0,m=z,M=ve}return}yt=yt||vt,_t=_t||Q,Yt=Yt||nt,(vt!==f||yt!==x)&&(i.blendEquationSeparate(Wt[vt],Wt[yt]),f=vt,x=yt),(Q!==b||nt!==y||_t!==k||Yt!==E)&&(i.blendFuncSeparate(he[Q],he[nt],he[_t],he[Yt]),b=Q,y=nt,k=_t,E=Yt),(Ie.equals(R)===!1||Je!==A)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Je),R.copy(Ie),A=Je),m=z,M=!1}function te(z,vt){z.side===Me?J(i.CULL_FACE):rt(i.CULL_FACE);let Q=z.side===tn;vt&&(Q=!Q),Ft(Q),z.blending===Bi&&z.transparent===!1?N(Mi):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),a.setMask(z.colorWrite);const nt=z.stencilWrite;o.setTest(nt),nt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),we(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(z){_!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),_=z)}function qt(z){z!==fd?(rt(i.CULL_FACE),z!==P&&(z===Gc?i.cullFace(i.BACK):z===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),P=z}function kt(z){z!==V&&(U&&i.lineWidth(z),V=z)}function we(z,vt,Q){z?(rt(i.POLYGON_OFFSET_FILL),(H!==vt||G!==Q)&&(i.polygonOffset(vt,Q),H=vt,G=Q)):J(i.POLYGON_OFFSET_FILL)}function zt(z){z?rt(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function T(z){z===void 0&&(z=i.TEXTURE0+O-1),$!==z&&(i.activeTexture(z),$=z)}function S(z,vt,Q){Q===void 0&&($===null?Q=i.TEXTURE0+O-1:Q=$);let nt=j[Q];nt===void 0&&(nt={type:void 0,texture:void 0},j[Q]=nt),(nt.type!==z||nt.texture!==vt)&&($!==Q&&(i.activeTexture(Q),$=Q),i.bindTexture(z,vt||ht[z]),nt.type=z,nt.texture=vt)}function W(){const z=j[$];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Bt(z){at.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),at.copy(z))}function At(z){q.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),q.copy(z))}function ae(z,vt){let Q=l.get(vt);Q===void 0&&(Q=new WeakMap,l.set(vt,Q));let nt=Q.get(z);nt===void 0&&(nt=i.getUniformBlockIndex(vt,z.name),Q.set(z,nt))}function Zt(z,vt){const nt=l.get(vt).get(z);c.get(vt)!==nt&&(i.uniformBlockBinding(vt,nt,z.__bindingPointIndex),c.set(vt,nt))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,j={},u={},p=new WeakMap,d=[],g=null,v=!1,m=null,f=null,b=null,y=null,x=null,k=null,E=null,R=new se(0,0,0),A=0,M=!1,_=null,P=null,V=null,H=null,G=null,at.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:rt,disable:J,bindFramebuffer:it,drawBuffers:pt,useProgram:Jt,setBlending:N,setMaterial:te,setFlipSided:Ft,setCullFace:qt,setLineWidth:kt,setPolygonOffset:we,setScissorTest:zt,activeTexture:T,bindTexture:S,unbindTexture:W,compressedTexImage2D:et,compressedTexImage3D:st,texImage2D:Rt,texImage3D:Nt,updateUBOMapping:ae,uniformBlockBinding:Zt,texStorage2D:oe,texStorage3D:dt,texSubImage2D:tt,texSubImage3D:Dt,compressedTexSubImage2D:xt,compressedTexSubImage3D:wt,scissor:Bt,viewport:At,reset:ye}}function Fl(i,t,e,n){const s=t1(n);switch(e){case Ph:return i*t;case Ih:return i*t;case kh:return i*t*2;case Uh:return i*t/s.components*s.byteLength;case ic:return i*t/s.components*s.byteLength;case zh:return i*t*2/s.components*s.byteLength;case sc:return i*t*2/s.components*s.byteLength;case Dh:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case ac:return i*t*4/s.components*s.byteLength;case Ia:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:case So:return Math.max(i,16)*Math.max(t,8)/4;case _o:case yo:return Math.max(i,8)*Math.max(t,8)/2;case bo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Na:case Bo:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nh:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Go:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t1(i){switch(i){case ai:case Th:return{byteLength:1,components:1};case $s:case Lh:case Qs:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case qi:case tc:case ei:return{byteLength:4,components:1};case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function e1(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return d?new OffscreenCanvas(T,S):js("canvas")}function v(T,S,W){let et=1;const st=zt(T);if((st.width>W||st.height>W)&&(et=W/Math.max(st.width,st.height)),et<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const tt=Math.floor(et*st.width),Dt=Math.floor(et*st.height);u===void 0&&(u=g(tt,Dt));const xt=S?g(tt,Dt):u;return xt.width=tt,xt.height=Dt,xt.getContext("2d").drawImage(T,0,0,tt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+tt+"x"+Dt+")."),xt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,S,W,et,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let tt=S;if(S===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),S===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),W===i.UNSIGNED_INT&&(tt=i.RGB32UI),W===i.BYTE&&(tt=i.RGB8I),W===i.SHORT&&(tt=i.RGB16I),W===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),W===i.UNSIGNED_INT&&(tt=i.RGBA32UI),W===i.BYTE&&(tt=i.RGBA8I),W===i.SHORT&&(tt=i.RGBA16I),W===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),S===i.RGBA){const Dt=st?ja:le.getTransfer(et);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=Dt===xe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(T,S){let W;return T?S===null||S===qi||S===Ss?W=i.DEPTH24_STENCIL8:S===ei?W=i.DEPTH32F_STENCIL8:S===$s&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===Ss?W=i.DEPTH_COMPONENT24:S===ei?W=i.DEPTH_COMPONENT32F:S===$s&&(W=i.DEPTH_COMPONENT16),W}function k(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==In&&T.minFilter!==Bn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function E(T){const S=T.target;S.removeEventListener("dispose",E),A(S),S.isVideoTexture&&h.delete(S)}function R(T){const S=T.target;S.removeEventListener("dispose",R),_(S)}function A(T){const S=n.get(T);if(S.__webglInit===void 0)return;const W=T.source,et=p.get(W);if(et){const st=et[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(T),Object.keys(et).length===0&&p.delete(W)}n.remove(T)}function M(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const W=T.source,et=p.get(W);delete et[S.__cacheKey],r.memory.textures--}function _(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let st=0;st<S.__webglFramebuffer[et].length;st++)i.deleteFramebuffer(S.__webglFramebuffer[et][st]);else i.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)i.deleteFramebuffer(S.__webglFramebuffer[et]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=T.textures;for(let et=0,st=W.length;et<st;et++){const tt=n.get(W[et]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),r.memory.textures--),n.remove(W[et])}n.remove(T)}let P=0;function V(){P=0}function H(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function G(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function O(T,S){const W=n.get(T);if(T.isVideoTexture&&kt(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){const et=T.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(W,T,S);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function U(T,S){const W=n.get(T);if(T.version>0&&W.__version!==T.version){q(W,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function Y(T,S){const W=n.get(T);if(T.version>0&&W.__version!==T.version){q(W,T,S);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function D(T,S){const W=n.get(T);if(T.version>0&&W.__version!==T.version){lt(W,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const $={[xo]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},j={[In]:i.NEAREST,[Vd]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[mr]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},Z={[qd]:i.NEVER,[jd]:i.ALWAYS,[Xd]:i.LESS,[Fh]:i.LEQUAL,[Kd]:i.EQUAL,[$d]:i.GEQUAL,[Jd]:i.GREATER,[Yd]:i.NOTEQUAL};function ut(T,S){if(S.type===ei&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Bn||S.magFilter===mr||S.magFilter===aa||S.magFilter===Fi||S.minFilter===Bn||S.minFilter===mr||S.minFilter===aa||S.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,$[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,j[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===In||S.minFilter!==aa&&S.minFilter!==Fi||S.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function at(T,S){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",E));const et=S.source;let st=p.get(et);st===void 0&&(st={},p.set(et,st));const tt=G(S);if(tt!==T.__cacheKey){st[tt]===void 0&&(st[tt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,W=!0),st[tt].usedTimes++;const Dt=st[T.__cacheKey];Dt!==void 0&&(st[T.__cacheKey].usedTimes--,Dt.usedTimes===0&&M(S)),T.__cacheKey=tt,T.__webglTexture=st[tt].texture}return W}function q(T,S,W){let et=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=i.TEXTURE_3D);const st=at(T,S),tt=S.source;e.bindTexture(et,T.__webglTexture,i.TEXTURE0+W);const Dt=n.get(tt);if(tt.version!==Dt.__version||st===!0){e.activeTexture(i.TEXTURE0+W);const xt=le.getPrimaries(le.workingColorSpace),wt=S.colorSpace===_i?null:le.getPrimaries(S.colorSpace),oe=S.colorSpace===_i||xt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let dt=v(S.image,!1,s.maxTextureSize);dt=we(S,dt);const Rt=a.convert(S.format,S.colorSpace),Nt=a.convert(S.type);let Bt=y(S.internalFormat,Rt,Nt,S.colorSpace,S.isVideoTexture);ut(et,S);let At;const ae=S.mipmaps,Zt=S.isVideoTexture!==!0,ye=Dt.__version===void 0||st===!0,z=tt.dataReady,vt=k(S,dt);if(S.isDepthTexture)Bt=x(S.format===bs,S.type),ye&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Bt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,dt.width,dt.height,0,Rt,Nt,null));else if(S.isDataTexture)if(ae.length>0){Zt&&ye&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,ae[0].width,ae[0].height);for(let Q=0,nt=ae.length;Q<nt;Q++)At=ae[Q],Zt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,Rt,Nt,At.data):e.texImage2D(i.TEXTURE_2D,Q,Bt,At.width,At.height,0,Rt,Nt,At.data);S.generateMipmaps=!1}else Zt?(ye&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,dt.width,dt.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Rt,Nt,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,dt.width,dt.height,0,Rt,Nt,dt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Bt,ae[0].width,ae[0].height,dt.depth);for(let Q=0,nt=ae.length;Q<nt;Q++)if(At=ae[Q],S.format!==Dn)if(Rt!==null)if(Zt){if(z)if(S.layerUpdates.size>0){const yt=Fl(At.width,At.height,S.format,S.type);for(const _t of S.layerUpdates){const Yt=At.data.subarray(_t*yt/At.data.BYTES_PER_ELEMENT,(_t+1)*yt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,_t,At.width,At.height,1,Rt,Yt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,dt.depth,Rt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Bt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,dt.depth,Rt,Nt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Bt,At.width,At.height,dt.depth,0,Rt,Nt,At.data)}else{Zt&&ye&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,ae[0].width,ae[0].height);for(let Q=0,nt=ae.length;Q<nt;Q++)At=ae[Q],S.format!==Dn?Rt!==null?Zt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,Rt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Bt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,Rt,Nt,At.data):e.texImage2D(i.TEXTURE_2D,Q,Bt,At.width,At.height,0,Rt,Nt,At.data)}else if(S.isDataArrayTexture)if(Zt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Bt,dt.width,dt.height,dt.depth),z)if(S.layerUpdates.size>0){const Q=Fl(dt.width,dt.height,S.format,S.type);for(const nt of S.layerUpdates){const yt=dt.data.subarray(nt*Q/dt.data.BYTES_PER_ELEMENT,(nt+1)*Q/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,dt.width,dt.height,1,Rt,Nt,yt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Rt,Nt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,dt.width,dt.height,dt.depth,0,Rt,Nt,dt.data);else if(S.isData3DTexture)Zt?(ye&&e.texStorage3D(i.TEXTURE_3D,vt,Bt,dt.width,dt.height,dt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Rt,Nt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,dt.width,dt.height,dt.depth,0,Rt,Nt,dt.data);else if(S.isFramebufferTexture){if(ye)if(Zt)e.texStorage2D(i.TEXTURE_2D,vt,Bt,dt.width,dt.height);else{let Q=dt.width,nt=dt.height;for(let yt=0;yt<vt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Bt,Q,nt,0,Rt,Nt,null),Q>>=1,nt>>=1}}else if(ae.length>0){if(Zt&&ye){const Q=zt(ae[0]);e.texStorage2D(i.TEXTURE_2D,vt,Bt,Q.width,Q.height)}for(let Q=0,nt=ae.length;Q<nt;Q++)At=ae[Q],Zt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Rt,Nt,At):e.texImage2D(i.TEXTURE_2D,Q,Bt,Rt,Nt,At);S.generateMipmaps=!1}else if(Zt){if(ye){const Q=zt(dt);e.texStorage2D(i.TEXTURE_2D,vt,Bt,Q.width,Q.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Nt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Rt,Nt,dt);m(S)&&f(et),Dt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function lt(T,S,W){if(S.image.length!==6)return;const et=at(T,S),st=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+W);const tt=n.get(st);if(st.version!==tt.__version||et===!0){e.activeTexture(i.TEXTURE0+W);const Dt=le.getPrimaries(le.workingColorSpace),xt=S.colorSpace===_i?null:le.getPrimaries(S.colorSpace),wt=S.colorSpace===_i||Dt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const oe=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,Rt=[];for(let nt=0;nt<6;nt++)!oe&&!dt?Rt[nt]=v(S.image[nt],!0,s.maxCubemapSize):Rt[nt]=dt?S.image[nt].image:S.image[nt],Rt[nt]=we(S,Rt[nt]);const Nt=Rt[0],Bt=a.convert(S.format,S.colorSpace),At=a.convert(S.type),ae=y(S.internalFormat,Bt,At,S.colorSpace),Zt=S.isVideoTexture!==!0,ye=tt.__version===void 0||et===!0,z=st.dataReady;let vt=k(S,Nt);ut(i.TEXTURE_CUBE_MAP,S);let Q;if(oe){Zt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ae,Nt.width,Nt.height);for(let nt=0;nt<6;nt++){Q=Rt[nt].mipmaps;for(let yt=0;yt<Q.length;yt++){const _t=Q[yt];S.format!==Dn?Bt!==null?Zt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,0,0,_t.width,_t.height,Bt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,ae,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,0,0,_t.width,_t.height,Bt,At,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,ae,_t.width,_t.height,0,Bt,At,_t.data)}}}else{if(Q=S.mipmaps,Zt&&ye){Q.length>0&&vt++;const nt=zt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ae,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(dt){Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt[nt].width,Rt[nt].height,Bt,At,Rt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ae,Rt[nt].width,Rt[nt].height,0,Bt,At,Rt[nt].data);for(let yt=0;yt<Q.length;yt++){const Yt=Q[yt].image[nt].image;Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,0,0,Yt.width,Yt.height,Bt,At,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,ae,Yt.width,Yt.height,0,Bt,At,Yt.data)}}else{Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Bt,At,Rt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ae,Bt,At,Rt[nt]);for(let yt=0;yt<Q.length;yt++){const _t=Q[yt];Zt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,0,0,Bt,At,_t.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,ae,Bt,At,_t.image[nt])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),tt.__version=st.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ht(T,S,W,et,st,tt){const Dt=a.convert(W.format,W.colorSpace),xt=a.convert(W.type),wt=y(W.internalFormat,Dt,xt,W.colorSpace),oe=n.get(S),dt=n.get(W);if(dt.__renderTarget=S,!oe.__hasExternalTextures){const Rt=Math.max(1,S.width>>tt),Nt=Math.max(1,S.height>>tt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,wt,Rt,Nt,S.depth,0,Dt,xt,null):e.texImage2D(st,tt,wt,Rt,Nt,0,Dt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),qt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,st,dt.__webglTexture,0,Ft(S)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,st,dt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){const et=S.depthTexture,st=et&&et.isDepthTexture?et.type:null,tt=x(S.stencilBuffer,st),Dt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=Ft(S);qt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,tt,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,T)}else{const et=S.textures;for(let st=0;st<et.length;st++){const tt=et[st],Dt=a.convert(tt.format,tt.colorSpace),xt=a.convert(tt.type),wt=y(tt.internalFormat,Dt,xt,tt.colorSpace),oe=Ft(S);W&&qt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,wt,S.width,S.height):qt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,wt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,wt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(S.depthTexture);et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const st=et.__webglTexture,tt=Ft(S);if(S.depthTexture.format===vs)qt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(S.depthTexture.format===bs)qt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function it(T){const S=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const et=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){const st=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",st)};et.addEventListener("dispose",st),S.__depthDisposeCallback=st}S.__boundDepthTexture=et}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");J(S.__webglFramebuffer,T)}else if(W){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=i.createRenderbuffer(),rt(S.__webglDepthbuffer[et],T,!1);else{const st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),rt(S.__webglDepthbuffer,T,!1);else{const et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(T,S,W){const et=n.get(T);S!==void 0&&ht(et.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&it(T)}function Jt(T){const S=T.texture,W=n.get(T),et=n.get(S);T.addEventListener("dispose",R);const st=T.textures,tt=T.isWebGLCubeRenderTarget===!0,Dt=st.length>1;if(Dt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=S.version,r.memory.textures++),tt){W.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[xt]=[];for(let wt=0;wt<S.mipmaps.length;wt++)W.__webglFramebuffer[xt][wt]=i.createFramebuffer()}else W.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let xt=0;xt<S.mipmaps.length;xt++)W.__webglFramebuffer[xt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let xt=0,wt=st.length;xt<wt;xt++){const oe=n.get(st[xt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),r.memory.textures++)}if(T.samples>0&&qt(T)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let xt=0;xt<st.length;xt++){const wt=st[xt];W.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[xt]);const oe=a.convert(wt.format,wt.colorSpace),dt=a.convert(wt.type),Rt=y(wt.internalFormat,oe,dt,wt.colorSpace,T.isXRRenderTarget===!0),Nt=Ft(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Rt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,W.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(W.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ut(i.TEXTURE_CUBE_MAP,S);for(let xt=0;xt<6;xt++)if(S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)ht(W.__webglFramebuffer[xt][wt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt);else ht(W.__webglFramebuffer[xt],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let xt=0,wt=st.length;xt<wt;xt++){const oe=st[xt],dt=n.get(oe);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),ut(i.TEXTURE_2D,oe),ht(W.__webglFramebuffer,T,oe,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),m(oe)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,et.__webglTexture),ut(xt,S),S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)ht(W.__webglFramebuffer[wt],T,S,i.COLOR_ATTACHMENT0,xt,wt);else ht(W.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,xt,0);m(S)&&f(xt),e.unbindTexture()}T.depthBuffer&&it(T)}function Wt(T){const S=T.textures;for(let W=0,et=S.length;W<et;W++){const st=S[W];if(m(st)){const tt=b(T),Dt=n.get(st).__webglTexture;e.bindTexture(tt,Dt),f(tt),e.unbindTexture()}}}const he=[],N=[];function te(T){if(T.samples>0){if(qt(T)===!1){const S=T.textures,W=T.width,et=T.height;let st=i.COLOR_BUFFER_BIT;const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(T),xt=S.length>1;if(xt)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const oe=n.get(S[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,W,et,0,0,W,et,st,i.NEAREST),c===!0&&(he.length=0,N.length=0,he.push(i.COLOR_ATTACHMENT0+wt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(he.push(tt),N.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const oe=n.get(S[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ft(T){return Math.min(s.maxSamples,T.samples)}function qt(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function kt(T){const S=r.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function we(T,S){const W=T.colorSpace,et=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==ws&&W!==_i&&(le.getTransfer(W)===xe?(et!==Dn||st!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function zt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=D,this.rebindTextures=pt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=qt}function n1(i,t){function e(n,s=_i){let a;const r=le.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.BYTE;if(n===Lh)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===ei)return i.FLOAT;if(n===Qs)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Dh)return i.RGB;if(n===Dn)return i.RGBA;if(n===Ih)return i.LUMINANCE;if(n===kh)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Uh)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===zh)return i.RG;if(n===sc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===Ia||n===ka||n===Ua||n===za)if(r===xe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===Mo||n===yo||n===So)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===_o)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===Eo||n===wo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===bo||n===Eo)return r===xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===wo)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Ao||n===To||n===Lo||n===Co||n===Po||n===Do||n===Io||n===ko||n===Uo||n===zo||n===No||n===Oo||n===Fo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ro)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return r===xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Bo||n===Vo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Na)return r===xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nh||n===Ho||n===Go||n===Wo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Na)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Go)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class i1 extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ge extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s1={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s1)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r1=`
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

}`;class o1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new en,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ri({vertexShader:a1,fragmentShader:r1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Qa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c1 extends Rs{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,g=null;const v=new o1,m=e.getContextAttributes();let f=null,b=null;const y=[],x=[],k=new bt;let E=null;const R=new pn;R.viewport=new _e;const A=new pn;A.viewport=new _e;const M=[R,A],_=new i1;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let lt=y[q];return lt===void 0&&(lt=new Wr,y[q]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(q){let lt=y[q];return lt===void 0&&(lt=new Wr,y[q]=lt),lt.getGripSpace()},this.getHand=function(q){let lt=y[q];return lt===void 0&&(lt=new Wr,y[q]=lt),lt.getHandSpace()};function H(q){const lt=x.indexOf(q.inputSource);if(lt===-1)return;const ht=y[lt];ht!==void 0&&(ht.update(q.inputSource,q.frame,l||r),ht.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",O);for(let q=0;q<y.length;q++){const lt=x[q];lt!==null&&(x[q]=null,y[q].disconnect(lt))}P=null,V=null,v.reset(),t.setRenderTarget(f),d=null,p=null,u=null,s=null,b=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Xi(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,ht=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?bs:vs,ht=m.stencil?Ss:qi);const J={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:a};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(J),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Xi(p.textureWidth,p.textureHeight,{format:Dn,type:ai,depthTexture:new Qh(p.textureWidth,p.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(q){for(let lt=0;lt<q.removed.length;lt++){const ht=q.removed[lt],rt=x.indexOf(ht);rt>=0&&(x[rt]=null,y[rt].disconnect(ht))}for(let lt=0;lt<q.added.length;lt++){const ht=q.added[lt];let rt=x.indexOf(ht);if(rt===-1){for(let it=0;it<y.length;it++)if(it>=x.length){x.push(ht),rt=it;break}else if(x[it]===null){x[it]=ht,rt=it;break}if(rt===-1)break}const J=y[rt];J&&J.connect(ht)}}const U=new I,Y=new I;function D(q,lt,ht){U.setFromMatrixPosition(lt.matrixWorld),Y.setFromMatrixPosition(ht.matrixWorld);const rt=U.distanceTo(Y),J=lt.projectionMatrix.elements,it=ht.projectionMatrix.elements,pt=J[14]/(J[10]-1),Jt=J[14]/(J[10]+1),Wt=(J[9]+1)/J[5],he=(J[9]-1)/J[5],N=(J[8]-1)/J[0],te=(it[8]+1)/it[0],Ft=pt*N,qt=pt*te,kt=rt/(-N+te),we=kt*-N;if(lt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),J[10]===-1)q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const zt=pt+kt,T=Jt+kt,S=Ft-we,W=qt+(rt-we),et=Wt*Jt/T*zt,st=he*Jt/T*zt;q.projectionMatrix.makePerspective(S,W,et,st,zt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function $(q,lt){lt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(lt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let lt=q.near,ht=q.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),_.near=A.near=R.near=lt,_.far=A.far=R.far=ht,(P!==_.near||V!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,V=_.far),R.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,_.layers.mask=R.layers.mask|A.layers.mask;const rt=q.parent,J=_.cameras;$(_,rt);for(let it=0;it<J.length;it++)$(J[it],rt);J.length===2?D(_,R,A):_.projectionMatrix.copy(R.projectionMatrix),j(q,_,rt)};function j(q,lt,ht){ht===null?q.matrix.copy(lt.matrixWorld):(q.matrix.copy(ht.matrixWorld),q.matrix.invert(),q.matrix.multiply(lt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Z=null;function ut(q,lt){if(h=lt.getViewerPose(l||r),g=lt,h!==null){const ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let rt=!1;ht.length!==_.cameras.length&&(_.cameras.length=0,rt=!0);for(let it=0;it<ht.length;it++){const pt=ht[it];let Jt=null;if(d!==null)Jt=d.getViewport(pt);else{const he=u.getViewSubImage(p,pt);Jt=he.viewport,it===0&&(t.setRenderTargetTextures(b,he.colorTexture,p.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(b))}let Wt=M[it];Wt===void 0&&(Wt=new pn,Wt.layers.enable(it),Wt.viewport=new _e,M[it]=Wt),Wt.matrix.fromArray(pt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(pt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),it===0&&(_.matrix.copy(Wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),rt===!0&&_.cameras.push(Wt)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")){const it=u.getDepthInformation(ht[0]);it&&it.isValid&&it.texture&&v.init(t,it,s.renderState)}}for(let ht=0;ht<y.length;ht++){const rt=x[ht],J=y[ht];rt!==null&&J!==void 0&&J.update(rt,lt,l||r)}Z&&Z(q,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const at=new jh;at.setAnimationLoop(ut),this.setAnimationLoop=function(q){Z=q},this.dispose=function(){}}}const Ci=new Gn,l1=new Le;function h1(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Jh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,x)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),y=b.envMap,x=b.envMapRotation;y&&(m.envMap.value=y,Ci.copy(x),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(l1.makeRotationFromEuler(Ci)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u1(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const x=y.program;n.uniformBlockBinding(b,x)}function l(b,y){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));const k=y.program;n.updateUBOMapping(b,k);const E=t.render.frame;a[b.id]!==E&&(p(b),a[b.id]=E)}function h(b){const y=u();b.__bindingPointIndex=y;const x=i.createBuffer(),k=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,k,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const y=s[b.id],x=b.uniforms,k=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,R=x.length;E<R;E++){const A=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,_=A.length;M<_;M++){const P=A[M];if(d(P,E,M,k)===!0){const V=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let O=0;O<H.length;O++){const U=H[O],Y=v(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,V+G,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,y,x,k){const E=b.value,R=y+"_"+x;if(k[R]===void 0)return typeof E=="number"||typeof E=="boolean"?k[R]=E:k[R]=E.clone(),!0;{const A=k[R];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return k[R]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(b){const y=b.uniforms;let x=0;const k=16;for(let R=0,A=y.length;R<A;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,P=M.length;_<P;_++){const V=M[_],H=Array.isArray(V.value)?V.value:[V.value];for(let G=0,O=H.length;G<O;G++){const U=H[G],Y=v(U),D=x%k,$=D%Y.boundary,j=D+$;x+=$,j!==0&&k-j<Y.storage&&(x+=k-j),V.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=Y.storage}}}const E=x%k;return E>0&&(x+=k-E),b.__size=x,b.__cache={},this}function v(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);r=[],s={},a={}}return{bind:c,update:l,dispose:f}}class d1{constructor(t={}){const{canvas:e=Qd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=yi,this.toneMappingExposure=1;const x=this;let k=!1,E=0,R=0,A=null,M=-1,_=null;const P=new _e,V=new _e;let H=null;const G=new se(0);let O=0,U=e.width,Y=e.height,D=1,$=null,j=null;const Z=new _e(0,0,U,Y),ut=new _e(0,0,U,Y);let at=!1;const q=new rc;let lt=!1,ht=!1;const rt=new Le,J=new Le,it=new I,pt=new _e,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function he(){return A===null?D:1}let N=n;function te(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),N===null){const F="webgl2";if(N=te(F,w),N===null)throw te(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ft,qt,kt,we,zt,T,S,W,et,st,tt,Dt,xt,wt,oe,dt,Rt,Nt,Bt,At,ae,Zt,ye,z;function vt(){Ft=new vm(N),Ft.init(),Zt=new n1(N,Ft),qt=new um(N,Ft,t,Zt),kt=new Qg(N,Ft),qt.reverseDepthBuffer&&p&&kt.buffers.depth.setReversed(!0),we=new Mm(N),zt=new Og,T=new e1(N,Ft,kt,zt,qt,Zt,we),S=new fm(x),W=new gm(x),et=new Af(N),ye=new lm(N,et),st=new xm(N,et,we,ye),tt=new Sm(N,st,et,we),Bt=new ym(N,qt,T),dt=new dm(zt),Dt=new Ng(x,S,W,Ft,qt,ye,dt),xt=new h1(x,zt),wt=new Bg,oe=new Xg(Ft),Nt=new cm(x,S,W,kt,tt,d,c),Rt=new jg(x,tt,qt),z=new u1(N,we,qt,kt),At=new hm(N,Ft,we),ae=new _m(N,Ft,we),we.programs=Dt.programs,x.capabilities=qt,x.extensions=Ft,x.properties=zt,x.renderLists=wt,x.shadowMap=Rt,x.state=kt,x.info=we}vt();const Q=new c1(x,N);this.xr=Q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(U,Y,!1))},this.getSize=function(w){return w.set(U,Y)},this.setSize=function(w,F,X=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,Y=F,e.width=Math.floor(w*D),e.height=Math.floor(F*D),X===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(U*D,Y*D).floor()},this.setDrawingBufferSize=function(w,F,X){U=w,Y=F,D=X,e.width=Math.floor(w*X),e.height=Math.floor(F*X),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,F,X,K){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,X,K),kt.viewport(P.copy(Z).multiplyScalar(D).round())},this.getScissor=function(w){return w.copy(ut)},this.setScissor=function(w,F,X,K){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,F,X,K),kt.scissor(V.copy(ut).multiplyScalar(D).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(w){kt.setScissorTest(at=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(w=!0,F=!0,X=!0){let K=0;if(w){let B=!1;if(A!==null){const ft=A.texture.format;B=ft===ac||ft===sc||ft===ic}if(B){const ft=A.texture.type,Mt=ft===ai||ft===qi||ft===$s||ft===Ss||ft===ec||ft===nc,Lt=Nt.getClearColor(),Ct=Nt.getClearAlpha(),Vt=Lt.r,$t=Lt.g,Pt=Lt.b;Mt?(g[0]=Vt,g[1]=$t,g[2]=Pt,g[3]=Ct,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Vt,v[1]=$t,v[2]=Pt,v[3]=Ct,N.clearBufferiv(N.COLOR,0,v))}else K|=N.COLOR_BUFFER_BIT}F&&(K|=N.DEPTH_BUFFER_BIT),X&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),wt.dispose(),oe.dispose(),zt.dispose(),S.dispose(),W.dispose(),tt.dispose(),ye.dispose(),z.dispose(),Dt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Uc),Q.removeEventListener("sessionend",zc),Ei.stop()};function nt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const w=we.autoReset,F=Rt.enabled,X=Rt.autoUpdate,K=Rt.needsUpdate,B=Rt.type;vt(),we.autoReset=w,Rt.enabled=F,Rt.autoUpdate=X,Rt.needsUpdate=K,Rt.type=B}function _t(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){const F=w.target;F.removeEventListener("dispose",Yt),Ie(F)}function Ie(w){Je(w),zt.remove(w)}function Je(w){const F=zt.get(w).programs;F!==void 0&&(F.forEach(function(X){Dt.releaseProgram(X)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,X,K,B,ft){F===null&&(F=Jt);const Mt=B.isMesh&&B.matrixWorld.determinant()<0,Lt=hd(w,F,X,K,B);kt.setMaterial(K,Mt);let Ct=X.index,Vt=1;if(K.wireframe===!0){if(Ct=st.getWireframeAttribute(X),Ct===void 0)return;Vt=2}const $t=X.drawRange,Pt=X.attributes.position;let ue=$t.start*Vt,Se=($t.start+$t.count)*Vt;ft!==null&&(ue=Math.max(ue,ft.start*Vt),Se=Math.min(Se,(ft.start+ft.count)*Vt)),Ct!==null?(ue=Math.max(ue,0),Se=Math.min(Se,Ct.count)):Pt!=null&&(ue=Math.max(ue,0),Se=Math.min(Se,Pt.count));const Re=Se-ue;if(Re<0||Re===1/0)return;ye.setup(B,K,Lt,X,Ct);let an,fe=At;if(Ct!==null&&(an=et.get(Ct),fe=ae,fe.setIndex(an)),B.isMesh)K.wireframe===!0?(kt.setLineWidth(K.wireframeLinewidth*he()),fe.setMode(N.LINES)):fe.setMode(N.TRIANGLES);else if(B.isLine){let It=K.linewidth;It===void 0&&(It=1),kt.setLineWidth(It*he()),B.isLineSegments?fe.setMode(N.LINES):B.isLineLoop?fe.setMode(N.LINE_LOOP):fe.setMode(N.LINE_STRIP)}else B.isPoints?fe.setMode(N.POINTS):B.isSprite&&fe.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)fe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))fe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const It=B._multiDrawStarts,Kn=B._multiDrawCounts,pe=B._multiDrawCount,An=Ct?et.get(Ct).bytesPerElement:1,$i=zt.get(K).currentProgram.getUniforms();for(let hn=0;hn<pe;hn++)$i.setValue(N,"_gl_DrawID",hn),fe.render(It[hn]/An,Kn[hn])}else if(B.isInstancedMesh)fe.renderInstances(ue,Re,B.count);else if(X.isInstancedBufferGeometry){const It=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Kn=Math.min(X.instanceCount,It);fe.renderInstances(ue,Re,Kn)}else fe.render(ue,Re)};function ve(w,F,X){w.transparent===!0&&w.side===Me&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,sa(w,F,X),w.side=bi,w.needsUpdate=!0,sa(w,F,X),w.side=Me):sa(w,F,X)}this.compile=function(w,F,X=null){X===null&&(X=w),f=oe.get(X),f.init(F),y.push(f),X.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),w!==X&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const K=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ft=B.material;if(ft)if(Array.isArray(ft))for(let Mt=0;Mt<ft.length;Mt++){const Lt=ft[Mt];ve(Lt,X,B),K.add(Lt)}else ve(ft,X,B),K.add(ft)}),y.pop(),f=null,K},this.compileAsync=function(w,F,X=null){const K=this.compile(w,F,X);return new Promise(B=>{function ft(){if(K.forEach(function(Mt){zt.get(Mt).currentProgram.isReady()&&K.delete(Mt)}),K.size===0){B(w);return}setTimeout(ft,10)}Ft.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Rn=null;function Xn(w){Rn&&Rn(w)}function Uc(){Ei.stop()}function zc(){Ei.start()}const Ei=new jh;Ei.setAnimationLoop(Xn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(w){Rn=w,Q.setAnimationLoop(w),w===null?Ei.stop():Ei.start()},Q.addEventListener("sessionstart",Uc),Q.addEventListener("sessionend",zc),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(F),F=Q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,A),f=oe.get(w,y.length),f.init(F),y.push(f),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(J),ht=this.localClippingEnabled,lt=dt.init(this.clippingPlanes,ht),m=wt.get(w,b.length),m.init(),b.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&pr(ft,F,-1/0,x.sortObjects)}pr(w,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,j),Wt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Wt&&Nt.addToRenderList(m,w),this.info.render.frame++,lt===!0&&dt.beginShadows();const X=f.state.shadowsArray;Rt.render(X,w,F),lt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,B=m.transmissive;if(f.setupLights(),F.isArrayCamera){const ft=F.cameras;if(B.length>0)for(let Mt=0,Lt=ft.length;Mt<Lt;Mt++){const Ct=ft[Mt];Oc(K,B,w,Ct)}Wt&&Nt.render(w);for(let Mt=0,Lt=ft.length;Mt<Lt;Mt++){const Ct=ft[Mt];Nc(m,w,Ct,Ct.viewport)}}else B.length>0&&Oc(K,B,w,F),Wt&&Nt.render(w),Nc(m,w,F);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,F),ye.resetDefaultState(),M=-1,_=null,y.pop(),y.length>0?(f=y[y.length-1],lt===!0&&dt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function pr(w,F,X,K){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){K&&pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(J);const Mt=tt.update(w),Lt=w.material;Lt.visible&&m.push(w,Mt,Lt,X,pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const Mt=tt.update(w),Lt=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),pt.copy(Mt.boundingSphere.center)),pt.applyMatrix4(w.matrixWorld).applyMatrix4(J)),Array.isArray(Lt)){const Ct=Mt.groups;for(let Vt=0,$t=Ct.length;Vt<$t;Vt++){const Pt=Ct[Vt],ue=Lt[Pt.materialIndex];ue&&ue.visible&&m.push(w,Mt,ue,X,pt.z,Pt)}}else Lt.visible&&m.push(w,Mt,Lt,X,pt.z,null)}}const ft=w.children;for(let Mt=0,Lt=ft.length;Mt<Lt;Mt++)pr(ft[Mt],F,X,K)}function Nc(w,F,X,K){const B=w.opaque,ft=w.transmissive,Mt=w.transparent;f.setupLightsView(X),lt===!0&&dt.setGlobalState(x.clippingPlanes,X),K&&kt.viewport(P.copy(K)),B.length>0&&ia(B,F,X),ft.length>0&&ia(ft,F,X),Mt.length>0&&ia(Mt,F,X),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Oc(w,F,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new Xi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Qs:ai,minFilter:Fi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const ft=f.state.transmissionRenderTarget[K.id],Mt=K.viewport||P;ft.setSize(Mt.z,Mt.w);const Lt=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(G),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&Nt.render(X);const Ct=x.toneMapping;x.toneMapping=yi;const Vt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),lt===!0&&dt.setGlobalState(x.clippingPlanes,K),ia(w,X,K),T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Pt=0,ue=F.length;Pt<ue;Pt++){const Se=F[Pt],Re=Se.object,an=Se.geometry,fe=Se.material,It=Se.group;if(fe.side===Me&&Re.layers.test(K.layers)){const Kn=fe.side;fe.side=tn,fe.needsUpdate=!0,Fc(Re,X,K,an,fe,It),fe.side=Kn,fe.needsUpdate=!0,$t=!0}}$t===!0&&(T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft))}x.setRenderTarget(Lt),x.setClearColor(G,O),Vt!==void 0&&(K.viewport=Vt),x.toneMapping=Ct}function ia(w,F,X){const K=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ft=w.length;B<ft;B++){const Mt=w[B],Lt=Mt.object,Ct=Mt.geometry,Vt=K===null?Mt.material:K,$t=Mt.group;Lt.layers.test(X.layers)&&Fc(Lt,F,X,Ct,Vt,$t)}}function Fc(w,F,X,K,B,ft){w.onBeforeRender(x,F,X,K,B,ft),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(x,F,X,K,w,ft),B.transparent===!0&&B.side===Me&&B.forceSinglePass===!1?(B.side=tn,B.needsUpdate=!0,x.renderBufferDirect(X,F,K,B,w,ft),B.side=bi,B.needsUpdate=!0,x.renderBufferDirect(X,F,K,B,w,ft),B.side=Me):x.renderBufferDirect(X,F,K,B,w,ft),w.onAfterRender(x,F,X,K,B,ft)}function sa(w,F,X){F.isScene!==!0&&(F=Jt);const K=zt.get(w),B=f.state.lights,ft=f.state.shadowsArray,Mt=B.state.version,Lt=Dt.getParameters(w,B.state,ft,F,X),Ct=Dt.getProgramCacheKey(Lt);let Vt=K.programs;K.environment=w.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(w.isMeshStandardMaterial?W:S).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",Yt),Vt=new Map,K.programs=Vt);let $t=Vt.get(Ct);if($t!==void 0){if(K.currentProgram===$t&&K.lightsStateVersion===Mt)return Vc(w,Lt),$t}else Lt.uniforms=Dt.getUniforms(w),w.onBeforeCompile(Lt,x),$t=Dt.acquireProgram(Lt,Ct),Vt.set(Ct,$t),K.uniforms=Lt.uniforms;const Pt=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=dt.uniform),Vc(w,Lt),K.needsLights=dd(w),K.lightsStateVersion=Mt,K.needsLights&&(Pt.ambientLightColor.value=B.state.ambient,Pt.lightProbe.value=B.state.probe,Pt.directionalLights.value=B.state.directional,Pt.directionalLightShadows.value=B.state.directionalShadow,Pt.spotLights.value=B.state.spot,Pt.spotLightShadows.value=B.state.spotShadow,Pt.rectAreaLights.value=B.state.rectArea,Pt.ltc_1.value=B.state.rectAreaLTC1,Pt.ltc_2.value=B.state.rectAreaLTC2,Pt.pointLights.value=B.state.point,Pt.pointLightShadows.value=B.state.pointShadow,Pt.hemisphereLights.value=B.state.hemi,Pt.directionalShadowMap.value=B.state.directionalShadowMap,Pt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pt.spotShadowMap.value=B.state.spotShadowMap,Pt.spotLightMatrix.value=B.state.spotLightMatrix,Pt.spotLightMap.value=B.state.spotLightMap,Pt.pointShadowMap.value=B.state.pointShadowMap,Pt.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=$t,K.uniformsList=null,$t}function Bc(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Oa.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Vc(w,F){const X=zt.get(w);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function hd(w,F,X,K,B){F.isScene!==!0&&(F=Jt),T.resetTextureUnits();const ft=F.fog,Mt=K.isMeshStandardMaterial?F.environment:null,Lt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ws,Ct=(K.isMeshStandardMaterial?W:S).get(K.envMap||Mt),Vt=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$t=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Pt=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,Se=!!X.morphAttributes.color;let Re=yi;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=x.toneMapping);const an=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=an!==void 0?an.length:0,It=zt.get(K),Kn=f.state.lights;if(lt===!0&&(ht===!0||w!==_)){const vn=w===_&&K.id===M;dt.setState(K,w,vn)}let pe=!1;K.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Kn.state.version||It.outputColorSpace!==Lt||B.isBatchedMesh&&It.batching===!1||!B.isBatchedMesh&&It.batching===!0||B.isBatchedMesh&&It.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&It.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&It.instancing===!1||!B.isInstancedMesh&&It.instancing===!0||B.isSkinnedMesh&&It.skinning===!1||!B.isSkinnedMesh&&It.skinning===!0||B.isInstancedMesh&&It.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&It.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&It.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&It.instancingMorph===!1&&B.morphTexture!==null||It.envMap!==Ct||K.fog===!0&&It.fog!==ft||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==dt.numPlanes||It.numIntersection!==dt.numIntersection)||It.vertexAlphas!==Vt||It.vertexTangents!==$t||It.morphTargets!==Pt||It.morphNormals!==ue||It.morphColors!==Se||It.toneMapping!==Re||It.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,It.__version=K.version);let An=It.currentProgram;pe===!0&&(An=sa(K,F,B));let $i=!1,hn=!1,Ds=!1;const Ae=An.getUniforms(),Un=It.uniforms;if(kt.useProgram(An.program)&&($i=!0,hn=!0,Ds=!0),K.id!==M&&(M=K.id,hn=!0),$i||_!==w){kt.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),ef(rt),nf(rt),Ae.setValue(N,"projectionMatrix",rt)):Ae.setValue(N,"projectionMatrix",w.projectionMatrix),Ae.setValue(N,"viewMatrix",w.matrixWorldInverse);const ci=Ae.map.cameraPosition;ci!==void 0&&ci.setValue(N,it.setFromMatrixPosition(w.matrixWorld)),qt.logarithmicDepthBuffer&&Ae.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ae.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,hn=!0,Ds=!0)}if(B.isSkinnedMesh){Ae.setOptional(N,B,"bindMatrix"),Ae.setOptional(N,B,"bindMatrixInverse");const vn=B.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ae.setValue(N,"boneTexture",vn.boneTexture,T))}B.isBatchedMesh&&(Ae.setOptional(N,B,"batchingTexture"),Ae.setValue(N,"batchingTexture",B._matricesTexture,T),Ae.setOptional(N,B,"batchingIdTexture"),Ae.setValue(N,"batchingIdTexture",B._indirectTexture,T),Ae.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&Ae.setValue(N,"batchingColorTexture",B._colorsTexture,T));const Is=X.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&Bt.update(B,X,An),(hn||It.receiveShadow!==B.receiveShadow)&&(It.receiveShadow=B.receiveShadow,Ae.setValue(N,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Un.envMap.value=Ct,Un.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(Un.envMapIntensity.value=F.environmentIntensity),hn&&(Ae.setValue(N,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&ud(Un,Ds),ft&&K.fog===!0&&xt.refreshFogUniforms(Un,ft),xt.refreshMaterialUniforms(Un,K,D,Y,f.state.transmissionRenderTarget[w.id]),Oa.upload(N,Bc(It),Un,T)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Oa.upload(N,Bc(It),Un,T),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ae.setValue(N,"center",B.center),Ae.setValue(N,"modelViewMatrix",B.modelViewMatrix),Ae.setValue(N,"normalMatrix",B.normalMatrix),Ae.setValue(N,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const vn=K.uniformsGroups;for(let ci=0,li=vn.length;ci<li;ci++){const Hc=vn[ci];z.update(Hc,An),z.bind(Hc,An)}}return An}function ud(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function dd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,F,X){zt.get(w.texture).__webglTexture=F,zt.get(w.depthTexture).__webglTexture=X;const K=zt.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const X=zt.get(w);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,X=0){A=w,E=F,R=X;let K=!0,B=null,ft=!1,Mt=!1;if(w){const Ct=zt.get(w);if(Ct.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(N.FRAMEBUFFER,null),K=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Ct.__hasExternalTextures)T.rebindTextures(w,zt.get(w.texture).__webglTexture,zt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&zt.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);const $t=zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[F])?B=$t[F][X]:B=$t[F],ft=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?B=zt.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?B=$t[X]:B=$t,P.copy(w.viewport),V.copy(w.scissor),H=w.scissorTest}else P.copy(Z).multiplyScalar(D).floor(),V.copy(ut).multiplyScalar(D).floor(),H=at;if(kt.bindFramebuffer(N.FRAMEBUFFER,B)&&K&&kt.drawBuffers(w,B),kt.viewport(P),kt.scissor(V),kt.setScissorTest(H),ft){const Ct=zt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,X)}else if(Mt){const Ct=zt.get(w.texture),Vt=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.__webglTexture,X||0,Vt)}M=-1},this.readRenderTargetPixels=function(w,F,X,K,B,ft,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){kt.bindFramebuffer(N.FRAMEBUFFER,Lt);try{const Ct=w.texture,Vt=Ct.format,$t=Ct.type;if(!qt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-K&&X>=0&&X<=w.height-B&&N.readPixels(F,X,K,B,Zt.convert(Vt),Zt.convert($t),ft)}finally{const Ct=A!==null?zt.get(A).__webglFramebuffer:null;kt.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,F,X,K,B,ft,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){const Ct=w.texture,Vt=Ct.format,$t=Ct.type;if(!qt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-K&&X>=0&&X<=w.height-B){kt.bindFramebuffer(N.FRAMEBUFFER,Lt);const Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(F,X,K,B,Zt.convert(Vt),Zt.convert($t),0);const ue=A!==null?zt.get(A).__webglFramebuffer:null;kt.bindFramebuffer(N.FRAMEBUFFER,ue);const Se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await tf(N,Se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.deleteBuffer(Pt),N.deleteSync(Se),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,X=0){w.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-X),B=Math.floor(w.image.width*K),ft=Math.floor(w.image.height*K),Mt=F!==null?F.x:0,Lt=F!==null?F.y:0;T.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Mt,Lt,B,ft),kt.unbindTexture()},this.copyTextureToTexture=function(w,F,X=null,K=null,B=0){w.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],F=arguments[2],B=arguments[3]||0,X=null);let ft,Mt,Lt,Ct,Vt,$t,Pt,ue,Se;const Re=w.isCompressedTexture?w.mipmaps[B]:w.image;X!==null?(ft=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Lt=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,Vt=X.min.y,$t=X.isBox3?X.min.z:0):(ft=Re.width,Mt=Re.height,Lt=Re.depth||1,Ct=0,Vt=0,$t=0),K!==null?(Pt=K.x,ue=K.y,Se=K.z):(Pt=0,ue=0,Se=0);const an=Zt.convert(F.format),fe=Zt.convert(F.type);let It;F.isData3DTexture?(T.setTexture3D(F,0),It=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),It=N.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),It=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Kn=N.getParameter(N.UNPACK_ROW_LENGTH),pe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),An=N.getParameter(N.UNPACK_SKIP_PIXELS),$i=N.getParameter(N.UNPACK_SKIP_ROWS),hn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Re.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$t);const Ds=w.isDataArrayTexture||w.isData3DTexture,Ae=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Un=zt.get(w),Is=zt.get(F),vn=zt.get(Un.__renderTarget),ci=zt.get(Is.__renderTarget);kt.bindFramebuffer(N.READ_FRAMEBUFFER,vn.__webglFramebuffer),kt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let li=0;li<Lt;li++)Ds&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(w).__webglTexture,B,$t+li),w.isDepthTexture?(Ae&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(F).__webglTexture,B,Se+li),N.blitFramebuffer(Ct,Vt,ft,Mt,Pt,ue,ft,Mt,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ae?N.copyTexSubImage3D(It,B,Pt,ue,Se+li,Ct,Vt,ft,Mt):N.copyTexSubImage2D(It,B,Pt,ue,Se+li,Ct,Vt,ft,Mt);kt.bindFramebuffer(N.READ_FRAMEBUFFER,null),kt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ae?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(It,B,Pt,ue,Se,ft,Mt,Lt,an,fe,Re.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(It,B,Pt,ue,Se,ft,Mt,Lt,an,Re.data):N.texSubImage3D(It,B,Pt,ue,Se,ft,Mt,Lt,an,fe,Re):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,Pt,ue,ft,Mt,an,fe,Re.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,Pt,ue,Re.width,Re.height,an,Re.data):N.texSubImage2D(N.TEXTURE_2D,B,Pt,ue,ft,Mt,an,fe,Re);N.pixelStorei(N.UNPACK_ROW_LENGTH,Kn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,An),N.pixelStorei(N.UNPACK_SKIP_ROWS,$i),N.pixelStorei(N.UNPACK_SKIP_IMAGES,hn),B===0&&F.generateMipmaps&&N.generateMipmap(It),kt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,X=null,K=null,B=0){return w.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,K=arguments[1]||null,w=arguments[2],F=arguments[3],B=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,X,K,B)},this.initRenderTarget=function(w){zt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),kt.unbindTexture()},this.resetState=function(){E=0,R=0,A=null,kt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class cc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(t),this.density=e}clone(){return new cc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class f1 extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class p1 extends As{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bl=new Le,Ko=new Gh,Ra=new Za,Aa=new I;class m1 extends Oe{constructor(t=new Ke,e=new p1){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=a,t.ray.intersectsSphere(Ra)===!1)return;Bl.copy(s).invert(),Ko.copy(t.ray).applyMatrix4(Bl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=p,v=d;g<v;g++){const m=l.getX(g);Aa.fromBufferAttribute(u,m),Vl(Aa,m,c,s,t,e,this)}}else{const p=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=p,v=d;g<v;g++)Aa.fromBufferAttribute(u,g),Vl(Aa,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Vl(i,t,e,n,s,a,r){const o=Ko.distanceSqToPoint(i);if(o<e){const c=new I;Ko.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class g1 extends en{constructor(t,e,n,s,a,r,o,c,l){super(t,e,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(a-1);const h=n[s],p=n[s+1]-h,d=(r-h)/p;return(s+d)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=e||(r.isVector2?new bt:new I);return c.copy(o).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],a=[],r=[],o=new I,c=new Le;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new I)}a[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Xe(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(c.makeRotationAxis(o,g))}r[d].crossVectors(s[d],a[d])}if(e===!0){let d=Math.acos(Xe(a[0].dot(a[t]),-1,1));d/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let g=1;g<=t;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lc extends Wn{constructor(t=0,e=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new bt){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class v1 extends lc{constructor(t,e,n,s,a,r){super(t,e,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function hc(){let i=0,t=0,e=0,n=0;function s(a,r,o,c){i=a,t=o,e=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,h,u){let p=(r-a)/l-(o-a)/(l+h)+(o-r)/h,d=(o-r)/h-(c-r)/(h+u)+(c-o)/u;p*=h,d*=h,s(r,o,p,d)},calc:function(a){const r=a*a,o=r*a;return i+t*a+e*r+n*o}}}const Ta=new I,qr=new hc,Xr=new hc,Kr=new hc;class su extends Wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%a]:(Ta.subVectors(s[0],s[1]).add(s[0]),l=Ta);const u=s[o%a],p=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(Ta.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),qr.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,v,m),Xr.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,v,m),Kr.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(qr.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Xr.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),Kr.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(qr.calc(c),Xr.calc(c),Kr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hl(i,t,e,n,s){const a=(n-t)*.5,r=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+a+r)*c+(-3*e+3*n-2*a-r)*o+a*i+e}function x1(i,t){const e=1-i;return e*e*t}function _1(i,t){return 2*(1-i)*i*t}function M1(i,t){return i*i*t}function Xs(i,t,e,n){return x1(i,t)+_1(i,e)+M1(i,n)}function y1(i,t){const e=1-i;return e*e*e*t}function S1(i,t){const e=1-i;return 3*e*e*i*t}function b1(i,t){return 3*(1-i)*i*i*t}function E1(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return y1(i,t)+S1(i,e)+b1(i,n)+E1(i,s)}class au extends Wn{constructor(t=new bt,e=new bt,n=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new bt){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ks(t,s.x,a.x,r.x,o.x),Ks(t,s.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w1 extends Wn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ks(t,s.x,a.x,r.x,o.x),Ks(t,s.y,a.y,r.y,o.y),Ks(t,s.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ru extends Wn{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R1 extends Wn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends Wn{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(Xs(t,s.x,a.x,r.x),Xs(t,s.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cu extends Wn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(Xs(t,s.x,a.x,r.x),Xs(t,s.y,a.y,r.y),Xs(t,s.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lu extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Hl(o,c.x,l.x,h.x,u.x),Hl(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new bt().fromArray(s))}return this}}var Jo=Object.freeze({__proto__:null,ArcCurve:v1,CatmullRomCurve3:su,CubicBezierCurve:au,CubicBezierCurve3:w1,EllipseCurve:lc,LineCurve:ru,LineCurve3:R1,QuadraticBezierCurve:ou,QuadraticBezierCurve3:cu,SplineCurve:lu});class A1 extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Jo[s.type]().fromJSON(s))}return this}}class T1 extends A1{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ru(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new ou(this.currentPoint.clone(),new bt(t,e),new bt(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,r){const o=new au(this.currentPoint.clone(),new bt(t,e),new bt(n,s),new bt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new lu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,a,r),this}absarc(t,e,n,s,a,r){return this.absellipse(t,e,n,n,s,a,r),this}ellipse(t,e,n,s,a,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,a,r,o,c),this}absellipse(t,e,n,s,a,r,o,c){const l=new lc(t,e,n,s,a,r,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class uc extends Ke{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Xe(s,0,Math.PI*2);const a=[],r=[],o=[],c=[],l=[],h=1/e,u=new I,p=new bt,d=new I,g=new I,v=new I;let m=0,f=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,d.x=f*1,d.y=-m,d.z=f*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let b=0;b<=e;b++){const y=n+b*h*s,x=Math.sin(y),k=Math.cos(y);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*x,u.y=t[E].y,u.z=t[E].x*k,r.push(u.x,u.y,u.z),p.x=b/e,p.y=E/(t.length-1),o.push(p.x,p.y);const R=c[3*E+0]*x,A=c[3*E+1],M=c[3*E+0]*k;l.push(R,A,M)}}for(let b=0;b<e;b++)for(let y=0;y<t.length-1;y++){const x=y+b*t.length,k=x,E=x+t.length,R=x+t.length+1,A=x+1;a.push(k,E,A),a.push(R,A,E)}this.setIndex(a),this.setAttribute("position",new de(r,3)),this.setAttribute("uv",new de(o,2)),this.setAttribute("normal",new de(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uc(t.points,t.segments,t.phiStart,t.phiLength)}}class dc extends uc{constructor(t=1,e=1,n=4,s=8){const a=new T1;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new dc(t.radius,t.length,t.capSegments,t.radialSegments)}}class gn extends Ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const a=[],r=[],o=[],c=[],l=new I,h=new bt;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[p]/t+1)/2,h.y=(r[p+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class yn extends Ke{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],p=[],d=[];let g=0;const v=[],m=n/2;let f=0;b(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(p,3)),this.setAttribute("uv",new de(d,2));function b(){const x=new I,k=new I;let E=0;const R=(e-t)/n;for(let A=0;A<=a;A++){const M=[],_=A/a,P=_*(e-t)+t;for(let V=0;V<=s;V++){const H=V/s,G=H*c+o,O=Math.sin(G),U=Math.cos(G);k.x=P*O,k.y=-_*n+m,k.z=P*U,u.push(k.x,k.y,k.z),x.set(O,R,U).normalize(),p.push(x.x,x.y,x.z),d.push(H,1-_),M.push(g++)}v.push(M)}for(let A=0;A<s;A++)for(let M=0;M<a;M++){const _=v[M][A],P=v[M+1][A],V=v[M+1][A+1],H=v[M][A+1];(t>0||M!==0)&&(h.push(_,P,H),E+=3),(e>0||M!==a-1)&&(h.push(P,V,H),E+=3)}l.addGroup(f,E,0),f+=E}function y(x){const k=g,E=new bt,R=new I;let A=0;const M=x===!0?t:e,_=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*_,0),p.push(0,_,0),d.push(.5,.5),g++;const P=g;for(let V=0;V<=s;V++){const G=V/s*c+o,O=Math.cos(G),U=Math.sin(G);R.x=M*U,R.y=m*_,R.z=M*O,u.push(R.x,R.y,R.z),p.push(0,_,0),E.x=O*.5+.5,E.y=U*.5*_+.5,d.push(E.x,E.y),g++}for(let V=0;V<s;V++){const H=k+V,G=P+V;x===!0?h.push(G,G+1,H):h.push(G+1,G,H),A+=3}l.addGroup(f,A,x===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ne extends yn{constructor(t=1,e=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new ne(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fc extends Ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],r=[];o(s),l(n),h(),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(a.slice(),3)),this.setAttribute("uv",new de(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const y=new I,x=new I,k=new I;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],x),d(e[E+2],k),c(y,x,k,b)}function c(b,y,x,k){const E=k+1,R=[];for(let A=0;A<=E;A++){R[A]=[];const M=b.clone().lerp(x,A/E),_=y.clone().lerp(x,A/E),P=E-A;for(let V=0;V<=P;V++)V===0&&A===E?R[A][V]=M:R[A][V]=M.clone().lerp(_,V/P)}for(let A=0;A<E;A++)for(let M=0;M<2*(E-A)-1;M++){const _=Math.floor(M/2);M%2===0?(p(R[A][_+1]),p(R[A+1][_]),p(R[A][_])):(p(R[A][_+1]),p(R[A+1][_+1]),p(R[A+1][_]))}}function l(b){const y=new I;for(let x=0;x<a.length;x+=3)y.x=a[x+0],y.y=a[x+1],y.z=a[x+2],y.normalize().multiplyScalar(b),a[x+0]=y.x,a[x+1]=y.y,a[x+2]=y.z}function h(){const b=new I;for(let y=0;y<a.length;y+=3){b.x=a[y+0],b.y=a[y+1],b.z=a[y+2];const x=m(b)/2/Math.PI+.5,k=f(b)/Math.PI+.5;r.push(x,1-k)}g(),u()}function u(){for(let b=0;b<r.length;b+=6){const y=r[b+0],x=r[b+2],k=r[b+4],E=Math.max(y,x,k),R=Math.min(y,x,k);E>.9&&R<.1&&(y<.2&&(r[b+0]+=1),x<.2&&(r[b+2]+=1),k<.2&&(r[b+4]+=1))}}function p(b){a.push(b.x,b.y,b.z)}function d(b,y){const x=b*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const b=new I,y=new I,x=new I,k=new I,E=new bt,R=new bt,A=new bt;for(let M=0,_=0;M<a.length;M+=9,_+=6){b.set(a[M+0],a[M+1],a[M+2]),y.set(a[M+3],a[M+4],a[M+5]),x.set(a[M+6],a[M+7],a[M+8]),E.set(r[_+0],r[_+1]),R.set(r[_+2],r[_+3]),A.set(r[_+4],r[_+5]),k.copy(b).add(y).add(x).divideScalar(3);const P=m(k);v(E,_+0,b,P),v(R,_+2,y,P),v(A,_+4,x,P)}}function v(b,y,x,k){k<0&&b.x===1&&(r[y]=b.x-1),x.x===0&&x.z===0&&(r[y]=k/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fc(t.vertices,t.indices,t.radius,t.details)}}class pc extends fc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pc(t.radius,t.detail)}}class Ls extends Ke{constructor(t=.5,e=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const p=(e-t)/s,d=new I,g=new bt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=a+m/n*r;d.x=u*Math.cos(f),d.y=u*Math.sin(f),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=p}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const b=f+m,y=b,x=b+n+1,k=b+n+2,E=b+1;o.push(y,x,E),o.push(x,k,E)}}this.setIndex(o),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qn extends Ke{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new I,p=new I,d=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const b=[],y=f/n;let x=0;f===0&&r===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let k=0;k<=e;k++){const E=k/e;u.x=-t*Math.cos(s+E*a)*Math.sin(r+y*o),u.y=t*Math.cos(r+y*o),u.z=t*Math.sin(s+E*a)*Math.sin(r+y*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),m.push(E+x,1-y),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const y=h[f][b+1],x=h[f][b],k=h[f+1][b],E=h[f+1][b+1];(f!==0||r>0)&&d.push(y,x,E),(f!==n-1||c<Math.PI)&&d.push(x,k,E)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class kn extends Ke{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],c=[],l=[],h=new I,u=new I,p=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*a,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,b=(s+1)*d+g;r.push(v,m,b),r.push(m,f,b)}this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class mc extends Ke{constructor(t=new cu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:a};const r=t.computeFrenetFrames(e,a);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const o=new I,c=new I,l=new bt;let h=new I;const u=[],p=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(p,3)),this.setAttribute("uv",new de(d,2));function v(){for(let y=0;y<e;y++)m(y);m(a===!1?e:0),b(),f()}function m(y){h=t.getPointAt(y/e,h);const x=r.normals[y],k=r.binormals[y];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,A=Math.sin(R),M=-Math.cos(R);c.x=M*x.x+A*k.x,c.y=M*x.y+A*k.y,c.z=M*x.z+A*k.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){const k=(s+1)*(y-1)+(x-1),E=(s+1)*y+(x-1),R=(s+1)*y+x,A=(s+1)*(y-1)+x;g.push(k,E,A),g.push(E,R,A)}}function b(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)l.x=y/e,l.y=x/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new mc(new Jo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Fn extends As{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oh,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Gl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class L1{constructor(t,e,n){const s=this;let a=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const C1=new L1;class gc{constructor(t){this.manager=t!==void 0?t:C1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,a){n.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}gc.DEFAULT_MATERIAL_NAME="__DEFAULT";class P1 extends gc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,r=Gl.get(t);if(r!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(r),a.manager.itemEnd(t)},0),r;const o=js("img");function c(){h(),Gl.add(t,this),e&&e(this),a.manager.itemEnd(t)}function l(u){h(),s&&s(u),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(t),o.src=t,o}}class D1 extends gc{constructor(t){super(t)}load(t,e,n,s){const a=new en,r=new P1(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,e!==void 0&&e(a)},n,s),a}}class vc extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class I1 extends vc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Jr=new Le,Wl=new I,ql=new I;class hu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wl),ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ql),e.updateMatrixWorld(),Jr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xl=new Le,Fs=new I,Yr=new I;class k1 extends hu{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fs),Yr.copy(n.position),Yr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Yr),n.updateMatrixWorld(),s.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl)}}class uu extends vc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new k1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class U1 extends hu{constructor(){super(new Zh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kl extends vc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new U1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class z1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Jl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Jl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);const N1=`attribute float aSize; attribute float aAlpha; attribute vec3 aColor; uniform float uScale;
varying vec3 vC; varying float vA;
void main(){ vC=aColor; vA=aAlpha; vec4 mv=modelViewMatrix*vec4(position,1.);
  gl_PointSize=aSize*uScale/max(.1,-mv.z); gl_Position=projectionMatrix*mv; }`,O1=`varying vec3 vC; varying float vA;
void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.12,d)*vA; if(a<.01) discard; gl_FragColor=vec4(vC,a); }`;class Yl{constructor(t,e,n){this.max=e,this.cur=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.grow=new Float32Array(e),this.a0=new Float32Array(e);const s=this.geo=new Ke;s.setAttribute("position",new cn(this.pos,3)),s.setAttribute("aColor",new cn(this.col,3)),s.setAttribute("aSize",new cn(this.size,1)),s.setAttribute("aAlpha",new cn(this.alpha,1)),this.mat=new ri({vertexShader:N1,fragmentShader:O1,uniforms:{uScale:{value:900}},transparent:!0,depthWrite:!1,blending:n?Wi:Bi}),this.points=new m1(s,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?11:10,t.add(this.points)}emit(t,e,n,s,a,r,o,c,l,h,u,p=0,d=0,g=0,v=1){const m=this.cur;this.cur=(m+1)%this.max;const f=m*3;this.pos[f]=t,this.pos[f+1]=e,this.pos[f+2]=n,this.vel[f]=s,this.vel[f+1]=a,this.vel[f+2]=r,this.col[f]=o,this.col[f+1]=c,this.col[f+2]=l,this.size[m]=h,this.life[m]=this.maxLife[m]=u,this.grav[m]=p,this.drag[m]=d,this.grow[m]=g,this.a0[m]=v}update(t){for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;const s=n*3,a=Math.max(0,1-this.drag[n]*t);this.vel[s]*=a,this.vel[s+1]=this.vel[s+1]*a-this.grav[n]*t,this.vel[s+2]*=a,this.pos[s]+=this.vel[s]*t,this.pos[s+1]+=this.vel[s+1]*t,this.pos[s+2]+=this.vel[s+2]*t,this.pos[s+1]<.02&&this.grav[n]>0&&(this.pos[s+1]=.02,this.vel[s+1]*=-.3,this.vel[s]*=.6,this.vel[s+2]*=.6),this.size[n]=Math.max(0,this.size[n]+this.grow[n]*t),this.alpha[n]=this.a0[n]*Math.max(0,Math.min(1,this.life[n]/this.maxLife[n]*1.6))}const e=this.geo.attributes;e.position.needsUpdate=e.aColor.needsUpdate=e.aSize.needsUpdate=e.aAlpha.needsUpdate=!0}}const re=()=>Math.random(),De=()=>Math.random()*2-1,F1=[[.45,.3,.1],[.3,.32,.1],[.5,.18,.08],[.35,.22,.1]];class B1{constructor(t){this.scene=t,this.add=new Yl(t,5e3,!0),this.norm=new Yl(t,3500,!1),this.objs=[]}resize(t){this.add.mat.uniforms.uScale.value=this.norm.mat.uniforms.uScale.value=t*1.25}frac(t){return t*=this.mult??1,Math.floor(t)+(re()<t%1?1:0)}fire(t,e,n=.15,s=2,a=.5){for(let r=this.frac(e);r>0;r--){const o=re();this.add.emit(t.x+De()*n,t.y+De()*n*.5,t.z+De()*n,De()*.5,s*(.5+re()*.8),De()*.5,.75,.22+o*.3,.03+o*.1,a*(.6+re()*.8),.3+re()*.45,-1.2,1,-a*.9)}}fireJet(t,e,n,s=14,a=.7){for(let r=this.frac(n);r>0;r--){const o=re(),c=s*(.6+re()*.6);this.add.emit(t.x,t.y,t.z,e.x*c+De()*1.4,e.y*c+De()*1.2+.5,e.z*c+De()*1.4,.8,.25+o*.3,.04+o*.1,a*(.5+re()),.35+re()*.3,-2,.8,a*1.2)}}embers(t,e,n=.6,s=3){for(let a=this.frac(e);a>0;a--)this.add.emit(t.x+De()*n,t.y+De()*n,t.z+De()*n,De()*s,re()*s*1.2,De()*s,1,.5,.12,.07+re()*.06,.6+re()*.9,2.5,.6,0)}sparks(t,e,n=[1,.8,.5]){for(let s=this.frac(e);s>0;s--)this.add.emit(t.x,t.y,t.z,De()*6,De()*5+1.5,De()*6,n[0],n[1],n[2],.1+re()*.1,.18+re()*.25,9,1.5,-.15)}dust(t,e,n=0,s=0,a=3,r=[.32,.24,.18],o=.7){for(let c=this.frac(e);c>0;c--){const l=re()*6.283,h=re()*a*.6,u=.7+re()*.5;this.norm.emit(t.x+De()*.2,t.y+re()*.25,t.z+De()*.2,n*a*(.4+re()*.8)+Math.cos(l)*h,re()*1.6,s*a*(.4+re()*.8)+Math.sin(l)*h,r[0]*u,r[1]*u,r[2]*u,o*(.5+re()*.8),.5+re()*.7,.6,1.8,o*1.1,.4)}}smoke(t,e,n=.8){for(let s=this.frac(e);s>0;s--)this.norm.emit(t.x+De()*.25,t.y+De()*.5,t.z+De()*.25,De()*.8,.6+re()*1.2,De()*.8,.13,.12,.12,n*(.5+re()*.7),.6+re()*.8,-.3,1,n,.45)}leaves(t,e,n=4,s=0){for(let a=this.frac(e);a>0;a--){const r=re()*6.283,o=n*(.3+re()*.8),c=F1[re()*4|0],l=s?.3+re()*s:0;this.norm.emit(t.x+Math.cos(r)*l,t.y+re()*1.6,t.z+Math.sin(r)*l,-Math.sin(r)*o+Math.cos(r)*o*(s?.15:1),re()*3.5,Math.cos(r)*o+Math.sin(r)*o*(s?.15:1),c[0],c[1],c[2],.1+re()*.09,.7+re()*.9,3.5,.9,0,1)}}ring(t,e=14207144,n=5,s=.5,a=.06){const r=new Ot(new Ls(.82,1,56),new Ne({color:e,transparent:!0,opacity:.9,side:Me,depthWrite:!1,blending:Wi,fog:!1}));r.rotation.x=-Math.PI/2,r.position.set(t.x,a,t.z),this.scene.add(r);let o=0;this.objs.push(c=>{o+=c;const l=Math.min(1,o/s),h=1-(1-l)*(1-l);if(r.scale.setScalar(.2+h*n),r.material.opacity=.9*(1-l),l>=1)return this.scene.remove(r),r.geometry.dispose(),r.material.dispose(),!0})}update(t){this.add.update(t),this.norm.update(t);for(let e=this.objs.length-1;e>=0;e--)this.objs[e](t)&&this.objs.splice(e,1)}}function du(){const i=new ge;for(let t=0;t<7;t++){const e=new Ot(new yn(.24+t*.13,.1+t*.13,.42,18,1,!0),new Ne({color:t%2?10126440:7232586,transparent:!0,opacity:.26,side:Me,depthWrite:!1}));e.position.y=.21+t*.4,e.userData.i=t,i.add(e)}return i.userData.spin=t=>{for(const e of i.children){const n=e.userData.i;e.rotation.y=t*(9+n*1.7),e.position.x=Math.sin(t*7+n*.9)*.05*n,e.position.z=Math.cos(t*6+n*.7)*.05*n}},i}const qe=(i,t)=>new Ne({color:i,transparent:!0,opacity:t,side:Me,depthWrite:!1,blending:Wi,fog:!1});function fu(){const i=new ge,t=new Fn({color:4862752,roughness:1}),e=new Fn({color:4155946,roughness:1}),n=new Ot(new Ls(.72,.95,40),qe(10215520,.8));n.rotation.x=-Math.PI/2,n.position.y=.05,i.add(n);const s=new Ot(new gn(.72,32),qe(6270522,.25));s.rotation.x=-Math.PI/2,s.position.y=.04,i.add(s);const a=[];for(let r=0;r<9;r++){const o=r/9*6.2832+Math.random()*.3,c=.35+Math.random()*.45,l=1+Math.random()*.8,h=new ge;h.position.set(Math.sin(o)*c,0,Math.cos(o)*c),h.rotation.set(Math.cos(o)*-.38,0,Math.sin(o)*.38);const u=new Ot(new ne(.075+Math.random()*.05,l,6),r%3?t:e);u.position.y=l/2,u.castShadow=!0,h.add(u),h.userData.ph=Math.random()*6,h.userData.bx=h.rotation.x,h.userData.bz=h.rotation.z,i.add(h),a.push(h)}return i.userData.set=(r,o,c,l=0)=>{n.visible=s.visible=r>0,n.material.opacity=r*(.55+.35*Math.sin(c*28)),s.material.opacity=r*.28,n.scale.setScalar(1.25-.25*Math.min(1,r));for(const h of a)h.scale.set(1,Math.max(.001,o),1),h.visible=o>.01,h.rotation.y=Math.sin(c*9+h.userData.ph)*.25*o,h.rotation.x=h.userData.bx*(1-2.3*l),h.rotation.z=h.userData.bz*(1-2.3*l)},i.userData.set(0,0,0),i}function V1(){const i=new ge,t=new qn(.5,10,6);for(let e=0;e<3;e++){const n=new Ot(t,new Ne({color:e===1?14221194:7327804,transparent:!0,opacity:.9,depthWrite:!1}));n.scale.set(1.25,.035,.34),n.rotation.z=e*2.094,i.add(n)}return i}function H1(){const i=new ge;for(let e=0;e<3;e++){const n=new Ot(new kn(1-e*.26,.07+e*.02,6,22,Math.PI),qe(e===1?14264575:9063935,.75));n.position.z=e*.22,n.position.y=-.9+e*.1,i.add(n)}const t=new Ot(new qn(.2,10,8),qe(15784191,.9));return t.scale.set(1,.5,.5),t.position.set(0,-.25,.45),i.add(t),i}function G1(){const i=new ge,t=qe(8011007,.32),e=qe(15918847,.85),n=new qn(1,16,8,0,6.2832,0,Math.PI/2),s=o=>{const c=new ge;c.position.z=-1.5;const l=new ge;l.position.z=1.5,l.scale.y=o,c.add(l);const h=new Ot(n,t);h.scale.set(1.15,.6,1.7),l.add(h);for(let u=0;u<9;u++){const p=(u/8-.5)*2.6,d=new Ot(new ne(.09,.42,5),e);d.position.set(Math.sin(p)*1.08,-.2,Math.cos(p)*1.6),d.rotation.x=Math.PI,l.add(d)}return i.add(c),c},a=s(1),r=s(-1);return i.userData.open=o=>{a.rotation.x=-o*.85,r.rotation.x=o*.85},i.userData.fade=o=>{t.opacity=.32*o,e.opacity=.85*o},i.userData.open(1),i}function $l(){const i=new ge,t=[];for(let e=0;e<3;e++){const n=new Ot(new kn(.3,.025,6,28),qe(14221232,.7));i.add(n),t.push(n)}return i.userData.set=(e,n=1)=>t.forEach((s,a)=>{const r=(e*1.8+a/3)%1;s.scale.setScalar(.25+r*2.4),s.material.opacity=.7*(1-r)*n}),i}function W1(i=6){const t=new ge,e=[],n=new gn(.11,14),s=new gn(.035,8),a=qe(10215520,0);for(let r=0;r<i;r++){const o=new ge,c=r%2?1:-1;o.position.set(c*.17+Math.sin(r*.9)*.25*(r/i),.03,.5+r*.52),o.rotation.y=c*.12;const l=new Ot(n,a);l.rotation.x=-Math.PI/2,l.scale.set(.75,1.45,1),o.add(l);for(let h=0;h<4;h++){const u=new Ot(s,a);u.rotation.x=-Math.PI/2,u.position.set((h-1.5)*.055,0,-.21-Math.abs(h-1.5)*.015),o.add(u)}o.visible=!1,t.add(o),e.push(o)}return t.userData.set=(r,o=1)=>{e.forEach((c,l)=>{c.visible=r*i>l}),a.opacity=.85*o},t}function pu(){const i=new ge,t=[];for(let n=0;n<3;n++){const s=new Ot(new kn(.55,.045,6,28),qe(n===1?14220287:6281448,.7));s.position.z=-n*.3,i.add(s),t.push(s)}const e=new Ot(new qn(.16,10,8),qe(15269887,.8));return i.add(e),i.userData.set=n=>t.forEach((s,a)=>{const r=(n*2.2+a/3)%1;s.scale.setScalar(.6+r*.9),s.material.opacity=.75*(1-r*.7)}),i}function xc(){const i=new ge,t=[];for(let n=0;n<3;n++){const s=new Ot(new kn(.95-n*.2,.1+n*.03,6,22,Math.PI),qe(n===1?12580095:3121096,.7));s.rotation.x=-Math.PI/2+.5,s.position.z=-n*.25,i.add(s),t.push(s)}const e=new Ot(new gn(1,20),qe(7327976,.3));return e.rotation.x=-Math.PI/2,e.position.y=-.12,e.scale.set(1,.6,1),i.add(e),i.userData.set=n=>t.forEach((s,a)=>{s.position.y=Math.sin(n*14+a)*.06,s.scale.y=1+Math.sin(n*10+a*2)*.15}),i}function mu(){const i=new ge,t=qe(871002,0),e=new Ne({color:201756,transparent:!0,opacity:0,side:tn,depthWrite:!1,fog:!1}),n=new Ot(new qn(5.5,24,12,0,6.2832,0,Math.PI/2),e);i.add(n);const s=new Ot(new gn(5.5,32),t);s.rotation.x=-Math.PI/2,s.position.y=.04,i.add(s);const a=new Ne({color:2058810,transparent:!0,opacity:0,side:Me,depthWrite:!1,fog:!1}),r=[];for(let c=0;c<22;c++){const l=c/22*6.2832+Math.random()*.2,h=3.2+Math.random()*1.8,u=.8+Math.random()*1.8,p=new ge;p.position.set(Math.sin(l)*h,0,Math.cos(l)*h);const d=new Ot(new ne(.12,u,4),a);d.position.y=u/2,d.scale.z=.3,p.add(d),p.userData.ph=Math.random()*6,i.add(p),r.push(p)}const o=qe(8382719,0);for(let c=0;c<5;c++){const l=new Ot(new ne(.6,6,8,1,!0),o);l.position.set((c-2)*1.6,3,Math.sin(c*2)*1.5),l.rotation.z=.2-c*.08,i.add(l)}return i.userData.set=(c,l)=>{e.opacity=.82*c,t.opacity=.5*c,a.opacity=.9*c,o.opacity=.1*c*(1+Math.sin(l*3)*.3);for(const h of r)h.rotation.z=Math.sin(l*1.6+h.userData.ph)*.25;i.visible=c>.01},i.userData.set(0,0),i}function gu(){const i=new ge,t=[];for(let e=0;e<6;e++){const n=new Ot(new Ls(.9,1.05,40),qe(8380671,0));n.rotation.x=-Math.PI/2,n.position.set(Math.sin(e*2.4)*3,.03,Math.cos(e*1.7)*3),i.add(n),t.push(n)}return i.userData.set=(e,n)=>t.forEach((s,a)=>{const r=(n*.7+a/6)%1;s.scale.setScalar(.3+r*2.2),s.material.opacity=e*.4*(1-r)}),i}function vu(){const i=new ge,t=[];for(let r=0;r<=60;r++){const o=r/60,c=o*6.2832*2.6;t.push(new I(Math.sin(c)*(.95-o*.25),.1+o*2.1,Math.cos(c)*(.95-o*.25)))}const e=new su(t),n=new Ot(new mc(e,90,.13,7),new Fn({color:1014357,emissive:735834,emissiveIntensity:.6,roughness:.3,metalness:.35,transparent:!0,opacity:1}));i.add(n);const s=n.geometry.index.count,a=[];for(let r=0;r<4;r++){const o=new Ot(new kn(1.1-r*.12,.05,5,30),qe(9431295,0));o.rotation.x=-Math.PI/2+.25,o.position.y=.4+r*.5,i.add(o),a.push(o)}return i.userData.set=(r,o,c)=>{n.visible=r>.01,n.geometry.setDrawRange(0,Math.floor(s*Math.min(1,r)/3)*3),n.material.opacity=o,n.rotation.y=c*.8,a.forEach((l,h)=>{l.rotation.z=c*(6+h),l.material.opacity=o*.55,l.scale.setScalar(1+Math.sin(c*5+h)*.08)})},i.userData.set(0,0,0),i}function xu(){const i=new ge,t=[16762970,16743066,9429247,16773280],e=[],n=new Fn({color:3810840,roughness:1,transparent:!0,opacity:0});for(let a=0;a<8;a++){const r=a/8*6.2832,o=Math.sin(r)*4.6,c=Math.cos(r)*4.6,l=new Ot(new yn(.05,.06,3,6),n);l.position.set(o,1.5,c),i.add(l);for(let h=1;h<5;h++){const u=r+h/5*6.2832/8,p=Math.sin(h/5*Math.PI)*.5,d=qe(t[(a+h)%4],0);e.push(d);const g=new Ot(new qn(.12,8,6),d);g.position.set(Math.sin(u)*4.6,2.9-p,Math.cos(u)*4.6),i.add(g)}}const s=new Ot(new gn(4.4,32),qe(16751210,0));return s.rotation.x=-Math.PI/2,s.position.y=.03,i.add(s),e.push(s.material),i.userData.set=(a,r)=>{n.opacity=a,e.forEach((o,c)=>{o.opacity=a*(o===s.material?.12:.75+Math.sin(r*4+c)*.2)}),i.visible=a>.01},i.userData.set(0,0),i}function q1(){const i=document.createElement("canvas");i.width=i.height=1024;const t=i.getContext("2d");t.fillStyle="#3a241b",t.fillRect(0,0,1024,1024);for(let n=0;n<90;n++){const s=Math.random()*1024,a=Math.random()*1024,r=70+Math.random()*150,o=50+Math.random()*110,c=30+Math.random()*30;t.fillStyle=`rgb(${c+28},${c+4},${c-8})`,t.globalAlpha=.55,t.beginPath(),t.moveTo(s,a),t.lineTo(s+r,a+Math.random()*20),t.lineTo(s+r-Math.random()*25,a+o),t.lineTo(s+Math.random()*20,a+o-Math.random()*20),t.closePath(),t.fill(),t.globalAlpha=.8,t.strokeStyle="#120a07",t.lineWidth=2+Math.random()*3,t.stroke()}t.globalAlpha=1;for(let n=0;n<9e3;n++){const s=Math.random()*60;t.fillStyle=`rgba(${s+20},${s},${s*.7},.25)`,t.fillRect(Math.random()*1024,Math.random()*1024,2,2)}for(let n=0;n<40;n++){const s=Math.random()*1024,a=Math.random()*1024,r=20+Math.random()*60,o=t.createRadialGradient(s,a,0,s,a,r);o.addColorStop(0,n%3?"rgba(20,12,8,.6)":"rgba(40,50,18,.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(s-r,a-r,r*2,r*2)}const e=new g1(i);return e.colorSpace=on,e.anisotropy=8,e}function X1(i,t,e){i.background=new se(1378823),i.fog=new cc(2363658,.02);const n=new D1().load("./assets/arena.webp");n.colorSpace=on,n.wrapS=Va,n.repeat.x=4;const s=new Ot(new yn(70,70,62,64,1,!0),new Ne({map:n,side:tn,fog:!1,color:13619151}));s.position.y=5.5,i.add(s);const a=new Ot(new gn(e+2.5,72),new Fn({map:q1(),roughness:.48,metalness:.12}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a);const r=new Ot(new gn(75,48),new Fn({color:1707786,roughness:.3,metalness:.3}));r.rotation.x=-Math.PI/2,r.position.y=-.04,i.add(r);const o=new Fn({color:2759959,roughness:.9}),c=new Fn({color:2824720,roughness:.95}),l=new Fn({color:1848084,roughness:.8,side:Me});for(let g=0;g<26;g++){const v=Math.random()*6.283,m=e+2.2+Math.random()*2.5,f=.25+Math.random()*.6,b=new Ot(new pc(f,0),o);b.position.set(Math.cos(v)*m,f*.3,Math.sin(v)*m),b.rotation.set(Math.random()*3,Math.random()*3,0),b.castShadow=!0,i.add(b)}for(let g=0;g<16;g++){const v=g/16*6.283+Math.random()*.2,m=e+2.6+Math.random()*1.5,f=new Ot(new kn(.9+Math.random()*.8,.09+Math.random()*.08,6,14,Math.PI),c);f.position.set(Math.cos(v)*m,-.1,Math.sin(v)*m),f.rotation.y=Math.random()*6,f.castShadow=!0,i.add(f);for(let b=0;b<5;b++){const y=new Ot(new ne(.16,1+Math.random()*.7,4),l);y.position.set(Math.cos(v+.25)*(m+.6),.4,Math.sin(v+.25)*(m+.6)),y.rotation.set(Bs()*.9,Math.random()*6,Bs()*.9),y.scale.z=.25,i.add(y)}}for(let g=0;g<7;g++){const v=g/7*6.283+.4,m=19+Math.random()*9,f=new Ot(new yn(.9+Math.random()*.6,1.6+Math.random()*.8,26,9),c);f.position.set(Math.cos(v)*m,12.5,Math.sin(v)*m),f.rotation.z=Bs()*.08,i.add(f);for(let b=0;b<5;b++){const y=new Ot(new yn(.03,.03,5+Math.random()*8,4),l);y.position.set(Math.cos(v)*m+Bs()*4,14-Math.random()*3,Math.sin(v)*m+Bs()*4),i.add(y)}}i.add(new I1(12166550,1840402,1.7));const h=new Kl(16754026,2.3);h.position.set(-12,13,-9),h.castShadow=!0,h.shadow.mapSize.set(2048,2048);const u=h.shadow.camera;u.left=u.bottom=-15,u.right=u.top=15,u.far=50,h.shadow.bias=-5e-4,i.add(h);const p=new Kl(8365272,1.7);p.position.set(10,6,12),i.add(p);const d=[];for(let g=0;g<5;g++){const v=g/5*6.283+.6,m=Math.cos(v)*(e+1.7),f=Math.sin(v)*(e+1.7),b=new Ot(new yn(.07,.1,1.7,7),c);b.position.set(m,.85,f),b.castShadow=!0,i.add(b);const y=new Ot(new yn(.24,.1,.22,9),o);y.position.set(m,1.78,f),i.add(y);const x={p:new I(m,1.95,f),light:null};g%2===0&&(x.light=new uu(16742954,30,16,2),x.light.position.copy(x.p).setY(2.3),i.add(x.light)),d.push(x)}return{sun:h,torchLights:d.filter(g=>g.light).map(g=>g.light),update(g,v){for(const m of d)t.fire(m.p,60*g,.09,1.6,.5),m.light&&(m.light.intensity=16+Math.sin(v*17+m.p.x)*5+Math.random()*4);if(Math.random()<g*6){const m=Math.random()*6.283,f=Math.random()*14;t.embers({x:Math.cos(m)*f,y:.2,z:Math.sin(m)*f},1,.2,.5)}}}}const Bs=()=>Math.random()*2-1,Et=(i,t={})=>new Fn({color:i,roughness:.75,...t}),C=(i,t,e,n=0,s=0,a=0)=>{const r=new Ot(t,e);return r.position.set(n,s,a),r.castShadow=!0,i.add(r),r},Tt=(i,t=0,e=0,n=0)=>{const s=new ge;return s.position.set(t,e,n),i.add(s),s},Te=(i,t)=>new dc(i,t,4,10),Ht=(i,t,e,n=10,s=!1)=>new yn(i,t,e,n,1,s),mt=i=>new qn(i,14,10),ee=(i,t,e=6.2832)=>new kn(i,t,6,18,e),ie=(i,t,e)=>new I(i,t,e),Ut=Math.PI/2,Pe=Math.PI*2,sn=(i,t,e)=>i+(t-i)*e,Ue=i=>i*i*(3-2*i),oi=i=>i<0?0:i>1?1:i,K1=(i,t,e)=>oi((i-t)/(e-t)),fs=i=>i-Pe*Math.round(i/Pe),si=i=>i-Math.floor(i),_u=(i,t,e)=>{const n=fs((i-t)*Pe)/Pe;return Math.exp(-(n*n)/(e*e))},$r={spin:1,roll:1,lean:1,yaw:1},jr=new I;function er(i){const t=Object.keys(i).filter(s=>s!=="rate"),e={},n={};for(const s of t)e[s]=i[s],n[s]=0;return{cur:e,snap(s){for(const a of t)e[a]=$r[a]?fs(s[a]):s[a],n[a]=0},step(s,a,r){const o=Math.min(Math.max(a,0),.05);if(!(o>0))return;const c=s.rate*1.4,l=Math.min(10,Math.max(1,Math.ceil(o*c/.3))),h=o/l,u=c*c,p=2*r*c;for(const d of t){const g=s[d];if(g===void 0)continue;if(d==="spin"&&s.spinHard){const f=fs(g);n.spin=fs(f-e.spin)/o,e.spin=f;continue}let v=e[d],m=n[d];for(let f=0;f<l;f++){const b=$r[d]?fs(g-v):g-v;m+=(b*u-p*m)*h,v+=m*h}e[d]=$r[d]?fs(v):v,n[d]=m}}}}const _c=(i,t)=>i.damp??(t.phase===1&&i.rate>=30?.62:.8);function nr(i,t,e){const n=i.mover,s=oi(t.gnd);if(n.position.y=0,s<.001){n.position.y=t.y;return}i.root.updateMatrixWorld(!0);let a=1/0;for(const[r,o]of i.feet){const c=jr.copy(o).applyMatrix4(r.matrixWorld).y;c<a&&(a=c)}{const r=(1-oi(t.hnd))*.3;for(const[o,c]of i.hands){const l=jr.copy(c).applyMatrix4(o.matrixWorld).y+r;l<a&&(a=l)}}if(i.body)for(const[r,o]of i.body){const c=jr.copy(o).applyMatrix4(r.matrixWorld).y;c<a&&(a=c)}a-=i.root.matrixWorld.elements[13],n.position.y=sn(t.y,Math.max(e,t.y)-a,s)}const Mu={y:0,lean:.14,twist:.45,roll:0,spine:.12,head:-.05,aLx:-1,aLz:.2,eL:-1.6,aRx:-.55,aRz:-.25,eR:-1.8,legX:-.12,legZ:0,knee:.35,sc:1,spin:0,gnd:1,hnd:0,rate:16};function jl(i,t){const e={...Mu},n=i.pk,s=i.phase;let a=0;const r=c=>Object.assign(e,c),o=(c,l)=>s===0?-c*l*Ue(n):s===1?c*sn(-l,Pe,Ue(n)):c*Pe;switch(i.anim){case"idle":{const c=Math.sin(t*4.4),l=c*c,h=(1+c)/2,u=1-h;r({y:.02*(1-l),knee:.5+l*.45,legX:-.1-l*.08,legZ:c*.06,lean:.16+l*.1,roll:-c*.1,twist:.35+c*.5,spine:.1+l*.08,head:-.06-l*.06,aLx:sn(.35,-1.85,h),eL:sn(-.5,-2.2,h),aLz:sn(.35,.05,h),aRx:sn(.35,-1.85,u),eR:sn(-.5,-2.2,u),aRz:sn(-.35,-.05,u),rate:14,damp:.9});break}case"walk":{const c=i.mvF>.3?1:i.mvF<-.3?-1:0,l=si(t*1.75),h=K1(l,.26,.86),u=Math.sin(h*Math.PI),p=_u(l,.03,.13),d=Math.sin(l*Pe);r({y:u*.24,knee:.3+p*1+u*.25,legX:-.12-c*.3*(u-.5*p),legZ:c?0:d*.14,lean:.14+c*.13+p*.22,roll:d*(c?.09:.17),twist:.4+d*.35,spine:.12-d*.06,aLx:-1+d*.6-u*.35,aRx:-1-d*.6-u*.35,aLz:.3+u*.35,aRz:-.3-u*.35,eL:-1.5-p*.4,eR:-1.5-p*.4,head:-.05-p*.1,rate:22,damp:.8});break}case"block":r({aLx:-1.75,eL:-2.2,aRx:-1.75,eR:-2.2,aLz:-.2,aRz:.2,lean:-.05,spine:.32,knee:.8,head:.25,twist:.35});break;case"punchL":r(s===0?{aLx:-.3,eL:-2.3,twist:.85,knee:.6,lean:.05}:s===1?{aLx:-1.55,eL:-.05,aLz:-.1,twist:-.25,lean:.32,knee:.45,rate:40}:{aLx:-1.3,eL:-.9,twist:.1,lean:.2,rate:14});break;case"punchR":r(s===0?{aRx:-.3,eR:-2.3,twist:-.05,knee:.6,lean:.05}:s===1?{aRx:-1.55,eR:-.05,aRz:.1,twist:1.1,lean:.34,knee:.45,rate:40}:{aRx:-1.3,eR:-.9,twist:.8,lean:.2,rate:14});break;case"elbow":s===0?r({aLx:.5,eL:-1.2,twist:1.05,y:.08,knee:.9}):s===1&&r({aLx:-1.9,eL:-1.9,aLz:-.5,twist:-.55,lean:.45,y:.12,knee:.3,rate:40});break;case"spinkick":a=o(1,.55),r(s===0?{knee:1.25,lean:.25,twist:-.4,spine:.25,aLx:-1.3,aRx:-1.3,aLz:-.25,aRz:.25,eL:-2,eR:-2,legX:-.2}:s===1?{y:.48,gnd:0,lean:-1.1,knee:.05,legX:-.1,twist:0,aLz:1.25,aRz:-1.25,aLx:-.2,aRx:-.2,eL:-.3,eR:-.3,rate:40}:{knee:1-n*.5,lean:.3-n*.12,aLz:.95-n*.5,aRz:-.95+n*.5,aLx:-.6,aRx:-.6,eL:-.6,eR:-.6,twist:.2,rate:12});break;case"blocklow":r({aLx:-1.5,eL:-2.1,aRx:-1.5,eR:-2.1,aLz:-.2,aRz:.2,lean:.25,spine:.5,knee:1.55,head:.3});break;case"hopPunch":r(s===0?{y:.1+n*.25,knee:1.2-n*.4,aRx:-.3,eR:-2.3,twist:0,lean:.3}:s===1?{y:.12,aRx:-1.6,eR:-.05,aRz:.1,twist:1.1,lean:.5,knee:.4,rate:40}:{knee:.9-n*.4,lean:.3,rate:14});break;case"axe":r(s===0?{y:.15+n*.45,gnd:0,lean:-.55,legX:-1.7,knee:0,aLz:.8,aRz:-.8,rate:26}:s===1?{y:.05,gnd:0,lean:.15,legX:-.5,knee:0,aLx:.4,aRx:.4,rate:44}:{knee:1-n*.5,lean:.3});break;case"slap":s===0?r({aLx:-1.3,aLz:1.3,eL:-.4,twist:.95,lean:-.2,knee:.7}):s===1&&r({aLx:-1.5,aLz:-.7,eL:-.05,twist:-.7,lean:-.15,rate:40});break;case"meialua":a=o(-1,.5),r(s===0?{knee:1.3,lean:.55,spine:.35,twist:.5,aLx:-.9,aRx:-.9,eL:-.4,eR:-.4,hnd:.6}:s===1?{lean:1.25,spine:.3,head:-.6,twist:0,roll:.25,aLx:-1.25,aRx:-1.25,aLz:.35,aRz:-.35,eL:-.1,eR:-.1,legX:2.1,legZ:.3,knee:.05,hnd:1,rate:40}:{knee:1-n*.5,lean:.35,aLz:.8,aRz:-.8,aLx:-.7,aRx:-.7,hnd:.3*(1-n),rate:12});break;case"lowJab":r(s===0?{knee:1.5,lean:.35,aRx:-.2,eR:-2.2,twist:0}:s===1?{knee:1.6,lean:.7,spine:.35,aRx:-.9,eR:-.05,twist:1,rate:40}:{knee:1.1,lean:.4});break;case"sweep":a=o(1,.45),r(s===0?{knee:1.6,lean:.5,spine:.3,twist:-.4,aLx:-.8,aRx:-.8,eL:-.3,eR:-.3,hnd:.7}:s===1?{knee:.05,lean:1.2,spine:.2,head:-.6,twist:0,legX:-.2,legZ:1.7,aLx:-1.2,aRx:-1.2,eL:-.5,eR:-.5,hnd:1,rate:40}:{knee:1.2-n*.6,lean:.45,aLz:.7,aRz:-.7,hnd:.4*(1-n),rate:12});break;case"dodge":{const c=i.dodgeSide,l=oi(n*1.12),h=Ue(l),u=Math.sin(l*Math.PI);r(c?{roll:c*Pe*h,twist:0,lean:.08,spine:.05,head:.15,aLx:-.15,aRx:-.15,aLz:2.35,aRz:-2.35,eL:-.25,eR:-.25,legX:0,legZ:c*.45*u,knee:.25,y:.08*u,hnd:1,rate:34,damp:.78}:{lean:-Pe*h,twist:0,roll:0,spine:-.15,head:-.35,aLx:-2.85,aRx:-2.85,aLz:.25,aRz:-.25,eL:-.15,eR:-.15,legX:.15,knee:.4+.5*u,y:.18*u,hnd:1,rate:34,damp:.78});break}case"grab":s===0?r({aLx:-1.4,aRx:-1.4,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,lean:.2,twist:0,knee:.8}):s===1&&r({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.7,eR:-.7,lean:.5,twist:0,rate:40});break;case"grabHold":r({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.9,eR:-.9,lean:.45,twist:0,y:Math.abs(Math.sin(t*40))*.015,rate:30});break;case"grabThrow":a=-Ue(n)*Math.PI,r({aLx:-2.3,aRx:-2.3,eL:-.2,eR:-.2,lean:-.25,twist:0,y:.15,rate:34});break;case"whirl":a=i.st*26,e.spinHard=1,r({aLx:0,aRx:0,aLz:1.45,aRz:-1.45,eL:-.2,eR:-.2,y:.12,lean:0,twist:0,knee:.5}),s===2&&(a=i.st*26*(1-n*.5));break;case"voadora":s===0?r({knee:1.6,lean:.55,aLx:.9,aRx:.9,eL:-.4,eR:-.4,legX:-.9}):s===1?(e.gnd=0,n<.4?(a=n/.4*Pe,r({knee:1.9,legX:-1.2,lean:.2,aLz:.8,aRz:-.8,rate:30})):(a=Pe,r({lean:-1.2,knee:0,legX:0,aLx:.3,aRx:.3,aLz:1.1,aRz:-1.1,eL:-.2,eR:-.2,twist:0,rate:30}))):r({knee:1.3*(1-n)+.3,lean:.5*(1-n)});break;case"dive":r({gnd:0,lean:-.75,knee:0,legX:0,aLx:.6,aRx:.6,aLz:1.2,aRz:-1.2,eL:-.2,eR:-.2,twist:0,rate:40});break;case"vanish":a=i.st*30,e.spinHard=1,r({sc:0,rate:22,aLz:1,aRz:-1});break;case"gone":r({sc:0,rate:60});break;case"appear":a=(1-n)*8,e.spinHard=1,r({sc:1,rate:22});break;case"superstart":a=i.st*14,e.spinHard=1,r({y:.35,gnd:0,aLx:0,aRx:0,aLz:1.5,aRz:-1.5,eL:0,eR:0,knee:.9});break;case"hit":r({lean:-.4,head:-.5,spine:-.25,aLx:-.3,aRx:-.2,eL:-.8,eR:-.8,knee:.6,rate:35});break;case"air":r({gnd:0,lean:-1.05,head:-.3,knee:.7,legX:-.5,aLx:-2.2,aRx:-2.4,eL:-.3,eR:-.3,aLz:.5,aRz:-.5,y:.2});break;case"down":case"ko":r({gnd:0,y:-.84,lean:-1.52,knee:.25,legX:0,aLx:-.2,aRx:-.2,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,head:-.1,twist:0,spine:0,rate:22});break;case"getup":{const c=Ue(n);r({gnd:c,y:-.84*(1-c),lean:sn(-1.4,.4,c),knee:1.3*(1-n)+.3});break}case"win":{const c=Math.abs(Math.sin(t*6));r({y:c*.35,knee:.9-c*.8,aLx:-2.9,aRx:-2.9,aLz:.35,aRz:-.35,eL:-.2,eR:-.2,twist:0,lean:0,head:-.25});break}}return e.spin=a,e}function J1(){const i=Et(6042659,{roughness:.5}),t=Et(4663323,{roughness:.55}),e=Et(8197394,{roughness:.95,side:Me}),n=Et(4853005,{roughness:1,side:Me}),s=Et(1643027,{roughness:1,side:Me}),a=Et(10256985,{roughness:1}),r=Et(11897914,{metalness:.8,roughness:.35}),o=Et(14537398,{roughness:.6}),c=Et(8145442,{roughness:.45}),l=new Ne({color:16756800}),h=Et(13483936,{roughness:1}),u=new ge,p=Tt(u),d=Tt(p,0,1,0);C(d,mt(.17),i,0,.02,0).scale.set(1.15,.85,.9),C(d,Ht(.19,.35,.44,14,!0),e,0,-.17,0);for(let D=0;D<18;D++){const $=D/18*6.2832,j=.18+Math.random()*.36,Z=.33;C(d,new Ee(.1,j,.012),[e,n,s][D%3],Math.sin($)*Z,-.36-j/2,Math.cos($)*Z).rotation.set(-.15,$,0,"YXZ")}C(d,new Ee(.3,.5,.012),s,-.24,-.3,.16).rotation.set(.1,-.9,.15),C(d,ee(.2,.035),a,0,.05,0).rotation.x=Ut,C(d,ee(.21,.025),n,0,0,0).rotation.x=Ut+.12;for(let D=0;D<6;D++)C(d,mt(.022),o,Math.sin(D*.35-.9)*.23,.02-D%2*.05,Math.cos(D*.35-.9)*.23);C(d,mt(.11),c,-.29,-.1,.04),C(d,mt(.055),c,-.29,.03,.04),C(d,Ht(.02,.025,.05),s,-.29,.09,.04),C(d,Ht(.06,.06,.014,12),r,.09,-.14,.3).rotation.x=Ut,C(d,Ht(.02,.04,.07,8),r,.17,-.2,.27);const v=Tt(d,0,-.05,0);C(v,Te(.108,.3),i,0,-.23,0);const m=Tt(v,0,-.46,0);C(m,mt(.095),t),C(m,Te(.085,.28),i,0,-.2,0),C(m,Ht(.097,.085,.24,10),a,0,-.27,0),C(m,ee(.088,.016),e,0,-.4,0).rotation.x=Ut,C(m,ee(.086,.012),r,0,-.43,0).rotation.x=Ut,C(m,new Ee(.13,.07,.27),t,0,-.455,.06);const f=Tt(d,0,.08,0);C(f,Ht(.175,.16,.26,12),i,0,.12,0).scale.z=.8,C(f,mt(.2),i,0,.37,0).scale.set(1.35,1,.82);for(const D of[1,-1])C(f,mt(.085),i,D*.1,.4,.11).scale.set(1.1,.8,.6),C(f,mt(.09),i,D*.28,.48,0);for(let D=0;D<3;D++)for(const $ of[1,-1])C(f,mt(.04),t,$*.055,.2-D*.07,.12).scale.z=.5;const b=C(f,ee(.15,.014),e,0,.5,.02);b.rotation.x=Ut+.35;const y=C(f,ee(.19,.012),o,0,.44,.05);y.rotation.x=Ut+.55;const x=C(f,ee(.12,.012),r,0,.54,.01);x.rotation.x=Ut+.2,C(f,mt(.03),o,0,.31,.19),C(f,ee(.09,.012,2.6),h,.2,.42,.1).rotation.set(.3,.5,.2),C(f,Ht(.058,.065,.1),i,0,.6,0);const E=Tt(f,0,.71,0);C(E,mt(.115),i).scale.set(.9,1.08,.97),C(E,mt(.06),i,0,-.07,.05).scale.set(1.1,.8,1);for(const D of[1,-1])C(E,mt(.014),l,D*.042,.015,.1),C(E,ee(.026,.006),r,D*.108,-.06,0),C(E,new Ee(.05,.012,.02),s,D*.042,.04,.102).rotation.z=-D*.35;C(E,new ne(.02,.06,5),s,0,-.13,.08).rotation.x=Math.PI;for(let D=0;D<10;D++){const $=D/10*6.28;Math.cos($)>.5||C(E,Te(.016,.05),s,Math.sin($)*.1,-.01,Math.cos($)*.1)}C(E,Ht(.008,.008,.1,6),s,.035,-.065,.15).rotation.x=Ut,C(E,Ht(.02,.014,.035,8),c,.035,-.05,.2),C(E,Ht(.118,.125,.1,12),e,0,.075,0);const R=Tt(E,0,.11,0);R.rotation.set(-.35,0,-.45),C(R,Ht(.07,.118,.17,10),e,0,.07,0);const A=Tt(R,0,.15,0);A.rotation.z=-.8,C(A,Ht(.035,.07,.19,8),n,0,.08,0);const M=Tt(A,0,.17,0);M.rotation.z=-.9,C(M,Ht(.012,.035,.2,6),e,0,.09,0),C(M,ee(.022,.006),r,0,.21,0);const _=D=>{const $=Tt(f,D*.31,.49,0);C($,Te(.072,.19),i,0,-.14,0),C($,ee(.078,.013),e,0,-.12,0).rotation.x=Ut,C($,ee(.076,.008),h,0,-.2,0).rotation.x=Ut;const j=Tt($,0,-.3,0);return C(j,Te(.058,.19),i,0,-.13,0),C(j,Ht(.068,.06,.12),a,0,-.2,0),C(j,ee(.064,.012),e,0,-.13,0).rotation.x=Ut,C(j,mt(.06),t,0,-.31,0),[$,j]},[P,V]=_(1),[H,G]=_(-1),O=er(Mu),U=O.cur,Y={root:u,mover:p,feet:[[m,ie(0,-.49,-.07)],[m,ie(0,-.49,.19)]],hands:[[V,ie(0,-.37,0)],[G,ie(0,-.37,0)]],body:[[E,ie(0,.24,0)],[M,ie(0,.22,0)],[A,ie(0,.2,0)],...[0,1,2,3,4,5].map(D=>[d,ie(Math.sin(D*1.047)*.3,-.78,Math.cos(D*1.047)*.3)])]};return{root:u,cur:U,flameK:0,snap(D,$){O.snap(jl(D,$))},update(D,$,j){const Z=jl(D,j);O.step(Z,$,_c(Z,D)),p.rotation.y=U.spin+(D.spinExtra||0),p.scale.setScalar(Math.max(.001,U.sc)),u.visible=U.sc>.03,d.rotation.set(U.lean,U.twist,U.roll),f.rotation.set(U.spine,-U.twist*.6,0),E.rotation.set(U.head,-U.twist*.4,0),P.rotation.set(U.aLx,0,U.aLz),V.rotation.x=U.eL,H.rotation.set(U.aRx,0,U.aRz),G.rotation.x=U.eR,v.rotation.set(U.legX,0,U.legZ),m.rotation.x=U.knee,nr(Y,U,0);const ut=Math.sin(j*4)*.15;A.rotation.z=-.8+ut,M.rotation.z=-.9+ut*1.5,A.rotation.x=Math.cos(j*3)*.2}}}const yu={y:0,pitch:0,roll:0,yaw:0,fl:0,fr:0,hl:0,hr:0,kfl:0,kfr:0,khl:0,khr:0,tail:.3,nk:0,flame:1,gnd:1,rate:12};function Zl(i,t){const e={...yu},n=i.pk,s=i.phase,a=h=>Object.assign(e,h),r=(h,u,p)=>{if(h<u){const d=h/u;return[sn(.35,-.4,Ue(d)),Math.sin(Math.PI*d)*p]}return[sn(-.4,.35,(h-u)/(1-u)),.05]},o=(h,u,p,d,g,v)=>{const m=si(t*h*(i.mvF<-.3?-1:1)),f=_=>r(si(m+_),p,d),[b,y]=f(u[0]),[x,k]=f(u[1]),[E,R]=f(u[2]),[A,M]=f(u[3]);a({hl:b*g,khl:y,fl:x*g,kfl:k,hr:E*g,khr:R,fr:A*g,kfr:M,pitch:Math.sin(m*Pe*2)*.035*v,roll:Math.sin(m*Pe)*.05*v,nk:Math.sin(m*Pe*2+1)*.1*v,tail:.35+Math.sin(m*Pe)*.25})},c=[0,.25,.5,.75],l=[0,.5,.1,.6];switch(i.anim){case"idle":{const h=_u(si(t*.3),.5,.12);a({pitch:Math.sin(t*1.6)*.02,roll:Math.sin(t*.9)*.03,nk:Math.sin(t*1.1)*.12,tail:.3+Math.sin(t*1.7)*.25,fl:-.5*h+.25*h*Math.sin(t*9),kfl:1.1*h,khl:.08+Math.max(0,Math.sin(t*.9))*.12,rate:8,damp:.9});break}case"walk":o(1.4,c,.3,1,1,1),e.rate=18,e.damp=.85;break;case"block":a({pitch:.1,fl:-.35,fr:-.35,kfl:.3,kfr:.3,hl:.2,hr:.2,khl:.3,khr:.3,nk:.2,flame:.7});break;case"hoofL":a(s===0?{pitch:-.28,fl:-.9,kfl:1.6,nk:-.15}:s===1?{pitch:-.2,fl:-1.45,kfl:.05,nk:.15,rate:38}:{pitch:-.05,fl:-.3,kfl:.4,rate:9});break;case"hoofR":a(s===0?{pitch:-.28,fr:-.9,kfr:1.6,nk:-.15}:s===1?{pitch:-.2,fr:-1.45,kfr:.05,nk:.15,rate:38}:{pitch:-.05,fr:-.3,kfr:.4,rate:9});break;case"stomp":a(s===0?{pitch:-.85,fl:-.5,fr:-.8,kfl:1.5,kfr:1.3,hl:-.3,hr:-.3,khl:.7,khr:.7,nk:-.3,flame:1.6}:s===1?{pitch:.12,fl:-.45,fr:-.45,kfl:.2,kfr:.2,nk:.3,rate:40}:{pitch:.1,kfl:.45,kfr:.45,nk:.2,rate:8});break;case"blocklow":a({pitch:.22,fl:-.6,fr:-.6,kfl:1,kfr:1,hl:.3,hr:.3,khl:.7,khr:.7,nk:.3,flame:.6});break;case"check":a(s===0?{pitch:.12,hl:.25,hr:.25,khl:.4,khr:.4,nk:.25}:s===1?{pitch:-.16,fl:-.5,fr:-.5,kfl:1.3,kfr:1.3,nk:-.2,rate:40}:{rate:10});break;case"chargeAtk":s===0?a({pitch:-.2,hl:-.25,hr:-.25,khl:.6,khr:.6,nk:.3,fl:-.6+Math.sin(t*30)*.5,kfl:1+Math.cos(t*30)*.4,flame:1.2+n*1.4,rate:26}):s===1?(o(3,l,.45,1.2,1.25,2),e.pitch-=.06,e.nk+=.25,e.flame=2.8,e.rate=30):a({pitch:-.15,fl:-.6,fr:-.6,kfl:.1,kfr:.1,hl:.3,hr:.3,khl:.5,khr:.5,nk:-.2,flame:1.2,rate:10});break;case"rear":if(s===0){const h=Math.sin(t*14);a({pitch:-1*Ue(Math.min(1,n*1.4)),hl:-.35,hr:-.35,khl:.8,khr:.8,fl:-.6+h*.4,fr:-.9-h*.4,kfl:1.5,kfr:1.3,nk:-.3,tail:.9,flame:1.8})}else a(s===1?{pitch:.2,fl:-.5,fr:-.5,kfl:.4,kfr:.4,khl:.3,khr:.3,nk:.35,rate:42}:{pitch:.1*(1-n),kfl:.3*(1-n),kfr:.3*(1-n),nk:.2*(1-n),rate:8});break;case"scrape":a(s===0?{pitch:.14,fr:.2,kfr:1.3,nk:.2}:s===1?{pitch:.24,fr:-1.05,kfr:.1,nk:.3,rate:38}:{rate:10});break;case"lowsweep":a(s===0?{pitch:.2,yaw:.55*n,fl:-.4,fr:-.4,kfl:.8,kfr:.8}:s===1?{pitch:.3,yaw:-.6,fl:-1.15,fr:-1.15,kfl:.05,kfr:.05,rate:34}:{pitch:.12,rate:10});break;case"dodge":{const h=Math.sin(n*Math.PI);o(2.6,c,.35,1,1.1,1.5),e.roll=-i.dodgeSide*.28*h,e.pitch=i.dodgeSide?-.05:-.25*h,e.rate=28;break}case"grab":s===0?a({pitch:-.5,fl:-.9,fr:-.9,kfl:1.3,kfr:1.3,khl:.4,khr:.4}):s===1&&a({pitch:-.32,fl:-1.3,fr:-1.3,kfl:.3,kfr:.3,rate:40});break;case"grabHold":a({pitch:-.4,fl:-1.2,fr:-1.2,kfl:.6,kfr:.6,khl:.4,khr:.4,flame:1.6,rate:30});break;case"grabThrow":a({pitch:.22,fl:-.4,fr:-.4,nk:.3,flame:1.4,rate:40});break;case"coice":{e.yaw=i.kickTurn?Math.PI:0,s===0?a({pitch:-.12,fl:-.25,fr:-.25,hl:-.5,hr:-.5,khl:1.3,khr:1.3,nk:.25,rate:20}):s===1?a({pitch:.55,hl:1.9,hr:1.9,khl:0,khr:0,fl:-.3,fr:-.3,kfl:.15,kfr:.15,nk:.35,rate:40,tail:1.6}):(a({pitch:.08,khl:.6,khr:.6,kfl:.25,kfr:.25,nk:.1,rate:10}),n>=.45&&(e.yaw=0));break}case"fire":a(s===0?{pitch:-.8*Math.sin(Math.min(1,n*1.3)*Math.PI)-.08,fl:-.5,fr:-.7,kfl:1.4,kfr:1.2,khl:.5,khr:.5,nk:-.3,flame:1+n*2.2}:s===1?{pitch:.1,fl:-.4,fr:-.4,hl:.25,hr:.25,nk:.4,flame:3.2,rate:30}:{flame:1.4,rate:10});break;case"dust":a({pitch:.12,fl:-.7+Math.sin(t*42)*.6,kfl:1+Math.cos(t*42)*.5,nk:.2,rate:40});break;case"superstart":case"superprep":a({pitch:-.1,fl:-.5+Math.sin(t*16)*.5,kfl:1.1,nk:-.2+Math.sin(t*8)*.1,flame:1.5+n*2.5});break;case"charge":o(3,l,.45,1.2,1.25,2),e.pitch-=.06,e.nk+=.25,e.flame=4,e.rate=30;break;case"hit":a({pitch:-.14,roll:.16,hl:.2,hr:.2,khl:.3,khr:.3,nk:-.35,rate:30,flame:.8});break;case"air":a({gnd:0,roll:1.1,y:-.2,fl:-.6,fr:.4,hl:.5,hr:-.4,kfl:.8,khr:.8,flame:.7});break;case"down":case"ko":a({gnd:0,roll:1.45,y:-.92,fl:-.3,fr:.25,hl:.3,hr:-.2,kfl:.5,kfr:.9,khl:.4,khr:.9,nk:.3,tail:1,flame:i.anim==="ko"?.25:.6,rate:18});break;case"getup":{const h=Ue(n);a({gnd:h,roll:1.45*(1-h),y:-.92*(1-h),kfl:1-n,kfr:1-n,khl:.6*(1-n),khr:.6*(1-n),rate:14});break}case"win":{const h=.5+.5*Math.sin(t*2.4);a({pitch:-.55-h*.35,hl:-.3,hr:-.3,khl:.6,khr:.6,fl:-.6+Math.sin(t*9)*.4,fr:-.6-Math.sin(t*9)*.4,kfl:1.2,kfr:1.2,nk:-.3,flame:2.4});break}}return e}function Y1(){const i=Et(3350810,{roughness:.55}),t=Et(1774096,{roughness:.7}),e=Et(4207659,{metalness:.85,roughness:.4,emissive:16730640,emissiveIntensity:0}),n=Et(7213840,{roughness:.95,side:Me}),s=Et(4000523,{roughness:1,side:Me}),a=Et(920073,{roughness:1}),r=Et(2893346,{metalness:.5,roughness:.35}),o=Et(7823407,{metalness:.85,roughness:.35}),c=Et(6032653,{roughness:.4,emissive:3146756}),l=new Ne({color:16738840}),h=new ge,u=Tt(h),p=Tt(u,0,1.38,-.75),d=C(p,Te(.44,1),i,0,0,.72);d.rotation.x=Ut,d.scale.x=.95,C(p,mt(.5),i,0,-.02,1.3).scale.set(1,1.06,1),C(p,mt(.49),i,0,.03,.12);for(const D of[1,-1])C(p,mt(.22),i,D*.3,-.12,1.38),C(p,mt(.27),i,D*.27,-.1,.1),C(p,mt(.16),t,D*.2,-.3,1.55);const g=Tt(p,0,.22,1.5);g.rotation.x=.62,C(g,Ht(.21,.31,.62,14),i,0,.25,0),C(g,ee(.2,.04),t,0,.56,0).rotation.x=Ut,C(g,new gn(.19,16),l,0,.565,0).rotation.x=-Ut;for(let D=0;D<6;D++)C(g,new Ee(.03,.16,.1),a,0,.1+D*.08,-.26+D*.012).rotation.x=-.4;const v=new Oe;v.position.set(0,.62,0),g.add(v);const m=new uu(16741408,30,11,2);m.position.set(0,.9,0),g.add(m);const f=C(p,ee(.37,.05),e,0,.12,1.58);f.rotation.x=-.35,C(p,ee(.07,.015),e,0,-.3,1.82).rotation.y=Ut,C(p,Ht(.035,.1,.16,10),o,0,-.47,1.82),C(p,ee(.475,.035),e,0,0,1.02),C(p,ee(.455,.035),e,0,0,.36);for(const D of[1,-1]){for(let $=0;$<9;$++)C(p,ee(.04,.012),e,D*.44,.22-Math.sin($/8*Math.PI)*.1,.36+$*.083).rotation.set($%2?0:Ut,Ut*($%2),0);for(const $ of[1.02,.36])C(p,Ht(.006,.006,.16,4),e,D*.47,-.22,$),C(p,Ht(.03,.08,.13,10),o,D*.47,-.35,$);for(let $=0;$<9;$++){const j=.2+Math.random()*.42;C(p,new Ee(.015,j,.085),$%3?n:s,D*(.46-Math.random()*.02),.02-j/2,.38+$*.078).rotation.z=D*.12}for(let $=0;$<4;$++)C(p,new Ee(.012,.028,.16+Math.random()*.16),c,D*.43,.05-$*.09,.02+Math.random()*.12).rotation.set(.5,D*.35,0);C(p,new Ee(.012,.03,.25),c,D*.47,.1,1.3).rotation.x=.6}const b=C(p,new yn(.475,.475,.74,14,1,!0,Ut,Math.PI),n,0,.02,.7);b.rotation.x=Ut;const y=(D,$)=>{const j=Tt(p,D,-.18,$);C(j,Ht(.155,.1,.62,9),i,0,-.3,0);const Z=Tt(j,0,-.6,0);return C(Z,mt(.1),t),C(Z,Ht(.085,.072,.5,8),t,0,-.25,0),C(Z,Ht(.075,.15,.22,9),a,0,-.44,0),C(Z,Ht(.115,.14,.12,10),r,0,-.56,0),[j,Z]},[x,k]=y(.3,1.3),[E,R]=y(-.3,1.3),[A,M]=y(.3,.1),[_,P]=y(-.3,.1),V=Tt(p,0,.22,-.3);C(V,Ht(.1,.02,1.15,7),a,0,-.55,0),C(V,Ht(.06,.01,.9,5),a,.04,-.5,.03);const H=er(yu),G=H.cur,O=new I(0,2.4,0),U=[];for(const D of[k,R,M,P])U.push([D,ie(0,-.62,.09)],[D,ie(0,-.62,-.09)]);const Y={root:h,mover:u,feet:U,hands:[]};return{root:h,cur:G,flameK:1,flamePos:O,flame:v,snap(D,$){H.snap(Zl(D,$))},update(D,$,j){const Z=Zl(D,j);H.step(Z,$,Z.damp??.8),u.rotation.y=G.yaw+(D.spinExtra||0),p.rotation.set(G.pitch,0,G.roll),x.rotation.x=G.fl-G.pitch*.5,E.rotation.x=G.fr-G.pitch*.5,A.rotation.x=G.hl-G.pitch,_.rotation.x=G.hr-G.pitch,k.rotation.x=G.kfl,R.rotation.x=G.kfr,M.rotation.x=G.khl,P.rotation.x=G.khr,V.rotation.x=G.tail,V.rotation.z=Math.sin(j*2.3)*.12,g.rotation.x=.62+G.nk,nr(Y,G,-.04),this.flameK=G.flame,m.intensity=G.flame*(26+Math.sin(j*23)*5+Math.random()*5),e.emissiveIntensity=Math.max(0,(G.flame-1.3)*.9),v.getWorldPosition(O)}}}function Mc(i,t,e,n){const s=er(t),a=s.cur,r={root:i.root,mover:i.spinG,feet:i.feet,hands:i.hands,body:[[i.head,ie(0,.22,0)]]};return{root:i.root,cur:a,flameK:0,snap(o,c){s.snap(e(o,c))},update(o,c,l){const h=e(o,l);s.step(h,c,_c(h,o)),i.spinG.rotation.y=a.spin+(o.spinExtra||0),i.spinG.scale.setScalar(Math.max(.001,a.sc)),i.root.visible=a.sc>.03,i.hips.rotation.set(a.lean,a.twist,a.roll),i.spine.rotation.set(a.spine,-a.twist*.6,0),i.head.rotation.set(a.head,-a.twist*.4+a.hy,0),i.shL.rotation.set(a.aLx,0,a.aLz),i.elL.rotation.x=a.eL,i.shR.rotation.set(a.aRx,0,a.aRz),i.elR.rotation.x=a.eR;const u=a.lean*a.lc;i.lL.rotation.set(a.lLx-u,0,a.lLz),i.kL.rotation.x=a.kL,i.lR.rotation.set(a.lRx-u,0,a.lRz),i.kR.rotation.x=a.kR,n&&n(a,o,l),nr(r,a,0)}}}const bn=(i,t,e)=>{const n=i.pk;return i.phase===0?-t*e*Ue(n):i.phase===1?t*sn(-e,Pe,Ue(n)):t*Pe};function ir(i,t,e,n,s){const a=t.pk,r=t.phase;switch(t.anim){case"idle":{const o=Math.sin(e*s.breath);return n({spine:i.spine+o*.03,aLx:i.aLx+o*.05,aRx:i.aRx-o*.05}),0}case"walk":{const o=Math.sin(e*s.gait),c=Math.cos(e*s.gait);return n({lLx:o*.55,lRx:-o*.55,kL:.25+Math.max(0,c)*.9,kR:.25+Math.max(0,-c)*.9,lean:i.lean+.1,tail:o*.35}),0}case"block":return n({aLx:-1.75,eL:-2.2,aRx:-1.75,eR:-2.2,aLz:-.2,aRz:.2,lean:-.02,spine:i.spine+.15,kL:i.kL+.25,kR:i.kR+.25,head:i.head+.2}),0;case"blocklow":return n({aLx:-1.3,eL:-2,aRx:-1.3,eR:-2,aLz:-.2,aRz:.2,lean:.3,spine:i.spine+.3,lLx:-1,kL:1.9,lRx:.1,kR:1.6,head:i.head+.2,tailP:.05}),0;case"grab":return r===0?n({aLx:-1.4,aRx:-1.4,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,lean:.2,twist:0,jaw:.5}):r===1&&n({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.7,eR:-.7,lean:.45,twist:0,lLx:-.5,lRx:.5,rate:40}),0;case"grabHold":return n({aLx:-1.5,aRx:-1.5,aLz:-.3,aRz:.3,eL:-.9,eR:-.9,lean:.4,twist:0,y:Math.abs(Math.sin(e*40))*.015,jaw:.7,rate:30}),0;case"grabThrow":return n({aLx:-2.3,aRx:-2.3,eL:-.2,eR:-.2,lean:-.2,twist:0,y:.1,rate:34}),-Ue(a)*Math.PI;case"vanish":return n({sc:0,rate:16,aLz:1,aRz:-1}),i.spinHard=1,t.st*22;case"gone":return n({sc:0,rate:60}),0;case"appear":return n({sc:1,rate:22}),i.spinHard=1,(1-a)*8;case"hit":return n({lean:-.35,head:i.head-.4,spine:i.spine-.3,aLx:-.3,aRx:-.2,eL:-.8,eR:-.8,kL:.7,kR:.5,jaw:.6,tail:.4,rate:35}),0;case"air":return n({gnd:0,lean:-1.05,lc:0,head:-.3,spine:0,lLx:-.6,kL:.9,lRx:-.2,kR:.5,aLx:-2.2,aRx:-2.4,eL:-.3,eR:-.3,aLz:.5,aRz:-.5,y:.2,jaw:.7,tailP:0}),0;case"down":case"ko":return n({gnd:0,y:-s.lie,lean:-1.52,lc:0,spine:0,head:-.05,hy:0,lLx:-.1,kL:.2,lRx:.15,kR:.35,lLz:.15,lRz:-.15,aLx:-.2,aRx:-.2,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,twist:0,jaw:t.anim==="ko"?.5:.15,tailP:0,rate:22}),0;case"getup":{const o=Ue(a);return n({gnd:o,y:-s.lie*(1-o),lean:sn(-1.4,i.lean,o),lc:o,lLx:-.8*(1-a),kL:1.4*(1-a)+.3,kR:1.2*(1-a)+.3}),0}}return null}const Su={y:0,lean:.28,twist:.35,roll:0,spine:.12,head:-.12,aLx:-1.1,aLz:.25,eL:-1.5,aRx:-.55,aRz:-.3,eR:-1.6,lLx:-.5,lLz:.07,kL:.95,lRx:-.1,lRz:-.07,kR:.8,lc:1,jaw:0,tail:0,tailP:0,sc:1,spin:0,gnd:1,hnd:0,hy:0,rate:16},$1={breath:4.2,gait:10,lie:.84},Ql=i=>{if(i=si(i),i<.42){const e=i/.42;return[sn(.3,-.8,Ue(e)),.8+Math.sin(Math.PI*e)*1.2-.05*e]}const t=(i-.42)/.58;return[sn(-.8,.3,t),.75+Math.sin(Math.PI*t)*.2]};function j1(i,t){const e={...Su},n=i.pk,s=i.phase,a=o=>Object.assign(e,o);let r=null;switch(i.anim){case"idle":{const o=Math.sin(t*3.2),c=Math.tanh(Math.sin(t*1.3)*5)*.45+Math.sin(t*4.1)*.05;a({lean:.32+o*.03,spine:.14+o*.03,hy:c,head:-.14-Math.abs(c)*.1,twist:.35+c*.25,kL:1+o*.06,kR:.85+o*.06,aLx:-1.15+o*.06,aRx:-.5-o*.06,eL:-1.6+c*.2,rate:12,damp:.88}),r=0;break}case"walk":{const o=i.mvF<-.3?-1:1,c=si(t*1.7*o),l=Math.sin(c*Pe),[h,u]=Ql(c),[p,d]=Ql(c+.5);a({lLx:h-.1,kL:u,lRx:p-.1,kR:d,lean:.38,spine:.14,twist:.3-l*.22,roll:l*.04,aLx:-1.2+l*.25,aRx:-.6-l*.3,eL:-1.6,eR:-1.5,hy:Math.sin(t*2.3)*.35,head:-.16,rate:20,damp:.82}),r=0;break}case"dodge":{const o=i.dodgeSide,c=Math.sin(n*Math.PI),l=Ue(oi(n*1.4));a(o?{lean:.95,spine:.3,head:-.55,hnd:1,twist:.3+o*.6*c-o*.25*(1-l),roll:-o*.2*c,aLx:-1.35,aRx:-1.35,aLz:.45,aRz:-.45,eL:-.35,eR:-.35,lLx:-1,kL:1.85,lRx:.35,kR:1.3,lLz:o*.2*c,lRz:o*.2*c,rate:30}:{lean:.75,spine:.25,head:-.5,hnd:1,twist:.1,aLx:-1.4,aRx:-1.4,aLz:.3,aRz:-.3,eL:-.3,eR:-.3,lLx:-.9,kL:1.8,lRx:-.6,kR:1.7,y:.06*c,rate:30}),r=0;break}case"whistle":{const o=Math.abs(Math.sin(t*22));a({aRx:-2,aRz:.35,eR:-2.4,head:-.28,aLx:-.6,aLz:1,eL:-.4,lean:.08,spine:.05,twist:.15,kL:.7,kR:.6,y:o*.02,rate:18}),r=0;break}case"rootsPull":{const o=Math.sin(t*40)*.03;a({aLx:-2.8,aRx:-2.8,aLz:.5,aRz:-.5,eL:-.6+o,eR:-.6-o,lean:-.2,spine:-.05,head:-.3,twist:o,kL:.65,kR:.6,lLx:-.4,lRx:.2,rate:24}),r=0;break}case"rootsSlam":a({aLx:-.4,aRx:-.4,aLz:.2,aRz:-.2,eL:-.1,eR:-.1,lean:.8,spine:.35,head:-.5,twist:0,kL:1.8,kR:1.6,lLx:-.9,lRx:.3,hnd:1,rate:40}),r=0;break;default:r=ir(e,i,t,a,$1)}if(r===null)switch(r=0,i.anim){case"palm":a(s===0?{aLx:-.3,eL:-2.3,twist:.8}:s===1?{aLx:-1.55,eL:-.05,aLz:-.1,twist:-.25,lean:.32,lLx:-.6,rate:40}:{aLx:-1.3,eL:-.8,rate:12});break;case"elbowR":s===0?a({aRx:.4,eR:-2.2,twist:-.1}):s===1&&a({aRx:-1.7,eR:-2.1,aRz:.55,twist:1.15,lean:.38,lLx:-.6,rate:40});break;case"heel":a(s===0?{lRx:-1.2,kR:1.7,lean:-.1,twist:.1}:s===1?{lRx:-1.45,kR:.05,lean:-.35,twist:0,aLz:.8,aRz:-.8,rate:42}:{kR:1,rate:12});break;case"spinkick":r=bn(i,1,.5),a(s===0?{lRx:-.7,kR:1.5,lean:-.1,kL:1.2,aLz:.9,aRz:-.9}:s===1?{lean:-.5,lRx:-1.6,kR:0,lLx:-.2,kL:.5,aLz:1.2,aRz:-1.2,aLx:0,aRx:0,eL:-.3,eR:-.3,rate:40}:{kR:.9-n*.3,rate:12});break;case"stepIn":s===0?a({lean:.38,kL:1.2,kR:1.1,aRx:-.3,eR:-2.2,twist:0}):s===1&&a({lean:.5,aRx:-1.5,eR:-.35,aRz:.1,twist:1,lLx:-.7,kL:.9,lRx:.65,kR:.3,rate:40});break;case"axe":a(s===0?{lean:-.3,lRx:-2.4,kR:0,kL:.7,twist:0,aLz:.8,aRz:-.8,rate:26}:s===1?{lean:.15,lRx:-.55,kR:0,twist:0,aLx:.4,aRx:.4,rate:44}:{kR:.8-n*.3});break;case"backKick":s===0?a({lLx:-.9,kL:1.6,lean:-.2,twist:.1}):s===1&&a({lLx:-1.75,kL:0,lean:-.45,twist:0,aLx:.3,aRx:.3,aLz:.7,aRz:-.7,rate:40});break;case"wheel":r=bn(i,-1,.5),a(s===0?{lean:.55,spine:.35,kL:1.3,kR:1.3,aLx:-.6,aRx:-.6,eL:-.2,eR:-.2}:s===1?{lean:-.6,roll:.3,lRx:-1.7,kR:0,lLx:-.2,kL:.5,aLx:0,aRx:0,aLz:1.45,aRz:-1.45,eL:-.1,eR:-.1,rate:40}:{kR:.9-n*.4,rate:12});break;case"lowStep":a(s===0?{lLx:-.9,kL:1.8,lRx:-.6,kR:1.6,lean:.25}:s===1?{lLx:-.9,kL:1.9,lRx:-1.15,kR:.1,lean:.05,twist:.1,aLz:.6,aRz:-.6,rate:40}:{kL:1.3});break;case"sweep":r=bn(i,1,.4),a(s===0?{lLx:-1,kL:2,lRx:-.8,kR:1.2,lean:.3,aLx:-.9,aRx:-.9,eL:-.3,eR:-.3,hnd:.6}:s===1?{lLx:-1.1,kL:2.2,lRx:-1.5,kR:0,lean:.45,aLx:-1.2,aRx:-.4,aLz:.3,aRz:-.9,eL:-.2,eR:-.2,hnd:1,rate:40}:{kL:1.4,hnd:.3*(1-n)});break;case"blade":a(s===0?{aRx:-2.7,aRz:-.6,eR:-.3,twist:-.45,lean:-.05}:s===1?{aRx:-1,aRz:.75,eR:-.05,twist:1.05,lean:.35,lLx:-.6,rate:42}:{aRx:-.9,aRz:.5,eR:-.4,twist:.7*(1-n)+.4});break;case"roots":a(s===0?{aRx:-2.9,eR:-.15,aLx:-2.9,eL:-.15,lean:-.12,twist:0,kL:.6,kR:.6}:{lean:.75,spine:.4,twist:0,lLx:-1,kL:1.9,lRx:.35,kR:1.6,aRx:-.95,eR:-.05,aLx:-.95,eL:-.05,hnd:s===1?1:1-n,rate:34});break;case"superstart":a({aRx:-2,aRz:.35,eR:-2.4,head:-.28,aLx:-.6,aLz:1,eL:-.4,lean:.08,twist:.15,kL:.7,kR:.6});break;case"superprep":{const o=Math.abs(Math.sin(t*9));a({y:o*.1,lean:.1,twist:0,aLx:-2.9,aRx:-2.9,aLz:.4,aRz:-.4,eL:-.3-o*.4,eR:-.3-o*.4,lLx:-.6,kL:1.2,lRx:.2,kR:1,head:-.3});break}case"leap":a({lean:.65,twist:.2,lLx:-1,kL:1.45,lRx:.3,kR:1.7,aLx:-1.4,aRx:-.7,aLz:.5,aRz:-.5,eL:-.2,eR:-.2,rate:24});break;case"dive":a({lean:.95,twist:.15,spine:.22,lRx:.5,kR:1.4,lLx:-.8,kL:1.6,aLx:-1.4,aRx:-1.35,aLz:.55,aRz:-.5,eL:-.2,eR:-.2,hnd:1,rate:35});break;case"win":{const o=Math.abs(Math.sin(t*5));a({y:o*.2,kL:.8-o*.6,kR:.8-o*.6,lLx:-.2,lRx:.2,aLx:-2.9,aRx:-.6,aLz:.3,aRz:-.9,eL:-.2,eR:-1.6,twist:0,lean:0,head:-.25});break}}return e.spin=r,e}function Z1(){const i=Et(9723962,{roughness:.55}),t=Et(7226664,{roughness:.6}),e=Et(4160044,{roughness:.9,side:Me}),n=Et(2379807,{roughness:1,side:Me}),s=Et(8367674,{roughness:.9,side:Me}),a=Et(5917222,{roughness:1}),r=Et(14272410,{roughness:.6}),o=Et(3038506,{roughness:1}),c=Et(14829850,{roughness:.7,emissive:10496512,emissiveIntensity:.55}),l=Et(16753198,{roughness:.6,emissive:12605952,emissiveIntensity:.7}),h=new Ne({color:10354522}),u=Et(1840144,{roughness:1}),p=new ge,d=Tt(p),g=Tt(d,0,1,0);C(g,mt(.18),i,0,.02,0).scale.set(1.2,.85,.9),C(g,ee(.21,.03),a,0,.06,0).rotation.x=Ut;for(let O=0;O<16;O++){const U=O/16*6.2832,Y=.26+Math.random()*.18,D=.25,$=C(g,new ne(.075,Y,4),[e,n,s][O%3],Math.sin(U)*D,-.06-Y/2,Math.cos(U)*D);$.rotation.set(-.32,U,Math.PI,"YXZ"),$.scale.z=.25}for(let O=0;O<5;O++)C(g,mt(.026),r,Math.sin(O*.4-.8)*.23,.04,Math.cos(O*.4-.8)*.23);const v=O=>{const U=Tt(g,O*.12,-.05,0);C(U,Te(.095,.3),i,0,-.23,0);const Y=Tt(U,0,-.46,0);C(Y,mt(.085),t),C(Y,Te(.075,.28),i,0,-.2,0),C(Y,ee(.08,.014),a,0,-.28,0).rotation.x=Ut,C(Y,ee(.078,.012),s,0,-.33,0).rotation.x=Ut,C(Y,new Ee(.12,.07,.25),t,0,-.455,-.085),C(Y,mt(.052),t,0,-.445,.045).scale.set(1,.8,1);for(let D=-1;D<=1;D++)C(Y,mt(.03),i,D*.04,-.465,-.215).scale.set(1,.7,1.3);return[U,Y]},[m,f]=v(1),[b,y]=v(-1),x=Tt(g,0,.08,0);C(x,Ht(.17,.155,.26,12),i,0,.12,0).scale.z=.8,C(x,mt(.19),i,0,.36,0).scale.set(1.3,1,.8);for(const O of[1,-1])C(x,mt(.08),i,O*.1,.39,.1).scale.set(1.1,.8,.6),C(x,mt(.085),i,O*.27,.47,0);for(let O=0;O<3;O++)for(const U of[1,-1])C(x,mt(.038),t,U*.05,.2-O*.07,.115).scale.z=.5;const k=C(x,ee(.2,.016),a,0,.34,0);k.rotation.set(Ut-.2,.75,0),k.scale.set(1.1,.8,1);for(let O=0;O<9;O++){const U=(O/8-.5)*2.2;C(x,mt(.024),r,Math.sin(U)*.15,.5-Math.cos(U)*.06,.05+Math.cos(U)*.11)}for(const O of[1,-1]){const U=C(x,new Ee(.03,.12,.01),o,O*.12,.3,.165);U.rotation.z=O*.5}C(x,Ht(.055,.062,.1),i,0,.59,0);for(const O of[1,-1])for(let U=0;U<3;U++){const Y=C(x,new ne(.07,.22,4),[e,s,n][U],O*(.3+U*.015),.52,-.05+U*.05);Y.rotation.set(0,0,-O*(1.9+U*.2)),Y.scale.z=.3}const E=Tt(x,0,.7,0);C(E,mt(.115),i).scale.set(.92,1.05,.97),C(E,mt(.058),i,0,-.07,.05).scale.set(1.1,.8,1);for(const O of[1,-1])C(E,mt(.016),h,O*.042,.012,.1),C(E,new Ee(.05,.012,.02),u,O*.042,.04,.102).rotation.z=-O*.3,C(E,new ne(.03,.1,4),i,O*.118,.01,-.01).rotation.z=-O*1.2,C(E,new Ee(.035,.01,.01),o,O*.06,-.03,.1);C(E,new Ee(.05,.008,.01),u,0,-.085,.1);const R=[];for(let O=0;O<16;O++){const U=O/16*6.2832,Y=Math.cos(U)<.3,D=.2+Math.random()*.16+(Y?.1:0),$=.075,j=Tt(E,Math.sin(U)*$,.07,Math.cos(U)*$-.01);j.rotation.set(-.35-(Y?.45:0)+Math.cos(U)*.5,0,-Math.sin(U)*.55),C(j,new ne(.05,D,5),O%3?c:l,0,D/2,0),R.push(j)}for(let O=0;O<5;O++){const U=Tt(E,(O-2)*.035,.12,-.02);U.rotation.x=-.5-Math.random()*.3,C(U,new ne(.045,.34,5),O%2?l:c,0,.17,0),R.push(U)}C(E,ee(.112,.014),a,0,.055,0).rotation.x=Ut-.1;const A=O=>{const U=Tt(x,O*.3,.48,0);C(U,Te(.068,.19),i,0,-.14,0),C(U,ee(.074,.013),a,0,-.16,0).rotation.x=Ut;const Y=Tt(U,0,-.3,0);return C(Y,Te(.055,.19),i,0,-.13,0),C(Y,Ht(.065,.058,.1),n,0,-.2,0),C(Y,ee(.062,.01),s,0,-.14,0).rotation.x=Ut,C(Y,mt(.057),t,0,-.31,0),[U,Y]},[M,_]=A(1),[P,V]=A(-1),H=R.map(O=>O.rotation.x),G=[[f,ie(0,-.49,.045)],[f,ie(0,-.49,-.215)],[y,ie(0,-.49,.045)],[y,ie(0,-.49,-.215)]];return Mc({root:p,spinG:d,hips:g,spine:x,head:E,shL:M,elL:_,shR:P,elR:V,lL:m,kL:f,lR:b,kR:y,feet:G,hands:[[_,ie(0,-.37,0)],[V,ie(0,-.37,0)]]},Su,j1,(O,U,Y)=>{for(let D=0;D<R.length;D++)R[D].rotation.x=H[D]+Math.sin(Y*7+D*1.7)*.1})}const bu={y:0,lean:.3,twist:.2,roll:0,spine:.42,head:-.45,aLx:-1.2,aLz:.45,eL:-1.4,aRx:-.9,aRz:-.45,eR:-1.5,lLx:-.35,lLz:.12,kL:.7,lRx:.15,lRz:-.12,kR:.65,lc:1,jaw:.06,tail:0,tailP:-.22,sc:1,spin:0,gnd:1,hnd:0,hy:0,rate:12},Q1={breath:2.6,gait:7.5,lie:.68};function tv(i,t){const e={...bu},n=i.pk,s=i.phase,a=o=>Object.assign(e,o);let r=null;switch(i.anim){case"idle":{const o=Math.sin(t*2.2);a({spine:.42+o*.03,roll:Math.sin(t*1.1)*.04,hy:Math.sin(t*.7)*.3,tail:Math.sin(t*1.8)*.35,eL:-1.4+Math.sin(t*3.1)*.22,eR:-1.5+Math.sin(t*3.1+1.5)*.22,aLz:.45+Math.sin(t*1.4)*.08,aRz:-.45-Math.sin(t*1.4+1)*.08,jaw:.06+Math.pow(Math.max(0,Math.sin(t*.8)),8)*.45,rate:10,damp:.88}),r=0;break}case"walk":{const o=i.mvF<-.3?-1:1,c=si(t*1.25*o),l=Math.sin(c*Pe),h=Math.cos(c*Pe);a({lLx:l*.45-.2,lRx:-l*.45,kL:.55+Math.max(0,h)*.75,kR:.55+Math.max(0,-h)*.75,roll:l*.12,tail:-l*.6,twist:.2+l*.15,aLx:-1.2-l*.25,aRx:-.9+l*.25,lean:.36,hy:-l*.12,rate:14}),r=0;break}case"dodge":{const o=i.dodgeSide,c=Math.sin(n*Math.PI);a(o?{twist:.2+o*.6*c,roll:-o*.3*c,lean:.55,spine:.5,lLx:-.8,kL:1.3,lRx:.1,kR:1.2,tail:o*.9*c,tailP:.1,aLz:.9,aRz:-.9,eL:-.8,eR:-.8,rate:28}:{lean:.1,y:.12*c,kL:1,kR:1,aLx:-1.7,aRx:-1.7,eL:-2,eR:-2,tail:.6*c,jaw:.4,rate:28}),r=0;break}case"nmHold":a({jaw:1.1,aLx:-1.7,aRx:-1.7,aLz:-.1,aRz:.1,eL:-1,eR:-1,lean:.2,spine:.3,head:-.7,tail:Math.sin(t*6)*.5,tailP:.15,rate:20}),r=0;break;case"nmSnap":a({jaw:0,lean:.7,spine:.6,head:-.85,aLx:-.6,aRx:-.6,aLz:.5,aRz:-.5,eL:-.3,eR:-.3,lLx:-.7,kL:1,tail:.6,tailP:.3,rate:40}),r=0;break;default:r=ir(e,i,t,a,Q1)}if(r===null)switch(r=0,i.anim){case"clawL":a(s===0?{aLx:-2.3,aLz:.7,eL:-.9,twist:.7,jaw:.3,lean:.2}:s===1?{aLx:-1.35,aLz:-.5,eL:-.1,twist:-.35,lean:.42,jaw:.5,rate:36}:{aLx:-1.1,aLz:.2,eL:-.8,twist:.1,lean:.4,rate:10});break;case"clawR":a(s===0?{aRx:-2.3,aRz:-.7,eR:-.9,twist:-.3,jaw:.3,lean:.2}:s===1?{aRx:-1.35,aRz:.5,eR:-.1,twist:1,lean:.44,jaw:.5,rate:36}:{aRx:-1,aRz:-.2,eR:-.8,twist:.5,lean:.4,rate:10});break;case"tailSwing":r=bn(i,1,.45),a(s===0?{lean:.35,kL:1,kR:1,tail:-.7,tailP:.1,aLz:.8,aRz:-.8}:s===1?{lean:.4,kL:.9,kR:.9,tail:.3,tailP:.22,aLz:1,aRz:-1,rate:30}:{tail:.5*(1-n),rate:12});break;case"tailWhip":r=bn(i,-1,.45),a(s===0?{lean:.5,tail:.7,tailP:.5,spine:.5}:s===1?{lean:.6,spine:.55,tail:-.3,tailP:.75,aLz:.9,aRz:-.9,rate:30}:{tailP:.4*(1-n),rate:12});break;case"tailSweep":r=bn(i,1,.4),a(s===0?{lean:.2,lLx:-.9,kL:1.7,lRx:-.3,kR:1.5,tail:-.7,tailP:-.25}:s===1?{lean:.15,lLx:-.9,kL:1.8,lRx:-.3,kR:1.6,tail:.3,tailP:-.3,aLz:.8,aRz:-.8,hnd:.5,rate:30}:{kL:1.1,kR:1,rate:12});break;case"snap":a(s===0?{lean:.05,spine:.2,head:-.1,jaw:.75,kL:1,kR:1}:s===1?{lean:.6,spine:.6,head:-.8,jaw:0,lLx:-.6,lRx:.6,aLx:.4,aRx:.4,rate:40}:{jaw:.15,rate:10});break;case"bite":a(s===0?{lean:-.05,spine:.1,head:-.35-n*.2,jaw:1.05,aLx:-1.6,aRx:-1.6,aLz:.9,aRz:-.9,eL:-.5,eR:-.5}:s===1?{lean:.6,spine:.6,head:-.8,jaw:0,lLx:-.6,lRx:.6,aLx:-1.3,aRx:-1.3,aLz:-.2,aRz:.2,rate:44}:{jaw:.1,lean:.35,rate:10});break;case"lowClaw":a(s===0?{lean:.4,lLx:-.9,kL:1.7,lRx:-.2,kR:1.5,aRx:-1.9,aRz:-.6,eR:-.8}:s===1?{lean:.6,spine:.55,lLx:-.9,kL:1.8,lRx:-.2,kR:1.6,aRx:-.75,aRz:.4,eR:-.05,twist:.9,rate:38}:{kL:1.1,rate:12});break;case"claws":if(s===0)a({aLx:-2.2,aRx:-2.2,aLz:.7,aRz:-.7,eL:-.9,eR:-.9,jaw:.5,lean:.15,kL:.9,kR:.9});else if(s===1){const o=Math.sin(n*3*Math.PI);a({lean:.45,aLx:-1.6-o*.6,aLz:.1-o*.5,eL:-.5+o*.4,aRx:-1.6+o*.6,aRz:-.1-o*.5,eR:-.5-o*.4,twist:.25+o*.8,jaw:.4,lLx:-.5,lRx:.5,rate:44})}else a({aLx:-1,aRx:-1.4,eL:-.6,eR:-.9,twist:-.2,lean:.45,rate:10});break;case"cast":a(s===0?{aLx:-2.8,aRx:-2.8,aLz:.5-n*.4+Math.sin(t*12)*.3,aRz:-.5+n*.4-Math.sin(t*12+1)*.3,eL:-.4+Math.sin(t*9)*.3,eR:-.4-Math.sin(t*9)*.3,lean:-.05,spine:.1,head:-.5,twist:0,jaw:.5,y:.02}:s===1?{aLx:-1.5,aRx:-1.5,aLz:-.15,aRz:.15,eL:-.05,eR:-.05,lean:.45,twist:0,jaw:.9,lLx:-.5,lRx:.5,rate:40}:{aLx:-1.3,aRx:-1.3,eL:-.4,eR:-.4,twist:0,lean:.3});break;case"veil":a({aLx:-1.7,aRx:-1.7,aLz:s===0?-.5:.9,aRz:s===0?.5:-.9,eL:s===0?-1.9:-.3,eR:s===0?-1.9:-.3,twist:0,lean:.05,spine:.2,head:-.25,rate:30});break;case"superstart":case"superprep":{const o=Math.sin(t*14);a({twist:0,lean:0,spine:.1,head:-.55,aLx:-2.8,aRx:-2.8,aLz:.55+o*.12,aRz:-.55-o*.12,eL:-.5+Math.sin(t*9)*.3,eR:-.5-Math.sin(t*9)*.3,jaw:.8,tail:o*.4,tailP:.2});break}case"leap":case"dive":a({gnd:0,lean:-.5,lc:0,aLx:-2.2,aRx:-2.2,jaw:.9});break;case"win":{const o=Math.sin(t*3);a({twist:0,lean:0,spine:.12,head:-.6,aLx:-2.6,aRx:-2.6,aLz:.7,aRz:-.7,eL:-.6,eR:-.6,jaw:.5+o*.4,tail:o*.6,tailP:.3,y:Math.abs(o)*.05});break}}return e.spin=r,e}function ev(){const i=Et(2786424,{roughness:.5}),t=Et(1530716,{roughness:.6}),e=Et(11128730,{roughness:.65}),n=Et(1001299,{roughness:.9,side:Me}),s=Et(601914,{roughness:1,side:Me}),a=Et(13279804,{metalness:.8,roughness:.32}),r=Et(15657695,{roughness:.85}),o=Et(15920344,{roughness:.4}),c=Et(15129792,{roughness:.4}),l=Et(4854838,{roughness:.6}),h=new Ne({color:16765498}),u=new Ne({color:1182212}),p=new Ne({color:10116351}),d=new ge,g=Tt(d),v=Tt(g,0,.86,0);C(v,mt(.27),i,0,.02,0).scale.set(1.15,.9,1.05),C(v,Ht(.3,.5,.52,16,!0),n,0,-.26,0),C(v,ee(.5,.022),a,0,-.52,0).rotation.x=Ut;for(let Z=0;Z<10;Z++){const ut=Z/10*6.2832;C(v,new ne(.09,.2,4),s,Math.sin(ut)*.47,-.6,Math.cos(ut)*.47).rotation.set(Math.PI,ut,0)}C(v,ee(.3,.035),a,0,0,0).rotation.x=Ut,C(v,mt(.05),p,0,0,.31).scale.z=.5;const m=Z=>{const ut=Tt(v,Z*.17,-.04,0);C(ut,Te(.12,.2),i,0,-.18,0);const at=Tt(ut,0,-.38,0);C(at,mt(.1),t),C(at,Te(.085,.22),i,0,-.18,0),C(at,new Ee(.2,.08,.34),t,0,-.4,.09);for(let q=-1;q<=1;q++)C(at,new ne(.028,.12,5),c,q*.065,-.41,.3).rotation.x=Ut;return[ut,at]},[f,b]=m(1),[y,x]=m(-1),k=[];let E=v;for(let Z=0;Z<3;Z++){const ut=Tt(E,0,Z?0:-.04,Z?-.48:-.2),at=[.17,.12,.075][Z],q=[.12,.075,.012][Z];C(ut,Ht(at,q,.5,9),Z===1?t:i,0,0,-.25).rotation.x=Ut;for(let lt=0;lt<2;lt++)C(ut,new ne(.04-Z*.008,.12-Z*.02,4),t,0,at*.85-lt*.03,-.12-lt*.24);k.push(ut),E=ut}const R=Tt(v,0,.08,0);C(R,mt(.26),i,0,.2,0).scale.set(1.2,1.1,.95),C(R,mt(.2),e,0,.16,.1).scale.set(1,1.15,.7),C(R,mt(.24),i,0,.46,-.02).scale.set(1.35,.85,.9),C(R,Ht(.3,.31,.2,14,!0),n,0,.12,0).scale.z=.92;const A=C(R,Ht(.2,.38,.2,12,!0),n,0,.52,-.02);A.scale.z=.85,C(R,ee(.37,.018),a,0,.43,-.02).rotation.x=Ut,C(R,ee(.2,.02),a,0,.62,-.02).rotation.x=Ut,C(R,mt(.045),p,0,.5,.3).scale.z=.5;for(let Z=0;Z<4;Z++)C(R,new ne(.045,.12,4),t,0,.25+Z*.11,-.25);const M=Tt(R,0,.7,.06);C(M,mt(.19),i).scale.set(1.05,.82,1.1);const _=C(M,Ht(.1,.17,.44,10),i,0,-.02,.34);_.rotation.x=Ut,_.scale.set(1.15,1,.5);for(const Z of[1,-1]){C(M,mt(.065),i,Z*.11,.11,.06),C(M,mt(.038),h,Z*.125,.12,.1),C(M,mt(.018),u,Z*.135,.12,.132).scale.set(.5,1.2,.5),C(M,mt(.022),t,Z*.045,.035,.54),C(M,ee(.035,.008),a,Z*.19,-.05,-.02);for(let ut=0;ut<5;ut++)C(M,new ne(.016,.055,4),o,Z*(.15-ut*.016),-.075,.2+ut*.075).rotation.x=Math.PI}const P=Tt(M,0,-.09,.04),V=C(P,Ht(.085,.15,.44,10),e,0,-.025,.28);V.rotation.x=Ut,V.scale.set(1.1,1,.32),C(P,new Ee(.2,.012,.36),l,0,.012,.26);for(const Z of[1,-1])for(let ut=0;ut<4;ut++)C(P,new ne(.015,.05,4),o,Z*(.135-ut*.016),.03,.22+ut*.08);const H=[];for(let Z=0;Z<11;Z++){const ut=(Z/10-.5)*3.6,at=.5+Math.random()*.3,q=Tt(M,Math.sin(ut)*.17,.08,-.05-Math.cos(ut)*.13);q.rotation.set(.25+Math.cos(ut)*.25,0,Math.sin(ut)*.28),C(q,Te(.04,at),r,0,-at/2,0),H.push(q)}C(M,mt(.17),r,0,.07,-.07).scale.set(1.05,.7,.95),C(M,ee(.15,.016),a,0,.12,-.02).rotation.x=Ut-.25,C(M,mt(.03),p,0,.15,.12);const G=Z=>{const ut=Tt(R,Z*.37,.48,0);C(ut,mt(.1),i),C(ut,Te(.078,.2),i,0,-.16,0);const at=Tt(ut,0,-.34,0);C(at,Te(.064,.2),t,0,-.14,0),C(at,ee(.07,.014),a,0,-.22,0).rotation.x=Ut,C(at,mt(.075),i,0,-.32,0).scale.set(1,.9,.8);for(let q=-1;q<=1;q++)C(at,new ne(.02,.15,5),c,q*.045,-.43,.02).rotation.set(Math.PI+.25,0,q*.25);return[ut,at]},[O,U]=G(1),[Y,D]=G(-1),$=H.map(Z=>Z.rotation.x),j=[[b,ie(0,-.44,-.08)],[b,ie(0,-.44,.26)],[x,ie(0,-.44,-.08)],[x,ie(0,-.44,.26)]];return Mc({root:d,spinG:g,hips:v,spine:R,head:M,shL:O,elL:U,shR:Y,elR:D,lL:f,kL:b,lR:y,kR:x,feet:j,hands:[[U,ie(0,-.45,0)],[D,ie(0,-.45,0)]]},bu,tv,(Z,ut,at)=>{P.rotation.x=Z.jaw;for(let q=0;q<3;q++)k[q].rotation.y=Z.tail*(.3+q*.15)+Math.sin(at*1.7-q*1.1)*(.16+q*.08),k[q].rotation.x=(q?Z.tailP*.45:Z.tailP*.5+Z.lean*(1-2*Z.lc))+Math.sin(at*1.3-q)*.05;for(let q=0;q<H.length;q++)H[q].rotation.x=$[q]-Z.head*.6-Z.spine*.5+Math.sin(at*2+q)*.04})}const Eu={y:0,lean:.06,twist:.25,roll:0,spine:.05,head:-.05,hy:0,aLx:-.5,aLz:.35,eL:-.9,aRx:-.4,aRz:-.35,eR:-1,lc:1,tb:0,tl:0,tw:.12,tz:0,wf:2.4,hair:0,mouth:0,glow:0,arc:0,film:1,sc:1,spin:0,gnd:1,hnd:0,rate:12},nv={breath:2.2,gait:6,lie:.9};function th(i,t){const e={...Eu},n=i.pk,s=i.phase,a=o=>Object.assign(e,o);let r=null;switch(i.anim){case"idle":{const o=Math.sin(t*1.6);a({spine:.05+o*.03,roll:Math.sin(t*.9)*.05,twist:.25+Math.sin(t*.7)*.1,aLx:-.5+o*.12,aRx:-.4-o*.12,aLz:.35+Math.sin(t*1.3)*.08,aRz:-.35-Math.sin(t*1.3+1)*.08,eL:-.9+Math.sin(t*2.1)*.15,eR:-1+Math.sin(t*2.1+1.4)*.15,hair:.1+Math.sin(t*.8)*.1,y:.04+o*.03,tw:.16,wf:2.4,rate:8,damp:.9}),r=0;break}case"walk":{const o=i.mvF<-.3?-1:1,c=Math.sin(t*5);a({lean:.16*o,roll:c*.06,twist:.25+c*.12,tw:.34,wf:7*o,tz:c*.25,aLx:-.3-c*.2,aRx:-.3+c*.2,aLz:.5,aRz:-.5,eL:-.6,eR:-.6,hair:.45,y:.07+Math.abs(c)*.03,rate:14}),r=0;break}case"dodge":{const o=i.dodgeSide,c=Math.sin(n*Math.PI);a(o?{roll:-o*.45*c,twist:.25+o*.5*c,tz:o*1*c,tw:.4,wf:9,aLz:.9,aRz:-.9,eL:-.4,eR:-.4,hair:.7,rate:28}:{lean:-.3*c,tb:.6*c,tw:.35,wf:9,aLx:-1.4,aRx:-1.4,eL:-.6,eR:-.6,hair:.6,rate:28}),r=0;break}case"submerge":a({gnd:0,y:-2.6*Ue(n),lean:.1,twist:0,aLx:-2.8,aRx:-2.8,aLz:.2,aRz:-.2,eL:-.2,eR:-.2,tw:.5,wf:10,hair:1,film:1.7,rate:22}),r=Ue(n)*3;break;case"emerge":a({gnd:Ue(n),y:-2.2*(1-Ue(n)),twist:0,aLx:-2.4*(1-n)-.4,aRx:-2.4*(1-n)-.4,aLz:.5,aRz:-.5,hair:1-n*.7,film:1.7,tw:.45,wf:8,rate:26}),r=0;break;case"iaraSing":{const o=Math.sin(t*3);a({head:-.42,spine:-.15,lean:-.1,twist:0,aLx:-2.5,aRx:-2.5,aLz:.75+o*.1,aRz:-.75-o*.1,eL:-.3,eR:-.3,mouth:1,glow:1.5,hair:.9+o*.1,tw:.3,wf:4,y:.3+o*.05,film:1.5,rate:14}),r=0;break}case"iaraCoil":{const o=Math.sin(t*6);a({lean:.3,twist:0,tl:-1.1,tb:.7,tz:o*.2,tw:.25,wf:6,aLx:-1.6,aRx:-1.6,aLz:.3,aRz:-.3,eL:-.5,eR:-.5,hair:.6,mouth:.4,glow:.6,y:.45,film:1.5,rate:18}),r=0;break}case"iaraHurl":a({lean:.45,twist:-.7,spine:.25,tl:.8,tz:-.6,tw:.4,wf:9,aLx:-1.5,aRx:-1.5,aLz:.1,aRz:-.1,eL:-.05,eR:-.05,hair:1,film:1.5,rate:32}),r=0;break;case"grabbed":case"rooted":a({lean:-.25,head:-.3,aLx:-.4,aRx:-.3,eL:-1,eR:-1,tw:.3,wf:8,rate:20}),r=0;break;default:r=ir(e,i,t,a,nv)}if(r===null)switch(r=0,i.anim){case"finL":a(s===0?{aLx:-1.9,aLz:.9,eL:-1.2,twist:.7,lean:.05,tz:-.3}:s===1?{aLx:-1.5,aLz:-.4,eL:-.1,twist:-.5,lean:.25,tz:.35,hair:.4,rate:38}:{aLx:-.9,aLz:.2,eL:-.8,twist:0,lean:.15,rate:10});break;case"finR":a(s===0?{aRx:-1.9,aRz:-.9,eR:-1.2,twist:-.3,tz:.3}:s===1?{aRx:-1.5,aRz:.4,eR:-.1,twist:.9,lean:.25,tz:-.35,hair:.4,rate:38}:{aRx:-.9,aRz:-.2,eR:-.8,twist:.3,lean:.15,rate:10});break;case"tailWhip":r=bn(i,-1,.5),a(s===0?{lean:.2,tb:.4,tz:.5,twist:.5,aLz:.8,aRz:-.8,hair:.3}:s===1?{lean:.35,spine:.2,tb:-.5,tl:1,tz:-.4,y:.35,aLz:1.1,aRz:-1.1,eL:-.3,eR:-.3,hair:1,tw:.3,rate:30}:{tl:.3*(1-n),lean:.2,rate:12});break;case"surge":a(s===0?{lean:-.1,tb:.5,aLx:-.8,aRx:-.8,aLz:.6,aRz:-.6,eL:-1.6,eR:-1.6,twist:0}:s===1?{lean:.5,spine:.2,tb:-.3,tw:.5,wf:12,aLx:-1.5,aRx:-1.5,aLz:.1,aRz:-.1,eL:-.1,eR:-.1,twist:0,hair:.9,rate:36}:{lean:.2,rate:10});break;case"charge":a(s===0?{lean:-.2,tb:.8,tw:.2,aLx:-.3,aRx:-.3,aLz:.8,aRz:-.8,eL:-1.4,eR:-1.4,twist:0,hair:.3}:s===1?{lean:.85,lc:.6,spine:.1,head:-.5,tb:-.4,tw:.6,wf:16,aLx:-2.6,aRx:-2.6,aLz:.15,aRz:-.15,eL:-.05,eR:-.05,twist:0,hair:1,y:.2,rate:32}:{lean:.3,tb:.2,rate:10});break;case"retreat":a(s===0?{lean:-.25,tb:.4,twist:-.4,tz:.6,aLz:.9,aRz:-.9}:s===1?{lean:-.2,twist:.7,tz:-1,tl:-.5,tw:.4,wf:12,aLz:.7,aRz:-1.2,eR:-.2,hair:.8,rate:36}:{lean:-.05,rate:10});break;case"waterArc":r=bn(i,1,.35),a(s===0?{twist:.8,lean:-.05,aLx:-2.6,aRx:-2.2,aLz:.6,aRz:-.2,eL:-.4,eR:-.4,tb:.3}:s===1?{twist:-.5,lean:.3,spine:.2,aLx:-1,aRx:-1.3,aLz:-.3,aRz:-.8,eL:-.1,eR:-.1,tz:.7,tw:.4,arc:1,hair:.8,rate:32}:{arc:0,twist:0,rate:10});break;case"tailScrape":a(s===0?{lean:.2,tb:.7,twist:.6,tz:-.8}:s===1?{lean:.4,spine:.2,tb:.9,twist:-.7,tz:1.1,tw:.3,wf:12,aLz:.9,aRz:-.6,hnd:.2,rate:38}:{tb:.5,rate:10});break;case"aquaSweep":r=bn(i,1,.4),a(s===0?{lean:.3,tb:1,tz:-.6,aLz:.8,aRz:-.8}:s===1?{lean:.45,spine:.2,tb:1.1,tz:.9,tw:.3,aLz:1.2,aRz:-1.2,eL:-.2,eR:-.2,arc:1,hair:.7,rate:30}:{tb:.5*(1-n),arc:0,rate:12});break;case"sing":a(s===0?{head:-.38,spine:-.12,lean:-.1,twist:0,aLx:-.9,aRx:-.9,aLz:-.5,aRz:.5,eL:-1.9,eR:-1.9,mouth:.5,glow:n*1.2,hair:.5*n,tw:.22,y:.1*n}:s===1?{head:-.15,spine:.1,lean:.15,twist:0,aLx:-1.6,aRx:-1.6,aLz:.6,aRz:-.6,eL:-.2,eR:-.2,mouth:1,glow:1.5,hair:.9,y:.1,rate:30}:{mouth:.3*(1-n),glow:.4*(1-n),twist:0,aLx:-1,aRx:-1,eL:-.6,eR:-.6});break;case"current":a(s===0?{twist:.9,lean:.05,tb:.5,tz:-.6,aLx:-.6,aRx:-.4,aLz:1,aRz:.4,eL:-1.2,eR:-1.4,hair:.3,film:1.3}:s===1?{twist:-.3,lean:.5,spine:.3,tb:.6,tl:.3,tz:.5,aLx:-1.1,aRx:-1.1,aLz:.2,aRz:-.2,eL:-.1,eR:-.1,hair:.6,arc:.8,film:1.6,rate:38}:{twist:0,lean:.25,aLx:-.8,aRx:-.8,arc:0,rate:10});break;case"superstart":case"superprep":{const o=Math.sin(t*9);a({head:-.4,spine:-.1,twist:0,lean:-.05,aLx:-2.6,aRx:-2.6,aLz:.5+o*.15,aRz:-.5-o*.15,eL:-.4,eR:-.4,mouth:.8,glow:1.2,hair:1,tw:.35,wf:6,y:.15,film:1.6});break}case"win":{const o=Math.sin(t*2);a({head:-.3,twist:0,aLx:-1.8+o*.2,aRx:-1.6-o*.2,aLz:1,aRz:-1,eL:-.4,eR:-.4,mouth:.6+o*.3,glow:.6,hair:.5+o*.2,tw:.3,wf:3,y:.12+o*.04,film:1.3});break}}return(i.anim==="air"||i.anim==="down"||i.anim==="ko"||i.anim==="getup")&&(e.tb=-.9,e.tl=0,e.film=i.anim==="getup"?n:0),e.spin=r,e}function iv(){const i=Et(10119752,{roughness:.5}),t=Et(1014357,{roughness:.32,metalness:.35,emissive:735834,emissiveIntensity:.35}),e=Et(675644,{roughness:.4,metalness:.3,emissive:402490,emissiveIntensity:.3}),n=Et(4177824,{roughness:.3,metalness:.4,emissive:1731226,emissiveIntensity:.45}),s=Et(4175560,{roughness:.25,metalness:.2,transparent:!0,opacity:.85,side:Me,emissive:871018,emissiveIntensity:.5}),a=Et(461068,{roughness:.5,metalness:.15}),r=Et(15260096,{roughness:.4}),o=Et(16052458,{roughness:.2,metalness:.3}),c=Et(15899320,{roughness:.6,side:Me}),l=Et(3107642,{roughness:.9,side:Me}),h=Et(7223862,{roughness:.5}),u=new Ne({color:9433343}),p=(J,it)=>new Ne({color:J,transparent:!0,opacity:it,depthWrite:!1,blending:Wi,side:Me,fog:!1}),d=new ge,g=Tt(d),v=Tt(g,0,1.05,0),m=Tt(d,0,.03,0),f=p(7327976,.26),b=C(m,new gn(.95,28),f);b.rotation.x=-Ut,b.castShadow=!1;const y=[];for(let J=0;J<2;J++){const it=C(m,new Ls(.72,.78,32),p(12580095,.3),0,.01,0);it.rotation.x=-Ut,it.castShadow=!1,y.push(it)}C(v,mt(.2),t,0,-.02,0).scale.set(1.15,.8,.9),C(v,Ht(.19,.21,.14,14),i,0,.09,0).scale.z=.82;for(let J=0;J<14;J++){const it=J/14*Pe,pt=C(v,mt(.05),J%2?n:t,Math.sin(it)*.2,.06+J%3*.02,Math.cos(it)*.165);pt.scale.set(1,.6,.4),pt.rotation.y=it}for(let J=0;J<10;J++){const it=J/10*Pe,pt=.18+Math.random()*.12,Jt=C(v,new ne(.05,pt,4),l,Math.sin(it)*.21,-.02-pt/2,Math.cos(it)*.18);Jt.rotation.set(-.2,it,Math.PI,"YXZ"),Jt.scale.z=.3}const x=.3,k=[.2,.175,.145,.11,.075],E=[];let R=v;for(let J=0;J<5;J++){const it=Tt(R,0,J?-x:-.05,0);if(E.push(it),C(it,Te(k[J],Math.max(.05,x-k[J]*.8)),J%2?t:e,0,-x/2,0).scale.z=.82,C(it,mt(k[J]*.72),n,0,-x/2,k[J]*.42).scale.set(1,2,.5),J>0&&J<4){const pt=C(it,new ne(.06,.2,3),s,0,-x/2,-k[J]*.85);pt.rotation.x=-2.3,pt.scale.x=.25}if(J===3)for(const pt of[1,-1]){const Jt=C(it,new ne(.06,.22,3),s,pt*k[J],-x*.4,0);Jt.rotation.z=pt*2.3,Jt.scale.z=.2}R=it}const A=Tt(E[4],0,-x,0);for(const J of[1,-1]){const it=J*(Math.PI-.55),pt=C(A,new ne(.17,.58,4),s,-Math.sin(it)*.27,Math.cos(it)*.27,0);pt.rotation.z=it,pt.scale.z=.18}const M=Tt(v,0,.1,0);C(M,Ht(.16,.19,.26,12),i,0,.12,0).scale.z=.78,C(M,mt(.19),i,0,.36,0).scale.set(1.2,.95,.78);for(const J of[1,-1])C(M,mt(.085),r,J*.085,.37,.12).scale.set(1,.85,.5),C(M,mt(.08),i,J*.25,.46,0);C(M,ee(.17,.008),o,0,.37,0).rotation.x=Ut;for(let J=0;J<11;J++){const it=(J/10-.5)*2.4;C(M,mt(J%3?.02:.03),J%3?o:r,Math.sin(it)*.15,.52-Math.cos(it)*.07,.04+Math.cos(it)*.11)}C(M,Ht(.055,.062,.1),i,0,.6,0);const _=Tt(M,0,.7,0);C(_,mt(.112),i).scale.set(.9,1.06,.96),C(_,mt(.055),i,0,-.07,.045).scale.set(1.05,.8,1);for(const J of[1,-1])C(_,mt(.017),u,J*.04,.012,.098).scale.set(1.2,.8,.6),C(_,new ne(.03,.09,3),s,J*.11,0,-.01).rotation.z=-J*1.3;const P=C(_,mt(.022),h,0,-.072,.098);P.scale.set(1.3,.5,.5),C(_,mt(.124),a,0,.03,-.02).scale.set(1,.95,1.02);const V=[];for(let J=0;J<15;J++){const it=Math.PI+(J/14-.5)*3.4,pt=.36+Math.random()*.1,Jt=.34+Math.random()*.16,Wt=.05+Math.random()*.025,he=Tt(_,Math.sin(it)*.1,.04,Math.cos(it)*.1);he.rotation.z=Math.sin(it)*.3,C(he,Te(Wt,pt),a,0,-pt/2,0).scale.z=.55;const N=Tt(he,0,-pt,0);C(N,new ne(Wt*1.1,Jt,5),a,0,-Jt/2,0).rotation.x=Math.PI,V.push([he,N,.12+Math.random()*.1+Math.max(0,-Math.cos(it))*.1,Math.random()*6])}const H=Tt(_,.09,.09,.03);for(let J=0;J<6;J++){const it=C(H,new ne(.03,.08,3),c,Math.sin(J)*.03,0,Math.cos(J)*.03);it.rotation.set(Math.cos(J)*.9,0,-Math.sin(J)*.9),it.scale.z=.3}C(H,mt(.018),Et(16769658,{roughness:.5}));const G=J=>{const it=Tt(M,J*.27,.47,0);C(it,Te(.06,.2),i,0,-.14,0),C(it,ee(.066,.014),n,0,-.1,0).rotation.x=Ut;const pt=Tt(it,0,-.3,0);C(pt,Te(.05,.19),i,0,-.13,0);const Jt=C(pt,new ne(.06,.26,3),s,J*.02,-.1,-.07);return Jt.rotation.x=.3,Jt.scale.x=.2,C(pt,ee(.055,.01),o,0,-.22,0).rotation.x=Ut,C(pt,mt(.05),i,0,-.3,0).scale.set(.8,1.1,.6),[it,pt]},[O,U]=G(1),[Y,D]=G(-1),$=p(9431295,0),j=C(g,new kn(1,.07,6,24,Math.PI),$);j.castShadow=!1,j.visible=!1;const Z=[];for(let J=0;J<3;J++){const it=C(_,new kn(.1,.012,4,20),p(13170431,0),0,-.06,.16);it.castShadow=!1,Z.push(it)}const ut=er(Eu),at=ut.cur,q=[.05,.12,.32,.85,1.3],lt=[.05,.15,.3,.4,.3],ht={root:d,mover:g,hands:[],body:[[_,ie(0,.2,0)]],feet:[[E[2],ie(0,-x,0)],[E[3],ie(0,-x*.5,0)],[E[3],ie(0,-x,0)],[E[4],ie(0,-x*.5,0)],[E[4],ie(0,-x,0)],[A,ie(0,-.25,0)]]};let rt=0;return{root:d,cur:at,flameK:0,snap(J,it){ut.snap(th(J,it))},update(J,it,pt){const Jt=th(J,pt);ut.step(Jt,it,_c(Jt,J)),rt+=Math.max(0,it)*at.wf,g.rotation.y=at.spin+(J.spinExtra||0),g.scale.setScalar(Math.max(.001,at.sc)),d.visible=at.sc>.03,v.rotation.set(at.lean,at.twist*.25,at.roll),M.rotation.set(at.spine,at.twist*.75,0),_.rotation.set(at.head,-at.twist*.5+at.hy,0),O.rotation.set(at.aLx,0,at.aLz),U.rotation.x=at.eL,Y.rotation.set(at.aRx,0,at.aRz),D.rotation.x=at.eR;const Wt=at.lean*at.lc;for(let te=0;te<5;te++){const Ft=Math.sin(rt-te*1.05)*at.tw*(.5+te*.25);E[te].rotation.x=q[te]+at.tb*lt[te]+Ft*.6+(te===0?at.tl-Wt:0),E[te].rotation.z=at.tz*(.15+te*.1)+Math.sin(rt*.5-te*.9)*at.tw*.3*te}A.rotation.x=Math.sin(rt-5.2)*at.tw*.9;for(const[te,Ft,qt,kt]of V)te.rotation.x=Math.max(-.2,qt+at.hair*.9-at.head*.7-at.spine*.6-at.lean*.6)+Math.sin(pt*1.8+kt)*(.04+at.hair*.06),Ft.rotation.x=.1+at.hair*.5+Math.sin(pt*2.3+kt)*(.06+at.hair*.1);P.scale.y=.5+oi(at.mouth)*1.6;const he=Math.max(0,at.glow);for(let te=0;te<3;te++){const Ft=si(pt*1.7+te/3),qt=Z[te];qt.visible=he>.05,qt.visible&&(qt.position.z=.16+Ft*.55,qt.scale.setScalar(1+Ft*2.5),qt.material.opacity=Math.min(1,he)*(1-Ft)*.8)}j.visible=at.arc>.03,j.visible&&($.opacity=Math.min(1,at.arc)*.7,J.anim==="waterArc"?(j.position.set(0,.55,.75),j.rotation.set(0,0,0),j.scale.setScalar(1.25)):(j.position.set(0,.2,J.anim==="current"?1:.3),j.rotation.set(-Ut,0,pt*7),j.scale.setScalar(J.anim==="current"?.9:1.7))),nr(ht,at,0),g.position.y+=.08*oi(at.gnd);const N=Math.max(0,at.film);if(m.visible=N>.03,m.visible){f.opacity=.24*Math.min(1.6,N),b.scale.setScalar(.85+N*.15+Math.sin(pt*2)*.04);for(let te=0;te<2;te++){const Ft=si(pt*.6+te*.5);y[te].scale.setScalar(.5+Ft*(.7+N*.3)),y[te].material.opacity=(1-Ft)*.32*Math.min(1.5,N)}}}}}const wu={y:0,lean:.05,twist:.2,roll:0,spine:.05,head:-.05,aLx:-.3,aLz:.15,eL:-.5,aRx:-.35,aRz:-.15,eR:-.6,lLx:-.15,lLz:.06,kL:.35,lRx:.05,lRz:-.06,kR:.3,lc:1,jaw:0,tail:0,tailP:0,tf:0,dol:0,hat:0,glint:0,sc:1,spin:0,gnd:1,hnd:0,hy:0,rate:14},sv={breath:2.8,gait:9,lie:.84};function av(i,t){const e={...wu},n=i.pk,s=i.phase,a=o=>Object.assign(e,o);let r=null;switch(i.anim){case"idle":{const o=Math.sin(t*2.2);a({roll:o*.06,twist:.2+Math.sin(t*1.1)*.15,hy:-Math.sin(t*1.1)*.1,lLx:-.15+o*.08,lRx:.05-o*.08,kL:.35+Math.max(0,o)*.2,kR:.3+Math.max(0,-o)*.2,aLx:-.3+o*.06,aRx:-.35-o*.06,y:Math.abs(o)*.015,rate:10,damp:.88}),r=0;break}case"walk":{const o=Math.sin(t*9),c=Math.cos(t*9);a({lLx:o*.5,lRx:-o*.5,kL:.25+Math.max(0,c)*.8,kR:.25+Math.max(0,-c)*.8,lLz:.06+Math.max(0,o)*.14,lRz:-.06-Math.max(0,-o)*.14,roll:o*.08,twist:.2+o*.22,aLx:-.3-o*.35,aRx:-.35+o*.35,aLz:.25,aRz:-.25,y:Math.abs(c)*.035,head:-.05-o*.04,rate:16}),r=0;break}case"dodge":{const o=i.dodgeSide,c=Math.sin(n*Math.PI);o?(a({roll:-o*.2*c,lean:.1,aLz:.9,aRz:-.9,eL:-.3,eR:-.3,lLx:-.4,kL:.7,lRx:.3,kR:.5,rate:30}),r=-o*Pe*Ue(n)):(a({lean:-.25*c,aLx:-.6,aRx:-.6,aLz:.6,aRz:-.6,lLx:.4,kL:.5,rate:28}),r=0);break}case"dance":i.cphase===0?(a({lean:.05,roll:i.dodgeSide*.15,aLx:-.2,aLz:1.3,eL:-.2,aRx:-2.6,aRz:-.3,eR:-1.7,lLx:-.6,kL:1,lRx:.3,kR:.3,y:.06,rate:30}),r=i.dodgeSide*Pe*Ue(n)):(a({aLz:.8,aRz:-.5,rate:14}),r=0);break;case"transform":a({head:-.5,spine:-.15,lean:-.1,twist:0,aLz:1.2,aRz:-1.2,aLx:-.5,aRx:-.5,eL:-.3,eR:-.3,tf:Ue(n),y:Math.abs(Math.sin(t*30))*.03*(1-n),rate:22}),r=0;break;case"feint":a({lean:-.25,twist:.9,spine:-.1,aRx:-2.6,aRz:-.6,eR:-1.4,aLx:-.8,aLz:.7,eL:-.6,lLx:-.6,kL:.7,lRx:.4,kR:.3,glint:1,head:-.25,rate:18}),r=0;break;case"baile":{const o=Math.sin(t*6),c=Math.cos(t*6);a({roll:o*.12,twist:o*.5,lLx:o*.6,lRx:-o*.6,kL:.4+Math.max(0,o)*.6,kR:.4+Math.max(0,-o)*.6,aLx:-.5,aLz:1.1+o*.3,eL:-.4,aRx:-1.6,aRz:-.4,eR:-1-c*.3,y:Math.abs(c)*.05,rate:18}),r=Math.sin(t*3)*.7;break}case"hatOff":a({hat:1,aRx:-1.3,aRz:-1,eR:-.3,aLz:.5,aLx:-.2,head:-.15,lean:.1,twist:-.2,rate:16}),r=0;break;case"reveal":a({hat:1,tf:1,aLz:1.4,aRz:-1.4,aLx:-.6,aRx:-.6,eL:-.3,eR:-.3,head:-.55,spine:-.2,lean:-.12,twist:0,y:Math.abs(Math.sin(t*24))*.03,rate:20}),r=0;break;case"dolphin":a({dol:1,tf:1,hat:1,gnd:0,rate:30}),r=0;break;case"botoCharge":a({tf:1,hat:1,lean:.75,head:-.7,aLx:.45,aRx:.45,aLz:.15,aRz:-.15,eL:0,eR:0,lLx:-.5,kL:.3,lRx:.8,kR:.4,twist:0,rate:30}),r=0;break;case"grabbed":case"rooted":a({lean:-.25,head:-.3,aLx:-.4,aRx:-.3,eL:-1,eR:-1,kL:.6,kR:.5,rate:20}),r=0;break;default:r=ir(e,i,t,a,sv)}if(r===null)switch(r=0,i.anim){case"slap":a(s===0?{aRx:-1.4,aRz:-.9,eR:-1.2,twist:.5}:s===1?{aRx:-1.5,aRz:.5,eR:-.2,twist:-.6,lean:.15,rate:40}:{aRx:-.8,aRz:-.2,eR:-.7,twist:0,rate:12});break;case"backhand":a(s===0?{aLx:-1.5,aLz:-.4,eL:-1.6,twist:-.3}:s===1?{aLx:-1.4,aLz:1,eL:-.2,twist:.7,lean:.15,rate:40}:{aLx:-.7,aLz:.4,eL:-.7,twist:.3,rate:12});break;case"elbow":a(s===0?{aRx:-1.2,aRz:-.2,eR:-2.4,twist:.7}:s===1?{aRx:-1.4,aRz:.7,eR:-2.5,twist:-.6,lean:.25,lLx:-.5,kL:.6,rate:40}:{aRx:-.6,eR:-1.2,twist:0,rate:12});break;case"shoulder":r=bn(i,1,.35),a(s===0?{lean:.25,aLz:.2,aRz:-.2,eL:-2,eR:-2,kL:.8,kR:.8}:s===1?{lean:.35,aLz:1.3,aRz:-1.3,eL:-.2,eR:-.2,kL:.5,kR:.5,rate:34}:{rate:12});break;case"danceStep":a(s===0?{lLx:-.7,kL:1.1,aLz:.9,aRz:-.9,lean:-.05,y:.04}:s===1?{lLx:-.9,kL:.3,lRx:.6,kR:.2,lean:.3,aRx:-1.5,eR:-.1,aLz:1.1,twist:.5,rate:36}:{lean:.1,rate:12});break;case"dolphinCharge":a(s===0?{lean:.2,kL:1.1,kR:1,aLx:.4,aRx:.4,head:-.3,tf:.6}:s===1?{lean:1,lLx:.5,lRx:.7,kL:.2,kR:.2,aLx:.5,aRx:.5,aLz:.15,aRz:-.15,eL:0,eR:0,tf:1,head:-.9,y:.2,rate:30}:{lean:.2,tf:.4,rate:10});break;case"backSpin":r=bn(i,-1,.3),a(s===0?{aLz:.5,aRz:-.5,lean:-.1}:s===1?{aRz:-1.4,aRx:-1.5,eR:-.1,lean:-.1,rate:34}:{rate:12});break;case"counterElbow":a(s===0?{lean:-.25,roll:.25,twist:-.6,aLx:-1,eL:-2.2,lLx:.3,kL:.6,lRx:-.5,kR:.9,y:.05,rate:34}:s===1?{twist:.8,aLx:-1.4,aLz:-.6,eL:-2.4,lean:.3,rate:40}:{twist:.2,rate:12});break;case"legSweep":a(s===0?{kL:1.4,kR:1.5,lean:.3,lLx:-.6}:s===1?{lLx:-1.2,lLz:.9,kL:.1,kR:1.7,lRx:-.3,lean:.35,twist:.6,aLz:.9,hnd:.3,rate:38}:{kL:.8,kR:.9,rate:12});break;case"spinSweep":r=bn(i,1,.4),a(s===0?{kL:1.4,kR:1.5,lean:.3}:s===1?{lLx:-.9,lLz:1.1,kL:.1,lRx:-.4,kR:1.8,lean:.3,hnd:.5,aLz:.5,aRz:-1,rate:32}:{kL:.8,kR:.9,rate:12});break;case"superstart":case"superprep":a({aRx:-2.6,aRz:-.3,eR:-1.7,aLz:.9,aLx:-.3,eL:-.4,head:-.1,twist:.1,glint:1,y:Math.abs(Math.sin(t*6))*.03,rate:16});break;case"win":{const o=Math.sin(t*2);a({hat:1,lean:.35+o*.05,aRx:-1.2,aRz:-.9,eR:-.4,aLx:.3,aLz:.2,eL:-1.4,lLx:-.2,lRx:.4,twist:0});break}}return i.skin>0&&i.anim!=="dolphin"&&(e.tf=Math.max(e.tf,1)),e.spin=r,e}function rv(){const i=Et(13146234,{roughness:.5,emissive:16740250,emissiveIntensity:0}),t=Et(15921126,{roughness:.85}),e=Et(14275782,{roughness:.9}),n=Et(3811872,{roughness:.6}),s=Et(13215834,{metalness:.8,roughness:.3}),a=Et(15129800,{roughness:.5}),r=Et(16184298,{roughness:.7}),o=Et(1840150,{roughness:.4,emissive:16773824,emissiveIntensity:0}),c=Et(1577230,{roughness:.6}),l=Et(1182730,{roughness:1}),h=Et(14183050,{roughness:.7}),u=Et(15768242,{roughness:.35,emissive:8006212,emissiveIntensity:.25}),p=Et(2365972,{roughness:.2}),d=new ge,g=Tt(d),v=Tt(g,0,1,0);C(v,mt(.18),t,0,.02,0).scale.set(1.2,.85,.9),C(v,ee(.19,.025),n,0,.08,0).rotation.x=Ut,C(v,new Ee(.06,.045,.02),s,0,.08,.19);const m=ht=>{const rt=Tt(v,ht*.11,-.05,0);C(rt,Te(.09,.3),t,0,-.23,0);const J=Tt(rt,0,-.46,0);return C(J,mt(.08),e),C(J,Te(.08,.28),t,0,-.2,0),C(J,Ht(.085,.1,.08,10),e,0,-.36,0),C(J,new Ee(.11,.07,.27),a,0,-.455,.055),C(J,mt(.055),a,0,-.45,.17).scale.set(1,.6,1.2),[rt,J]},[f,b]=m(1),[y,x]=m(-1),k=Tt(v,0,.08,0);C(k,Ht(.165,.15,.28,12),t,0,.13,0).scale.z=.8,C(k,mt(.19),t,0,.37,0).scale.set(1.25,.95,.8);const E=C(k,new ne(.07,.16,3),i,0,.47,.13);E.rotation.x=Math.PI,E.scale.z=.3,C(k,ee(.075,.02),h,0,.56,.02).rotation.x=Ut-.3;for(let ht=0;ht<3;ht++)C(k,mt(.012),e,0,.32-ht*.08,.155);for(const ht of[1,-1])C(k,mt(.085),t,ht*.26,.47,0),C(k,new Ee(.06,.16,.012),e,ht*.06,.44,.15).rotation.z=ht*.35;const R=C(k,new ne(.1,.3,4),u,0,.42,-.15);R.rotation.x=-.7,C(k,Ht(.055,.06,.1),i,0,.6,0);const A=Tt(k,0,.7,0);C(A,mt(.112),i).scale.set(.92,1.06,.98),C(A,mt(.055),i,0,-.07,.045).scale.set(1.05,.8,1);const M=Tt(A,0,-.02,.1),_=C(M,new ne(.028,.09,8),i,0,0,.035);_.rotation.x=Ut;for(const ht of[1,-1])C(A,mt(.015),p,ht*.042,.015,.1),C(A,new Ee(.045,.01,.015),c,ht*.042,.045,.1).rotation.z=-ht*.15,C(A,new Ee(.045,.01,.012),c,ht*.024,-.05,.108).rotation.z=ht*.35;C(A,mt(.116),c,0,.03,-.025).scale.set(1,.85,1),C(A,new gn(.026,10),l,0,.131,-.01).rotation.x=-Ut;const P=ht=>{const rt=Tt(ht);return C(rt,Ht(.22,.22,.014,22),r),C(rt,Ht(.11,.125,.13,16),r,0,.07,0),C(rt,Ht(.128,.128,.032,16),o,0,.024,0),C(rt,new Ee(.12,.01,.05),r,0,.138,0),rt},V=P(A);V.position.set(0,.11,-.005),V.rotation.set(-.08,0,.1);const H=[],G=ht=>{const rt=Tt(k,ht*.28,.47,0);C(rt,Te(.068,.2),t,0,-.14,0);const J=Tt(rt,0,-.3,0);C(J,Te(.058,.14),t,0,-.1,0),C(J,Ht(.064,.06,.06,10),e,0,-.19,0),C(J,Te(.045,.06),i,0,-.24,0),C(J,mt(.052),i,0,-.31,0).scale.set(.8,1.1,.7);const it=C(J,new ne(.05,.2,4),u,ht*.06,-.14,-.03);return it.rotation.z=ht*2.4,H.push(it),[rt,J]},[O,U]=G(1),[Y,D]=G(-1),$=P(D);$.position.set(0,-.36,.1),$.rotation.set(Ut,0,0),$.visible=!1;const j=Tt(g,0,.9,0);j.visible=!1,C(j,Te(.28,.95),u).rotation.x=Ut,C(j,mt(.25),u,0,.05,.62).scale.set(1,1.05,1.1),C(j,new ne(.065,.48,8),u,0,-.02,1.02).rotation.x=Ut;for(const ht of[1,-1]){C(j,mt(.025),p,ht*.17,.02,.76);const rt=C(j,new ne(.08,.3,4),u,ht*.25,-.15,.3);rt.rotation.set(.5,0,ht*2.2),rt.scale.z=.25}const Z=C(j,new ne(.12,.18,4),u,0,.3,-.05);Z.rotation.x=-.5,Z.scale.x=.25;const ut=Tt(j,0,0,-.72);for(const ht of[1,-1]){const rt=ht*(Ut+.35),J=C(ut,new ne(.12,.4,4),u,-Math.sin(rt)*.2,0,-.08);J.rotation.set(Ut,0,rt),J.scale.z=.2}const at=[[b,ie(0,-.49,.2)],[b,ie(0,-.49,-.07)],[x,ie(0,-.49,.2)],[x,ie(0,-.49,-.07)]];let q=null;const lt=new se(15768242);return Mc({root:d,spinG:g,hips:v,spine:k,head:A,shL:O,elL:U,shR:Y,elR:D,lL:f,kL:b,lR:y,kR:x,feet:at,hands:[[U,ie(0,-.36,0)],[D,ie(0,-.36,0)]]},wu,av,(ht,rt,J)=>{const it=oi(ht.tf),pt=Math.max(.001,it);q||(q=i.color.clone()),i.color.copy(q).lerp(lt,it*.85),i.emissiveIntensity=it*.12,_.scale.set(1+it*.3,1+it*2.4,1+it*.3),_.position.z=.035+it*.1,R.visible=it>.02,R.scale.set(.25*pt,pt,pt);for(const he of H)he.visible=it>.02,he.scale.set(pt,pt,.25*pt);const Jt=ht.hat>.5;V.visible=!Jt,$.visible=Jt,o.emissiveIntensity=oi(ht.glint)*(1.2+Math.sin(J*30)*.6);const Wt=ht.dol>.5;v.visible=!Wt,j.visible=Wt,Wt&&(j.rotation.x=Math.sin(J*5)*.35,ut.rotation.x=Math.sin(J*10)*.5)})}const Vi={saci:{name:"SACI",hp:90,speed:5.4,radius:.45,turn:16,mass:1,hitY:1.3,tagY:2.3,super:"VOADORA DO REDEMOINHO",dodge:{t:.3,dist:2.4,ev:[0,.22],cd:.5}},mula:{name:"MULA SEM CABEÇA",hp:130,speed:3.3,radius:.95,turn:5.5,mass:3,hitY:1.4,tagY:2.9,super:"FOGO DA CONDENAÇÃO",dodge:{t:.42,dist:1.9,ev:[.04,.26],cd:.8}},curupira:{name:"CURUPIRA",hp:100,speed:5,radius:.45,turn:14,mass:1,hitY:1.25,tagY:2.35,super:"JULGAMENTO DA FLORESTA",dodge:{t:.3,dist:2.3,ev:[.02,.22],cd:.55}},cuca:{name:"CUCA",hp:115,speed:3.6,radius:.6,turn:8,mass:2,hitY:1.3,tagY:2.55,super:"ÚLTIMO PESADELO",dodge:{t:.4,dist:1.9,ev:[.05,.25],cd:.75}},iara:{name:"IARA",hp:105,speed:4.2,radius:.55,turn:10,mass:1.5,hitY:1.3,tagY:2.55,super:"CHAMADO DAS PROFUNDEZAS",dodge:{t:.36,dist:2.1,ev:[.03,.24],cd:.65}},boto:{name:"BOTO",hp:100,speed:4.9,radius:.45,turn:15,mass:1.1,hitY:1.3,tagY:2.4,super:"O ÚLTIMO BAILE",dodge:{t:.28,dist:2.5,ev:[0,.24],cd:.45}}},Sn=["saci","mula","curupira","cuca","iara","boto"],je={buffer:.28,tap:.2,perfect:.13,perfectStagger:.5,counterDmg:1.2,counterStun:.12,scale:.1,scaleMin:.35,maxHits:7,maxJuggle:2,breakWindow:.36,chip:.15},Vn={saci:{light1:{name:"Soco",h:"high",t:[.07,.08,.17],dmg:4,range:1.25,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"punchL",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Cruzado",h:"mid",t:[.06,.08,.19],dmg:4,range:1.3,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"punchR",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Cotovelada",h:"mid",t:[.1,.08,.26],dmg:6,range:1.35,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"elbow",next:{K:"heavy",L:"@"}},heavy:{name:"Giro de perna",h:"high",t:[.2,.12,.36],dmg:11,range:1.75,arc:1.3,stun:.5,bstun:.22,push:7,launch:4.8,anim:"spinkick",lunge:3,track:!0},fLight:{name:"Pulo-soco",h:"mid",t:[.16,.1,.2],dmg:6,range:1.45,arc:.9,stun:.38,bstun:.26,push:2,lunge:6,anim:"hopPunch",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Martelo",h:"mid",t:[.3,.1,.42],dmg:13,range:1.65,arc:.8,stun:.5,bstun:.22,push:3,launch:2.6,lunge:2.5,anim:"axe"},bLight:{name:"Tapa de recuo",h:"high",t:[.14,.08,.2],dmg:5,range:1.75,arc:.9,stun:.4,bstun:.2,push:3,lunge:-3.5,anim:"slap",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Meia-lua",h:"high",t:[.24,.14,.34],dmg:9,range:1.9,arc:2.4,stun:.45,bstun:.4,push:9,anim:"meialua",track:!0},dLight:{name:"Canelada",h:"low",t:[.1,.08,.2],dmg:3,range:1.3,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"lowJab",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira",h:"low",t:[.3,.12,.5],dmg:9,range:1.7,arc:1.6,stun:.5,bstun:.2,push:2,launch:2.2,anim:"sweep",track:!0},mid:{name:"Redemoinho",h:"mid",t:[.32,.06,.42],spawn:"tornado",anim:"whirl",cd:1.6},special:{name:"Voadora",h:"mid",custom:"voadora",cd:1.2},def:{name:"Sumiu no vento",custom:"teleport",cost:20,cd:3},grab:{name:"Derrubada",grab:!0,t:[.2,.05,.42],range:.75,dmg:12,launch:3,push:5,anim:"grab"}},mula:{light1:{name:"Patada",h:"high",t:[.14,.1,.26],dmg:6,range:2.1,arc:.7,stun:.4,bstun:.3,push:3.5,anim:"hoofL",next:{J:"light2",K:"heavy",fJ:"fLight",dK:"dHeavy"}},light2:{name:"Patada dupla",h:"mid",t:[.13,.1,.3],dmg:7,range:2.1,arc:.7,stun:.46,bstun:.3,push:4.5,lunge:2.5,anim:"hoofR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy"}},heavy:{name:"Pisão",h:"mid",t:[.38,.12,.48],dmg:16,range:2.35,arc:.8,stun:.6,bstun:.26,push:5,launch:3.6,anim:"stomp",lunge:1.5,quake:!0},fLight:{name:"Peitada",h:"mid",t:[.16,.12,.28],dmg:7,range:2.2,arc:.8,stun:.42,bstun:.34,push:4,lunge:5,anim:"check",next:{J:"light2",fK:"fHeavy",dK:"dHeavy"}},fHeavy:{name:"Investida",h:"mid",t:[.38,.36,.55],dmg:15,range:2.3,arc:.7,stun:.5,bstun:.28,push:8,launch:4.2,rush:9,armor:!0,anim:"chargeAtk"},bLight:{name:"Patada de recuo",h:"high",t:[.18,.1,.26],dmg:6,range:2.35,arc:.7,stun:.42,bstun:.3,push:4,lunge:-3,anim:"hoofR",next:{K:"heavy"}},bHeavy:{name:"Empinada",h:"mid",t:[.5,.12,.55],dmg:19,range:2.5,arc:.8,stun:.6,bstun:.4,push:6,launch:5.2,lunge:-1.5,chip:.3,anim:"rear",quake:!0},dLight:{name:"Raspada",h:"low",t:[.16,.1,.26],dmg:5,range:2.1,arc:.8,stun:.58,bstun:.22,push:2,anim:"scrape",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida",h:"low",t:[.4,.14,.56],dmg:12,range:2.4,arc:1.5,stun:.5,bstun:.22,push:3,launch:2.2,anim:"lowsweep",track:!0},mid:{name:"Coice",h:"mid",t:[.3,.1,.46],dmg:14,range:2.5,arc:1,stun:.5,bstun:.24,push:10,launch:4.6,anim:"coice",kick:!0,cd:.8},special:{name:"Inferno",h:"mid",t:[.65,.55,.5],anim:"fire",beam:!0,cd:2.5},def:{name:"Poeira",h:"mid",t:[.12,.2,.36],dmg:3,range:3.6,arc:1,stun:.45,bstun:.24,push:12,anim:"dust",dustFx:!0,cd:2.5,track:!0},grab:{name:"Prensada",grab:!0,t:[.28,.05,.5],range:.8,dmg:16,launch:3.4,push:7,anim:"grab"}},curupira:{light1:{name:"Palma",h:"high",t:[.08,.08,.18],dmg:4,range:1.5,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"palm",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Cotovelo",h:"mid",t:[.07,.08,.2],dmg:6,range:1.5,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"elbowR",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Calcanhar torto",h:"mid",t:[.11,.09,.26],dmg:7,range:1.6,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"heel",next:{K:"heavy",L:"@"}},heavy:{name:"Chute rodado",h:"high",t:[.21,.12,.36],dmg:12,range:1.85,arc:1.3,stun:.5,bstun:.22,push:7,launch:4.6,anim:"spinkick",lunge:2.5,track:!0},fLight:{name:"Passo torto",h:"mid",t:[.15,.1,.2],dmg:5,range:1.5,arc:.9,stun:.38,bstun:.26,push:2,lunge:6.5,anim:"stepIn",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Machado de calcanhar",h:"mid",t:[.3,.1,.42],dmg:13,range:1.7,arc:.8,stun:.5,bstun:.22,push:3,launch:2.6,lunge:2.5,anim:"axe"},bLight:{name:"Coice de recuo",h:"high",t:[.15,.08,.22],dmg:5,range:1.9,arc:.9,stun:.4,bstun:.2,push:3.5,lunge:-3.5,anim:"backKick",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Giro da mata",h:"high",t:[.25,.14,.34],dmg:9,range:2,arc:2.4,stun:.45,bstun:.4,push:9,anim:"wheel",track:!0},dLight:{name:"Pisada torta",h:"low",t:[.1,.08,.2],dmg:3,range:1.4,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"lowStep",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira de calcanhar",h:"low",t:[.3,.12,.5],dmg:10,range:1.85,arc:1.6,stun:.5,bstun:.2,push:2,launch:2.2,anim:"sweep",track:!0},mid:{name:"Lâmina da Mata",h:"mid",t:[.22,.06,.36],spawn:"leaf",anim:"blade",cd:1.5},special:{name:"Ira da Floresta",h:"low",t:[.34,.1,.52],spawn:"roots",anim:"roots",cd:5},def:{name:"Caminho Invertido",custom:"invert",cd:3.5},grab:{name:"Laço de cipó",grab:!0,t:[.2,.05,.42],range:.8,dmg:12,launch:3,push:5,anim:"grab"}},cuca:{light1:{name:"Garra",h:"high",t:[.13,.1,.26],dmg:5,range:1.9,arc:.8,stun:.4,bstun:.28,push:3,anim:"clawL",next:{J:"light2",K:"heavy",fJ:"fLight",dK:"dHeavy"}},light2:{name:"Garra cruzada",h:"mid",t:[.13,.1,.3],dmg:6,range:1.95,arc:.8,stun:.5,bstun:.28,push:3.5,lunge:2,anim:"clawR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy"}},heavy:{name:"Rabada",h:"mid",t:[.34,.14,.46],dmg:14,range:2.6,arc:1.6,stun:.55,bstun:.26,push:8,launch:3.8,anim:"tailSwing",track:!0},fLight:{name:"Bote",h:"mid",t:[.2,.1,.3],dmg:7,range:2,arc:.8,stun:.42,bstun:.3,push:3,lunge:5,anim:"snap",next:{J:"light2",fK:"fHeavy",dK:"dHeavy"}},fHeavy:{name:"Mordida",h:"mid",t:[.44,.12,.52],dmg:17,range:2.1,arc:.8,stun:.6,bstun:.26,push:5,launch:3,lunge:1.5,chip:.3,anim:"bite"},bLight:{name:"Arranhão de recuo",h:"high",t:[.18,.1,.26],dmg:5,range:2.2,arc:.8,stun:.42,bstun:.28,push:4,lunge:-3,anim:"clawR",next:{K:"heavy"}},bHeavy:{name:"Chicote de cauda",h:"high",t:[.36,.16,.42],dmg:11,range:2.9,arc:2.6,stun:.5,bstun:.4,push:10,anim:"tailWhip",track:!0},dLight:{name:"Garra rasteira",h:"low",t:[.16,.1,.26],dmg:4,range:1.9,arc:.8,stun:.58,bstun:.2,push:2,anim:"lowClaw",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida de cauda",h:"low",t:[.42,.14,.54],dmg:11,range:2.7,arc:1.7,stun:.5,bstun:.22,push:3,launch:2.2,anim:"tailSweep",track:!0},mid:{name:"Garras da Bruxa",h:"mid",t:[.2,.36,.32],dmg:4,multi:3,range:1.95,arc:.9,stun:.46,bstun:.2,push:6,rush:2.2,anim:"claws",cd:1.8},special:{name:"Pesadelo da Cuca",h:"mid",t:[.5,.08,.5],spawn:"wave",anim:"cast",cd:3.8},def:{name:"Véu do Pesadelo",t:[.12,.06,.22],veil:2.5,anim:"veil",cd:6},grab:{name:"Abraço da bruxa",grab:!0,t:[.26,.05,.5],range:.85,dmg:15,launch:3.2,push:6,anim:"grab"}},iara:{light1:{name:"Golpe de barbatana",h:"high",t:[.1,.08,.22],dmg:5,range:1.75,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"finL",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy"}},light2:{name:"Barbatana cruzada",h:"mid",t:[.1,.08,.24],dmg:5,range:1.8,arc:.9,stun:.4,bstun:.2,push:3.2,anim:"finR",next:{K:"heavy",L:"@",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},heavy:{name:"Chicote de cauda",h:"high",t:[.28,.12,.4],dmg:12,range:2.4,arc:1.4,stun:.5,bstun:.24,push:7,launch:4,anim:"tailWhip",track:!0},fLight:{name:"Avanço ondulante",h:"mid",t:[.18,.1,.24],dmg:6,range:1.7,arc:.9,stun:.38,bstun:.24,push:2.5,lunge:5.5,anim:"surge",next:{J:"light2",K:"heavy",dJ:"dLight"}},fHeavy:{name:"Investida da correnteza",h:"mid",t:[.34,.2,.46],dmg:13,range:1.9,arc:.8,stun:.5,bstun:.22,push:5,launch:3,rush:7,anim:"charge"},bLight:{name:"Recuo com cauda",h:"high",t:[.16,.08,.24],dmg:5,range:2.1,arc:.9,stun:.4,bstun:.22,push:3.5,lunge:-3.8,anim:"retreat",next:{K:"heavy",bK:"bHeavy"}},bHeavy:{name:"Arco d'água",h:"mid",t:[.3,.14,.4],dmg:10,range:2.6,arc:1.9,stun:.45,bstun:.34,push:9,anim:"waterArc",track:!0},dLight:{name:"Raspão de cauda",h:"low",t:[.13,.08,.24],dmg:4,range:1.9,arc:.9,stun:.5,bstun:.18,push:1.8,anim:"tailScrape",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Varrida aquática",h:"low",t:[.36,.14,.52],dmg:10,range:2.5,arc:1.7,stun:.5,bstun:.2,push:3,launch:2.2,anim:"aquaSweep",track:!0},mid:{name:"Canto da Mãe-d'Água",h:"mid",t:[.45,.1,.4],spawn:"song",anim:"sing",cd:4.5},special:{name:"Correnteza",h:"low",t:[.3,.08,.42],spawn:"current",anim:"current",cd:2.6},def:{name:"Mergulho Encantado",custom:"dive",cd:3.2},grab:{name:"Abraço do rio",grab:!0,t:[.24,.05,.46],range:.85,dmg:13,launch:3,push:6,anim:"grab"}},boto:{light1:{name:"Tapa malandro",h:"high",t:[.08,.08,.18],dmg:4,range:1.4,arc:.9,stun:.34,bstun:.2,push:2.2,anim:"slap",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light2:{name:"Tapa de volta",h:"mid",t:[.07,.08,.2],dmg:5,range:1.45,arc:.9,stun:.36,bstun:.2,push:2.6,anim:"backhand",next:{J:"light3",K:"heavy",dK:"dHeavy",fK:"fHeavy",bK:"bHeavy"}},light3:{name:"Cotovelo do baile",h:"mid",t:[.11,.08,.26],dmg:6,range:1.45,arc:.9,stun:.4,bstun:.2,push:3.5,anim:"elbow",next:{K:"heavy",dK:"dHeavy"}},heavy:{name:"Giro de ombro",h:"mid",t:[.2,.12,.34],dmg:11,range:1.7,arc:1.2,stun:.5,bstun:.22,push:7,launch:4.2,lunge:2.5,anim:"shoulder",track:!0},fLight:{name:"Passo de dança",h:"mid",t:[.15,.1,.2],dmg:5,range:1.5,arc:.9,stun:.38,bstun:.26,push:2,lunge:6,anim:"danceStep",next:{J:"light2",K:"heavy",dJ:"dLight",dK:"dHeavy"}},fHeavy:{name:"Investida encantada",h:"mid",t:[.3,.18,.44],dmg:12,range:1.7,arc:.8,stun:.5,bstun:.22,push:5,launch:3,rush:7,anim:"dolphinCharge"},bLight:{name:"Giro de recuo",h:"high",t:[.14,.08,.22],dmg:5,range:1.7,arc:1.6,stun:.4,bstun:.2,push:3,lunge:-3.5,anim:"backSpin",next:{K:"heavy",fK:"fHeavy"}},bHeavy:{name:"Cotovelada de contrapasso",h:"mid",t:[.2,.08,.38],dmg:9,range:1.55,arc:1,stun:.5,bstun:.2,push:5,evade:[.02,.16],anim:"counterElbow"},dLight:{name:"Rasteira elegante",h:"low",t:[.1,.08,.2],dmg:3,range:1.4,arc:.9,stun:.44,bstun:.18,push:1.5,anim:"legSweep",next:{dK:"dHeavy",J:"light2"}},dHeavy:{name:"Rasteira giratória",h:"low",t:[.3,.12,.5],dmg:10,range:1.8,arc:2.2,stun:.5,bstun:.2,push:2,launch:2.2,anim:"spinSweep",track:!0},mid:{name:"Dança do Encantado",custom:"dance",cd:2.4},special:{name:"Pele de Boto",custom:"skin",cd:14},def:{name:"Disfarce do Galanteador",custom:"feint",cd:2.2},grab:{name:"Valsa",grab:!0,t:[.2,.05,.42],range:.8,dmg:12,launch:3,push:5,anim:"grab"}}},eh={light1:{dmg:3,range:1.65},light2:{dmg:4,range:1.7},light3:{dmg:5,range:1.7},heavy:{range:2,push:9,name:"Giro de nadadeira"},fHeavy:{armor:!0,rush:9,dmg:13,name:"Investida do boto"},dHeavy:{range:2.1,name:"Varrida de cauda"}},Ru={tornado:{name:"Redemoinho",dmg:8,stun:.6,push:4,speed:7.5,life:1.5,hitR:.75},leaf:{name:"Lâmina da Mata",h:"mid",dmg:8,stun:.46,bstun:.2,push:3,speed:13,life:.5,hitR:.6},wave:{name:"Pesadelo da Cuca",h:"mid",dmg:7,stun:.5,bstun:.24,push:4,speed:6.5,life:1.45,hitR:.95,daze:1.6},song:{name:"Canto da Mãe-d'Água",h:"mid",dmg:6,stun:.45,bstun:.22,push:3,speed:7,life:1,hitR:1.1,charm:1.4},current:{name:"Correnteza",h:"low",dmg:8,stun:.4,bstun:.2,push:7,speed:9,life:.7,hitR:.85},roots:{name:"Ira da Floresta",h:"low",dmg:5,stun:.35,bstun:.2,push:0,root:.85,warn:.42,reach:7.5,hitR:.95}};for(const i in Vn)for(const t in Vn[i])Vn[i][t].id=t;const Yo={J:{n:"light1",f:"fLight",b:"bLight",d:"dLight"},K:{n:"heavy",f:"fHeavy",b:"bHeavy",d:"dHeavy"},L:{n:"mid"},I:{n:"special"},O:{n:"def"}},Fa={saci:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · termina arremessando"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"martelo fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a canelada acertar"},{name:"Pressão",cmd:["fJ","J","bK"],note:"seguro: a meia-lua afasta"}],mula:[{name:"Dano e arremesso",cmd:["J","J","L"],note:"garantido · coice arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","K"],note:"pisão fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a raspada acertar"},{name:"Pressão",cmd:["fJ","J","fK"],note:"investida aguenta um golpe fraco · muito punível"}],curupira:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · termina arremessando"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"machado fura a defesa baixa · punível se bloqueado"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a pisada acertar"},{name:"Pressão",cmd:["fJ","J","bK"],note:"seguro: o giro afasta e abre espaço para as raízes"}],cuca:[{name:"Dano e arremesso",cmd:["J","J","K"],note:"garantido · rabada arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida de cauda não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"mordida fura a defesa baixa · muito punível"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a garra rasteira acertar"},{name:"Pressão",cmd:["fJ","J","L"],note:"termina nas Garras da Bruxa · três golpes"}],iara:[{name:"Dano e arremesso",cmd:["J","J","K"],note:"garantido · chicote de cauda arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"varrida aquática não garantida: defenda agachado"},{name:"Quebra por cima",cmd:["J","J","fK"],note:"investida fura a defesa baixa · punível se bloqueada"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se o raspão acertar"},{name:"Pressão",cmd:["fJ","J","L"],note:"termina no Canto · encanta quem for atingido"}],boto:[{name:"Dano e arremesso",cmd:["J","J","J","K"],note:"garantido · giro de ombro arremessa"},{name:"Quebra por baixo",cmd:["J","J","dK"],note:"rasteira giratória não garantida: defenda agachado"},{name:"Punição",cmd:["J","bK"],note:"a cotovelada desvia golpes sem rastreio no começo"},{name:"Confirmação baixa",cmd:["dJ","dK"],note:"garantido se a rasteira acertar"},{name:"Pressão",cmd:["fJ","J","fK"],note:"com Pele de Boto a investida aguenta um golpe fraco"}]},Au={high:"ALTO",mid:"MÉDIO",low:"BAIXO"},Pi=i=>Math.round(i*60);function Tu(i){if(!i.t)return null;const[t,e,n]=i.t,s={startup:Pi(t),active:Pi(e),recovery:Pi(n)};return i.dmg&&i.multi?(s.onHit=Pi((i.stun||.35)-n),s.onBlock=Pi((i.bstun||.22)-n)):i.dmg&&(s.onHit=i.launch?"derruba":Pi((i.stun||.35)-e-n),s.onBlock=Pi((i.bstun||.22)-e-n)),s}const ov={saci:J1,mula:Y1,curupira:Z1,cuca:ev,iara:iv,boto:rv},Ze=()=>new I,cv=i=>{for(;i>Math.PI;)i-=6.2832;for(;i<-Math.PI;)i+=6.2832;return i};class nh{constructor(t,e){this.kind=t,this.game=e,Object.assign(this,Vi[t]),this.maxHp=this.hp,this.level=1,this.dmgMul=1,this.model=ov[t](),e.scene.add(this.model.root),this.pos=Ze(),this.vel=Ze(),this.dir=Ze(),this.wins=0,this.energy=0,this.reset(0,0,0)}dispose(){this.game.scene.remove(this.model.root),this.model.root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}reset(t,e,n){this.pos.set(t,0,e),this.vel.set(0,0,0),this.y=0,this.vy=0,this.facing=n,this.hp=this.maxHp,this.cd={mid:0,special:0,def:0,dodge:0},this.invuln=0,this.burn=0,this.buf=null,this.bufT=0,this.combo=0,this.comboT=0,this.comboDmg=0,this.taken=0,this.juggle=0,this.chain=[],this.wasBlock=!1,this.blockAt=9,this.pgCd=0,this.pgOk=!1,this.dodgeSide=0,this.veil=0,this.daze=0,this.dazeImm=0,this.rootImm=0,this.charm=0,this.charmImm=0,this.skin=0,this.baited=!1,this.danced=!1,this.spinExtra=0,this.kickTurn=!1,this.lastMove=Ze(),this.setState("idle"),this.updDir()}updDir(){this.dir.set(Math.sin(this.facing),0,Math.cos(this.facing))}dist(){return Math.hypot(this.opp.pos.x-this.pos.x,this.opp.pos.z-this.pos.z)}gain(t){this.energy=Math.min(100,this.energy+t)}setState(t){this.state=t,this.st=0,this.blocking=!1,this.guard="high",this.phase=0,this.pk=0,t==="idle"?(this.anim="idle",this.kickTurn=!1,this.taken=0,this.juggle=0,this.opp&&this.opp.comboT>.7&&(this.opp.comboT=.7)):t!=="attack"&&t!=="custom"&&(this.anim=t==="blockstun"?"block":t)}faceOpp(t=99){const e=Math.atan2(this.opp.pos.x-this.pos.x,this.opp.pos.z-this.pos.z),n=cv(e-this.facing);this.facing+=Math.max(-t,Math.min(t,n)),this.updDir()}inReach(t,e,n=this.dir){const s=this.opp,a=s.pos.x-this.pos.x,r=s.pos.z-this.pos.z,o=Math.hypot(a,r);return o>t+s.radius||s.y>1.9?!1:o<this.radius+s.radius+.15||Math.acos(Math.max(-1,Math.min(1,(a*n.x+r*n.z)/(o||1))))<=e}cmdDir(t){if(t.dir)return t.dir;const e=t.move;if(!e||e.lengthSq()<.09)return"n";const n=this.opp,s=n.pos.x-this.pos.x,a=n.pos.z-this.pos.z,r=(e.x*s+e.z*a)/(Math.hypot(s,a)||1);return t.down?"d":r>.5?"f":r<-.5?"b":"s"}tryStart(t){const e=t.b;if(this.lastDir=t.dir||"n",e==="SP")return this.energy<100?!1:(this.startSuper(),!0);if(e==="EV")return this.startDodge(t.v);if(e==="GR")return this.chain=[],this.startMove("grab"),!0;const n=Yo[e];if(!n)return!1;const s=n[t.dir]||n.n,a=Vn[this.kind][s];if(!a||a.cd&&this.cd[s]>0||a.cost&&this.energy<a.cost)return!1;if(a.cost&&(this.energy-=a.cost),a.cd&&(this.cd[s]=a.cd),this.state!=="attack"&&(this.chain=[]),a.custom&&this.game.log({t:"move",f:this,m:a}),a.custom==="voadora")this.setState("custom"),this.anim="voadora",this.cphase=0,this.connected=!1,this.custom=this.updVoadora;else if(a.custom==="invert"){const r=this.opp,o=Ze().subVectors(r.pos,this.pos).setY(0).normalize(),c=Ze().set(-o.z,0,o.x),l=this.lastMove.lengthSq()>.09?this.lastMove.clone().setY(0).normalize():o.clone().negate(),h=l.dot(c);this.game.spawnGhost(this),this.setState("custom"),this.anim="dodge",this.dodgeSide=Math.abs(h)>.5?Math.sign(h):0,this.dv=l,this.cphase=0,this.custom=this.updInvert,r.state==="attack"&&(this.gain(12),this.game.tag(this,"ENGANOU!")),this.game.fx.leaves(this.pos,22,3,.5)}else if(a.custom==="teleport")this.setState("custom"),this.anim="vanish",this.cphase=0,this.custom=this.updTeleport,this.opp.state==="attack"&&this.gain(12),this.game.fx.leaves(this.pos,26,3,.5),this.game.fx.smoke({x:this.pos.x,y:1,z:this.pos.z},10);else if(a.custom==="dive")this.setState("custom"),this.anim="submerge",this.cphase=0,this.custom=this.updDive,this.opp.state==="attack"&&this.gain(8),this.game.fx.ring(this.pos,6279392,2.2,.35),this.splash(this.pos,26);else if(a.custom==="dance"){const r=Ze().subVectors(this.opp.pos,this.pos).setY(0).normalize(),o=Ze().set(-r.z,0,r.x),c=this.lastMove.lengthSq()>.09?this.lastMove.dot(o):0;this.dodgeSide=Math.abs(c)>.3?Math.sign(c):this.dodgeSide===1?-1:1,this.setState("custom"),this.anim="dance",this.cphase=0,this.danced=!1,this.custom=this.updDance,this.game.fx.ring(this.pos,16756936,1.6,.3)}else a.custom==="skin"?(this.setState("custom"),this.anim="transform",this.cphase=0,this.custom=this.updSkin,this.game.tag(this,"PELE DE BOTO")):a.custom==="feint"?(this.setState("custom"),this.anim="feint",this.cphase=0,this.baited=!1,this.custom=this.updFeint,this.game.tag(this,"DISFARCE"),this.game.fx.ring(this.pos,16773328,1.3,.25)):this.startMove(s);return!0}splash(t,e){this.game.fx.dust(t,e,0,0,4,[.45,.75,.85],.5)}startMove(t){let e=Vn[this.kind][t];if(this.skin>0&&eh[t]&&(e={...e,...eh[t]}),this.setState("attack"),this.move=e,this.mt=e.t.slice(),this.anim=e.anim,this.hitDone=!1,this.fired=!1,this.connected=!1,this.kickBack=!1,this.kickTurn=!1,this.chain.push(t),this.armorUsed=!1,this.hitN=0,e.kick){const n=this.opp,s=(n.pos.x-this.pos.x)*this.dir.x+(n.pos.z-this.pos.z)*this.dir.z<0;this.kickBack=s,this.kickTurn=!s,s&&(this.mt=[.14,.1,.34])}e.h==="low"&&this.game.fx.ring(this.pos,8376575,1.5,.28),this.game.log({t:"move",f:this,m:e})}startDodge(t){const e=this.dodge;if(this.cd.dodge>0)return!1;const n=this.opp,s=Ze().subVectors(n.pos,this.pos).setY(0).normalize(),a=Ze().set(-s.z,0,s.x),r=t?t.dot(s):0,o=t?t.dot(a):0,c=Math.abs(o)>=Math.abs(r)||r>0;return this.setState("dodge"),this.cd.dodge=e.t+e.cd,this.dodgeSide=c?o<0?-1:1:0,this.dv=c?a.multiplyScalar(this.dodgeSide).addScaledVector(s,.25).normalize():s.negate(),this.game.fx.dust(this.pos,8,0,0,2),this.game.log({t:"move",f:this,m:{name:c?"Esquiva lateral":"Recuo",t:[e.ev[0],e.ev[1]-e.ev[0],e.t-e.ev[1]]}}),!0}updDodge(t){const e=this.dodge;this.pk=Math.min(1,this.st/e.t),this.pos.addScaledVector(this.dv,e.dist/e.t*(1.6-1.2*this.pk)*(this.charm>0?.7:1)*t),this.faceOpp(this.turn*1.5*t),this.st>=e.t&&this.setState("idle")}tryGrab(){const t=this.opp,e=this.move;return this.dist()>this.radius+t.radius+e.range||t.y>.1||t.invuln>0||t.state!=="idle"&&t.state!=="blockstun"&&t.state!=="rooted"?!1:(this.setState("custom"),this.anim="grabHold",this.cphase=0,this.custom=this.updThrow,this.throwM=e,t.setState("grabbed"),t.anim="hit",t.vel.set(0,0,0),this.game.tag(t,"AGARRADO!"),this.game.log({t:"hit",att:this,def:t,m:e,res:"grab",dmg:0}),!0)}updThrow(){const t=this.opp,e=this.throwM,n=this.st;this.cphase===0?(this.pk=Math.min(1,n/je.breakWindow),t.state!=="grabbed"?(this.cphase=1,this.st=0):n>=je.breakWindow&&(this.cphase=1,this.st=0,this.anim="grabThrow",t.receive(this,{name:e.name,dmg:e.dmg,launch:e.launch,push:e.push,thrown:!0,unblockable:!0}))):(this.pk=Math.min(1,n/.35),n>=.35&&this.setState("idle"))}breakGrab(){const t=this.opp,e=Ze().subVectors(this.pos,t.pos).setY(0).normalize();this.setState("hit"),this.stun=.28,this.vel.copy(e).multiplyScalar(5),t.setState("hit"),t.stun=.3,t.vel.copy(e).multiplyScalar(-5),this.buf=null,this.game.tag(this,"SOLTOU!"),this.game.fx.sparks({x:(this.pos.x+t.pos.x)/2,y:1.2,z:(this.pos.z+t.pos.z)/2},10,[.7,.8,1]),this.game.log({t:"hit",att:t,def:this,m:t.throwM,res:"break",dmg:0})}update(t,e){const n=this.game.fx;for(const o in this.cd)this.cd[o]=Math.max(0,this.cd[o]-t);this.invuln-=t,this.pgCd-=t,this.veil-=t,this.daze-=t,this.dazeImm-=t,this.rootImm-=t,this.charm-=t,this.charmImm-=t,this.skin>0&&(this.skin-=t)<=0&&(this.skin=0,this.game.tag(this,"VOLTOU A SER GENTE"),n.smoke({x:this.pos.x,y:1,z:this.pos.z},8,.8)),(this.comboT-=t)<=0&&(this.combo=0,this.comboDmg=0),this.burn>0&&(this.burn-=t,this.hp=Math.max(1,this.hp-2*t),n.fire({x:this.pos.x,y:this.y+.9+Math.random()*.5,z:this.pos.z},40*t,this.radius*.7,1.5,.4));const s=this.cmdDir(e);switch(e.block?(this.wasBlock||(this.blockAt=0,this.tapBlocked=!1,this.pgOk=this.pgCd<=0,this.pgCd=.45),this.blockAt+=t):this.wasBlock&&this.blockAt<=je.tap&&s!=="n"&&!this.tapBlocked&&(this.buf=s==="f"?{b:"GR"}:{b:"EV",v:e.move.clone()},this.bufT=je.buffer+t),this.wasBlock=!!e.block,e.press==="EV"||e.press==="GR"?(this.buf={b:e.press,v:e.move&&e.move.clone()},this.bufT=je.buffer):e.press?(this.buf={b:e.press,dir:s},this.bufT=je.buffer):(this.bufT-=t)<=0&&(this.buf=null),e.move&&this.lastMove.copy(e.move),this.st+=t,this.state){case"idle":this.free(t,e);break;case"attack":this.updAttack(t);break;case"custom":this.custom(t);break;case"dodge":this.updDodge(t);break;case"grabbed":e.press==="J"||e.press==="K"?this.breakGrab():(this.opp.state!=="custom"||this.st>je.breakWindow+.3)&&this.setState("idle");break;case"rooted":this.st>=this.stun&&this.setState("idle");break;case"hit":case"blockstun":this.pos.addScaledVector(this.vel,t),this.vel.multiplyScalar(Math.max(0,1-9*t)),this.state==="blockstun"&&(this.blocking=!!e.block,this.guard=e.down?"low":"high",this.anim=this.guard==="low"?"blocklow":"block"),this.st>=this.stun&&this.setState("idle");break;case"air":this.y+=this.vy*t,this.vy-=22*t,this.pos.addScaledVector(this.vel,t),this.spinExtra=0,this.y<=0&&(this.y=0,n.dust(this.pos,16,0,0,3),this.game.shake=Math.max(this.game.shake,.15+this.mass*.12),this.setState(this.hp<=0?"ko":"down"),this.invuln=1.2);break;case"down":this.st>.7&&this.setState("getup");break;case"getup":this.pk=this.st/.38,this.st>.38&&this.setState("idle");break}const a=Math.hypot(this.pos.x,this.pos.z),r=this.game.R-this.radius*.5;a>r&&(this.pos.x*=r/a,this.pos.z*=r/a)}free(t,e){if(this.faceOpp(this.turn*t),this.buf&&this.tryStart(this.buf)){this.buf=null;return}if(e.block){this.blocking=!0,this.guard=e.down?"low":"high",this.anim=this.guard==="low"?"blocklow":"block";return}this.blocking=!1;const n=e.move;if(this.mvF=n&&n.lengthSq()>.01?n.dot(this.dir):0,n&&n.lengthSq()>.01){const s=n.dot(this.dir)<-.3?.72:1;this.pos.addScaledVector(n,this.speed*s*(this.charm>0?.62:1)*t),this.anim="walk"}else this.anim="idle"}updAttack(t){const e=this.move,[n,s,a]=this.mt,r=this.st,o=this.opp,c=this.game,l=c.fx;if(r<n)this.phase=0,this.pk=r/n,e.track&&this.faceOpp(this.turn*t),e.lunge&&(e.lunge<0||this.dist()>this.radius+o.radius+.4)&&this.pos.addScaledVector(this.dir,e.lunge*t);else if(r<n+s){if(this.phase=1,this.pk=(r-n)/s,!this.fired){if(this.fired=!0,e.spawn&&c.spawn(e.spawn,this),e.veil&&(this.veil=e.veil,l.ring(this.pos,8380624,2.4,.35),c.tag(this,"VÉU")),e.dustFx){const h=this.pos.clone().addScaledVector(this.dir,1.2);l.dust(h,70,this.dir.x,this.dir.z,11,[.36,.25,.17],.9),l.sparks({x:h.x,y:.2,z:h.z},14,[.6,.45,.3])}if(e.quake){const h=this.pos.clone().addScaledVector(this.dir,1.5);l.dust(h,30,0,0,4),l.ring(h,13148272,2.6,.35),c.shake=Math.max(c.shake,.4)}}if(e.rush&&this.dist()>this.radius+o.radius+.3&&(this.pos.addScaledVector(this.dir,e.rush*t),l.dust(this.pos,40*t,-this.dir.x,-this.dir.z,3)),e.beam)this.beam(t);else if(e.grab)this.hitDone||(this.hitDone=!0,this.tryGrab());else if(e.multi){const h=Math.min(e.multi,Math.floor(this.pk*e.multi)+1);h>this.hitN&&(this.hitN=h,this.inReach(e.range,e.arc)&&(this.hitDone=!0,o.receive(this,h<e.multi?{...e,push:1.2}:e)!=="miss"&&(this.connected=!0)))}else if(e.dmg&&!this.hitDone){const h=this.kickBack?this.dir.clone().negate():this.dir;this.inReach(e.range,e.arc,h)&&(this.hitDone=!0,this.connected=o.receive(this,e)!=="miss")}}else if(r<n+s+a){this.phase=2,this.pk=(r-n-s)/a,e.dmg&&!this.hitDone&&(this.hitDone=!0,c.log({t:"hit",att:this,def:o,m:e,res:"whiff",dmg:0}));const h=this.buf;if(h&&e.next&&this.connected){const u=e.next[(h.dir==="f"||h.dir==="b"||h.dir==="d"?h.dir:"")+h.b]||e.next[h.b];u==="@"?(this.faceOpp(.5),this.tryStart({b:h.b,dir:"n"})&&(this.buf=null)):u&&!this.chain.includes(u)&&(this.buf=null,this.faceOpp(.5),this.startMove(u))}}else this.setState("idle")}beam(t){const e=this.opp,n=this.game,s=this.model.flamePos,a=Ze().set(this.dir.x,-.16,this.dir.z).normalize();if(n.fx.fireJet(s,a,420*t,15,.8),n.fx.embers(s,60*t,.2,5),n.shake=Math.max(n.shake,.15),this.hitDone)return;const r=e.pos.x-this.pos.x,o=e.pos.z-this.pos.z,c=r*this.dir.x+o*this.dir.z,l=Math.abs(r*this.dir.z-o*this.dir.x);c>.4&&c<7.5+e.radius&&l<.65+e.radius*.6&&e.y<2.2&&e.receive(this,{name:"Inferno",dmg:20,stun:.6,push:6,burn:3,chip:.3,fire:!0})!=="miss"&&(this.hitDone=!0)}updVoadora(t){const e=this.opp,n=this.st,s=this.game.fx;if(this.cphase===0)this.phase=0,this.pk=n/.35,n>=.35&&(this.cphase=1,this.st=0,this.from=this.pos.clone(),this.to=this.pos.clone().addScaledVector(this.dir,Math.max(1.2,Math.min(this.dist(),7.5)-.3)),this.hitDone=!1,s.dust(this.pos,18,0,0,3),s.leaves(this.pos,10,3));else if(this.cphase===1){const a=Math.min(1,n/.6);this.phase=1,this.pk=a,this.pos.lerpVectors(this.from,this.to,a),this.y=9.6*a*(1-a),s.norm.emit(this.pos.x,this.y+.8,this.pos.z,0,0,0,.6,.55,.45,.5,.25,0,0,.5,.25),!this.hitDone&&a>.5&&this.dist()<1.25+e.radius&&e.y<2&&(this.hitDone=!0,e.receive(this,{name:"Voadora",dmg:20,stun:.6,push:10,launch:6.5})!=="miss"&&(this.connected=!0,s.ring(e.pos,15259832,4.5,.45),s.dust(e.pos,40,0,0,6),s.leaves(e.pos,30,6))),a>=1&&(this.y=0,this.cphase=2,this.st=0,this.rec=this.connected?.25:.8,s.dust(this.pos,14,0,0,2.5))}else this.phase=2,this.pk=Math.min(1,n/this.rec),n>=this.rec&&this.setState("idle")}updInvert(t){const n=this.st;this.cphase===0?(this.invuln=.05,this.pk=Math.min(1,n/.26),this.pos.addScaledVector(this.dv,3.4/.26*(1.5-this.pk)*t),this.faceOpp(this.turn*2*t),this.game.fx.leaves(this.pos,60*t,2,.3),n>=.26&&(this.cphase=1,this.st=0)):n>=.1&&this.setState("idle")}updTeleport(){const t=this.opp,e=this.st,n=this.game.fx;if(this.invuln=.08,this.cphase===0){if(e>=.2){const s=this.lastMove.lengthSq()>.01?this.lastMove.clone().normalize():t.dir.clone().negate(),a=t.pos.clone().addScaledVector(s,t.radius+this.radius+.8);a.y=0;const r=Math.hypot(a.x,a.z),o=this.game.R-1;r>o&&a.multiplyScalar(o/r),this.pos.copy(a),this.faceOpp(),this.cphase=1,this.st=0,this.anim="appear",n.leaves(this.pos,30,3,.5),n.smoke({x:a.x,y:1,z:a.z},12)}}else this.pk=Math.min(1,e/.16),e>=.16&&this.setState("idle")}updDive(){const t=this.opp,e=this.st,n=this.game.fx;if(this.cphase===0){if(this.invuln=.08,this.pk=Math.min(1,e/.3),e>=.3){let s;if(this.lastMove.lengthSq()>.09)s=this.pos.clone().addScaledVector(this.lastMove.clone().setY(0).normalize(),3.2);else{const o=Ze().subVectors(this.pos,t.pos).setY(0);o.lengthSq()<.01&&o.set(1,0,0),s=t.pos.clone().addScaledVector(o.normalize(),3.4)}s.y=0;const a=Math.hypot(s.x,s.z),r=this.game.R-1;a>r&&s.multiplyScalar(r/a),this.pos.copy(s),this.faceOpp(),this.cphase=1,this.st=0,this.anim="emerge",n.ring(this.pos,6279392,2.6,.4),this.splash(this.pos,40)}}else this.pk=Math.min(1,e/.5),e>=.5&&this.setState("idle")}updDance(t){const e=this.opp,n=this.st,s=.32;if(this.cphase===0){this.pk=Math.min(1,n/s);const a=Ze().subVectors(e.pos,this.pos).setY(0).normalize(),r=Ze().set(-a.z,0,a.x).multiplyScalar(this.dodgeSide);if(this.pos.addScaledVector(r,6.5*(1.2-this.pk)*t),this.faceOpp(this.turn*2*t),this.danced||e.state==="attack"&&e.phase===2&&!e.connected&&e.move&&e.move.dmg){this.game.tag(this,"ENCANTOU!"),this.gain(10),this.game.fx.ring(this.pos,16752320,2,.3),this.setState("idle");return}n>=s&&(this.cphase=1,this.st=0)}else this.pk=Math.min(1,n/.2),n>=.2&&this.setState("idle")}updSkin(){const t=this.st;this.pk=Math.min(1,t/.4),t>=.4&&(this.skin=8,this.game.fx.ring(this.pos,16748472,3,.4),this.splash(this.pos,30),this.setState("idle"))}updFeint(t){const e=this.opp,n=this.st;if(this.pk=Math.min(1,n/.4),this.faceOpp(this.turn*.5*t),!this.baited&&(e.state==="attack"||e.state==="dodge"||e.blocking)&&(this.baited=!0,this.gain(8),this.game.tag(e,"CAIU NO DISFARCE")),n>=.14&&this.buf&&this.buf.b!=="O"){const s=this.buf;this.setState("idle"),this.tryStart(s)&&(this.buf=null);return}n>=.4&&this.setState("idle")}startSuper(){this.energy=0,this.setState("custom"),this.anim="superstart",this.invuln=.55,this.cphase=0,this.game.flash(this),this.custom=()=>{this.pk=Math.min(1,this.st/.45),this.cphase===0&&this.st>=.45?this.dist()<9.5&&this.opp.state!=="ko"?this.game.startCine(this,this.opp):(this.cphase=1,this.st=0,this.anim="hit"):this.cphase===1&&this.st>=.7&&this.setState("idle")}}receive(t,e){if(this.invuln>0||this.state==="down"||this.state==="getup"||this.state==="ko")return"miss";const n=this.game,s=n.fx,a=this.state,r={t:"hit",att:t,def:this,m:e,dmg:0};if(a==="air"&&this.juggle>=je.maxJuggle)return"miss";if(a==="dodge"&&!e.track&&!e.thrown&&this.st>=this.dodge.ev[0]&&this.st<=this.dodge.ev[1])return n.tag(this,"ESQUIVOU"),n.log({...r,res:"dodge"}),"miss";if(!e.track&&!e.thrown&&!e.unblockable&&(a==="attack"&&this.move.evade&&this.st>=this.move.evade[0]&&this.st<=this.move.evade[1]||a==="custom"&&this.custom===this.updDance&&this.cphase===0))return a==="custom"&&!e.dirv&&(this.danced=!0),n.tag(this,"DESVIOU"),n.log({...r,res:"dodge"}),"miss";const o=e.dirv?e.dirv.clone():Ze().subVectors(this.pos,t.pos).setY(0).normalize(),c={x:this.pos.x-o.x*this.radius*.6,y:this.y+(e.h==="low"?.35:this.hitY),z:this.pos.z-o.z*this.radius*.6};if(this.veil>0&&!e.thrown&&!e.unblockable)return this.veil=0,n.tag(this,"VÉU ABSORVEU"),s.ring(this.pos,8380624,4.5,.4),s.sparks(c,26,[.5,1,.9]),n.hitstop=.06,t.y<.5&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<3.2+t.radius&&(t.state==="attack"||t.state==="idle"||t.state==="custom")&&!n.cine&&(t.setState("hit"),t.stun=.4,t.vel.copy(o).multiplyScalar(-9),t.y=0),n.log({...r,res:"veil"}),"block";if((a==="idle"||a==="blockstun")&&this.blocking&&this.dir.dot(o)<-.1&&!e.unblockable){const d=this.guard==="low";if(e.h==="high"&&d)return n.tag(this,"ABAIXOU"),n.log({...r,res:"duck"}),"miss";if(e.h==="low"&&!d||e.h==="mid"&&d)n.tag(this,e.h==="low"?"BAIXO!":"POR CIMA!");else{const g=a==="idle"&&this.pgOk&&this.blockAt<=je.perfect,v=g?0:e.dmg*t.dmgMul*(e.chip??je.chip);return this.hp=Math.max(1,this.hp-v),this.setState("blockstun"),this.blocking=!0,this.guard=d?"low":"high",this.anim=d?"blocklow":"block",this.stun=g?.12:e.bstun||.22,this.tapBlocked=!0,this.vel.copy(o).multiplyScalar((e.push||2)*(g?.2:.55)),s.sparks(c,g?22:8,g?[1,1,.8]:[.7,.8,1]),t.gain(e.dmg*.4),this.gain(e.dmg*(g?1.2:.5)),n.hitstop=g?.09:.04,g&&(n.tag(this,"DEFESA PERFEITA"),e.id&&t.state==="attack"&&(t.setState("hit"),t.stun=je.perfectStagger,t.vel.copy(o).multiplyScalar(-3))),n.log({...r,res:g?"perfect":"block",dmg:v}),"block"}}if(a==="attack"&&this.move.armor&&this.phase<2&&!this.armorUsed&&!e.launch&&!e.thrown&&e.dmg<=8)return this.armorUsed=!0,this.hp=Math.max(1,this.hp-e.dmg*t.dmgMul),t.gain(e.dmg),s.sparks(c,10,[1,.6,.3]),n.hitstop=.05,n.tag(this,"AGUENTOU"),n.log({...r,res:"armor",dmg:e.dmg}),"hit";const l=a==="air",h=a==="attack"&&!e.thrown,u=a==="hit"||a==="rooted"||l,p=e.dmg*t.dmgMul*Math.max(je.scaleMin,1-je.scale*this.taken)*(l?.7:1)*(h?je.counterDmg:1);return this.taken||(t.comboDmg=0),this.taken++,l&&this.juggle++,this.hp-=p,t.gain(p*1.5+this.taken*1.5),this.gain(p*.6),t.combo=this.taken,t.comboT=1.3,t.comboDmg+=p,e.burn&&(this.burn=e.burn),this.vel.copy(o).multiplyScalar(e.push||2),e.launch||this.hp<=0||l||this.y>.05||this.taken>=je.maxHits?(this.y=Math.max(this.y,.02),this.vy=e.launch||(this.hp<=0?5.5:4),this.vel.multiplyScalar(.7),this.setState("air")):e.root&&this.rootImm<=0?(this.setState("rooted"),this.anim="hit",this.stun=e.root,this.rootImm=e.root+4,this.vel.set(0,0,0),n.tag(this,"PRESO!")):(this.setState("hit"),this.stun=(e.stun||.35)+(h?je.counterStun:0)),e.daze&&this.dazeImm<=0&&(this.daze=e.daze,this.dazeImm=e.daze+3,n.tag(this,"DESORIENTADO")),e.charm&&this.charmImm<=0&&(this.charm=e.charm,this.charmImm=e.charm+4,n.tag(this,"ENCANTADO")),h&&n.tag(t,"CONTRA-ATAQUE!"),this.model.snap(this,n.time),n.hitstop=Math.min(.14,.03+p*.006),n.shake=Math.max(n.shake,Math.min(.8,p*.04)),s.sparks(c,6+p,e.fire?[1,.5,.15]:[1,.85,.6]),e.fire?s.fire(c,30,.4,3,.9):s.dust(c,5,o.x,o.z,3),n.onHit(t,this,p),n.log({...r,res:"hit",dmg:p,counter:h,sure:u,hits:this.taken,total:t.comboDmg}),"hit"}}const lv={saci:["bJ","fK","bK","dJ","K"],mula:["fJ","bK","dJ","K","bJ"],curupira:["fJ","bJ","dJ","dK","K"],cuca:["fJ","K","bK","dK","dJ"],iara:["bJ","bK","dJ","K","fK","J"],boto:["fJ","bJ","dJ","bK","K","dK"]},ih={saci:[["J","J","J","K"],1.1],mula:[["J","J","L"],1.6],curupira:[["fJ","J","J","K"],1.6],cuca:[null,1.5],iara:[null,1.3],boto:[["fJ","J","J"],1.5]};class Lu{constructor(t){this.me=t,this.t=.5,this.queue=[],this.blockT=0,this.low=!1,this.seen=null,this.grabRoll=null,this.punished=null,this.mv=new I}q(...t){this.queue=t.map((e,n)=>[e,n===0?0:.2])}press(t,e){e.length===2&&e!=="SP"&&e!=="EV"&&e!=="GR"?(t.dir=e[0],t.press=e[1]):(t.dir="n",t.press=e),e==="EV"&&t.move.copy(this.ev||this.mv)}guard(t){if(t.state==="attack"&&t.move!==this.seen){this.seen=t.move;const e=t.move.h;this.low=e==="low"?Math.random()<.55:e==="mid"?Math.random()<.12:Math.random()<.25,this.me.daze>0&&(this.low=Math.random()<.5)}return this.low}think(t,e){const n=this.me,s=n.opp,a={move:new I,block:!1,press:null};if(n.state==="grabbed")return this.grabRoll===null&&(this.grabRoll=Math.random()<.38?.1+Math.random()*.2:9),(this.grabRoll-=t)<=0&&(a.press="J",this.grabRoll=9),this.queue.length=0,a;if(this.grabRoll=null,n.state==="blockstun")return a.block=!0,a.down=this.guard(s),this.blockT=Math.max(this.blockT,.12),this.queue.length=0,a;if(this.dodgeRoots(t,e,a))return a;if(n.state!=="idle"&&n.state!=="attack")return this.queue.length=0,a;if(this.queue.length)return this.queue[0][1]-=t,this.queue[0][1]<=0&&this.press(a,this.queue.shift()[0]),a;if(n.state!=="idle")return a;if(s.state==="attack"&&s.phase===2&&s.move!==this.punished){const o=s.mt[2]*(1-s.pk),c=n.dist()-n.radius-s.radius,[l,h]=ih[n.kind];if(o>.22&&c<h&&(this.punished=s.move,Math.random()<(n.daze>0?.3:.7)))return this.blockT=0,this.q(...l||Fa[n.kind][0].cmd),a}if(s.state!=="attack"&&(this.punished=null),!(s.state==="custom"&&s.anim==="emerge"))this.emergeSeen=!1;else if(!this.emergeSeen){this.emergeSeen=!0;const o=n.dist()-n.radius-s.radius;if(o<2.4&&Math.random()<.6)return this.blockT=0,o>1.1?this.q("fJ","J"):this.q(...ih[n.kind][0]||Fa[n.kind][0].cmd),a}if(n.kind==="boto"&&s.state==="attack"&&s.phase===0&&s.move!==this.read&&n.dist()-n.radius-s.radius<2.4){this.read=s.move;const o=Math.random(),c=.05+Math.random()*.1;if(s.move.track||s.move.h==="low"){if(o<.55)return this.seen=null,this.blockT=.5,a}else{if(o<.5&&n.cd.mid<=0)return this.queue=[["L",c]],a;if(o<.65)return this.queue=[["bK",c]],a;if(o<.85)return this.seen=null,this.blockT=.45,a}}return this.blockT>0?(this.blockT-=t,a.block=!0,a.down=this.guard(s),a):((this.t-=t)<=0&&(this.t=.16+Math.random()*.22+(n.daze>0?.25:0),this.decide(e)),a.move.copy(this.mv),a)}dodgeRoots(t,e,n){const s=this.me;for(const c of e.projectiles)c.type==="roots"&&c.owner!==s&&!c.hit&&!c.aiSeen&&(c.aiSeen=!0,this.roots={p:c,t:.15+Math.random()*.2,plan:Math.random()});const a=this.roots;if(!a)return!1;if(a.p.hit||!e.projectiles.includes(a.p))return this.roots=null,!1;if((a.t-=t)>0||a.done||s.state!=="idle"||(a.done=!0,a.p.pos.distanceTo(s.pos)>1.9))return!1;const r=new I().subVectors(s.pos,a.p.pos).setY(0);r.lengthSq()<.01&&r.set(-s.dir.z,0,s.dir.x),r.normalize(),this.queue.length=0;const o=()=>{this.seen=s.opp.move,this.low=!0,this.blockT=.6,n.block=!0,n.down=!0};if(a.plan<.45)o();else if(a.plan<.72)s.cd.dodge<=0?(this.ev=r,this.q("EV")):o();else if(a.plan<.86)this.mv.copy(r),this.t=.45,n.move.copy(r);else return!1;return!0}decide(t){const e=this.me,n=e.opp,s=e.dist(),a=Math.random(),r=new I().subVectors(n.pos,e.pos).setY(0).normalize(),o=new I(-r.z,0,r.x).multiplyScalar(Math.random()<.5?1:-1),c=()=>{this.mv.copy(r),Math.random()<.3&&this.mv.addScaledVector(o,.7).normalize()},l=()=>{const g=Fa[e.kind];this.q(...g[Math.floor(Math.random()*g.length)].cmd)},h=()=>{const g=lv[e.kind];this.q(g[Math.floor(Math.random()*g.length)])};if(this.mv.set(0,0,0),Math.random()<.12)return;const u=n.state==="attack"&&n.phase===0||n.state==="custom"&&n.anim==="voadora";if(u&&n.move&&n.move.beam&&s<8.2){if(a<.4&&e.cd.dodge<=0){this.ev=o.clone(),this.q("EV");return}if(a<.7){this.mv.copy(o),this.t=.55;return}if(a<.85){this.seen=null,this.blockT=.7;return}}if(u&&s<4.5){if(a<.4){this.seen=null,this.blockT=.5;return}if(a<.5&&e.cd.def<=0){this.q("O");return}if(a<.64&&e.cd.dodge<=0){this.ev=Math.random()<.75?o.clone():r.clone().negate(),this.q("EV");return}if(a<.72){this.mv.copy(o),this.t=.4;return}}for(const g of t.projectiles)if(g.type!=="roots"&&g.owner!==e&&g.pos.distanceTo(e.pos)<(g.type==="wave"?4.2:g.type==="current"?5.5:g.type==="song"?4.5:3.5)){g.type==="current"?a<.7?(this.low=!0,this.seen=n.move,this.blockT=.5):a<.85&&e.cd.dodge<=0?(this.ev=o.clone(),this.q("EV")):(this.mv.copy(o),this.t=.4):g.type==="song"?a<.5?(this.low=!1,this.seen=n.move,this.blockT=.5):a<.7&&e.cd.dodge<=0?(this.ev=o.clone(),this.q("EV")):(this.mv.copy(o),this.t=.45):g.type==="wave"?a<.22&&e.cd.def<=0&&(e.kind==="curupira"||e.kind==="saci")?this.q("O"):a<.8?(this.low=!1,this.seen=n.move,this.blockT=.65):(this.mv.copy(o),this.t=.45):a<.45?(this.low=!1,this.blockT=.45):(this.mv.copy(o),this.t=.45);return}if(e.energy>=100&&s<7&&a<.5){this.q("SP");return}if(n.state==="down"||n.state==="getup"||n.state==="air"){s<3?this.mv.copy(r).negate().multiplyScalar(.6):s>5&&c();return}const d=s-e.radius-n.radius;if(n.state==="rooted"){d>2.4&&e.kind==="curupira"&&e.cd.mid<=0?this.q("L"):d>.7?this.mv.copy(r):a<.45?this.q("GR"):l();return}if(n.veil>0&&a<.75){a<.25&&s>3&&e.cd.mid<=0&&(e.kind==="saci"||e.kind==="curupira")?this.q("L"):d<2.2?(this.mv.copy(r).negate().addScaledVector(o,.7).normalize(),this.t=.5):(this.mv.copy(o),this.t=.4);return}if(n.state==="custom"&&n.anim==="dance"&&a<.75){d<1.2&&(this.seen=null,this.blockT=.3);return}if(n.state==="custom"&&n.anim==="feint"&&d<2){a<.4?(this.seen=null,this.blockT=.45):a<.6?(this.mv.copy(r).negate(),this.t=.35):a<.72&&d<.6?this.q("GR"):h();return}if(n.kind==="iara"&&d>1.1&&s<7&&a<.45&&e.kind!=="iara"){c(),a<.15&&e.cd.dodge<=0&&(this.ev=r.clone(),this.q("EV"));return}if(n.skin>0&&d<2.4&&a<.3){this.seen=null,this.blockT=.45;return}if(n.blocking&&n.state==="idle"&&d<1.4&&a<.5){d<.55?this.q("GR"):this.mv.copy(r);return}if(e.kind==="saci")s>6?a<.45&&e.cd.mid<=0?this.q("L"):c():s>3?a<.28&&e.cd.special<=0?this.q("I"):a<.4&&e.cd.mid<=0?this.q("L"):c():d>.65?d<1.5&&a<.3?this.q("fJ","J"):d<1.3&&a<.45?this.q("fK"):this.mv.copy(r):a<.5?l():a<.7?h():a<.76?this.q("GR"):a<.88?(this.mv.copy(r).negate().addScaledVector(o,.6).normalize(),this.t=.45):(this.seen=null,this.blockT=.4);else if(e.kind==="curupira")s>6?a<.4&&s<7.3&&e.cd.special<=0?this.q("I"):a<.62&&e.cd.mid<=0?this.q("L"):c():s>3?a<.24&&e.cd.special<=0?this.q("I"):a<.44&&e.cd.mid<=0?this.q("L"):a<.58&&s<3.9?this.q("fJ","J"):c():d>.7?this.mv.copy(r):a<.48?l():a<.68?h():a<.75?this.q("GR"):a<.88?(this.mv.copy(r).negate().addScaledVector(o,.6).normalize(),this.t=.45):(this.seen=null,this.blockT=.4);else if(e.kind==="iara"){const g=n.vel&&n.state==="idle"&&d<4&&this.prevGap!==void 0&&d<this.prevGap-.05;if(this.prevGap=d,a>.68){d>2&&(this.mv.copy(o),this.t=.35);return}d<1.1?a<.12&&e.cd.def<=0?this.q("O"):a<.34?this.q("bJ"):a<.58?this.q("dJ"):a<.7?l():a<.78&&d<.6?this.q("GR"):a<.9?(this.mv.copy(r).negate().addScaledVector(o,.7).normalize(),this.t=.45):(this.seen=null,this.blockT=.45):g&&a<.22?e.cd.mid<=0&&a<.3?this.q("L"):e.cd.special<=0?this.q("I"):this.q("bK"):s>6.5?a<.14&&e.cd.special<=0?this.q("I"):a<.3&&e.cd.mid<=0?this.q("L"):a<.8&&c():s>3.4?a<.12&&e.cd.special<=0?this.q("I"):a<.22&&e.cd.mid<=0?this.q("L"):a<.32&&s<4.4?this.q("fK"):a<.7?(this.mv.copy(o),this.t=.35):a<.82&&this.mv.copy(r).negate():a<.2?this.q("bK"):a<.32?this.q("K"):a<.58?this.q("dK"):a<.7&&e.cd.special<=0?this.q("I"):a<.88?(this.mv.copy(r).negate().addScaledVector(o,.4).normalize(),this.t=.45):h()}else if(e.kind==="boto"){const g=y=>{let x;do x=y[Math.floor(Math.random()*y.length)];while(x===this.last&&y.length>1);return this.last=x,x},v={dance:()=>this.q("L"),feint:()=>this.q("O",g(["J","fJ","K","dJ"])),feintGrab:()=>this.q("O","GR"),route:l,poke:h,counter:()=>this.q("bK"),charge:()=>this.q("fK"),step:()=>this.q("fJ"),sweep:()=>this.q(Math.random()<.5?"dJ":"dK"),skin:()=>this.q("I"),circle:()=>{this.mv.copy(o).addScaledVector(r,.25).normalize(),this.t=.3},guard:()=>{this.seen=null,this.blockT=.4},back:()=>{this.mv.copy(r).negate().addScaledVector(o,.6).normalize(),this.t=.35}},m=y=>y==="dance"?e.cd.mid<=0:y==="feint"||y==="feintGrab"?e.cd.def<=0:y==="skin"?e.cd.special<=0&&e.skin<=0:!0,f=y=>{const x=y.filter(m);v[g(x.length?x:["circle"])]()};n.state==="attack"&&n.phase===0&&d<2.2&&a<.55?f(["dance","dance","counter","guard"]):e.skin<=0&&s<6&&a<.1?f(["skin"]):s>5.5?e.skin>0&&a<.3?f(["charge"]):a<.7?(c(),this.mv.addScaledVector(o,.5).normalize()):f(["circle"]):d>1.1?f(e.skin>0?["charge","charge","step","circle","feint"]:["step","circle","circle","feint","back","charge"]):f(e.skin>0?["route","poke","charge","feintGrab","sweep","dance"]:["route","poke","feint","feintGrab","sweep","counter","dance","back","guard"])}else if(e.kind==="cuca")s>5.5?a<.5&&e.cd.special<=0?this.q("I"):a<.62&&e.cd.def<=0&&s<7.5?this.q("O"):a<.85&&c():s>2.8?a<.34&&e.cd.special<=0?this.q("I"):a<.48&&s<4?this.q("fK"):a<.58&&s<3.6?this.q("K"):a<.68&&e.cd.def<=0?this.q("O"):a<.8?(this.mv.copy(r).negate().addScaledVector(o,.5).normalize(),this.t=.4):c():d>.9?a<.3&&e.cd.mid<=0?this.q("L"):a<.5?this.q("fJ"):a<.62?this.q("K"):this.mv.copy(r):a<.34?l():a<.54?h():a<.68&&e.cd.mid<=0?this.q("L"):a<.78&&d<.6?this.q("GR"):a<.88&&e.cd.def<=0?this.q("O"):(this.seen=null,this.blockT=.45);else{if(e.dir.dot(r)<0&&s<3.2&&a<.7){this.q("L");return}s>7.5?c():s>3.3?a<.24&&e.cd.special<=0?this.q("I"):a<.36&&s<5.5?this.q("fK"):c():d>.95?a<.16&&e.cd.def<=0?this.q("O"):a<.3?this.q("fJ","J","fK"):this.mv.copy(r):a<.42?l():a<.62?h():a<.74?this.q("L"):a<.8&&d<.6?this.q("GR"):a<.9&&e.cd.def<=0?this.q("O"):(this.seen=null,this.blockT=.45)}}}const sh={KeyJ:"J",KeyK:"K",KeyL:"L",KeyI:"I",KeyO:"O",Space:"SP"},ah={2:"J",3:"K",0:"L",1:"I",5:"O",7:"SP"},rh=i=>Math.max(-1,Math.min(1,i));class hv{constructor({onPause:t,onTouch:e}){this.keys=new Set,this.presses=[],this.onPause=t,this.onTouch=e,this.touch=!1,this.t={x:0,y:0,block:!1},this.p={x:0,y:0,block:!1},this.prev=[],this.prevDir=0,this.nav={dx:0,ok:!1},addEventListener("keydown",n=>{(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),!n.repeat&&(this.keys.add(n.code),sh[n.code]&&this.presses.push(sh[n.code]),(n.code==="Escape"||n.code==="KeyP")&&t())}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.keys.clear(),this.t.x=this.t.y=0,this.t.block=!1}),addEventListener("contextmenu",n=>n.preventDefault()),matchMedia("(pointer: coarse)").matches&&this.enableTouch(),addEventListener("pointerdown",n=>{n.pointerType==="touch"&&this.enableTouch()},!0),this.bindTouch()}enableTouch(){this.touch||(this.touch=!0,document.body.classList.add("touch"),this.onTouch&&this.onTouch())}bindTouch(){const t=document.getElementById("stickZone"),e=document.getElementById("stickBase"),n=document.getElementById("stickKnob");let s=null,a=0,r=0;const o=l=>{const h=e.offsetWidth*.5||50;let u=(l.clientX-a)/h,p=(l.clientY-r)/h;const d=Math.hypot(u,p);d>1&&(u/=d,p/=d),n.style.transform=`translate(${u*h}px, ${p*h}px)`;const g=Math.min(1,d),v=.2,m=g<v?0:(g-v)/(1-v);this.t.x=g?u/g*m:0,this.t.y=g?-p/g*m:0},c=l=>{l.pointerId===s&&(s=null,this.t.x=this.t.y=0,n.style.transform="",e.style.left=e.style.top="",e.classList.remove("on"))};t.addEventListener("pointerdown",l=>{if(s===null){l.preventDefault(),s=l.pointerId;try{t.setPointerCapture(s)}catch{}a=l.clientX,r=l.clientY,e.style.left=a+"px",e.style.top=r+"px",e.classList.add("on"),o(l)}}),t.addEventListener("pointermove",l=>{l.pointerId===s&&o(l)}),t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c),document.querySelectorAll("[data-btn]").forEach(l=>{const h=l.dataset.btn;let u=null;const p=d=>{d.pointerId===u&&(u=null,l.classList.remove("down"),h==="BLOCK"&&(this.t.block=!1))};l.addEventListener("pointerdown",d=>{d.preventDefault(),u=d.pointerId;try{l.setPointerCapture(u)}catch{}l.classList.add("down"),h==="BLOCK"?this.t.block=!0:this.presses.push(h)}),l.addEventListener("pointerup",p),l.addEventListener("pointercancel",p)})}frame(){const t=this.nav;t.dx=0,t.ok=!1,this.p.x=this.p.y=0,this.p.block=!1;let e=null;const n=navigator.getGamepads?navigator.getGamepads():[];for(const h of n)if(h&&h.connected){e=h;break}if(!e)return this.prev.length=0,t;const s=h=>!!(e.buttons[h]&&e.buttons[h].pressed),a=h=>s(h)&&!this.prev[h];let r=e.axes[0]||0,o=-(e.axes[1]||0);const c=Math.hypot(r,o);c<.22?r=o=0:c>1&&(r/=c,o/=c),this.p.x=rh(r+(s(15)?1:0)-(s(14)?1:0)),this.p.y=rh(o+(s(12)?1:0)-(s(13)?1:0)),this.p.block=s(4)||s(6);for(const h in ah)a(h)&&this.presses.push(ah[h]);a(9)&&this.onPause();const l=this.p.x>.5?1:this.p.x<-.5?-1:this.p.y<-.5?1:this.p.y>.5?-1:0;return l&&l!==this.prevDir&&(t.dx=l),this.prevDir=l,t.ok=a(0),this.prev=e.buttons.map(h=>h.pressed),t}poll(){const t=this.keys,e=(o,c)=>t.has(o)||t.has(c)?1:0;let n=e("KeyD","ArrowRight")-e("KeyA","ArrowLeft")+this.t.x+this.p.x,s=e("KeyW","ArrowUp")-e("KeyS","ArrowDown")+this.t.y+this.p.y;const a=Math.hypot(n,s);a>1&&(n/=a,s/=a);const r=Math.abs(Math.atan2(n,-s));return this.down=this.down?s<-.35&&r<1.08:s<-.5&&r<.873,{x:n,y:s,down:this.down,block:t.has("ShiftLeft")||t.has("ShiftRight")||this.t.block||this.p.block,press:this.presses.shift()||null}}clear(){this.presses.length=0}}const oh={low:{ratio:1.25,shadow:0,lights:!1,fx:.55},medium:{ratio:1.6,shadow:1024,lights:!0,fx:.8},high:{ratio:2,shadow:2048,lights:!0,fx:1}},ch=["low","medium","high"],Cu="fs.quality",uv=()=>{try{return localStorage.getItem(Cu)}catch{return null}},dv=i=>{try{localStorage.setItem(Cu,i)}catch{}};function fv({renderer:i,arena:t,fx:e,mobile:n,onChange:s}){let a=uv();a!=="auto"&&!oh[a]&&(a="auto");let r="high",o=0,c=0,l=3;function h(p){r=p;const d=oh[p];i.setPixelRatio(Math.min(devicePixelRatio||1,d.ratio));const g=t.sun;g.castShadow=!!d.shadow,d.shadow&&g.shadow.mapSize.x!==d.shadow&&(g.shadow.mapSize.set(d.shadow,d.shadow),g.shadow.map&&(g.shadow.map.dispose(),g.shadow.map=null));for(const v of t.torchLights)v.visible=d.lights;e.mult=d.fx,o=c=0,l=2.5,s(u)}const u={get pref(){return a},get tier(){return r},set(p){a=p,dv(p),h(p==="auto"?n()?"medium":"high":p)},tick(p){if(a!=="auto"||p>.25)return;if(l>0){l-=p;return}if(o+=p,c++,o<2.5)return;const d=o/c;o=c=0;const g=ch.indexOf(r);d>1/40&&g>0&&h(ch[g-1])}};return u.set(a),u}const La="M25 3c1 9 12 13 12 25a13 13 0 0 1-26 0c0-6 3-9 6-12 0 4 1 7 4 7 2-6-1-12 4-20z",lh="M16 6h16l7 24c1 6-5 12-15 12S8 36 9 30z",Zr="M24 4l16 6v12c0 10-7 17-16 22C15 39 8 32 8 22V10z",pv={fist:'<path d="M11 23c0-3 2-5 4.500-5 2 0 3.500 1 4.200 2.600.600-2.100 2.300-3.600 4.500-3.600 2.300 0 4 1.400 4.500 3.400.700-1.400 2.100-2.400 3.800-2.400 2.500 0 4.500 2 4.500 5v9c0 6-4.500 10-11 10h-4c-6.500 0-11-4-11-10z"/><path class="k" d="M16 30h13c2 0 3 1 3 3"/>',leg:'<path d="M17 5h11v19l11 7c3 2 2 8-2 8H15c-2 0-3-2-3-4l3-12z"/><path class="k" d="M14 33h24"/>',flykick:'<g transform="rotate(-35 26 22)"><path d="M6 17h20l7-6 9 6c2 1.500 2 5 0 6.500L36 28H6z"/></g><path class="s" d="M5 34l8-5M10 42l8-5M22 44l6-4"/>',tornado:'<path class="s" d="M7 9c8 3 26 3 34 0M11 18c7 2.500 19 2.500 26 0M16 27c5 2 11 2 16 0M20 35c3 1.500 6 1.500 9 0M24 42h1"/>',smoke:'<circle cx="17" cy="30" r="9"/><circle cx="29" cy="25" r="11"/><circle cx="34" cy="35" r="7"/><path d="M11 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/><path d="M40 4l1.200 3 3 1.200-3 1.200-1.200 3-1.200-3-3-1.200 3-1.200z"/>',cap:'<path d="M9 35c1-15 9-26 24-31-4 7-3 12 1 15 4 4 6 9 6 16z"/><path d="M5 36h38v6H5z"/><path class="k" d="M9 35h31"/>',shieldWind:`<path d="${Zr}"/><path class="k" d="M15 19h13a4 4 0 1 0-4-4M15 27h16a4 4 0 1 1-4 4"/>`,shieldDust:`<path d="${Zr}"/><circle class="kf" cx="19" cy="24" r="5"/><circle class="kf" cx="28" cy="20" r="6"/><circle class="kf" cx="28" cy="30" r="4"/>`,hoof:`<path d="${lh}"/><path class="k" d="M24 27v15"/>`,kick:`<g transform="translate(1 12) rotate(-28 18 20) scale(.74)"><path d="${lh}"/></g><path class="s" d="M33 9l4-6M39 17l7-2M37 26l7 3"/>`,shoe:'<path class="s" style="stroke-width:8" d="M13 8v17a11 11 0 0 0 22 0V8"/><g class="kf"><circle cx="13" cy="13" r="1.700"/><circle cx="13" cy="22" r="1.700"/><circle cx="35" cy="13" r="1.700"/><circle cx="35" cy="22" r="1.700"/><circle cx="24" cy="36" r="1.700"/></g>',flame:`<path d="${La}"/><path class="kf" d="M24 26c3 4 6 6 6 10a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 2 3-3z"/>`,dust:'<circle cx="14" cy="29" r="8"/><circle cx="26" cy="24" r="10"/><circle cx="36" cy="30" r="7"/><path d="M5 33h38v6H5z"/><circle cx="9" cy="12" r="2.500"/><circle cx="21" cy="7" r="2"/><circle cx="39" cy="11" r="3"/>',inferno:`<g transform="translate(-7 15) scale(.58)"><path d="${La}"/></g><g transform="translate(27 15) scale(.58)"><path d="${La}"/></g><path d="${La}"/><path class="kf" d="M24 24c3 4 7 7 7 12a7 7 0 0 1-14 0c0-4 2-6 4-8 1 2 2 2 3-4z"/>`,leaf:'<path d="M7 41C7 19 21 6 42 6c0 21-13 35-35 35z"/><path class="k" d="M10 38L33 15M18 30l1-9M24 24l9 0"/>',roots:'<path class="s" d="M24 5v15M24 20c-4 7-11 6-13 16M24 20c4 7 11 6 13 16M24 20v23M11 36l-5 7M37 36l5 7M18 9l6 5 6-5"/>',invert:'<path d="M27 8L10 24l17 16V30h14V18H27z"/><path class="s" d="M44 14v20" style="opacity:.55"/>',tree:'<path d="M24 2l13 15h-6l10 12H29v15H19V29H7l10-12h-6z"/><path class="k" d="M24 30v12"/>',claw:'<path d="M9 5c5 11 6 24 2 38 7-11 9-24 5-38zM21 3c5 13 6 28 2 42 7-13 9-28 5-42zM33 5c5 11 6 24 2 38 7-11 9-24 5-38z"/>',tail:'<path class="s" style="stroke-width:8" d="M7 13c18-5 32 3 32 15 0 9-9 13-16 8"/><path d="M40 6l5 9-9 2z"/><path class="s" d="M6 40h18"/>',eye:'<path d="M2 24c9-14 35-14 44 0-9 14-35 14-44 0z"/><circle class="kf" cx="24" cy="24" r="8"/><path class="s" d="M8 8l4 5M40 8l-4 5M24 3v6"/>',veil:`<path d="${Zr}"/><path class="kf" d="M29 13a11 11 0 1 0 0 22 9 9 0 1 1 0-22z"/>`,fin:'<path d="M6 38c4-16 16-28 36-32-6 8-8 16-6 26-8-4-18-2-30 6z"/><path class="k" d="M14 32c6-8 14-14 22-18M20 34c4-6 9-10 15-12"/>',tailFin:'<path class="s" style="stroke-width:7" d="M8 10c10 2 18 10 18 20"/><path d="M26 28l16-6-6 12 8 10-18-6z"/>',note:'<circle cx="14" cy="36" r="7"/><circle cx="34" cy="32" r="7"/><path class="s" style="stroke-width:4" d="M20 36V9l20-4v27"/><path class="s" d="M20 15l20-4"/>',current:'<path class="s" style="stroke-width:5" d="M3 30c5-6 9-6 14 0s9 6 14 0 9-6 14 0"/><path class="s" style="stroke-width:3;opacity:.7" d="M3 40c5-4 9-4 14 0s9 4 14 0 9-4 14 0"/><path d="M38 14l8 8-11 2z"/>',dive:'<path d="M24 4c6 8 10 14 10 20a10 10 0 0 1-20 0c0-6 4-12 10-20z"/><path class="s" d="M4 38c5-3 10-3 14 0s10 3 14 0 10-3 14 0M10 45h28"/>',coil:'<path class="s" style="stroke-width:6" d="M24 44c-12 0-16-8-10-13s20-3 20-11-10-11-16-6"/><path d="M14 10l-8-6 2 10z"/><circle class="kf" cx="34" cy="38" r="3"/>',hand:'<path d="M14 42c-4-6-6-12-6-20 0-3 4-3 5 0l2 6V8c0-3 4-3 4 0v12V5c0-3 4-3 4 0v15V7c0-3 4-3 4 0v15V11c0-3 4-3 4 0v17c0 7-3 12-7 14z"/>',shoeW:'<path d="M4 30c8 0 14-6 18-12l6 4c4 3 10 4 16 4v8H4z"/><path class="k" d="M4 34h40"/>',dance:'<circle cx="28" cy="7" r="4"/><path d="M27 13l-5 13 6 6-2 12M22 26l-10 4M27 16l10 6M28 32l10 4"/><path class="s" d="M6 42c6 3 14 3 20 0" style="opacity:.6"/>',dolphin:'<path d="M3 30c8-14 26-20 38-10l5-2-3 6c1 4-2 7-6 7l-8-2-6 7-1-7c-7 0-13 1-19 1z"/><circle class="kf" cx="35" cy="21" r="1.600"/>',hat:'<path d="M4 34c6 4 34 4 40 0-4-2-8-3-11-3l-2-17c-2-4-12-4-14 0l-2 17c-3 0-7 1-11 3z"/><path class="k" d="M15 28h18"/>',mask:'<path d="M4 16c8-3 16-3 20 2 4-5 12-5 20-2-1 12-6 18-12 18-4 0-6-3-8-6-2 3-4 6-8 6-6 0-11-6-12-18z"/><circle class="kf" cx="15" cy="23" r="3"/><circle class="kf" cx="33" cy="23" r="3"/>',jaw:'<path d="M3 6h42l-4 15-5-7-4 7-4-7-4 7-4-7-4 7-4-7-5 7zM3 42h42l-4-15-5 7-4-7-4 7-4-7-4 7-4-7-4 7-5-7z"/>'},_n="#eadfc6",hh={saci:{J:["fist",_n],K:["leg",_n],BLOCK:["shieldWind","#b9c8e6"],L:["tornado","#8fe6d2"],I:["flykick","#ff9466"],O:["smoke","#cdb9ff"],SP:["cap","#ffd27a"]},mula:{J:["hoof",_n],K:["kick",_n],BLOCK:["shieldDust","#b9c8e6"],L:["shoe","#d6dbe4"],I:["flame","#ffa23a"],O:["dust","#e0c090"],SP:["inferno","#ffd27a"]},curupira:{J:["fist",_n],K:["leg",_n],BLOCK:["shieldWind","#b9c8e6"],L:["leaf","#9be06a"],I:["roots","#d8b86a"],O:["invert","#7fe0c0"],SP:["tree","#ffd27a"]},iara:{J:["fin",_n],K:["tailFin",_n],BLOCK:["shieldDust","#b9c8e6"],L:["note","#9ff0ff"],I:["current","#5fd0e0"],O:["dive","#7fc8e8"],SP:["coil","#ffd27a"]},boto:{J:["hand",_n],K:["shoeW",_n],BLOCK:["shieldWind","#b9c8e6"],L:["dance","#ffb0c8"],I:["dolphin","#ff8fb8"],O:["mask","#fff0d0"],SP:["hat","#ffd27a"]},cuca:{J:["claw",_n],K:["tail",_n],BLOCK:["shieldDust","#b9c8e6"],L:["claw","#7fd8e0"],I:["eye","#c79bff"],O:["veil","#5fd0c8"],SP:["jaw","#ffd27a"]}},uh={L:"mid",I:"special",O:"def"};function mv(){const i={},t={};document.querySelectorAll("[data-btn]").forEach(n=>{n.innerHTML='<i class="ring"></i><span class="ico"></span><b class="n"></b>',i[n.dataset.btn]=n,t[n.dataset.btn]={prev:0,max:1,cool:!1,nores:!1,avail:null,q:-1,n:""},n.addEventListener("animationend",s=>{s.animationName==="back"&&n.classList.remove("back")})});function e(n,s,a,r,o){const c=i[n],l=t[n];l.cool!==s&&(l.cool=s,c.classList.toggle("cool",s)),l.nores!==a&&(l.nores=a,c.classList.toggle("nores",a));const h=Math.round(Math.max(0,Math.min(1,r))*100);h!==l.q&&(l.q=h,c.style.setProperty("--p",h+"%")),o!==l.n&&(l.n=o,c.lastElementChild.textContent=o);const u=!s&&!a;u&&l.avail===!1&&(c.classList.remove("back"),c.offsetWidth,c.classList.add("back")),l.avail=u}return{setKind(n){for(const s in hh[n]){const[a,r]=hh[n][s],o=i[s];o.querySelector(".ico").innerHTML=`<svg viewBox="0 0 48 48" aria-hidden="true">${pv[a]}</svg>`,o.style.setProperty("--ic",r),o.classList.remove("back"),Object.assign(t[s],{prev:0,max:1,avail:null})}},update(n){for(const a in uh){const r=uh[a],o=t[a],c=n.cd[r];c>o.prev+1e-4&&(o.max=c),o.prev=c;const l=c>0,h=!l&&n.energy<(Vn[n.kind][r].cost||0);e(a,l,h,l?1-c/o.max:1,l&&c>=1?String(Math.ceil(c)):"")}const s=n.energy>=100;e("SP",!1,!s,n.energy/100,""),i.SP.classList.toggle("ready",s)}}}const Pu="fs.controls";function gv(){const i={scale:1,pad:[0,0],stick:[0,0]};try{Object.assign(i,JSON.parse(localStorage.getItem(Pu))||{})}catch{}return i}function Du(i){const t=document.documentElement.style;t.setProperty("--cs",i.scale),t.setProperty("--padx",i.pad[0]+"px"),t.setProperty("--pady",i.pad[1]+"px"),t.setProperty("--stx",i.stick[0]+"px"),t.setProperty("--sty",i.stick[1]+"px");try{localStorage.setItem(Pu,JSON.stringify(i))}catch{}document.querySelectorAll("[data-cs]").forEach(e=>e.classList.toggle("sel",+e.dataset.cs===i.scale))}var dh=["faces/boto.webp","faces/cuca.webp","faces/curupira.webp","faces/iara.webp","faces/mula.webp","faces/saci.webp","portraits/boto.webp","portraits/cuca.webp","portraits/curupira.webp","portraits/iara.webp","portraits/mula.webp","portraits/saci.webp"];const vv=typeof dh<"u"?dh:[],Ga={};for(const i of vv){const t=i.replace(/\.[^.]+$/,"");Ga[t]||(Ga[t]="./media/"+i)}const Cs=i=>Ga[i]||null,xv=i=>Object.keys(Ga).filter(t=>t.startsWith(i));function yc(i,t,e=""){const n=Cs(i),s=document.createElement("span");if(s.className="pic "+e,!n)return s.innerHTML=t,s;const a=new Image;return a.alt="",a.draggable=!1,a.decoding="async",a.onerror=()=>{s.innerHTML=t},a.src=n,s.append(a),s}const Iu="fs.audio",_v=i=>Math.max(0,Math.min(1,i)),xi={sfx:.8,voice:.8,music:.5};try{Object.assign(xi,JSON.parse(localStorage.getItem(Iu)||"{}"))}catch{}let me=null,Vs=null,fh=null,qs=null;const gi={},Ba={},ph={};let mh=0;const Qe={want:null,on:null,timer:null,g:null,src:null};function Mv(){clearInterval(Qe.timer),Qe.timer=null;const i=Qe.g,t=Qe.src;Qe.g=Qe.src=null,Qe.on=null,i&&(i.gain.cancelScheduledValues(me.currentTime),i.gain.setTargetAtTime(0,me.currentTime,.25),setTimeout(()=>{try{t&&t.stop()}catch{}i.disconnect()},1500))}function Qr(i){if(!me||Qe.on===i||(Mv(),!i))return;Qe.on=i;const t=Qe.g=me.createGain();t.gain.setValueAtTime(0,me.currentTime),t.gain.linearRampToValueAtTime(1,me.currentTime+1.2),t.connect(qs);const e=Ba["audio/music/"+i];if(e){const n=Qe.src=me.createBufferSource();n.buffer=e,n.loop=!0,n.connect(t),n.start();return}}function gh(i,t,e=1){const n=me.createBufferSource();n.buffer=i,n.playbackRate.value=e,n.connect(t),n.start()}const vh=()=>me&&me.state==="running",Kt={vol:xi,get unlocked(){return!!me},unlock(){if(me){me.state==="suspended"&&!document.hidden&&me.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;try{me=new i}catch{return}Vs=me.createDynamicsCompressor(),Vs.threshold.value=-14,Vs.ratio.value=4,Vs.connect(me.destination);for(const e of["sfx","voice","music"])gi[e]=me.createGain(),gi[e].gain.value=xi[e],gi[e].connect(Vs);qs=me.createGain(),qs.connect(gi.music),fh=me.createBuffer(1,me.sampleRate*2,me.sampleRate);const t=fh.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;for(const e of xv("audio/"))fetch(Cs(e)).then(n=>n.arrayBuffer()).then(n=>me.decodeAudioData(n)).then(n=>{Ba[e]=n,e==="audio/music/"+Qe.on&&(Qe.on=null,Qr(Qe.want))}).catch(()=>{});document.addEventListener("visibilitychange",()=>{document.hidden?me.suspend():me.resume()}),me.state==="suspended"&&me.resume(),Qr(Qe.want)},setVol(i,t){xi[i]=Math.round(_v(t)*10)/10,gi[i]&&gi[i].gain.setTargetAtTime(xi[i],me.currentTime,.03);try{localStorage.setItem(Iu,JSON.stringify(xi))}catch{}},play(i,t=1){if(!vh()||xi.sfx<=0)return;const e=performance.now();if(e-(ph[i]||0)<30)return;ph[i]=e;const n=Ba["audio/sfx/"+i];if(n)return gh(n,gi.sfx,t)},voice(i,t,e=!1){if(!vh()||xi.voice<=0)return;const n=performance.now();if(!e&&n-mh<220)return;mh=n;const s=Ba[`audio/voice/${i}_${t}`];if(s)return gh(s,gi.voice,.96+Math.random()*.08)},music(i){Qe.want=i,me&&Qr(i)},duck(i){qs&&qs.gain.setTargetAtTime(i?.3:1,me.currentTime,.1)}},xh=["","FÁCIL","MÉDIO","DIFÍCIL"],yv=["Força","Velocidade","Resistência","Alcance","Mobilidade"],ln={saci:{short:"SACI",tags:"VELOCIDADE · EVASÃO · CONTROLE",diff:2,attrs:[60,100,50,70,100],color:"#c21d12",why:"Rápido e frágil: vence quem entra, bate e some.",tips:["Comece com LEVE, LEVE, LEVE e feche com PESADO.","Solte o Redemoinho de longe e entre atrás dele.","Sumiu no vento atravessa o golpe do adversário — custa energia."],svg:'<svg viewBox="0 0 48 48"><circle cx="24" cy="29" r="13" fill="#3a2418"/><path d="M9 24c1-13 8-20 22-22-3 5-2 9 2 12 4 3 6 6 6 10z" fill="#c21d12"/><circle cx="19" cy="30" r="2" fill="#ffd27a"/><circle cx="29" cy="30" r="2" fill="#ffd27a"/><path d="M19 37q5 4 10 0" stroke="#e6d9bd" stroke-width="2" fill="none"/></svg>'},mula:{short:"MULA",tags:"FORÇA · RESISTÊNCIA · PRESSÃO",diff:1,attrs:[90,50,90,70,40],color:"#ff7a1f",why:"Muita vida, golpes longos e fortes: perdoa erros.",tips:["As patadas alcançam longe: bata antes de o adversário chegar.","A Investida (→ PESADO) aguenta um golpe no caminho.","Adversário nas suas costas? O Coice responde na hora."],svg:'<svg viewBox="0 0 48 48"><path d="M12 46V30c0-6 5-10 12-10s12 4 12 10v16z" fill="#2a1a16"/><path d="M25 2c1 7 10 10 10 19a11 11 0 0 1-22 0c0-5 3-7 5-10 0 3 1 5 3 5 2-4-1-9 4-14z" fill="#ff7a1f"/><path d="M24 14c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-4 2-5 1 1 2 1 3-4z" fill="#ffd27a"/></svg>'},curupira:{short:"CURUPIRA",tags:"AGILIDADE · ARMADILHA · TERRITÓRIO",diff:3,attrs:[70,90,60,80,90],color:"#e2491a",why:"Depende de armadilhas e de ler o adversário.",tips:["A Ira da Floresta nasce sob o adversário: prenda e corra para o combo.","A Lâmina da Mata é rápida: use para interromper de longe.","O Caminho Invertido desliza para onde você apontar e engana o ataque."],svg:'<svg viewBox="0 0 48 48"><path d="M6 24l3-14 5 7 2-13 6 10 4-12 4 12 6-9 1 13 6-6-3 14z" fill="#e2491a"/><path d="M14 22l3-9 4 6 3-9 4 9 4-6 3 9z" fill="#ffa22e"/><circle cx="24" cy="30" r="12" fill="#94603a"/><circle cx="19" cy="29" r="2" fill="#9dff5a"/><circle cx="29" cy="29" r="2" fill="#9dff5a"/><path d="M12 42c6-5 18-5 24 0l-4 5H16z" fill="#3f7a2c"/><path d="M20 36h8" stroke="#2a160c" stroke-width="2"/></svg>'},cuca:{short:"CUCA",tags:"MAGIA · LONGO ALCANCE · AGARRÕES",diff:2,attrs:[70,40,70,90,50],color:"#2a8478",why:"Lenta, mas controla a luta de longe.",tips:["O Pesadelo da Cuca desorienta: acertou, avance.","O Véu do Pesadelo absorve um golpe — levante antes de atacar.","De perto, as Garras da Bruxa e o agarrão castigam quem só defende."],svg:'<svg viewBox="0 0 48 48"><path d="M8 46c-3-16 0-30 10-36h12c10 6 13 20 10 36z" fill="#eeeadf"/><path d="M13 20c0-7 5-11 11-11s11 4 11 11l-3 20c-1 4-4 6-8 6s-7-2-8-6z" fill="#2a8478"/><path d="M17 34h14l-1 8c-1 3-3 4-6 4s-5-1-6-4z" fill="#a9cf9a"/><circle cx="18" cy="19" r="3.2" fill="#ffd23a"/><circle cx="30" cy="19" r="3.2" fill="#ffd23a"/><path d="M18 17v4M30 17v4" stroke="#120a04" stroke-width="1.5"/><path d="M17 34l2 3 2-3 2 3 2-3 2 3 2-3 2 3" stroke="#f2ecd8" stroke-width="1.5" fill="none"/><path d="M13 12h22" stroke="#caa23c" stroke-width="2.5"/></svg>'},iara:{short:"IARA",tags:"ALCANCE · CONTROLE · ÁGUA",diff:3,attrs:[60,60,60,95,70],color:"#2fb3c4",why:"Forte de longe e frágil de perto: a luta é sobre manter a distância.",tips:["O Canto encanta quem vem chegando: ele anda e esquiva mais devagar por um tempo.","A Correnteza corre rente ao chão — defenda baixo quando ela vier.","O Mergulho Encantado tira a Iara do aperto, mas quem ressurge fica exposta."],svg:'<svg viewBox="0 0 48 48"><path d="M4 46c6-6 12-6 20-3s14 3 20-3v8H4z" fill="#1d6f80"/><path d="M10 40c-2-14 1-27 14-31 13 4 16 17 14 31-3-5-7-7-14-7s-11 2-14 7z" fill="#0c3b2c"/><ellipse cx="24" cy="22" rx="9" ry="11" fill="#a07a5a"/><path d="M15 18c2-7 16-7 18 0-4-2-14-2-18 0z" fill="#0c3b2c"/><circle cx="20" cy="22" r="1.8" fill="#9ff0ff"/><circle cx="28" cy="22" r="1.8" fill="#9ff0ff"/><path d="M21 28q3 2 6 0" stroke="#5a2a2a" stroke-width="1.5" fill="none"/><path class="w" d="M6 44c4-3 8-3 12 0s8 3 12 0 8-3 12 0" stroke="#9ff0ff" stroke-width="1.4" fill="none" opacity=".7"/></svg>'},boto:{short:"BOTO",tags:"EVASÃO · LEITURA · FINTA",diff:3,attrs:[65,85,60,60,95],color:"#ff8fb8",why:"Escorregadio e enganador: vence lendo o adversário, não trocando golpes.",tips:["A Dança do Encantado desvia de um golpe no começo do passo — erre a leitura e apanha.","A Pele de Boto dura alguns segundos e muda a investida e a ombrada.","O Disfarce provoca uma reação; aperte um golpe logo depois para emendar."],svg:'<svg viewBox="0 0 48 48"><path d="M8 48c1-10 7-15 16-15s15 5 16 15z" fill="#f2efe6"/><path d="M21 33l3 6 3-6z" fill="#ff8fb8"/><ellipse cx="24" cy="23" rx="8" ry="9.5" fill="#d9a184"/><path d="M8 15h32v3H8z" fill="#f6f3ea"/><path d="M15 15c0-8 18-8 18 0z" fill="#f6f3ea"/><path d="M15 13h18v2H15z" fill="#ff8fb8"/><circle cx="20.5" cy="23" r="1.6" fill="#2a1a16"/><circle cx="27.5" cy="23" r="1.6" fill="#2a1a16"/><path d="M20 28q4 3 8 0" stroke="#7a3a3a" stroke-width="1.5" fill="none"/></svg>'}},Wa="fs.progress",Sc=1,Ge=[{id:"causos",name:"Primeiros Causos",trophies:0,cap:3,cpu:1,legends:["saci","mula","cuca"],text:"Rodas de conversa, beira de fogueira: onde os causos começam."},{id:"trilhas",name:"Trilhas da Mata",trophies:100,cap:5,cpu:2,legends:["curupira"],text:"Mata fechada, rastros que enganam. Aqui o Curupira pode ser encontrado."},{id:"aguas",name:"Águas Encantadas",trophies:300,cap:7,cpu:3,legends:["iara","boto"],text:"Rios e igarapés da Amazônia, território da Iara e do Boto."}],Hi=Ge.flatMap(i=>i.legends),bc=Ge[0].legends,ke={unlock:6,daily:3,achadoCoins:40,win:{trophies:30,xp:50,coins:25},loss:{trophies:-10,xp:20,coins:10},minTime:20,minDmg:25,hpPerLv:.04,dmgPerLv:.03},ms=i=>({vest:i+1,coins:50*i});function ku(i){let t=1,e=100;for(;i>=e;)i-=e,t++,e=100+50*(t-1);return{level:t,into:i,need:e}}function Uu(i){const t=Math.max(1,i|0)-1;return{hpMul:1+ke.hpPerLv*t,dmgMul:1+ke.dmgPerLv*t}}const zu=(i=new Date)=>`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,Ec=i=>Ge.reduce((t,e,n)=>i>=e.trophies?n:t,0),qa=i=>Ge.findIndex(t=>t.legends.includes(i));function Js(){const i={};for(const t of Hi)i[t]={vest:0,unlocked:bc.includes(t),level:1};return{v:Sc,trophies:0,maxArena:0,xp:0,coins:0,daily:{day:"",n:0},pending:0,fav:null,team:[],legends:i}}const vi=(i,t,e,n)=>Number.isFinite(i)?Math.min(e,Math.max(t,Math.floor(i))):n;function Nu(i){if(!i||typeof i!="object"||i.v!==Sc)return null;const t=Js();t.trophies=vi(i.trophies,0,1e6,0),t.xp=vi(i.xp,0,1e8,0),t.coins=vi(i.coins,0,1e8,0),t.maxArena=Math.max(Ec(t.trophies),vi(i.maxArena,0,Ge.length-1,0)),i.daily&&typeof i.daily.day=="string"&&/^\d{4}-\d\d-\d\d$/.test(i.daily.day)&&(t.daily={day:i.daily.day,n:vi(i.daily.n,0,ke.daily,0)}),t.pending=vi(i.pending,0,ke.daily,0);const e=i.legends&&typeof i.legends=="object"?i.legends:{};for(const n of Hi){const s=e[n]&&typeof e[n]=="object"?e[n]:{},a=t.legends[n],r=qa(n)<=t.maxArena;a.vest=r?vi(s.vest,0,9999,0):0,a.unlocked=bc.includes(n)||r&&s.unlocked===!0,a.level=a.unlocked?vi(s.level,1,Ge[t.maxArena].cap,1):1}return t.fav=Hi.includes(i.fav)&&Ki(t).includes(i.fav)?i.fav:null,t.team=Array.isArray(i.team)?[...new Set(i.team.filter(n=>Hi.includes(n)&&t.legends[n].unlocked))].slice(0,3):[],t}function Ou(i){let t=null;try{t=i.getItem(Wa)}catch{return{s:Js(),recovered:!1}}if(t==null)return{s:Js(),recovered:!1};let e=null;try{e=JSON.parse(t)}catch{}const n=Nu(e);if(n)return{s:n,recovered:!1};try{i.setItem(Wa+".bak",String(t).slice(0,2e4))}catch{}return{s:Js(),recovered:!0}}function $o(i,t){try{return i.setItem(Wa,JSON.stringify(t)),!0}catch{return!1}}const Ni=i=>Ge[i.maxArena].cap,Ki=i=>Ge.slice(0,i.maxArena+1).flatMap(t=>t.legends),Sv=i=>Hi.filter(t=>i.legends[t].unlocked);function Fu(i,t){const e=zu(t);i.daily.day!==e&&(i.daily={day:e,n:0})}function wc(i,t){return Fu(i,t),ke.daily-i.daily.n}function Bu(i,t){i.trophies=Math.max(0,t);const e=Ec(i.trophies),n=e>i.maxArena;return n&&(i.maxArena=e),n}function Vu(i,t,e=new Date){const n={valid:!1,reason:"",trophies:0,xp:0,coins:0,achado:!1,newArena:-1};if(t.training)return n.reason="Treino não rende recompensas",n;if(!(t.time>=ke.minTime)||!(t.dmg>=ke.minDmg))return n.reason="Partida sem disputa: sem recompensas",n;const s=t.win?ke.win:ke.loss;n.valid=!0;const a=i.trophies;return Bu(i,a+s.trophies)&&(n.newArena=i.maxArena),n.trophies=i.trophies-a,n.xp=s.xp,n.coins=s.coins,i.xp+=s.xp,i.coins+=s.coins,t.win&&wc(i,e)>0&&(i.daily.n++,i.pending++,n.achado=!0),n}function Hu(i,t,e=1){if(!Ki(i).includes(t))return{ok:!1};const n=i.legends[t];n.vest+=e;let s=!1;return!n.unlocked&&n.vest>=ke.unlock&&(n.vest-=ke.unlock,n.unlocked=!0,n.level=1,s=!0),{ok:!0,awakened:s}}function Gu(i,t){return i.pending<=0||!Ki(i).includes(t)?{ok:!1}:(i.pending--,i.coins+=ke.achadoCoins,{...Hu(i,t),coins:ke.achadoCoins})}function Rc(i,t){const e=i.legends[t];if(!e||!e.unlocked)return{ok:!1,why:"Lenda ainda adormecida"};if(e.level>=Ni(i))return{ok:!1,why:e.level>=Ge[Ge.length-1].cap?"Nível máximo":"Limite da arena atual"};const n=ms(e.level);return e.vest<n.vest?{ok:!1,why:"Faltam Vestígios",c:n}:i.coins<n.coins?{ok:!1,why:"Faltam moedas",c:n}:{ok:!0,c:n}}function Wu(i,t){const e=Rc(i,t);if(!e.ok)return!1;const n=i.legends[t];return n.vest-=e.c.vest,i.coins-=e.c.coins,n.level++,!0}function qu(i,t){return t!==null&&!Ki(i).includes(t)?!1:(i.fav=t,!0)}function Xu(i,t){const e=i.team.indexOf(t);return e>=0?(i.team.splice(e,1),!0):!i.legends[t]||!i.legends[t].unlocked||i.team.length>=3?!1:(i.team.push(t),!0)}const Ku=(i,t)=>i.legends[t]&&i.legends[t].unlocked?i.legends[t].level:1,bv=Object.freeze(Object.defineProperty({__proto__:null,ARENAS:Ge,KEY:Wa,LEGENDS:Hi,RULES:ke,SCHEMA:Sc,START:bc,accountLevel:ku,achadosLeft:wc,addVestigio:Hu,arenaFor:Ec,arenaOfLegend:qa,canEvolve:Rc,cap:Ni,day:zu,effective:Uu,eligible:Ki,evoCost:ms,evolve:Wu,fresh:Js,levelOf:Ku,load:Ou,matchResult:Vu,openAchado:Gu,rollDay:Fu,sanitize:Nu,save:$o,setFav:qu,setTrophies:Bu,toggleTeam:Xu,unlocked:Sv},Symbol.toStringTag,{value:"Module"})),us=i=>`<svg viewBox="0 0 64 64" aria-hidden="true">${i}</svg>`,Ca={saci:us('<path d="M14 50 C22 30 30 14 46 8 C44 22 46 36 52 50 Z" fill="#c8241c" stroke="#ffb08a" stroke-width="2"/><path d="M12 50 h42 a3 3 0 0 1 0 6 h-42 a3 3 0 0 1 0-6Z" fill="#8a140e"/><path d="M46 8 q6 -2 8 3" fill="none" stroke="#ffb08a" stroke-width="2"/><path d="M8 28 q6-4 10 0 t10 0" fill="none" stroke="#e8d9b5" stroke-width="2" opacity=".6"/>'),mula:us('<path d="M18 52 C10 40 12 20 32 14 C52 20 54 40 46 52 L40 52 C44 42 42 28 32 24 C22 28 20 42 24 52 Z" fill="#9a9a9a" stroke="#e8e8e8" stroke-width="2"/><circle cx="21" cy="47" r="1.8" fill="#333"/><circle cx="43" cy="47" r="1.8" fill="#333"/><path d="M32 4 C38 12 40 18 32 24 C24 18 26 12 32 4Z" fill="#ff7a1f"/><path d="M32 10 C35 15 35 19 32 22 C29 19 29 15 32 10Z" fill="#ffd27a"/>'),curupira:us('<g fill="#c9572a" stroke="#ffb08a" stroke-width="1.5"><ellipse cx="22" cy="40" rx="7" ry="11"/><circle cx="17" cy="54" r="2.4"/><circle cx="22" cy="56" r="2.4"/><circle cx="27" cy="54" r="2.4"/><ellipse cx="42" cy="22" rx="7" ry="11"/><circle cx="37" cy="36" r="2.4"/><circle cx="42" cy="38" r="2.4"/><circle cx="47" cy="36" r="2.4"/></g><path d="M8 10 l6 6 M56 54 l-6-6" stroke="#7fd04a" stroke-width="2"/>'),cuca:us('<path d="M12 30 h40 l-4 20 a6 6 0 0 1-6 5 h-20 a6 6 0 0 1-6-5Z" fill="#3a2a40" stroke="#b58ae0" stroke-width="2"/><rect x="9" y="26" width="46" height="6" rx="3" fill="#5a3b6a"/><g fill="#9dff5a" opacity=".85"><circle cx="24" cy="20" r="4"/><circle cx="34" cy="14" r="3"/><circle cx="41" cy="21" r="2.5"/></g><path d="M48 6 a8 8 0 1 0 8 10 a6 6 0 1 1-8-10Z" fill="#e8d9b5"/>'),iara:us('<g fill="#2fa8a0" stroke="#bff3ee" stroke-width="1.4"><path d="M10 34 a8 8 0 0 1 16 0Z"/><path d="M26 34 a8 8 0 0 1 16 0Z"/><path d="M18 46 a8 8 0 0 1 16 0Z"/><path d="M34 46 a8 8 0 0 1 16 0Z"/><path d="M42 34 a8 8 0 0 1 16 0Z"/></g><g fill="#ffd27a"><path d="M20 6 v14 a4 3 0 1 1-2-2.6 V8 l12-3 v12 a4 3 0 1 1-2-2.6 V8Z"/></g><path d="M6 56 q8-5 16 0 t16 0 t16 0" fill="none" stroke="#5fd0e0" stroke-width="2"/>'),boto:us('<ellipse cx="32" cy="40" rx="27" ry="7" fill="#f4efe4" stroke="#c9b48a" stroke-width="2"/><path d="M17 40 C17 22 21 14 32 14 C43 14 47 22 47 40Z" fill="#f4efe4" stroke="#c9b48a" stroke-width="2"/><path d="M17 33 h30 v5 h-30Z" fill="#ff8fb8"/><path d="M8 54 q8-5 16 0 t16 0 t16 0" fill="none" stroke="#ff8fb8" stroke-width="2" opacity=".7"/>')},to={saci:{name:"Gorro Vermelho",desc:"Fio de lã do gorro que, dizem, guarda o poder do Saci. Quem tomasse o gorro mandaria nele."},mula:{name:"Ferradura em Brasa",desc:"Ferradura ainda quente, deixada no galope das noites de quinta para sexta."},curupira:{name:"Pegadas Invertidas",desc:"Rastro de pés virados para trás: quem segue a trilha vai para o lado errado."},cuca:{name:"Caldeirão da Cuca",desc:"Fumaça de um caldeirão de feitiços. A Cuca vem pegar quem não dorme, diz a cantiga."},iara:{name:"Escama e Canto",desc:"Escama brilhante e um eco de canto que chama para o fundo do rio."},boto:{name:"Chapéu Branco",desc:"Chapéu de festa que o Boto nunca tira: esconde o furo de respirar no alto da cabeça."}},Ev={saci:{origin:"Sul e Sudeste do Brasil · raízes indígenas (guarani), africanas e europeias",intro:"Menino travesso de uma perna só, que aparece nos redemoinhos de vento, esconde objetos, embaraça a crina dos cavalos e some numa risada.",trad:["Uma perna só, gorro vermelho e cachimbo","Surge e some dentro de redemoinhos","O gorro é a fonte do seu poder","Brincadeiras e travessuras pela casa e pelo pasto"],jogo:["Golpes, combos e o Poder Folclórico de luta",'Vestígio "Gorro Vermelho" como item colecionável',"Valores de vida, dano e níveis"]},mula:{origin:"Tradição ibérica trazida ao Brasil colonial · difundida no interior (Sudeste, Nordeste e Centro-Oeste)",intro:"Mulher amaldiçoada que vira uma mula sem cabeça, com fogo no lugar do pescoço, e galopa pelos campos nas noites de quinta para sexta-feira.",trad:["Fogo no lugar da cabeça","Ferraduras que soltam faíscas e relincho assustador","Maldição que dura até o canto do galo","Corre sete povoados numa só noite"],jogo:["Coices, investidas e o Poder Folclórico de luta",'Vestígio "Ferradura em Brasa" como item colecionável',"Valores de vida, dano e níveis"]},curupira:{origin:"Tupi · registrado já no século XVI · presente em todo o Brasil, sobretudo no Norte",intro:"Guardião das matas, de cabelos cor de fogo e pés virados para trás. Confunde caçadores que matam sem necessidade e faz quem o persegue se perder.",trad:["Pés virados para trás e rastro enganador","Protetor dos bichos e das árvores","Faz caçadores e lenhadores se perderem","Assobios e sons estranhos na mata"],jogo:["Raízes, folhas e o Poder Folclórico de luta",'Vestígio "Pegadas Invertidas" como item colecionável',"Valores de vida, dano e níveis"]},cuca:{origin:'Coca/Coco da tradição portuguesa e galega · no Brasil, a "papona" das cantigas de ninar',intro:"Velha bruxa que vem pegar as crianças que não querem dormir. Vive na mata e prepara feitiços; sua figura mudou muito ao longo do tempo.",trad:["Assombração das cantigas de ninar","Bruxa velha que faz feitiços","Pega quem não dorme ou desobedece","Mora longe, na mata ou em cavernas"],jogo:["Feitiços, véu e o Poder Folclórico de luta",'Vestígio "Caldeirão da Cuca" como item colecionável',"Valores de vida, dano e níveis"]},iara:{origin:'Amazônia e rios do Norte · nome de origem tupi, "senhora das águas" · mistura com a sereia europeia',intro:"Mulher dos rios de beleza e canto irresistíveis. Quem escuta seu canto, sobretudo pescadores, é levado para o fundo das águas e não volta.",trad:["Metade mulher, metade peixe","Canto que encanta e atrai","Leva quem a segue para o fundo do rio","Aparece no fim da tarde, à beira d'água"],jogo:["Mergulho, correntezas e o Poder Folclórico de luta",'Vestígio "Escama e Canto" como item colecionável',"Valores de vida, dano e níveis"]},boto:{origin:"Amazônia · ribeirinhos dos rios Amazonas, Negro e afluentes",intro:"O boto-cor-de-rosa sai do rio nas noites de festa transformado em rapaz elegante, todo de branco e de chapéu, dança, seduz e volta às águas antes do amanhecer.",trad:["Vira homem nas noites de festa","Roupa branca e chapéu que nunca tira","Galanteador e ótimo dançarino","Volta ao rio antes de o dia nascer"],jogo:['Dança, disfarce, "Pele de Boto" e o Poder Folclórico de luta','Vestígio "Chapéu Branco" como item colecionável',"Valores de vida, dano e níveis"]}},be=i=>document.getElementById(i),Pa=i=>yc((Cs("faces/"+i)?"faces/":"portraits/")+i,ln[i].svg),Xt=(i,t,e)=>{const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n},Qn=(i,t,e="")=>{const n=Xt("button",e,i);return n.addEventListener("click",t),n};function wv({store:i=localStorage,onChange:t=()=>{},sound:e=()=>{}}={}){const n=Ou(i),s=n.s;let a=null;const r=()=>{$o(i,s),h(),t()},o=E=>ln[E].short,c=E=>Ge[E];function l(E){const R=s.legends[E];if(!R.unlocked)return`${Math.min(R.vest,ke.unlock)}/${ke.unlock} VESTÍGIOS`;const A=ms(R.level);return R.level>=Ni(s)?`NV ${R.level} · ${R.vest} VESTÍGIOS`:`NV ${R.level} · ${R.vest}/${A.vest} PARA EVOLUIR`}function h(){const E=ku(s.xp),R=wc(s);be("prof").innerHTML=`<span><b>ARENA</b> ${c(s.maxArena).name}</span><span><b>TROFÉUS</b> ${s.trophies}</span><span><b>CONTA</b> NV ${E.level}</span><span><b>MOEDAS</b> ${s.coins}</span><span><b>ACHADOS HOJE</b> ${R}/${ke.daily}</span>`;const A=Xt("span","pbtn");A.append(Qn("CAMINHO",()=>u("path")),Qn("COLEÇÃO",()=>u("col"))),s.pending>0&&A.append(Qn(`ABRIR ACHADO ·${s.pending}`,()=>f(),"hot")),be("prof").append(A)}function u(E){be("menu").style.display="none",be(E).style.display="flex",E==="path"?p():d(),e("sel")}for(const E of["path","col"])be(E).querySelector(".cback").addEventListener("click",()=>{be(E).style.display="none",be("menu").style.display="flex"});be("ficha").querySelector(".cback").addEventListener("click",()=>{be("ficha").style.display="none"});function p(){const E=Ge[Ge.length-1].trophies,R=be("pathA");R.replaceChildren(),be("pathBar").style.width=Math.min(100,100*s.trophies/E)+"%",be("pathT").textContent=`${s.trophies} TROFÉUS`,Ge.forEach((A,M)=>{const _=M<=s.maxArena,P=Xt("div","arena"+(_?" got":"")+(M===s.maxArena?" cur":""));P.innerHTML=`<small>${A.trophies} TROFÉUS · NÍVEL MÁX. ${A.cap}</small><h3>${A.name}</h3><p>${A.text}</p><em>${_?M===s.maxArena?"ARENA ATUAL":"CONQUISTADA":`FALTAM ${A.trophies-s.trophies} TROFÉUS`}</em>`;const V=Xt("div","alg");for(const H of A.legends){const G=s.legends[H],O=Xt("span","mini"+(G.unlocked?"":" off"));O.append(Pa(H),Xt("b","",_?G.unlocked?o(H):l(H).split(" ")[0]:"?")),V.append(O)}P.append(V),R.append(P)})}function d(){be("team").replaceChildren(Xt("b","","EQUIPE"));for(let j=0;j<3;j++){const Z=s.team[j],ut=Xt("span","slot");Z?ut.append(Pa(Z)):ut.textContent="+",be("team").append(ut)}be("team").append(Xt("em","","Monte uma equipe de 3 lendas despertas (lutas em equipe chegam numa versão futura)."));const E=be("colG");E.replaceChildren(),a||(a=s.fav||"saci");for(const j of Hi){const Z=s.legends[j],ut=qa(j)<=s.maxArena,at=Xt("button","lc"+(Z.unlocked?"":" off")+(j===a?" on":""));at.append(Pa(j),Xt("b","",o(j)+(s.fav===j?" ★":"")),Xt("i","",Z.unlocked?`NV ${Z.level}`:ut?`${Math.min(Z.vest,6)}/6`:"🔒")),at.addEventListener("click",()=>{a=j,d()}),E.append(at)}const R=a,A=s.legends[R],M=qa(R),_=M<=s.maxArena,P=Rc(s,R),V=be("colD");V.replaceChildren();const H=Xt("div","dtop");H.append(Xt("span","sym",Ca[R]),Xt("div","",`<h3>${Vi[R].name}</h3><small>${c(M).name.toUpperCase()}${A.unlocked?" · DESPERTA":_?" · ADORMECIDA":" · ARENA NÃO ALCANÇADA"}</small>`)),V.append(H);const G=A.unlocked?A.level>=Ni(s)?100:100*Math.min(1,A.vest/ms(A.level).vest):100*Math.min(1,A.vest/ke.unlock);V.append(Xt("div","vbar",`<i style="width:${G}%"></i>`),Xt("p","vt",`<b>${to[R].name}</b> · ${l(R)}`));let O;if(!_)O=`Pode ser descoberta a partir de <b>${c(M).name}</b> (${c(M).trophies} troféus). Chegar à arena não desperta a lenda: junte 6 Vestígios.`;else if(!A.unlocked)O=`Junte ${ke.unlock} Vestígios em Achados para despertar.`;else if(A.level>=Ni(s))O=A.level>=Ge[Ge.length-1].cap?"Nível máximo.":`Limite da arena atual (NV ${Ni(s)}). Avance no Caminho para evoluir mais.`;else{const j=ms(A.level),Z=Uu(A.level+1);O=`Próxima evolução: NV ${A.level+1} · ${j.vest} Vestígios + ${j.coins} moedas · vida +${Math.round((Z.hpMul-1)*100)}%, dano +${Math.round((Z.dmgMul-1)*100)}% sobre a base`}V.append(Xt("p","nx",O));const U=Xt("div","dbtn"),Y=Qn("EVOLUIR",()=>{Wu(s,R)&&(r(),e("sel"),d())});Y.disabled=!P.ok,!P.ok&&A.unlocked&&(Y.title=P.why);const D=Qn(s.fav===R?"FAVORITA ★":"FAVORITA",()=>{qu(s,s.fav===R?null:R)&&(r(),d())});D.disabled=!_;const $=Qn(s.team.includes(R)?"TIRAR DA EQUIPE":"PÔR NA EQUIPE",()=>{Xu(s,R)&&(r(),d())});$.disabled=!A.unlocked||!s.team.includes(R)&&s.team.length>=3,U.append(Y,D,$,Qn("FICHA",()=>g(R))),V.append(U)}function g(E){const R=Ev[E],A=be("fichaB");A.replaceChildren();const M=Xt("div","dtop");M.append(Xt("span","sym",Ca[E]),Xt("div","",`<h3>${Vi[E].name}</h3><small>${R.origin}</small>`)),A.append(M,Xt("p","intro",R.intro));const _=Xt("div","fcols");_.append(Xt("div","",`<b>DA TRADIÇÃO POPULAR</b><ul>${R.trad.map(P=>`<li>${P}</li>`).join("")}</ul>`),Xt("div","inv",`<b>CRIADO PARA O JOGO</b><ul>${R.jogo.map(P=>`<li>${P}</li>`).join("")}</ul>`)),A.append(_,Xt("p","note","Versões dos causos variam de região para região; aqui está um resumo das mais conhecidas.")),be("ficha").style.display="flex",be("ficha").scrollTop=0}let v=null,m=null;function f(E){if(s.pending<=0)return;v=E||v;const R=b();m=R.includes(s.fav)?s.fav:R.find(A=>!s.legends[A].unlocked)||R[0],be("ach").className="screen",be("ach").style.display="flex",y(),e("sel")}const b=()=>Ki(s);function y(){const E=be("achB");E.replaceChildren(Xt("small","","ACHADO"),Xt("h2","",`+${ke.achadoCoins} MOEDAS e 1 VESTÍGIO`),Xt("p","","Escolha a lenda que vai receber o Vestígio"+(s.fav?" (a favorita já vem marcada)":"")+":"));const R=Xt("div","apick");for(const A of b()){const M=Xt("button",A===m?"on":"");M.append(Xt("span","sym",Ca[A]),Xt("b","",o(A)+(s.fav===A?" ★":"")),Xt("i","",l(A))),M.addEventListener("click",()=>{m=A,y()}),R.append(M)}E.append(R,Qn("GUARDAR VESTÍGIO",x,"btn"))}function x(){const E=m,R=Gu(s,E);if(!R.ok)return;$o(i,s),h(),t();const A=be("achB"),M=s.legends[E];A.replaceChildren();const _=Xt("div","abig");_.append(Xt("span","sym",Ca[E])),R.awakened&&_.append(Pa(E)),A.append(Xt("small","","VESTÍGIO ENCONTRADO"),_,Xt("h2","",to[E].name),Xt("p","",to[E].desc));const P=R.awakened?100:M.unlocked?M.level>=Ni(s)?100:100*Math.min(1,M.vest/ms(M.level).vest):100*M.vest/ke.unlock;A.append(Xt("div","vbar",`<i style="width:${P}%"></i>`),Xt("p","vt",R.awakened?`<b>${Vi[E].name} DESPERTOU!</b> Agora pode lutar com essa lenda.`:`${o(E)} · ${l(E)}`)),A.append(Qn(s.pending>0?"PRÓXIMO ACHADO":"CONTINUAR",()=>{s.pending>0?y():k()},"btn")),be("ach").className="screen "+(R.awakened?"wake":"got"),e(R.awakened?"win":"sel")}function k(){be("ach").style.display="none";const E=v;v=null,E&&E()}return{s,P:bv,recovered:n.recovered,refresh:h,openAchado:f,save:()=>r(),unlocked:E=>s.legends[E].unlocked,level:E=>Ku(s,E),progressLine:l,pool:()=>Ki(s),cpuLevel:()=>Ge[s.maxArena].cpu,result(E){const R=Vu(s,E);return R.valid&&r(),R}}}const Ac=10,ct=i=>document.getElementById(i),Hn=(i=0,t=0,e=0)=>new I(i,t,e),Ce=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),Ju=matchMedia("(pointer: coarse)").matches,wn=new d1({antialias:!Ju,powerPreference:"high-performance"});wn.shadowMap.enabled=!0;wn.shadowMap.type=Eh;wn.toneMapping=Rh;wn.toneMappingExposure=1.15;document.body.prepend(wn.domElement);const ce=new f1,fn=new pn(42,1,.1,300),ot=new B1(ce),Yu=X1(ce,ot,Ac);function sr(){wn.setSize(innerWidth,innerHeight),fn.aspect=innerWidth/innerHeight,fn.updateProjectionMatrix(),ot.resize(wn.domElement.height)}addEventListener("resize",sr);addEventListener("orientationchange",()=>setTimeout(sr,250));sr();const L={scene:ce,fx:ot,R:Ac,time:0,hitstop:0,shake:0,projectiles:[],cine:null,mode:"menu",phase:"intro",pt:0,timer:60,round:1,slow:1,spawn(i,t){const e=Ru[i],n=t.opp;if(Kt.play(i==="roots"?"roots":"shot"),i==="roots"){const o=Hn().subVectors(n.pos,t.pos).setY(0),c=o.length();c>e.reach&&o.multiplyScalar(e.reach/c);const l=t.pos.clone().add(o),h=fu();h.position.copy(l),ce.add(h),L.projectiles.push({type:i,owner:t,mesh:h,pos:l,vel:Hn(),t:0,up:0,hit:!1,held:!1,life:9});return}const s=i==="tornado"?du():i==="leaf"?V1():i==="song"?pu():i==="current"?xc():H1(),a=i==="tornado"?0:i==="leaf"?1.15:i==="song"?1.45:i==="current"?.22:1,r=t.pos.clone().addScaledVector(t.dir,1);s.position.set(r.x,a,r.z),s.rotation.y=Math.atan2(t.dir.x,t.dir.z),s.scale.setScalar(.2),ce.add(s),L.projectiles.push({type:i,owner:t,mesh:s,pos:r,h:a,vel:t.dir.clone().multiplyScalar(e.speed),life:e.life})},spawnGhost(i){const t=i.model.root.clone(!0),e=new Ne({color:9305978,transparent:!0,opacity:.5,depthWrite:!1});t.traverse(s=>{s.isMesh&&(s.material=e,s.castShadow=!1)}),ce.add(t);let n=0;ot.objs.push(s=>{if(n+=s,e.opacity=.5*Math.max(0,1-n/.7),n>=.7)return ce.remove(t),e.dispose(),!0})},flash(i){ki(.55),ar(`<span style="font-size:.36em">${i.super}</span><small>PODER FOLCLÓRICO</small>`,1.3),Kt.play("super"),Kt.voice(i.kind,"super",!0),L.stats&&L.stats[i===St?0:1].supers++,L.tutorial&&i===St&&L.tut&&Ji[L.tut.i]?.full&&!(L.tut.ok>0)&&kc()},startCine(i,t){const e=Hn().subVectors(t.pos,i.pos).setY(0);e.lengthSq()<.01&&e.copy(i.dir),e.normalize(),L.cine={att:i,def:t,d:e,t:0,s:{},from:i.pos.clone(),tor:null,ghosts:[],y0:t.y},i.custom=()=>{},t.setState("idle"),t.vel.set(0,0,0),rr(),ct("bars").classList.add("on"),ct("hud").classList.add("cine")},onHit(i,t,e){if(t===St&&En.touch&&navigator.vibrate&&navigator.userActivation?.hasBeenActive!==!1)try{navigator.vibrate(Math.min(70,12+e*2))}catch{}},paused:!1,training:!1,dummy:"parado",events:[],tag(i,t){const e=ct(i===St?"tag1":"tag2");e.textContent=t,e.classList.remove("on"),e.offsetWidth,e.classList.add("on")},log(i){L.events.push(i),L.events.length>80&&L.events.shift(),L.training&&Pv(i),Fv(i),L.tutorial&&Bv(i)}};window.__game=L;L.gfx={renderer:wn,camera:fn};let St=null,Gt=null,Tc=null,Nn=null;function Lc(i,t){if(!(St&&St.kind===i&&Gt.kind===t)){for(const e of[St,Gt])e&&(e.veilMesh&&ce.remove(e.veilMesh),e.dispose());St=new nh(i,L),Gt=new nh(t,L),St.opp=Gt,Gt.opp=St,Tc=new Lu(Gt),L.F=[St,Gt];for(const e of[St,Gt])e.model.root.traverse(n=>{n.isMesh&&!n.material.transparent&&(n.castShadow=!0)});if(i===t){const e=new Set;Gt.model.root.traverse(n=>{const s=n.material;n.isMesh&&s.color&&!e.has(s)&&(e.add(s),s.color.offsetHSL(.14,-.1,.05))})}}}const Cc=()=>{St.reset(-2.4,0,Math.PI/2),Gt.reset(2.4,0,-Math.PI/2)};Lc("curupira","cuca");Cc();L.KINDS=Sn;let Gi=null;const En=new hv({onPause:()=>Yi(),onTouch:()=>Gi&&Gi.pref==="auto"&&Gi.set("auto")});Gi=fv({renderer:wn,arena:Yu,fx:ot,mobile:()=>Ju||En.touch,onChange(i){sr(),document.querySelectorAll("[data-q]").forEach(t=>t.classList.toggle("sel",t.dataset.q===i.pref))}});document.querySelectorAll("[data-q]").forEach(i=>i.addEventListener("click",()=>Gi.set(i.dataset.q)));const On=()=>({move:Hn(),block:!1,press:null}),He=Hn(0,0,1);function Rv(){const i=En.poll();return{move:Hn(He.z*i.x-He.x*i.y,0,-He.x*i.x-He.z*i.y),block:i.block,press:i.press,down:i.down}}function Yi(i){i=i??!L.paused,(L.mode!=="fight"||L.phase==="over")&&(i=!1),L.paused=i,ct("pause").style.display=i?"flex":"none",En.clear(),Kt.duck(i),i&&fr()}ct("pauseBtn").addEventListener("click",()=>Yi(!0));ct("resume").addEventListener("click",()=>Yi(!1));ct("quit").addEventListener("click",()=>nd());document.addEventListener("visibilitychange",()=>{document.hidden&&Yi(!0)});function Av(){if(!(!En.touch||window.Capacitor))try{const i=document.documentElement,t=()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}};!document.fullscreenElement&&i.requestFullscreen?i.requestFullscreen({navigationUI:"hide"}).then(t,()=>{}):t()}catch{}}function Tv(i){if(!i.dx&&!i.ok)return;const t=["ach","ficha","path","col","opts","how","pause","over","menu"].map(ct).find(s=>getComputedStyle(s).display!=="none");if(!t)return;const e=[...t.querySelectorAll("button")].filter(s=>s.offsetParent);let n=e.indexOf(document.activeElement);i.dx?(n=n<0?0:(n+i.dx+e.length)%e.length,e[n].focus()):n>=0&&e[n].click()}let jo=0;function ar(i,t=1.2){const e=ct("msg");e.innerHTML=i,e.style.transition="none",e.classList.remove("on"),e.offsetWidth,e.style.transition="",e.classList.add("on"),jo=t}function ki(i){const t=ct("flash");t.style.transition="none",t.style.opacity=i,t.offsetWidth,t.style.transition="",t.style.opacity=0}const $u=mv(),Zo=gv();Du(Zo);document.querySelectorAll("[data-cs]").forEach(i=>i.addEventListener("click",()=>{Zo.scale=+i.dataset.cs,Du(Zo)}));const ju=[["mid","L"],["special","I"],["def","O"]],gs=[1,1];function Lv(i){[St,Gt].forEach((n,s)=>{const a=s+1,r=Math.max(0,n.hp)/n.maxHp;gs[s]=r>gs[s]?r:Math.max(r,gs[s]-i*.35),ct("h"+a).style.width=r*100+"%",ct("g"+a).style.width=gs[s]*100+"%",ct("h"+a).classList.toggle("burn",n.burn>0);const o=ct("e"+a);o.firstElementChild.style.width=n.energy+"%",o.classList.toggle("full",n.energy>=100),[...ct("w"+a).children].forEach((c,l)=>c.classList.toggle("on",l<n.wins))}),ct("timer").textContent=L.training?"∞":Math.ceil(Math.max(0,L.timer));for(const[n,s]of[["tag1",St],["tag2",Gt]]){const a=ct(n);a.classList.contains("on")&&(Mn.set(s.pos.x,s.y+s.tagY,s.pos.z).project(fn),a.style.transform=`translate(calc(${((Mn.x*.5+.5)*innerWidth).toFixed(0)}px - 50%), ${((-Mn.y*.5+.5)*innerHeight).toFixed(0)}px)`)}const t=n=>St.cd[n]>0||St.energy<(Vn[St.kind][n].cost||0);[...ct("cds").children].forEach((n,s)=>n.classList.toggle("off",t(ju[s][0]))),document.body.classList.toggle("dazed",St.daze>0&&L.phase==="fight"),document.body.classList.toggle("charmed",St.charm>0&&L.phase==="fight"),$u.update(St);const e=ct("combo");St.combo>=2?(e.textContent=St.combo+" GOLPES",e.style.opacity=1):e.style.opacity=0}const Cv={hit:"ACERTOU",block:"BLOQUEADO",perfect:"DEFESA PERFEITA",dodge:"ESQUIVADO",duck:"PASSOU POR CIMA",armor:"ABSORVIDO",whiff:"ERROU",grab:"AGARROU",break:"ESCAPOU DO AGARRÃO",veil:"ABSORVIDO PELO VÉU"},Xa=i=>typeof i=="number"?(i>0?"+":"")+i:i;function Pv(i){const t=(i.f||i.att)===St;if(i.t==="move"){if(!t)return;const e=i.m,n=Tu(e);ct("dMove").textContent=(Pc[St.lastDir]||"")+e.name+(e.h?" · "+Au[e.h]:""),ct("dFrames").textContent=n?`prep ${n.startup} · ativo ${n.active} · recup ${n.recovery}`+(n.onBlock!==void 0?` · no acerto ${Xa(n.onHit)} · no bloqueio ${Xa(n.onBlock)}`:""):"",ct("dRes").textContent=""}else{let e=(t?"VOCÊ: ":"ADVERSÁRIO: ")+(i.m&&i.m.name||"Golpe")+" · "+Cv[i.res]+(i.dmg?" · dano "+i.dmg.toFixed(1):"");i.res==="hit"&&(e+=` · ${i.hits} golpe${i.hits>1?"s":""} · total ${i.total.toFixed(1)}`+(i.hits>1?i.sure?" · GARANTIDO":" · NÃO GARANTIDO":"")+(i.counter?" · CONTRA-ATAQUE":"")),ct(t?"dRes":"dOpp").textContent=e}}let Da=0,_h=!1;function Dv(i){const t=L.dummy;if(t==="cpu")return Tc.think(i,L);const e=On();if(t==="parado")return e;if(t==="ataca"){const n=St.pos.x-Gt.pos.x,s=St.pos.z-Gt.pos.z,a=Math.hypot(n,s);return a>1.7?e.move.set(n/a,0,s/a):(Da-=i)<=0&&(Da=1.2,e.press="J"),e}return(Da-=i)<=0&&(Da=.7,_h=Math.random()<.5),e.block=!0,e.down=t==="baixo"||t==="misto"&&_h,t==="misto"&&Gt.state==="grabbed"&&Math.random()<i*4&&(e.press="J"),e}function Ps(i){L.dummy=i,document.querySelectorAll("[data-dm]").forEach(t=>t.classList.toggle("sel",t.dataset.dm===i))}document.querySelectorAll("[data-dm]").forEach(i=>i.addEventListener("click",()=>Ps(i.dataset.dm)));let Si="luta";const Zu=i=>{Si=i,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("sel",t.dataset.mode===i)),Ic()};document.querySelectorAll("[data-mode]").forEach(i=>i.addEventListener("click",()=>Zu(i.dataset.mode)));Zu("luta");const Ka={J:"LEVE",K:"PESADO",L:"PODER 1",I:"PODER 2",O:"PODER 3"},Pc={f:"→ ",b:"← ",d:"↓ ",n:""},Iv=i=>i.length===2?Pc[i[0]]+Ka[i[1]]:Ka[i];function Qu(i){const t=Vn[i],e=(s,a)=>{const r=Tu(a)||{};return`<tr><td>${s}</td><td>${a.name}</td><td>${a.grab?"AGARRÃO":Au[a.h]||"—"}</td><td>${r.startup??"—"}</td><td>${Xa(r.onHit)??"—"}</td><td>${Xa(r.onBlock)??"—"}</td></tr>`};let n="<table><tr><th>COMANDO</th><th>GOLPE</th><th>ALTURA</th><th>PREP.</th><th>ACERTO</th><th>BLOQUEIO</th></tr>";for(const s of["J","K"])for(const a of["n","f","b","d"])n+=e(Pc[a]+Ka[s],t[Yo[s][a]]);for(const s of["L","I","O"])n+=e(Ka[s],t[Yo[s].n]);return n+=e("→ + toque na DEFESA",t.grab)+"</table>",n+="<p><b>COMBOS</b><br>"+Fa[i].map(s=>`<b>${s.name}:</b> ${s.cmd.map(Iv).join(", ")} — <i>${s.note}</i>`).join("<br>")+"</p>",n+="<p><b>→</b> na direção do adversário · <b>←</b> para longe dele · <b>↓</b> direcional para baixo (tem prioridade: na diagonal também vale como baixo). Números em quadros (60/s): positivo = vantagem de quem bate.<br><b>DEFESA</b> segurar = defesa alta (para golpes altos e médios) · <b>↓ + DEFESA</b> = defesa baixa (para golpes baixos; golpes altos passam por cima, médios acertam).<br><b>ESQUIVA</b> toque rápido na DEFESA com o direcional para o lado ou para trás · golpes giratórios acompanham a esquiva.<br><b>DEFESA PERFEITA</b> levantar a defesa no instante do golpe desequilibra o atacante · <b>AGARRÃO</b> fura a defesa; aperte LEVE ou PESADO para se soltar.</p>",n}ct("movesBtn").addEventListener("click",()=>{const i=ct("moves"),t=i.style.display!=="block";t&&(i.innerHTML=Qu(St.kind)),i.style.display=t?"block":"none"});for(const i of["tag1","tag2"])ct(i).addEventListener("animationend",t=>t.target.classList.remove("on"));function rr(){for(const i of L.projectiles)ce.remove(i.mesh);L.projectiles.length=0}function or(){const i=L.cine;if(i){i.tor&&ce.remove(i.tor);for(const t of i.ghosts)ce.remove(t);for(const t of i.extra||[])ce.remove(t);i.def.spinExtra=0,L.cine=null,ct("bars").classList.remove("on"),ct("hud").classList.remove("cine"),document.body.classList.remove("night","deep","party")}}function td(){or(),rr(),St.reset(-3,0,Math.PI/2),Gt.reset(3,0,-Math.PI/2),St.model.snap(St,L.time),Gt.model.snap(Gt,L.time),gs[0]=gs[1]=1,He.set(0,0,1),L.timer=60,L.phase="intro",L.pt=0,L.slow=1,Nn=null,En.clear(),Ja[0]=St.hp,Ja[1]=Gt.hp;const i=!L.training&&L.round===1,t=St.wins===1&&Gt.wins===1;L.cues=L.training?[[0,L.tutorial?"TUTORIAL":"TREINO",1,null],[.9,"LUTE!",.7,"go"]]:i?[[0,`ROUND 1<small>${ln[St.kind].short} × ${ln[Gt.kind].short}</small>`,1,null],[1.1,"3",.5,"count"],[1.7,"2",.5,"count"],[2.3,"1",.5,"count"],[2.9,"LUTE!",.7,"go"]]:[[0,`ROUND ${L.round}`+(t?"<small>ROUND FINAL</small>":""),1.2,null],[1.4,"LUTE!",.7,"go"]],L.fightAt=L.training?1:i?2.9:1.5,L.longIntro=i}const Ja=[0,0],Mh=()=>({dmg:0,tries:0,hits:0,combo:0,blocks:0,perfect:0,dodges:0,grabs:0,supers:0});let Ys="random";const eo=["random",...Sn];function ed(i,t=Si==="luta"){const e=t?We.pool():Sn;if(Ys!=="random"&&e.includes(Ys))return Ys;const n=e.filter(s=>s!==i);return n.length?n[Math.floor(Math.random()*n.length)]:e[0]}const yh=new Set;function kv(i){const t={iara:[gu,mu,vu,pu,xc],boto:[xu]},e=new ge;for(const n of i)if(t[n]&&!yh.has(n)){yh.add(n);for(const s of t[n])e.add(s())}if(e.children.length){e.position.set(0,-50,0),ce.add(e);try{wn.compile(ce,fn)}catch{}ce.remove(e)}}function cr(i,t=!1,e=null,n=!1){Sn.includes(e)||(e=ed(i)),or(),rr(),Lc(i,e),kv([i,e]),t=t||n;const s=t?[1,1]:[We.level(i),We.cpuLevel()];L.F.forEach((a,r)=>{const o=We.P.effective(s[r]);a.level=s[r],a.dmgMul=o.dmgMul,a.maxHp=Vi[a.kind].hp*o.hpMul,a.hp=a.maxHp}),L.training=t,document.body.classList.toggle("training",t),L.events.length=0,ct("moves").style.display="none",L.tutorial=n,document.body.classList.toggle("tutorial",n),ct("tut").classList.remove("ok"),(n||L.dummy==="ataca")&&Ps("parado"),L.stats=[Mh(),Mh()],L.matchT=0;for(const a of["opts","how"])ct(a).style.display="none";for(const a of["dMove","dFrames","dRes","dOpp"])ct(a).textContent="";ct("dMove").textContent="MODO TREINO · pausa: boneco e lista de golpes";for(const a of[St,Gt])a.wins=0,a.energy=0;ct("n1").textContent=St.name+(t?"":" · NV "+St.level),ct("n2").textContent=Gt.name+(t?" · BONECO":" · CPU NV "+Gt.level),ct("cds").innerHTML=ju.map(([a,r])=>`<span>${r} · ${Vn[i][a].name.toUpperCase()}</span>`).join(""),$u.setKind(i),ct("menu").style.display="none",ct("over").style.display="none",ct("hud").style.display="block",L.mode="fight",Yi(!1),L.round=1,td(),L.tut=n?{i:0,ok:0,n:0,mv:0,fin:!1}:null,n&&cd(),Kt.music("fight")}function Sh(i,t){if(Nn=i,i&&i.wins++,L.phase="ko",L.pt=0,ar(t,2.2),Kt.play("ko"),t==="K.O.")for(const e of[St,Gt])e!==i&&Kt.voice(e.kind,"ko",!0)}ct("again").addEventListener("click",()=>cr(St.kind,L.training,Gt.kind,L.tutorial));const Uv=i=>{Ys=i,ct("oppBtn").textContent=i==="random"?"ALEATÓRIO":ln[i].short};ct("oppBtn").addEventListener("click",()=>Uv(eo[(eo.indexOf(Ys)+1)%eo.length]));function nd(){We.refresh(),Dc(),L.training=!1,L.tutorial=!1,L.tut=null,document.body.classList.remove("training","dazed","charmed","tutorial"),Kt.music("menu"),L.dummy==="ataca"&&Ps("parado"),L.mode="menu",Yi(!1),or(),rr(),ct("over").style.display="none",ct("hud").style.display="none",ct("menu").style.display="flex",ct("msg").classList.remove("on"),L.slow=1;for(const i of[St,Gt])i.energy=0;Cc()}ct("tomenu").addEventListener("click",nd);let mn=(()=>{try{const i=localStorage.getItem("fs.sel");return Sn.includes(i)?i:"saci"}catch{return"saci"}})();const Zs={},Ya=i=>yc("portraits/"+i,ln[i].svg);for(const i of Sn){const t=document.createElement("button");t.className="face",t.dataset.k=i,t.setAttribute("aria-label",Vi[i].name);const e=document.createElement("b");e.textContent=ln[i].short,t.append(yc((Cs("faces/"+i)?"faces/":"portraits/")+i,ln[i].svg),e,document.createElement("i")),t.addEventListener("click",()=>{mn===i&&t.classList.contains("on")?hr():lr(i)}),ct("faces").append(t),Zs[i]=t}function lr(i,t=!1){mn=i;try{localStorage.setItem("fs.sel",i)}catch{}const e=ln[i];for(const n of Sn)Zs[n].classList.toggle("on",n===i);ct("selArt").replaceChildren(Ya(i)),ct("selArt").style.setProperty("--glow",e.color+"70"),ct("selName").textContent=Vi[i].name,ct("selTags").textContent=e.tags,ct("selDiff").innerHTML="★".repeat(e.diff)+"<i>"+"★".repeat(3-e.diff)+"</i> "+xh[e.diff],ct("selAttrs").innerHTML=yv.map((n,s)=>`<dt>${n}</dt><dd><i style="width:${e.attrs[s]}%"></i></dd>`).join(""),ct("selWhy").textContent=e.why,ct("selTips").innerHTML=e.tips.map(n=>`<li>${n}</li>`).join(""),ct("howTips").innerHTML=`<b>${e.short} · ${xh[e.diff]}</b><br>`+e.tips.join("<br>"),t||Kt.play("sel"),Ic()}var We=wv({onChange:()=>Dc(),sound:i=>Kt.play(i)});L.causos=We;function Dc(){for(const i of Sn){const t=We.unlocked(i);Zs[i].classList.toggle("lock",!t),Zs[i].querySelector("i").textContent=t?"NV "+We.level(i):"🔒"}Ic()}function Ic(){if(!We)return;const i=Si==="luta"&&!We.unlocked(mn),t=ct("fightBtn");t.classList.toggle("locked",i),t.textContent=i?"ADORMECIDA · "+We.progressLine(mn):Si==="luta"?"LUTAR":Si==="treino"?"TREINAR":"TUTORIAL"}We.refresh();Dc();lr(mn,!0);function hr(){if(L.mode!=="menu")return;if(Kt.unlock(),Av(),document.activeElement?.blur?.(),Si==="luta"&&!We.unlocked(mn)){const t=ct("fightBtn");t.classList.remove("nope"),t.offsetWidth,t.classList.add("nope");return}const i=ed(mn);Si==="luta"?rd(mn,i):cr(mn,!0,i,Si==="tutorial")}ct("fightBtn").addEventListener("click",hr);const id=i=>{ct("menu").style.display="none",ct(i).style.display="flex",fr()},sd=i=>{ct(i).style.display="none",ct("menu").style.display="flex"};ct("optsBtn").addEventListener("click",()=>id("opts"));ct("howBtn").addEventListener("click",()=>id("how"));document.querySelectorAll(".back").forEach(i=>i.addEventListener("click",()=>sd(i.closest(".screen").id)));for(const[i,t]of[["menu","bg/menu"],["over","bg/results"]]){const e=Cs(t);e&&(ct(i).style.backgroundImage=`linear-gradient(rgba(13,7,6,.55),rgba(13,7,6,.88)), url("${e}")`)}{const i=Cs("bg/vs");i&&document.querySelectorAll("#vs .half").forEach(t=>{t.style.backgroundImage=`linear-gradient(rgba(0,0,0,.25),rgba(0,0,0,.6)), url("${i}")`})}let ur=0,ad=null;function rd(i,t){Lc(i,t),Cc(),ad=[i,t],ct("menu").style.display="none",ct("vsA").replaceChildren(Ya(i)),ct("vsB").replaceChildren(Ya(t)),ct("vsNA").textContent=ln[i].short,ct("vsNB").textContent=ln[t].short;const e=ct("vs");e.classList.remove("out","on"),e.offsetWidth,e.classList.add("on"),L.mode="vs",ur=2.4,Kt.play("vs")}function dr(){if(L.mode!=="vs")return;const[i,t]=ad;cr(i,!1,t),Kt.play("doors");const e=ct("vs");e.classList.add("out"),setTimeout(()=>{e.classList.contains("out")&&e.classList.remove("on","out")},650)}ct("vs").addEventListener("pointerdown",()=>{ur<2.1&&dr()});addEventListener("keydown",i=>{if(L.mode==="vs"){["Escape","Enter"," "].includes(i.key)&&ur<2.2&&(i.preventDefault(),dr());return}if(L.mode!=="menu"||ct("ach").style.display==="flex")return;if(ct("ficha").style.display==="flex"){i.key==="Escape"&&(ct("ficha").style.display="none");return}for(const s of["path","col","opts","how"])if(ct(s).style.display==="flex"){i.key==="Escape"&&sd(s);return}if(ct("menu").style.display==="none")return;const t=i.key.toLowerCase(),e=Sn.indexOf(mn),n=t==="arrowright"||t==="d"?1:t==="arrowleft"||t==="a"?-1:t==="arrowdown"||t==="s"?2:t==="arrowup"||t==="w"?-2:0;n?(i.preventDefault(),lr(Sn[(e+n+Sn.length)%Sn.length]),Zs[mn].focus()):t==="enter"&&!(document.activeElement instanceof HTMLButtonElement)&&(i.preventDefault(),hr())});const zv=[["DANO CAUSADO","dmg",i=>Math.round(i)],["GOLPES ACERTADOS","hits"],["PRECISÃO","acc",i=>i+"%"],["MAIOR COMBO","combo"],["DEFESAS","blocks"],["DEFESAS PERFEITAS","perfect"],["ESQUIVAS","dodges"],["AGARRÕES","grabs"],["PODER FOLCLÓRICO","supers"]];function Nv(){const i=Nn===St,t=L.stats,e=ct("over");e.classList.toggle("lose",!i),ct("oArt").replaceChildren(Ya(St.kind)),ct("overT").textContent=i?"VITÓRIA":"DERROTA";const n=Math.round(L.matchT);ct("overS").textContent=`${Nn.name} VENCE · ${St.wins} × ${Gt.wins} · ${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`;for(const a of t)a.acc=a.tries?Math.min(100,Math.round(100*a.hits/a.tries)):0;let s=`<tr><th></th><th>${ln[St.kind].short}<small>VOCÊ</small></th><th>${ln[Gt.kind].short}<small>CPU</small></th></tr>`;for(const[a,r,o=c=>c]of zv){const c=t[0][r],l=t[1][r];s+=`<tr><td>${a}</td><td${c>l?' class="b"':""}>${o(c)}</td><td${l>c?' class="b"':""}>${o(l)}</td></tr>`}ct("stats").innerHTML=s,e.style.display="flex",Ov(i),Kt.music(null),Kt.play(i?"win":"lose")}function Ov(i){const t=We.result({win:i,training:L.training,time:L.matchT,dmg:L.stats[0].dmg}),e=We.P,n=e.ARENAS;let s=t.valid?`${t.trophies>=0?"+":""}${t.trophies} TROFÉUS · +${t.xp} EXPERIÊNCIA · +${t.coins} MOEDAS`:t.reason.toUpperCase();if(t.achado?s+=` · ACHADO! (${e.achadosLeft(We.s)} restantes hoje)`:t.valid&&i&&(s+=" · ACHADOS DE HOJE ESGOTADOS"),t.newArena>=0){const a=n[t.newArena],r=a.legends.length>1;s+=`<br><b>NOVA ARENA: ${a.name.toUpperCase()}</b> · ${a.legends.map(o=>ln[o].short).join(" e ")} já pode${r?"m":""} aparecer em Achados`}ct("rew").innerHTML=s,od(),L.lastReward=t}const od=()=>{const i=We.s.pending;ct("achBtn").style.display=i>0?"":"none",ct("achBtn").textContent="ABRIR ACHADO"+(i>1?" ·"+i:"")};ct("achBtn").addEventListener("click",()=>We.openAchado(od));function Fv(i){if(L.mode!=="fight"||!L.stats)return;const t=L.stats;if(i.t==="move"){const s=i.f===St?0:1;if(i.m.name==="Esquiva lateral"||i.m.name==="Recuo"){t[s].dodges++,Kt.play("dodge");return}t[s].tries++,Kt.play("whoosh",.9+Math.random()*.2),Math.random()<.35&&Kt.voice(i.f.kind,"attack");return}const e=i.att===St?0:1,n=1-e;switch(i.res){case"hit":t[e].hits++,t[e].combo=Math.max(t[e].combo,i.hits||1),Kt.play(i.dmg>=8?"hitH":"hitL"),Kt.voice(i.def.kind,"hurt");break;case"block":t[n].blocks++,Kt.play("block");break;case"perfect":t[n].blocks++,t[n].perfect++,Kt.play("perfect");break;case"veil":Kt.play("perfect");break;case"grab":t[e].hits++,t[e].grabs++,Kt.play("grab");break;case"break":case"armor":Kt.play("block");break;case"dodge":case"duck":Kt.play("dodge");break}}const no=(i,t)=>t.some(e=>Vn[St.kind][e]===i),Hs=i=>i.t==="move"&&i.f===St,Ji=[{t:"MOVER-SE",k:"W A S D movem em 3D: W/S andam em profundidade",m:"Arraste o lado esquerdo da tela",move:!0},{t:"COMBO LEVE",k:"Chegue perto e aperte J, J, J",m:"Chegue perto e toque 3× no botão grande",ev:i=>i.t==="hit"&&i.att===St&&i.res==="hit"&&i.hits>=3},{t:"ATAQUE PESADO",k:"K: mais lento, mais forte",m:"Botão ao lado do grande",ev:i=>Hs(i)&&no(i.m,["heavy","fHeavy","bHeavy","dHeavy"])},{t:"GOLPE BAIXO",k:"S + J ou S + K (S manda, mesmo na diagonal)",m:"Direcional para baixo + ataque",ev:i=>Hs(i)&&i.m.h==="low"},{t:"GOLPE DE AVANÇO",k:"Direção do adversário + J ou K",m:"Direcional na direção do boneco + ataque",ev:i=>Hs(i)&&no(i.m,["fLight","fHeavy"])},{t:"DEFESA",k:"Segure Shift: o boneco vai atacar (2 defesas)",m:"Segure o botão de defesa: o boneco vai atacar (2 defesas)",dummy:"ataca",need:2,ev:i=>i.t==="hit"&&i.att===Gt&&(i.res==="block"||i.res==="perfect")},{t:"ESQUIVA",k:"Toque rápido em Shift + lado ou trás",m:"Toque rápido na defesa + direcional para o lado ou para trás",ev:i=>Hs(i)&&(i.m.name==="Esquiva lateral"||i.m.name==="Recuo")},{t:"AGARRÃO",k:"Perto: toque rápido em Shift + direção do adversário",m:"Perto: toque na defesa + direcional para o boneco",ev:i=>i.t==="hit"&&i.att===St&&i.res==="grab"},{t:"PODERES",k:"L, I ou O: golpes sobrenaturais com recarga",m:"Botões de aro colorido",ev:i=>Hs(i)&&no(i.m,["mid","special","def"])},{t:"PODER FOLCLÓRICO",k:"Barra cheia: Espaço",m:"Barra cheia: botão dourado",full:!0}];function cd(){const i=L.tut,t=Ji[i.i];ct("tutN").textContent=`PASSO ${i.i+1} DE ${Ji.length}`,ct("tutT").textContent=t.t,ct("tutH").textContent=En.touch?t.m:t.k,Ps(t.dummy||"parado")}function kc(){L.tut.ok=.8,ct("tut").classList.add("ok"),Kt.play("perfect")}function Bv(i){const t=L.tut;if(!t||t.fin||t.ok>0||L.phase!=="fight")return;const e=Ji[t.i];e.ev&&e.ev(i)&&++t.n>=(e.need||1)&&kc()}function Vv(i){const t=L.tut;if(!t||t.fin||L.phase!=="fight")return;if(t.ok>0){if((t.ok-=i)>0)return;t.i++,t.n=0,t.mv=0,t.ok=0,ct("tut").classList.remove("ok"),t.i>=Ji.length?(t.fin=!0,document.body.classList.remove("tutorial"),Ps("parado"),ar("TUTORIAL<small>CONCLUÍDO · CONTINUE TREINANDO</small>",2.6),Kt.play("win")):cd();return}const e=Ji[t.i];e.move&&L.lastIn&&L.lastIn.move.lengthSq()>.1&&(t.mv+=i)>=1.2&&kc(),e.full&&St.energy<100&&!L.cine&&(St.energy=100)}for(const i of["pointerdown","keydown"])addEventListener(i,()=>Kt.unlock(),{capture:!0});document.addEventListener("click",i=>{const t=i.target.closest("button");t&&!t.closest(".face, #touch, .vol")&&Kt.play("ui")},{capture:!0});const Hv=[["music","MÚSICA"],["sfx","EFEITOS"],["voice","VOZES"]];document.querySelectorAll(".volbox").forEach(i=>{i.innerHTML=Hv.map(([t,e])=>`<div class="vol" data-vol="${t}"><span>${e}</span><button data-d="-1" aria-label="Diminuir ${e}">−</button><i><b></b></i><button data-d="1" aria-label="Aumentar ${e}">+</button><em></em></div>`).join("")});function fr(){document.querySelectorAll(".vol").forEach(i=>{const t=Kt.vol[i.dataset.vol];i.querySelector("i b").style.width=t*100+"%",i.querySelector("em").textContent=Math.round(t*100)+"%"})}document.querySelectorAll(".vol button").forEach(i=>i.addEventListener("click",()=>{const t=i.parentElement.dataset.vol;Kt.unlock(),Kt.setVol(t,Kt.vol[t]+.1*i.dataset.d),fr(),t==="voice"?Kt.voice(mn,"attack",!0):t==="sfx"&&Kt.play("hitL")}));fr();Kt.music("menu");function Gv(){const i=St,t=Gt;if(i.y>.6||t.y>.6||i.anim==="gone"||t.anim==="gone")return;const e=t.pos.x-i.pos.x,n=t.pos.z-i.pos.z,s=Math.hypot(e,n)||.001,a=i.radius+t.radius;if(s>=a)return;const r=a-s,o=t.mass/(i.mass+t.mass),c=e/s,l=n/s;i.pos.x-=c*r*o,i.pos.z-=l*r*o,t.pos.x+=c*r*(1-o),t.pos.z+=l*r*(1-o)}function Wv(i){for(let t=L.projectiles.length-1;t>=0;t--){const e=L.projectiles[t],n=Ru[e.type],s=e.owner.opp,a=Math.hypot(s.pos.x-e.pos.x,s.pos.z-e.pos.z);let r=!1;if(e.type==="roots")if(e.t+=i,!e.hit)e.mesh.userData.set(1,0,L.time),ot.dust(e.pos,16*i,0,0,1.6),e.t>=n.warn&&(e.hit=!0,e.t=0,Kt.play("rootsUp"),ot.dust(e.pos,36,0,0,5),ot.leaves(e.pos,26,5),L.shake=Math.max(L.shake,.3),s.y<.4&&a<n.hitR+s.radius&&(s.receive(e.owner,{...n,dirv:Hn().subVectors(s.pos,e.owner.pos).setY(0).normalize()}),e.held=s.state==="rooted",e.held&&e.mesh.position.copy(s.pos).setY(0)));else{const o=e.t<.4||e.held&&s.state==="rooted";e.up+=((o?1:0)-e.up)*Math.min(1,i*(o?24:8)),e.mesh.userData.set(0,e.up,L.time),r=!o&&e.up<.04}else{e.life-=i,e.pos.addScaledVector(e.vel,i),e.mesh.position.set(e.pos.x,e.h,e.pos.z);const o=n.life-e.life,c=Math.min(1,e.life/.2,o/.15+.2);if(e.type==="tornado")e.mesh.userData.spin(L.time),e.mesh.scale.setScalar(.85*c),ot.leaves(e.pos,24*i,2.5,.7),ot.dust(e.pos,14*i,0,0,2);else if(e.type==="leaf")e.mesh.rotation.z+=24*i,e.mesh.scale.setScalar(c),ot.leaves({x:e.pos.x,y:e.h,z:e.pos.z},40*i,1.5,.3);else if(e.type==="song")e.mesh.userData.set(L.time),e.mesh.scale.setScalar((.7+o*.6)*c),Math.random()<i*30&&ot.add.emit(e.pos.x+(Math.random()-.5),e.h+(Math.random()-.5),e.pos.z+(Math.random()-.5),0,.6,0,.5,.9,1,.3,.4,0,1,.4,.8);else if(e.type==="current")e.mesh.userData.set(L.time),e.mesh.scale.setScalar((.8+o*.5)*c),ot.dust(e.pos,30*i,e.vel.x*.1,e.vel.z*.1,2.5,[.45,.75,.85],.4);else{e.mesh.scale.setScalar((1+o*.3)*c);for(let l=0;l<2;l++)ot.add.emit(e.pos.x+(Math.random()-.5)*1.6,.3+Math.random()*1.6,e.pos.z+(Math.random()-.5)*1.6,0,.8,0,.55,.3,1,.45,.4,0,1,.6,.7)}r=e.life<=0||Math.hypot(e.pos.x,e.pos.z)>Ac+1,!r&&s.y<2&&a<n.hitR+s.radius&&s.receive(e.owner,{...n,dirv:e.vel.clone().normalize()})!=="miss"&&(r=!0,e.type==="wave"?(ot.ring(s.pos,10116351,3,.4),ot.sparks({x:e.pos.x,y:1.2,z:e.pos.z},18,[.7,.4,1])):e.type==="song"||e.type==="current"?(ot.ring(s.pos,6279392,3,.4),ot.sparks({x:e.pos.x,y:e.h+.3,z:e.pos.z},16,[.5,.9,1]),ot.dust(e.pos,24,0,0,4,[.45,.75,.85],.5)):(ot.leaves(e.pos,30,5),ot.dust(e.pos,20,0,0,4)))}r&&(ce.remove(e.mesh),L.projectiles.splice(t,1))}}function qv(i){const t=L.cine,{att:e,def:n,d:s}=t;t.t+=i;const a=t.t,r=(o,c)=>a>=c&&!t.s[o]&&(t.s[o]=!0);if(e.kind==="saci"){if(r("v",0)&&(e.anim="vanish",ot.leaves(e.pos,30,3,.5),ot.smoke({x:e.pos.x,y:1,z:e.pos.z},12)),r("g",.3)&&(e.anim="gone",t.tor=du(),t.tor.position.copy(n.pos).setY(0),ce.add(t.tor)),t.tor&&!t.s.hit){const o=.8+n.radius,c=Ce((a-.5)/.9);t.tor.scale.setScalar(.001+o*Ce((a-.3)/.6)),t.tor.userData.spin(L.time),n.y=t.y0+(2.6-t.y0)*c,n.anim="air",n.spinExtra+=13*i*c,ot.leaves(n.pos,90*i,5,1.6),ot.dust(n.pos,30*i,0,0,4),L.shake=Math.max(L.shake,.12)}if(a>=1.5&&!t.s.hit){r("a",1.5)&&(t.S=n.pos.clone().addScaledVector(s,-3.4),e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="dive",e.pos.copy(t.S),e.y=7,e.model.snap(e,L.time));const o=Math.min(1,(a-1.5)/.7)**2;e.pos.lerpVectors(t.S,t.E||(t.E=n.pos.clone().addScaledVector(s,-.5)),o),e.y=7+(n.y+.5-7)*o,ot.norm.emit(e.pos.x,e.y+.8,e.pos.z,0,0,0,.6,.55,.45,.6,.3,0,0,.5,.3)}if(r("hit",2.2)){ce.remove(t.tor),t.tor=null,n.hp-=38*n.opp.dmgMul,n.spinExtra=0,n.setState("air"),n.vy=-13,n.vel.copy(s).multiplyScalar(3.5),n.model.snap(n,L.time);const o=n.pos;ot.ring(o,15259832,8,.6),ot.ring(o,16777215,4,.35),ot.dust(o,90,0,0,8),ot.leaves(o,90,9),ot.sparks({x:o.x,y:n.y,z:o.z},40),L.shake=1,L.hitstop=.2,ki(.5),t.L=n.pos.clone().addScaledVector(s,-1.8)}t.s.hit&&(e.y=Math.max(0,e.y-11*i),e.pos.lerp(t.L,Math.min(1,i*6)),e.y===0&&(e.anim="idle"),n.update(i,On())),a>=3.2&&ds()}else if(e.kind==="curupira"){const o=t.tor;if(r("p",0)&&(e.anim="whistle",e.faceOpp(),t.tor=fu(),t.tor.position.copy(n.pos).setY(0),t.tor.scale.setScalar(.9+n.radius*.9),ce.add(t.tor),t.wh=$l(),ce.add(t.wh),t.tr=W1(6),t.tr.position.copy(e.pos).setY(0),t.tr.rotation.y=Math.atan2(s.x,s.z)+2.3,ce.add(t.tr),t.extra=[t.wh,t.tr]),t.wh&&(t.wh.position.set(e.pos.x+e.dir.x*.35,1.55,e.pos.z+e.dir.z*.35),t.wh.rotation.y=Math.atan2(e.dir.x,e.dir.z),t.wh.userData.set(a,Math.max(0,1-(a-.45)/.25)),a>.7&&(ce.remove(t.wh),t.wh=null)),t.tr&&t.tr.userData.set(Ce((a-.25)/.65),Math.min(1,(a-.2)*6,Math.max(0,(1.9-a)/.5))),a<.4&&(n.y=Math.max(0,n.y-8*i),ot.leaves(e.pos,30*i,3,1.2)),!t.s.hit){const c=Ce((a-.4)/.25)*(1+.25*Ce((a-.7)/.6)),l=Ce((a-1.5)/.35);if(t.tor.userData.set(a<.4?1:0,c+.3*l,L.time,l),a>=.4){n.anim="hit";const h=.9*Ce((a-.45)/.5)+.5*l,u=Ce((a-1.85)/.25);n.y=h*(1-u*u),ot.dust(n.pos,25*i,0,0,3),L.shake=Math.max(L.shake,.08+l*.12)}}if(r("r",.4)&&(n.hp-=10*n.opp.dmgMul,ot.dust(n.pos,60,0,0,6),ot.leaves(n.pos,50,6),ot.ring(n.pos,8376394,4,.4),L.shake=.6,L.hitstop=.08,L.tag(n,"PRESO!")),r("v",.9)&&(e.anim="vanish",ot.leaves(e.pos,50,4,1),ot.smoke({x:e.pos.x,y:1,z:e.pos.z},14,1.1)),r("g",1.12)&&(e.anim="gone"),r("ap",1.35)&&(e.pos.copy(n.pos).addScaledVector(s,-1.8),e.y=0,e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="rootsPull",e.model.snap(e,L.time),ot.leaves(e.pos,60,5,1.2),ot.smoke({x:e.pos.x,y:.8,z:e.pos.z},10,1),L.shake=.3),r("sl",1.85)&&(e.anim="rootsSlam",ot.leaves(n.pos,40,5)),r("hit",2.1)){n.y=0,n.hp-=28*n.opp.dmgMul,n.setState("air"),n.vy=6,n.vel.copy(s).multiplyScalar(4),n.model.snap(n,L.time);const c=n.pos;ot.ring(c,10215520,8,.6),ot.ring(c,16777215,4,.35),ot.dust(c,110,0,0,8),ot.leaves(c,110,9),ot.sparks({x:c.x,y:.4,z:c.z},40,[.7,1,.4]),L.shake=1,L.hitstop=.2,ki(.5),t.up=1.55}t.s.hit&&(t.up=Math.max(0,t.up-i*3.2),o&&o.userData.set(0,t.up,L.time,Math.max(0,t.up-.6)),a>2.6&&(e.anim="idle"),n.update(i,On())),a>=3.1&&ds()}else if(e.kind==="cuca"){if(r("p",0)){e.anim="superprep",document.body.classList.add("night");const o=new Ne({color:9063935,transparent:!0,opacity:0,depthWrite:!1});t.gmat=o;for(let c=0;c<4;c++){const l=e.model.root.clone(!0);l.traverse(h=>{h.isMesh?(h.material=o,h.castShadow=!1):h.isLight&&(h.visible=!1)}),l.visible=!1,ce.add(l),t.ghosts.push(l)}}if(a<.5&&(n.y=Math.max(0,n.y-8*i),e.faceOpp(4*i),ot.add.emit(e.pos.x+(Math.random()-.5),.4+Math.random()*2,e.pos.z+(Math.random()-.5),0,1.5,0,.6,.3,1,.5,.5,0,1,.6,.8)),r("v",.5)&&(e.anim="vanish",ot.smoke({x:e.pos.x,y:1,z:e.pos.z},14,1.2)),r("g",.8)&&(e.anim="gone"),a>=.6&&a<1.7){const o=Math.min(1,(a-.6)/.25,(1.7-a)/.2),c=3.1-Ce((a-.6)/1.1)*1.2+n.radius;t.gmat.opacity=.5*o,n.anim="hit",t.ghosts.forEach((l,h)=>{const u=a*3.4+h*1.5708,p=Math.exp(-(((a-(.8+h*.22))/.08)**2)),d=Math.max(n.radius+.2,c-.9*p*(c-n.radius));l.visible=!0,l.position.set(n.pos.x+Math.sin(u)*d,.15*p,n.pos.z+Math.cos(u)*d),l.rotation.set(.35*p,u+Math.PI,0),p>.6&&!t.s["gl"+h]&&(t.s["gl"+h]=1,ot.sparks({x:n.pos.x,y:1.3,z:n.pos.z},10,[.6,.9,.8]),L.shake=Math.max(L.shake,.25))}),L.shake=Math.max(L.shake,.06)}if(r("ap",1.7)){for(const o of t.ghosts)o.visible=!1;e.pos.copy(n.pos).addScaledVector(s,-(e.radius+n.radius+.15)),e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="nmHold",e.model.snap(e,L.time),n.hp-=12*n.opp.dmgMul,ot.smoke({x:e.pos.x,y:1,z:e.pos.z},12,1.2),ot.sparks({x:n.pos.x,y:1.2,z:n.pos.z},24,[.7,.4,1]),L.shake=.6,L.hitstop=.1,L.tag(n,"AGARRADO!"),t.tor=G1(),t.tor.position.set(n.pos.x,1.3,n.pos.z),t.tor.rotation.y=Math.atan2(-s.x,-s.z),t.tor.scale.setScalar(.01),ce.add(t.tor)}if(a>=1.7&&!t.s.hit&&(n.anim="hit",n.y=.45*Ce((a-1.7)/.4),t.tor.scale.setScalar((.75+n.radius*.55)*Ce((a-1.7)/.35)),t.tor.userData.open(1-Ce((a-2.25)/.15)),a>=2.25&&e.anim==="nmHold"&&(e.anim="nmSnap"),t.tor.userData.fade(1),t.tor.position.y=1.3+n.y),r("hit",2.4)){e.anim="grabThrow",n.hp-=26*n.opp.dmgMul,n.setState("air"),n.vy=7.5,n.vel.copy(s).multiplyScalar(5),n.model.snap(n,L.time);const o={x:n.pos.x,y:n.y+1,z:n.pos.z};ot.sparks(o,60,[.75,.45,1]),ot.smoke(o,18,1.4),ot.ring(n.pos,9063935,8,.6),ot.ring(n.pos,15259903,4,.35),L.shake=1,L.hitstop=.2,ki(.5),document.body.classList.remove("night")}t.s.hit&&(t.tor&&t.tor.userData.fade(Math.max(0,1-(a-2.4)/.35)),a>2.8&&(e.anim="idle"),n.update(i,On())),a>=3.3&&ds()}else if(e.kind==="iara"){r("p",0)&&(e.anim="iaraSing",e.faceOpp(),document.body.classList.add("deep"),t.wh=$l(),t.wh.traverse(l=>{l.material&&l.material.color.setHex(10481919)}),ce.add(t.wh),t.rf=gu(),t.rf.position.set((e.pos.x+n.pos.x)/2,0,(e.pos.z+n.pos.z)/2),ce.add(t.rf),t.bed=mu(),t.bed.position.copy(n.pos).setY(0),ce.add(t.bed),t.co=vu(),t.co.position.copy(n.pos).setY(0),t.co.scale.setScalar(.8+n.radius*.5),ce.add(t.co),t.extra=[t.wh,t.rf,t.bed,t.co]),a<.5&&(n.y=Math.max(0,n.y-8*i),e.faceOpp(4*i)),t.wh&&(t.wh.position.set(e.pos.x+e.dir.x*.3,1.85,e.pos.z+e.dir.z*.3),t.wh.rotation.y=Math.atan2(e.dir.x,e.dir.z),t.wh.userData.set(a,Math.max(0,1-(a-.9)/.3))),t.rf.userData.set(Ce(a/.5)*(1-Ce((a-2.5)/.4)),L.time);const o=Ce((a-.7)/.4),c=Ce((a-1.1)/.35)*(1-Ce((a-2.45)/.35));if(t.bed.userData.set(c,L.time),a>=.7&&!t.s.hit&&(n.anim="hit",n.spinExtra+=7*i*o,n.y=.55*o,L.shake=Math.max(L.shake,.08),t.co.userData.set(Ce((a-1.4)/.5),1,L.time),ot.dust({x:n.pos.x,y:n.y+.3,z:n.pos.z},40*i,0,0,3,[.45,.75,.85],.5),Math.random()<i*25&&ot.add.emit(n.pos.x+(Math.random()-.5)*2,Math.random()*2.4,n.pos.z+(Math.random()-.5)*2,0,1.4,0,.6,.9,1,.18,1,0,1,.2,.7)),r("w",.8)&&(n.hp-=10*n.opp.dmgMul,ot.ring(n.pos,6279392,4,.45),L.shake=.4,L.hitstop=.06,L.tag(n,"ENVOLVIDO!")),r("dv",1.3)&&(e.pos.copy(n.pos).addScaledVector(s,-(e.radius+n.radius+.35)),e.facing=Math.atan2(s.x,s.z),e.updDir(),e.anim="iaraCoil",e.model.snap(e,L.time),ot.ring(e.pos,6279392,3,.4),ot.dust(e.pos,40,0,0,4,[.45,.75,.85],.5),ce.remove(t.wh),t.wh=null),r("cl",1.9)&&(n.hp-=10*n.opp.dmgMul,ot.sparks({x:n.pos.x,y:1.2,z:n.pos.z},24,[.4,1,.8]),L.shake=.5,L.hitstop=.08,L.tag(n,"ENROLADO!")),r("h",2.45)){e.anim="iaraHurl",n.hp-=18*n.opp.dmgMul,n.spinExtra=0,n.setState("air"),n.vy=8,n.vel.copy(s).multiplyScalar(7),n.model.snap(n,L.time);const l=n.pos;ot.ring(l,6279392,8,.6),ot.ring(l,16777215,4,.35),ot.dust(l,110,s.x*4,s.z*4,8,[.45,.75,.85],.6),ot.sparks({x:l.x,y:1,z:l.z},40,[.5,.9,1]),L.shake=1,L.hitstop=.18,ki(.5),document.body.classList.remove("deep")}t.s.h&&(t.co.userData.set(1-Ce((a-2.45)/.25),Math.max(0,1-(a-2.45)/.35),L.time),a>2.9&&(e.anim="idle"),n.update(i,On())),a>=3.3&&ds()}else if(e.kind==="boto"){if(r("p",0)&&(e.anim="baile",document.body.classList.add("party"),t.ln=xu(),t.ln.position.set((e.pos.x+n.pos.x)/2,0,(e.pos.z+n.pos.z)/2),ce.add(t.ln),t.cu=xc(),t.cu.visible=!1,ce.add(t.cu),t.extra=[t.ln,t.cu],t.a0=Math.atan2(e.pos.x-n.pos.x,e.pos.z-n.pos.z),t.r0=Math.max(1.6,Math.hypot(e.pos.x-n.pos.x,e.pos.z-n.pos.z))),t.ln.userData.set(Ce(a/.4)*(1-Ce((a-3)/.4)),L.time),a<1.2){n.y=Math.max(0,n.y-8*i);const o=Ce(a/1.2),c=t.a0+o*1.6,l=t.r0+(1.5+n.radius-t.r0)*o;e.pos.set(n.pos.x+Math.sin(c)*l,0,n.pos.z+Math.cos(c)*l),e.faceOpp(10*i),n.faceOpp(3*i),Math.random()<i*20&&ot.add.emit(e.pos.x,.1,e.pos.z,0,.5,0,1,.7,.8,.25,.5,0,1,.3,.7)}if(r("hat",1.2)&&(e.anim="hatOff",e.faceOpp(),ot.sparks({x:e.pos.x,y:2,z:e.pos.z},18,[1,.9,.8])),r("rv",1.6)&&(e.anim="reveal",ot.ring(e.pos,16748472,4,.45),ot.smoke({x:e.pos.x,y:1.2,z:e.pos.z},10,.9),n.hp-=8*n.opp.dmgMul,n.anim="hit",L.tag(n,"ENCANTADO!"),L.shake=.4),r("dv",2)&&(s.subVectors(n.pos,e.pos).setY(0).normalize(),t.from.copy(e.pos),t.to=n.pos.clone().addScaledVector(s,-4.2),e.anim="dolphin",e.model.snap(e,L.time),t.cu.visible=!0,t.cu.position.copy(t.to).setY(.15),t.cu.rotation.y=Math.atan2(s.x,s.z),ot.ring(e.pos,16748472,3,.35)),a>=2&&a<2.5){const o=(a-2)/.5;e.pos.lerpVectors(t.from,t.to,o),e.y=Math.sin(o*Math.PI)*1.6,e.facing=Math.atan2(t.to.x-t.from.x,t.to.z-t.from.z),e.updDir(),t.cu.userData.set(L.time),t.cu.scale.setScalar(1.2*Ce(o/.5))}if(r("sp",2.5)&&(e.y=0,e.pos.copy(t.to),ot.ring(e.pos,6279392,3,.4),ot.dust(e.pos,50,0,0,5,[.45,.75,.85],.6),e.anim="botoCharge",e.faceOpp(),t.from.copy(e.pos),t.to=n.pos.clone().addScaledVector(s,-(e.radius+n.radius+.1))),a>=2.5&&a<2.8&&(e.pos.lerpVectors(t.from,t.to,((a-2.5)/.3)**2),t.cu.position.copy(e.pos).setY(.15),t.cu.userData.set(L.time),ot.dust(e.pos,60*i,-s.x,-s.z,4,[.45,.75,.85],.5)),r("h",2.8)){e.pos.copy(t.to),n.hp-=30*n.opp.dmgMul,n.setState("air"),n.vy=7,n.vel.copy(s).multiplyScalar(6.5),n.model.snap(n,L.time),t.cu.visible=!1;const o=n.pos;ot.ring(o,16748472,8,.6),ot.ring(o,16777215,4,.35),ot.sparks({x:o.x,y:1.1,z:o.z},50,[1,.6,.8]),ot.dust(o,80,s.x*4,s.z*4,7,[.45,.75,.85],.6),L.shake=1,L.hitstop=.18,ki(.5)}t.s.h&&(a>3.05&&e.anim!=="idle"&&(e.anim="idle",ot.smoke({x:e.pos.x,y:1,z:e.pos.z},8,.8)),n.update(i,On())),a>=3.4&&(document.body.classList.remove("party"),ds())}else{const o=e.model.flamePos;if(r("p",0)&&(e.anim="superprep"),a<1.2&&(e.faceOpp(4*i),n.y=Math.max(0,n.y-8*i),ot.fire(o,260*i,.35,4.5,1.3),ot.embers(o,80*i,.5,5),L.shake=Math.max(L.shake,.2)),r("c",1.2)&&(e.faceOpp(),s.subVectors(n.pos,e.pos).setY(0).normalize(),t.from.copy(e.pos),t.to=n.pos.clone().addScaledVector(s,-(e.radius+n.radius+.1)),e.anim="charge"),a>=1.2&&a<1.7&&(e.pos.lerpVectors(t.from,t.to,((a-1.2)/.5)**2),ot.fire(o,200*i,.4,3,1.2),ot.embers(o,60*i,.4,5),ot.dust(e.pos,70*i,-s.x,-s.z,5),L.shake=Math.max(L.shake,.3)),r("h",1.7)){e.pos.copy(t.to),e.anim="idle",n.hp-=24*n.opp.dmgMul,n.burn=3,n.setState("air"),n.vy=9,n.vel.copy(s).multiplyScalar(6.5),n.model.snap(n,L.time);const c={x:n.pos.x,y:1.2,z:n.pos.z};ot.sparks(c,50,[1,.5,.15]),ot.fire(c,60,.6,4,1.2),L.shake=.9,L.hitstop=.16}if(t.s.h&&n.update(i,On()),r("x",2.4)){n.hp-=16*n.opp.dmgMul,n.state==="air"&&(n.vy=7);const c={x:n.pos.x,y:n.y+.8,z:n.pos.z};ot.fire(c,170,1.3,6,1.9),ot.embers(c,120,.8,9),ot.sparks(c,60,[1,.6,.2]),ot.smoke(c,25,1.6),ot.ring(n.pos,16742954,9,.6),ot.ring(n.pos,16767392,5,.4),L.shake=1,L.hitstop=.12,ki(.6)}a>=3.3&&ds()}}function ds(){const i=L.cine.att;i.y=0,i.invuln=.3,i.setState("idle"),or()}const io=Hn(0,3,12),so=Hn(0,1.3,0),Mn=Hn();function Xv(i,t){const e=St,n=Gt,s=t?1:Math.min(1,i*5);if(L.mode!=="fight"){const a=L.time*.12;Mn.set(Math.sin(a)*9.5,2.5,Math.cos(a)*9.5),io.lerp(Mn,s),so.lerp(Mn.set(0,1.3,0),s)}else{const a=n.pos.x-e.pos.x,r=n.pos.z-e.pos.z,o=Math.hypot(a,r);if(L.cine){const m=.45*i,f=Math.cos(m),b=Math.sin(m),y=He.x;He.x=y*f-He.z*b,He.z=y*b+He.z*f}else o>.6&&e.anim!=="gone"&&n.anim!=="gone"&&(Mn.set(-r/o,0,a/o),Mn.dot(He)<0&&Mn.negate(),He.lerp(Mn,Math.min(1,i*3.5)).normalize());const c=Math.max(e.y,n.y),l=L.cine?8.5+c*.5:Math.max(6.6,Math.min(14,5.2+o*.8)),h=(e.pos.x+n.pos.x)/2,u=(e.pos.z+n.pos.z)/2;let p=He.x,d=He.z,g=0;if(L.phase==="intro"&&L.longIntro){g=1-Ce(L.pt/2.6);const m=g*1.1,f=Math.cos(m),b=Math.sin(m);p=He.x*f-He.z*b,d=He.x*b+He.z*f}const v=l+3*g;io.lerp(Mn.set(h+p*v,2.3+c*.25+l*.06+1.6*g,u+d*v),s),so.lerp(Mn.set(h,1.25+c*.4,u),s)}if(fn.position.copy(io),L.shake>.01){const a=L.shake*.16;fn.position.x+=(Math.random()-.5)*a,fn.position.y+=(Math.random()-.5)*a,fn.position.z+=(Math.random()-.5)*a}if(fn.lookAt(so),L.mode==="fight"&&St.daze>0){const a=Math.min(1,St.daze/.3);fn.rotateZ(Math.sin(L.time*6)*.08*a),fn.position.y+=Math.sin(L.time*9)*.12*a}}const Kv=new z1;function ld(i){L.time+=i,L.shake=Math.max(0,L.shake-i*2.2),jo>0&&(jo-=i)<=0&&ct("msg").classList.remove("on");let t=i*L.slow;if(L.hitstop>0&&(L.hitstop-=i,t=0),L.mode!=="fight"){for(const e of[St,Gt])e.update(t,On());L.mode==="vs"&&(ur-=i)<=0&&dr()}else{if(L.cine)qv(t);else{const e=L.phase==="fight",n=e?Rv():On();L.lastIn=n,St.update(t,n),Gt.update(t,e?L.training?Dv(t):Tc.think(t,L):On()),Wv(t),Gv()}if(L.pt+=i,[St,Gt].forEach((e,n)=>{const s=Math.max(0,e.hp),a=Ja[n]-s;a>0&&L.phase!=="intro"&&(L.stats[1-n].dmg+=a,L.cine&&a>=8&&Kt.play("hitH")),Ja[n]=s}),L.phase==="fight"&&!L.cine&&(L.matchT+=t),L.phase==="intro"){for(;L.cues.length&&L.pt>=L.cues[0][0];){const[,e,n,s]=L.cues.shift();ar(e,n),s&&Kt.play(s)}L.pt>=L.fightAt&&(L.phase="fight",En.clear())}else if(L.phase==="fight"&&!L.cine&&L.training)for(const e of[St,Gt])e.hp=Math.max(1,e.hp),e.state==="idle"&&e.opp.comboT<=0&&(e.hp=Math.min(e.maxHp,e.hp+45*t)),e.gain(8*t);else if(L.phase==="fight"&&!L.cine){L.timer-=t;const e=St.hp<=0,n=Gt.hp<=0;if(e||n)Sh(e&&n?null:e?Gt:St,e&&n?"EMPATE":"K.O.");else if(L.timer<=0){const s=St.hp/St.maxHp,a=Gt.hp/Gt.maxHp;Sh(s===a?null:s>a?St:Gt,s===a?"EMPATE":"TEMPO!")}}else L.phase==="ko"&&(L.slow=L.pt<1?.3:1,Nn&&L.pt>1.3&&Nn.state==="idle"&&!L.cine&&(Nn.setState("win"),Kt.voice(Nn.kind,"win",!0)),L.pt>3.6&&!L.cine&&(Nn&&Nn.wins>=2?(L.phase="over",Nv()):(L.round++,td())));Lv(i),L.tutorial&&Vv(i)}for(const e of[St,Gt]){const n=e.model;if(n.root.position.set(e.pos.x,e.y,e.pos.z),n.root.rotation.y=e.facing,n.update(e,t,L.time),e.veil>0){e.veilMesh||(e.veilMesh=new Ot(new qn(1,20,14),new Ne({color:6283471,transparent:!0,opacity:.2,depthWrite:!1,blending:Wi,fog:!1})),ce.add(e.veilMesh));const s=e.veilMesh;s.visible=!0,s.position.set(e.pos.x,e.y+1.15,e.pos.z),s.scale.set(1.15+e.radius*.5,1.45,1.15+e.radius*.5),s.rotation.y=L.time*2,s.material.opacity=e.veil<.5?.1+.12*Math.abs(Math.sin(L.time*22)):.2+.05*Math.sin(L.time*6)}else e.veilMesh&&(e.veilMesh.visible=!1);if(e.daze>0&&t>0){const s=L.time*9;ot.add.emit(e.pos.x+Math.sin(s)*.35,e.y+e.tagY-.25,e.pos.z+Math.cos(s)*.35,0,.3,0,.7,.4,1,.3,.35,0,1,.5,.9)}if(e.charm>0&&t>0&&Math.random()<t*14){const s=Math.random()*6.28;ot.add.emit(e.pos.x+Math.sin(s)*.4,e.y+e.tagY-.5,e.pos.z+Math.cos(s)*.4,0,.7,0,.45,.9,1,.28,.6,0,1,.3,.8)}if(n.flamePos&&t>0){const s=n.flameK;ot.fire(n.flamePos,95*t*s,.1+.05*s,2+s*.6,.55+.25*s),Math.random()<t*8*s&&ot.embers(n.flamePos,1,.15,1.5)}}Yu.update(i,L.time),ot.update(t||i*.15)}let ao=!0;wn.setAnimationLoop(()=>{const i=Kv.getDelta(),t=Math.min(.05,i);Tv(En.frame());const e=L.mode==="fight"&&L.phase!=="over"&&!L.paused;document.body.classList.toggle("playing",e),(!e||L.phase!=="fight"||L.cine)&&En.clear();const n=En.touch&&innerHeight>innerWidth;if(!L.paused&&!n&&ld(t),Xv(t,ao),wn.render(ce,fn),Gi.tick(i),ao){ao=!1;const s=ct("boot");s.classList.add("hide"),setTimeout(()=>s.remove(),600)}});"serviceWorker"in navigator&&!window.Capacitor&&navigator.serviceWorker.register("./sw.js").catch(()=>{});L.input=En;L.quality=Gi;L.setPause=Yi;L.step=ld;L.startMatch=cr;L.vsIntro=rd;L.vsGo=dr;L.pick=lr;L.go=hr;L.audio=Kt;L.TUT=Ji;Object.defineProperty(L,"selKind",{get:()=>mn});L.setDummy=Ps;L.moveList=Qu;L.AI=Lu;Object.defineProperty(L,"player",{get:()=>St});Object.defineProperty(L,"cpu",{get:()=>Gt});
