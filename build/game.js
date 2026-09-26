(()=>{var ah="160";var _p=0,qh=1,Ep=2;var bd=1,ch=2,is=3,Is=0,zn=1,le=2;var Cs=0,Fr=1,Xn=2,Yh=3,Zh=4,Mp=5,Js=100,vp=101,wp=102,$h=103,Jh=104,Tp=200,bp=201,Sp=202,Rp=203,ml=204,gl=205,Ap=206,Cp=207,Pp=208,Ip=209,Lp=210,Hp=211,Dp=212,Up=213,zp=214,Np=0,Op=1,Fp=2,Sa=3,Bp=4,kp=5,Gp=6,Vp=7,lh=0,Wp=1,Xp=2,Ps=0,qp=1,Yp=2,Zp=3,$p=4,Jp=5,Kp=6;var Sd=300,Gr=301,Vr=302,xl=303,yl=304,lc=306,_l=1e3,bi=1001,El=1002,bn=1003,Kh=1004;var Uc=1005;var Wn=1006,jp=1007;var wo=1008;var Ni=1009,Qp=1010,tm=1011,hh=1012,Rd=1013,Rs=1014,As=1015,To=1016,Ad=1017,Cd=1018,js=1020,em=1021,Si=1023,nm=1024,im=1025,Qs=1026,Wr=1027,uh=1028,Pd=1029,sm=1030,Id=1031,Ld=1033,zc=33776,Nc=33777,Oc=33778,Fc=33779,jh=35840,Qh=35841,tu=35842,eu=35843,Hd=36196,nu=37492,iu=37496,su=37808,ru=37809,ou=37810,au=37811,cu=37812,lu=37813,hu=37814,uu=37815,du=37816,fu=37817,pu=37818,mu=37819,gu=37820,xu=37821,Bc=36492,yu=36494,_u=36495,rm=36283,Eu=36284,Mu=36285,vu=36286;var Ra=2300,Aa=2301,kc=2302,wu=2400,Tu=2401,bu=2402;var Dd=3e3,tr=3001,om=3200,am=3201,dh=0,cm=1,pi="",De="srgb",os="srgb-linear",fh="display-p3",hc="display-p3-linear",Ca="linear",He="srgb",Pa="rec709",Ia="p3";var xr=7680;var Su=519,lm=512,hm=513,um=514,Ud=515,dm=516,fm=517,pm=518,mm=519,Ru=35044;var Au="300 es",Ml=1035,rs=2e3,La=2001,Ls=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=1234567,go=Math.PI/180,bo=180/Math.PI;function rr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function xn(i,t,e){return Math.max(t,Math.min(e,i))}function ph(i,t){return(i%t+t)%t}function gm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xm(i,t,e){return i!==t?(e-i)/(t-i):0}function xo(i,t,e){return(1-e)*i+e*t}function ym(i,t,e,n){return xo(i,t,1-Math.exp(-e*n))}function _m(i,t=1){return t-Math.abs(ph(i,t*2)-t)}function Em(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Mm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wm(i,t){return i+Math.random()*(t-i)}function Tm(i){return i*(.5-Math.random())}function bm(i){i!==void 0&&(Cu=i);let t=Cu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sm(i){return i*go}function Rm(i){return i*bo}function vl(i){return(i&i-1)===0&&i!==0}function Am(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ha(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Rn={DEG2RAD:go,RAD2DEG:bo,generateUUID:rr,clamp:xn,euclideanModulo:ph,mapLinear:gm,inverseLerp:xm,lerp:xo,damp:ym,pingpong:_m,smoothstep:Em,smootherstep:Mm,randInt:vm,randFloat:wm,randFloatSpread:Tm,seededRandom:bm,degToRad:Sm,radToDeg:Rm,isPowerOfTwo:vl,ceilPowerOfTwo:Am,floorPowerOfTwo:Ha,setQuaternionFromProperEuler:Cm,normalize:Gn,denormalize:Dr},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},de=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],y=s[0],m=s[3],p=s[6],w=s[1],_=s[4],v=s[7],R=s[2],M=s[5],g=s[8];return r[0]=o*y+a*w+c*R,r[3]=o*m+a*_+c*M,r[6]=o*p+a*v+c*g,r[1]=l*y+h*w+u*R,r[4]=l*m+h*_+u*M,r[7]=l*p+h*v+u*g,r[2]=f*y+d*w+x*R,r[5]=f*m+d*_+x*M,r[8]=f*p+d*v+x*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,x=e*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gc=new de;function zd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pm(){let i=Da("canvas");return i.style.display="block",i}var Pu={};function yo(i){i in Pu||(Pu[i]=!0,console.warn(i))}var Iu=new de().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lu=new de().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ko={[os]:{transfer:Ca,primaries:Pa,toReference:i=>i,fromReference:i=>i},[De]:{transfer:He,primaries:Pa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hc]:{transfer:Ca,primaries:Ia,toReference:i=>i.applyMatrix3(Lu),fromReference:i=>i.applyMatrix3(Iu)},[fh]:{transfer:He,primaries:Ia,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Lu),fromReference:i=>i.applyMatrix3(Iu).convertLinearToSRGB()}},Im=new Set([os,hc]),Se={enabled:!0,_workingColorSpace:os,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Im.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Ko[t].toReference,s=Ko[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ko[i].primaries},getTransfer:function(i){return i===pi?Ca:Ko[i].transfer}};function Br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yr,Ua=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yr===void 0&&(yr=Da("canvas")),yr.width=t.width,yr.height=t.height;let n=yr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Da("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Br(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Br(e[n]/255)*255):e[n]=Br(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lm=0,za=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=rr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wc(s[o].image)):r.push(Wc(s[o]))}else r=Wc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hm=0,ai=class i extends Ls{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bi,s=bi,r=Wn,o=wo,a=Si,c=Ni,l=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=rr(),this.name="",this.source=new za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===tr?De:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _l:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case El:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _l:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case El:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?tr:Dd}set encoding(t){yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===tr?De:pi}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Sd;ai.DEFAULT_ANISOTROPY=1;var Fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],x=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(d+1)/2,R=(p+1)/2,M=(h+f)/4,g=(u+y)/4,A=(x+m)/4;return _>v&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=M/n,r=g/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=A/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=g/r,s=A/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-x)*(m-x)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(u-y)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wl=class extends Ls{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(yo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===tr?De:pi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ai(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},as=class extends wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Na=class extends ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tl=class extends ai{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=y;return}if(u!==y||c!==f||l!==d||h!==x){let m=1-a,p=c*f+l*d+h*x+u*y,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),M=Math.atan2(R,p*w);m=Math.sin(m*M)/R,a=Math.sin(a*M)/R}let v=a*w;if(c=c*m+f*v,l=l*m+d*v,h=h*m+x*v,u=u*m+y*v,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+h*u+c*d-l*f,t[e+1]=c*x+h*f+l*u-a*d,t[e+2]=l*x+h*d+a*f-c*u,t[e+3]=h*x-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"YZX":this._x=f*h*u+l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u-f*d*x;break;case"XZY":this._x=f*h*u-l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xc.copy(this).projectOnVector(t),this.sub(Xc)}reflect(t){return this.sub(Xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xc=new O,Hu=new Hs,_e=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(t.matrixWorld),this.union(jo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(co),Qo.subVectors(this.max,co),_r.subVectors(t.a,co),Er.subVectors(t.b,co),Mr.subVectors(t.c,co),vs.subVectors(Er,_r),ws.subVectors(Mr,Er),Xs.subVectors(_r,Mr);let e=[0,-vs.z,vs.y,0,-ws.z,ws.y,0,-Xs.z,Xs.y,vs.z,0,-vs.x,ws.z,0,-ws.x,Xs.z,0,-Xs.x,-vs.y,vs.x,0,-ws.y,ws.x,0,-Xs.y,Xs.x,0];return!qc(e,_r,Er,Mr,Qo)||(e=[1,0,0,0,1,0,0,0,1],!qc(e,_r,Er,Mr,Qo))?!1:(ta.crossVectors(vs,ws),e=[ta.x,ta.y,ta.z],qc(e,_r,Er,Mr,Qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ji=[new O,new O,new O,new O,new O,new O,new O,new O],vi=new O,jo=new _e,_r=new O,Er=new O,Mr=new O,vs=new O,ws=new O,Xs=new O,co=new O,Qo=new O,ta=new O,qs=new O;function qc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qs.fromArray(i,r);let a=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),c=t.dot(qs),l=e.dot(qs),h=n.dot(qs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Dm=new _e,lo=new O,Yc=new O,Ds=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lo.subVectors(t,this.center);let e=lo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lo.copy(t.center).add(Yc)),this.expandByPoint(lo.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new O,Zc=new O,ea=new O,Ts=new O,$c=new O,na=new O,Jc=new O,Oa=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zc.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),Ts.copy(this.origin).sub(Zc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ea),a=Ts.dot(this.direction),c=-Ts.dot(ea),l=Ts.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zc).addScaledVector(ea,f),d}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);let n=Qi.dot(this.direction),s=Qi.dot(Qi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,n,s,r){$c.subVectors(e,t),na.subVectors(n,t),Jc.crossVectors($c,na);let o=this.direction.dot(Jc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ts.subVectors(this.origin,t);let c=a*this.direction.dot(na.crossVectors(Ts,na));if(c<0)return null;let l=a*this.direction.dot($c.cross(Ts));if(l<0||c+l>o)return null;let h=-a*Ts.dot(Jc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,x,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,x,y,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,x,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/vr.setFromMatrixColumn(t,0).length(),r=1/vr.setFromMatrixColumn(t,1).length(),o=1/vr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,x=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+x*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=x+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,x=l*h,y=l*u;e[0]=f+y*a,e[4]=x*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,x=l*h,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,x=a*h,y=a*u;e[0]=c*h,e[4]=x*l-d,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=d*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=y-f*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+x,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,d=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Um,t,zm)}lookAt(t,e,n){let s=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),bs.crossVectors(n,ri),bs.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),bs.crossVectors(n,ri)),bs.normalize(),ia.crossVectors(ri,bs),s[0]=bs.x,s[4]=ia.x,s[8]=ri.x,s[1]=bs.y,s[5]=ia.y,s[9]=ri.y,s[2]=bs.z,s[6]=ia.z,s[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],y=n[6],m=n[10],p=n[14],w=n[3],_=n[7],v=n[11],R=n[15],M=s[0],g=s[4],A=s[8],E=s[12],T=s[1],b=s[5],P=s[9],H=s[13],S=s[2],I=s[6],U=s[10],N=s[14],z=s[3],B=s[7],G=s[11],X=s[15];return r[0]=o*M+a*T+c*S+l*z,r[4]=o*g+a*b+c*I+l*B,r[8]=o*A+a*P+c*U+l*G,r[12]=o*E+a*H+c*N+l*X,r[1]=h*M+u*T+f*S+d*z,r[5]=h*g+u*b+f*I+d*B,r[9]=h*A+u*P+f*U+d*G,r[13]=h*E+u*H+f*N+d*X,r[2]=x*M+y*T+m*S+p*z,r[6]=x*g+y*b+m*I+p*B,r[10]=x*A+y*P+m*U+p*G,r[14]=x*E+y*H+m*N+p*X,r[3]=w*M+_*T+v*S+R*z,r[7]=w*g+_*b+v*I+R*B,r[11]=w*A+_*P+v*U+R*G,r[15]=w*E+_*H+v*N+R*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],y=t[7],m=t[11],p=t[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+y*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],y=t[13],m=t[14],p=t[15],w=u*m*l-y*f*l+y*c*d-a*m*d-u*c*p+a*f*p,_=x*f*l-h*m*l-x*c*d+o*m*d+h*c*p-o*f*p,v=h*y*l-x*u*l+x*a*d-o*y*d-h*a*p+o*u*p,R=x*u*c-h*y*c-x*a*f+o*y*f+h*a*m-o*u*m,M=e*w+n*_+s*v+r*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let g=1/M;return t[0]=w*g,t[1]=(y*f*r-u*m*r-y*s*d+n*m*d+u*s*p-n*f*p)*g,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*p+n*c*p)*g,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*g,t[4]=_*g,t[5]=(h*m*r-x*f*r+x*s*d-e*m*d-h*s*p+e*f*p)*g,t[6]=(x*c*r-o*m*r-x*s*l+e*m*l+o*s*p-e*c*p)*g,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*g,t[8]=v*g,t[9]=(x*u*r-h*y*r-x*n*d+e*y*d+h*n*p-e*u*p)*g,t[10]=(o*y*r-x*a*r+x*n*l-e*y*l-o*n*p+e*a*p)*g,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*g,t[12]=R*g,t[13]=(h*y*s-x*u*s+x*n*f-e*y*f-h*n*m+e*u*m)*g,t[14]=(x*a*s-o*y*s-x*n*c+e*y*c+o*n*m-e*a*m)*g,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*g,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,x=r*u,y=o*h,m=o*u,p=a*u,w=c*l,_=c*h,v=c*u,R=n.x,M=n.y,g=n.z;return s[0]=(1-(y+p))*R,s[1]=(d+v)*R,s[2]=(x-_)*R,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(f+p))*M,s[6]=(m+w)*M,s[7]=0,s[8]=(x+_)*g,s[9]=(m-w)*g,s[10]=(1-(f+y))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=vr.set(s[0],s[1],s[2]).length(),o=vr.set(s[4],s[5],s[6]).length(),a=vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wi.copy(this);let l=1/r,h=1/o,u=1/a;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=u,wi.elements[9]*=u,wi.elements[10]*=u,e.setFromRotationMatrix(wi),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=rs){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,x;if(a===rs)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===La)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=rs){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h,x,y;if(a===rs)x=(o+r)*u,y=-2*u;else if(a===La)x=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vr=new O,wi=new Me,Um=new O(0,0,0),zm=new O(1,1,1),bs=new O,ia=new O,ri=new O,Du=new Me,Uu=new Hs,Fa=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fa.DEFAULT_ORDER="XYZ";var Ba=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nm=0,zu=new O,wr=new Hs,ts=new Me,sa=new O,ho=new O,Om=new O,Fm=new Hs,Nu=new O(1,0,0),Ou=new O(0,1,0),Fu=new O(0,0,1),Bm={type:"added"},km={type:"removed"},yn=class i extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Fa,n=new Hs,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new de}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Nu,t)}rotateY(t){return this.rotateOnAxis(Ou,t)}rotateZ(t){return this.rotateOnAxis(Fu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nu,t)}translateY(t){return this.translateOnAxis(Ou,t)}translateZ(t){return this.translateOnAxis(Fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(ho,sa,this.up):ts.lookAt(sa,ho,this.up),this.quaternion.setFromRotationMatrix(ts),s&&(ts.extractRotation(s.matrixWorld),wr.setFromRotationMatrix(ts),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(km)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ts.multiply(t.parent.matrixWorld)),t.applyMatrix4(ts),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,t,Om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,Fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};yn.DEFAULT_UP=new O(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new O,es=new O,Kc=new O,ns=new O,Tr=new O,br=new O,Bu=new O,jc=new O,Qc=new O,tl=new O,ra=!1,Ur=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ti.subVectors(t,e),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ti.subVectors(s,e),es.subVectors(n,e),Kc.subVectors(t,e);let o=Ti.dot(Ti),a=Ti.dot(es),c=Ti.dot(Kc),l=es.dot(es),h=es.dot(Kc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getUV(t,e,n,s,r,o,a,c){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ns)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ns.x),c.addScaledVector(o,ns.y),c.addScaledVector(a,ns.z),c)}static isFrontFacing(t,e,n,s){return Ti.subVectors(n,e),es.subVectors(t,e),Ti.cross(es).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),es.subVectors(this.a,this.b),Ti.cross(es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Tr.subVectors(s,n),br.subVectors(r,n),jc.subVectors(t,n);let c=Tr.dot(jc),l=br.dot(jc);if(c<=0&&l<=0)return e.copy(n);Qc.subVectors(t,s);let h=Tr.dot(Qc),u=br.dot(Qc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Tr,o);tl.subVectors(t,r);let d=Tr.dot(tl),x=br.dot(tl);if(x>=0&&d<=x)return e.copy(r);let y=d*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(br,a);let m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return Bu.subVectors(r,s),a=(u-h)/(u-h+(d-x)),e.copy(s).addScaledVector(Bu,a);let p=1/(m+y+f);return o=y*p,a=f*p,e.copy(n).addScaledVector(Tr,o).addScaledVector(br,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},oa={h:0,s:0,l:0};function el(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var j=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=ph(t,1),e=xn(e,0,1),n=xn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=el(o,r,t+1/3),this.g=el(o,r,t),this.b=el(o,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=Nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}copyLinearToSRGB(t){return this.r=Vc(t.r),this.g=Vc(t.g),this.b=Vc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Se.fromWorkingColorSpace(Dn.copy(this),t),Math.round(xn(Dn.r*255,0,255))*65536+Math.round(xn(Dn.g*255,0,255))*256+Math.round(xn(Dn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(Dn.copy(this),e);let n=Dn.r,s=Dn.g,r=Dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(Dn.copy(this),e),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=De){Se.fromWorkingColorSpace(Dn.copy(this),t);let e=Dn.r,n=Dn.g,s=Dn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ss),this.setHSL(Ss.h+t,Ss.s+e,Ss.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ss),t.getHSL(oa);let n=xo(Ss.h,oa.h,e),s=xo(Ss.s,oa.s,e),r=xo(Ss.l,oa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new j;j.NAMES=Nd;var Gm=0,cs=class extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Fr,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==Is&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ml&&(n.blendSrc=this.blendSrc),this.blendDst!==gl&&(n.blendDst=this.blendDst),this.blendEquation!==Js&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ve=class extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var rn=new O,aa=new dt,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ru,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=As,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array),s=Gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Gn(e,this.array),n=Gn(n,this.array),s=Gn(s,this.array),r=Gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ru&&(t.usage=this.usage),t}};var ka=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ga=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Vm=0,fi=new Me,nl=new yn,Sr=new O,oi=new _e,uo=new _e,gn=new O,oe=class i extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zd(t)?Ga:ka)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return nl.lookAt(t),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _e);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(oi.min,uo.min),oi.expandByPoint(gn),gn.addVectors(oi.max,uo.max),oi.expandByPoint(gn)):(oi.expandByPoint(uo.min),oi.expandByPoint(uo.max))}oi.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)gn.fromBufferAttribute(a,l),c&&(Sr.fromBufferAttribute(t,l),gn.add(Sr)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new O,h[T]=new O;let u=new O,f=new O,d=new O,x=new dt,y=new dt,m=new dt,p=new O,w=new O;function _(T,b,P){u.fromArray(s,T*3),f.fromArray(s,b*3),d.fromArray(s,P*3),x.fromArray(o,T*2),y.fromArray(o,b*2),m.fromArray(o,P*2),f.sub(u),d.sub(u),y.sub(x),m.sub(x);let H=1/(y.x*m.y-m.x*y.y);isFinite(H)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-y.y).multiplyScalar(H),w.copy(d).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(H),l[T].add(p),l[b].add(p),l[P].add(p),h[T].add(w),h[b].add(w),h[P].add(w))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,b=v.length;T<b;++T){let P=v[T],H=P.start,S=P.count;for(let I=H,U=H+S;I<U;I+=3)_(n[I+0],n[I+1],n[I+2])}let R=new O,M=new O,g=new O,A=new O;function E(T){g.fromArray(r,T*3),A.copy(g);let b=l[T];R.copy(b),R.sub(g.multiplyScalar(g.dot(b))).normalize(),M.crossVectors(A,b);let H=M.dot(h[T])<0?-1:1;c[T*4]=R.x,c[T*4+1]=R.y,c[T*4+2]=R.z,c[T*4+3]=H}for(let T=0,b=v.length;T<b;++T){let P=v[T],H=P.start,S=P.count;for(let I=H,U=H+S;I<U;I+=3)E(n[I+0]),E(n[I+1]),E(n[I+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,x=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let p=0;p<h;p++)f[x++]=l[d++]}return new fe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ku=new Me,Ys=new Oa,ca=new Ds,Gu=new O,Rr=new O,Ar=new O,Cr=new O,il=new O,la=new O,ha=new dt,ua=new dt,da=new dt,Vu=new O,Wu=new O,Xu=new O,fa=new O,pa=new O,k=class extends yn{constructor(t=new oe,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(il.fromBufferAttribute(u,t),o?la.addScaledVector(il,h):la.addScaledVector(il.sub(e),h))}e.add(la)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),Ys.copy(t.ray).recast(t.near),!(ca.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(ca,Gu)===null||Ys.origin.distanceToSquared(Gu)>(t.far-t.near)**2))&&(ku.copy(r).invert(),Ys.copy(t.ray).applyMatrix4(ku),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ys)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let m=f[x],p=o[m.materialIndex],w=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,R=_;v<R;v+=3){let M=a.getX(v),g=a.getX(v+1),A=a.getX(v+2);s=ma(this,p,t,n,l,h,u,M,g,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=x,p=y;m<p;m+=3){let w=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=ma(this,o,t,n,l,h,u,w,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let m=f[x],p=o[m.materialIndex],w=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,R=_;v<R;v+=3){let M=v,g=v+1,A=v+2;s=ma(this,p,t,n,l,h,u,M,g,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=x,p=y;m<p;m+=3){let w=m,_=m+1,v=m+2;s=ma(this,o,t,n,l,h,u,w,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Wm(i,t,e,n,s,r,o,a){let c;if(t.side===zn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Is,a),c===null)return null;pa.copy(a),pa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(pa);return l<e.near||l>e.far?null:{distance:l,point:pa.clone(),object:i}}function ma(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Rr),i.getVertexPosition(c,Ar),i.getVertexPosition(l,Cr);let h=Wm(i,t,e,n,Rr,Ar,Cr,fa);if(h){s&&(ha.fromBufferAttribute(s,a),ua.fromBufferAttribute(s,c),da.fromBufferAttribute(s,l),h.uv=Ur.getInterpolation(fa,Rr,Ar,Cr,ha,ua,da,new dt)),r&&(ha.fromBufferAttribute(r,a),ua.fromBufferAttribute(r,c),da.fromBufferAttribute(r,l),h.uv1=Ur.getInterpolation(fa,Rr,Ar,Cr,ha,ua,da,new dt),h.uv2=h.uv1),o&&(Vu.fromBufferAttribute(o,a),Wu.fromBufferAttribute(o,c),Xu.fromBufferAttribute(o,l),h.normal=Ur.getInterpolation(fa,Rr,Ar,Cr,Vu,Wu,Xu,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new O,materialIndex:0};Ur.getNormal(Rr,Ar,Cr,u.normal),h.face=u}return h}var ft=class i extends oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function x(y,m,p,w,_,v,R,M,g,A,E){let T=v/g,b=R/A,P=v/2,H=R/2,S=M/2,I=g+1,U=A+1,N=0,z=0,B=new O;for(let G=0;G<U;G++){let X=G*b-H;for(let nt=0;nt<I;nt++){let q=nt*T-P;B[y]=q*w,B[m]=X*_,B[p]=S,l.push(B.x,B.y,B.z),B[y]=0,B[m]=0,B[p]=M>0?1:-1,h.push(B.x,B.y,B.z),u.push(nt/g),u.push(1-G/A),N+=1}}for(let G=0;G<A;G++)for(let X=0;X<g;X++){let nt=f+X+I*G,q=f+X+I*(G+1),K=f+(X+1)+I*(G+1),ut=f+(X+1)+I*G;c.push(nt,q,ut),c.push(q,K,ut),z+=6}a.addGroup(d,z,E),d+=z,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Vn(i){let t={};for(let e=0;e<i.length;e++){let n=Xr(i[e]);for(let s in n)t[s]=n[s]}return t}function Xm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Od(i){return i.getRenderTarget()===null?i.outputColorSpace:Se.workingColorSpace}var mh={clone:Xr,merge:Vn},qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=Xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Va=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=rs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=class extends Va{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(go*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Pr=-90,Ir=1,bl=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(Pr,Ir,t,e);s.layers=this.layers,this.add(s);let r=new Un(Pr,Ir,t,e);r.layers=this.layers,this.add(r);let o=new Un(Pr,Ir,t,e);o.layers=this.layers,this.add(o);let a=new Un(Pr,Ir,t,e);a.layers=this.layers,this.add(a);let c=new Un(Pr,Ir,t,e);c.layers=this.layers,this.add(c);let l=new Un(Pr,Ir,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===rs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Wa=class extends ai{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Gr,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sl=class extends as{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(yo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===tr?De:pi),this.texture=new Wa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ft(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Cs});r.uniforms.tEquirect.value=e;let o=new k(s,r),a=e.minFilter;return e.minFilter===wo&&(e.minFilter=Wn),new bl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},sl=new O,Zm=new O,$m=new de,ss=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sl.subVectors(n,e).cross(Zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$m.getNormalMatrix(t),s=this.coplanarPoint(sl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new Ds,ga=new O,So=class{constructor(t=new ss,e=new ss,n=new ss,s=new ss,r=new ss,o=new ss){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rs){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],y=s[10],m=s[11],p=s[12],w=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-d,v-p).normalize(),n[1].setComponents(c+r,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+h,m+x,v+w).normalize(),n[3].setComponents(c-o,f-h,m-x,v-w).normalize(),n[4].setComponents(c-a,f-u,m-y,v-_).normalize(),e===rs)n[5].setComponents(c+a,f+u,m+y,v+_).normalize();else if(e===La)n[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(t){return Zs.center.set(0,0,0),Zs.radius=.7071067811865476,Zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jm(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,u,f),l.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,x=h.updateRanges;if(i.bindBuffer(u,l),d.count===-1&&x.length===0&&i.bufferSubData(u,0,f),x.length!==0){for(let y=0,m=x.length;y<m;y++){let p=x[y];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var _n=class i extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],x=[],y=[],m=[];for(let p=0;p<h;p++){let w=p*f-o;for(let _=0;_<l;_++){let v=_*u-r;x.push(v,-w,0),y.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let _=w+l*p,v=w+l*(p+1),R=w+1+l*(p+1),M=w+1+l*p;d.push(_,v,M),d.push(v,R,M)}this.setIndex(d),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
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
#endif`,Qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
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
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h0=`#ifdef USE_IRIDESCENCE
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
#endif`,u0=`#ifdef USE_BUMPMAP
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,E0=`#define PI 3.141592653589793
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
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`
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
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,B0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
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
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$0=`PhysicalMaterial material;
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
#endif`,J0=`struct PhysicalMaterial {
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
}`,K0=`
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ng=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ag=`#if defined( USE_POINTS_UV )
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
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ug=`#ifdef USE_MORPHNORMALS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
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
#endif`,fg=`#ifdef USE_MORPHTARGETS
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
#endif`,pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,Eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ig=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ug=`float getShadowMask() {
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
}`,zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
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
}`,ix=`#if DEPTH_PACKING == 3200
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
}`,sx=`#define DISTANCE
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
}`,rx=`#define DISTANCE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
}`,lx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#define LAMBERT
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
}`,fx=`#define LAMBERT
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
}`,px=`#define MATCAP
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
}`,mx=`#define MATCAP
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
}`,gx=`#define NORMAL
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
}`,xx=`#define NORMAL
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
}`,yx=`#define PHONG
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
}`,_x=`#define PHONG
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
}`,Ex=`#define STANDARD
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
}`,Mx=`#define STANDARD
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
}`,vx=`#define TOON
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
}`,wx=`#define TOON
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
}`,Tx=`uniform float size;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Rx=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Km,alphahash_pars_fragment:jm,alphamap_fragment:Qm,alphamap_pars_fragment:t0,alphatest_fragment:e0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:s0,batching_pars_vertex:r0,batching_vertex:o0,begin_vertex:a0,beginnormal_vertex:c0,bsdfs:l0,iridescence_fragment:h0,bumpmap_pars_fragment:u0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:p0,clipping_planes_vertex:m0,color_fragment:g0,color_pars_fragment:x0,color_pars_vertex:y0,color_vertex:_0,common:E0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:v0,displacementmap_pars_vertex:w0,displacementmap_vertex:T0,emissivemap_fragment:b0,emissivemap_pars_fragment:S0,colorspace_fragment:R0,colorspace_pars_fragment:A0,envmap_fragment:C0,envmap_common_pars_fragment:P0,envmap_pars_fragment:I0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:W0,envmap_vertex:H0,fog_vertex:D0,fog_pars_vertex:U0,fog_fragment:z0,fog_pars_fragment:N0,gradientmap_pars_fragment:O0,lightmap_fragment:F0,lightmap_pars_fragment:B0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:G0,lights_pars_begin:V0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:Z0,lights_physical_fragment:$0,lights_physical_pars_fragment:J0,lights_fragment_begin:K0,lights_fragment_maps:j0,lights_fragment_end:Q0,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:eg,logdepthbuf_pars_vertex:ng,logdepthbuf_vertex:ig,map_fragment:sg,map_pars_fragment:rg,map_particle_fragment:og,map_particle_pars_fragment:ag,metalnessmap_fragment:cg,metalnessmap_pars_fragment:lg,morphcolor_vertex:hg,morphnormal_vertex:ug,morphtarget_pars_vertex:dg,morphtarget_vertex:fg,normal_fragment_begin:pg,normal_fragment_maps:mg,normal_pars_fragment:gg,normal_pars_vertex:xg,normal_vertex:yg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:Eg,clearcoat_normal_fragment_maps:Mg,clearcoat_pars_fragment:vg,iridescence_pars_fragment:wg,opaque_fragment:Tg,packing:bg,premultiplied_alpha_fragment:Sg,project_vertex:Rg,dithering_fragment:Ag,dithering_pars_fragment:Cg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Ig,shadowmap_pars_fragment:Lg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ug,skinbase_vertex:zg,skinning_pars_vertex:Ng,skinning_vertex:Og,skinnormal_vertex:Fg,specularmap_fragment:Bg,specularmap_pars_fragment:kg,tonemapping_fragment:Gg,tonemapping_pars_fragment:Vg,transmission_fragment:Wg,transmission_pars_fragment:Xg,uv_pars_fragment:qg,uv_pars_vertex:Yg,uv_vertex:Zg,worldpos_vertex:$g,background_vert:Jg,background_frag:Kg,backgroundCube_vert:jg,backgroundCube_frag:Qg,cube_vert:tx,cube_frag:ex,depth_vert:nx,depth_frag:ix,distanceRGBA_vert:sx,distanceRGBA_frag:rx,equirect_vert:ox,equirect_frag:ax,linedashed_vert:cx,linedashed_frag:lx,meshbasic_vert:hx,meshbasic_frag:ux,meshlambert_vert:dx,meshlambert_frag:fx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:xx,meshphong_vert:yx,meshphong_frag:_x,meshphysical_vert:Ex,meshphysical_frag:Mx,meshtoon_vert:vx,meshtoon_frag:wx,points_vert:Tx,points_frag:bx,shadow_vert:Sx,shadow_frag:Rx,sprite_vert:Ax,sprite_frag:Cx},Mt={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},zi={basic:{uniforms:Vn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Vn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Vn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Vn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Vn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new j(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Vn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Vn([Mt.points,Mt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Vn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Vn([Mt.common,Mt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Vn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Vn([Mt.sprite,Mt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Vn([Mt.common,Mt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Vn([Mt.lights,Mt.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};zi.physical={uniforms:Vn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var xa={r:0,b:0,g:0};function Px(i,t,e,n,s,r,o){let a=new j(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function x(m,p){let w=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?y(a,c):_&&_.isColor&&(y(_,1),w=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===lc)?(h===void 0&&(h=new k(new ft(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Xr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,M,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Se.getTransfer(_.colorSpace)!==He,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new k(new _n(2,2),new Nn({name:"BackgroundMaterial",uniforms:Xr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Se.getTransfer(_.colorSpace)!==He,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,p){m.getRGB(xa,Od(i)),n.buffers.color.setClear(xa.r,xa.g,xa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:x}}function Ix(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(S,I,U,N,z){let B=!1;if(o){let G=y(N,U,I);l!==G&&(l=G,d(l.object)),B=p(S,N,U,z),B&&w(S,N,U,z)}else{let G=I.wireframe===!0;(l.geometry!==N.id||l.program!==U.id||l.wireframe!==G)&&(l.geometry=N.id,l.program=U.id,l.wireframe=G,B=!0)}z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,A(S,I,U,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(S){return n.isWebGL2?i.bindVertexArray(S):r.bindVertexArrayOES(S)}function x(S){return n.isWebGL2?i.deleteVertexArray(S):r.deleteVertexArrayOES(S)}function y(S,I,U){let N=U.wireframe===!0,z=a[S.id];z===void 0&&(z={},a[S.id]=z);let B=z[I.id];B===void 0&&(B={},z[I.id]=B);let G=B[N];return G===void 0&&(G=m(f()),B[N]=G),G}function m(S){let I=[],U=[],N=[];for(let z=0;z<s;z++)I[z]=0,U[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,I,U,N){let z=l.attributes,B=I.attributes,G=0,X=U.getAttributes();for(let nt in X)if(X[nt].location>=0){let K=z[nt],ut=B[nt];if(ut===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),K===void 0||K.attribute!==ut||ut&&K.data!==ut.data)return!0;G++}return l.attributesNum!==G||l.index!==N}function w(S,I,U,N){let z={},B=I.attributes,G=0,X=U.getAttributes();for(let nt in X)if(X[nt].location>=0){let K=B[nt];K===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));let ut={};ut.attribute=K,K&&K.data&&(ut.data=K.data),z[nt]=ut,G++}l.attributes=z,l.attributesNum=G,l.index=N}function _(){let S=l.newAttributes;for(let I=0,U=S.length;I<U;I++)S[I]=0}function v(S){R(S,0)}function R(S,I){let U=l.newAttributes,N=l.enabledAttributes,z=l.attributeDivisors;U[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),z[S]!==I&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,I),z[S]=I)}function M(){let S=l.newAttributes,I=l.enabledAttributes;for(let U=0,N=I.length;U<N;U++)I[U]!==S[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function g(S,I,U,N,z,B,G){G===!0?i.vertexAttribIPointer(S,I,U,z,B):i.vertexAttribPointer(S,I,U,N,z,B)}function A(S,I,U,N){if(n.isWebGL2===!1&&(S.isInstancedMesh||N.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let z=N.attributes,B=U.getAttributes(),G=I.defaultAttributeValues;for(let X in B){let nt=B[X];if(nt.location>=0){let q=z[X];if(q===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){let K=q.normalized,ut=q.itemSize,Tt=e.get(q);if(Tt===void 0)continue;let yt=Tt.buffer,Bt=Tt.type,qt=Tt.bytesPerElement,bt=n.isWebGL2===!0&&(Bt===i.INT||Bt===i.UNSIGNED_INT||q.gpuType===Rd);if(q.isInterleavedBufferAttribute){let Ot=q.data,V=Ot.stride,at=q.offset;if(Ot.isInstancedInterleavedBuffer){for(let Q=0;Q<nt.locationSize;Q++)R(nt.location+Q,Ot.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let Q=0;Q<nt.locationSize;Q++)v(nt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Q=0;Q<nt.locationSize;Q++)g(nt.location+Q,ut/nt.locationSize,Bt,K,V*qt,(at+ut/nt.locationSize*Q)*qt,bt)}else{if(q.isInstancedBufferAttribute){for(let Ot=0;Ot<nt.locationSize;Ot++)R(nt.location+Ot,q.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ot=0;Ot<nt.locationSize;Ot++)v(nt.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Ot=0;Ot<nt.locationSize;Ot++)g(nt.location+Ot,ut/nt.locationSize,Bt,K,ut*qt,ut/nt.locationSize*Ot*qt,bt)}}else if(G!==void 0){let K=G[X];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(nt.location,K);break;case 3:i.vertexAttrib3fv(nt.location,K);break;case 4:i.vertexAttrib4fv(nt.location,K);break;default:i.vertexAttrib1fv(nt.location,K)}}}}M()}function E(){P();for(let S in a){let I=a[S];for(let U in I){let N=I[U];for(let z in N)x(N[z].object),delete N[z];delete I[U]}delete a[S]}}function T(S){if(a[S.id]===void 0)return;let I=a[S.id];for(let U in I){let N=I[U];for(let z in N)x(N[z].object),delete N[z];delete I[U]}delete a[S.id]}function b(S){for(let I in a){let U=a[I];if(U[S.id]===void 0)continue;let N=U[S.id];for(let z in N)x(N[z].object),delete N[z];delete U[S.id]}}function P(){H(),h=!0,l!==c&&(l=c,d(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:P,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:v,disableUnusedAttributes:M}}function Lx(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,x;if(s)d=i,x="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[x](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<f;x++)this.render(h[x],u[x]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let x=0;for(let y=0;y<f;y++)x+=u[y];e.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Hx(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,v=o||t.has("OES_texture_float"),R=_&&v,M=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:R,maxSamples:M}}function Dx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ss,a=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let w=r?0:n,_=w*4,v=p.clippingState||null;c.value=v,v=h(x,f,_,d);for(let R=0;R!==_;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,x!==!0||m===null){let p=d+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==y;++_,v+=4)o.copy(u[_]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Ux(i){let t=new WeakMap;function e(o,a){return a===xl?o.mapping=Gr:a===yl&&(o.mapping=Vr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xl||a===yl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Sl(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xa=class extends Va{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zr=4,qu=[.125,.215,.35,.446,.526,.582],Ks=20,rl=new Xa,Yu=new j,ol=null,al=0,cl=0,$s=(1+Math.sqrt(5))/2,Lr=1/$s,Zu=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,$s,Lr),new O(0,$s,-Lr),new O(Lr,0,$s),new O(-Lr,0,$s),new O($s,Lr,0),new O(-$s,Lr,0)],qa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ol,al,cl),t.scissorTest=!1,ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gr||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:To,format:Si,colorSpace:os,depthBuffer:!1},s=$u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zx(r)),this._blurMaterial=Nx(r,t,e)}return s}_compileMaterial(t){let e=new k(this._lodPlanes[0],t);this._renderer.compile(e,rl)}_sceneToCubeUV(t,e,n,s){let a=new Un(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yu),h.toneMapping=Ps,h.autoClear=!1;let d=new ve({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),x=new k(new ft,d),y=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,y=!0):(d.color.copy(Yu),y=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;ya(s,w*_,p>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gr||t.mapping===Vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ya(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,rl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zu[(s-1)%Zu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new k(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ks-1),y=r/x,m=isFinite(r)?1+Math.floor(h*y):Ks;m>Ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ks}`);let p=[],w=0;for(let g=0;g<Ks;++g){let A=g/y,E=Math.exp(-A*A/2);p.push(E),g===0?w+=E:g<m&&(w+=2*E)}for(let g=0;g<p.length;g++)p[g]=p[g]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;let v=this._sizeLods[s],R=3*v*(s>_-zr?s-_+zr:0),M=4*(this._cubeSize-v);ya(e,R,M,3*v,2*v),c.setRenderTarget(e),c.render(u,rl)}};function zx(i){let t=[],e=[],n=[],s=i,r=i-zr+1+qu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-zr?c=qu[o-i+zr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,y=3,m=2,p=1,w=new Float32Array(y*x*d),_=new Float32Array(m*x*d),v=new Float32Array(p*x*d);for(let M=0;M<d;M++){let g=M%3*2/3-1,A=M>2?0:-1,E=[g,A,0,g+2/3,A,0,g+2/3,A+1,0,g,A,0,g+2/3,A+1,0,g,A+1,0];w.set(E,y*x*M),_.set(f,m*x*M);let T=[M,M,M,M,M,M];v.set(T,p*x*M)}let R=new oe;R.setAttribute("position",new fe(w,y)),R.setAttribute("uv",new fe(_,m)),R.setAttribute("faceIndex",new fe(v,p)),t.push(R),s>zr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $u(i,t,e){let n=new as(i,t,e);return n.texture.mapping=lc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ya(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nx(i,t,e){let n=new Float32Array(Ks),s=new O(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Ju(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function Ku(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function gh(){return`

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
	`}function Ox(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===xl||c===yl,h=c===Gr||c===Vr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new qa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new qa(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bx(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);for(let x in f.morphAttributes){let y=f.morphAttributes[x];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let x in f)t.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let y=d[x];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,x=u.attributes.position,y=0;if(d!==null){let w=d.array;y=d.version;for(let _=0,v=w.length;_<v;_+=3){let R=w[_+0],M=w[_+1],g=w[_+2];f.push(R,M,M,g,g,R)}}else if(x!==void 0){let w=x.array;y=x.version;for(let _=0,v=w.length/3-1;_<v;_+=3){let R=_+0,M=_+1,g=_+2;f.push(R,M,M,g,g,R)}}else return;let m=new(zd(f)?Ga:ka)(f,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function kx(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,x){i.drawElements(r,x,a,d*c),e.update(x,r,1)}function u(d,x,y){if(y===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,x,a,d*c,y),e.update(x,r,y)}function f(d,x,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(d[p]/c,x[p]);else{m.multiDrawElementsWEBGL(r,x,0,a,d,0,y);let p=0;for(let w=0;w<y;w++)p+=x[w];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Gx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vx(i,t){return i[0]-t[0]}function Wx(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Xx(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Fe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=d!==void 0?d.length:0,y=r.get(h);if(y===void 0||y.count!==x){let S=function(){P.dispose(),r.delete(h),h.removeEventListener("dispose",S)};y!==void 0&&y.texture.dispose();let w=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],g=h.morphAttributes.color||[],A=0;w===!0&&(A=1),_===!0&&(A=2),v===!0&&(A=3);let E=h.attributes.position.count*A,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let b=new Float32Array(E*T*4*x),P=new Na(b,E,T,x);P.type=As,P.needsUpdate=!0;let H=A*4;for(let I=0;I<x;I++){let U=R[I],N=M[I],z=g[I],B=E*T*4*I;for(let G=0;G<U.count;G++){let X=G*H;w===!0&&(o.fromBufferAttribute(U,G),b[B+X+0]=o.x,b[B+X+1]=o.y,b[B+X+2]=o.z,b[B+X+3]=0),_===!0&&(o.fromBufferAttribute(N,G),b[B+X+4]=o.x,b[B+X+5]=o.y,b[B+X+6]=o.z,b[B+X+7]=0),v===!0&&(o.fromBufferAttribute(z,G),b[B+X+8]=o.x,b[B+X+9]=o.y,b[B+X+10]=o.z,b[B+X+11]=z.itemSize===4?o.w:1)}}y={count:x,texture:P,size:new dt(E,T)},r.set(h,y),h.addEventListener("dispose",S)}let m=0;for(let w=0;w<f.length;w++)m+=f[w];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let d=f===void 0?0:f.length,x=n[h.id];if(x===void 0||x.length!==d){x=[];for(let _=0;_<d;_++)x[_]=[_,0];n[h.id]=x}for(let _=0;_<d;_++){let v=x[_];v[0]=_,v[1]=f[_]}x.sort(Wx);for(let _=0;_<8;_++)_<d&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Vx);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let v=a[_],R=v[0],M=v[1];R!==Number.MAX_SAFE_INTEGER&&M?(y&&h.getAttribute("morphTarget"+_)!==y[R]&&h.setAttribute("morphTarget"+_,y[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),s[_]=M,p+=M):(y&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let w=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function qx(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Ya=class extends ai{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Qs,h!==Qs&&h!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qs&&(n=Rs),n===void 0&&h===Wr&&(n=js),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bd=new ai,kd=new Ya(1,1);kd.compareFunction=Ud;var Gd=new Na,Vd=new Tl,Wd=new Wa,ju=[],Qu=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ju[s];if(r===void 0&&(r=new Float32Array(s),ju[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function hn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function un(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function uc(i,t){let e=Qu[t];e===void 0&&(e=new Int32Array(t),Qu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2fv(this.addr,t),un(e,t)}}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;i.uniform3fv(this.addr,t),un(e,t)}}function Jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4fv(this.addr,t),un(e,t)}}function Kx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;nd.set(n),i.uniformMatrix2fv(this.addr,!1,nd),un(e,n)}}function jx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;ed.set(n),i.uniformMatrix3fv(this.addr,!1,ed),un(e,n)}}function Qx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;td.set(n),i.uniformMatrix4fv(this.addr,!1,td),un(e,n)}}function ty(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2iv(this.addr,t),un(e,t)}}function ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3iv(this.addr,t),un(e,t)}}function iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4iv(this.addr,t),un(e,t)}}function sy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2uiv(this.addr,t),un(e,t)}}function oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3uiv(this.addr,t),un(e,t)}}function ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4uiv(this.addr,t),un(e,t)}}function cy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?kd:Bd;e.setTexture2D(t||r,s)}function ly(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vd,s)}function hy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wd,s)}function uy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gd,s)}function dy(i){switch(i){case 5126:return Yx;case 35664:return Zx;case 35665:return $x;case 35666:return Jx;case 35674:return Kx;case 35675:return jx;case 35676:return Qx;case 5124:case 35670:return ty;case 35667:case 35671:return ey;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return sy;case 36294:return ry;case 36295:return oy;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return uy}}function fy(i,t){i.uniform1fv(this.addr,t)}function py(i,t){let e=Yr(t,this.size,2);i.uniform2fv(this.addr,e)}function my(i,t){let e=Yr(t,this.size,3);i.uniform3fv(this.addr,e)}function gy(i,t){let e=Yr(t,this.size,4);i.uniform4fv(this.addr,e)}function xy(i,t){let e=Yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yy(i,t){let e=Yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _y(i,t){let e=Yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ey(i,t){i.uniform1iv(this.addr,t)}function My(i,t){i.uniform2iv(this.addr,t)}function vy(i,t){i.uniform3iv(this.addr,t)}function wy(i,t){i.uniform4iv(this.addr,t)}function Ty(i,t){i.uniform1uiv(this.addr,t)}function by(i,t){i.uniform2uiv(this.addr,t)}function Sy(i,t){i.uniform3uiv(this.addr,t)}function Ry(i,t){i.uniform4uiv(this.addr,t)}function Ay(i,t,e){let n=this.cache,s=t.length,r=uc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bd,r[o])}function Cy(i,t,e){let n=this.cache,s=t.length,r=uc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vd,r[o])}function Py(i,t,e){let n=this.cache,s=t.length,r=uc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Wd,r[o])}function Iy(i,t,e){let n=this.cache,s=t.length,r=uc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gd,r[o])}function Ly(i){switch(i){case 5126:return fy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return xy;case 35675:return yy;case 35676:return _y;case 5124:case 35670:return Ey;case 35667:case 35671:return My;case 35668:case 35672:return vy;case 35669:case 35673:return wy;case 5125:return Ty;case 36294:return by;case 36295:return Sy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Iy}}var Rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dy(e.type)}},Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ly(e.type)}},Cl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ll=/(\w+)(\])?(\[|\.)?/g;function id(i,t){i.seq.push(t),i.map[t.id]=t}function Hy(i,t,e){let n=i.name,s=n.length;for(ll.lastIndex=0;;){let r=ll.exec(n),o=ll.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){id(e,l===void 0?new Rl(a,i,t):new Al(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Cl(a),id(e,u)),e=u}}}var kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Hy(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function sd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Dy=37297,Uy=0;function zy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Ny(i){let t=Se.getPrimaries(Se.workingColorSpace),e=Se.getPrimaries(i),n;switch(t===e?n="":t===Ia&&e===Pa?n="LinearDisplayP3ToLinearSRGB":t===Pa&&e===Ia&&(n="LinearSRGBToLinearDisplayP3"),i){case os:case hc:return[n,"LinearTransferOETF"];case De:case fh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+zy(i.getShaderSource(t),o)}else return s}function Oy(i,t){let e=Ny(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Fy(i,t){let e;switch(t){case qp:e="Linear";break;case Yp:e="Reinhard";break;case Zp:e="OptimizedCineon";break;case $p:e="ACESFilmic";break;case Kp:e="AgX";break;case Jp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function By(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nr).join(`
`)}function ky(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Nr).join(`
`)}function Gy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Nr(i){return i!==""}function od(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(Wy,qy)}var Xy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qy(i,t){let e=re[t];if(e===void 0){let n=Xy.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pl(e)}var Yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(i){return i.replace(Yy,Zy)}function Zy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $y(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===is&&(t="SHADOWMAP_TYPE_VSM"),t}function Jy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gr:case Vr:t="ENVMAP_TYPE_CUBE";break;case lc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ky(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vr:t="ENVMAP_MODE_REFRACTION";break}return t}function jy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lh:t="ENVMAP_BLENDING_MULTIPLY";break;case Wp:t="ENVMAP_BLENDING_MIX";break;case Xp:t="ENVMAP_BLENDING_ADD";break}return t}function Qy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function t_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=$y(e),l=Jy(e),h=Ky(e),u=jy(e),f=Qy(e),d=e.isWebGL2?"":By(e),x=ky(e),y=Gy(r),m=s.createProgram(),p,w,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Nr).join(`
`),p.length>0&&(p+=`
`),w=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Nr).join(`
`),w.length>0&&(w+=`
`)):(p=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),w=[d,ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ps?"#define TONE_MAPPING":"",e.toneMapping!==Ps?re.tonemapping_pars_fragment:"",e.toneMapping!==Ps?Fy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Oy("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Pl(o),o=od(o,e),o=ad(o,e),a=Pl(a),a=od(a,e),a=ad(a,e),o=cd(o),a=cd(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let v=_+p+o,R=_+w+a,M=sd(s,s.VERTEX_SHADER,v),g=sd(s,s.FRAGMENT_SHADER,R);s.attachShader(m,M),s.attachShader(m,g),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(P){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(m).trim(),S=s.getShaderInfoLog(M).trim(),I=s.getShaderInfoLog(g).trim(),U=!0,N=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,g);else{let z=rd(s,M,"vertex"),B=rd(s,g,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+z+`
`+B)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(S===""||I==="")&&(N=!1);N&&(P.diagnostics={runnable:U,programLog:H,vertexShader:{log:S,prefix:p},fragmentShader:{log:I,prefix:w}})}s.deleteShader(M),s.deleteShader(g),E=new kr(s,m),T=Vy(s,m)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(m,Dy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uy++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=g,this}var e_=0,Il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ll(t),e.set(t,n)),n}},Ll=class{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}};function n_(i,t,e,n,s,r,o){let a=new Ba,c=new Il,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function m(E,T,b,P,H){let S=P.fog,I=H.geometry,U=E.isMeshStandardMaterial?P.environment:null,N=(E.isMeshStandardMaterial?e:t).get(E.envMap||U),z=N&&N.mapping===lc?N.image.height:null,B=x[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let G=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,X=G!==void 0?G.length:0,nt=0;I.morphAttributes.position!==void 0&&(nt=1),I.morphAttributes.normal!==void 0&&(nt=2),I.morphAttributes.color!==void 0&&(nt=3);let q,K,ut,Tt;if(B){let Pe=zi[B];q=Pe.vertexShader,K=Pe.fragmentShader}else q=E.vertexShader,K=E.fragmentShader,c.update(E),ut=c.getVertexShaderID(E),Tt=c.getFragmentShaderID(E);let yt=i.getRenderTarget(),Bt=H.isInstancedMesh===!0,qt=H.isBatchedMesh===!0,bt=!!E.map,Ot=!!E.matcap,V=!!N,at=!!E.aoMap,Q=!!E.lightMap,lt=!!E.bumpMap,et=!!E.normalMap,Pt=!!E.displacementMap,gt=!!E.emissiveMap,D=!!E.metalnessMap,L=!!E.roughnessMap,Z=E.anisotropy>0,rt=E.clearcoat>0,ot=E.iridescence>0,it=E.sheen>0,Dt=E.transmission>0,vt=Z&&!!E.anisotropyMap,Rt=rt&&!!E.clearcoatMap,Gt=rt&&!!E.clearcoatNormalMap,$t=rt&&!!E.clearcoatRoughnessMap,ct=ot&&!!E.iridescenceMap,te=ot&&!!E.iridescenceThicknessMap,kt=it&&!!E.sheenColorMap,Jt=it&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,Ct=!!E.specularColorMap,Kt=!!E.specularIntensityMap,Ee=Dt&&!!E.transmissionMap,tt=Dt&&!!E.thicknessMap,Yt=!!E.gradientMap,_t=!!E.alphaMap,F=E.alphaTest>0,st=!!E.alphaHash,mt=!!E.extensions,Lt=!!I.attributes.uv1,Et=!!I.attributes.uv2,ge=!!I.attributes.uv3,ye=Ps;return E.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ye=i.toneMapping),{isWebGL2:h,shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:K,defines:E.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:qt,instancing:Bt,instancingColor:Bt&&H.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:os,map:bt,matcap:Ot,envMap:V,envMapMode:V&&N.mapping,envMapCubeUVHeight:z,aoMap:at,lightMap:Q,bumpMap:lt,normalMap:et,displacementMap:f&&Pt,emissiveMap:gt,normalMapObjectSpace:et&&E.normalMapType===cm,normalMapTangentSpace:et&&E.normalMapType===dh,metalnessMap:D,roughnessMap:L,anisotropy:Z,anisotropyMap:vt,clearcoat:rt,clearcoatMap:Rt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:$t,iridescence:ot,iridescenceMap:ct,iridescenceThicknessMap:te,sheen:it,sheenColorMap:kt,sheenRoughnessMap:Jt,specularMap:Ft,specularColorMap:Ct,specularIntensityMap:Kt,transmission:Dt,transmissionMap:Ee,thicknessMap:tt,gradientMap:Yt,opaque:E.transparent===!1&&E.blending===Fr,alphaMap:_t,alphaTest:F,alphaHash:st,combine:E.combine,mapUv:bt&&y(E.map.channel),aoMapUv:at&&y(E.aoMap.channel),lightMapUv:Q&&y(E.lightMap.channel),bumpMapUv:lt&&y(E.bumpMap.channel),normalMapUv:et&&y(E.normalMap.channel),displacementMapUv:Pt&&y(E.displacementMap.channel),emissiveMapUv:gt&&y(E.emissiveMap.channel),metalnessMapUv:D&&y(E.metalnessMap.channel),roughnessMapUv:L&&y(E.roughnessMap.channel),anisotropyMapUv:vt&&y(E.anisotropyMap.channel),clearcoatMapUv:Rt&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:te&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&y(E.sheenRoughnessMap.channel),specularMapUv:Ft&&y(E.specularMap.channel),specularColorMapUv:Ct&&y(E.specularColorMap.channel),specularIntensityMapUv:Kt&&y(E.specularIntensityMap.channel),transmissionMapUv:Ee&&y(E.transmissionMap.channel),thicknessMapUv:tt&&y(E.thicknessMap.channel),alphaMapUv:_t&&y(E.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(et||Z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:Et,vertexUv3s:ge,pointsUvs:H.isPoints===!0&&!!I.attributes.uv&&(bt||_t),fog:!!S,useFog:E.fog===!0,fogExp2:S&&S.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&E.map.isVideoTexture===!0&&Se.getTransfer(E.map.colorSpace)===He,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===le,flipSided:E.side===zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:mt&&E.extensions.derivatives===!0,extensionFragDepth:mt&&E.extensions.fragDepth===!0,extensionDrawBuffers:mt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let b in E.defines)T.push(b),T.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(w(T,E),_(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function w(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function _(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function v(E){let T=x[E.type],b;if(T){let P=zi[T];b=mh.clone(P.uniforms)}else b=E.uniforms;return b}function R(E,T){let b;for(let P=0,H=l.length;P<H;P++){let S=l[P];if(S.cacheKey===T){b=S,++b.usedTimes;break}}return b===void 0&&(b=new t_(i,T,E,r),l.push(b)),b}function M(E){if(--E.usedTimes===0){let T=l.indexOf(E);l[T]=l[l.length-1],l.pop(),E.destroy()}}function g(E){c.remove(E)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:M,releaseShaderCache:g,programs:l,dispose:A}}function i_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ud(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,x,y,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:y,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function a(u,f,d,x,y,m){let p=o(u,f,d,x,y,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,x,y,m){let p=o(u,f,d,x,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||s_),n.length>1&&n.sort(f||hd),s.length>1&&s.sort(f||hd)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function r_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ud,i.set(n,[o])):s>=r.length?(o=new ud,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function o_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new j};break;case"SpotLight":e={position:new O,direction:new O,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function a_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var c_=0;function l_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h_(i,t){let e=new o_,n=a_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);let r=new O,o=new Me,a=new Me;function c(h,u){let f=0,d=0,x=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let y=0,m=0,p=0,w=0,_=0,v=0,R=0,M=0,g=0,A=0,E=0;h.sort(l_);let T=u===!0?Math.PI:1;for(let P=0,H=h.length;P<H;P++){let S=h[P],I=S.color,U=S.intensity,N=S.distance,z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)f+=I.r*U*T,d+=I.g*U*T,x+=I.b*U*T;else if(S.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(S.sh.coefficients[B],U);E++}else if(S.isDirectionalLight){let B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity*T),S.castShadow){let G=S.shadow,X=n.get(S);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.directionalShadow[y]=X,s.directionalShadowMap[y]=z,s.directionalShadowMatrix[y]=S.shadow.matrix,v++}s.directional[y]=B,y++}else if(S.isSpotLight){let B=e.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(I).multiplyScalar(U*T),B.distance=N,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,s.spot[p]=B;let G=S.shadow;if(S.map&&(s.spotLightMap[g]=S.map,g++,G.updateMatrices(S),S.castShadow&&A++),s.spotLightMatrix[p]=G.matrix,S.castShadow){let X=n.get(S);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.spotShadow[p]=X,s.spotShadowMap[p]=z,M++}p++}else if(S.isRectAreaLight){let B=e.get(S);B.color.copy(I).multiplyScalar(U),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),s.rectArea[w]=B,w++}else if(S.isPointLight){let B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity*T),B.distance=S.distance,B.decay=S.decay,S.castShadow){let G=S.shadow,X=n.get(S);X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,s.pointShadow[m]=X,s.pointShadowMap[m]=z,s.pointShadowMatrix[m]=S.shadow.matrix,R++}s.point[m]=B,m++}else if(S.isHemisphereLight){let B=e.get(S);B.skyColor.copy(S.color).multiplyScalar(U*T),B.groundColor.copy(S.groundColor).multiplyScalar(U*T),s.hemi[_]=B,_++}}w>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=x;let b=s.hash;(b.directionalLength!==y||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==w||b.hemiLength!==_||b.numDirectionalShadows!==v||b.numPointShadows!==R||b.numSpotShadows!==M||b.numSpotMaps!==g||b.numLightProbes!==E)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=w,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=M+g-A,s.spotLightMap.length=g,s.numSpotLightShadowsWithMaps=A,s.numLightProbes=E,b.directionalLength=y,b.pointLength=m,b.spotLength=p,b.rectAreaLength=w,b.hemiLength=_,b.numDirectionalShadows=v,b.numPointShadows=R,b.numSpotShadows=M,b.numSpotMaps=g,b.numLightProbes=E,s.version=c_++)}function l(h,u){let f=0,d=0,x=0,y=0,m=0,p=u.matrixWorldInverse;for(let w=0,_=h.length;w<_;w++){let v=h[w];if(v.isDirectionalLight){let R=s.directional[f];R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),f++}else if(v.isSpotLight){let R=s.spot[x];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),x++}else if(v.isRectAreaLight){let R=s.rectArea[y];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let R=s.point[d];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function dd(i,t){let e=new h_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function u_(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new dd(i,t),e.set(r,[c])):o>=a.length?(c=new dd(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Hl=class extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dl=class extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
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
}`;function p_(i,t,e){let n=new So,s=new dt,r=new dt,o=new Fe,a=new Hl({depthPacking:am}),c=new Dl,l={},h=e.maxTextureSize,u={[Is]:zn,[zn]:Is,[le]:le},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:d_,fragmentShader:f_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new oe;x.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new k(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bd;let p=this.type;this.render=function(M,g,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let E=i.getRenderTarget(),T=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Cs),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let H=p!==is&&this.type===is,S=p===is&&this.type!==is;for(let I=0,U=M.length;I<U;I++){let N=M[I],z=N.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let B=z.getFrameExtents();if(s.multiply(B),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,z.mapSize.y=r.y)),z.map===null||H===!0||S===!0){let X=this.type!==is?{minFilter:bn,magFilter:bn}:{};z.map!==null&&z.map.dispose(),z.map=new as(s.x,s.y,X),z.map.texture.name=N.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let G=z.getViewportCount();for(let X=0;X<G;X++){let nt=z.getViewport(X);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),P.viewport(o),z.updateMatrices(N,X),n=z.getFrustum(),v(g,A,z.camera,N,this.type)}z.isPointLightShadow!==!0&&this.type===is&&w(z,A),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,b)};function w(M,g){let A=t.update(y);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new as(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(g,null,A,f,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(g,null,A,d,y,null)}function _(M,g,A,E){let T=null,b=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)T=b;else if(T=A.isPointLight===!0?c:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0){let P=T.uuid,H=g.uuid,S=l[P];S===void 0&&(S={},l[P]=S);let I=S[H];I===void 0&&(I=T.clone(),S[H]=I,g.addEventListener("dispose",R)),T=I}if(T.visible=g.visible,T.wireframe=g.wireframe,E===is?T.side=g.shadowSide!==null?g.shadowSide:g.side:T.side=g.shadowSide!==null?g.shadowSide:u[g.side],T.alphaMap=g.alphaMap,T.alphaTest=g.alphaTest,T.map=g.map,T.clipShadows=g.clipShadows,T.clippingPlanes=g.clippingPlanes,T.clipIntersection=g.clipIntersection,T.displacementMap=g.displacementMap,T.displacementScale=g.displacementScale,T.displacementBias=g.displacementBias,T.wireframeLinewidth=g.wireframeLinewidth,T.linewidth=g.linewidth,A.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let P=i.properties.get(T);P.light=A}return T}function v(M,g,A,E,T){if(M.visible===!1)return;if(M.layers.test(g.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===is)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);let H=t.update(M),S=M.material;if(Array.isArray(S)){let I=H.groups;for(let U=0,N=I.length;U<N;U++){let z=I[U],B=S[z.materialIndex];if(B&&B.visible){let G=_(M,B,E,T);M.onBeforeShadow(i,M,g,A,H,G,z),i.renderBufferDirect(A,null,H,G,M,z),M.onAfterShadow(i,M,g,A,H,G,z)}}}else if(S.visible){let I=_(M,S,E,T);M.onBeforeShadow(i,M,g,A,H,I,null),i.renderBufferDirect(A,null,H,I,M,null),M.onAfterShadow(i,M,g,A,H,I,null)}}let P=M.children;for(let H=0,S=P.length;H<S;H++)v(P[H],g,A,E,T)}function R(M){M.target.removeEventListener("dispose",R);for(let A in l){let E=l[A],T=M.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function m_(i,t,e){let n=e.isWebGL2;function s(){let F=!1,st=new Fe,mt=null,Lt=new Fe(0,0,0,0);return{setMask:function(Et){mt!==Et&&!F&&(i.colorMask(Et,Et,Et,Et),mt=Et)},setLocked:function(Et){F=Et},setClear:function(Et,ge,ye,Le,Pe){Pe===!0&&(Et*=Le,ge*=Le,ye*=Le),st.set(Et,ge,ye,Le),Lt.equals(st)===!1&&(i.clearColor(Et,ge,ye,Le),Lt.copy(st))},reset:function(){F=!1,mt=null,Lt.set(-1,0,0,0)}}}function r(){let F=!1,st=null,mt=null,Lt=null;return{setTest:function(Et){Et?qt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Et){st!==Et&&!F&&(i.depthMask(Et),st=Et)},setFunc:function(Et){if(mt!==Et){switch(Et){case Np:i.depthFunc(i.NEVER);break;case Op:i.depthFunc(i.ALWAYS);break;case Fp:i.depthFunc(i.LESS);break;case Sa:i.depthFunc(i.LEQUAL);break;case Bp:i.depthFunc(i.EQUAL);break;case kp:i.depthFunc(i.GEQUAL);break;case Gp:i.depthFunc(i.GREATER);break;case Vp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Et}},setLocked:function(Et){F=Et},setClear:function(Et){Lt!==Et&&(i.clearDepth(Et),Lt=Et)},reset:function(){F=!1,st=null,mt=null,Lt=null}}}function o(){let F=!1,st=null,mt=null,Lt=null,Et=null,ge=null,ye=null,Le=null,Pe=null;return{setTest:function(he){F||(he?qt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(he){st!==he&&!F&&(i.stencilMask(he),st=he)},setFunc:function(he,sn,Bn){(mt!==he||Lt!==sn||Et!==Bn)&&(i.stencilFunc(he,sn,Bn),mt=he,Lt=sn,Et=Bn)},setOp:function(he,sn,Bn){(ge!==he||ye!==sn||Le!==Bn)&&(i.stencilOp(he,sn,Bn),ge=he,ye=sn,Le=Bn)},setLocked:function(he){F=he},setClear:function(he){Pe!==he&&(i.clearStencil(he),Pe=he)},reset:function(){F=!1,st=null,mt=null,Lt=null,Et=null,ge=null,ye=null,Le=null,Pe=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},x=new WeakMap,y=[],m=null,p=!1,w=null,_=null,v=null,R=null,M=null,g=null,A=null,E=new j(0,0,0),T=0,b=!1,P=null,H=null,S=null,I=null,U=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,B=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=B>=2);let X=null,nt={},q=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ut=new Fe().fromArray(q),Tt=new Fe().fromArray(K);function yt(F,st,mt,Lt){let Et=new Uint8Array(4),ge=i.createTexture();i.bindTexture(F,ge),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<mt;ye++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(st,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(st+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ge}let Bt={};Bt[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Bt[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),qt(i.DEPTH_TEST),c.setFunc(Sa),gt(!1),D(qh),qt(i.CULL_FACE),et(Cs);function qt(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function bt(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function Ot(F,st){return d[F]!==st?(i.bindFramebuffer(F,st),d[F]=st,n&&(F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st)),!0):!1}function V(F,st){let mt=y,Lt=!1;if(F)if(mt=x.get(st),mt===void 0&&(mt=[],x.set(st,mt)),F.isWebGLMultipleRenderTargets){let Et=F.texture;if(mt.length!==Et.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,ye=Et.length;ge<ye;ge++)mt[ge]=i.COLOR_ATTACHMENT0+ge;mt.length=Et.length,Lt=!0}}else mt[0]!==i.COLOR_ATTACHMENT0&&(mt[0]=i.COLOR_ATTACHMENT0,Lt=!0);else mt[0]!==i.BACK&&(mt[0]=i.BACK,Lt=!0);Lt&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function at(F){return m!==F?(i.useProgram(F),m=F,!0):!1}let Q={[Js]:i.FUNC_ADD,[vp]:i.FUNC_SUBTRACT,[wp]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[$h]=i.MIN,Q[Jh]=i.MAX;else{let F=t.get("EXT_blend_minmax");F!==null&&(Q[$h]=F.MIN_EXT,Q[Jh]=F.MAX_EXT)}let lt={[Tp]:i.ZERO,[bp]:i.ONE,[Sp]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[Lp]:i.SRC_ALPHA_SATURATE,[Pp]:i.DST_COLOR,[Ap]:i.DST_ALPHA,[Rp]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[Ip]:i.ONE_MINUS_DST_COLOR,[Cp]:i.ONE_MINUS_DST_ALPHA,[Hp]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[Up]:i.CONSTANT_ALPHA,[zp]:i.ONE_MINUS_CONSTANT_ALPHA};function et(F,st,mt,Lt,Et,ge,ye,Le,Pe,he){if(F===Cs){p===!0&&(bt(i.BLEND),p=!1);return}if(p===!1&&(qt(i.BLEND),p=!0),F!==Mp){if(F!==w||he!==b){if((_!==Js||M!==Js)&&(i.blendEquation(i.FUNC_ADD),_=Js,M=Js),he)switch(F){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFunc(i.ONE,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,R=null,g=null,A=null,E.set(0,0,0),T=0,w=F,b=he}return}Et=Et||st,ge=ge||mt,ye=ye||Lt,(st!==_||Et!==M)&&(i.blendEquationSeparate(Q[st],Q[Et]),_=st,M=Et),(mt!==v||Lt!==R||ge!==g||ye!==A)&&(i.blendFuncSeparate(lt[mt],lt[Lt],lt[ge],lt[ye]),v=mt,R=Lt,g=ge,A=ye),(Le.equals(E)===!1||Pe!==T)&&(i.blendColor(Le.r,Le.g,Le.b,Pe),E.copy(Le),T=Pe),w=F,b=!1}function Pt(F,st){F.side===le?bt(i.CULL_FACE):qt(i.CULL_FACE);let mt=F.side===zn;st&&(mt=!mt),gt(mt),F.blending===Fr&&F.transparent===!1?et(Cs):et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),a.setMask(F.colorWrite);let Lt=F.stencilWrite;l.setTest(Lt),Lt&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Z(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?qt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(F){P!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),P=F)}function D(F){F!==_p?(qt(i.CULL_FACE),F!==H&&(F===qh?i.cullFace(i.BACK):F===Ep?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),H=F}function L(F){F!==S&&(z&&i.lineWidth(F),S=F)}function Z(F,st,mt){F?(qt(i.POLYGON_OFFSET_FILL),(I!==st||U!==mt)&&(i.polygonOffset(st,mt),I=st,U=mt)):bt(i.POLYGON_OFFSET_FILL)}function rt(F){F?qt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ot(F){F===void 0&&(F=i.TEXTURE0+N-1),X!==F&&(i.activeTexture(F),X=F)}function it(F,st,mt){mt===void 0&&(X===null?mt=i.TEXTURE0+N-1:mt=X);let Lt=nt[mt];Lt===void 0&&(Lt={type:void 0,texture:void 0},nt[mt]=Lt),(Lt.type!==F||Lt.texture!==st)&&(X!==mt&&(i.activeTexture(mt),X=mt),i.bindTexture(F,st||Bt[F]),Lt.type=F,Lt.texture=st)}function Dt(){let F=nt[X];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Jt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(F){ut.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ut.copy(F))}function Ee(F){Tt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Tt.copy(F))}function tt(F,st){let mt=u.get(st);mt===void 0&&(mt=new WeakMap,u.set(st,mt));let Lt=mt.get(F);Lt===void 0&&(Lt=i.getUniformBlockIndex(st,F.name),mt.set(F,Lt))}function Yt(F,st){let Lt=u.get(st).get(F);h.get(st)!==Lt&&(i.uniformBlockBinding(st,Lt,F.__bindingPointIndex),h.set(st,Lt))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},X=null,nt={},d={},x=new WeakMap,y=[],m=null,p=!1,w=null,_=null,v=null,R=null,M=null,g=null,A=null,E=new j(0,0,0),T=0,b=!1,P=null,H=null,S=null,I=null,U=null,ut.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:qt,disable:bt,bindFramebuffer:Ot,drawBuffers:V,useProgram:at,setBlending:et,setMaterial:Pt,setFlipSided:gt,setCullFace:D,setLineWidth:L,setPolygonOffset:Z,setScissorTest:rt,activeTexture:ot,bindTexture:it,unbindTexture:Dt,compressedTexImage2D:vt,compressedTexImage3D:Rt,texImage2D:Ft,texImage3D:Ct,updateUBOMapping:tt,uniformBlockBinding:Yt,texStorage2D:kt,texStorage3D:Jt,texSubImage2D:Gt,texSubImage3D:$t,compressedTexSubImage2D:ct,compressedTexSubImage3D:te,scissor:Kt,viewport:Ee,reset:_t}}function g_(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,L){return d?new OffscreenCanvas(D,L):Da("canvas")}function y(D,L,Z,rt){let ot=1;if((D.width>rt||D.height>rt)&&(ot=rt/Math.max(D.width,D.height)),ot<1||L===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let it=L?Ha:Math.floor,Dt=it(ot*D.width),vt=it(ot*D.height);u===void 0&&(u=x(Dt,vt));let Rt=Z?x(Dt,vt):u;return Rt.width=Dt,Rt.height=vt,Rt.getContext("2d").drawImage(D,0,0,Dt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Dt+"x"+vt+")."),Rt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function m(D){return vl(D.width)&&vl(D.height)}function p(D){return a?!1:D.wrapS!==bi||D.wrapT!==bi||D.minFilter!==bn&&D.minFilter!==Wn}function w(D,L){return D.generateMipmaps&&L&&D.minFilter!==bn&&D.minFilter!==Wn}function _(D){i.generateMipmap(D)}function v(D,L,Z,rt,ot=!1){if(a===!1)return L;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let it=L;if(L===i.RED&&(Z===i.FLOAT&&(it=i.R32F),Z===i.HALF_FLOAT&&(it=i.R16F),Z===i.UNSIGNED_BYTE&&(it=i.R8)),L===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(it=i.R8UI),Z===i.UNSIGNED_SHORT&&(it=i.R16UI),Z===i.UNSIGNED_INT&&(it=i.R32UI),Z===i.BYTE&&(it=i.R8I),Z===i.SHORT&&(it=i.R16I),Z===i.INT&&(it=i.R32I)),L===i.RG&&(Z===i.FLOAT&&(it=i.RG32F),Z===i.HALF_FLOAT&&(it=i.RG16F),Z===i.UNSIGNED_BYTE&&(it=i.RG8)),L===i.RGBA){let Dt=ot?Ca:Se.getTransfer(rt);Z===i.FLOAT&&(it=i.RGBA32F),Z===i.HALF_FLOAT&&(it=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(it=Dt===He?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function R(D,L,Z){return w(D,Z)===!0||D.isFramebufferTexture&&D.minFilter!==bn&&D.minFilter!==Wn?Math.log2(Math.max(L.width,L.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?L.mipmaps.length:1}function M(D){return D===bn||D===Kh||D===Uc?i.NEAREST:i.LINEAR}function g(D){let L=D.target;L.removeEventListener("dispose",g),E(L),L.isVideoTexture&&h.delete(L)}function A(D){let L=D.target;L.removeEventListener("dispose",A),b(L)}function E(D){let L=n.get(D);if(L.__webglInit===void 0)return;let Z=D.source,rt=f.get(Z);if(rt){let ot=rt[L.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&T(D),Object.keys(rt).length===0&&f.delete(Z)}n.remove(D)}function T(D){let L=n.get(D);i.deleteTexture(L.__webglTexture);let Z=D.source,rt=f.get(Z);delete rt[L.__cacheKey],o.memory.textures--}function b(D){let L=D.texture,Z=n.get(D),rt=n.get(L);if(rt.__webglTexture!==void 0&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(Z.__webglFramebuffer[ot]))for(let it=0;it<Z.__webglFramebuffer[ot].length;it++)i.deleteFramebuffer(Z.__webglFramebuffer[ot][it]);else i.deleteFramebuffer(Z.__webglFramebuffer[ot]);Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer[ot])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ot=0;ot<Z.__webglFramebuffer.length;ot++)i.deleteFramebuffer(Z.__webglFramebuffer[ot]);else i.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ot=0;ot<Z.__webglColorRenderbuffer.length;ot++)Z.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(Z.__webglColorRenderbuffer[ot]);Z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ot=0,it=L.length;ot<it;ot++){let Dt=n.get(L[ot]);Dt.__webglTexture&&(i.deleteTexture(Dt.__webglTexture),o.memory.textures--),n.remove(L[ot])}n.remove(L),n.remove(D)}let P=0;function H(){P=0}function S(){let D=P;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),P+=1,D}function I(D){let L=[];return L.push(D.wrapS),L.push(D.wrapT),L.push(D.wrapR||0),L.push(D.magFilter),L.push(D.minFilter),L.push(D.anisotropy),L.push(D.internalFormat),L.push(D.format),L.push(D.type),L.push(D.generateMipmaps),L.push(D.premultiplyAlpha),L.push(D.flipY),L.push(D.unpackAlignment),L.push(D.colorSpace),L.join()}function U(D,L){let Z=n.get(D);if(D.isVideoTexture&&Pt(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){let rt=D.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(Z,D,L);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+L)}function N(D,L){let Z=n.get(D);if(D.version>0&&Z.__version!==D.version){ut(Z,D,L);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+L)}function z(D,L){let Z=n.get(D);if(D.version>0&&Z.__version!==D.version){ut(Z,D,L);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+L)}function B(D,L){let Z=n.get(D);if(D.version>0&&Z.__version!==D.version){Tt(Z,D,L);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+L)}let G={[_l]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[El]:i.MIRRORED_REPEAT},X={[bn]:i.NEAREST,[Kh]:i.NEAREST_MIPMAP_NEAREST,[Uc]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[jp]:i.LINEAR_MIPMAP_NEAREST,[wo]:i.LINEAR_MIPMAP_LINEAR},nt={[lm]:i.NEVER,[mm]:i.ALWAYS,[hm]:i.LESS,[Ud]:i.LEQUAL,[um]:i.EQUAL,[pm]:i.GEQUAL,[dm]:i.GREATER,[fm]:i.NOTEQUAL};function q(D,L,Z){if(Z?(i.texParameteri(D,i.TEXTURE_WRAP_S,G[L.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,G[L.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,G[L.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,X[L.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,X[L.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(L.wrapS!==bi||L.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,M(L.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,M(L.minFilter)),L.minFilter!==bn&&L.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,nt[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let rt=t.get("EXT_texture_filter_anisotropic");if(L.magFilter===bn||L.minFilter!==Uc&&L.minFilter!==wo||L.type===As&&t.has("OES_texture_float_linear")===!1||a===!1&&L.type===To&&t.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(i.texParameterf(D,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function K(D,L){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,L.addEventListener("dispose",g));let rt=L.source,ot=f.get(rt);ot===void 0&&(ot={},f.set(rt,ot));let it=I(L);if(it!==D.__cacheKey){ot[it]===void 0&&(ot[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ot[it].usedTimes++;let Dt=ot[D.__cacheKey];Dt!==void 0&&(ot[D.__cacheKey].usedTimes--,Dt.usedTimes===0&&T(L)),D.__cacheKey=it,D.__webglTexture=ot[it].texture}return Z}function ut(D,L,Z){let rt=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(rt=i.TEXTURE_3D);let ot=K(D,L),it=L.source;e.bindTexture(rt,D.__webglTexture,i.TEXTURE0+Z);let Dt=n.get(it);if(it.version!==Dt.__version||ot===!0){e.activeTexture(i.TEXTURE0+Z);let vt=Se.getPrimaries(Se.workingColorSpace),Rt=L.colorSpace===pi?null:Se.getPrimaries(L.colorSpace),Gt=L.colorSpace===pi||vt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let $t=p(L)&&m(L.image)===!1,ct=y(L.image,$t,!1,s.maxTextureSize);ct=gt(L,ct);let te=m(ct)||a,kt=r.convert(L.format,L.colorSpace),Jt=r.convert(L.type),Ft=v(L.internalFormat,kt,Jt,L.colorSpace,L.isVideoTexture);q(rt,L,te);let Ct,Kt=L.mipmaps,Ee=a&&L.isVideoTexture!==!0&&Ft!==Hd,tt=Dt.__version===void 0||ot===!0,Yt=R(L,ct,te);if(L.isDepthTexture)Ft=i.DEPTH_COMPONENT,a?L.type===As?Ft=i.DEPTH_COMPONENT32F:L.type===Rs?Ft=i.DEPTH_COMPONENT24:L.type===js?Ft=i.DEPTH24_STENCIL8:Ft=i.DEPTH_COMPONENT16:L.type===As&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Qs&&Ft===i.DEPTH_COMPONENT&&L.type!==hh&&L.type!==Rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Rs,Jt=r.convert(L.type)),L.format===Wr&&Ft===i.DEPTH_COMPONENT&&(Ft=i.DEPTH_STENCIL,L.type!==js&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=js,Jt=r.convert(L.type))),tt&&(Ee?e.texStorage2D(i.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,kt,Jt,null));else if(L.isDataTexture)if(Kt.length>0&&te){Ee&&tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,Kt[0].width,Kt[0].height);for(let _t=0,F=Kt.length;_t<F;_t++)Ct=Kt[_t],Ee?e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,kt,Jt,Ct.data):e.texImage2D(i.TEXTURE_2D,_t,Ft,Ct.width,Ct.height,0,kt,Jt,Ct.data);L.generateMipmaps=!1}else Ee?(tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,kt,Jt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,kt,Jt,ct.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Ee&&tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,Ft,Kt[0].width,Kt[0].height,ct.depth);for(let _t=0,F=Kt.length;_t<F;_t++)Ct=Kt[_t],L.format!==Si?kt!==null?Ee?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,ct.depth,kt,Ct.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,Ft,Ct.width,Ct.height,ct.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,ct.depth,kt,Jt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,Ft,Ct.width,Ct.height,ct.depth,0,kt,Jt,Ct.data)}else{Ee&&tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,Kt[0].width,Kt[0].height);for(let _t=0,F=Kt.length;_t<F;_t++)Ct=Kt[_t],L.format!==Si?kt!==null?Ee?e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,kt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,Ft,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,kt,Jt,Ct.data):e.texImage2D(i.TEXTURE_2D,_t,Ft,Ct.width,Ct.height,0,kt,Jt,Ct.data)}else if(L.isDataArrayTexture)Ee?(tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,Ft,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,kt,Jt,ct.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,kt,Jt,ct.data);else if(L.isData3DTexture)Ee?(tt&&e.texStorage3D(i.TEXTURE_3D,Yt,Ft,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,kt,Jt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,kt,Jt,ct.data);else if(L.isFramebufferTexture){if(tt)if(Ee)e.texStorage2D(i.TEXTURE_2D,Yt,Ft,ct.width,ct.height);else{let _t=ct.width,F=ct.height;for(let st=0;st<Yt;st++)e.texImage2D(i.TEXTURE_2D,st,Ft,_t,F,0,kt,Jt,null),_t>>=1,F>>=1}}else if(Kt.length>0&&te){Ee&&tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,Kt[0].width,Kt[0].height);for(let _t=0,F=Kt.length;_t<F;_t++)Ct=Kt[_t],Ee?e.texSubImage2D(i.TEXTURE_2D,_t,0,0,kt,Jt,Ct):e.texImage2D(i.TEXTURE_2D,_t,Ft,kt,Jt,Ct);L.generateMipmaps=!1}else Ee?(tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Jt,ct)):e.texImage2D(i.TEXTURE_2D,0,Ft,kt,Jt,ct);w(L,te)&&_(rt),Dt.__version=it.version,L.onUpdate&&L.onUpdate(L)}D.__version=L.version}function Tt(D,L,Z){if(L.image.length!==6)return;let rt=K(D,L),ot=L.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Z);let it=n.get(ot);if(ot.version!==it.__version||rt===!0){e.activeTexture(i.TEXTURE0+Z);let Dt=Se.getPrimaries(Se.workingColorSpace),vt=L.colorSpace===pi?null:Se.getPrimaries(L.colorSpace),Rt=L.colorSpace===pi||Dt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Gt=L.isCompressedTexture||L.image[0].isCompressedTexture,$t=L.image[0]&&L.image[0].isDataTexture,ct=[];for(let _t=0;_t<6;_t++)!Gt&&!$t?ct[_t]=y(L.image[_t],!1,!0,s.maxCubemapSize):ct[_t]=$t?L.image[_t].image:L.image[_t],ct[_t]=gt(L,ct[_t]);let te=ct[0],kt=m(te)||a,Jt=r.convert(L.format,L.colorSpace),Ft=r.convert(L.type),Ct=v(L.internalFormat,Jt,Ft,L.colorSpace),Kt=a&&L.isVideoTexture!==!0,Ee=it.__version===void 0||rt===!0,tt=R(L,te,kt);q(i.TEXTURE_CUBE_MAP,L,kt);let Yt;if(Gt){Kt&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Ct,te.width,te.height);for(let _t=0;_t<6;_t++){Yt=ct[_t].mipmaps;for(let F=0;F<Yt.length;F++){let st=Yt[F];L.format!==Si?Jt!==null?Kt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,F,0,0,st.width,st.height,Jt,st.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,F,Ct,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,F,0,0,st.width,st.height,Jt,Ft,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,F,Ct,st.width,st.height,0,Jt,Ft,st.data)}}}else{Yt=L.mipmaps,Kt&&Ee&&(Yt.length>0&&tt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Ct,ct[0].width,ct[0].height));for(let _t=0;_t<6;_t++)if($t){Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ct[_t].width,ct[_t].height,Jt,Ft,ct[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Ct,ct[_t].width,ct[_t].height,0,Jt,Ft,ct[_t].data);for(let F=0;F<Yt.length;F++){let mt=Yt[F].image[_t].image;Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,F+1,0,0,mt.width,mt.height,Jt,Ft,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,F+1,Ct,mt.width,mt.height,0,Jt,Ft,mt.data)}}else{Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Jt,Ft,ct[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Ct,Jt,Ft,ct[_t]);for(let F=0;F<Yt.length;F++){let st=Yt[F];Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,F+1,0,0,Jt,Ft,st.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,F+1,Ct,Jt,Ft,st.image[_t])}}}w(L,kt)&&_(i.TEXTURE_CUBE_MAP),it.__version=ot.version,L.onUpdate&&L.onUpdate(L)}D.__version=L.version}function yt(D,L,Z,rt,ot,it){let Dt=r.convert(Z.format,Z.colorSpace),vt=r.convert(Z.type),Rt=v(Z.internalFormat,Dt,vt,Z.colorSpace);if(!n.get(L).__hasExternalTextures){let $t=Math.max(1,L.width>>it),ct=Math.max(1,L.height>>it);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,it,Rt,$t,ct,L.depth,0,Dt,vt,null):e.texImage2D(ot,it,Rt,$t,ct,0,Dt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),et(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ot,n.get(Z).__webglTexture,0,lt(L)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ot,n.get(Z).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(D,L,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),L.depthBuffer&&!L.stencilBuffer){let rt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||et(L)){let ot=L.depthTexture;ot&&ot.isDepthTexture&&(ot.type===As?rt=i.DEPTH_COMPONENT32F:ot.type===Rs&&(rt=i.DEPTH_COMPONENT24));let it=lt(L);et(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,rt,L.width,L.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,it,rt,L.width,L.height)}else i.renderbufferStorage(i.RENDERBUFFER,rt,L.width,L.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(L.depthBuffer&&L.stencilBuffer){let rt=lt(L);Z&&et(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,L.width,L.height):et(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{let rt=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ot=0;ot<rt.length;ot++){let it=rt[ot],Dt=r.convert(it.format,it.colorSpace),vt=r.convert(it.type),Rt=v(it.internalFormat,Dt,vt,it.colorSpace),Gt=lt(L);Z&&et(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Rt,L.width,L.height):et(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,Rt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(D,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),U(L.depthTexture,0);let rt=n.get(L.depthTexture).__webglTexture,ot=lt(L);if(L.depthTexture.format===Qs)et(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(L.depthTexture.format===Wr)et(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function bt(D){let L=n.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!L.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");qt(L.__webglFramebuffer,D)}else if(Z){L.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[rt]),L.__webglDepthbuffer[rt]=i.createRenderbuffer(),Bt(L.__webglDepthbuffer[rt],D,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=i.createRenderbuffer(),Bt(L.__webglDepthbuffer,D,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(D,L,Z){let rt=n.get(D);L!==void 0&&yt(rt.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&bt(D)}function V(D){let L=D.texture,Z=n.get(D),rt=n.get(L);D.addEventListener("dispose",A),D.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=L.version,o.memory.textures++);let ot=D.isWebGLCubeRenderTarget===!0,it=D.isWebGLMultipleRenderTargets===!0,Dt=m(D)||a;if(ot){Z.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(a&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer[vt]=[];for(let Rt=0;Rt<L.mipmaps.length;Rt++)Z.__webglFramebuffer[vt][Rt]=i.createFramebuffer()}else Z.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(a&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer=[];for(let vt=0;vt<L.mipmaps.length;vt++)Z.__webglFramebuffer[vt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(it)if(s.drawBuffers){let vt=D.texture;for(let Rt=0,Gt=vt.length;Rt<Gt;Rt++){let $t=n.get(vt[Rt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&et(D)===!1){let vt=it?L:[L];Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){let Gt=vt[Rt];Z.__webglColorRenderbuffer[Rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Rt]);let $t=r.convert(Gt.format,Gt.colorSpace),ct=r.convert(Gt.type),te=v(Gt.internalFormat,$t,ct,Gt.colorSpace,D.isXRRenderTarget===!0),kt=lt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,te,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(Z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),q(i.TEXTURE_CUBE_MAP,L,Dt);for(let vt=0;vt<6;vt++)if(a&&L.mipmaps&&L.mipmaps.length>0)for(let Rt=0;Rt<L.mipmaps.length;Rt++)yt(Z.__webglFramebuffer[vt][Rt],D,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt);else yt(Z.__webglFramebuffer[vt],D,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);w(L,Dt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){let vt=D.texture;for(let Rt=0,Gt=vt.length;Rt<Gt;Rt++){let $t=vt[Rt],ct=n.get($t);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),q(i.TEXTURE_2D,$t,Dt),yt(Z.__webglFramebuffer,D,$t,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,0),w($t,Dt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?vt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,rt.__webglTexture),q(vt,L,Dt),a&&L.mipmaps&&L.mipmaps.length>0)for(let Rt=0;Rt<L.mipmaps.length;Rt++)yt(Z.__webglFramebuffer[Rt],D,L,i.COLOR_ATTACHMENT0,vt,Rt);else yt(Z.__webglFramebuffer,D,L,i.COLOR_ATTACHMENT0,vt,0);w(L,Dt)&&_(vt),e.unbindTexture()}D.depthBuffer&&bt(D)}function at(D){let L=m(D)||a,Z=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let rt=0,ot=Z.length;rt<ot;rt++){let it=Z[rt];if(w(it,L)){let Dt=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(it).__webglTexture;e.bindTexture(Dt,vt),_(Dt),e.unbindTexture()}}}function Q(D){if(a&&D.samples>0&&et(D)===!1){let L=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Z=D.width,rt=D.height,ot=i.COLOR_BUFFER_BIT,it=[],Dt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(D),Rt=D.isWebGLMultipleRenderTargets===!0;if(Rt)for(let Gt=0;Gt<L.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Gt=0;Gt<L.length;Gt++){it.push(i.COLOR_ATTACHMENT0+Gt),D.depthBuffer&&it.push(Dt);let $t=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if($t===!1&&(D.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),Rt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Gt]),$t===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Dt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Dt])),Rt){let ct=n.get(L[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,Z,rt,0,0,Z,rt,ot,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Rt)for(let Gt=0;Gt<L.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Gt]);let $t=n.get(L[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function lt(D){return Math.min(s.maxSamples,D.samples)}function et(D){let L=n.get(D);return a&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Pt(D){let L=o.render.frame;h.get(D)!==L&&(h.set(D,L),D.update())}function gt(D,L){let Z=D.colorSpace,rt=D.format,ot=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Ml||Z!==os&&Z!==pi&&(Se.getTransfer(Z)===He?a===!1?t.has("EXT_sRGB")===!0&&rt===Si?(D.format=Ml,D.minFilter=Wn,D.generateMipmaps=!1):L=Ua.sRGBToLinear(L):(rt!==Si||ot!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),L}this.allocateTextureUnit=S,this.resetTextureUnits=H,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=B,this.rebindTextures=Ot,this.setupRenderTarget=V,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=et}function x_(i,t,e){let n=e.isWebGL2;function s(r,o=pi){let a,c=Se.getTransfer(o);if(r===Ni)return i.UNSIGNED_BYTE;if(r===Ad)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Cd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Qp)return i.BYTE;if(r===tm)return i.SHORT;if(r===hh)return i.UNSIGNED_SHORT;if(r===Rd)return i.INT;if(r===Rs)return i.UNSIGNED_INT;if(r===As)return i.FLOAT;if(r===To)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===em)return i.ALPHA;if(r===Si)return i.RGBA;if(r===nm)return i.LUMINANCE;if(r===im)return i.LUMINANCE_ALPHA;if(r===Qs)return i.DEPTH_COMPONENT;if(r===Wr)return i.DEPTH_STENCIL;if(r===Ml)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===uh)return i.RED;if(r===Pd)return i.RED_INTEGER;if(r===sm)return i.RG;if(r===Id)return i.RG_INTEGER;if(r===Ld)return i.RGBA_INTEGER;if(r===zc||r===Nc||r===Oc||r===Fc)if(c===He)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jh||r===Qh||r===tu||r===eu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===nu||r===iu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===nu)return c===He?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===iu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===su||r===ru||r===ou||r===au||r===cu||r===lu||r===hu||r===uu||r===du||r===fu||r===pu||r===mu||r===gu||r===xu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===su)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ru)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ou)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===au)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===du)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xu)return c===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bc||r===yu||r===_u)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Bc)return c===He?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_u)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rm||r===Eu||r===Mu||r===vu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Bc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Eu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===js?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ul=class extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xt=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},y_={type:"move"},_o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zl=class extends Ls{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,x=null,y=e.getContextAttributes(),m=null,p=null,w=[],_=[],v=new dt,R=null,M=new Un;M.layers.enable(1),M.viewport=new Fe;let g=new Un;g.layers.enable(2),g.viewport=new Fe;let A=[M,g],E=new Ul;E.layers.enable(1),E.layers.enable(2);let T=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=w[q];return K===void 0&&(K=new _o,w[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=w[q];return K===void 0&&(K=new _o,w[q]=K),K.getGripSpace()},this.getHand=function(q){let K=w[q];return K===void 0&&(K=new _o,w[q]=K),K.getHandSpace()};function P(q){let K=_.indexOf(q.inputSource);if(K===-1)return;let ut=w[K];ut!==void 0&&(ut.update(q.inputSource,q.frame,l||o),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",S);for(let q=0;q<w.length;q++){let K=_[q];K!==null&&(_[q]=null,w[q].disconnect(K))}T=null,b=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",H),s.addEventListener("inputsourceschange",S),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new as(d.framebufferWidth,d.framebufferHeight,{format:Si,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,ut=null,Tt=null;y.depth&&(Tt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=y.stencil?Wr:Qs,ut=y.stencil?js:Rs);let yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new as(f.textureWidth,f.textureHeight,{format:Si,type:Ni,depthTexture:new Ya(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let Bt=t.properties.get(p);Bt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function S(q){for(let K=0;K<q.removed.length;K++){let ut=q.removed[K],Tt=_.indexOf(ut);Tt>=0&&(_[Tt]=null,w[Tt].disconnect(ut))}for(let K=0;K<q.added.length;K++){let ut=q.added[K],Tt=_.indexOf(ut);if(Tt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=_.length){_.push(ut),Tt=Bt;break}else if(_[Bt]===null){_[Bt]=ut,Tt=Bt;break}if(Tt===-1)break}let yt=w[Tt];yt&&yt.connect(ut)}}let I=new O,U=new O;function N(q,K,ut){I.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(ut.matrixWorld);let Tt=I.distanceTo(U),yt=K.projectionMatrix.elements,Bt=ut.projectionMatrix.elements,qt=yt[14]/(yt[10]-1),bt=yt[14]/(yt[10]+1),Ot=(yt[9]+1)/yt[5],V=(yt[9]-1)/yt[5],at=(yt[8]-1)/yt[0],Q=(Bt[8]+1)/Bt[0],lt=qt*at,et=qt*Q,Pt=Tt/(-at+Q),gt=Pt*-at;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(Pt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let D=qt+Pt,L=bt+Pt,Z=lt-gt,rt=et+(Tt-gt),ot=Ot*bt/L*D,it=V*bt/L*D;q.projectionMatrix.makePerspective(Z,rt,ot,it,D,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function z(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;E.near=g.near=M.near=q.near,E.far=g.far=M.far=q.far,(T!==E.near||b!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,b=E.far);let K=q.parent,ut=E.cameras;z(E,K);for(let Tt=0;Tt<ut.length;Tt++)z(ut[Tt],K);ut.length===2?N(E,M,g):E.projectionMatrix.copy(M.projectionMatrix),B(q,E,K)};function B(q,K,ut){ut===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)};let G=null;function X(q,K){if(h=K.getViewerPose(l||o),x=K,h!==null){let ut=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Tt=!1;ut.length!==E.cameras.length&&(E.cameras.length=0,Tt=!0);for(let yt=0;yt<ut.length;yt++){let Bt=ut[yt],qt=null;if(d!==null)qt=d.getViewport(Bt);else{let Ot=u.getViewSubImage(f,Bt);qt=Ot.viewport,yt===0&&(t.setRenderTargetTextures(p,Ot.colorTexture,f.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(p))}let bt=A[yt];bt===void 0&&(bt=new Un,bt.layers.enable(yt),bt.viewport=new Fe,A[yt]=bt),bt.matrix.fromArray(Bt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Bt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(qt.x,qt.y,qt.width,qt.height),yt===0&&(E.matrix.copy(bt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Tt===!0&&E.cameras.push(bt)}}for(let ut=0;ut<w.length;ut++){let Tt=_[ut],yt=w[ut];Tt!==null&&yt!==void 0&&yt.update(Tt,K,l||o)}G&&G(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}let nt=new Fd;nt.setAnimationLoop(X),this.setAnimationLoop=function(q){G=q},this.dispose=function(){}}};function __(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Od(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E_(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,_){let v=_.program;n.uniformBlockBinding(w,v)}function l(w,_){let v=s[w.id];v===void 0&&(x(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(w,R);let M=t.render.frame;r[w.id]!==M&&(f(w),r[w.id]=M)}function h(w){let _=u();w.__bindingPointIndex=_;let v=i.createBuffer(),R=w.__size,M=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let _=s[w.id],v=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,g=v.length;M<g;M++){let A=Array.isArray(v[M])?v[M]:[v[M]];for(let E=0,T=A.length;E<T;E++){let b=A[E];if(d(b,M,E,R)===!0){let P=b.__offset,H=Array.isArray(b.value)?b.value:[b.value],S=0;for(let I=0;I<H.length;I++){let U=H[I],N=y(U);typeof U=="number"||typeof U=="boolean"?(b.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,P+S,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=0,b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=0,b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=0):(U.toArray(b.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,_,v,R){let M=w.value,g=_+"_"+v;if(R[g]===void 0)return typeof M=="number"||typeof M=="boolean"?R[g]=M:R[g]=M.clone(),!0;{let A=R[g];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return R[g]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function x(w){let _=w.uniforms,v=0,R=16;for(let g=0,A=_.length;g<A;g++){let E=Array.isArray(_[g])?_[g]:[_[g]];for(let T=0,b=E.length;T<b;T++){let P=E[T],H=Array.isArray(P.value)?P.value:[P.value];for(let S=0,I=H.length;S<I;S++){let U=H[S],N=y(U),z=v%R;z!==0&&R-z<N.boundary&&(v+=R-z),P.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=N.storage}}}let M=v%R;return M>0&&(v+=R-M),w.__size=v,w.__cache={},this}function y(w){let _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function m(w){let _=w.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ro=class{constructor(t={}){let{canvas:e=Pm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),x=new Int32Array(4),y=null,m=null,p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=Ps,this.toneMappingExposure=1;let _=this,v=!1,R=0,M=0,g=null,A=-1,E=null,T=new Fe,b=new Fe,P=null,H=new j(0),S=0,I=e.width,U=e.height,N=1,z=null,B=null,G=new Fe(0,0,I,U),X=new Fe(0,0,I,U),nt=!1,q=new So,K=!1,ut=!1,Tt=null,yt=new Me,Bt=new dt,qt=new O,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return g===null?N:1}let V=n;function at(C,W){for(let Y=0;Y<C.length;Y++){let $=C[Y],J=e.getContext($,W);if(J!==null)return J}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",st,!1),V===null){let W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),V=at(W,C),V===null)throw at(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,lt,et,Pt,gt,D,L,Z,rt,ot,it,Dt,vt,Rt,Gt,$t,ct,te,kt,Jt,Ft,Ct,Kt,Ee;function tt(){Q=new Fx(V),lt=new Hx(V,Q,t),Q.init(lt),Ct=new x_(V,Q,lt),et=new m_(V,Q,lt),Pt=new Gx(V),gt=new i_,D=new g_(V,Q,et,gt,lt,Ct,Pt),L=new Ux(_),Z=new Ox(_),rt=new Jm(V,lt),Kt=new Ix(V,Q,rt,lt),ot=new Bx(V,rt,Pt,Kt),it=new qx(V,ot,rt,Pt),kt=new Xx(V,lt,D),$t=new Dx(gt),Dt=new n_(_,L,Z,Q,lt,Kt,$t),vt=new __(_,gt),Rt=new r_,Gt=new u_(Q,lt),te=new Px(_,L,Z,et,it,f,c),ct=new p_(_,it,lt),Ee=new E_(V,Pt,lt,et),Jt=new Lx(V,Q,Pt,lt),Ft=new kx(V,Q,Pt,lt),Pt.programs=Dt.programs,_.capabilities=lt,_.extensions=Q,_.properties=gt,_.renderLists=Rt,_.shadowMap=ct,_.state=et,_.info=Pt}tt();let Yt=new zl(_,V);this.xr=Yt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(C){C!==void 0&&(N=C,this.setSize(I,U,!1))},this.getSize=function(C){return C.set(I,U)},this.setSize=function(C,W,Y=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,U=W,e.width=Math.floor(C*N),e.height=Math.floor(W*N),Y===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(I*N,U*N).floor()},this.setDrawingBufferSize=function(C,W,Y){I=C,U=W,N=Y,e.width=Math.floor(C*Y),e.height=Math.floor(W*Y),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,W,Y,$){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,W,Y,$),et.viewport(T.copy(G).multiplyScalar(N).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,W,Y,$){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,W,Y,$),et.scissor(b.copy(X).multiplyScalar(N).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){et.setScissorTest(nt=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(C=!0,W=!0,Y=!0){let $=0;if(C){let J=!1;if(g!==null){let At=g.texture.format;J=At===Ld||At===Id||At===Pd}if(J){let At=g.texture.type,Nt=At===Ni||At===Rs||At===hh||At===js||At===Ad||At===Cd,Xt=te.getClearColor(),jt=te.getClearAlpha(),ce=Xt.r,ee=Xt.g,ne=Xt.b;Nt?(d[0]=ce,d[1]=ee,d[2]=ne,d[3]=jt,V.clearBufferuiv(V.COLOR,0,d)):(x[0]=ce,x[1]=ee,x[2]=ne,x[3]=jt,V.clearBufferiv(V.COLOR,0,x))}else $|=V.COLOR_BUFFER_BIT}W&&($|=V.DEPTH_BUFFER_BIT),Y&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Rt.dispose(),Gt.dispose(),gt.dispose(),L.dispose(),Z.dispose(),it.dispose(),Kt.dispose(),Ee.dispose(),Dt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Pe),Yt.removeEventListener("sessionend",he),Tt&&(Tt.dispose(),Tt=null),sn.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let C=Pt.autoReset,W=ct.enabled,Y=ct.autoUpdate,$=ct.needsUpdate,J=ct.type;tt(),Pt.autoReset=C,ct.enabled=W,ct.autoUpdate=Y,ct.needsUpdate=$,ct.type=J}function st(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function mt(C){let W=C.target;W.removeEventListener("dispose",mt),Lt(W)}function Lt(C){Et(C),gt.remove(C)}function Et(C){let W=gt.get(C).programs;W!==void 0&&(W.forEach(function(Y){Dt.releaseProgram(Y)}),C.isShaderMaterial&&Dt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Y,$,J,At){W===null&&(W=bt);let Nt=J.isMesh&&J.matrixWorld.determinant()<0,Xt=me(C,W,Y,$,J);et.setMaterial($,Nt);let jt=Y.index,ce=1;if($.wireframe===!0){if(jt=ot.getWireframeAttribute(Y),jt===void 0)return;ce=2}let ee=Y.drawRange,ne=Y.attributes.position,Qe=ee.start*ce,si=(ee.start+ee.count)*ce;At!==null&&(Qe=Math.max(Qe,At.start*ce),si=Math.min(si,(At.start+At.count)*ce)),jt!==null?(Qe=Math.max(Qe,0),si=Math.min(si,jt.count)):ne!=null&&(Qe=Math.max(Qe,0),si=Math.min(si,ne.count));let mn=si-Qe;if(mn<0||mn===1/0)return;Kt.setup(J,$,Xt,Y,jt);let Ki,Ge=Jt;if(jt!==null&&(Ki=rt.get(jt),Ge=Ft,Ge.setIndex(Ki)),J.isMesh)$.wireframe===!0?(et.setLineWidth($.wireframeLinewidth*Ot()),Ge.setMode(V.LINES)):Ge.setMode(V.TRIANGLES);else if(J.isLine){let ue=$.linewidth;ue===void 0&&(ue=1),et.setLineWidth(ue*Ot()),J.isLineSegments?Ge.setMode(V.LINES):J.isLineLoop?Ge.setMode(V.LINE_LOOP):Ge.setMode(V.LINE_STRIP)}else J.isPoints?Ge.setMode(V.POINTS):J.isSprite&&Ge.setMode(V.TRIANGLES);if(J.isBatchedMesh)Ge.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Ge.renderInstances(Qe,mn,J.count);else if(Y.isInstancedBufferGeometry){let ue=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ic=Math.min(Y.instanceCount,ue);Ge.renderInstances(Qe,mn,Ic)}else Ge.render(Qe,mn)};function ge(C,W,Y){C.transparent===!0&&C.side===le&&C.forceSinglePass===!1?(C.side=zn,C.needsUpdate=!0,ui(C,W,Y),C.side=Is,C.needsUpdate=!0,ui(C,W,Y),C.side=le):ui(C,W,Y)}this.compile=function(C,W,Y=null){Y===null&&(Y=C),m=Gt.get(Y),m.init(),w.push(m),Y.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),C!==Y&&C.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(_._useLegacyLights);let $=new Set;return C.traverse(function(J){let At=J.material;if(At)if(Array.isArray(At))for(let Nt=0;Nt<At.length;Nt++){let Xt=At[Nt];ge(Xt,Y,J),$.add(Xt)}else ge(At,Y,J),$.add(At)}),w.pop(),m=null,$},this.compileAsync=function(C,W,Y=null){let $=this.compile(C,W,Y);return new Promise(J=>{function At(){if($.forEach(function(Nt){gt.get(Nt).currentProgram.isReady()&&$.delete(Nt)}),$.size===0){J(C);return}setTimeout(At,10)}Q.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ye=null;function Le(C){ye&&ye(C)}function Pe(){sn.stop()}function he(){sn.start()}let sn=new Fd;sn.setAnimationLoop(Le),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(C){ye=C,Yt.setAnimationLoop(C),C===null?sn.stop():sn.start()},Yt.addEventListener("sessionstart",Pe),Yt.addEventListener("sessionend",he),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(W),W=Yt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,W,g),m=Gt.get(C,w.length),m.init(),w.push(m),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(yt),ut=this.localClippingEnabled,K=$t.init(this.clippingPlanes,ut),y=Rt.get(C,p.length),y.init(),p.push(y),Bn(C,W,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(z,B),this.info.render.frame++,K===!0&&$t.beginShadows();let Y=m.state.shadowsArray;if(ct.render(Y,C,W),K===!0&&$t.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(y,C),m.setupLights(_._useLegacyLights),W.isArrayCamera){let $=W.cameras;for(let J=0,At=$.length;J<At;J++){let Nt=$[J];Gs(y,C,Nt,Nt.viewport)}}else Gs(y,C,W);g!==null&&(D.updateMultisampleRenderTarget(g),D.updateRenderTargetMipmap(g)),C.isScene===!0&&C.onAfterRender(_,C,W),Kt.resetDefaultState(),A=-1,E=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Bn(C,W,Y,$){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){$&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(yt);let Nt=it.update(C),Xt=C.material;Xt.visible&&y.push(C,Nt,Xt,Y,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){let Nt=it.update(C),Xt=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),qt.copy(Nt.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(yt)),Array.isArray(Xt)){let jt=Nt.groups;for(let ce=0,ee=jt.length;ce<ee;ce++){let ne=jt[ce],Qe=Xt[ne.materialIndex];Qe&&Qe.visible&&y.push(C,Nt,Qe,Y,qt.z,ne)}}else Xt.visible&&y.push(C,Nt,Xt,Y,qt.z,null)}}let At=C.children;for(let Nt=0,Xt=At.length;Nt<Xt;Nt++)Bn(At[Nt],W,Y,$)}function Gs(C,W,Y,$){let J=C.opaque,At=C.transmissive,Nt=C.transparent;m.setupLightsView(Y),K===!0&&$t.setGlobalState(_.clippingPlanes,Y),At.length>0&&ln(J,At,W,Y),$&&et.viewport(T.copy($)),J.length>0&&Ms(J,W,Y),At.length>0&&Ms(At,W,Y),Nt.length>0&&Ms(Nt,W,Y),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function ln(C,W,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let At=lt.isWebGL2;Tt===null&&(Tt=new as(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?To:Ni,minFilter:wo,samples:At?4:0})),_.getDrawingBufferSize(Bt),At?Tt.setSize(Bt.x,Bt.y):Tt.setSize(Ha(Bt.x),Ha(Bt.y));let Nt=_.getRenderTarget();_.setRenderTarget(Tt),_.getClearColor(H),S=_.getClearAlpha(),S<1&&_.setClearColor(16777215,.5),_.clear();let Xt=_.toneMapping;_.toneMapping=Ps,Ms(C,Y,$),D.updateMultisampleRenderTarget(Tt),D.updateRenderTargetMipmap(Tt);let jt=!1;for(let ce=0,ee=W.length;ce<ee;ce++){let ne=W[ce],Qe=ne.object,si=ne.geometry,mn=ne.material,Ki=ne.group;if(mn.side===le&&Qe.layers.test($.layers)){let Ge=mn.side;mn.side=zn,mn.needsUpdate=!0,kn(Qe,Y,$,si,mn,Ki),mn.side=Ge,mn.needsUpdate=!0,jt=!0}}jt===!0&&(D.updateMultisampleRenderTarget(Tt),D.updateRenderTargetMipmap(Tt)),_.setRenderTarget(Nt),_.setClearColor(H,S),_.toneMapping=Xt}function Ms(C,W,Y){let $=W.isScene===!0?W.overrideMaterial:null;for(let J=0,At=C.length;J<At;J++){let Nt=C[J],Xt=Nt.object,jt=Nt.geometry,ce=$===null?Nt.material:$,ee=Nt.group;Xt.layers.test(Y.layers)&&kn(Xt,W,Y,jt,ce,ee)}}function kn(C,W,Y,$,J,At){C.onBeforeRender(_,W,Y,$,J,At),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(_,W,Y,$,C,At),J.transparent===!0&&J.side===le&&J.forceSinglePass===!1?(J.side=zn,J.needsUpdate=!0,_.renderBufferDirect(Y,W,$,J,C,At),J.side=Is,J.needsUpdate=!0,_.renderBufferDirect(Y,W,$,J,C,At),J.side=le):_.renderBufferDirect(Y,W,$,J,C,At),C.onAfterRender(_,W,Y,$,J,At)}function ui(C,W,Y){W.isScene!==!0&&(W=bt);let $=gt.get(C),J=m.state.lights,At=m.state.shadowsArray,Nt=J.state.version,Xt=Dt.getParameters(C,J.state,At,W,Y),jt=Dt.getProgramCacheKey(Xt),ce=$.programs;$.environment=C.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(C.isMeshStandardMaterial?Z:L).get(C.envMap||$.environment),ce===void 0&&(C.addEventListener("dispose",mt),ce=new Map,$.programs=ce);let ee=ce.get(jt);if(ee!==void 0){if($.currentProgram===ee&&$.lightsStateVersion===Nt)return xe(C,Xt),ee}else Xt.uniforms=Dt.getUniforms(C),C.onBuild(Y,Xt,_),C.onBeforeCompile(Xt,_),ee=Dt.acquireProgram(Xt,jt),ce.set(jt,ee),$.uniforms=Xt.uniforms;let ne=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ne.clippingPlanes=$t.uniform),xe(C,Xt),$.needsLights=Ui(C),$.lightsStateVersion=Nt,$.needsLights&&(ne.ambientLightColor.value=J.state.ambient,ne.lightProbe.value=J.state.probe,ne.directionalLights.value=J.state.directional,ne.directionalLightShadows.value=J.state.directionalShadow,ne.spotLights.value=J.state.spot,ne.spotLightShadows.value=J.state.spotShadow,ne.rectAreaLights.value=J.state.rectArea,ne.ltc_1.value=J.state.rectAreaLTC1,ne.ltc_2.value=J.state.rectAreaLTC2,ne.pointLights.value=J.state.point,ne.pointLightShadows.value=J.state.pointShadow,ne.hemisphereLights.value=J.state.hemi,ne.directionalShadowMap.value=J.state.directionalShadowMap,ne.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ne.spotShadowMap.value=J.state.spotShadowMap,ne.spotLightMatrix.value=J.state.spotLightMatrix,ne.spotLightMap.value=J.state.spotLightMap,ne.pointShadowMap.value=J.state.pointShadowMap,ne.pointShadowMatrix.value=J.state.pointShadowMatrix),$.currentProgram=ee,$.uniformsList=null,ee}function Ut(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=kr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function xe(C,W){let Y=gt.get(C);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function me(C,W,Y,$,J){W.isScene!==!0&&(W=bt),D.resetTextureUnits();let At=W.fog,Nt=$.isMeshStandardMaterial?W.environment:null,Xt=g===null?_.outputColorSpace:g.isXRRenderTarget===!0?g.texture.colorSpace:os,jt=($.isMeshStandardMaterial?Z:L).get($.envMap||Nt),ce=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ee=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ne=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,si=!!Y.morphAttributes.color,mn=Ps;$.toneMapped&&(g===null||g.isXRRenderTarget===!0)&&(mn=_.toneMapping);let Ki=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ge=Ki!==void 0?Ki.length:0,ue=gt.get($),Ic=m.state.lights;if(K===!0&&(ut===!0||C!==E)){let di=C===E&&$.id===A;$t.setState($,C,di)}let Ye=!1;$.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==Ic.state.version||ue.outputColorSpace!==Xt||J.isBatchedMesh&&ue.batching===!1||!J.isBatchedMesh&&ue.batching===!0||J.isInstancedMesh&&ue.instancing===!1||!J.isInstancedMesh&&ue.instancing===!0||J.isSkinnedMesh&&ue.skinning===!1||!J.isSkinnedMesh&&ue.skinning===!0||J.isInstancedMesh&&ue.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ue.instancingColor===!1&&J.instanceColor!==null||ue.envMap!==jt||$.fog===!0&&ue.fog!==At||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==$t.numPlanes||ue.numIntersection!==$t.numIntersection)||ue.vertexAlphas!==ce||ue.vertexTangents!==ee||ue.morphTargets!==ne||ue.morphNormals!==Qe||ue.morphColors!==si||ue.toneMapping!==mn||lt.isWebGL2===!0&&ue.morphTargetsCount!==Ge)&&(Ye=!0):(Ye=!0,ue.__version=$.version);let Vs=ue.currentProgram;Ye===!0&&(Vs=ui($,W,J));let Wh=!1,ao=!1,Lc=!1,Ln=Vs.getUniforms(),Ws=ue.uniforms;if(et.useProgram(Vs.program)&&(Wh=!0,ao=!0,Lc=!0),$.id!==A&&(A=$.id,ao=!0),Wh||E!==C){Ln.setValue(V,"projectionMatrix",C.projectionMatrix),Ln.setValue(V,"viewMatrix",C.matrixWorldInverse);let di=Ln.map.cameraPosition;di!==void 0&&di.setValue(V,qt.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&Ln.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ln.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,ao=!0,Lc=!0)}if(J.isSkinnedMesh){Ln.setOptional(V,J,"bindMatrix"),Ln.setOptional(V,J,"bindMatrixInverse");let di=J.skeleton;di&&(lt.floatVertexTextures?(di.boneTexture===null&&di.computeBoneTexture(),Ln.setValue(V,"boneTexture",di.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Ln.setOptional(V,J,"batchingTexture"),Ln.setValue(V,"batchingTexture",J._matricesTexture,D));let Hc=Y.morphAttributes;if((Hc.position!==void 0||Hc.normal!==void 0||Hc.color!==void 0&&lt.isWebGL2===!0)&&kt.update(J,Y,Vs),(ao||ue.receiveShadow!==J.receiveShadow)&&(ue.receiveShadow=J.receiveShadow,Ln.setValue(V,"receiveShadow",J.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ws.envMap.value=jt,Ws.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),ao&&(Ln.setValue(V,"toneMappingExposure",_.toneMappingExposure),ue.needsLights&&Ht(Ws,Lc),At&&$.fog===!0&&vt.refreshFogUniforms(Ws,At),vt.refreshMaterialUniforms(Ws,$,N,U,Tt),kr.upload(V,Ut(ue),Ws,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(kr.upload(V,Ut(ue),Ws,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ln.setValue(V,"center",J.center),Ln.setValue(V,"modelViewMatrix",J.modelViewMatrix),Ln.setValue(V,"normalMatrix",J.normalMatrix),Ln.setValue(V,"modelMatrix",J.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let di=$.uniformsGroups;for(let Dc=0,yp=di.length;Dc<yp;Dc++)if(lt.isWebGL2){let Xh=di[Dc];Ee.update(Xh,Vs),Ee.bind(Xh,Vs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vs}function Ht(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ui(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(C,W,Y){gt.get(C.texture).__webglTexture=W,gt.get(C.depthTexture).__webglTexture=Y;let $=gt.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){let Y=gt.get(C);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Y=0){g=C,R=W,M=Y;let $=!0,J=null,At=!1,Nt=!1;if(C){let jt=gt.get(C);jt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(V.FRAMEBUFFER,null),$=!1):jt.__webglFramebuffer===void 0?D.setupRenderTarget(C):jt.__hasExternalTextures&&D.rebindTextures(C,gt.get(C.texture).__webglTexture,gt.get(C.depthTexture).__webglTexture);let ce=C.texture;(ce.isData3DTexture||ce.isDataArrayTexture||ce.isCompressedArrayTexture)&&(Nt=!0);let ee=gt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?J=ee[W][Y]:J=ee[W],At=!0):lt.isWebGL2&&C.samples>0&&D.useMultisampledRTT(C)===!1?J=gt.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?J=ee[Y]:J=ee,T.copy(C.viewport),b.copy(C.scissor),P=C.scissorTest}else T.copy(G).multiplyScalar(N).floor(),b.copy(X).multiplyScalar(N).floor(),P=nt;if(et.bindFramebuffer(V.FRAMEBUFFER,J)&&lt.drawBuffers&&$&&et.drawBuffers(C,J),et.viewport(T),et.scissor(b),et.setScissorTest(P),At){let jt=gt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,jt.__webglTexture,Y)}else if(Nt){let jt=gt.get(C.texture),ce=W||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,jt.__webglTexture,Y||0,ce)}A=-1},this.readRenderTargetPixels=function(C,W,Y,$,J,At,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Xt=Xt[Nt]),Xt){et.bindFramebuffer(V.FRAMEBUFFER,Xt);try{let jt=C.texture,ce=jt.format,ee=jt.type;if(ce!==Si&&Ct.convert(ce)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ne=ee===To&&(Q.has("EXT_color_buffer_half_float")||lt.isWebGL2&&Q.has("EXT_color_buffer_float"));if(ee!==Ni&&Ct.convert(ee)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===As&&(lt.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-$&&Y>=0&&Y<=C.height-J&&V.readPixels(W,Y,$,J,Ct.convert(ce),Ct.convert(ee),At)}finally{let jt=g!==null?gt.get(g).__webglFramebuffer:null;et.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.copyFramebufferToTexture=function(C,W,Y=0){let $=Math.pow(2,-Y),J=Math.floor(W.image.width*$),At=Math.floor(W.image.height*$);D.setTexture2D(W,0),V.copyTexSubImage2D(V.TEXTURE_2D,Y,0,0,C.x,C.y,J,At),et.unbindTexture()},this.copyTextureToTexture=function(C,W,Y,$=0){let J=W.image.width,At=W.image.height,Nt=Ct.convert(Y.format),Xt=Ct.convert(Y.type);D.setTexture2D(Y,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment),W.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,$,C.x,C.y,J,At,Nt,Xt,W.image.data):W.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,$,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Nt,W.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,$,C.x,C.y,Nt,Xt,W.image),$===0&&Y.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Y,$,J=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let At=C.max.x-C.min.x+1,Nt=C.max.y-C.min.y+1,Xt=C.max.z-C.min.z+1,jt=Ct.convert($.format),ce=Ct.convert($.type),ee;if($.isData3DTexture)D.setTexture3D($,0),ee=V.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)D.setTexture2DArray($,0),ee=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);let ne=V.getParameter(V.UNPACK_ROW_LENGTH),Qe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),si=V.getParameter(V.UNPACK_SKIP_PIXELS),mn=V.getParameter(V.UNPACK_SKIP_ROWS),Ki=V.getParameter(V.UNPACK_SKIP_IMAGES),Ge=Y.isCompressedTexture?Y.mipmaps[J]:Y.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Ge.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ge.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?V.texSubImage3D(ee,J,W.x,W.y,W.z,At,Nt,Xt,jt,ce,Ge.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ee,J,W.x,W.y,W.z,At,Nt,Xt,jt,Ge.data)):V.texSubImage3D(ee,J,W.x,W.y,W.z,At,Nt,Xt,jt,ce,Ge),V.pixelStorei(V.UNPACK_ROW_LENGTH,ne),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Qe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,si),V.pixelStorei(V.UNPACK_SKIP_ROWS,mn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ki),J===0&&$.generateMipmaps&&V.generateMipmap(ee),et.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),et.unbindTexture()},this.resetState=function(){R=0,M=0,g=null,et.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===fh?"display-p3":"srgb",e.unpackColorSpace=Se.workingColorSpace===hc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?tr:Dd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===tr?De:os}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Nl=class extends Ro{};Nl.prototype.isWebGL1Renderer=!0;var Za=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new j(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$a=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ja=class extends ai{constructor(t=null,e=1,n=1,s,r,o,a,c,l=bn,h=bn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ka=class extends fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hr=new Me,fd=new Me,_a=[],pd=new _e,M_=new Me,fo=new k,po=new Ds,ja=class extends k{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ka(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,M_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _e),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hr),pd.copy(t.boundingBox).applyMatrix4(Hr),this.boundingBox.union(pd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ds),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hr),po.copy(t.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(n),t.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hr),fd.multiplyMatrices(n,Hr),fo.matrixWorld=fd,fo.raycast(t,_a);for(let o=0,a=_a.length;o<a;o++){let c=_a[o];c.instanceId=r,c.object=this,e.push(c)}_a.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ka(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var We=class extends cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},md=new Me,Ol=new Oa,Ea=new Ds,Ma=new O,Ze=class extends yn{constructor(t=new oe,e=new We){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;md.copy(s).invert(),Ol.copy(t.ray).applyMatrix4(md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=f,y=d;x<y;x++){let m=l.getX(x);Ma.fromBufferAttribute(u,m),gd(Ma,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,y=d;x<y;x++)Ma.fromBufferAttribute(u,x),gd(Ma,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gd(i,t,e,n,s,r,o){let a=Ol.distanceSqToPoint(i);if(a<e){let c=new O;Ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var mi=class extends ai{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new dt:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new O,s=[],r=[],o=[],a=new O,c=new Me;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(xn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(xn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ao=class extends gi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new dt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fl=class extends Ao{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var va=new O,hl=new xh,ul=new xh,dl=new xh,Bl=class extends gi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(va.subVectors(s[0],s[1]).add(s[0]),l=va);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(va.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),x<1e-4&&(x=y),m<1e-4&&(m=y),hl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,y,m),ul.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,y,m),dl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,y,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ul.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),dl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(hl.calc(c),ul.calc(c),dl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function v_(i,t){let e=1-i;return e*e*t}function w_(i,t){return 2*(1-i)*i*t}function T_(i,t){return i*i*t}function Eo(i,t,e,n){return v_(i,t)+w_(i,e)+T_(i,n)}function b_(i,t){let e=1-i;return e*e*e*t}function S_(i,t){let e=1-i;return 3*e*e*i*t}function R_(i,t){return 3*(1-i)*i*i*t}function A_(i,t){return i*i*i*t}function Mo(i,t,e,n,s){return b_(i,t)+S_(i,e)+R_(i,n)+A_(i,s)}var Qa=class extends gi{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mo(t,s.x,r.x,o.x,a.x),Mo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kl=class extends gi{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mo(t,s.x,r.x,o.x,a.x),Mo(t,s.y,r.y,o.y,a.y),Mo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tc=class extends gi{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gl=class extends gi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ec=class extends gi{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Eo(t,s.x,r.x,o.x),Eo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vl=class extends gi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Eo(t,s.x,r.x,o.x),Eo(t,s.y,r.y,o.y),Eo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nc=class extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(xd(a,c.x,l.x,h.x,u.x),xd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},Wl=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:Bl,CubicBezierCurve:Qa,CubicBezierCurve3:kl,EllipseCurve:Ao,LineCurve:tc,LineCurve3:Gl,QuadraticBezierCurve:ec,QuadraticBezierCurve3:Vl,SplineCurve:nc}),Xl=class extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Wl[s.type]().fromJSON(s))}return this}},Co=class extends Xl{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new tc(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ec(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Qa(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new nc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ao(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ql=class i extends oe{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=xn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new O,f=new dt,d=new O,x=new O,y=new O,m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(x)}for(let w=0;w<=e;w++){let _=n+w*h*s,v=Math.sin(_),R=Math.cos(_);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*v,u.y=t[M].y,u.z=t[M].x*R,o.push(u.x,u.y,u.z),f.x=w/e,f.y=M/(t.length-1),a.push(f.x,f.y);let g=c[3*M+0]*v,A=c[3*M+1],E=c[3*M+0]*R;l.push(g,A,E)}}for(let w=0;w<e;w++)for(let _=0;_<t.length-1;_++){let v=_+w*t.length,R=v,M=v+t.length,g=v+t.length+1,A=v+1;r.push(R,M,A),r.push(g,A,M)}this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ic=class i extends ql{constructor(t=1,e=1,n=4,s=8){let r=new Co;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},$e=class i extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new O,h=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},It=class i extends oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,y=[],m=n/2,p=0;w(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function w(){let v=new O,R=new O,M=0,g=(e-t)/n;for(let A=0;A<=r;A++){let E=[],T=A/r,b=T*(e-t)+t;for(let P=0;P<=s;P++){let H=P/s,S=H*c+a,I=Math.sin(S),U=Math.cos(S);R.x=b*I,R.y=-T*n+m,R.z=b*U,u.push(R.x,R.y,R.z),v.set(I,g,U).normalize(),f.push(v.x,v.y,v.z),d.push(H,1-T),E.push(x++)}y.push(E)}for(let A=0;A<s;A++)for(let E=0;E<r;E++){let T=y[E][A],b=y[E+1][A],P=y[E+1][A+1],H=y[E][A+1];h.push(T,b,H),h.push(b,P,H),M+=6}l.addGroup(p,M,0),p+=M}function _(v){let R=x,M=new dt,g=new O,A=0,E=v===!0?t:e,T=v===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),x++;let b=x;for(let P=0;P<=s;P++){let S=P/s*c+a,I=Math.cos(S),U=Math.sin(S);g.x=E*U,g.y=m*T,g.z=E*I,u.push(g.x,g.y,g.z),f.push(0,T,0),M.x=I*.5+.5,M.y=U*.5*T+.5,d.push(M.x,M.y),x++}for(let P=0;P<s;P++){let H=R+P,S=b+P;v===!0?h.push(S,S+1,H):h.push(S+1,S,H),A+=3}l.addGroup(p,A,v===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zt=class i extends It{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Po=class i extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let _=new O,v=new O,R=new O;for(let M=0;M<e.length;M+=3)d(e[M+0],_),d(e[M+1],v),d(e[M+2],R),c(_,v,R,w)}function c(w,_,v,R){let M=R+1,g=[];for(let A=0;A<=M;A++){g[A]=[];let E=w.clone().lerp(v,A/M),T=_.clone().lerp(v,A/M),b=M-A;for(let P=0;P<=b;P++)P===0&&A===M?g[A][P]=E:g[A][P]=E.clone().lerp(T,P/b)}for(let A=0;A<M;A++)for(let E=0;E<2*(M-A)-1;E++){let T=Math.floor(E/2);E%2===0?(f(g[A][T+1]),f(g[A+1][T]),f(g[A][T])):(f(g[A][T+1]),f(g[A+1][T+1]),f(g[A+1][T]))}}function l(w){let _=new O;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(w),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){let w=new O;for(let _=0;_<r.length;_+=3){w.x=r[_+0],w.y=r[_+1],w.z=r[_+2];let v=m(w)/2/Math.PI+.5,R=p(w)/Math.PI+.5;o.push(v,1-R)}x(),u()}function u(){for(let w=0;w<o.length;w+=6){let _=o[w+0],v=o[w+2],R=o[w+4],M=Math.max(_,v,R),g=Math.min(_,v,R);M>.9&&g<.1&&(_<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),R<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function d(w,_){let v=w*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function x(){let w=new O,_=new O,v=new O,R=new O,M=new dt,g=new dt,A=new dt;for(let E=0,T=0;E<r.length;E+=9,T+=6){w.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),M.set(o[T+0],o[T+1]),g.set(o[T+2],o[T+3]),A.set(o[T+4],o[T+5]),R.copy(w).add(_).add(v).divideScalar(3);let b=m(R);y(M,T+0,w,b),y(g,T+2,_,b),y(A,T+4,v,b)}}function y(w,_,v,R){R<0&&w.x===1&&(o[_]=w.x-1),v.x===0&&v.z===0&&(o[_]=R/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},qn=class i extends Po{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Us=class extends Co{constructor(t){super(t),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Co().fromJSON(s))}return this}},C_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Xd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=D_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let x=e;x<s;x+=e)u=i[x],f=i[x+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Io(r,o,e,a,c,d,0),o}};function Xd(i,t,e,n,s){let r,o;if(s===X_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=yd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=yd(r,i[r],i[r+1],o);return o&&dc(o,o.next)&&(Ho(o),o=o.next),o}function er(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(dc(e,e.next)||Ve(e.prev,e,e.next)===0)){if(Ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Io(i,t,e,n,s,r,o){if(!i)return;!o&&r&&F_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?I_(i,n,s,r):P_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ho(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=L_(er(i),t,e),Io(i,t,e,n,s,r,2)):o===2&&H_(i,t,e,n,s,r):Io(er(i),t,e,n,s,r,1);break}}}function P_(i){let t=i.prev,e=i,n=i.next;if(Ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&Or(s,a,r,c,o,l,x.x,x.y)&&Ve(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function I_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,x=h<u?h<f?h:f:u<f?u:f,y=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Yl(d,x,t,e,n),w=Yl(y,m,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=w;){if(_.x>=d&&_.x<=y&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&Or(a,h,c,u,l,f,_.x,_.y)&&Ve(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=y&&v.y>=x&&v.y<=m&&v!==s&&v!==o&&Or(a,h,c,u,l,f,v.x,v.y)&&Ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=y&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&Or(a,h,c,u,l,f,_.x,_.y)&&Ve(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=w;){if(v.x>=d&&v.x<=y&&v.y>=x&&v.y<=m&&v!==s&&v!==o&&Or(a,h,c,u,l,f,v.x,v.y)&&Ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function L_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!dc(s,r)&&qd(s,n,n.next,r)&&Lo(s,r)&&Lo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ho(n),Ho(n.next),n=i=r),n=n.next}while(n!==i);return er(n)}function H_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&G_(o,a)){let c=Yd(o,a);o=er(o,o.next),c=er(c,c.next),Io(o,t,e,n,s,r,0),Io(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function D_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Xd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(k_(l));for(s.sort(U_),r=0;r<s.length;r++)e=z_(s[r],e);return e}function U_(i,t){return i.x-t.x}function z_(i,t){let e=N_(i,t);if(!e)return t;let n=Yd(e,i);return er(n,n.next),er(e,e.next)}function N_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Or(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Lo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&O_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function O_(i,t){return Ve(i.prev,i,t.prev)<0&&Ve(t.next,i,i.next)<0}function F_(i,t,e,n){let s=i;do s.z===0&&(s.z=Yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,B_(s)}function B_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function k_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Or(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function G_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!V_(i,t)&&(Lo(i,t)&&Lo(t,i)&&W_(i,t)&&(Ve(i.prev,i,t.prev)||Ve(i,t.prev,t))||dc(i,t)&&Ve(i.prev,i,i.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function dc(i,t){return i.x===t.x&&i.y===t.y}function qd(i,t,e,n){let s=Ta(Ve(i,t,e)),r=Ta(Ve(i,t,n)),o=Ta(Ve(e,n,i)),a=Ta(Ve(e,n,t));return!!(s!==r&&o!==a||s===0&&wa(i,e,t)||r===0&&wa(i,n,t)||o===0&&wa(e,i,n)||a===0&&wa(e,t,n))}function wa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ta(i){return i>0?1:i<0?-1:0}function V_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lo(i,t){return Ve(i.prev,i,i.next)<0?Ve(i,t,i.next)>=0&&Ve(i,i.prev,t)>=0:Ve(i,t,i.prev)<0||Ve(i,i.next,t)<0}function W_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yd(i,t){let e=new Zl(i.i,i.x,i.y),n=new Zl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yd(i,t,e,n){let s=new Zl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var vo=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_d(t),Ed(n,t);let o=t.length;e.forEach(_d);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ed(n,e[c]);let a=C_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function _d(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ed(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var nr=class i extends oe{constructor(t=new Us([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:q_,_,v=!1,R,M,g,A;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,R=p.computeFrenetFrames(h,!1),M=new O,g=new O,A=new O),f||(m=0,d=0,x=0,y=0);let E=a.extractPoints(l),T=E.shape,b=E.holes;if(!vo.isClockWise(T)){T=T.reverse();for(let V=0,at=b.length;V<at;V++){let Q=b[V];vo.isClockWise(Q)&&(b[V]=Q.reverse())}}let H=vo.triangulateShape(T,b),S=T;for(let V=0,at=b.length;V<at;V++){let Q=b[V];T=T.concat(Q)}function I(V,at,Q){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(at,Q)}let U=T.length,N=H.length;function z(V,at,Q){let lt,et,Pt,gt=V.x-at.x,D=V.y-at.y,L=Q.x-V.x,Z=Q.y-V.y,rt=gt*gt+D*D,ot=gt*Z-D*L;if(Math.abs(ot)>Number.EPSILON){let it=Math.sqrt(rt),Dt=Math.sqrt(L*L+Z*Z),vt=at.x-D/it,Rt=at.y+gt/it,Gt=Q.x-Z/Dt,$t=Q.y+L/Dt,ct=((Gt-vt)*Z-($t-Rt)*L)/(gt*Z-D*L);lt=vt+gt*ct-V.x,et=Rt+D*ct-V.y;let te=lt*lt+et*et;if(te<=2)return new dt(lt,et);Pt=Math.sqrt(te/2)}else{let it=!1;gt>Number.EPSILON?L>Number.EPSILON&&(it=!0):gt<-Number.EPSILON?L<-Number.EPSILON&&(it=!0):Math.sign(D)===Math.sign(Z)&&(it=!0),it?(lt=-D,et=gt,Pt=Math.sqrt(rt)):(lt=gt,et=D,Pt=Math.sqrt(rt/2))}return new dt(lt/Pt,et/Pt)}let B=[];for(let V=0,at=S.length,Q=at-1,lt=V+1;V<at;V++,Q++,lt++)Q===at&&(Q=0),lt===at&&(lt=0),B[V]=z(S[V],S[Q],S[lt]);let G=[],X,nt=B.concat();for(let V=0,at=b.length;V<at;V++){let Q=b[V];X=[];for(let lt=0,et=Q.length,Pt=et-1,gt=lt+1;lt<et;lt++,Pt++,gt++)Pt===et&&(Pt=0),gt===et&&(gt=0),X[lt]=z(Q[lt],Q[Pt],Q[gt]);G.push(X),nt=nt.concat(X)}for(let V=0;V<m;V++){let at=V/m,Q=d*Math.cos(at*Math.PI/2),lt=x*Math.sin(at*Math.PI/2)+y;for(let et=0,Pt=S.length;et<Pt;et++){let gt=I(S[et],B[et],lt);yt(gt.x,gt.y,-Q)}for(let et=0,Pt=b.length;et<Pt;et++){let gt=b[et];X=G[et];for(let D=0,L=gt.length;D<L;D++){let Z=I(gt[D],X[D],lt);yt(Z.x,Z.y,-Q)}}}let q=x+y;for(let V=0;V<U;V++){let at=f?I(T[V],nt[V],q):T[V];v?(g.copy(R.normals[0]).multiplyScalar(at.x),M.copy(R.binormals[0]).multiplyScalar(at.y),A.copy(_[0]).add(g).add(M),yt(A.x,A.y,A.z)):yt(at.x,at.y,0)}for(let V=1;V<=h;V++)for(let at=0;at<U;at++){let Q=f?I(T[at],nt[at],q):T[at];v?(g.copy(R.normals[V]).multiplyScalar(Q.x),M.copy(R.binormals[V]).multiplyScalar(Q.y),A.copy(_[V]).add(g).add(M),yt(A.x,A.y,A.z)):yt(Q.x,Q.y,u/h*V)}for(let V=m-1;V>=0;V--){let at=V/m,Q=d*Math.cos(at*Math.PI/2),lt=x*Math.sin(at*Math.PI/2)+y;for(let et=0,Pt=S.length;et<Pt;et++){let gt=I(S[et],B[et],lt);yt(gt.x,gt.y,u+Q)}for(let et=0,Pt=b.length;et<Pt;et++){let gt=b[et];X=G[et];for(let D=0,L=gt.length;D<L;D++){let Z=I(gt[D],X[D],lt);v?yt(Z.x,Z.y+_[h-1].y,_[h-1].x+Q):yt(Z.x,Z.y,u+Q)}}}K(),ut();function K(){let V=s.length/3;if(f){let at=0,Q=U*at;for(let lt=0;lt<N;lt++){let et=H[lt];Bt(et[2]+Q,et[1]+Q,et[0]+Q)}at=h+m*2,Q=U*at;for(let lt=0;lt<N;lt++){let et=H[lt];Bt(et[0]+Q,et[1]+Q,et[2]+Q)}}else{for(let at=0;at<N;at++){let Q=H[at];Bt(Q[2],Q[1],Q[0])}for(let at=0;at<N;at++){let Q=H[at];Bt(Q[0]+U*h,Q[1]+U*h,Q[2]+U*h)}}n.addGroup(V,s.length/3-V,0)}function ut(){let V=s.length/3,at=0;Tt(S,at),at+=S.length;for(let Q=0,lt=b.length;Q<lt;Q++){let et=b[Q];Tt(et,at),at+=et.length}n.addGroup(V,s.length/3-V,1)}function Tt(V,at){let Q=V.length;for(;--Q>=0;){let lt=Q,et=Q-1;et<0&&(et=V.length-1);for(let Pt=0,gt=h+m*2;Pt<gt;Pt++){let D=U*Pt,L=U*(Pt+1),Z=at+lt+D,rt=at+et+D,ot=at+et+L,it=at+lt+L;qt(Z,rt,ot,it)}}}function yt(V,at,Q){c.push(V),c.push(at),c.push(Q)}function Bt(V,at,Q){bt(V),bt(at),bt(Q);let lt=s.length/3,et=w.generateTopUV(n,s,lt-3,lt-2,lt-1);Ot(et[0]),Ot(et[1]),Ot(et[2])}function qt(V,at,Q,lt){bt(V),bt(at),bt(lt),bt(at),bt(Q),bt(lt);let et=s.length/3,Pt=w.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Ot(Pt[0]),Ot(Pt[1]),Ot(Pt[3]),Ot(Pt[1]),Ot(Pt[2]),Ot(Pt[3])}function bt(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function Ot(V){r.push(V.x),r.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Y_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wl[s.type]().fromJSON(s)),new i(n,t.options)}},q_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,c),new dt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],x=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new dt(o,1-c),new dt(l,1-u),new dt(f,1-x),new dt(y,1-p)]:[new dt(a,1-c),new dt(h,1-u),new dt(d,1-x),new dt(m,1-p)]}};function Y_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Sn=class i extends Po{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},on=class i extends Po{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ri=class i extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new O,x=new dt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let w=p+m,_=w,v=w+n+1,R=w+n+2,M=w+1;a.push(_,v,M),a.push(v,R,M)}}this.setIndex(a),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ie=class i extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,f=new O,d=[],x=[],y=[],m=[];for(let p=0;p<=n;p++){let w=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let M=R/e;u.x=-t*Math.cos(s+M*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+M*r)*Math.sin(o+_*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(M+v,1-_),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let _=h[p][w+1],v=h[p][w],R=h[p+1][w],M=h[p+1][w+1];(p!==0||o>0)&&d.push(_,v,M),(p!==n-1||c<Math.PI)&&d.push(v,R,M)}this.setIndex(d),this.setAttribute("position",new pe(x,3)),this.setAttribute("normal",new pe(y,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Kn=class i extends oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new O,u=new O,f=new O;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let y=x/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let y=(s+1)*d+x-1,m=(s+1)*(d-1)+x-1,p=(s+1)*(d-1)+x,w=(s+1)*d+x;o.push(y,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var St=class extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var sc=class extends cs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ba(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Z_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var qr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$l=class extends qr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tu:r=t,a=2*e-n;break;case bu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Tu:o=t,c=2*n-e;break;case bu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),y=x*x,m=y*x,p=-f*m+2*f*y-f*x,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*x+1,_=(-1-d)*m+(1.5+d)*y+.5*x,v=d*m-d*y;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+w*o[l+R]+_*o[c+R]+v*o[u+R];return r}},Jl=class extends qr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Kl=class extends qr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ai=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ba(e,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ba(t.times,Array),values:ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $l(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ra:e=this.InterpolantFactoryMethodDiscrete;break;case Aa:e=this.InterpolantFactoryMethodLinear;break;case kc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Z_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let y=e[u+x];if(y!==e[f+x]||y!==e[d+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Aa;var ir=class extends Ai{};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Ra;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends Ai{};jl.prototype.ValueTypeName="color";var Ql=class extends Ai{};Ql.prototype.ValueTypeName="number";var th=class extends qr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Hs.slerpFlat(r,0,o,l-a,o,l,c);return r}},Do=class extends Ai{InterpolantFactoryMethodLinear(t){return new th(this.times,this.values,this.getValueSize(),t)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.DefaultInterpolation=Aa;Do.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends Ai{};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Ra;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var eh=class extends Ai{};eh.prototype.ValueTypeName="vector";var nh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],x=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},$_=new nh,ih=class{constructor(t){this.manager=t!==void 0?t:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ih.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uo=class extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new j(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},rc=class extends Uo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},fl=new Me,Md=new O,vd=new O,oc=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Md.setFromMatrixPosition(t.matrixWorld),e.position.copy(Md),vd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vd),e.updateMatrixWorld(),fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var wd=new Me,mo=new O,pl=new O,sh=class extends oc{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mo.setFromMatrixPosition(t.matrixWorld),n.position.copy(mo),pl.copy(n.position),pl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pl),n.updateMatrixWorld(),s.makeTranslation(-mo.x,-mo.y,-mo.z),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}},Xe=class extends Uo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},rh=class extends oc{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ac=class extends Uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new rh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var cc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Td();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Td(){return(typeof performance>"u"?Date:performance).now()}var yh="\\[\\]\\.:\\/",J_=new RegExp("["+yh+"]","g"),_h="[^"+yh+"]",K_="[^"+yh.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",_h),Q_=/(WCOD+)?/.source.replace("WCOD",K_),tE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),eE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),nE=new RegExp("^"+j_+Q_+tE+eE+"$"),iE=["material","materials","bones","map"],oh=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J_,"")}static parseTrackName(t){let e=nE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);iE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=oh;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);var Yn=0,Oo=-9,On=1340,jn=4,fc=64,Eh=i=>Math.min(1,Math.max(0,i)),Qt=(i,t,e)=>i+(t-i)*e,wt=(i,t,e)=>{let n=Eh((e-i)/(t-i));return n*n*(3-2*n)};function $r(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function pc(i,t){let e=Math.imul(i,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function No(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=pc(e,n),l=pc(e+1,n),h=pc(e,n+1),u=pc(e+1,n+1);return Qt(Qt(c,l,o),Qt(h,u,o),a)}function Vt(i,t){return No(i,t)*.55+No(i*2.1+7,t*2.1+3)*.3+No(i*4.3+1,t*4.3+9)*.15}function or(i,t,e,n,s,r){let o=s-e,a=r-n,c=Eh(((i-e)*o+(t-n)*a)/(o*o+a*a));return Math.hypot(i-(e+o*c),t-(n+a*c))}function Jr(i,t,e){let n=1/0;for(let s=0;s<e.length-1;s++)n=Math.min(n,or(i,t,e[s][0],e[s][1],e[s+1][0],e[s+1][1]));return n}var Zr=32,Zd=1e9,$d=new WeakMap;function sE(i){let t=$d.get(i);if(t)return t;t=new Map;for(let e of i)for(let n=0;n<e.length-1;n++){let[s,r]=e[n],[o,a]=e[n+1],c=[s,r,o,a],l=Math.floor(Math.min(s,o)/Zr)-1,h=Math.floor(Math.max(s,o)/Zr)+1,u=Math.floor(Math.min(r,a)/Zr)-1,f=Math.floor(Math.max(r,a)/Zr)+1;for(let d=l;d<=h;d++)for(let x=u;x<=f;x++){let y=d*1e5+x;t.has(y)||t.set(y,[]),t.get(y).push(c)}}return $d.set(i,t),t}var Re=(i,t,e)=>{let n=sE(e).get(Math.floor(i/Zr)*1e5+Math.floor(t/Zr));if(!n)return Zd;let s=Zd;for(let[r,o,a,c]of n)s=Math.min(s,or(i,t,r,o,a,c));return s},ls=(i,t,e,n,s,r)=>r*wt(s,0,Math.hypot(i-e,t-n));function Fn(i,[t,e,n,s,r,o]){return a=>i+t*Math.sin(3*a+e)+n*Math.sin(5*a+s)+r*Math.sin(7*a+o)}function Jd(i){let t=i.map(d=>{let x=Math.ceil(d.maxR/jn)*jn,y=x*2/jn,m=y+1,p=d.cx-x,w=d.cz-x,_=new Float32Array(m*m);for(let v=0;v<m;v++)for(let R=0;R<m;R++)_[v*m+R]=d.height(p+R*jn,w+v*jn);return{island:d,half:x,segs:y,N:m,x0:p,z0:w,heights:_}});function e(d,x){for(let y of t){let m=(d-y.x0)/jn,p=(x-y.z0)/jn;if(m<0||p<0||m>=y.segs||p>=y.segs)continue;let w=Math.floor(m),_=Math.floor(p),v=m-w,R=p-_,M=_*y.N+w,g=y.heights;return Qt(Qt(g[M],g[M+1],v),Qt(g[M+y.N],g[M+y.N+1],v),R)}return Oo}function n(d,x){let y=jn;return Math.hypot(e(d+y,x)-e(d-y,x),e(d,x+y)-e(d,x-y))/(2*y)}function s(d,x){for(let y of t){let m=d-y.island.cx,p=x-y.island.cz;if(Math.hypot(m,p)<y.island.edge(Math.atan2(p,m))*1.02)return y.island}return null}let r=new xt,o=new j,a=new St({vertexColors:!0,flatShading:!0,roughness:.95});for(let d of t){let x=new Float32Array(d.N*d.N*3);d.colors=x;for(let y=0;y<d.N;y++)for(let m=0;m<d.N;m++){let p=d.x0+m*jn,w=d.z0+y*jn,_=y*d.N+m;d.island.color(p,w,d.heights[_],n(p,w),o),x[_*3]=o.r,x[_*3+1]=o.g,x[_*3+2]=o.b}for(let y=0;y<d.segs;y+=fc)for(let m=0;m<d.segs;m+=fc){let p=Math.min(fc,d.segs-m),w=Math.min(fc,d.segs-y),_=!1;for(let E=0;E<=w&&!_;E++)for(let T=0;T<=p;T++)if(d.heights[(y+E)*d.N+m+T]>Oo+.5){_=!0;break}if(!_)continue;let v=new Float32Array((p+1)*(w+1)*3),R=new Float32Array((p+1)*(w+1)*3);for(let E=0;E<=w;E++)for(let T=0;T<=p;T++){let b=(y+E)*d.N+m+T,P=(E*(p+1)+T)*3;v[P]=d.x0+(m+T)*jn,v[P+1]=d.heights[b],v[P+2]=d.z0+(y+E)*jn,R[P]=x[b*3],R[P+1]=x[b*3+1],R[P+2]=x[b*3+2]}let M=[];for(let E=0;E<w;E++)for(let T=0;T<p;T++){let b=E*(p+1)+T,P=b+1,H=b+p+1,S=H+1;M.push(b,H,P,P,H,S)}let g=new oe;g.setAttribute("position",new fe(v,3)),g.setAttribute("color",new fe(R,3)),g.setIndex(M),g.computeVertexNormals(),g.computeBoundingSphere();let A=new k(g,a);A.receiveShadow=!0,r.add(A)}}let c=8,l=Math.round(On*2/c)+1,h=new Uint8Array(l*l);for(let d=0;d<l;d++)for(let x=0;x<l;x++){let y=e(-On+x*c,-On+d*c);h[d*l+x]=Math.round(Eh((y+12)/36)*255)}let u=new Ja(h,l,l,uh,Ni);u.unpackAlignment=1,u.magFilter=Wn,u.minFilter=Wn,u.needsUpdate=!0;function f(d,x,y){for(let m of t){let p=Math.round((d-m.x0)/jn),w=Math.round((x-m.z0)/jn);if(p<0||w<0||p>m.segs||w>m.segs)continue;let _=(w*m.N+p)*3;return y.setRGB(m.colors[_],m.colors[_+1],m.colors[_+2])}return y.setRGB(0,0,0)}return{group:r,heightTex:u,sample:e,slopeAt:n,islandAt:s,colorAt:f}}var zo=5;function Kd(i,t){let e=Math.round(On*2/zo),n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d"),r=s.createImageData(e,e),o=new j,a=new j("#7fd8d0"),c=new j("#3b7fc0");for(let l=0;l<e;l++)for(let h=0;h<e;h++){let u=h*zo-On+zo/2,f=l*zo-On+zo/2,d=t(u,f);d<Yn?o.copy(a).lerp(c,wt(0,6,-d)):i(u,f,o).offsetHSL(0,0,wt(4,30,d)*.08);let x=(l*e+h)*4;o.convertLinearToSRGB(),r.data[x]=o.r*255,r.data[x+1]=o.g*255,r.data[x+2]=o.b*255,r.data[x+3]=255}return s.putImageData(r,0,0),n}var rE=40,oE=80;function jd(i){let t=i.length,e=new Float64Array(t),n=new Float64Array(t),s=i.flatMap(c=>c.paths),r=new j("#c9a66e"),o=new j;function a(c,l){let h=-1/0;for(let f=0;f<t;f++){let d=i[f],x=c-d.cx,y=l-d.cz,m=Math.hypot(x,y);if(m>760){e[f]=-1e9;continue}e[f]=d.edge(Math.atan2(y,x))-m+(No(c/110+f*17.3,l/110-f*9.1)-.5)*oE,e[f]>h&&(h=e[f])}if(h===-1/0)return n.fill(0),n[0]=1,-1e9;let u=0;for(let f=0;f<t;f++)n[f]=Math.exp((e[f]-h)/rE),u+=n[f];for(let f=0;f<t;f++)n[f]/=u;return h}return{id:"continent",name:"\u5927\u9678",cx:0,cz:0,maxR:0,height(c,l){let h=a(c,l);if(h<-40)return Oo;let u=0,f=0;for(let d=0;d<t;d++)n[d]<.004||(u+=n[d]*i[d].land(c,l),f+=n[d]);u/=f;for(let d of i)d.carve&&(u=d.carve(c,l,u));return Qt(Oo,u,wt(-30,55,h))},color(c,l,h,u,f){a(c,l),f.setRGB(0,0,0);let d=0;for(let x=0;x<t;x++)n[x]<.01||(i[x].color(c,l,h,u,o),f.r+=o.r*n[x],f.g+=o.g*n[x],f.b+=o.b*n[x],d+=n[x]);if(f.multiplyScalar(1/d),h>=1.7){let x=Re(c,l,s);x<2.6&&f.lerp(r,wt(2.6,1.6,x)*.75)}return f},weightOf(c,l,h){return a(l,h),n[c]},regionIndexAt(c,l){a(c,l);let h=0;for(let u=1;u<t;u++)n[u]>n[h]&&(h=u);return h}}}var ht=(i,t={})=>new St({color:i,roughness:.9,flatShading:!0,...t}),pt=i=>(i.castShadow=i.receiveShadow=!0,i);function tn(i,t){return{box(e,n,s,r,o,a,c,l,h="part"){if(t.push({box:new _e(new O(r-e/2,o,a-s/2),new O(r+e/2,o+n,a+s/2)),color:l,kind:h}),!c)return null;let u=pt(new k(new ft(e,n,s),c));return u.position.set(r,o+n/2,a),i.add(u),u},cyl(e,n,s,r,o,a,c,l="part",h=10){let u=null;return a&&(u=pt(new k(new It(e,e,n,h),a)),u.position.set(s,r+n/2,o),i.add(u)),t.push({box:new _e(new O(s-e,r,o-e),new O(s+e,r+n,o+e)),cyl:{x:s,z:o,r:e},color:c,kind:l}),u}}}function en(i,t,e){let n=new ja(i,t,e);n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1;let s=new yn,r=0;return{mesh:n,add(o,a,c,l=1,h=l,u=l,f=0,d=0,x=0,y=null,m="XYZ"){return r>=e?-1:(s.position.set(o,a,c),s.rotation.set(f,d,x,m),s.scale.set(l,h,u),s.updateMatrix(),n.setMatrixAt(r,s.matrix),y&&n.setColorAt(r,y),r++)},addMatrix(o){r>=e||n.setMatrixAt(r++,o)},finish(){return n.count=r,n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n}}}var CM=Math.sqrt(10),zs=720,xi=620,Be={east:20,west:-10,south:-30,north:-40};var vh=i=>380+26*Math.sin(3*i+.5)+14*Math.sin(7*i+2)+8*Math.sin(11*i+1),aE=(i,t)=>[Math.cos(i)*(vh(i)-t),Math.sin(i)*(vh(i)-t)],li=new dt(44,10).normalize(),Kr=new dt(-.39,.92).normalize(),Fi={name:"\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730",x:-164,z:-215,r:24,h:22},[ef,nf]=aE(2.2,22),Ae={altar:{name:"\u661F\u306E\u796D\u58C7",x:0,z:0,r:16,h:5},village:{name:"\u6F6E\u98A8\u306E\u6751 \u30B7\u30AA\u30AB\u30BC",x:190,z:152,r:30,h:4.5},plateau:Fi,lake:{name:"\u93E1\u306E\u6E56",x:Fi.x+li.x*51,z:Fi.z+li.y*51,r:20},cave:{name:"\u3072\u304B\u308A\u306E\u6D1E\u7A9F",x:-202,z:114,r:13,h:5},windmill:{name:"\u98A8\u8ECA\u306E\u4E18",x:262,z:-88,r:14},lighthouse:{name:"\u5CAC\u306E\u706F\u53F0",x:ef,z:nf,r:10},stones:{name:"\u53E4\u306E\u74B0\u72B6\u5217\u77F3",x:-255,z:-60,r:15,h:7}},Oi={x:Fi.x+li.x*18,z:Fi.z+li.y*18,r:4},Ns=Ae.lake,Qd=[[Ns.x,Ns.z],[-70,-225],[-20,-250],[40,-275],[100,-300],[170,-330],[260,-380],[340,-440]],mc=[Fi.x+Kr.x*62,Fi.z+Kr.y*62],Mh=[Fi.x+Kr.x*20,Fi.z+Kr.y*20],Mn=Ae.village,gc=Ae.cave,En=Ae.windmill,ci=Ae.stones,tf=[[[0,0],[60,50],[130,105],[Mn.x,Mn.z]],[[Mn.x,Mn.z],[Mn.x+12,Mn.z+48],[Mn.x+12,Mn.z+190]],[[0,0],[-30,-80],[-70,-150],[Ns.x+12,Ns.z+20]],[[0,0],[-60,-40],[-130,-110],mc],[mc,[(mc[0]+Mh[0])/2+4,(mc[1]+Mh[1])/2],Mh],[[0,0],[-80,40],[-150,90],[gc.x+13,gc.z]],[[0,0],[90,-20],[180,-60],[En.x-12,En.z+3]],[[0,0],[-60,90],[-150,200],[ef+8,nf-8]],[[-130,-110],[-200,-80],[ci.x+12,ci.z]],[[0,0],[130,Be.east-5],[260,Be.east],[480,Be.east]],[[-60,-40],[-150,-20],[-300,Be.west],[-480,Be.west]],[[0,0],[-20,100],[Be.south,250],[Be.south,480]],[[0,0],[-20,-120],[Be.north,-240],[Be.north,-480]],[[0,0],[150,-140],[330,-330]],[[Mn.x,Mn.z],[270,250],[360,360]],[[0,0],[-120,150],[-330,330]],[[-130,-110],[-230,-230],[-340,-330]]],Ci={sandDeep:new j("#c7ae78"),sand:new j("#f0dba3"),grass:new j("#7cbf5a"),grassDark:new j("#5f9f45"),grassHigh:new j("#93bf62"),rock:new j("#9a8f86"),rockDark:new j("#7d7470"),path:new j("#cfab72"),plaza:new j("#dccdaa")},cE=new j,sf={id:"start",name:"\u59CB\u307E\u308A\u306E\u8349\u539F",cx:0,cz:0,edge:vh,maxR:465,places:Ae,paths:tf,sanctuaries:[{x:Ae.altar.x,z:Ae.altar.z,r:14},{x:Mn.x,z:Mn.z,r:36}],land(i,t){let e=Math.hypot(i,t),n=3.5+Vt(i/45,t/45)*4.5;n+=Vt(i/150+20,t/150)*9*wt(70,220,e),n+=ls(i,t,En.x,En.z,90,13),n+=ls(i,t,-38,234,76,9),n+=ls(i,t,107,-120,50,4),n+=ls(i,t,250,230,70,8);let s=Fi,r=i-s.x,o=t-s.z,a=Math.hypot(r,o),c=a>.001?(r*Kr.x+o*Kr.y)/a:0,l=Qt(8,42,wt(.82,.97,c)),h=s.h+(Vt(i/12,t/12)-.5)*.8;n=Qt(n,h,wt(s.r+l,s.r,a)),n=Qt(n,s.h-1.3,wt(Oi.r+1.5,Oi.r-1,Math.hypot(i-Oi.x,t-Oi.z)));let u=or(i,t,Oi.x,Oi.z,s.x+li.x*25,s.z+li.y*25);a<s.r+1&&(n=Math.min(n,Qt(s.h-.8,n,wt(.8,2.2,u))));for(let f of["altar","village","cave","stones"]){let d=Ae[f];n=Qt(n,d.h,wt(d.r+16,d.r,Math.hypot(i-d.x,t-d.z)))}return n},carve(i,t,e){return e=Qt(e,-3.5,wt(Ns.r+10,Ns.r-3,Math.hypot(i-Ns.x,t-Ns.z))),Qt(e,-2.5,wt(22,5,Jr(i,t,Qd)))},color(i,t,e,n,s){if(e<1.7)s.copy(Ci.sandDeep).lerp(Ci.sand,wt(-2,1.2,e));else{let r=Vt(i/9,t/9);s.copy(Ci.grassDark).lerp(Ci.grass,r),s.lerp(Ci.grassHigh,wt(12,22,e)*.8),s.lerp(Ci.sand,wt(2.4,1.7,e));let o=Re(i,t,tf);o<2.6&&s.lerp(cE.copy(Ci.path).offsetHSL(0,0,(r-.5)*.06),wt(2.6,1.6,o)),Math.hypot(i-Mn.x,t-Mn.z)<14&&s.lerp(Ci.plaza,wt(14,12,Math.hypot(i-Mn.x,t-Mn.z))),Math.hypot(i-gc.x,t-gc.z)<12&&s.copy(Ci.rockDark)}return n>.75&&s.lerp(Vt(i/4,t/4)>.5?Ci.rock:Ci.rockDark,wt(.75,1.1,n)),s},nature:{trees:{style:"round",count:320,minH:2.6,avoidRiver:Qd,accentChance:.15,leafColors:[5216842,6665558,4164178,15902402]},palms:90,rocks:180,grass:{count:9e3,color:6266693},flowers:{count:2500,colors:[16774384,16766044,16752575,12166911]},avoid:[...Object.values(Ae).map(i=>[i.x,i.z,i.r]),[Mn.x+12,Mn.z+175,12]]},enemies:{kumodama:{count:30},ishimori:{count:7}},decorate(i,t){let e=new xt,n=tn(e,i),s=t(En.x,En.z),r=ht(15919832);n.cyl(4.2,14,En.x,s-.5,En.z,null,15919832);let o=pt(new k(new It(3,4.4,14,8),r));o.position.set(En.x,s+6.5,En.z);let a=pt(new k(new Zt(4,4.5,8),ht(14246986)));a.position.set(En.x,s+15.7,En.z);let c=new k(new ft(1.6,2.6,.3),ht(8015414)),l=Math.atan2(-En.x,-En.z);c.position.set(En.x+Math.sin(l)*4.1,s+1.3,En.z+Math.cos(l)*4.1),c.rotation.y=l,e.add(o,a,c);let h=new xt;h.position.set(En.x+Math.sin(l)*3.6,s+12,En.z+Math.cos(l)*3.6),h.rotation.y=l;let u=ht(9067067),f=ht(16774884,{side:le}),d=new k(new It(.6,.6,.8,8),u);d.rotation.x=Math.PI/2,h.add(d);for(let S=0;S<4;S++){let I=new xt;I.rotation.z=S/4*Math.PI*2;let U=pt(new k(new ft(.35,10,.25),u));U.position.y=5;let N=pt(new k(new _n(2,7.5),f));N.position.set(1.15,5.8,.05),I.add(U,N),h.add(I)}e.add(h);let[x,y]=[Ae.lighthouse.x,Ae.lighthouse.z],m=t(x,y),p=ht(12432806),w=pt(new k(new It(4.2,4.6,2.5,10),p));w.position.set(x,m+.8,y),e.add(w);for(let S=0;S<6;S++){let I=3.2-S*.18,U=3.2-(S+1)*.18,N=pt(new k(new It(U,I,3.4,12),ht(S%2?14246986:16447214)));N.position.set(x,m+2+S*3.4+1.7,y),e.add(N)}let _=m+2+6*3.4,v=pt(new k(new It(3,3,.4,12),ht(4869737)));v.position.set(x,_+.2,y);let R=new k(new It(1.4,1.4,2.2,10),new St({color:16773544,emissive:16765024,emissiveIntensity:1.4}));R.position.set(x,_+1.5,y);let M=pt(new k(new Zt(1.9,2,10),ht(4869737)));M.position.set(x,_+3.6,y),e.add(v,R,M),n.cyl(3.6,27,x,m-.5,y,null,14246986);let g=new xt;g.position.set(x,_+1.5,y);let A=new ve({color:16773544,transparent:!0,opacity:.22,depthWrite:!1,blending:Xn,side:le});for(let S of[1,-1]){let I=new k(new Zt(6,60,16,1,!0),A);I.rotation.z=S*Math.PI/2,I.position.x=S*30,g.add(I)}e.add(g);let E=new Xe(16769184,40,40);E.position.set(x,_+1.5,y),e.add(E);let T=ci.h,b=ht(11116950);for(let S=0;S<12;S++){let I=S/12*Math.PI*2,U=ci.x+Math.cos(I)*11,N=ci.z+Math.sin(I)*11,z=S%4===3?2.2:4.5+S%3*.6,B=pt(new k(new ft(1.5,z,.9),b));B.position.set(U,T+z/2-.3,N),B.rotation.y=-I+Math.PI/2,e.add(B),n.cyl(.9,z,U,T-.5,N,null,11116950)}for(let S of[0,4,8]){let I=(S+.5)/12*Math.PI*2,U=pt(new k(new ft(1.2,.8,6.4),b));U.position.set(ci.x+Math.cos(I)*11,T+5.2,ci.z+Math.sin(I)*11),U.rotation.y=-I,e.add(U)}let P=pt(new k(new It(2.2,2.4,.9,10),b));P.position.set(ci.x,T+.45,ci.z),e.add(P),n.cyl(2.3,.9,ci.x,T-.5,ci.z,null,11116950);let H=new k(new on(.6,0),new St({color:13154559,emissive:9400288,emissiveIntensity:1.2}));return H.position.set(ci.x,T+2,ci.z),e.add(H),{group:e,update(S,I){h.rotateZ(S*.6),g.rotation.y+=S*.7,H.rotation.y+=S,H.position.y=T+2+Math.sin(I*1.5)*.25}}}};var ze=(i,t={})=>new St({color:i,roughness:.85,flatShading:!0,...t}),Qn=i=>(i.castShadow=i.receiveShadow=!0,i);function rf(i,t,e,n){let s=new Us;s.moveTo(-i/2-.6,0),s.lineTo(0,e),s.lineTo(i/2+.6,0),s.lineTo(-i/2-.6,0);let r=new nr(s,{depth:t+1.2,bevelEnabled:!1});return r.translate(0,0,-(t+1.2)/2),Qn(new k(r,n))}function Fo({w:i,d:t,wall:e,roof:n,trim:s}){let r=new xt,o=4.4,a=Qn(new k(new ft(i,o,t),ze(e)));a.position.y=o/2,r.add(a);let c=ze(s),l=Qn(new k(new ft(i+.4,.5,t+.4),ze(11050900)));l.position.y=.25,r.add(l);for(let _ of[-1,1])for(let v of[-1,1]){let R=new k(new ft(.35,o,.35),c);R.position.set(_*(i/2),o/2,v*(t/2)),r.add(R)}let h=new k(new ft(i+.2,.3,t+.2),c);h.position.y=o,r.add(h);let u=rf(i,t,2.8,ze(n));u.position.y=o,r.add(u);let f=Qn(new k(new ft(.8,2.4,.8),ze(11773594)));f.position.set(i*.25,o+2.2,-t*.2),r.add(f);let d=new k(new ft(1.3,2.3,.15),ze(8015414));d.position.set(0,1.4,t/2+.05);let x=new k(new ie(.08,6,4),ze(16040539,{metalness:.6}));x.position.set(.4,1.4,t/2+.15),r.add(d,x);let y=ze(16773572,{emissive:16762992,emissiveIntensity:.35}),m=ze(s),p=(_,v,R)=>{let M=new xt,g=new k(new ft(1.1,1.1,.1),y),A=new k(new ft(1.3,.12,.14),m),E=new k(new ft(.12,1.3,.14),m),T=new k(new ft(1.4,.15,.4),m);T.position.y=-.65,M.add(g,A,E,T),M.position.set(_,2.6,v),M.rotation.y=R,r.add(M)};p(-i/2+1.4,t/2+.05,0),p(i/2-1.4,t/2+.05,0),p(i/2+.05,0,Math.PI/2),p(-i/2-.05,0,-Math.PI/2);let w=new k(new ft(1.2,.35,.35),ze(9067067));w.position.set(-i/2+1.4,1.95,t/2+.3),r.add(w);for(let _=0;_<3;_++){let v=new k(new Sn(.16,0),ze([16752575,16766044,16774384][_]));v.position.set(-i/2+1+_*.4,2.25,t/2+.3),r.add(v)}return r}function of(i,t){let e=new xt,n=Ae.village,s=n.h,r=(P,H="house",S=11565653)=>{P.updateMatrixWorld(!0),i.push({box:new _e().setFromObject(P),color:S,kind:H})},o=[[-19,-10,Math.PI/2,8,7,16050904,14246986,9067067],[0,-20,0,9,7,15393778,4165532,7030320],[19,-11,-Math.PI/2,8,7,16181192,5929156,9067067],[-19,11,Math.PI/2,7,6,15331812,14721340,7030320],[20,12,-Math.PI/2,8,6.5,16050904,10117040,9067067]];for(let[P,H,S,I,U,N,z,B]of o){let G=Fo({w:I,d:U,wall:N,roof:z,trim:B});G.position.set(n.x+P,s,n.z+H),G.rotation.y=S,e.add(G);let X=new k(new ft(I+.4,7,U+.4));X.position.set(n.x+P,s+3.5,n.z+H),X.rotation.y=S,r(X,"house",z)}let a=new xt,c=ze(12432806),l=Qn(new k(new It(1.6,1.7,1.1,12,1,!0),c));l.material.side=le,l.position.y=.55;let h=Qn(new k(new Kn(1.6,.2,6,16),c));h.rotation.x=Math.PI/2,h.position.y=1.1;let u=new k(new $e(1.5,16),ze(3899328,{roughness:.2}));u.rotation.x=-Math.PI/2,u.position.y=.5,a.add(l,h,u);let f=ze(9067067);for(let P of[-1,1]){let H=Qn(new k(new ft(.25,3.2,.25),f));H.position.set(P*1.5,1.6,0),a.add(H)}let d=rf(2.6,2.2,1.1,ze(14246986));d.position.y=3.1,d.rotation.y=Math.PI/2;let x=new k(new It(.3,.25,.45,8),f);x.position.set(0,2.2,0),a.add(d,x),a.position.set(n.x,s,n.z),e.add(a),i.push({box:new _e(new O(n.x-1.8,s,n.z-1.8),new O(n.x+1.8,s+4,n.z+1.8)),cyl:{x:n.x,z:n.z,r:1.8},color:12432806,kind:"house"});let y=(P,H,S,I)=>{let U=new xt,N=Qn(new k(new ft(4,1.1,1.6),f));N.position.y=.55,U.add(N);for(let G of[-1,1])for(let X of[-1,1]){let nt=new k(new ft(.18,3,.18),f);nt.position.set(G*1.9,1.5,X*.9-.3),U.add(nt)}for(let G=0;G<6;G++){let X=new k(new ft(.7333333333333334,.12,2.6),ze(G%2?16777215:I));X.position.set(-2.2+4.4/12+G*4.4/6,3.05,-.3),X.rotation.x=.25,X.castShadow=!0,U.add(X)}let z=[16739162,16766044,9426027,16753212,10471144];for(let G=0;G<7;G++){let X=new k(new Sn(.22,0),ze(z[G%z.length]));X.position.set(-1.5+G*.5,1.28,G%2*.35-.15),U.add(X)}U.position.set(P,s,H),U.rotation.y=S,e.add(U);let B=new k(new ft(4,2,1.6));B.position.set(P,s+1,H),B.rotation.y=S,r(B,"house",I)};y(n.x+8,n.z+7,-Math.PI/2,2864544),y(n.x-8,n.z+7,Math.PI/2,14698330);let m=ze(10119748),p=ze(12884588),w=[["barrel",5,-14],["barrel",6.2,-13.2],["crate",-5,-14],["crate",-5,-12.7,1.1],["barrel",13,3],["crate",-13,-3],["barrel",-14,20],["crate",14,21]];for(let[P,H,S,I=0]of w){let U=Qn(P==="barrel"?new k(new It(.55,.55,1.2,10),m):new k(new ft(1.1,1.1,1.1),p));U.position.set(n.x+H,s+.6+I,n.z+S),U.rotation.y=H,e.add(U),I||i.push({box:new _e(new O(n.x+H-.6,s,n.z+S-.6),new O(n.x+H+.6,s+1.2,n.z+S+.6)),cyl:{x:n.x+H,z:n.z+S,r:.6},color:10119748,kind:"prop"})}let _=ze(16770728,{emissive:16762992,emissiveIntensity:1.2}),v=[[-9,-6],[9,-6],[-9,16],[9,16],[3,26]];for(let[P,H]of v){let S=n.x+P,I=n.z+H,U=Qn(new k(new It(.12,.16,4,6),ze(4869737)));U.position.set(S,s+2,I);let N=new k(new on(.35,0),_);N.position.set(S,s+4.2,I),e.add(U,N),i.push({box:new _e(new O(S-.2,s,I-.2),new O(S+.2,s+4,I+.2)),cyl:{x:S,z:I,r:.2},color:4869737,kind:"prop"})}let R=new xt;for(let P of[-1,1]){let H=Qn(new k(new ft(.25,3.2,.25),f));H.position.set(P*1.8,1.6,0),R.add(H)}let M=(()=>{let P=document.createElement("canvas");P.width=256,P.height=96;let H=P.getContext("2d");H.fillStyle="#c49a6c",H.fillRect(0,0,256,96),H.fillStyle="#5a3a24",H.font='bold 40px "M PLUS Rounded 1c", sans-serif',H.textAlign="center",H.textBaseline="middle",H.fillText("\u30B7\u30AA\u30AB\u30BC\u6751",128,50);let S=new mi(P);return S.colorSpace=De,S})(),g=new k(new ft(4,1.4,.2),[f,f,f,f,new St({map:M}),new St({map:M})]);g.position.y=2.6,R.add(g),R.position.set(n.x-22,t(n.x-22,n.z-10),n.z-10),R.rotation.y=Math.atan2(-(n.x-22),-(n.z-10)),e.add(R);let A=n.x+12,E=n.z+40;for(;E<n.z+400&&t(A,E)>.9;)E+=1;let T=E<n.z+400,b=new xt;if(T){E-=4;let P=28,H=1.4,S=ze(11897438);for(let z=0;z<P/1.2;z++){let B=Qn(new k(new ft(4,.25,1.1),S));B.position.set(A+(Math.random()-.5)*.1,H-.12,E+z*1.2+.6),e.add(B)}for(let z=0;z<=P;z+=4)for(let B of[-1,1]){let G=Qn(new k(new It(.2,.2,5,6),ze(8015414)));G.position.set(A+B*1.9,H-2,E+z),e.add(G)}i.push({box:new _e(new O(A-2,H-.5,E),new O(A+2,H,E+P)),color:11897438,kind:"pier"});let I=new Us;I.moveTo(-1.3,.8),I.lineTo(1.3,.8),I.lineTo(.9,0),I.lineTo(-.9,0),I.lineTo(-1.3,.8);let U=Qn(new k(new nr(I,{depth:5,bevelEnabled:!1}),ze(14246986)));U.position.z=-2.5;let N=new k(new ft(2.4,.15,.6),ze(16050904));N.position.y=.6,b.add(U,N),b.position.set(A+4.2,Yn-.3,E+P-5),e.add(b)}return{group:e,update(P){b.position.y=Yn-.3+Math.sin(P*1.3)*.15,b.rotation.z=Math.sin(P*1.1)*.05}}}var vn=zs,hs=0,jr={greatTree:{name:"\u5343\u5E74\u6A39",x:vn,z:hs,r:22,h:8},mushroom:{name:"\u30AD\u30CE\u30B3\u306E\u8C37",x:vn+133,z:hs+152,r:30},spring:{name:"\u5996\u7CBE\u306E\u6CC9",x:vn-150,z:hs-170,r:14,h:5},cabin:{name:"\u6728\u3053\u308A\u306E\u5C0F\u5C4B",x:vn+170,z:hs-140,r:16,h:6}},Je=jr.greatTree,An=jr.mushroom,dn=jr.spring,we=jr.cabin,af=[[[vn-420,Be.east],[vn-200,Be.east-2],[vn-60,5],[Je.x-22,Je.z]],[[vn-60,5],[vn+40,80],[An.x-20,An.z-14]],[[vn-200,Be.east-2],[vn-180,-90],[dn.x-4,dn.z+16]],[[vn-60,5],[vn+60,-70],[we.x-16,we.z+4]]],Bi={sand:new j("#e6d3a0"),sandDeep:new j("#c4ad7c"),moss:new j("#5f9a4a"),dark:new j("#3f7a3c"),clearing:new j("#86c263"),valley:new j("#6f8a6a"),path:new j("#a8845a"),rock:new j("#7f7f72")},cf={id:"forest",name:"\u6DF1\u7DD1\u306E\u68EE",cx:vn,cz:hs,edge:Fn(420,[26,1.2,16,.3,10,2.4]),maxR:480,places:jr,paths:af,sanctuaries:[],land(i,t){let e=4+Vt(i/35,t/35)*6+Vt(i/140,t/140+9)*10;e+=ls(i,t,vn+174,hs-63,82,8),e+=ls(i,t,vn-60,hs+200,90,9),e+=ls(i,t,vn-230,hs+90,70,7);for(let n of[Je,dn,we])e=Qt(e,n.h,wt(n.r+16,n.r,Math.hypot(i-n.x,t-n.z)));return e=Qt(e,3,wt(An.r+16,An.r-4,Math.hypot(i-An.x,t-An.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Bi.sandDeep).lerp(Bi.sand,wt(-2,1.2,e));let r=Vt(i/8,t/8);s.copy(Bi.dark).lerp(Bi.moss,r),s.lerp(Bi.sand,wt(2.4,1.7,e)),s.lerp(Bi.clearing,wt(Je.r+6,Je.r-6,Math.hypot(i-Je.x,t-Je.z))*.8),s.lerp(Bi.clearing,wt(dn.r+6,dn.r-2,Math.hypot(i-dn.x,t-dn.z))*.7),s.lerp(Bi.valley,wt(An.r+8,An.r-6,Math.hypot(i-An.x,t-An.z)));let o=Re(i,t,af);return o<2.4&&s.lerp(Bi.path,wt(2.4,1.4,o)),n>.75&&s.lerp(Bi.rock,wt(.75,1.1,n)),s},nature:{trees:{style:"round",count:1250,leafColors:[4160060,3107642,5214021,5937744],trunkColor:7030320},palms:30,rocks:130,rockColor:8355698,grass:{count:9500,color:5214015},flowers:{count:2500,colors:[13625599,16777215,10473727]},avoid:Object.values(jr).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E2\u30EA\u30C0\u30DE",tint:5214042,mult:1.6,count:34},ishimori:{name:"\u30B3\u30B1\u30A4\u30EF",tint:7307098,mult:1.6,count:11}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=Je.h,o=ht(7031347,{roughness:1}),a=pt(new k(new It(3.6,6.5,34,10),o));a.position.set(Je.x,r+17,Je.z),n.add(a),s.cyl(6,40,Je.x,r-1,Je.z,null,7031347);for(let N=0;N<7;N++){let z=N/7*Math.PI*2+.3,B=pt(new k(new Zt(1.6,9,6),o));B.position.set(Je.x+Math.cos(z)*7,r+1,Je.z+Math.sin(z)*7),B.rotation.set(Math.sin(z)*1.2,0,-Math.cos(z)*1.2),n.add(B)}let c=[ht(4164165),ht(5216842),ht(3111488)];for(let N=0;N<12;N++){let z=e()*Math.PI*2,B=N<3?0:6+e()*10,G=9+e()*6,X=pt(new k(new Sn(1,0),c[N%3]));X.scale.setScalar(G),X.position.set(Je.x+Math.cos(z)*B,r+32+e()*12-B*.3,Je.z+Math.sin(z)*B),X.rotation.set(e()*3,e()*3,0),n.add(X)}let l=ht(13616822),h=pt(new k(new ft(2.4,1.2,1.6),l));h.position.set(Je.x-9,r+.6,Je.z),h.rotation.y=Math.PI/2,n.add(h),s.cyl(1.4,1.2,Je.x-9,r,Je.z,null,13616822);let u=new k(new ie(.4,12,8),new St({color:13172656,emissive:9429104,emissiveIntensity:1.3}));u.position.set(Je.x-9,r+1.7,Je.z),n.add(u);let f=[new St({color:10483434,emissive:4183744,emissiveIntensity:.9,flatShading:!0}),new St({color:16759008,emissive:13656232,emissiveIntensity:.8,flatShading:!0}),new St({color:16773544,emissive:14725184,emissiveIntensity:.7,flatShading:!0})],d=ht(15919832);for(let N=0;N<32;N++){let z=e()*Math.PI*2,B=e()*(An.r+6),G=An.x+Math.cos(z)*B,X=An.z+Math.sin(z)*B,nt=t(G,X),q=.8+e()*2.8,K=pt(new k(new It(.25*q,.35*q,2*q,8),d));K.position.set(G,nt+q,X);let ut=pt(new k(new ie(1.1*q,12,6,0,Math.PI*2,0,Math.PI/2),f[N%3]));ut.scale.y=.7,ut.position.set(G,nt+2*q-.1,X),n.add(K,ut),q>1.4&&s.cyl(.35*q,2*q+.6,G,nt-.5,X,null,f[N%3].color.getHex())}let x=new Xe(8384736,60,45);x.position.set(An.x,t(An.x,An.z)+5,An.z),n.add(x);let y=new k(new $e(8,28),new St({color:10483434,emissive:4175552,emissiveIntensity:.6,transparent:!0,opacity:.85,roughness:.1}));y.rotation.x=-Math.PI/2,y.position.set(dn.x,dn.h+.25,dn.z),n.add(y);let m=ht(13616822);for(let N=0;N<14;N++){let z=N/14*Math.PI*2,B=.7+e()*.5,G=pt(new k(new qn(B,0),m));G.position.set(dn.x+Math.cos(z)*8.8,dn.h+B*.4,dn.z+Math.sin(z)*8.8),n.add(G)}let p=40,w=new Float32Array(p*3),_=new oe;_.setAttribute("position",new fe(w,3));let v=new Ze(_,new We({color:16771327,size:.45,transparent:!0,opacity:.9,depthWrite:!1}));v.frustumCulled=!1,n.add(v);let R=new Xe(12124144,25,20);R.position.set(dn.x,dn.h+2,dn.z),n.add(R);let M=Fo({w:8,d:6.5,wall:10119748,roof:5929540,trim:5913124});M.position.set(we.x,we.h,we.z),M.rotation.y=-Math.PI/2,n.add(M);let g=new k(new ft(8.4,7,6.9));g.position.set(we.x,we.h+3.5,we.z),g.rotation.y=-Math.PI/2,g.updateMatrixWorld(!0),i.push({box:new _e().setFromObject(g),color:5929540,kind:"house"});let A=ht(9067067);for(let N=0;N<3;N++)for(let z=0;z<4-N;z++){let B=pt(new k(new It(.4,.4,3.2,8),A));B.rotation.x=Math.PI/2,B.position.set(we.x-8+z*.85+N*.42,we.h+.4+N*.72,we.z+7),n.add(B)}i.push({box:new _e(new O(we.x-8.5,we.h-.5,we.z+5.3),new O(we.x-4.9,we.h+2,we.z+8.7)),color:9067067,kind:"prop"});let E=pt(new k(new It(.8,.95,.9,10),A));E.position.set(we.x-7,we.h+.45,we.z-5);let T=new k(new It(.07,.07,1.4,6),ht(7030320));T.position.set(we.x-7,we.h+1.4,we.z-5),T.rotation.z=.4;let b=new k(new ft(.5,.35,.08),ht(12634320,{metalness:.6}));b.position.set(we.x-6.8,we.h+1,we.z-5),n.add(E,T,b),s.cyl(.95,.9,we.x-7,we.h-.2,we.z-5,null,9067067);let P=180,H=new Float32Array(P*3),S=[];for(let N=0;N<P;N++){let z=e()*Math.PI*2,B=8+e()*60,G=vn+Math.cos(z)*B,X=hs+Math.sin(z)*B;S.push({x:G,z:X,y:t(G,X)+1+e()*4,p:e()*10})}let I=new oe;I.setAttribute("position",new fe(H,3));let U=new Ze(I,new We({color:14679946,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return U.frustumCulled=!1,n.add(U),{group:n,update(N,z){u.position.y=r+1.7+Math.sin(z*2)*.15;for(let B=0;B<P;B++){let G=S[B];H[B*3]=G.x+Math.sin(z*.7+G.p)*1.5,H[B*3+1]=G.y+Math.sin(z*1.3+G.p*2)*.8,H[B*3+2]=G.z+Math.cos(z*.6+G.p)*1.5}I.attributes.position.needsUpdate=!0,U.material.opacity=.6+Math.sin(z*3)*.3;for(let B=0;B<p;B++){let G=z*.6+B/p*Math.PI*2,X=3+B%5*1.1;w[B*3]=dn.x+Math.cos(G*(1+B%3*.2))*X,w[B*3+1]=dn.h+1+Math.sin(z*2+B)*.8+B%4*.6,w[B*3+2]=dn.z+Math.sin(G*(1+B%3*.2))*X}_.attributes.position.needsUpdate=!0,y.material.emissiveIntensity=.5+Math.sin(z*1.5)*.2}}}};var xc=(i,t,e=6)=>new It(i,t,1,e).translate(0,.5,0),ti={trunk:xc(.45,.7),pineTrunk:xc(.35,.5),cone:new Zt(1,1,7).translate(0,.5,0),blob:new Sn(1,0),cactus:xc(.5,.55,8),cactusTop:new ie(.5,8,5,0,Math.PI*2,0,Math.PI/2),branch:xc(.12,.22,5),rock:new qn(1,0),blade:new Zt(.18,.9,3),flower:new Sn(.22,0),palmSeg:new It(.3,.36,1.25,6),frond:new Zt(.9,4.2,3,1,!0).translate(0,2.1,0),nut:new ie(.28,6,5)};function wh(i){let t=en(ti.palmSeg,ht(11108954),i*6),e=en(ti.frond,ht(5221973,{side:le}),i*7),n=en(ti.nut,ht(7030320),i*3);return{add(s,r,o,a,c,l){let h=[],u=new dt(a,c).normalize().multiplyScalar(.35+l()*.3),f=new O;for(let d=0;d<6;d++){let x=d/6,y=s+u.x*x*x*4,m=r+d*1.15+.6,p=o+u.y*x*x*4;h.push({mesh:t.mesh,index:t.add(y,m,p,1-d*.05,1,1-d*.05,u.y*x*.6,0,-u.x*x*.6)}),f.set(y,m+.7,p)}for(let d=0;d<7;d++)h.push({mesh:e.mesh,index:e.add(f.x,f.y,f.z,1,1,.25,0,d/7*Math.PI*2,1.15+l()*.25,null,"YXZ")});for(let d=0;d<3;d++)h.push({mesh:n.mesh,index:n.add(f.x+Math.cos(d*2.1)*.4,f.y-.4,f.z+Math.sin(d*2.1)*.4)});return h},finish(s){s.add(t.finish(),e.finish(),n.finish())}}}function lf(i,t,e,n,s,r=()=>1,o=1){let a=i.nature,c=[],l=(_,v)=>s()<r(_,v),h=new xt,u=i.maxR,f=a.avoid||[],d=()=>[i.cx+(s()-.5)*2*u,i.cz+(s()-.5)*2*u],x=(_,v,R)=>f.some(([M,g,A])=>Math.hypot(_-M,v-g)<A+R),y=(_,v,R,M,g,A,E)=>{let T={box:new _e(new O(_-R,M,v-R),new O(_+R,M+g,v+R)),cyl:{x:_,z:v,r:R},color:A,kind:E};return t.push(T),T},m=(_,v,R,M,g,A)=>{c.push({x:_,z:v,y:R,h:M,region:i,parts:g.filter(E=>E.index>=0),collider:A})},p=a.trees;if(p&&p.count){let _=p.count,v=ht(p.trunkColor??9067067,{roughness:1}),R=(p.leafColors||[5216842]).map(T=>ht(T)),M=R.map(T=>en(p.style==="pine"?ti.cone:ti.blob,T,_*3)),g=en(p.style==="pine"?ti.pineTrunk:p.style==="cactus"?ti.cactus:ti.trunk,p.style==="cactus"?R[0]:v,_*(p.style==="cactus"?3:1)),A=p.style==="cactus"?en(ti.cactusTop,R[0],_*3):p.style==="dead"?en(ti.branch,v,_*3):p.snowy?en(ti.cone,ht(16054523),_*3):null,E=0;for(let T=0;E<_&&T<_*40;T++){let[b,P]=d(),H=e(b,P);if(H<(p.minH??2.6)||H>(p.maxH??999)||n(b,P)>(p.maxSlope??.45)||x(b,P,4)||Re(b,P,i.paths)<4||p.avoidRiver&&Jr(b,P,p.avoidRiver)<10||!l(b,P))continue;E++;let S=p.accentChance&&s()<p.accentChance?R.length-1:Math.floor(s()*(R.length-(p.accentChance?1:0))),I,U=[],N=(B,...G)=>U.push({mesh:B.mesh,index:B.add(...G)}),z;if(p.style==="round"){I=4+s()*3,N(g,b,H-.3,P,1,I,1);let B=2+Math.floor(s()*2);for(let G=0;G<B;G++){let X=2.4+s()*1.4-G*.4;N(M[S],b+(s()-.5)*1.5,H+I+G*1.8,P+(s()-.5)*1.5,X,X,X,s()*3,s()*3,s()*3)}z=y(b,P,.7,H-1,I+3,R[S].color.getHex(),"tree")}else if(p.style==="pine"){I=7+s()*5,N(g,b,H-.3,P,1,2.2,1);for(let B=0;B<3;B++){let G=(2.6-B*.7)*(I/10),X=I*.42,nt=H+1.6+B*I*.26;N(M[S],b,nt,P,G,X,G,0,s()*3,0),A&&N(A,b,nt+X*.55,P,G*.55,X*.45,G*.55,0,s()*3,0)}z=y(b,P,.6,H-1,I+2,R[S].color.getHex(),"tree")}else if(p.style==="cactus"){I=2.5+s()*2.2,N(g,b,H-.2,P,1,I,1),N(A,b,H-.2+I,P);let B=1+Math.floor(s()*2);for(let G=0;G<B;G++){let X=s()*Math.PI*2+G*Math.PI,nt=b+Math.cos(X)*.9,q=P+Math.sin(X)*.9,K=H+I*(.35+s()*.25),ut=1+s()*1.2;N(g,nt,K,q,.6,ut,.6),N(A,nt,K+ut,q,.6,.6,.6)}z=y(b,P,.8,H-1,I+1,R[0].color.getHex(),"tree")}else if(p.style==="dead"){I=4+s()*3,N(g,b,H-.3,P,.8,I,.8);for(let B=0;B<2;B++){let G=s()*Math.PI*2;N(A,b,H+I*(.5+B*.2),P,1,1.6+s()*1.5,1,Math.cos(G)*.9,0,Math.sin(G)*.9)}z=y(b,P,.5,H-1,I+1,3813424,"tree")}m(b,P,H,I,U,z)}h.add(g.finish()),M.forEach(T=>h.add(T.finish())),A&&h.add(A.finish())}if(a.palms){let _=wh(a.palms),v=0;for(let R=0;v<a.palms&&R<a.palms*300;R++){let[M,g]=d(),A=e(M,g);if(A<1||A>2.6||x(M,g,2)||Re(M,g,i.paths)<5||!l(M,g))continue;v++;let E=e(M-3,g)-e(M+3,g),T=e(M,g-3)-e(M,g+3),b=_.add(M,A-.2,g,E||1,T,s);m(M,g,A,7,b,y(M,g,.45,A-1,7,5221973,"tree"))}_.finish(h)}if(a.rocks){let _=en(ti.rock,ht(a.rockColor??10327971),a.rocks),v=0;for(let R=0;v<a.rocks&&R<a.rocks*80;R++){let[M,g]=d(),A=e(M,g);if(A<.3||x(M,g,3)||Re(M,g,i.paths)<3||n(M,g)<.35&&s()>.35||!l(M,g))continue;v++;let E=.8+s()*1.8;_.add(M,A+E*.3,g,E*1.3,E,E*1.1,s(),s()*3,s()),y(M,g,E*1.1,A-.5,E*1.3,a.rockColor??10327971,"rock")}h.add(_.finish())}let w=(_,v,R,M,g)=>{let A=en(_,v,R);A.mesh.castShadow=!1;let E=0,T=g?.map(b=>new j(b));for(let b=0;E<R&&b<R*20;b++){let[P,H]=d(),S=e(P,H);if(S<2.2||n(P,H)>.5||Re(P,H,i.paths)<2.5||x(P,H,-2)||!l(P,H))continue;let I=.7+s()*.6;A.add(P,S+M,H,I,I,I,0,s()*3,(s()-.5)*.4,T?T[Math.floor(s()*T.length)]:null),E++}h.add(A.finish())};return a.grass?.count&&w(ti.blade,ht(a.grass.color,{flatShading:!1}),Math.round(a.grass.count*o),.35),a.flowers?.count&&w(ti.flower,ht(16777215),Math.round(a.flowers.count*o),.3,a.flowers.colors),{group:h,trees:c}}var Ii=0,fn=zs,Qr={oasis:{name:"\u98A8\u5F85\u3061\u306E\u30AA\u30A2\u30B7\u30B9",x:Ii+95,z:fn+47,r:20},temple:{name:"\u7802\u306E\u795E\u6BBF",x:Ii-114,z:fn-63,r:16,h:5},arch:{name:"\u5CA9\u306E\u30A2\u30FC\u30C1",x:Ii+40,z:fn-190,r:14},camp:{name:"\u968A\u5546\u306E\u91CE\u55B6\u5730",x:Ii-170,z:fn+130,r:16,h:4}},Cn=Qr.oasis,qe=Qr.temple,Pi=Qr.arch,wn=Qr.camp,Th=[[Ii+133,fn-152,22,17],[Ii-164,fn+133-60,24,14],[Ii+183,fn+196,18,22],[Ii-38,fn+247,15,12],[Ii+260,fn+40,20,16],[Ii-250,fn-40,18,15]],hf=[[[Be.south,fn-420],[Be.south,fn-250],[-60,fn-120],[qe.x+8,qe.z-14]],[[-60,fn-120],[20,fn-20],[Cn.x-22,Cn.z-10]],[[Be.south,fn-250],[Pi.x-10,Pi.z-20],[Pi.x,Pi.z+20]],[[-60,fn-120],[-130,fn+40],[wn.x+10,wn.z-14]]],ki={sand:new j("#ecd08e"),sandShade:new j("#d9b872"),sandDeep:new j("#c9a96c"),red1:new j("#c4704a"),red2:new j("#a85a3c"),red3:new j("#d99a6c"),green:new j("#7cbf5a"),path:new j("#c09058"),stone:new j("#d8c7a0")},uf={id:"desert",name:"\u967D\u708E\u306E\u7802\u6F20",cx:Ii,cz:fn,edge:Fn(420,[24,2.1,18,.8,10,1.5]),maxR:480,places:Qr,paths:hf,sanctuaries:[],land(i,t){let e=Vt(i/60,t/60),n=3+(Math.sin(i*.07+t*.02+e*6)*.5+.5)*3.2+Vt(i/25,t/25)*2+Vt(i/160,t/160+4)*8;for(let[s,r,o,a]of Th)n=Qt(n,a+6+(Vt(i/10,t/10)-.5),wt(o+5,o,Math.hypot(i-s,t-r)));for(let s of[qe,wn])n=Qt(n,s.h,wt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return n=Qt(n,-2,wt(Cn.r+10,Cn.r-5,Math.hypot(i-Cn.x,t-Cn.z))),n},color(i,t,e,n,s){if(e<1.7)return s.copy(ki.sandDeep).lerp(ki.sand,wt(-2,1.2,e));if(s.copy(ki.sandShade).lerp(ki.sand,Vt(i/14,t/14)),s.offsetHSL(0,0,Math.sin(i*.9+t*.35+Vt(i/5,t/5)*4)*.015),e>15||n>.7){let a=Math.floor(e/2.2)%3;s.copy(a===0?ki.red1:a===1?ki.red2:ki.red3)}let r=Math.hypot(i-Cn.x,t-Cn.z);r<Cn.r+9&&s.lerp(ki.green,wt(Cn.r+9,Cn.r+3,r)),Math.hypot(i-qe.x,t-qe.z)<qe.r-2&&s.lerp(ki.stone,.6);let o=Re(i,t,hf);return o<2.4&&s.lerp(ki.path,wt(2.4,1.4,o)*.7),s},nature:{trees:{style:"cactus",count:350,leafColors:[6266709],minH:2.4,maxSlope:.4},rocks:210,rockColor:13208164,grass:{count:4200,color:13218666},avoid:[...Object.values(Qr).map(i=>[i.x,i.z,i.r+6]),...Th.map(([i,t,e])=>[i,t,e+6])]},enemies:{kumodama:{name:"\u30B9\u30CA\u30C0\u30DE",tint:13214827,mult:2.2,count:34},ishimori:{name:"\u30B9\u30CA\u30E2\u30EA",tint:11565653,mult:2.2,count:11}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=ht(14733222),o=ht(12890250),a=qe.h,c=pt(new k(new ft(22,.8,18),o));c.position.set(qe.x,a-.1,qe.z),n.add(c),i.push({box:new _e().setFromObject(c),color:12890250,kind:"part"});let l=[8,8,3,8,5,8,8,2.5,8,6];for(let P=0;P<10;P++){let H=P<5?-1:1,S=qe.x-8+P%5*4,I=qe.z+H*7,U=l[P];if(s.cyl(.9,U,S,a+.3,I,r,14733222,"part",8),U>=8){let N=pt(new k(new ft(2.2,.6,2.2),o));N.position.set(S,a+.3+U+.3,I),n.add(N)}}let h=pt(new k(new ft(13,.9,2.2),o));h.position.set(qe.x-2,a+9.3,qe.z-7),n.add(h),s.box(18,9,1.6,qe.x,a+.3,qe.z-11,r,14733222);let u=new k(new ft(4.5,6,.3),ht(9071172));u.position.set(qe.x,a+3.3,qe.z-10.1),n.add(u);let f=new k(new $e(1.2,12),new St({color:16766826,emissive:14721072,emissiveIntensity:.8}));f.position.set(qe.x,a+7.2,qe.z-10.15),n.add(f);let d=pt(new k(new ft(4,4.5,4),r));d.position.set(qe.x+13,a+1.2,qe.z+2),d.rotation.set(.15,-.5,.1),n.add(d),s.cyl(2.8,4,qe.x+13,a-.5,qe.z+2,null,14733222);let x=new St({color:10483434,emissive:4183744,emissiveIntensity:1});for(let P of[-1,1]){let H=new k(new ft(.8,.3,.1),x);H.position.set(P*.9,.6,2.02),d.add(H)}let y=wh(18);for(let P=0;P<18;P++){let H=P/18*Math.PI*2+e()*.3,S=Cn.r+3+e()*6,I=Cn.x+Math.cos(H)*S,U=Cn.z+Math.sin(H)*S,N=t(I,U);N<.6||(y.add(I,N-.2,U,-Math.cos(H),-Math.sin(H),e),s.cyl(.45,7,I,N-1,U,null,5221973,"tree"))}y.finish(n);let m=ht(7315274);for(let P=0;P<70;P++){let H=e()*Math.PI*2,S=Cn.r-2+e()*4,I=Cn.x+Math.cos(H)*S,U=Cn.z+Math.sin(H)*S,N=new k(new Zt(.08,1.8,3),m);N.position.set(I,Math.max(t(I,U),0)+.8,U),N.rotation.z=(e()-.5)*.3,n.add(N)}let p=ht(12873802),w=t(Pi.x,Pi.z);for(let P of[-1,1]){let H=Pi.x+P*7,S=pt(new k(new It(2.2,3,12,7),p));S.position.set(H,w+5.5,Pi.z),n.add(S),s.cyl(2.6,12,H,w-1,Pi.z,null,12873802)}let _=pt(new k(new Kn(7,2.2,7,14,Math.PI),ht(11558972)));_.position.set(Pi.x,w+10.5,Pi.z),n.add(_);let v=wn.h,R=[14246986,2864544,16040539];for(let P=0;P<3;P++){let H=P/3*Math.PI*2+.4,S=wn.x+Math.cos(H)*8,I=wn.z+Math.sin(H)*8,U=pt(new k(new Zt(3.4,4.5,6),ht(R[P])));U.position.set(S,v+2.25,I);let N=new k(new _n(1.4,2.2),ht(5913124,{side:le})),z=Math.atan2(wn.x-S,wn.z-I);N.position.set(S+Math.sin(z)*2.1,v+1.1,I+Math.cos(z)*2.1),N.rotation.y=z,n.add(U,N),s.cyl(3,4.5,S,v-.5,I,null,R[P],"house")}let M=ht(7030320);for(let P=0;P<4;P++){let H=pt(new k(new It(.15,.15,1.8,6),M));H.position.set(wn.x,v+.25,wn.z),H.rotation.set(Math.PI/2-.3,P/4*Math.PI,0),n.add(H)}let g=new k(new Zt(.6,1.6,6),new ve({color:16752704,transparent:!0,opacity:.9}));g.position.set(wn.x,v+.9,wn.z);let A=new Xe(16751168,30,18);A.position.set(wn.x,v+1.5,wn.z),n.add(g,A);let E=ht(12884588);for(let[P,H]of[[4,-3],[4.9,-2.2],[-3,4]]){let S=pt(new k(new ft(1.1,1.1,1.1),E));S.position.set(wn.x+P,v+.55,wn.z+H),S.rotation.y=P,n.add(S)}let T=new k(new _n(3,2),ht(10117040));T.rotation.x=-Math.PI/2,T.position.set(wn.x-3.5,v+.05,wn.z-2),n.add(T);let b=[];for(let[P,H,S,I]of Th){let U=new k(new $e(S*.5,16),new ve({color:16773584,transparent:!0,opacity:.12,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.set(P,I+6.6,H),n.add(U),b.push(U)}return{group:n,update(P,H){b.forEach((S,I)=>{S.material.opacity=.08+Math.sin(H*2+I)*.05}),g.scale.set(1+Math.sin(H*13)*.1,1+Math.sin(H*9)*.18,1+Math.cos(H*11)*.1),A.intensity=26+Math.sin(H*15)*6}}}};var ar=0,Zn=-zs,Vi={x:ar+47,z:Zn-95,r:190,h:75},to={shrine:{name:"\u6C37\u306E\u7960",x:ar-120,z:Zn+25,r:12,h:12},pond:{name:"\u51CD\u3063\u305F\u6C60",x:ar+152,z:Zn+114,r:20},summit:{name:"\u767D\u5DBA\u306E\u9802",x:Vi.x,z:Vi.z,r:10},hut:{name:"\u5C71\u5C0F\u5C4B",x:ar-5,z:Zn+230,r:14,h:8},monument:{name:"\u96EA\u539F\u306E\u77F3\u7891",x:ar+230,z:Zn-60,r:12,h:10}},an=to.shrine,Pn=to.pond,ke=to.hut,Gi=to.monument,yc=Be.north,df=[[[yc,Zn+420],[yc,Zn+250],[Pn.x-24,Pn.z+16]],[[yc,Zn+240],[ke.x-10,ke.z]],[[yc,Zn+250],[-60,Zn+120],[an.x+14,an.z+4]],[[-60,Zn+120],[0,Zn+20],[Vi.x-8,Vi.z+20]],[[Pn.x-24,Pn.z+16],[200,Zn+40],[Gi.x-10,Gi.z+12]]],us={snow:new j("#f4f8fb"),snowShade:new j("#d8e5ef"),rock:new j("#8e96a3"),rockDark:new j("#6f7784"),beach:new j("#d9d4c8"),beachDeep:new j("#b9b4a8"),path:new j("#bccbd8"),stone:new j("#b9c3cf")},ff={id:"snow",name:"\u767D\u5DBA\u306E\u96EA\u539F",cx:ar,cz:Zn,edge:Fn(420,[26,.4,16,2.8,12,1.1]),maxR:480,places:to,paths:df,sanctuaries:[],land(i,t){let e=4+Vt(i/40,t/40)*6+Vt(i/150+3,t/150)*9,n=wt(Vi.r,0,Math.hypot(i-Vi.x,t-Vi.z));e+=Vi.h*n+(Vt(i/9,t/9)-.5)*4*n;for(let s of[an,ke,Gi])e=Qt(e,s.h,wt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=Qt(e,-1.5,wt(Pn.r+22,Pn.r-3,Math.hypot(i-Pn.x,t-Pn.z))),e},color(i,t,e,n,s){if(e<1.5)return s.copy(us.beachDeep).lerp(us.beach,wt(-2,1.2,e));s.copy(us.snowShade).lerp(us.snow,Vt(i/10,t/10)),s.lerp(us.beach,wt(2.2,1.5,e));let r=Re(i,t,df);return r<2.2&&s.lerp(us.path,wt(2.2,1.2,r)),Math.hypot(i-an.x,t-an.z)<an.r-3&&s.lerp(us.stone,.7),n>.7&&s.lerp(Vt(i/4,t/4)>.5?us.rock:us.rockDark,wt(.7,1,n)),s},nature:{trees:{style:"pine",count:850,leafColors:[3104074,3828562,2641983],trunkColor:5914672,snowy:!0,maxH:55,maxSlope:.6},rocks:210,rockColor:9344675,avoid:Object.values(to).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E6\u30AD\u30C0\u30DE",tint:13624565,mult:2.8,count:34},ishimori:{name:"\u30B3\u30AA\u30EA\u30E2\u30EA",tint:10467536,mult:2.8,count:11}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=new St({color:12578559,emissive:5224160,emissiveIntensity:.6,flatShading:!0,transparent:!0,opacity:.85}),o=Pn.r+6,a=new k(new $e(o,32),new St({color:14217983,roughness:.1,metalness:.1,transparent:!0,opacity:.88}));a.rotation.x=-Math.PI/2,a.position.set(Pn.x,Yn+.12,Pn.z),a.receiveShadow=!0,n.add(a),i.push({box:new _e(new O(Pn.x-o,-3,Pn.z-o),new O(Pn.x+o,Yn+.12,Pn.z+o)),cyl:{x:Pn.x,z:Pn.z,r:o},color:14217983,kind:"ice"});let c=an.h,l=ht(12174287);s.cyl(5.5,.6,an.x,c-.3,an.z,l,12174287,"part",12);for(let N=0;N<4;N++){let z=Math.PI/4+N/4*Math.PI*2;s.cyl(.5,5,an.x+Math.cos(z)*3.8,c+.3,an.z+Math.sin(z)*3.8,l,12174287,"part",8)}let h=pt(new k(new Zt(5.8,3,4),ht(5929156)));h.position.set(an.x,c+6.8,an.z),h.rotation.y=Math.PI/4,n.add(h);let u=new k(new on(1,0),r);u.scale.y=1.7,u.position.set(an.x,c+2.8,an.z),n.add(u);let f=new Xe(10479871,30,25);f.position.set(an.x,c+3,an.z),n.add(f);let d=new Zt(.8,1,5),x=(N,z,B)=>{let G=t(N,z),X=new k(d,r);X.scale.set(B*.8,B*4,B*.8),X.position.set(N,G+B*2-.3,z),X.rotation.set((e()-.5)*.4,e()*3,(e()-.5)*.4),n.add(X),s.cyl(.7*B,B*4,N,G-.5,z,null,12578559)};for(let N=0;N<10;N++){let z=e()*Math.PI*2,B=an.r+2+e()*8;x(an.x+Math.cos(z)*B,an.z+Math.sin(z)*B,.7+e()*1.1)}x(Vi.x,Vi.z-4,2.6);let y=Fo({w:8,d:6.5,wall:9067067,roof:16054523,trim:5913124});y.position.set(ke.x,ke.h,ke.z),y.rotation.y=-Math.PI/2,n.add(y);let m=new k(new ft(8.4,7,6.9));m.position.set(ke.x,ke.h+3.5,ke.z),m.rotation.y=-Math.PI/2,m.updateMatrixWorld(!0),i.push({box:new _e().setFromObject(m),color:9067067,kind:"house"});let p=14,w=new Float32Array(p*3),_=new O(ke.x+1.3,ke.h+7.8,ke.z+2);for(let N=0;N<p;N++)w[N*3]=_.x,w[N*3+1]=_.y+N/p*8,w[N*3+2]=_.z;let v=new oe;v.setAttribute("position",new fe(w,3));let R=new Ze(v,new We({color:14212580,size:1.1,transparent:!0,opacity:.28,depthWrite:!1}));R.frustumCulled=!1,n.add(R);let M=ht(16317437),g=pt(new k(new ie(1,12,10),M));g.position.set(ke.x-7,ke.h+.9,ke.z+5);let A=pt(new k(new ie(.65,12,10),M));A.position.set(ke.x-7,ke.h+2.3,ke.z+5);let E=new k(new Zt(.1,.5,6),ht(15764028));E.rotation.z=Math.PI/2,E.position.set(ke.x-7.7,ke.h+2.3,ke.z+5),n.add(g,A,E),s.cyl(1,2.8,ke.x-7,ke.h-.5,ke.z+5,null,16317437);let T=Gi.h,b=pt(new k(new ft(3.2,7,1.2),ht(8357780)));b.position.set(Gi.x,T+3.3,Gi.z),b.rotation.y=.4,n.add(b),s.cyl(2,7,Gi.x,T-.5,Gi.z,null,8357780);let P=new St({color:12578559,emissive:5224160,emissiveIntensity:1.3});for(let N=0;N<5;N++){let z=new k(new ft(N%2?1.6:.9,.18,.05),P);z.position.set((N%2?0:.2)-.1,1.8-N*.7,.62),b.add(z)}for(let N=0;N<6;N++){let z=N/6*Math.PI*2,B=pt(new k(new qn(.6,0),ht(9344675)));B.position.set(Gi.x+Math.cos(z)*4,T+.3,Gi.z+Math.sin(z)*4),n.add(B)}let H=700,S=new Float32Array(H*3);for(let N=0;N<H;N++)S[N*3]=(e()-.5)*80,S[N*3+1]=e()*40,S[N*3+2]=(e()-.5)*80;let I=new oe;I.setAttribute("position",new fe(S,3));let U=new Ze(I,new We({color:16777215,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return U.frustumCulled=!1,n.add(U),{group:n,update(N,z,B){u.rotation.y+=N;for(let X=0;X<p;X++){let nt=w[X*3+1]+N*1.2;nt>_.y+8&&(nt=_.y),w[X*3+1]=nt;let q=nt-_.y;w[X*3]=_.x+Math.sin(z*.8+X)*(.3+q*.12)+q*.25,w[X*3+2]=_.z+Math.cos(z*.7+X*1.7)*q*.12}v.attributes.position.needsUpdate=!0;let G=B&&Math.hypot(B.x-ar,B.z-Zn)<440;if(U.visible=!!G,!!G){U.position.set(B.x,B.y-5,B.z);for(let X=0;X<H;X++){let nt=S[X*3+1]-N*3;nt<0&&(nt+=40),S[X*3+1]=nt,S[X*3]+=Math.sin(z+X)*N*.5}I.attributes.position.needsUpdate=!0}}}}};var Ie=-zs,yi=0,Li={r:200,h:90,crater:22},ko={crater:{name:"\u7114\u306E\u706B\u53E3",x:Ie,z:yi,r:22},obsidian:{name:"\u9ED2\u66DC\u306E\u539F",x:Ie+133,z:yi+183,r:26,h:4},spring:{name:"\u6E6F\u3051\u3080\u308A\u306E\u6E29\u6CC9",x:Ie+240,z:yi-120,r:12,h:4},forge:{name:"\u935B\u51B6\u5834\u306E\u8DE1",x:Ie+232,z:yi+62,r:14,h:5}},Wi=ko.obsidian,be=ko.spring,Ce=ko.forge,Bo=Be.west,pf=[[[Ie+420,Bo],[Ie+262,Bo+2],[Ce.x-2,Ce.z-16]],[[Ie+262,Bo+2],[Ie+205,120],[Wi.x+12,Wi.z-22]],[[Ie+262,Bo+2],[Ie+252,-90],[be.x,be.z+15]],[[Ie+262,Bo+2],[Ie+170,-70],[Ie+70,-140],[Ie-60,-130],[Ie-120,-30],[Ie-80,70],[Ie+10,70],[Ie+40,20],[Ie+26,0]]],mf=[2.2,3.4,4.6],ds={basalt:new j("#4a4550"),ash:new j("#6d6570"),rim:new j("#7a4a40"),sand:new j("#3d3a40"),sandDeep:new j("#2e2c32"),path:new j("#8a7a70"),obsidian:new j("#2e2a36"),scorch:new j("#5a3a34"),spring:new j("#8a8078")},gf={id:"volcano",name:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",cx:Ie,cz:yi,edge:Fn(420,[20,2.6,18,1.9,10,.2]),maxR:480,places:ko,paths:pf,sanctuaries:[],land(i,t){let e=3+Vt(i/30,t/30)*4+Vt(i/130,t/130+7)*6,n=Math.hypot(i-Ie,t-yi);e+=Li.h*wt(Li.r,Li.crater,n)+(Vt(i/10,t/10)-.5)*3*wt(Li.r,40,n),e=Qt(e,Li.h-14,wt(Li.crater,Li.crater-8,n));for(let s of[Wi,be,Ce])e=Qt(e,s.h,wt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=Qt(e,be.h-1.2,wt(be.r-2,be.r-6,Math.hypot(i-be.x,t-be.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(ds.sandDeep).lerp(ds.sand,wt(-2,1.2,e));s.copy(ds.basalt).lerp(ds.ash,Vt(i/10,t/10));let r=Math.hypot(i-Ie,t-yi);s.lerp(ds.rim,wt(90,30,r)*.8),s.lerp(ds.obsidian,wt(Wi.r+6,Wi.r-6,Math.hypot(i-Wi.x,t-Wi.z))),s.lerp(ds.spring,wt(be.r+4,be.r-2,Math.hypot(i-be.x,t-be.z))*.7);let o=Re(i,t,pf);o<2.4&&s.lerp(ds.path,wt(2.4,1.4,o));let a=Math.atan2(t-yi,i-Ie);for(let c of mf){let l=Math.abs(Math.atan2(Math.sin(a-c),Math.cos(a-c)))*r;r>Li.crater&&r<170&&l<5&&s.lerp(ds.scorch,wt(5,2.5,l))}return s},nature:{trees:{style:"dead",count:250,trunkColor:3813424,maxH:30,maxSlope:.5},rocks:350,rockColor:4867408,grass:{count:2100,color:9075280},avoid:Object.values(ko).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30D2\u30C0\u30DE",tint:14246986,mult:3.5,count:34},ishimori:{name:"\u30E8\u30A6\u30AC\u30F3\u30E2\u30EA",tint:5917256,mult:3.5,count:12}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=new Nn({uniforms:{time:{value:0}},vertexShader:`
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
        }`}),o=Li.h-13.2,a=new k(new $e(Li.crater-4,32),r);a.rotation.x=-Math.PI/2,a.position.set(Ie,o,yi),n.add(a);let c=new Xe(16742960,200,90);c.position.set(Ie,o+6,yi),n.add(c);for(let z of mf){let B=[],G=[],X=[];for(let K=0;K<=70;K++){let ut=Li.crater+1+K*2.2,Tt=z+Math.sin(K*.35+z*3)*.08,yt=2.2+Math.sin(K*.5)*.7,Bt=Ie+Math.cos(Tt)*ut,qt=yi+Math.sin(Tt)*ut,bt=-Math.sin(Tt),Ot=Math.cos(Tt);for(let V of[-1,1]){let at=Bt+bt*V*yt,Q=qt+Ot*V*yt;B.push(at,t(at,Q)+.15,Q),G.push(V<0?0:1,K/6)}if(K>0){let V=(K-1)*2;X.push(V,V+1,V+2,V+1,V+3,V+2)}}let q=new oe;q.setAttribute("position",new pe(B,3)),q.setAttribute("uv",new pe(G,2)),q.setIndex(X),n.add(new k(q,r))}let l=new St({color:1907494,roughness:.15,metalness:.4,flatShading:!0});for(let z=0;z<26;z++){let B=e()*Math.PI*2,G=e()*Wi.r,X=Wi.x+Math.cos(B)*G,nt=Wi.z+Math.sin(B)*G,q=t(X,nt),K=.8+e()*1.8,ut=pt(new k(new Zt(.9*K,4*K,5),l));ut.position.set(X,q+1.6*K,nt),ut.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5),n.add(ut),s.cyl(.8*K,3.5*K,X,q-.5,nt,null,1907494)}let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d"),f=u.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,64,64);let d=new mi(h),x=(z,B,G,X,nt)=>{let q=new Float32Array(z*3),K=new Float32Array(z),ut=new oe;ut.setAttribute("position",new fe(q,3));let Tt=new Ze(ut,new We({color:X,size:G,map:d,transparent:!0,opacity:nt,depthWrite:!1}));return Tt.frustumCulled=!1,n.add(Tt),{pos:q,life:K,geo:ut,count:z,spread:B}},y=x(110,22,14,9076872,.45),m=z=>{y.pos[z*3]=Ie+(e()-.5)*y.spread,y.pos[z*3+1]=o+2,y.pos[z*3+2]=yi+(e()-.5)*y.spread,y.life[z]=0};for(let z=0;z<y.count;z++)m(z),y.life[z]=e()*8,y.pos[z*3+1]+=y.life[z]*6;let p=new k(new $e(be.r-2.5,28),new St({color:10479840,emissive:4171936,emissiveIntensity:.25,transparent:!0,opacity:.85,roughness:.15}));p.rotation.x=-Math.PI/2,p.position.set(be.x,be.h-.5,be.z),n.add(p);for(let z=0;z<16;z++){let B=z/16*Math.PI*2,G=.8+e()*.7,X=pt(new k(new qn(G,0),ht(7169392)));X.position.set(be.x+Math.cos(B)*(be.r-1.5),be.h+G*.3,be.z+Math.sin(B)*(be.r-1.5)),n.add(X)}let w=x(50,be.r*1.2,4,16777215,.35),_=z=>{w.pos[z*3]=be.x+(e()-.5)*w.spread,w.pos[z*3+1]=be.h-.3,w.pos[z*3+2]=be.z+(e()-.5)*w.spread,w.life[z]=0};for(let z=0;z<w.count;z++)_(z),w.life[z]=e()*3,w.pos[z*3+1]+=w.life[z]*1.5;let v=ht(7030320),R=new xt,M=pt(new k(new ft(.2,2.2,.2),v));M.position.y=1.1;let g=new k(new ft(1.6,.8,.12),ht(12884588));g.position.y=2,R.add(M,g),R.position.set(be.x,be.h,be.z+be.r+2),n.add(R);let A=Ce.h,E=ht(7169392);s.box(12,3.5,1.2,Ce.x,A-.3,Ce.z-6,E,7169392),s.box(1.2,2.2,8,Ce.x-6,A-.3,Ce.z-1.6,E,7169392),s.box(1.2,1.2,5,Ce.x+6,A-.3,Ce.z-3,E,7169392),s.box(4,4.2,3,Ce.x+2,A-.3,Ce.z-3.8,ht(5917256),5917256);let T=new k(new _n(1.8,1.4),new ve({color:16742960}));T.position.set(Ce.x+2,A+1.2,Ce.z-2.28),n.add(T);let b=pt(new k(new It(.8,1,5,8),ht(5917256)));b.position.set(Ce.x+2,A+6,Ce.z-4.2),n.add(b);let P=new Xe(16747072,25,14);P.position.set(Ce.x+2,A+1.5,Ce.z-1),n.add(P);let H=ht(3816004,{metalness:.6,roughness:.4}),S=pt(new k(new ft(.8,.9,.6),H));S.position.set(Ce.x-2,A+.45,Ce.z+1);let I=pt(new k(new ft(1.8,.45,.7),H));I.position.set(Ce.x-2,A+1.1,Ce.z+1);let U=new k(new Zt(.3,.8,6),H);U.rotation.z=Math.PI/2,U.position.set(Ce.x-3.2,A+1.1,Ce.z+1),n.add(S,I,U),s.cyl(1,1.4,Ce.x-2,A-.3,Ce.z+1,null,3816004);let N=ht(12107976,{metalness:.6});for(let z=0;z<4;z++){let B=new k(new ft(.1,1.4,.3),N);B.position.set(Ce.x+4+z*.6,A+.6,Ce.z+3+z%2*.5),B.rotation.set(0,z,(e()-.5)*.5),n.add(B)}return{group:n,update(z,B){r.uniforms.time.value=B,c.intensity=190+Math.sin(B*3)*40,P.intensity=22+Math.sin(B*12)*5;for(let G=0;G<y.count;G++)y.life[G]+=z,y.pos[G*3+1]+=z*6,y.pos[G*3]+=z*2,y.life[G]>8&&m(G);y.geo.attributes.position.needsUpdate=!0;for(let G=0;G<w.count;G++)w.life[G]+=z,w.pos[G*3+1]+=z*1.5,w.pos[G*3]+=Math.sin(B+G)*z*.3,w.life[G]>3&&_(G);w.geo.attributes.position.needsUpdate=!0}}}};var Os=xi,Fs=-xi,Go={garden:{name:"\u5927\u8F2A\u306E\u82B1\u7551",x:Os+40,z:Fs-30,r:34},tower:{name:"\u98A8\u9234\u306E\u5854",x:Os+170,z:Fs+120,r:12,h:12},lake:{name:"\u82B1\u306E\u6E56",x:Os-275,z:Fs+180,r:30}},Xi=Go.garden,Ke=Go.tower,eo=Go.lake,xf=[[[330,-330],[Os-140,Fs+110],[Xi.x-30,Xi.z+20]],[[Os-140,Fs+110],[eo.x+20,eo.z-30]],[[Xi.x-30,Xi.z+20],[Os+110,Fs+90],[Ke.x-12,Ke.z]]],fs={grass:new j("#8fd46b"),grassDark:new j("#6fb850"),pink:new j("#f4b8cf"),yellow:new j("#f4e08a"),lilac:new j("#c9b4ec"),sand:new j("#efdcae"),path:new j("#d8b882")},lE=new j,yf={id:"flowers",name:"\u82B1\u51A0\u306E\u4E18\u9675",cx:Os,cz:Fs,edge:Fn(400,[26,.9,14,2.2,10,.4]),maxR:460,places:Go,paths:xf,sanctuaries:[],land(i,t){let e=5+Vt(i/50,t/50)*8+Vt(i/180+11,t/180)*12;return e=Qt(e,Ke.h,wt(Ke.r+16,Ke.r,Math.hypot(i-Ke.x,t-Ke.z))),e=Qt(e,-3,wt(eo.r+14,eo.r-4,Math.hypot(i-eo.x,t-eo.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(fs.sand);s.copy(fs.grassDark).lerp(fs.grass,Vt(i/9,t/9));let r=Vt(i/22+3,t/22),o=Vt(i/30-7,t/30+2),a=r>.62?fs.pink:o>.64?fs.yellow:o<.32?fs.lilac:null;a&&s.lerp(a,.55),Math.hypot(i-Xi.x,t-Xi.z)<Xi.r&&s.lerp(lE.copy(fs.pink).lerp(fs.yellow,Vt(i/6,t/6)),.5);let c=Re(i,t,xf);return c<2.4&&s.lerp(fs.path,wt(2.4,1.4,c)),s},nature:{trees:{style:"round",count:420,leafColors:[15902402,13150448,10475115,16765152],accentChance:.25},rocks:60,rockColor:13222072,grass:{count:8e3,color:8176218},flowers:{count:11e3,colors:[16748464,16766044,12166911,16777215,16738922,16754912]},avoid:Object.values(Go).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CF\u30CA\u30C0\u30DE",tint:15902402,mult:1.3,count:32},ishimori:{name:"\u30C4\u30BF\u30A4\u30EF",tint:9416832,mult:1.3,count:9}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=ht(6270538),o=[16748464,16766044,12166911,16738922,16777215],a=[];for(let v=0;v<12;v++){let R=e()*Math.PI*2,M=e()*Xi.r,g=Xi.x+Math.cos(R)*M,A=Xi.z+Math.sin(R)*M,E=t(g,A),T=7+e()*8,b=pt(new k(new It(.35,.5,T,7),r));b.position.set(g,E+T/2-.3,A),n.add(b),s.cyl(.6,T,g,E-.5,A,null,6270538,"tree");let P=pt(new k(new ie(1,8,6),r));P.scale.set(1.6,.2,.7),P.position.set(g+1,E+T*.4,A),P.rotation.z=-.4,n.add(P);let H=new xt;H.position.set(g,E+T,A),H.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5);let S=ht(o[v%o.length]),I=1.6+e()*1.2;for(let N=0;N<7;N++){let z=pt(new k(new ie(1,10,6),S)),B=N/7*Math.PI*2;z.scale.set(I,.25,I*.55),z.position.set(Math.cos(B)*I,0,Math.sin(B)*I),z.rotation.y=-B,H.add(z)}let U=new k(new It(I*.55,I*.5,.5,12),new St({color:16762938,emissive:9067008,emissiveIntensity:.4}));H.add(U),n.add(H),a.push({head:H,p:e()*10})}let c=ht(16183524);s.cyl(2.8,16,Ke.x,Ke.h-.5,Ke.z,c,16183524,"part",10);let l=pt(new k(new It(3.6,3.6,.6,10),c));l.position.set(Ke.x,Ke.h+15.8,Ke.z),n.add(l);for(let v=0;v<4;v++){let R=v/4*Math.PI*2+Math.PI/4,M=pt(new k(new ft(.4,4,.4),c));M.position.set(Ke.x+Math.cos(R)*3,Ke.h+18,Ke.z+Math.sin(R)*3),n.add(M)}let h=pt(new k(new Zt(4.4,4,10),ht(2864544)));h.position.set(Ke.x,Ke.h+22,Ke.z),n.add(h);let u=[],f=[10479871,16759008,16773544,13154559];for(let v=0;v<6;v++){let R=v/6*Math.PI*2,M=new xt;M.position.set(Ke.x+Math.cos(R)*3.8,Ke.h+19.8,Ke.z+Math.sin(R)*3.8);let g=new k(new ie(.35,10,8,0,Math.PI*2,0,Math.PI/2),new St({color:f[v%4],transparent:!0,opacity:.8,emissive:f[v%4],emissiveIntensity:.3}));g.position.y=-.8;let A=new k(new _n(.25,.9),ht(16777215,{side:le}));A.position.y=-1.6,M.add(g,A),n.add(M),u.push({pivot:M,p:v})}let d=90,x=new Float32Array(d*3),y=new Float32Array(d*3),m=[],p=[16748464,16766044,12166911,10479871,16777215].map(v=>new j(v));for(let v=0;v<d;v++){let R=e()*Math.PI*2,M=e()*260,g=Os+Math.cos(R)*M,A=Fs+Math.sin(R)*M;m.push({x:g,z:A,y:Math.max(t(g,A),0)+1.5+e()*3,p:e()*10});let E=p[v%p.length];y[v*3]=E.r,y[v*3+1]=E.g,y[v*3+2]=E.b}let w=new oe;w.setAttribute("position",new fe(x,3)),w.setAttribute("color",new fe(y,3));let _=new Ze(w,new We({size:.45,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1}));return _.frustumCulled=!1,n.add(_),{group:n,update(v,R){for(let{head:M,p:g}of a)M.rotation.z=Math.sin(R*.8+g)*.08;for(let{pivot:M,p:g}of u)M.rotation.x=Math.sin(R*2.2+g)*.25,M.rotation.z=Math.cos(R*1.7+g)*.2;for(let M=0;M<d;M++){let g=m[M];x[M*3]=g.x+Math.sin(R*.5+g.p)*6,x[M*3+1]=g.y+Math.abs(Math.sin(R*6+g.p*3))*.5,x[M*3+2]=g.z+Math.cos(R*.4+g.p)*6}w.attributes.position.needsUpdate=!0}}}};var cr=xi,lr=xi,Vo={pond:{name:"\u6C88\u3093\u3060\u7960",x:cr+60,z:lr+40,r:45},reeds:{name:"\u8466\u306E\u8FF7\u3044\u9053",x:cr-120,z:lr+170,r:40}},Te=Vo.pond,Sh={z:Te.z,mid:Te.x-27},_f=10,bh=[[[360,360],[cr-60,lr+30],[Te.x-52,Te.z]],[[cr-60,lr+30],[Vo.reeds.x+20,Vo.reeds.z-30]]],no={moss:new j("#7a9a5a"),dark:new j("#5f7a4a"),mud:new j("#6b5a44"),shallow:new j("#5a6a4a"),path:new j("#9a8060")},Ef=(i,t)=>wt(.6,.68,Vt(i/35+50,t/35)),Mf={id:"marsh",name:"\u9727\u306E\u6E7F\u539F",cx:cr,cz:lr,edge:Fn(400,[24,1.7,16,.6,9,2.9]),maxR:460,places:Vo,paths:bh,sanctuaries:[],land(i,t){let e=2+Vt(i/40,t/40)*2.2+Vt(i/150+5,t/150)*2.5,n=wt(8,3,Re(i,t,bh));e=Qt(e,-1.6,Ef(i,t)*(1-n));let s=Math.hypot(i-Te.x,t-Te.z);return e=Qt(e,-2.2,wt(Te.r+10,Te.r-5,s)),e=Qt(e,3,wt(_f+4,_f-2,s)),e},color(i,t,e,n,s){if(e<1.7)return s.copy(no.mud).lerp(no.shallow,wt(-2,1.5,e));s.copy(no.dark).lerp(no.moss,Vt(i/8,t/8)),s.lerp(no.mud,Ef(i,t)*.5+(Vt(i/5,t/5)>.7?.3:0));let r=Re(i,t,bh);return r<2.4&&s.lerp(no.path,wt(2.4,1.4,r)),s},nature:{trees:{style:"round",count:300,leafColors:[4876858,3824180,5929540],trunkColor:4864554,minH:2.2},rocks:50,rockColor:8026730,grass:{count:9e3,color:8030794},flowers:{count:900,colors:[16777215,13150448,14739711]},avoid:Object.values(Vo).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CC\u30DE\u30C0\u30DE",tint:6982250,mult:1.9,count:32},ishimori:{name:"\u30C9\u30ED\u30A4\u30EF",tint:7035460,mult:1.9,count:10}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=ht(9079418),o=ht(6982218),a=t(Te.x,Te.z),c=new xt;c.position.set(Te.x-6,a-.6,Te.z),c.rotation.set(0,Math.PI/2,.12);for(let I of[-1,1]){let U=pt(new k(new It(.4,.5,6,8),r));U.position.set(I*2.4,3,0),c.add(U)}let l=pt(new k(new ft(6.6,.6,.8),r));l.position.y=6.1;let h=pt(new k(new ft(5.4,.4,.6),r));h.position.y=5.1,c.add(l,h),n.add(c),s.cyl(.5,6,Te.x-6,a-1,Te.z-2.4,null,9079418),s.cyl(.5,6,Te.x-6,a-1,Te.z+2.4,null,9079418);let u=new xt,f=pt(new k(new ft(4,.6,3.4),r));f.position.y=.3;let d=pt(new k(new ft(3,2.6,2.4),ht(5914672)));d.position.y=1.9;let x=pt(new k(new Zt(3,1.6,4),ht(3816004)));x.position.y=4,x.rotation.y=Math.PI/4;let y=new k(new Zt(2.4,.8,4),o);y.position.y=4.35,y.rotation.y=Math.PI/4;let m=new k(new ie(.35,12,8),new St({color:13697008,emissive:7332032,emissiveIntensity:1.4}));m.position.set(-1.25,1.7,0),u.add(f,d,x,y,m),u.position.set(Te.x+3,a,Te.z),n.add(u),s.box(4,4.5,3.4,Te.x+3,a-.5,Te.z,null,5914672);let p=new St({color:16773296,emissive:16762976,emissiveIntensity:1.2}),w=[[Te.x-2,Te.z-5],[Te.x-2,Te.z+5],[Te.x-32,Te.z-5],[Te.x-32,Te.z+5]];for(let[I,U]of w){let N=Math.max(t(I,U),-.2),z=new xt,B=pt(new k(new It(.25,.35,1.8,6),r));B.position.y=.9;let G=new k(new ft(.7,.6,.7),p);G.position.y=2.1;let X=pt(new k(new Zt(.7,.6,4),r));X.position.y=2.7,X.rotation.y=Math.PI/4,z.add(B,G,X),z.position.set(I,N,U),n.add(z)}let _=new Xe(11075552,30,30);_.position.set(Te.x,a+3,Te.z),n.add(_);let v=en(new $e(1,10,.3,Math.PI*2-.6).rotateX(-Math.PI/2),ht(5212735,{side:le}),700);v.mesh.castShadow=!1;let R=en(new Zt(.35,.5,6),ht(16754888),120),M=0;for(let I=0;M<700&&I<2e4;I++){let U=cr+(e()-.5)*700,N=lr+(e()-.5)*700,z=t(U,N);if(z>-.6||z<-2.4)continue;let B=.5+e()*.9;v.add(U,.05,N,B,1,B,0,e()*6,0),e()<.15&&R.add(U+.2,.3,N,1,1,1,Math.PI,0,0),M++}n.add(v.finish(),R.finish());let g=document.createElement("canvas");g.width=g.height=64;let A=g.getContext("2d"),E=A.createRadialGradient(32,32,0,32,32,32);E.addColorStop(0,"rgba(255,255,255,1)"),E.addColorStop(1,"rgba(255,255,255,0)"),A.fillStyle=E,A.fillRect(0,0,64,64);let T=70,b=new Float32Array(T*3),P=Array.from({length:T},()=>({x:(e()-.5)*140,z:(e()-.5)*140,y:.5+e()*3,v:.5+e()})),H=new oe;H.setAttribute("position",new fe(b,3));let S=new Ze(H,new We({color:15266028,size:22,map:new mi(g),transparent:!0,opacity:.22,depthWrite:!1}));return S.frustumCulled=!1,n.add(S),{group:n,update(I,U,N){m.position.y=1.7+Math.sin(U*1.8)*.12;let z=N&&Math.hypot(N.x-cr,N.z-lr)<420;if(S.visible=!!z,!!z){for(let B=0;B<T;B++){let G=P[B];G.x+=G.v*I*1.5,G.x>70&&(G.x-=140),b[B*3]=N.x+G.x,b[B*3+1]=Math.max(0,N.y-2)+G.y,b[B*3+2]=N.z+G.z}H.attributes.position.needsUpdate=!0}}}}};var ei=-xi,ni=xi,hE=[[ei-330,ni-150],[ei-120,ni-60],[ei,ni-20],[ei+150,ni+40],[ei+320,ni+110]],Ah={x:ei,z:ni-20},Rh={gorge:{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",x:ei,z:ni-20,r:20},shrine:{name:"\u7D05\u8449\u306E\u793E",x:ei-150,z:ni+150,r:16,h:12}},cn=Rh.shrine,vf=[[[-330,330],[ei+30,ni-110],[ei,ni-62]],[[ei,ni+22],[ei-70,ni+100],[cn.x+14,cn.z-6]]],Bs={gold:new j("#c0a450"),dry:new j("#a89048"),leaves:new j("#d0703a"),red:new j("#c04a30"),rock:new j("#a06c4a"),rockDark:new j("#7c5038"),path:new j("#c8a070")},wf={id:"canyon",name:"\u7D05\u8449\u306E\u6E13\u8C37",cx:ei,cz:ni,edge:Fn(400,[22,2.4,16,1.3,10,.7]),maxR:460,places:Rh,paths:vf,sanctuaries:[],land(i,t){let e=9+Vt(i/45,t/45)*6+Vt(i/170+3,t/170)*10;return e=Qt(e,cn.h,wt(cn.r+14,cn.r,Math.hypot(i-cn.x,t-cn.z))),e=Qt(e,-2.5,wt(34,9,Jr(i,t,hE))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Bs.rockDark);s.copy(Bs.dry).lerp(Bs.gold,Vt(i/9,t/9));let r=Vt(i/16+8,t/16);r>.55&&s.lerp(r>.66?Bs.red:Bs.leaves,wt(.55,.7,r)*.8),n>.6&&s.lerp(Math.floor(e/3)%2?Bs.rock:Bs.rockDark,wt(.6,.9,n));let o=Re(i,t,vf);return o<2.4&&s.lerp(Bs.path,wt(2.4,1.4,o)),s},nature:{trees:{style:"round",count:520,leafColors:[14704682,15769648,13122090,15253568],trunkColor:5913128},rocks:140,rockColor:10119754,grass:{count:6500,color:11573834},flowers:{count:1500,colors:[15769648,16766044,13122090]},avoid:[...Object.values(Rh).map(i=>[i.x,i.z,i.r+4])]},enemies:{kumodama:{name:"\u30E2\u30DF\u30B8\u30C0\u30DE",tint:14707258,mult:2.5,count:32},ishimori:{name:"\u30AB\u30EC\u30A4\u30EF",tint:10119754,mult:2.5,count:10}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=cn.h,o=ht(14172202),a=ht(2761254),c=new xt;for(let b of[-1,1]){let P=pt(new k(new It(.45,.5,7,10),o));P.position.set(b*3,3.5,0),c.add(P)}let l=pt(new k(new ft(8.6,.7,1),a));l.position.y=7.3;let h=pt(new k(new ft(7.8,.4,.8),o));h.position.y=6.8;let u=pt(new k(new ft(7.4,.4,.5),o));u.position.y=5.6,c.add(l,h,u),c.position.set(cn.x+10,r,cn.z-4),c.rotation.y=Math.atan2(-10,4)+Math.PI/2,n.add(c),s.cyl(.5,7,cn.x+10+Math.cos(c.rotation.y)*3,r-.5,cn.z-4-Math.sin(c.rotation.y)*3,null,14172202),s.cyl(.5,7,cn.x+10-Math.cos(c.rotation.y)*3,r-.5,cn.z-4+Math.sin(c.rotation.y)*3,null,14172202);let f=new xt,d=pt(new k(new ft(7,.8,6),ht(11050124)));d.position.y=.4;let x=pt(new k(new ft(5.2,3.2,4.4),ht(16050904)));x.position.y=2.4;let y=pt(new k(new ft(5.6,.4,4.8),o));y.position.y=4.1;let m=pt(new k(new Zt(5.2,2.6,4),ht(3814464)));m.position.y=5.5,m.rotation.y=Math.PI/4,m.scale.z=.8;let p=new k(new ie(.35,10,8),ht(16040539,{metalness:.6,roughness:.3}));p.position.set(0,3.5,2.4),f.add(d,x,y,m,p),f.position.set(cn.x,r,cn.z),f.rotation.y=Math.atan2(10,-4),n.add(f),s.cyl(3.6,6,cn.x,r-.5,cn.z,null,14172202,"house");let w=ht(11050124),_=new St({color:16773296,emissive:16752704,emissiveIntensity:1.2});for(let[b,P]of[[6,-9],[9,2],[-4,-9]]){let H=new xt,S=pt(new k(new It(.25,.35,1.6,6),w));S.position.y=.8;let I=new k(new ft(.6,.5,.6),_);I.position.y=1.85;let U=pt(new k(new Zt(.6,.5,4),w));U.position.y=2.35,H.add(S,I,U),H.position.set(cn.x+b,r,cn.z+P),n.add(H)}let v=160,R=new Float32Array(v*3),M=new Float32Array(v*3),g=[14704682,15769648,13122090,15253568].map(b=>new j(b)),A=Array.from({length:v},(b,P)=>{let H=g[P%4];return M[P*3]=H.r,M[P*3+1]=H.g,M[P*3+2]=H.b,{x:(e()-.5)*70,y:e()*22,z:(e()-.5)*70,p:e()*10}}),E=new oe;E.setAttribute("position",new fe(R,3)),E.setAttribute("color",new fe(M,3));let T=new Ze(E,new We({size:.4,vertexColors:!0,transparent:!0,depthWrite:!1}));return T.frustumCulled=!1,n.add(T),{group:n,update(b,P,H){p.position.x=Math.sin(P*1.3)*.08;let S=H&&Math.hypot(H.x-ei,H.z-ni)<420;if(T.visible=!!S,!!S){for(let I=0;I<v;I++){let U=A[I];U.y-=b*1.4,U.y<0&&(U.y+=22),R[I*3]=H.x+U.x+Math.sin(P*1.5+U.p)*1.5,R[I*3+1]=H.y+U.y-4,R[I*3+2]=H.z+U.z+Math.cos(P*1.2+U.p)*1.5}E.attributes.position.needsUpdate=!0}}}}};var hr=-xi,ur=-xi,Ec={heart:{name:"\u6C34\u6676\u306E\u5FC3\u81D3",x:hr-40,z:ur-40,r:18,h:26},pillars:{name:"\u5929\u67F1\u306E\u68EE",x:hr+130,z:ur+110,r:70}},nn=Ec.heart,Wo=Ec.pillars,_c=[[[-340,-330],[hr+180,ur+170],[hr+40,ur+30],[nn.x+20,nn.z+18]],[[hr+180,ur+170],[Wo.x+30,Wo.z-10]]],io={rock:new j("#8a82a0"),rockDark:new j("#6a6282"),moss:new j("#6a9a6a"),crystal:new j("#b8b0d8"),path:new j("#b0a8c0")},Tf={id:"highlands",name:"\u6C34\u6676\u306E\u9AD8\u5730",cx:hr,cz:ur,edge:Fn(400,[24,.2,14,1.1,11,2.6]),maxR:460,places:Ec,paths:_c,sanctuaries:[],land(i,t){let e=14+Vt(i/60,t/60)*10+Vt(i/200+7,t/200)*14,n=1-Math.abs(Vt(i/40+9,t/40)*2-1);return e+=n*n*6,e=Qt(e,nn.h,wt(nn.r+16,nn.r,Math.hypot(i-nn.x,t-nn.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(io.rockDark);s.copy(io.moss).lerp(io.rock,wt(.35,.65,Vt(i/14,t/14))),Vt(i/7+4,t/7)>.68&&s.lerp(io.crystal,.6),n>.65&&s.lerp(io.rockDark,wt(.65,.95,n));let r=Re(i,t,_c);return r<2.4&&s.lerp(io.path,wt(2.4,1.4,r)),s},nature:{trees:{style:"pine",count:330,leafColors:[3824202,4876890,3099200],trunkColor:4864564,maxSlope:.55},rocks:180,rockColor:8024208,grass:{count:4500,color:6986346},flowers:{count:900,colors:[13154559,10479871,16777215]},avoid:Object.values(Ec).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30B7\u30E7\u30A6\u30C0\u30DE",tint:10467560,mult:3.2,count:32},ishimori:{name:"\u30B9\u30A4\u30B7\u30E7\u30A6\u30E2\u30EA",tint:9074864,mult:3.2,count:11}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=ht(9077408),o=ht(6265434),a=ht(3824202);for(let y=0,m=0;y<22&&m<400;m++){let p=e()*Math.PI*2,w=Math.sqrt(e())*(Wo.r+60),_=Wo.x+Math.cos(p)*w,v=Wo.z+Math.sin(p)*w;if(Re(_,v,_c)<10)continue;y++;let R=t(_,v),M=22+e()*38,g=3.5+e()*5,A=pt(new k(new It(g*.8,g,M,7),r));A.position.set(_,R+M/2-1,v),A.rotation.y=e()*3,n.add(A);let E=pt(new k(new ie(g*.85,8,5,0,Math.PI*2,0,Math.PI/2),o));E.scale.y=.4,E.position.set(_,R+M-1,v),n.add(E);for(let T=0;T<2;T++){let b=pt(new k(new Zt(1.2,4,6),a));b.position.set(_+(e()-.5)*g,R+M+1.5,v+(e()-.5)*g),n.add(b)}s.cyl(g,M,_,R-1,v,null,9077408)}let c=[new St({color:10479871,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}),new St({color:13154559,emissive:8413408,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9})],l=c.map(y=>en(new on(1,0),y,200));for(let y=0,m=0;y<34&&m<600;m++){let p=hr+(e()-.5)*620,w=ur+(e()-.5)*620,_=t(p,w);if(_<6||Re(p,w,_c)<6||Math.hypot(p-nn.x,w-nn.z)<nn.r+6)continue;y++;let v=l[y%2];for(let R=0;R<5;R++){let M=.6+e()*1.4;v.add(p+(e()-.5)*2.5,_+M,w+(e()-.5)*2.5,M*.55,M*2.2,M*.55,(e()-.5)*.7,e()*3,(e()-.5)*.7)}s.cyl(1.8,4,p,_-.5,w,null,y%2?13154559:10479871)}l.forEach(y=>{y.mesh.castShadow=!1,n.add(y.finish())});let h=nn.h,u=ht(11577536);s.cyl(11,1.2,nn.x,h-.6,nn.z,u,11577536,"part",16);for(let y=0;y<6;y++){let m=y/6*Math.PI*2;s.cyl(.8,5,nn.x+Math.cos(m)*12.5,h-.5,nn.z+Math.sin(m)*12.5,u,11577536,"part",6)}let f=new k(new on(3.4,0),new St({color:14218495,emissive:7321855,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.88}));f.scale.y=1.7,f.position.set(nn.x,h+12,nn.z),n.add(f);let d=[];for(let y=0;y<6;y++){let m=new k(new on(.8,0),c[y%2]);m.scale.y=1.8,n.add(m),d.push(m)}let x=new Xe(10473727,80,60);return x.position.set(nn.x,h+12,nn.z),n.add(x),{group:n,update(y,m){f.rotation.y+=y*.5,f.position.y=h+12+Math.sin(m)*.8,d.forEach((p,w)=>{let _=m*.6+w/d.length*Math.PI*2;p.position.set(nn.x+Math.cos(_)*8,h+11+Math.sin(m*1.3+w)*1.5,nn.z+Math.sin(_)*8),p.rotation.y+=y*2})}}}};var qi=[sf,cf,uf,ff,gf,yf,Mf,wf,Tf],Xo=qi.flatMap(i=>Object.values(i.places)),Mc=qi.flatMap(i=>i.sanctuaries),bf=[{name:"\u5DDD\u306E\u6A4B",axis:"z",at:Be.north,mid:-240,small:!0},{name:"\u6E7F\u539F\u306E\u6728\u9053",axis:"x",at:Sh.z,mid:Sh.mid,small:!0},{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",axis:"z",at:Ah.x,mid:Ah.z,land:9,arch:-2.5}];function Sf(i){let t=new Nn({transparent:!0,depthWrite:!1,fog:!0,uniforms:mh.merge([Mt.fog,{heightMap:{value:null},time:{value:0},shallow:{value:new j("#6fdcd0")},deep:{value:new j("#2f73b8")},foam:{value:new j("#ffffff")},mapHalf:{value:On}}]),vertexShader:`
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
        float depth = max(0.0, ${Yn.toFixed(1)} - h);

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
      }`});t.uniforms.heightMap.value=i;let e=new k(new _n(4e3,4e3),t);return e.rotation.x=-Math.PI/2,e.position.y=Yn,e.renderOrder=1,{mesh:e,update(n){t.uniforms.time.value=n}}}function uE(){return new Nn({transparent:!0,depthWrite:!1,side:le,uniforms:{time:{value:0}},vertexShader:`
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
      }`})}function Rf(i){let t=new xt,e=Ae.plateau,n=uE(),s=5,r=new dt(-li.y,li.x),o=21,a=36,c=40,l=[],h=[],u=[],f=0,d=null;for(let T=0;T<=c;T++){let b=o+(a-o)*T/c,P=e.x+li.x*b,H=e.z+li.y*b,S=s*(.6+.4*(T/c)),I=Math.max(i(P,H),Yn-.2)+.35;d&&(f+=Math.hypot(b-d.d,I-d.y)),d={d:b,y:I};for(let U of[-1,1])l.push(P+r.x*U*S/2,I,H+r.y*U*S/2),h.push(U<0?0:1,f/6);if(T>0){let U=(T-1)*2;u.push(U,U+1,U+2,U+1,U+3,U+2)}}let x=new oe;x.setAttribute("position",new pe(l,3)),x.setAttribute("uv",new pe(h,2)),x.setIndex(u);let y=new k(x,n);y.renderOrder=2,t.add(y);let m=new St({color:7331024,transparent:!0,opacity:.8,roughness:.2}),p=new k(new $e(Oi.r+.6,24),m);p.rotation.x=-Math.PI/2,p.position.set(Oi.x,e.h-.45,Oi.z),t.add(p);let w=new O(e.x+li.x*33,Yn+.3,e.z+li.y*33),_=70,v=new Float32Array(_*3),R=new Float32Array(_),M=new Float32Array(_*3),g=T=>{v[T*3]=w.x+(Math.random()-.5)*4,v[T*3+1]=w.y,v[T*3+2]=w.z+(Math.random()-.5)*4,M[T*3]=(Math.random()-.5)*3,M[T*3+1]=2+Math.random()*4,M[T*3+2]=(Math.random()-.5)*3,R[T]=Math.random()};for(let T=0;T<_;T++)g(T);let A=new oe;A.setAttribute("position",new fe(v,3));let E=new Ze(A,new We({color:16777215,size:.5,transparent:!0,opacity:.8,depthWrite:!1}));return t.add(E),{group:t,update(T,b){n.uniforms.time.value=b;for(let P=0;P<_;P++)R[P]+=T,M[P*3+1]-=9*T,v[P*3]+=M[P*3]*T,v[P*3+1]+=M[P*3+1]*T,v[P*3+2]+=M[P*3+2]*T,(R[P]>1.2||v[P*3+1]<w.y-.5)&&g(P);A.attributes.position.needsUpdate=!0}}}var dE=1.6;function fE(i){let t=document.createElement("canvas");t.width=256,t.height=80;let e=t.getContext("2d");e.fillStyle="#c49a6c",e.fillRect(0,0,256,80),e.strokeStyle="#8a5a3b",e.lineWidth=6,e.strokeRect(3,3,250,74),e.fillStyle="#5a3a24",e.font='bold 34px "M PLUS Rounded 1c", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,42);let n=new mi(t);return n.colorSpace=De,n}function Af(i,t,e){let n=new xt,s=ht(11897438),r=ht(8015414),o=ht(14271642),a=ht(11116950),c=new St({color:16770728,emissive:16762992,emissiveIntensity:1.2}),l=en(new ft(1,1,1),s,2500),h=en(new ft(1,1,1),r,1500),u=en(new ft(1,1,1),o,2500),f=en(new It(1,1.2,1,8).translate(0,.5,0),a,200),d=[];for(let x of i){let y=x.axis==="x",m=S=>y?[S,x.at]:[x.at,S],p=S=>e(...m(S)),w=x.mid,_=x.mid,v=x.land??dE;for(let S=0;S<400&&p(w)<v;S++)w-=1;for(let S=0;S<400&&p(_)<v;S++)_+=1;w-=2,_+=2;let R=_-w,M=x.small?3.4:4.4,g=p(w)+.25,A=p(_)+.25,E=x.arch??(x.small?1.2:Math.min(7,Math.max(3,R*.07))),T=S=>{let I=(S-w)/R;return Qt(g,A,I)+E*Math.sin(Math.PI*I)},b=S=>T(S+.5)-T(S-.5),P=(S,I,U)=>y?[S,U,x.at+I]:[x.at+I,U,S],H=Math.ceil(R/2);for(let S=0;S<H;S++){let I=w+S*R/H,U=w+(S+1)*R/H,N=T((I+U)/2),z=(B,G,X,nt,q,K)=>{let[ut,,Tt]=P(I,B,0),[yt,,Bt]=P(U,G,0);t.push({box:new _e(new O(Math.min(ut,yt),X,Math.min(Tt,Bt)),new O(Math.max(ut,yt),nt,Math.max(Tt,Bt))),color:K,kind:q})};z(-M/2,M/2,N-.6,N,"bridge",11897438),z(-M/2-.3,-M/2,N,N+1.3,"rail",8015414),z(M/2,M/2+.3,N,N+1.3,"rail",8015414)}for(let S=w+.5;S<_;S+=1){let I=T(S)-.12,U=Math.atan(b(S)),[N,,z]=P(S,0,0);y?l.add(N,I,z,.95,.25,M,0,0,U):l.add(N,I,z,M,.25,.95,-U,0,0)}for(let S=w;S<=_+.01;S+=4){for(let I of[-1,1]){let[U,N,z]=P(S,I*(M/2+.15),T(S)+.7);h.add(U,N,z,.28,1.6,.28)}if(!x.small&&S>w+6&&S<_-6&&Math.round(S-w)%16===0){let[I,,U]=P(S,0,0),N=e(I,U);f.add(I,N,U,1.1,T(S)-.5-N,1.1)}}for(let S=w;S<_-.01;S+=4){let I=Math.min(S+4,_),U=(S+I)/2,N=Math.atan((T(I)-T(S))/(I-S));for(let z of[-1,1])for(let B of[1.35,.7]){let[G,X,nt]=P(U,z*(M/2+.15),T(U)+B);y?u.add(G,X,nt,I-S,.1,.1,0,0,N):u.add(G,X,nt,.1,.1,I-S,-N,0,0)}}if(!x.small)for(let[S,I]of[[w,1],[_,-1]]){let U=T(S);for(let nt of[-1,1]){let[q,,K]=P(S,nt*(M/2+.6),0),ut=pt(new k(new ft(.5,5.5,.5),r));ut.position.set(q,U+2.5,K);let Tt=new k(new on(.35,0),c);Tt.position.set(q,U+5.6,K),n.add(ut,Tt)}let[N,,z]=P(S,0,0),B=pt(new k(new ft(y?.4:M+2.2,.4,y?M+2.2:.4),r));B.position.set(N,U+5.1,z),n.add(B);let G=fE(x.name),X=new k(new _n(3.2,1),new St({map:G,side:le}));X.position.set(N,U+4.3,z),X.rotation.y=y?I>0?-Math.PI/2:Math.PI/2:I>0?Math.PI:0,n.add(X)}d.push({...x,from:m(w),to:m(_),length:R})}return n.add(l.finish(),h.finish(),u.finish(),f.finish()),{group:n,bridges:d}}var pE=(i,t,e,n="")=>`<svg viewBox="0 0 32 32">
  <path d="M25 3l4 0 0 4-13.5 13.5-4-4z" fill="${i}" stroke="${t}" stroke-width="1.2"/>
  ${n}
  <path d="M8.5 16.5l7 7-2 2-7-7z" fill="${e}"/>
  <path d="M8 22l2 2-4 4-2-2z" fill="#2a1418"/>
  <circle cx="4.6" cy="27.4" r="1.6" fill="#ff2a3a"/>
</svg>`,Ch={sangrea:pE("#0e0c12","#ff2030","#241018",'<path d="M13 19l12-12" stroke="#ff2030" stroke-width="1.6"/><circle cx="12" cy="20" r="1.4" fill="#ffd0d0"/>'),sword:'<svg viewBox="0 0 32 32"><path d="M24 4l4 0 0 4-13 13-4-4z" fill="#e6eef5" stroke="#8fa3b5" stroke-width="1.2"/><path d="M9 17l6 6-2 2-6-6z" fill="#f4c25b"/><path d="M8 22l2 2-4 4-2-2z" fill="#8a5a3b"/></svg>',potion:'<svg viewBox="0 0 32 32"><rect x="13" y="4" width="6" height="5" rx="1" fill="#b07a55"/><path d="M12 9h8v4l4 5v7a3 3 0 01-3 3H11a3 3 0 01-3-3v-7l4-5z" fill="#dff4ff" opacity=".8"/><path d="M9 18h14v7a2 2 0 01-2 2H11a2 2 0 01-2-2z" fill="#ff5a6e"/><circle cx="13" cy="21" r="1.4" fill="#fff" opacity=".8"/></svg>'},ps=(i,t,e)=>`<svg viewBox="0 0 32 32">
  <rect x="5" y="11" width="20" height="12" rx="2" fill="${i}" transform="rotate(-20 15 17)"/>
  <ellipse cx="24" cy="13.5" rx="4" ry="6" fill="${t}" transform="rotate(-20 24 13.5)"/>
  <ellipse cx="24" cy="13.5" rx="2" ry="3.2" fill="${e}" transform="rotate(-20 24 13.5)"/>
</svg>`,ms=(i,t,e,n,s,r)=>({name:i,desc:t,kind:"material",category:"wood",durability:e,resist:n,trait:s,icon:r,stack:99}),Ph={start:"woodYoung",flowers:"woodBlossom",forest:"woodElder",marsh:"woodMarsh",desert:"woodCactus",canyon:"woodMaple",snow:"woodFrost",highlands:"woodCrystal",volcano:"woodCharred"},mE={woodYoung:ms("\u82E5\u8449\u306E\u6728\u6750","\u59CB\u307E\u308A\u306E\u8349\u539F\u306E\u3001\u7D20\u76F4\u3067\u6271\u3044\u3084\u3059\u3044\u6728\u6750",100,{},{name:"\u6271\u3044\u3084\u3059\u3044",desc:"\u7279\u5225\u306A\u5F37\u3055\u306F\u306A\u3044\u304C\u3001\u3069\u3053\u3067\u3082\u4F7F\u3048\u308B\u57FA\u672C\u306E\u6728\u6750"},ps("#9a6a44","#e8c890","#c89a60")),woodBlossom:ms("\u82B1\u9999\u308B\u6728\u6750","\u82B1\u51A0\u306E\u4E18\u9675\u306E\u3001\u307B\u306E\u304B\u306B\u7518\u304F\u9999\u308B\u6728\u6750",80,{},{name:"\u7652\u3084\u3057\u306E\u9999\u308A",desc:"\u62E0\u70B9\u306B\u4F7F\u3046\u3068\u3001\u307E\u308F\u308A\u306E\u30DA\u30C3\u30C8\u304C\u306A\u3064\u304D\u3084\u3059\u304F\u306A\u308B"},ps("#b88a8a","#ffd8e4","#f2a6c2")),woodElder:ms("\u6DF1\u7DD1\u306E\u53E4\u6728\u6750","\u6DF1\u7DD1\u306E\u68EE\u306E\u3001\u5E74\u3092\u7D4C\u305F\u91CD\u304F\u786C\u3044\u6728\u6750",160,{water:!0},{name:"\u8150\u308A\u306B\u304F\u3044",desc:"\u6E7F\u6C17\u306B\u5F37\u304F\u3001\u9577\u3044\u3042\u3044\u3060\u50B7\u307E\u306A\u3044"},ps("#5a3a24","#c8a870","#6b8a4a")),woodMarsh:ms("\u6E7F\u539F\u306E\u6C34\u6728","\u9727\u306E\u6E7F\u539F\u306E\u3001\u6C34\u3092\u306F\u3058\u304F\u6728\u6750",120,{water:!0},{name:"\u9632\u6C34",desc:"\u6C34\u8FBA\u3084\u6CBC\u306E\u4E0A\u306B\u5EFA\u3066\u3066\u3082\u50B7\u307E\u306A\u3044"},ps("#4a4a34","#b8b088","#5a7a5a")),woodCactus:ms("\u30B5\u30DC\u30C6\u30F3\u6750","\u967D\u708E\u306E\u7802\u6F20\u306E\u3001\u4E7E\u3044\u305F\u8EFD\u3044\u6728\u6750",70,{heat:!0},{name:"\u8010\u6691",desc:"\u6691\u3055\u3067\u4E7E\u3044\u3066\u5272\u308C\u305F\u308A\u3057\u306A\u3044"},ps("#6a8a4a","#d8d09a","#9fbf6a")),woodMaple:ms("\u7D05\u8449\u306E\u5805\u6728","\u7D05\u8449\u306E\u6E13\u8C37\u306E\u3001\u3057\u306A\u3084\u304B\u3067\u7F8E\u3057\u3044\u6728\u6750",140,{},{name:"\u3057\u306A\u3084\u304B",desc:"\u885D\u6483\u306B\u5F37\u304F\u3001\u653B\u6483\u3092\u53D7\u3051\u3066\u3082\u58CA\u308C\u306B\u304F\u3044"},ps("#8a4a2a","#f0b070","#e0602a")),woodFrost:ms("\u96EA\u5DBA\u306E\u91DD\u8449\u6750","\u767D\u5DBA\u306E\u96EA\u539F\u306E\u3001\u5BD2\u3055\u306B\u8010\u3048\u3066\u80B2\u3063\u305F\u6728\u6750",200,{cold:!0},{name:"\u8010\u5BD2",desc:"\u96EA\u539F\u3067\u3082\u51CD\u3089\u306A\u3044\u3002\u307B\u304B\u306E\u6728\u6750\u3088\u308A\u4E08\u592B"},ps("#5a4030","#e8f0f8","#9fc0d8")),woodCrystal:ms("\u6C34\u6676\u677E\u306E\u6728\u6750","\u6C34\u6676\u306E\u9AD8\u5730\u306E\u3001\u9B54\u529B\u3092\u5E2F\u3073\u305F\u6728\u6750",180,{cold:!0},{name:"\u9B54\u529B\u3092\u5E2F\u3073\u308B",desc:"\u591C\u306B\u306A\u308B\u3068\u6DE1\u304F\u5149\u308B\u3002\u9B54\u6CD5\u306E\u529B\u306B\u5F37\u3044"},ps("#4a4458","#c8b8ff","#9fe8ff")),woodCharred:ms("\u713C\u3051\u70AD\u306E\u6728\u6750","\u7114\u306E\u706B\u5C71\u5730\u5E2F\u306E\u3001\u713C\u3051\u3066\u3082\u6B8B\u3063\u305F\u9ED2\u3044\u6728\u6750",150,{heat:!0,fire:!0},{name:"\u8010\u706B",desc:"\u706B\u5C71\u306E\u71B1\u3067\u3082\u71C3\u3048\u306A\u3044"},ps("#2a2226","#6a5a50","#ff7a30"))},dr={cold:{name:"\u5BD2\u3055",where:"\u767D\u5DBA\u306E\u96EA\u539F\u30FB\u6C34\u6676\u306E\u9AD8\u5730",effect:"\u51CD\u3063\u3066\u3082\u308D\u304F\u306A\u308B"},heat:{name:"\u6691\u3055",where:"\u967D\u708E\u306E\u7802\u6F20\u30FB\u7114\u306E\u706B\u5C71\u5730\u5E2F",effect:"\u4E7E\u3044\u3066\u3072\u3073\u5272\u308C\u308B"},fire:{name:"\u706B",where:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",effect:"\u71C3\u3048\u3066\u3057\u307E\u3046"},water:{name:"\u6E7F\u6C17",where:"\u9727\u306E\u6E7F\u539F\u30FB\u6DF1\u7DD1\u306E\u68EE",effect:"\u8150\u3063\u3066\u5F31\u304F\u306A\u308B"}},gs={...mE,sword:{name:"\u65C5\u4EBA\u306E\u5263",desc:"\u4F7F\u3044\u6163\u308C\u305F\u7247\u624B\u5263\u30023\u6BB5\u30B3\u30F3\u30DC\u304C\u51FA\u305B\u308B",kind:"weapon",moveset:"sword",held:"sword",stance:"sword",power:1,icon:Ch.sword},sangrea:{name:"\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2",desc:"\u8840\u3092\u5438\u3063\u3066\u8108\u6253\u3064\u3001\u9ED2\u3044\u9B54\u5263\u3002\u901F\u304F\u91CD\u3044 4 \u6BB5\u306E\u9023\u6483\u3092\u653E\u3064",kind:"weapon",moveset:"blood",held:"sangrea",rarity:"blood",stance:"blood",power:1.7,speed:1.15,trail:16719920,passive:{id:"lifesteal",name:"\u5438\u8840",desc:"\u4E0E\u3048\u305F\u30C0\u30E1\u30FC\u30B8\u306E 10% \u3060\u3051 HP \u3092\u56DE\u5FA9\u3059\u308B",rate:.1},skills:["bloodGale","crimsonMoon","bloodRelease"],icon:Ch.sangrea},potion:{name:"\u56DE\u5FA9\u85AC",desc:"\u98F2\u3080\u3068 HP \u304C 40 \u56DE\u5FA9\u3059\u308B",kind:"consumable",held:"potion",heal:40,icon:Ch.potion}},vc=8;function Cf(){let i=Array(vc).fill(null);i[0]={id:"sword",count:1},i[1]={id:"potion",count:3},i[2]={id:"sangrea",count:1};let t=0;return{slots:i,get selected(){return t},set selected(e){t=Math.max(0,Math.min(vc-1,e))},get held(){let e=i[t];return e?{...gs[e.id],id:e.id,count:e.count}:null},consumeHeld(){let e=i[t];e&&(e.count--,e.count<=0&&(i[t]=null))},add(e,n=1){let s=gs[e],r=s.stack??(s.kind==="consumable"?99:1);for(let o of i){if(n<=0)break;if(o&&o.id===e&&o.count<r){let a=Math.min(n,r-o.count);o.count+=a,n-=a}}for(;n>0;){let o=i.indexOf(null);if(o<0)break;let a=Math.min(n,r);i[o]={id:e,count:a},n-=a}return n}}}function gE(){let i=new Nn({side:zn,depthWrite:!1,uniforms:{top:{value:new j("#4f8fe0")},horizon:{value:new j("#fde8d2")},bottom:{value:new j("#8fc3e0")}},vertexShader:`
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
      }`});return new k(new ie(1700,32,16),i)}function xE(i){let t=new xt,e=new sc({color:16777215,emissive:12107980,flatShading:!0}),n=new Sn(1,1);for(let s=0;s<90;s++){let r=new xt,o=4+Math.floor(i()*4);for(let l=0;l<o;l++){let h=10+i()*12,u=new k(n,e);u.scale.set(h,h*.6,h),u.position.set((l-o/2)*15+i()*6,i()*6,i()*12-6),r.add(u)}let a=i()*Math.PI*2,c=i()*1600;r.position.set(Math.cos(a)*c,130+i()*90,Math.sin(a)*c),t.add(r)}return t}function yE(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=512/2;e.strokeStyle="#ffffff",e.fillStyle="#ffffff",e.lineCap="round",e.lineWidth=10,e.beginPath(),e.arc(n,n,236,0,Math.PI*2),e.stroke(),e.lineWidth=4,e.beginPath(),e.arc(n,n,206,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(n,n,110,0,Math.PI*2),e.stroke();for(let r=0;r<16;r++){let o=r/16*Math.PI*2;e.save(),e.translate(n+Math.cos(o)*221,n+Math.sin(o)*221),e.rotate(o),e.lineWidth=4,e.beginPath(),r%2?(e.moveTo(-6,-6),e.lineTo(6,6),e.moveTo(6,-6),e.lineTo(-6,6)):e.arc(0,0,5,0,Math.PI*2),e.stroke(),e.restore()}e.lineWidth=5;for(let r of[0,Math.PI/3]){e.beginPath();for(let o=0;o<=3;o++){let a=r+o/3*Math.PI*2-Math.PI/2;e.lineTo(n+Math.cos(a)*200,n+Math.sin(a)*200)}e.stroke()}e.beginPath(),e.arc(n,n,22,0,Math.PI*2),e.fill();let s=new mi(t);return s.colorSpace=De,s}function _E(i){let t=Ae.altar,e=t.h,n=new xt;n.position.set(t.x,e,t.z);let s=ht(14275267,{roughness:.85}),r=pt(new k(new It(7.6,8,.4,16),s));r.position.y=.2;let o=pt(new k(new It(7,7.3,.4,16),s));o.position.y=.6,n.add(r,o),i.push({box:new _e(new O(t.x-7.3,e-1,t.z-7.3),new O(t.x+7.3,e+.8,t.z+7.3)),cyl:{x:t.x,z:t.z,r:7.3},color:14275267,kind:"spawn"});let a=new k(new $e(6.4,48),new ve({map:yE(),color:8384736,transparent:!0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.82,n.add(a);let c=ht(12432806),l=new St({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let x=0;x<4;x++){let y=Math.PI/4+x/4*Math.PI*2,m=Math.cos(y)*10,p=Math.sin(y)*10,w=pt(new k(new It(.5,.7,3.2,6),c));w.position.set(m,1.6,p);let _=new k(new on(.45,0),l);_.position.set(m,3.8,p),n.add(w,_),i.push({box:new _e(new O(t.x+m-.7,e-1,t.z+p-.7),new O(t.x+m+.7,e+3.2,t.z+p+.7)),cyl:{x:t.x+m,z:t.z+p,r:.7},color:12432806,kind:"part"})}let h=60,u=new Float32Array(h*3),f=new Float32Array(h);for(let x=0;x<h;x++){let y=Math.random()*Math.PI*2,m=Math.random()*6;u[x*3]=Math.cos(y)*m,u[x*3+1]=Math.random()*6,u[x*3+2]=Math.sin(y)*m,f[x]=Math.random()}let d=new oe;return d.setAttribute("position",new fe(u,3)),n.add(new Ze(d,new We({color:11206642,size:.25,transparent:!0,opacity:.85,depthWrite:!1}))),{group:n,update(x,y){a.rotation.z=y*.15,a.material.opacity=.75+Math.sin(y*2)*.2;let m=d.attributes.position;for(let p=0;p<h;p++){let w=m.getY(p)+x*(.6+f[p]);w>7&&(w=.8),m.setY(p,w)}m.needsUpdate=!0}}}function EE(i,t){let e=new xt,n=tn(e,i),s=Ae.plateau,r=s.h,o=ht(7319119,{roughness:1}),a=v=>ht(v);n.cyl(5,25,s.x,r-1,s.z,a(11577242),11577242,"part",12);for(let v=4;v<24;v+=6){let R=new k(new It(5.15,5.15,.6,12),a(9405816));R.position.set(s.x,r+v,s.z),e.add(R)}n.cyl(6.5,2,s.x,r+24,s.z,a(13616822),13616822,"part",12);let c=new It(2.2,2,1,8),l=new Zt(2,2.4,8);for(let v=0;v<8;v++){let R=.9+v*.72,M=r+3+v*3,g=s.x+Math.cos(R)*12,A=s.z+Math.sin(R)*12,E=new xt,T=pt(new k(c,o)),b=pt(new k(l,a(10129296)));b.rotation.x=Math.PI,b.position.y=-1.7,E.add(T,b),E.position.set(g,M-.5,A),e.add(E),n.cyl(2.2,1,g,M-1,A,null,7319119)}n.cyl(2,.4,s.x,r+26,s.z,new St({color:15918793,roughness:.6}),16766826,"goal",16);let h=new k(new on(1.2,0),new St({color:9431295,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}));h.scale.y=1.6,h.position.set(s.x,r+30,s.z),e.add(h);let u=new Xe(8379647,30,30);u.position.copy(h.position),e.add(u);for(let v=0;v<10;v++){let R=v/10*Math.PI*2+.3,M=s.x+Math.cos(R)*19,g=s.z+Math.sin(R)*19,A=t(M,g),E=[7,3,5.5,1.5,8,2.5,6,4,7.5,2][v];if(n.cyl(1.3,E,M,A-.5,g,a(14209216),14209216,"part",8),E>5){let T=pt(new k(new It(1.7,1.7,.5,8),a(15130576)));T.position.set(M,A-.5+E+.25,g),e.add(T)}}let f=pt(new k(new It(1.2,1.2,8,8),a(14209216))),d=s.x-8,x=s.z+15;f.rotation.z=Math.PI/2,f.rotation.y=.6,f.position.set(d,t(d,x)+1,x),e.add(f);let y=Ae.plateau.x-9,m=Ae.plateau.z+22,p=t(y,m),w=a(13616822);n.box(1.6,7,1.6,y-4,p-.5,m,w,13616822),n.box(1.6,7,1.6,y+4,p-.5,m,w,13616822);let _=pt(new k(new ft(10.4,1.4,2),w));return _.position.set(y,p+7.2,m),e.add(_),{group:e,crystal:h,crystalBaseY:r+30}}function ME(i){let t=new xt,e=tn(t,i),n=Ae.cave,s=n.h,r=13,o=.6,a=ht(8221808,{side:le,transparent:!0,opacity:1}),c=pt(new k(new ie(r,22,12,Math.PI+o,Math.PI*2-o*2,0,Math.PI/2),a));c.scale.y=.8,c.position.set(n.x,s-.5,n.z),t.add(c);let l=ht(9273976);for(let M of[-1,1]){let g=M*(o+.05),A=pt(new k(new qn(2.6,0),l));A.position.set(n.x+Math.cos(g)*r,s+1.2,n.z+Math.sin(g)*r),A.scale.set(1,1.6,1),t.add(A)}for(let M=0;M<28;M++){let g=M/28*Math.PI*2,A=Math.atan2(Math.sin(g),Math.cos(g));Math.abs(A)<o||e.cyl(2.2,14,n.x+Math.cos(g)*(r+.5),s-1,n.z+Math.sin(g)*(r+.5),null,8221808,"wall")}let h=new St({color:10479871,emissive:4175584,emissiveIntensity:1.1,flatShading:!0}),u=new St({color:16759008,emissive:13656232,emissiveIntensity:.9,flatShading:!0}),f=new on(1,0);[[-7,-4],[-8,3],[-3,-8],[-2,8],[3,-9]].forEach(([M,g],A)=>{for(let E=0;E<4;E++){let T=new k(f,A%2?u:h),b=.5+Math.random()*.7;T.scale.set(b*.6,b*2,b*.6),T.position.set(n.x+M+(Math.random()-.5)*2,s+b,n.z+g+(Math.random()-.5)*2),T.rotation.set((Math.random()-.5)*.6,Math.random()*3,(Math.random()-.5)*.6),t.add(T)}e.cyl(1.4,3,n.x+M,s-.5,n.z+g,null,A%2?16759008:10479871,"part")});let x=new Xe(8379647,60,22);x.position.set(n.x-3,s+5,n.z),t.add(x);let y=new xt,m=ht(9067067),p=ht(16040539,{metalness:.6,roughness:.35}),w=pt(new k(new ft(2,1.1,1.3),m));w.position.y=.55;let _=pt(new k(new It(.65,.65,2,10,1,!1,0,Math.PI),m));_.rotation.z=Math.PI/2,_.position.y=1.1;let v=new k(new ft(2.05,.18,1.35),p);v.position.y=1;let R=new k(new ft(.3,.35,.1),p);return R.position.set(0,.95,.68),y.add(w,_,v,R),y.position.set(n.x-9,s,n.z),y.rotation.y=Math.PI/2,t.add(y),e.cyl(1.2,1.7,n.x-9,s,n.z,null,16040539,"chest"),{group:t,update(M,g){let E=g&&Math.hypot(g.x-n.x,g.z-n.z)<r+1?.18:1;a.opacity+=(E-a.opacity)*Math.min(1,M*6),a.depthWrite=a.opacity>.95}}}function vE(i){let e=new Map,n=(o,a)=>o*1e5+a;for(let o of i){let a=Math.floor(o.box.min.x/24),c=Math.floor(o.box.max.x/24),l=Math.floor(o.box.min.z/24),h=Math.floor(o.box.max.z/24);for(let u=a;u<=c;u++)for(let f=l;f<=h;f++){let d=n(u,f);e.has(d)||e.set(d,[]),e.get(d).push(o)}}let s=0,r=[];return(o,a)=>{s++,r.length=0;let c=Math.floor(o/24),l=Math.floor(a/24);for(let h=c-1;h<=c+1;h++)for(let u=l-1;u<=l+1;u++){let f=e.get(n(h,u));if(f)for(let d of f)d._stamp!==s&&(d._stamp=s,r.push(d))}return r.slice()}}var wE=120;function TE(i){let e=new Map;for(let d of i){let x=gs[Ph[d.region.id]];d.woodId=Ph[d.region.id],d.maxHp=Math.round(x.durability*.35),d.hp=d.maxHp,d.state="stand",d.t=0;let y=Math.floor(d.x/16)*1e5+Math.floor(d.z/16);e.has(y)||e.set(y,[]),e.get(y).push(d)}let n=new Set,s=new Me,r=new Me,o=new Me,a=new Me,c=new Me,l=new O,h=new Me().makeScale(0,0,0);function u(d){d.orig||(d.orig=d.parts.map(x=>{let y=new Me;return x.mesh.getMatrixAt(x.index,y),y}))}function f(d,x,y){c.makeTranslation(d.x,d.y,d.z),a.makeTranslation(-d.x,-d.y,-d.z),r.makeRotationAxis(l.set(d.axisX,0,d.axisZ),x),o.makeScale(y,y,y),d.parts.forEach((m,p)=>{s.copy(c).multiply(r).multiply(o).multiply(a).multiply(d.orig[p]),m.mesh.setMatrixAt(m.index,y<=0?h:s),m.mesh.instanceMatrix.needsUpdate=!0})}return{chop(d,x,{range:y,arc:m,damage:p}){let w=[],_=Math.sin(x),v=Math.cos(x),R=Math.floor(d.x/16),M=Math.floor(d.z/16);for(let g=R-1;g<=R+1;g++)for(let A=M-1;A<=M+1;A++)for(let E of e.get(g*1e5+A)??[]){if(E.state==="gone"||E.state==="fall"||E.state==="grow")continue;let T=E.x-d.x,b=E.z-d.z,P=Math.hypot(T,b);if(P>y+.8||Math.abs(E.y-d.y)>4||P>1.5&&Math.acos(Rn.clamp((T*_+b*v)/P,-1,1))>m/2)continue;u(E);let H=Math.max(1,Math.round(p*(.85+Math.random()*.3)));E.hp-=H;let S=Math.max(P,.001);E.axisX=b/S,E.axisZ=-T/S;let I=E.hp<=0;E.state=I?"fall":"shake",E.t=0,n.add(E),w.push({tree:E,pos:new O(E.x,E.y+2,E.z),damage:H,felled:I,woodId:E.woodId,amount:I?2+Math.floor(Math.random()*3):0})}return w},update(d){for(let x of n)if(x.t+=d,x.state==="shake"){let y=x.t/.3;f(x,Math.sin(x.t*45)*.06*Math.max(0,1-y),1),y>=1&&(f(x,0,1),x.state="stand",n.delete(x))}else if(x.state==="fall"){let y=Math.min(x.t/1.1,1);f(x,Math.PI/2*y*y,1-Math.max(0,y-.8)*5),y>=1&&(f(x,0,0),x.state="gone",x.t=0,x.savedBox=x.collider.box.clone(),x.collider.box.makeEmpty())}else if(x.state==="gone")x.t>=wE&&(x.state="grow",x.t=0);else if(x.state==="grow"){let y=Math.min(x.t/1.5,1);f(x,0,1-Math.pow(1-y,3)),y>=1&&(x.collider.box.copy(x.savedBox),x.hp=x.maxHp,x.state="stand",n.delete(x))}}}}function Pf(i,t,e={}){let n=!!e.lite,s=$r(2024);i.background=new j("#fde8d2"),i.fog=new Za("#e6eef2",300,n?1e3:1500);let r=gE();i.add(r);let o=xE(s);i.add(o),i.add(new rc(14478591,8032090,1));let a=new O(50,80,20),c=new ac(16773340,2.4);c.position.copy(a),c.castShadow=!0,c.shadow.mapSize.set(n?1024:2048,n?1024:2048),c.shadow.camera.left=-60,c.shadow.camera.right=60,c.shadow.camera.top=60,c.shadow.camera.bottom=-60,c.shadow.camera.far=250,c.shadow.bias=-5e-4,c.shadow.normalBias=.05,i.add(c),i.add(c.target);let l=jd(qi);l.maxR=On-30;let h=Jd([l]);i.add(h.group);let u=h.sample,f=(H,S)=>qi[l.regionIndexAt(H,S)],d=(H,S)=>u(H,S)>.3?f(H,S):null,x=Sf(h.heightTex);i.add(x.mesh);let y=Rf(u);i.add(y.group);let m=[],p=[],w=[],_=_E(m);i.add(_.group);let v=EE(m,u);i.add(v.group);let R=ME(m);i.add(R.group);let M=of(m,u);i.add(M.group),qi.forEach((H,S)=>{if(H.decorate){let N=H.decorate(m,u,$r(H.cx*7+H.cz*13+5));i.add(N.group),p.push(N.update)}let I=(N,z)=>l.weightOf(S,N,z),U=lf(H,m,u,h.slopeAt,$r(H.cx*3+H.cz*11+1),I,n?.35:1);i.add(U.group),w.push(...U.trees)});let g=Af(bf,m,u);i.add(g.group);let A=Kd(h.colorAt,u),E=TE(w),T=vE(m),b=new O(Ae.altar.x,Ae.altar.h+.8,Ae.altar.z),P=0;return{sun:c,spawnPoint:b,colliders:m,collidersNear:T,mapImage:A,bridges:g.bridges,waterLevel:Yn,groundHeight:u,slopeAt:h.slopeAt,islandAt:d,regionAt:f,chopTrees:E.chop,update(H,S,I){P+=H,I&&r.position.copy(I),o.rotation.y+=H*.004,x.update(P),S&&x.mesh.position.set(S.x,Yn,S.z),y.update(H,P),_.update(H,P),M.update(P),R.update(H,S);for(let U of p)U(H,P,S);E.update(H),v.crystal.rotation.y+=H*.8,v.crystal.position.y=v.crystalBaseY+Math.sin(P*1.5)*.4,S&&(c.target.position.copy(S),c.position.copy(S).add(a))}}}var wc={sword:[{anim:0,name:"\u7E26\u65AC\u308A",duration:.42,hitTime:.14,range:4.6,arc:1.7,power:1,knockback:1,lunge:7,hop:0,shake:.18,hitStop:.05},{anim:1,name:"\u6A2A\u8599\u304E",duration:.46,hitTime:.17,range:5,arc:3,power:1.1,knockback:1.4,lunge:9,hop:0,shake:.25,hitStop:.06},{anim:2,name:"\u56DE\u8EE2\u65AC\u308A",duration:.62,hitTime:.3,range:5.6,arc:Math.PI*2,power:1.7,knockback:2.2,lunge:4,hop:16,shake:.6,hitStop:.1}],fists:[{anim:3,name:"\u30B8\u30E3\u30D6",duration:.28,hitTime:.08,range:3.2,arc:1.4,power:.45,knockback:.6,lunge:5,hop:0,shake:.08,hitStop:.03},{anim:4,name:"\u30B9\u30C8\u30EC\u30FC\u30C8",duration:.38,hitTime:.12,range:3.6,arc:1.4,power:.7,knockback:1.2,lunge:8,hop:0,shake:.15,hitStop:.05},{anim:14,name:"\u30A2\u30C3\u30D1\u30FC",duration:.46,hitTime:.15,range:3.6,arc:1.6,power:1,knockback:1.6,lunge:6,hop:10,shake:.25,hitStop:.07}],blood:[{anim:10,name:"\u9006\u8888\u88DF",duration:.34,hitTime:.1,range:4.9,arc:2,power:1,knockback:.8,lunge:8,hop:0,shake:.2,hitStop:.05},{anim:11,name:"\u8888\u88DF\u65AC\u308A",duration:.36,hitTime:.11,range:4.9,arc:2,power:1.1,knockback:1,lunge:8,hop:0,shake:.24,hitStop:.05},{anim:12,name:"\u8840\u9583\u7A81\u304D",duration:.42,hitTime:.13,range:7.5,arc:.7,power:1.5,knockback:1.8,lunge:18,hop:0,shake:.3,hitStop:.07},{anim:13,name:"\u8840\u65CB",duration:.72,hitTime:.22,hitTimes:[.22,.44],range:6.2,arc:Math.PI*2,power:1.3,knockback:2.4,lunge:4,hop:12,shake:.55,hitStop:.09}]},n1=wc.sword,If={0:.42,1:.46,2:.62,3:.28,4:.38,5:.9,6:.45,7:.95,8:.6,9:.9,10:.34,11:.36,12:.42,13:.72,14:.46},Lf=.45;var Ih=(i,t={})=>new St({color:i,metalness:.3,roughness:.32,flatShading:!0,...t}),Tc=(i,t,e=1.2,n={})=>new St({color:i,emissive:t,emissiveIntensity:e,flatShading:!0,...n});function Lh(i,t){let e=new Us;i.forEach(([s,r],o)=>o?e.lineTo(s,r):e.moveTo(s,r)),e.closePath();let n=new nr(e,{depth:t,bevelEnabled:!0,bevelThickness:t*.35,bevelSize:.02,bevelSegments:1});return n.translate(0,0,-t/2),n.rotateY(-Math.PI/2),n}function bE(i=2757656,t=.5){let e=new k(new It(.075,.085,t,8),new St({color:i,roughness:.8}));return e.rotation.x=Math.PI/2,e.position.z=-.02,e}function SE(){let i=new xt,t=[[.3,-.17],[1.4,-.22],[2.05,-.15],[2.65,0]];for(let u=5;u>=0;u--){let f=.5+u*.3;t.push([f+.2,.17+(u>3?-.02:0)],[f+.1,.27],[f,.18])}t.push([.3,.17]);let e=new k(Lh(t,.07),Ih(2761776,{roughness:.3})),n=new k(Lh([[.4,-.06],[1.6,-.08],[2.35,0],[1.6,.08],[.4,.06]],.1),Tc(16719920,14684192,1.6)),s=Tc(16738938,16719936,1.8);for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new k(new ft(.02,u%2?.1:.06,.06),s);d.position.set(f*.055,u%2?.12:-.13,.7+u*.35),d.rotation.x=u*.7,i.add(d)}let r=Ih(2363416);for(let u of[-1,1]){let f=[[0,0],[.1,u*.25],[.02,u*.5],[.16,u*.42],[.12,u*.66],[.26,u*.3],[.18,0]],d=new k(Lh(f,.05),r);d.position.z=.2,i.add(d)}let o=new k(new ie(.08,10,8),Tc(16765136,16719920,1.2));o.scale.set(.6,1,.6),o.position.set(0,0,.26);let a=new k(new ft(.1,.1,.02),new ve({color:1703941}));a.scale.set(1,.25,1),a.position.set(0,0,.27),a.rotation.y=Math.PI/2;let c=new k(new Zt(.08,.2,6),r);c.rotation.x=-Math.PI/2,c.position.z=-.36;let l=Ih(4864580);for(let u=0;u<3;u++){let f=new k(new Kn(.035,.012,4,8),l);f.position.set(0,-.06-u*.06,-.44),f.rotation.y=u%2?Math.PI/2:0,i.add(f)}let h=new k(new on(.06,0),Tc(16722490,12582936,1.5));return h.position.set(0,-.25,-.44),i.add(e,n,o,a,bE(1707026,.5),c,h),{group:i,pulse:[n.material,o.material,s,h.material]}}var Hf={sangrea:SE};function Df(i){let t=Hf[i]();return t.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t.base=t.pulse.map(e=>e.emissiveIntensity),t}var Uf=Object.keys(Hf);var RE={skin:16769223,hair:3882874,tunic:2864544,scarf:15764028,pants:4869737,boots:8015414,belt:7030320},$n=(i,t={})=>new St({color:i,roughness:.6,...t});function hi(i){return i.castShadow=!0,i.receiveShadow=!0,i}function qo(i,t,e,n=0){let s=t*i,r=e*i,o=Math.sqrt(Math.max(0,i*i-s*s-r*r))+n;return new O(s,r,o)}function zf(i=RE){let t=new xt,e=new xt;t.add(e);let n=(F,st,mt,Lt,Et,ge,ye)=>{let Le=new xt;Le.position.set(F,st,0);let Pe=hi(new k(new ic(Lt,mt,4,10),$n(Et)));Pe.position.y=-mt/2-Lt*.5,Le.add(Pe);let he=hi(new k(new ie(Lt*ye,12,10),$n(ge)));return he.position.y=-mt-Lt*.7,Le.add(he),e.add(Le),{pivot:Le,end:he}},s=n(-.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot,r=n(.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot;for(let F of[s,r])F.children[1].scale.set(1,.8,1.35);let o=new xt;o.position.y=1.4;let a=hi(new k(new It(.72,1,1.7,16),$n(i.tunic)));a.position.y=.85;let c=hi(new k(new Kn(.86,.1,6,20),$n(i.belt)));c.rotation.x=Math.PI/2,c.position.y=.55;let l=new k(new ft(.26,.22,.08),$n(16040539,{metalness:.6,roughness:.3}));l.position.set(0,.55,.93),o.add(a,c,l),e.add(o);let h=n(-.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot,u=n(.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot;h.rotation.z=-.12,u.rotation.z=.12;let f=new xt;f.position.y=-.95,f.rotation.x=.35;let d=$n(15134453,{metalness:.7,roughness:.25}),x=hi(new k(new ft(.09,.3,1.6),d));x.position.z=1.05;let y=hi(new k(new Zt(.12,.3,4),d));y.rotation.x=Math.PI/2,y.scale.x=.5,y.position.z=1.95;let m=hi(new k(new ft(.2,.62,.12),$n(16040539,{metalness:.6,roughness:.3})));m.position.z=.28;let p=new k(new It(.08,.08,.45,8),$n(7030320));p.rotation.x=Math.PI/2;let w=new xt;w.add(x,y,m,p),f.add(w),u.add(f);let _={},v=null,R=new xt;R.position.set(0,-1.32,.18),R.scale.setScalar(1.6);let M=new k(new ie(.22,12,10),$n(14677247,{transparent:!0,opacity:.55,roughness:.1})),g=new k(new ie(.17,12,10),new St({color:16734830,emissive:13639744,emissiveIntensity:.6})),A=new k(new It(.07,.09,.22,8),$n(14677247,{transparent:!0,opacity:.55}));A.position.y=.26;let E=new k(new It(.08,.07,.1,8),$n(11565653));E.position.y=.4,R.add(g,M,A,E),R.visible=!1,u.add(R);let T=new k(new Ri(1.4,3.9,24,1,-.4,3),new ve({color:15269883,transparent:!0,opacity:0,side:le,depthWrite:!1,blending:Xn}));T.position.set(.9,2.9,0),T.rotation.y=-Math.PI/2,T.visible=!1,e.add(T);let b=new k(new Ri(1.4,4.4,32,1,-2.35,3.4),T.material.clone());b.rotation.x=-Math.PI/2,b.position.y=2.8,b.visible=!1,e.add(b);let P=new k(new Ri(1.6,5.2,48),T.material.clone());P.material.color.set(16774344),P.rotation.x=-Math.PI/2,P.position.y=2.4,P.visible=!1,t.add(P);let H=new xt;H.position.set(0,2.9,0);let S=new k(new Ri(1.4,4.2,28,1,-.5,3.1),T.material.clone());S.rotation.y=-Math.PI/2,H.add(S),H.visible=!1,e.add(H);let I=new k(new Zt(.5,1,10,1,!0).rotateX(-Math.PI/2).translate(0,0,.5),T.material.clone());I.position.set(.7,2.8,.6),I.visible=!1,e.add(I);let U=hi(new k(new Kn(.62,.22,8,20),$n(i.scarf)));U.rotation.x=Math.PI/2,U.position.y=3.1,e.add(U);let N=new xt;N.position.set(.35,3.05,-.55);let z=hi(new k(new ft(.4,1.2,.12),$n(i.scarf)));z.position.y=-.55,N.add(z),e.add(N);let B=1.05,G=new xt;G.position.y=4.05;let X=hi(new k(new ie(B,28,20),$n(i.skin,{roughness:.75,emissive:5913130,emissiveIntensity:.35})));G.add(X);let nt=$n(i.hair,{roughness:.5,flatShading:!0}),q=hi(new k(new ie(B*1.08,20,14,0,Math.PI*2,0,Math.PI*.52),nt));q.rotation.x=-.35,G.add(q);for(let F=-2;F<=2;F++){let st=hi(new k(new Zt(.2,.55,4),nt)),mt=qo(B,F*.22,.55,.02);st.position.copy(mt),st.rotation.set(Math.PI+.5,0,F*.15),G.add(st)}let K=hi(new k(new Zt(.14,.7,5),nt));K.position.set(.1,B*1.1,.1),K.rotation.set(.3,0,-.5),G.add(K);let ut=new St({color:1907507,roughness:.3}),Tt=new ve({color:16777215}),yt=[];for(let F of[-1,1]){let st=new k(new ie(.15,12,10),ut);st.scale.set(.9,1.35,.45),st.position.copy(qo(B,F*.34,-.02,-.03)),st.lookAt(st.position.clone().multiplyScalar(2)),G.add(st),yt.push(st);let mt=new k(new ie(.05,8,6),Tt);mt.position.copy(qo(B,F*.34+.05,.07,.03)),G.add(mt)}let Bt=new ve({color:16751266,transparent:!0,opacity:.6});for(let F of[-1,1]){let st=new k(new $e(.13,16),Bt);st.scale.x=1.4;let mt=qo(B,F*.55,-.25,.01);st.position.copy(mt),st.lookAt(mt.clone().multiplyScalar(2)),G.add(st)}let qt=new k(new Kn(.1,.025,6,12,Math.PI),new ve({color:5909805}));qt.position.copy(qo(B,0,-.3,.005)),qt.rotation.z=Math.PI,qt.rotation.x=-.3,G.add(qt),e.add(G);let bt=Math.random()*10,Ot=-1,V=0,at=0,Q=0,lt=0,et=2+Math.random()*3,Pt=-1,gt=0,D=1,L="fists",Z=1,rt=0,ot=!1,it=0,Dt=!0,vt=-1,Rt=-1,Gt=0,$t=0,ct=0,te=-1,kt={yaw:0,pitch:0,targetYaw:0,targetPitch:0,timer:2},Jt=12,Ft=!0,Ct=0,Kt=[];e.traverse(F=>{F.isMesh&&F.material.isMeshStandardMaterial&&!Kt.includes(F.material)&&Kt.push(F.material)});let Ee=Kt.map(F=>({color:F.emissive.getHex(),intensity:F.emissiveIntensity})),tt=Rn.lerp,Yt=(F,st,mt,Lt)=>F+(st-F)*Math.min(1,Lt*mt);function _t(F,st){let mt=st.speed??0,Lt=st.grounded??!0;bt+=F,at=Yt(at,Lt?mt:0,10,F),Q=Yt(Q,Lt?0:1,12,F),lt=Yt(lt,st.run&&Lt?1:0,8,F),V+=F*10*Math.max(at,.2)*(1+.55*lt);let Et=(1-at)*(1-Q);h.rotation.y=0,u.rotation.y=0,f.rotation.x=.35;let ge=0;Lt&&!Dt&&(vt=0),!Lt&&Dt&&(Rt=0),Dt=Lt;let ye=t.rotation.y-Gt;ye=Math.atan2(Math.sin(ye),Math.cos(ye)),Gt=t.rotation.y,$t=Yt($t,Rn.clamp(-(ye/Math.max(F,.001))*.04,-.22,.22)*at,8,F);let Le=Pt>=0||Ot>=0||ot;Et>.9&&!Le?ct+=F:(ct=0,te=-1),te<0&&ct>7&&(te=0);let Pe=Math.sin(bt*2.2),he=(Math.sin(bt*1.3)*.7+Math.sin(bt*.47+1)*.3)*Et,sn=Math.sin(bt*.8+.5)*Et,Bn=Math.sin(V)*.8*at*(1+.45*lt),Gs=Math.abs(Math.sin(V))*.14*at*(1+.6*lt);if(h.rotation.x=Bn+he*.06+Pe*.03*Et,u.rotation.x=-Bn+he*.06-Pe*.03*Et,h.rotation.z=-.12-Pe*.035*Et-at*.05,u.rotation.z=.12+Pe*.035*Et+at*.05,s.rotation.x=-Bn+he*.03,r.rotation.x=Bn+he*.03,s.rotation.z=sn*.025,r.rotation.z=sn*.025,o.position.y=1.4+Gs+Pe*.025*Et,o.scale.set(1+Pe*.012*Et,1,1+Pe*.018*Et),o.rotation.y=-Math.sin(V)*.14*at,kt.timer-=F,kt.timer<=0){let Ut=Math.random()<.6;kt.targetYaw=Ut?(Math.random()-.5)*1.1:0,kt.targetPitch=Ut?(Math.random()-.4)*.25:0,kt.timer=1.5+Math.random()*3}kt.yaw=Yt(kt.yaw,kt.targetYaw*Et,5,F),kt.pitch=Yt(kt.pitch,kt.targetPitch*Et,5,F),G.position.y=4.05+Gs*1.1+Pe*.04*Et,G.rotation.y=kt.yaw,G.rotation.x=kt.pitch+Math.sin(V*2)*.04*at-he*.03,G.rotation.z=Math.sin(V)*.05*at+sn*.03,U.position.y=3.1+Gs,N.position.y=3.05+Gs,lt>.01&&(h.rotation.x-=.35*lt,u.rotation.x-=.35*lt,h.rotation.z-=.12*lt,u.rotation.z+=.12*lt),N.rotation.x=-.2-at*.9-lt*.5-Q*.6+Math.sin(bt*6)*.08*(.3+at)+he*.05,N.rotation.z=Math.sin(bt*2.3)*.08*(.4+at);let ln=he*.035+at*.12+lt*.18,Ms=sn*.025+Math.sin(V)*.045*at+$t,kn=1,ui=Et+at*.5;if(L==="fists"){let Ut=Math.abs(Math.sin(bt*5.5))*Et;h.rotation.x=tt(h.rotation.x,-1.15+Math.sin(bt*5.5)*.06,ui),h.rotation.z=tt(h.rotation.z,.42,ui),u.rotation.x=tt(u.rotation.x,-.95-Math.sin(bt*5.5+1)*.06,ui),u.rotation.z=tt(u.rotation.z,-.42,ui),kn-=Ut*.035,ln+=.05*Et,o.rotation.y=tt(o.rotation.y,.18,Et),G.rotation.x+=.08*Et}else L==="sword"?(u.rotation.x=tt(u.rotation.x,-.25+Math.max(0,Math.sin(bt*.7))*.2,Et),f.rotation.x=.35+.3*Et):L==="blood"&&(u.rotation.x=tt(u.rotation.x,-.55+Math.sin(bt*1.1)*.05,ui),u.rotation.z=tt(u.rotation.z,.35,ui),f.rotation.x=.35+.55*ui,h.rotation.x=tt(h.rotation.x,-.35,Et),h.rotation.z=tt(h.rotation.z,-.55,Et),ln+=.1*Et,Ms+=.05*Et,G.rotation.x+=.14*Et,kt.yaw*=.4,G.rotation.y=kt.yaw,s.rotation.x-=.15*Et,r.rotation.x+=.2*Et);if(te>=0){te+=F;let Ut=Math.min(te/2.4,1),xe=Math.sin(Math.min(Ut*3,1)*Math.PI/2)*(Ut>.7?(1-Ut)/.3:1);h.rotation.z=tt(h.rotation.z,-2.7,xe),u.rotation.z=tt(u.rotation.z,2.7,xe),h.rotation.x=tt(h.rotation.x,-.3,xe),u.rotation.x=tt(u.rotation.x,-.3,xe),ln-=.12*xe,G.rotation.x-=.25*xe,kn+=.04*xe,yt.forEach(me=>{me.scale.y=tt(1.35,.2,xe)}),Ut>=1&&(te=-1,ct=-6-Math.random()*6)}if(vt>=0){vt+=F;let Ut=vt/.25;kn-=Math.sin(Math.min(Ut,1)*Math.PI)*.16,s.rotation.x-=Math.sin(Math.min(Ut,1)*Math.PI)*.3,r.rotation.x-=Math.sin(Math.min(Ut,1)*Math.PI)*.3,Ut>=1&&(vt=-1)}if(Rt>=0){Rt+=F;let Ut=Rt/.2;kn+=Math.sin(Math.min(Ut,1)*Math.PI)*.1,Ut>=1&&(Rt=-1)}if(Q>.01&&(h.rotation.z=tt(h.rotation.z,-1.1,Q),u.rotation.z=tt(u.rotation.z,1.1,Q),h.rotation.x=tt(h.rotation.x,-.3,Q),u.rotation.x=tt(u.rotation.x,-.3,Q),s.rotation.x=tt(s.rotation.x,-.7,Q),r.rotation.x=tt(r.rotation.x,.2,Q)),et-=F,te<0){let Ut=et<.12;for(let xe of yt)xe.scale.y=Ut?.15:1.35}if(et<0&&(et=2+Math.random()*3),T.visible=b.visible=P.visible=H.visible=I.visible=!1,Pt>=0){Pt+=F*D;let Ut=Pt,xe=If[gt],me=C=>1-Math.pow(1-Math.min(Math.max(C,0),1),3),Ht=(C,W)=>Math.min(Math.max((Ut-C)/(W-C),0),1),Ui=Ht(xe-.18,xe);if(gt===0){let C;Ut<.1?C=tt(u.rotation.x,-2.8,me(Ut/.1)):Ut<.22?C=tt(-2.8,-.15,me(Ht(.1,.22))):C=tt(-.15,u.rotation.x,Ui),u.rotation.x=C,u.rotation.z=.25,h.rotation.x=tt(h.rotation.x,.5,1-Ui),o.rotation.y=Ut<.1?-.25*(Ut/.1):tt(-.25,.2,Ht(.1,.22))*(1-Ui),ln+=Ut<.1?-.05:.12*(1-Ht(.1,.4)),T.visible=Ut>.1&&Ut<.36,T.material.opacity=Ut<.22?.75:.75*(1-Ht(.22,.36))}else if(gt===1){let C=me(Ht(0,.1))*(1-Ui),W=me(Ht(.1,.26));u.rotation.z=tt(u.rotation.z,1.45,C),u.rotation.x=0,u.rotation.y=tt(0,tt(.9,-2.3,W),C),f.rotation.x=tt(.35,1.25,C),h.rotation.z=tt(h.rotation.z,-.9,C),h.rotation.y=tt(0,tt(.6,-.4,W),C),o.rotation.y=tt(.4,-.45,W)*C,Ms+=tt(.08,-.1,W)*C,ln+=.08*C,G.rotation.y=tt(.3,-.3,W)*C,b.visible=Ut>.1&&Ut<.4,b.material.opacity=Ut<.26?.7:.7*(1-Ht(.26,.4))}else if(gt===2){let C=me(Ht(0,.12)),W=Ht(.12,.42),Y=C*(1-Ui);u.rotation.z=tt(u.rotation.z,1.5,Y),u.rotation.x=0,u.rotation.y=tt(0,.7,Y)*(1-W*.6),f.rotation.x=tt(.35,1.3,Y),h.rotation.z=tt(h.rotation.z,-1.3,Y),s.rotation.x-=.5*C*(1-W),r.rotation.x+=.3*C*(1-W),kn-=.12*C*(1-Ht(.12,.2)),ge=-Math.PI*2*(1-Math.pow(1-W,2)),G.rotation.y=0,P.visible=Ut>.16&&Ut<.5,P.material.opacity=.75*(1-Ht(.3,.5)),P.scale.setScalar(.8+Ht(.16,.5)*.35)}else if(gt===3){let C=me(Ht(0,.07))*(1-Ht(.14,xe));h.rotation.x=tt(h.rotation.x,-1.55,C),h.rotation.z=tt(h.rotation.z,.15,C),u.rotation.x=tt(u.rotation.x,-.9,.7),u.rotation.z=tt(u.rotation.z,-.35,.7),o.rotation.y=.25*C,ln+=.06*C}else if(gt===4){let C=me(Ht(0,.05))*(1-Ht(.05,.12)),W=me(Ht(.05,.12))*(1-Ht(.2,xe));u.rotation.x=tt(tt(u.rotation.x,-.4,C),-1.6,W),u.rotation.z=tt(u.rotation.z,-.1,W),h.rotation.x=tt(h.rotation.x,-.9,.7),h.rotation.z=tt(h.rotation.z,.35,.7),o.rotation.y=tt(.2*C,-.35,W),ln+=.12*W-.04*C}else if(gt===5){let C=me(Ht(0,.2))*(1-Ht(.72,xe)),W=Ht(.25,.65);u.rotation.x=tt(u.rotation.x,-2.25,C),u.rotation.z=tt(u.rotation.z,-.45,C),G.rotation.x=tt(G.rotation.x,-.35-Math.sin(W*Math.PI*4)*.05,C),G.rotation.y=0,ln-=.06*C,Ut>.72&&yt.forEach(Y=>{Y.scale.y=.2})}else if(gt===6){let C=me(Ht(0,.06))*(1-Ht(xe-.12,xe)),W=me(Ht(.16,.26));u.rotation.z=tt(u.rotation.z,1.45,C),u.rotation.x=0,u.rotation.y=tt(0,tt(1.3,-2.2,W),C),f.rotation.x=tt(.35,1.25,C),h.rotation.x=tt(h.rotation.x,.9,C),s.rotation.x=tt(s.rotation.x,-.9,C),r.rotation.x=tt(r.rotation.x,.7,C),o.rotation.y=tt(.3,-.4,W)*C,ln+=.38*C,b.visible=Ut>.16&&Ut<.36,b.material.opacity=.8*(1-Ht(.26,.36))}else if(gt===7){let C=me(Ht(0,.12))*(1-Ht(.12,.2)),W=me(Ht(.1,.3))*(1-Ht(.55,.64)),Y=me(Ht(.55,.64))*(1-Ht(.8,xe));kn-=.16*C+.1*Y,u.rotation.x=tt(tt(u.rotation.x,-2.95,W),-.35,Y),u.rotation.z=tt(u.rotation.z,-.15,Math.max(W,Y)),h.rotation.x=tt(tt(h.rotation.x,-2.7,W),-.5,Y),h.rotation.z=tt(h.rotation.z,.35,Math.max(W,Y)),s.rotation.x-=.6*Y,r.rotation.x+=.3*Y,ln+=-.18*W+.4*Y,T.visible=Ut>.55&&Ut<.75,T.material.opacity=.85*(1-Ht(.64,.75))}else if(gt===8){let C=me(Ht(0,.1))*(1-Ht(.1,.15)),W=me(Ht(.1,.16))*(1-Ht(.42,xe));u.rotation.x=tt(tt(u.rotation.x,-2.2,C),-.45,W),u.rotation.z=tt(u.rotation.z,.1,Math.max(C,W)),f.rotation.x=tt(.35,1.9,W),h.rotation.x=tt(h.rotation.x,.6,W),h.rotation.z=tt(h.rotation.z,-.6,W),kn-=.12*W,s.rotation.x-=.5*W,ln+=.3*W}else if(gt===9){let C=me(Ht(0,.2))*(1-Ht(.55,.68)),W=Ht(.3,.45),Y=me(Ht(.55,.68))*(1-Ht(.78,xe));u.rotation.x=tt(tt(u.rotation.x,-1.75,C),-.3,Y),u.rotation.z=tt(tt(u.rotation.z,-.55,C),1.1,Y),f.rotation.x=tt(.35,-.95,C),h.rotation.x=tt(tt(h.rotation.x,-1.65+W*.35,C),-.3,Y),h.rotation.z=tt(tt(h.rotation.z,.55,C),-1.1,Y),G.rotation.x+=.18*C-.25*Y,ln+=-.12*Y,Ut>.3&&Ut<.6&&yt.forEach($=>{$.scale.y=.2})}else if(gt===10||gt===11){let C=gt===10,W=me(Ht(0,.06))*(1-Ht(.06,.1)),Y=me(Ht(.06,.16)),$=1-Ui,J=C?-.2:-2.7,At=C?-2.6:-.3,Nt=C?-.7:.9,Xt=C?.9:-.7;u.rotation.x=tt(u.rotation.x,tt(J,At,Y),$),u.rotation.z=tt(u.rotation.z,tt(Nt,Xt,Y),$),f.rotation.x=tt(.35,.8,$),h.rotation.x=tt(h.rotation.x,.5,$),o.rotation.y=tt(C?.3:-.2,C?-.35:.35,Y)*$,ln+=(.12*Y-.05*W)*$,H.rotation.z=C?-.75:.75,H.visible=Ut>.06&&Ut<.26,S.material.opacity=.85*(1-Ht(.16,.26))}else if(gt===12){let C=me(Ht(0,.08))*(1-Ht(.08,.12)),W=me(Ht(.08,.14))*(1-Ui);u.rotation.x=tt(tt(u.rotation.x,-.9,C),-1.55,W),u.rotation.z=tt(u.rotation.z,.05,Math.max(C,W)),u.rotation.y=.35*C,f.rotation.x=tt(.35,-.02,W),h.rotation.x=tt(h.rotation.x,.8,W),s.rotation.x-=.7*W,r.rotation.x+=.5*W,o.rotation.y=tt(.35*C,-.4,W),ln+=.3*W-.08*C,I.visible=Ut>.08&&Ut<.3,I.scale.set(1,1,1+Ht(.08,.16)*7),I.material.opacity=.8*(1-Ht(.16,.3))}else if(gt===13){let C=me(Ht(0,.08))*(1-Ui),W=Ht(.08,.55);u.rotation.z=tt(u.rotation.z,1.5,C),u.rotation.x=0,u.rotation.y=.5*C,f.rotation.x=tt(.35,1.3,C),h.rotation.z=tt(h.rotation.z,-1.2,C),ge=-Math.PI*4*(1-Math.pow(1-W,2)),kn-=.1*me(Ht(0,.08))*(1-Ht(.08,.14)),P.visible=Ut>.1&&Ut<.62,P.material.opacity=.8*(1-Ht(.45,.62)),P.scale.setScalar(1+Ht(.1,.6)*.3)}else if(gt===14){let C=me(Ht(0,.08))*(1-Ht(.08,.14)),W=me(Ht(.08,.18))*(1-Ht(.3,xe));u.rotation.x=tt(tt(u.rotation.x,.3,C),-2.7,W),u.rotation.z=tt(u.rotation.z,-.2,Math.max(C,W)),h.rotation.x=tt(h.rotation.x,-.9,.7),h.rotation.z=tt(h.rotation.z,.4,.7),kn-=.14*C-.06*W,ln+=-.1*W+.1*C,o.rotation.y=tt(.3*C,-.3,W)}Ut>=xe&&(Pt=-1,o.rotation.y=0)}if(rt=Math.max(0,rt-F),rt>0&&(ln-=.25*(rt/.25)),Kt.forEach((Ut,xe)=>{rt>0?(Ut.emissive.setHex(16724016),Ut.emissiveIntensity=.9*(rt/.25)):(Ut.emissive.setHex(Ee[xe].color),Ut.emissiveIntensity=Ee[xe].intensity)}),it=Yt(it,ot?1:0,6,F),ot&&yt.forEach(Ut=>{Ut.scale.y=.15}),e.rotation.x=tt(ln,-1.45,it),e.rotation.y=ge,e.rotation.z=Ms*(1-it),e.scale.set(1+(1-kn)*.5,kn,1+(1-kn)*.5),Ot>=0){Ot+=F;let xe=Math.min(Ot/2.2,1),me=Math.sin(Math.min(xe*4,1)*Math.PI/2)*(xe>.85?(1-xe)/.15:1);u.rotation.z=.12+me*2.5,u.rotation.x=-me*.2+Math.sin(Ot*12)*.35*me,G.rotation.z+=me*.08,(xe>=1||at>.3||Q>.3)&&(Ot=-1)}}return{object:t,setStance(F){L=F},setGlow(F){Z=F},bladeTip(F){return f.visible?(f.updateWorldMatrix(!0,!1),f.localToWorld(F.set(0,0,v?2.6:1.9))):null},setHeld(F){let st=Uf.includes(F);st&&!_[F]&&(_[F]=Df(F),f.add(_[F].group));for(let[mt,Lt]of Object.entries(_))Lt.group.visible=mt===F;v=st?_[F]:null,w.visible=F==="sword",f.visible=F==="sword"||st,R.visible=F==="potion"},setTrailColor(F=15269883){T.material.color.setHex(F),b.material.color.setHex(F),P.material.color.setHex(F===15269883?16774344:F),S.material.color.setHex(F),I.material.color.setHex(F)},drink(){return ot?!1:(Pt=0,gt=5,D=1,Ot=-1,te=-1,!0)},wave(){Ot<0&&Pt<0&&(Ot=0)},attack(F=0,st=1){return ot?!1:(Pt=0,gt=F,D=st,Ot=-1,te=-1,!0)},get attacking(){return Pt>=0},hurt(){rt=.25},setFainted(F){ot=F,F?Pt=-1:it=0},get stepped(){return Ft},set stepped(F){Ft=F},update(F,st={}){if(v){let Lt=.75+.35*(.5+.5*Math.sin(bt*3.2+Ct*3.2));v.pulse.forEach((Et,ge)=>{Et.emissiveIntensity=v.base[ge]*Lt*Z})}if(Ct+=F,Ft&&Ct<1/Jt)return;let mt=Math.min(Ct,.2);Ct=0,_t(mt,st)}}}var AE=14,CE=1.7,PE=38,IE=120,LE=1.1,Yi=.85,Nf=5,HE=-40,DE=1.15,UE=3,zE=.55,bc=1310,Hi=.001;function Of(i,t){let e=i.object,n=e.position,s=new O,r=new dt,o=!0,a=0,c=0,l=null,h=!1,u=[],f=new O,d=new O,x=_=>({x:Rn.clamp(_.x,n.x-Yi,n.x+Yi),z:Rn.clamp(_.z,n.z-Yi,n.z+Yi)}),y=_=>{let v=_.box;f.set(n.x-Yi,n.y,n.z-Yi),d.set(n.x+Yi,n.y+Nf,n.z+Yi);let R=f.x<v.max.x-Hi&&d.x>v.min.x+Hi&&f.y<v.max.y-Hi&&d.y>v.min.y+Hi&&f.z<v.max.z-Hi&&d.z>v.min.z+Hi;if(!R||!_.cyl)return R;let M=x(_.cyl);return Math.hypot(M.x-_.cyl.x,M.z-_.cyl.z)<_.cyl.r-Hi};function m(_){let v=x(_),R=v.x-_.x,M=v.z-_.z,g=Math.hypot(R,M);g<1e-6&&(R=n.x-_.x,M=n.z-_.z,g=Math.hypot(R,M)||1,Math.hypot(R,M)<1e-6&&(R=1));let A=_.r-g+Hi*2;n.x+=R/g*A,n.z+=M/g*A}function p(_,v){if(v===0)return;n[_]+=v;let R=t.groundHeight(n.x,n.z),M=n.y+(o||h?Math.abs(v)*DE+.02:0);if(R>M){n[_]-=v;return}for(let g of u){let A=g.box;if(!y(g))continue;let E=A.max.y-n.y;if(o&&E>0&&E<=LE){let T=n.y;if(n.y=A.max.y,!u.some(b=>b!==g&&y(b)))continue;n.y=T}g.cyl?m(g.cyl):n[_]=v>0?A.min[_]-Yi-Hi:A.max[_]+Yi+Hi}}function w(_){let v=o;n.y+=_;let R=_<=0;o=!1,h=!1,l=null;for(let A of u)y(A)&&(R?(n.y=Math.max(n.y,A.box.max.y),o=!0,l=A.kind):n.y=A.box.min.y-Nf-Hi,s.y=0);let M=t.groundHeight(n.x,n.z);if((n.y<=M||!o&&v&&R&&n.y-M<.7)&&(n.y=M,s.y=0,o=!0,l="ground"),!o&&v&&R){let A=n.y;n.y-=.7;let E=-1/0,T=null;for(let b of u)b.box.max.y<=A+.01&&b.box.max.y>E&&y(b)&&(E=b.box.max.y,T=b.kind);n.y=A,T&&(n.y=E,s.y=0,o=!0,l=T)}let g=t.waterLevel-UE;if(!o&&n.y<g&&M<g&&(n.y=g,s.y<0&&(s.y=0),o=!0,h=!0,l="water"),!o&&s.y<=0){n.y-=.05;let A=u.find(E=>y(E));n.y+=.05,A&&(o=!0,l=A.kind)}}return{get grounded(){return o},get groundKind(){return l},get facing(){return a},get position(){return n},get swimming(){return h},respawn(_=0){n.copy(t.spawnPoint),s.set(0,0,0),r.set(0,0),a=_,e.rotation.y=_,o=!0},setFacing(_){a=_,e.rotation.y=_},knockback(_,v,R=0){r.set(_,v),R>0&&(s.y=R,o=!1)},update(_,v){u=t.collidersNear(n.x,n.z);let R=Math.min(1,Math.hypot(v.x,v.z));c=R;let M=!!v.run&&R>.1&&!h,g=AE*(h?zE:M?CE:1);if(s.x=v.x*g+r.x,s.z=v.z*g+r.y,r.multiplyScalar(Math.exp(-_*5)),v.jump&&o&&(s.y=PE*(h?.55:1),o=!1),s.y-=IE*_,p("x",s.x*_),p("z",s.z*_),w(s.y*_),n.x=Rn.clamp(n.x,-bc,bc),n.z=Rn.clamp(n.z,-bc,bc),R>.05&&!v.lockFacing){let E=Math.atan2(v.x,v.z)-a;E=Math.atan2(Math.sin(E),Math.cos(E)),a+=E*Math.min(1,_*14)}e.rotation.y=a,n.y<HE&&this.respawn(a),i.update(_,{speed:c,grounded:o,swimming:h,run:M})}}}function Ff(i,{joystickEl:t,jumpBtnEl:e,attackBtnEl:n,skillBtnsEl:s,onKey:r}){let o=new Set,a={dx:0,dy:0},c=0,l=!1,h=!1,u=!1,f=-1,d={x:0,y:0,id:null};window.addEventListener("keydown",M=>{if(l&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(M.code)&&M.preventDefault(),o.add(M.code),!M.repeat)){(M.code==="KeyF"||M.code==="KeyJ")&&(u=!0);let g={KeyQ:0,KeyE:1,KeyR:2};M.code in g&&(f=g[M.code]),r?.(M.code)}}),window.addEventListener("keyup",M=>o.delete(M.code)),window.addEventListener("blur",()=>o.clear());let x=new Map;i.addEventListener("contextmenu",M=>M.preventDefault()),i.addEventListener("pointerdown",M=>{l&&(i.setPointerCapture(M.pointerId),x.set(M.pointerId,{x:M.clientX,y:M.clientY,sx:M.clientX,sy:M.clientY,time:performance.now(),button:M.button}),i.classList.add("dragging"))});let y=0;i.addEventListener("pointermove",M=>{let g=x.get(M.pointerId);if(!g)return;let A=M.clientX-g.x,E=M.clientY-g.y;if(g.x=M.clientX,g.y=M.clientY,x.size>=2){let[T,b]=[...x.values()],P=Math.hypot(T.x-b.x,T.y-b.y);y&&(c+=(y-P)*4),y=P;return}y=0,a.dx+=A,a.dy+=E});let m=M=>{let g=x.get(M.pointerId);g&&M.type==="pointerup"&&g.button===0&&l&&Math.hypot(M.clientX-g.sx,M.clientY-g.sy)<6&&performance.now()-g.time<300&&(u=!0),x.delete(M.pointerId),x.size<2&&(y=0),x.size===0&&i.classList.remove("dragging")};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),i.addEventListener("wheel",M=>{l&&(M.preventDefault(),c+=M.deltaY)},{passive:!1});let p=t.querySelector(".knob"),w=48,_=M=>{let g=t.getBoundingClientRect(),A=M.clientX-(g.left+g.width/2),E=M.clientY-(g.top+g.height/2),T=Math.hypot(A,E);T>w&&(A=A/T*w,E=E/T*w),d.x=A/w,d.y=E/w,p.style.transform=`translate(${A}px, ${E}px)`};t.addEventListener("pointerdown",M=>{d.id=M.pointerId,t.setPointerCapture(M.pointerId),_(M)}),t.addEventListener("pointermove",M=>{M.pointerId===d.id&&_(M)});let v=M=>{M.pointerId===d.id&&(d.id=null,d.x=d.y=0,p.style.transform="")};t.addEventListener("pointerup",v),t.addEventListener("pointercancel",v),e.addEventListener("pointerdown",M=>{M.preventDefault(),h=!0}),e.addEventListener("pointerup",()=>{h=!1}),e.addEventListener("pointercancel",()=>{h=!1}),e.addEventListener("pointerleave",()=>{h=!1}),n.addEventListener("pointerdown",M=>{M.preventDefault(),l&&(u=!0)}),[...s.children].forEach((M,g)=>{M.addEventListener("pointerdown",A=>{A.preventDefault(),l&&(f=g)})});let R=(...M)=>M.some(g=>o.has(g));return{get enabled(){return l},set enabled(M){l=M,M||(o.clear(),x.clear(),h=!1,u=!1,f=-1)},move(){let M=(R("KeyW","ArrowUp")?1:0)-(R("KeyS","ArrowDown")?1:0),g=(R("KeyD","ArrowRight")?1:0)-(R("KeyA","ArrowLeft")?1:0);M+=-d.y,g+=d.x;let A=Math.hypot(M,g);return A>1&&(M/=A,g/=A),{forward:M,right:g}},jump(){return l&&(o.has("Space")||h)},run(){return l&&(R("ShiftLeft","ShiftRight")||Math.hypot(d.x,d.y)>.92)},consumeAttack(){let M=u;return u=!1,M},consumeSkill(){let M=f;return f=-1,M},consumeLook(){let M={dx:a.dx,dy:a.dy,zoom:c};return a.dx=a.dy=0,c=0,M}}}var NE=i=>"#"+i.toString(16).padStart(6,"0");function Bf(i,t){let e=i.getContext("2d"),n=110,s=!1;function r(){let o=Math.min(window.devicePixelRatio,2),a=i.getBoundingClientRect();i.width=Math.round(a.width*o),i.height=Math.round(a.height*o)}return{get expanded(){return s},set expanded(o){s=o,i.classList.toggle("expanded",o),r()},resize:r,draw(o,a,c,l=[]){let h=i.width,u=i.height;if(!h||!u)return;let f=s?On-30:n,d=s?0:o.x,x=s?0:o.z,y=Math.min(h,u)/(f*2),m=g=>h/2+(g-d)*y,p=g=>u/2+(g-x)*y;e.fillStyle="#3b7fc0",e.fillRect(0,0,h,u),e.imageSmoothingEnabled=!0,e.drawImage(t.mapImage,m(-On),p(-On),On*2*y,On*2*y),e.lineWidth=1,e.strokeStyle="rgba(0,0,0,0.35)";for(let g of t.colliders){if(g.kind==="tree"||g.kind==="rock"||g.kind==="wall"||g.kind==="prop"||g.kind==="rail"||s&&g.kind!=="bridge"&&g.kind!=="house")continue;let A=g.box;e.fillStyle=NE(g.color),e.beginPath(),g.cyl?e.arc(m(g.cyl.x),p(g.cyl.z),Math.max(g.cyl.r*y,1.5),0,Math.PI*2):e.rect(m(A.min.x),p(A.min.z),(A.max.x-A.min.x)*y,(A.max.z-A.min.z)*y),e.fill(),e.stroke()}let w=m(o.x),_=p(o.z),v=h/i.getBoundingClientRect().width||1;e.fillStyle="#e0475a",e.strokeStyle="#ffffff",e.lineWidth=1.2*v;for(let g of l)e.beginPath(),e.arc(m(g.x),p(g.z),(g.big?3.6:2.6)*v,0,Math.PI*2),e.fill(),e.stroke();let R=Math.atan2(-Math.cos(c),-Math.sin(c));e.fillStyle="rgba(255,255,255,0.28)",e.beginPath(),e.moveTo(w,_),e.arc(w,_,34*v,R-.5,R+.5),e.closePath(),e.fill();let M=7*v;if(e.save(),e.translate(w,_),e.rotate(-a),e.fillStyle="#ffffff",e.strokeStyle="#1d8676",e.lineWidth=2.5*v,e.beginPath(),e.moveTo(0,M*1.3),e.lineTo(M,-M),e.lineTo(0,-M*.4),e.lineTo(-M,-M),e.closePath(),e.fill(),e.stroke(),e.restore(),s){e.font=`bold ${10*v}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.lineWidth=3*v,e.strokeStyle="rgba(28,26,58,0.8)",e.fillStyle="#ffffff";for(let g of Xo){let A=m(g.x),E=p(g.z)-8*v;e.strokeText(g.name,A,E),e.fillText(g.name,A,E)}e.font=`bold ${16*v}px "M PLUS Rounded 1c", sans-serif`,e.fillStyle="#f4c25b";for(let g of qi){let A=m(g.cx),E=p(g.cz+40);e.strokeText(g.name,A,E),e.fillText(g.name,A,E)}}e.fillStyle="rgba(20,24,32,0.75)",e.font=`bold ${11*v}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.fillText("N",h/2,13*v)}}}var OE=20,kf=(i,t,e=0)=>Mc.some(n=>Math.hypot(i-n.x,t-n.z)<n.r+e);function FE(i=7167891){let t=new xt,e=new xt;e.position.y=2,t.add(e);let n=new St({color:i,roughness:.9,flatShading:!0}),s=new Sn(1,1),r=[[0,0,0,1.25],[.9,.2,-.2,.85],[-.9,.15,-.1,.9],[.3,.75,-.3,.8],[-.4,.6,.3,.7],[0,-.35,-.6,.8]];for(let[a,c,l,h]of r){let u=new k(s,n);u.position.set(a,c,l),u.scale.setScalar(h),u.castShadow=!0,e.add(u)}let o=new St({color:16769899,emissive:16763195,emissiveIntensity:1});for(let a of[-1,1]){let c=new k(new ie(.2,10,8),o);c.scale.set(1,.7,.5),c.position.set(a*.42,.1,1.18),c.rotation.z=a*-.35,e.add(c)}return{root:t,body:e,mats:[n],eyeMat:o,baseY:2,calmEye:16763195}}function BE(i=9407129){let t=new xt,e=new xt;e.position.y=1.7,t.add(e);let n=new St({color:i,roughness:1,flatShading:!0}),s=new St({color:7319119,roughness:1,flatShading:!0}),r=new k(new qn(1.5,0),n);r.scale.set(1.1,.95,1),r.castShadow=!0;let o=new k(new ie(1.4,8,6,0,Math.PI*2,0,Math.PI*.33),s);o.position.y=.3,e.add(r,o);let a=new qn(.55,0),c=[];for(let h of[-1,1]){let u=new k(a,n);u.position.set(h*2,-.2,.3),u.castShadow=!0,e.add(u),c.push(u);let f=new k(a,n);f.scale.set(1,.7,1.2),f.position.set(h*.75,-1.35,.1),f.castShadow=!0,e.add(f)}let l=new St({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let h of[-1,1]){let u=new k(new ft(.34,.16,.1),l);u.position.set(h*.5,.15,1.4),u.rotation.z=h*.2,e.add(u)}return{root:t,body:e,mats:[n,s],eyeMat:l,arms:c,baseY:1.7,calmEye:4183744}}var kE={kumodama:{name:"\u30AF\u30E2\u30C0\u30DE",hp:30,speed:7,radius:1.4,height:3.6,damage:8,exp:6,aggro:22,attackRange:7,windup:.45,cooldown:1.4,knockback:1,color:9404352,build:FE},ishimori:{name:"\u30A4\u30B7\u30E2\u30EA",hp:80,speed:4.5,radius:1.8,height:3.6,damage:15,exp:18,aggro:18,attackRange:8,windup:.6,cooldown:2.2,knockback:.45,color:9407129,build:BE}},so=Ae.plateau,Gf=Ae.cave,GE=[["ishimori",so.x+14,so.z-14],["ishimori",so.x-16,so.z+4],["ishimori",so.x+4,so.z+16],["ishimori",Gf.x-3,Gf.z+5]];function Vf(i,t,e){let n=[],s=[],r=new O;function o(g){let A=document.createElement("div");return A.className="enemy-label",A.innerHTML=`<span class="enemy-name">${g.name} <small>Lv${g.level}</small></span><div class="enemy-hp"><div></div></div>`,A.style.display="none",e.appendChild(A),{el:A,fill:A.querySelector(".enemy-hp div")}}let a=GE.map(([g,A,E])=>[g,A,E,null]);for(let g of qi){if(!g.enemies)continue;let A=$r(g.cx*17+g.cz*29+3);for(let[E,T]of Object.entries(g.enemies)){let b=0;for(let P=0;b<T.count&&P<800;P++){let H=g.cx+(A()-.5)*g.maxR*1.6,S=g.cz+(A()-.5)*g.maxR*1.6;t.groundHeight(H,S)<2.5||t.slopeAt(H,S)>.5||kf(H,S,8)||t.regionAt(H,S)===g&&(Object.values(g.places).some(I=>Math.hypot(H-I.x,S-I.z)<I.r)||a.some(([,I,U])=>Math.hypot(H-I,S-U)<14)||(a.push([E,H,S,T]),b++))}}}for(let[g,A,E,T]of a){let b=kE[g],P=T?.mult??1,H={...b,name:T?.name??b.name,hp:Math.round(b.hp*P),damage:Math.round(b.damage*P),exp:Math.round(b.exp*P),speed:b.speed*(1+(P-1)*.15),color:T?.tint??b.color,level:Math.round(1+(P-1)*5.5)},S=b.build(T?.tint);i.add(S.root);let I={T:H,type:g,model:S,home:new O(A,0,E),pos:new O,vel:new dt,facing:0,hp:H.hp,state:"wander",timer:0,cooldown:0,target:new O,dir:new dt,jumpFrom:new O,jumpTo:new O,hitDone:!1,flash:0,labelTimer:0,spawnT:1,bob:Math.random()*10,bleed:null,label:o(H)};n.push(I),c(I,!0)}function c(g,A=!1){g.hp=g.T.hp,g.pos.copy(g.home),g.pos.y=t.groundHeight(g.home.x,g.home.z),g.vel.set(0,0),g.state="wander",g.timer=Math.random()*2,g.target.copy(g.home),g.cooldown=0,g.spawnT=A?1:0,g.model.root.visible=!0,l(g,!1)}function l(g,A){let E=A?16734794:g.model.calmEye;g.model.eyeMat.emissive.setHex(E),g.model.eyeMat.color.setHex(A?16747130:g.model.calmEye)}function h(g){let A=Math.random()*Math.PI*2,E=3+Math.random()*10;g.target.set(g.home.x+Math.cos(A)*E,0,g.home.z+Math.sin(A)*E)}function u(g,A,E){let T=g.T.radius;for(let S of Mc){let I=g.pos.x-S.x,U=g.pos.z-S.z,N=Math.hypot(I,U);if(N<S.r+T){let z=(S.r+T)/Math.max(N,.001);g.pos.x=S.x+I*z,g.pos.z=S.z+U*z}}let b=t.groundHeight(g.pos.x,g.pos.z),P=t.groundHeight(A,E),H=Math.hypot(g.pos.x-A,g.pos.z-E);(b<1.2||g.state!=="attack"&&(b-P>H*1.1+.05||P-b>H*2+.05))&&(g.pos.x=A,g.pos.z=E,g.vel.set(0,0),g.state==="wander"&&h(g));for(let S of t.collidersNear(g.pos.x,g.pos.z)){if(S.box.min.y>g.pos.y+2||S.box.max.y<g.pos.y+.3||S.kind==="spawn")continue;let I,U;S.cyl?(I=S.cyl.x,U=S.cyl.z):(I=Rn.clamp(g.pos.x,S.box.min.x,S.box.max.x),U=Rn.clamp(g.pos.z,S.box.min.z,S.box.max.z));let N=T+(S.cyl?S.cyl.r:0),z=g.pos.x-I,B=g.pos.z-U,G=Math.hypot(z,B);G<N&&G>1e-4&&(g.pos.x=I+z/G*N,g.pos.z=U+B/G*N)}}function f(g,A,E,T,b){let P=A-g.pos.x,H=E-g.pos.z,S=Math.hypot(P,H);if(S<.3)return S;let I=Math.min(S,T*b);return g.pos.x+=P/S*I,g.pos.z+=H/S*I,d(g,P,H,b),S}function d(g,A,E,T){let P=Math.atan2(A,E)-g.facing;P=Math.atan2(Math.sin(P),Math.cos(P)),g.facing+=P*Math.min(1,T*8)}let x=new Sn(.3,0);function y(g,A,E=14){let T=new St({color:A,flatShading:!0,transparent:!0});for(let b=0;b<E;b++){let P=new k(x,T);P.position.copy(g);let H=Math.random()*Math.PI*2,S=4+Math.random()*6;s.push({mesh:P,t:0,life:.7+Math.random()*.3,vel:new O(Math.cos(H)*S,5+Math.random()*8,Math.sin(H)*S)}),i.add(P)}}let m=new Ri(.8,1,32);function p(g,A){let E=new k(m,new ve({color:16769184,transparent:!0,side:le,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.set(g.x,g.y+.15,g.z),i.add(E),s.push({mesh:E,t:0,life:.4,ring:A})}function w(g){for(let A=s.length-1;A>=0;A--){let E=s[A];E.t+=g;let T=E.t/E.life;if(T>=1){i.remove(E.mesh),s.splice(A,1);continue}if(E.ring)E.mesh.scale.setScalar(1+T*E.ring),E.mesh.material.opacity=1-T;else{E.vel.y-=30*g,E.mesh.position.addScaledVector(E.vel,g);let b=t.groundHeight(E.mesh.position.x,E.mesh.position.z)+.2;E.mesh.position.y<b&&(E.mesh.position.y=b,E.vel.multiplyScalar(.5),E.vel.y=Math.abs(E.vel.y)),E.mesh.scale.setScalar(1-T*.8),E.mesh.material.opacity=1-T*T,E.mesh.rotation.x+=g*8}}}function _(g,A,E,T=1,b=!0){let P=Math.max(1,Math.round(A*(.85+Math.random()*.3)));if(g.hp-=P,g.flash=.15,g.labelTimer=5,E&&T>0){let S=g.pos.x-E.x,I=g.pos.z-E.z,U=Math.max(Math.hypot(S,I),.001),N=12*g.T.knockback*T;g.vel.set(S/U*N,I/U*N)}let H=new O(g.pos.x,g.pos.y+g.T.height,g.pos.z);return g.hp<=0?(v(g),{enemy:g,pos:H,damage:P,killed:!0,exp:g.T.exp,name:g.T.name}):(b&&g.state!=="attack"&&(g.state="hurt",g.timer=.35),l(g,!0),{enemy:g,pos:H,damage:P,killed:!1,exp:0,name:g.T.name})}function v(g){g.state="dead",g.bleed=null,g.timer=OE,g.model.root.visible=!1,g.label.el.style.display="none",y(r.copy(g.pos).setY(g.pos.y+g.model.baseY),g.T.color)}function R(g,A){let E=A.playerPos,T=kf(E.x,E.z)||A.playerSwimming;for(let b of n){if(b.state==="dead"){b.timer-=g,b.timer<=0&&c(b);continue}let P=Math.hypot(E.x-b.pos.x,E.z-b.pos.z);if(b.model.root.visible=P<260,P>180)continue;if(b.bleed&&(b.bleed.tick-=g,b.bleed.tick<=0)){b.bleed.tick=1,b.bleed.left--;let q=_(b,b.bleed.dmg,null,0,!1);if(A.onBleed?.(q),b.bleed&&b.bleed.left<=0&&(b.bleed=null),b.state==="dead")continue}let H=b.T,S=b.pos.x,I=b.pos.z,U=E.x-b.pos.x,N=E.z-b.pos.z,z=Math.hypot(U,N),B=A.playerActive&&!T&&Math.abs(E.y-b.pos.y)<4;b.cooldown-=g,b.timer-=g,b.labelTimer-=g;let G=0;switch(b.state){case"wander":{if(B&&z<H.aggro){b.state="chase",l(b,!0);break}if(b.timer>0)break;f(b,b.target.x,b.target.z,H.speed*.35,g)<.5&&(b.timer=1+Math.random()*3,h(b));break}case"return":{if(B&&z<H.aggro){b.state="chase",l(b,!0);break}f(b,b.home.x,b.home.z,H.speed*.7,g)<1&&(b.state="wander",b.timer=1);break}case"chase":{if(!B||z>H.aggro*1.8){b.state="return",l(b,!1);break}if(z<H.attackRange&&b.cooldown<=0){b.state="windup",b.timer=H.windup;break}z>H.radius+1.2?f(b,E.x,E.z,H.speed,g):d(b,U,N,g);break}case"windup":{if(d(b,U,N,g),b.timer<=0){b.state="attack",b.hitDone=!1;let q=Math.max(z,.001);if(b.dir.set(U/q,N/q),b.type==="ishimori"){let K=Math.min(z,8);b.jumpFrom.copy(b.pos),b.jumpTo.set(b.pos.x+b.dir.x*K,0,b.pos.z+b.dir.y*K),b.timer=.55}else b.timer=.35}break}case"attack":{if(b.type==="ishimori"){let q=1-Math.max(b.timer,0)/.55;if(b.pos.lerpVectors(b.jumpFrom,b.jumpTo,q),G=Math.sin(q*Math.PI)*3.5,b.timer<=0){p(b.pos,5);let K=Math.hypot(E.x-b.pos.x,E.z-b.pos.z);B&&K<4.5&&E.y-b.pos.y<1.5&&A.onHitPlayer(H.damage,b.pos.x,b.pos.z),b.state="recover",b.timer=.7,b.cooldown=H.cooldown}}else{b.pos.x+=b.dir.x*20*g,b.pos.z+=b.dir.y*20*g;let q=Math.hypot(E.x-b.pos.x,E.z-b.pos.z);!b.hitDone&&B&&q<H.radius+1.1&&(b.hitDone=!0,A.onHitPlayer(H.damage,b.pos.x,b.pos.z)),b.timer<=0&&(b.state="recover",b.timer=.5,b.cooldown=H.cooldown)}break}case"recover":case"hurt":{b.timer<=0&&(b.state=B?"chase":"return");break}}b.pos.x+=b.vel.x*g,b.pos.z+=b.vel.y*g,b.vel.multiplyScalar(Math.exp(-g*6)),u(b,S,I),b.pos.y=t.groundHeight(b.pos.x,b.pos.z);for(let q of n){if(q===b||q.state==="dead")continue;let K=b.pos.x-q.pos.x,ut=b.pos.z-q.pos.z,Tt=Math.hypot(K,ut),yt=b.T.radius+q.T.radius;Tt<yt&&Tt>.001&&(b.pos.x+=K/Tt*(yt-Tt)*.5,b.pos.z+=ut/Tt*(yt-Tt)*.5)}let X=b.model;b.bob+=g,b.spawnT=Math.min(1,b.spawnT+g*2),X.root.position.set(b.pos.x,b.pos.y+G,b.pos.z),X.root.rotation.y=b.facing,X.root.scale.setScalar(b.spawnT);let nt=1;if(b.state==="windup"&&(nt=1-(1-b.timer/H.windup)*.25+Math.sin(b.bob*50)*.03),b.type==="kumodama")X.body.position.y=X.baseY+Math.sin(b.bob*3)*.25,X.body.rotation.z=Math.sin(b.bob*2)*.08;else{let q=b.state==="chase"||b.state==="return"||b.state==="wander"&&b.timer<=0;X.body.position.y=X.baseY+(q?Math.abs(Math.sin(b.bob*8))*.2:0),X.arms[0].position.y=-.2+Math.sin(b.bob*3)*.15,X.arms[1].position.y=-.2+Math.sin(b.bob*3+1)*.15}X.body.scale.set(1/Math.sqrt(nt),nt,1/Math.sqrt(nt)),b.flash=Math.max(0,b.flash-g);for(let q of X.mats)q.emissive.setHex(16777215),q.emissiveIntensity=b.flash>0?.8:0}w(g)}function M(g){for(let A of n){let E=A.label.el;if(!(A.state!=="dead"&&(A.labelTimer>0||A.state==="chase"||A.state==="windup"||A.state==="attack"))){E.style.display="none";continue}if(r.set(A.pos.x,A.pos.y+A.T.height+.9,A.pos.z),r.distanceTo(g.position)>70){E.style.display="none";continue}if(r.project(g),r.z>1){E.style.display="none";continue}E.style.display="";let b=(r.x+1)/2*window.innerWidth,P=(1-r.y)/2*window.innerHeight;E.style.transform=`translate(-50%, -100%) translate(${b}px, ${P}px)`,A.label.fill.style.width=Math.max(0,A.hp)/A.T.hp*100+"%"}}return{list:n,update:R,updateLabels:M,attack(g,A,{range:E,arc:T,damage:b,knockback:P=1,bleed:H=!1}){let S=Math.sin(A),I=Math.cos(A);return this.hitArea(U=>{let N=U.pos.x-g.x,z=U.pos.z-g.z,B=Math.hypot(N,z);if(B-U.T.radius>E||Math.abs(g.y-U.pos.y)>3.5)return!1;let G=(N*S+z*I)/Math.max(B,.001);return B<=U.T.radius+.5||Math.acos(Rn.clamp(G,-1,1))<=T/2},{damage:b,knockback:P,from:g,bleed:H})},hitArea(g,{damage:A,knockback:E=1,from:T,bleed:b=!1}){let P=[];for(let H of n){if(H.state==="dead"||H.spawnT<1||!g(H))continue;let S=_(H,A,T,E);b&&!S.killed&&(H.bleed={left:3,tick:1,dmg:Math.max(1,Math.round(A*.2))}),P.push(S)}return P},calmDown(){for(let g of n)g.state!=="dead"&&(g.state="return",l(g,!1))},alive(){return n.filter(g=>g.state!=="dead").map(g=>({x:g.pos.x,z:g.pos.z,big:g.type==="ishimori"}))}}}function Wf(i){let t=[],e=new O,n=1.1;return{add(s,r,o=""){let a=document.createElement("div");a.className="popup-text "+o,a.textContent=r,i.appendChild(a),t.push({el:a,pos:s.clone(),t:0,dx:(Math.random()-.5)*1.2})},update(s,r){for(let o=t.length-1;o>=0;o--){let a=t[o];if(a.t+=s,a.t>n){a.el.remove(),t.splice(o,1);continue}if(e.copy(a.pos),e.y+=a.t*2,e.x+=a.dx*a.t,e.project(r),e.z>1){a.el.style.display="none";continue}a.el.style.display="";let c=(e.x+1)/2*window.innerWidth,l=(1-e.y)/2*window.innerHeight,h=a.t<.12?.6+a.t/.12*.7:1.3-Math.min(a.t,.4)*.75;a.el.style.transform=`translate(-50%, -50%) translate(${c}px, ${l}px) scale(${h})`,a.el.style.opacity=a.t>n*.65?(n-a.t)/(n*.35):1}},clear(){for(let s of t)s.el.remove();t.length=0}}}var Xf=i=>new O(Math.sin(i),0,Math.cos(i)),qf=i=>i.clone().setY(i.y+3),Zi={bloodGale:{name:"\u8840\u98A8\u65AC",key:"Q",desc:"\u6B8B\u50CF\u3092\u6B8B\u3057\u3066\u99C6\u3051\u629C\u3051\u3001\u901A\u308A\u9053\u3092\u65AC\u308B\u3002\u5C11\u3057\u9045\u308C\u3066\u3001\u901A\u308A\u9053\u304B\u3089\u8840\u306E\u68D8\u304C\u5674\u304D\u51FA\u3059\uFF08\u99C6\u3051\u629C\u3051\u308B\u9593\u306F\u7121\u6575\uFF09",cooldown:5,duration:.62,anim:6,start(i,t){let e=Xf(i.player.facing);t.dir=e,t.from=i.player.position.clone(),t.to=t.from.clone().addScaledVector(e,14),t.ghosts=0,t.cut=!1,t.burst=!1,i.invuln(.55),i.player.knockback(e.x*58,e.z*58),i.fovKick(8)},update(i,t,e){for(;t.ghosts<5&&e>=t.ghosts*.04;)i.fx.afterimage(i.character.object,.35),t.ghosts++;if(!t.cut&&e>=.16){t.cut=!0,i.fx.streak(t.from,i.player.position.clone().addScaledVector(t.dir,2),3,.8);let n=t.from,s=t.to;t.hits=i.enemies.hitArea(r=>or(r.pos.x,r.pos.z,n.x,n.z,s.x,s.z)<2.8+r.T.radius&&Math.abs(r.pos.y-n.y)<5,{damage:i.power(2.4),knockback:.6,from:n});for(let r of t.hits)i.fx.burst(r.pos,18,9);t.hits.length&&(i.hitStop(.08),i.shake(.5)),i.applyHits(t.hits)}if(!t.burst&&e>=.5){t.burst=!0;let n=t.from,s=t.to;for(let o=0;o<=6;o++){let a=n.clone().lerp(s,o/6);i.fx.spike(a.x,a.z,3.8,1.1)}i.fx.flash(n.clone().lerp(s,.5),90,35,.4);let r=i.enemies.hitArea(o=>or(o.pos.x,o.pos.z,n.x,n.z,s.x,s.z)<3+o.T.radius&&Math.abs(o.pos.y-n.y)<5,{damage:i.power(1.5),knockback:.8,from:n,bleed:!0});for(let o of r)i.fx.burst(o.pos,12,7);i.shake(.35),i.applyHits(r)}}},crimsonMoon:{name:"\u7D05\u6708\u589C\u3068\u3057",key:"E",desc:"\u9AD8\u304F\u8DF3\u3073\u4E0A\u304C\u3063\u3066\u53E9\u304D\u3064\u3051\u3001\u4E09\u91CD\u306E\u885D\u6483\u6CE2\u30FB\u8840\u306E\u68D8\u306E\u8F2A\u30FB\u8840\u306E\u67F1\u3092\u5674\u304D\u4E0A\u3052\u308B",cooldown:8,duration:.95,anim:7,start(i,t){let e=Xf(i.player.facing);i.player.knockback(e.x*8,e.z*8,36),i.invuln(.8),t.done=!1,t.wave=0},update(i,t,e){if(!t.done&&e>=.62){t.done=!0,t.c=i.player.position.clone();let n=t.c;i.fx.nova(n.clone().setY(n.y+.5),6,.35),i.fx.flash(n,160,45,.5),i.fx.burst(n.clone().setY(n.y+.5),40,13);for(let r=0;r<14;r++){let o=r/14*Math.PI*2;i.fx.spike(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,3.4,1.1)}for(let r=0;r<6;r++){let o=r/6*Math.PI*2+.3;i.fx.pillar(n.x+Math.cos(o)*9,n.z+Math.sin(o)*9,16,.9,1.3)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<10+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(3.2),knockback:3,from:n});for(let r of s)i.fx.burst(r.pos,14,8);i.shake(1),i.screenFlash(.6),i.fovKick(-6),s.length&&i.hitStop(.14),i.applyHits(s)}for(;t.done&&t.wave<3&&e>=.62+t.wave*.1;)i.fx.ring(t.c,8+t.wave*4,.5+t.wave*.15,t.wave===1?9046040:16722490),t.wave++}},bloodRelease:{name:"\u9BAE\u8840\u89E3\u653E",key:"R",desc:"HP \u3092 20% \u6367\u3052\u3001\u307E\u308F\u308A\u3092\u5439\u304D\u98DB\u3070\u3059\u8840\u306E\u7206\u767A\u3092\u8D77\u3053\u3059\u300210 \u79D2\u9593\u3001\u653B\u6483\u529B 1.8 \u500D\u30FB\u5438\u8840 25%\u3001\u5263\u3092\u632F\u308B\u305F\u3073\u306B\u8840\u306E\u65AC\u6483\u6CE2\u304C\u98DB\u3076",cooldown:25,duration:1,anim:9,canUse(i){let t=Math.ceil(i.stats.maxHp*.2);return i.stats.hp<=t+1?(i.toast("HP \u304C\u8DB3\u308A\u306A\u3044\u2026"),!1):!0},start(i,t){let e=Math.ceil(i.stats.maxHp*.2);i.stats.hp-=e,i.popup(i.player.position.clone().setY(i.player.position.y+5.5),`-${e}`,"hurt"),i.invuln(1),t.done=!1},update(i,t,e){if(t.done||e<.5)return;t.done=!0;let n=i.player.position.clone();i.fx.nova(qf(n),14,.7),i.fx.ring(n,16,.8),i.fx.ring(n,10,.6,9046040),i.fx.burst(qf(n),50,12),i.fx.flash(n,200,50,.7);for(let r=0;r<8;r++){let o=r/8*Math.PI*2;i.fx.pillar(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,20,1.1,1.1)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<12+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(2.6),knockback:3.2,from:n});i.applyHits(s),i.shake(1.1),i.screenFlash(.9),i.fovKick(10),i.startBuff({name:"\u9BAE\u8840\u89E3\u653E",time:10,atk:1.8,lifesteal:.25,waves:!0})}}};function Yf(i,t){let e=[],r=new Sn(.16,0),o=new St({color:11538462,emissive:5242888,emissiveIntensity:.6,roughness:.3,transparent:!0}),a=new Ri(.85,1,48),c=new ft(.28,.1,.18),l=new Zt(.45,1,5).translate(0,.5,0),h=new St({color:13639738,emissive:8390680,emissiveIntensity:.9,flatShading:!0,roughness:.2,metalness:.2,transparent:!0}),u=new Xe(16724032,0,30);i.add(u);let f=0,d=0,x=0,y=(m,p,w)=>{i.add(m),e.push({mesh:m,life:p,t:0,update:w})};return{burst(m,p=14,w=7){for(let _=0;_<p;_++){let v=new k(r,o);v.position.copy(m);let R=Math.random()*Math.PI*2,M=w*(.4+Math.random()*.8),g=new O(Math.cos(R)*M,4+Math.random()*7,Math.sin(R)*M);v.scale.setScalar(.6+Math.random()*.9),y(v,.6+Math.random()*.4,(A,E)=>{g.y-=28*E,v.position.addScaledVector(g,E);let T=t(v.position.x,v.position.z)+.1;v.position.y<T&&(v.position.y=T,g.set(0,0,0),v.scale.y=.25),v.material.opacity=1})}},chips(m,p=8,w=11897438){let _=new St({color:w,roughness:.9,flatShading:!0});for(let v=0;v<p;v++){let R=new k(c,_);R.position.copy(m);let M=Math.random()*Math.PI*2,g=3+Math.random()*4,A=new O(Math.cos(M)*g,3+Math.random()*5,Math.sin(M)*g),E=new O(Math.random()*10,Math.random()*10,Math.random()*10);y(R,.8,(T,b)=>{A.y-=25*b,R.position.addScaledVector(A,b),R.rotation.x+=E.x*b,R.rotation.y+=E.y*b;let P=t(R.position.x,R.position.z)+.08;R.position.y<P&&(R.position.y=P,A.set(0,0,0),E.set(0,0,0))})}},ring(m,p,w=.5,_=16722490){let v=new k(a,new ve({color:_,transparent:!0,side:le,depthWrite:!1,blending:Xn}));v.rotation.x=-Math.PI/2,v.position.set(m.x,m.y+.2,m.z),y(v,w,R=>{let M=R.t/R.life;v.scale.setScalar(.5+p*(1-Math.pow(1-M,3))),v.material.opacity=1-M})},streak(m,p,w=2.2,_=.6){let v=m.distanceTo(p),R=new k(new _n(w,v),new ve({color:16722490,transparent:!0,side:le,depthWrite:!1,blending:Xn}));R.position.copy(m).lerp(p,.5),R.position.y+=1.6,R.lookAt(p.x,R.position.y,p.z),R.rotateX(Math.PI/2),y(R,_,M=>{let g=M.t/M.life;R.material.opacity=.8*(1-g),R.scale.x=1-g*.7})},spike(m,p,w=3.5,_=1.3){let v=t(m,p),R=new xt;R.position.set(m,v-.3,p);let M=3+Math.floor(Math.random()*3);for(let g=0;g<M;g++){let A=new k(l,h.clone()),E=w*(.5+Math.random()*.6);A.scale.set(.6+Math.random()*.5,E,.6+Math.random()*.5),A.position.set((Math.random()-.5)*1.4,0,(Math.random()-.5)*1.4),A.rotation.set((Math.random()-.5)*.7,Math.random()*3,(Math.random()-.5)*.7),A.userData.h=E,R.add(A)}y(R,_,g=>{let A=g.t/g.life,E=A<.12?A/.12:A>.7?1-(A-.7)/.3:1;R.children.forEach(T=>{T.scale.y=T.userData.h*Math.max(E,.001),T.material.opacity=A>.7?1-(A-.7)/.3:1})})},aura(m){let w=new Float32Array(150),_=Array.from({length:50},()=>({a:Math.random()*Math.PI*2,r:.6+Math.random()*1.2,y:Math.random()*5,v:1.5+Math.random()*2})),v=new oe;v.setAttribute("position",new fe(w,3));let R=new Ze(v,new We({color:16722490,size:.28,transparent:!0,opacity:.9,depthWrite:!1,blending:Xn}));R.frustumCulled=!1;let M=new k(a,new ve({color:16722490,transparent:!0,opacity:.5,side:le,depthWrite:!1,blending:Xn}));M.rotation.x=-Math.PI/2;let g=new xt;g.add(R,M);let A=!0;return y(g,1/0,(E,T)=>{g.position.copy(m.position),M.position.y=.15,M.scale.setScalar(1.6+Math.sin(E.t*6)*.15);for(let b=0;b<50;b++){let P=_[b];P.y+=P.v*T,P.y>5.5&&(P.y=0),P.a+=T*1.5,w[b*3]=Math.cos(P.a)*P.r,w[b*3+1]=P.y,w[b*3+2]=Math.sin(P.a)*P.r}v.attributes.position.needsUpdate=!0,A||(E.life=E.t)}),{stop(){A=!1}}},afterimage(m,p=.35){let w=m.clone(!0),_=new ve({color:16722490,transparent:!0,opacity:.55,depthWrite:!1,blending:Xn});w.traverse(v=>{(v.isMesh||v.isPoints)&&(v.material=_,v.castShadow=!1)}),w.position.copy(m.position),w.rotation.copy(m.rotation),y(w,p,v=>{_.opacity=.55*(1-v.t/v.life)})},pillar(m,p,w=14,_=.9,v=1.4){let R=t(m,p),M=new k(new It(v*.6,v,1,12,1,!0).translate(0,.5,0),new ve({color:16722490,transparent:!0,side:le,depthWrite:!1,blending:Xn}));M.position.set(m,R,p),y(M,_,g=>{let A=g.t/g.life;M.scale.set(1+A*.5,w*Math.min(1,A*6),1+A*.5),M.material.opacity=.85*(1-A),M.rotation.y+=.2}),this.burst(new O(m,R+1,p),8,5)},nova(m,p=12,w=.6){let _=new k(new ie(1,24,16),new ve({color:16722490,transparent:!0,depthWrite:!1,blending:Xn,side:le}));_.position.copy(m),y(_,w,v=>{let R=v.t/v.life;_.scale.setScalar(.5+p*(1-Math.pow(1-R,3))),_.material.opacity=.6*(1-R)})},flash(m,p=80,w=30,_=.35){u.position.copy(m),u.position.y+=2,u.distance=w,x=p,f=_,d=0},crescent(m,p,{speed:w=42,life:_=.55,size:v=3.2,onMove:R}={}){let M=new xt,g=new k(new Kn(v,v*.14,6,24,Math.PI),new ve({color:16722490,transparent:!0,depthWrite:!1,blending:Xn,side:le}));g.rotation.set(-Math.PI/2,0,Math.PI),g.scale.z=.4,M.add(g),M.position.copy(m),M.lookAt(m.x+p.x,m.y,m.z+p.z),y(M,_,(A,E)=>{M.position.addScaledVector(p,w*E);let T=A.t/A.life;g.material.opacity=.9*(1-T*T),M.scale.setScalar(1+T*.4),R?.(M.position)})},update(m){d<f?(d+=m,u.intensity=x*Math.max(0,1-d/f)):u.intensity=0;for(let p=e.length-1;p>=0;p--){let w=e[p];w.t+=m,w.update(w,m),w.t>=w.life&&(i.remove(w.mesh),e.splice(p,1))}}}}var zt=i=>document.getElementById(i),Zf=["\u30D2\u30F3\u30C8\uFF1A\u65C5\u306F\u5CF6\u306E\u4E2D\u592E\u306B\u3042\u308B\u661F\u306E\u796D\u58C7\u304B\u3089\u59CB\u307E\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730\u306E\u5854\u306E\u3066\u3063\u307A\u3093\u306B\u3001\u30AF\u30EA\u30B9\u30BF\u30EB\u304C\u7720\u3063\u3066\u3044\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A4\u672C\u306E\u5927\u6A4B\u3092\u6E21\u308B\u3068\u3001\u305D\u308C\u305E\u308C\u5225\u306E\u5CF6\u3078\u884C\u3051\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u5CF6\u306F\u3068\u3066\u3082\u5E83\u3044\u3002M \u30AD\u30FC\u306E\u5730\u56F3\u3067\u540D\u6240\u3092\u63A2\u3057\u3066\u307F\u3088\u3046","\u30D2\u30F3\u30C8\uFF1A\u9060\u304F\u306E\u5730\u65B9\u307B\u3069\u9B54\u7269\u304C\u5F37\u304F\u306A\u308A\u307E\u3059\u3002\u30EC\u30D9\u30EB\u3092\u4E0A\u3052\u3066\u304B\u3089\u884C\u3053\u3046","\u30D2\u30F3\u30C8\uFF1A\u6D77\u3084\u6E56\u3067\u306F\u6CF3\u3052\u307E\u3059\u3002\u6CF3\u3044\u3067\u3044\u308B\u9593\u306F\u9B54\u7269\u306B\u8972\u308F\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30B7\u30AA\u30AB\u30BC\u6751\u306F\u5B89\u5168\u5730\u5E2F\u3067\u3059","\u30D2\u30F3\u30C8\uFF1AM \u30AD\u30FC\u3067\u5CF6\u306E\u5730\u56F3\u3092\u5927\u304D\u304F\u8868\u793A\u3067\u304D\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u796D\u58C7\u306E\u307E\u308F\u308A\u306F\u5B89\u5168\u5730\u5E2F\u3002\u9B54\u7269\u306F\u5165\u3063\u3066\u3053\u3089\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30AF\u30EA\u30C3\u30AF\u304B F \u30AD\u30FC\u3067\u5263\u3092\u632F\u308C\u307E\u3059\u3002\u7D9A\u3051\u3066\u62BC\u3059\u30683\u6BB5\u30B3\u30F3\u30DC","\u30D2\u30F3\u30C8\uFF1A\u6570\u5B57\u30AD\u30FC 1\u301C8 \u3067\u6301\u3061\u7269\u3092\u5207\u308A\u66FF\u3048\u3002\u7A7A\u306E\u30DE\u30B9\u3092\u9078\u3076\u3068\u7D20\u624B\u306B\u306A\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2\u3092\u6301\u3064\u3068\u3001Q\u30FBE\u30FBR \u3067 3 \u3064\u306E\u6280\u304C\u4F7F\u3048\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AB \u30AD\u30FC\u3067\u661F\u306E\u796D\u58C7\u306B\u623B\u308C\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u6728\u3092\u653B\u6483\u3059\u308B\u3068\u5207\u308A\u5012\u305B\u307E\u3059\u3002\u5730\u65B9\u3054\u3068\u306B\u9055\u3046\u6728\u6750\u304C\u624B\u306B\u5165\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AShift \u3092\u62BC\u3057\u306A\u304C\u3089\u79FB\u52D5\u3059\u308B\u3068\u8D70\u308C\u307E\u3059\uFF08\u30B9\u30DE\u30DB\u306F\u30B9\u30C6\u30A3\u30C3\u30AF\u3092\u7AEF\u307E\u3067\u5012\u3059\uFF09"],ap=zt("scene"),Ji=new Ro({canvas:ap,antialias:!0}),$o=window.matchMedia("(pointer: coarse)").matches;Ji.setPixelRatio(Math.min(window.devicePixelRatio,$o?1.5:2));Ji.setSize(window.innerWidth,window.innerHeight);Ji.shadowMap.enabled=!0;Ji.shadowMap.type=ch;Ji.outputColorSpace=De;var fr=new $a,Tn=new Un(60,window.innerWidth/window.innerHeight,.1,2600),ii,Ne,ae,Di,ys,_s,Ei=Wf(zt("popup-layer")),VE=()=>new Promise(i=>{requestAnimationFrame(()=>i()),setTimeout(i,50)}),$f=i=>new Promise(t=>setTimeout(t,i));function Jf(i,t){zt("progress-fill").style.width=i+"%",t&&(zt("loading-status").textContent=t)}async function WE(){zt("loading-tip").textContent=Zf[Math.floor(Math.random()*Zf.length)];let i=[["\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",async()=>{await document.fonts.ready}],["\u30D9\u30FC\u30B9\u30D7\u30EC\u30FC\u30C8\u3092\u751F\u6210\u4E2D...",async()=>{ii=Pf(fr,Ji,{lite:$o}),$o&&(Tn.far=1300)}],["\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u751F\u6210\u4E2D...",async()=>{Ne=zf(),fr.add(Ne.object),Cc(),ae=Of(Ne,ii),ae.respawn(),Di=Bf(zt("minimap"),ii),ys=Vf(fr,ii,zt("label-layer")),_s=Yf(fr,ii.groundHeight),ZE()}],["\u30B7\u30FC\u30F3\u3092\u6E96\u5099\u4E2D...",async()=>{Ji.compile(fr,Tn),Ji.render(fr,Tn)}]];for(let t=0;t<i.length;t++){let[e,n]=i[t];Jf(t/i.length*100,e),await VE(),await Promise.all([n(),$f(450)])}Jf(100,"\u5B8C\u4E86\uFF01"),await $f(400),zt("loading-screen").classList.add("fade"),zt("menu").classList.remove("hidden"),setTimeout(()=>zt("loading-screen").remove(),900),setTimeout(()=>Ne.wave(),900)}var ks="menu",cp=!0,lp=0,Zo=0,Rc=new O,Ac=new O,Hh=new O,Dh=new O,je={yaw:0,pitch:.35,dist:18},XE=6,qE=60;function hp(i,t){let e=ii.spawnPoint.clone().add(new O(0,3,0)),n=Math.sin(lp*.15)*.45+.35,s=20;i.set(e.x+Math.sin(n)*s,e.y+3.5,e.z+Math.cos(n)*s);let r=window.innerWidth>700,o=e.clone().sub(i).normalize(),a=new O().crossVectors(o,new O(0,1,0)).normalize();t.copy(e).addScaledVector(a,r?-4.2:0),r||(t.y-=1.5)}function YE(i,t){let e=ae.position;t.set(e.x,e.y+4.5,e.z);let n=Math.cos(je.pitch);i.set(t.x+Math.sin(je.yaw)*n*je.dist,t.y+Math.sin(je.pitch)*je.dist,t.z+Math.cos(je.yaw)*n*je.dist);let s=Math.max(ii.groundHeight(i.x,i.z),ii.waterLevel)+.8;i.y<s&&(i.y=s)}function ZE(){hp(Rc,Ac),Tn.position.copy(Rc),Tn.lookAt(Ac)}function $E(i){Zo+=i,ks==="menu"?(cp&&(lp+=i),hp(Hh,Dh)):YE(Hh,Dh);let t=ks==="menu"?3:4+Zo*Zo*80,e=1-Math.exp(-i*t);Rc.lerp(Hh,e),Ac.lerp(Dh,e),Tn.position.copy(Rc),Tn.lookAt(Ac)}var xs=Ff(ap,{joystickEl:zt("joystick"),jumpBtnEl:zt("btn-jump"),attackBtnEl:zt("btn-attack"),skillBtnsEl:zt("skill-btns"),onKey(i){i==="Escape"?Di.expanded?Di.expanded=!1:pp():i==="KeyM"?Di.expanded=!Di.expanded:i==="KeyH"?zt("help").classList.toggle("hidden"):/^Digit[1-8]$/.test(i)?dp(Number(i.slice(5))-1):i==="KeyB"&&!Es&&(ae.respawn(Math.PI),je.yaw=0,Mi("\u661F\u306E\u796D\u58C7\u306B\u623B\u308A\u307E\u3057\u305F"))}});function Kf(){let{dx:i,dy:t,zoom:e}=xs.consumeLook();je.yaw-=i*.006,je.pitch=Rn.clamp(je.pitch+t*.005,-.2,1.35),je.dist=Rn.clamp(je.dist*(1+e*.001),XE,qE)}function kh(){let{forward:i,right:t}=xs.move(),e=-Math.sin(je.yaw),n=-Math.cos(je.yaw),s=Math.cos(je.yaw),r=-Math.sin(je.yaw);return{x:e*i+s*t,z:n*i+r*t}}var Wt={level:1,exp:0,hp:100,maxHp:100,atk:10,stamina:100,maxStamina:100},Yo=!1,Uh=0;function JE(i,t,e){let n=t&&e&&!Yo&&!ae.swimming;n?(Wt.stamina=Math.max(0,Wt.stamina-20*i),Uh=0,Wt.stamina<=0&&(Yo=!0,Mi("\u606F\u304C\u5207\u308C\u305F\u2026"))):(Uh+=i,Uh>.5&&(Wt.stamina=Math.min(Wt.maxStamina,Wt.stamina+32*i)),Yo&&Wt.stamina>=Wt.maxStamina*.3&&(Yo=!1));let s=zt("stamina-fill");return s.style.width=Wt.stamina/Wt.maxStamina*100+"%",s.classList.toggle("tired",Yo),zt("stamina-bar").classList.toggle("full",Wt.stamina>=Wt.maxStamina),n}var Oh=()=>Wt.level*20,pr=0,Es=!1;function gr(){zt("lv").textContent=Wt.level,zt("hp-now").textContent=Math.max(0,Math.ceil(Wt.hp)),zt("hp-max").textContent=Wt.maxHp;let i=Math.max(0,Wt.hp)/Wt.maxHp;zt("hp-fill").style.width=i*100+"%",zt("hp-fill").classList.toggle("low",i<.3),zt("exp-fill").style.width=Wt.exp/Oh()*100+"%"}var oo=()=>ae.position.clone().setY(ae.position.y+5.5);function up(i){for(Wt.exp+=i,Ei.add(oo(),`+${i} EXP`,"exp");Wt.exp>=Oh();)Wt.exp-=Oh(),Wt.level++,Wt.maxHp+=15,Wt.hp=Wt.maxHp,Wt.atk+=3,Ei.add(oo().setY(ae.position.y+7),"LEVEL UP!","levelup"),Mi(`\u30EC\u30D9\u30EB ${Wt.level} \u306B\u306A\u3063\u305F\uFF01 HP \u3068\u653B\u6483\u529B\u304C\u4E0A\u304C\u3063\u305F`),Ne.wave();gr()}var pn=Cf(),_i=-1;function KE(){let i=pn.held;return wc[i?.moveset??"fists"]}function Cc(){let i=zt("hotbar");if(!i.children.length)for(let e=0;e<vc;e++){let n=document.createElement("button");n.className="slot",n.innerHTML=`<span class="slot-key">${e+1}</span><span class="slot-icon"></span><span class="slot-count"></span>`,n.addEventListener("pointerdown",s=>{s.preventDefault(),dp(e)}),i.appendChild(n)}pn.slots.forEach((e,n)=>{let s=i.children[n];s.classList.toggle("selected",n===pn.selected),s.classList.toggle("empty",!e),s.classList.toggle("blood",!!e&&gs[e.id].rarity==="blood"),s.title=e?jE(gs[e.id]):"\u7A7A\u304D\uFF08\u7D20\u624B\uFF09",s.querySelector(".slot-icon").innerHTML=e?gs[e.id].icon:"",s.querySelector(".slot-count").textContent=e&&e.count>1?e.count:""}),Ne.setHeld(pn.held?.held??null),Ne.setTrailColor(pn.held?.trail);let t=pn.held;Ne.setStance(t?t.stance??"item":"fists")}function jE(i){let t=`${i.name}\uFF1A${i.desc}`;i.passive&&(t+=`
\u7279\u6027\u3010${i.passive.name}\u3011${i.passive.desc}`);for(let e of i.skills??[])t+=`
\u6280\u3010${Zi[e].name}\u3011\uFF08${Zi[e].key}\uFF09${Zi[e].desc}`;return i.power&&(t+=`
\u653B\u6483\u529B \xD7${i.power}`),i.category==="wood"&&(t+=`
\u8010\u4E45\u529B ${i.durability}\u3000\u7279\u6027\u3010${i.trait.name}\u3011${i.trait.desc}`),t}var jf;function dp(i){if(se.current||_i>=0||Jn||Es)return;pn.selected=i,se.step=-1,Cc();let t=pn.held,e=zt("held-name");oM(t),e.textContent=t?t.skills?`${t.name}\u3000${t.skills.map(n=>`${Zi[n].key}\u300C${Zi[n].name}\u300D`).join(" ")}`:t.name:"\u7D20\u624B",e.classList.remove("hidden"),clearTimeout(jf),jf=setTimeout(()=>e.classList.add("hidden"),1500)}function QE(){let i=pn.held;if(i?.kind==="consumable"){if(se.current||_i>=0)return;if(i.heal&&Wt.hp>=Wt.maxHp){Mi("HP \u306F\u6E80\u30BF\u30F3\u3067\u3059");return}Ne.drink()&&(_i=0);return}eM()}function tM(i){if(_i<0)return;let t=_i;if(_i+=i,t<.55&&_i>=.55){let e=pn.held;if(e?.heal){let n=Math.min(e.heal,Wt.maxHp-Wt.hp);Wt.hp+=n,Ei.add(oo(),`+${Math.round(n)}`,"heal"),gr()}pn.consumeHeld(),Cc()}_i>=.9&&(_i=-1)}var se={current:null,moves:wc.sword,step:-1,time:0,hit:!1,queued:0,sinceEnd:99,speed:1},mr=0,$i=0;function eM(){if(Es||Jn)return;let i=KE();if(se.current){se.queued=Math.min(se.queued+1,se.moves.length-1-se.step);return}let t=se.moves===i&&se.sinceEnd<Lf&&se.step<i.length-1;se.moves=i,fp(t?se.step+1:0)}function fp(i){let t=kh();Math.hypot(t.x,t.z)>.3&&ae.setFacing(Math.atan2(t.x,t.z));let e=se.moves[i],n=pn.held?.speed??1;if(!Ne.attack(e.anim,n))return;Object.assign(se,{current:e,step:i,time:0,hit:!1,hitIdx:0,speed:n});let s=ae.facing;ae.knockback(Math.sin(s)*e.lunge,Math.cos(s)*e.lunge,e.hop),mM(i)}function nM(i){if(!se.current){se.sinceEnd+=i;return}se.time+=i*se.speed;let t=se.current.hitTimes??[se.current.hitTime];for(;se.hitIdx<t.length&&se.time>=t[se.hitIdx];)se.hitIdx++,iM(se.current);se.time>=se.current.duration&&(se.current=null,se.sinceEnd=0,se.queued>0&&se.step<se.moves.length-1?(se.queued--,fp(se.step+1)):se.queued=0)}function Pc(){let i=pn.held,t=i?.kind==="weapon"?i.power??1:1;return In&&(t*=In.atk),i?.passive?.id==="thirst"&&Wt.hp<Wt.maxHp/2&&(t*=1.3),t}function iM(i){let t=pn.held,e=t?.passive?.id==="heavy",n=ys.attack(ae.position,ae.facing,{range:i.range*(e?1.1:1),arc:i.arc,damage:Wt.atk*i.power*Pc(),knockback:i.knockback*(e?1.7:1),bleed:t?.passive?.id==="bleed"});if(n.length&&(mr=i.hitStop*(e?1.5:1),$i=Math.max($i,i.shake*(e?1.5:1)),t?.rarity==="blood"))for(let s of n)_s.burst(s.pos,8,5);Gh(n),rM(i),In?.waves&&t?.rarity==="blood"&&sM()}function sM(){let i=new O(Math.sin(ae.facing),0,Math.cos(ae.facing)),t=ae.position.clone().addScaledVector(i,1.5);t.y+=2.6;let e=new Set;_s.crescent(t,i,{onMove(n){let s=ys.hitArea(r=>!e.has(r)&&Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<3+r.T.radius&&Math.abs(r.pos.y+2-n.y)<4,{damage:Wt.atk*.9*Pc(),knockback:.8,from:n});for(let r of s)e.add(r.enemy),_s.burst(r.pos,10,6);Gh(s)}})}var Qf=new Set;function rM(i){let t=ii.chopTrees(ae.position,ae.facing,{range:i.range,arc:i.arc,damage:Wt.atk*i.power*Pc()});for(let e of t){if(_s.chips(e.pos,e.felled?14:6),Ei.add(e.pos.clone().setY(e.pos.y+2),String(e.damage),"chop"),!e.felled)continue;let n=gs[e.woodId],s=pn.add(e.woodId,e.amount),r=e.amount-s;r>0&&Ei.add(oo(),`+${r} ${n.name}`,"loot"),s>0&&Mi("\u6301\u3061\u7269\u304C\u3044\u3063\u3071\u3044\u3067\u3001\u6728\u6750\u3092\u6301\u3061\u304D\u308C\u306A\u3044\u2026"),Cc(),r>0&&!Qf.has(e.woodId)&&(Qf.add(e.woodId),Mi(`${n.name}\u3092\u624B\u306B\u5165\u308C\u305F\uFF01\u3000\u7279\u6027\u3010${n.trait.name}\u3011`,3200))}t.length&&!mr&&($i=Math.max($i,.08))}var tp;function oM(i){let t=zt("item-card");if(!i||i.category!=="wood"){t.classList.add("hidden");return}let e=Object.keys(dr).filter(s=>!i.resist[s]),n=Object.keys(dr).filter(s=>i.resist[s]);t.innerHTML=`
    <div class="card-head">${i.icon}<div><b>${i.name}</b><small>${i.desc}</small></div></div>
    <div class="card-row"><span>\u8010\u4E45\u529B</span><div class="card-bar"><div style="width:${Math.min(100,i.durability/2)}%"></div></div><b>${i.durability}</b></div>
    <div class="card-row trait"><span>\u7279\u6027</span><p><b>${i.trait.name}</b>\uFF1A${i.trait.desc}</p></div>
    ${n.length?`<div class="card-row good"><span>\u5F37\u3044</span><p>${n.map(s=>`${dr[s].name}\uFF08${dr[s].where}\u3067\u3082\u5E73\u6C17\uFF09`).join("\u3001")}</p></div>`:""}
    ${e.length?`<div class="card-row bad"><span>\u5F31\u70B9</span><p>${e.map(s=>`${dr[s].name}\uFF1A${dr[s].effect}`).join("<br>")}</p></div>`:""}
    <div class="card-note">\u203B \u62E0\u70B9\u3092\u5EFA\u3066\u305F\u5834\u6240\u306E\u74B0\u5883\u3067\u3001\u7279\u6027\u3068\u5F31\u70B9\u304C\u52B9\u304F\u3088\u3046\u306B\u306A\u308A\u307E\u3059</div>`,t.classList.remove("hidden"),clearTimeout(tp),tp=setTimeout(()=>t.classList.add("hidden"),6e3)}function Gh(i){let t=0;for(let s of i)t+=s.damage,Ei.add(s.pos,String(s.damage),s.damage>Wt.atk*1.6?"crit":""),s.killed&&(Mi(`${s.name} \u3092\u305F\u304A\u3057\u305F\uFF01`),up(s.exp));let e=pn.held,n=(e?.passive?.id==="lifesteal"?e.passive.rate:0)+(In?.lifesteal??0);if(n>0&&t>0&&Wt.hp<Wt.maxHp){let s=Math.max(1,Math.round(t*n));Wt.hp=Math.min(Wt.maxHp,Wt.hp+s),Ei.add(oo(),`+${s}`,"heal"),gr()}}function aM(i){Ei.add(i.pos,String(i.damage),"bleed"),i.killed&&(Mi(`${i.name} \u306F\u8840\u3092\u6D41\u3057\u3066\u5012\u308C\u305F\u2026`),up(i.exp))}var Jn=null,ro={},Jo=0,In=null,Fh=0,Bh={get player(){return ae},get character(){return Ne},get enemies(){return ys},get fx(){return _s},stats:Wt,power:i=>Wt.atk*i*Pc(),applyHits:i=>Gh(i),invuln:i=>{Jo=Math.max(Jo,i)},shake:i=>{$i=Math.max($i,i)},hitStop:i=>{mr=Math.max(mr,i)},screenFlash:i=>cM(i),fovKick:i=>{Fh=i},toast:i=>Mi(i),popup:(i,t,e)=>Ei.add(i,t,e),startBuff:i=>uM(i)};function cM(i){let t=zt("blood-flash");t.style.transition="none",t.style.opacity=i,requestAnimationFrame(()=>{t.style.transition="opacity .5s ease",t.style.opacity=0})}function lM(i){let e=pn.held?.skills?.[i];if(!e||Es||Jn||se.current||_i>=0)return;let n=Zi[e],s=zt("skills").children[i];if((ro[e]??0)>0){s?.classList.remove("denied"),s?.offsetWidth,s?.classList.add("denied");return}if(n.canUse&&!n.canUse(Bh))return;let r=kh();Math.hypot(r.x,r.z)>.3&&ae.setFacing(Math.atan2(r.x,r.z)),Ne.attack(n.anim),Jn={def:n,t:0,s:{}},n.start(Bh,Jn.s),ro[e]=n.cooldown,se.step=-1,gr(),dM(n.name)}function hM(i,t){for(let n of Object.keys(ro))ro[n]=Math.max(0,ro[n]-i);Jo=Math.max(0,Jo-i),Jn&&(Jn.t+=i,Jn.def.update(Bh,Jn.s,Jn.t,i),Jn.t>=Jn.def.duration&&(Jn=null)),In&&(In.time-=i,In.time<=0&&Vh()),Fh*=Math.exp(-t*5);let e=60+Fh;Math.abs(Tn.fov-e)>.01&&(Tn.fov=e,Tn.updateProjectionMatrix())}function uM(i){Vh(),In={...i,aura:_s.aura(Ne.object)},Ne.setGlow(2.4),zt("blood-vignette").classList.add("on"),Mi(`${i.name}\uFF1A\u529B\u304C\u6EA2\u308C\u51FA\u3059\u2026\uFF01\u3000\u5263\u3092\u632F\u308B\u3068\u8840\u306E\u65AC\u6483\u304C\u98DB\u3076`)}function Vh(){In&&(In.aura.stop(),In=null,Ne.setGlow(1),zt("blood-vignette").classList.remove("on"))}var ep;function dM(i){let t=zt("skill-name");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(ep),ep=setTimeout(()=>t.classList.add("hidden"),1200)}function fM(){let t=pn.held?.skills??[],e=zt("skills");e.classList.toggle("hidden",!t.length),zt("skill-btns").classList.toggle("hidden",!t.length),e.dataset.set!==t.join()&&(e.innerHTML=t.map(s=>`<div class="skill"><span class="skill-key">${Zi[s].key}</span><span class="skill-cd"></span><span class="skill-label">${Zi[s].name}</span></div>`).join(""),e.dataset.set=t.join()),t.forEach((s,r)=>{let o=Zi[s],a=ro[s]??0,c=e.children[r];c.querySelector(".skill-cd").textContent=a>0?Math.ceil(a):"",c.style.setProperty("--cd",a/o.cooldown),c.classList.toggle("ready",a<=0);let l=zt("skill-btns").children[r];l&&l.style.setProperty("--cd",a/o.cooldown)});let n=zt("buff");n.classList.toggle("hidden",!In),In&&(n.textContent=`${In.name}\u3000${In.time.toFixed(1)}\u79D2`)}var zh=0,np=new O;function pM(i){pn.held?.rarity==="blood"&&(zh-=i,!(zh>0)&&(zh=In?.08:.4,Ne.bladeTip(np)&&_s.burst(np,1,In?2:.4)))}var ip;function mM(i){let t=zt("combo"),e=se.moves.map((n,s)=>`${"\u2460\u2461\u2462\u2463"[s]} ${n.name}`);t.dataset.set!==e.join()&&(t.innerHTML=e.map(n=>`<span>${n}</span>`).join(""),t.dataset.set=e.join()),t.classList.remove("hidden"),t.querySelectorAll("span").forEach((n,s)=>{n.classList.toggle("done",s<i),n.classList.toggle("now",s===i)}),clearTimeout(ip),ip=setTimeout(()=>t.classList.add("hidden"),1400)}function gM(i,t,e){if(pr>0||Jo>0||Es)return;Wt.hp-=i,pr=1,Ne.hurt(),Ei.add(oo(),`-${i}`,"hurt");let n=zt("hurt-vignette");n.classList.add("on"),requestAnimationFrame(()=>n.classList.remove("on"));let s=ae.position.x-t,r=ae.position.z-e,o=Math.hypot(s,r)||1;ae.knockback(s/o*14,r/o*14,14),gr(),Wt.hp<=0&&xM()}function xM(){Es=!0,se.current=null,se.queued=0,_i=-1,Jn=null,Vh(),Ne.setFainted(!0),ys.calmDown(),zt("faint").classList.remove("hidden"),setTimeout(()=>{zt("faint").classList.add("hidden"),Wt.hp=Wt.maxHp,Es=!1,Ne.setFainted(!1),ae.respawn(Math.PI),je.yaw=0,pr=2,gr()},2800)}var Nh=!1;function yM(){ae.grounded&&ae.groundKind==="goal"&&!Nh&&(Nh=!0,Ne.wave(),Mi("\u5854\u306E\u3066\u3063\u307A\u3093\u306E\u30AF\u30EA\u30B9\u30BF\u30EB\u306B\u305F\u3069\u308A\u7740\u3044\u305F\uFF01",3500)),ae.groundKind==="spawn"&&(Nh=!1)}var Sc=null;function _M(){let i=ae.position,t=null;for(let e of Xo)Math.hypot(i.x-e.x,i.z-e.z)<e.r+4&&(t=e.name);if(!t&&ae.groundKind==="bridge"){let e=1/0;for(let n of ii.bridges){let s=(n.from[0]+n.to[0])/2,r=(n.from[1]+n.to[1])/2,o=Math.hypot(i.x-s,i.z-r);o<e&&(e=o,t=n.name)}}t||(t=ii.islandAt(i.x,i.z)?.name??Sc),t&&t!==Sc&&EM(t),Sc=t}var sp;function EM(i){let t=zt("area-banner");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(sp),sp=setTimeout(()=>t.classList.add("hidden"),3200)}function MM(){ks="ingame",Zo=0,ae.respawn(Math.PI),je.yaw=0,je.pitch=.35,je.dist=18,xs.enabled=!0,Wt.hp=Wt.maxHp,gr(),zt("menu").classList.add("hidden"),zt("ingame").classList.remove("hidden"),Di.resize(),Sc=null}function pp(){ks="menu",Zo=0,xs.enabled=!1,Di.expanded=!1,ys.calmDown(),Ei.clear(),ae.respawn(),zt("ingame").classList.add("hidden"),zt("menu").classList.remove("hidden")}var rp;function Mi(i,t=2200){let e=zt("toast-msg");e.textContent=i,e.classList.remove("hidden"),clearTimeout(rp),rp=setTimeout(()=>e.classList.add("hidden"),t)}zt("btn-play").addEventListener("click",MM);zt("btn-back").addEventListener("click",pp);zt("minimap").addEventListener("click",()=>{Di.expanded=!Di.expanded});zt("btn-avatar").addEventListener("click",()=>{Ne.wave(),Mi("\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u7DE8\u96C6\u306F\u6E96\u5099\u4E2D\u3067\u3059")});var op=document.documentElement;op.requestFullscreen&&$o&&(zt("btn-fullscreen").classList.remove("hidden"),zt("btn-fullscreen").addEventListener("click",async()=>{try{await op.requestFullscreen({navigationUI:"hide"}),await screen.orientation?.lock?.("landscape").catch(()=>{})}catch{}}));var mp=window.matchMedia("(orientation: portrait)"),gp=()=>zt("rotate-tip").classList.toggle("hidden",!($o&&mp.matches));mp.addEventListener?.("change",gp);gp();document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault());zt("btn-settings").addEventListener("click",()=>zt("settings-panel").classList.remove("hidden"));document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",()=>i.closest(".popup").classList.add("hidden")));zt("opt-shadows").addEventListener("change",i=>{ii.sun.castShadow=i.target.checked});zt("opt-orbit").addEventListener("change",i=>{cp=i.target.checked});zt("opt-stepped").addEventListener("change",i=>{Ne.stepped=i.target.checked});window.addEventListener("resize",()=>{Tn.aspect=window.innerWidth/window.innerHeight,Tn.updateProjectionMatrix(),Ji.setSize(window.innerWidth,window.innerHeight),Di?.resize()});var vM=new cc,wM=zt("coords");function xp(){requestAnimationFrame(xp);let i=Math.min(vM.getDelta(),.05);if(!ii||!ae)return;let t=mr>0?i*.05:i;mr=Math.max(0,mr-i);let e=ks==="ingame"&&!Es;if(e){Kf(),xs.consumeAttack()&&QE();let n=xs.consumeSkill();n>=0&&lM(n);let s=Ne.attacking||_i>=0||Jn?{x:0,z:0}:kh(),r=Math.hypot(s.x,s.z)>.1,o=JE(t,xs.run(),r);ae.update(t,{...s,jump:xs.jump()&&!Ne.attacking,run:o}),yM(),_M()}else ks==="ingame"&&Kf(),xs.consumeAttack(),ae.update(t,{x:0,z:0,jump:!1});if(nM(t),tM(t),hM(t,i),pM(t),_s.update(t),pr=Math.max(0,pr-t),Ne.object.visible=!(pr>0&&!Es&&Math.floor(pr*12)%2===0),ys.update(t,{playerPos:ae.position,playerActive:e,playerSwimming:ae.swimming,onHitPlayer:gM,onBleed:aM}),ii.update(t,ae.position,Tn.position),$E(i),$i>.001&&(Tn.position.x+=(Math.random()-.5)*$i,Tn.position.y+=(Math.random()-.5)*$i,$i*=Math.exp(-i*14)),Ji.render(fr,Tn),ys.updateLabels(Tn),Ei.update(t,Tn),ks==="ingame"&&fM(),ks==="ingame"){Di.draw(ae.position,ae.facing,je.yaw,ys.alive());let n=ae.position;wM.textContent=`X ${n.x.toFixed(0)}  Y ${n.y.toFixed(0)}  Z ${n.z.toFixed(0)}`}}window.addEventListener("error",i=>{let t=zt("loading-status");t&&(t.textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message)});WE().catch(i=>{zt("loading-status").textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message,console.error(i)});xp();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
