(()=>{var vh="160";var $p=0,au=1,Zp=2;var Bd=1,wh=2,us=3,Fs=0,kn=1,le=2;var Ns=0,jr=1,Zn=2,cu=3,lu=4,Jp=5,ar=100,Kp=101,jp=102,hu=103,uu=104,Qp=200,tm=201,em=202,nm=203,Pl=204,Il=205,im=206,sm=207,rm=208,om=209,am=210,cm=211,lm=212,hm=213,um=214,dm=0,fm=1,pm=2,Ga=3,mm=4,gm=5,xm=6,ym=7,Th=0,_m=1,Em=2,Os=0,Mm=1,vm=2,wm=3,Tm=4,bm=5,Sm=6;var kd=300,eo=301,no=302,Ll=303,Hl=304,bc=306,Dl=1e3,Pi=1001,Ul=1002,An=1003,du=1004;var Jc=1005;var $n=1006,Rm=1007;var zo=1008;var Vi=1009,Am=1010,Cm=1011,bh=1012,Gd=1013,Us=1014,zs=1015,No=1016,Vd=1017,Wd=1018,lr=1020,Pm=1021,Ii=1023,Im=1024,Lm=1025,hr=1026,io=1027,Sh=1028,Xd=1029,Hm=1030,qd=1031,Yd=1033,Kc=33776,jc=33777,Qc=33778,tl=33779,fu=35840,pu=35841,mu=35842,gu=35843,$d=36196,xu=37492,yu=37496,_u=37808,Eu=37809,Mu=37810,vu=37811,wu=37812,Tu=37813,bu=37814,Su=37815,Ru=37816,Au=37817,Cu=37818,Pu=37819,Iu=37820,Lu=37821,el=36492,Hu=36494,Du=36495,Dm=36283,Uu=36284,zu=36285,Nu=36286;var Va=2300,Wa=2301,nl=2302,Ou=2400,Fu=2401,Bu=2402;var Zd=3e3,ur=3001,Um=3200,zm=3201,Rh=0,Nm=1,_i="",Ne="srgb",ps="srgb-linear",Ah="display-p3",Sc="display-p3-linear",Xa="linear",ze="srgb",qa="rec709",Ya="p3";var Pr=7680;var ku=519,Om=512,Fm=513,Bm=514,Jd=515,km=516,Gm=517,Vm=518,Wm=519,Gu=35044;var Vu="300 es",zl=1035,fs=2e3,$a=2001,Bs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=1234567,Co=Math.PI/180,Oo=180/Math.PI;function gr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[e&63|128]+On[e>>8&255]+"-"+On[e>>16&255]+On[e>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function En(i,t,e){return Math.max(t,Math.min(e,i))}function Ch(i,t){return(i%t+t)%t}function Xm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qm(i,t,e){return i!==t?(e-i)/(t-i):0}function Po(i,t,e){return(1-e)*i+e*t}function Ym(i,t,e,n){return Po(i,t,1-Math.exp(-e*n))}function $m(i,t=1){return t-Math.abs(Ch(i,t*2)-t)}function Zm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Km(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jm(i,t){return i+Math.random()*(t-i)}function Qm(i){return i*(.5-Math.random())}function t0(i){i!==void 0&&(Wu=i);let t=Wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function e0(i){return i*Co}function n0(i){return i*Oo}function Nl(i){return(i&i-1)===0&&i!==0}function i0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Za(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function s0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),y=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*y,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*y,a*l);break;case"ZYZ":i.set(c*y,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $e={DEG2RAD:Co,RAD2DEG:Oo,generateUUID:gr,clamp:En,euclideanModulo:Ch,mapLinear:Xm,inverseLerp:qm,lerp:Po,damp:Ym,pingpong:$m,smoothstep:Zm,smootherstep:Jm,randInt:Km,randFloat:jm,randFloatSpread:Qm,seededRandom:t0,degToRad:e0,radToDeg:n0,isPowerOfTwo:Nl,ceilPowerOfTwo:i0,floorPowerOfTwo:Za,setQuaternionFromProperEuler:s0,normalize:qn,denormalize:Yr},ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],y=n[8],_=s[0],m=s[3],p=s[6],b=s[1],E=s[4],v=s[7],A=s[2],w=s[5],x=s[8];return r[0]=o*_+a*b+c*A,r[3]=o*m+a*E+c*w,r[6]=o*p+a*v+c*x,r[1]=l*_+h*b+u*A,r[4]=l*m+h*E+u*w,r[7]=l*p+h*v+u*x,r[2]=f*_+d*b+y*A,r[5]=f*m+d*E+y*w,r[8]=f*p+d*v+y*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,y=e*u+n*f+s*d;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(il.makeScale(t,e)),this}rotate(t){return this.premultiply(il.makeRotation(-t)),this}translate(t,e){return this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},il=new fe;function Kd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function r0(){let i=Ja("canvas");return i.style.display="block",i}var Xu={};function Io(i){i in Xu||(Xu[i]=!0,console.warn(i))}var qu=new fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yu=new fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fa={[ps]:{transfer:Xa,primaries:qa,toReference:i=>i,fromReference:i=>i},[Ne]:{transfer:ze,primaries:qa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Sc]:{transfer:Xa,primaries:Ya,toReference:i=>i.applyMatrix3(Yu),fromReference:i=>i.applyMatrix3(qu)},[Ah]:{transfer:ze,primaries:Ya,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Yu),fromReference:i=>i.applyMatrix3(qu).convertLinearToSRGB()}},o0=new Set([ps,Sc]),Re={enabled:!0,_workingColorSpace:ps,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!o0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=fa[t].toReference,s=fa[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return fa[i].primaries},getTransfer:function(i){return i===_i?Xa:fa[i].transfer}};function Qr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ir,Ka=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ir===void 0&&(Ir=Ja("canvas")),Ir.width=t.width,Ir.height=t.height;let n=Ir.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ir}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ja("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qr(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qr(e[n]/255)*255):e[n]=Qr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},a0=0,ja=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=gr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var c0=0,di=class i extends Bs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=$n,o=zo,a=Ii,c=Vi,l=i.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=gr(),this.name="",this.source=new ja(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ur?Ne:_i),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dl:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dl:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?ur:Zd}set encoding(t){Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ur?Ne:_i}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=kd;di.DEFAULT_ANISOTROPY=1;var Be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],y=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(y+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,v=(d+1)/2,A=(p+1)/2,w=(h+f)/4,x=(u+_)/4,S=(y+m)/4;return E>v&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=x/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=x/r,s=S/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-y)*(m-y)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-y)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ol=class extends Bs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?Ne:_i),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new di(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ja(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ms=class extends Ol{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qa=class extends di{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fl=class extends di{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],y=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=y,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==y){let m=1-a,p=c*f+l*d+h*y+u*_,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let A=Math.sqrt(E),w=Math.atan2(A,p*b);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}let v=a*b;if(c=c*m+f*v,l=l*m+d*v,h=h*m+y*v,u=u*m+_*v,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],y=r[o+3];return t[e]=a*y+h*u+c*d-l*f,t[e+1]=c*y+h*f+l*u-a*d,t[e+2]=l*y+h*d+a*f-c*u,t[e+3]=h*y-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),y=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*y,this._y=l*d*u-f*h*y,this._z=l*h*y+f*d*u,this._w=l*h*u-f*d*y;break;case"YXZ":this._x=f*h*u+l*d*y,this._y=l*d*u-f*h*y,this._z=l*h*y-f*d*u,this._w=l*h*u+f*d*y;break;case"ZXY":this._x=f*h*u-l*d*y,this._y=l*d*u+f*h*y,this._z=l*h*y+f*d*u,this._w=l*h*u-f*d*y;break;case"ZYX":this._x=f*h*u-l*d*y,this._y=l*d*u+f*h*y,this._z=l*h*y-f*d*u,this._w=l*h*u+f*d*y;break;case"YZX":this._x=f*h*u+l*d*y,this._y=l*d*u+f*h*y,this._z=l*h*y-f*d*u,this._w=l*h*u-f*d*y;break;case"XZY":this._x=f*h*u-l*d*y,this._y=l*d*u-f*h*y,this._z=l*h*y+f*d*u,this._w=l*h*u+f*d*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(En(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(En(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new F,$u=new ks,he=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ri):Ri.fromBufferAttribute(r,o),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vo),ma.subVectors(this.max,vo),Lr.subVectors(t.a,vo),Hr.subVectors(t.b,vo),Dr.subVectors(t.c,vo),Ps.subVectors(Hr,Lr),Is.subVectors(Dr,Hr),nr.subVectors(Lr,Dr);let e=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-nr.z,nr.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,nr.z,0,-nr.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-nr.y,nr.x,0];return!al(e,Lr,Hr,Dr,ma)||(e=[1,0,0,0,1,0,0,0,1],!al(e,Lr,Hr,Dr,ma))?!1:(ga.crossVectors(Ps,Is),e=[ga.x,ga.y,ga.z],al(e,Lr,Hr,Dr,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(os),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},os=[new F,new F,new F,new F,new F,new F,new F,new F],Ri=new F,pa=new he,Lr=new F,Hr=new F,Dr=new F,Ps=new F,Is=new F,nr=new F,vo=new F,ma=new F,ga=new F,ir=new F;function al(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ir.fromArray(i,r);let a=s.x*Math.abs(ir.x)+s.y*Math.abs(ir.y)+s.z*Math.abs(ir.z),c=t.dot(ir),l=e.dot(ir),h=n.dot(ir);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var l0=new he,wo=new F,cl=new F,Gs=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):l0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);let e=wo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(cl)),this.expandByPoint(wo.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},as=new F,ll=new F,xa=new F,Ls=new F,hl=new F,ya=new F,ul=new F,tc=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,as)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=as.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(as.copy(this.origin).addScaledVector(this.direction,e),as.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ll.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),Ls.copy(this.origin).sub(ll);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xa),a=Ls.dot(this.direction),c=-Ls.dot(xa),l=Ls.lengthSq(),h=Math.abs(1-o*o),u,f,d,y;if(h>0)if(u=o*c-a,f=o*a-c,y=r*h,u>=0)if(f>=-y)if(f<=y){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-y?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=y?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ll).addScaledVector(xa,f),d}intersectSphere(t,e){as.subVectors(t.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,as)!==null}intersectTriangle(t,e,n,s,r){hl.subVectors(e,t),ya.subVectors(n,t),ul.crossVectors(hl,ya);let o=this.direction.dot(ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ls.subVectors(this.origin,t);let c=a*this.direction.dot(ya.crossVectors(Ls,ya));if(c<0)return null;let l=a*this.direction.dot(hl.cross(Ls));if(l<0||c+l>o)return null;let h=-a*Ls.dot(ul);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,y,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,y,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,y,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=y,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ur.setFromMatrixColumn(t,0).length(),r=1/Ur.setFromMatrixColumn(t,1).length(),o=1/Ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,y=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+y*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=y+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,y=l*h,_=l*u;e[0]=f+_*a,e[4]=y*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-y,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,y=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=y+d*a,e[1]=d+y*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,y=a*h,_=a*u;e[0]=c*h,e[4]=y*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-y,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,y=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=y*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+y,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,y=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-y,e[2]=y*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h0,t,u0)}lookAt(t,e,n){let s=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Hs.crossVectors(n,hi),Hs.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Hs.crossVectors(n,hi)),Hs.normalize(),_a.crossVectors(hi,Hs),s[0]=Hs.x,s[4]=_a.x,s[8]=hi.x,s[1]=Hs.y,s[5]=_a.y,s[9]=hi.y,s[2]=Hs.z,s[6]=_a.z,s[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],y=n[2],_=n[6],m=n[10],p=n[14],b=n[3],E=n[7],v=n[11],A=n[15],w=s[0],x=s[4],S=s[8],g=s[12],M=s[1],T=s[5],C=s[9],L=s[13],R=s[2],I=s[6],H=s[10],z=s[14],U=s[3],N=s[7],G=s[11],X=s[15];return r[0]=o*w+a*M+c*R+l*U,r[4]=o*x+a*T+c*I+l*N,r[8]=o*S+a*C+c*H+l*G,r[12]=o*g+a*L+c*z+l*X,r[1]=h*w+u*M+f*R+d*U,r[5]=h*x+u*T+f*I+d*N,r[9]=h*S+u*C+f*H+d*G,r[13]=h*g+u*L+f*z+d*X,r[2]=y*w+_*M+m*R+p*U,r[6]=y*x+_*T+m*I+p*N,r[10]=y*S+_*C+m*H+p*G,r[14]=y*g+_*L+m*z+p*X,r[3]=b*w+E*M+v*R+A*U,r[7]=b*x+E*T+v*I+A*N,r[11]=b*S+E*C+v*H+A*G,r[15]=b*g+E*L+v*z+A*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],y=t[3],_=t[7],m=t[11],p=t[15];return y*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],y=t[12],_=t[13],m=t[14],p=t[15],b=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,E=y*f*l-h*m*l-y*c*d+o*m*d+h*c*p-o*f*p,v=h*_*l-y*u*l+y*a*d-o*_*d-h*a*p+o*u*p,A=y*u*c-h*_*c-y*a*f+o*_*f+h*a*m-o*u*m,w=e*b+n*E+s*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/w;return t[0]=b*x,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*x,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*x,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*x,t[4]=E*x,t[5]=(h*m*r-y*f*r+y*s*d-e*m*d-h*s*p+e*f*p)*x,t[6]=(y*c*r-o*m*r-y*s*l+e*m*l+o*s*p-e*c*p)*x,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*x,t[8]=v*x,t[9]=(y*u*r-h*_*r-y*n*d+e*_*d+h*n*p-e*u*p)*x,t[10]=(o*_*r-y*a*r+y*n*l-e*_*l-o*n*p+e*a*p)*x,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*x,t[12]=A*x,t[13]=(h*_*s-y*u*s+y*n*f-e*_*f-h*n*m+e*u*m)*x,t[14]=(y*a*s-o*_*s-y*n*c+e*_*c+o*n*m-e*a*m)*x,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*x,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,y=r*u,_=o*h,m=o*u,p=a*u,b=c*l,E=c*h,v=c*u,A=n.x,w=n.y,x=n.z;return s[0]=(1-(_+p))*A,s[1]=(d+v)*A,s[2]=(y-E)*A,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+p))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(y+E)*x,s[9]=(m-b)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ur.set(s[0],s[1],s[2]).length(),o=Ur.set(s[4],s[5],s[6]).length(),a=Ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ai.copy(this);let l=1/r,h=1/o,u=1/a;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=u,Ai.elements[9]*=u,Ai.elements[10]*=u,e.setFromRotationMatrix(Ai),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=fs){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,y;if(a===fs)d=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===$a)d=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=fs){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h,y,_;if(a===fs)y=(o+r)*u,_=-2*u;else if(a===$a)y=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ur=new F,Ai=new ve,h0=new F(0,0,0),u0=new F(1,1,1),Hs=new F,_a=new F,hi=new F,Zu=new ve,Ju=new ks,ec=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(En(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ec.DEFAULT_ORDER="XYZ";var nc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},d0=0,Ku=new F,zr=new ks,cs=new ve,Ea=new F,To=new F,f0=new F,p0=new ks,ju=new F(1,0,0),Qu=new F(0,1,0),td=new F(0,0,1),m0={type:"added"},g0={type:"removed"},Mn=class i extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new ec,n=new ks,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new fe}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(Qu,t)}rotateZ(t){return this.rotateOnAxis(td,t)}translateOnAxis(t,e){return Ku.copy(t).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(Qu,t)}translateZ(t){return this.translateOnAxis(td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ea.copy(t):Ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cs.lookAt(To,Ea,this.up):cs.lookAt(Ea,To,this.up),this.quaternion.setFromRotationMatrix(cs),s&&(cs.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(cs),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(m0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(g0)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cs.multiply(t.parent.matrixWorld)),t.applyMatrix4(cs),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,f0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,p0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Mn.DEFAULT_UP=new F(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ci=new F,ls=new F,dl=new F,hs=new F,Nr=new F,Or=new F,ed=new F,fl=new F,pl=new F,ml=new F,Ma=!1,$r=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ci.subVectors(t,e),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ci.subVectors(s,e),ls.subVectors(n,e),dl.subVectors(t,e);let o=Ci.dot(Ci),a=Ci.dot(ls),c=Ci.dot(dl),l=ls.dot(ls),h=ls.dot(dl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,y=(o*h-a*c)*f;return r.set(1-d-y,y,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getUV(t,e,n,s,r,o,a,c){return Ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ma=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,hs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hs.x),c.addScaledVector(o,hs.y),c.addScaledVector(a,hs.z),c)}static isFrontFacing(t,e,n,s){return Ci.subVectors(n,e),ls.subVectors(t,e),Ci.cross(ls).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),Ci.cross(ls).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ma=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Nr.subVectors(s,n),Or.subVectors(r,n),fl.subVectors(t,n);let c=Nr.dot(fl),l=Or.dot(fl);if(c<=0&&l<=0)return e.copy(n);pl.subVectors(t,s);let h=Nr.dot(pl),u=Or.dot(pl);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Nr,o);ml.subVectors(t,r);let d=Nr.dot(ml),y=Or.dot(ml);if(y>=0&&d<=y)return e.copy(r);let _=d*l-c*y;if(_<=0&&l>=0&&y<=0)return a=l/(l-y),e.copy(n).addScaledVector(Or,a);let m=h*y-d*u;if(m<=0&&u-h>=0&&d-y>=0)return ed.subVectors(r,s),a=(u-h)/(u-h+(d-y)),e.copy(s).addScaledVector(ed,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Nr,o).addScaledVector(Or,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},va={h:0,s:0,l:0};function gl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Re.workingColorSpace){if(t=Ch(t,1),e=En(e,0,1),n=En(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=gl(o,r,t+1/3),this.g=gl(o,r,t),this.b=gl(o,r,t-1/3)}return Re.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=jd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}copyLinearToSRGB(t){return this.r=sl(t.r),this.g=sl(t.g),this.b=sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Re.fromWorkingColorSpace(Fn.copy(this),t),Math.round(En(Fn.r*255,0,255))*65536+Math.round(En(Fn.g*255,0,255))*256+Math.round(En(Fn.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.fromWorkingColorSpace(Fn.copy(this),e);let n=Fn.r,s=Fn.g,r=Fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Re.workingColorSpace){return Re.fromWorkingColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Ne){Re.fromWorkingColorSpace(Fn.copy(this),t);let e=Fn.r,n=Fn.g,s=Fn.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+e,Ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ds),t.getHSL(va);let n=Po(Ds.h,va.h,e),s=Po(Ds.s,va.s,e),r=Po(Ds.l,va.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new tt;tt.NAMES=jd;var x0=0,gs=class extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=jr,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(n.blending=this.blending),this.side!==Fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pl&&(n.blendSrc=this.blendSrc),this.blendDst!==Il&&(n.blendDst=this.blendDst),this.blendEquation!==ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ku&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_e=class extends gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var un=new F,wa=new ft,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wa.fromBufferAttribute(this,e),wa.applyMatrix3(t),this.setXY(e,wa.x,wa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yr(e,this.array)),e}setX(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yr(e,this.array)),e}setY(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yr(e,this.array)),e}setW(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),s=qn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),s=qn(s,this.array),r=qn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gu&&(t.usage=this.usage),t}};var ic=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sc=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var y0=0,yi=new ve,xl=new Mn,Fr=new F,ui=new he,bo=new he,_n=new F,ae=class i extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kd(t)?sc:ic)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return xl.lookAt(t),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new he);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(ui.min,bo.min),ui.expandByPoint(_n),_n.addVectors(ui.max,bo.max),ui.expandByPoint(_n)):(ui.expandByPoint(bo.min),ui.expandByPoint(bo.max))}ui.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)_n.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_n));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_n.fromBufferAttribute(a,l),c&&(Fr.fromBufferAttribute(t,l),_n.add(Fr)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let M=0;M<a;M++)l[M]=new F,h[M]=new F;let u=new F,f=new F,d=new F,y=new ft,_=new ft,m=new ft,p=new F,b=new F;function E(M,T,C){u.fromArray(s,M*3),f.fromArray(s,T*3),d.fromArray(s,C*3),y.fromArray(o,M*2),_.fromArray(o,T*2),m.fromArray(o,C*2),f.sub(u),d.sub(u),_.sub(y),m.sub(y);let L=1/(_.x*m.y-m.x*_.y);isFinite(L)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(L),b.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(L),l[M].add(p),l[T].add(p),l[C].add(p),h[M].add(b),h[T].add(b),h[C].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let M=0,T=v.length;M<T;++M){let C=v[M],L=C.start,R=C.count;for(let I=L,H=L+R;I<H;I+=3)E(n[I+0],n[I+1],n[I+2])}let A=new F,w=new F,x=new F,S=new F;function g(M){x.fromArray(r,M*3),S.copy(x);let T=l[M];A.copy(T),A.sub(x.multiplyScalar(x.dot(T))).normalize(),w.crossVectors(S,T);let L=w.dot(h[M])<0?-1:1;c[M*4]=A.x,c[M*4+1]=A.y,c[M*4+2]=A.z,c[M*4+3]=L}for(let M=0,T=v.length;M<T;++M){let C=v[M],L=C.start,R=C.count;for(let I=L,H=L+R;I<H;I+=3)g(n[I+0]),g(n[I+1]),g(n[I+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let y=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,y=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[y++]=l[d++]}return new pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nd=new ve,sr=new tc,Ta=new Gs,id=new F,Br=new F,kr=new F,Gr=new F,yl=new F,ba=new F,Sa=new ft,Ra=new ft,Aa=new ft,sd=new F,rd=new F,od=new F,Ca=new F,Pa=new F,B=class extends Mn{constructor(t=new ae,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(yl.fromBufferAttribute(u,t),o?ba.addScaledVector(yl,h):ba.addScaledVector(yl.sub(e),h))}e.add(ba)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),sr.copy(t.ray).recast(t.near),!(Ta.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Ta,id)===null||sr.origin.distanceToSquared(id)>(t.far-t.near)**2))&&(nd.copy(r).invert(),sr.copy(t.ray).applyMatrix4(nd),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,sr)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){let m=f[y],p=o[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,A=E;v<A;v+=3){let w=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);s=Ia(this,p,t,n,l,h,u,w,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let y=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=y,p=_;m<p;m+=3){let b=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);s=Ia(this,o,t,n,l,h,u,b,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){let m=f[y],p=o[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,A=E;v<A;v+=3){let w=v,x=v+1,S=v+2;s=Ia(this,p,t,n,l,h,u,w,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let y=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=y,p=_;m<p;m+=3){let b=m,E=m+1,v=m+2;s=Ia(this,o,t,n,l,h,u,b,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function _0(i,t,e,n,s,r,o,a){let c;if(t.side===kn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Fs,a),c===null)return null;Pa.copy(a),Pa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Pa);return l<e.near||l>e.far?null:{distance:l,point:Pa.clone(),object:i}}function Ia(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Br),i.getVertexPosition(c,kr),i.getVertexPosition(l,Gr);let h=_0(i,t,e,n,Br,kr,Gr,Ca);if(h){s&&(Sa.fromBufferAttribute(s,a),Ra.fromBufferAttribute(s,c),Aa.fromBufferAttribute(s,l),h.uv=$r.getInterpolation(Ca,Br,kr,Gr,Sa,Ra,Aa,new ft)),r&&(Sa.fromBufferAttribute(r,a),Ra.fromBufferAttribute(r,c),Aa.fromBufferAttribute(r,l),h.uv1=$r.getInterpolation(Ca,Br,kr,Gr,Sa,Ra,Aa,new ft),h.uv2=h.uv1),o&&(sd.fromBufferAttribute(o,a),rd.fromBufferAttribute(o,c),od.fromBufferAttribute(o,l),h.normal=$r.getInterpolation(Ca,Br,kr,Gr,sd,rd,od,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new F,materialIndex:0};$r.getNormal(Br,kr,Gr,u.normal),h.face=u}return h}var dt=class i extends ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;y("z","y","x",-1,-1,n,e,t,o,r,0),y("z","y","x",1,-1,n,e,-t,o,r,1),y("x","z","y",1,1,t,n,e,s,o,2),y("x","z","y",1,-1,t,n,-e,s,o,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function y(_,m,p,b,E,v,A,w,x,S,g){let M=v/x,T=A/S,C=v/2,L=A/2,R=w/2,I=x+1,H=S+1,z=0,U=0,N=new F;for(let G=0;G<H;G++){let X=G*T-L;for(let Q=0;Q<I;Q++){let q=Q*M-C;N[_]=q*b,N[m]=X*E,N[p]=R,l.push(N.x,N.y,N.z),N[_]=0,N[m]=0,N[p]=w>0?1:-1,h.push(N.x,N.y,N.z),u.push(Q/x),u.push(1-G/S),z+=1}}for(let G=0;G<S;G++)for(let X=0;X<x;X++){let Q=f+X+I*G,q=f+X+I*(G+1),Z=f+(X+1)+I*(G+1),it=f+(X+1)+I*G;c.push(Q,q,it),c.push(q,Z,it),U+=6}a.addGroup(d,U,g),d+=U,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function so(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Yn(i){let t={};for(let e=0;e<i.length;e++){let n=so(i[e]);for(let s in n)t[s]=n[s]}return t}function E0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qd(i){return i.getRenderTarget()===null?i.outputColorSpace:Re.workingColorSpace}var Ph={clone:so,merge:Yn},M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=E0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},rc=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=fs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bn=class extends rc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Co*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vr=-90,Wr=1,Bl=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bn(Vr,Wr,t,e);s.layers=this.layers,this.add(s);let r=new Bn(Vr,Wr,t,e);r.layers=this.layers,this.add(r);let o=new Bn(Vr,Wr,t,e);o.layers=this.layers,this.add(o);let a=new Bn(Vr,Wr,t,e);a.layers=this.layers,this.add(a);let c=new Bn(Vr,Wr,t,e);c.layers=this.layers,this.add(c);let l=new Bn(Vr,Wr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===fs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},oc=class extends di{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:eo,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kl=class extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ur?Ne:_i),this.texture=new oc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:so(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Ns});r.uniforms.tEquirect.value=e;let o=new B(s,r),a=e.minFilter;return e.minFilter===zo&&(e.minFilter=$n),new Bl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_l=new F,w0=new F,T0=new fe,ds=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_l.subVectors(n,e).cross(w0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_l),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||T0.getNormalMatrix(t),s=this.coplanarPoint(_l).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},rr=new Gs,La=new F,Fo=class{constructor(t=new ds,e=new ds,n=new ds,s=new ds,r=new ds,o=new ds){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fs){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],y=s[9],_=s[10],m=s[11],p=s[12],b=s[13],E=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-d,v-p).normalize(),n[1].setComponents(c+r,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+h,m+y,v+b).normalize(),n[3].setComponents(c-o,f-h,m-y,v-b).normalize(),n[4].setComponents(c-a,f-u,m-_,v-E).normalize(),e===fs)n[5].setComponents(c+a,f+u,m+_,v+E).normalize();else if(e===$a)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(La.x=s.normal.x>0?t.max.x:t.min.x,La.y=s.normal.y>0?t.max.y:t.min.y,La.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function b0(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,y=h.updateRanges;if(i.bindBuffer(u,l),d.count===-1&&y.length===0&&i.bufferSubData(u,0,f),y.length!==0){for(let _=0,m=y.length;_<m;_++){let p=y[_];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var vn=class i extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],y=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*f-o;for(let E=0;E<l;E++){let v=E*u-r;y.push(v,-b,0),_.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let E=b+l*p,v=b+l*(p+1),A=b+1+l*(p+1),w=b+1+l*p;d.push(E,v,w),d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new me(y,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,B0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Z0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
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
}`,pg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,_g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
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
#endif`,bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Sg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
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
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ex=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
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
}`,Lx=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Hx=`#define DISTANCE
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
}`,Dx=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
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
}`,Bx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kx=`#define LAMBERT
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
}`,Gx=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yx=`#define PHONG
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
}`,$x=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zx=`#define STANDARD
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
}`,Jx=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Kx=`#define TOON
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
}`,jx=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qx=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ey=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,oe={alphahash_fragment:S0,alphahash_pars_fragment:R0,alphamap_fragment:A0,alphamap_pars_fragment:C0,alphatest_fragment:P0,alphatest_pars_fragment:I0,aomap_fragment:L0,aomap_pars_fragment:H0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:z0,beginnormal_vertex:N0,bsdfs:O0,iridescence_fragment:F0,bumpmap_pars_fragment:B0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:$0,common:Z0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:K0,displacementmap_pars_vertex:j0,displacementmap_vertex:Q0,emissivemap_fragment:tg,emissivemap_pars_fragment:eg,colorspace_fragment:ng,colorspace_pars_fragment:ig,envmap_fragment:sg,envmap_common_pars_fragment:rg,envmap_pars_fragment:og,envmap_pars_vertex:ag,envmap_physical_pars_fragment:_g,envmap_vertex:cg,fog_vertex:lg,fog_pars_vertex:hg,fog_fragment:ug,fog_pars_fragment:dg,gradientmap_pars_fragment:fg,lightmap_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:yg,lights_toon_fragment:Eg,lights_toon_pars_fragment:Mg,lights_phong_fragment:vg,lights_phong_pars_fragment:wg,lights_physical_fragment:Tg,lights_physical_pars_fragment:bg,lights_fragment_begin:Sg,lights_fragment_maps:Rg,lights_fragment_end:Ag,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Lg,map_fragment:Hg,map_pars_fragment:Dg,map_particle_fragment:Ug,map_particle_pars_fragment:zg,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:Og,morphcolor_vertex:Fg,morphnormal_vertex:Bg,morphtarget_pars_vertex:kg,morphtarget_vertex:Gg,normal_fragment_begin:Vg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:jg,opaque_fragment:Qg,packing:tx,premultiplied_alpha_fragment:ex,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:cx,shadowmap_vertex:lx,shadowmask_pars_fragment:hx,skinbase_vertex:ux,skinning_pars_vertex:dx,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:xx,tonemapping_pars_fragment:yx,transmission_fragment:_x,transmission_pars_fragment:Ex,uv_pars_fragment:Mx,uv_pars_vertex:vx,uv_vertex:wx,worldpos_vertex:Tx,background_vert:bx,background_frag:Sx,backgroundCube_vert:Rx,backgroundCube_frag:Ax,cube_vert:Cx,cube_frag:Px,depth_vert:Ix,depth_frag:Lx,distanceRGBA_vert:Hx,distanceRGBA_frag:Dx,equirect_vert:Ux,equirect_frag:zx,linedashed_vert:Nx,linedashed_frag:Ox,meshbasic_vert:Fx,meshbasic_frag:Bx,meshlambert_vert:kx,meshlambert_frag:Gx,meshmatcap_vert:Vx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:qx,meshphong_vert:Yx,meshphong_frag:$x,meshphysical_vert:Zx,meshphysical_frag:Jx,meshtoon_vert:Kx,meshtoon_frag:jx,points_vert:Qx,points_frag:ty,shadow_vert:ey,shadow_frag:ny,sprite_vert:iy,sprite_frag:sy},vt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Gi={basic:{uniforms:Yn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Yn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new tt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Yn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Yn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Yn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new tt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Yn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Yn([vt.points,vt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Yn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Yn([vt.common,vt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Yn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Yn([vt.sprite,vt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Yn([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Yn([vt.lights,vt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Gi.physical={uniforms:Yn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Ha={r:0,b:0,g:0};function ry(i,t,e,n,s,r,o){let a=new tt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function y(m,p){let b=!1,E=p.isScene===!0?p.background:null;E&&E.isTexture&&(E=(p.backgroundBlurriness>0?e:t).get(E)),E===null?_(a,c):E&&E.isColor&&(_(E,1),b=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===bc)?(h===void 0&&(h=new B(new dt(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:so(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Re.getTransfer(E.colorSpace)!==ze,(u!==E||f!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new B(new vn(2,2),new Gn({name:"BackgroundMaterial",uniforms:so(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Re.getTransfer(E.colorSpace)!==ze,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Ha,Qd(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:y}}function oy(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(R,I,H,z,U){let N=!1;if(o){let G=_(z,H,I);l!==G&&(l=G,d(l.object)),N=p(R,z,H,U),N&&b(R,z,H,U)}else{let G=I.wireframe===!0;(l.geometry!==z.id||l.program!==H.id||l.wireframe!==G)&&(l.geometry=z.id,l.program=H.id,l.wireframe=G,N=!0)}U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(N||h)&&(h=!1,S(R,I,H,z),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function y(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,I,H){let z=H.wireframe===!0,U=a[R.id];U===void 0&&(U={},a[R.id]=U);let N=U[I.id];N===void 0&&(N={},U[I.id]=N);let G=N[z];return G===void 0&&(G=m(f()),N[z]=G),G}function m(R){let I=[],H=[],z=[];for(let U=0;U<s;U++)I[U]=0,H[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:z,object:R,attributes:{},index:null}}function p(R,I,H,z){let U=l.attributes,N=I.attributes,G=0,X=H.getAttributes();for(let Q in X)if(X[Q].location>=0){let Z=U[Q],it=N[Q];if(it===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(it=R.instanceColor)),Z===void 0||Z.attribute!==it||it&&Z.data!==it.data)return!0;G++}return l.attributesNum!==G||l.index!==z}function b(R,I,H,z){let U={},N=I.attributes,G=0,X=H.getAttributes();for(let Q in X)if(X[Q].location>=0){let Z=N[Q];Z===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));let it={};it.attribute=Z,Z&&Z.data&&(it.data=Z.data),U[Q]=it,G++}l.attributes=U,l.attributesNum=G,l.index=z}function E(){let R=l.newAttributes;for(let I=0,H=R.length;I<H;I++)R[I]=0}function v(R){A(R,0)}function A(R,I){let H=l.newAttributes,z=l.enabledAttributes,U=l.attributeDivisors;H[R]=1,z[R]===0&&(i.enableVertexAttribArray(R),z[R]=1),U[R]!==I&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,I),U[R]=I)}function w(){let R=l.newAttributes,I=l.enabledAttributes;for(let H=0,z=I.length;H<z;H++)I[H]!==R[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function x(R,I,H,z,U,N,G){G===!0?i.vertexAttribIPointer(R,I,H,U,N):i.vertexAttribPointer(R,I,H,z,U,N)}function S(R,I,H,z){if(n.isWebGL2===!1&&(R.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();let U=z.attributes,N=H.getAttributes(),G=I.defaultAttributeValues;for(let X in N){let Q=N[X];if(Q.location>=0){let q=U[X];if(q===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),q!==void 0){let Z=q.normalized,it=q.itemSize,_t=e.get(q);if(_t===void 0)continue;let Et=_t.buffer,kt=_t.type,qt=_t.bytesPerElement,St=n.isWebGL2===!0&&(kt===i.INT||kt===i.UNSIGNED_INT||q.gpuType===Gd);if(q.isInterleavedBufferAttribute){let Ot=q.data,V=Ot.stride,ct=q.offset;if(Ot.isInstancedInterleavedBuffer){for(let et=0;et<Q.locationSize;et++)A(Q.location+et,Ot.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let et=0;et<Q.locationSize;et++)v(Q.location+et);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let et=0;et<Q.locationSize;et++)x(Q.location+et,it/Q.locationSize,kt,Z,V*qt,(ct+it/Q.locationSize*et)*qt,St)}else{if(q.isInstancedBufferAttribute){for(let Ot=0;Ot<Q.locationSize;Ot++)A(Q.location+Ot,q.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ot=0;Ot<Q.locationSize;Ot++)v(Q.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Ot=0;Ot<Q.locationSize;Ot++)x(Q.location+Ot,it/Q.locationSize,kt,Z,it*qt,it/Q.locationSize*Ot*qt,St)}}else if(G!==void 0){let Z=G[X];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(Q.location,Z);break;case 3:i.vertexAttrib3fv(Q.location,Z);break;case 4:i.vertexAttrib4fv(Q.location,Z);break;default:i.vertexAttrib1fv(Q.location,Z)}}}}w()}function g(){C();for(let R in a){let I=a[R];for(let H in I){let z=I[H];for(let U in z)y(z[U].object),delete z[U];delete I[H]}delete a[R]}}function M(R){if(a[R.id]===void 0)return;let I=a[R.id];for(let H in I){let z=I[H];for(let U in z)y(z[U].object),delete z[U];delete I[H]}delete a[R.id]}function T(R){for(let I in a){let H=a[I];if(H[R.id]===void 0)continue;let z=H[R.id];for(let U in z)y(z[U].object),delete z[U];delete H[R.id]}}function C(){L(),h=!0,l!==c&&(l=c,d(l.object))}function L(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:C,resetDefaultState:L,dispose:g,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:v,disableUnusedAttributes:w}}function ay(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,y;if(s)d=i,y="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[y](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let y=0;y<f;y++)this.render(h[y],u[y]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let y=0;for(let _=0;_<f;_++)y+=u[_];e.update(y,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function cy(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,v=o||t.has("OES_texture_float"),A=E&&v,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:E,floatFragmentTextures:v,floatVertexTextures:A,maxSamples:w}}function ly(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ds,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let y=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||y===null||y.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,E=b*4,v=p.clippingState||null;c.value=v,v=h(y,f,E,d);for(let A=0;A!==E;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,y){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,y!==!0||m===null){let p=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function hy(i){let t=new WeakMap;function e(o,a){return a===Ll?o.mapping=eo:a===Hl&&(o.mapping=no),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ll||a===Hl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new kl(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ac=class extends rc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zr=4,ad=[.125,.215,.35,.446,.526,.582],cr=20,El=new ac,cd=new tt,Ml=null,vl=0,wl=0,or=(1+Math.sqrt(5))/2,Xr=1/or,ld=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,or,Xr),new F(0,or,-Xr),new F(Xr,0,or),new F(-Xr,0,or),new F(or,Xr,0),new F(-or,Xr,0)],cc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ml=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,vl,wl),t.scissorTest=!1,Da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===eo||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:No,format:Ii,colorSpace:ps,depthBuffer:!1},s=hd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(r)),this._blurMaterial=dy(r,t,e)}return s}_compileMaterial(t){let e=new B(this._lodPlanes[0],t);this._renderer.compile(e,El)}_sceneToCubeUV(t,e,n,s){let a=new Bn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(cd),h.toneMapping=Os,h.autoClear=!1;let d=new _e({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new B(new dt,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(cd),_=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let E=this._cubeSize;Da(s,b*E,p>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(y,a),h.render(t,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===eo||t.mapping===no;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Da(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,El)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ld[(s-1)%ld.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new B(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cr-1),_=r/y,m=isFinite(r)?1+Math.floor(h*_):cr;m>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cr}`);let p=[],b=0;for(let x=0;x<cr;++x){let S=x/_,g=Math.exp(-S*S/2);p.push(g),x===0?b+=g:x<m&&(b+=2*g)}for(let x=0;x<p.length;x++)p[x]=p[x]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=y,f.mipInt.value=E-n;let v=this._sizeLods[s],A=3*v*(s>E-Zr?s-E+Zr:0),w=4*(this._cubeSize-v);Da(e,A,w,3*v,2*v),c.setRenderTarget(e),c.render(u,El)}};function uy(i){let t=[],e=[],n=[],s=i,r=i-Zr+1+ad.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zr?c=ad[o-i+Zr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,y=6,_=3,m=2,p=1,b=new Float32Array(_*y*d),E=new Float32Array(m*y*d),v=new Float32Array(p*y*d);for(let w=0;w<d;w++){let x=w%3*2/3-1,S=w>2?0:-1,g=[x,S,0,x+2/3,S,0,x+2/3,S+1,0,x,S,0,x+2/3,S+1,0,x,S+1,0];b.set(g,_*y*w),E.set(f,m*y*w);let M=[w,w,w,w,w,w];v.set(M,p*y*w)}let A=new ae;A.setAttribute("position",new pe(b,_)),A.setAttribute("uv",new pe(E,m)),A.setAttribute("faceIndex",new pe(v,p)),t.push(A),s>Zr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hd(i,t,e){let n=new ms(i,t,e);return n.texture.mapping=bc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dy(i,t,e){let n=new Float32Array(cr),s=new F(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function ud(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function dd(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Ih(){return`

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
	`}function fy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ll||c===Hl,h=c===eo||c===no;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new cc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new cc(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function py(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function my(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let y in f.attributes)t.remove(f.attributes[y]);for(let y in f.morphAttributes){let _=f.morphAttributes[y];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let y in f)t.update(f[y],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let y in d){let _=d[y];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,y=u.attributes.position,_=0;if(d!==null){let b=d.array;_=d.version;for(let E=0,v=b.length;E<v;E+=3){let A=b[E+0],w=b[E+1],x=b[E+2];f.push(A,w,w,x,x,A)}}else if(y!==void 0){let b=y.array;_=y.version;for(let E=0,v=b.length/3-1;E<v;E+=3){let A=E+0,w=E+1,x=E+2;f.push(A,w,w,x,x,A)}}else return;let m=new(Kd(f)?sc:ic)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function gy(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,y){i.drawElements(r,y,a,d*c),e.update(y,r,1)}function u(d,y,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,y,a,d*c,_),e.update(y,r,_)}function f(d,y,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/c,y[p]);else{m.multiDrawElementsWEBGL(r,y,0,a,d,0,_);let p=0;for(let b=0;b<_;b++)p+=y[b];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function xy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yy(i,t){return i[0]-t[0]}function _y(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Ey(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Be,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==y){let R=function(){C.dispose(),r.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();let b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],x=h.morphAttributes.color||[],S=0;b===!0&&(S=1),E===!0&&(S=2),v===!0&&(S=3);let g=h.attributes.position.count*S,M=1;g>t.maxTextureSize&&(M=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let T=new Float32Array(g*M*4*y),C=new Qa(T,g,M,y);C.type=zs,C.needsUpdate=!0;let L=S*4;for(let I=0;I<y;I++){let H=A[I],z=w[I],U=x[I],N=g*M*4*I;for(let G=0;G<H.count;G++){let X=G*L;b===!0&&(o.fromBufferAttribute(H,G),T[N+X+0]=o.x,T[N+X+1]=o.y,T[N+X+2]=o.z,T[N+X+3]=0),E===!0&&(o.fromBufferAttribute(z,G),T[N+X+4]=o.x,T[N+X+5]=o.y,T[N+X+6]=o.z,T[N+X+7]=0),v===!0&&(o.fromBufferAttribute(U,G),T[N+X+8]=o.x,T[N+X+9]=o.y,T[N+X+10]=o.z,T[N+X+11]=U.itemSize===4?o.w:1)}}_={count:y,texture:C,size:new ft(g,M)},r.set(h,_),h.addEventListener("dispose",R)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,y=n[h.id];if(y===void 0||y.length!==d){y=[];for(let E=0;E<d;E++)y[E]=[E,0];n[h.id]=y}for(let E=0;E<d;E++){let v=y[E];v[0]=E,v[1]=f[E]}y.sort(_y);for(let E=0;E<8;E++)E<d&&y[E][1]?(a[E][0]=y[E][0],a[E][1]=y[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(yy);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let E=0;E<8;E++){let v=a[E],A=v[0],w=v[1];A!==Number.MAX_SAFE_INTEGER&&w?(_&&h.getAttribute("morphTarget"+E)!==_[A]&&h.setAttribute("morphTarget"+E,_[A]),m&&h.getAttribute("morphNormal"+E)!==m[A]&&h.setAttribute("morphNormal"+E,m[A]),s[E]=w,p+=w):(_&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),m&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),s[E]=0)}let b=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function My(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var lc=class extends di{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:hr,h!==hr&&h!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hr&&(n=Us),n===void 0&&h===io&&(n=lr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:An,this.minFilter=c!==void 0?c:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ef=new di,nf=new lc(1,1);nf.compareFunction=Jd;var sf=new Qa,rf=new Fl,of=new oc,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),xd=new Float32Array(4);function oo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rc(i,t){let e=pd[t];e===void 0&&(e=new Int32Array(t),pd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2fv(this.addr,t),mn(e,t)}}function Ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;i.uniform3fv(this.addr,t),mn(e,t)}}function by(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4fv(this.addr,t),mn(e,t)}}function Sy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;xd.set(n),i.uniformMatrix2fv(this.addr,!1,xd),mn(e,n)}}function Ry(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),mn(e,n)}}function Ay(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),mn(e,n)}}function Cy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2iv(this.addr,t),mn(e,t)}}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3iv(this.addr,t),mn(e,t)}}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4iv(this.addr,t),mn(e,t)}}function Hy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2uiv(this.addr,t),mn(e,t)}}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3uiv(this.addr,t),mn(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4uiv(this.addr,t),mn(e,t)}}function Ny(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?nf:ef;e.setTexture2D(t||r,s)}function Oy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rf,s)}function Fy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||of,s)}function By(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sf,s)}function ky(i){switch(i){case 5126:return vy;case 35664:return wy;case 35665:return Ty;case 35666:return by;case 35674:return Sy;case 35675:return Ry;case 35676:return Ay;case 5124:case 35670:return Cy;case 35667:case 35671:return Py;case 35668:case 35672:return Iy;case 35669:case 35673:return Ly;case 5125:return Hy;case 36294:return Dy;case 36295:return Uy;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return By}}function Gy(i,t){i.uniform1fv(this.addr,t)}function Vy(i,t){let e=oo(t,this.size,2);i.uniform2fv(this.addr,e)}function Wy(i,t){let e=oo(t,this.size,3);i.uniform3fv(this.addr,e)}function Xy(i,t){let e=oo(t,this.size,4);i.uniform4fv(this.addr,e)}function qy(i,t){let e=oo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yy(i,t){let e=oo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $y(i,t){let e=oo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zy(i,t){i.uniform1iv(this.addr,t)}function Jy(i,t){i.uniform2iv(this.addr,t)}function Ky(i,t){i.uniform3iv(this.addr,t)}function jy(i,t){i.uniform4iv(this.addr,t)}function Qy(i,t){i.uniform1uiv(this.addr,t)}function t_(i,t){i.uniform2uiv(this.addr,t)}function e_(i,t){i.uniform3uiv(this.addr,t)}function n_(i,t){i.uniform4uiv(this.addr,t)}function i_(i,t,e){let n=this.cache,s=t.length,r=Rc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ef,r[o])}function s_(i,t,e){let n=this.cache,s=t.length,r=Rc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rf,r[o])}function r_(i,t,e){let n=this.cache,s=t.length,r=Rc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||of,r[o])}function o_(i,t,e){let n=this.cache,s=t.length,r=Rc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sf,r[o])}function a_(i){switch(i){case 5126:return Gy;case 35664:return Vy;case 35665:return Wy;case 35666:return Xy;case 35674:return qy;case 35675:return Yy;case 35676:return $y;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return jy;case 5125:return Qy;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}var Gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ky(e.type)}},Vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a_(e.type)}},Wl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function yd(i,t){i.seq.push(t),i.map[t.id]=t}function c_(i,t,e){let n=i.name,s=n.length;for(Tl.lastIndex=0;;){let r=Tl.exec(n),o=Tl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yd(e,l===void 0?new Gl(a,i,t):new Vl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Wl(a),yd(e,u)),e=u}}}var to=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);c_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function _d(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var l_=37297,h_=0;function u_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function d_(i){let t=Re.getPrimaries(Re.workingColorSpace),e=Re.getPrimaries(i),n;switch(t===e?n="":t===Ya&&e===qa?n="LinearDisplayP3ToLinearSRGB":t===qa&&e===Ya&&(n="LinearSRGBToLinearDisplayP3"),i){case ps:case Sc:return[n,"LinearTransferOETF"];case Ne:case Ah:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ed(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+u_(i.getShaderSource(t),o)}else return s}function f_(i,t){let e=d_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function p_(i,t){let e;switch(t){case Mm:e="Linear";break;case vm:e="Reinhard";break;case wm:e="OptimizedCineon";break;case Tm:e="ACESFilmic";break;case Sm:e="AgX";break;case bm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function m_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jr).join(`
`)}function g_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Jr).join(`
`)}function x_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Jr(i){return i!==""}function Md(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var __=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(__,M_)}var E_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function M_(i,t){let e=oe[t];if(e===void 0){let n=E_.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}var v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(i){return i.replace(v_,w_)}function w_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function T_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===us&&(t="SHADOWMAP_TYPE_VSM"),t}function b_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case eo:case no:t="ENVMAP_TYPE_CUBE";break;case bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function S_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case no:t="ENVMAP_MODE_REFRACTION";break}return t}function R_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Th:t="ENVMAP_BLENDING_MULTIPLY";break;case _m:t="ENVMAP_BLENDING_MIX";break;case Em:t="ENVMAP_BLENDING_ADD";break}return t}function A_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function C_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=T_(e),l=b_(e),h=S_(e),u=R_(e),f=A_(e),d=e.isWebGL2?"":m_(e),y=g_(e),_=x_(r),m=s.createProgram(),p,b,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Jr).join(`
`),p.length>0&&(p+=`
`),b=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Jr).join(`
`),b.length>0&&(b+=`
`)):(p=[Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),b=[d,Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Os?"#define TONE_MAPPING":"",e.toneMapping!==Os?oe.tonemapping_pars_fragment:"",e.toneMapping!==Os?p_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,f_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),o=Xl(o),o=Md(o,e),o=vd(o,e),a=Xl(a),a=Md(a,e),a=vd(a,e),o=wd(o),a=wd(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let v=E+p+o,A=E+b+a,w=_d(s,s.VERTEX_SHADER,v),x=_d(s,s.FRAGMENT_SHADER,A);s.attachShader(m,w),s.attachShader(m,x),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function S(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(m).trim(),R=s.getShaderInfoLog(w).trim(),I=s.getShaderInfoLog(x).trim(),H=!0,z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,x);else{let U=Ed(s,w,"vertex"),N=Ed(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+L+`
`+U+`
`+N)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(R===""||I==="")&&(z=!1);z&&(C.diagnostics={runnable:H,programLog:L,vertexShader:{log:R,prefix:p},fragmentShader:{log:I,prefix:b}})}s.deleteShader(w),s.deleteShader(x),g=new to(s,m),M=y_(s,m)}let g;this.getUniforms=function(){return g===void 0&&S(this),g};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(m,l_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=x,this}var P_=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yl(t),e.set(t,n)),n}},Yl=class{constructor(t){this.id=P_++,this.code=t,this.usedTimes=0}};function I_(i,t,e,n,s,r,o){let a=new nc,c=new ql,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return g===0?"uv":`uv${g}`}function m(g,M,T,C,L){let R=C.fog,I=L.geometry,H=g.isMeshStandardMaterial?C.environment:null,z=(g.isMeshStandardMaterial?e:t).get(g.envMap||H),U=z&&z.mapping===bc?z.image.height:null,N=y[g.type];g.precision!==null&&(d=s.getMaxPrecision(g.precision),d!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));let G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,X=G!==void 0?G.length:0,Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let q,Z,it,_t;if(N){let Ie=Gi[N];q=Ie.vertexShader,Z=Ie.fragmentShader}else q=g.vertexShader,Z=g.fragmentShader,c.update(g),it=c.getVertexShaderID(g),_t=c.getFragmentShaderID(g);let Et=i.getRenderTarget(),kt=L.isInstancedMesh===!0,qt=L.isBatchedMesh===!0,St=!!g.map,Ot=!!g.matcap,V=!!z,ct=!!g.aoMap,et=!!g.lightMap,ht=!!g.bumpMap,nt=!!g.normalMap,Ht=!!g.displacementMap,gt=!!g.emissiveMap,O=!!g.metalnessMap,D=!!g.roughnessMap,$=g.anisotropy>0,ot=g.clearcoat>0,at=g.iridescence>0,st=g.sheen>0,zt=g.transmission>0,wt=$&&!!g.anisotropyMap,At=ot&&!!g.clearcoatMap,Vt=ot&&!!g.clearcoatNormalMap,Jt=ot&&!!g.clearcoatRoughnessMap,lt=at&&!!g.iridescenceMap,ee=at&&!!g.iridescenceThicknessMap,Ft=st&&!!g.sheenColorMap,Kt=st&&!!g.sheenRoughnessMap,Bt=!!g.specularMap,Dt=!!g.specularColorMap,jt=!!g.specularIntensityMap,Me=zt&&!!g.transmissionMap,J=zt&&!!g.thicknessMap,Zt=!!g.gradientMap,Mt=!!g.alphaMap,k=g.alphaTest>0,rt=!!g.alphaHash,mt=!!g.extensions,Ut=!!I.attributes.uv1,xt=!!I.attributes.uv2,ye=!!I.attributes.uv3,Ee=Os;return g.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Ee=i.toneMapping),{isWebGL2:h,shaderID:N,shaderType:g.type,shaderName:g.name,vertexShader:q,fragmentShader:Z,defines:g.defines,customVertexShaderID:it,customFragmentShaderID:_t,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:qt,instancing:kt,instancingColor:kt&&L.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:ps,map:St,matcap:Ot,envMap:V,envMapMode:V&&z.mapping,envMapCubeUVHeight:U,aoMap:ct,lightMap:et,bumpMap:ht,normalMap:nt,displacementMap:f&&Ht,emissiveMap:gt,normalMapObjectSpace:nt&&g.normalMapType===Nm,normalMapTangentSpace:nt&&g.normalMapType===Rh,metalnessMap:O,roughnessMap:D,anisotropy:$,anisotropyMap:wt,clearcoat:ot,clearcoatMap:At,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Jt,iridescence:at,iridescenceMap:lt,iridescenceThicknessMap:ee,sheen:st,sheenColorMap:Ft,sheenRoughnessMap:Kt,specularMap:Bt,specularColorMap:Dt,specularIntensityMap:jt,transmission:zt,transmissionMap:Me,thicknessMap:J,gradientMap:Zt,opaque:g.transparent===!1&&g.blending===jr,alphaMap:Mt,alphaTest:k,alphaHash:rt,combine:g.combine,mapUv:St&&_(g.map.channel),aoMapUv:ct&&_(g.aoMap.channel),lightMapUv:et&&_(g.lightMap.channel),bumpMapUv:ht&&_(g.bumpMap.channel),normalMapUv:nt&&_(g.normalMap.channel),displacementMapUv:Ht&&_(g.displacementMap.channel),emissiveMapUv:gt&&_(g.emissiveMap.channel),metalnessMapUv:O&&_(g.metalnessMap.channel),roughnessMapUv:D&&_(g.roughnessMap.channel),anisotropyMapUv:wt&&_(g.anisotropyMap.channel),clearcoatMapUv:At&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&_(g.sheenRoughnessMap.channel),specularMapUv:Bt&&_(g.specularMap.channel),specularColorMapUv:Dt&&_(g.specularColorMap.channel),specularIntensityMapUv:jt&&_(g.specularIntensityMap.channel),transmissionMapUv:Me&&_(g.transmissionMap.channel),thicknessMapUv:J&&_(g.thicknessMap.channel),alphaMapUv:Mt&&_(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(nt||$),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:xt,vertexUv3s:ye,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(St||Mt),fog:!!R,useFog:g.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&g.map.isVideoTexture===!0&&Re.getTransfer(g.map.colorSpace)===ze,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===le,flipSided:g.side===kn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:mt&&g.extensions.derivatives===!0,extensionFragDepth:mt&&g.extensions.fragDepth===!0,extensionDrawBuffers:mt&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&g.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()}}function p(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let T in g.defines)M.push(T),M.push(g.defines[T]);return g.isRawShaderMaterial===!1&&(b(M,g),E(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function b(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function E(g,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),g.push(a.mask)}function v(g){let M=y[g.type],T;if(M){let C=Gi[M];T=Ph.clone(C.uniforms)}else T=g.uniforms;return T}function A(g,M){let T;for(let C=0,L=l.length;C<L;C++){let R=l[C];if(R.cacheKey===M){T=R,++T.usedTimes;break}}return T===void 0&&(T=new C_(i,M,g,r),l.push(T)),T}function w(g){if(--g.usedTimes===0){let M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),g.destroy()}}function x(g){c.remove(g)}function S(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:x,programs:l,dispose:S}}function L_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function H_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,y,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:y,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=y,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,y,_,m){let p=o(u,f,d,y,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,y,_,m){let p=o(u,f,d,y,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||H_),n.length>1&&n.sort(f||bd),s.length>1&&s.sort(f||bd)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function D_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Sd,i.set(n,[o])):s>=r.length?(o=new Sd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function U_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new tt};break;case"SpotLight":e={position:new F,direction:new F,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var N_=0;function O_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function F_(i,t){let e=new U_,n=z_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new ve,a=new ve;function c(h,u){let f=0,d=0,y=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let _=0,m=0,p=0,b=0,E=0,v=0,A=0,w=0,x=0,S=0,g=0;h.sort(O_);let M=u===!0?Math.PI:1;for(let C=0,L=h.length;C<L;C++){let R=h[C],I=R.color,H=R.intensity,z=R.distance,U=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=I.r*H*M,d+=I.g*H*M,y+=I.b*H*M;else if(R.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(R.sh.coefficients[N],H);g++}else if(R.isDirectionalLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity*M),R.castShadow){let G=R.shadow,X=n.get(R);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.directionalShadow[_]=X,s.directionalShadowMap[_]=U,s.directionalShadowMatrix[_]=R.shadow.matrix,v++}s.directional[_]=N,_++}else if(R.isSpotLight){let N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(I).multiplyScalar(H*M),N.distance=z,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,s.spot[p]=N;let G=R.shadow;if(R.map&&(s.spotLightMap[x]=R.map,x++,G.updateMatrices(R),R.castShadow&&S++),s.spotLightMatrix[p]=G.matrix,R.castShadow){let X=n.get(R);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.spotShadow[p]=X,s.spotShadowMap[p]=U,w++}p++}else if(R.isRectAreaLight){let N=e.get(R);N.color.copy(I).multiplyScalar(H),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),s.rectArea[b]=N,b++}else if(R.isPointLight){let N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity*M),N.distance=R.distance,N.decay=R.decay,R.castShadow){let G=R.shadow,X=n.get(R);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,s.pointShadow[m]=X,s.pointShadowMap[m]=U,s.pointShadowMatrix[m]=R.shadow.matrix,A++}s.point[m]=N,m++}else if(R.isHemisphereLight){let N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(H*M),N.groundColor.copy(R.groundColor).multiplyScalar(H*M),s.hemi[E]=N,E++}}b>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=vt.LTC_FLOAT_1,s.rectAreaLTC2=vt.LTC_FLOAT_2):(s.rectAreaLTC1=vt.LTC_HALF_1,s.rectAreaLTC2=vt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=vt.LTC_FLOAT_1,s.rectAreaLTC2=vt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=vt.LTC_HALF_1,s.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=y;let T=s.hash;(T.directionalLength!==_||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==b||T.hemiLength!==E||T.numDirectionalShadows!==v||T.numPointShadows!==A||T.numSpotShadows!==w||T.numSpotMaps!==x||T.numLightProbes!==g)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=b,s.point.length=m,s.hemi.length=E,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=w+x-S,s.spotLightMap.length=x,s.numSpotLightShadowsWithMaps=S,s.numLightProbes=g,T.directionalLength=_,T.pointLength=m,T.spotLength=p,T.rectAreaLength=b,T.hemiLength=E,T.numDirectionalShadows=v,T.numPointShadows=A,T.numSpotShadows=w,T.numSpotMaps=x,T.numLightProbes=g,s.version=N_++)}function l(h,u){let f=0,d=0,y=0,_=0,m=0,p=u.matrixWorldInverse;for(let b=0,E=h.length;b<E;b++){let v=h[b];if(v.isDirectionalLight){let A=s.directional[f];A.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),f++}else if(v.isSpotLight){let A=s.spot[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),y++}else if(v.isRectAreaLight){let A=s.rectArea[_];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let A=s.point[d];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Rd(i,t){let e=new F_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function B_(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Rd(i,t),e.set(r,[c])):o>=a.length?(c=new Rd(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var $l=class extends gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zl=class extends gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function V_(i,t,e){let n=new Fo,s=new ft,r=new ft,o=new Be,a=new $l({depthPacking:zm}),c=new Zl,l={},h=e.maxTextureSize,u={[Fs]:kn,[kn]:Fs,[le]:le},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:k_,fragmentShader:G_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let y=new ae;y.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new B(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bd;let p=this.type;this.render=function(w,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let g=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Ns),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=p!==us&&this.type===us,R=p===us&&this.type!==us;for(let I=0,H=w.length;I<H;I++){let z=w[I],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let N=U.getFrameExtents();if(s.multiply(N),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/N.x),s.x=r.x*N.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/N.y),s.y=r.y*N.y,U.mapSize.y=r.y)),U.map===null||L===!0||R===!0){let X=this.type!==us?{minFilter:An,magFilter:An}:{};U.map!==null&&U.map.dispose(),U.map=new ms(s.x,s.y,X),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let G=U.getViewportCount();for(let X=0;X<G;X++){let Q=U.getViewport(X);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),C.viewport(o),U.updateMatrices(z,X),n=U.getFrustum(),v(x,S,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===us&&b(U,S),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(g,M,T)};function b(w,x){let S=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ms(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,S,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,S,d,_,null)}function E(w,x,S,g){let M=null,T=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)M=T;else if(M=S.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){let C=M.uuid,L=x.uuid,R=l[C];R===void 0&&(R={},l[C]=R);let I=R[L];I===void 0&&(I=M.clone(),R[L]=I,x.addEventListener("dispose",A)),M=I}if(M.visible=x.visible,M.wireframe=x.wireframe,g===us?M.side=x.shadowSide!==null?x.shadowSide:x.side:M.side=x.shadowSide!==null?x.shadowSide:u[x.side],M.alphaMap=x.alphaMap,M.alphaTest=x.alphaTest,M.map=x.map,M.clipShadows=x.clipShadows,M.clippingPlanes=x.clippingPlanes,M.clipIntersection=x.clipIntersection,M.displacementMap=x.displacementMap,M.displacementScale=x.displacementScale,M.displacementBias=x.displacementBias,M.wireframeLinewidth=x.wireframeLinewidth,M.linewidth=x.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let C=i.properties.get(M);C.light=S}return M}function v(w,x,S,g,M){if(w.visible===!1)return;if(w.layers.test(x.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===us)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let L=t.update(w),R=w.material;if(Array.isArray(R)){let I=L.groups;for(let H=0,z=I.length;H<z;H++){let U=I[H],N=R[U.materialIndex];if(N&&N.visible){let G=E(w,N,g,M);w.onBeforeShadow(i,w,x,S,L,G,U),i.renderBufferDirect(S,null,L,G,w,U),w.onAfterShadow(i,w,x,S,L,G,U)}}}else if(R.visible){let I=E(w,R,g,M);w.onBeforeShadow(i,w,x,S,L,I,null),i.renderBufferDirect(S,null,L,I,w,null),w.onAfterShadow(i,w,x,S,L,I,null)}}let C=w.children;for(let L=0,R=C.length;L<R;L++)v(C[L],x,S,g,M)}function A(w){w.target.removeEventListener("dispose",A);for(let S in l){let g=l[S],M=w.target.uuid;M in g&&(g[M].dispose(),delete g[M])}}}function W_(i,t,e){let n=e.isWebGL2;function s(){let k=!1,rt=new Be,mt=null,Ut=new Be(0,0,0,0);return{setMask:function(xt){mt!==xt&&!k&&(i.colorMask(xt,xt,xt,xt),mt=xt)},setLocked:function(xt){k=xt},setClear:function(xt,ye,Ee,He,Ie){Ie===!0&&(xt*=He,ye*=He,Ee*=He),rt.set(xt,ye,Ee,He),Ut.equals(rt)===!1&&(i.clearColor(xt,ye,Ee,He),Ut.copy(rt))},reset:function(){k=!1,mt=null,Ut.set(-1,0,0,0)}}}function r(){let k=!1,rt=null,mt=null,Ut=null;return{setTest:function(xt){xt?qt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(xt){rt!==xt&&!k&&(i.depthMask(xt),rt=xt)},setFunc:function(xt){if(mt!==xt){switch(xt){case dm:i.depthFunc(i.NEVER);break;case fm:i.depthFunc(i.ALWAYS);break;case pm:i.depthFunc(i.LESS);break;case Ga:i.depthFunc(i.LEQUAL);break;case mm:i.depthFunc(i.EQUAL);break;case gm:i.depthFunc(i.GEQUAL);break;case xm:i.depthFunc(i.GREATER);break;case ym:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=xt}},setLocked:function(xt){k=xt},setClear:function(xt){Ut!==xt&&(i.clearDepth(xt),Ut=xt)},reset:function(){k=!1,rt=null,mt=null,Ut=null}}}function o(){let k=!1,rt=null,mt=null,Ut=null,xt=null,ye=null,Ee=null,He=null,Ie=null;return{setTest:function(ue){k||(ue?qt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ue){rt!==ue&&!k&&(i.stencilMask(ue),rt=ue)},setFunc:function(ue,hn,Xn){(mt!==ue||Ut!==hn||xt!==Xn)&&(i.stencilFunc(ue,hn,Xn),mt=ue,Ut=hn,xt=Xn)},setOp:function(ue,hn,Xn){(ye!==ue||Ee!==hn||He!==Xn)&&(i.stencilOp(ue,hn,Xn),ye=ue,Ee=hn,He=Xn)},setLocked:function(ue){k=ue},setClear:function(ue){Ie!==ue&&(i.clearStencil(ue),Ie=ue)},reset:function(){k=!1,rt=null,mt=null,Ut=null,xt=null,ye=null,Ee=null,He=null,Ie=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},y=new WeakMap,_=[],m=null,p=!1,b=null,E=null,v=null,A=null,w=null,x=null,S=null,g=new tt(0,0,0),M=0,T=!1,C=null,L=null,R=null,I=null,H=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,N=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=N>=1):G.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=N>=2);let X=null,Q={},q=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),it=new Be().fromArray(q),_t=new Be().fromArray(Z);function Et(k,rt,mt,Ut){let xt=new Uint8Array(4),ye=i.createTexture();i.bindTexture(k,ye),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<mt;Ee++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(rt,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(rt+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ye}let kt={};kt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(kt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),qt(i.DEPTH_TEST),c.setFunc(Ga),gt(!1),O(au),qt(i.CULL_FACE),nt(Ns);function qt(k){f[k]!==!0&&(i.enable(k),f[k]=!0)}function St(k){f[k]!==!1&&(i.disable(k),f[k]=!1)}function Ot(k,rt){return d[k]!==rt?(i.bindFramebuffer(k,rt),d[k]=rt,n&&(k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=rt),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=rt)),!0):!1}function V(k,rt){let mt=_,Ut=!1;if(k)if(mt=y.get(rt),mt===void 0&&(mt=[],y.set(rt,mt)),k.isWebGLMultipleRenderTargets){let xt=k.texture;if(mt.length!==xt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ee=xt.length;ye<Ee;ye++)mt[ye]=i.COLOR_ATTACHMENT0+ye;mt.length=xt.length,Ut=!0}}else mt[0]!==i.COLOR_ATTACHMENT0&&(mt[0]=i.COLOR_ATTACHMENT0,Ut=!0);else mt[0]!==i.BACK&&(mt[0]=i.BACK,Ut=!0);Ut&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function ct(k){return m!==k?(i.useProgram(k),m=k,!0):!1}let et={[ar]:i.FUNC_ADD,[Kp]:i.FUNC_SUBTRACT,[jp]:i.FUNC_REVERSE_SUBTRACT};if(n)et[hu]=i.MIN,et[uu]=i.MAX;else{let k=t.get("EXT_blend_minmax");k!==null&&(et[hu]=k.MIN_EXT,et[uu]=k.MAX_EXT)}let ht={[Qp]:i.ZERO,[tm]:i.ONE,[em]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[am]:i.SRC_ALPHA_SATURATE,[rm]:i.DST_COLOR,[im]:i.DST_ALPHA,[nm]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[om]:i.ONE_MINUS_DST_COLOR,[sm]:i.ONE_MINUS_DST_ALPHA,[cm]:i.CONSTANT_COLOR,[lm]:i.ONE_MINUS_CONSTANT_COLOR,[hm]:i.CONSTANT_ALPHA,[um]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(k,rt,mt,Ut,xt,ye,Ee,He,Ie,ue){if(k===Ns){p===!0&&(St(i.BLEND),p=!1);return}if(p===!1&&(qt(i.BLEND),p=!0),k!==Jp){if(k!==b||ue!==T){if((E!==ar||w!==ar)&&(i.blendEquation(i.FUNC_ADD),E=ar,w=ar),ue)switch(k){case jr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zn:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,A=null,x=null,S=null,g.set(0,0,0),M=0,b=k,T=ue}return}xt=xt||rt,ye=ye||mt,Ee=Ee||Ut,(rt!==E||xt!==w)&&(i.blendEquationSeparate(et[rt],et[xt]),E=rt,w=xt),(mt!==v||Ut!==A||ye!==x||Ee!==S)&&(i.blendFuncSeparate(ht[mt],ht[Ut],ht[ye],ht[Ee]),v=mt,A=Ut,x=ye,S=Ee),(He.equals(g)===!1||Ie!==M)&&(i.blendColor(He.r,He.g,He.b,Ie),g.copy(He),M=Ie),b=k,T=!1}function Ht(k,rt){k.side===le?St(i.CULL_FACE):qt(i.CULL_FACE);let mt=k.side===kn;rt&&(mt=!mt),gt(mt),k.blending===jr&&k.transparent===!1?nt(Ns):nt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);let Ut=k.stencilWrite;l.setTest(Ut),Ut&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),$(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?qt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(k){C!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),C=k)}function O(k){k!==$p?(qt(i.CULL_FACE),k!==L&&(k===au?i.cullFace(i.BACK):k===Zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),L=k}function D(k){k!==R&&(U&&i.lineWidth(k),R=k)}function $(k,rt,mt){k?(qt(i.POLYGON_OFFSET_FILL),(I!==rt||H!==mt)&&(i.polygonOffset(rt,mt),I=rt,H=mt)):St(i.POLYGON_OFFSET_FILL)}function ot(k){k?qt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function at(k){k===void 0&&(k=i.TEXTURE0+z-1),X!==k&&(i.activeTexture(k),X=k)}function st(k,rt,mt){mt===void 0&&(X===null?mt=i.TEXTURE0+z-1:mt=X);let Ut=Q[mt];Ut===void 0&&(Ut={type:void 0,texture:void 0},Q[mt]=Ut),(Ut.type!==k||Ut.texture!==rt)&&(X!==mt&&(i.activeTexture(mt),X=mt),i.bindTexture(k,rt||kt[k]),Ut.type=k,Ut.texture=rt)}function zt(){let k=Q[X];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function wt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(k){it.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),it.copy(k))}function Me(k){_t.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),_t.copy(k))}function J(k,rt){let mt=u.get(rt);mt===void 0&&(mt=new WeakMap,u.set(rt,mt));let Ut=mt.get(k);Ut===void 0&&(Ut=i.getUniformBlockIndex(rt,k.name),mt.set(k,Ut))}function Zt(k,rt){let Ut=u.get(rt).get(k);h.get(rt)!==Ut&&(i.uniformBlockBinding(rt,Ut,k.__bindingPointIndex),h.set(rt,Ut))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},X=null,Q={},d={},y=new WeakMap,_=[],m=null,p=!1,b=null,E=null,v=null,A=null,w=null,x=null,S=null,g=new tt(0,0,0),M=0,T=!1,C=null,L=null,R=null,I=null,H=null,it.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:qt,disable:St,bindFramebuffer:Ot,drawBuffers:V,useProgram:ct,setBlending:nt,setMaterial:Ht,setFlipSided:gt,setCullFace:O,setLineWidth:D,setPolygonOffset:$,setScissorTest:ot,activeTexture:at,bindTexture:st,unbindTexture:zt,compressedTexImage2D:wt,compressedTexImage3D:At,texImage2D:Bt,texImage3D:Dt,updateUBOMapping:J,uniformBlockBinding:Zt,texStorage2D:Ft,texStorage3D:Kt,texSubImage2D:Vt,texSubImage3D:Jt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ee,scissor:jt,viewport:Me,reset:Mt}}function X_(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,D){return d?new OffscreenCanvas(O,D):Ja("canvas")}function _(O,D,$,ot){let at=1;if((O.width>ot||O.height>ot)&&(at=ot/Math.max(O.width,O.height)),at<1||D===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){let st=D?Za:Math.floor,zt=st(at*O.width),wt=st(at*O.height);u===void 0&&(u=y(zt,wt));let At=$?y(zt,wt):u;return At.width=zt,At.height=wt,At.getContext("2d").drawImage(O,0,0,zt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+zt+"x"+wt+")."),At}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function m(O){return Nl(O.width)&&Nl(O.height)}function p(O){return a?!1:O.wrapS!==Pi||O.wrapT!==Pi||O.minFilter!==An&&O.minFilter!==$n}function b(O,D){return O.generateMipmaps&&D&&O.minFilter!==An&&O.minFilter!==$n}function E(O){i.generateMipmap(O)}function v(O,D,$,ot,at=!1){if(a===!1)return D;if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let st=D;if(D===i.RED&&($===i.FLOAT&&(st=i.R32F),$===i.HALF_FLOAT&&(st=i.R16F),$===i.UNSIGNED_BYTE&&(st=i.R8)),D===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.R8UI),$===i.UNSIGNED_SHORT&&(st=i.R16UI),$===i.UNSIGNED_INT&&(st=i.R32UI),$===i.BYTE&&(st=i.R8I),$===i.SHORT&&(st=i.R16I),$===i.INT&&(st=i.R32I)),D===i.RG&&($===i.FLOAT&&(st=i.RG32F),$===i.HALF_FLOAT&&(st=i.RG16F),$===i.UNSIGNED_BYTE&&(st=i.RG8)),D===i.RGBA){let zt=at?Xa:Re.getTransfer(ot);$===i.FLOAT&&(st=i.RGBA32F),$===i.HALF_FLOAT&&(st=i.RGBA16F),$===i.UNSIGNED_BYTE&&(st=zt===ze?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function A(O,D,$){return b(O,$)===!0||O.isFramebufferTexture&&O.minFilter!==An&&O.minFilter!==$n?Math.log2(Math.max(D.width,D.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?D.mipmaps.length:1}function w(O){return O===An||O===du||O===Jc?i.NEAREST:i.LINEAR}function x(O){let D=O.target;D.removeEventListener("dispose",x),g(D),D.isVideoTexture&&h.delete(D)}function S(O){let D=O.target;D.removeEventListener("dispose",S),T(D)}function g(O){let D=n.get(O);if(D.__webglInit===void 0)return;let $=O.source,ot=f.get($);if(ot){let at=ot[D.__cacheKey];at.usedTimes--,at.usedTimes===0&&M(O),Object.keys(ot).length===0&&f.delete($)}n.remove(O)}function M(O){let D=n.get(O);i.deleteTexture(D.__webglTexture);let $=O.source,ot=f.get($);delete ot[D.__cacheKey],o.memory.textures--}function T(O){let D=O.texture,$=n.get(O),ot=n.get(D);if(ot.__webglTexture!==void 0&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray($.__webglFramebuffer[at]))for(let st=0;st<$.__webglFramebuffer[at].length;st++)i.deleteFramebuffer($.__webglFramebuffer[at][st]);else i.deleteFramebuffer($.__webglFramebuffer[at]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[at])}else{if(Array.isArray($.__webglFramebuffer))for(let at=0;at<$.__webglFramebuffer.length;at++)i.deleteFramebuffer($.__webglFramebuffer[at]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let at=0;at<$.__webglColorRenderbuffer.length;at++)$.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[at]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let at=0,st=D.length;at<st;at++){let zt=n.get(D[at]);zt.__webglTexture&&(i.deleteTexture(zt.__webglTexture),o.memory.textures--),n.remove(D[at])}n.remove(D),n.remove(O)}let C=0;function L(){C=0}function R(){let O=C;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),C+=1,O}function I(O){let D=[];return D.push(O.wrapS),D.push(O.wrapT),D.push(O.wrapR||0),D.push(O.magFilter),D.push(O.minFilter),D.push(O.anisotropy),D.push(O.internalFormat),D.push(O.format),D.push(O.type),D.push(O.generateMipmaps),D.push(O.premultiplyAlpha),D.push(O.flipY),D.push(O.unpackAlignment),D.push(O.colorSpace),D.join()}function H(O,D){let $=n.get(O);if(O.isVideoTexture&&Ht(O),O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){let ot=O.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it($,O,D);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+D)}function z(O,D){let $=n.get(O);if(O.version>0&&$.__version!==O.version){it($,O,D);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+D)}function U(O,D){let $=n.get(O);if(O.version>0&&$.__version!==O.version){it($,O,D);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+D)}function N(O,D){let $=n.get(O);if(O.version>0&&$.__version!==O.version){_t($,O,D);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+D)}let G={[Dl]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Ul]:i.MIRRORED_REPEAT},X={[An]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[Jc]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[Rm]:i.LINEAR_MIPMAP_NEAREST,[zo]:i.LINEAR_MIPMAP_LINEAR},Q={[Om]:i.NEVER,[Wm]:i.ALWAYS,[Fm]:i.LESS,[Jd]:i.LEQUAL,[Bm]:i.EQUAL,[Vm]:i.GEQUAL,[km]:i.GREATER,[Gm]:i.NOTEQUAL};function q(O,D,$){if($?(i.texParameteri(O,i.TEXTURE_WRAP_S,G[D.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,G[D.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,G[D.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,X[D.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,X[D.minFilter])):(i.texParameteri(O,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(O,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(D.wrapS!==Pi||D.wrapT!==Pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(O,i.TEXTURE_MAG_FILTER,w(D.magFilter)),i.texParameteri(O,i.TEXTURE_MIN_FILTER,w(D.minFilter)),D.minFilter!==An&&D.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Q[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ot=t.get("EXT_texture_filter_anisotropic");if(D.magFilter===An||D.minFilter!==Jc&&D.minFilter!==zo||D.type===zs&&t.has("OES_texture_float_linear")===!1||a===!1&&D.type===No&&t.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||n.get(D).__currentAnisotropy)&&(i.texParameterf(O,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy)}}function Z(O,D){let $=!1;O.__webglInit===void 0&&(O.__webglInit=!0,D.addEventListener("dispose",x));let ot=D.source,at=f.get(ot);at===void 0&&(at={},f.set(ot,at));let st=I(D);if(st!==O.__cacheKey){at[st]===void 0&&(at[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),at[st].usedTimes++;let zt=at[O.__cacheKey];zt!==void 0&&(at[O.__cacheKey].usedTimes--,zt.usedTimes===0&&M(D)),O.__cacheKey=st,O.__webglTexture=at[st].texture}return $}function it(O,D,$){let ot=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ot=i.TEXTURE_3D);let at=Z(O,D),st=D.source;e.bindTexture(ot,O.__webglTexture,i.TEXTURE0+$);let zt=n.get(st);if(st.version!==zt.__version||at===!0){e.activeTexture(i.TEXTURE0+$);let wt=Re.getPrimaries(Re.workingColorSpace),At=D.colorSpace===_i?null:Re.getPrimaries(D.colorSpace),Vt=D.colorSpace===_i||wt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Jt=p(D)&&m(D.image)===!1,lt=_(D.image,Jt,!1,s.maxTextureSize);lt=gt(D,lt);let ee=m(lt)||a,Ft=r.convert(D.format,D.colorSpace),Kt=r.convert(D.type),Bt=v(D.internalFormat,Ft,Kt,D.colorSpace,D.isVideoTexture);q(ot,D,ee);let Dt,jt=D.mipmaps,Me=a&&D.isVideoTexture!==!0&&Bt!==$d,J=zt.__version===void 0||at===!0,Zt=A(D,lt,ee);if(D.isDepthTexture)Bt=i.DEPTH_COMPONENT,a?D.type===zs?Bt=i.DEPTH_COMPONENT32F:D.type===Us?Bt=i.DEPTH_COMPONENT24:D.type===lr?Bt=i.DEPTH24_STENCIL8:Bt=i.DEPTH_COMPONENT16:D.type===zs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===hr&&Bt===i.DEPTH_COMPONENT&&D.type!==bh&&D.type!==Us&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=Us,Kt=r.convert(D.type)),D.format===io&&Bt===i.DEPTH_COMPONENT&&(Bt=i.DEPTH_STENCIL,D.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=lr,Kt=r.convert(D.type))),J&&(Me?e.texStorage2D(i.TEXTURE_2D,1,Bt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,lt.width,lt.height,0,Ft,Kt,null));else if(D.isDataTexture)if(jt.length>0&&ee){Me&&J&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,jt[0].width,jt[0].height);for(let Mt=0,k=jt.length;Mt<k;Mt++)Dt=jt[Mt],Me?e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ft,Kt,Dt.data):e.texImage2D(i.TEXTURE_2D,Mt,Bt,Dt.width,Dt.height,0,Ft,Kt,Dt.data);D.generateMipmaps=!1}else Me?(J&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,lt.width,lt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Ft,Kt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,lt.width,lt.height,0,Ft,Kt,lt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Me&&J&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Bt,jt[0].width,jt[0].height,lt.depth);for(let Mt=0,k=jt.length;Mt<k;Mt++)Dt=jt[Mt],D.format!==Ii?Ft!==null?Me?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,lt.depth,Ft,Dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,Bt,Dt.width,Dt.height,lt.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,lt.depth,Ft,Kt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,Bt,Dt.width,Dt.height,lt.depth,0,Ft,Kt,Dt.data)}else{Me&&J&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,jt[0].width,jt[0].height);for(let Mt=0,k=jt.length;Mt<k;Mt++)Dt=jt[Mt],D.format!==Ii?Ft!==null?Me?e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ft,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,Bt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ft,Kt,Dt.data):e.texImage2D(i.TEXTURE_2D,Mt,Bt,Dt.width,Dt.height,0,Ft,Kt,Dt.data)}else if(D.isDataArrayTexture)Me?(J&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Bt,lt.width,lt.height,lt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ft,Kt,lt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,lt.width,lt.height,lt.depth,0,Ft,Kt,lt.data);else if(D.isData3DTexture)Me?(J&&e.texStorage3D(i.TEXTURE_3D,Zt,Bt,lt.width,lt.height,lt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ft,Kt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,lt.width,lt.height,lt.depth,0,Ft,Kt,lt.data);else if(D.isFramebufferTexture){if(J)if(Me)e.texStorage2D(i.TEXTURE_2D,Zt,Bt,lt.width,lt.height);else{let Mt=lt.width,k=lt.height;for(let rt=0;rt<Zt;rt++)e.texImage2D(i.TEXTURE_2D,rt,Bt,Mt,k,0,Ft,Kt,null),Mt>>=1,k>>=1}}else if(jt.length>0&&ee){Me&&J&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,jt[0].width,jt[0].height);for(let Mt=0,k=jt.length;Mt<k;Mt++)Dt=jt[Mt],Me?e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Ft,Kt,Dt):e.texImage2D(i.TEXTURE_2D,Mt,Bt,Ft,Kt,Dt);D.generateMipmaps=!1}else Me?(J&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,lt.width,lt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,Kt,lt)):e.texImage2D(i.TEXTURE_2D,0,Bt,Ft,Kt,lt);b(D,ee)&&E(ot),zt.__version=st.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function _t(O,D,$){if(D.image.length!==6)return;let ot=Z(O,D),at=D.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+$);let st=n.get(at);if(at.version!==st.__version||ot===!0){e.activeTexture(i.TEXTURE0+$);let zt=Re.getPrimaries(Re.workingColorSpace),wt=D.colorSpace===_i?null:Re.getPrimaries(D.colorSpace),At=D.colorSpace===_i||zt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Vt=D.isCompressedTexture||D.image[0].isCompressedTexture,Jt=D.image[0]&&D.image[0].isDataTexture,lt=[];for(let Mt=0;Mt<6;Mt++)!Vt&&!Jt?lt[Mt]=_(D.image[Mt],!1,!0,s.maxCubemapSize):lt[Mt]=Jt?D.image[Mt].image:D.image[Mt],lt[Mt]=gt(D,lt[Mt]);let ee=lt[0],Ft=m(ee)||a,Kt=r.convert(D.format,D.colorSpace),Bt=r.convert(D.type),Dt=v(D.internalFormat,Kt,Bt,D.colorSpace),jt=a&&D.isVideoTexture!==!0,Me=st.__version===void 0||ot===!0,J=A(D,ee,Ft);q(i.TEXTURE_CUBE_MAP,D,Ft);let Zt;if(Vt){jt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Dt,ee.width,ee.height);for(let Mt=0;Mt<6;Mt++){Zt=lt[Mt].mipmaps;for(let k=0;k<Zt.length;k++){let rt=Zt[k];D.format!==Ii?Kt!==null?jt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k,0,0,rt.width,rt.height,Kt,rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k,Dt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k,0,0,rt.width,rt.height,Kt,Bt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k,Dt,rt.width,rt.height,0,Kt,Bt,rt.data)}}}else{Zt=D.mipmaps,jt&&Me&&(Zt.length>0&&J++,e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Dt,lt[0].width,lt[0].height));for(let Mt=0;Mt<6;Mt++)if(Jt){jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,lt[Mt].width,lt[Mt].height,Kt,Bt,lt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Dt,lt[Mt].width,lt[Mt].height,0,Kt,Bt,lt[Mt].data);for(let k=0;k<Zt.length;k++){let mt=Zt[k].image[Mt].image;jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k+1,0,0,mt.width,mt.height,Kt,Bt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k+1,Dt,mt.width,mt.height,0,Kt,Bt,mt.data)}}else{jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Kt,Bt,lt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Dt,Kt,Bt,lt[Mt]);for(let k=0;k<Zt.length;k++){let rt=Zt[k];jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k+1,0,0,Kt,Bt,rt.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k+1,Dt,Kt,Bt,rt.image[Mt])}}}b(D,Ft)&&E(i.TEXTURE_CUBE_MAP),st.__version=at.version,D.onUpdate&&D.onUpdate(D)}O.__version=D.version}function Et(O,D,$,ot,at,st){let zt=r.convert($.format,$.colorSpace),wt=r.convert($.type),At=v($.internalFormat,zt,wt,$.colorSpace);if(!n.get(D).__hasExternalTextures){let Jt=Math.max(1,D.width>>st),lt=Math.max(1,D.height>>st);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,st,At,Jt,lt,D.depth,0,zt,wt,null):e.texImage2D(at,st,At,Jt,lt,0,zt,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),nt(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,at,n.get($).__webglTexture,0,ht(D)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,at,n.get($).__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(O,D,$){if(i.bindRenderbuffer(i.RENDERBUFFER,O),D.depthBuffer&&!D.stencilBuffer){let ot=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||nt(D)){let at=D.depthTexture;at&&at.isDepthTexture&&(at.type===zs?ot=i.DEPTH_COMPONENT32F:at.type===Us&&(ot=i.DEPTH_COMPONENT24));let st=ht(D);nt(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,ot,D.width,D.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ot,D.width,D.height)}else i.renderbufferStorage(i.RENDERBUFFER,ot,D.width,D.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,O)}else if(D.depthBuffer&&D.stencilBuffer){let ot=ht(D);$&&nt(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,i.DEPTH24_STENCIL8,D.width,D.height):nt(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,i.DEPTH24_STENCIL8,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,O)}else{let ot=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let at=0;at<ot.length;at++){let st=ot[at],zt=r.convert(st.format,st.colorSpace),wt=r.convert(st.type),At=v(st.internalFormat,zt,wt,st.colorSpace),Vt=ht(D);$&&nt(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,At,D.width,D.height):nt(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,At,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,At,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(O,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),H(D.depthTexture,0);let ot=n.get(D.depthTexture).__webglTexture,at=ht(D);if(D.depthTexture.format===hr)nt(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(D.depthTexture.format===io)nt(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function St(O){let D=n.get(O),$=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!D.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");qt(D.__webglFramebuffer,O)}else if($){D.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[ot]),D.__webglDepthbuffer[ot]=i.createRenderbuffer(),kt(D.__webglDepthbuffer[ot],O,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=i.createRenderbuffer(),kt(D.__webglDepthbuffer,O,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(O,D,$){let ot=n.get(O);D!==void 0&&Et(ot.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&St(O)}function V(O){let D=O.texture,$=n.get(O),ot=n.get(D);O.addEventListener("dispose",S),O.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=D.version,o.memory.textures++);let at=O.isWebGLCubeRenderTarget===!0,st=O.isWebGLMultipleRenderTargets===!0,zt=m(O)||a;if(at){$.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(a&&D.mipmaps&&D.mipmaps.length>0){$.__webglFramebuffer[wt]=[];for(let At=0;At<D.mipmaps.length;At++)$.__webglFramebuffer[wt][At]=i.createFramebuffer()}else $.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(a&&D.mipmaps&&D.mipmaps.length>0){$.__webglFramebuffer=[];for(let wt=0;wt<D.mipmaps.length;wt++)$.__webglFramebuffer[wt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(st)if(s.drawBuffers){let wt=O.texture;for(let At=0,Vt=wt.length;At<Vt;At++){let Jt=n.get(wt[At]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&O.samples>0&&nt(O)===!1){let wt=st?D:[D];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let At=0;At<wt.length;At++){let Vt=wt[At];$.__webglColorRenderbuffer[At]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[At]);let Jt=r.convert(Vt.format,Vt.colorSpace),lt=r.convert(Vt.type),ee=v(Vt.internalFormat,Jt,lt,Vt.colorSpace,O.isXRRenderTarget===!0),Ft=ht(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,ee,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,$.__webglColorRenderbuffer[At])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),kt($.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),q(i.TEXTURE_CUBE_MAP,D,zt);for(let wt=0;wt<6;wt++)if(a&&D.mipmaps&&D.mipmaps.length>0)for(let At=0;At<D.mipmaps.length;At++)Et($.__webglFramebuffer[wt][At],O,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At);else Et($.__webglFramebuffer[wt],O,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);b(D,zt)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){let wt=O.texture;for(let At=0,Vt=wt.length;At<Vt;At++){let Jt=wt[At],lt=n.get(Jt);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),q(i.TEXTURE_2D,Jt,zt),Et($.__webglFramebuffer,O,Jt,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,0),b(Jt,zt)&&E(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(a?wt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(wt,ot.__webglTexture),q(wt,D,zt),a&&D.mipmaps&&D.mipmaps.length>0)for(let At=0;At<D.mipmaps.length;At++)Et($.__webglFramebuffer[At],O,D,i.COLOR_ATTACHMENT0,wt,At);else Et($.__webglFramebuffer,O,D,i.COLOR_ATTACHMENT0,wt,0);b(D,zt)&&E(wt),e.unbindTexture()}O.depthBuffer&&St(O)}function ct(O){let D=m(O)||a,$=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let ot=0,at=$.length;ot<at;ot++){let st=$[ot];if(b(st,D)){let zt=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(st).__webglTexture;e.bindTexture(zt,wt),E(zt),e.unbindTexture()}}}function et(O){if(a&&O.samples>0&&nt(O)===!1){let D=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],$=O.width,ot=O.height,at=i.COLOR_BUFFER_BIT,st=[],zt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(O),At=O.isWebGLMultipleRenderTargets===!0;if(At)for(let Vt=0;Vt<D.length;Vt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Vt=0;Vt<D.length;Vt++){st.push(i.COLOR_ATTACHMENT0+Vt),O.depthBuffer&&st.push(zt);let Jt=wt.__ignoreDepthValues!==void 0?wt.__ignoreDepthValues:!1;if(Jt===!1&&(O.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),At&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Vt]),Jt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[zt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[zt])),At){let lt=n.get(D[Vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,$,ot,0,0,$,ot,at,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let Vt=0;Vt<D.length;Vt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Vt]);let Jt=n.get(D[Vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}}function ht(O){return Math.min(s.maxSamples,O.samples)}function nt(O){let D=n.get(O);return a&&O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Ht(O){let D=o.render.frame;h.get(O)!==D&&(h.set(O,D),O.update())}function gt(O,D){let $=O.colorSpace,ot=O.format,at=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===zl||$!==ps&&$!==_i&&(Re.getTransfer($)===ze?a===!1?t.has("EXT_sRGB")===!0&&ot===Ii?(O.format=zl,O.minFilter=$n,O.generateMipmaps=!1):D=Ka.sRGBToLinear(D):(ot!==Ii||at!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),D}this.allocateTextureUnit=R,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=U,this.setTextureCube=N,this.rebindTextures=Ot,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=nt}function q_(i,t,e){let n=e.isWebGL2;function s(r,o=_i){let a,c=Re.getTransfer(o);if(r===Vi)return i.UNSIGNED_BYTE;if(r===Vd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Am)return i.BYTE;if(r===Cm)return i.SHORT;if(r===bh)return i.UNSIGNED_SHORT;if(r===Gd)return i.INT;if(r===Us)return i.UNSIGNED_INT;if(r===zs)return i.FLOAT;if(r===No)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Pm)return i.ALPHA;if(r===Ii)return i.RGBA;if(r===Im)return i.LUMINANCE;if(r===Lm)return i.LUMINANCE_ALPHA;if(r===hr)return i.DEPTH_COMPONENT;if(r===io)return i.DEPTH_STENCIL;if(r===zl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Sh)return i.RED;if(r===Xd)return i.RED_INTEGER;if(r===Hm)return i.RG;if(r===qd)return i.RG_INTEGER;if(r===Yd)return i.RGBA_INTEGER;if(r===Kc||r===jc||r===Qc||r===tl)if(c===ze)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Kc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Kc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fu||r===pu||r===mu||r===gu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===fu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$d)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===xu||r===yu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===xu)return c===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===yu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_u||r===Eu||r===Mu||r===vu||r===wu||r===Tu||r===bu||r===Su||r===Ru||r===Au||r===Cu||r===Pu||r===Iu||r===Lu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===_u)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Su)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ru)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Au)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Iu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===el||r===Hu||r===Du)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===el)return c===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Du)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dm||r===Uu||r===zu||r===Nu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===el)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Uu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===lr?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Jl=class extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},yt=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Y_={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,y=.005;l.inputState.pinching&&f>d+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kl=class extends Bs{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,y=null,_=e.getContextAttributes(),m=null,p=null,b=[],E=[],v=new ft,A=null,w=new Bn;w.layers.enable(1),w.viewport=new Be;let x=new Bn;x.layers.enable(2),x.viewport=new Be;let S=[w,x],g=new Jl;g.layers.enable(1),g.layers.enable(2);let M=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=b[q];return Z===void 0&&(Z=new Lo,b[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=b[q];return Z===void 0&&(Z=new Lo,b[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=b[q];return Z===void 0&&(Z=new Lo,b[q]=Z),Z.getHandSpace()};function C(q){let Z=E.indexOf(q.inputSource);if(Z===-1)return;let it=b[Z];it!==void 0&&(it.update(q.inputSource,q.frame,l||o),it.dispatchEvent({type:q.type,data:q.inputSource}))}function L(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",R);for(let q=0;q<b.length;q++){let Z=E[q];Z!==null&&(E[q]=null,b[q].disconnect(Z))}M=null,T=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",L),s.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Z={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new ms(d.framebufferWidth,d.framebufferHeight,{format:Ii,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,it=null,_t=null;_.depth&&(_t=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?io:hr,it=_.stencil?lr:Us);let Et={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new ms(f.textureWidth,f.textureHeight,{format:Ii,type:Vi,depthTexture:new lc(f.textureWidth,f.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let kt=t.properties.get(p);kt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(q){for(let Z=0;Z<q.removed.length;Z++){let it=q.removed[Z],_t=E.indexOf(it);_t>=0&&(E[_t]=null,b[_t].disconnect(it))}for(let Z=0;Z<q.added.length;Z++){let it=q.added[Z],_t=E.indexOf(it);if(_t===-1){for(let kt=0;kt<b.length;kt++)if(kt>=E.length){E.push(it),_t=kt;break}else if(E[kt]===null){E[kt]=it,_t=kt;break}if(_t===-1)break}let Et=b[_t];Et&&Et.connect(it)}}let I=new F,H=new F;function z(q,Z,it){I.setFromMatrixPosition(Z.matrixWorld),H.setFromMatrixPosition(it.matrixWorld);let _t=I.distanceTo(H),Et=Z.projectionMatrix.elements,kt=it.projectionMatrix.elements,qt=Et[14]/(Et[10]-1),St=Et[14]/(Et[10]+1),Ot=(Et[9]+1)/Et[5],V=(Et[9]-1)/Et[5],ct=(Et[8]-1)/Et[0],et=(kt[8]+1)/kt[0],ht=qt*ct,nt=qt*et,Ht=_t/(-ct+et),gt=Ht*-ct;Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(Ht),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let O=qt+Ht,D=St+Ht,$=ht-gt,ot=nt+(_t-gt),at=Ot*St/D*O,st=V*St/D*O;q.projectionMatrix.makePerspective($,ot,at,st,O,D),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function U(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;g.near=x.near=w.near=q.near,g.far=x.far=w.far=q.far,(M!==g.near||T!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),M=g.near,T=g.far);let Z=q.parent,it=g.cameras;U(g,Z);for(let _t=0;_t<it.length;_t++)U(it[_t],Z);it.length===2?z(g,w,x):g.projectionMatrix.copy(w.projectionMatrix),N(q,g,Z)};function N(q,Z,it){it===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(it.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Oo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)};let G=null;function X(q,Z){if(h=Z.getViewerPose(l||o),y=Z,h!==null){let it=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let _t=!1;it.length!==g.cameras.length&&(g.cameras.length=0,_t=!0);for(let Et=0;Et<it.length;Et++){let kt=it[Et],qt=null;if(d!==null)qt=d.getViewport(kt);else{let Ot=u.getViewSubImage(f,kt);qt=Ot.viewport,Et===0&&(t.setRenderTargetTextures(p,Ot.colorTexture,f.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(p))}let St=S[Et];St===void 0&&(St=new Bn,St.layers.enable(Et),St.viewport=new Be,S[Et]=St),St.matrix.fromArray(kt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(kt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(qt.x,qt.y,qt.width,qt.height),Et===0&&(g.matrix.copy(St.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),_t===!0&&g.cameras.push(St)}}for(let it=0;it<b.length;it++){let _t=E[it],Et=b[it];_t!==null&&Et!==void 0&&Et.update(_t,Z,l||o)}G&&G(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),y=null}let Q=new tf;Q.setAnimationLoop(X),this.setAnimationLoop=function(q){G=q},this.dispose=function(){}}};function $_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),y(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let E=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z_(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,E){let v=E.program;n.uniformBlockBinding(b,v)}function l(b,E){let v=s[b.id];v===void 0&&(y(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));let A=E.program;n.updateUBOMapping(b,A);let w=t.render.frame;r[b.id]!==w&&(f(b),r[b.id]=w)}function h(b){let E=u();b.__bindingPointIndex=E;let v=i.createBuffer(),A=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let E=s[b.id],v=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,x=v.length;w<x;w++){let S=Array.isArray(v[w])?v[w]:[v[w]];for(let g=0,M=S.length;g<M;g++){let T=S[g];if(d(T,w,g,A)===!0){let C=T.__offset,L=Array.isArray(T.value)?T.value:[T.value],R=0;for(let I=0;I<L.length;I++){let H=L[I],z=_(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,C+R,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,R),R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,E,v,A){let w=b.value,x=E+"_"+v;if(A[x]===void 0)return typeof w=="number"||typeof w=="boolean"?A[x]=w:A[x]=w.clone(),!0;{let S=A[x];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return A[x]=w,!0}else if(S.equals(w)===!1)return S.copy(w),!0}return!1}function y(b){let E=b.uniforms,v=0,A=16;for(let x=0,S=E.length;x<S;x++){let g=Array.isArray(E[x])?E[x]:[E[x]];for(let M=0,T=g.length;M<T;M++){let C=g[M],L=Array.isArray(C.value)?C.value:[C.value];for(let R=0,I=L.length;R<I;R++){let H=L[R],z=_(H),U=v%A;U!==0&&A-U<z.boundary&&(v+=A-U),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,v+=z.storage}}}let w=v%A;return w>0&&(v+=A-w),b.__size=v,b.__cache={},this}function _(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){let E=b.target;E.removeEventListener("dispose",m);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Bo=class{constructor(t={}){let{canvas:e=r0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),y=new Int32Array(4),_=null,m=null,p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Os,this.toneMappingExposure=1;let E=this,v=!1,A=0,w=0,x=null,S=-1,g=null,M=new Be,T=new Be,C=null,L=new tt(0),R=0,I=e.width,H=e.height,z=1,U=null,N=null,G=new Be(0,0,I,H),X=new Be(0,0,I,H),Q=!1,q=new Fo,Z=!1,it=!1,_t=null,Et=new ve,kt=new ft,qt=new F,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return x===null?z:1}let V=n;function ct(P,W){for(let Y=0;Y<P.length;Y++){let K=P[Y],j=e.getContext(K,W);if(j!==null)return j}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vh}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",rt,!1),V===null){let W=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&W.shift(),V=ct(W,P),V===null)throw ct(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let et,ht,nt,Ht,gt,O,D,$,ot,at,st,zt,wt,At,Vt,Jt,lt,ee,Ft,Kt,Bt,Dt,jt,Me;function J(){et=new py(V),ht=new cy(V,et,t),et.init(ht),Dt=new q_(V,et,ht),nt=new W_(V,et,ht),Ht=new xy(V),gt=new L_,O=new X_(V,et,nt,gt,ht,Dt,Ht),D=new hy(E),$=new fy(E),ot=new b0(V,ht),jt=new oy(V,et,ot,ht),at=new my(V,ot,Ht,jt),st=new My(V,at,ot,Ht),Ft=new Ey(V,ht,O),Jt=new ly(gt),zt=new I_(E,D,$,et,ht,jt,Jt),wt=new $_(E,gt),At=new D_,Vt=new B_(et,ht),ee=new ry(E,D,$,nt,st,f,c),lt=new V_(E,st,ht),Me=new Z_(V,Ht,ht,nt),Kt=new ay(V,et,Ht,ht),Bt=new gy(V,et,Ht,ht),Ht.programs=zt.programs,E.capabilities=ht,E.extensions=et,E.properties=gt,E.renderLists=At,E.shadowMap=lt,E.state=nt,E.info=Ht}J();let Zt=new Kl(E,V);this.xr=Zt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let P=et.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=et.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(I,H,!1))},this.getSize=function(P){return P.set(I,H)},this.setSize=function(P,W,Y=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,H=W,e.width=Math.floor(P*z),e.height=Math.floor(W*z),Y===!0&&(e.style.width=P+"px",e.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(I*z,H*z).floor()},this.setDrawingBufferSize=function(P,W,Y){I=P,H=W,z=Y,e.width=Math.floor(P*Y),e.height=Math.floor(W*Y),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(G)},this.setViewport=function(P,W,Y,K){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,W,Y,K),nt.viewport(M.copy(G).multiplyScalar(z).floor())},this.getScissor=function(P){return P.copy(X)},this.setScissor=function(P,W,Y,K){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,W,Y,K),nt.scissor(T.copy(X).multiplyScalar(z).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(P){nt.setScissorTest(Q=P)},this.setOpaqueSort=function(P){U=P},this.setTransparentSort=function(P){N=P},this.getClearColor=function(P){return P.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(P=!0,W=!0,Y=!0){let K=0;if(P){let j=!1;if(x!==null){let Pt=x.texture.format;j=Pt===Yd||Pt===qd||Pt===Xd}if(j){let Pt=x.texture.type,Nt=Pt===Vi||Pt===Us||Pt===bh||Pt===lr||Pt===Vd||Pt===Wd,Xt=ee.getClearColor(),Qt=ee.getClearAlpha(),ce=Xt.r,ne=Xt.g,re=Xt.b;Nt?(d[0]=ce,d[1]=ne,d[2]=re,d[3]=Qt,V.clearBufferuiv(V.COLOR,0,d)):(y[0]=ce,y[1]=ne,y[2]=re,y[3]=Qt,V.clearBufferiv(V.COLOR,0,y))}else K|=V.COLOR_BUFFER_BIT}W&&(K|=V.DEPTH_BUFFER_BIT),Y&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),At.dispose(),Vt.dispose(),gt.dispose(),D.dispose(),$.dispose(),st.dispose(),jt.dispose(),Me.dispose(),zt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Ie),Zt.removeEventListener("sessionend",ue),_t&&(_t.dispose(),_t=null),hn.stop()};function Mt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let P=Ht.autoReset,W=lt.enabled,Y=lt.autoUpdate,K=lt.needsUpdate,j=lt.type;J(),Ht.autoReset=P,lt.enabled=W,lt.autoUpdate=Y,lt.needsUpdate=K,lt.type=j}function rt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function mt(P){let W=P.target;W.removeEventListener("dispose",mt),Ut(W)}function Ut(P){xt(P),gt.remove(P)}function xt(P){let W=gt.get(P).programs;W!==void 0&&(W.forEach(function(Y){zt.releaseProgram(Y)}),P.isShaderMaterial&&zt.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Y,K,j,Pt){W===null&&(W=St);let Nt=j.isMesh&&j.matrixWorld.determinant()<0,Xt=xe(P,W,Y,K,j);nt.setMaterial(K,Nt);let Qt=Y.index,ce=1;if(K.wireframe===!0){if(Qt=at.getWireframeAttribute(Y),Qt===void 0)return;ce=2}let ne=Y.drawRange,re=Y.attributes.position,rn=ne.start*ce,li=(ne.start+ne.count)*ce;Pt!==null&&(rn=Math.max(rn,Pt.start*ce),li=Math.min(li,(Pt.start+Pt.count)*ce)),Qt!==null?(rn=Math.max(rn,0),li=Math.min(li,Qt.count)):re!=null&&(rn=Math.max(rn,0),li=Math.min(li,re.count));let yn=li-rn;if(yn<0||yn===1/0)return;jt.setup(j,K,Xt,Y,Qt);let rs,We=Kt;if(Qt!==null&&(rs=ot.get(Qt),We=Bt,We.setIndex(rs)),j.isMesh)K.wireframe===!0?(nt.setLineWidth(K.wireframeLinewidth*Ot()),We.setMode(V.LINES)):We.setMode(V.TRIANGLES);else if(j.isLine){let de=K.linewidth;de===void 0&&(de=1),nt.setLineWidth(de*Ot()),j.isLineSegments?We.setMode(V.LINES):j.isLineLoop?We.setMode(V.LINE_LOOP):We.setMode(V.LINE_STRIP)}else j.isPoints?We.setMode(V.POINTS):j.isSprite&&We.setMode(V.TRIANGLES);if(j.isBatchedMesh)We.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)We.renderInstances(rn,yn,j.count);else if(Y.isInstancedBufferGeometry){let de=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,qc=Math.min(Y.instanceCount,de);We.renderInstances(rn,yn,qc)}else We.render(rn,yn)};function ye(P,W,Y){P.transparent===!0&&P.side===le&&P.forceSinglePass===!1?(P.side=kn,P.needsUpdate=!0,ni(P,W,Y),P.side=Fs,P.needsUpdate=!0,ni(P,W,Y),P.side=le):ni(P,W,Y)}this.compile=function(P,W,Y=null){Y===null&&(Y=P),m=Vt.get(Y),m.init(),b.push(m),Y.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),P!==Y&&P.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(E._useLegacyLights);let K=new Set;return P.traverse(function(j){let Pt=j.material;if(Pt)if(Array.isArray(Pt))for(let Nt=0;Nt<Pt.length;Nt++){let Xt=Pt[Nt];ye(Xt,Y,j),K.add(Xt)}else ye(Pt,Y,j),K.add(Pt)}),b.pop(),m=null,K},this.compileAsync=function(P,W,Y=null){let K=this.compile(P,W,Y);return new Promise(j=>{function Pt(){if(K.forEach(function(Nt){gt.get(Nt).currentProgram.isReady()&&K.delete(Nt)}),K.size===0){j(P);return}setTimeout(Pt,10)}et.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Ee=null;function He(P){Ee&&Ee(P)}function Ie(){hn.stop()}function ue(){hn.start()}let hn=new tf;hn.setAnimationLoop(He),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(P){Ee=P,Zt.setAnimationLoop(P),P===null?hn.stop():hn.start()},Zt.addEventListener("sessionstart",Ie),Zt.addEventListener("sessionend",ue),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(W),W=Zt.getCamera()),P.isScene===!0&&P.onBeforeRender(E,P,W,x),m=Vt.get(P,b.length),m.init(),b.push(m),Et.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Et),it=this.localClippingEnabled,Z=Jt.init(this.clippingPlanes,it),_=At.get(P,p.length),_.init(),p.push(_),Xn(P,W,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(U,N),this.info.render.frame++,Z===!0&&Jt.beginShadows();let Y=m.state.shadowsArray;if(lt.render(Y,P,W),Z===!0&&Jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(_,P),m.setupLights(E._useLegacyLights),W.isArrayCamera){let K=W.cameras;for(let j=0,Pt=K.length;j<Pt;j++){let Nt=K[j];Qs(_,P,Nt,Nt.viewport)}}else Qs(_,P,W);x!==null&&(O.updateMultisampleRenderTarget(x),O.updateRenderTargetMipmap(x)),P.isScene===!0&&P.onAfterRender(E,P,W),jt.resetDefaultState(),S=-1,g=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Xn(P,W,Y,K){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){K&&qt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Et);let Nt=st.update(P),Xt=P.material;Xt.visible&&_.push(P,Nt,Xt,Y,qt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){let Nt=st.update(P),Xt=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),qt.copy(P.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),qt.copy(Nt.boundingSphere.center)),qt.applyMatrix4(P.matrixWorld).applyMatrix4(Et)),Array.isArray(Xt)){let Qt=Nt.groups;for(let ce=0,ne=Qt.length;ce<ne;ce++){let re=Qt[ce],rn=Xt[re.materialIndex];rn&&rn.visible&&_.push(P,Nt,rn,Y,qt.z,re)}}else Xt.visible&&_.push(P,Nt,Xt,Y,qt.z,null)}}let Pt=P.children;for(let Nt=0,Xt=Pt.length;Nt<Xt;Nt++)Xn(Pt[Nt],W,Y,K)}function Qs(P,W,Y,K){let j=P.opaque,Pt=P.transmissive,Nt=P.transparent;m.setupLightsView(Y),Z===!0&&Jt.setGlobalState(E.clippingPlanes,Y),Pt.length>0&&je(j,Pt,W,Y),K&&nt.viewport(M.copy(K)),j.length>0&&Cs(j,W,Y),Pt.length>0&&Cs(Pt,W,Y),Nt.length>0&&Cs(Nt,W,Y),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function je(P,W,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let Pt=ht.isWebGL2;_t===null&&(_t=new ms(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")?No:Vi,minFilter:zo,samples:Pt?4:0})),E.getDrawingBufferSize(kt),Pt?_t.setSize(kt.x,kt.y):_t.setSize(Za(kt.x),Za(kt.y));let Nt=E.getRenderTarget();E.setRenderTarget(_t),E.getClearColor(L),R=E.getClearAlpha(),R<1&&E.setClearColor(16777215,.5),E.clear();let Xt=E.toneMapping;E.toneMapping=Os,Cs(P,Y,K),O.updateMultisampleRenderTarget(_t),O.updateRenderTargetMipmap(_t);let Qt=!1;for(let ce=0,ne=W.length;ce<ne;ce++){let re=W[ce],rn=re.object,li=re.geometry,yn=re.material,rs=re.group;if(yn.side===le&&rn.layers.test(K.layers)){let We=yn.side;yn.side=kn,yn.needsUpdate=!0,zn(rn,Y,K,li,yn,rs),yn.side=We,yn.needsUpdate=!0,Qt=!0}}Qt===!0&&(O.updateMultisampleRenderTarget(_t),O.updateRenderTargetMipmap(_t)),E.setRenderTarget(Nt),E.setClearColor(L,R),E.toneMapping=Xt}function Cs(P,W,Y){let K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Pt=P.length;j<Pt;j++){let Nt=P[j],Xt=Nt.object,Qt=Nt.geometry,ce=K===null?Nt.material:K,ne=Nt.group;Xt.layers.test(Y.layers)&&zn(Xt,W,Y,Qt,ce,ne)}}function zn(P,W,Y,K,j,Pt){P.onBeforeRender(E,W,Y,K,j,Pt),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(E,W,Y,K,P,Pt),j.transparent===!0&&j.side===le&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,E.renderBufferDirect(Y,W,K,j,P,Pt),j.side=Fs,j.needsUpdate=!0,E.renderBufferDirect(Y,W,K,j,P,Pt),j.side=le):E.renderBufferDirect(Y,W,K,j,P,Pt),P.onAfterRender(E,W,Y,K,j,Pt)}function ni(P,W,Y){W.isScene!==!0&&(W=St);let K=gt.get(P),j=m.state.lights,Pt=m.state.shadowsArray,Nt=j.state.version,Xt=zt.getParameters(P,j.state,Pt,W,Y),Qt=zt.getProgramCacheKey(Xt),ce=K.programs;K.environment=P.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(P.isMeshStandardMaterial?$:D).get(P.envMap||K.environment),ce===void 0&&(P.addEventListener("dispose",mt),ce=new Map,K.programs=ce);let ne=ce.get(Qt);if(ne!==void 0){if(K.currentProgram===ne&&K.lightsStateVersion===Nt)return ge(P,Xt),ne}else Xt.uniforms=zt.getUniforms(P),P.onBuild(Y,Xt,E),P.onBeforeCompile(Xt,E),ne=zt.acquireProgram(Xt,Qt),ce.set(Qt,ne),K.uniforms=Xt.uniforms;let re=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(re.clippingPlanes=Jt.uniform),ge(P,Xt),K.needsLights=Si(P),K.lightsStateVersion=Nt,K.needsLights&&(re.ambientLightColor.value=j.state.ambient,re.lightProbe.value=j.state.probe,re.directionalLights.value=j.state.directional,re.directionalLightShadows.value=j.state.directionalShadow,re.spotLights.value=j.state.spot,re.spotLightShadows.value=j.state.spotShadow,re.rectAreaLights.value=j.state.rectArea,re.ltc_1.value=j.state.rectAreaLTC1,re.ltc_2.value=j.state.rectAreaLTC2,re.pointLights.value=j.state.point,re.pointLightShadows.value=j.state.pointShadow,re.hemisphereLights.value=j.state.hemi,re.directionalShadowMap.value=j.state.directionalShadowMap,re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,re.spotShadowMap.value=j.state.spotShadowMap,re.spotLightMatrix.value=j.state.spotLightMatrix,re.spotLightMap.value=j.state.spotLightMap,re.pointShadowMap.value=j.state.pointShadowMap,re.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=ne,K.uniformsList=null,ne}function Ct(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=to.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function ge(P,W){let Y=gt.get(P);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function xe(P,W,Y,K,j){W.isScene!==!0&&(W=St),O.resetTextureUnits();let Pt=W.fog,Nt=K.isMeshStandardMaterial?W.environment:null,Xt=x===null?E.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:ps,Qt=(K.isMeshStandardMaterial?$:D).get(K.envMap||Nt),ce=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ne=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),re=!!Y.morphAttributes.position,rn=!!Y.morphAttributes.normal,li=!!Y.morphAttributes.color,yn=Os;K.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(yn=E.toneMapping);let rs=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,We=rs!==void 0?rs.length:0,de=gt.get(K),qc=m.state.lights;if(Z===!0&&(it===!0||P!==g)){let xi=P===g&&K.id===S;Jt.setState(K,P,xi)}let Qe=!1;K.version===de.__version?(de.needsLights&&de.lightsStateVersion!==qc.state.version||de.outputColorSpace!==Xt||j.isBatchedMesh&&de.batching===!1||!j.isBatchedMesh&&de.batching===!0||j.isInstancedMesh&&de.instancing===!1||!j.isInstancedMesh&&de.instancing===!0||j.isSkinnedMesh&&de.skinning===!1||!j.isSkinnedMesh&&de.skinning===!0||j.isInstancedMesh&&de.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&de.instancingColor===!1&&j.instanceColor!==null||de.envMap!==Qt||K.fog===!0&&de.fog!==Pt||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==Jt.numPlanes||de.numIntersection!==Jt.numIntersection)||de.vertexAlphas!==ce||de.vertexTangents!==ne||de.morphTargets!==re||de.morphNormals!==rn||de.morphColors!==li||de.toneMapping!==yn||ht.isWebGL2===!0&&de.morphTargetsCount!==We)&&(Qe=!0):(Qe=!0,de.__version=K.version);let tr=de.currentProgram;Qe===!0&&(tr=ni(K,W,j));let ru=!1,Mo=!1,Yc=!1,Nn=tr.getUniforms(),er=de.uniforms;if(nt.useProgram(tr.program)&&(ru=!0,Mo=!0,Yc=!0),K.id!==S&&(S=K.id,Mo=!0),ru||g!==P){Nn.setValue(V,"projectionMatrix",P.projectionMatrix),Nn.setValue(V,"viewMatrix",P.matrixWorldInverse);let xi=Nn.map.cameraPosition;xi!==void 0&&xi.setValue(V,qt.setFromMatrixPosition(P.matrixWorld)),ht.logarithmicDepthBuffer&&Nn.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Nn.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),g!==P&&(g=P,Mo=!0,Yc=!0)}if(j.isSkinnedMesh){Nn.setOptional(V,j,"bindMatrix"),Nn.setOptional(V,j,"bindMatrixInverse");let xi=j.skeleton;xi&&(ht.floatVertexTextures?(xi.boneTexture===null&&xi.computeBoneTexture(),Nn.setValue(V,"boneTexture",xi.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Nn.setOptional(V,j,"batchingTexture"),Nn.setValue(V,"batchingTexture",j._matricesTexture,O));let $c=Y.morphAttributes;if(($c.position!==void 0||$c.normal!==void 0||$c.color!==void 0&&ht.isWebGL2===!0)&&Ft.update(j,Y,tr),(Mo||de.receiveShadow!==j.receiveShadow)&&(de.receiveShadow=j.receiveShadow,Nn.setValue(V,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(er.envMap.value=Qt,er.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),Mo&&(Nn.setValue(V,"toneMappingExposure",E.toneMappingExposure),de.needsLights&&Lt(er,Yc),Pt&&K.fog===!0&&wt.refreshFogUniforms(er,Pt),wt.refreshMaterialUniforms(er,K,z,H,_t),to.upload(V,Ct(de),er,O)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(to.upload(V,Ct(de),er,O),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Nn.setValue(V,"center",j.center),Nn.setValue(V,"modelViewMatrix",j.modelViewMatrix),Nn.setValue(V,"normalMatrix",j.normalMatrix),Nn.setValue(V,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let xi=K.uniformsGroups;for(let Zc=0,Yp=xi.length;Zc<Yp;Zc++)if(ht.isWebGL2){let ou=xi[Zc];Me.update(ou,tr),Me.bind(ou,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function Lt(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Si(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(P,W,Y){gt.get(P.texture).__webglTexture=W,gt.get(P.depthTexture).__webglTexture=Y;let K=gt.get(P);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){let Y=gt.get(P);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Y=0){x=P,A=W,w=Y;let K=!0,j=null,Pt=!1,Nt=!1;if(P){let Qt=gt.get(P);Qt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(V.FRAMEBUFFER,null),K=!1):Qt.__webglFramebuffer===void 0?O.setupRenderTarget(P):Qt.__hasExternalTextures&&O.rebindTextures(P,gt.get(P.texture).__webglTexture,gt.get(P.depthTexture).__webglTexture);let ce=P.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Nt=!0);let ne=gt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?j=ne[W][Y]:j=ne[W],Pt=!0):ht.isWebGL2&&P.samples>0&&O.useMultisampledRTT(P)===!1?j=gt.get(P).__webglMultisampledFramebuffer:Array.isArray(ne)?j=ne[Y]:j=ne,M.copy(P.viewport),T.copy(P.scissor),C=P.scissorTest}else M.copy(G).multiplyScalar(z).floor(),T.copy(X).multiplyScalar(z).floor(),C=Q;if(nt.bindFramebuffer(V.FRAMEBUFFER,j)&&ht.drawBuffers&&K&&nt.drawBuffers(P,j),nt.viewport(M),nt.scissor(T),nt.setScissorTest(C),Pt){let Qt=gt.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Qt.__webglTexture,Y)}else if(Nt){let Qt=gt.get(P.texture),ce=W||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qt.__webglTexture,Y||0,ce)}S=-1},this.readRenderTargetPixels=function(P,W,Y,K,j,Pt,Nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=gt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Xt=Xt[Nt]),Xt){nt.bindFramebuffer(V.FRAMEBUFFER,Xt);try{let Qt=P.texture,ce=Qt.format,ne=Qt.type;if(ce!==Ii&&Dt.convert(ce)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let re=ne===No&&(et.has("EXT_color_buffer_half_float")||ht.isWebGL2&&et.has("EXT_color_buffer_float"));if(ne!==Vi&&Dt.convert(ne)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ne===zs&&(ht.isWebGL2||et.has("OES_texture_float")||et.has("WEBGL_color_buffer_float")))&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-K&&Y>=0&&Y<=P.height-j&&V.readPixels(W,Y,K,j,Dt.convert(ce),Dt.convert(ne),Pt)}finally{let Qt=x!==null?gt.get(x).__webglFramebuffer:null;nt.bindFramebuffer(V.FRAMEBUFFER,Qt)}}},this.copyFramebufferToTexture=function(P,W,Y=0){let K=Math.pow(2,-Y),j=Math.floor(W.image.width*K),Pt=Math.floor(W.image.height*K);O.setTexture2D(W,0),V.copyTexSubImage2D(V.TEXTURE_2D,Y,0,0,P.x,P.y,j,Pt),nt.unbindTexture()},this.copyTextureToTexture=function(P,W,Y,K=0){let j=W.image.width,Pt=W.image.height,Nt=Dt.convert(Y.format),Xt=Dt.convert(Y.type);O.setTexture2D(Y,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment),W.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,K,P.x,P.y,j,Pt,Nt,Xt,W.image.data):W.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,K,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Nt,W.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,K,P.x,P.y,Nt,Xt,W.image),K===0&&Y.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Y,K,j=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Pt=P.max.x-P.min.x+1,Nt=P.max.y-P.min.y+1,Xt=P.max.z-P.min.z+1,Qt=Dt.convert(K.format),ce=Dt.convert(K.type),ne;if(K.isData3DTexture)O.setTexture3D(K,0),ne=V.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)O.setTexture2DArray(K,0),ne=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);let re=V.getParameter(V.UNPACK_ROW_LENGTH),rn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),li=V.getParameter(V.UNPACK_SKIP_PIXELS),yn=V.getParameter(V.UNPACK_SKIP_ROWS),rs=V.getParameter(V.UNPACK_SKIP_IMAGES),We=Y.isCompressedTexture?Y.mipmaps[j]:Y.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,We.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,We.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,P.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,P.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,P.min.z),Y.isDataTexture||Y.isData3DTexture?V.texSubImage3D(ne,j,W.x,W.y,W.z,Pt,Nt,Xt,Qt,ce,We.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ne,j,W.x,W.y,W.z,Pt,Nt,Xt,Qt,We.data)):V.texSubImage3D(ne,j,W.x,W.y,W.z,Pt,Nt,Xt,Qt,ce,We),V.pixelStorei(V.UNPACK_ROW_LENGTH,re),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,rn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,li),V.pixelStorei(V.UNPACK_SKIP_ROWS,yn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rs),j===0&&K.generateMipmaps&&V.generateMipmap(ne),nt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?O.setTextureCube(P,0):P.isData3DTexture?O.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?O.setTexture2DArray(P,0):O.setTexture2D(P,0),nt.unbindTexture()},this.resetState=function(){A=0,w=0,x=null,nt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ah?"display-p3":"srgb",e.unpackColorSpace=Re.workingColorSpace===Sc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?ur:Zd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ur?Ne:ps}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},jl=class extends Bo{};jl.prototype.isWebGL1Renderer=!0;var hc=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},uc=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var dc=class extends di{constructor(t=null,e=1,n=1,s,r,o,a,c,l=An,h=An,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fc=class extends pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qr=new ve,Ad=new ve,Ua=[],Cd=new he,J_=new ve,So=new B,Ro=new Gs,pc=class extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,J_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new he),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),Cd.copy(t.boundingBox).applyMatrix4(qr),this.boundingBox.union(Cd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qr),Ro.copy(t.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(So.geometry=this.geometry,So.material=this.material,So.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(n),t.ray.intersectsSphere(Ro)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qr),Ad.multiplyMatrices(n,qr),So.matrixWorld=Ad,So.raycast(t,Ua);for(let o=0,a=Ua.length;o<a;o++){let c=Ua[o];c.instanceId=r,c.object=this,e.push(c)}Ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var qe=class extends gs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pd=new ve,Ql=new tc,za=new Gs,Na=new F,tn=class extends Mn{constructor(t=new ae,e=new qe){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=r,t.ray.intersectsSphere(za)===!1)return;Pd.copy(s).invert(),Ql.copy(t.ray).applyMatrix4(Pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let y=f,_=d;y<_;y++){let m=l.getX(y);Na.fromBufferAttribute(u,m),Id(Na,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let y=f,_=d;y<_;y++)Na.fromBufferAttribute(u,y),Id(Na,y,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Id(i,t,e,n,s,r,o){let a=Ql.distanceSqToPoint(i);if(a<e){let c=new F;Ql.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var Ei=class extends di{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ft:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,s=[],r=[],o=[],a=new F,c=new ve;for(let d=0;d<=t;d++){let y=d/t;s[d]=this.getTangentAt(y,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(En(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,y))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(En(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let y=1;y<=t;y++)r[y].applyMatrix4(c.makeRotationAxis(s[y],d*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ko=class extends Mi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new ft,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},th=class extends ko{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Oa=new F,bl=new Lh,Sl=new Lh,Rl=new Lh,eh=class extends Mi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Oa.subVectors(s[0],s[1]).add(s[0]),l=Oa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,y=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),y<1e-4&&(y=_),m<1e-4&&(m=_),bl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,y,_,m),Sl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,y,_,m),Rl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,y,_,m)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Sl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Rl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(bl.calc(c),Sl.calc(c),Rl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ld(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function K_(i,t){let e=1-i;return e*e*t}function j_(i,t){return 2*(1-i)*i*t}function Q_(i,t){return i*i*t}function Ho(i,t,e,n){return K_(i,t)+j_(i,e)+Q_(i,n)}function tE(i,t){let e=1-i;return e*e*e*t}function eE(i,t){let e=1-i;return 3*e*e*i*t}function nE(i,t){return 3*(1-i)*i*i*t}function iE(i,t){return i*i*i*t}function Do(i,t,e,n,s){return tE(i,t)+eE(i,e)+nE(i,n)+iE(i,s)}var mc=class extends Mi{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(t,s.x,r.x,o.x,a.x),Do(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nh=class extends Mi{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(t,s.x,r.x,o.x,a.x),Do(t,s.y,r.y,o.y,a.y),Do(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gc=class extends Mi{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ih=class extends Mi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xc=class extends Mi{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ho(t,s.x,r.x,o.x),Ho(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sh=class extends Mi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ho(t,s.x,r.x,o.x),Ho(t,s.y,r.y,o.y),Ho(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yc=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ld(a,c.x,l.x,h.x,u.x),Ld(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},rh=Object.freeze({__proto__:null,ArcCurve:th,CatmullRomCurve3:eh,CubicBezierCurve:mc,CubicBezierCurve3:nh,EllipseCurve:ko,LineCurve:gc,LineCurve3:ih,QuadraticBezierCurve:xc,QuadraticBezierCurve3:sh,SplineCurve:yc}),oh=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new rh[s.type]().fromJSON(s))}return this}},Go=class extends oh{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new gc(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new xc(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new mc(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new yc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new ko(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ah=class i extends ae{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=En(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new F,f=new ft,d=new F,y=new F,_=new F,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(y)}for(let b=0;b<=e;b++){let E=n+b*h*s,v=Math.sin(E),A=Math.cos(E);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*A,o.push(u.x,u.y,u.z),f.x=b/e,f.y=w/(t.length-1),a.push(f.x,f.y);let x=c[3*w+0]*v,S=c[3*w+1],g=c[3*w+0]*A;l.push(x,S,g)}}for(let b=0;b<e;b++)for(let E=0;E<t.length-1;E++){let v=E+b*t.length,A=v,w=v+t.length,x=v+t.length+1,S=v+1;r.push(A,w,S),r.push(x,S,w)}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},_c=class i extends ah{constructor(t=1,e=1,n=4,s=8){let r=new Go;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},en=class i extends ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new F,h=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Rt=class i extends ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],y=0,_=[],m=n/2,p=0;b(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(d,2));function b(){let v=new F,A=new F,w=0,x=(e-t)/n;for(let S=0;S<=r;S++){let g=[],M=S/r,T=M*(e-t)+t;for(let C=0;C<=s;C++){let L=C/s,R=L*c+a,I=Math.sin(R),H=Math.cos(R);A.x=T*I,A.y=-M*n+m,A.z=T*H,u.push(A.x,A.y,A.z),v.set(I,x,H).normalize(),f.push(v.x,v.y,v.z),d.push(L,1-M),g.push(y++)}_.push(g)}for(let S=0;S<s;S++)for(let g=0;g<r;g++){let M=_[g][S],T=_[g+1][S],C=_[g+1][S+1],L=_[g][S+1];h.push(M,T,L),h.push(T,C,L),w+=6}l.addGroup(p,w,0),p+=w}function E(v){let A=y,w=new ft,x=new F,S=0,g=v===!0?t:e,M=v===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),y++;let T=y;for(let C=0;C<=s;C++){let R=C/s*c+a,I=Math.cos(R),H=Math.sin(R);x.x=g*H,x.y=m*M,x.z=g*I,u.push(x.x,x.y,x.z),f.push(0,M,0),w.x=I*.5+.5,w.y=H*.5*M+.5,d.push(w.x,w.y),y++}for(let C=0;C<s;C++){let L=A+C,R=T+C;v===!0?h.push(R,R+1,L):h.push(R+1,R,L),S+=3}l.addGroup(p,S,v===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yt=class i extends Rt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vo=class i extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let E=new F,v=new F,A=new F;for(let w=0;w<e.length;w+=3)d(e[w+0],E),d(e[w+1],v),d(e[w+2],A),c(E,v,A,b)}function c(b,E,v,A){let w=A+1,x=[];for(let S=0;S<=w;S++){x[S]=[];let g=b.clone().lerp(v,S/w),M=E.clone().lerp(v,S/w),T=w-S;for(let C=0;C<=T;C++)C===0&&S===w?x[S][C]=g:x[S][C]=g.clone().lerp(M,C/T)}for(let S=0;S<w;S++)for(let g=0;g<2*(w-S)-1;g++){let M=Math.floor(g/2);g%2===0?(f(x[S][M+1]),f(x[S+1][M]),f(x[S][M])):(f(x[S][M+1]),f(x[S+1][M+1]),f(x[S+1][M]))}}function l(b){let E=new F;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(b),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let b=new F;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];let v=m(b)/2/Math.PI+.5,A=p(b)/Math.PI+.5;o.push(v,1-A)}y(),u()}function u(){for(let b=0;b<o.length;b+=6){let E=o[b+0],v=o[b+2],A=o[b+4],w=Math.max(E,v,A),x=Math.min(E,v,A);w>.9&&x<.1&&(E<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,E){let v=b*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function y(){let b=new F,E=new F,v=new F,A=new F,w=new ft,x=new ft,S=new ft;for(let g=0,M=0;g<r.length;g+=9,M+=6){b.set(r[g+0],r[g+1],r[g+2]),E.set(r[g+3],r[g+4],r[g+5]),v.set(r[g+6],r[g+7],r[g+8]),w.set(o[M+0],o[M+1]),x.set(o[M+2],o[M+3]),S.set(o[M+4],o[M+5]),A.copy(b).add(E).add(v).divideScalar(3);let T=m(A);_(w,M+0,b,T),_(x,M+2,E,T),_(S,M+4,v,T)}}function _(b,E,v,A){A<0&&b.x===1&&(o[E]=b.x-1),v.x===0&&v.z===0&&(o[E]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Jn=class i extends Vo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Vs=class extends Go{constructor(t){super(t),this.uuid=gr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Go().fromJSON(s))}return this}},sE={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=af(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=lE(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let y=e;y<s;y+=e)u=i[y],f=i[y+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Wo(r,o,e,a,c,d,0),o}};function af(i,t,e,n,s){let r,o;if(s===EE(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Hd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Hd(r,i[r],i[r+1],o);return o&&Ac(o,o.next)&&(qo(o),o=o.next),o}function dr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ac(e,e.next)||Xe(e.prev,e,e.next)===0)){if(qo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&pE(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?oE(i,n,s,r):rE(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),qo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=aE(dr(i),t,e),Wo(i,t,e,n,s,r,2)):o===2&&cE(i,t,e,n,s,r):Wo(dr(i),t,e,n,s,r,1);break}}}function rE(i){let t=i.prev,e=i,n=i.next;if(Xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,y=n.next;for(;y!==t;){if(y.x>=h&&y.x<=f&&y.y>=u&&y.y<=d&&Kr(s,a,r,c,o,l,y.x,y.y)&&Xe(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function oE(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Xe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,y=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=ch(d,y,t,e,n),b=ch(_,m,t,e,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=p&&v&&v.z<=b;){if(E.x>=d&&E.x<=_&&E.y>=y&&E.y<=m&&E!==s&&E!==o&&Kr(a,h,c,u,l,f,E.x,E.y)&&Xe(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=_&&v.y>=y&&v.y<=m&&v!==s&&v!==o&&Kr(a,h,c,u,l,f,v.x,v.y)&&Xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=_&&E.y>=y&&E.y<=m&&E!==s&&E!==o&&Kr(a,h,c,u,l,f,E.x,E.y)&&Xe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=y&&v.y<=m&&v!==s&&v!==o&&Kr(a,h,c,u,l,f,v.x,v.y)&&Xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function aE(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ac(s,r)&&cf(s,n,n.next,r)&&Xo(s,r)&&Xo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),qo(n),qo(n.next),n=i=r),n=n.next}while(n!==i);return dr(n)}function cE(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xE(o,a)){let c=lf(o,a);o=dr(o,o.next),c=dr(c,c.next),Wo(o,t,e,n,s,r,0),Wo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function lE(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=af(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(gE(l));for(s.sort(hE),r=0;r<s.length;r++)e=uE(s[r],e);return e}function hE(i,t){return i.x-t.x}function uE(i,t){let e=dE(i,t);if(!e)return t;let n=lf(e,i);return dr(n,n.next),dr(e,e.next)}function dE(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Kr(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Xo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&fE(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function fE(i,t){return Xe(i.prev,i,t.prev)<0&&Xe(t.next,i,i.next)<0}function pE(i,t,e,n){let s=i;do s.z===0&&(s.z=ch(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mE(s)}function mE(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ch(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gE(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Kr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function xE(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yE(i,t)&&(Xo(i,t)&&Xo(t,i)&&_E(i,t)&&(Xe(i.prev,i,t.prev)||Xe(i,t.prev,t))||Ac(i,t)&&Xe(i.prev,i,i.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ac(i,t){return i.x===t.x&&i.y===t.y}function cf(i,t,e,n){let s=Ba(Xe(i,t,e)),r=Ba(Xe(i,t,n)),o=Ba(Xe(e,n,i)),a=Ba(Xe(e,n,t));return!!(s!==r&&o!==a||s===0&&Fa(i,e,t)||r===0&&Fa(i,n,t)||o===0&&Fa(e,i,n)||a===0&&Fa(e,t,n))}function Fa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ba(i){return i>0?1:i<0?-1:0}function yE(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&cf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xo(i,t){return Xe(i.prev,i,i.next)<0?Xe(i,t,i.next)>=0&&Xe(i,i.prev,t)>=0:Xe(i,t,i.prev)<0||Xe(i,i.next,t)<0}function _E(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function lf(i,t){let e=new lh(i.i,i.x,i.y),n=new lh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hd(i,t,e,n){let s=new lh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function EE(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Uo=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Dd(t),Ud(n,t);let o=t.length;e.forEach(Dd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ud(n,e[c]);let a=sE.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Dd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ud(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var fr=class i extends ae{constructor(t=new Vs([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:ME,E,v=!1,A,w,x,S;p&&(E=p.getSpacedPoints(h),v=!0,f=!1,A=p.computeFrenetFrames(h,!1),w=new F,x=new F,S=new F),f||(m=0,d=0,y=0,_=0);let g=a.extractPoints(l),M=g.shape,T=g.holes;if(!Uo.isClockWise(M)){M=M.reverse();for(let V=0,ct=T.length;V<ct;V++){let et=T[V];Uo.isClockWise(et)&&(T[V]=et.reverse())}}let L=Uo.triangulateShape(M,T),R=M;for(let V=0,ct=T.length;V<ct;V++){let et=T[V];M=M.concat(et)}function I(V,ct,et){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(ct,et)}let H=M.length,z=L.length;function U(V,ct,et){let ht,nt,Ht,gt=V.x-ct.x,O=V.y-ct.y,D=et.x-V.x,$=et.y-V.y,ot=gt*gt+O*O,at=gt*$-O*D;if(Math.abs(at)>Number.EPSILON){let st=Math.sqrt(ot),zt=Math.sqrt(D*D+$*$),wt=ct.x-O/st,At=ct.y+gt/st,Vt=et.x-$/zt,Jt=et.y+D/zt,lt=((Vt-wt)*$-(Jt-At)*D)/(gt*$-O*D);ht=wt+gt*lt-V.x,nt=At+O*lt-V.y;let ee=ht*ht+nt*nt;if(ee<=2)return new ft(ht,nt);Ht=Math.sqrt(ee/2)}else{let st=!1;gt>Number.EPSILON?D>Number.EPSILON&&(st=!0):gt<-Number.EPSILON?D<-Number.EPSILON&&(st=!0):Math.sign(O)===Math.sign($)&&(st=!0),st?(ht=-O,nt=gt,Ht=Math.sqrt(ot)):(ht=gt,nt=O,Ht=Math.sqrt(ot/2))}return new ft(ht/Ht,nt/Ht)}let N=[];for(let V=0,ct=R.length,et=ct-1,ht=V+1;V<ct;V++,et++,ht++)et===ct&&(et=0),ht===ct&&(ht=0),N[V]=U(R[V],R[et],R[ht]);let G=[],X,Q=N.concat();for(let V=0,ct=T.length;V<ct;V++){let et=T[V];X=[];for(let ht=0,nt=et.length,Ht=nt-1,gt=ht+1;ht<nt;ht++,Ht++,gt++)Ht===nt&&(Ht=0),gt===nt&&(gt=0),X[ht]=U(et[ht],et[Ht],et[gt]);G.push(X),Q=Q.concat(X)}for(let V=0;V<m;V++){let ct=V/m,et=d*Math.cos(ct*Math.PI/2),ht=y*Math.sin(ct*Math.PI/2)+_;for(let nt=0,Ht=R.length;nt<Ht;nt++){let gt=I(R[nt],N[nt],ht);Et(gt.x,gt.y,-et)}for(let nt=0,Ht=T.length;nt<Ht;nt++){let gt=T[nt];X=G[nt];for(let O=0,D=gt.length;O<D;O++){let $=I(gt[O],X[O],ht);Et($.x,$.y,-et)}}}let q=y+_;for(let V=0;V<H;V++){let ct=f?I(M[V],Q[V],q):M[V];v?(x.copy(A.normals[0]).multiplyScalar(ct.x),w.copy(A.binormals[0]).multiplyScalar(ct.y),S.copy(E[0]).add(x).add(w),Et(S.x,S.y,S.z)):Et(ct.x,ct.y,0)}for(let V=1;V<=h;V++)for(let ct=0;ct<H;ct++){let et=f?I(M[ct],Q[ct],q):M[ct];v?(x.copy(A.normals[V]).multiplyScalar(et.x),w.copy(A.binormals[V]).multiplyScalar(et.y),S.copy(E[V]).add(x).add(w),Et(S.x,S.y,S.z)):Et(et.x,et.y,u/h*V)}for(let V=m-1;V>=0;V--){let ct=V/m,et=d*Math.cos(ct*Math.PI/2),ht=y*Math.sin(ct*Math.PI/2)+_;for(let nt=0,Ht=R.length;nt<Ht;nt++){let gt=I(R[nt],N[nt],ht);Et(gt.x,gt.y,u+et)}for(let nt=0,Ht=T.length;nt<Ht;nt++){let gt=T[nt];X=G[nt];for(let O=0,D=gt.length;O<D;O++){let $=I(gt[O],X[O],ht);v?Et($.x,$.y+E[h-1].y,E[h-1].x+et):Et($.x,$.y,u+et)}}}Z(),it();function Z(){let V=s.length/3;if(f){let ct=0,et=H*ct;for(let ht=0;ht<z;ht++){let nt=L[ht];kt(nt[2]+et,nt[1]+et,nt[0]+et)}ct=h+m*2,et=H*ct;for(let ht=0;ht<z;ht++){let nt=L[ht];kt(nt[0]+et,nt[1]+et,nt[2]+et)}}else{for(let ct=0;ct<z;ct++){let et=L[ct];kt(et[2],et[1],et[0])}for(let ct=0;ct<z;ct++){let et=L[ct];kt(et[0]+H*h,et[1]+H*h,et[2]+H*h)}}n.addGroup(V,s.length/3-V,0)}function it(){let V=s.length/3,ct=0;_t(R,ct),ct+=R.length;for(let et=0,ht=T.length;et<ht;et++){let nt=T[et];_t(nt,ct),ct+=nt.length}n.addGroup(V,s.length/3-V,1)}function _t(V,ct){let et=V.length;for(;--et>=0;){let ht=et,nt=et-1;nt<0&&(nt=V.length-1);for(let Ht=0,gt=h+m*2;Ht<gt;Ht++){let O=H*Ht,D=H*(Ht+1),$=ct+ht+O,ot=ct+nt+O,at=ct+nt+D,st=ct+ht+D;qt($,ot,at,st)}}}function Et(V,ct,et){c.push(V),c.push(ct),c.push(et)}function kt(V,ct,et){St(V),St(ct),St(et);let ht=s.length/3,nt=b.generateTopUV(n,s,ht-3,ht-2,ht-1);Ot(nt[0]),Ot(nt[1]),Ot(nt[2])}function qt(V,ct,et,ht){St(V),St(ct),St(ht),St(ct),St(et),St(ht);let nt=s.length/3,Ht=b.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);Ot(Ht[0]),Ot(Ht[1]),Ot(Ht[3]),Ot(Ht[1]),Ot(Ht[2]),Ot(Ht[3])}function St(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function Ot(V){r.push(V.x),r.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vE(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rh[s.type]().fromJSON(s)),new i(n,t.options)}},ME={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ft(r,o),new ft(a,c),new ft(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],y=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-u),new ft(f,1-y),new ft(_,1-p)]:[new ft(a,1-c),new ft(h,1-u),new ft(d,1-y),new ft(m,1-p)]}};function vE(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Cn=class i extends Vo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},on=class i extends Vo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Li=class i extends ae{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new F,y=new ft;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),y.x=(d.x/e+1)/2,y.y=(d.y/e+1)/2,h.push(y.x,y.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let b=p+m,E=b,v=b+n+1,A=b+n+2,w=b+1;a.push(E,v,w),a.push(v,A,w)}}this.setIndex(a),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ie=class i extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new F,f=new F,d=[],y=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],E=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){let w=A/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+E*a),y.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-E),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let E=h[p][b+1],v=h[p][b],A=h[p+1][b],w=h[p+1][b+1];(p!==0||o>0)&&d.push(E,v,w),(p!==n-1||c<Math.PI)&&d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new me(y,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pn=class i extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new F,u=new F,f=new F;for(let d=0;d<=n;d++)for(let y=0;y<=s;y++){let _=y/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(y/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let y=1;y<=s;y++){let _=(s+1)*d+y-1,m=(s+1)*(d-1)+y-1,p=(s+1)*(d-1)+y,b=(s+1)*d+y;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var bt=class extends gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ec=class extends gs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ka(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ro=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hh=class extends ro{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fu:r=t,a=2*e-n;break;case Bu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fu:o=t,c=2*n-e;break;case Bu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,y=(n-e)/(s-e),_=y*y,m=_*y,p=-f*m+2*f*_-f*y,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*y+1,E=(-1-d)*m+(1.5+d)*_+.5*y,v=d*m-d*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+b*o[l+A]+E*o[c+A]+v*o[u+A];return r}},uh=class extends ro{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},dh=class extends ro{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ka(e,this.TimeBufferType),this.values=ka(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ka(t.times,Array),values:ka(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Va:e=this.InterpolantFactoryMethodDiscrete;break;case Wa:e=this.InterpolantFactoryMethodLinear;break;case nl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&wE(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===nl,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let y=0;y!==n;++y){let _=e[u+y];if(_!==e[f+y]||_!==e[d+y]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=Wa;var pr=class extends Hi{};pr.prototype.ValueTypeName="bool";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Va;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var fh=class extends Hi{};fh.prototype.ValueTypeName="color";var ph=class extends Hi{};ph.prototype.ValueTypeName="number";var mh=class extends ro{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ks.slerpFlat(r,0,o,l-a,o,l,c);return r}},Yo=class extends Hi{InterpolantFactoryMethodLinear(t){return new mh(this.times,this.values,this.getValueSize(),t)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.DefaultInterpolation=Wa;Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Hi{};mr.prototype.ValueTypeName="string";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=Va;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends Hi{};gh.prototype.ValueTypeName="vector";var xh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],y=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return y}return null}}},TE=new xh,yh=class{constructor(t){this.manager=t!==void 0?t:TE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var $o=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Mc=class extends $o{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Al=new ve,zd=new F,Nd=new F,vc=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zd.setFromMatrixPosition(t.matrixWorld),e.position.copy(zd),Nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nd),e.updateMatrixWorld(),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Od=new ve,Ao=new F,Cl=new F,_h=class extends vc{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ao.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ao),Cl.copy(n.position),Cl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cl),n.updateMatrixWorld(),s.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od)}},Ye=class extends $o{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Eh=class extends vc{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wc=class extends $o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Eh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Tc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Fd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Fd(){return(typeof performance>"u"?Date:performance).now()}var Hh="\\[\\]\\.:\\/",bE=new RegExp("["+Hh+"]","g"),Dh="[^"+Hh+"]",SE="[^"+Hh.replace("\\.","")+"]",RE=/((?:WC+[\/:])*)/.source.replace("WC",Dh),AE=/(WCOD+)?/.source.replace("WCOD",SE),CE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),PE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),IE=new RegExp("^"+RE+AE+CE+PE+"$"),LE=["material","materials","bones","map"],Mh=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bE,"")}static parseTrackName(t){let e=IE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);LE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Mh;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vh);var Kn=0,Ko=-9,Vn=1340,ii=4,Cc=64,Uh=i=>Math.min(1,Math.max(0,i)),te=(i,t,e)=>i+(t-i)*e,Tt=(i,t,e)=>{let n=Uh((e-i)/(t-i));return n*n*(3-2*n)};function co(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Pc(i,t){let e=Math.imul(i,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function Jo(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Pc(e,n),l=Pc(e+1,n),h=Pc(e,n+1),u=Pc(e+1,n+1);return te(te(c,l,o),te(h,u,o),a)}function Wt(i,t){return Jo(i,t)*.55+Jo(i*2.1+7,t*2.1+3)*.3+Jo(i*4.3+1,t*4.3+9)*.15}function xr(i,t,e,n,s,r){let o=s-e,a=r-n,c=Uh(((i-e)*o+(t-n)*a)/(o*o+a*a));return Math.hypot(i-(e+o*c),t-(n+a*c))}function lo(i,t,e){let n=1/0;for(let s=0;s<e.length-1;s++)n=Math.min(n,xr(i,t,e[s][0],e[s][1],e[s+1][0],e[s+1][1]));return n}var ao=32,hf=1e9,uf=new WeakMap;function HE(i){let t=uf.get(i);if(t)return t;t=new Map;for(let e of i)for(let n=0;n<e.length-1;n++){let[s,r]=e[n],[o,a]=e[n+1],c=[s,r,o,a],l=Math.floor(Math.min(s,o)/ao)-1,h=Math.floor(Math.max(s,o)/ao)+1,u=Math.floor(Math.min(r,a)/ao)-1,f=Math.floor(Math.max(r,a)/ao)+1;for(let d=l;d<=h;d++)for(let y=u;y<=f;y++){let _=d*1e5+y;t.has(_)||t.set(_,[]),t.get(_).push(c)}}return uf.set(i,t),t}var Ae=(i,t,e)=>{let n=HE(e).get(Math.floor(i/ao)*1e5+Math.floor(t/ao));if(!n)return hf;let s=hf;for(let[r,o,a,c]of n)s=Math.min(s,xr(i,t,r,o,a,c));return s},xs=(i,t,e,n,s,r)=>r*Tt(s,0,Math.hypot(i-e,t-n));function Wn(i,[t,e,n,s,r,o]){return a=>i+t*Math.sin(3*a+e)+n*Math.sin(5*a+s)+r*Math.sin(7*a+o)}function df(i){let t=i.map(d=>{let y=Math.ceil(d.maxR/ii)*ii,_=y*2/ii,m=_+1,p=d.cx-y,b=d.cz-y,E=new Float32Array(m*m);for(let v=0;v<m;v++)for(let A=0;A<m;A++)E[v*m+A]=d.height(p+A*ii,b+v*ii);return{island:d,half:y,segs:_,N:m,x0:p,z0:b,heights:E}});function e(d,y){for(let _ of t){let m=(d-_.x0)/ii,p=(y-_.z0)/ii;if(m<0||p<0||m>=_.segs||p>=_.segs)continue;let b=Math.floor(m),E=Math.floor(p),v=m-b,A=p-E,w=E*_.N+b,x=_.heights;return te(te(x[w],x[w+1],v),te(x[w+_.N],x[w+_.N+1],v),A)}return Ko}function n(d,y){let _=ii;return Math.hypot(e(d+_,y)-e(d-_,y),e(d,y+_)-e(d,y-_))/(2*_)}function s(d,y){for(let _ of t){let m=d-_.island.cx,p=y-_.island.cz;if(Math.hypot(m,p)<_.island.edge(Math.atan2(p,m))*1.02)return _.island}return null}let r=new yt,o=new tt,a=new bt({vertexColors:!0,flatShading:!0,roughness:.95});for(let d of t){let y=new Float32Array(d.N*d.N*3);d.colors=y;for(let _=0;_<d.N;_++)for(let m=0;m<d.N;m++){let p=d.x0+m*ii,b=d.z0+_*ii,E=_*d.N+m;d.island.color(p,b,d.heights[E],n(p,b),o),y[E*3]=o.r,y[E*3+1]=o.g,y[E*3+2]=o.b}for(let _=0;_<d.segs;_+=Cc)for(let m=0;m<d.segs;m+=Cc){let p=Math.min(Cc,d.segs-m),b=Math.min(Cc,d.segs-_),E=!1;for(let g=0;g<=b&&!E;g++)for(let M=0;M<=p;M++)if(d.heights[(_+g)*d.N+m+M]>Ko+.5){E=!0;break}if(!E)continue;let v=new Float32Array((p+1)*(b+1)*3),A=new Float32Array((p+1)*(b+1)*3);for(let g=0;g<=b;g++)for(let M=0;M<=p;M++){let T=(_+g)*d.N+m+M,C=(g*(p+1)+M)*3;v[C]=d.x0+(m+M)*ii,v[C+1]=d.heights[T],v[C+2]=d.z0+(_+g)*ii,A[C]=y[T*3],A[C+1]=y[T*3+1],A[C+2]=y[T*3+2]}let w=[];for(let g=0;g<b;g++)for(let M=0;M<p;M++){let T=g*(p+1)+M,C=T+1,L=T+p+1,R=L+1;w.push(T,L,C,C,L,R)}let x=new ae;x.setAttribute("position",new pe(v,3)),x.setAttribute("color",new pe(A,3)),x.setIndex(w),x.computeVertexNormals(),x.computeBoundingSphere();let S=new B(x,a);S.receiveShadow=!0,r.add(S)}}let c=8,l=Math.round(Vn*2/c)+1,h=new Uint8Array(l*l);for(let d=0;d<l;d++)for(let y=0;y<l;y++){let _=e(-Vn+y*c,-Vn+d*c);h[d*l+y]=Math.round(Uh((_+12)/36)*255)}let u=new dc(h,l,l,Sh,Vi);u.unpackAlignment=1,u.magFilter=$n,u.minFilter=$n,u.needsUpdate=!0;function f(d,y,_){for(let m of t){let p=Math.round((d-m.x0)/ii),b=Math.round((y-m.z0)/ii);if(p<0||b<0||p>m.segs||b>m.segs)continue;let E=(b*m.N+p)*3;return _.setRGB(m.colors[E],m.colors[E+1],m.colors[E+2])}return _.setRGB(0,0,0)}return{group:r,heightTex:u,sample:e,slopeAt:n,islandAt:s,colorAt:f}}var Zo=5;function ff(i,t){let e=Math.round(Vn*2/Zo),n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d"),r=s.createImageData(e,e),o=new tt,a=new tt("#7fd8d0"),c=new tt("#3b7fc0");for(let l=0;l<e;l++)for(let h=0;h<e;h++){let u=h*Zo-Vn+Zo/2,f=l*Zo-Vn+Zo/2,d=t(u,f);d<Kn?o.copy(a).lerp(c,Tt(0,6,-d)):i(u,f,o).offsetHSL(0,0,Tt(4,30,d)*.08);let y=(l*e+h)*4;o.convertLinearToSRGB(),r.data[y]=o.r*255,r.data[y+1]=o.g*255,r.data[y+2]=o.b*255,r.data[y+3]=255}return s.putImageData(r,0,0),n}var DE=40,UE=80;function pf(i){let t=i.length,e=new Float64Array(t),n=new Float64Array(t),s=i.flatMap(c=>c.paths),r=new tt("#c9a66e"),o=new tt;function a(c,l){let h=-1/0;for(let f=0;f<t;f++){let d=i[f],y=c-d.cx,_=l-d.cz,m=Math.hypot(y,_);if(m>760){e[f]=-1e9;continue}e[f]=d.edge(Math.atan2(_,y))-m+(Jo(c/110+f*17.3,l/110-f*9.1)-.5)*UE,e[f]>h&&(h=e[f])}if(h===-1/0)return n.fill(0),n[0]=1,-1e9;let u=0;for(let f=0;f<t;f++)n[f]=Math.exp((e[f]-h)/DE),u+=n[f];for(let f=0;f<t;f++)n[f]/=u;return h}return{id:"continent",name:"\u5927\u9678",cx:0,cz:0,maxR:0,height(c,l){let h=a(c,l);if(h<-40)return Ko;let u=0,f=0;for(let d=0;d<t;d++)n[d]<.004||(u+=n[d]*i[d].land(c,l),f+=n[d]);u/=f;for(let d of i)d.carve&&(u=d.carve(c,l,u));return te(Ko,u,Tt(-30,55,h))},color(c,l,h,u,f){a(c,l),f.setRGB(0,0,0);let d=0;for(let y=0;y<t;y++)n[y]<.01||(i[y].color(c,l,h,u,o),f.r+=o.r*n[y],f.g+=o.g*n[y],f.b+=o.b*n[y],d+=n[y]);if(f.multiplyScalar(1/d),h>=1.7){let y=Ae(c,l,s);y<2.6&&f.lerp(r,Tt(2.6,1.6,y)*.75)}return f},weightOf(c,l,h){return a(l,h),n[c]},regionIndexAt(c,l){a(c,l);let h=0;for(let u=1;u<t;u++)n[u]>n[h]&&(h=u);return h}}}var ut=(i,t={})=>new bt({color:i,roughness:.9,flatShading:!0,...t}),pt=i=>(i.castShadow=i.receiveShadow=!0,i);function an(i,t){return{box(e,n,s,r,o,a,c,l,h="part"){if(t.push({box:new he(new F(r-e/2,o,a-s/2),new F(r+e/2,o+n,a+s/2)),color:l,kind:h}),!c)return null;let u=pt(new B(new dt(e,n,s),c));return u.position.set(r,o+n/2,a),i.add(u),u},cyl(e,n,s,r,o,a,c,l="part",h=10){let u=null;return a&&(u=pt(new B(new Rt(e,e,n,h),a)),u.position.set(s,r+n/2,o),i.add(u)),t.push({box:new he(new F(s-e,r,o-e),new F(s+e,r+n,o+e)),cyl:{x:s,z:o,r:e},color:c,kind:l}),u}}}function cn(i,t,e){let n=new pc(i,t,e);n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1;let s=new Mn,r=0;return{mesh:n,add(o,a,c,l=1,h=l,u=l,f=0,d=0,y=0,_=null,m="XYZ"){return r>=e?-1:(s.position.set(o,a,c),s.rotation.set(f,d,y,m),s.scale.set(l,h,u),s.updateMatrix(),n.setMatrixAt(r,s.matrix),_&&n.setColorAt(r,_),r++)},addMatrix(o){r>=e||n.setMatrixAt(r++,o)},finish(){return n.count=r,n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n}}}var gv=Math.sqrt(10),Ws=720,vi=620,ke={east:20,west:-10,south:-30,north:-40};var Nh=i=>380+26*Math.sin(3*i+.5)+14*Math.sin(7*i+2)+8*Math.sin(11*i+1),zE=(i,t)=>[Math.cos(i)*(Nh(i)-t),Math.sin(i)*(Nh(i)-t)],pi=new ft(44,10).normalize(),ho=new ft(-.39,.92).normalize(),Xi={name:"\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730",x:-164,z:-215,r:24,h:22},[xf,yf]=zE(2.2,22),Ce={altar:{name:"\u661F\u306E\u796D\u58C7",x:0,z:0,r:16,h:5},village:{name:"\u6F6E\u98A8\u306E\u6751 \u30B7\u30AA\u30AB\u30BC",x:190,z:152,r:30,h:4.5},plateau:Xi,lake:{name:"\u93E1\u306E\u6E56",x:Xi.x+pi.x*51,z:Xi.z+pi.y*51,r:20},cave:{name:"\u3072\u304B\u308A\u306E\u6D1E\u7A9F",x:-202,z:114,r:13,h:5},windmill:{name:"\u98A8\u8ECA\u306E\u4E18",x:262,z:-88,r:14},lighthouse:{name:"\u5CAC\u306E\u706F\u53F0",x:xf,z:yf,r:10},stones:{name:"\u53E4\u306E\u74B0\u72B6\u5217\u77F3",x:-255,z:-60,r:15,h:7}},Wi={x:Xi.x+pi.x*18,z:Xi.z+pi.y*18,r:4},Xs=Ce.lake,mf=[[Xs.x,Xs.z],[-70,-225],[-20,-250],[40,-275],[100,-300],[170,-330],[260,-380],[340,-440]],Ic=[Xi.x+ho.x*62,Xi.z+ho.y*62],zh=[Xi.x+ho.x*20,Xi.z+ho.y*20],Tn=Ce.village,Lc=Ce.cave,wn=Ce.windmill,fi=Ce.stones,gf=[[[0,0],[60,50],[130,105],[Tn.x,Tn.z]],[[Tn.x,Tn.z],[Tn.x+12,Tn.z+48],[Tn.x+12,Tn.z+190]],[[0,0],[-30,-80],[-70,-150],[Xs.x+12,Xs.z+20]],[[0,0],[-60,-40],[-130,-110],Ic],[Ic,[(Ic[0]+zh[0])/2+4,(Ic[1]+zh[1])/2],zh],[[0,0],[-80,40],[-150,90],[Lc.x+13,Lc.z]],[[0,0],[90,-20],[180,-60],[wn.x-12,wn.z+3]],[[0,0],[-60,90],[-150,200],[xf+8,yf-8]],[[-130,-110],[-200,-80],[fi.x+12,fi.z]],[[0,0],[130,ke.east-5],[260,ke.east],[480,ke.east]],[[-60,-40],[-150,-20],[-300,ke.west],[-480,ke.west]],[[0,0],[-20,100],[ke.south,250],[ke.south,480]],[[0,0],[-20,-120],[ke.north,-240],[ke.north,-480]],[[0,0],[150,-140],[330,-330]],[[Tn.x,Tn.z],[270,250],[360,360]],[[0,0],[-120,150],[-330,330]],[[-130,-110],[-230,-230],[-340,-330]]],Di={sandDeep:new tt("#c7ae78"),sand:new tt("#f0dba3"),grass:new tt("#7cbf5a"),grassDark:new tt("#5f9f45"),grassHigh:new tt("#93bf62"),rock:new tt("#9a8f86"),rockDark:new tt("#7d7470"),path:new tt("#cfab72"),plaza:new tt("#dccdaa")},NE=new tt,_f={id:"start",name:"\u59CB\u307E\u308A\u306E\u8349\u539F",cx:0,cz:0,edge:Nh,maxR:465,places:Ce,paths:gf,sanctuaries:[{x:Ce.altar.x,z:Ce.altar.z,r:14},{x:Tn.x,z:Tn.z,r:36}],land(i,t){let e=Math.hypot(i,t),n=3.5+Wt(i/45,t/45)*4.5;n+=Wt(i/150+20,t/150)*9*Tt(70,220,e),n+=xs(i,t,wn.x,wn.z,90,13),n+=xs(i,t,-38,234,76,9),n+=xs(i,t,107,-120,50,4),n+=xs(i,t,250,230,70,8);let s=Xi,r=i-s.x,o=t-s.z,a=Math.hypot(r,o),c=a>.001?(r*ho.x+o*ho.y)/a:0,l=te(8,42,Tt(.82,.97,c)),h=s.h+(Wt(i/12,t/12)-.5)*.8;n=te(n,h,Tt(s.r+l,s.r,a)),n=te(n,s.h-1.3,Tt(Wi.r+1.5,Wi.r-1,Math.hypot(i-Wi.x,t-Wi.z)));let u=xr(i,t,Wi.x,Wi.z,s.x+pi.x*25,s.z+pi.y*25);a<s.r+1&&(n=Math.min(n,te(s.h-.8,n,Tt(.8,2.2,u))));for(let f of["altar","village","cave","stones"]){let d=Ce[f];n=te(n,d.h,Tt(d.r+16,d.r,Math.hypot(i-d.x,t-d.z)))}return n},carve(i,t,e){return e=te(e,-3.5,Tt(Xs.r+10,Xs.r-3,Math.hypot(i-Xs.x,t-Xs.z))),te(e,-2.5,Tt(22,5,lo(i,t,mf)))},color(i,t,e,n,s){if(e<1.7)s.copy(Di.sandDeep).lerp(Di.sand,Tt(-2,1.2,e));else{let r=Wt(i/9,t/9);s.copy(Di.grassDark).lerp(Di.grass,r),s.lerp(Di.grassHigh,Tt(12,22,e)*.8),s.lerp(Di.sand,Tt(2.4,1.7,e));let o=Ae(i,t,gf);o<2.6&&s.lerp(NE.copy(Di.path).offsetHSL(0,0,(r-.5)*.06),Tt(2.6,1.6,o)),Math.hypot(i-Tn.x,t-Tn.z)<14&&s.lerp(Di.plaza,Tt(14,12,Math.hypot(i-Tn.x,t-Tn.z))),Math.hypot(i-Lc.x,t-Lc.z)<12&&s.copy(Di.rockDark)}return n>.75&&s.lerp(Wt(i/4,t/4)>.5?Di.rock:Di.rockDark,Tt(.75,1.1,n)),s},nature:{trees:{style:"round",count:320,minH:2.6,avoidRiver:mf,accentChance:.15,leafColors:[5216842,6665558,4164178,15902402]},palms:90,rocks:180,grass:{count:9e3,color:6266693},flowers:{count:2500,colors:[16774384,16766044,16752575,12166911]},avoid:[...Object.values(Ce).map(i=>[i.x,i.z,i.r]),[Tn.x+12,Tn.z+175,12]]},enemies:{kumodama:{count:30},ishimori:{count:7}},decorate(i,t){let e=new yt,n=an(e,i),s=t(wn.x,wn.z),r=ut(15919832);n.cyl(4.2,14,wn.x,s-.5,wn.z,null,15919832);let o=pt(new B(new Rt(3,4.4,14,8),r));o.position.set(wn.x,s+6.5,wn.z);let a=pt(new B(new Yt(4,4.5,8),ut(14246986)));a.position.set(wn.x,s+15.7,wn.z);let c=new B(new dt(1.6,2.6,.3),ut(8015414)),l=Math.atan2(-wn.x,-wn.z);c.position.set(wn.x+Math.sin(l)*4.1,s+1.3,wn.z+Math.cos(l)*4.1),c.rotation.y=l,e.add(o,a,c);let h=new yt;h.position.set(wn.x+Math.sin(l)*3.6,s+12,wn.z+Math.cos(l)*3.6),h.rotation.y=l;let u=ut(9067067),f=ut(16774884,{side:le}),d=new B(new Rt(.6,.6,.8,8),u);d.rotation.x=Math.PI/2,h.add(d);for(let R=0;R<4;R++){let I=new yt;I.rotation.z=R/4*Math.PI*2;let H=pt(new B(new dt(.35,10,.25),u));H.position.y=5;let z=pt(new B(new vn(2,7.5),f));z.position.set(1.15,5.8,.05),I.add(H,z),h.add(I)}e.add(h);let[y,_]=[Ce.lighthouse.x,Ce.lighthouse.z],m=t(y,_),p=ut(12432806),b=pt(new B(new Rt(4.2,4.6,2.5,10),p));b.position.set(y,m+.8,_),e.add(b);for(let R=0;R<6;R++){let I=3.2-R*.18,H=3.2-(R+1)*.18,z=pt(new B(new Rt(H,I,3.4,12),ut(R%2?14246986:16447214)));z.position.set(y,m+2+R*3.4+1.7,_),e.add(z)}let E=m+2+6*3.4,v=pt(new B(new Rt(3,3,.4,12),ut(4869737)));v.position.set(y,E+.2,_);let A=new B(new Rt(1.4,1.4,2.2,10),new bt({color:16773544,emissive:16765024,emissiveIntensity:1.4}));A.position.set(y,E+1.5,_);let w=pt(new B(new Yt(1.9,2,10),ut(4869737)));w.position.set(y,E+3.6,_),e.add(v,A,w),n.cyl(3.6,27,y,m-.5,_,null,14246986);let x=new yt;x.position.set(y,E+1.5,_);let S=new _e({color:16773544,transparent:!0,opacity:.22,depthWrite:!1,blending:Zn,side:le});for(let R of[1,-1]){let I=new B(new Yt(6,60,16,1,!0),S);I.rotation.z=R*Math.PI/2,I.position.x=R*30,x.add(I)}e.add(x);let g=new Ye(16769184,40,40);g.position.set(y,E+1.5,_),e.add(g);let M=fi.h,T=ut(11116950);for(let R=0;R<12;R++){let I=R/12*Math.PI*2,H=fi.x+Math.cos(I)*11,z=fi.z+Math.sin(I)*11,U=R%4===3?2.2:4.5+R%3*.6,N=pt(new B(new dt(1.5,U,.9),T));N.position.set(H,M+U/2-.3,z),N.rotation.y=-I+Math.PI/2,e.add(N),n.cyl(.9,U,H,M-.5,z,null,11116950)}for(let R of[0,4,8]){let I=(R+.5)/12*Math.PI*2,H=pt(new B(new dt(1.2,.8,6.4),T));H.position.set(fi.x+Math.cos(I)*11,M+5.2,fi.z+Math.sin(I)*11),H.rotation.y=-I,e.add(H)}let C=pt(new B(new Rt(2.2,2.4,.9,10),T));C.position.set(fi.x,M+.45,fi.z),e.add(C),n.cyl(2.3,.9,fi.x,M-.5,fi.z,null,11116950);let L=new B(new on(.6,0),new bt({color:13154559,emissive:9400288,emissiveIntensity:1.2}));return L.position.set(fi.x,M+2,fi.z),e.add(L),{group:e,update(R,I){h.rotateZ(R*.6),x.rotation.y+=R*.7,L.rotation.y+=R,L.position.y=M+2+Math.sin(I*1.5)*.25}}}};var Oe=(i,t={})=>new bt({color:i,roughness:.85,flatShading:!0,...t}),si=i=>(i.castShadow=i.receiveShadow=!0,i);function Ef(i,t,e,n){let s=new Vs;s.moveTo(-i/2-.6,0),s.lineTo(0,e),s.lineTo(i/2+.6,0),s.lineTo(-i/2-.6,0);let r=new fr(s,{depth:t+1.2,bevelEnabled:!1});return r.translate(0,0,-(t+1.2)/2),si(new B(r,n))}function jo({w:i,d:t,wall:e,roof:n,trim:s}){let r=new yt,o=4.4,a=si(new B(new dt(i,o,t),Oe(e)));a.position.y=o/2,r.add(a);let c=Oe(s),l=si(new B(new dt(i+.4,.5,t+.4),Oe(11050900)));l.position.y=.25,r.add(l);for(let E of[-1,1])for(let v of[-1,1]){let A=new B(new dt(.35,o,.35),c);A.position.set(E*(i/2),o/2,v*(t/2)),r.add(A)}let h=new B(new dt(i+.2,.3,t+.2),c);h.position.y=o,r.add(h);let u=Ef(i,t,2.8,Oe(n));u.position.y=o,r.add(u);let f=si(new B(new dt(.8,2.4,.8),Oe(11773594)));f.position.set(i*.25,o+2.2,-t*.2),r.add(f);let d=new B(new dt(1.3,2.3,.15),Oe(8015414));d.position.set(0,1.4,t/2+.05);let y=new B(new ie(.08,6,4),Oe(16040539,{metalness:.6}));y.position.set(.4,1.4,t/2+.15),r.add(d,y);let _=Oe(16773572,{emissive:16762992,emissiveIntensity:.35}),m=Oe(s),p=(E,v,A)=>{let w=new yt,x=new B(new dt(1.1,1.1,.1),_),S=new B(new dt(1.3,.12,.14),m),g=new B(new dt(.12,1.3,.14),m),M=new B(new dt(1.4,.15,.4),m);M.position.y=-.65,w.add(x,S,g,M),w.position.set(E,2.6,v),w.rotation.y=A,r.add(w)};p(-i/2+1.4,t/2+.05,0),p(i/2-1.4,t/2+.05,0),p(i/2+.05,0,Math.PI/2),p(-i/2-.05,0,-Math.PI/2);let b=new B(new dt(1.2,.35,.35),Oe(9067067));b.position.set(-i/2+1.4,1.95,t/2+.3),r.add(b);for(let E=0;E<3;E++){let v=new B(new Cn(.16,0),Oe([16752575,16766044,16774384][E]));v.position.set(-i/2+1+E*.4,2.25,t/2+.3),r.add(v)}return r}function Mf(i,t){let e=new yt,n=Ce.village,s=n.h,r=(C,L="house",R=11565653)=>{C.updateMatrixWorld(!0),i.push({box:new he().setFromObject(C),color:R,kind:L})},o=[[-19,-10,Math.PI/2,8,7,16050904,14246986,9067067],[0,-20,0,9,7,15393778,4165532,7030320],[19,-11,-Math.PI/2,8,7,16181192,5929156,9067067],[-19,11,Math.PI/2,7,6,15331812,14721340,7030320],[20,12,-Math.PI/2,8,6.5,16050904,10117040,9067067]];for(let[C,L,R,I,H,z,U,N]of o){let G=jo({w:I,d:H,wall:z,roof:U,trim:N});G.position.set(n.x+C,s,n.z+L),G.rotation.y=R,e.add(G);let X=new B(new dt(I+.4,7,H+.4));X.position.set(n.x+C,s+3.5,n.z+L),X.rotation.y=R,r(X,"house",U)}let a=new yt,c=Oe(12432806),l=si(new B(new Rt(1.6,1.7,1.1,12,1,!0),c));l.material.side=le,l.position.y=.55;let h=si(new B(new Pn(1.6,.2,6,16),c));h.rotation.x=Math.PI/2,h.position.y=1.1;let u=new B(new en(1.5,16),Oe(3899328,{roughness:.2}));u.rotation.x=-Math.PI/2,u.position.y=.5,a.add(l,h,u);let f=Oe(9067067);for(let C of[-1,1]){let L=si(new B(new dt(.25,3.2,.25),f));L.position.set(C*1.5,1.6,0),a.add(L)}let d=Ef(2.6,2.2,1.1,Oe(14246986));d.position.y=3.1,d.rotation.y=Math.PI/2;let y=new B(new Rt(.3,.25,.45,8),f);y.position.set(0,2.2,0),a.add(d,y),a.position.set(n.x,s,n.z),e.add(a),i.push({box:new he(new F(n.x-1.8,s,n.z-1.8),new F(n.x+1.8,s+4,n.z+1.8)),cyl:{x:n.x,z:n.z,r:1.8},color:12432806,kind:"house"});let _=(C,L,R,I)=>{let H=new yt,z=si(new B(new dt(4,1.1,1.6),f));z.position.y=.55,H.add(z);for(let G of[-1,1])for(let X of[-1,1]){let Q=new B(new dt(.18,3,.18),f);Q.position.set(G*1.9,1.5,X*.9-.3),H.add(Q)}for(let G=0;G<6;G++){let X=new B(new dt(.7333333333333334,.12,2.6),Oe(G%2?16777215:I));X.position.set(-2.2+4.4/12+G*4.4/6,3.05,-.3),X.rotation.x=.25,X.castShadow=!0,H.add(X)}let U=[16739162,16766044,9426027,16753212,10471144];for(let G=0;G<7;G++){let X=new B(new Cn(.22,0),Oe(U[G%U.length]));X.position.set(-1.5+G*.5,1.28,G%2*.35-.15),H.add(X)}H.position.set(C,s,L),H.rotation.y=R,e.add(H);let N=new B(new dt(4,2,1.6));N.position.set(C,s+1,L),N.rotation.y=R,r(N,"house",I)};_(n.x+8,n.z+7,-Math.PI/2,2864544),_(n.x-8,n.z+7,Math.PI/2,14698330);let m=Oe(10119748),p=Oe(12884588),b=[["barrel",5,-14],["barrel",6.2,-13.2],["crate",-5,-14],["crate",-5,-12.7,1.1],["barrel",13,3],["crate",-13,-3],["barrel",-14,20],["crate",14,21]];for(let[C,L,R,I=0]of b){let H=si(C==="barrel"?new B(new Rt(.55,.55,1.2,10),m):new B(new dt(1.1,1.1,1.1),p));H.position.set(n.x+L,s+.6+I,n.z+R),H.rotation.y=L,e.add(H),I||i.push({box:new he(new F(n.x+L-.6,s,n.z+R-.6),new F(n.x+L+.6,s+1.2,n.z+R+.6)),cyl:{x:n.x+L,z:n.z+R,r:.6},color:10119748,kind:"prop"})}let E=Oe(16770728,{emissive:16762992,emissiveIntensity:1.2}),v=[[-9,-6],[9,-6],[-9,16],[9,16],[3,26]];for(let[C,L]of v){let R=n.x+C,I=n.z+L,H=si(new B(new Rt(.12,.16,4,6),Oe(4869737)));H.position.set(R,s+2,I);let z=new B(new on(.35,0),E);z.position.set(R,s+4.2,I),e.add(H,z),i.push({box:new he(new F(R-.2,s,I-.2),new F(R+.2,s+4,I+.2)),cyl:{x:R,z:I,r:.2},color:4869737,kind:"prop"})}let A=new yt;for(let C of[-1,1]){let L=si(new B(new dt(.25,3.2,.25),f));L.position.set(C*1.8,1.6,0),A.add(L)}let w=(()=>{let C=document.createElement("canvas");C.width=256,C.height=96;let L=C.getContext("2d");L.fillStyle="#c49a6c",L.fillRect(0,0,256,96),L.fillStyle="#5a3a24",L.font='bold 40px "M PLUS Rounded 1c", sans-serif',L.textAlign="center",L.textBaseline="middle",L.fillText("\u30B7\u30AA\u30AB\u30BC\u6751",128,50);let R=new Ei(C);return R.colorSpace=Ne,R})(),x=new B(new dt(4,1.4,.2),[f,f,f,f,new bt({map:w}),new bt({map:w})]);x.position.y=2.6,A.add(x),A.position.set(n.x-22,t(n.x-22,n.z-10),n.z-10),A.rotation.y=Math.atan2(-(n.x-22),-(n.z-10)),e.add(A);let S=n.x+12,g=n.z+40;for(;g<n.z+400&&t(S,g)>.9;)g+=1;let M=g<n.z+400,T=new yt;if(M){g-=4;let C=28,L=1.4,R=Oe(11897438);for(let U=0;U<C/1.2;U++){let N=si(new B(new dt(4,.25,1.1),R));N.position.set(S+(Math.random()-.5)*.1,L-.12,g+U*1.2+.6),e.add(N)}for(let U=0;U<=C;U+=4)for(let N of[-1,1]){let G=si(new B(new Rt(.2,.2,5,6),Oe(8015414)));G.position.set(S+N*1.9,L-2,g+U),e.add(G)}i.push({box:new he(new F(S-2,L-.5,g),new F(S+2,L,g+C)),color:11897438,kind:"pier"});let I=new Vs;I.moveTo(-1.3,.8),I.lineTo(1.3,.8),I.lineTo(.9,0),I.lineTo(-.9,0),I.lineTo(-1.3,.8);let H=si(new B(new fr(I,{depth:5,bevelEnabled:!1}),Oe(14246986)));H.position.z=-2.5;let z=new B(new dt(2.4,.15,.6),Oe(16050904));z.position.y=.6,T.add(H,z),T.position.set(S+4.2,Kn-.3,g+C-5),e.add(T)}return{group:e,update(C){T.position.y=Kn-.3+Math.sin(C*1.3)*.15,T.rotation.z=Math.sin(C*1.1)*.05}}}var bn=Ws,ys=0,uo={greatTree:{name:"\u5343\u5E74\u6A39",x:bn,z:ys,r:22,h:8},mushroom:{name:"\u30AD\u30CE\u30B3\u306E\u8C37",x:bn+133,z:ys+152,r:30},spring:{name:"\u5996\u7CBE\u306E\u6CC9",x:bn-150,z:ys-170,r:14,h:5},cabin:{name:"\u6728\u3053\u308A\u306E\u5C0F\u5C4B",x:bn+170,z:ys-140,r:16,h:6}},nn=uo.greatTree,In=uo.mushroom,gn=uo.spring,Te=uo.cabin,vf=[[[bn-420,ke.east],[bn-200,ke.east-2],[bn-60,5],[nn.x-22,nn.z]],[[bn-60,5],[bn+40,80],[In.x-20,In.z-14]],[[bn-200,ke.east-2],[bn-180,-90],[gn.x-4,gn.z+16]],[[bn-60,5],[bn+60,-70],[Te.x-16,Te.z+4]]],qi={sand:new tt("#e6d3a0"),sandDeep:new tt("#c4ad7c"),moss:new tt("#5f9a4a"),dark:new tt("#3f7a3c"),clearing:new tt("#86c263"),valley:new tt("#6f8a6a"),path:new tt("#a8845a"),rock:new tt("#7f7f72")},wf={id:"forest",name:"\u6DF1\u7DD1\u306E\u68EE",cx:bn,cz:ys,edge:Wn(420,[26,1.2,16,.3,10,2.4]),maxR:480,places:uo,paths:vf,sanctuaries:[],land(i,t){let e=4+Wt(i/35,t/35)*6+Wt(i/140,t/140+9)*10;e+=xs(i,t,bn+174,ys-63,82,8),e+=xs(i,t,bn-60,ys+200,90,9),e+=xs(i,t,bn-230,ys+90,70,7);for(let n of[nn,gn,Te])e=te(e,n.h,Tt(n.r+16,n.r,Math.hypot(i-n.x,t-n.z)));return e=te(e,3,Tt(In.r+16,In.r-4,Math.hypot(i-In.x,t-In.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(qi.sandDeep).lerp(qi.sand,Tt(-2,1.2,e));let r=Wt(i/8,t/8);s.copy(qi.dark).lerp(qi.moss,r),s.lerp(qi.sand,Tt(2.4,1.7,e)),s.lerp(qi.clearing,Tt(nn.r+6,nn.r-6,Math.hypot(i-nn.x,t-nn.z))*.8),s.lerp(qi.clearing,Tt(gn.r+6,gn.r-2,Math.hypot(i-gn.x,t-gn.z))*.7),s.lerp(qi.valley,Tt(In.r+8,In.r-6,Math.hypot(i-In.x,t-In.z)));let o=Ae(i,t,vf);return o<2.4&&s.lerp(qi.path,Tt(2.4,1.4,o)),n>.75&&s.lerp(qi.rock,Tt(.75,1.1,n)),s},nature:{trees:{style:"round",count:1250,leafColors:[4160060,3107642,5214021,5937744],trunkColor:7030320},palms:30,rocks:130,rockColor:8355698,grass:{count:9500,color:5214015},flowers:{count:2500,colors:[13625599,16777215,10473727]},avoid:Object.values(uo).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E2\u30EA\u30C0\u30DE",tint:5214042,mult:1.6,count:34},ishimori:{name:"\u30B3\u30B1\u30A4\u30EF",tint:7307098,mult:1.6,count:11}},decorate(i,t,e){let n=new yt,s=an(n,i),r=nn.h,o=ut(7031347,{roughness:1}),a=pt(new B(new Rt(3.6,6.5,34,10),o));a.position.set(nn.x,r+17,nn.z),n.add(a),s.cyl(6,40,nn.x,r-1,nn.z,null,7031347);for(let z=0;z<7;z++){let U=z/7*Math.PI*2+.3,N=pt(new B(new Yt(1.6,9,6),o));N.position.set(nn.x+Math.cos(U)*7,r+1,nn.z+Math.sin(U)*7),N.rotation.set(Math.sin(U)*1.2,0,-Math.cos(U)*1.2),n.add(N)}let c=[ut(4164165),ut(5216842),ut(3111488)];for(let z=0;z<12;z++){let U=e()*Math.PI*2,N=z<3?0:6+e()*10,G=9+e()*6,X=pt(new B(new Cn(1,0),c[z%3]));X.scale.setScalar(G),X.position.set(nn.x+Math.cos(U)*N,r+32+e()*12-N*.3,nn.z+Math.sin(U)*N),X.rotation.set(e()*3,e()*3,0),n.add(X)}let l=ut(13616822),h=pt(new B(new dt(2.4,1.2,1.6),l));h.position.set(nn.x-9,r+.6,nn.z),h.rotation.y=Math.PI/2,n.add(h),s.cyl(1.4,1.2,nn.x-9,r,nn.z,null,13616822);let u=new B(new ie(.4,12,8),new bt({color:13172656,emissive:9429104,emissiveIntensity:1.3}));u.position.set(nn.x-9,r+1.7,nn.z),n.add(u);let f=[new bt({color:10483434,emissive:4183744,emissiveIntensity:.9,flatShading:!0}),new bt({color:16759008,emissive:13656232,emissiveIntensity:.8,flatShading:!0}),new bt({color:16773544,emissive:14725184,emissiveIntensity:.7,flatShading:!0})],d=ut(15919832);for(let z=0;z<32;z++){let U=e()*Math.PI*2,N=e()*(In.r+6),G=In.x+Math.cos(U)*N,X=In.z+Math.sin(U)*N,Q=t(G,X),q=.8+e()*2.8,Z=pt(new B(new Rt(.25*q,.35*q,2*q,8),d));Z.position.set(G,Q+q,X);let it=pt(new B(new ie(1.1*q,12,6,0,Math.PI*2,0,Math.PI/2),f[z%3]));it.scale.y=.7,it.position.set(G,Q+2*q-.1,X),n.add(Z,it),q>1.4&&s.cyl(.35*q,2*q+.6,G,Q-.5,X,null,f[z%3].color.getHex())}let y=new Ye(8384736,60,45);y.position.set(In.x,t(In.x,In.z)+5,In.z),n.add(y);let _=new B(new en(8,28),new bt({color:10483434,emissive:4175552,emissiveIntensity:.6,transparent:!0,opacity:.85,roughness:.1}));_.rotation.x=-Math.PI/2,_.position.set(gn.x,gn.h+.25,gn.z),n.add(_);let m=ut(13616822);for(let z=0;z<14;z++){let U=z/14*Math.PI*2,N=.7+e()*.5,G=pt(new B(new Jn(N,0),m));G.position.set(gn.x+Math.cos(U)*8.8,gn.h+N*.4,gn.z+Math.sin(U)*8.8),n.add(G)}let p=40,b=new Float32Array(p*3),E=new ae;E.setAttribute("position",new pe(b,3));let v=new tn(E,new qe({color:16771327,size:.45,transparent:!0,opacity:.9,depthWrite:!1}));v.frustumCulled=!1,n.add(v);let A=new Ye(12124144,25,20);A.position.set(gn.x,gn.h+2,gn.z),n.add(A);let w=jo({w:8,d:6.5,wall:10119748,roof:5929540,trim:5913124});w.position.set(Te.x,Te.h,Te.z),w.rotation.y=-Math.PI/2,n.add(w);let x=new B(new dt(8.4,7,6.9));x.position.set(Te.x,Te.h+3.5,Te.z),x.rotation.y=-Math.PI/2,x.updateMatrixWorld(!0),i.push({box:new he().setFromObject(x),color:5929540,kind:"house"});let S=ut(9067067);for(let z=0;z<3;z++)for(let U=0;U<4-z;U++){let N=pt(new B(new Rt(.4,.4,3.2,8),S));N.rotation.x=Math.PI/2,N.position.set(Te.x-8+U*.85+z*.42,Te.h+.4+z*.72,Te.z+7),n.add(N)}i.push({box:new he(new F(Te.x-8.5,Te.h-.5,Te.z+5.3),new F(Te.x-4.9,Te.h+2,Te.z+8.7)),color:9067067,kind:"prop"});let g=pt(new B(new Rt(.8,.95,.9,10),S));g.position.set(Te.x-7,Te.h+.45,Te.z-5);let M=new B(new Rt(.07,.07,1.4,6),ut(7030320));M.position.set(Te.x-7,Te.h+1.4,Te.z-5),M.rotation.z=.4;let T=new B(new dt(.5,.35,.08),ut(12634320,{metalness:.6}));T.position.set(Te.x-6.8,Te.h+1,Te.z-5),n.add(g,M,T),s.cyl(.95,.9,Te.x-7,Te.h-.2,Te.z-5,null,9067067);let C=180,L=new Float32Array(C*3),R=[];for(let z=0;z<C;z++){let U=e()*Math.PI*2,N=8+e()*60,G=bn+Math.cos(U)*N,X=ys+Math.sin(U)*N;R.push({x:G,z:X,y:t(G,X)+1+e()*4,p:e()*10})}let I=new ae;I.setAttribute("position",new pe(L,3));let H=new tn(I,new qe({color:14679946,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return H.frustumCulled=!1,n.add(H),{group:n,update(z,U){u.position.y=r+1.7+Math.sin(U*2)*.15;for(let N=0;N<C;N++){let G=R[N];L[N*3]=G.x+Math.sin(U*.7+G.p)*1.5,L[N*3+1]=G.y+Math.sin(U*1.3+G.p*2)*.8,L[N*3+2]=G.z+Math.cos(U*.6+G.p)*1.5}I.attributes.position.needsUpdate=!0,H.material.opacity=.6+Math.sin(U*3)*.3;for(let N=0;N<p;N++){let G=U*.6+N/p*Math.PI*2,X=3+N%5*1.1;b[N*3]=gn.x+Math.cos(G*(1+N%3*.2))*X,b[N*3+1]=gn.h+1+Math.sin(U*2+N)*.8+N%4*.6,b[N*3+2]=gn.z+Math.sin(G*(1+N%3*.2))*X}E.attributes.position.needsUpdate=!0,_.material.emissiveIntensity=.5+Math.sin(U*1.5)*.2}}}};var Hc=(i,t,e=6)=>new Rt(i,t,1,e).translate(0,.5,0),ri={trunk:Hc(.45,.7),pineTrunk:Hc(.35,.5),cone:new Yt(1,1,7).translate(0,.5,0),blob:new Cn(1,0),cactus:Hc(.5,.55,8),cactusTop:new ie(.5,8,5,0,Math.PI*2,0,Math.PI/2),branch:Hc(.12,.22,5),rock:new Jn(1,0),blade:new Yt(.18,.9,3),flower:new Cn(.22,0),palmSeg:new Rt(.3,.36,1.25,6),frond:new Yt(.9,4.2,3,1,!0).translate(0,2.1,0),nut:new ie(.28,6,5)};function Oh(i){let t=cn(ri.palmSeg,ut(11108954),i*6),e=cn(ri.frond,ut(5221973,{side:le}),i*7),n=cn(ri.nut,ut(7030320),i*3);return{add(s,r,o,a,c,l){let h=[],u=new ft(a,c).normalize().multiplyScalar(.35+l()*.3),f=new F;for(let d=0;d<6;d++){let y=d/6,_=s+u.x*y*y*4,m=r+d*1.15+.6,p=o+u.y*y*y*4;h.push({mesh:t.mesh,index:t.add(_,m,p,1-d*.05,1,1-d*.05,u.y*y*.6,0,-u.x*y*.6)}),f.set(_,m+.7,p)}for(let d=0;d<7;d++)h.push({mesh:e.mesh,index:e.add(f.x,f.y,f.z,1,1,.25,0,d/7*Math.PI*2,1.15+l()*.25,null,"YXZ")});for(let d=0;d<3;d++)h.push({mesh:n.mesh,index:n.add(f.x+Math.cos(d*2.1)*.4,f.y-.4,f.z+Math.sin(d*2.1)*.4)});return h},finish(s){s.add(t.finish(),e.finish(),n.finish())}}}function Tf(i,t,e,n,s,r=()=>1,o=1){let a=i.nature,c=[],l=(E,v)=>s()<r(E,v),h=new yt,u=i.maxR,f=a.avoid||[],d=()=>[i.cx+(s()-.5)*2*u,i.cz+(s()-.5)*2*u],y=(E,v,A)=>f.some(([w,x,S])=>Math.hypot(E-w,v-x)<S+A),_=(E,v,A,w,x,S,g)=>{let M={box:new he(new F(E-A,w,v-A),new F(E+A,w+x,v+A)),cyl:{x:E,z:v,r:A},color:S,kind:g};return t.push(M),M},m=(E,v,A,w,x,S)=>{c.push({x:E,z:v,y:A,h:w,region:i,parts:x.filter(g=>g.index>=0),collider:S})},p=a.trees;if(p&&p.count){let E=p.count,v=ut(p.trunkColor??9067067,{roughness:1}),A=(p.leafColors||[5216842]).map(M=>ut(M)),w=A.map(M=>cn(p.style==="pine"?ri.cone:ri.blob,M,E*3)),x=cn(p.style==="pine"?ri.pineTrunk:p.style==="cactus"?ri.cactus:ri.trunk,p.style==="cactus"?A[0]:v,E*(p.style==="cactus"?3:1)),S=p.style==="cactus"?cn(ri.cactusTop,A[0],E*3):p.style==="dead"?cn(ri.branch,v,E*3):p.snowy?cn(ri.cone,ut(16054523),E*3):null,g=0;for(let M=0;g<E&&M<E*40;M++){let[T,C]=d(),L=e(T,C);if(L<(p.minH??2.6)||L>(p.maxH??999)||n(T,C)>(p.maxSlope??.45)||y(T,C,4)||Ae(T,C,i.paths)<4||p.avoidRiver&&lo(T,C,p.avoidRiver)<10||!l(T,C))continue;g++;let R=p.accentChance&&s()<p.accentChance?A.length-1:Math.floor(s()*(A.length-(p.accentChance?1:0))),I,H=[],z=(N,...G)=>H.push({mesh:N.mesh,index:N.add(...G)}),U;if(p.style==="round"){I=4+s()*3,z(x,T,L-.3,C,1,I,1);let N=2+Math.floor(s()*2);for(let G=0;G<N;G++){let X=2.4+s()*1.4-G*.4;z(w[R],T+(s()-.5)*1.5,L+I+G*1.8,C+(s()-.5)*1.5,X,X,X,s()*3,s()*3,s()*3)}U=_(T,C,.7,L-1,I+3,A[R].color.getHex(),"tree")}else if(p.style==="pine"){I=7+s()*5,z(x,T,L-.3,C,1,2.2,1);for(let N=0;N<3;N++){let G=(2.6-N*.7)*(I/10),X=I*.42,Q=L+1.6+N*I*.26;z(w[R],T,Q,C,G,X,G,0,s()*3,0),S&&z(S,T,Q+X*.55,C,G*.55,X*.45,G*.55,0,s()*3,0)}U=_(T,C,.6,L-1,I+2,A[R].color.getHex(),"tree")}else if(p.style==="cactus"){I=2.5+s()*2.2,z(x,T,L-.2,C,1,I,1),z(S,T,L-.2+I,C);let N=1+Math.floor(s()*2);for(let G=0;G<N;G++){let X=s()*Math.PI*2+G*Math.PI,Q=T+Math.cos(X)*.9,q=C+Math.sin(X)*.9,Z=L+I*(.35+s()*.25),it=1+s()*1.2;z(x,Q,Z,q,.6,it,.6),z(S,Q,Z+it,q,.6,.6,.6)}U=_(T,C,.8,L-1,I+1,A[0].color.getHex(),"tree")}else if(p.style==="dead"){I=4+s()*3,z(x,T,L-.3,C,.8,I,.8);for(let N=0;N<2;N++){let G=s()*Math.PI*2;z(S,T,L+I*(.5+N*.2),C,1,1.6+s()*1.5,1,Math.cos(G)*.9,0,Math.sin(G)*.9)}U=_(T,C,.5,L-1,I+1,3813424,"tree")}m(T,C,L,I,H,U)}h.add(x.finish()),w.forEach(M=>h.add(M.finish())),S&&h.add(S.finish())}if(a.palms){let E=Oh(a.palms),v=0;for(let A=0;v<a.palms&&A<a.palms*300;A++){let[w,x]=d(),S=e(w,x);if(S<1||S>2.6||y(w,x,2)||Ae(w,x,i.paths)<5||!l(w,x))continue;v++;let g=e(w-3,x)-e(w+3,x),M=e(w,x-3)-e(w,x+3),T=E.add(w,S-.2,x,g||1,M,s);m(w,x,S,7,T,_(w,x,.45,S-1,7,5221973,"tree"))}E.finish(h)}if(a.rocks){let E=cn(ri.rock,ut(a.rockColor??10327971),a.rocks),v=0;for(let A=0;v<a.rocks&&A<a.rocks*80;A++){let[w,x]=d(),S=e(w,x);if(S<.3||y(w,x,3)||Ae(w,x,i.paths)<3||n(w,x)<.35&&s()>.35||!l(w,x))continue;v++;let g=.8+s()*1.8;E.add(w,S+g*.3,x,g*1.3,g,g*1.1,s(),s()*3,s()),_(w,x,g*1.1,S-.5,g*1.3,a.rockColor??10327971,"rock")}h.add(E.finish())}let b=(E,v,A,w,x)=>{let S=cn(E,v,A);S.mesh.castShadow=!1;let g=0,M=x?.map(T=>new tt(T));for(let T=0;g<A&&T<A*20;T++){let[C,L]=d(),R=e(C,L);if(R<2.2||n(C,L)>.5||Ae(C,L,i.paths)<2.5||y(C,L,-2)||!l(C,L))continue;let I=.7+s()*.6;S.add(C,R+w,L,I,I,I,0,s()*3,(s()-.5)*.4,M?M[Math.floor(s()*M.length)]:null),g++}h.add(S.finish())};return a.grass?.count&&b(ri.blade,ut(a.grass.color,{flatShading:!1}),Math.round(a.grass.count*o),.35),a.flowers?.count&&b(ri.flower,ut(16777215),Math.round(a.flowers.count*o),.3,a.flowers.colors),{group:h,trees:c}}var zi=0,xn=Ws,fo={oasis:{name:"\u98A8\u5F85\u3061\u306E\u30AA\u30A2\u30B7\u30B9",x:zi+95,z:xn+47,r:20},temple:{name:"\u7802\u306E\u795E\u6BBF",x:zi-114,z:xn-63,r:16,h:5},arch:{name:"\u5CA9\u306E\u30A2\u30FC\u30C1",x:zi+40,z:xn-190,r:14},camp:{name:"\u968A\u5546\u306E\u91CE\u55B6\u5730",x:zi-170,z:xn+130,r:16,h:4}},Ln=fo.oasis,Ze=fo.temple,Ui=fo.arch,Sn=fo.camp,Fh=[[zi+133,xn-152,22,17],[zi-164,xn+133-60,24,14],[zi+183,xn+196,18,22],[zi-38,xn+247,15,12],[zi+260,xn+40,20,16],[zi-250,xn-40,18,15]],bf=[[[ke.south,xn-420],[ke.south,xn-250],[-60,xn-120],[Ze.x+8,Ze.z-14]],[[-60,xn-120],[20,xn-20],[Ln.x-22,Ln.z-10]],[[ke.south,xn-250],[Ui.x-10,Ui.z-20],[Ui.x,Ui.z+20]],[[-60,xn-120],[-130,xn+40],[Sn.x+10,Sn.z-14]]],Yi={sand:new tt("#ecd08e"),sandShade:new tt("#d9b872"),sandDeep:new tt("#c9a96c"),red1:new tt("#c4704a"),red2:new tt("#a85a3c"),red3:new tt("#d99a6c"),green:new tt("#7cbf5a"),path:new tt("#c09058"),stone:new tt("#d8c7a0")},Sf={id:"desert",name:"\u967D\u708E\u306E\u7802\u6F20",cx:zi,cz:xn,edge:Wn(420,[24,2.1,18,.8,10,1.5]),maxR:480,places:fo,paths:bf,sanctuaries:[],land(i,t){let e=Wt(i/60,t/60),n=3+(Math.sin(i*.07+t*.02+e*6)*.5+.5)*3.2+Wt(i/25,t/25)*2+Wt(i/160,t/160+4)*8;for(let[s,r,o,a]of Fh)n=te(n,a+6+(Wt(i/10,t/10)-.5),Tt(o+5,o,Math.hypot(i-s,t-r)));for(let s of[Ze,Sn])n=te(n,s.h,Tt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return n=te(n,-2,Tt(Ln.r+10,Ln.r-5,Math.hypot(i-Ln.x,t-Ln.z))),n},color(i,t,e,n,s){if(e<1.7)return s.copy(Yi.sandDeep).lerp(Yi.sand,Tt(-2,1.2,e));if(s.copy(Yi.sandShade).lerp(Yi.sand,Wt(i/14,t/14)),s.offsetHSL(0,0,Math.sin(i*.9+t*.35+Wt(i/5,t/5)*4)*.015),e>15||n>.7){let a=Math.floor(e/2.2)%3;s.copy(a===0?Yi.red1:a===1?Yi.red2:Yi.red3)}let r=Math.hypot(i-Ln.x,t-Ln.z);r<Ln.r+9&&s.lerp(Yi.green,Tt(Ln.r+9,Ln.r+3,r)),Math.hypot(i-Ze.x,t-Ze.z)<Ze.r-2&&s.lerp(Yi.stone,.6);let o=Ae(i,t,bf);return o<2.4&&s.lerp(Yi.path,Tt(2.4,1.4,o)*.7),s},nature:{trees:{style:"cactus",count:350,leafColors:[6266709],minH:2.4,maxSlope:.4},rocks:210,rockColor:13208164,grass:{count:4200,color:13218666},avoid:[...Object.values(fo).map(i=>[i.x,i.z,i.r+6]),...Fh.map(([i,t,e])=>[i,t,e+6])]},enemies:{kumodama:{name:"\u30B9\u30CA\u30C0\u30DE",tint:13214827,mult:2.2,count:34},ishimori:{name:"\u30B9\u30CA\u30E2\u30EA",tint:11565653,mult:2.2,count:11}},decorate(i,t,e){let n=new yt,s=an(n,i),r=ut(14733222),o=ut(12890250),a=Ze.h,c=pt(new B(new dt(22,.8,18),o));c.position.set(Ze.x,a-.1,Ze.z),n.add(c),i.push({box:new he().setFromObject(c),color:12890250,kind:"part"});let l=[8,8,3,8,5,8,8,2.5,8,6];for(let C=0;C<10;C++){let L=C<5?-1:1,R=Ze.x-8+C%5*4,I=Ze.z+L*7,H=l[C];if(s.cyl(.9,H,R,a+.3,I,r,14733222,"part",8),H>=8){let z=pt(new B(new dt(2.2,.6,2.2),o));z.position.set(R,a+.3+H+.3,I),n.add(z)}}let h=pt(new B(new dt(13,.9,2.2),o));h.position.set(Ze.x-2,a+9.3,Ze.z-7),n.add(h),s.box(18,9,1.6,Ze.x,a+.3,Ze.z-11,r,14733222);let u=new B(new dt(4.5,6,.3),ut(9071172));u.position.set(Ze.x,a+3.3,Ze.z-10.1),n.add(u);let f=new B(new en(1.2,12),new bt({color:16766826,emissive:14721072,emissiveIntensity:.8}));f.position.set(Ze.x,a+7.2,Ze.z-10.15),n.add(f);let d=pt(new B(new dt(4,4.5,4),r));d.position.set(Ze.x+13,a+1.2,Ze.z+2),d.rotation.set(.15,-.5,.1),n.add(d),s.cyl(2.8,4,Ze.x+13,a-.5,Ze.z+2,null,14733222);let y=new bt({color:10483434,emissive:4183744,emissiveIntensity:1});for(let C of[-1,1]){let L=new B(new dt(.8,.3,.1),y);L.position.set(C*.9,.6,2.02),d.add(L)}let _=Oh(18);for(let C=0;C<18;C++){let L=C/18*Math.PI*2+e()*.3,R=Ln.r+3+e()*6,I=Ln.x+Math.cos(L)*R,H=Ln.z+Math.sin(L)*R,z=t(I,H);z<.6||(_.add(I,z-.2,H,-Math.cos(L),-Math.sin(L),e),s.cyl(.45,7,I,z-1,H,null,5221973,"tree"))}_.finish(n);let m=ut(7315274);for(let C=0;C<70;C++){let L=e()*Math.PI*2,R=Ln.r-2+e()*4,I=Ln.x+Math.cos(L)*R,H=Ln.z+Math.sin(L)*R,z=new B(new Yt(.08,1.8,3),m);z.position.set(I,Math.max(t(I,H),0)+.8,H),z.rotation.z=(e()-.5)*.3,n.add(z)}let p=ut(12873802),b=t(Ui.x,Ui.z);for(let C of[-1,1]){let L=Ui.x+C*7,R=pt(new B(new Rt(2.2,3,12,7),p));R.position.set(L,b+5.5,Ui.z),n.add(R),s.cyl(2.6,12,L,b-1,Ui.z,null,12873802)}let E=pt(new B(new Pn(7,2.2,7,14,Math.PI),ut(11558972)));E.position.set(Ui.x,b+10.5,Ui.z),n.add(E);let v=Sn.h,A=[14246986,2864544,16040539];for(let C=0;C<3;C++){let L=C/3*Math.PI*2+.4,R=Sn.x+Math.cos(L)*8,I=Sn.z+Math.sin(L)*8,H=pt(new B(new Yt(3.4,4.5,6),ut(A[C])));H.position.set(R,v+2.25,I);let z=new B(new vn(1.4,2.2),ut(5913124,{side:le})),U=Math.atan2(Sn.x-R,Sn.z-I);z.position.set(R+Math.sin(U)*2.1,v+1.1,I+Math.cos(U)*2.1),z.rotation.y=U,n.add(H,z),s.cyl(3,4.5,R,v-.5,I,null,A[C],"house")}let w=ut(7030320);for(let C=0;C<4;C++){let L=pt(new B(new Rt(.15,.15,1.8,6),w));L.position.set(Sn.x,v+.25,Sn.z),L.rotation.set(Math.PI/2-.3,C/4*Math.PI,0),n.add(L)}let x=new B(new Yt(.6,1.6,6),new _e({color:16752704,transparent:!0,opacity:.9}));x.position.set(Sn.x,v+.9,Sn.z);let S=new Ye(16751168,30,18);S.position.set(Sn.x,v+1.5,Sn.z),n.add(x,S);let g=ut(12884588);for(let[C,L]of[[4,-3],[4.9,-2.2],[-3,4]]){let R=pt(new B(new dt(1.1,1.1,1.1),g));R.position.set(Sn.x+C,v+.55,Sn.z+L),R.rotation.y=C,n.add(R)}let M=new B(new vn(3,2),ut(10117040));M.rotation.x=-Math.PI/2,M.position.set(Sn.x-3.5,v+.05,Sn.z-2),n.add(M);let T=[];for(let[C,L,R,I]of Fh){let H=new B(new en(R*.5,16),new _e({color:16773584,transparent:!0,opacity:.12,depthWrite:!1}));H.rotation.x=-Math.PI/2,H.position.set(C,I+6.6,L),n.add(H),T.push(H)}return{group:n,update(C,L){T.forEach((R,I)=>{R.material.opacity=.08+Math.sin(L*2+I)*.05}),x.scale.set(1+Math.sin(L*13)*.1,1+Math.sin(L*9)*.18,1+Math.cos(L*11)*.1),S.intensity=26+Math.sin(L*15)*6}}}};var yr=0,jn=-Ws,Zi={x:yr+47,z:jn-95,r:190,h:75},po={shrine:{name:"\u6C37\u306E\u7960",x:yr-120,z:jn+25,r:12,h:12},pond:{name:"\u51CD\u3063\u305F\u6C60",x:yr+152,z:jn+114,r:20},summit:{name:"\u767D\u5DBA\u306E\u9802",x:Zi.x,z:Zi.z,r:10},hut:{name:"\u5C71\u5C0F\u5C4B",x:yr-5,z:jn+230,r:14,h:8},monument:{name:"\u96EA\u539F\u306E\u77F3\u7891",x:yr+230,z:jn-60,r:12,h:10}},dn=po.shrine,Hn=po.pond,Ge=po.hut,$i=po.monument,Dc=ke.north,Rf=[[[Dc,jn+420],[Dc,jn+250],[Hn.x-24,Hn.z+16]],[[Dc,jn+240],[Ge.x-10,Ge.z]],[[Dc,jn+250],[-60,jn+120],[dn.x+14,dn.z+4]],[[-60,jn+120],[0,jn+20],[Zi.x-8,Zi.z+20]],[[Hn.x-24,Hn.z+16],[200,jn+40],[$i.x-10,$i.z+12]]],_s={snow:new tt("#f4f8fb"),snowShade:new tt("#d8e5ef"),rock:new tt("#8e96a3"),rockDark:new tt("#6f7784"),beach:new tt("#d9d4c8"),beachDeep:new tt("#b9b4a8"),path:new tt("#bccbd8"),stone:new tt("#b9c3cf")},Af={id:"snow",name:"\u767D\u5DBA\u306E\u96EA\u539F",cx:yr,cz:jn,edge:Wn(420,[26,.4,16,2.8,12,1.1]),maxR:480,places:po,paths:Rf,sanctuaries:[],land(i,t){let e=4+Wt(i/40,t/40)*6+Wt(i/150+3,t/150)*9,n=Tt(Zi.r,0,Math.hypot(i-Zi.x,t-Zi.z));e+=Zi.h*n+(Wt(i/9,t/9)-.5)*4*n;for(let s of[dn,Ge,$i])e=te(e,s.h,Tt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=te(e,-1.5,Tt(Hn.r+22,Hn.r-3,Math.hypot(i-Hn.x,t-Hn.z))),e},color(i,t,e,n,s){if(e<1.5)return s.copy(_s.beachDeep).lerp(_s.beach,Tt(-2,1.2,e));s.copy(_s.snowShade).lerp(_s.snow,Wt(i/10,t/10)),s.lerp(_s.beach,Tt(2.2,1.5,e));let r=Ae(i,t,Rf);return r<2.2&&s.lerp(_s.path,Tt(2.2,1.2,r)),Math.hypot(i-dn.x,t-dn.z)<dn.r-3&&s.lerp(_s.stone,.7),n>.7&&s.lerp(Wt(i/4,t/4)>.5?_s.rock:_s.rockDark,Tt(.7,1,n)),s},nature:{trees:{style:"pine",count:850,leafColors:[3104074,3828562,2641983],trunkColor:5914672,snowy:!0,maxH:55,maxSlope:.6},rocks:210,rockColor:9344675,avoid:Object.values(po).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E6\u30AD\u30C0\u30DE",tint:13624565,mult:2.8,count:34},ishimori:{name:"\u30B3\u30AA\u30EA\u30E2\u30EA",tint:10467536,mult:2.8,count:11}},decorate(i,t,e){let n=new yt,s=an(n,i),r=new bt({color:12578559,emissive:5224160,emissiveIntensity:.6,flatShading:!0,transparent:!0,opacity:.85}),o=Hn.r+6,a=new B(new en(o,32),new bt({color:14217983,roughness:.1,metalness:.1,transparent:!0,opacity:.88}));a.rotation.x=-Math.PI/2,a.position.set(Hn.x,Kn+.12,Hn.z),a.receiveShadow=!0,n.add(a),i.push({box:new he(new F(Hn.x-o,-3,Hn.z-o),new F(Hn.x+o,Kn+.12,Hn.z+o)),cyl:{x:Hn.x,z:Hn.z,r:o},color:14217983,kind:"ice"});let c=dn.h,l=ut(12174287);s.cyl(5.5,.6,dn.x,c-.3,dn.z,l,12174287,"part",12);for(let z=0;z<4;z++){let U=Math.PI/4+z/4*Math.PI*2;s.cyl(.5,5,dn.x+Math.cos(U)*3.8,c+.3,dn.z+Math.sin(U)*3.8,l,12174287,"part",8)}let h=pt(new B(new Yt(5.8,3,4),ut(5929156)));h.position.set(dn.x,c+6.8,dn.z),h.rotation.y=Math.PI/4,n.add(h);let u=new B(new on(1,0),r);u.scale.y=1.7,u.position.set(dn.x,c+2.8,dn.z),n.add(u);let f=new Ye(10479871,30,25);f.position.set(dn.x,c+3,dn.z),n.add(f);let d=new Yt(.8,1,5),y=(z,U,N)=>{let G=t(z,U),X=new B(d,r);X.scale.set(N*.8,N*4,N*.8),X.position.set(z,G+N*2-.3,U),X.rotation.set((e()-.5)*.4,e()*3,(e()-.5)*.4),n.add(X),s.cyl(.7*N,N*4,z,G-.5,U,null,12578559)};for(let z=0;z<10;z++){let U=e()*Math.PI*2,N=dn.r+2+e()*8;y(dn.x+Math.cos(U)*N,dn.z+Math.sin(U)*N,.7+e()*1.1)}y(Zi.x,Zi.z-4,2.6);let _=jo({w:8,d:6.5,wall:9067067,roof:16054523,trim:5913124});_.position.set(Ge.x,Ge.h,Ge.z),_.rotation.y=-Math.PI/2,n.add(_);let m=new B(new dt(8.4,7,6.9));m.position.set(Ge.x,Ge.h+3.5,Ge.z),m.rotation.y=-Math.PI/2,m.updateMatrixWorld(!0),i.push({box:new he().setFromObject(m),color:9067067,kind:"house"});let p=14,b=new Float32Array(p*3),E=new F(Ge.x+1.3,Ge.h+7.8,Ge.z+2);for(let z=0;z<p;z++)b[z*3]=E.x,b[z*3+1]=E.y+z/p*8,b[z*3+2]=E.z;let v=new ae;v.setAttribute("position",new pe(b,3));let A=new tn(v,new qe({color:14212580,size:1.1,transparent:!0,opacity:.28,depthWrite:!1}));A.frustumCulled=!1,n.add(A);let w=ut(16317437),x=pt(new B(new ie(1,12,10),w));x.position.set(Ge.x-7,Ge.h+.9,Ge.z+5);let S=pt(new B(new ie(.65,12,10),w));S.position.set(Ge.x-7,Ge.h+2.3,Ge.z+5);let g=new B(new Yt(.1,.5,6),ut(15764028));g.rotation.z=Math.PI/2,g.position.set(Ge.x-7.7,Ge.h+2.3,Ge.z+5),n.add(x,S,g),s.cyl(1,2.8,Ge.x-7,Ge.h-.5,Ge.z+5,null,16317437);let M=$i.h,T=pt(new B(new dt(3.2,7,1.2),ut(8357780)));T.position.set($i.x,M+3.3,$i.z),T.rotation.y=.4,n.add(T),s.cyl(2,7,$i.x,M-.5,$i.z,null,8357780);let C=new bt({color:12578559,emissive:5224160,emissiveIntensity:1.3});for(let z=0;z<5;z++){let U=new B(new dt(z%2?1.6:.9,.18,.05),C);U.position.set((z%2?0:.2)-.1,1.8-z*.7,.62),T.add(U)}for(let z=0;z<6;z++){let U=z/6*Math.PI*2,N=pt(new B(new Jn(.6,0),ut(9344675)));N.position.set($i.x+Math.cos(U)*4,M+.3,$i.z+Math.sin(U)*4),n.add(N)}let L=700,R=new Float32Array(L*3);for(let z=0;z<L;z++)R[z*3]=(e()-.5)*80,R[z*3+1]=e()*40,R[z*3+2]=(e()-.5)*80;let I=new ae;I.setAttribute("position",new pe(R,3));let H=new tn(I,new qe({color:16777215,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return H.frustumCulled=!1,n.add(H),{group:n,update(z,U,N){u.rotation.y+=z;for(let X=0;X<p;X++){let Q=b[X*3+1]+z*1.2;Q>E.y+8&&(Q=E.y),b[X*3+1]=Q;let q=Q-E.y;b[X*3]=E.x+Math.sin(U*.8+X)*(.3+q*.12)+q*.25,b[X*3+2]=E.z+Math.cos(U*.7+X*1.7)*q*.12}v.attributes.position.needsUpdate=!0;let G=N&&Math.hypot(N.x-yr,N.z-jn)<440;if(H.visible=!!G,!!G){H.position.set(N.x,N.y-5,N.z);for(let X=0;X<L;X++){let Q=R[X*3+1]-z*3;Q<0&&(Q+=40),R[X*3+1]=Q,R[X*3]+=Math.sin(U+X)*z*.5}I.attributes.position.needsUpdate=!0}}}}};var Le=-Ws,wi=0,Ni={r:200,h:90,crater:22},ta={crater:{name:"\u7114\u306E\u706B\u53E3",x:Le,z:wi,r:22},obsidian:{name:"\u9ED2\u66DC\u306E\u539F",x:Le+133,z:wi+183,r:26,h:4},spring:{name:"\u6E6F\u3051\u3080\u308A\u306E\u6E29\u6CC9",x:Le+240,z:wi-120,r:12,h:4},forge:{name:"\u935B\u51B6\u5834\u306E\u8DE1",x:Le+232,z:wi+62,r:14,h:5}},Ji=ta.obsidian,Se=ta.spring,Pe=ta.forge,Qo=ke.west,Cf=[[[Le+420,Qo],[Le+262,Qo+2],[Pe.x-2,Pe.z-16]],[[Le+262,Qo+2],[Le+205,120],[Ji.x+12,Ji.z-22]],[[Le+262,Qo+2],[Le+252,-90],[Se.x,Se.z+15]],[[Le+262,Qo+2],[Le+170,-70],[Le+70,-140],[Le-60,-130],[Le-120,-30],[Le-80,70],[Le+10,70],[Le+40,20],[Le+26,0]]],Pf=[2.2,3.4,4.6],Es={basalt:new tt("#4a4550"),ash:new tt("#6d6570"),rim:new tt("#7a4a40"),sand:new tt("#3d3a40"),sandDeep:new tt("#2e2c32"),path:new tt("#8a7a70"),obsidian:new tt("#2e2a36"),scorch:new tt("#5a3a34"),spring:new tt("#8a8078")},If={id:"volcano",name:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",cx:Le,cz:wi,edge:Wn(420,[20,2.6,18,1.9,10,.2]),maxR:480,places:ta,paths:Cf,sanctuaries:[],land(i,t){let e=3+Wt(i/30,t/30)*4+Wt(i/130,t/130+7)*6,n=Math.hypot(i-Le,t-wi);e+=Ni.h*Tt(Ni.r,Ni.crater,n)+(Wt(i/10,t/10)-.5)*3*Tt(Ni.r,40,n),e=te(e,Ni.h-14,Tt(Ni.crater,Ni.crater-8,n));for(let s of[Ji,Se,Pe])e=te(e,s.h,Tt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=te(e,Se.h-1.2,Tt(Se.r-2,Se.r-6,Math.hypot(i-Se.x,t-Se.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Es.sandDeep).lerp(Es.sand,Tt(-2,1.2,e));s.copy(Es.basalt).lerp(Es.ash,Wt(i/10,t/10));let r=Math.hypot(i-Le,t-wi);s.lerp(Es.rim,Tt(90,30,r)*.8),s.lerp(Es.obsidian,Tt(Ji.r+6,Ji.r-6,Math.hypot(i-Ji.x,t-Ji.z))),s.lerp(Es.spring,Tt(Se.r+4,Se.r-2,Math.hypot(i-Se.x,t-Se.z))*.7);let o=Ae(i,t,Cf);o<2.4&&s.lerp(Es.path,Tt(2.4,1.4,o));let a=Math.atan2(t-wi,i-Le);for(let c of Pf){let l=Math.abs(Math.atan2(Math.sin(a-c),Math.cos(a-c)))*r;r>Ni.crater&&r<170&&l<5&&s.lerp(Es.scorch,Tt(5,2.5,l))}return s},nature:{trees:{style:"dead",count:250,trunkColor:3813424,maxH:30,maxSlope:.5},rocks:350,rockColor:4867408,grass:{count:2100,color:9075280},avoid:Object.values(ta).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30D2\u30C0\u30DE",tint:14246986,mult:3.5,count:34},ishimori:{name:"\u30E8\u30A6\u30AC\u30F3\u30E2\u30EA",tint:5917256,mult:3.5,count:12}},decorate(i,t,e){let n=new yt,s=an(n,i),r=new Gn({uniforms:{time:{value:0}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorld;
        void main() {
          vUv = uv;
          vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
        }`,fragmentShader:`
        uniform float time;
        varying vec2 vUv;
        varying vec3 vWorld;
        void main() {
          float n = sin(vWorld.x * 0.6 + time * 0.8) * sin(vWorld.z * 0.5 - time * 0.6) + sin(vUv.y * 12.0 - time * 1.5) * 0.5;
          vec3 col = mix(vec3(1.0, 0.35, 0.05), vec3(1.0, 0.85, 0.3), smoothstep(-0.2, 1.0, n));
          col = mix(col, vec3(0.35, 0.08, 0.03), smoothstep(0.55, 1.0, sin(vWorld.x * 1.7 + vWorld.z * 1.3) * 0.5 + 0.5) * 0.5);
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`}),o=Ni.h-13.2,a=new B(new en(Ni.crater-4,32),r);a.rotation.x=-Math.PI/2,a.position.set(Le,o,wi),n.add(a);let c=new Ye(16742960,200,90);c.position.set(Le,o+6,wi),n.add(c);for(let U of Pf){let N=[],G=[],X=[];for(let Z=0;Z<=70;Z++){let it=Ni.crater+1+Z*2.2,_t=U+Math.sin(Z*.35+U*3)*.08,Et=2.2+Math.sin(Z*.5)*.7,kt=Le+Math.cos(_t)*it,qt=wi+Math.sin(_t)*it,St=-Math.sin(_t),Ot=Math.cos(_t);for(let V of[-1,1]){let ct=kt+St*V*Et,et=qt+Ot*V*Et;N.push(ct,t(ct,et)+.15,et),G.push(V<0?0:1,Z/6)}if(Z>0){let V=(Z-1)*2;X.push(V,V+1,V+2,V+1,V+3,V+2)}}let q=new ae;q.setAttribute("position",new me(N,3)),q.setAttribute("uv",new me(G,2)),q.setIndex(X),n.add(new B(q,r))}let l=new bt({color:1907494,roughness:.15,metalness:.4,flatShading:!0});for(let U=0;U<26;U++){let N=e()*Math.PI*2,G=e()*Ji.r,X=Ji.x+Math.cos(N)*G,Q=Ji.z+Math.sin(N)*G,q=t(X,Q),Z=.8+e()*1.8,it=pt(new B(new Yt(.9*Z,4*Z,5),l));it.position.set(X,q+1.6*Z,Q),it.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5),n.add(it),s.cyl(.8*Z,3.5*Z,X,q-.5,Q,null,1907494)}let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d"),f=u.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,64,64);let d=new Ei(h),y=(U,N,G,X,Q)=>{let q=new Float32Array(U*3),Z=new Float32Array(U),it=new ae;it.setAttribute("position",new pe(q,3));let _t=new tn(it,new qe({color:X,size:G,map:d,transparent:!0,opacity:Q,depthWrite:!1}));return _t.frustumCulled=!1,n.add(_t),{pos:q,life:Z,geo:it,count:U,spread:N}},_=y(110,22,14,9076872,.45),m=U=>{_.pos[U*3]=Le+(e()-.5)*_.spread,_.pos[U*3+1]=o+2,_.pos[U*3+2]=wi+(e()-.5)*_.spread,_.life[U]=0};for(let U=0;U<_.count;U++)m(U),_.life[U]=e()*8,_.pos[U*3+1]+=_.life[U]*6;let p=new B(new en(Se.r-2.5,28),new bt({color:10479840,emissive:4171936,emissiveIntensity:.25,transparent:!0,opacity:.85,roughness:.15}));p.rotation.x=-Math.PI/2,p.position.set(Se.x,Se.h-.5,Se.z),n.add(p);for(let U=0;U<16;U++){let N=U/16*Math.PI*2,G=.8+e()*.7,X=pt(new B(new Jn(G,0),ut(7169392)));X.position.set(Se.x+Math.cos(N)*(Se.r-1.5),Se.h+G*.3,Se.z+Math.sin(N)*(Se.r-1.5)),n.add(X)}let b=y(50,Se.r*1.2,4,16777215,.35),E=U=>{b.pos[U*3]=Se.x+(e()-.5)*b.spread,b.pos[U*3+1]=Se.h-.3,b.pos[U*3+2]=Se.z+(e()-.5)*b.spread,b.life[U]=0};for(let U=0;U<b.count;U++)E(U),b.life[U]=e()*3,b.pos[U*3+1]+=b.life[U]*1.5;let v=ut(7030320),A=new yt,w=pt(new B(new dt(.2,2.2,.2),v));w.position.y=1.1;let x=new B(new dt(1.6,.8,.12),ut(12884588));x.position.y=2,A.add(w,x),A.position.set(Se.x,Se.h,Se.z+Se.r+2),n.add(A);let S=Pe.h,g=ut(7169392);s.box(12,3.5,1.2,Pe.x,S-.3,Pe.z-6,g,7169392),s.box(1.2,2.2,8,Pe.x-6,S-.3,Pe.z-1.6,g,7169392),s.box(1.2,1.2,5,Pe.x+6,S-.3,Pe.z-3,g,7169392),s.box(4,4.2,3,Pe.x+2,S-.3,Pe.z-3.8,ut(5917256),5917256);let M=new B(new vn(1.8,1.4),new _e({color:16742960}));M.position.set(Pe.x+2,S+1.2,Pe.z-2.28),n.add(M);let T=pt(new B(new Rt(.8,1,5,8),ut(5917256)));T.position.set(Pe.x+2,S+6,Pe.z-4.2),n.add(T);let C=new Ye(16747072,25,14);C.position.set(Pe.x+2,S+1.5,Pe.z-1),n.add(C);let L=ut(3816004,{metalness:.6,roughness:.4}),R=pt(new B(new dt(.8,.9,.6),L));R.position.set(Pe.x-2,S+.45,Pe.z+1);let I=pt(new B(new dt(1.8,.45,.7),L));I.position.set(Pe.x-2,S+1.1,Pe.z+1);let H=new B(new Yt(.3,.8,6),L);H.rotation.z=Math.PI/2,H.position.set(Pe.x-3.2,S+1.1,Pe.z+1),n.add(R,I,H),s.cyl(1,1.4,Pe.x-2,S-.3,Pe.z+1,null,3816004);let z=ut(12107976,{metalness:.6});for(let U=0;U<4;U++){let N=new B(new dt(.1,1.4,.3),z);N.position.set(Pe.x+4+U*.6,S+.6,Pe.z+3+U%2*.5),N.rotation.set(0,U,(e()-.5)*.5),n.add(N)}return{group:n,update(U,N){r.uniforms.time.value=N,c.intensity=190+Math.sin(N*3)*40,C.intensity=22+Math.sin(N*12)*5;for(let G=0;G<_.count;G++)_.life[G]+=U,_.pos[G*3+1]+=U*6,_.pos[G*3]+=U*2,_.life[G]>8&&m(G);_.geo.attributes.position.needsUpdate=!0;for(let G=0;G<b.count;G++)b.life[G]+=U,b.pos[G*3+1]+=U*1.5,b.pos[G*3]+=Math.sin(N+G)*U*.3,b.life[G]>3&&E(G);b.geo.attributes.position.needsUpdate=!0}}}};var qs=vi,Ys=-vi,ea={garden:{name:"\u5927\u8F2A\u306E\u82B1\u7551",x:qs+40,z:Ys-30,r:34},tower:{name:"\u98A8\u9234\u306E\u5854",x:qs+170,z:Ys+120,r:12,h:12},lake:{name:"\u82B1\u306E\u6E56",x:qs-275,z:Ys+180,r:30}},Ki=ea.garden,sn=ea.tower,mo=ea.lake,Lf=[[[330,-330],[qs-140,Ys+110],[Ki.x-30,Ki.z+20]],[[qs-140,Ys+110],[mo.x+20,mo.z-30]],[[Ki.x-30,Ki.z+20],[qs+110,Ys+90],[sn.x-12,sn.z]]],Ms={grass:new tt("#8fd46b"),grassDark:new tt("#6fb850"),pink:new tt("#f4b8cf"),yellow:new tt("#f4e08a"),lilac:new tt("#c9b4ec"),sand:new tt("#efdcae"),path:new tt("#d8b882")},OE=new tt,Hf={id:"flowers",name:"\u82B1\u51A0\u306E\u4E18\u9675",cx:qs,cz:Ys,edge:Wn(400,[26,.9,14,2.2,10,.4]),maxR:460,places:ea,paths:Lf,sanctuaries:[],land(i,t){let e=5+Wt(i/50,t/50)*8+Wt(i/180+11,t/180)*12;return e=te(e,sn.h,Tt(sn.r+16,sn.r,Math.hypot(i-sn.x,t-sn.z))),e=te(e,-3,Tt(mo.r+14,mo.r-4,Math.hypot(i-mo.x,t-mo.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Ms.sand);s.copy(Ms.grassDark).lerp(Ms.grass,Wt(i/9,t/9));let r=Wt(i/22+3,t/22),o=Wt(i/30-7,t/30+2),a=r>.62?Ms.pink:o>.64?Ms.yellow:o<.32?Ms.lilac:null;a&&s.lerp(a,.55),Math.hypot(i-Ki.x,t-Ki.z)<Ki.r&&s.lerp(OE.copy(Ms.pink).lerp(Ms.yellow,Wt(i/6,t/6)),.5);let c=Ae(i,t,Lf);return c<2.4&&s.lerp(Ms.path,Tt(2.4,1.4,c)),s},nature:{trees:{style:"round",count:420,leafColors:[15902402,13150448,10475115,16765152],accentChance:.25},rocks:60,rockColor:13222072,grass:{count:8e3,color:8176218},flowers:{count:11e3,colors:[16748464,16766044,12166911,16777215,16738922,16754912]},avoid:Object.values(ea).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CF\u30CA\u30C0\u30DE",tint:15902402,mult:1.3,count:32},ishimori:{name:"\u30C4\u30BF\u30A4\u30EF",tint:9416832,mult:1.3,count:9}},decorate(i,t,e){let n=new yt,s=an(n,i),r=ut(6270538),o=[16748464,16766044,12166911,16738922,16777215],a=[];for(let v=0;v<12;v++){let A=e()*Math.PI*2,w=e()*Ki.r,x=Ki.x+Math.cos(A)*w,S=Ki.z+Math.sin(A)*w,g=t(x,S),M=7+e()*8,T=pt(new B(new Rt(.35,.5,M,7),r));T.position.set(x,g+M/2-.3,S),n.add(T),s.cyl(.6,M,x,g-.5,S,null,6270538,"tree");let C=pt(new B(new ie(1,8,6),r));C.scale.set(1.6,.2,.7),C.position.set(x+1,g+M*.4,S),C.rotation.z=-.4,n.add(C);let L=new yt;L.position.set(x,g+M,S),L.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5);let R=ut(o[v%o.length]),I=1.6+e()*1.2;for(let z=0;z<7;z++){let U=pt(new B(new ie(1,10,6),R)),N=z/7*Math.PI*2;U.scale.set(I,.25,I*.55),U.position.set(Math.cos(N)*I,0,Math.sin(N)*I),U.rotation.y=-N,L.add(U)}let H=new B(new Rt(I*.55,I*.5,.5,12),new bt({color:16762938,emissive:9067008,emissiveIntensity:.4}));L.add(H),n.add(L),a.push({head:L,p:e()*10})}let c=ut(16183524);s.cyl(2.8,16,sn.x,sn.h-.5,sn.z,c,16183524,"part",10);let l=pt(new B(new Rt(3.6,3.6,.6,10),c));l.position.set(sn.x,sn.h+15.8,sn.z),n.add(l);for(let v=0;v<4;v++){let A=v/4*Math.PI*2+Math.PI/4,w=pt(new B(new dt(.4,4,.4),c));w.position.set(sn.x+Math.cos(A)*3,sn.h+18,sn.z+Math.sin(A)*3),n.add(w)}let h=pt(new B(new Yt(4.4,4,10),ut(2864544)));h.position.set(sn.x,sn.h+22,sn.z),n.add(h);let u=[],f=[10479871,16759008,16773544,13154559];for(let v=0;v<6;v++){let A=v/6*Math.PI*2,w=new yt;w.position.set(sn.x+Math.cos(A)*3.8,sn.h+19.8,sn.z+Math.sin(A)*3.8);let x=new B(new ie(.35,10,8,0,Math.PI*2,0,Math.PI/2),new bt({color:f[v%4],transparent:!0,opacity:.8,emissive:f[v%4],emissiveIntensity:.3}));x.position.y=-.8;let S=new B(new vn(.25,.9),ut(16777215,{side:le}));S.position.y=-1.6,w.add(x,S),n.add(w),u.push({pivot:w,p:v})}let d=90,y=new Float32Array(d*3),_=new Float32Array(d*3),m=[],p=[16748464,16766044,12166911,10479871,16777215].map(v=>new tt(v));for(let v=0;v<d;v++){let A=e()*Math.PI*2,w=e()*260,x=qs+Math.cos(A)*w,S=Ys+Math.sin(A)*w;m.push({x,z:S,y:Math.max(t(x,S),0)+1.5+e()*3,p:e()*10});let g=p[v%p.length];_[v*3]=g.r,_[v*3+1]=g.g,_[v*3+2]=g.b}let b=new ae;b.setAttribute("position",new pe(y,3)),b.setAttribute("color",new pe(_,3));let E=new tn(b,new qe({size:.45,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1}));return E.frustumCulled=!1,n.add(E),{group:n,update(v,A){for(let{head:w,p:x}of a)w.rotation.z=Math.sin(A*.8+x)*.08;for(let{pivot:w,p:x}of u)w.rotation.x=Math.sin(A*2.2+x)*.25,w.rotation.z=Math.cos(A*1.7+x)*.2;for(let w=0;w<d;w++){let x=m[w];y[w*3]=x.x+Math.sin(A*.5+x.p)*6,y[w*3+1]=x.y+Math.abs(Math.sin(A*6+x.p*3))*.5,y[w*3+2]=x.z+Math.cos(A*.4+x.p)*6}b.attributes.position.needsUpdate=!0}}}};var _r=vi,Er=vi,na={pond:{name:"\u6C88\u3093\u3060\u7960",x:_r+60,z:Er+40,r:45},reeds:{name:"\u8466\u306E\u8FF7\u3044\u9053",x:_r-120,z:Er+170,r:40}},be=na.pond,kh={z:be.z,mid:be.x-27},Df=10,Bh=[[[360,360],[_r-60,Er+30],[be.x-52,be.z]],[[_r-60,Er+30],[na.reeds.x+20,na.reeds.z-30]]],go={moss:new tt("#7a9a5a"),dark:new tt("#5f7a4a"),mud:new tt("#6b5a44"),shallow:new tt("#5a6a4a"),path:new tt("#9a8060")},Uf=(i,t)=>Tt(.6,.68,Wt(i/35+50,t/35)),zf={id:"marsh",name:"\u9727\u306E\u6E7F\u539F",cx:_r,cz:Er,edge:Wn(400,[24,1.7,16,.6,9,2.9]),maxR:460,places:na,paths:Bh,sanctuaries:[],land(i,t){let e=2+Wt(i/40,t/40)*2.2+Wt(i/150+5,t/150)*2.5,n=Tt(8,3,Ae(i,t,Bh));e=te(e,-1.6,Uf(i,t)*(1-n));let s=Math.hypot(i-be.x,t-be.z);return e=te(e,-2.2,Tt(be.r+10,be.r-5,s)),e=te(e,3,Tt(Df+4,Df-2,s)),e},color(i,t,e,n,s){if(e<1.7)return s.copy(go.mud).lerp(go.shallow,Tt(-2,1.5,e));s.copy(go.dark).lerp(go.moss,Wt(i/8,t/8)),s.lerp(go.mud,Uf(i,t)*.5+(Wt(i/5,t/5)>.7?.3:0));let r=Ae(i,t,Bh);return r<2.4&&s.lerp(go.path,Tt(2.4,1.4,r)),s},nature:{trees:{style:"round",count:300,leafColors:[4876858,3824180,5929540],trunkColor:4864554,minH:2.2},rocks:50,rockColor:8026730,grass:{count:9e3,color:8030794},flowers:{count:900,colors:[16777215,13150448,14739711]},avoid:Object.values(na).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CC\u30DE\u30C0\u30DE",tint:6982250,mult:1.9,count:32},ishimori:{name:"\u30C9\u30ED\u30A4\u30EF",tint:7035460,mult:1.9,count:10}},decorate(i,t,e){let n=new yt,s=an(n,i),r=ut(9079418),o=ut(6982218),a=t(be.x,be.z),c=new yt;c.position.set(be.x-6,a-.6,be.z),c.rotation.set(0,Math.PI/2,.12);for(let I of[-1,1]){let H=pt(new B(new Rt(.4,.5,6,8),r));H.position.set(I*2.4,3,0),c.add(H)}let l=pt(new B(new dt(6.6,.6,.8),r));l.position.y=6.1;let h=pt(new B(new dt(5.4,.4,.6),r));h.position.y=5.1,c.add(l,h),n.add(c),s.cyl(.5,6,be.x-6,a-1,be.z-2.4,null,9079418),s.cyl(.5,6,be.x-6,a-1,be.z+2.4,null,9079418);let u=new yt,f=pt(new B(new dt(4,.6,3.4),r));f.position.y=.3;let d=pt(new B(new dt(3,2.6,2.4),ut(5914672)));d.position.y=1.9;let y=pt(new B(new Yt(3,1.6,4),ut(3816004)));y.position.y=4,y.rotation.y=Math.PI/4;let _=new B(new Yt(2.4,.8,4),o);_.position.y=4.35,_.rotation.y=Math.PI/4;let m=new B(new ie(.35,12,8),new bt({color:13697008,emissive:7332032,emissiveIntensity:1.4}));m.position.set(-1.25,1.7,0),u.add(f,d,y,_,m),u.position.set(be.x+3,a,be.z),n.add(u),s.box(4,4.5,3.4,be.x+3,a-.5,be.z,null,5914672);let p=new bt({color:16773296,emissive:16762976,emissiveIntensity:1.2}),b=[[be.x-2,be.z-5],[be.x-2,be.z+5],[be.x-32,be.z-5],[be.x-32,be.z+5]];for(let[I,H]of b){let z=Math.max(t(I,H),-.2),U=new yt,N=pt(new B(new Rt(.25,.35,1.8,6),r));N.position.y=.9;let G=new B(new dt(.7,.6,.7),p);G.position.y=2.1;let X=pt(new B(new Yt(.7,.6,4),r));X.position.y=2.7,X.rotation.y=Math.PI/4,U.add(N,G,X),U.position.set(I,z,H),n.add(U)}let E=new Ye(11075552,30,30);E.position.set(be.x,a+3,be.z),n.add(E);let v=cn(new en(1,10,.3,Math.PI*2-.6).rotateX(-Math.PI/2),ut(5212735,{side:le}),700);v.mesh.castShadow=!1;let A=cn(new Yt(.35,.5,6),ut(16754888),120),w=0;for(let I=0;w<700&&I<2e4;I++){let H=_r+(e()-.5)*700,z=Er+(e()-.5)*700,U=t(H,z);if(U>-.6||U<-2.4)continue;let N=.5+e()*.9;v.add(H,.05,z,N,1,N,0,e()*6,0),e()<.15&&A.add(H+.2,.3,z,1,1,1,Math.PI,0,0),w++}n.add(v.finish(),A.finish());let x=document.createElement("canvas");x.width=x.height=64;let S=x.getContext("2d"),g=S.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=g,S.fillRect(0,0,64,64);let M=70,T=new Float32Array(M*3),C=Array.from({length:M},()=>({x:(e()-.5)*140,z:(e()-.5)*140,y:.5+e()*3,v:.5+e()})),L=new ae;L.setAttribute("position",new pe(T,3));let R=new tn(L,new qe({color:15266028,size:22,map:new Ei(x),transparent:!0,opacity:.22,depthWrite:!1}));return R.frustumCulled=!1,n.add(R),{group:n,update(I,H,z){m.position.y=1.7+Math.sin(H*1.8)*.12;let U=z&&Math.hypot(z.x-_r,z.z-Er)<420;if(R.visible=!!U,!!U){for(let N=0;N<M;N++){let G=C[N];G.x+=G.v*I*1.5,G.x>70&&(G.x-=140),T[N*3]=z.x+G.x,T[N*3+1]=Math.max(0,z.y-2)+G.y,T[N*3+2]=z.z+G.z}L.attributes.position.needsUpdate=!0}}}}};var oi=-vi,ai=vi,FE=[[oi-330,ai-150],[oi-120,ai-60],[oi,ai-20],[oi+150,ai+40],[oi+320,ai+110]],Vh={x:oi,z:ai-20},Gh={gorge:{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",x:oi,z:ai-20,r:20},shrine:{name:"\u7D05\u8449\u306E\u793E",x:oi-150,z:ai+150,r:16,h:12}},fn=Gh.shrine,Nf=[[[-330,330],[oi+30,ai-110],[oi,ai-62]],[[oi,ai+22],[oi-70,ai+100],[fn.x+14,fn.z-6]]],$s={gold:new tt("#c0a450"),dry:new tt("#a89048"),leaves:new tt("#d0703a"),red:new tt("#c04a30"),rock:new tt("#a06c4a"),rockDark:new tt("#7c5038"),path:new tt("#c8a070")},Of={id:"canyon",name:"\u7D05\u8449\u306E\u6E13\u8C37",cx:oi,cz:ai,edge:Wn(400,[22,2.4,16,1.3,10,.7]),maxR:460,places:Gh,paths:Nf,sanctuaries:[],land(i,t){let e=9+Wt(i/45,t/45)*6+Wt(i/170+3,t/170)*10;return e=te(e,fn.h,Tt(fn.r+14,fn.r,Math.hypot(i-fn.x,t-fn.z))),e=te(e,-2.5,Tt(34,9,lo(i,t,FE))),e},color(i,t,e,n,s){if(e<1.7)return s.copy($s.rockDark);s.copy($s.dry).lerp($s.gold,Wt(i/9,t/9));let r=Wt(i/16+8,t/16);r>.55&&s.lerp(r>.66?$s.red:$s.leaves,Tt(.55,.7,r)*.8),n>.6&&s.lerp(Math.floor(e/3)%2?$s.rock:$s.rockDark,Tt(.6,.9,n));let o=Ae(i,t,Nf);return o<2.4&&s.lerp($s.path,Tt(2.4,1.4,o)),s},nature:{trees:{style:"round",count:520,leafColors:[14704682,15769648,13122090,15253568],trunkColor:5913128},rocks:140,rockColor:10119754,grass:{count:6500,color:11573834},flowers:{count:1500,colors:[15769648,16766044,13122090]},avoid:[...Object.values(Gh).map(i=>[i.x,i.z,i.r+4])]},enemies:{kumodama:{name:"\u30E2\u30DF\u30B8\u30C0\u30DE",tint:14707258,mult:2.5,count:32},ishimori:{name:"\u30AB\u30EC\u30A4\u30EF",tint:10119754,mult:2.5,count:10}},decorate(i,t,e){let n=new yt,s=an(n,i),r=fn.h,o=ut(14172202),a=ut(2761254),c=new yt;for(let T of[-1,1]){let C=pt(new B(new Rt(.45,.5,7,10),o));C.position.set(T*3,3.5,0),c.add(C)}let l=pt(new B(new dt(8.6,.7,1),a));l.position.y=7.3;let h=pt(new B(new dt(7.8,.4,.8),o));h.position.y=6.8;let u=pt(new B(new dt(7.4,.4,.5),o));u.position.y=5.6,c.add(l,h,u),c.position.set(fn.x+10,r,fn.z-4),c.rotation.y=Math.atan2(-10,4)+Math.PI/2,n.add(c),s.cyl(.5,7,fn.x+10+Math.cos(c.rotation.y)*3,r-.5,fn.z-4-Math.sin(c.rotation.y)*3,null,14172202),s.cyl(.5,7,fn.x+10-Math.cos(c.rotation.y)*3,r-.5,fn.z-4+Math.sin(c.rotation.y)*3,null,14172202);let f=new yt,d=pt(new B(new dt(7,.8,6),ut(11050124)));d.position.y=.4;let y=pt(new B(new dt(5.2,3.2,4.4),ut(16050904)));y.position.y=2.4;let _=pt(new B(new dt(5.6,.4,4.8),o));_.position.y=4.1;let m=pt(new B(new Yt(5.2,2.6,4),ut(3814464)));m.position.y=5.5,m.rotation.y=Math.PI/4,m.scale.z=.8;let p=new B(new ie(.35,10,8),ut(16040539,{metalness:.6,roughness:.3}));p.position.set(0,3.5,2.4),f.add(d,y,_,m,p),f.position.set(fn.x,r,fn.z),f.rotation.y=Math.atan2(10,-4),n.add(f),s.cyl(3.6,6,fn.x,r-.5,fn.z,null,14172202,"house");let b=ut(11050124),E=new bt({color:16773296,emissive:16752704,emissiveIntensity:1.2});for(let[T,C]of[[6,-9],[9,2],[-4,-9]]){let L=new yt,R=pt(new B(new Rt(.25,.35,1.6,6),b));R.position.y=.8;let I=new B(new dt(.6,.5,.6),E);I.position.y=1.85;let H=pt(new B(new Yt(.6,.5,4),b));H.position.y=2.35,L.add(R,I,H),L.position.set(fn.x+T,r,fn.z+C),n.add(L)}let v=160,A=new Float32Array(v*3),w=new Float32Array(v*3),x=[14704682,15769648,13122090,15253568].map(T=>new tt(T)),S=Array.from({length:v},(T,C)=>{let L=x[C%4];return w[C*3]=L.r,w[C*3+1]=L.g,w[C*3+2]=L.b,{x:(e()-.5)*70,y:e()*22,z:(e()-.5)*70,p:e()*10}}),g=new ae;g.setAttribute("position",new pe(A,3)),g.setAttribute("color",new pe(w,3));let M=new tn(g,new qe({size:.4,vertexColors:!0,transparent:!0,depthWrite:!1}));return M.frustumCulled=!1,n.add(M),{group:n,update(T,C,L){p.position.x=Math.sin(C*1.3)*.08;let R=L&&Math.hypot(L.x-oi,L.z-ai)<420;if(M.visible=!!R,!!R){for(let I=0;I<v;I++){let H=S[I];H.y-=T*1.4,H.y<0&&(H.y+=22),A[I*3]=L.x+H.x+Math.sin(C*1.5+H.p)*1.5,A[I*3+1]=L.y+H.y-4,A[I*3+2]=L.z+H.z+Math.cos(C*1.2+H.p)*1.5}g.attributes.position.needsUpdate=!0}}}}};var Mr=-vi,vr=-vi,zc={heart:{name:"\u6C34\u6676\u306E\u5FC3\u81D3",x:Mr-40,z:vr-40,r:18,h:26},pillars:{name:"\u5929\u67F1\u306E\u68EE",x:Mr+130,z:vr+110,r:70}},ln=zc.heart,ia=zc.pillars,Uc=[[[-340,-330],[Mr+180,vr+170],[Mr+40,vr+30],[ln.x+20,ln.z+18]],[[Mr+180,vr+170],[ia.x+30,ia.z-10]]],xo={rock:new tt("#8a82a0"),rockDark:new tt("#6a6282"),moss:new tt("#6a9a6a"),crystal:new tt("#b8b0d8"),path:new tt("#b0a8c0")},Ff={id:"highlands",name:"\u6C34\u6676\u306E\u9AD8\u5730",cx:Mr,cz:vr,edge:Wn(400,[24,.2,14,1.1,11,2.6]),maxR:460,places:zc,paths:Uc,sanctuaries:[],land(i,t){let e=14+Wt(i/60,t/60)*10+Wt(i/200+7,t/200)*14,n=1-Math.abs(Wt(i/40+9,t/40)*2-1);return e+=n*n*6,e=te(e,ln.h,Tt(ln.r+16,ln.r,Math.hypot(i-ln.x,t-ln.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(xo.rockDark);s.copy(xo.moss).lerp(xo.rock,Tt(.35,.65,Wt(i/14,t/14))),Wt(i/7+4,t/7)>.68&&s.lerp(xo.crystal,.6),n>.65&&s.lerp(xo.rockDark,Tt(.65,.95,n));let r=Ae(i,t,Uc);return r<2.4&&s.lerp(xo.path,Tt(2.4,1.4,r)),s},nature:{trees:{style:"pine",count:330,leafColors:[3824202,4876890,3099200],trunkColor:4864564,maxSlope:.55},rocks:180,rockColor:8024208,grass:{count:4500,color:6986346},flowers:{count:900,colors:[13154559,10479871,16777215]},avoid:Object.values(zc).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30B7\u30E7\u30A6\u30C0\u30DE",tint:10467560,mult:3.2,count:32},ishimori:{name:"\u30B9\u30A4\u30B7\u30E7\u30A6\u30E2\u30EA",tint:9074864,mult:3.2,count:11}},decorate(i,t,e){let n=new yt,s=an(n,i),r=ut(9077408),o=ut(6265434),a=ut(3824202);for(let _=0,m=0;_<22&&m<400;m++){let p=e()*Math.PI*2,b=Math.sqrt(e())*(ia.r+60),E=ia.x+Math.cos(p)*b,v=ia.z+Math.sin(p)*b;if(Ae(E,v,Uc)<10)continue;_++;let A=t(E,v),w=22+e()*38,x=3.5+e()*5,S=pt(new B(new Rt(x*.8,x,w,7),r));S.position.set(E,A+w/2-1,v),S.rotation.y=e()*3,n.add(S);let g=pt(new B(new ie(x*.85,8,5,0,Math.PI*2,0,Math.PI/2),o));g.scale.y=.4,g.position.set(E,A+w-1,v),n.add(g);for(let M=0;M<2;M++){let T=pt(new B(new Yt(1.2,4,6),a));T.position.set(E+(e()-.5)*x,A+w+1.5,v+(e()-.5)*x),n.add(T)}s.cyl(x,w,E,A-1,v,null,9077408)}let c=[new bt({color:10479871,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}),new bt({color:13154559,emissive:8413408,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9})],l=c.map(_=>cn(new on(1,0),_,200));for(let _=0,m=0;_<34&&m<600;m++){let p=Mr+(e()-.5)*620,b=vr+(e()-.5)*620,E=t(p,b);if(E<6||Ae(p,b,Uc)<6||Math.hypot(p-ln.x,b-ln.z)<ln.r+6)continue;_++;let v=l[_%2];for(let A=0;A<5;A++){let w=.6+e()*1.4;v.add(p+(e()-.5)*2.5,E+w,b+(e()-.5)*2.5,w*.55,w*2.2,w*.55,(e()-.5)*.7,e()*3,(e()-.5)*.7)}s.cyl(1.8,4,p,E-.5,b,null,_%2?13154559:10479871)}l.forEach(_=>{_.mesh.castShadow=!1,n.add(_.finish())});let h=ln.h,u=ut(11577536);s.cyl(11,1.2,ln.x,h-.6,ln.z,u,11577536,"part",16);for(let _=0;_<6;_++){let m=_/6*Math.PI*2;s.cyl(.8,5,ln.x+Math.cos(m)*12.5,h-.5,ln.z+Math.sin(m)*12.5,u,11577536,"part",6)}let f=new B(new on(3.4,0),new bt({color:14218495,emissive:7321855,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.88}));f.scale.y=1.7,f.position.set(ln.x,h+12,ln.z),n.add(f);let d=[];for(let _=0;_<6;_++){let m=new B(new on(.8,0),c[_%2]);m.scale.y=1.8,n.add(m),d.push(m)}let y=new Ye(10473727,80,60);return y.position.set(ln.x,h+12,ln.z),n.add(y),{group:n,update(_,m){f.rotation.y+=_*.5,f.position.y=h+12+Math.sin(m)*.8,d.forEach((p,b)=>{let E=m*.6+b/d.length*Math.PI*2;p.position.set(ln.x+Math.cos(E)*8,h+11+Math.sin(m*1.3+b)*1.5,ln.z+Math.sin(E)*8),p.rotation.y+=_*2})}}}};var ji=[_f,wf,Sf,Af,If,Hf,zf,Of,Ff],sa=ji.flatMap(i=>Object.values(i.places)),Nc=ji.flatMap(i=>i.sanctuaries),Bf=[{name:"\u5DDD\u306E\u6A4B",axis:"z",at:ke.north,mid:-240,small:!0},{name:"\u6E7F\u539F\u306E\u6728\u9053",axis:"x",at:kh.z,mid:kh.mid,small:!0},{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",axis:"z",at:Vh.x,mid:Vh.z,land:9,arch:-2.5}];function kf(i){let t=new Gn({transparent:!0,depthWrite:!1,fog:!0,uniforms:Ph.merge([vt.fog,{heightMap:{value:null},time:{value:0},shallow:{value:new tt("#6fdcd0")},deep:{value:new tt("#2f73b8")},foam:{value:new tt("#ffffff")},mapHalf:{value:Vn}}]),vertexShader:`
      #include <fog_pars_vertex>
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vec4 mvPosition = viewMatrix * world;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <fog_pars_fragment>
      uniform sampler2D heightMap;
      uniform float time;
      uniform float mapHalf;
      uniform vec3 shallow;
      uniform vec3 deep;
      uniform vec3 foam;
      varying vec3 vWorld;
      void main() {
        vec2 uv = (vWorld.xz + mapHalf) / (mapHalf * 2.0);
        float h = -12.0;
        if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) h = texture2D(heightMap, uv).r * 36.0 - 12.0;
        float depth = max(0.0, ${Kn.toFixed(1)} - h);

        vec3 col = mix(shallow, deep, smoothstep(0.0, 7.0, depth));
        // \u3086\u3089\u3081\u304D
        float w = sin(vWorld.x * 0.35 + time * 1.2 + sin(vWorld.z * 0.2 + time * 0.6) * 2.0) * sin(vWorld.z * 0.3 - time * 0.9);
        col += w * 0.035 * (1.0 - smoothstep(150.0, 500.0, distance(cameraPosition, vWorld)));
        // \u5CB8\u306E\u767D\u6CE2\uFF08\u5BC4\u305B\u3066\u306F\u8FD4\u3059\uFF09
        float edge = depth + sin(time * 1.4 + vWorld.x * 0.15 + vWorld.z * 0.12) * 0.3;
        float f = smoothstep(0.9, 0.1, edge);
        float band = smoothstep(0.08, 0.0, abs(edge - 1.3 - sin(time * 0.9) * 0.3)) * 0.6;
        col = mix(col, foam, clamp(f + band, 0.0, 1.0) * 0.85);
        // \u304D\u3089\u3081\u304D
        // \u9060\u304F\u306E\u304D\u3089\u3081\u304D\u306F\u3061\u3089\u3064\u304F\u306E\u3067\u3001\u30AB\u30E1\u30E9\u304B\u3089\u96E2\u308C\u308B\u307B\u3069\u5F31\u3081\u308B
        float near = 1.0 - smoothstep(60.0, 260.0, distance(cameraPosition, vWorld));
        float s = pow(max(0.0, sin(vWorld.x * 1.3 + time * 2.0) * sin(vWorld.z * 1.1 - time * 1.7)), 60.0);
        col += s * 0.25 * near;

        float alpha = mix(0.5, 0.93, smoothstep(0.0, 4.0, depth));
        gl_FragColor = vec4(col, alpha);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`});t.uniforms.heightMap.value=i;let e=new B(new vn(4e3,4e3),t);return e.rotation.x=-Math.PI/2,e.position.y=Kn,e.renderOrder=1,{mesh:e,update(n){t.uniforms.time.value=n}}}function BE(){return new Gn({transparent:!0,depthWrite:!1,side:le,uniforms:{time:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform float time;
      varying vec2 vUv;
      void main() {
        float s = fract(vUv.y * 5.0 - time * 1.6 + sin(vUv.x * 18.0) * 0.08);
        float streak = step(0.55, fract(vUv.x * 7.0 + sin(vUv.y * 9.0 - time * 3.0) * 0.3));
        vec3 col = mix(vec3(0.62, 0.88, 0.97), vec3(1.0), step(0.62, s) * 0.8 + streak * 0.15);
        float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
        gl_FragColor = vec4(col, 0.88 * edge);
        #include <colorspace_fragment>
      }`})}function Gf(i){let t=new yt,e=Ce.plateau,n=BE(),s=5,r=new ft(-pi.y,pi.x),o=21,a=36,c=40,l=[],h=[],u=[],f=0,d=null;for(let M=0;M<=c;M++){let T=o+(a-o)*M/c,C=e.x+pi.x*T,L=e.z+pi.y*T,R=s*(.6+.4*(M/c)),I=Math.max(i(C,L),Kn-.2)+.35;d&&(f+=Math.hypot(T-d.d,I-d.y)),d={d:T,y:I};for(let H of[-1,1])l.push(C+r.x*H*R/2,I,L+r.y*H*R/2),h.push(H<0?0:1,f/6);if(M>0){let H=(M-1)*2;u.push(H,H+1,H+2,H+1,H+3,H+2)}}let y=new ae;y.setAttribute("position",new me(l,3)),y.setAttribute("uv",new me(h,2)),y.setIndex(u);let _=new B(y,n);_.renderOrder=2,t.add(_);let m=new bt({color:7331024,transparent:!0,opacity:.8,roughness:.2}),p=new B(new en(Wi.r+.6,24),m);p.rotation.x=-Math.PI/2,p.position.set(Wi.x,e.h-.45,Wi.z),t.add(p);let b=new F(e.x+pi.x*33,Kn+.3,e.z+pi.y*33),E=70,v=new Float32Array(E*3),A=new Float32Array(E),w=new Float32Array(E*3),x=M=>{v[M*3]=b.x+(Math.random()-.5)*4,v[M*3+1]=b.y,v[M*3+2]=b.z+(Math.random()-.5)*4,w[M*3]=(Math.random()-.5)*3,w[M*3+1]=2+Math.random()*4,w[M*3+2]=(Math.random()-.5)*3,A[M]=Math.random()};for(let M=0;M<E;M++)x(M);let S=new ae;S.setAttribute("position",new pe(v,3));let g=new tn(S,new qe({color:16777215,size:.5,transparent:!0,opacity:.8,depthWrite:!1}));return t.add(g),{group:t,update(M,T){n.uniforms.time.value=T;for(let C=0;C<E;C++)A[C]+=M,w[C*3+1]-=9*M,v[C*3]+=w[C*3]*M,v[C*3+1]+=w[C*3+1]*M,v[C*3+2]+=w[C*3+2]*M,(A[C]>1.2||v[C*3+1]<b.y-.5)&&x(C);S.attributes.position.needsUpdate=!0}}}var kE=1.6;function GE(i){let t=document.createElement("canvas");t.width=256,t.height=80;let e=t.getContext("2d");e.fillStyle="#c49a6c",e.fillRect(0,0,256,80),e.strokeStyle="#8a5a3b",e.lineWidth=6,e.strokeRect(3,3,250,74),e.fillStyle="#5a3a24",e.font='bold 34px "M PLUS Rounded 1c", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,42);let n=new Ei(t);return n.colorSpace=Ne,n}function Vf(i,t,e){let n=new yt,s=ut(11897438),r=ut(8015414),o=ut(14271642),a=ut(11116950),c=new bt({color:16770728,emissive:16762992,emissiveIntensity:1.2}),l=cn(new dt(1,1,1),s,2500),h=cn(new dt(1,1,1),r,1500),u=cn(new dt(1,1,1),o,2500),f=cn(new Rt(1,1.2,1,8).translate(0,.5,0),a,200),d=[];for(let y of i){let _=y.axis==="x",m=R=>_?[R,y.at]:[y.at,R],p=R=>e(...m(R)),b=y.mid,E=y.mid,v=y.land??kE;for(let R=0;R<400&&p(b)<v;R++)b-=1;for(let R=0;R<400&&p(E)<v;R++)E+=1;b-=2,E+=2;let A=E-b,w=y.small?3.4:4.4,x=p(b)+.25,S=p(E)+.25,g=y.arch??(y.small?1.2:Math.min(7,Math.max(3,A*.07))),M=R=>{let I=(R-b)/A;return te(x,S,I)+g*Math.sin(Math.PI*I)},T=R=>M(R+.5)-M(R-.5),C=(R,I,H)=>_?[R,H,y.at+I]:[y.at+I,H,R],L=Math.ceil(A/2);for(let R=0;R<L;R++){let I=b+R*A/L,H=b+(R+1)*A/L,z=M((I+H)/2),U=(N,G,X,Q,q,Z)=>{let[it,,_t]=C(I,N,0),[Et,,kt]=C(H,G,0);t.push({box:new he(new F(Math.min(it,Et),X,Math.min(_t,kt)),new F(Math.max(it,Et),Q,Math.max(_t,kt))),color:Z,kind:q})};U(-w/2,w/2,z-.6,z,"bridge",11897438),U(-w/2-.3,-w/2,z,z+1.3,"rail",8015414),U(w/2,w/2+.3,z,z+1.3,"rail",8015414)}for(let R=b+.5;R<E;R+=1){let I=M(R)-.12,H=Math.atan(T(R)),[z,,U]=C(R,0,0);_?l.add(z,I,U,.95,.25,w,0,0,H):l.add(z,I,U,w,.25,.95,-H,0,0)}for(let R=b;R<=E+.01;R+=4){for(let I of[-1,1]){let[H,z,U]=C(R,I*(w/2+.15),M(R)+.7);h.add(H,z,U,.28,1.6,.28)}if(!y.small&&R>b+6&&R<E-6&&Math.round(R-b)%16===0){let[I,,H]=C(R,0,0),z=e(I,H);f.add(I,z,H,1.1,M(R)-.5-z,1.1)}}for(let R=b;R<E-.01;R+=4){let I=Math.min(R+4,E),H=(R+I)/2,z=Math.atan((M(I)-M(R))/(I-R));for(let U of[-1,1])for(let N of[1.35,.7]){let[G,X,Q]=C(H,U*(w/2+.15),M(H)+N);_?u.add(G,X,Q,I-R,.1,.1,0,0,z):u.add(G,X,Q,.1,.1,I-R,-z,0,0)}}if(!y.small)for(let[R,I]of[[b,1],[E,-1]]){let H=M(R);for(let Q of[-1,1]){let[q,,Z]=C(R,Q*(w/2+.6),0),it=pt(new B(new dt(.5,5.5,.5),r));it.position.set(q,H+2.5,Z);let _t=new B(new on(.35,0),c);_t.position.set(q,H+5.6,Z),n.add(it,_t)}let[z,,U]=C(R,0,0),N=pt(new B(new dt(_?.4:w+2.2,.4,_?w+2.2:.4),r));N.position.set(z,H+5.1,U),n.add(N);let G=GE(y.name),X=new B(new vn(3.2,1),new bt({map:G,side:le}));X.position.set(z,H+4.3,U),X.rotation.y=_?I>0?-Math.PI/2:Math.PI/2:I>0?Math.PI:0,n.add(X)}d.push({...y,from:m(b),to:m(E),length:A})}return n.add(l.finish(),h.finish(),u.finish(),f.finish()),{group:n,bridges:d}}var VE=(i,t,e,n="")=>`<svg viewBox="0 0 32 32">
  <path d="M25 3l4 0 0 4-13.5 13.5-4-4z" fill="${i}" stroke="${t}" stroke-width="1.2"/>
  ${n}
  <path d="M8.5 16.5l7 7-2 2-7-7z" fill="${e}"/>
  <path d="M8 22l2 2-4 4-2-2z" fill="#2a1418"/>
  <circle cx="4.6" cy="27.4" r="1.6" fill="#ff2a3a"/>
</svg>`,Wf=(i,t,e,n="")=>`<svg viewBox="0 0 32 32">
  <path d="M6 28l17-17" stroke="${i}" stroke-width="3" stroke-linecap="round"/>
  <path d="M18 5c5 0 10 4 10 10l-6 1-3-3-3-3z" fill="${t}" stroke="${e}" stroke-width="1.4" stroke-linejoin="round"/>
  ${n}
</svg>`,Zs={axe:Wf("#9a6a3e","#c8d2dc","#6a7888"),bloodAxe:Wf("#2a1418","#16121a","#ff2030",'<path d="M20 8c3 1 5 3 6 6" stroke="#ff2030" stroke-width="1.4" fill="none"/><circle cx="7" cy="27" r="1.6" fill="#ff2a3a"/>'),fence:'<svg viewBox="0 0 32 32"><g fill="#c89a64" stroke="#7a5534" stroke-width="1"><path d="M5 9l2-3 2 3v18H5z"/><path d="M14 9l2-3 2 3v18h-4z"/><path d="M23 9l2-3 2 3v18h-4z"/><rect x="3" y="12" width="26" height="3"/><rect x="3" y="20" width="26" height="3"/></g></svg>',door:'<svg viewBox="0 0 32 32"><rect x="2" y="5" width="3.5" height="23" fill="#7a5534"/><rect x="26.5" y="5" width="3.5" height="23" fill="#7a5534"/><rect x="1" y="3" width="30" height="3" fill="#7a5534"/><rect x="5.5" y="8" width="10.3" height="20" fill="#c89a64" stroke="#7a5534"/><rect x="16.2" y="8" width="10.3" height="20" fill="#c89a64" stroke="#7a5534"/><path d="M6 26L15 10M26 26L17 10" stroke="#7a5534" stroke-width="1.2"/><circle cx="14" cy="18" r="1.2" fill="#3a3238"/><circle cx="18" cy="18" r="1.2" fill="#3a3238"/></svg>',wall:'<svg viewBox="0 0 32 32"><g stroke="#5a3a24" stroke-width="1"><rect x="3" y="6" width="26" height="5" rx="2.5" fill="#c89a64"/><rect x="3" y="11" width="26" height="5" rx="2.5" fill="#a87a4a"/><rect x="3" y="16" width="26" height="5" rx="2.5" fill="#c89a64"/><rect x="3" y="21" width="26" height="5" rx="2.5" fill="#a87a4a"/><rect x="2" y="4" width="4" height="24" fill="#7a5534"/><rect x="26" y="4" width="4" height="24" fill="#7a5534"/></g></svg>',sangrea:VE("#0e0c12","#ff2030","#241018",'<path d="M13 19l12-12" stroke="#ff2030" stroke-width="1.6"/><circle cx="12" cy="20" r="1.4" fill="#ffd0d0"/>'),sword:'<svg viewBox="0 0 32 32"><path d="M24 4l4 0 0 4-13 13-4-4z" fill="#e6eef5" stroke="#8fa3b5" stroke-width="1.2"/><path d="M9 17l6 6-2 2-6-6z" fill="#f4c25b"/><path d="M8 22l2 2-4 4-2-2z" fill="#8a5a3b"/></svg>',potion:'<svg viewBox="0 0 32 32"><rect x="13" y="4" width="6" height="5" rx="1" fill="#b07a55"/><path d="M12 9h8v4l4 5v7a3 3 0 01-3 3H11a3 3 0 01-3-3v-7l4-5z" fill="#dff4ff" opacity=".8"/><path d="M9 18h14v7a2 2 0 01-2 2H11a2 2 0 01-2-2z" fill="#ff5a6e"/><circle cx="13" cy="21" r="1.4" fill="#fff" opacity=".8"/></svg>'},vs=(i,t,e)=>`<svg viewBox="0 0 32 32">
  <rect x="5" y="11" width="20" height="12" rx="2" fill="${i}" transform="rotate(-20 15 17)"/>
  <ellipse cx="24" cy="13.5" rx="4" ry="6" fill="${t}" transform="rotate(-20 24 13.5)"/>
  <ellipse cx="24" cy="13.5" rx="2" ry="3.2" fill="${e}" transform="rotate(-20 24 13.5)"/>
</svg>`,ws=(i,t,e,n,s,r,o)=>({name:i,desc:t,kind:"material",category:"wood",durability:e,resist:n,trait:s,icon:r,plank:o,stack:99}),Wh={start:"woodYoung",flowers:"woodBlossom",forest:"woodElder",marsh:"woodMarsh",desert:"woodCactus",canyon:"woodMaple",snow:"woodFrost",highlands:"woodCrystal",volcano:"woodCharred"},Xf={woodYoung:ws("\u82E5\u8449\u306E\u6728\u6750","\u59CB\u307E\u308A\u306E\u8349\u539F\u306E\u3001\u7D20\u76F4\u3067\u6271\u3044\u3084\u3059\u3044\u6728\u6750",100,{},{name:"\u6271\u3044\u3084\u3059\u3044",desc:"\u7279\u5225\u306A\u5F37\u3055\u306F\u306A\u3044\u304C\u3001\u3069\u3053\u3067\u3082\u4F7F\u3048\u308B\u57FA\u672C\u306E\u6728\u6750"},vs("#9a6a44","#e8c890","#c89a60"),13146724),woodBlossom:ws("\u82B1\u9999\u308B\u6728\u6750","\u82B1\u51A0\u306E\u4E18\u9675\u306E\u3001\u307B\u306E\u304B\u306B\u7518\u304F\u9999\u308B\u6728\u6750",80,{},{name:"\u7652\u3084\u3057\u306E\u9999\u308A",desc:"\u62E0\u70B9\u306B\u4F7F\u3046\u3068\u3001\u307E\u308F\u308A\u306E\u30DA\u30C3\u30C8\u304C\u306A\u3064\u304D\u3084\u3059\u304F\u306A\u308B"},vs("#b88a8a","#ffd8e4","#f2a6c2"),14725304),woodElder:ws("\u6DF1\u7DD1\u306E\u53E4\u6728\u6750","\u6DF1\u7DD1\u306E\u68EE\u306E\u3001\u5E74\u3092\u7D4C\u305F\u91CD\u304F\u786C\u3044\u6728\u6750",160,{water:!0},{name:"\u8150\u308A\u306B\u304F\u3044",desc:"\u6E7F\u6C17\u306B\u5F37\u304F\u3001\u9577\u3044\u3042\u3044\u3060\u50B7\u307E\u306A\u3044"},vs("#5a3a24","#c8a870","#6b8a4a"),8017204),woodMarsh:ws("\u6E7F\u539F\u306E\u6C34\u6728","\u9727\u306E\u6E7F\u539F\u306E\u3001\u6C34\u3092\u306F\u3058\u304F\u6728\u6750",120,{water:!0},{name:"\u9632\u6C34",desc:"\u6C34\u8FBA\u3084\u6CBC\u306E\u4E0A\u306B\u5EFA\u3066\u3066\u3082\u50B7\u307E\u306A\u3044"},vs("#4a4a34","#b8b088","#5a7a5a"),6974026),woodCactus:ws("\u30B5\u30DC\u30C6\u30F3\u6750","\u967D\u708E\u306E\u7802\u6F20\u306E\u3001\u4E7E\u3044\u305F\u8EFD\u3044\u6728\u6750",70,{heat:!0},{name:"\u8010\u6691",desc:"\u6691\u3055\u3067\u4E7E\u3044\u3066\u5272\u308C\u305F\u308A\u3057\u306A\u3044"},vs("#6a8a4a","#d8d09a","#9fbf6a"),11057264),woodMaple:ws("\u7D05\u8449\u306E\u5805\u6728","\u7D05\u8449\u306E\u6E13\u8C37\u306E\u3001\u3057\u306A\u3084\u304B\u3067\u7F8E\u3057\u3044\u6728\u6750",140,{},{name:"\u3057\u306A\u3084\u304B",desc:"\u885D\u6483\u306B\u5F37\u304F\u3001\u653B\u6483\u3092\u53D7\u3051\u3066\u3082\u58CA\u308C\u306B\u304F\u3044"},vs("#8a4a2a","#f0b070","#e0602a"),12607546),woodFrost:ws("\u96EA\u5DBA\u306E\u91DD\u8449\u6750","\u767D\u5DBA\u306E\u96EA\u539F\u306E\u3001\u5BD2\u3055\u306B\u8010\u3048\u3066\u80B2\u3063\u305F\u6728\u6750",200,{cold:!0},{name:"\u8010\u5BD2",desc:"\u96EA\u539F\u3067\u3082\u51CD\u3089\u306A\u3044\u3002\u307B\u304B\u306E\u6728\u6750\u3088\u308A\u4E08\u592B"},vs("#5a4030","#e8f0f8","#9fc0d8"),14212324),woodCrystal:ws("\u6C34\u6676\u677E\u306E\u6728\u6750","\u6C34\u6676\u306E\u9AD8\u5730\u306E\u3001\u9B54\u529B\u3092\u5E2F\u3073\u305F\u6728\u6750",180,{cold:!0},{name:"\u9B54\u529B\u3092\u5E2F\u3073\u308B",desc:"\u591C\u306B\u306A\u308B\u3068\u6DE1\u304F\u5149\u308B\u3002\u9B54\u6CD5\u306E\u529B\u306B\u5F37\u3044"},vs("#4a4458","#c8b8ff","#9fe8ff"),9076912),woodCharred:ws("\u713C\u3051\u70AD\u306E\u6728\u6750","\u7114\u306E\u706B\u5C71\u5730\u5E2F\u306E\u3001\u713C\u3051\u3066\u3082\u6B8B\u3063\u305F\u9ED2\u3044\u6728\u6750",150,{heat:!0,fire:!0},{name:"\u8010\u706B",desc:"\u706B\u5C71\u306E\u71B1\u3067\u3082\u71C3\u3048\u306A\u3044"},vs("#2a2226","#6a5a50","#ff7a30"),3813942)},Xh=Object.keys(Xf),Qi={cold:{name:"\u5BD2\u3055",where:"\u767D\u5DBA\u306E\u96EA\u539F\u30FB\u6C34\u6676\u306E\u9AD8\u5730",effect:"\u51CD\u3063\u3066\u3082\u308D\u304F\u306A\u308B"},heat:{name:"\u6691\u3055",where:"\u967D\u708E\u306E\u7802\u6F20\u30FB\u7114\u306E\u706B\u5C71\u5730\u5E2F",effect:"\u4E7E\u3044\u3066\u3072\u3073\u5272\u308C\u308B"},fire:{name:"\u706B",where:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",effect:"\u71C3\u3048\u3066\u3057\u307E\u3046"},water:{name:"\u6E7F\u6C17",where:"\u9727\u306E\u6E7F\u539F\u30FB\u6DF1\u7DD1\u306E\u68EE",effect:"\u8150\u3063\u3066\u5F31\u304F\u306A\u308B"}},Je={...Xf,sword:{name:"\u65C5\u4EBA\u306E\u5263",desc:"\u4F7F\u3044\u6163\u308C\u305F\u7247\u624B\u5263\u30023\u6BB5\u30B3\u30F3\u30DC\u304C\u51FA\u305B\u308B",kind:"weapon",moveset:"sword",held:"sword",stance:"sword",power:1,icon:Zs.sword},sangrea:{name:"\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2",desc:"\u8840\u3092\u5438\u3063\u3066\u8108\u6253\u3064\u3001\u9ED2\u3044\u9B54\u5263\u3002\u901F\u304F\u91CD\u3044 4 \u6BB5\u306E\u9023\u6483\u3092\u653E\u3064",kind:"weapon",moveset:"blood",held:"sangrea",rarity:"blood",stance:"blood",power:1.7,speed:1.15,trail:16719920,passive:{id:"lifesteal",name:"\u5438\u8840",desc:"\u4E0E\u3048\u305F\u30C0\u30E1\u30FC\u30B8\u306E 10% \u3060\u3051 HP \u3092\u56DE\u5FA9\u3059\u308B",rate:.1},skills:["bloodGale","crimsonMoon","bloodRelease"],icon:Zs.sangrea},axe:{name:"\u6728\u3053\u308A\u306E\u65A7",desc:"\u91CD\u3044\u9244\u306E\u65A7\u3002\u9B54\u7269\u306B\u306F\u3042\u307E\u308A\u52B9\u304B\u306A\u3044\u304C\u3001\u6728\u3084\u67F5\u3092\u305F\u3084\u3059\u304F\u53E9\u304D\u5272\u308B",kind:"weapon",moveset:"axe",held:"axe",stance:"axe",power:.55,speed:.9,chop:3,breaker:3,trail:16773328,icon:Zs.axe},bloodAxe:{name:"\u8840\u65A7\u30AC\u30EB\u30E0\u30D8\u30C3\u30C9",desc:"\u8840\u3092\u5438\u3063\u3066\u8D64\u304F\u8108\u6253\u3064\u3001\u9ED2\u3044\u5927\u65A7\u3002\u57CE\u58C1\u3059\u3089\u7815\u304F\u3068\u8A00\u308F\u308C\u308B",kind:"weapon",moveset:"bloodAxe",held:"bloodAxe",rarity:"blood",stance:"bloodAxe",power:.9,speed:.95,chop:4,breaker:4.5,trail:16719920,passive:{id:"bleed",name:"\u88C2\u50B7",desc:"\u65AC\u3063\u305F\u9B54\u7269\u306B\u51FA\u8840\u3092\u4E0E\u3048\u3001\u3058\u308F\u3058\u308F\u3068 HP \u3092\u524A\u308B"},icon:Zs.bloodAxe},fence:{name:"\u6728\u306E\u67F5",desc:"4m \u306E\u67F5\u3002\u307E\u308F\u308A\u3092\u56F2\u3048\u3070\u3001\u9B54\u7269\u304C\u5165\u3063\u3066\u3053\u3089\u308C\u306A\u3044",kind:"build",build:"fence",held:null,stance:"item",stack:99,icon:Zs.fence},wall:{name:"\u4E38\u592A\u306E\u58C1",desc:"4m \u306E\u9AD8\u3044\u58C1\u3002\u67F5\u3088\u308A 2 \u500D\u4EE5\u4E0A\u4E08\u592B\u3067\u3001\u8DF3\u3093\u3067\u3082\u8D8A\u3048\u3089\u308C\u306A\u3044",kind:"build",build:"wall",held:null,stance:"item",stack:99,icon:Zs.wall},door:{name:"\u5927\u304D\u306A\u9580\u6249",desc:"8m \u306E\u4E21\u958B\u304D\u306E\u9580\u3002\u67F5\u3084\u58C1\u306E\u5217\u306E\u4E0A\u306B\u7F6E\u304F\u3068\u3001\u305D\u306E\u90E8\u5206\u3068\u5165\u308C\u66FF\u308F\u308B\u3002G \u30AD\u30FC\u3067\u958B\u3051\u9589\u3081",kind:"build",build:"door",held:null,stance:"item",stack:99,icon:Zs.door},potion:{name:"\u56DE\u5FA9\u85AC",desc:"\u98F2\u3080\u3068 HP \u304C 40 \u56DE\u5FA9\u3059\u308B",kind:"consumable",held:"potion",heal:40,icon:Zs.potion}},Oc=8,wr=!0;function qf(){let i=Array(Oc).fill(null);(wr?["axe","bloodAxe","sangrea","fence","wall","door","potion"]:["axe","sword","potion"]).forEach((n,s)=>{i[s]={id:n,count:Je[n].kind==="weapon"?1:wr?99:3}});let e=0;return{slots:i,infinite:wr,get selected(){return e},set selected(n){e=Math.max(0,Math.min(Oc-1,n))},get held(){let n=i[e];return n?{...Je[n.id],id:n.id,count:n.count}:null},consumeHeld(){let n=i[e];!n||wr||(n.count--,n.count<=0&&(i[e]=null))},add(n,s=1){let r=Je[n],o=r.stack??(r.kind==="consumable"?99:1);for(let a of i){if(s<=0)break;if(a&&a.id===n&&a.count<o){let c=Math.min(s,o-a.count);a.count+=c,s-=c}}for(;s>0;){let a=i.indexOf(null);if(a<0)break;let c=Math.min(s,o);i[a]={id:n,count:c},s-=c}return s}}}function WE(){let i=new Gn({side:kn,depthWrite:!1,uniforms:{top:{value:new tt("#4f8fe0")},horizon:{value:new tt("#fde8d2")},bottom:{value:new tt("#8fc3e0")}},vertexShader:`
      varying vec3 vPos;
      void main() {
        vPos = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top;
      uniform vec3 horizon;
      uniform vec3 bottom;
      varying vec3 vPos;
      void main() {
        float h = vPos.y;
        vec3 col = h > 0.0 ? mix(horizon, top, pow(h, 0.5)) : mix(horizon, bottom, pow(-h, 0.5));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`});return new B(new ie(1700,32,16),i)}function XE(i){let t=new yt,e=new Ec({color:16777215,emissive:12107980,flatShading:!0}),n=new Cn(1,1);for(let s=0;s<90;s++){let r=new yt,o=4+Math.floor(i()*4);for(let l=0;l<o;l++){let h=10+i()*12,u=new B(n,e);u.scale.set(h,h*.6,h),u.position.set((l-o/2)*15+i()*6,i()*6,i()*12-6),r.add(u)}let a=i()*Math.PI*2,c=i()*1600;r.position.set(Math.cos(a)*c,130+i()*90,Math.sin(a)*c),t.add(r)}return t}function qE(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=512/2;e.strokeStyle="#ffffff",e.fillStyle="#ffffff",e.lineCap="round",e.lineWidth=10,e.beginPath(),e.arc(n,n,236,0,Math.PI*2),e.stroke(),e.lineWidth=4,e.beginPath(),e.arc(n,n,206,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(n,n,110,0,Math.PI*2),e.stroke();for(let r=0;r<16;r++){let o=r/16*Math.PI*2;e.save(),e.translate(n+Math.cos(o)*221,n+Math.sin(o)*221),e.rotate(o),e.lineWidth=4,e.beginPath(),r%2?(e.moveTo(-6,-6),e.lineTo(6,6),e.moveTo(6,-6),e.lineTo(-6,6)):e.arc(0,0,5,0,Math.PI*2),e.stroke(),e.restore()}e.lineWidth=5;for(let r of[0,Math.PI/3]){e.beginPath();for(let o=0;o<=3;o++){let a=r+o/3*Math.PI*2-Math.PI/2;e.lineTo(n+Math.cos(a)*200,n+Math.sin(a)*200)}e.stroke()}e.beginPath(),e.arc(n,n,22,0,Math.PI*2),e.fill();let s=new Ei(t);return s.colorSpace=Ne,s}function YE(i){let t=Ce.altar,e=t.h,n=new yt;n.position.set(t.x,e,t.z);let s=ut(14275267,{roughness:.85}),r=pt(new B(new Rt(7.6,8,.4,16),s));r.position.y=.2;let o=pt(new B(new Rt(7,7.3,.4,16),s));o.position.y=.6,n.add(r,o),i.push({box:new he(new F(t.x-7.3,e-1,t.z-7.3),new F(t.x+7.3,e+.8,t.z+7.3)),cyl:{x:t.x,z:t.z,r:7.3},color:14275267,kind:"spawn"});let a=new B(new en(6.4,48),new _e({map:qE(),color:8384736,transparent:!0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.82,n.add(a);let c=ut(12432806),l=new bt({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let y=0;y<4;y++){let _=Math.PI/4+y/4*Math.PI*2,m=Math.cos(_)*10,p=Math.sin(_)*10,b=pt(new B(new Rt(.5,.7,3.2,6),c));b.position.set(m,1.6,p);let E=new B(new on(.45,0),l);E.position.set(m,3.8,p),n.add(b,E),i.push({box:new he(new F(t.x+m-.7,e-1,t.z+p-.7),new F(t.x+m+.7,e+3.2,t.z+p+.7)),cyl:{x:t.x+m,z:t.z+p,r:.7},color:12432806,kind:"part"})}let h=60,u=new Float32Array(h*3),f=new Float32Array(h);for(let y=0;y<h;y++){let _=Math.random()*Math.PI*2,m=Math.random()*6;u[y*3]=Math.cos(_)*m,u[y*3+1]=Math.random()*6,u[y*3+2]=Math.sin(_)*m,f[y]=Math.random()}let d=new ae;return d.setAttribute("position",new pe(u,3)),n.add(new tn(d,new qe({color:11206642,size:.25,transparent:!0,opacity:.85,depthWrite:!1}))),{group:n,update(y,_){a.rotation.z=_*.15,a.material.opacity=.75+Math.sin(_*2)*.2;let m=d.attributes.position;for(let p=0;p<h;p++){let b=m.getY(p)+y*(.6+f[p]);b>7&&(b=.8),m.setY(p,b)}m.needsUpdate=!0}}}function $E(i,t){let e=new yt,n=an(e,i),s=Ce.plateau,r=s.h,o=ut(7319119,{roughness:1}),a=v=>ut(v);n.cyl(5,25,s.x,r-1,s.z,a(11577242),11577242,"part",12);for(let v=4;v<24;v+=6){let A=new B(new Rt(5.15,5.15,.6,12),a(9405816));A.position.set(s.x,r+v,s.z),e.add(A)}n.cyl(6.5,2,s.x,r+24,s.z,a(13616822),13616822,"part",12);let c=new Rt(2.2,2,1,8),l=new Yt(2,2.4,8);for(let v=0;v<8;v++){let A=.9+v*.72,w=r+3+v*3,x=s.x+Math.cos(A)*12,S=s.z+Math.sin(A)*12,g=new yt,M=pt(new B(c,o)),T=pt(new B(l,a(10129296)));T.rotation.x=Math.PI,T.position.y=-1.7,g.add(M,T),g.position.set(x,w-.5,S),e.add(g),n.cyl(2.2,1,x,w-1,S,null,7319119)}n.cyl(2,.4,s.x,r+26,s.z,new bt({color:15918793,roughness:.6}),16766826,"goal",16);let h=new B(new on(1.2,0),new bt({color:9431295,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}));h.scale.y=1.6,h.position.set(s.x,r+30,s.z),e.add(h);let u=new Ye(8379647,30,30);u.position.copy(h.position),e.add(u);for(let v=0;v<10;v++){let A=v/10*Math.PI*2+.3,w=s.x+Math.cos(A)*19,x=s.z+Math.sin(A)*19,S=t(w,x),g=[7,3,5.5,1.5,8,2.5,6,4,7.5,2][v];if(n.cyl(1.3,g,w,S-.5,x,a(14209216),14209216,"part",8),g>5){let M=pt(new B(new Rt(1.7,1.7,.5,8),a(15130576)));M.position.set(w,S-.5+g+.25,x),e.add(M)}}let f=pt(new B(new Rt(1.2,1.2,8,8),a(14209216))),d=s.x-8,y=s.z+15;f.rotation.z=Math.PI/2,f.rotation.y=.6,f.position.set(d,t(d,y)+1,y),e.add(f);let _=Ce.plateau.x-9,m=Ce.plateau.z+22,p=t(_,m),b=a(13616822);n.box(1.6,7,1.6,_-4,p-.5,m,b,13616822),n.box(1.6,7,1.6,_+4,p-.5,m,b,13616822);let E=pt(new B(new dt(10.4,1.4,2),b));return E.position.set(_,p+7.2,m),e.add(E),{group:e,crystal:h,crystalBaseY:r+30}}function ZE(i){let t=new yt,e=an(t,i),n=Ce.cave,s=n.h,r=13,o=.6,a=ut(8221808,{side:le,transparent:!0,opacity:1}),c=pt(new B(new ie(r,22,12,Math.PI+o,Math.PI*2-o*2,0,Math.PI/2),a));c.scale.y=.8,c.position.set(n.x,s-.5,n.z),t.add(c);let l=ut(9273976);for(let w of[-1,1]){let x=w*(o+.05),S=pt(new B(new Jn(2.6,0),l));S.position.set(n.x+Math.cos(x)*r,s+1.2,n.z+Math.sin(x)*r),S.scale.set(1,1.6,1),t.add(S)}for(let w=0;w<28;w++){let x=w/28*Math.PI*2,S=Math.atan2(Math.sin(x),Math.cos(x));Math.abs(S)<o||e.cyl(2.2,14,n.x+Math.cos(x)*(r+.5),s-1,n.z+Math.sin(x)*(r+.5),null,8221808,"wall")}let h=new bt({color:10479871,emissive:4175584,emissiveIntensity:1.1,flatShading:!0}),u=new bt({color:16759008,emissive:13656232,emissiveIntensity:.9,flatShading:!0}),f=new on(1,0);[[-7,-4],[-8,3],[-3,-8],[-2,8],[3,-9]].forEach(([w,x],S)=>{for(let g=0;g<4;g++){let M=new B(f,S%2?u:h),T=.5+Math.random()*.7;M.scale.set(T*.6,T*2,T*.6),M.position.set(n.x+w+(Math.random()-.5)*2,s+T,n.z+x+(Math.random()-.5)*2),M.rotation.set((Math.random()-.5)*.6,Math.random()*3,(Math.random()-.5)*.6),t.add(M)}e.cyl(1.4,3,n.x+w,s-.5,n.z+x,null,S%2?16759008:10479871,"part")});let y=new Ye(8379647,60,22);y.position.set(n.x-3,s+5,n.z),t.add(y);let _=new yt,m=ut(9067067),p=ut(16040539,{metalness:.6,roughness:.35}),b=pt(new B(new dt(2,1.1,1.3),m));b.position.y=.55;let E=pt(new B(new Rt(.65,.65,2,10,1,!1,0,Math.PI),m));E.rotation.z=Math.PI/2,E.position.y=1.1;let v=new B(new dt(2.05,.18,1.35),p);v.position.y=1;let A=new B(new dt(.3,.35,.1),p);return A.position.set(0,.95,.68),_.add(b,E,v,A),_.position.set(n.x-9,s,n.z),_.rotation.y=Math.PI/2,t.add(_),e.cyl(1.2,1.7,n.x-9,s,n.z,null,16040539,"chest"),{group:t,update(w,x){let g=x&&Math.hypot(x.x-n.x,x.z-n.z)<r+1?.18:1;a.opacity+=(g-a.opacity)*Math.min(1,w*6),a.depthWrite=a.opacity>.95}}}function JE(i){let e=new Map,n=(l,h)=>l*1e5+h,s=(l,h)=>{let u=Math.floor(l.box.min.x/24),f=Math.floor(l.box.max.x/24),d=Math.floor(l.box.min.z/24),y=Math.floor(l.box.max.z/24);for(let _=u;_<=f;_++)for(let m=d;m<=y;m++)h(n(_,m))},r=l=>s(l,h=>{e.has(h)||e.set(h,[]),e.get(h).push(l)});for(let l of i)r(l);let o=0,a=[],c=(l,h)=>{o++,a.length=0;let u=Math.floor(l/24),f=Math.floor(h/24);for(let d=u-1;d<=u+1;d++)for(let y=f-1;y<=f+1;y++){let _=e.get(n(d,y));if(_)for(let m of _)m._stamp!==o&&(m._stamp=o,a.push(m))}return a.slice()};return c.add=l=>{i.push(l),r(l)},c.remove=(l,h=l.box)=>{let u=i.indexOf(l);u>=0&&i.splice(u,1),s({box:h},f=>{let d=e.get(f),y=d?d.indexOf(l):-1;y>=0&&d.splice(y,1)})},c}var KE=120;function jE(i){let e=new Map;for(let d of i){let y=Je[Wh[d.region.id]];d.woodId=Wh[d.region.id],d.maxHp=Math.round(y.durability*.35),d.hp=d.maxHp,d.state="stand",d.t=0;let _=Math.floor(d.x/16)*1e5+Math.floor(d.z/16);e.has(_)||e.set(_,[]),e.get(_).push(d)}let n=new Set,s=new ve,r=new ve,o=new ve,a=new ve,c=new ve,l=new F,h=new ve().makeScale(0,0,0);function u(d){d.orig||(d.orig=d.parts.map(y=>{let _=new ve;return y.mesh.getMatrixAt(y.index,_),_}))}function f(d,y,_){c.makeTranslation(d.x,d.y,d.z),a.makeTranslation(-d.x,-d.y,-d.z),r.makeRotationAxis(l.set(d.axisX,0,d.axisZ),y),o.makeScale(_,_,_),d.parts.forEach((m,p)=>{s.copy(c).multiply(r).multiply(o).multiply(a).multiply(d.orig[p]),m.mesh.setMatrixAt(m.index,_<=0?h:s),m.mesh.instanceMatrix.needsUpdate=!0})}return{chop(d,y,{range:_,arc:m,damage:p}){let b=[],E=Math.sin(y),v=Math.cos(y),A=Math.floor(d.x/16),w=Math.floor(d.z/16);for(let x=A-1;x<=A+1;x++)for(let S=w-1;S<=w+1;S++)for(let g of e.get(x*1e5+S)??[]){if(g.state==="gone"||g.state==="fall"||g.state==="grow")continue;let M=g.x-d.x,T=g.z-d.z,C=Math.hypot(M,T);if(C>_+.8||Math.abs(g.y-d.y)>4||C>1.5&&Math.acos($e.clamp((M*E+T*v)/C,-1,1))>m/2)continue;u(g);let L=Math.max(1,Math.round(p*(.85+Math.random()*.3)));g.hp-=L;let R=Math.max(C,.001);g.axisX=T/R,g.axisZ=-M/R;let I=g.hp<=0;g.state=I?"fall":"shake",g.t=0,n.add(g),b.push({tree:g,pos:new F(g.x,g.y+2,g.z),damage:L,felled:I,woodId:g.woodId,amount:I?2+Math.floor(Math.random()*3):0})}return b},update(d){for(let y of n)if(y.t+=d,y.state==="shake"){let _=y.t/.3;f(y,Math.sin(y.t*45)*.06*Math.max(0,1-_),1),_>=1&&(f(y,0,1),y.state="stand",n.delete(y))}else if(y.state==="fall"){let _=Math.min(y.t/1.1,1);f(y,Math.PI/2*_*_,1-Math.max(0,_-.8)*5),_>=1&&(f(y,0,0),y.state="gone",y.t=0,y.savedBox=y.collider.box.clone(),y.collider.box.makeEmpty())}else if(y.state==="gone")y.t>=KE&&(y.state="grow",y.t=0);else if(y.state==="grow"){let _=Math.min(y.t/1.5,1);f(y,0,1-Math.pow(1-_,3)),_>=1&&(y.collider.box.copy(y.savedBox),y.hp=y.maxHp,y.state="stand",n.delete(y))}}}}function Yf(i,t,e={}){let n=!!e.lite,s=co(2024);i.background=new tt("#fde8d2"),i.fog=new hc("#e6eef2",300,n?1e3:1500);let r=WE();i.add(r);let o=XE(s);i.add(o),i.add(new Mc(14478591,8032090,1));let a=new F(50,80,20),c=new wc(16773340,2.4);c.position.copy(a),c.castShadow=!0,c.shadow.mapSize.set(n?1024:2048,n?1024:2048),c.shadow.camera.left=-60,c.shadow.camera.right=60,c.shadow.camera.top=60,c.shadow.camera.bottom=-60,c.shadow.camera.far=250,c.shadow.bias=-5e-4,c.shadow.normalBias=.05,i.add(c),i.add(c.target);let l=pf(ji);l.maxR=Vn-30;let h=df([l]);i.add(h.group);let u=h.sample,f=(L,R)=>ji[l.regionIndexAt(L,R)],d=(L,R)=>u(L,R)>.3?f(L,R):null,y=kf(h.heightTex);i.add(y.mesh);let _=Gf(u);i.add(_.group);let m=[],p=[],b=[],E=YE(m);i.add(E.group);let v=$E(m,u);i.add(v.group);let A=ZE(m);i.add(A.group);let w=Mf(m,u);i.add(w.group),ji.forEach((L,R)=>{if(L.decorate){let z=L.decorate(m,u,co(L.cx*7+L.cz*13+5));i.add(z.group),p.push(z.update)}let I=(z,U)=>l.weightOf(R,z,U),H=Tf(L,m,u,h.slopeAt,co(L.cx*3+L.cz*11+1),I,n?.35:1);i.add(H.group),b.push(...H.trees)});let x=Vf(Bf,m,u);i.add(x.group);let S=ff(h.colorAt,u),g=jE(b),M=JE(m),T=new F(Ce.altar.x,Ce.altar.h+.8,Ce.altar.z),C=0;return{sun:c,spawnPoint:T,colliders:m,collidersNear:M,mapImage:S,bridges:x.bridges,waterLevel:Kn,groundHeight:u,slopeAt:h.slopeAt,islandAt:d,regionAt:f,chopTrees:g.chop,addCollider:M.add,removeCollider:M.remove,update(L,R,I){C+=L,I&&r.position.copy(I),o.rotation.y+=L*.004,y.update(C),R&&y.mesh.position.set(R.x,Kn,R.z),_.update(L,C),E.update(L,C),w.update(C),A.update(L,R);for(let H of p)H(L,C,R);g.update(L),v.crystal.rotation.y+=L*.8,v.crystal.position.y=v.crystalBaseY+Math.sin(C*1.5)*.4,R&&(c.target.position.copy(R),c.position.copy(R).add(a))}}}var Fc={sword:[{anim:0,name:"\u7E26\u65AC\u308A",duration:.42,hitTime:.14,range:4.6,arc:1.7,power:1,knockback:1,lunge:7,hop:0,shake:.18,hitStop:.05},{anim:1,name:"\u6A2A\u8599\u304E",duration:.46,hitTime:.17,range:5,arc:3,power:1.1,knockback:1.4,lunge:9,hop:0,shake:.25,hitStop:.06},{anim:2,name:"\u56DE\u8EE2\u65AC\u308A",duration:.62,hitTime:.3,range:5.6,arc:Math.PI*2,power:1.7,knockback:2.2,lunge:4,hop:16,shake:.6,hitStop:.1}],fists:[{anim:3,name:"\u30B8\u30E3\u30D6",duration:.28,hitTime:.08,range:3.2,arc:1.4,power:.45,knockback:.6,lunge:5,hop:0,shake:.08,hitStop:.03},{anim:4,name:"\u30B9\u30C8\u30EC\u30FC\u30C8",duration:.38,hitTime:.12,range:3.6,arc:1.4,power:.7,knockback:1.2,lunge:8,hop:0,shake:.15,hitStop:.05},{anim:14,name:"\u30A2\u30C3\u30D1\u30FC",duration:.46,hitTime:.15,range:3.6,arc:1.6,power:1,knockback:1.6,lunge:6,hop:10,shake:.25,hitStop:.07}],blood:[{anim:10,name:"\u9006\u8888\u88DF",duration:.34,hitTime:.1,range:4.9,arc:2,power:1,knockback:.8,lunge:8,hop:0,shake:.2,hitStop:.05},{anim:11,name:"\u8888\u88DF\u65AC\u308A",duration:.36,hitTime:.11,range:4.9,arc:2,power:1.1,knockback:1,lunge:8,hop:0,shake:.24,hitStop:.05},{anim:12,name:"\u8840\u9583\u7A81\u304D",duration:.42,hitTime:.13,range:7.5,arc:.7,power:1.5,knockback:1.8,lunge:18,hop:0,shake:.3,hitStop:.07},{anim:13,name:"\u8840\u65CB",duration:.72,hitTime:.22,hitTimes:[.22,.44],range:6.2,arc:Math.PI*2,power:1.3,knockback:2.4,lunge:4,hop:12,shake:.55,hitStop:.09}],axe:[{anim:15,name:"\u85AA\u5272\u308A",duration:.58,hitTime:.27,range:4.4,arc:1.5,power:1,knockback:1.2,lunge:5,hop:0,shake:.35,hitStop:.07},{anim:1,name:"\u6A2A\u632F\u308A",duration:.5,hitTime:.19,range:4.8,arc:2.6,power:1,knockback:1.6,lunge:6,hop:0,shake:.3,hitStop:.06},{anim:7,name:"\u515C\u5272\u308A",duration:.95,hitTime:.6,range:5.2,arc:2.2,power:1.8,knockback:2.4,lunge:6,hop:18,shake:.8,hitStop:.12}],bloodAxe:[{anim:15,name:"\u8840\u5272\u308A",duration:.54,hitTime:.26,range:4.8,arc:1.6,power:1,knockback:1.3,lunge:7,hop:0,shake:.4,hitStop:.07},{anim:1,name:"\u88C2\u304D\u6255\u3044",duration:.48,hitTime:.18,range:5.2,arc:2.8,power:1.1,knockback:1.6,lunge:8,hop:0,shake:.35,hitStop:.06},{anim:13,name:"\u8840\u5D50",duration:.72,hitTime:.22,hitTimes:[.22,.44],range:6,arc:Math.PI*2,power:1,knockback:2,lunge:4,hop:12,shake:.5,hitStop:.08},{anim:7,name:"\u65AD\u982D",duration:.95,hitTime:.6,range:6,arc:2.4,power:2.2,knockback:3,lunge:8,hop:20,shake:1,hitStop:.14}]},V1=Fc.sword,$f={0:.42,1:.46,2:.62,3:.28,4:.38,5:.9,6:.45,7:.95,8:.6,9:.9,10:.34,11:.36,12:.42,13:.72,14:.46,15:.58},Zf=.45;var Tr=(i,t={})=>new bt({color:i,metalness:.3,roughness:.32,flatShading:!0,...t}),Js=(i,t,e=1.2,n={})=>new bt({color:i,emissive:t,emissiveIntensity:e,flatShading:!0,...n});function Ks(i,t){let e=new Vs;i.forEach(([s,r],o)=>o?e.lineTo(s,r):e.moveTo(s,r)),e.closePath();let n=new fr(e,{depth:t,bevelEnabled:!0,bevelThickness:t*.35,bevelSize:.02,bevelSegments:1});return n.translate(0,0,-t/2),n.rotateY(-Math.PI/2),n}function QE(i=2757656,t=.5){let e=new B(new Rt(.075,.085,t,8),new bt({color:i,roughness:.8}));return e.rotation.x=Math.PI/2,e.position.z=-.02,e}function tM(){let i=new yt,t=[[.3,-.17],[1.4,-.22],[2.05,-.15],[2.65,0]];for(let u=5;u>=0;u--){let f=.5+u*.3;t.push([f+.2,.17+(u>3?-.02:0)],[f+.1,.27],[f,.18])}t.push([.3,.17]);let e=new B(Ks(t,.07),Tr(2761776,{roughness:.3})),n=new B(Ks([[.4,-.06],[1.6,-.08],[2.35,0],[1.6,.08],[.4,.06]],.1),Js(16719920,14684192,1.6)),s=Js(16738938,16719936,1.8);for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new B(new dt(.02,u%2?.1:.06,.06),s);d.position.set(f*.055,u%2?.12:-.13,.7+u*.35),d.rotation.x=u*.7,i.add(d)}let r=Tr(2363416);for(let u of[-1,1]){let f=[[0,0],[.1,u*.25],[.02,u*.5],[.16,u*.42],[.12,u*.66],[.26,u*.3],[.18,0]],d=new B(Ks(f,.05),r);d.position.z=.2,i.add(d)}let o=new B(new ie(.08,10,8),Js(16765136,16719920,1.2));o.scale.set(.6,1,.6),o.position.set(0,0,.26);let a=new B(new dt(.1,.1,.02),new _e({color:1703941}));a.scale.set(1,.25,1),a.position.set(0,0,.27),a.rotation.y=Math.PI/2;let c=new B(new Yt(.08,.2,6),r);c.rotation.x=-Math.PI/2,c.position.z=-.36;let l=Tr(4864580);for(let u=0;u<3;u++){let f=new B(new Pn(.035,.012,4,8),l);f.position.set(0,-.06-u*.06,-.44),f.rotation.y=u%2?Math.PI/2:0,i.add(f)}let h=new B(new on(.06,0),Js(16722490,12582936,1.5));return h.position.set(0,-.25,-.44),i.add(e,n,o,a,QE(1707026,.5),c,h),{group:i,pulse:[n.material,o.material,s,h.material]}}function eM(){let i=new yt,t=new bt({color:10119742,roughness:.85,flatShading:!0}),e=new B(new Rt(.075,.09,2.15,7),t);e.rotation.x=Math.PI/2,e.position.z=.7;let n=new B(new Rt(.1,.1,.42,7),new bt({color:5913128,roughness:.9}));n.rotation.x=Math.PI/2;let s=Tr(9082532,{roughness:.45}),r=new B(Ks([[1.3,.12],[1.74,.12],[1.92,-.2],[2.08,-.66],[1.62,-.56],[1.36,-.14]],.13),s),o=new B(Ks([[1.9,-.18],[2,-.2],[2.16,-.7],[2.06,-.68]],.07),Tr(15265524,{roughness:.2})),a=new B(new dt(.2,.2,.36),s);a.position.set(0,.2,1.53);let c=new B(new Pn(.1,.03,5,10),s);return c.position.z=1.2,i.add(e,n,r,o,a,c),i.scale.setScalar(1.15),{group:i,pulse:[],tip:2.3}}function nM(){let i=new yt,t=new bt({color:2760742,roughness:.6,flatShading:!0}),e=new B(new Rt(.08,.1,2.5,7),t);e.rotation.x=Math.PI/2,e.position.z=.8;let n=Js(9048096,6291472,.8);for(let f=0;f<3;f++){let d=new B(new Rt(.11,.11,.1,7),n);d.rotation.x=Math.PI/2,d.position.z=-.1+f*.28,i.add(d)}let s=(f,d,y,_)=>{let m=[];for(let E=0;E<=12;E++){let v=-1.15+E/12*2.3;m.push([1.72+Math.sin(v)*f,.08-Math.cos(v)*f])}for(let E=12;E>=0;E--){let v=-1+E/12*2,A=d+(_&&E%2?.1:0);m.push([1.72+Math.sin(v)*A*.8,.08-Math.cos(v)*A+.05])}return Ks(m,y)},r=new B(s(.98,.42,.12,!0),Tr(1446426,{roughness:.3})),o=new B(s(1.06,.6,.06,!1),Js(16719920,14684192,1.6)),a=Tr(2363416),c=new B(Ks([[1.5,.1],[1.62,.72],[1.78,.52],[1.96,.1]],.1),a),l=new B(Ks([[1.95,.1],[2.55,0],[1.95,-.1]],.1),a),h=new B(new ie(.1,10,8),Js(16765136,16719920,1.3));h.scale.set(1.3,1,1),h.position.set(0,-.28,1.72);let u=new B(new on(.13,0),Js(16722490,12582936,1.5));return u.position.z=-.5,i.add(e,r,o,c,l,h,u),i.scale.setScalar(1.3),{group:i,pulse:[o.material,h.material,n,u.material],tip:3.1}}var Jf={sangrea:tM,axe:eM,bloodAxe:nM};function Kf(i){let t=Jf[i]();return t.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t.base=t.pulse.map(e=>e.emissiveIntensity),t}var jf=Object.keys(Jf);var iM={skin:16769223,hair:3882874,tunic:2864544,scarf:15764028,pants:4869737,boots:8015414,belt:7030320},Qn=(i,t={})=>new bt({color:i,roughness:.6,...t});function mi(i){return i.castShadow=!0,i.receiveShadow=!0,i}function ra(i,t,e,n=0){let s=t*i,r=e*i,o=Math.sqrt(Math.max(0,i*i-s*s-r*r))+n;return new F(s,r,o)}function Qf(i=iM){let t=new yt,e=new yt;t.add(e);let n=(k,rt,mt,Ut,xt,ye,Ee)=>{let He=new yt;He.position.set(k,rt,0);let Ie=mi(new B(new _c(Ut,mt,4,10),Qn(xt)));Ie.position.y=-mt/2-Ut*.5,He.add(Ie);let ue=mi(new B(new ie(Ut*Ee,12,10),Qn(ye)));return ue.position.y=-mt-Ut*.7,He.add(ue),e.add(He),{pivot:He,end:ue}},s=n(-.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot,r=n(.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot;for(let k of[s,r])k.children[1].scale.set(1,.8,1.35);let o=new yt;o.position.y=1.4;let a=mi(new B(new Rt(.72,1,1.7,16),Qn(i.tunic)));a.position.y=.85;let c=mi(new B(new Pn(.86,.1,6,20),Qn(i.belt)));c.rotation.x=Math.PI/2,c.position.y=.55;let l=new B(new dt(.26,.22,.08),Qn(16040539,{metalness:.6,roughness:.3}));l.position.set(0,.55,.93),o.add(a,c,l),e.add(o);let h=n(-.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot,u=n(.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot;h.rotation.z=-.12,u.rotation.z=.12;let f=new yt;f.position.y=-.95,f.rotation.x=.35;let d=Qn(15134453,{metalness:.7,roughness:.25}),y=mi(new B(new dt(.09,.3,1.6),d));y.position.z=1.05;let _=mi(new B(new Yt(.12,.3,4),d));_.rotation.x=Math.PI/2,_.scale.x=.5,_.position.z=1.95;let m=mi(new B(new dt(.2,.62,.12),Qn(16040539,{metalness:.6,roughness:.3})));m.position.z=.28;let p=new B(new Rt(.08,.08,.45,8),Qn(7030320));p.rotation.x=Math.PI/2;let b=new yt;b.add(y,_,m,p),f.add(b),u.add(f);let E={},v=null,A=new yt;A.position.set(0,-1.32,.18),A.scale.setScalar(1.6);let w=new B(new ie(.22,12,10),Qn(14677247,{transparent:!0,opacity:.55,roughness:.1})),x=new B(new ie(.17,12,10),new bt({color:16734830,emissive:13639744,emissiveIntensity:.6})),S=new B(new Rt(.07,.09,.22,8),Qn(14677247,{transparent:!0,opacity:.55}));S.position.y=.26;let g=new B(new Rt(.08,.07,.1,8),Qn(11565653));g.position.y=.4,A.add(x,w,S,g),A.visible=!1,u.add(A);let M=new B(new Li(1.4,3.9,24,1,-.4,3),new _e({color:15269883,transparent:!0,opacity:0,side:le,depthWrite:!1,blending:Zn}));M.position.set(.9,2.9,0),M.rotation.y=-Math.PI/2,M.visible=!1,e.add(M);let T=new B(new Li(1.4,4.4,32,1,-2.35,3.4),M.material.clone());T.rotation.x=-Math.PI/2,T.position.y=2.8,T.visible=!1,e.add(T);let C=new B(new Li(1.6,5.2,48),M.material.clone());C.material.color.set(16774344),C.rotation.x=-Math.PI/2,C.position.y=2.4,C.visible=!1,t.add(C);let L=new yt;L.position.set(0,2.9,0);let R=new B(new Li(1.4,4.2,28,1,-.5,3.1),M.material.clone());R.rotation.y=-Math.PI/2,L.add(R),L.visible=!1,e.add(L);let I=new B(new Yt(.5,1,10,1,!0).rotateX(-Math.PI/2).translate(0,0,.5),M.material.clone());I.position.set(.7,2.8,.6),I.visible=!1,e.add(I);let H=mi(new B(new Pn(.62,.22,8,20),Qn(i.scarf)));H.rotation.x=Math.PI/2,H.position.y=3.1,e.add(H);let z=new yt;z.position.set(.35,3.05,-.55);let U=mi(new B(new dt(.4,1.2,.12),Qn(i.scarf)));U.position.y=-.55,z.add(U),e.add(z);let N=1.05,G=new yt;G.position.y=4.05;let X=mi(new B(new ie(N,28,20),Qn(i.skin,{roughness:.75,emissive:5913130,emissiveIntensity:.35})));G.add(X);let Q=Qn(i.hair,{roughness:.5,flatShading:!0}),q=mi(new B(new ie(N*1.08,20,14,0,Math.PI*2,0,Math.PI*.52),Q));q.rotation.x=-.35,G.add(q);for(let k=-2;k<=2;k++){let rt=mi(new B(new Yt(.2,.55,4),Q)),mt=ra(N,k*.22,.55,.02);rt.position.copy(mt),rt.rotation.set(Math.PI+.5,0,k*.15),G.add(rt)}let Z=mi(new B(new Yt(.14,.7,5),Q));Z.position.set(.1,N*1.1,.1),Z.rotation.set(.3,0,-.5),G.add(Z);let it=new bt({color:1907507,roughness:.3}),_t=new _e({color:16777215}),Et=[];for(let k of[-1,1]){let rt=new B(new ie(.15,12,10),it);rt.scale.set(.9,1.35,.45),rt.position.copy(ra(N,k*.34,-.02,-.03)),rt.lookAt(rt.position.clone().multiplyScalar(2)),G.add(rt),Et.push(rt);let mt=new B(new ie(.05,8,6),_t);mt.position.copy(ra(N,k*.34+.05,.07,.03)),G.add(mt)}let kt=new _e({color:16751266,transparent:!0,opacity:.6});for(let k of[-1,1]){let rt=new B(new en(.13,16),kt);rt.scale.x=1.4;let mt=ra(N,k*.55,-.25,.01);rt.position.copy(mt),rt.lookAt(mt.clone().multiplyScalar(2)),G.add(rt)}let qt=new B(new Pn(.1,.025,6,12,Math.PI),new _e({color:5909805}));qt.position.copy(ra(N,0,-.3,.005)),qt.rotation.z=Math.PI,qt.rotation.x=-.3,G.add(qt),e.add(G);let St=Math.random()*10,Ot=-1,V=0,ct=0,et=0,ht=0,nt=2+Math.random()*3,Ht=-1,gt=0,O=1,D="fists",$=1,ot=0,at=!1,st=0,zt=!0,wt=-1,At=-1,Vt=0,Jt=0,lt=0,ee=-1,Ft={yaw:0,pitch:0,targetYaw:0,targetPitch:0,timer:2},Kt=12,Bt=!0,Dt=0,jt=[];e.traverse(k=>{k.isMesh&&k.material.isMeshStandardMaterial&&!jt.includes(k.material)&&jt.push(k.material)});let Me=jt.map(k=>({color:k.emissive.getHex(),intensity:k.emissiveIntensity})),J=$e.lerp,Zt=(k,rt,mt,Ut)=>k+(rt-k)*Math.min(1,Ut*mt);function Mt(k,rt){let mt=rt.speed??0,Ut=rt.grounded??!0;St+=k,ct=Zt(ct,Ut?mt:0,10,k),et=Zt(et,Ut?0:1,12,k),ht=Zt(ht,rt.run&&Ut?1:0,8,k),V+=k*10*Math.max(ct,.2)*(1+.55*ht);let xt=(1-ct)*(1-et);h.rotation.y=0,u.rotation.y=0,f.rotation.x=.35;let ye=0;Ut&&!zt&&(wt=0),!Ut&&zt&&(At=0),zt=Ut;let Ee=t.rotation.y-Vt;Ee=Math.atan2(Math.sin(Ee),Math.cos(Ee)),Vt=t.rotation.y,Jt=Zt(Jt,$e.clamp(-(Ee/Math.max(k,.001))*.04,-.22,.22)*ct,8,k);let He=Ht>=0||Ot>=0||at;xt>.9&&!He?lt+=k:(lt=0,ee=-1),ee<0&&lt>7&&(ee=0);let Ie=Math.sin(St*2.2),ue=(Math.sin(St*1.3)*.7+Math.sin(St*.47+1)*.3)*xt,hn=Math.sin(St*.8+.5)*xt,Xn=Math.sin(V)*.8*ct*(1+.45*ht),Qs=Math.abs(Math.sin(V))*.14*ct*(1+.6*ht);if(h.rotation.x=Xn+ue*.06+Ie*.03*xt,u.rotation.x=-Xn+ue*.06-Ie*.03*xt,h.rotation.z=-.12-Ie*.035*xt-ct*.05,u.rotation.z=.12+Ie*.035*xt+ct*.05,s.rotation.x=-Xn+ue*.03,r.rotation.x=Xn+ue*.03,s.rotation.z=hn*.025,r.rotation.z=hn*.025,o.position.y=1.4+Qs+Ie*.025*xt,o.scale.set(1+Ie*.012*xt,1,1+Ie*.018*xt),o.rotation.y=-Math.sin(V)*.14*ct,Ft.timer-=k,Ft.timer<=0){let Ct=Math.random()<.6;Ft.targetYaw=Ct?(Math.random()-.5)*1.1:0,Ft.targetPitch=Ct?(Math.random()-.4)*.25:0,Ft.timer=1.5+Math.random()*3}Ft.yaw=Zt(Ft.yaw,Ft.targetYaw*xt,5,k),Ft.pitch=Zt(Ft.pitch,Ft.targetPitch*xt,5,k),G.position.y=4.05+Qs*1.1+Ie*.04*xt,G.rotation.y=Ft.yaw,G.rotation.x=Ft.pitch+Math.sin(V*2)*.04*ct-ue*.03,G.rotation.z=Math.sin(V)*.05*ct+hn*.03,H.position.y=3.1+Qs,z.position.y=3.05+Qs,ht>.01&&(h.rotation.x-=.35*ht,u.rotation.x-=.35*ht,h.rotation.z-=.12*ht,u.rotation.z+=.12*ht),z.rotation.x=-.2-ct*.9-ht*.5-et*.6+Math.sin(St*6)*.08*(.3+ct)+ue*.05,z.rotation.z=Math.sin(St*2.3)*.08*(.4+ct);let je=ue*.035+ct*.12+ht*.18,Cs=hn*.025+Math.sin(V)*.045*ct+Jt,zn=1,ni=xt+ct*.5;if(D==="fists"){let Ct=Math.abs(Math.sin(St*5.5))*xt;h.rotation.x=J(h.rotation.x,-1.15+Math.sin(St*5.5)*.06,ni),h.rotation.z=J(h.rotation.z,.42,ni),u.rotation.x=J(u.rotation.x,-.95-Math.sin(St*5.5+1)*.06,ni),u.rotation.z=J(u.rotation.z,-.42,ni),zn-=Ct*.035,je+=.05*xt,o.rotation.y=J(o.rotation.y,.18,xt),G.rotation.x+=.08*xt}else if(D==="sword")u.rotation.x=J(u.rotation.x,-.25+Math.max(0,Math.sin(St*.7))*.2,xt),f.rotation.x=.35+.3*xt;else if(D==="axe"){let Ct=Ht<0?ni:0,ge=Math.max(0,Math.sin(St*.9))**8;u.rotation.x=J(u.rotation.x,-.35-ge*.35,Ct),u.rotation.z=J(u.rotation.z,.2,Ct),f.rotation.x=J(.35,1.05-ge*.3,Ct),h.rotation.x=J(h.rotation.x,.1,xt),je+=.04*xt,o.rotation.y=J(o.rotation.y,-.12,xt)}else if(D==="bloodAxe"){let Ct=Ht<0?ni:0;u.rotation.x=J(u.rotation.x,.35+Math.sin(St*1.2)*.04,Ct),u.rotation.z=J(u.rotation.z,.3,Ct),f.rotation.x=J(.35,1.55,Ct),h.rotation.x=J(h.rotation.x,-.5,xt),h.rotation.z=J(h.rotation.z,-.3,xt),je+=.14*xt,G.rotation.x+=.12*xt,Ft.yaw*=.4,G.rotation.y=Ft.yaw,s.rotation.x-=.2*xt,r.rotation.x+=.15*xt}else D==="blood"&&(u.rotation.x=J(u.rotation.x,-.55+Math.sin(St*1.1)*.05,ni),u.rotation.z=J(u.rotation.z,.35,ni),f.rotation.x=.35+.55*ni,h.rotation.x=J(h.rotation.x,-.35,xt),h.rotation.z=J(h.rotation.z,-.55,xt),je+=.1*xt,Cs+=.05*xt,G.rotation.x+=.14*xt,Ft.yaw*=.4,G.rotation.y=Ft.yaw,s.rotation.x-=.15*xt,r.rotation.x+=.2*xt);if(ee>=0){ee+=k;let Ct=Math.min(ee/2.4,1),ge=Math.sin(Math.min(Ct*3,1)*Math.PI/2)*(Ct>.7?(1-Ct)/.3:1);h.rotation.z=J(h.rotation.z,-2.7,ge),u.rotation.z=J(u.rotation.z,2.7,ge),h.rotation.x=J(h.rotation.x,-.3,ge),u.rotation.x=J(u.rotation.x,-.3,ge),je-=.12*ge,G.rotation.x-=.25*ge,zn+=.04*ge,Et.forEach(xe=>{xe.scale.y=J(1.35,.2,ge)}),Ct>=1&&(ee=-1,lt=-6-Math.random()*6)}if(wt>=0){wt+=k;let Ct=wt/.25;zn-=Math.sin(Math.min(Ct,1)*Math.PI)*.16,s.rotation.x-=Math.sin(Math.min(Ct,1)*Math.PI)*.3,r.rotation.x-=Math.sin(Math.min(Ct,1)*Math.PI)*.3,Ct>=1&&(wt=-1)}if(At>=0){At+=k;let Ct=At/.2;zn+=Math.sin(Math.min(Ct,1)*Math.PI)*.1,Ct>=1&&(At=-1)}if(et>.01&&(h.rotation.z=J(h.rotation.z,-1.1,et),u.rotation.z=J(u.rotation.z,1.1,et),h.rotation.x=J(h.rotation.x,-.3,et),u.rotation.x=J(u.rotation.x,-.3,et),s.rotation.x=J(s.rotation.x,-.7,et),r.rotation.x=J(r.rotation.x,.2,et)),nt-=k,ee<0){let Ct=nt<.12;for(let ge of Et)ge.scale.y=Ct?.15:1.35}if(nt<0&&(nt=2+Math.random()*3),M.visible=T.visible=C.visible=L.visible=I.visible=!1,Ht>=0){Ht+=k*O;let Ct=Ht,ge=$f[gt],xe=P=>1-Math.pow(1-Math.min(Math.max(P,0),1),3),Lt=(P,W)=>Math.min(Math.max((Ct-P)/(W-P),0),1),Si=Lt(ge-.18,ge);if(gt===0){let P;Ct<.1?P=J(u.rotation.x,-2.8,xe(Ct/.1)):Ct<.22?P=J(-2.8,-.15,xe(Lt(.1,.22))):P=J(-.15,u.rotation.x,Si),u.rotation.x=P,u.rotation.z=.25,h.rotation.x=J(h.rotation.x,.5,1-Si),o.rotation.y=Ct<.1?-.25*(Ct/.1):J(-.25,.2,Lt(.1,.22))*(1-Si),je+=Ct<.1?-.05:.12*(1-Lt(.1,.4)),M.visible=Ct>.1&&Ct<.36,M.material.opacity=Ct<.22?.75:.75*(1-Lt(.22,.36))}else if(gt===1){let P=xe(Lt(0,.1))*(1-Si),W=xe(Lt(.1,.26));u.rotation.z=J(u.rotation.z,1.45,P),u.rotation.x=0,u.rotation.y=J(0,J(.9,-2.3,W),P),f.rotation.x=J(.35,1.25,P),h.rotation.z=J(h.rotation.z,-.9,P),h.rotation.y=J(0,J(.6,-.4,W),P),o.rotation.y=J(.4,-.45,W)*P,Cs+=J(.08,-.1,W)*P,je+=.08*P,G.rotation.y=J(.3,-.3,W)*P,T.visible=Ct>.1&&Ct<.4,T.material.opacity=Ct<.26?.7:.7*(1-Lt(.26,.4))}else if(gt===2){let P=xe(Lt(0,.12)),W=Lt(.12,.42),Y=P*(1-Si);u.rotation.z=J(u.rotation.z,1.5,Y),u.rotation.x=0,u.rotation.y=J(0,.7,Y)*(1-W*.6),f.rotation.x=J(.35,1.3,Y),h.rotation.z=J(h.rotation.z,-1.3,Y),s.rotation.x-=.5*P*(1-W),r.rotation.x+=.3*P*(1-W),zn-=.12*P*(1-Lt(.12,.2)),ye=-Math.PI*2*(1-Math.pow(1-W,2)),G.rotation.y=0,C.visible=Ct>.16&&Ct<.5,C.material.opacity=.75*(1-Lt(.3,.5)),C.scale.setScalar(.8+Lt(.16,.5)*.35)}else if(gt===3){let P=xe(Lt(0,.07))*(1-Lt(.14,ge));h.rotation.x=J(h.rotation.x,-1.55,P),h.rotation.z=J(h.rotation.z,.15,P),u.rotation.x=J(u.rotation.x,-.9,.7),u.rotation.z=J(u.rotation.z,-.35,.7),o.rotation.y=.25*P,je+=.06*P}else if(gt===4){let P=xe(Lt(0,.05))*(1-Lt(.05,.12)),W=xe(Lt(.05,.12))*(1-Lt(.2,ge));u.rotation.x=J(J(u.rotation.x,-.4,P),-1.6,W),u.rotation.z=J(u.rotation.z,-.1,W),h.rotation.x=J(h.rotation.x,-.9,.7),h.rotation.z=J(h.rotation.z,.35,.7),o.rotation.y=J(.2*P,-.35,W),je+=.12*W-.04*P}else if(gt===5){let P=xe(Lt(0,.2))*(1-Lt(.72,ge)),W=Lt(.25,.65);u.rotation.x=J(u.rotation.x,-2.25,P),u.rotation.z=J(u.rotation.z,-.45,P),G.rotation.x=J(G.rotation.x,-.35-Math.sin(W*Math.PI*4)*.05,P),G.rotation.y=0,je-=.06*P,Ct>.72&&Et.forEach(Y=>{Y.scale.y=.2})}else if(gt===6){let P=xe(Lt(0,.06))*(1-Lt(ge-.12,ge)),W=xe(Lt(.16,.26));u.rotation.z=J(u.rotation.z,1.45,P),u.rotation.x=0,u.rotation.y=J(0,J(1.3,-2.2,W),P),f.rotation.x=J(.35,1.25,P),h.rotation.x=J(h.rotation.x,.9,P),s.rotation.x=J(s.rotation.x,-.9,P),r.rotation.x=J(r.rotation.x,.7,P),o.rotation.y=J(.3,-.4,W)*P,je+=.38*P,T.visible=Ct>.16&&Ct<.36,T.material.opacity=.8*(1-Lt(.26,.36))}else if(gt===7){let P=xe(Lt(0,.12))*(1-Lt(.12,.2)),W=xe(Lt(.1,.3))*(1-Lt(.55,.64)),Y=xe(Lt(.55,.64))*(1-Lt(.8,ge));zn-=.16*P+.1*Y,u.rotation.x=J(J(u.rotation.x,-2.95,W),-.35,Y),u.rotation.z=J(u.rotation.z,-.15,Math.max(W,Y)),h.rotation.x=J(J(h.rotation.x,-2.7,W),-.5,Y),h.rotation.z=J(h.rotation.z,.35,Math.max(W,Y)),s.rotation.x-=.6*Y,r.rotation.x+=.3*Y,je+=-.18*W+.4*Y,M.visible=Ct>.55&&Ct<.75,M.material.opacity=.85*(1-Lt(.64,.75))}else if(gt===8){let P=xe(Lt(0,.1))*(1-Lt(.1,.15)),W=xe(Lt(.1,.16))*(1-Lt(.42,ge));u.rotation.x=J(J(u.rotation.x,-2.2,P),-.45,W),u.rotation.z=J(u.rotation.z,.1,Math.max(P,W)),f.rotation.x=J(.35,1.9,W),h.rotation.x=J(h.rotation.x,.6,W),h.rotation.z=J(h.rotation.z,-.6,W),zn-=.12*W,s.rotation.x-=.5*W,je+=.3*W}else if(gt===9){let P=xe(Lt(0,.2))*(1-Lt(.55,.68)),W=Lt(.3,.45),Y=xe(Lt(.55,.68))*(1-Lt(.78,ge));u.rotation.x=J(J(u.rotation.x,-1.75,P),-.3,Y),u.rotation.z=J(J(u.rotation.z,-.55,P),1.1,Y),f.rotation.x=J(.35,-.95,P),h.rotation.x=J(J(h.rotation.x,-1.65+W*.35,P),-.3,Y),h.rotation.z=J(J(h.rotation.z,.55,P),-1.1,Y),G.rotation.x+=.18*P-.25*Y,je+=-.12*Y,Ct>.3&&Ct<.6&&Et.forEach(K=>{K.scale.y=.2})}else if(gt===10||gt===11){let P=gt===10,W=xe(Lt(0,.06))*(1-Lt(.06,.1)),Y=xe(Lt(.06,.16)),K=1-Si,j=P?-.2:-2.7,Pt=P?-2.6:-.3,Nt=P?-.7:.9,Xt=P?.9:-.7;u.rotation.x=J(u.rotation.x,J(j,Pt,Y),K),u.rotation.z=J(u.rotation.z,J(Nt,Xt,Y),K),f.rotation.x=J(.35,.8,K),h.rotation.x=J(h.rotation.x,.5,K),o.rotation.y=J(P?.3:-.2,P?-.35:.35,Y)*K,je+=(.12*Y-.05*W)*K,L.rotation.z=P?-.75:.75,L.visible=Ct>.06&&Ct<.26,R.material.opacity=.85*(1-Lt(.16,.26))}else if(gt===12){let P=xe(Lt(0,.08))*(1-Lt(.08,.12)),W=xe(Lt(.08,.14))*(1-Si);u.rotation.x=J(J(u.rotation.x,-.9,P),-1.55,W),u.rotation.z=J(u.rotation.z,.05,Math.max(P,W)),u.rotation.y=.35*P,f.rotation.x=J(.35,-.02,W),h.rotation.x=J(h.rotation.x,.8,W),s.rotation.x-=.7*W,r.rotation.x+=.5*W,o.rotation.y=J(.35*P,-.4,W),je+=.3*W-.08*P,I.visible=Ct>.08&&Ct<.3,I.scale.set(1,1,1+Lt(.08,.16)*7),I.material.opacity=.8*(1-Lt(.16,.3))}else if(gt===13){let P=xe(Lt(0,.08))*(1-Si),W=Lt(.08,.55);u.rotation.z=J(u.rotation.z,1.5,P),u.rotation.x=0,u.rotation.y=.5*P,f.rotation.x=J(.35,1.3,P),h.rotation.z=J(h.rotation.z,-1.2,P),ye=-Math.PI*4*(1-Math.pow(1-W,2)),zn-=.1*xe(Lt(0,.08))*(1-Lt(.08,.14)),C.visible=Ct>.1&&Ct<.62,C.material.opacity=.8*(1-Lt(.45,.62)),C.scale.setScalar(1+Lt(.1,.6)*.3)}else if(gt===14){let P=xe(Lt(0,.08))*(1-Lt(.08,.14)),W=xe(Lt(.08,.18))*(1-Lt(.3,ge));u.rotation.x=J(J(u.rotation.x,.3,P),-2.7,W),u.rotation.z=J(u.rotation.z,-.2,Math.max(P,W)),h.rotation.x=J(h.rotation.x,-.9,.7),h.rotation.z=J(h.rotation.z,.4,.7),zn-=.14*P-.06*W,je+=-.1*W+.1*P,o.rotation.y=J(.3*P,-.3,W)}else if(gt===15){let P=xe(Lt(0,.18))*(1-Lt(.18,.28)),W=xe(Lt(.18,.28))*(1-Si),Y=J(J(u.rotation.x,-2.9,P),-.35,W);u.rotation.x=Y,h.rotation.x=Y+.1,u.rotation.z=J(u.rotation.z,-.2,Math.max(P,W)),h.rotation.z=J(h.rotation.z,.3,Math.max(P,W)),f.rotation.x=J(.35,.1,P)+.55*W,je+=-.12*P+.32*W,zn-=.1*W*(1-Lt(.3,.45))-.04*P,s.rotation.x-=.4*W,r.rotation.x+=.25*W,G.rotation.y=0,M.visible=Ct>.18&&Ct<.4,M.material.opacity=.8*(1-Lt(.28,.4))}Ct>=ge&&(Ht=-1,o.rotation.y=0)}if(ot=Math.max(0,ot-k),ot>0&&(je-=.25*(ot/.25)),jt.forEach((Ct,ge)=>{ot>0?(Ct.emissive.setHex(16724016),Ct.emissiveIntensity=.9*(ot/.25)):(Ct.emissive.setHex(Me[ge].color),Ct.emissiveIntensity=Me[ge].intensity)}),st=Zt(st,at?1:0,6,k),at&&Et.forEach(Ct=>{Ct.scale.y=.15}),e.rotation.x=J(je,-1.45,st),e.rotation.y=ye,e.rotation.z=Cs*(1-st),e.scale.set(1+(1-zn)*.5,zn,1+(1-zn)*.5),Ot>=0){Ot+=k;let ge=Math.min(Ot/2.2,1),xe=Math.sin(Math.min(ge*4,1)*Math.PI/2)*(ge>.85?(1-ge)/.15:1);u.rotation.z=.12+xe*2.5,u.rotation.x=-xe*.2+Math.sin(Ot*12)*.35*xe,G.rotation.z+=xe*.08,(ge>=1||ct>.3||et>.3)&&(Ot=-1)}}return{object:t,setStance(k){D=k},setGlow(k){$=k},bladeTip(k){return f.visible?(f.updateWorldMatrix(!0,!1),f.localToWorld(k.set(0,0,v?v.tip??2.6:1.9))):null},setHeld(k){let rt=jf.includes(k);rt&&!E[k]&&(E[k]=Kf(k),f.add(E[k].group));for(let[mt,Ut]of Object.entries(E))Ut.group.visible=mt===k;v=rt?E[k]:null,b.visible=k==="sword",f.visible=k==="sword"||rt,A.visible=k==="potion"},setTrailColor(k=15269883){M.material.color.setHex(k),T.material.color.setHex(k),C.material.color.setHex(k===15269883?16774344:k),R.material.color.setHex(k),I.material.color.setHex(k)},drink(){return at?!1:(Ht=0,gt=5,O=1,Ot=-1,ee=-1,!0)},wave(){Ot<0&&Ht<0&&(Ot=0)},attack(k=0,rt=1){return at?!1:(Ht=0,gt=k,O=rt,Ot=-1,ee=-1,!0)},get attacking(){return Ht>=0},hurt(){ot=.25},setFainted(k){at=k,k?Ht=-1:st=0},get stepped(){return Bt},set stepped(k){Bt=k},update(k,rt={}){if(v){let Ut=.75+.35*(.5+.5*Math.sin(St*3.2+Dt*3.2));v.pulse.forEach((xt,ye)=>{xt.emissiveIntensity=v.base[ye]*Ut*$})}if(Dt+=k,Bt&&Dt<1/Kt)return;let mt=Math.min(Dt,.2);Dt=0,Mt(mt,rt)}}}var sM=14,rM=1.7,oM=38,aM=120,cM=1.1,ts=.85,tp=5,lM=-40,hM=1.15,uM=3,dM=.55,Bc=1310,Oi=.001;function ep(i,t){let e=i.object,n=e.position,s=new F,r=new ft,o=!0,a=0,c=0,l=null,h=!1,u=[],f=new F,d=new F,y=E=>({x:$e.clamp(E.x,n.x-ts,n.x+ts),z:$e.clamp(E.z,n.z-ts,n.z+ts)}),_=E=>{let v=E.box;f.set(n.x-ts,n.y,n.z-ts),d.set(n.x+ts,n.y+tp,n.z+ts);let A=f.x<v.max.x-Oi&&d.x>v.min.x+Oi&&f.y<v.max.y-Oi&&d.y>v.min.y+Oi&&f.z<v.max.z-Oi&&d.z>v.min.z+Oi;if(!A||!E.cyl)return A;let w=y(E.cyl);return Math.hypot(w.x-E.cyl.x,w.z-E.cyl.z)<E.cyl.r-Oi};function m(E){let v=y(E),A=v.x-E.x,w=v.z-E.z,x=Math.hypot(A,w);x<1e-6&&(A=n.x-E.x,w=n.z-E.z,x=Math.hypot(A,w)||1,Math.hypot(A,w)<1e-6&&(A=1));let S=E.r-x+Oi*2;n.x+=A/x*S,n.z+=w/x*S}function p(E,v){if(v===0)return;n[E]+=v;let A=t.groundHeight(n.x,n.z),w=n.y+(o||h?Math.abs(v)*hM+.02:0);if(A>w){n[E]-=v;return}for(let x of u){let S=x.box;if(!_(x))continue;let g=S.max.y-n.y;if(o&&g>0&&g<=cM){let M=n.y;if(n.y=S.max.y,!u.some(T=>T!==x&&_(T)))continue;n.y=M}x.cyl?m(x.cyl):n[E]=v>0?S.min[E]-ts-Oi:S.max[E]+ts+Oi}}function b(E){let v=o;n.y+=E;let A=E<=0;o=!1,h=!1,l=null;for(let S of u)_(S)&&(A?(n.y=Math.max(n.y,S.box.max.y),o=!0,l=S.kind):n.y=S.box.min.y-tp-Oi,s.y=0);let w=t.groundHeight(n.x,n.z);if((n.y<=w||!o&&v&&A&&n.y-w<.7)&&(n.y=w,s.y=0,o=!0,l="ground"),!o&&v&&A){let S=n.y;n.y-=.7;let g=-1/0,M=null;for(let T of u)T.box.max.y<=S+.01&&T.box.max.y>g&&_(T)&&(g=T.box.max.y,M=T.kind);n.y=S,M&&(n.y=g,s.y=0,o=!0,l=M)}let x=t.waterLevel-uM;if(!o&&n.y<x&&w<x&&(n.y=x,s.y<0&&(s.y=0),o=!0,h=!0,l="water"),!o&&s.y<=0){n.y-=.05;let S=u.find(g=>_(g));n.y+=.05,S&&(o=!0,l=S.kind)}}return{get grounded(){return o},get groundKind(){return l},get facing(){return a},get position(){return n},get swimming(){return h},respawn(E=0){n.copy(t.spawnPoint),s.set(0,0,0),r.set(0,0),a=E,e.rotation.y=E,o=!0},setFacing(E){a=E,e.rotation.y=E},knockback(E,v,A=0){r.set(E,v),A>0&&(s.y=A,o=!1)},update(E,v){u=t.collidersNear(n.x,n.z);let A=Math.min(1,Math.hypot(v.x,v.z));c=A;let w=!!v.run&&A>.1&&!h,x=sM*(h?dM:w?rM:1);if(s.x=v.x*x+r.x,s.z=v.z*x+r.y,r.multiplyScalar(Math.exp(-E*5)),v.jump&&o&&(s.y=oM*(h?.55:1),o=!1),s.y-=aM*E,p("x",s.x*E),p("z",s.z*E),b(s.y*E),n.x=$e.clamp(n.x,-Bc,Bc),n.z=$e.clamp(n.z,-Bc,Bc),A>.05&&!v.lockFacing){let g=Math.atan2(v.x,v.z)-a;g=Math.atan2(Math.sin(g),Math.cos(g)),a+=g*Math.min(1,E*14)}e.rotation.y=a,n.y<lM&&this.respawn(a),i.update(E,{speed:c,grounded:o,swimming:h,run:w})}}}function np(i,{joystickEl:t,jumpBtnEl:e,attackBtnEl:n,skillBtnsEl:s,onKey:r}){let o=new Set,a={dx:0,dy:0},c=0,l=!1,h=!1,u=!1,f=-1,d={x:0,y:0,id:null};window.addEventListener("keydown",w=>{if(l&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(w.code)&&w.preventDefault(),o.add(w.code),!w.repeat)){(w.code==="KeyF"||w.code==="KeyJ")&&(u=!0);let x={KeyQ:0,KeyE:1,KeyR:2};w.code in x&&(f=x[w.code]),r?.(w.code)}}),window.addEventListener("keyup",w=>o.delete(w.code)),window.addEventListener("blur",()=>o.clear());let y=new Map;i.addEventListener("contextmenu",w=>w.preventDefault()),i.addEventListener("pointerdown",w=>{l&&(i.setPointerCapture(w.pointerId),y.set(w.pointerId,{x:w.clientX,y:w.clientY,sx:w.clientX,sy:w.clientY,time:performance.now(),button:w.button}),i.classList.add("dragging"))});let _=0;i.addEventListener("pointermove",w=>{let x=y.get(w.pointerId);if(!x)return;let S=w.clientX-x.x,g=w.clientY-x.y;if(x.x=w.clientX,x.y=w.clientY,y.size>=2){let[M,T]=[...y.values()],C=Math.hypot(M.x-T.x,M.y-T.y);_&&(c+=(_-C)*4),_=C;return}_=0,a.dx+=S,a.dy+=g});let m=w=>{let x=y.get(w.pointerId);x&&w.type==="pointerup"&&x.button===0&&l&&Math.hypot(w.clientX-x.sx,w.clientY-x.sy)<6&&performance.now()-x.time<300&&(u=!0),y.delete(w.pointerId),y.size<2&&(_=0),y.size===0&&i.classList.remove("dragging")};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),i.addEventListener("wheel",w=>{l&&(w.preventDefault(),c+=w.deltaY)},{passive:!1});let p=t.querySelector(".knob"),b=48,E=w=>{let x=t.getBoundingClientRect(),S=w.clientX-(x.left+x.width/2),g=w.clientY-(x.top+x.height/2),M=Math.hypot(S,g);M>b&&(S=S/M*b,g=g/M*b),d.x=S/b,d.y=g/b,p.style.transform=`translate(${S}px, ${g}px)`};t.addEventListener("pointerdown",w=>{d.id=w.pointerId,t.setPointerCapture(w.pointerId),E(w)}),t.addEventListener("pointermove",w=>{w.pointerId===d.id&&E(w)});let v=w=>{w.pointerId===d.id&&(d.id=null,d.x=d.y=0,p.style.transform="")};t.addEventListener("pointerup",v),t.addEventListener("pointercancel",v),e.addEventListener("pointerdown",w=>{w.preventDefault(),h=!0}),e.addEventListener("pointerup",()=>{h=!1}),e.addEventListener("pointercancel",()=>{h=!1}),e.addEventListener("pointerleave",()=>{h=!1}),n.addEventListener("pointerdown",w=>{w.preventDefault(),l&&(u=!0)}),[...s.children].forEach((w,x)=>{w.addEventListener("pointerdown",S=>{S.preventDefault(),l&&(f=x)})});let A=(...w)=>w.some(x=>o.has(x));return{get enabled(){return l},set enabled(w){l=w,w||(o.clear(),y.clear(),h=!1,u=!1,f=-1)},move(){let w=(A("KeyW","ArrowUp")?1:0)-(A("KeyS","ArrowDown")?1:0),x=(A("KeyD","ArrowRight")?1:0)-(A("KeyA","ArrowLeft")?1:0);w+=-d.y,x+=d.x;let S=Math.hypot(w,x);return S>1&&(w/=S,x/=S),{forward:w,right:x}},jump(){return l&&(o.has("Space")||h)},run(){return l&&(A("ShiftLeft","ShiftRight")||Math.hypot(d.x,d.y)>.92)},consumeAttack(){let w=u;return u=!1,w},consumeSkill(){let w=f;return f=-1,w},consumeLook(){let w={dx:a.dx,dy:a.dy,zoom:c};return a.dx=a.dy=0,c=0,w}}}var fM=i=>"#"+i.toString(16).padStart(6,"0");function ip(i,t){let e=i.getContext("2d"),n=110,s=!1;function r(){let o=Math.min(window.devicePixelRatio,2),a=i.getBoundingClientRect();i.width=Math.round(a.width*o),i.height=Math.round(a.height*o)}return{get expanded(){return s},set expanded(o){s=o,i.classList.toggle("expanded",o),r()},resize:r,draw(o,a,c,l=[]){let h=i.width,u=i.height;if(!h||!u)return;let f=s?Vn-30:n,d=s?0:o.x,y=s?0:o.z,_=Math.min(h,u)/(f*2),m=x=>h/2+(x-d)*_,p=x=>u/2+(x-y)*_;e.fillStyle="#3b7fc0",e.fillRect(0,0,h,u),e.imageSmoothingEnabled=!0,e.drawImage(t.mapImage,m(-Vn),p(-Vn),Vn*2*_,Vn*2*_),e.lineWidth=1,e.strokeStyle="rgba(0,0,0,0.35)";for(let x of t.colliders){if(x.kind==="tree"||x.kind==="rock"||x.kind==="wall"||x.kind==="prop"||x.kind==="rail"||s&&x.kind!=="bridge"&&x.kind!=="house")continue;let S=x.box;e.fillStyle=fM(x.color),e.beginPath(),x.cyl?e.arc(m(x.cyl.x),p(x.cyl.z),Math.max(x.cyl.r*_,1.5),0,Math.PI*2):e.rect(m(S.min.x),p(S.min.z),(S.max.x-S.min.x)*_,(S.max.z-S.min.z)*_),e.fill(),e.stroke()}let b=m(o.x),E=p(o.z),v=h/i.getBoundingClientRect().width||1;e.fillStyle="#e0475a",e.strokeStyle="#ffffff",e.lineWidth=1.2*v;for(let x of l)e.beginPath(),e.arc(m(x.x),p(x.z),(x.big?3.6:2.6)*v,0,Math.PI*2),e.fill(),e.stroke();let A=Math.atan2(-Math.cos(c),-Math.sin(c));e.fillStyle="rgba(255,255,255,0.28)",e.beginPath(),e.moveTo(b,E),e.arc(b,E,34*v,A-.5,A+.5),e.closePath(),e.fill();let w=7*v;if(e.save(),e.translate(b,E),e.rotate(-a),e.fillStyle="#ffffff",e.strokeStyle="#1d8676",e.lineWidth=2.5*v,e.beginPath(),e.moveTo(0,w*1.3),e.lineTo(w,-w),e.lineTo(0,-w*.4),e.lineTo(-w,-w),e.closePath(),e.fill(),e.stroke(),e.restore(),s){e.font=`bold ${10*v}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.lineWidth=3*v,e.strokeStyle="rgba(28,26,58,0.8)",e.fillStyle="#ffffff";for(let x of sa){let S=m(x.x),g=p(x.z)-8*v;e.strokeText(x.name,S,g),e.fillText(x.name,S,g)}e.font=`bold ${16*v}px "M PLUS Rounded 1c", sans-serif`,e.fillStyle="#f4c25b";for(let x of ji){let S=m(x.cx),g=p(x.cz+40);e.strokeText(x.name,S,g),e.fillText(x.name,S,g)}}e.fillStyle="rgba(20,24,32,0.75)",e.font=`bold ${11*v}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.fillText("N",h/2,13*v)}}}var pM=20,sp=(i,t,e=0)=>Nc.some(n=>Math.hypot(i-n.x,t-n.z)<n.r+e);function mM(i=7167891){let t=new yt,e=new yt;e.position.y=2,t.add(e);let n=new bt({color:i,roughness:.9,flatShading:!0}),s=new Cn(1,1),r=[[0,0,0,1.25],[.9,.2,-.2,.85],[-.9,.15,-.1,.9],[.3,.75,-.3,.8],[-.4,.6,.3,.7],[0,-.35,-.6,.8]];for(let[a,c,l,h]of r){let u=new B(s,n);u.position.set(a,c,l),u.scale.setScalar(h),u.castShadow=!0,e.add(u)}let o=new bt({color:16769899,emissive:16763195,emissiveIntensity:1});for(let a of[-1,1]){let c=new B(new ie(.2,10,8),o);c.scale.set(1,.7,.5),c.position.set(a*.42,.1,1.18),c.rotation.z=a*-.35,e.add(c)}return{root:t,body:e,mats:[n],eyeMat:o,baseY:2,calmEye:16763195}}function gM(i=9407129){let t=new yt,e=new yt;e.position.y=1.7,t.add(e);let n=new bt({color:i,roughness:1,flatShading:!0}),s=new bt({color:7319119,roughness:1,flatShading:!0}),r=new B(new Jn(1.5,0),n);r.scale.set(1.1,.95,1),r.castShadow=!0;let o=new B(new ie(1.4,8,6,0,Math.PI*2,0,Math.PI*.33),s);o.position.y=.3,e.add(r,o);let a=new Jn(.55,0),c=[];for(let h of[-1,1]){let u=new B(a,n);u.position.set(h*2,-.2,.3),u.castShadow=!0,e.add(u),c.push(u);let f=new B(a,n);f.scale.set(1,.7,1.2),f.position.set(h*.75,-1.35,.1),f.castShadow=!0,e.add(f)}let l=new bt({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let h of[-1,1]){let u=new B(new dt(.34,.16,.1),l);u.position.set(h*.5,.15,1.4),u.rotation.z=h*.2,e.add(u)}return{root:t,body:e,mats:[n,s],eyeMat:l,arms:c,baseY:1.7,calmEye:4183744}}var xM={kumodama:{name:"\u30AF\u30E2\u30C0\u30DE",hp:30,speed:7,radius:1.4,height:3.6,damage:8,exp:6,aggro:22,attackRange:7,windup:.45,cooldown:1.4,knockback:1,color:9404352,build:mM},ishimori:{name:"\u30A4\u30B7\u30E2\u30EA",hp:80,speed:4.5,radius:1.8,height:3.6,damage:15,exp:18,aggro:18,attackRange:8,windup:.6,cooldown:2.2,knockback:.45,color:9407129,build:gM}},yo=Ce.plateau,rp=Ce.cave,yM=[["ishimori",yo.x+14,yo.z-14],["ishimori",yo.x-16,yo.z+4],["ishimori",yo.x+4,yo.z+16],["ishimori",rp.x-3,rp.z+5]];function op(i,t,e){let n=[],s=[],r=new F;function o(x){let S=document.createElement("div");return S.className="enemy-label",S.innerHTML=`<span class="enemy-name">${x.name} <small>Lv${x.level}</small></span><div class="enemy-hp"><div></div></div>`,S.style.display="none",e.appendChild(S),{el:S,fill:S.querySelector(".enemy-hp div")}}let a=yM.map(([x,S,g])=>[x,S,g,null]);for(let x of ji){if(!x.enemies)continue;let S=co(x.cx*17+x.cz*29+3);for(let[g,M]of Object.entries(x.enemies)){let T=0;for(let C=0;T<M.count&&C<800;C++){let L=x.cx+(S()-.5)*x.maxR*1.6,R=x.cz+(S()-.5)*x.maxR*1.6;t.groundHeight(L,R)<2.5||t.slopeAt(L,R)>.5||sp(L,R,8)||t.regionAt(L,R)===x&&(Object.values(x.places).some(I=>Math.hypot(L-I.x,R-I.z)<I.r)||a.some(([,I,H])=>Math.hypot(L-I,R-H)<14)||(a.push([g,L,R,M]),T++))}}}for(let[x,S,g,M]of a){let T=xM[x],C=M?.mult??1,L={...T,name:M?.name??T.name,hp:Math.round(T.hp*C),damage:Math.round(T.damage*C),exp:Math.round(T.exp*C),speed:T.speed*(1+(C-1)*.15),color:M?.tint??T.color,level:Math.round(1+(C-1)*5.5)},R=T.build(M?.tint);i.add(R.root);let I={T:L,type:x,model:R,home:new F(S,0,g),pos:new F,vel:new ft,facing:0,hp:L.hp,state:"wander",timer:0,cooldown:0,target:new F,dir:new ft,jumpFrom:new F,jumpTo:new F,hitDone:!1,flash:0,labelTimer:0,spawnT:1,bob:Math.random()*10,bleed:null,label:o(L)};n.push(I),c(I,!0)}function c(x,S=!1){x.hp=x.T.hp,x.pos.copy(x.home),x.pos.y=t.groundHeight(x.home.x,x.home.z),x.vel.set(0,0),x.state="wander",x.timer=Math.random()*2,x.target.copy(x.home),x.cooldown=0,x.spawnT=S?1:0,x.model.root.visible=!0,l(x,!1)}function l(x,S){let g=S?16734794:x.model.calmEye;x.model.eyeMat.emissive.setHex(g),x.model.eyeMat.color.setHex(S?16747130:x.model.calmEye)}function h(x){let S=Math.random()*Math.PI*2,g=3+Math.random()*10;x.target.set(x.home.x+Math.cos(S)*g,0,x.home.z+Math.sin(S)*g)}function u(x,S,g){let M=x.T.radius;for(let R of Nc){let I=x.pos.x-R.x,H=x.pos.z-R.z,z=Math.hypot(I,H);if(z<R.r+M){let U=(R.r+M)/Math.max(z,.001);x.pos.x=R.x+I*U,x.pos.z=R.z+H*U}}let T=t.groundHeight(x.pos.x,x.pos.z),C=t.groundHeight(S,g),L=Math.hypot(x.pos.x-S,x.pos.z-g);(T<1.2||x.state!=="attack"&&(T-C>L*1.1+.05||C-T>L*2+.05))&&(x.pos.x=S,x.pos.z=g,x.vel.set(0,0),x.state==="wander"&&h(x));for(let R of t.collidersNear(x.pos.x,x.pos.z)){if(R.box.min.y>x.pos.y+2||R.box.max.y<x.pos.y+.3||R.kind==="spawn")continue;let I,H;R.cyl?(I=R.cyl.x,H=R.cyl.z):(I=$e.clamp(x.pos.x,R.box.min.x,R.box.max.x),H=$e.clamp(x.pos.z,R.box.min.z,R.box.max.z));let z=M+(R.cyl?R.cyl.r:0),U=x.pos.x-I,N=x.pos.z-H,G=Math.hypot(U,N);G<z&&G>1e-4&&(x.pos.x=I+U/G*z,x.pos.z=H+N/G*z)}}function f(x,S,g,M,T){let C=S-x.pos.x,L=g-x.pos.z,R=Math.hypot(C,L);if(R<.3)return R;let I=Math.min(R,M*T);return x.pos.x+=C/R*I,x.pos.z+=L/R*I,d(x,C,L,T),R}function d(x,S,g,M){let C=Math.atan2(S,g)-x.facing;C=Math.atan2(Math.sin(C),Math.cos(C)),x.facing+=C*Math.min(1,M*8)}let y=new Cn(.3,0);function _(x,S,g=14){let M=new bt({color:S,flatShading:!0,transparent:!0});for(let T=0;T<g;T++){let C=new B(y,M);C.position.copy(x);let L=Math.random()*Math.PI*2,R=4+Math.random()*6;s.push({mesh:C,t:0,life:.7+Math.random()*.3,vel:new F(Math.cos(L)*R,5+Math.random()*8,Math.sin(L)*R)}),i.add(C)}}let m=new Li(.8,1,32);function p(x,S){let g=new B(m,new _e({color:16769184,transparent:!0,side:le,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.set(x.x,x.y+.15,x.z),i.add(g),s.push({mesh:g,t:0,life:.4,ring:S})}function b(x){for(let S=s.length-1;S>=0;S--){let g=s[S];g.t+=x;let M=g.t/g.life;if(M>=1){i.remove(g.mesh),s.splice(S,1);continue}if(g.ring)g.mesh.scale.setScalar(1+M*g.ring),g.mesh.material.opacity=1-M;else{g.vel.y-=30*x,g.mesh.position.addScaledVector(g.vel,x);let T=t.groundHeight(g.mesh.position.x,g.mesh.position.z)+.2;g.mesh.position.y<T&&(g.mesh.position.y=T,g.vel.multiplyScalar(.5),g.vel.y=Math.abs(g.vel.y)),g.mesh.scale.setScalar(1-M*.8),g.mesh.material.opacity=1-M*M,g.mesh.rotation.x+=x*8}}}function E(x,S,g,M=1,T=!0){let C=Math.max(1,Math.round(S*(.85+Math.random()*.3)));if(x.hp-=C,x.flash=.15,x.labelTimer=5,g&&M>0){let R=x.pos.x-g.x,I=x.pos.z-g.z,H=Math.max(Math.hypot(R,I),.001),z=12*x.T.knockback*M;x.vel.set(R/H*z,I/H*z)}let L=new F(x.pos.x,x.pos.y+x.T.height,x.pos.z);return x.hp<=0?(v(x),{enemy:x,pos:L,damage:C,killed:!0,exp:x.T.exp,name:x.T.name}):(T&&x.state!=="attack"&&(x.state="hurt",x.timer=.35),l(x,!0),{enemy:x,pos:L,damage:C,killed:!1,exp:0,name:x.T.name})}function v(x){x.state="dead",x.bleed=null,x.timer=pM,x.model.root.visible=!1,x.label.el.style.display="none",_(r.copy(x.pos).setY(x.pos.y+x.model.baseY),x.T.color)}function A(x,S){let g=S.playerPos,M=sp(g.x,g.z)||S.playerSwimming;for(let T of n){if(T.state==="dead"){T.timer-=x,T.timer<=0&&c(T);continue}let C=Math.hypot(g.x-T.pos.x,g.z-T.pos.z);if(T.model.root.visible=C<260,C>180)continue;if(T.bleed&&(T.bleed.tick-=x,T.bleed.tick<=0)){T.bleed.tick=1,T.bleed.left--;let q=E(T,T.bleed.dmg,null,0,!1);if(S.onBleed?.(q),T.bleed&&T.bleed.left<=0&&(T.bleed=null),T.state==="dead")continue}let L=T.T,R=T.pos.x,I=T.pos.z,H=g.x-T.pos.x,z=g.z-T.pos.z,U=Math.hypot(H,z),N=S.playerActive&&!M&&Math.abs(g.y-T.pos.y)<4;T.cooldown-=x,T.timer-=x,T.labelTimer-=x;let G=0;switch(T.state){case"wander":{if(N&&U<L.aggro){T.state="chase",l(T,!0);break}if(T.timer>0)break;f(T,T.target.x,T.target.z,L.speed*.35,x)<.5&&(T.timer=1+Math.random()*3,h(T));break}case"return":{if(N&&U<L.aggro){T.state="chase",l(T,!0);break}f(T,T.home.x,T.home.z,L.speed*.7,x)<1&&(T.state="wander",T.timer=1);break}case"chase":{if(!N||U>L.aggro*1.8){T.state="return",l(T,!1);break}if(U<L.attackRange&&T.cooldown<=0){T.state="windup",T.timer=L.windup;break}U>L.radius+1.2?f(T,g.x,g.z,L.speed,x):d(T,H,z,x);break}case"windup":{if(d(T,H,z,x),T.timer<=0){T.state="attack",T.hitDone=!1;let q=Math.max(U,.001);if(T.dir.set(H/q,z/q),T.type==="ishimori"){let Z=Math.min(U,8);T.jumpFrom.copy(T.pos),T.jumpTo.set(T.pos.x+T.dir.x*Z,0,T.pos.z+T.dir.y*Z),T.timer=.55}else T.timer=.35}break}case"attack":{if(T.type==="ishimori"){let q=1-Math.max(T.timer,0)/.55;if(T.pos.lerpVectors(T.jumpFrom,T.jumpTo,q),G=Math.sin(q*Math.PI)*3.5,T.timer<=0){p(T.pos,5);let Z=Math.hypot(g.x-T.pos.x,g.z-T.pos.z);N&&Z<4.5&&g.y-T.pos.y<1.5&&S.onHitPlayer(L.damage,T.pos.x,T.pos.z),T.state="recover",T.timer=.7,T.cooldown=L.cooldown}}else{T.pos.x+=T.dir.x*20*x,T.pos.z+=T.dir.y*20*x;let q=Math.hypot(g.x-T.pos.x,g.z-T.pos.z);!T.hitDone&&N&&q<L.radius+1.1&&(T.hitDone=!0,S.onHitPlayer(L.damage,T.pos.x,T.pos.z)),T.timer<=0&&(T.state="recover",T.timer=.5,T.cooldown=L.cooldown)}break}case"recover":case"hurt":{T.timer<=0&&(T.state=N?"chase":"return");break}}T.pos.x+=T.vel.x*x,T.pos.z+=T.vel.y*x,T.vel.multiplyScalar(Math.exp(-x*6)),u(T,R,I),T.pos.y=t.groundHeight(T.pos.x,T.pos.z);for(let q of n){if(q===T||q.state==="dead")continue;let Z=T.pos.x-q.pos.x,it=T.pos.z-q.pos.z,_t=Math.hypot(Z,it),Et=T.T.radius+q.T.radius;_t<Et&&_t>.001&&(T.pos.x+=Z/_t*(Et-_t)*.5,T.pos.z+=it/_t*(Et-_t)*.5)}let X=T.model;T.bob+=x,T.spawnT=Math.min(1,T.spawnT+x*2),X.root.position.set(T.pos.x,T.pos.y+G,T.pos.z),X.root.rotation.y=T.facing,X.root.scale.setScalar(T.spawnT);let Q=1;if(T.state==="windup"&&(Q=1-(1-T.timer/L.windup)*.25+Math.sin(T.bob*50)*.03),T.type==="kumodama")X.body.position.y=X.baseY+Math.sin(T.bob*3)*.25,X.body.rotation.z=Math.sin(T.bob*2)*.08;else{let q=T.state==="chase"||T.state==="return"||T.state==="wander"&&T.timer<=0;X.body.position.y=X.baseY+(q?Math.abs(Math.sin(T.bob*8))*.2:0),X.arms[0].position.y=-.2+Math.sin(T.bob*3)*.15,X.arms[1].position.y=-.2+Math.sin(T.bob*3+1)*.15}X.body.scale.set(1/Math.sqrt(Q),Q,1/Math.sqrt(Q)),T.flash=Math.max(0,T.flash-x);for(let q of X.mats)q.emissive.setHex(16777215),q.emissiveIntensity=T.flash>0?.8:0}b(x)}function w(x){for(let S of n){let g=S.label.el;if(!(S.state!=="dead"&&(S.labelTimer>0||S.state==="chase"||S.state==="windup"||S.state==="attack"))){g.style.display="none";continue}if(r.set(S.pos.x,S.pos.y+S.T.height+.9,S.pos.z),r.distanceTo(x.position)>70){g.style.display="none";continue}if(r.project(x),r.z>1){g.style.display="none";continue}g.style.display="";let T=(r.x+1)/2*window.innerWidth,C=(1-r.y)/2*window.innerHeight;g.style.transform=`translate(-50%, -100%) translate(${T}px, ${C}px)`,S.label.fill.style.width=Math.max(0,S.hp)/S.T.hp*100+"%"}}return{list:n,update:A,updateLabels:w,attack(x,S,{range:g,arc:M,damage:T,knockback:C=1,bleed:L=!1}){let R=Math.sin(S),I=Math.cos(S);return this.hitArea(H=>{let z=H.pos.x-x.x,U=H.pos.z-x.z,N=Math.hypot(z,U);if(N-H.T.radius>g||Math.abs(x.y-H.pos.y)>3.5)return!1;let G=(z*R+U*I)/Math.max(N,.001);return N<=H.T.radius+.5||Math.acos($e.clamp(G,-1,1))<=M/2},{damage:T,knockback:C,from:x,bleed:L})},hitArea(x,{damage:S,knockback:g=1,from:M,bleed:T=!1}){let C=[];for(let L of n){if(L.state==="dead"||L.spawnT<1||!x(L))continue;let R=E(L,S,M,g);T&&!R.killed&&(L.bleed={left:3,tick:1,dmg:Math.max(1,Math.round(S*.2))}),C.push(R)}return C},calmDown(){for(let x of n)x.state!=="dead"&&(x.state="return",l(x,!1))},alive(){return n.filter(x=>x.state!=="dead").map(x=>({x:x.pos.x,z:x.pos.z,big:x.type==="ishimori"}))}}}function ap(i){let t=[],e=new F,n=1.1;return{add(s,r,o=""){let a=document.createElement("div");a.className="popup-text "+o,a.textContent=r,i.appendChild(a),t.push({el:a,pos:s.clone(),t:0,dx:(Math.random()-.5)*1.2})},update(s,r){for(let o=t.length-1;o>=0;o--){let a=t[o];if(a.t+=s,a.t>n){a.el.remove(),t.splice(o,1);continue}if(e.copy(a.pos),e.y+=a.t*2,e.x+=a.dx*a.t,e.project(r),e.z>1){a.el.style.display="none";continue}a.el.style.display="";let c=(e.x+1)/2*window.innerWidth,l=(1-e.y)/2*window.innerHeight,h=a.t<.12?.6+a.t/.12*.7:1.3-Math.min(a.t,.4)*.75;a.el.style.transform=`translate(-50%, -50%) translate(${c}px, ${l}px) scale(${h})`,a.el.style.opacity=a.t>n*.65?(n-a.t)/(n*.35):1}},clear(){for(let s of t)s.el.remove();t.length=0}}}var Dn=4,bs=1.2,cp=12,_M={snow:["cold"],highlands:["cold"],desert:["heat"],volcano:["heat","fire"],marsh:["water"],forest:["water"]},EM=.6,kc=(i,t={})=>new bt({color:i,roughness:.85,flatShading:!0,...t}),es=(i,t,e,n,s,r,o)=>{let a=new B(new dt(i,t,e),n);return a.position.set(s,r,o),a.castShadow=a.receiveShadow=!0,a},qh=(i,t,e,n)=>{let s=new B(new Yt(i,i*1.5,4),t);return s.position.set(e,n+i*.75,0),s.rotation.y=Math.PI/4,s.castShadow=!0,s},lp=(i,t=.72)=>new tt(i).multiplyScalar(t).getHex();function MM(i){let t=new yt;for(let e of[-2,0,2]){let n=e===0?2.3:2.7;t.add(es(.36,n+bs,.36,i.post,e,(n-bs)/2,0)),t.add(qh(.27,i.post,e,n))}return t.add(es(4,.26,.14,i.plank,0,.85,.14)),t.add(es(4,.26,.14,i.plank,0,1.8,.14)),{group:t}}function vM(i){let t=new yt,e=new Rt(.42,.42,4,8).rotateZ(Math.PI/2);for(let n=-1;n<5;n++){let s=new B(e,n%2?i.plank:i.log);s.position.y=.42+n*.8,s.castShadow=s.receiveShadow=!0,t.add(s)}for(let n of[-2,2])t.add(es(.72,4.5+bs,.95,i.post,n,(4.5-bs)/2,0)),t.add(qh(.5,i.post,n,4.5));return{group:t}}function wM(i,t,e,n){let s=new yt;s.position.x=n*t/2;let r=4;for(let a=0;a<r;a++){let c=-t/2+(a+.5)*(t/r);s.add(es(t/r-.05,e-a%2*.15,.18,i.plank,c,e/2+.25,0))}for(let a of[.8,e-.5])s.add(es(t,.26,.12,i.post,0,a,.14));let o=es(Math.hypot(t,e-1.3)-.3,.22,.1,i.post,0,e/2+.15,.15);o.rotation.z=n*Math.atan2(e-1.3,t),s.add(o);for(let a of[.26,-.26]){let c=new B(new Pn(.2,.05,6,12),i.knob);c.position.set(n*(t/2-.45),e/2,a),s.add(c)}return s}function TM(i){let t=new yt;for(let r of[-4,4])t.add(es(.7,4.9+bs,.7,i.post,r,(4.9-bs)/2,0)),t.add(qh(.5,i.post,r,4.9));t.add(es(8.8,.45,.55,i.post,0,4.75,0)),t.add(es(3,.7,.2,i.plank,0,4.2,.2));let e=4-.4,n=4,s=[-1,1].map(r=>{let o=new yt;return o.position.x=r*(4-.38),o.add(wM(i,e,n,-r)),t.add(o),o});return{group:t,hinges:s}}var Ts={fence:{half:2,thick:.3,height:3,hpMult:1,shape:MM},wall:{half:2,thick:.48,height:4.6,hpMult:2.2,shape:vM},door:{half:4,thick:.35,height:5,hpMult:1.6,shape:TM}},hp=i=>{let t=Ts[i.type].half,e=i.alongX?i.x:i.z;return{f:i.alongX?i.z:i.x,a0:e-t,a1:e+t,alongX:i.alongX}};function bM(i,t){let e=hp(i),n=hp(t),s=.01;if(e.alongX===n.alongX)return Math.abs(e.f-n.f)>s||Math.min(e.a1,n.a1)-Math.max(e.a0,n.a0)<=s?"ok":i.type==="door"&&t.type!=="door"&&n.a0>=e.a0-s&&n.a1<=e.a1+s?"replace":"block";let r=(a,c,l)=>a>c+s&&a<l-s,o=(a,c,l)=>a>=c-s&&a<=l+s;return r(n.f,e.a0,e.a1)&&o(e.f,n.a0,n.a1)||r(e.f,n.a0,n.a1)&&o(n.f,e.a0,e.a1)?"block":"ok"}function up(i,t){let e=[],n=new Map,s=kc(3813944,{metalness:.5,roughness:.4});function r(S){if(!n.has(S)){let g=Je[S].plank,M=S==="woodCrystal"?{emissive:6312096,emissiveIntensity:.35}:{};n.set(S,{plank:kc(g,M),log:kc(lp(g,.88),M),post:kc(lp(g),M),knob:s})}return n.get(S)}let o=new _e({color:8384704,transparent:!0,opacity:.42,depthWrite:!1}),a=new _e({color:16738906,transparent:!0,opacity:.42,depthWrite:!1}),c={plank:o,log:o,post:o,knob:o},l={fence:[],wall:[],door:[]};function h(S,g){let M=l[S];for(;M.length<=g;){let T=Ts[S].shape(c).group;T.traverse(C=>{C.isMesh&&(C.castShadow=C.receiveShadow=!1)}),T.visible=!1,i.add(T),M.push(T)}return M[g]}let u=new B(new Rt(.25,.25,7,8),new _e({color:16040539,transparent:!0,opacity:.8}));u.visible=!1,i.add(u);let f=[];function d(S,g,M,T,C,L=0){let R=Ts[S],I=C?R.half:R.thick,H=C?R.thick:R.half;return new he(new F(g-I+L,M-bs+L,T-H+L),new F(g+I-L,M+R.height-L,T+H-L))}function y(S,g,M,T,C){let L=Ts[S],I=(T?[[g-L.half,M],[g,M],[g+L.half,M]]:[[g,M-L.half],[g,M],[g,M+L.half]]).map(([Q,q])=>t.groundHeight(Q,q)),H=I[1],z={type:S,x:g,z:M,y:H,alongX:T,ok:!0,reason:"",replace:[]},U=Q=>(z.ok=!1,z.reason=Q,z);if(Math.min(...I)<t.waterLevel+.2)return U("\u6C34\u306E\u4E0A\u306B\u306F\u5EFA\u3066\u3089\u308C\u306A\u3044");if(Math.max(...I)-Math.min(...I)>(S==="door"?3:2.4))return U("\u5742\u304C\u6025\u3059\u304E\u3066\u5EFA\u3066\u3089\u308C\u306A\u3044");let N=d(S,g,H,M,T,.15);N.min.y=H+.2;let G=new Set;for(let Q of t.collidersNear(g,M))if(Q.structure){let q=Q.structure;if(G.has(q))continue;G.add(q);let Z=bM(z,q);if(Z==="block")return U("\u3082\u3046\u5EFA\u3063\u3066\u3044\u308B\u7269\u3068\u3076\u3064\u304B\u308B");Z==="replace"&&z.replace.push(q)}else if(!Q.box.isEmpty()&&Q.box.intersectsBox(N))return U("\u307B\u304B\u306E\u7269\u3068\u3076\u3064\u304B\u308B");return new he(new F(C.x-.9,C.y,C.z-.9),new F(C.x+.9,C.y+5,C.z+.9)).intersectsBox(N)?U("\u81EA\u5206\u3068\u91CD\u306A\u3063\u3066\u3044\u308B"):z}let _=(S,g,M=4.5)=>({x:S.x+Math.sin(g)*M,z:S.z+Math.cos(g)*M}),m=S=>({x:Math.round(S.x/Dn)*Dn,z:Math.round(S.z/Dn)*Dn});function p(S,g,M,T){let C=_(g,M),L=Math.sin(M),R=Math.cos(M),I=Math.abs(R)>=Math.abs(L);T&&(I=!I);let H=X=>Math.floor(X/Dn)*Dn+Dn/2,z=X=>Math.round(X/Dn)*Dn,U=Ts[S].half===2?H:z,N=I?U(C.x):z(C.x),G=I?z(C.z):U(C.z);return[y(S,N,G,I,g)]}function b(S,g,M,T){let C=(G,X)=>G+$e.clamp(X-G,-cp*Dn,cp*Dn);M={x:C(g.x,M.x),z:C(g.z,M.z)};let L=Math.min(g.x,M.x),R=Math.max(g.x,M.x),I=Math.min(g.z,M.z),H=Math.max(g.z,M.z),z=[],U=G=>{for(let X=L;X<R-.01;X+=Dn)z.push(y(S,X+Dn/2,G,!0,T))},N=G=>{for(let X=I;X<H-.01;X+=Dn)z.push(y(S,G,X+Dn/2,!1,T))};return I===H?U(I):L===R?N(L):(U(I),U(H),N(L),N(R)),{plans:z,w:(R-L)/Dn,d:(H-I)/Dn}}function E(S,g,M){let T=Je[S],C=t.regionAt(g,M),L=_M[C?.id]??[],R=L.filter(H=>!T.resist[H]),I=L.filter(H=>T.resist[H]);return{mult:R.length?EM:1,weak:R.map(H=>`${C.name}\u3067\u306F${Qi[H].effect}`),strong:I.map(H=>`${Qi[H].name}\u306B\u5F37\u3044\u306E\u3067\u3001${C.name}\u3067\u3082\u5E73\u6C17`)}}let v=(S,g,M)=>Math.round(Je[g].durability*Ts[S].hpMult*M.mult);function A(S,g){let{type:M,x:T,y:C,z:L,alongX:R}=S;for(let Q of S.replace)e.includes(Q)&&w(Q);let I=Ts[M].shape(r(g)),H=I.group;H.position.set(T,C,L),H.rotation.y=R?0:Math.PI/2,i.add(H);let z=E(g,T,L),U=v(M,g,z),N={type:M,woodId:g,x:T,y:C,z:L,alongX:R,group:H,hinges:I.hinges,hp:U,maxHp:U,colliders:[],panels:[],shake:0,open:!1,angle:0,target:0},G=Je[g].plank,X=Q=>({box:Q,color:G,kind:"fence",structure:N});if(M!=="door")N.colliders.push(X(d(M,T,C,L,R)));else{let Q=Ts.door,q=(Z,it,_t)=>{let Et=new he(new F,new F);return R?Et.set(new F(T+Z,C-bs,L-_t),new F(T+it,C+Q.height,L+_t)):Et.set(new F(T-_t,C-bs,L+Z),new F(T+_t,C+Q.height,L+it)),Et};N.colliders.push(X(q(-4.4,-3.6,.4)),X(q(3.6,4.4,.4))),N.panels=[X(q(-3.6,0,Q.thick)),X(q(0,3.6,Q.thick))],N.colliders.push(...N.panels)}return N.colliders.forEach(Q=>t.addCollider(Q)),e.push(N),{s:N,env:z}}function w(S){i.remove(S.group),S.group.traverse(g=>{g.isMesh&&g.geometry.dispose()});for(let g of S.colliders)S.open&&S.panels.includes(g)||t.removeCollider(g);e.splice(e.indexOf(S),1)}let x=new F;return{get count(){return e.length},cornerAt(S,g){return m(_(S,g))},preview(S,g,M,T,C,L=null){if(u.visible=!!(S&&L),!S)f=[];else if(L){let U=b(S,L,m(_(g,M)),g);f=U.plans,u.position.set(L.x,t.groundHeight(L.x,L.z)+3.5,L.z),f.w=U.w,f.d=U.d}else f=p(S,g,M,T);let R={fence:0,wall:0,door:0};o.color.set(C?Je[C].plank:16777215).lerp(new tt(8384704),.5);for(let U of f){let N=h(U.type,R[U.type]++);N.visible=!0,N.position.set(U.x,U.y,U.z),N.rotation.y=U.alongX?0:Math.PI/2;let G=U.ok?o:a;N.traverse(X=>{X.isMesh&&(X.material=G)})}for(let[U,N]of Object.entries(l))for(let G=R[U];G<N.length;G++)N[G].visible=!1;if(!S)return null;let I=f.filter(U=>U.ok).length,H=f[0],z=H?E(C,H.x,H.z):{mult:1,weak:[],strong:[]};return{plans:f,count:f.length,ok:I,reason:f.find(U=>!U.ok)?.reason??"",w:f.w,d:f.d,env:z,hp:v(S,C,z)}},place(S){let g=f.filter(T=>T.ok);if(!g.length)return{placed:0,reason:f[0]?.reason??""};let M=g.map(T=>A(T,S));return f=[],{placed:M.length,skipped:0,structures:M.map(T=>T.s),env:M[0].env}},climate:E,hit(S,g,{range:M,arc:T,damage:C}){let L=[],R=Math.sin(g),I=Math.cos(g);for(let H of[...e]){let z=Ts[H.type].half,U=H.alongX?$e.clamp(S.x,H.x-z,H.x+z):H.x,N=H.alongX?H.z:$e.clamp(S.z,H.z-z,H.z+z),G=U-S.x,X=N-S.z,Q=Math.hypot(G,X);if(Q>M+.6||Math.abs(H.y-S.y)>5||Q>1.2&&Math.acos($e.clamp((G*R+X*I)/Q,-1,1))>T/2)continue;let q=H.woodId==="woodMaple"?.8:1,Z=Math.max(1,Math.round(C*q*(.9+Math.random()*.2)));H.hp-=Z,H.shake=.3;let it=H.hp<=0,_t=x.set(U,H.y+1.6,N).clone();it&&w(H),L.push({pos:_t,damage:Z,destroyed:it,name:Je[H.type].name,hp:Math.max(0,H.hp),maxHp:H.maxHp,woodId:H.woodId})}return L},nearestDoor(S,g=7){let M=null,T=g;for(let C of e){if(C.type!=="door")continue;let L=Math.hypot(S.x-C.x,S.z-C.z);L<T&&Math.abs(S.y-C.y)<5&&(T=L,M=C)}return M},toggleDoor(S,g,M){if(!S.open){let T=S.alongX?Math.sign(g.z-S.z):Math.sign(g.x-S.x);return S.target=(T||1)*1.7,S.open=!0,S.panels.forEach(C=>t.removeCollider(C)),!0}return M&&S.panels.some(T=>M.intersectsBox(T.box))?!1:(S.target=0,S.open=!1,S.panels.forEach(T=>t.addCollider(T)),!0)},update(S){for(let g of e){if(g.hinges&&g.angle!==g.target){let M=S*4;g.angle+=$e.clamp(g.target-g.angle,-M,M),g.hinges[0].rotation.y=g.angle,g.hinges[1].rotation.y=-g.angle}if(g.shake>0){g.shake=Math.max(0,g.shake-S);let M=Math.sin(g.shake*60)*.12*(g.shake/.3);g.group.position.set(g.x+(g.alongX?0:M),g.y,g.z+(g.alongX?M:0))}}}}}var dp=i=>new F(Math.sin(i),0,Math.cos(i)),fp=i=>i.clone().setY(i.y+3),ns={bloodGale:{name:"\u8840\u98A8\u65AC",key:"Q",desc:"\u6B8B\u50CF\u3092\u6B8B\u3057\u3066\u99C6\u3051\u629C\u3051\u3001\u901A\u308A\u9053\u3092\u65AC\u308B\u3002\u5C11\u3057\u9045\u308C\u3066\u3001\u901A\u308A\u9053\u304B\u3089\u8840\u306E\u68D8\u304C\u5674\u304D\u51FA\u3059\uFF08\u99C6\u3051\u629C\u3051\u308B\u9593\u306F\u7121\u6575\uFF09",cooldown:5,duration:.62,anim:6,start(i,t){let e=dp(i.player.facing);t.dir=e,t.from=i.player.position.clone(),t.to=t.from.clone().addScaledVector(e,14),t.ghosts=0,t.cut=!1,t.burst=!1,i.invuln(.55),i.player.knockback(e.x*58,e.z*58),i.fovKick(8)},update(i,t,e){for(;t.ghosts<5&&e>=t.ghosts*.04;)i.fx.afterimage(i.character.object,.35),t.ghosts++;if(!t.cut&&e>=.16){t.cut=!0,i.fx.streak(t.from,i.player.position.clone().addScaledVector(t.dir,2),3,.8);let n=t.from,s=t.to;t.hits=i.enemies.hitArea(r=>xr(r.pos.x,r.pos.z,n.x,n.z,s.x,s.z)<2.8+r.T.radius&&Math.abs(r.pos.y-n.y)<5,{damage:i.power(2.4),knockback:.6,from:n});for(let r of t.hits)i.fx.burst(r.pos,18,9);t.hits.length&&(i.hitStop(.08),i.shake(.5)),i.applyHits(t.hits)}if(!t.burst&&e>=.5){t.burst=!0;let n=t.from,s=t.to;for(let o=0;o<=6;o++){let a=n.clone().lerp(s,o/6);i.fx.spike(a.x,a.z,3.8,1.1)}i.fx.flash(n.clone().lerp(s,.5),90,35,.4);let r=i.enemies.hitArea(o=>xr(o.pos.x,o.pos.z,n.x,n.z,s.x,s.z)<3+o.T.radius&&Math.abs(o.pos.y-n.y)<5,{damage:i.power(1.5),knockback:.8,from:n,bleed:!0});for(let o of r)i.fx.burst(o.pos,12,7);i.shake(.35),i.applyHits(r)}}},crimsonMoon:{name:"\u7D05\u6708\u589C\u3068\u3057",key:"E",desc:"\u9AD8\u304F\u8DF3\u3073\u4E0A\u304C\u3063\u3066\u53E9\u304D\u3064\u3051\u3001\u4E09\u91CD\u306E\u885D\u6483\u6CE2\u30FB\u8840\u306E\u68D8\u306E\u8F2A\u30FB\u8840\u306E\u67F1\u3092\u5674\u304D\u4E0A\u3052\u308B",cooldown:8,duration:.95,anim:7,start(i,t){let e=dp(i.player.facing);i.player.knockback(e.x*8,e.z*8,36),i.invuln(.8),t.done=!1,t.wave=0},update(i,t,e){if(!t.done&&e>=.62){t.done=!0,t.c=i.player.position.clone();let n=t.c;i.fx.nova(n.clone().setY(n.y+.5),6,.35),i.fx.flash(n,160,45,.5),i.fx.burst(n.clone().setY(n.y+.5),40,13);for(let r=0;r<14;r++){let o=r/14*Math.PI*2;i.fx.spike(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,3.4,1.1)}for(let r=0;r<6;r++){let o=r/6*Math.PI*2+.3;i.fx.pillar(n.x+Math.cos(o)*9,n.z+Math.sin(o)*9,16,.9,1.3)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<10+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(3.2),knockback:3,from:n});for(let r of s)i.fx.burst(r.pos,14,8);i.shake(1),i.screenFlash(.6),i.fovKick(-6),s.length&&i.hitStop(.14),i.applyHits(s)}for(;t.done&&t.wave<3&&e>=.62+t.wave*.1;)i.fx.ring(t.c,8+t.wave*4,.5+t.wave*.15,t.wave===1?9046040:16722490),t.wave++}},bloodRelease:{name:"\u9BAE\u8840\u89E3\u653E",key:"R",desc:"HP \u3092 20% \u6367\u3052\u3001\u307E\u308F\u308A\u3092\u5439\u304D\u98DB\u3070\u3059\u8840\u306E\u7206\u767A\u3092\u8D77\u3053\u3059\u300210 \u79D2\u9593\u3001\u653B\u6483\u529B 1.8 \u500D\u30FB\u5438\u8840 25%\u3001\u5263\u3092\u632F\u308B\u305F\u3073\u306B\u8840\u306E\u65AC\u6483\u6CE2\u304C\u98DB\u3076",cooldown:25,duration:1,anim:9,canUse(i){let t=Math.ceil(i.stats.maxHp*.2);return i.stats.hp<=t+1?(i.toast("HP \u304C\u8DB3\u308A\u306A\u3044\u2026"),!1):!0},start(i,t){let e=Math.ceil(i.stats.maxHp*.2);i.stats.hp-=e,i.popup(i.player.position.clone().setY(i.player.position.y+5.5),`-${e}`,"hurt"),i.invuln(1),t.done=!1},update(i,t,e){if(t.done||e<.5)return;t.done=!0;let n=i.player.position.clone();i.fx.nova(fp(n),14,.7),i.fx.ring(n,16,.8),i.fx.ring(n,10,.6,9046040),i.fx.burst(fp(n),50,12),i.fx.flash(n,200,50,.7);for(let r=0;r<8;r++){let o=r/8*Math.PI*2;i.fx.pillar(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,20,1.1,1.1)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<12+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(2.6),knockback:3.2,from:n});i.applyHits(s),i.shake(1.1),i.screenFlash(.9),i.fovKick(10),i.startBuff({name:"\u9BAE\u8840\u89E3\u653E",time:10,atk:1.8,lifesteal:.25,waves:!0})}}};function pp(i,t){let e=[],r=new Cn(.16,0),o=new bt({color:11538462,emissive:5242888,emissiveIntensity:.6,roughness:.3,transparent:!0}),a=new Li(.85,1,48),c=new dt(.28,.1,.18),l=new Yt(.45,1,5).translate(0,.5,0),h=new bt({color:13639738,emissive:8390680,emissiveIntensity:.9,flatShading:!0,roughness:.2,metalness:.2,transparent:!0}),u=new Ye(16724032,0,30);i.add(u);let f=0,d=0,y=0,_=(m,p,b)=>{i.add(m),e.push({mesh:m,life:p,t:0,update:b})};return{burst(m,p=14,b=7){for(let E=0;E<p;E++){let v=new B(r,o);v.position.copy(m);let A=Math.random()*Math.PI*2,w=b*(.4+Math.random()*.8),x=new F(Math.cos(A)*w,4+Math.random()*7,Math.sin(A)*w);v.scale.setScalar(.6+Math.random()*.9),_(v,.6+Math.random()*.4,(S,g)=>{x.y-=28*g,v.position.addScaledVector(x,g);let M=t(v.position.x,v.position.z)+.1;v.position.y<M&&(v.position.y=M,x.set(0,0,0),v.scale.y=.25),v.material.opacity=1})}},chips(m,p=8,b=11897438){let E=new bt({color:b,roughness:.9,flatShading:!0});for(let v=0;v<p;v++){let A=new B(c,E);A.position.copy(m);let w=Math.random()*Math.PI*2,x=3+Math.random()*4,S=new F(Math.cos(w)*x,3+Math.random()*5,Math.sin(w)*x),g=new F(Math.random()*10,Math.random()*10,Math.random()*10);_(A,.8,(M,T)=>{S.y-=25*T,A.position.addScaledVector(S,T),A.rotation.x+=g.x*T,A.rotation.y+=g.y*T;let C=t(A.position.x,A.position.z)+.08;A.position.y<C&&(A.position.y=C,S.set(0,0,0),g.set(0,0,0))})}},ring(m,p,b=.5,E=16722490){let v=new B(a,new _e({color:E,transparent:!0,side:le,depthWrite:!1,blending:Zn}));v.rotation.x=-Math.PI/2,v.position.set(m.x,m.y+.2,m.z),_(v,b,A=>{let w=A.t/A.life;v.scale.setScalar(.5+p*(1-Math.pow(1-w,3))),v.material.opacity=1-w})},streak(m,p,b=2.2,E=.6){let v=m.distanceTo(p),A=new B(new vn(b,v),new _e({color:16722490,transparent:!0,side:le,depthWrite:!1,blending:Zn}));A.position.copy(m).lerp(p,.5),A.position.y+=1.6,A.lookAt(p.x,A.position.y,p.z),A.rotateX(Math.PI/2),_(A,E,w=>{let x=w.t/w.life;A.material.opacity=.8*(1-x),A.scale.x=1-x*.7})},spike(m,p,b=3.5,E=1.3){let v=t(m,p),A=new yt;A.position.set(m,v-.3,p);let w=3+Math.floor(Math.random()*3);for(let x=0;x<w;x++){let S=new B(l,h.clone()),g=b*(.5+Math.random()*.6);S.scale.set(.6+Math.random()*.5,g,.6+Math.random()*.5),S.position.set((Math.random()-.5)*1.4,0,(Math.random()-.5)*1.4),S.rotation.set((Math.random()-.5)*.7,Math.random()*3,(Math.random()-.5)*.7),S.userData.h=g,A.add(S)}_(A,E,x=>{let S=x.t/x.life,g=S<.12?S/.12:S>.7?1-(S-.7)/.3:1;A.children.forEach(M=>{M.scale.y=M.userData.h*Math.max(g,.001),M.material.opacity=S>.7?1-(S-.7)/.3:1})})},aura(m){let b=new Float32Array(150),E=Array.from({length:50},()=>({a:Math.random()*Math.PI*2,r:.6+Math.random()*1.2,y:Math.random()*5,v:1.5+Math.random()*2})),v=new ae;v.setAttribute("position",new pe(b,3));let A=new tn(v,new qe({color:16722490,size:.28,transparent:!0,opacity:.9,depthWrite:!1,blending:Zn}));A.frustumCulled=!1;let w=new B(a,new _e({color:16722490,transparent:!0,opacity:.5,side:le,depthWrite:!1,blending:Zn}));w.rotation.x=-Math.PI/2;let x=new yt;x.add(A,w);let S=!0;return _(x,1/0,(g,M)=>{x.position.copy(m.position),w.position.y=.15,w.scale.setScalar(1.6+Math.sin(g.t*6)*.15);for(let T=0;T<50;T++){let C=E[T];C.y+=C.v*M,C.y>5.5&&(C.y=0),C.a+=M*1.5,b[T*3]=Math.cos(C.a)*C.r,b[T*3+1]=C.y,b[T*3+2]=Math.sin(C.a)*C.r}v.attributes.position.needsUpdate=!0,S||(g.life=g.t)}),{stop(){S=!1}}},afterimage(m,p=.35){let b=m.clone(!0),E=new _e({color:16722490,transparent:!0,opacity:.55,depthWrite:!1,blending:Zn});b.traverse(v=>{(v.isMesh||v.isPoints)&&(v.material=E,v.castShadow=!1)}),b.position.copy(m.position),b.rotation.copy(m.rotation),_(b,p,v=>{E.opacity=.55*(1-v.t/v.life)})},pillar(m,p,b=14,E=.9,v=1.4){let A=t(m,p),w=new B(new Rt(v*.6,v,1,12,1,!0).translate(0,.5,0),new _e({color:16722490,transparent:!0,side:le,depthWrite:!1,blending:Zn}));w.position.set(m,A,p),_(w,E,x=>{let S=x.t/x.life;w.scale.set(1+S*.5,b*Math.min(1,S*6),1+S*.5),w.material.opacity=.85*(1-S),w.rotation.y+=.2}),this.burst(new F(m,A+1,p),8,5)},nova(m,p=12,b=.6){let E=new B(new ie(1,24,16),new _e({color:16722490,transparent:!0,depthWrite:!1,blending:Zn,side:le}));E.position.copy(m),_(E,b,v=>{let A=v.t/v.life;E.scale.setScalar(.5+p*(1-Math.pow(1-A,3))),E.material.opacity=.6*(1-A)})},flash(m,p=80,b=30,E=.35){u.position.copy(m),u.position.y+=2,u.distance=b,y=p,f=E,d=0},crescent(m,p,{speed:b=42,life:E=.55,size:v=3.2,onMove:A}={}){let w=new yt,x=new B(new Pn(v,v*.14,6,24,Math.PI),new _e({color:16722490,transparent:!0,depthWrite:!1,blending:Zn,side:le}));x.rotation.set(-Math.PI/2,0,Math.PI),x.scale.z=.4,w.add(x),w.position.copy(m),w.lookAt(m.x+p.x,m.y,m.z+p.z),_(w,E,(S,g)=>{w.position.addScaledVector(p,b*g);let M=S.t/S.life;x.material.opacity=.9*(1-M*M),w.scale.setScalar(1+M*.4),A?.(w.position)})},update(m){d<f?(d+=m,u.intensity=y*Math.max(0,1-d/f)):u.intensity=0;for(let p=e.length-1;p>=0;p--){let b=e[p];b.t+=m,b.update(b,m),b.t>=b.life&&(i.remove(b.mesh),e.splice(p,1))}}}}var It=i=>document.getElementById(i),mp=["\u30D2\u30F3\u30C8\uFF1A\u65C5\u306F\u5CF6\u306E\u4E2D\u592E\u306B\u3042\u308B\u661F\u306E\u796D\u58C7\u304B\u3089\u59CB\u307E\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730\u306E\u5854\u306E\u3066\u3063\u307A\u3093\u306B\u3001\u30AF\u30EA\u30B9\u30BF\u30EB\u304C\u7720\u3063\u3066\u3044\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A4\u672C\u306E\u5927\u6A4B\u3092\u6E21\u308B\u3068\u3001\u305D\u308C\u305E\u308C\u5225\u306E\u5CF6\u3078\u884C\u3051\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u5CF6\u306F\u3068\u3066\u3082\u5E83\u3044\u3002M \u30AD\u30FC\u306E\u5730\u56F3\u3067\u540D\u6240\u3092\u63A2\u3057\u3066\u307F\u3088\u3046","\u30D2\u30F3\u30C8\uFF1A\u9060\u304F\u306E\u5730\u65B9\u307B\u3069\u9B54\u7269\u304C\u5F37\u304F\u306A\u308A\u307E\u3059\u3002\u30EC\u30D9\u30EB\u3092\u4E0A\u3052\u3066\u304B\u3089\u884C\u3053\u3046","\u30D2\u30F3\u30C8\uFF1A\u6D77\u3084\u6E56\u3067\u306F\u6CF3\u3052\u307E\u3059\u3002\u6CF3\u3044\u3067\u3044\u308B\u9593\u306F\u9B54\u7269\u306B\u8972\u308F\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30B7\u30AA\u30AB\u30BC\u6751\u306F\u5B89\u5168\u5730\u5E2F\u3067\u3059","\u30D2\u30F3\u30C8\uFF1AM \u30AD\u30FC\u3067\u5CF6\u306E\u5730\u56F3\u3092\u5927\u304D\u304F\u8868\u793A\u3067\u304D\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u796D\u58C7\u306E\u307E\u308F\u308A\u306F\u5B89\u5168\u5730\u5E2F\u3002\u9B54\u7269\u306F\u5165\u3063\u3066\u3053\u3089\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30AF\u30EA\u30C3\u30AF\u304B F \u30AD\u30FC\u3067\u5263\u3092\u632F\u308C\u307E\u3059\u3002\u7D9A\u3051\u3066\u62BC\u3059\u30683\u6BB5\u30B3\u30F3\u30DC","\u30D2\u30F3\u30C8\uFF1A\u6570\u5B57\u30AD\u30FC 1\u301C8 \u3067\u6301\u3061\u7269\u3092\u5207\u308A\u66FF\u3048\u3002\u7A7A\u306E\u30DE\u30B9\u3092\u9078\u3076\u3068\u7D20\u624B\u306B\u306A\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2\u3092\u6301\u3064\u3068\u3001Q\u30FBE\u30FBR \u3067 3 \u3064\u306E\u6280\u304C\u4F7F\u3048\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AB \u30AD\u30FC\u3067\u661F\u306E\u796D\u58C7\u306B\u623B\u308C\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u65A7\u306F\u9B54\u7269\u306B\u306F\u5F31\u3044\u3051\u308C\u3069\u3001\u6728\u3084\u67F5\u3092\u3059\u3050\u306B\u58CA\u305B\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u67F5\u3084\u6249\u3092\u6301\u3063\u3066\u653B\u6483\u30DC\u30BF\u30F3\u3067\u5EFA\u3066\u3089\u308C\u307E\u3059\u3002R \u3067\u5411\u304D\u3092\u5909\u3048\u3001T \u3067\u6728\u6750\u3092\u9078\u3079\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u67F5\u3084\u58C1\u3092\u6301\u3063\u3066 V \u30AD\u30FC\u3092\u62BC\u3059\u3068\u3001\u89D2\u3092 2 \u3064\u9078\u3076\u3060\u3051\u3067\u56DB\u89D2\u304F\u56F2\u3048\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u6249\u306E\u8FD1\u304F\u3067 G \u30AD\u30FC\u3092\u62BC\u3059\u3068\u958B\u3051\u9589\u3081\u3067\u304D\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u6728\u3092\u653B\u6483\u3059\u308B\u3068\u5207\u308A\u5012\u305B\u307E\u3059\u3002\u5730\u65B9\u3054\u3068\u306B\u9055\u3046\u6728\u6750\u304C\u624B\u306B\u5165\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AShift \u3092\u62BC\u3057\u306A\u304C\u3089\u79FB\u52D5\u3059\u308B\u3068\u8D70\u308C\u307E\u3059\uFF08\u30B9\u30DE\u30DB\u306F\u30B9\u30C6\u30A3\u30C3\u30AF\u3092\u7AEF\u307E\u3067\u5012\u3059\uFF09"],Pp=It("scene"),is=new Bo({canvas:Pp,antialias:!0}),Ar=window.matchMedia("(pointer: coarse)").matches;is.setPixelRatio(Math.min(window.devicePixelRatio,Ar?1.5:2));is.setSize(window.innerWidth,window.innerHeight);is.shadowMap.enabled=!0;is.shadowMap.type=wh;is.outputColorSpace=Ne;var js=new uc,Rn=new Bn(60,window.innerWidth/window.innerHeight,.1,2600),ei,Ue,$t,Fi,Rs,ki,As,gi=ap(It("popup-layer")),SM=()=>new Promise(i=>{requestAnimationFrame(()=>i()),setTimeout(i,50)}),gp=i=>new Promise(t=>setTimeout(t,i));function xp(i,t){It("progress-fill").style.width=i+"%",t&&(It("loading-status").textContent=t)}async function RM(){It("loading-tip").textContent=mp[Math.floor(Math.random()*mp.length)];let i=[["\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",async()=>{await document.fonts.ready}],["\u30D9\u30FC\u30B9\u30D7\u30EC\u30FC\u30C8\u3092\u751F\u6210\u4E2D...",async()=>{ei=Yf(js,is,{lite:Ar}),Ar&&(Rn.far=1300)}],["\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u751F\u6210\u4E2D...",async()=>{Ue=Qf(),js.add(Ue.object),da(),$t=ep(Ue,ei),$t.respawn(),Fi=ip(It("minimap"),ei),Rs=op(js,ei,It("label-layer")),ki=pp(js,ei.groundHeight),As=up(js,ei),IM()}],["\u30B7\u30FC\u30F3\u3092\u6E96\u5099\u4E2D...",async()=>{is.compile(js,Rn),is.render(js,Rn)}]];for(let t=0;t<i.length;t++){let[e,n]=i[t];xp(t/i.length*100,e),await SM(),await Promise.all([n(),gp(450)])}xp(100,"\u5B8C\u4E86\uFF01"),await gp(400),It("loading-screen").classList.add("fade"),It("menu").classList.remove("hidden"),setTimeout(()=>It("loading-screen").remove(),900),setTimeout(()=>Ue.wave(),900)}var Bi="menu",Ip=!0,Lp=0,aa=0,Vc=new F,Wc=new F,Yh=new F,$h=new F,Ke={yaw:0,pitch:.35,dist:18},AM=6,CM=60;function Hp(i,t){let e=ei.spawnPoint.clone().add(new F(0,3,0)),n=Math.sin(Lp*.15)*.45+.35,s=20;i.set(e.x+Math.sin(n)*s,e.y+3.5,e.z+Math.cos(n)*s);let r=window.innerWidth>700,o=e.clone().sub(i).normalize(),a=new F().crossVectors(o,new F(0,1,0)).normalize();t.copy(e).addScaledVector(a,r?-4.2:0),r||(t.y-=1.5)}function PM(i,t){let e=$t.position;t.set(e.x,e.y+4.5,e.z);let n=Math.cos(Ke.pitch);i.set(t.x+Math.sin(Ke.yaw)*n*Ke.dist,t.y+Math.sin(Ke.pitch)*Ke.dist,t.z+Math.cos(Ke.yaw)*n*Ke.dist);let s=Math.max(ei.groundHeight(i.x,i.z),ei.waterLevel)+.8;i.y<s&&(i.y=s)}function IM(){Hp(Vc,Wc),Rn.position.copy(Vc),Rn.lookAt(Wc)}function LM(i){aa+=i,Bi==="menu"?(Ip&&(Lp+=i),Hp(Yh,$h)):PM(Yh,$h);let t=Bi==="menu"?3:4+aa*aa*80,e=1-Math.exp(-i*t);Vc.lerp(Yh,e),Wc.lerp($h,e),Rn.position.copy(Vc),Rn.lookAt(Wc)}var Ss=np(Pp,{joystickEl:It("joystick"),jumpBtnEl:It("btn-jump"),attackBtnEl:It("btn-attack"),skillBtnsEl:It("skill-btns"),onKey(i){i==="Escape"?ss?(ss=null,Ve("\u89D2\u306E\u9078\u629E\u3092\u3084\u3081\u305F")):Fi.expanded?Fi.expanded=!1:Vp():i==="KeyM"?Fi.expanded=!Fi.expanded:i==="KeyH"?It("help").classList.toggle("hidden"):/^Digit[1-8]$/.test(i)?Up(Number(i.slice(5))-1):i==="KeyG"||i==="KeyE"&&!we.held?.skills?kp():i==="KeyR"&&we.held?.kind==="build"?Op():i==="KeyT"&&we.held?.kind==="build"?Bp():i==="KeyV"&&we.held?.kind==="build"?Fp():i==="KeyB"&&!bi&&($t.respawn(Math.PI),Ke.yaw=0,Ve("\u661F\u306E\u796D\u58C7\u306B\u623B\u308A\u307E\u3057\u305F"))}});function yp(){let{dx:i,dy:t,zoom:e}=Ss.consumeLook();Ke.yaw-=i*.006,Ke.pitch=$e.clamp(Ke.pitch+t*.005,-.2,1.35),Ke.dist=$e.clamp(Ke.dist*(1+e*.001),AM,CM)}function nu(){let{forward:i,right:t}=Ss.move(),e=-Math.sin(Ke.yaw),n=-Math.cos(Ke.yaw),s=Math.cos(Ke.yaw),r=-Math.sin(Ke.yaw);return{x:e*i+s*t,z:n*i+r*t}}var Gt={level:1,exp:0,hp:100,maxHp:100,atk:10,stamina:100,maxStamina:100},oa=!1,Zh=0;function HM(i,t,e){let n=t&&e&&!oa&&!$t.swimming;n?(Gt.stamina=Math.max(0,Gt.stamina-20*i),Zh=0,Gt.stamina<=0&&(oa=!0,Ve("\u606F\u304C\u5207\u308C\u305F\u2026"))):(Zh+=i,Zh>.5&&(Gt.stamina=Math.min(Gt.maxStamina,Gt.stamina+32*i)),oa&&Gt.stamina>=Gt.maxStamina*.3&&(oa=!1));let s=It("stamina-fill");return s.style.width=Gt.stamina/Gt.maxStamina*100+"%",s.classList.toggle("tired",oa),It("stamina-bar").classList.toggle("full",Gt.stamina>=Gt.maxStamina),n}var jh=()=>Gt.level*20,br=0,bi=!1;function Cr(){It("lv").textContent=Gt.level,It("hp-now").textContent=Math.max(0,Math.ceil(Gt.hp)),It("hp-max").textContent=Gt.maxHp;let i=Math.max(0,Gt.hp)/Gt.maxHp;It("hp-fill").style.width=i*100+"%",It("hp-fill").classList.toggle("low",i<.3),It("exp-fill").style.width=Gt.exp/jh()*100+"%"}var Eo=()=>$t.position.clone().setY($t.position.y+5.5);function Dp(i){for(Gt.exp+=i,gi.add(Eo(),`+${i} EXP`,"exp");Gt.exp>=jh();)Gt.exp-=jh(),Gt.level++,Gt.maxHp+=15,Gt.hp=Gt.maxHp,Gt.atk+=3,gi.add(Eo().setY($t.position.y+7),"LEVEL UP!","levelup"),Ve(`\u30EC\u30D9\u30EB ${Gt.level} \u306B\u306A\u3063\u305F\uFF01 HP \u3068\u653B\u6483\u529B\u304C\u4E0A\u304C\u3063\u305F`),Ue.wave();Cr()}var we=qf(),Ti=-1;function DM(){let i=we.held;return Fc[i?.moveset??"fists"]}function da(){let i=It("hotbar");if(!i.children.length)for(let e=0;e<Oc;e++){let n=document.createElement("button");n.className="slot",n.innerHTML=`<span class="slot-key">${e+1}</span><span class="slot-icon"></span><span class="slot-count"></span>`,n.addEventListener("pointerdown",s=>{s.preventDefault(),Up(e)}),i.appendChild(n)}we.slots.forEach((e,n)=>{let s=i.children[n];s.classList.toggle("selected",n===we.selected),s.classList.toggle("empty",!e),s.classList.toggle("blood",!!e&&Je[e.id].rarity==="blood"),s.title=e?UM(Je[e.id]):"\u7A7A\u304D\uFF08\u7D20\u624B\uFF09",s.querySelector(".slot-icon").innerHTML=e?Je[e.id].icon:"";let r=e&&we.infinite&&Je[e.id].kind!=="weapon"&&Je[e.id].kind!=="material";s.querySelector(".slot-count").textContent=r?"\u221E":e&&e.count>1?e.count:""}),Ue.setHeld(we.held?.held??null),Ue.setTrailColor(we.held?.trail);let t=we.held;Ue.setStance(t?t.stance??"item":"fists")}function UM(i){let t=`${i.name}\uFF1A${i.desc}`;i.passive&&(t+=`
\u7279\u6027\u3010${i.passive.name}\u3011${i.passive.desc}`);for(let e of i.skills??[])t+=`
\u6280\u3010${ns[e].name}\u3011\uFF08${ns[e].key}\uFF09${ns[e].desc}`;return i.power&&(t+=`
\u653B\u6483\u529B \xD7${i.power}`),i.category==="wood"&&(t+=`
\u8010\u4E45\u529B ${i.durability}\u3000\u7279\u6027\u3010${i.trait.name}\u3011${i.trait.desc}`),t}var _p;function Up(i){if(se.current||Ti>=0||ti||bi)return;we.selected=i,se.step=-1,ss=null,da();let t=we.held,e=It("held-name");Gp(t),e.textContent=t?t.skills?`${t.name}\u3000${t.skills.map(n=>`${ns[n].key}\u300C${ns[n].name}\u300D`).join(" ")}`:t.name:"\u7D20\u624B",e.classList.remove("hidden"),clearTimeout(_p),_p=setTimeout(()=>e.classList.add("hidden"),1500)}function zM(){let i=we.held;if(i?.kind==="build"){VM();return}if(i?.kind==="consumable"){if(se.current||Ti>=0)return;if(i.heal&&Gt.hp>=Gt.maxHp){Ve("HP \u306F\u6E80\u30BF\u30F3\u3067\u3059");return}Ue.drink()&&(Ti=0);return}OM()}function NM(i){if(Ti<0)return;let t=Ti;if(Ti+=i,t<.55&&Ti>=.55){let e=we.held;if(e?.heal){let n=Math.min(e.heal,Gt.maxHp-Gt.hp);Gt.hp+=n,gi.add(Eo(),`+${Math.round(n)}`,"heal"),Cr()}we.consumeHeld(),da()}Ti>=.9&&(Ti=-1)}var se={current:null,moves:Fc.sword,step:-1,time:0,hit:!1,queued:0,sinceEnd:99,speed:1},Sr=0,ci=0;function OM(){if(bi||ti)return;let i=DM();if(se.current){se.queued=Math.min(se.queued+1,se.moves.length-1-se.step);return}let t=se.moves===i&&se.sinceEnd<Zf&&se.step<i.length-1;se.moves=i,zp(t?se.step+1:0)}function zp(i){let t=nu();Math.hypot(t.x,t.z)>.3&&$t.setFacing(Math.atan2(t.x,t.z));let e=se.moves[i],n=we.held?.speed??1;if(!Ue.attack(e.anim,n))return;Object.assign(se,{current:e,step:i,time:0,hit:!1,hitIdx:0,speed:n});let s=$t.facing;$t.knockback(Math.sin(s)*e.lunge,Math.cos(s)*e.lunge,e.hop),nv(i)}function FM(i){if(!se.current){se.sinceEnd+=i;return}se.time+=i*se.speed;let t=se.current.hitTimes??[se.current.hitTime];for(;se.hitIdx<t.length&&se.time>=t[se.hitIdx];)se.hitIdx++,BM(se.current);se.time>=se.current.duration&&(se.current=null,se.sinceEnd=0,se.queued>0&&se.step<se.moves.length-1?(se.queued--,zp(se.step+1)):se.queued=0)}function Xc(){let i=we.held,t=i?.kind==="weapon"?i.power??1:1;return Un&&(t*=Un.atk),i?.passive?.id==="thirst"&&Gt.hp<Gt.maxHp/2&&(t*=1.3),t}function BM(i){let t=we.held,e=t?.passive?.id==="heavy",n=Rs.attack($t.position,$t.facing,{range:i.range*(e?1.1:1),arc:i.arc,damage:Gt.atk*i.power*Xc(),knockback:i.knockback*(e?1.7:1),bleed:t?.passive?.id==="bleed"});if(n.length&&(Sr=i.hitStop*(e?1.5:1),ci=Math.max(ci,i.shake*(e?1.5:1)),t?.rarity==="blood"))for(let s of n)ki.burst(s.pos,8,5);iu(n),GM(i),WM(i),Un?.waves&&t?.rarity==="blood"&&kM()}function kM(){let i=new F(Math.sin($t.facing),0,Math.cos($t.facing)),t=$t.position.clone().addScaledVector(i,1.5);t.y+=2.6;let e=new Set;ki.crescent(t,i,{onMove(n){let s=Rs.hitArea(r=>!e.has(r)&&Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<3+r.T.radius&&Math.abs(r.pos.y+2-n.y)<4,{damage:Gt.atk*.9*Xc(),knockback:.8,from:n});for(let r of s)e.add(r.enemy),ki.burst(r.pos,10,6);iu(s)}})}var Ep=new Set;function GM(i){let t=ei.chopTrees($t.position,$t.facing,{range:i.range,arc:i.arc,damage:Gt.atk*i.power*(we.held?.chop??Xc())});for(let e of t){if(ki.chips(e.pos,e.felled?14:6),gi.add(e.pos.clone().setY(e.pos.y+2),String(e.damage),"chop"),!e.felled)continue;let n=Je[e.woodId],s=we.add(e.woodId,e.amount),r=e.amount-s;r>0&&gi.add(Eo(),`+${r} ${n.name}`,"loot"),s>0&&!wr&&Ve("\u6301\u3061\u7269\u304C\u3044\u3063\u3071\u3044\u3067\u3001\u6728\u6750\u3092\u6301\u3061\u304D\u308C\u306A\u3044\u2026"),da(),r>0&&!Ep.has(e.woodId)&&(Ep.add(e.woodId),Ve(`${n.name}\u3092\u624B\u306B\u5165\u308C\u305F\uFF01\u3000\u7279\u6027\u3010${n.trait.name}\u3011`,3200))}t.length&&!Sr&&(ci=Math.max(ci,.08))}var Qh=!1,Rr="woodYoung",ca=0,Mp=null,la=!1,ss=null,Np=()=>Ke.yaw+Math.PI,ha=()=>["fence","wall"].includes(we.held?.build);function Op(){Qh=!Qh}function Fp(){if(!ha()){we.held?.build==="door"&&Ve("\u9580\u6249\u306F 1 \u3064\u305A\u3064\u7F6E\u304D\u307E\u3059\u3002\u67F5\u3084\u58C1\u306E\u5217\u306E\u4E0A\u306B\u7F6E\u304F\u3068\u5165\u308C\u66FF\u308F\u308A\u307E\u3059");return}la=!la,ss=null,Ve(la?"\u56F2\u3046\u30E2\u30FC\u30C9\uFF1A1 \u3064\u76EE\u306E\u89D2\u3092\u9078\u3093\u3067\u3001\u7F6E\u304F\u30DC\u30BF\u30F3":"1 \u679A\u305A\u3064\u7F6E\u304F\u30E2\u30FC\u30C9")}function Bp(){let i=wr?Xh:Xh.filter(t=>we.slots.some(e=>e?.id===t));if(!i.length){Ve("\u6728\u6750\u3092\u6301\u3063\u3066\u3044\u306A\u3044");return}Rr=i[(i.indexOf(Rr)+1)%i.length],Gp(Je[Rr])}function VM(){if(ca>0||se.current||bi)return;if(la&&ha()&&!ss){ss=As.cornerAt($t.position,Np()),Ve("\u3082\u3046 1 \u3064\u306E\u89D2\uFF08\u5BFE\u89D2\uFF09\u3092\u9078\u3093\u3067\u3001\u7F6E\u304F\u30DC\u30BF\u30F3"),ca=.2;return}let i=As.place(Rr);if(ss=null,!i.placed){i.reason&&Ve(i.reason);return}ca=.25,Ue.attack(3);for(let n of i.structures)ki.chips(new F(n.x,n.y+.4,n.z),i.placed>4?3:8,Je[Rr].plank);ci=Math.max(ci,i.placed>1?.25:.12),we.consumeHeld(),da();let t=i.structures[0].maxHp,e=i.placed>1?`${i.placed} \u679A\u3092\u5EFA\u3066\u305F\u3002`:"";i.env.weak.length?Ve(`${e}${i.env.weak.join("\u3001")}\u2026\uFF08\u8010\u4E45\u529B ${t}\uFF09`,2800):i.env.strong.length?Ve(`${e}${i.env.strong.join("\u3001")}\uFF08\u8010\u4E45\u529B ${t}\uFF09`,2800):e&&Ve(`${e}\uFF081 \u679A\u306E\u8010\u4E45\u529B ${t}\uFF09`)}function WM(i){let t=we.held,e=As.hit($t.position,$t.facing,{range:i.range,arc:i.arc,damage:Gt.atk*i.power*(t?.breaker??.35)});for(let n of e){let s=Je[n.woodId].plank;ki.chips(n.pos,n.destroyed?22:7,s),gi.add(n.pos.clone().setY(n.pos.y+1),String(n.damage),"chop"),XM(n.name,n.hp,n.maxHp),n.destroyed&&(ci=Math.max(ci,.35),Ve(`${n.name}\u3092\u58CA\u3057\u305F`))}e.length&&!t?.breaker&&Ve("\u65A7\u306E\u307B\u3046\u304C\u3001\u65E9\u304F\u58CA\u305B\u308B",1500)}var vp;function XM(i,t,e){let n=It("target-bar");n.querySelector("b").textContent=i,n.querySelector("span").textContent=`${t} / ${e}`,n.querySelector("i").style.width=t/e*100+"%",n.classList.remove("hidden"),clearTimeout(vp),vp=setTimeout(()=>n.classList.add("hidden"),1800)}function qM(){let i=$t.position;return new he(new F(i.x-.8,i.y,i.z-.8),new F(i.x+.8,i.y+4.5,i.z+.8))}function kp(){if(Bi!=="ingame"||bi)return;let i=As.nearestDoor($t.position);i&&(As.toggleDoor(i,$t.position,qM())||Ve("\u6249\u306B\u631F\u307E\u3063\u3066\u3057\u307E\u3046"))}function YM(i){ca=Math.max(0,ca-i);let t=we.held,e=Bi==="ingame"&&t?.kind==="build"&&!bi?t.build:null,n=la&&ha();Mp=As.preview(e,$t.position,Np(),Qh,Rr,n?ss:null);let s=It("build-hud");if(s.classList.toggle("hidden",!e),It("build-btns").classList.toggle("hidden",!e),It("btn-enclose").classList.toggle("on",n),e){let a=Je[Rr],c=Mp,l="";n&&!ss?l='<em class="good">\u56F2\u3046\u30E2\u30FC\u30C9\uFF1A1 \u3064\u76EE\u306E\u89D2\u3092\u9078\u3076</em>':n&&ss?l=c.count?`<em class="${c.ok===c.count?"good":"weak"}">${c.w}\xD7${c.d} \u30DE\u30B9\uFF08${c.w*4}m \xD7 ${c.d*4}m\uFF09\u30FB${c.ok} \u679A${c.ok<c.count?`\uFF08${c.count-c.ok} \u679A\u306F\u7F6E\u3051\u306A\u3044\uFF1A${c.reason}\uFF09`:""}</em>`:'<em class="weak">\u3082\u3046 1 \u3064\u306E\u89D2\u3092\u9078\u3076\uFF08Esc \u3067\u3084\u3081\u308B\uFF09</em>':c.ok<c.count?l=`<em class="ng">${c.reason}</em>`:c.env.weak.length?l=`<em class="weak">${c.env.weak[0]}</em>`:c.env.strong.length&&(l=`<em class="good">${c.env.strong[0]}</em>`),c.plans[0]?.replace?.length&&(l+=`<em class="good">\u67F5\u30FB\u58C1 ${c.plans[0].replace.length} \u679A\u3068\u5165\u308C\u66FF\u3048\u308B</em>`);let h=Ar?`\u2694 \u7F6E\u304F \u30FB \u27F3 \u56DE\u8EE2 \u30FB \u6728 \u6728\u6750${ha()?" \u30FB \u56F2 \u56F2\u3046":""}`:`\u30AF\u30EA\u30C3\u30AF \u7F6E\u304F \u30FB R \u56DE\u8EE2 \u30FB T \u6728\u6750${ha()?" \u30FB V \u56F2\u3046":""}`,u=`${a.icon}<div><b>${t.name}</b>\u3000${a.name}\u3000\u8010\u4E45 ${c.hp}<small>${h}</small>${l}</div>`;s.dataset.html!==u&&(s.innerHTML=u,s.dataset.html=u)}let r=Bi==="ingame"?As.nearestDoor($t.position):null,o=It("btn-use");o.classList.toggle("hidden",!r),r&&(o.textContent=`${Ar?"":"G "}${r.open?"\u9589\u3081\u308B":"\u958B\u3051\u308B"}`)}var wp;function Gp(i){let t=It("item-card");if(!i||i.category!=="wood"){t.classList.add("hidden");return}let e=Object.keys(Qi).filter(s=>!i.resist[s]),n=Object.keys(Qi).filter(s=>i.resist[s]);t.innerHTML=`
    <div class="card-head">${i.icon}<div><b>${i.name}</b><small>${i.desc}</small></div></div>
    <div class="card-row"><span>\u8010\u4E45\u529B</span><div class="card-bar"><div style="width:${Math.min(100,i.durability/2)}%"></div></div><b>${i.durability}</b></div>
    <div class="card-row trait"><span>\u7279\u6027</span><p><b>${i.trait.name}</b>\uFF1A${i.trait.desc}</p></div>
    ${n.length?`<div class="card-row good"><span>\u5F37\u3044</span><p>${n.map(s=>`${Qi[s].name}\uFF08${Qi[s].where}\u3067\u3082\u5E73\u6C17\uFF09`).join("\u3001")}</p></div>`:""}
    ${e.length?`<div class="card-row bad"><span>\u5F31\u70B9</span><p>${e.map(s=>`${Qi[s].name}\uFF1A${Qi[s].effect}`).join("<br>")}</p></div>`:""}
    <div class="card-note">\u203B \u62E0\u70B9\u3092\u5EFA\u3066\u305F\u5834\u6240\u306E\u74B0\u5883\u3067\u3001\u7279\u6027\u3068\u5F31\u70B9\u304C\u52B9\u304F\u3088\u3046\u306B\u306A\u308A\u307E\u3059</div>`,t.classList.remove("hidden"),clearTimeout(wp),wp=setTimeout(()=>t.classList.add("hidden"),6e3)}function iu(i){let t=0;for(let s of i)t+=s.damage,gi.add(s.pos,String(s.damage),s.damage>Gt.atk*1.6?"crit":""),s.killed&&(Ve(`${s.name} \u3092\u305F\u304A\u3057\u305F\uFF01`),Dp(s.exp));let e=we.held,n=(e?.passive?.id==="lifesteal"?e.passive.rate:0)+(Un?.lifesteal??0);if(n>0&&t>0&&Gt.hp<Gt.maxHp){let s=Math.max(1,Math.round(t*n));Gt.hp=Math.min(Gt.maxHp,Gt.hp+s),gi.add(Eo(),`+${s}`,"heal"),Cr()}}function $M(i){gi.add(i.pos,String(i.damage),"bleed"),i.killed&&(Ve(`${i.name} \u306F\u8840\u3092\u6D41\u3057\u3066\u5012\u308C\u305F\u2026`),Dp(i.exp))}var ti=null,_o={},ua=0,Un=null,tu=0,eu={get player(){return $t},get character(){return Ue},get enemies(){return Rs},get fx(){return ki},stats:Gt,power:i=>Gt.atk*i*Xc(),applyHits:i=>iu(i),invuln:i=>{ua=Math.max(ua,i)},shake:i=>{ci=Math.max(ci,i)},hitStop:i=>{Sr=Math.max(Sr,i)},screenFlash:i=>ZM(i),fovKick:i=>{tu=i},toast:i=>Ve(i),popup:(i,t,e)=>gi.add(i,t,e),startBuff:i=>jM(i)};function ZM(i){let t=It("blood-flash");t.style.transition="none",t.style.opacity=i,requestAnimationFrame(()=>{t.style.transition="opacity .5s ease",t.style.opacity=0})}function JM(i){let e=we.held?.skills?.[i];if(!e||bi||ti||se.current||Ti>=0)return;let n=ns[e],s=It("skills").children[i];if((_o[e]??0)>0){s?.classList.remove("denied"),s?.offsetWidth,s?.classList.add("denied");return}if(n.canUse&&!n.canUse(eu))return;let r=nu();Math.hypot(r.x,r.z)>.3&&$t.setFacing(Math.atan2(r.x,r.z)),Ue.attack(n.anim),ti={def:n,t:0,s:{}},n.start(eu,ti.s),_o[e]=n.cooldown,se.step=-1,Cr(),QM(n.name)}function KM(i,t){for(let n of Object.keys(_o))_o[n]=Math.max(0,_o[n]-i);ua=Math.max(0,ua-i),ti&&(ti.t+=i,ti.def.update(eu,ti.s,ti.t,i),ti.t>=ti.def.duration&&(ti=null)),Un&&(Un.time-=i,Un.time<=0&&su()),tu*=Math.exp(-t*5);let e=60+tu;Math.abs(Rn.fov-e)>.01&&(Rn.fov=e,Rn.updateProjectionMatrix())}function jM(i){su(),Un={...i,aura:ki.aura(Ue.object)},Ue.setGlow(2.4),It("blood-vignette").classList.add("on"),Ve(`${i.name}\uFF1A\u529B\u304C\u6EA2\u308C\u51FA\u3059\u2026\uFF01\u3000\u5263\u3092\u632F\u308B\u3068\u8840\u306E\u65AC\u6483\u304C\u98DB\u3076`)}function su(){Un&&(Un.aura.stop(),Un=null,Ue.setGlow(1),It("blood-vignette").classList.remove("on"))}var Tp;function QM(i){let t=It("skill-name");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(Tp),Tp=setTimeout(()=>t.classList.add("hidden"),1200)}function tv(){let t=we.held?.skills??[],e=It("skills");e.classList.toggle("hidden",!t.length),It("skill-btns").classList.toggle("hidden",!t.length),e.dataset.set!==t.join()&&(e.innerHTML=t.map(s=>`<div class="skill"><span class="skill-key">${ns[s].key}</span><span class="skill-cd"></span><span class="skill-label">${ns[s].name}</span></div>`).join(""),e.dataset.set=t.join()),t.forEach((s,r)=>{let o=ns[s],a=_o[s]??0,c=e.children[r];c.querySelector(".skill-cd").textContent=a>0?Math.ceil(a):"",c.style.setProperty("--cd",a/o.cooldown),c.classList.toggle("ready",a<=0);let l=It("skill-btns").children[r];l&&l.style.setProperty("--cd",a/o.cooldown)});let n=It("buff");n.classList.toggle("hidden",!Un),Un&&(n.textContent=`${Un.name}\u3000${Un.time.toFixed(1)}\u79D2`)}var Jh=0,bp=new F;function ev(i){we.held?.rarity==="blood"&&(Jh-=i,!(Jh>0)&&(Jh=Un?.08:.4,Ue.bladeTip(bp)&&ki.burst(bp,1,Un?2:.4)))}var Sp;function nv(i){let t=It("combo"),e=se.moves.map((n,s)=>`${"\u2460\u2461\u2462\u2463"[s]} ${n.name}`);t.dataset.set!==e.join()&&(t.innerHTML=e.map(n=>`<span>${n}</span>`).join(""),t.dataset.set=e.join()),t.classList.remove("hidden"),t.querySelectorAll("span").forEach((n,s)=>{n.classList.toggle("done",s<i),n.classList.toggle("now",s===i)}),clearTimeout(Sp),Sp=setTimeout(()=>t.classList.add("hidden"),1400)}function iv(i,t,e){if(br>0||ua>0||bi)return;Gt.hp-=i,br=1,Ue.hurt(),gi.add(Eo(),`-${i}`,"hurt");let n=It("hurt-vignette");n.classList.add("on"),requestAnimationFrame(()=>n.classList.remove("on"));let s=$t.position.x-t,r=$t.position.z-e,o=Math.hypot(s,r)||1;$t.knockback(s/o*14,r/o*14,14),Cr(),Gt.hp<=0&&sv()}function sv(){bi=!0,se.current=null,se.queued=0,Ti=-1,ti=null,su(),Ue.setFainted(!0),Rs.calmDown(),It("faint").classList.remove("hidden"),setTimeout(()=>{It("faint").classList.add("hidden"),Gt.hp=Gt.maxHp,bi=!1,Ue.setFainted(!1),$t.respawn(Math.PI),Ke.yaw=0,br=2,Cr()},2800)}var Kh=!1;function rv(){$t.grounded&&$t.groundKind==="goal"&&!Kh&&(Kh=!0,Ue.wave(),Ve("\u5854\u306E\u3066\u3063\u307A\u3093\u306E\u30AF\u30EA\u30B9\u30BF\u30EB\u306B\u305F\u3069\u308A\u7740\u3044\u305F\uFF01",3500)),$t.groundKind==="spawn"&&(Kh=!1)}var Gc=null;function ov(){let i=$t.position,t=null;for(let e of sa)Math.hypot(i.x-e.x,i.z-e.z)<e.r+4&&(t=e.name);if(!t&&$t.groundKind==="bridge"){let e=1/0;for(let n of ei.bridges){let s=(n.from[0]+n.to[0])/2,r=(n.from[1]+n.to[1])/2,o=Math.hypot(i.x-s,i.z-r);o<e&&(e=o,t=n.name)}}t||(t=ei.islandAt(i.x,i.z)?.name??Gc),t&&t!==Gc&&av(t),Gc=t}var Rp;function av(i){let t=It("area-banner");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(Rp),Rp=setTimeout(()=>t.classList.add("hidden"),3200)}function cv(){Bi="ingame",aa=0,$t.respawn(Math.PI),Ke.yaw=0,Ke.pitch=.35,Ke.dist=18,Ss.enabled=!0,Gt.hp=Gt.maxHp,Cr(),It("menu").classList.add("hidden"),It("ingame").classList.remove("hidden"),Fi.resize(),Gc=null}function Vp(){Bi="menu",aa=0,Ss.enabled=!1,Fi.expanded=!1,Rs.calmDown(),gi.clear(),$t.respawn(),It("ingame").classList.add("hidden"),It("menu").classList.remove("hidden")}var Ap;function Ve(i,t=2200){let e=It("toast-msg");e.textContent=i,e.classList.remove("hidden"),clearTimeout(Ap),Ap=setTimeout(()=>e.classList.add("hidden"),t)}It("btn-play").addEventListener("click",cv);It("btn-use").addEventListener("pointerdown",i=>{i.preventDefault(),kp()});It("btn-rotate").addEventListener("pointerdown",i=>{i.preventDefault(),Op()});It("btn-wood").addEventListener("pointerdown",i=>{i.preventDefault(),Bp()});It("btn-enclose").addEventListener("pointerdown",i=>{i.preventDefault(),Fp()});It("btn-back").addEventListener("click",Vp);It("minimap").addEventListener("click",()=>{Fi.expanded=!Fi.expanded});It("btn-avatar").addEventListener("click",()=>{Ue.wave(),Ve("\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u7DE8\u96C6\u306F\u6E96\u5099\u4E2D\u3067\u3059")});var Cp=document.documentElement;Cp.requestFullscreen&&Ar&&(It("btn-fullscreen").classList.remove("hidden"),It("btn-fullscreen").addEventListener("click",async()=>{try{await Cp.requestFullscreen({navigationUI:"hide"}),await screen.orientation?.lock?.("landscape").catch(()=>{})}catch{}}));var Wp=window.matchMedia("(orientation: portrait)"),Xp=()=>It("rotate-tip").classList.toggle("hidden",!(Ar&&Wp.matches));Wp.addEventListener?.("change",Xp);Xp();document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault());It("btn-settings").addEventListener("click",()=>It("settings-panel").classList.remove("hidden"));document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",()=>i.closest(".popup").classList.add("hidden")));It("opt-shadows").addEventListener("change",i=>{ei.sun.castShadow=i.target.checked});It("opt-orbit").addEventListener("change",i=>{Ip=i.target.checked});It("opt-stepped").addEventListener("change",i=>{Ue.stepped=i.target.checked});window.addEventListener("resize",()=>{Rn.aspect=window.innerWidth/window.innerHeight,Rn.updateProjectionMatrix(),is.setSize(window.innerWidth,window.innerHeight),Fi?.resize()});var lv=new Tc,hv=It("coords");function qp(){requestAnimationFrame(qp);let i=Math.min(lv.getDelta(),.05);if(!ei||!$t)return;let t=Sr>0?i*.05:i;Sr=Math.max(0,Sr-i);let e=Bi==="ingame"&&!bi;if(e){yp(),Ss.consumeAttack()&&zM();let n=Ss.consumeSkill();n>=0&&JM(n);let s=Ue.attacking||Ti>=0||ti?{x:0,z:0}:nu(),r=Math.hypot(s.x,s.z)>.1,o=HM(t,Ss.run(),r);$t.update(t,{...s,jump:Ss.jump()&&!Ue.attacking,run:o}),rv(),ov()}else Bi==="ingame"&&yp(),Ss.consumeAttack(),$t.update(t,{x:0,z:0,jump:!1});if(FM(t),NM(t),KM(t,i),ev(t),ki.update(t),br=Math.max(0,br-t),Ue.object.visible=!(br>0&&!bi&&Math.floor(br*12)%2===0),Rs.update(t,{playerPos:$t.position,playerActive:e,playerSwimming:$t.swimming,onHitPlayer:iv,onBleed:$M}),ei.update(t,$t.position,Rn.position),As.update(t),YM(t),LM(i),ci>.001&&(Rn.position.x+=(Math.random()-.5)*ci,Rn.position.y+=(Math.random()-.5)*ci,ci*=Math.exp(-i*14)),is.render(js,Rn),Rs.updateLabels(Rn),gi.update(t,Rn),Bi==="ingame"&&tv(),Bi==="ingame"){Fi.draw($t.position,$t.facing,Ke.yaw,Rs.alive());let n=$t.position;hv.textContent=`X ${n.x.toFixed(0)}  Y ${n.y.toFixed(0)}  Z ${n.z.toFixed(0)}`}}window.addEventListener("error",i=>{let t=It("loading-status");t&&(t.textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message)});RM().catch(i=>{It("loading-status").textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message,console.error(i)});qp();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
