(()=>{var nh="160";var fp=0,Gh=1,pp=2;var Md=1,ih=2,ns=3,Ss=0,Un=1,ce=2;var Ts=0,Dr=1,Wn=2,Vh=3,Wh=4,mp=5,Ys=100,gp=101,xp=102,Xh=103,qh=104,yp=200,_p=201,Ep=202,Mp=203,hl=204,ul=205,vp=206,wp=207,Tp=208,bp=209,Sp=210,Rp=211,Ap=212,Cp=213,Pp=214,Ip=0,Lp=1,Hp=2,wa=3,Dp=4,Up=5,zp=6,Np=7,sh=0,Op=1,Fp=2,bs=0,Bp=1,kp=2,Gp=3,Vp=4,Wp=5,Xp=6;var vd=300,Nr=301,Or=302,dl=303,fl=304,oc=306,pl=1e3,wi=1001,ml=1002,bn=1003,Yh=1004;var Pc=1005;var Vn=1006,qp=1007;var _o=1008;var Ui=1009,Yp=1010,Zp=1011,rh=1012,wd=1013,vs=1014,ws=1015,Eo=1016,Td=1017,bd=1018,$s=1020,$p=1021,Ti=1023,Jp=1024,Kp=1025,Js=1026,Fr=1027,oh=1028,Sd=1029,jp=1030,Rd=1031,Ad=1033,Ic=33776,Lc=33777,Hc=33778,Dc=33779,Zh=35840,$h=35841,Jh=35842,Kh=35843,Cd=36196,jh=37492,Qh=37496,tu=37808,eu=37809,nu=37810,iu=37811,su=37812,ru=37813,ou=37814,au=37815,cu=37816,lu=37817,hu=37818,uu=37819,du=37820,fu=37821,Uc=36492,pu=36494,mu=36495,Qp=36283,gu=36284,xu=36285,yu=36286;var Ta=2300,ba=2301,zc=2302,_u=2400,Eu=2401,Mu=2402;var Pd=3e3,Ks=3001,tm=3200,em=3201,ah=0,nm=1,pi="",He="srgb",rs="srgb-linear",ch="display-p3",ac="display-p3-linear",Sa="linear",Le="srgb",Ra="rec709",Aa="p3";var dr=7680;var vu=519,im=512,sm=513,rm=514,Id=515,om=516,am=517,cm=518,lm=519,wu=35044;var Tu="300 es",gl=1035,ss=2e3,Ca=2001,Rs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bu=1234567,uo=Math.PI/180,Mo=180/Math.PI;function nr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function gn(i,t,e){return Math.max(t,Math.min(e,i))}function lh(i,t){return(i%t+t)%t}function hm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function um(i,t,e){return i!==t?(e-i)/(t-i):0}function fo(i,t,e){return(1-e)*i+e*t}function dm(i,t,e,n){return fo(i,t,1-Math.exp(-e*n))}function fm(i,t=1){return t-Math.abs(lh(i,t*2)-t)}function pm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xm(i,t){return i+Math.random()*(t-i)}function ym(i){return i*(.5-Math.random())}function _m(i){i!==void 0&&(bu=i);let t=bu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Em(i){return i*uo}function Mm(i){return i*Mo}function xl(i){return(i&i-1)===0&&i!==0}function vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qn={DEG2RAD:uo,RAD2DEG:Mo,generateUUID:nr,clamp:gn,euclideanModulo:lh,mapLinear:hm,inverseLerp:um,lerp:fo,damp:dm,pingpong:fm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:xm,randFloatSpread:ym,seededRandom:_m,degToRad:Em,radToDeg:Mm,isPowerOfTwo:xl,ceilPowerOfTwo:vm,floorPowerOfTwo:Pa,setQuaternionFromProperEuler:wm,normalize:kn,denormalize:Cr},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(gn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ue=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=s[0],m=s[3],f=s[6],w=s[1],y=s[4],M=s[7],R=s[2],v=s[5],x=s[8];return r[0]=o*g+a*w+c*R,r[3]=o*m+a*y+c*v,r[6]=o*f+a*M+c*x,r[1]=l*g+h*w+u*R,r[4]=l*m+h*y+u*v,r[7]=l*f+h*M+u*x,r[2]=d*g+p*w+_*R,r[5]=d*m+p*y+_*v,r[8]=d*f+p*M+_*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,_=e*u+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nc.makeScale(t,e)),this}rotate(t){return this.premultiply(Nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new ue;function Ld(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tm(){let i=Ia("canvas");return i.style.display="block",i}var Su={};function po(i){i in Su||(Su[i]=!0,console.warn(i))}var Ru=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Au=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zo={[rs]:{transfer:Sa,primaries:Ra,toReference:i=>i,fromReference:i=>i},[He]:{transfer:Le,primaries:Ra,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ac]:{transfer:Sa,primaries:Aa,toReference:i=>i.applyMatrix3(Au),fromReference:i=>i.applyMatrix3(Ru)},[ch]:{transfer:Le,primaries:Aa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Au),fromReference:i=>i.applyMatrix3(Ru).convertLinearToSRGB()}},bm=new Set([rs,ac]),be={enabled:!0,_workingColorSpace:rs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Zo[t].toReference,s=Zo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zo[i].primaries},getTransfer:function(i){return i===pi?Sa:Zo[i].transfer}};function Ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fr,La=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fr===void 0&&(fr=Ia("canvas")),fr.width=t.width,fr.height=t.height;let n=fr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ia("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ur(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ur(e[n]/255)*255):e[n]=Ur(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sm=0,Ha=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=nr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fc(s[o].image)):r.push(Fc(s[o]))}else r=Fc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rm=0,oi=class i extends Rs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,s=wi,r=Vn,o=_o,a=Ti,c=Ui,l=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=nr(),this.name="",this.source=new Ha(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ks?He:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pl:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pl:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?Ks:Pd}set encoding(t){po("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ks?He:pi}};oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=vd;oi.DEFAULT_ANISOTROPY=1;var Oe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,M=(p+1)/2,R=(f+1)/2,v=(h+d)/4,x=(u+g)/4,A=(_+m)/4;return y>M&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=v/n,r=x/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=v/s,r=A/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=x/r,s=A/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(u-g)/w,this.z=(d-h)/w,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends Rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(po("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ks?He:pi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new oi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ha(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},os=class extends yl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Da=class extends oi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _l=class extends oi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var As=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==d||l!==p||h!==_){let m=1-a,f=c*d+l*p+h*_+u*g,w=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let R=Math.sqrt(y),v=Math.atan2(R,f*w);m=Math.sin(m*v)/R,a=Math.sin(a*v)/R}let M=a*w;if(c=c*m+d*M,l=l*m+p*M,h=h*m+_*M,u=u*m+g*M,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*p-l*d,t[e+1]=c*_+h*d+l*u-a*p,t[e+2]=l*_+h*p+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(gn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bc=new F,Cu=new As,_e=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$o.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$o.copy(n.boundingBox)),$o.applyMatrix4(t.matrixWorld),this.union($o)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(so),Jo.subVectors(this.max,so),pr.subVectors(t.a,so),mr.subVectors(t.b,so),gr.subVectors(t.c,so),xs.subVectors(mr,pr),ys.subVectors(gr,mr),Gs.subVectors(pr,gr);let e=[0,-xs.z,xs.y,0,-ys.z,ys.y,0,-Gs.z,Gs.y,xs.z,0,-xs.x,ys.z,0,-ys.x,Gs.z,0,-Gs.x,-xs.y,xs.x,0,-ys.y,ys.x,0,-Gs.y,Gs.x,0];return!kc(e,pr,mr,gr,Jo)||(e=[1,0,0,0,1,0,0,0,1],!kc(e,pr,mr,gr,Jo))?!1:(Ko.crossVectors(xs,ys),e=[Ko.x,Ko.y,Ko.z],kc(e,pr,mr,gr,Jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ki=[new F,new F,new F,new F,new F,new F,new F,new F],Ei=new F,$o=new _e,pr=new F,mr=new F,gr=new F,xs=new F,ys=new F,Gs=new F,so=new F,Jo=new F,Ko=new F,Vs=new F;function kc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vs.fromArray(i,r);let a=s.x*Math.abs(Vs.x)+s.y*Math.abs(Vs.y)+s.z*Math.abs(Vs.z),c=t.dot(Vs),l=e.dot(Vs),h=n.dot(Vs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Am=new _e,ro=new F,Gc=new F,Cs=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Am.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ro.subVectors(t,this.center);let e=ro.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ro,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ro.copy(t.center).add(Gc)),this.expandByPoint(ro.copy(t.center).sub(Gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ji=new F,Vc=new F,jo=new F,_s=new F,Wc=new F,Qo=new F,Xc=new F,Ua=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vc.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),_s.copy(this.origin).sub(Vc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(jo),a=_s.dot(this.direction),c=-_s.dot(jo),l=_s.lengthSq(),h=Math.abs(1-o*o),u,d,p,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vc).addScaledVector(jo,d),p}intersectSphere(t,e){ji.subVectors(t.center,this.origin);let n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,n,s,r){Wc.subVectors(e,t),Qo.subVectors(n,t),Xc.crossVectors(Wc,Qo);let o=this.direction.dot(Xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_s.subVectors(this.origin,t);let c=a*this.direction.dot(Qo.crossVectors(_s,Qo));if(c<0)return null;let l=a*this.direction.dot(Wc.cross(_s));if(l<0||c+l>o)return null;let h=-a*_s.dot(Xc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,_,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,_,g,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,_,g,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/xr.setFromMatrixColumn(t,0).length(),r=1/xr.setFromMatrixColumn(t,1).length(),o=1/xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=_+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,_=l*h,g=l*u;e[0]=d+g*a,e[4]=_*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,_=l*h,g=l*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-p,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=p*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-d*u,e[8]=_*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*c,p=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=o*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cm,t,Pm)}lookAt(t,e,n){let s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),Es.crossVectors(n,si),Es.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Es.crossVectors(n,si)),Es.normalize(),ta.crossVectors(si,Es),s[0]=Es.x,s[4]=ta.x,s[8]=si.x,s[1]=Es.y,s[5]=ta.y,s[9]=si.y,s[2]=Es.z,s[6]=ta.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],w=n[3],y=n[7],M=n[11],R=n[15],v=s[0],x=s[4],A=s[8],E=s[12],T=s[1],b=s[5],I=s[9],D=s[13],S=s[2],L=s[6],U=s[10],N=s[14],z=s[3],B=s[7],V=s[11],X=s[15];return r[0]=o*v+a*T+c*S+l*z,r[4]=o*x+a*b+c*L+l*B,r[8]=o*A+a*I+c*U+l*V,r[12]=o*E+a*D+c*N+l*X,r[1]=h*v+u*T+d*S+p*z,r[5]=h*x+u*b+d*L+p*B,r[9]=h*A+u*I+d*U+p*V,r[13]=h*E+u*D+d*N+p*X,r[2]=_*v+g*T+m*S+f*z,r[6]=_*x+g*b+m*L+f*B,r[10]=_*A+g*I+m*U+f*V,r[14]=_*E+g*D+m*N+f*X,r[3]=w*v+y*T+M*S+R*z,r[7]=w*x+y*b+M*L+R*B,r[11]=w*A+y*I+M*U+R*V,r[15]=w*E+y*D+M*N+R*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+g*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],w=u*m*l-g*d*l+g*c*p-a*m*p-u*c*f+a*d*f,y=_*d*l-h*m*l-_*c*p+o*m*p+h*c*f-o*d*f,M=h*g*l-_*u*l+_*a*p-o*g*p-h*a*f+o*u*f,R=_*u*c-h*g*c-_*a*d+o*g*d+h*a*m-o*u*m,v=e*w+n*y+s*M+r*R;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let x=1/v;return t[0]=w*x,t[1]=(g*d*r-u*m*r-g*s*p+n*m*p+u*s*f-n*d*f)*x,t[2]=(a*m*r-g*c*r+g*s*l-n*m*l-a*s*f+n*c*f)*x,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*x,t[4]=y*x,t[5]=(h*m*r-_*d*r+_*s*p-e*m*p-h*s*f+e*d*f)*x,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*f-e*c*f)*x,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*x,t[8]=M*x,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*f-e*u*f)*x,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*f+e*a*f)*x,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*x,t[12]=R*x,t[13]=(h*g*s-_*u*s+_*n*d-e*g*d-h*n*m+e*u*m)*x,t[14]=(_*a*s-o*g*s-_*n*c+e*g*c+o*n*m-e*a*m)*x,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*x,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,_=r*u,g=o*h,m=o*u,f=a*u,w=c*l,y=c*h,M=c*u,R=n.x,v=n.y,x=n.z;return s[0]=(1-(g+f))*R,s[1]=(p+M)*R,s[2]=(_-y)*R,s[3]=0,s[4]=(p-M)*v,s[5]=(1-(d+f))*v,s[6]=(m+w)*v,s[7]=0,s[8]=(_+y)*x,s[9]=(m-w)*x,s[10]=(1-(d+g))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=xr.set(s[0],s[1],s[2]).length(),o=xr.set(s[4],s[5],s[6]).length(),a=xr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mi.copy(this);let l=1/r,h=1/o,u=1/a;return Mi.elements[0]*=l,Mi.elements[1]*=l,Mi.elements[2]*=l,Mi.elements[4]*=h,Mi.elements[5]*=h,Mi.elements[6]*=h,Mi.elements[8]*=u,Mi.elements[9]*=u,Mi.elements[10]*=u,e.setFromRotationMatrix(Mi),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ss){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,_;if(a===ss)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ca)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ss){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h,_,g;if(a===ss)_=(o+r)*u,g=-2*u;else if(a===Ca)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xr=new F,Mi=new Fe,Cm=new F(0,0,0),Pm=new F(1,1,1),Es=new F,ta=new F,si=new F,Pu=new Fe,Iu=new As,za=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};za.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Im=0,Lu=new F,yr=new As,Qi=new Fe,ea=new F,oo=new F,Lm=new F,Hm=new As,Hu=new F(1,0,0),Du=new F(0,1,0),Uu=new F(0,0,1),Dm={type:"added"},Um={type:"removed"},xn=class i extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new za,n=new As,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ue}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(Hu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Uu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(oo,ea,this.up):Qi.lookAt(ea,oo,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(Qi),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Dm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Um)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,t,Lm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,Hm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};xn.DEFAULT_UP=new F(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=new F,ts=new F,qc=new F,es=new F,_r=new F,Er=new F,zu=new F,Yc=new F,Zc=new F,$c=new F,na=!1,Pr=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vi.subVectors(t,e),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vi.subVectors(s,e),ts.subVectors(n,e),qc.subVectors(t,e);let o=vi.dot(vi),a=vi.dot(ts),c=vi.dot(qc),l=ts.dot(ts),h=ts.dot(qc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getUV(t,e,n,s,r,o,a,c){return na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),na=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,es)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,es.x),c.addScaledVector(o,es.y),c.addScaledVector(a,es.z),c)}static isFrontFacing(t,e,n,s){return vi.subVectors(n,e),ts.subVectors(t,e),vi.cross(ts).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),vi.cross(ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),na=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;_r.subVectors(s,n),Er.subVectors(r,n),Yc.subVectors(t,n);let c=_r.dot(Yc),l=Er.dot(Yc);if(c<=0&&l<=0)return e.copy(n);Zc.subVectors(t,s);let h=_r.dot(Zc),u=Er.dot(Zc);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(_r,o);$c.subVectors(t,r);let p=_r.dot($c),_=Er.dot($c);if(_>=0&&p<=_)return e.copy(r);let g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Er,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return zu.subVectors(r,s),a=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(zu,a);let f=1/(m+g+d);return o=g*f,a=d*f,e.copy(n).addScaledVector(_r,o).addScaledVector(Er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var K=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=lh(t,1),e=gn(e,0,1),n=gn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Jc(o,r,t+1/3),this.g=Jc(o,r,t),this.b=Jc(o,r,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=Hd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}copyLinearToSRGB(t){return this.r=Oc(t.r),this.g=Oc(t.g),this.b=Oc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return be.fromWorkingColorSpace(Hn.copy(this),t),Math.round(gn(Hn.r*255,0,255))*65536+Math.round(gn(Hn.g*255,0,255))*256+Math.round(gn(Hn.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(Hn.copy(this),e);let n=Hn.r,s=Hn.g,r=Hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=He){be.fromWorkingColorSpace(Hn.copy(this),t);let e=Hn.r,n=Hn.g,s=Hn.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+e,Ms.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ms),t.getHSL(ia);let n=fo(Ms.h,ia.h,e),s=fo(Ms.s,ia.s,e),r=fo(Ms.l,ia.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new K;K.NAMES=Hd;var zm=0,as=class extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Dr,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=ul,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(n.blending=this.blending),this.side!==Ss&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==ul&&(n.blendDst=this.blendDst),this.blendEquation!==Ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Me=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var rn=new F,sa=new dt,de=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ws,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sa.fromBufferAttribute(this,e),sa.applyMatrix3(t),this.setXY(e,sa.x,sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cr(e,this.array)),e}setX(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cr(e,this.array)),e}setY(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cr(e,this.array)),e}setW(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),s=kn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),s=kn(s,this.array),r=kn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wu&&(t.usage=this.usage),t}};var Oa=class extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fa=class extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Nm=0,fi=new Fe,Kc=new xn,Mr=new F,ri=new _e,ao=new _e,mn=new F,oe=class i extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ld(t)?Fa:Oa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,e,n){return fi.makeTranslation(t,e,n),this.applyMatrix4(fi),this}scale(t,e,n){return fi.makeScale(t,e,n),this.applyMatrix4(fi),this}lookAt(t){return Kc.lookAt(t),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _e);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(ri.min,ao.min),ri.expandByPoint(mn),mn.addVectors(ri.max,ao.max),ri.expandByPoint(mn)):(ri.expandByPoint(ao.min),ri.expandByPoint(ao.max))}ri.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)mn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(mn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)mn.fromBufferAttribute(a,l),c&&(Mr.fromBufferAttribute(t,l),mn.add(Mr)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new F,h[T]=new F;let u=new F,d=new F,p=new F,_=new dt,g=new dt,m=new dt,f=new F,w=new F;function y(T,b,I){u.fromArray(s,T*3),d.fromArray(s,b*3),p.fromArray(s,I*3),_.fromArray(o,T*2),g.fromArray(o,b*2),m.fromArray(o,I*2),d.sub(u),p.sub(u),g.sub(_),m.sub(_);let D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),w.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(D),l[T].add(f),l[b].add(f),l[I].add(f),h[T].add(w),h[b].add(w),h[I].add(w))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,b=M.length;T<b;++T){let I=M[T],D=I.start,S=I.count;for(let L=D,U=D+S;L<U;L+=3)y(n[L+0],n[L+1],n[L+2])}let R=new F,v=new F,x=new F,A=new F;function E(T){x.fromArray(r,T*3),A.copy(x);let b=l[T];R.copy(b),R.sub(x.multiplyScalar(x.dot(b))).normalize(),v.crossVectors(A,b);let D=v.dot(h[T])<0?-1:1;c[T*4]=R.x,c[T*4+1]=R.y,c[T*4+2]=R.z,c[T*4+3]=D}for(let T=0,b=M.length;T<b;++T){let I=M[T],D=I.start,S=I.count;for(let L=D,U=D+S;L<U;L+=3)E(n[L+0]),E(n[L+1]),E(n[L+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)mn.fromBufferAttribute(t,e),mn.normalize(),t.setXYZ(e,mn.x,mn.y,mn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let f=0;f<h;f++)d[_++]=l[p++]}return new de(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nu=new Fe,Ws=new Ua,ra=new Cs,Ou=new F,vr=new F,wr=new F,Tr=new F,jc=new F,oa=new F,aa=new dt,ca=new dt,la=new dt,Fu=new F,Bu=new F,ku=new F,ha=new F,ua=new F,k=class extends xn{constructor(t=new oe,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(jc.fromBufferAttribute(u,t),o?oa.addScaledVector(jc,h):oa.addScaledVector(jc.sub(e),h))}e.add(oa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),Ws.copy(t.ray).recast(t.near),!(ra.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(ra,Ou)===null||Ws.origin.distanceToSquared(Ou)>(t.far-t.near)**2))&&(Nu.copy(r).invert(),Ws.copy(t.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&Ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ws)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],f=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,R=y;M<R;M+=3){let v=a.getX(M),x=a.getX(M+1),A=a.getX(M+2);s=da(this,f,t,n,l,h,u,v,x,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){let w=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=da(this,o,t,n,l,h,u,w,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],f=o[m.materialIndex],w=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,R=y;M<R;M+=3){let v=M,x=M+1,A=M+2;s=da(this,f,t,n,l,h,u,v,x,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){let w=m,y=m+1,M=m+2;s=da(this,o,t,n,l,h,u,w,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Om(i,t,e,n,s,r,o,a){let c;if(t.side===Un?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ss,a),c===null)return null;ua.copy(a),ua.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ua);return l<e.near||l>e.far?null:{distance:l,point:ua.clone(),object:i}}function da(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,vr),i.getVertexPosition(c,wr),i.getVertexPosition(l,Tr);let h=Om(i,t,e,n,vr,wr,Tr,ha);if(h){s&&(aa.fromBufferAttribute(s,a),ca.fromBufferAttribute(s,c),la.fromBufferAttribute(s,l),h.uv=Pr.getInterpolation(ha,vr,wr,Tr,aa,ca,la,new dt)),r&&(aa.fromBufferAttribute(r,a),ca.fromBufferAttribute(r,c),la.fromBufferAttribute(r,l),h.uv1=Pr.getInterpolation(ha,vr,wr,Tr,aa,ca,la,new dt),h.uv2=h.uv1),o&&(Fu.fromBufferAttribute(o,a),Bu.fromBufferAttribute(o,c),ku.fromBufferAttribute(o,l),h.normal=Pr.getInterpolation(ha,vr,wr,Tr,Fu,Bu,ku,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new F,materialIndex:0};Pr.getNormal(vr,wr,Tr,u.normal),h.face=u}return h}var ft=class i extends oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function _(g,m,f,w,y,M,R,v,x,A,E){let T=M/x,b=R/A,I=M/2,D=R/2,S=v/2,L=x+1,U=A+1,N=0,z=0,B=new F;for(let V=0;V<U;V++){let X=V*b-D;for(let nt=0;nt<L;nt++){let q=nt*T-I;B[g]=q*w,B[m]=X*y,B[f]=S,l.push(B.x,B.y,B.z),B[g]=0,B[m]=0,B[f]=v>0?1:-1,h.push(B.x,B.y,B.z),u.push(nt/x),u.push(1-V/A),N+=1}}for(let V=0;V<A;V++)for(let X=0;X<x;X++){let nt=d+X+L*V,q=d+X+L*(V+1),j=d+(X+1)+L*(V+1),ut=d+(X+1)+L*V;c.push(nt,q,ut),c.push(q,j,ut),z+=6}a.addGroup(p,z,E),p+=z,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Br(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Gn(i){let t={};for(let e=0;e<i.length;e++){let n=Br(i[e]);for(let s in n)t[s]=n[s]}return t}function Fm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dd(i){return i.getRenderTarget()===null?i.outputColorSpace:be.workingColorSpace}var hh={clone:Br,merge:Gn},Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=Fm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ba=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=ss}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dn=class extends Ba{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},br=-90,Sr=1,El=class extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(br,Sr,t,e);s.layers=this.layers,this.add(s);let r=new Dn(br,Sr,t,e);r.layers=this.layers,this.add(r);let o=new Dn(br,Sr,t,e);o.layers=this.layers,this.add(o);let a=new Dn(br,Sr,t,e);a.layers=this.layers,this.add(a);let c=new Dn(br,Sr,t,e);c.layers=this.layers,this.add(c);let l=new Dn(br,Sr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ss)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ka=class extends oi{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Nr,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ml=class extends os{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(po("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ks?He:pi),this.texture=new ka(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ft(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Ts});r.uniforms.tEquirect.value=e;let o=new k(s,r),a=e.minFilter;return e.minFilter===_o&&(e.minFilter=Vn),new El(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Qc=new F,Gm=new F,Vm=new ue,is=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qc.subVectors(n,e).cross(Gm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vm.getNormalMatrix(t),s=this.coplanarPoint(Qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xs=new Cs,fa=new F,vo=class{constructor(t=new is,e=new is,n=new is,s=new is,r=new is,o=new is){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ss){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],w=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-p,M-f).normalize(),n[1].setComponents(c+r,d+l,m+p,M+f).normalize(),n[2].setComponents(c+o,d+h,m+_,M+w).normalize(),n[3].setComponents(c-o,d-h,m-_,M-w).normalize(),n[4].setComponents(c-a,d-u,m-g,M-y).normalize(),e===ss)n[5].setComponents(c+a,d+u,m+g,M+y).normalize();else if(e===Ca)n[5].setComponents(a,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){return Xs.center.set(0,0,0),Xs.radius=.7071067811865476,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(fa.x=s.normal.x>0?t.max.x:t.min.x,fa.y=s.normal.y>0?t.max.y:t.min.y,fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ud(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wm(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){let f=_[g];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var yn=class i extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){let w=f*d-o;for(let y=0;y<l;y++){let M=y*u-r;_.push(M,-w,0),g.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){let y=w+l*f,M=w+l*(f+1),R=w+1+l*(f+1),v=w+1+l*f;p.push(y,M,v),p.push(M,R,v)}this.setIndex(p),this.setAttribute("position",new fe(_,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qm=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
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
#endif`,t0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s0=`#ifdef USE_IRIDESCENCE
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
#endif`,r0=`#ifdef USE_BUMPMAP
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,p0=`#define PI 3.141592653589793
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
} // validated`,m0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M0="gl_FragColor = linearToOutputTexel( gl_FragColor );",v0=`
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
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
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
}`,H0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V0=`PhysicalMaterial material;
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
#endif`,W0=`struct PhysicalMaterial {
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
}`,X0=`
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,K0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,j0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
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
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cg=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xg=`uniform sampler2D t2D;
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 diffuse;
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
}`,ox=`#define LAMBERT
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
}`,ax=`#define LAMBERT
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
}`,cx=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,ux=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,px=`#define STANDARD
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
}`,mx=`#define STANDARD
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
}`,gx=`#define TOON
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
}`,xx=`#define TOON
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
}`,yx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Mx=`uniform vec3 color;
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
}`,vx=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Xm,alphahash_pars_fragment:qm,alphamap_fragment:Ym,alphamap_pars_fragment:Zm,alphatest_fragment:$m,alphatest_pars_fragment:Jm,aomap_fragment:Km,aomap_pars_fragment:jm,batching_pars_vertex:Qm,batching_vertex:t0,begin_vertex:e0,beginnormal_vertex:n0,bsdfs:i0,iridescence_fragment:s0,bumpmap_pars_fragment:r0,clipping_planes_fragment:o0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:l0,color_fragment:h0,color_pars_fragment:u0,color_pars_vertex:d0,color_vertex:f0,common:p0,cube_uv_reflection_fragment:m0,defaultnormal_vertex:g0,displacementmap_pars_vertex:x0,displacementmap_vertex:y0,emissivemap_fragment:_0,emissivemap_pars_fragment:E0,colorspace_fragment:M0,colorspace_pars_fragment:v0,envmap_fragment:w0,envmap_common_pars_fragment:T0,envmap_pars_fragment:b0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:O0,envmap_vertex:R0,fog_vertex:A0,fog_pars_vertex:C0,fog_fragment:P0,fog_pars_fragment:I0,gradientmap_pars_fragment:L0,lightmap_fragment:H0,lightmap_pars_fragment:D0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:z0,lights_pars_begin:N0,lights_toon_fragment:F0,lights_toon_pars_fragment:B0,lights_phong_fragment:k0,lights_phong_pars_fragment:G0,lights_physical_fragment:V0,lights_physical_pars_fragment:W0,lights_fragment_begin:X0,lights_fragment_maps:q0,lights_fragment_end:Y0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:J0,logdepthbuf_vertex:K0,map_fragment:j0,map_pars_fragment:Q0,map_particle_fragment:tg,map_particle_pars_fragment:eg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphcolor_vertex:sg,morphnormal_vertex:rg,morphtarget_pars_vertex:og,morphtarget_vertex:ag,normal_fragment_begin:cg,normal_fragment_maps:lg,normal_pars_fragment:hg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:xg,opaque_fragment:yg,packing:_g,premultiplied_alpha_fragment:Eg,project_vertex:Mg,dithering_fragment:vg,dithering_pars_fragment:wg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:bg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Cg,skinbase_vertex:Pg,skinning_pars_vertex:Ig,skinning_vertex:Lg,skinnormal_vertex:Hg,specularmap_fragment:Dg,specularmap_pars_fragment:Ug,tonemapping_fragment:zg,tonemapping_pars_fragment:Ng,transmission_fragment:Og,transmission_pars_fragment:Fg,uv_pars_fragment:Bg,uv_pars_vertex:kg,uv_vertex:Gg,worldpos_vertex:Vg,background_vert:Wg,background_frag:Xg,backgroundCube_vert:qg,backgroundCube_frag:Yg,cube_vert:Zg,cube_frag:$g,depth_vert:Jg,depth_frag:Kg,distanceRGBA_vert:jg,distanceRGBA_frag:Qg,equirect_vert:tx,equirect_frag:ex,linedashed_vert:nx,linedashed_frag:ix,meshbasic_vert:sx,meshbasic_frag:rx,meshlambert_vert:ox,meshlambert_frag:ax,meshmatcap_vert:cx,meshmatcap_frag:lx,meshnormal_vert:hx,meshnormal_frag:ux,meshphong_vert:dx,meshphong_frag:fx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:xx,points_vert:yx,points_frag:_x,shadow_vert:Ex,shadow_frag:Mx,sprite_vert:vx,sprite_frag:wx},Mt={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Di={basic:{uniforms:Gn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Gn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new K(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Gn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Gn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Gn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new K(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Gn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Gn([Mt.points,Mt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Gn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Gn([Mt.common,Mt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Gn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Gn([Mt.sprite,Mt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:Gn([Mt.common,Mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:Gn([Mt.lights,Mt.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Di.physical={uniforms:Gn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var pa={r:0,b:0,g:0};function Tx(i,t,e,n,s,r,o){let a=new K(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function _(m,f){let w=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?e:t).get(y)),y===null?g(a,c):y&&y.isColor&&(g(y,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===oc)?(h===void 0&&(h=new k(new ft(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Br(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,v,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=be.getTransfer(y.colorSpace)!==Le,(u!==y||d!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new k(new yn(2,2),new zn({name:"BackgroundMaterial",uniforms:Br(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=be.getTransfer(y.colorSpace)!==Le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){m.getRGB(pa,Dd(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function bx(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(S,L,U,N,z){let B=!1;if(o){let V=g(N,U,L);l!==V&&(l=V,p(l.object)),B=f(S,N,U,z),B&&w(S,N,U,z)}else{let V=L.wireframe===!0;(l.geometry!==N.id||l.program!==U.id||l.wireframe!==V)&&(l.geometry=N.id,l.program=U.id,l.wireframe=V,B=!0)}z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,A(S,L,U,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(S){return n.isWebGL2?i.bindVertexArray(S):r.bindVertexArrayOES(S)}function _(S){return n.isWebGL2?i.deleteVertexArray(S):r.deleteVertexArrayOES(S)}function g(S,L,U){let N=U.wireframe===!0,z=a[S.id];z===void 0&&(z={},a[S.id]=z);let B=z[L.id];B===void 0&&(B={},z[L.id]=B);let V=B[N];return V===void 0&&(V=m(d()),B[N]=V),V}function m(S){let L=[],U=[],N=[];for(let z=0;z<s;z++)L[z]=0,U[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,L,U,N){let z=l.attributes,B=L.attributes,V=0,X=U.getAttributes();for(let nt in X)if(X[nt].location>=0){let j=z[nt],ut=B[nt];if(ut===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),j===void 0||j.attribute!==ut||ut&&j.data!==ut.data)return!0;V++}return l.attributesNum!==V||l.index!==N}function w(S,L,U,N){let z={},B=L.attributes,V=0,X=U.getAttributes();for(let nt in X)if(X[nt].location>=0){let j=B[nt];j===void 0&&(nt==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),nt==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));let ut={};ut.attribute=j,j&&j.data&&(ut.data=j.data),z[nt]=ut,V++}l.attributes=z,l.attributesNum=V,l.index=N}function y(){let S=l.newAttributes;for(let L=0,U=S.length;L<U;L++)S[L]=0}function M(S){R(S,0)}function R(S,L){let U=l.newAttributes,N=l.enabledAttributes,z=l.attributeDivisors;U[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),z[S]!==L&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,L),z[S]=L)}function v(){let S=l.newAttributes,L=l.enabledAttributes;for(let U=0,N=L.length;U<N;U++)L[U]!==S[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function x(S,L,U,N,z,B,V){V===!0?i.vertexAttribIPointer(S,L,U,z,B):i.vertexAttribPointer(S,L,U,N,z,B)}function A(S,L,U,N){if(n.isWebGL2===!1&&(S.isInstancedMesh||N.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let z=N.attributes,B=U.getAttributes(),V=L.defaultAttributeValues;for(let X in B){let nt=B[X];if(nt.location>=0){let q=z[X];if(q===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){let j=q.normalized,ut=q.itemSize,Tt=e.get(q);if(Tt===void 0)continue;let yt=Tt.buffer,Bt=Tt.type,qt=Tt.bytesPerElement,bt=n.isWebGL2===!0&&(Bt===i.INT||Bt===i.UNSIGNED_INT||q.gpuType===wd);if(q.isInterleavedBufferAttribute){let Ot=q.data,G=Ot.stride,at=q.offset;if(Ot.isInstancedInterleavedBuffer){for(let Q=0;Q<nt.locationSize;Q++)R(nt.location+Q,Ot.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let Q=0;Q<nt.locationSize;Q++)M(nt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Q=0;Q<nt.locationSize;Q++)x(nt.location+Q,ut/nt.locationSize,Bt,j,G*qt,(at+ut/nt.locationSize*Q)*qt,bt)}else{if(q.isInstancedBufferAttribute){for(let Ot=0;Ot<nt.locationSize;Ot++)R(nt.location+Ot,q.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ot=0;Ot<nt.locationSize;Ot++)M(nt.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Ot=0;Ot<nt.locationSize;Ot++)x(nt.location+Ot,ut/nt.locationSize,Bt,j,ut*qt,ut/nt.locationSize*Ot*qt,bt)}}else if(V!==void 0){let j=V[X];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(nt.location,j);break;case 3:i.vertexAttrib3fv(nt.location,j);break;case 4:i.vertexAttrib4fv(nt.location,j);break;default:i.vertexAttrib1fv(nt.location,j)}}}}v()}function E(){I();for(let S in a){let L=a[S];for(let U in L){let N=L[U];for(let z in N)_(N[z].object),delete N[z];delete L[U]}delete a[S]}}function T(S){if(a[S.id]===void 0)return;let L=a[S.id];for(let U in L){let N=L[U];for(let z in N)_(N[z].object),delete N[z];delete L[U]}delete a[S.id]}function b(S){for(let L in a){let U=a[L];if(U[S.id]===void 0)continue;let N=U[S.id];for(let z in N)_(N[z].object),delete N[z];delete U[S.id]}}function I(){D(),h=!0,l!==c&&(l=c,p(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:I,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:M,disableUnusedAttributes:v}}function Sx(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,_;if(s)p=i,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Rx(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,M=o||t.has("OES_texture_float"),R=y&&M,v=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:v}}function Ax(i){let t=this,e=null,n=0,s=!1,r=!1,o=new is,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{let w=r?0:n,y=w*4,M=f.clippingState||null;c.value=M,M=h(_,d,y,p);for(let R=0;R!==y;++R)M[R]=e[R];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,_!==!0||m===null){let f=p+g*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==g;++y,M+=4)o.copy(u[y]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Cx(i){let t=new WeakMap;function e(o,a){return a===dl?o.mapping=Nr:a===fl&&(o.mapping=Or),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dl||a===fl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ml(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ga=class extends Ba{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ir=4,Gu=[.125,.215,.35,.446,.526,.582],Zs=20,tl=new Ga,Vu=new K,el=null,nl=0,il=0,qs=(1+Math.sqrt(5))/2,Rr=1/qs,Wu=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,qs,Rr),new F(0,qs,-Rr),new F(Rr,0,qs),new F(-Rr,0,qs),new F(qs,Rr,0),new F(-qs,Rr,0)],Va=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(el,nl,il),t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Nr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Eo,format:Ti,colorSpace:rs,depthBuffer:!1},s=Xu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Px(r)),this._blurMaterial=Ix(r,t,e)}return s}_compileMaterial(t){let e=new k(this._lodPlanes[0],t);this._renderer.compile(e,tl)}_sceneToCubeUV(t,e,n,s){let a=new Dn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Vu),h.toneMapping=bs,h.autoClear=!1;let p=new Me({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),_=new k(new ft,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Vu),g=!0);for(let f=0;f<6;f++){let w=f%3;w===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):w===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let y=this._cubeSize;ma(s,w*y,f>2?y:0,y,y),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Nr||t.mapping===Or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ma(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,tl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Wu[(s-1)%Wu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new k(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zs-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Zs;m>Zs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zs}`);let f=[],w=0;for(let x=0;x<Zs;++x){let A=x/g,E=Math.exp(-A*A/2);f.push(E),x===0?w+=E:x<m&&(w+=2*E)}for(let x=0;x<f.length;x++)f[x]=f[x]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;let M=this._sizeLods[s],R=3*M*(s>y-Ir?s-y+Ir:0),v=4*(this._cubeSize-M);ma(e,R,v,3*M,2*M),c.setRenderTarget(e),c.render(u,tl)}};function Px(i){let t=[],e=[],n=[],s=i,r=i-Ir+1+Gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ir?c=Gu[o-i+Ir-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,w=new Float32Array(g*_*p),y=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let v=0;v<p;v++){let x=v%3*2/3-1,A=v>2?0:-1,E=[x,A,0,x+2/3,A,0,x+2/3,A+1,0,x,A,0,x+2/3,A+1,0,x,A+1,0];w.set(E,g*_*v),y.set(d,m*_*v);let T=[v,v,v,v,v,v];M.set(T,f*_*v)}let R=new oe;R.setAttribute("position",new de(w,g)),R.setAttribute("uv",new de(y,m)),R.setAttribute("faceIndex",new de(M,f)),t.push(R),s>Ir&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xu(i,t,e){let n=new os(i,t,e);return n.texture.mapping=oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ix(i,t,e){let n=new Float32Array(Zs),s=new F(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function qu(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Yu(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function Lx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===dl||c===fl,h=c===Nr||c===Or;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Va(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Va(i));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dx(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let _ in d)t.update(d[_],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let _ in p){let g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,_=u.attributes.position,g=0;if(p!==null){let w=p.array;g=p.version;for(let y=0,M=w.length;y<M;y+=3){let R=w[y+0],v=w[y+1],x=w[y+2];d.push(R,v,v,x,x,R)}}else if(_!==void 0){let w=_.array;g=_.version;for(let y=0,M=w.length/3-1;y<M;y+=3){let R=y+0,v=y+1,x=y+2;d.push(R,v,v,x,x,R)}}else return;let m=new(Ld(d)?Fa:Oa)(d,1);m.version=g;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ux(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,_){i.drawElements(r,_,a,p*c),e.update(_,r,1)}function u(p,_,g){if(g===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,a,p*c,g),e.update(_,r,g)}function d(p,_,g){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/c,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,a,p,0,g);let f=0;for(let w=0;w<g;w++)f+=_[w];e.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function zx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nx(i,t){return i[0]-t[0]}function Ox(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Fx(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Oe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,g=r.get(h);if(g===void 0||g.count!==_){let S=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",S)};g!==void 0&&g.texture.dispose();let w=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],x=h.morphAttributes.color||[],A=0;w===!0&&(A=1),y===!0&&(A=2),M===!0&&(A=3);let E=h.attributes.position.count*A,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let b=new Float32Array(E*T*4*_),I=new Da(b,E,T,_);I.type=ws,I.needsUpdate=!0;let D=A*4;for(let L=0;L<_;L++){let U=R[L],N=v[L],z=x[L],B=E*T*4*L;for(let V=0;V<U.count;V++){let X=V*D;w===!0&&(o.fromBufferAttribute(U,V),b[B+X+0]=o.x,b[B+X+1]=o.y,b[B+X+2]=o.z,b[B+X+3]=0),y===!0&&(o.fromBufferAttribute(N,V),b[B+X+4]=o.x,b[B+X+5]=o.y,b[B+X+6]=o.z,b[B+X+7]=0),M===!0&&(o.fromBufferAttribute(z,V),b[B+X+8]=o.x,b[B+X+9]=o.y,b[B+X+10]=o.z,b[B+X+11]=z.itemSize===4?o.w:1)}}g={count:_,texture:I,size:new dt(E,T)},r.set(h,g),h.addEventListener("dispose",S)}let m=0;for(let w=0;w<d.length;w++)m+=d[w];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let p=d===void 0?0:d.length,_=n[h.id];if(_===void 0||_.length!==p){_=[];for(let y=0;y<p;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<p;y++){let M=_[y];M[0]=y,M[1]=d[y]}_.sort(Ox);for(let y=0;y<8;y++)y<p&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Nx);let g=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let M=a[y],R=M[0],v=M[1];R!==Number.MAX_SAFE_INTEGER&&v?(g&&h.getAttribute("morphTarget"+y)!==g[R]&&h.setAttribute("morphTarget"+y,g[R]),m&&h.getAttribute("morphNormal"+y)!==m[R]&&h.setAttribute("morphNormal"+y,m[R]),s[y]=v,f+=v):(g&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let w=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Bx(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Wa=class extends oi{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Js,h!==Js&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Js&&(n=vs),n===void 0&&h===Fr&&(n=$s),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zd=new oi,Nd=new Wa(1,1);Nd.compareFunction=Id;var Od=new Da,Fd=new _l,Bd=new ka,Zu=[],$u=[],Ju=new Float32Array(16),Ku=new Float32Array(9),ju=new Float32Array(4);function Gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zu[s];if(r===void 0&&(r=new Float32Array(s),Zu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function hn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function un(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cc(i,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2fv(this.addr,t),un(e,t)}}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;i.uniform3fv(this.addr,t),un(e,t)}}function Wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4fv(this.addr,t),un(e,t)}}function Xx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),un(e,n)}}function qx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Ku.set(n),i.uniformMatrix3fv(this.addr,!1,Ku),un(e,n)}}function Yx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),un(e,n)}}function Zx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2iv(this.addr,t),un(e,t)}}function Jx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3iv(this.addr,t),un(e,t)}}function Kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4iv(this.addr,t),un(e,t)}}function jx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;i.uniform2uiv(this.addr,t),un(e,t)}}function ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;i.uniform3uiv(this.addr,t),un(e,t)}}function ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;i.uniform4uiv(this.addr,t),un(e,t)}}function ny(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Nd:zd;e.setTexture2D(t||r,s)}function iy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fd,s)}function sy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bd,s)}function ry(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Od,s)}function oy(i){switch(i){case 5126:return kx;case 35664:return Gx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return $x;case 35668:case 35672:return Jx;case 35669:case 35673:return Kx;case 5125:return jx;case 36294:return Qx;case 36295:return ty;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}function ay(i,t){i.uniform1fv(this.addr,t)}function cy(i,t){let e=Gr(t,this.size,2);i.uniform2fv(this.addr,e)}function ly(i,t){let e=Gr(t,this.size,3);i.uniform3fv(this.addr,e)}function hy(i,t){let e=Gr(t,this.size,4);i.uniform4fv(this.addr,e)}function uy(i,t){let e=Gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dy(i,t){let e=Gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fy(i,t){let e=Gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function py(i,t){i.uniform1iv(this.addr,t)}function my(i,t){i.uniform2iv(this.addr,t)}function gy(i,t){i.uniform3iv(this.addr,t)}function xy(i,t){i.uniform4iv(this.addr,t)}function yy(i,t){i.uniform1uiv(this.addr,t)}function _y(i,t){i.uniform2uiv(this.addr,t)}function Ey(i,t){i.uniform3uiv(this.addr,t)}function My(i,t){i.uniform4uiv(this.addr,t)}function vy(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zd,r[o])}function wy(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Fd,r[o])}function Ty(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bd,r[o])}function by(i,t,e){let n=this.cache,s=t.length,r=cc(e,s);hn(n,r)||(i.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Od,r[o])}function Sy(i){switch(i){case 5126:return ay;case 35664:return cy;case 35665:return ly;case 35666:return hy;case 35674:return uy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return xy;case 5125:return yy;case 36294:return _y;case 36295:return Ey;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return by}}var vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=oy(e.type)}},wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sy(e.type)}},Tl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},sl=/(\w+)(\])?(\[|\.)?/g;function Qu(i,t){i.seq.push(t),i.map[t.id]=t}function Ry(i,t,e){let n=i.name,s=n.length;for(sl.lastIndex=0;;){let r=sl.exec(n),o=sl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Qu(e,l===void 0?new vl(a,i,t):new wl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Tl(a),Qu(e,u)),e=u}}}var zr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ry(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function td(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ay=37297,Cy=0;function Py(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Iy(i){let t=be.getPrimaries(be.workingColorSpace),e=be.getPrimaries(i),n;switch(t===e?n="":t===Aa&&e===Ra?n="LinearDisplayP3ToLinearSRGB":t===Ra&&e===Aa&&(n="LinearSRGBToLinearDisplayP3"),i){case rs:case ac:return[n,"LinearTransferOETF"];case He:case ch:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ed(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Py(i.getShaderSource(t),o)}else return s}function Ly(i,t){let e=Iy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hy(i,t){let e;switch(t){case Bp:e="Linear";break;case kp:e="Reinhard";break;case Gp:e="OptimizedCineon";break;case Vp:e="ACESFilmic";break;case Xp:e="AgX";break;case Wp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Dy(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function Uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Lr).join(`
`)}function zy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ny(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Lr(i){return i!==""}function nd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function id(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(i){return i.replace(Oy,By)}var Fy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function By(i,t){let e=re[t];if(e===void 0){let n=Fy.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bl(e)}var ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(i){return i.replace(ky,Gy)}function Gy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Md?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ns&&(t="SHADOWMAP_TYPE_VSM"),t}function Wy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Nr:case Or:t="ENVMAP_TYPE_CUBE";break;case oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Or:t="ENVMAP_MODE_REFRACTION";break}return t}function qy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sh:t="ENVMAP_BLENDING_MULTIPLY";break;case Op:t="ENVMAP_BLENDING_MIX";break;case Fp:t="ENVMAP_BLENDING_ADD";break}return t}function Yy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Vy(e),l=Wy(e),h=Xy(e),u=qy(e),d=Yy(e),p=e.isWebGL2?"":Dy(e),_=Uy(e),g=zy(r),m=s.createProgram(),f,w,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),f.length>0&&(f+=`
`),w=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),w.length>0&&(w+=`
`)):(f=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),w=[p,rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bs?"#define TONE_MAPPING":"",e.toneMapping!==bs?re.tonemapping_pars_fragment:"",e.toneMapping!==bs?Hy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Ly("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=bl(o),o=nd(o,e),o=id(o,e),a=bl(a),a=nd(a,e),a=id(a,e),o=sd(o),a=sd(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let M=y+f+o,R=y+w+a,v=td(s,s.VERTEX_SHADER,M),x=td(s,s.FRAGMENT_SHADER,R);s.attachShader(m,v),s.attachShader(m,x),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function A(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(m).trim(),S=s.getShaderInfoLog(v).trim(),L=s.getShaderInfoLog(x).trim(),U=!0,N=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,v,x);else{let z=ed(s,v,"vertex"),B=ed(s,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+D+`
`+z+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(S===""||L==="")&&(N=!1);N&&(I.diagnostics={runnable:U,programLog:D,vertexShader:{log:S,prefix:f},fragmentShader:{log:L,prefix:w}})}s.deleteShader(v),s.deleteShader(x),E=new zr(s,m),T=Ny(s,m)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(m,Ay)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cy++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=x,this}var $y=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Rl(t),e.set(t,n)),n}},Rl=class{constructor(t){this.id=$y++,this.code=t,this.usedTimes=0}};function Jy(i,t,e,n,s,r,o){let a=new Na,c=new Sl,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function m(E,T,b,I,D){let S=I.fog,L=D.geometry,U=E.isMeshStandardMaterial?I.environment:null,N=(E.isMeshStandardMaterial?e:t).get(E.envMap||U),z=N&&N.mapping===oc?N.image.height:null,B=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,X=V!==void 0?V.length:0,nt=0;L.morphAttributes.position!==void 0&&(nt=1),L.morphAttributes.normal!==void 0&&(nt=2),L.morphAttributes.color!==void 0&&(nt=3);let q,j,ut,Tt;if(B){let Ce=Di[B];q=Ce.vertexShader,j=Ce.fragmentShader}else q=E.vertexShader,j=E.fragmentShader,c.update(E),ut=c.getVertexShaderID(E),Tt=c.getFragmentShaderID(E);let yt=i.getRenderTarget(),Bt=D.isInstancedMesh===!0,qt=D.isBatchedMesh===!0,bt=!!E.map,Ot=!!E.matcap,G=!!N,at=!!E.aoMap,Q=!!E.lightMap,lt=!!E.bumpMap,et=!!E.normalMap,Pt=!!E.displacementMap,gt=!!E.emissiveMap,H=!!E.metalnessMap,P=!!E.roughnessMap,Z=E.anisotropy>0,rt=E.clearcoat>0,ot=E.iridescence>0,it=E.sheen>0,Dt=E.transmission>0,vt=Z&&!!E.anisotropyMap,St=rt&&!!E.clearcoatMap,Gt=rt&&!!E.clearcoatNormalMap,$t=rt&&!!E.clearcoatRoughnessMap,ct=ot&&!!E.iridescenceMap,te=ot&&!!E.iridescenceThicknessMap,kt=it&&!!E.sheenColorMap,Jt=it&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,Ct=!!E.specularColorMap,Kt=!!E.specularIntensityMap,Ee=Dt&&!!E.transmissionMap,tt=Dt&&!!E.thicknessMap,Yt=!!E.gradientMap,_t=!!E.alphaMap,O=E.alphaTest>0,st=!!E.alphaHash,mt=!!E.extensions,Lt=!!L.attributes.uv1,Et=!!L.attributes.uv2,ge=!!L.attributes.uv3,ye=bs;return E.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ye=i.toneMapping),{isWebGL2:h,shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:j,defines:E.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:qt,instancing:Bt,instancingColor:Bt&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:rs,map:bt,matcap:Ot,envMap:G,envMapMode:G&&N.mapping,envMapCubeUVHeight:z,aoMap:at,lightMap:Q,bumpMap:lt,normalMap:et,displacementMap:d&&Pt,emissiveMap:gt,normalMapObjectSpace:et&&E.normalMapType===nm,normalMapTangentSpace:et&&E.normalMapType===ah,metalnessMap:H,roughnessMap:P,anisotropy:Z,anisotropyMap:vt,clearcoat:rt,clearcoatMap:St,clearcoatNormalMap:Gt,clearcoatRoughnessMap:$t,iridescence:ot,iridescenceMap:ct,iridescenceThicknessMap:te,sheen:it,sheenColorMap:kt,sheenRoughnessMap:Jt,specularMap:Ft,specularColorMap:Ct,specularIntensityMap:Kt,transmission:Dt,transmissionMap:Ee,thicknessMap:tt,gradientMap:Yt,opaque:E.transparent===!1&&E.blending===Dr,alphaMap:_t,alphaTest:O,alphaHash:st,combine:E.combine,mapUv:bt&&g(E.map.channel),aoMapUv:at&&g(E.aoMap.channel),lightMapUv:Q&&g(E.lightMap.channel),bumpMapUv:lt&&g(E.bumpMap.channel),normalMapUv:et&&g(E.normalMap.channel),displacementMapUv:Pt&&g(E.displacementMap.channel),emissiveMapUv:gt&&g(E.emissiveMap.channel),metalnessMapUv:H&&g(E.metalnessMap.channel),roughnessMapUv:P&&g(E.roughnessMap.channel),anisotropyMapUv:vt&&g(E.anisotropyMap.channel),clearcoatMapUv:St&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&g(E.sheenRoughnessMap.channel),specularMapUv:Ft&&g(E.specularMap.channel),specularColorMapUv:Ct&&g(E.specularColorMap.channel),specularIntensityMapUv:Kt&&g(E.specularIntensityMap.channel),transmissionMapUv:Ee&&g(E.transmissionMap.channel),thicknessMapUv:tt&&g(E.thicknessMap.channel),alphaMapUv:_t&&g(E.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(et||Z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:Et,vertexUv3s:ge,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(bt||_t),fog:!!S,useFog:E.fog===!0,fogExp2:S&&S.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&E.map.isVideoTexture===!0&&be.getTransfer(E.map.colorSpace)===Le,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ce,flipSided:E.side===Un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:mt&&E.extensions.derivatives===!0,extensionFragDepth:mt&&E.extensions.fragDepth===!0,extensionDrawBuffers:mt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let b in E.defines)T.push(b),T.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(w(T,E),y(T,E),T.push(i.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function w(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function y(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function M(E){let T=_[E.type],b;if(T){let I=Di[T];b=hh.clone(I.uniforms)}else b=E.uniforms;return b}function R(E,T){let b;for(let I=0,D=l.length;I<D;I++){let S=l[I];if(S.cacheKey===T){b=S,++b.usedTimes;break}}return b===void 0&&(b=new Zy(i,T,E,r),l.push(b)),b}function v(E){if(--E.usedTimes===0){let T=l.indexOf(E);l[T]=l[l.length-1],l.pop(),E.destroy()}}function x(E){c.remove(E)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:v,releaseShaderCache:x,programs:l,dispose:A}}function Ky(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function jy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function od(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ad(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,_,g,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function a(u,d,p,_,g,m){let f=o(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,_,g,m){let f=o(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||jy),n.length>1&&n.sort(d||od),s.length>1&&s.sort(d||od)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Qy(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ad,i.set(n,[o])):s>=r.length?(o=new ad,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function t_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new K};break;case"SpotLight":e={position:new F,direction:new F,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new K,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new K,groundColor:new K};break;case"RectAreaLight":e={color:new K,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var n_=0;function i_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function s_(i,t){let e=new t_,n=e_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new Fe,a=new Fe;function c(h,u){let d=0,p=0,_=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let g=0,m=0,f=0,w=0,y=0,M=0,R=0,v=0,x=0,A=0,E=0;h.sort(i_);let T=u===!0?Math.PI:1;for(let I=0,D=h.length;I<D;I++){let S=h[I],L=S.color,U=S.intensity,N=S.distance,z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)d+=L.r*U*T,p+=L.g*U*T,_+=L.b*U*T;else if(S.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(S.sh.coefficients[B],U);E++}else if(S.isDirectionalLight){let B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity*T),S.castShadow){let V=S.shadow,X=n.get(S);X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,s.directionalShadow[g]=X,s.directionalShadowMap[g]=z,s.directionalShadowMatrix[g]=S.shadow.matrix,M++}s.directional[g]=B,g++}else if(S.isSpotLight){let B=e.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(L).multiplyScalar(U*T),B.distance=N,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,s.spot[f]=B;let V=S.shadow;if(S.map&&(s.spotLightMap[x]=S.map,x++,V.updateMatrices(S),S.castShadow&&A++),s.spotLightMatrix[f]=V.matrix,S.castShadow){let X=n.get(S);X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,s.spotShadow[f]=X,s.spotShadowMap[f]=z,v++}f++}else if(S.isRectAreaLight){let B=e.get(S);B.color.copy(L).multiplyScalar(U),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),s.rectArea[w]=B,w++}else if(S.isPointLight){let B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity*T),B.distance=S.distance,B.decay=S.decay,S.castShadow){let V=S.shadow,X=n.get(S);X.shadowBias=V.bias,X.shadowNormalBias=V.normalBias,X.shadowRadius=V.radius,X.shadowMapSize=V.mapSize,X.shadowCameraNear=V.camera.near,X.shadowCameraFar=V.camera.far,s.pointShadow[m]=X,s.pointShadowMap[m]=z,s.pointShadowMatrix[m]=S.shadow.matrix,R++}s.point[m]=B,m++}else if(S.isHemisphereLight){let B=e.get(S);B.skyColor.copy(S.color).multiplyScalar(U*T),B.groundColor.copy(S.groundColor).multiplyScalar(U*T),s.hemi[y]=B,y++}}w>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;let b=s.hash;(b.directionalLength!==g||b.pointLength!==m||b.spotLength!==f||b.rectAreaLength!==w||b.hemiLength!==y||b.numDirectionalShadows!==M||b.numPointShadows!==R||b.numSpotShadows!==v||b.numSpotMaps!==x||b.numLightProbes!==E)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=w,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=v,s.spotShadowMap.length=v,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=v+x-A,s.spotLightMap.length=x,s.numSpotLightShadowsWithMaps=A,s.numLightProbes=E,b.directionalLength=g,b.pointLength=m,b.spotLength=f,b.rectAreaLength=w,b.hemiLength=y,b.numDirectionalShadows=M,b.numPointShadows=R,b.numSpotShadows=v,b.numSpotMaps=x,b.numLightProbes=E,s.version=n_++)}function l(h,u){let d=0,p=0,_=0,g=0,m=0,f=u.matrixWorldInverse;for(let w=0,y=h.length;w<y;w++){let M=h[w];if(M.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),d++}else if(M.isSpotLight){let R=s.spot[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),_++}else if(M.isRectAreaLight){let R=s.rectArea[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let R=s.point[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function cd(i,t){let e=new s_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function r_(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new cd(i,t),e.set(r,[c])):o>=a.length?(c=new cd(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Al=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cl=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
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
}`;function c_(i,t,e){let n=new vo,s=new dt,r=new dt,o=new Oe,a=new Al({depthPacking:em}),c=new Cl,l={},h=e.maxTextureSize,u={[Ss]:Un,[Un]:Ss,[ce]:ce},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:o_,fragmentShader:a_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new oe;_.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new k(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md;let f=this.type;this.render=function(v,x,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;let E=i.getRenderTarget(),T=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ts),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=f!==ns&&this.type===ns,S=f===ns&&this.type!==ns;for(let L=0,U=v.length;L<U;L++){let N=v[L],z=N.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let B=z.getFrameExtents();if(s.multiply(B),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,z.mapSize.y=r.y)),z.map===null||D===!0||S===!0){let X=this.type!==ns?{minFilter:bn,magFilter:bn}:{};z.map!==null&&z.map.dispose(),z.map=new os(s.x,s.y,X),z.map.texture.name=N.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let V=z.getViewportCount();for(let X=0;X<V;X++){let nt=z.getViewport(X);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),I.viewport(o),z.updateMatrices(N,X),n=z.getFrustum(),M(x,A,z.camera,N,this.type)}z.isPointLightShadow!==!0&&this.type===ns&&w(z,A),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,b)};function w(v,x){let A=t.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new os(s.x,s.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(x,null,A,d,g,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(x,null,A,p,g,null)}function y(v,x,A,E){let T=null,b=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(b!==void 0)T=b;else if(T=A.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){let I=T.uuid,D=x.uuid,S=l[I];S===void 0&&(S={},l[I]=S);let L=S[D];L===void 0&&(L=T.clone(),S[D]=L,x.addEventListener("dispose",R)),T=L}if(T.visible=x.visible,T.wireframe=x.wireframe,E===ns?T.side=x.shadowSide!==null?x.shadowSide:x.side:T.side=x.shadowSide!==null?x.shadowSide:u[x.side],T.alphaMap=x.alphaMap,T.alphaTest=x.alphaTest,T.map=x.map,T.clipShadows=x.clipShadows,T.clippingPlanes=x.clippingPlanes,T.clipIntersection=x.clipIntersection,T.displacementMap=x.displacementMap,T.displacementScale=x.displacementScale,T.displacementBias=x.displacementBias,T.wireframeLinewidth=x.wireframeLinewidth,T.linewidth=x.linewidth,A.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let I=i.properties.get(T);I.light=A}return T}function M(v,x,A,E,T){if(v.visible===!1)return;if(v.layers.test(x.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&T===ns)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);let D=t.update(v),S=v.material;if(Array.isArray(S)){let L=D.groups;for(let U=0,N=L.length;U<N;U++){let z=L[U],B=S[z.materialIndex];if(B&&B.visible){let V=y(v,B,E,T);v.onBeforeShadow(i,v,x,A,D,V,z),i.renderBufferDirect(A,null,D,V,v,z),v.onAfterShadow(i,v,x,A,D,V,z)}}}else if(S.visible){let L=y(v,S,E,T);v.onBeforeShadow(i,v,x,A,D,L,null),i.renderBufferDirect(A,null,D,L,v,null),v.onAfterShadow(i,v,x,A,D,L,null)}}let I=v.children;for(let D=0,S=I.length;D<S;D++)M(I[D],x,A,E,T)}function R(v){v.target.removeEventListener("dispose",R);for(let A in l){let E=l[A],T=v.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function l_(i,t,e){let n=e.isWebGL2;function s(){let O=!1,st=new Oe,mt=null,Lt=new Oe(0,0,0,0);return{setMask:function(Et){mt!==Et&&!O&&(i.colorMask(Et,Et,Et,Et),mt=Et)},setLocked:function(Et){O=Et},setClear:function(Et,ge,ye,Ie,Ce){Ce===!0&&(Et*=Ie,ge*=Ie,ye*=Ie),st.set(Et,ge,ye,Ie),Lt.equals(st)===!1&&(i.clearColor(Et,ge,ye,Ie),Lt.copy(st))},reset:function(){O=!1,mt=null,Lt.set(-1,0,0,0)}}}function r(){let O=!1,st=null,mt=null,Lt=null;return{setTest:function(Et){Et?qt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Et){st!==Et&&!O&&(i.depthMask(Et),st=Et)},setFunc:function(Et){if(mt!==Et){switch(Et){case Ip:i.depthFunc(i.NEVER);break;case Lp:i.depthFunc(i.ALWAYS);break;case Hp:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case Dp:i.depthFunc(i.EQUAL);break;case Up:i.depthFunc(i.GEQUAL);break;case zp:i.depthFunc(i.GREATER);break;case Np:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Et}},setLocked:function(Et){O=Et},setClear:function(Et){Lt!==Et&&(i.clearDepth(Et),Lt=Et)},reset:function(){O=!1,st=null,mt=null,Lt=null}}}function o(){let O=!1,st=null,mt=null,Lt=null,Et=null,ge=null,ye=null,Ie=null,Ce=null;return{setTest:function(le){O||(le?qt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(le){st!==le&&!O&&(i.stencilMask(le),st=le)},setFunc:function(le,sn,Fn){(mt!==le||Lt!==sn||Et!==Fn)&&(i.stencilFunc(le,sn,Fn),mt=le,Lt=sn,Et=Fn)},setOp:function(le,sn,Fn){(ge!==le||ye!==sn||Ie!==Fn)&&(i.stencilOp(le,sn,Fn),ge=le,ye=sn,Ie=Fn)},setLocked:function(le){O=le},setClear:function(le){Ce!==le&&(i.clearStencil(le),Ce=le)},reset:function(){O=!1,st=null,mt=null,Lt=null,Et=null,ge=null,ye=null,Ie=null,Ce=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},p={},_=new WeakMap,g=[],m=null,f=!1,w=null,y=null,M=null,R=null,v=null,x=null,A=null,E=new K(0,0,0),T=0,b=!1,I=null,D=null,S=null,L=null,U=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,B=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=B>=2);let X=null,nt={},q=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ut=new Oe().fromArray(q),Tt=new Oe().fromArray(j);function yt(O,st,mt,Lt){let Et=new Uint8Array(4),ge=i.createTexture();i.bindTexture(O,ge),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<mt;ye++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(st,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(st+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return ge}let Bt={};Bt[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Bt[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),qt(i.DEPTH_TEST),c.setFunc(wa),gt(!1),H(Gh),qt(i.CULL_FACE),et(Ts);function qt(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function bt(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function Ot(O,st){return p[O]!==st?(i.bindFramebuffer(O,st),p[O]=st,n&&(O===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=st),O===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=st)),!0):!1}function G(O,st){let mt=g,Lt=!1;if(O)if(mt=_.get(st),mt===void 0&&(mt=[],_.set(st,mt)),O.isWebGLMultipleRenderTargets){let Et=O.texture;if(mt.length!==Et.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,ye=Et.length;ge<ye;ge++)mt[ge]=i.COLOR_ATTACHMENT0+ge;mt.length=Et.length,Lt=!0}}else mt[0]!==i.COLOR_ATTACHMENT0&&(mt[0]=i.COLOR_ATTACHMENT0,Lt=!0);else mt[0]!==i.BACK&&(mt[0]=i.BACK,Lt=!0);Lt&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function at(O){return m!==O?(i.useProgram(O),m=O,!0):!1}let Q={[Ys]:i.FUNC_ADD,[gp]:i.FUNC_SUBTRACT,[xp]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[Xh]=i.MIN,Q[qh]=i.MAX;else{let O=t.get("EXT_blend_minmax");O!==null&&(Q[Xh]=O.MIN_EXT,Q[qh]=O.MAX_EXT)}let lt={[yp]:i.ZERO,[_p]:i.ONE,[Ep]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[Sp]:i.SRC_ALPHA_SATURATE,[Tp]:i.DST_COLOR,[vp]:i.DST_ALPHA,[Mp]:i.ONE_MINUS_SRC_COLOR,[ul]:i.ONE_MINUS_SRC_ALPHA,[bp]:i.ONE_MINUS_DST_COLOR,[wp]:i.ONE_MINUS_DST_ALPHA,[Rp]:i.CONSTANT_COLOR,[Ap]:i.ONE_MINUS_CONSTANT_COLOR,[Cp]:i.CONSTANT_ALPHA,[Pp]:i.ONE_MINUS_CONSTANT_ALPHA};function et(O,st,mt,Lt,Et,ge,ye,Ie,Ce,le){if(O===Ts){f===!0&&(bt(i.BLEND),f=!1);return}if(f===!1&&(qt(i.BLEND),f=!0),O!==mp){if(O!==w||le!==b){if((y!==Ys||v!==Ys)&&(i.blendEquation(i.FUNC_ADD),y=Ys,v=Ys),le)switch(O){case Dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,R=null,x=null,A=null,E.set(0,0,0),T=0,w=O,b=le}return}Et=Et||st,ge=ge||mt,ye=ye||Lt,(st!==y||Et!==v)&&(i.blendEquationSeparate(Q[st],Q[Et]),y=st,v=Et),(mt!==M||Lt!==R||ge!==x||ye!==A)&&(i.blendFuncSeparate(lt[mt],lt[Lt],lt[ge],lt[ye]),M=mt,R=Lt,x=ge,A=ye),(Ie.equals(E)===!1||Ce!==T)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Ce),E.copy(Ie),T=Ce),w=O,b=!1}function Pt(O,st){O.side===ce?bt(i.CULL_FACE):qt(i.CULL_FACE);let mt=O.side===Un;st&&(mt=!mt),gt(mt),O.blending===Dr&&O.transparent===!1?et(Ts):et(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),a.setMask(O.colorWrite);let Lt=O.stencilWrite;l.setTest(Lt),Lt&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?qt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function H(O){O!==fp?(qt(i.CULL_FACE),O!==D&&(O===Gh?i.cullFace(i.BACK):O===pp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),D=O}function P(O){O!==S&&(z&&i.lineWidth(O),S=O)}function Z(O,st,mt){O?(qt(i.POLYGON_OFFSET_FILL),(L!==st||U!==mt)&&(i.polygonOffset(st,mt),L=st,U=mt)):bt(i.POLYGON_OFFSET_FILL)}function rt(O){O?qt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ot(O){O===void 0&&(O=i.TEXTURE0+N-1),X!==O&&(i.activeTexture(O),X=O)}function it(O,st,mt){mt===void 0&&(X===null?mt=i.TEXTURE0+N-1:mt=X);let Lt=nt[mt];Lt===void 0&&(Lt={type:void 0,texture:void 0},nt[mt]=Lt),(Lt.type!==O||Lt.texture!==st)&&(X!==mt&&(i.activeTexture(mt),X=mt),i.bindTexture(O,st||Bt[O]),Lt.type=O,Lt.texture=st)}function Dt(){let O=nt[X];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Jt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Kt(O){ut.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ut.copy(O))}function Ee(O){Tt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Tt.copy(O))}function tt(O,st){let mt=u.get(st);mt===void 0&&(mt=new WeakMap,u.set(st,mt));let Lt=mt.get(O);Lt===void 0&&(Lt=i.getUniformBlockIndex(st,O.name),mt.set(O,Lt))}function Yt(O,st){let Lt=u.get(st).get(O);h.get(st)!==Lt&&(i.uniformBlockBinding(st,Lt,O.__bindingPointIndex),h.set(st,Lt))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},X=null,nt={},p={},_=new WeakMap,g=[],m=null,f=!1,w=null,y=null,M=null,R=null,v=null,x=null,A=null,E=new K(0,0,0),T=0,b=!1,I=null,D=null,S=null,L=null,U=null,ut.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:qt,disable:bt,bindFramebuffer:Ot,drawBuffers:G,useProgram:at,setBlending:et,setMaterial:Pt,setFlipSided:gt,setCullFace:H,setLineWidth:P,setPolygonOffset:Z,setScissorTest:rt,activeTexture:ot,bindTexture:it,unbindTexture:Dt,compressedTexImage2D:vt,compressedTexImage3D:St,texImage2D:Ft,texImage3D:Ct,updateUBOMapping:tt,uniformBlockBinding:Yt,texStorage2D:kt,texStorage3D:Jt,texSubImage2D:Gt,texSubImage3D:$t,compressedTexSubImage2D:ct,compressedTexSubImage3D:te,scissor:Kt,viewport:Ee,reset:_t}}function h_(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(H,P){return p?new OffscreenCanvas(H,P):Ia("canvas")}function g(H,P,Z,rt){let ot=1;if((H.width>rt||H.height>rt)&&(ot=rt/Math.max(H.width,H.height)),ot<1||P===!0)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap){let it=P?Pa:Math.floor,Dt=it(ot*H.width),vt=it(ot*H.height);u===void 0&&(u=_(Dt,vt));let St=Z?_(Dt,vt):u;return St.width=Dt,St.height=vt,St.getContext("2d").drawImage(H,0,0,Dt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+Dt+"x"+vt+")."),St}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),H;return H}function m(H){return xl(H.width)&&xl(H.height)}function f(H){return a?!1:H.wrapS!==wi||H.wrapT!==wi||H.minFilter!==bn&&H.minFilter!==Vn}function w(H,P){return H.generateMipmaps&&P&&H.minFilter!==bn&&H.minFilter!==Vn}function y(H){i.generateMipmap(H)}function M(H,P,Z,rt,ot=!1){if(a===!1)return P;if(H!==null){if(i[H]!==void 0)return i[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let it=P;if(P===i.RED&&(Z===i.FLOAT&&(it=i.R32F),Z===i.HALF_FLOAT&&(it=i.R16F),Z===i.UNSIGNED_BYTE&&(it=i.R8)),P===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(it=i.R8UI),Z===i.UNSIGNED_SHORT&&(it=i.R16UI),Z===i.UNSIGNED_INT&&(it=i.R32UI),Z===i.BYTE&&(it=i.R8I),Z===i.SHORT&&(it=i.R16I),Z===i.INT&&(it=i.R32I)),P===i.RG&&(Z===i.FLOAT&&(it=i.RG32F),Z===i.HALF_FLOAT&&(it=i.RG16F),Z===i.UNSIGNED_BYTE&&(it=i.RG8)),P===i.RGBA){let Dt=ot?Sa:be.getTransfer(rt);Z===i.FLOAT&&(it=i.RGBA32F),Z===i.HALF_FLOAT&&(it=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(it=Dt===Le?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function R(H,P,Z){return w(H,Z)===!0||H.isFramebufferTexture&&H.minFilter!==bn&&H.minFilter!==Vn?Math.log2(Math.max(P.width,P.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?P.mipmaps.length:1}function v(H){return H===bn||H===Yh||H===Pc?i.NEAREST:i.LINEAR}function x(H){let P=H.target;P.removeEventListener("dispose",x),E(P),P.isVideoTexture&&h.delete(P)}function A(H){let P=H.target;P.removeEventListener("dispose",A),b(P)}function E(H){let P=n.get(H);if(P.__webglInit===void 0)return;let Z=H.source,rt=d.get(Z);if(rt){let ot=rt[P.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&T(H),Object.keys(rt).length===0&&d.delete(Z)}n.remove(H)}function T(H){let P=n.get(H);i.deleteTexture(P.__webglTexture);let Z=H.source,rt=d.get(Z);delete rt[P.__cacheKey],o.memory.textures--}function b(H){let P=H.texture,Z=n.get(H),rt=n.get(P);if(rt.__webglTexture!==void 0&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(Z.__webglFramebuffer[ot]))for(let it=0;it<Z.__webglFramebuffer[ot].length;it++)i.deleteFramebuffer(Z.__webglFramebuffer[ot][it]);else i.deleteFramebuffer(Z.__webglFramebuffer[ot]);Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer[ot])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ot=0;ot<Z.__webglFramebuffer.length;ot++)i.deleteFramebuffer(Z.__webglFramebuffer[ot]);else i.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ot=0;ot<Z.__webglColorRenderbuffer.length;ot++)Z.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(Z.__webglColorRenderbuffer[ot]);Z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(H.isWebGLMultipleRenderTargets)for(let ot=0,it=P.length;ot<it;ot++){let Dt=n.get(P[ot]);Dt.__webglTexture&&(i.deleteTexture(Dt.__webglTexture),o.memory.textures--),n.remove(P[ot])}n.remove(P),n.remove(H)}let I=0;function D(){I=0}function S(){let H=I;return H>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+s.maxTextures),I+=1,H}function L(H){let P=[];return P.push(H.wrapS),P.push(H.wrapT),P.push(H.wrapR||0),P.push(H.magFilter),P.push(H.minFilter),P.push(H.anisotropy),P.push(H.internalFormat),P.push(H.format),P.push(H.type),P.push(H.generateMipmaps),P.push(H.premultiplyAlpha),P.push(H.flipY),P.push(H.unpackAlignment),P.push(H.colorSpace),P.join()}function U(H,P){let Z=n.get(H);if(H.isVideoTexture&&Pt(H),H.isRenderTargetTexture===!1&&H.version>0&&Z.__version!==H.version){let rt=H.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(Z,H,P);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+P)}function N(H,P){let Z=n.get(H);if(H.version>0&&Z.__version!==H.version){ut(Z,H,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+P)}function z(H,P){let Z=n.get(H);if(H.version>0&&Z.__version!==H.version){ut(Z,H,P);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+P)}function B(H,P){let Z=n.get(H);if(H.version>0&&Z.__version!==H.version){Tt(Z,H,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+P)}let V={[pl]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[ml]:i.MIRRORED_REPEAT},X={[bn]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Pc]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[qp]:i.LINEAR_MIPMAP_NEAREST,[_o]:i.LINEAR_MIPMAP_LINEAR},nt={[im]:i.NEVER,[lm]:i.ALWAYS,[sm]:i.LESS,[Id]:i.LEQUAL,[rm]:i.EQUAL,[cm]:i.GEQUAL,[om]:i.GREATER,[am]:i.NOTEQUAL};function q(H,P,Z){if(Z?(i.texParameteri(H,i.TEXTURE_WRAP_S,V[P.wrapS]),i.texParameteri(H,i.TEXTURE_WRAP_T,V[P.wrapT]),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,V[P.wrapR]),i.texParameteri(H,i.TEXTURE_MAG_FILTER,X[P.magFilter]),i.texParameteri(H,i.TEXTURE_MIN_FILTER,X[P.minFilter])):(i.texParameteri(H,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(H,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)&&i.texParameteri(H,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==wi||P.wrapT!==wi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(H,i.TEXTURE_MAG_FILTER,v(P.magFilter)),i.texParameteri(H,i.TEXTURE_MIN_FILTER,v(P.minFilter)),P.minFilter!==bn&&P.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(H,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(H,i.TEXTURE_COMPARE_FUNC,nt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let rt=t.get("EXT_texture_filter_anisotropic");if(P.magFilter===bn||P.minFilter!==Pc&&P.minFilter!==_o||P.type===ws&&t.has("OES_texture_float_linear")===!1||a===!1&&P.type===Eo&&t.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(H,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function j(H,P){let Z=!1;H.__webglInit===void 0&&(H.__webglInit=!0,P.addEventListener("dispose",x));let rt=P.source,ot=d.get(rt);ot===void 0&&(ot={},d.set(rt,ot));let it=L(P);if(it!==H.__cacheKey){ot[it]===void 0&&(ot[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ot[it].usedTimes++;let Dt=ot[H.__cacheKey];Dt!==void 0&&(ot[H.__cacheKey].usedTimes--,Dt.usedTimes===0&&T(P)),H.__cacheKey=it,H.__webglTexture=ot[it].texture}return Z}function ut(H,P,Z){let rt=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(rt=i.TEXTURE_3D);let ot=j(H,P),it=P.source;e.bindTexture(rt,H.__webglTexture,i.TEXTURE0+Z);let Dt=n.get(it);if(it.version!==Dt.__version||ot===!0){e.activeTexture(i.TEXTURE0+Z);let vt=be.getPrimaries(be.workingColorSpace),St=P.colorSpace===pi?null:be.getPrimaries(P.colorSpace),Gt=P.colorSpace===pi||vt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let $t=f(P)&&m(P.image)===!1,ct=g(P.image,$t,!1,s.maxTextureSize);ct=gt(P,ct);let te=m(ct)||a,kt=r.convert(P.format,P.colorSpace),Jt=r.convert(P.type),Ft=M(P.internalFormat,kt,Jt,P.colorSpace,P.isVideoTexture);q(rt,P,te);let Ct,Kt=P.mipmaps,Ee=a&&P.isVideoTexture!==!0&&Ft!==Cd,tt=Dt.__version===void 0||ot===!0,Yt=R(P,ct,te);if(P.isDepthTexture)Ft=i.DEPTH_COMPONENT,a?P.type===ws?Ft=i.DEPTH_COMPONENT32F:P.type===vs?Ft=i.DEPTH_COMPONENT24:P.type===$s?Ft=i.DEPTH24_STENCIL8:Ft=i.DEPTH_COMPONENT16:P.type===ws&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Js&&Ft===i.DEPTH_COMPONENT&&P.type!==rh&&P.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=vs,Jt=r.convert(P.type)),P.format===Fr&&Ft===i.DEPTH_COMPONENT&&(Ft=i.DEPTH_STENCIL,P.type!==$s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=$s,Jt=r.convert(P.type))),tt&&(Ee?e.texStorage2D(i.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,kt,Jt,null));else if(P.isDataTexture)if(Kt.length>0&&te){Ee&&tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,Kt[0].width,Kt[0].height);for(let _t=0,O=Kt.length;_t<O;_t++)Ct=Kt[_t],Ee?e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,kt,Jt,Ct.data):e.texImage2D(i.TEXTURE_2D,_t,Ft,Ct.width,Ct.height,0,kt,Jt,Ct.data);P.generateMipmaps=!1}else Ee?(tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,kt,Jt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,kt,Jt,ct.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Ee&&tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,Ft,Kt[0].width,Kt[0].height,ct.depth);for(let _t=0,O=Kt.length;_t<O;_t++)Ct=Kt[_t],P.format!==Ti?kt!==null?Ee?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,ct.depth,kt,Ct.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,Ft,Ct.width,Ct.height,ct.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,ct.depth,kt,Jt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,Ft,Ct.width,Ct.height,ct.depth,0,kt,Jt,Ct.data)}else{Ee&&tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,Kt[0].width,Kt[0].height);for(let _t=0,O=Kt.length;_t<O;_t++)Ct=Kt[_t],P.format!==Ti?kt!==null?Ee?e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,kt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,Ft,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,kt,Jt,Ct.data):e.texImage2D(i.TEXTURE_2D,_t,Ft,Ct.width,Ct.height,0,kt,Jt,Ct.data)}else if(P.isDataArrayTexture)Ee?(tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,Ft,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,kt,Jt,ct.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,kt,Jt,ct.data);else if(P.isData3DTexture)Ee?(tt&&e.texStorage3D(i.TEXTURE_3D,Yt,Ft,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,kt,Jt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,kt,Jt,ct.data);else if(P.isFramebufferTexture){if(tt)if(Ee)e.texStorage2D(i.TEXTURE_2D,Yt,Ft,ct.width,ct.height);else{let _t=ct.width,O=ct.height;for(let st=0;st<Yt;st++)e.texImage2D(i.TEXTURE_2D,st,Ft,_t,O,0,kt,Jt,null),_t>>=1,O>>=1}}else if(Kt.length>0&&te){Ee&&tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,Kt[0].width,Kt[0].height);for(let _t=0,O=Kt.length;_t<O;_t++)Ct=Kt[_t],Ee?e.texSubImage2D(i.TEXTURE_2D,_t,0,0,kt,Jt,Ct):e.texImage2D(i.TEXTURE_2D,_t,Ft,kt,Jt,Ct);P.generateMipmaps=!1}else Ee?(tt&&e.texStorage2D(i.TEXTURE_2D,Yt,Ft,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Jt,ct)):e.texImage2D(i.TEXTURE_2D,0,Ft,kt,Jt,ct);w(P,te)&&y(rt),Dt.__version=it.version,P.onUpdate&&P.onUpdate(P)}H.__version=P.version}function Tt(H,P,Z){if(P.image.length!==6)return;let rt=j(H,P),ot=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+Z);let it=n.get(ot);if(ot.version!==it.__version||rt===!0){e.activeTexture(i.TEXTURE0+Z);let Dt=be.getPrimaries(be.workingColorSpace),vt=P.colorSpace===pi?null:be.getPrimaries(P.colorSpace),St=P.colorSpace===pi||Dt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Gt=P.isCompressedTexture||P.image[0].isCompressedTexture,$t=P.image[0]&&P.image[0].isDataTexture,ct=[];for(let _t=0;_t<6;_t++)!Gt&&!$t?ct[_t]=g(P.image[_t],!1,!0,s.maxCubemapSize):ct[_t]=$t?P.image[_t].image:P.image[_t],ct[_t]=gt(P,ct[_t]);let te=ct[0],kt=m(te)||a,Jt=r.convert(P.format,P.colorSpace),Ft=r.convert(P.type),Ct=M(P.internalFormat,Jt,Ft,P.colorSpace),Kt=a&&P.isVideoTexture!==!0,Ee=it.__version===void 0||rt===!0,tt=R(P,te,kt);q(i.TEXTURE_CUBE_MAP,P,kt);let Yt;if(Gt){Kt&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Ct,te.width,te.height);for(let _t=0;_t<6;_t++){Yt=ct[_t].mipmaps;for(let O=0;O<Yt.length;O++){let st=Yt[O];P.format!==Ti?Jt!==null?Kt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,O,0,0,st.width,st.height,Jt,st.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,O,Ct,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,O,0,0,st.width,st.height,Jt,Ft,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,O,Ct,st.width,st.height,0,Jt,Ft,st.data)}}}else{Yt=P.mipmaps,Kt&&Ee&&(Yt.length>0&&tt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Ct,ct[0].width,ct[0].height));for(let _t=0;_t<6;_t++)if($t){Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ct[_t].width,ct[_t].height,Jt,Ft,ct[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Ct,ct[_t].width,ct[_t].height,0,Jt,Ft,ct[_t].data);for(let O=0;O<Yt.length;O++){let mt=Yt[O].image[_t].image;Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,O+1,0,0,mt.width,mt.height,Jt,Ft,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,O+1,Ct,mt.width,mt.height,0,Jt,Ft,mt.data)}}else{Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Jt,Ft,ct[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Ct,Jt,Ft,ct[_t]);for(let O=0;O<Yt.length;O++){let st=Yt[O];Kt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,O+1,0,0,Jt,Ft,st.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,O+1,Ct,Jt,Ft,st.image[_t])}}}w(P,kt)&&y(i.TEXTURE_CUBE_MAP),it.__version=ot.version,P.onUpdate&&P.onUpdate(P)}H.__version=P.version}function yt(H,P,Z,rt,ot,it){let Dt=r.convert(Z.format,Z.colorSpace),vt=r.convert(Z.type),St=M(Z.internalFormat,Dt,vt,Z.colorSpace);if(!n.get(P).__hasExternalTextures){let $t=Math.max(1,P.width>>it),ct=Math.max(1,P.height>>it);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,it,St,$t,ct,P.depth,0,Dt,vt,null):e.texImage2D(ot,it,St,$t,ct,0,Dt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,H),et(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ot,n.get(Z).__webglTexture,0,lt(P)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ot,n.get(Z).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(H,P,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,H),P.depthBuffer&&!P.stencilBuffer){let rt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||et(P)){let ot=P.depthTexture;ot&&ot.isDepthTexture&&(ot.type===ws?rt=i.DEPTH_COMPONENT32F:ot.type===vs&&(rt=i.DEPTH_COMPONENT24));let it=lt(P);et(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,rt,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,it,rt,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,rt,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,H)}else if(P.depthBuffer&&P.stencilBuffer){let rt=lt(P);Z&&et(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,P.width,P.height):et(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,H)}else{let rt=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ot=0;ot<rt.length;ot++){let it=rt[ot],Dt=r.convert(it.format,it.colorSpace),vt=r.convert(it.type),St=M(it.internalFormat,Dt,vt,it.colorSpace),Gt=lt(P);Z&&et(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,P.width,P.height):et(P)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,St,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,St,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(H,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,H),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),U(P.depthTexture,0);let rt=n.get(P.depthTexture).__webglTexture,ot=lt(P);if(P.depthTexture.format===Js)et(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(P.depthTexture.format===Fr)et(P)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function bt(H){let P=n.get(H),Z=H.isWebGLCubeRenderTarget===!0;if(H.depthTexture&&!P.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");qt(P.__webglFramebuffer,H)}else if(Z){P.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[rt]),P.__webglDepthbuffer[rt]=i.createRenderbuffer(),Bt(P.__webglDepthbuffer[rt],H,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Bt(P.__webglDepthbuffer,H,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(H,P,Z){let rt=n.get(H);P!==void 0&&yt(rt.__webglFramebuffer,H,H.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&bt(H)}function G(H){let P=H.texture,Z=n.get(H),rt=n.get(P);H.addEventListener("dispose",A),H.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=P.version,o.memory.textures++);let ot=H.isWebGLCubeRenderTarget===!0,it=H.isWebGLMultipleRenderTargets===!0,Dt=m(H)||a;if(ot){Z.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(a&&P.mipmaps&&P.mipmaps.length>0){Z.__webglFramebuffer[vt]=[];for(let St=0;St<P.mipmaps.length;St++)Z.__webglFramebuffer[vt][St]=i.createFramebuffer()}else Z.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(a&&P.mipmaps&&P.mipmaps.length>0){Z.__webglFramebuffer=[];for(let vt=0;vt<P.mipmaps.length;vt++)Z.__webglFramebuffer[vt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(it)if(s.drawBuffers){let vt=H.texture;for(let St=0,Gt=vt.length;St<Gt;St++){let $t=n.get(vt[St]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&H.samples>0&&et(H)===!1){let vt=it?P:[P];Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let St=0;St<vt.length;St++){let Gt=vt[St];Z.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[St]);let $t=r.convert(Gt.format,Gt.colorSpace),ct=r.convert(Gt.type),te=M(Gt.internalFormat,$t,ct,Gt.colorSpace,H.isXRRenderTarget===!0),kt=lt(H);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,te,H.width,H.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Z.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),H.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(Z.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),q(i.TEXTURE_CUBE_MAP,P,Dt);for(let vt=0;vt<6;vt++)if(a&&P.mipmaps&&P.mipmaps.length>0)for(let St=0;St<P.mipmaps.length;St++)yt(Z.__webglFramebuffer[vt][St],H,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else yt(Z.__webglFramebuffer[vt],H,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);w(P,Dt)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){let vt=H.texture;for(let St=0,Gt=vt.length;St<Gt;St++){let $t=vt[St],ct=n.get($t);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),q(i.TEXTURE_2D,$t,Dt),yt(Z.__webglFramebuffer,H,$t,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),w($t,Dt)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(a?vt=H.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,rt.__webglTexture),q(vt,P,Dt),a&&P.mipmaps&&P.mipmaps.length>0)for(let St=0;St<P.mipmaps.length;St++)yt(Z.__webglFramebuffer[St],H,P,i.COLOR_ATTACHMENT0,vt,St);else yt(Z.__webglFramebuffer,H,P,i.COLOR_ATTACHMENT0,vt,0);w(P,Dt)&&y(vt),e.unbindTexture()}H.depthBuffer&&bt(H)}function at(H){let P=m(H)||a,Z=H.isWebGLMultipleRenderTargets===!0?H.texture:[H.texture];for(let rt=0,ot=Z.length;rt<ot;rt++){let it=Z[rt];if(w(it,P)){let Dt=H.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(it).__webglTexture;e.bindTexture(Dt,vt),y(Dt),e.unbindTexture()}}}function Q(H){if(a&&H.samples>0&&et(H)===!1){let P=H.isWebGLMultipleRenderTargets?H.texture:[H.texture],Z=H.width,rt=H.height,ot=i.COLOR_BUFFER_BIT,it=[],Dt=H.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(H),St=H.isWebGLMultipleRenderTargets===!0;if(St)for(let Gt=0;Gt<P.length;Gt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Gt=0;Gt<P.length;Gt++){it.push(i.COLOR_ATTACHMENT0+Gt),H.depthBuffer&&it.push(Dt);let $t=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if($t===!1&&(H.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),H.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),St&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Gt]),$t===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Dt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Dt])),St){let ct=n.get(P[Gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,Z,rt,0,0,Z,rt,ot,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Gt=0;Gt<P.length;Gt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[Gt]);let $t=n.get(P[Gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Gt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function lt(H){return Math.min(s.maxSamples,H.samples)}function et(H){let P=n.get(H);return a&&H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Pt(H){let P=o.render.frame;h.get(H)!==P&&(h.set(H,P),H.update())}function gt(H,P){let Z=H.colorSpace,rt=H.format,ot=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||H.format===gl||Z!==rs&&Z!==pi&&(be.getTransfer(Z)===Le?a===!1?t.has("EXT_sRGB")===!0&&rt===Ti?(H.format=gl,H.minFilter=Vn,H.generateMipmaps=!1):P=La.sRGBToLinear(P):(rt!==Ti||ot!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),P}this.allocateTextureUnit=S,this.resetTextureUnits=D,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=B,this.rebindTextures=Ot,this.setupRenderTarget=G,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=et}function u_(i,t,e){let n=e.isWebGL2;function s(r,o=pi){let a,c=be.getTransfer(o);if(r===Ui)return i.UNSIGNED_BYTE;if(r===Td)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Yp)return i.BYTE;if(r===Zp)return i.SHORT;if(r===rh)return i.UNSIGNED_SHORT;if(r===wd)return i.INT;if(r===vs)return i.UNSIGNED_INT;if(r===ws)return i.FLOAT;if(r===Eo)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===$p)return i.ALPHA;if(r===Ti)return i.RGBA;if(r===Jp)return i.LUMINANCE;if(r===Kp)return i.LUMINANCE_ALPHA;if(r===Js)return i.DEPTH_COMPONENT;if(r===Fr)return i.DEPTH_STENCIL;if(r===gl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===oh)return i.RED;if(r===Sd)return i.RED_INTEGER;if(r===jp)return i.RG;if(r===Rd)return i.RG_INTEGER;if(r===Ad)return i.RGBA_INTEGER;if(r===Ic||r===Lc||r===Hc||r===Dc)if(c===Le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ic)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ic)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===$h||r===Jh||r===Kh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Zh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$h)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===jh||r===Qh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===jh)return c===Le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Qh)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tu||r===eu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===cu||r===lu||r===hu||r===uu||r===du||r===fu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===tu)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eu)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nu)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===iu)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===su)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ru)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ou)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===au)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cu)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lu)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hu)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uu)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===du)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fu)return c===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uc||r===pu||r===mu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Uc)return c===Le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qp||r===gu||r===xu||r===yu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Uc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===gu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$s?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Pl=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},xt=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},d_={type:"move"},mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Il=class extends Rs{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null,g=e.getContextAttributes(),m=null,f=null,w=[],y=[],M=new dt,R=null,v=new Dn;v.layers.enable(1),v.viewport=new Oe;let x=new Dn;x.layers.enable(2),x.viewport=new Oe;let A=[v,x],E=new Pl;E.layers.enable(1),E.layers.enable(2);let T=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=w[q];return j===void 0&&(j=new mo,w[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=w[q];return j===void 0&&(j=new mo,w[q]=j),j.getGripSpace()},this.getHand=function(q){let j=w[q];return j===void 0&&(j=new mo,w[q]=j),j.getHandSpace()};function I(q){let j=y.indexOf(q.inputSource);if(j===-1)return;let ut=w[j];ut!==void 0&&(ut.update(q.inputSource,q.frame,l||o),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",S);for(let q=0;q<w.length;q++){let j=y[q];j!==null&&(y[q]=null,w[q].disconnect(j))}T=null,b=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",D),s.addEventListener("inputsourceschange",S),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new os(p.framebufferWidth,p.framebufferHeight,{format:Ti,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,ut=null,Tt=null;g.depth&&(Tt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=g.stencil?Fr:Js,ut=g.stencil?$s:vs);let yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new os(d.textureWidth,d.textureHeight,{format:Ti,type:Ui,depthTexture:new Wa(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let Bt=t.properties.get(f);Bt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function S(q){for(let j=0;j<q.removed.length;j++){let ut=q.removed[j],Tt=y.indexOf(ut);Tt>=0&&(y[Tt]=null,w[Tt].disconnect(ut))}for(let j=0;j<q.added.length;j++){let ut=q.added[j],Tt=y.indexOf(ut);if(Tt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=y.length){y.push(ut),Tt=Bt;break}else if(y[Bt]===null){y[Bt]=ut,Tt=Bt;break}if(Tt===-1)break}let yt=w[Tt];yt&&yt.connect(ut)}}let L=new F,U=new F;function N(q,j,ut){L.setFromMatrixPosition(j.matrixWorld),U.setFromMatrixPosition(ut.matrixWorld);let Tt=L.distanceTo(U),yt=j.projectionMatrix.elements,Bt=ut.projectionMatrix.elements,qt=yt[14]/(yt[10]-1),bt=yt[14]/(yt[10]+1),Ot=(yt[9]+1)/yt[5],G=(yt[9]-1)/yt[5],at=(yt[8]-1)/yt[0],Q=(Bt[8]+1)/Bt[0],lt=qt*at,et=qt*Q,Pt=Tt/(-at+Q),gt=Pt*-at;j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(Pt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let H=qt+Pt,P=bt+Pt,Z=lt-gt,rt=et+(Tt-gt),ot=Ot*bt/P*H,it=G*bt/P*H;q.projectionMatrix.makePerspective(Z,rt,ot,it,H,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function z(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;E.near=x.near=v.near=q.near,E.far=x.far=v.far=q.far,(T!==E.near||b!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,b=E.far);let j=q.parent,ut=E.cameras;z(E,j);for(let Tt=0;Tt<ut.length;Tt++)z(ut[Tt],j);ut.length===2?N(E,v,x):E.projectionMatrix.copy(v.projectionMatrix),B(q,E,j)};function B(q,j,ut){ut===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Mo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let V=null;function X(q,j){if(h=j.getViewerPose(l||o),_=j,h!==null){let ut=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let Tt=!1;ut.length!==E.cameras.length&&(E.cameras.length=0,Tt=!0);for(let yt=0;yt<ut.length;yt++){let Bt=ut[yt],qt=null;if(p!==null)qt=p.getViewport(Bt);else{let Ot=u.getViewSubImage(d,Bt);qt=Ot.viewport,yt===0&&(t.setRenderTargetTextures(f,Ot.colorTexture,d.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(f))}let bt=A[yt];bt===void 0&&(bt=new Dn,bt.layers.enable(yt),bt.viewport=new Oe,A[yt]=bt),bt.matrix.fromArray(Bt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Bt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(qt.x,qt.y,qt.width,qt.height),yt===0&&(E.matrix.copy(bt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Tt===!0&&E.cameras.push(bt)}}for(let ut=0;ut<w.length;ut++){let Tt=y[ut],yt=w[ut];Tt!==null&&yt!==void 0&&yt.update(Tt,j,l||o)}V&&V(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let nt=new Ud;nt.setAnimationLoop(X),this.setAnimationLoop=function(q){V=q},this.dispose=function(){}}};function f_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Dd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=t.get(f).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Un&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,y){let M=y.program;n.uniformBlockBinding(w,M)}function l(w,y){let M=s[w.id];M===void 0&&(_(w),M=h(w),s[w.id]=M,w.addEventListener("dispose",m));let R=y.program;n.updateUBOMapping(w,R);let v=t.render.frame;r[w.id]!==v&&(d(w),r[w.id]=v)}function h(w){let y=u();w.__bindingPointIndex=y;let M=i.createBuffer(),R=w.__size,v=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let y=s[w.id],M=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let v=0,x=M.length;v<x;v++){let A=Array.isArray(M[v])?M[v]:[M[v]];for(let E=0,T=A.length;E<T;E++){let b=A[E];if(p(b,v,E,R)===!0){let I=b.__offset,D=Array.isArray(b.value)?b.value:[b.value],S=0;for(let L=0;L<D.length;L++){let U=D[L],N=g(U);typeof U=="number"||typeof U=="boolean"?(b.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,I+S,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=0,b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=0,b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=0):(U.toArray(b.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,y,M,R){let v=w.value,x=y+"_"+M;if(R[x]===void 0)return typeof v=="number"||typeof v=="boolean"?R[x]=v:R[x]=v.clone(),!0;{let A=R[x];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return R[x]=v,!0}else if(A.equals(v)===!1)return A.copy(v),!0}return!1}function _(w){let y=w.uniforms,M=0,R=16;for(let x=0,A=y.length;x<A;x++){let E=Array.isArray(y[x])?y[x]:[y[x]];for(let T=0,b=E.length;T<b;T++){let I=E[T],D=Array.isArray(I.value)?I.value:[I.value];for(let S=0,L=D.length;S<L;S++){let U=D[S],N=g(U),z=M%R;z!==0&&R-z<N.boundary&&(M+=R-z),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=N.storage}}}let v=M%R;return v>0&&(M+=R-v),w.__size=M,w.__cache={},this}function g(w){let y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){let y=w.target;y.removeEventListener("dispose",m);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var wo=class{constructor(t={}){let{canvas:e=Tm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,f=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this._useLegacyLights=!1,this.toneMapping=bs,this.toneMappingExposure=1;let y=this,M=!1,R=0,v=0,x=null,A=-1,E=null,T=new Oe,b=new Oe,I=null,D=new K(0),S=0,L=e.width,U=e.height,N=1,z=null,B=null,V=new Oe(0,0,L,U),X=new Oe(0,0,L,U),nt=!1,q=new vo,j=!1,ut=!1,Tt=null,yt=new Fe,Bt=new dt,qt=new F,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return x===null?N:1}let G=n;function at(C,W){for(let Y=0;Y<C.length;Y++){let $=C[Y],J=e.getContext($,W);if(J!==null)return J}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nh}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",st,!1),G===null){let W=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&W.shift(),G=at(W,C),G===null)throw at(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,lt,et,Pt,gt,H,P,Z,rt,ot,it,Dt,vt,St,Gt,$t,ct,te,kt,Jt,Ft,Ct,Kt,Ee;function tt(){Q=new Hx(G),lt=new Rx(G,Q,t),Q.init(lt),Ct=new u_(G,Q,lt),et=new l_(G,Q,lt),Pt=new zx(G),gt=new Ky,H=new h_(G,Q,et,gt,lt,Ct,Pt),P=new Cx(y),Z=new Lx(y),rt=new Wm(G,lt),Kt=new bx(G,Q,rt,lt),ot=new Dx(G,rt,Pt,Kt),it=new Bx(G,ot,rt,Pt),kt=new Fx(G,lt,H),$t=new Ax(gt),Dt=new Jy(y,P,Z,Q,lt,Kt,$t),vt=new f_(y,gt),St=new Qy,Gt=new r_(Q,lt),te=new Tx(y,P,Z,et,it,d,c),ct=new c_(y,it,lt),Ee=new p_(G,Pt,lt,et),Jt=new Sx(G,Q,Pt,lt),Ft=new Ux(G,Q,Pt,lt),Pt.programs=Dt.programs,y.capabilities=lt,y.extensions=Q,y.properties=gt,y.renderLists=St,y.shadowMap=ct,y.state=et,y.info=Pt}tt();let Yt=new Il(y,G);this.xr=Yt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(C){C!==void 0&&(N=C,this.setSize(L,U,!1))},this.getSize=function(C){return C.set(L,U)},this.setSize=function(C,W,Y=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=C,U=W,e.width=Math.floor(C*N),e.height=Math.floor(W*N),Y===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(L*N,U*N).floor()},this.setDrawingBufferSize=function(C,W,Y){L=C,U=W,N=Y,e.width=Math.floor(C*Y),e.height=Math.floor(W*Y),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,W,Y,$){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,W,Y,$),et.viewport(T.copy(V).multiplyScalar(N).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,W,Y,$){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,W,Y,$),et.scissor(b.copy(X).multiplyScalar(N).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){et.setScissorTest(nt=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(C=!0,W=!0,Y=!0){let $=0;if(C){let J=!1;if(x!==null){let At=x.texture.format;J=At===Ad||At===Rd||At===Sd}if(J){let At=x.texture.type,Nt=At===Ui||At===vs||At===rh||At===$s||At===Td||At===bd,Xt=te.getClearColor(),jt=te.getClearAlpha(),ae=Xt.r,ee=Xt.g,ne=Xt.b;Nt?(p[0]=ae,p[1]=ee,p[2]=ne,p[3]=jt,G.clearBufferuiv(G.COLOR,0,p)):(_[0]=ae,_[1]=ee,_[2]=ne,_[3]=jt,G.clearBufferiv(G.COLOR,0,_))}else $|=G.COLOR_BUFFER_BIT}W&&($|=G.DEPTH_BUFFER_BIT),Y&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",st,!1),St.dispose(),Gt.dispose(),gt.dispose(),P.dispose(),Z.dispose(),it.dispose(),Kt.dispose(),Ee.dispose(),Dt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Ce),Yt.removeEventListener("sessionend",le),Tt&&(Tt.dispose(),Tt=null),sn.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let C=Pt.autoReset,W=ct.enabled,Y=ct.autoUpdate,$=ct.needsUpdate,J=ct.type;tt(),Pt.autoReset=C,ct.enabled=W,ct.autoUpdate=Y,ct.needsUpdate=$,ct.type=J}function st(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function mt(C){let W=C.target;W.removeEventListener("dispose",mt),Lt(W)}function Lt(C){Et(C),gt.remove(C)}function Et(C){let W=gt.get(C).programs;W!==void 0&&(W.forEach(function(Y){Dt.releaseProgram(Y)}),C.isShaderMaterial&&Dt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Y,$,J,At){W===null&&(W=bt);let Nt=J.isMesh&&J.matrixWorld.determinant()<0,Xt=me(C,W,Y,$,J);et.setMaterial($,Nt);let jt=Y.index,ae=1;if($.wireframe===!0){if(jt=ot.getWireframeAttribute(Y),jt===void 0)return;ae=2}let ee=Y.drawRange,ne=Y.attributes.position,Qe=ee.start*ae,ii=(ee.start+ee.count)*ae;At!==null&&(Qe=Math.max(Qe,At.start*ae),ii=Math.min(ii,(At.start+At.count)*ae)),jt!==null?(Qe=Math.max(Qe,0),ii=Math.min(ii,jt.count)):ne!=null&&(Qe=Math.max(Qe,0),ii=Math.min(ii,ne.count));let pn=ii-Qe;if(pn<0||pn===1/0)return;Kt.setup(J,$,Xt,Y,jt);let Ji,Ge=Jt;if(jt!==null&&(Ji=rt.get(jt),Ge=Ft,Ge.setIndex(Ji)),J.isMesh)$.wireframe===!0?(et.setLineWidth($.wireframeLinewidth*Ot()),Ge.setMode(G.LINES)):Ge.setMode(G.TRIANGLES);else if(J.isLine){let he=$.linewidth;he===void 0&&(he=1),et.setLineWidth(he*Ot()),J.isLineSegments?Ge.setMode(G.LINES):J.isLineLoop?Ge.setMode(G.LINE_LOOP):Ge.setMode(G.LINE_STRIP)}else J.isPoints?Ge.setMode(G.POINTS):J.isSprite&&Ge.setMode(G.TRIANGLES);if(J.isBatchedMesh)Ge.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Ge.renderInstances(Qe,pn,J.count);else if(Y.isInstancedBufferGeometry){let he=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Sc=Math.min(Y.instanceCount,he);Ge.renderInstances(Qe,pn,Sc)}else Ge.render(Qe,pn)};function ge(C,W,Y){C.transparent===!0&&C.side===ce&&C.forceSinglePass===!1?(C.side=Un,C.needsUpdate=!0,ui(C,W,Y),C.side=Ss,C.needsUpdate=!0,ui(C,W,Y),C.side=ce):ui(C,W,Y)}this.compile=function(C,W,Y=null){Y===null&&(Y=C),m=Gt.get(Y),m.init(),w.push(m),Y.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),C!==Y&&C.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(y._useLegacyLights);let $=new Set;return C.traverse(function(J){let At=J.material;if(At)if(Array.isArray(At))for(let Nt=0;Nt<At.length;Nt++){let Xt=At[Nt];ge(Xt,Y,J),$.add(Xt)}else ge(At,Y,J),$.add(At)}),w.pop(),m=null,$},this.compileAsync=function(C,W,Y=null){let $=this.compile(C,W,Y);return new Promise(J=>{function At(){if($.forEach(function(Nt){gt.get(Nt).currentProgram.isReady()&&$.delete(Nt)}),$.size===0){J(C);return}setTimeout(At,10)}Q.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ye=null;function Ie(C){ye&&ye(C)}function Ce(){sn.stop()}function le(){sn.start()}let sn=new Ud;sn.setAnimationLoop(Ie),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(C){ye=C,Yt.setAnimationLoop(C),C===null?sn.stop():sn.start()},Yt.addEventListener("sessionstart",Ce),Yt.addEventListener("sessionend",le),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(W),W=Yt.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,W,x),m=Gt.get(C,w.length),m.init(),w.push(m),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(yt),ut=this.localClippingEnabled,j=$t.init(this.clippingPlanes,ut),g=St.get(C,f.length),g.init(),f.push(g),Fn(C,W,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(z,B),this.info.render.frame++,j===!0&&$t.beginShadows();let Y=m.state.shadowsArray;if(ct.render(Y,C,W),j===!0&&$t.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(g,C),m.setupLights(y._useLegacyLights),W.isArrayCamera){let $=W.cameras;for(let J=0,At=$.length;J<At;J++){let Nt=$[J];Fs(g,C,Nt,Nt.viewport)}}else Fs(g,C,W);x!==null&&(H.updateMultisampleRenderTarget(x),H.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(y,C,W),Kt.resetDefaultState(),A=-1,E=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Fn(C,W,Y,$){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){$&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(yt);let Nt=it.update(C),Xt=C.material;Xt.visible&&g.push(C,Nt,Xt,Y,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){let Nt=it.update(C),Xt=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),qt.copy(Nt.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(yt)),Array.isArray(Xt)){let jt=Nt.groups;for(let ae=0,ee=jt.length;ae<ee;ae++){let ne=jt[ae],Qe=Xt[ne.materialIndex];Qe&&Qe.visible&&g.push(C,Nt,Qe,Y,qt.z,ne)}}else Xt.visible&&g.push(C,Nt,Xt,Y,qt.z,null)}}let At=C.children;for(let Nt=0,Xt=At.length;Nt<Xt;Nt++)Fn(At[Nt],W,Y,$)}function Fs(C,W,Y,$){let J=C.opaque,At=C.transmissive,Nt=C.transparent;m.setupLightsView(Y),j===!0&&$t.setGlobalState(y.clippingPlanes,Y),At.length>0&&ln(J,At,W,Y),$&&et.viewport(T.copy($)),J.length>0&&gs(J,W,Y),At.length>0&&gs(At,W,Y),Nt.length>0&&gs(Nt,W,Y),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function ln(C,W,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let At=lt.isWebGL2;Tt===null&&(Tt=new os(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Eo:Ui,minFilter:_o,samples:At?4:0})),y.getDrawingBufferSize(Bt),At?Tt.setSize(Bt.x,Bt.y):Tt.setSize(Pa(Bt.x),Pa(Bt.y));let Nt=y.getRenderTarget();y.setRenderTarget(Tt),y.getClearColor(D),S=y.getClearAlpha(),S<1&&y.setClearColor(16777215,.5),y.clear();let Xt=y.toneMapping;y.toneMapping=bs,gs(C,Y,$),H.updateMultisampleRenderTarget(Tt),H.updateRenderTargetMipmap(Tt);let jt=!1;for(let ae=0,ee=W.length;ae<ee;ae++){let ne=W[ae],Qe=ne.object,ii=ne.geometry,pn=ne.material,Ji=ne.group;if(pn.side===ce&&Qe.layers.test($.layers)){let Ge=pn.side;pn.side=Un,pn.needsUpdate=!0,Bn(Qe,Y,$,ii,pn,Ji),pn.side=Ge,pn.needsUpdate=!0,jt=!0}}jt===!0&&(H.updateMultisampleRenderTarget(Tt),H.updateRenderTargetMipmap(Tt)),y.setRenderTarget(Nt),y.setClearColor(D,S),y.toneMapping=Xt}function gs(C,W,Y){let $=W.isScene===!0?W.overrideMaterial:null;for(let J=0,At=C.length;J<At;J++){let Nt=C[J],Xt=Nt.object,jt=Nt.geometry,ae=$===null?Nt.material:$,ee=Nt.group;Xt.layers.test(Y.layers)&&Bn(Xt,W,Y,jt,ae,ee)}}function Bn(C,W,Y,$,J,At){C.onBeforeRender(y,W,Y,$,J,At),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(y,W,Y,$,C,At),J.transparent===!0&&J.side===ce&&J.forceSinglePass===!1?(J.side=Un,J.needsUpdate=!0,y.renderBufferDirect(Y,W,$,J,C,At),J.side=Ss,J.needsUpdate=!0,y.renderBufferDirect(Y,W,$,J,C,At),J.side=ce):y.renderBufferDirect(Y,W,$,J,C,At),C.onAfterRender(y,W,Y,$,J,At)}function ui(C,W,Y){W.isScene!==!0&&(W=bt);let $=gt.get(C),J=m.state.lights,At=m.state.shadowsArray,Nt=J.state.version,Xt=Dt.getParameters(C,J.state,At,W,Y),jt=Dt.getProgramCacheKey(Xt),ae=$.programs;$.environment=C.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(C.isMeshStandardMaterial?Z:P).get(C.envMap||$.environment),ae===void 0&&(C.addEventListener("dispose",mt),ae=new Map,$.programs=ae);let ee=ae.get(jt);if(ee!==void 0){if($.currentProgram===ee&&$.lightsStateVersion===Nt)return xe(C,Xt),ee}else Xt.uniforms=Dt.getUniforms(C),C.onBuild(Y,Xt,y),C.onBeforeCompile(Xt,y),ee=Dt.acquireProgram(Xt,jt),ae.set(jt,ee),$.uniforms=Xt.uniforms;let ne=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ne.clippingPlanes=$t.uniform),xe(C,Xt),$.needsLights=Hi(C),$.lightsStateVersion=Nt,$.needsLights&&(ne.ambientLightColor.value=J.state.ambient,ne.lightProbe.value=J.state.probe,ne.directionalLights.value=J.state.directional,ne.directionalLightShadows.value=J.state.directionalShadow,ne.spotLights.value=J.state.spot,ne.spotLightShadows.value=J.state.spotShadow,ne.rectAreaLights.value=J.state.rectArea,ne.ltc_1.value=J.state.rectAreaLTC1,ne.ltc_2.value=J.state.rectAreaLTC2,ne.pointLights.value=J.state.point,ne.pointLightShadows.value=J.state.pointShadow,ne.hemisphereLights.value=J.state.hemi,ne.directionalShadowMap.value=J.state.directionalShadowMap,ne.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ne.spotShadowMap.value=J.state.spotShadowMap,ne.spotLightMatrix.value=J.state.spotLightMatrix,ne.spotLightMap.value=J.state.spotLightMap,ne.pointShadowMap.value=J.state.pointShadowMap,ne.pointShadowMatrix.value=J.state.pointShadowMatrix),$.currentProgram=ee,$.uniformsList=null,ee}function Ut(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=zr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function xe(C,W){let Y=gt.get(C);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function me(C,W,Y,$,J){W.isScene!==!0&&(W=bt),H.resetTextureUnits();let At=W.fog,Nt=$.isMeshStandardMaterial?W.environment:null,Xt=x===null?y.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:rs,jt=($.isMeshStandardMaterial?Z:P).get($.envMap||Nt),ae=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ee=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ne=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,ii=!!Y.morphAttributes.color,pn=bs;$.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(pn=y.toneMapping);let Ji=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ge=Ji!==void 0?Ji.length:0,he=gt.get($),Sc=m.state.lights;if(j===!0&&(ut===!0||C!==E)){let di=C===E&&$.id===A;$t.setState($,C,di)}let Ye=!1;$.version===he.__version?(he.needsLights&&he.lightsStateVersion!==Sc.state.version||he.outputColorSpace!==Xt||J.isBatchedMesh&&he.batching===!1||!J.isBatchedMesh&&he.batching===!0||J.isInstancedMesh&&he.instancing===!1||!J.isInstancedMesh&&he.instancing===!0||J.isSkinnedMesh&&he.skinning===!1||!J.isSkinnedMesh&&he.skinning===!0||J.isInstancedMesh&&he.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&he.instancingColor===!1&&J.instanceColor!==null||he.envMap!==jt||$.fog===!0&&he.fog!==At||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==$t.numPlanes||he.numIntersection!==$t.numIntersection)||he.vertexAlphas!==ae||he.vertexTangents!==ee||he.morphTargets!==ne||he.morphNormals!==Qe||he.morphColors!==ii||he.toneMapping!==pn||lt.isWebGL2===!0&&he.morphTargetsCount!==Ge)&&(Ye=!0):(Ye=!0,he.__version=$.version);let Bs=he.currentProgram;Ye===!0&&(Bs=ui($,W,J));let Bh=!1,io=!1,Rc=!1,In=Bs.getUniforms(),ks=he.uniforms;if(et.useProgram(Bs.program)&&(Bh=!0,io=!0,Rc=!0),$.id!==A&&(A=$.id,io=!0),Bh||E!==C){In.setValue(G,"projectionMatrix",C.projectionMatrix),In.setValue(G,"viewMatrix",C.matrixWorldInverse);let di=In.map.cameraPosition;di!==void 0&&di.setValue(G,qt.setFromMatrixPosition(C.matrixWorld)),lt.logarithmicDepthBuffer&&In.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&In.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,io=!0,Rc=!0)}if(J.isSkinnedMesh){In.setOptional(G,J,"bindMatrix"),In.setOptional(G,J,"bindMatrixInverse");let di=J.skeleton;di&&(lt.floatVertexTextures?(di.boneTexture===null&&di.computeBoneTexture(),In.setValue(G,"boneTexture",di.boneTexture,H)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(In.setOptional(G,J,"batchingTexture"),In.setValue(G,"batchingTexture",J._matricesTexture,H));let Ac=Y.morphAttributes;if((Ac.position!==void 0||Ac.normal!==void 0||Ac.color!==void 0&&lt.isWebGL2===!0)&&kt.update(J,Y,Bs),(io||he.receiveShadow!==J.receiveShadow)&&(he.receiveShadow=J.receiveShadow,In.setValue(G,"receiveShadow",J.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ks.envMap.value=jt,ks.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),io&&(In.setValue(G,"toneMappingExposure",y.toneMappingExposure),he.needsLights&&Ht(ks,Rc),At&&$.fog===!0&&vt.refreshFogUniforms(ks,At),vt.refreshMaterialUniforms(ks,$,N,U,Tt),zr.upload(G,Ut(he),ks,H)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zr.upload(G,Ut(he),ks,H),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&In.setValue(G,"center",J.center),In.setValue(G,"modelViewMatrix",J.modelViewMatrix),In.setValue(G,"normalMatrix",J.normalMatrix),In.setValue(G,"modelMatrix",J.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let di=$.uniformsGroups;for(let Cc=0,dp=di.length;Cc<dp;Cc++)if(lt.isWebGL2){let kh=di[Cc];Ee.update(kh,Bs),Ee.bind(kh,Bs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bs}function Ht(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Hi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,W,Y){gt.get(C.texture).__webglTexture=W,gt.get(C.depthTexture).__webglTexture=Y;let $=gt.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){let Y=gt.get(C);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Y=0){x=C,R=W,v=Y;let $=!0,J=null,At=!1,Nt=!1;if(C){let jt=gt.get(C);jt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(G.FRAMEBUFFER,null),$=!1):jt.__webglFramebuffer===void 0?H.setupRenderTarget(C):jt.__hasExternalTextures&&H.rebindTextures(C,gt.get(C.texture).__webglTexture,gt.get(C.depthTexture).__webglTexture);let ae=C.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Nt=!0);let ee=gt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?J=ee[W][Y]:J=ee[W],At=!0):lt.isWebGL2&&C.samples>0&&H.useMultisampledRTT(C)===!1?J=gt.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?J=ee[Y]:J=ee,T.copy(C.viewport),b.copy(C.scissor),I=C.scissorTest}else T.copy(V).multiplyScalar(N).floor(),b.copy(X).multiplyScalar(N).floor(),I=nt;if(et.bindFramebuffer(G.FRAMEBUFFER,J)&&lt.drawBuffers&&$&&et.drawBuffers(C,J),et.viewport(T),et.scissor(b),et.setScissorTest(I),At){let jt=gt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,jt.__webglTexture,Y)}else if(Nt){let jt=gt.get(C.texture),ae=W||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,jt.__webglTexture,Y||0,ae)}A=-1},this.readRenderTargetPixels=function(C,W,Y,$,J,At,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Xt=Xt[Nt]),Xt){et.bindFramebuffer(G.FRAMEBUFFER,Xt);try{let jt=C.texture,ae=jt.format,ee=jt.type;if(ae!==Ti&&Ct.convert(ae)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ne=ee===Eo&&(Q.has("EXT_color_buffer_half_float")||lt.isWebGL2&&Q.has("EXT_color_buffer_float"));if(ee!==Ui&&Ct.convert(ee)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===ws&&(lt.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-$&&Y>=0&&Y<=C.height-J&&G.readPixels(W,Y,$,J,Ct.convert(ae),Ct.convert(ee),At)}finally{let jt=x!==null?gt.get(x).__webglFramebuffer:null;et.bindFramebuffer(G.FRAMEBUFFER,jt)}}},this.copyFramebufferToTexture=function(C,W,Y=0){let $=Math.pow(2,-Y),J=Math.floor(W.image.width*$),At=Math.floor(W.image.height*$);H.setTexture2D(W,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,C.x,C.y,J,At),et.unbindTexture()},this.copyTextureToTexture=function(C,W,Y,$=0){let J=W.image.width,At=W.image.height,Nt=Ct.convert(Y.format),Xt=Ct.convert(Y.type);H.setTexture2D(Y,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment),W.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,$,C.x,C.y,J,At,Nt,Xt,W.image.data):W.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,$,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Nt,W.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,$,C.x,C.y,Nt,Xt,W.image),$===0&&Y.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Y,$,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let At=C.max.x-C.min.x+1,Nt=C.max.y-C.min.y+1,Xt=C.max.z-C.min.z+1,jt=Ct.convert($.format),ae=Ct.convert($.type),ee;if($.isData3DTexture)H.setTexture3D($,0),ee=G.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)H.setTexture2DArray($,0),ee=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);let ne=G.getParameter(G.UNPACK_ROW_LENGTH),Qe=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ii=G.getParameter(G.UNPACK_SKIP_PIXELS),pn=G.getParameter(G.UNPACK_SKIP_ROWS),Ji=G.getParameter(G.UNPACK_SKIP_IMAGES),Ge=Y.isCompressedTexture?Y.mipmaps[J]:Y.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Ge.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ge.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?G.texSubImage3D(ee,J,W.x,W.y,W.z,At,Nt,Xt,jt,ae,Ge.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ee,J,W.x,W.y,W.z,At,Nt,Xt,jt,Ge.data)):G.texSubImage3D(ee,J,W.x,W.y,W.z,At,Nt,Xt,jt,ae,Ge),G.pixelStorei(G.UNPACK_ROW_LENGTH,ne),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Qe),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ii),G.pixelStorei(G.UNPACK_SKIP_ROWS,pn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ji),J===0&&$.generateMipmaps&&G.generateMipmap(ee),et.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?H.setTextureCube(C,0):C.isData3DTexture?H.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?H.setTexture2DArray(C,0):H.setTexture2D(C,0),et.unbindTexture()},this.resetState=function(){R=0,v=0,x=null,et.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ch?"display-p3":"srgb",e.unpackColorSpace=be.workingColorSpace===ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===He?Ks:Pd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ks?He:rs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Ll=class extends wo{};Ll.prototype.isWebGL1Renderer=!0;var Xa=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new K(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qa=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ya=class extends oi{constructor(t=null,e=1,n=1,s,r,o,a,c,l=bn,h=bn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Za=class extends de{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ar=new Fe,ld=new Fe,ga=[],hd=new _e,m_=new Fe,co=new k,lo=new Cs,$a=class extends k{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Za(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _e),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),hd.copy(t.boundingBox).applyMatrix4(Ar),this.boundingBox.union(hd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),lo.copy(t.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(lo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(n),t.ray.intersectsSphere(lo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ar),ld.multiplyMatrices(n,Ar),co.matrixWorld=ld,co.raycast(t,ga);for(let o=0,a=ga.length;o<a;o++){let c=ga[o];c.instanceId=r,c.object=this,e.push(c)}ga.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var We=class extends as{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ud=new Fe,Hl=new Ua,xa=new Cs,ya=new F,Ze=class extends xn{constructor(t=new oe,e=new We){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,t.ray.intersectsSphere(xa)===!1)return;ud.copy(s).invert(),Hl.copy(t.ray).applyMatrix4(ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=d,g=p;_<g;_++){let m=l.getX(_);ya.fromBufferAttribute(u,m),dd(ya,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,g=p;_<g;_++)ya.fromBufferAttribute(u,_),dd(ya,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function dd(i,t,e,n,s,r,o){let a=Hl.distanceSqToPoint(i);if(a<e){let c=new F;Hl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var mi=class extends oi{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new dt:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,s=[],r=[],o=[],a=new F,c=new Fe;for(let p=0;p<=t;p++){let _=p/t;s[p]=this.getTangentAt(_,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(gn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(gn(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},To=class extends gi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new dt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Dl=class extends To{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var _a=new F,rl=new dh,ol=new dh,al=new dh,Ul=class extends gi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(_a.subVectors(s[0],s[1]).add(s[0]),l=_a);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_a.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_a),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),rl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,g,m),ol.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,g,m),al.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ol.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),al.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(rl.calc(c),ol.calc(c),al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function g_(i,t){let e=1-i;return e*e*t}function x_(i,t){return 2*(1-i)*i*t}function y_(i,t){return i*i*t}function go(i,t,e,n){return g_(i,t)+x_(i,e)+y_(i,n)}function __(i,t){let e=1-i;return e*e*e*t}function E_(i,t){let e=1-i;return 3*e*e*i*t}function M_(i,t){return 3*(1-i)*i*i*t}function v_(i,t){return i*i*i*t}function xo(i,t,e,n,s){return __(i,t)+E_(i,e)+M_(i,n)+v_(i,s)}var Ja=class extends gi{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zl=class extends gi{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(t,s.x,r.x,o.x,a.x),xo(t,s.y,r.y,o.y,a.y),xo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ka=class extends gi{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nl=class extends gi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends gi{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ol=class extends gi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y),go(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(fd(a,c.x,l.x,h.x,u.x),fd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},Fl=Object.freeze({__proto__:null,ArcCurve:Dl,CatmullRomCurve3:Ul,CubicBezierCurve:Ja,CubicBezierCurve3:zl,EllipseCurve:To,LineCurve:Ka,LineCurve3:Nl,QuadraticBezierCurve:ja,QuadraticBezierCurve3:Ol,SplineCurve:Qa}),Bl=class extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Fl[s.type]().fromJSON(s))}return this}},bo=class extends Bl{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ka(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ja(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ja(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new To(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},kl=class i extends oe{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=gn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new F,d=new dt,p=new F,_=new F,g=new F,m=0,f=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:m=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),c.push(p.x,p.y,p.z),g.copy(_)}for(let w=0;w<=e;w++){let y=n+w*h*s,M=Math.sin(y),R=Math.cos(y);for(let v=0;v<=t.length-1;v++){u.x=t[v].x*M,u.y=t[v].y,u.z=t[v].x*R,o.push(u.x,u.y,u.z),d.x=w/e,d.y=v/(t.length-1),a.push(d.x,d.y);let x=c[3*v+0]*M,A=c[3*v+1],E=c[3*v+0]*R;l.push(x,A,E)}}for(let w=0;w<e;w++)for(let y=0;y<t.length-1;y++){let M=y+w*t.length,R=M,v=M+t.length,x=M+t.length+1,A=M+1;r.push(R,v,A),r.push(x,A,v)}this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("uv",new fe(a,2)),this.setAttribute("normal",new fe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},tc=class i extends kl{constructor(t=1,e=1,n=4,s=8){let r=new bo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},$e=class i extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new F,h=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},It=class i extends oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],_=0,g=[],m=n/2,f=0;w(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(p,2));function w(){let M=new F,R=new F,v=0,x=(e-t)/n;for(let A=0;A<=r;A++){let E=[],T=A/r,b=T*(e-t)+t;for(let I=0;I<=s;I++){let D=I/s,S=D*c+a,L=Math.sin(S),U=Math.cos(S);R.x=b*L,R.y=-T*n+m,R.z=b*U,u.push(R.x,R.y,R.z),M.set(L,x,U).normalize(),d.push(M.x,M.y,M.z),p.push(D,1-T),E.push(_++)}g.push(E)}for(let A=0;A<s;A++)for(let E=0;E<r;E++){let T=g[E][A],b=g[E+1][A],I=g[E+1][A+1],D=g[E][A+1];h.push(T,b,D),h.push(b,I,D),v+=6}l.addGroup(f,v,0),f+=v}function y(M){let R=_,v=new dt,x=new F,A=0,E=M===!0?t:e,T=M===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),_++;let b=_;for(let I=0;I<=s;I++){let S=I/s*c+a,L=Math.cos(S),U=Math.sin(S);x.x=E*U,x.y=m*T,x.z=E*L,u.push(x.x,x.y,x.z),d.push(0,T,0),v.x=L*.5+.5,v.y=U*.5*T+.5,p.push(v.x,v.y),_++}for(let I=0;I<s;I++){let D=R+I,S=b+I;M===!0?h.push(S,S+1,D):h.push(S+1,S,D),A+=3}l.addGroup(f,A,M===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zt=class i extends It{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},So=class i extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let y=new F,M=new F,R=new F;for(let v=0;v<e.length;v+=3)p(e[v+0],y),p(e[v+1],M),p(e[v+2],R),c(y,M,R,w)}function c(w,y,M,R){let v=R+1,x=[];for(let A=0;A<=v;A++){x[A]=[];let E=w.clone().lerp(M,A/v),T=y.clone().lerp(M,A/v),b=v-A;for(let I=0;I<=b;I++)I===0&&A===v?x[A][I]=E:x[A][I]=E.clone().lerp(T,I/b)}for(let A=0;A<v;A++)for(let E=0;E<2*(v-A)-1;E++){let T=Math.floor(E/2);E%2===0?(d(x[A][T+1]),d(x[A+1][T]),d(x[A][T])):(d(x[A][T+1]),d(x[A+1][T+1]),d(x[A+1][T]))}}function l(w){let y=new F;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(w),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let w=new F;for(let y=0;y<r.length;y+=3){w.x=r[y+0],w.y=r[y+1],w.z=r[y+2];let M=m(w)/2/Math.PI+.5,R=f(w)/Math.PI+.5;o.push(M,1-R)}_(),u()}function u(){for(let w=0;w<o.length;w+=6){let y=o[w+0],M=o[w+2],R=o[w+4],v=Math.max(y,M,R),x=Math.min(y,M,R);v>.9&&x<.1&&(y<.2&&(o[w+0]+=1),M<.2&&(o[w+2]+=1),R<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function p(w,y){let M=w*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function _(){let w=new F,y=new F,M=new F,R=new F,v=new dt,x=new dt,A=new dt;for(let E=0,T=0;E<r.length;E+=9,T+=6){w.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),v.set(o[T+0],o[T+1]),x.set(o[T+2],o[T+3]),A.set(o[T+4],o[T+5]),R.copy(w).add(y).add(M).divideScalar(3);let b=m(R);g(v,T+0,w,b),g(x,T+2,y,b),g(A,T+4,M,b)}}function g(w,y,M,R){R<0&&w.x===1&&(o[y]=w.x-1),M.x===0&&M.z===0&&(o[y]=R/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Xn=class i extends So{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ps=class extends bo{constructor(t){super(t),this.uuid=nr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new bo().fromJSON(s))}return this}},w_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=kd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=A_(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let _=e;_<s;_+=e)u=i[_],d=i[_+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Ro(r,o,e,a,c,p,0),o}};function kd(i,t,e,n,s){let r,o;if(s===F_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=pd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=pd(r,i[r],i[r+1],o);return o&&lc(o,o.next)&&(Co(o),o=o.next),o}function js(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(lc(e,e.next)||Ve(e.prev,e,e.next)===0)){if(Co(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ro(i,t,e,n,s,r,o){if(!i)return;!o&&r&&H_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?b_(i,n,s,r):T_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Co(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=S_(js(i),t,e),Ro(i,t,e,n,s,r,2)):o===2&&R_(i,t,e,n,s,r):Ro(js(i),t,e,n,s,r,1);break}}}function T_(i){let t=i.prev,e=i,n=i.next;if(Ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&Hr(s,a,r,c,o,l,_.x,_.y)&&Ve(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function b_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,g=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Gl(p,_,t,e,n),w=Gl(g,m,t,e,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=f&&M&&M.z<=w;){if(y.x>=p&&y.x<=g&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Hr(a,h,c,u,l,d,y.x,y.y)&&Ve(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Hr(a,h,c,u,l,d,M.x,M.y)&&Ve(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=g&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Hr(a,h,c,u,l,d,y.x,y.y)&&Ve(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=w;){if(M.x>=p&&M.x<=g&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Hr(a,h,c,u,l,d,M.x,M.y)&&Ve(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function S_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!lc(s,r)&&Gd(s,n,n.next,r)&&Ao(s,r)&&Ao(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Co(n),Co(n.next),n=i=r),n=n.next}while(n!==i);return js(n)}function R_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&z_(o,a)){let c=Vd(o,a);o=js(o,o.next),c=js(c,c.next),Ro(o,t,e,n,s,r,0),Ro(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function A_(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=kd(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(U_(l));for(s.sort(C_),r=0;r<s.length;r++)e=P_(s[r],e);return e}function C_(i,t){return i.x-t.x}function P_(i,t){let e=I_(i,t);if(!e)return t;let n=Vd(e,i);return js(n,n.next),js(e,e.next)}function I_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Hr(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ao(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&L_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function L_(i,t){return Ve(i.prev,i,t.prev)<0&&Ve(t.next,i,i.next)<0}function H_(i,t,e,n){let s=i;do s.z===0&&(s.z=Gl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,D_(s)}function D_(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Gl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function U_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function z_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!N_(i,t)&&(Ao(i,t)&&Ao(t,i)&&O_(i,t)&&(Ve(i.prev,i,t.prev)||Ve(i,t.prev,t))||lc(i,t)&&Ve(i.prev,i,i.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function lc(i,t){return i.x===t.x&&i.y===t.y}function Gd(i,t,e,n){let s=Ma(Ve(i,t,e)),r=Ma(Ve(i,t,n)),o=Ma(Ve(e,n,i)),a=Ma(Ve(e,n,t));return!!(s!==r&&o!==a||s===0&&Ea(i,e,t)||r===0&&Ea(i,n,t)||o===0&&Ea(e,i,n)||a===0&&Ea(e,t,n))}function Ea(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ma(i){return i>0?1:i<0?-1:0}function N_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ao(i,t){return Ve(i.prev,i,i.next)<0?Ve(i,t,i.next)>=0&&Ve(i,i.prev,t)>=0:Ve(i,t,i.prev)<0||Ve(i,i.next,t)<0}function O_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vd(i,t){let e=new Vl(i.i,i.x,i.y),n=new Vl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function pd(i,t,e,n){let s=new Vl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function F_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var yo=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];md(t),gd(n,t);let o=t.length;e.forEach(md);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,gd(n,e[c]);let a=w_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function md(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qs=class i extends oe{constructor(t=new Ps([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:B_,y,M=!1,R,v,x,A;f&&(y=f.getSpacedPoints(h),M=!0,d=!1,R=f.computeFrenetFrames(h,!1),v=new F,x=new F,A=new F),d||(m=0,p=0,_=0,g=0);let E=a.extractPoints(l),T=E.shape,b=E.holes;if(!yo.isClockWise(T)){T=T.reverse();for(let G=0,at=b.length;G<at;G++){let Q=b[G];yo.isClockWise(Q)&&(b[G]=Q.reverse())}}let D=yo.triangulateShape(T,b),S=T;for(let G=0,at=b.length;G<at;G++){let Q=b[G];T=T.concat(Q)}function L(G,at,Q){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(at,Q)}let U=T.length,N=D.length;function z(G,at,Q){let lt,et,Pt,gt=G.x-at.x,H=G.y-at.y,P=Q.x-G.x,Z=Q.y-G.y,rt=gt*gt+H*H,ot=gt*Z-H*P;if(Math.abs(ot)>Number.EPSILON){let it=Math.sqrt(rt),Dt=Math.sqrt(P*P+Z*Z),vt=at.x-H/it,St=at.y+gt/it,Gt=Q.x-Z/Dt,$t=Q.y+P/Dt,ct=((Gt-vt)*Z-($t-St)*P)/(gt*Z-H*P);lt=vt+gt*ct-G.x,et=St+H*ct-G.y;let te=lt*lt+et*et;if(te<=2)return new dt(lt,et);Pt=Math.sqrt(te/2)}else{let it=!1;gt>Number.EPSILON?P>Number.EPSILON&&(it=!0):gt<-Number.EPSILON?P<-Number.EPSILON&&(it=!0):Math.sign(H)===Math.sign(Z)&&(it=!0),it?(lt=-H,et=gt,Pt=Math.sqrt(rt)):(lt=gt,et=H,Pt=Math.sqrt(rt/2))}return new dt(lt/Pt,et/Pt)}let B=[];for(let G=0,at=S.length,Q=at-1,lt=G+1;G<at;G++,Q++,lt++)Q===at&&(Q=0),lt===at&&(lt=0),B[G]=z(S[G],S[Q],S[lt]);let V=[],X,nt=B.concat();for(let G=0,at=b.length;G<at;G++){let Q=b[G];X=[];for(let lt=0,et=Q.length,Pt=et-1,gt=lt+1;lt<et;lt++,Pt++,gt++)Pt===et&&(Pt=0),gt===et&&(gt=0),X[lt]=z(Q[lt],Q[Pt],Q[gt]);V.push(X),nt=nt.concat(X)}for(let G=0;G<m;G++){let at=G/m,Q=p*Math.cos(at*Math.PI/2),lt=_*Math.sin(at*Math.PI/2)+g;for(let et=0,Pt=S.length;et<Pt;et++){let gt=L(S[et],B[et],lt);yt(gt.x,gt.y,-Q)}for(let et=0,Pt=b.length;et<Pt;et++){let gt=b[et];X=V[et];for(let H=0,P=gt.length;H<P;H++){let Z=L(gt[H],X[H],lt);yt(Z.x,Z.y,-Q)}}}let q=_+g;for(let G=0;G<U;G++){let at=d?L(T[G],nt[G],q):T[G];M?(x.copy(R.normals[0]).multiplyScalar(at.x),v.copy(R.binormals[0]).multiplyScalar(at.y),A.copy(y[0]).add(x).add(v),yt(A.x,A.y,A.z)):yt(at.x,at.y,0)}for(let G=1;G<=h;G++)for(let at=0;at<U;at++){let Q=d?L(T[at],nt[at],q):T[at];M?(x.copy(R.normals[G]).multiplyScalar(Q.x),v.copy(R.binormals[G]).multiplyScalar(Q.y),A.copy(y[G]).add(x).add(v),yt(A.x,A.y,A.z)):yt(Q.x,Q.y,u/h*G)}for(let G=m-1;G>=0;G--){let at=G/m,Q=p*Math.cos(at*Math.PI/2),lt=_*Math.sin(at*Math.PI/2)+g;for(let et=0,Pt=S.length;et<Pt;et++){let gt=L(S[et],B[et],lt);yt(gt.x,gt.y,u+Q)}for(let et=0,Pt=b.length;et<Pt;et++){let gt=b[et];X=V[et];for(let H=0,P=gt.length;H<P;H++){let Z=L(gt[H],X[H],lt);M?yt(Z.x,Z.y+y[h-1].y,y[h-1].x+Q):yt(Z.x,Z.y,u+Q)}}}j(),ut();function j(){let G=s.length/3;if(d){let at=0,Q=U*at;for(let lt=0;lt<N;lt++){let et=D[lt];Bt(et[2]+Q,et[1]+Q,et[0]+Q)}at=h+m*2,Q=U*at;for(let lt=0;lt<N;lt++){let et=D[lt];Bt(et[0]+Q,et[1]+Q,et[2]+Q)}}else{for(let at=0;at<N;at++){let Q=D[at];Bt(Q[2],Q[1],Q[0])}for(let at=0;at<N;at++){let Q=D[at];Bt(Q[0]+U*h,Q[1]+U*h,Q[2]+U*h)}}n.addGroup(G,s.length/3-G,0)}function ut(){let G=s.length/3,at=0;Tt(S,at),at+=S.length;for(let Q=0,lt=b.length;Q<lt;Q++){let et=b[Q];Tt(et,at),at+=et.length}n.addGroup(G,s.length/3-G,1)}function Tt(G,at){let Q=G.length;for(;--Q>=0;){let lt=Q,et=Q-1;et<0&&(et=G.length-1);for(let Pt=0,gt=h+m*2;Pt<gt;Pt++){let H=U*Pt,P=U*(Pt+1),Z=at+lt+H,rt=at+et+H,ot=at+et+P,it=at+lt+P;qt(Z,rt,ot,it)}}}function yt(G,at,Q){c.push(G),c.push(at),c.push(Q)}function Bt(G,at,Q){bt(G),bt(at),bt(Q);let lt=s.length/3,et=w.generateTopUV(n,s,lt-3,lt-2,lt-1);Ot(et[0]),Ot(et[1]),Ot(et[2])}function qt(G,at,Q,lt){bt(G),bt(at),bt(lt),bt(at),bt(Q),bt(lt);let et=s.length/3,Pt=w.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Ot(Pt[0]),Ot(Pt[1]),Ot(Pt[3]),Ot(Pt[1]),Ot(Pt[2]),Ot(Pt[3])}function bt(G){s.push(c[G*3+0]),s.push(c[G*3+1]),s.push(c[G*3+2])}function Ot(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return k_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fl[s.type]().fromJSON(s)),new i(n,t.options)}},B_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,c),new dt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],_=t[s*3+2],g=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new dt(o,1-c),new dt(l,1-u),new dt(d,1-_),new dt(g,1-f)]:[new dt(a,1-c),new dt(h,1-u),new dt(p,1-_),new dt(m,1-f)]}};function k_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Sn=class i extends So{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},on=class i extends So{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},bi=class i extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new F,_=new dt;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<s;g++){let m=g*(n+1);for(let f=0;f<n;f++){let w=f+m,y=w,M=w+n+1,R=w+n+2,v=w+1;a.push(y,M,v),a.push(M,R,v)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ie=class i extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new F,d=new F,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){let w=[],y=f/n,M=0;f===0&&o===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let v=R/e;u.x=-t*Math.cos(s+v*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+v*r)*Math.sin(o+y*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(v+M,1-y),w.push(l++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){let y=h[f][w+1],M=h[f][w],R=h[f+1][w],v=h[f+1][w+1];(f!==0||o>0)&&p.push(y,M,v),(f!==n-1||c<Math.PI)&&p.push(M,R,v)}this.setIndex(p),this.setAttribute("position",new fe(_,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Kn=class i extends oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new F,u=new F,d=new F;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){let g=_/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){let g=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,w=(s+1)*p+_;o.push(g,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Rt=class extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ec=class extends as{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function va(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function G_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var kr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends kr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_u,endingEnd:_u}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eu:r=t,a=2*e-n;break;case Mu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eu:o=t,c=2*n-e;break;case Mu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,w=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,y=(-1-p)*m+(1.5+p)*g+.5*_,M=p*m-p*g;for(let R=0;R!==a;++R)r[R]=f*o[h+R]+w*o[l+R]+y*o[c+R]+M*o[u+R];return r}},Xl=class extends kr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},ql=class extends kr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Si=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ta:e=this.InterpolantFactoryMethodDiscrete;break;case ba:e=this.InterpolantFactoryMethodLinear;break;case zc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&G_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[p+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=ba;var tr=class extends Si{};tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Ta;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Si{};Yl.prototype.ValueTypeName="color";var Zl=class extends Si{};Zl.prototype.ValueTypeName="number";var $l=class extends kr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)As.slerpFlat(r,0,o,l-a,o,l,c);return r}},Po=class extends Si{InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.DefaultInterpolation=ba;Po.prototype.InterpolantFactoryMethodSmooth=void 0;var er=class extends Si{};er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Ta;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Si{};Jl.prototype.ValueTypeName="vector";var Kl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},V_=new Kl,jl=class{constructor(t){this.manager=t!==void 0?t:V_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Io=class extends xn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new K(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},nc=class extends Io{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},cl=new Fe,xd=new F,yd=new F,ic=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;xd.setFromMatrixPosition(t.matrixWorld),e.position.copy(xd),yd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yd),e.updateMatrixWorld(),cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var _d=new Fe,ho=new F,ll=new F,Ql=class extends ic{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ho.setFromMatrixPosition(t.matrixWorld),n.position.copy(ho),ll.copy(n.position),ll.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ll),n.updateMatrixWorld(),s.makeTranslation(-ho.x,-ho.y,-ho.z),_d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_d)}},Xe=class extends Io{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},th=class extends ic{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sc=class extends Io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new th}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var rc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ed(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ed();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ed(){return(typeof performance>"u"?Date:performance).now()}var fh="\\[\\]\\.:\\/",W_=new RegExp("["+fh+"]","g"),ph="[^"+fh+"]",X_="[^"+fh.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",ph),Y_=/(WCOD+)?/.source.replace("WCOD",X_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),$_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),J_=new RegExp("^"+q_+Y_+Z_+$_+"$"),K_=["material","materials","bones","map"],eh=class{constructor(t,e,n){let s=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(t){let e=J_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);K_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=eh;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);var Yn=0,Do=-9,Nn=1340,jn=4,hc=64,mh=i=>Math.min(1,Math.max(0,i)),Qt=(i,t,e)=>i+(t-i)*e,wt=(i,t,e)=>{let n=mh((e-i)/(t-i));return n*n*(3-2*n)};function Wr(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function uc(i,t){let e=Math.imul(i,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function Ho(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=uc(e,n),l=uc(e+1,n),h=uc(e,n+1),u=uc(e+1,n+1);return Qt(Qt(c,l,o),Qt(h,u,o),a)}function Vt(i,t){return Ho(i,t)*.55+Ho(i*2.1+7,t*2.1+3)*.3+Ho(i*4.3+1,t*4.3+9)*.15}function ir(i,t,e,n,s,r){let o=s-e,a=r-n,c=mh(((i-e)*o+(t-n)*a)/(o*o+a*a));return Math.hypot(i-(e+o*c),t-(n+a*c))}function Xr(i,t,e){let n=1/0;for(let s=0;s<e.length-1;s++)n=Math.min(n,ir(i,t,e[s][0],e[s][1],e[s+1][0],e[s+1][1]));return n}var Vr=32,Wd=1e9,Xd=new WeakMap;function j_(i){let t=Xd.get(i);if(t)return t;t=new Map;for(let e of i)for(let n=0;n<e.length-1;n++){let[s,r]=e[n],[o,a]=e[n+1],c=[s,r,o,a],l=Math.floor(Math.min(s,o)/Vr)-1,h=Math.floor(Math.max(s,o)/Vr)+1,u=Math.floor(Math.min(r,a)/Vr)-1,d=Math.floor(Math.max(r,a)/Vr)+1;for(let p=l;p<=h;p++)for(let _=u;_<=d;_++){let g=p*1e5+_;t.has(g)||t.set(g,[]),t.get(g).push(c)}}return Xd.set(i,t),t}var Se=(i,t,e)=>{let n=j_(e).get(Math.floor(i/Vr)*1e5+Math.floor(t/Vr));if(!n)return Wd;let s=Wd;for(let[r,o,a,c]of n)s=Math.min(s,ir(i,t,r,o,a,c));return s},cs=(i,t,e,n,s,r)=>r*wt(s,0,Math.hypot(i-e,t-n));function On(i,[t,e,n,s,r,o]){return a=>i+t*Math.sin(3*a+e)+n*Math.sin(5*a+s)+r*Math.sin(7*a+o)}function qd(i){let t=i.map(p=>{let _=Math.ceil(p.maxR/jn)*jn,g=_*2/jn,m=g+1,f=p.cx-_,w=p.cz-_,y=new Float32Array(m*m);for(let M=0;M<m;M++)for(let R=0;R<m;R++)y[M*m+R]=p.height(f+R*jn,w+M*jn);return{island:p,half:_,segs:g,N:m,x0:f,z0:w,heights:y}});function e(p,_){for(let g of t){let m=(p-g.x0)/jn,f=(_-g.z0)/jn;if(m<0||f<0||m>=g.segs||f>=g.segs)continue;let w=Math.floor(m),y=Math.floor(f),M=m-w,R=f-y,v=y*g.N+w,x=g.heights;return Qt(Qt(x[v],x[v+1],M),Qt(x[v+g.N],x[v+g.N+1],M),R)}return Do}function n(p,_){let g=jn;return Math.hypot(e(p+g,_)-e(p-g,_),e(p,_+g)-e(p,_-g))/(2*g)}function s(p,_){for(let g of t){let m=p-g.island.cx,f=_-g.island.cz;if(Math.hypot(m,f)<g.island.edge(Math.atan2(f,m))*1.02)return g.island}return null}let r=new xt,o=new K,a=new Rt({vertexColors:!0,flatShading:!0,roughness:.95});for(let p of t){let _=new Float32Array(p.N*p.N*3);p.colors=_;for(let g=0;g<p.N;g++)for(let m=0;m<p.N;m++){let f=p.x0+m*jn,w=p.z0+g*jn,y=g*p.N+m;p.island.color(f,w,p.heights[y],n(f,w),o),_[y*3]=o.r,_[y*3+1]=o.g,_[y*3+2]=o.b}for(let g=0;g<p.segs;g+=hc)for(let m=0;m<p.segs;m+=hc){let f=Math.min(hc,p.segs-m),w=Math.min(hc,p.segs-g),y=!1;for(let E=0;E<=w&&!y;E++)for(let T=0;T<=f;T++)if(p.heights[(g+E)*p.N+m+T]>Do+.5){y=!0;break}if(!y)continue;let M=new Float32Array((f+1)*(w+1)*3),R=new Float32Array((f+1)*(w+1)*3);for(let E=0;E<=w;E++)for(let T=0;T<=f;T++){let b=(g+E)*p.N+m+T,I=(E*(f+1)+T)*3;M[I]=p.x0+(m+T)*jn,M[I+1]=p.heights[b],M[I+2]=p.z0+(g+E)*jn,R[I]=_[b*3],R[I+1]=_[b*3+1],R[I+2]=_[b*3+2]}let v=[];for(let E=0;E<w;E++)for(let T=0;T<f;T++){let b=E*(f+1)+T,I=b+1,D=b+f+1,S=D+1;v.push(b,D,I,I,D,S)}let x=new oe;x.setAttribute("position",new de(M,3)),x.setAttribute("color",new de(R,3)),x.setIndex(v),x.computeVertexNormals(),x.computeBoundingSphere();let A=new k(x,a);A.receiveShadow=!0,r.add(A)}}let c=8,l=Math.round(Nn*2/c)+1,h=new Uint8Array(l*l);for(let p=0;p<l;p++)for(let _=0;_<l;_++){let g=e(-Nn+_*c,-Nn+p*c);h[p*l+_]=Math.round(mh((g+12)/36)*255)}let u=new Ya(h,l,l,oh,Ui);u.unpackAlignment=1,u.magFilter=Vn,u.minFilter=Vn,u.needsUpdate=!0;function d(p,_,g){for(let m of t){let f=Math.round((p-m.x0)/jn),w=Math.round((_-m.z0)/jn);if(f<0||w<0||f>m.segs||w>m.segs)continue;let y=(w*m.N+f)*3;return g.setRGB(m.colors[y],m.colors[y+1],m.colors[y+2])}return g.setRGB(0,0,0)}return{group:r,heightTex:u,sample:e,slopeAt:n,islandAt:s,colorAt:d}}var Lo=5;function Yd(i,t){let e=Math.round(Nn*2/Lo),n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d"),r=s.createImageData(e,e),o=new K,a=new K("#7fd8d0"),c=new K("#3b7fc0");for(let l=0;l<e;l++)for(let h=0;h<e;h++){let u=h*Lo-Nn+Lo/2,d=l*Lo-Nn+Lo/2,p=t(u,d);p<Yn?o.copy(a).lerp(c,wt(0,6,-p)):i(u,d,o).offsetHSL(0,0,wt(4,30,p)*.08);let _=(l*e+h)*4;o.convertLinearToSRGB(),r.data[_]=o.r*255,r.data[_+1]=o.g*255,r.data[_+2]=o.b*255,r.data[_+3]=255}return s.putImageData(r,0,0),n}var Q_=40,tE=80;function Zd(i){let t=i.length,e=new Float64Array(t),n=new Float64Array(t),s=i.flatMap(c=>c.paths),r=new K("#c9a66e"),o=new K;function a(c,l){let h=-1/0;for(let d=0;d<t;d++){let p=i[d],_=c-p.cx,g=l-p.cz,m=Math.hypot(_,g);if(m>760){e[d]=-1e9;continue}e[d]=p.edge(Math.atan2(g,_))-m+(Ho(c/110+d*17.3,l/110-d*9.1)-.5)*tE,e[d]>h&&(h=e[d])}if(h===-1/0)return n.fill(0),n[0]=1,-1e9;let u=0;for(let d=0;d<t;d++)n[d]=Math.exp((e[d]-h)/Q_),u+=n[d];for(let d=0;d<t;d++)n[d]/=u;return h}return{id:"continent",name:"\u5927\u9678",cx:0,cz:0,maxR:0,height(c,l){let h=a(c,l);if(h<-40)return Do;let u=0,d=0;for(let p=0;p<t;p++)n[p]<.004||(u+=n[p]*i[p].land(c,l),d+=n[p]);u/=d;for(let p of i)p.carve&&(u=p.carve(c,l,u));return Qt(Do,u,wt(-30,55,h))},color(c,l,h,u,d){a(c,l),d.setRGB(0,0,0);let p=0;for(let _=0;_<t;_++)n[_]<.01||(i[_].color(c,l,h,u,o),d.r+=o.r*n[_],d.g+=o.g*n[_],d.b+=o.b*n[_],p+=n[_]);if(d.multiplyScalar(1/p),h>=1.7){let _=Se(c,l,s);_<2.6&&d.lerp(r,wt(2.6,1.6,_)*.75)}return d},weightOf(c,l,h){return a(l,h),n[c]},regionIndexAt(c,l){a(c,l);let h=0;for(let u=1;u<t;u++)n[u]>n[h]&&(h=u);return h}}}var ht=(i,t={})=>new Rt({color:i,roughness:.9,flatShading:!0,...t}),pt=i=>(i.castShadow=i.receiveShadow=!0,i);function tn(i,t){return{box(e,n,s,r,o,a,c,l,h="part"){if(t.push({box:new _e(new F(r-e/2,o,a-s/2),new F(r+e/2,o+n,a+s/2)),color:l,kind:h}),!c)return null;let u=pt(new k(new ft(e,n,s),c));return u.position.set(r,o+n/2,a),i.add(u),u},cyl(e,n,s,r,o,a,c,l="part",h=10){let u=null;return a&&(u=pt(new k(new It(e,e,n,h),a)),u.position.set(s,r+n/2,o),i.add(u)),t.push({box:new _e(new F(s-e,r,o-e),new F(s+e,r+n,o+e)),cyl:{x:s,z:o,r:e},color:c,kind:l}),u}}}function en(i,t,e){let n=new $a(i,t,e);n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1;let s=new xn,r=0;return{mesh:n,add(o,a,c,l=1,h=l,u=l,d=0,p=0,_=0,g=null,m="XYZ"){r>=e||(s.position.set(o,a,c),s.rotation.set(d,p,_,m),s.scale.set(l,h,u),s.updateMatrix(),n.setMatrixAt(r,s.matrix),g&&n.setColorAt(r,g),r++)},addMatrix(o){r>=e||n.setMatrixAt(r++,o)},finish(){return n.count=r,n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n}}}var yM=Math.sqrt(10),Is=720,xi=620,Be={east:20,west:-10,south:-30,north:-40};var xh=i=>380+26*Math.sin(3*i+.5)+14*Math.sin(7*i+2)+8*Math.sin(11*i+1),eE=(i,t)=>[Math.cos(i)*(xh(i)-t),Math.sin(i)*(xh(i)-t)],ci=new dt(44,10).normalize(),qr=new dt(-.39,.92).normalize(),Ni={name:"\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730",x:-164,z:-215,r:24,h:22},[Kd,jd]=eE(2.2,22),Re={altar:{name:"\u661F\u306E\u796D\u58C7",x:0,z:0,r:16,h:5},village:{name:"\u6F6E\u98A8\u306E\u6751 \u30B7\u30AA\u30AB\u30BC",x:190,z:152,r:30,h:4.5},plateau:Ni,lake:{name:"\u93E1\u306E\u6E56",x:Ni.x+ci.x*51,z:Ni.z+ci.y*51,r:20},cave:{name:"\u3072\u304B\u308A\u306E\u6D1E\u7A9F",x:-202,z:114,r:13,h:5},windmill:{name:"\u98A8\u8ECA\u306E\u4E18",x:262,z:-88,r:14},lighthouse:{name:"\u5CAC\u306E\u706F\u53F0",x:Kd,z:jd,r:10},stones:{name:"\u53E4\u306E\u74B0\u72B6\u5217\u77F3",x:-255,z:-60,r:15,h:7}},zi={x:Ni.x+ci.x*18,z:Ni.z+ci.y*18,r:4},Ls=Re.lake,$d=[[Ls.x,Ls.z],[-70,-225],[-20,-250],[40,-275],[100,-300],[170,-330],[260,-380],[340,-440]],dc=[Ni.x+qr.x*62,Ni.z+qr.y*62],gh=[Ni.x+qr.x*20,Ni.z+qr.y*20],En=Re.village,fc=Re.cave,_n=Re.windmill,ai=Re.stones,Jd=[[[0,0],[60,50],[130,105],[En.x,En.z]],[[En.x,En.z],[En.x+12,En.z+48],[En.x+12,En.z+190]],[[0,0],[-30,-80],[-70,-150],[Ls.x+12,Ls.z+20]],[[0,0],[-60,-40],[-130,-110],dc],[dc,[(dc[0]+gh[0])/2+4,(dc[1]+gh[1])/2],gh],[[0,0],[-80,40],[-150,90],[fc.x+13,fc.z]],[[0,0],[90,-20],[180,-60],[_n.x-12,_n.z+3]],[[0,0],[-60,90],[-150,200],[Kd+8,jd-8]],[[-130,-110],[-200,-80],[ai.x+12,ai.z]],[[0,0],[130,Be.east-5],[260,Be.east],[480,Be.east]],[[-60,-40],[-150,-20],[-300,Be.west],[-480,Be.west]],[[0,0],[-20,100],[Be.south,250],[Be.south,480]],[[0,0],[-20,-120],[Be.north,-240],[Be.north,-480]],[[0,0],[150,-140],[330,-330]],[[En.x,En.z],[270,250],[360,360]],[[0,0],[-120,150],[-330,330]],[[-130,-110],[-230,-230],[-340,-330]]],Ri={sandDeep:new K("#c7ae78"),sand:new K("#f0dba3"),grass:new K("#7cbf5a"),grassDark:new K("#5f9f45"),grassHigh:new K("#93bf62"),rock:new K("#9a8f86"),rockDark:new K("#7d7470"),path:new K("#cfab72"),plaza:new K("#dccdaa")},nE=new K,Qd={id:"start",name:"\u59CB\u307E\u308A\u306E\u8349\u539F",cx:0,cz:0,edge:xh,maxR:465,places:Re,paths:Jd,sanctuaries:[{x:Re.altar.x,z:Re.altar.z,r:14},{x:En.x,z:En.z,r:36}],land(i,t){let e=Math.hypot(i,t),n=3.5+Vt(i/45,t/45)*4.5;n+=Vt(i/150+20,t/150)*9*wt(70,220,e),n+=cs(i,t,_n.x,_n.z,90,13),n+=cs(i,t,-38,234,76,9),n+=cs(i,t,107,-120,50,4),n+=cs(i,t,250,230,70,8);let s=Ni,r=i-s.x,o=t-s.z,a=Math.hypot(r,o),c=a>.001?(r*qr.x+o*qr.y)/a:0,l=Qt(8,42,wt(.82,.97,c)),h=s.h+(Vt(i/12,t/12)-.5)*.8;n=Qt(n,h,wt(s.r+l,s.r,a)),n=Qt(n,s.h-1.3,wt(zi.r+1.5,zi.r-1,Math.hypot(i-zi.x,t-zi.z)));let u=ir(i,t,zi.x,zi.z,s.x+ci.x*25,s.z+ci.y*25);a<s.r+1&&(n=Math.min(n,Qt(s.h-.8,n,wt(.8,2.2,u))));for(let d of["altar","village","cave","stones"]){let p=Re[d];n=Qt(n,p.h,wt(p.r+16,p.r,Math.hypot(i-p.x,t-p.z)))}return n},carve(i,t,e){return e=Qt(e,-3.5,wt(Ls.r+10,Ls.r-3,Math.hypot(i-Ls.x,t-Ls.z))),Qt(e,-2.5,wt(22,5,Xr(i,t,$d)))},color(i,t,e,n,s){if(e<1.7)s.copy(Ri.sandDeep).lerp(Ri.sand,wt(-2,1.2,e));else{let r=Vt(i/9,t/9);s.copy(Ri.grassDark).lerp(Ri.grass,r),s.lerp(Ri.grassHigh,wt(12,22,e)*.8),s.lerp(Ri.sand,wt(2.4,1.7,e));let o=Se(i,t,Jd);o<2.6&&s.lerp(nE.copy(Ri.path).offsetHSL(0,0,(r-.5)*.06),wt(2.6,1.6,o)),Math.hypot(i-En.x,t-En.z)<14&&s.lerp(Ri.plaza,wt(14,12,Math.hypot(i-En.x,t-En.z))),Math.hypot(i-fc.x,t-fc.z)<12&&s.copy(Ri.rockDark)}return n>.75&&s.lerp(Vt(i/4,t/4)>.5?Ri.rock:Ri.rockDark,wt(.75,1.1,n)),s},nature:{trees:{style:"round",count:320,minH:2.6,avoidRiver:$d,accentChance:.15,leafColors:[5216842,6665558,4164178,15902402]},palms:90,rocks:180,grass:{count:9e3,color:6266693},flowers:{count:2500,colors:[16774384,16766044,16752575,12166911]},avoid:[...Object.values(Re).map(i=>[i.x,i.z,i.r]),[En.x+12,En.z+175,12]]},enemies:{kumodama:{count:30},ishimori:{count:7}},decorate(i,t){let e=new xt,n=tn(e,i),s=t(_n.x,_n.z),r=ht(15919832);n.cyl(4.2,14,_n.x,s-.5,_n.z,null,15919832);let o=pt(new k(new It(3,4.4,14,8),r));o.position.set(_n.x,s+6.5,_n.z);let a=pt(new k(new Zt(4,4.5,8),ht(14246986)));a.position.set(_n.x,s+15.7,_n.z);let c=new k(new ft(1.6,2.6,.3),ht(8015414)),l=Math.atan2(-_n.x,-_n.z);c.position.set(_n.x+Math.sin(l)*4.1,s+1.3,_n.z+Math.cos(l)*4.1),c.rotation.y=l,e.add(o,a,c);let h=new xt;h.position.set(_n.x+Math.sin(l)*3.6,s+12,_n.z+Math.cos(l)*3.6),h.rotation.y=l;let u=ht(9067067),d=ht(16774884,{side:ce}),p=new k(new It(.6,.6,.8,8),u);p.rotation.x=Math.PI/2,h.add(p);for(let S=0;S<4;S++){let L=new xt;L.rotation.z=S/4*Math.PI*2;let U=pt(new k(new ft(.35,10,.25),u));U.position.y=5;let N=pt(new k(new yn(2,7.5),d));N.position.set(1.15,5.8,.05),L.add(U,N),h.add(L)}e.add(h);let[_,g]=[Re.lighthouse.x,Re.lighthouse.z],m=t(_,g),f=ht(12432806),w=pt(new k(new It(4.2,4.6,2.5,10),f));w.position.set(_,m+.8,g),e.add(w);for(let S=0;S<6;S++){let L=3.2-S*.18,U=3.2-(S+1)*.18,N=pt(new k(new It(U,L,3.4,12),ht(S%2?14246986:16447214)));N.position.set(_,m+2+S*3.4+1.7,g),e.add(N)}let y=m+2+6*3.4,M=pt(new k(new It(3,3,.4,12),ht(4869737)));M.position.set(_,y+.2,g);let R=new k(new It(1.4,1.4,2.2,10),new Rt({color:16773544,emissive:16765024,emissiveIntensity:1.4}));R.position.set(_,y+1.5,g);let v=pt(new k(new Zt(1.9,2,10),ht(4869737)));v.position.set(_,y+3.6,g),e.add(M,R,v),n.cyl(3.6,27,_,m-.5,g,null,14246986);let x=new xt;x.position.set(_,y+1.5,g);let A=new Me({color:16773544,transparent:!0,opacity:.22,depthWrite:!1,blending:Wn,side:ce});for(let S of[1,-1]){let L=new k(new Zt(6,60,16,1,!0),A);L.rotation.z=S*Math.PI/2,L.position.x=S*30,x.add(L)}e.add(x);let E=new Xe(16769184,40,40);E.position.set(_,y+1.5,g),e.add(E);let T=ai.h,b=ht(11116950);for(let S=0;S<12;S++){let L=S/12*Math.PI*2,U=ai.x+Math.cos(L)*11,N=ai.z+Math.sin(L)*11,z=S%4===3?2.2:4.5+S%3*.6,B=pt(new k(new ft(1.5,z,.9),b));B.position.set(U,T+z/2-.3,N),B.rotation.y=-L+Math.PI/2,e.add(B),n.cyl(.9,z,U,T-.5,N,null,11116950)}for(let S of[0,4,8]){let L=(S+.5)/12*Math.PI*2,U=pt(new k(new ft(1.2,.8,6.4),b));U.position.set(ai.x+Math.cos(L)*11,T+5.2,ai.z+Math.sin(L)*11),U.rotation.y=-L,e.add(U)}let I=pt(new k(new It(2.2,2.4,.9,10),b));I.position.set(ai.x,T+.45,ai.z),e.add(I),n.cyl(2.3,.9,ai.x,T-.5,ai.z,null,11116950);let D=new k(new on(.6,0),new Rt({color:13154559,emissive:9400288,emissiveIntensity:1.2}));return D.position.set(ai.x,T+2,ai.z),e.add(D),{group:e,update(S,L){h.rotateZ(S*.6),x.rotation.y+=S*.7,D.rotation.y+=S,D.position.y=T+2+Math.sin(L*1.5)*.25}}}};var Ue=(i,t={})=>new Rt({color:i,roughness:.85,flatShading:!0,...t}),Qn=i=>(i.castShadow=i.receiveShadow=!0,i);function tf(i,t,e,n){let s=new Ps;s.moveTo(-i/2-.6,0),s.lineTo(0,e),s.lineTo(i/2+.6,0),s.lineTo(-i/2-.6,0);let r=new Qs(s,{depth:t+1.2,bevelEnabled:!1});return r.translate(0,0,-(t+1.2)/2),Qn(new k(r,n))}function Uo({w:i,d:t,wall:e,roof:n,trim:s}){let r=new xt,o=4.4,a=Qn(new k(new ft(i,o,t),Ue(e)));a.position.y=o/2,r.add(a);let c=Ue(s),l=Qn(new k(new ft(i+.4,.5,t+.4),Ue(11050900)));l.position.y=.25,r.add(l);for(let y of[-1,1])for(let M of[-1,1]){let R=new k(new ft(.35,o,.35),c);R.position.set(y*(i/2),o/2,M*(t/2)),r.add(R)}let h=new k(new ft(i+.2,.3,t+.2),c);h.position.y=o,r.add(h);let u=tf(i,t,2.8,Ue(n));u.position.y=o,r.add(u);let d=Qn(new k(new ft(.8,2.4,.8),Ue(11773594)));d.position.set(i*.25,o+2.2,-t*.2),r.add(d);let p=new k(new ft(1.3,2.3,.15),Ue(8015414));p.position.set(0,1.4,t/2+.05);let _=new k(new ie(.08,6,4),Ue(16040539,{metalness:.6}));_.position.set(.4,1.4,t/2+.15),r.add(p,_);let g=Ue(16773572,{emissive:16762992,emissiveIntensity:.35}),m=Ue(s),f=(y,M,R)=>{let v=new xt,x=new k(new ft(1.1,1.1,.1),g),A=new k(new ft(1.3,.12,.14),m),E=new k(new ft(.12,1.3,.14),m),T=new k(new ft(1.4,.15,.4),m);T.position.y=-.65,v.add(x,A,E,T),v.position.set(y,2.6,M),v.rotation.y=R,r.add(v)};f(-i/2+1.4,t/2+.05,0),f(i/2-1.4,t/2+.05,0),f(i/2+.05,0,Math.PI/2),f(-i/2-.05,0,-Math.PI/2);let w=new k(new ft(1.2,.35,.35),Ue(9067067));w.position.set(-i/2+1.4,1.95,t/2+.3),r.add(w);for(let y=0;y<3;y++){let M=new k(new Sn(.16,0),Ue([16752575,16766044,16774384][y]));M.position.set(-i/2+1+y*.4,2.25,t/2+.3),r.add(M)}return r}function ef(i,t){let e=new xt,n=Re.village,s=n.h,r=(I,D="house",S=11565653)=>{I.updateMatrixWorld(!0),i.push({box:new _e().setFromObject(I),color:S,kind:D})},o=[[-19,-10,Math.PI/2,8,7,16050904,14246986,9067067],[0,-20,0,9,7,15393778,4165532,7030320],[19,-11,-Math.PI/2,8,7,16181192,5929156,9067067],[-19,11,Math.PI/2,7,6,15331812,14721340,7030320],[20,12,-Math.PI/2,8,6.5,16050904,10117040,9067067]];for(let[I,D,S,L,U,N,z,B]of o){let V=Uo({w:L,d:U,wall:N,roof:z,trim:B});V.position.set(n.x+I,s,n.z+D),V.rotation.y=S,e.add(V);let X=new k(new ft(L+.4,7,U+.4));X.position.set(n.x+I,s+3.5,n.z+D),X.rotation.y=S,r(X,"house",z)}let a=new xt,c=Ue(12432806),l=Qn(new k(new It(1.6,1.7,1.1,12,1,!0),c));l.material.side=ce,l.position.y=.55;let h=Qn(new k(new Kn(1.6,.2,6,16),c));h.rotation.x=Math.PI/2,h.position.y=1.1;let u=new k(new $e(1.5,16),Ue(3899328,{roughness:.2}));u.rotation.x=-Math.PI/2,u.position.y=.5,a.add(l,h,u);let d=Ue(9067067);for(let I of[-1,1]){let D=Qn(new k(new ft(.25,3.2,.25),d));D.position.set(I*1.5,1.6,0),a.add(D)}let p=tf(2.6,2.2,1.1,Ue(14246986));p.position.y=3.1,p.rotation.y=Math.PI/2;let _=new k(new It(.3,.25,.45,8),d);_.position.set(0,2.2,0),a.add(p,_),a.position.set(n.x,s,n.z),e.add(a),i.push({box:new _e(new F(n.x-1.8,s,n.z-1.8),new F(n.x+1.8,s+4,n.z+1.8)),cyl:{x:n.x,z:n.z,r:1.8},color:12432806,kind:"house"});let g=(I,D,S,L)=>{let U=new xt,N=Qn(new k(new ft(4,1.1,1.6),d));N.position.y=.55,U.add(N);for(let V of[-1,1])for(let X of[-1,1]){let nt=new k(new ft(.18,3,.18),d);nt.position.set(V*1.9,1.5,X*.9-.3),U.add(nt)}for(let V=0;V<6;V++){let X=new k(new ft(.7333333333333334,.12,2.6),Ue(V%2?16777215:L));X.position.set(-2.2+4.4/12+V*4.4/6,3.05,-.3),X.rotation.x=.25,X.castShadow=!0,U.add(X)}let z=[16739162,16766044,9426027,16753212,10471144];for(let V=0;V<7;V++){let X=new k(new Sn(.22,0),Ue(z[V%z.length]));X.position.set(-1.5+V*.5,1.28,V%2*.35-.15),U.add(X)}U.position.set(I,s,D),U.rotation.y=S,e.add(U);let B=new k(new ft(4,2,1.6));B.position.set(I,s+1,D),B.rotation.y=S,r(B,"house",L)};g(n.x+8,n.z+7,-Math.PI/2,2864544),g(n.x-8,n.z+7,Math.PI/2,14698330);let m=Ue(10119748),f=Ue(12884588),w=[["barrel",5,-14],["barrel",6.2,-13.2],["crate",-5,-14],["crate",-5,-12.7,1.1],["barrel",13,3],["crate",-13,-3],["barrel",-14,20],["crate",14,21]];for(let[I,D,S,L=0]of w){let U=Qn(I==="barrel"?new k(new It(.55,.55,1.2,10),m):new k(new ft(1.1,1.1,1.1),f));U.position.set(n.x+D,s+.6+L,n.z+S),U.rotation.y=D,e.add(U),L||i.push({box:new _e(new F(n.x+D-.6,s,n.z+S-.6),new F(n.x+D+.6,s+1.2,n.z+S+.6)),cyl:{x:n.x+D,z:n.z+S,r:.6},color:10119748,kind:"prop"})}let y=Ue(16770728,{emissive:16762992,emissiveIntensity:1.2}),M=[[-9,-6],[9,-6],[-9,16],[9,16],[3,26]];for(let[I,D]of M){let S=n.x+I,L=n.z+D,U=Qn(new k(new It(.12,.16,4,6),Ue(4869737)));U.position.set(S,s+2,L);let N=new k(new on(.35,0),y);N.position.set(S,s+4.2,L),e.add(U,N),i.push({box:new _e(new F(S-.2,s,L-.2),new F(S+.2,s+4,L+.2)),cyl:{x:S,z:L,r:.2},color:4869737,kind:"prop"})}let R=new xt;for(let I of[-1,1]){let D=Qn(new k(new ft(.25,3.2,.25),d));D.position.set(I*1.8,1.6,0),R.add(D)}let v=(()=>{let I=document.createElement("canvas");I.width=256,I.height=96;let D=I.getContext("2d");D.fillStyle="#c49a6c",D.fillRect(0,0,256,96),D.fillStyle="#5a3a24",D.font='bold 40px "M PLUS Rounded 1c", sans-serif',D.textAlign="center",D.textBaseline="middle",D.fillText("\u30B7\u30AA\u30AB\u30BC\u6751",128,50);let S=new mi(I);return S.colorSpace=He,S})(),x=new k(new ft(4,1.4,.2),[d,d,d,d,new Rt({map:v}),new Rt({map:v})]);x.position.y=2.6,R.add(x),R.position.set(n.x-22,t(n.x-22,n.z-10),n.z-10),R.rotation.y=Math.atan2(-(n.x-22),-(n.z-10)),e.add(R);let A=n.x+12,E=n.z+40;for(;E<n.z+400&&t(A,E)>.9;)E+=1;let T=E<n.z+400,b=new xt;if(T){E-=4;let I=28,D=1.4,S=Ue(11897438);for(let z=0;z<I/1.2;z++){let B=Qn(new k(new ft(4,.25,1.1),S));B.position.set(A+(Math.random()-.5)*.1,D-.12,E+z*1.2+.6),e.add(B)}for(let z=0;z<=I;z+=4)for(let B of[-1,1]){let V=Qn(new k(new It(.2,.2,5,6),Ue(8015414)));V.position.set(A+B*1.9,D-2,E+z),e.add(V)}i.push({box:new _e(new F(A-2,D-.5,E),new F(A+2,D,E+I)),color:11897438,kind:"pier"});let L=new Ps;L.moveTo(-1.3,.8),L.lineTo(1.3,.8),L.lineTo(.9,0),L.lineTo(-.9,0),L.lineTo(-1.3,.8);let U=Qn(new k(new Qs(L,{depth:5,bevelEnabled:!1}),Ue(14246986)));U.position.z=-2.5;let N=new k(new ft(2.4,.15,.6),Ue(16050904));N.position.y=.6,b.add(U,N),b.position.set(A+4.2,Yn-.3,E+I-5),e.add(b)}return{group:e,update(I){b.position.y=Yn-.3+Math.sin(I*1.3)*.15,b.rotation.z=Math.sin(I*1.1)*.05}}}var Mn=Is,ls=0,Yr={greatTree:{name:"\u5343\u5E74\u6A39",x:Mn,z:ls,r:22,h:8},mushroom:{name:"\u30AD\u30CE\u30B3\u306E\u8C37",x:Mn+133,z:ls+152,r:30},spring:{name:"\u5996\u7CBE\u306E\u6CC9",x:Mn-150,z:ls-170,r:14,h:5},cabin:{name:"\u6728\u3053\u308A\u306E\u5C0F\u5C4B",x:Mn+170,z:ls-140,r:16,h:6}},Je=Yr.greatTree,Rn=Yr.mushroom,dn=Yr.spring,ve=Yr.cabin,nf=[[[Mn-420,Be.east],[Mn-200,Be.east-2],[Mn-60,5],[Je.x-22,Je.z]],[[Mn-60,5],[Mn+40,80],[Rn.x-20,Rn.z-14]],[[Mn-200,Be.east-2],[Mn-180,-90],[dn.x-4,dn.z+16]],[[Mn-60,5],[Mn+60,-70],[ve.x-16,ve.z+4]]],Oi={sand:new K("#e6d3a0"),sandDeep:new K("#c4ad7c"),moss:new K("#5f9a4a"),dark:new K("#3f7a3c"),clearing:new K("#86c263"),valley:new K("#6f8a6a"),path:new K("#a8845a"),rock:new K("#7f7f72")},sf={id:"forest",name:"\u6DF1\u7DD1\u306E\u68EE",cx:Mn,cz:ls,edge:On(420,[26,1.2,16,.3,10,2.4]),maxR:480,places:Yr,paths:nf,sanctuaries:[],land(i,t){let e=4+Vt(i/35,t/35)*6+Vt(i/140,t/140+9)*10;e+=cs(i,t,Mn+174,ls-63,82,8),e+=cs(i,t,Mn-60,ls+200,90,9),e+=cs(i,t,Mn-230,ls+90,70,7);for(let n of[Je,dn,ve])e=Qt(e,n.h,wt(n.r+16,n.r,Math.hypot(i-n.x,t-n.z)));return e=Qt(e,3,wt(Rn.r+16,Rn.r-4,Math.hypot(i-Rn.x,t-Rn.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Oi.sandDeep).lerp(Oi.sand,wt(-2,1.2,e));let r=Vt(i/8,t/8);s.copy(Oi.dark).lerp(Oi.moss,r),s.lerp(Oi.sand,wt(2.4,1.7,e)),s.lerp(Oi.clearing,wt(Je.r+6,Je.r-6,Math.hypot(i-Je.x,t-Je.z))*.8),s.lerp(Oi.clearing,wt(dn.r+6,dn.r-2,Math.hypot(i-dn.x,t-dn.z))*.7),s.lerp(Oi.valley,wt(Rn.r+8,Rn.r-6,Math.hypot(i-Rn.x,t-Rn.z)));let o=Se(i,t,nf);return o<2.4&&s.lerp(Oi.path,wt(2.4,1.4,o)),n>.75&&s.lerp(Oi.rock,wt(.75,1.1,n)),s},nature:{trees:{style:"round",count:1250,leafColors:[4160060,3107642,5214021,5937744],trunkColor:7030320},palms:30,rocks:130,rockColor:8355698,grass:{count:9500,color:5214015},flowers:{count:2500,colors:[13625599,16777215,10473727]},avoid:Object.values(Yr).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E2\u30EA\u30C0\u30DE",tint:5214042,mult:1.6,count:34},ishimori:{name:"\u30B3\u30B1\u30A4\u30EF",tint:7307098,mult:1.6,count:11}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=Je.h,o=ht(7031347,{roughness:1}),a=pt(new k(new It(3.6,6.5,34,10),o));a.position.set(Je.x,r+17,Je.z),n.add(a),s.cyl(6,40,Je.x,r-1,Je.z,null,7031347);for(let N=0;N<7;N++){let z=N/7*Math.PI*2+.3,B=pt(new k(new Zt(1.6,9,6),o));B.position.set(Je.x+Math.cos(z)*7,r+1,Je.z+Math.sin(z)*7),B.rotation.set(Math.sin(z)*1.2,0,-Math.cos(z)*1.2),n.add(B)}let c=[ht(4164165),ht(5216842),ht(3111488)];for(let N=0;N<12;N++){let z=e()*Math.PI*2,B=N<3?0:6+e()*10,V=9+e()*6,X=pt(new k(new Sn(1,0),c[N%3]));X.scale.setScalar(V),X.position.set(Je.x+Math.cos(z)*B,r+32+e()*12-B*.3,Je.z+Math.sin(z)*B),X.rotation.set(e()*3,e()*3,0),n.add(X)}let l=ht(13616822),h=pt(new k(new ft(2.4,1.2,1.6),l));h.position.set(Je.x-9,r+.6,Je.z),h.rotation.y=Math.PI/2,n.add(h),s.cyl(1.4,1.2,Je.x-9,r,Je.z,null,13616822);let u=new k(new ie(.4,12,8),new Rt({color:13172656,emissive:9429104,emissiveIntensity:1.3}));u.position.set(Je.x-9,r+1.7,Je.z),n.add(u);let d=[new Rt({color:10483434,emissive:4183744,emissiveIntensity:.9,flatShading:!0}),new Rt({color:16759008,emissive:13656232,emissiveIntensity:.8,flatShading:!0}),new Rt({color:16773544,emissive:14725184,emissiveIntensity:.7,flatShading:!0})],p=ht(15919832);for(let N=0;N<32;N++){let z=e()*Math.PI*2,B=e()*(Rn.r+6),V=Rn.x+Math.cos(z)*B,X=Rn.z+Math.sin(z)*B,nt=t(V,X),q=.8+e()*2.8,j=pt(new k(new It(.25*q,.35*q,2*q,8),p));j.position.set(V,nt+q,X);let ut=pt(new k(new ie(1.1*q,12,6,0,Math.PI*2,0,Math.PI/2),d[N%3]));ut.scale.y=.7,ut.position.set(V,nt+2*q-.1,X),n.add(j,ut),q>1.4&&s.cyl(.35*q,2*q+.6,V,nt-.5,X,null,d[N%3].color.getHex())}let _=new Xe(8384736,60,45);_.position.set(Rn.x,t(Rn.x,Rn.z)+5,Rn.z),n.add(_);let g=new k(new $e(8,28),new Rt({color:10483434,emissive:4175552,emissiveIntensity:.6,transparent:!0,opacity:.85,roughness:.1}));g.rotation.x=-Math.PI/2,g.position.set(dn.x,dn.h+.25,dn.z),n.add(g);let m=ht(13616822);for(let N=0;N<14;N++){let z=N/14*Math.PI*2,B=.7+e()*.5,V=pt(new k(new Xn(B,0),m));V.position.set(dn.x+Math.cos(z)*8.8,dn.h+B*.4,dn.z+Math.sin(z)*8.8),n.add(V)}let f=40,w=new Float32Array(f*3),y=new oe;y.setAttribute("position",new de(w,3));let M=new Ze(y,new We({color:16771327,size:.45,transparent:!0,opacity:.9,depthWrite:!1}));M.frustumCulled=!1,n.add(M);let R=new Xe(12124144,25,20);R.position.set(dn.x,dn.h+2,dn.z),n.add(R);let v=Uo({w:8,d:6.5,wall:10119748,roof:5929540,trim:5913124});v.position.set(ve.x,ve.h,ve.z),v.rotation.y=-Math.PI/2,n.add(v);let x=new k(new ft(8.4,7,6.9));x.position.set(ve.x,ve.h+3.5,ve.z),x.rotation.y=-Math.PI/2,x.updateMatrixWorld(!0),i.push({box:new _e().setFromObject(x),color:5929540,kind:"house"});let A=ht(9067067);for(let N=0;N<3;N++)for(let z=0;z<4-N;z++){let B=pt(new k(new It(.4,.4,3.2,8),A));B.rotation.x=Math.PI/2,B.position.set(ve.x-8+z*.85+N*.42,ve.h+.4+N*.72,ve.z+7),n.add(B)}i.push({box:new _e(new F(ve.x-8.5,ve.h-.5,ve.z+5.3),new F(ve.x-4.9,ve.h+2,ve.z+8.7)),color:9067067,kind:"prop"});let E=pt(new k(new It(.8,.95,.9,10),A));E.position.set(ve.x-7,ve.h+.45,ve.z-5);let T=new k(new It(.07,.07,1.4,6),ht(7030320));T.position.set(ve.x-7,ve.h+1.4,ve.z-5),T.rotation.z=.4;let b=new k(new ft(.5,.35,.08),ht(12634320,{metalness:.6}));b.position.set(ve.x-6.8,ve.h+1,ve.z-5),n.add(E,T,b),s.cyl(.95,.9,ve.x-7,ve.h-.2,ve.z-5,null,9067067);let I=180,D=new Float32Array(I*3),S=[];for(let N=0;N<I;N++){let z=e()*Math.PI*2,B=8+e()*60,V=Mn+Math.cos(z)*B,X=ls+Math.sin(z)*B;S.push({x:V,z:X,y:t(V,X)+1+e()*4,p:e()*10})}let L=new oe;L.setAttribute("position",new de(D,3));let U=new Ze(L,new We({color:14679946,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return U.frustumCulled=!1,n.add(U),{group:n,update(N,z){u.position.y=r+1.7+Math.sin(z*2)*.15;for(let B=0;B<I;B++){let V=S[B];D[B*3]=V.x+Math.sin(z*.7+V.p)*1.5,D[B*3+1]=V.y+Math.sin(z*1.3+V.p*2)*.8,D[B*3+2]=V.z+Math.cos(z*.6+V.p)*1.5}L.attributes.position.needsUpdate=!0,U.material.opacity=.6+Math.sin(z*3)*.3;for(let B=0;B<f;B++){let V=z*.6+B/f*Math.PI*2,X=3+B%5*1.1;w[B*3]=dn.x+Math.cos(V*(1+B%3*.2))*X,w[B*3+1]=dn.h+1+Math.sin(z*2+B)*.8+B%4*.6,w[B*3+2]=dn.z+Math.sin(V*(1+B%3*.2))*X}y.attributes.position.needsUpdate=!0,g.material.emissiveIntensity=.5+Math.sin(z*1.5)*.2}}}};var pc=(i,t,e=6)=>new It(i,t,1,e).translate(0,.5,0),ti={trunk:pc(.45,.7),pineTrunk:pc(.35,.5),cone:new Zt(1,1,7).translate(0,.5,0),blob:new Sn(1,0),cactus:pc(.5,.55,8),cactusTop:new ie(.5,8,5,0,Math.PI*2,0,Math.PI/2),branch:pc(.12,.22,5),rock:new Xn(1,0),blade:new Zt(.18,.9,3),flower:new Sn(.22,0),palmSeg:new It(.3,.36,1.25,6),frond:new Zt(.9,4.2,3,1,!0).translate(0,2.1,0),nut:new ie(.28,6,5)};function yh(i){let t=en(ti.palmSeg,ht(11108954),i*6),e=en(ti.frond,ht(5221973,{side:ce}),i*7),n=en(ti.nut,ht(7030320),i*3);return{add(s,r,o,a,c,l){let h=new dt(a,c).normalize().multiplyScalar(.35+l()*.3),u=new F;for(let d=0;d<6;d++){let p=d/6,_=s+h.x*p*p*4,g=r+d*1.15+.6,m=o+h.y*p*p*4;t.add(_,g,m,1-d*.05,1,1-d*.05,h.y*p*.6,0,-h.x*p*.6),u.set(_,g+.7,m)}for(let d=0;d<7;d++)e.add(u.x,u.y,u.z,1,1,.25,0,d/7*Math.PI*2,1.15+l()*.25,null,"YXZ");for(let d=0;d<3;d++)n.add(u.x+Math.cos(d*2.1)*.4,u.y-.4,u.z+Math.sin(d*2.1)*.4)},finish(s){s.add(t.finish(),e.finish(),n.finish())}}}function rf(i,t,e,n,s,r=()=>1,o=1){let a=i.nature,c=(f,w)=>s()<r(f,w),l=new xt,h=i.maxR,u=a.avoid||[],d=()=>[i.cx+(s()-.5)*2*h,i.cz+(s()-.5)*2*h],p=(f,w,y)=>u.some(([M,R,v])=>Math.hypot(f-M,w-R)<v+y),_=(f,w,y,M,R,v,x)=>{t.push({box:new _e(new F(f-y,M,w-y),new F(f+y,M+R,w+y)),cyl:{x:f,z:w,r:y},color:v,kind:x})},g=a.trees;if(g&&g.count){let f=g.count,w=ht(g.trunkColor??9067067,{roughness:1}),y=(g.leafColors||[5216842]).map(A=>ht(A)),M=y.map(A=>en(g.style==="pine"?ti.cone:ti.blob,A,f*3)),R=en(g.style==="pine"?ti.pineTrunk:g.style==="cactus"?ti.cactus:ti.trunk,g.style==="cactus"?y[0]:w,f*(g.style==="cactus"?3:1)),v=g.style==="cactus"?en(ti.cactusTop,y[0],f*3):g.style==="dead"?en(ti.branch,w,f*3):g.snowy?en(ti.cone,ht(16054523),f*3):null,x=0;for(let A=0;x<f&&A<f*40;A++){let[E,T]=d(),b=e(E,T);if(b<(g.minH??2.6)||b>(g.maxH??999)||n(E,T)>(g.maxSlope??.45)||p(E,T,4)||Se(E,T,i.paths)<4||g.avoidRiver&&Xr(E,T,g.avoidRiver)<10||!c(E,T))continue;x++;let I=g.accentChance&&s()<g.accentChance?y.length-1:Math.floor(s()*(y.length-(g.accentChance?1:0))),D;if(g.style==="round"){D=4+s()*3,R.add(E,b-.3,T,1,D,1);let S=2+Math.floor(s()*2);for(let L=0;L<S;L++){let U=2.4+s()*1.4-L*.4;M[I].add(E+(s()-.5)*1.5,b+D+L*1.8,T+(s()-.5)*1.5,U,U,U,s()*3,s()*3,s()*3)}_(E,T,.7,b-1,D+3,y[I].color.getHex(),"tree")}else if(g.style==="pine"){D=7+s()*5,R.add(E,b-.3,T,1,2.2,1);for(let S=0;S<3;S++){let L=(2.6-S*.7)*(D/10),U=D*.42,N=b+1.6+S*D*.26;M[I].add(E,N,T,L,U,L,0,s()*3,0),v&&v.add(E,N+U*.55,T,L*.55,U*.45,L*.55,0,s()*3,0)}_(E,T,.6,b-1,D+2,y[I].color.getHex(),"tree")}else if(g.style==="cactus"){D=2.5+s()*2.2,R.add(E,b-.2,T,1,D,1),v.add(E,b-.2+D,T);let S=1+Math.floor(s()*2);for(let L=0;L<S;L++){let U=s()*Math.PI*2+L*Math.PI,N=E+Math.cos(U)*.9,z=T+Math.sin(U)*.9,B=b+D*(.35+s()*.25),V=1+s()*1.2;R.add(N,B,z,.6,V,.6),v.add(N,B+V,z,.6,.6,.6)}_(E,T,.8,b-1,D+1,y[0].color.getHex(),"tree")}else if(g.style==="dead"){D=4+s()*3,R.add(E,b-.3,T,.8,D,.8);for(let S=0;S<2;S++){let L=s()*Math.PI*2;v.add(E,b+D*(.5+S*.2),T,1,1.6+s()*1.5,1,Math.cos(L)*.9,0,Math.sin(L)*.9)}_(E,T,.5,b-1,D+1,3813424,"tree")}}l.add(R.finish()),M.forEach(A=>l.add(A.finish())),v&&l.add(v.finish())}if(a.palms){let f=yh(a.palms),w=0;for(let y=0;w<a.palms&&y<a.palms*300;y++){let[M,R]=d(),v=e(M,R);if(v<1||v>2.6||p(M,R,2)||Se(M,R,i.paths)<5||!c(M,R))continue;w++;let x=e(M-3,R)-e(M+3,R),A=e(M,R-3)-e(M,R+3);f.add(M,v-.2,R,x||1,A,s),_(M,R,.45,v-1,7,5221973,"tree")}f.finish(l)}if(a.rocks){let f=en(ti.rock,ht(a.rockColor??10327971),a.rocks),w=0;for(let y=0;w<a.rocks&&y<a.rocks*80;y++){let[M,R]=d(),v=e(M,R);if(v<.3||p(M,R,3)||Se(M,R,i.paths)<3||n(M,R)<.35&&s()>.35||!c(M,R))continue;w++;let x=.8+s()*1.8;f.add(M,v+x*.3,R,x*1.3,x,x*1.1,s(),s()*3,s()),_(M,R,x*1.1,v-.5,x*1.3,a.rockColor??10327971,"rock")}l.add(f.finish())}let m=(f,w,y,M,R)=>{let v=en(f,w,y);v.mesh.castShadow=!1;let x=0,A=R?.map(E=>new K(E));for(let E=0;x<y&&E<y*20;E++){let[T,b]=d(),I=e(T,b);if(I<2.2||n(T,b)>.5||Se(T,b,i.paths)<2.5||p(T,b,-2)||!c(T,b))continue;let D=.7+s()*.6;v.add(T,I+M,b,D,D,D,0,s()*3,(s()-.5)*.4,A?A[Math.floor(s()*A.length)]:null),x++}l.add(v.finish())};return a.grass?.count&&m(ti.blade,ht(a.grass.color,{flatShading:!1}),Math.round(a.grass.count*o),.35),a.flowers?.count&&m(ti.flower,ht(16777215),Math.round(a.flowers.count*o),.3,a.flowers.colors),l}var Ci=0,fn=Is,Zr={oasis:{name:"\u98A8\u5F85\u3061\u306E\u30AA\u30A2\u30B7\u30B9",x:Ci+95,z:fn+47,r:20},temple:{name:"\u7802\u306E\u795E\u6BBF",x:Ci-114,z:fn-63,r:16,h:5},arch:{name:"\u5CA9\u306E\u30A2\u30FC\u30C1",x:Ci+40,z:fn-190,r:14},camp:{name:"\u968A\u5546\u306E\u91CE\u55B6\u5730",x:Ci-170,z:fn+130,r:16,h:4}},An=Zr.oasis,qe=Zr.temple,Ai=Zr.arch,vn=Zr.camp,_h=[[Ci+133,fn-152,22,17],[Ci-164,fn+133-60,24,14],[Ci+183,fn+196,18,22],[Ci-38,fn+247,15,12],[Ci+260,fn+40,20,16],[Ci-250,fn-40,18,15]],of=[[[Be.south,fn-420],[Be.south,fn-250],[-60,fn-120],[qe.x+8,qe.z-14]],[[-60,fn-120],[20,fn-20],[An.x-22,An.z-10]],[[Be.south,fn-250],[Ai.x-10,Ai.z-20],[Ai.x,Ai.z+20]],[[-60,fn-120],[-130,fn+40],[vn.x+10,vn.z-14]]],Fi={sand:new K("#ecd08e"),sandShade:new K("#d9b872"),sandDeep:new K("#c9a96c"),red1:new K("#c4704a"),red2:new K("#a85a3c"),red3:new K("#d99a6c"),green:new K("#7cbf5a"),path:new K("#c09058"),stone:new K("#d8c7a0")},af={id:"desert",name:"\u967D\u708E\u306E\u7802\u6F20",cx:Ci,cz:fn,edge:On(420,[24,2.1,18,.8,10,1.5]),maxR:480,places:Zr,paths:of,sanctuaries:[],land(i,t){let e=Vt(i/60,t/60),n=3+(Math.sin(i*.07+t*.02+e*6)*.5+.5)*3.2+Vt(i/25,t/25)*2+Vt(i/160,t/160+4)*8;for(let[s,r,o,a]of _h)n=Qt(n,a+6+(Vt(i/10,t/10)-.5),wt(o+5,o,Math.hypot(i-s,t-r)));for(let s of[qe,vn])n=Qt(n,s.h,wt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return n=Qt(n,-2,wt(An.r+10,An.r-5,Math.hypot(i-An.x,t-An.z))),n},color(i,t,e,n,s){if(e<1.7)return s.copy(Fi.sandDeep).lerp(Fi.sand,wt(-2,1.2,e));if(s.copy(Fi.sandShade).lerp(Fi.sand,Vt(i/14,t/14)),s.offsetHSL(0,0,Math.sin(i*.9+t*.35+Vt(i/5,t/5)*4)*.015),e>15||n>.7){let a=Math.floor(e/2.2)%3;s.copy(a===0?Fi.red1:a===1?Fi.red2:Fi.red3)}let r=Math.hypot(i-An.x,t-An.z);r<An.r+9&&s.lerp(Fi.green,wt(An.r+9,An.r+3,r)),Math.hypot(i-qe.x,t-qe.z)<qe.r-2&&s.lerp(Fi.stone,.6);let o=Se(i,t,of);return o<2.4&&s.lerp(Fi.path,wt(2.4,1.4,o)*.7),s},nature:{trees:{style:"cactus",count:350,leafColors:[6266709],minH:2.4,maxSlope:.4},rocks:210,rockColor:13208164,grass:{count:4200,color:13218666},avoid:[...Object.values(Zr).map(i=>[i.x,i.z,i.r+6]),..._h.map(([i,t,e])=>[i,t,e+6])]},enemies:{kumodama:{name:"\u30B9\u30CA\u30C0\u30DE",tint:13214827,mult:2.2,count:34},ishimori:{name:"\u30B9\u30CA\u30E2\u30EA",tint:11565653,mult:2.2,count:11}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=ht(14733222),o=ht(12890250),a=qe.h,c=pt(new k(new ft(22,.8,18),o));c.position.set(qe.x,a-.1,qe.z),n.add(c),i.push({box:new _e().setFromObject(c),color:12890250,kind:"part"});let l=[8,8,3,8,5,8,8,2.5,8,6];for(let I=0;I<10;I++){let D=I<5?-1:1,S=qe.x-8+I%5*4,L=qe.z+D*7,U=l[I];if(s.cyl(.9,U,S,a+.3,L,r,14733222,"part",8),U>=8){let N=pt(new k(new ft(2.2,.6,2.2),o));N.position.set(S,a+.3+U+.3,L),n.add(N)}}let h=pt(new k(new ft(13,.9,2.2),o));h.position.set(qe.x-2,a+9.3,qe.z-7),n.add(h),s.box(18,9,1.6,qe.x,a+.3,qe.z-11,r,14733222);let u=new k(new ft(4.5,6,.3),ht(9071172));u.position.set(qe.x,a+3.3,qe.z-10.1),n.add(u);let d=new k(new $e(1.2,12),new Rt({color:16766826,emissive:14721072,emissiveIntensity:.8}));d.position.set(qe.x,a+7.2,qe.z-10.15),n.add(d);let p=pt(new k(new ft(4,4.5,4),r));p.position.set(qe.x+13,a+1.2,qe.z+2),p.rotation.set(.15,-.5,.1),n.add(p),s.cyl(2.8,4,qe.x+13,a-.5,qe.z+2,null,14733222);let _=new Rt({color:10483434,emissive:4183744,emissiveIntensity:1});for(let I of[-1,1]){let D=new k(new ft(.8,.3,.1),_);D.position.set(I*.9,.6,2.02),p.add(D)}let g=yh(18);for(let I=0;I<18;I++){let D=I/18*Math.PI*2+e()*.3,S=An.r+3+e()*6,L=An.x+Math.cos(D)*S,U=An.z+Math.sin(D)*S,N=t(L,U);N<.6||(g.add(L,N-.2,U,-Math.cos(D),-Math.sin(D),e),s.cyl(.45,7,L,N-1,U,null,5221973,"tree"))}g.finish(n);let m=ht(7315274);for(let I=0;I<70;I++){let D=e()*Math.PI*2,S=An.r-2+e()*4,L=An.x+Math.cos(D)*S,U=An.z+Math.sin(D)*S,N=new k(new Zt(.08,1.8,3),m);N.position.set(L,Math.max(t(L,U),0)+.8,U),N.rotation.z=(e()-.5)*.3,n.add(N)}let f=ht(12873802),w=t(Ai.x,Ai.z);for(let I of[-1,1]){let D=Ai.x+I*7,S=pt(new k(new It(2.2,3,12,7),f));S.position.set(D,w+5.5,Ai.z),n.add(S),s.cyl(2.6,12,D,w-1,Ai.z,null,12873802)}let y=pt(new k(new Kn(7,2.2,7,14,Math.PI),ht(11558972)));y.position.set(Ai.x,w+10.5,Ai.z),n.add(y);let M=vn.h,R=[14246986,2864544,16040539];for(let I=0;I<3;I++){let D=I/3*Math.PI*2+.4,S=vn.x+Math.cos(D)*8,L=vn.z+Math.sin(D)*8,U=pt(new k(new Zt(3.4,4.5,6),ht(R[I])));U.position.set(S,M+2.25,L);let N=new k(new yn(1.4,2.2),ht(5913124,{side:ce})),z=Math.atan2(vn.x-S,vn.z-L);N.position.set(S+Math.sin(z)*2.1,M+1.1,L+Math.cos(z)*2.1),N.rotation.y=z,n.add(U,N),s.cyl(3,4.5,S,M-.5,L,null,R[I],"house")}let v=ht(7030320);for(let I=0;I<4;I++){let D=pt(new k(new It(.15,.15,1.8,6),v));D.position.set(vn.x,M+.25,vn.z),D.rotation.set(Math.PI/2-.3,I/4*Math.PI,0),n.add(D)}let x=new k(new Zt(.6,1.6,6),new Me({color:16752704,transparent:!0,opacity:.9}));x.position.set(vn.x,M+.9,vn.z);let A=new Xe(16751168,30,18);A.position.set(vn.x,M+1.5,vn.z),n.add(x,A);let E=ht(12884588);for(let[I,D]of[[4,-3],[4.9,-2.2],[-3,4]]){let S=pt(new k(new ft(1.1,1.1,1.1),E));S.position.set(vn.x+I,M+.55,vn.z+D),S.rotation.y=I,n.add(S)}let T=new k(new yn(3,2),ht(10117040));T.rotation.x=-Math.PI/2,T.position.set(vn.x-3.5,M+.05,vn.z-2),n.add(T);let b=[];for(let[I,D,S,L]of _h){let U=new k(new $e(S*.5,16),new Me({color:16773584,transparent:!0,opacity:.12,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.set(I,L+6.6,D),n.add(U),b.push(U)}return{group:n,update(I,D){b.forEach((S,L)=>{S.material.opacity=.08+Math.sin(D*2+L)*.05}),x.scale.set(1+Math.sin(D*13)*.1,1+Math.sin(D*9)*.18,1+Math.cos(D*11)*.1),A.intensity=26+Math.sin(D*15)*6}}}};var sr=0,Zn=-Is,ki={x:sr+47,z:Zn-95,r:190,h:75},$r={shrine:{name:"\u6C37\u306E\u7960",x:sr-120,z:Zn+25,r:12,h:12},pond:{name:"\u51CD\u3063\u305F\u6C60",x:sr+152,z:Zn+114,r:20},summit:{name:"\u767D\u5DBA\u306E\u9802",x:ki.x,z:ki.z,r:10},hut:{name:"\u5C71\u5C0F\u5C4B",x:sr-5,z:Zn+230,r:14,h:8},monument:{name:"\u96EA\u539F\u306E\u77F3\u7891",x:sr+230,z:Zn-60,r:12,h:10}},an=$r.shrine,Cn=$r.pond,ke=$r.hut,Bi=$r.monument,mc=Be.north,cf=[[[mc,Zn+420],[mc,Zn+250],[Cn.x-24,Cn.z+16]],[[mc,Zn+240],[ke.x-10,ke.z]],[[mc,Zn+250],[-60,Zn+120],[an.x+14,an.z+4]],[[-60,Zn+120],[0,Zn+20],[ki.x-8,ki.z+20]],[[Cn.x-24,Cn.z+16],[200,Zn+40],[Bi.x-10,Bi.z+12]]],hs={snow:new K("#f4f8fb"),snowShade:new K("#d8e5ef"),rock:new K("#8e96a3"),rockDark:new K("#6f7784"),beach:new K("#d9d4c8"),beachDeep:new K("#b9b4a8"),path:new K("#bccbd8"),stone:new K("#b9c3cf")},lf={id:"snow",name:"\u767D\u5DBA\u306E\u96EA\u539F",cx:sr,cz:Zn,edge:On(420,[26,.4,16,2.8,12,1.1]),maxR:480,places:$r,paths:cf,sanctuaries:[],land(i,t){let e=4+Vt(i/40,t/40)*6+Vt(i/150+3,t/150)*9,n=wt(ki.r,0,Math.hypot(i-ki.x,t-ki.z));e+=ki.h*n+(Vt(i/9,t/9)-.5)*4*n;for(let s of[an,ke,Bi])e=Qt(e,s.h,wt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=Qt(e,-1.5,wt(Cn.r+22,Cn.r-3,Math.hypot(i-Cn.x,t-Cn.z))),e},color(i,t,e,n,s){if(e<1.5)return s.copy(hs.beachDeep).lerp(hs.beach,wt(-2,1.2,e));s.copy(hs.snowShade).lerp(hs.snow,Vt(i/10,t/10)),s.lerp(hs.beach,wt(2.2,1.5,e));let r=Se(i,t,cf);return r<2.2&&s.lerp(hs.path,wt(2.2,1.2,r)),Math.hypot(i-an.x,t-an.z)<an.r-3&&s.lerp(hs.stone,.7),n>.7&&s.lerp(Vt(i/4,t/4)>.5?hs.rock:hs.rockDark,wt(.7,1,n)),s},nature:{trees:{style:"pine",count:850,leafColors:[3104074,3828562,2641983],trunkColor:5914672,snowy:!0,maxH:55,maxSlope:.6},rocks:210,rockColor:9344675,avoid:Object.values($r).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E6\u30AD\u30C0\u30DE",tint:13624565,mult:2.8,count:34},ishimori:{name:"\u30B3\u30AA\u30EA\u30E2\u30EA",tint:10467536,mult:2.8,count:11}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=new Rt({color:12578559,emissive:5224160,emissiveIntensity:.6,flatShading:!0,transparent:!0,opacity:.85}),o=Cn.r+6,a=new k(new $e(o,32),new Rt({color:14217983,roughness:.1,metalness:.1,transparent:!0,opacity:.88}));a.rotation.x=-Math.PI/2,a.position.set(Cn.x,Yn+.12,Cn.z),a.receiveShadow=!0,n.add(a),i.push({box:new _e(new F(Cn.x-o,-3,Cn.z-o),new F(Cn.x+o,Yn+.12,Cn.z+o)),cyl:{x:Cn.x,z:Cn.z,r:o},color:14217983,kind:"ice"});let c=an.h,l=ht(12174287);s.cyl(5.5,.6,an.x,c-.3,an.z,l,12174287,"part",12);for(let N=0;N<4;N++){let z=Math.PI/4+N/4*Math.PI*2;s.cyl(.5,5,an.x+Math.cos(z)*3.8,c+.3,an.z+Math.sin(z)*3.8,l,12174287,"part",8)}let h=pt(new k(new Zt(5.8,3,4),ht(5929156)));h.position.set(an.x,c+6.8,an.z),h.rotation.y=Math.PI/4,n.add(h);let u=new k(new on(1,0),r);u.scale.y=1.7,u.position.set(an.x,c+2.8,an.z),n.add(u);let d=new Xe(10479871,30,25);d.position.set(an.x,c+3,an.z),n.add(d);let p=new Zt(.8,1,5),_=(N,z,B)=>{let V=t(N,z),X=new k(p,r);X.scale.set(B*.8,B*4,B*.8),X.position.set(N,V+B*2-.3,z),X.rotation.set((e()-.5)*.4,e()*3,(e()-.5)*.4),n.add(X),s.cyl(.7*B,B*4,N,V-.5,z,null,12578559)};for(let N=0;N<10;N++){let z=e()*Math.PI*2,B=an.r+2+e()*8;_(an.x+Math.cos(z)*B,an.z+Math.sin(z)*B,.7+e()*1.1)}_(ki.x,ki.z-4,2.6);let g=Uo({w:8,d:6.5,wall:9067067,roof:16054523,trim:5913124});g.position.set(ke.x,ke.h,ke.z),g.rotation.y=-Math.PI/2,n.add(g);let m=new k(new ft(8.4,7,6.9));m.position.set(ke.x,ke.h+3.5,ke.z),m.rotation.y=-Math.PI/2,m.updateMatrixWorld(!0),i.push({box:new _e().setFromObject(m),color:9067067,kind:"house"});let f=14,w=new Float32Array(f*3),y=new F(ke.x+1.3,ke.h+7.8,ke.z+2);for(let N=0;N<f;N++)w[N*3]=y.x,w[N*3+1]=y.y+N/f*8,w[N*3+2]=y.z;let M=new oe;M.setAttribute("position",new de(w,3));let R=new Ze(M,new We({color:14212580,size:1.1,transparent:!0,opacity:.28,depthWrite:!1}));R.frustumCulled=!1,n.add(R);let v=ht(16317437),x=pt(new k(new ie(1,12,10),v));x.position.set(ke.x-7,ke.h+.9,ke.z+5);let A=pt(new k(new ie(.65,12,10),v));A.position.set(ke.x-7,ke.h+2.3,ke.z+5);let E=new k(new Zt(.1,.5,6),ht(15764028));E.rotation.z=Math.PI/2,E.position.set(ke.x-7.7,ke.h+2.3,ke.z+5),n.add(x,A,E),s.cyl(1,2.8,ke.x-7,ke.h-.5,ke.z+5,null,16317437);let T=Bi.h,b=pt(new k(new ft(3.2,7,1.2),ht(8357780)));b.position.set(Bi.x,T+3.3,Bi.z),b.rotation.y=.4,n.add(b),s.cyl(2,7,Bi.x,T-.5,Bi.z,null,8357780);let I=new Rt({color:12578559,emissive:5224160,emissiveIntensity:1.3});for(let N=0;N<5;N++){let z=new k(new ft(N%2?1.6:.9,.18,.05),I);z.position.set((N%2?0:.2)-.1,1.8-N*.7,.62),b.add(z)}for(let N=0;N<6;N++){let z=N/6*Math.PI*2,B=pt(new k(new Xn(.6,0),ht(9344675)));B.position.set(Bi.x+Math.cos(z)*4,T+.3,Bi.z+Math.sin(z)*4),n.add(B)}let D=700,S=new Float32Array(D*3);for(let N=0;N<D;N++)S[N*3]=(e()-.5)*80,S[N*3+1]=e()*40,S[N*3+2]=(e()-.5)*80;let L=new oe;L.setAttribute("position",new de(S,3));let U=new Ze(L,new We({color:16777215,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return U.frustumCulled=!1,n.add(U),{group:n,update(N,z,B){u.rotation.y+=N;for(let X=0;X<f;X++){let nt=w[X*3+1]+N*1.2;nt>y.y+8&&(nt=y.y),w[X*3+1]=nt;let q=nt-y.y;w[X*3]=y.x+Math.sin(z*.8+X)*(.3+q*.12)+q*.25,w[X*3+2]=y.z+Math.cos(z*.7+X*1.7)*q*.12}M.attributes.position.needsUpdate=!0;let V=B&&Math.hypot(B.x-sr,B.z-Zn)<440;if(U.visible=!!V,!!V){U.position.set(B.x,B.y-5,B.z);for(let X=0;X<D;X++){let nt=S[X*3+1]-N*3;nt<0&&(nt+=40),S[X*3+1]=nt,S[X*3]+=Math.sin(z+X)*N*.5}L.attributes.position.needsUpdate=!0}}}}};var Pe=-Is,yi=0,Pi={r:200,h:90,crater:22},No={crater:{name:"\u7114\u306E\u706B\u53E3",x:Pe,z:yi,r:22},obsidian:{name:"\u9ED2\u66DC\u306E\u539F",x:Pe+133,z:yi+183,r:26,h:4},spring:{name:"\u6E6F\u3051\u3080\u308A\u306E\u6E29\u6CC9",x:Pe+240,z:yi-120,r:12,h:4},forge:{name:"\u935B\u51B6\u5834\u306E\u8DE1",x:Pe+232,z:yi+62,r:14,h:5}},Gi=No.obsidian,Te=No.spring,Ae=No.forge,zo=Be.west,hf=[[[Pe+420,zo],[Pe+262,zo+2],[Ae.x-2,Ae.z-16]],[[Pe+262,zo+2],[Pe+205,120],[Gi.x+12,Gi.z-22]],[[Pe+262,zo+2],[Pe+252,-90],[Te.x,Te.z+15]],[[Pe+262,zo+2],[Pe+170,-70],[Pe+70,-140],[Pe-60,-130],[Pe-120,-30],[Pe-80,70],[Pe+10,70],[Pe+40,20],[Pe+26,0]]],uf=[2.2,3.4,4.6],us={basalt:new K("#4a4550"),ash:new K("#6d6570"),rim:new K("#7a4a40"),sand:new K("#3d3a40"),sandDeep:new K("#2e2c32"),path:new K("#8a7a70"),obsidian:new K("#2e2a36"),scorch:new K("#5a3a34"),spring:new K("#8a8078")},df={id:"volcano",name:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",cx:Pe,cz:yi,edge:On(420,[20,2.6,18,1.9,10,.2]),maxR:480,places:No,paths:hf,sanctuaries:[],land(i,t){let e=3+Vt(i/30,t/30)*4+Vt(i/130,t/130+7)*6,n=Math.hypot(i-Pe,t-yi);e+=Pi.h*wt(Pi.r,Pi.crater,n)+(Vt(i/10,t/10)-.5)*3*wt(Pi.r,40,n),e=Qt(e,Pi.h-14,wt(Pi.crater,Pi.crater-8,n));for(let s of[Gi,Te,Ae])e=Qt(e,s.h,wt(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=Qt(e,Te.h-1.2,wt(Te.r-2,Te.r-6,Math.hypot(i-Te.x,t-Te.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(us.sandDeep).lerp(us.sand,wt(-2,1.2,e));s.copy(us.basalt).lerp(us.ash,Vt(i/10,t/10));let r=Math.hypot(i-Pe,t-yi);s.lerp(us.rim,wt(90,30,r)*.8),s.lerp(us.obsidian,wt(Gi.r+6,Gi.r-6,Math.hypot(i-Gi.x,t-Gi.z))),s.lerp(us.spring,wt(Te.r+4,Te.r-2,Math.hypot(i-Te.x,t-Te.z))*.7);let o=Se(i,t,hf);o<2.4&&s.lerp(us.path,wt(2.4,1.4,o));let a=Math.atan2(t-yi,i-Pe);for(let c of uf){let l=Math.abs(Math.atan2(Math.sin(a-c),Math.cos(a-c)))*r;r>Pi.crater&&r<170&&l<5&&s.lerp(us.scorch,wt(5,2.5,l))}return s},nature:{trees:{style:"dead",count:250,trunkColor:3813424,maxH:30,maxSlope:.5},rocks:350,rockColor:4867408,grass:{count:2100,color:9075280},avoid:Object.values(No).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30D2\u30C0\u30DE",tint:14246986,mult:3.5,count:34},ishimori:{name:"\u30E8\u30A6\u30AC\u30F3\u30E2\u30EA",tint:5917256,mult:3.5,count:12}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=new zn({uniforms:{time:{value:0}},vertexShader:`
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
        }`}),o=Pi.h-13.2,a=new k(new $e(Pi.crater-4,32),r);a.rotation.x=-Math.PI/2,a.position.set(Pe,o,yi),n.add(a);let c=new Xe(16742960,200,90);c.position.set(Pe,o+6,yi),n.add(c);for(let z of uf){let B=[],V=[],X=[];for(let j=0;j<=70;j++){let ut=Pi.crater+1+j*2.2,Tt=z+Math.sin(j*.35+z*3)*.08,yt=2.2+Math.sin(j*.5)*.7,Bt=Pe+Math.cos(Tt)*ut,qt=yi+Math.sin(Tt)*ut,bt=-Math.sin(Tt),Ot=Math.cos(Tt);for(let G of[-1,1]){let at=Bt+bt*G*yt,Q=qt+Ot*G*yt;B.push(at,t(at,Q)+.15,Q),V.push(G<0?0:1,j/6)}if(j>0){let G=(j-1)*2;X.push(G,G+1,G+2,G+1,G+3,G+2)}}let q=new oe;q.setAttribute("position",new fe(B,3)),q.setAttribute("uv",new fe(V,2)),q.setIndex(X),n.add(new k(q,r))}let l=new Rt({color:1907494,roughness:.15,metalness:.4,flatShading:!0});for(let z=0;z<26;z++){let B=e()*Math.PI*2,V=e()*Gi.r,X=Gi.x+Math.cos(B)*V,nt=Gi.z+Math.sin(B)*V,q=t(X,nt),j=.8+e()*1.8,ut=pt(new k(new Zt(.9*j,4*j,5),l));ut.position.set(X,q+1.6*j,nt),ut.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5),n.add(ut),s.cyl(.8*j,3.5*j,X,q-.5,nt,null,1907494)}let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d"),d=u.createRadialGradient(32,32,0,32,32,32);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=d,u.fillRect(0,0,64,64);let p=new mi(h),_=(z,B,V,X,nt)=>{let q=new Float32Array(z*3),j=new Float32Array(z),ut=new oe;ut.setAttribute("position",new de(q,3));let Tt=new Ze(ut,new We({color:X,size:V,map:p,transparent:!0,opacity:nt,depthWrite:!1}));return Tt.frustumCulled=!1,n.add(Tt),{pos:q,life:j,geo:ut,count:z,spread:B}},g=_(110,22,14,9076872,.45),m=z=>{g.pos[z*3]=Pe+(e()-.5)*g.spread,g.pos[z*3+1]=o+2,g.pos[z*3+2]=yi+(e()-.5)*g.spread,g.life[z]=0};for(let z=0;z<g.count;z++)m(z),g.life[z]=e()*8,g.pos[z*3+1]+=g.life[z]*6;let f=new k(new $e(Te.r-2.5,28),new Rt({color:10479840,emissive:4171936,emissiveIntensity:.25,transparent:!0,opacity:.85,roughness:.15}));f.rotation.x=-Math.PI/2,f.position.set(Te.x,Te.h-.5,Te.z),n.add(f);for(let z=0;z<16;z++){let B=z/16*Math.PI*2,V=.8+e()*.7,X=pt(new k(new Xn(V,0),ht(7169392)));X.position.set(Te.x+Math.cos(B)*(Te.r-1.5),Te.h+V*.3,Te.z+Math.sin(B)*(Te.r-1.5)),n.add(X)}let w=_(50,Te.r*1.2,4,16777215,.35),y=z=>{w.pos[z*3]=Te.x+(e()-.5)*w.spread,w.pos[z*3+1]=Te.h-.3,w.pos[z*3+2]=Te.z+(e()-.5)*w.spread,w.life[z]=0};for(let z=0;z<w.count;z++)y(z),w.life[z]=e()*3,w.pos[z*3+1]+=w.life[z]*1.5;let M=ht(7030320),R=new xt,v=pt(new k(new ft(.2,2.2,.2),M));v.position.y=1.1;let x=new k(new ft(1.6,.8,.12),ht(12884588));x.position.y=2,R.add(v,x),R.position.set(Te.x,Te.h,Te.z+Te.r+2),n.add(R);let A=Ae.h,E=ht(7169392);s.box(12,3.5,1.2,Ae.x,A-.3,Ae.z-6,E,7169392),s.box(1.2,2.2,8,Ae.x-6,A-.3,Ae.z-1.6,E,7169392),s.box(1.2,1.2,5,Ae.x+6,A-.3,Ae.z-3,E,7169392),s.box(4,4.2,3,Ae.x+2,A-.3,Ae.z-3.8,ht(5917256),5917256);let T=new k(new yn(1.8,1.4),new Me({color:16742960}));T.position.set(Ae.x+2,A+1.2,Ae.z-2.28),n.add(T);let b=pt(new k(new It(.8,1,5,8),ht(5917256)));b.position.set(Ae.x+2,A+6,Ae.z-4.2),n.add(b);let I=new Xe(16747072,25,14);I.position.set(Ae.x+2,A+1.5,Ae.z-1),n.add(I);let D=ht(3816004,{metalness:.6,roughness:.4}),S=pt(new k(new ft(.8,.9,.6),D));S.position.set(Ae.x-2,A+.45,Ae.z+1);let L=pt(new k(new ft(1.8,.45,.7),D));L.position.set(Ae.x-2,A+1.1,Ae.z+1);let U=new k(new Zt(.3,.8,6),D);U.rotation.z=Math.PI/2,U.position.set(Ae.x-3.2,A+1.1,Ae.z+1),n.add(S,L,U),s.cyl(1,1.4,Ae.x-2,A-.3,Ae.z+1,null,3816004);let N=ht(12107976,{metalness:.6});for(let z=0;z<4;z++){let B=new k(new ft(.1,1.4,.3),N);B.position.set(Ae.x+4+z*.6,A+.6,Ae.z+3+z%2*.5),B.rotation.set(0,z,(e()-.5)*.5),n.add(B)}return{group:n,update(z,B){r.uniforms.time.value=B,c.intensity=190+Math.sin(B*3)*40,I.intensity=22+Math.sin(B*12)*5;for(let V=0;V<g.count;V++)g.life[V]+=z,g.pos[V*3+1]+=z*6,g.pos[V*3]+=z*2,g.life[V]>8&&m(V);g.geo.attributes.position.needsUpdate=!0;for(let V=0;V<w.count;V++)w.life[V]+=z,w.pos[V*3+1]+=z*1.5,w.pos[V*3]+=Math.sin(B+V)*z*.3,w.life[V]>3&&y(V);w.geo.attributes.position.needsUpdate=!0}}}};var Hs=xi,Ds=-xi,Oo={garden:{name:"\u5927\u8F2A\u306E\u82B1\u7551",x:Hs+40,z:Ds-30,r:34},tower:{name:"\u98A8\u9234\u306E\u5854",x:Hs+170,z:Ds+120,r:12,h:12},lake:{name:"\u82B1\u306E\u6E56",x:Hs-275,z:Ds+180,r:30}},Vi=Oo.garden,Ke=Oo.tower,Jr=Oo.lake,ff=[[[330,-330],[Hs-140,Ds+110],[Vi.x-30,Vi.z+20]],[[Hs-140,Ds+110],[Jr.x+20,Jr.z-30]],[[Vi.x-30,Vi.z+20],[Hs+110,Ds+90],[Ke.x-12,Ke.z]]],ds={grass:new K("#8fd46b"),grassDark:new K("#6fb850"),pink:new K("#f4b8cf"),yellow:new K("#f4e08a"),lilac:new K("#c9b4ec"),sand:new K("#efdcae"),path:new K("#d8b882")},iE=new K,pf={id:"flowers",name:"\u82B1\u51A0\u306E\u4E18\u9675",cx:Hs,cz:Ds,edge:On(400,[26,.9,14,2.2,10,.4]),maxR:460,places:Oo,paths:ff,sanctuaries:[],land(i,t){let e=5+Vt(i/50,t/50)*8+Vt(i/180+11,t/180)*12;return e=Qt(e,Ke.h,wt(Ke.r+16,Ke.r,Math.hypot(i-Ke.x,t-Ke.z))),e=Qt(e,-3,wt(Jr.r+14,Jr.r-4,Math.hypot(i-Jr.x,t-Jr.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(ds.sand);s.copy(ds.grassDark).lerp(ds.grass,Vt(i/9,t/9));let r=Vt(i/22+3,t/22),o=Vt(i/30-7,t/30+2),a=r>.62?ds.pink:o>.64?ds.yellow:o<.32?ds.lilac:null;a&&s.lerp(a,.55),Math.hypot(i-Vi.x,t-Vi.z)<Vi.r&&s.lerp(iE.copy(ds.pink).lerp(ds.yellow,Vt(i/6,t/6)),.5);let c=Se(i,t,ff);return c<2.4&&s.lerp(ds.path,wt(2.4,1.4,c)),s},nature:{trees:{style:"round",count:420,leafColors:[15902402,13150448,10475115,16765152],accentChance:.25},rocks:60,rockColor:13222072,grass:{count:8e3,color:8176218},flowers:{count:11e3,colors:[16748464,16766044,12166911,16777215,16738922,16754912]},avoid:Object.values(Oo).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CF\u30CA\u30C0\u30DE",tint:15902402,mult:1.3,count:32},ishimori:{name:"\u30C4\u30BF\u30A4\u30EF",tint:9416832,mult:1.3,count:9}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=ht(6270538),o=[16748464,16766044,12166911,16738922,16777215],a=[];for(let M=0;M<12;M++){let R=e()*Math.PI*2,v=e()*Vi.r,x=Vi.x+Math.cos(R)*v,A=Vi.z+Math.sin(R)*v,E=t(x,A),T=7+e()*8,b=pt(new k(new It(.35,.5,T,7),r));b.position.set(x,E+T/2-.3,A),n.add(b),s.cyl(.6,T,x,E-.5,A,null,6270538,"tree");let I=pt(new k(new ie(1,8,6),r));I.scale.set(1.6,.2,.7),I.position.set(x+1,E+T*.4,A),I.rotation.z=-.4,n.add(I);let D=new xt;D.position.set(x,E+T,A),D.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5);let S=ht(o[M%o.length]),L=1.6+e()*1.2;for(let N=0;N<7;N++){let z=pt(new k(new ie(1,10,6),S)),B=N/7*Math.PI*2;z.scale.set(L,.25,L*.55),z.position.set(Math.cos(B)*L,0,Math.sin(B)*L),z.rotation.y=-B,D.add(z)}let U=new k(new It(L*.55,L*.5,.5,12),new Rt({color:16762938,emissive:9067008,emissiveIntensity:.4}));D.add(U),n.add(D),a.push({head:D,p:e()*10})}let c=ht(16183524);s.cyl(2.8,16,Ke.x,Ke.h-.5,Ke.z,c,16183524,"part",10);let l=pt(new k(new It(3.6,3.6,.6,10),c));l.position.set(Ke.x,Ke.h+15.8,Ke.z),n.add(l);for(let M=0;M<4;M++){let R=M/4*Math.PI*2+Math.PI/4,v=pt(new k(new ft(.4,4,.4),c));v.position.set(Ke.x+Math.cos(R)*3,Ke.h+18,Ke.z+Math.sin(R)*3),n.add(v)}let h=pt(new k(new Zt(4.4,4,10),ht(2864544)));h.position.set(Ke.x,Ke.h+22,Ke.z),n.add(h);let u=[],d=[10479871,16759008,16773544,13154559];for(let M=0;M<6;M++){let R=M/6*Math.PI*2,v=new xt;v.position.set(Ke.x+Math.cos(R)*3.8,Ke.h+19.8,Ke.z+Math.sin(R)*3.8);let x=new k(new ie(.35,10,8,0,Math.PI*2,0,Math.PI/2),new Rt({color:d[M%4],transparent:!0,opacity:.8,emissive:d[M%4],emissiveIntensity:.3}));x.position.y=-.8;let A=new k(new yn(.25,.9),ht(16777215,{side:ce}));A.position.y=-1.6,v.add(x,A),n.add(v),u.push({pivot:v,p:M})}let p=90,_=new Float32Array(p*3),g=new Float32Array(p*3),m=[],f=[16748464,16766044,12166911,10479871,16777215].map(M=>new K(M));for(let M=0;M<p;M++){let R=e()*Math.PI*2,v=e()*260,x=Hs+Math.cos(R)*v,A=Ds+Math.sin(R)*v;m.push({x,z:A,y:Math.max(t(x,A),0)+1.5+e()*3,p:e()*10});let E=f[M%f.length];g[M*3]=E.r,g[M*3+1]=E.g,g[M*3+2]=E.b}let w=new oe;w.setAttribute("position",new de(_,3)),w.setAttribute("color",new de(g,3));let y=new Ze(w,new We({size:.45,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1}));return y.frustumCulled=!1,n.add(y),{group:n,update(M,R){for(let{head:v,p:x}of a)v.rotation.z=Math.sin(R*.8+x)*.08;for(let{pivot:v,p:x}of u)v.rotation.x=Math.sin(R*2.2+x)*.25,v.rotation.z=Math.cos(R*1.7+x)*.2;for(let v=0;v<p;v++){let x=m[v];_[v*3]=x.x+Math.sin(R*.5+x.p)*6,_[v*3+1]=x.y+Math.abs(Math.sin(R*6+x.p*3))*.5,_[v*3+2]=x.z+Math.cos(R*.4+x.p)*6}w.attributes.position.needsUpdate=!0}}}};var rr=xi,or=xi,Fo={pond:{name:"\u6C88\u3093\u3060\u7960",x:rr+60,z:or+40,r:45},reeds:{name:"\u8466\u306E\u8FF7\u3044\u9053",x:rr-120,z:or+170,r:40}},we=Fo.pond,Mh={z:we.z,mid:we.x-27},mf=10,Eh=[[[360,360],[rr-60,or+30],[we.x-52,we.z]],[[rr-60,or+30],[Fo.reeds.x+20,Fo.reeds.z-30]]],Kr={moss:new K("#7a9a5a"),dark:new K("#5f7a4a"),mud:new K("#6b5a44"),shallow:new K("#5a6a4a"),path:new K("#9a8060")},gf=(i,t)=>wt(.6,.68,Vt(i/35+50,t/35)),xf={id:"marsh",name:"\u9727\u306E\u6E7F\u539F",cx:rr,cz:or,edge:On(400,[24,1.7,16,.6,9,2.9]),maxR:460,places:Fo,paths:Eh,sanctuaries:[],land(i,t){let e=2+Vt(i/40,t/40)*2.2+Vt(i/150+5,t/150)*2.5,n=wt(8,3,Se(i,t,Eh));e=Qt(e,-1.6,gf(i,t)*(1-n));let s=Math.hypot(i-we.x,t-we.z);return e=Qt(e,-2.2,wt(we.r+10,we.r-5,s)),e=Qt(e,3,wt(mf+4,mf-2,s)),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Kr.mud).lerp(Kr.shallow,wt(-2,1.5,e));s.copy(Kr.dark).lerp(Kr.moss,Vt(i/8,t/8)),s.lerp(Kr.mud,gf(i,t)*.5+(Vt(i/5,t/5)>.7?.3:0));let r=Se(i,t,Eh);return r<2.4&&s.lerp(Kr.path,wt(2.4,1.4,r)),s},nature:{trees:{style:"round",count:300,leafColors:[4876858,3824180,5929540],trunkColor:4864554,minH:2.2},rocks:50,rockColor:8026730,grass:{count:9e3,color:8030794},flowers:{count:900,colors:[16777215,13150448,14739711]},avoid:Object.values(Fo).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CC\u30DE\u30C0\u30DE",tint:6982250,mult:1.9,count:32},ishimori:{name:"\u30C9\u30ED\u30A4\u30EF",tint:7035460,mult:1.9,count:10}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=ht(9079418),o=ht(6982218),a=t(we.x,we.z),c=new xt;c.position.set(we.x-6,a-.6,we.z),c.rotation.set(0,Math.PI/2,.12);for(let L of[-1,1]){let U=pt(new k(new It(.4,.5,6,8),r));U.position.set(L*2.4,3,0),c.add(U)}let l=pt(new k(new ft(6.6,.6,.8),r));l.position.y=6.1;let h=pt(new k(new ft(5.4,.4,.6),r));h.position.y=5.1,c.add(l,h),n.add(c),s.cyl(.5,6,we.x-6,a-1,we.z-2.4,null,9079418),s.cyl(.5,6,we.x-6,a-1,we.z+2.4,null,9079418);let u=new xt,d=pt(new k(new ft(4,.6,3.4),r));d.position.y=.3;let p=pt(new k(new ft(3,2.6,2.4),ht(5914672)));p.position.y=1.9;let _=pt(new k(new Zt(3,1.6,4),ht(3816004)));_.position.y=4,_.rotation.y=Math.PI/4;let g=new k(new Zt(2.4,.8,4),o);g.position.y=4.35,g.rotation.y=Math.PI/4;let m=new k(new ie(.35,12,8),new Rt({color:13697008,emissive:7332032,emissiveIntensity:1.4}));m.position.set(-1.25,1.7,0),u.add(d,p,_,g,m),u.position.set(we.x+3,a,we.z),n.add(u),s.box(4,4.5,3.4,we.x+3,a-.5,we.z,null,5914672);let f=new Rt({color:16773296,emissive:16762976,emissiveIntensity:1.2}),w=[[we.x-2,we.z-5],[we.x-2,we.z+5],[we.x-32,we.z-5],[we.x-32,we.z+5]];for(let[L,U]of w){let N=Math.max(t(L,U),-.2),z=new xt,B=pt(new k(new It(.25,.35,1.8,6),r));B.position.y=.9;let V=new k(new ft(.7,.6,.7),f);V.position.y=2.1;let X=pt(new k(new Zt(.7,.6,4),r));X.position.y=2.7,X.rotation.y=Math.PI/4,z.add(B,V,X),z.position.set(L,N,U),n.add(z)}let y=new Xe(11075552,30,30);y.position.set(we.x,a+3,we.z),n.add(y);let M=en(new $e(1,10,.3,Math.PI*2-.6).rotateX(-Math.PI/2),ht(5212735,{side:ce}),700);M.mesh.castShadow=!1;let R=en(new Zt(.35,.5,6),ht(16754888),120),v=0;for(let L=0;v<700&&L<2e4;L++){let U=rr+(e()-.5)*700,N=or+(e()-.5)*700,z=t(U,N);if(z>-.6||z<-2.4)continue;let B=.5+e()*.9;M.add(U,.05,N,B,1,B,0,e()*6,0),e()<.15&&R.add(U+.2,.3,N,1,1,1,Math.PI,0,0),v++}n.add(M.finish(),R.finish());let x=document.createElement("canvas");x.width=x.height=64;let A=x.getContext("2d"),E=A.createRadialGradient(32,32,0,32,32,32);E.addColorStop(0,"rgba(255,255,255,1)"),E.addColorStop(1,"rgba(255,255,255,0)"),A.fillStyle=E,A.fillRect(0,0,64,64);let T=70,b=new Float32Array(T*3),I=Array.from({length:T},()=>({x:(e()-.5)*140,z:(e()-.5)*140,y:.5+e()*3,v:.5+e()})),D=new oe;D.setAttribute("position",new de(b,3));let S=new Ze(D,new We({color:15266028,size:22,map:new mi(x),transparent:!0,opacity:.22,depthWrite:!1}));return S.frustumCulled=!1,n.add(S),{group:n,update(L,U,N){m.position.y=1.7+Math.sin(U*1.8)*.12;let z=N&&Math.hypot(N.x-rr,N.z-or)<420;if(S.visible=!!z,!!z){for(let B=0;B<T;B++){let V=I[B];V.x+=V.v*L*1.5,V.x>70&&(V.x-=140),b[B*3]=N.x+V.x,b[B*3+1]=Math.max(0,N.y-2)+V.y,b[B*3+2]=N.z+V.z}D.attributes.position.needsUpdate=!0}}}}};var ei=-xi,ni=xi,sE=[[ei-330,ni-150],[ei-120,ni-60],[ei,ni-20],[ei+150,ni+40],[ei+320,ni+110]],wh={x:ei,z:ni-20},vh={gorge:{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",x:ei,z:ni-20,r:20},shrine:{name:"\u7D05\u8449\u306E\u793E",x:ei-150,z:ni+150,r:16,h:12}},cn=vh.shrine,yf=[[[-330,330],[ei+30,ni-110],[ei,ni-62]],[[ei,ni+22],[ei-70,ni+100],[cn.x+14,cn.z-6]]],Us={gold:new K("#c0a450"),dry:new K("#a89048"),leaves:new K("#d0703a"),red:new K("#c04a30"),rock:new K("#a06c4a"),rockDark:new K("#7c5038"),path:new K("#c8a070")},_f={id:"canyon",name:"\u7D05\u8449\u306E\u6E13\u8C37",cx:ei,cz:ni,edge:On(400,[22,2.4,16,1.3,10,.7]),maxR:460,places:vh,paths:yf,sanctuaries:[],land(i,t){let e=9+Vt(i/45,t/45)*6+Vt(i/170+3,t/170)*10;return e=Qt(e,cn.h,wt(cn.r+14,cn.r,Math.hypot(i-cn.x,t-cn.z))),e=Qt(e,-2.5,wt(34,9,Xr(i,t,sE))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Us.rockDark);s.copy(Us.dry).lerp(Us.gold,Vt(i/9,t/9));let r=Vt(i/16+8,t/16);r>.55&&s.lerp(r>.66?Us.red:Us.leaves,wt(.55,.7,r)*.8),n>.6&&s.lerp(Math.floor(e/3)%2?Us.rock:Us.rockDark,wt(.6,.9,n));let o=Se(i,t,yf);return o<2.4&&s.lerp(Us.path,wt(2.4,1.4,o)),s},nature:{trees:{style:"round",count:520,leafColors:[14704682,15769648,13122090,15253568],trunkColor:5913128},rocks:140,rockColor:10119754,grass:{count:6500,color:11573834},flowers:{count:1500,colors:[15769648,16766044,13122090]},avoid:[...Object.values(vh).map(i=>[i.x,i.z,i.r+4])]},enemies:{kumodama:{name:"\u30E2\u30DF\u30B8\u30C0\u30DE",tint:14707258,mult:2.5,count:32},ishimori:{name:"\u30AB\u30EC\u30A4\u30EF",tint:10119754,mult:2.5,count:10}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=cn.h,o=ht(14172202),a=ht(2761254),c=new xt;for(let b of[-1,1]){let I=pt(new k(new It(.45,.5,7,10),o));I.position.set(b*3,3.5,0),c.add(I)}let l=pt(new k(new ft(8.6,.7,1),a));l.position.y=7.3;let h=pt(new k(new ft(7.8,.4,.8),o));h.position.y=6.8;let u=pt(new k(new ft(7.4,.4,.5),o));u.position.y=5.6,c.add(l,h,u),c.position.set(cn.x+10,r,cn.z-4),c.rotation.y=Math.atan2(-10,4)+Math.PI/2,n.add(c),s.cyl(.5,7,cn.x+10+Math.cos(c.rotation.y)*3,r-.5,cn.z-4-Math.sin(c.rotation.y)*3,null,14172202),s.cyl(.5,7,cn.x+10-Math.cos(c.rotation.y)*3,r-.5,cn.z-4+Math.sin(c.rotation.y)*3,null,14172202);let d=new xt,p=pt(new k(new ft(7,.8,6),ht(11050124)));p.position.y=.4;let _=pt(new k(new ft(5.2,3.2,4.4),ht(16050904)));_.position.y=2.4;let g=pt(new k(new ft(5.6,.4,4.8),o));g.position.y=4.1;let m=pt(new k(new Zt(5.2,2.6,4),ht(3814464)));m.position.y=5.5,m.rotation.y=Math.PI/4,m.scale.z=.8;let f=new k(new ie(.35,10,8),ht(16040539,{metalness:.6,roughness:.3}));f.position.set(0,3.5,2.4),d.add(p,_,g,m,f),d.position.set(cn.x,r,cn.z),d.rotation.y=Math.atan2(10,-4),n.add(d),s.cyl(3.6,6,cn.x,r-.5,cn.z,null,14172202,"house");let w=ht(11050124),y=new Rt({color:16773296,emissive:16752704,emissiveIntensity:1.2});for(let[b,I]of[[6,-9],[9,2],[-4,-9]]){let D=new xt,S=pt(new k(new It(.25,.35,1.6,6),w));S.position.y=.8;let L=new k(new ft(.6,.5,.6),y);L.position.y=1.85;let U=pt(new k(new Zt(.6,.5,4),w));U.position.y=2.35,D.add(S,L,U),D.position.set(cn.x+b,r,cn.z+I),n.add(D)}let M=160,R=new Float32Array(M*3),v=new Float32Array(M*3),x=[14704682,15769648,13122090,15253568].map(b=>new K(b)),A=Array.from({length:M},(b,I)=>{let D=x[I%4];return v[I*3]=D.r,v[I*3+1]=D.g,v[I*3+2]=D.b,{x:(e()-.5)*70,y:e()*22,z:(e()-.5)*70,p:e()*10}}),E=new oe;E.setAttribute("position",new de(R,3)),E.setAttribute("color",new de(v,3));let T=new Ze(E,new We({size:.4,vertexColors:!0,transparent:!0,depthWrite:!1}));return T.frustumCulled=!1,n.add(T),{group:n,update(b,I,D){f.position.x=Math.sin(I*1.3)*.08;let S=D&&Math.hypot(D.x-ei,D.z-ni)<420;if(T.visible=!!S,!!S){for(let L=0;L<M;L++){let U=A[L];U.y-=b*1.4,U.y<0&&(U.y+=22),R[L*3]=D.x+U.x+Math.sin(I*1.5+U.p)*1.5,R[L*3+1]=D.y+U.y-4,R[L*3+2]=D.z+U.z+Math.cos(I*1.2+U.p)*1.5}E.attributes.position.needsUpdate=!0}}}}};var ar=-xi,cr=-xi,xc={heart:{name:"\u6C34\u6676\u306E\u5FC3\u81D3",x:ar-40,z:cr-40,r:18,h:26},pillars:{name:"\u5929\u67F1\u306E\u68EE",x:ar+130,z:cr+110,r:70}},nn=xc.heart,Bo=xc.pillars,gc=[[[-340,-330],[ar+180,cr+170],[ar+40,cr+30],[nn.x+20,nn.z+18]],[[ar+180,cr+170],[Bo.x+30,Bo.z-10]]],jr={rock:new K("#8a82a0"),rockDark:new K("#6a6282"),moss:new K("#6a9a6a"),crystal:new K("#b8b0d8"),path:new K("#b0a8c0")},Ef={id:"highlands",name:"\u6C34\u6676\u306E\u9AD8\u5730",cx:ar,cz:cr,edge:On(400,[24,.2,14,1.1,11,2.6]),maxR:460,places:xc,paths:gc,sanctuaries:[],land(i,t){let e=14+Vt(i/60,t/60)*10+Vt(i/200+7,t/200)*14,n=1-Math.abs(Vt(i/40+9,t/40)*2-1);return e+=n*n*6,e=Qt(e,nn.h,wt(nn.r+16,nn.r,Math.hypot(i-nn.x,t-nn.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(jr.rockDark);s.copy(jr.moss).lerp(jr.rock,wt(.35,.65,Vt(i/14,t/14))),Vt(i/7+4,t/7)>.68&&s.lerp(jr.crystal,.6),n>.65&&s.lerp(jr.rockDark,wt(.65,.95,n));let r=Se(i,t,gc);return r<2.4&&s.lerp(jr.path,wt(2.4,1.4,r)),s},nature:{trees:{style:"pine",count:330,leafColors:[3824202,4876890,3099200],trunkColor:4864564,maxSlope:.55},rocks:180,rockColor:8024208,grass:{count:4500,color:6986346},flowers:{count:900,colors:[13154559,10479871,16777215]},avoid:Object.values(xc).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30B7\u30E7\u30A6\u30C0\u30DE",tint:10467560,mult:3.2,count:32},ishimori:{name:"\u30B9\u30A4\u30B7\u30E7\u30A6\u30E2\u30EA",tint:9074864,mult:3.2,count:11}},decorate(i,t,e){let n=new xt,s=tn(n,i),r=ht(9077408),o=ht(6265434),a=ht(3824202);for(let g=0,m=0;g<22&&m<400;m++){let f=e()*Math.PI*2,w=Math.sqrt(e())*(Bo.r+60),y=Bo.x+Math.cos(f)*w,M=Bo.z+Math.sin(f)*w;if(Se(y,M,gc)<10)continue;g++;let R=t(y,M),v=22+e()*38,x=3.5+e()*5,A=pt(new k(new It(x*.8,x,v,7),r));A.position.set(y,R+v/2-1,M),A.rotation.y=e()*3,n.add(A);let E=pt(new k(new ie(x*.85,8,5,0,Math.PI*2,0,Math.PI/2),o));E.scale.y=.4,E.position.set(y,R+v-1,M),n.add(E);for(let T=0;T<2;T++){let b=pt(new k(new Zt(1.2,4,6),a));b.position.set(y+(e()-.5)*x,R+v+1.5,M+(e()-.5)*x),n.add(b)}s.cyl(x,v,y,R-1,M,null,9077408)}let c=[new Rt({color:10479871,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}),new Rt({color:13154559,emissive:8413408,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9})],l=c.map(g=>en(new on(1,0),g,200));for(let g=0,m=0;g<34&&m<600;m++){let f=ar+(e()-.5)*620,w=cr+(e()-.5)*620,y=t(f,w);if(y<6||Se(f,w,gc)<6||Math.hypot(f-nn.x,w-nn.z)<nn.r+6)continue;g++;let M=l[g%2];for(let R=0;R<5;R++){let v=.6+e()*1.4;M.add(f+(e()-.5)*2.5,y+v,w+(e()-.5)*2.5,v*.55,v*2.2,v*.55,(e()-.5)*.7,e()*3,(e()-.5)*.7)}s.cyl(1.8,4,f,y-.5,w,null,g%2?13154559:10479871)}l.forEach(g=>{g.mesh.castShadow=!1,n.add(g.finish())});let h=nn.h,u=ht(11577536);s.cyl(11,1.2,nn.x,h-.6,nn.z,u,11577536,"part",16);for(let g=0;g<6;g++){let m=g/6*Math.PI*2;s.cyl(.8,5,nn.x+Math.cos(m)*12.5,h-.5,nn.z+Math.sin(m)*12.5,u,11577536,"part",6)}let d=new k(new on(3.4,0),new Rt({color:14218495,emissive:7321855,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.88}));d.scale.y=1.7,d.position.set(nn.x,h+12,nn.z),n.add(d);let p=[];for(let g=0;g<6;g++){let m=new k(new on(.8,0),c[g%2]);m.scale.y=1.8,n.add(m),p.push(m)}let _=new Xe(10473727,80,60);return _.position.set(nn.x,h+12,nn.z),n.add(_),{group:n,update(g,m){d.rotation.y+=g*.5,d.position.y=h+12+Math.sin(m)*.8,p.forEach((f,w)=>{let y=m*.6+w/p.length*Math.PI*2;f.position.set(nn.x+Math.cos(y)*8,h+11+Math.sin(m*1.3+w)*1.5,nn.z+Math.sin(y)*8),f.rotation.y+=g*2})}}}};var Wi=[Qd,sf,af,lf,df,pf,xf,_f,Ef],ko=Wi.flatMap(i=>Object.values(i.places)),yc=Wi.flatMap(i=>i.sanctuaries),Mf=[{name:"\u5DDD\u306E\u6A4B",axis:"z",at:Be.north,mid:-240,small:!0},{name:"\u6E7F\u539F\u306E\u6728\u9053",axis:"x",at:Mh.z,mid:Mh.mid,small:!0},{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",axis:"z",at:wh.x,mid:wh.z,land:9,arch:-2.5}];function vf(i){let t=new zn({transparent:!0,depthWrite:!1,fog:!0,uniforms:hh.merge([Mt.fog,{heightMap:{value:null},time:{value:0},shallow:{value:new K("#6fdcd0")},deep:{value:new K("#2f73b8")},foam:{value:new K("#ffffff")},mapHalf:{value:Nn}}]),vertexShader:`
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
      }`});t.uniforms.heightMap.value=i;let e=new k(new yn(4e3,4e3),t);return e.rotation.x=-Math.PI/2,e.position.y=Yn,e.renderOrder=1,{mesh:e,update(n){t.uniforms.time.value=n}}}function rE(){return new zn({transparent:!0,depthWrite:!1,side:ce,uniforms:{time:{value:0}},vertexShader:`
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
      }`})}function wf(i){let t=new xt,e=Re.plateau,n=rE(),s=5,r=new dt(-ci.y,ci.x),o=21,a=36,c=40,l=[],h=[],u=[],d=0,p=null;for(let T=0;T<=c;T++){let b=o+(a-o)*T/c,I=e.x+ci.x*b,D=e.z+ci.y*b,S=s*(.6+.4*(T/c)),L=Math.max(i(I,D),Yn-.2)+.35;p&&(d+=Math.hypot(b-p.d,L-p.y)),p={d:b,y:L};for(let U of[-1,1])l.push(I+r.x*U*S/2,L,D+r.y*U*S/2),h.push(U<0?0:1,d/6);if(T>0){let U=(T-1)*2;u.push(U,U+1,U+2,U+1,U+3,U+2)}}let _=new oe;_.setAttribute("position",new fe(l,3)),_.setAttribute("uv",new fe(h,2)),_.setIndex(u);let g=new k(_,n);g.renderOrder=2,t.add(g);let m=new Rt({color:7331024,transparent:!0,opacity:.8,roughness:.2}),f=new k(new $e(zi.r+.6,24),m);f.rotation.x=-Math.PI/2,f.position.set(zi.x,e.h-.45,zi.z),t.add(f);let w=new F(e.x+ci.x*33,Yn+.3,e.z+ci.y*33),y=70,M=new Float32Array(y*3),R=new Float32Array(y),v=new Float32Array(y*3),x=T=>{M[T*3]=w.x+(Math.random()-.5)*4,M[T*3+1]=w.y,M[T*3+2]=w.z+(Math.random()-.5)*4,v[T*3]=(Math.random()-.5)*3,v[T*3+1]=2+Math.random()*4,v[T*3+2]=(Math.random()-.5)*3,R[T]=Math.random()};for(let T=0;T<y;T++)x(T);let A=new oe;A.setAttribute("position",new de(M,3));let E=new Ze(A,new We({color:16777215,size:.5,transparent:!0,opacity:.8,depthWrite:!1}));return t.add(E),{group:t,update(T,b){n.uniforms.time.value=b;for(let I=0;I<y;I++)R[I]+=T,v[I*3+1]-=9*T,M[I*3]+=v[I*3]*T,M[I*3+1]+=v[I*3+1]*T,M[I*3+2]+=v[I*3+2]*T,(R[I]>1.2||M[I*3+1]<w.y-.5)&&x(I);A.attributes.position.needsUpdate=!0}}}var oE=1.6;function aE(i){let t=document.createElement("canvas");t.width=256,t.height=80;let e=t.getContext("2d");e.fillStyle="#c49a6c",e.fillRect(0,0,256,80),e.strokeStyle="#8a5a3b",e.lineWidth=6,e.strokeRect(3,3,250,74),e.fillStyle="#5a3a24",e.font='bold 34px "M PLUS Rounded 1c", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,42);let n=new mi(t);return n.colorSpace=He,n}function Tf(i,t,e){let n=new xt,s=ht(11897438),r=ht(8015414),o=ht(14271642),a=ht(11116950),c=new Rt({color:16770728,emissive:16762992,emissiveIntensity:1.2}),l=en(new ft(1,1,1),s,2500),h=en(new ft(1,1,1),r,1500),u=en(new ft(1,1,1),o,2500),d=en(new It(1,1.2,1,8).translate(0,.5,0),a,200),p=[];for(let _ of i){let g=_.axis==="x",m=S=>g?[S,_.at]:[_.at,S],f=S=>e(...m(S)),w=_.mid,y=_.mid,M=_.land??oE;for(let S=0;S<400&&f(w)<M;S++)w-=1;for(let S=0;S<400&&f(y)<M;S++)y+=1;w-=2,y+=2;let R=y-w,v=_.small?3.4:4.4,x=f(w)+.25,A=f(y)+.25,E=_.arch??(_.small?1.2:Math.min(7,Math.max(3,R*.07))),T=S=>{let L=(S-w)/R;return Qt(x,A,L)+E*Math.sin(Math.PI*L)},b=S=>T(S+.5)-T(S-.5),I=(S,L,U)=>g?[S,U,_.at+L]:[_.at+L,U,S],D=Math.ceil(R/2);for(let S=0;S<D;S++){let L=w+S*R/D,U=w+(S+1)*R/D,N=T((L+U)/2),z=(B,V,X,nt,q,j)=>{let[ut,,Tt]=I(L,B,0),[yt,,Bt]=I(U,V,0);t.push({box:new _e(new F(Math.min(ut,yt),X,Math.min(Tt,Bt)),new F(Math.max(ut,yt),nt,Math.max(Tt,Bt))),color:j,kind:q})};z(-v/2,v/2,N-.6,N,"bridge",11897438),z(-v/2-.3,-v/2,N,N+1.3,"rail",8015414),z(v/2,v/2+.3,N,N+1.3,"rail",8015414)}for(let S=w+.5;S<y;S+=1){let L=T(S)-.12,U=Math.atan(b(S)),[N,,z]=I(S,0,0);g?l.add(N,L,z,.95,.25,v,0,0,U):l.add(N,L,z,v,.25,.95,-U,0,0)}for(let S=w;S<=y+.01;S+=4){for(let L of[-1,1]){let[U,N,z]=I(S,L*(v/2+.15),T(S)+.7);h.add(U,N,z,.28,1.6,.28)}if(!_.small&&S>w+6&&S<y-6&&Math.round(S-w)%16===0){let[L,,U]=I(S,0,0),N=e(L,U);d.add(L,N,U,1.1,T(S)-.5-N,1.1)}}for(let S=w;S<y-.01;S+=4){let L=Math.min(S+4,y),U=(S+L)/2,N=Math.atan((T(L)-T(S))/(L-S));for(let z of[-1,1])for(let B of[1.35,.7]){let[V,X,nt]=I(U,z*(v/2+.15),T(U)+B);g?u.add(V,X,nt,L-S,.1,.1,0,0,N):u.add(V,X,nt,.1,.1,L-S,-N,0,0)}}if(!_.small)for(let[S,L]of[[w,1],[y,-1]]){let U=T(S);for(let nt of[-1,1]){let[q,,j]=I(S,nt*(v/2+.6),0),ut=pt(new k(new ft(.5,5.5,.5),r));ut.position.set(q,U+2.5,j);let Tt=new k(new on(.35,0),c);Tt.position.set(q,U+5.6,j),n.add(ut,Tt)}let[N,,z]=I(S,0,0),B=pt(new k(new ft(g?.4:v+2.2,.4,g?v+2.2:.4),r));B.position.set(N,U+5.1,z),n.add(B);let V=aE(_.name),X=new k(new yn(3.2,1),new Rt({map:V,side:ce}));X.position.set(N,U+4.3,z),X.rotation.y=g?L>0?-Math.PI/2:Math.PI/2:L>0?Math.PI:0,n.add(X)}p.push({..._,from:m(w),to:m(y),length:R})}return n.add(l.finish(),h.finish(),u.finish(),d.finish()),{group:n,bridges:p}}function cE(){let i=new zn({side:Un,depthWrite:!1,uniforms:{top:{value:new K("#4f8fe0")},horizon:{value:new K("#fde8d2")},bottom:{value:new K("#8fc3e0")}},vertexShader:`
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
      }`});return new k(new ie(1700,32,16),i)}function lE(i){let t=new xt,e=new ec({color:16777215,emissive:12107980,flatShading:!0}),n=new Sn(1,1);for(let s=0;s<90;s++){let r=new xt,o=4+Math.floor(i()*4);for(let l=0;l<o;l++){let h=10+i()*12,u=new k(n,e);u.scale.set(h,h*.6,h),u.position.set((l-o/2)*15+i()*6,i()*6,i()*12-6),r.add(u)}let a=i()*Math.PI*2,c=i()*1600;r.position.set(Math.cos(a)*c,130+i()*90,Math.sin(a)*c),t.add(r)}return t}function hE(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=512/2;e.strokeStyle="#ffffff",e.fillStyle="#ffffff",e.lineCap="round",e.lineWidth=10,e.beginPath(),e.arc(n,n,236,0,Math.PI*2),e.stroke(),e.lineWidth=4,e.beginPath(),e.arc(n,n,206,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(n,n,110,0,Math.PI*2),e.stroke();for(let r=0;r<16;r++){let o=r/16*Math.PI*2;e.save(),e.translate(n+Math.cos(o)*221,n+Math.sin(o)*221),e.rotate(o),e.lineWidth=4,e.beginPath(),r%2?(e.moveTo(-6,-6),e.lineTo(6,6),e.moveTo(6,-6),e.lineTo(-6,6)):e.arc(0,0,5,0,Math.PI*2),e.stroke(),e.restore()}e.lineWidth=5;for(let r of[0,Math.PI/3]){e.beginPath();for(let o=0;o<=3;o++){let a=r+o/3*Math.PI*2-Math.PI/2;e.lineTo(n+Math.cos(a)*200,n+Math.sin(a)*200)}e.stroke()}e.beginPath(),e.arc(n,n,22,0,Math.PI*2),e.fill();let s=new mi(t);return s.colorSpace=He,s}function uE(i){let t=Re.altar,e=t.h,n=new xt;n.position.set(t.x,e,t.z);let s=ht(14275267,{roughness:.85}),r=pt(new k(new It(7.6,8,.4,16),s));r.position.y=.2;let o=pt(new k(new It(7,7.3,.4,16),s));o.position.y=.6,n.add(r,o),i.push({box:new _e(new F(t.x-7.3,e-1,t.z-7.3),new F(t.x+7.3,e+.8,t.z+7.3)),cyl:{x:t.x,z:t.z,r:7.3},color:14275267,kind:"spawn"});let a=new k(new $e(6.4,48),new Me({map:hE(),color:8384736,transparent:!0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.82,n.add(a);let c=ht(12432806),l=new Rt({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let _=0;_<4;_++){let g=Math.PI/4+_/4*Math.PI*2,m=Math.cos(g)*10,f=Math.sin(g)*10,w=pt(new k(new It(.5,.7,3.2,6),c));w.position.set(m,1.6,f);let y=new k(new on(.45,0),l);y.position.set(m,3.8,f),n.add(w,y),i.push({box:new _e(new F(t.x+m-.7,e-1,t.z+f-.7),new F(t.x+m+.7,e+3.2,t.z+f+.7)),cyl:{x:t.x+m,z:t.z+f,r:.7},color:12432806,kind:"part"})}let h=60,u=new Float32Array(h*3),d=new Float32Array(h);for(let _=0;_<h;_++){let g=Math.random()*Math.PI*2,m=Math.random()*6;u[_*3]=Math.cos(g)*m,u[_*3+1]=Math.random()*6,u[_*3+2]=Math.sin(g)*m,d[_]=Math.random()}let p=new oe;return p.setAttribute("position",new de(u,3)),n.add(new Ze(p,new We({color:11206642,size:.25,transparent:!0,opacity:.85,depthWrite:!1}))),{group:n,update(_,g){a.rotation.z=g*.15,a.material.opacity=.75+Math.sin(g*2)*.2;let m=p.attributes.position;for(let f=0;f<h;f++){let w=m.getY(f)+_*(.6+d[f]);w>7&&(w=.8),m.setY(f,w)}m.needsUpdate=!0}}}function dE(i,t){let e=new xt,n=tn(e,i),s=Re.plateau,r=s.h,o=ht(7319119,{roughness:1}),a=M=>ht(M);n.cyl(5,25,s.x,r-1,s.z,a(11577242),11577242,"part",12);for(let M=4;M<24;M+=6){let R=new k(new It(5.15,5.15,.6,12),a(9405816));R.position.set(s.x,r+M,s.z),e.add(R)}n.cyl(6.5,2,s.x,r+24,s.z,a(13616822),13616822,"part",12);let c=new It(2.2,2,1,8),l=new Zt(2,2.4,8);for(let M=0;M<8;M++){let R=.9+M*.72,v=r+3+M*3,x=s.x+Math.cos(R)*12,A=s.z+Math.sin(R)*12,E=new xt,T=pt(new k(c,o)),b=pt(new k(l,a(10129296)));b.rotation.x=Math.PI,b.position.y=-1.7,E.add(T,b),E.position.set(x,v-.5,A),e.add(E),n.cyl(2.2,1,x,v-1,A,null,7319119)}n.cyl(2,.4,s.x,r+26,s.z,new Rt({color:15918793,roughness:.6}),16766826,"goal",16);let h=new k(new on(1.2,0),new Rt({color:9431295,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}));h.scale.y=1.6,h.position.set(s.x,r+30,s.z),e.add(h);let u=new Xe(8379647,30,30);u.position.copy(h.position),e.add(u);for(let M=0;M<10;M++){let R=M/10*Math.PI*2+.3,v=s.x+Math.cos(R)*19,x=s.z+Math.sin(R)*19,A=t(v,x),E=[7,3,5.5,1.5,8,2.5,6,4,7.5,2][M];if(n.cyl(1.3,E,v,A-.5,x,a(14209216),14209216,"part",8),E>5){let T=pt(new k(new It(1.7,1.7,.5,8),a(15130576)));T.position.set(v,A-.5+E+.25,x),e.add(T)}}let d=pt(new k(new It(1.2,1.2,8,8),a(14209216))),p=s.x-8,_=s.z+15;d.rotation.z=Math.PI/2,d.rotation.y=.6,d.position.set(p,t(p,_)+1,_),e.add(d);let g=Re.plateau.x-9,m=Re.plateau.z+22,f=t(g,m),w=a(13616822);n.box(1.6,7,1.6,g-4,f-.5,m,w,13616822),n.box(1.6,7,1.6,g+4,f-.5,m,w,13616822);let y=pt(new k(new ft(10.4,1.4,2),w));return y.position.set(g,f+7.2,m),e.add(y),{group:e,crystal:h,crystalBaseY:r+30}}function fE(i){let t=new xt,e=tn(t,i),n=Re.cave,s=n.h,r=13,o=.6,a=ht(8221808,{side:ce,transparent:!0,opacity:1}),c=pt(new k(new ie(r,22,12,Math.PI+o,Math.PI*2-o*2,0,Math.PI/2),a));c.scale.y=.8,c.position.set(n.x,s-.5,n.z),t.add(c);let l=ht(9273976);for(let v of[-1,1]){let x=v*(o+.05),A=pt(new k(new Xn(2.6,0),l));A.position.set(n.x+Math.cos(x)*r,s+1.2,n.z+Math.sin(x)*r),A.scale.set(1,1.6,1),t.add(A)}for(let v=0;v<28;v++){let x=v/28*Math.PI*2,A=Math.atan2(Math.sin(x),Math.cos(x));Math.abs(A)<o||e.cyl(2.2,14,n.x+Math.cos(x)*(r+.5),s-1,n.z+Math.sin(x)*(r+.5),null,8221808,"wall")}let h=new Rt({color:10479871,emissive:4175584,emissiveIntensity:1.1,flatShading:!0}),u=new Rt({color:16759008,emissive:13656232,emissiveIntensity:.9,flatShading:!0}),d=new on(1,0);[[-7,-4],[-8,3],[-3,-8],[-2,8],[3,-9]].forEach(([v,x],A)=>{for(let E=0;E<4;E++){let T=new k(d,A%2?u:h),b=.5+Math.random()*.7;T.scale.set(b*.6,b*2,b*.6),T.position.set(n.x+v+(Math.random()-.5)*2,s+b,n.z+x+(Math.random()-.5)*2),T.rotation.set((Math.random()-.5)*.6,Math.random()*3,(Math.random()-.5)*.6),t.add(T)}e.cyl(1.4,3,n.x+v,s-.5,n.z+x,null,A%2?16759008:10479871,"part")});let _=new Xe(8379647,60,22);_.position.set(n.x-3,s+5,n.z),t.add(_);let g=new xt,m=ht(9067067),f=ht(16040539,{metalness:.6,roughness:.35}),w=pt(new k(new ft(2,1.1,1.3),m));w.position.y=.55;let y=pt(new k(new It(.65,.65,2,10,1,!1,0,Math.PI),m));y.rotation.z=Math.PI/2,y.position.y=1.1;let M=new k(new ft(2.05,.18,1.35),f);M.position.y=1;let R=new k(new ft(.3,.35,.1),f);return R.position.set(0,.95,.68),g.add(w,y,M,R),g.position.set(n.x-9,s,n.z),g.rotation.y=Math.PI/2,t.add(g),e.cyl(1.2,1.7,n.x-9,s,n.z,null,16040539,"chest"),{group:t,update(v,x){let E=x&&Math.hypot(x.x-n.x,x.z-n.z)<r+1?.18:1;a.opacity+=(E-a.opacity)*Math.min(1,v*6),a.depthWrite=a.opacity>.95}}}function pE(i){let e=new Map,n=(o,a)=>o*1e5+a;for(let o of i){let a=Math.floor(o.box.min.x/24),c=Math.floor(o.box.max.x/24),l=Math.floor(o.box.min.z/24),h=Math.floor(o.box.max.z/24);for(let u=a;u<=c;u++)for(let d=l;d<=h;d++){let p=n(u,d);e.has(p)||e.set(p,[]),e.get(p).push(o)}}let s=0,r=[];return(o,a)=>{s++,r.length=0;let c=Math.floor(o/24),l=Math.floor(a/24);for(let h=c-1;h<=c+1;h++)for(let u=l-1;u<=l+1;u++){let d=e.get(n(h,u));if(d)for(let p of d)p._stamp!==s&&(p._stamp=s,r.push(p))}return r.slice()}}function bf(i,t,e={}){let n=!!e.lite,s=Wr(2024);i.background=new K("#fde8d2"),i.fog=new Xa("#e6eef2",300,n?1e3:1500);let r=cE();i.add(r);let o=lE(s);i.add(o),i.add(new nc(14478591,8032090,1));let a=new F(50,80,20),c=new sc(16773340,2.4);c.position.copy(a),c.castShadow=!0,c.shadow.mapSize.set(n?1024:2048,n?1024:2048),c.shadow.camera.left=-60,c.shadow.camera.right=60,c.shadow.camera.top=60,c.shadow.camera.bottom=-60,c.shadow.camera.far=250,c.shadow.bias=-5e-4,c.shadow.normalBias=.05,i.add(c),i.add(c.target);let l=Zd(Wi);l.maxR=Nn-30;let h=qd([l]);i.add(h.group);let u=h.sample,d=(b,I)=>Wi[l.regionIndexAt(b,I)],p=(b,I)=>u(b,I)>.3?d(b,I):null,_=vf(h.heightTex);i.add(_.mesh);let g=wf(u);i.add(g.group);let m=[],f=[],w=uE(m);i.add(w.group);let y=dE(m,u);i.add(y.group);let M=fE(m);i.add(M.group);let R=ef(m,u);i.add(R.group),Wi.forEach((b,I)=>{if(b.decorate){let S=b.decorate(m,u,Wr(b.cx*7+b.cz*13+5));i.add(S.group),f.push(S.update)}let D=(S,L)=>l.weightOf(I,S,L);i.add(rf(b,m,u,h.slopeAt,Wr(b.cx*3+b.cz*11+1),D,n?.35:1))});let v=Tf(Mf,m,u);i.add(v.group);let x=Yd(h.colorAt,u),A=pE(m),E=new F(Re.altar.x,Re.altar.h+.8,Re.altar.z),T=0;return{sun:c,spawnPoint:E,colliders:m,collidersNear:A,mapImage:x,bridges:v.bridges,waterLevel:Yn,groundHeight:u,slopeAt:h.slopeAt,islandAt:p,regionAt:d,update(b,I,D){T+=b,D&&r.position.copy(D),o.rotation.y+=b*.004,_.update(T),I&&_.mesh.position.set(I.x,Yn,I.z),g.update(b,T),w.update(b,T),R.update(T),M.update(b,I);for(let S of f)S(b,T,I);y.crystal.rotation.y+=b*.8,y.crystal.position.y=y.crystalBaseY+Math.sin(T*1.5)*.4,I&&(c.target.position.copy(I),c.position.copy(I).add(a))}}}var _c={sword:[{anim:0,name:"\u7E26\u65AC\u308A",duration:.42,hitTime:.14,range:4.6,arc:1.7,power:1,knockback:1,lunge:7,hop:0,shake:.18,hitStop:.05},{anim:1,name:"\u6A2A\u8599\u304E",duration:.46,hitTime:.17,range:5,arc:3,power:1.1,knockback:1.4,lunge:9,hop:0,shake:.25,hitStop:.06},{anim:2,name:"\u56DE\u8EE2\u65AC\u308A",duration:.62,hitTime:.3,range:5.6,arc:Math.PI*2,power:1.7,knockback:2.2,lunge:4,hop:16,shake:.6,hitStop:.1}],fists:[{anim:3,name:"\u30B8\u30E3\u30D6",duration:.28,hitTime:.08,range:3.2,arc:1.4,power:.45,knockback:.6,lunge:5,hop:0,shake:.08,hitStop:.03},{anim:4,name:"\u30B9\u30C8\u30EC\u30FC\u30C8",duration:.38,hitTime:.12,range:3.6,arc:1.4,power:.7,knockback:1.2,lunge:8,hop:0,shake:.15,hitStop:.05},{anim:14,name:"\u30A2\u30C3\u30D1\u30FC",duration:.46,hitTime:.15,range:3.6,arc:1.6,power:1,knockback:1.6,lunge:6,hop:10,shake:.25,hitStop:.07}],blood:[{anim:10,name:"\u9006\u8888\u88DF",duration:.34,hitTime:.1,range:4.9,arc:2,power:1,knockback:.8,lunge:8,hop:0,shake:.2,hitStop:.05},{anim:11,name:"\u8888\u88DF\u65AC\u308A",duration:.36,hitTime:.11,range:4.9,arc:2,power:1.1,knockback:1,lunge:8,hop:0,shake:.24,hitStop:.05},{anim:12,name:"\u8840\u9583\u7A81\u304D",duration:.42,hitTime:.13,range:7.5,arc:.7,power:1.5,knockback:1.8,lunge:18,hop:0,shake:.3,hitStop:.07},{anim:13,name:"\u8840\u65CB",duration:.72,hitTime:.22,hitTimes:[.22,.44],range:6.2,arc:Math.PI*2,power:1.3,knockback:2.4,lunge:4,hop:12,shake:.55,hitStop:.09}]},Vv=_c.sword,Sf={0:.42,1:.46,2:.62,3:.28,4:.38,5:.9,6:.45,7:.95,8:.6,9:.9,10:.34,11:.36,12:.42,13:.72,14:.46},Rf=.45;var Th=(i,t={})=>new Rt({color:i,metalness:.3,roughness:.32,flatShading:!0,...t}),Ec=(i,t,e=1.2,n={})=>new Rt({color:i,emissive:t,emissiveIntensity:e,flatShading:!0,...n});function bh(i,t){let e=new Ps;i.forEach(([s,r],o)=>o?e.lineTo(s,r):e.moveTo(s,r)),e.closePath();let n=new Qs(e,{depth:t,bevelEnabled:!0,bevelThickness:t*.35,bevelSize:.02,bevelSegments:1});return n.translate(0,0,-t/2),n.rotateY(-Math.PI/2),n}function mE(i=2757656,t=.5){let e=new k(new It(.075,.085,t,8),new Rt({color:i,roughness:.8}));return e.rotation.x=Math.PI/2,e.position.z=-.02,e}function gE(){let i=new xt,t=[[.3,-.17],[1.4,-.22],[2.05,-.15],[2.65,0]];for(let u=5;u>=0;u--){let d=.5+u*.3;t.push([d+.2,.17+(u>3?-.02:0)],[d+.1,.27],[d,.18])}t.push([.3,.17]);let e=new k(bh(t,.07),Th(2761776,{roughness:.3})),n=new k(bh([[.4,-.06],[1.6,-.08],[2.35,0],[1.6,.08],[.4,.06]],.1),Ec(16719920,14684192,1.6)),s=Ec(16738938,16719936,1.8);for(let u=0;u<4;u++)for(let d of[-1,1]){let p=new k(new ft(.02,u%2?.1:.06,.06),s);p.position.set(d*.055,u%2?.12:-.13,.7+u*.35),p.rotation.x=u*.7,i.add(p)}let r=Th(2363416);for(let u of[-1,1]){let d=[[0,0],[.1,u*.25],[.02,u*.5],[.16,u*.42],[.12,u*.66],[.26,u*.3],[.18,0]],p=new k(bh(d,.05),r);p.position.z=.2,i.add(p)}let o=new k(new ie(.08,10,8),Ec(16765136,16719920,1.2));o.scale.set(.6,1,.6),o.position.set(0,0,.26);let a=new k(new ft(.1,.1,.02),new Me({color:1703941}));a.scale.set(1,.25,1),a.position.set(0,0,.27),a.rotation.y=Math.PI/2;let c=new k(new Zt(.08,.2,6),r);c.rotation.x=-Math.PI/2,c.position.z=-.36;let l=Th(4864580);for(let u=0;u<3;u++){let d=new k(new Kn(.035,.012,4,8),l);d.position.set(0,-.06-u*.06,-.44),d.rotation.y=u%2?Math.PI/2:0,i.add(d)}let h=new k(new on(.06,0),Ec(16722490,12582936,1.5));return h.position.set(0,-.25,-.44),i.add(e,n,o,a,mE(1707026,.5),c,h),{group:i,pulse:[n.material,o.material,s,h.material]}}var Af={sangrea:gE};function Cf(i){let t=Af[i]();return t.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t.base=t.pulse.map(e=>e.emissiveIntensity),t}var Pf=Object.keys(Af);var xE={skin:16769223,hair:3882874,tunic:2864544,scarf:15764028,pants:4869737,boots:8015414,belt:7030320},$n=(i,t={})=>new Rt({color:i,roughness:.6,...t});function li(i){return i.castShadow=!0,i.receiveShadow=!0,i}function Go(i,t,e,n=0){let s=t*i,r=e*i,o=Math.sqrt(Math.max(0,i*i-s*s-r*r))+n;return new F(s,r,o)}function If(i=xE){let t=new xt,e=new xt;t.add(e);let n=(O,st,mt,Lt,Et,ge,ye)=>{let Ie=new xt;Ie.position.set(O,st,0);let Ce=li(new k(new tc(Lt,mt,4,10),$n(Et)));Ce.position.y=-mt/2-Lt*.5,Ie.add(Ce);let le=li(new k(new ie(Lt*ye,12,10),$n(ge)));return le.position.y=-mt-Lt*.7,Ie.add(le),e.add(Ie),{pivot:Ie,end:le}},s=n(-.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot,r=n(.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot;for(let O of[s,r])O.children[1].scale.set(1,.8,1.35);let o=new xt;o.position.y=1.4;let a=li(new k(new It(.72,1,1.7,16),$n(i.tunic)));a.position.y=.85;let c=li(new k(new Kn(.86,.1,6,20),$n(i.belt)));c.rotation.x=Math.PI/2,c.position.y=.55;let l=new k(new ft(.26,.22,.08),$n(16040539,{metalness:.6,roughness:.3}));l.position.set(0,.55,.93),o.add(a,c,l),e.add(o);let h=n(-.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot,u=n(.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot;h.rotation.z=-.12,u.rotation.z=.12;let d=new xt;d.position.y=-.95,d.rotation.x=.35;let p=$n(15134453,{metalness:.7,roughness:.25}),_=li(new k(new ft(.09,.3,1.6),p));_.position.z=1.05;let g=li(new k(new Zt(.12,.3,4),p));g.rotation.x=Math.PI/2,g.scale.x=.5,g.position.z=1.95;let m=li(new k(new ft(.2,.62,.12),$n(16040539,{metalness:.6,roughness:.3})));m.position.z=.28;let f=new k(new It(.08,.08,.45,8),$n(7030320));f.rotation.x=Math.PI/2;let w=new xt;w.add(_,g,m,f),d.add(w),u.add(d);let y={},M=null,R=new xt;R.position.set(0,-1.32,.18),R.scale.setScalar(1.6);let v=new k(new ie(.22,12,10),$n(14677247,{transparent:!0,opacity:.55,roughness:.1})),x=new k(new ie(.17,12,10),new Rt({color:16734830,emissive:13639744,emissiveIntensity:.6})),A=new k(new It(.07,.09,.22,8),$n(14677247,{transparent:!0,opacity:.55}));A.position.y=.26;let E=new k(new It(.08,.07,.1,8),$n(11565653));E.position.y=.4,R.add(x,v,A,E),R.visible=!1,u.add(R);let T=new k(new bi(1.4,3.9,24,1,-.4,3),new Me({color:15269883,transparent:!0,opacity:0,side:ce,depthWrite:!1,blending:Wn}));T.position.set(.9,2.9,0),T.rotation.y=-Math.PI/2,T.visible=!1,e.add(T);let b=new k(new bi(1.4,4.4,32,1,-2.35,3.4),T.material.clone());b.rotation.x=-Math.PI/2,b.position.y=2.8,b.visible=!1,e.add(b);let I=new k(new bi(1.6,5.2,48),T.material.clone());I.material.color.set(16774344),I.rotation.x=-Math.PI/2,I.position.y=2.4,I.visible=!1,t.add(I);let D=new xt;D.position.set(0,2.9,0);let S=new k(new bi(1.4,4.2,28,1,-.5,3.1),T.material.clone());S.rotation.y=-Math.PI/2,D.add(S),D.visible=!1,e.add(D);let L=new k(new Zt(.5,1,10,1,!0).rotateX(-Math.PI/2).translate(0,0,.5),T.material.clone());L.position.set(.7,2.8,.6),L.visible=!1,e.add(L);let U=li(new k(new Kn(.62,.22,8,20),$n(i.scarf)));U.rotation.x=Math.PI/2,U.position.y=3.1,e.add(U);let N=new xt;N.position.set(.35,3.05,-.55);let z=li(new k(new ft(.4,1.2,.12),$n(i.scarf)));z.position.y=-.55,N.add(z),e.add(N);let B=1.05,V=new xt;V.position.y=4.05;let X=li(new k(new ie(B,28,20),$n(i.skin,{roughness:.75,emissive:5913130,emissiveIntensity:.35})));V.add(X);let nt=$n(i.hair,{roughness:.5,flatShading:!0}),q=li(new k(new ie(B*1.08,20,14,0,Math.PI*2,0,Math.PI*.52),nt));q.rotation.x=-.35,V.add(q);for(let O=-2;O<=2;O++){let st=li(new k(new Zt(.2,.55,4),nt)),mt=Go(B,O*.22,.55,.02);st.position.copy(mt),st.rotation.set(Math.PI+.5,0,O*.15),V.add(st)}let j=li(new k(new Zt(.14,.7,5),nt));j.position.set(.1,B*1.1,.1),j.rotation.set(.3,0,-.5),V.add(j);let ut=new Rt({color:1907507,roughness:.3}),Tt=new Me({color:16777215}),yt=[];for(let O of[-1,1]){let st=new k(new ie(.15,12,10),ut);st.scale.set(.9,1.35,.45),st.position.copy(Go(B,O*.34,-.02,-.03)),st.lookAt(st.position.clone().multiplyScalar(2)),V.add(st),yt.push(st);let mt=new k(new ie(.05,8,6),Tt);mt.position.copy(Go(B,O*.34+.05,.07,.03)),V.add(mt)}let Bt=new Me({color:16751266,transparent:!0,opacity:.6});for(let O of[-1,1]){let st=new k(new $e(.13,16),Bt);st.scale.x=1.4;let mt=Go(B,O*.55,-.25,.01);st.position.copy(mt),st.lookAt(mt.clone().multiplyScalar(2)),V.add(st)}let qt=new k(new Kn(.1,.025,6,12,Math.PI),new Me({color:5909805}));qt.position.copy(Go(B,0,-.3,.005)),qt.rotation.z=Math.PI,qt.rotation.x=-.3,V.add(qt),e.add(V);let bt=Math.random()*10,Ot=-1,G=0,at=0,Q=0,lt=0,et=2+Math.random()*3,Pt=-1,gt=0,H=1,P="fists",Z=1,rt=0,ot=!1,it=0,Dt=!0,vt=-1,St=-1,Gt=0,$t=0,ct=0,te=-1,kt={yaw:0,pitch:0,targetYaw:0,targetPitch:0,timer:2},Jt=12,Ft=!0,Ct=0,Kt=[];e.traverse(O=>{O.isMesh&&O.material.isMeshStandardMaterial&&!Kt.includes(O.material)&&Kt.push(O.material)});let Ee=Kt.map(O=>({color:O.emissive.getHex(),intensity:O.emissiveIntensity})),tt=qn.lerp,Yt=(O,st,mt,Lt)=>O+(st-O)*Math.min(1,Lt*mt);function _t(O,st){let mt=st.speed??0,Lt=st.grounded??!0;bt+=O,at=Yt(at,Lt?mt:0,10,O),Q=Yt(Q,Lt?0:1,12,O),lt=Yt(lt,st.run&&Lt?1:0,8,O),G+=O*10*Math.max(at,.2)*(1+.55*lt);let Et=(1-at)*(1-Q);h.rotation.y=0,u.rotation.y=0,d.rotation.x=.35;let ge=0;Lt&&!Dt&&(vt=0),!Lt&&Dt&&(St=0),Dt=Lt;let ye=t.rotation.y-Gt;ye=Math.atan2(Math.sin(ye),Math.cos(ye)),Gt=t.rotation.y,$t=Yt($t,qn.clamp(-(ye/Math.max(O,.001))*.04,-.22,.22)*at,8,O);let Ie=Pt>=0||Ot>=0||ot;Et>.9&&!Ie?ct+=O:(ct=0,te=-1),te<0&&ct>7&&(te=0);let Ce=Math.sin(bt*2.2),le=(Math.sin(bt*1.3)*.7+Math.sin(bt*.47+1)*.3)*Et,sn=Math.sin(bt*.8+.5)*Et,Fn=Math.sin(G)*.8*at*(1+.45*lt),Fs=Math.abs(Math.sin(G))*.14*at*(1+.6*lt);if(h.rotation.x=Fn+le*.06+Ce*.03*Et,u.rotation.x=-Fn+le*.06-Ce*.03*Et,h.rotation.z=-.12-Ce*.035*Et-at*.05,u.rotation.z=.12+Ce*.035*Et+at*.05,s.rotation.x=-Fn+le*.03,r.rotation.x=Fn+le*.03,s.rotation.z=sn*.025,r.rotation.z=sn*.025,o.position.y=1.4+Fs+Ce*.025*Et,o.scale.set(1+Ce*.012*Et,1,1+Ce*.018*Et),o.rotation.y=-Math.sin(G)*.14*at,kt.timer-=O,kt.timer<=0){let Ut=Math.random()<.6;kt.targetYaw=Ut?(Math.random()-.5)*1.1:0,kt.targetPitch=Ut?(Math.random()-.4)*.25:0,kt.timer=1.5+Math.random()*3}kt.yaw=Yt(kt.yaw,kt.targetYaw*Et,5,O),kt.pitch=Yt(kt.pitch,kt.targetPitch*Et,5,O),V.position.y=4.05+Fs*1.1+Ce*.04*Et,V.rotation.y=kt.yaw,V.rotation.x=kt.pitch+Math.sin(G*2)*.04*at-le*.03,V.rotation.z=Math.sin(G)*.05*at+sn*.03,U.position.y=3.1+Fs,N.position.y=3.05+Fs,lt>.01&&(h.rotation.x-=.35*lt,u.rotation.x-=.35*lt,h.rotation.z-=.12*lt,u.rotation.z+=.12*lt),N.rotation.x=-.2-at*.9-lt*.5-Q*.6+Math.sin(bt*6)*.08*(.3+at)+le*.05,N.rotation.z=Math.sin(bt*2.3)*.08*(.4+at);let ln=le*.035+at*.12+lt*.18,gs=sn*.025+Math.sin(G)*.045*at+$t,Bn=1,ui=Et+at*.5;if(P==="fists"){let Ut=Math.abs(Math.sin(bt*5.5))*Et;h.rotation.x=tt(h.rotation.x,-1.15+Math.sin(bt*5.5)*.06,ui),h.rotation.z=tt(h.rotation.z,.42,ui),u.rotation.x=tt(u.rotation.x,-.95-Math.sin(bt*5.5+1)*.06,ui),u.rotation.z=tt(u.rotation.z,-.42,ui),Bn-=Ut*.035,ln+=.05*Et,o.rotation.y=tt(o.rotation.y,.18,Et),V.rotation.x+=.08*Et}else P==="sword"?(u.rotation.x=tt(u.rotation.x,-.25+Math.max(0,Math.sin(bt*.7))*.2,Et),d.rotation.x=.35+.3*Et):P==="blood"&&(u.rotation.x=tt(u.rotation.x,-.55+Math.sin(bt*1.1)*.05,ui),u.rotation.z=tt(u.rotation.z,.35,ui),d.rotation.x=.35+.55*ui,h.rotation.x=tt(h.rotation.x,-.35,Et),h.rotation.z=tt(h.rotation.z,-.55,Et),ln+=.1*Et,gs+=.05*Et,V.rotation.x+=.14*Et,kt.yaw*=.4,V.rotation.y=kt.yaw,s.rotation.x-=.15*Et,r.rotation.x+=.2*Et);if(te>=0){te+=O;let Ut=Math.min(te/2.4,1),xe=Math.sin(Math.min(Ut*3,1)*Math.PI/2)*(Ut>.7?(1-Ut)/.3:1);h.rotation.z=tt(h.rotation.z,-2.7,xe),u.rotation.z=tt(u.rotation.z,2.7,xe),h.rotation.x=tt(h.rotation.x,-.3,xe),u.rotation.x=tt(u.rotation.x,-.3,xe),ln-=.12*xe,V.rotation.x-=.25*xe,Bn+=.04*xe,yt.forEach(me=>{me.scale.y=tt(1.35,.2,xe)}),Ut>=1&&(te=-1,ct=-6-Math.random()*6)}if(vt>=0){vt+=O;let Ut=vt/.25;Bn-=Math.sin(Math.min(Ut,1)*Math.PI)*.16,s.rotation.x-=Math.sin(Math.min(Ut,1)*Math.PI)*.3,r.rotation.x-=Math.sin(Math.min(Ut,1)*Math.PI)*.3,Ut>=1&&(vt=-1)}if(St>=0){St+=O;let Ut=St/.2;Bn+=Math.sin(Math.min(Ut,1)*Math.PI)*.1,Ut>=1&&(St=-1)}if(Q>.01&&(h.rotation.z=tt(h.rotation.z,-1.1,Q),u.rotation.z=tt(u.rotation.z,1.1,Q),h.rotation.x=tt(h.rotation.x,-.3,Q),u.rotation.x=tt(u.rotation.x,-.3,Q),s.rotation.x=tt(s.rotation.x,-.7,Q),r.rotation.x=tt(r.rotation.x,.2,Q)),et-=O,te<0){let Ut=et<.12;for(let xe of yt)xe.scale.y=Ut?.15:1.35}if(et<0&&(et=2+Math.random()*3),T.visible=b.visible=I.visible=D.visible=L.visible=!1,Pt>=0){Pt+=O*H;let Ut=Pt,xe=Sf[gt],me=C=>1-Math.pow(1-Math.min(Math.max(C,0),1),3),Ht=(C,W)=>Math.min(Math.max((Ut-C)/(W-C),0),1),Hi=Ht(xe-.18,xe);if(gt===0){let C;Ut<.1?C=tt(u.rotation.x,-2.8,me(Ut/.1)):Ut<.22?C=tt(-2.8,-.15,me(Ht(.1,.22))):C=tt(-.15,u.rotation.x,Hi),u.rotation.x=C,u.rotation.z=.25,h.rotation.x=tt(h.rotation.x,.5,1-Hi),o.rotation.y=Ut<.1?-.25*(Ut/.1):tt(-.25,.2,Ht(.1,.22))*(1-Hi),ln+=Ut<.1?-.05:.12*(1-Ht(.1,.4)),T.visible=Ut>.1&&Ut<.36,T.material.opacity=Ut<.22?.75:.75*(1-Ht(.22,.36))}else if(gt===1){let C=me(Ht(0,.1))*(1-Hi),W=me(Ht(.1,.26));u.rotation.z=tt(u.rotation.z,1.45,C),u.rotation.x=0,u.rotation.y=tt(0,tt(.9,-2.3,W),C),d.rotation.x=tt(.35,1.25,C),h.rotation.z=tt(h.rotation.z,-.9,C),h.rotation.y=tt(0,tt(.6,-.4,W),C),o.rotation.y=tt(.4,-.45,W)*C,gs+=tt(.08,-.1,W)*C,ln+=.08*C,V.rotation.y=tt(.3,-.3,W)*C,b.visible=Ut>.1&&Ut<.4,b.material.opacity=Ut<.26?.7:.7*(1-Ht(.26,.4))}else if(gt===2){let C=me(Ht(0,.12)),W=Ht(.12,.42),Y=C*(1-Hi);u.rotation.z=tt(u.rotation.z,1.5,Y),u.rotation.x=0,u.rotation.y=tt(0,.7,Y)*(1-W*.6),d.rotation.x=tt(.35,1.3,Y),h.rotation.z=tt(h.rotation.z,-1.3,Y),s.rotation.x-=.5*C*(1-W),r.rotation.x+=.3*C*(1-W),Bn-=.12*C*(1-Ht(.12,.2)),ge=-Math.PI*2*(1-Math.pow(1-W,2)),V.rotation.y=0,I.visible=Ut>.16&&Ut<.5,I.material.opacity=.75*(1-Ht(.3,.5)),I.scale.setScalar(.8+Ht(.16,.5)*.35)}else if(gt===3){let C=me(Ht(0,.07))*(1-Ht(.14,xe));h.rotation.x=tt(h.rotation.x,-1.55,C),h.rotation.z=tt(h.rotation.z,.15,C),u.rotation.x=tt(u.rotation.x,-.9,.7),u.rotation.z=tt(u.rotation.z,-.35,.7),o.rotation.y=.25*C,ln+=.06*C}else if(gt===4){let C=me(Ht(0,.05))*(1-Ht(.05,.12)),W=me(Ht(.05,.12))*(1-Ht(.2,xe));u.rotation.x=tt(tt(u.rotation.x,-.4,C),-1.6,W),u.rotation.z=tt(u.rotation.z,-.1,W),h.rotation.x=tt(h.rotation.x,-.9,.7),h.rotation.z=tt(h.rotation.z,.35,.7),o.rotation.y=tt(.2*C,-.35,W),ln+=.12*W-.04*C}else if(gt===5){let C=me(Ht(0,.2))*(1-Ht(.72,xe)),W=Ht(.25,.65);u.rotation.x=tt(u.rotation.x,-2.25,C),u.rotation.z=tt(u.rotation.z,-.45,C),V.rotation.x=tt(V.rotation.x,-.35-Math.sin(W*Math.PI*4)*.05,C),V.rotation.y=0,ln-=.06*C,Ut>.72&&yt.forEach(Y=>{Y.scale.y=.2})}else if(gt===6){let C=me(Ht(0,.06))*(1-Ht(xe-.12,xe)),W=me(Ht(.16,.26));u.rotation.z=tt(u.rotation.z,1.45,C),u.rotation.x=0,u.rotation.y=tt(0,tt(1.3,-2.2,W),C),d.rotation.x=tt(.35,1.25,C),h.rotation.x=tt(h.rotation.x,.9,C),s.rotation.x=tt(s.rotation.x,-.9,C),r.rotation.x=tt(r.rotation.x,.7,C),o.rotation.y=tt(.3,-.4,W)*C,ln+=.38*C,b.visible=Ut>.16&&Ut<.36,b.material.opacity=.8*(1-Ht(.26,.36))}else if(gt===7){let C=me(Ht(0,.12))*(1-Ht(.12,.2)),W=me(Ht(.1,.3))*(1-Ht(.55,.64)),Y=me(Ht(.55,.64))*(1-Ht(.8,xe));Bn-=.16*C+.1*Y,u.rotation.x=tt(tt(u.rotation.x,-2.95,W),-.35,Y),u.rotation.z=tt(u.rotation.z,-.15,Math.max(W,Y)),h.rotation.x=tt(tt(h.rotation.x,-2.7,W),-.5,Y),h.rotation.z=tt(h.rotation.z,.35,Math.max(W,Y)),s.rotation.x-=.6*Y,r.rotation.x+=.3*Y,ln+=-.18*W+.4*Y,T.visible=Ut>.55&&Ut<.75,T.material.opacity=.85*(1-Ht(.64,.75))}else if(gt===8){let C=me(Ht(0,.1))*(1-Ht(.1,.15)),W=me(Ht(.1,.16))*(1-Ht(.42,xe));u.rotation.x=tt(tt(u.rotation.x,-2.2,C),-.45,W),u.rotation.z=tt(u.rotation.z,.1,Math.max(C,W)),d.rotation.x=tt(.35,1.9,W),h.rotation.x=tt(h.rotation.x,.6,W),h.rotation.z=tt(h.rotation.z,-.6,W),Bn-=.12*W,s.rotation.x-=.5*W,ln+=.3*W}else if(gt===9){let C=me(Ht(0,.2))*(1-Ht(.55,.68)),W=Ht(.3,.45),Y=me(Ht(.55,.68))*(1-Ht(.78,xe));u.rotation.x=tt(tt(u.rotation.x,-1.75,C),-.3,Y),u.rotation.z=tt(tt(u.rotation.z,-.55,C),1.1,Y),d.rotation.x=tt(.35,-.95,C),h.rotation.x=tt(tt(h.rotation.x,-1.65+W*.35,C),-.3,Y),h.rotation.z=tt(tt(h.rotation.z,.55,C),-1.1,Y),V.rotation.x+=.18*C-.25*Y,ln+=-.12*Y,Ut>.3&&Ut<.6&&yt.forEach($=>{$.scale.y=.2})}else if(gt===10||gt===11){let C=gt===10,W=me(Ht(0,.06))*(1-Ht(.06,.1)),Y=me(Ht(.06,.16)),$=1-Hi,J=C?-.2:-2.7,At=C?-2.6:-.3,Nt=C?-.7:.9,Xt=C?.9:-.7;u.rotation.x=tt(u.rotation.x,tt(J,At,Y),$),u.rotation.z=tt(u.rotation.z,tt(Nt,Xt,Y),$),d.rotation.x=tt(.35,.8,$),h.rotation.x=tt(h.rotation.x,.5,$),o.rotation.y=tt(C?.3:-.2,C?-.35:.35,Y)*$,ln+=(.12*Y-.05*W)*$,D.rotation.z=C?-.75:.75,D.visible=Ut>.06&&Ut<.26,S.material.opacity=.85*(1-Ht(.16,.26))}else if(gt===12){let C=me(Ht(0,.08))*(1-Ht(.08,.12)),W=me(Ht(.08,.14))*(1-Hi);u.rotation.x=tt(tt(u.rotation.x,-.9,C),-1.55,W),u.rotation.z=tt(u.rotation.z,.05,Math.max(C,W)),u.rotation.y=.35*C,d.rotation.x=tt(.35,-.02,W),h.rotation.x=tt(h.rotation.x,.8,W),s.rotation.x-=.7*W,r.rotation.x+=.5*W,o.rotation.y=tt(.35*C,-.4,W),ln+=.3*W-.08*C,L.visible=Ut>.08&&Ut<.3,L.scale.set(1,1,1+Ht(.08,.16)*7),L.material.opacity=.8*(1-Ht(.16,.3))}else if(gt===13){let C=me(Ht(0,.08))*(1-Hi),W=Ht(.08,.55);u.rotation.z=tt(u.rotation.z,1.5,C),u.rotation.x=0,u.rotation.y=.5*C,d.rotation.x=tt(.35,1.3,C),h.rotation.z=tt(h.rotation.z,-1.2,C),ge=-Math.PI*4*(1-Math.pow(1-W,2)),Bn-=.1*me(Ht(0,.08))*(1-Ht(.08,.14)),I.visible=Ut>.1&&Ut<.62,I.material.opacity=.8*(1-Ht(.45,.62)),I.scale.setScalar(1+Ht(.1,.6)*.3)}else if(gt===14){let C=me(Ht(0,.08))*(1-Ht(.08,.14)),W=me(Ht(.08,.18))*(1-Ht(.3,xe));u.rotation.x=tt(tt(u.rotation.x,.3,C),-2.7,W),u.rotation.z=tt(u.rotation.z,-.2,Math.max(C,W)),h.rotation.x=tt(h.rotation.x,-.9,.7),h.rotation.z=tt(h.rotation.z,.4,.7),Bn-=.14*C-.06*W,ln+=-.1*W+.1*C,o.rotation.y=tt(.3*C,-.3,W)}Ut>=xe&&(Pt=-1,o.rotation.y=0)}if(rt=Math.max(0,rt-O),rt>0&&(ln-=.25*(rt/.25)),Kt.forEach((Ut,xe)=>{rt>0?(Ut.emissive.setHex(16724016),Ut.emissiveIntensity=.9*(rt/.25)):(Ut.emissive.setHex(Ee[xe].color),Ut.emissiveIntensity=Ee[xe].intensity)}),it=Yt(it,ot?1:0,6,O),ot&&yt.forEach(Ut=>{Ut.scale.y=.15}),e.rotation.x=tt(ln,-1.45,it),e.rotation.y=ge,e.rotation.z=gs*(1-it),e.scale.set(1+(1-Bn)*.5,Bn,1+(1-Bn)*.5),Ot>=0){Ot+=O;let xe=Math.min(Ot/2.2,1),me=Math.sin(Math.min(xe*4,1)*Math.PI/2)*(xe>.85?(1-xe)/.15:1);u.rotation.z=.12+me*2.5,u.rotation.x=-me*.2+Math.sin(Ot*12)*.35*me,V.rotation.z+=me*.08,(xe>=1||at>.3||Q>.3)&&(Ot=-1)}}return{object:t,setStance(O){P=O},setGlow(O){Z=O},bladeTip(O){return d.visible?(d.updateWorldMatrix(!0,!1),d.localToWorld(O.set(0,0,M?2.6:1.9))):null},setHeld(O){let st=Pf.includes(O);st&&!y[O]&&(y[O]=Cf(O),d.add(y[O].group));for(let[mt,Lt]of Object.entries(y))Lt.group.visible=mt===O;M=st?y[O]:null,w.visible=O==="sword",d.visible=O==="sword"||st,R.visible=O==="potion"},setTrailColor(O=15269883){T.material.color.setHex(O),b.material.color.setHex(O),I.material.color.setHex(O===15269883?16774344:O),S.material.color.setHex(O),L.material.color.setHex(O)},drink(){return ot?!1:(Pt=0,gt=5,H=1,Ot=-1,te=-1,!0)},wave(){Ot<0&&Pt<0&&(Ot=0)},attack(O=0,st=1){return ot?!1:(Pt=0,gt=O,H=st,Ot=-1,te=-1,!0)},get attacking(){return Pt>=0},hurt(){rt=.25},setFainted(O){ot=O,O?Pt=-1:it=0},get stepped(){return Ft},set stepped(O){Ft=O},update(O,st={}){if(M){let Lt=.75+.35*(.5+.5*Math.sin(bt*3.2+Ct*3.2));M.pulse.forEach((Et,ge)=>{Et.emissiveIntensity=M.base[ge]*Lt*Z})}if(Ct+=O,Ft&&Ct<1/Jt)return;let mt=Math.min(Ct,.2);Ct=0,_t(mt,st)}}}var yE=14,_E=1.7,EE=38,ME=120,vE=1.1,Xi=.85,Lf=5,wE=-40,TE=1.15,bE=3,SE=.55,Mc=1310,Ii=.001;function Hf(i,t){let e=i.object,n=e.position,s=new F,r=new dt,o=!0,a=0,c=0,l=null,h=!1,u=[],d=new F,p=new F,_=y=>({x:qn.clamp(y.x,n.x-Xi,n.x+Xi),z:qn.clamp(y.z,n.z-Xi,n.z+Xi)}),g=y=>{let M=y.box;d.set(n.x-Xi,n.y,n.z-Xi),p.set(n.x+Xi,n.y+Lf,n.z+Xi);let R=d.x<M.max.x-Ii&&p.x>M.min.x+Ii&&d.y<M.max.y-Ii&&p.y>M.min.y+Ii&&d.z<M.max.z-Ii&&p.z>M.min.z+Ii;if(!R||!y.cyl)return R;let v=_(y.cyl);return Math.hypot(v.x-y.cyl.x,v.z-y.cyl.z)<y.cyl.r-Ii};function m(y){let M=_(y),R=M.x-y.x,v=M.z-y.z,x=Math.hypot(R,v);x<1e-6&&(R=n.x-y.x,v=n.z-y.z,x=Math.hypot(R,v)||1,Math.hypot(R,v)<1e-6&&(R=1));let A=y.r-x+Ii*2;n.x+=R/x*A,n.z+=v/x*A}function f(y,M){if(M===0)return;n[y]+=M;let R=t.groundHeight(n.x,n.z),v=n.y+(o||h?Math.abs(M)*TE+.02:0);if(R>v){n[y]-=M;return}for(let x of u){let A=x.box;if(!g(x))continue;let E=A.max.y-n.y;if(o&&E>0&&E<=vE){let T=n.y;if(n.y=A.max.y,!u.some(b=>b!==x&&g(b)))continue;n.y=T}x.cyl?m(x.cyl):n[y]=M>0?A.min[y]-Xi-Ii:A.max[y]+Xi+Ii}}function w(y){let M=o;n.y+=y;let R=y<=0;o=!1,h=!1,l=null;for(let A of u)g(A)&&(R?(n.y=Math.max(n.y,A.box.max.y),o=!0,l=A.kind):n.y=A.box.min.y-Lf-Ii,s.y=0);let v=t.groundHeight(n.x,n.z);if((n.y<=v||!o&&M&&R&&n.y-v<.7)&&(n.y=v,s.y=0,o=!0,l="ground"),!o&&M&&R){let A=n.y;n.y-=.7;let E=-1/0,T=null;for(let b of u)b.box.max.y<=A+.01&&b.box.max.y>E&&g(b)&&(E=b.box.max.y,T=b.kind);n.y=A,T&&(n.y=E,s.y=0,o=!0,l=T)}let x=t.waterLevel-bE;if(!o&&n.y<x&&v<x&&(n.y=x,s.y<0&&(s.y=0),o=!0,h=!0,l="water"),!o&&s.y<=0){n.y-=.05;let A=u.find(E=>g(E));n.y+=.05,A&&(o=!0,l=A.kind)}}return{get grounded(){return o},get groundKind(){return l},get facing(){return a},get position(){return n},get swimming(){return h},respawn(y=0){n.copy(t.spawnPoint),s.set(0,0,0),r.set(0,0),a=y,e.rotation.y=y,o=!0},setFacing(y){a=y,e.rotation.y=y},knockback(y,M,R=0){r.set(y,M),R>0&&(s.y=R,o=!1)},update(y,M){u=t.collidersNear(n.x,n.z);let R=Math.min(1,Math.hypot(M.x,M.z));c=R;let v=!!M.run&&R>.1&&!h,x=yE*(h?SE:v?_E:1);if(s.x=M.x*x+r.x,s.z=M.z*x+r.y,r.multiplyScalar(Math.exp(-y*5)),M.jump&&o&&(s.y=EE*(h?.55:1),o=!1),s.y-=ME*y,f("x",s.x*y),f("z",s.z*y),w(s.y*y),n.x=qn.clamp(n.x,-Mc,Mc),n.z=qn.clamp(n.z,-Mc,Mc),R>.05&&!M.lockFacing){let E=Math.atan2(M.x,M.z)-a;E=Math.atan2(Math.sin(E),Math.cos(E)),a+=E*Math.min(1,y*14)}e.rotation.y=a,n.y<wE&&this.respawn(a),i.update(y,{speed:c,grounded:o,swimming:h,run:v})}}}function Df(i,{joystickEl:t,jumpBtnEl:e,attackBtnEl:n,skillBtnsEl:s,onKey:r}){let o=new Set,a={dx:0,dy:0},c=0,l=!1,h=!1,u=!1,d=-1,p={x:0,y:0,id:null};window.addEventListener("keydown",v=>{if(l&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(v.code)&&v.preventDefault(),o.add(v.code),!v.repeat)){(v.code==="KeyF"||v.code==="KeyJ")&&(u=!0);let x={KeyQ:0,KeyE:1,KeyR:2};v.code in x&&(d=x[v.code]),r?.(v.code)}}),window.addEventListener("keyup",v=>o.delete(v.code)),window.addEventListener("blur",()=>o.clear());let _=new Map;i.addEventListener("contextmenu",v=>v.preventDefault()),i.addEventListener("pointerdown",v=>{l&&(i.setPointerCapture(v.pointerId),_.set(v.pointerId,{x:v.clientX,y:v.clientY,sx:v.clientX,sy:v.clientY,time:performance.now(),button:v.button}),i.classList.add("dragging"))});let g=0;i.addEventListener("pointermove",v=>{let x=_.get(v.pointerId);if(!x)return;let A=v.clientX-x.x,E=v.clientY-x.y;if(x.x=v.clientX,x.y=v.clientY,_.size>=2){let[T,b]=[..._.values()],I=Math.hypot(T.x-b.x,T.y-b.y);g&&(c+=(g-I)*4),g=I;return}g=0,a.dx+=A,a.dy+=E});let m=v=>{let x=_.get(v.pointerId);x&&v.type==="pointerup"&&x.button===0&&l&&Math.hypot(v.clientX-x.sx,v.clientY-x.sy)<6&&performance.now()-x.time<300&&(u=!0),_.delete(v.pointerId),_.size<2&&(g=0),_.size===0&&i.classList.remove("dragging")};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),i.addEventListener("wheel",v=>{l&&(v.preventDefault(),c+=v.deltaY)},{passive:!1});let f=t.querySelector(".knob"),w=48,y=v=>{let x=t.getBoundingClientRect(),A=v.clientX-(x.left+x.width/2),E=v.clientY-(x.top+x.height/2),T=Math.hypot(A,E);T>w&&(A=A/T*w,E=E/T*w),p.x=A/w,p.y=E/w,f.style.transform=`translate(${A}px, ${E}px)`};t.addEventListener("pointerdown",v=>{p.id=v.pointerId,t.setPointerCapture(v.pointerId),y(v)}),t.addEventListener("pointermove",v=>{v.pointerId===p.id&&y(v)});let M=v=>{v.pointerId===p.id&&(p.id=null,p.x=p.y=0,f.style.transform="")};t.addEventListener("pointerup",M),t.addEventListener("pointercancel",M),e.addEventListener("pointerdown",v=>{v.preventDefault(),h=!0}),e.addEventListener("pointerup",()=>{h=!1}),e.addEventListener("pointercancel",()=>{h=!1}),e.addEventListener("pointerleave",()=>{h=!1}),n.addEventListener("pointerdown",v=>{v.preventDefault(),l&&(u=!0)}),[...s.children].forEach((v,x)=>{v.addEventListener("pointerdown",A=>{A.preventDefault(),l&&(d=x)})});let R=(...v)=>v.some(x=>o.has(x));return{get enabled(){return l},set enabled(v){l=v,v||(o.clear(),_.clear(),h=!1,u=!1,d=-1)},move(){let v=(R("KeyW","ArrowUp")?1:0)-(R("KeyS","ArrowDown")?1:0),x=(R("KeyD","ArrowRight")?1:0)-(R("KeyA","ArrowLeft")?1:0);v+=-p.y,x+=p.x;let A=Math.hypot(v,x);return A>1&&(v/=A,x/=A),{forward:v,right:x}},jump(){return l&&(o.has("Space")||h)},run(){return l&&(R("ShiftLeft","ShiftRight")||Math.hypot(p.x,p.y)>.92)},consumeAttack(){let v=u;return u=!1,v},consumeSkill(){let v=d;return d=-1,v},consumeLook(){let v={dx:a.dx,dy:a.dy,zoom:c};return a.dx=a.dy=0,c=0,v}}}var RE=i=>"#"+i.toString(16).padStart(6,"0");function Uf(i,t){let e=i.getContext("2d"),n=110,s=!1;function r(){let o=Math.min(window.devicePixelRatio,2),a=i.getBoundingClientRect();i.width=Math.round(a.width*o),i.height=Math.round(a.height*o)}return{get expanded(){return s},set expanded(o){s=o,i.classList.toggle("expanded",o),r()},resize:r,draw(o,a,c,l=[]){let h=i.width,u=i.height;if(!h||!u)return;let d=s?Nn-30:n,p=s?0:o.x,_=s?0:o.z,g=Math.min(h,u)/(d*2),m=x=>h/2+(x-p)*g,f=x=>u/2+(x-_)*g;e.fillStyle="#3b7fc0",e.fillRect(0,0,h,u),e.imageSmoothingEnabled=!0,e.drawImage(t.mapImage,m(-Nn),f(-Nn),Nn*2*g,Nn*2*g),e.lineWidth=1,e.strokeStyle="rgba(0,0,0,0.35)";for(let x of t.colliders){if(x.kind==="tree"||x.kind==="rock"||x.kind==="wall"||x.kind==="prop"||x.kind==="rail"||s&&x.kind!=="bridge"&&x.kind!=="house")continue;let A=x.box;e.fillStyle=RE(x.color),e.beginPath(),x.cyl?e.arc(m(x.cyl.x),f(x.cyl.z),Math.max(x.cyl.r*g,1.5),0,Math.PI*2):e.rect(m(A.min.x),f(A.min.z),(A.max.x-A.min.x)*g,(A.max.z-A.min.z)*g),e.fill(),e.stroke()}let w=m(o.x),y=f(o.z),M=h/i.getBoundingClientRect().width||1;e.fillStyle="#e0475a",e.strokeStyle="#ffffff",e.lineWidth=1.2*M;for(let x of l)e.beginPath(),e.arc(m(x.x),f(x.z),(x.big?3.6:2.6)*M,0,Math.PI*2),e.fill(),e.stroke();let R=Math.atan2(-Math.cos(c),-Math.sin(c));e.fillStyle="rgba(255,255,255,0.28)",e.beginPath(),e.moveTo(w,y),e.arc(w,y,34*M,R-.5,R+.5),e.closePath(),e.fill();let v=7*M;if(e.save(),e.translate(w,y),e.rotate(-a),e.fillStyle="#ffffff",e.strokeStyle="#1d8676",e.lineWidth=2.5*M,e.beginPath(),e.moveTo(0,v*1.3),e.lineTo(v,-v),e.lineTo(0,-v*.4),e.lineTo(-v,-v),e.closePath(),e.fill(),e.stroke(),e.restore(),s){e.font=`bold ${10*M}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.lineWidth=3*M,e.strokeStyle="rgba(28,26,58,0.8)",e.fillStyle="#ffffff";for(let x of ko){let A=m(x.x),E=f(x.z)-8*M;e.strokeText(x.name,A,E),e.fillText(x.name,A,E)}e.font=`bold ${16*M}px "M PLUS Rounded 1c", sans-serif`,e.fillStyle="#f4c25b";for(let x of Wi){let A=m(x.cx),E=f(x.cz+40);e.strokeText(x.name,A,E),e.fillText(x.name,A,E)}}e.fillStyle="rgba(20,24,32,0.75)",e.font=`bold ${11*M}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.fillText("N",h/2,13*M)}}}var AE=20,zf=(i,t,e=0)=>yc.some(n=>Math.hypot(i-n.x,t-n.z)<n.r+e);function CE(i=7167891){let t=new xt,e=new xt;e.position.y=2,t.add(e);let n=new Rt({color:i,roughness:.9,flatShading:!0}),s=new Sn(1,1),r=[[0,0,0,1.25],[.9,.2,-.2,.85],[-.9,.15,-.1,.9],[.3,.75,-.3,.8],[-.4,.6,.3,.7],[0,-.35,-.6,.8]];for(let[a,c,l,h]of r){let u=new k(s,n);u.position.set(a,c,l),u.scale.setScalar(h),u.castShadow=!0,e.add(u)}let o=new Rt({color:16769899,emissive:16763195,emissiveIntensity:1});for(let a of[-1,1]){let c=new k(new ie(.2,10,8),o);c.scale.set(1,.7,.5),c.position.set(a*.42,.1,1.18),c.rotation.z=a*-.35,e.add(c)}return{root:t,body:e,mats:[n],eyeMat:o,baseY:2,calmEye:16763195}}function PE(i=9407129){let t=new xt,e=new xt;e.position.y=1.7,t.add(e);let n=new Rt({color:i,roughness:1,flatShading:!0}),s=new Rt({color:7319119,roughness:1,flatShading:!0}),r=new k(new Xn(1.5,0),n);r.scale.set(1.1,.95,1),r.castShadow=!0;let o=new k(new ie(1.4,8,6,0,Math.PI*2,0,Math.PI*.33),s);o.position.y=.3,e.add(r,o);let a=new Xn(.55,0),c=[];for(let h of[-1,1]){let u=new k(a,n);u.position.set(h*2,-.2,.3),u.castShadow=!0,e.add(u),c.push(u);let d=new k(a,n);d.scale.set(1,.7,1.2),d.position.set(h*.75,-1.35,.1),d.castShadow=!0,e.add(d)}let l=new Rt({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let h of[-1,1]){let u=new k(new ft(.34,.16,.1),l);u.position.set(h*.5,.15,1.4),u.rotation.z=h*.2,e.add(u)}return{root:t,body:e,mats:[n,s],eyeMat:l,arms:c,baseY:1.7,calmEye:4183744}}var IE={kumodama:{name:"\u30AF\u30E2\u30C0\u30DE",hp:30,speed:7,radius:1.4,height:3.6,damage:8,exp:6,aggro:22,attackRange:7,windup:.45,cooldown:1.4,knockback:1,color:9404352,build:CE},ishimori:{name:"\u30A4\u30B7\u30E2\u30EA",hp:80,speed:4.5,radius:1.8,height:3.6,damage:15,exp:18,aggro:18,attackRange:8,windup:.6,cooldown:2.2,knockback:.45,color:9407129,build:PE}},Qr=Re.plateau,Nf=Re.cave,LE=[["ishimori",Qr.x+14,Qr.z-14],["ishimori",Qr.x-16,Qr.z+4],["ishimori",Qr.x+4,Qr.z+16],["ishimori",Nf.x-3,Nf.z+5]];function Of(i,t,e){let n=[],s=[],r=new F;function o(x){let A=document.createElement("div");return A.className="enemy-label",A.innerHTML=`<span class="enemy-name">${x.name} <small>Lv${x.level}</small></span><div class="enemy-hp"><div></div></div>`,A.style.display="none",e.appendChild(A),{el:A,fill:A.querySelector(".enemy-hp div")}}let a=LE.map(([x,A,E])=>[x,A,E,null]);for(let x of Wi){if(!x.enemies)continue;let A=Wr(x.cx*17+x.cz*29+3);for(let[E,T]of Object.entries(x.enemies)){let b=0;for(let I=0;b<T.count&&I<800;I++){let D=x.cx+(A()-.5)*x.maxR*1.6,S=x.cz+(A()-.5)*x.maxR*1.6;t.groundHeight(D,S)<2.5||t.slopeAt(D,S)>.5||zf(D,S,8)||t.regionAt(D,S)===x&&(Object.values(x.places).some(L=>Math.hypot(D-L.x,S-L.z)<L.r)||a.some(([,L,U])=>Math.hypot(D-L,S-U)<14)||(a.push([E,D,S,T]),b++))}}}for(let[x,A,E,T]of a){let b=IE[x],I=T?.mult??1,D={...b,name:T?.name??b.name,hp:Math.round(b.hp*I),damage:Math.round(b.damage*I),exp:Math.round(b.exp*I),speed:b.speed*(1+(I-1)*.15),color:T?.tint??b.color,level:Math.round(1+(I-1)*5.5)},S=b.build(T?.tint);i.add(S.root);let L={T:D,type:x,model:S,home:new F(A,0,E),pos:new F,vel:new dt,facing:0,hp:D.hp,state:"wander",timer:0,cooldown:0,target:new F,dir:new dt,jumpFrom:new F,jumpTo:new F,hitDone:!1,flash:0,labelTimer:0,spawnT:1,bob:Math.random()*10,bleed:null,label:o(D)};n.push(L),c(L,!0)}function c(x,A=!1){x.hp=x.T.hp,x.pos.copy(x.home),x.pos.y=t.groundHeight(x.home.x,x.home.z),x.vel.set(0,0),x.state="wander",x.timer=Math.random()*2,x.target.copy(x.home),x.cooldown=0,x.spawnT=A?1:0,x.model.root.visible=!0,l(x,!1)}function l(x,A){let E=A?16734794:x.model.calmEye;x.model.eyeMat.emissive.setHex(E),x.model.eyeMat.color.setHex(A?16747130:x.model.calmEye)}function h(x){let A=Math.random()*Math.PI*2,E=3+Math.random()*10;x.target.set(x.home.x+Math.cos(A)*E,0,x.home.z+Math.sin(A)*E)}function u(x,A,E){let T=x.T.radius;for(let S of yc){let L=x.pos.x-S.x,U=x.pos.z-S.z,N=Math.hypot(L,U);if(N<S.r+T){let z=(S.r+T)/Math.max(N,.001);x.pos.x=S.x+L*z,x.pos.z=S.z+U*z}}let b=t.groundHeight(x.pos.x,x.pos.z),I=t.groundHeight(A,E),D=Math.hypot(x.pos.x-A,x.pos.z-E);(b<1.2||x.state!=="attack"&&(b-I>D*1.1+.05||I-b>D*2+.05))&&(x.pos.x=A,x.pos.z=E,x.vel.set(0,0),x.state==="wander"&&h(x));for(let S of t.collidersNear(x.pos.x,x.pos.z)){if(S.box.min.y>x.pos.y+2||S.box.max.y<x.pos.y+.3||S.kind==="spawn")continue;let L,U;S.cyl?(L=S.cyl.x,U=S.cyl.z):(L=qn.clamp(x.pos.x,S.box.min.x,S.box.max.x),U=qn.clamp(x.pos.z,S.box.min.z,S.box.max.z));let N=T+(S.cyl?S.cyl.r:0),z=x.pos.x-L,B=x.pos.z-U,V=Math.hypot(z,B);V<N&&V>1e-4&&(x.pos.x=L+z/V*N,x.pos.z=U+B/V*N)}}function d(x,A,E,T,b){let I=A-x.pos.x,D=E-x.pos.z,S=Math.hypot(I,D);if(S<.3)return S;let L=Math.min(S,T*b);return x.pos.x+=I/S*L,x.pos.z+=D/S*L,p(x,I,D,b),S}function p(x,A,E,T){let I=Math.atan2(A,E)-x.facing;I=Math.atan2(Math.sin(I),Math.cos(I)),x.facing+=I*Math.min(1,T*8)}let _=new Sn(.3,0);function g(x,A,E=14){let T=new Rt({color:A,flatShading:!0,transparent:!0});for(let b=0;b<E;b++){let I=new k(_,T);I.position.copy(x);let D=Math.random()*Math.PI*2,S=4+Math.random()*6;s.push({mesh:I,t:0,life:.7+Math.random()*.3,vel:new F(Math.cos(D)*S,5+Math.random()*8,Math.sin(D)*S)}),i.add(I)}}let m=new bi(.8,1,32);function f(x,A){let E=new k(m,new Me({color:16769184,transparent:!0,side:ce,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.set(x.x,x.y+.15,x.z),i.add(E),s.push({mesh:E,t:0,life:.4,ring:A})}function w(x){for(let A=s.length-1;A>=0;A--){let E=s[A];E.t+=x;let T=E.t/E.life;if(T>=1){i.remove(E.mesh),s.splice(A,1);continue}if(E.ring)E.mesh.scale.setScalar(1+T*E.ring),E.mesh.material.opacity=1-T;else{E.vel.y-=30*x,E.mesh.position.addScaledVector(E.vel,x);let b=t.groundHeight(E.mesh.position.x,E.mesh.position.z)+.2;E.mesh.position.y<b&&(E.mesh.position.y=b,E.vel.multiplyScalar(.5),E.vel.y=Math.abs(E.vel.y)),E.mesh.scale.setScalar(1-T*.8),E.mesh.material.opacity=1-T*T,E.mesh.rotation.x+=x*8}}}function y(x,A,E,T=1,b=!0){let I=Math.max(1,Math.round(A*(.85+Math.random()*.3)));if(x.hp-=I,x.flash=.15,x.labelTimer=5,E&&T>0){let S=x.pos.x-E.x,L=x.pos.z-E.z,U=Math.max(Math.hypot(S,L),.001),N=12*x.T.knockback*T;x.vel.set(S/U*N,L/U*N)}let D=new F(x.pos.x,x.pos.y+x.T.height,x.pos.z);return x.hp<=0?(M(x),{enemy:x,pos:D,damage:I,killed:!0,exp:x.T.exp,name:x.T.name}):(b&&x.state!=="attack"&&(x.state="hurt",x.timer=.35),l(x,!0),{enemy:x,pos:D,damage:I,killed:!1,exp:0,name:x.T.name})}function M(x){x.state="dead",x.bleed=null,x.timer=AE,x.model.root.visible=!1,x.label.el.style.display="none",g(r.copy(x.pos).setY(x.pos.y+x.model.baseY),x.T.color)}function R(x,A){let E=A.playerPos,T=zf(E.x,E.z)||A.playerSwimming;for(let b of n){if(b.state==="dead"){b.timer-=x,b.timer<=0&&c(b);continue}let I=Math.hypot(E.x-b.pos.x,E.z-b.pos.z);if(b.model.root.visible=I<260,I>180)continue;if(b.bleed&&(b.bleed.tick-=x,b.bleed.tick<=0)){b.bleed.tick=1,b.bleed.left--;let q=y(b,b.bleed.dmg,null,0,!1);if(A.onBleed?.(q),b.bleed&&b.bleed.left<=0&&(b.bleed=null),b.state==="dead")continue}let D=b.T,S=b.pos.x,L=b.pos.z,U=E.x-b.pos.x,N=E.z-b.pos.z,z=Math.hypot(U,N),B=A.playerActive&&!T&&Math.abs(E.y-b.pos.y)<4;b.cooldown-=x,b.timer-=x,b.labelTimer-=x;let V=0;switch(b.state){case"wander":{if(B&&z<D.aggro){b.state="chase",l(b,!0);break}if(b.timer>0)break;d(b,b.target.x,b.target.z,D.speed*.35,x)<.5&&(b.timer=1+Math.random()*3,h(b));break}case"return":{if(B&&z<D.aggro){b.state="chase",l(b,!0);break}d(b,b.home.x,b.home.z,D.speed*.7,x)<1&&(b.state="wander",b.timer=1);break}case"chase":{if(!B||z>D.aggro*1.8){b.state="return",l(b,!1);break}if(z<D.attackRange&&b.cooldown<=0){b.state="windup",b.timer=D.windup;break}z>D.radius+1.2?d(b,E.x,E.z,D.speed,x):p(b,U,N,x);break}case"windup":{if(p(b,U,N,x),b.timer<=0){b.state="attack",b.hitDone=!1;let q=Math.max(z,.001);if(b.dir.set(U/q,N/q),b.type==="ishimori"){let j=Math.min(z,8);b.jumpFrom.copy(b.pos),b.jumpTo.set(b.pos.x+b.dir.x*j,0,b.pos.z+b.dir.y*j),b.timer=.55}else b.timer=.35}break}case"attack":{if(b.type==="ishimori"){let q=1-Math.max(b.timer,0)/.55;if(b.pos.lerpVectors(b.jumpFrom,b.jumpTo,q),V=Math.sin(q*Math.PI)*3.5,b.timer<=0){f(b.pos,5);let j=Math.hypot(E.x-b.pos.x,E.z-b.pos.z);B&&j<4.5&&E.y-b.pos.y<1.5&&A.onHitPlayer(D.damage,b.pos.x,b.pos.z),b.state="recover",b.timer=.7,b.cooldown=D.cooldown}}else{b.pos.x+=b.dir.x*20*x,b.pos.z+=b.dir.y*20*x;let q=Math.hypot(E.x-b.pos.x,E.z-b.pos.z);!b.hitDone&&B&&q<D.radius+1.1&&(b.hitDone=!0,A.onHitPlayer(D.damage,b.pos.x,b.pos.z)),b.timer<=0&&(b.state="recover",b.timer=.5,b.cooldown=D.cooldown)}break}case"recover":case"hurt":{b.timer<=0&&(b.state=B?"chase":"return");break}}b.pos.x+=b.vel.x*x,b.pos.z+=b.vel.y*x,b.vel.multiplyScalar(Math.exp(-x*6)),u(b,S,L),b.pos.y=t.groundHeight(b.pos.x,b.pos.z);for(let q of n){if(q===b||q.state==="dead")continue;let j=b.pos.x-q.pos.x,ut=b.pos.z-q.pos.z,Tt=Math.hypot(j,ut),yt=b.T.radius+q.T.radius;Tt<yt&&Tt>.001&&(b.pos.x+=j/Tt*(yt-Tt)*.5,b.pos.z+=ut/Tt*(yt-Tt)*.5)}let X=b.model;b.bob+=x,b.spawnT=Math.min(1,b.spawnT+x*2),X.root.position.set(b.pos.x,b.pos.y+V,b.pos.z),X.root.rotation.y=b.facing,X.root.scale.setScalar(b.spawnT);let nt=1;if(b.state==="windup"&&(nt=1-(1-b.timer/D.windup)*.25+Math.sin(b.bob*50)*.03),b.type==="kumodama")X.body.position.y=X.baseY+Math.sin(b.bob*3)*.25,X.body.rotation.z=Math.sin(b.bob*2)*.08;else{let q=b.state==="chase"||b.state==="return"||b.state==="wander"&&b.timer<=0;X.body.position.y=X.baseY+(q?Math.abs(Math.sin(b.bob*8))*.2:0),X.arms[0].position.y=-.2+Math.sin(b.bob*3)*.15,X.arms[1].position.y=-.2+Math.sin(b.bob*3+1)*.15}X.body.scale.set(1/Math.sqrt(nt),nt,1/Math.sqrt(nt)),b.flash=Math.max(0,b.flash-x);for(let q of X.mats)q.emissive.setHex(16777215),q.emissiveIntensity=b.flash>0?.8:0}w(x)}function v(x){for(let A of n){let E=A.label.el;if(!(A.state!=="dead"&&(A.labelTimer>0||A.state==="chase"||A.state==="windup"||A.state==="attack"))){E.style.display="none";continue}if(r.set(A.pos.x,A.pos.y+A.T.height+.9,A.pos.z),r.distanceTo(x.position)>70){E.style.display="none";continue}if(r.project(x),r.z>1){E.style.display="none";continue}E.style.display="";let b=(r.x+1)/2*window.innerWidth,I=(1-r.y)/2*window.innerHeight;E.style.transform=`translate(-50%, -100%) translate(${b}px, ${I}px)`,A.label.fill.style.width=Math.max(0,A.hp)/A.T.hp*100+"%"}}return{list:n,update:R,updateLabels:v,attack(x,A,{range:E,arc:T,damage:b,knockback:I=1,bleed:D=!1}){let S=Math.sin(A),L=Math.cos(A);return this.hitArea(U=>{let N=U.pos.x-x.x,z=U.pos.z-x.z,B=Math.hypot(N,z);if(B-U.T.radius>E||Math.abs(x.y-U.pos.y)>3.5)return!1;let V=(N*S+z*L)/Math.max(B,.001);return B<=U.T.radius+.5||Math.acos(qn.clamp(V,-1,1))<=T/2},{damage:b,knockback:I,from:x,bleed:D})},hitArea(x,{damage:A,knockback:E=1,from:T,bleed:b=!1}){let I=[];for(let D of n){if(D.state==="dead"||D.spawnT<1||!x(D))continue;let S=y(D,A,T,E);b&&!S.killed&&(D.bleed={left:3,tick:1,dmg:Math.max(1,Math.round(A*.2))}),I.push(S)}return I},calmDown(){for(let x of n)x.state!=="dead"&&(x.state="return",l(x,!1))},alive(){return n.filter(x=>x.state!=="dead").map(x=>({x:x.pos.x,z:x.pos.z,big:x.type==="ishimori"}))}}}function Ff(i){let t=[],e=new F,n=1.1;return{add(s,r,o=""){let a=document.createElement("div");a.className="popup-text "+o,a.textContent=r,i.appendChild(a),t.push({el:a,pos:s.clone(),t:0,dx:(Math.random()-.5)*1.2})},update(s,r){for(let o=t.length-1;o>=0;o--){let a=t[o];if(a.t+=s,a.t>n){a.el.remove(),t.splice(o,1);continue}if(e.copy(a.pos),e.y+=a.t*2,e.x+=a.dx*a.t,e.project(r),e.z>1){a.el.style.display="none";continue}a.el.style.display="";let c=(e.x+1)/2*window.innerWidth,l=(1-e.y)/2*window.innerHeight,h=a.t<.12?.6+a.t/.12*.7:1.3-Math.min(a.t,.4)*.75;a.el.style.transform=`translate(-50%, -50%) translate(${c}px, ${l}px) scale(${h})`,a.el.style.opacity=a.t>n*.65?(n-a.t)/(n*.35):1}},clear(){for(let s of t)s.el.remove();t.length=0}}}var HE=(i,t,e,n="")=>`<svg viewBox="0 0 32 32">
  <path d="M25 3l4 0 0 4-13.5 13.5-4-4z" fill="${i}" stroke="${t}" stroke-width="1.2"/>
  ${n}
  <path d="M8.5 16.5l7 7-2 2-7-7z" fill="${e}"/>
  <path d="M8 22l2 2-4 4-2-2z" fill="#2a1418"/>
  <circle cx="4.6" cy="27.4" r="1.6" fill="#ff2a3a"/>
</svg>`,Sh={sangrea:HE("#0e0c12","#ff2030","#241018",'<path d="M13 19l12-12" stroke="#ff2030" stroke-width="1.6"/><circle cx="12" cy="20" r="1.4" fill="#ffd0d0"/>'),sword:'<svg viewBox="0 0 32 32"><path d="M24 4l4 0 0 4-13 13-4-4z" fill="#e6eef5" stroke="#8fa3b5" stroke-width="1.2"/><path d="M9 17l6 6-2 2-6-6z" fill="#f4c25b"/><path d="M8 22l2 2-4 4-2-2z" fill="#8a5a3b"/></svg>',potion:'<svg viewBox="0 0 32 32"><rect x="13" y="4" width="6" height="5" rx="1" fill="#b07a55"/><path d="M12 9h8v4l4 5v7a3 3 0 01-3 3H11a3 3 0 01-3-3v-7l4-5z" fill="#dff4ff" opacity=".8"/><path d="M9 18h14v7a2 2 0 01-2 2H11a2 2 0 01-2-2z" fill="#ff5a6e"/><circle cx="13" cy="21" r="1.4" fill="#fff" opacity=".8"/></svg>'},to={sword:{name:"\u65C5\u4EBA\u306E\u5263",desc:"\u4F7F\u3044\u6163\u308C\u305F\u7247\u624B\u5263\u30023\u6BB5\u30B3\u30F3\u30DC\u304C\u51FA\u305B\u308B",kind:"weapon",moveset:"sword",held:"sword",stance:"sword",power:1,icon:Sh.sword},sangrea:{name:"\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2",desc:"\u8840\u3092\u5438\u3063\u3066\u8108\u6253\u3064\u3001\u9ED2\u3044\u9B54\u5263\u3002\u901F\u304F\u91CD\u3044 4 \u6BB5\u306E\u9023\u6483\u3092\u653E\u3064",kind:"weapon",moveset:"blood",held:"sangrea",rarity:"blood",stance:"blood",power:1.7,speed:1.15,trail:16719920,passive:{id:"lifesteal",name:"\u5438\u8840",desc:"\u4E0E\u3048\u305F\u30C0\u30E1\u30FC\u30B8\u306E 10% \u3060\u3051 HP \u3092\u56DE\u5FA9\u3059\u308B",rate:.1},skills:["bloodGale","crimsonMoon","bloodRelease"],icon:Sh.sangrea},potion:{name:"\u56DE\u5FA9\u85AC",desc:"\u98F2\u3080\u3068 HP \u304C 40 \u56DE\u5FA9\u3059\u308B",kind:"consumable",held:"potion",heal:40,icon:Sh.potion}},vc=8;function Bf(){let i=Array(vc).fill(null);i[0]={id:"sword",count:1},i[1]={id:"potion",count:3},i[2]={id:"sangrea",count:1};let t=0;return{slots:i,get selected(){return t},set selected(e){t=Math.max(0,Math.min(vc-1,e))},get held(){let e=i[t];return e?{...to[e.id],id:e.id,count:e.count}:null},consumeHeld(){let e=i[t];e&&(e.count--,e.count<=0&&(i[t]=null))},add(e,n=1){let s=i.find(o=>o&&o.id===e);if(s&&to[e].kind==="consumable")return s.count+=n,!0;let r=i.indexOf(null);return r<0?!1:(i[r]={id:e,count:n},!0)}}}var kf=i=>new F(Math.sin(i),0,Math.cos(i)),Gf=i=>i.clone().setY(i.y+3),qi={bloodGale:{name:"\u8840\u98A8\u65AC",key:"Q",desc:"\u6B8B\u50CF\u3092\u6B8B\u3057\u3066\u99C6\u3051\u629C\u3051\u3001\u901A\u308A\u9053\u3092\u65AC\u308B\u3002\u5C11\u3057\u9045\u308C\u3066\u3001\u901A\u308A\u9053\u304B\u3089\u8840\u306E\u68D8\u304C\u5674\u304D\u51FA\u3059\uFF08\u99C6\u3051\u629C\u3051\u308B\u9593\u306F\u7121\u6575\uFF09",cooldown:5,duration:.62,anim:6,start(i,t){let e=kf(i.player.facing);t.dir=e,t.from=i.player.position.clone(),t.to=t.from.clone().addScaledVector(e,14),t.ghosts=0,t.cut=!1,t.burst=!1,i.invuln(.55),i.player.knockback(e.x*58,e.z*58),i.fovKick(8)},update(i,t,e){for(;t.ghosts<5&&e>=t.ghosts*.04;)i.fx.afterimage(i.character.object,.35),t.ghosts++;if(!t.cut&&e>=.16){t.cut=!0,i.fx.streak(t.from,i.player.position.clone().addScaledVector(t.dir,2),3,.8);let n=t.from,s=t.to;t.hits=i.enemies.hitArea(r=>ir(r.pos.x,r.pos.z,n.x,n.z,s.x,s.z)<2.8+r.T.radius&&Math.abs(r.pos.y-n.y)<5,{damage:i.power(2.4),knockback:.6,from:n});for(let r of t.hits)i.fx.burst(r.pos,18,9);t.hits.length&&(i.hitStop(.08),i.shake(.5)),i.applyHits(t.hits)}if(!t.burst&&e>=.5){t.burst=!0;let n=t.from,s=t.to;for(let o=0;o<=6;o++){let a=n.clone().lerp(s,o/6);i.fx.spike(a.x,a.z,3.8,1.1)}i.fx.flash(n.clone().lerp(s,.5),90,35,.4);let r=i.enemies.hitArea(o=>ir(o.pos.x,o.pos.z,n.x,n.z,s.x,s.z)<3+o.T.radius&&Math.abs(o.pos.y-n.y)<5,{damage:i.power(1.5),knockback:.8,from:n,bleed:!0});for(let o of r)i.fx.burst(o.pos,12,7);i.shake(.35),i.applyHits(r)}}},crimsonMoon:{name:"\u7D05\u6708\u589C\u3068\u3057",key:"E",desc:"\u9AD8\u304F\u8DF3\u3073\u4E0A\u304C\u3063\u3066\u53E9\u304D\u3064\u3051\u3001\u4E09\u91CD\u306E\u885D\u6483\u6CE2\u30FB\u8840\u306E\u68D8\u306E\u8F2A\u30FB\u8840\u306E\u67F1\u3092\u5674\u304D\u4E0A\u3052\u308B",cooldown:8,duration:.95,anim:7,start(i,t){let e=kf(i.player.facing);i.player.knockback(e.x*8,e.z*8,36),i.invuln(.8),t.done=!1,t.wave=0},update(i,t,e){if(!t.done&&e>=.62){t.done=!0,t.c=i.player.position.clone();let n=t.c;i.fx.nova(n.clone().setY(n.y+.5),6,.35),i.fx.flash(n,160,45,.5),i.fx.burst(n.clone().setY(n.y+.5),40,13);for(let r=0;r<14;r++){let o=r/14*Math.PI*2;i.fx.spike(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,3.4,1.1)}for(let r=0;r<6;r++){let o=r/6*Math.PI*2+.3;i.fx.pillar(n.x+Math.cos(o)*9,n.z+Math.sin(o)*9,16,.9,1.3)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<10+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(3.2),knockback:3,from:n});for(let r of s)i.fx.burst(r.pos,14,8);i.shake(1),i.screenFlash(.6),i.fovKick(-6),s.length&&i.hitStop(.14),i.applyHits(s)}for(;t.done&&t.wave<3&&e>=.62+t.wave*.1;)i.fx.ring(t.c,8+t.wave*4,.5+t.wave*.15,t.wave===1?9046040:16722490),t.wave++}},bloodRelease:{name:"\u9BAE\u8840\u89E3\u653E",key:"R",desc:"HP \u3092 20% \u6367\u3052\u3001\u307E\u308F\u308A\u3092\u5439\u304D\u98DB\u3070\u3059\u8840\u306E\u7206\u767A\u3092\u8D77\u3053\u3059\u300210 \u79D2\u9593\u3001\u653B\u6483\u529B 1.8 \u500D\u30FB\u5438\u8840 25%\u3001\u5263\u3092\u632F\u308B\u305F\u3073\u306B\u8840\u306E\u65AC\u6483\u6CE2\u304C\u98DB\u3076",cooldown:25,duration:1,anim:9,canUse(i){let t=Math.ceil(i.stats.maxHp*.2);return i.stats.hp<=t+1?(i.toast("HP \u304C\u8DB3\u308A\u306A\u3044\u2026"),!1):!0},start(i,t){let e=Math.ceil(i.stats.maxHp*.2);i.stats.hp-=e,i.popup(i.player.position.clone().setY(i.player.position.y+5.5),`-${e}`,"hurt"),i.invuln(1),t.done=!1},update(i,t,e){if(t.done||e<.5)return;t.done=!0;let n=i.player.position.clone();i.fx.nova(Gf(n),14,.7),i.fx.ring(n,16,.8),i.fx.ring(n,10,.6,9046040),i.fx.burst(Gf(n),50,12),i.fx.flash(n,200,50,.7);for(let r=0;r<8;r++){let o=r/8*Math.PI*2;i.fx.pillar(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,20,1.1,1.1)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<12+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(2.6),knockback:3.2,from:n});i.applyHits(s),i.shake(1.1),i.screenFlash(.9),i.fovKick(10),i.startBuff({name:"\u9BAE\u8840\u89E3\u653E",time:10,atk:1.8,lifesteal:.25,waves:!0})}}};function Vf(i,t){let e=[],r=new Sn(.16,0),o=new Rt({color:11538462,emissive:5242888,emissiveIntensity:.6,roughness:.3,transparent:!0}),a=new bi(.85,1,48),c=new Zt(.45,1,5).translate(0,.5,0),l=new Rt({color:13639738,emissive:8390680,emissiveIntensity:.9,flatShading:!0,roughness:.2,metalness:.2,transparent:!0}),h=new Xe(16724032,0,30);i.add(h);let u=0,d=0,p=0,_=(g,m,f)=>{i.add(g),e.push({mesh:g,life:m,t:0,update:f})};return{burst(g,m=14,f=7){for(let w=0;w<m;w++){let y=new k(r,o);y.position.copy(g);let M=Math.random()*Math.PI*2,R=f*(.4+Math.random()*.8),v=new F(Math.cos(M)*R,4+Math.random()*7,Math.sin(M)*R);y.scale.setScalar(.6+Math.random()*.9),_(y,.6+Math.random()*.4,(x,A)=>{v.y-=28*A,y.position.addScaledVector(v,A);let E=t(y.position.x,y.position.z)+.1;y.position.y<E&&(y.position.y=E,v.set(0,0,0),y.scale.y=.25),y.material.opacity=1})}},ring(g,m,f=.5,w=16722490){let y=new k(a,new Me({color:w,transparent:!0,side:ce,depthWrite:!1,blending:Wn}));y.rotation.x=-Math.PI/2,y.position.set(g.x,g.y+.2,g.z),_(y,f,M=>{let R=M.t/M.life;y.scale.setScalar(.5+m*(1-Math.pow(1-R,3))),y.material.opacity=1-R})},streak(g,m,f=2.2,w=.6){let y=g.distanceTo(m),M=new k(new yn(f,y),new Me({color:16722490,transparent:!0,side:ce,depthWrite:!1,blending:Wn}));M.position.copy(g).lerp(m,.5),M.position.y+=1.6,M.lookAt(m.x,M.position.y,m.z),M.rotateX(Math.PI/2),_(M,w,R=>{let v=R.t/R.life;M.material.opacity=.8*(1-v),M.scale.x=1-v*.7})},spike(g,m,f=3.5,w=1.3){let y=t(g,m),M=new xt;M.position.set(g,y-.3,m);let R=3+Math.floor(Math.random()*3);for(let v=0;v<R;v++){let x=new k(c,l.clone()),A=f*(.5+Math.random()*.6);x.scale.set(.6+Math.random()*.5,A,.6+Math.random()*.5),x.position.set((Math.random()-.5)*1.4,0,(Math.random()-.5)*1.4),x.rotation.set((Math.random()-.5)*.7,Math.random()*3,(Math.random()-.5)*.7),x.userData.h=A,M.add(x)}_(M,w,v=>{let x=v.t/v.life,A=x<.12?x/.12:x>.7?1-(x-.7)/.3:1;M.children.forEach(E=>{E.scale.y=E.userData.h*Math.max(A,.001),E.material.opacity=x>.7?1-(x-.7)/.3:1})})},aura(g){let f=new Float32Array(150),w=Array.from({length:50},()=>({a:Math.random()*Math.PI*2,r:.6+Math.random()*1.2,y:Math.random()*5,v:1.5+Math.random()*2})),y=new oe;y.setAttribute("position",new de(f,3));let M=new Ze(y,new We({color:16722490,size:.28,transparent:!0,opacity:.9,depthWrite:!1,blending:Wn}));M.frustumCulled=!1;let R=new k(a,new Me({color:16722490,transparent:!0,opacity:.5,side:ce,depthWrite:!1,blending:Wn}));R.rotation.x=-Math.PI/2;let v=new xt;v.add(M,R);let x=!0;return _(v,1/0,(A,E)=>{v.position.copy(g.position),R.position.y=.15,R.scale.setScalar(1.6+Math.sin(A.t*6)*.15);for(let T=0;T<50;T++){let b=w[T];b.y+=b.v*E,b.y>5.5&&(b.y=0),b.a+=E*1.5,f[T*3]=Math.cos(b.a)*b.r,f[T*3+1]=b.y,f[T*3+2]=Math.sin(b.a)*b.r}y.attributes.position.needsUpdate=!0,x||(A.life=A.t)}),{stop(){x=!1}}},afterimage(g,m=.35){let f=g.clone(!0),w=new Me({color:16722490,transparent:!0,opacity:.55,depthWrite:!1,blending:Wn});f.traverse(y=>{(y.isMesh||y.isPoints)&&(y.material=w,y.castShadow=!1)}),f.position.copy(g.position),f.rotation.copy(g.rotation),_(f,m,y=>{w.opacity=.55*(1-y.t/y.life)})},pillar(g,m,f=14,w=.9,y=1.4){let M=t(g,m),R=new k(new It(y*.6,y,1,12,1,!0).translate(0,.5,0),new Me({color:16722490,transparent:!0,side:ce,depthWrite:!1,blending:Wn}));R.position.set(g,M,m),_(R,w,v=>{let x=v.t/v.life;R.scale.set(1+x*.5,f*Math.min(1,x*6),1+x*.5),R.material.opacity=.85*(1-x),R.rotation.y+=.2}),this.burst(new F(g,M+1,m),8,5)},nova(g,m=12,f=.6){let w=new k(new ie(1,24,16),new Me({color:16722490,transparent:!0,depthWrite:!1,blending:Wn,side:ce}));w.position.copy(g),_(w,f,y=>{let M=y.t/y.life;w.scale.setScalar(.5+m*(1-Math.pow(1-M,3))),w.material.opacity=.6*(1-M)})},flash(g,m=80,f=30,w=.35){h.position.copy(g),h.position.y+=2,h.distance=f,p=m,u=w,d=0},crescent(g,m,{speed:f=42,life:w=.55,size:y=3.2,onMove:M}={}){let R=new xt,v=new k(new Kn(y,y*.14,6,24,Math.PI),new Me({color:16722490,transparent:!0,depthWrite:!1,blending:Wn,side:ce}));v.rotation.set(-Math.PI/2,0,Math.PI),v.scale.z=.4,R.add(v),R.position.copy(g),R.lookAt(g.x+m.x,g.y,g.z+m.z),_(R,w,(x,A)=>{R.position.addScaledVector(m,f*A);let E=x.t/x.life;v.material.opacity=.9*(1-E*E),R.scale.setScalar(1+E*.4),M?.(R.position)})},update(g){d<u?(d+=g,h.intensity=p*Math.max(0,1-d/u)):h.intensity=0;for(let m=e.length-1;m>=0;m--){let f=e[m];f.t+=g,f.update(f,g),f.t>=f.life&&(i.remove(f.mesh),e.splice(m,1))}}}}var zt=i=>document.getElementById(i),Wf=["\u30D2\u30F3\u30C8\uFF1A\u65C5\u306F\u5CF6\u306E\u4E2D\u592E\u306B\u3042\u308B\u661F\u306E\u796D\u58C7\u304B\u3089\u59CB\u307E\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730\u306E\u5854\u306E\u3066\u3063\u307A\u3093\u306B\u3001\u30AF\u30EA\u30B9\u30BF\u30EB\u304C\u7720\u3063\u3066\u3044\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A4\u672C\u306E\u5927\u6A4B\u3092\u6E21\u308B\u3068\u3001\u305D\u308C\u305E\u308C\u5225\u306E\u5CF6\u3078\u884C\u3051\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u5CF6\u306F\u3068\u3066\u3082\u5E83\u3044\u3002M \u30AD\u30FC\u306E\u5730\u56F3\u3067\u540D\u6240\u3092\u63A2\u3057\u3066\u307F\u3088\u3046","\u30D2\u30F3\u30C8\uFF1A\u9060\u304F\u306E\u5730\u65B9\u307B\u3069\u9B54\u7269\u304C\u5F37\u304F\u306A\u308A\u307E\u3059\u3002\u30EC\u30D9\u30EB\u3092\u4E0A\u3052\u3066\u304B\u3089\u884C\u3053\u3046","\u30D2\u30F3\u30C8\uFF1A\u6D77\u3084\u6E56\u3067\u306F\u6CF3\u3052\u307E\u3059\u3002\u6CF3\u3044\u3067\u3044\u308B\u9593\u306F\u9B54\u7269\u306B\u8972\u308F\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30B7\u30AA\u30AB\u30BC\u6751\u306F\u5B89\u5168\u5730\u5E2F\u3067\u3059","\u30D2\u30F3\u30C8\uFF1AM \u30AD\u30FC\u3067\u5CF6\u306E\u5730\u56F3\u3092\u5927\u304D\u304F\u8868\u793A\u3067\u304D\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u796D\u58C7\u306E\u307E\u308F\u308A\u306F\u5B89\u5168\u5730\u5E2F\u3002\u9B54\u7269\u306F\u5165\u3063\u3066\u3053\u3089\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30AF\u30EA\u30C3\u30AF\u304B F \u30AD\u30FC\u3067\u5263\u3092\u632F\u308C\u307E\u3059\u3002\u7D9A\u3051\u3066\u62BC\u3059\u30683\u6BB5\u30B3\u30F3\u30DC","\u30D2\u30F3\u30C8\uFF1A\u6570\u5B57\u30AD\u30FC 1\u301C8 \u3067\u6301\u3061\u7269\u3092\u5207\u308A\u66FF\u3048\u3002\u7A7A\u306E\u30DE\u30B9\u3092\u9078\u3076\u3068\u7D20\u624B\u306B\u306A\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2\u3092\u6301\u3064\u3068\u3001Q\u30FBE\u30FBR \u3067 3 \u3064\u306E\u6280\u304C\u4F7F\u3048\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AB \u30AD\u30FC\u3067\u661F\u306E\u796D\u58C7\u306B\u623B\u308C\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AShift \u3092\u62BC\u3057\u306A\u304C\u3089\u79FB\u52D5\u3059\u308B\u3068\u8D70\u308C\u307E\u3059\uFF08\u30B9\u30DE\u30DB\u306F\u30B9\u30C6\u30A3\u30C3\u30AF\u3092\u7AEF\u307E\u3067\u5012\u3059\uFF09"],ep=zt("scene"),Yi=new wo({canvas:ep,antialias:!0}),Xo=window.matchMedia("(pointer: coarse)").matches;Yi.setPixelRatio(Math.min(window.devicePixelRatio,Xo?1.5:2));Yi.setSize(window.innerWidth,window.innerHeight);Yi.shadowMap.enabled=!0;Yi.shadowMap.type=ih;Yi.outputColorSpace=He;var lr=new qa,wn=new Dn(60,window.innerWidth/window.innerHeight,.1,2600),hi,ze,pe,Li,ps,Os,Zi=Ff(zt("popup-layer")),DE=()=>new Promise(i=>{requestAnimationFrame(()=>i()),setTimeout(i,50)}),Xf=i=>new Promise(t=>setTimeout(t,i));function qf(i,t){zt("progress-fill").style.width=i+"%",t&&(zt("loading-status").textContent=t)}async function UE(){zt("loading-tip").textContent=Wf[Math.floor(Math.random()*Wf.length)];let i=[["\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",async()=>{await document.fonts.ready}],["\u30D9\u30FC\u30B9\u30D7\u30EC\u30FC\u30C8\u3092\u751F\u6210\u4E2D...",async()=>{hi=bf(lr,Yi,{lite:Xo}),Xo&&(wn.far=1300)}],["\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u751F\u6210\u4E2D...",async()=>{ze=If(),lr.add(ze.object),zh(),pe=Hf(ze,hi),pe.respawn(),Li=Uf(zt("minimap"),hi),ps=Of(lr,hi,zt("label-layer")),Os=Vf(lr,hi.groundHeight),FE()}],["\u30B7\u30FC\u30F3\u3092\u6E96\u5099\u4E2D...",async()=>{Yi.compile(lr,wn),Yi.render(lr,wn)}]];for(let t=0;t<i.length;t++){let[e,n]=i[t];qf(t/i.length*100,e),await DE(),await Promise.all([n(),Xf(450)])}qf(100,"\u5B8C\u4E86\uFF01"),await Xf(400),zt("loading-screen").classList.add("fade"),zt("menu").classList.remove("hidden"),setTimeout(()=>zt("loading-screen").remove(),900),setTimeout(()=>ze.wave(),900)}var zs="menu",np=!0,ip=0,Wo=0,Tc=new F,bc=new F,Rh=new F,Ah=new F,je={yaw:0,pitch:.35,dist:18},zE=6,NE=60;function sp(i,t){let e=hi.spawnPoint.clone().add(new F(0,3,0)),n=Math.sin(ip*.15)*.45+.35,s=20;i.set(e.x+Math.sin(n)*s,e.y+3.5,e.z+Math.cos(n)*s);let r=window.innerWidth>700,o=e.clone().sub(i).normalize(),a=new F().crossVectors(o,new F(0,1,0)).normalize();t.copy(e).addScaledVector(a,r?-4.2:0),r||(t.y-=1.5)}function OE(i,t){let e=pe.position;t.set(e.x,e.y+4.5,e.z);let n=Math.cos(je.pitch);i.set(t.x+Math.sin(je.yaw)*n*je.dist,t.y+Math.sin(je.pitch)*je.dist,t.z+Math.cos(je.yaw)*n*je.dist);let s=Math.max(hi.groundHeight(i.x,i.z),hi.waterLevel)+.8;i.y<s&&(i.y=s)}function FE(){sp(Tc,bc),wn.position.copy(Tc),wn.lookAt(bc)}function BE(i){Wo+=i,zs==="menu"?(np&&(ip+=i),sp(Rh,Ah)):OE(Rh,Ah);let t=zs==="menu"?3:4+Wo*Wo*80,e=1-Math.exp(-i*t);Tc.lerp(Rh,e),bc.lerp(Ah,e),wn.position.copy(Tc),wn.lookAt(bc)}var fs=Df(ep,{joystickEl:zt("joystick"),jumpBtnEl:zt("btn-jump"),attackBtnEl:zt("btn-attack"),skillBtnsEl:zt("skill-btns"),onKey(i){i==="Escape"?Li.expanded?Li.expanded=!1:cp():i==="KeyM"?Li.expanded=!Li.expanded:i==="KeyH"?zt("help").classList.toggle("hidden"):/^Digit[1-8]$/.test(i)?op(Number(i.slice(5))-1):i==="KeyB"&&!ms&&(pe.respawn(Math.PI),je.yaw=0,$i("\u661F\u306E\u796D\u58C7\u306B\u623B\u308A\u307E\u3057\u305F"))}});function Yf(){let{dx:i,dy:t,zoom:e}=fs.consumeLook();je.yaw-=i*.006,je.pitch=qn.clamp(je.pitch+t*.005,-.2,1.35),je.dist=qn.clamp(je.dist*(1+e*.001),zE,NE)}function Uh(){let{forward:i,right:t}=fs.move(),e=-Math.sin(je.yaw),n=-Math.cos(je.yaw),s=Math.cos(je.yaw),r=-Math.sin(je.yaw);return{x:e*i+s*t,z:n*i+r*t}}var Wt={level:1,exp:0,hp:100,maxHp:100,atk:10,stamina:100,maxStamina:100},Vo=!1,Ch=0;function kE(i,t,e){let n=t&&e&&!Vo&&!pe.swimming;n?(Wt.stamina=Math.max(0,Wt.stamina-20*i),Ch=0,Wt.stamina<=0&&(Vo=!0,$i("\u606F\u304C\u5207\u308C\u305F\u2026"))):(Ch+=i,Ch>.5&&(Wt.stamina=Math.min(Wt.maxStamina,Wt.stamina+32*i)),Vo&&Wt.stamina>=Wt.maxStamina*.3&&(Vo=!1));let s=zt("stamina-fill");return s.style.width=Wt.stamina/Wt.maxStamina*100+"%",s.classList.toggle("tired",Vo),zt("stamina-bar").classList.toggle("full",Wt.stamina>=Wt.maxStamina),n}var Lh=()=>Wt.level*20,hr=0,ms=!1;function ur(){zt("lv").textContent=Wt.level,zt("hp-now").textContent=Math.max(0,Math.ceil(Wt.hp)),zt("hp-max").textContent=Wt.maxHp;let i=Math.max(0,Wt.hp)/Wt.maxHp;zt("hp-fill").style.width=i*100+"%",zt("hp-fill").classList.toggle("low",i<.3),zt("exp-fill").style.width=Wt.exp/Lh()*100+"%"}var qo=()=>pe.position.clone().setY(pe.position.y+5.5);function rp(i){for(Wt.exp+=i,Zi.add(qo(),`+${i} EXP`,"exp");Wt.exp>=Lh();)Wt.exp-=Lh(),Wt.level++,Wt.maxHp+=15,Wt.hp=Wt.maxHp,Wt.atk+=3,Zi.add(qo().setY(pe.position.y+7),"LEVEL UP!","levelup"),$i(`\u30EC\u30D9\u30EB ${Wt.level} \u306B\u306A\u3063\u305F\uFF01 HP \u3068\u653B\u6483\u529B\u304C\u4E0A\u304C\u3063\u305F`),ze.wave();ur()}var Tn=Bf(),_i=-1;function GE(){let i=Tn.held;return _c[i?.moveset??"fists"]}function zh(){let i=zt("hotbar");if(!i.children.length)for(let e=0;e<vc;e++){let n=document.createElement("button");n.className="slot",n.innerHTML=`<span class="slot-key">${e+1}</span><span class="slot-icon"></span><span class="slot-count"></span>`,n.addEventListener("pointerdown",s=>{s.preventDefault(),op(e)}),i.appendChild(n)}Tn.slots.forEach((e,n)=>{let s=i.children[n];s.classList.toggle("selected",n===Tn.selected),s.classList.toggle("empty",!e),s.classList.toggle("blood",!!e&&to[e.id].rarity==="blood"),s.title=e?VE(to[e.id]):"\u7A7A\u304D\uFF08\u7D20\u624B\uFF09",s.querySelector(".slot-icon").innerHTML=e?to[e.id].icon:"",s.querySelector(".slot-count").textContent=e&&e.count>1?e.count:""}),ze.setHeld(Tn.held?.held??null),ze.setTrailColor(Tn.held?.trail);let t=Tn.held;ze.setStance(t?t.stance??"item":"fists")}function VE(i){let t=`${i.name}\uFF1A${i.desc}`;i.passive&&(t+=`
\u7279\u6027\u3010${i.passive.name}\u3011${i.passive.desc}`);for(let e of i.skills??[])t+=`
\u6280\u3010${qi[e].name}\u3011\uFF08${qi[e].key}\uFF09${qi[e].desc}`;return i.power&&(t+=`
\u653B\u6483\u529B \xD7${i.power}`),t}var Zf;function op(i){if(se.current||_i>=0||Jn||ms)return;Tn.selected=i,se.step=-1,zh();let t=Tn.held,e=zt("held-name");e.textContent=t?t.skills?`${t.name}\u3000${t.skills.map(n=>`${qi[n].key}\u300C${qi[n].name}\u300D`).join(" ")}`:t.name:"\u7D20\u624B",e.classList.remove("hidden"),clearTimeout(Zf),Zf=setTimeout(()=>e.classList.add("hidden"),1500)}function WE(){let i=Tn.held;if(i?.kind==="consumable"){if(se.current||_i>=0)return;if(i.heal&&Wt.hp>=Wt.maxHp){$i("HP \u306F\u6E80\u30BF\u30F3\u3067\u3059");return}ze.drink()&&(_i=0);return}qE()}function XE(i){if(_i<0)return;let t=_i;if(_i+=i,t<.55&&_i>=.55){let e=Tn.held;if(e?.heal){let n=Math.min(e.heal,Wt.maxHp-Wt.hp);Wt.hp+=n,Zi.add(qo(),`+${Math.round(n)}`,"heal"),ur()}Tn.consumeHeld(),zh()}_i>=.9&&(_i=-1)}var se={current:null,moves:_c.sword,step:-1,time:0,hit:!1,queued:0,sinceEnd:99,speed:1},eo=0,Ns=0;function qE(){if(ms||Jn)return;let i=GE();if(se.current){se.queued=Math.min(se.queued+1,se.moves.length-1-se.step);return}let t=se.moves===i&&se.sinceEnd<Rf&&se.step<i.length-1;se.moves=i,ap(t?se.step+1:0)}function ap(i){let t=Uh();Math.hypot(t.x,t.z)>.3&&pe.setFacing(Math.atan2(t.x,t.z));let e=se.moves[i],n=Tn.held?.speed??1;if(!ze.attack(e.anim,n))return;Object.assign(se,{current:e,step:i,time:0,hit:!1,hitIdx:0,speed:n});let s=pe.facing;pe.knockback(Math.sin(s)*e.lunge,Math.cos(s)*e.lunge,e.hop),sM(i)}function YE(i){if(!se.current){se.sinceEnd+=i;return}se.time+=i*se.speed;let t=se.current.hitTimes??[se.current.hitTime];for(;se.hitIdx<t.length&&se.time>=t[se.hitIdx];)se.hitIdx++,ZE(se.current);se.time>=se.current.duration&&(se.current=null,se.sinceEnd=0,se.queued>0&&se.step<se.moves.length-1?(se.queued--,ap(se.step+1)):se.queued=0)}function Nh(){let i=Tn.held,t=i?.kind==="weapon"?i.power??1:1;return Pn&&(t*=Pn.atk),i?.passive?.id==="thirst"&&Wt.hp<Wt.maxHp/2&&(t*=1.3),t}function ZE(i){let t=Tn.held,e=t?.passive?.id==="heavy",n=ps.attack(pe.position,pe.facing,{range:i.range*(e?1.1:1),arc:i.arc,damage:Wt.atk*i.power*Nh(),knockback:i.knockback*(e?1.7:1),bleed:t?.passive?.id==="bleed"});if(n.length&&(eo=i.hitStop*(e?1.5:1),Ns=Math.max(Ns,i.shake*(e?1.5:1)),t?.rarity==="blood"))for(let s of n)Os.burst(s.pos,8,5);Oh(n),Pn?.waves&&t?.rarity==="blood"&&$E()}function $E(){let i=new F(Math.sin(pe.facing),0,Math.cos(pe.facing)),t=pe.position.clone().addScaledVector(i,1.5);t.y+=2.6;let e=new Set;Os.crescent(t,i,{onMove(n){let s=ps.hitArea(r=>!e.has(r)&&Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<3+r.T.radius&&Math.abs(r.pos.y+2-n.y)<4,{damage:Wt.atk*.9*Nh(),knockback:.8,from:n});for(let r of s)e.add(r.enemy),Os.burst(r.pos,10,6);Oh(s)}})}function Oh(i){let t=0;for(let s of i)t+=s.damage,Zi.add(s.pos,String(s.damage),s.damage>Wt.atk*1.6?"crit":""),s.killed&&($i(`${s.name} \u3092\u305F\u304A\u3057\u305F\uFF01`),rp(s.exp));let e=Tn.held,n=(e?.passive?.id==="lifesteal"?e.passive.rate:0)+(Pn?.lifesteal??0);if(n>0&&t>0&&Wt.hp<Wt.maxHp){let s=Math.max(1,Math.round(t*n));Wt.hp=Math.min(Wt.maxHp,Wt.hp+s),Zi.add(qo(),`+${s}`,"heal"),ur()}}function JE(i){Zi.add(i.pos,String(i.damage),"bleed"),i.killed&&($i(`${i.name} \u306F\u8840\u3092\u6D41\u3057\u3066\u5012\u308C\u305F\u2026`),rp(i.exp))}var Jn=null,no={},Yo=0,Pn=null,Hh=0,Dh={get player(){return pe},get character(){return ze},get enemies(){return ps},get fx(){return Os},stats:Wt,power:i=>Wt.atk*i*Nh(),applyHits:i=>Oh(i),invuln:i=>{Yo=Math.max(Yo,i)},shake:i=>{Ns=Math.max(Ns,i)},hitStop:i=>{eo=Math.max(eo,i)},screenFlash:i=>KE(i),fovKick:i=>{Hh=i},toast:i=>$i(i),popup:(i,t,e)=>Zi.add(i,t,e),startBuff:i=>tM(i)};function KE(i){let t=zt("blood-flash");t.style.transition="none",t.style.opacity=i,requestAnimationFrame(()=>{t.style.transition="opacity .5s ease",t.style.opacity=0})}function jE(i){let e=Tn.held?.skills?.[i];if(!e||ms||Jn||se.current||_i>=0)return;let n=qi[e],s=zt("skills").children[i];if((no[e]??0)>0){s?.classList.remove("denied"),s?.offsetWidth,s?.classList.add("denied");return}if(n.canUse&&!n.canUse(Dh))return;let r=Uh();Math.hypot(r.x,r.z)>.3&&pe.setFacing(Math.atan2(r.x,r.z)),ze.attack(n.anim),Jn={def:n,t:0,s:{}},n.start(Dh,Jn.s),no[e]=n.cooldown,se.step=-1,ur(),eM(n.name)}function QE(i,t){for(let n of Object.keys(no))no[n]=Math.max(0,no[n]-i);Yo=Math.max(0,Yo-i),Jn&&(Jn.t+=i,Jn.def.update(Dh,Jn.s,Jn.t,i),Jn.t>=Jn.def.duration&&(Jn=null)),Pn&&(Pn.time-=i,Pn.time<=0&&Fh()),Hh*=Math.exp(-t*5);let e=60+Hh;Math.abs(wn.fov-e)>.01&&(wn.fov=e,wn.updateProjectionMatrix())}function tM(i){Fh(),Pn={...i,aura:Os.aura(ze.object)},ze.setGlow(2.4),zt("blood-vignette").classList.add("on"),$i(`${i.name}\uFF1A\u529B\u304C\u6EA2\u308C\u51FA\u3059\u2026\uFF01\u3000\u5263\u3092\u632F\u308B\u3068\u8840\u306E\u65AC\u6483\u304C\u98DB\u3076`)}function Fh(){Pn&&(Pn.aura.stop(),Pn=null,ze.setGlow(1),zt("blood-vignette").classList.remove("on"))}var $f;function eM(i){let t=zt("skill-name");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout($f),$f=setTimeout(()=>t.classList.add("hidden"),1200)}function nM(){let t=Tn.held?.skills??[],e=zt("skills");e.classList.toggle("hidden",!t.length),zt("skill-btns").classList.toggle("hidden",!t.length),e.dataset.set!==t.join()&&(e.innerHTML=t.map(s=>`<div class="skill"><span class="skill-key">${qi[s].key}</span><span class="skill-cd"></span><span class="skill-label">${qi[s].name}</span></div>`).join(""),e.dataset.set=t.join()),t.forEach((s,r)=>{let o=qi[s],a=no[s]??0,c=e.children[r];c.querySelector(".skill-cd").textContent=a>0?Math.ceil(a):"",c.style.setProperty("--cd",a/o.cooldown),c.classList.toggle("ready",a<=0);let l=zt("skill-btns").children[r];l&&l.style.setProperty("--cd",a/o.cooldown)});let n=zt("buff");n.classList.toggle("hidden",!Pn),Pn&&(n.textContent=`${Pn.name}\u3000${Pn.time.toFixed(1)}\u79D2`)}var Ph=0,Jf=new F;function iM(i){Tn.held?.rarity==="blood"&&(Ph-=i,!(Ph>0)&&(Ph=Pn?.08:.4,ze.bladeTip(Jf)&&Os.burst(Jf,1,Pn?2:.4)))}var Kf;function sM(i){let t=zt("combo"),e=se.moves.map((n,s)=>`${"\u2460\u2461\u2462\u2463"[s]} ${n.name}`);t.dataset.set!==e.join()&&(t.innerHTML=e.map(n=>`<span>${n}</span>`).join(""),t.dataset.set=e.join()),t.classList.remove("hidden"),t.querySelectorAll("span").forEach((n,s)=>{n.classList.toggle("done",s<i),n.classList.toggle("now",s===i)}),clearTimeout(Kf),Kf=setTimeout(()=>t.classList.add("hidden"),1400)}function rM(i,t,e){if(hr>0||Yo>0||ms)return;Wt.hp-=i,hr=1,ze.hurt(),Zi.add(qo(),`-${i}`,"hurt");let n=zt("hurt-vignette");n.classList.add("on"),requestAnimationFrame(()=>n.classList.remove("on"));let s=pe.position.x-t,r=pe.position.z-e,o=Math.hypot(s,r)||1;pe.knockback(s/o*14,r/o*14,14),ur(),Wt.hp<=0&&oM()}function oM(){ms=!0,se.current=null,se.queued=0,_i=-1,Jn=null,Fh(),ze.setFainted(!0),ps.calmDown(),zt("faint").classList.remove("hidden"),setTimeout(()=>{zt("faint").classList.add("hidden"),Wt.hp=Wt.maxHp,ms=!1,ze.setFainted(!1),pe.respawn(Math.PI),je.yaw=0,hr=2,ur()},2800)}var Ih=!1;function aM(){pe.grounded&&pe.groundKind==="goal"&&!Ih&&(Ih=!0,ze.wave(),$i("\u5854\u306E\u3066\u3063\u307A\u3093\u306E\u30AF\u30EA\u30B9\u30BF\u30EB\u306B\u305F\u3069\u308A\u7740\u3044\u305F\uFF01",3500)),pe.groundKind==="spawn"&&(Ih=!1)}var wc=null;function cM(){let i=pe.position,t=null;for(let e of ko)Math.hypot(i.x-e.x,i.z-e.z)<e.r+4&&(t=e.name);if(!t&&pe.groundKind==="bridge"){let e=1/0;for(let n of hi.bridges){let s=(n.from[0]+n.to[0])/2,r=(n.from[1]+n.to[1])/2,o=Math.hypot(i.x-s,i.z-r);o<e&&(e=o,t=n.name)}}t||(t=hi.islandAt(i.x,i.z)?.name??wc),t&&t!==wc&&lM(t),wc=t}var jf;function lM(i){let t=zt("area-banner");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(jf),jf=setTimeout(()=>t.classList.add("hidden"),3200)}function hM(){zs="ingame",Wo=0,pe.respawn(Math.PI),je.yaw=0,je.pitch=.35,je.dist=18,fs.enabled=!0,Wt.hp=Wt.maxHp,ur(),zt("menu").classList.add("hidden"),zt("ingame").classList.remove("hidden"),Li.resize(),wc=null}function cp(){zs="menu",Wo=0,fs.enabled=!1,Li.expanded=!1,ps.calmDown(),Zi.clear(),pe.respawn(),zt("ingame").classList.add("hidden"),zt("menu").classList.remove("hidden")}var Qf;function $i(i,t=2200){let e=zt("toast-msg");e.textContent=i,e.classList.remove("hidden"),clearTimeout(Qf),Qf=setTimeout(()=>e.classList.add("hidden"),t)}zt("btn-play").addEventListener("click",hM);zt("btn-back").addEventListener("click",cp);zt("minimap").addEventListener("click",()=>{Li.expanded=!Li.expanded});zt("btn-avatar").addEventListener("click",()=>{ze.wave(),$i("\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u7DE8\u96C6\u306F\u6E96\u5099\u4E2D\u3067\u3059")});var tp=document.documentElement;tp.requestFullscreen&&Xo&&(zt("btn-fullscreen").classList.remove("hidden"),zt("btn-fullscreen").addEventListener("click",async()=>{try{await tp.requestFullscreen({navigationUI:"hide"}),await screen.orientation?.lock?.("landscape").catch(()=>{})}catch{}}));var lp=window.matchMedia("(orientation: portrait)"),hp=()=>zt("rotate-tip").classList.toggle("hidden",!(Xo&&lp.matches));lp.addEventListener?.("change",hp);hp();document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault());zt("btn-settings").addEventListener("click",()=>zt("settings-panel").classList.remove("hidden"));document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",()=>i.closest(".popup").classList.add("hidden")));zt("opt-shadows").addEventListener("change",i=>{hi.sun.castShadow=i.target.checked});zt("opt-orbit").addEventListener("change",i=>{np=i.target.checked});zt("opt-stepped").addEventListener("change",i=>{ze.stepped=i.target.checked});window.addEventListener("resize",()=>{wn.aspect=window.innerWidth/window.innerHeight,wn.updateProjectionMatrix(),Yi.setSize(window.innerWidth,window.innerHeight),Li?.resize()});var uM=new rc,dM=zt("coords");function up(){requestAnimationFrame(up);let i=Math.min(uM.getDelta(),.05);if(!hi||!pe)return;let t=eo>0?i*.05:i;eo=Math.max(0,eo-i);let e=zs==="ingame"&&!ms;if(e){Yf(),fs.consumeAttack()&&WE();let n=fs.consumeSkill();n>=0&&jE(n);let s=ze.attacking||_i>=0||Jn?{x:0,z:0}:Uh(),r=Math.hypot(s.x,s.z)>.1,o=kE(t,fs.run(),r);pe.update(t,{...s,jump:fs.jump()&&!ze.attacking,run:o}),aM(),cM()}else zs==="ingame"&&Yf(),fs.consumeAttack(),pe.update(t,{x:0,z:0,jump:!1});if(YE(t),XE(t),QE(t,i),iM(t),Os.update(t),hr=Math.max(0,hr-t),ze.object.visible=!(hr>0&&!ms&&Math.floor(hr*12)%2===0),ps.update(t,{playerPos:pe.position,playerActive:e,playerSwimming:pe.swimming,onHitPlayer:rM,onBleed:JE}),hi.update(t,pe.position,wn.position),BE(i),Ns>.001&&(wn.position.x+=(Math.random()-.5)*Ns,wn.position.y+=(Math.random()-.5)*Ns,Ns*=Math.exp(-i*14)),Yi.render(lr,wn),ps.updateLabels(wn),Zi.update(t,wn),zs==="ingame"&&nM(),zs==="ingame"){Li.draw(pe.position,pe.facing,je.yaw,ps.alive());let n=pe.position;dM.textContent=`X ${n.x.toFixed(0)}  Y ${n.y.toFixed(0)}  Z ${n.z.toFixed(0)}`}}window.addEventListener("error",i=>{let t=zt("loading-status");t&&(t.textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message)});UE().catch(i=>{zt("loading-status").textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message,console.error(i)});up();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
