(()=>{var _h="160";var kp=0,su=1,Gp=2;var Nd=1,Eh=2,ls=3,zs=0,Bn=1,le=2;var Ds=0,Zr=1,$n=2,ru=3,ou=4,Vp=5,sr=100,Wp=101,Xp=102,au=103,cu=104,qp=200,Yp=201,$p=202,Zp=203,Rl=204,Al=205,Jp=206,Kp=207,jp=208,Qp=209,tm=210,em=211,nm=212,im=213,sm=214,rm=0,om=1,am=2,Fa=3,cm=4,lm=5,hm=6,um=7,Mh=0,dm=1,fm=2,Us=0,pm=1,mm=2,gm=3,xm=4,ym=5,_m=6;var Od=300,jr=301,Qr=302,Cl=303,Pl=304,vc=306,Il=1e3,Pi=1001,Ll=1002,Cn=1003,lu=1004;var Yc=1005;var Yn=1006,Em=1007;var Do=1008;var Vi=1009,Mm=1010,vm=1011,vh=1012,Fd=1013,Ls=1014,Hs=1015,Uo=1016,Bd=1017,kd=1018,or=1020,wm=1021,Ii=1023,Tm=1024,bm=1025,ar=1026,to=1027,wh=1028,Gd=1029,Sm=1030,Vd=1031,Wd=1033,$c=33776,Zc=33777,Jc=33778,Kc=33779,hu=35840,uu=35841,du=35842,fu=35843,Xd=36196,pu=37492,mu=37496,gu=37808,xu=37809,yu=37810,_u=37811,Eu=37812,Mu=37813,vu=37814,wu=37815,Tu=37816,bu=37817,Su=37818,Ru=37819,Au=37820,Cu=37821,jc=36492,Pu=36494,Iu=36495,Rm=36283,Lu=36284,Hu=36285,Du=36286;var Ba=2300,ka=2301,Qc=2302,Uu=2400,zu=2401,Nu=2402;var qd=3e3,cr=3001,Am=3200,Cm=3201,Th=0,Pm=1,_i="",Ne="srgb",ds="srgb-linear",bh="display-p3",wc="display-p3-linear",Ga="linear",ze="srgb",Va="rec709",Wa="p3";var Rr=7680;var Ou=519,Im=512,Lm=513,Hm=514,Yd=515,Dm=516,Um=517,zm=518,Nm=519,Fu=35044;var Bu="300 es",Hl=1035,us=2e3,Xa=2001,Ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=1234567,Ro=Math.PI/180,zo=180/Math.PI;function fr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[e&63|128]+Nn[e>>8&255]+"-"+Nn[e>>16&255]+Nn[e>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Mn(i,t,e){return Math.max(t,Math.min(e,i))}function Sh(i,t){return(i%t+t)%t}function Om(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fm(i,t,e){return i!==t?(e-i)/(t-i):0}function Ao(i,t,e){return(1-e)*i+e*t}function Bm(i,t,e,n){return Ao(i,t,1-Math.exp(-e*n))}function km(i,t=1){return t-Math.abs(Sh(i,t*2)-t)}function Gm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Wm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Xm(i,t){return i+Math.random()*(t-i)}function qm(i){return i*(.5-Math.random())}function Ym(i){i!==void 0&&(ku=i);let t=ku+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $m(i){return i*Ro}function Zm(i){return i*zo}function Dl(i){return(i&i-1)===0&&i!==0}function Jm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Km(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),u=r((t-n)/2),p=o((t-n)/2),f=r((n-t)/2),y=o((n-t)/2);switch(s){case"XYX":i.set(a*l,c*u,c*p,a*h);break;case"YZY":i.set(c*p,a*l,c*u,a*h);break;case"ZXZ":i.set(c*u,c*p,a*l,a*h);break;case"XZX":i.set(a*l,c*y,c*f,a*h);break;case"YXY":i.set(c*f,a*l,c*y,a*h);break;case"ZYZ":i.set(c*y,c*f,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qe={DEG2RAD:Ro,RAD2DEG:zo,generateUUID:fr,clamp:Mn,euclideanModulo:Sh,mapLinear:Om,inverseLerp:Fm,lerp:Ao,damp:Bm,pingpong:km,smoothstep:Gm,smootherstep:Vm,randInt:Wm,randFloat:Xm,randFloatSpread:qm,seededRandom:Ym,degToRad:$m,radToDeg:Zm,isPowerOfTwo:Dl,ceilPowerOfTwo:Jm,floorPowerOfTwo:qa,setQuaternionFromProperEuler:Km,normalize:Xn,denormalize:Wr},ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class i{constructor(t,e,n,s,r,o,a,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h)}set(t,e,n,s,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],u=n[7],p=n[2],f=n[5],y=n[8],_=s[0],m=s[3],d=s[6],v=s[1],x=s[4],M=s[7],S=s[2],w=s[5],g=s[8];return r[0]=o*_+a*v+c*S,r[3]=o*m+a*x+c*w,r[6]=o*d+a*M+c*g,r[1]=h*_+l*v+u*S,r[4]=h*m+l*x+u*w,r[7]=h*d+l*M+u*g,r[2]=p*_+f*v+y*S,r[5]=p*m+f*x+y*w,r[8]=p*d+f*M+y*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+s*r*h-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=l*o-a*h,p=a*c-l*r,f=h*r-o*c,y=e*u+n*p+s*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return t[0]=u*_,t[1]=(s*h-l*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(l*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-h*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tl.makeScale(t,e)),this}rotate(t){return this.premultiply(tl.makeRotation(-t)),this}translate(t,e){return this.premultiply(tl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},tl=new fe;function $d(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jm(){let i=Ya("canvas");return i.style.display="block",i}var Gu={};function Co(i){i in Gu||(Gu[i]=!0,console.warn(i))}var Vu=new fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wu=new fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ha={[ds]:{transfer:Ga,primaries:Va,toReference:i=>i,fromReference:i=>i},[Ne]:{transfer:ze,primaries:Va,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[wc]:{transfer:Ga,primaries:Wa,toReference:i=>i.applyMatrix3(Wu),fromReference:i=>i.applyMatrix3(Vu)},[bh]:{transfer:ze,primaries:Wa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wu),fromReference:i=>i.applyMatrix3(Vu).convertLinearToSRGB()}},Qm=new Set([ds,wc]),Se={enabled:!0,_workingColorSpace:ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Qm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=ha[t].toReference,s=ha[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ha[i].primaries},getTransfer:function(i){return i===_i?Ga:ha[i].transfer}};function Jr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function el(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ar,$a=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ar===void 0&&(Ar=Ya("canvas")),Ar.width=t.width,Ar.height=t.height;let n=Ar.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ar}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ya("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jr(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jr(e[n]/255)*255):e[n]=Jr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},t0=0,Za=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=fr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var e0=0,di=class i extends Ns{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=Yn,o=Do,a=Ii,c=Vi,h=i.DEFAULT_ANISOTROPY,l=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=fr(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===cr?Ne:_i),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Od)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Il:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Il:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?cr:qd}set encoding(t){Co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===cr?Ne:_i}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=Od;di.DEFAULT_ANISOTROPY=1;var Be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],l=c[4],u=c[8],p=c[1],f=c[5],y=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(l-p)<.01&&Math.abs(u-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(l+p)<.1&&Math.abs(u+_)<.1&&Math.abs(y+m)<.1&&Math.abs(h+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(h+1)/2,M=(f+1)/2,S=(d+1)/2,w=(l+p)/4,g=(u+_)/4,A=(y+m)/4;return x>M&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=g/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=A/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=g/r,s=A/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-y)*(m-y)+(u-_)*(u-_)+(p-l)*(p-l));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(u-_)/v,this.z=(p-l)/v,this.w=Math.acos((h+f+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ul=class extends Ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Co("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===cr?Ne:_i),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new di(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class extends Ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ja=class extends di{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zl=class extends di{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],h=n[s+1],l=n[s+2],u=n[s+3],p=r[o+0],f=r[o+1],y=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=y,t[e+3]=_;return}if(u!==_||c!==p||h!==f||l!==y){let m=1-a,d=c*p+h*f+l*y+u*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let S=Math.sqrt(x),w=Math.atan2(S,d*v);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}let M=a*v;if(c=c*m+p*M,h=h*m+f*M,l=l*m+y*M,u=u*m+_*M,m===1-a){let S=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=S,h*=S,l*=S,u*=S}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],h=n[s+2],l=n[s+3],u=r[o],p=r[o+1],f=r[o+2],y=r[o+3];return t[e]=a*y+l*u+c*f-h*p,t[e+1]=c*y+l*p+h*u-a*f,t[e+2]=h*y+l*f+a*p-c*u,t[e+3]=l*y-a*u-c*p-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(s/2),u=a(r/2),p=c(n/2),f=c(s/2),y=c(r/2);switch(o){case"XYZ":this._x=p*l*u+h*f*y,this._y=h*f*u-p*l*y,this._z=h*l*y+p*f*u,this._w=h*l*u-p*f*y;break;case"YXZ":this._x=p*l*u+h*f*y,this._y=h*f*u-p*l*y,this._z=h*l*y-p*f*u,this._w=h*l*u+p*f*y;break;case"ZXY":this._x=p*l*u-h*f*y,this._y=h*f*u+p*l*y,this._z=h*l*y+p*f*u,this._w=h*l*u-p*f*y;break;case"ZYX":this._x=p*l*u-h*f*y,this._y=h*f*u+p*l*y,this._z=h*l*y-p*f*u,this._w=h*l*u+p*f*y;break;case"YZX":this._x=p*l*u+h*f*y,this._y=h*f*u+p*l*y,this._z=h*l*y-p*f*u,this._w=h*l*u-p*f*y;break;case"XZY":this._x=p*l*u-h*f*y,this._y=h*f*u-p*l*y,this._z=h*l*y+p*f*u,this._w=h*l*u+p*f*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],u=e[10],p=n+a+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(l-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+l)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+s*h-r*c,this._y=s*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-s*a,this._w=o*l-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),u=Math.sin((1-e)*l)/h,p=Math.sin(e*l)/h;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*n),l=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*h+o*u-a*l,this.y=n+c*l+a*h-r*u,this.z=s+c*u+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return il.copy(this).projectOnVector(t),this.sub(il)}reflect(t){return this.sub(il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new O,Xu=new Os,he=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ri):Ri.fromBufferAttribute(r,o),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),da.subVectors(this.max,Eo),Cr.subVectors(t.a,Eo),Pr.subVectors(t.b,Eo),Ir.subVectors(t.c,Eo),Rs.subVectors(Pr,Cr),As.subVectors(Ir,Pr),Qs.subVectors(Cr,Ir);let e=[0,-Rs.z,Rs.y,0,-As.z,As.y,0,-Qs.z,Qs.y,Rs.z,0,-Rs.x,As.z,0,-As.x,Qs.z,0,-Qs.x,-Rs.y,Rs.x,0,-As.y,As.x,0,-Qs.y,Qs.x,0];return!sl(e,Cr,Pr,Ir,da)||(e=[1,0,0,0,1,0,0,0,1],!sl(e,Cr,Pr,Ir,da))?!1:(fa.crossVectors(Rs,As),e=[fa.x,fa.y,fa.z],sl(e,Cr,Pr,Ir,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ss=[new O,new O,new O,new O,new O,new O,new O,new O],Ri=new O,ua=new he,Cr=new O,Pr=new O,Ir=new O,Rs=new O,As=new O,Qs=new O,Eo=new O,da=new O,fa=new O,tr=new O;function sl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){tr.fromArray(i,r);let a=s.x*Math.abs(tr.x)+s.y*Math.abs(tr.y)+s.z*Math.abs(tr.z),c=t.dot(tr),h=e.dot(tr),l=n.dot(tr);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var n0=new he,Mo=new O,rl=new O,Fs=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):n0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);let e=Mo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(rl)),this.expandByPoint(Mo.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},rs=new O,ol=new O,pa=new O,Cs=new O,al=new O,ma=new O,cl=new O,Ka=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rs.copy(this.origin).addScaledVector(this.direction,e),rs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ol.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),Cs.copy(this.origin).sub(ol);let r=t.distanceTo(e)*.5,o=-this.direction.dot(pa),a=Cs.dot(this.direction),c=-Cs.dot(pa),h=Cs.lengthSq(),l=Math.abs(1-o*o),u,p,f,y;if(l>0)if(u=o*c-a,p=o*a-c,y=r*l,u>=0)if(p>=-y)if(p<=y){let _=1/l;u*=_,p*=_,f=u*(u+o*p+2*a)+p*(o*u+p+2*c)+h}else p=r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+h;else p=-r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+h;else p<=-y?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+h):p<=y?(u=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+h):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+p*(p+2*c)+h);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ol).addScaledVector(pa,p),f}intersectSphere(t,e){rs.subVectors(t.center,this.origin);let n=rs.dot(this.direction),s=rs.dot(rs)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),l>=0?(r=(t.min.y-p.y)*l,o=(t.max.y-p.y)*l):(r=(t.max.y-p.y)*l,o=(t.min.y-p.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,rs)!==null}intersectTriangle(t,e,n,s,r){al.subVectors(e,t),ma.subVectors(n,t),cl.crossVectors(al,ma);let o=this.direction.dot(cl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cs.subVectors(this.origin,t);let c=a*this.direction.dot(ma.crossVectors(Cs,ma));if(c<0)return null;let h=a*this.direction.dot(al.cross(Cs));if(h<0||c+h>o)return null;let l=-a*Cs.dot(cl);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,c,h,l,u,p,f,y,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h,l,u,p,f,y,_,m)}set(t,e,n,s,r,o,a,c,h,l,u,p,f,y,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=h,d[6]=l,d[10]=u,d[14]=p,d[3]=f,d[7]=y,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Lr.setFromMatrixColumn(t,0).length(),r=1/Lr.setFromMatrixColumn(t,1).length(),o=1/Lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*l,f=o*u,y=a*l,_=a*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=f+y*h,e[5]=p-_*h,e[9]=-a*c,e[2]=_-p*h,e[6]=y+f*h,e[10]=o*c}else if(t.order==="YXZ"){let p=c*l,f=c*u,y=h*l,_=h*u;e[0]=p+_*a,e[4]=y*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*l,e[9]=-a,e[2]=f*a-y,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*l,f=c*u,y=h*l,_=h*u;e[0]=p-_*a,e[4]=-o*u,e[8]=y+f*a,e[1]=f+y*a,e[5]=o*l,e[9]=_-p*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*l,f=o*u,y=a*l,_=a*u;e[0]=c*l,e[4]=y*h-f,e[8]=p*h+_,e[1]=c*u,e[5]=_*h+p,e[9]=f*h-y,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,f=o*h,y=a*c,_=a*h;e[0]=c*l,e[4]=_-p*u,e[8]=y*u+f,e[1]=u,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=f*u+y,e[10]=p-_*u}else if(t.order==="XZY"){let p=o*c,f=o*h,y=a*c,_=a*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=p*u+_,e[5]=o*l,e[9]=f*u-y,e[2]=y*u-f,e[6]=a*l,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(i0,t,s0)}lookAt(t,e,n){let s=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Ps.crossVectors(n,hi),Ps.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Ps.crossVectors(n,hi)),Ps.normalize(),ga.crossVectors(hi,Ps),s[0]=Ps.x,s[4]=ga.x,s[8]=hi.x,s[1]=Ps.y,s[5]=ga.y,s[9]=hi.y,s[2]=Ps.z,s[6]=ga.z,s[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],u=n[5],p=n[9],f=n[13],y=n[2],_=n[6],m=n[10],d=n[14],v=n[3],x=n[7],M=n[11],S=n[15],w=s[0],g=s[4],A=s[8],E=s[12],T=s[1],b=s[5],C=s[9],H=s[13],R=s[2],I=s[6],D=s[10],z=s[14],N=s[3],B=s[7],G=s[11],X=s[15];return r[0]=o*w+a*T+c*R+h*N,r[4]=o*g+a*b+c*I+h*B,r[8]=o*A+a*C+c*D+h*G,r[12]=o*E+a*H+c*z+h*X,r[1]=l*w+u*T+p*R+f*N,r[5]=l*g+u*b+p*I+f*B,r[9]=l*A+u*C+p*D+f*G,r[13]=l*E+u*H+p*z+f*X,r[2]=y*w+_*T+m*R+d*N,r[6]=y*g+_*b+m*I+d*B,r[10]=y*A+_*C+m*D+d*G,r[14]=y*E+_*H+m*z+d*X,r[3]=v*w+x*T+M*R+S*N,r[7]=v*g+x*b+M*I+S*B,r[11]=v*A+x*C+M*D+S*G,r[15]=v*E+x*H+M*z+S*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],u=t[6],p=t[10],f=t[14],y=t[3],_=t[7],m=t[11],d=t[15];return y*(+r*c*u-s*h*u-r*a*p+n*h*p+s*a*f-n*c*f)+_*(+e*c*f-e*h*p+r*o*p-s*o*f+s*h*l-r*c*l)+m*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*l-n*h*l)+d*(-s*a*l-e*c*u+e*a*p+s*o*u-n*o*p+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=t[9],p=t[10],f=t[11],y=t[12],_=t[13],m=t[14],d=t[15],v=u*m*h-_*p*h+_*c*f-a*m*f-u*c*d+a*p*d,x=y*p*h-l*m*h-y*c*f+o*m*f+l*c*d-o*p*d,M=l*_*h-y*u*h+y*a*f-o*_*f-l*a*d+o*u*d,S=y*u*c-l*_*c-y*a*p+o*_*p+l*a*m-o*u*m,w=e*v+n*x+s*M+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let g=1/w;return t[0]=v*g,t[1]=(_*p*r-u*m*r-_*s*f+n*m*f+u*s*d-n*p*d)*g,t[2]=(a*m*r-_*c*r+_*s*h-n*m*h-a*s*d+n*c*d)*g,t[3]=(u*c*r-a*p*r-u*s*h+n*p*h+a*s*f-n*c*f)*g,t[4]=x*g,t[5]=(l*m*r-y*p*r+y*s*f-e*m*f-l*s*d+e*p*d)*g,t[6]=(y*c*r-o*m*r-y*s*h+e*m*h+o*s*d-e*c*d)*g,t[7]=(o*p*r-l*c*r+l*s*h-e*p*h-o*s*f+e*c*f)*g,t[8]=M*g,t[9]=(y*u*r-l*_*r-y*n*f+e*_*f+l*n*d-e*u*d)*g,t[10]=(o*_*r-y*a*r+y*n*h-e*_*h-o*n*d+e*a*d)*g,t[11]=(l*a*r-o*u*r-l*n*h+e*u*h+o*n*f-e*a*f)*g,t[12]=S*g,t[13]=(l*_*s-y*u*s+y*n*p-e*_*p-l*n*m+e*u*m)*g,t[14]=(y*a*s-o*_*s-y*n*c+e*_*c+o*n*m-e*a*m)*g,t[15]=(o*u*s-l*a*s+l*n*c-e*u*c-o*n*p+e*a*p)*g,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,l*a+n,l*c-s*o,0,h*c-s*a,l*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,u=a+a,p=r*h,f=r*l,y=r*u,_=o*l,m=o*u,d=a*u,v=c*h,x=c*l,M=c*u,S=n.x,w=n.y,g=n.z;return s[0]=(1-(_+d))*S,s[1]=(f+M)*S,s[2]=(y-x)*S,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(p+d))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(y+x)*g,s[9]=(m-v)*g,s[10]=(1-(p+_))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Lr.set(s[0],s[1],s[2]).length(),o=Lr.set(s[4],s[5],s[6]).length(),a=Lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ai.copy(this);let h=1/r,l=1/o,u=1/a;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=l,Ai.elements[5]*=l,Ai.elements[6]*=l,Ai.elements[8]*=u,Ai.elements[9]*=u,Ai.elements[10]*=u,e.setFromRotationMatrix(Ai),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=us){let c=this.elements,h=2*r/(e-t),l=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),f,y;if(a===us)f=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Xa)f=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=us){let c=this.elements,h=1/(e-t),l=1/(n-s),u=1/(o-r),p=(e+t)*h,f=(n+s)*l,y,_;if(a===us)y=(o+r)*u,_=-2*u;else if(a===Xa)y=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Lr=new O,Ai=new ve,i0=new O(0,0,0),s0=new O(1,1,1),Ps=new O,ga=new O,hi=new O,qu=new ve,Yu=new Os,ja=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],l=s[9],u=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ja.DEFAULT_ORDER="XYZ";var Qa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},r0=0,$u=new O,Hr=new Os,os=new ve,xa=new O,vo=new O,o0=new O,a0=new Os,Zu=new O(1,0,0),Ju=new O(0,1,0),Ku=new O(0,0,1),c0={type:"added"},l0={type:"removed"},vn=class i extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new ja,n=new Os,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new fe}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(Zu,t)}rotateY(t){return this.rotateOnAxis(Ju,t)}rotateZ(t){return this.rotateOnAxis(Ku,t)}translateOnAxis(t,e){return $u.copy(t).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zu,t)}translateY(t){return this.translateOnAxis(Ju,t)}translateZ(t){return this.translateOnAxis(Ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(vo,xa,this.up):os.lookAt(xa,vo,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Hr.setFromRotationMatrix(os),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(c0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(l0)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),os.multiply(t.parent.matrixWorld)),t.applyMatrix4(os),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,t,o0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,a0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),u=o(t.shapes),p=o(t.skeletons),f=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};vn.DEFAULT_UP=new O(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ci=new O,as=new O,ll=new O,cs=new O,Dr=new O,Ur=new O,ju=new O,hl=new O,ul=new O,dl=new O,ya=!1,Xr=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ci.subVectors(t,e),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ci.subVectors(s,e),as.subVectors(n,e),ll.subVectors(t,e);let o=Ci.dot(Ci),a=Ci.dot(as),c=Ci.dot(ll),h=as.dot(as),l=as.dot(ll),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,f=(h*c-a*l)*p,y=(o*l-a*c)*p;return r.set(1-f-y,y,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getUV(t,e,n,s,r,o,a,c){return ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ya=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cs.x),c.addScaledVector(o,cs.y),c.addScaledVector(a,cs.z),c)}static isFrontFacing(t,e,n,s){return Ci.subVectors(n,e),as.subVectors(t,e),Ci.cross(as).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Ci.cross(as).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ya=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Dr.subVectors(s,n),Ur.subVectors(r,n),hl.subVectors(t,n);let c=Dr.dot(hl),h=Ur.dot(hl);if(c<=0&&h<=0)return e.copy(n);ul.subVectors(t,s);let l=Dr.dot(ul),u=Ur.dot(ul);if(l>=0&&u<=l)return e.copy(s);let p=c*u-l*h;if(p<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(Dr,o);dl.subVectors(t,r);let f=Dr.dot(dl),y=Ur.dot(dl);if(y>=0&&f<=y)return e.copy(r);let _=f*h-c*y;if(_<=0&&h>=0&&y<=0)return a=h/(h-y),e.copy(n).addScaledVector(Ur,a);let m=l*y-f*u;if(m<=0&&u-l>=0&&f-y>=0)return ju.subVectors(r,s),a=(u-l)/(u-l+(f-y)),e.copy(s).addScaledVector(ju,a);let d=1/(m+_+p);return o=_*d,a=p*d,e.copy(n).addScaledVector(Dr,o).addScaledVector(Ur,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},_a={h:0,s:0,l:0};function fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var j=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=Sh(t,1),e=Mn(e,0,1),n=Mn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Zd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}copyLinearToSRGB(t){return this.r=el(t.r),this.g=el(t.g),this.b=el(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Se.fromWorkingColorSpace(On.copy(this),t),Math.round(Mn(On.r*255,0,255))*65536+Math.round(Mn(On.g*255,0,255))*256+Math.round(Mn(On.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(On.copy(this),e);let n=On.r,s=On.g,r=On.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let u=o-a;switch(h=l<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(On.copy(this),e),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Ne){Se.fromWorkingColorSpace(On.copy(this),t);let e=On.r,n=On.g,s=On.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Is),this.setHSL(Is.h+t,Is.s+e,Is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Is),t.getHSL(_a);let n=Ao(Is.h,_a.h,e),s=Ao(Is.s,_a.s,e),r=Ao(Is.l,_a.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new j;j.NAMES=Zd;var h0=0,ps=class extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Zr,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Al,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(n.blending=this.blending),this.side!==zs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ee=class extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var un=new O,Ea=new ft,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix3(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xn(e,this.array),n=Xn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xn(e,this.array),n=Xn(n,this.array),s=Xn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xn(e,this.array),n=Xn(n,this.array),s=Xn(s,this.array),r=Xn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fu&&(t.usage=this.usage),t}};var tc=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ec=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var u0=0,yi=new ve,pl=new vn,zr=new O,ui=new he,wo=new he,En=new O,ae=class i extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($d(t)?ec:tc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new he);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(ui.min,wo.min),ui.expandByPoint(En),En.addVectors(ui.max,wo.max),ui.expandByPoint(En)):(ui.expandByPoint(wo.min),ui.expandByPoint(wo.max))}ui.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)En.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(En));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)En.fromBufferAttribute(a,h),c&&(zr.fromBufferAttribute(t,h),En.add(zr)),s=Math.max(s,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,h=[],l=[];for(let T=0;T<a;T++)h[T]=new O,l[T]=new O;let u=new O,p=new O,f=new O,y=new ft,_=new ft,m=new ft,d=new O,v=new O;function x(T,b,C){u.fromArray(s,T*3),p.fromArray(s,b*3),f.fromArray(s,C*3),y.fromArray(o,T*2),_.fromArray(o,b*2),m.fromArray(o,C*2),p.sub(u),f.sub(u),_.sub(y),m.sub(y);let H=1/(_.x*m.y-m.x*_.y);isFinite(H)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(H),v.copy(f).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(H),h[T].add(d),h[b].add(d),h[C].add(d),l[T].add(v),l[b].add(v),l[C].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,b=M.length;T<b;++T){let C=M[T],H=C.start,R=C.count;for(let I=H,D=H+R;I<D;I+=3)x(n[I+0],n[I+1],n[I+2])}let S=new O,w=new O,g=new O,A=new O;function E(T){g.fromArray(r,T*3),A.copy(g);let b=h[T];S.copy(b),S.sub(g.multiplyScalar(g.dot(b))).normalize(),w.crossVectors(A,b);let H=w.dot(l[T])<0?-1:1;c[T*4]=S.x,c[T*4+1]=S.y,c[T*4+2]=S.z,c[T*4+3]=H}for(let T=0,b=M.length;T<b;++T){let C=M[T],H=C.start,R=C.count;for(let I=H,D=H+R;I<D;I+=3)E(n[I+0]),E(n[I+1]),E(n[I+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,h=new O,l=new O,u=new O;if(t)for(let p=0,f=t.count;p<f;p+=3){let y=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),n.setXYZ(p+0,l.x,l.y,l.z),n.setXYZ(p+1,l.x,l.y,l.z),n.setXYZ(p+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)En.fromBufferAttribute(t,e),En.normalize(),t.setXYZ(e,En.x,En.y,En.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,u=a.normalized,p=new h.constructor(c.length*l),f=0,y=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*l;for(let d=0;d<l;d++)p[y++]=h[f++]}return new pe(p,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,u=h.length;l<u;l++){let p=h[l],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let u=0,p=h.length;u<p;u++){let f=h[u];l.push(f.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let l=s[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],u=r[h];for(let p=0,f=u.length;p<f;p++)l.push(u[p].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qu=new ve,er=new Ka,Ma=new Fs,td=new O,Nr=new O,Or=new O,Fr=new O,ml=new O,va=new O,wa=new ft,Ta=new ft,ba=new ft,ed=new O,nd=new O,id=new O,Sa=new O,Ra=new O,F=class extends vn{constructor(t=new ae,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],u=r[c];l!==0&&(ml.fromBufferAttribute(u,t),o?va.addScaledVector(ml,l):va.addScaledVector(ml.sub(e),l))}e.add(va)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),er.copy(t.ray).recast(t.near),!(Ma.containsPoint(er.origin)===!1&&(er.intersectSphere(Ma,td)===null||er.origin.distanceToSquared(td)>(t.far-t.near)**2))&&(Qu.copy(r).invert(),er.copy(t.ray).applyMatrix4(Qu),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,er)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=p.length;y<_;y++){let m=p[y],d=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,S=x;M<S;M+=3){let w=a.getX(M),g=a.getX(M+1),A=a.getX(M+2);s=Aa(this,d,t,n,h,l,u,w,g,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let y=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=y,d=_;m<d;m+=3){let v=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=Aa(this,o,t,n,h,l,u,v,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,_=p.length;y<_;y++){let m=p[y],d=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,S=x;M<S;M+=3){let w=M,g=M+1,A=M+2;s=Aa(this,d,t,n,h,l,u,w,g,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let y=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=y,d=_;m<d;m+=3){let v=m,x=m+1,M=m+2;s=Aa(this,o,t,n,h,l,u,v,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function d0(i,t,e,n,s,r,o,a){let c;if(t.side===Bn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===zs,a),c===null)return null;Ra.copy(a),Ra.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Ra);return h<e.near||h>e.far?null:{distance:h,point:Ra.clone(),object:i}}function Aa(i,t,e,n,s,r,o,a,c,h){i.getVertexPosition(a,Nr),i.getVertexPosition(c,Or),i.getVertexPosition(h,Fr);let l=d0(i,t,e,n,Nr,Or,Fr,Sa);if(l){s&&(wa.fromBufferAttribute(s,a),Ta.fromBufferAttribute(s,c),ba.fromBufferAttribute(s,h),l.uv=Xr.getInterpolation(Sa,Nr,Or,Fr,wa,Ta,ba,new ft)),r&&(wa.fromBufferAttribute(r,a),Ta.fromBufferAttribute(r,c),ba.fromBufferAttribute(r,h),l.uv1=Xr.getInterpolation(Sa,Nr,Or,Fr,wa,Ta,ba,new ft),l.uv2=l.uv1),o&&(ed.fromBufferAttribute(o,a),nd.fromBufferAttribute(o,c),id.fromBufferAttribute(o,h),l.normal=Xr.getInterpolation(Sa,Nr,Or,Fr,ed,nd,id,new O),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let u={a,b:c,c:h,normal:new O,materialIndex:0};Xr.getNormal(Nr,Or,Fr,u.normal),l.face=u}return l}var dt=class i extends ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],u=[],p=0,f=0;y("z","y","x",-1,-1,n,e,t,o,r,0),y("z","y","x",1,-1,n,e,-t,o,r,1),y("x","z","y",1,1,t,n,e,s,o,2),y("x","z","y",1,-1,t,n,-e,s,o,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(u,2));function y(_,m,d,v,x,M,S,w,g,A,E){let T=M/g,b=S/A,C=M/2,H=S/2,R=w/2,I=g+1,D=A+1,z=0,N=0,B=new O;for(let G=0;G<D;G++){let X=G*b-H;for(let nt=0;nt<I;nt++){let q=nt*T-C;B[_]=q*v,B[m]=X*x,B[d]=R,h.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[d]=w>0?1:-1,l.push(B.x,B.y,B.z),u.push(nt/g),u.push(1-G/A),z+=1}}for(let G=0;G<A;G++)for(let X=0;X<g;X++){let nt=p+X+I*G,q=p+X+I*(G+1),Q=p+(X+1)+I*(G+1),ut=p+(X+1)+I*G;c.push(nt,q,ut),c.push(q,Q,ut),N+=6}a.addGroup(f,N,E),f+=N,p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function eo(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qn(i){let t={};for(let e=0;e<i.length;e++){let n=eo(i[e]);for(let s in n)t[s]=n[s]}return t}function f0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jd(i){return i.getRenderTarget()===null?i.outputColorSpace:Se.workingColorSpace}var Rh={clone:eo,merge:qn},p0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p0,this.fragmentShader=m0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eo(t.uniforms),this.uniformsGroups=f0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},nc=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=us}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fn=class extends nc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Br=-90,kr=1,Nl=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(Br,kr,t,e);s.layers=this.layers,this.add(s);let r=new Fn(Br,kr,t,e);r.layers=this.layers,this.add(r);let o=new Fn(Br,kr,t,e);o.layers=this.layers,this.add(o);let a=new Fn(Br,kr,t,e);a.layers=this.layers,this.add(a);let c=new Fn(Br,kr,t,e);c.layers=this.layers,this.add(c);let h=new Fn(Br,kr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===us)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(u,p,f),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},ic=class extends di{constructor(t,e,n,s,r,o,a,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:jr,super(t,e,n,s,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ol=class extends fs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Co("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===cr?Ne:_i),this.texture=new ic(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Ds});r.uniforms.tEquirect.value=e;let o=new F(s,r),a=e.minFilter;return e.minFilter===Do&&(e.minFilter=Yn),new Nl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},gl=new O,g0=new O,x0=new fe,hs=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gl.subVectors(n,e).cross(g0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(gl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||x0.getNormalMatrix(t),s=this.coplanarPoint(gl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},nr=new Fs,Ca=new O,No=class{constructor(t=new hs,e=new hs,n=new hs,s=new hs,r=new hs,o=new hs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=us){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],h=s[4],l=s[5],u=s[6],p=s[7],f=s[8],y=s[9],_=s[10],m=s[11],d=s[12],v=s[13],x=s[14],M=s[15];if(n[0].setComponents(c-r,p-h,m-f,M-d).normalize(),n[1].setComponents(c+r,p+h,m+f,M+d).normalize(),n[2].setComponents(c+o,p+l,m+y,M+v).normalize(),n[3].setComponents(c-o,p-l,m-y,M-v).normalize(),n[4].setComponents(c-a,p-u,m-_,M-x).normalize(),e===us)n[5].setComponents(c+a,p+u,m+_,M+x).normalize();else if(e===Xa)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(t){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ca.x=s.normal.x>0?t.max.x:t.min.x,Ca.y=s.normal.y>0?t.max.y:t.min.y,Ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Kd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function y0(i,t){let e=t.isWebGL2,n=new WeakMap;function s(h,l){let u=h.array,p=h.usage,f=u.byteLength,y=i.createBuffer();i.bindBuffer(l,y),i.bufferData(l,u,p),h.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:f}}function r(h,l,u){let p=l.array,f=l._updateRange,y=l.updateRanges;if(i.bindBuffer(u,h),f.count===-1&&y.length===0&&i.bufferSubData(u,0,p),y.length!==0){for(let _=0,m=y.length;_<m;_++){let d=y[_];e?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}l.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(u,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),l.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);let l=n.get(h);l&&(i.deleteBuffer(l.buffer),n.delete(h))}function c(h,l){if(h.isGLBufferAttribute){let p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=n.get(h);if(u===void 0)n.set(h,s(h,l));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,h,l),u.version=h.version}}return{get:o,remove:a,update:c}}var wn=class i extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,l=c+1,u=t/a,p=e/c,f=[],y=[],_=[],m=[];for(let d=0;d<l;d++){let v=d*p-o;for(let x=0;x<h;x++){let M=x*u-r;y.push(M,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){let x=v+h*d,M=v+h*(d+1),S=v+1+h*(d+1),w=v+1+h*d;f.push(x,M,w),f.push(M,S,w)}this.setIndex(f),this.setAttribute("position",new me(y,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
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
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,G0=`#define PI 3.141592653589793
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
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`
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
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,og=`#ifdef USE_GRADIENTMAP
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
}`,ag=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ug=`uniform bool receiveShadow;
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
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
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
#endif`,yg=`struct PhysicalMaterial {
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
}`,_g=`
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cg=`#if defined( USE_POINTS_UV )
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
#endif`,Pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ug=`#ifdef USE_MORPHTARGETS
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
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
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
#endif`,Gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ix=`float getShadowMask() {
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
}`,sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,fx=`#ifdef USE_TRANSMISSION
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
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
}`,bx=`#if DEPTH_PACKING == 3200
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
}`,Sx=`#define DISTANCE
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
}`,Rx=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Dx=`#define LAMBERT
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
}`,Ux=`#define LAMBERT
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
}`,zx=`#define MATCAP
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
}`,Nx=`#define MATCAP
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
}`,Ox=`#define NORMAL
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
}`,Fx=`#define NORMAL
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
}`,Bx=`#define PHONG
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
}`,kx=`#define PHONG
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
}`,Gx=`#define STANDARD
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
}`,Vx=`#define STANDARD
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
}`,Wx=`#define TOON
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
}`,Xx=`#define TOON
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
}`,qx=`uniform float size;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,$x=`#include <common>
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
}`,Zx=`uniform vec3 color;
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
}`,Jx=`uniform float rotation;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:_0,alphahash_pars_fragment:E0,alphamap_fragment:M0,alphamap_pars_fragment:v0,alphatest_fragment:w0,alphatest_pars_fragment:T0,aomap_fragment:b0,aomap_pars_fragment:S0,batching_pars_vertex:R0,batching_vertex:A0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:I0,iridescence_fragment:L0,bumpmap_pars_fragment:H0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:N0,color_fragment:O0,color_pars_fragment:F0,color_pars_vertex:B0,color_vertex:k0,common:G0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:$0,colorspace_fragment:Z0,colorspace_pars_fragment:J0,envmap_fragment:K0,envmap_common_pars_fragment:j0,envmap_pars_fragment:Q0,envmap_pars_vertex:tg,envmap_physical_pars_fragment:dg,envmap_vertex:eg,fog_vertex:ng,fog_pars_vertex:ig,fog_fragment:sg,fog_pars_fragment:rg,gradientmap_pars_fragment:og,lightmap_fragment:ag,lightmap_pars_fragment:cg,lights_lambert_fragment:lg,lights_lambert_pars_fragment:hg,lights_pars_begin:ug,lights_toon_fragment:fg,lights_toon_pars_fragment:pg,lights_phong_fragment:mg,lights_phong_pars_fragment:gg,lights_physical_fragment:xg,lights_physical_pars_fragment:yg,lights_fragment_begin:_g,lights_fragment_maps:Eg,lights_fragment_end:Mg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:bg,map_fragment:Sg,map_pars_fragment:Rg,map_particle_fragment:Ag,map_particle_pars_fragment:Cg,metalnessmap_fragment:Pg,metalnessmap_pars_fragment:Ig,morphcolor_vertex:Lg,morphnormal_vertex:Hg,morphtarget_pars_vertex:Dg,morphtarget_vertex:Ug,normal_fragment_begin:zg,normal_fragment_maps:Ng,normal_pars_fragment:Og,normal_pars_vertex:Fg,normal_vertex:Bg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Gg,clearcoat_normal_fragment_maps:Vg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:Xg,opaque_fragment:qg,packing:Yg,premultiplied_alpha_fragment:$g,project_vertex:Zg,dithering_fragment:Jg,dithering_pars_fragment:Kg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:tx,shadowmap_pars_vertex:ex,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:sx,skinning_pars_vertex:rx,skinning_vertex:ox,skinnormal_vertex:ax,specularmap_fragment:cx,specularmap_pars_fragment:lx,tonemapping_fragment:hx,tonemapping_pars_fragment:ux,transmission_fragment:dx,transmission_pars_fragment:fx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:xx,background_vert:yx,background_frag:_x,backgroundCube_vert:Ex,backgroundCube_frag:Mx,cube_vert:vx,cube_frag:wx,depth_vert:Tx,depth_frag:bx,distanceRGBA_vert:Sx,distanceRGBA_frag:Rx,equirect_vert:Ax,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Ix,meshbasic_vert:Lx,meshbasic_frag:Hx,meshlambert_vert:Dx,meshlambert_frag:Ux,meshmatcap_vert:zx,meshmatcap_frag:Nx,meshnormal_vert:Ox,meshnormal_frag:Fx,meshphong_vert:Bx,meshphong_frag:kx,meshphysical_vert:Gx,meshphysical_frag:Vx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:$x,shadow_frag:Zx,sprite_vert:Jx,sprite_frag:Kx},Mt={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Gi={basic:{uniforms:qn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:qn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:qn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:qn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:qn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:qn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:qn([Mt.points,Mt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:qn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:qn([Mt.common,Mt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:qn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:qn([Mt.sprite,Mt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:qn([Mt.common,Mt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:qn([Mt.lights,Mt.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Gi.physical={uniforms:qn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Pa={r:0,b:0,g:0};function jx(i,t,e,n,s,r,o){let a=new j(0),c=r===!0?0:1,h,l,u=null,p=0,f=null;function y(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),v=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===vc)?(l===void 0&&(l=new F(new dt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:eo(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Se.getTransfer(x.colorSpace)!==ze,(u!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new F(new wn(2,2),new kn({name:"BackgroundMaterial",uniforms:eo(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Se.getTransfer(x.colorSpace)!==ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function _(m,d){m.getRGB(Pa,Jd(i)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:y}}function Qx(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),h=c,l=!1;function u(R,I,D,z,N){let B=!1;if(o){let G=_(z,D,I);h!==G&&(h=G,f(h.object)),B=d(R,z,D,N),B&&v(R,z,D,N)}else{let G=I.wireframe===!0;(h.geometry!==z.id||h.program!==D.id||h.wireframe!==G)&&(h.geometry=z.id,h.program=D.id,h.wireframe=G,B=!0)}N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(B||l)&&(l=!1,A(R,I,D,z),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function y(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,I,D){let z=D.wireframe===!0,N=a[R.id];N===void 0&&(N={},a[R.id]=N);let B=N[I.id];B===void 0&&(B={},N[I.id]=B);let G=B[z];return G===void 0&&(G=m(p()),B[z]=G),G}function m(R){let I=[],D=[],z=[];for(let N=0;N<s;N++)I[N]=0,D[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:z,object:R,attributes:{},index:null}}function d(R,I,D,z){let N=h.attributes,B=I.attributes,G=0,X=D.getAttributes();for(let nt in X)if(X[nt].location>=0){let Q=N[nt],ut=B[nt];if(ut===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(ut=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(ut=R.instanceColor)),Q===void 0||Q.attribute!==ut||ut&&Q.data!==ut.data)return!0;G++}return h.attributesNum!==G||h.index!==z}function v(R,I,D,z){let N={},B=I.attributes,G=0,X=D.getAttributes();for(let nt in X)if(X[nt].location>=0){let Q=B[nt];Q===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));let ut={};ut.attribute=Q,Q&&Q.data&&(ut.data=Q.data),N[nt]=ut,G++}h.attributes=N,h.attributesNum=G,h.index=z}function x(){let R=h.newAttributes;for(let I=0,D=R.length;I<D;I++)R[I]=0}function M(R){S(R,0)}function S(R,I){let D=h.newAttributes,z=h.enabledAttributes,N=h.attributeDivisors;D[R]=1,z[R]===0&&(i.enableVertexAttribArray(R),z[R]=1),N[R]!==I&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,I),N[R]=I)}function w(){let R=h.newAttributes,I=h.enabledAttributes;for(let D=0,z=I.length;D<z;D++)I[D]!==R[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function g(R,I,D,z,N,B,G){G===!0?i.vertexAttribIPointer(R,I,D,N,B):i.vertexAttribPointer(R,I,D,z,N,B)}function A(R,I,D,z){if(n.isWebGL2===!1&&(R.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let N=z.attributes,B=D.getAttributes(),G=I.defaultAttributeValues;for(let X in B){let nt=B[X];if(nt.location>=0){let q=N[X];if(q===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),q!==void 0){let Q=q.normalized,ut=q.itemSize,Tt=e.get(q);if(Tt===void 0)continue;let _t=Tt.buffer,kt=Tt.type,qt=Tt.bytesPerElement,St=n.isWebGL2===!0&&(kt===i.INT||kt===i.UNSIGNED_INT||q.gpuType===Fd);if(q.isInterleavedBufferAttribute){let Ot=q.data,V=Ot.stride,at=q.offset;if(Ot.isInstancedInterleavedBuffer){for(let tt=0;tt<nt.locationSize;tt++)S(nt.location+tt,Ot.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let tt=0;tt<nt.locationSize;tt++)M(nt.location+tt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let tt=0;tt<nt.locationSize;tt++)g(nt.location+tt,ut/nt.locationSize,kt,Q,V*qt,(at+ut/nt.locationSize*tt)*qt,St)}else{if(q.isInstancedBufferAttribute){for(let Ot=0;Ot<nt.locationSize;Ot++)S(nt.location+Ot,q.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ot=0;Ot<nt.locationSize;Ot++)M(nt.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Ot=0;Ot<nt.locationSize;Ot++)g(nt.location+Ot,ut/nt.locationSize,kt,Q,ut*qt,ut/nt.locationSize*Ot*qt,St)}}else if(G!==void 0){let Q=G[X];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(nt.location,Q);break;case 3:i.vertexAttrib3fv(nt.location,Q);break;case 4:i.vertexAttrib4fv(nt.location,Q);break;default:i.vertexAttrib1fv(nt.location,Q)}}}}w()}function E(){C();for(let R in a){let I=a[R];for(let D in I){let z=I[D];for(let N in z)y(z[N].object),delete z[N];delete I[D]}delete a[R]}}function T(R){if(a[R.id]===void 0)return;let I=a[R.id];for(let D in I){let z=I[D];for(let N in z)y(z[N].object),delete z[N];delete I[D]}delete a[R.id]}function b(R){for(let I in a){let D=a[I];if(D[R.id]===void 0)continue;let z=D[R.id];for(let N in z)y(z[N].object),delete z[N];delete D[R.id]}}function C(){H(),l=!0,h!==c&&(h=c,f(h.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:C,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:M,disableUnusedAttributes:w}}function ty(i,t,e,n){let s=n.isWebGL2,r;function o(l){r=l}function a(l,u){i.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,p){if(p===0)return;let f,y;if(s)f=i,y="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[y](r,l,u,p),e.update(u,r,p)}function h(l,u,p){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<p;y++)this.render(l[y],u[y]);else{f.multiDrawArraysWEBGL(r,l,0,u,0,p);let y=0;for(let _=0;_<p;_++)y+=u[_];e.update(y,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function ey(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let h=o||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,M=o||t.has("OES_texture_float"),S=x&&M,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:w}}function ny(i){let t=this,e=null,n=0,s=!1,r=!1,o=new hs,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=l(u,p,0)},this.setState=function(u,p,f){let y=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||y===null||y.length===0||r&&!m)r?l(null):h();else{let v=r?0:n,x=v*4,M=d.clippingState||null;c.value=M,M=l(y,p,x,f);for(let S=0;S!==x;++S)M[S]=e[S];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(u,p,f,y){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,y!==!0||m===null){let d=f+_*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,M=f;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function iy(i){let t=new WeakMap;function e(o,a){return a===Cl?o.mapping=jr:a===Pl&&(o.mapping=Qr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cl||a===Pl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new Ol(c.height/2);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var sc=class extends nc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qr=4,sd=[.125,.215,.35,.446,.526,.582],rr=20,xl=new sc,rd=new j,yl=null,_l=0,El=0,ir=(1+Math.sqrt(5))/2,Gr=1/ir,od=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ir,Gr),new O(0,ir,-Gr),new O(Gr,0,ir),new O(-Gr,0,ir),new O(ir,Gr,0),new O(-ir,Gr,0)],rc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,_l,El),t.scissorTest=!1,Ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===jr||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Uo,format:Ii,colorSpace:ds,depthBuffer:!1},s=ad(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sy(r)),this._blurMaterial=ry(r,t,e)}return s}_compileMaterial(t){let e=new F(this._lodPlanes[0],t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,n,s){let a=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,p=l.toneMapping;l.getClearColor(rd),l.toneMapping=Us,l.autoClear=!1;let f=new Ee({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),y=new F(new dt,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(rd),_=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(h[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,h[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,h[d]));let x=this._cubeSize;Ia(s,v*x,d>2?x:0,x,x),l.setRenderTarget(s),_&&l.render(y,a),l.render(t,a)}y.geometry.dispose(),y.material.dispose(),l.toneMapping=p,l.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===jr||t.mapping===Qr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new F(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ia(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=od[(s-1)%od.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new F(this._lodPlanes[s],h),p=h.uniforms,f=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rr-1),_=r/y,m=isFinite(r)?1+Math.floor(l*_):rr;m>rr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);let d=[],v=0;for(let g=0;g<rr;++g){let A=g/_,E=Math.exp(-A*A/2);d.push(E),g===0?v+=E:g<m&&(v+=2*E)}for(let g=0;g<d.length;g++)d[g]=d[g]/v;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:x}=this;p.dTheta.value=y,p.mipInt.value=x-n;let M=this._sizeLods[s],S=3*M*(s>x-qr?s-x+qr:0),w=4*(this._cubeSize-M);Ia(e,S,w,3*M,2*M),c.setRenderTarget(e),c.render(u,xl)}};function sy(i){let t=[],e=[],n=[],s=i,r=i-qr+1+sd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-qr?c=sd[o-i+qr-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,u=1+h,p=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,y=6,_=3,m=2,d=1,v=new Float32Array(_*y*f),x=new Float32Array(m*y*f),M=new Float32Array(d*y*f);for(let w=0;w<f;w++){let g=w%3*2/3-1,A=w>2?0:-1,E=[g,A,0,g+2/3,A,0,g+2/3,A+1,0,g,A,0,g+2/3,A+1,0,g,A+1,0];v.set(E,_*y*w),x.set(p,m*y*w);let T=[w,w,w,w,w,w];M.set(T,d*y*w)}let S=new ae;S.setAttribute("position",new pe(v,_)),S.setAttribute("uv",new pe(x,m)),S.setAttribute("faceIndex",new pe(M,d)),t.push(S),s>qr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ad(i,t,e){let n=new fs(i,t,e);return n.texture.mapping=vc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ry(i,t,e){let n=new Float32Array(rr),s=new O(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function cd(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function ld(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function oy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===Cl||c===Pl,l=c===jr||c===Qr;if(h||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new rc(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(h&&u&&u.height>0||l&&u&&s(u)){e===null&&(e=new rc(i));let p=h?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ay(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cy(i,t,e,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let y in p.attributes)t.remove(p.attributes[y]);for(let y in p.morphAttributes){let _=p.morphAttributes[y];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){let p=u.attributes;for(let y in p)t.update(p[y],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let y in f){let _=f[y];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function h(u){let p=[],f=u.index,y=u.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let x=0,M=v.length;x<M;x+=3){let S=v[x+0],w=v[x+1],g=v[x+2];p.push(S,w,w,g,g,S)}}else if(y!==void 0){let v=y.array;_=y.version;for(let x=0,M=v.length/3-1;x<M;x+=3){let S=x+0,w=x+1,g=x+2;p.push(S,w,w,g,g,S)}}else return;let m=new($d(p)?ec:tc)(p,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function l(u){let p=r.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function ly(i,t,e,n){let s=n.isWebGL2,r;function o(f){r=f}let a,c;function h(f){a=f.type,c=f.bytesPerElement}function l(f,y){i.drawElements(r,y,a,f*c),e.update(y,r,1)}function u(f,y,_){if(_===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,y,a,f*c,_),e.update(y,r,_)}function p(f,y,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(f[d]/c,y[d]);else{m.multiDrawElementsWEBGL(r,y,0,a,f,0,_);let d=0;for(let v=0;v<_;v++)d+=y[v];e.update(d,r,1)}}this.setMode=o,this.setIndex=h,this.render=l,this.renderInstances=u,this.renderMultiDraw=p}function hy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function uy(i,t){return i[0]-t[0]}function dy(i,t){return Math.abs(t[1])-Math.abs(i[1])}function fy(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Be,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function c(h,l,u){let p=h.morphTargetInfluences;if(t.isWebGL2===!0){let f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,y=f!==void 0?f.length:0,_=r.get(l);if(_===void 0||_.count!==y){let R=function(){C.dispose(),r.delete(l),l.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();let v=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,S=l.morphAttributes.position||[],w=l.morphAttributes.normal||[],g=l.morphAttributes.color||[],A=0;v===!0&&(A=1),x===!0&&(A=2),M===!0&&(A=3);let E=l.attributes.position.count*A,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let b=new Float32Array(E*T*4*y),C=new Ja(b,E,T,y);C.type=Hs,C.needsUpdate=!0;let H=A*4;for(let I=0;I<y;I++){let D=S[I],z=w[I],N=g[I],B=E*T*4*I;for(let G=0;G<D.count;G++){let X=G*H;v===!0&&(o.fromBufferAttribute(D,G),b[B+X+0]=o.x,b[B+X+1]=o.y,b[B+X+2]=o.z,b[B+X+3]=0),x===!0&&(o.fromBufferAttribute(z,G),b[B+X+4]=o.x,b[B+X+5]=o.y,b[B+X+6]=o.z,b[B+X+7]=0),M===!0&&(o.fromBufferAttribute(N,G),b[B+X+8]=o.x,b[B+X+9]=o.y,b[B+X+10]=o.z,b[B+X+11]=N.itemSize===4?o.w:1)}}_={count:y,texture:C,size:new ft(E,T)},r.set(l,_),l.addEventListener("dispose",R)}let m=0;for(let v=0;v<p.length;v++)m+=p[v];let d=l.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=p===void 0?0:p.length,y=n[l.id];if(y===void 0||y.length!==f){y=[];for(let x=0;x<f;x++)y[x]=[x,0];n[l.id]=y}for(let x=0;x<f;x++){let M=y[x];M[0]=x,M[1]=p[x]}y.sort(dy);for(let x=0;x<8;x++)x<f&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(uy);let _=l.morphAttributes.position,m=l.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let M=a[x],S=M[0],w=M[1];S!==Number.MAX_SAFE_INTEGER&&w?(_&&l.getAttribute("morphTarget"+x)!==_[S]&&l.setAttribute("morphTarget"+x,_[S]),m&&l.getAttribute("morphNormal"+x)!==m[S]&&l.setAttribute("morphNormal"+x,m[S]),s[x]=w,d+=w):(_&&l.hasAttribute("morphTarget"+x)===!0&&l.deleteAttribute("morphTarget"+x),m&&l.hasAttribute("morphNormal"+x)===!0&&l.deleteAttribute("morphNormal"+x),s[x]=0)}let v=l.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function py(i,t,e,n){let s=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,u=t.get(c,l);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var oc=class extends di{constructor(t,e,n,s,r,o,a,c,h,l){if(l=l!==void 0?l:ar,l!==ar&&l!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ar&&(n=Ls),n===void 0&&l===to&&(n=or),super(null,s,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Cn,this.minFilter=c!==void 0?c:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jd=new di,Qd=new oc(1,1);Qd.compareFunction=Yd;var tf=new Ja,ef=new zl,nf=new ic,hd=[],ud=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function io(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hd[s];if(r===void 0&&(r=new Float32Array(s),hd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Tc(i,t){let e=ud[t];e===void 0&&(e=new Int32Array(t),ud[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function my(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2fv(this.addr,t),mn(e,t)}}function xy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;i.uniform3fv(this.addr,t),mn(e,t)}}function yy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4fv(this.addr,t),mn(e,t)}}function _y(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;pd.set(n),i.uniformMatrix2fv(this.addr,!1,pd),mn(e,n)}}function Ey(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),mn(e,n)}}function My(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;dd.set(n),i.uniformMatrix4fv(this.addr,!1,dd),mn(e,n)}}function vy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2iv(this.addr,t),mn(e,t)}}function Ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3iv(this.addr,t),mn(e,t)}}function by(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4iv(this.addr,t),mn(e,t)}}function Sy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2uiv(this.addr,t),mn(e,t)}}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3uiv(this.addr,t),mn(e,t)}}function Cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4uiv(this.addr,t),mn(e,t)}}function Py(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Qd:jd;e.setTexture2D(t||r,s)}function Iy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ef,s)}function Ly(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nf,s)}function Hy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tf,s)}function Dy(i){switch(i){case 5126:return my;case 35664:return gy;case 35665:return xy;case 35666:return yy;case 35674:return _y;case 35675:return Ey;case 35676:return My;case 5124:case 35670:return vy;case 35667:case 35671:return wy;case 35668:case 35672:return Ty;case 35669:case 35673:return by;case 5125:return Sy;case 36294:return Ry;case 36295:return Ay;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Hy}}function Uy(i,t){i.uniform1fv(this.addr,t)}function zy(i,t){let e=io(t,this.size,2);i.uniform2fv(this.addr,e)}function Ny(i,t){let e=io(t,this.size,3);i.uniform3fv(this.addr,e)}function Oy(i,t){let e=io(t,this.size,4);i.uniform4fv(this.addr,e)}function Fy(i,t){let e=io(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function By(i,t){let e=io(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ky(i,t){let e=io(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gy(i,t){i.uniform1iv(this.addr,t)}function Vy(i,t){i.uniform2iv(this.addr,t)}function Wy(i,t){i.uniform3iv(this.addr,t)}function Xy(i,t){i.uniform4iv(this.addr,t)}function qy(i,t){i.uniform1uiv(this.addr,t)}function Yy(i,t){i.uniform2uiv(this.addr,t)}function $y(i,t){i.uniform3uiv(this.addr,t)}function Zy(i,t){i.uniform4uiv(this.addr,t)}function Jy(i,t,e){let n=this.cache,s=t.length,r=Tc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jd,r[o])}function Ky(i,t,e){let n=this.cache,s=t.length,r=Tc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ef,r[o])}function jy(i,t,e){let n=this.cache,s=t.length,r=Tc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nf,r[o])}function Qy(i,t,e){let n=this.cache,s=t.length,r=Tc(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tf,r[o])}function t_(i){switch(i){case 5126:return Uy;case 35664:return zy;case 35665:return Ny;case 35666:return Oy;case 35674:return Fy;case 35675:return By;case 35676:return ky;case 5124:case 35670:return Gy;case 35667:case 35671:return Vy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return qy;case 36294:return Yy;case 36295:return $y;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return Qy}}var Fl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dy(e.type)}},Bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t_(e.type)}},kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function md(i,t){i.seq.push(t),i.map[t.id]=t}function e_(i,t,e){let n=i.name,s=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),o=Ml.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){md(e,h===void 0?new Fl(a,i,t):new Bl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new kl(a),md(e,u)),e=u}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);e_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function gd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var n_=37297,i_=0;function s_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function r_(i){let t=Se.getPrimaries(Se.workingColorSpace),e=Se.getPrimaries(i),n;switch(t===e?n="":t===Wa&&e===Va?n="LinearDisplayP3ToLinearSRGB":t===Va&&e===Wa&&(n="LinearSRGBToLinearDisplayP3"),i){case ds:case wc:return[n,"LinearTransferOETF"];case Ne:case bh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+s_(i.getShaderSource(t),o)}else return s}function o_(i,t){let e=r_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function a_(i,t){let e;switch(t){case pm:e="Linear";break;case mm:e="Reinhard";break;case gm:e="OptimizedCineon";break;case xm:e="ACESFilmic";break;case _m:e="AgX";break;case ym:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function c_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function l_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Yr).join(`
`)}function h_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function u_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Yr(i){return i!==""}function yd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _d(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(d_,p_)}var f_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function p_(i,t){let e=oe[t];if(e===void 0){let n=f_.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gl(e)}var m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(m_,g_)}function g_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function x_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ls&&(t="SHADOWMAP_TYPE_VSM"),t}function y_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jr:case Qr:t="ENVMAP_TYPE_CUBE";break;case vc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function __(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qr:t="ENVMAP_MODE_REFRACTION";break}return t}function E_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mh:t="ENVMAP_BLENDING_MULTIPLY";break;case dm:t="ENVMAP_BLENDING_MIX";break;case fm:t="ENVMAP_BLENDING_ADD";break}return t}function M_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function v_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=x_(e),h=y_(e),l=__(e),u=E_(e),p=M_(e),f=e.isWebGL2?"":c_(e),y=l_(e),_=h_(r),m=s.createProgram(),d,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),d.length>0&&(d+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),v.length>0&&(v+=`
`)):(d=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),v=[f,Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Us?"#define TONE_MAPPING":"",e.toneMapping!==Us?oe.tonemapping_pars_fragment:"",e.toneMapping!==Us?a_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,o_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Gl(o),o=yd(o,e),o=_d(o,e),a=Gl(a),a=yd(a,e),a=_d(a,e),o=Ed(o),a=Ed(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let M=x+d+o,S=x+v+a,w=gd(s,s.VERTEX_SHADER,M),g=gd(s,s.FRAGMENT_SHADER,S);s.attachShader(m,w),s.attachShader(m,g),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(C){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(m).trim(),R=s.getShaderInfoLog(w).trim(),I=s.getShaderInfoLog(g).trim(),D=!0,z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,g);else{let N=xd(s,w,"vertex"),B=xd(s,g,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+N+`
`+B)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(R===""||I==="")&&(z=!1);z&&(C.diagnostics={runnable:D,programLog:H,vertexShader:{log:R,prefix:d},fragmentShader:{log:I,prefix:v}})}s.deleteShader(w),s.deleteShader(g),E=new Kr(s,m),T=u_(s,m)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(m,n_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=g,this}var w_=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wl(t),e.set(t,n)),n}},Wl=class{constructor(t){this.id=w_++,this.code=t,this.usedTimes=0}};function T_(i,t,e,n,s,r,o){let a=new Qa,c=new Vl,h=[],l=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function m(E,T,b,C,H){let R=C.fog,I=H.geometry,D=E.isMeshStandardMaterial?C.environment:null,z=(E.isMeshStandardMaterial?e:t).get(E.envMap||D),N=z&&z.mapping===vc?z.image.height:null,B=y[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,X=G!==void 0?G.length:0,nt=0;I.morphAttributes.position!==void 0&&(nt=1),I.morphAttributes.normal!==void 0&&(nt=2),I.morphAttributes.color!==void 0&&(nt=3);let q,Q,ut,Tt;if(B){let Ie=Gi[B];q=Ie.vertexShader,Q=Ie.fragmentShader}else q=E.vertexShader,Q=E.fragmentShader,c.update(E),ut=c.getVertexShaderID(E),Tt=c.getFragmentShaderID(E);let _t=i.getRenderTarget(),kt=H.isInstancedMesh===!0,qt=H.isBatchedMesh===!0,St=!!E.map,Ot=!!E.matcap,V=!!z,at=!!E.aoMap,tt=!!E.lightMap,lt=!!E.bumpMap,et=!!E.normalMap,Lt=!!E.displacementMap,gt=!!E.emissiveMap,U=!!E.metalnessMap,L=!!E.roughnessMap,$=E.anisotropy>0,rt=E.clearcoat>0,ot=E.iridescence>0,it=E.sheen>0,zt=E.transmission>0,vt=$&&!!E.anisotropyMap,Rt=rt&&!!E.clearcoatMap,Vt=rt&&!!E.clearcoatNormalMap,Jt=rt&&!!E.clearcoatRoughnessMap,ct=ot&&!!E.iridescenceMap,ne=ot&&!!E.iridescenceThicknessMap,Ft=it&&!!E.sheenColorMap,Kt=it&&!!E.sheenRoughnessMap,Bt=!!E.specularMap,Ht=!!E.specularColorMap,jt=!!E.specularIntensityMap,Me=zt&&!!E.transmissionMap,Z=zt&&!!E.thicknessMap,Zt=!!E.gradientMap,Et=!!E.alphaMap,k=E.alphaTest>0,st=!!E.alphaHash,mt=!!E.extensions,Ut=!!I.attributes.uv1,xt=!!I.attributes.uv2,ye=!!I.attributes.uv3,_e=Us;return E.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(_e=i.toneMapping),{isWebGL2:l,shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:Q,defines:E.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:qt,instancing:kt,instancingColor:kt&&H.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:ds,map:St,matcap:Ot,envMap:V,envMapMode:V&&z.mapping,envMapCubeUVHeight:N,aoMap:at,lightMap:tt,bumpMap:lt,normalMap:et,displacementMap:p&&Lt,emissiveMap:gt,normalMapObjectSpace:et&&E.normalMapType===Pm,normalMapTangentSpace:et&&E.normalMapType===Th,metalnessMap:U,roughnessMap:L,anisotropy:$,anisotropyMap:vt,clearcoat:rt,clearcoatMap:Rt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Jt,iridescence:ot,iridescenceMap:ct,iridescenceThicknessMap:ne,sheen:it,sheenColorMap:Ft,sheenRoughnessMap:Kt,specularMap:Bt,specularColorMap:Ht,specularIntensityMap:jt,transmission:zt,transmissionMap:Me,thicknessMap:Z,gradientMap:Zt,opaque:E.transparent===!1&&E.blending===Zr,alphaMap:Et,alphaTest:k,alphaHash:st,combine:E.combine,mapUv:St&&_(E.map.channel),aoMapUv:at&&_(E.aoMap.channel),lightMapUv:tt&&_(E.lightMap.channel),bumpMapUv:lt&&_(E.bumpMap.channel),normalMapUv:et&&_(E.normalMap.channel),displacementMapUv:Lt&&_(E.displacementMap.channel),emissiveMapUv:gt&&_(E.emissiveMap.channel),metalnessMapUv:U&&_(E.metalnessMap.channel),roughnessMapUv:L&&_(E.roughnessMap.channel),anisotropyMapUv:vt&&_(E.anisotropyMap.channel),clearcoatMapUv:Rt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&_(E.sheenRoughnessMap.channel),specularMapUv:Bt&&_(E.specularMap.channel),specularColorMapUv:Ht&&_(E.specularColorMap.channel),specularIntensityMapUv:jt&&_(E.specularIntensityMap.channel),transmissionMapUv:Me&&_(E.transmissionMap.channel),thicknessMapUv:Z&&_(E.thicknessMap.channel),alphaMapUv:Et&&_(E.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(et||$),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:xt,vertexUv3s:ye,pointsUvs:H.isPoints===!0&&!!I.attributes.uv&&(St||Et),fog:!!R,useFog:E.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&E.map.isVideoTexture===!0&&Se.getTransfer(E.map.colorSpace)===ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===le,flipSided:E.side===Bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:mt&&E.extensions.derivatives===!0,extensionFragDepth:mt&&E.extensions.fragDepth===!0,extensionDrawBuffers:mt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let b in E.defines)T.push(b),T.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(v(T,E),x(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function v(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function x(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function M(E){let T=y[E.type],b;if(T){let C=Gi[T];b=Rh.clone(C.uniforms)}else b=E.uniforms;return b}function S(E,T){let b;for(let C=0,H=h.length;C<H;C++){let R=h[C];if(R.cacheKey===T){b=R,++b.usedTimes;break}}return b===void 0&&(b=new v_(i,T,E,r),h.push(b)),b}function w(E){if(--E.usedTimes===0){let T=h.indexOf(E);h[T]=h[h.length-1],h.pop(),E.destroy()}}function g(E){c.remove(E)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:g,programs:h,dispose:A}}function b_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function S_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,f,y,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:y,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=y,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,p,f,y,_,m){let d=o(u,p,f,y,_,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function c(u,p,f,y,_,m){let d=o(u,p,f,y,_,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function h(u,p){e.length>1&&e.sort(u||S_),n.length>1&&n.sort(p||vd),s.length>1&&s.sort(p||vd)}function l(){for(let u=t,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:l,sort:h}}function R_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new wd,i.set(n,[o])):s>=r.length?(o=new wd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new j};break;case"SpotLight":e={position:new O,direction:new O,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function C_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var P_=0;function I_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L_(i,t){let e=new A_,n=C_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)s.probe.push(new O);let r=new O,o=new ve,a=new ve;function c(l,u){let p=0,f=0,y=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let _=0,m=0,d=0,v=0,x=0,M=0,S=0,w=0,g=0,A=0,E=0;l.sort(I_);let T=u===!0?Math.PI:1;for(let C=0,H=l.length;C<H;C++){let R=l[C],I=R.color,D=R.intensity,z=R.distance,N=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=I.r*D*T,f+=I.g*D*T,y+=I.b*D*T;else if(R.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(R.sh.coefficients[B],D);E++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){let G=R.shadow,X=n.get(R);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.directionalShadow[_]=X,s.directionalShadowMap[_]=N,s.directionalShadowMatrix[_]=R.shadow.matrix,M++}s.directional[_]=B,_++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(I).multiplyScalar(D*T),B.distance=z,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,s.spot[d]=B;let G=R.shadow;if(R.map&&(s.spotLightMap[g]=R.map,g++,G.updateMatrices(R),R.castShadow&&A++),s.spotLightMatrix[d]=G.matrix,R.castShadow){let X=n.get(R);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.spotShadow[d]=X,s.spotShadowMap[d]=N,w++}d++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(I).multiplyScalar(D),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),s.rectArea[v]=B,v++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*T),B.distance=R.distance,B.decay=R.decay,R.castShadow){let G=R.shadow,X=n.get(R);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,s.pointShadow[m]=X,s.pointShadowMap[m]=N,s.pointShadowMatrix[m]=R.shadow.matrix,S++}s.point[m]=B,m++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(D*T),B.groundColor.copy(R.groundColor).multiplyScalar(D*T),s.hemi[x]=B,x++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=y;let b=s.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==d||b.rectAreaLength!==v||b.hemiLength!==x||b.numDirectionalShadows!==M||b.numPointShadows!==S||b.numSpotShadows!==w||b.numSpotMaps!==g||b.numLightProbes!==E)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=v,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=w+g-A,s.spotLightMap.length=g,s.numSpotLightShadowsWithMaps=A,s.numLightProbes=E,b.directionalLength=_,b.pointLength=m,b.spotLength=d,b.rectAreaLength=v,b.hemiLength=x,b.numDirectionalShadows=M,b.numPointShadows=S,b.numSpotShadows=w,b.numSpotMaps=g,b.numLightProbes=E,s.version=P_++)}function h(l,u){let p=0,f=0,y=0,_=0,m=0,d=u.matrixWorldInverse;for(let v=0,x=l.length;v<x;v++){let M=l[v];if(M.isDirectionalLight){let S=s.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),p++}else if(M.isSpotLight){let S=s.spot[y];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),y++}else if(M.isRectAreaLight){let S=s.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let S=s.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){let S=s.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:c,setupView:h,state:s}}function Td(i,t){let e=new L_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function h(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a}}function H_(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Td(i,t),e.set(r,[c])):o>=a.length?(c=new Td(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Xl=class extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ql=class extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
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
}`;function z_(i,t,e){let n=new No,s=new ft,r=new ft,o=new Be,a=new Xl({depthPacking:Cm}),c=new ql,h={},l=e.maxTextureSize,u={[zs]:Bn,[Bn]:zs,[le]:le},p=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:D_,fragmentShader:U_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let y=new ae;y.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new F(y,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let d=this.type;this.render=function(w,g,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=i.getRenderTarget(),T=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Ds),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let H=d!==ls&&this.type===ls,R=d===ls&&this.type!==ls;for(let I=0,D=w.length;I<D;I++){let z=w[I],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let B=N.getFrameExtents();if(s.multiply(B),r.copy(N.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/B.x),s.x=r.x*B.x,N.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/B.y),s.y=r.y*B.y,N.mapSize.y=r.y)),N.map===null||H===!0||R===!0){let X=this.type!==ls?{minFilter:Cn,magFilter:Cn}:{};N.map!==null&&N.map.dispose(),N.map=new fs(s.x,s.y,X),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let G=N.getViewportCount();for(let X=0;X<G;X++){let nt=N.getViewport(X);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),C.viewport(o),N.updateMatrices(z,X),n=N.getFrustum(),M(g,A,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===ls&&v(N,A),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,b)};function v(w,g){let A=t.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new fs(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(g,null,A,p,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(g,null,A,f,_,null)}function x(w,g,A,E){let T=null,b=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)T=b;else if(T=A.isPointLight===!0?c:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0){let C=T.uuid,H=g.uuid,R=h[C];R===void 0&&(R={},h[C]=R);let I=R[H];I===void 0&&(I=T.clone(),R[H]=I,g.addEventListener("dispose",S)),T=I}if(T.visible=g.visible,T.wireframe=g.wireframe,E===ls?T.side=g.shadowSide!==null?g.shadowSide:g.side:T.side=g.shadowSide!==null?g.shadowSide:u[g.side],T.alphaMap=g.alphaMap,T.alphaTest=g.alphaTest,T.map=g.map,T.clipShadows=g.clipShadows,T.clippingPlanes=g.clippingPlanes,T.clipIntersection=g.clipIntersection,T.displacementMap=g.displacementMap,T.displacementScale=g.displacementScale,T.displacementBias=g.displacementBias,T.wireframeLinewidth=g.wireframeLinewidth,T.linewidth=g.linewidth,A.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let C=i.properties.get(T);C.light=A}return T}function M(w,g,A,E,T){if(w.visible===!1)return;if(w.layers.test(g.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===ls)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let H=t.update(w),R=w.material;if(Array.isArray(R)){let I=H.groups;for(let D=0,z=I.length;D<z;D++){let N=I[D],B=R[N.materialIndex];if(B&&B.visible){let G=x(w,B,E,T);w.onBeforeShadow(i,w,g,A,H,G,N),i.renderBufferDirect(A,null,H,G,w,N),w.onAfterShadow(i,w,g,A,H,G,N)}}}else if(R.visible){let I=x(w,R,E,T);w.onBeforeShadow(i,w,g,A,H,I,null),i.renderBufferDirect(A,null,H,I,w,null),w.onAfterShadow(i,w,g,A,H,I,null)}}let C=w.children;for(let H=0,R=C.length;H<R;H++)M(C[H],g,A,E,T)}function S(w){w.target.removeEventListener("dispose",S);for(let A in h){let E=h[A],T=w.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function N_(i,t,e){let n=e.isWebGL2;function s(){let k=!1,st=new Be,mt=null,Ut=new Be(0,0,0,0);return{setMask:function(xt){mt!==xt&&!k&&(i.colorMask(xt,xt,xt,xt),mt=xt)},setLocked:function(xt){k=xt},setClear:function(xt,ye,_e,He,Ie){Ie===!0&&(xt*=He,ye*=He,_e*=He),st.set(xt,ye,_e,He),Ut.equals(st)===!1&&(i.clearColor(xt,ye,_e,He),Ut.copy(st))},reset:function(){k=!1,mt=null,Ut.set(-1,0,0,0)}}}function r(){let k=!1,st=null,mt=null,Ut=null;return{setTest:function(xt){xt?qt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(xt){st!==xt&&!k&&(i.depthMask(xt),st=xt)},setFunc:function(xt){if(mt!==xt){switch(xt){case rm:i.depthFunc(i.NEVER);break;case om:i.depthFunc(i.ALWAYS);break;case am:i.depthFunc(i.LESS);break;case Fa:i.depthFunc(i.LEQUAL);break;case cm:i.depthFunc(i.EQUAL);break;case lm:i.depthFunc(i.GEQUAL);break;case hm:i.depthFunc(i.GREATER);break;case um:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=xt}},setLocked:function(xt){k=xt},setClear:function(xt){Ut!==xt&&(i.clearDepth(xt),Ut=xt)},reset:function(){k=!1,st=null,mt=null,Ut=null}}}function o(){let k=!1,st=null,mt=null,Ut=null,xt=null,ye=null,_e=null,He=null,Ie=null;return{setTest:function(ue){k||(ue?qt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(ue){st!==ue&&!k&&(i.stencilMask(ue),st=ue)},setFunc:function(ue,hn,Wn){(mt!==ue||Ut!==hn||xt!==Wn)&&(i.stencilFunc(ue,hn,Wn),mt=ue,Ut=hn,xt=Wn)},setOp:function(ue,hn,Wn){(ye!==ue||_e!==hn||He!==Wn)&&(i.stencilOp(ue,hn,Wn),ye=ue,_e=hn,He=Wn)},setLocked:function(ue){k=ue},setClear:function(ue){Ie!==ue&&(i.clearStencil(ue),Ie=ue)},reset:function(){k=!1,st=null,mt=null,Ut=null,xt=null,ye=null,_e=null,He=null,Ie=null}}}let a=new s,c=new r,h=new o,l=new WeakMap,u=new WeakMap,p={},f={},y=new WeakMap,_=[],m=null,d=!1,v=null,x=null,M=null,S=null,w=null,g=null,A=null,E=new j(0,0,0),T=0,b=!1,C=null,H=null,R=null,I=null,D=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,B=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=B>=2);let X=null,nt={},q=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ut=new Be().fromArray(q),Tt=new Be().fromArray(Q);function _t(k,st,mt,Ut){let xt=new Uint8Array(4),ye=i.createTexture();i.bindTexture(k,ye),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<mt;_e++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(st,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(st+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ye}let kt={};kt[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(kt[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),qt(i.DEPTH_TEST),c.setFunc(Fa),gt(!1),U(su),qt(i.CULL_FACE),et(Ds);function qt(k){p[k]!==!0&&(i.enable(k),p[k]=!0)}function St(k){p[k]!==!1&&(i.disable(k),p[k]=!1)}function Ot(k,st){return f[k]!==st?(i.bindFramebuffer(k,st),f[k]=st,n&&(k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=st),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=st)),!0):!1}function V(k,st){let mt=_,Ut=!1;if(k)if(mt=y.get(st),mt===void 0&&(mt=[],y.set(st,mt)),k.isWebGLMultipleRenderTargets){let xt=k.texture;if(mt.length!==xt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,_e=xt.length;ye<_e;ye++)mt[ye]=i.COLOR_ATTACHMENT0+ye;mt.length=xt.length,Ut=!0}}else mt[0]!==i.COLOR_ATTACHMENT0&&(mt[0]=i.COLOR_ATTACHMENT0,Ut=!0);else mt[0]!==i.BACK&&(mt[0]=i.BACK,Ut=!0);Ut&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function at(k){return m!==k?(i.useProgram(k),m=k,!0):!1}let tt={[sr]:i.FUNC_ADD,[Wp]:i.FUNC_SUBTRACT,[Xp]:i.FUNC_REVERSE_SUBTRACT};if(n)tt[au]=i.MIN,tt[cu]=i.MAX;else{let k=t.get("EXT_blend_minmax");k!==null&&(tt[au]=k.MIN_EXT,tt[cu]=k.MAX_EXT)}let lt={[qp]:i.ZERO,[Yp]:i.ONE,[$p]:i.SRC_COLOR,[Rl]:i.SRC_ALPHA,[tm]:i.SRC_ALPHA_SATURATE,[jp]:i.DST_COLOR,[Jp]:i.DST_ALPHA,[Zp]:i.ONE_MINUS_SRC_COLOR,[Al]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[Kp]:i.ONE_MINUS_DST_ALPHA,[em]:i.CONSTANT_COLOR,[nm]:i.ONE_MINUS_CONSTANT_COLOR,[im]:i.CONSTANT_ALPHA,[sm]:i.ONE_MINUS_CONSTANT_ALPHA};function et(k,st,mt,Ut,xt,ye,_e,He,Ie,ue){if(k===Ds){d===!0&&(St(i.BLEND),d=!1);return}if(d===!1&&(qt(i.BLEND),d=!0),k!==Vp){if(k!==v||ue!==b){if((x!==sr||w!==sr)&&(i.blendEquation(i.FUNC_ADD),x=sr,w=sr),ue)switch(k){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $n:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,S=null,g=null,A=null,E.set(0,0,0),T=0,v=k,b=ue}return}xt=xt||st,ye=ye||mt,_e=_e||Ut,(st!==x||xt!==w)&&(i.blendEquationSeparate(tt[st],tt[xt]),x=st,w=xt),(mt!==M||Ut!==S||ye!==g||_e!==A)&&(i.blendFuncSeparate(lt[mt],lt[Ut],lt[ye],lt[_e]),M=mt,S=Ut,g=ye,A=_e),(He.equals(E)===!1||Ie!==T)&&(i.blendColor(He.r,He.g,He.b,Ie),E.copy(He),T=Ie),v=k,b=!1}function Lt(k,st){k.side===le?St(i.CULL_FACE):qt(i.CULL_FACE);let mt=k.side===Bn;st&&(mt=!mt),gt(mt),k.blending===Zr&&k.transparent===!1?et(Ds):et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);let Ut=k.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),$(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?qt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(k){C!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),C=k)}function U(k){k!==kp?(qt(i.CULL_FACE),k!==H&&(k===su?i.cullFace(i.BACK):k===Gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),H=k}function L(k){k!==R&&(N&&i.lineWidth(k),R=k)}function $(k,st,mt){k?(qt(i.POLYGON_OFFSET_FILL),(I!==st||D!==mt)&&(i.polygonOffset(st,mt),I=st,D=mt)):St(i.POLYGON_OFFSET_FILL)}function rt(k){k?qt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function ot(k){k===void 0&&(k=i.TEXTURE0+z-1),X!==k&&(i.activeTexture(k),X=k)}function it(k,st,mt){mt===void 0&&(X===null?mt=i.TEXTURE0+z-1:mt=X);let Ut=nt[mt];Ut===void 0&&(Ut={type:void 0,texture:void 0},nt[mt]=Ut),(Ut.type!==k||Ut.texture!==st)&&(X!==mt&&(i.activeTexture(mt),X=mt),i.bindTexture(k,st||kt[k]),Ut.type=k,Ut.texture=st)}function zt(){let k=nt[X];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(k){ut.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ut.copy(k))}function Me(k){Tt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Tt.copy(k))}function Z(k,st){let mt=u.get(st);mt===void 0&&(mt=new WeakMap,u.set(st,mt));let Ut=mt.get(k);Ut===void 0&&(Ut=i.getUniformBlockIndex(st,k.name),mt.set(k,Ut))}function Zt(k,st){let Ut=u.get(st).get(k);l.get(st)!==Ut&&(i.uniformBlockBinding(st,Ut,k.__bindingPointIndex),l.set(st,Ut))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},X=null,nt={},f={},y=new WeakMap,_=[],m=null,d=!1,v=null,x=null,M=null,S=null,w=null,g=null,A=null,E=new j(0,0,0),T=0,b=!1,C=null,H=null,R=null,I=null,D=null,ut.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:qt,disable:St,bindFramebuffer:Ot,drawBuffers:V,useProgram:at,setBlending:et,setMaterial:Lt,setFlipSided:gt,setCullFace:U,setLineWidth:L,setPolygonOffset:$,setScissorTest:rt,activeTexture:ot,bindTexture:it,unbindTexture:zt,compressedTexImage2D:vt,compressedTexImage3D:Rt,texImage2D:Bt,texImage3D:Ht,updateUBOMapping:Z,uniformBlockBinding:Zt,texStorage2D:Ft,texStorage3D:Kt,texSubImage2D:Vt,texSubImage3D:Jt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ne,scissor:jt,viewport:Me,reset:Et}}function O_(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,L){return f?new OffscreenCanvas(U,L):Ya("canvas")}function _(U,L,$,rt){let ot=1;if((U.width>rt||U.height>rt)&&(ot=rt/Math.max(U.width,U.height)),ot<1||L===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){let it=L?qa:Math.floor,zt=it(ot*U.width),vt=it(ot*U.height);u===void 0&&(u=y(zt,vt));let Rt=$?y(zt,vt):u;return Rt.width=zt,Rt.height=vt,Rt.getContext("2d").drawImage(U,0,0,zt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+zt+"x"+vt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function m(U){return Dl(U.width)&&Dl(U.height)}function d(U){return a?!1:U.wrapS!==Pi||U.wrapT!==Pi||U.minFilter!==Cn&&U.minFilter!==Yn}function v(U,L){return U.generateMipmaps&&L&&U.minFilter!==Cn&&U.minFilter!==Yn}function x(U){i.generateMipmap(U)}function M(U,L,$,rt,ot=!1){if(a===!1)return L;if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let it=L;if(L===i.RED&&($===i.FLOAT&&(it=i.R32F),$===i.HALF_FLOAT&&(it=i.R16F),$===i.UNSIGNED_BYTE&&(it=i.R8)),L===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(it=i.R8UI),$===i.UNSIGNED_SHORT&&(it=i.R16UI),$===i.UNSIGNED_INT&&(it=i.R32UI),$===i.BYTE&&(it=i.R8I),$===i.SHORT&&(it=i.R16I),$===i.INT&&(it=i.R32I)),L===i.RG&&($===i.FLOAT&&(it=i.RG32F),$===i.HALF_FLOAT&&(it=i.RG16F),$===i.UNSIGNED_BYTE&&(it=i.RG8)),L===i.RGBA){let zt=ot?Ga:Se.getTransfer(rt);$===i.FLOAT&&(it=i.RGBA32F),$===i.HALF_FLOAT&&(it=i.RGBA16F),$===i.UNSIGNED_BYTE&&(it=zt===ze?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(U,L,$){return v(U,$)===!0||U.isFramebufferTexture&&U.minFilter!==Cn&&U.minFilter!==Yn?Math.log2(Math.max(L.width,L.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?L.mipmaps.length:1}function w(U){return U===Cn||U===lu||U===Yc?i.NEAREST:i.LINEAR}function g(U){let L=U.target;L.removeEventListener("dispose",g),E(L),L.isVideoTexture&&l.delete(L)}function A(U){let L=U.target;L.removeEventListener("dispose",A),b(L)}function E(U){let L=n.get(U);if(L.__webglInit===void 0)return;let $=U.source,rt=p.get($);if(rt){let ot=rt[L.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&T(U),Object.keys(rt).length===0&&p.delete($)}n.remove(U)}function T(U){let L=n.get(U);i.deleteTexture(L.__webglTexture);let $=U.source,rt=p.get($);delete rt[L.__cacheKey],o.memory.textures--}function b(U){let L=U.texture,$=n.get(U),rt=n.get(L);if(rt.__webglTexture!==void 0&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray($.__webglFramebuffer[ot]))for(let it=0;it<$.__webglFramebuffer[ot].length;it++)i.deleteFramebuffer($.__webglFramebuffer[ot][it]);else i.deleteFramebuffer($.__webglFramebuffer[ot]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[ot])}else{if(Array.isArray($.__webglFramebuffer))for(let ot=0;ot<$.__webglFramebuffer.length;ot++)i.deleteFramebuffer($.__webglFramebuffer[ot]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ot=0;ot<$.__webglColorRenderbuffer.length;ot++)$.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[ot]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let ot=0,it=L.length;ot<it;ot++){let zt=n.get(L[ot]);zt.__webglTexture&&(i.deleteTexture(zt.__webglTexture),o.memory.textures--),n.remove(L[ot])}n.remove(L),n.remove(U)}let C=0;function H(){C=0}function R(){let U=C;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),C+=1,U}function I(U){let L=[];return L.push(U.wrapS),L.push(U.wrapT),L.push(U.wrapR||0),L.push(U.magFilter),L.push(U.minFilter),L.push(U.anisotropy),L.push(U.internalFormat),L.push(U.format),L.push(U.type),L.push(U.generateMipmaps),L.push(U.premultiplyAlpha),L.push(U.flipY),L.push(U.unpackAlignment),L.push(U.colorSpace),L.join()}function D(U,L){let $=n.get(U);if(U.isVideoTexture&&Lt(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){let rt=U.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut($,U,L);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+L)}function z(U,L){let $=n.get(U);if(U.version>0&&$.__version!==U.version){ut($,U,L);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+L)}function N(U,L){let $=n.get(U);if(U.version>0&&$.__version!==U.version){ut($,U,L);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+L)}function B(U,L){let $=n.get(U);if(U.version>0&&$.__version!==U.version){Tt($,U,L);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+L)}let G={[Il]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Ll]:i.MIRRORED_REPEAT},X={[Cn]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[Yc]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[Em]:i.LINEAR_MIPMAP_NEAREST,[Do]:i.LINEAR_MIPMAP_LINEAR},nt={[Im]:i.NEVER,[Nm]:i.ALWAYS,[Lm]:i.LESS,[Yd]:i.LEQUAL,[Hm]:i.EQUAL,[zm]:i.GEQUAL,[Dm]:i.GREATER,[Um]:i.NOTEQUAL};function q(U,L,$){if($?(i.texParameteri(U,i.TEXTURE_WRAP_S,G[L.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,G[L.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,G[L.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,X[L.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,X[L.minFilter])):(i.texParameteri(U,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(U,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(L.wrapS!==Pi||L.wrapT!==Pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(U,i.TEXTURE_MAG_FILTER,w(L.magFilter)),i.texParameteri(U,i.TEXTURE_MIN_FILTER,w(L.minFilter)),L.minFilter!==Cn&&L.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,nt[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let rt=t.get("EXT_texture_filter_anisotropic");if(L.magFilter===Cn||L.minFilter!==Yc&&L.minFilter!==Do||L.type===Hs&&t.has("OES_texture_float_linear")===!1||a===!1&&L.type===Uo&&t.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(i.texParameterf(U,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function Q(U,L){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,L.addEventListener("dispose",g));let rt=L.source,ot=p.get(rt);ot===void 0&&(ot={},p.set(rt,ot));let it=I(L);if(it!==U.__cacheKey){ot[it]===void 0&&(ot[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ot[it].usedTimes++;let zt=ot[U.__cacheKey];zt!==void 0&&(ot[U.__cacheKey].usedTimes--,zt.usedTimes===0&&T(L)),U.__cacheKey=it,U.__webglTexture=ot[it].texture}return $}function ut(U,L,$){let rt=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(rt=i.TEXTURE_3D);let ot=Q(U,L),it=L.source;e.bindTexture(rt,U.__webglTexture,i.TEXTURE0+$);let zt=n.get(it);if(it.version!==zt.__version||ot===!0){e.activeTexture(i.TEXTURE0+$);let vt=Se.getPrimaries(Se.workingColorSpace),Rt=L.colorSpace===_i?null:Se.getPrimaries(L.colorSpace),Vt=L.colorSpace===_i||vt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Jt=d(L)&&m(L.image)===!1,ct=_(L.image,Jt,!1,s.maxTextureSize);ct=gt(L,ct);let ne=m(ct)||a,Ft=r.convert(L.format,L.colorSpace),Kt=r.convert(L.type),Bt=M(L.internalFormat,Ft,Kt,L.colorSpace,L.isVideoTexture);q(rt,L,ne);let Ht,jt=L.mipmaps,Me=a&&L.isVideoTexture!==!0&&Bt!==Xd,Z=zt.__version===void 0||ot===!0,Zt=S(L,ct,ne);if(L.isDepthTexture)Bt=i.DEPTH_COMPONENT,a?L.type===Hs?Bt=i.DEPTH_COMPONENT32F:L.type===Ls?Bt=i.DEPTH_COMPONENT24:L.type===or?Bt=i.DEPTH24_STENCIL8:Bt=i.DEPTH_COMPONENT16:L.type===Hs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===ar&&Bt===i.DEPTH_COMPONENT&&L.type!==vh&&L.type!==Ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Ls,Kt=r.convert(L.type)),L.format===to&&Bt===i.DEPTH_COMPONENT&&(Bt=i.DEPTH_STENCIL,L.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=or,Kt=r.convert(L.type))),Z&&(Me?e.texStorage2D(i.TEXTURE_2D,1,Bt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ct.width,ct.height,0,Ft,Kt,null));else if(L.isDataTexture)if(jt.length>0&&ne){Me&&Z&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,jt[0].width,jt[0].height);for(let Et=0,k=jt.length;Et<k;Et++)Ht=jt[Et],Me?e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Ht.width,Ht.height,Ft,Kt,Ht.data):e.texImage2D(i.TEXTURE_2D,Et,Bt,Ht.width,Ht.height,0,Ft,Kt,Ht.data);L.generateMipmaps=!1}else Me?(Z&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Ft,Kt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,ct.width,ct.height,0,Ft,Kt,ct.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Me&&Z&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Bt,jt[0].width,jt[0].height,ct.depth);for(let Et=0,k=jt.length;Et<k;Et++)Ht=jt[Et],L.format!==Ii?Ft!==null?Me?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Ht.width,Ht.height,ct.depth,Ft,Ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Et,Bt,Ht.width,Ht.height,ct.depth,0,Ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?e.texSubImage3D(i.TEXTURE_2D_ARRAY,Et,0,0,0,Ht.width,Ht.height,ct.depth,Ft,Kt,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Et,Bt,Ht.width,Ht.height,ct.depth,0,Ft,Kt,Ht.data)}else{Me&&Z&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,jt[0].width,jt[0].height);for(let Et=0,k=jt.length;Et<k;Et++)Ht=jt[Et],L.format!==Ii?Ft!==null?Me?e.compressedTexSubImage2D(i.TEXTURE_2D,Et,0,0,Ht.width,Ht.height,Ft,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,Et,Bt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Ht.width,Ht.height,Ft,Kt,Ht.data):e.texImage2D(i.TEXTURE_2D,Et,Bt,Ht.width,Ht.height,0,Ft,Kt,Ht.data)}else if(L.isDataArrayTexture)Me?(Z&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Bt,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Ft,Kt,ct.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ct.width,ct.height,ct.depth,0,Ft,Kt,ct.data);else if(L.isData3DTexture)Me?(Z&&e.texStorage3D(i.TEXTURE_3D,Zt,Bt,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Ft,Kt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ct.width,ct.height,ct.depth,0,Ft,Kt,ct.data);else if(L.isFramebufferTexture){if(Z)if(Me)e.texStorage2D(i.TEXTURE_2D,Zt,Bt,ct.width,ct.height);else{let Et=ct.width,k=ct.height;for(let st=0;st<Zt;st++)e.texImage2D(i.TEXTURE_2D,st,Bt,Et,k,0,Ft,Kt,null),Et>>=1,k>>=1}}else if(jt.length>0&&ne){Me&&Z&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,jt[0].width,jt[0].height);for(let Et=0,k=jt.length;Et<k;Et++)Ht=jt[Et],Me?e.texSubImage2D(i.TEXTURE_2D,Et,0,0,Ft,Kt,Ht):e.texImage2D(i.TEXTURE_2D,Et,Bt,Ft,Kt,Ht);L.generateMipmaps=!1}else Me?(Z&&e.texStorage2D(i.TEXTURE_2D,Zt,Bt,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,Kt,ct)):e.texImage2D(i.TEXTURE_2D,0,Bt,Ft,Kt,ct);v(L,ne)&&x(rt),zt.__version=it.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function Tt(U,L,$){if(L.image.length!==6)return;let rt=Q(U,L),ot=L.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);let it=n.get(ot);if(ot.version!==it.__version||rt===!0){e.activeTexture(i.TEXTURE0+$);let zt=Se.getPrimaries(Se.workingColorSpace),vt=L.colorSpace===_i?null:Se.getPrimaries(L.colorSpace),Rt=L.colorSpace===_i||zt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Vt=L.isCompressedTexture||L.image[0].isCompressedTexture,Jt=L.image[0]&&L.image[0].isDataTexture,ct=[];for(let Et=0;Et<6;Et++)!Vt&&!Jt?ct[Et]=_(L.image[Et],!1,!0,s.maxCubemapSize):ct[Et]=Jt?L.image[Et].image:L.image[Et],ct[Et]=gt(L,ct[Et]);let ne=ct[0],Ft=m(ne)||a,Kt=r.convert(L.format,L.colorSpace),Bt=r.convert(L.type),Ht=M(L.internalFormat,Kt,Bt,L.colorSpace),jt=a&&L.isVideoTexture!==!0,Me=it.__version===void 0||rt===!0,Z=S(L,ne,Ft);q(i.TEXTURE_CUBE_MAP,L,Ft);let Zt;if(Vt){jt&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Z,Ht,ne.width,ne.height);for(let Et=0;Et<6;Et++){Zt=ct[Et].mipmaps;for(let k=0;k<Zt.length;k++){let st=Zt[k];L.format!==Ii?Kt!==null?jt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,k,0,0,st.width,st.height,Kt,st.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,k,Ht,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,k,0,0,st.width,st.height,Kt,Bt,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,k,Ht,st.width,st.height,0,Kt,Bt,st.data)}}}else{Zt=L.mipmaps,jt&&Me&&(Zt.length>0&&Z++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Z,Ht,ct[0].width,ct[0].height));for(let Et=0;Et<6;Et++)if(Jt){jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ct[Et].width,ct[Et].height,Kt,Bt,ct[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ht,ct[Et].width,ct[Et].height,0,Kt,Bt,ct[Et].data);for(let k=0;k<Zt.length;k++){let mt=Zt[k].image[Et].image;jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,k+1,0,0,mt.width,mt.height,Kt,Bt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,k+1,Ht,mt.width,mt.height,0,Kt,Bt,mt.data)}}else{jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Kt,Bt,ct[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ht,Kt,Bt,ct[Et]);for(let k=0;k<Zt.length;k++){let st=Zt[k];jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,k+1,0,0,Kt,Bt,st.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,k+1,Ht,Kt,Bt,st.image[Et])}}}v(L,Ft)&&x(i.TEXTURE_CUBE_MAP),it.__version=ot.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function _t(U,L,$,rt,ot,it){let zt=r.convert($.format,$.colorSpace),vt=r.convert($.type),Rt=M($.internalFormat,zt,vt,$.colorSpace);if(!n.get(L).__hasExternalTextures){let Jt=Math.max(1,L.width>>it),ct=Math.max(1,L.height>>it);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,it,Rt,Jt,ct,L.depth,0,zt,vt,null):e.texImage2D(ot,it,Rt,Jt,ct,0,zt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),et(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ot,n.get($).__webglTexture,0,lt(L)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ot,n.get($).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(U,L,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),L.depthBuffer&&!L.stencilBuffer){let rt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||et(L)){let ot=L.depthTexture;ot&&ot.isDepthTexture&&(ot.type===Hs?rt=i.DEPTH_COMPONENT32F:ot.type===Ls&&(rt=i.DEPTH_COMPONENT24));let it=lt(L);et(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,rt,L.width,L.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,it,rt,L.width,L.height)}else i.renderbufferStorage(i.RENDERBUFFER,rt,L.width,L.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,U)}else if(L.depthBuffer&&L.stencilBuffer){let rt=lt(L);$&&et(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,L.width,L.height):et(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,U)}else{let rt=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ot=0;ot<rt.length;ot++){let it=rt[ot],zt=r.convert(it.format,it.colorSpace),vt=r.convert(it.type),Rt=M(it.internalFormat,zt,vt,it.colorSpace),Vt=lt(L);$&&et(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Rt,L.width,L.height):et(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,Rt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(U,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),D(L.depthTexture,0);let rt=n.get(L.depthTexture).__webglTexture,ot=lt(L);if(L.depthTexture.format===ar)et(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(L.depthTexture.format===to)et(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function St(U){let L=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!L.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");qt(L.__webglFramebuffer,U)}else if($){L.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[rt]),L.__webglDepthbuffer[rt]=i.createRenderbuffer(),kt(L.__webglDepthbuffer[rt],U,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=i.createRenderbuffer(),kt(L.__webglDepthbuffer,U,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(U,L,$){let rt=n.get(U);L!==void 0&&_t(rt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&St(U)}function V(U){let L=U.texture,$=n.get(U),rt=n.get(L);U.addEventListener("dispose",A),U.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=L.version,o.memory.textures++);let ot=U.isWebGLCubeRenderTarget===!0,it=U.isWebGLMultipleRenderTargets===!0,zt=m(U)||a;if(ot){$.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(a&&L.mipmaps&&L.mipmaps.length>0){$.__webglFramebuffer[vt]=[];for(let Rt=0;Rt<L.mipmaps.length;Rt++)$.__webglFramebuffer[vt][Rt]=i.createFramebuffer()}else $.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(a&&L.mipmaps&&L.mipmaps.length>0){$.__webglFramebuffer=[];for(let vt=0;vt<L.mipmaps.length;vt++)$.__webglFramebuffer[vt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(it)if(s.drawBuffers){let vt=U.texture;for(let Rt=0,Vt=vt.length;Rt<Vt;Rt++){let Jt=n.get(vt[Rt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&U.samples>0&&et(U)===!1){let vt=it?L:[L];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){let Vt=vt[Rt];$.__webglColorRenderbuffer[Rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Rt]);let Jt=r.convert(Vt.format,Vt.colorSpace),ct=r.convert(Vt.type),ne=M(Vt.internalFormat,Jt,ct,Vt.colorSpace,U.isXRRenderTarget===!0),Ft=lt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,ne,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,$.__webglColorRenderbuffer[Rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),kt($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),q(i.TEXTURE_CUBE_MAP,L,zt);for(let vt=0;vt<6;vt++)if(a&&L.mipmaps&&L.mipmaps.length>0)for(let Rt=0;Rt<L.mipmaps.length;Rt++)_t($.__webglFramebuffer[vt][Rt],U,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt);else _t($.__webglFramebuffer[vt],U,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);v(L,zt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){let vt=U.texture;for(let Rt=0,Vt=vt.length;Rt<Vt;Rt++){let Jt=vt[Rt],ct=n.get(Jt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),q(i.TEXTURE_2D,Jt,zt),_t($.__webglFramebuffer,U,Jt,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,0),v(Jt,zt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(a?vt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,rt.__webglTexture),q(vt,L,zt),a&&L.mipmaps&&L.mipmaps.length>0)for(let Rt=0;Rt<L.mipmaps.length;Rt++)_t($.__webglFramebuffer[Rt],U,L,i.COLOR_ATTACHMENT0,vt,Rt);else _t($.__webglFramebuffer,U,L,i.COLOR_ATTACHMENT0,vt,0);v(L,zt)&&x(vt),e.unbindTexture()}U.depthBuffer&&St(U)}function at(U){let L=m(U)||a,$=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let rt=0,ot=$.length;rt<ot;rt++){let it=$[rt];if(v(it,L)){let zt=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(it).__webglTexture;e.bindTexture(zt,vt),x(zt),e.unbindTexture()}}}function tt(U){if(a&&U.samples>0&&et(U)===!1){let L=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],$=U.width,rt=U.height,ot=i.COLOR_BUFFER_BIT,it=[],zt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(U),Rt=U.isWebGLMultipleRenderTargets===!0;if(Rt)for(let Vt=0;Vt<L.length;Vt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Vt=0;Vt<L.length;Vt++){it.push(i.COLOR_ATTACHMENT0+Vt),U.depthBuffer&&it.push(zt);let Jt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Jt===!1&&(U.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),Rt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Vt]),Jt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[zt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[zt])),Rt){let ct=n.get(L[Vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,$,rt,0,0,$,rt,ot,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Rt)for(let Vt=0;Vt<L.length;Vt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Vt]);let Jt=n.get(L[Vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function lt(U){return Math.min(s.maxSamples,U.samples)}function et(U){let L=n.get(U);return a&&U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Lt(U){let L=o.render.frame;l.get(U)!==L&&(l.set(U,L),U.update())}function gt(U,L){let $=U.colorSpace,rt=U.format,ot=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Hl||$!==ds&&$!==_i&&(Se.getTransfer($)===ze?a===!1?t.has("EXT_sRGB")===!0&&rt===Ii?(U.format=Hl,U.minFilter=Yn,U.generateMipmaps=!1):L=$a.sRGBToLinear(L):(rt!==Ii||ot!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),L}this.allocateTextureUnit=R,this.resetTextureUnits=H,this.setTexture2D=D,this.setTexture2DArray=z,this.setTexture3D=N,this.setTextureCube=B,this.rebindTextures=Ot,this.setupRenderTarget=V,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=et}function F_(i,t,e){let n=e.isWebGL2;function s(r,o=_i){let a,c=Se.getTransfer(o);if(r===Vi)return i.UNSIGNED_BYTE;if(r===Bd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===kd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Mm)return i.BYTE;if(r===vm)return i.SHORT;if(r===vh)return i.UNSIGNED_SHORT;if(r===Fd)return i.INT;if(r===Ls)return i.UNSIGNED_INT;if(r===Hs)return i.FLOAT;if(r===Uo)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===wm)return i.ALPHA;if(r===Ii)return i.RGBA;if(r===Tm)return i.LUMINANCE;if(r===bm)return i.LUMINANCE_ALPHA;if(r===ar)return i.DEPTH_COMPONENT;if(r===to)return i.DEPTH_STENCIL;if(r===Hl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===wh)return i.RED;if(r===Gd)return i.RED_INTEGER;if(r===Sm)return i.RG;if(r===Vd)return i.RG_INTEGER;if(r===Wd)return i.RGBA_INTEGER;if(r===$c||r===Zc||r===Jc||r===Kc)if(c===ze)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===$c)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===$c)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hu||r===uu||r===du||r===fu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===du)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===pu||r===mu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===pu)return c===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===mu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gu||r===xu||r===yu||r===_u||r===Eu||r===Mu||r===vu||r===wu||r===Tu||r===bu||r===Su||r===Ru||r===Au||r===Cu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===gu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_u)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Eu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Su)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ru)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Au)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cu)return c===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jc||r===Pu||r===Iu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===jc)return c===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Iu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rm||r===Lu||r===Hu||r===Du)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===jc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Lu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Du)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===or?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Yl=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},yt=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},B_={type:"move"},Po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(h,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],p=l.position.distanceTo(u.position),f=.02,y=.005;h.inputState.pinching&&p>f+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=f-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$l=class extends Ns{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,u=null,p=null,f=null,y=null,_=e.getContextAttributes(),m=null,d=null,v=[],x=[],M=new ft,S=null,w=new Fn;w.layers.enable(1),w.viewport=new Be;let g=new Fn;g.layers.enable(2),g.viewport=new Be;let A=[w,g],E=new Yl;E.layers.enable(1),E.layers.enable(2);let T=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=v[q];return Q===void 0&&(Q=new Po,v[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=v[q];return Q===void 0&&(Q=new Po,v[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=v[q];return Q===void 0&&(Q=new Po,v[q]=Q),Q.getHandSpace()};function C(q){let Q=x.indexOf(q.inputSource);if(Q===-1)return;let ut=v[Q];ut!==void 0&&(ut.update(q.inputSource,q.frame,h||o),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",R);for(let q=0;q<v.length;q++){let Q=x[q];Q!==null&&(x[q]=null,v[q].disconnect(Q))}T=null,b=null,t.setRenderTarget(m),f=null,p=null,u=null,s=null,d=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",H),s.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),d=new fs(f.framebufferWidth,f.framebufferHeight,{format:Ii,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,ut=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=_.stencil?to:ar,ut=_.stencil?or:Ls);let _t={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(_t),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),d=new fs(p.textureWidth,p.textureHeight,{format:Ii,type:Vi,depthTexture:new oc(p.textureWidth,p.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let kt=t.properties.get(d);kt.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(q){for(let Q=0;Q<q.removed.length;Q++){let ut=q.removed[Q],Tt=x.indexOf(ut);Tt>=0&&(x[Tt]=null,v[Tt].disconnect(ut))}for(let Q=0;Q<q.added.length;Q++){let ut=q.added[Q],Tt=x.indexOf(ut);if(Tt===-1){for(let kt=0;kt<v.length;kt++)if(kt>=x.length){x.push(ut),Tt=kt;break}else if(x[kt]===null){x[kt]=ut,Tt=kt;break}if(Tt===-1)break}let _t=v[Tt];_t&&_t.connect(ut)}}let I=new O,D=new O;function z(q,Q,ut){I.setFromMatrixPosition(Q.matrixWorld),D.setFromMatrixPosition(ut.matrixWorld);let Tt=I.distanceTo(D),_t=Q.projectionMatrix.elements,kt=ut.projectionMatrix.elements,qt=_t[14]/(_t[10]-1),St=_t[14]/(_t[10]+1),Ot=(_t[9]+1)/_t[5],V=(_t[9]-1)/_t[5],at=(_t[8]-1)/_t[0],tt=(kt[8]+1)/kt[0],lt=qt*at,et=qt*tt,Lt=Tt/(-at+tt),gt=Lt*-at;Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(Lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let U=qt+Lt,L=St+Lt,$=lt-gt,rt=et+(Tt-gt),ot=Ot*St/L*U,it=V*St/L*U;q.projectionMatrix.makePerspective($,rt,ot,it,U,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function N(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;E.near=g.near=w.near=q.near,E.far=g.far=w.far=q.far,(T!==E.near||b!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,b=E.far);let Q=q.parent,ut=E.cameras;N(E,Q);for(let Tt=0;Tt<ut.length;Tt++)N(ut[Tt],Q);ut.length===2?z(E,w,g):E.projectionMatrix.copy(w.projectionMatrix),B(q,E,Q)};function B(q,Q,ut){ut===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let G=null;function X(q,Q){if(l=Q.getViewerPose(h||o),y=Q,l!==null){let ut=l.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let Tt=!1;ut.length!==E.cameras.length&&(E.cameras.length=0,Tt=!0);for(let _t=0;_t<ut.length;_t++){let kt=ut[_t],qt=null;if(f!==null)qt=f.getViewport(kt);else{let Ot=u.getViewSubImage(p,kt);qt=Ot.viewport,_t===0&&(t.setRenderTargetTextures(d,Ot.colorTexture,p.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(d))}let St=A[_t];St===void 0&&(St=new Fn,St.layers.enable(_t),St.viewport=new Be,A[_t]=St),St.matrix.fromArray(kt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(kt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(qt.x,qt.y,qt.width,qt.height),_t===0&&(E.matrix.copy(St.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Tt===!0&&E.cameras.push(St)}}for(let ut=0;ut<v.length;ut++){let Tt=x[ut],_t=v[ut];Tt!==null&&_t!==void 0&&_t.update(Tt,Q,h||o)}G&&G(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),y=null}let nt=new Kd;nt.setAnimationLoop(X),this.setAnimationLoop=function(q){G=q},this.dispose=function(){}}};function k_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Jd(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),l(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),y(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,x):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Bn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Bn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){let M=x.program;n.uniformBlockBinding(v,M)}function h(v,x){let M=s[v.id];M===void 0&&(y(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",m));let S=x.program;n.updateUBOMapping(v,S);let w=t.render.frame;r[v.id]!==w&&(p(v),r[v.id]=w)}function l(v){let x=u();v.__bindingPointIndex=x;let M=i.createBuffer(),S=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let x=s[v.id],M=v.uniforms,S=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,g=M.length;w<g;w++){let A=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,T=A.length;E<T;E++){let b=A[E];if(f(b,w,E,S)===!0){let C=b.__offset,H=Array.isArray(b.value)?b.value:[b.value],R=0;for(let I=0;I<H.length;I++){let D=H[I],z=_(D);typeof D=="number"||typeof D=="boolean"?(b.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,C+R,b.__data)):D.isMatrix3?(b.__data[0]=D.elements[0],b.__data[1]=D.elements[1],b.__data[2]=D.elements[2],b.__data[3]=0,b.__data[4]=D.elements[3],b.__data[5]=D.elements[4],b.__data[6]=D.elements[5],b.__data[7]=0,b.__data[8]=D.elements[6],b.__data[9]=D.elements[7],b.__data[10]=D.elements[8],b.__data[11]=0):(D.toArray(b.__data,R),R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,x,M,S){let w=v.value,g=x+"_"+M;if(S[g]===void 0)return typeof w=="number"||typeof w=="boolean"?S[g]=w:S[g]=w.clone(),!0;{let A=S[g];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return S[g]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function y(v){let x=v.uniforms,M=0,S=16;for(let g=0,A=x.length;g<A;g++){let E=Array.isArray(x[g])?x[g]:[x[g]];for(let T=0,b=E.length;T<b;T++){let C=E[T],H=Array.isArray(C.value)?C.value:[C.value];for(let R=0,I=H.length;R<I;R++){let D=H[R],z=_(D),N=M%S;N!==0&&S-N<z.boundary&&(M+=S-N),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=z.storage}}}let w=M%S;return w>0&&(M+=S-w),v.__size=M,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:h,dispose:d}}var Oo=class{constructor(t={}){let{canvas:e=jm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let f=new Uint32Array(4),y=new Int32Array(4),_=null,m=null,d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Us,this.toneMappingExposure=1;let x=this,M=!1,S=0,w=0,g=null,A=-1,E=null,T=new Be,b=new Be,C=null,H=new j(0),R=0,I=e.width,D=e.height,z=1,N=null,B=null,G=new Be(0,0,I,D),X=new Be(0,0,I,D),nt=!1,q=new No,Q=!1,ut=!1,Tt=null,_t=new ve,kt=new ft,qt=new O,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return g===null?z:1}let V=n;function at(P,W){for(let Y=0;Y<P.length;Y++){let J=P[Y],K=e.getContext(J,W);if(K!==null)return K}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_h}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",st,!1),V===null){let W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),V=at(W,P),V===null)throw at(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let tt,lt,et,Lt,gt,U,L,$,rt,ot,it,zt,vt,Rt,Vt,Jt,ct,ne,Ft,Kt,Bt,Ht,jt,Me;function Z(){tt=new ay(V),lt=new ey(V,tt,t),tt.init(lt),Ht=new F_(V,tt,lt),et=new N_(V,tt,lt),Lt=new hy(V),gt=new b_,U=new O_(V,tt,et,gt,lt,Ht,Lt),L=new iy(x),$=new oy(x),rt=new y0(V,lt),jt=new Qx(V,tt,rt,lt),ot=new cy(V,rt,Lt,jt),it=new py(V,ot,rt,Lt),Ft=new fy(V,lt,U),Jt=new ny(gt),zt=new T_(x,L,$,tt,lt,jt,Jt),vt=new k_(x,gt),Rt=new R_,Vt=new H_(tt,lt),ne=new jx(x,L,$,et,it,p,c),ct=new z_(x,it,lt),Me=new G_(V,Lt,lt,et),Kt=new ty(V,tt,Lt,lt),Bt=new ly(V,tt,Lt,lt),Lt.programs=zt.programs,x.capabilities=lt,x.extensions=tt,x.properties=gt,x.renderLists=Rt,x.shadowMap=ct,x.state=et,x.info=Lt}Z();let Zt=new $l(x,V);this.xr=Zt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let P=tt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=tt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(I,D,!1))},this.getSize=function(P){return P.set(I,D)},this.setSize=function(P,W,Y=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,D=W,e.width=Math.floor(P*z),e.height=Math.floor(W*z),Y===!0&&(e.style.width=P+"px",e.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(I*z,D*z).floor()},this.setDrawingBufferSize=function(P,W,Y){I=P,D=W,z=Y,e.width=Math.floor(P*Y),e.height=Math.floor(W*Y),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(G)},this.setViewport=function(P,W,Y,J){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,W,Y,J),et.viewport(T.copy(G).multiplyScalar(z).floor())},this.getScissor=function(P){return P.copy(X)},this.setScissor=function(P,W,Y,J){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,W,Y,J),et.scissor(b.copy(X).multiplyScalar(z).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(P){et.setScissorTest(nt=P)},this.setOpaqueSort=function(P){N=P},this.setTransparentSort=function(P){B=P},this.getClearColor=function(P){return P.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(P=!0,W=!0,Y=!0){let J=0;if(P){let K=!1;if(g!==null){let Ct=g.texture.format;K=Ct===Wd||Ct===Vd||Ct===Gd}if(K){let Ct=g.texture.type,Nt=Ct===Vi||Ct===Ls||Ct===vh||Ct===or||Ct===Bd||Ct===kd,Xt=ne.getClearColor(),Qt=ne.getClearAlpha(),ce=Xt.r,ie=Xt.g,re=Xt.b;Nt?(f[0]=ce,f[1]=ie,f[2]=re,f[3]=Qt,V.clearBufferuiv(V.COLOR,0,f)):(y[0]=ce,y[1]=ie,y[2]=re,y[3]=Qt,V.clearBufferiv(V.COLOR,0,y))}else J|=V.COLOR_BUFFER_BIT}W&&(J|=V.DEPTH_BUFFER_BIT),Y&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Rt.dispose(),Vt.dispose(),gt.dispose(),L.dispose(),$.dispose(),it.dispose(),jt.dispose(),Me.dispose(),zt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Ie),Zt.removeEventListener("sessionend",ue),Tt&&(Tt.dispose(),Tt=null),hn.stop()};function Et(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let P=Lt.autoReset,W=ct.enabled,Y=ct.autoUpdate,J=ct.needsUpdate,K=ct.type;Z(),Lt.autoReset=P,ct.enabled=W,ct.autoUpdate=Y,ct.needsUpdate=J,ct.type=K}function st(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function mt(P){let W=P.target;W.removeEventListener("dispose",mt),Ut(W)}function Ut(P){xt(P),gt.remove(P)}function xt(P){let W=gt.get(P).programs;W!==void 0&&(W.forEach(function(Y){zt.releaseProgram(Y)}),P.isShaderMaterial&&zt.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Y,J,K,Ct){W===null&&(W=St);let Nt=K.isMesh&&K.matrixWorld.determinant()<0,Xt=xe(P,W,Y,J,K);et.setMaterial(J,Nt);let Qt=Y.index,ce=1;if(J.wireframe===!0){if(Qt=ot.getWireframeAttribute(Y),Qt===void 0)return;ce=2}let ie=Y.drawRange,re=Y.attributes.position,sn=ie.start*ce,li=(ie.start+ie.count)*ce;Ct!==null&&(sn=Math.max(sn,Ct.start*ce),li=Math.min(li,(Ct.start+Ct.count)*ce)),Qt!==null?(sn=Math.max(sn,0),li=Math.min(li,Qt.count)):re!=null&&(sn=Math.max(sn,0),li=Math.min(li,re.count));let _n=li-sn;if(_n<0||_n===1/0)return;jt.setup(K,J,Xt,Y,Qt);let is,Ve=Kt;if(Qt!==null&&(is=rt.get(Qt),Ve=Bt,Ve.setIndex(is)),K.isMesh)J.wireframe===!0?(et.setLineWidth(J.wireframeLinewidth*Ot()),Ve.setMode(V.LINES)):Ve.setMode(V.TRIANGLES);else if(K.isLine){let de=J.linewidth;de===void 0&&(de=1),et.setLineWidth(de*Ot()),K.isLineSegments?Ve.setMode(V.LINES):K.isLineLoop?Ve.setMode(V.LINE_LOOP):Ve.setMode(V.LINE_STRIP)}else K.isPoints?Ve.setMode(V.POINTS):K.isSprite&&Ve.setMode(V.TRIANGLES);if(K.isBatchedMesh)Ve.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)Ve.renderInstances(sn,_n,K.count);else if(Y.isInstancedBufferGeometry){let de=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Vc=Math.min(Y.instanceCount,de);Ve.renderInstances(sn,_n,Vc)}else Ve.render(sn,_n)};function ye(P,W,Y){P.transparent===!0&&P.side===le&&P.forceSinglePass===!1?(P.side=Bn,P.needsUpdate=!0,ni(P,W,Y),P.side=zs,P.needsUpdate=!0,ni(P,W,Y),P.side=le):ni(P,W,Y)}this.compile=function(P,W,Y=null){Y===null&&(Y=P),m=Vt.get(Y),m.init(),v.push(m),Y.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),P!==Y&&P.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(x._useLegacyLights);let J=new Set;return P.traverse(function(K){let Ct=K.material;if(Ct)if(Array.isArray(Ct))for(let Nt=0;Nt<Ct.length;Nt++){let Xt=Ct[Nt];ye(Xt,Y,K),J.add(Xt)}else ye(Ct,Y,K),J.add(Ct)}),v.pop(),m=null,J},this.compileAsync=function(P,W,Y=null){let J=this.compile(P,W,Y);return new Promise(K=>{function Ct(){if(J.forEach(function(Nt){gt.get(Nt).currentProgram.isReady()&&J.delete(Nt)}),J.size===0){K(P);return}setTimeout(Ct,10)}tt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let _e=null;function He(P){_e&&_e(P)}function Ie(){hn.stop()}function ue(){hn.start()}let hn=new Kd;hn.setAnimationLoop(He),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(P){_e=P,Zt.setAnimationLoop(P),P===null?hn.stop():hn.start()},Zt.addEventListener("sessionstart",Ie),Zt.addEventListener("sessionend",ue),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(W),W=Zt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,W,g),m=Vt.get(P,v.length),m.init(),v.push(m),_t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(_t),ut=this.localClippingEnabled,Q=Jt.init(this.clippingPlanes,ut),_=Rt.get(P,d.length),_.init(),d.push(_),Wn(P,W,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(N,B),this.info.render.frame++,Q===!0&&Jt.beginShadows();let Y=m.state.shadowsArray;if(ct.render(Y,P,W),Q===!0&&Jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(_,P),m.setupLights(x._useLegacyLights),W.isArrayCamera){let J=W.cameras;for(let K=0,Ct=J.length;K<Ct;K++){let Nt=J[K];Js(_,P,Nt,Nt.viewport)}}else Js(_,P,W);g!==null&&(U.updateMultisampleRenderTarget(g),U.updateRenderTargetMipmap(g)),P.isScene===!0&&P.onAfterRender(x,P,W),jt.resetDefaultState(),A=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Wn(P,W,Y,J){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){J&&qt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(_t);let Nt=it.update(P),Xt=P.material;Xt.visible&&_.push(P,Nt,Xt,Y,qt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){let Nt=it.update(P),Xt=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),qt.copy(P.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),qt.copy(Nt.boundingSphere.center)),qt.applyMatrix4(P.matrixWorld).applyMatrix4(_t)),Array.isArray(Xt)){let Qt=Nt.groups;for(let ce=0,ie=Qt.length;ce<ie;ce++){let re=Qt[ce],sn=Xt[re.materialIndex];sn&&sn.visible&&_.push(P,Nt,sn,Y,qt.z,re)}}else Xt.visible&&_.push(P,Nt,Xt,Y,qt.z,null)}}let Ct=P.children;for(let Nt=0,Xt=Ct.length;Nt<Xt;Nt++)Wn(Ct[Nt],W,Y,J)}function Js(P,W,Y,J){let K=P.opaque,Ct=P.transmissive,Nt=P.transparent;m.setupLightsView(Y),Q===!0&&Jt.setGlobalState(x.clippingPlanes,Y),Ct.length>0&&Ze(K,Ct,W,Y),J&&et.viewport(T.copy(J)),K.length>0&&Ss(K,W,Y),Ct.length>0&&Ss(Ct,W,Y),Nt.length>0&&Ss(Nt,W,Y),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Ze(P,W,Y,J){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let Ct=lt.isWebGL2;Tt===null&&(Tt=new fs(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?Uo:Vi,minFilter:Do,samples:Ct?4:0})),x.getDrawingBufferSize(kt),Ct?Tt.setSize(kt.x,kt.y):Tt.setSize(qa(kt.x),qa(kt.y));let Nt=x.getRenderTarget();x.setRenderTarget(Tt),x.getClearColor(H),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();let Xt=x.toneMapping;x.toneMapping=Us,Ss(P,Y,J),U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt);let Qt=!1;for(let ce=0,ie=W.length;ce<ie;ce++){let re=W[ce],sn=re.object,li=re.geometry,_n=re.material,is=re.group;if(_n.side===le&&sn.layers.test(J.layers)){let Ve=_n.side;_n.side=Bn,_n.needsUpdate=!0,Un(sn,Y,J,li,_n,is),_n.side=Ve,_n.needsUpdate=!0,Qt=!0}}Qt===!0&&(U.updateMultisampleRenderTarget(Tt),U.updateRenderTargetMipmap(Tt)),x.setRenderTarget(Nt),x.setClearColor(H,R),x.toneMapping=Xt}function Ss(P,W,Y){let J=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Ct=P.length;K<Ct;K++){let Nt=P[K],Xt=Nt.object,Qt=Nt.geometry,ce=J===null?Nt.material:J,ie=Nt.group;Xt.layers.test(Y.layers)&&Un(Xt,W,Y,Qt,ce,ie)}}function Un(P,W,Y,J,K,Ct){P.onBeforeRender(x,W,Y,J,K,Ct),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(x,W,Y,J,P,Ct),K.transparent===!0&&K.side===le&&K.forceSinglePass===!1?(K.side=Bn,K.needsUpdate=!0,x.renderBufferDirect(Y,W,J,K,P,Ct),K.side=zs,K.needsUpdate=!0,x.renderBufferDirect(Y,W,J,K,P,Ct),K.side=le):x.renderBufferDirect(Y,W,J,K,P,Ct),P.onAfterRender(x,W,Y,J,K,Ct)}function ni(P,W,Y){W.isScene!==!0&&(W=St);let J=gt.get(P),K=m.state.lights,Ct=m.state.shadowsArray,Nt=K.state.version,Xt=zt.getParameters(P,K.state,Ct,W,Y),Qt=zt.getProgramCacheKey(Xt),ce=J.programs;J.environment=P.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(P.isMeshStandardMaterial?$:L).get(P.envMap||J.environment),ce===void 0&&(P.addEventListener("dispose",mt),ce=new Map,J.programs=ce);let ie=ce.get(Qt);if(ie!==void 0){if(J.currentProgram===ie&&J.lightsStateVersion===Nt)return ge(P,Xt),ie}else Xt.uniforms=zt.getUniforms(P),P.onBuild(Y,Xt,x),P.onBeforeCompile(Xt,x),ie=zt.acquireProgram(Xt,Qt),ce.set(Qt,ie),J.uniforms=Xt.uniforms;let re=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(re.clippingPlanes=Jt.uniform),ge(P,Xt),J.needsLights=Si(P),J.lightsStateVersion=Nt,J.needsLights&&(re.ambientLightColor.value=K.state.ambient,re.lightProbe.value=K.state.probe,re.directionalLights.value=K.state.directional,re.directionalLightShadows.value=K.state.directionalShadow,re.spotLights.value=K.state.spot,re.spotLightShadows.value=K.state.spotShadow,re.rectAreaLights.value=K.state.rectArea,re.ltc_1.value=K.state.rectAreaLTC1,re.ltc_2.value=K.state.rectAreaLTC2,re.pointLights.value=K.state.point,re.pointLightShadows.value=K.state.pointShadow,re.hemisphereLights.value=K.state.hemi,re.directionalShadowMap.value=K.state.directionalShadowMap,re.directionalShadowMatrix.value=K.state.directionalShadowMatrix,re.spotShadowMap.value=K.state.spotShadowMap,re.spotLightMatrix.value=K.state.spotLightMatrix,re.spotLightMap.value=K.state.spotLightMap,re.pointShadowMap.value=K.state.pointShadowMap,re.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=ie,J.uniformsList=null,ie}function At(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=Kr.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function ge(P,W){let Y=gt.get(P);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function xe(P,W,Y,J,K){W.isScene!==!0&&(W=St),U.resetTextureUnits();let Ct=W.fog,Nt=J.isMeshStandardMaterial?W.environment:null,Xt=g===null?x.outputColorSpace:g.isXRRenderTarget===!0?g.texture.colorSpace:ds,Qt=(J.isMeshStandardMaterial?$:L).get(J.envMap||Nt),ce=J.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ie=!!Y.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),re=!!Y.morphAttributes.position,sn=!!Y.morphAttributes.normal,li=!!Y.morphAttributes.color,_n=Us;J.toneMapped&&(g===null||g.isXRRenderTarget===!0)&&(_n=x.toneMapping);let is=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ve=is!==void 0?is.length:0,de=gt.get(J),Vc=m.state.lights;if(Q===!0&&(ut===!0||P!==E)){let xi=P===E&&J.id===A;Jt.setState(J,P,xi)}let Je=!1;J.version===de.__version?(de.needsLights&&de.lightsStateVersion!==Vc.state.version||de.outputColorSpace!==Xt||K.isBatchedMesh&&de.batching===!1||!K.isBatchedMesh&&de.batching===!0||K.isInstancedMesh&&de.instancing===!1||!K.isInstancedMesh&&de.instancing===!0||K.isSkinnedMesh&&de.skinning===!1||!K.isSkinnedMesh&&de.skinning===!0||K.isInstancedMesh&&de.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&de.instancingColor===!1&&K.instanceColor!==null||de.envMap!==Qt||J.fog===!0&&de.fog!==Ct||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==Jt.numPlanes||de.numIntersection!==Jt.numIntersection)||de.vertexAlphas!==ce||de.vertexTangents!==ie||de.morphTargets!==re||de.morphNormals!==sn||de.morphColors!==li||de.toneMapping!==_n||lt.isWebGL2===!0&&de.morphTargetsCount!==Ve)&&(Je=!0):(Je=!0,de.__version=J.version);let Ks=de.currentProgram;Je===!0&&(Ks=ni(J,W,K));let nu=!1,_o=!1,Wc=!1,zn=Ks.getUniforms(),js=de.uniforms;if(et.useProgram(Ks.program)&&(nu=!0,_o=!0,Wc=!0),J.id!==A&&(A=J.id,_o=!0),nu||E!==P){zn.setValue(V,"projectionMatrix",P.projectionMatrix),zn.setValue(V,"viewMatrix",P.matrixWorldInverse);let xi=zn.map.cameraPosition;xi!==void 0&&xi.setValue(V,qt.setFromMatrixPosition(P.matrixWorld)),lt.logarithmicDepthBuffer&&zn.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&zn.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,_o=!0,Wc=!0)}if(K.isSkinnedMesh){zn.setOptional(V,K,"bindMatrix"),zn.setOptional(V,K,"bindMatrixInverse");let xi=K.skeleton;xi&&(lt.floatVertexTextures?(xi.boneTexture===null&&xi.computeBoneTexture(),zn.setValue(V,"boneTexture",xi.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(zn.setOptional(V,K,"batchingTexture"),zn.setValue(V,"batchingTexture",K._matricesTexture,U));let Xc=Y.morphAttributes;if((Xc.position!==void 0||Xc.normal!==void 0||Xc.color!==void 0&&lt.isWebGL2===!0)&&Ft.update(K,Y,Ks),(_o||de.receiveShadow!==K.receiveShadow)&&(de.receiveShadow=K.receiveShadow,zn.setValue(V,"receiveShadow",K.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(js.envMap.value=Qt,js.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),_o&&(zn.setValue(V,"toneMappingExposure",x.toneMappingExposure),de.needsLights&&It(js,Wc),Ct&&J.fog===!0&&vt.refreshFogUniforms(js,Ct),vt.refreshMaterialUniforms(js,J,z,D,Tt),Kr.upload(V,At(de),js,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Kr.upload(V,At(de),js,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&zn.setValue(V,"center",K.center),zn.setValue(V,"modelViewMatrix",K.modelViewMatrix),zn.setValue(V,"normalMatrix",K.normalMatrix),zn.setValue(V,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let xi=J.uniformsGroups;for(let qc=0,Bp=xi.length;qc<Bp;qc++)if(lt.isWebGL2){let iu=xi[qc];Me.update(iu,Ks),Me.bind(iu,Ks)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ks}function It(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Si(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(P,W,Y){gt.get(P.texture).__webglTexture=W,gt.get(P.depthTexture).__webglTexture=Y;let J=gt.get(P);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Y===void 0,J.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){let Y=gt.get(P);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Y=0){g=P,S=W,w=Y;let J=!0,K=null,Ct=!1,Nt=!1;if(P){let Qt=gt.get(P);Qt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(V.FRAMEBUFFER,null),J=!1):Qt.__webglFramebuffer===void 0?U.setupRenderTarget(P):Qt.__hasExternalTextures&&U.rebindTextures(P,gt.get(P.texture).__webglTexture,gt.get(P.depthTexture).__webglTexture);let ce=P.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Nt=!0);let ie=gt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ie[W])?K=ie[W][Y]:K=ie[W],Ct=!0):lt.isWebGL2&&P.samples>0&&U.useMultisampledRTT(P)===!1?K=gt.get(P).__webglMultisampledFramebuffer:Array.isArray(ie)?K=ie[Y]:K=ie,T.copy(P.viewport),b.copy(P.scissor),C=P.scissorTest}else T.copy(G).multiplyScalar(z).floor(),b.copy(X).multiplyScalar(z).floor(),C=nt;if(et.bindFramebuffer(V.FRAMEBUFFER,K)&&lt.drawBuffers&&J&&et.drawBuffers(P,K),et.viewport(T),et.scissor(b),et.setScissorTest(C),Ct){let Qt=gt.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Qt.__webglTexture,Y)}else if(Nt){let Qt=gt.get(P.texture),ce=W||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qt.__webglTexture,Y||0,ce)}A=-1},this.readRenderTargetPixels=function(P,W,Y,J,K,Ct,Nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=gt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Xt=Xt[Nt]),Xt){et.bindFramebuffer(V.FRAMEBUFFER,Xt);try{let Qt=P.texture,ce=Qt.format,ie=Qt.type;if(ce!==Ii&&Ht.convert(ce)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let re=ie===Uo&&(tt.has("EXT_color_buffer_half_float")||lt.isWebGL2&&tt.has("EXT_color_buffer_float"));if(ie!==Vi&&Ht.convert(ie)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ie===Hs&&(lt.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-J&&Y>=0&&Y<=P.height-K&&V.readPixels(W,Y,J,K,Ht.convert(ce),Ht.convert(ie),Ct)}finally{let Qt=g!==null?gt.get(g).__webglFramebuffer:null;et.bindFramebuffer(V.FRAMEBUFFER,Qt)}}},this.copyFramebufferToTexture=function(P,W,Y=0){let J=Math.pow(2,-Y),K=Math.floor(W.image.width*J),Ct=Math.floor(W.image.height*J);U.setTexture2D(W,0),V.copyTexSubImage2D(V.TEXTURE_2D,Y,0,0,P.x,P.y,K,Ct),et.unbindTexture()},this.copyTextureToTexture=function(P,W,Y,J=0){let K=W.image.width,Ct=W.image.height,Nt=Ht.convert(Y.format),Xt=Ht.convert(Y.type);U.setTexture2D(Y,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment),W.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,J,P.x,P.y,K,Ct,Nt,Xt,W.image.data):W.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,J,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Nt,W.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,J,P.x,P.y,Nt,Xt,W.image),J===0&&Y.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Y,J,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ct=P.max.x-P.min.x+1,Nt=P.max.y-P.min.y+1,Xt=P.max.z-P.min.z+1,Qt=Ht.convert(J.format),ce=Ht.convert(J.type),ie;if(J.isData3DTexture)U.setTexture3D(J,0),ie=V.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)U.setTexture2DArray(J,0),ie=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment);let re=V.getParameter(V.UNPACK_ROW_LENGTH),sn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),li=V.getParameter(V.UNPACK_SKIP_PIXELS),_n=V.getParameter(V.UNPACK_SKIP_ROWS),is=V.getParameter(V.UNPACK_SKIP_IMAGES),Ve=Y.isCompressedTexture?Y.mipmaps[K]:Y.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Ve.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ve.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,P.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,P.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,P.min.z),Y.isDataTexture||Y.isData3DTexture?V.texSubImage3D(ie,K,W.x,W.y,W.z,Ct,Nt,Xt,Qt,ce,Ve.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ie,K,W.x,W.y,W.z,Ct,Nt,Xt,Qt,Ve.data)):V.texSubImage3D(ie,K,W.x,W.y,W.z,Ct,Nt,Xt,Qt,ce,Ve),V.pixelStorei(V.UNPACK_ROW_LENGTH,re),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,sn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,li),V.pixelStorei(V.UNPACK_SKIP_ROWS,_n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,is),K===0&&J.generateMipmaps&&V.generateMipmap(ie),et.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),et.unbindTexture()},this.resetState=function(){S=0,w=0,g=null,et.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return us}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===bh?"display-p3":"srgb",e.unpackColorSpace=Se.workingColorSpace===wc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?cr:qd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===cr?Ne:ds}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Zl=class extends Oo{};Zl.prototype.isWebGL1Renderer=!0;var ac=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new j(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cc=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var lc=class extends di{constructor(t=null,e=1,n=1,s,r,o,a,c,h=Cn,l=Cn,u,p){super(null,o,a,c,h,l,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hc=class extends pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vr=new ve,bd=new ve,La=[],Sd=new he,V_=new ve,To=new F,bo=new Fs,uc=class extends F{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,V_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new he),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vr),Sd.copy(t.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vr),bo.copy(t.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(bo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(n),t.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vr),bd.multiplyMatrices(n,Vr),To.matrixWorld=bd,To.raycast(t,La);for(let o=0,a=La.length;o<a;o++){let c=La[o];c.instanceId=r,c.object=this,e.push(c)}La.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Xe=class extends ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rd=new ve,Jl=new Ka,Ha=new Fs,Da=new O,Ke=class extends vn{constructor(t=new ae,e=new Xe){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,t.ray.intersectsSphere(Ha)===!1)return;Rd.copy(s).invert(),Jl.copy(t.ray).applyMatrix4(Rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let y=p,_=f;y<_;y++){let m=h.getX(y);Da.fromBufferAttribute(u,m),Ad(Da,m,c,s,t,e,this)}}else{let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let y=p,_=f;y<_;y++)Da.fromBufferAttribute(u,y),Ad(Da,y,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ad(i,t,e,n,s,r,o){let a=Jl.distanceSqToPoint(i);if(a<e){let c=new O;Jl.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var Ei=class extends di{constructor(t,e,n,s,r,o,a,c,h){super(t,e,n,s,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let l=n[s],p=n[s+1]-l,f=(o-l)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ft:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new O,s=[],r=[],o=[],a=new O,c=new ve;for(let f=0;f<=t;f++){let y=f/t;s[f]=this.getTangentAt(y,new O)}r[0]=new O,o[0]=new O;let h=Number.MAX_VALUE,l=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);l<=h&&(h=l,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),p<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(Mn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,y))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Mn(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let y=1;y<=t;y++)r[y].applyMatrix4(c.makeRotationAxis(s[y],f*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Fo=class extends Mi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new ft,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,f=h-this.aY;c=p*l-f*u+this.aX,h=p*u+f*l+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kl=class extends Fo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ch(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){s(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,l,u){let p=(o-r)/h-(a-r)/(h+l)+(a-o)/l,f=(a-o)/l-(c-o)/(l+u)+(c-a)/u;p*=l,f*=l,s(o,a,p,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ua=new O,vl=new Ch,wl=new Ch,Tl=new Ch,jl=class extends Mi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,l;this.closed||a>0?h=s[(a-1)%r]:(Ua.subVectors(s[0],s[1]).add(s[0]),h=Ua);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?l=s[(a+2)%r]:(Ua.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,y=Math.pow(h.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(l),f);_<1e-4&&(_=1),y<1e-4&&(y=_),m<1e-4&&(m=_),vl.initNonuniformCatmullRom(h.x,u.x,p.x,l.x,y,_,m),wl.initNonuniformCatmullRom(h.y,u.y,p.y,l.y,y,_,m),Tl.initNonuniformCatmullRom(h.z,u.z,p.z,l.z,y,_,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(h.x,u.x,p.x,l.x,this.tension),wl.initCatmullRom(h.y,u.y,p.y,l.y,this.tension),Tl.initCatmullRom(h.z,u.z,p.z,l.z,this.tension));return n.set(vl.calc(c),wl.calc(c),Tl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function W_(i,t){let e=1-i;return e*e*t}function X_(i,t){return 2*(1-i)*i*t}function q_(i,t){return i*i*t}function Io(i,t,e,n){return W_(i,t)+X_(i,e)+q_(i,n)}function Y_(i,t){let e=1-i;return e*e*e*t}function $_(i,t){let e=1-i;return 3*e*e*i*t}function Z_(i,t){return 3*(1-i)*i*i*t}function J_(i,t){return i*i*i*t}function Lo(i,t,e,n,s){return Y_(i,t)+$_(i,e)+Z_(i,n)+J_(i,s)}var dc=class extends Mi{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lo(t,s.x,r.x,o.x,a.x),Lo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ql=class extends Mi{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lo(t,s.x,r.x,o.x,a.x),Lo(t,s.y,r.y,o.y,a.y),Lo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fc=class extends Mi{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},th=class extends Mi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pc=class extends Mi{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Io(t,s.x,r.x,o.x),Io(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eh=class extends Mi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Io(t,s.x,r.x,o.x),Io(t,s.y,r.y,o.y),Io(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mc=class extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],h=s[o],l=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Cd(a,c.x,h.x,l.x,u.x),Cd(a,c.y,h.y,l.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ft().fromArray(s))}return this}},nh=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:jl,CubicBezierCurve:dc,CubicBezierCurve3:Ql,EllipseCurve:Fo,LineCurve:fc,LineCurve3:th,QuadraticBezierCurve:pc,QuadraticBezierCurve3:eh,SplineCurve:mc}),ih=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){let l=c[h];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new nh[s.type]().fromJSON(s))}return this}},Bo=class extends ih{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fc(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new pc(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new dc(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let h=new Fo(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},sh=class i extends ae{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Mn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,u=new O,p=new ft,f=new O,y=new O,_=new O,m=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,f.x=d*1,f.y=-m,f.z=d*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,f.x=d*1,f.y=-m,f.z=d*0,y.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(y)}for(let v=0;v<=e;v++){let x=n+v*l*s,M=Math.sin(x),S=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*S,o.push(u.x,u.y,u.z),p.x=v/e,p.y=w/(t.length-1),a.push(p.x,p.y);let g=c[3*w+0]*M,A=c[3*w+1],E=c[3*w+0]*S;h.push(g,A,E)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){let M=x+v*t.length,S=M,w=M+t.length,g=M+t.length+1,A=M+1;r.push(S,w,A),r.push(g,A,w)}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},gc=class i extends sh{constructor(t=1,e=1,n=4,s=8){let r=new Bo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},je=class i extends ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],h=new O,l=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let f=n+u/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(o[p]/t+1)/2,l.y=(o[p+1]/t+1)/2,c.push(l.x,l.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pt=class i extends ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let l=[],u=[],p=[],f=[],y=0,_=[],m=n/2,d=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(l),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(p,3)),this.setAttribute("uv",new me(f,2));function v(){let M=new O,S=new O,w=0,g=(e-t)/n;for(let A=0;A<=r;A++){let E=[],T=A/r,b=T*(e-t)+t;for(let C=0;C<=s;C++){let H=C/s,R=H*c+a,I=Math.sin(R),D=Math.cos(R);S.x=b*I,S.y=-T*n+m,S.z=b*D,u.push(S.x,S.y,S.z),M.set(I,g,D).normalize(),p.push(M.x,M.y,M.z),f.push(H,1-T),E.push(y++)}_.push(E)}for(let A=0;A<s;A++)for(let E=0;E<r;E++){let T=_[E][A],b=_[E+1][A],C=_[E+1][A+1],H=_[E][A+1];l.push(T,b,H),l.push(b,C,H),w+=6}h.addGroup(d,w,0),d+=w}function x(M){let S=y,w=new ft,g=new O,A=0,E=M===!0?t:e,T=M===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*T,0),p.push(0,T,0),f.push(.5,.5),y++;let b=y;for(let C=0;C<=s;C++){let R=C/s*c+a,I=Math.cos(R),D=Math.sin(R);g.x=E*D,g.y=m*T,g.z=E*I,u.push(g.x,g.y,g.z),p.push(0,T,0),w.x=I*.5+.5,w.y=D*.5*T+.5,f.push(w.x,w.y),y++}for(let C=0;C<s;C++){let H=S+C,R=b+C;M===!0?l.push(R,R+1,H):l.push(R+1,R,H),A+=3}h.addGroup(d,A,M===!0?1:2),d+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yt=class i extends Pt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ko=class i extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),h(n),l(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new O,M=new O,S=new O;for(let w=0;w<e.length;w+=3)f(e[w+0],x),f(e[w+1],M),f(e[w+2],S),c(x,M,S,v)}function c(v,x,M,S){let w=S+1,g=[];for(let A=0;A<=w;A++){g[A]=[];let E=v.clone().lerp(M,A/w),T=x.clone().lerp(M,A/w),b=w-A;for(let C=0;C<=b;C++)C===0&&A===w?g[A][C]=E:g[A][C]=E.clone().lerp(T,C/b)}for(let A=0;A<w;A++)for(let E=0;E<2*(w-A)-1;E++){let T=Math.floor(E/2);E%2===0?(p(g[A][T+1]),p(g[A+1][T]),p(g[A][T])):(p(g[A][T+1]),p(g[A+1][T+1]),p(g[A+1][T]))}}function h(v){let x=new O;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function l(){let v=new O;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let M=m(v)/2/Math.PI+.5,S=d(v)/Math.PI+.5;o.push(M,1-S)}y(),u()}function u(){for(let v=0;v<o.length;v+=6){let x=o[v+0],M=o[v+2],S=o[v+4],w=Math.max(x,M,S),g=Math.min(x,M,S);w>.9&&g<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function p(v){r.push(v.x,v.y,v.z)}function f(v,x){let M=v*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function y(){let v=new O,x=new O,M=new O,S=new O,w=new ft,g=new ft,A=new ft;for(let E=0,T=0;E<r.length;E+=9,T+=6){v.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),w.set(o[T+0],o[T+1]),g.set(o[T+2],o[T+3]),A.set(o[T+4],o[T+5]),S.copy(v).add(x).add(M).divideScalar(3);let b=m(S);_(w,T+0,v,b),_(g,T+2,x,b),_(A,T+4,M,b)}}function _(v,x,M,S){S<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Zn=class i extends ko{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Bs=class extends Bo{constructor(t){super(t),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Bo().fromJSON(s))}return this}},K_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=sf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h,l,u,p,f;if(n&&(r=nE(i,t,r,e)),i.length>80*e){a=h=i[0],c=l=i[1];for(let y=e;y<s;y+=e)u=i[y],p=i[y+1],u<a&&(a=u),p<c&&(c=p),u>h&&(h=u),p>l&&(l=p);f=Math.max(h-a,l-c),f=f!==0?32767/f:0}return Go(r,o,e,a,c,f,0),o}};function sf(i,t,e,n,s){let r,o;if(s===fE(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Pd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Pd(r,i[r],i[r+1],o);return o&&bc(o,o.next)&&(Wo(o),o=o.next),o}function lr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bc(e,e.next)||We(e.prev,e,e.next)===0)){if(Wo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Go(i,t,e,n,s,r,o){if(!i)return;!o&&r&&aE(i,n,s,r);let a=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?Q_(i,n,s,r):j_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Wo(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=tE(lr(i),t,e),Go(i,t,e,n,s,r,2)):o===2&&eE(i,t,e,n,s,r):Go(lr(i),t,e,n,s,r,1);break}}}function j_(i){let t=i.prev,e=i,n=i.next;if(We(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,l=s<r?s<o?s:o:r<o?r:o,u=a<c?a<h?a:h:c<h?c:h,p=s>r?s>o?s:o:r>o?r:o,f=a>c?a>h?a:h:c>h?c:h,y=n.next;for(;y!==t;){if(y.x>=l&&y.x<=p&&y.y>=u&&y.y<=f&&$r(s,a,r,c,o,h,y.x,y.y)&&We(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Q_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(We(s,r,o)>=0)return!1;let a=s.x,c=r.x,h=o.x,l=s.y,u=r.y,p=o.y,f=a<c?a<h?a:h:c<h?c:h,y=l<u?l<p?l:p:u<p?u:p,_=a>c?a>h?a:h:c>h?c:h,m=l>u?l>p?l:p:u>p?u:p,d=rh(f,y,t,e,n),v=rh(_,m,t,e,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=d&&M&&M.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=y&&x.y<=m&&x!==s&&x!==o&&$r(a,l,c,u,h,p,x.x,x.y)&&We(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=y&&M.y<=m&&M!==s&&M!==o&&$r(a,l,c,u,h,p,M.x,M.y)&&We(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=d;){if(x.x>=f&&x.x<=_&&x.y>=y&&x.y<=m&&x!==s&&x!==o&&$r(a,l,c,u,h,p,x.x,x.y)&&We(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=y&&M.y<=m&&M!==s&&M!==o&&$r(a,l,c,u,h,p,M.x,M.y)&&We(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function tE(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!bc(s,r)&&rf(s,n,n.next,r)&&Vo(s,r)&&Vo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Wo(n),Wo(n.next),n=i=r),n=n.next}while(n!==i);return lr(n)}function eE(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hE(o,a)){let c=of(o,a);o=lr(o,o.next),c=lr(c,c.next),Go(o,t,e,n,s,r,0),Go(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nE(i,t,e,n){let s=[],r,o,a,c,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,h=sf(i,a,c,n,!1),h===h.next&&(h.steiner=!0),s.push(lE(h));for(s.sort(iE),r=0;r<s.length;r++)e=sE(s[r],e);return e}function iE(i,t){return i.x-t.x}function sE(i,t){let e=rE(i,t);if(!e)return t;let n=of(e,i);return lr(n,n.next),lr(e,e.next)}function rE(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,h=s.y,l=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&$r(o<h?r:n,o,c,h,o<h?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Vo(e,i)&&(u<l||u===l&&(e.x>s.x||e.x===s.x&&oE(s,e)))&&(s=e,l=u)),e=e.next;while(e!==a);return s}function oE(i,t){return We(i.prev,i,t.prev)<0&&We(t.next,i,i.next)<0}function aE(i,t,e,n){let s=i;do s.z===0&&(s.z=rh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cE(s)}function cE(i){let t,e,n,s,r,o,a,c,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(c=h;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function rh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lE(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $r(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function hE(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!uE(i,t)&&(Vo(i,t)&&Vo(t,i)&&dE(i,t)&&(We(i.prev,i,t.prev)||We(i,t.prev,t))||bc(i,t)&&We(i.prev,i,i.next)>0&&We(t.prev,t,t.next)>0)}function We(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bc(i,t){return i.x===t.x&&i.y===t.y}function rf(i,t,e,n){let s=Na(We(i,t,e)),r=Na(We(i,t,n)),o=Na(We(e,n,i)),a=Na(We(e,n,t));return!!(s!==r&&o!==a||s===0&&za(i,e,t)||r===0&&za(i,n,t)||o===0&&za(e,i,n)||a===0&&za(e,t,n))}function za(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Na(i){return i>0?1:i<0?-1:0}function uE(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vo(i,t){return We(i.prev,i,i.next)<0?We(i,t,i.next)>=0&&We(i,i.prev,t)>=0:We(i,t,i.prev)<0||We(i,i.next,t)<0}function dE(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function of(i,t){let e=new oh(i.i,i.x,i.y),n=new oh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pd(i,t,e,n){let s=new oh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fE(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ho=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Id(t),Ld(n,t);let o=t.length;e.forEach(Id);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ld(n,e[c]);let a=K_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Id(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ld(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var hr=class i extends ae{constructor(t=new Bs([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let h=t[a];o(h)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:pE,x,M=!1,S,w,g,A;d&&(x=d.getSpacedPoints(l),M=!0,p=!1,S=d.computeFrenetFrames(l,!1),w=new O,g=new O,A=new O),p||(m=0,f=0,y=0,_=0);let E=a.extractPoints(h),T=E.shape,b=E.holes;if(!Ho.isClockWise(T)){T=T.reverse();for(let V=0,at=b.length;V<at;V++){let tt=b[V];Ho.isClockWise(tt)&&(b[V]=tt.reverse())}}let H=Ho.triangulateShape(T,b),R=T;for(let V=0,at=b.length;V<at;V++){let tt=b[V];T=T.concat(tt)}function I(V,at,tt){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(at,tt)}let D=T.length,z=H.length;function N(V,at,tt){let lt,et,Lt,gt=V.x-at.x,U=V.y-at.y,L=tt.x-V.x,$=tt.y-V.y,rt=gt*gt+U*U,ot=gt*$-U*L;if(Math.abs(ot)>Number.EPSILON){let it=Math.sqrt(rt),zt=Math.sqrt(L*L+$*$),vt=at.x-U/it,Rt=at.y+gt/it,Vt=tt.x-$/zt,Jt=tt.y+L/zt,ct=((Vt-vt)*$-(Jt-Rt)*L)/(gt*$-U*L);lt=vt+gt*ct-V.x,et=Rt+U*ct-V.y;let ne=lt*lt+et*et;if(ne<=2)return new ft(lt,et);Lt=Math.sqrt(ne/2)}else{let it=!1;gt>Number.EPSILON?L>Number.EPSILON&&(it=!0):gt<-Number.EPSILON?L<-Number.EPSILON&&(it=!0):Math.sign(U)===Math.sign($)&&(it=!0),it?(lt=-U,et=gt,Lt=Math.sqrt(rt)):(lt=gt,et=U,Lt=Math.sqrt(rt/2))}return new ft(lt/Lt,et/Lt)}let B=[];for(let V=0,at=R.length,tt=at-1,lt=V+1;V<at;V++,tt++,lt++)tt===at&&(tt=0),lt===at&&(lt=0),B[V]=N(R[V],R[tt],R[lt]);let G=[],X,nt=B.concat();for(let V=0,at=b.length;V<at;V++){let tt=b[V];X=[];for(let lt=0,et=tt.length,Lt=et-1,gt=lt+1;lt<et;lt++,Lt++,gt++)Lt===et&&(Lt=0),gt===et&&(gt=0),X[lt]=N(tt[lt],tt[Lt],tt[gt]);G.push(X),nt=nt.concat(X)}for(let V=0;V<m;V++){let at=V/m,tt=f*Math.cos(at*Math.PI/2),lt=y*Math.sin(at*Math.PI/2)+_;for(let et=0,Lt=R.length;et<Lt;et++){let gt=I(R[et],B[et],lt);_t(gt.x,gt.y,-tt)}for(let et=0,Lt=b.length;et<Lt;et++){let gt=b[et];X=G[et];for(let U=0,L=gt.length;U<L;U++){let $=I(gt[U],X[U],lt);_t($.x,$.y,-tt)}}}let q=y+_;for(let V=0;V<D;V++){let at=p?I(T[V],nt[V],q):T[V];M?(g.copy(S.normals[0]).multiplyScalar(at.x),w.copy(S.binormals[0]).multiplyScalar(at.y),A.copy(x[0]).add(g).add(w),_t(A.x,A.y,A.z)):_t(at.x,at.y,0)}for(let V=1;V<=l;V++)for(let at=0;at<D;at++){let tt=p?I(T[at],nt[at],q):T[at];M?(g.copy(S.normals[V]).multiplyScalar(tt.x),w.copy(S.binormals[V]).multiplyScalar(tt.y),A.copy(x[V]).add(g).add(w),_t(A.x,A.y,A.z)):_t(tt.x,tt.y,u/l*V)}for(let V=m-1;V>=0;V--){let at=V/m,tt=f*Math.cos(at*Math.PI/2),lt=y*Math.sin(at*Math.PI/2)+_;for(let et=0,Lt=R.length;et<Lt;et++){let gt=I(R[et],B[et],lt);_t(gt.x,gt.y,u+tt)}for(let et=0,Lt=b.length;et<Lt;et++){let gt=b[et];X=G[et];for(let U=0,L=gt.length;U<L;U++){let $=I(gt[U],X[U],lt);M?_t($.x,$.y+x[l-1].y,x[l-1].x+tt):_t($.x,$.y,u+tt)}}}Q(),ut();function Q(){let V=s.length/3;if(p){let at=0,tt=D*at;for(let lt=0;lt<z;lt++){let et=H[lt];kt(et[2]+tt,et[1]+tt,et[0]+tt)}at=l+m*2,tt=D*at;for(let lt=0;lt<z;lt++){let et=H[lt];kt(et[0]+tt,et[1]+tt,et[2]+tt)}}else{for(let at=0;at<z;at++){let tt=H[at];kt(tt[2],tt[1],tt[0])}for(let at=0;at<z;at++){let tt=H[at];kt(tt[0]+D*l,tt[1]+D*l,tt[2]+D*l)}}n.addGroup(V,s.length/3-V,0)}function ut(){let V=s.length/3,at=0;Tt(R,at),at+=R.length;for(let tt=0,lt=b.length;tt<lt;tt++){let et=b[tt];Tt(et,at),at+=et.length}n.addGroup(V,s.length/3-V,1)}function Tt(V,at){let tt=V.length;for(;--tt>=0;){let lt=tt,et=tt-1;et<0&&(et=V.length-1);for(let Lt=0,gt=l+m*2;Lt<gt;Lt++){let U=D*Lt,L=D*(Lt+1),$=at+lt+U,rt=at+et+U,ot=at+et+L,it=at+lt+L;qt($,rt,ot,it)}}}function _t(V,at,tt){c.push(V),c.push(at),c.push(tt)}function kt(V,at,tt){St(V),St(at),St(tt);let lt=s.length/3,et=v.generateTopUV(n,s,lt-3,lt-2,lt-1);Ot(et[0]),Ot(et[1]),Ot(et[2])}function qt(V,at,tt,lt){St(V),St(at),St(lt),St(at),St(tt),St(lt);let et=s.length/3,Lt=v.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Ot(Lt[0]),Ot(Lt[1]),Ot(Lt[3]),Ot(Lt[1]),Ot(Lt[2]),Ot(Lt[3])}function St(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function Ot(V){r.push(V.x),r.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mE(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new nh[s.type]().fromJSON(s)),new i(n,t.options)}},pE={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[s*3],l=t[s*3+1];return[new ft(r,o),new ft(a,c),new ft(h,l)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],l=t[n*3+1],u=t[n*3+2],p=t[s*3],f=t[s*3+1],y=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-l)<Math.abs(o-h)?[new ft(o,1-c),new ft(h,1-u),new ft(p,1-y),new ft(_,1-d)]:[new ft(a,1-c),new ft(l,1-u),new ft(f,1-y),new ft(m,1-d)]}};function mE(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Pn=class i extends ko{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},rn=class i extends ko{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Li=class i extends ae{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],h=[],l=[],u=t,p=(e-t)/s,f=new O,y=new ft;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let d=r+m/n*o;f.x=u*Math.cos(d),f.y=u*Math.sin(d),c.push(f.x,f.y,f.z),h.push(0,0,1),y.x=(f.x/e+1)/2,y.y=(f.y/e+1)/2,l.push(y.x,y.y)}u+=p}for(let _=0;_<s;_++){let m=_*(n+1);for(let d=0;d<n;d++){let v=d+m,x=v,M=v+n+1,S=v+n+2,w=v+1;a.push(x,M,w),a.push(M,S,w)}}this.setIndex(a),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var te=class i extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],u=new O,p=new O,f=[],y=[],_=[],m=[];for(let d=0;d<=n;d++){let v=[],x=d/n,M=0;d===0&&o===0?M=.5/e:d===n&&c===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){let w=S/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),y.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(w+M,1-x),v.push(h++)}l.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let x=l[d][v+1],M=l[d][v],S=l[d+1][v],w=l[d+1][v+1];(d!==0||o>0)&&f.push(x,M,w),(d!==n-1||c<Math.PI)&&f.push(M,S,w)}this.setIndex(f),this.setAttribute("position",new me(y,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Jn=class i extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],h=[],l=new O,u=new O,p=new O;for(let f=0;f<=n;f++)for(let y=0;y<=s;y++){let _=y/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),l.x=t*Math.cos(_),l.y=t*Math.sin(_),p.subVectors(u,l).normalize(),c.push(p.x,p.y,p.z),h.push(y/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let y=1;y<=s;y++){let _=(s+1)*f+y-1,m=(s+1)*(f-1)+y-1,d=(s+1)*(f-1)+y,v=(s+1)*f+y;o.push(_,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var bt=class extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xc=class extends ps{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Oa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function gE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var no=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ah=class extends no{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uu,endingEnd:Uu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zu:r=t,a=2*e-n;break;case Nu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zu:o=t,c=2*n-e;break;case Nu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,y=(n-e)/(s-e),_=y*y,m=_*y,d=-p*m+2*p*_-p*y,v=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*y+1,x=(-1-f)*m+(1.5+f)*_+.5*y,M=f*m-f*_;for(let S=0;S!==a;++S)r[S]=d*o[l+S]+v*o[h+S]+x*o[c+S]+M*o[u+S];return r}},ch=class extends no{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(s-e),u=1-l;for(let p=0;p!==a;++p)r[p]=o[h+p]*u+o[c+p]*l;return r}},lh=class extends no{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oa(e,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oa(t.times,Array),values:Oa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new lh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ah(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ba:e=this.InterpolantFactoryMethodDiscrete;break;case ka:e=this.InterpolantFactoryMethodLinear;break;case Qc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Qc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&gE(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(s)c=!0;else{let u=a*n,p=u-n,f=u+n;for(let y=0;y!==n;++y){let _=e[u+y];if(_!==e[p+y]||_!==e[f+y]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=ka;var ur=class extends Hi{};ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Ba;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var hh=class extends Hi{};hh.prototype.ValueTypeName="color";var uh=class extends Hi{};uh.prototype.ValueTypeName="number";var dh=class extends no{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),h=t*a;for(let l=h+a;h!==l;h+=4)Os.slerpFlat(r,0,o,h-a,o,h,c);return r}},Xo=class extends Hi{InterpolantFactoryMethodLinear(t){return new dh(this.times,this.values,this.getValueSize(),t)}};Xo.prototype.ValueTypeName="quaternion";Xo.prototype.DefaultInterpolation=ka;Xo.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends Hi{};dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Ba;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var fh=class extends Hi{};fh.prototype.ValueTypeName="vector";var ph=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){let u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,p=h.length;u<p;u+=2){let f=h[u],y=h[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return y}return null}}},xE=new ph,mh=class{constructor(t){this.manager=t!==void 0?t:xE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};mh.DEFAULT_MATERIAL_NAME="__DEFAULT";var qo=class extends vn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new j(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},yc=class extends qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},bl=new ve,Hd=new O,Dd=new O,_c=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hd),Dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dd),e.updateMatrixWorld(),bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ud=new ve,So=new O,Sl=new O,gh=class extends _c{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),So.setFromMatrixPosition(t.matrixWorld),n.position.copy(So),Sl.copy(n.position),Sl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Sl),n.updateMatrixWorld(),s.makeTranslation(-So.x,-So.y,-So.z),Ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud)}},qe=class extends qo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},xh=class extends _c{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ec=class extends qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new xh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Mc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=zd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function zd(){return(typeof performance>"u"?Date:performance).now()}var Ph="\\[\\]\\.:\\/",yE=new RegExp("["+Ph+"]","g"),Ih="[^"+Ph+"]",_E="[^"+Ph.replace("\\.","")+"]",EE=/((?:WC+[\/:])*)/.source.replace("WC",Ih),ME=/(WCOD+)?/.source.replace("WCOD",_E),vE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ih),wE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ih),TE=new RegExp("^"+EE+ME+vE+wE+"$"),bE=["material","materials","bones","map"],yh=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yE,"")}static parseTrackName(t){let e=TE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=yh;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);var Kn=0,Zo=-9,Gn=1340,ii=4,Sc=64,Lh=i=>Math.min(1,Math.max(0,i)),ee=(i,t,e)=>i+(t-i)*e,wt=(i,t,e)=>{let n=Lh((e-i)/(t-i));return n*n*(3-2*n)};function ro(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Rc(i,t){let e=Math.imul(i,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function $o(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Rc(e,n),h=Rc(e+1,n),l=Rc(e,n+1),u=Rc(e+1,n+1);return ee(ee(c,h,o),ee(l,u,o),a)}function Wt(i,t){return $o(i,t)*.55+$o(i*2.1+7,t*2.1+3)*.3+$o(i*4.3+1,t*4.3+9)*.15}function pr(i,t,e,n,s,r){let o=s-e,a=r-n,c=Lh(((i-e)*o+(t-n)*a)/(o*o+a*a));return Math.hypot(i-(e+o*c),t-(n+a*c))}function oo(i,t,e){let n=1/0;for(let s=0;s<e.length-1;s++)n=Math.min(n,pr(i,t,e[s][0],e[s][1],e[s+1][0],e[s+1][1]));return n}var so=32,af=1e9,cf=new WeakMap;function SE(i){let t=cf.get(i);if(t)return t;t=new Map;for(let e of i)for(let n=0;n<e.length-1;n++){let[s,r]=e[n],[o,a]=e[n+1],c=[s,r,o,a],h=Math.floor(Math.min(s,o)/so)-1,l=Math.floor(Math.max(s,o)/so)+1,u=Math.floor(Math.min(r,a)/so)-1,p=Math.floor(Math.max(r,a)/so)+1;for(let f=h;f<=l;f++)for(let y=u;y<=p;y++){let _=f*1e5+y;t.has(_)||t.set(_,[]),t.get(_).push(c)}}return cf.set(i,t),t}var Re=(i,t,e)=>{let n=SE(e).get(Math.floor(i/so)*1e5+Math.floor(t/so));if(!n)return af;let s=af;for(let[r,o,a,c]of n)s=Math.min(s,pr(i,t,r,o,a,c));return s},ms=(i,t,e,n,s,r)=>r*wt(s,0,Math.hypot(i-e,t-n));function Vn(i,[t,e,n,s,r,o]){return a=>i+t*Math.sin(3*a+e)+n*Math.sin(5*a+s)+r*Math.sin(7*a+o)}function lf(i){let t=i.map(f=>{let y=Math.ceil(f.maxR/ii)*ii,_=y*2/ii,m=_+1,d=f.cx-y,v=f.cz-y,x=new Float32Array(m*m);for(let M=0;M<m;M++)for(let S=0;S<m;S++)x[M*m+S]=f.height(d+S*ii,v+M*ii);return{island:f,half:y,segs:_,N:m,x0:d,z0:v,heights:x}});function e(f,y){for(let _ of t){let m=(f-_.x0)/ii,d=(y-_.z0)/ii;if(m<0||d<0||m>=_.segs||d>=_.segs)continue;let v=Math.floor(m),x=Math.floor(d),M=m-v,S=d-x,w=x*_.N+v,g=_.heights;return ee(ee(g[w],g[w+1],M),ee(g[w+_.N],g[w+_.N+1],M),S)}return Zo}function n(f,y){let _=ii;return Math.hypot(e(f+_,y)-e(f-_,y),e(f,y+_)-e(f,y-_))/(2*_)}function s(f,y){for(let _ of t){let m=f-_.island.cx,d=y-_.island.cz;if(Math.hypot(m,d)<_.island.edge(Math.atan2(d,m))*1.02)return _.island}return null}let r=new yt,o=new j,a=new bt({vertexColors:!0,flatShading:!0,roughness:.95});for(let f of t){let y=new Float32Array(f.N*f.N*3);f.colors=y;for(let _=0;_<f.N;_++)for(let m=0;m<f.N;m++){let d=f.x0+m*ii,v=f.z0+_*ii,x=_*f.N+m;f.island.color(d,v,f.heights[x],n(d,v),o),y[x*3]=o.r,y[x*3+1]=o.g,y[x*3+2]=o.b}for(let _=0;_<f.segs;_+=Sc)for(let m=0;m<f.segs;m+=Sc){let d=Math.min(Sc,f.segs-m),v=Math.min(Sc,f.segs-_),x=!1;for(let E=0;E<=v&&!x;E++)for(let T=0;T<=d;T++)if(f.heights[(_+E)*f.N+m+T]>Zo+.5){x=!0;break}if(!x)continue;let M=new Float32Array((d+1)*(v+1)*3),S=new Float32Array((d+1)*(v+1)*3);for(let E=0;E<=v;E++)for(let T=0;T<=d;T++){let b=(_+E)*f.N+m+T,C=(E*(d+1)+T)*3;M[C]=f.x0+(m+T)*ii,M[C+1]=f.heights[b],M[C+2]=f.z0+(_+E)*ii,S[C]=y[b*3],S[C+1]=y[b*3+1],S[C+2]=y[b*3+2]}let w=[];for(let E=0;E<v;E++)for(let T=0;T<d;T++){let b=E*(d+1)+T,C=b+1,H=b+d+1,R=H+1;w.push(b,H,C,C,H,R)}let g=new ae;g.setAttribute("position",new pe(M,3)),g.setAttribute("color",new pe(S,3)),g.setIndex(w),g.computeVertexNormals(),g.computeBoundingSphere();let A=new F(g,a);A.receiveShadow=!0,r.add(A)}}let c=8,h=Math.round(Gn*2/c)+1,l=new Uint8Array(h*h);for(let f=0;f<h;f++)for(let y=0;y<h;y++){let _=e(-Gn+y*c,-Gn+f*c);l[f*h+y]=Math.round(Lh((_+12)/36)*255)}let u=new lc(l,h,h,wh,Vi);u.unpackAlignment=1,u.magFilter=Yn,u.minFilter=Yn,u.needsUpdate=!0;function p(f,y,_){for(let m of t){let d=Math.round((f-m.x0)/ii),v=Math.round((y-m.z0)/ii);if(d<0||v<0||d>m.segs||v>m.segs)continue;let x=(v*m.N+d)*3;return _.setRGB(m.colors[x],m.colors[x+1],m.colors[x+2])}return _.setRGB(0,0,0)}return{group:r,heightTex:u,sample:e,slopeAt:n,islandAt:s,colorAt:p}}var Yo=5;function hf(i,t){let e=Math.round(Gn*2/Yo),n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d"),r=s.createImageData(e,e),o=new j,a=new j("#7fd8d0"),c=new j("#3b7fc0");for(let h=0;h<e;h++)for(let l=0;l<e;l++){let u=l*Yo-Gn+Yo/2,p=h*Yo-Gn+Yo/2,f=t(u,p);f<Kn?o.copy(a).lerp(c,wt(0,6,-f)):i(u,p,o).offsetHSL(0,0,wt(4,30,f)*.08);let y=(h*e+l)*4;o.convertLinearToSRGB(),r.data[y]=o.r*255,r.data[y+1]=o.g*255,r.data[y+2]=o.b*255,r.data[y+3]=255}return s.putImageData(r,0,0),n}var RE=40,AE=80;function uf(i){let t=i.length,e=new Float64Array(t),n=new Float64Array(t),s=i.flatMap(c=>c.paths),r=new j("#c9a66e"),o=new j;function a(c,h){let l=-1/0;for(let p=0;p<t;p++){let f=i[p],y=c-f.cx,_=h-f.cz,m=Math.hypot(y,_);if(m>760){e[p]=-1e9;continue}e[p]=f.edge(Math.atan2(_,y))-m+($o(c/110+p*17.3,h/110-p*9.1)-.5)*AE,e[p]>l&&(l=e[p])}if(l===-1/0)return n.fill(0),n[0]=1,-1e9;let u=0;for(let p=0;p<t;p++)n[p]=Math.exp((e[p]-l)/RE),u+=n[p];for(let p=0;p<t;p++)n[p]/=u;return l}return{id:"continent",name:"\u5927\u9678",cx:0,cz:0,maxR:0,height(c,h){let l=a(c,h);if(l<-40)return Zo;let u=0,p=0;for(let f=0;f<t;f++)n[f]<.004||(u+=n[f]*i[f].land(c,h),p+=n[f]);u/=p;for(let f of i)f.carve&&(u=f.carve(c,h,u));return ee(Zo,u,wt(-30,55,l))},color(c,h,l,u,p){a(c,h),p.setRGB(0,0,0);let f=0;for(let y=0;y<t;y++)n[y]<.01||(i[y].color(c,h,l,u,o),p.r+=o.r*n[y],p.g+=o.g*n[y],p.b+=o.b*n[y],f+=n[y]);if(p.multiplyScalar(1/f),l>=1.7){let y=Re(c,h,s);y<2.6&&p.lerp(r,wt(2.6,1.6,y)*.75)}return p},weightOf(c,h,l){return a(h,l),n[c]},regionIndexAt(c,h){a(c,h);let l=0;for(let u=1;u<t;u++)n[u]>n[l]&&(l=u);return l}}}var ht=(i,t={})=>new bt({color:i,roughness:.9,flatShading:!0,...t}),pt=i=>(i.castShadow=i.receiveShadow=!0,i);function on(i,t){return{box(e,n,s,r,o,a,c,h,l="part"){if(t.push({box:new he(new O(r-e/2,o,a-s/2),new O(r+e/2,o+n,a+s/2)),color:h,kind:l}),!c)return null;let u=pt(new F(new dt(e,n,s),c));return u.position.set(r,o+n/2,a),i.add(u),u},cyl(e,n,s,r,o,a,c,h="part",l=10){let u=null;return a&&(u=pt(new F(new Pt(e,e,n,l),a)),u.position.set(s,r+n/2,o),i.add(u)),t.push({box:new he(new O(s-e,r,o-e),new O(s+e,r+n,o+e)),cyl:{x:s,z:o,r:e},color:c,kind:h}),u}}}function an(i,t,e){let n=new uc(i,t,e);n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1;let s=new vn,r=0;return{mesh:n,add(o,a,c,h=1,l=h,u=h,p=0,f=0,y=0,_=null,m="XYZ"){return r>=e?-1:(s.position.set(o,a,c),s.rotation.set(p,f,y,m),s.scale.set(h,l,u),s.updateMatrix(),n.setMatrixAt(r,s.matrix),_&&n.setColorAt(r,_),r++)},addMatrix(o){r>=e||n.setMatrixAt(r++,o)},finish(){return n.count=r,n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n}}}var lv=Math.sqrt(10),ks=720,vi=620,ke={east:20,west:-10,south:-30,north:-40};var Dh=i=>380+26*Math.sin(3*i+.5)+14*Math.sin(7*i+2)+8*Math.sin(11*i+1),CE=(i,t)=>[Math.cos(i)*(Dh(i)-t),Math.sin(i)*(Dh(i)-t)],pi=new ft(44,10).normalize(),ao=new ft(-.39,.92).normalize(),Xi={name:"\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730",x:-164,z:-215,r:24,h:22},[pf,mf]=CE(2.2,22),Ae={altar:{name:"\u661F\u306E\u796D\u58C7",x:0,z:0,r:16,h:5},village:{name:"\u6F6E\u98A8\u306E\u6751 \u30B7\u30AA\u30AB\u30BC",x:190,z:152,r:30,h:4.5},plateau:Xi,lake:{name:"\u93E1\u306E\u6E56",x:Xi.x+pi.x*51,z:Xi.z+pi.y*51,r:20},cave:{name:"\u3072\u304B\u308A\u306E\u6D1E\u7A9F",x:-202,z:114,r:13,h:5},windmill:{name:"\u98A8\u8ECA\u306E\u4E18",x:262,z:-88,r:14},lighthouse:{name:"\u5CAC\u306E\u706F\u53F0",x:pf,z:mf,r:10},stones:{name:"\u53E4\u306E\u74B0\u72B6\u5217\u77F3",x:-255,z:-60,r:15,h:7}},Wi={x:Xi.x+pi.x*18,z:Xi.z+pi.y*18,r:4},Gs=Ae.lake,df=[[Gs.x,Gs.z],[-70,-225],[-20,-250],[40,-275],[100,-300],[170,-330],[260,-380],[340,-440]],Ac=[Xi.x+ao.x*62,Xi.z+ao.y*62],Hh=[Xi.x+ao.x*20,Xi.z+ao.y*20],bn=Ae.village,Cc=Ae.cave,Tn=Ae.windmill,fi=Ae.stones,ff=[[[0,0],[60,50],[130,105],[bn.x,bn.z]],[[bn.x,bn.z],[bn.x+12,bn.z+48],[bn.x+12,bn.z+190]],[[0,0],[-30,-80],[-70,-150],[Gs.x+12,Gs.z+20]],[[0,0],[-60,-40],[-130,-110],Ac],[Ac,[(Ac[0]+Hh[0])/2+4,(Ac[1]+Hh[1])/2],Hh],[[0,0],[-80,40],[-150,90],[Cc.x+13,Cc.z]],[[0,0],[90,-20],[180,-60],[Tn.x-12,Tn.z+3]],[[0,0],[-60,90],[-150,200],[pf+8,mf-8]],[[-130,-110],[-200,-80],[fi.x+12,fi.z]],[[0,0],[130,ke.east-5],[260,ke.east],[480,ke.east]],[[-60,-40],[-150,-20],[-300,ke.west],[-480,ke.west]],[[0,0],[-20,100],[ke.south,250],[ke.south,480]],[[0,0],[-20,-120],[ke.north,-240],[ke.north,-480]],[[0,0],[150,-140],[330,-330]],[[bn.x,bn.z],[270,250],[360,360]],[[0,0],[-120,150],[-330,330]],[[-130,-110],[-230,-230],[-340,-330]]],Di={sandDeep:new j("#c7ae78"),sand:new j("#f0dba3"),grass:new j("#7cbf5a"),grassDark:new j("#5f9f45"),grassHigh:new j("#93bf62"),rock:new j("#9a8f86"),rockDark:new j("#7d7470"),path:new j("#cfab72"),plaza:new j("#dccdaa")},PE=new j,gf={id:"start",name:"\u59CB\u307E\u308A\u306E\u8349\u539F",cx:0,cz:0,edge:Dh,maxR:465,places:Ae,paths:ff,sanctuaries:[{x:Ae.altar.x,z:Ae.altar.z,r:14},{x:bn.x,z:bn.z,r:36}],land(i,t){let e=Math.hypot(i,t),n=3.5+Wt(i/45,t/45)*4.5;n+=Wt(i/150+20,t/150)*9*wt(70,220,e),n+=ms(i,t,Tn.x,Tn.z,90,13),n+=ms(i,t,-38,234,76,9),n+=ms(i,t,107,-120,50,4),n+=ms(i,t,250,230,70,8);let s=Xi,r=i-s.x,o=t-s.z,a=Math.hypot(r,o),c=a>.001?(r*ao.x+o*ao.y)/a:0,h=ee(8,42,wt(.82,.97,c)),l=s.h+(Wt(i/12,t/12)-.5)*.8;n=ee(n,l,wt(s.r+h,s.r,a)),n=ee(n,s.h-1.3,wt(Wi.r+1.5,Wi.r-1,Math.hypot(i-Wi.x,t-Wi.z)));let u=pr(i,t,Wi.x,Wi.z,s.x+pi.x*25,s.z+pi.y*25);a<s.r+1&&(n=Math.min(n,ee(s.h-.8,n,wt(.8,2.2,u))));for(let p of["altar","village","cave","stones"]){let f=Ae[p];n=ee(n,f.h,wt(f.r+16,f.r,Math.hypot(i-f.x,t-f.z)))}return n},carve(i,t,e){return e=ee(e,-3.5,wt(Gs.r+10,Gs.r-3,Math.hypot(i-Gs.x,t-Gs.z))),ee(e,-2.5,wt(22,5,oo(i,t,df)))},color(i,t,e,n,s){if(e<1.7)s.copy(Di.sandDeep).lerp(Di.sand,wt(-2,1.2,e));else{let r=Wt(i/9,t/9);s.copy(Di.grassDark).lerp(Di.grass,r),s.lerp(Di.grassHigh,wt(12,22,e)*.8),s.lerp(Di.sand,wt(2.4,1.7,e));let o=Re(i,t,ff);o<2.6&&s.lerp(PE.copy(Di.path).offsetHSL(0,0,(r-.5)*.06),wt(2.6,1.6,o)),Math.hypot(i-bn.x,t-bn.z)<14&&s.lerp(Di.plaza,wt(14,12,Math.hypot(i-bn.x,t-bn.z))),Math.hypot(i-Cc.x,t-Cc.z)<12&&s.copy(Di.rockDark)}return n>.75&&s.lerp(Wt(i/4,t/4)>.5?Di.rock:Di.rockDark,wt(.75,1.1,n)),s},nature:{trees:{style:"round",count:320,minH:2.6,avoidRiver:df,accentChance:.15,leafColors:[5216842,6665558,4164178,15902402]},palms:90,rocks:180,grass:{count:9e3,color:6266693},flowers:{count:2500,colors:[16774384,16766044,16752575,12166911]},avoid:[...Object.values(Ae).map(i=>[i.x,i.z,i.r]),[bn.x+12,bn.z+175,12]]},enemies:{kumodama:{count:30},ishimori:{count:7}},decorate(i,t){let e=new yt,n=on(e,i),s=t(Tn.x,Tn.z),r=ht(15919832);n.cyl(4.2,14,Tn.x,s-.5,Tn.z,null,15919832);let o=pt(new F(new Pt(3,4.4,14,8),r));o.position.set(Tn.x,s+6.5,Tn.z);let a=pt(new F(new Yt(4,4.5,8),ht(14246986)));a.position.set(Tn.x,s+15.7,Tn.z);let c=new F(new dt(1.6,2.6,.3),ht(8015414)),h=Math.atan2(-Tn.x,-Tn.z);c.position.set(Tn.x+Math.sin(h)*4.1,s+1.3,Tn.z+Math.cos(h)*4.1),c.rotation.y=h,e.add(o,a,c);let l=new yt;l.position.set(Tn.x+Math.sin(h)*3.6,s+12,Tn.z+Math.cos(h)*3.6),l.rotation.y=h;let u=ht(9067067),p=ht(16774884,{side:le}),f=new F(new Pt(.6,.6,.8,8),u);f.rotation.x=Math.PI/2,l.add(f);for(let R=0;R<4;R++){let I=new yt;I.rotation.z=R/4*Math.PI*2;let D=pt(new F(new dt(.35,10,.25),u));D.position.y=5;let z=pt(new F(new wn(2,7.5),p));z.position.set(1.15,5.8,.05),I.add(D,z),l.add(I)}e.add(l);let[y,_]=[Ae.lighthouse.x,Ae.lighthouse.z],m=t(y,_),d=ht(12432806),v=pt(new F(new Pt(4.2,4.6,2.5,10),d));v.position.set(y,m+.8,_),e.add(v);for(let R=0;R<6;R++){let I=3.2-R*.18,D=3.2-(R+1)*.18,z=pt(new F(new Pt(D,I,3.4,12),ht(R%2?14246986:16447214)));z.position.set(y,m+2+R*3.4+1.7,_),e.add(z)}let x=m+2+6*3.4,M=pt(new F(new Pt(3,3,.4,12),ht(4869737)));M.position.set(y,x+.2,_);let S=new F(new Pt(1.4,1.4,2.2,10),new bt({color:16773544,emissive:16765024,emissiveIntensity:1.4}));S.position.set(y,x+1.5,_);let w=pt(new F(new Yt(1.9,2,10),ht(4869737)));w.position.set(y,x+3.6,_),e.add(M,S,w),n.cyl(3.6,27,y,m-.5,_,null,14246986);let g=new yt;g.position.set(y,x+1.5,_);let A=new Ee({color:16773544,transparent:!0,opacity:.22,depthWrite:!1,blending:$n,side:le});for(let R of[1,-1]){let I=new F(new Yt(6,60,16,1,!0),A);I.rotation.z=R*Math.PI/2,I.position.x=R*30,g.add(I)}e.add(g);let E=new qe(16769184,40,40);E.position.set(y,x+1.5,_),e.add(E);let T=fi.h,b=ht(11116950);for(let R=0;R<12;R++){let I=R/12*Math.PI*2,D=fi.x+Math.cos(I)*11,z=fi.z+Math.sin(I)*11,N=R%4===3?2.2:4.5+R%3*.6,B=pt(new F(new dt(1.5,N,.9),b));B.position.set(D,T+N/2-.3,z),B.rotation.y=-I+Math.PI/2,e.add(B),n.cyl(.9,N,D,T-.5,z,null,11116950)}for(let R of[0,4,8]){let I=(R+.5)/12*Math.PI*2,D=pt(new F(new dt(1.2,.8,6.4),b));D.position.set(fi.x+Math.cos(I)*11,T+5.2,fi.z+Math.sin(I)*11),D.rotation.y=-I,e.add(D)}let C=pt(new F(new Pt(2.2,2.4,.9,10),b));C.position.set(fi.x,T+.45,fi.z),e.add(C),n.cyl(2.3,.9,fi.x,T-.5,fi.z,null,11116950);let H=new F(new rn(.6,0),new bt({color:13154559,emissive:9400288,emissiveIntensity:1.2}));return H.position.set(fi.x,T+2,fi.z),e.add(H),{group:e,update(R,I){l.rotateZ(R*.6),g.rotation.y+=R*.7,H.rotation.y+=R,H.position.y=T+2+Math.sin(I*1.5)*.25}}}};var Oe=(i,t={})=>new bt({color:i,roughness:.85,flatShading:!0,...t}),si=i=>(i.castShadow=i.receiveShadow=!0,i);function xf(i,t,e,n){let s=new Bs;s.moveTo(-i/2-.6,0),s.lineTo(0,e),s.lineTo(i/2+.6,0),s.lineTo(-i/2-.6,0);let r=new hr(s,{depth:t+1.2,bevelEnabled:!1});return r.translate(0,0,-(t+1.2)/2),si(new F(r,n))}function Jo({w:i,d:t,wall:e,roof:n,trim:s}){let r=new yt,o=4.4,a=si(new F(new dt(i,o,t),Oe(e)));a.position.y=o/2,r.add(a);let c=Oe(s),h=si(new F(new dt(i+.4,.5,t+.4),Oe(11050900)));h.position.y=.25,r.add(h);for(let x of[-1,1])for(let M of[-1,1]){let S=new F(new dt(.35,o,.35),c);S.position.set(x*(i/2),o/2,M*(t/2)),r.add(S)}let l=new F(new dt(i+.2,.3,t+.2),c);l.position.y=o,r.add(l);let u=xf(i,t,2.8,Oe(n));u.position.y=o,r.add(u);let p=si(new F(new dt(.8,2.4,.8),Oe(11773594)));p.position.set(i*.25,o+2.2,-t*.2),r.add(p);let f=new F(new dt(1.3,2.3,.15),Oe(8015414));f.position.set(0,1.4,t/2+.05);let y=new F(new te(.08,6,4),Oe(16040539,{metalness:.6}));y.position.set(.4,1.4,t/2+.15),r.add(f,y);let _=Oe(16773572,{emissive:16762992,emissiveIntensity:.35}),m=Oe(s),d=(x,M,S)=>{let w=new yt,g=new F(new dt(1.1,1.1,.1),_),A=new F(new dt(1.3,.12,.14),m),E=new F(new dt(.12,1.3,.14),m),T=new F(new dt(1.4,.15,.4),m);T.position.y=-.65,w.add(g,A,E,T),w.position.set(x,2.6,M),w.rotation.y=S,r.add(w)};d(-i/2+1.4,t/2+.05,0),d(i/2-1.4,t/2+.05,0),d(i/2+.05,0,Math.PI/2),d(-i/2-.05,0,-Math.PI/2);let v=new F(new dt(1.2,.35,.35),Oe(9067067));v.position.set(-i/2+1.4,1.95,t/2+.3),r.add(v);for(let x=0;x<3;x++){let M=new F(new Pn(.16,0),Oe([16752575,16766044,16774384][x]));M.position.set(-i/2+1+x*.4,2.25,t/2+.3),r.add(M)}return r}function yf(i,t){let e=new yt,n=Ae.village,s=n.h,r=(C,H="house",R=11565653)=>{C.updateMatrixWorld(!0),i.push({box:new he().setFromObject(C),color:R,kind:H})},o=[[-19,-10,Math.PI/2,8,7,16050904,14246986,9067067],[0,-20,0,9,7,15393778,4165532,7030320],[19,-11,-Math.PI/2,8,7,16181192,5929156,9067067],[-19,11,Math.PI/2,7,6,15331812,14721340,7030320],[20,12,-Math.PI/2,8,6.5,16050904,10117040,9067067]];for(let[C,H,R,I,D,z,N,B]of o){let G=Jo({w:I,d:D,wall:z,roof:N,trim:B});G.position.set(n.x+C,s,n.z+H),G.rotation.y=R,e.add(G);let X=new F(new dt(I+.4,7,D+.4));X.position.set(n.x+C,s+3.5,n.z+H),X.rotation.y=R,r(X,"house",N)}let a=new yt,c=Oe(12432806),h=si(new F(new Pt(1.6,1.7,1.1,12,1,!0),c));h.material.side=le,h.position.y=.55;let l=si(new F(new Jn(1.6,.2,6,16),c));l.rotation.x=Math.PI/2,l.position.y=1.1;let u=new F(new je(1.5,16),Oe(3899328,{roughness:.2}));u.rotation.x=-Math.PI/2,u.position.y=.5,a.add(h,l,u);let p=Oe(9067067);for(let C of[-1,1]){let H=si(new F(new dt(.25,3.2,.25),p));H.position.set(C*1.5,1.6,0),a.add(H)}let f=xf(2.6,2.2,1.1,Oe(14246986));f.position.y=3.1,f.rotation.y=Math.PI/2;let y=new F(new Pt(.3,.25,.45,8),p);y.position.set(0,2.2,0),a.add(f,y),a.position.set(n.x,s,n.z),e.add(a),i.push({box:new he(new O(n.x-1.8,s,n.z-1.8),new O(n.x+1.8,s+4,n.z+1.8)),cyl:{x:n.x,z:n.z,r:1.8},color:12432806,kind:"house"});let _=(C,H,R,I)=>{let D=new yt,z=si(new F(new dt(4,1.1,1.6),p));z.position.y=.55,D.add(z);for(let G of[-1,1])for(let X of[-1,1]){let nt=new F(new dt(.18,3,.18),p);nt.position.set(G*1.9,1.5,X*.9-.3),D.add(nt)}for(let G=0;G<6;G++){let X=new F(new dt(.7333333333333334,.12,2.6),Oe(G%2?16777215:I));X.position.set(-2.2+4.4/12+G*4.4/6,3.05,-.3),X.rotation.x=.25,X.castShadow=!0,D.add(X)}let N=[16739162,16766044,9426027,16753212,10471144];for(let G=0;G<7;G++){let X=new F(new Pn(.22,0),Oe(N[G%N.length]));X.position.set(-1.5+G*.5,1.28,G%2*.35-.15),D.add(X)}D.position.set(C,s,H),D.rotation.y=R,e.add(D);let B=new F(new dt(4,2,1.6));B.position.set(C,s+1,H),B.rotation.y=R,r(B,"house",I)};_(n.x+8,n.z+7,-Math.PI/2,2864544),_(n.x-8,n.z+7,Math.PI/2,14698330);let m=Oe(10119748),d=Oe(12884588),v=[["barrel",5,-14],["barrel",6.2,-13.2],["crate",-5,-14],["crate",-5,-12.7,1.1],["barrel",13,3],["crate",-13,-3],["barrel",-14,20],["crate",14,21]];for(let[C,H,R,I=0]of v){let D=si(C==="barrel"?new F(new Pt(.55,.55,1.2,10),m):new F(new dt(1.1,1.1,1.1),d));D.position.set(n.x+H,s+.6+I,n.z+R),D.rotation.y=H,e.add(D),I||i.push({box:new he(new O(n.x+H-.6,s,n.z+R-.6),new O(n.x+H+.6,s+1.2,n.z+R+.6)),cyl:{x:n.x+H,z:n.z+R,r:.6},color:10119748,kind:"prop"})}let x=Oe(16770728,{emissive:16762992,emissiveIntensity:1.2}),M=[[-9,-6],[9,-6],[-9,16],[9,16],[3,26]];for(let[C,H]of M){let R=n.x+C,I=n.z+H,D=si(new F(new Pt(.12,.16,4,6),Oe(4869737)));D.position.set(R,s+2,I);let z=new F(new rn(.35,0),x);z.position.set(R,s+4.2,I),e.add(D,z),i.push({box:new he(new O(R-.2,s,I-.2),new O(R+.2,s+4,I+.2)),cyl:{x:R,z:I,r:.2},color:4869737,kind:"prop"})}let S=new yt;for(let C of[-1,1]){let H=si(new F(new dt(.25,3.2,.25),p));H.position.set(C*1.8,1.6,0),S.add(H)}let w=(()=>{let C=document.createElement("canvas");C.width=256,C.height=96;let H=C.getContext("2d");H.fillStyle="#c49a6c",H.fillRect(0,0,256,96),H.fillStyle="#5a3a24",H.font='bold 40px "M PLUS Rounded 1c", sans-serif',H.textAlign="center",H.textBaseline="middle",H.fillText("\u30B7\u30AA\u30AB\u30BC\u6751",128,50);let R=new Ei(C);return R.colorSpace=Ne,R})(),g=new F(new dt(4,1.4,.2),[p,p,p,p,new bt({map:w}),new bt({map:w})]);g.position.y=2.6,S.add(g),S.position.set(n.x-22,t(n.x-22,n.z-10),n.z-10),S.rotation.y=Math.atan2(-(n.x-22),-(n.z-10)),e.add(S);let A=n.x+12,E=n.z+40;for(;E<n.z+400&&t(A,E)>.9;)E+=1;let T=E<n.z+400,b=new yt;if(T){E-=4;let C=28,H=1.4,R=Oe(11897438);for(let N=0;N<C/1.2;N++){let B=si(new F(new dt(4,.25,1.1),R));B.position.set(A+(Math.random()-.5)*.1,H-.12,E+N*1.2+.6),e.add(B)}for(let N=0;N<=C;N+=4)for(let B of[-1,1]){let G=si(new F(new Pt(.2,.2,5,6),Oe(8015414)));G.position.set(A+B*1.9,H-2,E+N),e.add(G)}i.push({box:new he(new O(A-2,H-.5,E),new O(A+2,H,E+C)),color:11897438,kind:"pier"});let I=new Bs;I.moveTo(-1.3,.8),I.lineTo(1.3,.8),I.lineTo(.9,0),I.lineTo(-.9,0),I.lineTo(-1.3,.8);let D=si(new F(new hr(I,{depth:5,bevelEnabled:!1}),Oe(14246986)));D.position.z=-2.5;let z=new F(new dt(2.4,.15,.6),Oe(16050904));z.position.y=.6,b.add(D,z),b.position.set(A+4.2,Kn-.3,E+C-5),e.add(b)}return{group:e,update(C){b.position.y=Kn-.3+Math.sin(C*1.3)*.15,b.rotation.z=Math.sin(C*1.1)*.05}}}var Sn=ks,gs=0,co={greatTree:{name:"\u5343\u5E74\u6A39",x:Sn,z:gs,r:22,h:8},mushroom:{name:"\u30AD\u30CE\u30B3\u306E\u8C37",x:Sn+133,z:gs+152,r:30},spring:{name:"\u5996\u7CBE\u306E\u6CC9",x:Sn-150,z:gs-170,r:14,h:5},cabin:{name:"\u6728\u3053\u308A\u306E\u5C0F\u5C4B",x:Sn+170,z:gs-140,r:16,h:6}},tn=co.greatTree,In=co.mushroom,gn=co.spring,we=co.cabin,_f=[[[Sn-420,ke.east],[Sn-200,ke.east-2],[Sn-60,5],[tn.x-22,tn.z]],[[Sn-60,5],[Sn+40,80],[In.x-20,In.z-14]],[[Sn-200,ke.east-2],[Sn-180,-90],[gn.x-4,gn.z+16]],[[Sn-60,5],[Sn+60,-70],[we.x-16,we.z+4]]],qi={sand:new j("#e6d3a0"),sandDeep:new j("#c4ad7c"),moss:new j("#5f9a4a"),dark:new j("#3f7a3c"),clearing:new j("#86c263"),valley:new j("#6f8a6a"),path:new j("#a8845a"),rock:new j("#7f7f72")},Ef={id:"forest",name:"\u6DF1\u7DD1\u306E\u68EE",cx:Sn,cz:gs,edge:Vn(420,[26,1.2,16,.3,10,2.4]),maxR:480,places:co,paths:_f,sanctuaries:[],land(i,t){let e=4+Wt(i/35,t/35)*6+Wt(i/140,t/140+9)*10;e+=ms(i,t,Sn+174,gs-63,82,8),e+=ms(i,t,Sn-60,gs+200,90,9),e+=ms(i,t,Sn-230,gs+90,70,7);for(let n of[tn,gn,we])e=ee(e,n.h,wt(n.r+16,n.r,Math.hypot(i-n.x,t-n.z)));return e=ee(e,3,wt(In.r+16,In.r-4,Math.hypot(i-In.x,t-In.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(qi.sandDeep).lerp(qi.sand,wt(-2,1.2,e));let r=Wt(i/8,t/8);s.copy(qi.dark).lerp(qi.moss,r),s.lerp(qi.sand,wt(2.4,1.7,e)),s.lerp(qi.clearing,wt(tn.r+6,tn.r-6,Math.hypot(i-tn.x,t-tn.z))*.8),s.lerp(qi.clearing,wt(gn.r+6,gn.r-2,Math.hypot(i-gn.x,t-gn.z))*.7),s.lerp(qi.valley,wt(In.r+8,In.r-6,Math.hypot(i-In.x,t-In.z)));let o=Re(i,t,_f);return o<2.4&&s.lerp(qi.path,wt(2.4,1.4,o)),n>.75&&s.lerp(qi.rock,wt(.75,1.1,n)),s},nature:{trees:{style:"round",count:1250,leafColors:[4160060,3107642,5214021,5937744],trunkColor:7030320},palms:30,rocks:130,rockColor:8355698,grass:{count:9500,color:5214015},flowers:{count:2500,colors:[13625599,16777215,10473727]},avoid:Object.values(co).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E2\u30EA\u30C0\u30DE",tint:5214042,mult:1.6,count:34},ishimori:{name:"\u30B3\u30B1\u30A4\u30EF",tint:7307098,mult:1.6,count:11}},decorate(i,t,e){let n=new yt,s=on(n,i),r=tn.h,o=ht(7031347,{roughness:1}),a=pt(new F(new Pt(3.6,6.5,34,10),o));a.position.set(tn.x,r+17,tn.z),n.add(a),s.cyl(6,40,tn.x,r-1,tn.z,null,7031347);for(let z=0;z<7;z++){let N=z/7*Math.PI*2+.3,B=pt(new F(new Yt(1.6,9,6),o));B.position.set(tn.x+Math.cos(N)*7,r+1,tn.z+Math.sin(N)*7),B.rotation.set(Math.sin(N)*1.2,0,-Math.cos(N)*1.2),n.add(B)}let c=[ht(4164165),ht(5216842),ht(3111488)];for(let z=0;z<12;z++){let N=e()*Math.PI*2,B=z<3?0:6+e()*10,G=9+e()*6,X=pt(new F(new Pn(1,0),c[z%3]));X.scale.setScalar(G),X.position.set(tn.x+Math.cos(N)*B,r+32+e()*12-B*.3,tn.z+Math.sin(N)*B),X.rotation.set(e()*3,e()*3,0),n.add(X)}let h=ht(13616822),l=pt(new F(new dt(2.4,1.2,1.6),h));l.position.set(tn.x-9,r+.6,tn.z),l.rotation.y=Math.PI/2,n.add(l),s.cyl(1.4,1.2,tn.x-9,r,tn.z,null,13616822);let u=new F(new te(.4,12,8),new bt({color:13172656,emissive:9429104,emissiveIntensity:1.3}));u.position.set(tn.x-9,r+1.7,tn.z),n.add(u);let p=[new bt({color:10483434,emissive:4183744,emissiveIntensity:.9,flatShading:!0}),new bt({color:16759008,emissive:13656232,emissiveIntensity:.8,flatShading:!0}),new bt({color:16773544,emissive:14725184,emissiveIntensity:.7,flatShading:!0})],f=ht(15919832);for(let z=0;z<32;z++){let N=e()*Math.PI*2,B=e()*(In.r+6),G=In.x+Math.cos(N)*B,X=In.z+Math.sin(N)*B,nt=t(G,X),q=.8+e()*2.8,Q=pt(new F(new Pt(.25*q,.35*q,2*q,8),f));Q.position.set(G,nt+q,X);let ut=pt(new F(new te(1.1*q,12,6,0,Math.PI*2,0,Math.PI/2),p[z%3]));ut.scale.y=.7,ut.position.set(G,nt+2*q-.1,X),n.add(Q,ut),q>1.4&&s.cyl(.35*q,2*q+.6,G,nt-.5,X,null,p[z%3].color.getHex())}let y=new qe(8384736,60,45);y.position.set(In.x,t(In.x,In.z)+5,In.z),n.add(y);let _=new F(new je(8,28),new bt({color:10483434,emissive:4175552,emissiveIntensity:.6,transparent:!0,opacity:.85,roughness:.1}));_.rotation.x=-Math.PI/2,_.position.set(gn.x,gn.h+.25,gn.z),n.add(_);let m=ht(13616822);for(let z=0;z<14;z++){let N=z/14*Math.PI*2,B=.7+e()*.5,G=pt(new F(new Zn(B,0),m));G.position.set(gn.x+Math.cos(N)*8.8,gn.h+B*.4,gn.z+Math.sin(N)*8.8),n.add(G)}let d=40,v=new Float32Array(d*3),x=new ae;x.setAttribute("position",new pe(v,3));let M=new Ke(x,new Xe({color:16771327,size:.45,transparent:!0,opacity:.9,depthWrite:!1}));M.frustumCulled=!1,n.add(M);let S=new qe(12124144,25,20);S.position.set(gn.x,gn.h+2,gn.z),n.add(S);let w=Jo({w:8,d:6.5,wall:10119748,roof:5929540,trim:5913124});w.position.set(we.x,we.h,we.z),w.rotation.y=-Math.PI/2,n.add(w);let g=new F(new dt(8.4,7,6.9));g.position.set(we.x,we.h+3.5,we.z),g.rotation.y=-Math.PI/2,g.updateMatrixWorld(!0),i.push({box:new he().setFromObject(g),color:5929540,kind:"house"});let A=ht(9067067);for(let z=0;z<3;z++)for(let N=0;N<4-z;N++){let B=pt(new F(new Pt(.4,.4,3.2,8),A));B.rotation.x=Math.PI/2,B.position.set(we.x-8+N*.85+z*.42,we.h+.4+z*.72,we.z+7),n.add(B)}i.push({box:new he(new O(we.x-8.5,we.h-.5,we.z+5.3),new O(we.x-4.9,we.h+2,we.z+8.7)),color:9067067,kind:"prop"});let E=pt(new F(new Pt(.8,.95,.9,10),A));E.position.set(we.x-7,we.h+.45,we.z-5);let T=new F(new Pt(.07,.07,1.4,6),ht(7030320));T.position.set(we.x-7,we.h+1.4,we.z-5),T.rotation.z=.4;let b=new F(new dt(.5,.35,.08),ht(12634320,{metalness:.6}));b.position.set(we.x-6.8,we.h+1,we.z-5),n.add(E,T,b),s.cyl(.95,.9,we.x-7,we.h-.2,we.z-5,null,9067067);let C=180,H=new Float32Array(C*3),R=[];for(let z=0;z<C;z++){let N=e()*Math.PI*2,B=8+e()*60,G=Sn+Math.cos(N)*B,X=gs+Math.sin(N)*B;R.push({x:G,z:X,y:t(G,X)+1+e()*4,p:e()*10})}let I=new ae;I.setAttribute("position",new pe(H,3));let D=new Ke(I,new Xe({color:14679946,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return D.frustumCulled=!1,n.add(D),{group:n,update(z,N){u.position.y=r+1.7+Math.sin(N*2)*.15;for(let B=0;B<C;B++){let G=R[B];H[B*3]=G.x+Math.sin(N*.7+G.p)*1.5,H[B*3+1]=G.y+Math.sin(N*1.3+G.p*2)*.8,H[B*3+2]=G.z+Math.cos(N*.6+G.p)*1.5}I.attributes.position.needsUpdate=!0,D.material.opacity=.6+Math.sin(N*3)*.3;for(let B=0;B<d;B++){let G=N*.6+B/d*Math.PI*2,X=3+B%5*1.1;v[B*3]=gn.x+Math.cos(G*(1+B%3*.2))*X,v[B*3+1]=gn.h+1+Math.sin(N*2+B)*.8+B%4*.6,v[B*3+2]=gn.z+Math.sin(G*(1+B%3*.2))*X}x.attributes.position.needsUpdate=!0,_.material.emissiveIntensity=.5+Math.sin(N*1.5)*.2}}}};var Pc=(i,t,e=6)=>new Pt(i,t,1,e).translate(0,.5,0),ri={trunk:Pc(.45,.7),pineTrunk:Pc(.35,.5),cone:new Yt(1,1,7).translate(0,.5,0),blob:new Pn(1,0),cactus:Pc(.5,.55,8),cactusTop:new te(.5,8,5,0,Math.PI*2,0,Math.PI/2),branch:Pc(.12,.22,5),rock:new Zn(1,0),blade:new Yt(.18,.9,3),flower:new Pn(.22,0),palmSeg:new Pt(.3,.36,1.25,6),frond:new Yt(.9,4.2,3,1,!0).translate(0,2.1,0),nut:new te(.28,6,5)};function Uh(i){let t=an(ri.palmSeg,ht(11108954),i*6),e=an(ri.frond,ht(5221973,{side:le}),i*7),n=an(ri.nut,ht(7030320),i*3);return{add(s,r,o,a,c,h){let l=[],u=new ft(a,c).normalize().multiplyScalar(.35+h()*.3),p=new O;for(let f=0;f<6;f++){let y=f/6,_=s+u.x*y*y*4,m=r+f*1.15+.6,d=o+u.y*y*y*4;l.push({mesh:t.mesh,index:t.add(_,m,d,1-f*.05,1,1-f*.05,u.y*y*.6,0,-u.x*y*.6)}),p.set(_,m+.7,d)}for(let f=0;f<7;f++)l.push({mesh:e.mesh,index:e.add(p.x,p.y,p.z,1,1,.25,0,f/7*Math.PI*2,1.15+h()*.25,null,"YXZ")});for(let f=0;f<3;f++)l.push({mesh:n.mesh,index:n.add(p.x+Math.cos(f*2.1)*.4,p.y-.4,p.z+Math.sin(f*2.1)*.4)});return l},finish(s){s.add(t.finish(),e.finish(),n.finish())}}}function Mf(i,t,e,n,s,r=()=>1,o=1){let a=i.nature,c=[],h=(x,M)=>s()<r(x,M),l=new yt,u=i.maxR,p=a.avoid||[],f=()=>[i.cx+(s()-.5)*2*u,i.cz+(s()-.5)*2*u],y=(x,M,S)=>p.some(([w,g,A])=>Math.hypot(x-w,M-g)<A+S),_=(x,M,S,w,g,A,E)=>{let T={box:new he(new O(x-S,w,M-S),new O(x+S,w+g,M+S)),cyl:{x,z:M,r:S},color:A,kind:E};return t.push(T),T},m=(x,M,S,w,g,A)=>{c.push({x,z:M,y:S,h:w,region:i,parts:g.filter(E=>E.index>=0),collider:A})},d=a.trees;if(d&&d.count){let x=d.count,M=ht(d.trunkColor??9067067,{roughness:1}),S=(d.leafColors||[5216842]).map(T=>ht(T)),w=S.map(T=>an(d.style==="pine"?ri.cone:ri.blob,T,x*3)),g=an(d.style==="pine"?ri.pineTrunk:d.style==="cactus"?ri.cactus:ri.trunk,d.style==="cactus"?S[0]:M,x*(d.style==="cactus"?3:1)),A=d.style==="cactus"?an(ri.cactusTop,S[0],x*3):d.style==="dead"?an(ri.branch,M,x*3):d.snowy?an(ri.cone,ht(16054523),x*3):null,E=0;for(let T=0;E<x&&T<x*40;T++){let[b,C]=f(),H=e(b,C);if(H<(d.minH??2.6)||H>(d.maxH??999)||n(b,C)>(d.maxSlope??.45)||y(b,C,4)||Re(b,C,i.paths)<4||d.avoidRiver&&oo(b,C,d.avoidRiver)<10||!h(b,C))continue;E++;let R=d.accentChance&&s()<d.accentChance?S.length-1:Math.floor(s()*(S.length-(d.accentChance?1:0))),I,D=[],z=(B,...G)=>D.push({mesh:B.mesh,index:B.add(...G)}),N;if(d.style==="round"){I=4+s()*3,z(g,b,H-.3,C,1,I,1);let B=2+Math.floor(s()*2);for(let G=0;G<B;G++){let X=2.4+s()*1.4-G*.4;z(w[R],b+(s()-.5)*1.5,H+I+G*1.8,C+(s()-.5)*1.5,X,X,X,s()*3,s()*3,s()*3)}N=_(b,C,.7,H-1,I+3,S[R].color.getHex(),"tree")}else if(d.style==="pine"){I=7+s()*5,z(g,b,H-.3,C,1,2.2,1);for(let B=0;B<3;B++){let G=(2.6-B*.7)*(I/10),X=I*.42,nt=H+1.6+B*I*.26;z(w[R],b,nt,C,G,X,G,0,s()*3,0),A&&z(A,b,nt+X*.55,C,G*.55,X*.45,G*.55,0,s()*3,0)}N=_(b,C,.6,H-1,I+2,S[R].color.getHex(),"tree")}else if(d.style==="cactus"){I=2.5+s()*2.2,z(g,b,H-.2,C,1,I,1),z(A,b,H-.2+I,C);let B=1+Math.floor(s()*2);for(let G=0;G<B;G++){let X=s()*Math.PI*2+G*Math.PI,nt=b+Math.cos(X)*.9,q=C+Math.sin(X)*.9,Q=H+I*(.35+s()*.25),ut=1+s()*1.2;z(g,nt,Q,q,.6,ut,.6),z(A,nt,Q+ut,q,.6,.6,.6)}N=_(b,C,.8,H-1,I+1,S[0].color.getHex(),"tree")}else if(d.style==="dead"){I=4+s()*3,z(g,b,H-.3,C,.8,I,.8);for(let B=0;B<2;B++){let G=s()*Math.PI*2;z(A,b,H+I*(.5+B*.2),C,1,1.6+s()*1.5,1,Math.cos(G)*.9,0,Math.sin(G)*.9)}N=_(b,C,.5,H-1,I+1,3813424,"tree")}m(b,C,H,I,D,N)}l.add(g.finish()),w.forEach(T=>l.add(T.finish())),A&&l.add(A.finish())}if(a.palms){let x=Uh(a.palms),M=0;for(let S=0;M<a.palms&&S<a.palms*300;S++){let[w,g]=f(),A=e(w,g);if(A<1||A>2.6||y(w,g,2)||Re(w,g,i.paths)<5||!h(w,g))continue;M++;let E=e(w-3,g)-e(w+3,g),T=e(w,g-3)-e(w,g+3),b=x.add(w,A-.2,g,E||1,T,s);m(w,g,A,7,b,_(w,g,.45,A-1,7,5221973,"tree"))}x.finish(l)}if(a.rocks){let x=an(ri.rock,ht(a.rockColor??10327971),a.rocks),M=0;for(let S=0;M<a.rocks&&S<a.rocks*80;S++){let[w,g]=f(),A=e(w,g);if(A<.3||y(w,g,3)||Re(w,g,i.paths)<3||n(w,g)<.35&&s()>.35||!h(w,g))continue;M++;let E=.8+s()*1.8;x.add(w,A+E*.3,g,E*1.3,E,E*1.1,s(),s()*3,s()),_(w,g,E*1.1,A-.5,E*1.3,a.rockColor??10327971,"rock")}l.add(x.finish())}let v=(x,M,S,w,g)=>{let A=an(x,M,S);A.mesh.castShadow=!1;let E=0,T=g?.map(b=>new j(b));for(let b=0;E<S&&b<S*20;b++){let[C,H]=f(),R=e(C,H);if(R<2.2||n(C,H)>.5||Re(C,H,i.paths)<2.5||y(C,H,-2)||!h(C,H))continue;let I=.7+s()*.6;A.add(C,R+w,H,I,I,I,0,s()*3,(s()-.5)*.4,T?T[Math.floor(s()*T.length)]:null),E++}l.add(A.finish())};return a.grass?.count&&v(ri.blade,ht(a.grass.color,{flatShading:!1}),Math.round(a.grass.count*o),.35),a.flowers?.count&&v(ri.flower,ht(16777215),Math.round(a.flowers.count*o),.3,a.flowers.colors),{group:l,trees:c}}var zi=0,xn=ks,lo={oasis:{name:"\u98A8\u5F85\u3061\u306E\u30AA\u30A2\u30B7\u30B9",x:zi+95,z:xn+47,r:20},temple:{name:"\u7802\u306E\u795E\u6BBF",x:zi-114,z:xn-63,r:16,h:5},arch:{name:"\u5CA9\u306E\u30A2\u30FC\u30C1",x:zi+40,z:xn-190,r:14},camp:{name:"\u968A\u5546\u306E\u91CE\u55B6\u5730",x:zi-170,z:xn+130,r:16,h:4}},Ln=lo.oasis,Ye=lo.temple,Ui=lo.arch,Rn=lo.camp,zh=[[zi+133,xn-152,22,17],[zi-164,xn+133-60,24,14],[zi+183,xn+196,18,22],[zi-38,xn+247,15,12],[zi+260,xn+40,20,16],[zi-250,xn-40,18,15]],vf=[[[ke.south,xn-420],[ke.south,xn-250],[-60,xn-120],[Ye.x+8,Ye.z-14]],[[-60,xn-120],[20,xn-20],[Ln.x-22,Ln.z-10]],[[ke.south,xn-250],[Ui.x-10,Ui.z-20],[Ui.x,Ui.z+20]],[[-60,xn-120],[-130,xn+40],[Rn.x+10,Rn.z-14]]],Yi={sand:new j("#ecd08e"),sandShade:new j("#d9b872"),sandDeep:new j("#c9a96c"),red1:new j("#c4704a"),red2:new j("#a85a3c"),red3:new j("#d99a6c"),green:new j("#7cbf5a"),path:new j("#c09058"),stone:new j("#d8c7a0")},wf={id:"desert",name:"\u967D\u708E\u306E\u7802\u6F20",cx:zi,cz:xn,edge:Vn(420,[24,2.1,18,.8,10,1.5]),maxR:480,places:lo,paths:vf,sanctuaries:[],land(i,t){let e=Wt(i/60,t/60),n=3+(Math.sin(i*.07+t*.02+e*6)*.5+.5)*3.2+Wt(i/25,t/25)*2+Wt(i/160,t/160+4)*8;for(let[s,r,o,a]of zh)n=ee(n,a+6+(Wt(i/10,t/10)-.5),wt(o+5,o,Math.hypot(i-s,t-r)));for(let s of[Ye,Rn])n=ee(n,s.h,wt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return n=ee(n,-2,wt(Ln.r+10,Ln.r-5,Math.hypot(i-Ln.x,t-Ln.z))),n},color(i,t,e,n,s){if(e<1.7)return s.copy(Yi.sandDeep).lerp(Yi.sand,wt(-2,1.2,e));if(s.copy(Yi.sandShade).lerp(Yi.sand,Wt(i/14,t/14)),s.offsetHSL(0,0,Math.sin(i*.9+t*.35+Wt(i/5,t/5)*4)*.015),e>15||n>.7){let a=Math.floor(e/2.2)%3;s.copy(a===0?Yi.red1:a===1?Yi.red2:Yi.red3)}let r=Math.hypot(i-Ln.x,t-Ln.z);r<Ln.r+9&&s.lerp(Yi.green,wt(Ln.r+9,Ln.r+3,r)),Math.hypot(i-Ye.x,t-Ye.z)<Ye.r-2&&s.lerp(Yi.stone,.6);let o=Re(i,t,vf);return o<2.4&&s.lerp(Yi.path,wt(2.4,1.4,o)*.7),s},nature:{trees:{style:"cactus",count:350,leafColors:[6266709],minH:2.4,maxSlope:.4},rocks:210,rockColor:13208164,grass:{count:4200,color:13218666},avoid:[...Object.values(lo).map(i=>[i.x,i.z,i.r+6]),...zh.map(([i,t,e])=>[i,t,e+6])]},enemies:{kumodama:{name:"\u30B9\u30CA\u30C0\u30DE",tint:13214827,mult:2.2,count:34},ishimori:{name:"\u30B9\u30CA\u30E2\u30EA",tint:11565653,mult:2.2,count:11}},decorate(i,t,e){let n=new yt,s=on(n,i),r=ht(14733222),o=ht(12890250),a=Ye.h,c=pt(new F(new dt(22,.8,18),o));c.position.set(Ye.x,a-.1,Ye.z),n.add(c),i.push({box:new he().setFromObject(c),color:12890250,kind:"part"});let h=[8,8,3,8,5,8,8,2.5,8,6];for(let C=0;C<10;C++){let H=C<5?-1:1,R=Ye.x-8+C%5*4,I=Ye.z+H*7,D=h[C];if(s.cyl(.9,D,R,a+.3,I,r,14733222,"part",8),D>=8){let z=pt(new F(new dt(2.2,.6,2.2),o));z.position.set(R,a+.3+D+.3,I),n.add(z)}}let l=pt(new F(new dt(13,.9,2.2),o));l.position.set(Ye.x-2,a+9.3,Ye.z-7),n.add(l),s.box(18,9,1.6,Ye.x,a+.3,Ye.z-11,r,14733222);let u=new F(new dt(4.5,6,.3),ht(9071172));u.position.set(Ye.x,a+3.3,Ye.z-10.1),n.add(u);let p=new F(new je(1.2,12),new bt({color:16766826,emissive:14721072,emissiveIntensity:.8}));p.position.set(Ye.x,a+7.2,Ye.z-10.15),n.add(p);let f=pt(new F(new dt(4,4.5,4),r));f.position.set(Ye.x+13,a+1.2,Ye.z+2),f.rotation.set(.15,-.5,.1),n.add(f),s.cyl(2.8,4,Ye.x+13,a-.5,Ye.z+2,null,14733222);let y=new bt({color:10483434,emissive:4183744,emissiveIntensity:1});for(let C of[-1,1]){let H=new F(new dt(.8,.3,.1),y);H.position.set(C*.9,.6,2.02),f.add(H)}let _=Uh(18);for(let C=0;C<18;C++){let H=C/18*Math.PI*2+e()*.3,R=Ln.r+3+e()*6,I=Ln.x+Math.cos(H)*R,D=Ln.z+Math.sin(H)*R,z=t(I,D);z<.6||(_.add(I,z-.2,D,-Math.cos(H),-Math.sin(H),e),s.cyl(.45,7,I,z-1,D,null,5221973,"tree"))}_.finish(n);let m=ht(7315274);for(let C=0;C<70;C++){let H=e()*Math.PI*2,R=Ln.r-2+e()*4,I=Ln.x+Math.cos(H)*R,D=Ln.z+Math.sin(H)*R,z=new F(new Yt(.08,1.8,3),m);z.position.set(I,Math.max(t(I,D),0)+.8,D),z.rotation.z=(e()-.5)*.3,n.add(z)}let d=ht(12873802),v=t(Ui.x,Ui.z);for(let C of[-1,1]){let H=Ui.x+C*7,R=pt(new F(new Pt(2.2,3,12,7),d));R.position.set(H,v+5.5,Ui.z),n.add(R),s.cyl(2.6,12,H,v-1,Ui.z,null,12873802)}let x=pt(new F(new Jn(7,2.2,7,14,Math.PI),ht(11558972)));x.position.set(Ui.x,v+10.5,Ui.z),n.add(x);let M=Rn.h,S=[14246986,2864544,16040539];for(let C=0;C<3;C++){let H=C/3*Math.PI*2+.4,R=Rn.x+Math.cos(H)*8,I=Rn.z+Math.sin(H)*8,D=pt(new F(new Yt(3.4,4.5,6),ht(S[C])));D.position.set(R,M+2.25,I);let z=new F(new wn(1.4,2.2),ht(5913124,{side:le})),N=Math.atan2(Rn.x-R,Rn.z-I);z.position.set(R+Math.sin(N)*2.1,M+1.1,I+Math.cos(N)*2.1),z.rotation.y=N,n.add(D,z),s.cyl(3,4.5,R,M-.5,I,null,S[C],"house")}let w=ht(7030320);for(let C=0;C<4;C++){let H=pt(new F(new Pt(.15,.15,1.8,6),w));H.position.set(Rn.x,M+.25,Rn.z),H.rotation.set(Math.PI/2-.3,C/4*Math.PI,0),n.add(H)}let g=new F(new Yt(.6,1.6,6),new Ee({color:16752704,transparent:!0,opacity:.9}));g.position.set(Rn.x,M+.9,Rn.z);let A=new qe(16751168,30,18);A.position.set(Rn.x,M+1.5,Rn.z),n.add(g,A);let E=ht(12884588);for(let[C,H]of[[4,-3],[4.9,-2.2],[-3,4]]){let R=pt(new F(new dt(1.1,1.1,1.1),E));R.position.set(Rn.x+C,M+.55,Rn.z+H),R.rotation.y=C,n.add(R)}let T=new F(new wn(3,2),ht(10117040));T.rotation.x=-Math.PI/2,T.position.set(Rn.x-3.5,M+.05,Rn.z-2),n.add(T);let b=[];for(let[C,H,R,I]of zh){let D=new F(new je(R*.5,16),new Ee({color:16773584,transparent:!0,opacity:.12,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.position.set(C,I+6.6,H),n.add(D),b.push(D)}return{group:n,update(C,H){b.forEach((R,I)=>{R.material.opacity=.08+Math.sin(H*2+I)*.05}),g.scale.set(1+Math.sin(H*13)*.1,1+Math.sin(H*9)*.18,1+Math.cos(H*11)*.1),A.intensity=26+Math.sin(H*15)*6}}}};var mr=0,jn=-ks,Zi={x:mr+47,z:jn-95,r:190,h:75},ho={shrine:{name:"\u6C37\u306E\u7960",x:mr-120,z:jn+25,r:12,h:12},pond:{name:"\u51CD\u3063\u305F\u6C60",x:mr+152,z:jn+114,r:20},summit:{name:"\u767D\u5DBA\u306E\u9802",x:Zi.x,z:Zi.z,r:10},hut:{name:"\u5C71\u5C0F\u5C4B",x:mr-5,z:jn+230,r:14,h:8},monument:{name:"\u96EA\u539F\u306E\u77F3\u7891",x:mr+230,z:jn-60,r:12,h:10}},dn=ho.shrine,Hn=ho.pond,Ge=ho.hut,$i=ho.monument,Ic=ke.north,Tf=[[[Ic,jn+420],[Ic,jn+250],[Hn.x-24,Hn.z+16]],[[Ic,jn+240],[Ge.x-10,Ge.z]],[[Ic,jn+250],[-60,jn+120],[dn.x+14,dn.z+4]],[[-60,jn+120],[0,jn+20],[Zi.x-8,Zi.z+20]],[[Hn.x-24,Hn.z+16],[200,jn+40],[$i.x-10,$i.z+12]]],xs={snow:new j("#f4f8fb"),snowShade:new j("#d8e5ef"),rock:new j("#8e96a3"),rockDark:new j("#6f7784"),beach:new j("#d9d4c8"),beachDeep:new j("#b9b4a8"),path:new j("#bccbd8"),stone:new j("#b9c3cf")},bf={id:"snow",name:"\u767D\u5DBA\u306E\u96EA\u539F",cx:mr,cz:jn,edge:Vn(420,[26,.4,16,2.8,12,1.1]),maxR:480,places:ho,paths:Tf,sanctuaries:[],land(i,t){let e=4+Wt(i/40,t/40)*6+Wt(i/150+3,t/150)*9,n=wt(Zi.r,0,Math.hypot(i-Zi.x,t-Zi.z));e+=Zi.h*n+(Wt(i/9,t/9)-.5)*4*n;for(let s of[dn,Ge,$i])e=ee(e,s.h,wt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=ee(e,-1.5,wt(Hn.r+22,Hn.r-3,Math.hypot(i-Hn.x,t-Hn.z))),e},color(i,t,e,n,s){if(e<1.5)return s.copy(xs.beachDeep).lerp(xs.beach,wt(-2,1.2,e));s.copy(xs.snowShade).lerp(xs.snow,Wt(i/10,t/10)),s.lerp(xs.beach,wt(2.2,1.5,e));let r=Re(i,t,Tf);return r<2.2&&s.lerp(xs.path,wt(2.2,1.2,r)),Math.hypot(i-dn.x,t-dn.z)<dn.r-3&&s.lerp(xs.stone,.7),n>.7&&s.lerp(Wt(i/4,t/4)>.5?xs.rock:xs.rockDark,wt(.7,1,n)),s},nature:{trees:{style:"pine",count:850,leafColors:[3104074,3828562,2641983],trunkColor:5914672,snowy:!0,maxH:55,maxSlope:.6},rocks:210,rockColor:9344675,avoid:Object.values(ho).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E6\u30AD\u30C0\u30DE",tint:13624565,mult:2.8,count:34},ishimori:{name:"\u30B3\u30AA\u30EA\u30E2\u30EA",tint:10467536,mult:2.8,count:11}},decorate(i,t,e){let n=new yt,s=on(n,i),r=new bt({color:12578559,emissive:5224160,emissiveIntensity:.6,flatShading:!0,transparent:!0,opacity:.85}),o=Hn.r+6,a=new F(new je(o,32),new bt({color:14217983,roughness:.1,metalness:.1,transparent:!0,opacity:.88}));a.rotation.x=-Math.PI/2,a.position.set(Hn.x,Kn+.12,Hn.z),a.receiveShadow=!0,n.add(a),i.push({box:new he(new O(Hn.x-o,-3,Hn.z-o),new O(Hn.x+o,Kn+.12,Hn.z+o)),cyl:{x:Hn.x,z:Hn.z,r:o},color:14217983,kind:"ice"});let c=dn.h,h=ht(12174287);s.cyl(5.5,.6,dn.x,c-.3,dn.z,h,12174287,"part",12);for(let z=0;z<4;z++){let N=Math.PI/4+z/4*Math.PI*2;s.cyl(.5,5,dn.x+Math.cos(N)*3.8,c+.3,dn.z+Math.sin(N)*3.8,h,12174287,"part",8)}let l=pt(new F(new Yt(5.8,3,4),ht(5929156)));l.position.set(dn.x,c+6.8,dn.z),l.rotation.y=Math.PI/4,n.add(l);let u=new F(new rn(1,0),r);u.scale.y=1.7,u.position.set(dn.x,c+2.8,dn.z),n.add(u);let p=new qe(10479871,30,25);p.position.set(dn.x,c+3,dn.z),n.add(p);let f=new Yt(.8,1,5),y=(z,N,B)=>{let G=t(z,N),X=new F(f,r);X.scale.set(B*.8,B*4,B*.8),X.position.set(z,G+B*2-.3,N),X.rotation.set((e()-.5)*.4,e()*3,(e()-.5)*.4),n.add(X),s.cyl(.7*B,B*4,z,G-.5,N,null,12578559)};for(let z=0;z<10;z++){let N=e()*Math.PI*2,B=dn.r+2+e()*8;y(dn.x+Math.cos(N)*B,dn.z+Math.sin(N)*B,.7+e()*1.1)}y(Zi.x,Zi.z-4,2.6);let _=Jo({w:8,d:6.5,wall:9067067,roof:16054523,trim:5913124});_.position.set(Ge.x,Ge.h,Ge.z),_.rotation.y=-Math.PI/2,n.add(_);let m=new F(new dt(8.4,7,6.9));m.position.set(Ge.x,Ge.h+3.5,Ge.z),m.rotation.y=-Math.PI/2,m.updateMatrixWorld(!0),i.push({box:new he().setFromObject(m),color:9067067,kind:"house"});let d=14,v=new Float32Array(d*3),x=new O(Ge.x+1.3,Ge.h+7.8,Ge.z+2);for(let z=0;z<d;z++)v[z*3]=x.x,v[z*3+1]=x.y+z/d*8,v[z*3+2]=x.z;let M=new ae;M.setAttribute("position",new pe(v,3));let S=new Ke(M,new Xe({color:14212580,size:1.1,transparent:!0,opacity:.28,depthWrite:!1}));S.frustumCulled=!1,n.add(S);let w=ht(16317437),g=pt(new F(new te(1,12,10),w));g.position.set(Ge.x-7,Ge.h+.9,Ge.z+5);let A=pt(new F(new te(.65,12,10),w));A.position.set(Ge.x-7,Ge.h+2.3,Ge.z+5);let E=new F(new Yt(.1,.5,6),ht(15764028));E.rotation.z=Math.PI/2,E.position.set(Ge.x-7.7,Ge.h+2.3,Ge.z+5),n.add(g,A,E),s.cyl(1,2.8,Ge.x-7,Ge.h-.5,Ge.z+5,null,16317437);let T=$i.h,b=pt(new F(new dt(3.2,7,1.2),ht(8357780)));b.position.set($i.x,T+3.3,$i.z),b.rotation.y=.4,n.add(b),s.cyl(2,7,$i.x,T-.5,$i.z,null,8357780);let C=new bt({color:12578559,emissive:5224160,emissiveIntensity:1.3});for(let z=0;z<5;z++){let N=new F(new dt(z%2?1.6:.9,.18,.05),C);N.position.set((z%2?0:.2)-.1,1.8-z*.7,.62),b.add(N)}for(let z=0;z<6;z++){let N=z/6*Math.PI*2,B=pt(new F(new Zn(.6,0),ht(9344675)));B.position.set($i.x+Math.cos(N)*4,T+.3,$i.z+Math.sin(N)*4),n.add(B)}let H=700,R=new Float32Array(H*3);for(let z=0;z<H;z++)R[z*3]=(e()-.5)*80,R[z*3+1]=e()*40,R[z*3+2]=(e()-.5)*80;let I=new ae;I.setAttribute("position",new pe(R,3));let D=new Ke(I,new Xe({color:16777215,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return D.frustumCulled=!1,n.add(D),{group:n,update(z,N,B){u.rotation.y+=z;for(let X=0;X<d;X++){let nt=v[X*3+1]+z*1.2;nt>x.y+8&&(nt=x.y),v[X*3+1]=nt;let q=nt-x.y;v[X*3]=x.x+Math.sin(N*.8+X)*(.3+q*.12)+q*.25,v[X*3+2]=x.z+Math.cos(N*.7+X*1.7)*q*.12}M.attributes.position.needsUpdate=!0;let G=B&&Math.hypot(B.x-mr,B.z-jn)<440;if(D.visible=!!G,!!G){D.position.set(B.x,B.y-5,B.z);for(let X=0;X<H;X++){let nt=R[X*3+1]-z*3;nt<0&&(nt+=40),R[X*3+1]=nt,R[X*3]+=Math.sin(N+X)*z*.5}I.attributes.position.needsUpdate=!0}}}}};var Le=-ks,wi=0,Ni={r:200,h:90,crater:22},jo={crater:{name:"\u7114\u306E\u706B\u53E3",x:Le,z:wi,r:22},obsidian:{name:"\u9ED2\u66DC\u306E\u539F",x:Le+133,z:wi+183,r:26,h:4},spring:{name:"\u6E6F\u3051\u3080\u308A\u306E\u6E29\u6CC9",x:Le+240,z:wi-120,r:12,h:4},forge:{name:"\u935B\u51B6\u5834\u306E\u8DE1",x:Le+232,z:wi+62,r:14,h:5}},Ji=jo.obsidian,be=jo.spring,Ce=jo.forge,Ko=ke.west,Sf=[[[Le+420,Ko],[Le+262,Ko+2],[Ce.x-2,Ce.z-16]],[[Le+262,Ko+2],[Le+205,120],[Ji.x+12,Ji.z-22]],[[Le+262,Ko+2],[Le+252,-90],[be.x,be.z+15]],[[Le+262,Ko+2],[Le+170,-70],[Le+70,-140],[Le-60,-130],[Le-120,-30],[Le-80,70],[Le+10,70],[Le+40,20],[Le+26,0]]],Rf=[2.2,3.4,4.6],ys={basalt:new j("#4a4550"),ash:new j("#6d6570"),rim:new j("#7a4a40"),sand:new j("#3d3a40"),sandDeep:new j("#2e2c32"),path:new j("#8a7a70"),obsidian:new j("#2e2a36"),scorch:new j("#5a3a34"),spring:new j("#8a8078")},Af={id:"volcano",name:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",cx:Le,cz:wi,edge:Vn(420,[20,2.6,18,1.9,10,.2]),maxR:480,places:jo,paths:Sf,sanctuaries:[],land(i,t){let e=3+Wt(i/30,t/30)*4+Wt(i/130,t/130+7)*6,n=Math.hypot(i-Le,t-wi);e+=Ni.h*wt(Ni.r,Ni.crater,n)+(Wt(i/10,t/10)-.5)*3*wt(Ni.r,40,n),e=ee(e,Ni.h-14,wt(Ni.crater,Ni.crater-8,n));for(let s of[Ji,be,Ce])e=ee(e,s.h,wt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=ee(e,be.h-1.2,wt(be.r-2,be.r-6,Math.hypot(i-be.x,t-be.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(ys.sandDeep).lerp(ys.sand,wt(-2,1.2,e));s.copy(ys.basalt).lerp(ys.ash,Wt(i/10,t/10));let r=Math.hypot(i-Le,t-wi);s.lerp(ys.rim,wt(90,30,r)*.8),s.lerp(ys.obsidian,wt(Ji.r+6,Ji.r-6,Math.hypot(i-Ji.x,t-Ji.z))),s.lerp(ys.spring,wt(be.r+4,be.r-2,Math.hypot(i-be.x,t-be.z))*.7);let o=Re(i,t,Sf);o<2.4&&s.lerp(ys.path,wt(2.4,1.4,o));let a=Math.atan2(t-wi,i-Le);for(let c of Rf){let h=Math.abs(Math.atan2(Math.sin(a-c),Math.cos(a-c)))*r;r>Ni.crater&&r<170&&h<5&&s.lerp(ys.scorch,wt(5,2.5,h))}return s},nature:{trees:{style:"dead",count:250,trunkColor:3813424,maxH:30,maxSlope:.5},rocks:350,rockColor:4867408,grass:{count:2100,color:9075280},avoid:Object.values(jo).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30D2\u30C0\u30DE",tint:14246986,mult:3.5,count:34},ishimori:{name:"\u30E8\u30A6\u30AC\u30F3\u30E2\u30EA",tint:5917256,mult:3.5,count:12}},decorate(i,t,e){let n=new yt,s=on(n,i),r=new kn({uniforms:{time:{value:0}},vertexShader:`
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
        }`}),o=Ni.h-13.2,a=new F(new je(Ni.crater-4,32),r);a.rotation.x=-Math.PI/2,a.position.set(Le,o,wi),n.add(a);let c=new qe(16742960,200,90);c.position.set(Le,o+6,wi),n.add(c);for(let N of Rf){let B=[],G=[],X=[];for(let Q=0;Q<=70;Q++){let ut=Ni.crater+1+Q*2.2,Tt=N+Math.sin(Q*.35+N*3)*.08,_t=2.2+Math.sin(Q*.5)*.7,kt=Le+Math.cos(Tt)*ut,qt=wi+Math.sin(Tt)*ut,St=-Math.sin(Tt),Ot=Math.cos(Tt);for(let V of[-1,1]){let at=kt+St*V*_t,tt=qt+Ot*V*_t;B.push(at,t(at,tt)+.15,tt),G.push(V<0?0:1,Q/6)}if(Q>0){let V=(Q-1)*2;X.push(V,V+1,V+2,V+1,V+3,V+2)}}let q=new ae;q.setAttribute("position",new me(B,3)),q.setAttribute("uv",new me(G,2)),q.setIndex(X),n.add(new F(q,r))}let h=new bt({color:1907494,roughness:.15,metalness:.4,flatShading:!0});for(let N=0;N<26;N++){let B=e()*Math.PI*2,G=e()*Ji.r,X=Ji.x+Math.cos(B)*G,nt=Ji.z+Math.sin(B)*G,q=t(X,nt),Q=.8+e()*1.8,ut=pt(new F(new Yt(.9*Q,4*Q,5),h));ut.position.set(X,q+1.6*Q,nt),ut.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5),n.add(ut),s.cyl(.8*Q,3.5*Q,X,q-.5,nt,null,1907494)}let l=document.createElement("canvas");l.width=l.height=64;let u=l.getContext("2d"),p=u.createRadialGradient(32,32,0,32,32,32);p.addColorStop(0,"rgba(255,255,255,1)"),p.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=p,u.fillRect(0,0,64,64);let f=new Ei(l),y=(N,B,G,X,nt)=>{let q=new Float32Array(N*3),Q=new Float32Array(N),ut=new ae;ut.setAttribute("position",new pe(q,3));let Tt=new Ke(ut,new Xe({color:X,size:G,map:f,transparent:!0,opacity:nt,depthWrite:!1}));return Tt.frustumCulled=!1,n.add(Tt),{pos:q,life:Q,geo:ut,count:N,spread:B}},_=y(110,22,14,9076872,.45),m=N=>{_.pos[N*3]=Le+(e()-.5)*_.spread,_.pos[N*3+1]=o+2,_.pos[N*3+2]=wi+(e()-.5)*_.spread,_.life[N]=0};for(let N=0;N<_.count;N++)m(N),_.life[N]=e()*8,_.pos[N*3+1]+=_.life[N]*6;let d=new F(new je(be.r-2.5,28),new bt({color:10479840,emissive:4171936,emissiveIntensity:.25,transparent:!0,opacity:.85,roughness:.15}));d.rotation.x=-Math.PI/2,d.position.set(be.x,be.h-.5,be.z),n.add(d);for(let N=0;N<16;N++){let B=N/16*Math.PI*2,G=.8+e()*.7,X=pt(new F(new Zn(G,0),ht(7169392)));X.position.set(be.x+Math.cos(B)*(be.r-1.5),be.h+G*.3,be.z+Math.sin(B)*(be.r-1.5)),n.add(X)}let v=y(50,be.r*1.2,4,16777215,.35),x=N=>{v.pos[N*3]=be.x+(e()-.5)*v.spread,v.pos[N*3+1]=be.h-.3,v.pos[N*3+2]=be.z+(e()-.5)*v.spread,v.life[N]=0};for(let N=0;N<v.count;N++)x(N),v.life[N]=e()*3,v.pos[N*3+1]+=v.life[N]*1.5;let M=ht(7030320),S=new yt,w=pt(new F(new dt(.2,2.2,.2),M));w.position.y=1.1;let g=new F(new dt(1.6,.8,.12),ht(12884588));g.position.y=2,S.add(w,g),S.position.set(be.x,be.h,be.z+be.r+2),n.add(S);let A=Ce.h,E=ht(7169392);s.box(12,3.5,1.2,Ce.x,A-.3,Ce.z-6,E,7169392),s.box(1.2,2.2,8,Ce.x-6,A-.3,Ce.z-1.6,E,7169392),s.box(1.2,1.2,5,Ce.x+6,A-.3,Ce.z-3,E,7169392),s.box(4,4.2,3,Ce.x+2,A-.3,Ce.z-3.8,ht(5917256),5917256);let T=new F(new wn(1.8,1.4),new Ee({color:16742960}));T.position.set(Ce.x+2,A+1.2,Ce.z-2.28),n.add(T);let b=pt(new F(new Pt(.8,1,5,8),ht(5917256)));b.position.set(Ce.x+2,A+6,Ce.z-4.2),n.add(b);let C=new qe(16747072,25,14);C.position.set(Ce.x+2,A+1.5,Ce.z-1),n.add(C);let H=ht(3816004,{metalness:.6,roughness:.4}),R=pt(new F(new dt(.8,.9,.6),H));R.position.set(Ce.x-2,A+.45,Ce.z+1);let I=pt(new F(new dt(1.8,.45,.7),H));I.position.set(Ce.x-2,A+1.1,Ce.z+1);let D=new F(new Yt(.3,.8,6),H);D.rotation.z=Math.PI/2,D.position.set(Ce.x-3.2,A+1.1,Ce.z+1),n.add(R,I,D),s.cyl(1,1.4,Ce.x-2,A-.3,Ce.z+1,null,3816004);let z=ht(12107976,{metalness:.6});for(let N=0;N<4;N++){let B=new F(new dt(.1,1.4,.3),z);B.position.set(Ce.x+4+N*.6,A+.6,Ce.z+3+N%2*.5),B.rotation.set(0,N,(e()-.5)*.5),n.add(B)}return{group:n,update(N,B){r.uniforms.time.value=B,c.intensity=190+Math.sin(B*3)*40,C.intensity=22+Math.sin(B*12)*5;for(let G=0;G<_.count;G++)_.life[G]+=N,_.pos[G*3+1]+=N*6,_.pos[G*3]+=N*2,_.life[G]>8&&m(G);_.geo.attributes.position.needsUpdate=!0;for(let G=0;G<v.count;G++)v.life[G]+=N,v.pos[G*3+1]+=N*1.5,v.pos[G*3]+=Math.sin(B+G)*N*.3,v.life[G]>3&&x(G);v.geo.attributes.position.needsUpdate=!0}}}};var Vs=vi,Ws=-vi,Qo={garden:{name:"\u5927\u8F2A\u306E\u82B1\u7551",x:Vs+40,z:Ws-30,r:34},tower:{name:"\u98A8\u9234\u306E\u5854",x:Vs+170,z:Ws+120,r:12,h:12},lake:{name:"\u82B1\u306E\u6E56",x:Vs-275,z:Ws+180,r:30}},Ki=Qo.garden,en=Qo.tower,uo=Qo.lake,Cf=[[[330,-330],[Vs-140,Ws+110],[Ki.x-30,Ki.z+20]],[[Vs-140,Ws+110],[uo.x+20,uo.z-30]],[[Ki.x-30,Ki.z+20],[Vs+110,Ws+90],[en.x-12,en.z]]],_s={grass:new j("#8fd46b"),grassDark:new j("#6fb850"),pink:new j("#f4b8cf"),yellow:new j("#f4e08a"),lilac:new j("#c9b4ec"),sand:new j("#efdcae"),path:new j("#d8b882")},IE=new j,Pf={id:"flowers",name:"\u82B1\u51A0\u306E\u4E18\u9675",cx:Vs,cz:Ws,edge:Vn(400,[26,.9,14,2.2,10,.4]),maxR:460,places:Qo,paths:Cf,sanctuaries:[],land(i,t){let e=5+Wt(i/50,t/50)*8+Wt(i/180+11,t/180)*12;return e=ee(e,en.h,wt(en.r+16,en.r,Math.hypot(i-en.x,t-en.z))),e=ee(e,-3,wt(uo.r+14,uo.r-4,Math.hypot(i-uo.x,t-uo.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(_s.sand);s.copy(_s.grassDark).lerp(_s.grass,Wt(i/9,t/9));let r=Wt(i/22+3,t/22),o=Wt(i/30-7,t/30+2),a=r>.62?_s.pink:o>.64?_s.yellow:o<.32?_s.lilac:null;a&&s.lerp(a,.55),Math.hypot(i-Ki.x,t-Ki.z)<Ki.r&&s.lerp(IE.copy(_s.pink).lerp(_s.yellow,Wt(i/6,t/6)),.5);let c=Re(i,t,Cf);return c<2.4&&s.lerp(_s.path,wt(2.4,1.4,c)),s},nature:{trees:{style:"round",count:420,leafColors:[15902402,13150448,10475115,16765152],accentChance:.25},rocks:60,rockColor:13222072,grass:{count:8e3,color:8176218},flowers:{count:11e3,colors:[16748464,16766044,12166911,16777215,16738922,16754912]},avoid:Object.values(Qo).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CF\u30CA\u30C0\u30DE",tint:15902402,mult:1.3,count:32},ishimori:{name:"\u30C4\u30BF\u30A4\u30EF",tint:9416832,mult:1.3,count:9}},decorate(i,t,e){let n=new yt,s=on(n,i),r=ht(6270538),o=[16748464,16766044,12166911,16738922,16777215],a=[];for(let M=0;M<12;M++){let S=e()*Math.PI*2,w=e()*Ki.r,g=Ki.x+Math.cos(S)*w,A=Ki.z+Math.sin(S)*w,E=t(g,A),T=7+e()*8,b=pt(new F(new Pt(.35,.5,T,7),r));b.position.set(g,E+T/2-.3,A),n.add(b),s.cyl(.6,T,g,E-.5,A,null,6270538,"tree");let C=pt(new F(new te(1,8,6),r));C.scale.set(1.6,.2,.7),C.position.set(g+1,E+T*.4,A),C.rotation.z=-.4,n.add(C);let H=new yt;H.position.set(g,E+T,A),H.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5);let R=ht(o[M%o.length]),I=1.6+e()*1.2;for(let z=0;z<7;z++){let N=pt(new F(new te(1,10,6),R)),B=z/7*Math.PI*2;N.scale.set(I,.25,I*.55),N.position.set(Math.cos(B)*I,0,Math.sin(B)*I),N.rotation.y=-B,H.add(N)}let D=new F(new Pt(I*.55,I*.5,.5,12),new bt({color:16762938,emissive:9067008,emissiveIntensity:.4}));H.add(D),n.add(H),a.push({head:H,p:e()*10})}let c=ht(16183524);s.cyl(2.8,16,en.x,en.h-.5,en.z,c,16183524,"part",10);let h=pt(new F(new Pt(3.6,3.6,.6,10),c));h.position.set(en.x,en.h+15.8,en.z),n.add(h);for(let M=0;M<4;M++){let S=M/4*Math.PI*2+Math.PI/4,w=pt(new F(new dt(.4,4,.4),c));w.position.set(en.x+Math.cos(S)*3,en.h+18,en.z+Math.sin(S)*3),n.add(w)}let l=pt(new F(new Yt(4.4,4,10),ht(2864544)));l.position.set(en.x,en.h+22,en.z),n.add(l);let u=[],p=[10479871,16759008,16773544,13154559];for(let M=0;M<6;M++){let S=M/6*Math.PI*2,w=new yt;w.position.set(en.x+Math.cos(S)*3.8,en.h+19.8,en.z+Math.sin(S)*3.8);let g=new F(new te(.35,10,8,0,Math.PI*2,0,Math.PI/2),new bt({color:p[M%4],transparent:!0,opacity:.8,emissive:p[M%4],emissiveIntensity:.3}));g.position.y=-.8;let A=new F(new wn(.25,.9),ht(16777215,{side:le}));A.position.y=-1.6,w.add(g,A),n.add(w),u.push({pivot:w,p:M})}let f=90,y=new Float32Array(f*3),_=new Float32Array(f*3),m=[],d=[16748464,16766044,12166911,10479871,16777215].map(M=>new j(M));for(let M=0;M<f;M++){let S=e()*Math.PI*2,w=e()*260,g=Vs+Math.cos(S)*w,A=Ws+Math.sin(S)*w;m.push({x:g,z:A,y:Math.max(t(g,A),0)+1.5+e()*3,p:e()*10});let E=d[M%d.length];_[M*3]=E.r,_[M*3+1]=E.g,_[M*3+2]=E.b}let v=new ae;v.setAttribute("position",new pe(y,3)),v.setAttribute("color",new pe(_,3));let x=new Ke(v,new Xe({size:.45,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1}));return x.frustumCulled=!1,n.add(x),{group:n,update(M,S){for(let{head:w,p:g}of a)w.rotation.z=Math.sin(S*.8+g)*.08;for(let{pivot:w,p:g}of u)w.rotation.x=Math.sin(S*2.2+g)*.25,w.rotation.z=Math.cos(S*1.7+g)*.2;for(let w=0;w<f;w++){let g=m[w];y[w*3]=g.x+Math.sin(S*.5+g.p)*6,y[w*3+1]=g.y+Math.abs(Math.sin(S*6+g.p*3))*.5,y[w*3+2]=g.z+Math.cos(S*.4+g.p)*6}v.attributes.position.needsUpdate=!0}}}};var gr=vi,xr=vi,ta={pond:{name:"\u6C88\u3093\u3060\u7960",x:gr+60,z:xr+40,r:45},reeds:{name:"\u8466\u306E\u8FF7\u3044\u9053",x:gr-120,z:xr+170,r:40}},Te=ta.pond,Oh={z:Te.z,mid:Te.x-27},If=10,Nh=[[[360,360],[gr-60,xr+30],[Te.x-52,Te.z]],[[gr-60,xr+30],[ta.reeds.x+20,ta.reeds.z-30]]],fo={moss:new j("#7a9a5a"),dark:new j("#5f7a4a"),mud:new j("#6b5a44"),shallow:new j("#5a6a4a"),path:new j("#9a8060")},Lf=(i,t)=>wt(.6,.68,Wt(i/35+50,t/35)),Hf={id:"marsh",name:"\u9727\u306E\u6E7F\u539F",cx:gr,cz:xr,edge:Vn(400,[24,1.7,16,.6,9,2.9]),maxR:460,places:ta,paths:Nh,sanctuaries:[],land(i,t){let e=2+Wt(i/40,t/40)*2.2+Wt(i/150+5,t/150)*2.5,n=wt(8,3,Re(i,t,Nh));e=ee(e,-1.6,Lf(i,t)*(1-n));let s=Math.hypot(i-Te.x,t-Te.z);return e=ee(e,-2.2,wt(Te.r+10,Te.r-5,s)),e=ee(e,3,wt(If+4,If-2,s)),e},color(i,t,e,n,s){if(e<1.7)return s.copy(fo.mud).lerp(fo.shallow,wt(-2,1.5,e));s.copy(fo.dark).lerp(fo.moss,Wt(i/8,t/8)),s.lerp(fo.mud,Lf(i,t)*.5+(Wt(i/5,t/5)>.7?.3:0));let r=Re(i,t,Nh);return r<2.4&&s.lerp(fo.path,wt(2.4,1.4,r)),s},nature:{trees:{style:"round",count:300,leafColors:[4876858,3824180,5929540],trunkColor:4864554,minH:2.2},rocks:50,rockColor:8026730,grass:{count:9e3,color:8030794},flowers:{count:900,colors:[16777215,13150448,14739711]},avoid:Object.values(ta).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CC\u30DE\u30C0\u30DE",tint:6982250,mult:1.9,count:32},ishimori:{name:"\u30C9\u30ED\u30A4\u30EF",tint:7035460,mult:1.9,count:10}},decorate(i,t,e){let n=new yt,s=on(n,i),r=ht(9079418),o=ht(6982218),a=t(Te.x,Te.z),c=new yt;c.position.set(Te.x-6,a-.6,Te.z),c.rotation.set(0,Math.PI/2,.12);for(let I of[-1,1]){let D=pt(new F(new Pt(.4,.5,6,8),r));D.position.set(I*2.4,3,0),c.add(D)}let h=pt(new F(new dt(6.6,.6,.8),r));h.position.y=6.1;let l=pt(new F(new dt(5.4,.4,.6),r));l.position.y=5.1,c.add(h,l),n.add(c),s.cyl(.5,6,Te.x-6,a-1,Te.z-2.4,null,9079418),s.cyl(.5,6,Te.x-6,a-1,Te.z+2.4,null,9079418);let u=new yt,p=pt(new F(new dt(4,.6,3.4),r));p.position.y=.3;let f=pt(new F(new dt(3,2.6,2.4),ht(5914672)));f.position.y=1.9;let y=pt(new F(new Yt(3,1.6,4),ht(3816004)));y.position.y=4,y.rotation.y=Math.PI/4;let _=new F(new Yt(2.4,.8,4),o);_.position.y=4.35,_.rotation.y=Math.PI/4;let m=new F(new te(.35,12,8),new bt({color:13697008,emissive:7332032,emissiveIntensity:1.4}));m.position.set(-1.25,1.7,0),u.add(p,f,y,_,m),u.position.set(Te.x+3,a,Te.z),n.add(u),s.box(4,4.5,3.4,Te.x+3,a-.5,Te.z,null,5914672);let d=new bt({color:16773296,emissive:16762976,emissiveIntensity:1.2}),v=[[Te.x-2,Te.z-5],[Te.x-2,Te.z+5],[Te.x-32,Te.z-5],[Te.x-32,Te.z+5]];for(let[I,D]of v){let z=Math.max(t(I,D),-.2),N=new yt,B=pt(new F(new Pt(.25,.35,1.8,6),r));B.position.y=.9;let G=new F(new dt(.7,.6,.7),d);G.position.y=2.1;let X=pt(new F(new Yt(.7,.6,4),r));X.position.y=2.7,X.rotation.y=Math.PI/4,N.add(B,G,X),N.position.set(I,z,D),n.add(N)}let x=new qe(11075552,30,30);x.position.set(Te.x,a+3,Te.z),n.add(x);let M=an(new je(1,10,.3,Math.PI*2-.6).rotateX(-Math.PI/2),ht(5212735,{side:le}),700);M.mesh.castShadow=!1;let S=an(new Yt(.35,.5,6),ht(16754888),120),w=0;for(let I=0;w<700&&I<2e4;I++){let D=gr+(e()-.5)*700,z=xr+(e()-.5)*700,N=t(D,z);if(N>-.6||N<-2.4)continue;let B=.5+e()*.9;M.add(D,.05,z,B,1,B,0,e()*6,0),e()<.15&&S.add(D+.2,.3,z,1,1,1,Math.PI,0,0),w++}n.add(M.finish(),S.finish());let g=document.createElement("canvas");g.width=g.height=64;let A=g.getContext("2d"),E=A.createRadialGradient(32,32,0,32,32,32);E.addColorStop(0,"rgba(255,255,255,1)"),E.addColorStop(1,"rgba(255,255,255,0)"),A.fillStyle=E,A.fillRect(0,0,64,64);let T=70,b=new Float32Array(T*3),C=Array.from({length:T},()=>({x:(e()-.5)*140,z:(e()-.5)*140,y:.5+e()*3,v:.5+e()})),H=new ae;H.setAttribute("position",new pe(b,3));let R=new Ke(H,new Xe({color:15266028,size:22,map:new Ei(g),transparent:!0,opacity:.22,depthWrite:!1}));return R.frustumCulled=!1,n.add(R),{group:n,update(I,D,z){m.position.y=1.7+Math.sin(D*1.8)*.12;let N=z&&Math.hypot(z.x-gr,z.z-xr)<420;if(R.visible=!!N,!!N){for(let B=0;B<T;B++){let G=C[B];G.x+=G.v*I*1.5,G.x>70&&(G.x-=140),b[B*3]=z.x+G.x,b[B*3+1]=Math.max(0,z.y-2)+G.y,b[B*3+2]=z.z+G.z}H.attributes.position.needsUpdate=!0}}}}};var oi=-vi,ai=vi,LE=[[oi-330,ai-150],[oi-120,ai-60],[oi,ai-20],[oi+150,ai+40],[oi+320,ai+110]],Bh={x:oi,z:ai-20},Fh={gorge:{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",x:oi,z:ai-20,r:20},shrine:{name:"\u7D05\u8449\u306E\u793E",x:oi-150,z:ai+150,r:16,h:12}},fn=Fh.shrine,Df=[[[-330,330],[oi+30,ai-110],[oi,ai-62]],[[oi,ai+22],[oi-70,ai+100],[fn.x+14,fn.z-6]]],Xs={gold:new j("#c0a450"),dry:new j("#a89048"),leaves:new j("#d0703a"),red:new j("#c04a30"),rock:new j("#a06c4a"),rockDark:new j("#7c5038"),path:new j("#c8a070")},Uf={id:"canyon",name:"\u7D05\u8449\u306E\u6E13\u8C37",cx:oi,cz:ai,edge:Vn(400,[22,2.4,16,1.3,10,.7]),maxR:460,places:Fh,paths:Df,sanctuaries:[],land(i,t){let e=9+Wt(i/45,t/45)*6+Wt(i/170+3,t/170)*10;return e=ee(e,fn.h,wt(fn.r+14,fn.r,Math.hypot(i-fn.x,t-fn.z))),e=ee(e,-2.5,wt(34,9,oo(i,t,LE))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Xs.rockDark);s.copy(Xs.dry).lerp(Xs.gold,Wt(i/9,t/9));let r=Wt(i/16+8,t/16);r>.55&&s.lerp(r>.66?Xs.red:Xs.leaves,wt(.55,.7,r)*.8),n>.6&&s.lerp(Math.floor(e/3)%2?Xs.rock:Xs.rockDark,wt(.6,.9,n));let o=Re(i,t,Df);return o<2.4&&s.lerp(Xs.path,wt(2.4,1.4,o)),s},nature:{trees:{style:"round",count:520,leafColors:[14704682,15769648,13122090,15253568],trunkColor:5913128},rocks:140,rockColor:10119754,grass:{count:6500,color:11573834},flowers:{count:1500,colors:[15769648,16766044,13122090]},avoid:[...Object.values(Fh).map(i=>[i.x,i.z,i.r+4])]},enemies:{kumodama:{name:"\u30E2\u30DF\u30B8\u30C0\u30DE",tint:14707258,mult:2.5,count:32},ishimori:{name:"\u30AB\u30EC\u30A4\u30EF",tint:10119754,mult:2.5,count:10}},decorate(i,t,e){let n=new yt,s=on(n,i),r=fn.h,o=ht(14172202),a=ht(2761254),c=new yt;for(let b of[-1,1]){let C=pt(new F(new Pt(.45,.5,7,10),o));C.position.set(b*3,3.5,0),c.add(C)}let h=pt(new F(new dt(8.6,.7,1),a));h.position.y=7.3;let l=pt(new F(new dt(7.8,.4,.8),o));l.position.y=6.8;let u=pt(new F(new dt(7.4,.4,.5),o));u.position.y=5.6,c.add(h,l,u),c.position.set(fn.x+10,r,fn.z-4),c.rotation.y=Math.atan2(-10,4)+Math.PI/2,n.add(c),s.cyl(.5,7,fn.x+10+Math.cos(c.rotation.y)*3,r-.5,fn.z-4-Math.sin(c.rotation.y)*3,null,14172202),s.cyl(.5,7,fn.x+10-Math.cos(c.rotation.y)*3,r-.5,fn.z-4+Math.sin(c.rotation.y)*3,null,14172202);let p=new yt,f=pt(new F(new dt(7,.8,6),ht(11050124)));f.position.y=.4;let y=pt(new F(new dt(5.2,3.2,4.4),ht(16050904)));y.position.y=2.4;let _=pt(new F(new dt(5.6,.4,4.8),o));_.position.y=4.1;let m=pt(new F(new Yt(5.2,2.6,4),ht(3814464)));m.position.y=5.5,m.rotation.y=Math.PI/4,m.scale.z=.8;let d=new F(new te(.35,10,8),ht(16040539,{metalness:.6,roughness:.3}));d.position.set(0,3.5,2.4),p.add(f,y,_,m,d),p.position.set(fn.x,r,fn.z),p.rotation.y=Math.atan2(10,-4),n.add(p),s.cyl(3.6,6,fn.x,r-.5,fn.z,null,14172202,"house");let v=ht(11050124),x=new bt({color:16773296,emissive:16752704,emissiveIntensity:1.2});for(let[b,C]of[[6,-9],[9,2],[-4,-9]]){let H=new yt,R=pt(new F(new Pt(.25,.35,1.6,6),v));R.position.y=.8;let I=new F(new dt(.6,.5,.6),x);I.position.y=1.85;let D=pt(new F(new Yt(.6,.5,4),v));D.position.y=2.35,H.add(R,I,D),H.position.set(fn.x+b,r,fn.z+C),n.add(H)}let M=160,S=new Float32Array(M*3),w=new Float32Array(M*3),g=[14704682,15769648,13122090,15253568].map(b=>new j(b)),A=Array.from({length:M},(b,C)=>{let H=g[C%4];return w[C*3]=H.r,w[C*3+1]=H.g,w[C*3+2]=H.b,{x:(e()-.5)*70,y:e()*22,z:(e()-.5)*70,p:e()*10}}),E=new ae;E.setAttribute("position",new pe(S,3)),E.setAttribute("color",new pe(w,3));let T=new Ke(E,new Xe({size:.4,vertexColors:!0,transparent:!0,depthWrite:!1}));return T.frustumCulled=!1,n.add(T),{group:n,update(b,C,H){d.position.x=Math.sin(C*1.3)*.08;let R=H&&Math.hypot(H.x-oi,H.z-ai)<420;if(T.visible=!!R,!!R){for(let I=0;I<M;I++){let D=A[I];D.y-=b*1.4,D.y<0&&(D.y+=22),S[I*3]=H.x+D.x+Math.sin(C*1.5+D.p)*1.5,S[I*3+1]=H.y+D.y-4,S[I*3+2]=H.z+D.z+Math.cos(C*1.2+D.p)*1.5}E.attributes.position.needsUpdate=!0}}}}};var yr=-vi,_r=-vi,Hc={heart:{name:"\u6C34\u6676\u306E\u5FC3\u81D3",x:yr-40,z:_r-40,r:18,h:26},pillars:{name:"\u5929\u67F1\u306E\u68EE",x:yr+130,z:_r+110,r:70}},cn=Hc.heart,ea=Hc.pillars,Lc=[[[-340,-330],[yr+180,_r+170],[yr+40,_r+30],[cn.x+20,cn.z+18]],[[yr+180,_r+170],[ea.x+30,ea.z-10]]],po={rock:new j("#8a82a0"),rockDark:new j("#6a6282"),moss:new j("#6a9a6a"),crystal:new j("#b8b0d8"),path:new j("#b0a8c0")},zf={id:"highlands",name:"\u6C34\u6676\u306E\u9AD8\u5730",cx:yr,cz:_r,edge:Vn(400,[24,.2,14,1.1,11,2.6]),maxR:460,places:Hc,paths:Lc,sanctuaries:[],land(i,t){let e=14+Wt(i/60,t/60)*10+Wt(i/200+7,t/200)*14,n=1-Math.abs(Wt(i/40+9,t/40)*2-1);return e+=n*n*6,e=ee(e,cn.h,wt(cn.r+16,cn.r,Math.hypot(i-cn.x,t-cn.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(po.rockDark);s.copy(po.moss).lerp(po.rock,wt(.35,.65,Wt(i/14,t/14))),Wt(i/7+4,t/7)>.68&&s.lerp(po.crystal,.6),n>.65&&s.lerp(po.rockDark,wt(.65,.95,n));let r=Re(i,t,Lc);return r<2.4&&s.lerp(po.path,wt(2.4,1.4,r)),s},nature:{trees:{style:"pine",count:330,leafColors:[3824202,4876890,3099200],trunkColor:4864564,maxSlope:.55},rocks:180,rockColor:8024208,grass:{count:4500,color:6986346},flowers:{count:900,colors:[13154559,10479871,16777215]},avoid:Object.values(Hc).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30B7\u30E7\u30A6\u30C0\u30DE",tint:10467560,mult:3.2,count:32},ishimori:{name:"\u30B9\u30A4\u30B7\u30E7\u30A6\u30E2\u30EA",tint:9074864,mult:3.2,count:11}},decorate(i,t,e){let n=new yt,s=on(n,i),r=ht(9077408),o=ht(6265434),a=ht(3824202);for(let _=0,m=0;_<22&&m<400;m++){let d=e()*Math.PI*2,v=Math.sqrt(e())*(ea.r+60),x=ea.x+Math.cos(d)*v,M=ea.z+Math.sin(d)*v;if(Re(x,M,Lc)<10)continue;_++;let S=t(x,M),w=22+e()*38,g=3.5+e()*5,A=pt(new F(new Pt(g*.8,g,w,7),r));A.position.set(x,S+w/2-1,M),A.rotation.y=e()*3,n.add(A);let E=pt(new F(new te(g*.85,8,5,0,Math.PI*2,0,Math.PI/2),o));E.scale.y=.4,E.position.set(x,S+w-1,M),n.add(E);for(let T=0;T<2;T++){let b=pt(new F(new Yt(1.2,4,6),a));b.position.set(x+(e()-.5)*g,S+w+1.5,M+(e()-.5)*g),n.add(b)}s.cyl(g,w,x,S-1,M,null,9077408)}let c=[new bt({color:10479871,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}),new bt({color:13154559,emissive:8413408,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9})],h=c.map(_=>an(new rn(1,0),_,200));for(let _=0,m=0;_<34&&m<600;m++){let d=yr+(e()-.5)*620,v=_r+(e()-.5)*620,x=t(d,v);if(x<6||Re(d,v,Lc)<6||Math.hypot(d-cn.x,v-cn.z)<cn.r+6)continue;_++;let M=h[_%2];for(let S=0;S<5;S++){let w=.6+e()*1.4;M.add(d+(e()-.5)*2.5,x+w,v+(e()-.5)*2.5,w*.55,w*2.2,w*.55,(e()-.5)*.7,e()*3,(e()-.5)*.7)}s.cyl(1.8,4,d,x-.5,v,null,_%2?13154559:10479871)}h.forEach(_=>{_.mesh.castShadow=!1,n.add(_.finish())});let l=cn.h,u=ht(11577536);s.cyl(11,1.2,cn.x,l-.6,cn.z,u,11577536,"part",16);for(let _=0;_<6;_++){let m=_/6*Math.PI*2;s.cyl(.8,5,cn.x+Math.cos(m)*12.5,l-.5,cn.z+Math.sin(m)*12.5,u,11577536,"part",6)}let p=new F(new rn(3.4,0),new bt({color:14218495,emissive:7321855,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.88}));p.scale.y=1.7,p.position.set(cn.x,l+12,cn.z),n.add(p);let f=[];for(let _=0;_<6;_++){let m=new F(new rn(.8,0),c[_%2]);m.scale.y=1.8,n.add(m),f.push(m)}let y=new qe(10473727,80,60);return y.position.set(cn.x,l+12,cn.z),n.add(y),{group:n,update(_,m){p.rotation.y+=_*.5,p.position.y=l+12+Math.sin(m)*.8,f.forEach((d,v)=>{let x=m*.6+v/f.length*Math.PI*2;d.position.set(cn.x+Math.cos(x)*8,l+11+Math.sin(m*1.3+v)*1.5,cn.z+Math.sin(x)*8),d.rotation.y+=_*2})}}}};var ji=[gf,Ef,wf,bf,Af,Pf,Hf,Uf,zf],na=ji.flatMap(i=>Object.values(i.places)),Dc=ji.flatMap(i=>i.sanctuaries),Nf=[{name:"\u5DDD\u306E\u6A4B",axis:"z",at:ke.north,mid:-240,small:!0},{name:"\u6E7F\u539F\u306E\u6728\u9053",axis:"x",at:Oh.z,mid:Oh.mid,small:!0},{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",axis:"z",at:Bh.x,mid:Bh.z,land:9,arch:-2.5}];function Of(i){let t=new kn({transparent:!0,depthWrite:!1,fog:!0,uniforms:Rh.merge([Mt.fog,{heightMap:{value:null},time:{value:0},shallow:{value:new j("#6fdcd0")},deep:{value:new j("#2f73b8")},foam:{value:new j("#ffffff")},mapHalf:{value:Gn}}]),vertexShader:`
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
      }`});t.uniforms.heightMap.value=i;let e=new F(new wn(4e3,4e3),t);return e.rotation.x=-Math.PI/2,e.position.y=Kn,e.renderOrder=1,{mesh:e,update(n){t.uniforms.time.value=n}}}function HE(){return new kn({transparent:!0,depthWrite:!1,side:le,uniforms:{time:{value:0}},vertexShader:`
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
      }`})}function Ff(i){let t=new yt,e=Ae.plateau,n=HE(),s=5,r=new ft(-pi.y,pi.x),o=21,a=36,c=40,h=[],l=[],u=[],p=0,f=null;for(let T=0;T<=c;T++){let b=o+(a-o)*T/c,C=e.x+pi.x*b,H=e.z+pi.y*b,R=s*(.6+.4*(T/c)),I=Math.max(i(C,H),Kn-.2)+.35;f&&(p+=Math.hypot(b-f.d,I-f.y)),f={d:b,y:I};for(let D of[-1,1])h.push(C+r.x*D*R/2,I,H+r.y*D*R/2),l.push(D<0?0:1,p/6);if(T>0){let D=(T-1)*2;u.push(D,D+1,D+2,D+1,D+3,D+2)}}let y=new ae;y.setAttribute("position",new me(h,3)),y.setAttribute("uv",new me(l,2)),y.setIndex(u);let _=new F(y,n);_.renderOrder=2,t.add(_);let m=new bt({color:7331024,transparent:!0,opacity:.8,roughness:.2}),d=new F(new je(Wi.r+.6,24),m);d.rotation.x=-Math.PI/2,d.position.set(Wi.x,e.h-.45,Wi.z),t.add(d);let v=new O(e.x+pi.x*33,Kn+.3,e.z+pi.y*33),x=70,M=new Float32Array(x*3),S=new Float32Array(x),w=new Float32Array(x*3),g=T=>{M[T*3]=v.x+(Math.random()-.5)*4,M[T*3+1]=v.y,M[T*3+2]=v.z+(Math.random()-.5)*4,w[T*3]=(Math.random()-.5)*3,w[T*3+1]=2+Math.random()*4,w[T*3+2]=(Math.random()-.5)*3,S[T]=Math.random()};for(let T=0;T<x;T++)g(T);let A=new ae;A.setAttribute("position",new pe(M,3));let E=new Ke(A,new Xe({color:16777215,size:.5,transparent:!0,opacity:.8,depthWrite:!1}));return t.add(E),{group:t,update(T,b){n.uniforms.time.value=b;for(let C=0;C<x;C++)S[C]+=T,w[C*3+1]-=9*T,M[C*3]+=w[C*3]*T,M[C*3+1]+=w[C*3+1]*T,M[C*3+2]+=w[C*3+2]*T,(S[C]>1.2||M[C*3+1]<v.y-.5)&&g(C);A.attributes.position.needsUpdate=!0}}}var DE=1.6;function UE(i){let t=document.createElement("canvas");t.width=256,t.height=80;let e=t.getContext("2d");e.fillStyle="#c49a6c",e.fillRect(0,0,256,80),e.strokeStyle="#8a5a3b",e.lineWidth=6,e.strokeRect(3,3,250,74),e.fillStyle="#5a3a24",e.font='bold 34px "M PLUS Rounded 1c", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,42);let n=new Ei(t);return n.colorSpace=Ne,n}function Bf(i,t,e){let n=new yt,s=ht(11897438),r=ht(8015414),o=ht(14271642),a=ht(11116950),c=new bt({color:16770728,emissive:16762992,emissiveIntensity:1.2}),h=an(new dt(1,1,1),s,2500),l=an(new dt(1,1,1),r,1500),u=an(new dt(1,1,1),o,2500),p=an(new Pt(1,1.2,1,8).translate(0,.5,0),a,200),f=[];for(let y of i){let _=y.axis==="x",m=R=>_?[R,y.at]:[y.at,R],d=R=>e(...m(R)),v=y.mid,x=y.mid,M=y.land??DE;for(let R=0;R<400&&d(v)<M;R++)v-=1;for(let R=0;R<400&&d(x)<M;R++)x+=1;v-=2,x+=2;let S=x-v,w=y.small?3.4:4.4,g=d(v)+.25,A=d(x)+.25,E=y.arch??(y.small?1.2:Math.min(7,Math.max(3,S*.07))),T=R=>{let I=(R-v)/S;return ee(g,A,I)+E*Math.sin(Math.PI*I)},b=R=>T(R+.5)-T(R-.5),C=(R,I,D)=>_?[R,D,y.at+I]:[y.at+I,D,R],H=Math.ceil(S/2);for(let R=0;R<H;R++){let I=v+R*S/H,D=v+(R+1)*S/H,z=T((I+D)/2),N=(B,G,X,nt,q,Q)=>{let[ut,,Tt]=C(I,B,0),[_t,,kt]=C(D,G,0);t.push({box:new he(new O(Math.min(ut,_t),X,Math.min(Tt,kt)),new O(Math.max(ut,_t),nt,Math.max(Tt,kt))),color:Q,kind:q})};N(-w/2,w/2,z-.6,z,"bridge",11897438),N(-w/2-.3,-w/2,z,z+1.3,"rail",8015414),N(w/2,w/2+.3,z,z+1.3,"rail",8015414)}for(let R=v+.5;R<x;R+=1){let I=T(R)-.12,D=Math.atan(b(R)),[z,,N]=C(R,0,0);_?h.add(z,I,N,.95,.25,w,0,0,D):h.add(z,I,N,w,.25,.95,-D,0,0)}for(let R=v;R<=x+.01;R+=4){for(let I of[-1,1]){let[D,z,N]=C(R,I*(w/2+.15),T(R)+.7);l.add(D,z,N,.28,1.6,.28)}if(!y.small&&R>v+6&&R<x-6&&Math.round(R-v)%16===0){let[I,,D]=C(R,0,0),z=e(I,D);p.add(I,z,D,1.1,T(R)-.5-z,1.1)}}for(let R=v;R<x-.01;R+=4){let I=Math.min(R+4,x),D=(R+I)/2,z=Math.atan((T(I)-T(R))/(I-R));for(let N of[-1,1])for(let B of[1.35,.7]){let[G,X,nt]=C(D,N*(w/2+.15),T(D)+B);_?u.add(G,X,nt,I-R,.1,.1,0,0,z):u.add(G,X,nt,.1,.1,I-R,-z,0,0)}}if(!y.small)for(let[R,I]of[[v,1],[x,-1]]){let D=T(R);for(let nt of[-1,1]){let[q,,Q]=C(R,nt*(w/2+.6),0),ut=pt(new F(new dt(.5,5.5,.5),r));ut.position.set(q,D+2.5,Q);let Tt=new F(new rn(.35,0),c);Tt.position.set(q,D+5.6,Q),n.add(ut,Tt)}let[z,,N]=C(R,0,0),B=pt(new F(new dt(_?.4:w+2.2,.4,_?w+2.2:.4),r));B.position.set(z,D+5.1,N),n.add(B);let G=UE(y.name),X=new F(new wn(3.2,1),new bt({map:G,side:le}));X.position.set(z,D+4.3,N),X.rotation.y=_?I>0?-Math.PI/2:Math.PI/2:I>0?Math.PI:0,n.add(X)}f.push({...y,from:m(v),to:m(x),length:S})}return n.add(h.finish(),l.finish(),u.finish(),p.finish()),{group:n,bridges:f}}var zE=(i,t,e,n="")=>`<svg viewBox="0 0 32 32">
  <path d="M25 3l4 0 0 4-13.5 13.5-4-4z" fill="${i}" stroke="${t}" stroke-width="1.2"/>
  ${n}
  <path d="M8.5 16.5l7 7-2 2-7-7z" fill="${e}"/>
  <path d="M8 22l2 2-4 4-2-2z" fill="#2a1418"/>
  <circle cx="4.6" cy="27.4" r="1.6" fill="#ff2a3a"/>
</svg>`,kf=(i,t,e,n="")=>`<svg viewBox="0 0 32 32">
  <path d="M6 28l17-17" stroke="${i}" stroke-width="3" stroke-linecap="round"/>
  <path d="M18 5c5 0 10 4 10 10l-6 1-3-3-3-3z" fill="${t}" stroke="${e}" stroke-width="1.4" stroke-linejoin="round"/>
  ${n}
</svg>`,Er={axe:kf("#9a6a3e","#c8d2dc","#6a7888"),bloodAxe:kf("#2a1418","#16121a","#ff2030",'<path d="M20 8c3 1 5 3 6 6" stroke="#ff2030" stroke-width="1.4" fill="none"/><circle cx="7" cy="27" r="1.6" fill="#ff2a3a"/>'),fence:'<svg viewBox="0 0 32 32"><g fill="#c89a64" stroke="#7a5534" stroke-width="1"><path d="M5 9l2-3 2 3v18H5z"/><path d="M14 9l2-3 2 3v18h-4z"/><path d="M23 9l2-3 2 3v18h-4z"/><rect x="3" y="12" width="26" height="3"/><rect x="3" y="20" width="26" height="3"/></g></svg>',door:'<svg viewBox="0 0 32 32"><rect x="4" y="4" width="4" height="24" fill="#7a5534"/><rect x="24" y="4" width="4" height="24" fill="#7a5534"/><rect x="8" y="6" width="16" height="22" fill="#c89a64" stroke="#7a5534"/><path d="M8 11h16M8 17h16M8 23h16" stroke="#9a6a3e"/><circle cx="21" cy="17" r="1.4" fill="#f4c25b"/></svg>',sangrea:zE("#0e0c12","#ff2030","#241018",'<path d="M13 19l12-12" stroke="#ff2030" stroke-width="1.6"/><circle cx="12" cy="20" r="1.4" fill="#ffd0d0"/>'),sword:'<svg viewBox="0 0 32 32"><path d="M24 4l4 0 0 4-13 13-4-4z" fill="#e6eef5" stroke="#8fa3b5" stroke-width="1.2"/><path d="M9 17l6 6-2 2-6-6z" fill="#f4c25b"/><path d="M8 22l2 2-4 4-2-2z" fill="#8a5a3b"/></svg>',potion:'<svg viewBox="0 0 32 32"><rect x="13" y="4" width="6" height="5" rx="1" fill="#b07a55"/><path d="M12 9h8v4l4 5v7a3 3 0 01-3 3H11a3 3 0 01-3-3v-7l4-5z" fill="#dff4ff" opacity=".8"/><path d="M9 18h14v7a2 2 0 01-2 2H11a2 2 0 01-2-2z" fill="#ff5a6e"/><circle cx="13" cy="21" r="1.4" fill="#fff" opacity=".8"/></svg>'},Es=(i,t,e)=>`<svg viewBox="0 0 32 32">
  <rect x="5" y="11" width="20" height="12" rx="2" fill="${i}" transform="rotate(-20 15 17)"/>
  <ellipse cx="24" cy="13.5" rx="4" ry="6" fill="${t}" transform="rotate(-20 24 13.5)"/>
  <ellipse cx="24" cy="13.5" rx="2" ry="3.2" fill="${e}" transform="rotate(-20 24 13.5)"/>
</svg>`,Ms=(i,t,e,n,s,r,o)=>({name:i,desc:t,kind:"material",category:"wood",durability:e,resist:n,trait:s,icon:r,plank:o,stack:99}),kh={start:"woodYoung",flowers:"woodBlossom",forest:"woodElder",marsh:"woodMarsh",desert:"woodCactus",canyon:"woodMaple",snow:"woodFrost",highlands:"woodCrystal",volcano:"woodCharred"},Gf={woodYoung:Ms("\u82E5\u8449\u306E\u6728\u6750","\u59CB\u307E\u308A\u306E\u8349\u539F\u306E\u3001\u7D20\u76F4\u3067\u6271\u3044\u3084\u3059\u3044\u6728\u6750",100,{},{name:"\u6271\u3044\u3084\u3059\u3044",desc:"\u7279\u5225\u306A\u5F37\u3055\u306F\u306A\u3044\u304C\u3001\u3069\u3053\u3067\u3082\u4F7F\u3048\u308B\u57FA\u672C\u306E\u6728\u6750"},Es("#9a6a44","#e8c890","#c89a60"),13146724),woodBlossom:Ms("\u82B1\u9999\u308B\u6728\u6750","\u82B1\u51A0\u306E\u4E18\u9675\u306E\u3001\u307B\u306E\u304B\u306B\u7518\u304F\u9999\u308B\u6728\u6750",80,{},{name:"\u7652\u3084\u3057\u306E\u9999\u308A",desc:"\u62E0\u70B9\u306B\u4F7F\u3046\u3068\u3001\u307E\u308F\u308A\u306E\u30DA\u30C3\u30C8\u304C\u306A\u3064\u304D\u3084\u3059\u304F\u306A\u308B"},Es("#b88a8a","#ffd8e4","#f2a6c2"),14725304),woodElder:Ms("\u6DF1\u7DD1\u306E\u53E4\u6728\u6750","\u6DF1\u7DD1\u306E\u68EE\u306E\u3001\u5E74\u3092\u7D4C\u305F\u91CD\u304F\u786C\u3044\u6728\u6750",160,{water:!0},{name:"\u8150\u308A\u306B\u304F\u3044",desc:"\u6E7F\u6C17\u306B\u5F37\u304F\u3001\u9577\u3044\u3042\u3044\u3060\u50B7\u307E\u306A\u3044"},Es("#5a3a24","#c8a870","#6b8a4a"),8017204),woodMarsh:Ms("\u6E7F\u539F\u306E\u6C34\u6728","\u9727\u306E\u6E7F\u539F\u306E\u3001\u6C34\u3092\u306F\u3058\u304F\u6728\u6750",120,{water:!0},{name:"\u9632\u6C34",desc:"\u6C34\u8FBA\u3084\u6CBC\u306E\u4E0A\u306B\u5EFA\u3066\u3066\u3082\u50B7\u307E\u306A\u3044"},Es("#4a4a34","#b8b088","#5a7a5a"),6974026),woodCactus:Ms("\u30B5\u30DC\u30C6\u30F3\u6750","\u967D\u708E\u306E\u7802\u6F20\u306E\u3001\u4E7E\u3044\u305F\u8EFD\u3044\u6728\u6750",70,{heat:!0},{name:"\u8010\u6691",desc:"\u6691\u3055\u3067\u4E7E\u3044\u3066\u5272\u308C\u305F\u308A\u3057\u306A\u3044"},Es("#6a8a4a","#d8d09a","#9fbf6a"),11057264),woodMaple:Ms("\u7D05\u8449\u306E\u5805\u6728","\u7D05\u8449\u306E\u6E13\u8C37\u306E\u3001\u3057\u306A\u3084\u304B\u3067\u7F8E\u3057\u3044\u6728\u6750",140,{},{name:"\u3057\u306A\u3084\u304B",desc:"\u885D\u6483\u306B\u5F37\u304F\u3001\u653B\u6483\u3092\u53D7\u3051\u3066\u3082\u58CA\u308C\u306B\u304F\u3044"},Es("#8a4a2a","#f0b070","#e0602a"),12607546),woodFrost:Ms("\u96EA\u5DBA\u306E\u91DD\u8449\u6750","\u767D\u5DBA\u306E\u96EA\u539F\u306E\u3001\u5BD2\u3055\u306B\u8010\u3048\u3066\u80B2\u3063\u305F\u6728\u6750",200,{cold:!0},{name:"\u8010\u5BD2",desc:"\u96EA\u539F\u3067\u3082\u51CD\u3089\u306A\u3044\u3002\u307B\u304B\u306E\u6728\u6750\u3088\u308A\u4E08\u592B"},Es("#5a4030","#e8f0f8","#9fc0d8"),14212324),woodCrystal:Ms("\u6C34\u6676\u677E\u306E\u6728\u6750","\u6C34\u6676\u306E\u9AD8\u5730\u306E\u3001\u9B54\u529B\u3092\u5E2F\u3073\u305F\u6728\u6750",180,{cold:!0},{name:"\u9B54\u529B\u3092\u5E2F\u3073\u308B",desc:"\u591C\u306B\u306A\u308B\u3068\u6DE1\u304F\u5149\u308B\u3002\u9B54\u6CD5\u306E\u529B\u306B\u5F37\u3044"},Es("#4a4458","#c8b8ff","#9fe8ff"),9076912),woodCharred:Ms("\u713C\u3051\u70AD\u306E\u6728\u6750","\u7114\u306E\u706B\u5C71\u5730\u5E2F\u306E\u3001\u713C\u3051\u3066\u3082\u6B8B\u3063\u305F\u9ED2\u3044\u6728\u6750",150,{heat:!0,fire:!0},{name:"\u8010\u706B",desc:"\u706B\u5C71\u306E\u71B1\u3067\u3082\u71C3\u3048\u306A\u3044"},Es("#2a2226","#6a5a50","#ff7a30"),3813942)},Gh=Object.keys(Gf),Qi={cold:{name:"\u5BD2\u3055",where:"\u767D\u5DBA\u306E\u96EA\u539F\u30FB\u6C34\u6676\u306E\u9AD8\u5730",effect:"\u51CD\u3063\u3066\u3082\u308D\u304F\u306A\u308B"},heat:{name:"\u6691\u3055",where:"\u967D\u708E\u306E\u7802\u6F20\u30FB\u7114\u306E\u706B\u5C71\u5730\u5E2F",effect:"\u4E7E\u3044\u3066\u3072\u3073\u5272\u308C\u308B"},fire:{name:"\u706B",where:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",effect:"\u71C3\u3048\u3066\u3057\u307E\u3046"},water:{name:"\u6E7F\u6C17",where:"\u9727\u306E\u6E7F\u539F\u30FB\u6DF1\u7DD1\u306E\u68EE",effect:"\u8150\u3063\u3066\u5F31\u304F\u306A\u308B"}},nn={...Gf,sword:{name:"\u65C5\u4EBA\u306E\u5263",desc:"\u4F7F\u3044\u6163\u308C\u305F\u7247\u624B\u5263\u30023\u6BB5\u30B3\u30F3\u30DC\u304C\u51FA\u305B\u308B",kind:"weapon",moveset:"sword",held:"sword",stance:"sword",power:1,icon:Er.sword},sangrea:{name:"\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2",desc:"\u8840\u3092\u5438\u3063\u3066\u8108\u6253\u3064\u3001\u9ED2\u3044\u9B54\u5263\u3002\u901F\u304F\u91CD\u3044 4 \u6BB5\u306E\u9023\u6483\u3092\u653E\u3064",kind:"weapon",moveset:"blood",held:"sangrea",rarity:"blood",stance:"blood",power:1.7,speed:1.15,trail:16719920,passive:{id:"lifesteal",name:"\u5438\u8840",desc:"\u4E0E\u3048\u305F\u30C0\u30E1\u30FC\u30B8\u306E 10% \u3060\u3051 HP \u3092\u56DE\u5FA9\u3059\u308B",rate:.1},skills:["bloodGale","crimsonMoon","bloodRelease"],icon:Er.sangrea},axe:{name:"\u6728\u3053\u308A\u306E\u65A7",desc:"\u91CD\u3044\u9244\u306E\u65A7\u3002\u9B54\u7269\u306B\u306F\u3042\u307E\u308A\u52B9\u304B\u306A\u3044\u304C\u3001\u6728\u3084\u67F5\u3092\u305F\u3084\u3059\u304F\u53E9\u304D\u5272\u308B",kind:"weapon",moveset:"axe",held:"axe",stance:"axe",power:.55,speed:.9,chop:3,breaker:3,trail:16773328,icon:Er.axe},bloodAxe:{name:"\u8840\u65A7\u30AC\u30EB\u30E0\u30D8\u30C3\u30C9",desc:"\u8840\u3092\u5438\u3063\u3066\u8D64\u304F\u8108\u6253\u3064\u3001\u9ED2\u3044\u5927\u65A7\u3002\u57CE\u58C1\u3059\u3089\u7815\u304F\u3068\u8A00\u308F\u308C\u308B",kind:"weapon",moveset:"bloodAxe",held:"bloodAxe",rarity:"blood",stance:"bloodAxe",power:.9,speed:.95,chop:4,breaker:4.5,trail:16719920,passive:{id:"bleed",name:"\u88C2\u50B7",desc:"\u65AC\u3063\u305F\u9B54\u7269\u306B\u51FA\u8840\u3092\u4E0E\u3048\u3001\u3058\u308F\u3058\u308F\u3068 HP \u3092\u524A\u308B"},icon:Er.bloodAxe},fence:{name:"\u6728\u306E\u67F5",desc:"4m \u306E\u67F5\u3002\u307E\u308F\u308A\u3092\u56F2\u3048\u3070\u3001\u9B54\u7269\u304C\u5165\u3063\u3066\u3053\u3089\u308C\u306A\u3044",kind:"build",build:"fence",held:null,stance:"item",stack:99,icon:Er.fence},door:{name:"\u6728\u306E\u6249",desc:"\u958B\u3051\u9589\u3081\u3067\u304D\u308B\u6249\u3064\u304D\u306E\u67F5\u3002G \u30AD\u30FC\u3067\u958B\u3051\u9589\u3081\u3059\u308B",kind:"build",build:"door",held:null,stance:"item",stack:99,icon:Er.door},potion:{name:"\u56DE\u5FA9\u85AC",desc:"\u98F2\u3080\u3068 HP \u304C 40 \u56DE\u5FA9\u3059\u308B",kind:"consumable",held:"potion",heal:40,icon:Er.potion}},Uc=8,Mr=!0;function Vf(){let i=Array(Uc).fill(null);(Mr?["axe","bloodAxe","sword","sangrea","fence","door","potion"]:["axe","sword","potion"]).forEach((n,s)=>{i[s]={id:n,count:nn[n].kind==="weapon"?1:Mr?99:3}});let e=0;return{slots:i,infinite:Mr,get selected(){return e},set selected(n){e=Math.max(0,Math.min(Uc-1,n))},get held(){let n=i[e];return n?{...nn[n.id],id:n.id,count:n.count}:null},consumeHeld(){let n=i[e];!n||Mr||(n.count--,n.count<=0&&(i[e]=null))},add(n,s=1){let r=nn[n],o=r.stack??(r.kind==="consumable"?99:1);for(let a of i){if(s<=0)break;if(a&&a.id===n&&a.count<o){let c=Math.min(s,o-a.count);a.count+=c,s-=c}}for(;s>0;){let a=i.indexOf(null);if(a<0)break;let c=Math.min(s,o);i[a]={id:n,count:c},s-=c}return s}}}function NE(){let i=new kn({side:Bn,depthWrite:!1,uniforms:{top:{value:new j("#4f8fe0")},horizon:{value:new j("#fde8d2")},bottom:{value:new j("#8fc3e0")}},vertexShader:`
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
      }`});return new F(new te(1700,32,16),i)}function OE(i){let t=new yt,e=new xc({color:16777215,emissive:12107980,flatShading:!0}),n=new Pn(1,1);for(let s=0;s<90;s++){let r=new yt,o=4+Math.floor(i()*4);for(let h=0;h<o;h++){let l=10+i()*12,u=new F(n,e);u.scale.set(l,l*.6,l),u.position.set((h-o/2)*15+i()*6,i()*6,i()*12-6),r.add(u)}let a=i()*Math.PI*2,c=i()*1600;r.position.set(Math.cos(a)*c,130+i()*90,Math.sin(a)*c),t.add(r)}return t}function FE(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=512/2;e.strokeStyle="#ffffff",e.fillStyle="#ffffff",e.lineCap="round",e.lineWidth=10,e.beginPath(),e.arc(n,n,236,0,Math.PI*2),e.stroke(),e.lineWidth=4,e.beginPath(),e.arc(n,n,206,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(n,n,110,0,Math.PI*2),e.stroke();for(let r=0;r<16;r++){let o=r/16*Math.PI*2;e.save(),e.translate(n+Math.cos(o)*221,n+Math.sin(o)*221),e.rotate(o),e.lineWidth=4,e.beginPath(),r%2?(e.moveTo(-6,-6),e.lineTo(6,6),e.moveTo(6,-6),e.lineTo(-6,6)):e.arc(0,0,5,0,Math.PI*2),e.stroke(),e.restore()}e.lineWidth=5;for(let r of[0,Math.PI/3]){e.beginPath();for(let o=0;o<=3;o++){let a=r+o/3*Math.PI*2-Math.PI/2;e.lineTo(n+Math.cos(a)*200,n+Math.sin(a)*200)}e.stroke()}e.beginPath(),e.arc(n,n,22,0,Math.PI*2),e.fill();let s=new Ei(t);return s.colorSpace=Ne,s}function BE(i){let t=Ae.altar,e=t.h,n=new yt;n.position.set(t.x,e,t.z);let s=ht(14275267,{roughness:.85}),r=pt(new F(new Pt(7.6,8,.4,16),s));r.position.y=.2;let o=pt(new F(new Pt(7,7.3,.4,16),s));o.position.y=.6,n.add(r,o),i.push({box:new he(new O(t.x-7.3,e-1,t.z-7.3),new O(t.x+7.3,e+.8,t.z+7.3)),cyl:{x:t.x,z:t.z,r:7.3},color:14275267,kind:"spawn"});let a=new F(new je(6.4,48),new Ee({map:FE(),color:8384736,transparent:!0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.82,n.add(a);let c=ht(12432806),h=new bt({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let y=0;y<4;y++){let _=Math.PI/4+y/4*Math.PI*2,m=Math.cos(_)*10,d=Math.sin(_)*10,v=pt(new F(new Pt(.5,.7,3.2,6),c));v.position.set(m,1.6,d);let x=new F(new rn(.45,0),h);x.position.set(m,3.8,d),n.add(v,x),i.push({box:new he(new O(t.x+m-.7,e-1,t.z+d-.7),new O(t.x+m+.7,e+3.2,t.z+d+.7)),cyl:{x:t.x+m,z:t.z+d,r:.7},color:12432806,kind:"part"})}let l=60,u=new Float32Array(l*3),p=new Float32Array(l);for(let y=0;y<l;y++){let _=Math.random()*Math.PI*2,m=Math.random()*6;u[y*3]=Math.cos(_)*m,u[y*3+1]=Math.random()*6,u[y*3+2]=Math.sin(_)*m,p[y]=Math.random()}let f=new ae;return f.setAttribute("position",new pe(u,3)),n.add(new Ke(f,new Xe({color:11206642,size:.25,transparent:!0,opacity:.85,depthWrite:!1}))),{group:n,update(y,_){a.rotation.z=_*.15,a.material.opacity=.75+Math.sin(_*2)*.2;let m=f.attributes.position;for(let d=0;d<l;d++){let v=m.getY(d)+y*(.6+p[d]);v>7&&(v=.8),m.setY(d,v)}m.needsUpdate=!0}}}function kE(i,t){let e=new yt,n=on(e,i),s=Ae.plateau,r=s.h,o=ht(7319119,{roughness:1}),a=M=>ht(M);n.cyl(5,25,s.x,r-1,s.z,a(11577242),11577242,"part",12);for(let M=4;M<24;M+=6){let S=new F(new Pt(5.15,5.15,.6,12),a(9405816));S.position.set(s.x,r+M,s.z),e.add(S)}n.cyl(6.5,2,s.x,r+24,s.z,a(13616822),13616822,"part",12);let c=new Pt(2.2,2,1,8),h=new Yt(2,2.4,8);for(let M=0;M<8;M++){let S=.9+M*.72,w=r+3+M*3,g=s.x+Math.cos(S)*12,A=s.z+Math.sin(S)*12,E=new yt,T=pt(new F(c,o)),b=pt(new F(h,a(10129296)));b.rotation.x=Math.PI,b.position.y=-1.7,E.add(T,b),E.position.set(g,w-.5,A),e.add(E),n.cyl(2.2,1,g,w-1,A,null,7319119)}n.cyl(2,.4,s.x,r+26,s.z,new bt({color:15918793,roughness:.6}),16766826,"goal",16);let l=new F(new rn(1.2,0),new bt({color:9431295,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}));l.scale.y=1.6,l.position.set(s.x,r+30,s.z),e.add(l);let u=new qe(8379647,30,30);u.position.copy(l.position),e.add(u);for(let M=0;M<10;M++){let S=M/10*Math.PI*2+.3,w=s.x+Math.cos(S)*19,g=s.z+Math.sin(S)*19,A=t(w,g),E=[7,3,5.5,1.5,8,2.5,6,4,7.5,2][M];if(n.cyl(1.3,E,w,A-.5,g,a(14209216),14209216,"part",8),E>5){let T=pt(new F(new Pt(1.7,1.7,.5,8),a(15130576)));T.position.set(w,A-.5+E+.25,g),e.add(T)}}let p=pt(new F(new Pt(1.2,1.2,8,8),a(14209216))),f=s.x-8,y=s.z+15;p.rotation.z=Math.PI/2,p.rotation.y=.6,p.position.set(f,t(f,y)+1,y),e.add(p);let _=Ae.plateau.x-9,m=Ae.plateau.z+22,d=t(_,m),v=a(13616822);n.box(1.6,7,1.6,_-4,d-.5,m,v,13616822),n.box(1.6,7,1.6,_+4,d-.5,m,v,13616822);let x=pt(new F(new dt(10.4,1.4,2),v));return x.position.set(_,d+7.2,m),e.add(x),{group:e,crystal:l,crystalBaseY:r+30}}function GE(i){let t=new yt,e=on(t,i),n=Ae.cave,s=n.h,r=13,o=.6,a=ht(8221808,{side:le,transparent:!0,opacity:1}),c=pt(new F(new te(r,22,12,Math.PI+o,Math.PI*2-o*2,0,Math.PI/2),a));c.scale.y=.8,c.position.set(n.x,s-.5,n.z),t.add(c);let h=ht(9273976);for(let w of[-1,1]){let g=w*(o+.05),A=pt(new F(new Zn(2.6,0),h));A.position.set(n.x+Math.cos(g)*r,s+1.2,n.z+Math.sin(g)*r),A.scale.set(1,1.6,1),t.add(A)}for(let w=0;w<28;w++){let g=w/28*Math.PI*2,A=Math.atan2(Math.sin(g),Math.cos(g));Math.abs(A)<o||e.cyl(2.2,14,n.x+Math.cos(g)*(r+.5),s-1,n.z+Math.sin(g)*(r+.5),null,8221808,"wall")}let l=new bt({color:10479871,emissive:4175584,emissiveIntensity:1.1,flatShading:!0}),u=new bt({color:16759008,emissive:13656232,emissiveIntensity:.9,flatShading:!0}),p=new rn(1,0);[[-7,-4],[-8,3],[-3,-8],[-2,8],[3,-9]].forEach(([w,g],A)=>{for(let E=0;E<4;E++){let T=new F(p,A%2?u:l),b=.5+Math.random()*.7;T.scale.set(b*.6,b*2,b*.6),T.position.set(n.x+w+(Math.random()-.5)*2,s+b,n.z+g+(Math.random()-.5)*2),T.rotation.set((Math.random()-.5)*.6,Math.random()*3,(Math.random()-.5)*.6),t.add(T)}e.cyl(1.4,3,n.x+w,s-.5,n.z+g,null,A%2?16759008:10479871,"part")});let y=new qe(8379647,60,22);y.position.set(n.x-3,s+5,n.z),t.add(y);let _=new yt,m=ht(9067067),d=ht(16040539,{metalness:.6,roughness:.35}),v=pt(new F(new dt(2,1.1,1.3),m));v.position.y=.55;let x=pt(new F(new Pt(.65,.65,2,10,1,!1,0,Math.PI),m));x.rotation.z=Math.PI/2,x.position.y=1.1;let M=new F(new dt(2.05,.18,1.35),d);M.position.y=1;let S=new F(new dt(.3,.35,.1),d);return S.position.set(0,.95,.68),_.add(v,x,M,S),_.position.set(n.x-9,s,n.z),_.rotation.y=Math.PI/2,t.add(_),e.cyl(1.2,1.7,n.x-9,s,n.z,null,16040539,"chest"),{group:t,update(w,g){let E=g&&Math.hypot(g.x-n.x,g.z-n.z)<r+1?.18:1;a.opacity+=(E-a.opacity)*Math.min(1,w*6),a.depthWrite=a.opacity>.95}}}function VE(i){let e=new Map,n=(h,l)=>h*1e5+l,s=(h,l)=>{let u=Math.floor(h.box.min.x/24),p=Math.floor(h.box.max.x/24),f=Math.floor(h.box.min.z/24),y=Math.floor(h.box.max.z/24);for(let _=u;_<=p;_++)for(let m=f;m<=y;m++)l(n(_,m))},r=h=>s(h,l=>{e.has(l)||e.set(l,[]),e.get(l).push(h)});for(let h of i)r(h);let o=0,a=[],c=(h,l)=>{o++,a.length=0;let u=Math.floor(h/24),p=Math.floor(l/24);for(let f=u-1;f<=u+1;f++)for(let y=p-1;y<=p+1;y++){let _=e.get(n(f,y));if(_)for(let m of _)m._stamp!==o&&(m._stamp=o,a.push(m))}return a.slice()};return c.add=h=>{i.push(h),r(h)},c.remove=(h,l=h.box)=>{let u=i.indexOf(h);u>=0&&i.splice(u,1),s({box:l},p=>{let f=e.get(p),y=f?f.indexOf(h):-1;y>=0&&f.splice(y,1)})},c}var WE=120;function XE(i){let e=new Map;for(let f of i){let y=nn[kh[f.region.id]];f.woodId=kh[f.region.id],f.maxHp=Math.round(y.durability*.35),f.hp=f.maxHp,f.state="stand",f.t=0;let _=Math.floor(f.x/16)*1e5+Math.floor(f.z/16);e.has(_)||e.set(_,[]),e.get(_).push(f)}let n=new Set,s=new ve,r=new ve,o=new ve,a=new ve,c=new ve,h=new O,l=new ve().makeScale(0,0,0);function u(f){f.orig||(f.orig=f.parts.map(y=>{let _=new ve;return y.mesh.getMatrixAt(y.index,_),_}))}function p(f,y,_){c.makeTranslation(f.x,f.y,f.z),a.makeTranslation(-f.x,-f.y,-f.z),r.makeRotationAxis(h.set(f.axisX,0,f.axisZ),y),o.makeScale(_,_,_),f.parts.forEach((m,d)=>{s.copy(c).multiply(r).multiply(o).multiply(a).multiply(f.orig[d]),m.mesh.setMatrixAt(m.index,_<=0?l:s),m.mesh.instanceMatrix.needsUpdate=!0})}return{chop(f,y,{range:_,arc:m,damage:d}){let v=[],x=Math.sin(y),M=Math.cos(y),S=Math.floor(f.x/16),w=Math.floor(f.z/16);for(let g=S-1;g<=S+1;g++)for(let A=w-1;A<=w+1;A++)for(let E of e.get(g*1e5+A)??[]){if(E.state==="gone"||E.state==="fall"||E.state==="grow")continue;let T=E.x-f.x,b=E.z-f.z,C=Math.hypot(T,b);if(C>_+.8||Math.abs(E.y-f.y)>4||C>1.5&&Math.acos(Qe.clamp((T*x+b*M)/C,-1,1))>m/2)continue;u(E);let H=Math.max(1,Math.round(d*(.85+Math.random()*.3)));E.hp-=H;let R=Math.max(C,.001);E.axisX=b/R,E.axisZ=-T/R;let I=E.hp<=0;E.state=I?"fall":"shake",E.t=0,n.add(E),v.push({tree:E,pos:new O(E.x,E.y+2,E.z),damage:H,felled:I,woodId:E.woodId,amount:I?2+Math.floor(Math.random()*3):0})}return v},update(f){for(let y of n)if(y.t+=f,y.state==="shake"){let _=y.t/.3;p(y,Math.sin(y.t*45)*.06*Math.max(0,1-_),1),_>=1&&(p(y,0,1),y.state="stand",n.delete(y))}else if(y.state==="fall"){let _=Math.min(y.t/1.1,1);p(y,Math.PI/2*_*_,1-Math.max(0,_-.8)*5),_>=1&&(p(y,0,0),y.state="gone",y.t=0,y.savedBox=y.collider.box.clone(),y.collider.box.makeEmpty())}else if(y.state==="gone")y.t>=WE&&(y.state="grow",y.t=0);else if(y.state==="grow"){let _=Math.min(y.t/1.5,1);p(y,0,1-Math.pow(1-_,3)),_>=1&&(y.collider.box.copy(y.savedBox),y.hp=y.maxHp,y.state="stand",n.delete(y))}}}}function Wf(i,t,e={}){let n=!!e.lite,s=ro(2024);i.background=new j("#fde8d2"),i.fog=new ac("#e6eef2",300,n?1e3:1500);let r=NE();i.add(r);let o=OE(s);i.add(o),i.add(new yc(14478591,8032090,1));let a=new O(50,80,20),c=new Ec(16773340,2.4);c.position.copy(a),c.castShadow=!0,c.shadow.mapSize.set(n?1024:2048,n?1024:2048),c.shadow.camera.left=-60,c.shadow.camera.right=60,c.shadow.camera.top=60,c.shadow.camera.bottom=-60,c.shadow.camera.far=250,c.shadow.bias=-5e-4,c.shadow.normalBias=.05,i.add(c),i.add(c.target);let h=uf(ji);h.maxR=Gn-30;let l=lf([h]);i.add(l.group);let u=l.sample,p=(H,R)=>ji[h.regionIndexAt(H,R)],f=(H,R)=>u(H,R)>.3?p(H,R):null,y=Of(l.heightTex);i.add(y.mesh);let _=Ff(u);i.add(_.group);let m=[],d=[],v=[],x=BE(m);i.add(x.group);let M=kE(m,u);i.add(M.group);let S=GE(m);i.add(S.group);let w=yf(m,u);i.add(w.group),ji.forEach((H,R)=>{if(H.decorate){let z=H.decorate(m,u,ro(H.cx*7+H.cz*13+5));i.add(z.group),d.push(z.update)}let I=(z,N)=>h.weightOf(R,z,N),D=Mf(H,m,u,l.slopeAt,ro(H.cx*3+H.cz*11+1),I,n?.35:1);i.add(D.group),v.push(...D.trees)});let g=Bf(Nf,m,u);i.add(g.group);let A=hf(l.colorAt,u),E=XE(v),T=VE(m),b=new O(Ae.altar.x,Ae.altar.h+.8,Ae.altar.z),C=0;return{sun:c,spawnPoint:b,colliders:m,collidersNear:T,mapImage:A,bridges:g.bridges,waterLevel:Kn,groundHeight:u,slopeAt:l.slopeAt,islandAt:f,regionAt:p,chopTrees:E.chop,addCollider:T.add,removeCollider:T.remove,update(H,R,I){C+=H,I&&r.position.copy(I),o.rotation.y+=H*.004,y.update(C),R&&y.mesh.position.set(R.x,Kn,R.z),_.update(H,C),x.update(H,C),w.update(C),S.update(H,R);for(let D of d)D(H,C,R);E.update(H),M.crystal.rotation.y+=H*.8,M.crystal.position.y=M.crystalBaseY+Math.sin(C*1.5)*.4,R&&(c.target.position.copy(R),c.position.copy(R).add(a))}}}var zc={sword:[{anim:0,name:"\u7E26\u65AC\u308A",duration:.42,hitTime:.14,range:4.6,arc:1.7,power:1,knockback:1,lunge:7,hop:0,shake:.18,hitStop:.05},{anim:1,name:"\u6A2A\u8599\u304E",duration:.46,hitTime:.17,range:5,arc:3,power:1.1,knockback:1.4,lunge:9,hop:0,shake:.25,hitStop:.06},{anim:2,name:"\u56DE\u8EE2\u65AC\u308A",duration:.62,hitTime:.3,range:5.6,arc:Math.PI*2,power:1.7,knockback:2.2,lunge:4,hop:16,shake:.6,hitStop:.1}],fists:[{anim:3,name:"\u30B8\u30E3\u30D6",duration:.28,hitTime:.08,range:3.2,arc:1.4,power:.45,knockback:.6,lunge:5,hop:0,shake:.08,hitStop:.03},{anim:4,name:"\u30B9\u30C8\u30EC\u30FC\u30C8",duration:.38,hitTime:.12,range:3.6,arc:1.4,power:.7,knockback:1.2,lunge:8,hop:0,shake:.15,hitStop:.05},{anim:14,name:"\u30A2\u30C3\u30D1\u30FC",duration:.46,hitTime:.15,range:3.6,arc:1.6,power:1,knockback:1.6,lunge:6,hop:10,shake:.25,hitStop:.07}],blood:[{anim:10,name:"\u9006\u8888\u88DF",duration:.34,hitTime:.1,range:4.9,arc:2,power:1,knockback:.8,lunge:8,hop:0,shake:.2,hitStop:.05},{anim:11,name:"\u8888\u88DF\u65AC\u308A",duration:.36,hitTime:.11,range:4.9,arc:2,power:1.1,knockback:1,lunge:8,hop:0,shake:.24,hitStop:.05},{anim:12,name:"\u8840\u9583\u7A81\u304D",duration:.42,hitTime:.13,range:7.5,arc:.7,power:1.5,knockback:1.8,lunge:18,hop:0,shake:.3,hitStop:.07},{anim:13,name:"\u8840\u65CB",duration:.72,hitTime:.22,hitTimes:[.22,.44],range:6.2,arc:Math.PI*2,power:1.3,knockback:2.4,lunge:4,hop:12,shake:.55,hitStop:.09}],axe:[{anim:15,name:"\u85AA\u5272\u308A",duration:.58,hitTime:.27,range:4.4,arc:1.5,power:1,knockback:1.2,lunge:5,hop:0,shake:.35,hitStop:.07},{anim:1,name:"\u6A2A\u632F\u308A",duration:.5,hitTime:.19,range:4.8,arc:2.6,power:1,knockback:1.6,lunge:6,hop:0,shake:.3,hitStop:.06},{anim:7,name:"\u515C\u5272\u308A",duration:.95,hitTime:.6,range:5.2,arc:2.2,power:1.8,knockback:2.4,lunge:6,hop:18,shake:.8,hitStop:.12}],bloodAxe:[{anim:15,name:"\u8840\u5272\u308A",duration:.54,hitTime:.26,range:4.8,arc:1.6,power:1,knockback:1.3,lunge:7,hop:0,shake:.4,hitStop:.07},{anim:1,name:"\u88C2\u304D\u6255\u3044",duration:.48,hitTime:.18,range:5.2,arc:2.8,power:1.1,knockback:1.6,lunge:8,hop:0,shake:.35,hitStop:.06},{anim:13,name:"\u8840\u5D50",duration:.72,hitTime:.22,hitTimes:[.22,.44],range:6,arc:Math.PI*2,power:1,knockback:2,lunge:4,hop:12,shake:.5,hitStop:.08},{anim:7,name:"\u65AD\u982D",duration:.95,hitTime:.6,range:6,arc:2.4,power:2.2,knockback:3,lunge:8,hop:20,shake:1,hitStop:.14}]},z1=zc.sword,Xf={0:.42,1:.46,2:.62,3:.28,4:.38,5:.9,6:.45,7:.95,8:.6,9:.9,10:.34,11:.36,12:.42,13:.72,14:.46,15:.58},qf=.45;var vr=(i,t={})=>new bt({color:i,metalness:.3,roughness:.32,flatShading:!0,...t}),qs=(i,t,e=1.2,n={})=>new bt({color:i,emissive:t,emissiveIntensity:e,flatShading:!0,...n});function Ys(i,t){let e=new Bs;i.forEach(([s,r],o)=>o?e.lineTo(s,r):e.moveTo(s,r)),e.closePath();let n=new hr(e,{depth:t,bevelEnabled:!0,bevelThickness:t*.35,bevelSize:.02,bevelSegments:1});return n.translate(0,0,-t/2),n.rotateY(-Math.PI/2),n}function qE(i=2757656,t=.5){let e=new F(new Pt(.075,.085,t,8),new bt({color:i,roughness:.8}));return e.rotation.x=Math.PI/2,e.position.z=-.02,e}function YE(){let i=new yt,t=[[.3,-.17],[1.4,-.22],[2.05,-.15],[2.65,0]];for(let u=5;u>=0;u--){let p=.5+u*.3;t.push([p+.2,.17+(u>3?-.02:0)],[p+.1,.27],[p,.18])}t.push([.3,.17]);let e=new F(Ys(t,.07),vr(2761776,{roughness:.3})),n=new F(Ys([[.4,-.06],[1.6,-.08],[2.35,0],[1.6,.08],[.4,.06]],.1),qs(16719920,14684192,1.6)),s=qs(16738938,16719936,1.8);for(let u=0;u<4;u++)for(let p of[-1,1]){let f=new F(new dt(.02,u%2?.1:.06,.06),s);f.position.set(p*.055,u%2?.12:-.13,.7+u*.35),f.rotation.x=u*.7,i.add(f)}let r=vr(2363416);for(let u of[-1,1]){let p=[[0,0],[.1,u*.25],[.02,u*.5],[.16,u*.42],[.12,u*.66],[.26,u*.3],[.18,0]],f=new F(Ys(p,.05),r);f.position.z=.2,i.add(f)}let o=new F(new te(.08,10,8),qs(16765136,16719920,1.2));o.scale.set(.6,1,.6),o.position.set(0,0,.26);let a=new F(new dt(.1,.1,.02),new Ee({color:1703941}));a.scale.set(1,.25,1),a.position.set(0,0,.27),a.rotation.y=Math.PI/2;let c=new F(new Yt(.08,.2,6),r);c.rotation.x=-Math.PI/2,c.position.z=-.36;let h=vr(4864580);for(let u=0;u<3;u++){let p=new F(new Jn(.035,.012,4,8),h);p.position.set(0,-.06-u*.06,-.44),p.rotation.y=u%2?Math.PI/2:0,i.add(p)}let l=new F(new rn(.06,0),qs(16722490,12582936,1.5));return l.position.set(0,-.25,-.44),i.add(e,n,o,a,qE(1707026,.5),c,l),{group:i,pulse:[n.material,o.material,s,l.material]}}function $E(){let i=new yt,t=new bt({color:10119742,roughness:.85,flatShading:!0}),e=new F(new Pt(.075,.09,2.15,7),t);e.rotation.x=Math.PI/2,e.position.z=.7;let n=new F(new Pt(.1,.1,.42,7),new bt({color:5913128,roughness:.9}));n.rotation.x=Math.PI/2;let s=vr(9082532,{roughness:.45}),r=new F(Ys([[1.3,.12],[1.74,.12],[1.92,-.2],[2.08,-.66],[1.62,-.56],[1.36,-.14]],.13),s),o=new F(Ys([[1.9,-.18],[2,-.2],[2.16,-.7],[2.06,-.68]],.07),vr(15265524,{roughness:.2})),a=new F(new dt(.2,.2,.36),s);a.position.set(0,.2,1.53);let c=new F(new Jn(.1,.03,5,10),s);return c.position.z=1.2,i.add(e,n,r,o,a,c),i.scale.setScalar(1.15),{group:i,pulse:[],tip:2.3}}function ZE(){let i=new yt,t=new bt({color:2760742,roughness:.6,flatShading:!0}),e=new F(new Pt(.08,.1,2.5,7),t);e.rotation.x=Math.PI/2,e.position.z=.8;let n=qs(9048096,6291472,.8);for(let p=0;p<3;p++){let f=new F(new Pt(.11,.11,.1,7),n);f.rotation.x=Math.PI/2,f.position.z=-.1+p*.28,i.add(f)}let s=(p,f,y,_)=>{let m=[];for(let x=0;x<=12;x++){let M=-1.15+x/12*2.3;m.push([1.72+Math.sin(M)*p,.08-Math.cos(M)*p])}for(let x=12;x>=0;x--){let M=-1+x/12*2,S=f+(_&&x%2?.1:0);m.push([1.72+Math.sin(M)*S*.8,.08-Math.cos(M)*S+.05])}return Ys(m,y)},r=new F(s(.98,.42,.12,!0),vr(1446426,{roughness:.3})),o=new F(s(1.06,.6,.06,!1),qs(16719920,14684192,1.6)),a=vr(2363416),c=new F(Ys([[1.5,.1],[1.62,.72],[1.78,.52],[1.96,.1]],.1),a),h=new F(Ys([[1.95,.1],[2.55,0],[1.95,-.1]],.1),a),l=new F(new te(.1,10,8),qs(16765136,16719920,1.3));l.scale.set(1.3,1,1),l.position.set(0,-.28,1.72);let u=new F(new rn(.13,0),qs(16722490,12582936,1.5));return u.position.z=-.5,i.add(e,r,o,c,h,l,u),i.scale.setScalar(1.3),{group:i,pulse:[o.material,l.material,n,u.material],tip:3.1}}var Yf={sangrea:YE,axe:$E,bloodAxe:ZE};function $f(i){let t=Yf[i]();return t.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t.base=t.pulse.map(e=>e.emissiveIntensity),t}var Zf=Object.keys(Yf);var JE={skin:16769223,hair:3882874,tunic:2864544,scarf:15764028,pants:4869737,boots:8015414,belt:7030320},Qn=(i,t={})=>new bt({color:i,roughness:.6,...t});function mi(i){return i.castShadow=!0,i.receiveShadow=!0,i}function ia(i,t,e,n=0){let s=t*i,r=e*i,o=Math.sqrt(Math.max(0,i*i-s*s-r*r))+n;return new O(s,r,o)}function Jf(i=JE){let t=new yt,e=new yt;t.add(e);let n=(k,st,mt,Ut,xt,ye,_e)=>{let He=new yt;He.position.set(k,st,0);let Ie=mi(new F(new gc(Ut,mt,4,10),Qn(xt)));Ie.position.y=-mt/2-Ut*.5,He.add(Ie);let ue=mi(new F(new te(Ut*_e,12,10),Qn(ye)));return ue.position.y=-mt-Ut*.7,He.add(ue),e.add(He),{pivot:He,end:ue}},s=n(-.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot,r=n(.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot;for(let k of[s,r])k.children[1].scale.set(1,.8,1.35);let o=new yt;o.position.y=1.4;let a=mi(new F(new Pt(.72,1,1.7,16),Qn(i.tunic)));a.position.y=.85;let c=mi(new F(new Jn(.86,.1,6,20),Qn(i.belt)));c.rotation.x=Math.PI/2,c.position.y=.55;let h=new F(new dt(.26,.22,.08),Qn(16040539,{metalness:.6,roughness:.3}));h.position.set(0,.55,.93),o.add(a,c,h),e.add(o);let l=n(-.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot,u=n(.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot;l.rotation.z=-.12,u.rotation.z=.12;let p=new yt;p.position.y=-.95,p.rotation.x=.35;let f=Qn(15134453,{metalness:.7,roughness:.25}),y=mi(new F(new dt(.09,.3,1.6),f));y.position.z=1.05;let _=mi(new F(new Yt(.12,.3,4),f));_.rotation.x=Math.PI/2,_.scale.x=.5,_.position.z=1.95;let m=mi(new F(new dt(.2,.62,.12),Qn(16040539,{metalness:.6,roughness:.3})));m.position.z=.28;let d=new F(new Pt(.08,.08,.45,8),Qn(7030320));d.rotation.x=Math.PI/2;let v=new yt;v.add(y,_,m,d),p.add(v),u.add(p);let x={},M=null,S=new yt;S.position.set(0,-1.32,.18),S.scale.setScalar(1.6);let w=new F(new te(.22,12,10),Qn(14677247,{transparent:!0,opacity:.55,roughness:.1})),g=new F(new te(.17,12,10),new bt({color:16734830,emissive:13639744,emissiveIntensity:.6})),A=new F(new Pt(.07,.09,.22,8),Qn(14677247,{transparent:!0,opacity:.55}));A.position.y=.26;let E=new F(new Pt(.08,.07,.1,8),Qn(11565653));E.position.y=.4,S.add(g,w,A,E),S.visible=!1,u.add(S);let T=new F(new Li(1.4,3.9,24,1,-.4,3),new Ee({color:15269883,transparent:!0,opacity:0,side:le,depthWrite:!1,blending:$n}));T.position.set(.9,2.9,0),T.rotation.y=-Math.PI/2,T.visible=!1,e.add(T);let b=new F(new Li(1.4,4.4,32,1,-2.35,3.4),T.material.clone());b.rotation.x=-Math.PI/2,b.position.y=2.8,b.visible=!1,e.add(b);let C=new F(new Li(1.6,5.2,48),T.material.clone());C.material.color.set(16774344),C.rotation.x=-Math.PI/2,C.position.y=2.4,C.visible=!1,t.add(C);let H=new yt;H.position.set(0,2.9,0);let R=new F(new Li(1.4,4.2,28,1,-.5,3.1),T.material.clone());R.rotation.y=-Math.PI/2,H.add(R),H.visible=!1,e.add(H);let I=new F(new Yt(.5,1,10,1,!0).rotateX(-Math.PI/2).translate(0,0,.5),T.material.clone());I.position.set(.7,2.8,.6),I.visible=!1,e.add(I);let D=mi(new F(new Jn(.62,.22,8,20),Qn(i.scarf)));D.rotation.x=Math.PI/2,D.position.y=3.1,e.add(D);let z=new yt;z.position.set(.35,3.05,-.55);let N=mi(new F(new dt(.4,1.2,.12),Qn(i.scarf)));N.position.y=-.55,z.add(N),e.add(z);let B=1.05,G=new yt;G.position.y=4.05;let X=mi(new F(new te(B,28,20),Qn(i.skin,{roughness:.75,emissive:5913130,emissiveIntensity:.35})));G.add(X);let nt=Qn(i.hair,{roughness:.5,flatShading:!0}),q=mi(new F(new te(B*1.08,20,14,0,Math.PI*2,0,Math.PI*.52),nt));q.rotation.x=-.35,G.add(q);for(let k=-2;k<=2;k++){let st=mi(new F(new Yt(.2,.55,4),nt)),mt=ia(B,k*.22,.55,.02);st.position.copy(mt),st.rotation.set(Math.PI+.5,0,k*.15),G.add(st)}let Q=mi(new F(new Yt(.14,.7,5),nt));Q.position.set(.1,B*1.1,.1),Q.rotation.set(.3,0,-.5),G.add(Q);let ut=new bt({color:1907507,roughness:.3}),Tt=new Ee({color:16777215}),_t=[];for(let k of[-1,1]){let st=new F(new te(.15,12,10),ut);st.scale.set(.9,1.35,.45),st.position.copy(ia(B,k*.34,-.02,-.03)),st.lookAt(st.position.clone().multiplyScalar(2)),G.add(st),_t.push(st);let mt=new F(new te(.05,8,6),Tt);mt.position.copy(ia(B,k*.34+.05,.07,.03)),G.add(mt)}let kt=new Ee({color:16751266,transparent:!0,opacity:.6});for(let k of[-1,1]){let st=new F(new je(.13,16),kt);st.scale.x=1.4;let mt=ia(B,k*.55,-.25,.01);st.position.copy(mt),st.lookAt(mt.clone().multiplyScalar(2)),G.add(st)}let qt=new F(new Jn(.1,.025,6,12,Math.PI),new Ee({color:5909805}));qt.position.copy(ia(B,0,-.3,.005)),qt.rotation.z=Math.PI,qt.rotation.x=-.3,G.add(qt),e.add(G);let St=Math.random()*10,Ot=-1,V=0,at=0,tt=0,lt=0,et=2+Math.random()*3,Lt=-1,gt=0,U=1,L="fists",$=1,rt=0,ot=!1,it=0,zt=!0,vt=-1,Rt=-1,Vt=0,Jt=0,ct=0,ne=-1,Ft={yaw:0,pitch:0,targetYaw:0,targetPitch:0,timer:2},Kt=12,Bt=!0,Ht=0,jt=[];e.traverse(k=>{k.isMesh&&k.material.isMeshStandardMaterial&&!jt.includes(k.material)&&jt.push(k.material)});let Me=jt.map(k=>({color:k.emissive.getHex(),intensity:k.emissiveIntensity})),Z=Qe.lerp,Zt=(k,st,mt,Ut)=>k+(st-k)*Math.min(1,Ut*mt);function Et(k,st){let mt=st.speed??0,Ut=st.grounded??!0;St+=k,at=Zt(at,Ut?mt:0,10,k),tt=Zt(tt,Ut?0:1,12,k),lt=Zt(lt,st.run&&Ut?1:0,8,k),V+=k*10*Math.max(at,.2)*(1+.55*lt);let xt=(1-at)*(1-tt);l.rotation.y=0,u.rotation.y=0,p.rotation.x=.35;let ye=0;Ut&&!zt&&(vt=0),!Ut&&zt&&(Rt=0),zt=Ut;let _e=t.rotation.y-Vt;_e=Math.atan2(Math.sin(_e),Math.cos(_e)),Vt=t.rotation.y,Jt=Zt(Jt,Qe.clamp(-(_e/Math.max(k,.001))*.04,-.22,.22)*at,8,k);let He=Lt>=0||Ot>=0||ot;xt>.9&&!He?ct+=k:(ct=0,ne=-1),ne<0&&ct>7&&(ne=0);let Ie=Math.sin(St*2.2),ue=(Math.sin(St*1.3)*.7+Math.sin(St*.47+1)*.3)*xt,hn=Math.sin(St*.8+.5)*xt,Wn=Math.sin(V)*.8*at*(1+.45*lt),Js=Math.abs(Math.sin(V))*.14*at*(1+.6*lt);if(l.rotation.x=Wn+ue*.06+Ie*.03*xt,u.rotation.x=-Wn+ue*.06-Ie*.03*xt,l.rotation.z=-.12-Ie*.035*xt-at*.05,u.rotation.z=.12+Ie*.035*xt+at*.05,s.rotation.x=-Wn+ue*.03,r.rotation.x=Wn+ue*.03,s.rotation.z=hn*.025,r.rotation.z=hn*.025,o.position.y=1.4+Js+Ie*.025*xt,o.scale.set(1+Ie*.012*xt,1,1+Ie*.018*xt),o.rotation.y=-Math.sin(V)*.14*at,Ft.timer-=k,Ft.timer<=0){let At=Math.random()<.6;Ft.targetYaw=At?(Math.random()-.5)*1.1:0,Ft.targetPitch=At?(Math.random()-.4)*.25:0,Ft.timer=1.5+Math.random()*3}Ft.yaw=Zt(Ft.yaw,Ft.targetYaw*xt,5,k),Ft.pitch=Zt(Ft.pitch,Ft.targetPitch*xt,5,k),G.position.y=4.05+Js*1.1+Ie*.04*xt,G.rotation.y=Ft.yaw,G.rotation.x=Ft.pitch+Math.sin(V*2)*.04*at-ue*.03,G.rotation.z=Math.sin(V)*.05*at+hn*.03,D.position.y=3.1+Js,z.position.y=3.05+Js,lt>.01&&(l.rotation.x-=.35*lt,u.rotation.x-=.35*lt,l.rotation.z-=.12*lt,u.rotation.z+=.12*lt),z.rotation.x=-.2-at*.9-lt*.5-tt*.6+Math.sin(St*6)*.08*(.3+at)+ue*.05,z.rotation.z=Math.sin(St*2.3)*.08*(.4+at);let Ze=ue*.035+at*.12+lt*.18,Ss=hn*.025+Math.sin(V)*.045*at+Jt,Un=1,ni=xt+at*.5;if(L==="fists"){let At=Math.abs(Math.sin(St*5.5))*xt;l.rotation.x=Z(l.rotation.x,-1.15+Math.sin(St*5.5)*.06,ni),l.rotation.z=Z(l.rotation.z,.42,ni),u.rotation.x=Z(u.rotation.x,-.95-Math.sin(St*5.5+1)*.06,ni),u.rotation.z=Z(u.rotation.z,-.42,ni),Un-=At*.035,Ze+=.05*xt,o.rotation.y=Z(o.rotation.y,.18,xt),G.rotation.x+=.08*xt}else if(L==="sword")u.rotation.x=Z(u.rotation.x,-.25+Math.max(0,Math.sin(St*.7))*.2,xt),p.rotation.x=.35+.3*xt;else if(L==="axe"){let At=Lt<0?ni:0,ge=Math.max(0,Math.sin(St*.9))**8;u.rotation.x=Z(u.rotation.x,-.35-ge*.35,At),u.rotation.z=Z(u.rotation.z,.2,At),p.rotation.x=Z(.35,1.05-ge*.3,At),l.rotation.x=Z(l.rotation.x,.1,xt),Ze+=.04*xt,o.rotation.y=Z(o.rotation.y,-.12,xt)}else if(L==="bloodAxe"){let At=Lt<0?ni:0;u.rotation.x=Z(u.rotation.x,.35+Math.sin(St*1.2)*.04,At),u.rotation.z=Z(u.rotation.z,.3,At),p.rotation.x=Z(.35,1.55,At),l.rotation.x=Z(l.rotation.x,-.5,xt),l.rotation.z=Z(l.rotation.z,-.3,xt),Ze+=.14*xt,G.rotation.x+=.12*xt,Ft.yaw*=.4,G.rotation.y=Ft.yaw,s.rotation.x-=.2*xt,r.rotation.x+=.15*xt}else L==="blood"&&(u.rotation.x=Z(u.rotation.x,-.55+Math.sin(St*1.1)*.05,ni),u.rotation.z=Z(u.rotation.z,.35,ni),p.rotation.x=.35+.55*ni,l.rotation.x=Z(l.rotation.x,-.35,xt),l.rotation.z=Z(l.rotation.z,-.55,xt),Ze+=.1*xt,Ss+=.05*xt,G.rotation.x+=.14*xt,Ft.yaw*=.4,G.rotation.y=Ft.yaw,s.rotation.x-=.15*xt,r.rotation.x+=.2*xt);if(ne>=0){ne+=k;let At=Math.min(ne/2.4,1),ge=Math.sin(Math.min(At*3,1)*Math.PI/2)*(At>.7?(1-At)/.3:1);l.rotation.z=Z(l.rotation.z,-2.7,ge),u.rotation.z=Z(u.rotation.z,2.7,ge),l.rotation.x=Z(l.rotation.x,-.3,ge),u.rotation.x=Z(u.rotation.x,-.3,ge),Ze-=.12*ge,G.rotation.x-=.25*ge,Un+=.04*ge,_t.forEach(xe=>{xe.scale.y=Z(1.35,.2,ge)}),At>=1&&(ne=-1,ct=-6-Math.random()*6)}if(vt>=0){vt+=k;let At=vt/.25;Un-=Math.sin(Math.min(At,1)*Math.PI)*.16,s.rotation.x-=Math.sin(Math.min(At,1)*Math.PI)*.3,r.rotation.x-=Math.sin(Math.min(At,1)*Math.PI)*.3,At>=1&&(vt=-1)}if(Rt>=0){Rt+=k;let At=Rt/.2;Un+=Math.sin(Math.min(At,1)*Math.PI)*.1,At>=1&&(Rt=-1)}if(tt>.01&&(l.rotation.z=Z(l.rotation.z,-1.1,tt),u.rotation.z=Z(u.rotation.z,1.1,tt),l.rotation.x=Z(l.rotation.x,-.3,tt),u.rotation.x=Z(u.rotation.x,-.3,tt),s.rotation.x=Z(s.rotation.x,-.7,tt),r.rotation.x=Z(r.rotation.x,.2,tt)),et-=k,ne<0){let At=et<.12;for(let ge of _t)ge.scale.y=At?.15:1.35}if(et<0&&(et=2+Math.random()*3),T.visible=b.visible=C.visible=H.visible=I.visible=!1,Lt>=0){Lt+=k*U;let At=Lt,ge=Xf[gt],xe=P=>1-Math.pow(1-Math.min(Math.max(P,0),1),3),It=(P,W)=>Math.min(Math.max((At-P)/(W-P),0),1),Si=It(ge-.18,ge);if(gt===0){let P;At<.1?P=Z(u.rotation.x,-2.8,xe(At/.1)):At<.22?P=Z(-2.8,-.15,xe(It(.1,.22))):P=Z(-.15,u.rotation.x,Si),u.rotation.x=P,u.rotation.z=.25,l.rotation.x=Z(l.rotation.x,.5,1-Si),o.rotation.y=At<.1?-.25*(At/.1):Z(-.25,.2,It(.1,.22))*(1-Si),Ze+=At<.1?-.05:.12*(1-It(.1,.4)),T.visible=At>.1&&At<.36,T.material.opacity=At<.22?.75:.75*(1-It(.22,.36))}else if(gt===1){let P=xe(It(0,.1))*(1-Si),W=xe(It(.1,.26));u.rotation.z=Z(u.rotation.z,1.45,P),u.rotation.x=0,u.rotation.y=Z(0,Z(.9,-2.3,W),P),p.rotation.x=Z(.35,1.25,P),l.rotation.z=Z(l.rotation.z,-.9,P),l.rotation.y=Z(0,Z(.6,-.4,W),P),o.rotation.y=Z(.4,-.45,W)*P,Ss+=Z(.08,-.1,W)*P,Ze+=.08*P,G.rotation.y=Z(.3,-.3,W)*P,b.visible=At>.1&&At<.4,b.material.opacity=At<.26?.7:.7*(1-It(.26,.4))}else if(gt===2){let P=xe(It(0,.12)),W=It(.12,.42),Y=P*(1-Si);u.rotation.z=Z(u.rotation.z,1.5,Y),u.rotation.x=0,u.rotation.y=Z(0,.7,Y)*(1-W*.6),p.rotation.x=Z(.35,1.3,Y),l.rotation.z=Z(l.rotation.z,-1.3,Y),s.rotation.x-=.5*P*(1-W),r.rotation.x+=.3*P*(1-W),Un-=.12*P*(1-It(.12,.2)),ye=-Math.PI*2*(1-Math.pow(1-W,2)),G.rotation.y=0,C.visible=At>.16&&At<.5,C.material.opacity=.75*(1-It(.3,.5)),C.scale.setScalar(.8+It(.16,.5)*.35)}else if(gt===3){let P=xe(It(0,.07))*(1-It(.14,ge));l.rotation.x=Z(l.rotation.x,-1.55,P),l.rotation.z=Z(l.rotation.z,.15,P),u.rotation.x=Z(u.rotation.x,-.9,.7),u.rotation.z=Z(u.rotation.z,-.35,.7),o.rotation.y=.25*P,Ze+=.06*P}else if(gt===4){let P=xe(It(0,.05))*(1-It(.05,.12)),W=xe(It(.05,.12))*(1-It(.2,ge));u.rotation.x=Z(Z(u.rotation.x,-.4,P),-1.6,W),u.rotation.z=Z(u.rotation.z,-.1,W),l.rotation.x=Z(l.rotation.x,-.9,.7),l.rotation.z=Z(l.rotation.z,.35,.7),o.rotation.y=Z(.2*P,-.35,W),Ze+=.12*W-.04*P}else if(gt===5){let P=xe(It(0,.2))*(1-It(.72,ge)),W=It(.25,.65);u.rotation.x=Z(u.rotation.x,-2.25,P),u.rotation.z=Z(u.rotation.z,-.45,P),G.rotation.x=Z(G.rotation.x,-.35-Math.sin(W*Math.PI*4)*.05,P),G.rotation.y=0,Ze-=.06*P,At>.72&&_t.forEach(Y=>{Y.scale.y=.2})}else if(gt===6){let P=xe(It(0,.06))*(1-It(ge-.12,ge)),W=xe(It(.16,.26));u.rotation.z=Z(u.rotation.z,1.45,P),u.rotation.x=0,u.rotation.y=Z(0,Z(1.3,-2.2,W),P),p.rotation.x=Z(.35,1.25,P),l.rotation.x=Z(l.rotation.x,.9,P),s.rotation.x=Z(s.rotation.x,-.9,P),r.rotation.x=Z(r.rotation.x,.7,P),o.rotation.y=Z(.3,-.4,W)*P,Ze+=.38*P,b.visible=At>.16&&At<.36,b.material.opacity=.8*(1-It(.26,.36))}else if(gt===7){let P=xe(It(0,.12))*(1-It(.12,.2)),W=xe(It(.1,.3))*(1-It(.55,.64)),Y=xe(It(.55,.64))*(1-It(.8,ge));Un-=.16*P+.1*Y,u.rotation.x=Z(Z(u.rotation.x,-2.95,W),-.35,Y),u.rotation.z=Z(u.rotation.z,-.15,Math.max(W,Y)),l.rotation.x=Z(Z(l.rotation.x,-2.7,W),-.5,Y),l.rotation.z=Z(l.rotation.z,.35,Math.max(W,Y)),s.rotation.x-=.6*Y,r.rotation.x+=.3*Y,Ze+=-.18*W+.4*Y,T.visible=At>.55&&At<.75,T.material.opacity=.85*(1-It(.64,.75))}else if(gt===8){let P=xe(It(0,.1))*(1-It(.1,.15)),W=xe(It(.1,.16))*(1-It(.42,ge));u.rotation.x=Z(Z(u.rotation.x,-2.2,P),-.45,W),u.rotation.z=Z(u.rotation.z,.1,Math.max(P,W)),p.rotation.x=Z(.35,1.9,W),l.rotation.x=Z(l.rotation.x,.6,W),l.rotation.z=Z(l.rotation.z,-.6,W),Un-=.12*W,s.rotation.x-=.5*W,Ze+=.3*W}else if(gt===9){let P=xe(It(0,.2))*(1-It(.55,.68)),W=It(.3,.45),Y=xe(It(.55,.68))*(1-It(.78,ge));u.rotation.x=Z(Z(u.rotation.x,-1.75,P),-.3,Y),u.rotation.z=Z(Z(u.rotation.z,-.55,P),1.1,Y),p.rotation.x=Z(.35,-.95,P),l.rotation.x=Z(Z(l.rotation.x,-1.65+W*.35,P),-.3,Y),l.rotation.z=Z(Z(l.rotation.z,.55,P),-1.1,Y),G.rotation.x+=.18*P-.25*Y,Ze+=-.12*Y,At>.3&&At<.6&&_t.forEach(J=>{J.scale.y=.2})}else if(gt===10||gt===11){let P=gt===10,W=xe(It(0,.06))*(1-It(.06,.1)),Y=xe(It(.06,.16)),J=1-Si,K=P?-.2:-2.7,Ct=P?-2.6:-.3,Nt=P?-.7:.9,Xt=P?.9:-.7;u.rotation.x=Z(u.rotation.x,Z(K,Ct,Y),J),u.rotation.z=Z(u.rotation.z,Z(Nt,Xt,Y),J),p.rotation.x=Z(.35,.8,J),l.rotation.x=Z(l.rotation.x,.5,J),o.rotation.y=Z(P?.3:-.2,P?-.35:.35,Y)*J,Ze+=(.12*Y-.05*W)*J,H.rotation.z=P?-.75:.75,H.visible=At>.06&&At<.26,R.material.opacity=.85*(1-It(.16,.26))}else if(gt===12){let P=xe(It(0,.08))*(1-It(.08,.12)),W=xe(It(.08,.14))*(1-Si);u.rotation.x=Z(Z(u.rotation.x,-.9,P),-1.55,W),u.rotation.z=Z(u.rotation.z,.05,Math.max(P,W)),u.rotation.y=.35*P,p.rotation.x=Z(.35,-.02,W),l.rotation.x=Z(l.rotation.x,.8,W),s.rotation.x-=.7*W,r.rotation.x+=.5*W,o.rotation.y=Z(.35*P,-.4,W),Ze+=.3*W-.08*P,I.visible=At>.08&&At<.3,I.scale.set(1,1,1+It(.08,.16)*7),I.material.opacity=.8*(1-It(.16,.3))}else if(gt===13){let P=xe(It(0,.08))*(1-Si),W=It(.08,.55);u.rotation.z=Z(u.rotation.z,1.5,P),u.rotation.x=0,u.rotation.y=.5*P,p.rotation.x=Z(.35,1.3,P),l.rotation.z=Z(l.rotation.z,-1.2,P),ye=-Math.PI*4*(1-Math.pow(1-W,2)),Un-=.1*xe(It(0,.08))*(1-It(.08,.14)),C.visible=At>.1&&At<.62,C.material.opacity=.8*(1-It(.45,.62)),C.scale.setScalar(1+It(.1,.6)*.3)}else if(gt===14){let P=xe(It(0,.08))*(1-It(.08,.14)),W=xe(It(.08,.18))*(1-It(.3,ge));u.rotation.x=Z(Z(u.rotation.x,.3,P),-2.7,W),u.rotation.z=Z(u.rotation.z,-.2,Math.max(P,W)),l.rotation.x=Z(l.rotation.x,-.9,.7),l.rotation.z=Z(l.rotation.z,.4,.7),Un-=.14*P-.06*W,Ze+=-.1*W+.1*P,o.rotation.y=Z(.3*P,-.3,W)}else if(gt===15){let P=xe(It(0,.18))*(1-It(.18,.28)),W=xe(It(.18,.28))*(1-Si),Y=Z(Z(u.rotation.x,-2.9,P),-.35,W);u.rotation.x=Y,l.rotation.x=Y+.1,u.rotation.z=Z(u.rotation.z,-.2,Math.max(P,W)),l.rotation.z=Z(l.rotation.z,.3,Math.max(P,W)),p.rotation.x=Z(.35,.1,P)+.55*W,Ze+=-.12*P+.32*W,Un-=.1*W*(1-It(.3,.45))-.04*P,s.rotation.x-=.4*W,r.rotation.x+=.25*W,G.rotation.y=0,T.visible=At>.18&&At<.4,T.material.opacity=.8*(1-It(.28,.4))}At>=ge&&(Lt=-1,o.rotation.y=0)}if(rt=Math.max(0,rt-k),rt>0&&(Ze-=.25*(rt/.25)),jt.forEach((At,ge)=>{rt>0?(At.emissive.setHex(16724016),At.emissiveIntensity=.9*(rt/.25)):(At.emissive.setHex(Me[ge].color),At.emissiveIntensity=Me[ge].intensity)}),it=Zt(it,ot?1:0,6,k),ot&&_t.forEach(At=>{At.scale.y=.15}),e.rotation.x=Z(Ze,-1.45,it),e.rotation.y=ye,e.rotation.z=Ss*(1-it),e.scale.set(1+(1-Un)*.5,Un,1+(1-Un)*.5),Ot>=0){Ot+=k;let ge=Math.min(Ot/2.2,1),xe=Math.sin(Math.min(ge*4,1)*Math.PI/2)*(ge>.85?(1-ge)/.15:1);u.rotation.z=.12+xe*2.5,u.rotation.x=-xe*.2+Math.sin(Ot*12)*.35*xe,G.rotation.z+=xe*.08,(ge>=1||at>.3||tt>.3)&&(Ot=-1)}}return{object:t,setStance(k){L=k},setGlow(k){$=k},bladeTip(k){return p.visible?(p.updateWorldMatrix(!0,!1),p.localToWorld(k.set(0,0,M?M.tip??2.6:1.9))):null},setHeld(k){let st=Zf.includes(k);st&&!x[k]&&(x[k]=$f(k),p.add(x[k].group));for(let[mt,Ut]of Object.entries(x))Ut.group.visible=mt===k;M=st?x[k]:null,v.visible=k==="sword",p.visible=k==="sword"||st,S.visible=k==="potion"},setTrailColor(k=15269883){T.material.color.setHex(k),b.material.color.setHex(k),C.material.color.setHex(k===15269883?16774344:k),R.material.color.setHex(k),I.material.color.setHex(k)},drink(){return ot?!1:(Lt=0,gt=5,U=1,Ot=-1,ne=-1,!0)},wave(){Ot<0&&Lt<0&&(Ot=0)},attack(k=0,st=1){return ot?!1:(Lt=0,gt=k,U=st,Ot=-1,ne=-1,!0)},get attacking(){return Lt>=0},hurt(){rt=.25},setFainted(k){ot=k,k?Lt=-1:it=0},get stepped(){return Bt},set stepped(k){Bt=k},update(k,st={}){if(M){let Ut=.75+.35*(.5+.5*Math.sin(St*3.2+Ht*3.2));M.pulse.forEach((xt,ye)=>{xt.emissiveIntensity=M.base[ye]*Ut*$})}if(Ht+=k,Bt&&Ht<1/Kt)return;let mt=Math.min(Ht,.2);Ht=0,Et(mt,st)}}}var KE=14,jE=1.7,QE=38,tM=120,eM=1.1,ts=.85,Kf=5,nM=-40,iM=1.15,sM=3,rM=.55,Nc=1310,Oi=.001;function jf(i,t){let e=i.object,n=e.position,s=new O,r=new ft,o=!0,a=0,c=0,h=null,l=!1,u=[],p=new O,f=new O,y=x=>({x:Qe.clamp(x.x,n.x-ts,n.x+ts),z:Qe.clamp(x.z,n.z-ts,n.z+ts)}),_=x=>{let M=x.box;p.set(n.x-ts,n.y,n.z-ts),f.set(n.x+ts,n.y+Kf,n.z+ts);let S=p.x<M.max.x-Oi&&f.x>M.min.x+Oi&&p.y<M.max.y-Oi&&f.y>M.min.y+Oi&&p.z<M.max.z-Oi&&f.z>M.min.z+Oi;if(!S||!x.cyl)return S;let w=y(x.cyl);return Math.hypot(w.x-x.cyl.x,w.z-x.cyl.z)<x.cyl.r-Oi};function m(x){let M=y(x),S=M.x-x.x,w=M.z-x.z,g=Math.hypot(S,w);g<1e-6&&(S=n.x-x.x,w=n.z-x.z,g=Math.hypot(S,w)||1,Math.hypot(S,w)<1e-6&&(S=1));let A=x.r-g+Oi*2;n.x+=S/g*A,n.z+=w/g*A}function d(x,M){if(M===0)return;n[x]+=M;let S=t.groundHeight(n.x,n.z),w=n.y+(o||l?Math.abs(M)*iM+.02:0);if(S>w){n[x]-=M;return}for(let g of u){let A=g.box;if(!_(g))continue;let E=A.max.y-n.y;if(o&&E>0&&E<=eM){let T=n.y;if(n.y=A.max.y,!u.some(b=>b!==g&&_(b)))continue;n.y=T}g.cyl?m(g.cyl):n[x]=M>0?A.min[x]-ts-Oi:A.max[x]+ts+Oi}}function v(x){let M=o;n.y+=x;let S=x<=0;o=!1,l=!1,h=null;for(let A of u)_(A)&&(S?(n.y=Math.max(n.y,A.box.max.y),o=!0,h=A.kind):n.y=A.box.min.y-Kf-Oi,s.y=0);let w=t.groundHeight(n.x,n.z);if((n.y<=w||!o&&M&&S&&n.y-w<.7)&&(n.y=w,s.y=0,o=!0,h="ground"),!o&&M&&S){let A=n.y;n.y-=.7;let E=-1/0,T=null;for(let b of u)b.box.max.y<=A+.01&&b.box.max.y>E&&_(b)&&(E=b.box.max.y,T=b.kind);n.y=A,T&&(n.y=E,s.y=0,o=!0,h=T)}let g=t.waterLevel-sM;if(!o&&n.y<g&&w<g&&(n.y=g,s.y<0&&(s.y=0),o=!0,l=!0,h="water"),!o&&s.y<=0){n.y-=.05;let A=u.find(E=>_(E));n.y+=.05,A&&(o=!0,h=A.kind)}}return{get grounded(){return o},get groundKind(){return h},get facing(){return a},get position(){return n},get swimming(){return l},respawn(x=0){n.copy(t.spawnPoint),s.set(0,0,0),r.set(0,0),a=x,e.rotation.y=x,o=!0},setFacing(x){a=x,e.rotation.y=x},knockback(x,M,S=0){r.set(x,M),S>0&&(s.y=S,o=!1)},update(x,M){u=t.collidersNear(n.x,n.z);let S=Math.min(1,Math.hypot(M.x,M.z));c=S;let w=!!M.run&&S>.1&&!l,g=KE*(l?rM:w?jE:1);if(s.x=M.x*g+r.x,s.z=M.z*g+r.y,r.multiplyScalar(Math.exp(-x*5)),M.jump&&o&&(s.y=QE*(l?.55:1),o=!1),s.y-=tM*x,d("x",s.x*x),d("z",s.z*x),v(s.y*x),n.x=Qe.clamp(n.x,-Nc,Nc),n.z=Qe.clamp(n.z,-Nc,Nc),S>.05&&!M.lockFacing){let E=Math.atan2(M.x,M.z)-a;E=Math.atan2(Math.sin(E),Math.cos(E)),a+=E*Math.min(1,x*14)}e.rotation.y=a,n.y<nM&&this.respawn(a),i.update(x,{speed:c,grounded:o,swimming:l,run:w})}}}function Qf(i,{joystickEl:t,jumpBtnEl:e,attackBtnEl:n,skillBtnsEl:s,onKey:r}){let o=new Set,a={dx:0,dy:0},c=0,h=!1,l=!1,u=!1,p=-1,f={x:0,y:0,id:null};window.addEventListener("keydown",w=>{if(h&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(w.code)&&w.preventDefault(),o.add(w.code),!w.repeat)){(w.code==="KeyF"||w.code==="KeyJ")&&(u=!0);let g={KeyQ:0,KeyE:1,KeyR:2};w.code in g&&(p=g[w.code]),r?.(w.code)}}),window.addEventListener("keyup",w=>o.delete(w.code)),window.addEventListener("blur",()=>o.clear());let y=new Map;i.addEventListener("contextmenu",w=>w.preventDefault()),i.addEventListener("pointerdown",w=>{h&&(i.setPointerCapture(w.pointerId),y.set(w.pointerId,{x:w.clientX,y:w.clientY,sx:w.clientX,sy:w.clientY,time:performance.now(),button:w.button}),i.classList.add("dragging"))});let _=0;i.addEventListener("pointermove",w=>{let g=y.get(w.pointerId);if(!g)return;let A=w.clientX-g.x,E=w.clientY-g.y;if(g.x=w.clientX,g.y=w.clientY,y.size>=2){let[T,b]=[...y.values()],C=Math.hypot(T.x-b.x,T.y-b.y);_&&(c+=(_-C)*4),_=C;return}_=0,a.dx+=A,a.dy+=E});let m=w=>{let g=y.get(w.pointerId);g&&w.type==="pointerup"&&g.button===0&&h&&Math.hypot(w.clientX-g.sx,w.clientY-g.sy)<6&&performance.now()-g.time<300&&(u=!0),y.delete(w.pointerId),y.size<2&&(_=0),y.size===0&&i.classList.remove("dragging")};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),i.addEventListener("wheel",w=>{h&&(w.preventDefault(),c+=w.deltaY)},{passive:!1});let d=t.querySelector(".knob"),v=48,x=w=>{let g=t.getBoundingClientRect(),A=w.clientX-(g.left+g.width/2),E=w.clientY-(g.top+g.height/2),T=Math.hypot(A,E);T>v&&(A=A/T*v,E=E/T*v),f.x=A/v,f.y=E/v,d.style.transform=`translate(${A}px, ${E}px)`};t.addEventListener("pointerdown",w=>{f.id=w.pointerId,t.setPointerCapture(w.pointerId),x(w)}),t.addEventListener("pointermove",w=>{w.pointerId===f.id&&x(w)});let M=w=>{w.pointerId===f.id&&(f.id=null,f.x=f.y=0,d.style.transform="")};t.addEventListener("pointerup",M),t.addEventListener("pointercancel",M),e.addEventListener("pointerdown",w=>{w.preventDefault(),l=!0}),e.addEventListener("pointerup",()=>{l=!1}),e.addEventListener("pointercancel",()=>{l=!1}),e.addEventListener("pointerleave",()=>{l=!1}),n.addEventListener("pointerdown",w=>{w.preventDefault(),h&&(u=!0)}),[...s.children].forEach((w,g)=>{w.addEventListener("pointerdown",A=>{A.preventDefault(),h&&(p=g)})});let S=(...w)=>w.some(g=>o.has(g));return{get enabled(){return h},set enabled(w){h=w,w||(o.clear(),y.clear(),l=!1,u=!1,p=-1)},move(){let w=(S("KeyW","ArrowUp")?1:0)-(S("KeyS","ArrowDown")?1:0),g=(S("KeyD","ArrowRight")?1:0)-(S("KeyA","ArrowLeft")?1:0);w+=-f.y,g+=f.x;let A=Math.hypot(w,g);return A>1&&(w/=A,g/=A),{forward:w,right:g}},jump(){return h&&(o.has("Space")||l)},run(){return h&&(S("ShiftLeft","ShiftRight")||Math.hypot(f.x,f.y)>.92)},consumeAttack(){let w=u;return u=!1,w},consumeSkill(){let w=p;return p=-1,w},consumeLook(){let w={dx:a.dx,dy:a.dy,zoom:c};return a.dx=a.dy=0,c=0,w}}}var oM=i=>"#"+i.toString(16).padStart(6,"0");function tp(i,t){let e=i.getContext("2d"),n=110,s=!1;function r(){let o=Math.min(window.devicePixelRatio,2),a=i.getBoundingClientRect();i.width=Math.round(a.width*o),i.height=Math.round(a.height*o)}return{get expanded(){return s},set expanded(o){s=o,i.classList.toggle("expanded",o),r()},resize:r,draw(o,a,c,h=[]){let l=i.width,u=i.height;if(!l||!u)return;let p=s?Gn-30:n,f=s?0:o.x,y=s?0:o.z,_=Math.min(l,u)/(p*2),m=g=>l/2+(g-f)*_,d=g=>u/2+(g-y)*_;e.fillStyle="#3b7fc0",e.fillRect(0,0,l,u),e.imageSmoothingEnabled=!0,e.drawImage(t.mapImage,m(-Gn),d(-Gn),Gn*2*_,Gn*2*_),e.lineWidth=1,e.strokeStyle="rgba(0,0,0,0.35)";for(let g of t.colliders){if(g.kind==="tree"||g.kind==="rock"||g.kind==="wall"||g.kind==="prop"||g.kind==="rail"||s&&g.kind!=="bridge"&&g.kind!=="house")continue;let A=g.box;e.fillStyle=oM(g.color),e.beginPath(),g.cyl?e.arc(m(g.cyl.x),d(g.cyl.z),Math.max(g.cyl.r*_,1.5),0,Math.PI*2):e.rect(m(A.min.x),d(A.min.z),(A.max.x-A.min.x)*_,(A.max.z-A.min.z)*_),e.fill(),e.stroke()}let v=m(o.x),x=d(o.z),M=l/i.getBoundingClientRect().width||1;e.fillStyle="#e0475a",e.strokeStyle="#ffffff",e.lineWidth=1.2*M;for(let g of h)e.beginPath(),e.arc(m(g.x),d(g.z),(g.big?3.6:2.6)*M,0,Math.PI*2),e.fill(),e.stroke();let S=Math.atan2(-Math.cos(c),-Math.sin(c));e.fillStyle="rgba(255,255,255,0.28)",e.beginPath(),e.moveTo(v,x),e.arc(v,x,34*M,S-.5,S+.5),e.closePath(),e.fill();let w=7*M;if(e.save(),e.translate(v,x),e.rotate(-a),e.fillStyle="#ffffff",e.strokeStyle="#1d8676",e.lineWidth=2.5*M,e.beginPath(),e.moveTo(0,w*1.3),e.lineTo(w,-w),e.lineTo(0,-w*.4),e.lineTo(-w,-w),e.closePath(),e.fill(),e.stroke(),e.restore(),s){e.font=`bold ${10*M}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.lineWidth=3*M,e.strokeStyle="rgba(28,26,58,0.8)",e.fillStyle="#ffffff";for(let g of na){let A=m(g.x),E=d(g.z)-8*M;e.strokeText(g.name,A,E),e.fillText(g.name,A,E)}e.font=`bold ${16*M}px "M PLUS Rounded 1c", sans-serif`,e.fillStyle="#f4c25b";for(let g of ji){let A=m(g.cx),E=d(g.cz+40);e.strokeText(g.name,A,E),e.fillText(g.name,A,E)}}e.fillStyle="rgba(20,24,32,0.75)",e.font=`bold ${11*M}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.fillText("N",l/2,13*M)}}}var aM=20,ep=(i,t,e=0)=>Dc.some(n=>Math.hypot(i-n.x,t-n.z)<n.r+e);function cM(i=7167891){let t=new yt,e=new yt;e.position.y=2,t.add(e);let n=new bt({color:i,roughness:.9,flatShading:!0}),s=new Pn(1,1),r=[[0,0,0,1.25],[.9,.2,-.2,.85],[-.9,.15,-.1,.9],[.3,.75,-.3,.8],[-.4,.6,.3,.7],[0,-.35,-.6,.8]];for(let[a,c,h,l]of r){let u=new F(s,n);u.position.set(a,c,h),u.scale.setScalar(l),u.castShadow=!0,e.add(u)}let o=new bt({color:16769899,emissive:16763195,emissiveIntensity:1});for(let a of[-1,1]){let c=new F(new te(.2,10,8),o);c.scale.set(1,.7,.5),c.position.set(a*.42,.1,1.18),c.rotation.z=a*-.35,e.add(c)}return{root:t,body:e,mats:[n],eyeMat:o,baseY:2,calmEye:16763195}}function lM(i=9407129){let t=new yt,e=new yt;e.position.y=1.7,t.add(e);let n=new bt({color:i,roughness:1,flatShading:!0}),s=new bt({color:7319119,roughness:1,flatShading:!0}),r=new F(new Zn(1.5,0),n);r.scale.set(1.1,.95,1),r.castShadow=!0;let o=new F(new te(1.4,8,6,0,Math.PI*2,0,Math.PI*.33),s);o.position.y=.3,e.add(r,o);let a=new Zn(.55,0),c=[];for(let l of[-1,1]){let u=new F(a,n);u.position.set(l*2,-.2,.3),u.castShadow=!0,e.add(u),c.push(u);let p=new F(a,n);p.scale.set(1,.7,1.2),p.position.set(l*.75,-1.35,.1),p.castShadow=!0,e.add(p)}let h=new bt({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let l of[-1,1]){let u=new F(new dt(.34,.16,.1),h);u.position.set(l*.5,.15,1.4),u.rotation.z=l*.2,e.add(u)}return{root:t,body:e,mats:[n,s],eyeMat:h,arms:c,baseY:1.7,calmEye:4183744}}var hM={kumodama:{name:"\u30AF\u30E2\u30C0\u30DE",hp:30,speed:7,radius:1.4,height:3.6,damage:8,exp:6,aggro:22,attackRange:7,windup:.45,cooldown:1.4,knockback:1,color:9404352,build:cM},ishimori:{name:"\u30A4\u30B7\u30E2\u30EA",hp:80,speed:4.5,radius:1.8,height:3.6,damage:15,exp:18,aggro:18,attackRange:8,windup:.6,cooldown:2.2,knockback:.45,color:9407129,build:lM}},mo=Ae.plateau,np=Ae.cave,uM=[["ishimori",mo.x+14,mo.z-14],["ishimori",mo.x-16,mo.z+4],["ishimori",mo.x+4,mo.z+16],["ishimori",np.x-3,np.z+5]];function ip(i,t,e){let n=[],s=[],r=new O;function o(g){let A=document.createElement("div");return A.className="enemy-label",A.innerHTML=`<span class="enemy-name">${g.name} <small>Lv${g.level}</small></span><div class="enemy-hp"><div></div></div>`,A.style.display="none",e.appendChild(A),{el:A,fill:A.querySelector(".enemy-hp div")}}let a=uM.map(([g,A,E])=>[g,A,E,null]);for(let g of ji){if(!g.enemies)continue;let A=ro(g.cx*17+g.cz*29+3);for(let[E,T]of Object.entries(g.enemies)){let b=0;for(let C=0;b<T.count&&C<800;C++){let H=g.cx+(A()-.5)*g.maxR*1.6,R=g.cz+(A()-.5)*g.maxR*1.6;t.groundHeight(H,R)<2.5||t.slopeAt(H,R)>.5||ep(H,R,8)||t.regionAt(H,R)===g&&(Object.values(g.places).some(I=>Math.hypot(H-I.x,R-I.z)<I.r)||a.some(([,I,D])=>Math.hypot(H-I,R-D)<14)||(a.push([E,H,R,T]),b++))}}}for(let[g,A,E,T]of a){let b=hM[g],C=T?.mult??1,H={...b,name:T?.name??b.name,hp:Math.round(b.hp*C),damage:Math.round(b.damage*C),exp:Math.round(b.exp*C),speed:b.speed*(1+(C-1)*.15),color:T?.tint??b.color,level:Math.round(1+(C-1)*5.5)},R=b.build(T?.tint);i.add(R.root);let I={T:H,type:g,model:R,home:new O(A,0,E),pos:new O,vel:new ft,facing:0,hp:H.hp,state:"wander",timer:0,cooldown:0,target:new O,dir:new ft,jumpFrom:new O,jumpTo:new O,hitDone:!1,flash:0,labelTimer:0,spawnT:1,bob:Math.random()*10,bleed:null,label:o(H)};n.push(I),c(I,!0)}function c(g,A=!1){g.hp=g.T.hp,g.pos.copy(g.home),g.pos.y=t.groundHeight(g.home.x,g.home.z),g.vel.set(0,0),g.state="wander",g.timer=Math.random()*2,g.target.copy(g.home),g.cooldown=0,g.spawnT=A?1:0,g.model.root.visible=!0,h(g,!1)}function h(g,A){let E=A?16734794:g.model.calmEye;g.model.eyeMat.emissive.setHex(E),g.model.eyeMat.color.setHex(A?16747130:g.model.calmEye)}function l(g){let A=Math.random()*Math.PI*2,E=3+Math.random()*10;g.target.set(g.home.x+Math.cos(A)*E,0,g.home.z+Math.sin(A)*E)}function u(g,A,E){let T=g.T.radius;for(let R of Dc){let I=g.pos.x-R.x,D=g.pos.z-R.z,z=Math.hypot(I,D);if(z<R.r+T){let N=(R.r+T)/Math.max(z,.001);g.pos.x=R.x+I*N,g.pos.z=R.z+D*N}}let b=t.groundHeight(g.pos.x,g.pos.z),C=t.groundHeight(A,E),H=Math.hypot(g.pos.x-A,g.pos.z-E);(b<1.2||g.state!=="attack"&&(b-C>H*1.1+.05||C-b>H*2+.05))&&(g.pos.x=A,g.pos.z=E,g.vel.set(0,0),g.state==="wander"&&l(g));for(let R of t.collidersNear(g.pos.x,g.pos.z)){if(R.box.min.y>g.pos.y+2||R.box.max.y<g.pos.y+.3||R.kind==="spawn")continue;let I,D;R.cyl?(I=R.cyl.x,D=R.cyl.z):(I=Qe.clamp(g.pos.x,R.box.min.x,R.box.max.x),D=Qe.clamp(g.pos.z,R.box.min.z,R.box.max.z));let z=T+(R.cyl?R.cyl.r:0),N=g.pos.x-I,B=g.pos.z-D,G=Math.hypot(N,B);G<z&&G>1e-4&&(g.pos.x=I+N/G*z,g.pos.z=D+B/G*z)}}function p(g,A,E,T,b){let C=A-g.pos.x,H=E-g.pos.z,R=Math.hypot(C,H);if(R<.3)return R;let I=Math.min(R,T*b);return g.pos.x+=C/R*I,g.pos.z+=H/R*I,f(g,C,H,b),R}function f(g,A,E,T){let C=Math.atan2(A,E)-g.facing;C=Math.atan2(Math.sin(C),Math.cos(C)),g.facing+=C*Math.min(1,T*8)}let y=new Pn(.3,0);function _(g,A,E=14){let T=new bt({color:A,flatShading:!0,transparent:!0});for(let b=0;b<E;b++){let C=new F(y,T);C.position.copy(g);let H=Math.random()*Math.PI*2,R=4+Math.random()*6;s.push({mesh:C,t:0,life:.7+Math.random()*.3,vel:new O(Math.cos(H)*R,5+Math.random()*8,Math.sin(H)*R)}),i.add(C)}}let m=new Li(.8,1,32);function d(g,A){let E=new F(m,new Ee({color:16769184,transparent:!0,side:le,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.set(g.x,g.y+.15,g.z),i.add(E),s.push({mesh:E,t:0,life:.4,ring:A})}function v(g){for(let A=s.length-1;A>=0;A--){let E=s[A];E.t+=g;let T=E.t/E.life;if(T>=1){i.remove(E.mesh),s.splice(A,1);continue}if(E.ring)E.mesh.scale.setScalar(1+T*E.ring),E.mesh.material.opacity=1-T;else{E.vel.y-=30*g,E.mesh.position.addScaledVector(E.vel,g);let b=t.groundHeight(E.mesh.position.x,E.mesh.position.z)+.2;E.mesh.position.y<b&&(E.mesh.position.y=b,E.vel.multiplyScalar(.5),E.vel.y=Math.abs(E.vel.y)),E.mesh.scale.setScalar(1-T*.8),E.mesh.material.opacity=1-T*T,E.mesh.rotation.x+=g*8}}}function x(g,A,E,T=1,b=!0){let C=Math.max(1,Math.round(A*(.85+Math.random()*.3)));if(g.hp-=C,g.flash=.15,g.labelTimer=5,E&&T>0){let R=g.pos.x-E.x,I=g.pos.z-E.z,D=Math.max(Math.hypot(R,I),.001),z=12*g.T.knockback*T;g.vel.set(R/D*z,I/D*z)}let H=new O(g.pos.x,g.pos.y+g.T.height,g.pos.z);return g.hp<=0?(M(g),{enemy:g,pos:H,damage:C,killed:!0,exp:g.T.exp,name:g.T.name}):(b&&g.state!=="attack"&&(g.state="hurt",g.timer=.35),h(g,!0),{enemy:g,pos:H,damage:C,killed:!1,exp:0,name:g.T.name})}function M(g){g.state="dead",g.bleed=null,g.timer=aM,g.model.root.visible=!1,g.label.el.style.display="none",_(r.copy(g.pos).setY(g.pos.y+g.model.baseY),g.T.color)}function S(g,A){let E=A.playerPos,T=ep(E.x,E.z)||A.playerSwimming;for(let b of n){if(b.state==="dead"){b.timer-=g,b.timer<=0&&c(b);continue}let C=Math.hypot(E.x-b.pos.x,E.z-b.pos.z);if(b.model.root.visible=C<260,C>180)continue;if(b.bleed&&(b.bleed.tick-=g,b.bleed.tick<=0)){b.bleed.tick=1,b.bleed.left--;let q=x(b,b.bleed.dmg,null,0,!1);if(A.onBleed?.(q),b.bleed&&b.bleed.left<=0&&(b.bleed=null),b.state==="dead")continue}let H=b.T,R=b.pos.x,I=b.pos.z,D=E.x-b.pos.x,z=E.z-b.pos.z,N=Math.hypot(D,z),B=A.playerActive&&!T&&Math.abs(E.y-b.pos.y)<4;b.cooldown-=g,b.timer-=g,b.labelTimer-=g;let G=0;switch(b.state){case"wander":{if(B&&N<H.aggro){b.state="chase",h(b,!0);break}if(b.timer>0)break;p(b,b.target.x,b.target.z,H.speed*.35,g)<.5&&(b.timer=1+Math.random()*3,l(b));break}case"return":{if(B&&N<H.aggro){b.state="chase",h(b,!0);break}p(b,b.home.x,b.home.z,H.speed*.7,g)<1&&(b.state="wander",b.timer=1);break}case"chase":{if(!B||N>H.aggro*1.8){b.state="return",h(b,!1);break}if(N<H.attackRange&&b.cooldown<=0){b.state="windup",b.timer=H.windup;break}N>H.radius+1.2?p(b,E.x,E.z,H.speed,g):f(b,D,z,g);break}case"windup":{if(f(b,D,z,g),b.timer<=0){b.state="attack",b.hitDone=!1;let q=Math.max(N,.001);if(b.dir.set(D/q,z/q),b.type==="ishimori"){let Q=Math.min(N,8);b.jumpFrom.copy(b.pos),b.jumpTo.set(b.pos.x+b.dir.x*Q,0,b.pos.z+b.dir.y*Q),b.timer=.55}else b.timer=.35}break}case"attack":{if(b.type==="ishimori"){let q=1-Math.max(b.timer,0)/.55;if(b.pos.lerpVectors(b.jumpFrom,b.jumpTo,q),G=Math.sin(q*Math.PI)*3.5,b.timer<=0){d(b.pos,5);let Q=Math.hypot(E.x-b.pos.x,E.z-b.pos.z);B&&Q<4.5&&E.y-b.pos.y<1.5&&A.onHitPlayer(H.damage,b.pos.x,b.pos.z),b.state="recover",b.timer=.7,b.cooldown=H.cooldown}}else{b.pos.x+=b.dir.x*20*g,b.pos.z+=b.dir.y*20*g;let q=Math.hypot(E.x-b.pos.x,E.z-b.pos.z);!b.hitDone&&B&&q<H.radius+1.1&&(b.hitDone=!0,A.onHitPlayer(H.damage,b.pos.x,b.pos.z)),b.timer<=0&&(b.state="recover",b.timer=.5,b.cooldown=H.cooldown)}break}case"recover":case"hurt":{b.timer<=0&&(b.state=B?"chase":"return");break}}b.pos.x+=b.vel.x*g,b.pos.z+=b.vel.y*g,b.vel.multiplyScalar(Math.exp(-g*6)),u(b,R,I),b.pos.y=t.groundHeight(b.pos.x,b.pos.z);for(let q of n){if(q===b||q.state==="dead")continue;let Q=b.pos.x-q.pos.x,ut=b.pos.z-q.pos.z,Tt=Math.hypot(Q,ut),_t=b.T.radius+q.T.radius;Tt<_t&&Tt>.001&&(b.pos.x+=Q/Tt*(_t-Tt)*.5,b.pos.z+=ut/Tt*(_t-Tt)*.5)}let X=b.model;b.bob+=g,b.spawnT=Math.min(1,b.spawnT+g*2),X.root.position.set(b.pos.x,b.pos.y+G,b.pos.z),X.root.rotation.y=b.facing,X.root.scale.setScalar(b.spawnT);let nt=1;if(b.state==="windup"&&(nt=1-(1-b.timer/H.windup)*.25+Math.sin(b.bob*50)*.03),b.type==="kumodama")X.body.position.y=X.baseY+Math.sin(b.bob*3)*.25,X.body.rotation.z=Math.sin(b.bob*2)*.08;else{let q=b.state==="chase"||b.state==="return"||b.state==="wander"&&b.timer<=0;X.body.position.y=X.baseY+(q?Math.abs(Math.sin(b.bob*8))*.2:0),X.arms[0].position.y=-.2+Math.sin(b.bob*3)*.15,X.arms[1].position.y=-.2+Math.sin(b.bob*3+1)*.15}X.body.scale.set(1/Math.sqrt(nt),nt,1/Math.sqrt(nt)),b.flash=Math.max(0,b.flash-g);for(let q of X.mats)q.emissive.setHex(16777215),q.emissiveIntensity=b.flash>0?.8:0}v(g)}function w(g){for(let A of n){let E=A.label.el;if(!(A.state!=="dead"&&(A.labelTimer>0||A.state==="chase"||A.state==="windup"||A.state==="attack"))){E.style.display="none";continue}if(r.set(A.pos.x,A.pos.y+A.T.height+.9,A.pos.z),r.distanceTo(g.position)>70){E.style.display="none";continue}if(r.project(g),r.z>1){E.style.display="none";continue}E.style.display="";let b=(r.x+1)/2*window.innerWidth,C=(1-r.y)/2*window.innerHeight;E.style.transform=`translate(-50%, -100%) translate(${b}px, ${C}px)`,A.label.fill.style.width=Math.max(0,A.hp)/A.T.hp*100+"%"}}return{list:n,update:S,updateLabels:w,attack(g,A,{range:E,arc:T,damage:b,knockback:C=1,bleed:H=!1}){let R=Math.sin(A),I=Math.cos(A);return this.hitArea(D=>{let z=D.pos.x-g.x,N=D.pos.z-g.z,B=Math.hypot(z,N);if(B-D.T.radius>E||Math.abs(g.y-D.pos.y)>3.5)return!1;let G=(z*R+N*I)/Math.max(B,.001);return B<=D.T.radius+.5||Math.acos(Qe.clamp(G,-1,1))<=T/2},{damage:b,knockback:C,from:g,bleed:H})},hitArea(g,{damage:A,knockback:E=1,from:T,bleed:b=!1}){let C=[];for(let H of n){if(H.state==="dead"||H.spawnT<1||!g(H))continue;let R=x(H,A,T,E);b&&!R.killed&&(H.bleed={left:3,tick:1,dmg:Math.max(1,Math.round(A*.2))}),C.push(R)}return C},calmDown(){for(let g of n)g.state!=="dead"&&(g.state="return",h(g,!1))},alive(){return n.filter(g=>g.state!=="dead").map(g=>({x:g.pos.x,z:g.pos.z,big:g.type==="ishimori"}))}}}function sp(i){let t=[],e=new O,n=1.1;return{add(s,r,o=""){let a=document.createElement("div");a.className="popup-text "+o,a.textContent=r,i.appendChild(a),t.push({el:a,pos:s.clone(),t:0,dx:(Math.random()-.5)*1.2})},update(s,r){for(let o=t.length-1;o>=0;o--){let a=t[o];if(a.t+=s,a.t>n){a.el.remove(),t.splice(o,1);continue}if(e.copy(a.pos),e.y+=a.t*2,e.x+=a.dx*a.t,e.project(r),e.z>1){a.el.style.display="none";continue}a.el.style.display="";let c=(e.x+1)/2*window.innerWidth,h=(1-e.y)/2*window.innerHeight,l=a.t<.12?.6+a.t/.12*.7:1.3-Math.min(a.t,.4)*.75;a.el.style.transform=`translate(-50%, -50%) translate(${c}px, ${h}px) scale(${l})`,a.el.style.opacity=a.t>n*.65?(n-a.t)/(n*.35):1}},clear(){for(let s of t)s.el.remove();t.length=0}}}var sa=4,ln=2,rp=.3,dM=2.8,go=1.2,fM={snow:["cold"],highlands:["cold"],desert:["heat"],volcano:["heat","fire"],marsh:["water"],forest:["water"]},pM=.6,Vh=(i,t={})=>new bt({color:i,roughness:.85,flatShading:!0,...t}),vs=(i,t,e,n,s,r,o)=>{let a=new F(new dt(i,t,e),n);return a.position.set(s,r,o),a.castShadow=a.receiveShadow=!0,a},mM=(i,t=.72)=>new j(i).multiplyScalar(t).getHex();function gM(i){let t=new yt;for(let e of[-ln+.18,0,ln-.18]){let n=e===0?2.3:2.6;t.add(vs(.34,n+go,.34,i.post,e,(n-go)/2,0));let s=new F(new Yt(.26,.4,4),i.post);s.position.set(e,n+.2,0),s.rotation.y=Math.PI/4,s.castShadow=!0,t.add(s)}return t.add(vs(ln*2,.26,.14,i.plank,0,.85,.12)),t.add(vs(ln*2,.26,.14,i.plank,0,1.75,.12)),{group:t}}function xM(i){let t=new yt;for(let h of[-ln+.2,ln-.2])t.add(vs(.4,3.3+go,.4,i.post,h,(3.3-go)/2,0));t.add(vs(ln*2,.34,.44,i.post,0,3.4,0));let e=new yt;e.position.set(-ln+.42,0,0);let n=ln*2-.84,s=new yt;s.position.x=n/2;let r=4;for(let h=0;h<r;h++)s.add(vs(n/r-.04,2.8,.16,i.plank,-n/2+(h+.5)*(n/r),1.5,0));s.add(vs(n,.24,.1,i.post,0,.6,.12)),s.add(vs(n,.24,.1,i.post,0,2.4,.12));let o=vs(Math.hypot(n,1.8)-.2,.2,.08,i.post,0,1.5,.13);o.rotation.z=Math.atan2(1.8,n),s.add(o);let a=new F(new te(.12,8,6),i.knob);a.position.set(n/2-.35,1.5,.22);let c=a.clone();return c.position.z=-.22,s.add(a,c),e.add(s),t.add(e),{group:t,hinge:e}}var op={fence:gM,door:xM};function ap(i,t){let e=[],n=new Map,s=Vh(16040539,{metalness:.5,roughness:.35});function r(d){if(!n.has(d)){let v=nn[d].plank,x=d==="woodCrystal"?{emissive:6312096,emissiveIntensity:.35}:{};n.set(d,{plank:Vh(v,x),post:Vh(mM(v),x),knob:s})}return n.get(d)}let o=new Ee({color:8384704,transparent:!0,opacity:.45,depthWrite:!1}),a=new Ee({color:16738906,transparent:!0,opacity:.45,depthWrite:!1}),c={plank:o,post:o,knob:o},h={};for(let[d,v]of Object.entries(op)){let x=v(c);x.group.traverse(M=>{M.isMesh&&(M.castShadow=M.receiveShadow=!1)}),x.group.visible=!1,i.add(x.group),h[d]=x.group}let l=null;function u(d,v,x,M,S=0){let w=M?ln:rp,g=M?rp:ln;return new he(new O(d-w+S,v-go+S,x-g+S),new O(d+w-S,v+dM+.6-S,x+g-S))}function p(d,v,x,M){let S=Math.sin(x),w=Math.cos(x),g=v.x+S*4.5,A=v.z+w*4.5,E=Math.abs(w)>=Math.abs(S);M&&(E=!E);let T=X=>Math.floor(X/sa)*sa+sa/2,b=X=>Math.round(X/sa)*sa,C=E?T(g):b(g),H=E?b(A):T(A),I=(E?[[C-ln,H],[C,H],[C+ln,H]]:[[C,H-ln],[C,H],[C,H+ln]]).map(([X,nt])=>t.groundHeight(X,nt)),D=I[1],z={type:d,x:C,z:H,y:D,alongX:E,ok:!0,reason:""},N=X=>(z.ok=!1,z.reason=X,z);if(Math.min(...I)<t.waterLevel+.2)return N("\u6C34\u306E\u4E0A\u306B\u306F\u5EFA\u3066\u3089\u308C\u306A\u3044");if(Math.max(...I)-Math.min(...I)>2.4)return N("\u5742\u304C\u6025\u3059\u304E\u3066\u5EFA\u3066\u3089\u308C\u306A\u3044");let B=u(C,D,H,E,.15);B.min.y=D+.2;for(let X of t.collidersNear(C,H))if(!X.box.isEmpty()&&X.box.intersectsBox(B))return N("\u307B\u304B\u306E\u7269\u3068\u3076\u3064\u304B\u308B");return new he(new O(v.x-.9,v.y,v.z-.9),new O(v.x+.9,v.y+5,v.z+.9)).intersectsBox(B)?N("\u81EA\u5206\u3068\u91CD\u306A\u3063\u3066\u3044\u308B"):z}function f(d,v,x){let M=nn[d],S=t.regionAt(v,x),w=fM[S?.id]??[],g=w.filter(E=>!M.resist[E]),A=w.filter(E=>M.resist[E]);return{mult:g.length?pM:1,weak:g.map(E=>`${S.name}\u3067\u306F${Qi[E].effect}`),strong:A.map(E=>`${Qi[E].name}\u306B\u5F37\u3044\u306E\u3067\u3001${S.name}\u3067\u3082\u5E73\u6C17`)}}function y(d){if(!l||!l.ok)return{ok:!1,reason:l?.reason??""};let{type:v,x,y:M,z:S,alongX:w}=l,g=op[v](r(d)),A=g.group;A.position.set(x,M,S),A.rotation.y=w?0:Math.PI/2,i.add(A);let E=nn[d],T=f(d,x,S),b=Math.round(E.durability*(v==="door"?1.2:1)*T.mult),C={type:v,woodId:d,x,y:M,z:S,alongX:w,group:A,hinge:g.hinge,hp:b,maxHp:b,colliders:[],shake:0,open:!1,angle:0,target:0},H=E.plank;if(v==="fence")C.colliders.push({box:u(x,M,S,w),color:H,kind:"fence",structure:C});else{let R=D=>{let z=w?x+D:x,N=w?S:S+D;return{box:new he(new O(z-.3,M-go,N-.3),new O(z+.3,M+3.6,N+.3)),color:H,kind:"fence",structure:C}};C.colliders.push(R(-ln+.2),R(ln-.2));let I=u(x,M,S,w);w?(I.min.x+=.45,I.max.x-=.45):(I.min.z+=.45,I.max.z-=.45),C.panel={box:I,color:H,kind:"fence",structure:C},C.colliders.push(C.panel)}return C.colliders.forEach(R=>t.addCollider(R)),e.push(C),{ok:!0,structure:C,env:T}}function _(d){i.remove(d.group),d.group.traverse(v=>{v.isMesh&&v.geometry.dispose()});for(let v of d.colliders)v===d.panel&&d.open||t.removeCollider(v);e.splice(e.indexOf(d),1)}let m=new O;return{get count(){return e.length},preview(d,v,x,M,S){for(let[A,E]of Object.entries(h))E.visible=A===d;if(!d)return l=null,null;l=p(d,v,x,M);let w=h[d];w.position.set(l.x,l.y,l.z),w.rotation.y=l.alongX?0:Math.PI/2;let g=l.ok?o:a;return w.traverse(A=>{A.isMesh&&(A.material=g)}),o.color.set(nn[S].plank).lerp(new j(8384704),.5),l},place:y,climate:f,hit(d,v,{range:x,arc:M,damage:S}){let w=[],g=Math.sin(v),A=Math.cos(v);for(let E of[...e]){let T=E.alongX?Qe.clamp(d.x,E.x-ln,E.x+ln):E.x,b=E.alongX?E.z:Qe.clamp(d.z,E.z-ln,E.z+ln),C=T-d.x,H=b-d.z,R=Math.hypot(C,H);if(R>x+.6||Math.abs(E.y-d.y)>5||R>1.2&&Math.acos(Qe.clamp((C*g+H*A)/R,-1,1))>M/2)continue;let I=E.woodId==="woodMaple"?.8:1,D=Math.max(1,Math.round(S*I*(.9+Math.random()*.2)));E.hp-=D,E.shake=.3;let z=E.hp<=0,N=m.set(T,E.y+1.6,b).clone();z&&_(E),w.push({pos:N,damage:D,destroyed:z,name:nn[E.type].name,hp:Math.max(0,E.hp),maxHp:E.maxHp,woodId:E.woodId})}return w},nearestDoor(d,v=5){let x=null,M=v;for(let S of e){if(S.type!=="door")continue;let w=Math.hypot(d.x-S.x,d.z-S.z);w<M&&Math.abs(d.y-S.y)<4&&(M=w,x=S)}return x},toggleDoor(d,v,x){if(!d.open){let M=d.alongX?Math.sign(v.z-d.z):Math.sign(v.x-d.x);return d.target=(M||1)*1.7,d.open=!0,t.removeCollider(d.panel),!0}return x&&x.intersectsBox(d.panel.box)?!1:(d.target=0,d.open=!1,t.addCollider(d.panel),!0)},update(d){for(let v of e){if(v.hinge&&v.angle!==v.target){let x=d*6;v.angle+=Qe.clamp(v.target-v.angle,-x,x),v.hinge.rotation.y=v.angle}if(v.shake>0){v.shake=Math.max(0,v.shake-d);let x=Math.sin(v.shake*60)*.12*(v.shake/.3);v.group.position.set(v.x+(v.alongX?0:x),v.y,v.z+(v.alongX?x:0))}}}}}var cp=i=>new O(Math.sin(i),0,Math.cos(i)),lp=i=>i.clone().setY(i.y+3),es={bloodGale:{name:"\u8840\u98A8\u65AC",key:"Q",desc:"\u6B8B\u50CF\u3092\u6B8B\u3057\u3066\u99C6\u3051\u629C\u3051\u3001\u901A\u308A\u9053\u3092\u65AC\u308B\u3002\u5C11\u3057\u9045\u308C\u3066\u3001\u901A\u308A\u9053\u304B\u3089\u8840\u306E\u68D8\u304C\u5674\u304D\u51FA\u3059\uFF08\u99C6\u3051\u629C\u3051\u308B\u9593\u306F\u7121\u6575\uFF09",cooldown:5,duration:.62,anim:6,start(i,t){let e=cp(i.player.facing);t.dir=e,t.from=i.player.position.clone(),t.to=t.from.clone().addScaledVector(e,14),t.ghosts=0,t.cut=!1,t.burst=!1,i.invuln(.55),i.player.knockback(e.x*58,e.z*58),i.fovKick(8)},update(i,t,e){for(;t.ghosts<5&&e>=t.ghosts*.04;)i.fx.afterimage(i.character.object,.35),t.ghosts++;if(!t.cut&&e>=.16){t.cut=!0,i.fx.streak(t.from,i.player.position.clone().addScaledVector(t.dir,2),3,.8);let n=t.from,s=t.to;t.hits=i.enemies.hitArea(r=>pr(r.pos.x,r.pos.z,n.x,n.z,s.x,s.z)<2.8+r.T.radius&&Math.abs(r.pos.y-n.y)<5,{damage:i.power(2.4),knockback:.6,from:n});for(let r of t.hits)i.fx.burst(r.pos,18,9);t.hits.length&&(i.hitStop(.08),i.shake(.5)),i.applyHits(t.hits)}if(!t.burst&&e>=.5){t.burst=!0;let n=t.from,s=t.to;for(let o=0;o<=6;o++){let a=n.clone().lerp(s,o/6);i.fx.spike(a.x,a.z,3.8,1.1)}i.fx.flash(n.clone().lerp(s,.5),90,35,.4);let r=i.enemies.hitArea(o=>pr(o.pos.x,o.pos.z,n.x,n.z,s.x,s.z)<3+o.T.radius&&Math.abs(o.pos.y-n.y)<5,{damage:i.power(1.5),knockback:.8,from:n,bleed:!0});for(let o of r)i.fx.burst(o.pos,12,7);i.shake(.35),i.applyHits(r)}}},crimsonMoon:{name:"\u7D05\u6708\u589C\u3068\u3057",key:"E",desc:"\u9AD8\u304F\u8DF3\u3073\u4E0A\u304C\u3063\u3066\u53E9\u304D\u3064\u3051\u3001\u4E09\u91CD\u306E\u885D\u6483\u6CE2\u30FB\u8840\u306E\u68D8\u306E\u8F2A\u30FB\u8840\u306E\u67F1\u3092\u5674\u304D\u4E0A\u3052\u308B",cooldown:8,duration:.95,anim:7,start(i,t){let e=cp(i.player.facing);i.player.knockback(e.x*8,e.z*8,36),i.invuln(.8),t.done=!1,t.wave=0},update(i,t,e){if(!t.done&&e>=.62){t.done=!0,t.c=i.player.position.clone();let n=t.c;i.fx.nova(n.clone().setY(n.y+.5),6,.35),i.fx.flash(n,160,45,.5),i.fx.burst(n.clone().setY(n.y+.5),40,13);for(let r=0;r<14;r++){let o=r/14*Math.PI*2;i.fx.spike(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,3.4,1.1)}for(let r=0;r<6;r++){let o=r/6*Math.PI*2+.3;i.fx.pillar(n.x+Math.cos(o)*9,n.z+Math.sin(o)*9,16,.9,1.3)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<10+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(3.2),knockback:3,from:n});for(let r of s)i.fx.burst(r.pos,14,8);i.shake(1),i.screenFlash(.6),i.fovKick(-6),s.length&&i.hitStop(.14),i.applyHits(s)}for(;t.done&&t.wave<3&&e>=.62+t.wave*.1;)i.fx.ring(t.c,8+t.wave*4,.5+t.wave*.15,t.wave===1?9046040:16722490),t.wave++}},bloodRelease:{name:"\u9BAE\u8840\u89E3\u653E",key:"R",desc:"HP \u3092 20% \u6367\u3052\u3001\u307E\u308F\u308A\u3092\u5439\u304D\u98DB\u3070\u3059\u8840\u306E\u7206\u767A\u3092\u8D77\u3053\u3059\u300210 \u79D2\u9593\u3001\u653B\u6483\u529B 1.8 \u500D\u30FB\u5438\u8840 25%\u3001\u5263\u3092\u632F\u308B\u305F\u3073\u306B\u8840\u306E\u65AC\u6483\u6CE2\u304C\u98DB\u3076",cooldown:25,duration:1,anim:9,canUse(i){let t=Math.ceil(i.stats.maxHp*.2);return i.stats.hp<=t+1?(i.toast("HP \u304C\u8DB3\u308A\u306A\u3044\u2026"),!1):!0},start(i,t){let e=Math.ceil(i.stats.maxHp*.2);i.stats.hp-=e,i.popup(i.player.position.clone().setY(i.player.position.y+5.5),`-${e}`,"hurt"),i.invuln(1),t.done=!1},update(i,t,e){if(t.done||e<.5)return;t.done=!0;let n=i.player.position.clone();i.fx.nova(lp(n),14,.7),i.fx.ring(n,16,.8),i.fx.ring(n,10,.6,9046040),i.fx.burst(lp(n),50,12),i.fx.flash(n,200,50,.7);for(let r=0;r<8;r++){let o=r/8*Math.PI*2;i.fx.pillar(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,20,1.1,1.1)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<12+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(2.6),knockback:3.2,from:n});i.applyHits(s),i.shake(1.1),i.screenFlash(.9),i.fovKick(10),i.startBuff({name:"\u9BAE\u8840\u89E3\u653E",time:10,atk:1.8,lifesteal:.25,waves:!0})}}};function hp(i,t){let e=[],r=new Pn(.16,0),o=new bt({color:11538462,emissive:5242888,emissiveIntensity:.6,roughness:.3,transparent:!0}),a=new Li(.85,1,48),c=new dt(.28,.1,.18),h=new Yt(.45,1,5).translate(0,.5,0),l=new bt({color:13639738,emissive:8390680,emissiveIntensity:.9,flatShading:!0,roughness:.2,metalness:.2,transparent:!0}),u=new qe(16724032,0,30);i.add(u);let p=0,f=0,y=0,_=(m,d,v)=>{i.add(m),e.push({mesh:m,life:d,t:0,update:v})};return{burst(m,d=14,v=7){for(let x=0;x<d;x++){let M=new F(r,o);M.position.copy(m);let S=Math.random()*Math.PI*2,w=v*(.4+Math.random()*.8),g=new O(Math.cos(S)*w,4+Math.random()*7,Math.sin(S)*w);M.scale.setScalar(.6+Math.random()*.9),_(M,.6+Math.random()*.4,(A,E)=>{g.y-=28*E,M.position.addScaledVector(g,E);let T=t(M.position.x,M.position.z)+.1;M.position.y<T&&(M.position.y=T,g.set(0,0,0),M.scale.y=.25),M.material.opacity=1})}},chips(m,d=8,v=11897438){let x=new bt({color:v,roughness:.9,flatShading:!0});for(let M=0;M<d;M++){let S=new F(c,x);S.position.copy(m);let w=Math.random()*Math.PI*2,g=3+Math.random()*4,A=new O(Math.cos(w)*g,3+Math.random()*5,Math.sin(w)*g),E=new O(Math.random()*10,Math.random()*10,Math.random()*10);_(S,.8,(T,b)=>{A.y-=25*b,S.position.addScaledVector(A,b),S.rotation.x+=E.x*b,S.rotation.y+=E.y*b;let C=t(S.position.x,S.position.z)+.08;S.position.y<C&&(S.position.y=C,A.set(0,0,0),E.set(0,0,0))})}},ring(m,d,v=.5,x=16722490){let M=new F(a,new Ee({color:x,transparent:!0,side:le,depthWrite:!1,blending:$n}));M.rotation.x=-Math.PI/2,M.position.set(m.x,m.y+.2,m.z),_(M,v,S=>{let w=S.t/S.life;M.scale.setScalar(.5+d*(1-Math.pow(1-w,3))),M.material.opacity=1-w})},streak(m,d,v=2.2,x=.6){let M=m.distanceTo(d),S=new F(new wn(v,M),new Ee({color:16722490,transparent:!0,side:le,depthWrite:!1,blending:$n}));S.position.copy(m).lerp(d,.5),S.position.y+=1.6,S.lookAt(d.x,S.position.y,d.z),S.rotateX(Math.PI/2),_(S,x,w=>{let g=w.t/w.life;S.material.opacity=.8*(1-g),S.scale.x=1-g*.7})},spike(m,d,v=3.5,x=1.3){let M=t(m,d),S=new yt;S.position.set(m,M-.3,d);let w=3+Math.floor(Math.random()*3);for(let g=0;g<w;g++){let A=new F(h,l.clone()),E=v*(.5+Math.random()*.6);A.scale.set(.6+Math.random()*.5,E,.6+Math.random()*.5),A.position.set((Math.random()-.5)*1.4,0,(Math.random()-.5)*1.4),A.rotation.set((Math.random()-.5)*.7,Math.random()*3,(Math.random()-.5)*.7),A.userData.h=E,S.add(A)}_(S,x,g=>{let A=g.t/g.life,E=A<.12?A/.12:A>.7?1-(A-.7)/.3:1;S.children.forEach(T=>{T.scale.y=T.userData.h*Math.max(E,.001),T.material.opacity=A>.7?1-(A-.7)/.3:1})})},aura(m){let v=new Float32Array(150),x=Array.from({length:50},()=>({a:Math.random()*Math.PI*2,r:.6+Math.random()*1.2,y:Math.random()*5,v:1.5+Math.random()*2})),M=new ae;M.setAttribute("position",new pe(v,3));let S=new Ke(M,new Xe({color:16722490,size:.28,transparent:!0,opacity:.9,depthWrite:!1,blending:$n}));S.frustumCulled=!1;let w=new F(a,new Ee({color:16722490,transparent:!0,opacity:.5,side:le,depthWrite:!1,blending:$n}));w.rotation.x=-Math.PI/2;let g=new yt;g.add(S,w);let A=!0;return _(g,1/0,(E,T)=>{g.position.copy(m.position),w.position.y=.15,w.scale.setScalar(1.6+Math.sin(E.t*6)*.15);for(let b=0;b<50;b++){let C=x[b];C.y+=C.v*T,C.y>5.5&&(C.y=0),C.a+=T*1.5,v[b*3]=Math.cos(C.a)*C.r,v[b*3+1]=C.y,v[b*3+2]=Math.sin(C.a)*C.r}M.attributes.position.needsUpdate=!0,A||(E.life=E.t)}),{stop(){A=!1}}},afterimage(m,d=.35){let v=m.clone(!0),x=new Ee({color:16722490,transparent:!0,opacity:.55,depthWrite:!1,blending:$n});v.traverse(M=>{(M.isMesh||M.isPoints)&&(M.material=x,M.castShadow=!1)}),v.position.copy(m.position),v.rotation.copy(m.rotation),_(v,d,M=>{x.opacity=.55*(1-M.t/M.life)})},pillar(m,d,v=14,x=.9,M=1.4){let S=t(m,d),w=new F(new Pt(M*.6,M,1,12,1,!0).translate(0,.5,0),new Ee({color:16722490,transparent:!0,side:le,depthWrite:!1,blending:$n}));w.position.set(m,S,d),_(w,x,g=>{let A=g.t/g.life;w.scale.set(1+A*.5,v*Math.min(1,A*6),1+A*.5),w.material.opacity=.85*(1-A),w.rotation.y+=.2}),this.burst(new O(m,S+1,d),8,5)},nova(m,d=12,v=.6){let x=new F(new te(1,24,16),new Ee({color:16722490,transparent:!0,depthWrite:!1,blending:$n,side:le}));x.position.copy(m),_(x,v,M=>{let S=M.t/M.life;x.scale.setScalar(.5+d*(1-Math.pow(1-S,3))),x.material.opacity=.6*(1-S)})},flash(m,d=80,v=30,x=.35){u.position.copy(m),u.position.y+=2,u.distance=v,y=d,p=x,f=0},crescent(m,d,{speed:v=42,life:x=.55,size:M=3.2,onMove:S}={}){let w=new yt,g=new F(new Jn(M,M*.14,6,24,Math.PI),new Ee({color:16722490,transparent:!0,depthWrite:!1,blending:$n,side:le}));g.rotation.set(-Math.PI/2,0,Math.PI),g.scale.z=.4,w.add(g),w.position.copy(m),w.lookAt(m.x+d.x,m.y,m.z+d.z),_(w,x,(A,E)=>{w.position.addScaledVector(d,v*E);let T=A.t/A.life;g.material.opacity=.9*(1-T*T),w.scale.setScalar(1+T*.4),S?.(w.position)})},update(m){f<p?(f+=m,u.intensity=y*Math.max(0,1-f/p)):u.intensity=0;for(let d=e.length-1;d>=0;d--){let v=e[d];v.t+=m,v.update(v,m),v.t>=v.life&&(i.remove(v.mesh),e.splice(d,1))}}}}var Dt=i=>document.getElementById(i),up=["\u30D2\u30F3\u30C8\uFF1A\u65C5\u306F\u5CF6\u306E\u4E2D\u592E\u306B\u3042\u308B\u661F\u306E\u796D\u58C7\u304B\u3089\u59CB\u307E\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730\u306E\u5854\u306E\u3066\u3063\u307A\u3093\u306B\u3001\u30AF\u30EA\u30B9\u30BF\u30EB\u304C\u7720\u3063\u3066\u3044\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A4\u672C\u306E\u5927\u6A4B\u3092\u6E21\u308B\u3068\u3001\u305D\u308C\u305E\u308C\u5225\u306E\u5CF6\u3078\u884C\u3051\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u5CF6\u306F\u3068\u3066\u3082\u5E83\u3044\u3002M \u30AD\u30FC\u306E\u5730\u56F3\u3067\u540D\u6240\u3092\u63A2\u3057\u3066\u307F\u3088\u3046","\u30D2\u30F3\u30C8\uFF1A\u9060\u304F\u306E\u5730\u65B9\u307B\u3069\u9B54\u7269\u304C\u5F37\u304F\u306A\u308A\u307E\u3059\u3002\u30EC\u30D9\u30EB\u3092\u4E0A\u3052\u3066\u304B\u3089\u884C\u3053\u3046","\u30D2\u30F3\u30C8\uFF1A\u6D77\u3084\u6E56\u3067\u306F\u6CF3\u3052\u307E\u3059\u3002\u6CF3\u3044\u3067\u3044\u308B\u9593\u306F\u9B54\u7269\u306B\u8972\u308F\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30B7\u30AA\u30AB\u30BC\u6751\u306F\u5B89\u5168\u5730\u5E2F\u3067\u3059","\u30D2\u30F3\u30C8\uFF1AM \u30AD\u30FC\u3067\u5CF6\u306E\u5730\u56F3\u3092\u5927\u304D\u304F\u8868\u793A\u3067\u304D\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u796D\u58C7\u306E\u307E\u308F\u308A\u306F\u5B89\u5168\u5730\u5E2F\u3002\u9B54\u7269\u306F\u5165\u3063\u3066\u3053\u3089\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30AF\u30EA\u30C3\u30AF\u304B F \u30AD\u30FC\u3067\u5263\u3092\u632F\u308C\u307E\u3059\u3002\u7D9A\u3051\u3066\u62BC\u3059\u30683\u6BB5\u30B3\u30F3\u30DC","\u30D2\u30F3\u30C8\uFF1A\u6570\u5B57\u30AD\u30FC 1\u301C8 \u3067\u6301\u3061\u7269\u3092\u5207\u308A\u66FF\u3048\u3002\u7A7A\u306E\u30DE\u30B9\u3092\u9078\u3076\u3068\u7D20\u624B\u306B\u306A\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2\u3092\u6301\u3064\u3068\u3001Q\u30FBE\u30FBR \u3067 3 \u3064\u306E\u6280\u304C\u4F7F\u3048\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AB \u30AD\u30FC\u3067\u661F\u306E\u796D\u58C7\u306B\u623B\u308C\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u65A7\u306F\u9B54\u7269\u306B\u306F\u5F31\u3044\u3051\u308C\u3069\u3001\u6728\u3084\u67F5\u3092\u3059\u3050\u306B\u58CA\u305B\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u67F5\u3084\u6249\u3092\u6301\u3063\u3066\u653B\u6483\u30DC\u30BF\u30F3\u3067\u5EFA\u3066\u3089\u308C\u307E\u3059\u3002R \u3067\u5411\u304D\u3092\u5909\u3048\u3001T \u3067\u6728\u6750\u3092\u9078\u3079\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u6249\u306E\u8FD1\u304F\u3067 G \u30AD\u30FC\u3092\u62BC\u3059\u3068\u958B\u3051\u9589\u3081\u3067\u304D\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u6728\u3092\u653B\u6483\u3059\u308B\u3068\u5207\u308A\u5012\u305B\u307E\u3059\u3002\u5730\u65B9\u3054\u3068\u306B\u9055\u3046\u6728\u6750\u304C\u624B\u306B\u5165\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AShift \u3092\u62BC\u3057\u306A\u304C\u3089\u79FB\u52D5\u3059\u308B\u3068\u8D70\u308C\u307E\u3059\uFF08\u30B9\u30DE\u30DB\u306F\u30B9\u30C6\u30A3\u30C3\u30AF\u3092\u7AEF\u307E\u3067\u5012\u3059\uFF09"],bp=Dt("scene"),ns=new Oo({canvas:bp,antialias:!0}),br=window.matchMedia("(pointer: coarse)").matches;ns.setPixelRatio(Math.min(window.devicePixelRatio,br?1.5:2));ns.setSize(window.innerWidth,window.innerHeight);ns.shadowMap.enabled=!0;ns.shadowMap.type=Eh;ns.outputColorSpace=Ne;var $s=new cc,An=new Fn(60,window.innerWidth/window.innerHeight,.1,2600),ei,Ue,$t,Fi,Ts,ki,bs,gi=sp(Dt("popup-layer")),yM=()=>new Promise(i=>{requestAnimationFrame(()=>i()),setTimeout(i,50)}),dp=i=>new Promise(t=>setTimeout(t,i));function fp(i,t){Dt("progress-fill").style.width=i+"%",t&&(Dt("loading-status").textContent=t)}async function _M(){Dt("loading-tip").textContent=up[Math.floor(Math.random()*up.length)];let i=[["\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",async()=>{await document.fonts.ready}],["\u30D9\u30FC\u30B9\u30D7\u30EC\u30FC\u30C8\u3092\u751F\u6210\u4E2D...",async()=>{ei=Wf($s,ns,{lite:br}),br&&(An.far=1300)}],["\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u751F\u6210\u4E2D...",async()=>{Ue=Jf(),$s.add(Ue.object),la(),$t=jf(Ue,ei),$t.respawn(),Fi=tp(Dt("minimap"),ei),Ts=ip($s,ei,Dt("label-layer")),ki=hp($s,ei.groundHeight),bs=ap($s,ei),wM()}],["\u30B7\u30FC\u30F3\u3092\u6E96\u5099\u4E2D...",async()=>{ns.compile($s,An),ns.render($s,An)}]];for(let t=0;t<i.length;t++){let[e,n]=i[t];fp(t/i.length*100,e),await yM(),await Promise.all([n(),dp(450)])}fp(100,"\u5B8C\u4E86\uFF01"),await dp(400),Dt("loading-screen").classList.add("fade"),Dt("menu").classList.remove("hidden"),setTimeout(()=>Dt("loading-screen").remove(),900),setTimeout(()=>Ue.wave(),900)}var Bi="menu",Sp=!0,Rp=0,aa=0,Fc=new O,Bc=new O,Wh=new O,Xh=new O,$e={yaw:0,pitch:.35,dist:18},EM=6,MM=60;function Ap(i,t){let e=ei.spawnPoint.clone().add(new O(0,3,0)),n=Math.sin(Rp*.15)*.45+.35,s=20;i.set(e.x+Math.sin(n)*s,e.y+3.5,e.z+Math.cos(n)*s);let r=window.innerWidth>700,o=e.clone().sub(i).normalize(),a=new O().crossVectors(o,new O(0,1,0)).normalize();t.copy(e).addScaledVector(a,r?-4.2:0),r||(t.y-=1.5)}function vM(i,t){let e=$t.position;t.set(e.x,e.y+4.5,e.z);let n=Math.cos($e.pitch);i.set(t.x+Math.sin($e.yaw)*n*$e.dist,t.y+Math.sin($e.pitch)*$e.dist,t.z+Math.cos($e.yaw)*n*$e.dist);let s=Math.max(ei.groundHeight(i.x,i.z),ei.waterLevel)+.8;i.y<s&&(i.y=s)}function wM(){Ap(Fc,Bc),An.position.copy(Fc),An.lookAt(Bc)}function TM(i){aa+=i,Bi==="menu"?(Sp&&(Rp+=i),Ap(Wh,Xh)):vM(Wh,Xh);let t=Bi==="menu"?3:4+aa*aa*80,e=1-Math.exp(-i*t);Fc.lerp(Wh,e),Bc.lerp(Xh,e),An.position.copy(Fc),An.lookAt(Bc)}var ws=Qf(bp,{joystickEl:Dt("joystick"),jumpBtnEl:Dt("btn-jump"),attackBtnEl:Dt("btn-attack"),skillBtnsEl:Dt("skill-btns"),onKey(i){i==="Escape"?Fi.expanded?Fi.expanded=!1:zp():i==="KeyM"?Fi.expanded=!Fi.expanded:i==="KeyH"?Dt("help").classList.toggle("hidden"):/^Digit[1-8]$/.test(i)?Pp(Number(i.slice(5))-1):i==="KeyG"||i==="KeyE"&&!Pe.held?.skills?Dp():i==="KeyR"&&Pe.held?.kind==="build"?Lp():i==="KeyT"&&Pe.held?.kind==="build"?Hp():i==="KeyB"&&!bi&&($t.respawn(Math.PI),$e.yaw=0,yn("\u661F\u306E\u796D\u58C7\u306B\u623B\u308A\u307E\u3057\u305F"))}});function pp(){let{dx:i,dy:t,zoom:e}=ws.consumeLook();$e.yaw-=i*.006,$e.pitch=Qe.clamp($e.pitch+t*.005,-.2,1.35),$e.dist=Qe.clamp($e.dist*(1+e*.001),EM,MM)}function Qh(){let{forward:i,right:t}=ws.move(),e=-Math.sin($e.yaw),n=-Math.cos($e.yaw),s=Math.cos($e.yaw),r=-Math.sin($e.yaw);return{x:e*i+s*t,z:n*i+r*t}}var Gt={level:1,exp:0,hp:100,maxHp:100,atk:10,stamina:100,maxStamina:100},ra=!1,qh=0;function bM(i,t,e){let n=t&&e&&!ra&&!$t.swimming;n?(Gt.stamina=Math.max(0,Gt.stamina-20*i),qh=0,Gt.stamina<=0&&(ra=!0,yn("\u606F\u304C\u5207\u308C\u305F\u2026"))):(qh+=i,qh>.5&&(Gt.stamina=Math.min(Gt.maxStamina,Gt.stamina+32*i)),ra&&Gt.stamina>=Gt.maxStamina*.3&&(ra=!1));let s=Dt("stamina-fill");return s.style.width=Gt.stamina/Gt.maxStamina*100+"%",s.classList.toggle("tired",ra),Dt("stamina-bar").classList.toggle("full",Gt.stamina>=Gt.maxStamina),n}var Zh=()=>Gt.level*20,wr=0,bi=!1;function Sr(){Dt("lv").textContent=Gt.level,Dt("hp-now").textContent=Math.max(0,Math.ceil(Gt.hp)),Dt("hp-max").textContent=Gt.maxHp;let i=Math.max(0,Gt.hp)/Gt.maxHp;Dt("hp-fill").style.width=i*100+"%",Dt("hp-fill").classList.toggle("low",i<.3),Dt("exp-fill").style.width=Gt.exp/Zh()*100+"%"}var yo=()=>$t.position.clone().setY($t.position.y+5.5);function Cp(i){for(Gt.exp+=i,gi.add(yo(),`+${i} EXP`,"exp");Gt.exp>=Zh();)Gt.exp-=Zh(),Gt.level++,Gt.maxHp+=15,Gt.hp=Gt.maxHp,Gt.atk+=3,gi.add(yo().setY($t.position.y+7),"LEVEL UP!","levelup"),yn(`\u30EC\u30D9\u30EB ${Gt.level} \u306B\u306A\u3063\u305F\uFF01 HP \u3068\u653B\u6483\u529B\u304C\u4E0A\u304C\u3063\u305F`),Ue.wave();Sr()}var Pe=Vf(),Ti=-1;function SM(){let i=Pe.held;return zc[i?.moveset??"fists"]}function la(){let i=Dt("hotbar");if(!i.children.length)for(let e=0;e<Uc;e++){let n=document.createElement("button");n.className="slot",n.innerHTML=`<span class="slot-key">${e+1}</span><span class="slot-icon"></span><span class="slot-count"></span>`,n.addEventListener("pointerdown",s=>{s.preventDefault(),Pp(e)}),i.appendChild(n)}Pe.slots.forEach((e,n)=>{let s=i.children[n];s.classList.toggle("selected",n===Pe.selected),s.classList.toggle("empty",!e),s.classList.toggle("blood",!!e&&nn[e.id].rarity==="blood"),s.title=e?RM(nn[e.id]):"\u7A7A\u304D\uFF08\u7D20\u624B\uFF09",s.querySelector(".slot-icon").innerHTML=e?nn[e.id].icon:"";let r=e&&Pe.infinite&&nn[e.id].kind!=="weapon"&&nn[e.id].kind!=="material";s.querySelector(".slot-count").textContent=r?"\u221E":e&&e.count>1?e.count:""}),Ue.setHeld(Pe.held?.held??null),Ue.setTrailColor(Pe.held?.trail);let t=Pe.held;Ue.setStance(t?t.stance??"item":"fists")}function RM(i){let t=`${i.name}\uFF1A${i.desc}`;i.passive&&(t+=`
\u7279\u6027\u3010${i.passive.name}\u3011${i.passive.desc}`);for(let e of i.skills??[])t+=`
\u6280\u3010${es[e].name}\u3011\uFF08${es[e].key}\uFF09${es[e].desc}`;return i.power&&(t+=`
\u653B\u6483\u529B \xD7${i.power}`),i.category==="wood"&&(t+=`
\u8010\u4E45\u529B ${i.durability}\u3000\u7279\u6027\u3010${i.trait.name}\u3011${i.trait.desc}`),t}var mp;function Pp(i){if(se.current||Ti>=0||ti||bi)return;Pe.selected=i,se.step=-1,la();let t=Pe.held,e=Dt("held-name");Up(t),e.textContent=t?t.skills?`${t.name}\u3000${t.skills.map(n=>`${es[n].key}\u300C${es[n].name}\u300D`).join(" ")}`:t.name:"\u7D20\u624B",e.classList.remove("hidden"),clearTimeout(mp),mp=setTimeout(()=>e.classList.add("hidden"),1500)}function AM(){let i=Pe.held;if(i?.kind==="build"){zM();return}if(i?.kind==="consumable"){if(se.current||Ti>=0)return;if(i.heal&&Gt.hp>=Gt.maxHp){yn("HP \u306F\u6E80\u30BF\u30F3\u3067\u3059");return}Ue.drink()&&(Ti=0);return}PM()}function CM(i){if(Ti<0)return;let t=Ti;if(Ti+=i,t<.55&&Ti>=.55){let e=Pe.held;if(e?.heal){let n=Math.min(e.heal,Gt.maxHp-Gt.hp);Gt.hp+=n,gi.add(yo(),`+${Math.round(n)}`,"heal"),Sr()}Pe.consumeHeld(),la()}Ti>=.9&&(Ti=-1)}var se={current:null,moves:zc.sword,step:-1,time:0,hit:!1,queued:0,sinceEnd:99,speed:1},Tr=0,ci=0;function PM(){if(bi||ti)return;let i=SM();if(se.current){se.queued=Math.min(se.queued+1,se.moves.length-1-se.step);return}let t=se.moves===i&&se.sinceEnd<qf&&se.step<i.length-1;se.moves=i,Ip(t?se.step+1:0)}function Ip(i){let t=Qh();Math.hypot(t.x,t.z)>.3&&$t.setFacing(Math.atan2(t.x,t.z));let e=se.moves[i],n=Pe.held?.speed??1;if(!Ue.attack(e.anim,n))return;Object.assign(se,{current:e,step:i,time:0,hit:!1,hitIdx:0,speed:n});let s=$t.facing;$t.knockback(Math.sin(s)*e.lunge,Math.cos(s)*e.lunge,e.hop),ZM(i)}function IM(i){if(!se.current){se.sinceEnd+=i;return}se.time+=i*se.speed;let t=se.current.hitTimes??[se.current.hitTime];for(;se.hitIdx<t.length&&se.time>=t[se.hitIdx];)se.hitIdx++,LM(se.current);se.time>=se.current.duration&&(se.current=null,se.sinceEnd=0,se.queued>0&&se.step<se.moves.length-1?(se.queued--,Ip(se.step+1)):se.queued=0)}function Gc(){let i=Pe.held,t=i?.kind==="weapon"?i.power??1:1;return Dn&&(t*=Dn.atk),i?.passive?.id==="thirst"&&Gt.hp<Gt.maxHp/2&&(t*=1.3),t}function LM(i){let t=Pe.held,e=t?.passive?.id==="heavy",n=Ts.attack($t.position,$t.facing,{range:i.range*(e?1.1:1),arc:i.arc,damage:Gt.atk*i.power*Gc(),knockback:i.knockback*(e?1.7:1),bleed:t?.passive?.id==="bleed"});if(n.length&&(Tr=i.hitStop*(e?1.5:1),ci=Math.max(ci,i.shake*(e?1.5:1)),t?.rarity==="blood"))for(let s of n)ki.burst(s.pos,8,5);tu(n),DM(i),NM(i),Dn?.waves&&t?.rarity==="blood"&&HM()}function HM(){let i=new O(Math.sin($t.facing),0,Math.cos($t.facing)),t=$t.position.clone().addScaledVector(i,1.5);t.y+=2.6;let e=new Set;ki.crescent(t,i,{onMove(n){let s=Ts.hitArea(r=>!e.has(r)&&Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<3+r.T.radius&&Math.abs(r.pos.y+2-n.y)<4,{damage:Gt.atk*.9*Gc(),knockback:.8,from:n});for(let r of s)e.add(r.enemy),ki.burst(r.pos,10,6);tu(s)}})}var gp=new Set;function DM(i){let t=ei.chopTrees($t.position,$t.facing,{range:i.range,arc:i.arc,damage:Gt.atk*i.power*(Pe.held?.chop??Gc())});for(let e of t){if(ki.chips(e.pos,e.felled?14:6),gi.add(e.pos.clone().setY(e.pos.y+2),String(e.damage),"chop"),!e.felled)continue;let n=nn[e.woodId],s=Pe.add(e.woodId,e.amount),r=e.amount-s;r>0&&gi.add(yo(),`+${r} ${n.name}`,"loot"),s>0&&!Mr&&yn("\u6301\u3061\u7269\u304C\u3044\u3063\u3071\u3044\u3067\u3001\u6728\u6750\u3092\u6301\u3061\u304D\u308C\u306A\u3044\u2026"),la(),r>0&&!gp.has(e.woodId)&&(gp.add(e.woodId),yn(`${n.name}\u3092\u624B\u306B\u5165\u308C\u305F\uFF01\u3000\u7279\u6027\u3010${n.trait.name}\u3011`,3200))}t.length&&!Tr&&(ci=Math.max(ci,.08))}var Jh=!1,Zs="woodYoung",kc=0,oa=null,UM=()=>$e.yaw+Math.PI;function Lp(){Jh=!Jh}function Hp(){let i=Mr?Gh:Gh.filter(t=>Pe.slots.some(e=>e?.id===t));if(!i.length){yn("\u6728\u6750\u3092\u6301\u3063\u3066\u3044\u306A\u3044");return}Zs=i[(i.indexOf(Zs)+1)%i.length],Up(nn[Zs])}function zM(){if(kc>0||se.current||bi)return;let i=bs.place(Zs);if(!i.ok){i.reason&&yn(i.reason);return}kc=.25;let t=i.structure;Ue.attack(3),ki.chips(new O(t.x,t.y+.4,t.z),8,nn[Zs].plank),ci=Math.max(ci,.12),Pe.consumeHeld(),la(),i.env.weak.length?yn(`${i.env.weak.join("\u3001")}\u2026\uFF08\u8010\u4E45\u529B ${t.maxHp}\uFF09`,2800):i.env.strong.length&&yn(`${i.env.strong.join("\u3001")}\uFF08\u8010\u4E45\u529B ${t.maxHp}\uFF09`,2800)}function NM(i){let t=Pe.held,e=bs.hit($t.position,$t.facing,{range:i.range,arc:i.arc,damage:Gt.atk*i.power*(t?.breaker??.35)});for(let n of e){let s=nn[n.woodId].plank;ki.chips(n.pos,n.destroyed?22:7,s),gi.add(n.pos.clone().setY(n.pos.y+1),String(n.damage),"chop"),OM(n.name,n.hp,n.maxHp),n.destroyed&&(ci=Math.max(ci,.35),yn(`${n.name}\u3092\u58CA\u3057\u305F`))}e.length&&!t?.breaker&&yn("\u65A7\u306E\u307B\u3046\u304C\u3001\u65E9\u304F\u58CA\u305B\u308B",1500)}var xp;function OM(i,t,e){let n=Dt("target-bar");n.querySelector("b").textContent=i,n.querySelector("span").textContent=`${t} / ${e}`,n.querySelector("i").style.width=t/e*100+"%",n.classList.remove("hidden"),clearTimeout(xp),xp=setTimeout(()=>n.classList.add("hidden"),1800)}function FM(){let i=$t.position;return new he(new O(i.x-.8,i.y,i.z-.8),new O(i.x+.8,i.y+4.5,i.z+.8))}function Dp(){if(Bi!=="ingame"||bi)return;let i=bs.nearestDoor($t.position);i&&(bs.toggleDoor(i,$t.position,FM())||yn("\u6249\u306B\u631F\u307E\u3063\u3066\u3057\u307E\u3046"))}function BM(i){kc=Math.max(0,kc-i);let t=Pe.held,e=Bi==="ingame"&&t?.kind==="build"&&!bi?t.build:null;oa=bs.preview(e,$t.position,UM(),Jh,Zs);let n=Dt("build-hud");if(n.classList.toggle("hidden",!e),Dt("build-btns").classList.toggle("hidden",!e),e){let o=nn[Zs],a=bs.climate(Zs,oa.x,oa.z),c=Math.round(o.durability*(e==="door"?1.2:1)*a.mult),h=oa.ok?a.weak.length?`<em class="weak">${a.weak[0]}</em>`:a.strong.length?`<em class="good">${a.strong[0]}</em>`:"":`<em class="ng">${oa.reason}</em>`,l=`${o.icon}<div><b>${t.name}</b>\u3000${o.name}\u3000\u8010\u4E45 ${c}<small>${br?"\u2694 \u7F6E\u304F \u30FB \u56DE\u8EE2 \u30FB \u6728\u6750":"\u30AF\u30EA\u30C3\u30AF \u7F6E\u304F \u30FB R \u56DE\u8EE2 \u30FB T \u6728\u6750"}</small>${h}</div>`;n.dataset.html!==l&&(n.innerHTML=l,n.dataset.html=l)}let s=Bi==="ingame"?bs.nearestDoor($t.position):null,r=Dt("btn-use");r.classList.toggle("hidden",!s),s&&(r.textContent=`${br?"":"G "}${s.open?"\u9589\u3081\u308B":"\u958B\u3051\u308B"}`)}var yp;function Up(i){let t=Dt("item-card");if(!i||i.category!=="wood"){t.classList.add("hidden");return}let e=Object.keys(Qi).filter(s=>!i.resist[s]),n=Object.keys(Qi).filter(s=>i.resist[s]);t.innerHTML=`
    <div class="card-head">${i.icon}<div><b>${i.name}</b><small>${i.desc}</small></div></div>
    <div class="card-row"><span>\u8010\u4E45\u529B</span><div class="card-bar"><div style="width:${Math.min(100,i.durability/2)}%"></div></div><b>${i.durability}</b></div>
    <div class="card-row trait"><span>\u7279\u6027</span><p><b>${i.trait.name}</b>\uFF1A${i.trait.desc}</p></div>
    ${n.length?`<div class="card-row good"><span>\u5F37\u3044</span><p>${n.map(s=>`${Qi[s].name}\uFF08${Qi[s].where}\u3067\u3082\u5E73\u6C17\uFF09`).join("\u3001")}</p></div>`:""}
    ${e.length?`<div class="card-row bad"><span>\u5F31\u70B9</span><p>${e.map(s=>`${Qi[s].name}\uFF1A${Qi[s].effect}`).join("<br>")}</p></div>`:""}
    <div class="card-note">\u203B \u62E0\u70B9\u3092\u5EFA\u3066\u305F\u5834\u6240\u306E\u74B0\u5883\u3067\u3001\u7279\u6027\u3068\u5F31\u70B9\u304C\u52B9\u304F\u3088\u3046\u306B\u306A\u308A\u307E\u3059</div>`,t.classList.remove("hidden"),clearTimeout(yp),yp=setTimeout(()=>t.classList.add("hidden"),6e3)}function tu(i){let t=0;for(let s of i)t+=s.damage,gi.add(s.pos,String(s.damage),s.damage>Gt.atk*1.6?"crit":""),s.killed&&(yn(`${s.name} \u3092\u305F\u304A\u3057\u305F\uFF01`),Cp(s.exp));let e=Pe.held,n=(e?.passive?.id==="lifesteal"?e.passive.rate:0)+(Dn?.lifesteal??0);if(n>0&&t>0&&Gt.hp<Gt.maxHp){let s=Math.max(1,Math.round(t*n));Gt.hp=Math.min(Gt.maxHp,Gt.hp+s),gi.add(yo(),`+${s}`,"heal"),Sr()}}function kM(i){gi.add(i.pos,String(i.damage),"bleed"),i.killed&&(yn(`${i.name} \u306F\u8840\u3092\u6D41\u3057\u3066\u5012\u308C\u305F\u2026`),Cp(i.exp))}var ti=null,xo={},ca=0,Dn=null,Kh=0,jh={get player(){return $t},get character(){return Ue},get enemies(){return Ts},get fx(){return ki},stats:Gt,power:i=>Gt.atk*i*Gc(),applyHits:i=>tu(i),invuln:i=>{ca=Math.max(ca,i)},shake:i=>{ci=Math.max(ci,i)},hitStop:i=>{Tr=Math.max(Tr,i)},screenFlash:i=>GM(i),fovKick:i=>{Kh=i},toast:i=>yn(i),popup:(i,t,e)=>gi.add(i,t,e),startBuff:i=>XM(i)};function GM(i){let t=Dt("blood-flash");t.style.transition="none",t.style.opacity=i,requestAnimationFrame(()=>{t.style.transition="opacity .5s ease",t.style.opacity=0})}function VM(i){let e=Pe.held?.skills?.[i];if(!e||bi||ti||se.current||Ti>=0)return;let n=es[e],s=Dt("skills").children[i];if((xo[e]??0)>0){s?.classList.remove("denied"),s?.offsetWidth,s?.classList.add("denied");return}if(n.canUse&&!n.canUse(jh))return;let r=Qh();Math.hypot(r.x,r.z)>.3&&$t.setFacing(Math.atan2(r.x,r.z)),Ue.attack(n.anim),ti={def:n,t:0,s:{}},n.start(jh,ti.s),xo[e]=n.cooldown,se.step=-1,Sr(),qM(n.name)}function WM(i,t){for(let n of Object.keys(xo))xo[n]=Math.max(0,xo[n]-i);ca=Math.max(0,ca-i),ti&&(ti.t+=i,ti.def.update(jh,ti.s,ti.t,i),ti.t>=ti.def.duration&&(ti=null)),Dn&&(Dn.time-=i,Dn.time<=0&&eu()),Kh*=Math.exp(-t*5);let e=60+Kh;Math.abs(An.fov-e)>.01&&(An.fov=e,An.updateProjectionMatrix())}function XM(i){eu(),Dn={...i,aura:ki.aura(Ue.object)},Ue.setGlow(2.4),Dt("blood-vignette").classList.add("on"),yn(`${i.name}\uFF1A\u529B\u304C\u6EA2\u308C\u51FA\u3059\u2026\uFF01\u3000\u5263\u3092\u632F\u308B\u3068\u8840\u306E\u65AC\u6483\u304C\u98DB\u3076`)}function eu(){Dn&&(Dn.aura.stop(),Dn=null,Ue.setGlow(1),Dt("blood-vignette").classList.remove("on"))}var _p;function qM(i){let t=Dt("skill-name");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(_p),_p=setTimeout(()=>t.classList.add("hidden"),1200)}function YM(){let t=Pe.held?.skills??[],e=Dt("skills");e.classList.toggle("hidden",!t.length),Dt("skill-btns").classList.toggle("hidden",!t.length),e.dataset.set!==t.join()&&(e.innerHTML=t.map(s=>`<div class="skill"><span class="skill-key">${es[s].key}</span><span class="skill-cd"></span><span class="skill-label">${es[s].name}</span></div>`).join(""),e.dataset.set=t.join()),t.forEach((s,r)=>{let o=es[s],a=xo[s]??0,c=e.children[r];c.querySelector(".skill-cd").textContent=a>0?Math.ceil(a):"",c.style.setProperty("--cd",a/o.cooldown),c.classList.toggle("ready",a<=0);let h=Dt("skill-btns").children[r];h&&h.style.setProperty("--cd",a/o.cooldown)});let n=Dt("buff");n.classList.toggle("hidden",!Dn),Dn&&(n.textContent=`${Dn.name}\u3000${Dn.time.toFixed(1)}\u79D2`)}var Yh=0,Ep=new O;function $M(i){Pe.held?.rarity==="blood"&&(Yh-=i,!(Yh>0)&&(Yh=Dn?.08:.4,Ue.bladeTip(Ep)&&ki.burst(Ep,1,Dn?2:.4)))}var Mp;function ZM(i){let t=Dt("combo"),e=se.moves.map((n,s)=>`${"\u2460\u2461\u2462\u2463"[s]} ${n.name}`);t.dataset.set!==e.join()&&(t.innerHTML=e.map(n=>`<span>${n}</span>`).join(""),t.dataset.set=e.join()),t.classList.remove("hidden"),t.querySelectorAll("span").forEach((n,s)=>{n.classList.toggle("done",s<i),n.classList.toggle("now",s===i)}),clearTimeout(Mp),Mp=setTimeout(()=>t.classList.add("hidden"),1400)}function JM(i,t,e){if(wr>0||ca>0||bi)return;Gt.hp-=i,wr=1,Ue.hurt(),gi.add(yo(),`-${i}`,"hurt");let n=Dt("hurt-vignette");n.classList.add("on"),requestAnimationFrame(()=>n.classList.remove("on"));let s=$t.position.x-t,r=$t.position.z-e,o=Math.hypot(s,r)||1;$t.knockback(s/o*14,r/o*14,14),Sr(),Gt.hp<=0&&KM()}function KM(){bi=!0,se.current=null,se.queued=0,Ti=-1,ti=null,eu(),Ue.setFainted(!0),Ts.calmDown(),Dt("faint").classList.remove("hidden"),setTimeout(()=>{Dt("faint").classList.add("hidden"),Gt.hp=Gt.maxHp,bi=!1,Ue.setFainted(!1),$t.respawn(Math.PI),$e.yaw=0,wr=2,Sr()},2800)}var $h=!1;function jM(){$t.grounded&&$t.groundKind==="goal"&&!$h&&($h=!0,Ue.wave(),yn("\u5854\u306E\u3066\u3063\u307A\u3093\u306E\u30AF\u30EA\u30B9\u30BF\u30EB\u306B\u305F\u3069\u308A\u7740\u3044\u305F\uFF01",3500)),$t.groundKind==="spawn"&&($h=!1)}var Oc=null;function QM(){let i=$t.position,t=null;for(let e of na)Math.hypot(i.x-e.x,i.z-e.z)<e.r+4&&(t=e.name);if(!t&&$t.groundKind==="bridge"){let e=1/0;for(let n of ei.bridges){let s=(n.from[0]+n.to[0])/2,r=(n.from[1]+n.to[1])/2,o=Math.hypot(i.x-s,i.z-r);o<e&&(e=o,t=n.name)}}t||(t=ei.islandAt(i.x,i.z)?.name??Oc),t&&t!==Oc&&tv(t),Oc=t}var vp;function tv(i){let t=Dt("area-banner");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(vp),vp=setTimeout(()=>t.classList.add("hidden"),3200)}function ev(){Bi="ingame",aa=0,$t.respawn(Math.PI),$e.yaw=0,$e.pitch=.35,$e.dist=18,ws.enabled=!0,Gt.hp=Gt.maxHp,Sr(),Dt("menu").classList.add("hidden"),Dt("ingame").classList.remove("hidden"),Fi.resize(),Oc=null}function zp(){Bi="menu",aa=0,ws.enabled=!1,Fi.expanded=!1,Ts.calmDown(),gi.clear(),$t.respawn(),Dt("ingame").classList.add("hidden"),Dt("menu").classList.remove("hidden")}var wp;function yn(i,t=2200){let e=Dt("toast-msg");e.textContent=i,e.classList.remove("hidden"),clearTimeout(wp),wp=setTimeout(()=>e.classList.add("hidden"),t)}Dt("btn-play").addEventListener("click",ev);Dt("btn-use").addEventListener("pointerdown",i=>{i.preventDefault(),Dp()});Dt("btn-rotate").addEventListener("pointerdown",i=>{i.preventDefault(),Lp()});Dt("btn-wood").addEventListener("pointerdown",i=>{i.preventDefault(),Hp()});Dt("btn-back").addEventListener("click",zp);Dt("minimap").addEventListener("click",()=>{Fi.expanded=!Fi.expanded});Dt("btn-avatar").addEventListener("click",()=>{Ue.wave(),yn("\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u7DE8\u96C6\u306F\u6E96\u5099\u4E2D\u3067\u3059")});var Tp=document.documentElement;Tp.requestFullscreen&&br&&(Dt("btn-fullscreen").classList.remove("hidden"),Dt("btn-fullscreen").addEventListener("click",async()=>{try{await Tp.requestFullscreen({navigationUI:"hide"}),await screen.orientation?.lock?.("landscape").catch(()=>{})}catch{}}));var Np=window.matchMedia("(orientation: portrait)"),Op=()=>Dt("rotate-tip").classList.toggle("hidden",!(br&&Np.matches));Np.addEventListener?.("change",Op);Op();document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault());Dt("btn-settings").addEventListener("click",()=>Dt("settings-panel").classList.remove("hidden"));document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",()=>i.closest(".popup").classList.add("hidden")));Dt("opt-shadows").addEventListener("change",i=>{ei.sun.castShadow=i.target.checked});Dt("opt-orbit").addEventListener("change",i=>{Sp=i.target.checked});Dt("opt-stepped").addEventListener("change",i=>{Ue.stepped=i.target.checked});window.addEventListener("resize",()=>{An.aspect=window.innerWidth/window.innerHeight,An.updateProjectionMatrix(),ns.setSize(window.innerWidth,window.innerHeight),Fi?.resize()});var nv=new Mc,iv=Dt("coords");function Fp(){requestAnimationFrame(Fp);let i=Math.min(nv.getDelta(),.05);if(!ei||!$t)return;let t=Tr>0?i*.05:i;Tr=Math.max(0,Tr-i);let e=Bi==="ingame"&&!bi;if(e){pp(),ws.consumeAttack()&&AM();let n=ws.consumeSkill();n>=0&&VM(n);let s=Ue.attacking||Ti>=0||ti?{x:0,z:0}:Qh(),r=Math.hypot(s.x,s.z)>.1,o=bM(t,ws.run(),r);$t.update(t,{...s,jump:ws.jump()&&!Ue.attacking,run:o}),jM(),QM()}else Bi==="ingame"&&pp(),ws.consumeAttack(),$t.update(t,{x:0,z:0,jump:!1});if(IM(t),CM(t),WM(t,i),$M(t),ki.update(t),wr=Math.max(0,wr-t),Ue.object.visible=!(wr>0&&!bi&&Math.floor(wr*12)%2===0),Ts.update(t,{playerPos:$t.position,playerActive:e,playerSwimming:$t.swimming,onHitPlayer:JM,onBleed:kM}),ei.update(t,$t.position,An.position),bs.update(t),BM(t),TM(i),ci>.001&&(An.position.x+=(Math.random()-.5)*ci,An.position.y+=(Math.random()-.5)*ci,ci*=Math.exp(-i*14)),ns.render($s,An),Ts.updateLabels(An),gi.update(t,An),Bi==="ingame"&&YM(),Bi==="ingame"){Fi.draw($t.position,$t.facing,$e.yaw,Ts.alive());let n=$t.position;iv.textContent=`X ${n.x.toFixed(0)}  Y ${n.y.toFixed(0)}  Z ${n.z.toFixed(0)}`}}window.addEventListener("error",i=>{let t=Dt("loading-status");t&&(t.textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message)});_M().catch(i=>{Dt("loading-status").textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message,console.error(i)});Fp();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
