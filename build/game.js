(()=>{var Cl="160";var Af=0,uh=1,Rf=2;var Wu=1,Pl=2,Yi=3,ms=0,An=1,le=2;var fs=0,gr=1,Fn=2,dh=3,fh=4,Cf=5,Us=100,Pf=101,If=102,ph=103,mh=104,Lf=200,Df=201,Uf=202,Hf=203,zc=204,Oc=205,Nf=206,zf=207,Of=208,Ff=209,Bf=210,kf=211,Gf=212,Vf=213,Wf=214,Xf=0,qf=1,Yf=2,jo=3,Zf=4,$f=5,Jf=6,Kf=7,Il=0,jf=1,Qf=2,ps=0,tp=1,ep=2,np=3,ip=4,sp=5,rp=6;var Xu=300,_r=301,vr=302,Fc=303,Bc=304,Ha=306,kc=1e3,pi=1001,Gc=1002,mn=1003,gh=1004;var ic=1005;var On=1006,op=1007;var Kr=1008;var Ai=1009,ap=1010,cp=1011,Ll=1012,qu=1013,us=1014,ds=1015,jr=1016,Yu=1017,Zu=1018,Ns=1020,lp=1021,mi=1023,hp=1024,up=1025,zs=1026,Mr=1027,Dl=1028,$u=1029,dp=1030,Ju=1031,Ku=1033,sc=33776,rc=33777,oc=33778,ac=33779,xh=35840,yh=35841,_h=35842,vh=35843,ju=36196,Mh=37492,Eh=37496,wh=37808,bh=37809,Sh=37810,Th=37811,Ah=37812,Rh=37813,Ch=37814,Ph=37815,Ih=37816,Lh=37817,Dh=37818,Uh=37819,Hh=37820,Nh=37821,cc=36492,zh=36494,Oh=36495,fp=36283,Fh=36284,Bh=36285,kh=36286;var Qo=2300,ta=2301,lc=2302,Gh=2400,Vh=2401,Wh=2402;var Qu=3e3,Os=3001,pp=3200,mp=3201,Ul=0,gp=1,oi="",Le="srgb",Ji="srgb-linear",Hl="display-p3",Na="display-p3-linear",ea="linear",Ie="srgb",na="rec709",ia="p3";var Zs=7680;var Xh=519,xp=512,yp=513,_p=514,td=515,vp=516,Mp=517,Ep=518,wp=519,qh=35044;var Yh="300 es",Vc=1035,$i=2e3,sa=2001,gs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=1234567,Wr=Math.PI/180,Qr=180/Math.PI;function Vs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function an(i,t,e){return Math.max(t,Math.min(e,i))}function Nl(i,t){return(i%t+t)%t}function bp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Sp(i,t,e){return i!==t?(e-i)/(t-i):0}function Xr(i,t,e){return(1-e)*i+e*t}function Tp(i,t,e,n){return Xr(i,t,1-Math.exp(-e*n))}function Ap(i,t=1){return t-Math.abs(Nl(i,t*2)-t)}function Rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ip(i,t){return i+Math.random()*(t-i)}function Lp(i){return i*(.5-Math.random())}function Dp(i){i!==void 0&&(Zh=i);let t=Zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Up(i){return i*Wr}function Hp(i){return i*Qr}function Wc(i){return(i&i-1)===0&&i!==0}function Np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ra(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ur(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var kn={DEG2RAD:Wr,RAD2DEG:Qr,generateUUID:Vs,clamp:an,euclideanModulo:Nl,mapLinear:bp,inverseLerp:Sp,lerp:Xr,damp:Tp,pingpong:Ap,smoothstep:Rp,smootherstep:Cp,randInt:Pp,randFloat:Ip,randFloatSpread:Lp,seededRandom:Dp,degToRad:Up,radToDeg:Hp,isPowerOfTwo:Wc,ceilPowerOfTwo:Np,floorPowerOfTwo:ra,setQuaternionFromProperEuler:zp,normalize:Nn,denormalize:ur},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],x=n[8],y=s[0],m=s[3],f=s[6],E=s[1],g=s[4],M=s[7],T=s[2],S=s[5],_=s[8];return r[0]=o*y+a*E+c*T,r[3]=o*m+a*g+c*S,r[6]=o*f+a*M+c*_,r[1]=l*y+h*E+u*T,r[4]=l*m+h*g+u*S,r[7]=l*f+h*M+u*_,r[2]=d*y+p*E+x*T,r[5]=d*m+p*g+x*S,r[8]=d*f+p*M+x*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,x=e*u+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hc.makeScale(t,e)),this}rotate(t){return this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},hc=new re;function ed(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Op(){let i=oa("canvas");return i.style.display="block",i}var $h={};function qr(i){i in $h||($h[i]=!0,console.warn(i))}var Jh=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kh=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[Ji]:{transfer:ea,primaries:na,toReference:i=>i,fromReference:i=>i},[Le]:{transfer:Ie,primaries:na,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Na]:{transfer:ea,primaries:ia,toReference:i=>i.applyMatrix3(Kh),fromReference:i=>i.applyMatrix3(Jh)},[Hl]:{transfer:Ie,primaries:ia,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Kh),fromReference:i=>i.applyMatrix3(Jh).convertLinearToSRGB()}},Fp=new Set([Ji,Na]),Te={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=wo[t].toReference,s=wo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return wo[i].primaries},getTransfer:function(i){return i===oi?ea:wo[i].transfer}};function xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function uc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,aa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$s===void 0&&($s=oa("canvas")),$s.width=t.width,$s.height=t.height;let n=$s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=oa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xr(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xr(e[n]/255)*255):e[n]=xr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bp=0,ca=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Vs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dc(s[o].image)):r.push(dc(s[o]))}else r=dc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,jn=class i extends gs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pi,s=pi,r=On,o=Kr,a=mi,c=Ai,l=i.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Vs(),this.name="",this.source=new ca(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Os?Le:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kc:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kc:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?Os:Qu}set encoding(t){qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Os?Le:oi}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Xu;jn.DEFAULT_ANISOTROPY=1;var Ne=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],x=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let g=(l+1)/2,M=(p+1)/2,T=(f+1)/2,S=(h+d)/4,_=(u+y)/4,A=(x+m)/4;return g>M&&g>T?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=S/n,r=_/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=A/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-x)*(m-x)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xc=class extends gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Os?Le:oi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ca(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ki=class extends Xc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},la=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qc=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=y;return}if(u!==y||c!==d||l!==p||h!==x){let m=1-a,f=c*d+l*p+h*x+u*y,E=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){let T=Math.sqrt(g),S=Math.atan2(T,f*E);m=Math.sin(m*S)/T,a=Math.sin(a*S)/T}let M=a*E;if(c=c*m+d*M,l=l*m+p*M,h=h*m+x*M,u=u*m+y*M,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*u+c*p-l*d,t[e+1]=c*x+h*d+l*u-a*p,t[e+2]=l*x+h*p+a*d-c*u,t[e+3]=h*x-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"YXZ":this._x=d*h*u+l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"ZXY":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u-d*p*x;break;case"ZYX":this._x=d*h*u-l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u+d*p*x;break;case"YZX":this._x=d*h*u+l*p*x,this._y=l*p*u+d*h*x,this._z=l*h*x-d*p*u,this._w=l*h*u-d*p*x;break;case"XZY":this._x=d*h*u-l*p*x,this._y=l*p*u-d*h*x,this._z=l*h*x+d*p*u,this._w=l*h*u+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fc.copy(this).projectOnVector(t),this.sub(fc)}reflect(t){return this.sub(fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(an(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new z,jh=new xs,me=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(t.matrixWorld),this.union(bo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zr),So.subVectors(this.max,zr),Js.subVectors(t.a,zr),Ks.subVectors(t.b,zr),js.subVectors(t.c,zr),os.subVectors(Ks,Js),as.subVectors(js,Ks),Cs.subVectors(Js,js);let e=[0,-os.z,os.y,0,-as.z,as.y,0,-Cs.z,Cs.y,os.z,0,-os.x,as.z,0,-as.x,Cs.z,0,-Cs.x,-os.y,os.x,0,-as.y,as.x,0,-Cs.y,Cs.x,0];return!pc(e,Js,Ks,js,So)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,Js,Ks,js,So))?!1:(To.crossVectors(os,as),e=[To.x,To.y,To.z],pc(e,Js,Ks,js,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gi=[new z,new z,new z,new z,new z,new z,new z,new z],ui=new z,bo=new me,Js=new z,Ks=new z,js=new z,os=new z,as=new z,Cs=new z,zr=new z,So=new z,To=new z,Ps=new z;function pc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ps.fromArray(i,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),c=t.dot(Ps),l=e.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Gp=new me,Or=new z,mc=new z,ys=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);let e=Or.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(mc)),this.expandByPoint(Or.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new z,gc=new z,Ao=new z,cs=new z,xc=new z,Ro=new z,yc=new z,ha=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,e),Vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gc.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),cs.copy(this.origin).sub(gc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=cs.dot(this.direction),c=-cs.dot(Ao),l=cs.lengthSq(),h=Math.abs(1-o*o),u,d,p,x;if(h>0)if(u=o*c-a,d=o*a-c,x=r*h,u>=0)if(d>=-x)if(d<=x){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(Ao,d),p}intersectSphere(t,e){Vi.subVectors(t.center,this.origin);let n=Vi.dot(this.direction),s=Vi.dot(Vi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,e,n,s,r){xc.subVectors(e,t),Ro.subVectors(n,t),yc.crossVectors(xc,Ro);let o=this.direction.dot(yc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,t);let c=a*this.direction.dot(Ro.crossVectors(cs,Ro));if(c<0)return null;let l=a*this.direction.dot(xc.cross(cs));if(l<0||c+l>o)return null;let h=-a*cs.dot(yc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,x,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,x,y,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,x,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=x,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,x=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+x*l,e[5]=d-y*l,e[9]=-a*c,e[2]=y-d*l,e[6]=x+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,x=l*h,y=l*u;e[0]=d+y*a,e[4]=x*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=y+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,x=l*h,y=l*u;e[0]=d-y*a,e[4]=-o*u,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,x=a*h,y=a*u;e[0]=c*h,e[4]=x*l-p,e[8]=d*l+y,e[1]=c*u,e[5]=y*l+d,e[9]=p*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=y-d*u,e[8]=x*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+x,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*c,p=o*l,x=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-x,e[2]=x*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Wp)}lookAt(t,e,n){let s=this.elements;return Jn.subVectors(t,e),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ls.crossVectors(n,Jn),ls.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ls.crossVectors(n,Jn)),ls.normalize(),Co.crossVectors(Jn,ls),s[0]=ls.x,s[4]=Co.x,s[8]=Jn.x,s[1]=ls.y,s[5]=Co.y,s[9]=Jn.y,s[2]=ls.z,s[6]=Co.z,s[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],x=n[2],y=n[6],m=n[10],f=n[14],E=n[3],g=n[7],M=n[11],T=n[15],S=s[0],_=s[4],A=s[8],v=s[12],w=s[1],b=s[5],N=s[9],L=s[13],R=s[2],D=s[6],F=s[10],H=s[14],U=s[3],O=s[7],V=s[11],q=s[15];return r[0]=o*S+a*w+c*R+l*U,r[4]=o*_+a*b+c*D+l*O,r[8]=o*A+a*N+c*F+l*V,r[12]=o*v+a*L+c*H+l*q,r[1]=h*S+u*w+d*R+p*U,r[5]=h*_+u*b+d*D+p*O,r[9]=h*A+u*N+d*F+p*V,r[13]=h*v+u*L+d*H+p*q,r[2]=x*S+y*w+m*R+f*U,r[6]=x*_+y*b+m*D+f*O,r[10]=x*A+y*N+m*F+f*V,r[14]=x*v+y*L+m*H+f*q,r[3]=E*S+g*w+M*R+T*U,r[7]=E*_+g*b+M*D+T*O,r[11]=E*A+g*N+M*F+T*V,r[15]=E*v+g*L+M*H+T*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],x=t[3],y=t[7],m=t[11],f=t[15];return x*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+y*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],x=t[12],y=t[13],m=t[14],f=t[15],E=u*m*l-y*d*l+y*c*p-a*m*p-u*c*f+a*d*f,g=x*d*l-h*m*l-x*c*p+o*m*p+h*c*f-o*d*f,M=h*y*l-x*u*l+x*a*p-o*y*p-h*a*f+o*u*f,T=x*u*c-h*y*c-x*a*d+o*y*d+h*a*m-o*u*m,S=e*E+n*g+s*M+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/S;return t[0]=E*_,t[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*_,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*f+n*c*f)*_,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*_,t[4]=g*_,t[5]=(h*m*r-x*d*r+x*s*p-e*m*p-h*s*f+e*d*f)*_,t[6]=(x*c*r-o*m*r-x*s*l+e*m*l+o*s*f-e*c*f)*_,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*_,t[8]=M*_,t[9]=(x*u*r-h*y*r-x*n*p+e*y*p+h*n*f-e*u*f)*_,t[10]=(o*y*r-x*a*r+x*n*l-e*y*l-o*n*f+e*a*f)*_,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*_,t[12]=T*_,t[13]=(h*y*s-x*u*s+x*n*d-e*y*d-h*n*m+e*u*m)*_,t[14]=(x*a*s-o*y*s-x*n*c+e*y*c+o*n*m-e*a*m)*_,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*_,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,x=r*u,y=o*h,m=o*u,f=a*u,E=c*l,g=c*h,M=c*u,T=n.x,S=n.y,_=n.z;return s[0]=(1-(y+f))*T,s[1]=(p+M)*T,s[2]=(x-g)*T,s[3]=0,s[4]=(p-M)*S,s[5]=(1-(d+f))*S,s[6]=(m+E)*S,s[7]=0,s[8]=(x+g)*_,s[9]=(m-E)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),a=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],di.copy(this);let l=1/r,h=1/o,u=1/a;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,e.setFromRotationMatrix(di),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=$i){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(a===$i)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===sa)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=$i){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h,x,y;if(a===$i)x=(o+r)*u,y=-2*u;else if(a===sa)x=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qs=new z,di=new ze,Vp=new z(0,0,0),Wp=new z(1,1,1),ls=new z,Co=new z,Jn=new z,Qh=new ze,tu=new xs,ua=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ua.DEFAULT_ORDER="XYZ";var da=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xp=0,eu=new z,tr=new xs,Wi=new ze,Po=new z,Fr=new z,qp=new z,Yp=new xs,nu=new z(1,0,0),iu=new z(0,1,0),su=new z(0,0,1),Zp={type:"added"},$p={type:"removed"},cn=class i extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new ua,n=new xs,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new re}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Po.copy(t):Po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Fr,Po,this.up):Wi.lookAt(Po,Fr,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Wi),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Zp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($p)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};cn.DEFAULT_UP=new z(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new z,Xi=new z,_c=new z,qi=new z,er=new z,nr=new z,ru=new z,vc=new z,Mc=new z,Ec=new z,Io=!1,dr=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fi.subVectors(t,e),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fi.subVectors(s,e),Xi.subVectors(n,e),_c.subVectors(t,e);let o=fi.dot(fi),a=fi.dot(Xi),c=fi.dot(_c),l=Xi.dot(Xi),h=Xi.dot(_c),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,x=(o*h-a*c)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(t,e,n,s,r,o,a,c){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qi.x),c.addScaledVector(o,qi.y),c.addScaledVector(a,qi.z),c)}static isFrontFacing(t,e,n,s){return fi.subVectors(n,e),Xi.subVectors(t,e),fi.cross(Xi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),fi.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;er.subVectors(s,n),nr.subVectors(r,n),vc.subVectors(t,n);let c=er.dot(vc),l=nr.dot(vc);if(c<=0&&l<=0)return e.copy(n);Mc.subVectors(t,s);let h=er.dot(Mc),u=nr.dot(Mc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(er,o);Ec.subVectors(t,r);let p=er.dot(Ec),x=nr.dot(Ec);if(x>=0&&p<=x)return e.copy(r);let y=p*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(nr,a);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return ru.subVectors(r,s),a=(u-h)/(u-h+(p-x)),e.copy(s).addScaledVector(ru,a);let f=1/(m+y+d);return o=y*f,a=d*f,e.copy(n).addScaledVector(er,o).addScaledVector(nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function wc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Te.workingColorSpace){if(t=Nl(t,1),e=an(e,0,1),n=an(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wc(o,r,t+1/3),this.g=wc(o,r,t),this.b=wc(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}copyLinearToSRGB(t){return this.r=uc(t.r),this.g=uc(t.g),this.b=uc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Te.fromWorkingColorSpace(Sn.copy(this),t),Math.round(an(Sn.r*255,0,255))*65536+Math.round(an(Sn.g*255,0,255))*256+Math.round(an(Sn.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(Sn.copy(this),e);let n=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Le){Te.fromWorkingColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,s=Sn.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hs),this.setHSL(hs.h+t,hs.s+e,hs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hs),t.getHSL(Lo);let n=Xr(hs.h,Lo.h,e),s=Xr(hs.s,Lo.s,e),r=Xr(hs.l,Lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new rt;rt.NAMES=nd;var Jp=0,ji=class extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=gr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Oc,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==ms&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Oc&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Me=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Je=new z,Do=new ht,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ds,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),s=Nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qh&&(t.usage=this.usage),t}};var fa=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pa=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Kp=0,ri=new ze,bc=new cn,ir=new z,Kn=new me,Br=new me,on=new z,de=class i extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ed(t)?pa:fa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,n){return ri.makeTranslation(t,e,n),this.applyMatrix4(ri),this}scale(t,e,n){return ri.makeScale(t,e,n),this.applyMatrix4(ri),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new me);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Kn.min,Br.min),Kn.expandByPoint(on),on.addVectors(Kn.max,Br.max),Kn.expandByPoint(on)):(Kn.expandByPoint(Br.min),Kn.expandByPoint(Br.max))}Kn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(t,l),on.add(ir)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new z,h[w]=new z;let u=new z,d=new z,p=new z,x=new ht,y=new ht,m=new ht,f=new z,E=new z;function g(w,b,N){u.fromArray(s,w*3),d.fromArray(s,b*3),p.fromArray(s,N*3),x.fromArray(o,w*2),y.fromArray(o,b*2),m.fromArray(o,N*2),d.sub(u),p.sub(u),y.sub(x),m.sub(x);let L=1/(y.x*m.y-m.x*y.y);isFinite(L)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(L),E.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(L),l[w].add(f),l[b].add(f),l[N].add(f),h[w].add(E),h[b].add(E),h[N].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,b=M.length;w<b;++w){let N=M[w],L=N.start,R=N.count;for(let D=L,F=L+R;D<F;D+=3)g(n[D+0],n[D+1],n[D+2])}let T=new z,S=new z,_=new z,A=new z;function v(w){_.fromArray(r,w*3),A.copy(_);let b=l[w];T.copy(b),T.sub(_.multiplyScalar(_.dot(b))).normalize(),S.crossVectors(A,b);let L=S.dot(h[w])<0?-1:1;c[w*4]=T.x,c[w*4+1]=T.y,c[w*4+2]=T.z,c[w*4+3]=L}for(let w=0,b=M.length;w<b;++w){let N=M[w],L=N.start,R=N.count;for(let D=L,F=L+R;D<F;D+=3)v(n[D+0]),v(n[D+1]),v(n[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){let x=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,x=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let f=0;f<h;f++)d[x++]=l[p++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new ze,Is=new ha,Uo=new ys,au=new z,sr=new z,rr=new z,or=new z,Sc=new z,Ho=new z,No=new ht,zo=new ht,Oo=new ht,cu=new z,lu=new z,hu=new z,Fo=new z,Bo=new z,G=class extends cn{constructor(t=new de,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Sc.fromBufferAttribute(u,t),o?Ho.addScaledVector(Sc,h):Ho.addScaledVector(Sc.sub(e),h))}e.add(Ho)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Is.copy(t.ray).recast(t.near),!(Uo.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Uo,au)===null||Is.origin.distanceToSquared(au)>(t.far-t.near)**2))&&(ou.copy(r).invert(),Is.copy(t.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Is)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){let m=d[x],f=o[m.materialIndex],E=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,T=g;M<T;M+=3){let S=a.getX(M),_=a.getX(M+1),A=a.getX(M+2);s=ko(this,f,t,n,l,h,u,S,_,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){let E=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);s=ko(this,o,t,n,l,h,u,E,g,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){let m=d[x],f=o[m.materialIndex],E=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,T=g;M<T;M+=3){let S=M,_=M+1,A=M+2;s=ko(this,f,t,n,l,h,u,S,_,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=x,f=y;m<f;m+=3){let E=m,g=m+1,M=m+2;s=ko(this,o,t,n,l,h,u,E,g,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function jp(i,t,e,n,s,r,o,a){let c;if(t.side===An?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ms,a),c===null)return null;Bo.copy(a),Bo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Bo);return l<e.near||l>e.far?null:{distance:l,point:Bo.clone(),object:i}}function ko(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,sr),i.getVertexPosition(c,rr),i.getVertexPosition(l,or);let h=jp(i,t,e,n,sr,rr,or,Fo);if(h){s&&(No.fromBufferAttribute(s,a),zo.fromBufferAttribute(s,c),Oo.fromBufferAttribute(s,l),h.uv=dr.getInterpolation(Fo,sr,rr,or,No,zo,Oo,new ht)),r&&(No.fromBufferAttribute(r,a),zo.fromBufferAttribute(r,c),Oo.fromBufferAttribute(r,l),h.uv1=dr.getInterpolation(Fo,sr,rr,or,No,zo,Oo,new ht),h.uv2=h.uv1),o&&(cu.fromBufferAttribute(o,a),lu.fromBufferAttribute(o,c),hu.fromBufferAttribute(o,l),h.normal=dr.getInterpolation(Fo,sr,rr,or,cu,lu,hu,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new z,materialIndex:0};dr.getNormal(sr,rr,or,u.normal),h.face=u}return h}var vt=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function x(y,m,f,E,g,M,T,S,_,A,v){let w=M/_,b=T/A,N=M/2,L=T/2,R=S/2,D=_+1,F=A+1,H=0,U=0,O=new z;for(let V=0;V<F;V++){let q=V*b-L;for(let nt=0;nt<D;nt++){let X=nt*w-N;O[y]=X*E,O[m]=q*g,O[f]=R,l.push(O.x,O.y,O.z),O[y]=0,O[m]=0,O[f]=S>0?1:-1,h.push(O.x,O.y,O.z),u.push(nt/_),u.push(1-V/A),H+=1}}for(let V=0;V<A;V++)for(let q=0;q<_;q++){let nt=d+q+D*V,X=d+q+D*(V+1),K=d+(q+1)+D*(V+1),it=d+(q+1)+D*V;c.push(nt,X,it),c.push(X,K,it),U+=6}a.addGroup(p,U,v),p+=U,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Er(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function zn(i){let t={};for(let e=0;e<i.length;e++){let n=Er(i[e]);for(let s in n)t[s]=n[s]}return t}function Qp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function id(i){return i.getRenderTarget()===null?i.outputColorSpace:Te.workingColorSpace}var zl={clone:Er,merge:zn},tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ma=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=$i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Tn=class extends ma{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ar=-90,cr=1,Yc=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tn(ar,cr,t,e);s.layers=this.layers,this.add(s);let r=new Tn(ar,cr,t,e);r.layers=this.layers,this.add(r);let o=new Tn(ar,cr,t,e);o.layers=this.layers,this.add(o);let a=new Tn(ar,cr,t,e);a.layers=this.layers,this.add(a);let c=new Tn(ar,cr,t,e);c.layers=this.layers,this.add(c);let l=new Tn(ar,cr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===$i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ga=class extends jn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_r,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zc=class extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Os?Le:oi),this.texture=new ga(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:On}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vt(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:fs});r.uniforms.tEquirect.value=e;let o=new G(s,r),a=e.minFilter;return e.minFilter===Kr&&(e.minFilter=On),new Yc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Tc=new z,nm=new z,im=new re,Zi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Tc.subVectors(n,e).cross(nm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Tc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||im.getNormalMatrix(t),s=this.coplanarPoint(Tc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ls=new ys,Go=new z,to=class{constructor(t=new Zi,e=new Zi,n=new Zi,s=new Zi,r=new Zi,o=new Zi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$i){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],x=s[9],y=s[10],m=s[11],f=s[12],E=s[13],g=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-p,M-f).normalize(),n[1].setComponents(c+r,d+l,m+p,M+f).normalize(),n[2].setComponents(c+o,d+h,m+x,M+E).normalize(),n[3].setComponents(c-o,d-h,m-x,M-E).normalize(),n[4].setComponents(c-a,d-u,m-y,M-g).normalize(),e===$i)n[5].setComponents(c+a,d+u,m+y,M+g).normalize();else if(e===sa)n[5].setComponents(a,u,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sm(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,u,d),l.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,x=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&x.length===0&&i.bufferSubData(u,0,d),x.length!==0){for(let y=0,m=x.length;y<m;y++){let f=x[y];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Cn=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],x=[],y=[],m=[];for(let f=0;f<h;f++){let E=f*d-o;for(let g=0;g<l;g++){let M=g*u-r;x.push(M,-E,0),y.push(0,0,1),m.push(g/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){let g=E+l*f,M=E+l*(f+1),T=E+1+l*(f+1),S=E+1+l*f;p.push(g,M,S),p.push(M,T,S)}this.setIndex(p),this.setAttribute("position",new oe(x,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rm=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`
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
}`,zm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
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
#endif`,s0=`struct PhysicalMaterial {
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
}`,r0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_0=`#ifdef USE_MORPHNORMALS
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
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,dg=`#define DISTANCE
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
}`,fg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,Mg=`#define LAMBERT
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
}`,Eg=`#define MATCAP
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
}`,wg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Hg=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,zg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:rm,alphahash_pars_fragment:om,alphamap_fragment:am,alphamap_pars_fragment:cm,alphatest_fragment:lm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:dm,batching_pars_vertex:fm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:xm,iridescence_fragment:ym,bumpmap_pars_fragment:_m,clipping_planes_fragment:vm,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:wm,color_fragment:bm,color_pars_fragment:Sm,color_pars_vertex:Tm,color_vertex:Am,common:Rm,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Im,displacementmap_vertex:Lm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Um,colorspace_fragment:Hm,colorspace_pars_fragment:Nm,envmap_fragment:zm,envmap_common_pars_fragment:Om,envmap_pars_fragment:Fm,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:jm,envmap_vertex:km,fog_vertex:Gm,fog_pars_vertex:Vm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_fragment:Ym,lightmap_pars_fragment:Zm,lights_lambert_fragment:$m,lights_lambert_pars_fragment:Jm,lights_pars_begin:Km,lights_toon_fragment:Qm,lights_toon_pars_fragment:t0,lights_phong_fragment:e0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:s0,lights_fragment_begin:r0,lights_fragment_maps:o0,lights_fragment_end:a0,logdepthbuf_fragment:c0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:d0,map_pars_fragment:f0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:x0,morphcolor_vertex:y0,morphnormal_vertex:_0,morphtarget_pars_vertex:v0,morphtarget_vertex:M0,normal_fragment_begin:E0,normal_fragment_maps:w0,normal_pars_fragment:b0,normal_pars_vertex:S0,normal_vertex:T0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:I0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:U0,project_vertex:H0,dithering_fragment:N0,dithering_pars_fragment:z0,roughnessmap_fragment:O0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:k0,shadowmap_vertex:G0,shadowmask_pars_fragment:V0,skinbase_vertex:W0,skinning_pars_vertex:X0,skinning_vertex:q0,skinnormal_vertex:Y0,specularmap_fragment:Z0,specularmap_pars_fragment:$0,tonemapping_fragment:J0,tonemapping_pars_fragment:K0,transmission_fragment:j0,transmission_pars_fragment:Q0,uv_pars_fragment:tg,uv_pars_vertex:eg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:og,backgroundCube_frag:ag,cube_vert:cg,cube_frag:lg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:dg,distanceRGBA_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:xg,meshbasic_vert:yg,meshbasic_frag:_g,meshlambert_vert:vg,meshlambert_frag:Mg,meshmatcap_vert:Eg,meshmatcap_frag:wg,meshnormal_vert:bg,meshnormal_frag:Sg,meshphong_vert:Tg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Pg,meshtoon_frag:Ig,points_vert:Lg,points_frag:Dg,shadow_vert:Ug,shadow_frag:Hg,sprite_vert:Ng,sprite_frag:zg},xt={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ti={basic:{uniforms:zn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:zn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new rt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:zn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:zn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:zn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new rt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:zn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:zn([xt.points,xt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:zn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:zn([xt.common,xt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:zn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:zn([xt.sprite,xt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:zn([xt.common,xt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:zn([xt.lights,xt.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Ti.physical={uniforms:zn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Vo={r:0,b:0,g:0};function Og(i,t,e,n,s,r,o){let a=new rt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function x(m,f){let E=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?e:t).get(g)),g===null?y(a,c):g&&g.isColor&&(y(g,1),E=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ha)?(h===void 0&&(h=new G(new vt(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Er(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Te.getTransfer(g.colorSpace)!==Ie,(u!==g||d!==g.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new G(new Cn(2,2),new Rn({name:"BackgroundMaterial",uniforms:Er(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Te.getTransfer(g.colorSpace)!==Ie,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||d!==g.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,f){m.getRGB(Vo,id(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:x}}function Fg(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(R,D,F,H,U){let O=!1;if(o){let V=y(H,F,D);l!==V&&(l=V,p(l.object)),O=f(R,H,F,U),O&&E(R,H,F,U)}else{let V=D.wireframe===!0;(l.geometry!==H.id||l.program!==F.id||l.wireframe!==V)&&(l.geometry=H.id,l.program=F.id,l.wireframe=V,O=!0)}U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,A(R,D,F,H),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function x(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function y(R,D,F){let H=F.wireframe===!0,U=a[R.id];U===void 0&&(U={},a[R.id]=U);let O=U[D.id];O===void 0&&(O={},U[D.id]=O);let V=O[H];return V===void 0&&(V=m(d()),O[H]=V),V}function m(R){let D=[],F=[],H=[];for(let U=0;U<s;U++)D[U]=0,F[U]=0,H[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:H,object:R,attributes:{},index:null}}function f(R,D,F,H){let U=l.attributes,O=D.attributes,V=0,q=F.getAttributes();for(let nt in q)if(q[nt].location>=0){let K=U[nt],it=O[nt];if(it===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(it=R.instanceColor)),K===void 0||K.attribute!==it||it&&K.data!==it.data)return!0;V++}return l.attributesNum!==V||l.index!==H}function E(R,D,F,H){let U={},O=D.attributes,V=0,q=F.getAttributes();for(let nt in q)if(q[nt].location>=0){let K=O[nt];K===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));let it={};it.attribute=K,K&&K.data&&(it.data=K.data),U[nt]=it,V++}l.attributes=U,l.attributesNum=V,l.index=H}function g(){let R=l.newAttributes;for(let D=0,F=R.length;D<F;D++)R[D]=0}function M(R){T(R,0)}function T(R,D){let F=l.newAttributes,H=l.enabledAttributes,U=l.attributeDivisors;F[R]=1,H[R]===0&&(i.enableVertexAttribArray(R),H[R]=1),U[R]!==D&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,D),U[R]=D)}function S(){let R=l.newAttributes,D=l.enabledAttributes;for(let F=0,H=D.length;F<H;F++)D[F]!==R[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function _(R,D,F,H,U,O,V){V===!0?i.vertexAttribIPointer(R,D,F,U,O):i.vertexAttribPointer(R,D,F,H,U,O)}function A(R,D,F,H){if(n.isWebGL2===!1&&(R.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();let U=H.attributes,O=F.getAttributes(),V=D.defaultAttributeValues;for(let q in O){let nt=O[q];if(nt.location>=0){let X=U[q];if(X===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),X!==void 0){let K=X.normalized,it=X.itemSize,ft=e.get(X);if(ft===void 0)continue;let gt=ft.buffer,Gt=ft.type,Vt=ft.bytesPerElement,bt=n.isWebGL2===!0&&(Gt===i.INT||Gt===i.UNSIGNED_INT||X.gpuType===qu);if(X.isInterleavedBufferAttribute){let Ft=X.data,B=Ft.stride,ot=X.offset;if(Ft.isInstancedInterleavedBuffer){for(let tt=0;tt<nt.locationSize;tt++)T(nt.location+tt,Ft.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let tt=0;tt<nt.locationSize;tt++)M(nt.location+tt);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let tt=0;tt<nt.locationSize;tt++)_(nt.location+tt,it/nt.locationSize,Gt,K,B*Vt,(ot+it/nt.locationSize*tt)*Vt,bt)}else{if(X.isInstancedBufferAttribute){for(let Ft=0;Ft<nt.locationSize;Ft++)T(nt.location+Ft,X.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ft=0;Ft<nt.locationSize;Ft++)M(nt.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Ft=0;Ft<nt.locationSize;Ft++)_(nt.location+Ft,it/nt.locationSize,Gt,K,it*Vt,it/nt.locationSize*Ft*Vt,bt)}}else if(V!==void 0){let K=V[q];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(nt.location,K);break;case 3:i.vertexAttrib3fv(nt.location,K);break;case 4:i.vertexAttrib4fv(nt.location,K);break;default:i.vertexAttrib1fv(nt.location,K)}}}}S()}function v(){N();for(let R in a){let D=a[R];for(let F in D){let H=D[F];for(let U in H)x(H[U].object),delete H[U];delete D[F]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;let D=a[R.id];for(let F in D){let H=D[F];for(let U in H)x(H[U].object),delete H[U];delete D[F]}delete a[R.id]}function b(R){for(let D in a){let F=a[D];if(F[R.id]===void 0)continue;let H=F[R.id];for(let U in H)x(H[U].object),delete H[U];delete F[R.id]}}function N(){L(),h=!0,l!==c&&(l=c,p(l.object))}function L(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:N,resetDefaultState:L,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:M,disableUnusedAttributes:S}}function Bg(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,x;if(s)p=i,x="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<d;x++)this.render(h[x],u[x]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let x=0;for(let y=0;y<d;y++)x+=u[y];e.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function kg(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,M=o||t.has("OES_texture_float"),T=g&&M,S=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:S}}function Gg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Zi,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let x=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,g=E*4,M=f.clippingState||null;c.value=M,M=h(x,d,g,p);for(let T=0;T!==g;++T)M[T]=e[T];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,x){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,x!==!0||m===null){let f=p+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,M=p;g!==y;++g,M+=4)o.copy(u[g]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Vg(i){let t=new WeakMap;function e(o,a){return a===Fc?o.mapping=_r:a===Bc&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fc||a===Bc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Zc(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var xa=class extends ma{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fr=4,uu=[.125,.215,.35,.446,.526,.582],Hs=20,Ac=new xa,du=new rt,Rc=null,Cc=0,Pc=0,Ds=(1+Math.sqrt(5))/2,lr=1/Ds,fu=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Ds,lr),new z(0,Ds,-lr),new z(lr,0,Ds),new z(-lr,0,Ds),new z(Ds,lr,0),new z(-Ds,lr,0)],ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rc,Cc,Pc),t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:jr,format:mi,colorSpace:Ji,depthBuffer:!1},s=pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=Xg(r,t,e)}return s}_compileMaterial(t){let e=new G(this._lodPlanes[0],t);this._renderer.compile(e,Ac)}_sceneToCubeUV(t,e,n,s){let a=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(du),h.toneMapping=ps,h.autoClear=!1;let p=new Me({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),x=new G(new vt,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(du),y=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let g=this._cubeSize;Wo(s,E*g,f>2?g:0,g,g),h.setRenderTarget(s),y&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_r||t.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new G(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Wo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ac)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fu[(s-1)%fu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new G(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hs-1),y=r/x,m=isFinite(r)?1+Math.floor(h*y):Hs;m>Hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hs}`);let f=[],E=0;for(let _=0;_<Hs;++_){let A=_/y,v=Math.exp(-A*A/2);f.push(v),_===0?E+=v:_<m&&(E+=2*v)}for(let _=0;_<f.length;_++)f[_]=f[_]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-n;let M=this._sizeLods[s],T=3*M*(s>g-fr?s-g+fr:0),S=4*(this._cubeSize-M);Wo(e,T,S,3*M,2*M),c.setRenderTarget(e),c.render(u,Ac)}};function Wg(i){let t=[],e=[],n=[],s=i,r=i-fr+1+uu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-fr?c=uu[o-i+fr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,y=3,m=2,f=1,E=new Float32Array(y*x*p),g=new Float32Array(m*x*p),M=new Float32Array(f*x*p);for(let S=0;S<p;S++){let _=S%3*2/3-1,A=S>2?0:-1,v=[_,A,0,_+2/3,A,0,_+2/3,A+1,0,_,A,0,_+2/3,A+1,0,_,A+1,0];E.set(v,y*x*S),g.set(d,m*x*S);let w=[S,S,S,S,S,S];M.set(w,f*x*S)}let T=new de;T.setAttribute("position",new ve(E,y)),T.setAttribute("uv",new ve(g,m)),T.setAttribute("faceIndex",new ve(M,f)),t.push(T),s>fr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pu(i,t,e){let n=new Ki(i,t,e);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xg(i,t,e){let n=new Float32Array(Hs),s=new z(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function mu(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function gu(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function qg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Fc||c===Bc,h=c===_r||c===vr;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ya(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ya(i));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let y=d.morphAttributes[x];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let y=p[x];for(let m=0,f=y.length;m<f;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,x=u.attributes.position,y=0;if(p!==null){let E=p.array;y=p.version;for(let g=0,M=E.length;g<M;g+=3){let T=E[g+0],S=E[g+1],_=E[g+2];d.push(T,S,S,_,_,T)}}else if(x!==void 0){let E=x.array;y=x.version;for(let g=0,M=E.length/3-1;g<M;g+=3){let T=g+0,S=g+1,_=g+2;d.push(T,S,S,_,_,T)}}else return;let m=new(ed(d)?pa:fa)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function $g(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,x){i.drawElements(r,x,a,p*c),e.update(x,r,1)}function u(p,x,y){if(y===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,x,a,p*c,y),e.update(x,r,y)}function d(p,x,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<y;f++)this.render(p[f]/c,x[f]);else{m.multiDrawElementsWEBGL(r,x,0,a,p,0,y);let f=0;for(let E=0;E<y;E++)f+=x[E];e.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Jg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kg(i,t){return i[0]-t[0]}function jg(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Qg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Ne,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=p!==void 0?p.length:0,y=r.get(h);if(y===void 0||y.count!==x){let R=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",R)};y!==void 0&&y.texture.dispose();let E=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],_=h.morphAttributes.color||[],A=0;E===!0&&(A=1),g===!0&&(A=2),M===!0&&(A=3);let v=h.attributes.position.count*A,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*w*4*x),N=new la(b,v,w,x);N.type=ds,N.needsUpdate=!0;let L=A*4;for(let D=0;D<x;D++){let F=T[D],H=S[D],U=_[D],O=v*w*4*D;for(let V=0;V<F.count;V++){let q=V*L;E===!0&&(o.fromBufferAttribute(F,V),b[O+q+0]=o.x,b[O+q+1]=o.y,b[O+q+2]=o.z,b[O+q+3]=0),g===!0&&(o.fromBufferAttribute(H,V),b[O+q+4]=o.x,b[O+q+5]=o.y,b[O+q+6]=o.z,b[O+q+7]=0),M===!0&&(o.fromBufferAttribute(U,V),b[O+q+8]=o.x,b[O+q+9]=o.y,b[O+q+10]=o.z,b[O+q+11]=U.itemSize===4?o.w:1)}}y={count:x,texture:N,size:new ht(v,w)},r.set(h,y),h.addEventListener("dispose",R)}let m=0;for(let E=0;E<d.length;E++)m+=d[E];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let p=d===void 0?0:d.length,x=n[h.id];if(x===void 0||x.length!==p){x=[];for(let g=0;g<p;g++)x[g]=[g,0];n[h.id]=x}for(let g=0;g<p;g++){let M=x[g];M[0]=g,M[1]=d[g]}x.sort(jg);for(let g=0;g<8;g++)g<p&&x[g][1]?(a[g][0]=x[g][0],a[g][1]=x[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Kg);let y=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let g=0;g<8;g++){let M=a[g],T=M[0],S=M[1];T!==Number.MAX_SAFE_INTEGER&&S?(y&&h.getAttribute("morphTarget"+g)!==y[T]&&h.setAttribute("morphTarget"+g,y[T]),m&&h.getAttribute("morphNormal"+g)!==m[T]&&h.setAttribute("morphNormal"+g,m[T]),s[g]=S,f+=S):(y&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),m&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),s[g]=0)}let E=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function tx(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var _a=class extends jn{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:zs,h!==zs&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=us),n===void 0&&h===Mr&&(n=Ns),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=c!==void 0?c:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rd=new jn,od=new _a(1,1);od.compareFunction=td;var ad=new la,cd=new qc,ld=new ga,xu=[],yu=[],_u=new Float32Array(16),vu=new Float32Array(9),Mu=new Float32Array(4);function br(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=xu[s];if(r===void 0&&(r=new Float32Array(s),xu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function za(i,t){let e=yu[t];e===void 0&&(e=new Int32Array(t),yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ex(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function rx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Mu.set(n),i.uniformMatrix2fv(this.addr,!1,Mu),tn(e,n)}}function ox(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;vu.set(n),i.uniformMatrix3fv(this.addr,!1,vu),tn(e,n)}}function ax(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),tn(e,n)}}function cx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function dx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?od:rd;e.setTexture2D(t||r,s)}function xx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cd,s)}function yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ld,s)}function _x(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ad,s)}function vx(i){switch(i){case 5126:return ex;case 35664:return nx;case 35665:return ix;case 35666:return sx;case 35674:return rx;case 35675:return ox;case 35676:return ax;case 5124:case 35670:return cx;case 35667:case 35671:return lx;case 35668:case 35672:return hx;case 35669:case 35673:return ux;case 5125:return dx;case 36294:return fx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return _x}}function Mx(i,t){i.uniform1fv(this.addr,t)}function Ex(i,t){let e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function wx(i,t){let e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function bx(i,t){let e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function Sx(i,t){let e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tx(i,t){let e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ax(i,t){let e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rx(i,t){i.uniform1iv(this.addr,t)}function Cx(i,t){i.uniform2iv(this.addr,t)}function Px(i,t){i.uniform3iv(this.addr,t)}function Ix(i,t){i.uniform4iv(this.addr,t)}function Lx(i,t){i.uniform1uiv(this.addr,t)}function Dx(i,t){i.uniform2uiv(this.addr,t)}function Ux(i,t){i.uniform3uiv(this.addr,t)}function Hx(i,t){i.uniform4uiv(this.addr,t)}function Nx(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||rd,r[o])}function zx(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||cd,r[o])}function Ox(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ld,r[o])}function Fx(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ad,r[o])}function Bx(i){switch(i){case 5126:return Mx;case 35664:return Ex;case 35665:return wx;case 35666:return bx;case 35674:return Sx;case 35675:return Tx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Ix;case 5125:return Lx;case 36294:return Dx;case 36295:return Ux;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Fx}}var $c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vx(e.type)}},Jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bx(e.type)}},Kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ic=/(\w+)(\])?(\[|\.)?/g;function Eu(i,t){i.seq.push(t),i.map[t.id]=t}function kx(i,t,e){let n=i.name,s=n.length;for(Ic.lastIndex=0;;){let r=Ic.exec(n),o=Ic.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Eu(e,l===void 0?new $c(a,i,t):new Jc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Kc(a),Eu(e,u)),e=u}}}var yr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);kx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function wu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Gx=37297,Vx=0;function Wx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Xx(i){let t=Te.getPrimaries(Te.workingColorSpace),e=Te.getPrimaries(i),n;switch(t===e?n="":t===ia&&e===na?n="LinearDisplayP3ToLinearSRGB":t===na&&e===ia&&(n="LinearSRGBToLinearDisplayP3"),i){case Ji:case Na:return[n,"LinearTransferOETF"];case Le:case Hl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wx(i.getShaderSource(t),o)}else return s}function qx(i,t){let e=Xx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Yx(i,t){let e;switch(t){case tp:e="Linear";break;case ep:e="Reinhard";break;case np:e="OptimizedCineon";break;case ip:e="ACESFilmic";break;case rp:e="AgX";break;case sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pr).join(`
`)}function Jx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function Su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(i){return i.replace(jx,ty)}var Qx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ty(i,t){let e=te[t];if(e===void 0){let n=Qx.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jc(e)}var ey=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(i){return i.replace(ey,ny)}function ny(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ru(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yi&&(t="SHADOWMAP_TYPE_VSM"),t}function sy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _r:case vr:t="ENVMAP_TYPE_CUBE";break;case Ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ry(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vr:t="ENVMAP_MODE_REFRACTION";break}return t}function oy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Il:t="ENVMAP_BLENDING_MULTIPLY";break;case jf:t="ENVMAP_BLENDING_MIX";break;case Qf:t="ENVMAP_BLENDING_ADD";break}return t}function ay(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=iy(e),l=sy(e),h=ry(e),u=oy(e),d=ay(e),p=e.isWebGL2?"":Zx(e),x=$x(e),y=Jx(r),m=s.createProgram(),f,E,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(pr).join(`
`),f.length>0&&(f+=`
`),E=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(pr).join(`
`),E.length>0&&(E+=`
`)):(f=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),E=[p,Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ps?"#define TONE_MAPPING":"",e.toneMapping!==ps?te.tonemapping_pars_fragment:"",e.toneMapping!==ps?Yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,qx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=jc(o),o=Su(o,e),o=Tu(o,e),a=jc(a),a=Su(a,e),a=Tu(a,e),o=Au(o),a=Au(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let M=g+f+o,T=g+E+a,S=wu(s,s.VERTEX_SHADER,M),_=wu(s,s.FRAGMENT_SHADER,T);s.attachShader(m,S),s.attachShader(m,_),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(N){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(m).trim(),R=s.getShaderInfoLog(S).trim(),D=s.getShaderInfoLog(_).trim(),F=!0,H=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,_);else{let U=bu(s,S,"vertex"),O=bu(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+L+`
`+U+`
`+O)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(R===""||D==="")&&(H=!1);H&&(N.diagnostics={runnable:F,programLog:L,vertexShader:{log:R,prefix:f},fragmentShader:{log:D,prefix:E}})}s.deleteShader(S),s.deleteShader(_),v=new yr(s,m),w=Kx(s,m)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(m,Gx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=_,this}var ly=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tl(t),e.set(t,n)),n}},tl=class{constructor(t){this.id=ly++,this.code=t,this.usedTimes=0}};function hy(i,t,e,n,s,r,o){let a=new da,c=new Qc,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return v===0?"uv":`uv${v}`}function m(v,w,b,N,L){let R=N.fog,D=L.geometry,F=v.isMeshStandardMaterial?N.environment:null,H=(v.isMeshStandardMaterial?e:t).get(v.envMap||F),U=H&&H.mapping===Ha?H.image.height:null,O=x[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,q=V!==void 0?V.length:0,nt=0;D.morphAttributes.position!==void 0&&(nt=1),D.morphAttributes.normal!==void 0&&(nt=2),D.morphAttributes.color!==void 0&&(nt=3);let X,K,it,ft;if(O){let Ce=Ti[O];X=Ce.vertexShader,K=Ce.fragmentShader}else X=v.vertexShader,K=v.fragmentShader,c.update(v),it=c.getVertexShaderID(v),ft=c.getFragmentShaderID(v);let gt=i.getRenderTarget(),Gt=L.isInstancedMesh===!0,Vt=L.isBatchedMesh===!0,bt=!!v.map,Ft=!!v.matcap,B=!!H,ot=!!v.aoMap,tt=!!v.lightMap,dt=!!v.bumpMap,et=!!v.normalMap,Mt=!!v.displacementMap,wt=!!v.emissiveMap,I=!!v.metalnessMap,P=!!v.roughnessMap,Y=v.anisotropy>0,at=v.clearcoat>0,ct=v.iridescence>0,lt=v.sheen>0,Ct=v.transmission>0,yt=Y&&!!v.anisotropyMap,Tt=at&&!!v.clearcoatMap,Bt=at&&!!v.clearcoatNormalMap,Yt=at&&!!v.clearcoatRoughnessMap,st=ct&&!!v.iridescenceMap,Xt=ct&&!!v.iridescenceThicknessMap,ee=lt&&!!v.sheenColorMap,qt=lt&&!!v.sheenRoughnessMap,Ht=!!v.specularMap,At=!!v.specularColorMap,$t=!!v.specularIntensityMap,Q=Ct&&!!v.transmissionMap,be=Ct&&!!v.thicknessMap,Qt=!!v.gradientMap,Z=!!v.alphaMap,k=v.alphaTest>0,ut=!!v.alphaHash,pt=!!v.extensions,_t=!!D.attributes.uv1,Nt=!!D.attributes.uv2,pe=!!D.attributes.uv3,he=ps;return v.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(he=i.toneMapping),{isWebGL2:h,shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:K,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:ft,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Vt,instancing:Gt,instancingColor:Gt&&L.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Ji,map:bt,matcap:Ft,envMap:B,envMapMode:B&&H.mapping,envMapCubeUVHeight:U,aoMap:ot,lightMap:tt,bumpMap:dt,normalMap:et,displacementMap:d&&Mt,emissiveMap:wt,normalMapObjectSpace:et&&v.normalMapType===gp,normalMapTangentSpace:et&&v.normalMapType===Ul,metalnessMap:I,roughnessMap:P,anisotropy:Y,anisotropyMap:yt,clearcoat:at,clearcoatMap:Tt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Yt,iridescence:ct,iridescenceMap:st,iridescenceThicknessMap:Xt,sheen:lt,sheenColorMap:ee,sheenRoughnessMap:qt,specularMap:Ht,specularColorMap:At,specularIntensityMap:$t,transmission:Ct,transmissionMap:Q,thicknessMap:be,gradientMap:Qt,opaque:v.transparent===!1&&v.blending===gr,alphaMap:Z,alphaTest:k,alphaHash:ut,combine:v.combine,mapUv:bt&&y(v.map.channel),aoMapUv:ot&&y(v.aoMap.channel),lightMapUv:tt&&y(v.lightMap.channel),bumpMapUv:dt&&y(v.bumpMap.channel),normalMapUv:et&&y(v.normalMap.channel),displacementMapUv:Mt&&y(v.displacementMap.channel),emissiveMapUv:wt&&y(v.emissiveMap.channel),metalnessMapUv:I&&y(v.metalnessMap.channel),roughnessMapUv:P&&y(v.roughnessMap.channel),anisotropyMapUv:yt&&y(v.anisotropyMap.channel),clearcoatMapUv:Tt&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:qt&&y(v.sheenRoughnessMap.channel),specularMapUv:Ht&&y(v.specularMap.channel),specularColorMapUv:At&&y(v.specularColorMap.channel),specularIntensityMapUv:$t&&y(v.specularIntensityMap.channel),transmissionMapUv:Q&&y(v.transmissionMap.channel),thicknessMapUv:be&&y(v.thicknessMap.channel),alphaMapUv:Z&&y(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(et||Y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:_t,vertexUv2s:Nt,vertexUv3s:pe,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(bt||Z),fog:!!R,useFog:v.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:L.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&v.map.isVideoTexture===!0&&Te.getTransfer(v.map.colorSpace)===Ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===le,flipSided:v.side===An,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:pt&&v.extensions.derivatives===!0,extensionFragDepth:pt&&v.extensions.fragDepth===!0,extensionDrawBuffers:pt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let b in v.defines)w.push(b),w.push(v.defines[b]);return v.isRawShaderMaterial===!1&&(E(w,v),g(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function E(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function g(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){let w=x[v.type],b;if(w){let N=Ti[w];b=zl.clone(N.uniforms)}else b=v.uniforms;return b}function T(v,w){let b;for(let N=0,L=l.length;N<L;N++){let R=l[N];if(R.cacheKey===w){b=R,++b.usedTimes;break}}return b===void 0&&(b=new cy(i,w,v,r),l.push(b)),b}function S(v){if(--v.usedTimes===0){let w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function _(v){c.remove(v)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:T,releaseProgram:S,releaseShaderCache:_,programs:l,dispose:A}}function uy(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function dy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,x,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:x,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,d,p,x,y,m){let f=o(u,d,p,x,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,x,y,m){let f=o(u,d,p,x,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||dy),n.length>1&&n.sort(d||Cu),s.length>1&&s.sort(d||Cu)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function fy(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Pu,i.set(n,[o])):s>=r.length?(o=new Pu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function py(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new rt};break;case"SpotLight":e={position:new z,direction:new z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function my(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gy=0;function xy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yy(i,t){let e=new py,n=my(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new z);let r=new z,o=new ze,a=new ze;function c(h,u){let d=0,p=0,x=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,m=0,f=0,E=0,g=0,M=0,T=0,S=0,_=0,A=0,v=0;h.sort(xy);let w=u===!0?Math.PI:1;for(let N=0,L=h.length;N<L;N++){let R=h[N],D=R.color,F=R.intensity,H=R.distance,U=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=D.r*F*w,p+=D.g*F*w,x+=D.b*F*w;else if(R.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(R.sh.coefficients[O],F);v++}else if(R.isDirectionalLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){let V=R.shadow,q=n.get(R);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,s.directionalShadow[y]=q,s.directionalShadowMap[y]=U,s.directionalShadowMatrix[y]=R.shadow.matrix,M++}s.directional[y]=O,y++}else if(R.isSpotLight){let O=e.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(D).multiplyScalar(F*w),O.distance=H,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,s.spot[f]=O;let V=R.shadow;if(R.map&&(s.spotLightMap[_]=R.map,_++,V.updateMatrices(R),R.castShadow&&A++),s.spotLightMatrix[f]=V.matrix,R.castShadow){let q=n.get(R);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,s.spotShadow[f]=q,s.spotShadowMap[f]=U,S++}f++}else if(R.isRectAreaLight){let O=e.get(R);O.color.copy(D).multiplyScalar(F),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),s.rectArea[E]=O,E++}else if(R.isPointLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity*w),O.distance=R.distance,O.decay=R.decay,R.castShadow){let V=R.shadow,q=n.get(R);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,s.pointShadow[m]=q,s.pointShadowMap[m]=U,s.pointShadowMatrix[m]=R.shadow.matrix,T++}s.point[m]=O,m++}else if(R.isHemisphereLight){let O=e.get(R);O.skyColor.copy(R.color).multiplyScalar(F*w),O.groundColor.copy(R.groundColor).multiplyScalar(F*w),s.hemi[g]=O,g++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_FLOAT_1,s.rectAreaLTC2=xt.LTC_FLOAT_2):(s.rectAreaLTC1=xt.LTC_HALF_1,s.rectAreaLTC2=xt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_FLOAT_1,s.rectAreaLTC2=xt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xt.LTC_HALF_1,s.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=x;let b=s.hash;(b.directionalLength!==y||b.pointLength!==m||b.spotLength!==f||b.rectAreaLength!==E||b.hemiLength!==g||b.numDirectionalShadows!==M||b.numPointShadows!==T||b.numSpotShadows!==S||b.numSpotMaps!==_||b.numLightProbes!==v)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=E,s.point.length=m,s.hemi.length=g,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=S+_-A,s.spotLightMap.length=_,s.numSpotLightShadowsWithMaps=A,s.numLightProbes=v,b.directionalLength=y,b.pointLength=m,b.spotLength=f,b.rectAreaLength=E,b.hemiLength=g,b.numDirectionalShadows=M,b.numPointShadows=T,b.numSpotShadows=S,b.numSpotMaps=_,b.numLightProbes=v,s.version=gy++)}function l(h,u){let d=0,p=0,x=0,y=0,m=0,f=u.matrixWorldInverse;for(let E=0,g=h.length;E<g;E++){let M=h[E];if(M.isDirectionalLight){let T=s.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),d++}else if(M.isSpotLight){let T=s.spot[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),x++}else if(M.isRectAreaLight){let T=s.rectArea[y];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let T=s.point[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let T=s.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function Iu(i,t){let e=new yy(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _y(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Iu(i,t),e.set(r,[c])):o>=a.length?(c=new Iu(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var el=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nl=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,My=`uniform sampler2D shadow_pass;
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
}`;function Ey(i,t,e){let n=new to,s=new ht,r=new ht,o=new Ne,a=new el({depthPacking:mp}),c=new nl,l={},h=e.maxTextureSize,u={[ms]:An,[An]:ms,[le]:le},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:vy,fragmentShader:My}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new de;x.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new G(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let f=this.type;this.render=function(S,_,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let v=i.getRenderTarget(),w=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),N=i.state;N.setBlending(fs),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let L=f!==Yi&&this.type===Yi,R=f===Yi&&this.type!==Yi;for(let D=0,F=S.length;D<F;D++){let H=S[D],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let O=U.getFrameExtents();if(s.multiply(O),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,U.mapSize.y=r.y)),U.map===null||L===!0||R===!0){let q=this.type!==Yi?{minFilter:mn,magFilter:mn}:{};U.map!==null&&U.map.dispose(),U.map=new Ki(s.x,s.y,q),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let V=U.getViewportCount();for(let q=0;q<V;q++){let nt=U.getViewport(q);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),N.viewport(o),U.updateMatrices(H,q),n=U.getFrustum(),M(_,A,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Yi&&E(U,A),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,w,b)};function E(S,_){let A=t.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ki(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,A,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,A,p,y,null)}function g(S,_,A,v){let w=null,b=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)w=b;else if(w=A.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let N=w.uuid,L=_.uuid,R=l[N];R===void 0&&(R={},l[N]=R);let D=R[L];D===void 0&&(D=w.clone(),R[L]=D,_.addEventListener("dispose",T)),w=D}if(w.visible=_.visible,w.wireframe=_.wireframe,v===Yi?w.side=_.shadowSide!==null?_.shadowSide:_.side:w.side=_.shadowSide!==null?_.shadowSide:u[_.side],w.alphaMap=_.alphaMap,w.alphaTest=_.alphaTest,w.map=_.map,w.clipShadows=_.clipShadows,w.clippingPlanes=_.clippingPlanes,w.clipIntersection=_.clipIntersection,w.displacementMap=_.displacementMap,w.displacementScale=_.displacementScale,w.displacementBias=_.displacementBias,w.wireframeLinewidth=_.wireframeLinewidth,w.linewidth=_.linewidth,A.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let N=i.properties.get(w);N.light=A}return w}function M(S,_,A,v,w){if(S.visible===!1)return;if(S.layers.test(_.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Yi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);let L=t.update(S),R=S.material;if(Array.isArray(R)){let D=L.groups;for(let F=0,H=D.length;F<H;F++){let U=D[F],O=R[U.materialIndex];if(O&&O.visible){let V=g(S,O,v,w);S.onBeforeShadow(i,S,_,A,L,V,U),i.renderBufferDirect(A,null,L,V,S,U),S.onAfterShadow(i,S,_,A,L,V,U)}}}else if(R.visible){let D=g(S,R,v,w);S.onBeforeShadow(i,S,_,A,L,D,null),i.renderBufferDirect(A,null,L,D,S,null),S.onAfterShadow(i,S,_,A,L,D,null)}}let N=S.children;for(let L=0,R=N.length;L<R;L++)M(N[L],_,A,v,w)}function T(S){S.target.removeEventListener("dispose",T);for(let A in l){let v=l[A],w=S.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function wy(i,t,e){let n=e.isWebGL2;function s(){let k=!1,ut=new Ne,pt=null,_t=new Ne(0,0,0,0);return{setMask:function(Nt){pt!==Nt&&!k&&(i.colorMask(Nt,Nt,Nt,Nt),pt=Nt)},setLocked:function(Nt){k=Nt},setClear:function(Nt,pe,he,_e,Ce){Ce===!0&&(Nt*=_e,pe*=_e,he*=_e),ut.set(Nt,pe,he,_e),_t.equals(ut)===!1&&(i.clearColor(Nt,pe,he,_e),_t.copy(ut))},reset:function(){k=!1,pt=null,_t.set(-1,0,0,0)}}}function r(){let k=!1,ut=null,pt=null,_t=null;return{setTest:function(Nt){Nt?Vt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Nt){ut!==Nt&&!k&&(i.depthMask(Nt),ut=Nt)},setFunc:function(Nt){if(pt!==Nt){switch(Nt){case Xf:i.depthFunc(i.NEVER);break;case qf:i.depthFunc(i.ALWAYS);break;case Yf:i.depthFunc(i.LESS);break;case jo:i.depthFunc(i.LEQUAL);break;case Zf:i.depthFunc(i.EQUAL);break;case $f:i.depthFunc(i.GEQUAL);break;case Jf:i.depthFunc(i.GREATER);break;case Kf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){_t!==Nt&&(i.clearDepth(Nt),_t=Nt)},reset:function(){k=!1,ut=null,pt=null,_t=null}}}function o(){let k=!1,ut=null,pt=null,_t=null,Nt=null,pe=null,he=null,_e=null,Ce=null;return{setTest:function(xe){k||(xe?Vt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(xe){ut!==xe&&!k&&(i.stencilMask(xe),ut=xe)},setFunc:function(xe,Ze,Hn){(pt!==xe||_t!==Ze||Nt!==Hn)&&(i.stencilFunc(xe,Ze,Hn),pt=xe,_t=Ze,Nt=Hn)},setOp:function(xe,Ze,Hn){(pe!==xe||he!==Ze||_e!==Hn)&&(i.stencilOp(xe,Ze,Hn),pe=xe,he=Ze,_e=Hn)},setLocked:function(xe){k=xe},setClear:function(xe){Ce!==xe&&(i.clearStencil(xe),Ce=xe)},reset:function(){k=!1,ut=null,pt=null,_t=null,Nt=null,pe=null,he=null,_e=null,Ce=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},p={},x=new WeakMap,y=[],m=null,f=!1,E=null,g=null,M=null,T=null,S=null,_=null,A=null,v=new rt(0,0,0),w=0,b=!1,N=null,L=null,R=null,D=null,F=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,O=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=O>=2);let q=null,nt={},X=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),it=new Ne().fromArray(X),ft=new Ne().fromArray(K);function gt(k,ut,pt,_t){let Nt=new Uint8Array(4),pe=i.createTexture();i.bindTexture(k,pe),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<pt;he++)n&&(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)?i.texImage3D(ut,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(ut+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return pe}let Gt={};Gt[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Gt[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Vt(i.DEPTH_TEST),c.setFunc(jo),wt(!1),I(uh),Vt(i.CULL_FACE),et(fs);function Vt(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function bt(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function Ft(k,ut){return p[k]!==ut?(i.bindFramebuffer(k,ut),p[k]=ut,n&&(k===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ut),k===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ut)),!0):!1}function B(k,ut){let pt=y,_t=!1;if(k)if(pt=x.get(ut),pt===void 0&&(pt=[],x.set(ut,pt)),k.isWebGLMultipleRenderTargets){let Nt=k.texture;if(pt.length!==Nt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,he=Nt.length;pe<he;pe++)pt[pe]=i.COLOR_ATTACHMENT0+pe;pt.length=Nt.length,_t=!0}}else pt[0]!==i.COLOR_ATTACHMENT0&&(pt[0]=i.COLOR_ATTACHMENT0,_t=!0);else pt[0]!==i.BACK&&(pt[0]=i.BACK,_t=!0);_t&&(e.isWebGL2?i.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function ot(k){return m!==k?(i.useProgram(k),m=k,!0):!1}let tt={[Us]:i.FUNC_ADD,[Pf]:i.FUNC_SUBTRACT,[If]:i.FUNC_REVERSE_SUBTRACT};if(n)tt[ph]=i.MIN,tt[mh]=i.MAX;else{let k=t.get("EXT_blend_minmax");k!==null&&(tt[ph]=k.MIN_EXT,tt[mh]=k.MAX_EXT)}let dt={[Lf]:i.ZERO,[Df]:i.ONE,[Uf]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[Bf]:i.SRC_ALPHA_SATURATE,[Of]:i.DST_COLOR,[Nf]:i.DST_ALPHA,[Hf]:i.ONE_MINUS_SRC_COLOR,[Oc]:i.ONE_MINUS_SRC_ALPHA,[Ff]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[kf]:i.CONSTANT_COLOR,[Gf]:i.ONE_MINUS_CONSTANT_COLOR,[Vf]:i.CONSTANT_ALPHA,[Wf]:i.ONE_MINUS_CONSTANT_ALPHA};function et(k,ut,pt,_t,Nt,pe,he,_e,Ce,xe){if(k===fs){f===!0&&(bt(i.BLEND),f=!1);return}if(f===!1&&(Vt(i.BLEND),f=!0),k!==Cf){if(k!==E||xe!==b){if((g!==Us||S!==Us)&&(i.blendEquation(i.FUNC_ADD),g=Us,S=Us),xe)switch(k){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,T=null,_=null,A=null,v.set(0,0,0),w=0,E=k,b=xe}return}Nt=Nt||ut,pe=pe||pt,he=he||_t,(ut!==g||Nt!==S)&&(i.blendEquationSeparate(tt[ut],tt[Nt]),g=ut,S=Nt),(pt!==M||_t!==T||pe!==_||he!==A)&&(i.blendFuncSeparate(dt[pt],dt[_t],dt[pe],dt[he]),M=pt,T=_t,_=pe,A=he),(_e.equals(v)===!1||Ce!==w)&&(i.blendColor(_e.r,_e.g,_e.b,Ce),v.copy(_e),w=Ce),E=k,b=!1}function Mt(k,ut){k.side===le?bt(i.CULL_FACE):Vt(i.CULL_FACE);let pt=k.side===An;ut&&(pt=!pt),wt(pt),k.blending===gr&&k.transparent===!1?et(fs):et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);let _t=k.stencilWrite;l.setTest(_t),_t&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Y(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Vt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(k){N!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),N=k)}function I(k){k!==Af?(Vt(i.CULL_FACE),k!==L&&(k===uh?i.cullFace(i.BACK):k===Rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),L=k}function P(k){k!==R&&(U&&i.lineWidth(k),R=k)}function Y(k,ut,pt){k?(Vt(i.POLYGON_OFFSET_FILL),(D!==ut||F!==pt)&&(i.polygonOffset(ut,pt),D=ut,F=pt)):bt(i.POLYGON_OFFSET_FILL)}function at(k){k?Vt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ct(k){k===void 0&&(k=i.TEXTURE0+H-1),q!==k&&(i.activeTexture(k),q=k)}function lt(k,ut,pt){pt===void 0&&(q===null?pt=i.TEXTURE0+H-1:pt=q);let _t=nt[pt];_t===void 0&&(_t={type:void 0,texture:void 0},nt[pt]=_t),(_t.type!==k||_t.texture!==ut)&&(q!==pt&&(i.activeTexture(pt),q=pt),i.bindTexture(k,ut||Gt[k]),_t.type=k,_t.texture=ut)}function Ct(){let k=nt[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function yt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(k){it.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),it.copy(k))}function Q(k){ft.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ft.copy(k))}function be(k,ut){let pt=u.get(ut);pt===void 0&&(pt=new WeakMap,u.set(ut,pt));let _t=pt.get(k);_t===void 0&&(_t=i.getUniformBlockIndex(ut,k.name),pt.set(k,_t))}function Qt(k,ut){let _t=u.get(ut).get(k);h.get(ut)!==_t&&(i.uniformBlockBinding(ut,_t,k.__bindingPointIndex),h.set(ut,_t))}function Z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},q=null,nt={},p={},x=new WeakMap,y=[],m=null,f=!1,E=null,g=null,M=null,T=null,S=null,_=null,A=null,v=new rt(0,0,0),w=0,b=!1,N=null,L=null,R=null,D=null,F=null,it.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Vt,disable:bt,bindFramebuffer:Ft,drawBuffers:B,useProgram:ot,setBlending:et,setMaterial:Mt,setFlipSided:wt,setCullFace:I,setLineWidth:P,setPolygonOffset:Y,setScissorTest:at,activeTexture:ct,bindTexture:lt,unbindTexture:Ct,compressedTexImage2D:yt,compressedTexImage3D:Tt,texImage2D:Ht,texImage3D:At,updateUBOMapping:be,uniformBlockBinding:Qt,texStorage2D:ee,texStorage3D:qt,texSubImage2D:Bt,texSubImage3D:Yt,compressedTexSubImage2D:st,compressedTexSubImage3D:Xt,scissor:$t,viewport:Q,reset:Z}}function by(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,P){return p?new OffscreenCanvas(I,P):oa("canvas")}function y(I,P,Y,at){let ct=1;if((I.width>at||I.height>at)&&(ct=at/Math.max(I.width,I.height)),ct<1||P===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let lt=P?ra:Math.floor,Ct=lt(ct*I.width),yt=lt(ct*I.height);u===void 0&&(u=x(Ct,yt));let Tt=Y?x(Ct,yt):u;return Tt.width=Ct,Tt.height=yt,Tt.getContext("2d").drawImage(I,0,0,Ct,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Ct+"x"+yt+")."),Tt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function m(I){return Wc(I.width)&&Wc(I.height)}function f(I){return a?!1:I.wrapS!==pi||I.wrapT!==pi||I.minFilter!==mn&&I.minFilter!==On}function E(I,P){return I.generateMipmaps&&P&&I.minFilter!==mn&&I.minFilter!==On}function g(I){i.generateMipmap(I)}function M(I,P,Y,at,ct=!1){if(a===!1)return P;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let lt=P;if(P===i.RED&&(Y===i.FLOAT&&(lt=i.R32F),Y===i.HALF_FLOAT&&(lt=i.R16F),Y===i.UNSIGNED_BYTE&&(lt=i.R8)),P===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(lt=i.R8UI),Y===i.UNSIGNED_SHORT&&(lt=i.R16UI),Y===i.UNSIGNED_INT&&(lt=i.R32UI),Y===i.BYTE&&(lt=i.R8I),Y===i.SHORT&&(lt=i.R16I),Y===i.INT&&(lt=i.R32I)),P===i.RG&&(Y===i.FLOAT&&(lt=i.RG32F),Y===i.HALF_FLOAT&&(lt=i.RG16F),Y===i.UNSIGNED_BYTE&&(lt=i.RG8)),P===i.RGBA){let Ct=ct?ea:Te.getTransfer(at);Y===i.FLOAT&&(lt=i.RGBA32F),Y===i.HALF_FLOAT&&(lt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(lt=Ct===Ie?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function T(I,P,Y){return E(I,Y)===!0||I.isFramebufferTexture&&I.minFilter!==mn&&I.minFilter!==On?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function S(I){return I===mn||I===gh||I===ic?i.NEAREST:i.LINEAR}function _(I){let P=I.target;P.removeEventListener("dispose",_),v(P),P.isVideoTexture&&h.delete(P)}function A(I){let P=I.target;P.removeEventListener("dispose",A),b(P)}function v(I){let P=n.get(I);if(P.__webglInit===void 0)return;let Y=I.source,at=d.get(Y);if(at){let ct=at[P.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&w(I),Object.keys(at).length===0&&d.delete(Y)}n.remove(I)}function w(I){let P=n.get(I);i.deleteTexture(P.__webglTexture);let Y=I.source,at=d.get(Y);delete at[P.__cacheKey],o.memory.textures--}function b(I){let P=I.texture,Y=n.get(I),at=n.get(P);if(at.__webglTexture!==void 0&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(Y.__webglFramebuffer[ct]))for(let lt=0;lt<Y.__webglFramebuffer[ct].length;lt++)i.deleteFramebuffer(Y.__webglFramebuffer[ct][lt]);else i.deleteFramebuffer(Y.__webglFramebuffer[ct]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[ct])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ct=0;ct<Y.__webglFramebuffer.length;ct++)i.deleteFramebuffer(Y.__webglFramebuffer[ct]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ct=0;ct<Y.__webglColorRenderbuffer.length;ct++)Y.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[ct]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ct=0,lt=P.length;ct<lt;ct++){let Ct=n.get(P[ct]);Ct.__webglTexture&&(i.deleteTexture(Ct.__webglTexture),o.memory.textures--),n.remove(P[ct])}n.remove(P),n.remove(I)}let N=0;function L(){N=0}function R(){let I=N;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function D(I){let P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function F(I,P){let Y=n.get(I);if(I.isVideoTexture&&Mt(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){let at=I.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(Y,I,P);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+P)}function H(I,P){let Y=n.get(I);if(I.version>0&&Y.__version!==I.version){it(Y,I,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+P)}function U(I,P){let Y=n.get(I);if(I.version>0&&Y.__version!==I.version){it(Y,I,P);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+P)}function O(I,P){let Y=n.get(I);if(I.version>0&&Y.__version!==I.version){ft(Y,I,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+P)}let V={[kc]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Gc]:i.MIRRORED_REPEAT},q={[mn]:i.NEAREST,[gh]:i.NEAREST_MIPMAP_NEAREST,[ic]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[op]:i.LINEAR_MIPMAP_NEAREST,[Kr]:i.LINEAR_MIPMAP_LINEAR},nt={[xp]:i.NEVER,[wp]:i.ALWAYS,[yp]:i.LESS,[td]:i.LEQUAL,[_p]:i.EQUAL,[Ep]:i.GEQUAL,[vp]:i.GREATER,[Mp]:i.NOTEQUAL};function X(I,P,Y){if(Y?(i.texParameteri(I,i.TEXTURE_WRAP_S,V[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,V[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,V[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,q[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,q[P.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==pi||P.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,S(P.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,S(P.minFilter)),P.minFilter!==mn&&P.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,nt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let at=t.get("EXT_texture_filter_anisotropic");if(P.magFilter===mn||P.minFilter!==ic&&P.minFilter!==Kr||P.type===ds&&t.has("OES_texture_float_linear")===!1||a===!1&&P.type===jr&&t.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(I,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function K(I,P){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",_));let at=P.source,ct=d.get(at);ct===void 0&&(ct={},d.set(at,ct));let lt=D(P);if(lt!==I.__cacheKey){ct[lt]===void 0&&(ct[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ct[lt].usedTimes++;let Ct=ct[I.__cacheKey];Ct!==void 0&&(ct[I.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(P)),I.__cacheKey=lt,I.__webglTexture=ct[lt].texture}return Y}function it(I,P,Y){let at=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(at=i.TEXTURE_3D);let ct=K(I,P),lt=P.source;e.bindTexture(at,I.__webglTexture,i.TEXTURE0+Y);let Ct=n.get(lt);if(lt.version!==Ct.__version||ct===!0){e.activeTexture(i.TEXTURE0+Y);let yt=Te.getPrimaries(Te.workingColorSpace),Tt=P.colorSpace===oi?null:Te.getPrimaries(P.colorSpace),Bt=P.colorSpace===oi||yt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let Yt=f(P)&&m(P.image)===!1,st=y(P.image,Yt,!1,s.maxTextureSize);st=wt(P,st);let Xt=m(st)||a,ee=r.convert(P.format,P.colorSpace),qt=r.convert(P.type),Ht=M(P.internalFormat,ee,qt,P.colorSpace,P.isVideoTexture);X(at,P,Xt);let At,$t=P.mipmaps,Q=a&&P.isVideoTexture!==!0&&Ht!==ju,be=Ct.__version===void 0||ct===!0,Qt=T(P,st,Xt);if(P.isDepthTexture)Ht=i.DEPTH_COMPONENT,a?P.type===ds?Ht=i.DEPTH_COMPONENT32F:P.type===us?Ht=i.DEPTH_COMPONENT24:P.type===Ns?Ht=i.DEPTH24_STENCIL8:Ht=i.DEPTH_COMPONENT16:P.type===ds&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===zs&&Ht===i.DEPTH_COMPONENT&&P.type!==Ll&&P.type!==us&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=us,qt=r.convert(P.type)),P.format===Mr&&Ht===i.DEPTH_COMPONENT&&(Ht=i.DEPTH_STENCIL,P.type!==Ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Ns,qt=r.convert(P.type))),be&&(Q?e.texStorage2D(i.TEXTURE_2D,1,Ht,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Ht,st.width,st.height,0,ee,qt,null));else if(P.isDataTexture)if($t.length>0&&Xt){Q&&be&&e.texStorage2D(i.TEXTURE_2D,Qt,Ht,$t[0].width,$t[0].height);for(let Z=0,k=$t.length;Z<k;Z++)At=$t[Z],Q?e.texSubImage2D(i.TEXTURE_2D,Z,0,0,At.width,At.height,ee,qt,At.data):e.texImage2D(i.TEXTURE_2D,Z,Ht,At.width,At.height,0,ee,qt,At.data);P.generateMipmaps=!1}else Q?(be&&e.texStorage2D(i.TEXTURE_2D,Qt,Ht,st.width,st.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,ee,qt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,st.width,st.height,0,ee,qt,st.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Q&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,Ht,$t[0].width,$t[0].height,st.depth);for(let Z=0,k=$t.length;Z<k;Z++)At=$t[Z],P.format!==mi?ee!==null?Q?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,At.width,At.height,st.depth,ee,At.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ht,At.width,At.height,st.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,At.width,At.height,st.depth,ee,qt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ht,At.width,At.height,st.depth,0,ee,qt,At.data)}else{Q&&be&&e.texStorage2D(i.TEXTURE_2D,Qt,Ht,$t[0].width,$t[0].height);for(let Z=0,k=$t.length;Z<k;Z++)At=$t[Z],P.format!==mi?ee!==null?Q?e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,At.width,At.height,ee,At.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Ht,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?e.texSubImage2D(i.TEXTURE_2D,Z,0,0,At.width,At.height,ee,qt,At.data):e.texImage2D(i.TEXTURE_2D,Z,Ht,At.width,At.height,0,ee,qt,At.data)}else if(P.isDataArrayTexture)Q?(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,Ht,st.width,st.height,st.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ee,qt,st.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,st.width,st.height,st.depth,0,ee,qt,st.data);else if(P.isData3DTexture)Q?(be&&e.texStorage3D(i.TEXTURE_3D,Qt,Ht,st.width,st.height,st.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ee,qt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,st.width,st.height,st.depth,0,ee,qt,st.data);else if(P.isFramebufferTexture){if(be)if(Q)e.texStorage2D(i.TEXTURE_2D,Qt,Ht,st.width,st.height);else{let Z=st.width,k=st.height;for(let ut=0;ut<Qt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Ht,Z,k,0,ee,qt,null),Z>>=1,k>>=1}}else if($t.length>0&&Xt){Q&&be&&e.texStorage2D(i.TEXTURE_2D,Qt,Ht,$t[0].width,$t[0].height);for(let Z=0,k=$t.length;Z<k;Z++)At=$t[Z],Q?e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ee,qt,At):e.texImage2D(i.TEXTURE_2D,Z,Ht,ee,qt,At);P.generateMipmaps=!1}else Q?(be&&e.texStorage2D(i.TEXTURE_2D,Qt,Ht,st.width,st.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,qt,st)):e.texImage2D(i.TEXTURE_2D,0,Ht,ee,qt,st);E(P,Xt)&&g(at),Ct.__version=lt.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function ft(I,P,Y){if(P.image.length!==6)return;let at=K(I,P),ct=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);let lt=n.get(ct);if(ct.version!==lt.__version||at===!0){e.activeTexture(i.TEXTURE0+Y);let Ct=Te.getPrimaries(Te.workingColorSpace),yt=P.colorSpace===oi?null:Te.getPrimaries(P.colorSpace),Tt=P.colorSpace===oi||Ct===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Bt=P.isCompressedTexture||P.image[0].isCompressedTexture,Yt=P.image[0]&&P.image[0].isDataTexture,st=[];for(let Z=0;Z<6;Z++)!Bt&&!Yt?st[Z]=y(P.image[Z],!1,!0,s.maxCubemapSize):st[Z]=Yt?P.image[Z].image:P.image[Z],st[Z]=wt(P,st[Z]);let Xt=st[0],ee=m(Xt)||a,qt=r.convert(P.format,P.colorSpace),Ht=r.convert(P.type),At=M(P.internalFormat,qt,Ht,P.colorSpace),$t=a&&P.isVideoTexture!==!0,Q=lt.__version===void 0||at===!0,be=T(P,Xt,ee);X(i.TEXTURE_CUBE_MAP,P,ee);let Qt;if(Bt){$t&&Q&&e.texStorage2D(i.TEXTURE_CUBE_MAP,be,At,Xt.width,Xt.height);for(let Z=0;Z<6;Z++){Qt=st[Z].mipmaps;for(let k=0;k<Qt.length;k++){let ut=Qt[k];P.format!==mi?qt!==null?$t?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,k,0,0,ut.width,ut.height,qt,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,k,At,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,k,0,0,ut.width,ut.height,qt,Ht,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,k,At,ut.width,ut.height,0,qt,Ht,ut.data)}}}else{Qt=P.mipmaps,$t&&Q&&(Qt.length>0&&be++,e.texStorage2D(i.TEXTURE_CUBE_MAP,be,At,st[0].width,st[0].height));for(let Z=0;Z<6;Z++)if(Yt){$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,st[Z].width,st[Z].height,qt,Ht,st[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,At,st[Z].width,st[Z].height,0,qt,Ht,st[Z].data);for(let k=0;k<Qt.length;k++){let pt=Qt[k].image[Z].image;$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,k+1,0,0,pt.width,pt.height,qt,Ht,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,k+1,At,pt.width,pt.height,0,qt,Ht,pt.data)}}else{$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,qt,Ht,st[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,At,qt,Ht,st[Z]);for(let k=0;k<Qt.length;k++){let ut=Qt[k];$t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,k+1,0,0,qt,Ht,ut.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,k+1,At,qt,Ht,ut.image[Z])}}}E(P,ee)&&g(i.TEXTURE_CUBE_MAP),lt.__version=ct.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function gt(I,P,Y,at,ct,lt){let Ct=r.convert(Y.format,Y.colorSpace),yt=r.convert(Y.type),Tt=M(Y.internalFormat,Ct,yt,Y.colorSpace);if(!n.get(P).__hasExternalTextures){let Yt=Math.max(1,P.width>>lt),st=Math.max(1,P.height>>lt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,lt,Tt,Yt,st,P.depth,0,Ct,yt,null):e.texImage2D(ct,lt,Tt,Yt,st,0,Ct,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),et(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ct,n.get(Y).__webglTexture,0,dt(P)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ct,n.get(Y).__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(I,P,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer&&!P.stencilBuffer){let at=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||et(P)){let ct=P.depthTexture;ct&&ct.isDepthTexture&&(ct.type===ds?at=i.DEPTH_COMPONENT32F:ct.type===us&&(at=i.DEPTH_COMPONENT24));let lt=dt(P);et(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,at,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,at,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,at,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(P.depthBuffer&&P.stencilBuffer){let at=dt(P);Y&&et(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,P.width,P.height):et(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{let at=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ct=0;ct<at.length;ct++){let lt=at[ct],Ct=r.convert(lt.format,lt.colorSpace),yt=r.convert(lt.type),Tt=M(lt.internalFormat,Ct,yt,lt.colorSpace),Bt=dt(P);Y&&et(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Tt,P.width,P.height):et(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,Tt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),F(P.depthTexture,0);let at=n.get(P.depthTexture).__webglTexture,ct=dt(P);if(P.depthTexture.format===zs)et(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(P.depthTexture.format===Mr)et(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function bt(I){let P=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!P.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Vt(P.__webglFramebuffer,I)}else if(Y){P.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[at]),P.__webglDepthbuffer[at]=i.createRenderbuffer(),Gt(P.__webglDepthbuffer[at],I,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Gt(P.__webglDepthbuffer,I,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(I,P,Y){let at=n.get(I);P!==void 0&&gt(at.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&bt(I)}function B(I){let P=I.texture,Y=n.get(I),at=n.get(P);I.addEventListener("dispose",A),I.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=P.version,o.memory.textures++);let ct=I.isWebGLCubeRenderTarget===!0,lt=I.isWebGLMultipleRenderTargets===!0,Ct=m(I)||a;if(ct){Y.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(a&&P.mipmaps&&P.mipmaps.length>0){Y.__webglFramebuffer[yt]=[];for(let Tt=0;Tt<P.mipmaps.length;Tt++)Y.__webglFramebuffer[yt][Tt]=i.createFramebuffer()}else Y.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(a&&P.mipmaps&&P.mipmaps.length>0){Y.__webglFramebuffer=[];for(let yt=0;yt<P.mipmaps.length;yt++)Y.__webglFramebuffer[yt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(lt)if(s.drawBuffers){let yt=I.texture;for(let Tt=0,Bt=yt.length;Tt<Bt;Tt++){let Yt=n.get(yt[Tt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&et(I)===!1){let yt=lt?P:[P];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Tt=0;Tt<yt.length;Tt++){let Bt=yt[Tt];Y.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt]);let Yt=r.convert(Bt.format,Bt.colorSpace),st=r.convert(Bt.type),Xt=M(Bt.internalFormat,Yt,st,Bt.colorSpace,I.isXRRenderTarget===!0),ee=dt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Xt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(Y.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),X(i.TEXTURE_CUBE_MAP,P,Ct);for(let yt=0;yt<6;yt++)if(a&&P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)gt(Y.__webglFramebuffer[yt][Tt],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Tt);else gt(Y.__webglFramebuffer[yt],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);E(P,Ct)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){let yt=I.texture;for(let Tt=0,Bt=yt.length;Tt<Bt;Tt++){let Yt=yt[Tt],st=n.get(Yt);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),X(i.TEXTURE_2D,Yt,Ct),gt(Y.__webglFramebuffer,I,Yt,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,0),E(Yt,Ct)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?yt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(yt,at.__webglTexture),X(yt,P,Ct),a&&P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)gt(Y.__webglFramebuffer[Tt],I,P,i.COLOR_ATTACHMENT0,yt,Tt);else gt(Y.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,yt,0);E(P,Ct)&&g(yt),e.unbindTexture()}I.depthBuffer&&bt(I)}function ot(I){let P=m(I)||a,Y=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let at=0,ct=Y.length;at<ct;at++){let lt=Y[at];if(E(lt,P)){let Ct=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(lt).__webglTexture;e.bindTexture(Ct,yt),g(Ct),e.unbindTexture()}}}function tt(I){if(a&&I.samples>0&&et(I)===!1){let P=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Y=I.width,at=I.height,ct=i.COLOR_BUFFER_BIT,lt=[],Ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(I),Tt=I.isWebGLMultipleRenderTargets===!0;if(Tt)for(let Bt=0;Bt<P.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Bt=0;Bt<P.length;Bt++){lt.push(i.COLOR_ATTACHMENT0+Bt),I.depthBuffer&&lt.push(Ct);let Yt=yt.__ignoreDepthValues!==void 0?yt.__ignoreDepthValues:!1;if(Yt===!1&&(I.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),Tt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Bt]),Yt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ct]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ct])),Tt){let st=n.get(P[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,Y,at,0,0,Y,at,ct,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Bt=0;Bt<P.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Bt]);let Yt=n.get(P[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}}function dt(I){return Math.min(s.maxSamples,I.samples)}function et(I){let P=n.get(I);return a&&I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Mt(I){let P=o.render.frame;h.get(I)!==P&&(h.set(I,P),I.update())}function wt(I,P){let Y=I.colorSpace,at=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Vc||Y!==Ji&&Y!==oi&&(Te.getTransfer(Y)===Ie?a===!1?t.has("EXT_sRGB")===!0&&at===mi?(I.format=Vc,I.minFilter=On,I.generateMipmaps=!1):P=aa.sRGBToLinear(P):(at!==mi||ct!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),P}this.allocateTextureUnit=R,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=O,this.rebindTextures=Ft,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=et}function Sy(i,t,e){let n=e.isWebGL2;function s(r,o=oi){let a,c=Te.getTransfer(o);if(r===Ai)return i.UNSIGNED_BYTE;if(r===Yu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Zu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ap)return i.BYTE;if(r===cp)return i.SHORT;if(r===Ll)return i.UNSIGNED_SHORT;if(r===qu)return i.INT;if(r===us)return i.UNSIGNED_INT;if(r===ds)return i.FLOAT;if(r===jr)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===lp)return i.ALPHA;if(r===mi)return i.RGBA;if(r===hp)return i.LUMINANCE;if(r===up)return i.LUMINANCE_ALPHA;if(r===zs)return i.DEPTH_COMPONENT;if(r===Mr)return i.DEPTH_STENCIL;if(r===Vc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Dl)return i.RED;if(r===$u)return i.RED_INTEGER;if(r===dp)return i.RG;if(r===Ju)return i.RG_INTEGER;if(r===Ku)return i.RGBA_INTEGER;if(r===sc||r===rc||r===oc||r===ac)if(c===Ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===yh||r===_h||r===vh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===xh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ju)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mh||r===Eh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Mh)return c===Ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Eh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wh||r===bh||r===Sh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Ih||r===Lh||r===Dh||r===Uh||r===Hh||r===Nh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===wh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Th)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ch)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ph)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ih)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nh)return c===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cc||r===zh||r===Oh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===cc)return c===Ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Oh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fp||r===Fh||r===Bh||r===kh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===cc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ns?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var il=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Rt=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ty={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ty)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sl=class extends gs{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,x=null,y=e.getContextAttributes(),m=null,f=null,E=[],g=[],M=new ht,T=null,S=new Tn;S.layers.enable(1),S.viewport=new Ne;let _=new Tn;_.layers.enable(2),_.viewport=new Ne;let A=[S,_],v=new il;v.layers.enable(1),v.layers.enable(2);let w=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=E[X];return K===void 0&&(K=new Yr,E[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=E[X];return K===void 0&&(K=new Yr,E[X]=K),K.getGripSpace()},this.getHand=function(X){let K=E[X];return K===void 0&&(K=new Yr,E[X]=K),K.getHandSpace()};function N(X){let K=g.indexOf(X.inputSource);if(K===-1)return;let it=E[K];it!==void 0&&(it.update(X.inputSource,X.frame,l||o),it.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",R);for(let X=0;X<E.length;X++){let K=g[X];K!==null&&(g[X]=null,E[X].disconnect(K))}w=null,b=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",L),s.addEventListener("inputsourceschange",R),y.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ki(p.framebufferWidth,p.framebufferHeight,{format:mi,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,it=null,ft=null;y.depth&&(ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=y.stencil?Mr:zs,it=y.stencil?Ns:us);let gt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Ki(d.textureWidth,d.textureHeight,{format:mi,type:Ai,depthTexture:new _a(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let Gt=t.properties.get(f);Gt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(X){for(let K=0;K<X.removed.length;K++){let it=X.removed[K],ft=g.indexOf(it);ft>=0&&(g[ft]=null,E[ft].disconnect(it))}for(let K=0;K<X.added.length;K++){let it=X.added[K],ft=g.indexOf(it);if(ft===-1){for(let Gt=0;Gt<E.length;Gt++)if(Gt>=g.length){g.push(it),ft=Gt;break}else if(g[Gt]===null){g[Gt]=it,ft=Gt;break}if(ft===-1)break}let gt=E[ft];gt&&gt.connect(it)}}let D=new z,F=new z;function H(X,K,it){D.setFromMatrixPosition(K.matrixWorld),F.setFromMatrixPosition(it.matrixWorld);let ft=D.distanceTo(F),gt=K.projectionMatrix.elements,Gt=it.projectionMatrix.elements,Vt=gt[14]/(gt[10]-1),bt=gt[14]/(gt[10]+1),Ft=(gt[9]+1)/gt[5],B=(gt[9]-1)/gt[5],ot=(gt[8]-1)/gt[0],tt=(Gt[8]+1)/Gt[0],dt=Vt*ot,et=Vt*tt,Mt=ft/(-ot+tt),wt=Mt*-ot;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(wt),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let I=Vt+Mt,P=bt+Mt,Y=dt-wt,at=et+(ft-wt),ct=Ft*bt/P*I,lt=B*bt/P*I;X.projectionMatrix.makePerspective(Y,at,ct,lt,I,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function U(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;v.near=_.near=S.near=X.near,v.far=_.far=S.far=X.far,(w!==v.near||b!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,b=v.far);let K=X.parent,it=v.cameras;U(v,K);for(let ft=0;ft<it.length;ft++)U(it[ft],K);it.length===2?H(v,S,_):v.projectionMatrix.copy(S.projectionMatrix),O(X,v,K)};function O(X,K,it){it===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(it.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Qr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let V=null;function q(X,K){if(h=K.getViewerPose(l||o),x=K,h!==null){let it=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let ft=!1;it.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let gt=0;gt<it.length;gt++){let Gt=it[gt],Vt=null;if(p!==null)Vt=p.getViewport(Gt);else{let Ft=u.getViewSubImage(d,Gt);Vt=Ft.viewport,gt===0&&(t.setRenderTargetTextures(f,Ft.colorTexture,d.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(f))}let bt=A[gt];bt===void 0&&(bt=new Tn,bt.layers.enable(gt),bt.viewport=new Ne,A[gt]=bt),bt.matrix.fromArray(Gt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Gt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),gt===0&&(v.matrix.copy(bt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(bt)}}for(let it=0;it<E.length;it++){let ft=g[it],gt=E[it];ft!==null&&gt!==void 0&&gt.update(ft,K,l||o)}V&&V(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}let nt=new sd;nt.setAnimationLoop(q),this.setAnimationLoop=function(X){V=X},this.dispose=function(){}}};function Ay(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,id(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,g,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,E,g):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===An&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===An&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=t.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let g=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=g*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ry(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,g){let M=g.program;n.uniformBlockBinding(E,M)}function l(E,g){let M=s[E.id];M===void 0&&(x(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));let T=g.program;n.updateUBOMapping(E,T);let S=t.render.frame;r[E.id]!==S&&(d(E),r[E.id]=S)}function h(E){let g=u();E.__bindingPointIndex=g;let M=i.createBuffer(),T=E.__size,S=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let g=s[E.id],M=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let S=0,_=M.length;S<_;S++){let A=Array.isArray(M[S])?M[S]:[M[S]];for(let v=0,w=A.length;v<w;v++){let b=A[v];if(p(b,S,v,T)===!0){let N=b.__offset,L=Array.isArray(b.value)?b.value:[b.value],R=0;for(let D=0;D<L.length;D++){let F=L[D],H=y(F);typeof F=="number"||typeof F=="boolean"?(b.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,N+R,b.__data)):F.isMatrix3?(b.__data[0]=F.elements[0],b.__data[1]=F.elements[1],b.__data[2]=F.elements[2],b.__data[3]=0,b.__data[4]=F.elements[3],b.__data[5]=F.elements[4],b.__data[6]=F.elements[5],b.__data[7]=0,b.__data[8]=F.elements[6],b.__data[9]=F.elements[7],b.__data[10]=F.elements[8],b.__data[11]=0):(F.toArray(b.__data,R),R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,g,M,T){let S=E.value,_=g+"_"+M;if(T[_]===void 0)return typeof S=="number"||typeof S=="boolean"?T[_]=S:T[_]=S.clone(),!0;{let A=T[_];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return T[_]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function x(E){let g=E.uniforms,M=0,T=16;for(let _=0,A=g.length;_<A;_++){let v=Array.isArray(g[_])?g[_]:[g[_]];for(let w=0,b=v.length;w<b;w++){let N=v[w],L=Array.isArray(N.value)?N.value:[N.value];for(let R=0,D=L.length;R<D;R++){let F=L[R],H=y(F),U=M%T;U!==0&&T-U<H.boundary&&(M+=T-U),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=H.storage}}}let S=M%T;return S>0&&(M+=T-S),E.__size=M,E.__cache={},this}function y(E){let g={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(g.boundary=4,g.storage=4):E.isVector2?(g.boundary=8,g.storage=8):E.isVector3||E.isColor?(g.boundary=16,g.storage=12):E.isVector4?(g.boundary=16,g.storage=16):E.isMatrix3?(g.boundary=48,g.storage=48):E.isMatrix4?(g.boundary=64,g.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),g}function m(E){let g=E.target;g.removeEventListener("dispose",m);let M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var eo=class{constructor(t={}){let{canvas:e=Op(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),x=new Int32Array(4),y=null,m=null,f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this._useLegacyLights=!1,this.toneMapping=ps,this.toneMappingExposure=1;let g=this,M=!1,T=0,S=0,_=null,A=-1,v=null,w=new Ne,b=new Ne,N=null,L=new rt(0),R=0,D=e.width,F=e.height,H=1,U=null,O=null,V=new Ne(0,0,D,F),q=new Ne(0,0,D,F),nt=!1,X=new to,K=!1,it=!1,ft=null,gt=new ze,Gt=new ht,Vt=new z,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return _===null?H:1}let B=n;function ot(C,W){for(let $=0;$<C.length;$++){let j=C[$],J=e.getContext(j,W);if(J!==null)return J}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cl}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",ut,!1),B===null){let W=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&W.shift(),B=ot(W,C),B===null)throw ot(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let tt,dt,et,Mt,wt,I,P,Y,at,ct,lt,Ct,yt,Tt,Bt,Yt,st,Xt,ee,qt,Ht,At,$t,Q;function be(){tt=new Yg(B),dt=new kg(B,tt,t),tt.init(dt),At=new Sy(B,tt,dt),et=new wy(B,tt,dt),Mt=new Jg(B),wt=new uy,I=new by(B,tt,et,wt,dt,At,Mt),P=new Vg(g),Y=new qg(g),at=new sm(B,dt),$t=new Fg(B,tt,at,dt),ct=new Zg(B,at,Mt,$t),lt=new tx(B,ct,at,Mt),ee=new Qg(B,dt,I),Yt=new Gg(wt),Ct=new hy(g,P,Y,tt,dt,$t,Yt),yt=new Ay(g,wt),Tt=new fy,Bt=new _y(tt,dt),Xt=new Og(g,P,Y,et,lt,d,c),st=new Ey(g,lt,dt),Q=new Ry(B,Mt,dt,et),qt=new Bg(B,tt,Mt,dt),Ht=new $g(B,tt,Mt,dt),Mt.programs=Ct.programs,g.capabilities=dt,g.extensions=tt,g.properties=wt,g.renderLists=Tt,g.shadowMap=st,g.state=et,g.info=Mt}be();let Qt=new sl(g,B);this.xr=Qt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let C=tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(D,F,!1))},this.getSize=function(C){return C.set(D,F)},this.setSize=function(C,W,$=!0){if(Qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,F=W,e.width=Math.floor(C*H),e.height=Math.floor(W*H),$===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(D*H,F*H).floor()},this.setDrawingBufferSize=function(C,W,$){D=C,F=W,H=$,e.width=Math.floor(C*$),e.height=Math.floor(W*$),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,W,$,j){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,W,$,j),et.viewport(w.copy(V).multiplyScalar(H).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,W,$,j){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,W,$,j),et.scissor(b.copy(q).multiplyScalar(H).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){et.setScissorTest(nt=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(C=!0,W=!0,$=!0){let j=0;if(C){let J=!1;if(_!==null){let St=_.texture.format;J=St===Ku||St===Ju||St===$u}if(J){let St=_.texture.type,zt=St===Ai||St===us||St===Ll||St===Ns||St===Yu||St===Zu,Wt=Xt.getClearColor(),Zt=Xt.getClearAlpha(),ne=Wt.r,Jt=Wt.g,Kt=Wt.b;zt?(p[0]=ne,p[1]=Jt,p[2]=Kt,p[3]=Zt,B.clearBufferuiv(B.COLOR,0,p)):(x[0]=ne,x[1]=Jt,x[2]=Kt,x[3]=Zt,B.clearBufferiv(B.COLOR,0,x))}else j|=B.COLOR_BUFFER_BIT}W&&(j|=B.DEPTH_BUFFER_BIT),$&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Tt.dispose(),Bt.dispose(),wt.dispose(),P.dispose(),Y.dispose(),lt.dispose(),$t.dispose(),Q.dispose(),Ct.dispose(),Qt.dispose(),Qt.removeEventListener("sessionstart",Ce),Qt.removeEventListener("sessionend",xe),ft&&(ft.dispose(),ft=null),Ze.stop()};function Z(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let C=Mt.autoReset,W=st.enabled,$=st.autoUpdate,j=st.needsUpdate,J=st.type;be(),Mt.autoReset=C,st.enabled=W,st.autoUpdate=$,st.needsUpdate=j,st.type=J}function ut(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pt(C){let W=C.target;W.removeEventListener("dispose",pt),_t(W)}function _t(C){Nt(C),wt.remove(C)}function Nt(C){let W=wt.get(C).programs;W!==void 0&&(W.forEach(function($){Ct.releaseProgram($)}),C.isShaderMaterial&&Ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,$,j,J,St){W===null&&(W=bt);let zt=J.isMesh&&J.matrixWorld.determinant()<0,Wt=Pt(C,W,$,j,J);et.setMaterial(j,zt);let Zt=$.index,ne=1;if(j.wireframe===!0){if(Zt=ct.getWireframeAttribute($),Zt===void 0)return;ne=2}let Jt=$.drawRange,Kt=$.attributes.position,qe=Jt.start*ne,$n=(Jt.start+Jt.count)*ne;St!==null&&(qe=Math.max(qe,St.start*ne),$n=Math.min($n,(St.start+St.count)*ne)),Zt!==null?(qe=Math.max(qe,0),$n=Math.min($n,Zt.count)):Kt!=null&&(qe=Math.max(qe,0),$n=Math.min($n,Kt.count));let rn=$n-qe;if(rn<0||rn===1/0)return;$t.setup(J,j,Wt,$,Zt);let ki,Be=qt;if(Zt!==null&&(ki=at.get(Zt),Be=Ht,Be.setIndex(ki)),J.isMesh)j.wireframe===!0?(et.setLineWidth(j.wireframeLinewidth*Ft()),Be.setMode(B.LINES)):Be.setMode(B.TRIANGLES);else if(J.isLine){let se=j.linewidth;se===void 0&&(se=1),et.setLineWidth(se*Ft()),J.isLineSegments?Be.setMode(B.LINES):J.isLineLoop?Be.setMode(B.LINE_LOOP):Be.setMode(B.LINE_STRIP)}else J.isPoints?Be.setMode(B.POINTS):J.isSprite&&Be.setMode(B.TRIANGLES);if(J.isBatchedMesh)Be.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Be.renderInstances(qe,rn,J.count);else if($.isInstancedBufferGeometry){let se=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Qa=Math.min($.instanceCount,se);Be.renderInstances(qe,rn,Qa)}else Be.render(qe,rn)};function pe(C,W,$){C.transparent===!0&&C.side===le&&C.forceSinglePass===!1?(C.side=An,C.needsUpdate=!0,Lt(C,W,$),C.side=ms,C.needsUpdate=!0,Lt(C,W,$),C.side=le):Lt(C,W,$)}this.compile=function(C,W,$=null){$===null&&($=C),m=Bt.get($),m.init(),E.push(m),$.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),C!==$&&C.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(g._useLegacyLights);let j=new Set;return C.traverse(function(J){let St=J.material;if(St)if(Array.isArray(St))for(let zt=0;zt<St.length;zt++){let Wt=St[zt];pe(Wt,$,J),j.add(Wt)}else pe(St,$,J),j.add(St)}),E.pop(),m=null,j},this.compileAsync=function(C,W,$=null){let j=this.compile(C,W,$);return new Promise(J=>{function St(){if(j.forEach(function(zt){wt.get(zt).currentProgram.isReady()&&j.delete(zt)}),j.size===0){J(C);return}setTimeout(St,10)}tt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let he=null;function _e(C){he&&he(C)}function Ce(){Ze.stop()}function xe(){Ze.start()}let Ze=new sd;Ze.setAnimationLoop(_e),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(C){he=C,Qt.setAnimationLoop(C),C===null?Ze.stop():Ze.start()},Qt.addEventListener("sessionstart",Ce),Qt.addEventListener("sessionend",xe),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Qt.enabled===!0&&Qt.isPresenting===!0&&(Qt.cameraAutoUpdate===!0&&Qt.updateCamera(W),W=Qt.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,W,_),m=Bt.get(C,E.length),m.init(),E.push(m),gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),X.setFromProjectionMatrix(gt),it=this.localClippingEnabled,K=Yt.init(this.clippingPlanes,it),y=Tt.get(C,f.length),y.init(),f.push(y),Hn(C,W,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(U,O),this.info.render.frame++,K===!0&&Yt.beginShadows();let $=m.state.shadowsArray;if(st.render($,C,W),K===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(y,C),m.setupLights(g._useLegacyLights),W.isArrayCamera){let j=W.cameras;for(let J=0,St=j.length;J<St;J++){let zt=j[J];$e(y,C,zt,zt.viewport)}}else $e(y,C,W);_!==null&&(I.updateMultisampleRenderTarget(_),I.updateRenderTargetMipmap(_)),C.isScene===!0&&C.onAfterRender(g,C,W),$t.resetDefaultState(),A=-1,v=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Hn(C,W,$,j){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){j&&Vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(gt);let zt=lt.update(C),Wt=C.material;Wt.visible&&y.push(C,zt,Wt,$,Vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let zt=lt.update(C),Wt=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Vt.copy(C.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Vt.copy(zt.boundingSphere.center)),Vt.applyMatrix4(C.matrixWorld).applyMatrix4(gt)),Array.isArray(Wt)){let Zt=zt.groups;for(let ne=0,Jt=Zt.length;ne<Jt;ne++){let Kt=Zt[ne],qe=Wt[Kt.materialIndex];qe&&qe.visible&&y.push(C,zt,qe,$,Vt.z,Kt)}}else Wt.visible&&y.push(C,zt,Wt,$,Vt.z,null)}}let St=C.children;for(let zt=0,Wt=St.length;zt<Wt;zt++)Hn(St[zt],W,$,j)}function $e(C,W,$,j){let J=C.opaque,St=C.transmissive,zt=C.transparent;m.setupLightsView($),K===!0&&Yt.setGlobalState(g.clippingPlanes,$),St.length>0&&Hr(J,St,W,$),j&&et.viewport(w.copy(j)),J.length>0&&pn(J,W,$),St.length>0&&pn(St,W,$),zt.length>0&&pn(zt,W,$),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Hr(C,W,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;let St=dt.isWebGL2;ft===null&&(ft=new Ki(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?jr:Ai,minFilter:Kr,samples:St?4:0})),g.getDrawingBufferSize(Gt),St?ft.setSize(Gt.x,Gt.y):ft.setSize(ra(Gt.x),ra(Gt.y));let zt=g.getRenderTarget();g.setRenderTarget(ft),g.getClearColor(L),R=g.getClearAlpha(),R<1&&g.setClearColor(16777215,.5),g.clear();let Wt=g.toneMapping;g.toneMapping=ps,pn(C,$,j),I.updateMultisampleRenderTarget(ft),I.updateRenderTargetMipmap(ft);let Zt=!1;for(let ne=0,Jt=W.length;ne<Jt;ne++){let Kt=W[ne],qe=Kt.object,$n=Kt.geometry,rn=Kt.material,ki=Kt.group;if(rn.side===le&&qe.layers.test(j.layers)){let Be=rn.side;rn.side=An,rn.needsUpdate=!0,bi(qe,$,j,$n,rn,ki),rn.side=Be,rn.needsUpdate=!0,Zt=!0}}Zt===!0&&(I.updateMultisampleRenderTarget(ft),I.updateRenderTargetMipmap(ft)),g.setRenderTarget(zt),g.setClearColor(L,R),g.toneMapping=Wt}function pn(C,W,$){let j=W.isScene===!0?W.overrideMaterial:null;for(let J=0,St=C.length;J<St;J++){let zt=C[J],Wt=zt.object,Zt=zt.geometry,ne=j===null?zt.material:j,Jt=zt.group;Wt.layers.test($.layers)&&bi(Wt,W,$,Zt,ne,Jt)}}function bi(C,W,$,j,J,St){C.onBeforeRender(g,W,$,j,J,St),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(g,W,$,j,C,St),J.transparent===!0&&J.side===le&&J.forceSinglePass===!1?(J.side=An,J.needsUpdate=!0,g.renderBufferDirect($,W,j,J,C,St),J.side=ms,J.needsUpdate=!0,g.renderBufferDirect($,W,j,J,C,St),J.side=le):g.renderBufferDirect($,W,j,J,C,St),C.onAfterRender(g,W,$,j,J,St)}function Lt(C,W,$){W.isScene!==!0&&(W=bt);let j=wt.get(C),J=m.state.lights,St=m.state.shadowsArray,zt=J.state.version,Wt=Ct.getParameters(C,J.state,St,W,$),Zt=Ct.getProgramCacheKey(Wt),ne=j.programs;j.environment=C.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(C.isMeshStandardMaterial?Y:P).get(C.envMap||j.environment),ne===void 0&&(C.addEventListener("dispose",pt),ne=new Map,j.programs=ne);let Jt=ne.get(Zt);if(Jt!==void 0){if(j.currentProgram===Jt&&j.lightsStateVersion===zt)return ce(C,Wt),Jt}else Wt.uniforms=Ct.getUniforms(C),C.onBuild($,Wt,g),C.onBeforeCompile(Wt,g),Jt=Ct.acquireProgram(Wt,Zt),ne.set(Zt,Jt),j.uniforms=Wt.uniforms;let Kt=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Kt.clippingPlanes=Yt.uniform),ce(C,Wt),j.needsLights=mt(C),j.lightsStateVersion=zt,j.needsLights&&(Kt.ambientLightColor.value=J.state.ambient,Kt.lightProbe.value=J.state.probe,Kt.directionalLights.value=J.state.directional,Kt.directionalLightShadows.value=J.state.directionalShadow,Kt.spotLights.value=J.state.spot,Kt.spotLightShadows.value=J.state.spotShadow,Kt.rectAreaLights.value=J.state.rectArea,Kt.ltc_1.value=J.state.rectAreaLTC1,Kt.ltc_2.value=J.state.rectAreaLTC2,Kt.pointLights.value=J.state.point,Kt.pointLightShadows.value=J.state.pointShadow,Kt.hemisphereLights.value=J.state.hemi,Kt.directionalShadowMap.value=J.state.directionalShadowMap,Kt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Kt.spotShadowMap.value=J.state.spotShadowMap,Kt.spotLightMatrix.value=J.state.spotLightMatrix,Kt.spotLightMap.value=J.state.spotLightMap,Kt.pointShadowMap.value=J.state.pointShadowMap,Kt.pointShadowMatrix.value=J.state.pointShadowMatrix),j.currentProgram=Jt,j.uniformsList=null,Jt}function ue(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=yr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function ce(C,W){let $=wt.get(C);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Pt(C,W,$,j,J){W.isScene!==!0&&(W=bt),I.resetTextureUnits();let St=W.fog,zt=j.isMeshStandardMaterial?W.environment:null,Wt=_===null?g.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Ji,Zt=(j.isMeshStandardMaterial?Y:P).get(j.envMap||zt),ne=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Jt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Kt=!!$.morphAttributes.position,qe=!!$.morphAttributes.normal,$n=!!$.morphAttributes.color,rn=ps;j.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(rn=g.toneMapping);let ki=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Be=ki!==void 0?ki.length:0,se=wt.get(j),Qa=m.state.lights;if(K===!0&&(it===!0||C!==v)){let si=C===v&&j.id===A;Yt.setState(j,C,si)}let Ve=!1;j.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Qa.state.version||se.outputColorSpace!==Wt||J.isBatchedMesh&&se.batching===!1||!J.isBatchedMesh&&se.batching===!0||J.isInstancedMesh&&se.instancing===!1||!J.isInstancedMesh&&se.instancing===!0||J.isSkinnedMesh&&se.skinning===!1||!J.isSkinnedMesh&&se.skinning===!0||J.isInstancedMesh&&se.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&se.instancingColor===!1&&J.instanceColor!==null||se.envMap!==Zt||j.fog===!0&&se.fog!==St||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Yt.numPlanes||se.numIntersection!==Yt.numIntersection)||se.vertexAlphas!==ne||se.vertexTangents!==Jt||se.morphTargets!==Kt||se.morphNormals!==qe||se.morphColors!==$n||se.toneMapping!==rn||dt.isWebGL2===!0&&se.morphTargetsCount!==Be)&&(Ve=!0):(Ve=!0,se.__version=j.version);let As=se.currentProgram;Ve===!0&&(As=Lt(j,W,J));let lh=!1,Nr=!1,tc=!1,wn=As.getUniforms(),Rs=se.uniforms;if(et.useProgram(As.program)&&(lh=!0,Nr=!0,tc=!0),j.id!==A&&(A=j.id,Nr=!0),lh||v!==C){wn.setValue(B,"projectionMatrix",C.projectionMatrix),wn.setValue(B,"viewMatrix",C.matrixWorldInverse);let si=wn.map.cameraPosition;si!==void 0&&si.setValue(B,Vt.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&wn.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&wn.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,Nr=!0,tc=!0)}if(J.isSkinnedMesh){wn.setOptional(B,J,"bindMatrix"),wn.setOptional(B,J,"bindMatrixInverse");let si=J.skeleton;si&&(dt.floatVertexTextures?(si.boneTexture===null&&si.computeBoneTexture(),wn.setValue(B,"boneTexture",si.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(wn.setOptional(B,J,"batchingTexture"),wn.setValue(B,"batchingTexture",J._matricesTexture,I));let ec=$.morphAttributes;if((ec.position!==void 0||ec.normal!==void 0||ec.color!==void 0&&dt.isWebGL2===!0)&&ee.update(J,$,As),(Nr||se.receiveShadow!==J.receiveShadow)&&(se.receiveShadow=J.receiveShadow,wn.setValue(B,"receiveShadow",J.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Rs.envMap.value=Zt,Rs.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),Nr&&(wn.setValue(B,"toneMappingExposure",g.toneMappingExposure),se.needsLights&&Si(Rs,tc),St&&j.fog===!0&&yt.refreshFogUniforms(Rs,St),yt.refreshMaterialUniforms(Rs,j,H,F,ft),yr.upload(B,ue(se),Rs,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(yr.upload(B,ue(se),Rs,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&wn.setValue(B,"center",J.center),wn.setValue(B,"modelViewMatrix",J.modelViewMatrix),wn.setValue(B,"normalMatrix",J.normalMatrix),wn.setValue(B,"modelMatrix",J.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let si=j.uniformsGroups;for(let nc=0,Tf=si.length;nc<Tf;nc++)if(dt.isWebGL2){let hh=si[nc];Q.update(hh,As),Q.bind(hh,As)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return As}function Si(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function mt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(C,W,$){wt.get(C.texture).__webglTexture=W,wt.get(C.depthTexture).__webglTexture=$;let j=wt.get(C);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){let $=wt.get(C);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,$=0){_=C,T=W,S=$;let j=!0,J=null,St=!1,zt=!1;if(C){let Zt=wt.get(C);Zt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(B.FRAMEBUFFER,null),j=!1):Zt.__webglFramebuffer===void 0?I.setupRenderTarget(C):Zt.__hasExternalTextures&&I.rebindTextures(C,wt.get(C.texture).__webglTexture,wt.get(C.depthTexture).__webglTexture);let ne=C.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(zt=!0);let Jt=wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Jt[W])?J=Jt[W][$]:J=Jt[W],St=!0):dt.isWebGL2&&C.samples>0&&I.useMultisampledRTT(C)===!1?J=wt.get(C).__webglMultisampledFramebuffer:Array.isArray(Jt)?J=Jt[$]:J=Jt,w.copy(C.viewport),b.copy(C.scissor),N=C.scissorTest}else w.copy(V).multiplyScalar(H).floor(),b.copy(q).multiplyScalar(H).floor(),N=nt;if(et.bindFramebuffer(B.FRAMEBUFFER,J)&&dt.drawBuffers&&j&&et.drawBuffers(C,J),et.viewport(w),et.scissor(b),et.setScissorTest(N),St){let Zt=wt.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Zt.__webglTexture,$)}else if(zt){let Zt=wt.get(C.texture),ne=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zt.__webglTexture,$||0,ne)}A=-1},this.readRenderTargetPixels=function(C,W,$,j,J,St,zt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt){et.bindFramebuffer(B.FRAMEBUFFER,Wt);try{let Zt=C.texture,ne=Zt.format,Jt=Zt.type;if(ne!==mi&&At.convert(ne)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Kt=Jt===jr&&(tt.has("EXT_color_buffer_half_float")||dt.isWebGL2&&tt.has("EXT_color_buffer_float"));if(Jt!==Ai&&At.convert(Jt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Jt===ds&&(dt.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-j&&$>=0&&$<=C.height-J&&B.readPixels(W,$,j,J,At.convert(ne),At.convert(Jt),St)}finally{let Zt=_!==null?wt.get(_).__webglFramebuffer:null;et.bindFramebuffer(B.FRAMEBUFFER,Zt)}}},this.copyFramebufferToTexture=function(C,W,$=0){let j=Math.pow(2,-$),J=Math.floor(W.image.width*j),St=Math.floor(W.image.height*j);I.setTexture2D(W,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,C.x,C.y,J,St),et.unbindTexture()},this.copyTextureToTexture=function(C,W,$,j=0){let J=W.image.width,St=W.image.height,zt=At.convert($.format),Wt=At.convert($.type);I.setTexture2D($,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment),W.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,j,C.x,C.y,J,St,zt,Wt,W.image.data):W.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,j,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,zt,W.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,j,C.x,C.y,zt,Wt,W.image),j===0&&$.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(C,W,$,j,J=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let St=C.max.x-C.min.x+1,zt=C.max.y-C.min.y+1,Wt=C.max.z-C.min.z+1,Zt=At.convert(j.format),ne=At.convert(j.type),Jt;if(j.isData3DTexture)I.setTexture3D(j,0),Jt=B.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)I.setTexture2DArray(j,0),Jt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);let Kt=B.getParameter(B.UNPACK_ROW_LENGTH),qe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$n=B.getParameter(B.UNPACK_SKIP_PIXELS),rn=B.getParameter(B.UNPACK_SKIP_ROWS),ki=B.getParameter(B.UNPACK_SKIP_IMAGES),Be=$.isCompressedTexture?$.mipmaps[J]:$.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Be.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Be.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,C.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,C.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?B.texSubImage3D(Jt,J,W.x,W.y,W.z,St,zt,Wt,Zt,ne,Be.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Jt,J,W.x,W.y,W.z,St,zt,Wt,Zt,Be.data)):B.texSubImage3D(Jt,J,W.x,W.y,W.z,St,zt,Wt,Zt,ne,Be),B.pixelStorei(B.UNPACK_ROW_LENGTH,Kt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$n),B.pixelStorei(B.UNPACK_SKIP_ROWS,rn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ki),J===0&&j.generateMipmaps&&B.generateMipmap(Jt),et.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),et.unbindTexture()},this.resetState=function(){T=0,S=0,_=null,et.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Hl?"display-p3":"srgb",e.unpackColorSpace=Te.workingColorSpace===Na?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?Os:Qu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Os?Le:Ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},rl=class extends eo{};rl.prototype.isWebGL1Renderer=!0;var va=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ma=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ea=class extends jn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=mn,h=mn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wa=class extends ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hr=new ze,Lu=new ze,Xo=[],Du=new me,Cy=new ze,kr=new G,Gr=new ys,ba=class extends G{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new me),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),Du.copy(t.boundingBox).applyMatrix4(hr),this.boundingBox.union(Du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),Gr.copy(t.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(Gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),t.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),Lu.multiplyMatrices(n,hr),kr.matrixWorld=Lu,kr.raycast(t,Xo);for(let o=0,a=Xo.length;o<a;o++){let c=Xo[o];c.instanceId=r,c.object=this,e.push(c)}Xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var gn=class extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Uu=new ze,ol=new ha,qo=new ys,Yo=new z,Pn=class extends cn{constructor(t=new de,e=new gn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,t.ray.intersectsSphere(qo)===!1)return;Uu.copy(s).invert(),ol.copy(t.ray).applyMatrix4(Uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let x=d,y=p;x<y;x++){let m=l.getX(x);Yo.fromBufferAttribute(u,m),Hu(Yo,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,y=p;x<y;x++)Yo.fromBufferAttribute(u,x),Hu(Yo,x,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hu(i,t,e,n,s,r,o){let a=ol.distanceSqToPoint(i);if(a<e){let c=new z;ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var Ri=class extends jn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new z,s=[],r=[],o=[],a=new z,c=new ze;for(let p=0;p<=t;p++){let x=p/t;s[p]=this.getTangentAt(x,new z)}r[0]=new z,o[0]=new z;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(an(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(an(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},no=class extends ai{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new ht,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},al=class extends no{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Zo=new z,Lc=new Fl,Dc=new Fl,Uc=new Fl,cl=class extends ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Zo.subVectors(s[0],s[1]).add(s[0]),l=Zo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),x<1e-4&&(x=y),m<1e-4&&(m=y),Lc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,x,y,m),Dc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,x,y,m),Uc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,x,y,m)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Dc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Uc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Lc.calc(c),Dc.calc(c),Uc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Py(i,t){let e=1-i;return e*e*t}function Iy(i,t){return 2*(1-i)*i*t}function Ly(i,t){return i*i*t}function Zr(i,t,e,n){return Py(i,t)+Iy(i,e)+Ly(i,n)}function Dy(i,t){let e=1-i;return e*e*e*t}function Uy(i,t){let e=1-i;return 3*e*e*i*t}function Hy(i,t){return 3*(1-i)*i*i*t}function Ny(i,t){return i*i*i*t}function $r(i,t,e,n,s){return Dy(i,t)+Uy(i,e)+Hy(i,n)+Ny(i,s)}var Sa=class extends ai{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ll=class extends ai{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($r(t,s.x,r.x,o.x,a.x),$r(t,s.y,r.y,o.y,a.y),$r(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ta=class extends ai{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hl=class extends ai{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends ai{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ul=class extends ai{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y),Zr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Nu(a,c.x,l.x,h.x,u.x),Nu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},dl=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:cl,CubicBezierCurve:Sa,CubicBezierCurve3:ll,EllipseCurve:no,LineCurve:Ta,LineCurve3:hl,QuadraticBezierCurve:Aa,QuadraticBezierCurve3:ul,SplineCurve:Ra}),fl=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new dl[s.type]().fromJSON(s))}return this}},io=class extends fl{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ta(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Aa(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Sa(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ra(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new no(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},pl=class i extends de{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=an(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new z,d=new ht,p=new z,x=new z,y=new z,m=0,f=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(x)}for(let E=0;E<=e;E++){let g=n+E*h*s,M=Math.sin(g),T=Math.cos(g);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*M,u.y=t[S].y,u.z=t[S].x*T,o.push(u.x,u.y,u.z),d.x=E/e,d.y=S/(t.length-1),a.push(d.x,d.y);let _=c[3*S+0]*M,A=c[3*S+1],v=c[3*S+0]*T;l.push(_,A,v)}}for(let E=0;E<e;E++)for(let g=0;g<t.length-1;g++){let M=g+E*t.length,T=M,S=M+t.length,_=M+t.length+1,A=M+1;r.push(T,S,A),r.push(_,A,S)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ca=class i extends pl{constructor(t=1,e=1,n=4,s=8){let r=new io;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ke=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new z,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},kt=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],x=0,y=[],m=n/2,f=0;E(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(p,2));function E(){let M=new z,T=new z,S=0,_=(e-t)/n;for(let A=0;A<=r;A++){let v=[],w=A/r,b=w*(e-t)+t;for(let N=0;N<=s;N++){let L=N/s,R=L*c+a,D=Math.sin(R),F=Math.cos(R);T.x=b*D,T.y=-w*n+m,T.z=b*F,u.push(T.x,T.y,T.z),M.set(D,_,F).normalize(),d.push(M.x,M.y,M.z),p.push(L,1-w),v.push(x++)}y.push(v)}for(let A=0;A<s;A++)for(let v=0;v<r;v++){let w=y[v][A],b=y[v+1][A],N=y[v+1][A+1],L=y[v][A+1];h.push(w,b,L),h.push(b,N,L),S+=6}l.addGroup(f,S,0),f+=S}function g(M){let T=x,S=new ht,_=new z,A=0,v=M===!0?t:e,w=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),x++;let b=x;for(let N=0;N<=s;N++){let R=N/s*c+a,D=Math.cos(R),F=Math.sin(R);_.x=v*F,_.y=m*w,_.z=v*D,u.push(_.x,_.y,_.z),d.push(0,w,0),S.x=D*.5+.5,S.y=F*.5*w+.5,p.push(S.x,S.y),x++}for(let N=0;N<s;N++){let L=T+N,R=b+N;M===!0?h.push(R,R+1,L):h.push(R+1,R,L),A+=3}l.addGroup(f,A,M===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fe=class i extends kt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},so=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let g=new z,M=new z,T=new z;for(let S=0;S<e.length;S+=3)p(e[S+0],g),p(e[S+1],M),p(e[S+2],T),c(g,M,T,E)}function c(E,g,M,T){let S=T+1,_=[];for(let A=0;A<=S;A++){_[A]=[];let v=E.clone().lerp(M,A/S),w=g.clone().lerp(M,A/S),b=S-A;for(let N=0;N<=b;N++)N===0&&A===S?_[A][N]=v:_[A][N]=v.clone().lerp(w,N/b)}for(let A=0;A<S;A++)for(let v=0;v<2*(S-A)-1;v++){let w=Math.floor(v/2);v%2===0?(d(_[A][w+1]),d(_[A+1][w]),d(_[A][w])):(d(_[A][w+1]),d(_[A+1][w+1]),d(_[A+1][w]))}}function l(E){let g=new z;for(let M=0;M<r.length;M+=3)g.x=r[M+0],g.y=r[M+1],g.z=r[M+2],g.normalize().multiplyScalar(E),r[M+0]=g.x,r[M+1]=g.y,r[M+2]=g.z}function h(){let E=new z;for(let g=0;g<r.length;g+=3){E.x=r[g+0],E.y=r[g+1],E.z=r[g+2];let M=m(E)/2/Math.PI+.5,T=f(E)/Math.PI+.5;o.push(M,1-T)}x(),u()}function u(){for(let E=0;E<o.length;E+=6){let g=o[E+0],M=o[E+2],T=o[E+4],S=Math.max(g,M,T),_=Math.min(g,M,T);S>.9&&_<.1&&(g<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),T<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,g){let M=E*3;g.x=t[M+0],g.y=t[M+1],g.z=t[M+2]}function x(){let E=new z,g=new z,M=new z,T=new z,S=new ht,_=new ht,A=new ht;for(let v=0,w=0;v<r.length;v+=9,w+=6){E.set(r[v+0],r[v+1],r[v+2]),g.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),S.set(o[w+0],o[w+1]),_.set(o[w+2],o[w+3]),A.set(o[w+4],o[w+5]),T.copy(E).add(g).add(M).divideScalar(3);let b=m(T);y(S,w+0,E,b),y(_,w+2,g,b),y(A,w+4,M,b)}}function y(E,g,M,T){T<0&&E.x===1&&(o[g]=E.x-1),M.x===0&&M.z===0&&(o[g]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Bn=class i extends so{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var _s=class extends io{constructor(t){super(t),this.uuid=Vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new io().fromJSON(s))}return this}},zy={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=hd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=Gy(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let x=e;x<s;x+=e)u=i[x],d=i[x+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return ro(r,o,e,a,c,p,0),o}};function hd(i,t,e,n,s){let r,o;if(s===Qy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=zu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=zu(r,i[r],i[r+1],o);return o&&Oa(o,o.next)&&(ao(o),o=o.next),o}function Fs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Oa(e,e.next)||ke(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ro(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Yy(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Fy(i,n,s,r):Oy(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ao(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=By(Fs(i),t,e),ro(i,t,e,n,s,r,2)):o===2&&ky(i,t,e,n,s,r):ro(Fs(i),t,e,n,s,r,1);break}}}function Oy(i){let t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=p&&mr(s,a,r,c,o,l,x.x,x.y)&&ke(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Fy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ke(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,x=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=ml(p,x,t,e,n),E=ml(y,m,t,e,n),g=i.prevZ,M=i.nextZ;for(;g&&g.z>=f&&M&&M.z<=E;){if(g.x>=p&&g.x<=y&&g.y>=x&&g.y<=m&&g!==s&&g!==o&&mr(a,h,c,u,l,d,g.x,g.y)&&ke(g.prev,g,g.next)>=0||(g=g.prevZ,M.x>=p&&M.x<=y&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&mr(a,h,c,u,l,d,M.x,M.y)&&ke(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;g&&g.z>=f;){if(g.x>=p&&g.x<=y&&g.y>=x&&g.y<=m&&g!==s&&g!==o&&mr(a,h,c,u,l,d,g.x,g.y)&&ke(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;M&&M.z<=E;){if(M.x>=p&&M.x<=y&&M.y>=x&&M.y<=m&&M!==s&&M!==o&&mr(a,h,c,u,l,d,M.x,M.y)&&ke(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function By(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Oa(s,r)&&ud(s,n,n.next,r)&&oo(s,r)&&oo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ao(n),ao(n.next),n=i=r),n=n.next}while(n!==i);return Fs(n)}function ky(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jy(o,a)){let c=dd(o,a);o=Fs(o,o.next),c=Fs(c,c.next),ro(o,t,e,n,s,r,0),ro(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Gy(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=hd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push($y(l));for(s.sort(Vy),r=0;r<s.length;r++)e=Wy(s[r],e);return e}function Vy(i,t){return i.x-t.x}function Wy(i,t){let e=Xy(i,t);if(!e)return t;let n=dd(e,i);return Fs(n,n.next),Fs(e,e.next)}function Xy(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&mr(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),oo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&qy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function qy(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function Yy(i,t,e,n){let s=i;do s.z===0&&(s.z=ml(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zy(s)}function Zy(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ml(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $y(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function mr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Jy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ky(i,t)&&(oo(i,t)&&oo(t,i)&&jy(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||Oa(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Oa(i,t){return i.x===t.x&&i.y===t.y}function ud(i,t,e,n){let s=Jo(ke(i,t,e)),r=Jo(ke(i,t,n)),o=Jo(ke(e,n,i)),a=Jo(ke(e,n,t));return!!(s!==r&&o!==a||s===0&&$o(i,e,t)||r===0&&$o(i,n,t)||o===0&&$o(e,i,n)||a===0&&$o(e,t,n))}function $o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jo(i){return i>0?1:i<0?-1:0}function Ky(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ud(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function oo(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function jy(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function dd(i,t){let e=new gl(i.i,i.x,i.y),n=new gl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zu(i,t,e,n){let s=new gl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Jr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ou(t),Fu(n,t);let o=t.length;e.forEach(Ou);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Fu(n,e[c]);let a=zy.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ou(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Fu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Bs=class i extends de{constructor(t=new _s([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:t_,g,M=!1,T,S,_,A;f&&(g=f.getSpacedPoints(h),M=!0,d=!1,T=f.computeFrenetFrames(h,!1),S=new z,_=new z,A=new z),d||(m=0,p=0,x=0,y=0);let v=a.extractPoints(l),w=v.shape,b=v.holes;if(!Jr.isClockWise(w)){w=w.reverse();for(let B=0,ot=b.length;B<ot;B++){let tt=b[B];Jr.isClockWise(tt)&&(b[B]=tt.reverse())}}let L=Jr.triangulateShape(w,b),R=w;for(let B=0,ot=b.length;B<ot;B++){let tt=b[B];w=w.concat(tt)}function D(B,ot,tt){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(ot,tt)}let F=w.length,H=L.length;function U(B,ot,tt){let dt,et,Mt,wt=B.x-ot.x,I=B.y-ot.y,P=tt.x-B.x,Y=tt.y-B.y,at=wt*wt+I*I,ct=wt*Y-I*P;if(Math.abs(ct)>Number.EPSILON){let lt=Math.sqrt(at),Ct=Math.sqrt(P*P+Y*Y),yt=ot.x-I/lt,Tt=ot.y+wt/lt,Bt=tt.x-Y/Ct,Yt=tt.y+P/Ct,st=((Bt-yt)*Y-(Yt-Tt)*P)/(wt*Y-I*P);dt=yt+wt*st-B.x,et=Tt+I*st-B.y;let Xt=dt*dt+et*et;if(Xt<=2)return new ht(dt,et);Mt=Math.sqrt(Xt/2)}else{let lt=!1;wt>Number.EPSILON?P>Number.EPSILON&&(lt=!0):wt<-Number.EPSILON?P<-Number.EPSILON&&(lt=!0):Math.sign(I)===Math.sign(Y)&&(lt=!0),lt?(dt=-I,et=wt,Mt=Math.sqrt(at)):(dt=wt,et=I,Mt=Math.sqrt(at/2))}return new ht(dt/Mt,et/Mt)}let O=[];for(let B=0,ot=R.length,tt=ot-1,dt=B+1;B<ot;B++,tt++,dt++)tt===ot&&(tt=0),dt===ot&&(dt=0),O[B]=U(R[B],R[tt],R[dt]);let V=[],q,nt=O.concat();for(let B=0,ot=b.length;B<ot;B++){let tt=b[B];q=[];for(let dt=0,et=tt.length,Mt=et-1,wt=dt+1;dt<et;dt++,Mt++,wt++)Mt===et&&(Mt=0),wt===et&&(wt=0),q[dt]=U(tt[dt],tt[Mt],tt[wt]);V.push(q),nt=nt.concat(q)}for(let B=0;B<m;B++){let ot=B/m,tt=p*Math.cos(ot*Math.PI/2),dt=x*Math.sin(ot*Math.PI/2)+y;for(let et=0,Mt=R.length;et<Mt;et++){let wt=D(R[et],O[et],dt);gt(wt.x,wt.y,-tt)}for(let et=0,Mt=b.length;et<Mt;et++){let wt=b[et];q=V[et];for(let I=0,P=wt.length;I<P;I++){let Y=D(wt[I],q[I],dt);gt(Y.x,Y.y,-tt)}}}let X=x+y;for(let B=0;B<F;B++){let ot=d?D(w[B],nt[B],X):w[B];M?(_.copy(T.normals[0]).multiplyScalar(ot.x),S.copy(T.binormals[0]).multiplyScalar(ot.y),A.copy(g[0]).add(_).add(S),gt(A.x,A.y,A.z)):gt(ot.x,ot.y,0)}for(let B=1;B<=h;B++)for(let ot=0;ot<F;ot++){let tt=d?D(w[ot],nt[ot],X):w[ot];M?(_.copy(T.normals[B]).multiplyScalar(tt.x),S.copy(T.binormals[B]).multiplyScalar(tt.y),A.copy(g[B]).add(_).add(S),gt(A.x,A.y,A.z)):gt(tt.x,tt.y,u/h*B)}for(let B=m-1;B>=0;B--){let ot=B/m,tt=p*Math.cos(ot*Math.PI/2),dt=x*Math.sin(ot*Math.PI/2)+y;for(let et=0,Mt=R.length;et<Mt;et++){let wt=D(R[et],O[et],dt);gt(wt.x,wt.y,u+tt)}for(let et=0,Mt=b.length;et<Mt;et++){let wt=b[et];q=V[et];for(let I=0,P=wt.length;I<P;I++){let Y=D(wt[I],q[I],dt);M?gt(Y.x,Y.y+g[h-1].y,g[h-1].x+tt):gt(Y.x,Y.y,u+tt)}}}K(),it();function K(){let B=s.length/3;if(d){let ot=0,tt=F*ot;for(let dt=0;dt<H;dt++){let et=L[dt];Gt(et[2]+tt,et[1]+tt,et[0]+tt)}ot=h+m*2,tt=F*ot;for(let dt=0;dt<H;dt++){let et=L[dt];Gt(et[0]+tt,et[1]+tt,et[2]+tt)}}else{for(let ot=0;ot<H;ot++){let tt=L[ot];Gt(tt[2],tt[1],tt[0])}for(let ot=0;ot<H;ot++){let tt=L[ot];Gt(tt[0]+F*h,tt[1]+F*h,tt[2]+F*h)}}n.addGroup(B,s.length/3-B,0)}function it(){let B=s.length/3,ot=0;ft(R,ot),ot+=R.length;for(let tt=0,dt=b.length;tt<dt;tt++){let et=b[tt];ft(et,ot),ot+=et.length}n.addGroup(B,s.length/3-B,1)}function ft(B,ot){let tt=B.length;for(;--tt>=0;){let dt=tt,et=tt-1;et<0&&(et=B.length-1);for(let Mt=0,wt=h+m*2;Mt<wt;Mt++){let I=F*Mt,P=F*(Mt+1),Y=ot+dt+I,at=ot+et+I,ct=ot+et+P,lt=ot+dt+P;Vt(Y,at,ct,lt)}}}function gt(B,ot,tt){c.push(B),c.push(ot),c.push(tt)}function Gt(B,ot,tt){bt(B),bt(ot),bt(tt);let dt=s.length/3,et=E.generateTopUV(n,s,dt-3,dt-2,dt-1);Ft(et[0]),Ft(et[1]),Ft(et[2])}function Vt(B,ot,tt,dt){bt(B),bt(ot),bt(dt),bt(ot),bt(tt),bt(dt);let et=s.length/3,Mt=E.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Ft(Mt[0]),Ft(Mt[1]),Ft(Mt[3]),Ft(Mt[1]),Ft(Mt[2]),Ft(Mt[3])}function bt(B){s.push(c[B*3+0]),s.push(c[B*3+1]),s.push(c[B*3+2])}function Ft(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return e_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new dl[s.type]().fromJSON(s)),new i(n,t.options)}},t_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],x=t[s*3+2],y=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(d,1-x),new ht(y,1-f)]:[new ht(a,1-c),new ht(h,1-u),new ht(p,1-x),new ht(m,1-f)]}};function e_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xn=class i extends so{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},In=class i extends so{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},gi=class i extends de{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new z,x=new ht;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let f=0;f<n;f++){let E=f+m,g=E,M=E+n+1,T=E+n+2,S=E+1;a.push(g,M,S),a.push(M,T,S)}}this.setIndex(a),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ye=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new z,d=new z,p=[],x=[],y=[],m=[];for(let f=0;f<=n;f++){let E=[],g=f/n,M=0;f===0&&o===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){let S=T/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+g*a),u.y=t*Math.cos(o+g*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+g*a),x.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(S+M,1-g),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let g=h[f][E+1],M=h[f][E],T=h[f+1][E],S=h[f+1][E+1];(f!==0||o>0)&&p.push(g,M,S),(f!==n-1||c<Math.PI)&&p.push(M,T,S)}this.setIndex(p),this.setAttribute("position",new oe(x,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qn=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new z,u=new z,d=new z;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){let y=x/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(x/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){let y=(s+1)*p+x-1,m=(s+1)*(p-1)+x-1,f=(s+1)*(p-1)+x,E=(s+1)*p+x;o.push(y,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Dt=class extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Pa=class extends ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ko(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function n_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var wr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xl=class extends wr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gh,endingEnd:Gh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:r=t,a=2*e-n;break;case Wh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vh:o=t,c=2*n-e;break;case Wh:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),y=x*x,m=y*x,f=-d*m+2*d*y-d*x,E=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*x+1,g=(-1-p)*m+(1.5+p)*y+.5*x,M=p*m-p*y;for(let T=0;T!==a;++T)r[T]=f*o[h+T]+E*o[l+T]+g*o[c+T]+M*o[u+T];return r}},yl=class extends wr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},_l=class extends wr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ko(e,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ko(t.times,Array),values:Ko(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qo:e=this.InterpolantFactoryMethodDiscrete;break;case ta:e=this.InterpolantFactoryMethodLinear;break;case lc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&n_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let x=0;x!==n;++x){let y=e[u+x];if(y!==e[d+x]||y!==e[p+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=ta;var ks=class extends xi{};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Qo;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends xi{};vl.prototype.ValueTypeName="color";var Ml=class extends xi{};Ml.prototype.ValueTypeName="number";var El=class extends wr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)xs.slerpFlat(r,0,o,l-a,o,l,c);return r}},co=class extends xi{InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.DefaultInterpolation=ta;co.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends xi{};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Qo;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends xi{};wl.prototype.ValueTypeName="vector";var bl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],x=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},i_=new bl,Sl=class{constructor(t){this.manager=t!==void 0?t:i_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var lo=class extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ia=class extends lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Hc=new ze,Bu=new z,ku=new z,La=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Gu=new ze,Vr=new z,Nc=new z,Tl=class extends La{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vr),Nc.copy(n.position),Nc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Nc),n.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}},en=class extends lo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Al=class extends La{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Da=class extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Al}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ua=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Vu(){return(typeof performance>"u"?Date:performance).now()}var Bl="\\[\\]\\.:\\/",s_=new RegExp("["+Bl+"]","g"),kl="[^"+Bl+"]",r_="[^"+Bl.replace("\\.","")+"]",o_=/((?:WC+[\/:])*)/.source.replace("WC",kl),a_=/(WCOD+)?/.source.replace("WCOD",r_),c_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),h_=new RegExp("^"+o_+a_+c_+l_+"$"),u_=["material","materials","bones","map"],Rl=class{constructor(t,e,n){let s=n||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},He=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(s_,"")}static parseTrackName(t){let e=h_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);u_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=Rl;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);var Gn=0,uo=-9,Ln=1080,ci=3,Fa=64,Vl=i=>Math.min(1,Math.max(0,i)),ge=(i,t,e)=>i+(t-i)*e,Ut=(i,t,e)=>{let n=Vl((e-i)/(t-i));return n*n*(3-2*n)};function Sr(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ba(i,t){let e=Math.imul(i,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function Gl(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Ba(e,n),l=Ba(e+1,n),h=Ba(e,n+1),u=Ba(e+1,n+1);return ge(ge(c,l,o),ge(h,u,o),a)}function Ee(i,t){return Gl(i,t)*.55+Gl(i*2.1+7,t*2.1+3)*.3+Gl(i*4.3+1,t*4.3+9)*.15}function Tr(i,t,e,n,s,r){let o=s-e,a=r-n,c=Vl(((i-e)*o+(t-n)*a)/(o*o+a*a));return Math.hypot(i-(e+o*c),t-(n+a*c))}function fo(i,t,e){let n=1/0;for(let s=0;s<e.length-1;s++)n=Math.min(n,Tr(i,t,e[s][0],e[s][1],e[s+1][0],e[s+1][1]));return n}var yn=(i,t,e)=>{let n=1/0;for(let s of e)n=Math.min(n,fo(i,t,s));return n},Qi=(i,t,e,n,s,r)=>r*Ut(s,0,Math.hypot(i-e,t-n));function vs(i,[t,e,n,s,r,o]){return a=>i+t*Math.sin(3*a+e)+n*Math.sin(5*a+s)+r*Math.sin(7*a+o)}function fd(i){let t=i.map(d=>{let p=Math.ceil(d.maxR/ci)*ci,x=p*2/ci,y=x+1,m=d.cx-p,f=d.cz-p,E=new Float32Array(y*y);for(let g=0;g<y;g++)for(let M=0;M<y;M++)E[g*y+M]=d.height(m+M*ci,f+g*ci);return{island:d,half:p,segs:x,N:y,x0:m,z0:f,heights:E}});function e(d,p){for(let x of t){let y=(d-x.x0)/ci,m=(p-x.z0)/ci;if(y<0||m<0||y>=x.segs||m>=x.segs)continue;let f=Math.floor(y),E=Math.floor(m),g=y-f,M=m-E,T=E*x.N+f,S=x.heights;return ge(ge(S[T],S[T+1],g),ge(S[T+x.N],S[T+x.N+1],g),M)}return uo}function n(d,p){let x=ci;return Math.hypot(e(d+x,p)-e(d-x,p),e(d,p+x)-e(d,p-x))/(2*x)}function s(d,p){for(let x of t){let y=d-x.island.cx,m=p-x.island.cz;if(Math.hypot(y,m)<x.island.edge(Math.atan2(m,y))*1.02)return x.island}return null}let r=new Rt,o=new rt,a=new Dt({vertexColors:!0,flatShading:!0,roughness:.95});for(let d of t){let p=new Float32Array(d.N*d.N*3);for(let x=0;x<d.N;x++)for(let y=0;y<d.N;y++){let m=d.x0+y*ci,f=d.z0+x*ci,E=x*d.N+y;d.island.color(m,f,d.heights[E],n(m,f),o),p[E*3]=o.r,p[E*3+1]=o.g,p[E*3+2]=o.b}for(let x=0;x<d.segs;x+=Fa)for(let y=0;y<d.segs;y+=Fa){let m=Math.min(Fa,d.segs-y),f=Math.min(Fa,d.segs-x),E=!1;for(let A=0;A<=f&&!E;A++)for(let v=0;v<=m;v++)if(d.heights[(x+A)*d.N+y+v]>uo+.5){E=!0;break}if(!E)continue;let g=new Float32Array((m+1)*(f+1)*3),M=new Float32Array((m+1)*(f+1)*3);for(let A=0;A<=f;A++)for(let v=0;v<=m;v++){let w=(x+A)*d.N+y+v,b=(A*(m+1)+v)*3;g[b]=d.x0+(y+v)*ci,g[b+1]=d.heights[w],g[b+2]=d.z0+(x+A)*ci,M[b]=p[w*3],M[b+1]=p[w*3+1],M[b+2]=p[w*3+2]}let T=[];for(let A=0;A<f;A++)for(let v=0;v<m;v++){let w=A*(m+1)+v,b=w+1,N=w+m+1,L=N+1;T.push(w,N,b,b,N,L)}let S=new de;S.setAttribute("position",new ve(g,3)),S.setAttribute("color",new ve(M,3)),S.setIndex(T),S.computeVertexNormals(),S.computeBoundingSphere();let _=new G(S,a);_.receiveShadow=!0,r.add(_)}}let c=8,l=Math.round(Ln*2/c)+1,h=new Uint8Array(l*l);for(let d=0;d<l;d++)for(let p=0;p<l;p++){let x=e(-Ln+p*c,-Ln+d*c);h[d*l+p]=Math.round(Vl((x+12)/36)*255)}let u=new Ea(h,l,l,Dl,Ai);return u.unpackAlignment=1,u.magFilter=On,u.minFilter=On,u.needsUpdate=!0,{group:r,heightTex:u,sample:e,slopeAt:n,islandAt:s}}var ho=5;function pd(i,t,e,n){let s=Math.round(Ln*2/ho),r=document.createElement("canvas");r.width=r.height=s;let o=r.getContext("2d"),a=o.createImageData(s,s),c=new rt,l=new rt("#7fd8d0"),h=new rt("#3b7fc0");for(let u=0;u<s;u++)for(let d=0;d<s;d++){let p=d*ho-Ln+ho/2,x=u*ho-Ln+ho/2,y=t(p,x);y<Gn?c.copy(l).lerp(h,Ut(0,6,-y)):(n(p,x)||i[0]).color(p,x,y,e(p,x),c).offsetHSL(0,0,Ut(4,30,y)*.08);let m=(u*s+d)*4;c.convertLinearToSRGB(),a.data[m]=c.r*255,a.data[m+1]=c.g*255,a.data[m+2]=c.b*255,a.data[m+3]=255}return o.putImageData(a,0,0),r}var d_=40,f_=80;function md(i){let t=i.length,e=new Float64Array(t),n=new Float64Array(t),s=i.flatMap(c=>c.paths),r=new rt("#c9a66e"),o=new rt;function a(c,l){let h=-1/0;for(let d=0;d<t;d++){let p=i[d],x=c-p.cx,y=l-p.cz;e[d]=p.edge(Math.atan2(y,x))-Math.hypot(x,y)+(Ee(c/110+d*17.3,l/110-d*9.1)-.5)*f_,e[d]>h&&(h=e[d])}let u=0;for(let d=0;d<t;d++)n[d]=Math.exp((e[d]-h)/d_),u+=n[d];for(let d=0;d<t;d++)n[d]/=u;return h}return{id:"continent",name:"\u5927\u9678",cx:0,cz:0,maxR:0,height(c,l){let h=a(c,l);if(h<-40)return uo;let u=0,d=0;for(let p=0;p<t;p++)n[p]<.004||(u+=n[p]*i[p].land(c,l),d+=n[p]);u/=d;for(let p of i)p.carve&&(u=p.carve(c,l,u));return ge(uo,u,Ut(-30,55,h))},color(c,l,h,u,d){a(c,l),d.setRGB(0,0,0);let p=0;for(let x=0;x<t;x++)n[x]<.01||(i[x].color(c,l,h,u,o),d.r+=o.r*n[x],d.g+=o.g*n[x],d.b+=o.b*n[x],p+=n[x]);if(d.multiplyScalar(1/p),h>=1.7){let x=yn(c,l,s);x<2.6&&d.lerp(r,Ut(2.6,1.6,x)*.75)}return d},weightOf(c,l,h){return a(l,h),n[c]},regionIndexAt(c,l){a(c,l);let h=0;for(let u=1;u<t;u++)n[u]>n[h]&&(h=u);return h}}}var Et=(i,t={})=>new Dt({color:i,roughness:.9,flatShading:!0,...t}),It=i=>(i.castShadow=i.receiveShadow=!0,i);function Qn(i,t){return{box(e,n,s,r,o,a,c,l,h="part"){let u=It(new G(new vt(e,n,s),c));return u.position.set(r,o+n/2,a),i.add(u),t.push({box:new me().setFromObject(u),color:l,kind:h}),u},cyl(e,n,s,r,o,a,c,l="part",h=10){let u=null;return a&&(u=It(new G(new kt(e,e,n,h),a)),u.position.set(s,r+n/2,o),i.add(u)),t.push({box:new me(new z(s-e,r,o-e),new z(s+e,r+n,o+e)),cyl:{x:s,z:o,r:e},color:c,kind:l}),u}}}function Dn(i,t,e){let n=new ba(i,t,e);n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1;let s=new cn,r=0;return{mesh:n,add(o,a,c,l=1,h=l,u=l,d=0,p=0,x=0,y=null,m="XYZ"){r>=e||(s.position.set(o,a,c),s.rotation.set(d,p,x,m),s.scale.set(l,h,u),s.updateMatrix(),n.setMatrixAt(r,s.matrix),y&&n.setColorAt(r,y),r++)},addMatrix(o){r>=e||n.setMatrixAt(r++,o)},finish(){return n.count=r,n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n}}}var Tv=Math.sqrt(10),Ms=600,Oe={east:20,west:-10,south:-30,north:-40};var Xl=i=>380+26*Math.sin(3*i+.5)+14*Math.sin(7*i+2)+8*Math.sin(11*i+1),p_=(i,t)=>[Math.cos(i)*(Xl(i)-t),Math.sin(i)*(Xl(i)-t)],ei=new ht(44,10).normalize(),Ar=new ht(-.39,.92).normalize(),Pi={name:"\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730",x:-164,z:-215,r:24,h:22},[yd,_d]=p_(2.2,22),Ae={altar:{name:"\u661F\u306E\u796D\u58C7",x:0,z:0,r:16,h:5},village:{name:"\u6F6E\u98A8\u306E\u6751 \u30B7\u30AA\u30AB\u30BC",x:190,z:152,r:30,h:4.5},plateau:Pi,lake:{name:"\u93E1\u306E\u6E56",x:Pi.x+ei.x*51,z:Pi.z+ei.y*51,r:20},cave:{name:"\u3072\u304B\u308A\u306E\u6D1E\u7A9F",x:-202,z:114,r:13,h:5},windmill:{name:"\u98A8\u8ECA\u306E\u4E18",x:262,z:-88,r:14},lighthouse:{name:"\u5CAC\u306E\u706F\u53F0",x:yd,z:_d,r:10},stones:{name:"\u53E4\u306E\u74B0\u72B6\u5217\u77F3",x:-255,z:-60,r:15,h:7}},Ci={x:Pi.x+ei.x*18,z:Pi.z+ei.y*18,r:4},Es=Ae.lake,gd=[[Es.x,Es.z],[-70,-225],[-20,-250],[40,-275],[100,-300],[170,-330],[260,-380],[340,-440]],ka=[Pi.x+Ar.x*62,Pi.z+Ar.y*62],Wl=[Pi.x+Ar.x*20,Pi.z+Ar.y*20],Un=Ae.village,Ga=Ae.cave,ln=Ae.windmill,ti=Ae.stones,xd=[[[0,0],[60,50],[130,105],[Un.x,Un.z]],[[Un.x,Un.z],[Un.x+12,Un.z+48],[Un.x+12,Un.z+190]],[[0,0],[-30,-80],[-70,-150],[Es.x+12,Es.z+20]],[[0,0],[-60,-40],[-130,-110],ka],[ka,[(ka[0]+Wl[0])/2+4,(ka[1]+Wl[1])/2],Wl],[[0,0],[-80,40],[-150,90],[Ga.x+13,Ga.z]],[[0,0],[90,-20],[180,-60],[ln.x-12,ln.z+3]],[[0,0],[-60,90],[-150,200],[yd+8,_d-8]],[[-130,-110],[-200,-80],[ti.x+12,ti.z]],[[0,0],[130,Oe.east-5],[260,Oe.east],[480,Oe.east]],[[-60,-40],[-150,-20],[-300,Oe.west],[-480,Oe.west]],[[0,0],[-20,100],[Oe.south,250],[Oe.south,480]],[[0,0],[-20,-120],[Oe.north,-240],[Oe.north,-480]]],yi={sandDeep:new rt("#c7ae78"),sand:new rt("#f0dba3"),grass:new rt("#7cbf5a"),grassDark:new rt("#5f9f45"),grassHigh:new rt("#93bf62"),rock:new rt("#9a8f86"),rockDark:new rt("#7d7470"),path:new rt("#cfab72"),plaza:new rt("#dccdaa")},m_=new rt,vd={id:"start",name:"\u59CB\u307E\u308A\u306E\u8349\u539F",cx:0,cz:0,edge:Xl,maxR:465,places:Ae,paths:xd,sanctuaries:[{x:Ae.altar.x,z:Ae.altar.z,r:14},{x:Un.x,z:Un.z,r:36}],land(i,t){let e=Math.hypot(i,t),n=3.5+Ee(i/45,t/45)*4.5;n+=Ee(i/150+20,t/150)*9*Ut(70,220,e),n+=Qi(i,t,ln.x,ln.z,90,13),n+=Qi(i,t,-38,234,76,9),n+=Qi(i,t,107,-120,50,4),n+=Qi(i,t,250,230,70,8);let s=Pi,r=i-s.x,o=t-s.z,a=Math.hypot(r,o),c=a>.001?(r*Ar.x+o*Ar.y)/a:0,l=ge(8,42,Ut(.82,.97,c)),h=s.h+(Ee(i/12,t/12)-.5)*.8;n=ge(n,h,Ut(s.r+l,s.r,a)),n=ge(n,s.h-1.3,Ut(Ci.r+1.5,Ci.r-1,Math.hypot(i-Ci.x,t-Ci.z)));let u=Tr(i,t,Ci.x,Ci.z,s.x+ei.x*25,s.z+ei.y*25);a<s.r+1&&(n=Math.min(n,ge(s.h-.8,n,Ut(.8,2.2,u))));for(let d of["altar","village","cave","stones"]){let p=Ae[d];n=ge(n,p.h,Ut(p.r+16,p.r,Math.hypot(i-p.x,t-p.z)))}return n},carve(i,t,e){return e=ge(e,-3.5,Ut(Es.r+10,Es.r-3,Math.hypot(i-Es.x,t-Es.z))),ge(e,-2.5,Ut(22,5,fo(i,t,gd)))},color(i,t,e,n,s){if(e<1.7)s.copy(yi.sandDeep).lerp(yi.sand,Ut(-2,1.2,e));else{let r=Ee(i/9,t/9);s.copy(yi.grassDark).lerp(yi.grass,r),s.lerp(yi.grassHigh,Ut(12,22,e)*.8),s.lerp(yi.sand,Ut(2.4,1.7,e));let o=yn(i,t,xd);o<2.6&&s.lerp(m_.copy(yi.path).offsetHSL(0,0,(r-.5)*.06),Ut(2.6,1.6,o)),Math.hypot(i-Un.x,t-Un.z)<14&&s.lerp(yi.plaza,Ut(14,12,Math.hypot(i-Un.x,t-Un.z))),Math.hypot(i-Ga.x,t-Ga.z)<12&&s.copy(yi.rockDark)}return n>.75&&s.lerp(Ee(i/4,t/4)>.5?yi.rock:yi.rockDark,Ut(.75,1.1,n)),s},nature:{trees:{style:"round",count:320,minH:2.6,avoidRiver:gd,accentChance:.15,leafColors:[5216842,6665558,4164178,15902402]},palms:90,rocks:180,grass:{count:9e3,color:6266693},flowers:{count:2500,colors:[16774384,16766044,16752575,12166911]},avoid:[...Object.values(Ae).map(i=>[i.x,i.z,i.r]),[Un.x+12,Un.z+175,12]]},enemies:{kumodama:{count:26},ishimori:{count:6}},decorate(i,t){let e=new Rt,n=Qn(e,i),s=t(ln.x,ln.z),r=Et(15919832);n.cyl(4.2,14,ln.x,s-.5,ln.z,null,15919832);let o=It(new G(new kt(3,4.4,14,8),r));o.position.set(ln.x,s+6.5,ln.z);let a=It(new G(new fe(4,4.5,8),Et(14246986)));a.position.set(ln.x,s+15.7,ln.z);let c=new G(new vt(1.6,2.6,.3),Et(8015414)),l=Math.atan2(-ln.x,-ln.z);c.position.set(ln.x+Math.sin(l)*4.1,s+1.3,ln.z+Math.cos(l)*4.1),c.rotation.y=l,e.add(o,a,c);let h=new Rt;h.position.set(ln.x+Math.sin(l)*3.6,s+12,ln.z+Math.cos(l)*3.6),h.rotation.y=l;let u=Et(9067067),d=Et(16774884,{side:le}),p=new G(new kt(.6,.6,.8,8),u);p.rotation.x=Math.PI/2,h.add(p);for(let R=0;R<4;R++){let D=new Rt;D.rotation.z=R/4*Math.PI*2;let F=It(new G(new vt(.35,10,.25),u));F.position.y=5;let H=It(new G(new Cn(2,7.5),d));H.position.set(1.15,5.8,.05),D.add(F,H),h.add(D)}e.add(h);let[x,y]=[Ae.lighthouse.x,Ae.lighthouse.z],m=t(x,y),f=Et(12432806),E=It(new G(new kt(4.2,4.6,2.5,10),f));E.position.set(x,m+.8,y),e.add(E);for(let R=0;R<6;R++){let D=3.2-R*.18,F=3.2-(R+1)*.18,H=It(new G(new kt(F,D,3.4,12),Et(R%2?14246986:16447214)));H.position.set(x,m+2+R*3.4+1.7,y),e.add(H)}let g=m+2+6*3.4,M=It(new G(new kt(3,3,.4,12),Et(4869737)));M.position.set(x,g+.2,y);let T=new G(new kt(1.4,1.4,2.2,10),new Dt({color:16773544,emissive:16765024,emissiveIntensity:1.4}));T.position.set(x,g+1.5,y);let S=It(new G(new fe(1.9,2,10),Et(4869737)));S.position.set(x,g+3.6,y),e.add(M,T,S),n.cyl(3.6,27,x,m-.5,y,null,14246986);let _=new Rt;_.position.set(x,g+1.5,y);let A=new Me({color:16773544,transparent:!0,opacity:.22,depthWrite:!1,blending:Fn,side:le});for(let R of[1,-1]){let D=new G(new fe(6,60,16,1,!0),A);D.rotation.z=R*Math.PI/2,D.position.x=R*30,_.add(D)}e.add(_);let v=new en(16769184,40,40);v.position.set(x,g+1.5,y),e.add(v);let w=ti.h,b=Et(11116950);for(let R=0;R<12;R++){let D=R/12*Math.PI*2,F=ti.x+Math.cos(D)*11,H=ti.z+Math.sin(D)*11,U=R%4===3?2.2:4.5+R%3*.6,O=It(new G(new vt(1.5,U,.9),b));O.position.set(F,w+U/2-.3,H),O.rotation.y=-D+Math.PI/2,e.add(O),n.cyl(.9,U,F,w-.5,H,null,11116950)}for(let R of[0,4,8]){let D=(R+.5)/12*Math.PI*2,F=It(new G(new vt(1.2,.8,6.4),b));F.position.set(ti.x+Math.cos(D)*11,w+5.2,ti.z+Math.sin(D)*11),F.rotation.y=-D,e.add(F)}let N=It(new G(new kt(2.2,2.4,.9,10),b));N.position.set(ti.x,w+.45,ti.z),e.add(N),n.cyl(2.3,.9,ti.x,w-.5,ti.z,null,11116950);let L=new G(new In(.6,0),new Dt({color:13154559,emissive:9400288,emissiveIntensity:1.2}));return L.position.set(ti.x,w+2,ti.z),e.add(L),{group:e,update(R,D){h.rotateZ(R*.6),_.rotation.y+=R*.7,L.rotation.y+=R,L.position.y=w+2+Math.sin(D*1.5)*.25}}}};var De=(i,t={})=>new Dt({color:i,roughness:.85,flatShading:!0,...t}),Yn=i=>(i.castShadow=i.receiveShadow=!0,i);function Md(i,t,e,n){let s=new _s;s.moveTo(-i/2-.6,0),s.lineTo(0,e),s.lineTo(i/2+.6,0),s.lineTo(-i/2-.6,0);let r=new Bs(s,{depth:t+1.2,bevelEnabled:!1});return r.translate(0,0,-(t+1.2)/2),Yn(new G(r,n))}function po({w:i,d:t,wall:e,roof:n,trim:s}){let r=new Rt,o=4.4,a=Yn(new G(new vt(i,o,t),De(e)));a.position.y=o/2,r.add(a);let c=De(s),l=Yn(new G(new vt(i+.4,.5,t+.4),De(11050900)));l.position.y=.25,r.add(l);for(let g of[-1,1])for(let M of[-1,1]){let T=new G(new vt(.35,o,.35),c);T.position.set(g*(i/2),o/2,M*(t/2)),r.add(T)}let h=new G(new vt(i+.2,.3,t+.2),c);h.position.y=o,r.add(h);let u=Md(i,t,2.8,De(n));u.position.y=o,r.add(u);let d=Yn(new G(new vt(.8,2.4,.8),De(11773594)));d.position.set(i*.25,o+2.2,-t*.2),r.add(d);let p=new G(new vt(1.3,2.3,.15),De(8015414));p.position.set(0,1.4,t/2+.05);let x=new G(new ye(.08,6,4),De(16040539,{metalness:.6}));x.position.set(.4,1.4,t/2+.15),r.add(p,x);let y=De(16773572,{emissive:16762992,emissiveIntensity:.35}),m=De(s),f=(g,M,T)=>{let S=new Rt,_=new G(new vt(1.1,1.1,.1),y),A=new G(new vt(1.3,.12,.14),m),v=new G(new vt(.12,1.3,.14),m),w=new G(new vt(1.4,.15,.4),m);w.position.y=-.65,S.add(_,A,v,w),S.position.set(g,2.6,M),S.rotation.y=T,r.add(S)};f(-i/2+1.4,t/2+.05,0),f(i/2-1.4,t/2+.05,0),f(i/2+.05,0,Math.PI/2),f(-i/2-.05,0,-Math.PI/2);let E=new G(new vt(1.2,.35,.35),De(9067067));E.position.set(-i/2+1.4,1.95,t/2+.3),r.add(E);for(let g=0;g<3;g++){let M=new G(new xn(.16,0),De([16752575,16766044,16774384][g]));M.position.set(-i/2+1+g*.4,2.25,t/2+.3),r.add(M)}return r}function Ed(i,t){let e=new Rt,n=Ae.village,s=n.h,r=(H,U="house",O=11565653)=>{H.updateMatrixWorld(!0),i.push({box:new me().setFromObject(H),color:O,kind:U})},o=[[-19,-10,Math.PI/2,8,7,16050904,14246986,9067067],[0,-20,0,9,7,15393778,4165532,7030320],[19,-11,-Math.PI/2,8,7,16181192,5929156,9067067],[-19,11,Math.PI/2,7,6,15331812,14721340,7030320],[20,12,-Math.PI/2,8,6.5,16050904,10117040,9067067]];for(let[H,U,O,V,q,nt,X,K]of o){let it=po({w:V,d:q,wall:nt,roof:X,trim:K});it.position.set(n.x+H,s,n.z+U),it.rotation.y=O,e.add(it);let ft=new G(new vt(V+.4,7,q+.4));ft.position.set(n.x+H,s+3.5,n.z+U),ft.rotation.y=O,r(ft,"house",X)}let a=new Rt,c=De(12432806),l=Yn(new G(new kt(1.6,1.7,1.1,12,1,!0),c));l.material.side=le,l.position.y=.55;let h=Yn(new G(new qn(1.6,.2,6,16),c));h.rotation.x=Math.PI/2,h.position.y=1.1;let u=new G(new Ke(1.5,16),De(3899328,{roughness:.2}));u.rotation.x=-Math.PI/2,u.position.y=.5,a.add(l,h,u);let d=De(9067067);for(let H of[-1,1]){let U=Yn(new G(new vt(.25,3.2,.25),d));U.position.set(H*1.5,1.6,0),a.add(U)}let p=Md(2.6,2.2,1.1,De(14246986));p.position.y=3.1,p.rotation.y=Math.PI/2;let x=new G(new kt(.3,.25,.45,8),d);x.position.set(0,2.2,0),a.add(p,x),a.position.set(n.x,s,n.z),e.add(a),i.push({box:new me(new z(n.x-1.8,s,n.z-1.8),new z(n.x+1.8,s+4,n.z+1.8)),cyl:{x:n.x,z:n.z,r:1.8},color:12432806,kind:"house"});let y=(H,U,O,V)=>{let q=new Rt,nt=Yn(new G(new vt(4,1.1,1.6),d));nt.position.y=.55,q.add(nt);for(let it of[-1,1])for(let ft of[-1,1]){let gt=new G(new vt(.18,3,.18),d);gt.position.set(it*1.9,1.5,ft*.9-.3),q.add(gt)}for(let it=0;it<6;it++){let ft=new G(new vt(.7333333333333334,.12,2.6),De(it%2?16777215:V));ft.position.set(-2.2+4.4/12+it*4.4/6,3.05,-.3),ft.rotation.x=.25,ft.castShadow=!0,q.add(ft)}let X=[16739162,16766044,9426027,16753212,10471144];for(let it=0;it<7;it++){let ft=new G(new xn(.22,0),De(X[it%X.length]));ft.position.set(-1.5+it*.5,1.28,it%2*.35-.15),q.add(ft)}q.position.set(H,s,U),q.rotation.y=O,e.add(q);let K=new G(new vt(4,2,1.6));K.position.set(H,s+1,U),K.rotation.y=O,r(K,"house",V)};y(n.x+8,n.z+7,-Math.PI/2,2864544),y(n.x-8,n.z+7,Math.PI/2,14698330);let m=De(10119748),f=De(12884588),E=[["barrel",5,-14],["barrel",6.2,-13.2],["crate",-5,-14],["crate",-5,-12.7,1.1],["barrel",13,3],["crate",-13,-3],["barrel",-14,20],["crate",14,21]];for(let[H,U,O,V=0]of E){let q=Yn(H==="barrel"?new G(new kt(.55,.55,1.2,10),m):new G(new vt(1.1,1.1,1.1),f));q.position.set(n.x+U,s+.6+V,n.z+O),q.rotation.y=U,e.add(q),V||i.push({box:new me(new z(n.x+U-.6,s,n.z+O-.6),new z(n.x+U+.6,s+1.2,n.z+O+.6)),cyl:{x:n.x+U,z:n.z+O,r:.6},color:10119748,kind:"prop"})}let g=De(16770728,{emissive:16762992,emissiveIntensity:1.2}),M=[[-9,-6],[9,-6],[-9,16],[9,16],[3,26]];for(let[H,U]of M){let O=n.x+H,V=n.z+U,q=Yn(new G(new kt(.12,.16,4,6),De(4869737)));q.position.set(O,s+2,V);let nt=new G(new In(.35,0),g);nt.position.set(O,s+4.2,V),e.add(q,nt),i.push({box:new me(new z(O-.2,s,V-.2),new z(O+.2,s+4,V+.2)),cyl:{x:O,z:V,r:.2},color:4869737,kind:"prop"})}let T=new Rt;for(let H of[-1,1]){let U=Yn(new G(new vt(.25,3.2,.25),d));U.position.set(H*1.8,1.6,0),T.add(U)}let S=(()=>{let H=document.createElement("canvas");H.width=256,H.height=96;let U=H.getContext("2d");U.fillStyle="#c49a6c",U.fillRect(0,0,256,96),U.fillStyle="#5a3a24",U.font='bold 40px "M PLUS Rounded 1c", sans-serif',U.textAlign="center",U.textBaseline="middle",U.fillText("\u30B7\u30AA\u30AB\u30BC\u6751",128,50);let O=new Ri(H);return O.colorSpace=Le,O})(),_=new G(new vt(4,1.4,.2),[d,d,d,d,new Dt({map:S}),new Dt({map:S})]);_.position.y=2.6,T.add(_),T.position.set(n.x-22,t(n.x-22,n.z-10),n.z-10),T.rotation.y=Math.atan2(-(n.x-22),-(n.z-10)),e.add(T);let A=n.x+12,v=n.z+40;for(;v<n.z+400&&t(A,v)>.9;)v+=1;v-=4;let w=28,b=1.4,N=De(11897438);for(let H=0;H<w/1.2;H++){let U=Yn(new G(new vt(4,.25,1.1),N));U.position.set(A+(Math.random()-.5)*.1,b-.12,v+H*1.2+.6),e.add(U)}for(let H=0;H<=w;H+=4)for(let U of[-1,1]){let O=Yn(new G(new kt(.2,.2,5,6),De(8015414)));O.position.set(A+U*1.9,b-2,v+H),e.add(O)}i.push({box:new me(new z(A-2,b-.5,v),new z(A+2,b,v+w)),color:11897438,kind:"pier"});let L=new Rt,R=new _s;R.moveTo(-1.3,.8),R.lineTo(1.3,.8),R.lineTo(.9,0),R.lineTo(-.9,0),R.lineTo(-1.3,.8);let D=Yn(new G(new Bs(R,{depth:5,bevelEnabled:!1}),De(14246986)));D.position.z=-2.5;let F=new G(new vt(2.4,.15,.6),De(16050904));return F.position.y=.6,L.add(D,F),L.position.set(A+4.2,Gn-.3,v+w-5),e.add(L),{group:e,update(H){L.position.y=Gn-.3+Math.sin(H*1.3)*.15,L.rotation.z=Math.sin(H*1.1)*.05}}}var hn=Ms,ts=0,Rr={greatTree:{name:"\u5343\u5E74\u6A39",x:hn,z:ts,r:22,h:8},mushroom:{name:"\u30AD\u30CE\u30B3\u306E\u8C37",x:hn+133,z:ts+152,r:30},spring:{name:"\u5996\u7CBE\u306E\u6CC9",x:hn-150,z:ts-170,r:14,h:5},cabin:{name:"\u6728\u3053\u308A\u306E\u5C0F\u5C4B",x:hn+170,z:ts-140,r:16,h:6}},We=Rr.greatTree,_n=Rr.mushroom,nn=Rr.spring,we=Rr.cabin,wd=[[[hn-420,Oe.east],[hn-200,Oe.east-2],[hn-60,5],[We.x-22,We.z]],[[hn-60,5],[hn+40,80],[_n.x-20,_n.z-14]],[[hn-200,Oe.east-2],[hn-180,-90],[nn.x-4,nn.z+16]],[[hn-60,5],[hn+60,-70],[we.x-16,we.z+4]]],Ii={sand:new rt("#e6d3a0"),sandDeep:new rt("#c4ad7c"),moss:new rt("#5f9a4a"),dark:new rt("#3f7a3c"),clearing:new rt("#86c263"),valley:new rt("#6f8a6a"),path:new rt("#a8845a"),rock:new rt("#7f7f72")},bd={id:"forest",name:"\u6DF1\u7DD1\u306E\u68EE",cx:hn,cz:ts,edge:vs(340,[24,1.2,15,.3,9,2.4]),maxR:425,places:Rr,paths:wd,sanctuaries:[],land(i,t){let e=4+Ee(i/35,t/35)*6+Ee(i/140,t/140+9)*10;e+=Qi(i,t,hn+174,ts-63,82,8),e+=Qi(i,t,hn-60,ts+200,90,9),e+=Qi(i,t,hn-230,ts+90,70,7);for(let n of[We,nn,we])e=ge(e,n.h,Ut(n.r+16,n.r,Math.hypot(i-n.x,t-n.z)));return e=ge(e,3,Ut(_n.r+16,_n.r-4,Math.hypot(i-_n.x,t-_n.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Ii.sandDeep).lerp(Ii.sand,Ut(-2,1.2,e));let r=Ee(i/8,t/8);s.copy(Ii.dark).lerp(Ii.moss,r),s.lerp(Ii.sand,Ut(2.4,1.7,e)),s.lerp(Ii.clearing,Ut(We.r+6,We.r-6,Math.hypot(i-We.x,t-We.z))*.8),s.lerp(Ii.clearing,Ut(nn.r+6,nn.r-2,Math.hypot(i-nn.x,t-nn.z))*.7),s.lerp(Ii.valley,Ut(_n.r+8,_n.r-6,Math.hypot(i-_n.x,t-_n.z)));let o=yn(i,t,wd);return o<2.4&&s.lerp(Ii.path,Ut(2.4,1.4,o)),n>.75&&s.lerp(Ii.rock,Ut(.75,1.1,n)),s},nature:{trees:{style:"round",count:900,leafColors:[4160060,3107642,5214021,5937744],trunkColor:7030320},palms:30,rocks:90,rockColor:8355698,grass:{count:7e3,color:5214015},flowers:{count:1800,colors:[13625599,16777215,10473727]},avoid:Object.values(Rr).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E2\u30EA\u30C0\u30DE",tint:5214042,mult:1.6,count:28},ishimori:{name:"\u30B3\u30B1\u30A4\u30EF",tint:7307098,mult:1.6,count:9}},decorate(i,t,e){let n=new Rt,s=Qn(n,i),r=We.h,o=Et(7031347,{roughness:1}),a=It(new G(new kt(3.6,6.5,34,10),o));a.position.set(We.x,r+17,We.z),n.add(a),s.cyl(6,40,We.x,r-1,We.z,null,7031347);for(let H=0;H<7;H++){let U=H/7*Math.PI*2+.3,O=It(new G(new fe(1.6,9,6),o));O.position.set(We.x+Math.cos(U)*7,r+1,We.z+Math.sin(U)*7),O.rotation.set(Math.sin(U)*1.2,0,-Math.cos(U)*1.2),n.add(O)}let c=[Et(4164165),Et(5216842),Et(3111488)];for(let H=0;H<12;H++){let U=e()*Math.PI*2,O=H<3?0:6+e()*10,V=9+e()*6,q=It(new G(new xn(1,0),c[H%3]));q.scale.setScalar(V),q.position.set(We.x+Math.cos(U)*O,r+32+e()*12-O*.3,We.z+Math.sin(U)*O),q.rotation.set(e()*3,e()*3,0),n.add(q)}let l=Et(13616822),h=It(new G(new vt(2.4,1.2,1.6),l));h.position.set(We.x-9,r+.6,We.z),h.rotation.y=Math.PI/2,n.add(h),s.cyl(1.4,1.2,We.x-9,r,We.z,null,13616822);let u=new G(new ye(.4,12,8),new Dt({color:13172656,emissive:9429104,emissiveIntensity:1.3}));u.position.set(We.x-9,r+1.7,We.z),n.add(u);let d=[new Dt({color:10483434,emissive:4183744,emissiveIntensity:.9,flatShading:!0}),new Dt({color:16759008,emissive:13656232,emissiveIntensity:.8,flatShading:!0}),new Dt({color:16773544,emissive:14725184,emissiveIntensity:.7,flatShading:!0})],p=Et(15919832);for(let H=0;H<32;H++){let U=e()*Math.PI*2,O=e()*(_n.r+6),V=_n.x+Math.cos(U)*O,q=_n.z+Math.sin(U)*O,nt=t(V,q),X=.8+e()*2.8,K=It(new G(new kt(.25*X,.35*X,2*X,8),p));K.position.set(V,nt+X,q);let it=It(new G(new ye(1.1*X,12,6,0,Math.PI*2,0,Math.PI/2),d[H%3]));it.scale.y=.7,it.position.set(V,nt+2*X-.1,q),n.add(K,it),X>1.4&&s.cyl(.35*X,2*X+.6,V,nt-.5,q,null,d[H%3].color.getHex())}let x=new en(8384736,60,45);x.position.set(_n.x,t(_n.x,_n.z)+5,_n.z),n.add(x);let y=new G(new Ke(8,28),new Dt({color:10483434,emissive:4175552,emissiveIntensity:.6,transparent:!0,opacity:.85,roughness:.1}));y.rotation.x=-Math.PI/2,y.position.set(nn.x,nn.h+.25,nn.z),n.add(y);let m=Et(13616822);for(let H=0;H<14;H++){let U=H/14*Math.PI*2,O=.7+e()*.5,V=It(new G(new Bn(O,0),m));V.position.set(nn.x+Math.cos(U)*8.8,nn.h+O*.4,nn.z+Math.sin(U)*8.8),n.add(V)}let f=40,E=new Float32Array(f*3),g=new de;g.setAttribute("position",new ve(E,3));let M=new Pn(g,new gn({color:16771327,size:.45,transparent:!0,opacity:.9,depthWrite:!1}));M.frustumCulled=!1,n.add(M);let T=new en(12124144,25,20);T.position.set(nn.x,nn.h+2,nn.z),n.add(T);let S=po({w:8,d:6.5,wall:10119748,roof:5929540,trim:5913124});S.position.set(we.x,we.h,we.z),S.rotation.y=-Math.PI/2,n.add(S);let _=new G(new vt(8.4,7,6.9));_.position.set(we.x,we.h+3.5,we.z),_.rotation.y=-Math.PI/2,_.updateMatrixWorld(!0),i.push({box:new me().setFromObject(_),color:5929540,kind:"house"});let A=Et(9067067);for(let H=0;H<3;H++)for(let U=0;U<4-H;U++){let O=It(new G(new kt(.4,.4,3.2,8),A));O.rotation.x=Math.PI/2,O.position.set(we.x-8+U*.85+H*.42,we.h+.4+H*.72,we.z+7),n.add(O)}i.push({box:new me(new z(we.x-8.5,we.h-.5,we.z+5.3),new z(we.x-4.9,we.h+2,we.z+8.7)),color:9067067,kind:"prop"});let v=It(new G(new kt(.8,.95,.9,10),A));v.position.set(we.x-7,we.h+.45,we.z-5);let w=new G(new kt(.07,.07,1.4,6),Et(7030320));w.position.set(we.x-7,we.h+1.4,we.z-5),w.rotation.z=.4;let b=new G(new vt(.5,.35,.08),Et(12634320,{metalness:.6}));b.position.set(we.x-6.8,we.h+1,we.z-5),n.add(v,w,b),s.cyl(.95,.9,we.x-7,we.h-.2,we.z-5,null,9067067);let N=180,L=new Float32Array(N*3),R=[];for(let H=0;H<N;H++){let U=e()*Math.PI*2,O=8+e()*60,V=hn+Math.cos(U)*O,q=ts+Math.sin(U)*O;R.push({x:V,z:q,y:t(V,q)+1+e()*4,p:e()*10})}let D=new de;D.setAttribute("position",new ve(L,3));let F=new Pn(D,new gn({color:14679946,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return F.frustumCulled=!1,n.add(F),{group:n,update(H,U){u.position.y=r+1.7+Math.sin(U*2)*.15;for(let O=0;O<N;O++){let V=R[O];L[O*3]=V.x+Math.sin(U*.7+V.p)*1.5,L[O*3+1]=V.y+Math.sin(U*1.3+V.p*2)*.8,L[O*3+2]=V.z+Math.cos(U*.6+V.p)*1.5}D.attributes.position.needsUpdate=!0,F.material.opacity=.6+Math.sin(U*3)*.3;for(let O=0;O<f;O++){let V=U*.6+O/f*Math.PI*2,q=3+O%5*1.1;E[O*3]=nn.x+Math.cos(V*(1+O%3*.2))*q,E[O*3+1]=nn.h+1+Math.sin(U*2+O)*.8+O%4*.6,E[O*3+2]=nn.z+Math.sin(V*(1+O%3*.2))*q}g.attributes.position.needsUpdate=!0,y.material.emissiveIntensity=.5+Math.sin(U*1.5)*.2}}}};var Va=(i,t,e=6)=>new kt(i,t,1,e).translate(0,.5,0),Zn={trunk:Va(.45,.7),pineTrunk:Va(.35,.5),cone:new fe(1,1,7).translate(0,.5,0),blob:new xn(1,0),cactus:Va(.5,.55,8),cactusTop:new ye(.5,8,5,0,Math.PI*2,0,Math.PI/2),branch:Va(.12,.22,5),rock:new Bn(1,0),blade:new fe(.18,.9,3),flower:new xn(.22,0),palmSeg:new kt(.3,.36,1.25,6),frond:new fe(.9,4.2,3,1,!0).translate(0,2.1,0),nut:new ye(.28,6,5)};function ql(i){let t=Dn(Zn.palmSeg,Et(11108954),i*6),e=Dn(Zn.frond,Et(5221973,{side:le}),i*7),n=Dn(Zn.nut,Et(7030320),i*3);return{add(s,r,o,a,c,l){let h=new ht(a,c).normalize().multiplyScalar(.35+l()*.3),u=new z;for(let d=0;d<6;d++){let p=d/6,x=s+h.x*p*p*4,y=r+d*1.15+.6,m=o+h.y*p*p*4;t.add(x,y,m,1-d*.05,1,1-d*.05,h.y*p*.6,0,-h.x*p*.6),u.set(x,y+.7,m)}for(let d=0;d<7;d++)e.add(u.x,u.y,u.z,1,1,.25,0,d/7*Math.PI*2,1.15+l()*.25,null,"YXZ");for(let d=0;d<3;d++)n.add(u.x+Math.cos(d*2.1)*.4,u.y-.4,u.z+Math.sin(d*2.1)*.4)},finish(s){s.add(t.finish(),e.finish(),n.finish())}}}function Sd(i,t,e,n,s,r=()=>1,o=1){let a=i.nature,c=(f,E)=>s()<r(f,E),l=new Rt,h=i.maxR,u=a.avoid||[],d=()=>[i.cx+(s()-.5)*2*h,i.cz+(s()-.5)*2*h],p=(f,E,g)=>u.some(([M,T,S])=>Math.hypot(f-M,E-T)<S+g),x=(f,E,g,M,T,S,_)=>{t.push({box:new me(new z(f-g,M,E-g),new z(f+g,M+T,E+g)),cyl:{x:f,z:E,r:g},color:S,kind:_})},y=a.trees;if(y&&y.count){let f=y.count,E=Et(y.trunkColor??9067067,{roughness:1}),g=(y.leafColors||[5216842]).map(A=>Et(A)),M=g.map(A=>Dn(y.style==="pine"?Zn.cone:Zn.blob,A,f*3)),T=Dn(y.style==="pine"?Zn.pineTrunk:y.style==="cactus"?Zn.cactus:Zn.trunk,y.style==="cactus"?g[0]:E,f*(y.style==="cactus"?3:1)),S=y.style==="cactus"?Dn(Zn.cactusTop,g[0],f*3):y.style==="dead"?Dn(Zn.branch,E,f*3):y.snowy?Dn(Zn.cone,Et(16054523),f*3):null,_=0;for(let A=0;_<f&&A<f*40;A++){let[v,w]=d(),b=e(v,w);if(b<(y.minH??2.6)||b>(y.maxH??999)||n(v,w)>(y.maxSlope??.45)||p(v,w,4)||yn(v,w,i.paths)<4||y.avoidRiver&&fo(v,w,y.avoidRiver)<10||!c(v,w))continue;_++;let N=y.accentChance&&s()<y.accentChance?g.length-1:Math.floor(s()*(g.length-(y.accentChance?1:0))),L;if(y.style==="round"){L=4+s()*3,T.add(v,b-.3,w,1,L,1);let R=2+Math.floor(s()*2);for(let D=0;D<R;D++){let F=2.4+s()*1.4-D*.4;M[N].add(v+(s()-.5)*1.5,b+L+D*1.8,w+(s()-.5)*1.5,F,F,F,s()*3,s()*3,s()*3)}x(v,w,.7,b-1,L+3,g[N].color.getHex(),"tree")}else if(y.style==="pine"){L=7+s()*5,T.add(v,b-.3,w,1,2.2,1);for(let R=0;R<3;R++){let D=(2.6-R*.7)*(L/10),F=L*.42,H=b+1.6+R*L*.26;M[N].add(v,H,w,D,F,D,0,s()*3,0),S&&S.add(v,H+F*.55,w,D*.55,F*.45,D*.55,0,s()*3,0)}x(v,w,.6,b-1,L+2,g[N].color.getHex(),"tree")}else if(y.style==="cactus"){L=2.5+s()*2.2,T.add(v,b-.2,w,1,L,1),S.add(v,b-.2+L,w);let R=1+Math.floor(s()*2);for(let D=0;D<R;D++){let F=s()*Math.PI*2+D*Math.PI,H=v+Math.cos(F)*.9,U=w+Math.sin(F)*.9,O=b+L*(.35+s()*.25),V=1+s()*1.2;T.add(H,O,U,.6,V,.6),S.add(H,O+V,U,.6,.6,.6)}x(v,w,.8,b-1,L+1,g[0].color.getHex(),"tree")}else if(y.style==="dead"){L=4+s()*3,T.add(v,b-.3,w,.8,L,.8);for(let R=0;R<2;R++){let D=s()*Math.PI*2;S.add(v,b+L*(.5+R*.2),w,1,1.6+s()*1.5,1,Math.cos(D)*.9,0,Math.sin(D)*.9)}x(v,w,.5,b-1,L+1,3813424,"tree")}}l.add(T.finish()),M.forEach(A=>l.add(A.finish())),S&&l.add(S.finish())}if(a.palms){let f=ql(a.palms),E=0;for(let g=0;E<a.palms&&g<a.palms*300;g++){let[M,T]=d(),S=e(M,T);if(S<1||S>2.6||p(M,T,2)||yn(M,T,i.paths)<5||!c(M,T))continue;E++;let _=e(M-3,T)-e(M+3,T),A=e(M,T-3)-e(M,T+3);f.add(M,S-.2,T,_||1,A,s),x(M,T,.45,S-1,7,5221973,"tree")}f.finish(l)}if(a.rocks){let f=Dn(Zn.rock,Et(a.rockColor??10327971),a.rocks),E=0;for(let g=0;E<a.rocks&&g<a.rocks*80;g++){let[M,T]=d(),S=e(M,T);if(S<.3||p(M,T,3)||yn(M,T,i.paths)<3||n(M,T)<.35&&s()>.35||!c(M,T))continue;E++;let _=.8+s()*1.8;f.add(M,S+_*.3,T,_*1.3,_,_*1.1,s(),s()*3,s()),x(M,T,_*1.1,S-.5,_*1.3,a.rockColor??10327971,"rock")}l.add(f.finish())}let m=(f,E,g,M,T)=>{let S=Dn(f,E,g);S.mesh.castShadow=!1;let _=0,A=T?.map(v=>new rt(v));for(let v=0;_<g&&v<g*20;v++){let[w,b]=d(),N=e(w,b);if(N<2.2||n(w,b)>.5||yn(w,b,i.paths)<2.5||p(w,b,-2)||!c(w,b))continue;let L=.7+s()*.6;S.add(w,N+M,b,L,L,L,0,s()*3,(s()-.5)*.4,A?A[Math.floor(s()*A.length)]:null),_++}l.add(S.finish())};return a.grass?.count&&m(Zn.blade,Et(a.grass.color,{flatShading:!1}),Math.round(a.grass.count*o),.35),a.flowers?.count&&m(Zn.flower,Et(16777215),Math.round(a.flowers.count*o),.3,a.flowers.colors),l}var vi=0,sn=Ms,Cr={oasis:{name:"\u98A8\u5F85\u3061\u306E\u30AA\u30A2\u30B7\u30B9",x:vi+95,z:sn+47,r:20},temple:{name:"\u7802\u306E\u795E\u6BBF",x:vi-114,z:sn-63,r:16,h:5},arch:{name:"\u5CA9\u306E\u30A2\u30FC\u30C1",x:vi+40,z:sn-190,r:14},camp:{name:"\u968A\u5546\u306E\u91CE\u55B6\u5730",x:vi-170,z:sn+130,r:16,h:4}},vn=Cr.oasis,Ge=Cr.temple,_i=Cr.arch,un=Cr.camp,Yl=[[vi+133,sn-152,22,17],[vi-164,sn+133-60,24,14],[vi+183,sn+196,18,22],[vi-38,sn+247,15,12],[vi+260,sn+40,20,16],[vi-250,sn-40,18,15]],Td=[[[Oe.south,sn-420],[Oe.south,sn-250],[-60,sn-120],[Ge.x+8,Ge.z-14]],[[-60,sn-120],[20,sn-20],[vn.x-22,vn.z-10]],[[Oe.south,sn-250],[_i.x-10,_i.z-20],[_i.x,_i.z+20]],[[-60,sn-120],[-130,sn+40],[un.x+10,un.z-14]]],Li={sand:new rt("#ecd08e"),sandShade:new rt("#d9b872"),sandDeep:new rt("#c9a96c"),red1:new rt("#c4704a"),red2:new rt("#a85a3c"),red3:new rt("#d99a6c"),green:new rt("#7cbf5a"),path:new rt("#c09058"),stone:new rt("#d8c7a0")},Ad={id:"desert",name:"\u967D\u708E\u306E\u7802\u6F20",cx:vi,cz:sn,edge:vs(350,[22,2.1,18,.8,9,1.5]),maxR:435,places:Cr,paths:Td,sanctuaries:[],land(i,t){let e=Ee(i/60,t/60),n=3+(Math.sin(i*.07+t*.02+e*6)*.5+.5)*3.2+Ee(i/25,t/25)*2+Ee(i/160,t/160+4)*8;for(let[s,r,o,a]of Yl)n=ge(n,a+6+(Ee(i/10,t/10)-.5),Ut(o+5,o,Math.hypot(i-s,t-r)));for(let s of[Ge,un])n=ge(n,s.h,Ut(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return n=ge(n,-2,Ut(vn.r+10,vn.r-5,Math.hypot(i-vn.x,t-vn.z))),n},color(i,t,e,n,s){if(e<1.7)return s.copy(Li.sandDeep).lerp(Li.sand,Ut(-2,1.2,e));if(s.copy(Li.sandShade).lerp(Li.sand,Ee(i/14,t/14)),s.offsetHSL(0,0,Math.sin(i*.9+t*.35+Ee(i/5,t/5)*4)*.015),e>15||n>.7){let a=Math.floor(e/2.2)%3;s.copy(a===0?Li.red1:a===1?Li.red2:Li.red3)}let r=Math.hypot(i-vn.x,t-vn.z);r<vn.r+9&&s.lerp(Li.green,Ut(vn.r+9,vn.r+3,r)),Math.hypot(i-Ge.x,t-Ge.z)<Ge.r-2&&s.lerp(Li.stone,.6);let o=yn(i,t,Td);return o<2.4&&s.lerp(Li.path,Ut(2.4,1.4,o)*.7),s},nature:{trees:{style:"cactus",count:250,leafColors:[6266709],minH:2.4,maxSlope:.4},rocks:150,rockColor:13208164,grass:{count:3e3,color:13218666},avoid:[...Object.values(Cr).map(i=>[i.x,i.z,i.r+6]),...Yl.map(([i,t,e])=>[i,t,e+6])]},enemies:{kumodama:{name:"\u30B9\u30CA\u30C0\u30DE",tint:13214827,mult:2.2,count:28},ishimori:{name:"\u30B9\u30CA\u30E2\u30EA",tint:11565653,mult:2.2,count:9}},decorate(i,t,e){let n=new Rt,s=Qn(n,i),r=Et(14733222),o=Et(12890250),a=Ge.h,c=It(new G(new vt(22,.8,18),o));c.position.set(Ge.x,a-.1,Ge.z),n.add(c),i.push({box:new me().setFromObject(c),color:12890250,kind:"part"});let l=[8,8,3,8,5,8,8,2.5,8,6];for(let N=0;N<10;N++){let L=N<5?-1:1,R=Ge.x-8+N%5*4,D=Ge.z+L*7,F=l[N];if(s.cyl(.9,F,R,a+.3,D,r,14733222,"part",8),F>=8){let H=It(new G(new vt(2.2,.6,2.2),o));H.position.set(R,a+.3+F+.3,D),n.add(H)}}let h=It(new G(new vt(13,.9,2.2),o));h.position.set(Ge.x-2,a+9.3,Ge.z-7),n.add(h),s.box(18,9,1.6,Ge.x,a+.3,Ge.z-11,r,14733222);let u=new G(new vt(4.5,6,.3),Et(9071172));u.position.set(Ge.x,a+3.3,Ge.z-10.1),n.add(u);let d=new G(new Ke(1.2,12),new Dt({color:16766826,emissive:14721072,emissiveIntensity:.8}));d.position.set(Ge.x,a+7.2,Ge.z-10.15),n.add(d);let p=It(new G(new vt(4,4.5,4),r));p.position.set(Ge.x+13,a+1.2,Ge.z+2),p.rotation.set(.15,-.5,.1),n.add(p),s.cyl(2.8,4,Ge.x+13,a-.5,Ge.z+2,null,14733222);let x=new Dt({color:10483434,emissive:4183744,emissiveIntensity:1});for(let N of[-1,1]){let L=new G(new vt(.8,.3,.1),x);L.position.set(N*.9,.6,2.02),p.add(L)}let y=ql(18);for(let N=0;N<18;N++){let L=N/18*Math.PI*2+e()*.3,R=vn.r+3+e()*6,D=vn.x+Math.cos(L)*R,F=vn.z+Math.sin(L)*R,H=t(D,F);H<.6||(y.add(D,H-.2,F,-Math.cos(L),-Math.sin(L),e),s.cyl(.45,7,D,H-1,F,null,5221973,"tree"))}y.finish(n);let m=Et(7315274);for(let N=0;N<70;N++){let L=e()*Math.PI*2,R=vn.r-2+e()*4,D=vn.x+Math.cos(L)*R,F=vn.z+Math.sin(L)*R,H=new G(new fe(.08,1.8,3),m);H.position.set(D,Math.max(t(D,F),0)+.8,F),H.rotation.z=(e()-.5)*.3,n.add(H)}let f=Et(12873802),E=t(_i.x,_i.z);for(let N of[-1,1]){let L=_i.x+N*7,R=It(new G(new kt(2.2,3,12,7),f));R.position.set(L,E+5.5,_i.z),n.add(R),s.cyl(2.6,12,L,E-1,_i.z,null,12873802)}let g=It(new G(new qn(7,2.2,7,14,Math.PI),Et(11558972)));g.position.set(_i.x,E+10.5,_i.z),n.add(g);let M=un.h,T=[14246986,2864544,16040539];for(let N=0;N<3;N++){let L=N/3*Math.PI*2+.4,R=un.x+Math.cos(L)*8,D=un.z+Math.sin(L)*8,F=It(new G(new fe(3.4,4.5,6),Et(T[N])));F.position.set(R,M+2.25,D);let H=new G(new Cn(1.4,2.2),Et(5913124,{side:le})),U=Math.atan2(un.x-R,un.z-D);H.position.set(R+Math.sin(U)*2.1,M+1.1,D+Math.cos(U)*2.1),H.rotation.y=U,n.add(F,H),s.cyl(3,4.5,R,M-.5,D,null,T[N],"house")}let S=Et(7030320);for(let N=0;N<4;N++){let L=It(new G(new kt(.15,.15,1.8,6),S));L.position.set(un.x,M+.25,un.z),L.rotation.set(Math.PI/2-.3,N/4*Math.PI,0),n.add(L)}let _=new G(new fe(.6,1.6,6),new Me({color:16752704,transparent:!0,opacity:.9}));_.position.set(un.x,M+.9,un.z);let A=new en(16751168,30,18);A.position.set(un.x,M+1.5,un.z),n.add(_,A);let v=Et(12884588);for(let[N,L]of[[4,-3],[4.9,-2.2],[-3,4]]){let R=It(new G(new vt(1.1,1.1,1.1),v));R.position.set(un.x+N,M+.55,un.z+L),R.rotation.y=N,n.add(R)}let w=new G(new Cn(3,2),Et(10117040));w.rotation.x=-Math.PI/2,w.position.set(un.x-3.5,M+.05,un.z-2),n.add(w);let b=[];for(let[N,L,R,D]of Yl){let F=new G(new Ke(R*.5,16),new Me({color:16773584,transparent:!0,opacity:.12,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.set(N,D+6.6,L),n.add(F),b.push(F)}return{group:n,update(N,L){b.forEach((R,D)=>{R.material.opacity=.08+Math.sin(L*2+D)*.05}),_.scale.set(1+Math.sin(L*13)*.1,1+Math.sin(L*9)*.18,1+Math.cos(L*11)*.1),A.intensity=26+Math.sin(L*15)*6}}}};var Ws=0,Vn=-Ms,Ui={x:Ws+47,z:Vn-95,r:190,h:75},Pr={shrine:{name:"\u6C37\u306E\u7960",x:Ws-120,z:Vn+25,r:12,h:12},pond:{name:"\u51CD\u3063\u305F\u6C60",x:Ws+152,z:Vn+114,r:20},summit:{name:"\u767D\u5DBA\u306E\u9802",x:Ui.x,z:Ui.z,r:10},hut:{name:"\u5C71\u5C0F\u5C4B",x:Ws-5,z:Vn+230,r:14,h:8},monument:{name:"\u96EA\u539F\u306E\u77F3\u7891",x:Ws+230,z:Vn-60,r:12,h:10}},je=Pr.shrine,Mn=Pr.pond,Fe=Pr.hut,Di=Pr.monument,Wa=Oe.north,Rd=[[[Wa,Vn+420],[Wa,Vn+250],[Mn.x-24,Mn.z+16]],[[Wa,Vn+240],[Fe.x-10,Fe.z]],[[Wa,Vn+250],[-60,Vn+120],[je.x+14,je.z+4]],[[-60,Vn+120],[0,Vn+20],[Ui.x-8,Ui.z+20]],[[Mn.x-24,Mn.z+16],[200,Vn+40],[Di.x-10,Di.z+12]]],es={snow:new rt("#f4f8fb"),snowShade:new rt("#d8e5ef"),rock:new rt("#8e96a3"),rockDark:new rt("#6f7784"),beach:new rt("#d9d4c8"),beachDeep:new rt("#b9b4a8"),path:new rt("#bccbd8"),stone:new rt("#b9c3cf")},Cd={id:"snow",name:"\u767D\u5DBA\u306E\u96EA\u539F",cx:Ws,cz:Vn,edge:vs(345,[24,.4,15,2.8,12,1.1]),maxR:432,places:Pr,paths:Rd,sanctuaries:[],land(i,t){let e=4+Ee(i/40,t/40)*6+Ee(i/150+3,t/150)*9,n=Ut(Ui.r,0,Math.hypot(i-Ui.x,t-Ui.z));e+=Ui.h*n+(Ee(i/9,t/9)-.5)*4*n;for(let s of[je,Fe,Di])e=ge(e,s.h,Ut(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=ge(e,-1.5,Ut(Mn.r+22,Mn.r-3,Math.hypot(i-Mn.x,t-Mn.z))),e},color(i,t,e,n,s){if(e<1.5)return s.copy(es.beachDeep).lerp(es.beach,Ut(-2,1.2,e));s.copy(es.snowShade).lerp(es.snow,Ee(i/10,t/10)),s.lerp(es.beach,Ut(2.2,1.5,e));let r=yn(i,t,Rd);return r<2.2&&s.lerp(es.path,Ut(2.2,1.2,r)),Math.hypot(i-je.x,t-je.z)<je.r-3&&s.lerp(es.stone,.7),n>.7&&s.lerp(Ee(i/4,t/4)>.5?es.rock:es.rockDark,Ut(.7,1,n)),s},nature:{trees:{style:"pine",count:600,leafColors:[3104074,3828562,2641983],trunkColor:5914672,snowy:!0,maxH:55,maxSlope:.6},rocks:150,rockColor:9344675,avoid:Object.values(Pr).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E6\u30AD\u30C0\u30DE",tint:13624565,mult:2.8,count:28},ishimori:{name:"\u30B3\u30AA\u30EA\u30E2\u30EA",tint:10467536,mult:2.8,count:9}},decorate(i,t,e){let n=new Rt,s=Qn(n,i),r=new Dt({color:12578559,emissive:5224160,emissiveIntensity:.6,flatShading:!0,transparent:!0,opacity:.85}),o=Mn.r+6,a=new G(new Ke(o,32),new Dt({color:14217983,roughness:.1,metalness:.1,transparent:!0,opacity:.88}));a.rotation.x=-Math.PI/2,a.position.set(Mn.x,Gn+.12,Mn.z),a.receiveShadow=!0,n.add(a),i.push({box:new me(new z(Mn.x-o,-3,Mn.z-o),new z(Mn.x+o,Gn+.12,Mn.z+o)),cyl:{x:Mn.x,z:Mn.z,r:o},color:14217983,kind:"ice"});let c=je.h,l=Et(12174287);s.cyl(5.5,.6,je.x,c-.3,je.z,l,12174287,"part",12);for(let H=0;H<4;H++){let U=Math.PI/4+H/4*Math.PI*2;s.cyl(.5,5,je.x+Math.cos(U)*3.8,c+.3,je.z+Math.sin(U)*3.8,l,12174287,"part",8)}let h=It(new G(new fe(5.8,3,4),Et(5929156)));h.position.set(je.x,c+6.8,je.z),h.rotation.y=Math.PI/4,n.add(h);let u=new G(new In(1,0),r);u.scale.y=1.7,u.position.set(je.x,c+2.8,je.z),n.add(u);let d=new en(10479871,30,25);d.position.set(je.x,c+3,je.z),n.add(d);let p=new fe(.8,1,5),x=(H,U,O)=>{let V=t(H,U),q=new G(p,r);q.scale.set(O*.8,O*4,O*.8),q.position.set(H,V+O*2-.3,U),q.rotation.set((e()-.5)*.4,e()*3,(e()-.5)*.4),n.add(q),s.cyl(.7*O,O*4,H,V-.5,U,null,12578559)};for(let H=0;H<10;H++){let U=e()*Math.PI*2,O=je.r+2+e()*8;x(je.x+Math.cos(U)*O,je.z+Math.sin(U)*O,.7+e()*1.1)}x(Ui.x,Ui.z-4,2.6);let y=po({w:8,d:6.5,wall:9067067,roof:16054523,trim:5913124});y.position.set(Fe.x,Fe.h,Fe.z),y.rotation.y=-Math.PI/2,n.add(y);let m=new G(new vt(8.4,7,6.9));m.position.set(Fe.x,Fe.h+3.5,Fe.z),m.rotation.y=-Math.PI/2,m.updateMatrixWorld(!0),i.push({box:new me().setFromObject(m),color:9067067,kind:"house"});let f=14,E=new Float32Array(f*3),g=new z(Fe.x+1.3,Fe.h+7.8,Fe.z+2);for(let H=0;H<f;H++)E[H*3]=g.x,E[H*3+1]=g.y+H/f*8,E[H*3+2]=g.z;let M=new de;M.setAttribute("position",new ve(E,3));let T=new Pn(M,new gn({color:14212580,size:1.1,transparent:!0,opacity:.28,depthWrite:!1}));T.frustumCulled=!1,n.add(T);let S=Et(16317437),_=It(new G(new ye(1,12,10),S));_.position.set(Fe.x-7,Fe.h+.9,Fe.z+5);let A=It(new G(new ye(.65,12,10),S));A.position.set(Fe.x-7,Fe.h+2.3,Fe.z+5);let v=new G(new fe(.1,.5,6),Et(15764028));v.rotation.z=Math.PI/2,v.position.set(Fe.x-7.7,Fe.h+2.3,Fe.z+5),n.add(_,A,v),s.cyl(1,2.8,Fe.x-7,Fe.h-.5,Fe.z+5,null,16317437);let w=Di.h,b=It(new G(new vt(3.2,7,1.2),Et(8357780)));b.position.set(Di.x,w+3.3,Di.z),b.rotation.y=.4,n.add(b),s.cyl(2,7,Di.x,w-.5,Di.z,null,8357780);let N=new Dt({color:12578559,emissive:5224160,emissiveIntensity:1.3});for(let H=0;H<5;H++){let U=new G(new vt(H%2?1.6:.9,.18,.05),N);U.position.set((H%2?0:.2)-.1,1.8-H*.7,.62),b.add(U)}for(let H=0;H<6;H++){let U=H/6*Math.PI*2,O=It(new G(new Bn(.6,0),Et(9344675)));O.position.set(Di.x+Math.cos(U)*4,w+.3,Di.z+Math.sin(U)*4),n.add(O)}let L=700,R=new Float32Array(L*3);for(let H=0;H<L;H++)R[H*3]=(e()-.5)*80,R[H*3+1]=e()*40,R[H*3+2]=(e()-.5)*80;let D=new de;D.setAttribute("position",new ve(R,3));let F=new Pn(D,new gn({color:16777215,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return F.frustumCulled=!1,n.add(F),{group:n,update(H,U,O){u.rotation.y+=H;for(let q=0;q<f;q++){let nt=E[q*3+1]+H*1.2;nt>g.y+8&&(nt=g.y),E[q*3+1]=nt;let X=nt-g.y;E[q*3]=g.x+Math.sin(U*.8+q)*(.3+X*.12)+X*.25,E[q*3+2]=g.z+Math.cos(U*.7+q*1.7)*X*.12}M.attributes.position.needsUpdate=!0;let V=O&&Math.hypot(O.x-Ws,O.z-Vn)<440;if(F.visible=!!V,!!V){F.position.set(O.x,O.y-5,O.z);for(let q=0;q<L;q++){let nt=R[q*3+1]-H*3;nt<0&&(nt+=40),R[q*3+1]=nt,R[q*3]+=Math.sin(U+q)*H*.5}D.attributes.position.needsUpdate=!0}}}}};var Pe=-Ms,li=0,Mi={r:200,h:90,crater:22},go={crater:{name:"\u7114\u306E\u706B\u53E3",x:Pe,z:li,r:22},obsidian:{name:"\u9ED2\u66DC\u306E\u539F",x:Pe+133,z:li+183,r:26,h:4},spring:{name:"\u6E6F\u3051\u3080\u308A\u306E\u6E29\u6CC9",x:Pe+240,z:li-120,r:12,h:4},forge:{name:"\u935B\u51B6\u5834\u306E\u8DE1",x:Pe+232,z:li+62,r:14,h:5}},Hi=go.obsidian,Se=go.spring,Re=go.forge,mo=Oe.west,Pd=[[[Pe+420,mo],[Pe+262,mo+2],[Re.x-2,Re.z-16]],[[Pe+262,mo+2],[Pe+205,120],[Hi.x+12,Hi.z-22]],[[Pe+262,mo+2],[Pe+252,-90],[Se.x,Se.z+15]],[[Pe+262,mo+2],[Pe+170,-70],[Pe+70,-140],[Pe-60,-130],[Pe-120,-30],[Pe-80,70],[Pe+10,70],[Pe+40,20],[Pe+26,0]]],Id=[2.2,3.4,4.6],ns={basalt:new rt("#4a4550"),ash:new rt("#6d6570"),rim:new rt("#7a4a40"),sand:new rt("#3d3a40"),sandDeep:new rt("#2e2c32"),path:new rt("#8a7a70"),obsidian:new rt("#2e2a36"),scorch:new rt("#5a3a34"),spring:new rt("#8a8078")},Ld={id:"volcano",name:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",cx:Pe,cz:li,edge:vs(345,[18,2.6,18,1.9,9,.2]),maxR:425,places:go,paths:Pd,sanctuaries:[],land(i,t){let e=3+Ee(i/30,t/30)*4+Ee(i/130,t/130+7)*6,n=Math.hypot(i-Pe,t-li);e+=Mi.h*Ut(Mi.r,Mi.crater,n)+(Ee(i/10,t/10)-.5)*3*Ut(Mi.r,40,n),e=ge(e,Mi.h-14,Ut(Mi.crater,Mi.crater-8,n));for(let s of[Hi,Se,Re])e=ge(e,s.h,Ut(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=ge(e,Se.h-1.2,Ut(Se.r-2,Se.r-6,Math.hypot(i-Se.x,t-Se.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(ns.sandDeep).lerp(ns.sand,Ut(-2,1.2,e));s.copy(ns.basalt).lerp(ns.ash,Ee(i/10,t/10));let r=Math.hypot(i-Pe,t-li);s.lerp(ns.rim,Ut(90,30,r)*.8),s.lerp(ns.obsidian,Ut(Hi.r+6,Hi.r-6,Math.hypot(i-Hi.x,t-Hi.z))),s.lerp(ns.spring,Ut(Se.r+4,Se.r-2,Math.hypot(i-Se.x,t-Se.z))*.7);let o=yn(i,t,Pd);o<2.4&&s.lerp(ns.path,Ut(2.4,1.4,o));let a=Math.atan2(t-li,i-Pe);for(let c of Id){let l=Math.abs(Math.atan2(Math.sin(a-c),Math.cos(a-c)))*r;r>Mi.crater&&r<170&&l<5&&s.lerp(ns.scorch,Ut(5,2.5,l))}return s},nature:{trees:{style:"dead",count:180,trunkColor:3813424,maxH:30,maxSlope:.5},rocks:250,rockColor:4867408,grass:{count:1500,color:9075280},avoid:Object.values(go).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30D2\u30C0\u30DE",tint:14246986,mult:3.5,count:28},ishimori:{name:"\u30E8\u30A6\u30AC\u30F3\u30E2\u30EA",tint:5917256,mult:3.5,count:10}},decorate(i,t,e){let n=new Rt,s=Qn(n,i),r=new Rn({uniforms:{time:{value:0}},vertexShader:`
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
        }`}),o=Mi.h-13.2,a=new G(new Ke(Mi.crater-4,32),r);a.rotation.x=-Math.PI/2,a.position.set(Pe,o,li),n.add(a);let c=new en(16742960,200,90);c.position.set(Pe,o+6,li),n.add(c);for(let U of Id){let O=[],V=[],q=[];for(let K=0;K<=70;K++){let it=Mi.crater+1+K*2.2,ft=U+Math.sin(K*.35+U*3)*.08,gt=2.2+Math.sin(K*.5)*.7,Gt=Pe+Math.cos(ft)*it,Vt=li+Math.sin(ft)*it,bt=-Math.sin(ft),Ft=Math.cos(ft);for(let B of[-1,1]){let ot=Gt+bt*B*gt,tt=Vt+Ft*B*gt;O.push(ot,t(ot,tt)+.15,tt),V.push(B<0?0:1,K/6)}if(K>0){let B=(K-1)*2;q.push(B,B+1,B+2,B+1,B+3,B+2)}}let X=new de;X.setAttribute("position",new oe(O,3)),X.setAttribute("uv",new oe(V,2)),X.setIndex(q),n.add(new G(X,r))}let l=new Dt({color:1907494,roughness:.15,metalness:.4,flatShading:!0});for(let U=0;U<26;U++){let O=e()*Math.PI*2,V=e()*Hi.r,q=Hi.x+Math.cos(O)*V,nt=Hi.z+Math.sin(O)*V,X=t(q,nt),K=.8+e()*1.8,it=It(new G(new fe(.9*K,4*K,5),l));it.position.set(q,X+1.6*K,nt),it.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5),n.add(it),s.cyl(.8*K,3.5*K,q,X-.5,nt,null,1907494)}let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d"),d=u.createRadialGradient(32,32,0,32,32,32);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=d,u.fillRect(0,0,64,64);let p=new Ri(h),x=(U,O,V,q,nt)=>{let X=new Float32Array(U*3),K=new Float32Array(U),it=new de;it.setAttribute("position",new ve(X,3));let ft=new Pn(it,new gn({color:q,size:V,map:p,transparent:!0,opacity:nt,depthWrite:!1}));return ft.frustumCulled=!1,n.add(ft),{pos:X,life:K,geo:it,count:U,spread:O}},y=x(110,22,14,9076872,.45),m=U=>{y.pos[U*3]=Pe+(e()-.5)*y.spread,y.pos[U*3+1]=o+2,y.pos[U*3+2]=li+(e()-.5)*y.spread,y.life[U]=0};for(let U=0;U<y.count;U++)m(U),y.life[U]=e()*8,y.pos[U*3+1]+=y.life[U]*6;let f=new G(new Ke(Se.r-2.5,28),new Dt({color:10479840,emissive:4171936,emissiveIntensity:.25,transparent:!0,opacity:.85,roughness:.15}));f.rotation.x=-Math.PI/2,f.position.set(Se.x,Se.h-.5,Se.z),n.add(f);for(let U=0;U<16;U++){let O=U/16*Math.PI*2,V=.8+e()*.7,q=It(new G(new Bn(V,0),Et(7169392)));q.position.set(Se.x+Math.cos(O)*(Se.r-1.5),Se.h+V*.3,Se.z+Math.sin(O)*(Se.r-1.5)),n.add(q)}let E=x(50,Se.r*1.2,4,16777215,.35),g=U=>{E.pos[U*3]=Se.x+(e()-.5)*E.spread,E.pos[U*3+1]=Se.h-.3,E.pos[U*3+2]=Se.z+(e()-.5)*E.spread,E.life[U]=0};for(let U=0;U<E.count;U++)g(U),E.life[U]=e()*3,E.pos[U*3+1]+=E.life[U]*1.5;let M=Et(7030320),T=new Rt,S=It(new G(new vt(.2,2.2,.2),M));S.position.y=1.1;let _=new G(new vt(1.6,.8,.12),Et(12884588));_.position.y=2,T.add(S,_),T.position.set(Se.x,Se.h,Se.z+Se.r+2),n.add(T);let A=Re.h,v=Et(7169392);s.box(12,3.5,1.2,Re.x,A-.3,Re.z-6,v,7169392),s.box(1.2,2.2,8,Re.x-6,A-.3,Re.z-1.6,v,7169392),s.box(1.2,1.2,5,Re.x+6,A-.3,Re.z-3,v,7169392),s.box(4,4.2,3,Re.x+2,A-.3,Re.z-3.8,Et(5917256),5917256);let w=new G(new Cn(1.8,1.4),new Me({color:16742960}));w.position.set(Re.x+2,A+1.2,Re.z-2.28),n.add(w);let b=It(new G(new kt(.8,1,5,8),Et(5917256)));b.position.set(Re.x+2,A+6,Re.z-4.2),n.add(b);let N=new en(16747072,25,14);N.position.set(Re.x+2,A+1.5,Re.z-1),n.add(N);let L=Et(3816004,{metalness:.6,roughness:.4}),R=It(new G(new vt(.8,.9,.6),L));R.position.set(Re.x-2,A+.45,Re.z+1);let D=It(new G(new vt(1.8,.45,.7),L));D.position.set(Re.x-2,A+1.1,Re.z+1);let F=new G(new fe(.3,.8,6),L);F.rotation.z=Math.PI/2,F.position.set(Re.x-3.2,A+1.1,Re.z+1),n.add(R,D,F),s.cyl(1,1.4,Re.x-2,A-.3,Re.z+1,null,3816004);let H=Et(12107976,{metalness:.6});for(let U=0;U<4;U++){let O=new G(new vt(.1,1.4,.3),H);O.position.set(Re.x+4+U*.6,A+.6,Re.z+3+U%2*.5),O.rotation.set(0,U,(e()-.5)*.5),n.add(O)}return{group:n,update(U,O){r.uniforms.time.value=O,c.intensity=190+Math.sin(O*3)*40,N.intensity=22+Math.sin(O*12)*5;for(let V=0;V<y.count;V++)y.life[V]+=U,y.pos[V*3+1]+=U*6,y.pos[V*3]+=U*2,y.life[V]>8&&m(V);y.geo.attributes.position.needsUpdate=!0;for(let V=0;V<E.count;V++)E.life[V]+=U,E.pos[V*3+1]+=U*1.5,E.pos[V*3]+=Math.sin(O+V)*U*.3,E.life[V]>3&&g(V);E.geo.attributes.position.needsUpdate=!0}}}};var Ni=[vd,bd,Ad,Cd,Ld],xo=Ni.flatMap(i=>Object.values(i.places)),Xa=Ni.flatMap(i=>i.sanctuaries),Dd=[{name:"\u5DDD\u306E\u6A4B",axis:"z",at:Oe.north,mid:-240,small:!0}];function Ud(i){let t=new Rn({transparent:!0,depthWrite:!1,fog:!0,uniforms:zl.merge([xt.fog,{heightMap:{value:null},time:{value:0},shallow:{value:new rt("#6fdcd0")},deep:{value:new rt("#2f73b8")},foam:{value:new rt("#ffffff")},mapHalf:{value:Ln}}]),vertexShader:`
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
        float depth = max(0.0, ${Gn.toFixed(1)} - h);

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
      }`});t.uniforms.heightMap.value=i;let e=new G(new Cn(4e3,4e3),t);return e.rotation.x=-Math.PI/2,e.position.y=Gn,e.renderOrder=1,{mesh:e,update(n){t.uniforms.time.value=n}}}function g_(){return new Rn({transparent:!0,depthWrite:!1,side:le,uniforms:{time:{value:0}},vertexShader:`
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
      }`})}function Hd(i){let t=new Rt,e=Ae.plateau,n=g_(),s=5,r=new ht(-ei.y,ei.x),o=21,a=36,c=40,l=[],h=[],u=[],d=0,p=null;for(let w=0;w<=c;w++){let b=o+(a-o)*w/c,N=e.x+ei.x*b,L=e.z+ei.y*b,R=s*(.6+.4*(w/c)),D=Math.max(i(N,L),Gn-.2)+.35;p&&(d+=Math.hypot(b-p.d,D-p.y)),p={d:b,y:D};for(let F of[-1,1])l.push(N+r.x*F*R/2,D,L+r.y*F*R/2),h.push(F<0?0:1,d/6);if(w>0){let F=(w-1)*2;u.push(F,F+1,F+2,F+1,F+3,F+2)}}let x=new de;x.setAttribute("position",new oe(l,3)),x.setAttribute("uv",new oe(h,2)),x.setIndex(u);let y=new G(x,n);y.renderOrder=2,t.add(y);let m=new Dt({color:7331024,transparent:!0,opacity:.8,roughness:.2}),f=new G(new Ke(Ci.r+.6,24),m);f.rotation.x=-Math.PI/2,f.position.set(Ci.x,e.h-.45,Ci.z),t.add(f);let E=new z(e.x+ei.x*33,Gn+.3,e.z+ei.y*33),g=70,M=new Float32Array(g*3),T=new Float32Array(g),S=new Float32Array(g*3),_=w=>{M[w*3]=E.x+(Math.random()-.5)*4,M[w*3+1]=E.y,M[w*3+2]=E.z+(Math.random()-.5)*4,S[w*3]=(Math.random()-.5)*3,S[w*3+1]=2+Math.random()*4,S[w*3+2]=(Math.random()-.5)*3,T[w]=Math.random()};for(let w=0;w<g;w++)_(w);let A=new de;A.setAttribute("position",new ve(M,3));let v=new Pn(A,new gn({color:16777215,size:.5,transparent:!0,opacity:.8,depthWrite:!1}));return t.add(v),{group:t,update(w,b){n.uniforms.time.value=b;for(let N=0;N<g;N++)T[N]+=w,S[N*3+1]-=9*w,M[N*3]+=S[N*3]*w,M[N*3+1]+=S[N*3+1]*w,M[N*3+2]+=S[N*3+2]*w,(T[N]>1.2||M[N*3+1]<E.y-.5)&&_(N);A.attributes.position.needsUpdate=!0}}}var Nd=1.6;function x_(i){let t=document.createElement("canvas");t.width=256,t.height=80;let e=t.getContext("2d");e.fillStyle="#c49a6c",e.fillRect(0,0,256,80),e.strokeStyle="#8a5a3b",e.lineWidth=6,e.strokeRect(3,3,250,74),e.fillStyle="#5a3a24",e.font='bold 34px "M PLUS Rounded 1c", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,42);let n=new Ri(t);return n.colorSpace=Le,n}function zd(i,t,e){let n=new Rt,s=Et(11897438),r=Et(8015414),o=Et(14271642),a=Et(11116950),c=new Dt({color:16770728,emissive:16762992,emissiveIntensity:1.2}),l=Dn(new vt(1,1,1),s,2500),h=Dn(new vt(1,1,1),r,1500),u=Dn(new vt(1,1,1),o,2500),d=Dn(new kt(1,1.2,1,8).translate(0,.5,0),a,200),p=[];for(let x of i){let y=x.axis==="x",m=L=>y?[L,x.at]:[x.at,L],f=L=>e(...m(L)),E=x.mid,g=x.mid;for(let L=0;L<400&&f(E)<Nd;L++)E-=1;for(let L=0;L<400&&f(g)<Nd;L++)g+=1;E-=2,g+=2;let M=g-E,T=x.small?3.4:4.4,S=f(E)+.25,_=f(g)+.25,A=x.small?1.2:Math.min(7,Math.max(3,M*.07)),v=L=>{let R=(L-E)/M;return ge(S,_,R)+A*Math.sin(Math.PI*R)},w=L=>v(L+.5)-v(L-.5),b=(L,R,D)=>y?[L,D,x.at+R]:[x.at+R,D,L],N=Math.ceil(M/2);for(let L=0;L<N;L++){let R=E+L*M/N,D=E+(L+1)*M/N,F=v((R+D)/2),H=(U,O,V,q,nt,X)=>{let[K,,it]=b(R,U,0),[ft,,gt]=b(D,O,0);t.push({box:new me(new z(Math.min(K,ft),V,Math.min(it,gt)),new z(Math.max(K,ft),q,Math.max(it,gt))),color:X,kind:nt})};H(-T/2,T/2,F-.6,F,"bridge",11897438),H(-T/2-.3,-T/2,F,F+1.3,"rail",8015414),H(T/2,T/2+.3,F,F+1.3,"rail",8015414)}for(let L=E+.5;L<g;L+=1){let R=v(L)-.12,D=Math.atan(w(L)),[F,,H]=b(L,0,0);y?l.add(F,R,H,.95,.25,T,0,0,D):l.add(F,R,H,T,.25,.95,-D,0,0)}for(let L=E;L<=g+.01;L+=4){for(let R of[-1,1]){let[D,F,H]=b(L,R*(T/2+.15),v(L)+.7);h.add(D,F,H,.28,1.6,.28)}if(!x.small&&L>E+6&&L<g-6&&Math.round(L-E)%16===0){let[R,,D]=b(L,0,0),F=e(R,D);d.add(R,F,D,1.1,v(L)-.5-F,1.1)}}for(let L=E;L<g-.01;L+=4){let R=Math.min(L+4,g),D=(L+R)/2,F=Math.atan((v(R)-v(L))/(R-L));for(let H of[-1,1])for(let U of[1.35,.7]){let[O,V,q]=b(D,H*(T/2+.15),v(D)+U);y?u.add(O,V,q,R-L,.1,.1,0,0,F):u.add(O,V,q,.1,.1,R-L,-F,0,0)}}if(!x.small)for(let[L,R]of[[E,1],[g,-1]]){let D=v(L);for(let q of[-1,1]){let[nt,,X]=b(L,q*(T/2+.6),0),K=It(new G(new vt(.5,5.5,.5),r));K.position.set(nt,D+2.5,X);let it=new G(new In(.35,0),c);it.position.set(nt,D+5.6,X),n.add(K,it)}let[F,,H]=b(L,0,0),U=It(new G(new vt(y?.4:T+2.2,.4,y?T+2.2:.4),r));U.position.set(F,D+5.1,H),n.add(U);let O=x_(x.name),V=new G(new Cn(3.2,1),new Dt({map:O,side:le}));V.position.set(F,D+4.3,H),V.rotation.y=y?R>0?-Math.PI/2:Math.PI/2:R>0?Math.PI:0,n.add(V)}p.push({...x,from:m(E),to:m(g),length:M})}return n.add(l.finish(),h.finish(),u.finish(),d.finish()),{group:n,bridges:p}}function y_(){let i=new Rn({side:An,depthWrite:!1,uniforms:{top:{value:new rt("#4f8fe0")},horizon:{value:new rt("#fde8d2")},bottom:{value:new rt("#8fc3e0")}},vertexShader:`
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
      }`});return new G(new ye(1700,32,16),i)}function __(i){let t=new Rt,e=new Pa({color:16777215,emissive:12107980,flatShading:!0}),n=new xn(1,1);for(let s=0;s<90;s++){let r=new Rt,o=4+Math.floor(i()*4);for(let l=0;l<o;l++){let h=10+i()*12,u=new G(n,e);u.scale.set(h,h*.6,h),u.position.set((l-o/2)*15+i()*6,i()*6,i()*12-6),r.add(u)}let a=i()*Math.PI*2,c=i()*1600;r.position.set(Math.cos(a)*c,130+i()*90,Math.sin(a)*c),t.add(r)}return t}function v_(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=512/2;e.strokeStyle="#ffffff",e.fillStyle="#ffffff",e.lineCap="round",e.lineWidth=10,e.beginPath(),e.arc(n,n,236,0,Math.PI*2),e.stroke(),e.lineWidth=4,e.beginPath(),e.arc(n,n,206,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(n,n,110,0,Math.PI*2),e.stroke();for(let r=0;r<16;r++){let o=r/16*Math.PI*2;e.save(),e.translate(n+Math.cos(o)*221,n+Math.sin(o)*221),e.rotate(o),e.lineWidth=4,e.beginPath(),r%2?(e.moveTo(-6,-6),e.lineTo(6,6),e.moveTo(6,-6),e.lineTo(-6,6)):e.arc(0,0,5,0,Math.PI*2),e.stroke(),e.restore()}e.lineWidth=5;for(let r of[0,Math.PI/3]){e.beginPath();for(let o=0;o<=3;o++){let a=r+o/3*Math.PI*2-Math.PI/2;e.lineTo(n+Math.cos(a)*200,n+Math.sin(a)*200)}e.stroke()}e.beginPath(),e.arc(n,n,22,0,Math.PI*2),e.fill();let s=new Ri(t);return s.colorSpace=Le,s}function M_(i){let t=Ae.altar,e=t.h,n=new Rt;n.position.set(t.x,e,t.z);let s=Et(14275267,{roughness:.85}),r=It(new G(new kt(7.6,8,.4,16),s));r.position.y=.2;let o=It(new G(new kt(7,7.3,.4,16),s));o.position.y=.6,n.add(r,o),i.push({box:new me(new z(t.x-7.3,e-1,t.z-7.3),new z(t.x+7.3,e+.8,t.z+7.3)),cyl:{x:t.x,z:t.z,r:7.3},color:14275267,kind:"spawn"});let a=new G(new Ke(6.4,48),new Me({map:v_(),color:8384736,transparent:!0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.82,n.add(a);let c=Et(12432806),l=new Dt({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let x=0;x<4;x++){let y=Math.PI/4+x/4*Math.PI*2,m=Math.cos(y)*10,f=Math.sin(y)*10,E=It(new G(new kt(.5,.7,3.2,6),c));E.position.set(m,1.6,f);let g=new G(new In(.45,0),l);g.position.set(m,3.8,f),n.add(E,g),i.push({box:new me(new z(t.x+m-.7,e-1,t.z+f-.7),new z(t.x+m+.7,e+3.2,t.z+f+.7)),cyl:{x:t.x+m,z:t.z+f,r:.7},color:12432806,kind:"part"})}let h=60,u=new Float32Array(h*3),d=new Float32Array(h);for(let x=0;x<h;x++){let y=Math.random()*Math.PI*2,m=Math.random()*6;u[x*3]=Math.cos(y)*m,u[x*3+1]=Math.random()*6,u[x*3+2]=Math.sin(y)*m,d[x]=Math.random()}let p=new de;return p.setAttribute("position",new ve(u,3)),n.add(new Pn(p,new gn({color:11206642,size:.25,transparent:!0,opacity:.85,depthWrite:!1}))),{group:n,update(x,y){a.rotation.z=y*.15,a.material.opacity=.75+Math.sin(y*2)*.2;let m=p.attributes.position;for(let f=0;f<h;f++){let E=m.getY(f)+x*(.6+d[f]);E>7&&(E=.8),m.setY(f,E)}m.needsUpdate=!0}}}function E_(i,t){let e=new Rt,n=Qn(e,i),s=Ae.plateau,r=s.h,o=Et(7319119,{roughness:1}),a=M=>Et(M);n.cyl(5,25,s.x,r-1,s.z,a(11577242),11577242,"part",12);for(let M=4;M<24;M+=6){let T=new G(new kt(5.15,5.15,.6,12),a(9405816));T.position.set(s.x,r+M,s.z),e.add(T)}n.cyl(6.5,2,s.x,r+24,s.z,a(13616822),13616822,"part",12);let c=new kt(2.2,2,1,8),l=new fe(2,2.4,8);for(let M=0;M<8;M++){let T=.9+M*.72,S=r+3+M*3,_=s.x+Math.cos(T)*12,A=s.z+Math.sin(T)*12,v=new Rt,w=It(new G(c,o)),b=It(new G(l,a(10129296)));b.rotation.x=Math.PI,b.position.y=-1.7,v.add(w,b),v.position.set(_,S-.5,A),e.add(v),n.cyl(2.2,1,_,S-1,A,null,7319119)}n.cyl(2,.4,s.x,r+26,s.z,new Dt({color:15918793,roughness:.6}),16766826,"goal",16);let h=new G(new In(1.2,0),new Dt({color:9431295,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}));h.scale.y=1.6,h.position.set(s.x,r+30,s.z),e.add(h);let u=new en(8379647,30,30);u.position.copy(h.position),e.add(u);for(let M=0;M<10;M++){let T=M/10*Math.PI*2+.3,S=s.x+Math.cos(T)*19,_=s.z+Math.sin(T)*19,A=t(S,_),v=[7,3,5.5,1.5,8,2.5,6,4,7.5,2][M];if(n.cyl(1.3,v,S,A-.5,_,a(14209216),14209216,"part",8),v>5){let w=It(new G(new kt(1.7,1.7,.5,8),a(15130576)));w.position.set(S,A-.5+v+.25,_),e.add(w)}}let d=It(new G(new kt(1.2,1.2,8,8),a(14209216))),p=s.x-8,x=s.z+15;d.rotation.z=Math.PI/2,d.rotation.y=.6,d.position.set(p,t(p,x)+1,x),e.add(d);let y=Ae.plateau.x-9,m=Ae.plateau.z+22,f=t(y,m),E=a(13616822);n.box(1.6,7,1.6,y-4,f-.5,m,E,13616822),n.box(1.6,7,1.6,y+4,f-.5,m,E,13616822);let g=It(new G(new vt(10.4,1.4,2),E));return g.position.set(y,f+7.2,m),e.add(g),{group:e,crystal:h,crystalBaseY:r+30}}function w_(i){let t=new Rt,e=Qn(t,i),n=Ae.cave,s=n.h,r=13,o=.6,a=Et(8221808,{side:le,transparent:!0,opacity:1}),c=It(new G(new ye(r,22,12,Math.PI+o,Math.PI*2-o*2,0,Math.PI/2),a));c.scale.y=.8,c.position.set(n.x,s-.5,n.z),t.add(c);let l=Et(9273976);for(let S of[-1,1]){let _=S*(o+.05),A=It(new G(new Bn(2.6,0),l));A.position.set(n.x+Math.cos(_)*r,s+1.2,n.z+Math.sin(_)*r),A.scale.set(1,1.6,1),t.add(A)}for(let S=0;S<28;S++){let _=S/28*Math.PI*2,A=Math.atan2(Math.sin(_),Math.cos(_));Math.abs(A)<o||e.cyl(2.2,14,n.x+Math.cos(_)*(r+.5),s-1,n.z+Math.sin(_)*(r+.5),null,8221808,"wall")}let h=new Dt({color:10479871,emissive:4175584,emissiveIntensity:1.1,flatShading:!0}),u=new Dt({color:16759008,emissive:13656232,emissiveIntensity:.9,flatShading:!0}),d=new In(1,0);[[-7,-4],[-8,3],[-3,-8],[-2,8],[3,-9]].forEach(([S,_],A)=>{for(let v=0;v<4;v++){let w=new G(d,A%2?u:h),b=.5+Math.random()*.7;w.scale.set(b*.6,b*2,b*.6),w.position.set(n.x+S+(Math.random()-.5)*2,s+b,n.z+_+(Math.random()-.5)*2),w.rotation.set((Math.random()-.5)*.6,Math.random()*3,(Math.random()-.5)*.6),t.add(w)}e.cyl(1.4,3,n.x+S,s-.5,n.z+_,null,A%2?16759008:10479871,"part")});let x=new en(8379647,60,22);x.position.set(n.x-3,s+5,n.z),t.add(x);let y=new Rt,m=Et(9067067),f=Et(16040539,{metalness:.6,roughness:.35}),E=It(new G(new vt(2,1.1,1.3),m));E.position.y=.55;let g=It(new G(new kt(.65,.65,2,10,1,!1,0,Math.PI),m));g.rotation.z=Math.PI/2,g.position.y=1.1;let M=new G(new vt(2.05,.18,1.35),f);M.position.y=1;let T=new G(new vt(.3,.35,.1),f);return T.position.set(0,.95,.68),y.add(E,g,M,T),y.position.set(n.x-9,s,n.z),y.rotation.y=Math.PI/2,t.add(y),e.cyl(1.2,1.7,n.x-9,s,n.z,null,16040539,"chest"),{group:t,update(S,_){let v=_&&Math.hypot(_.x-n.x,_.z-n.z)<r+1?.18:1;a.opacity+=(v-a.opacity)*Math.min(1,S*6),a.depthWrite=a.opacity>.95}}}function b_(i){let e=new Map,n=(o,a)=>o*1e5+a;for(let o of i){let a=Math.floor(o.box.min.x/24),c=Math.floor(o.box.max.x/24),l=Math.floor(o.box.min.z/24),h=Math.floor(o.box.max.z/24);for(let u=a;u<=c;u++)for(let d=l;d<=h;d++){let p=n(u,d);e.has(p)||e.set(p,[]),e.get(p).push(o)}}let s=0,r=[];return(o,a)=>{s++,r.length=0;let c=Math.floor(o/24),l=Math.floor(a/24);for(let h=c-1;h<=c+1;h++)for(let u=l-1;u<=l+1;u++){let d=e.get(n(h,u));if(d)for(let p of d)p._stamp!==s&&(p._stamp=s,r.push(p))}return r.slice()}}function Od(i,t,e={}){let n=!!e.lite,s=Sr(2024);i.background=new rt("#fde8d2"),i.fog=new va("#e6eef2",300,n?1e3:1500);let r=y_();i.add(r);let o=__(s);i.add(o),i.add(new Ia(14478591,8032090,1));let a=new z(50,80,20),c=new Da(16773340,2.4);c.position.copy(a),c.castShadow=!0,c.shadow.mapSize.set(n?1024:2048,n?1024:2048),c.shadow.camera.left=-60,c.shadow.camera.right=60,c.shadow.camera.top=60,c.shadow.camera.bottom=-60,c.shadow.camera.far=250,c.shadow.bias=-5e-4,c.shadow.normalBias=.05,i.add(c),i.add(c.target);let l=md(Ni);l.maxR=Ln-30;let h=fd([l]);i.add(h.group);let u=h.sample,d=(b,N)=>Ni[l.regionIndexAt(b,N)],p=(b,N)=>u(b,N)>.3?d(b,N):null,x=Ud(h.heightTex);i.add(x.mesh);let y=Hd(u);i.add(y.group);let m=[],f=[],E=M_(m);i.add(E.group);let g=E_(m,u);i.add(g.group);let M=w_(m);i.add(M.group);let T=Ed(m,u);i.add(T.group),Ni.forEach((b,N)=>{if(b.decorate){let R=b.decorate(m,u,Sr(b.cx*7+b.cz*13+5));i.add(R.group),f.push(R.update)}let L=(R,D)=>l.weightOf(N,R,D);i.add(Sd(b,m,u,h.slopeAt,Sr(b.cx*3+b.cz*11+1),L,n?.35:1))});let S=zd(Dd,m,u);i.add(S.group);let _=pd([l],u,h.slopeAt,()=>l),A=b_(m),v=new z(Ae.altar.x,Ae.altar.h+.8,Ae.altar.z),w=0;return{sun:c,spawnPoint:v,colliders:m,collidersNear:A,mapImage:_,bridges:S.bridges,waterLevel:Gn,groundHeight:u,slopeAt:h.slopeAt,islandAt:p,regionAt:d,update(b,N,L){w+=b,L&&r.position.copy(L),o.rotation.y+=b*.004,x.update(w),N&&x.mesh.position.set(N.x,Gn,N.z),y.update(b,w),E.update(b,w),T.update(w),M.update(b,N);for(let R of f)R(b,w,N);g.crystal.rotation.y+=b*.8,g.crystal.position.y=g.crystalBaseY+Math.sin(w*1.5)*.4,N&&(c.target.position.copy(N),c.position.copy(N).add(a))}}}var qa={sword:[{anim:0,name:"\u7E26\u65AC\u308A",duration:.42,hitTime:.14,range:4.6,arc:1.7,power:1,knockback:1,lunge:7,hop:0,shake:.18,hitStop:.05},{anim:1,name:"\u6A2A\u8599\u304E",duration:.46,hitTime:.17,range:5,arc:3,power:1.1,knockback:1.4,lunge:9,hop:0,shake:.25,hitStop:.06},{anim:2,name:"\u56DE\u8EE2\u65AC\u308A",duration:.62,hitTime:.3,range:5.6,arc:Math.PI*2,power:1.7,knockback:2.2,lunge:4,hop:16,shake:.6,hitStop:.1}],fists:[{anim:3,name:"\u30B8\u30E3\u30D6",duration:.28,hitTime:.08,range:3.2,arc:1.4,power:.45,knockback:.6,lunge:5,hop:0,shake:.08,hitStop:.03},{anim:4,name:"\u30B9\u30C8\u30EC\u30FC\u30C8",duration:.38,hitTime:.12,range:3.6,arc:1.4,power:.7,knockback:1.2,lunge:8,hop:0,shake:.15,hitStop:.05},{anim:14,name:"\u30A2\u30C3\u30D1\u30FC",duration:.46,hitTime:.15,range:3.6,arc:1.6,power:1,knockback:1.6,lunge:6,hop:10,shake:.25,hitStop:.07}],blood:[{anim:10,name:"\u9006\u8888\u88DF",duration:.34,hitTime:.1,range:4.9,arc:2,power:1,knockback:.8,lunge:8,hop:0,shake:.2,hitStop:.05},{anim:11,name:"\u8888\u88DF\u65AC\u308A",duration:.36,hitTime:.11,range:4.9,arc:2,power:1.1,knockback:1,lunge:8,hop:0,shake:.24,hitStop:.05},{anim:12,name:"\u8840\u9583\u7A81\u304D",duration:.42,hitTime:.13,range:7.5,arc:.7,power:1.5,knockback:1.8,lunge:18,hop:0,shake:.3,hitStop:.07},{anim:13,name:"\u8840\u65CB",duration:.72,hitTime:.22,hitTimes:[.22,.44],range:6.2,arc:Math.PI*2,power:1.3,knockback:2.4,lunge:4,hop:12,shake:.55,hitStop:.09}]},IM=qa.sword,Fd={0:.42,1:.46,2:.62,3:.28,4:.38,5:.9,6:.45,7:.95,8:.6,9:.9,10:.34,11:.36,12:.42,13:.72,14:.46},Bd=.45;var Zl=(i,t={})=>new Dt({color:i,metalness:.3,roughness:.32,flatShading:!0,...t}),Ya=(i,t,e=1.2,n={})=>new Dt({color:i,emissive:t,emissiveIntensity:e,flatShading:!0,...n});function $l(i,t){let e=new _s;i.forEach(([s,r],o)=>o?e.lineTo(s,r):e.moveTo(s,r)),e.closePath();let n=new Bs(e,{depth:t,bevelEnabled:!0,bevelThickness:t*.35,bevelSize:.02,bevelSegments:1});return n.translate(0,0,-t/2),n.rotateY(-Math.PI/2),n}function S_(i=2757656,t=.5){let e=new G(new kt(.075,.085,t,8),new Dt({color:i,roughness:.8}));return e.rotation.x=Math.PI/2,e.position.z=-.02,e}function T_(){let i=new Rt,t=[[.3,-.17],[1.4,-.22],[2.05,-.15],[2.65,0]];for(let u=5;u>=0;u--){let d=.5+u*.3;t.push([d+.2,.17+(u>3?-.02:0)],[d+.1,.27],[d,.18])}t.push([.3,.17]);let e=new G($l(t,.07),Zl(2761776,{roughness:.3})),n=new G($l([[.4,-.06],[1.6,-.08],[2.35,0],[1.6,.08],[.4,.06]],.1),Ya(16719920,14684192,1.6)),s=Ya(16738938,16719936,1.8);for(let u=0;u<4;u++)for(let d of[-1,1]){let p=new G(new vt(.02,u%2?.1:.06,.06),s);p.position.set(d*.055,u%2?.12:-.13,.7+u*.35),p.rotation.x=u*.7,i.add(p)}let r=Zl(2363416);for(let u of[-1,1]){let d=[[0,0],[.1,u*.25],[.02,u*.5],[.16,u*.42],[.12,u*.66],[.26,u*.3],[.18,0]],p=new G($l(d,.05),r);p.position.z=.2,i.add(p)}let o=new G(new ye(.08,10,8),Ya(16765136,16719920,1.2));o.scale.set(.6,1,.6),o.position.set(0,0,.26);let a=new G(new vt(.1,.1,.02),new Me({color:1703941}));a.scale.set(1,.25,1),a.position.set(0,0,.27),a.rotation.y=Math.PI/2;let c=new G(new fe(.08,.2,6),r);c.rotation.x=-Math.PI/2,c.position.z=-.36;let l=Zl(4864580);for(let u=0;u<3;u++){let d=new G(new qn(.035,.012,4,8),l);d.position.set(0,-.06-u*.06,-.44),d.rotation.y=u%2?Math.PI/2:0,i.add(d)}let h=new G(new In(.06,0),Ya(16722490,12582936,1.5));return h.position.set(0,-.25,-.44),i.add(e,n,o,a,S_(1707026,.5),c,h),{group:i,pulse:[n.material,o.material,s,h.material]}}var kd={sangrea:T_};function Gd(i){let t=kd[i]();return t.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t.base=t.pulse.map(e=>e.emissiveIntensity),t}var Vd=Object.keys(kd);var A_={skin:16769223,hair:3882874,tunic:2864544,scarf:15764028,pants:4869737,boots:8015414,belt:7030320},Wn=(i,t={})=>new Dt({color:i,roughness:.6,...t});function ni(i){return i.castShadow=!0,i.receiveShadow=!0,i}function yo(i,t,e,n=0){let s=t*i,r=e*i,o=Math.sqrt(Math.max(0,i*i-s*s-r*r))+n;return new z(s,r,o)}function Wd(i=A_){let t=new Rt,e=new Rt;t.add(e);let n=(Z,k,ut,pt,_t,Nt,pe)=>{let he=new Rt;he.position.set(Z,k,0);let _e=ni(new G(new Ca(pt,ut,4,10),Wn(_t)));_e.position.y=-ut/2-pt*.5,he.add(_e);let Ce=ni(new G(new ye(pt*pe,12,10),Wn(Nt)));return Ce.position.y=-ut-pt*.7,he.add(Ce),e.add(he),{pivot:he,end:Ce}},s=n(-.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot,r=n(.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot;for(let Z of[s,r])Z.children[1].scale.set(1,.8,1.35);let o=new Rt;o.position.y=1.4;let a=ni(new G(new kt(.72,1,1.7,16),Wn(i.tunic)));a.position.y=.85;let c=ni(new G(new qn(.86,.1,6,20),Wn(i.belt)));c.rotation.x=Math.PI/2,c.position.y=.55;let l=new G(new vt(.26,.22,.08),Wn(16040539,{metalness:.6,roughness:.3}));l.position.set(0,.55,.93),o.add(a,c,l),e.add(o);let h=n(-.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot,u=n(.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot;h.rotation.z=-.12,u.rotation.z=.12;let d=new Rt;d.position.y=-.95,d.rotation.x=.35;let p=Wn(15134453,{metalness:.7,roughness:.25}),x=ni(new G(new vt(.09,.3,1.6),p));x.position.z=1.05;let y=ni(new G(new fe(.12,.3,4),p));y.rotation.x=Math.PI/2,y.scale.x=.5,y.position.z=1.95;let m=ni(new G(new vt(.2,.62,.12),Wn(16040539,{metalness:.6,roughness:.3})));m.position.z=.28;let f=new G(new kt(.08,.08,.45,8),Wn(7030320));f.rotation.x=Math.PI/2;let E=new Rt;E.add(x,y,m,f),d.add(E),u.add(d);let g={},M=null,T=new Rt;T.position.set(0,-1.32,.18),T.scale.setScalar(1.6);let S=new G(new ye(.22,12,10),Wn(14677247,{transparent:!0,opacity:.55,roughness:.1})),_=new G(new ye(.17,12,10),new Dt({color:16734830,emissive:13639744,emissiveIntensity:.6})),A=new G(new kt(.07,.09,.22,8),Wn(14677247,{transparent:!0,opacity:.55}));A.position.y=.26;let v=new G(new kt(.08,.07,.1,8),Wn(11565653));v.position.y=.4,T.add(_,S,A,v),T.visible=!1,u.add(T);let w=new G(new gi(1.4,3.9,24,1,-.4,3),new Me({color:15269883,transparent:!0,opacity:0,side:le,depthWrite:!1,blending:Fn}));w.position.set(.9,2.9,0),w.rotation.y=-Math.PI/2,w.visible=!1,e.add(w);let b=new G(new gi(1.4,4.4,32,1,-2.35,3.4),w.material.clone());b.rotation.x=-Math.PI/2,b.position.y=2.8,b.visible=!1,e.add(b);let N=new G(new gi(1.6,5.2,48),w.material.clone());N.material.color.set(16774344),N.rotation.x=-Math.PI/2,N.position.y=2.4,N.visible=!1,t.add(N);let L=new Rt;L.position.set(0,2.9,0);let R=new G(new gi(1.4,4.2,28,1,-.5,3.1),w.material.clone());R.rotation.y=-Math.PI/2,L.add(R),L.visible=!1,e.add(L);let D=new G(new fe(.5,1,10,1,!0).rotateX(-Math.PI/2).translate(0,0,.5),w.material.clone());D.position.set(.7,2.8,.6),D.visible=!1,e.add(D);let F=ni(new G(new qn(.62,.22,8,20),Wn(i.scarf)));F.rotation.x=Math.PI/2,F.position.y=3.1,e.add(F);let H=new Rt;H.position.set(.35,3.05,-.55);let U=ni(new G(new vt(.4,1.2,.12),Wn(i.scarf)));U.position.y=-.55,H.add(U),e.add(H);let O=1.05,V=new Rt;V.position.y=4.05;let q=ni(new G(new ye(O,28,20),Wn(i.skin,{roughness:.75,emissive:5913130,emissiveIntensity:.35})));V.add(q);let nt=Wn(i.hair,{roughness:.5,flatShading:!0}),X=ni(new G(new ye(O*1.08,20,14,0,Math.PI*2,0,Math.PI*.52),nt));X.rotation.x=-.35,V.add(X);for(let Z=-2;Z<=2;Z++){let k=ni(new G(new fe(.2,.55,4),nt)),ut=yo(O,Z*.22,.55,.02);k.position.copy(ut),k.rotation.set(Math.PI+.5,0,Z*.15),V.add(k)}let K=ni(new G(new fe(.14,.7,5),nt));K.position.set(.1,O*1.1,.1),K.rotation.set(.3,0,-.5),V.add(K);let it=new Dt({color:1907507,roughness:.3}),ft=new Me({color:16777215}),gt=[];for(let Z of[-1,1]){let k=new G(new ye(.15,12,10),it);k.scale.set(.9,1.35,.45),k.position.copy(yo(O,Z*.34,-.02,-.03)),k.lookAt(k.position.clone().multiplyScalar(2)),V.add(k),gt.push(k);let ut=new G(new ye(.05,8,6),ft);ut.position.copy(yo(O,Z*.34+.05,.07,.03)),V.add(ut)}let Gt=new Me({color:16751266,transparent:!0,opacity:.6});for(let Z of[-1,1]){let k=new G(new Ke(.13,16),Gt);k.scale.x=1.4;let ut=yo(O,Z*.55,-.25,.01);k.position.copy(ut),k.lookAt(ut.clone().multiplyScalar(2)),V.add(k)}let Vt=new G(new qn(.1,.025,6,12,Math.PI),new Me({color:5909805}));Vt.position.copy(yo(O,0,-.3,.005)),Vt.rotation.z=Math.PI,Vt.rotation.x=-.3,V.add(Vt),e.add(V);let bt=Math.random()*10,Ft=-1,B=0,ot=0,tt=0,dt=2+Math.random()*3,et=-1,Mt=0,wt=1,I="fists",P=1,Y=0,at=!1,ct=0,lt=!0,Ct=-1,yt=-1,Tt=0,Bt=0,Yt=0,st=-1,Xt={yaw:0,pitch:0,targetYaw:0,targetPitch:0,timer:2},ee=12,qt=!0,Ht=0,At=[];e.traverse(Z=>{Z.isMesh&&Z.material.isMeshStandardMaterial&&!At.includes(Z.material)&&At.push(Z.material)});let $t=At.map(Z=>({color:Z.emissive.getHex(),intensity:Z.emissiveIntensity})),Q=kn.lerp,be=(Z,k,ut,pt)=>Z+(k-Z)*Math.min(1,pt*ut);function Qt(Z,k){let ut=k.speed??0,pt=k.grounded??!0;bt+=Z,ot=be(ot,pt?ut:0,10,Z),tt=be(tt,pt?0:1,12,Z),B+=Z*10*Math.max(ot,.2);let _t=(1-ot)*(1-tt);h.rotation.y=0,u.rotation.y=0,d.rotation.x=.35;let Nt=0;pt&&!lt&&(Ct=0),!pt&&lt&&(yt=0),lt=pt;let pe=t.rotation.y-Tt;pe=Math.atan2(Math.sin(pe),Math.cos(pe)),Tt=t.rotation.y,Bt=be(Bt,kn.clamp(-(pe/Math.max(Z,.001))*.04,-.22,.22)*ot,8,Z);let he=et>=0||Ft>=0||at;_t>.9&&!he?Yt+=Z:(Yt=0,st=-1),st<0&&Yt>7&&(st=0);let _e=Math.sin(bt*2.2),Ce=(Math.sin(bt*1.3)*.7+Math.sin(bt*.47+1)*.3)*_t,xe=Math.sin(bt*.8+.5)*_t,Ze=Math.sin(B)*.8*ot,Hn=Math.abs(Math.sin(B))*.14*ot;if(h.rotation.x=Ze+Ce*.06+_e*.03*_t,u.rotation.x=-Ze+Ce*.06-_e*.03*_t,h.rotation.z=-.12-_e*.035*_t-ot*.05,u.rotation.z=.12+_e*.035*_t+ot*.05,s.rotation.x=-Ze+Ce*.03,r.rotation.x=Ze+Ce*.03,s.rotation.z=xe*.025,r.rotation.z=xe*.025,o.position.y=1.4+Hn+_e*.025*_t,o.scale.set(1+_e*.012*_t,1,1+_e*.018*_t),o.rotation.y=-Math.sin(B)*.14*ot,Xt.timer-=Z,Xt.timer<=0){let Lt=Math.random()<.6;Xt.targetYaw=Lt?(Math.random()-.5)*1.1:0,Xt.targetPitch=Lt?(Math.random()-.4)*.25:0,Xt.timer=1.5+Math.random()*3}Xt.yaw=be(Xt.yaw,Xt.targetYaw*_t,5,Z),Xt.pitch=be(Xt.pitch,Xt.targetPitch*_t,5,Z),V.position.y=4.05+Hn*1.1+_e*.04*_t,V.rotation.y=Xt.yaw,V.rotation.x=Xt.pitch+Math.sin(B*2)*.04*ot-Ce*.03,V.rotation.z=Math.sin(B)*.05*ot+xe*.03,F.position.y=3.1+Hn,H.position.y=3.05+Hn,H.rotation.x=-.2-ot*.9-tt*.6+Math.sin(bt*6)*.08*(.3+ot)+Ce*.05,H.rotation.z=Math.sin(bt*2.3)*.08*(.4+ot);let $e=Ce*.035+ot*.12,Hr=xe*.025+Math.sin(B)*.045*ot+Bt,pn=1,bi=_t+ot*.5;if(I==="fists"){let Lt=Math.abs(Math.sin(bt*5.5))*_t;h.rotation.x=Q(h.rotation.x,-1.15+Math.sin(bt*5.5)*.06,bi),h.rotation.z=Q(h.rotation.z,.42,bi),u.rotation.x=Q(u.rotation.x,-.95-Math.sin(bt*5.5+1)*.06,bi),u.rotation.z=Q(u.rotation.z,-.42,bi),pn-=Lt*.035,$e+=.05*_t,o.rotation.y=Q(o.rotation.y,.18,_t),V.rotation.x+=.08*_t}else I==="sword"?(u.rotation.x=Q(u.rotation.x,-.25+Math.max(0,Math.sin(bt*.7))*.2,_t),d.rotation.x=.35+.3*_t):I==="blood"&&(u.rotation.x=Q(u.rotation.x,-.55+Math.sin(bt*1.1)*.05,bi),u.rotation.z=Q(u.rotation.z,.35,bi),d.rotation.x=.35+.55*bi,h.rotation.x=Q(h.rotation.x,-.35,_t),h.rotation.z=Q(h.rotation.z,-.55,_t),$e+=.1*_t,Hr+=.05*_t,V.rotation.x+=.14*_t,Xt.yaw*=.4,V.rotation.y=Xt.yaw,s.rotation.x-=.15*_t,r.rotation.x+=.2*_t);if(st>=0){st+=Z;let Lt=Math.min(st/2.4,1),ue=Math.sin(Math.min(Lt*3,1)*Math.PI/2)*(Lt>.7?(1-Lt)/.3:1);h.rotation.z=Q(h.rotation.z,-2.7,ue),u.rotation.z=Q(u.rotation.z,2.7,ue),h.rotation.x=Q(h.rotation.x,-.3,ue),u.rotation.x=Q(u.rotation.x,-.3,ue),$e-=.12*ue,V.rotation.x-=.25*ue,pn+=.04*ue,gt.forEach(ce=>{ce.scale.y=Q(1.35,.2,ue)}),Lt>=1&&(st=-1,Yt=-6-Math.random()*6)}if(Ct>=0){Ct+=Z;let Lt=Ct/.25;pn-=Math.sin(Math.min(Lt,1)*Math.PI)*.16,s.rotation.x-=Math.sin(Math.min(Lt,1)*Math.PI)*.3,r.rotation.x-=Math.sin(Math.min(Lt,1)*Math.PI)*.3,Lt>=1&&(Ct=-1)}if(yt>=0){yt+=Z;let Lt=yt/.2;pn+=Math.sin(Math.min(Lt,1)*Math.PI)*.1,Lt>=1&&(yt=-1)}if(tt>.01&&(h.rotation.z=Q(h.rotation.z,-1.1,tt),u.rotation.z=Q(u.rotation.z,1.1,tt),h.rotation.x=Q(h.rotation.x,-.3,tt),u.rotation.x=Q(u.rotation.x,-.3,tt),s.rotation.x=Q(s.rotation.x,-.7,tt),r.rotation.x=Q(r.rotation.x,.2,tt)),dt-=Z,st<0){let Lt=dt<.12;for(let ue of gt)ue.scale.y=Lt?.15:1.35}if(dt<0&&(dt=2+Math.random()*3),w.visible=b.visible=N.visible=L.visible=D.visible=!1,et>=0){et+=Z*wt;let Lt=et,ue=Fd[Mt],ce=mt=>1-Math.pow(1-Math.min(Math.max(mt,0),1),3),Pt=(mt,C)=>Math.min(Math.max((Lt-mt)/(C-mt),0),1),Si=Pt(ue-.18,ue);if(Mt===0){let mt;Lt<.1?mt=Q(u.rotation.x,-2.8,ce(Lt/.1)):Lt<.22?mt=Q(-2.8,-.15,ce(Pt(.1,.22))):mt=Q(-.15,u.rotation.x,Si),u.rotation.x=mt,u.rotation.z=.25,h.rotation.x=Q(h.rotation.x,.5,1-Si),o.rotation.y=Lt<.1?-.25*(Lt/.1):Q(-.25,.2,Pt(.1,.22))*(1-Si),$e+=Lt<.1?-.05:.12*(1-Pt(.1,.4)),w.visible=Lt>.1&&Lt<.36,w.material.opacity=Lt<.22?.75:.75*(1-Pt(.22,.36))}else if(Mt===1){let mt=ce(Pt(0,.1))*(1-Si),C=ce(Pt(.1,.26));u.rotation.z=Q(u.rotation.z,1.45,mt),u.rotation.x=0,u.rotation.y=Q(0,Q(.9,-2.3,C),mt),d.rotation.x=Q(.35,1.25,mt),h.rotation.z=Q(h.rotation.z,-.9,mt),h.rotation.y=Q(0,Q(.6,-.4,C),mt),o.rotation.y=Q(.4,-.45,C)*mt,Hr+=Q(.08,-.1,C)*mt,$e+=.08*mt,V.rotation.y=Q(.3,-.3,C)*mt,b.visible=Lt>.1&&Lt<.4,b.material.opacity=Lt<.26?.7:.7*(1-Pt(.26,.4))}else if(Mt===2){let mt=ce(Pt(0,.12)),C=Pt(.12,.42),W=mt*(1-Si);u.rotation.z=Q(u.rotation.z,1.5,W),u.rotation.x=0,u.rotation.y=Q(0,.7,W)*(1-C*.6),d.rotation.x=Q(.35,1.3,W),h.rotation.z=Q(h.rotation.z,-1.3,W),s.rotation.x-=.5*mt*(1-C),r.rotation.x+=.3*mt*(1-C),pn-=.12*mt*(1-Pt(.12,.2)),Nt=-Math.PI*2*(1-Math.pow(1-C,2)),V.rotation.y=0,N.visible=Lt>.16&&Lt<.5,N.material.opacity=.75*(1-Pt(.3,.5)),N.scale.setScalar(.8+Pt(.16,.5)*.35)}else if(Mt===3){let mt=ce(Pt(0,.07))*(1-Pt(.14,ue));h.rotation.x=Q(h.rotation.x,-1.55,mt),h.rotation.z=Q(h.rotation.z,.15,mt),u.rotation.x=Q(u.rotation.x,-.9,.7),u.rotation.z=Q(u.rotation.z,-.35,.7),o.rotation.y=.25*mt,$e+=.06*mt}else if(Mt===4){let mt=ce(Pt(0,.05))*(1-Pt(.05,.12)),C=ce(Pt(.05,.12))*(1-Pt(.2,ue));u.rotation.x=Q(Q(u.rotation.x,-.4,mt),-1.6,C),u.rotation.z=Q(u.rotation.z,-.1,C),h.rotation.x=Q(h.rotation.x,-.9,.7),h.rotation.z=Q(h.rotation.z,.35,.7),o.rotation.y=Q(.2*mt,-.35,C),$e+=.12*C-.04*mt}else if(Mt===5){let mt=ce(Pt(0,.2))*(1-Pt(.72,ue)),C=Pt(.25,.65);u.rotation.x=Q(u.rotation.x,-2.25,mt),u.rotation.z=Q(u.rotation.z,-.45,mt),V.rotation.x=Q(V.rotation.x,-.35-Math.sin(C*Math.PI*4)*.05,mt),V.rotation.y=0,$e-=.06*mt,Lt>.72&&gt.forEach(W=>{W.scale.y=.2})}else if(Mt===6){let mt=ce(Pt(0,.06))*(1-Pt(ue-.12,ue)),C=ce(Pt(.16,.26));u.rotation.z=Q(u.rotation.z,1.45,mt),u.rotation.x=0,u.rotation.y=Q(0,Q(1.3,-2.2,C),mt),d.rotation.x=Q(.35,1.25,mt),h.rotation.x=Q(h.rotation.x,.9,mt),s.rotation.x=Q(s.rotation.x,-.9,mt),r.rotation.x=Q(r.rotation.x,.7,mt),o.rotation.y=Q(.3,-.4,C)*mt,$e+=.38*mt,b.visible=Lt>.16&&Lt<.36,b.material.opacity=.8*(1-Pt(.26,.36))}else if(Mt===7){let mt=ce(Pt(0,.12))*(1-Pt(.12,.2)),C=ce(Pt(.1,.3))*(1-Pt(.55,.64)),W=ce(Pt(.55,.64))*(1-Pt(.8,ue));pn-=.16*mt+.1*W,u.rotation.x=Q(Q(u.rotation.x,-2.95,C),-.35,W),u.rotation.z=Q(u.rotation.z,-.15,Math.max(C,W)),h.rotation.x=Q(Q(h.rotation.x,-2.7,C),-.5,W),h.rotation.z=Q(h.rotation.z,.35,Math.max(C,W)),s.rotation.x-=.6*W,r.rotation.x+=.3*W,$e+=-.18*C+.4*W,w.visible=Lt>.55&&Lt<.75,w.material.opacity=.85*(1-Pt(.64,.75))}else if(Mt===8){let mt=ce(Pt(0,.1))*(1-Pt(.1,.15)),C=ce(Pt(.1,.16))*(1-Pt(.42,ue));u.rotation.x=Q(Q(u.rotation.x,-2.2,mt),-.45,C),u.rotation.z=Q(u.rotation.z,.1,Math.max(mt,C)),d.rotation.x=Q(.35,1.9,C),h.rotation.x=Q(h.rotation.x,.6,C),h.rotation.z=Q(h.rotation.z,-.6,C),pn-=.12*C,s.rotation.x-=.5*C,$e+=.3*C}else if(Mt===9){let mt=ce(Pt(0,.2))*(1-Pt(.55,.68)),C=Pt(.3,.45),W=ce(Pt(.55,.68))*(1-Pt(.78,ue));u.rotation.x=Q(Q(u.rotation.x,-1.75,mt),-.3,W),u.rotation.z=Q(Q(u.rotation.z,-.55,mt),1.1,W),d.rotation.x=Q(.35,-.95,mt),h.rotation.x=Q(Q(h.rotation.x,-1.65+C*.35,mt),-.3,W),h.rotation.z=Q(Q(h.rotation.z,.55,mt),-1.1,W),V.rotation.x+=.18*mt-.25*W,$e+=-.12*W,Lt>.3&&Lt<.6&&gt.forEach($=>{$.scale.y=.2})}else if(Mt===10||Mt===11){let mt=Mt===10,C=ce(Pt(0,.06))*(1-Pt(.06,.1)),W=ce(Pt(.06,.16)),$=1-Si,j=mt?-.2:-2.7,J=mt?-2.6:-.3,St=mt?-.7:.9,zt=mt?.9:-.7;u.rotation.x=Q(u.rotation.x,Q(j,J,W),$),u.rotation.z=Q(u.rotation.z,Q(St,zt,W),$),d.rotation.x=Q(.35,.8,$),h.rotation.x=Q(h.rotation.x,.5,$),o.rotation.y=Q(mt?.3:-.2,mt?-.35:.35,W)*$,$e+=(.12*W-.05*C)*$,L.rotation.z=mt?-.75:.75,L.visible=Lt>.06&&Lt<.26,R.material.opacity=.85*(1-Pt(.16,.26))}else if(Mt===12){let mt=ce(Pt(0,.08))*(1-Pt(.08,.12)),C=ce(Pt(.08,.14))*(1-Si);u.rotation.x=Q(Q(u.rotation.x,-.9,mt),-1.55,C),u.rotation.z=Q(u.rotation.z,.05,Math.max(mt,C)),u.rotation.y=.35*mt,d.rotation.x=Q(.35,-.02,C),h.rotation.x=Q(h.rotation.x,.8,C),s.rotation.x-=.7*C,r.rotation.x+=.5*C,o.rotation.y=Q(.35*mt,-.4,C),$e+=.3*C-.08*mt,D.visible=Lt>.08&&Lt<.3,D.scale.set(1,1,1+Pt(.08,.16)*7),D.material.opacity=.8*(1-Pt(.16,.3))}else if(Mt===13){let mt=ce(Pt(0,.08))*(1-Si),C=Pt(.08,.55);u.rotation.z=Q(u.rotation.z,1.5,mt),u.rotation.x=0,u.rotation.y=.5*mt,d.rotation.x=Q(.35,1.3,mt),h.rotation.z=Q(h.rotation.z,-1.2,mt),Nt=-Math.PI*4*(1-Math.pow(1-C,2)),pn-=.1*ce(Pt(0,.08))*(1-Pt(.08,.14)),N.visible=Lt>.1&&Lt<.62,N.material.opacity=.8*(1-Pt(.45,.62)),N.scale.setScalar(1+Pt(.1,.6)*.3)}else if(Mt===14){let mt=ce(Pt(0,.08))*(1-Pt(.08,.14)),C=ce(Pt(.08,.18))*(1-Pt(.3,ue));u.rotation.x=Q(Q(u.rotation.x,.3,mt),-2.7,C),u.rotation.z=Q(u.rotation.z,-.2,Math.max(mt,C)),h.rotation.x=Q(h.rotation.x,-.9,.7),h.rotation.z=Q(h.rotation.z,.4,.7),pn-=.14*mt-.06*C,$e+=-.1*C+.1*mt,o.rotation.y=Q(.3*mt,-.3,C)}Lt>=ue&&(et=-1,o.rotation.y=0)}if(Y=Math.max(0,Y-Z),Y>0&&($e-=.25*(Y/.25)),At.forEach((Lt,ue)=>{Y>0?(Lt.emissive.setHex(16724016),Lt.emissiveIntensity=.9*(Y/.25)):(Lt.emissive.setHex($t[ue].color),Lt.emissiveIntensity=$t[ue].intensity)}),ct=be(ct,at?1:0,6,Z),at&&gt.forEach(Lt=>{Lt.scale.y=.15}),e.rotation.x=Q($e,-1.45,ct),e.rotation.y=Nt,e.rotation.z=Hr*(1-ct),e.scale.set(1+(1-pn)*.5,pn,1+(1-pn)*.5),Ft>=0){Ft+=Z;let ue=Math.min(Ft/2.2,1),ce=Math.sin(Math.min(ue*4,1)*Math.PI/2)*(ue>.85?(1-ue)/.15:1);u.rotation.z=.12+ce*2.5,u.rotation.x=-ce*.2+Math.sin(Ft*12)*.35*ce,V.rotation.z+=ce*.08,(ue>=1||ot>.3||tt>.3)&&(Ft=-1)}}return{object:t,setStance(Z){I=Z},setGlow(Z){P=Z},bladeTip(Z){return d.visible?(d.updateWorldMatrix(!0,!1),d.localToWorld(Z.set(0,0,M?2.6:1.9))):null},setHeld(Z){let k=Vd.includes(Z);k&&!g[Z]&&(g[Z]=Gd(Z),d.add(g[Z].group));for(let[ut,pt]of Object.entries(g))pt.group.visible=ut===Z;M=k?g[Z]:null,E.visible=Z==="sword",d.visible=Z==="sword"||k,T.visible=Z==="potion"},setTrailColor(Z=15269883){w.material.color.setHex(Z),b.material.color.setHex(Z),N.material.color.setHex(Z===15269883?16774344:Z),R.material.color.setHex(Z),D.material.color.setHex(Z)},drink(){return at?!1:(et=0,Mt=5,wt=1,Ft=-1,st=-1,!0)},wave(){Ft<0&&et<0&&(Ft=0)},attack(Z=0,k=1){return at?!1:(et=0,Mt=Z,wt=k,Ft=-1,st=-1,!0)},get attacking(){return et>=0},hurt(){Y=.25},setFainted(Z){at=Z,Z?et=-1:ct=0},get stepped(){return qt},set stepped(Z){qt=Z},update(Z,k={}){if(M){let pt=.75+.35*(.5+.5*Math.sin(bt*3.2+Ht*3.2));M.pulse.forEach((_t,Nt)=>{_t.emissiveIntensity=M.base[Nt]*pt*P})}if(Ht+=Z,qt&&Ht<1/ee)return;let ut=Math.min(Ht,.2);Ht=0,Qt(ut,k)}}}var R_=14,C_=38,P_=120,I_=1.1,zi=.85,Xd=5,L_=-40,D_=1.15,U_=3,H_=.55,Za=1060,Ei=.001;function qd(i,t){let e=i.object,n=e.position,s=new z,r=new ht,o=!0,a=0,c=0,l=null,h=!1,u=[],d=new z,p=new z,x=g=>({x:kn.clamp(g.x,n.x-zi,n.x+zi),z:kn.clamp(g.z,n.z-zi,n.z+zi)}),y=g=>{let M=g.box;d.set(n.x-zi,n.y,n.z-zi),p.set(n.x+zi,n.y+Xd,n.z+zi);let T=d.x<M.max.x-Ei&&p.x>M.min.x+Ei&&d.y<M.max.y-Ei&&p.y>M.min.y+Ei&&d.z<M.max.z-Ei&&p.z>M.min.z+Ei;if(!T||!g.cyl)return T;let S=x(g.cyl);return Math.hypot(S.x-g.cyl.x,S.z-g.cyl.z)<g.cyl.r-Ei};function m(g){let M=x(g),T=M.x-g.x,S=M.z-g.z,_=Math.hypot(T,S);_<1e-6&&(T=n.x-g.x,S=n.z-g.z,_=Math.hypot(T,S)||1,Math.hypot(T,S)<1e-6&&(T=1));let A=g.r-_+Ei*2;n.x+=T/_*A,n.z+=S/_*A}function f(g,M){if(M===0)return;n[g]+=M;let T=t.groundHeight(n.x,n.z),S=n.y+(o||h?Math.abs(M)*D_+.02:0);if(T>S){n[g]-=M;return}for(let _ of u){let A=_.box;if(!y(_))continue;let v=A.max.y-n.y;if(o&&v>0&&v<=I_){let w=n.y;if(n.y=A.max.y,!u.some(b=>b!==_&&y(b)))continue;n.y=w}_.cyl?m(_.cyl):n[g]=M>0?A.min[g]-zi-Ei:A.max[g]+zi+Ei}}function E(g){let M=o;n.y+=g;let T=g<=0;o=!1,h=!1,l=null;for(let A of u)y(A)&&(T?(n.y=Math.max(n.y,A.box.max.y),o=!0,l=A.kind):n.y=A.box.min.y-Xd-Ei,s.y=0);let S=t.groundHeight(n.x,n.z);if((n.y<=S||!o&&M&&T&&n.y-S<.7)&&(n.y=S,s.y=0,o=!0,l="ground"),!o&&M&&T){let A=n.y;n.y-=.7;let v=-1/0,w=null;for(let b of u)b.box.max.y<=A+.01&&b.box.max.y>v&&y(b)&&(v=b.box.max.y,w=b.kind);n.y=A,w&&(n.y=v,s.y=0,o=!0,l=w)}let _=t.waterLevel-U_;if(!o&&n.y<_&&S<_&&(n.y=_,s.y<0&&(s.y=0),o=!0,h=!0,l="water"),!o&&s.y<=0){n.y-=.05;let A=u.find(v=>y(v));n.y+=.05,A&&(o=!0,l=A.kind)}}return{get grounded(){return o},get groundKind(){return l},get facing(){return a},get position(){return n},get swimming(){return h},respawn(g=0){n.copy(t.spawnPoint),s.set(0,0,0),r.set(0,0),a=g,e.rotation.y=g,o=!0},setFacing(g){a=g,e.rotation.y=g},knockback(g,M,T=0){r.set(g,M),T>0&&(s.y=T,o=!1)},update(g,M){u=t.collidersNear(n.x,n.z);let T=Math.min(1,Math.hypot(M.x,M.z));c=T;let S=R_*(h?H_:1);if(s.x=M.x*S+r.x,s.z=M.z*S+r.y,r.multiplyScalar(Math.exp(-g*5)),M.jump&&o&&(s.y=C_*(h?.55:1),o=!1),s.y-=P_*g,f("x",s.x*g),f("z",s.z*g),E(s.y*g),n.x=kn.clamp(n.x,-Za,Za),n.z=kn.clamp(n.z,-Za,Za),T>.05&&!M.lockFacing){let A=Math.atan2(M.x,M.z)-a;A=Math.atan2(Math.sin(A),Math.cos(A)),a+=A*Math.min(1,g*14)}e.rotation.y=a,n.y<L_&&this.respawn(a),i.update(g,{speed:c,grounded:o,swimming:h})}}}function Yd(i,{joystickEl:t,jumpBtnEl:e,attackBtnEl:n,skillBtnsEl:s,onKey:r}){let o=new Set,a={dx:0,dy:0},c=0,l=!1,h=!1,u=!1,d=-1,p={x:0,y:0,id:null};window.addEventListener("keydown",S=>{if(l&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(S.code)&&S.preventDefault(),o.add(S.code),!S.repeat)){(S.code==="KeyF"||S.code==="KeyJ")&&(u=!0);let _={KeyQ:0,KeyE:1,KeyR:2};S.code in _&&(d=_[S.code]),r?.(S.code)}}),window.addEventListener("keyup",S=>o.delete(S.code)),window.addEventListener("blur",()=>o.clear());let x=new Map;i.addEventListener("contextmenu",S=>S.preventDefault()),i.addEventListener("pointerdown",S=>{l&&(i.setPointerCapture(S.pointerId),x.set(S.pointerId,{x:S.clientX,y:S.clientY,sx:S.clientX,sy:S.clientY,time:performance.now(),button:S.button}),i.classList.add("dragging"))});let y=0;i.addEventListener("pointermove",S=>{let _=x.get(S.pointerId);if(!_)return;let A=S.clientX-_.x,v=S.clientY-_.y;if(_.x=S.clientX,_.y=S.clientY,x.size>=2){let[w,b]=[...x.values()],N=Math.hypot(w.x-b.x,w.y-b.y);y&&(c+=(y-N)*4),y=N;return}y=0,a.dx+=A,a.dy+=v});let m=S=>{let _=x.get(S.pointerId);_&&S.type==="pointerup"&&_.button===0&&l&&Math.hypot(S.clientX-_.sx,S.clientY-_.sy)<6&&performance.now()-_.time<300&&(u=!0),x.delete(S.pointerId),x.size<2&&(y=0),x.size===0&&i.classList.remove("dragging")};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),i.addEventListener("wheel",S=>{l&&(S.preventDefault(),c+=S.deltaY)},{passive:!1});let f=t.querySelector(".knob"),E=48,g=S=>{let _=t.getBoundingClientRect(),A=S.clientX-(_.left+_.width/2),v=S.clientY-(_.top+_.height/2),w=Math.hypot(A,v);w>E&&(A=A/w*E,v=v/w*E),p.x=A/E,p.y=v/E,f.style.transform=`translate(${A}px, ${v}px)`};t.addEventListener("pointerdown",S=>{p.id=S.pointerId,t.setPointerCapture(S.pointerId),g(S)}),t.addEventListener("pointermove",S=>{S.pointerId===p.id&&g(S)});let M=S=>{S.pointerId===p.id&&(p.id=null,p.x=p.y=0,f.style.transform="")};t.addEventListener("pointerup",M),t.addEventListener("pointercancel",M),e.addEventListener("pointerdown",S=>{S.preventDefault(),h=!0}),e.addEventListener("pointerup",()=>{h=!1}),e.addEventListener("pointercancel",()=>{h=!1}),e.addEventListener("pointerleave",()=>{h=!1}),n.addEventListener("pointerdown",S=>{S.preventDefault(),l&&(u=!0)}),[...s.children].forEach((S,_)=>{S.addEventListener("pointerdown",A=>{A.preventDefault(),l&&(d=_)})});let T=(...S)=>S.some(_=>o.has(_));return{get enabled(){return l},set enabled(S){l=S,S||(o.clear(),x.clear(),h=!1,u=!1,d=-1)},move(){let S=(T("KeyW","ArrowUp")?1:0)-(T("KeyS","ArrowDown")?1:0),_=(T("KeyD","ArrowRight")?1:0)-(T("KeyA","ArrowLeft")?1:0);S+=-p.y,_+=p.x;let A=Math.hypot(S,_);return A>1&&(S/=A,_/=A),{forward:S,right:_}},jump(){return l&&(o.has("Space")||h)},consumeAttack(){let S=u;return u=!1,S},consumeSkill(){let S=d;return d=-1,S},consumeLook(){let S={dx:a.dx,dy:a.dy,zoom:c};return a.dx=a.dy=0,c=0,S}}}var N_=i=>"#"+i.toString(16).padStart(6,"0");function Zd(i,t){let e=i.getContext("2d"),n=110,s=!1;function r(){let o=Math.min(window.devicePixelRatio,2),a=i.getBoundingClientRect();i.width=Math.round(a.width*o),i.height=Math.round(a.height*o)}return{get expanded(){return s},set expanded(o){s=o,i.classList.toggle("expanded",o),r()},resize:r,draw(o,a,c,l=[]){let h=i.width,u=i.height;if(!h||!u)return;let d=s?Ln-30:n,p=s?0:o.x,x=s?0:o.z,y=Math.min(h,u)/(d*2),m=_=>h/2+(_-p)*y,f=_=>u/2+(_-x)*y;e.fillStyle="#3b7fc0",e.fillRect(0,0,h,u),e.imageSmoothingEnabled=!0,e.drawImage(t.mapImage,m(-Ln),f(-Ln),Ln*2*y,Ln*2*y),e.lineWidth=1,e.strokeStyle="rgba(0,0,0,0.35)";for(let _ of t.colliders){if(_.kind==="tree"||_.kind==="rock"||_.kind==="wall"||_.kind==="prop"||_.kind==="rail"||s&&_.kind!=="bridge"&&_.kind!=="house")continue;let A=_.box;e.fillStyle=N_(_.color),e.beginPath(),_.cyl?e.arc(m(_.cyl.x),f(_.cyl.z),Math.max(_.cyl.r*y,1.5),0,Math.PI*2):e.rect(m(A.min.x),f(A.min.z),(A.max.x-A.min.x)*y,(A.max.z-A.min.z)*y),e.fill(),e.stroke()}let E=m(o.x),g=f(o.z),M=h/i.getBoundingClientRect().width||1;e.fillStyle="#e0475a",e.strokeStyle="#ffffff",e.lineWidth=1.2*M;for(let _ of l)e.beginPath(),e.arc(m(_.x),f(_.z),(_.big?3.6:2.6)*M,0,Math.PI*2),e.fill(),e.stroke();let T=Math.atan2(-Math.cos(c),-Math.sin(c));e.fillStyle="rgba(255,255,255,0.28)",e.beginPath(),e.moveTo(E,g),e.arc(E,g,34*M,T-.5,T+.5),e.closePath(),e.fill();let S=7*M;if(e.save(),e.translate(E,g),e.rotate(-a),e.fillStyle="#ffffff",e.strokeStyle="#1d8676",e.lineWidth=2.5*M,e.beginPath(),e.moveTo(0,S*1.3),e.lineTo(S,-S),e.lineTo(0,-S*.4),e.lineTo(-S,-S),e.closePath(),e.fill(),e.stroke(),e.restore(),s){e.font=`bold ${10*M}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.lineWidth=3*M,e.strokeStyle="rgba(28,26,58,0.8)",e.fillStyle="#ffffff";for(let _ of xo){let A=m(_.x),v=f(_.z)-8*M;e.strokeText(_.name,A,v),e.fillText(_.name,A,v)}e.font=`bold ${16*M}px "M PLUS Rounded 1c", sans-serif`,e.fillStyle="#f4c25b";for(let _ of Ni){let A=m(_.cx),v=f(_.cz+40);e.strokeText(_.name,A,v),e.fillText(_.name,A,v)}}e.fillStyle="rgba(20,24,32,0.75)",e.font=`bold ${11*M}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.fillText("N",h/2,13*M)}}}var z_=20,$d=(i,t,e=0)=>Xa.some(n=>Math.hypot(i-n.x,t-n.z)<n.r+e);function O_(i=7167891){let t=new Rt,e=new Rt;e.position.y=2,t.add(e);let n=new Dt({color:i,roughness:.9,flatShading:!0}),s=new xn(1,1),r=[[0,0,0,1.25],[.9,.2,-.2,.85],[-.9,.15,-.1,.9],[.3,.75,-.3,.8],[-.4,.6,.3,.7],[0,-.35,-.6,.8]];for(let[a,c,l,h]of r){let u=new G(s,n);u.position.set(a,c,l),u.scale.setScalar(h),u.castShadow=!0,e.add(u)}let o=new Dt({color:16769899,emissive:16763195,emissiveIntensity:1});for(let a of[-1,1]){let c=new G(new ye(.2,10,8),o);c.scale.set(1,.7,.5),c.position.set(a*.42,.1,1.18),c.rotation.z=a*-.35,e.add(c)}return{root:t,body:e,mats:[n],eyeMat:o,baseY:2,calmEye:16763195}}function F_(i=9407129){let t=new Rt,e=new Rt;e.position.y=1.7,t.add(e);let n=new Dt({color:i,roughness:1,flatShading:!0}),s=new Dt({color:7319119,roughness:1,flatShading:!0}),r=new G(new Bn(1.5,0),n);r.scale.set(1.1,.95,1),r.castShadow=!0;let o=new G(new ye(1.4,8,6,0,Math.PI*2,0,Math.PI*.33),s);o.position.y=.3,e.add(r,o);let a=new Bn(.55,0),c=[];for(let h of[-1,1]){let u=new G(a,n);u.position.set(h*2,-.2,.3),u.castShadow=!0,e.add(u),c.push(u);let d=new G(a,n);d.scale.set(1,.7,1.2),d.position.set(h*.75,-1.35,.1),d.castShadow=!0,e.add(d)}let l=new Dt({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let h of[-1,1]){let u=new G(new vt(.34,.16,.1),l);u.position.set(h*.5,.15,1.4),u.rotation.z=h*.2,e.add(u)}return{root:t,body:e,mats:[n,s],eyeMat:l,arms:c,baseY:1.7,calmEye:4183744}}var B_={kumodama:{name:"\u30AF\u30E2\u30C0\u30DE",hp:30,speed:7,radius:1.4,height:3.6,damage:8,exp:6,aggro:22,attackRange:7,windup:.45,cooldown:1.4,knockback:1,color:9404352,build:O_},ishimori:{name:"\u30A4\u30B7\u30E2\u30EA",hp:80,speed:4.5,radius:1.8,height:3.6,damage:15,exp:18,aggro:18,attackRange:8,windup:.6,cooldown:2.2,knockback:.45,color:9407129,build:F_}},Ir=Ae.plateau,Jd=Ae.cave,k_=[["ishimori",Ir.x+14,Ir.z-14],["ishimori",Ir.x-16,Ir.z+4],["ishimori",Ir.x+4,Ir.z+16],["ishimori",Jd.x-3,Jd.z+5]];function Kd(i,t,e){let n=[],s=[],r=new z;function o(_){let A=document.createElement("div");return A.className="enemy-label",A.innerHTML=`<span class="enemy-name">${_.name} <small>Lv${_.level}</small></span><div class="enemy-hp"><div></div></div>`,A.style.display="none",e.appendChild(A),{el:A,fill:A.querySelector(".enemy-hp div")}}let a=k_.map(([_,A,v])=>[_,A,v,null]);for(let _ of Ni){if(!_.enemies)continue;let A=Sr(_.cx*17+_.cz*29+3);for(let[v,w]of Object.entries(_.enemies)){let b=0;for(let N=0;b<w.count&&N<800;N++){let L=_.cx+(A()-.5)*_.maxR*1.6,R=_.cz+(A()-.5)*_.maxR*1.6;t.groundHeight(L,R)<2.5||t.slopeAt(L,R)>.5||$d(L,R,8)||t.regionAt(L,R)===_&&(Object.values(_.places).some(D=>Math.hypot(L-D.x,R-D.z)<D.r)||a.some(([,D,F])=>Math.hypot(L-D,R-F)<14)||(a.push([v,L,R,w]),b++))}}}for(let[_,A,v,w]of a){let b=B_[_],N=w?.mult??1,L={...b,name:w?.name??b.name,hp:Math.round(b.hp*N),damage:Math.round(b.damage*N),exp:Math.round(b.exp*N),speed:b.speed*(1+(N-1)*.15),color:w?.tint??b.color,level:Math.round(1+(N-1)*5.5)},R=b.build(w?.tint);i.add(R.root);let D={T:L,type:_,model:R,home:new z(A,0,v),pos:new z,vel:new ht,facing:0,hp:L.hp,state:"wander",timer:0,cooldown:0,target:new z,dir:new ht,jumpFrom:new z,jumpTo:new z,hitDone:!1,flash:0,labelTimer:0,spawnT:1,bob:Math.random()*10,bleed:null,label:o(L)};n.push(D),c(D,!0)}function c(_,A=!1){_.hp=_.T.hp,_.pos.copy(_.home),_.pos.y=t.groundHeight(_.home.x,_.home.z),_.vel.set(0,0),_.state="wander",_.timer=Math.random()*2,_.target.copy(_.home),_.cooldown=0,_.spawnT=A?1:0,_.model.root.visible=!0,l(_,!1)}function l(_,A){let v=A?16734794:_.model.calmEye;_.model.eyeMat.emissive.setHex(v),_.model.eyeMat.color.setHex(A?16747130:_.model.calmEye)}function h(_){let A=Math.random()*Math.PI*2,v=3+Math.random()*10;_.target.set(_.home.x+Math.cos(A)*v,0,_.home.z+Math.sin(A)*v)}function u(_,A,v){let w=_.T.radius;for(let R of Xa){let D=_.pos.x-R.x,F=_.pos.z-R.z,H=Math.hypot(D,F);if(H<R.r+w){let U=(R.r+w)/Math.max(H,.001);_.pos.x=R.x+D*U,_.pos.z=R.z+F*U}}let b=t.groundHeight(_.pos.x,_.pos.z),N=t.groundHeight(A,v),L=Math.hypot(_.pos.x-A,_.pos.z-v);(b<1.2||_.state!=="attack"&&(b-N>L*1.1+.05||N-b>L*2+.05))&&(_.pos.x=A,_.pos.z=v,_.vel.set(0,0),_.state==="wander"&&h(_));for(let R of t.collidersNear(_.pos.x,_.pos.z)){if(R.box.min.y>_.pos.y+2||R.box.max.y<_.pos.y+.3||R.kind==="spawn")continue;let D,F;R.cyl?(D=R.cyl.x,F=R.cyl.z):(D=kn.clamp(_.pos.x,R.box.min.x,R.box.max.x),F=kn.clamp(_.pos.z,R.box.min.z,R.box.max.z));let H=w+(R.cyl?R.cyl.r:0),U=_.pos.x-D,O=_.pos.z-F,V=Math.hypot(U,O);V<H&&V>1e-4&&(_.pos.x=D+U/V*H,_.pos.z=F+O/V*H)}}function d(_,A,v,w,b){let N=A-_.pos.x,L=v-_.pos.z,R=Math.hypot(N,L);if(R<.3)return R;let D=Math.min(R,w*b);return _.pos.x+=N/R*D,_.pos.z+=L/R*D,p(_,N,L,b),R}function p(_,A,v,w){let N=Math.atan2(A,v)-_.facing;N=Math.atan2(Math.sin(N),Math.cos(N)),_.facing+=N*Math.min(1,w*8)}let x=new xn(.3,0);function y(_,A,v=14){let w=new Dt({color:A,flatShading:!0,transparent:!0});for(let b=0;b<v;b++){let N=new G(x,w);N.position.copy(_);let L=Math.random()*Math.PI*2,R=4+Math.random()*6;s.push({mesh:N,t:0,life:.7+Math.random()*.3,vel:new z(Math.cos(L)*R,5+Math.random()*8,Math.sin(L)*R)}),i.add(N)}}let m=new gi(.8,1,32);function f(_,A){let v=new G(m,new Me({color:16769184,transparent:!0,side:le,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.set(_.x,_.y+.15,_.z),i.add(v),s.push({mesh:v,t:0,life:.4,ring:A})}function E(_){for(let A=s.length-1;A>=0;A--){let v=s[A];v.t+=_;let w=v.t/v.life;if(w>=1){i.remove(v.mesh),s.splice(A,1);continue}if(v.ring)v.mesh.scale.setScalar(1+w*v.ring),v.mesh.material.opacity=1-w;else{v.vel.y-=30*_,v.mesh.position.addScaledVector(v.vel,_);let b=t.groundHeight(v.mesh.position.x,v.mesh.position.z)+.2;v.mesh.position.y<b&&(v.mesh.position.y=b,v.vel.multiplyScalar(.5),v.vel.y=Math.abs(v.vel.y)),v.mesh.scale.setScalar(1-w*.8),v.mesh.material.opacity=1-w*w,v.mesh.rotation.x+=_*8}}}function g(_,A,v,w=1,b=!0){let N=Math.max(1,Math.round(A*(.85+Math.random()*.3)));if(_.hp-=N,_.flash=.15,_.labelTimer=5,v&&w>0){let R=_.pos.x-v.x,D=_.pos.z-v.z,F=Math.max(Math.hypot(R,D),.001),H=12*_.T.knockback*w;_.vel.set(R/F*H,D/F*H)}let L=new z(_.pos.x,_.pos.y+_.T.height,_.pos.z);return _.hp<=0?(M(_),{enemy:_,pos:L,damage:N,killed:!0,exp:_.T.exp,name:_.T.name}):(b&&_.state!=="attack"&&(_.state="hurt",_.timer=.35),l(_,!0),{enemy:_,pos:L,damage:N,killed:!1,exp:0,name:_.T.name})}function M(_){_.state="dead",_.bleed=null,_.timer=z_,_.model.root.visible=!1,_.label.el.style.display="none",y(r.copy(_.pos).setY(_.pos.y+_.model.baseY),_.T.color)}function T(_,A){let v=A.playerPos,w=$d(v.x,v.z)||A.playerSwimming;for(let b of n){if(b.state==="dead"){b.timer-=_,b.timer<=0&&c(b);continue}let N=Math.hypot(v.x-b.pos.x,v.z-b.pos.z);if(b.model.root.visible=N<260,N>180)continue;if(b.bleed&&(b.bleed.tick-=_,b.bleed.tick<=0)){b.bleed.tick=1,b.bleed.left--;let X=g(b,b.bleed.dmg,null,0,!1);if(A.onBleed?.(X),b.bleed&&b.bleed.left<=0&&(b.bleed=null),b.state==="dead")continue}let L=b.T,R=b.pos.x,D=b.pos.z,F=v.x-b.pos.x,H=v.z-b.pos.z,U=Math.hypot(F,H),O=A.playerActive&&!w&&Math.abs(v.y-b.pos.y)<4;b.cooldown-=_,b.timer-=_,b.labelTimer-=_;let V=0;switch(b.state){case"wander":{if(O&&U<L.aggro){b.state="chase",l(b,!0);break}if(b.timer>0)break;d(b,b.target.x,b.target.z,L.speed*.35,_)<.5&&(b.timer=1+Math.random()*3,h(b));break}case"return":{if(O&&U<L.aggro){b.state="chase",l(b,!0);break}d(b,b.home.x,b.home.z,L.speed*.7,_)<1&&(b.state="wander",b.timer=1);break}case"chase":{if(!O||U>L.aggro*1.8){b.state="return",l(b,!1);break}if(U<L.attackRange&&b.cooldown<=0){b.state="windup",b.timer=L.windup;break}U>L.radius+1.2?d(b,v.x,v.z,L.speed,_):p(b,F,H,_);break}case"windup":{if(p(b,F,H,_),b.timer<=0){b.state="attack",b.hitDone=!1;let X=Math.max(U,.001);if(b.dir.set(F/X,H/X),b.type==="ishimori"){let K=Math.min(U,8);b.jumpFrom.copy(b.pos),b.jumpTo.set(b.pos.x+b.dir.x*K,0,b.pos.z+b.dir.y*K),b.timer=.55}else b.timer=.35}break}case"attack":{if(b.type==="ishimori"){let X=1-Math.max(b.timer,0)/.55;if(b.pos.lerpVectors(b.jumpFrom,b.jumpTo,X),V=Math.sin(X*Math.PI)*3.5,b.timer<=0){f(b.pos,5);let K=Math.hypot(v.x-b.pos.x,v.z-b.pos.z);O&&K<4.5&&v.y-b.pos.y<1.5&&A.onHitPlayer(L.damage,b.pos.x,b.pos.z),b.state="recover",b.timer=.7,b.cooldown=L.cooldown}}else{b.pos.x+=b.dir.x*20*_,b.pos.z+=b.dir.y*20*_;let X=Math.hypot(v.x-b.pos.x,v.z-b.pos.z);!b.hitDone&&O&&X<L.radius+1.1&&(b.hitDone=!0,A.onHitPlayer(L.damage,b.pos.x,b.pos.z)),b.timer<=0&&(b.state="recover",b.timer=.5,b.cooldown=L.cooldown)}break}case"recover":case"hurt":{b.timer<=0&&(b.state=O?"chase":"return");break}}b.pos.x+=b.vel.x*_,b.pos.z+=b.vel.y*_,b.vel.multiplyScalar(Math.exp(-_*6)),u(b,R,D),b.pos.y=t.groundHeight(b.pos.x,b.pos.z);for(let X of n){if(X===b||X.state==="dead")continue;let K=b.pos.x-X.pos.x,it=b.pos.z-X.pos.z,ft=Math.hypot(K,it),gt=b.T.radius+X.T.radius;ft<gt&&ft>.001&&(b.pos.x+=K/ft*(gt-ft)*.5,b.pos.z+=it/ft*(gt-ft)*.5)}let q=b.model;b.bob+=_,b.spawnT=Math.min(1,b.spawnT+_*2),q.root.position.set(b.pos.x,b.pos.y+V,b.pos.z),q.root.rotation.y=b.facing,q.root.scale.setScalar(b.spawnT);let nt=1;if(b.state==="windup"&&(nt=1-(1-b.timer/L.windup)*.25+Math.sin(b.bob*50)*.03),b.type==="kumodama")q.body.position.y=q.baseY+Math.sin(b.bob*3)*.25,q.body.rotation.z=Math.sin(b.bob*2)*.08;else{let X=b.state==="chase"||b.state==="return"||b.state==="wander"&&b.timer<=0;q.body.position.y=q.baseY+(X?Math.abs(Math.sin(b.bob*8))*.2:0),q.arms[0].position.y=-.2+Math.sin(b.bob*3)*.15,q.arms[1].position.y=-.2+Math.sin(b.bob*3+1)*.15}q.body.scale.set(1/Math.sqrt(nt),nt,1/Math.sqrt(nt)),b.flash=Math.max(0,b.flash-_);for(let X of q.mats)X.emissive.setHex(16777215),X.emissiveIntensity=b.flash>0?.8:0}E(_)}function S(_){for(let A of n){let v=A.label.el;if(!(A.state!=="dead"&&(A.labelTimer>0||A.state==="chase"||A.state==="windup"||A.state==="attack"))){v.style.display="none";continue}if(r.set(A.pos.x,A.pos.y+A.T.height+.9,A.pos.z),r.distanceTo(_.position)>70){v.style.display="none";continue}if(r.project(_),r.z>1){v.style.display="none";continue}v.style.display="";let b=(r.x+1)/2*window.innerWidth,N=(1-r.y)/2*window.innerHeight;v.style.transform=`translate(-50%, -100%) translate(${b}px, ${N}px)`,A.label.fill.style.width=Math.max(0,A.hp)/A.T.hp*100+"%"}}return{list:n,update:T,updateLabels:S,attack(_,A,{range:v,arc:w,damage:b,knockback:N=1,bleed:L=!1}){let R=Math.sin(A),D=Math.cos(A);return this.hitArea(F=>{let H=F.pos.x-_.x,U=F.pos.z-_.z,O=Math.hypot(H,U);if(O-F.T.radius>v||Math.abs(_.y-F.pos.y)>3.5)return!1;let V=(H*R+U*D)/Math.max(O,.001);return O<=F.T.radius+.5||Math.acos(kn.clamp(V,-1,1))<=w/2},{damage:b,knockback:N,from:_,bleed:L})},hitArea(_,{damage:A,knockback:v=1,from:w,bleed:b=!1}){let N=[];for(let L of n){if(L.state==="dead"||L.spawnT<1||!_(L))continue;let R=g(L,A,w,v);b&&!R.killed&&(L.bleed={left:3,tick:1,dmg:Math.max(1,Math.round(A*.2))}),N.push(R)}return N},calmDown(){for(let _ of n)_.state!=="dead"&&(_.state="return",l(_,!1))},alive(){return n.filter(_=>_.state!=="dead").map(_=>({x:_.pos.x,z:_.pos.z,big:_.type==="ishimori"}))}}}function jd(i){let t=[],e=new z,n=1.1;return{add(s,r,o=""){let a=document.createElement("div");a.className="popup-text "+o,a.textContent=r,i.appendChild(a),t.push({el:a,pos:s.clone(),t:0,dx:(Math.random()-.5)*1.2})},update(s,r){for(let o=t.length-1;o>=0;o--){let a=t[o];if(a.t+=s,a.t>n){a.el.remove(),t.splice(o,1);continue}if(e.copy(a.pos),e.y+=a.t*2,e.x+=a.dx*a.t,e.project(r),e.z>1){a.el.style.display="none";continue}a.el.style.display="";let c=(e.x+1)/2*window.innerWidth,l=(1-e.y)/2*window.innerHeight,h=a.t<.12?.6+a.t/.12*.7:1.3-Math.min(a.t,.4)*.75;a.el.style.transform=`translate(-50%, -50%) translate(${c}px, ${l}px) scale(${h})`,a.el.style.opacity=a.t>n*.65?(n-a.t)/(n*.35):1}},clear(){for(let s of t)s.el.remove();t.length=0}}}var G_=(i,t,e,n="")=>`<svg viewBox="0 0 32 32">
  <path d="M25 3l4 0 0 4-13.5 13.5-4-4z" fill="${i}" stroke="${t}" stroke-width="1.2"/>
  ${n}
  <path d="M8.5 16.5l7 7-2 2-7-7z" fill="${e}"/>
  <path d="M8 22l2 2-4 4-2-2z" fill="#2a1418"/>
  <circle cx="4.6" cy="27.4" r="1.6" fill="#ff2a3a"/>
</svg>`,Jl={sangrea:G_("#0e0c12","#ff2030","#241018",'<path d="M13 19l12-12" stroke="#ff2030" stroke-width="1.6"/><circle cx="12" cy="20" r="1.4" fill="#ffd0d0"/>'),sword:'<svg viewBox="0 0 32 32"><path d="M24 4l4 0 0 4-13 13-4-4z" fill="#e6eef5" stroke="#8fa3b5" stroke-width="1.2"/><path d="M9 17l6 6-2 2-6-6z" fill="#f4c25b"/><path d="M8 22l2 2-4 4-2-2z" fill="#8a5a3b"/></svg>',potion:'<svg viewBox="0 0 32 32"><rect x="13" y="4" width="6" height="5" rx="1" fill="#b07a55"/><path d="M12 9h8v4l4 5v7a3 3 0 01-3 3H11a3 3 0 01-3-3v-7l4-5z" fill="#dff4ff" opacity=".8"/><path d="M9 18h14v7a2 2 0 01-2 2H11a2 2 0 01-2-2z" fill="#ff5a6e"/><circle cx="13" cy="21" r="1.4" fill="#fff" opacity=".8"/></svg>'},Lr={sword:{name:"\u65C5\u4EBA\u306E\u5263",desc:"\u4F7F\u3044\u6163\u308C\u305F\u7247\u624B\u5263\u30023\u6BB5\u30B3\u30F3\u30DC\u304C\u51FA\u305B\u308B",kind:"weapon",moveset:"sword",held:"sword",stance:"sword",power:1,icon:Jl.sword},sangrea:{name:"\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2",desc:"\u8840\u3092\u5438\u3063\u3066\u8108\u6253\u3064\u3001\u9ED2\u3044\u9B54\u5263\u3002\u901F\u304F\u91CD\u3044 4 \u6BB5\u306E\u9023\u6483\u3092\u653E\u3064",kind:"weapon",moveset:"blood",held:"sangrea",rarity:"blood",stance:"blood",power:1.7,speed:1.15,trail:16719920,passive:{id:"lifesteal",name:"\u5438\u8840",desc:"\u4E0E\u3048\u305F\u30C0\u30E1\u30FC\u30B8\u306E 10% \u3060\u3051 HP \u3092\u56DE\u5FA9\u3059\u308B",rate:.1},skills:["bloodGale","crimsonMoon","bloodRelease"],icon:Jl.sangrea},potion:{name:"\u56DE\u5FA9\u85AC",desc:"\u98F2\u3080\u3068 HP \u304C 40 \u56DE\u5FA9\u3059\u308B",kind:"consumable",held:"potion",heal:40,icon:Jl.potion}},$a=8;function Qd(){let i=Array($a).fill(null);i[0]={id:"sword",count:1},i[1]={id:"potion",count:3},i[2]={id:"sangrea",count:1};let t=0;return{slots:i,get selected(){return t},set selected(e){t=Math.max(0,Math.min($a-1,e))},get held(){let e=i[t];return e?{...Lr[e.id],id:e.id,count:e.count}:null},consumeHeld(){let e=i[t];e&&(e.count--,e.count<=0&&(i[t]=null))},add(e,n=1){let s=i.find(o=>o&&o.id===e);if(s&&Lr[e].kind==="consumable")return s.count+=n,!0;let r=i.indexOf(null);return r<0?!1:(i[r]={id:e,count:n},!0)}}}var tf=i=>new z(Math.sin(i),0,Math.cos(i)),ef=i=>i.clone().setY(i.y+3),Oi={bloodGale:{name:"\u8840\u98A8\u65AC",key:"Q",desc:"\u6B8B\u50CF\u3092\u6B8B\u3057\u3066\u99C6\u3051\u629C\u3051\u3001\u901A\u308A\u9053\u3092\u65AC\u308B\u3002\u5C11\u3057\u9045\u308C\u3066\u3001\u901A\u308A\u9053\u304B\u3089\u8840\u306E\u68D8\u304C\u5674\u304D\u51FA\u3059\uFF08\u99C6\u3051\u629C\u3051\u308B\u9593\u306F\u7121\u6575\uFF09",cooldown:5,duration:.62,anim:6,start(i,t){let e=tf(i.player.facing);t.dir=e,t.from=i.player.position.clone(),t.to=t.from.clone().addScaledVector(e,14),t.ghosts=0,t.cut=!1,t.burst=!1,i.invuln(.55),i.player.knockback(e.x*58,e.z*58),i.fovKick(8)},update(i,t,e){for(;t.ghosts<5&&e>=t.ghosts*.04;)i.fx.afterimage(i.character.object,.35),t.ghosts++;if(!t.cut&&e>=.16){t.cut=!0,i.fx.streak(t.from,i.player.position.clone().addScaledVector(t.dir,2),3,.8);let n=t.from,s=t.to;t.hits=i.enemies.hitArea(r=>Tr(r.pos.x,r.pos.z,n.x,n.z,s.x,s.z)<2.8+r.T.radius&&Math.abs(r.pos.y-n.y)<5,{damage:i.power(2.4),knockback:.6,from:n});for(let r of t.hits)i.fx.burst(r.pos,18,9);t.hits.length&&(i.hitStop(.08),i.shake(.5)),i.applyHits(t.hits)}if(!t.burst&&e>=.5){t.burst=!0;let n=t.from,s=t.to;for(let o=0;o<=6;o++){let a=n.clone().lerp(s,o/6);i.fx.spike(a.x,a.z,3.8,1.1)}i.fx.flash(n.clone().lerp(s,.5),90,35,.4);let r=i.enemies.hitArea(o=>Tr(o.pos.x,o.pos.z,n.x,n.z,s.x,s.z)<3+o.T.radius&&Math.abs(o.pos.y-n.y)<5,{damage:i.power(1.5),knockback:.8,from:n,bleed:!0});for(let o of r)i.fx.burst(o.pos,12,7);i.shake(.35),i.applyHits(r)}}},crimsonMoon:{name:"\u7D05\u6708\u589C\u3068\u3057",key:"E",desc:"\u9AD8\u304F\u8DF3\u3073\u4E0A\u304C\u3063\u3066\u53E9\u304D\u3064\u3051\u3001\u4E09\u91CD\u306E\u885D\u6483\u6CE2\u30FB\u8840\u306E\u68D8\u306E\u8F2A\u30FB\u8840\u306E\u67F1\u3092\u5674\u304D\u4E0A\u3052\u308B",cooldown:8,duration:.95,anim:7,start(i,t){let e=tf(i.player.facing);i.player.knockback(e.x*8,e.z*8,36),i.invuln(.8),t.done=!1,t.wave=0},update(i,t,e){if(!t.done&&e>=.62){t.done=!0,t.c=i.player.position.clone();let n=t.c;i.fx.nova(n.clone().setY(n.y+.5),6,.35),i.fx.flash(n,160,45,.5),i.fx.burst(n.clone().setY(n.y+.5),40,13);for(let r=0;r<14;r++){let o=r/14*Math.PI*2;i.fx.spike(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,3.4,1.1)}for(let r=0;r<6;r++){let o=r/6*Math.PI*2+.3;i.fx.pillar(n.x+Math.cos(o)*9,n.z+Math.sin(o)*9,16,.9,1.3)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<10+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(3.2),knockback:3,from:n});for(let r of s)i.fx.burst(r.pos,14,8);i.shake(1),i.screenFlash(.6),i.fovKick(-6),s.length&&i.hitStop(.14),i.applyHits(s)}for(;t.done&&t.wave<3&&e>=.62+t.wave*.1;)i.fx.ring(t.c,8+t.wave*4,.5+t.wave*.15,t.wave===1?9046040:16722490),t.wave++}},bloodRelease:{name:"\u9BAE\u8840\u89E3\u653E",key:"R",desc:"HP \u3092 20% \u6367\u3052\u3001\u307E\u308F\u308A\u3092\u5439\u304D\u98DB\u3070\u3059\u8840\u306E\u7206\u767A\u3092\u8D77\u3053\u3059\u300210 \u79D2\u9593\u3001\u653B\u6483\u529B 1.8 \u500D\u30FB\u5438\u8840 25%\u3001\u5263\u3092\u632F\u308B\u305F\u3073\u306B\u8840\u306E\u65AC\u6483\u6CE2\u304C\u98DB\u3076",cooldown:25,duration:1,anim:9,canUse(i){let t=Math.ceil(i.stats.maxHp*.2);return i.stats.hp<=t+1?(i.toast("HP \u304C\u8DB3\u308A\u306A\u3044\u2026"),!1):!0},start(i,t){let e=Math.ceil(i.stats.maxHp*.2);i.stats.hp-=e,i.popup(i.player.position.clone().setY(i.player.position.y+5.5),`-${e}`,"hurt"),i.invuln(1),t.done=!1},update(i,t,e){if(t.done||e<.5)return;t.done=!0;let n=i.player.position.clone();i.fx.nova(ef(n),14,.7),i.fx.ring(n,16,.8),i.fx.ring(n,10,.6,9046040),i.fx.burst(ef(n),50,12),i.fx.flash(n,200,50,.7);for(let r=0;r<8;r++){let o=r/8*Math.PI*2;i.fx.pillar(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,20,1.1,1.1)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<12+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(2.6),knockback:3.2,from:n});i.applyHits(s),i.shake(1.1),i.screenFlash(.9),i.fovKick(10),i.startBuff({name:"\u9BAE\u8840\u89E3\u653E",time:10,atk:1.8,lifesteal:.25,waves:!0})}}};function nf(i,t){let e=[],r=new xn(.16,0),o=new Dt({color:11538462,emissive:5242888,emissiveIntensity:.6,roughness:.3,transparent:!0}),a=new gi(.85,1,48),c=new fe(.45,1,5).translate(0,.5,0),l=new Dt({color:13639738,emissive:8390680,emissiveIntensity:.9,flatShading:!0,roughness:.2,metalness:.2,transparent:!0}),h=new en(16724032,0,30);i.add(h);let u=0,d=0,p=0,x=(y,m,f)=>{i.add(y),e.push({mesh:y,life:m,t:0,update:f})};return{burst(y,m=14,f=7){for(let E=0;E<m;E++){let g=new G(r,o);g.position.copy(y);let M=Math.random()*Math.PI*2,T=f*(.4+Math.random()*.8),S=new z(Math.cos(M)*T,4+Math.random()*7,Math.sin(M)*T);g.scale.setScalar(.6+Math.random()*.9),x(g,.6+Math.random()*.4,(_,A)=>{S.y-=28*A,g.position.addScaledVector(S,A);let v=t(g.position.x,g.position.z)+.1;g.position.y<v&&(g.position.y=v,S.set(0,0,0),g.scale.y=.25),g.material.opacity=1})}},ring(y,m,f=.5,E=16722490){let g=new G(a,new Me({color:E,transparent:!0,side:le,depthWrite:!1,blending:Fn}));g.rotation.x=-Math.PI/2,g.position.set(y.x,y.y+.2,y.z),x(g,f,M=>{let T=M.t/M.life;g.scale.setScalar(.5+m*(1-Math.pow(1-T,3))),g.material.opacity=1-T})},streak(y,m,f=2.2,E=.6){let g=y.distanceTo(m),M=new G(new Cn(f,g),new Me({color:16722490,transparent:!0,side:le,depthWrite:!1,blending:Fn}));M.position.copy(y).lerp(m,.5),M.position.y+=1.6,M.lookAt(m.x,M.position.y,m.z),M.rotateX(Math.PI/2),x(M,E,T=>{let S=T.t/T.life;M.material.opacity=.8*(1-S),M.scale.x=1-S*.7})},spike(y,m,f=3.5,E=1.3){let g=t(y,m),M=new Rt;M.position.set(y,g-.3,m);let T=3+Math.floor(Math.random()*3);for(let S=0;S<T;S++){let _=new G(c,l.clone()),A=f*(.5+Math.random()*.6);_.scale.set(.6+Math.random()*.5,A,.6+Math.random()*.5),_.position.set((Math.random()-.5)*1.4,0,(Math.random()-.5)*1.4),_.rotation.set((Math.random()-.5)*.7,Math.random()*3,(Math.random()-.5)*.7),_.userData.h=A,M.add(_)}x(M,E,S=>{let _=S.t/S.life,A=_<.12?_/.12:_>.7?1-(_-.7)/.3:1;M.children.forEach(v=>{v.scale.y=v.userData.h*Math.max(A,.001),v.material.opacity=_>.7?1-(_-.7)/.3:1})})},aura(y){let f=new Float32Array(150),E=Array.from({length:50},()=>({a:Math.random()*Math.PI*2,r:.6+Math.random()*1.2,y:Math.random()*5,v:1.5+Math.random()*2})),g=new de;g.setAttribute("position",new ve(f,3));let M=new Pn(g,new gn({color:16722490,size:.28,transparent:!0,opacity:.9,depthWrite:!1,blending:Fn}));M.frustumCulled=!1;let T=new G(a,new Me({color:16722490,transparent:!0,opacity:.5,side:le,depthWrite:!1,blending:Fn}));T.rotation.x=-Math.PI/2;let S=new Rt;S.add(M,T);let _=!0;return x(S,1/0,(A,v)=>{S.position.copy(y.position),T.position.y=.15,T.scale.setScalar(1.6+Math.sin(A.t*6)*.15);for(let w=0;w<50;w++){let b=E[w];b.y+=b.v*v,b.y>5.5&&(b.y=0),b.a+=v*1.5,f[w*3]=Math.cos(b.a)*b.r,f[w*3+1]=b.y,f[w*3+2]=Math.sin(b.a)*b.r}g.attributes.position.needsUpdate=!0,_||(A.life=A.t)}),{stop(){_=!1}}},afterimage(y,m=.35){let f=y.clone(!0),E=new Me({color:16722490,transparent:!0,opacity:.55,depthWrite:!1,blending:Fn});f.traverse(g=>{(g.isMesh||g.isPoints)&&(g.material=E,g.castShadow=!1)}),f.position.copy(y.position),f.rotation.copy(y.rotation),x(f,m,g=>{E.opacity=.55*(1-g.t/g.life)})},pillar(y,m,f=14,E=.9,g=1.4){let M=t(y,m),T=new G(new kt(g*.6,g,1,12,1,!0).translate(0,.5,0),new Me({color:16722490,transparent:!0,side:le,depthWrite:!1,blending:Fn}));T.position.set(y,M,m),x(T,E,S=>{let _=S.t/S.life;T.scale.set(1+_*.5,f*Math.min(1,_*6),1+_*.5),T.material.opacity=.85*(1-_),T.rotation.y+=.2}),this.burst(new z(y,M+1,m),8,5)},nova(y,m=12,f=.6){let E=new G(new ye(1,24,16),new Me({color:16722490,transparent:!0,depthWrite:!1,blending:Fn,side:le}));E.position.copy(y),x(E,f,g=>{let M=g.t/g.life;E.scale.setScalar(.5+m*(1-Math.pow(1-M,3))),E.material.opacity=.6*(1-M)})},flash(y,m=80,f=30,E=.35){h.position.copy(y),h.position.y+=2,h.distance=f,p=m,u=E,d=0},crescent(y,m,{speed:f=42,life:E=.55,size:g=3.2,onMove:M}={}){let T=new Rt,S=new G(new qn(g,g*.14,6,24,Math.PI),new Me({color:16722490,transparent:!0,depthWrite:!1,blending:Fn,side:le}));S.rotation.set(-Math.PI/2,0,Math.PI),S.scale.z=.4,T.add(S),T.position.copy(y),T.lookAt(y.x+m.x,y.y,y.z+m.z),x(T,E,(_,A)=>{T.position.addScaledVector(m,f*A);let v=_.t/_.life;S.material.opacity=.9*(1-v*v),T.scale.setScalar(1+v*.4),M?.(T.position)})},update(y){d<u?(d+=y,h.intensity=p*Math.max(0,1-d/u)):h.intensity=0;for(let m=e.length-1;m>=0;m--){let f=e[m];f.t+=y,f.update(f,y),f.t>=f.life&&(i.remove(f.mesh),e.splice(m,1))}}}}var Ot=i=>document.getElementById(i),sf=["\u30D2\u30F3\u30C8\uFF1A\u65C5\u306F\u5CF6\u306E\u4E2D\u592E\u306B\u3042\u308B\u661F\u306E\u796D\u58C7\u304B\u3089\u59CB\u307E\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730\u306E\u5854\u306E\u3066\u3063\u307A\u3093\u306B\u3001\u30AF\u30EA\u30B9\u30BF\u30EB\u304C\u7720\u3063\u3066\u3044\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A4\u672C\u306E\u5927\u6A4B\u3092\u6E21\u308B\u3068\u3001\u305D\u308C\u305E\u308C\u5225\u306E\u5CF6\u3078\u884C\u3051\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u5CF6\u306F\u3068\u3066\u3082\u5E83\u3044\u3002M \u30AD\u30FC\u306E\u5730\u56F3\u3067\u540D\u6240\u3092\u63A2\u3057\u3066\u307F\u3088\u3046","\u30D2\u30F3\u30C8\uFF1A\u9060\u304F\u306E\u5730\u65B9\u307B\u3069\u9B54\u7269\u304C\u5F37\u304F\u306A\u308A\u307E\u3059\u3002\u30EC\u30D9\u30EB\u3092\u4E0A\u3052\u3066\u304B\u3089\u884C\u3053\u3046","\u30D2\u30F3\u30C8\uFF1A\u6D77\u3084\u6E56\u3067\u306F\u6CF3\u3052\u307E\u3059\u3002\u6CF3\u3044\u3067\u3044\u308B\u9593\u306F\u9B54\u7269\u306B\u8972\u308F\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30B7\u30AA\u30AB\u30BC\u6751\u306F\u5B89\u5168\u5730\u5E2F\u3067\u3059","\u30D2\u30F3\u30C8\uFF1AM \u30AD\u30FC\u3067\u5CF6\u306E\u5730\u56F3\u3092\u5927\u304D\u304F\u8868\u793A\u3067\u304D\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u796D\u58C7\u306E\u307E\u308F\u308A\u306F\u5B89\u5168\u5730\u5E2F\u3002\u9B54\u7269\u306F\u5165\u3063\u3066\u3053\u3089\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30AF\u30EA\u30C3\u30AF\u304B F \u30AD\u30FC\u3067\u5263\u3092\u632F\u308C\u307E\u3059\u3002\u7D9A\u3051\u3066\u62BC\u3059\u30683\u6BB5\u30B3\u30F3\u30DC","\u30D2\u30F3\u30C8\uFF1A\u6570\u5B57\u30AD\u30FC 1\u301C8 \u3067\u6301\u3061\u7269\u3092\u5207\u308A\u66FF\u3048\u3002\u7A7A\u306E\u30DE\u30B9\u3092\u9078\u3076\u3068\u7D20\u624B\u306B\u306A\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2\u3092\u6301\u3064\u3068\u3001Q\u30FBE\u30FBR \u3067 3 \u3064\u306E\u6280\u304C\u4F7F\u3048\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AB \u30AD\u30FC\u3067\u661F\u306E\u796D\u58C7\u306B\u623B\u308C\u307E\u3059"],mf=Ot("scene"),Fi=new eo({canvas:mf,antialias:!0}),vo=window.matchMedia("(pointer: coarse)").matches;Fi.setPixelRatio(Math.min(window.devicePixelRatio,vo?1.5:2));Fi.setSize(window.innerWidth,window.innerHeight);Fi.shadowMap.enabled=!0;Fi.shadowMap.type=Pl;Fi.outputColorSpace=Le;var Xs=new Ma,dn=new Tn(60,window.innerWidth/window.innerHeight,.1,2600),ii,Ue,ae,wi,is,Ts,Bi=jd(Ot("popup-layer")),V_=()=>new Promise(i=>{requestAnimationFrame(()=>i()),setTimeout(i,50)}),rf=i=>new Promise(t=>setTimeout(t,i));function of(i,t){Ot("progress-fill").style.width=i+"%",t&&(Ot("loading-status").textContent=t)}async function W_(){Ot("loading-tip").textContent=sf[Math.floor(Math.random()*sf.length)];let i=[["\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",async()=>{await document.fonts.ready}],["\u30D9\u30FC\u30B9\u30D7\u30EC\u30FC\u30C8\u3092\u751F\u6210\u4E2D...",async()=>{ii=Od(Xs,Fi,{lite:vo}),vo&&(dn.far=1300)}],["\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u751F\u6210\u4E2D...",async()=>{Ue=Wd(),Xs.add(Ue.object),rh(),ae=qd(Ue,ii),ae.respawn(),wi=Zd(Ot("minimap"),ii),is=Kd(Xs,ii,Ot("label-layer")),Ts=nf(Xs,ii.groundHeight),Z_()}],["\u30B7\u30FC\u30F3\u3092\u6E96\u5099\u4E2D...",async()=>{Fi.compile(Xs,dn),Fi.render(Xs,dn)}]];for(let t=0;t<i.length;t++){let[e,n]=i[t];of(t/i.length*100,e),await V_(),await Promise.all([n(),rf(450)])}of(100,"\u5B8C\u4E86\uFF01"),await rf(400),Ot("loading-screen").classList.add("fade"),Ot("menu").classList.remove("hidden"),setTimeout(()=>Ot("loading-screen").remove(),900),setTimeout(()=>Ue.wave(),900)}var ws="menu",gf=!0,xf=0,_o=0,Ka=new z,ja=new z,Kl=new z,jl=new z,Xe={yaw:0,pitch:.35,dist:18},X_=6,q_=60;function yf(i,t){let e=ii.spawnPoint.clone().add(new z(0,3,0)),n=Math.sin(xf*.15)*.45+.35,s=20;i.set(e.x+Math.sin(n)*s,e.y+3.5,e.z+Math.cos(n)*s);let r=window.innerWidth>700,o=e.clone().sub(i).normalize(),a=new z().crossVectors(o,new z(0,1,0)).normalize();t.copy(e).addScaledVector(a,r?-4.2:0),r||(t.y-=1.5)}function Y_(i,t){let e=ae.position;t.set(e.x,e.y+4.5,e.z);let n=Math.cos(Xe.pitch);i.set(t.x+Math.sin(Xe.yaw)*n*Xe.dist,t.y+Math.sin(Xe.pitch)*Xe.dist,t.z+Math.cos(Xe.yaw)*n*Xe.dist);let s=Math.max(ii.groundHeight(i.x,i.z),ii.waterLevel)+.8;i.y<s&&(i.y=s)}function Z_(){yf(Ka,ja),dn.position.copy(Ka),dn.lookAt(ja)}function $_(i){_o+=i,ws==="menu"?(gf&&(xf+=i),yf(Kl,jl)):Y_(Kl,jl);let t=ws==="menu"?3:4+_o*_o*80,e=1-Math.exp(-i*t);Ka.lerp(Kl,e),ja.lerp(jl,e),dn.position.copy(Ka),dn.lookAt(ja)}var bs=Yd(mf,{joystickEl:Ot("joystick"),jumpBtnEl:Ot("btn-jump"),attackBtnEl:Ot("btn-attack"),skillBtnsEl:Ot("skill-btns"),onKey(i){i==="Escape"?wi.expanded?wi.expanded=!1:Ef():i==="KeyM"?wi.expanded=!wi.expanded:i==="KeyH"?Ot("help").classList.toggle("hidden"):/^Digit[1-8]$/.test(i)?vf(Number(i.slice(5))-1):i==="KeyB"&&!ss&&(ae.respawn(Math.PI),Xe.yaw=0,rs("\u661F\u306E\u796D\u58C7\u306B\u623B\u308A\u307E\u3057\u305F"))}});function af(){let{dx:i,dy:t,zoom:e}=bs.consumeLook();Xe.yaw-=i*.006,Xe.pitch=kn.clamp(Xe.pitch+t*.005,-.2,1.35),Xe.dist=kn.clamp(Xe.dist*(1+e*.001),X_,q_)}function sh(){let{forward:i,right:t}=bs.move(),e=-Math.sin(Xe.yaw),n=-Math.cos(Xe.yaw),s=Math.cos(Xe.yaw),r=-Math.sin(Xe.yaw);return{x:e*i+s*t,z:n*i+r*t}}var ie={level:1,exp:0,hp:100,maxHp:100,atk:10},eh=()=>ie.level*20,qs=0,ss=!1;function Ys(){Ot("lv").textContent=ie.level,Ot("hp-now").textContent=Math.max(0,Math.ceil(ie.hp)),Ot("hp-max").textContent=ie.maxHp;let i=Math.max(0,ie.hp)/ie.maxHp;Ot("hp-fill").style.width=i*100+"%",Ot("hp-fill").classList.toggle("low",i<.3),Ot("exp-fill").style.width=ie.exp/eh()*100+"%"}var Mo=()=>ae.position.clone().setY(ae.position.y+5.5);function _f(i){for(ie.exp+=i,Bi.add(Mo(),`+${i} EXP`,"exp");ie.exp>=eh();)ie.exp-=eh(),ie.level++,ie.maxHp+=15,ie.hp=ie.maxHp,ie.atk+=3,Bi.add(Mo().setY(ae.position.y+7),"LEVEL UP!","levelup"),rs(`\u30EC\u30D9\u30EB ${ie.level} \u306B\u306A\u3063\u305F\uFF01 HP \u3068\u653B\u6483\u529B\u304C\u4E0A\u304C\u3063\u305F`),Ue.wave();Ys()}var fn=Qd(),hi=-1;function J_(){let i=fn.held;return qa[i?.moveset??"fists"]}function rh(){let i=Ot("hotbar");if(!i.children.length)for(let e=0;e<$a;e++){let n=document.createElement("button");n.className="slot",n.innerHTML=`<span class="slot-key">${e+1}</span><span class="slot-icon"></span><span class="slot-count"></span>`,n.addEventListener("pointerdown",s=>{s.preventDefault(),vf(e)}),i.appendChild(n)}fn.slots.forEach((e,n)=>{let s=i.children[n];s.classList.toggle("selected",n===fn.selected),s.classList.toggle("empty",!e),s.classList.toggle("blood",!!e&&Lr[e.id].rarity==="blood"),s.title=e?K_(Lr[e.id]):"\u7A7A\u304D\uFF08\u7D20\u624B\uFF09",s.querySelector(".slot-icon").innerHTML=e?Lr[e.id].icon:"",s.querySelector(".slot-count").textContent=e&&e.count>1?e.count:""}),Ue.setHeld(fn.held?.held??null),Ue.setTrailColor(fn.held?.trail);let t=fn.held;Ue.setStance(t?t.stance??"item":"fists")}function K_(i){let t=`${i.name}\uFF1A${i.desc}`;i.passive&&(t+=`
\u7279\u6027\u3010${i.passive.name}\u3011${i.passive.desc}`);for(let e of i.skills??[])t+=`
\u6280\u3010${Oi[e].name}\u3011\uFF08${Oi[e].key}\uFF09${Oi[e].desc}`;return i.power&&(t+=`
\u653B\u6483\u529B \xD7${i.power}`),t}var cf;function vf(i){if(jt.current||hi>=0||Xn||ss)return;fn.selected=i,jt.step=-1,rh();let t=fn.held,e=Ot("held-name");e.textContent=t?t.skills?`${t.name}\u3000${t.skills.map(n=>`${Oi[n].key}\u300C${Oi[n].name}\u300D`).join(" ")}`:t.name:"\u7D20\u624B",e.classList.remove("hidden"),clearTimeout(cf),cf=setTimeout(()=>e.classList.add("hidden"),1500)}function j_(){let i=fn.held;if(i?.kind==="consumable"){if(jt.current||hi>=0)return;if(i.heal&&ie.hp>=ie.maxHp){rs("HP \u306F\u6E80\u30BF\u30F3\u3067\u3059");return}Ue.drink()&&(hi=0);return}tv()}function Q_(i){if(hi<0)return;let t=hi;if(hi+=i,t<.55&&hi>=.55){let e=fn.held;if(e?.heal){let n=Math.min(e.heal,ie.maxHp-ie.hp);ie.hp+=n,Bi.add(Mo(),`+${Math.round(n)}`,"heal"),Ys()}fn.consumeHeld(),rh()}hi>=.9&&(hi=-1)}var jt={current:null,moves:qa.sword,step:-1,time:0,hit:!1,queued:0,sinceEnd:99,speed:1},Dr=0,Ss=0;function tv(){if(ss||Xn)return;let i=J_();if(jt.current){jt.queued=Math.min(jt.queued+1,jt.moves.length-1-jt.step);return}let t=jt.moves===i&&jt.sinceEnd<Bd&&jt.step<i.length-1;jt.moves=i,Mf(t?jt.step+1:0)}function Mf(i){let t=sh();Math.hypot(t.x,t.z)>.3&&ae.setFacing(Math.atan2(t.x,t.z));let e=jt.moves[i],n=fn.held?.speed??1;if(!Ue.attack(e.anim,n))return;Object.assign(jt,{current:e,step:i,time:0,hit:!1,hitIdx:0,speed:n});let s=ae.facing;ae.knockback(Math.sin(s)*e.lunge,Math.cos(s)*e.lunge,e.hop),dv(i)}function ev(i){if(!jt.current){jt.sinceEnd+=i;return}jt.time+=i*jt.speed;let t=jt.current.hitTimes??[jt.current.hitTime];for(;jt.hitIdx<t.length&&jt.time>=t[jt.hitIdx];)jt.hitIdx++,nv(jt.current);jt.time>=jt.current.duration&&(jt.current=null,jt.sinceEnd=0,jt.queued>0&&jt.step<jt.moves.length-1?(jt.queued--,Mf(jt.step+1)):jt.queued=0)}function oh(){let i=fn.held,t=i?.kind==="weapon"?i.power??1:1;return En&&(t*=En.atk),i?.passive?.id==="thirst"&&ie.hp<ie.maxHp/2&&(t*=1.3),t}function nv(i){let t=fn.held,e=t?.passive?.id==="heavy",n=is.attack(ae.position,ae.facing,{range:i.range*(e?1.1:1),arc:i.arc,damage:ie.atk*i.power*oh(),knockback:i.knockback*(e?1.7:1),bleed:t?.passive?.id==="bleed"});if(n.length&&(Dr=i.hitStop*(e?1.5:1),Ss=Math.max(Ss,i.shake*(e?1.5:1)),t?.rarity==="blood"))for(let s of n)Ts.burst(s.pos,8,5);ah(n),En?.waves&&t?.rarity==="blood"&&iv()}function iv(){let i=new z(Math.sin(ae.facing),0,Math.cos(ae.facing)),t=ae.position.clone().addScaledVector(i,1.5);t.y+=2.6;let e=new Set;Ts.crescent(t,i,{onMove(n){let s=is.hitArea(r=>!e.has(r)&&Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<3+r.T.radius&&Math.abs(r.pos.y+2-n.y)<4,{damage:ie.atk*.9*oh(),knockback:.8,from:n});for(let r of s)e.add(r.enemy),Ts.burst(r.pos,10,6);ah(s)}})}function ah(i){let t=0;for(let s of i)t+=s.damage,Bi.add(s.pos,String(s.damage),s.damage>ie.atk*1.6?"crit":""),s.killed&&(rs(`${s.name} \u3092\u305F\u304A\u3057\u305F\uFF01`),_f(s.exp));let e=fn.held,n=(e?.passive?.id==="lifesteal"?e.passive.rate:0)+(En?.lifesteal??0);if(n>0&&t>0&&ie.hp<ie.maxHp){let s=Math.max(1,Math.round(t*n));ie.hp=Math.min(ie.maxHp,ie.hp+s),Bi.add(Mo(),`+${s}`,"heal"),Ys()}}function sv(i){Bi.add(i.pos,String(i.damage),"bleed"),i.killed&&(rs(`${i.name} \u306F\u8840\u3092\u6D41\u3057\u3066\u5012\u308C\u305F\u2026`),_f(i.exp))}var Xn=null,Ur={},Eo=0,En=null,nh=0,ih={get player(){return ae},get character(){return Ue},get enemies(){return is},get fx(){return Ts},stats:ie,power:i=>ie.atk*i*oh(),applyHits:i=>ah(i),invuln:i=>{Eo=Math.max(Eo,i)},shake:i=>{Ss=Math.max(Ss,i)},hitStop:i=>{Dr=Math.max(Dr,i)},screenFlash:i=>rv(i),fovKick:i=>{nh=i},toast:i=>rs(i),popup:(i,t,e)=>Bi.add(i,t,e),startBuff:i=>cv(i)};function rv(i){let t=Ot("blood-flash");t.style.transition="none",t.style.opacity=i,requestAnimationFrame(()=>{t.style.transition="opacity .5s ease",t.style.opacity=0})}function ov(i){let e=fn.held?.skills?.[i];if(!e||ss||Xn||jt.current||hi>=0)return;let n=Oi[e],s=Ot("skills").children[i];if((Ur[e]??0)>0){s?.classList.remove("denied"),s?.offsetWidth,s?.classList.add("denied");return}if(n.canUse&&!n.canUse(ih))return;let r=sh();Math.hypot(r.x,r.z)>.3&&ae.setFacing(Math.atan2(r.x,r.z)),Ue.attack(n.anim),Xn={def:n,t:0,s:{}},n.start(ih,Xn.s),Ur[e]=n.cooldown,jt.step=-1,Ys(),lv(n.name)}function av(i,t){for(let n of Object.keys(Ur))Ur[n]=Math.max(0,Ur[n]-i);Eo=Math.max(0,Eo-i),Xn&&(Xn.t+=i,Xn.def.update(ih,Xn.s,Xn.t,i),Xn.t>=Xn.def.duration&&(Xn=null)),En&&(En.time-=i,En.time<=0&&ch()),nh*=Math.exp(-t*5);let e=60+nh;Math.abs(dn.fov-e)>.01&&(dn.fov=e,dn.updateProjectionMatrix())}function cv(i){ch(),En={...i,aura:Ts.aura(Ue.object)},Ue.setGlow(2.4),Ot("blood-vignette").classList.add("on"),rs(`${i.name}\uFF1A\u529B\u304C\u6EA2\u308C\u51FA\u3059\u2026\uFF01\u3000\u5263\u3092\u632F\u308B\u3068\u8840\u306E\u65AC\u6483\u304C\u98DB\u3076`)}function ch(){En&&(En.aura.stop(),En=null,Ue.setGlow(1),Ot("blood-vignette").classList.remove("on"))}var lf;function lv(i){let t=Ot("skill-name");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(lf),lf=setTimeout(()=>t.classList.add("hidden"),1200)}function hv(){let t=fn.held?.skills??[],e=Ot("skills");e.classList.toggle("hidden",!t.length),Ot("skill-btns").classList.toggle("hidden",!t.length),e.dataset.set!==t.join()&&(e.innerHTML=t.map(s=>`<div class="skill"><span class="skill-key">${Oi[s].key}</span><span class="skill-cd"></span><span class="skill-label">${Oi[s].name}</span></div>`).join(""),e.dataset.set=t.join()),t.forEach((s,r)=>{let o=Oi[s],a=Ur[s]??0,c=e.children[r];c.querySelector(".skill-cd").textContent=a>0?Math.ceil(a):"",c.style.setProperty("--cd",a/o.cooldown),c.classList.toggle("ready",a<=0);let l=Ot("skill-btns").children[r];l&&l.style.setProperty("--cd",a/o.cooldown)});let n=Ot("buff");n.classList.toggle("hidden",!En),En&&(n.textContent=`${En.name}\u3000${En.time.toFixed(1)}\u79D2`)}var Ql=0,hf=new z;function uv(i){fn.held?.rarity==="blood"&&(Ql-=i,!(Ql>0)&&(Ql=En?.08:.4,Ue.bladeTip(hf)&&Ts.burst(hf,1,En?2:.4)))}var uf;function dv(i){let t=Ot("combo"),e=jt.moves.map((n,s)=>`${"\u2460\u2461\u2462\u2463"[s]} ${n.name}`);t.dataset.set!==e.join()&&(t.innerHTML=e.map(n=>`<span>${n}</span>`).join(""),t.dataset.set=e.join()),t.classList.remove("hidden"),t.querySelectorAll("span").forEach((n,s)=>{n.classList.toggle("done",s<i),n.classList.toggle("now",s===i)}),clearTimeout(uf),uf=setTimeout(()=>t.classList.add("hidden"),1400)}function fv(i,t,e){if(qs>0||Eo>0||ss)return;ie.hp-=i,qs=1,Ue.hurt(),Bi.add(Mo(),`-${i}`,"hurt");let n=Ot("hurt-vignette");n.classList.add("on"),requestAnimationFrame(()=>n.classList.remove("on"));let s=ae.position.x-t,r=ae.position.z-e,o=Math.hypot(s,r)||1;ae.knockback(s/o*14,r/o*14,14),Ys(),ie.hp<=0&&pv()}function pv(){ss=!0,jt.current=null,jt.queued=0,hi=-1,Xn=null,ch(),Ue.setFainted(!0),is.calmDown(),Ot("faint").classList.remove("hidden"),setTimeout(()=>{Ot("faint").classList.add("hidden"),ie.hp=ie.maxHp,ss=!1,Ue.setFainted(!1),ae.respawn(Math.PI),Xe.yaw=0,qs=2,Ys()},2800)}var th=!1;function mv(){ae.grounded&&ae.groundKind==="goal"&&!th&&(th=!0,Ue.wave(),rs("\u5854\u306E\u3066\u3063\u307A\u3093\u306E\u30AF\u30EA\u30B9\u30BF\u30EB\u306B\u305F\u3069\u308A\u7740\u3044\u305F\uFF01",3500)),ae.groundKind==="spawn"&&(th=!1)}var Ja=null;function gv(){let i=ae.position,t=null;for(let e of xo)Math.hypot(i.x-e.x,i.z-e.z)<e.r+4&&(t=e.name);if(!t&&ae.groundKind==="bridge"){let e=1/0;for(let n of ii.bridges){let s=(n.from[0]+n.to[0])/2,r=(n.from[1]+n.to[1])/2,o=Math.hypot(i.x-s,i.z-r);o<e&&(e=o,t=n.name)}}t||(t=ii.islandAt(i.x,i.z)?.name??Ja),t&&t!==Ja&&xv(t),Ja=t}var df;function xv(i){let t=Ot("area-banner");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(df),df=setTimeout(()=>t.classList.add("hidden"),3200)}function yv(){ws="ingame",_o=0,ae.respawn(Math.PI),Xe.yaw=0,Xe.pitch=.35,Xe.dist=18,bs.enabled=!0,ie.hp=ie.maxHp,Ys(),Ot("menu").classList.add("hidden"),Ot("ingame").classList.remove("hidden"),wi.resize(),Ja=null}function Ef(){ws="menu",_o=0,bs.enabled=!1,wi.expanded=!1,is.calmDown(),Bi.clear(),ae.respawn(),Ot("ingame").classList.add("hidden"),Ot("menu").classList.remove("hidden")}var ff;function rs(i,t=2200){let e=Ot("toast-msg");e.textContent=i,e.classList.remove("hidden"),clearTimeout(ff),ff=setTimeout(()=>e.classList.add("hidden"),t)}Ot("btn-play").addEventListener("click",yv);Ot("btn-back").addEventListener("click",Ef);Ot("minimap").addEventListener("click",()=>{wi.expanded=!wi.expanded});Ot("btn-avatar").addEventListener("click",()=>{Ue.wave(),rs("\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u7DE8\u96C6\u306F\u6E96\u5099\u4E2D\u3067\u3059")});var pf=document.documentElement;pf.requestFullscreen&&vo&&(Ot("btn-fullscreen").classList.remove("hidden"),Ot("btn-fullscreen").addEventListener("click",async()=>{try{await pf.requestFullscreen({navigationUI:"hide"}),await screen.orientation?.lock?.("landscape").catch(()=>{})}catch{}}));var wf=window.matchMedia("(orientation: portrait)"),bf=()=>Ot("rotate-tip").classList.toggle("hidden",!(vo&&wf.matches));wf.addEventListener?.("change",bf);bf();document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault());Ot("btn-settings").addEventListener("click",()=>Ot("settings-panel").classList.remove("hidden"));document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",()=>i.closest(".popup").classList.add("hidden")));Ot("opt-shadows").addEventListener("change",i=>{ii.sun.castShadow=i.target.checked});Ot("opt-orbit").addEventListener("change",i=>{gf=i.target.checked});Ot("opt-stepped").addEventListener("change",i=>{Ue.stepped=i.target.checked});window.addEventListener("resize",()=>{dn.aspect=window.innerWidth/window.innerHeight,dn.updateProjectionMatrix(),Fi.setSize(window.innerWidth,window.innerHeight),wi?.resize()});var _v=new Ua,vv=Ot("coords");function Sf(){requestAnimationFrame(Sf);let i=Math.min(_v.getDelta(),.05);if(!ii||!ae)return;let t=Dr>0?i*.05:i;Dr=Math.max(0,Dr-i);let e=ws==="ingame"&&!ss;if(e){af(),bs.consumeAttack()&&j_();let n=bs.consumeSkill();n>=0&&ov(n);let s=Ue.attacking||hi>=0||Xn?{x:0,z:0}:sh();ae.update(t,{...s,jump:bs.jump()&&!Ue.attacking}),mv(),gv()}else ws==="ingame"&&af(),bs.consumeAttack(),ae.update(t,{x:0,z:0,jump:!1});if(ev(t),Q_(t),av(t,i),uv(t),Ts.update(t),qs=Math.max(0,qs-t),Ue.object.visible=!(qs>0&&!ss&&Math.floor(qs*12)%2===0),is.update(t,{playerPos:ae.position,playerActive:e,playerSwimming:ae.swimming,onHitPlayer:fv,onBleed:sv}),ii.update(t,ae.position,dn.position),$_(i),Ss>.001&&(dn.position.x+=(Math.random()-.5)*Ss,dn.position.y+=(Math.random()-.5)*Ss,Ss*=Math.exp(-i*14)),Fi.render(Xs,dn),is.updateLabels(dn),Bi.update(t,dn),ws==="ingame"&&hv(),ws==="ingame"){wi.draw(ae.position,ae.facing,Xe.yaw,is.alive());let n=ae.position;vv.textContent=`X ${n.x.toFixed(0)}  Y ${n.y.toFixed(0)}  Z ${n.z.toFixed(0)}`}}window.addEventListener("error",i=>{let t=Ot("loading-status");t&&(t.textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message)});W_().catch(i=>{Ot("loading-status").textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message,console.error(i)});Sf();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
