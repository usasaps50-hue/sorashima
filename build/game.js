(()=>{var Th="160";var sm=0,mu=1,rm=2;var $d=1,Sh=2,ms=3,Bs=0,Xn=1,he=2;var Os=0,io=1,Qn=2,gu=3,xu=4,om=5,ur=100,am=101,cm=102,yu=103,_u=104,lm=200,hm=201,um=202,dm=203,Hl=204,Dl=205,fm=206,pm=207,mm=208,gm=209,xm=210,ym=211,_m=212,Em=213,Mm=214,vm=0,wm=1,bm=2,Ga=3,Tm=4,Sm=5,Rm=6,Am=7,Rh=0,Cm=1,Pm=2,ks=0,Im=1,Lm=2,Hm=3,Dm=4,zm=5,Um=6;var Zd=300,oo=301,ao=302,zl=303,Ul=304,Sc=306,Nl=1e3,Ui=1001,Ol=1002,Ln=1003,Eu=1004;var Qc=1005;var jn=1006,Nm=1007;var Oo=1008;var Zi=1009,Om=1010,km=1011,Ah=1012,Kd=1013,Us=1014,Ns=1015,ko=1016,Jd=1017,jd=1018,fr=1020,Fm=1021,Ni=1023,Bm=1024,Gm=1025,pr=1026,co=1027,Ch=1028,Qd=1029,Vm=1030,tf=1031,ef=1033,tl=33776,el=33777,nl=33778,il=33779,Mu=35840,vu=35841,wu=35842,bu=35843,nf=36196,Tu=37492,Su=37496,Ru=37808,Au=37809,Cu=37810,Pu=37811,Iu=37812,Lu=37813,Hu=37814,Du=37815,zu=37816,Uu=37817,Nu=37818,Ou=37819,ku=37820,Fu=37821,sl=36492,Bu=36494,Gu=36495,Wm=36283,Vu=36284,Wu=36285,Xu=36286;var Va=2300,Wa=2301,rl=2302,qu=2400,Yu=2401,$u=2402;var sf=3e3,mr=3001,Xm=3200,qm=3201,Ph=0,Ym=1,bi="",Oe="srgb",ys="srgb-linear",Ih="display-p3",Rc="display-p3-linear",Xa="linear",Ne="srgb",qa="rec709",Ya="p3";var zr=7680;var Zu=519,$m=512,Zm=513,Km=514,rf=515,Jm=516,jm=517,Qm=518,t0=519,Ku=35044;var Ju="300 es",kl=1035,xs=2e3,$a=2001,Gs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=1234567,Lo=Math.PI/180,Fo=180/Math.PI;function Er(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[e&63|128]+Gn[e>>8&255]+"-"+Gn[e>>16&255]+Gn[e>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function bn(i,t,e){return Math.max(t,Math.min(e,i))}function Lh(i,t){return(i%t+t)%t}function e0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function n0(i,t,e){return i!==t?(e-i)/(t-i):0}function Ho(i,t,e){return(1-e)*i+e*t}function i0(i,t,e,n){return Ho(i,t,1-Math.exp(-e*n))}function s0(i,t=1){return t-Math.abs(Lh(i,t*2)-t)}function r0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function o0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function a0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function c0(i,t){return i+Math.random()*(t-i)}function l0(i){return i*(.5-Math.random())}function h0(i){i!==void 0&&(ju=i);let t=ju+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function u0(i){return i*Lo}function d0(i){return i*Fo}function Fl(i){return(i&i-1)===0&&i!==0}function f0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Za(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function p0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Je={DEG2RAD:Lo,RAD2DEG:Fo,generateUUID:Er,clamp:bn,euclideanModulo:Lh,mapLinear:e0,inverseLerp:n0,lerp:Ho,damp:i0,pingpong:s0,smoothstep:r0,smootherstep:o0,randInt:a0,randFloat:c0,randFloatSpread:l0,seededRandom:h0,degToRad:u0,radToDeg:d0,isPowerOfTwo:Fl,ceilPowerOfTwo:f0,floorPowerOfTwo:Za,setQuaternionFromProperEuler:p0,normalize:Kn,denormalize:jr},yt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pe=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],w=s[1],x=s[4],E=s[7],R=s[2],M=s[5],T=s[8];return r[0]=o*y+a*w+c*R,r[3]=o*m+a*x+c*M,r[6]=o*p+a*E+c*T,r[1]=l*y+h*w+u*R,r[4]=l*m+h*x+u*M,r[7]=l*p+h*E+u*T,r[2]=f*y+d*w+g*R,r[5]=f*m+d*x+g*M,r[8]=f*p+d*E+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ol=new pe;function of(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function m0(){let i=Ka("canvas");return i.style.display="block",i}var Qu={};function Do(i){i in Qu||(Qu[i]=!0,console.warn(i))}var td=new pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ed=new pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fa={[ys]:{transfer:Xa,primaries:qa,toReference:i=>i,fromReference:i=>i},[Oe]:{transfer:Ne,primaries:qa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rc]:{transfer:Xa,primaries:Ya,toReference:i=>i.applyMatrix3(ed),fromReference:i=>i.applyMatrix3(td)},[Ih]:{transfer:Ne,primaries:Ya,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ed),fromReference:i=>i.applyMatrix3(td).convertLinearToSRGB()}},g0=new Set([ys,Rc]),Ce={enabled:!0,_workingColorSpace:ys,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!g0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=fa[t].toReference,s=fa[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return fa[i].primaries},getTransfer:function(i){return i===bi?Xa:fa[i].transfer}};function so(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function al(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ur,Ja=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ur===void 0&&(Ur=Ka("canvas")),Ur.width=t.width,Ur.height=t.height;let n=Ur.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ur}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ka("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=so(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(so(e[n]/255)*255):e[n]=so(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},x0=0,ja=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Er(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var y0=0,gi=class i extends Gs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ui,s=Ui,r=jn,o=Oo,a=Ni,c=Zi,l=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Er(),this.name="",this.source=new ja(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===mr?Oe:bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nl:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nl:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?mr:sf}set encoding(t){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===mr?Oe:bi}};gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=Zd;gi.DEFAULT_ANISOTROPY=1;var Ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,E=(d+1)/2,R=(p+1)/2,M=(h+f)/4,T=(u+y)/4,v=(g+m)/4;return x>E&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=M/n,r=T/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=M/s,r=v/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=v/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-y)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bl=class extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mr?Oe:bi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new gi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ja(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_s=class extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qa=class extends gi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gl=class extends gi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*y,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),M=Math.atan2(R,p*w);m=Math.sin(m*M)/R,a=Math.sin(a*M)/R}let E=a*w;if(c=c*m+f*E,l=l*m+d*E,h=h*m+g*E,u=u*m+y*E,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(bn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new F,nd=new Vs,ae=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),ma.subVectors(this.max,To),Nr.subVectors(t.a,To),Or.subVectors(t.b,To),kr.subVectors(t.c,To),Is.subVectors(Or,Nr),Ls.subVectors(kr,Or),or.subVectors(Nr,kr);let e=[0,-Is.z,Is.y,0,-Ls.z,Ls.y,0,-or.z,or.y,Is.z,0,-Is.x,Ls.z,0,-Ls.x,or.z,0,-or.x,-Is.y,Is.x,0,-Ls.y,Ls.x,0,-or.y,or.x,0];return!hl(e,Nr,Or,kr,ma)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,Nr,Or,kr,ma))?!1:(ga.crossVectors(Is,Ls),e=[ga.x,ga.y,ga.z],hl(e,Nr,Or,kr,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},hs=[new F,new F,new F,new F,new F,new F,new F,new F],Hi=new F,pa=new ae,Nr=new F,Or=new F,kr=new F,Is=new F,Ls=new F,or=new F,To=new F,ma=new F,ga=new F,ar=new F;function hl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ar.fromArray(i,r);let a=s.x*Math.abs(ar.x)+s.y*Math.abs(ar.y)+s.z*Math.abs(ar.z),c=t.dot(ar),l=e.dot(ar),h=n.dot(ar);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var _0=new ae,So=new F,ul=new F,Ws=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;So.subVectors(t,this.center);let e=So.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(So,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(So.copy(t.center).add(ul)),this.expandByPoint(So.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},us=new F,dl=new F,xa=new F,Hs=new F,fl=new F,ya=new F,pl=new F,tc=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,us)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=us.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(us.copy(this.origin).addScaledVector(this.direction,e),us.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dl.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),Hs.copy(this.origin).sub(dl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xa),a=Hs.dot(this.direction),c=-Hs.dot(xa),l=Hs.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(dl).addScaledVector(xa,f),d}intersectSphere(t,e){us.subVectors(t.center,this.origin);let n=us.dot(this.direction),s=us.dot(us)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,us)!==null}intersectTriangle(t,e,n,s,r){fl.subVectors(e,t),ya.subVectors(n,t),pl.crossVectors(fl,ya);let o=this.direction.dot(pl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hs.subVectors(this.origin,t);let c=a*this.direction.dot(ya.crossVectors(Hs,ya));if(c<0)return null;let l=a*this.direction.dot(fl.cross(Hs));if(l<0||c+l>o)return null;let h=-a*Hs.dot(pl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Fr.setFromMatrixColumn(t,0).length(),r=1/Fr.setFromMatrixColumn(t,1).length(),o=1/Fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(E0,t,M0)}lookAt(t,e,n){let s=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Ds.crossVectors(n,pi),Ds.lengthSq()===0&&(Math.abs(n.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Ds.crossVectors(n,pi)),Ds.normalize(),_a.crossVectors(pi,Ds),s[0]=Ds.x,s[4]=_a.x,s[8]=pi.x,s[1]=Ds.y,s[5]=_a.y,s[9]=pi.y,s[2]=Ds.z,s[6]=_a.z,s[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],w=n[3],x=n[7],E=n[11],R=n[15],M=s[0],T=s[4],v=s[8],_=s[12],b=s[1],H=s[5],I=s[9],S=s[13],A=s[2],P=s[6],N=s[10],k=s[14],O=s[3],G=s[7],L=s[11],z=s[15];return r[0]=o*M+a*b+c*A+l*O,r[4]=o*T+a*H+c*P+l*G,r[8]=o*v+a*I+c*N+l*L,r[12]=o*_+a*S+c*k+l*z,r[1]=h*M+u*b+f*A+d*O,r[5]=h*T+u*H+f*P+d*G,r[9]=h*v+u*I+f*N+d*L,r[13]=h*_+u*S+f*k+d*z,r[2]=g*M+y*b+m*A+p*O,r[6]=g*T+y*H+m*P+p*G,r[10]=g*v+y*I+m*N+p*L,r[14]=g*_+y*S+m*k+p*z,r[3]=w*M+x*b+E*A+R*O,r[7]=w*T+x*H+E*P+R*G,r[11]=w*v+x*I+E*N+R*L,r[15]=w*_+x*S+E*k+R*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+y*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],w=u*m*l-y*f*l+y*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,E=h*y*l-g*u*l+g*a*d-o*y*d-h*a*p+o*u*p,R=g*u*c-h*y*c-g*a*f+o*y*f+h*a*m-o*u*m,M=e*w+n*x+s*E+r*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return t[0]=w*T,t[1]=(y*f*r-u*m*r-y*s*d+n*m*d+u*s*p-n*f*p)*T,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*T,t[4]=x*T,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*T,t[8]=E*T,t[9]=(g*u*r-h*y*r-g*n*d+e*y*d+h*n*p-e*u*p)*T,t[10]=(o*y*r-g*a*r+g*n*l-e*y*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*T,t[12]=R*T,t[13]=(h*y*s-g*u*s+g*n*f-e*y*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*y*s-g*n*c+e*y*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,y=o*h,m=o*u,p=a*u,w=c*l,x=c*h,E=c*u,R=n.x,M=n.y,T=n.z;return s[0]=(1-(y+p))*R,s[1]=(d+E)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(d-E)*M,s[5]=(1-(f+p))*M,s[6]=(m+w)*M,s[7]=0,s[8]=(g+x)*T,s[9]=(m-w)*T,s[10]=(1-(f+y))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Fr.set(s[0],s[1],s[2]).length(),o=Fr.set(s[4],s[5],s[6]).length(),a=Fr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Di.copy(this);let l=1/r,h=1/o,u=1/a;return Di.elements[0]*=l,Di.elements[1]*=l,Di.elements[2]*=l,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=u,Di.elements[9]*=u,Di.elements[10]*=u,e.setFromRotationMatrix(Di),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=xs){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===xs)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$a)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xs){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h,g,y;if(a===xs)g=(o+r)*u,y=-2*u;else if(a===$a)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Fr=new F,Di=new be,E0=new F(0,0,0),M0=new F(1,1,1),Ds=new F,_a=new F,pi=new F,id=new be,sd=new Vs,ec=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-bn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(id,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sd.setFromEuler(this),this.setFromQuaternion(sd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ec.DEFAULT_ORDER="XYZ";var nc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},v0=0,rd=new F,Br=new Vs,ds=new be,Ea=new F,Ro=new F,w0=new F,b0=new Vs,od=new F(1,0,0),ad=new F(0,1,0),cd=new F(0,0,1),T0={type:"added"},S0={type:"removed"},Tn=class i extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new ec,n=new Vs,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new pe}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(od,t)}rotateY(t){return this.rotateOnAxis(ad,t)}rotateZ(t){return this.rotateOnAxis(cd,t)}translateOnAxis(t,e){return rd.copy(t).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(od,t)}translateY(t){return this.translateOnAxis(ad,t)}translateZ(t){return this.translateOnAxis(cd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ea.copy(t):Ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Ro,Ea,this.up):ds.lookAt(Ea,Ro,this.up),this.quaternion.setFromRotationMatrix(ds),s&&(ds.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(ds),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(T0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(S0)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,w0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,b0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Tn.DEFAULT_UP=new F(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=new F,fs=new F,ml=new F,ps=new F,Gr=new F,Vr=new F,ld=new F,gl=new F,xl=new F,yl=new F,Ma=!1,Qr=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zi.subVectors(t,e),s.cross(zi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zi.subVectors(s,e),fs.subVectors(n,e),ml.subVectors(t,e);let o=zi.dot(zi),a=zi.dot(fs),c=zi.dot(ml),l=fs.dot(fs),h=fs.dot(ml),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getUV(t,e,n,s,r,o,a,c){return Ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ma=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ps)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ps.x),c.addScaledVector(o,ps.y),c.addScaledVector(a,ps.z),c)}static isFrontFacing(t,e,n,s){return zi.subVectors(n,e),fs.subVectors(t,e),zi.cross(fs).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),zi.cross(fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ma===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ma=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Gr.subVectors(s,n),Vr.subVectors(r,n),gl.subVectors(t,n);let c=Gr.dot(gl),l=Vr.dot(gl);if(c<=0&&l<=0)return e.copy(n);xl.subVectors(t,s);let h=Gr.dot(xl),u=Vr.dot(xl);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gr,o);yl.subVectors(t,r);let d=Gr.dot(yl),g=Vr.dot(yl);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Vr,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ld.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(ld,a);let p=1/(m+y+f);return o=y*p,a=f*p,e.copy(n).addScaledVector(Gr,o).addScaledVector(Vr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},va={h:0,s:0,l:0};function _l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var st=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=Lh(t,1),e=bn(e,0,1),n=bn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_l(o,r,t+1/3),this.g=_l(o,r,t),this.b=_l(o,r,t-1/3)}return Ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}copyLinearToSRGB(t){return this.r=al(t.r),this.g=al(t.g),this.b=al(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Ce.fromWorkingColorSpace(Vn.copy(this),t),Math.round(bn(Vn.r*255,0,255))*65536+Math.round(bn(Vn.g*255,0,255))*256+Math.round(bn(Vn.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Vn.copy(this),e);let n=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Oe){Ce.fromWorkingColorSpace(Vn.copy(this),t);let e=Vn.r,n=Vn.g,s=Vn.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zs),this.setHSL(zs.h+t,zs.s+e,zs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zs),t.getHSL(va);let n=Ho(zs.h,va.h,e),s=Ho(zs.s,va.s,e),r=Ho(zs.l,va.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new st;st.NAMES=af;var R0=0,Es=class extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=io,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Dl,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(n.blending=this.blending),this.side!==Bs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hl&&(n.blendSrc=this.blendSrc),this.blendDst!==Dl&&(n.blendDst=this.blendDst),this.blendEquation!==ur&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ee=class extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var dn=new F,wa=new yt,me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ku,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ns,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wa.fromBufferAttribute(this,e),wa.applyMatrix3(t),this.setXY(e,wa.x,wa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array),s=Kn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array),s=Kn(s,this.array),r=Kn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ku&&(t.usage=this.usage),t}};var ic=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sc=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}};var A0=0,wi=new be,El=new Tn,Wr=new F,mi=new ae,Ao=new ae,wn=new F,ce=class i extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(of(t)?sc:ic)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,e,n){return wi.makeTranslation(t,e,n),this.applyMatrix4(wi),this}scale(t,e,n){return wi.makeScale(t,e,n),this.applyMatrix4(wi),this}lookAt(t){return El.lookAt(t),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ae);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(wn.addVectors(mi.min,Ao.min),mi.expandByPoint(wn),wn.addVectors(mi.max,Ao.max),mi.expandByPoint(wn)):(mi.expandByPoint(Ao.min),mi.expandByPoint(Ao.max))}mi.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)wn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(wn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)wn.fromBufferAttribute(a,l),c&&(Wr.fromBufferAttribute(t,l),wn.add(Wr)),s=Math.max(s,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new F,h[b]=new F;let u=new F,f=new F,d=new F,g=new yt,y=new yt,m=new yt,p=new F,w=new F;function x(b,H,I){u.fromArray(s,b*3),f.fromArray(s,H*3),d.fromArray(s,I*3),g.fromArray(o,b*2),y.fromArray(o,H*2),m.fromArray(o,I*2),f.sub(u),d.sub(u),y.sub(g),m.sub(g);let S=1/(y.x*m.y-m.x*y.y);isFinite(S)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-y.y).multiplyScalar(S),w.copy(d).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(S),l[b].add(p),l[H].add(p),l[I].add(p),h[b].add(w),h[H].add(w),h[I].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,H=E.length;b<H;++b){let I=E[b],S=I.start,A=I.count;for(let P=S,N=S+A;P<N;P+=3)x(n[P+0],n[P+1],n[P+2])}let R=new F,M=new F,T=new F,v=new F;function _(b){T.fromArray(r,b*3),v.copy(T);let H=l[b];R.copy(H),R.sub(T.multiplyScalar(T.dot(H))).normalize(),M.crossVectors(v,H);let S=M.dot(h[b])<0?-1:1;c[b*4]=R.x,c[b*4+1]=R.y,c[b*4+2]=R.z,c[b*4+3]=S}for(let b=0,H=E.length;b<H;++b){let I=E[b],S=I.start,A=I.count;for(let P=S,N=S+A;P<N;P+=3)_(n[P+0]),_(n[P+1]),_(n[P+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)wn.fromBufferAttribute(t,e),wn.normalize(),t.setXYZ(e,wn.x,wn.y,wn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hd=new be,cr=new tc,ba=new Ws,ud=new F,Xr=new F,qr=new F,Yr=new F,Ml=new F,Ta=new F,Sa=new yt,Ra=new yt,Aa=new yt,dd=new F,fd=new F,pd=new F,Ca=new F,Pa=new F,B=class extends Tn{constructor(t=new ce,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ml.fromBufferAttribute(u,t),o?Ta.addScaledVector(Ml,h):Ta.addScaledVector(Ml.sub(e),h))}e.add(Ta)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),cr.copy(t.ray).recast(t.near),!(ba.containsPoint(cr.origin)===!1&&(cr.intersectSphere(ba,ud)===null||cr.origin.distanceToSquared(ud)>(t.far-t.near)**2))&&(hd.copy(r).invert(),cr.copy(t.ray).applyMatrix4(hd),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cr)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=w,R=x;E<R;E+=3){let M=a.getX(E),T=a.getX(E+1),v=a.getX(E+2);s=Ia(this,p,t,n,l,h,u,M,T,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let w=a.getX(m),x=a.getX(m+1),E=a.getX(m+2);s=Ia(this,o,t,n,l,h,u,w,x,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let E=w,R=x;E<R;E+=3){let M=E,T=E+1,v=E+2;s=Ia(this,p,t,n,l,h,u,M,T,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let w=m,x=m+1,E=m+2;s=Ia(this,o,t,n,l,h,u,w,x,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function C0(i,t,e,n,s,r,o,a){let c;if(t.side===Xn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Bs,a),c===null)return null;Pa.copy(a),Pa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Pa);return l<e.near||l>e.far?null:{distance:l,point:Pa.clone(),object:i}}function Ia(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Xr),i.getVertexPosition(c,qr),i.getVertexPosition(l,Yr);let h=C0(i,t,e,n,Xr,qr,Yr,Ca);if(h){s&&(Sa.fromBufferAttribute(s,a),Ra.fromBufferAttribute(s,c),Aa.fromBufferAttribute(s,l),h.uv=Qr.getInterpolation(Ca,Xr,qr,Yr,Sa,Ra,Aa,new yt)),r&&(Sa.fromBufferAttribute(r,a),Ra.fromBufferAttribute(r,c),Aa.fromBufferAttribute(r,l),h.uv1=Qr.getInterpolation(Ca,Xr,qr,Yr,Sa,Ra,Aa,new yt),h.uv2=h.uv1),o&&(dd.fromBufferAttribute(o,a),fd.fromBufferAttribute(o,c),pd.fromBufferAttribute(o,l),h.normal=Qr.getInterpolation(Ca,Xr,qr,Yr,dd,fd,pd,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new F,materialIndex:0};Qr.getNormal(Xr,qr,Yr,u.normal),h.face=u}return h}var Et=class i extends ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(y,m,p,w,x,E,R,M,T,v,_){let b=E/T,H=R/v,I=E/2,S=R/2,A=M/2,P=T+1,N=v+1,k=0,O=0,G=new F;for(let L=0;L<N;L++){let z=L*H-S;for(let Y=0;Y<P;Y++){let X=Y*b-I;G[y]=X*w,G[m]=z*x,G[p]=A,l.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[p]=M>0?1:-1,h.push(G.x,G.y,G.z),u.push(Y/T),u.push(1-L/v),k+=1}}for(let L=0;L<v;L++)for(let z=0;z<T;z++){let Y=f+z+P*L,X=f+z+P*(L+1),$=f+(z+1)+P*(L+1),Z=f+(z+1)+P*L;c.push(Y,X,Z),c.push(X,$,Z),O+=6}a.addGroup(d,O,_),d+=O,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function lo(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Jn(i){let t={};for(let e=0;e<i.length;e++){let n=lo(i[e]);for(let s in n)t[s]=n[s]}return t}function P0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cf(i){return i.getRenderTarget()===null?i.outputColorSpace:Ce.workingColorSpace}var Hh={clone:lo,merge:Jn},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lo(t.uniforms),this.uniformsGroups=P0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},rc=class extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=xs}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wn=class extends rc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$r=-90,Zr=1,Vl=class extends Tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wn($r,Zr,t,e);s.layers=this.layers,this.add(s);let r=new Wn($r,Zr,t,e);r.layers=this.layers,this.add(r);let o=new Wn($r,Zr,t,e);o.layers=this.layers,this.add(o);let a=new Wn($r,Zr,t,e);a.layers=this.layers,this.add(a);let c=new Wn($r,Zr,t,e);c.layers=this.layers,this.add(c);let l=new Wn($r,Zr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===xs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},oc=class extends gi{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:oo,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wl=class extends _s{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===mr?Oe:bi),this.texture=new oc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Et(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:lo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:Os});r.uniforms.tEquirect.value=e;let o=new B(s,r),a=e.minFilter;return e.minFilter===Oo&&(e.minFilter=jn),new Vl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},vl=new F,H0=new F,D0=new pe,gs=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vl.subVectors(n,e).cross(H0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||D0.getNormalMatrix(t),s=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},lr=new Ws,La=new F,Bo=class{constructor(t=new gs,e=new gs,n=new gs,s=new gs,r=new gs,o=new gs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xs){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],y=s[10],m=s[11],p=s[12],w=s[13],x=s[14],E=s[15];if(n[0].setComponents(c-r,f-l,m-d,E-p).normalize(),n[1].setComponents(c+r,f+l,m+d,E+p).normalize(),n[2].setComponents(c+o,f+h,m+g,E+w).normalize(),n[3].setComponents(c-o,f-h,m-g,E-w).normalize(),n[4].setComponents(c-a,f-u,m-y,E-x).normalize(),e===xs)n[5].setComponents(c+a,f+u,m+y,E+x).normalize();else if(e===$a)n[5].setComponents(a,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(La.x=s.normal.x>0?t.max.x:t.min.x,La.y=s.normal.y>0?t.max.y:t.min.y,La.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function z0(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let y;if(u instanceof Float32Array)y=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=i.SHORT;else if(u instanceof Uint32Array)y=i.UNSIGNED_INT;else if(u instanceof Int32Array)y=i.INT;else if(u instanceof Int8Array)y=i.BYTE;else if(u instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let y=0,m=g.length;y<m;y++){let p=g[y];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Sn=class i extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let w=p*f-o;for(let x=0;x<l;x++){let E=x*u-r;g.push(E,-w,0),y.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let x=w+l*p,E=w+l*(p+1),R=w+1+l*(p+1),M=w+1+l*p;d.push(x,E,M),d.push(E,R,M)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,O0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G0=`#ifdef USE_AOMAP
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
#endif`,V0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
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
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z0=`#ifdef USE_IRIDESCENCE
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
#endif`,K0=`#ifdef USE_BUMPMAP
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rg=`#define PI 3.141592653589793
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
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ag=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`
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
}`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wg=`#ifdef USE_GRADIENTMAP
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
}`,bg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ag=`uniform bool receiveShadow;
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
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
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
#endif`,zg=`struct PhysicalMaterial {
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
}`,Ug=`
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qg=`#if defined( USE_POINTS_UV )
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
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
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
#endif`,Jg=`#ifdef USE_MORPHTARGETS
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
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sx=`#ifdef USE_NORMALMAP
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
#endif`,rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ex=`float getShadowMask() {
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
}`,Mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
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
}`,Gx=`#if DEPTH_PACKING == 3200
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
}`,Vx=`#define DISTANCE
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
}`,Wx=`#define DISTANCE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`uniform float scale;
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
}`,$x=`uniform vec3 diffuse;
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
}`,Zx=`#include <common>
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Jx=`#define LAMBERT
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
}`,jx=`#define LAMBERT
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
}`,Qx=`#define MATCAP
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
}`,ty=`#define MATCAP
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
}`,ey=`#define NORMAL
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
}`,ny=`#define NORMAL
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
}`,iy=`#define PHONG
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
}`,sy=`#define PHONG
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
}`,ry=`#define STANDARD
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
}`,oy=`#define STANDARD
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
}`,ay=`#define TOON
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
}`,cy=`#define TOON
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
}`,ly=`uniform float size;
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
}`,hy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,dy=`uniform vec3 color;
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
}`,fy=`uniform float rotation;
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
}`,py=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:U0,alphahash_pars_fragment:N0,alphamap_fragment:O0,alphamap_pars_fragment:k0,alphatest_fragment:F0,alphatest_pars_fragment:B0,aomap_fragment:G0,aomap_pars_fragment:V0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:q0,beginnormal_vertex:Y0,bsdfs:$0,iridescence_fragment:Z0,bumpmap_pars_fragment:K0,clipping_planes_fragment:J0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:tg,color_fragment:eg,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:sg,common:rg,cube_uv_reflection_fragment:og,defaultnormal_vertex:ag,displacementmap_pars_vertex:cg,displacementmap_vertex:lg,emissivemap_fragment:hg,emissivemap_pars_fragment:ug,colorspace_fragment:dg,colorspace_pars_fragment:fg,envmap_fragment:pg,envmap_common_pars_fragment:mg,envmap_pars_fragment:gg,envmap_pars_vertex:xg,envmap_physical_pars_fragment:Cg,envmap_vertex:yg,fog_vertex:_g,fog_pars_vertex:Eg,fog_fragment:Mg,fog_pars_fragment:vg,gradientmap_pars_fragment:wg,lightmap_fragment:bg,lightmap_pars_fragment:Tg,lights_lambert_fragment:Sg,lights_lambert_pars_fragment:Rg,lights_pars_begin:Ag,lights_toon_fragment:Pg,lights_toon_pars_fragment:Ig,lights_phong_fragment:Lg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Dg,lights_physical_pars_fragment:zg,lights_fragment_begin:Ug,lights_fragment_maps:Ng,lights_fragment_end:Og,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Bg,logdepthbuf_vertex:Gg,map_fragment:Vg,map_pars_fragment:Wg,map_particle_fragment:Xg,map_particle_pars_fragment:qg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:$g,morphcolor_vertex:Zg,morphnormal_vertex:Kg,morphtarget_pars_vertex:Jg,morphtarget_vertex:jg,normal_fragment_begin:Qg,normal_fragment_maps:tx,normal_pars_fragment:ex,normal_pars_vertex:nx,normal_vertex:ix,normalmap_pars_fragment:sx,clearcoat_normal_fragment_begin:rx,clearcoat_normal_fragment_maps:ox,clearcoat_pars_fragment:ax,iridescence_pars_fragment:cx,opaque_fragment:lx,packing:hx,premultiplied_alpha_fragment:ux,project_vertex:dx,dithering_fragment:fx,dithering_pars_fragment:px,roughnessmap_fragment:mx,roughnessmap_pars_fragment:gx,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:yx,shadowmap_vertex:_x,shadowmask_pars_fragment:Ex,skinbase_vertex:Mx,skinning_pars_vertex:vx,skinning_vertex:wx,skinnormal_vertex:bx,specularmap_fragment:Tx,specularmap_pars_fragment:Sx,tonemapping_fragment:Rx,tonemapping_pars_fragment:Ax,transmission_fragment:Cx,transmission_pars_fragment:Px,uv_pars_fragment:Ix,uv_pars_vertex:Lx,uv_vertex:Hx,worldpos_vertex:Dx,background_vert:zx,background_frag:Ux,backgroundCube_vert:Nx,backgroundCube_frag:Ox,cube_vert:kx,cube_frag:Fx,depth_vert:Bx,depth_frag:Gx,distanceRGBA_vert:Vx,distanceRGBA_frag:Wx,equirect_vert:Xx,equirect_frag:qx,linedashed_vert:Yx,linedashed_frag:$x,meshbasic_vert:Zx,meshbasic_frag:Kx,meshlambert_vert:Jx,meshlambert_frag:jx,meshmatcap_vert:Qx,meshmatcap_frag:ty,meshnormal_vert:ey,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:sy,meshphysical_vert:ry,meshphysical_frag:oy,meshtoon_vert:ay,meshtoon_frag:cy,points_vert:ly,points_frag:hy,shadow_vert:uy,shadow_frag:dy,sprite_vert:fy,sprite_frag:py},St={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},$i={basic:{uniforms:Jn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Jn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new st(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Jn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Jn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Jn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new st(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Jn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Jn([St.points,St.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Jn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Jn([St.common,St.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Jn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Jn([St.sprite,St.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Jn([St.common,St.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Jn([St.lights,St.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};$i.physical={uniforms:Jn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var Ha={r:0,b:0,g:0};function my(i,t,e,n,s,r,o){let a=new st(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let w=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?y(a,c):x&&x.isColor&&(y(x,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Sc)?(h===void 0&&(h=new B(new Et(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:lo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Ce.getTransfer(x.colorSpace)!==Ne,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new B(new Sn(2,2),new qn({name:"BackgroundMaterial",uniforms:lo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Ce.getTransfer(x.colorSpace)!==Ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function y(m,p){m.getRGB(Ha,cf(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,y(a,c)},render:g}}function gy(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(A,P,N,k,O){let G=!1;if(o){let L=y(k,N,P);l!==L&&(l=L,d(l.object)),G=p(A,k,N,O),G&&w(A,k,N,O)}else{let L=P.wireframe===!0;(l.geometry!==k.id||l.program!==N.id||l.wireframe!==L)&&(l.geometry=k.id,l.program=N.id,l.wireframe=L,G=!0)}O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,v(A,P,N,k),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(A){return n.isWebGL2?i.bindVertexArray(A):r.bindVertexArrayOES(A)}function g(A){return n.isWebGL2?i.deleteVertexArray(A):r.deleteVertexArrayOES(A)}function y(A,P,N){let k=N.wireframe===!0,O=a[A.id];O===void 0&&(O={},a[A.id]=O);let G=O[P.id];G===void 0&&(G={},O[P.id]=G);let L=G[k];return L===void 0&&(L=m(f()),G[k]=L),L}function m(A){let P=[],N=[],k=[];for(let O=0;O<s;O++)P[O]=0,N[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:k,object:A,attributes:{},index:null}}function p(A,P,N,k){let O=l.attributes,G=P.attributes,L=0,z=N.getAttributes();for(let Y in z)if(z[Y].location>=0){let $=O[Y],Z=G[Y];if(Z===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Z=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Z=A.instanceColor)),$===void 0||$.attribute!==Z||Z&&$.data!==Z.data)return!0;L++}return l.attributesNum!==L||l.index!==k}function w(A,P,N,k){let O={},G=P.attributes,L=0,z=N.getAttributes();for(let Y in z)if(z[Y].location>=0){let $=G[Y];$===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&($=A.instanceColor));let Z={};Z.attribute=$,$&&$.data&&(Z.data=$.data),O[Y]=Z,L++}l.attributes=O,l.attributesNum=L,l.index=k}function x(){let A=l.newAttributes;for(let P=0,N=A.length;P<N;P++)A[P]=0}function E(A){R(A,0)}function R(A,P){let N=l.newAttributes,k=l.enabledAttributes,O=l.attributeDivisors;N[A]=1,k[A]===0&&(i.enableVertexAttribArray(A),k[A]=1),O[A]!==P&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,P),O[A]=P)}function M(){let A=l.newAttributes,P=l.enabledAttributes;for(let N=0,k=P.length;N<k;N++)P[N]!==A[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function T(A,P,N,k,O,G,L){L===!0?i.vertexAttribIPointer(A,P,N,O,G):i.vertexAttribPointer(A,P,N,k,O,G)}function v(A,P,N,k){if(n.isWebGL2===!1&&(A.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let O=k.attributes,G=N.getAttributes(),L=P.defaultAttributeValues;for(let z in G){let Y=G[z];if(Y.location>=0){let X=O[z];if(X===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(X=A.instanceColor)),X!==void 0){let $=X.normalized,Z=X.itemSize,ct=e.get(X);if(ct===void 0)continue;let it=ct.buffer,ot=ct.type,ut=ct.bytesPerElement,rt=n.isWebGL2===!0&&(ot===i.INT||ot===i.UNSIGNED_INT||X.gpuType===Kd);if(X.isInterleavedBufferAttribute){let lt=X.data,W=lt.stride,Q=X.offset;if(lt.isInstancedInterleavedBuffer){for(let J=0;J<Y.locationSize;J++)R(Y.location+J,lt.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let J=0;J<Y.locationSize;J++)E(Y.location+J);i.bindBuffer(i.ARRAY_BUFFER,it);for(let J=0;J<Y.locationSize;J++)T(Y.location+J,Z/Y.locationSize,ot,$,W*ut,(Q+Z/Y.locationSize*J)*ut,rt)}else{if(X.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)R(Y.location+lt,X.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let lt=0;lt<Y.locationSize;lt++)E(Y.location+lt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let lt=0;lt<Y.locationSize;lt++)T(Y.location+lt,Z/Y.locationSize,ot,$,Z*ut,Z/Y.locationSize*lt*ut,rt)}}else if(L!==void 0){let $=L[z];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(Y.location,$);break;case 3:i.vertexAttrib3fv(Y.location,$);break;case 4:i.vertexAttrib4fv(Y.location,$);break;default:i.vertexAttrib1fv(Y.location,$)}}}}M()}function _(){I();for(let A in a){let P=a[A];for(let N in P){let k=P[N];for(let O in k)g(k[O].object),delete k[O];delete P[N]}delete a[A]}}function b(A){if(a[A.id]===void 0)return;let P=a[A.id];for(let N in P){let k=P[N];for(let O in k)g(k[O].object),delete k[O];delete P[N]}delete a[A.id]}function H(A){for(let P in a){let N=a[P];if(N[A.id]===void 0)continue;let k=N[A.id];for(let O in k)g(k[O].object),delete k[O];delete N[A.id]}}function I(){S(),h=!0,l!==c&&(l=c,d(l.object))}function S(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:I,resetDefaultState:S,dispose:_,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:E,disableUnusedAttributes:M}}function xy(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let y=0;y<f;y++)g+=u[y];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function yy(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=o||t.has("OES_texture_float"),R=x&&E,M=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:M}}function _y(i){let t=this,e=null,n=0,s=!1,r=!1,o=new gs,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let w=r?0:n,x=w*4,E=p.clippingState||null;c.value=E,E=h(g,f,x,d);for(let R=0;R!==x;++R)E[R]=e[R];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=d+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=d;x!==y;++x,E+=4)o.copy(u[x]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Ey(i){let t=new WeakMap;function e(o,a){return a===zl?o.mapping=oo:a===Ul&&(o.mapping=ao),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===zl||a===Ul)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Wl(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ac=class extends rc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},to=4,md=[.125,.215,.35,.446,.526,.582],dr=20,wl=new ac,gd=new st,bl=null,Tl=0,Sl=0,hr=(1+Math.sqrt(5))/2,Kr=1/hr,xd=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,hr,Kr),new F(0,hr,-Kr),new F(Kr,0,hr),new F(-Kr,0,hr),new F(hr,Kr,0),new F(-hr,Kr,0)],cc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bl,Tl,Sl),t.scissorTest=!1,Da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oo||t.mapping===ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:ko,format:Ni,colorSpace:ys,depthBuffer:!1},s=yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=My(r)),this._blurMaterial=vy(r,t,e)}return s}_compileMaterial(t){let e=new B(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,n,s){let a=new Wn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(gd),h.toneMapping=ks,h.autoClear=!1;let d=new Ee({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),g=new B(new Et,d),y=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,y=!0):(d.color.copy(gd),y=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Da(s,w*x,p>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===oo||t.mapping===ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Da(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xd[(s-1)%xd.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new B(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*dr-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):dr;m>dr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);let p=[],w=0;for(let T=0;T<dr;++T){let v=T/y,_=Math.exp(-v*v/2);p.push(_),T===0?w+=_:T<m&&(w+=2*_)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let E=this._sizeLods[s],R=3*E*(s>x-to?s-x+to:0),M=4*(this._cubeSize-E);Da(e,R,M,3*E,2*E),c.setRenderTarget(e),c.render(u,wl)}};function My(i){let t=[],e=[],n=[],s=i,r=i-to+1+md.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-to?c=md[o-i+to-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,m=2,p=1,w=new Float32Array(y*g*d),x=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let M=0;M<d;M++){let T=M%3*2/3-1,v=M>2?0:-1,_=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];w.set(_,y*g*M),x.set(f,m*g*M);let b=[M,M,M,M,M,M];E.set(b,p*g*M)}let R=new ce;R.setAttribute("position",new me(w,y)),R.setAttribute("uv",new me(x,m)),R.setAttribute("faceIndex",new me(E,p)),t.push(R),s>to&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yd(i,t,e){let n=new _s(i,t,e);return n.texture.mapping=Sc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Da(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vy(i,t,e){let n=new Float32Array(dr),s=new F(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:Os,depthTest:!1,depthWrite:!1})}function _d(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:Os,depthTest:!1,depthWrite:!1})}function Ed(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Os,depthTest:!1,depthWrite:!1})}function Dh(){return`

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
	`}function wy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===zl||c===Ul,h=c===oo||c===ao;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new cc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new cc(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function by(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ty(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let y=d[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let w=d.array;y=d.version;for(let x=0,E=w.length;x<E;x+=3){let R=w[x+0],M=w[x+1],T=w[x+2];f.push(R,M,M,T,T,R)}}else if(g!==void 0){let w=g.array;y=g.version;for(let x=0,E=w.length/3-1;x<E;x+=3){let R=x+0,M=x+1,T=x+2;f.push(R,M,M,T,T,R)}}else return;let m=new(of(f)?sc:ic)(f,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Sy(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*c),e.update(g,r,1)}function u(d,g,y){if(y===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,y),e.update(g,r,y)}function f(d,g,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,y);let p=0;for(let w=0;w<y;w++)p+=g[w];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Ry(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ay(i,t){return i[0]-t[0]}function Cy(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Py(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Ge,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,y=r.get(h);if(y===void 0||y.count!==g){let A=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",A)};y!==void 0&&y.texture.dispose();let w=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],v=0;w===!0&&(v=1),x===!0&&(v=2),E===!0&&(v=3);let _=h.attributes.position.count*v,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let H=new Float32Array(_*b*4*g),I=new Qa(H,_,b,g);I.type=Ns,I.needsUpdate=!0;let S=v*4;for(let P=0;P<g;P++){let N=R[P],k=M[P],O=T[P],G=_*b*4*P;for(let L=0;L<N.count;L++){let z=L*S;w===!0&&(o.fromBufferAttribute(N,L),H[G+z+0]=o.x,H[G+z+1]=o.y,H[G+z+2]=o.z,H[G+z+3]=0),x===!0&&(o.fromBufferAttribute(k,L),H[G+z+4]=o.x,H[G+z+5]=o.y,H[G+z+6]=o.z,H[G+z+7]=0),E===!0&&(o.fromBufferAttribute(O,L),H[G+z+8]=o.x,H[G+z+9]=o.y,H[G+z+10]=o.z,H[G+z+11]=O.itemSize===4?o.w:1)}}y={count:g,texture:I,size:new yt(_,b)},r.set(h,y),h.addEventListener("dispose",A)}let m=0;for(let w=0;w<f.length;w++)m+=f[w];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let E=g[x];E[0]=x,E[1]=f[x]}g.sort(Cy);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Ay);let y=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let E=a[x],R=E[0],M=E[1];R!==Number.MAX_SAFE_INTEGER&&M?(y&&h.getAttribute("morphTarget"+x)!==y[R]&&h.setAttribute("morphTarget"+x,y[R]),m&&h.getAttribute("morphNormal"+x)!==m[R]&&h.setAttribute("morphNormal"+x,m[R]),s[x]=M,p+=M):(y&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let w=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Iy(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var lc=class extends gi{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:pr,h!==pr&&h!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pr&&(n=Us),n===void 0&&h===co&&(n=fr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=c!==void 0?c:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},hf=new gi,uf=new lc(1,1);uf.compareFunction=rf;var df=new Qa,ff=new Gl,pf=new oc,Md=[],vd=[],wd=new Float32Array(16),bd=new Float32Array(9),Td=new Float32Array(4);function uo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Md[s];if(r===void 0&&(r=new Float32Array(s),Md[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function gn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ac(i,t){let e=vd[t];e===void 0&&(e=new Int32Array(t),vd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2fv(this.addr,t),gn(e,t)}}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;i.uniform3fv(this.addr,t),gn(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4fv(this.addr,t),gn(e,t)}}function Uy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;Td.set(n),i.uniformMatrix2fv(this.addr,!1,Td),gn(e,n)}}function Ny(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),gn(e,n)}}function Oy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;wd.set(n),i.uniformMatrix4fv(this.addr,!1,wd),gn(e,n)}}function ky(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2iv(this.addr,t),gn(e,t)}}function By(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3iv(this.addr,t),gn(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4iv(this.addr,t),gn(e,t)}}function Vy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2uiv(this.addr,t),gn(e,t)}}function Xy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3uiv(this.addr,t),gn(e,t)}}function qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4uiv(this.addr,t),gn(e,t)}}function Yy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?uf:hf;e.setTexture2D(t||r,s)}function $y(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ff,s)}function Zy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pf,s)}function Ky(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||df,s)}function Jy(i){switch(i){case 5126:return Ly;case 35664:return Hy;case 35665:return Dy;case 35666:return zy;case 35674:return Uy;case 35675:return Ny;case 35676:return Oy;case 5124:case 35670:return ky;case 35667:case 35671:return Fy;case 35668:case 35672:return By;case 35669:case 35673:return Gy;case 5125:return Vy;case 36294:return Wy;case 36295:return Xy;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Ky}}function jy(i,t){i.uniform1fv(this.addr,t)}function Qy(i,t){let e=uo(t,this.size,2);i.uniform2fv(this.addr,e)}function t_(i,t){let e=uo(t,this.size,3);i.uniform3fv(this.addr,e)}function e_(i,t){let e=uo(t,this.size,4);i.uniform4fv(this.addr,e)}function n_(i,t){let e=uo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function i_(i,t){let e=uo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function s_(i,t){let e=uo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r_(i,t){i.uniform1iv(this.addr,t)}function o_(i,t){i.uniform2iv(this.addr,t)}function a_(i,t){i.uniform3iv(this.addr,t)}function c_(i,t){i.uniform4iv(this.addr,t)}function l_(i,t){i.uniform1uiv(this.addr,t)}function h_(i,t){i.uniform2uiv(this.addr,t)}function u_(i,t){i.uniform3uiv(this.addr,t)}function d_(i,t){i.uniform4uiv(this.addr,t)}function f_(i,t,e){let n=this.cache,s=t.length,r=Ac(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||hf,r[o])}function p_(i,t,e){let n=this.cache,s=t.length,r=Ac(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ff,r[o])}function m_(i,t,e){let n=this.cache,s=t.length,r=Ac(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pf,r[o])}function g_(i,t,e){let n=this.cache,s=t.length,r=Ac(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||df,r[o])}function x_(i){switch(i){case 5126:return jy;case 35664:return Qy;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return c_;case 5125:return l_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}var Xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jy(e.type)}},ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x_(e.type)}},Yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function Sd(i,t){i.seq.push(t),i.map[t.id]=t}function y_(i,t,e){let n=i.name,s=n.length;for(Rl.lastIndex=0;;){let r=Rl.exec(n),o=Rl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Sd(e,l===void 0?new Xl(a,i,t):new ql(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Yl(a),Sd(e,u)),e=u}}}var ro=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);y_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Rd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var __=37297,E_=0;function M_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function v_(i){let t=Ce.getPrimaries(Ce.workingColorSpace),e=Ce.getPrimaries(i),n;switch(t===e?n="":t===Ya&&e===qa?n="LinearDisplayP3ToLinearSRGB":t===qa&&e===Ya&&(n="LinearSRGBToLinearDisplayP3"),i){case ys:case Rc:return[n,"LinearTransferOETF"];case Oe:case Ih:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ad(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+M_(i.getShaderSource(t),o)}else return s}function w_(i,t){let e=v_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function b_(i,t){let e;switch(t){case Im:e="Linear";break;case Lm:e="Reinhard";break;case Hm:e="OptimizedCineon";break;case Dm:e="ACESFilmic";break;case Um:e="AgX";break;case zm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function T_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(eo).join(`
`)}function S_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(eo).join(`
`)}function R_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function eo(i){return i!==""}function Cd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(C_,I_)}var P_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function I_(i,t){let e=le[t];if(e===void 0){let n=P_.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $l(e)}var L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(i){return i.replace(L_,H_)}function H_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ld(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$d?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ms&&(t="SHADOWMAP_TYPE_VSM"),t}function z_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oo:case ao:t="ENVMAP_TYPE_CUBE";break;case Sc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ao:t="ENVMAP_MODE_REFRACTION";break}return t}function N_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case Cm:t="ENVMAP_BLENDING_MIX";break;case Pm:t="ENVMAP_BLENDING_ADD";break}return t}function O_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function k_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=D_(e),l=z_(e),h=U_(e),u=N_(e),f=O_(e),d=e.isWebGL2?"":T_(e),g=S_(e),y=R_(r),m=s.createProgram(),p,w,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(eo).join(`
`),p.length>0&&(p+=`
`),w=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(eo).join(`
`),w.length>0&&(w+=`
`)):(p=[Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),w=[d,Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ks?"#define TONE_MAPPING":"",e.toneMapping!==ks?le.tonemapping_pars_fragment:"",e.toneMapping!==ks?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,w_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(eo).join(`
`)),o=$l(o),o=Cd(o,e),o=Pd(o,e),a=$l(a),a=Cd(a,e),a=Pd(a,e),o=Id(o),a=Id(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let E=x+p+o,R=x+w+a,M=Rd(s,s.VERTEX_SHADER,E),T=Rd(s,s.FRAGMENT_SHADER,R);s.attachShader(m,M),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function v(I){if(i.debug.checkShaderErrors){let S=s.getProgramInfoLog(m).trim(),A=s.getShaderInfoLog(M).trim(),P=s.getShaderInfoLog(T).trim(),N=!0,k=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,T);else{let O=Ad(s,M,"vertex"),G=Ad(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+O+`
`+G)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||P==="")&&(k=!1);k&&(I.diagnostics={runnable:N,programLog:S,vertexShader:{log:A,prefix:p},fragmentShader:{log:P,prefix:w}})}s.deleteShader(M),s.deleteShader(T),_=new ro(s,m),b=A_(s,m)}let _;this.getUniforms=function(){return _===void 0&&v(this),_};let b;this.getAttributes=function(){return b===void 0&&v(this),b};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(m,__)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}var F_=0,Zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kl(t),e.set(t,n)),n}},Kl=class{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}};function B_(i,t,e,n,s,r,o){let a=new nc,c=new Zl,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){return _===0?"uv":`uv${_}`}function m(_,b,H,I,S){let A=I.fog,P=S.geometry,N=_.isMeshStandardMaterial?I.environment:null,k=(_.isMeshStandardMaterial?e:t).get(_.envMap||N),O=k&&k.mapping===Sc?k.image.height:null,G=g[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let L=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,z=L!==void 0?L.length:0,Y=0;P.morphAttributes.position!==void 0&&(Y=1),P.morphAttributes.normal!==void 0&&(Y=2),P.morphAttributes.color!==void 0&&(Y=3);let X,$,Z,ct;if(G){let Le=$i[G];X=Le.vertexShader,$=Le.fragmentShader}else X=_.vertexShader,$=_.fragmentShader,c.update(_),Z=c.getVertexShaderID(_),ct=c.getFragmentShaderID(_);let it=i.getRenderTarget(),ot=S.isInstancedMesh===!0,ut=S.isBatchedMesh===!0,rt=!!_.map,lt=!!_.matcap,W=!!k,Q=!!_.aoMap,J=!!_.lightMap,ht=!!_.bumpMap,at=!!_.normalMap,Lt=!!_.displacementMap,_t=!!_.emissiveMap,U=!!_.metalnessMap,D=!!_.roughnessMap,j=_.anisotropy>0,pt=_.clearcoat>0,mt=_.iridescence>0,dt=_.sheen>0,kt=_.transmission>0,Rt=j&&!!_.anisotropyMap,Ht=pt&&!!_.clearcoatMap,Wt=pt&&!!_.clearcoatNormalMap,Kt=pt&&!!_.clearcoatRoughnessMap,gt=mt&&!!_.iridescenceMap,ie=mt&&!!_.iridescenceThicknessMap,Bt=dt&&!!_.sheenColorMap,Jt=dt&&!!_.sheenRoughnessMap,Gt=!!_.specularMap,Nt=!!_.specularColorMap,jt=!!_.specularIntensityMap,we=kt&&!!_.transmissionMap,tt=kt&&!!_.thicknessMap,Zt=!!_.gradientMap,Tt=!!_.alphaMap,V=_.alphaTest>0,ft=!!_.alphaHash,wt=!!_.extensions,Ot=!!P.attributes.uv1,bt=!!P.attributes.uv2,_e=!!P.attributes.uv3,ve=ks;return _.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ve=i.toneMapping),{isWebGL2:h,shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:$,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ut,instancing:ot,instancingColor:ot&&S.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ys,map:rt,matcap:lt,envMap:W,envMapMode:W&&k.mapping,envMapCubeUVHeight:O,aoMap:Q,lightMap:J,bumpMap:ht,normalMap:at,displacementMap:f&&Lt,emissiveMap:_t,normalMapObjectSpace:at&&_.normalMapType===Ym,normalMapTangentSpace:at&&_.normalMapType===Ph,metalnessMap:U,roughnessMap:D,anisotropy:j,anisotropyMap:Rt,clearcoat:pt,clearcoatMap:Ht,clearcoatNormalMap:Wt,clearcoatRoughnessMap:Kt,iridescence:mt,iridescenceMap:gt,iridescenceThicknessMap:ie,sheen:dt,sheenColorMap:Bt,sheenRoughnessMap:Jt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:jt,transmission:kt,transmissionMap:we,thicknessMap:tt,gradientMap:Zt,opaque:_.transparent===!1&&_.blending===io,alphaMap:Tt,alphaTest:V,alphaHash:ft,combine:_.combine,mapUv:rt&&y(_.map.channel),aoMapUv:Q&&y(_.aoMap.channel),lightMapUv:J&&y(_.lightMap.channel),bumpMapUv:ht&&y(_.bumpMap.channel),normalMapUv:at&&y(_.normalMap.channel),displacementMapUv:Lt&&y(_.displacementMap.channel),emissiveMapUv:_t&&y(_.emissiveMap.channel),metalnessMapUv:U&&y(_.metalnessMap.channel),roughnessMapUv:D&&y(_.roughnessMap.channel),anisotropyMapUv:Rt&&y(_.anisotropyMap.channel),clearcoatMapUv:Ht&&y(_.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&y(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&y(_.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&y(_.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&y(_.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&y(_.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&y(_.sheenRoughnessMap.channel),specularMapUv:Gt&&y(_.specularMap.channel),specularColorMapUv:Nt&&y(_.specularColorMap.channel),specularIntensityMapUv:jt&&y(_.specularIntensityMap.channel),transmissionMapUv:we&&y(_.transmissionMap.channel),thicknessMapUv:tt&&y(_.thicknessMap.channel),alphaMapUv:Tt&&y(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(at||j),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:bt,vertexUv3s:_e,pointsUvs:S.isPoints===!0&&!!P.attributes.uv&&(rt||Tt),fog:!!A,useFog:_.fog===!0,fogExp2:A&&A.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:S.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Y,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,useLegacyLights:i._useLegacyLights,decodeVideoTexture:rt&&_.map.isVideoTexture===!0&&Ce.getTransfer(_.map.colorSpace)===Ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===he,flipSided:_.side===Xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:wt&&_.extensions.derivatives===!0,extensionFragDepth:wt&&_.extensions.fragDepth===!0,extensionDrawBuffers:wt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:wt&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let H in _.defines)b.push(H),b.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(w(b,_),x(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function w(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function x(_,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function E(_){let b=g[_.type],H;if(b){let I=$i[b];H=Hh.clone(I.uniforms)}else H=_.uniforms;return H}function R(_,b){let H;for(let I=0,S=l.length;I<S;I++){let A=l[I];if(A.cacheKey===b){H=A,++H.usedTimes;break}}return H===void 0&&(H=new k_(i,b,_,r),l.push(H)),H}function M(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),_.destroy()}}function T(_){c.remove(_)}function v(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:R,releaseProgram:M,releaseShaderCache:T,programs:l,dispose:v}}function G_(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function V_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,y,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function a(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||V_),n.length>1&&n.sort(f||Hd),s.length>1&&s.sort(f||Hd)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function W_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Dd,i.set(n,[o])):s>=r.length?(o=new Dd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function X_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new st};break;case"SpotLight":e={position:new F,direction:new F,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Y_=0;function $_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Z_(i,t){let e=new X_,n=q_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new be,a=new be;function c(h,u){let f=0,d=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let y=0,m=0,p=0,w=0,x=0,E=0,R=0,M=0,T=0,v=0,_=0;h.sort($_);let b=u===!0?Math.PI:1;for(let I=0,S=h.length;I<S;I++){let A=h[I],P=A.color,N=A.intensity,k=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)f+=P.r*N*b,d+=P.g*N*b,g+=P.b*N*b;else if(A.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(A.sh.coefficients[G],N);_++}else if(A.isDirectionalLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity*b),A.castShadow){let L=A.shadow,z=n.get(A);z.shadowBias=L.bias,z.shadowNormalBias=L.normalBias,z.shadowRadius=L.radius,z.shadowMapSize=L.mapSize,s.directionalShadow[y]=z,s.directionalShadowMap[y]=O,s.directionalShadowMatrix[y]=A.shadow.matrix,E++}s.directional[y]=G,y++}else if(A.isSpotLight){let G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(P).multiplyScalar(N*b),G.distance=k,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,s.spot[p]=G;let L=A.shadow;if(A.map&&(s.spotLightMap[T]=A.map,T++,L.updateMatrices(A),A.castShadow&&v++),s.spotLightMatrix[p]=L.matrix,A.castShadow){let z=n.get(A);z.shadowBias=L.bias,z.shadowNormalBias=L.normalBias,z.shadowRadius=L.radius,z.shadowMapSize=L.mapSize,s.spotShadow[p]=z,s.spotShadowMap[p]=O,M++}p++}else if(A.isRectAreaLight){let G=e.get(A);G.color.copy(P).multiplyScalar(N),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),s.rectArea[w]=G,w++}else if(A.isPointLight){let G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity*b),G.distance=A.distance,G.decay=A.decay,A.castShadow){let L=A.shadow,z=n.get(A);z.shadowBias=L.bias,z.shadowNormalBias=L.normalBias,z.shadowRadius=L.radius,z.shadowMapSize=L.mapSize,z.shadowCameraNear=L.camera.near,z.shadowCameraFar=L.camera.far,s.pointShadow[m]=z,s.pointShadowMap[m]=O,s.pointShadowMatrix[m]=A.shadow.matrix,R++}s.point[m]=G,m++}else if(A.isHemisphereLight){let G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(N*b),G.groundColor.copy(A.groundColor).multiplyScalar(N*b),s.hemi[x]=G,x++}}w>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let H=s.hash;(H.directionalLength!==y||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==w||H.hemiLength!==x||H.numDirectionalShadows!==E||H.numPointShadows!==R||H.numSpotShadows!==M||H.numSpotMaps!==T||H.numLightProbes!==_)&&(s.directional.length=y,s.spot.length=p,s.rectArea.length=w,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=M+T-v,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=v,s.numLightProbes=_,H.directionalLength=y,H.pointLength=m,H.spotLength=p,H.rectAreaLength=w,H.hemiLength=x,H.numDirectionalShadows=E,H.numPointShadows=R,H.numSpotShadows=M,H.numSpotMaps=T,H.numLightProbes=_,s.version=Y_++)}function l(h,u){let f=0,d=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let w=0,x=h.length;w<x;w++){let E=h[w];if(E.isDirectionalLight){let R=s.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),f++}else if(E.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(E.isRectAreaLight){let R=s.rectArea[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let R=s.point[d];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function zd(i,t){let e=new Z_(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function K_(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new zd(i,t),e.set(r,[c])):o>=a.length?(c=new zd(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Jl=class extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jl=class extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
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
}`;function Q_(i,t,e){let n=new Bo,s=new yt,r=new yt,o=new Ge,a=new Jl({depthPacking:qm}),c=new jl,l={},h=e.maxTextureSize,u={[Bs]:Xn,[Xn]:Bs,[he]:he},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:J_,fragmentShader:j_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new B(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let p=this.type;this.render=function(M,T,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let _=i.getRenderTarget(),b=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Os),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let S=p!==ms&&this.type===ms,A=p===ms&&this.type!==ms;for(let P=0,N=M.length;P<N;P++){let k=M[P],O=k.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let G=O.getFrameExtents();if(s.multiply(G),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,O.mapSize.y=r.y)),O.map===null||S===!0||A===!0){let z=this.type!==ms?{minFilter:Ln,magFilter:Ln}:{};O.map!==null&&O.map.dispose(),O.map=new _s(s.x,s.y,z),O.map.texture.name=k.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let L=O.getViewportCount();for(let z=0;z<L;z++){let Y=O.getViewport(z);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),I.viewport(o),O.updateMatrices(k,z),n=O.getFrustum(),E(T,v,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===ms&&w(O,v),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,b,H)};function w(M,T){let v=t.update(y);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _s(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,v,f,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,v,d,y,null)}function x(M,T,v,_){let b=null,H=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(H!==void 0)b=H;else if(b=v.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let I=b.uuid,S=T.uuid,A=l[I];A===void 0&&(A={},l[I]=A);let P=A[S];P===void 0&&(P=b.clone(),A[S]=P,T.addEventListener("dispose",R)),b=P}if(b.visible=T.visible,b.wireframe=T.wireframe,_===ms?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,v.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let I=i.properties.get(b);I.light=v}return b}function E(M,T,v,_,b){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===ms)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let S=t.update(M),A=M.material;if(Array.isArray(A)){let P=S.groups;for(let N=0,k=P.length;N<k;N++){let O=P[N],G=A[O.materialIndex];if(G&&G.visible){let L=x(M,G,_,b);M.onBeforeShadow(i,M,T,v,S,L,O),i.renderBufferDirect(v,null,S,L,M,O),M.onAfterShadow(i,M,T,v,S,L,O)}}}else if(A.visible){let P=x(M,A,_,b);M.onBeforeShadow(i,M,T,v,S,P,null),i.renderBufferDirect(v,null,S,P,M,null),M.onAfterShadow(i,M,T,v,S,P,null)}}let I=M.children;for(let S=0,A=I.length;S<A;S++)E(I[S],T,v,_,b)}function R(M){M.target.removeEventListener("dispose",R);for(let v in l){let _=l[v],b=M.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function tE(i,t,e){let n=e.isWebGL2;function s(){let V=!1,ft=new Ge,wt=null,Ot=new Ge(0,0,0,0);return{setMask:function(bt){wt!==bt&&!V&&(i.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){V=bt},setClear:function(bt,_e,ve,ze,Le){Le===!0&&(bt*=ze,_e*=ze,ve*=ze),ft.set(bt,_e,ve,ze),Ot.equals(ft)===!1&&(i.clearColor(bt,_e,ve,ze),Ot.copy(ft))},reset:function(){V=!1,wt=null,Ot.set(-1,0,0,0)}}}function r(){let V=!1,ft=null,wt=null,Ot=null;return{setTest:function(bt){bt?ut(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(bt){ft!==bt&&!V&&(i.depthMask(bt),ft=bt)},setFunc:function(bt){if(wt!==bt){switch(bt){case vm:i.depthFunc(i.NEVER);break;case wm:i.depthFunc(i.ALWAYS);break;case bm:i.depthFunc(i.LESS);break;case Ga:i.depthFunc(i.LEQUAL);break;case Tm:i.depthFunc(i.EQUAL);break;case Sm:i.depthFunc(i.GEQUAL);break;case Rm:i.depthFunc(i.GREATER);break;case Am:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=bt}},setLocked:function(bt){V=bt},setClear:function(bt){Ot!==bt&&(i.clearDepth(bt),Ot=bt)},reset:function(){V=!1,ft=null,wt=null,Ot=null}}}function o(){let V=!1,ft=null,wt=null,Ot=null,bt=null,_e=null,ve=null,ze=null,Le=null;return{setTest:function(de){V||(de?ut(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(de){ft!==de&&!V&&(i.stencilMask(de),ft=de)},setFunc:function(de,un,Zn){(wt!==de||Ot!==un||bt!==Zn)&&(i.stencilFunc(de,un,Zn),wt=de,Ot=un,bt=Zn)},setOp:function(de,un,Zn){(_e!==de||ve!==un||ze!==Zn)&&(i.stencilOp(de,un,Zn),_e=de,ve=un,ze=Zn)},setLocked:function(de){V=de},setClear:function(de){Le!==de&&(i.clearStencil(de),Le=de)},reset:function(){V=!1,ft=null,wt=null,Ot=null,bt=null,_e=null,ve=null,ze=null,Le=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,y=[],m=null,p=!1,w=null,x=null,E=null,R=null,M=null,T=null,v=null,_=new st(0,0,0),b=0,H=!1,I=null,S=null,A=null,P=null,N=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,G=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(L)[1]),O=G>=1):L.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),O=G>=2);let z=null,Y={},X=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),Z=new Ge().fromArray(X),ct=new Ge().fromArray($);function it(V,ft,wt,Ot){let bt=new Uint8Array(4),_e=i.createTexture();i.bindTexture(V,_e),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<wt;ve++)n&&(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)?i.texImage3D(ft,0,i.RGBA,1,1,Ot,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(ft+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return _e}let ot={};ot[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ot[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ut(i.DEPTH_TEST),c.setFunc(Ga),_t(!1),U(mu),ut(i.CULL_FACE),at(Os);function ut(V){f[V]!==!0&&(i.enable(V),f[V]=!0)}function rt(V){f[V]!==!1&&(i.disable(V),f[V]=!1)}function lt(V,ft){return d[V]!==ft?(i.bindFramebuffer(V,ft),d[V]=ft,n&&(V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ft),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ft)),!0):!1}function W(V,ft){let wt=y,Ot=!1;if(V)if(wt=g.get(ft),wt===void 0&&(wt=[],g.set(ft,wt)),V.isWebGLMultipleRenderTargets){let bt=V.texture;if(wt.length!==bt.length||wt[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,ve=bt.length;_e<ve;_e++)wt[_e]=i.COLOR_ATTACHMENT0+_e;wt.length=bt.length,Ot=!0}}else wt[0]!==i.COLOR_ATTACHMENT0&&(wt[0]=i.COLOR_ATTACHMENT0,Ot=!0);else wt[0]!==i.BACK&&(wt[0]=i.BACK,Ot=!0);Ot&&(e.isWebGL2?i.drawBuffers(wt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(wt))}function Q(V){return m!==V?(i.useProgram(V),m=V,!0):!1}let J={[ur]:i.FUNC_ADD,[am]:i.FUNC_SUBTRACT,[cm]:i.FUNC_REVERSE_SUBTRACT};if(n)J[yu]=i.MIN,J[_u]=i.MAX;else{let V=t.get("EXT_blend_minmax");V!==null&&(J[yu]=V.MIN_EXT,J[_u]=V.MAX_EXT)}let ht={[lm]:i.ZERO,[hm]:i.ONE,[um]:i.SRC_COLOR,[Hl]:i.SRC_ALPHA,[xm]:i.SRC_ALPHA_SATURATE,[mm]:i.DST_COLOR,[fm]:i.DST_ALPHA,[dm]:i.ONE_MINUS_SRC_COLOR,[Dl]:i.ONE_MINUS_SRC_ALPHA,[gm]:i.ONE_MINUS_DST_COLOR,[pm]:i.ONE_MINUS_DST_ALPHA,[ym]:i.CONSTANT_COLOR,[_m]:i.ONE_MINUS_CONSTANT_COLOR,[Em]:i.CONSTANT_ALPHA,[Mm]:i.ONE_MINUS_CONSTANT_ALPHA};function at(V,ft,wt,Ot,bt,_e,ve,ze,Le,de){if(V===Os){p===!0&&(rt(i.BLEND),p=!1);return}if(p===!1&&(ut(i.BLEND),p=!0),V!==om){if(V!==w||de!==H){if((x!==ur||M!==ur)&&(i.blendEquation(i.FUNC_ADD),x=ur,M=ur),de)switch(V){case io:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFunc(i.ONE,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}E=null,R=null,T=null,v=null,_.set(0,0,0),b=0,w=V,H=de}return}bt=bt||ft,_e=_e||wt,ve=ve||Ot,(ft!==x||bt!==M)&&(i.blendEquationSeparate(J[ft],J[bt]),x=ft,M=bt),(wt!==E||Ot!==R||_e!==T||ve!==v)&&(i.blendFuncSeparate(ht[wt],ht[Ot],ht[_e],ht[ve]),E=wt,R=Ot,T=_e,v=ve),(ze.equals(_)===!1||Le!==b)&&(i.blendColor(ze.r,ze.g,ze.b,Le),_.copy(ze),b=Le),w=V,H=!1}function Lt(V,ft){V.side===he?rt(i.CULL_FACE):ut(i.CULL_FACE);let wt=V.side===Xn;ft&&(wt=!wt),_t(wt),V.blending===io&&V.transparent===!1?at(Os):at(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);let Ot=V.stencilWrite;l.setTest(Ot),Ot&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),j(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(V){I!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),I=V)}function U(V){V!==sm?(ut(i.CULL_FACE),V!==S&&(V===mu?i.cullFace(i.BACK):V===rm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),S=V}function D(V){V!==A&&(O&&i.lineWidth(V),A=V)}function j(V,ft,wt){V?(ut(i.POLYGON_OFFSET_FILL),(P!==ft||N!==wt)&&(i.polygonOffset(ft,wt),P=ft,N=wt)):rt(i.POLYGON_OFFSET_FILL)}function pt(V){V?ut(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function mt(V){V===void 0&&(V=i.TEXTURE0+k-1),z!==V&&(i.activeTexture(V),z=V)}function dt(V,ft,wt){wt===void 0&&(z===null?wt=i.TEXTURE0+k-1:wt=z);let Ot=Y[wt];Ot===void 0&&(Ot={type:void 0,texture:void 0},Y[wt]=Ot),(Ot.type!==V||Ot.texture!==ft)&&(z!==wt&&(i.activeTexture(wt),z=wt),i.bindTexture(V,ft||ot[V]),Ot.type=V,Ot.texture=ft)}function kt(){let V=Y[z];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Jt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function jt(V){Z.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Z.copy(V))}function we(V){ct.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ct.copy(V))}function tt(V,ft){let wt=u.get(ft);wt===void 0&&(wt=new WeakMap,u.set(ft,wt));let Ot=wt.get(V);Ot===void 0&&(Ot=i.getUniformBlockIndex(ft,V.name),wt.set(V,Ot))}function Zt(V,ft){let Ot=u.get(ft).get(V);h.get(ft)!==Ot&&(i.uniformBlockBinding(ft,Ot,V.__bindingPointIndex),h.set(ft,Ot))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},z=null,Y={},d={},g=new WeakMap,y=[],m=null,p=!1,w=null,x=null,E=null,R=null,M=null,T=null,v=null,_=new st(0,0,0),b=0,H=!1,I=null,S=null,A=null,P=null,N=null,Z.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ut,disable:rt,bindFramebuffer:lt,drawBuffers:W,useProgram:Q,setBlending:at,setMaterial:Lt,setFlipSided:_t,setCullFace:U,setLineWidth:D,setPolygonOffset:j,setScissorTest:pt,activeTexture:mt,bindTexture:dt,unbindTexture:kt,compressedTexImage2D:Rt,compressedTexImage3D:Ht,texImage2D:Gt,texImage3D:Nt,updateUBOMapping:tt,uniformBlockBinding:Zt,texStorage2D:Bt,texStorage3D:Jt,texSubImage2D:Wt,texSubImage3D:Kt,compressedTexSubImage2D:gt,compressedTexSubImage3D:ie,scissor:jt,viewport:we,reset:Tt}}function eE(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,D){return d?new OffscreenCanvas(U,D):Ka("canvas")}function y(U,D,j,pt){let mt=1;if((U.width>pt||U.height>pt)&&(mt=pt/Math.max(U.width,U.height)),mt<1||D===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){let dt=D?Za:Math.floor,kt=dt(mt*U.width),Rt=dt(mt*U.height);u===void 0&&(u=g(kt,Rt));let Ht=j?g(kt,Rt):u;return Ht.width=kt,Ht.height=Rt,Ht.getContext("2d").drawImage(U,0,0,kt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+kt+"x"+Rt+")."),Ht}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function m(U){return Fl(U.width)&&Fl(U.height)}function p(U){return a?!1:U.wrapS!==Ui||U.wrapT!==Ui||U.minFilter!==Ln&&U.minFilter!==jn}function w(U,D){return U.generateMipmaps&&D&&U.minFilter!==Ln&&U.minFilter!==jn}function x(U){i.generateMipmap(U)}function E(U,D,j,pt,mt=!1){if(a===!1)return D;if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=D;if(D===i.RED&&(j===i.FLOAT&&(dt=i.R32F),j===i.HALF_FLOAT&&(dt=i.R16F),j===i.UNSIGNED_BYTE&&(dt=i.R8)),D===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(dt=i.R8UI),j===i.UNSIGNED_SHORT&&(dt=i.R16UI),j===i.UNSIGNED_INT&&(dt=i.R32UI),j===i.BYTE&&(dt=i.R8I),j===i.SHORT&&(dt=i.R16I),j===i.INT&&(dt=i.R32I)),D===i.RG&&(j===i.FLOAT&&(dt=i.RG32F),j===i.HALF_FLOAT&&(dt=i.RG16F),j===i.UNSIGNED_BYTE&&(dt=i.RG8)),D===i.RGBA){let kt=mt?Xa:Ce.getTransfer(pt);j===i.FLOAT&&(dt=i.RGBA32F),j===i.HALF_FLOAT&&(dt=i.RGBA16F),j===i.UNSIGNED_BYTE&&(dt=kt===Ne?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function R(U,D,j){return w(U,j)===!0||U.isFramebufferTexture&&U.minFilter!==Ln&&U.minFilter!==jn?Math.log2(Math.max(D.width,D.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?D.mipmaps.length:1}function M(U){return U===Ln||U===Eu||U===Qc?i.NEAREST:i.LINEAR}function T(U){let D=U.target;D.removeEventListener("dispose",T),_(D),D.isVideoTexture&&h.delete(D)}function v(U){let D=U.target;D.removeEventListener("dispose",v),H(D)}function _(U){let D=n.get(U);if(D.__webglInit===void 0)return;let j=U.source,pt=f.get(j);if(pt){let mt=pt[D.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&b(U),Object.keys(pt).length===0&&f.delete(j)}n.remove(U)}function b(U){let D=n.get(U);i.deleteTexture(D.__webglTexture);let j=U.source,pt=f.get(j);delete pt[D.__cacheKey],o.memory.textures--}function H(U){let D=U.texture,j=n.get(U),pt=n.get(D);if(pt.__webglTexture!==void 0&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(j.__webglFramebuffer[mt]))for(let dt=0;dt<j.__webglFramebuffer[mt].length;dt++)i.deleteFramebuffer(j.__webglFramebuffer[mt][dt]);else i.deleteFramebuffer(j.__webglFramebuffer[mt]);j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer[mt])}else{if(Array.isArray(j.__webglFramebuffer))for(let mt=0;mt<j.__webglFramebuffer.length;mt++)i.deleteFramebuffer(j.__webglFramebuffer[mt]);else i.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&i.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&i.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let mt=0;mt<j.__webglColorRenderbuffer.length;mt++)j.__webglColorRenderbuffer[mt]&&i.deleteRenderbuffer(j.__webglColorRenderbuffer[mt]);j.__webglDepthRenderbuffer&&i.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let mt=0,dt=D.length;mt<dt;mt++){let kt=n.get(D[mt]);kt.__webglTexture&&(i.deleteTexture(kt.__webglTexture),o.memory.textures--),n.remove(D[mt])}n.remove(D),n.remove(U)}let I=0;function S(){I=0}function A(){let U=I;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),I+=1,U}function P(U){let D=[];return D.push(U.wrapS),D.push(U.wrapT),D.push(U.wrapR||0),D.push(U.magFilter),D.push(U.minFilter),D.push(U.anisotropy),D.push(U.internalFormat),D.push(U.format),D.push(U.type),D.push(U.generateMipmaps),D.push(U.premultiplyAlpha),D.push(U.flipY),D.push(U.unpackAlignment),D.push(U.colorSpace),D.join()}function N(U,D){let j=n.get(U);if(U.isVideoTexture&&Lt(U),U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){let pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(j,U,D);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+D)}function k(U,D){let j=n.get(U);if(U.version>0&&j.__version!==U.version){Z(j,U,D);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+D)}function O(U,D){let j=n.get(U);if(U.version>0&&j.__version!==U.version){Z(j,U,D);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+D)}function G(U,D){let j=n.get(U);if(U.version>0&&j.__version!==U.version){ct(j,U,D);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+D)}let L={[Nl]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[Ol]:i.MIRRORED_REPEAT},z={[Ln]:i.NEAREST,[Eu]:i.NEAREST_MIPMAP_NEAREST,[Qc]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Nm]:i.LINEAR_MIPMAP_NEAREST,[Oo]:i.LINEAR_MIPMAP_LINEAR},Y={[$m]:i.NEVER,[t0]:i.ALWAYS,[Zm]:i.LESS,[rf]:i.LEQUAL,[Km]:i.EQUAL,[Qm]:i.GEQUAL,[Jm]:i.GREATER,[jm]:i.NOTEQUAL};function X(U,D,j){if(j?(i.texParameteri(U,i.TEXTURE_WRAP_S,L[D.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,L[D.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,L[D.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,z[D.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,z[D.minFilter])):(i.texParameteri(U,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(U,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(D.wrapS!==Ui||D.wrapT!==Ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(U,i.TEXTURE_MAG_FILTER,M(D.magFilter)),i.texParameteri(U,i.TEXTURE_MIN_FILTER,M(D.minFilter)),D.minFilter!==Ln&&D.minFilter!==jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Y[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let pt=t.get("EXT_texture_filter_anisotropic");if(D.magFilter===Ln||D.minFilter!==Qc&&D.minFilter!==Oo||D.type===Ns&&t.has("OES_texture_float_linear")===!1||a===!1&&D.type===ko&&t.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||n.get(D).__currentAnisotropy)&&(i.texParameterf(U,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy)}}function $(U,D){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,D.addEventListener("dispose",T));let pt=D.source,mt=f.get(pt);mt===void 0&&(mt={},f.set(pt,mt));let dt=P(D);if(dt!==U.__cacheKey){mt[dt]===void 0&&(mt[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),mt[dt].usedTimes++;let kt=mt[U.__cacheKey];kt!==void 0&&(mt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&b(D)),U.__cacheKey=dt,U.__webglTexture=mt[dt].texture}return j}function Z(U,D,j){let pt=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(pt=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(pt=i.TEXTURE_3D);let mt=$(U,D),dt=D.source;e.bindTexture(pt,U.__webglTexture,i.TEXTURE0+j);let kt=n.get(dt);if(dt.version!==kt.__version||mt===!0){e.activeTexture(i.TEXTURE0+j);let Rt=Ce.getPrimaries(Ce.workingColorSpace),Ht=D.colorSpace===bi?null:Ce.getPrimaries(D.colorSpace),Wt=D.colorSpace===bi||Rt===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Kt=p(D)&&m(D.image)===!1,gt=y(D.image,Kt,!1,s.maxTextureSize);gt=_t(D,gt);let ie=m(gt)||a,Bt=r.convert(D.format,D.colorSpace),Jt=r.convert(D.type),Gt=E(D.internalFormat,Bt,Jt,D.colorSpace,D.isVideoTexture);X(pt,D,ie);let Nt,jt=D.mipmaps,we=a&&D.isVideoTexture!==!0&&Gt!==nf,tt=kt.__version===void 0||mt===!0,Zt=R(D,gt,ie);if(D.isDepthTexture)Gt=i.DEPTH_COMPONENT,a?D.type===Ns?Gt=i.DEPTH_COMPONENT32F:D.type===Us?Gt=i.DEPTH_COMPONENT24:D.type===fr?Gt=i.DEPTH24_STENCIL8:Gt=i.DEPTH_COMPONENT16:D.type===Ns&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===pr&&Gt===i.DEPTH_COMPONENT&&D.type!==Ah&&D.type!==Us&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=Us,Jt=r.convert(D.type)),D.format===co&&Gt===i.DEPTH_COMPONENT&&(Gt=i.DEPTH_STENCIL,D.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=fr,Jt=r.convert(D.type))),tt&&(we?e.texStorage2D(i.TEXTURE_2D,1,Gt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,gt.width,gt.height,0,Bt,Jt,null));else if(D.isDataTexture)if(jt.length>0&&ie){we&&tt&&e.texStorage2D(i.TEXTURE_2D,Zt,Gt,jt[0].width,jt[0].height);for(let Tt=0,V=jt.length;Tt<V;Tt++)Nt=jt[Tt],we?e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Nt.width,Nt.height,Bt,Jt,Nt.data):e.texImage2D(i.TEXTURE_2D,Tt,Gt,Nt.width,Nt.height,0,Bt,Jt,Nt.data);D.generateMipmaps=!1}else we?(tt&&e.texStorage2D(i.TEXTURE_2D,Zt,Gt,gt.width,gt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Bt,Jt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,gt.width,gt.height,0,Bt,Jt,gt.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){we&&tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Gt,jt[0].width,jt[0].height,gt.depth);for(let Tt=0,V=jt.length;Tt<V;Tt++)Nt=jt[Tt],D.format!==Ni?Bt!==null?we?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Nt.width,Nt.height,gt.depth,Bt,Nt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Tt,Gt,Nt.width,Nt.height,gt.depth,0,Nt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?e.texSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Nt.width,Nt.height,gt.depth,Bt,Jt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Tt,Gt,Nt.width,Nt.height,gt.depth,0,Bt,Jt,Nt.data)}else{we&&tt&&e.texStorage2D(i.TEXTURE_2D,Zt,Gt,jt[0].width,jt[0].height);for(let Tt=0,V=jt.length;Tt<V;Tt++)Nt=jt[Tt],D.format!==Ni?Bt!==null?we?e.compressedTexSubImage2D(i.TEXTURE_2D,Tt,0,0,Nt.width,Nt.height,Bt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,Tt,Gt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Nt.width,Nt.height,Bt,Jt,Nt.data):e.texImage2D(i.TEXTURE_2D,Tt,Gt,Nt.width,Nt.height,0,Bt,Jt,Nt.data)}else if(D.isDataArrayTexture)we?(tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Gt,gt.width,gt.height,gt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Bt,Jt,gt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,gt.width,gt.height,gt.depth,0,Bt,Jt,gt.data);else if(D.isData3DTexture)we?(tt&&e.texStorage3D(i.TEXTURE_3D,Zt,Gt,gt.width,gt.height,gt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Bt,Jt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,gt.width,gt.height,gt.depth,0,Bt,Jt,gt.data);else if(D.isFramebufferTexture){if(tt)if(we)e.texStorage2D(i.TEXTURE_2D,Zt,Gt,gt.width,gt.height);else{let Tt=gt.width,V=gt.height;for(let ft=0;ft<Zt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Gt,Tt,V,0,Bt,Jt,null),Tt>>=1,V>>=1}}else if(jt.length>0&&ie){we&&tt&&e.texStorage2D(i.TEXTURE_2D,Zt,Gt,jt[0].width,jt[0].height);for(let Tt=0,V=jt.length;Tt<V;Tt++)Nt=jt[Tt],we?e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Bt,Jt,Nt):e.texImage2D(i.TEXTURE_2D,Tt,Gt,Bt,Jt,Nt);D.generateMipmaps=!1}else we?(tt&&e.texStorage2D(i.TEXTURE_2D,Zt,Gt,gt.width,gt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Bt,Jt,gt)):e.texImage2D(i.TEXTURE_2D,0,Gt,Bt,Jt,gt);w(D,ie)&&x(pt),kt.__version=dt.version,D.onUpdate&&D.onUpdate(D)}U.__version=D.version}function ct(U,D,j){if(D.image.length!==6)return;let pt=$(U,D),mt=D.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+j);let dt=n.get(mt);if(mt.version!==dt.__version||pt===!0){e.activeTexture(i.TEXTURE0+j);let kt=Ce.getPrimaries(Ce.workingColorSpace),Rt=D.colorSpace===bi?null:Ce.getPrimaries(D.colorSpace),Ht=D.colorSpace===bi||kt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let Wt=D.isCompressedTexture||D.image[0].isCompressedTexture,Kt=D.image[0]&&D.image[0].isDataTexture,gt=[];for(let Tt=0;Tt<6;Tt++)!Wt&&!Kt?gt[Tt]=y(D.image[Tt],!1,!0,s.maxCubemapSize):gt[Tt]=Kt?D.image[Tt].image:D.image[Tt],gt[Tt]=_t(D,gt[Tt]);let ie=gt[0],Bt=m(ie)||a,Jt=r.convert(D.format,D.colorSpace),Gt=r.convert(D.type),Nt=E(D.internalFormat,Jt,Gt,D.colorSpace),jt=a&&D.isVideoTexture!==!0,we=dt.__version===void 0||pt===!0,tt=R(D,ie,Bt);X(i.TEXTURE_CUBE_MAP,D,Bt);let Zt;if(Wt){jt&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Nt,ie.width,ie.height);for(let Tt=0;Tt<6;Tt++){Zt=gt[Tt].mipmaps;for(let V=0;V<Zt.length;V++){let ft=Zt[V];D.format!==Ni?Jt!==null?jt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V,0,0,ft.width,ft.height,Jt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V,Nt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V,0,0,ft.width,ft.height,Jt,Gt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V,Nt,ft.width,ft.height,0,Jt,Gt,ft.data)}}}else{Zt=D.mipmaps,jt&&we&&(Zt.length>0&&tt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Nt,gt[0].width,gt[0].height));for(let Tt=0;Tt<6;Tt++)if(Kt){jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,gt[Tt].width,gt[Tt].height,Jt,Gt,gt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Nt,gt[Tt].width,gt[Tt].height,0,Jt,Gt,gt[Tt].data);for(let V=0;V<Zt.length;V++){let wt=Zt[V].image[Tt].image;jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V+1,0,0,wt.width,wt.height,Jt,Gt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V+1,Nt,wt.width,wt.height,0,Jt,Gt,wt.data)}}else{jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Jt,Gt,gt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Nt,Jt,Gt,gt[Tt]);for(let V=0;V<Zt.length;V++){let ft=Zt[V];jt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V+1,0,0,Jt,Gt,ft.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,V+1,Nt,Jt,Gt,ft.image[Tt])}}}w(D,Bt)&&x(i.TEXTURE_CUBE_MAP),dt.__version=mt.version,D.onUpdate&&D.onUpdate(D)}U.__version=D.version}function it(U,D,j,pt,mt,dt){let kt=r.convert(j.format,j.colorSpace),Rt=r.convert(j.type),Ht=E(j.internalFormat,kt,Rt,j.colorSpace);if(!n.get(D).__hasExternalTextures){let Kt=Math.max(1,D.width>>dt),gt=Math.max(1,D.height>>dt);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,dt,Ht,Kt,gt,D.depth,0,kt,Rt,null):e.texImage2D(mt,dt,Ht,Kt,gt,0,kt,Rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),at(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,mt,n.get(j).__webglTexture,0,ht(D)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pt,mt,n.get(j).__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(U,D,j){if(i.bindRenderbuffer(i.RENDERBUFFER,U),D.depthBuffer&&!D.stencilBuffer){let pt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(j||at(D)){let mt=D.depthTexture;mt&&mt.isDepthTexture&&(mt.type===Ns?pt=i.DEPTH_COMPONENT32F:mt.type===Us&&(pt=i.DEPTH_COMPONENT24));let dt=ht(D);at(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,pt,D.width,D.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,pt,D.width,D.height)}else i.renderbufferStorage(i.RENDERBUFFER,pt,D.width,D.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,U)}else if(D.depthBuffer&&D.stencilBuffer){let pt=ht(D);j&&at(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,i.DEPTH24_STENCIL8,D.width,D.height):at(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,i.DEPTH24_STENCIL8,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,U)}else{let pt=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let mt=0;mt<pt.length;mt++){let dt=pt[mt],kt=r.convert(dt.format,dt.colorSpace),Rt=r.convert(dt.type),Ht=E(dt.internalFormat,kt,Rt,dt.colorSpace),Wt=ht(D);j&&at(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Ht,D.width,D.height):at(D)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,Ht,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,Ht,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(U,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),N(D.depthTexture,0);let pt=n.get(D.depthTexture).__webglTexture,mt=ht(D);if(D.depthTexture.format===pr)at(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(D.depthTexture.format===co)at(D)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function rt(U){let D=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!D.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ut(D.__webglFramebuffer,U)}else if(j){D.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[pt]),D.__webglDepthbuffer[pt]=i.createRenderbuffer(),ot(D.__webglDepthbuffer[pt],U,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=i.createRenderbuffer(),ot(D.__webglDepthbuffer,U,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(U,D,j){let pt=n.get(U);D!==void 0&&it(pt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&rt(U)}function W(U){let D=U.texture,j=n.get(U),pt=n.get(D);U.addEventListener("dispose",v),U.isWebGLMultipleRenderTargets!==!0&&(pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture()),pt.__version=D.version,o.memory.textures++);let mt=U.isWebGLCubeRenderTarget===!0,dt=U.isWebGLMultipleRenderTargets===!0,kt=m(U)||a;if(mt){j.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(a&&D.mipmaps&&D.mipmaps.length>0){j.__webglFramebuffer[Rt]=[];for(let Ht=0;Ht<D.mipmaps.length;Ht++)j.__webglFramebuffer[Rt][Ht]=i.createFramebuffer()}else j.__webglFramebuffer[Rt]=i.createFramebuffer()}else{if(a&&D.mipmaps&&D.mipmaps.length>0){j.__webglFramebuffer=[];for(let Rt=0;Rt<D.mipmaps.length;Rt++)j.__webglFramebuffer[Rt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(dt)if(s.drawBuffers){let Rt=U.texture;for(let Ht=0,Wt=Rt.length;Ht<Wt;Ht++){let Kt=n.get(Rt[Ht]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&U.samples>0&&at(U)===!1){let Rt=dt?D:[D];j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ht=0;Ht<Rt.length;Ht++){let Wt=Rt[Ht];j.__webglColorRenderbuffer[Ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Ht]);let Kt=r.convert(Wt.format,Wt.colorSpace),gt=r.convert(Wt.type),ie=E(Wt.internalFormat,Kt,gt,Wt.colorSpace,U.isXRRenderTarget===!0),Bt=ht(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,ie,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,j.__webglColorRenderbuffer[Ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(j.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),X(i.TEXTURE_CUBE_MAP,D,kt);for(let Rt=0;Rt<6;Rt++)if(a&&D.mipmaps&&D.mipmaps.length>0)for(let Ht=0;Ht<D.mipmaps.length;Ht++)it(j.__webglFramebuffer[Rt][Ht],U,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ht);else it(j.__webglFramebuffer[Rt],U,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);w(D,kt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){let Rt=U.texture;for(let Ht=0,Wt=Rt.length;Ht<Wt;Ht++){let Kt=Rt[Ht],gt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),X(i.TEXTURE_2D,Kt,kt),it(j.__webglFramebuffer,U,Kt,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,0),w(Kt,kt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let Rt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(a?Rt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Rt,pt.__webglTexture),X(Rt,D,kt),a&&D.mipmaps&&D.mipmaps.length>0)for(let Ht=0;Ht<D.mipmaps.length;Ht++)it(j.__webglFramebuffer[Ht],U,D,i.COLOR_ATTACHMENT0,Rt,Ht);else it(j.__webglFramebuffer,U,D,i.COLOR_ATTACHMENT0,Rt,0);w(D,kt)&&x(Rt),e.unbindTexture()}U.depthBuffer&&rt(U)}function Q(U){let D=m(U)||a,j=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let pt=0,mt=j.length;pt<mt;pt++){let dt=j[pt];if(w(dt,D)){let kt=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Rt=n.get(dt).__webglTexture;e.bindTexture(kt,Rt),x(kt),e.unbindTexture()}}}function J(U){if(a&&U.samples>0&&at(U)===!1){let D=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],j=U.width,pt=U.height,mt=i.COLOR_BUFFER_BIT,dt=[],kt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(U),Ht=U.isWebGLMultipleRenderTargets===!0;if(Ht)for(let Wt=0;Wt<D.length;Wt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Wt=0;Wt<D.length;Wt++){dt.push(i.COLOR_ATTACHMENT0+Wt),U.depthBuffer&&dt.push(kt);let Kt=Rt.__ignoreDepthValues!==void 0?Rt.__ignoreDepthValues:!1;if(Kt===!1&&(U.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),Ht&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Wt]),Kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[kt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[kt])),Ht){let gt=n.get(D[Wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,j,pt,0,0,j,pt,mt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ht)for(let Wt=0;Wt<D.length;Wt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Wt]);let Kt=n.get(D[Wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Wt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}}function ht(U){return Math.min(s.maxSamples,U.samples)}function at(U){let D=n.get(U);return a&&U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Lt(U){let D=o.render.frame;h.get(U)!==D&&(h.set(U,D),U.update())}function _t(U,D){let j=U.colorSpace,pt=U.format,mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===kl||j!==ys&&j!==bi&&(Ce.getTransfer(j)===Ne?a===!1?t.has("EXT_sRGB")===!0&&pt===Ni?(U.format=kl,U.minFilter=jn,U.generateMipmaps=!1):D=Ja.sRGBToLinear(D):(pt!==Ni||mt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),D}this.allocateTextureUnit=A,this.resetTextureUnits=S,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=lt,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=at}function nE(i,t,e){let n=e.isWebGL2;function s(r,o=bi){let a,c=Ce.getTransfer(o);if(r===Zi)return i.UNSIGNED_BYTE;if(r===Jd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===jd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Om)return i.BYTE;if(r===km)return i.SHORT;if(r===Ah)return i.UNSIGNED_SHORT;if(r===Kd)return i.INT;if(r===Us)return i.UNSIGNED_INT;if(r===Ns)return i.FLOAT;if(r===ko)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Fm)return i.ALPHA;if(r===Ni)return i.RGBA;if(r===Bm)return i.LUMINANCE;if(r===Gm)return i.LUMINANCE_ALPHA;if(r===pr)return i.DEPTH_COMPONENT;if(r===co)return i.DEPTH_STENCIL;if(r===kl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ch)return i.RED;if(r===Qd)return i.RED_INTEGER;if(r===Vm)return i.RG;if(r===tf)return i.RG_INTEGER;if(r===ef)return i.RGBA_INTEGER;if(r===tl||r===el||r===nl||r===il)if(c===Ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===tl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===el)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===il)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mu||r===vu||r===wu||r===bu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Mu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tu||r===Su)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Tu)return c===Ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Su)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ru||r===Au||r===Cu||r===Pu||r===Iu||r===Lu||r===Hu||r===Du||r===zu||r===Uu||r===Nu||r===Ou||r===ku||r===Fu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ru)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Au)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Iu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Du)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ou)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ku)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sl||r===Bu||r===Gu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===sl)return c===Ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wm||r===Vu||r===Wu||r===Xu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===sl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fr?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ql=class extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Mt=class extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},iE={type:"move"},zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},th=class extends Gs{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=e.getContextAttributes(),m=null,p=null,w=[],x=[],E=new yt,R=null,M=new Wn;M.layers.enable(1),M.viewport=new Ge;let T=new Wn;T.layers.enable(2),T.viewport=new Ge;let v=[M,T],_=new Ql;_.layers.enable(1),_.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=w[X];return $===void 0&&($=new zo,w[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=w[X];return $===void 0&&($=new zo,w[X]=$),$.getGripSpace()},this.getHand=function(X){let $=w[X];return $===void 0&&($=new zo,w[X]=$),$.getHandSpace()};function I(X){let $=x.indexOf(X.inputSource);if($===-1)return;let Z=w[$];Z!==void 0&&(Z.update(X.inputSource,X.frame,l||o),Z.dispatchEvent({type:X.type,data:X.inputSource}))}function S(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",S),s.removeEventListener("inputsourceschange",A);for(let X=0;X<w.length;X++){let $=x[X];$!==null&&(x[X]=null,w[X].disconnect($))}b=null,H=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,Y.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",S),s.addEventListener("inputsourceschange",A),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new _s(d.framebufferWidth,d.framebufferHeight,{format:Ni,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let $=null,Z=null,ct=null;y.depth&&(ct=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=y.stencil?co:pr,Z=y.stencil?fr:Us);let it={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(it),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new _s(f.textureWidth,f.textureHeight,{format:Ni,type:Zi,depthTexture:new lc(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});let ot=t.properties.get(p);ot.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function A(X){for(let $=0;$<X.removed.length;$++){let Z=X.removed[$],ct=x.indexOf(Z);ct>=0&&(x[ct]=null,w[ct].disconnect(Z))}for(let $=0;$<X.added.length;$++){let Z=X.added[$],ct=x.indexOf(Z);if(ct===-1){for(let ot=0;ot<w.length;ot++)if(ot>=x.length){x.push(Z),ct=ot;break}else if(x[ot]===null){x[ot]=Z,ct=ot;break}if(ct===-1)break}let it=w[ct];it&&it.connect(Z)}}let P=new F,N=new F;function k(X,$,Z){P.setFromMatrixPosition($.matrixWorld),N.setFromMatrixPosition(Z.matrixWorld);let ct=P.distanceTo(N),it=$.projectionMatrix.elements,ot=Z.projectionMatrix.elements,ut=it[14]/(it[10]-1),rt=it[14]/(it[10]+1),lt=(it[9]+1)/it[5],W=(it[9]-1)/it[5],Q=(it[8]-1)/it[0],J=(ot[8]+1)/ot[0],ht=ut*Q,at=ut*J,Lt=ct/(-Q+J),_t=Lt*-Q;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_t),X.translateZ(Lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let U=ut+Lt,D=rt+Lt,j=ht-_t,pt=at+(ct-_t),mt=lt*rt/D*U,dt=W*rt/D*U;X.projectionMatrix.makePerspective(j,pt,mt,dt,U,D),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function O(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;_.near=T.near=M.near=X.near,_.far=T.far=M.far=X.far,(b!==_.near||H!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,H=_.far);let $=X.parent,Z=_.cameras;O(_,$);for(let ct=0;ct<Z.length;ct++)O(Z[ct],$);Z.length===2?k(_,M,T):_.projectionMatrix.copy(M.projectionMatrix),G(X,_,$)};function G(X,$,Z){Z===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(Z.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let L=null;function z(X,$){if(h=$.getViewerPose(l||o),g=$,h!==null){let Z=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let ct=!1;Z.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let it=0;it<Z.length;it++){let ot=Z[it],ut=null;if(d!==null)ut=d.getViewport(ot);else{let lt=u.getViewSubImage(f,ot);ut=lt.viewport,it===0&&(t.setRenderTargetTextures(p,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(p))}let rt=v[it];rt===void 0&&(rt=new Wn,rt.layers.enable(it),rt.viewport=new Ge,v[it]=rt),rt.matrix.fromArray(ot.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ot.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ut.x,ut.y,ut.width,ut.height),it===0&&(_.matrix.copy(rt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(rt)}}for(let Z=0;Z<w.length;Z++){let ct=x[Z],it=w[Z];ct!==null&&it!==void 0&&it.update(ct,$,l||o)}L&&L(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let Y=new lf;Y.setAnimationLoop(z),this.setAnimationLoop=function(X){L=X},this.dispose=function(){}}};function sE(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=t.get(p).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rE(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,x){let E=x.program;n.uniformBlockBinding(w,E)}function l(w,x){let E=s[w.id];E===void 0&&(g(w),E=h(w),s[w.id]=E,w.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(w,R);let M=t.render.frame;r[w.id]!==M&&(f(w),r[w.id]=M)}function h(w){let x=u();w.__bindingPointIndex=x;let E=i.createBuffer(),R=w.__size,M=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let x=s[w.id],E=w.uniforms,R=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let M=0,T=E.length;M<T;M++){let v=Array.isArray(E[M])?E[M]:[E[M]];for(let _=0,b=v.length;_<b;_++){let H=v[_];if(d(H,M,_,R)===!0){let I=H.__offset,S=Array.isArray(H.value)?H.value:[H.value],A=0;for(let P=0;P<S.length;P++){let N=S[P],k=y(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,I+A,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,A),A+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(w,x,E,R){let M=w.value,T=x+"_"+E;if(R[T]===void 0)return typeof M=="number"||typeof M=="boolean"?R[T]=M:R[T]=M.clone(),!0;{let v=R[T];if(typeof M=="number"||typeof M=="boolean"){if(v!==M)return R[T]=M,!0}else if(v.equals(M)===!1)return v.copy(M),!0}return!1}function g(w){let x=w.uniforms,E=0,R=16;for(let T=0,v=x.length;T<v;T++){let _=Array.isArray(x[T])?x[T]:[x[T]];for(let b=0,H=_.length;b<H;b++){let I=_[b],S=Array.isArray(I.value)?I.value:[I.value];for(let A=0,P=S.length;A<P;A++){let N=S[A],k=y(N),O=E%R;O!==0&&R-O<k.boundary&&(E+=R-O),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=k.storage}}}let M=E%R;return M>0&&(E+=R-M),w.__size=E,w.__cache={},this}function y(w){let x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){let x=w.target;x.removeEventListener("dispose",m);let E=o.indexOf(x.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Go=class{constructor(t={}){let{canvas:e=m0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this._useLegacyLights=!1,this.toneMapping=ks,this.toneMappingExposure=1;let x=this,E=!1,R=0,M=0,T=null,v=-1,_=null,b=new Ge,H=new Ge,I=null,S=new st(0),A=0,P=e.width,N=e.height,k=1,O=null,G=null,L=new Ge(0,0,P,N),z=new Ge(0,0,P,N),Y=!1,X=new Bo,$=!1,Z=!1,ct=null,it=new be,ot=new yt,ut=new F,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return T===null?k:1}let W=n;function Q(C,q){for(let K=0;K<C.length;K++){let et=C[K],nt=e.getContext(et,q);if(nt!==null)return nt}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Th}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",ft,!1),W===null){let q=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&q.shift(),W=Q(q,C),W===null)throw Q(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let J,ht,at,Lt,_t,U,D,j,pt,mt,dt,kt,Rt,Ht,Wt,Kt,gt,ie,Bt,Jt,Gt,Nt,jt,we;function tt(){J=new by(W),ht=new yy(W,J,t),J.init(ht),Nt=new nE(W,J,ht),at=new tE(W,J,ht),Lt=new Ry(W),_t=new G_,U=new eE(W,J,at,_t,ht,Nt,Lt),D=new Ey(x),j=new wy(x),pt=new z0(W,ht),jt=new gy(W,J,pt,ht),mt=new Ty(W,pt,Lt,jt),dt=new Iy(W,mt,pt,Lt),Bt=new Py(W,ht,U),Kt=new _y(_t),kt=new B_(x,D,j,J,ht,jt,Kt),Rt=new sE(x,_t),Ht=new W_,Wt=new K_(J,ht),ie=new my(x,D,j,at,dt,f,c),gt=new Q_(x,dt,ht),we=new rE(W,Lt,ht,at),Jt=new xy(W,J,Lt,ht),Gt=new Sy(W,J,Lt,ht),Lt.programs=kt.programs,x.capabilities=ht,x.extensions=J,x.properties=_t,x.renderLists=Ht,x.shadowMap=gt,x.state=at,x.info=Lt}tt();let Zt=new th(x,W);this.xr=Zt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let C=J.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=J.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(P,N,!1))},this.getSize=function(C){return C.set(P,N)},this.setSize=function(C,q,K=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,N=q,e.width=Math.floor(C*k),e.height=Math.floor(q*k),K===!0&&(e.style.width=C+"px",e.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(P*k,N*k).floor()},this.setDrawingBufferSize=function(C,q,K){P=C,N=q,k=K,e.width=Math.floor(C*K),e.height=Math.floor(q*K),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,q,K,et){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,q,K,et),at.viewport(b.copy(L).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(z)},this.setScissor=function(C,q,K,et){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,q,K,et),at.scissor(H.copy(z).multiplyScalar(k).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){at.setScissorTest(Y=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){G=C},this.getClearColor=function(C){return C.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(C=!0,q=!0,K=!0){let et=0;if(C){let nt=!1;if(T!==null){let zt=T.texture.format;nt=zt===ef||zt===tf||zt===Qd}if(nt){let zt=T.texture.type,Ft=zt===Zi||zt===Us||zt===Ah||zt===fr||zt===Jd||zt===jd,Yt=ie.getClearColor(),Qt=ie.getClearAlpha(),ue=Yt.r,se=Yt.g,re=Yt.b;Ft?(d[0]=ue,d[1]=se,d[2]=re,d[3]=Qt,W.clearBufferuiv(W.COLOR,0,d)):(g[0]=ue,g[1]=se,g[2]=re,g[3]=Qt,W.clearBufferiv(W.COLOR,0,g))}else et|=W.COLOR_BUFFER_BIT}q&&(et|=W.DEPTH_BUFFER_BIT),K&&(et|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Ht.dispose(),Wt.dispose(),_t.dispose(),D.dispose(),j.dispose(),dt.dispose(),jt.dispose(),we.dispose(),kt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Le),Zt.removeEventListener("sessionend",de),ct&&(ct.dispose(),ct=null),un.stop()};function Tt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=Lt.autoReset,q=gt.enabled,K=gt.autoUpdate,et=gt.needsUpdate,nt=gt.type;tt(),Lt.autoReset=C,gt.enabled=q,gt.autoUpdate=K,gt.needsUpdate=et,gt.type=nt}function ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function wt(C){let q=C.target;q.removeEventListener("dispose",wt),Ot(q)}function Ot(C){bt(C),_t.remove(C)}function bt(C){let q=_t.get(C).programs;q!==void 0&&(q.forEach(function(K){kt.releaseProgram(K)}),C.isShaderMaterial&&kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,K,et,nt,zt){q===null&&(q=rt);let Ft=nt.isMesh&&nt.matrixWorld.determinant()<0,Yt=xe(C,q,K,et,nt);at.setMaterial(et,Ft);let Qt=K.index,ue=1;if(et.wireframe===!0){if(Qt=mt.getWireframeAttribute(K),Qt===void 0)return;ue=2}let se=K.drawRange,re=K.attributes.position,an=se.start*ue,fi=(se.start+se.count)*ue;zt!==null&&(an=Math.max(an,zt.start*ue),fi=Math.min(fi,(zt.start+zt.count)*ue)),Qt!==null?(an=Math.max(an,0),fi=Math.min(fi,Qt.count)):re!=null&&(an=Math.max(an,0),fi=Math.min(fi,re.count));let vn=fi-an;if(vn<0||vn===1/0)return;jt.setup(nt,et,Yt,K,Qt);let ls,qe=Jt;if(Qt!==null&&(ls=pt.get(Qt),qe=Gt,qe.setIndex(ls)),nt.isMesh)et.wireframe===!0?(at.setLineWidth(et.wireframeLinewidth*lt()),qe.setMode(W.LINES)):qe.setMode(W.TRIANGLES);else if(nt.isLine){let fe=et.linewidth;fe===void 0&&(fe=1),at.setLineWidth(fe*lt()),nt.isLineSegments?qe.setMode(W.LINES):nt.isLineLoop?qe.setMode(W.LINE_LOOP):qe.setMode(W.LINE_STRIP)}else nt.isPoints?qe.setMode(W.POINTS):nt.isSprite&&qe.setMode(W.TRIANGLES);if(nt.isBatchedMesh)qe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)qe.renderInstances(an,vn,nt.count);else if(K.isInstancedBufferGeometry){let fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Zc=Math.min(K.instanceCount,fe);qe.renderInstances(an,vn,Zc)}else qe.render(an,vn)};function _e(C,q,K){C.transparent===!0&&C.side===he&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,oi(C,q,K),C.side=Bs,C.needsUpdate=!0,oi(C,q,K),C.side=he):oi(C,q,K)}this.compile=function(C,q,K=null){K===null&&(K=C),m=Wt.get(K),m.init(),w.push(m),K.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(m.pushLight(nt),nt.castShadow&&m.pushShadow(nt))}),C!==K&&C.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(m.pushLight(nt),nt.castShadow&&m.pushShadow(nt))}),m.setupLights(x._useLegacyLights);let et=new Set;return C.traverse(function(nt){let zt=nt.material;if(zt)if(Array.isArray(zt))for(let Ft=0;Ft<zt.length;Ft++){let Yt=zt[Ft];_e(Yt,K,nt),et.add(Yt)}else _e(zt,K,nt),et.add(zt)}),w.pop(),m=null,et},this.compileAsync=function(C,q,K=null){let et=this.compile(C,q,K);return new Promise(nt=>{function zt(){if(et.forEach(function(Ft){_t.get(Ft).currentProgram.isReady()&&et.delete(Ft)}),et.size===0){nt(C);return}setTimeout(zt,10)}J.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let ve=null;function ze(C){ve&&ve(C)}function Le(){un.stop()}function de(){un.start()}let un=new lf;un.setAnimationLoop(ze),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(C){ve=C,Zt.setAnimationLoop(C),C===null?un.stop():un.start()},Zt.addEventListener("sessionstart",Le),Zt.addEventListener("sessionend",de),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(q),q=Zt.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,q,T),m=Wt.get(C,w.length),m.init(),w.push(m),it.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X.setFromProjectionMatrix(it),Z=this.localClippingEnabled,$=Kt.init(this.clippingPlanes,Z),y=Ht.get(C,p.length),y.init(),p.push(y),Zn(C,q,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(O,G),this.info.render.frame++,$===!0&&Kt.beginShadows();let K=m.state.shadowsArray;if(gt.render(K,C,q),$===!0&&Kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(y,C),m.setupLights(x._useLegacyLights),q.isArrayCamera){let et=q.cameras;for(let nt=0,zt=et.length;nt<zt;nt++){let Ft=et[nt];ir(y,C,Ft,Ft.viewport)}}else ir(y,C,q);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(x,C,q),jt.resetDefaultState(),v=-1,_=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Zn(C,q,K,et){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){et&&ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(it);let Ft=dt.update(C),Yt=C.material;Yt.visible&&y.push(C,Ft,Yt,K,ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){let Ft=dt.update(C),Yt=C.material;if(et&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ut.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ut.copy(Ft.boundingSphere.center)),ut.applyMatrix4(C.matrixWorld).applyMatrix4(it)),Array.isArray(Yt)){let Qt=Ft.groups;for(let ue=0,se=Qt.length;ue<se;ue++){let re=Qt[ue],an=Yt[re.materialIndex];an&&an.visible&&y.push(C,Ft,an,K,ut.z,re)}}else Yt.visible&&y.push(C,Ft,Yt,K,ut.z,null)}}let zt=C.children;for(let Ft=0,Yt=zt.length;Ft<Yt;Ft++)Zn(zt[Ft],q,K,et)}function ir(C,q,K,et){let nt=C.opaque,zt=C.transmissive,Ft=C.transparent;m.setupLightsView(K),$===!0&&Kt.setGlobalState(x.clippingPlanes,K),zt.length>0&&en(nt,zt,q,K),et&&at.viewport(b.copy(et)),nt.length>0&&Ps(nt,q,K),zt.length>0&&Ps(zt,q,K),Ft.length>0&&Ps(Ft,q,K),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function en(C,q,K,et){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let zt=ht.isWebGL2;ct===null&&(ct=new _s(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?ko:Zi,minFilter:Oo,samples:zt?4:0})),x.getDrawingBufferSize(ot),zt?ct.setSize(ot.x,ot.y):ct.setSize(Za(ot.x),Za(ot.y));let Ft=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(S),A=x.getClearAlpha(),A<1&&x.setClearColor(16777215,.5),x.clear();let Yt=x.toneMapping;x.toneMapping=ks,Ps(C,K,et),U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct);let Qt=!1;for(let ue=0,se=q.length;ue<se;ue++){let re=q[ue],an=re.object,fi=re.geometry,vn=re.material,ls=re.group;if(vn.side===he&&an.layers.test(et.layers)){let qe=vn.side;vn.side=Xn,vn.needsUpdate=!0,Fn(an,K,et,fi,vn,ls),vn.side=qe,vn.needsUpdate=!0,Qt=!0}}Qt===!0&&(U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct)),x.setRenderTarget(Ft),x.setClearColor(S,A),x.toneMapping=Yt}function Ps(C,q,K){let et=q.isScene===!0?q.overrideMaterial:null;for(let nt=0,zt=C.length;nt<zt;nt++){let Ft=C[nt],Yt=Ft.object,Qt=Ft.geometry,ue=et===null?Ft.material:et,se=Ft.group;Yt.layers.test(K.layers)&&Fn(Yt,q,K,Qt,ue,se)}}function Fn(C,q,K,et,nt,zt){C.onBeforeRender(x,q,K,et,nt,zt),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),nt.onBeforeRender(x,q,K,et,C,zt),nt.transparent===!0&&nt.side===he&&nt.forceSinglePass===!1?(nt.side=Xn,nt.needsUpdate=!0,x.renderBufferDirect(K,q,et,nt,C,zt),nt.side=Bs,nt.needsUpdate=!0,x.renderBufferDirect(K,q,et,nt,C,zt),nt.side=he):x.renderBufferDirect(K,q,et,nt,C,zt),C.onAfterRender(x,q,K,et,nt,zt)}function oi(C,q,K){q.isScene!==!0&&(q=rt);let et=_t.get(C),nt=m.state.lights,zt=m.state.shadowsArray,Ft=nt.state.version,Yt=kt.getParameters(C,nt.state,zt,q,K),Qt=kt.getProgramCacheKey(Yt),ue=et.programs;et.environment=C.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(C.isMeshStandardMaterial?j:D).get(C.envMap||et.environment),ue===void 0&&(C.addEventListener("dispose",wt),ue=new Map,et.programs=ue);let se=ue.get(Qt);if(se!==void 0){if(et.currentProgram===se&&et.lightsStateVersion===Ft)return ge(C,Yt),se}else Yt.uniforms=kt.getUniforms(C),C.onBuild(K,Yt,x),C.onBeforeCompile(Yt,x),se=kt.acquireProgram(Yt,Qt),ue.set(Qt,se),et.uniforms=Yt.uniforms;let re=et.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(re.clippingPlanes=Kt.uniform),ge(C,Yt),et.needsLights=Li(C),et.lightsStateVersion=Ft,et.needsLights&&(re.ambientLightColor.value=nt.state.ambient,re.lightProbe.value=nt.state.probe,re.directionalLights.value=nt.state.directional,re.directionalLightShadows.value=nt.state.directionalShadow,re.spotLights.value=nt.state.spot,re.spotLightShadows.value=nt.state.spotShadow,re.rectAreaLights.value=nt.state.rectArea,re.ltc_1.value=nt.state.rectAreaLTC1,re.ltc_2.value=nt.state.rectAreaLTC2,re.pointLights.value=nt.state.point,re.pointLightShadows.value=nt.state.pointShadow,re.hemisphereLights.value=nt.state.hemi,re.directionalShadowMap.value=nt.state.directionalShadowMap,re.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,re.spotShadowMap.value=nt.state.spotShadowMap,re.spotLightMatrix.value=nt.state.spotLightMatrix,re.spotLightMap.value=nt.state.spotLightMap,re.pointShadowMap.value=nt.state.pointShadowMap,re.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.currentProgram=se,et.uniformsList=null,se}function Dt(C){if(C.uniformsList===null){let q=C.currentProgram.getUniforms();C.uniformsList=ro.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function ge(C,q){let K=_t.get(C);K.outputColorSpace=q.outputColorSpace,K.batching=q.batching,K.instancing=q.instancing,K.instancingColor=q.instancingColor,K.skinning=q.skinning,K.morphTargets=q.morphTargets,K.morphNormals=q.morphNormals,K.morphColors=q.morphColors,K.morphTargetsCount=q.morphTargetsCount,K.numClippingPlanes=q.numClippingPlanes,K.numIntersection=q.numClipIntersection,K.vertexAlphas=q.vertexAlphas,K.vertexTangents=q.vertexTangents,K.toneMapping=q.toneMapping}function xe(C,q,K,et,nt){q.isScene!==!0&&(q=rt),U.resetTextureUnits();let zt=q.fog,Ft=et.isMeshStandardMaterial?q.environment:null,Yt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ys,Qt=(et.isMeshStandardMaterial?j:D).get(et.envMap||Ft),ue=et.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,se=!!K.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),re=!!K.morphAttributes.position,an=!!K.morphAttributes.normal,fi=!!K.morphAttributes.color,vn=ks;et.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(vn=x.toneMapping);let ls=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,qe=ls!==void 0?ls.length:0,fe=_t.get(et),Zc=m.state.lights;if($===!0&&(Z===!0||C!==_)){let vi=C===_&&et.id===v;Kt.setState(et,C,vi)}let nn=!1;et.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Zc.state.version||fe.outputColorSpace!==Yt||nt.isBatchedMesh&&fe.batching===!1||!nt.isBatchedMesh&&fe.batching===!0||nt.isInstancedMesh&&fe.instancing===!1||!nt.isInstancedMesh&&fe.instancing===!0||nt.isSkinnedMesh&&fe.skinning===!1||!nt.isSkinnedMesh&&fe.skinning===!0||nt.isInstancedMesh&&fe.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&fe.instancingColor===!1&&nt.instanceColor!==null||fe.envMap!==Qt||et.fog===!0&&fe.fog!==zt||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==Kt.numPlanes||fe.numIntersection!==Kt.numIntersection)||fe.vertexAlphas!==ue||fe.vertexTangents!==se||fe.morphTargets!==re||fe.morphNormals!==an||fe.morphColors!==fi||fe.toneMapping!==vn||ht.isWebGL2===!0&&fe.morphTargetsCount!==qe)&&(nn=!0):(nn=!0,fe.__version=et.version);let sr=fe.currentProgram;nn===!0&&(sr=oi(et,q,nt));let fu=!1,bo=!1,Kc=!1,Bn=sr.getUniforms(),rr=fe.uniforms;if(at.useProgram(sr.program)&&(fu=!0,bo=!0,Kc=!0),et.id!==v&&(v=et.id,bo=!0),fu||_!==C){Bn.setValue(W,"projectionMatrix",C.projectionMatrix),Bn.setValue(W,"viewMatrix",C.matrixWorldInverse);let vi=Bn.map.cameraPosition;vi!==void 0&&vi.setValue(W,ut.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&Bn.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Bn.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,bo=!0,Kc=!0)}if(nt.isSkinnedMesh){Bn.setOptional(W,nt,"bindMatrix"),Bn.setOptional(W,nt,"bindMatrixInverse");let vi=nt.skeleton;vi&&(ht.floatVertexTextures?(vi.boneTexture===null&&vi.computeBoneTexture(),Bn.setValue(W,"boneTexture",vi.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}nt.isBatchedMesh&&(Bn.setOptional(W,nt,"batchingTexture"),Bn.setValue(W,"batchingTexture",nt._matricesTexture,U));let Jc=K.morphAttributes;if((Jc.position!==void 0||Jc.normal!==void 0||Jc.color!==void 0&&ht.isWebGL2===!0)&&Bt.update(nt,K,sr),(bo||fe.receiveShadow!==nt.receiveShadow)&&(fe.receiveShadow=nt.receiveShadow,Bn.setValue(W,"receiveShadow",nt.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(rr.envMap.value=Qt,rr.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),bo&&(Bn.setValue(W,"toneMappingExposure",x.toneMappingExposure),fe.needsLights&&Ut(rr,Kc),zt&&et.fog===!0&&Rt.refreshFogUniforms(rr,zt),Rt.refreshMaterialUniforms(rr,et,k,N,ct),ro.upload(W,Dt(fe),rr,U)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(ro.upload(W,Dt(fe),rr,U),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Bn.setValue(W,"center",nt.center),Bn.setValue(W,"modelViewMatrix",nt.modelViewMatrix),Bn.setValue(W,"normalMatrix",nt.normalMatrix),Bn.setValue(W,"modelMatrix",nt.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let vi=et.uniformsGroups;for(let jc=0,im=vi.length;jc<im;jc++)if(ht.isWebGL2){let pu=vi[jc];we.update(pu,sr),we.bind(pu,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function Ut(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Li(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,q,K){_t.get(C.texture).__webglTexture=q,_t.get(C.depthTexture).__webglTexture=K;let et=_t.get(C);et.__hasExternalTextures=!0,et.__hasExternalTextures&&(et.__autoAllocateDepthBuffer=K===void 0,et.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){let K=_t.get(C);K.__webglFramebuffer=q,K.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,K=0){T=C,R=q,M=K;let et=!0,nt=null,zt=!1,Ft=!1;if(C){let Qt=_t.get(C);Qt.__useDefaultFramebuffer!==void 0?(at.bindFramebuffer(W.FRAMEBUFFER,null),et=!1):Qt.__webglFramebuffer===void 0?U.setupRenderTarget(C):Qt.__hasExternalTextures&&U.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);let ue=C.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(Ft=!0);let se=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(se[q])?nt=se[q][K]:nt=se[q],zt=!0):ht.isWebGL2&&C.samples>0&&U.useMultisampledRTT(C)===!1?nt=_t.get(C).__webglMultisampledFramebuffer:Array.isArray(se)?nt=se[K]:nt=se,b.copy(C.viewport),H.copy(C.scissor),I=C.scissorTest}else b.copy(L).multiplyScalar(k).floor(),H.copy(z).multiplyScalar(k).floor(),I=Y;if(at.bindFramebuffer(W.FRAMEBUFFER,nt)&&ht.drawBuffers&&et&&at.drawBuffers(C,nt),at.viewport(b),at.scissor(H),at.setScissorTest(I),zt){let Qt=_t.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,Qt.__webglTexture,K)}else if(Ft){let Qt=_t.get(C.texture),ue=q||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qt.__webglTexture,K||0,ue)}v=-1},this.readRenderTargetPixels=function(C,q,K,et,nt,zt,Ft){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Yt=Yt[Ft]),Yt){at.bindFramebuffer(W.FRAMEBUFFER,Yt);try{let Qt=C.texture,ue=Qt.format,se=Qt.type;if(ue!==Ni&&Nt.convert(ue)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let re=se===ko&&(J.has("EXT_color_buffer_half_float")||ht.isWebGL2&&J.has("EXT_color_buffer_float"));if(se!==Zi&&Nt.convert(se)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(se===Ns&&(ht.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-et&&K>=0&&K<=C.height-nt&&W.readPixels(q,K,et,nt,Nt.convert(ue),Nt.convert(se),zt)}finally{let Qt=T!==null?_t.get(T).__webglFramebuffer:null;at.bindFramebuffer(W.FRAMEBUFFER,Qt)}}},this.copyFramebufferToTexture=function(C,q,K=0){let et=Math.pow(2,-K),nt=Math.floor(q.image.width*et),zt=Math.floor(q.image.height*et);U.setTexture2D(q,0),W.copyTexSubImage2D(W.TEXTURE_2D,K,0,0,C.x,C.y,nt,zt),at.unbindTexture()},this.copyTextureToTexture=function(C,q,K,et=0){let nt=q.image.width,zt=q.image.height,Ft=Nt.convert(K.format),Yt=Nt.convert(K.type);U.setTexture2D(K,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment),q.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,et,C.x,C.y,nt,zt,Ft,Yt,q.image.data):q.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,et,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,Ft,q.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,et,C.x,C.y,Ft,Yt,q.image),et===0&&K.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(C,q,K,et,nt=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let zt=C.max.x-C.min.x+1,Ft=C.max.y-C.min.y+1,Yt=C.max.z-C.min.z+1,Qt=Nt.convert(et.format),ue=Nt.convert(et.type),se;if(et.isData3DTexture)U.setTexture3D(et,0),se=W.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)U.setTexture2DArray(et,0),se=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,et.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,et.unpackAlignment);let re=W.getParameter(W.UNPACK_ROW_LENGTH),an=W.getParameter(W.UNPACK_IMAGE_HEIGHT),fi=W.getParameter(W.UNPACK_SKIP_PIXELS),vn=W.getParameter(W.UNPACK_SKIP_ROWS),ls=W.getParameter(W.UNPACK_SKIP_IMAGES),qe=K.isCompressedTexture?K.mipmaps[nt]:K.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,qe.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,qe.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,C.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,C.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?W.texSubImage3D(se,nt,q.x,q.y,q.z,zt,Ft,Yt,Qt,ue,qe.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(se,nt,q.x,q.y,q.z,zt,Ft,Yt,Qt,qe.data)):W.texSubImage3D(se,nt,q.x,q.y,q.z,zt,Ft,Yt,Qt,ue,qe),W.pixelStorei(W.UNPACK_ROW_LENGTH,re),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,an),W.pixelStorei(W.UNPACK_SKIP_PIXELS,fi),W.pixelStorei(W.UNPACK_SKIP_ROWS,vn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ls),nt===0&&et.generateMipmaps&&W.generateMipmap(se),at.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),at.unbindTexture()},this.resetState=function(){R=0,M=0,T=null,at.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ih?"display-p3":"srgb",e.unpackColorSpace=Ce.workingColorSpace===Rc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?mr:sf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===mr?Oe:ys}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},eh=class extends Go{};eh.prototype.isWebGL1Renderer=!0;var hc=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},uc=class extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var dc=class extends gi{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ln,h=Ln,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fc=class extends me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Jr=new be,Ud=new be,za=[],Nd=new ae,oE=new be,Co=new B,Po=new Ws,pc=class extends B{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,oE)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ae),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Jr),Nd.copy(t.boundingBox).applyMatrix4(Jr),this.boundingBox.union(Nd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Jr),Po.copy(t.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Co.geometry=this.geometry,Co.material=this.material,Co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(n),t.ray.intersectsSphere(Po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Jr),Ud.multiplyMatrices(n,Jr),Co.matrixWorld=Ud,Co.raycast(t,za);for(let o=0,a=za.length;o<a;o++){let c=za[o];c.instanceId=r,c.object=this,e.push(c)}za.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var $e=class extends Es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Od=new be,nh=new tc,Ua=new Ws,Na=new F,sn=class extends Tn{constructor(t=new ce,e=new $e){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,t.ray.intersectsSphere(Ua)===!1)return;Od.copy(s).invert(),nh.copy(t.ray).applyMatrix4(Od);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let m=l.getX(g);Na.fromBufferAttribute(u,m),kd(Na,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Na.fromBufferAttribute(u,g),kd(Na,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kd(i,t,e,n,s,r,o){let a=nh.distanceSqToPoint(i);if(a<e){let c=new F;nh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var Ti=class extends gi{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new yt:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,s=[],r=[],o=[],a=new F,c=new be;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(bn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(bn(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Vo=class extends Si{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new yt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ih=class extends Vo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Oa=new F,Al=new zh,Cl=new zh,Pl=new zh,sh=class extends Si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Oa.subVectors(s[0],s[1]).add(s[0]),l=Oa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Oa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Al.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,y,m),Cl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,y,m),Pl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Cl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Pl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Al.calc(c),Cl.calc(c),Pl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function aE(i,t){let e=1-i;return e*e*t}function cE(i,t){return 2*(1-i)*i*t}function lE(i,t){return i*i*t}function Uo(i,t,e,n){return aE(i,t)+cE(i,e)+lE(i,n)}function hE(i,t){let e=1-i;return e*e*e*t}function uE(i,t){let e=1-i;return 3*e*e*i*t}function dE(i,t){return 3*(1-i)*i*i*t}function fE(i,t){return i*i*i*t}function No(i,t,e,n,s){return hE(i,t)+uE(i,e)+dE(i,n)+fE(i,s)}var mc=class extends Si{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(No(t,s.x,r.x,o.x,a.x),No(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rh=class extends Si{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(No(t,s.x,r.x,o.x,a.x),No(t,s.y,r.y,o.y,a.y),No(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gc=class extends Si{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oh=class extends Si{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xc=class extends Si{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(t,s.x,r.x,o.x),Uo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ah=class extends Si{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(t,s.x,r.x,o.x),Uo(t,s.y,r.y,o.y),Uo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yc=class extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Fd(a,c.x,l.x,h.x,u.x),Fd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new yt().fromArray(s))}return this}},ch=Object.freeze({__proto__:null,ArcCurve:ih,CatmullRomCurve3:sh,CubicBezierCurve:mc,CubicBezierCurve3:rh,EllipseCurve:Vo,LineCurve:gc,LineCurve3:oh,QuadraticBezierCurve:xc,QuadraticBezierCurve3:ah,SplineCurve:yc}),lh=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ch[s.type]().fromJSON(s))}return this}},Wo=class extends lh{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new gc(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new xc(this.currentPoint.clone(),new yt(t,e),new yt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new mc(this.currentPoint.clone(),new yt(t,e),new yt(n,s),new yt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new yc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Vo(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},hh=class i extends ce{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=bn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new F,f=new yt,d=new F,g=new F,y=new F,m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let w=0;w<=e;w++){let x=n+w*h*s,E=Math.sin(x),R=Math.cos(x);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*E,u.y=t[M].y,u.z=t[M].x*R,o.push(u.x,u.y,u.z),f.x=w/e,f.y=M/(t.length-1),a.push(f.x,f.y);let T=c[3*M+0]*E,v=c[3*M+1],_=c[3*M+0]*R;l.push(T,v,_)}}for(let w=0;w<e;w++)for(let x=0;x<t.length-1;x++){let E=x+w*t.length,R=E,M=E+t.length,T=E+t.length+1,v=E+1;r.push(R,M,v),r.push(T,v,M)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},_c=class i extends hh{constructor(t=1,e=1,n=4,s=8){let r=new Wo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Ve=class i extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new F,h=new yt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ct=class i extends ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],m=n/2,p=0;w(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function w(){let E=new F,R=new F,M=0,T=(e-t)/n;for(let v=0;v<=r;v++){let _=[],b=v/r,H=b*(e-t)+t;for(let I=0;I<=s;I++){let S=I/s,A=S*c+a,P=Math.sin(A),N=Math.cos(A);R.x=H*P,R.y=-b*n+m,R.z=H*N,u.push(R.x,R.y,R.z),E.set(P,T,N).normalize(),f.push(E.x,E.y,E.z),d.push(S,1-b),_.push(g++)}y.push(_)}for(let v=0;v<s;v++)for(let _=0;_<r;_++){let b=y[_][v],H=y[_+1][v],I=y[_+1][v+1],S=y[_][v+1];h.push(b,H,S),h.push(H,I,S),M+=6}l.addGroup(p,M,0),p+=M}function x(E){let R=g,M=new yt,T=new F,v=0,_=E===!0?t:e,b=E===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let H=g;for(let I=0;I<=s;I++){let A=I/s*c+a,P=Math.cos(A),N=Math.sin(A);T.x=_*N,T.y=m*b,T.z=_*P,u.push(T.x,T.y,T.z),f.push(0,b,0),M.x=P*.5+.5,M.y=N*.5*b+.5,d.push(M.x,M.y),g++}for(let I=0;I<s;I++){let S=R+I,A=H+I;E===!0?h.push(A,A+1,S):h.push(A+1,A,S),v+=3}l.addGroup(p,v,E===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$t=class i extends Ct{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xo=class i extends ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let x=new F,E=new F,R=new F;for(let M=0;M<e.length;M+=3)d(e[M+0],x),d(e[M+1],E),d(e[M+2],R),c(x,E,R,w)}function c(w,x,E,R){let M=R+1,T=[];for(let v=0;v<=M;v++){T[v]=[];let _=w.clone().lerp(E,v/M),b=x.clone().lerp(E,v/M),H=M-v;for(let I=0;I<=H;I++)I===0&&v===M?T[v][I]=_:T[v][I]=_.clone().lerp(b,I/H)}for(let v=0;v<M;v++)for(let _=0;_<2*(M-v)-1;_++){let b=Math.floor(_/2);_%2===0?(f(T[v][b+1]),f(T[v+1][b]),f(T[v][b])):(f(T[v][b+1]),f(T[v+1][b+1]),f(T[v+1][b]))}}function l(w){let x=new F;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(w),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){let w=new F;for(let x=0;x<r.length;x+=3){w.x=r[x+0],w.y=r[x+1],w.z=r[x+2];let E=m(w)/2/Math.PI+.5,R=p(w)/Math.PI+.5;o.push(E,1-R)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){let x=o[w+0],E=o[w+2],R=o[w+4],M=Math.max(x,E,R),T=Math.min(x,E,R);M>.9&&T<.1&&(x<.2&&(o[w+0]+=1),E<.2&&(o[w+2]+=1),R<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function d(w,x){let E=w*3;x.x=t[E+0],x.y=t[E+1],x.z=t[E+2]}function g(){let w=new F,x=new F,E=new F,R=new F,M=new yt,T=new yt,v=new yt;for(let _=0,b=0;_<r.length;_+=9,b+=6){w.set(r[_+0],r[_+1],r[_+2]),x.set(r[_+3],r[_+4],r[_+5]),E.set(r[_+6],r[_+7],r[_+8]),M.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),v.set(o[b+4],o[b+5]),R.copy(w).add(x).add(E).divideScalar(3);let H=m(R);y(M,b+0,w,H),y(T,b+2,x,H),y(v,b+4,E,H)}}function y(w,x,E,R){R<0&&w.x===1&&(o[x]=w.x-1),E.x===0&&E.z===0&&(o[x]=R/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Ri=class i extends Xo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Oi=class extends Wo{constructor(t){super(t),this.uuid=Er(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Wo().fromJSON(s))}return this}},pE={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=mf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=_E(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return qo(r,o,e,a,c,d,0),o}};function mf(i,t,e,n,s){let r,o;if(s===PE(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Bd(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Bd(r,i[r],i[r+1],o);return o&&Cc(o,o.next)&&($o(o),o=o.next),o}function gr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cc(e,e.next)||Ye(e.prev,e,e.next)===0)){if($o(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&bE(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?gE(i,n,s,r):mE(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),$o(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=xE(gr(i),t,e),qo(i,t,e,n,s,r,2)):o===2&&yE(i,t,e,n,s,r):qo(gr(i),t,e,n,s,r,1);break}}}function mE(i){let t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&no(s,a,r,c,o,l,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gE(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ye(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,y=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=uh(d,g,t,e,n),w=uh(y,m,t,e,n),x=i.prevZ,E=i.nextZ;for(;x&&x.z>=p&&E&&E.z<=w;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&no(a,h,c,u,l,f,x.x,x.y)&&Ye(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=d&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&no(a,h,c,u,l,f,E.x,E.y)&&Ye(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&no(a,h,c,u,l,f,x.x,x.y)&&Ye(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=w;){if(E.x>=d&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&no(a,h,c,u,l,f,E.x,E.y)&&Ye(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function xE(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Cc(s,r)&&gf(s,n,n.next,r)&&Yo(s,r)&&Yo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),$o(n),$o(n.next),n=i=r),n=n.next}while(n!==i);return gr(n)}function yE(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&RE(o,a)){let c=xf(o,a);o=gr(o,o.next),c=gr(c,c.next),qo(o,t,e,n,s,r,0),qo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _E(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=mf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(SE(l));for(s.sort(EE),r=0;r<s.length;r++)e=ME(s[r],e);return e}function EE(i,t){return i.x-t.x}function ME(i,t){let e=vE(i,t);if(!e)return t;let n=xf(e,i);return gr(n,n.next),gr(e,e.next)}function vE(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&no(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Yo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&wE(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function wE(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function bE(i,t,e,n){let s=i;do s.z===0&&(s.z=uh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,TE(s)}function TE(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function uh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function SE(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function no(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function RE(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!AE(i,t)&&(Yo(i,t)&&Yo(t,i)&&CE(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||Cc(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cc(i,t){return i.x===t.x&&i.y===t.y}function gf(i,t,e,n){let s=Fa(Ye(i,t,e)),r=Fa(Ye(i,t,n)),o=Fa(Ye(e,n,i)),a=Fa(Ye(e,n,t));return!!(s!==r&&o!==a||s===0&&ka(i,e,t)||r===0&&ka(i,n,t)||o===0&&ka(e,i,n)||a===0&&ka(e,t,n))}function ka(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fa(i){return i>0?1:i<0?-1:0}function AE(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yo(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function CE(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xf(i,t){let e=new dh(i.i,i.x,i.y),n=new dh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bd(i,t,e,n){let s=new dh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function PE(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Gd(t),Vd(n,t);let o=t.length;e.forEach(Gd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Vd(n,e[c]);let a=pE.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Gd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var xr=class i extends ce{constructor(t=new Oi([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:IE,x,E=!1,R,M,T,v;p&&(x=p.getSpacedPoints(h),E=!0,f=!1,R=p.computeFrenetFrames(h,!1),M=new F,T=new F,v=new F),f||(m=0,d=0,g=0,y=0);let _=a.extractPoints(l),b=_.shape,H=_.holes;if(!Fs.isClockWise(b)){b=b.reverse();for(let W=0,Q=H.length;W<Q;W++){let J=H[W];Fs.isClockWise(J)&&(H[W]=J.reverse())}}let S=Fs.triangulateShape(b,H),A=b;for(let W=0,Q=H.length;W<Q;W++){let J=H[W];b=b.concat(J)}function P(W,Q,J){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(Q,J)}let N=b.length,k=S.length;function O(W,Q,J){let ht,at,Lt,_t=W.x-Q.x,U=W.y-Q.y,D=J.x-W.x,j=J.y-W.y,pt=_t*_t+U*U,mt=_t*j-U*D;if(Math.abs(mt)>Number.EPSILON){let dt=Math.sqrt(pt),kt=Math.sqrt(D*D+j*j),Rt=Q.x-U/dt,Ht=Q.y+_t/dt,Wt=J.x-j/kt,Kt=J.y+D/kt,gt=((Wt-Rt)*j-(Kt-Ht)*D)/(_t*j-U*D);ht=Rt+_t*gt-W.x,at=Ht+U*gt-W.y;let ie=ht*ht+at*at;if(ie<=2)return new yt(ht,at);Lt=Math.sqrt(ie/2)}else{let dt=!1;_t>Number.EPSILON?D>Number.EPSILON&&(dt=!0):_t<-Number.EPSILON?D<-Number.EPSILON&&(dt=!0):Math.sign(U)===Math.sign(j)&&(dt=!0),dt?(ht=-U,at=_t,Lt=Math.sqrt(pt)):(ht=_t,at=U,Lt=Math.sqrt(pt/2))}return new yt(ht/Lt,at/Lt)}let G=[];for(let W=0,Q=A.length,J=Q-1,ht=W+1;W<Q;W++,J++,ht++)J===Q&&(J=0),ht===Q&&(ht=0),G[W]=O(A[W],A[J],A[ht]);let L=[],z,Y=G.concat();for(let W=0,Q=H.length;W<Q;W++){let J=H[W];z=[];for(let ht=0,at=J.length,Lt=at-1,_t=ht+1;ht<at;ht++,Lt++,_t++)Lt===at&&(Lt=0),_t===at&&(_t=0),z[ht]=O(J[ht],J[Lt],J[_t]);L.push(z),Y=Y.concat(z)}for(let W=0;W<m;W++){let Q=W/m,J=d*Math.cos(Q*Math.PI/2),ht=g*Math.sin(Q*Math.PI/2)+y;for(let at=0,Lt=A.length;at<Lt;at++){let _t=P(A[at],G[at],ht);it(_t.x,_t.y,-J)}for(let at=0,Lt=H.length;at<Lt;at++){let _t=H[at];z=L[at];for(let U=0,D=_t.length;U<D;U++){let j=P(_t[U],z[U],ht);it(j.x,j.y,-J)}}}let X=g+y;for(let W=0;W<N;W++){let Q=f?P(b[W],Y[W],X):b[W];E?(T.copy(R.normals[0]).multiplyScalar(Q.x),M.copy(R.binormals[0]).multiplyScalar(Q.y),v.copy(x[0]).add(T).add(M),it(v.x,v.y,v.z)):it(Q.x,Q.y,0)}for(let W=1;W<=h;W++)for(let Q=0;Q<N;Q++){let J=f?P(b[Q],Y[Q],X):b[Q];E?(T.copy(R.normals[W]).multiplyScalar(J.x),M.copy(R.binormals[W]).multiplyScalar(J.y),v.copy(x[W]).add(T).add(M),it(v.x,v.y,v.z)):it(J.x,J.y,u/h*W)}for(let W=m-1;W>=0;W--){let Q=W/m,J=d*Math.cos(Q*Math.PI/2),ht=g*Math.sin(Q*Math.PI/2)+y;for(let at=0,Lt=A.length;at<Lt;at++){let _t=P(A[at],G[at],ht);it(_t.x,_t.y,u+J)}for(let at=0,Lt=H.length;at<Lt;at++){let _t=H[at];z=L[at];for(let U=0,D=_t.length;U<D;U++){let j=P(_t[U],z[U],ht);E?it(j.x,j.y+x[h-1].y,x[h-1].x+J):it(j.x,j.y,u+J)}}}$(),Z();function $(){let W=s.length/3;if(f){let Q=0,J=N*Q;for(let ht=0;ht<k;ht++){let at=S[ht];ot(at[2]+J,at[1]+J,at[0]+J)}Q=h+m*2,J=N*Q;for(let ht=0;ht<k;ht++){let at=S[ht];ot(at[0]+J,at[1]+J,at[2]+J)}}else{for(let Q=0;Q<k;Q++){let J=S[Q];ot(J[2],J[1],J[0])}for(let Q=0;Q<k;Q++){let J=S[Q];ot(J[0]+N*h,J[1]+N*h,J[2]+N*h)}}n.addGroup(W,s.length/3-W,0)}function Z(){let W=s.length/3,Q=0;ct(A,Q),Q+=A.length;for(let J=0,ht=H.length;J<ht;J++){let at=H[J];ct(at,Q),Q+=at.length}n.addGroup(W,s.length/3-W,1)}function ct(W,Q){let J=W.length;for(;--J>=0;){let ht=J,at=J-1;at<0&&(at=W.length-1);for(let Lt=0,_t=h+m*2;Lt<_t;Lt++){let U=N*Lt,D=N*(Lt+1),j=Q+ht+U,pt=Q+at+U,mt=Q+at+D,dt=Q+ht+D;ut(j,pt,mt,dt)}}}function it(W,Q,J){c.push(W),c.push(Q),c.push(J)}function ot(W,Q,J){rt(W),rt(Q),rt(J);let ht=s.length/3,at=w.generateTopUV(n,s,ht-3,ht-2,ht-1);lt(at[0]),lt(at[1]),lt(at[2])}function ut(W,Q,J,ht){rt(W),rt(Q),rt(ht),rt(Q),rt(J),rt(ht);let at=s.length/3,Lt=w.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);lt(Lt[0]),lt(Lt[1]),lt(Lt[3]),lt(Lt[1]),lt(Lt[2]),lt(Lt[3])}function rt(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function lt(W){r.push(W.x),r.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return LE(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ch[s.type]().fromJSON(s)),new i(n,t.options)}},IE={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new yt(r,o),new yt(a,c),new yt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new yt(o,1-c),new yt(l,1-u),new yt(f,1-g),new yt(y,1-p)]:[new yt(a,1-c),new yt(h,1-u),new yt(d,1-g),new yt(m,1-p)]}};function LE(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var xn=class i extends Xo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ze=class i extends Xo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ms=class i extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new F,g=new yt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let w=p+m,x=w,E=w+n+1,R=w+n+2,M=w+1;a.push(x,E,M),a.push(E,R,M)}}this.setIndex(a),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ec=class i extends ce{constructor(t=new Oi([new yt(0,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(o,2));function l(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;Fs.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let w=g[m];Fs.isClockWise(w)===!0&&(g[m]=w.reverse())}let y=Fs.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let w=g[m];d=d.concat(w)}for(let m=0,p=d.length;m<p;m++){let w=d[m];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let m=0,p=y.length;m<p;m++){let w=y[m],x=w[0]+u,E=w[1]+u,R=w[2]+u;n.push(x,E,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return HE(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function HE(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var te=class i extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new F,f=new F,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let w=[],x=p/n,E=0;p===0&&o===0?E=.5/e:p===n&&c===Math.PI&&(E=-.5/e);for(let R=0;R<=e;R++){let M=R/e;u.x=-t*Math.cos(s+M*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+M*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(M+E,1-x),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let x=h[p][w+1],E=h[p][w],R=h[p+1][w],M=h[p+1][w+1];(p!==0||o>0)&&d.push(x,E,M),(p!==n-1||c<Math.PI)&&d.push(E,R,M)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var yn=class i extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new F,u=new F,f=new F;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let y=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let y=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,w=(s+1)*d+g;o.push(y,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var It=class extends Es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Mc=class extends Es{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ba(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function DE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ho=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fh=class extends ho{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qu,endingEnd:qu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yu:r=t,a=2*e-n;break;case $u:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yu:o=t,c=2*n-e;break;case $u:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*y+.5*g,E=d*m-d*y;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+w*o[l+R]+x*o[c+R]+E*o[u+R];return r}},ph=class extends ho{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},mh=class extends ho{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ki=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ba(e,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ba(t.times,Array),values:Ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Va:e=this.InterpolantFactoryMethodDiscrete;break;case Wa:e=this.InterpolantFactoryMethodLinear;break;case rl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&DE(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rl,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Wa;var yr=class extends ki{};yr.prototype.ValueTypeName="bool";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=Va;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends ki{};gh.prototype.ValueTypeName="color";var xh=class extends ki{};xh.prototype.ValueTypeName="number";var yh=class extends ho{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Vs.slerpFlat(r,0,o,l-a,o,l,c);return r}},Zo=class extends ki{InterpolantFactoryMethodLinear(t){return new yh(this.times,this.values,this.getValueSize(),t)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.DefaultInterpolation=Wa;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var _r=class extends ki{};_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=Va;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends ki{};_h.prototype.ValueTypeName="vector";var Eh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},zE=new Eh,Mh=class{constructor(t){this.manager=t!==void 0?t:zE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ko=class extends Tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},vc=class extends Ko{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Il=new be,Wd=new F,Xd=new F,wc=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wd),Xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xd),e.updateMatrixWorld(),Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var qd=new be,Io=new F,Ll=new F,vh=class extends wc{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Io.setFromMatrixPosition(t.matrixWorld),n.position.copy(Io),Ll.copy(n.position),Ll.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ll),n.updateMatrixWorld(),s.makeTranslation(-Io.x,-Io.y,-Io.z),qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd)}},Ke=class extends Ko{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},wh=class extends wc{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bc=class extends Ko{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new wh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Tc=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Yd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Yd(){return(typeof performance>"u"?Date:performance).now()}var Uh="\\[\\]\\.:\\/",UE=new RegExp("["+Uh+"]","g"),Nh="[^"+Uh+"]",NE="[^"+Uh.replace("\\.","")+"]",OE=/((?:WC+[\/:])*)/.source.replace("WC",Nh),kE=/(WCOD+)?/.source.replace("WCOD",NE),FE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),BE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),GE=new RegExp("^"+OE+kE+FE+BE+"$"),VE=["material","materials","bones","map"],bh=class{constructor(t,e,n){let s=n||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(UE,"")}static parseTrackName(t){let e=GE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);VE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=bh;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);var ti=0,Qo=-9,Yn=1340,ai=4,Pc=64,Oh=i=>Math.min(1,Math.max(0,i)),ee=(i,t,e)=>i+(t-i)*e,At=(i,t,e)=>{let n=Oh((e-i)/(t-i));return n*n*(3-2*n)};function Lc(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ic(i,t){let e=Math.imul(i,374761393)+Math.imul(t,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function jo(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Ic(e,n),l=Ic(e+1,n),h=Ic(e,n+1),u=Ic(e+1,n+1);return ee(ee(c,l,o),ee(h,u,o),a)}function Xt(i,t){return jo(i,t)*.55+jo(i*2.1+7,t*2.1+3)*.3+jo(i*4.3+1,t*4.3+9)*.15}function Mr(i,t,e,n,s,r){let o=s-e,a=r-n,c=Oh(((i-e)*o+(t-n)*a)/(o*o+a*a));return Math.hypot(i-(e+o*c),t-(n+a*c))}function po(i,t,e){let n=1/0;for(let s=0;s<e.length-1;s++)n=Math.min(n,Mr(i,t,e[s][0],e[s][1],e[s+1][0],e[s+1][1]));return n}var fo=32,yf=1e9,_f=new WeakMap;function WE(i){let t=_f.get(i);if(t)return t;t=new Map;for(let e of i)for(let n=0;n<e.length-1;n++){let[s,r]=e[n],[o,a]=e[n+1],c=[s,r,o,a],l=Math.floor(Math.min(s,o)/fo)-1,h=Math.floor(Math.max(s,o)/fo)+1,u=Math.floor(Math.min(r,a)/fo)-1,f=Math.floor(Math.max(r,a)/fo)+1;for(let d=l;d<=h;d++)for(let g=u;g<=f;g++){let y=d*1e5+g;t.has(y)||t.set(y,[]),t.get(y).push(c)}}return _f.set(i,t),t}var Pe=(i,t,e)=>{let n=WE(e).get(Math.floor(i/fo)*1e5+Math.floor(t/fo));if(!n)return yf;let s=yf;for(let[r,o,a,c]of n)s=Math.min(s,Mr(i,t,r,o,a,c));return s},vs=(i,t,e,n,s,r)=>r*At(s,0,Math.hypot(i-e,t-n));function $n(i,[t,e,n,s,r,o]){return a=>i+t*Math.sin(3*a+e)+n*Math.sin(5*a+s)+r*Math.sin(7*a+o)}function Ef(i){let t=i.map(d=>{let g=Math.ceil(d.maxR/ai)*ai,y=g*2/ai,m=y+1,p=d.cx-g,w=d.cz-g,x=new Float32Array(m*m);for(let E=0;E<m;E++)for(let R=0;R<m;R++)x[E*m+R]=d.height(p+R*ai,w+E*ai);return{island:d,half:g,segs:y,N:m,x0:p,z0:w,heights:x}});function e(d,g){for(let y of t){let m=(d-y.x0)/ai,p=(g-y.z0)/ai;if(m<0||p<0||m>=y.segs||p>=y.segs)continue;let w=Math.floor(m),x=Math.floor(p),E=m-w,R=p-x,M=x*y.N+w,T=y.heights;return ee(ee(T[M],T[M+1],E),ee(T[M+y.N],T[M+y.N+1],E),R)}return Qo}function n(d,g){let y=ai;return Math.hypot(e(d+y,g)-e(d-y,g),e(d,g+y)-e(d,g-y))/(2*y)}function s(d,g){for(let y of t){let m=d-y.island.cx,p=g-y.island.cz;if(Math.hypot(m,p)<y.island.edge(Math.atan2(p,m))*1.02)return y.island}return null}let r=new Mt,o=new st,a=new It({vertexColors:!0,flatShading:!0,roughness:.95});for(let d of t){let g=new Float32Array(d.N*d.N*3);d.colors=g;for(let y=0;y<d.N;y++)for(let m=0;m<d.N;m++){let p=d.x0+m*ai,w=d.z0+y*ai,x=y*d.N+m;d.island.color(p,w,d.heights[x],n(p,w),o),g[x*3]=o.r,g[x*3+1]=o.g,g[x*3+2]=o.b}for(let y=0;y<d.segs;y+=Pc)for(let m=0;m<d.segs;m+=Pc){let p=Math.min(Pc,d.segs-m),w=Math.min(Pc,d.segs-y),x=!1;for(let _=0;_<=w&&!x;_++)for(let b=0;b<=p;b++)if(d.heights[(y+_)*d.N+m+b]>Qo+.5){x=!0;break}if(!x)continue;let E=new Float32Array((p+1)*(w+1)*3),R=new Float32Array((p+1)*(w+1)*3);for(let _=0;_<=w;_++)for(let b=0;b<=p;b++){let H=(y+_)*d.N+m+b,I=(_*(p+1)+b)*3;E[I]=d.x0+(m+b)*ai,E[I+1]=d.heights[H],E[I+2]=d.z0+(y+_)*ai,R[I]=g[H*3],R[I+1]=g[H*3+1],R[I+2]=g[H*3+2]}let M=[];for(let _=0;_<w;_++)for(let b=0;b<p;b++){let H=_*(p+1)+b,I=H+1,S=H+p+1,A=S+1;M.push(H,S,I,I,S,A)}let T=new ce;T.setAttribute("position",new me(E,3)),T.setAttribute("color",new me(R,3)),T.setIndex(M),T.computeVertexNormals(),T.computeBoundingSphere();let v=new B(T,a);v.receiveShadow=!0,r.add(v)}}let c=8,l=Math.round(Yn*2/c)+1,h=new Uint8Array(l*l);for(let d=0;d<l;d++)for(let g=0;g<l;g++){let y=e(-Yn+g*c,-Yn+d*c);h[d*l+g]=Math.round(Oh((y+12)/36)*255)}let u=new dc(h,l,l,Ch,Zi);u.unpackAlignment=1,u.magFilter=jn,u.minFilter=jn,u.needsUpdate=!0;function f(d,g,y){for(let m of t){let p=Math.round((d-m.x0)/ai),w=Math.round((g-m.z0)/ai);if(p<0||w<0||p>m.segs||w>m.segs)continue;let x=(w*m.N+p)*3;return y.setRGB(m.colors[x],m.colors[x+1],m.colors[x+2])}return y.setRGB(0,0,0)}return{group:r,heightTex:u,sample:e,slopeAt:n,islandAt:s,colorAt:f}}var Jo=5;function Mf(i,t){let e=Math.round(Yn*2/Jo),n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d"),r=s.createImageData(e,e),o=new st,a=new st("#7fd8d0"),c=new st("#3b7fc0");for(let l=0;l<e;l++)for(let h=0;h<e;h++){let u=h*Jo-Yn+Jo/2,f=l*Jo-Yn+Jo/2,d=t(u,f);d<ti?o.copy(a).lerp(c,At(0,6,-d)):i(u,f,o).offsetHSL(0,0,At(4,30,d)*.08);let g=(l*e+h)*4;o.convertLinearToSRGB(),r.data[g]=o.r*255,r.data[g+1]=o.g*255,r.data[g+2]=o.b*255,r.data[g+3]=255}return s.putImageData(r,0,0),n}var XE=40,qE=80;function vf(i){let t=i.length,e=new Float64Array(t),n=new Float64Array(t),s=i.flatMap(c=>c.paths),r=new st("#c9a66e"),o=new st;function a(c,l){let h=-1/0;for(let f=0;f<t;f++){let d=i[f],g=c-d.cx,y=l-d.cz,m=Math.hypot(g,y);if(m>760){e[f]=-1e9;continue}e[f]=d.edge(Math.atan2(y,g))-m+(jo(c/110+f*17.3,l/110-f*9.1)-.5)*qE,e[f]>h&&(h=e[f])}if(h===-1/0)return n.fill(0),n[0]=1,-1e9;let u=0;for(let f=0;f<t;f++)n[f]=Math.exp((e[f]-h)/XE),u+=n[f];for(let f=0;f<t;f++)n[f]/=u;return h}return{id:"continent",name:"\u5927\u9678",cx:0,cz:0,maxR:0,height(c,l){let h=a(c,l);if(h<-40)return Qo;let u=0,f=0;for(let d=0;d<t;d++)n[d]<.004||(u+=n[d]*i[d].land(c,l),f+=n[d]);u/=f;for(let d of i)d.carve&&(u=d.carve(c,l,u));return ee(Qo,u,At(-30,55,h))},color(c,l,h,u,f){a(c,l),f.setRGB(0,0,0);let d=0;for(let g=0;g<t;g++)n[g]<.01||(i[g].color(c,l,h,u,o),f.r+=o.r*n[g],f.g+=o.g*n[g],f.b+=o.b*n[g],d+=n[g]);if(f.multiplyScalar(1/d),h>=1.7){let g=Pe(c,l,s);g<2.6&&f.lerp(r,At(2.6,1.6,g)*.75)}return f},weightOf(c,l,h){return a(l,h),n[c]},regionIndexAt(c,l){a(c,l);let h=0;for(let u=1;u<t;u++)n[u]>n[h]&&(h=u);return h}}}var xt=(i,t={})=>new It({color:i,roughness:.9,flatShading:!0,...t}),vt=i=>(i.castShadow=i.receiveShadow=!0,i);function cn(i,t){return{box(e,n,s,r,o,a,c,l,h="part"){if(t.push({box:new ae(new F(r-e/2,o,a-s/2),new F(r+e/2,o+n,a+s/2)),color:l,kind:h}),!c)return null;let u=vt(new B(new Et(e,n,s),c));return u.position.set(r,o+n/2,a),i.add(u),u},cyl(e,n,s,r,o,a,c,l="part",h=10){let u=null;return a&&(u=vt(new B(new Ct(e,e,n,h),a)),u.position.set(s,r+n/2,o),i.add(u)),t.push({box:new ae(new F(s-e,r,o-e),new F(s+e,r+n,o+e)),cyl:{x:s,z:o,r:e},color:c,kind:l}),u}}}function ln(i,t,e){let n=new pc(i,t,e);n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1;let s=new Tn,r=0;return{mesh:n,add(o,a,c,l=1,h=l,u=l,f=0,d=0,g=0,y=null,m="XYZ"){return r>=e?-1:(s.position.set(o,a,c),s.rotation.set(f,d,g,m),s.scale.set(l,h,u),s.updateMatrix(),n.setMatrixAt(r,s.matrix),y&&n.setColorAt(r,y),r++)},addMatrix(o){r>=e||n.setMatrixAt(r++,o)},finish(){return n.count=r,n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n}}}var Dv=Math.sqrt(10),Xs=720,Ai=620,We={east:20,west:-10,south:-30,north:-40};var Fh=i=>380+26*Math.sin(3*i+.5)+14*Math.sin(7*i+2)+8*Math.sin(11*i+1),YE=(i,t)=>[Math.cos(i)*(Fh(i)-t),Math.sin(i)*(Fh(i)-t)],yi=new yt(44,10).normalize(),mo=new yt(-.39,.92).normalize(),Ji={name:"\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730",x:-164,z:-215,r:24,h:22},[Tf,Sf]=YE(2.2,22),ke={altar:{name:"\u661F\u306E\u796D\u58C7",x:0,z:0,r:16,h:5},village:{name:"\u6F6E\u98A8\u306E\u6751 \u30B7\u30AA\u30AB\u30BC",x:190,z:152,r:30,h:4.5},plateau:Ji,lake:{name:"\u93E1\u306E\u6E56",x:Ji.x+yi.x*51,z:Ji.z+yi.y*51,r:20},cave:{name:"\u3072\u304B\u308A\u306E\u6D1E\u7A9F",x:-202,z:114,r:13,h:5},windmill:{name:"\u98A8\u8ECA\u306E\u4E18",x:262,z:-88,r:14},lighthouse:{name:"\u5CAC\u306E\u706F\u53F0",x:Tf,z:Sf,r:10},stones:{name:"\u53E4\u306E\u74B0\u72B6\u5217\u77F3",x:-255,z:-60,r:15,h:7}},Ki={x:Ji.x+yi.x*18,z:Ji.z+yi.y*18,r:4},qs=ke.lake,wf=[[qs.x,qs.z],[-70,-225],[-20,-250],[40,-275],[100,-300],[170,-330],[260,-380],[340,-440]],Hc=[Ji.x+mo.x*62,Ji.z+mo.y*62],kh=[Ji.x+mo.x*20,Ji.z+mo.y*20],An=ke.village,Dc=ke.cave,Rn=ke.windmill,xi=ke.stones,bf=[[[0,0],[60,50],[130,105],[An.x,An.z]],[[An.x,An.z],[An.x+12,An.z+48],[An.x+12,An.z+190]],[[0,0],[-30,-80],[-70,-150],[qs.x+12,qs.z+20]],[[0,0],[-60,-40],[-130,-110],Hc],[Hc,[(Hc[0]+kh[0])/2+4,(Hc[1]+kh[1])/2],kh],[[0,0],[-80,40],[-150,90],[Dc.x+13,Dc.z]],[[0,0],[90,-20],[180,-60],[Rn.x-12,Rn.z+3]],[[0,0],[-60,90],[-150,200],[Tf+8,Sf-8]],[[-130,-110],[-200,-80],[xi.x+12,xi.z]],[[0,0],[130,We.east-5],[260,We.east],[480,We.east]],[[-60,-40],[-150,-20],[-300,We.west],[-480,We.west]],[[0,0],[-20,100],[We.south,250],[We.south,480]],[[0,0],[-20,-120],[We.north,-240],[We.north,-480]],[[0,0],[150,-140],[330,-330]],[[An.x,An.z],[270,250],[360,360]],[[0,0],[-120,150],[-330,330]],[[-130,-110],[-230,-230],[-340,-330]]],Fi={sandDeep:new st("#c7ae78"),sand:new st("#f0dba3"),grass:new st("#7cbf5a"),grassDark:new st("#5f9f45"),grassHigh:new st("#93bf62"),rock:new st("#9a8f86"),rockDark:new st("#7d7470"),path:new st("#cfab72"),plaza:new st("#dccdaa")},$E=new st,Rf={id:"start",name:"\u59CB\u307E\u308A\u306E\u8349\u539F",cx:0,cz:0,edge:Fh,maxR:465,places:ke,paths:bf,sanctuaries:[{x:ke.altar.x,z:ke.altar.z,r:14},{x:An.x,z:An.z,r:36}],land(i,t){let e=Math.hypot(i,t),n=3.5+Xt(i/45,t/45)*4.5;n+=Xt(i/150+20,t/150)*9*At(70,220,e),n+=vs(i,t,Rn.x,Rn.z,90,13),n+=vs(i,t,-38,234,76,9),n+=vs(i,t,107,-120,50,4),n+=vs(i,t,250,230,70,8);let s=Ji,r=i-s.x,o=t-s.z,a=Math.hypot(r,o),c=a>.001?(r*mo.x+o*mo.y)/a:0,l=ee(8,42,At(.82,.97,c)),h=s.h+(Xt(i/12,t/12)-.5)*.8;n=ee(n,h,At(s.r+l,s.r,a)),n=ee(n,s.h-1.3,At(Ki.r+1.5,Ki.r-1,Math.hypot(i-Ki.x,t-Ki.z)));let u=Mr(i,t,Ki.x,Ki.z,s.x+yi.x*25,s.z+yi.y*25);a<s.r+1&&(n=Math.min(n,ee(s.h-.8,n,At(.8,2.2,u))));for(let f of["altar","village","cave","stones"]){let d=ke[f];n=ee(n,d.h,At(d.r+16,d.r,Math.hypot(i-d.x,t-d.z)))}return n},carve(i,t,e){return e=ee(e,-3.5,At(qs.r+10,qs.r-3,Math.hypot(i-qs.x,t-qs.z))),ee(e,-2.5,At(22,5,po(i,t,wf)))},color(i,t,e,n,s){if(e<1.7)s.copy(Fi.sandDeep).lerp(Fi.sand,At(-2,1.2,e));else{let r=Xt(i/9,t/9);s.copy(Fi.grassDark).lerp(Fi.grass,r),s.lerp(Fi.grassHigh,At(12,22,e)*.8),s.lerp(Fi.sand,At(2.4,1.7,e));let o=Pe(i,t,bf);o<2.6&&s.lerp($E.copy(Fi.path).offsetHSL(0,0,(r-.5)*.06),At(2.6,1.6,o)),Math.hypot(i-An.x,t-An.z)<14&&s.lerp(Fi.plaza,At(14,12,Math.hypot(i-An.x,t-An.z))),Math.hypot(i-Dc.x,t-Dc.z)<12&&s.copy(Fi.rockDark)}return n>.75&&s.lerp(Xt(i/4,t/4)>.5?Fi.rock:Fi.rockDark,At(.75,1.1,n)),s},nature:{trees:{style:"round",count:320,minH:2.6,avoidRiver:wf,accentChance:.15,leafColors:[5216842,6665558,4164178,15902402]},palms:90,rocks:180,grass:{count:9e3,color:6266693},flowers:{count:2500,colors:[16774384,16766044,16752575,12166911]},avoid:[...Object.values(ke).map(i=>[i.x,i.z,i.r]),[An.x+12,An.z+175,12]]},enemies:{kumodama:{count:30},ishimori:{count:7}},decorate(i,t){let e=new Mt,n=cn(e,i),s=t(Rn.x,Rn.z),r=xt(15919832);n.cyl(4.2,14,Rn.x,s-.5,Rn.z,null,15919832);let o=vt(new B(new Ct(3,4.4,14,8),r));o.position.set(Rn.x,s+6.5,Rn.z);let a=vt(new B(new $t(4,4.5,8),xt(14246986)));a.position.set(Rn.x,s+15.7,Rn.z);let c=new B(new Et(1.6,2.6,.3),xt(8015414)),l=Math.atan2(-Rn.x,-Rn.z);c.position.set(Rn.x+Math.sin(l)*4.1,s+1.3,Rn.z+Math.cos(l)*4.1),c.rotation.y=l,e.add(o,a,c);let h=new Mt;h.position.set(Rn.x+Math.sin(l)*3.6,s+12,Rn.z+Math.cos(l)*3.6),h.rotation.y=l;let u=xt(9067067),f=xt(16774884,{side:he}),d=new B(new Ct(.6,.6,.8,8),u);d.rotation.x=Math.PI/2,h.add(d);for(let A=0;A<4;A++){let P=new Mt;P.rotation.z=A/4*Math.PI*2;let N=vt(new B(new Et(.35,10,.25),u));N.position.y=5;let k=vt(new B(new Sn(2,7.5),f));k.position.set(1.15,5.8,.05),P.add(N,k),h.add(P)}e.add(h);let[g,y]=[ke.lighthouse.x,ke.lighthouse.z],m=t(g,y),p=xt(12432806),w=vt(new B(new Ct(4.2,4.6,2.5,10),p));w.position.set(g,m+.8,y),e.add(w);for(let A=0;A<6;A++){let P=3.2-A*.18,N=3.2-(A+1)*.18,k=vt(new B(new Ct(N,P,3.4,12),xt(A%2?14246986:16447214)));k.position.set(g,m+2+A*3.4+1.7,y),e.add(k)}let x=m+2+6*3.4,E=vt(new B(new Ct(3,3,.4,12),xt(4869737)));E.position.set(g,x+.2,y);let R=new B(new Ct(1.4,1.4,2.2,10),new It({color:16773544,emissive:16765024,emissiveIntensity:1.4}));R.position.set(g,x+1.5,y);let M=vt(new B(new $t(1.9,2,10),xt(4869737)));M.position.set(g,x+3.6,y),e.add(E,R,M),n.cyl(3.6,27,g,m-.5,y,null,14246986);let T=new Mt;T.position.set(g,x+1.5,y);let v=new Ee({color:16773544,transparent:!0,opacity:.22,depthWrite:!1,blending:Qn,side:he});for(let A of[1,-1]){let P=new B(new $t(6,60,16,1,!0),v);P.rotation.z=A*Math.PI/2,P.position.x=A*30,T.add(P)}e.add(T);let _=new Ke(16769184,40,40);_.position.set(g,x+1.5,y),e.add(_);let b=xi.h,H=xt(11116950);for(let A=0;A<12;A++){let P=A/12*Math.PI*2,N=xi.x+Math.cos(P)*11,k=xi.z+Math.sin(P)*11,O=A%4===3?2.2:4.5+A%3*.6,G=vt(new B(new Et(1.5,O,.9),H));G.position.set(N,b+O/2-.3,k),G.rotation.y=-P+Math.PI/2,e.add(G),n.cyl(.9,O,N,b-.5,k,null,11116950)}for(let A of[0,4,8]){let P=(A+.5)/12*Math.PI*2,N=vt(new B(new Et(1.2,.8,6.4),H));N.position.set(xi.x+Math.cos(P)*11,b+5.2,xi.z+Math.sin(P)*11),N.rotation.y=-P,e.add(N)}let I=vt(new B(new Ct(2.2,2.4,.9,10),H));I.position.set(xi.x,b+.45,xi.z),e.add(I),n.cyl(2.3,.9,xi.x,b-.5,xi.z,null,11116950);let S=new B(new Ze(.6,0),new It({color:13154559,emissive:9400288,emissiveIntensity:1.2}));return S.position.set(xi.x,b+2,xi.z),e.add(S),{group:e,update(A,P){h.rotateZ(A*.6),T.rotation.y+=A*.7,S.rotation.y+=A,S.position.y=b+2+Math.sin(P*1.5)*.25}}}};var Fe=(i,t={})=>new It({color:i,roughness:.85,flatShading:!0,...t}),ci=i=>(i.castShadow=i.receiveShadow=!0,i);function Af(i,t,e,n){let s=new Oi;s.moveTo(-i/2-.6,0),s.lineTo(0,e),s.lineTo(i/2+.6,0),s.lineTo(-i/2-.6,0);let r=new xr(s,{depth:t+1.2,bevelEnabled:!1});return r.translate(0,0,-(t+1.2)/2),ci(new B(r,n))}function ta({w:i,d:t,wall:e,roof:n,trim:s}){let r=new Mt,o=4.4,a=ci(new B(new Et(i,o,t),Fe(e)));a.position.y=o/2,r.add(a);let c=Fe(s),l=ci(new B(new Et(i+.4,.5,t+.4),Fe(11050900)));l.position.y=.25,r.add(l);for(let x of[-1,1])for(let E of[-1,1]){let R=new B(new Et(.35,o,.35),c);R.position.set(x*(i/2),o/2,E*(t/2)),r.add(R)}let h=new B(new Et(i+.2,.3,t+.2),c);h.position.y=o,r.add(h);let u=Af(i,t,2.8,Fe(n));u.position.y=o,r.add(u);let f=ci(new B(new Et(.8,2.4,.8),Fe(11773594)));f.position.set(i*.25,o+2.2,-t*.2),r.add(f);let d=new B(new Et(1.3,2.3,.15),Fe(8015414));d.position.set(0,1.4,t/2+.05);let g=new B(new te(.08,6,4),Fe(16040539,{metalness:.6}));g.position.set(.4,1.4,t/2+.15),r.add(d,g);let y=Fe(16773572,{emissive:16762992,emissiveIntensity:.35}),m=Fe(s),p=(x,E,R)=>{let M=new Mt,T=new B(new Et(1.1,1.1,.1),y),v=new B(new Et(1.3,.12,.14),m),_=new B(new Et(.12,1.3,.14),m),b=new B(new Et(1.4,.15,.4),m);b.position.y=-.65,M.add(T,v,_,b),M.position.set(x,2.6,E),M.rotation.y=R,r.add(M)};p(-i/2+1.4,t/2+.05,0),p(i/2-1.4,t/2+.05,0),p(i/2+.05,0,Math.PI/2),p(-i/2-.05,0,-Math.PI/2);let w=new B(new Et(1.2,.35,.35),Fe(9067067));w.position.set(-i/2+1.4,1.95,t/2+.3),r.add(w);for(let x=0;x<3;x++){let E=new B(new xn(.16,0),Fe([16752575,16766044,16774384][x]));E.position.set(-i/2+1+x*.4,2.25,t/2+.3),r.add(E)}return r}function Cf(i,t){let e=new Mt,n=ke.village,s=n.h,r=(I,S="house",A=11565653)=>{I.updateMatrixWorld(!0),i.push({box:new ae().setFromObject(I),color:A,kind:S})},o=[[-19,-10,Math.PI/2,8,7,16050904,14246986,9067067],[0,-20,0,9,7,15393778,4165532,7030320],[19,-11,-Math.PI/2,8,7,16181192,5929156,9067067],[-19,11,Math.PI/2,7,6,15331812,14721340,7030320],[20,12,-Math.PI/2,8,6.5,16050904,10117040,9067067]];for(let[I,S,A,P,N,k,O,G]of o){let L=ta({w:P,d:N,wall:k,roof:O,trim:G});L.position.set(n.x+I,s,n.z+S),L.rotation.y=A,e.add(L);let z=new B(new Et(P+.4,7,N+.4));z.position.set(n.x+I,s+3.5,n.z+S),z.rotation.y=A,r(z,"house",O)}let a=new Mt,c=Fe(12432806),l=ci(new B(new Ct(1.6,1.7,1.1,12,1,!0),c));l.material.side=he,l.position.y=.55;let h=ci(new B(new yn(1.6,.2,6,16),c));h.rotation.x=Math.PI/2,h.position.y=1.1;let u=new B(new Ve(1.5,16),Fe(3899328,{roughness:.2}));u.rotation.x=-Math.PI/2,u.position.y=.5,a.add(l,h,u);let f=Fe(9067067);for(let I of[-1,1]){let S=ci(new B(new Et(.25,3.2,.25),f));S.position.set(I*1.5,1.6,0),a.add(S)}let d=Af(2.6,2.2,1.1,Fe(14246986));d.position.y=3.1,d.rotation.y=Math.PI/2;let g=new B(new Ct(.3,.25,.45,8),f);g.position.set(0,2.2,0),a.add(d,g),a.position.set(n.x,s,n.z),e.add(a),i.push({box:new ae(new F(n.x-1.8,s,n.z-1.8),new F(n.x+1.8,s+4,n.z+1.8)),cyl:{x:n.x,z:n.z,r:1.8},color:12432806,kind:"house"});let y=(I,S,A,P)=>{let N=new Mt,k=ci(new B(new Et(4,1.1,1.6),f));k.position.y=.55,N.add(k);for(let L of[-1,1])for(let z of[-1,1]){let Y=new B(new Et(.18,3,.18),f);Y.position.set(L*1.9,1.5,z*.9-.3),N.add(Y)}for(let L=0;L<6;L++){let z=new B(new Et(.7333333333333334,.12,2.6),Fe(L%2?16777215:P));z.position.set(-2.2+4.4/12+L*4.4/6,3.05,-.3),z.rotation.x=.25,z.castShadow=!0,N.add(z)}let O=[16739162,16766044,9426027,16753212,10471144];for(let L=0;L<7;L++){let z=new B(new xn(.22,0),Fe(O[L%O.length]));z.position.set(-1.5+L*.5,1.28,L%2*.35-.15),N.add(z)}N.position.set(I,s,S),N.rotation.y=A,e.add(N);let G=new B(new Et(4,2,1.6));G.position.set(I,s+1,S),G.rotation.y=A,r(G,"house",P)};y(n.x+8,n.z+7,-Math.PI/2,2864544),y(n.x-8,n.z+7,Math.PI/2,14698330);let m=Fe(10119748),p=Fe(12884588),w=[["barrel",5,-14],["barrel",6.2,-13.2],["crate",-5,-14],["crate",-5,-12.7,1.1],["barrel",13,3],["crate",-13,-3],["barrel",-14,20],["crate",14,21]];for(let[I,S,A,P=0]of w){let N=ci(I==="barrel"?new B(new Ct(.55,.55,1.2,10),m):new B(new Et(1.1,1.1,1.1),p));N.position.set(n.x+S,s+.6+P,n.z+A),N.rotation.y=S,e.add(N),P||i.push({box:new ae(new F(n.x+S-.6,s,n.z+A-.6),new F(n.x+S+.6,s+1.2,n.z+A+.6)),cyl:{x:n.x+S,z:n.z+A,r:.6},color:10119748,kind:"prop"})}let x=Fe(16770728,{emissive:16762992,emissiveIntensity:1.2}),E=[[-9,-6],[9,-6],[-9,16],[9,16],[3,26]];for(let[I,S]of E){let A=n.x+I,P=n.z+S,N=ci(new B(new Ct(.12,.16,4,6),Fe(4869737)));N.position.set(A,s+2,P);let k=new B(new Ze(.35,0),x);k.position.set(A,s+4.2,P),e.add(N,k),i.push({box:new ae(new F(A-.2,s,P-.2),new F(A+.2,s+4,P+.2)),cyl:{x:A,z:P,r:.2},color:4869737,kind:"prop"})}let R=new Mt;for(let I of[-1,1]){let S=ci(new B(new Et(.25,3.2,.25),f));S.position.set(I*1.8,1.6,0),R.add(S)}let M=(()=>{let I=document.createElement("canvas");I.width=256,I.height=96;let S=I.getContext("2d");S.fillStyle="#c49a6c",S.fillRect(0,0,256,96),S.fillStyle="#5a3a24",S.font='bold 40px "M PLUS Rounded 1c", sans-serif',S.textAlign="center",S.textBaseline="middle",S.fillText("\u30B7\u30AA\u30AB\u30BC\u6751",128,50);let A=new Ti(I);return A.colorSpace=Oe,A})(),T=new B(new Et(4,1.4,.2),[f,f,f,f,new It({map:M}),new It({map:M})]);T.position.y=2.6,R.add(T),R.position.set(n.x-22,t(n.x-22,n.z-10),n.z-10),R.rotation.y=Math.atan2(-(n.x-22),-(n.z-10)),e.add(R);let v=n.x+12,_=n.z+40;for(;_<n.z+400&&t(v,_)>.9;)_+=1;let b=_<n.z+400,H=new Mt;if(b){_-=4;let I=28,S=1.4,A=Fe(11897438);for(let O=0;O<I/1.2;O++){let G=ci(new B(new Et(4,.25,1.1),A));G.position.set(v+(Math.random()-.5)*.1,S-.12,_+O*1.2+.6),e.add(G)}for(let O=0;O<=I;O+=4)for(let G of[-1,1]){let L=ci(new B(new Ct(.2,.2,5,6),Fe(8015414)));L.position.set(v+G*1.9,S-2,_+O),e.add(L)}i.push({box:new ae(new F(v-2,S-.5,_),new F(v+2,S,_+I)),color:11897438,kind:"pier"});let P=new Oi;P.moveTo(-1.3,.8),P.lineTo(1.3,.8),P.lineTo(.9,0),P.lineTo(-.9,0),P.lineTo(-1.3,.8);let N=ci(new B(new xr(P,{depth:5,bevelEnabled:!1}),Fe(14246986)));N.position.z=-2.5;let k=new B(new Et(2.4,.15,.6),Fe(16050904));k.position.y=.6,H.add(N,k),H.position.set(v+4.2,ti-.3,_+I-5),e.add(H)}return{group:e,update(I){H.position.y=ti-.3+Math.sin(I*1.3)*.15,H.rotation.z=Math.sin(I*1.1)*.05}}}var Cn=Xs,ws=0,go={greatTree:{name:"\u5343\u5E74\u6A39",x:Cn,z:ws,r:22,h:8},mushroom:{name:"\u30AD\u30CE\u30B3\u306E\u8C37",x:Cn+133,z:ws+152,r:30},spring:{name:"\u5996\u7CBE\u306E\u6CC9",x:Cn-150,z:ws-170,r:14,h:5},cabin:{name:"\u6728\u3053\u308A\u306E\u5C0F\u5C4B",x:Cn+170,z:ws-140,r:16,h:6}},rn=go.greatTree,Hn=go.mushroom,_n=go.spring,Te=go.cabin,Pf=[[[Cn-420,We.east],[Cn-200,We.east-2],[Cn-60,5],[rn.x-22,rn.z]],[[Cn-60,5],[Cn+40,80],[Hn.x-20,Hn.z-14]],[[Cn-200,We.east-2],[Cn-180,-90],[_n.x-4,_n.z+16]],[[Cn-60,5],[Cn+60,-70],[Te.x-16,Te.z+4]]],ji={sand:new st("#e6d3a0"),sandDeep:new st("#c4ad7c"),moss:new st("#5f9a4a"),dark:new st("#3f7a3c"),clearing:new st("#86c263"),valley:new st("#6f8a6a"),path:new st("#a8845a"),rock:new st("#7f7f72")},If={id:"forest",name:"\u6DF1\u7DD1\u306E\u68EE",cx:Cn,cz:ws,edge:$n(420,[26,1.2,16,.3,10,2.4]),maxR:480,places:go,paths:Pf,sanctuaries:[],land(i,t){let e=4+Xt(i/35,t/35)*6+Xt(i/140,t/140+9)*10;e+=vs(i,t,Cn+174,ws-63,82,8),e+=vs(i,t,Cn-60,ws+200,90,9),e+=vs(i,t,Cn-230,ws+90,70,7);for(let n of[rn,_n,Te])e=ee(e,n.h,At(n.r+16,n.r,Math.hypot(i-n.x,t-n.z)));return e=ee(e,3,At(Hn.r+16,Hn.r-4,Math.hypot(i-Hn.x,t-Hn.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(ji.sandDeep).lerp(ji.sand,At(-2,1.2,e));let r=Xt(i/8,t/8);s.copy(ji.dark).lerp(ji.moss,r),s.lerp(ji.sand,At(2.4,1.7,e)),s.lerp(ji.clearing,At(rn.r+6,rn.r-6,Math.hypot(i-rn.x,t-rn.z))*.8),s.lerp(ji.clearing,At(_n.r+6,_n.r-2,Math.hypot(i-_n.x,t-_n.z))*.7),s.lerp(ji.valley,At(Hn.r+8,Hn.r-6,Math.hypot(i-Hn.x,t-Hn.z)));let o=Pe(i,t,Pf);return o<2.4&&s.lerp(ji.path,At(2.4,1.4,o)),n>.75&&s.lerp(ji.rock,At(.75,1.1,n)),s},nature:{trees:{style:"round",count:1250,leafColors:[4160060,3107642,5214021,5937744],trunkColor:7030320},palms:30,rocks:130,rockColor:8355698,grass:{count:9500,color:5214015},flowers:{count:2500,colors:[13625599,16777215,10473727]},avoid:Object.values(go).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E2\u30EA\u30C0\u30DE",tint:5214042,mult:1.6,count:34},ishimori:{name:"\u30B3\u30B1\u30A4\u30EF",tint:7307098,mult:1.6,count:11}},decorate(i,t,e){let n=new Mt,s=cn(n,i),r=rn.h,o=xt(7031347,{roughness:1}),a=vt(new B(new Ct(3.6,6.5,34,10),o));a.position.set(rn.x,r+17,rn.z),n.add(a),s.cyl(6,40,rn.x,r-1,rn.z,null,7031347);for(let k=0;k<7;k++){let O=k/7*Math.PI*2+.3,G=vt(new B(new $t(1.6,9,6),o));G.position.set(rn.x+Math.cos(O)*7,r+1,rn.z+Math.sin(O)*7),G.rotation.set(Math.sin(O)*1.2,0,-Math.cos(O)*1.2),n.add(G)}let c=[xt(4164165),xt(5216842),xt(3111488)];for(let k=0;k<12;k++){let O=e()*Math.PI*2,G=k<3?0:6+e()*10,L=9+e()*6,z=vt(new B(new xn(1,0),c[k%3]));z.scale.setScalar(L),z.position.set(rn.x+Math.cos(O)*G,r+32+e()*12-G*.3,rn.z+Math.sin(O)*G),z.rotation.set(e()*3,e()*3,0),n.add(z)}let l=xt(13616822),h=vt(new B(new Et(2.4,1.2,1.6),l));h.position.set(rn.x-9,r+.6,rn.z),h.rotation.y=Math.PI/2,n.add(h),s.cyl(1.4,1.2,rn.x-9,r,rn.z,null,13616822);let u=new B(new te(.4,12,8),new It({color:13172656,emissive:9429104,emissiveIntensity:1.3}));u.position.set(rn.x-9,r+1.7,rn.z),n.add(u);let f=[new It({color:10483434,emissive:4183744,emissiveIntensity:.9,flatShading:!0}),new It({color:16759008,emissive:13656232,emissiveIntensity:.8,flatShading:!0}),new It({color:16773544,emissive:14725184,emissiveIntensity:.7,flatShading:!0})],d=xt(15919832);for(let k=0;k<32;k++){let O=e()*Math.PI*2,G=e()*(Hn.r+6),L=Hn.x+Math.cos(O)*G,z=Hn.z+Math.sin(O)*G,Y=t(L,z),X=.8+e()*2.8,$=vt(new B(new Ct(.25*X,.35*X,2*X,8),d));$.position.set(L,Y+X,z);let Z=vt(new B(new te(1.1*X,12,6,0,Math.PI*2,0,Math.PI/2),f[k%3]));Z.scale.y=.7,Z.position.set(L,Y+2*X-.1,z),n.add($,Z),X>1.4&&s.cyl(.35*X,2*X+.6,L,Y-.5,z,null,f[k%3].color.getHex())}let g=new Ke(8384736,60,45);g.position.set(Hn.x,t(Hn.x,Hn.z)+5,Hn.z),n.add(g);let y=new B(new Ve(8,28),new It({color:10483434,emissive:4175552,emissiveIntensity:.6,transparent:!0,opacity:.85,roughness:.1}));y.rotation.x=-Math.PI/2,y.position.set(_n.x,_n.h+.25,_n.z),n.add(y);let m=xt(13616822);for(let k=0;k<14;k++){let O=k/14*Math.PI*2,G=.7+e()*.5,L=vt(new B(new Ri(G,0),m));L.position.set(_n.x+Math.cos(O)*8.8,_n.h+G*.4,_n.z+Math.sin(O)*8.8),n.add(L)}let p=40,w=new Float32Array(p*3),x=new ce;x.setAttribute("position",new me(w,3));let E=new sn(x,new $e({color:16771327,size:.45,transparent:!0,opacity:.9,depthWrite:!1}));E.frustumCulled=!1,n.add(E);let R=new Ke(12124144,25,20);R.position.set(_n.x,_n.h+2,_n.z),n.add(R);let M=ta({w:8,d:6.5,wall:10119748,roof:5929540,trim:5913124});M.position.set(Te.x,Te.h,Te.z),M.rotation.y=-Math.PI/2,n.add(M);let T=new B(new Et(8.4,7,6.9));T.position.set(Te.x,Te.h+3.5,Te.z),T.rotation.y=-Math.PI/2,T.updateMatrixWorld(!0),i.push({box:new ae().setFromObject(T),color:5929540,kind:"house"});let v=xt(9067067);for(let k=0;k<3;k++)for(let O=0;O<4-k;O++){let G=vt(new B(new Ct(.4,.4,3.2,8),v));G.rotation.x=Math.PI/2,G.position.set(Te.x-8+O*.85+k*.42,Te.h+.4+k*.72,Te.z+7),n.add(G)}i.push({box:new ae(new F(Te.x-8.5,Te.h-.5,Te.z+5.3),new F(Te.x-4.9,Te.h+2,Te.z+8.7)),color:9067067,kind:"prop"});let _=vt(new B(new Ct(.8,.95,.9,10),v));_.position.set(Te.x-7,Te.h+.45,Te.z-5);let b=new B(new Ct(.07,.07,1.4,6),xt(7030320));b.position.set(Te.x-7,Te.h+1.4,Te.z-5),b.rotation.z=.4;let H=new B(new Et(.5,.35,.08),xt(12634320,{metalness:.6}));H.position.set(Te.x-6.8,Te.h+1,Te.z-5),n.add(_,b,H),s.cyl(.95,.9,Te.x-7,Te.h-.2,Te.z-5,null,9067067);let I=180,S=new Float32Array(I*3),A=[];for(let k=0;k<I;k++){let O=e()*Math.PI*2,G=8+e()*60,L=Cn+Math.cos(O)*G,z=ws+Math.sin(O)*G;A.push({x:L,z,y:t(L,z)+1+e()*4,p:e()*10})}let P=new ce;P.setAttribute("position",new me(S,3));let N=new sn(P,new $e({color:14679946,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return N.frustumCulled=!1,n.add(N),{group:n,update(k,O){u.position.y=r+1.7+Math.sin(O*2)*.15;for(let G=0;G<I;G++){let L=A[G];S[G*3]=L.x+Math.sin(O*.7+L.p)*1.5,S[G*3+1]=L.y+Math.sin(O*1.3+L.p*2)*.8,S[G*3+2]=L.z+Math.cos(O*.6+L.p)*1.5}P.attributes.position.needsUpdate=!0,N.material.opacity=.6+Math.sin(O*3)*.3;for(let G=0;G<p;G++){let L=O*.6+G/p*Math.PI*2,z=3+G%5*1.1;w[G*3]=_n.x+Math.cos(L*(1+G%3*.2))*z,w[G*3+1]=_n.h+1+Math.sin(O*2+G)*.8+G%4*.6,w[G*3+2]=_n.z+Math.sin(L*(1+G%3*.2))*z}x.attributes.position.needsUpdate=!0,y.material.emissiveIntensity=.5+Math.sin(O*1.5)*.2}}}};var zc=(i,t,e=6)=>new Ct(i,t,1,e).translate(0,.5,0),li={trunk:zc(.45,.7),pineTrunk:zc(.35,.5),cone:new $t(1,1,7).translate(0,.5,0),blob:new xn(1,0),cactus:zc(.5,.55,8),cactusTop:new te(.5,8,5,0,Math.PI*2,0,Math.PI/2),branch:zc(.12,.22,5),rock:new Ri(1,0),blade:new $t(.18,.9,3),flower:new xn(.22,0),palmSeg:new Ct(.3,.36,1.25,6),frond:new $t(.9,4.2,3,1,!0).translate(0,2.1,0),nut:new te(.28,6,5)};function Bh(i){let t=ln(li.palmSeg,xt(11108954),i*6),e=ln(li.frond,xt(5221973,{side:he}),i*7),n=ln(li.nut,xt(7030320),i*3);return{add(s,r,o,a,c,l){let h=[],u=new yt(a,c).normalize().multiplyScalar(.35+l()*.3),f=new F;for(let d=0;d<6;d++){let g=d/6,y=s+u.x*g*g*4,m=r+d*1.15+.6,p=o+u.y*g*g*4;h.push({mesh:t.mesh,index:t.add(y,m,p,1-d*.05,1,1-d*.05,u.y*g*.6,0,-u.x*g*.6)}),f.set(y,m+.7,p)}for(let d=0;d<7;d++)h.push({mesh:e.mesh,index:e.add(f.x,f.y,f.z,1,1,.25,0,d/7*Math.PI*2,1.15+l()*.25,null,"YXZ")});for(let d=0;d<3;d++)h.push({mesh:n.mesh,index:n.add(f.x+Math.cos(d*2.1)*.4,f.y-.4,f.z+Math.sin(d*2.1)*.4)});return h},finish(s){s.add(t.finish(),e.finish(),n.finish())}}}function Lf(i,t,e,n,s,r=()=>1,o=1){let a=i.nature,c=[],l=(x,E)=>s()<r(x,E),h=new Mt,u=i.maxR,f=a.avoid||[],d=()=>[i.cx+(s()-.5)*2*u,i.cz+(s()-.5)*2*u],g=(x,E,R)=>f.some(([M,T,v])=>Math.hypot(x-M,E-T)<v+R),y=(x,E,R,M,T,v,_)=>{let b={box:new ae(new F(x-R,M,E-R),new F(x+R,M+T,E+R)),cyl:{x,z:E,r:R},color:v,kind:_};return t.push(b),b},m=(x,E,R,M,T,v)=>{c.push({x,z:E,y:R,h:M,region:i,parts:T.filter(_=>_.index>=0),collider:v})},p=a.trees;if(p&&p.count){let x=p.count,E=xt(p.trunkColor??9067067,{roughness:1}),R=(p.leafColors||[5216842]).map(b=>xt(b)),M=R.map(b=>ln(p.style==="pine"?li.cone:li.blob,b,x*3)),T=ln(p.style==="pine"?li.pineTrunk:p.style==="cactus"?li.cactus:li.trunk,p.style==="cactus"?R[0]:E,x*(p.style==="cactus"?3:1)),v=p.style==="cactus"?ln(li.cactusTop,R[0],x*3):p.style==="dead"?ln(li.branch,E,x*3):p.snowy?ln(li.cone,xt(16054523),x*3):null,_=0;for(let b=0;_<x&&b<x*40;b++){let[H,I]=d(),S=e(H,I);if(S<(p.minH??2.6)||S>(p.maxH??999)||n(H,I)>(p.maxSlope??.45)||g(H,I,4)||Pe(H,I,i.paths)<4||p.avoidRiver&&po(H,I,p.avoidRiver)<10||!l(H,I))continue;_++;let A=p.accentChance&&s()<p.accentChance?R.length-1:Math.floor(s()*(R.length-(p.accentChance?1:0))),P,N=[],k=(G,...L)=>N.push({mesh:G.mesh,index:G.add(...L)}),O;if(p.style==="round"){P=4+s()*3,k(T,H,S-.3,I,1,P,1);let G=2+Math.floor(s()*2);for(let L=0;L<G;L++){let z=2.4+s()*1.4-L*.4;k(M[A],H+(s()-.5)*1.5,S+P+L*1.8,I+(s()-.5)*1.5,z,z,z,s()*3,s()*3,s()*3)}O=y(H,I,.7,S-1,P+3,R[A].color.getHex(),"tree")}else if(p.style==="pine"){P=7+s()*5,k(T,H,S-.3,I,1,2.2,1);for(let G=0;G<3;G++){let L=(2.6-G*.7)*(P/10),z=P*.42,Y=S+1.6+G*P*.26;k(M[A],H,Y,I,L,z,L,0,s()*3,0),v&&k(v,H,Y+z*.55,I,L*.55,z*.45,L*.55,0,s()*3,0)}O=y(H,I,.6,S-1,P+2,R[A].color.getHex(),"tree")}else if(p.style==="cactus"){P=2.5+s()*2.2,k(T,H,S-.2,I,1,P,1),k(v,H,S-.2+P,I);let G=1+Math.floor(s()*2);for(let L=0;L<G;L++){let z=s()*Math.PI*2+L*Math.PI,Y=H+Math.cos(z)*.9,X=I+Math.sin(z)*.9,$=S+P*(.35+s()*.25),Z=1+s()*1.2;k(T,Y,$,X,.6,Z,.6),k(v,Y,$+Z,X,.6,.6,.6)}O=y(H,I,.8,S-1,P+1,R[0].color.getHex(),"tree")}else if(p.style==="dead"){P=4+s()*3,k(T,H,S-.3,I,.8,P,.8);for(let G=0;G<2;G++){let L=s()*Math.PI*2;k(v,H,S+P*(.5+G*.2),I,1,1.6+s()*1.5,1,Math.cos(L)*.9,0,Math.sin(L)*.9)}O=y(H,I,.5,S-1,P+1,3813424,"tree")}m(H,I,S,P,N,O)}h.add(T.finish()),M.forEach(b=>h.add(b.finish())),v&&h.add(v.finish())}if(a.palms){let x=Bh(a.palms),E=0;for(let R=0;E<a.palms&&R<a.palms*300;R++){let[M,T]=d(),v=e(M,T);if(v<1||v>2.6||g(M,T,2)||Pe(M,T,i.paths)<5||!l(M,T))continue;E++;let _=e(M-3,T)-e(M+3,T),b=e(M,T-3)-e(M,T+3),H=x.add(M,v-.2,T,_||1,b,s);m(M,T,v,7,H,y(M,T,.45,v-1,7,5221973,"tree"))}x.finish(h)}if(a.rocks){let x=ln(li.rock,xt(a.rockColor??10327971),a.rocks),E=0;for(let R=0;E<a.rocks&&R<a.rocks*80;R++){let[M,T]=d(),v=e(M,T);if(v<.3||g(M,T,3)||Pe(M,T,i.paths)<3||n(M,T)<.35&&s()>.35||!l(M,T))continue;E++;let _=.8+s()*1.8;x.add(M,v+_*.3,T,_*1.3,_,_*1.1,s(),s()*3,s()),y(M,T,_*1.1,v-.5,_*1.3,a.rockColor??10327971,"rock")}h.add(x.finish())}let w=(x,E,R,M,T)=>{let v=ln(x,E,R);v.mesh.castShadow=!1;let _=0,b=T?.map(H=>new st(H));for(let H=0;_<R&&H<R*20;H++){let[I,S]=d(),A=e(I,S);if(A<2.2||n(I,S)>.5||Pe(I,S,i.paths)<2.5||g(I,S,-2)||!l(I,S))continue;let P=.7+s()*.6;v.add(I,A+M,S,P,P,P,0,s()*3,(s()-.5)*.4,b?b[Math.floor(s()*b.length)]:null),_++}h.add(v.finish())};return a.grass?.count&&w(li.blade,xt(a.grass.color,{flatShading:!1}),Math.round(a.grass.count*o),.35),a.flowers?.count&&w(li.flower,xt(16777215),Math.round(a.flowers.count*o),.3,a.flowers.colors),{group:h,trees:c}}var Gi=0,En=Xs,xo={oasis:{name:"\u98A8\u5F85\u3061\u306E\u30AA\u30A2\u30B7\u30B9",x:Gi+95,z:En+47,r:20},temple:{name:"\u7802\u306E\u795E\u6BBF",x:Gi-114,z:En-63,r:16,h:5},arch:{name:"\u5CA9\u306E\u30A2\u30FC\u30C1",x:Gi+40,z:En-190,r:14},camp:{name:"\u968A\u5546\u306E\u91CE\u55B6\u5730",x:Gi-170,z:En+130,r:16,h:4}},Dn=xo.oasis,je=xo.temple,Bi=xo.arch,Pn=xo.camp,Gh=[[Gi+133,En-152,22,17],[Gi-164,En+133-60,24,14],[Gi+183,En+196,18,22],[Gi-38,En+247,15,12],[Gi+260,En+40,20,16],[Gi-250,En-40,18,15]],Hf=[[[We.south,En-420],[We.south,En-250],[-60,En-120],[je.x+8,je.z-14]],[[-60,En-120],[20,En-20],[Dn.x-22,Dn.z-10]],[[We.south,En-250],[Bi.x-10,Bi.z-20],[Bi.x,Bi.z+20]],[[-60,En-120],[-130,En+40],[Pn.x+10,Pn.z-14]]],Qi={sand:new st("#ecd08e"),sandShade:new st("#d9b872"),sandDeep:new st("#c9a96c"),red1:new st("#c4704a"),red2:new st("#a85a3c"),red3:new st("#d99a6c"),green:new st("#7cbf5a"),path:new st("#c09058"),stone:new st("#d8c7a0")},Df={id:"desert",name:"\u967D\u708E\u306E\u7802\u6F20",cx:Gi,cz:En,edge:$n(420,[24,2.1,18,.8,10,1.5]),maxR:480,places:xo,paths:Hf,sanctuaries:[],land(i,t){let e=Xt(i/60,t/60),n=3+(Math.sin(i*.07+t*.02+e*6)*.5+.5)*3.2+Xt(i/25,t/25)*2+Xt(i/160,t/160+4)*8;for(let[s,r,o,a]of Gh)n=ee(n,a+6+(Xt(i/10,t/10)-.5),At(o+5,o,Math.hypot(i-s,t-r)));for(let s of[je,Pn])n=ee(n,s.h,At(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return n=ee(n,-2,At(Dn.r+10,Dn.r-5,Math.hypot(i-Dn.x,t-Dn.z))),n},color(i,t,e,n,s){if(e<1.7)return s.copy(Qi.sandDeep).lerp(Qi.sand,At(-2,1.2,e));if(s.copy(Qi.sandShade).lerp(Qi.sand,Xt(i/14,t/14)),s.offsetHSL(0,0,Math.sin(i*.9+t*.35+Xt(i/5,t/5)*4)*.015),e>15||n>.7){let a=Math.floor(e/2.2)%3;s.copy(a===0?Qi.red1:a===1?Qi.red2:Qi.red3)}let r=Math.hypot(i-Dn.x,t-Dn.z);r<Dn.r+9&&s.lerp(Qi.green,At(Dn.r+9,Dn.r+3,r)),Math.hypot(i-je.x,t-je.z)<je.r-2&&s.lerp(Qi.stone,.6);let o=Pe(i,t,Hf);return o<2.4&&s.lerp(Qi.path,At(2.4,1.4,o)*.7),s},nature:{trees:{style:"cactus",count:350,leafColors:[6266709],minH:2.4,maxSlope:.4},rocks:210,rockColor:13208164,grass:{count:4200,color:13218666},avoid:[...Object.values(xo).map(i=>[i.x,i.z,i.r+6]),...Gh.map(([i,t,e])=>[i,t,e+6])]},enemies:{kumodama:{name:"\u30B9\u30CA\u30C0\u30DE",tint:13214827,mult:2.2,count:34},ishimori:{name:"\u30B9\u30CA\u30E2\u30EA",tint:11565653,mult:2.2,count:11}},decorate(i,t,e){let n=new Mt,s=cn(n,i),r=xt(14733222),o=xt(12890250),a=je.h,c=vt(new B(new Et(22,.8,18),o));c.position.set(je.x,a-.1,je.z),n.add(c),i.push({box:new ae().setFromObject(c),color:12890250,kind:"part"});let l=[8,8,3,8,5,8,8,2.5,8,6];for(let I=0;I<10;I++){let S=I<5?-1:1,A=je.x-8+I%5*4,P=je.z+S*7,N=l[I];if(s.cyl(.9,N,A,a+.3,P,r,14733222,"part",8),N>=8){let k=vt(new B(new Et(2.2,.6,2.2),o));k.position.set(A,a+.3+N+.3,P),n.add(k)}}let h=vt(new B(new Et(13,.9,2.2),o));h.position.set(je.x-2,a+9.3,je.z-7),n.add(h),s.box(18,9,1.6,je.x,a+.3,je.z-11,r,14733222);let u=new B(new Et(4.5,6,.3),xt(9071172));u.position.set(je.x,a+3.3,je.z-10.1),n.add(u);let f=new B(new Ve(1.2,12),new It({color:16766826,emissive:14721072,emissiveIntensity:.8}));f.position.set(je.x,a+7.2,je.z-10.15),n.add(f);let d=vt(new B(new Et(4,4.5,4),r));d.position.set(je.x+13,a+1.2,je.z+2),d.rotation.set(.15,-.5,.1),n.add(d),s.cyl(2.8,4,je.x+13,a-.5,je.z+2,null,14733222);let g=new It({color:10483434,emissive:4183744,emissiveIntensity:1});for(let I of[-1,1]){let S=new B(new Et(.8,.3,.1),g);S.position.set(I*.9,.6,2.02),d.add(S)}let y=Bh(18);for(let I=0;I<18;I++){let S=I/18*Math.PI*2+e()*.3,A=Dn.r+3+e()*6,P=Dn.x+Math.cos(S)*A,N=Dn.z+Math.sin(S)*A,k=t(P,N);k<.6||(y.add(P,k-.2,N,-Math.cos(S),-Math.sin(S),e),s.cyl(.45,7,P,k-1,N,null,5221973,"tree"))}y.finish(n);let m=xt(7315274);for(let I=0;I<70;I++){let S=e()*Math.PI*2,A=Dn.r-2+e()*4,P=Dn.x+Math.cos(S)*A,N=Dn.z+Math.sin(S)*A,k=new B(new $t(.08,1.8,3),m);k.position.set(P,Math.max(t(P,N),0)+.8,N),k.rotation.z=(e()-.5)*.3,n.add(k)}let p=xt(12873802),w=t(Bi.x,Bi.z);for(let I of[-1,1]){let S=Bi.x+I*7,A=vt(new B(new Ct(2.2,3,12,7),p));A.position.set(S,w+5.5,Bi.z),n.add(A),s.cyl(2.6,12,S,w-1,Bi.z,null,12873802)}let x=vt(new B(new yn(7,2.2,7,14,Math.PI),xt(11558972)));x.position.set(Bi.x,w+10.5,Bi.z),n.add(x);let E=Pn.h,R=[14246986,2864544,16040539];for(let I=0;I<3;I++){let S=I/3*Math.PI*2+.4,A=Pn.x+Math.cos(S)*8,P=Pn.z+Math.sin(S)*8,N=vt(new B(new $t(3.4,4.5,6),xt(R[I])));N.position.set(A,E+2.25,P);let k=new B(new Sn(1.4,2.2),xt(5913124,{side:he})),O=Math.atan2(Pn.x-A,Pn.z-P);k.position.set(A+Math.sin(O)*2.1,E+1.1,P+Math.cos(O)*2.1),k.rotation.y=O,n.add(N,k),s.cyl(3,4.5,A,E-.5,P,null,R[I],"house")}let M=xt(7030320);for(let I=0;I<4;I++){let S=vt(new B(new Ct(.15,.15,1.8,6),M));S.position.set(Pn.x,E+.25,Pn.z),S.rotation.set(Math.PI/2-.3,I/4*Math.PI,0),n.add(S)}let T=new B(new $t(.6,1.6,6),new Ee({color:16752704,transparent:!0,opacity:.9}));T.position.set(Pn.x,E+.9,Pn.z);let v=new Ke(16751168,30,18);v.position.set(Pn.x,E+1.5,Pn.z),n.add(T,v);let _=xt(12884588);for(let[I,S]of[[4,-3],[4.9,-2.2],[-3,4]]){let A=vt(new B(new Et(1.1,1.1,1.1),_));A.position.set(Pn.x+I,E+.55,Pn.z+S),A.rotation.y=I,n.add(A)}let b=new B(new Sn(3,2),xt(10117040));b.rotation.x=-Math.PI/2,b.position.set(Pn.x-3.5,E+.05,Pn.z-2),n.add(b);let H=[];for(let[I,S,A,P]of Gh){let N=new B(new Ve(A*.5,16),new Ee({color:16773584,transparent:!0,opacity:.12,depthWrite:!1}));N.rotation.x=-Math.PI/2,N.position.set(I,P+6.6,S),n.add(N),H.push(N)}return{group:n,update(I,S){H.forEach((A,P)=>{A.material.opacity=.08+Math.sin(S*2+P)*.05}),T.scale.set(1+Math.sin(S*13)*.1,1+Math.sin(S*9)*.18,1+Math.cos(S*11)*.1),v.intensity=26+Math.sin(S*15)*6}}}};var vr=0,ei=-Xs,es={x:vr+47,z:ei-95,r:190,h:75},yo={shrine:{name:"\u6C37\u306E\u7960",x:vr-120,z:ei+25,r:12,h:12},pond:{name:"\u51CD\u3063\u305F\u6C60",x:vr+152,z:ei+114,r:20},summit:{name:"\u767D\u5DBA\u306E\u9802",x:es.x,z:es.z,r:10},hut:{name:"\u5C71\u5C0F\u5C4B",x:vr-5,z:ei+230,r:14,h:8},monument:{name:"\u96EA\u539F\u306E\u77F3\u7891",x:vr+230,z:ei-60,r:12,h:10}},fn=yo.shrine,zn=yo.pond,Xe=yo.hut,ts=yo.monument,Uc=We.north,zf=[[[Uc,ei+420],[Uc,ei+250],[zn.x-24,zn.z+16]],[[Uc,ei+240],[Xe.x-10,Xe.z]],[[Uc,ei+250],[-60,ei+120],[fn.x+14,fn.z+4]],[[-60,ei+120],[0,ei+20],[es.x-8,es.z+20]],[[zn.x-24,zn.z+16],[200,ei+40],[ts.x-10,ts.z+12]]],bs={snow:new st("#f4f8fb"),snowShade:new st("#d8e5ef"),rock:new st("#8e96a3"),rockDark:new st("#6f7784"),beach:new st("#d9d4c8"),beachDeep:new st("#b9b4a8"),path:new st("#bccbd8"),stone:new st("#b9c3cf")},Uf={id:"snow",name:"\u767D\u5DBA\u306E\u96EA\u539F",cx:vr,cz:ei,edge:$n(420,[26,.4,16,2.8,12,1.1]),maxR:480,places:yo,paths:zf,sanctuaries:[],land(i,t){let e=4+Xt(i/40,t/40)*6+Xt(i/150+3,t/150)*9,n=At(es.r,0,Math.hypot(i-es.x,t-es.z));e+=es.h*n+(Xt(i/9,t/9)-.5)*4*n;for(let s of[fn,Xe,ts])e=ee(e,s.h,At(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=ee(e,-1.5,At(zn.r+22,zn.r-3,Math.hypot(i-zn.x,t-zn.z))),e},color(i,t,e,n,s){if(e<1.5)return s.copy(bs.beachDeep).lerp(bs.beach,At(-2,1.2,e));s.copy(bs.snowShade).lerp(bs.snow,Xt(i/10,t/10)),s.lerp(bs.beach,At(2.2,1.5,e));let r=Pe(i,t,zf);return r<2.2&&s.lerp(bs.path,At(2.2,1.2,r)),Math.hypot(i-fn.x,t-fn.z)<fn.r-3&&s.lerp(bs.stone,.7),n>.7&&s.lerp(Xt(i/4,t/4)>.5?bs.rock:bs.rockDark,At(.7,1,n)),s},nature:{trees:{style:"pine",count:850,leafColors:[3104074,3828562,2641983],trunkColor:5914672,snowy:!0,maxH:55,maxSlope:.6},rocks:210,rockColor:9344675,avoid:Object.values(yo).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30E6\u30AD\u30C0\u30DE",tint:13624565,mult:2.8,count:34},ishimori:{name:"\u30B3\u30AA\u30EA\u30E2\u30EA",tint:10467536,mult:2.8,count:11}},decorate(i,t,e){let n=new Mt,s=cn(n,i),r=new It({color:12578559,emissive:5224160,emissiveIntensity:.6,flatShading:!0,transparent:!0,opacity:.85}),o=zn.r+6,a=new B(new Ve(o,32),new It({color:14217983,roughness:.1,metalness:.1,transparent:!0,opacity:.88}));a.rotation.x=-Math.PI/2,a.position.set(zn.x,ti+.12,zn.z),a.receiveShadow=!0,n.add(a),i.push({box:new ae(new F(zn.x-o,-3,zn.z-o),new F(zn.x+o,ti+.12,zn.z+o)),cyl:{x:zn.x,z:zn.z,r:o},color:14217983,kind:"ice"});let c=fn.h,l=xt(12174287);s.cyl(5.5,.6,fn.x,c-.3,fn.z,l,12174287,"part",12);for(let k=0;k<4;k++){let O=Math.PI/4+k/4*Math.PI*2;s.cyl(.5,5,fn.x+Math.cos(O)*3.8,c+.3,fn.z+Math.sin(O)*3.8,l,12174287,"part",8)}let h=vt(new B(new $t(5.8,3,4),xt(5929156)));h.position.set(fn.x,c+6.8,fn.z),h.rotation.y=Math.PI/4,n.add(h);let u=new B(new Ze(1,0),r);u.scale.y=1.7,u.position.set(fn.x,c+2.8,fn.z),n.add(u);let f=new Ke(10479871,30,25);f.position.set(fn.x,c+3,fn.z),n.add(f);let d=new $t(.8,1,5),g=(k,O,G)=>{let L=t(k,O),z=new B(d,r);z.scale.set(G*.8,G*4,G*.8),z.position.set(k,L+G*2-.3,O),z.rotation.set((e()-.5)*.4,e()*3,(e()-.5)*.4),n.add(z),s.cyl(.7*G,G*4,k,L-.5,O,null,12578559)};for(let k=0;k<10;k++){let O=e()*Math.PI*2,G=fn.r+2+e()*8;g(fn.x+Math.cos(O)*G,fn.z+Math.sin(O)*G,.7+e()*1.1)}g(es.x,es.z-4,2.6);let y=ta({w:8,d:6.5,wall:9067067,roof:16054523,trim:5913124});y.position.set(Xe.x,Xe.h,Xe.z),y.rotation.y=-Math.PI/2,n.add(y);let m=new B(new Et(8.4,7,6.9));m.position.set(Xe.x,Xe.h+3.5,Xe.z),m.rotation.y=-Math.PI/2,m.updateMatrixWorld(!0),i.push({box:new ae().setFromObject(m),color:9067067,kind:"house"});let p=14,w=new Float32Array(p*3),x=new F(Xe.x+1.3,Xe.h+7.8,Xe.z+2);for(let k=0;k<p;k++)w[k*3]=x.x,w[k*3+1]=x.y+k/p*8,w[k*3+2]=x.z;let E=new ce;E.setAttribute("position",new me(w,3));let R=new sn(E,new $e({color:14212580,size:1.1,transparent:!0,opacity:.28,depthWrite:!1}));R.frustumCulled=!1,n.add(R);let M=xt(16317437),T=vt(new B(new te(1,12,10),M));T.position.set(Xe.x-7,Xe.h+.9,Xe.z+5);let v=vt(new B(new te(.65,12,10),M));v.position.set(Xe.x-7,Xe.h+2.3,Xe.z+5);let _=new B(new $t(.1,.5,6),xt(15764028));_.rotation.z=Math.PI/2,_.position.set(Xe.x-7.7,Xe.h+2.3,Xe.z+5),n.add(T,v,_),s.cyl(1,2.8,Xe.x-7,Xe.h-.5,Xe.z+5,null,16317437);let b=ts.h,H=vt(new B(new Et(3.2,7,1.2),xt(8357780)));H.position.set(ts.x,b+3.3,ts.z),H.rotation.y=.4,n.add(H),s.cyl(2,7,ts.x,b-.5,ts.z,null,8357780);let I=new It({color:12578559,emissive:5224160,emissiveIntensity:1.3});for(let k=0;k<5;k++){let O=new B(new Et(k%2?1.6:.9,.18,.05),I);O.position.set((k%2?0:.2)-.1,1.8-k*.7,.62),H.add(O)}for(let k=0;k<6;k++){let O=k/6*Math.PI*2,G=vt(new B(new Ri(.6,0),xt(9344675)));G.position.set(ts.x+Math.cos(O)*4,b+.3,ts.z+Math.sin(O)*4),n.add(G)}let S=700,A=new Float32Array(S*3);for(let k=0;k<S;k++)A[k*3]=(e()-.5)*80,A[k*3+1]=e()*40,A[k*3+2]=(e()-.5)*80;let P=new ce;P.setAttribute("position",new me(A,3));let N=new sn(P,new $e({color:16777215,size:.35,transparent:!0,opacity:.9,depthWrite:!1}));return N.frustumCulled=!1,n.add(N),{group:n,update(k,O,G){u.rotation.y+=k;for(let z=0;z<p;z++){let Y=w[z*3+1]+k*1.2;Y>x.y+8&&(Y=x.y),w[z*3+1]=Y;let X=Y-x.y;w[z*3]=x.x+Math.sin(O*.8+z)*(.3+X*.12)+X*.25,w[z*3+2]=x.z+Math.cos(O*.7+z*1.7)*X*.12}E.attributes.position.needsUpdate=!0;let L=G&&Math.hypot(G.x-vr,G.z-ei)<440;if(N.visible=!!L,!!L){N.position.set(G.x,G.y-5,G.z);for(let z=0;z<S;z++){let Y=A[z*3+1]-k*3;Y<0&&(Y+=40),A[z*3+1]=Y,A[z*3]+=Math.sin(O+z)*k*.5}P.attributes.position.needsUpdate=!0}}}}};var He=-Xs,Ci=0,Vi={r:200,h:90,crater:22},na={crater:{name:"\u7114\u306E\u706B\u53E3",x:He,z:Ci,r:22},obsidian:{name:"\u9ED2\u66DC\u306E\u539F",x:He+133,z:Ci+183,r:26,h:4},spring:{name:"\u6E6F\u3051\u3080\u308A\u306E\u6E29\u6CC9",x:He+240,z:Ci-120,r:12,h:4},forge:{name:"\u935B\u51B6\u5834\u306E\u8DE1",x:He+232,z:Ci+62,r:14,h:5}},ns=na.obsidian,Ae=na.spring,Ie=na.forge,ea=We.west,Nf=[[[He+420,ea],[He+262,ea+2],[Ie.x-2,Ie.z-16]],[[He+262,ea+2],[He+205,120],[ns.x+12,ns.z-22]],[[He+262,ea+2],[He+252,-90],[Ae.x,Ae.z+15]],[[He+262,ea+2],[He+170,-70],[He+70,-140],[He-60,-130],[He-120,-30],[He-80,70],[He+10,70],[He+40,20],[He+26,0]]],Of=[2.2,3.4,4.6],Ts={basalt:new st("#4a4550"),ash:new st("#6d6570"),rim:new st("#7a4a40"),sand:new st("#3d3a40"),sandDeep:new st("#2e2c32"),path:new st("#8a7a70"),obsidian:new st("#2e2a36"),scorch:new st("#5a3a34"),spring:new st("#8a8078")},kf={id:"volcano",name:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",cx:He,cz:Ci,edge:$n(420,[20,2.6,18,1.9,10,.2]),maxR:480,places:na,paths:Nf,sanctuaries:[],land(i,t){let e=3+Xt(i/30,t/30)*4+Xt(i/130,t/130+7)*6,n=Math.hypot(i-He,t-Ci);e+=Vi.h*At(Vi.r,Vi.crater,n)+(Xt(i/10,t/10)-.5)*3*At(Vi.r,40,n),e=ee(e,Vi.h-14,At(Vi.crater,Vi.crater-8,n));for(let s of[ns,Ae,Ie])e=ee(e,s.h,At(s.r+14,s.r,Math.hypot(i-s.x,t-s.z)));return e=ee(e,Ae.h-1.2,At(Ae.r-2,Ae.r-6,Math.hypot(i-Ae.x,t-Ae.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Ts.sandDeep).lerp(Ts.sand,At(-2,1.2,e));s.copy(Ts.basalt).lerp(Ts.ash,Xt(i/10,t/10));let r=Math.hypot(i-He,t-Ci);s.lerp(Ts.rim,At(90,30,r)*.8),s.lerp(Ts.obsidian,At(ns.r+6,ns.r-6,Math.hypot(i-ns.x,t-ns.z))),s.lerp(Ts.spring,At(Ae.r+4,Ae.r-2,Math.hypot(i-Ae.x,t-Ae.z))*.7);let o=Pe(i,t,Nf);o<2.4&&s.lerp(Ts.path,At(2.4,1.4,o));let a=Math.atan2(t-Ci,i-He);for(let c of Of){let l=Math.abs(Math.atan2(Math.sin(a-c),Math.cos(a-c)))*r;r>Vi.crater&&r<170&&l<5&&s.lerp(Ts.scorch,At(5,2.5,l))}return s},nature:{trees:{style:"dead",count:250,trunkColor:3813424,maxH:30,maxSlope:.5},rocks:350,rockColor:4867408,grass:{count:2100,color:9075280},avoid:Object.values(na).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30D2\u30C0\u30DE",tint:14246986,mult:3.5,count:34},ishimori:{name:"\u30E8\u30A6\u30AC\u30F3\u30E2\u30EA",tint:5917256,mult:3.5,count:12}},decorate(i,t,e){let n=new Mt,s=cn(n,i),r=new qn({uniforms:{time:{value:0}},vertexShader:`
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
        }`}),o=Vi.h-13.2,a=new B(new Ve(Vi.crater-4,32),r);a.rotation.x=-Math.PI/2,a.position.set(He,o,Ci),n.add(a);let c=new Ke(16742960,200,90);c.position.set(He,o+6,Ci),n.add(c);for(let O of Of){let G=[],L=[],z=[];for(let $=0;$<=70;$++){let Z=Vi.crater+1+$*2.2,ct=O+Math.sin($*.35+O*3)*.08,it=2.2+Math.sin($*.5)*.7,ot=He+Math.cos(ct)*Z,ut=Ci+Math.sin(ct)*Z,rt=-Math.sin(ct),lt=Math.cos(ct);for(let W of[-1,1]){let Q=ot+rt*W*it,J=ut+lt*W*it;G.push(Q,t(Q,J)+.15,J),L.push(W<0?0:1,$/6)}if($>0){let W=($-1)*2;z.push(W,W+1,W+2,W+1,W+3,W+2)}}let X=new ce;X.setAttribute("position",new oe(G,3)),X.setAttribute("uv",new oe(L,2)),X.setIndex(z),n.add(new B(X,r))}let l=new It({color:1907494,roughness:.15,metalness:.4,flatShading:!0});for(let O=0;O<26;O++){let G=e()*Math.PI*2,L=e()*ns.r,z=ns.x+Math.cos(G)*L,Y=ns.z+Math.sin(G)*L,X=t(z,Y),$=.8+e()*1.8,Z=vt(new B(new $t(.9*$,4*$,5),l));Z.position.set(z,X+1.6*$,Y),Z.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5),n.add(Z),s.cyl(.8*$,3.5*$,z,X-.5,Y,null,1907494)}let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d"),f=u.createRadialGradient(32,32,0,32,32,32);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,64,64);let d=new Ti(h),g=(O,G,L,z,Y)=>{let X=new Float32Array(O*3),$=new Float32Array(O),Z=new ce;Z.setAttribute("position",new me(X,3));let ct=new sn(Z,new $e({color:z,size:L,map:d,transparent:!0,opacity:Y,depthWrite:!1}));return ct.frustumCulled=!1,n.add(ct),{pos:X,life:$,geo:Z,count:O,spread:G}},y=g(110,22,14,9076872,.45),m=O=>{y.pos[O*3]=He+(e()-.5)*y.spread,y.pos[O*3+1]=o+2,y.pos[O*3+2]=Ci+(e()-.5)*y.spread,y.life[O]=0};for(let O=0;O<y.count;O++)m(O),y.life[O]=e()*8,y.pos[O*3+1]+=y.life[O]*6;let p=new B(new Ve(Ae.r-2.5,28),new It({color:10479840,emissive:4171936,emissiveIntensity:.25,transparent:!0,opacity:.85,roughness:.15}));p.rotation.x=-Math.PI/2,p.position.set(Ae.x,Ae.h-.5,Ae.z),n.add(p);for(let O=0;O<16;O++){let G=O/16*Math.PI*2,L=.8+e()*.7,z=vt(new B(new Ri(L,0),xt(7169392)));z.position.set(Ae.x+Math.cos(G)*(Ae.r-1.5),Ae.h+L*.3,Ae.z+Math.sin(G)*(Ae.r-1.5)),n.add(z)}let w=g(50,Ae.r*1.2,4,16777215,.35),x=O=>{w.pos[O*3]=Ae.x+(e()-.5)*w.spread,w.pos[O*3+1]=Ae.h-.3,w.pos[O*3+2]=Ae.z+(e()-.5)*w.spread,w.life[O]=0};for(let O=0;O<w.count;O++)x(O),w.life[O]=e()*3,w.pos[O*3+1]+=w.life[O]*1.5;let E=xt(7030320),R=new Mt,M=vt(new B(new Et(.2,2.2,.2),E));M.position.y=1.1;let T=new B(new Et(1.6,.8,.12),xt(12884588));T.position.y=2,R.add(M,T),R.position.set(Ae.x,Ae.h,Ae.z+Ae.r+2),n.add(R);let v=Ie.h,_=xt(7169392);s.box(12,3.5,1.2,Ie.x,v-.3,Ie.z-6,_,7169392),s.box(1.2,2.2,8,Ie.x-6,v-.3,Ie.z-1.6,_,7169392),s.box(1.2,1.2,5,Ie.x+6,v-.3,Ie.z-3,_,7169392),s.box(4,4.2,3,Ie.x+2,v-.3,Ie.z-3.8,xt(5917256),5917256);let b=new B(new Sn(1.8,1.4),new Ee({color:16742960}));b.position.set(Ie.x+2,v+1.2,Ie.z-2.28),n.add(b);let H=vt(new B(new Ct(.8,1,5,8),xt(5917256)));H.position.set(Ie.x+2,v+6,Ie.z-4.2),n.add(H);let I=new Ke(16747072,25,14);I.position.set(Ie.x+2,v+1.5,Ie.z-1),n.add(I);let S=xt(3816004,{metalness:.6,roughness:.4}),A=vt(new B(new Et(.8,.9,.6),S));A.position.set(Ie.x-2,v+.45,Ie.z+1);let P=vt(new B(new Et(1.8,.45,.7),S));P.position.set(Ie.x-2,v+1.1,Ie.z+1);let N=new B(new $t(.3,.8,6),S);N.rotation.z=Math.PI/2,N.position.set(Ie.x-3.2,v+1.1,Ie.z+1),n.add(A,P,N),s.cyl(1,1.4,Ie.x-2,v-.3,Ie.z+1,null,3816004);let k=xt(12107976,{metalness:.6});for(let O=0;O<4;O++){let G=new B(new Et(.1,1.4,.3),k);G.position.set(Ie.x+4+O*.6,v+.6,Ie.z+3+O%2*.5),G.rotation.set(0,O,(e()-.5)*.5),n.add(G)}return{group:n,update(O,G){r.uniforms.time.value=G,c.intensity=190+Math.sin(G*3)*40,I.intensity=22+Math.sin(G*12)*5;for(let L=0;L<y.count;L++)y.life[L]+=O,y.pos[L*3+1]+=O*6,y.pos[L*3]+=O*2,y.life[L]>8&&m(L);y.geo.attributes.position.needsUpdate=!0;for(let L=0;L<w.count;L++)w.life[L]+=O,w.pos[L*3+1]+=O*1.5,w.pos[L*3]+=Math.sin(G+L)*O*.3,w.life[L]>3&&x(L);w.geo.attributes.position.needsUpdate=!0}}}};var Ys=Ai,$s=-Ai,ia={garden:{name:"\u5927\u8F2A\u306E\u82B1\u7551",x:Ys+40,z:$s-30,r:34},tower:{name:"\u98A8\u9234\u306E\u5854",x:Ys+170,z:$s+120,r:12,h:12},lake:{name:"\u82B1\u306E\u6E56",x:Ys-275,z:$s+180,r:30}},is=ia.garden,on=ia.tower,_o=ia.lake,Ff=[[[330,-330],[Ys-140,$s+110],[is.x-30,is.z+20]],[[Ys-140,$s+110],[_o.x+20,_o.z-30]],[[is.x-30,is.z+20],[Ys+110,$s+90],[on.x-12,on.z]]],Ss={grass:new st("#8fd46b"),grassDark:new st("#6fb850"),pink:new st("#f4b8cf"),yellow:new st("#f4e08a"),lilac:new st("#c9b4ec"),sand:new st("#efdcae"),path:new st("#d8b882")},ZE=new st,Bf={id:"flowers",name:"\u82B1\u51A0\u306E\u4E18\u9675",cx:Ys,cz:$s,edge:$n(400,[26,.9,14,2.2,10,.4]),maxR:460,places:ia,paths:Ff,sanctuaries:[],land(i,t){let e=5+Xt(i/50,t/50)*8+Xt(i/180+11,t/180)*12;return e=ee(e,on.h,At(on.r+16,on.r,Math.hypot(i-on.x,t-on.z))),e=ee(e,-3,At(_o.r+14,_o.r-4,Math.hypot(i-_o.x,t-_o.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Ss.sand);s.copy(Ss.grassDark).lerp(Ss.grass,Xt(i/9,t/9));let r=Xt(i/22+3,t/22),o=Xt(i/30-7,t/30+2),a=r>.62?Ss.pink:o>.64?Ss.yellow:o<.32?Ss.lilac:null;a&&s.lerp(a,.55),Math.hypot(i-is.x,t-is.z)<is.r&&s.lerp(ZE.copy(Ss.pink).lerp(Ss.yellow,Xt(i/6,t/6)),.5);let c=Pe(i,t,Ff);return c<2.4&&s.lerp(Ss.path,At(2.4,1.4,c)),s},nature:{trees:{style:"round",count:420,leafColors:[15902402,13150448,10475115,16765152],accentChance:.25},rocks:60,rockColor:13222072,grass:{count:8e3,color:8176218},flowers:{count:11e3,colors:[16748464,16766044,12166911,16777215,16738922,16754912]},avoid:Object.values(ia).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CF\u30CA\u30C0\u30DE",tint:15902402,mult:1.3,count:32},ishimori:{name:"\u30C4\u30BF\u30A4\u30EF",tint:9416832,mult:1.3,count:9}},decorate(i,t,e){let n=new Mt,s=cn(n,i),r=xt(6270538),o=[16748464,16766044,12166911,16738922,16777215],a=[];for(let E=0;E<12;E++){let R=e()*Math.PI*2,M=e()*is.r,T=is.x+Math.cos(R)*M,v=is.z+Math.sin(R)*M,_=t(T,v),b=7+e()*8,H=vt(new B(new Ct(.35,.5,b,7),r));H.position.set(T,_+b/2-.3,v),n.add(H),s.cyl(.6,b,T,_-.5,v,null,6270538,"tree");let I=vt(new B(new te(1,8,6),r));I.scale.set(1.6,.2,.7),I.position.set(T+1,_+b*.4,v),I.rotation.z=-.4,n.add(I);let S=new Mt;S.position.set(T,_+b,v),S.rotation.set((e()-.5)*.5,e()*3,(e()-.5)*.5);let A=xt(o[E%o.length]),P=1.6+e()*1.2;for(let k=0;k<7;k++){let O=vt(new B(new te(1,10,6),A)),G=k/7*Math.PI*2;O.scale.set(P,.25,P*.55),O.position.set(Math.cos(G)*P,0,Math.sin(G)*P),O.rotation.y=-G,S.add(O)}let N=new B(new Ct(P*.55,P*.5,.5,12),new It({color:16762938,emissive:9067008,emissiveIntensity:.4}));S.add(N),n.add(S),a.push({head:S,p:e()*10})}let c=xt(16183524);s.cyl(2.8,16,on.x,on.h-.5,on.z,c,16183524,"part",10);let l=vt(new B(new Ct(3.6,3.6,.6,10),c));l.position.set(on.x,on.h+15.8,on.z),n.add(l);for(let E=0;E<4;E++){let R=E/4*Math.PI*2+Math.PI/4,M=vt(new B(new Et(.4,4,.4),c));M.position.set(on.x+Math.cos(R)*3,on.h+18,on.z+Math.sin(R)*3),n.add(M)}let h=vt(new B(new $t(4.4,4,10),xt(2864544)));h.position.set(on.x,on.h+22,on.z),n.add(h);let u=[],f=[10479871,16759008,16773544,13154559];for(let E=0;E<6;E++){let R=E/6*Math.PI*2,M=new Mt;M.position.set(on.x+Math.cos(R)*3.8,on.h+19.8,on.z+Math.sin(R)*3.8);let T=new B(new te(.35,10,8,0,Math.PI*2,0,Math.PI/2),new It({color:f[E%4],transparent:!0,opacity:.8,emissive:f[E%4],emissiveIntensity:.3}));T.position.y=-.8;let v=new B(new Sn(.25,.9),xt(16777215,{side:he}));v.position.y=-1.6,M.add(T,v),n.add(M),u.push({pivot:M,p:E})}let d=90,g=new Float32Array(d*3),y=new Float32Array(d*3),m=[],p=[16748464,16766044,12166911,10479871,16777215].map(E=>new st(E));for(let E=0;E<d;E++){let R=e()*Math.PI*2,M=e()*260,T=Ys+Math.cos(R)*M,v=$s+Math.sin(R)*M;m.push({x:T,z:v,y:Math.max(t(T,v),0)+1.5+e()*3,p:e()*10});let _=p[E%p.length];y[E*3]=_.r,y[E*3+1]=_.g,y[E*3+2]=_.b}let w=new ce;w.setAttribute("position",new me(g,3)),w.setAttribute("color",new me(y,3));let x=new sn(w,new $e({size:.45,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1}));return x.frustumCulled=!1,n.add(x),{group:n,update(E,R){for(let{head:M,p:T}of a)M.rotation.z=Math.sin(R*.8+T)*.08;for(let{pivot:M,p:T}of u)M.rotation.x=Math.sin(R*2.2+T)*.25,M.rotation.z=Math.cos(R*1.7+T)*.2;for(let M=0;M<d;M++){let T=m[M];g[M*3]=T.x+Math.sin(R*.5+T.p)*6,g[M*3+1]=T.y+Math.abs(Math.sin(R*6+T.p*3))*.5,g[M*3+2]=T.z+Math.cos(R*.4+T.p)*6}w.attributes.position.needsUpdate=!0}}}};var wr=Ai,br=Ai,sa={pond:{name:"\u6C88\u3093\u3060\u7960",x:wr+60,z:br+40,r:45},reeds:{name:"\u8466\u306E\u8FF7\u3044\u9053",x:wr-120,z:br+170,r:40}},Se=sa.pond,Wh={z:Se.z,mid:Se.x-27},Gf=10,Vh=[[[360,360],[wr-60,br+30],[Se.x-52,Se.z]],[[wr-60,br+30],[sa.reeds.x+20,sa.reeds.z-30]]],Eo={moss:new st("#7a9a5a"),dark:new st("#5f7a4a"),mud:new st("#6b5a44"),shallow:new st("#5a6a4a"),path:new st("#9a8060")},Vf=(i,t)=>At(.6,.68,Xt(i/35+50,t/35)),Wf={id:"marsh",name:"\u9727\u306E\u6E7F\u539F",cx:wr,cz:br,edge:$n(400,[24,1.7,16,.6,9,2.9]),maxR:460,places:sa,paths:Vh,sanctuaries:[],land(i,t){let e=2+Xt(i/40,t/40)*2.2+Xt(i/150+5,t/150)*2.5,n=At(8,3,Pe(i,t,Vh));e=ee(e,-1.6,Vf(i,t)*(1-n));let s=Math.hypot(i-Se.x,t-Se.z);return e=ee(e,-2.2,At(Se.r+10,Se.r-5,s)),e=ee(e,3,At(Gf+4,Gf-2,s)),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Eo.mud).lerp(Eo.shallow,At(-2,1.5,e));s.copy(Eo.dark).lerp(Eo.moss,Xt(i/8,t/8)),s.lerp(Eo.mud,Vf(i,t)*.5+(Xt(i/5,t/5)>.7?.3:0));let r=Pe(i,t,Vh);return r<2.4&&s.lerp(Eo.path,At(2.4,1.4,r)),s},nature:{trees:{style:"round",count:300,leafColors:[4876858,3824180,5929540],trunkColor:4864554,minH:2.2},rocks:50,rockColor:8026730,grass:{count:9e3,color:8030794},flowers:{count:900,colors:[16777215,13150448,14739711]},avoid:Object.values(sa).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30CC\u30DE\u30C0\u30DE",tint:6982250,mult:1.9,count:32},ishimori:{name:"\u30C9\u30ED\u30A4\u30EF",tint:7035460,mult:1.9,count:10}},decorate(i,t,e){let n=new Mt,s=cn(n,i),r=xt(9079418),o=xt(6982218),a=t(Se.x,Se.z),c=new Mt;c.position.set(Se.x-6,a-.6,Se.z),c.rotation.set(0,Math.PI/2,.12);for(let P of[-1,1]){let N=vt(new B(new Ct(.4,.5,6,8),r));N.position.set(P*2.4,3,0),c.add(N)}let l=vt(new B(new Et(6.6,.6,.8),r));l.position.y=6.1;let h=vt(new B(new Et(5.4,.4,.6),r));h.position.y=5.1,c.add(l,h),n.add(c),s.cyl(.5,6,Se.x-6,a-1,Se.z-2.4,null,9079418),s.cyl(.5,6,Se.x-6,a-1,Se.z+2.4,null,9079418);let u=new Mt,f=vt(new B(new Et(4,.6,3.4),r));f.position.y=.3;let d=vt(new B(new Et(3,2.6,2.4),xt(5914672)));d.position.y=1.9;let g=vt(new B(new $t(3,1.6,4),xt(3816004)));g.position.y=4,g.rotation.y=Math.PI/4;let y=new B(new $t(2.4,.8,4),o);y.position.y=4.35,y.rotation.y=Math.PI/4;let m=new B(new te(.35,12,8),new It({color:13697008,emissive:7332032,emissiveIntensity:1.4}));m.position.set(-1.25,1.7,0),u.add(f,d,g,y,m),u.position.set(Se.x+3,a,Se.z),n.add(u),s.box(4,4.5,3.4,Se.x+3,a-.5,Se.z,null,5914672);let p=new It({color:16773296,emissive:16762976,emissiveIntensity:1.2}),w=[[Se.x-2,Se.z-5],[Se.x-2,Se.z+5],[Se.x-32,Se.z-5],[Se.x-32,Se.z+5]];for(let[P,N]of w){let k=Math.max(t(P,N),-.2),O=new Mt,G=vt(new B(new Ct(.25,.35,1.8,6),r));G.position.y=.9;let L=new B(new Et(.7,.6,.7),p);L.position.y=2.1;let z=vt(new B(new $t(.7,.6,4),r));z.position.y=2.7,z.rotation.y=Math.PI/4,O.add(G,L,z),O.position.set(P,k,N),n.add(O)}let x=new Ke(11075552,30,30);x.position.set(Se.x,a+3,Se.z),n.add(x);let E=ln(new Ve(1,10,.3,Math.PI*2-.6).rotateX(-Math.PI/2),xt(5212735,{side:he}),700);E.mesh.castShadow=!1;let R=ln(new $t(.35,.5,6),xt(16754888),120),M=0;for(let P=0;M<700&&P<2e4;P++){let N=wr+(e()-.5)*700,k=br+(e()-.5)*700,O=t(N,k);if(O>-.6||O<-2.4)continue;let G=.5+e()*.9;E.add(N,.05,k,G,1,G,0,e()*6,0),e()<.15&&R.add(N+.2,.3,k,1,1,1,Math.PI,0,0),M++}n.add(E.finish(),R.finish());let T=document.createElement("canvas");T.width=T.height=64;let v=T.getContext("2d"),_=v.createRadialGradient(32,32,0,32,32,32);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=_,v.fillRect(0,0,64,64);let b=70,H=new Float32Array(b*3),I=Array.from({length:b},()=>({x:(e()-.5)*140,z:(e()-.5)*140,y:.5+e()*3,v:.5+e()})),S=new ce;S.setAttribute("position",new me(H,3));let A=new sn(S,new $e({color:15266028,size:22,map:new Ti(T),transparent:!0,opacity:.22,depthWrite:!1}));return A.frustumCulled=!1,n.add(A),{group:n,update(P,N,k){m.position.y=1.7+Math.sin(N*1.8)*.12;let O=k&&Math.hypot(k.x-wr,k.z-br)<420;if(A.visible=!!O,!!O){for(let G=0;G<b;G++){let L=I[G];L.x+=L.v*P*1.5,L.x>70&&(L.x-=140),H[G*3]=k.x+L.x,H[G*3+1]=Math.max(0,k.y-2)+L.y,H[G*3+2]=k.z+L.z}S.attributes.position.needsUpdate=!0}}}}};var hi=-Ai,ui=Ai,KE=[[hi-330,ui-150],[hi-120,ui-60],[hi,ui-20],[hi+150,ui+40],[hi+320,ui+110]],qh={x:hi,z:ui-20},Xh={gorge:{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",x:hi,z:ui-20,r:20},shrine:{name:"\u7D05\u8449\u306E\u793E",x:hi-150,z:ui+150,r:16,h:12}},pn=Xh.shrine,Xf=[[[-330,330],[hi+30,ui-110],[hi,ui-62]],[[hi,ui+22],[hi-70,ui+100],[pn.x+14,pn.z-6]]],Zs={gold:new st("#c0a450"),dry:new st("#a89048"),leaves:new st("#d0703a"),red:new st("#c04a30"),rock:new st("#a06c4a"),rockDark:new st("#7c5038"),path:new st("#c8a070")},qf={id:"canyon",name:"\u7D05\u8449\u306E\u6E13\u8C37",cx:hi,cz:ui,edge:$n(400,[22,2.4,16,1.3,10,.7]),maxR:460,places:Xh,paths:Xf,sanctuaries:[],land(i,t){let e=9+Xt(i/45,t/45)*6+Xt(i/170+3,t/170)*10;return e=ee(e,pn.h,At(pn.r+14,pn.r,Math.hypot(i-pn.x,t-pn.z))),e=ee(e,-2.5,At(34,9,po(i,t,KE))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Zs.rockDark);s.copy(Zs.dry).lerp(Zs.gold,Xt(i/9,t/9));let r=Xt(i/16+8,t/16);r>.55&&s.lerp(r>.66?Zs.red:Zs.leaves,At(.55,.7,r)*.8),n>.6&&s.lerp(Math.floor(e/3)%2?Zs.rock:Zs.rockDark,At(.6,.9,n));let o=Pe(i,t,Xf);return o<2.4&&s.lerp(Zs.path,At(2.4,1.4,o)),s},nature:{trees:{style:"round",count:520,leafColors:[14704682,15769648,13122090,15253568],trunkColor:5913128},rocks:140,rockColor:10119754,grass:{count:6500,color:11573834},flowers:{count:1500,colors:[15769648,16766044,13122090]},avoid:[...Object.values(Xh).map(i=>[i.x,i.z,i.r+4])]},enemies:{kumodama:{name:"\u30E2\u30DF\u30B8\u30C0\u30DE",tint:14707258,mult:2.5,count:32},ishimori:{name:"\u30AB\u30EC\u30A4\u30EF",tint:10119754,mult:2.5,count:10}},decorate(i,t,e){let n=new Mt,s=cn(n,i),r=pn.h,o=xt(14172202),a=xt(2761254),c=new Mt;for(let H of[-1,1]){let I=vt(new B(new Ct(.45,.5,7,10),o));I.position.set(H*3,3.5,0),c.add(I)}let l=vt(new B(new Et(8.6,.7,1),a));l.position.y=7.3;let h=vt(new B(new Et(7.8,.4,.8),o));h.position.y=6.8;let u=vt(new B(new Et(7.4,.4,.5),o));u.position.y=5.6,c.add(l,h,u),c.position.set(pn.x+10,r,pn.z-4),c.rotation.y=Math.atan2(-10,4)+Math.PI/2,n.add(c),s.cyl(.5,7,pn.x+10+Math.cos(c.rotation.y)*3,r-.5,pn.z-4-Math.sin(c.rotation.y)*3,null,14172202),s.cyl(.5,7,pn.x+10-Math.cos(c.rotation.y)*3,r-.5,pn.z-4+Math.sin(c.rotation.y)*3,null,14172202);let f=new Mt,d=vt(new B(new Et(7,.8,6),xt(11050124)));d.position.y=.4;let g=vt(new B(new Et(5.2,3.2,4.4),xt(16050904)));g.position.y=2.4;let y=vt(new B(new Et(5.6,.4,4.8),o));y.position.y=4.1;let m=vt(new B(new $t(5.2,2.6,4),xt(3814464)));m.position.y=5.5,m.rotation.y=Math.PI/4,m.scale.z=.8;let p=new B(new te(.35,10,8),xt(16040539,{metalness:.6,roughness:.3}));p.position.set(0,3.5,2.4),f.add(d,g,y,m,p),f.position.set(pn.x,r,pn.z),f.rotation.y=Math.atan2(10,-4),n.add(f),s.cyl(3.6,6,pn.x,r-.5,pn.z,null,14172202,"house");let w=xt(11050124),x=new It({color:16773296,emissive:16752704,emissiveIntensity:1.2});for(let[H,I]of[[6,-9],[9,2],[-4,-9]]){let S=new Mt,A=vt(new B(new Ct(.25,.35,1.6,6),w));A.position.y=.8;let P=new B(new Et(.6,.5,.6),x);P.position.y=1.85;let N=vt(new B(new $t(.6,.5,4),w));N.position.y=2.35,S.add(A,P,N),S.position.set(pn.x+H,r,pn.z+I),n.add(S)}let E=160,R=new Float32Array(E*3),M=new Float32Array(E*3),T=[14704682,15769648,13122090,15253568].map(H=>new st(H)),v=Array.from({length:E},(H,I)=>{let S=T[I%4];return M[I*3]=S.r,M[I*3+1]=S.g,M[I*3+2]=S.b,{x:(e()-.5)*70,y:e()*22,z:(e()-.5)*70,p:e()*10}}),_=new ce;_.setAttribute("position",new me(R,3)),_.setAttribute("color",new me(M,3));let b=new sn(_,new $e({size:.4,vertexColors:!0,transparent:!0,depthWrite:!1}));return b.frustumCulled=!1,n.add(b),{group:n,update(H,I,S){p.position.x=Math.sin(I*1.3)*.08;let A=S&&Math.hypot(S.x-hi,S.z-ui)<420;if(b.visible=!!A,!!A){for(let P=0;P<E;P++){let N=v[P];N.y-=H*1.4,N.y<0&&(N.y+=22),R[P*3]=S.x+N.x+Math.sin(I*1.5+N.p)*1.5,R[P*3+1]=S.y+N.y-4,R[P*3+2]=S.z+N.z+Math.cos(I*1.2+N.p)*1.5}_.attributes.position.needsUpdate=!0}}}}};var Tr=-Ai,Sr=-Ai,Oc={heart:{name:"\u6C34\u6676\u306E\u5FC3\u81D3",x:Tr-40,z:Sr-40,r:18,h:26},pillars:{name:"\u5929\u67F1\u306E\u68EE",x:Tr+130,z:Sr+110,r:70}},hn=Oc.heart,ra=Oc.pillars,Nc=[[[-340,-330],[Tr+180,Sr+170],[Tr+40,Sr+30],[hn.x+20,hn.z+18]],[[Tr+180,Sr+170],[ra.x+30,ra.z-10]]],Mo={rock:new st("#8a82a0"),rockDark:new st("#6a6282"),moss:new st("#6a9a6a"),crystal:new st("#b8b0d8"),path:new st("#b0a8c0")},Yf={id:"highlands",name:"\u6C34\u6676\u306E\u9AD8\u5730",cx:Tr,cz:Sr,edge:$n(400,[24,.2,14,1.1,11,2.6]),maxR:460,places:Oc,paths:Nc,sanctuaries:[],land(i,t){let e=14+Xt(i/60,t/60)*10+Xt(i/200+7,t/200)*14,n=1-Math.abs(Xt(i/40+9,t/40)*2-1);return e+=n*n*6,e=ee(e,hn.h,At(hn.r+16,hn.r,Math.hypot(i-hn.x,t-hn.z))),e},color(i,t,e,n,s){if(e<1.7)return s.copy(Mo.rockDark);s.copy(Mo.moss).lerp(Mo.rock,At(.35,.65,Xt(i/14,t/14))),Xt(i/7+4,t/7)>.68&&s.lerp(Mo.crystal,.6),n>.65&&s.lerp(Mo.rockDark,At(.65,.95,n));let r=Pe(i,t,Nc);return r<2.4&&s.lerp(Mo.path,At(2.4,1.4,r)),s},nature:{trees:{style:"pine",count:330,leafColors:[3824202,4876890,3099200],trunkColor:4864564,maxSlope:.55},rocks:180,rockColor:8024208,grass:{count:4500,color:6986346},flowers:{count:900,colors:[13154559,10479871,16777215]},avoid:Object.values(Oc).map(i=>[i.x,i.z,i.r+4])},enemies:{kumodama:{name:"\u30B7\u30E7\u30A6\u30C0\u30DE",tint:10467560,mult:3.2,count:32},ishimori:{name:"\u30B9\u30A4\u30B7\u30E7\u30A6\u30E2\u30EA",tint:9074864,mult:3.2,count:11}},decorate(i,t,e){let n=new Mt,s=cn(n,i),r=xt(9077408),o=xt(6265434),a=xt(3824202);for(let y=0,m=0;y<22&&m<400;m++){let p=e()*Math.PI*2,w=Math.sqrt(e())*(ra.r+60),x=ra.x+Math.cos(p)*w,E=ra.z+Math.sin(p)*w;if(Pe(x,E,Nc)<10)continue;y++;let R=t(x,E),M=22+e()*38,T=3.5+e()*5,v=vt(new B(new Ct(T*.8,T,M,7),r));v.position.set(x,R+M/2-1,E),v.rotation.y=e()*3,n.add(v);let _=vt(new B(new te(T*.85,8,5,0,Math.PI*2,0,Math.PI/2),o));_.scale.y=.4,_.position.set(x,R+M-1,E),n.add(_);for(let b=0;b<2;b++){let H=vt(new B(new $t(1.2,4,6),a));H.position.set(x+(e()-.5)*T,R+M+1.5,E+(e()-.5)*T),n.add(H)}s.cyl(T,M,x,R-1,E,null,9077408)}let c=[new It({color:10479871,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}),new It({color:13154559,emissive:8413408,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9})],l=c.map(y=>ln(new Ze(1,0),y,200));for(let y=0,m=0;y<34&&m<600;m++){let p=Tr+(e()-.5)*620,w=Sr+(e()-.5)*620,x=t(p,w);if(x<6||Pe(p,w,Nc)<6||Math.hypot(p-hn.x,w-hn.z)<hn.r+6)continue;y++;let E=l[y%2];for(let R=0;R<5;R++){let M=.6+e()*1.4;E.add(p+(e()-.5)*2.5,x+M,w+(e()-.5)*2.5,M*.55,M*2.2,M*.55,(e()-.5)*.7,e()*3,(e()-.5)*.7)}s.cyl(1.8,4,p,x-.5,w,null,y%2?13154559:10479871)}l.forEach(y=>{y.mesh.castShadow=!1,n.add(y.finish())});let h=hn.h,u=xt(11577536);s.cyl(11,1.2,hn.x,h-.6,hn.z,u,11577536,"part",16);for(let y=0;y<6;y++){let m=y/6*Math.PI*2;s.cyl(.8,5,hn.x+Math.cos(m)*12.5,h-.5,hn.z+Math.sin(m)*12.5,u,11577536,"part",6)}let f=new B(new Ze(3.4,0),new It({color:14218495,emissive:7321855,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.88}));f.scale.y=1.7,f.position.set(hn.x,h+12,hn.z),n.add(f);let d=[];for(let y=0;y<6;y++){let m=new B(new Ze(.8,0),c[y%2]);m.scale.y=1.8,n.add(m),d.push(m)}let g=new Ke(10473727,80,60);return g.position.set(hn.x,h+12,hn.z),n.add(g),{group:n,update(y,m){f.rotation.y+=y*.5,f.position.y=h+12+Math.sin(m)*.8,d.forEach((p,w)=>{let x=m*.6+w/d.length*Math.PI*2;p.position.set(hn.x+Math.cos(x)*8,h+11+Math.sin(m*1.3+w)*1.5,hn.z+Math.sin(x)*8),p.rotation.y+=y*2})}}}};var Ks=[Rf,If,Df,Uf,kf,Bf,Wf,qf,Yf],oa=Ks.flatMap(i=>Object.values(i.places)),kc=Ks.flatMap(i=>i.sanctuaries),$f=[{name:"\u5DDD\u306E\u6A4B",axis:"z",at:We.north,mid:-240,small:!0},{name:"\u6E7F\u539F\u306E\u6728\u9053",axis:"x",at:Wh.z,mid:Wh.mid,small:!0},{name:"\u7D05\u8449\u306E\u540A\u308A\u6A4B",axis:"z",at:qh.x,mid:qh.z,land:9,arch:-2.5}];function Zf(i){let t=new qn({transparent:!0,depthWrite:!1,fog:!0,uniforms:Hh.merge([St.fog,{heightMap:{value:null},time:{value:0},shallow:{value:new st("#6fdcd0")},deep:{value:new st("#2f73b8")},foam:{value:new st("#ffffff")},mapHalf:{value:Yn}}]),vertexShader:`
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
        float depth = max(0.0, ${ti.toFixed(1)} - h);

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
      }`});t.uniforms.heightMap.value=i;let e=new B(new Sn(4e3,4e3),t);return e.rotation.x=-Math.PI/2,e.position.y=ti,e.renderOrder=1,{mesh:e,update(n){t.uniforms.time.value=n}}}function JE(){return new qn({transparent:!0,depthWrite:!1,side:he,uniforms:{time:{value:0}},vertexShader:`
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
      }`})}function Kf(i){let t=new Mt,e=ke.plateau,n=JE(),s=5,r=new yt(-yi.y,yi.x),o=21,a=36,c=40,l=[],h=[],u=[],f=0,d=null;for(let b=0;b<=c;b++){let H=o+(a-o)*b/c,I=e.x+yi.x*H,S=e.z+yi.y*H,A=s*(.6+.4*(b/c)),P=Math.max(i(I,S),ti-.2)+.35;d&&(f+=Math.hypot(H-d.d,P-d.y)),d={d:H,y:P};for(let N of[-1,1])l.push(I+r.x*N*A/2,P,S+r.y*N*A/2),h.push(N<0?0:1,f/6);if(b>0){let N=(b-1)*2;u.push(N,N+1,N+2,N+1,N+3,N+2)}}let g=new ce;g.setAttribute("position",new oe(l,3)),g.setAttribute("uv",new oe(h,2)),g.setIndex(u);let y=new B(g,n);y.renderOrder=2,t.add(y);let m=new It({color:7331024,transparent:!0,opacity:.8,roughness:.2}),p=new B(new Ve(Ki.r+.6,24),m);p.rotation.x=-Math.PI/2,p.position.set(Ki.x,e.h-.45,Ki.z),t.add(p);let w=new F(e.x+yi.x*33,ti+.3,e.z+yi.y*33),x=70,E=new Float32Array(x*3),R=new Float32Array(x),M=new Float32Array(x*3),T=b=>{E[b*3]=w.x+(Math.random()-.5)*4,E[b*3+1]=w.y,E[b*3+2]=w.z+(Math.random()-.5)*4,M[b*3]=(Math.random()-.5)*3,M[b*3+1]=2+Math.random()*4,M[b*3+2]=(Math.random()-.5)*3,R[b]=Math.random()};for(let b=0;b<x;b++)T(b);let v=new ce;v.setAttribute("position",new me(E,3));let _=new sn(v,new $e({color:16777215,size:.5,transparent:!0,opacity:.8,depthWrite:!1}));return t.add(_),{group:t,update(b,H){n.uniforms.time.value=H;for(let I=0;I<x;I++)R[I]+=b,M[I*3+1]-=9*b,E[I*3]+=M[I*3]*b,E[I*3+1]+=M[I*3+1]*b,E[I*3+2]+=M[I*3+2]*b,(R[I]>1.2||E[I*3+1]<w.y-.5)&&T(I);v.attributes.position.needsUpdate=!0}}}var jE=1.6;function QE(i){let t=document.createElement("canvas");t.width=256,t.height=80;let e=t.getContext("2d");e.fillStyle="#c49a6c",e.fillRect(0,0,256,80),e.strokeStyle="#8a5a3b",e.lineWidth=6,e.strokeRect(3,3,250,74),e.fillStyle="#5a3a24",e.font='bold 34px "M PLUS Rounded 1c", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,128,42);let n=new Ti(t);return n.colorSpace=Oe,n}function Jf(i,t,e){let n=new Mt,s=xt(11897438),r=xt(8015414),o=xt(14271642),a=xt(11116950),c=new It({color:16770728,emissive:16762992,emissiveIntensity:1.2}),l=ln(new Et(1,1,1),s,2500),h=ln(new Et(1,1,1),r,1500),u=ln(new Et(1,1,1),o,2500),f=ln(new Ct(1,1.2,1,8).translate(0,.5,0),a,200),d=[];for(let g of i){let y=g.axis==="x",m=A=>y?[A,g.at]:[g.at,A],p=A=>e(...m(A)),w=g.mid,x=g.mid,E=g.land??jE;for(let A=0;A<400&&p(w)<E;A++)w-=1;for(let A=0;A<400&&p(x)<E;A++)x+=1;w-=2,x+=2;let R=x-w,M=g.small?3.4:4.4,T=p(w)+.25,v=p(x)+.25,_=g.arch??(g.small?1.2:Math.min(7,Math.max(3,R*.07))),b=A=>{let P=(A-w)/R;return ee(T,v,P)+_*Math.sin(Math.PI*P)},H=A=>b(A+.5)-b(A-.5),I=(A,P,N)=>y?[A,N,g.at+P]:[g.at+P,N,A],S=Math.ceil(R/2);for(let A=0;A<S;A++){let P=w+A*R/S,N=w+(A+1)*R/S,k=b((P+N)/2),O=(G,L,z,Y,X,$)=>{let[Z,,ct]=I(P,G,0),[it,,ot]=I(N,L,0);t.push({box:new ae(new F(Math.min(Z,it),z,Math.min(ct,ot)),new F(Math.max(Z,it),Y,Math.max(ct,ot))),color:$,kind:X})};O(-M/2,M/2,k-.6,k,"bridge",11897438),O(-M/2-.3,-M/2,k,k+1.3,"rail",8015414),O(M/2,M/2+.3,k,k+1.3,"rail",8015414)}for(let A=w+.5;A<x;A+=1){let P=b(A)-.12,N=Math.atan(H(A)),[k,,O]=I(A,0,0);y?l.add(k,P,O,.95,.25,M,0,0,N):l.add(k,P,O,M,.25,.95,-N,0,0)}for(let A=w;A<=x+.01;A+=4){for(let P of[-1,1]){let[N,k,O]=I(A,P*(M/2+.15),b(A)+.7);h.add(N,k,O,.28,1.6,.28)}if(!g.small&&A>w+6&&A<x-6&&Math.round(A-w)%16===0){let[P,,N]=I(A,0,0),k=e(P,N);f.add(P,k,N,1.1,b(A)-.5-k,1.1)}}for(let A=w;A<x-.01;A+=4){let P=Math.min(A+4,x),N=(A+P)/2,k=Math.atan((b(P)-b(A))/(P-A));for(let O of[-1,1])for(let G of[1.35,.7]){let[L,z,Y]=I(N,O*(M/2+.15),b(N)+G);y?u.add(L,z,Y,P-A,.1,.1,0,0,k):u.add(L,z,Y,.1,.1,P-A,-k,0,0)}}if(!g.small)for(let[A,P]of[[w,1],[x,-1]]){let N=b(A);for(let Y of[-1,1]){let[X,,$]=I(A,Y*(M/2+.6),0),Z=vt(new B(new Et(.5,5.5,.5),r));Z.position.set(X,N+2.5,$);let ct=new B(new Ze(.35,0),c);ct.position.set(X,N+5.6,$),n.add(Z,ct)}let[k,,O]=I(A,0,0),G=vt(new B(new Et(y?.4:M+2.2,.4,y?M+2.2:.4),r));G.position.set(k,N+5.1,O),n.add(G);let L=QE(g.name),z=new B(new Sn(3.2,1),new It({map:L,side:he}));z.position.set(k,N+4.3,O),z.rotation.y=y?P>0?-Math.PI/2:Math.PI/2:P>0?Math.PI:0,n.add(z)}d.push({...g,from:m(w),to:m(x),length:R})}return n.add(l.finish(),h.finish(),u.finish(),f.finish()),{group:n,bridges:d}}var tM=(i,t,e,n="")=>`<svg viewBox="0 0 32 32">
  <path d="M25 3l4 0 0 4-13.5 13.5-4-4z" fill="${i}" stroke="${t}" stroke-width="1.2"/>
  ${n}
  <path d="M8.5 16.5l7 7-2 2-7-7z" fill="${e}"/>
  <path d="M8 22l2 2-4 4-2-2z" fill="#2a1418"/>
  <circle cx="4.6" cy="27.4" r="1.6" fill="#ff2a3a"/>
</svg>`,jf=(i,t,e,n="")=>`<svg viewBox="0 0 32 32">
  <path d="M6 28l17-17" stroke="${i}" stroke-width="3" stroke-linecap="round"/>
  <path d="M18 5c5 0 10 4 10 10l-6 1-3-3-3-3z" fill="${t}" stroke="${e}" stroke-width="1.4" stroke-linejoin="round"/>
  ${n}
</svg>`,Wi={axe:jf("#9a6a3e","#c8d2dc","#6a7888"),bloodAxe:jf("#2a1418","#16121a","#ff2030",'<path d="M20 8c3 1 5 3 6 6" stroke="#ff2030" stroke-width="1.4" fill="none"/><circle cx="7" cy="27" r="1.6" fill="#ff2a3a"/>'),fence:'<svg viewBox="0 0 32 32"><g fill="#c89a64" stroke="#7a5534" stroke-width="1"><path d="M5 9l2-3 2 3v18H5z"/><path d="M14 9l2-3 2 3v18h-4z"/><path d="M23 9l2-3 2 3v18h-4z"/><rect x="3" y="12" width="26" height="3"/><rect x="3" y="20" width="26" height="3"/></g></svg>',door:'<svg viewBox="0 0 32 32"><rect x="2" y="5" width="3.5" height="23" fill="#7a5534"/><rect x="26.5" y="5" width="3.5" height="23" fill="#7a5534"/><rect x="1" y="3" width="30" height="3" fill="#7a5534"/><rect x="5.5" y="8" width="10.3" height="20" fill="#c89a64" stroke="#7a5534"/><rect x="16.2" y="8" width="10.3" height="20" fill="#c89a64" stroke="#7a5534"/><path d="M6 26L15 10M26 26L17 10" stroke="#7a5534" stroke-width="1.2"/><circle cx="14" cy="18" r="1.2" fill="#3a3238"/><circle cx="18" cy="18" r="1.2" fill="#3a3238"/></svg>',trap:'<svg viewBox="0 0 32 32"><g stroke="#5a3a24" stroke-width="1.2"><rect x="4" y="4" width="2.5" height="24" fill="#7a5534"/><rect x="25.5" y="4" width="2.5" height="24" fill="#7a5534"/><rect x="3" y="3" width="26" height="3" fill="#7a5534"/><path d="M9 8v12M13 8v12M17 8v12M21 8v12" stroke="#9a6a3e" stroke-width="1.6"/><rect x="8" y="7" width="15" height="2" fill="#c89a64"/><rect x="8" y="19" width="15" height="2" fill="#c89a64"/><rect x="9" y="25" width="14" height="2.4" fill="#c89a64"/></g><ellipse cx="16" cy="24" rx="2.4" ry="1.3" fill="#d8586a"/></svg>',meat:'<svg viewBox="0 0 32 32"><path d="M20 5c5 1 8 6 6 12-2 6-9 9-14 7-3-1-4-4-3-7 1-6 6-13 11-12z" fill="#d8586a" stroke="#8a2a3a" stroke-width="1.3"/><path d="M18 9c3 0 5 3 4 6" stroke="#ffb0b8" stroke-width="1.6" fill="none"/><path d="M11 20l-6 6" stroke="#f4ead8" stroke-width="3.2" stroke-linecap="round"/><circle cx="4.5" cy="27.5" r="2" fill="#f4ead8"/><circle cx="6.5" cy="28.8" r="1.7" fill="#f4ead8"/></svg>',flag:'<svg viewBox="0 0 32 32"><rect x="7" y="3" width="2.2" height="25" fill="#7a5534"/><path d="M9.2 4h16l-4 5 4 5h-16z" fill="#2bb5a0" stroke="#1a7a6a"/><circle cx="15" cy="9" r="2" fill="#f4c25b"/><rect x="4" y="26" width="8.5" height="3" rx="1" fill="#9a96a0"/></svg>',wall:'<svg viewBox="0 0 32 32"><g stroke="#5a3a24" stroke-width="1"><rect x="3" y="6" width="26" height="5" rx="2.5" fill="#c89a64"/><rect x="3" y="11" width="26" height="5" rx="2.5" fill="#a87a4a"/><rect x="3" y="16" width="26" height="5" rx="2.5" fill="#c89a64"/><rect x="3" y="21" width="26" height="5" rx="2.5" fill="#a87a4a"/><rect x="2" y="4" width="4" height="24" fill="#7a5534"/><rect x="26" y="4" width="4" height="24" fill="#7a5534"/></g></svg>',sangrea:tM("#0e0c12","#ff2030","#241018",'<path d="M13 19l12-12" stroke="#ff2030" stroke-width="1.6"/><circle cx="12" cy="20" r="1.4" fill="#ffd0d0"/>'),sword:'<svg viewBox="0 0 32 32"><path d="M24 4l4 0 0 4-13 13-4-4z" fill="#e6eef5" stroke="#8fa3b5" stroke-width="1.2"/><path d="M9 17l6 6-2 2-6-6z" fill="#f4c25b"/><path d="M8 22l2 2-4 4-2-2z" fill="#8a5a3b"/></svg>',potion:'<svg viewBox="0 0 32 32"><rect x="13" y="4" width="6" height="5" rx="1" fill="#b07a55"/><path d="M12 9h8v4l4 5v7a3 3 0 01-3 3H11a3 3 0 01-3-3v-7l4-5z" fill="#dff4ff" opacity=".8"/><path d="M9 18h14v7a2 2 0 01-2 2H11a2 2 0 01-2-2z" fill="#ff5a6e"/><circle cx="13" cy="21" r="1.4" fill="#fff" opacity=".8"/></svg>'},Rs=(i,t,e)=>`<svg viewBox="0 0 32 32">
  <rect x="5" y="11" width="20" height="12" rx="2" fill="${i}" transform="rotate(-20 15 17)"/>
  <ellipse cx="24" cy="13.5" rx="4" ry="6" fill="${t}" transform="rotate(-20 24 13.5)"/>
  <ellipse cx="24" cy="13.5" rx="2" ry="3.2" fill="${e}" transform="rotate(-20 24 13.5)"/>
</svg>`,As=(i,t,e,n,s,r,o)=>({name:i,desc:t,kind:"material",category:"wood",durability:e,resist:n,trait:s,icon:r,plank:o,stack:99}),Yh={start:"woodYoung",flowers:"woodBlossom",forest:"woodElder",marsh:"woodMarsh",desert:"woodCactus",canyon:"woodMaple",snow:"woodFrost",highlands:"woodCrystal",volcano:"woodCharred"},Qf={woodYoung:As("\u82E5\u8449\u306E\u6728\u6750","\u59CB\u307E\u308A\u306E\u8349\u539F\u306E\u3001\u7D20\u76F4\u3067\u6271\u3044\u3084\u3059\u3044\u6728\u6750",100,{},{name:"\u6271\u3044\u3084\u3059\u3044",desc:"\u7279\u5225\u306A\u5F37\u3055\u306F\u306A\u3044\u304C\u3001\u3069\u3053\u3067\u3082\u4F7F\u3048\u308B\u57FA\u672C\u306E\u6728\u6750"},Rs("#9a6a44","#e8c890","#c89a60"),13146724),woodBlossom:As("\u82B1\u9999\u308B\u6728\u6750","\u82B1\u51A0\u306E\u4E18\u9675\u306E\u3001\u307B\u306E\u304B\u306B\u7518\u304F\u9999\u308B\u6728\u6750",80,{},{name:"\u7652\u3084\u3057\u306E\u9999\u308A",desc:"\u62E0\u70B9\u306B\u4F7F\u3046\u3068\u3001\u307E\u308F\u308A\u306E\u30DA\u30C3\u30C8\u304C\u306A\u3064\u304D\u3084\u3059\u304F\u306A\u308B"},Rs("#b88a8a","#ffd8e4","#f2a6c2"),14725304),woodElder:As("\u6DF1\u7DD1\u306E\u53E4\u6728\u6750","\u6DF1\u7DD1\u306E\u68EE\u306E\u3001\u5E74\u3092\u7D4C\u305F\u91CD\u304F\u786C\u3044\u6728\u6750",160,{water:!0},{name:"\u8150\u308A\u306B\u304F\u3044",desc:"\u6E7F\u6C17\u306B\u5F37\u304F\u3001\u9577\u3044\u3042\u3044\u3060\u50B7\u307E\u306A\u3044"},Rs("#5a3a24","#c8a870","#6b8a4a"),8017204),woodMarsh:As("\u6E7F\u539F\u306E\u6C34\u6728","\u9727\u306E\u6E7F\u539F\u306E\u3001\u6C34\u3092\u306F\u3058\u304F\u6728\u6750",120,{water:!0},{name:"\u9632\u6C34",desc:"\u6C34\u8FBA\u3084\u6CBC\u306E\u4E0A\u306B\u5EFA\u3066\u3066\u3082\u50B7\u307E\u306A\u3044"},Rs("#4a4a34","#b8b088","#5a7a5a"),6974026),woodCactus:As("\u30B5\u30DC\u30C6\u30F3\u6750","\u967D\u708E\u306E\u7802\u6F20\u306E\u3001\u4E7E\u3044\u305F\u8EFD\u3044\u6728\u6750",70,{heat:!0},{name:"\u8010\u6691",desc:"\u6691\u3055\u3067\u4E7E\u3044\u3066\u5272\u308C\u305F\u308A\u3057\u306A\u3044"},Rs("#6a8a4a","#d8d09a","#9fbf6a"),11057264),woodMaple:As("\u7D05\u8449\u306E\u5805\u6728","\u7D05\u8449\u306E\u6E13\u8C37\u306E\u3001\u3057\u306A\u3084\u304B\u3067\u7F8E\u3057\u3044\u6728\u6750",140,{},{name:"\u3057\u306A\u3084\u304B",desc:"\u885D\u6483\u306B\u5F37\u304F\u3001\u653B\u6483\u3092\u53D7\u3051\u3066\u3082\u58CA\u308C\u306B\u304F\u3044"},Rs("#8a4a2a","#f0b070","#e0602a"),12607546),woodFrost:As("\u96EA\u5DBA\u306E\u91DD\u8449\u6750","\u767D\u5DBA\u306E\u96EA\u539F\u306E\u3001\u5BD2\u3055\u306B\u8010\u3048\u3066\u80B2\u3063\u305F\u6728\u6750",200,{cold:!0},{name:"\u8010\u5BD2",desc:"\u96EA\u539F\u3067\u3082\u51CD\u3089\u306A\u3044\u3002\u307B\u304B\u306E\u6728\u6750\u3088\u308A\u4E08\u592B"},Rs("#5a4030","#e8f0f8","#9fc0d8"),14212324),woodCrystal:As("\u6C34\u6676\u677E\u306E\u6728\u6750","\u6C34\u6676\u306E\u9AD8\u5730\u306E\u3001\u9B54\u529B\u3092\u5E2F\u3073\u305F\u6728\u6750",180,{cold:!0},{name:"\u9B54\u529B\u3092\u5E2F\u3073\u308B",desc:"\u591C\u306B\u306A\u308B\u3068\u6DE1\u304F\u5149\u308B\u3002\u9B54\u6CD5\u306E\u529B\u306B\u5F37\u3044"},Rs("#4a4458","#c8b8ff","#9fe8ff"),9076912),woodCharred:As("\u713C\u3051\u70AD\u306E\u6728\u6750","\u7114\u306E\u706B\u5C71\u5730\u5E2F\u306E\u3001\u713C\u3051\u3066\u3082\u6B8B\u3063\u305F\u9ED2\u3044\u6728\u6750",150,{heat:!0,fire:!0},{name:"\u8010\u706B",desc:"\u706B\u5C71\u306E\u71B1\u3067\u3082\u71C3\u3048\u306A\u3044"},Rs("#2a2226","#6a5a50","#ff7a30"),3813942)},$h=Object.keys(Qf),ss={cold:{name:"\u5BD2\u3055",where:"\u767D\u5DBA\u306E\u96EA\u539F\u30FB\u6C34\u6676\u306E\u9AD8\u5730",effect:"\u51CD\u3063\u3066\u3082\u308D\u304F\u306A\u308B"},heat:{name:"\u6691\u3055",where:"\u967D\u708E\u306E\u7802\u6F20\u30FB\u7114\u306E\u706B\u5C71\u5730\u5E2F",effect:"\u4E7E\u3044\u3066\u3072\u3073\u5272\u308C\u308B"},fire:{name:"\u706B",where:"\u7114\u306E\u706B\u5C71\u5730\u5E2F",effect:"\u71C3\u3048\u3066\u3057\u307E\u3046"},water:{name:"\u6E7F\u6C17",where:"\u9727\u306E\u6E7F\u539F\u30FB\u6DF1\u7DD1\u306E\u68EE",effect:"\u8150\u3063\u3066\u5F31\u304F\u306A\u308B"}},Qe={...Qf,sword:{name:"\u65C5\u4EBA\u306E\u5263",desc:"\u4F7F\u3044\u6163\u308C\u305F\u7247\u624B\u5263\u30023\u6BB5\u30B3\u30F3\u30DC\u304C\u51FA\u305B\u308B",kind:"weapon",moveset:"sword",held:"sword",stance:"sword",power:1,icon:Wi.sword},sangrea:{name:"\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2",desc:"\u8840\u3092\u5438\u3063\u3066\u8108\u6253\u3064\u3001\u9ED2\u3044\u9B54\u5263\u3002\u901F\u304F\u91CD\u3044 4 \u6BB5\u306E\u9023\u6483\u3092\u653E\u3064",kind:"weapon",moveset:"blood",held:"sangrea",rarity:"blood",stance:"blood",power:1.7,speed:1.15,trail:16719920,passive:{id:"lifesteal",name:"\u5438\u8840",desc:"\u4E0E\u3048\u305F\u30C0\u30E1\u30FC\u30B8\u306E 10% \u3060\u3051 HP \u3092\u56DE\u5FA9\u3059\u308B",rate:.1},skills:["bloodGale","crimsonMoon","bloodRelease"],icon:Wi.sangrea},axe:{name:"\u6728\u3053\u308A\u306E\u65A7",desc:"\u91CD\u3044\u9244\u306E\u65A7\u3002\u9B54\u7269\u306B\u306F\u3042\u307E\u308A\u52B9\u304B\u306A\u3044\u304C\u3001\u6728\u3084\u67F5\u3092\u305F\u3084\u3059\u304F\u53E9\u304D\u5272\u308B",kind:"weapon",moveset:"axe",held:"axe",stance:"axe",power:.55,speed:.9,chop:3,breaker:3,trail:16773328,icon:Wi.axe},bloodAxe:{name:"\u8840\u65A7\u30AC\u30EB\u30E0\u30D8\u30C3\u30C9",desc:"\u8840\u3092\u5438\u3063\u3066\u8D64\u304F\u8108\u6253\u3064\u3001\u9ED2\u3044\u5927\u65A7\u3002\u57CE\u58C1\u3059\u3089\u7815\u304F\u3068\u8A00\u308F\u308C\u308B",kind:"weapon",moveset:"bloodAxe",held:"bloodAxe",rarity:"blood",stance:"bloodAxe",power:.9,speed:.95,chop:4,breaker:4.5,trail:16719920,passive:{id:"bleed",name:"\u88C2\u50B7",desc:"\u65AC\u3063\u305F\u9B54\u7269\u306B\u51FA\u8840\u3092\u4E0E\u3048\u3001\u3058\u308F\u3058\u308F\u3068 HP \u3092\u524A\u308B"},icon:Wi.bloodAxe},fence:{name:"\u6728\u306E\u67F5",desc:"4m \u306E\u67F5\u3002\u307E\u308F\u308A\u3092\u56F2\u3048\u3070\u3001\u9B54\u7269\u304C\u5165\u3063\u3066\u3053\u3089\u308C\u306A\u3044",kind:"build",build:"fence",held:null,stance:"item",stack:99,icon:Wi.fence},wall:{name:"\u4E38\u592A\u306E\u58C1",desc:"4m \u306E\u9AD8\u3044\u58C1\u3002\u67F5\u3088\u308A 2 \u500D\u4EE5\u4E0A\u4E08\u592B\u3067\u3001\u8DF3\u3093\u3067\u3082\u8D8A\u3048\u3089\u308C\u306A\u3044",kind:"build",build:"wall",held:null,stance:"item",stack:99,icon:Wi.wall},door:{name:"\u5927\u304D\u306A\u9580\u6249",desc:"8m \u306E\u4E21\u958B\u304D\u306E\u9580\u3002\u67F5\u3084\u58C1\u306E\u5217\u306E\u4E0A\u306B\u7F6E\u304F\u3068\u3001\u305D\u306E\u90E8\u5206\u3068\u5165\u308C\u66FF\u308F\u308B\u3002G \u30AD\u30FC\u3067\u958B\u3051\u9589\u3081",kind:"build",build:"door",held:null,stance:"item",stack:99,icon:Wi.door},trap:{name:"\u6728\u306E\u308F\u306A",desc:"\u8E0F\u3080\u3068\u6ABB\u304C\u843D\u3061\u3066\u304F\u308B\u3002\u6012\u3089\u305B\u305F\u30AF\u30DE\u3092\u8A98\u3044\u3053\u3093\u3067\u9589\u3058\u3053\u3081\u308B",kind:"build",build:"trap",held:null,stance:"item",stack:99,icon:Wi.trap},flag:{name:"\u62E0\u70B9\u306E\u65D7",desc:"\u67F5\u3067\u56F2\u3063\u305F\u4E2D\u306B\u7ACB\u3066\u308B\u3068\u3001\u305D\u3053\u304C\u62E0\u70B9\u306E\u7267\u5834\u306B\u306A\u308B\u3002\u30DA\u30C3\u30C8\u3092\u4F11\u307E\u305B\u3089\u308C\u308B",kind:"build",build:"flag",held:null,stance:"item",stack:99,icon:Wi.flag},meat:{name:"\u751F\u8089",desc:"\u308F\u306A\u306B\u304B\u304B\u3063\u305F\u30AF\u30DE\u306B\u3042\u3052\u308B\u3068\u3001\u4EF2\u9593\u306B\u306A\u308B\u3002\u30DA\u30C3\u30C8\u306B\u3042\u3052\u308B\u3068\u5143\u6C17\u306B\u306A\u308B",kind:"food",held:null,stance:"item",stack:99,icon:Wi.meat},potion:{name:"\u56DE\u5FA9\u85AC",desc:"\u98F2\u3080\u3068 HP \u304C 40 \u56DE\u5FA9\u3059\u308B",kind:"consumable",held:"potion",heal:40,icon:Wi.potion}},Fc=10,Js=!0;function tp(){let i=Array(Fc).fill(null);(Js?["axe","bloodAxe","sangrea","fence","wall","door","trap","meat","flag","potion"]:["axe","sword","potion"]).forEach((n,s)=>{i[s]={id:n,count:Qe[n].kind==="weapon"?1:Js?99:3}});let e=0;return{slots:i,infinite:Js,get selected(){return e},set selected(n){e=Math.max(-1,Math.min(Fc-1,n))},get held(){let n=i[e]??null;return n?{...Qe[n.id],id:n.id,count:n.count}:null},consumeHeld(){let n=i[e];!n||Js||(n.count--,n.count<=0&&(i[e]=null))},add(n,s=1){let r=Qe[n],o=r.stack??(r.kind==="consumable"?99:1);for(let a of i){if(s<=0)break;if(a&&a.id===n&&a.count<o){let c=Math.min(s,o-a.count);a.count+=c,s-=c}}for(;s>0;){let a=i.indexOf(null);if(a<0)break;let c=Math.min(s,o);i[a]={id:n,count:c},s-=c}return s}}}function eM(){let i=new qn({side:Xn,depthWrite:!1,uniforms:{top:{value:new st("#4f8fe0")},horizon:{value:new st("#fde8d2")},bottom:{value:new st("#8fc3e0")}},vertexShader:`
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
      }`});return new B(new te(1700,32,16),i)}function nM(i){let t=new Mt,e=new Mc({color:16777215,emissive:12107980,flatShading:!0}),n=new xn(1,1);for(let s=0;s<90;s++){let r=new Mt,o=4+Math.floor(i()*4);for(let l=0;l<o;l++){let h=10+i()*12,u=new B(n,e);u.scale.set(h,h*.6,h),u.position.set((l-o/2)*15+i()*6,i()*6,i()*12-6),r.add(u)}let a=i()*Math.PI*2,c=i()*1600;r.position.set(Math.cos(a)*c,130+i()*90,Math.sin(a)*c),t.add(r)}return t}function iM(){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d"),n=512/2;e.strokeStyle="#ffffff",e.fillStyle="#ffffff",e.lineCap="round",e.lineWidth=10,e.beginPath(),e.arc(n,n,236,0,Math.PI*2),e.stroke(),e.lineWidth=4,e.beginPath(),e.arc(n,n,206,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(n,n,110,0,Math.PI*2),e.stroke();for(let r=0;r<16;r++){let o=r/16*Math.PI*2;e.save(),e.translate(n+Math.cos(o)*221,n+Math.sin(o)*221),e.rotate(o),e.lineWidth=4,e.beginPath(),r%2?(e.moveTo(-6,-6),e.lineTo(6,6),e.moveTo(6,-6),e.lineTo(-6,6)):e.arc(0,0,5,0,Math.PI*2),e.stroke(),e.restore()}e.lineWidth=5;for(let r of[0,Math.PI/3]){e.beginPath();for(let o=0;o<=3;o++){let a=r+o/3*Math.PI*2-Math.PI/2;e.lineTo(n+Math.cos(a)*200,n+Math.sin(a)*200)}e.stroke()}e.beginPath(),e.arc(n,n,22,0,Math.PI*2),e.fill();let s=new Ti(t);return s.colorSpace=Oe,s}function sM(i){let t=ke.altar,e=t.h,n=new Mt;n.position.set(t.x,e,t.z);let s=xt(14275267,{roughness:.85}),r=vt(new B(new Ct(7.6,8,.4,16),s));r.position.y=.2;let o=vt(new B(new Ct(7,7.3,.4,16),s));o.position.y=.6,n.add(r,o),i.push({box:new ae(new F(t.x-7.3,e-1,t.z-7.3),new F(t.x+7.3,e+.8,t.z+7.3)),cyl:{x:t.x,z:t.z,r:7.3},color:14275267,kind:"spawn"});let a=new B(new Ve(6.4,48),new Ee({map:iM(),color:8384736,transparent:!0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.82,n.add(a);let c=xt(12432806),l=new It({color:10483434,emissive:4183744,emissiveIntensity:1.2});for(let g=0;g<4;g++){let y=Math.PI/4+g/4*Math.PI*2,m=Math.cos(y)*10,p=Math.sin(y)*10,w=vt(new B(new Ct(.5,.7,3.2,6),c));w.position.set(m,1.6,p);let x=new B(new Ze(.45,0),l);x.position.set(m,3.8,p),n.add(w,x),i.push({box:new ae(new F(t.x+m-.7,e-1,t.z+p-.7),new F(t.x+m+.7,e+3.2,t.z+p+.7)),cyl:{x:t.x+m,z:t.z+p,r:.7},color:12432806,kind:"part"})}let h=60,u=new Float32Array(h*3),f=new Float32Array(h);for(let g=0;g<h;g++){let y=Math.random()*Math.PI*2,m=Math.random()*6;u[g*3]=Math.cos(y)*m,u[g*3+1]=Math.random()*6,u[g*3+2]=Math.sin(y)*m,f[g]=Math.random()}let d=new ce;return d.setAttribute("position",new me(u,3)),n.add(new sn(d,new $e({color:11206642,size:.25,transparent:!0,opacity:.85,depthWrite:!1}))),{group:n,update(g,y){a.rotation.z=y*.15,a.material.opacity=.75+Math.sin(y*2)*.2;let m=d.attributes.position;for(let p=0;p<h;p++){let w=m.getY(p)+g*(.6+f[p]);w>7&&(w=.8),m.setY(p,w)}m.needsUpdate=!0}}}function rM(i,t){let e=new Mt,n=cn(e,i),s=ke.plateau,r=s.h,o=xt(7319119,{roughness:1}),a=E=>xt(E);n.cyl(5,25,s.x,r-1,s.z,a(11577242),11577242,"part",12);for(let E=4;E<24;E+=6){let R=new B(new Ct(5.15,5.15,.6,12),a(9405816));R.position.set(s.x,r+E,s.z),e.add(R)}n.cyl(6.5,2,s.x,r+24,s.z,a(13616822),13616822,"part",12);let c=new Ct(2.2,2,1,8),l=new $t(2,2.4,8);for(let E=0;E<8;E++){let R=.9+E*.72,M=r+3+E*3,T=s.x+Math.cos(R)*12,v=s.z+Math.sin(R)*12,_=new Mt,b=vt(new B(c,o)),H=vt(new B(l,a(10129296)));H.rotation.x=Math.PI,H.position.y=-1.7,_.add(b,H),_.position.set(T,M-.5,v),e.add(_),n.cyl(2.2,1,T,M-1,v,null,7319119)}n.cyl(2,.4,s.x,r+26,s.z,new It({color:15918793,roughness:.6}),16766826,"goal",16);let h=new B(new Ze(1.2,0),new It({color:9431295,emissive:4175584,emissiveIntensity:.9,flatShading:!0,transparent:!0,opacity:.9}));h.scale.y=1.6,h.position.set(s.x,r+30,s.z),e.add(h);let u=new Ke(8379647,30,30);u.position.copy(h.position),e.add(u);for(let E=0;E<10;E++){let R=E/10*Math.PI*2+.3,M=s.x+Math.cos(R)*19,T=s.z+Math.sin(R)*19,v=t(M,T),_=[7,3,5.5,1.5,8,2.5,6,4,7.5,2][E];if(n.cyl(1.3,_,M,v-.5,T,a(14209216),14209216,"part",8),_>5){let b=vt(new B(new Ct(1.7,1.7,.5,8),a(15130576)));b.position.set(M,v-.5+_+.25,T),e.add(b)}}let f=vt(new B(new Ct(1.2,1.2,8,8),a(14209216))),d=s.x-8,g=s.z+15;f.rotation.z=Math.PI/2,f.rotation.y=.6,f.position.set(d,t(d,g)+1,g),e.add(f);let y=ke.plateau.x-9,m=ke.plateau.z+22,p=t(y,m),w=a(13616822);n.box(1.6,7,1.6,y-4,p-.5,m,w,13616822),n.box(1.6,7,1.6,y+4,p-.5,m,w,13616822);let x=vt(new B(new Et(10.4,1.4,2),w));return x.position.set(y,p+7.2,m),e.add(x),{group:e,crystal:h,crystalBaseY:r+30}}function oM(i){let t=new Mt,e=cn(t,i),n=ke.cave,s=n.h,r=13,o=.6,a=xt(8221808,{side:he,transparent:!0,opacity:1}),c=vt(new B(new te(r,22,12,Math.PI+o,Math.PI*2-o*2,0,Math.PI/2),a));c.scale.y=.8,c.position.set(n.x,s-.5,n.z),t.add(c);let l=xt(9273976);for(let M of[-1,1]){let T=M*(o+.05),v=vt(new B(new Ri(2.6,0),l));v.position.set(n.x+Math.cos(T)*r,s+1.2,n.z+Math.sin(T)*r),v.scale.set(1,1.6,1),t.add(v)}for(let M=0;M<28;M++){let T=M/28*Math.PI*2,v=Math.atan2(Math.sin(T),Math.cos(T));Math.abs(v)<o||e.cyl(2.2,14,n.x+Math.cos(T)*(r+.5),s-1,n.z+Math.sin(T)*(r+.5),null,8221808,"wall")}let h=new It({color:10479871,emissive:4175584,emissiveIntensity:1.1,flatShading:!0}),u=new It({color:16759008,emissive:13656232,emissiveIntensity:.9,flatShading:!0}),f=new Ze(1,0);[[-7,-4],[-8,3],[-3,-8],[-2,8],[3,-9]].forEach(([M,T],v)=>{for(let _=0;_<4;_++){let b=new B(f,v%2?u:h),H=.5+Math.random()*.7;b.scale.set(H*.6,H*2,H*.6),b.position.set(n.x+M+(Math.random()-.5)*2,s+H,n.z+T+(Math.random()-.5)*2),b.rotation.set((Math.random()-.5)*.6,Math.random()*3,(Math.random()-.5)*.6),t.add(b)}e.cyl(1.4,3,n.x+M,s-.5,n.z+T,null,v%2?16759008:10479871,"part")});let g=new Ke(8379647,60,22);g.position.set(n.x-3,s+5,n.z),t.add(g);let y=new Mt,m=xt(9067067),p=xt(16040539,{metalness:.6,roughness:.35}),w=vt(new B(new Et(2,1.1,1.3),m));w.position.y=.55;let x=vt(new B(new Ct(.65,.65,2,10,1,!1,0,Math.PI),m));x.rotation.z=Math.PI/2,x.position.y=1.1;let E=new B(new Et(2.05,.18,1.35),p);E.position.y=1;let R=new B(new Et(.3,.35,.1),p);return R.position.set(0,.95,.68),y.add(w,x,E,R),y.position.set(n.x-9,s,n.z),y.rotation.y=Math.PI/2,t.add(y),e.cyl(1.2,1.7,n.x-9,s,n.z,null,16040539,"chest"),{group:t,update(M,T){let _=T&&Math.hypot(T.x-n.x,T.z-n.z)<r+1?.18:1;a.opacity+=(_-a.opacity)*Math.min(1,M*6),a.depthWrite=a.opacity>.95}}}function aM(i){let e=new Map,n=(l,h)=>l*1e5+h,s=(l,h)=>{let u=Math.floor(l.box.min.x/24),f=Math.floor(l.box.max.x/24),d=Math.floor(l.box.min.z/24),g=Math.floor(l.box.max.z/24);for(let y=u;y<=f;y++)for(let m=d;m<=g;m++)h(n(y,m))},r=l=>s(l,h=>{e.has(h)||e.set(h,[]),e.get(h).push(l)});for(let l of i)r(l);let o=0,a=[],c=(l,h)=>{o++,a.length=0;let u=Math.floor(l/24),f=Math.floor(h/24);for(let d=u-1;d<=u+1;d++)for(let g=f-1;g<=f+1;g++){let y=e.get(n(d,g));if(y)for(let m of y)m._stamp!==o&&(m._stamp=o,a.push(m))}return a.slice()};return c.add=l=>{i.push(l),r(l)},c.remove=(l,h=l.box)=>{let u=i.indexOf(l);u>=0&&i.splice(u,1),s({box:h},f=>{let d=e.get(f),g=d?d.indexOf(l):-1;g>=0&&d.splice(g,1)})},c}var cM=120;function lM(i){let e=new Map;for(let d of i){let g=Qe[Yh[d.region.id]];d.woodId=Yh[d.region.id],d.maxHp=Math.round(g.durability*.35),d.hp=d.maxHp,d.state="stand",d.t=0;let y=Math.floor(d.x/16)*1e5+Math.floor(d.z/16);e.has(y)||e.set(y,[]),e.get(y).push(d)}let n=new Set,s=new be,r=new be,o=new be,a=new be,c=new be,l=new F,h=new be().makeScale(0,0,0);function u(d){d.orig||(d.orig=d.parts.map(g=>{let y=new be;return g.mesh.getMatrixAt(g.index,y),y}))}function f(d,g,y){c.makeTranslation(d.x,d.y,d.z),a.makeTranslation(-d.x,-d.y,-d.z),r.makeRotationAxis(l.set(d.axisX,0,d.axisZ),g),o.makeScale(y,y,y),d.parts.forEach((m,p)=>{s.copy(c).multiply(r).multiply(o).multiply(a).multiply(d.orig[p]),m.mesh.setMatrixAt(m.index,y<=0?h:s),m.mesh.instanceMatrix.needsUpdate=!0})}return{chop(d,g,{range:y,arc:m,damage:p}){let w=[],x=Math.sin(g),E=Math.cos(g),R=Math.floor(d.x/16),M=Math.floor(d.z/16);for(let T=R-1;T<=R+1;T++)for(let v=M-1;v<=M+1;v++)for(let _ of e.get(T*1e5+v)??[]){if(_.state==="gone"||_.state==="fall"||_.state==="grow")continue;let b=_.x-d.x,H=_.z-d.z,I=Math.hypot(b,H);if(I>y+.8||Math.abs(_.y-d.y)>4||I>1.5&&Math.acos(Je.clamp((b*x+H*E)/I,-1,1))>m/2)continue;u(_);let S=Math.max(1,Math.round(p*(.85+Math.random()*.3)));_.hp-=S;let A=Math.max(I,.001);_.axisX=H/A,_.axisZ=-b/A;let P=_.hp<=0;_.state=P?"fall":"shake",_.t=0,n.add(_),w.push({tree:_,pos:new F(_.x,_.y+2,_.z),damage:S,felled:P,woodId:_.woodId,amount:P?2+Math.floor(Math.random()*3):0})}return w},update(d){for(let g of n)if(g.t+=d,g.state==="shake"){let y=g.t/.3;f(g,Math.sin(g.t*45)*.06*Math.max(0,1-y),1),y>=1&&(f(g,0,1),g.state="stand",n.delete(g))}else if(g.state==="fall"){let y=Math.min(g.t/1.1,1);f(g,Math.PI/2*y*y,1-Math.max(0,y-.8)*5),y>=1&&(f(g,0,0),g.state="gone",g.t=0,g.savedBox=g.collider.box.clone(),g.collider.box.makeEmpty())}else if(g.state==="gone")g.t>=cM&&(g.state="grow",g.t=0);else if(g.state==="grow"){let y=Math.min(g.t/1.5,1);f(g,0,1-Math.pow(1-y,3)),y>=1&&(g.collider.box.copy(g.savedBox),g.hp=g.maxHp,g.state="stand",n.delete(g))}}}}function ep(i,t,e={}){let n=!!e.lite,s=Lc(2024);i.background=new st("#fde8d2"),i.fog=new hc("#e6eef2",300,n?1e3:1500);let r=eM();i.add(r);let o=nM(s);i.add(o),i.add(new vc(14478591,8032090,1));let a=new F(50,80,20),c=new bc(16773340,2.4);c.position.copy(a),c.castShadow=!0,c.shadow.mapSize.set(n?1024:2048,n?1024:2048),c.shadow.camera.left=-60,c.shadow.camera.right=60,c.shadow.camera.top=60,c.shadow.camera.bottom=-60,c.shadow.camera.far=250,c.shadow.bias=-5e-4,c.shadow.normalBias=.05,i.add(c),i.add(c.target);let l=vf(Ks);l.maxR=Yn-30;let h=Ef([l]);i.add(h.group);let u=h.sample,f=(S,A)=>Ks[l.regionIndexAt(S,A)],d=(S,A)=>u(S,A)>.3?f(S,A):null,g=Zf(h.heightTex);i.add(g.mesh);let y=Kf(u);i.add(y.group);let m=[],p=[],w=[],x=sM(m);i.add(x.group);let E=rM(m,u);i.add(E.group);let R=oM(m);i.add(R.group);let M=Cf(m,u);i.add(M.group),Ks.forEach((S,A)=>{if(S.decorate){let k=S.decorate(m,u,Lc(S.cx*7+S.cz*13+5));i.add(k.group),p.push(k.update)}let P=(k,O)=>l.weightOf(A,k,O),N=Lf(S,m,u,h.slopeAt,Lc(S.cx*3+S.cz*11+1),P,n?.35:1);i.add(N.group),w.push(...N.trees)});let T=Jf($f,m,u);i.add(T.group);let v=Mf(h.colorAt,u),_=lM(w),b=aM(m),H=new F(ke.altar.x,ke.altar.h+.8,ke.altar.z),I=0;return{sun:c,spawnPoint:H,colliders:m,collidersNear:b,mapImage:v,bridges:T.bridges,waterLevel:ti,groundHeight:u,slopeAt:h.slopeAt,islandAt:d,regionAt:f,chopTrees:_.chop,addCollider:b.add,removeCollider:b.remove,update(S,A,P){I+=S,P&&r.position.copy(P),o.rotation.y+=S*.004,g.update(I),A&&g.mesh.position.set(A.x,ti,A.z),y.update(S,I),x.update(S,I),M.update(I),R.update(S,A);for(let N of p)N(S,I,A);_.update(S),E.crystal.rotation.y+=S*.8,E.crystal.position.y=E.crystalBaseY+Math.sin(I*1.5)*.4,A&&(c.target.position.copy(A),c.position.copy(A).add(a))}}}var Bc={sword:[{anim:0,name:"\u7E26\u65AC\u308A",duration:.42,hitTime:.14,range:4.6,arc:1.7,power:1,knockback:1,lunge:7,hop:0,shake:.18,hitStop:.05},{anim:1,name:"\u6A2A\u8599\u304E",duration:.46,hitTime:.17,range:5,arc:3,power:1.1,knockback:1.4,lunge:9,hop:0,shake:.25,hitStop:.06},{anim:2,name:"\u56DE\u8EE2\u65AC\u308A",duration:.62,hitTime:.3,range:5.6,arc:Math.PI*2,power:1.7,knockback:2.2,lunge:4,hop:16,shake:.6,hitStop:.1}],fists:[{anim:3,name:"\u30B8\u30E3\u30D6",duration:.28,hitTime:.08,range:3.2,arc:1.4,power:.45,knockback:.6,lunge:5,hop:0,shake:.08,hitStop:.03},{anim:4,name:"\u30B9\u30C8\u30EC\u30FC\u30C8",duration:.38,hitTime:.12,range:3.6,arc:1.4,power:.7,knockback:1.2,lunge:8,hop:0,shake:.15,hitStop:.05},{anim:14,name:"\u30A2\u30C3\u30D1\u30FC",duration:.46,hitTime:.15,range:3.6,arc:1.6,power:1,knockback:1.6,lunge:6,hop:10,shake:.25,hitStop:.07}],blood:[{anim:10,name:"\u9006\u8888\u88DF",duration:.34,hitTime:.1,range:4.9,arc:2,power:1,knockback:.8,lunge:8,hop:0,shake:.2,hitStop:.05},{anim:11,name:"\u8888\u88DF\u65AC\u308A",duration:.36,hitTime:.11,range:4.9,arc:2,power:1.1,knockback:1,lunge:8,hop:0,shake:.24,hitStop:.05},{anim:12,name:"\u8840\u9583\u7A81\u304D",duration:.42,hitTime:.13,range:7.5,arc:.7,power:1.5,knockback:1.8,lunge:18,hop:0,shake:.3,hitStop:.07},{anim:13,name:"\u8840\u65CB",duration:.72,hitTime:.22,hitTimes:[.22,.44],range:6.2,arc:Math.PI*2,power:1.3,knockback:2.4,lunge:4,hop:12,shake:.55,hitStop:.09}],axe:[{anim:15,name:"\u85AA\u5272\u308A",duration:.58,hitTime:.27,range:4.4,arc:1.5,power:1,knockback:1.2,lunge:5,hop:0,shake:.35,hitStop:.07},{anim:1,name:"\u6A2A\u632F\u308A",duration:.5,hitTime:.19,range:4.8,arc:2.6,power:1,knockback:1.6,lunge:6,hop:0,shake:.3,hitStop:.06},{anim:7,name:"\u515C\u5272\u308A",duration:.95,hitTime:.6,range:5.2,arc:2.2,power:1.8,knockback:2.4,lunge:6,hop:18,shake:.8,hitStop:.12}],bloodAxe:[{anim:15,name:"\u8840\u5272\u308A",duration:.54,hitTime:.26,range:4.8,arc:1.6,power:1,knockback:1.3,lunge:7,hop:0,shake:.4,hitStop:.07},{anim:1,name:"\u88C2\u304D\u6255\u3044",duration:.48,hitTime:.18,range:5.2,arc:2.8,power:1.1,knockback:1.6,lunge:8,hop:0,shake:.35,hitStop:.06},{anim:13,name:"\u8840\u5D50",duration:.72,hitTime:.22,hitTimes:[.22,.44],range:6,arc:Math.PI*2,power:1,knockback:2,lunge:4,hop:12,shake:.5,hitStop:.08},{anim:7,name:"\u65AD\u982D",duration:.95,hitTime:.6,range:6,arc:2.4,power:2.2,knockback:3,lunge:8,hop:20,shake:1,hitStop:.14}]},aw=Bc.sword,np={0:.42,1:.46,2:.62,3:.28,4:.38,5:.9,6:.45,7:.95,8:.6,9:.9,10:.34,11:.36,12:.42,13:.72,14:.46,15:.58},ip=.45;var Rr=(i,t={})=>new It({color:i,metalness:.3,roughness:.32,flatShading:!0,...t}),js=(i,t,e=1.2,n={})=>new It({color:i,emissive:t,emissiveIntensity:e,flatShading:!0,...n});function Qs(i,t){let e=new Oi;i.forEach(([s,r],o)=>o?e.lineTo(s,r):e.moveTo(s,r)),e.closePath();let n=new xr(e,{depth:t,bevelEnabled:!0,bevelThickness:t*.35,bevelSize:.02,bevelSegments:1});return n.translate(0,0,-t/2),n.rotateY(-Math.PI/2),n}function hM(i=2757656,t=.5){let e=new B(new Ct(.075,.085,t,8),new It({color:i,roughness:.8}));return e.rotation.x=Math.PI/2,e.position.z=-.02,e}function uM(){let i=new Mt,t=[[.3,-.17],[1.4,-.22],[2.05,-.15],[2.65,0]];for(let u=5;u>=0;u--){let f=.5+u*.3;t.push([f+.2,.17+(u>3?-.02:0)],[f+.1,.27],[f,.18])}t.push([.3,.17]);let e=new B(Qs(t,.07),Rr(2761776,{roughness:.3})),n=new B(Qs([[.4,-.06],[1.6,-.08],[2.35,0],[1.6,.08],[.4,.06]],.1),js(16719920,14684192,1.6)),s=js(16738938,16719936,1.8);for(let u=0;u<4;u++)for(let f of[-1,1]){let d=new B(new Et(.02,u%2?.1:.06,.06),s);d.position.set(f*.055,u%2?.12:-.13,.7+u*.35),d.rotation.x=u*.7,i.add(d)}let r=Rr(2363416);for(let u of[-1,1]){let f=[[0,0],[.1,u*.25],[.02,u*.5],[.16,u*.42],[.12,u*.66],[.26,u*.3],[.18,0]],d=new B(Qs(f,.05),r);d.position.z=.2,i.add(d)}let o=new B(new te(.08,10,8),js(16765136,16719920,1.2));o.scale.set(.6,1,.6),o.position.set(0,0,.26);let a=new B(new Et(.1,.1,.02),new Ee({color:1703941}));a.scale.set(1,.25,1),a.position.set(0,0,.27),a.rotation.y=Math.PI/2;let c=new B(new $t(.08,.2,6),r);c.rotation.x=-Math.PI/2,c.position.z=-.36;let l=Rr(4864580);for(let u=0;u<3;u++){let f=new B(new yn(.035,.012,4,8),l);f.position.set(0,-.06-u*.06,-.44),f.rotation.y=u%2?Math.PI/2:0,i.add(f)}let h=new B(new Ze(.06,0),js(16722490,12582936,1.5));return h.position.set(0,-.25,-.44),i.add(e,n,o,a,hM(1707026,.5),c,h),{group:i,pulse:[n.material,o.material,s,h.material]}}function dM(){let i=new Mt,t=new It({color:10119742,roughness:.85,flatShading:!0}),e=new B(new Ct(.075,.09,2.15,7),t);e.rotation.x=Math.PI/2,e.position.z=.7;let n=new B(new Ct(.1,.1,.42,7),new It({color:5913128,roughness:.9}));n.rotation.x=Math.PI/2;let s=Rr(9082532,{roughness:.45}),r=new B(Qs([[1.3,.12],[1.74,.12],[1.92,-.2],[2.08,-.66],[1.62,-.56],[1.36,-.14]],.13),s),o=new B(Qs([[1.9,-.18],[2,-.2],[2.16,-.7],[2.06,-.68]],.07),Rr(15265524,{roughness:.2})),a=new B(new Et(.2,.2,.36),s);a.position.set(0,.2,1.53);let c=new B(new yn(.1,.03,5,10),s);return c.position.z=1.2,i.add(e,n,r,o,a,c),i.scale.setScalar(1.15),{group:i,pulse:[],tip:2.3}}function fM(){let i=new Mt,t=new It({color:2760742,roughness:.6,flatShading:!0}),e=new B(new Ct(.08,.1,2.5,7),t);e.rotation.x=Math.PI/2,e.position.z=.8;let n=js(9048096,6291472,.8);for(let f=0;f<3;f++){let d=new B(new Ct(.11,.11,.1,7),n);d.rotation.x=Math.PI/2,d.position.z=-.1+f*.28,i.add(d)}let s=(f,d,g,y)=>{let m=[];for(let x=0;x<=12;x++){let E=-1.15+x/12*2.3;m.push([1.72+Math.sin(E)*f,.08-Math.cos(E)*f])}for(let x=12;x>=0;x--){let E=-1+x/12*2,R=d+(y&&x%2?.1:0);m.push([1.72+Math.sin(E)*R*.8,.08-Math.cos(E)*R+.05])}return Qs(m,g)},r=new B(s(.98,.42,.12,!0),Rr(1446426,{roughness:.3})),o=new B(s(1.06,.6,.06,!1),js(16719920,14684192,1.6)),a=Rr(2363416),c=new B(Qs([[1.5,.1],[1.62,.72],[1.78,.52],[1.96,.1]],.1),a),l=new B(Qs([[1.95,.1],[2.55,0],[1.95,-.1]],.1),a),h=new B(new te(.1,10,8),js(16765136,16719920,1.3));h.scale.set(1.3,1,1),h.position.set(0,-.28,1.72);let u=new B(new Ze(.13,0),js(16722490,12582936,1.5));return u.position.z=-.5,i.add(e,r,o,c,l,h,u),i.scale.setScalar(1.3),{group:i,pulse:[o.material,h.material,n,u.material],tip:3.1}}var sp={sangrea:uM,axe:dM,bloodAxe:fM};function rp(i){let t=sp[i]();return t.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t.base=t.pulse.map(e=>e.emissiveIntensity),t}var op=Object.keys(sp);var pM={skin:16769223,hair:3882874,tunic:2864544,scarf:15764028,pants:4869737,boots:8015414,belt:7030320},ni=(i,t={})=>new It({color:i,roughness:.6,...t});function _i(i){return i.castShadow=!0,i.receiveShadow=!0,i}function aa(i,t,e,n=0){let s=t*i,r=e*i,o=Math.sqrt(Math.max(0,i*i-s*s-r*r))+n;return new F(s,r,o)}function ap(i=pM){let t=new Mt,e=new Mt;t.add(e);let n=(V,ft,wt,Ot,bt,_e,ve)=>{let ze=new Mt;ze.position.set(V,ft,0);let Le=_i(new B(new _c(Ot,wt,4,10),ni(bt)));Le.position.y=-wt/2-Ot*.5,ze.add(Le);let de=_i(new B(new te(Ot*ve,12,10),ni(_e)));return de.position.y=-wt-Ot*.7,ze.add(de),e.add(ze),{pivot:ze,end:de}},s=n(-.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot,r=n(.42,1.5,.7,.34,i.pants,i.boots,1.3).pivot;for(let V of[s,r])V.children[1].scale.set(1,.8,1.35);let o=new Mt;o.position.y=1.4;let a=_i(new B(new Ct(.72,1,1.7,16),ni(i.tunic)));a.position.y=.85;let c=_i(new B(new yn(.86,.1,6,20),ni(i.belt)));c.rotation.x=Math.PI/2,c.position.y=.55;let l=new B(new Et(.26,.22,.08),ni(16040539,{metalness:.6,roughness:.3}));l.position.set(0,.55,.93),o.add(a,c,l),e.add(o);let h=n(-.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot,u=n(.98,2.95,.75,.26,i.tunic,i.skin,1.15).pivot;h.rotation.z=-.12,u.rotation.z=.12;let f=new Mt;f.position.y=-.95,f.rotation.x=.35;let d=ni(15134453,{metalness:.7,roughness:.25}),g=_i(new B(new Et(.09,.3,1.6),d));g.position.z=1.05;let y=_i(new B(new $t(.12,.3,4),d));y.rotation.x=Math.PI/2,y.scale.x=.5,y.position.z=1.95;let m=_i(new B(new Et(.2,.62,.12),ni(16040539,{metalness:.6,roughness:.3})));m.position.z=.28;let p=new B(new Ct(.08,.08,.45,8),ni(7030320));p.rotation.x=Math.PI/2;let w=new Mt;w.add(g,y,m,p),f.add(w),u.add(f);let x={},E=null,R=new Mt;R.position.set(0,-1.32,.18),R.scale.setScalar(1.6);let M=new B(new te(.22,12,10),ni(14677247,{transparent:!0,opacity:.55,roughness:.1})),T=new B(new te(.17,12,10),new It({color:16734830,emissive:13639744,emissiveIntensity:.6})),v=new B(new Ct(.07,.09,.22,8),ni(14677247,{transparent:!0,opacity:.55}));v.position.y=.26;let _=new B(new Ct(.08,.07,.1,8),ni(11565653));_.position.y=.4,R.add(T,M,v,_),R.visible=!1,u.add(R);let b=new B(new Ms(1.4,3.9,24,1,-.4,3),new Ee({color:15269883,transparent:!0,opacity:0,side:he,depthWrite:!1,blending:Qn}));b.position.set(.9,2.9,0),b.rotation.y=-Math.PI/2,b.visible=!1,e.add(b);let H=new B(new Ms(1.4,4.4,32,1,-2.35,3.4),b.material.clone());H.rotation.x=-Math.PI/2,H.position.y=2.8,H.visible=!1,e.add(H);let I=new B(new Ms(1.6,5.2,48),b.material.clone());I.material.color.set(16774344),I.rotation.x=-Math.PI/2,I.position.y=2.4,I.visible=!1,t.add(I);let S=new Mt;S.position.set(0,2.9,0);let A=new B(new Ms(1.4,4.2,28,1,-.5,3.1),b.material.clone());A.rotation.y=-Math.PI/2,S.add(A),S.visible=!1,e.add(S);let P=new B(new $t(.5,1,10,1,!0).rotateX(-Math.PI/2).translate(0,0,.5),b.material.clone());P.position.set(.7,2.8,.6),P.visible=!1,e.add(P);let N=_i(new B(new yn(.62,.22,8,20),ni(i.scarf)));N.rotation.x=Math.PI/2,N.position.y=3.1,e.add(N);let k=new Mt;k.position.set(.35,3.05,-.55);let O=_i(new B(new Et(.4,1.2,.12),ni(i.scarf)));O.position.y=-.55,k.add(O),e.add(k);let G=1.05,L=new Mt;L.position.y=4.05;let z=_i(new B(new te(G,28,20),ni(i.skin,{roughness:.75,emissive:5913130,emissiveIntensity:.35})));L.add(z);let Y=ni(i.hair,{roughness:.5,flatShading:!0}),X=_i(new B(new te(G*1.08,20,14,0,Math.PI*2,0,Math.PI*.52),Y));X.rotation.x=-.35,L.add(X);for(let V=-2;V<=2;V++){let ft=_i(new B(new $t(.2,.55,4),Y)),wt=aa(G,V*.22,.55,.02);ft.position.copy(wt),ft.rotation.set(Math.PI+.5,0,V*.15),L.add(ft)}let $=_i(new B(new $t(.14,.7,5),Y));$.position.set(.1,G*1.1,.1),$.rotation.set(.3,0,-.5),L.add($);let Z=new It({color:1907507,roughness:.3}),ct=new Ee({color:16777215}),it=[];for(let V of[-1,1]){let ft=new B(new te(.15,12,10),Z);ft.scale.set(.9,1.35,.45),ft.position.copy(aa(G,V*.34,-.02,-.03)),ft.lookAt(ft.position.clone().multiplyScalar(2)),L.add(ft),it.push(ft);let wt=new B(new te(.05,8,6),ct);wt.position.copy(aa(G,V*.34+.05,.07,.03)),L.add(wt)}let ot=new Ee({color:16751266,transparent:!0,opacity:.6});for(let V of[-1,1]){let ft=new B(new Ve(.13,16),ot);ft.scale.x=1.4;let wt=aa(G,V*.55,-.25,.01);ft.position.copy(wt),ft.lookAt(wt.clone().multiplyScalar(2)),L.add(ft)}let ut=new B(new yn(.1,.025,6,12,Math.PI),new Ee({color:5909805}));ut.position.copy(aa(G,0,-.3,.005)),ut.rotation.z=Math.PI,ut.rotation.x=-.3,L.add(ut),e.add(L);let rt=Math.random()*10,lt=-1,W=0,Q=0,J=0,ht=0,at=2+Math.random()*3,Lt=-1,_t=0,U=1,D="fists",j=1,pt=0,mt=!1,dt=0,kt=!0,Rt=-1,Ht=-1,Wt=0,Kt=0,gt=0,ie=-1,Bt={yaw:0,pitch:0,targetYaw:0,targetPitch:0,timer:2},Jt=12,Gt=!0,Nt=0,jt=[];e.traverse(V=>{V.isMesh&&V.material.isMeshStandardMaterial&&!jt.includes(V.material)&&jt.push(V.material)});let we=jt.map(V=>({color:V.emissive.getHex(),intensity:V.emissiveIntensity})),tt=Je.lerp,Zt=(V,ft,wt,Ot)=>V+(ft-V)*Math.min(1,Ot*wt);function Tt(V,ft){let wt=ft.speed??0,Ot=ft.grounded??!0;rt+=V,Q=Zt(Q,Ot?wt:0,10,V),J=Zt(J,Ot?0:1,12,V),ht=Zt(ht,ft.run&&Ot?1:0,8,V),W+=V*10*Math.max(Q,.2)*(1+.55*ht);let bt=(1-Q)*(1-J);h.rotation.y=0,u.rotation.y=0,f.rotation.x=.35;let _e=0;Ot&&!kt&&(Rt=0),!Ot&&kt&&(Ht=0),kt=Ot;let ve=t.rotation.y-Wt;ve=Math.atan2(Math.sin(ve),Math.cos(ve)),Wt=t.rotation.y,Kt=Zt(Kt,Je.clamp(-(ve/Math.max(V,.001))*.04,-.22,.22)*Q,8,V);let ze=Lt>=0||lt>=0||mt;bt>.9&&!ze?gt+=V:(gt=0,ie=-1),ie<0&&gt>7&&(ie=0);let Le=Math.sin(rt*2.2),de=(Math.sin(rt*1.3)*.7+Math.sin(rt*.47+1)*.3)*bt,un=Math.sin(rt*.8+.5)*bt,Zn=Math.sin(W)*.8*Q*(1+.45*ht),ir=Math.abs(Math.sin(W))*.14*Q*(1+.6*ht);if(h.rotation.x=Zn+de*.06+Le*.03*bt,u.rotation.x=-Zn+de*.06-Le*.03*bt,h.rotation.z=-.12-Le*.035*bt-Q*.05,u.rotation.z=.12+Le*.035*bt+Q*.05,s.rotation.x=-Zn+de*.03,r.rotation.x=Zn+de*.03,s.rotation.z=un*.025,r.rotation.z=un*.025,o.position.y=1.4+ir+Le*.025*bt,o.scale.set(1+Le*.012*bt,1,1+Le*.018*bt),o.rotation.y=-Math.sin(W)*.14*Q,Bt.timer-=V,Bt.timer<=0){let Dt=Math.random()<.6;Bt.targetYaw=Dt?(Math.random()-.5)*1.1:0,Bt.targetPitch=Dt?(Math.random()-.4)*.25:0,Bt.timer=1.5+Math.random()*3}Bt.yaw=Zt(Bt.yaw,Bt.targetYaw*bt,5,V),Bt.pitch=Zt(Bt.pitch,Bt.targetPitch*bt,5,V),L.position.y=4.05+ir*1.1+Le*.04*bt,L.rotation.y=Bt.yaw,L.rotation.x=Bt.pitch+Math.sin(W*2)*.04*Q-de*.03,L.rotation.z=Math.sin(W)*.05*Q+un*.03,N.position.y=3.1+ir,k.position.y=3.05+ir,ht>.01&&(h.rotation.x-=.35*ht,u.rotation.x-=.35*ht,h.rotation.z-=.12*ht,u.rotation.z+=.12*ht),k.rotation.x=-.2-Q*.9-ht*.5-J*.6+Math.sin(rt*6)*.08*(.3+Q)+de*.05,k.rotation.z=Math.sin(rt*2.3)*.08*(.4+Q);let en=de*.035+Q*.12+ht*.18,Ps=un*.025+Math.sin(W)*.045*Q+Kt,Fn=1,oi=bt+Q*.5;if(D==="fists"){let Dt=Math.abs(Math.sin(rt*5.5))*bt;h.rotation.x=tt(h.rotation.x,-1.15+Math.sin(rt*5.5)*.06,oi),h.rotation.z=tt(h.rotation.z,.42,oi),u.rotation.x=tt(u.rotation.x,-.95-Math.sin(rt*5.5+1)*.06,oi),u.rotation.z=tt(u.rotation.z,-.42,oi),Fn-=Dt*.035,en+=.05*bt,o.rotation.y=tt(o.rotation.y,.18,bt),L.rotation.x+=.08*bt}else if(D==="sword")u.rotation.x=tt(u.rotation.x,-.25+Math.max(0,Math.sin(rt*.7))*.2,bt),f.rotation.x=.35+.3*bt;else if(D==="axe"){let Dt=Lt<0?oi:0,ge=Math.max(0,Math.sin(rt*.9))**8;u.rotation.x=tt(u.rotation.x,-.35-ge*.35,Dt),u.rotation.z=tt(u.rotation.z,.2,Dt),f.rotation.x=tt(.35,1.05-ge*.3,Dt),h.rotation.x=tt(h.rotation.x,.1,bt),en+=.04*bt,o.rotation.y=tt(o.rotation.y,-.12,bt)}else if(D==="bloodAxe"){let Dt=Lt<0?oi:0;u.rotation.x=tt(u.rotation.x,.35+Math.sin(rt*1.2)*.04,Dt),u.rotation.z=tt(u.rotation.z,.3,Dt),f.rotation.x=tt(.35,1.55,Dt),h.rotation.x=tt(h.rotation.x,-.5,bt),h.rotation.z=tt(h.rotation.z,-.3,bt),en+=.14*bt,L.rotation.x+=.12*bt,Bt.yaw*=.4,L.rotation.y=Bt.yaw,s.rotation.x-=.2*bt,r.rotation.x+=.15*bt}else D==="blood"&&(u.rotation.x=tt(u.rotation.x,-.55+Math.sin(rt*1.1)*.05,oi),u.rotation.z=tt(u.rotation.z,.35,oi),f.rotation.x=.35+.55*oi,h.rotation.x=tt(h.rotation.x,-.35,bt),h.rotation.z=tt(h.rotation.z,-.55,bt),en+=.1*bt,Ps+=.05*bt,L.rotation.x+=.14*bt,Bt.yaw*=.4,L.rotation.y=Bt.yaw,s.rotation.x-=.15*bt,r.rotation.x+=.2*bt);if(ie>=0){ie+=V;let Dt=Math.min(ie/2.4,1),ge=Math.sin(Math.min(Dt*3,1)*Math.PI/2)*(Dt>.7?(1-Dt)/.3:1);h.rotation.z=tt(h.rotation.z,-2.7,ge),u.rotation.z=tt(u.rotation.z,2.7,ge),h.rotation.x=tt(h.rotation.x,-.3,ge),u.rotation.x=tt(u.rotation.x,-.3,ge),en-=.12*ge,L.rotation.x-=.25*ge,Fn+=.04*ge,it.forEach(xe=>{xe.scale.y=tt(1.35,.2,ge)}),Dt>=1&&(ie=-1,gt=-6-Math.random()*6)}if(Rt>=0){Rt+=V;let Dt=Rt/.25;Fn-=Math.sin(Math.min(Dt,1)*Math.PI)*.16,s.rotation.x-=Math.sin(Math.min(Dt,1)*Math.PI)*.3,r.rotation.x-=Math.sin(Math.min(Dt,1)*Math.PI)*.3,Dt>=1&&(Rt=-1)}if(Ht>=0){Ht+=V;let Dt=Ht/.2;Fn+=Math.sin(Math.min(Dt,1)*Math.PI)*.1,Dt>=1&&(Ht=-1)}if(J>.01&&(h.rotation.z=tt(h.rotation.z,-1.1,J),u.rotation.z=tt(u.rotation.z,1.1,J),h.rotation.x=tt(h.rotation.x,-.3,J),u.rotation.x=tt(u.rotation.x,-.3,J),s.rotation.x=tt(s.rotation.x,-.7,J),r.rotation.x=tt(r.rotation.x,.2,J)),at-=V,ie<0){let Dt=at<.12;for(let ge of it)ge.scale.y=Dt?.15:1.35}if(at<0&&(at=2+Math.random()*3),b.visible=H.visible=I.visible=S.visible=P.visible=!1,Lt>=0){Lt+=V*U;let Dt=Lt,ge=np[_t],xe=C=>1-Math.pow(1-Math.min(Math.max(C,0),1),3),Ut=(C,q)=>Math.min(Math.max((Dt-C)/(q-C),0),1),Li=Ut(ge-.18,ge);if(_t===0){let C;Dt<.1?C=tt(u.rotation.x,-2.8,xe(Dt/.1)):Dt<.22?C=tt(-2.8,-.15,xe(Ut(.1,.22))):C=tt(-.15,u.rotation.x,Li),u.rotation.x=C,u.rotation.z=.25,h.rotation.x=tt(h.rotation.x,.5,1-Li),o.rotation.y=Dt<.1?-.25*(Dt/.1):tt(-.25,.2,Ut(.1,.22))*(1-Li),en+=Dt<.1?-.05:.12*(1-Ut(.1,.4)),b.visible=Dt>.1&&Dt<.36,b.material.opacity=Dt<.22?.75:.75*(1-Ut(.22,.36))}else if(_t===1){let C=xe(Ut(0,.1))*(1-Li),q=xe(Ut(.1,.26));u.rotation.z=tt(u.rotation.z,1.45,C),u.rotation.x=0,u.rotation.y=tt(0,tt(.9,-2.3,q),C),f.rotation.x=tt(.35,1.25,C),h.rotation.z=tt(h.rotation.z,-.9,C),h.rotation.y=tt(0,tt(.6,-.4,q),C),o.rotation.y=tt(.4,-.45,q)*C,Ps+=tt(.08,-.1,q)*C,en+=.08*C,L.rotation.y=tt(.3,-.3,q)*C,H.visible=Dt>.1&&Dt<.4,H.material.opacity=Dt<.26?.7:.7*(1-Ut(.26,.4))}else if(_t===2){let C=xe(Ut(0,.12)),q=Ut(.12,.42),K=C*(1-Li);u.rotation.z=tt(u.rotation.z,1.5,K),u.rotation.x=0,u.rotation.y=tt(0,.7,K)*(1-q*.6),f.rotation.x=tt(.35,1.3,K),h.rotation.z=tt(h.rotation.z,-1.3,K),s.rotation.x-=.5*C*(1-q),r.rotation.x+=.3*C*(1-q),Fn-=.12*C*(1-Ut(.12,.2)),_e=-Math.PI*2*(1-Math.pow(1-q,2)),L.rotation.y=0,I.visible=Dt>.16&&Dt<.5,I.material.opacity=.75*(1-Ut(.3,.5)),I.scale.setScalar(.8+Ut(.16,.5)*.35)}else if(_t===3){let C=xe(Ut(0,.07))*(1-Ut(.14,ge));h.rotation.x=tt(h.rotation.x,-1.55,C),h.rotation.z=tt(h.rotation.z,.15,C),u.rotation.x=tt(u.rotation.x,-.9,.7),u.rotation.z=tt(u.rotation.z,-.35,.7),o.rotation.y=.25*C,en+=.06*C}else if(_t===4){let C=xe(Ut(0,.05))*(1-Ut(.05,.12)),q=xe(Ut(.05,.12))*(1-Ut(.2,ge));u.rotation.x=tt(tt(u.rotation.x,-.4,C),-1.6,q),u.rotation.z=tt(u.rotation.z,-.1,q),h.rotation.x=tt(h.rotation.x,-.9,.7),h.rotation.z=tt(h.rotation.z,.35,.7),o.rotation.y=tt(.2*C,-.35,q),en+=.12*q-.04*C}else if(_t===5){let C=xe(Ut(0,.2))*(1-Ut(.72,ge)),q=Ut(.25,.65);u.rotation.x=tt(u.rotation.x,-2.25,C),u.rotation.z=tt(u.rotation.z,-.45,C),L.rotation.x=tt(L.rotation.x,-.35-Math.sin(q*Math.PI*4)*.05,C),L.rotation.y=0,en-=.06*C,Dt>.72&&it.forEach(K=>{K.scale.y=.2})}else if(_t===6){let C=xe(Ut(0,.06))*(1-Ut(ge-.12,ge)),q=xe(Ut(.16,.26));u.rotation.z=tt(u.rotation.z,1.45,C),u.rotation.x=0,u.rotation.y=tt(0,tt(1.3,-2.2,q),C),f.rotation.x=tt(.35,1.25,C),h.rotation.x=tt(h.rotation.x,.9,C),s.rotation.x=tt(s.rotation.x,-.9,C),r.rotation.x=tt(r.rotation.x,.7,C),o.rotation.y=tt(.3,-.4,q)*C,en+=.38*C,H.visible=Dt>.16&&Dt<.36,H.material.opacity=.8*(1-Ut(.26,.36))}else if(_t===7){let C=xe(Ut(0,.12))*(1-Ut(.12,.2)),q=xe(Ut(.1,.3))*(1-Ut(.55,.64)),K=xe(Ut(.55,.64))*(1-Ut(.8,ge));Fn-=.16*C+.1*K,u.rotation.x=tt(tt(u.rotation.x,-2.95,q),-.35,K),u.rotation.z=tt(u.rotation.z,-.15,Math.max(q,K)),h.rotation.x=tt(tt(h.rotation.x,-2.7,q),-.5,K),h.rotation.z=tt(h.rotation.z,.35,Math.max(q,K)),s.rotation.x-=.6*K,r.rotation.x+=.3*K,en+=-.18*q+.4*K,b.visible=Dt>.55&&Dt<.75,b.material.opacity=.85*(1-Ut(.64,.75))}else if(_t===8){let C=xe(Ut(0,.1))*(1-Ut(.1,.15)),q=xe(Ut(.1,.16))*(1-Ut(.42,ge));u.rotation.x=tt(tt(u.rotation.x,-2.2,C),-.45,q),u.rotation.z=tt(u.rotation.z,.1,Math.max(C,q)),f.rotation.x=tt(.35,1.9,q),h.rotation.x=tt(h.rotation.x,.6,q),h.rotation.z=tt(h.rotation.z,-.6,q),Fn-=.12*q,s.rotation.x-=.5*q,en+=.3*q}else if(_t===9){let C=xe(Ut(0,.2))*(1-Ut(.55,.68)),q=Ut(.3,.45),K=xe(Ut(.55,.68))*(1-Ut(.78,ge));u.rotation.x=tt(tt(u.rotation.x,-1.75,C),-.3,K),u.rotation.z=tt(tt(u.rotation.z,-.55,C),1.1,K),f.rotation.x=tt(.35,-.95,C),h.rotation.x=tt(tt(h.rotation.x,-1.65+q*.35,C),-.3,K),h.rotation.z=tt(tt(h.rotation.z,.55,C),-1.1,K),L.rotation.x+=.18*C-.25*K,en+=-.12*K,Dt>.3&&Dt<.6&&it.forEach(et=>{et.scale.y=.2})}else if(_t===10||_t===11){let C=_t===10,q=xe(Ut(0,.06))*(1-Ut(.06,.1)),K=xe(Ut(.06,.16)),et=1-Li,nt=C?-.2:-2.7,zt=C?-2.6:-.3,Ft=C?-.7:.9,Yt=C?.9:-.7;u.rotation.x=tt(u.rotation.x,tt(nt,zt,K),et),u.rotation.z=tt(u.rotation.z,tt(Ft,Yt,K),et),f.rotation.x=tt(.35,.8,et),h.rotation.x=tt(h.rotation.x,.5,et),o.rotation.y=tt(C?.3:-.2,C?-.35:.35,K)*et,en+=(.12*K-.05*q)*et,S.rotation.z=C?-.75:.75,S.visible=Dt>.06&&Dt<.26,A.material.opacity=.85*(1-Ut(.16,.26))}else if(_t===12){let C=xe(Ut(0,.08))*(1-Ut(.08,.12)),q=xe(Ut(.08,.14))*(1-Li);u.rotation.x=tt(tt(u.rotation.x,-.9,C),-1.55,q),u.rotation.z=tt(u.rotation.z,.05,Math.max(C,q)),u.rotation.y=.35*C,f.rotation.x=tt(.35,-.02,q),h.rotation.x=tt(h.rotation.x,.8,q),s.rotation.x-=.7*q,r.rotation.x+=.5*q,o.rotation.y=tt(.35*C,-.4,q),en+=.3*q-.08*C,P.visible=Dt>.08&&Dt<.3,P.scale.set(1,1,1+Ut(.08,.16)*7),P.material.opacity=.8*(1-Ut(.16,.3))}else if(_t===13){let C=xe(Ut(0,.08))*(1-Li),q=Ut(.08,.55);u.rotation.z=tt(u.rotation.z,1.5,C),u.rotation.x=0,u.rotation.y=.5*C,f.rotation.x=tt(.35,1.3,C),h.rotation.z=tt(h.rotation.z,-1.2,C),_e=-Math.PI*4*(1-Math.pow(1-q,2)),Fn-=.1*xe(Ut(0,.08))*(1-Ut(.08,.14)),I.visible=Dt>.1&&Dt<.62,I.material.opacity=.8*(1-Ut(.45,.62)),I.scale.setScalar(1+Ut(.1,.6)*.3)}else if(_t===14){let C=xe(Ut(0,.08))*(1-Ut(.08,.14)),q=xe(Ut(.08,.18))*(1-Ut(.3,ge));u.rotation.x=tt(tt(u.rotation.x,.3,C),-2.7,q),u.rotation.z=tt(u.rotation.z,-.2,Math.max(C,q)),h.rotation.x=tt(h.rotation.x,-.9,.7),h.rotation.z=tt(h.rotation.z,.4,.7),Fn-=.14*C-.06*q,en+=-.1*q+.1*C,o.rotation.y=tt(.3*C,-.3,q)}else if(_t===15){let C=xe(Ut(0,.18))*(1-Ut(.18,.28)),q=xe(Ut(.18,.28))*(1-Li),K=tt(tt(u.rotation.x,-2.9,C),-.35,q);u.rotation.x=K,h.rotation.x=K+.1,u.rotation.z=tt(u.rotation.z,-.2,Math.max(C,q)),h.rotation.z=tt(h.rotation.z,.3,Math.max(C,q)),f.rotation.x=tt(.35,.1,C)+.55*q,en+=-.12*C+.32*q,Fn-=.1*q*(1-Ut(.3,.45))-.04*C,s.rotation.x-=.4*q,r.rotation.x+=.25*q,L.rotation.y=0,b.visible=Dt>.18&&Dt<.4,b.material.opacity=.8*(1-Ut(.28,.4))}Dt>=ge&&(Lt=-1,o.rotation.y=0)}if(pt=Math.max(0,pt-V),pt>0&&(en-=.25*(pt/.25)),jt.forEach((Dt,ge)=>{pt>0?(Dt.emissive.setHex(16724016),Dt.emissiveIntensity=.9*(pt/.25)):(Dt.emissive.setHex(we[ge].color),Dt.emissiveIntensity=we[ge].intensity)}),dt=Zt(dt,mt?1:0,6,V),mt&&it.forEach(Dt=>{Dt.scale.y=.15}),e.rotation.x=tt(en,-1.45,dt),e.rotation.y=_e,e.rotation.z=Ps*(1-dt),e.scale.set(1+(1-Fn)*.5,Fn,1+(1-Fn)*.5),lt>=0){lt+=V;let ge=Math.min(lt/2.2,1),xe=Math.sin(Math.min(ge*4,1)*Math.PI/2)*(ge>.85?(1-ge)/.15:1);u.rotation.z=.12+xe*2.5,u.rotation.x=-xe*.2+Math.sin(lt*12)*.35*xe,L.rotation.z+=xe*.08,(ge>=1||Q>.3||J>.3)&&(lt=-1)}}return{object:t,setStance(V){D=V},setGlow(V){j=V},bladeTip(V){return f.visible?(f.updateWorldMatrix(!0,!1),f.localToWorld(V.set(0,0,E?E.tip??2.6:1.9))):null},setHeld(V){let ft=op.includes(V);ft&&!x[V]&&(x[V]=rp(V),f.add(x[V].group));for(let[wt,Ot]of Object.entries(x))Ot.group.visible=wt===V;E=ft?x[V]:null,w.visible=V==="sword",f.visible=V==="sword"||ft,R.visible=V==="potion"},setTrailColor(V=15269883){b.material.color.setHex(V),H.material.color.setHex(V),I.material.color.setHex(V===15269883?16774344:V),A.material.color.setHex(V),P.material.color.setHex(V)},drink(){return mt?!1:(Lt=0,_t=5,U=1,lt=-1,ie=-1,!0)},wave(){lt<0&&Lt<0&&(lt=0)},attack(V=0,ft=1){return mt?!1:(Lt=0,_t=V,U=ft,lt=-1,ie=-1,!0)},get attacking(){return Lt>=0},hurt(){pt=.25},setFainted(V){mt=V,V?Lt=-1:dt=0},get stepped(){return Gt},set stepped(V){Gt=V},update(V,ft={}){if(E){let Ot=.75+.35*(.5+.5*Math.sin(rt*3.2+Nt*3.2));E.pulse.forEach((bt,_e)=>{bt.emissiveIntensity=E.base[_e]*Ot*j})}if(Nt+=V,Gt&&Nt<1/Jt)return;let wt=Math.min(Nt,.2);Nt=0,Tt(wt,ft)}}}var mM=14,gM=1.7,xM=38,yM=120,_M=1.1,rs=.85,cp=5,EM=-40,MM=1.15,vM=3,wM=.55,Gc=1310,Xi=.001;function lp(i,t){let e=i.object,n=e.position,s=new F,r=new yt,o=!0,a=0,c=0,l=null,h=!1,u=[],f=new F,d=new F,g=x=>({x:Je.clamp(x.x,n.x-rs,n.x+rs),z:Je.clamp(x.z,n.z-rs,n.z+rs)}),y=x=>{let E=x.box;f.set(n.x-rs,n.y,n.z-rs),d.set(n.x+rs,n.y+cp,n.z+rs);let R=f.x<E.max.x-Xi&&d.x>E.min.x+Xi&&f.y<E.max.y-Xi&&d.y>E.min.y+Xi&&f.z<E.max.z-Xi&&d.z>E.min.z+Xi;if(!R||!x.cyl)return R;let M=g(x.cyl);return Math.hypot(M.x-x.cyl.x,M.z-x.cyl.z)<x.cyl.r-Xi};function m(x){let E=g(x),R=E.x-x.x,M=E.z-x.z,T=Math.hypot(R,M);T<1e-6&&(R=n.x-x.x,M=n.z-x.z,T=Math.hypot(R,M)||1,Math.hypot(R,M)<1e-6&&(R=1));let v=x.r-T+Xi*2;n.x+=R/T*v,n.z+=M/T*v}function p(x,E){if(E===0)return;n[x]+=E;let R=t.groundHeight(n.x,n.z),M=n.y+(o||h?Math.abs(E)*MM+.02:0);if(R>M){n[x]-=E;return}for(let T of u){let v=T.box;if(!y(T))continue;let _=v.max.y-n.y;if(o&&_>0&&_<=_M){let b=n.y;if(n.y=v.max.y,!u.some(H=>H!==T&&y(H)))continue;n.y=b}T.cyl?m(T.cyl):n[x]=E>0?v.min[x]-rs-Xi:v.max[x]+rs+Xi}}function w(x){let E=o;n.y+=x;let R=x<=0;o=!1,h=!1,l=null;for(let v of u)y(v)&&(R?(n.y=Math.max(n.y,v.box.max.y),o=!0,l=v.kind):n.y=v.box.min.y-cp-Xi,s.y=0);let M=t.groundHeight(n.x,n.z);if((n.y<=M||!o&&E&&R&&n.y-M<.7)&&(n.y=M,s.y=0,o=!0,l="ground"),!o&&E&&R){let v=n.y;n.y-=.7;let _=-1/0,b=null;for(let H of u)H.box.max.y<=v+.01&&H.box.max.y>_&&y(H)&&(_=H.box.max.y,b=H.kind);n.y=v,b&&(n.y=_,s.y=0,o=!0,l=b)}let T=t.waterLevel-vM;if(!o&&n.y<T&&M<T&&(n.y=T,s.y<0&&(s.y=0),o=!0,h=!0,l="water"),!o&&s.y<=0){n.y-=.05;let v=u.find(_=>y(_));n.y+=.05,v&&(o=!0,l=v.kind)}}return{get grounded(){return o},get groundKind(){return l},get facing(){return a},get position(){return n},get swimming(){return h},respawn(x=0){n.copy(t.spawnPoint),s.set(0,0,0),r.set(0,0),a=x,e.rotation.y=x,o=!0},teleport(x,E){n.set(x,t.groundHeight(x,E)+.5,E),s.set(0,0,0),r.set(0,0)},setFacing(x){a=x,e.rotation.y=x},knockback(x,E,R=0){r.set(x,E),R>0&&(s.y=R,o=!1)},update(x,E){u=t.collidersNear(n.x,n.z);let R=Math.min(1,Math.hypot(E.x,E.z));c=R;let M=!!E.run&&R>.1&&!h,T=mM*(h?wM:M?gM:1);if(s.x=E.x*T+r.x,s.z=E.z*T+r.y,r.multiplyScalar(Math.exp(-x*5)),E.jump&&o&&(s.y=xM*(h?.55:1),o=!1),s.y-=yM*x,p("x",s.x*x),p("z",s.z*x),w(s.y*x),n.x=Je.clamp(n.x,-Gc,Gc),n.z=Je.clamp(n.z,-Gc,Gc),R>.05&&!E.lockFacing){let _=Math.atan2(E.x,E.z)-a;_=Math.atan2(Math.sin(_),Math.cos(_)),a+=_*Math.min(1,x*14)}e.rotation.y=a,n.y<EM&&this.respawn(a),i.update(x,{speed:c,grounded:o,swimming:h,run:M})}}}function hp(i,{joystickEl:t,jumpBtnEl:e,attackBtnEl:n,skillBtnsEl:s,onKey:r}){let o=new Set,a={dx:0,dy:0},c=0,l=!1,h=!1,u=!1,f=-1,d={x:0,y:0,id:null};window.addEventListener("keydown",M=>{if(l&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(M.code)&&M.preventDefault(),o.add(M.code),!M.repeat)){(M.code==="KeyF"||M.code==="KeyJ")&&(u=!0);let T={KeyQ:0,KeyE:1,KeyR:2};M.code in T&&(f=T[M.code]),r?.(M.code)}}),window.addEventListener("keyup",M=>o.delete(M.code)),window.addEventListener("blur",()=>o.clear());let g=new Map;i.addEventListener("contextmenu",M=>M.preventDefault()),i.addEventListener("pointerdown",M=>{l&&(i.setPointerCapture(M.pointerId),g.set(M.pointerId,{x:M.clientX,y:M.clientY,sx:M.clientX,sy:M.clientY,time:performance.now(),button:M.button}),i.classList.add("dragging"))});let y=0;i.addEventListener("pointermove",M=>{let T=g.get(M.pointerId);if(!T)return;let v=M.clientX-T.x,_=M.clientY-T.y;if(T.x=M.clientX,T.y=M.clientY,g.size>=2){let[b,H]=[...g.values()],I=Math.hypot(b.x-H.x,b.y-H.y);y&&(c+=(y-I)*4),y=I;return}y=0,a.dx+=v,a.dy+=_});let m=M=>{let T=g.get(M.pointerId);T&&M.type==="pointerup"&&T.button===0&&l&&Math.hypot(M.clientX-T.sx,M.clientY-T.sy)<6&&performance.now()-T.time<300&&(u=!0),g.delete(M.pointerId),g.size<2&&(y=0),g.size===0&&i.classList.remove("dragging")};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),i.addEventListener("wheel",M=>{l&&(M.preventDefault(),c+=M.deltaY)},{passive:!1});let p=t.querySelector(".knob"),w=48,x=M=>{let T=t.getBoundingClientRect(),v=M.clientX-(T.left+T.width/2),_=M.clientY-(T.top+T.height/2),b=Math.hypot(v,_);b>w&&(v=v/b*w,_=_/b*w),d.x=v/w,d.y=_/w,p.style.transform=`translate(${v}px, ${_}px)`};t.addEventListener("pointerdown",M=>{d.id=M.pointerId,t.setPointerCapture(M.pointerId),x(M)}),t.addEventListener("pointermove",M=>{M.pointerId===d.id&&x(M)});let E=M=>{M.pointerId===d.id&&(d.id=null,d.x=d.y=0,p.style.transform="")};t.addEventListener("pointerup",E),t.addEventListener("pointercancel",E),e.addEventListener("pointerdown",M=>{M.preventDefault(),h=!0}),e.addEventListener("pointerup",()=>{h=!1}),e.addEventListener("pointercancel",()=>{h=!1}),e.addEventListener("pointerleave",()=>{h=!1}),n.addEventListener("pointerdown",M=>{M.preventDefault(),l&&(u=!0)}),[...s.children].forEach((M,T)=>{M.addEventListener("pointerdown",v=>{v.preventDefault(),l&&(f=T)})});let R=(...M)=>M.some(T=>o.has(T));return{get enabled(){return l},set enabled(M){l=M,M||(o.clear(),g.clear(),h=!1,u=!1,f=-1)},move(){let M=(R("KeyW","ArrowUp")?1:0)-(R("KeyS","ArrowDown")?1:0),T=(R("KeyD","ArrowRight")?1:0)-(R("KeyA","ArrowLeft")?1:0);M+=-d.y,T+=d.x;let v=Math.hypot(M,T);return v>1&&(M/=v,T/=v),{forward:M,right:T}},jump(){return l&&(o.has("Space")||h)},run(){return l&&(R("ShiftLeft","ShiftRight")||Math.hypot(d.x,d.y)>.92)},consumeAttack(){let M=u;return u=!1,M},consumeSkill(){let M=f;return f=-1,M},consumeLook(){let M={dx:a.dx,dy:a.dy,zoom:c};return a.dx=a.dy=0,c=0,M}}}var bM=i=>"#"+i.toString(16).padStart(6,"0");function up(i,t){let e=i.getContext("2d"),n=110,s=!1;function r(){let o=Math.min(window.devicePixelRatio,2),a=i.getBoundingClientRect();i.width=Math.round(a.width*o),i.height=Math.round(a.height*o)}return{get expanded(){return s},set expanded(o){s=o,i.classList.toggle("expanded",o),r()},resize:r,draw(o,a,c,l=[]){let h=i.width,u=i.height;if(!h||!u)return;let f=s?Yn-30:n,d=s?0:o.x,g=s?0:o.z,y=Math.min(h,u)/(f*2),m=T=>h/2+(T-d)*y,p=T=>u/2+(T-g)*y;e.fillStyle="#3b7fc0",e.fillRect(0,0,h,u),e.imageSmoothingEnabled=!0,e.drawImage(t.mapImage,m(-Yn),p(-Yn),Yn*2*y,Yn*2*y),e.lineWidth=1,e.strokeStyle="rgba(0,0,0,0.35)";for(let T of t.colliders){if(T.kind==="tree"||T.kind==="rock"||T.kind==="wall"||T.kind==="prop"||T.kind==="rail"||s&&T.kind!=="bridge"&&T.kind!=="house")continue;let v=T.box;e.fillStyle=bM(T.color),e.beginPath(),T.cyl?e.arc(m(T.cyl.x),p(T.cyl.z),Math.max(T.cyl.r*y,1.5),0,Math.PI*2):e.rect(m(v.min.x),p(v.min.z),(v.max.x-v.min.x)*y,(v.max.z-v.min.z)*y),e.fill(),e.stroke()}let w=m(o.x),x=p(o.z),E=h/i.getBoundingClientRect().width||1;e.fillStyle="#e0475a",e.strokeStyle="#ffffff",e.lineWidth=1.2*E;for(let T of l)e.fillStyle=T.pet?"#6fe08a":"#e0475a",e.beginPath(),e.arc(m(T.x),p(T.z),(T.big?3.6:2.6)*E,0,Math.PI*2),e.fill(),e.stroke();let R=Math.atan2(-Math.cos(c),-Math.sin(c));e.fillStyle="rgba(255,255,255,0.28)",e.beginPath(),e.moveTo(w,x),e.arc(w,x,34*E,R-.5,R+.5),e.closePath(),e.fill();let M=7*E;if(e.save(),e.translate(w,x),e.rotate(-a),e.fillStyle="#ffffff",e.strokeStyle="#1d8676",e.lineWidth=2.5*E,e.beginPath(),e.moveTo(0,M*1.3),e.lineTo(M,-M),e.lineTo(0,-M*.4),e.lineTo(-M,-M),e.closePath(),e.fill(),e.stroke(),e.restore(),s){e.font=`bold ${10*E}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.lineWidth=3*E,e.strokeStyle="rgba(28,26,58,0.8)",e.fillStyle="#ffffff";for(let T of oa){let v=m(T.x),_=p(T.z)-8*E;e.strokeText(T.name,v,_),e.fillText(T.name,v,_)}e.font=`bold ${16*E}px "M PLUS Rounded 1c", sans-serif`,e.fillStyle="#f4c25b";for(let T of Ks){let v=m(T.cx),_=p(T.cz+40);e.strokeText(T.name,v,_),e.fillText(T.name,v,_)}}e.fillStyle="rgba(20,24,32,0.75)",e.font=`bold ${11*E}px "M PLUS Rounded 1c", sans-serif`,e.textAlign="center",e.fillText("N",h/2,13*E)}}}var dp=(i,t,e=0)=>kc.some(n=>Math.hypot(i-n.x,t-n.z)<n.r+e),TM={adult:{label:"\u89AA",hp:260,walk:3.2,run:12.5,radius:2.1,height:5.2,scale:1.25,damage:18,reach:5.2,windup:.55,cooldown:1.8,knockback:.35,exp:45,slots:2,fur:15920348,trapR:2.4},cub:{label:"\u5B50",hp:80,walk:3.6,run:12,radius:1.1,height:2.9,scale:.62,damage:6,reach:3.2,windup:.4,cooldown:1.4,knockback:.9,exp:15,slots:1,fur:16777215,trapR:2.6}},Zh=["\u30E6\u30AD","\u30E2\u30B3","\u30B7\u30ED","\u30D5\u30D6\u30AD","\u30DF\u30BE\u30EC","\u30A2\u30E9\u30EC","\u30B3\u30AA\u30EA","\u30DD\u30DD","\u30DE\u30B7\u30E5","\u30EF\u30BF","\u30C4\u30E9\u30E9","\u30CF\u30AF"],SM=25,RM=40,AM=20,CM=.3,PM=2,fp=1.75;function IM(i,t){let e=new Mt,n=new It({color:i.fur,roughness:.95,flatShading:!0}),s=new It({color:14208959,roughness:1,flatShading:!0}),r=new It({color:1710112,roughness:.4}),o=new It({color:1710112,roughness:.3,emissive:0}),a=new xn(1,1),c=R=>(R.castShadow=!0,R.receiveShadow=!0,R),l=new Mt;l.position.y=fp,e.add(l);let h=c(new B(a,n));h.scale.set(1.35,1.15,2);let u=c(new B(a,n));u.scale.set(1.25,1.15,1.1),u.position.set(0,.25,-.9);let f=new B(new xn(.25,0),n);f.position.set(0,.35,-2),l.add(h,u,f);let d=new Mt;d.position.set(0,.65,1.8);let g=t?1.3:1,y=c(new B(a,n));y.scale.set(.8*g,.72*g,.88*g);let m=c(new B(a,n));m.scale.set(.38*g,.3*g,.45*g),m.position.set(0,-.2*g,.75*g);let p=new B(new te(.13*g,8,6),r);p.position.set(0,-.1*g,1.17*g),d.add(y,m,p);for(let R of[-1,1]){let M=c(new B(new xn(.22*g,0),n));M.position.set(R*.5*g,.55*g,-.1);let T=new B(new te((t?.12:.09)*g,8,6),o);T.position.set(R*.32*g,.14*g,.64*g),d.add(M,T)}l.add(d);let w=[];for(let[R,M]of[[-.75,1.05],[.75,1.05],[-.8,-1.1],[.8,-1.1]]){let T=new Mt;T.position.set(R,-.3,M);let v=c(new B(new Ct(.52,.45,1.45,7),n));v.position.y=-.72;let _=new B(new xn(.46,0),s);_.scale.set(1,.5,1.25),_.position.set(0,-1.38,.12),T.add(v,_),l.add(T),w.push(T)}let x=new Mt,E=new Ee({color:12577023,transparent:!0,opacity:.85});for(let R=0;R<3;R++){let M=new B(new yn(.16+R*.05,.04,4,4),E);M.position.set(.3+R*.3,R*.55,0),x.add(M)}return x.position.set(0,3.3,1.4),x.visible=!1,e.add(x),{root:e,body:l,head:d,legs:w,zzz:x,mats:[n,s],eyeMat:o}}function pp(i,t,e){let n=[],s=6,r=null,o=!1,a=Math.floor(Math.random()*Zh.length),c=new F;function l(){let v=document.createElement("div");return v.className="enemy-label",v.innerHTML='<span class="enemy-name"></span><div class="enemy-hp"><div></div></div><small class="enemy-status"></small>',v.style.display="none",e.appendChild(v),{el:v,name:v.querySelector(".enemy-name"),fill:v.querySelector(".enemy-hp div"),status:v.querySelector(".enemy-status"),text:""}}function h(v,_,b,H=null){let I=TM[v],S=IM(I,v==="cub");i.add(S.root);let A={kind:v,K:I,T:{name:`\u30B7\u30ED\u30AF\u30DE\uFF08${I.label}\uFF09`,radius:I.radius,height:I.height,knockback:I.knockback,hp:I.hp},model:S,pos:new F(_,t.groundHeight(_,b),b),home:new F(_,0,b),vel:new yt,target:new F(_,0,b),facing:Math.random()*Math.PI*2,hp:I.hp,state:"wander",timer:Math.random()*2,cooldown:0,anger:0,wild:!0,parent:H,name:null,mode:null,trap:null,phase:Math.random()*10,pose:0,flash:0,labelTimer:0,spawnT:0,bleed:null,label:l()};return n.push(A),A}function u(v,_){let b=h("adult",v,_),H=Math.random(),I=H<.45?0:H<.8?1:2;for(let S=0;S<I;S++)h("cub",v+(S?3:-3),_-3,b);return b}function f(v,_,b){if(!(t.regionAt(v.x,v.z)?.id!=="snow"||n.filter(S=>S.wild&&S.kind==="adult"&&S.state!=="dead").length>=PM)&&!(!_&&Math.random()>CM))for(let S=0;S<30;S++){let A=Math.random()*Math.PI*2,P=55+Math.random()*60,N=v.x+Math.cos(A)*P,k=v.z+Math.sin(A)*P;if(t.regionAt(N,k)?.id!=="snow"||t.groundHeight(N,k)<2.5||t.slopeAt(N,k)>.5||dp(N,k,10))continue;let O=u(N,k);b?.(O.parent===null&&n.some(G=>G.parent===O)?"\u3069\u3053\u304B\u3067\u30B7\u30ED\u30AF\u30DE\u306E\u89AA\u5B50\u306E\u6C17\u914D\u304C\u3059\u308B\u2026":"\u3069\u3053\u304B\u3067\u30B7\u30ED\u30AF\u30DE\u306E\u6C17\u914D\u304C\u3059\u308B\u2026");return}}function d(v){i.remove(v.model.root),v.model.root.traverse(_=>{_.isMesh&&_.geometry.dispose()}),v.label.el.remove(),n.splice(n.indexOf(v),1);for(let _ of n)_.parent===v&&(_.parent=null)}function g(v,_){v.model.eyeMat.emissive.setHex(_?16719920:0),v.model.eyeMat.emissiveIntensity=_?1.2:0}function y(v,_){if(!v.wild||v.state==="dead")return;let b=v.anger>0;v.anger=SM,v.state==="wander"&&(v.state="chase"),g(v,!0),!b&&v.kind==="adult"&&_?.("\u30B7\u30ED\u30AF\u30DE\u304C\u6012\u3063\u305F\uFF01")}function m(v,_,b){let H=v.K.radius;if(v.wild)for(let P of kc){let N=v.pos.x-P.x,k=v.pos.z-P.z,O=Math.hypot(N,k);if(O<P.r+H){let G=(P.r+H)/Math.max(O,.001);v.pos.x=P.x+N*G,v.pos.z=P.z+k*G}}let I=t.groundHeight(v.pos.x,v.pos.z),S=t.groundHeight(_,b),A=Math.hypot(v.pos.x-_,v.pos.z-b);(I<1.2||I-S>A*1.2+.05||S-I>A*2.2+.05)&&(v.pos.x=_,v.pos.z=b,v.vel.set(0,0),(v.state==="wander"||v.mode==="rest")&&(v.timer=0));for(let P of t.collidersNear(v.pos.x,v.pos.z)){if(P.box.isEmpty()||P.box.min.y>v.pos.y+2||P.box.max.y<v.pos.y+.3||P.kind==="spawn")continue;let N,k;P.cyl?(N=P.cyl.x,k=P.cyl.z):(N=Je.clamp(v.pos.x,P.box.min.x,P.box.max.x),k=Je.clamp(v.pos.z,P.box.min.z,P.box.max.z));let O=H*.8+(P.cyl?P.cyl.r:0),G=v.pos.x-N,L=v.pos.z-k,z=Math.hypot(G,L);z<O&&z>1e-4&&(v.pos.x=N+G/z*O,v.pos.z=k+L/z*O)}}function p(v,_,b,H,I=6){let A=Math.atan2(_,b)-v.facing;A=Math.atan2(Math.sin(A),Math.cos(A)),v.facing+=A*Math.min(1,H*I)}function w(v,_,b,H,I,S=.4){let A=_-v.pos.x,P=b-v.pos.z,N=Math.hypot(A,P);if(N<S)return N;let k=Math.min(N-S*.5,H*I);return v.pos.x+=A/N*k,v.pos.z+=P/N*k,v.speedNow=H,p(v,A,P,I),N}function x(v,_,b){v.pos.set(_,t.groundHeight(_,b),b),v.vel.set(0,0),v.spawnT=.2,v.timer=.5}function E(v,_,b,H,I,S=!0){let A=Math.max(1,Math.round(_*(.85+Math.random()*.3)));v.hp-=A,v.flash=.15,v.labelTimer=6;let P=v.state==="trapped";if(b&&H>0&&!P){let k=v.pos.x-b.x,O=v.pos.z-b.z,G=Math.max(Math.hypot(k,O),.001),L=12*v.K.knockback*H;v.vel.set(k/G*L,O/G*L)}let N=new F(v.pos.x,v.pos.y+v.K.height,v.pos.z);return v.hp<=0?(v.state="dead",v.timer=2,v.bleed=null,v.label.el.style.display="none",v.trap&&(r?.removeTrap(v.trap),v.trap=null),I?.(`${v.T.name}\u306F\u9003\u3052\u3066\u3044\u3063\u305F\u2026`),{enemy:v,pos:N,damage:A,killed:!0,exp:v.K.exp,name:v.T.name}):(y(v,I),v.parent&&v.parent.wild&&v.parent.state!=="dead"&&v.parent.anger<=0&&(y(v.parent),I?.("\u5B50\u30B0\u30DE\u3092\u5B88\u308D\u3046\u3068\u3001\u89AA\u30B0\u30DE\u304C\u6012\u3063\u305F\uFF01")),S&&!P&&v.state!=="swipe"&&(v.state="hurt",v.timer=.25),{enemy:v,pos:N,damage:A,killed:!1,exp:0,name:v.T.name})}function R(v,_){let b=_.playerPos,H=dp(b.x,b.z)||_.playerSwimming;if(r=_.building,s-=v,s<=0&&_.playerActive){s=AM;let S=_.forceSpawn&&!o,A=n.length;f(b,S,_.onEvent),n.length>A&&(o=!0)}let I=0;for(let S of[...n]){let A=S.K;if(S.state==="dead"){S.timer-=v,S.model.root.rotation.z=Math.min(1.4,(2-S.timer)*2),S.timer<=0&&d(S);continue}let P=Math.hypot(b.x-S.pos.x,b.z-S.pos.z);if(S.wild){if(P>450&&S.state!=="trapped"){d(S);continue}if(S.model.root.visible=P<300,P>200)continue}else S.model.root.visible=P<300;if(S.bleed&&S.wild&&(S.bleed.tick-=v,S.bleed.tick<=0)){S.bleed.tick=1,S.bleed.left--;let ut=E(S,S.bleed.dmg,null,0,_.onEvent,!1);if(_.onBleed?.(ut),S.bleed&&S.bleed.left<=0&&(S.bleed=null),S.state==="dead")continue}let N=S.pos.x,k=S.pos.z,O=b.x-S.pos.x,G=b.z-S.pos.z,L=Math.abs(b.y-S.pos.y),z=_.playerActive&&!H&&L<15,Y=z&&L<4;S.timer-=v,S.cooldown-=v,S.labelTimer-=v,S.speedNow=0;let X=0,$=0;if(S.wild){switch(S.anger>0&&(S.anger-=v*(z&&P<110?1:4),S.anger<=0&&S.state!=="trapped"&&(S.state="wander",S.home.set(S.pos.x,0,S.pos.z),g(S,!1))),S.state){case"wander":{if(S.parent&&S.parent.state!=="dead"&&S.parent.wild){let rt=S.parent.pos.x-Math.sin(S.parent.facing)*3,lt=S.parent.pos.z-Math.cos(S.parent.facing)*3;Math.hypot(rt-S.pos.x,lt-S.pos.z)>4&&w(S,rt,lt,A.walk*1.6,v,2);break}if(S.timer>0)break;if(w(S,S.target.x,S.target.z,A.walk,v)<.8){S.timer=2+Math.random()*4;let rt=Math.random()*Math.PI*2,lt=4+Math.random()*14;S.target.set(S.home.x+Math.cos(rt)*lt,0,S.home.z+Math.sin(rt)*lt)}break}case"chase":{if(!z){p(S,O,G,v);break}if(Y&&P<A.reach&&S.cooldown<=0){S.state="windup",S.timer=A.windup;break}P>A.radius+1.4?w(S,b.x,b.z,A.run,v,A.radius+1):p(S,O,G,v);break}case"windup":{if(p(S,O,G,v),X=1-Math.max(0,S.timer)/A.windup,S.timer<=0){S.state="swipe",S.timer=.3;let ut=Math.abs(Math.atan2(Math.sin(Math.atan2(O,G)-S.facing),Math.cos(Math.atan2(O,G)-S.facing)));Y&&P<A.reach+.8&&ut<1.2&&_.onHitPlayer(A.damage,S.pos.x,S.pos.z)}break}case"swipe":{X=Math.max(0,S.timer)/.3,S.timer<=0&&(S.state="recover",S.timer=.5,S.cooldown=A.cooldown);break}case"recover":case"hurt":{S.timer<=0&&(S.state=S.anger>0?"chase":"wander");break}case"trapped":{S.timer<=0&&(_.building.removeTrap(S.trap),S.trap=null,S.state="chase",y(S),_.onEvent?.("\u30B7\u30ED\u30AF\u30DE\u304C\u308F\u306A\u3092\u58CA\u3057\u3066\u3001\u629C\u3051\u51FA\u3057\u305F\uFF01"));break}}if(S.state!=="trapped"){let ut=_.building.armedTrapAt(S.pos.x,S.pos.z,A.trapR);ut&&(_.building.springTrap(ut),S.trap=ut,S.state="trapped",S.timer=RM,S.vel.set(0,0),S.pos.x=ut.x,S.pos.z=ut.z,S.labelTimer=99,_.onEvent?.(`${S.T.name}\u304C\u308F\u306A\u306B\u304B\u304B\u3063\u305F\uFF01\u3000\u751F\u8089\u3092\u3042\u3052\u3066\u4EF2\u9593\u306B\u3057\u3088\u3046`))}}else if(S.hp=Math.min(A.hp,S.hp+v*(S.mode==="rest"?8:1)),S.mode==="follow"){let ut=5+I*3.5,rt=(I%2?1:-1)*2,lt=_.playerFacing,W=b.x-Math.sin(lt)*ut+Math.cos(lt)*rt,Q=b.z-Math.cos(lt)*ut-Math.sin(lt)*rt,J=Math.hypot(W-S.pos.x,Q-S.pos.z);J>45||Math.abs(b.y-S.pos.y)>12?x(S,W,Q):J>1.5?w(S,W,Q,J>10?20:J>4?12:A.walk*1.5,v,1):p(S,O,G,v,2),I++}else if(S.mode==="rest"&&_.pen){if(S.state==="sleep")$=1,S.timer<=0&&(S.state="idle",S.timer=0);else if(S.timer<=0&&w(S,S.target.x,S.target.z,A.walk,v)<.8){Math.random()<.5?(S.state="sleep",S.timer=8+Math.random()*10):S.timer=1+Math.random()*3;let rt=_.pen.randomPoint();S.target.set(rt.x,0,rt.z)}}S.pos.x+=S.vel.x*v,S.pos.z+=S.vel.y*v,S.vel.multiplyScalar(Math.exp(-v*6)),S.state!=="trapped"&&m(S,N,k),S.pos.y=t.groundHeight(S.pos.x,S.pos.z);for(let ut of n){if(ut===S||ut.state==="dead"||S.state==="trapped")continue;let rt=S.pos.x-ut.pos.x,lt=S.pos.z-ut.pos.z,W=Math.hypot(rt,lt),Q=(S.K.radius+ut.K.radius)*.8;W<Q&&W>.001&&(S.pos.x+=rt/W*(Q-W)*.5,S.pos.z+=lt/W*(Q-W)*.5)}let Z=S.model;S.spawnT=Math.min(1,S.spawnT+v*2),S.pose+=(($?1:0)-S.pose)*Math.min(1,v*3);let ct=S.speedNow>.1;S.phase+=v*(ct?2+S.speedNow*.5:0);let it=ct?Math.sin(S.phase)*Math.min(.7,.25+S.speedNow*.04):0;Z.root.position.set(S.pos.x,S.pos.y,S.pos.z),Z.root.rotation.set(0,S.facing,0),Z.root.scale.setScalar(A.scale*S.spawnT);let ot=S.pose;if(Z.body.position.y=fp-ot*1.05+(ct?Math.abs(Math.sin(S.phase))*.12:Math.sin(S.phase*0+performance.now()/700)*.03),Z.body.rotation.x=-X*.6,Z.body.rotation.z=0,Z.legs[0].rotation.x=it-X*1.1-ot*1.3,Z.legs[1].rotation.x=-it-X*1.1-ot*1.3,Z.legs[2].rotation.x=-it+ot*1.3,Z.legs[3].rotation.x=it+ot*1.3,Z.head.rotation.x=X*-.4+ot*.35,Z.head.rotation.y=0,S.state==="trapped"){let ut=performance.now()/1e3;Z.body.rotation.z=Math.sin(ut*17)*.08,Z.head.rotation.x=-.35+Math.sin(ut*5)*.2,Z.legs[0].rotation.x=-.8+Math.sin(ut*14)*.5}if(Z.zzz.visible=ot>.7,Z.zzz.visible){let ut=performance.now()/1e3;Z.zzz.children.forEach((rt,lt)=>{rt.position.y=lt*.55+ut*.4%.55})}S.flash=Math.max(0,S.flash-v);for(let ut of Z.mats)ut.emissive.setHex(16777215),ut.emissiveIntensity=S.flash>0?.7:0}}function M(v){for(let _ of n){let b=_.label.el,H=!_.wild;if(!(_.state!=="dead"&&(H||_.labelTimer>0||_.anger>0||_.state==="trapped"))||!_.model.root.visible){b.style.display="none";continue}if(c.set(_.pos.x,_.pos.y+_.K.height*(_.pose>.5?.7:1)+.8,_.pos.z),c.distanceTo(v.position)>(H?60:90)){b.style.display="none";continue}if(c.project(v),c.z>1){b.style.display="none";continue}b.style.display="",b.classList.toggle("pet",H);let S=(c.x+1)/2*window.innerWidth,A=(1-c.y)/2*window.innerHeight;b.style.transform=`translate(-50%, -100%) translate(${S}px, ${A}px)`,_.label.fill.style.width=Math.max(0,_.hp)/_.K.hp*100+"%";let P=H?`${_.name}\uFF08${_.K.label}\uFF09`:_.T.name,N=H?_.mode==="rest"?_.state==="sleep"?"\u4F11\u61A9\u4E2D zzz":"\u4F11\u61A9\u4E2D":"\u3064\u3044\u3066\u304F\u308B":_.state==="trapped"?`\u308F\u306A\u306E\u4E2D\uFF01 \u751F\u8089\u3092\u3042\u3052\u3088\u3046\uFF08${Math.ceil(_.timer)}\uFF09`:_.anger>0?"\u6012\u3063\u3066\u3044\u308B":"",k=P+"|"+N;_.label.text!==k&&(_.label.name.textContent=P,_.label.status.textContent=N,_.label.status.style.display=N?"":"none",_.label.text=k)}}let T=()=>n.filter(v=>!v.wild&&v.state!=="dead");return{list:n,update:R,updateLabels:M,get pets(){return T()},attack(v,_,{range:b,arc:H,damage:I,knockback:S=1,bleed:A=!1,onEvent:P}){let N=Math.sin(_),k=Math.cos(_);return this.hitArea(O=>{let G=O.pos.x-v.x,L=O.pos.z-v.z,z=Math.hypot(G,L);if(z-O.K.radius>b||Math.abs(v.y-O.pos.y)>4)return!1;let Y=(G*N+L*k)/Math.max(z,.001);return z<=O.K.radius+.5||Math.acos(Je.clamp(Y,-1,1))<=H/2},{damage:I,knockback:S,from:v,bleed:A,onEvent:P})},hitArea(v,{damage:_,knockback:b=1,from:H,bleed:I=!1,onEvent:S}){let A=[];for(let P of[...n]){if(!P.wild||P.state==="dead"||P.spawnT<1||!v(P))continue;let N=E(P,_,H,b,S??this.onEvent);I&&!N.killed&&(P.bleed={left:3,tick:1,dmg:Math.max(1,Math.round(_*.2))}),A.push(N)}return A},onEvent:null,feed(v,_){let b=(S,A)=>Math.hypot(S.pos.x-v.x,S.pos.z-v.z)<A+S.K.radius,H=n.find(S=>S.wild&&S.state==="trapped"&&b(S,6));if(H)return _.removeTrap(H.trap),H.trap=null,H.wild=!1,H.anger=0,H.bleed=null,H.hp=H.K.hp,H.state="idle",H.mode="follow",H.name=Zh[a++%Zh.length],g(H,!1),{result:"tamed",bear:H};let I=n.find(S=>!S.wild&&S.state!=="dead"&&b(S,5));return I?(I.hp=Math.min(I.K.hp,I.hp+I.K.hp*.5),{result:"fed",bear:I}):n.some(S=>S.wild&&S.state!=="dead"&&b(S,10))?{result:"notTrapped"}:{result:"none"}},rest(v,_){let b=_.randomPoint();x(v,b.x,b.z),v.mode="rest",v.state="idle";let H=_.randomPoint();v.target.set(H.x,0,H.z)},follow(v,_){x(v,_.x+(Math.random()-.5)*6,_.z+4),v.mode="follow",v.state="idle"},usedSlots(){return T().filter(v=>v.mode==="rest").reduce((v,_)=>v+_.K.slots,0)},calmDown(){for(let v of n)!v.wild||v.state==="dead"||(v.anger=0,v.state!=="trapped"&&(v.state="wander",v.home.set(v.pos.x,0,v.pos.z)),g(v,!1))},alive(){return n.filter(v=>v.state!=="dead").map(v=>({x:v.pos.x,z:v.pos.z,big:v.kind==="adult",pet:!v.wild}))},spawnNear(v,_){return u(v,_)}}}function mp(i){let t=[],e=new F,n=1.1;return{add(s,r,o=""){let a=document.createElement("div");a.className="popup-text "+o,a.textContent=r,i.appendChild(a),t.push({el:a,pos:s.clone(),t:0,dx:(Math.random()-.5)*1.2})},update(s,r){for(let o=t.length-1;o>=0;o--){let a=t[o];if(a.t+=s,a.t>n){a.el.remove(),t.splice(o,1);continue}if(e.copy(a.pos),e.y+=a.t*2,e.x+=a.dx*a.t,e.project(r),e.z>1){a.el.style.display="none";continue}a.el.style.display="";let c=(e.x+1)/2*window.innerWidth,l=(1-e.y)/2*window.innerHeight,h=a.t<.12?.6+a.t/.12*.7:1.3-Math.min(a.t,.4)*.75;a.el.style.transform=`translate(-50%, -50%) translate(${c}px, ${l}px) scale(${h})`,a.el.style.opacity=a.t>n*.65?(n-a.t)/(n*.35):1}},clear(){for(let s of t)s.el.remove();t.length=0}}}var Re=4,qi=1.2,gp=12,LM={snow:["cold"],highlands:["cold"],desert:["heat"],volcano:["heat","fire"],marsh:["water"],forest:["water"]},HM=.6,tr=(i,t={})=>new It({color:i,roughness:.85,flatShading:!0,...t}),Nn=(i,t,e,n,s,r,o)=>{let a=new B(new Et(i,t,e),n);return a.position.set(s,r,o),a.castShadow=a.receiveShadow=!0,a},jh=(i,t,e,n)=>{let s=new B(new $t(i,i*1.5,4),t);return s.position.set(e,n+i*.75,0),s.rotation.y=Math.PI/4,s.castShadow=!0,s},xp=(i,t=.72)=>new st(i).multiplyScalar(t).getHex();function DM(i){let t=new Mt;for(let e of[-2,0,2]){let n=e===0?2.3:2.7;t.add(Nn(.36,n+qi,.36,i.post,e,(n-qi)/2,0)),t.add(jh(.27,i.post,e,n))}return t.add(Nn(4,.26,.14,i.plank,0,.85,.14)),t.add(Nn(4,.26,.14,i.plank,0,1.8,.14)),{group:t}}function zM(i){let t=new Mt,e=new Ct(.42,.42,4,8).rotateZ(Math.PI/2);for(let n=-1;n<7;n++){let s=new B(e,n%2?i.plank:i.log);s.position.y=.42+n*.8,s.castShadow=s.receiveShadow=!0,t.add(s)}for(let n of[-2,2])t.add(Nn(.72,5.9+qi,.95,i.post,n,(5.9-qi)/2,0)),t.add(jh(.5,i.post,n,5.9));return{group:t}}function UM(i,t,e,n){let s=new Mt;s.position.x=n*t/2;let r=4;for(let a=0;a<r;a++){let c=-t/2+(a+.5)*(t/r);s.add(Nn(t/r-.05,e-a%2*.15,.18,i.plank,c,e/2+.25,0))}for(let a of[.8,e-.5])s.add(Nn(t,.26,.12,i.post,0,a,.14));let o=Nn(Math.hypot(t,e-1.3)-.3,.22,.1,i.post,0,e/2+.15,.15);o.rotation.z=n*Math.atan2(e-1.3,t),s.add(o);for(let a of[.26,-.26]){let c=new B(new yn(.2,.05,6,12),i.knob);c.position.set(n*(t/2-.45),e/2,a),s.add(c)}return s}function NM(i){let t=new Mt;for(let r of[-4,4])t.add(Nn(.7,6.5+qi,.7,i.post,r,(6.5-qi)/2,0)),t.add(jh(.5,i.post,r,6.5));t.add(Nn(8.8,.45,.55,i.post,0,6.3,0)),t.add(Nn(3,.6,.2,i.plank,0,5.85,.2));let e=4-.4,n=5.3,s=[-1,1].map(r=>{let o=new Mt;return o.position.x=r*(4-.38),o.add(UM(i,e,n,-r)),t.add(o),o});return{group:t,hinges:s}}var er=2.8;function OM(i){let t=new Mt,e=5.6;for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.add(Nn(.36,e+qi,.36,i.post,c*er,(e-qi)/2,l*er));for(let c of[-1,1])t.add(Nn(er*2+.4,.3,.3,i.post,0,e,c*er));for(let c of[-1,1]){let l=Nn(.3,.3,er*2+.4,i.post,c*er,e,0);t.add(l)}t.add(Nn(3,.16,3,i.plank,0,.1,0));let n=new B(new te(.35,8,6),i.bait??i.plank);n.scale.set(1.3,.6,1),n.position.y=.35,t.add(n);let s=new Mt,r=er-.35,o=3.6,a=new Ct(.07,.07,o,5);for(let c=0;c<=5;c++){let l=-r+c/5*r*2;for(let[h,u]of[[l,-r],[l,r],[-r,l],[r,l]]){let f=new B(a,i.post);f.position.set(h,o/2,u),f.castShadow=!0,s.add(f)}}for(let c of[.1,o]){for(let l of[-r,r])s.add(Nn(r*2,.16,.16,i.plank,0,c,l));for(let l of[-r,r])s.add(Nn(.16,.16,r*2,i.plank,l,c,0))}for(let c=1;c<5;c++)s.add(Nn(r*2,.1,.12,i.plank,0,o,-r+c/5*r*2));return s.position.y=e-o-.2,t.add(s),{group:t,cage:s,cageTop:s.position.y}}function kM(i){let t=new Mt,e=new B(new Ct(1.1,1.3,.6,8),i.stone??i.post);e.position.y=.2,e.castShadow=e.receiveShadow=!0;let n=new B(new Ct(.12,.14,8,8),i.post);n.position.y=4,n.castShadow=!0;let s=new B(new Ze(.3,0),i.cloth??i.plank);s.position.y=8.2;let r=new Mt;r.position.set(.1,7.6,0);let o=new Oi;o.moveTo(0,0),o.lineTo(3,-.5),o.lineTo(2.3,-1.2),o.lineTo(3,-1.9),o.lineTo(0,-2.2);let a=new B(new Ec(o),i.cloth??i.plank);a.material.side=he,r.add(a);let c=new B(new Ve(.35,5),i.emblem??i.post);c.position.set(1.1,-1.1,.02);let l=c.clone();return l.position.z=-.02,l.rotation.y=Math.PI,r.add(c,l),t.add(e,n,s,r),{group:t,cloth:r}}var Un={fence:{half:2,thick:.3,height:3,hpMult:1,shape:DM},wall:{half:2,thick:.48,height:6,hpMult:2.2,shape:zM},door:{half:4,thick:.35,height:6.6,hpMult:1.6,shape:NM},trap:{free:!0,radius:er+.3,hpMult:.6,shape:OM},flag:{free:!0,radius:1.3,hpMult:3,shape:kM}},Kh=i=>!Un[i].free,Jh=i=>{let t=Un[i.type].half,e=i.alongX?i.x:i.z;return{f:i.alongX?i.z:i.x,a0:e-t,a1:e+t,alongX:i.alongX}};function FM(i,t){let e=Jh(i),n=Jh(t),s=.01;if(e.alongX===n.alongX)return Math.abs(e.f-n.f)>s||Math.min(e.a1,n.a1)-Math.max(e.a0,n.a0)<=s?"ok":i.type==="door"&&t.type!=="door"&&n.a0>=e.a0-s&&n.a1<=e.a1+s?"replace":"block";let r=(a,c,l)=>a>c+s&&a<l-s,o=(a,c,l)=>a>=c-s&&a<=l+s;return r(n.f,e.a0,e.a1)&&o(e.f,n.a0,n.a1)||r(e.f,n.a0,n.a1)&&o(n.f,e.a0,e.a1)?"block":"ok"}function yp(i,t){let e=[],n=new Map,s=tr(3813944,{metalness:.5,roughness:.4}),r=tr(14178410),o=tr(2864544,{side:he}),a=tr(16040539,{emissive:8413216,emissiveIntensity:.4}),c=tr(10131104),l=0,h=null;function u(L){if(!n.has(L)){let z=Qe[L].plank,Y=L==="woodCrystal"?{emissive:6312096,emissiveIntensity:.35}:{};n.set(L,{plank:tr(z,Y),log:tr(xp(z,.88),Y),post:tr(xp(z),Y),knob:s,bait:r,cloth:o,emblem:a,stone:c})}return n.get(L)}let f=new Ee({color:8384704,transparent:!0,opacity:.42,depthWrite:!1}),d=new Ee({color:16738906,transparent:!0,opacity:.42,depthWrite:!1}),g={plank:f,log:f,post:f,knob:f,bait:f,cloth:f,emblem:f,stone:f},y=Object.fromEntries(Object.keys(Un).map(L=>[L,[]]));function m(L,z){let Y=y[L];for(;Y.length<=z;){let X=Un[L].shape(g).group;X.traverse($=>{$.isMesh&&($.castShadow=$.receiveShadow=!1)}),X.visible=!1,i.add(X),Y.push(X)}return Y[z]}let p=new B(new Ct(.25,.25,7,8),new Ee({color:16040539,transparent:!0,opacity:.8}));p.visible=!1,i.add(p);let w=[];function x(L,z,Y,X,$,Z=0){let ct=Un[L],it=$?ct.half:ct.thick,ot=$?ct.thick:ct.half;return new ae(new F(z-it+Z,Y-qi+Z,X-ot+Z),new F(z+it-Z,Y+ct.height-Z,X+ot-Z))}function E(L,z,Y,X,$){let Z=Un[L],it=(X?[[z-Z.half,Y],[z,Y],[z+Z.half,Y]]:[[z,Y-Z.half],[z,Y],[z,Y+Z.half]]).map(([J,ht])=>t.groundHeight(J,ht)),ot=it[1],ut={type:L,x:z,z:Y,y:ot,alongX:X,ok:!0,reason:"",replace:[]},rt=J=>(ut.ok=!1,ut.reason=J,ut);if(Math.min(...it)<t.waterLevel+.2)return rt("\u6C34\u306E\u4E0A\u306B\u306F\u5EFA\u3066\u3089\u308C\u306A\u3044");if(Math.max(...it)-Math.min(...it)>(L==="door"?3:2.4))return rt("\u5742\u304C\u6025\u3059\u304E\u3066\u5EFA\u3066\u3089\u308C\u306A\u3044");let lt=x(L,z,ot,Y,X,.15);lt.min.y=ot+.2;let W=new Set;for(let J of t.collidersNear(z,Y))if(J.structure&&Kh(J.structure.type)){let ht=J.structure;if(W.has(ht))continue;W.add(ht);let at=FM(ut,ht);if(at==="block")return rt("\u3082\u3046\u5EFA\u3063\u3066\u3044\u308B\u7269\u3068\u3076\u3064\u304B\u308B");at==="replace"&&ut.replace.push(ht)}else if(!J.box.isEmpty()&&J.box.intersectsBox(lt))return rt("\u307B\u304B\u306E\u7269\u3068\u3076\u3064\u304B\u308B");return new ae(new F($.x-.9,$.y,$.z-.9),new F($.x+.9,$.y+5,$.z+.9)).intersectsBox(lt)?rt("\u81EA\u5206\u3068\u91CD\u306A\u3063\u3066\u3044\u308B"):ut}let R=(L,z,Y=4.5)=>({x:L.x+Math.sin(z)*Y,z:L.z+Math.cos(z)*Y}),M=L=>({x:Math.round(L.x/Re)*Re,z:Math.round(L.z/Re)*Re});function T(L,z,Y){let X=Un[L],$=R(z,Y,X.radius+2.5),Z=Math.round($.x),ct=Math.round($.z),it=X.radius,ot=[[0,0],[it,0],[-it,0],[0,it],[0,-it]].map(([Q,J])=>t.groundHeight(Z+Q,ct+J)),ut=ot[0],rt={type:L,x:Z,z:ct,y:ut,alongX:!0,ok:!0,reason:"",replace:[]},lt=Q=>(rt.ok=!1,rt.reason=Q,rt);if(Math.min(...ot)<t.waterLevel+.2)return[lt("\u6C34\u306E\u4E0A\u306B\u306F\u7F6E\u3051\u306A\u3044")];if(Math.max(...ot)-Math.min(...ot)>2.2)return[lt("\u5730\u9762\u304C\u5E73\u3089\u3058\u3083\u306A\u3044")];let W=new ae(new F(Z-it+.3,ut+.3,ct-it+.3),new F(Z+it-.3,ut+5,ct+it-.3));for(let Q of t.collidersNear(Z,ct))if(!Q.box.isEmpty()&&Q.box.intersectsBox(W))return[lt("\u307B\u304B\u306E\u7269\u3068\u3076\u3064\u304B\u308B")];for(let Q of e)if(Un[Q.type].free&&Math.hypot(Q.x-Z,Q.z-ct)<it+Un[Q.type].radius)return[lt("\u307B\u304B\u306E\u7269\u3068\u3076\u3064\u304B\u308B")];return[rt]}function v(L,z,Y,X){if(Un[L].free)return T(L,z,Y);let $=R(z,Y),Z=Math.sin(Y),ct=Math.cos(Y),it=Math.abs(ct)>=Math.abs(Z);X&&(it=!it);let ot=Q=>Math.floor(Q/Re)*Re+Re/2,ut=Q=>Math.round(Q/Re)*Re,rt=Un[L].half===2?ot:ut,lt=it?rt($.x):ut($.x),W=it?ut($.z):rt($.z);return[E(L,lt,W,it,z)]}function _(L,z,Y,X){let $=(W,Q)=>W+Je.clamp(Q-W,-gp*Re,gp*Re);Y={x:$(z.x,Y.x),z:$(z.z,Y.z)};let Z=Math.min(z.x,Y.x),ct=Math.max(z.x,Y.x),it=Math.min(z.z,Y.z),ot=Math.max(z.z,Y.z),ut=[],rt=W=>{for(let Q=Z;Q<ct-.01;Q+=Re)ut.push(E(L,Q+Re/2,W,!0,X))},lt=W=>{for(let Q=it;Q<ot-.01;Q+=Re)ut.push(E(L,W,Q+Re/2,!1,X))};return it===ot?rt(it):Z===ct?lt(Z):(rt(it),rt(ot),lt(Z),lt(ct)),{plans:ut,w:(ct-Z)/Re,d:(ot-it)/Re}}function b(L,z,Y){let X=Qe[L],$=t.regionAt(z,Y),Z=LM[$?.id]??[],ct=Z.filter(ot=>!X.resist[ot]),it=Z.filter(ot=>X.resist[ot]);return{mult:ct.length?HM:1,weak:ct.map(ot=>`${$.name}\u3067\u306F${ss[ot].effect}`),strong:it.map(ot=>`${ss[ot].name}\u306B\u5F37\u3044\u306E\u3067\u3001${$.name}\u3067\u3082\u5E73\u6C17`)}}let H=(L,z,Y)=>Math.round(Qe[z].durability*Un[L].hpMult*Y.mult);function I(L,z){let{type:Y,x:X,y:$,z:Z,alongX:ct}=L;for(let J of L.replace)e.includes(J)&&S(J);let it=Un[Y].shape(u(z)),ot=it.group;ot.position.set(X,$,Z),ot.rotation.y=ct?0:Math.PI/2,i.add(ot);let ut=b(z,X,Z),rt=H(Y,z,ut),lt={type:Y,woodId:z,x:X,y:$,z:Z,alongX:ct,group:ot,hinges:it.hinges,hp:rt,maxHp:rt,colliders:[],panels:[],shake:0,open:!1,angle:0,target:0},W=Qe[z].plank,Q=J=>({box:J,color:W,kind:"fence",structure:lt});if(Y==="trap")Object.assign(lt,{cage:it.cage,cageTop:it.cageTop,armed:!0,sprung:!1,cageY:it.cageTop});else if(Y==="flag"){for(let J of e.filter(ht=>ht.type==="flag"))S(J);lt.cloth=it.cloth,lt.colliders.push({box:new ae(new F(X-.4,$-.5,Z-.4),new F(X+.4,$+8,Z+.4)),cyl:{x:X,z:Z,r:.4},color:16040539,kind:"flag",structure:lt}),h=lt}else if(Y!=="door")lt.colliders.push(Q(x(Y,X,$,Z,ct)));else{let J=Un.door,ht=(at,Lt,_t)=>{let U=new ae(new F,new F);return ct?U.set(new F(X+at,$-qi,Z-_t),new F(X+Lt,$+J.height,Z+_t)):U.set(new F(X-_t,$-qi,Z+at),new F(X+_t,$+J.height,Z+Lt)),U};lt.colliders.push(Q(ht(-4.4,-3.6,.4)),Q(ht(3.6,4.4,.4))),lt.panels=[Q(ht(-3.6,0,J.thick)),Q(ht(0,3.6,J.thick))],lt.colliders.push(...lt.panels)}return lt.colliders.forEach(J=>t.addCollider(J)),e.push(lt),l++,{s:lt,env:ut}}function S(L){i.remove(L.group),L.group.traverse(z=>{z.isMesh&&z.geometry.dispose()});for(let z of L.colliders)L.open&&L.panels.includes(z)||t.removeCollider(z);e.splice(e.indexOf(L),1),L===h&&(h=null),l++}let A=400,P=null,N=-1;function k(){if(N===l)return P;P=new Set;for(let L of e){if(!Kh(L.type))continue;let z=Jh(L);for(let Y=z.a0;Y<z.a1-.01;Y+=Re)P.add(`${z.alongX?"h":"v"},${Math.round(Y/Re)},${Math.round(z.f/Re)}`)}return N=l,P}function O(L,z){let Y=k(),X=[Math.floor(L/Re),Math.floor(z/Re)],$=new Set([X.join()]),Z=[X];for(;Z.length;){let[it,ot]=Z.pop(),ut=[[it+1,ot,`v,${ot},${it+1}`],[it-1,ot,`v,${ot},${it}`],[it,ot+1,`h,${it},${ot+1}`],[it,ot-1,`h,${it},${ot}`]];for(let[rt,lt,W]of ut){if(Y.has(W))continue;let Q=`${rt},${lt}`;if(!$.has(Q)){if($.add(Q),$.size>A)return null;Z.push([rt,lt])}}}let ct=[...$].map(it=>it.split(",").map(Number));return{cells:ct,count:ct.length,area:ct.length*Re*Re,has:(it,ot)=>$.has(`${Math.floor(it/Re)},${Math.floor(ot/Re)}`),randomPoint(){let[it,ot]=ct[Math.floor(Math.random()*ct.length)];return{x:it*Re+.8+Math.random()*(Re-1.6),z:ot*Re+.8+Math.random()*(Re-1.6)}}}}let G=new F;return{get count(){return e.length},cornerAt(L,z){return M(R(L,z))},preview(L,z,Y,X,$,Z=null){if(p.visible=!!(L&&Z),!L)w=[];else if(Z){let rt=_(L,Z,M(R(z,Y)),z);w=rt.plans,p.position.set(Z.x,t.groundHeight(Z.x,Z.z)+3.5,Z.z),w.w=rt.w,w.d=rt.d}else w=v(L,z,Y,X);let ct=Object.fromEntries(Object.keys(Un).map(rt=>[rt,0]));f.color.set($?Qe[$].plank:16777215).lerp(new st(8384704),.5);for(let rt of w){let lt=m(rt.type,ct[rt.type]++);lt.visible=!0,lt.position.set(rt.x,rt.y,rt.z),lt.rotation.y=rt.alongX?0:Math.PI/2;let W=rt.ok?f:d;lt.traverse(Q=>{Q.isMesh&&(Q.material=W)})}for(let[rt,lt]of Object.entries(y))for(let W=ct[rt];W<lt.length;W++)lt[W].visible=!1;if(!L)return null;let it=w.filter(rt=>rt.ok).length,ot=w[0],ut=ot?b($,ot.x,ot.z):{mult:1,weak:[],strong:[]};return{plans:w,count:w.length,ok:it,reason:w.find(rt=>!rt.ok)?.reason??"",w:w.w,d:w.d,env:ut,hp:H(L,$,ut)}},place(L){let z=w.filter(X=>X.ok);if(!z.length)return{placed:0,reason:w[0]?.reason??""};let Y=z.map(X=>I(X,L));return w=[],{placed:Y.length,skipped:0,structures:Y.map(X=>X.s),env:Y[0].env}},climate:b,hit(L,z,{range:Y,arc:X,damage:$}){let Z=[],ct=Math.sin(z),it=Math.cos(z);for(let ot of[...e]){if(ot.type==="trap"&&!ot.armed)continue;let ut=ot.x,rt=ot.z,lt=.6;if(Kh(ot.type)){let U=Un[ot.type].half;ot.alongX?ut=Je.clamp(L.x,ot.x-U,ot.x+U):rt=Je.clamp(L.z,ot.z-U,ot.z+U)}else lt=Un[ot.type].radius*.6;let W=ut-L.x,Q=rt-L.z,J=Math.hypot(W,Q);if(J>Y+lt||Math.abs(ot.y-L.y)>5||J>1.2&&Math.acos(Je.clamp((W*ct+Q*it)/J,-1,1))>X/2)continue;let ht=ot.woodId==="woodMaple"?.8:1,at=Math.max(1,Math.round($*ht*(.9+Math.random()*.2)));ot.hp-=at,ot.shake=.3;let Lt=ot.hp<=0,_t=G.set(ut,ot.y+1.6,rt).clone();Lt&&S(ot),Z.push({pos:_t,damage:at,destroyed:Lt,name:Qe[ot.type].name,hp:Math.max(0,ot.hp),maxHp:ot.maxHp,woodId:ot.woodId})}return Z},get version(){return l},get base(){return h},penAt:O,armedTrapAt(L,z,Y){return e.find(X=>X.type==="trap"&&X.armed&&Math.hypot(X.x-L,X.z-z)<Y)??null},springTrap(L){L.armed=!1,L.sprung=!0,l++},removeTrap(L){e.includes(L)&&S(L)},nearestDoor(L,z=7){let Y=null,X=z;for(let $ of e){if($.type!=="door")continue;let Z=Math.hypot(L.x-$.x,L.z-$.z);Z<X&&Math.abs(L.y-$.y)<5&&(X=Z,Y=$)}return Y},toggleDoor(L,z,Y){if(!L.open){let X=L.alongX?Math.sign(z.z-L.z):Math.sign(z.x-L.x);return L.target=(X||1)*1.7,L.open=!0,L.panels.forEach($=>t.removeCollider($)),!0}return Y&&L.panels.some(X=>Y.intersectsBox(X.box))?!1:(L.target=0,L.open=!1,L.panels.forEach(X=>t.addCollider(X)),!0)},update(L){for(let z of e){if(z.sprung&&z.cageY>0&&(z.cageY=Math.max(0,z.cageY-L*14),z.cage.position.y=z.cageY,z.cageY===0&&(z.shake=.3)),z.cloth&&(z.cloth.rotation.y=Math.sin(performance.now()/600)*.25),z.hinges&&z.angle!==z.target){let Y=L*4;z.angle+=Je.clamp(z.target-z.angle,-Y,Y),z.hinges[0].rotation.y=z.angle,z.hinges[1].rotation.y=-z.angle}if(z.shake>0){z.shake=Math.max(0,z.shake-L);let Y=Math.sin(z.shake*60)*.12*(z.shake/.3);z.group.position.set(z.x+(z.alongX?0:Y),z.y,z.z+(z.alongX?Y:0))}}}}}var _p=i=>new F(Math.sin(i),0,Math.cos(i)),Ep=i=>i.clone().setY(i.y+3),os={bloodGale:{name:"\u8840\u98A8\u65AC",key:"Q",desc:"\u6B8B\u50CF\u3092\u6B8B\u3057\u3066\u99C6\u3051\u629C\u3051\u3001\u901A\u308A\u9053\u3092\u65AC\u308B\u3002\u5C11\u3057\u9045\u308C\u3066\u3001\u901A\u308A\u9053\u304B\u3089\u8840\u306E\u68D8\u304C\u5674\u304D\u51FA\u3059\uFF08\u99C6\u3051\u629C\u3051\u308B\u9593\u306F\u7121\u6575\uFF09",cooldown:5,duration:.62,anim:6,start(i,t){let e=_p(i.player.facing);t.dir=e,t.from=i.player.position.clone(),t.to=t.from.clone().addScaledVector(e,14),t.ghosts=0,t.cut=!1,t.burst=!1,i.invuln(.55),i.player.knockback(e.x*58,e.z*58),i.fovKick(8)},update(i,t,e){for(;t.ghosts<5&&e>=t.ghosts*.04;)i.fx.afterimage(i.character.object,.35),t.ghosts++;if(!t.cut&&e>=.16){t.cut=!0,i.fx.streak(t.from,i.player.position.clone().addScaledVector(t.dir,2),3,.8);let n=t.from,s=t.to;t.hits=i.enemies.hitArea(r=>Mr(r.pos.x,r.pos.z,n.x,n.z,s.x,s.z)<2.8+r.T.radius&&Math.abs(r.pos.y-n.y)<5,{damage:i.power(2.4),knockback:.6,from:n});for(let r of t.hits)i.fx.burst(r.pos,18,9);t.hits.length&&(i.hitStop(.08),i.shake(.5)),i.applyHits(t.hits)}if(!t.burst&&e>=.5){t.burst=!0;let n=t.from,s=t.to;for(let o=0;o<=6;o++){let a=n.clone().lerp(s,o/6);i.fx.spike(a.x,a.z,3.8,1.1)}i.fx.flash(n.clone().lerp(s,.5),90,35,.4);let r=i.enemies.hitArea(o=>Mr(o.pos.x,o.pos.z,n.x,n.z,s.x,s.z)<3+o.T.radius&&Math.abs(o.pos.y-n.y)<5,{damage:i.power(1.5),knockback:.8,from:n,bleed:!0});for(let o of r)i.fx.burst(o.pos,12,7);i.shake(.35),i.applyHits(r)}}},crimsonMoon:{name:"\u7D05\u6708\u589C\u3068\u3057",key:"E",desc:"\u9AD8\u304F\u8DF3\u3073\u4E0A\u304C\u3063\u3066\u53E9\u304D\u3064\u3051\u3001\u4E09\u91CD\u306E\u885D\u6483\u6CE2\u30FB\u8840\u306E\u68D8\u306E\u8F2A\u30FB\u8840\u306E\u67F1\u3092\u5674\u304D\u4E0A\u3052\u308B",cooldown:8,duration:.95,anim:7,start(i,t){let e=_p(i.player.facing);i.player.knockback(e.x*8,e.z*8,36),i.invuln(.8),t.done=!1,t.wave=0},update(i,t,e){if(!t.done&&e>=.62){t.done=!0,t.c=i.player.position.clone();let n=t.c;i.fx.nova(n.clone().setY(n.y+.5),6,.35),i.fx.flash(n,160,45,.5),i.fx.burst(n.clone().setY(n.y+.5),40,13);for(let r=0;r<14;r++){let o=r/14*Math.PI*2;i.fx.spike(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,3.4,1.1)}for(let r=0;r<6;r++){let o=r/6*Math.PI*2+.3;i.fx.pillar(n.x+Math.cos(o)*9,n.z+Math.sin(o)*9,16,.9,1.3)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<10+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(3.2),knockback:3,from:n});for(let r of s)i.fx.burst(r.pos,14,8);i.shake(1),i.screenFlash(.6),i.fovKick(-6),s.length&&i.hitStop(.14),i.applyHits(s)}for(;t.done&&t.wave<3&&e>=.62+t.wave*.1;)i.fx.ring(t.c,8+t.wave*4,.5+t.wave*.15,t.wave===1?9046040:16722490),t.wave++}},bloodRelease:{name:"\u9BAE\u8840\u89E3\u653E",key:"R",desc:"HP \u3092 20% \u6367\u3052\u3001\u307E\u308F\u308A\u3092\u5439\u304D\u98DB\u3070\u3059\u8840\u306E\u7206\u767A\u3092\u8D77\u3053\u3059\u300210 \u79D2\u9593\u3001\u653B\u6483\u529B 1.8 \u500D\u30FB\u5438\u8840 25%\u3001\u5263\u3092\u632F\u308B\u305F\u3073\u306B\u8840\u306E\u65AC\u6483\u6CE2\u304C\u98DB\u3076",cooldown:25,duration:1,anim:9,canUse(i){let t=Math.ceil(i.stats.maxHp*.2);return i.stats.hp<=t+1?(i.toast("HP \u304C\u8DB3\u308A\u306A\u3044\u2026"),!1):!0},start(i,t){let e=Math.ceil(i.stats.maxHp*.2);i.stats.hp-=e,i.popup(i.player.position.clone().setY(i.player.position.y+5.5),`-${e}`,"hurt"),i.invuln(1),t.done=!1},update(i,t,e){if(t.done||e<.5)return;t.done=!0;let n=i.player.position.clone();i.fx.nova(Ep(n),14,.7),i.fx.ring(n,16,.8),i.fx.ring(n,10,.6,9046040),i.fx.burst(Ep(n),50,12),i.fx.flash(n,200,50,.7);for(let r=0;r<8;r++){let o=r/8*Math.PI*2;i.fx.pillar(n.x+Math.cos(o)*6,n.z+Math.sin(o)*6,20,1.1,1.1)}let s=i.enemies.hitArea(r=>Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<12+r.T.radius&&Math.abs(r.pos.y-n.y)<6,{damage:i.power(2.6),knockback:3.2,from:n});i.applyHits(s),i.shake(1.1),i.screenFlash(.9),i.fovKick(10),i.startBuff({name:"\u9BAE\u8840\u89E3\u653E",time:10,atk:1.8,lifesteal:.25,waves:!0})}}};function Mp(i,t){let e=[],r=new xn(.16,0),o=new It({color:11538462,emissive:5242888,emissiveIntensity:.6,roughness:.3,transparent:!0}),a=new Ms(.85,1,48),c=new Et(.28,.1,.18),l=new $t(.45,1,5).translate(0,.5,0),h=new It({color:13639738,emissive:8390680,emissiveIntensity:.9,flatShading:!0,roughness:.2,metalness:.2,transparent:!0}),u=new Ke(16724032,0,30);i.add(u);let f=0,d=0,g=0,y=(m,p,w)=>{i.add(m),e.push({mesh:m,life:p,t:0,update:w})};return{burst(m,p=14,w=7){for(let x=0;x<p;x++){let E=new B(r,o);E.position.copy(m);let R=Math.random()*Math.PI*2,M=w*(.4+Math.random()*.8),T=new F(Math.cos(R)*M,4+Math.random()*7,Math.sin(R)*M);E.scale.setScalar(.6+Math.random()*.9),y(E,.6+Math.random()*.4,(v,_)=>{T.y-=28*_,E.position.addScaledVector(T,_);let b=t(E.position.x,E.position.z)+.1;E.position.y<b&&(E.position.y=b,T.set(0,0,0),E.scale.y=.25),E.material.opacity=1})}},chips(m,p=8,w=11897438){let x=new It({color:w,roughness:.9,flatShading:!0});for(let E=0;E<p;E++){let R=new B(c,x);R.position.copy(m);let M=Math.random()*Math.PI*2,T=3+Math.random()*4,v=new F(Math.cos(M)*T,3+Math.random()*5,Math.sin(M)*T),_=new F(Math.random()*10,Math.random()*10,Math.random()*10);y(R,.8,(b,H)=>{v.y-=25*H,R.position.addScaledVector(v,H),R.rotation.x+=_.x*H,R.rotation.y+=_.y*H;let I=t(R.position.x,R.position.z)+.08;R.position.y<I&&(R.position.y=I,v.set(0,0,0),_.set(0,0,0))})}},ring(m,p,w=.5,x=16722490){let E=new B(a,new Ee({color:x,transparent:!0,side:he,depthWrite:!1,blending:Qn}));E.rotation.x=-Math.PI/2,E.position.set(m.x,m.y+.2,m.z),y(E,w,R=>{let M=R.t/R.life;E.scale.setScalar(.5+p*(1-Math.pow(1-M,3))),E.material.opacity=1-M})},streak(m,p,w=2.2,x=.6){let E=m.distanceTo(p),R=new B(new Sn(w,E),new Ee({color:16722490,transparent:!0,side:he,depthWrite:!1,blending:Qn}));R.position.copy(m).lerp(p,.5),R.position.y+=1.6,R.lookAt(p.x,R.position.y,p.z),R.rotateX(Math.PI/2),y(R,x,M=>{let T=M.t/M.life;R.material.opacity=.8*(1-T),R.scale.x=1-T*.7})},spike(m,p,w=3.5,x=1.3){let E=t(m,p),R=new Mt;R.position.set(m,E-.3,p);let M=3+Math.floor(Math.random()*3);for(let T=0;T<M;T++){let v=new B(l,h.clone()),_=w*(.5+Math.random()*.6);v.scale.set(.6+Math.random()*.5,_,.6+Math.random()*.5),v.position.set((Math.random()-.5)*1.4,0,(Math.random()-.5)*1.4),v.rotation.set((Math.random()-.5)*.7,Math.random()*3,(Math.random()-.5)*.7),v.userData.h=_,R.add(v)}y(R,x,T=>{let v=T.t/T.life,_=v<.12?v/.12:v>.7?1-(v-.7)/.3:1;R.children.forEach(b=>{b.scale.y=b.userData.h*Math.max(_,.001),b.material.opacity=v>.7?1-(v-.7)/.3:1})})},aura(m){let w=new Float32Array(150),x=Array.from({length:50},()=>({a:Math.random()*Math.PI*2,r:.6+Math.random()*1.2,y:Math.random()*5,v:1.5+Math.random()*2})),E=new ce;E.setAttribute("position",new me(w,3));let R=new sn(E,new $e({color:16722490,size:.28,transparent:!0,opacity:.9,depthWrite:!1,blending:Qn}));R.frustumCulled=!1;let M=new B(a,new Ee({color:16722490,transparent:!0,opacity:.5,side:he,depthWrite:!1,blending:Qn}));M.rotation.x=-Math.PI/2;let T=new Mt;T.add(R,M);let v=!0;return y(T,1/0,(_,b)=>{T.position.copy(m.position),M.position.y=.15,M.scale.setScalar(1.6+Math.sin(_.t*6)*.15);for(let H=0;H<50;H++){let I=x[H];I.y+=I.v*b,I.y>5.5&&(I.y=0),I.a+=b*1.5,w[H*3]=Math.cos(I.a)*I.r,w[H*3+1]=I.y,w[H*3+2]=Math.sin(I.a)*I.r}E.attributes.position.needsUpdate=!0,v||(_.life=_.t)}),{stop(){v=!1}}},afterimage(m,p=.35){let w=m.clone(!0),x=new Ee({color:16722490,transparent:!0,opacity:.55,depthWrite:!1,blending:Qn});w.traverse(E=>{(E.isMesh||E.isPoints)&&(E.material=x,E.castShadow=!1)}),w.position.copy(m.position),w.rotation.copy(m.rotation),y(w,p,E=>{x.opacity=.55*(1-E.t/E.life)})},pillar(m,p,w=14,x=.9,E=1.4){let R=t(m,p),M=new B(new Ct(E*.6,E,1,12,1,!0).translate(0,.5,0),new Ee({color:16722490,transparent:!0,side:he,depthWrite:!1,blending:Qn}));M.position.set(m,R,p),y(M,x,T=>{let v=T.t/T.life;M.scale.set(1+v*.5,w*Math.min(1,v*6),1+v*.5),M.material.opacity=.85*(1-v),M.rotation.y+=.2}),this.burst(new F(m,R+1,p),8,5)},nova(m,p=12,w=.6){let x=new B(new te(1,24,16),new Ee({color:16722490,transparent:!0,depthWrite:!1,blending:Qn,side:he}));x.position.copy(m),y(x,w,E=>{let R=E.t/E.life;x.scale.setScalar(.5+p*(1-Math.pow(1-R,3))),x.material.opacity=.6*(1-R)})},flash(m,p=80,w=30,x=.35){u.position.copy(m),u.position.y+=2,u.distance=w,g=p,f=x,d=0},crescent(m,p,{speed:w=42,life:x=.55,size:E=3.2,onMove:R}={}){let M=new Mt,T=new B(new yn(E,E*.14,6,24,Math.PI),new Ee({color:16722490,transparent:!0,depthWrite:!1,blending:Qn,side:he}));T.rotation.set(-Math.PI/2,0,Math.PI),T.scale.z=.4,M.add(T),M.position.copy(m),M.lookAt(m.x+p.x,m.y,m.z+p.z),y(M,x,(v,_)=>{M.position.addScaledVector(p,w*_);let b=v.t/v.life;T.material.opacity=.9*(1-b*b),M.scale.setScalar(1+b*.4),R?.(M.position)})},update(m){d<f?(d+=m,u.intensity=g*Math.max(0,1-d/f)):u.intensity=0;for(let p=e.length-1;p>=0;p--){let w=e[p];w.t+=m,w.update(w,m),w.t>=w.life&&(i.remove(w.mesh),e.splice(p,1))}}}}var Pt=i=>document.getElementById(i),vp=["\u30D2\u30F3\u30C8\uFF1A\u65C5\u306F\u5CF6\u306E\u4E2D\u592E\u306B\u3042\u308B\u661F\u306E\u796D\u58C7\u304B\u3089\u59CB\u307E\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u53E4\u4EE3\u907A\u8DE1\u306E\u53F0\u5730\u306E\u5854\u306E\u3066\u3063\u307A\u3093\u306B\u3001\u30AF\u30EA\u30B9\u30BF\u30EB\u304C\u7720\u3063\u3066\u3044\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A4\u672C\u306E\u5927\u6A4B\u3092\u6E21\u308B\u3068\u3001\u305D\u308C\u305E\u308C\u5225\u306E\u5CF6\u3078\u884C\u3051\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u5CF6\u306F\u3068\u3066\u3082\u5E83\u3044\u3002M \u30AD\u30FC\u306E\u5730\u56F3\u3067\u540D\u6240\u3092\u63A2\u3057\u3066\u307F\u3088\u3046","\u30D2\u30F3\u30C8\uFF1A\u767D\u5DBA\u306E\u96EA\u539F\u306B\u306F\u3001\u305F\u307E\u306B\u30B7\u30ED\u30AF\u30DE\u304C\u73FE\u308C\u307E\u3059\u3002\u89AA\u5B50\u3067\u6B69\u3044\u3066\u3044\u308B\u3053\u3068\u3082","\u30D2\u30F3\u30C8\uFF1A\u30B7\u30ED\u30AF\u30DE\u3092\u653B\u6483\u3057\u3066\u6012\u3089\u305B\u3001\u6728\u306E\u308F\u306A\u306B\u8A98\u3044\u3053\u3093\u3067\u3001\u751F\u8089\u3092\u3042\u3052\u308B\u3068\u4EF2\u9593\u306B\u306A\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u62E0\u70B9\u306E\u65D7\u3092\u67F5\u306E\u56F2\u3044\u306E\u4E2D\u306B\u7ACB\u3066\u308B\u3068\u3001\u7267\u5834\u306B\u306A\u3063\u3066\u30DA\u30C3\u30C8\u3092\u4F11\u307E\u305B\u3089\u308C\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u6D77\u3084\u6E56\u3067\u306F\u6CF3\u3052\u307E\u3059\u3002\u6CF3\u3044\u3067\u3044\u308B\u9593\u306F\u30AF\u30DE\u306B\u8972\u308F\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30B7\u30AA\u30AB\u30BC\u6751\u306F\u5B89\u5168\u5730\u5E2F\u3067\u3059","\u30D2\u30F3\u30C8\uFF1AM \u30AD\u30FC\u3067\u5CF6\u306E\u5730\u56F3\u3092\u5927\u304D\u304F\u8868\u793A\u3067\u304D\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u796D\u58C7\u306E\u307E\u308F\u308A\u306F\u5B89\u5168\u5730\u5E2F\u3002\u91CE\u751F\u306E\u52D5\u7269\u306F\u5165\u3063\u3066\u3053\u3089\u308C\u307E\u305B\u3093","\u30D2\u30F3\u30C8\uFF1A\u30AF\u30EA\u30C3\u30AF\u304B F \u30AD\u30FC\u3067\u5263\u3092\u632F\u308C\u307E\u3059\u3002\u7D9A\u3051\u3066\u62BC\u3059\u30683\u6BB5\u30B3\u30F3\u30DC","\u30D2\u30F3\u30C8\uFF1A\u6570\u5B57\u30AD\u30FC 1\u301C8 \u3067\u6301\u3061\u7269\u3092\u5207\u308A\u66FF\u3048\u3002\u7A7A\u306E\u30DE\u30B9\u3092\u9078\u3076\u3068\u7D20\u624B\u306B\u306A\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u9B54\u5263\u30B5\u30F3\u30B0\u30EC\u30A2\u3092\u6301\u3064\u3068\u3001Q\u30FBE\u30FBR \u3067 3 \u3064\u306E\u6280\u304C\u4F7F\u3048\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AB \u30AD\u30FC\u3067\u661F\u306E\u796D\u58C7\u306B\u623B\u308C\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u65A7\u306F\u9B54\u7269\u306B\u306F\u5F31\u3044\u3051\u308C\u3069\u3001\u6728\u3084\u67F5\u3092\u3059\u3050\u306B\u58CA\u305B\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u67F5\u3084\u6249\u3092\u6301\u3063\u3066\u653B\u6483\u30DC\u30BF\u30F3\u3067\u5EFA\u3066\u3089\u308C\u307E\u3059\u3002R \u3067\u5411\u304D\u3092\u5909\u3048\u3001T \u3067\u6728\u6750\u3092\u9078\u3079\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u67F5\u3084\u58C1\u3092\u6301\u3063\u3066 V \u30AD\u30FC\u3092\u62BC\u3059\u3068\u3001\u89D2\u3092 2 \u3064\u9078\u3076\u3060\u3051\u3067\u56DB\u89D2\u304F\u56F2\u3048\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u6249\u306E\u8FD1\u304F\u3067 G \u30AD\u30FC\u3092\u62BC\u3059\u3068\u958B\u3051\u9589\u3081\u3067\u304D\u307E\u3059","\u30D2\u30F3\u30C8\uFF1A\u6728\u3092\u653B\u6483\u3059\u308B\u3068\u5207\u308A\u5012\u305B\u307E\u3059\u3002\u5730\u65B9\u3054\u3068\u306B\u9055\u3046\u6728\u6750\u304C\u624B\u306B\u5165\u308A\u307E\u3059","\u30D2\u30F3\u30C8\uFF1AShift \u3092\u62BC\u3057\u306A\u304C\u3089\u79FB\u52D5\u3059\u308B\u3068\u8D70\u308C\u307E\u3059\uFF08\u30B9\u30DE\u30DB\u306F\u30B9\u30C6\u30A3\u30C3\u30AF\u3092\u7AEF\u307E\u3067\u5012\u3059\uFF09"],kp=Pt("scene"),as=new Go({canvas:kp,antialias:!0}),Lr=window.matchMedia("(pointer: coarse)").matches;as.setPixelRatio(Math.min(window.devicePixelRatio,Lr?1.5:2));as.setSize(window.innerWidth,window.innerHeight);as.shadowMap.enabled=!0;as.shadowMap.type=Sh;as.outputColorSpace=Oe;var nr=new uc,In=new Wn(60,window.innerWidth/window.innerHeight,.1,2600),si,De,qt,Yi,Mn,Ii,On,ri=mp(Pt("popup-layer")),BM=()=>new Promise(i=>{requestAnimationFrame(()=>i()),setTimeout(i,50)}),wp=i=>new Promise(t=>setTimeout(t,i));function bp(i,t){Pt("progress-fill").style.width=i+"%",t&&(Pt("loading-status").textContent=t)}async function GM(){Pt("loading-tip").textContent=vp[Math.floor(Math.random()*vp.length)];let i=[["\u30D5\u30A9\u30F3\u30C8\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...",async()=>{await document.fonts.ready}],["\u30D9\u30FC\u30B9\u30D7\u30EC\u30FC\u30C8\u3092\u751F\u6210\u4E2D...",async()=>{si=ep(nr,as,{lite:Lr}),Lr&&(In.far=1300)}],["\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u751F\u6210\u4E2D...",async()=>{De=ap(),nr.add(De.object),Hr(),qt=lp(De,si),qt.respawn(),Yi=up(Pt("minimap"),si),Mn=pp(nr,si,Pt("label-layer")),Mn.onEvent=t=>ye(t,3e3),Ii=Mp(nr,si.groundHeight),On=yp(nr,si),qM()}],["\u30B7\u30FC\u30F3\u3092\u6E96\u5099\u4E2D...",async()=>{as.compile(nr,In),as.render(nr,In)}]];for(let t=0;t<i.length;t++){let[e,n]=i[t];bp(t/i.length*100,e),await BM(),await Promise.all([n(),wp(450)])}bp(100,"\u5B8C\u4E86\uFF01"),await wp(400),Pt("loading-screen").classList.add("fade"),Pt("menu").classList.remove("hidden"),setTimeout(()=>Pt("loading-screen").remove(),900),setTimeout(()=>De.wave(),900)}var Ei="menu",Fp=!0,Bp=0,la=0,Wc=new F,Xc=new F,Qh=new F,tu=new F,tn={yaw:0,pitch:.35,dist:18},VM=6,WM=60;function Gp(i,t){let e=si.spawnPoint.clone().add(new F(0,3,0)),n=Math.sin(Bp*.15)*.45+.35,s=20;i.set(e.x+Math.sin(n)*s,e.y+3.5,e.z+Math.cos(n)*s);let r=window.innerWidth>700,o=e.clone().sub(i).normalize(),a=new F().crossVectors(o,new F(0,1,0)).normalize();t.copy(e).addScaledVector(a,r?-4.2:0),r||(t.y-=1.5)}function XM(i,t){let e=qt.position;t.set(e.x,e.y+4.5,e.z);let n=Math.cos(tn.pitch);i.set(t.x+Math.sin(tn.yaw)*n*tn.dist,t.y+Math.sin(tn.pitch)*tn.dist,t.z+Math.cos(tn.yaw)*n*tn.dist);let s=Math.max(si.groundHeight(i.x,i.z),si.waterLevel)+.8;i.y<s&&(i.y=s)}function qM(){Gp(Wc,Xc),In.position.copy(Wc),In.lookAt(Xc)}function YM(i){la+=i,Ei==="menu"?(Fp&&(Bp+=i),Gp(Qh,tu)):XM(Qh,tu);let t=Ei==="menu"?3:4+la*la*80,e=1-Math.exp(-i*t);Wc.lerp(Qh,e),Xc.lerp(tu,e),In.position.copy(Wc),In.lookAt(Xc)}var Cs=hp(kp,{joystickEl:Pt("joystick"),jumpBtnEl:Pt("btn-jump"),attackBtnEl:Pt("btn-attack"),skillBtnsEl:Pt("skill-btns"),onKey(i){if(i==="Escape")cs?(cs=null,ye("\u89D2\u306E\u9078\u629E\u3092\u3084\u3081\u305F")):Yi.expanded?Yi.expanded=!1:Qp();else if(i==="KeyM")Yi.expanded=!Yi.expanded;else if(i==="KeyH")Pt("help").classList.toggle("hidden");else if(/^Digit[0-9]$/.test(i)){let t=Number(i.slice(5));Wp(t===0?9:t-1)}else i==="KeyP"?Jp():i==="KeyG"||i==="KeyE"&&!Me.held?.skills?Kp():i==="KeyR"&&Me.held?.kind==="build"?Yp():i==="KeyT"&&Me.held?.kind==="build"?Zp():i==="KeyV"&&Me.held?.kind==="build"?$p():i==="KeyB"&&!Mi&&lv()}});function Tp(){let{dx:i,dy:t,zoom:e}=Cs.consumeLook();tn.yaw-=i*.006,tn.pitch=Je.clamp(tn.pitch+t*.005,-.2,1.35),tn.dist=Je.clamp(tn.dist*(1+e*.001),VM,WM)}function lu(){let{forward:i,right:t}=Cs.move(),e=-Math.sin(tn.yaw),n=-Math.cos(tn.yaw),s=Math.cos(tn.yaw),r=-Math.sin(tn.yaw);return{x:e*i+s*t,z:n*i+r*t}}var Vt={level:1,exp:0,hp:100,maxHp:100,atk:10,stamina:100,maxStamina:100},ca=!1,eu=0;function $M(i,t,e){let n=t&&e&&!ca&&!qt.swimming;n?(Vt.stamina=Math.max(0,Vt.stamina-20*i),eu=0,Vt.stamina<=0&&(ca=!0,ye("\u606F\u304C\u5207\u308C\u305F\u2026"))):(eu+=i,eu>.5&&(Vt.stamina=Math.min(Vt.maxStamina,Vt.stamina+32*i)),ca&&Vt.stamina>=Vt.maxStamina*.3&&(ca=!1));let s=Pt("stamina-fill");return s.style.width=Vt.stamina/Vt.maxStamina*100+"%",s.classList.toggle("tired",ca),Pt("stamina-bar").classList.toggle("full",Vt.stamina>=Vt.maxStamina),n}var ru=()=>Vt.level*20,Ar=0,Mi=!1;function Dr(){Pt("lv").textContent=Vt.level,Pt("hp-now").textContent=Math.max(0,Math.ceil(Vt.hp)),Pt("hp-max").textContent=Vt.maxHp;let i=Math.max(0,Vt.hp)/Vt.maxHp;Pt("hp-fill").style.width=i*100+"%",Pt("hp-fill").classList.toggle("low",i<.3),Pt("exp-fill").style.width=Vt.exp/ru()*100+"%"}var wo=()=>qt.position.clone().setY(qt.position.y+5.5);function Vp(i){for(Vt.exp+=i,ri.add(wo(),`+${i} EXP`,"exp");Vt.exp>=ru();)Vt.exp-=ru(),Vt.level++,Vt.maxHp+=15,Vt.hp=Vt.maxHp,Vt.atk+=3,ri.add(wo().setY(qt.position.y+7),"LEVEL UP!","levelup"),ye(`\u30EC\u30D9\u30EB ${Vt.level} \u306B\u306A\u3063\u305F\uFF01 HP \u3068\u653B\u6483\u529B\u304C\u4E0A\u304C\u3063\u305F`),De.wave();Dr()}var Me=tp(),Pi=-1;function ZM(){let i=Me.held;return Bc[i?.moveset??"fists"]}function Hr(){let i=Pt("hotbar");if(!i.children.length)for(let e=0;e<Fc;e++){let n=document.createElement("button");n.className="slot",n.innerHTML=`<span class="slot-key">${e+1}</span><span class="slot-icon"></span><span class="slot-count"></span>`,n.addEventListener("pointerdown",s=>{s.preventDefault(),Wp(e)}),i.appendChild(n)}Me.slots.forEach((e,n)=>{let s=i.children[n];s.classList.toggle("selected",n===Me.selected),s.classList.toggle("empty",!e),s.classList.toggle("blood",!!e&&Qe[e.id].rarity==="blood"),s.title=e?KM(Qe[e.id]):"\u7A7A\u304D\uFF08\u7D20\u624B\uFF09",s.querySelector(".slot-icon").innerHTML=e?Qe[e.id].icon:"";let r=e&&Me.infinite&&Qe[e.id].kind!=="weapon"&&Qe[e.id].kind!=="material";s.querySelector(".slot-count").textContent=r?"\u221E":e&&e.count>1?e.count:""}),De.setHeld(Me.held?.held??null),De.setTrailColor(Me.held?.trail);let t=Me.held;De.setStance(t?t.stance??"item":"fists")}function KM(i){let t=`${i.name}\uFF1A${i.desc}`;i.passive&&(t+=`
\u7279\u6027\u3010${i.passive.name}\u3011${i.passive.desc}`);for(let e of i.skills??[])t+=`
\u6280\u3010${os[e].name}\u3011\uFF08${os[e].key}\uFF09${os[e].desc}`;return i.power&&(t+=`
\u653B\u6483\u529B \xD7${i.power}`),i.category==="wood"&&(t+=`
\u8010\u4E45\u529B ${i.durability}\u3000\u7279\u6027\u3010${i.trait.name}\u3011${i.trait.desc}`),t}var Sp;function Wp(i){if(ne.current||Pi>=0||ii||Mi)return;Me.selected=i===Me.selected?-1:i,ne.step=-1,cs=null,Hr();let t=Me.held,e=Pt("held-name");jp(t),e.textContent=t?t.skills?`${t.name}\u3000${t.skills.map(n=>`${os[n].key}\u300C${os[n].name}\u300D`).join(" ")}`:t.name:"\u7D20\u624B",e.classList.remove("hidden"),clearTimeout(Sp),Sp=setTimeout(()=>e.classList.add("hidden"),1500)}function JM(){let i=Me.held;if(i?.kind==="build"){sv();return}if(i?.kind==="food"){hv();return}if(i?.kind==="consumable"){if(ne.current||Pi>=0)return;if(i.heal&&Vt.hp>=Vt.maxHp){ye("HP \u306F\u6E80\u30BF\u30F3\u3067\u3059");return}De.drink()&&(Pi=0);return}QM()}function jM(i){if(Pi<0)return;let t=Pi;if(Pi+=i,t<.55&&Pi>=.55){let e=Me.held;if(e?.heal){let n=Math.min(e.heal,Vt.maxHp-Vt.hp);Vt.hp+=n,ri.add(wo(),`+${Math.round(n)}`,"heal"),Dr()}Me.consumeHeld(),Hr()}Pi>=.9&&(Pi=-1)}var ne={current:null,moves:Bc.sword,step:-1,time:0,hit:!1,queued:0,sinceEnd:99,speed:1},Cr=0,di=0;function QM(){if(Mi||ii)return;let i=ZM();if(ne.current){ne.queued=Math.min(ne.queued+1,ne.moves.length-1-ne.step);return}let t=ne.moves===i&&ne.sinceEnd<ip&&ne.step<i.length-1;ne.moves=i,Xp(t?ne.step+1:0)}function Xp(i){let t=lu();Math.hypot(t.x,t.z)>.3&&qt.setFacing(Math.atan2(t.x,t.z));let e=ne.moves[i],n=Me.held?.speed??1;if(!De.attack(e.anim,n))return;Object.assign(ne,{current:e,step:i,time:0,hit:!1,hitIdx:0,speed:n});let s=qt.facing;qt.knockback(Math.sin(s)*e.lunge,Math.cos(s)*e.lunge,e.hop),Ev(i)}function tv(i){if(!ne.current){ne.sinceEnd+=i;return}ne.time+=i*ne.speed;let t=ne.current.hitTimes??[ne.current.hitTime];for(;ne.hitIdx<t.length&&ne.time>=t[ne.hitIdx];)ne.hitIdx++,ev(ne.current);ne.time>=ne.current.duration&&(ne.current=null,ne.sinceEnd=0,ne.queued>0&&ne.step<ne.moves.length-1?(ne.queued--,Xp(ne.step+1)):ne.queued=0)}function qc(){let i=Me.held,t=i?.kind==="weapon"?i.power??1:1;return kn&&(t*=kn.atk),i?.passive?.id==="thirst"&&Vt.hp<Vt.maxHp/2&&(t*=1.3),t}function ev(i){let t=Me.held,e=t?.passive?.id==="heavy",n=Mn.attack(qt.position,qt.facing,{range:i.range*(e?1.1:1),arc:i.arc,damage:Vt.atk*i.power*qc(),knockback:i.knockback*(e?1.7:1),bleed:t?.passive?.id==="bleed"});if(n.length&&(Cr=i.hitStop*(e?1.5:1),di=Math.max(di,i.shake*(e?1.5:1)),t?.rarity==="blood"))for(let s of n)Ii.burst(s.pos,8,5);uu(n),iv(i),rv(i),kn?.waves&&t?.rarity==="blood"&&nv()}function nv(){let i=new F(Math.sin(qt.facing),0,Math.cos(qt.facing)),t=qt.position.clone().addScaledVector(i,1.5);t.y+=2.6;let e=new Set;Ii.crescent(t,i,{onMove(n){let s=Mn.hitArea(r=>!e.has(r)&&Math.hypot(r.pos.x-n.x,r.pos.z-n.z)<3+r.T.radius&&Math.abs(r.pos.y+2-n.y)<4,{damage:Vt.atk*.9*qc(),knockback:.8,from:n});for(let r of s)e.add(r.enemy),Ii.burst(r.pos,10,6);uu(s)}})}var Rp=new Set;function iv(i){let t=si.chopTrees(qt.position,qt.facing,{range:i.range,arc:i.arc,damage:Vt.atk*i.power*(Me.held?.chop??qc())});for(let e of t){if(Ii.chips(e.pos,e.felled?14:6),ri.add(e.pos.clone().setY(e.pos.y+2),String(e.damage),"chop"),!e.felled)continue;let n=Qe[e.woodId],s=Me.add(e.woodId,e.amount),r=e.amount-s;r>0&&ri.add(wo(),`+${r} ${n.name}`,"loot"),s>0&&!Js&&ye("\u6301\u3061\u7269\u304C\u3044\u3063\u3071\u3044\u3067\u3001\u6728\u6750\u3092\u6301\u3061\u304D\u308C\u306A\u3044\u2026"),Hr(),r>0&&!Rp.has(e.woodId)&&(Rp.add(e.woodId),ye(`${n.name}\u3092\u624B\u306B\u5165\u308C\u305F\uFF01\u3000\u7279\u6027\u3010${n.trait.name}\u3011`,3200))}t.length&&!Cr&&(di=Math.max(di,.08))}var ou=!1,Pr="woodYoung",Ir=0,Ap=null,ha=!1,cs=null,qp=()=>tn.yaw+Math.PI,ua=()=>["fence","wall"].includes(Me.held?.build);function Yp(){ou=!ou}function $p(){if(!ua()){Me.held?.build==="door"&&ye("\u9580\u6249\u306F 1 \u3064\u305A\u3064\u7F6E\u304D\u307E\u3059\u3002\u67F5\u3084\u58C1\u306E\u5217\u306E\u4E0A\u306B\u7F6E\u304F\u3068\u5165\u308C\u66FF\u308F\u308A\u307E\u3059");return}ha=!ha,cs=null,ye(ha?"\u56F2\u3046\u30E2\u30FC\u30C9\uFF1A1 \u3064\u76EE\u306E\u89D2\u3092\u9078\u3093\u3067\u3001\u7F6E\u304F\u30DC\u30BF\u30F3":"1 \u679A\u305A\u3064\u7F6E\u304F\u30E2\u30FC\u30C9")}function Zp(){let i=Js?$h:$h.filter(t=>Me.slots.some(e=>e?.id===t));if(!i.length){ye("\u6728\u6750\u3092\u6301\u3063\u3066\u3044\u306A\u3044");return}Pr=i[(i.indexOf(Pr)+1)%i.length],jp(Qe[Pr])}function sv(){if(Ir>0||ne.current||Mi)return;if(ha&&ua()&&!cs){cs=On.cornerAt(qt.position,qp()),ye("\u3082\u3046 1 \u3064\u306E\u89D2\uFF08\u5BFE\u89D2\uFF09\u3092\u9078\u3093\u3067\u3001\u7F6E\u304F\u30DC\u30BF\u30F3"),Ir=.2;return}let i=On.place(Pr);if(cs=null,!i.placed){i.reason&&ye(i.reason);return}Ir=.25,De.attack(3);for(let s of i.structures)Ii.chips(new F(s.x,s.y+.4,s.z),i.placed>4?3:8,Qe[Pr].plank);di=Math.max(di,i.placed>1?.25:.12),Me.consumeHeld(),Hr();let t=i.structures[0].maxHp,e=i.structures[0].type;if(e==="flag"){let s=Yc();ye(s?`\u62E0\u70B9\u3092\u4F5C\u3063\u305F\uFF01\u3000\u7267\u5834 ${s.count} \u30DE\u30B9\uFF08${s.area}\u33A1\uFF09\u30FB\u30DA\u30C3\u30C8 ${hu(s)} \u67A0`:"\u62E0\u70B9\u306E\u65D7\u3092\u7ACB\u3066\u305F\u3002\u3067\u3082\u67F5\u3067\u56F2\u308F\u308C\u3066\u3044\u306A\u3044\u2026\u3000\u56F2\u3044\u306E\u4E2D\u306B\u7ACB\u3066\u308B\u3068\u7267\u5834\u306B\u306A\u308B",3500);return}if(e==="trap"){ye("\u308F\u306A\u3092\u7F6E\u3044\u305F\u3002\u30AF\u30DE\u3092\u6012\u3089\u305B\u3066\u3001\u3053\u3053\u3078\u8A98\u3044\u3053\u3082\u3046",3e3);return}let n=i.placed>1?`${i.placed} \u679A\u3092\u5EFA\u3066\u305F\u3002`:"";i.env.weak.length?ye(`${n}${i.env.weak.join("\u3001")}\u2026\uFF08\u8010\u4E45\u529B ${t}\uFF09`,2800):i.env.strong.length?ye(`${n}${i.env.strong.join("\u3001")}\uFF08\u8010\u4E45\u529B ${t}\uFF09`,2800):n&&ye(`${n}\uFF081 \u679A\u306E\u8010\u4E45\u529B ${t}\uFF09`)}function rv(i){let t=Me.held,e=On.hit(qt.position,qt.facing,{range:i.range,arc:i.arc,damage:Vt.atk*i.power*(t?.breaker??.35)});for(let n of e){let s=Qe[n.woodId].plank;Ii.chips(n.pos,n.destroyed?22:7,s),ri.add(n.pos.clone().setY(n.pos.y+1),String(n.damage),"chop"),ov(n.name,n.hp,n.maxHp),n.destroyed&&(di=Math.max(di,.35),ye(`${n.name}\u3092\u58CA\u3057\u305F`))}e.length&&!t?.breaker&&ye("\u65A7\u306E\u307B\u3046\u304C\u3001\u65E9\u304F\u58CA\u305B\u308B",1500)}var Cp;function ov(i,t,e){let n=Pt("target-bar");n.querySelector("b").textContent=i,n.querySelector("span").textContent=`${t} / ${e}`,n.querySelector("i").style.width=t/e*100+"%",n.classList.remove("hidden"),clearTimeout(Cp),Cp=setTimeout(()=>n.classList.add("hidden"),1800)}function av(){let i=qt.position;return new ae(new F(i.x-.8,i.y,i.z-.8),new F(i.x+.8,i.y+4.5,i.z+.8))}function Kp(){if(Ei!=="ingame"||Mi)return;let i=On.nearestDoor(qt.position);i&&(On.toggleDoor(i,qt.position,av())||ye("\u6249\u306B\u631F\u307E\u3063\u3066\u3057\u307E\u3046"))}function cv(i){Ir=Math.max(0,Ir-i);let t=Me.held,e=Ei==="ingame"&&t?.kind==="build"&&!Mi?t.build:null,n=ha&&ua();Ap=On.preview(e,qt.position,qp(),ou,Pr,n?cs:null);let s=Pt("build-hud");if(s.classList.toggle("hidden",!e),Pt("build-btns").classList.toggle("hidden",!e),Pt("btn-enclose").classList.toggle("on",n),e){let a=Qe[Pr],c=Ap,l="";n&&!cs?l='<em class="good">\u56F2\u3046\u30E2\u30FC\u30C9\uFF1A1 \u3064\u76EE\u306E\u89D2\u3092\u9078\u3076</em>':n&&cs?l=c.count?`<em class="${c.ok===c.count?"good":"weak"}">${c.w}\xD7${c.d} \u30DE\u30B9\uFF08${c.w*4}m \xD7 ${c.d*4}m\uFF09\u30FB${c.ok} \u679A${c.ok<c.count?`\uFF08${c.count-c.ok} \u679A\u306F\u7F6E\u3051\u306A\u3044\uFF1A${c.reason}\uFF09`:""}</em>`:'<em class="weak">\u3082\u3046 1 \u3064\u306E\u89D2\u3092\u9078\u3076\uFF08Esc \u3067\u3084\u3081\u308B\uFF09</em>':c.ok<c.count?l=`<em class="ng">${c.reason}</em>`:c.env.weak.length?l=`<em class="weak">${c.env.weak[0]}</em>`:c.env.strong.length&&(l=`<em class="good">${c.env.strong[0]}</em>`),c.plans[0]?.replace?.length&&(l+=`<em class="good">\u67F5\u30FB\u58C1 ${c.plans[0].replace.length} \u679A\u3068\u5165\u308C\u66FF\u3048\u308B</em>`);let h=Lr?`\u2694 \u7F6E\u304F \u30FB \u27F3 \u56DE\u8EE2 \u30FB \u6728 \u6728\u6750${ua()?" \u30FB \u56F2 \u56F2\u3046":""}`:`\u30AF\u30EA\u30C3\u30AF \u7F6E\u304F \u30FB R \u56DE\u8EE2 \u30FB T \u6728\u6750${ua()?" \u30FB V \u56F2\u3046":""}`,u=`${a.icon}<div><b>${t.name}</b>\u3000${a.name}\u3000\u8010\u4E45 ${c.hp}<small>${h}</small>${l}</div>`;s.dataset.html!==u&&(s.innerHTML=u,s.dataset.html=u)}let r=Ei==="ingame"?On.nearestDoor(qt.position):null,o=Pt("btn-use");o.classList.toggle("hidden",!r),r&&(o.textContent=`${Lr?"":"G "}${r.open?"\u9589\u3081\u308B":"\u958B\u3051\u308B"}`)}var Pp=null,Ip=-1;function Yc(){let i=On?.base;return i?(Ip!==On.version&&(Pp=On.penAt(i.x,i.z),Ip=On.version),Pp):null}var hu=i=>i?Math.floor(i.area/40):0;function lv(){let i=On.base;i?(qt.teleport(i.x+3,i.z+3),ye("\u62E0\u70B9\u306B\u623B\u308A\u307E\u3057\u305F")):(qt.respawn(Math.PI),tn.yaw=0,ye("\u661F\u306E\u796D\u58C7\u306B\u623B\u308A\u307E\u3057\u305F\uFF08\u62E0\u70B9\u306E\u65D7\u3092\u7ACB\u3066\u308B\u3068\u3001\u305D\u3053\u306B\u623B\u308C\u308B\uFF09"))}function hv(){if(ne.current||Mi||Ir>0)return;Ir=.4;let i=Mn.feed(qt.position,On),t=i.bear;if(i.result==="tamed"){Me.consumeHeld(),Hr(),De.wave();let e=new F(t.pos.x,t.pos.y+t.K.height+1,t.pos.z);ri.add(e,"\u2665 \u4EF2\u9593\u306B\u306A\u3063\u305F\uFF01","levelup"),Ii.chips(e,16,16748464);let n=t.parent&&!t.parent.wild?`\uFF08\u89AA\u306F ${t.parent.name}\uFF09`:"";ye(`${t.name}\uFF08\u30B7\u30ED\u30AF\u30DE\u306E${t.K.label}\uFF09\u304C\u4EF2\u9593\u306B\u306A\u3063\u305F\uFF01${n}\u3000P \u30AD\u30FC\u3067\u30DA\u30C3\u30C8\u306E\u4E00\u89A7`,4e3),$c()}else i.result==="fed"?(Me.consumeHeld(),Hr(),ri.add(new F(t.pos.x,t.pos.y+t.K.height+1,t.pos.z),"\u2665","heal")):i.result==="notTrapped"?ye("\u308F\u306A\u306B\u9589\u3058\u3053\u3081\u3066\u304B\u3089\u3001\u751F\u8089\u3092\u3042\u3052\u3088\u3046"):ye("\u8FD1\u304F\u306B\u3001\u751F\u8089\u3092\u3042\u3052\u308B\u76F8\u624B\u304C\u3044\u306A\u3044")}var nu=0;function Jp(){Ei==="ingame"&&(Pt("pet-panel").classList.toggle("hidden"),$c())}function uv(i){let t=Mn.pets.length;Pt("btn-pets").textContent=`\u{1F43E} ${t}`,!Pt("pet-panel").classList.contains("hidden")&&(nu-=i,nu<=0&&(nu=.5,$c()))}function $c(){let i=Pt("pet-panel");if(i.classList.contains("hidden"))return;let t=Yc(),e=hu(t),n=Mn.usedSlots(),s=Mn.pets,r=On.base?t?`\u7267\u5834 ${t.count} \u30DE\u30B9\uFF08${t.area}\u33A1\uFF09\u30FB\u67A0 ${n} / ${e}\u3000<small>\u89AA\u306F 2 \u67A0\u3001\u5B50\u306F 1 \u67A0</small>`:"\u62E0\u70B9\u306E\u65D7\u306E\u307E\u308F\u308A\u304C\u3001\u67F5\u3067\u56F2\u308F\u308C\u3066\u3044\u306A\u3044":"\u62E0\u70B9\u304C\u307E\u3060\u306A\u3044\u3002\u67F5\u3067\u56F2\u3063\u305F\u4E2D\u306B\u300C\u62E0\u70B9\u306E\u65D7\u300D\u3092\u7ACB\u3066\u3088\u3046",o=s.map((a,c)=>{let l=Math.round(a.hp),h=a.kind==="cub"?a.parent?`\u89AA\uFF1A${a.parent.wild?"\u91CE\u751F":a.parent.name}`:"\u89AA\uFF1A\u3044\u306A\u3044":(()=>{let d=Mn.list.filter(g=>g.parent===a);return d.length?`\u5B50\uFF1A${d.map(g=>g.wild?"\u91CE\u751F":g.name).join("\u30FB")}`:""})(),u=a.mode==="rest",f=t&&e-n>=a.K.slots;return`<div class="pet-row">
      <div class="pet-face ${a.kind}">\u{1F43B}\u200D\u2744\uFE0F</div>
      <div class="pet-info"><b>${a.name}</b> <span class="pet-tag ${a.kind}">${a.K.label}</span> <small>${h}</small>
        <div class="pet-hp"><div style="width:${l/a.K.hp*100}%"></div></div>
        <small>HP ${l} / ${a.K.hp}\u30FB${u?a.state==="sleep"?"\u7267\u5834\u3067\u5BDD\u3066\u3044\u308B":"\u7267\u5834\u3067\u4F11\u61A9\u4E2D":"\u3064\u3044\u3066\u304D\u3066\u3044\u308B"}</small></div>
      ${u?`<button class="btn btn-small" data-pet="${c}" data-act="follow">\u9023\u308C\u3066\u884C\u304F</button>`:`<button class="btn btn-small" data-pet="${c}" data-act="rest" ${f?"":"disabled"}>\u4F11\u307E\u305B\u308B</button>`}
    </div>`}).join("");i.querySelector(".pet-base").innerHTML=r,i.querySelector(".pet-list").innerHTML=o||'<p class="pet-empty">\u307E\u3060\u30DA\u30C3\u30C8\u304C\u3044\u306A\u3044\u3002\u96EA\u539F\u306E\u30B7\u30ED\u30AF\u30DE\u3092\u4EF2\u9593\u306B\u3057\u3088\u3046</p>'}var Lp;function jp(i){let t=Pt("item-card");if(!i||i.category!=="wood"){t.classList.add("hidden");return}let e=Object.keys(ss).filter(s=>!i.resist[s]),n=Object.keys(ss).filter(s=>i.resist[s]);t.innerHTML=`
    <div class="card-head">${i.icon}<div><b>${i.name}</b><small>${i.desc}</small></div></div>
    <div class="card-row"><span>\u8010\u4E45\u529B</span><div class="card-bar"><div style="width:${Math.min(100,i.durability/2)}%"></div></div><b>${i.durability}</b></div>
    <div class="card-row trait"><span>\u7279\u6027</span><p><b>${i.trait.name}</b>\uFF1A${i.trait.desc}</p></div>
    ${n.length?`<div class="card-row good"><span>\u5F37\u3044</span><p>${n.map(s=>`${ss[s].name}\uFF08${ss[s].where}\u3067\u3082\u5E73\u6C17\uFF09`).join("\u3001")}</p></div>`:""}
    ${e.length?`<div class="card-row bad"><span>\u5F31\u70B9</span><p>${e.map(s=>`${ss[s].name}\uFF1A${ss[s].effect}`).join("<br>")}</p></div>`:""}
    <div class="card-note">\u203B \u62E0\u70B9\u3092\u5EFA\u3066\u305F\u5834\u6240\u306E\u74B0\u5883\u3067\u3001\u7279\u6027\u3068\u5F31\u70B9\u304C\u52B9\u304F\u3088\u3046\u306B\u306A\u308A\u307E\u3059</div>`,t.classList.remove("hidden"),clearTimeout(Lp),Lp=setTimeout(()=>t.classList.add("hidden"),6e3)}function uu(i){let t=0;for(let s of i)t+=s.damage,ri.add(s.pos,String(s.damage),s.damage>Vt.atk*1.6?"crit":""),s.killed&&Vp(s.exp);let e=Me.held,n=(e?.passive?.id==="lifesteal"?e.passive.rate:0)+(kn?.lifesteal??0);if(n>0&&t>0&&Vt.hp<Vt.maxHp){let s=Math.max(1,Math.round(t*n));Vt.hp=Math.min(Vt.maxHp,Vt.hp+s),ri.add(wo(),`+${s}`,"heal"),Dr()}}function dv(i){ri.add(i.pos,String(i.damage),"bleed"),i.killed&&Vp(i.exp)}var ii=null,vo={},da=0,kn=null,au=0,cu={get player(){return qt},get character(){return De},get enemies(){return Mn},get fx(){return Ii},stats:Vt,power:i=>Vt.atk*i*qc(),applyHits:i=>uu(i),invuln:i=>{da=Math.max(da,i)},shake:i=>{di=Math.max(di,i)},hitStop:i=>{Cr=Math.max(Cr,i)},screenFlash:i=>fv(i),fovKick:i=>{au=i},toast:i=>ye(i),popup:(i,t,e)=>ri.add(i,t,e),startBuff:i=>gv(i)};function fv(i){let t=Pt("blood-flash");t.style.transition="none",t.style.opacity=i,requestAnimationFrame(()=>{t.style.transition="opacity .5s ease",t.style.opacity=0})}function pv(i){let e=Me.held?.skills?.[i];if(!e||Mi||ii||ne.current||Pi>=0)return;let n=os[e],s=Pt("skills").children[i];if((vo[e]??0)>0){s?.classList.remove("denied"),s?.offsetWidth,s?.classList.add("denied");return}if(n.canUse&&!n.canUse(cu))return;let r=lu();Math.hypot(r.x,r.z)>.3&&qt.setFacing(Math.atan2(r.x,r.z)),De.attack(n.anim),ii={def:n,t:0,s:{}},n.start(cu,ii.s),vo[e]=n.cooldown,ne.step=-1,Dr(),xv(n.name)}function mv(i,t){for(let n of Object.keys(vo))vo[n]=Math.max(0,vo[n]-i);da=Math.max(0,da-i),ii&&(ii.t+=i,ii.def.update(cu,ii.s,ii.t,i),ii.t>=ii.def.duration&&(ii=null)),kn&&(kn.time-=i,kn.time<=0&&du()),au*=Math.exp(-t*5);let e=60+au;Math.abs(In.fov-e)>.01&&(In.fov=e,In.updateProjectionMatrix())}function gv(i){du(),kn={...i,aura:Ii.aura(De.object)},De.setGlow(2.4),Pt("blood-vignette").classList.add("on"),ye(`${i.name}\uFF1A\u529B\u304C\u6EA2\u308C\u51FA\u3059\u2026\uFF01\u3000\u5263\u3092\u632F\u308B\u3068\u8840\u306E\u65AC\u6483\u304C\u98DB\u3076`)}function du(){kn&&(kn.aura.stop(),kn=null,De.setGlow(1),Pt("blood-vignette").classList.remove("on"))}var Hp;function xv(i){let t=Pt("skill-name");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(Hp),Hp=setTimeout(()=>t.classList.add("hidden"),1200)}function yv(){let t=Me.held?.skills??[],e=Pt("skills");e.classList.toggle("hidden",!t.length),Pt("skill-btns").classList.toggle("hidden",!t.length),e.dataset.set!==t.join()&&(e.innerHTML=t.map(s=>`<div class="skill"><span class="skill-key">${os[s].key}</span><span class="skill-cd"></span><span class="skill-label">${os[s].name}</span></div>`).join(""),e.dataset.set=t.join()),t.forEach((s,r)=>{let o=os[s],a=vo[s]??0,c=e.children[r];c.querySelector(".skill-cd").textContent=a>0?Math.ceil(a):"",c.style.setProperty("--cd",a/o.cooldown),c.classList.toggle("ready",a<=0);let l=Pt("skill-btns").children[r];l&&l.style.setProperty("--cd",a/o.cooldown)});let n=Pt("buff");n.classList.toggle("hidden",!kn),kn&&(n.textContent=`${kn.name}\u3000${kn.time.toFixed(1)}\u79D2`)}var iu=0,Dp=new F;function _v(i){Me.held?.rarity==="blood"&&(iu-=i,!(iu>0)&&(iu=kn?.08:.4,De.bladeTip(Dp)&&Ii.burst(Dp,1,kn?2:.4)))}var zp;function Ev(i){let t=Pt("combo"),e=ne.moves.map((n,s)=>`${"\u2460\u2461\u2462\u2463"[s]} ${n.name}`);t.dataset.set!==e.join()&&(t.innerHTML=e.map(n=>`<span>${n}</span>`).join(""),t.dataset.set=e.join()),t.classList.remove("hidden"),t.querySelectorAll("span").forEach((n,s)=>{n.classList.toggle("done",s<i),n.classList.toggle("now",s===i)}),clearTimeout(zp),zp=setTimeout(()=>t.classList.add("hidden"),1400)}function Mv(i,t,e){if(Ar>0||da>0||Mi)return;Vt.hp-=i,Ar=1,De.hurt(),ri.add(wo(),`-${i}`,"hurt");let n=Pt("hurt-vignette");n.classList.add("on"),requestAnimationFrame(()=>n.classList.remove("on"));let s=qt.position.x-t,r=qt.position.z-e,o=Math.hypot(s,r)||1;qt.knockback(s/o*14,r/o*14,14),Dr(),Vt.hp<=0&&vv()}function vv(){Mi=!0,ne.current=null,ne.queued=0,Pi=-1,ii=null,du(),De.setFainted(!0),Mn.calmDown(),Pt("faint").classList.remove("hidden"),setTimeout(()=>{Pt("faint").classList.add("hidden"),Vt.hp=Vt.maxHp,Mi=!1,De.setFainted(!1),qt.respawn(Math.PI),tn.yaw=0,Ar=2,Dr()},2800)}var su=!1;function wv(){qt.grounded&&qt.groundKind==="goal"&&!su&&(su=!0,De.wave(),ye("\u5854\u306E\u3066\u3063\u307A\u3093\u306E\u30AF\u30EA\u30B9\u30BF\u30EB\u306B\u305F\u3069\u308A\u7740\u3044\u305F\uFF01",3500)),qt.groundKind==="spawn"&&(su=!1)}var Vc=null;function bv(){let i=qt.position,t=null;for(let e of oa)Math.hypot(i.x-e.x,i.z-e.z)<e.r+4&&(t=e.name);if(!t&&qt.groundKind==="bridge"){let e=1/0;for(let n of si.bridges){let s=(n.from[0]+n.to[0])/2,r=(n.from[1]+n.to[1])/2,o=Math.hypot(i.x-s,i.z-r);o<e&&(e=o,t=n.name)}}t||(t=si.islandAt(i.x,i.z)?.name??Vc),t&&t!==Vc&&Tv(t),Vc=t}var Up;function Tv(i){let t=Pt("area-banner");t.textContent=i,t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show"),clearTimeout(Up),Up=setTimeout(()=>t.classList.add("hidden"),3200)}function Sv(){Ei="ingame",la=0,qt.respawn(Math.PI),tn.yaw=0,tn.pitch=.35,tn.dist=18,Cs.enabled=!0,Vt.hp=Vt.maxHp,Dr(),Pt("menu").classList.add("hidden"),Pt("ingame").classList.remove("hidden"),Yi.resize(),Vc=null}function Qp(){Ei="menu",la=0,Cs.enabled=!1,Yi.expanded=!1,Mn.calmDown(),ri.clear(),qt.respawn(),Pt("ingame").classList.add("hidden"),Pt("menu").classList.remove("hidden")}var Np;function ye(i,t=2200){let e=Pt("toast-msg");e.textContent=i,e.classList.remove("hidden"),clearTimeout(Np),Np=setTimeout(()=>e.classList.add("hidden"),t)}Pt("btn-play").addEventListener("click",Sv);Pt("btn-use").addEventListener("pointerdown",i=>{i.preventDefault(),Kp()});Pt("btn-rotate").addEventListener("pointerdown",i=>{i.preventDefault(),Yp()});Pt("btn-wood").addEventListener("pointerdown",i=>{i.preventDefault(),Zp()});Pt("btn-enclose").addEventListener("pointerdown",i=>{i.preventDefault(),$p()});Pt("btn-pets").addEventListener("click",Jp);document.querySelector("[data-close-pets]").addEventListener("click",()=>Pt("pet-panel").classList.add("hidden"));Pt("pet-panel").addEventListener("click",i=>{let t=i.target.closest("button[data-act]");if(!t)return;let e=Mn.pets[Number(t.dataset.pet)];if(e){if(t.dataset.act==="rest"){let n=Yc();if(!n){ye("\u7267\u5834\u304C\u306A\u3044");return}if(hu(n)-Mn.usedSlots()<e.K.slots){ye("\u7267\u5834\u304C\u305B\u307E\u304F\u3066\u5165\u308C\u306A\u3044\u2026\u3000\u67F5\u3092\u5E83\u3052\u3088\u3046");return}Mn.rest(e,n),ye(`${e.name}\u3092\u7267\u5834\u3067\u4F11\u307E\u305B\u305F`)}else Mn.follow(e,qt.position),ye(`${e.name}\u3092\u9023\u308C\u3066\u884C\u304F`);$c()}});Pt("btn-back").addEventListener("click",Qp);Pt("minimap").addEventListener("click",()=>{Yi.expanded=!Yi.expanded});Pt("btn-avatar").addEventListener("click",()=>{De.wave(),ye("\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u7DE8\u96C6\u306F\u6E96\u5099\u4E2D\u3067\u3059")});var Op=document.documentElement;Op.requestFullscreen&&Lr&&(Pt("btn-fullscreen").classList.remove("hidden"),Pt("btn-fullscreen").addEventListener("click",async()=>{try{await Op.requestFullscreen({navigationUI:"hide"}),await screen.orientation?.lock?.("landscape").catch(()=>{})}catch{}}));var tm=window.matchMedia("(orientation: portrait)"),em=()=>Pt("rotate-tip").classList.toggle("hidden",!(Lr&&tm.matches));tm.addEventListener?.("change",em);em();document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault());Pt("btn-settings").addEventListener("click",()=>Pt("settings-panel").classList.remove("hidden"));document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",()=>i.closest(".popup").classList.add("hidden")));Pt("opt-shadows").addEventListener("change",i=>{si.sun.castShadow=i.target.checked});Pt("opt-orbit").addEventListener("change",i=>{Fp=i.target.checked});Pt("opt-stepped").addEventListener("change",i=>{De.stepped=i.target.checked});window.addEventListener("resize",()=>{In.aspect=window.innerWidth/window.innerHeight,In.updateProjectionMatrix(),as.setSize(window.innerWidth,window.innerHeight),Yi?.resize()});var Rv=new Tc,Av=Pt("coords");function nm(){requestAnimationFrame(nm);let i=Math.min(Rv.getDelta(),.05);if(!si||!qt)return;let t=Cr>0?i*.05:i;Cr=Math.max(0,Cr-i);let e=Ei==="ingame"&&!Mi;if(e){Tp(),Cs.consumeAttack()&&JM();let n=Cs.consumeSkill();n>=0&&pv(n);let s=De.attacking||Pi>=0||ii?{x:0,z:0}:lu(),r=Math.hypot(s.x,s.z)>.1,o=$M(t,Cs.run(),r);qt.update(t,{...s,jump:Cs.jump()&&!De.attacking,run:o}),wv(),bv()}else Ei==="ingame"&&Tp(),Cs.consumeAttack(),qt.update(t,{x:0,z:0,jump:!1});if(tv(t),jM(t),mv(t,i),_v(t),Ii.update(t),Ar=Math.max(0,Ar-t),De.object.visible=!(Ar>0&&!Mi&&Math.floor(Ar*12)%2===0),Mn.update(t,{playerPos:qt.position,playerFacing:qt.facing,playerActive:e,playerSwimming:qt.swimming,onHitPlayer:Mv,onBleed:dv,onEvent:n=>ye(n,3e3),building:On,pen:Yc(),forceSpawn:Js}),si.update(t,qt.position,In.position),On.update(t),cv(t),YM(i),di>.001&&(In.position.x+=(Math.random()-.5)*di,In.position.y+=(Math.random()-.5)*di,di*=Math.exp(-i*14)),as.render(nr,In),Mn.updateLabels(In),ri.update(t,In),Ei==="ingame"&&yv(),Ei==="ingame"&&uv(i),Ei==="ingame"){Yi.draw(qt.position,qt.facing,tn.yaw,Mn.alive());let n=qt.position;Av.textContent=`X ${n.x.toFixed(0)}  Y ${n.y.toFixed(0)}  Z ${n.z.toFixed(0)}`}}window.addEventListener("error",i=>{let t=Pt("loading-status");t&&(t.textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message)});GM().catch(i=>{Pt("loading-status").textContent="\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: "+i.message,console.error(i)});nm();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
