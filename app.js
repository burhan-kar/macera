var Ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wu=0,Dc=1,$u=2;var Zr=1,Po=2,Zs=3,Bi=0,un=1,jn=2,Qn=0,Ks=1,Nc=2,Uc=3,Bc=4,Xu=5;var os=100,qu=101,Yu=102,Zu=103,Ku=104,Ju=200,ju=201,Qu=202,td=203,Oc=204,kc=205,ed=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,Va=0,Wa=1,$a=2,Fs=3,Xa=4,qa=5,Ya=6,Za=7,zc=0,hd=1,ud=2,kn=0,Hc=1,Gc=2,Vc=3,Wc=4,$c=5,Xc=6,qc=7;var Yc=300,Oi=301,ls=302,Io=303,Lo=304,Kr=306,Ka=1e3,Zn=1001,Ja=1002,ke=1003,dd=1004;var Jr=1005;var Qe=1006,Fo=1007;var ki=1008;var pn=1009,Zc=1010,Kc=1011,Js=1012,Do=1013,zn=1014,Hn=1015,Gn=1016,No=1017,Uo=1018,js=1020,Jc=35902,jc=35899,Qc=1021,th=1022,Rn=1023,Kn=1026,zi=1027,eh=1028,Bo=1029,Hi=1030,Oo=1031;var ko=1033,jr=33776,Qr=33777,ta=33778,ea=33779,zo=35840,Ho=35841,Go=35842,Vo=35843,Wo=36196,$o=37492,Xo=37496,qo=37488,Yo=37489,na=37490,Zo=37491,Ko=37808,Jo=37809,jo=37810,Qo=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,hl=36492,ul=36494,dl=36495,fl=36283,pl=36284,ia=36285,ml=36286;var yr=2300,ja=2301,Ha=2302,Sc=2303,bc=2400,Ec=2401,wc=2402;var fd=3200;var gl=0,pd=1,mi="",je="srgb",xr="srgb-linear",vr="linear",Me="srgb";var Ga=7680;var md=519,gd=512,_d=513,yd=514,_l=515,xd=516,vd=517,yl=518,Md=519,Sd=35044;var nh="300 es",Bn=2e3,Ds=2001;function vp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Mp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bd(){let n=Mr("canvas");return n.style.display="block",n}var du={},Ns=null;function ih(...n){let t="THREE."+n.shift();Ns?Ns("log",t,...n):console.log(t,...n)}function Ed(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=Ed(n);let t="THREE."+n.shift();if(Ns)Ns("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function qt(...n){n=Ed(n);let t="THREE."+n.shift();if(Ns)Ns("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function es(...n){let t=n.join(" ");t in du||(du[t]=!0,Wt(...n))}function wd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Td={[Va]:Wa,[$a]:Ya,[Xa]:Za,[Fs]:qa,[Wa]:Va,[Ya]:$a,[Za]:Xa,[qa]:Fs},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,pr=Math.PI/180,Us=180/Math.PI;function cs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function sh(n,t){return(n%t+t)%t}function Sp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function bp(n,t,e){return n!==t?(e-n)/(t-n):0}function mr(n,t,e){return(1-e)*n+e*t}function Ep(n,t,e,i){return mr(n,t,1-Math.exp(-e*i))}function wp(n,t=1){return t-Math.abs(sh(n,t*2)-t)}function Tp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ap(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Cp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Rp(n,t){return n+Math.random()*(t-n)}function Pp(n){return n*(.5-Math.random())}function Ip(n){n!==void 0&&(fu=n);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lp(n){return n*pr}function Fp(n){return n*Us}function Dp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Np(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Up(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bp(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Is(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sa={DEG2RAD:pr,RAD2DEG:Us,generateUUID:cs,clamp:te,euclideanModulo:sh,mapLinear:Sp,inverseLerp:bp,lerp:mr,damp:Ep,pingpong:wp,smoothstep:Tp,smootherstep:Ap,randInt:Cp,randFloat:Rp,randFloatSpread:Pp,seededRandom:Ip,degToRad:Lp,radToDeg:Fp,isPowerOfTwo:Dp,ceilPowerOfTwo:Np,floorPowerOfTwo:Up,setQuaternionFromProperEuler:Bp,normalize:cn,denormalize:Is},hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var pt=hh,vn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jl.copy(this).projectOnVector(t),this.sub(Jl)}reflect(t){return this.sub(Jl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var P=uh,Jl=new P,pu=new vn,dh=class dh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],M=s[0],m=s[3],p=s[6],v=s[1],E=s[4],_=s[7],S=s[2],w=s[5],A=s[8];return r[0]=a*M+o*v+l*S,r[3]=a*m+o*E+l*w,r[6]=a*p+o*_+l*A,r[1]=c*M+h*v+d*S,r[4]=c*m+h*E+d*w,r[7]=c*p+h*_+d*A,r[2]=u*M+f*v+g*S,r[5]=u*m+f*E+g*w,r[8]=u*p+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jl.makeScale(t,e)),this}rotate(t){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jl.makeRotation(-t)),this}translate(t,e){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;var Zt=dh,jl=new Zt,mu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){let n={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xr]:{primaries:t,whitePoint:i,transfer:vr,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:i,transfer:Me,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),n}var he=Op();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ys,Qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ys===void 0&&(ys=Mr("canvas")),ys.width=t.width,ys.height=t.height;let s=ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ys}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Mr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ui(e[i]/255)*255):e[i]=ui(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kp=0,Bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ql(s[a].image)):r.push(Ql(s[a]))}else r=Ql(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var zp=0,tc=new P,hn=class n extends On{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=Qe,a=ki,o=Rn,l=pn,c=n.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=cs(),this.name="",this.source=new Bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Yc;hn.DEFAULT_ANISOTROPY=1;var fh=class fh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(f+1)/2,S=(p+1)/2,w=(h+u)/4,A=(d+M)/4,y=(g+m)/4;return E>_&&E>S?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=A/i):_>S?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=w/s,r=y/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=A/r,s=y/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-M)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;var Fe=fh,to=class extends On{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new hn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends to{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Sr=class extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eo=class extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ro=class Ro{constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,M,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ro().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hp,t,Gp)}lookAt(t,e,i){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Si.crossVectors(i,_n),Si.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Si.crossVectors(i,_n)),Si.normalize(),ya.crossVectors(_n,Si),s[0]=Si.x,s[4]=ya.x,s[8]=_n.x,s[1]=Si.y,s[5]=ya.y,s[9]=_n.y,s[2]=Si.z,s[6]=ya.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],M=i[6],m=i[10],p=i[14],v=i[3],E=i[7],_=i[11],S=i[15],w=s[0],A=s[4],y=s[8],T=s[12],R=s[1],F=s[5],B=s[9],z=s[13],L=s[2],k=s[6],K=s[10],J=s[14],ht=s[3],j=s[7],it=s[11],at=s[15];return r[0]=a*w+o*R+l*L+c*ht,r[4]=a*A+o*F+l*k+c*j,r[8]=a*y+o*B+l*K+c*it,r[12]=a*T+o*z+l*J+c*at,r[1]=h*w+d*R+u*L+f*ht,r[5]=h*A+d*F+u*k+f*j,r[9]=h*y+d*B+u*K+f*it,r[13]=h*T+d*z+u*J+f*at,r[2]=g*w+M*R+m*L+p*ht,r[6]=g*A+M*F+m*k+p*j,r[10]=g*y+M*B+m*K+p*it,r[14]=g*T+M*z+m*J+p*at,r[3]=v*w+E*R+_*L+S*ht,r[7]=v*A+E*F+_*k+S*j,r[11]=v*y+E*B+_*K+S*it,r[15]=v*T+E*z+_*J+S*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],v=l*f-c*u,E=o*f-c*d,_=o*u-l*d,S=a*f-c*h,w=a*u-l*h,A=a*d-o*h;return e*(M*v-m*E+p*_)-i*(g*v-m*S+p*w)+s*(g*E-M*S+p*A)-r*(g*_-M*w+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],v=e*o-i*a,E=e*l-s*a,_=e*c-r*a,S=i*l-s*o,w=i*c-r*o,A=s*c-r*l,y=h*M-d*g,T=h*m-u*g,R=h*p-f*g,F=d*m-u*M,B=d*p-f*M,z=u*p-f*m,L=v*z-E*B+_*F+S*R-w*T+A*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return t[0]=(o*z-l*B+c*F)*k,t[1]=(s*B-i*z-r*F)*k,t[2]=(M*A-m*w+p*S)*k,t[3]=(u*w-d*A-f*S)*k,t[4]=(l*R-a*z-c*T)*k,t[5]=(e*z-s*R+r*T)*k,t[6]=(m*_-g*A-p*E)*k,t[7]=(h*A-u*_+f*E)*k,t[8]=(a*B-o*R+c*y)*k,t[9]=(i*R-e*B-r*y)*k,t[10]=(g*w-M*_+p*v)*k,t[11]=(d*_-h*w-f*v)*k,t[12]=(o*T-a*F-l*y)*k,t[13]=(e*F-i*T+s*y)*k,t[14]=(M*E-g*S-m*v)*k,t[15]=(h*S-d*E+u*v)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,M=a*h,m=a*d,p=o*d,v=l*c,E=l*h,_=l*d,S=i.x,w=i.y,A=i.z;return s[0]=(1-(M+p))*S,s[1]=(f+_)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(u+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+E)*A,s[9]=(m-v)*A,s[10]=(1-(u+M))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let c=1/a,h=1/o,d=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Bn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Bn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ds)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Bn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Bn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ds)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ro.prototype.isMatrix4=!0;var Pe=Ro,xs=new P,Dn=new Pe,Hp=new P(0,0,0),Gp=new P(1,1,1),Si=new P,ya=new P,_n=new P,_u=new Pe,yu=new vn,di=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yu.setFromEuler(this),this.setFromQuaternion(yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vp=0,xu=new P,vs=new vn,ai=new Pe,xa=new P,lr=new P,Wp=new P,$p=new vn,vu=new P(1,0,0),Mu=new P(0,1,0),Su=new P(0,0,1),bu={type:"added"},Xp={type:"removed"},Ms={type:"childadded",child:null},ec={type:"childremoved",child:null},tn=class n extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new di,i=new vn,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Zt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xa.copy(t):xa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(lr,xa,this.up):ai.lookAt(xa,lr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ai),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new P(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ee=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qp={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ee;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},va={h:0,s:0,l:0};function nc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var se=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=sh(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=nc(a,r,t+1/3),this.g=nc(a,r,t),this.b=nc(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let i=Ad[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return he.workingToColorSpace(rn.copy(this),t),Math.round(te(rn.r*255,0,255))*65536+Math.round(te(rn.g*255,0,255))*256+Math.round(te(rn.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(rn.copy(this),e);let i=rn.r,s=rn.g,r=rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=je){he.workingToColorSpace(rn.copy(this),t);let e=rn.r,i=rn.g,s=rn.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(va);let i=mr(bi.h,va.h,e),s=mr(bi.s,va.s,e),r=mr(bi.l,va.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new se;se.NAMES=Ad;var br=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new se(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Er=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new P,oi=new P,ic=new P,li=new P,Ss=new P,bs=new P,Eu=new P,sc=new P,rc=new P,ac=new P,oc=new Fe,lc=new Fe,cc=new Fe,Ai=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Nn.subVectors(s,e),oi.subVectors(i,e),ic.subVectors(t,e);let a=Nn.dot(Nn),o=Nn.dot(oi),l=Nn.dot(ic),c=oi.dot(oi),h=oi.dot(ic),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(t,e),lc.fromBufferAttribute(t,i),cc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(lc,r.y),a.addScaledVector(cc,r.z),a}static isFrontFacing(t,e,i,s){return Nn.subVectors(i,e),oi.subVectors(t,e),Nn.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Nn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,i),bs.subVectors(r,i),sc.subVectors(t,i);let l=Ss.dot(sc),c=bs.dot(sc);if(l<=0&&c<=0)return e.copy(i);rc.subVectors(t,s);let h=Ss.dot(rc),d=bs.dot(rc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Ss,a);ac.subVectors(t,r);let f=Ss.dot(ac),g=bs.dot(ac);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(bs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Eu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Eu,o);let p=1/(m+M+u);return a=M*p,o=u*p,e.copy(i).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ci=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Sa.subVectors(this.max,cr),Es.subVectors(t.a,cr),ws.subVectors(t.b,cr),Ts.subVectors(t.c,cr),Ei.subVectors(ws,Es),wi.subVectors(Ts,ws),Ki.subVectors(Es,Ts);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Ki.z,Ki.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Ki.z,0,-Ki.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Ki.y,Ki.x,0];return!hc(e,Es,ws,Ts,Sa)||(e=[1,0,0,0,1,0,0,0,1],!hc(e,Es,ws,Ts,Sa))?!1:(ba.crossVectors(Ei,wi),e=[ba.x,ba.y,ba.z],hc(e,Es,ws,Ts,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,Ma=new Ci,Es=new P,ws=new P,Ts=new P,Ei=new P,wi=new P,Ki=new P,cr=new P,Sa=new P,ba=new P,Ji=new P;function hc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ji.fromArray(n,r);let o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=i.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Oe=new P,Ea=new pt,Yp=0,An=class extends On{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sd,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Is(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),i=cn(i,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Tr=class extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}},Zp=new Ci,hr=new P,uc=new P,ns=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Zp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);let e=hr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(uc)),this.expandByPoint(hr.copy(t.center).sub(uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kp=0,Tn=new Pe,dc=new tn,As=new P,yn=new Ci,ur=new Ci,Ze=new P,ze=class n extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vp(t)?Tr:wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,i){return Tn.makeTranslation(t,e,i),this.applyMatrix4(Tn),this}scale(t,e,i){return Tn.makeScale(t,e,i),this.applyMatrix4(Tn),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(yn.min,ur.min),yn.expandByPoint(Ze),Ze.addVectors(yn.max,ur.max),yn.expandByPoint(Ze)):(yn.expandByPoint(ur.min),yn.expandByPoint(ur.max))}yn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ze.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(t,c),Ze.add(As)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new P,l[y]=new P;let c=new P,h=new P,d=new P,u=new pt,f=new pt,g=new pt,M=new P,m=new P;function p(y,T,R){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),o[y].add(M),o[T].add(M),o[R].add(M),l[y].add(m),l[T].add(m),l[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,T=v.length;y<T;++y){let R=v[y],F=R.start,B=R.count;for(let z=F,L=F+B;z<L;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let E=new P,_=new P,S=new P,w=new P;function A(y){S.fromBufferAttribute(s,y),w.copy(S);let T=o[y];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(w,T);let F=_.dot(l[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,F)}for(let y=0,T=v.length;y<T;++y){let R=v[y],F=R.start,B=R.count;for(let z=F,L=F+B;z<L;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new An(u,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var fc=new P,Jp=new P,jp=new Zt,xn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=fc.subVectors(i,e).cross(Jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||jp.getNormalMatrix(t),s=this.coplanarPoint(fc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qp=0,fi=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Ks,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=kc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hi=new P,pc=new P,wa=new P,Ta=new P,Ri=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pc.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Ta.copy(this.origin).sub(pc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(wa),o=Ta.dot(this.direction),l=-Ta.dot(wa),c=Ta.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pc).addScaledVector(wa,u),f}intersectSphere(t,e){if(t.radius<0)return null;hi.subVectors(t.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=i.x-a.x,v=i.y-a.y,E=i.z-a.z,_=Math.abs(l),S=Math.abs(c),w=Math.abs(h),A,y,T,R,F,B,z,L,k,K,J,ht;if(_>=S&&_>=w?(T=l,B=d,k=g,ht=p,l>=0?(A=c,y=h,R=u,F=f,z=M,L=m,K=v,J=E):(A=h,y=c,R=f,F=u,z=m,L=M,K=E,J=v)):S>=w?(T=c,B=u,k=M,ht=v,c>=0?(A=h,y=l,R=f,F=d,z=m,L=g,K=E,J=p):(A=l,y=h,R=d,F=f,z=g,L=m,K=p,J=E)):(T=h,B=f,k=m,ht=E,h>=0?(A=l,y=c,R=d,F=u,z=g,L=M,K=p,J=v):(A=c,y=l,R=u,F=d,z=M,L=g,K=v,J=p)),T===0)return null;let j=A/T,it=y/T,at=1/T,Ft=R-j*B,Rt=F-it*B,de=z-j*k,ie=L-it*k,ce=K-j*ht,tt=J-it*ht,rt=ce*ie-tt*de,X=Ft*tt-Rt*ce,Z=de*Rt-ie*Ft;if(s){if(rt<0||X<0||Z<0)return null}else if((rt<0||X<0||Z<0)&&(rt>0||X>0||Z>0))return null;let nt=rt+X+Z;if(nt===0)return null;let mt=at*(rt*B+X*k+Z*ht);return(nt>0?mt<0:mt>0)?null:this.at(mt/nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pi=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wu=new Pe,ji=new Ri,Aa=new ns,Tu=new P,Ca=new P,Ra=new P,Pa=new P,mc=new P,Ia=new P,Au=new P,La=new P,He=class extends tn{constructor(t=new ze,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(mc.fromBufferAttribute(d,t),a?Ia.addScaledVector(mc,h):Ia.addScaledVector(mc.sub(e),h))}e.add(Ia)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(Aa.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Aa,Tu)===null||ji.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(wu.copy(r).invert(),ji.copy(t.ray).applyMatrix4(wu),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,S=E;_<S;_+=3){let w=o.getX(_),A=o.getX(_+1),y=o.getX(_+2);s=Fa(this,p,t,i,c,h,d,w,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let v=o.getX(m),E=o.getX(m+1),_=o.getX(m+2);s=Fa(this,a,t,i,c,h,d,v,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,S=E;_<S;_+=3){let w=_,A=_+1,y=_+2;s=Fa(this,p,t,i,c,h,d,w,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let v=m,E=m+1,_=m+2;s=Fa(this,a,t,i,c,h,d,v,E,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function tm(n,t,e,i,s,r,a,o){let l;if(t.side===un?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Bi,o),l===null)return null;La.copy(o),La.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(La);return c<e.near||c>e.far?null:{distance:c,point:La.clone(),object:n}}function Fa(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ca),n.getVertexPosition(l,Ra),n.getVertexPosition(c,Pa);let h=tm(n,t,e,i,Ca,Ra,Pa,Au);if(h){let d=new P;Ai.getBarycoord(Au,Ca,Ra,Pa,d),s&&(h.uv=Ai.getInterpolatedAttribute(s,o,l,c,d,new pt)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,o,l,c,d,new pt)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};Ai.getNormal(Ca,Ra,Pa,u.normal),h.face=u,h.barycoord=d}return h}var no=class extends hn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=ke,h=ke,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=new ns,em=new pt(.5,.5),Da=new P,zs=class{constructor(t=new xn,e=new xn,i=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Bn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],v=r[12],E=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,p-g,S-v).normalize(),s[1].setComponents(c+a,f+h,p+g,S+v).normalize(),s[2].setComponents(c+o,f+d,p+M,S+E).normalize(),s[3].setComponents(c-o,f-d,p-M,S-E).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,S-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-_).normalize(),e===Bn)s[5].setComponents(c+l,f+u,p+m,S+_).normalize();else if(e===Ds)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);let e=em.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Da.x=s.normal.x>0?t.max.x:t.min.x,Da.y=s.normal.y>0?t.max.y:t.min.y,Da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hs=class extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},io=new P,so=new P,Cu=new Pe,dr=new Ri,Na=new ns,gc=new P,Ru=new P,Ar=class extends tn{constructor(t=new ze,e=new Hs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)io.fromBufferAttribute(e,s-1),so.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=io.distanceTo(so);t.setAttribute("lineDistance",new pe(i,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,t.ray.intersectsSphere(Na)===!1)return;Cu.copy(s).invert(),dr.copy(t.ray).applyMatrix4(Cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=h.getX(M),v=h.getX(M+1),E=Ua(this,t,dr,l,p,v,M);E&&e.push(E)}if(this.isLineLoop){let M=h.getX(g-1),m=h.getX(f),p=Ua(this,t,dr,l,M,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=Ua(this,t,dr,l,M,M+1,M);p&&e.push(p)}if(this.isLineLoop){let M=Ua(this,t,dr,l,g-1,f,g-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ua(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(io.fromBufferAttribute(o,s),so.fromBufferAttribute(o,r),e.distanceSqToSegment(io,so,gc,Ru)>i)return;gc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(gc);if(!(c<t.near||c>t.far))return{distance:c,point:Ru.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Cr=class extends hn{constructor(t=[],e=Oi,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},is=class extends hn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ii=class extends hn{constructor(t,e,i=zn,s,r,a,o=ke,l=ke,c,h=Kn,d=1){if(h!==Kn&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ro=class extends Ii{constructor(t,e=zn,i=Oi,s,r,a=ke,o=ke,l,c=Kn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rr=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Kt=class n extends ze{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function g(M,m,p,v,E,_,S,w,A,y,T){let R=_/A,F=S/y,B=_/2,z=S/2,L=w/2,k=A+1,K=y+1,J=0,ht=0,j=new P;for(let it=0;it<K;it++){let at=it*F-z;for(let Ft=0;Ft<k;Ft++){let Rt=Ft*R-B;j[M]=Rt*v,j[m]=at*E,j[p]=L,c.push(j.x,j.y,j.z),j[M]=0,j[m]=0,j[p]=w>0?1:-1,h.push(j.x,j.y,j.z),d.push(Ft/A),d.push(1-it/y),J+=1}}for(let it=0;it<y;it++)for(let at=0;at<A;at++){let Ft=u+at+k*it,Rt=u+at+k*(it+1),de=u+(at+1)+k*(it+1),ie=u+(at+1)+k*it;l.push(Ft,Rt,ie),l.push(Rt,de,ie),ht+=6}o.addGroup(f,ht,T),f+=ht,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Gs=class n extends ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},re=class n extends ze{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,M=[],m=i/2,p=0;v(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function v(){let _=new P,S=new P,w=0,A=(e-t)/i;for(let y=0;y<=r;y++){let T=[],R=y/r,F=R*(e-t)+t;for(let B=0;B<=s;B++){let z=B/s,L=z*l+o,k=Math.sin(L),K=Math.cos(L);S.x=F*k,S.y=-R*i+m,S.z=F*K,d.push(S.x,S.y,S.z),_.set(k,A,K).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-R),T.push(g++)}M.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let R=M[T][y],F=M[T+1][y],B=M[T+1][y+1],z=M[T][y+1];(t>0||T!==0)&&(h.push(R,F,z),w+=3),(e>0||T!==r-1)&&(h.push(F,B,z),w+=3)}c.addGroup(p,w,0),p+=w}function E(_){let S=g,w=new pt,A=new P,y=0,T=_===!0?t:e,R=_===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let F=g;for(let B=0;B<=s;B++){let L=B/s*l+o,k=Math.cos(L),K=Math.sin(L);A.x=T*K,A.y=m*R,A.z=T*k,d.push(A.x,A.y,A.z),u.push(0,R,0),w.x=k*.5+.5,w.y=K*.5*R+.5,f.push(w.x,w.y),g++}for(let B=0;B<s;B++){let z=S+B,L=F+B;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),y+=3}c.addGroup(p,y,_===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cn=class n extends re{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vs=class n extends ze{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let E=new P,_=new P,S=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],E),f(e[w+1],_),f(e[w+2],S),l(E,_,S,v)}function l(v,E,_,S){let w=S+1,A=[];for(let y=0;y<=w;y++){A[y]=[];let T=v.clone().lerp(_,y/w),R=E.clone().lerp(_,y/w),F=w-y;for(let B=0;B<=F;B++)B===0&&y===w?A[y][B]=T:A[y][B]=T.clone().lerp(R,B/F)}for(let y=0;y<w;y++)for(let T=0;T<2*(w-y)-1;T++){let R=Math.floor(T/2);T%2===0?(u(A[y][R+1]),u(A[y+1][R]),u(A[y][R])):(u(A[y][R+1]),u(A[y+1][R+1]),u(A[y+1][R]))}}function c(v){let E=new P;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(v),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){let v=new P;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];let _=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;a.push(_,1-S)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let E=a[v+0],_=a[v+2],S=a[v+4],w=Math.max(E,_,S),A=Math.min(E,_,S);w>.9&&A<.1&&(E<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,E){let _=v*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function g(){let v=new P,E=new P,_=new P,S=new P,w=new pt,A=new pt,y=new pt;for(let T=0,R=0;T<r.length;T+=9,R+=6){v.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),w.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),S.copy(v).add(E).add(_).divideScalar(3);let F=m(S);M(w,R+0,v,F),M(A,R+2,E,F),M(y,R+4,_,F)}}function M(v,E,_,S){S<0&&v.x===1&&(a[E]=v.x-1),_.x===0&&_.z===0&&(a[E]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},Pr=class n extends Vs{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new Pe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ws=class extends Mn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new pt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ao=class extends Ws{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Pu=new P,Iu=new P,_c=new rh,yc=new rh,xc=new rh,oo=class extends Mn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Iu.subVectors(s[0],s[1]).add(s[0]),c=Iu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Pu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),_c.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,m),yc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,m),xc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),yc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),xc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(_c.calc(l),yc.calc(l),xc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Lu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function nm(n,t){let e=1-n;return e*e*t}function im(n,t){return 2*(1-n)*n*t}function sm(n,t){return n*n*t}function gr(n,t,e,i){return nm(n,t)+im(n,e)+sm(n,i)}function rm(n,t){let e=1-n;return e*e*e*t}function am(n,t){let e=1-n;return 3*e*e*n*t}function om(n,t){return 3*(1-n)*n*n*t}function lm(n,t){return n*n*n*t}function _r(n,t,e,i,s){return rm(n,t)+am(n,e)+om(n,i)+lm(n,s)}var Ir=class extends Mn{constructor(t=new pt,e=new pt,i=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new pt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(_r(t,s.x,r.x,a.x,o.x),_r(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends Mn{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(_r(t,s.x,r.x,a.x,o.x),_r(t,s.y,r.y,a.y,o.y),_r(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lr=class extends Mn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends Mn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends Mn{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends Mn{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(gr(t,s.x,r.x,a.x),gr(t,s.y,r.y,a.y),gr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Lu(o,l.x,c.x,h.x,d.x),Lu(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},Tc=Object.freeze({__proto__:null,ArcCurve:ao,CatmullRomCurve3:oo,CubicBezierCurve:Ir,CubicBezierCurve3:lo,EllipseCurve:Ws,LineCurve:Lr,LineCurve3:co,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:ho,SplineCurve:Dr}),uo=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Tc[s.type]().fromJSON(s))}return this}},Nr=class extends uo{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Lr(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Fr(this.currentPoint.clone(),new pt(t,e),new pt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Ir(this.currentPoint.clone(),new pt(t,e),new pt(i,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Dr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Ws(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},$s=class extends Nr{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Nr().fromJSON(s))}return this}};function cm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Cd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=pm(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ur(r,a,e,o,l,c,0),a}function Cd(n,t,e,i,s){let r;if(s===wm(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Fu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Fu(a/i|0,n[a],n[a+1],r);return r&&Xs(r,r.next)&&(Or(r),r=r.next),r}function ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Xs(e,e.next)||De(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ur(n,t,e,i,s,r,a){if(!n)return;!a&&r&&xm(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?um(n,i,s,r):hm(n)){t.push(l.i,n.i,c.i),Or(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=dm(ss(n),t),Ur(n,t,e,i,s,r,2)):a===2&&fm(n,t,e,i,s,r):Ur(ss(n),t,e,i,s,r,1);break}}}function hm(n){let t=n.prev,e=n,i=n.next;if(De(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&fr(s,o,r,l,a,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function um(n,t,e,i){let s=n.prev,r=n,a=n.next;if(De(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),p=Ac(f,g,t,e,i),v=Ac(M,m,t,e,i),E=n.prevZ,_=n.nextZ;for(;E&&E.z>=p&&_&&_.z<=v;){if(E.x>=f&&E.x<=M&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&fr(o,h,l,d,c,u,E.x,E.y)&&De(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&fr(o,h,l,d,c,u,_.x,_.y)&&De(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=M&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&fr(o,h,l,d,c,u,E.x,E.y)&&De(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&fr(o,h,l,d,c,u,_.x,_.y)&&De(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function dm(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Xs(i,s)&&Pd(i,e,e.next,s)&&Br(i,s)&&Br(s,i)&&(t.push(i.i,e.i,s.i),Or(e),Or(e.next),e=n=s),e=e.next}while(e!==n);return ss(e)}function fm(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sm(a,o)){let l=Id(a,o);a=ss(a,a.next),l=ss(l,l.next),Ur(a,t,e,i,s,r,0),Ur(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function pm(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Cd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Mm(c))}s.sort(mm);for(let r=0;r<s.length;r++)e=gm(s[r],e);return e}function mm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function gm(n,t){let e=_m(n,t);if(!e)return t;let i=Id(e,n);return ss(i,i.next),ss(e,e.next)}function _m(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Xs(n,e))return e;do{if(Xs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Rd(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Br(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&ym(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function ym(n,t){return De(n.prev,n,t.prev)<0&&De(t.next,n,n.next)<0}function xm(n,t,e,i){let s=n;do s.z===0&&(s.z=Ac(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,vm(s)}function vm(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Ac(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Mm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Rd(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function fr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Rd(n,t,e,i,s,r,a,o)}function Sm(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!bm(n,t)&&(Br(n,t)&&Br(t,n)&&Em(n,t)&&(De(n.prev,n,t.prev)||De(n,t.prev,t))||Xs(n,t)&&De(n.prev,n,n.next)>0&&De(t.prev,t,t.next)>0)}function De(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Xs(n,t){return n.x===t.x&&n.y===t.y}function Pd(n,t,e,i){let s=Oa(De(n,t,e)),r=Oa(De(n,t,i)),a=Oa(De(e,i,n)),o=Oa(De(e,i,t));return!!(s!==r&&a!==o||s===0&&Ba(n,e,t)||r===0&&Ba(n,i,t)||a===0&&Ba(e,n,i)||o===0&&Ba(e,t,i))}function Ba(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Oa(n){return n>0?1:n<0?-1:0}function bm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Pd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Br(n,t){return De(n.prev,n,n.next)<0?De(n,t,n.next)>=0&&De(n,n.prev,t)>=0:De(n,t,n.prev)<0||De(n,n.next,t)<0}function Em(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Id(n,t){let e=Cc(n.i,n.x,n.y),i=Cc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fu(n,t,e,i){let s=Cc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Or(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Cc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wm(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Rc=class{static triangulate(t,e,i=2){return cm(t,e,i)}},ts=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Du(t),Nu(i,t);let a=t.length;e.forEach(Du);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Nu(i,e[l]);let o=Rc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Du(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Nu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var kr=class n extends ze{constructor(t=new $s([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Tm,E,_=!1,S,w,A,y;if(p){E=p.getSpacedPoints(h),_=!0,u=!1;let $=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,$),w=new P,A=new P,y=new P}u||(m=0,f=0,g=0,M=0);let T=o.extractPoints(c),R=T.shape,F=T.holes;if(!ts.isClockWise(R)){R=R.reverse();for(let $=0,q=F.length;$<q;$++){let ot=F[$];ts.isClockWise(ot)&&(F[$]=ot.reverse())}}function z($){let ot=10000000000000001e-36,ut=$[0];for(let ft=1;ft<=$.length;ft++){let Gt=ft%$.length,Vt=$[Gt],Yt=Vt.x-ut.x,Jt=Vt.y-ut.y,I=Yt*Yt+Jt*Jt,ye=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(ut.x),Math.abs(ut.y)),oe=ot*ye*ye;if(I<=oe){$.splice(Gt,1),ft--;continue}ut=Vt}}z(R),F.forEach(z);let L=F.length,k=R;for(let $=0;$<L;$++){let q=F[$];R=R.concat(q)}function K($,q,ot){return q||qt("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(q,ot)}let J=R.length;function ht($,q,ot){let ut,ft,Gt,Vt=$.x-q.x,Yt=$.y-q.y,Jt=ot.x-$.x,I=ot.y-$.y,ye=Vt*Vt+Yt*Yt,oe=Vt*I-Yt*Jt;if(Math.abs(oe)>Number.EPSILON){let C=Math.sqrt(ye),x=Math.sqrt(Jt*Jt+I*I),O=q.x-Yt/C,W=q.y+Vt/C,Q=ot.x-I/x,yt=ot.y+Jt/x,xt=((Q-O)*I-(yt-W)*Jt)/(Vt*I-Yt*Jt);ut=O+Vt*xt-$.x,ft=W+Yt*xt-$.y;let et=ut*ut+ft*ft;if(et<=2)return new pt(ut,ft);Gt=Math.sqrt(et/2)}else{let C=!1;Vt>Number.EPSILON?Jt>Number.EPSILON&&(C=!0):Vt<-Number.EPSILON?Jt<-Number.EPSILON&&(C=!0):Math.sign(Yt)===Math.sign(I)&&(C=!0),C?(ut=-Yt,ft=Vt,Gt=Math.sqrt(ye)):(ut=Vt,ft=Yt,Gt=Math.sqrt(ye/2))}return new pt(ut/Gt,ft/Gt)}let j=[];for(let $=0,q=k.length,ot=q-1,ut=$+1;$<q;$++,ot++,ut++)ot===q&&(ot=0),ut===q&&(ut=0),j[$]=ht(k[$],k[ot],k[ut]);let it=[],at,Ft=j.concat();for(let $=0,q=L;$<q;$++){let ot=F[$];at=[];for(let ut=0,ft=ot.length,Gt=ft-1,Vt=ut+1;ut<ft;ut++,Gt++,Vt++)Gt===ft&&(Gt=0),Vt===ft&&(Vt=0),at[ut]=ht(ot[ut],ot[Gt],ot[Vt]);it.push(at),Ft=Ft.concat(at)}let Rt;if(m===0)Rt=ts.triangulateShape(k,F);else{let $=[],q=[];for(let ot=0;ot<m;ot++){let ut=ot/m,ft=f*Math.cos(ut*Math.PI/2),Gt=g*Math.sin(ut*Math.PI/2)+M;for(let Vt=0,Yt=k.length;Vt<Yt;Vt++){let Jt=K(k[Vt],j[Vt],Gt);X(Jt.x,Jt.y,-ft),ut===0&&$.push(Jt)}for(let Vt=0,Yt=L;Vt<Yt;Vt++){let Jt=F[Vt];at=it[Vt];let I=[];for(let ye=0,oe=Jt.length;ye<oe;ye++){let C=K(Jt[ye],at[ye],Gt);X(C.x,C.y,-ft),ut===0&&I.push(C)}ut===0&&q.push(I)}}Rt=ts.triangulateShape($,q)}let de=Rt.length,ie=g+M;for(let $=0;$<J;$++){let q=u?K(R[$],Ft[$],ie):R[$];_?(A.copy(S.normals[0]).multiplyScalar(q.x),w.copy(S.binormals[0]).multiplyScalar(q.y),y.copy(E[0]).add(A).add(w),X(y.x,y.y,y.z)):X(q.x,q.y,0)}for(let $=1;$<=h;$++)for(let q=0;q<J;q++){let ot=u?K(R[q],Ft[q],ie):R[q];_?(A.copy(S.normals[$]).multiplyScalar(ot.x),w.copy(S.binormals[$]).multiplyScalar(ot.y),y.copy(E[$]).add(A).add(w),X(y.x,y.y,y.z)):X(ot.x,ot.y,d/h*$)}for(let $=m-1;$>=0;$--){let q=$/m,ot=f*Math.cos(q*Math.PI/2),ut=g*Math.sin(q*Math.PI/2)+M;for(let ft=0,Gt=k.length;ft<Gt;ft++){let Vt=K(k[ft],j[ft],ut);X(Vt.x,Vt.y,d+ot)}for(let ft=0,Gt=F.length;ft<Gt;ft++){let Vt=F[ft];at=it[ft];for(let Yt=0,Jt=Vt.length;Yt<Jt;Yt++){let I=K(Vt[Yt],at[Yt],ut);_?X(I.x,I.y+E[h-1].y,E[h-1].x+ot):X(I.x,I.y,d+ot)}}}ce(),tt();function ce(){let $=s.length/3;if(u){let q=0,ot=J*q;for(let ut=0;ut<de;ut++){let ft=Rt[ut];Z(ft[2]+ot,ft[1]+ot,ft[0]+ot)}q=h+m*2,ot=J*q;for(let ut=0;ut<de;ut++){let ft=Rt[ut];Z(ft[0]+ot,ft[1]+ot,ft[2]+ot)}}else{for(let q=0;q<de;q++){let ot=Rt[q];Z(ot[2],ot[1],ot[0])}for(let q=0;q<de;q++){let ot=Rt[q];Z(ot[0]+J*h,ot[1]+J*h,ot[2]+J*h)}}i.addGroup($,s.length/3-$,0)}function tt(){let $=s.length/3,q=0;rt(k,q),q+=k.length;for(let ot=0,ut=F.length;ot<ut;ot++){let ft=F[ot];rt(ft,q),q+=ft.length}i.addGroup($,s.length/3-$,1)}function rt($,q){let ot=$.length;for(;--ot>=0;){let ut=ot,ft=ot-1;ft<0&&(ft=$.length-1);for(let Gt=0,Vt=h+m*2;Gt<Vt;Gt++){let Yt=J*Gt,Jt=J*(Gt+1),I=q+ut+Yt,ye=q+ft+Yt,oe=q+ft+Jt,C=q+ut+Jt;nt(I,ye,oe,C)}}}function X($,q,ot){l.push($),l.push(q),l.push(ot)}function Z($,q,ot){mt($),mt(q),mt(ot);let ut=s.length/3,ft=v.generateTopUV(i,s,ut-3,ut-2,ut-1);Dt(ft[0]),Dt(ft[1]),Dt(ft[2])}function nt($,q,ot,ut){mt($),mt(q),mt(ut),mt(q),mt(ot),mt(ut);let ft=s.length/3,Gt=v.generateSideWallUV(i,s,ft-6,ft-3,ft-2,ft-1);Dt(Gt[0]),Dt(Gt[1]),Dt(Gt[3]),Dt(Gt[1]),Dt(Gt[2]),Dt(Gt[3])}function mt($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function Dt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Am(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Tc[s.type]().fromJSON(s)),new n(i,t.options)}},Tm={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new pt(r,a),new pt(o,l),new pt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new pt(a,1-l),new pt(c,1-d),new pt(u,1-g),new pt(M,1-p)]:[new pt(o,1-l),new pt(h,1-d),new pt(f,1-g),new pt(m,1-p)]}};function Am(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Se=class n extends Vs{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var qs=class n extends Vs{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},rs=class n extends ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let v=p*u-a;for(let E=0;E<c;E++){let _=E*d-r;g.push(_,-v,0),M.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let E=v+c*p,_=v+c*(p+1),S=v+1+c*(p+1),w=v+1+c*p;f.push(E,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(M,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},zr=class n extends ze{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new P,g=new pt;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let M=0;M<s;M++){let m=M*(i+1);for(let p=0;p<i;p++){let v=p+m,E=v,_=v+i+1,S=v+i+2,w=v+1;o.push(E,_,w),o.push(_,S,w)}}this.setIndex(o),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Sn=class n extends ze{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],M=[],m=[];for(let p=0;p<=i;p++){let v=[],E=p/i,_=a+E*o,S=t*Math.cos(_),w=Math.sqrt(t*t-S*S),A=0;p===0&&a===0?A=.5/e:p===i&&l===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){let T=y/e,R=s+T*r;d.x=-w*Math.cos(R),d.y=S,d.z=w*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(T+A,1-E),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let E=h[p][v+1],_=h[p][v],S=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&f.push(E,_,w),(p!==i-1||l<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(M,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var as=class n extends ze{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,g=new P;for(let M=0;M<=i;M++){let m=a+M/i*o;for(let p=0;p<=s;p++){let v=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,v=(s+1)*(M-1)+m-1,E=(s+1)*(M-1)+m,_=(s+1)*M+m;l.push(p,v,_),l.push(v,E,_)}this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function hs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Uu(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Uu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function on(n){let t={};for(let e=0;e<n.length;e++){let i=hs(n[e]);for(let s in i)t[s]=i[s]}return t}function Uu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Cm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ah(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Ld={clone:hs,merge:on},Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new pt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Fe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Pe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fo=class extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pi=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var po=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mo=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Cs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function vc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Li=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},go=class extends Li{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:r=t,o=2*e-i;break;case wc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:a=t,l=2*i-e;break;case wc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),M=g*g,m=M*g,p=-u*m+2*u*M-u*g,v=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*M+.5*g,_=f*m-f*M;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+v*a[c+S]+E*a[l+S]+_*a[d+S];return r}},_o=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},yo=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xo=class extends Li{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=f*u+g*2,v=d[p],E=d[p+1],_=t*u+g*2,S=h[_],w=h[_+1],A=Lm(i,e,v,S,s);r[g]=Fd(A,M,E,w,m)}return r}};function Fd(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Im(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Lm(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Fd(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Im(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var En=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Cs(e,this.TimeBufferType),this.values=Cs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Cs(t.times,Array),values:Cs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),vc(t.settings)&&(i.settings={inTangents:Cs(t.settings.inTangents,Array),outTangents:Cs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case ja:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break;case Sc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Wt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Ha;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;vc(this.settings)&&(Bu(this.settings.inTangents,t),Bu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Mp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ha,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,vc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ja;var Fi=class extends En{constructor(t,e,i){super(t,e,i)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=yr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};vo.prototype.ValueTypeName="color";var Mo=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};Mo.prototype.ValueTypeName="number";var So=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Hr=class extends En{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new So(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends En{constructor(t,e,i){super(t,e,i)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=yr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};bo.prototype.ValueTypeName="vector";var Eo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dd=new Eo,wo=class{constructor(t){this.manager=t!==void 0?t:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Vr=class extends Gr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Mc=new Pe,Ou=new P,ku=new P,To=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Mc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ka=new P,za=new vn,Yn=new P,Wr=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ka,za,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,za,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ka,za,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,za,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new P,zu=new pt,Hu=new pt,an=class extends Wr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,zu,Hu),e.subVectors(Hu,zu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ys=class extends Wr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Pc=class extends To{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Pc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rs=-90,Ps=1,Ao=class extends tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Rs,Ps,t,e);s.layers=this.layers,this.add(s);let r=new an(Rs,Ps,t,e);r.layers=this.layers,this.add(r);let a=new an(Rs,Ps,t,e);a.layers=this.layers,this.add(a);let o=new an(Rs,Ps,t,e);o.layers=this.layers,this.add(o);let l=new an(Rs,Ps,t,e);l.layers=this.layers,this.add(l);let c=new an(Rs,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Co=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var oh="\\[\\]\\.:\\/",Fm=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",Dm="[^"+oh.replace("\\.","")+"]",Nm=/((?:WC+[\/:])*)/.source.replace("WC",lh),Um=/(WCOD+)?/.source.replace("WCOD",Dm),Bm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),km=new RegExp("^"+Nm+Um+Bm+Om+"$"),zm=["material","materials","bones","map"],Ic=class{constructor(t,e,i){let s=i||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fm,"")}static parseTrackName(t){let e=km.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Ic;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bv=new Float32Array(1);var Gu=new Pe,Xr=class{constructor(t,e,i=0,s=1/0){this.ray=new Ri(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gu),this}intersectObject(t,e=!0,i=[]){return Lc(t,this,i,e),i.sort(Vu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Lc(t[s],this,i,e);return i.sort(Vu),i}};function Vu(n,t){return n.distance-t.distance}function Lc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Lc(r[a],t,e,!0)}}var qr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Wt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Jn=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ph=class ph{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};ph.prototype.isMatrix2=!0;var Fc=ph;var Yr=class extends On{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function ch(n,t,e,i){let s=Hm(i);switch(e){case Qc:return n*t;case eh:return n*t/s.components*s.byteLength;case Bo:return n*t/s.components*s.byteLength;case Hi:return n*t*2/s.components*s.byteLength;case Oo:return n*t*2/s.components*s.byteLength;case th:return n*t*3/s.components*s.byteLength;case Rn:return n*t*4/s.components*s.byteLength;case ko:return n*t*4/s.components*s.byteLength;case jr:case Qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Vo:return Math.max(n,16)*Math.max(t,8)/4;case zo:case Go:return Math.max(n,8)*Math.max(t,8)/2;case Wo:case $o:case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xo:case na:case Zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case hl:case ul:case dl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case fl:case pl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ia:case ml:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hm(n){switch(n){case pn:case Zc:return{byteLength:1,components:1};case Js:case Kc:case Gn:return{byteLength:2,components:1};case No:case Uo:return{byteLength:2,components:4};case zn:case Do:case Hn:return{byteLength:4,components:1};case Jc:case jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Vm(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,i0=`#ifdef USE_IRIDESCENCE
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
#endif`,s0=`#ifdef USE_BUMPMAP
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,f0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,p0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m0=`vec3 transformedNormal = objectNormal;
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
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
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
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
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
}`,L0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,U0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,G0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tg=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sg=`#if defined( USE_MORPHCOLORS )
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
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
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
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
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
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,$g=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
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
}`,Qg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`uniform float scale;
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
}`,i_=`uniform vec3 diffuse;
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
}`,s_=`#include <common>
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
}`,r_=`uniform vec3 diffuse;
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
}`,a_=`#define LAMBERT
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
}`,o_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,l_=`#define MATCAP
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
}`,c_=`#define MATCAP
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
}`,h_=`#define NORMAL
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
}`,u_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d_=`#define PHONG
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
}`,f_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,p_=`#define STANDARD
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
}`,m_=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,g_=`#define TOON
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
}`,__=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,y_=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,M_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,S_=`uniform float rotation;
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
}`,b_=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Wm,alphahash_pars_fragment:$m,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:Zm,aomap_fragment:Km,aomap_pars_fragment:Jm,batching_pars_vertex:jm,batching_vertex:Qm,begin_vertex:t0,beginnormal_vertex:e0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:s0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:l0,color_fragment:c0,color_pars_fragment:h0,color_pars_vertex:u0,color_vertex:d0,common:f0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:_0,emissivemap_fragment:y0,emissivemap_pars_fragment:x0,colorspace_fragment:v0,colorspace_pars_fragment:M0,envmap_fragment:S0,envmap_common_pars_fragment:b0,envmap_pars_fragment:E0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:U0,envmap_vertex:T0,fog_vertex:A0,fog_pars_vertex:C0,fog_fragment:R0,fog_pars_fragment:P0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:L0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:D0,lights_pars_begin:N0,lights_toon_fragment:B0,lights_toon_pars_fragment:O0,lights_phong_fragment:k0,lights_phong_pars_fragment:z0,lights_physical_fragment:H0,lights_physical_pars_fragment:G0,lights_fragment_begin:V0,lights_fragment_maps:W0,lights_fragment_end:$0,lightprobes_pars_fragment:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:K0,map_fragment:J0,map_pars_fragment:j0,map_particle_fragment:Q0,map_particle_pars_fragment:tg,metalnessmap_fragment:eg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:sg,morphnormal_vertex:rg,morphtarget_pars_vertex:ag,morphtarget_vertex:og,normal_fragment_begin:lg,normal_fragment_maps:cg,normal_pars_fragment:hg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:_g,opaque_fragment:yg,packing:xg,premultiplied_alpha_fragment:vg,project_vertex:Mg,dithering_fragment:Sg,dithering_pars_fragment:bg,roughnessmap_fragment:Eg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Cg,shadowmask_pars_fragment:Rg,skinbase_vertex:Pg,skinning_pars_vertex:Ig,skinning_vertex:Lg,skinnormal_vertex:Fg,specularmap_fragment:Dg,specularmap_pars_fragment:Ng,tonemapping_fragment:Ug,tonemapping_pars_fragment:Bg,transmission_fragment:Og,transmission_pars_fragment:kg,uv_pars_fragment:zg,uv_pars_vertex:Hg,uv_vertex:Gg,worldpos_vertex:Vg,background_vert:Wg,background_frag:$g,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:Zg,depth_vert:Kg,depth_frag:Jg,distance_vert:jg,distance_frag:Qg,equirect_vert:t_,equirect_frag:e_,linedashed_vert:n_,linedashed_frag:i_,meshbasic_vert:s_,meshbasic_frag:r_,meshlambert_vert:a_,meshlambert_frag:o_,meshmatcap_vert:l_,meshmatcap_frag:c_,meshnormal_vert:h_,meshnormal_frag:u_,meshphong_vert:d_,meshphong_frag:f_,meshphysical_vert:p_,meshphysical_frag:m_,meshtoon_vert:g_,meshtoon_frag:__,points_vert:y_,points_frag:x_,shadow_vert:v_,shadow_frag:M_,sprite_vert:S_,sprite_frag:b_},wt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ei={basic:{uniforms:on([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:on([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:on([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:on([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:on([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new se(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:on([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:on([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:on([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:on([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:on([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:on([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:on([wt.common,wt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:on([wt.lights,wt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ei.physical={uniforms:on([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var xl={r:0,b:0,g:0},E_=new Pe,sf=new Zt;sf.set(-1,0,0,0,1,0,0,0,1);function w_(n,t,e,i,s,r){let a=new se(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let _=v.backgroundBlurriness>0;E=t.get(E,_)}return E}function g(v){let E=!1,_=f(v);_===null?m(a,o):_&&_.isColor&&(m(_,1),E=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(v,E){let _=f(E);_&&(_.isCubeTexture||_.mapping===Kr)?(c===void 0&&(c=new He(new Kt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:hs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sf),c.material.toneMapped=he.getTransfer(_.colorSpace)!==Me,(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new He(new rs(2,2),new bn({name:"BackgroundMaterial",uniforms:hs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=he.getTransfer(_.colorSpace)!==Me,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,E){v.getRGB(xl,ah(n)),e.buffers.color.setClear(xl.r,xl.g,xl.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:M,dispose:p}}function T_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(F,B,z,L,k){let K=!1,J=d(F,L,z,B);r!==J&&(r=J,c(r.object)),K=f(F,L,z,k),K&&g(F,L,z,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(F,B,z,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function d(F,B,z,L){let k=L.wireframe===!0,K=i[B.id];K===void 0&&(K={},i[B.id]=K);let J=F.isInstancedMesh===!0?F.id:0,ht=K[J];ht===void 0&&(ht={},K[J]=ht);let j=ht[z.id];j===void 0&&(j={},ht[z.id]=j);let it=j[k];return it===void 0&&(it=u(l()),j[k]=it),it}function u(F){let B=[],z=[],L=[];for(let k=0;k<e;k++)B[k]=0,z[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:L,object:F,attributes:{},index:null}}function f(F,B,z,L){let k=r.attributes,K=B.attributes,J=0,ht=z.getAttributes();for(let j in ht)if(ht[j].location>=0){let at=k[j],Ft=K[j];if(Ft===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(Ft=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(Ft=F.instanceColor)),at===void 0||at.attribute!==Ft||Ft&&at.data!==Ft.data)return!0;J++}return r.attributesNum!==J||r.index!==L}function g(F,B,z,L){let k={},K=B.attributes,J=0,ht=z.getAttributes();for(let j in ht)if(ht[j].location>=0){let at=K[j];at===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(at=F.instanceColor));let Ft={};Ft.attribute=at,at&&at.data&&(Ft.data=at.data),k[j]=Ft,J++}r.attributes=k,r.attributesNum=J,r.index=L}function M(){let F=r.newAttributes;for(let B=0,z=F.length;B<z;B++)F[B]=0}function m(F){p(F,0)}function p(F,B){let z=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;z[F]=1,L[F]===0&&(n.enableVertexAttribArray(F),L[F]=1),k[F]!==B&&(n.vertexAttribDivisor(F,B),k[F]=B)}function v(){let F=r.newAttributes,B=r.enabledAttributes;for(let z=0,L=B.length;z<L;z++)B[z]!==F[z]&&(n.disableVertexAttribArray(z),B[z]=0)}function E(F,B,z,L,k,K,J){J===!0?n.vertexAttribIPointer(F,B,z,k,K):n.vertexAttribPointer(F,B,z,L,k,K)}function _(F,B,z,L){M();let k=L.attributes,K=z.getAttributes(),J=B.defaultAttributeValues;for(let ht in K){let j=K[ht];if(j.location>=0){let it=k[ht];if(it===void 0&&(ht==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),ht==="instanceColor"&&F.instanceColor&&(it=F.instanceColor)),it!==void 0){let at=it.normalized,Ft=it.itemSize,Rt=t.get(it);if(Rt===void 0)continue;let de=Rt.buffer,ie=Rt.type,ce=Rt.bytesPerElement,tt=ie===n.INT||ie===n.UNSIGNED_INT||it.gpuType===Do;if(it.isInterleavedBufferAttribute){let rt=it.data,X=rt.stride,Z=it.offset;if(rt.isInstancedInterleavedBuffer){for(let nt=0;nt<j.locationSize;nt++)p(j.location+nt,rt.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let nt=0;nt<j.locationSize;nt++)m(j.location+nt);n.bindBuffer(n.ARRAY_BUFFER,de);for(let nt=0;nt<j.locationSize;nt++)E(j.location+nt,Ft/j.locationSize,ie,at,X*ce,(Z+Ft/j.locationSize*nt)*ce,tt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<j.locationSize;rt++)p(j.location+rt,it.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<j.locationSize;rt++)m(j.location+rt);n.bindBuffer(n.ARRAY_BUFFER,de);for(let rt=0;rt<j.locationSize;rt++)E(j.location+rt,Ft/j.locationSize,ie,at,Ft*ce,Ft/j.locationSize*rt*ce,tt)}}else if(J!==void 0){let at=J[ht];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(j.location,at);break;case 3:n.vertexAttrib3fv(j.location,at);break;case 4:n.vertexAttrib4fv(j.location,at);break;default:n.vertexAttrib1fv(j.location,at)}}}}v()}function S(){T();for(let F in i){let B=i[F];for(let z in B){let L=B[z];for(let k in L){let K=L[k];for(let J in K)h(K[J].object),delete K[J];delete L[k]}}delete i[F]}}function w(F){if(i[F.id]===void 0)return;let B=i[F.id];for(let z in B){let L=B[z];for(let k in L){let K=L[k];for(let J in K)h(K[J].object),delete K[J];delete L[k]}}delete i[F.id]}function A(F){for(let B in i){let z=i[B];for(let L in z){let k=z[L];if(k[F.id]===void 0)continue;let K=k[F.id];for(let J in K)h(K[J].object),delete K[J];delete k[F.id]}}}function y(F){for(let B in i){let z=i[B],L=F.isInstancedMesh===!0?F.id:0,k=z[L];if(k!==void 0){for(let K in k){let J=k[K];for(let ht in J)h(J[ht].object),delete J[ht];delete k[K]}delete z[L],Object.keys(z).length===0&&delete i[B]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function A_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function C_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Rn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pn&&A!==Hn&&!y&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:_,maxSamples:S,samples:w}}function R_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new xn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,E=v*4,_=p.clippingState||null;l.value=_,_=h(g,u,E,f);for(let S=0;S!==E;++S)_[S]=e[S];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,_=f;E!==M;++E,_+=4)a.copy(d[E]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var tr=4,P_=6,I_=20,L_=256,ra=new Ys,Nd=new se,mh=null,gh=0,_h=0,yh=!1,F_=new P,us=new P,Ml=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=F_}=r;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=yh,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Gn,format:Rn,colorSpace:xr,depthBuffer:!1},s=Ud(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=D_(r)),this._blurMaterial=U_(r,t,e),this._ggxMaterial=N_(r,t,e)}return s}_compileMaterial(t){let e=new He(new ze,t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,i,s,r){let l=new an(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Nd),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new He(new Kt,new Pi({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Nd),p=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let S=this._cubeSize;Qs(s,_*S,E>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Oi||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Qs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ra)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-tr?i-g+tr:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Qs(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,ra),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Qs(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,ra)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-tr?s-this._lodMax+tr:0),u=4*(this._cubeSize-h);Qs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ra)}};function D_(n){let t=[],e=[],i=n,s=n-tr+1+P_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),M=new Float32Array(f*u*d);for(let p=0;p<d;p++){let v=p%3*2/3-1,E=p>2?0:-1,_=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];g.set(_,f*u*p);for(let S=0;S<u;S++){let w=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?us.set(1,A,w):p===1?us.set(-w,1,-A):p===2?us.set(-w,A,1):p===3?us.set(-1,A,-w):p===4?us.set(-w,-1,A):us.set(w,A,-1),us.toArray(M,(p*u+S)*f)}}let m=new ze;m.setAttribute("position",new An(g,f)),m.setAttribute("outputDirection",new An(M,f)),e.push(new He(m,null)),i>tr&&i--}return{lodMeshes:e,sizeLods:t}}function Ud(n,t,e){let i=new fn(n,t,e);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function N_(n,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function U_(n,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Bd(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Od(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sl=class extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Qn});r.uniforms.tEquirect.value=e;let a=new He(s,r),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=Qe),new Ao(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function B_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Io||f===Lo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new Sl(g.height);return M.fromEquirectangularTexture(n,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Io||f===Lo,M=f===Oi||f===ls;if(g||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Ml(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||M&&v&&l(v)?(i===null&&(i=new Ml(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Io?u.mapping=Oi:f===Lo&&(u.mapping=ls),u}function l(u){let f=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function O_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&es("WebGLRenderer: "+i+" extension not supported."),s}}}function k_(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(f!==null){let v=f.array;M=f.version;for(let E=0,_=v.length;E<_;E+=3){let S=v[E+0],w=v[E+1],A=v[E+2];u.push(S,w,w,A,A,S)}}else{let v=g.array;M=g.version;for(let E=0,_=v.length/3-1;E<_;E+=3){let S=E+0,w=E+1,A=E+2;u.push(S,w,w,A,A,S)}}let m=new(g.count>=65535?Tr:wr)(u,1);m.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function z_(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function H_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function G_(n,t,e){let i=new WeakMap,s=new Fe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),M===!0&&(E=3);let _=o.attributes.position.count*E,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*S*4*d),A=new Sr(w,_,S,d);A.type=Hn,A.needsUpdate=!0;let y=E*4;for(let R=0;R<d;R++){let F=m[R],B=p[R],z=v[R],L=_*S*4*R;for(let k=0;k<F.count;k++){let K=k*y;f===!0&&(s.fromBufferAttribute(F,k),w[L+K+0]=s.x,w[L+K+1]=s.y,w[L+K+2]=s.z,w[L+K+3]=0),g===!0&&(s.fromBufferAttribute(B,k),w[L+K+4]=s.x,w[L+K+5]=s.y,w[L+K+6]=s.z,w[L+K+7]=0),M===!0&&(s.fromBufferAttribute(z,k),w[L+K+8]=s.x,w[L+K+9]=s.y,w[L+K+10]=s.z,w[L+K+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new pt(_,S)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function V_(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var W_={[Hc]:"LINEAR_TONE_MAPPING",[Gc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Wc]:"ACES_FILMIC_TONE_MAPPING",[Xc]:"AGX_TONE_MAPPING",[qc]:"NEUTRAL_TONE_MAPPING",[$c]:"CUSTOM_TONE_MAPPING"};function $_(n,t,e,i,s,r){let a=new fn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ze;c.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pe([0,2,0,0,2,0],2));let h=new fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new He(c,h),u=new Ys(-1,1,1,-1,0,1),f=null,g=null,M=!1,m,p=null,v=[],E=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let w=0;w<v.length;w++){let A=v[w];A.setSize&&A.setSize(_,S)}},this.setEffects=function(_){v=_,E=v.length>0&&v[0].isRenderPass===!0;let S=a.width,w=a.height;v.length>0&&o===null&&(o=new fn(S,w,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(S,w,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let y=v[A];y.setSize&&y.setSize(S,w)}},this.begin=function(_,S){if(M||_.toneMapping===kn&&v.length===0)return!1;if(p=S,S!==null){let w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return E===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=kn,!0},this.hasRenderPass=function(){return E},this.end=function(_,S){_.toneMapping=m,M=!0;let w=a,A=o;for(let y=0;y<v.length;y++){let T=v[y];T.enabled!==!1&&(T.render(_,A,w,S),T.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},he.getTransfer(f)===Me&&(h.defines.SRGB_TRANSFER="");let y=W_[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(d,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var rf=new hn,Mh=new Ii(1,1),af=new Sr,of=new eo,lf=new Cr,kd=[],zd=[],Hd=new Float32Array(16),Gd=new Float32Array(9),Vd=new Float32Array(4);function nr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wl(n,t){let e=zd[t];e===void 0&&(e=new Int32Array(t),zd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function X_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function q_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function Y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function Z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function K_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Vd.set(i),n.uniformMatrix2fv(this.addr,!1,Vd),We(e,i)}}function J_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Gd.set(i),n.uniformMatrix3fv(this.addr,!1,Gd),We(e,i)}}function j_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Hd.set(i),n.uniformMatrix4fv(this.addr,!1,Hd),We(e,i)}}function Q_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ty(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function ey(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function ny(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function iy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function ry(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function oy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mh.compareFunction=e.isReversedDepthBuffer()?yl:_l,r=Mh):r=rf,e.setTexture2D(t||r,s)}function ly(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||of,s)}function cy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||lf,s)}function hy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||af,s)}function uy(n){switch(n){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return Z_;case 35674:return K_;case 35675:return J_;case 35676:return j_;case 5124:case 35670:return Q_;case 35667:case 35671:return ty;case 35668:case 35672:return ey;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return sy;case 36295:return ry;case 36296:return ay;case 35678:case 36198:case 36298:case 36306:case 35682:return oy;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return hy}}function dy(n,t){n.uniform1fv(this.addr,t)}function fy(n,t){let e=nr(t,this.size,2);n.uniform2fv(this.addr,e)}function py(n,t){let e=nr(t,this.size,3);n.uniform3fv(this.addr,e)}function my(n,t){let e=nr(t,this.size,4);n.uniform4fv(this.addr,e)}function gy(n,t){let e=nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function _y(n,t){let e=nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function yy(n,t){let e=nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function xy(n,t){n.uniform1iv(this.addr,t)}function vy(n,t){n.uniform2iv(this.addr,t)}function My(n,t){n.uniform3iv(this.addr,t)}function Sy(n,t){n.uniform4iv(this.addr,t)}function by(n,t){n.uniform1uiv(this.addr,t)}function Ey(n,t){n.uniform2uiv(this.addr,t)}function wy(n,t){n.uniform3uiv(this.addr,t)}function Ty(n,t){n.uniform4uiv(this.addr,t)}function Ay(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Mh:a=rf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Cy(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||of,r[a])}function Ry(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||lf,r[a])}function Py(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||af,r[a])}function Iy(n){switch(n){case 5126:return dy;case 35664:return fy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return yy;case 5124:case 35670:return xy;case 35667:case 35671:return vy;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return by;case 36294:return Ey;case 36295:return wy;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Py}}var Sh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=uy(e.type)}},bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Iy(e.type)}},Eh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},xh=/(\w+)(\])?(\[|\.)?/g;function Wd(n,t){n.seq.push(t),n.map[t.id]=t}function Ly(n,t,e){let i=n.name,s=i.length;for(xh.lastIndex=0;;){let r=xh.exec(i),a=xh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wd(e,c===void 0?new Sh(o,n,t):new bh(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Eh(o),Wd(e,d)),e=d}}}var er=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ly(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function $d(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Fy=37297,Dy=0;function Ny(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Xd=new Zt;function Uy(n){he._getMatrix(Xd,he.workingColorSpace,n);let t=`mat3( ${Xd.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case vr:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function qd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ny(n.getShaderSource(t),o)}else return r}function By(n,t){let e=Uy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Oy={[Hc]:"Linear",[Gc]:"Reinhard",[Vc]:"Cineon",[Wc]:"ACESFilmic",[Xc]:"AgX",[qc]:"Neutral",[$c]:"Custom"};function ky(n,t){let e=Oy[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vl=new P;function zy(){he.getLuminanceCoefficients(vl);let n=vl.x.toFixed(4),t=vl.y.toFixed(4),e=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function Gy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function oa(n){return n!==""}function Yd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(n){return n.replace(Wy,Xy)}var $y=new Map;function Xy(n,t){let e=ne[t];if(e===void 0){let i=$y.get(t);if(i!==void 0)e=ne[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wh(e)}var qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(n){return n.replace(qy,Yy)}function Yy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Zy={[Zr]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function Ky(n){return Zy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jy={[Oi]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function jy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Jy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qy={[ls]:"ENVMAP_MODE_REFRACTION"};function tx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ex={[zc]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[ud]:"ENVMAP_BLENDING_ADD"};function nx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ex[n.combine]||"ENVMAP_BLENDING_NONE"}function ix(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function sx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ky(e),c=jy(e),h=tx(e),d=nx(e),u=ix(e),f=Hy(e),g=Gy(r),M=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oa).join(`
`),p.length>0&&(p+=`
`)):(m=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),p=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?ne.tonemapping_pars_fragment:"",e.toneMapping!==kn?ky("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,By("linearToOutputTexel",e.outputColorSpace),zy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),a=wh(a),a=Yd(a,e),a=Zd(a,e),o=wh(o),o=Yd(o,e),o=Zd(o,e),a=Kd(a),o=Kd(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=v+m+a,_=v+p+o,S=$d(s,s.VERTEX_SHADER,E),w=$d(s,s.FRAGMENT_SHADER,_);s.attachShader(M,S),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(F){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(w)||"",k=B.trim(),K=z.trim(),J=L.trim(),ht=!0,j=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ht=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,S,w);else{let it=qd(s,S,"vertex"),at=qd(s,w,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+it+`
`+at)}else k!==""?Wt("WebGLProgram: Program Info Log:",k):(K===""||J==="")&&(j=!1);j&&(F.diagnostics={runnable:ht,programLog:k,vertexShader:{log:K,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(S),s.deleteShader(w),y=new er(s,M),T=Vy(s,M)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,Fy)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dy++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=w,this}var rx=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ah(t),e.set(t,i)),i}},Ah=class{constructor(t){this.id=rx++,this.code=t,this.usedTimes=0}};function ax(n){return n===Hi||n===na||n===ia}function ox(n,t,e,i,s,r){let a=new Os,o=new Th,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,T,R,F,B,z){let L=F.fog,k=B.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ht=t.get(y.envMap||K,J),j=ht&&ht.mapping===Kr?ht.image.height:null,it=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Wt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let at=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ft=at!==void 0?at.length:0,Rt=0;k.morphAttributes.position!==void 0&&(Rt=1),k.morphAttributes.normal!==void 0&&(Rt=2),k.morphAttributes.color!==void 0&&(Rt=3);let de,ie,ce,tt;if(it){let Ce=ei[it];de=Ce.vertexShader,ie=Ce.fragmentShader}else{de=y.vertexShader,ie=y.fragmentShader;let Ce=o.getVertexShaderStage(y),xe=o.getFragmentShaderStage(y);o.update(y,Ce,xe),ce=Ce.id,tt=xe.id}let rt=n.getRenderTarget(),X=n.state.buffers.depth.getReversed(),Z=B.isInstancedMesh===!0,nt=B.isBatchedMesh===!0,mt=!!y.map,Dt=!!y.matcap,$=!!ht,q=!!y.aoMap,ot=!!y.lightMap,ut=!!y.bumpMap&&y.wireframe===!1,ft=!!y.normalMap,Gt=!!y.displacementMap,Vt=!!y.emissiveMap,Yt=!!y.metalnessMap,Jt=!!y.roughnessMap,I=y.anisotropy>0,ye=y.clearcoat>0,oe=y.dispersion>0,C=y.retroreflectivity>0,x=y.iridescence>0,O=y.sheen>0,W=y.transmission>0,Q=I&&!!y.anisotropyMap,yt=ye&&!!y.clearcoatMap,xt=ye&&!!y.clearcoatNormalMap,et=ye&&!!y.clearcoatRoughnessMap,lt=x&&!!y.iridescenceMap,vt=x&&!!y.iridescenceThicknessMap,kt=O&&!!y.sheenColorMap,Et=O&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,zt=!!y.specularColorMap,Xt=!!y.specularIntensityMap,jt=W&&!!y.transmissionMap,N=W&&!!y.thicknessMap,St=!!y.gradientMap,st=!!y.alphaMap,bt=y.alphaTest>0,Ct=!!y.alphaHash,dt=!!y.extensions,Ht=kn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ht=n.toneMapping);let Bt={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:de,fragmentShader:ie,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:nt,batchingColor:nt&&B._colorsTexture!==null,instancing:Z,instancingColor:Z&&B.instanceColor!==null,instancingMorph:Z&&B.morphTexture!==null,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:mt,matcap:Dt,envMap:$,envMapMode:$&&ht.mapping,envMapCubeUVHeight:j,aoMap:q,lightMap:ot,bumpMap:ut,normalMap:ft,displacementMap:Gt,emissiveMap:Vt,normalMapObjectSpace:ft&&y.normalMapType===pd,normalMapTangentSpace:ft&&y.normalMapType===gl,packedNormalMap:ft&&y.normalMapType===gl&&ax(y.normalMap.format),metalnessMap:Yt,roughnessMap:Jt,anisotropy:I,anisotropyMap:Q,clearcoat:ye,clearcoatMap:yt,clearcoatNormalMap:xt,clearcoatRoughnessMap:et,dispersion:oe,retroreflection:C,iridescence:x,iridescenceMap:lt,iridescenceThicknessMap:vt,sheen:O,sheenColorMap:kt,sheenRoughnessMap:Et,specularMap:Mt,specularColorMap:zt,specularIntensityMap:Xt,transmission:W,transmissionMap:jt,thicknessMap:N,gradientMap:St,opaque:y.transparent===!1&&y.blending===Ks&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:bt,alphaHash:Ct,combine:y.combine,mapUv:mt&&g(y.map.channel),aoMapUv:q&&g(y.aoMap.channel),lightMapUv:ot&&g(y.lightMap.channel),bumpMapUv:ut&&g(y.bumpMap.channel),normalMapUv:ft&&g(y.normalMap.channel),displacementMapUv:Gt&&g(y.displacementMap.channel),emissiveMapUv:Vt&&g(y.emissiveMap.channel),metalnessMapUv:Yt&&g(y.metalnessMap.channel),roughnessMapUv:Jt&&g(y.roughnessMap.channel),anisotropyMapUv:Q&&g(y.anisotropyMap.channel),clearcoatMapUv:yt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(y.sheenRoughnessMap.channel),specularMapUv:Mt&&g(y.specularMap.channel),specularColorMapUv:zt&&g(y.specularColorMap.channel),specularIntensityMapUv:Xt&&g(y.specularIntensityMap.channel),transmissionMapUv:jt&&g(y.transmissionMap.channel),thicknessMapUv:N&&g(y.thicknessMap.channel),alphaMapUv:st&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ft||I),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(mt||st),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&ft===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:X,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Rt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:mt&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:Vt&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:dt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&y.extensions.multiDraw===!0||nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(T,y),v(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function E(y){let T=f[y.type],R;if(T){let F=ei[T];R=Ld.clone(F.uniforms)}else R=y.uniforms;return R}function _(y,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new sx(n,T,y,s),c.push(R),h.set(T,R)),R}function S(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function A(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:E,acquireProgram:_,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function lx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function cx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function jd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,m,p){let v=n[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},n[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=a(u),v.groupOrder=M,v.renderOrder=u.renderOrder,v.z=m,v.group=p),t++,v}function l(u,f,g,M,m,p,v){v.reversedDepth===!0&&(m=-m);let E=o(u,f,g,M,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,f,g,M,m,p){let v=o(u,f,g,M,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||cx),i.length>1&&i.sort(f||jd),s.length>1&&s.sort(f||jd)}function d(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function hx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Qd,n.set(i,[a])):s>=r.length?(a=new Qd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ux(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new se};break;case"SpotLight":e={position:new P,direction:new P,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function dx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var fx=0;function px(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function mx(n){let t=new ux,e=dx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new Pe,a=new Pe;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,v=0,E=0,_=0,S=0,w=0,A=0,y=0,T=0,R=0;c.sort(px);for(let B=0,z=c.length;B<z;B++){let L=c[B],k=L.color,K=L.intensity,J=L.distance,ht=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Hi?ht=L.shadow.map.texture:ht=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=k.r*K,d+=k.g*K,u+=k.b*K;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],K);R++}else if(L.isSunLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,at=e.get(L);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[g]=at,i.sunShadowMap[g]=ht;let Ft=it.getViewportCount();for(let Rt=0;Rt<Ft;Rt++)i.sunShadowMatrix[M+Rt]=it.getMatrix(Rt),i.sunShadowCascade[M+Rt]=it._cascadeData[Rt];M+=Ft,g++}i.sun[f]=j,f++}else if(L.isDirectionalLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,at=e.get(L);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,i.directionalShadow[m]=at,i.directionalShadowMap[m]=ht,i.directionalShadowMatrix[m]=L.shadow.matrix,S++}i.directional[m]=j,m++}else if(L.isSpotLight){let j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(k).multiplyScalar(K),j.distance=J,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[v]=j;let it=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,it.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=it.matrix,L.castShadow){let at=e.get(L);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,i.spotShadow[v]=at,i.spotShadowMap[v]=ht,A++}v++}else if(L.isRectAreaLight){let j=t.get(L);j.color.copy(k).multiplyScalar(K),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=j,E++}else if(L.isPointLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){let it=L.shadow,at=e.get(L);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,at.shadowCameraNear=it.camera.near,at.shadowCameraFar=it.camera.far,i.pointShadow[p]=at,i.pointShadowMap[p]=ht,i.pointShadowMatrix[p]=L.shadow.matrix,w++}i.point[p]=j,p++}else if(L.isHemisphereLight){let j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(K),j.groundColor.copy(L.groundColor).multiplyScalar(K),i.hemi[_]=j,_++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==v||F.rectAreaLength!==E||F.hemiLength!==_||F.numSunShadows!==g||F.numDirectionalShadows!==S||F.numPointShadows!==w||F.numSpotShadows!==A||F.numSpotMaps!==y||F.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=E,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=v,F.rectAreaLength=E,F.hemiLength=_,F.numSunShadows=g,F.numDirectionalShadows=S,F.numPointShadows=w,F.numSpotShadows=A,F.numSpotMaps=y,F.numLightProbes=R,i.version=fx++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let _=c[v];if(_.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(_.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let S=i.rectArea[M];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function tf(n){let t=new mx(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function gx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new tf(n),t.set(s,[o])):r>=a.length?(o=new tf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],vx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ef=new Pe,aa=new P,vh=new P;function Mx(n,t,e){let i=new zs,s=new pt,r=new pt,a=new Fe,o=new po,l=new mo,c={},h=e.maxTextureSize,d={[Bi]:un,[un]:Bi,[jn]:jn},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:_x,fragmentShader:yx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new He(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let p=this.type;this.render=function(w,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Po&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Qn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=p!==this.type;z&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=w.length;L<k;L++){let K=w[L],J=K.shadow;if(J===void 0){Wt("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ht=J.getFrameExtents();s.multiply(ht),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,J.mapSize.y=r.y));let j=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=j,J.map===null||z===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Zs){if(K.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new fn(s.x,s.y,{format:Hi,type:Gn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new Ii(s.x,s.y,Hn),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=Kn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ke,J.map.depthTexture.magFilter=ke}else K.isPointLight?(J.map=new Sl(s.x),J.map.depthTexture=new ro(s.x,zn)):(J.map=new fn(s.x,s.y),J.map.depthTexture=new Ii(s.x,s.y,zn)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=Kn,this.type===Zr?(J.map.depthTexture.compareFunction=j?yl:_l,J.map.depthTexture.minFilter=Qe,J.map.depthTexture.magFilter=Qe):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=ke,J.map.depthTexture.magFilter=ke);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let it=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,y);for(let at=0;at<it;at++){let Ft=J.getCamera(at);if(K.isPointLight){let Rt=J.camera,de=J.matrix,ie=K.distance||Rt.far;ie!==Rt.far&&(Rt.far=ie,Rt.updateProjectionMatrix()),aa.setFromMatrixPosition(K.matrixWorld),Rt.position.copy(aa),vh.copy(Rt.position),vh.add(xx[at]),Rt.up.copy(vx[at]),Rt.lookAt(vh),Rt.updateMatrixWorld(),de.makeTranslation(-aa.x,-aa.y,-aa.z),ef.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(ef,Rt.coordinateSystem,Rt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,at),n.clear();else{at===0&&(n.setRenderTarget(J.map),n.clear());let Rt=J.getViewport(at);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),B.viewport(a)}i=J.getFrustum(at),_(A,y,Ft,K,this.type)}J.isPointLightShadow!==!0&&this.type===Zs&&v(J,y),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,R,F)};function v(w,A){let y=t.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new fn(s.x,s.y,{format:Hi,type:Gn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,y,u,M,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,y,f,M,null)}function E(w,A,y,T){let R=null,F=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)R=F;else if(R=y.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=R.uuid,z=A.uuid,L=c[B];L===void 0&&(L={},c[B]=L);let k=L[z];k===void 0&&(k=R.clone(),L[z]=k,A.addEventListener("dispose",S)),R=k}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Zs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=n.properties.get(R);B.light=y}return R}function _(w,A,y,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Zs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let z=t.update(w),L=w.material;if(Array.isArray(L)){let k=z.groups;for(let K=0,J=k.length;K<J;K++){let ht=k[K],j=L[ht.materialIndex];if(j&&j.visible){let it=E(w,j,T,R);w.onBeforeShadow(n,w,A,y,z,it,ht),n.renderBufferDirect(y,null,z,it,w,ht),w.onAfterShadow(n,w,A,y,z,it,ht)}}}else if(L.visible){let k=E(w,L,T,R);w.onBeforeShadow(n,w,A,y,z,k,null),n.renderBufferDirect(y,null,z,k,w,null),w.onAfterShadow(n,w,A,y,z,k,null)}}let B=w.children;for(let z=0,L=B.length;z<L;z++)_(B[z],A,y,T,R)}function S(w){w.target.removeEventListener("dispose",S);for(let y in c){let T=c[y],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Sx(n,t){function e(){let N=!1,St=new Fe,st=null,bt=new Fe(0,0,0,0);return{setMask:function(Ct){st!==Ct&&!N&&(n.colorMask(Ct,Ct,Ct,Ct),st=Ct)},setLocked:function(Ct){N=Ct},setClear:function(Ct,dt,Ht,Bt,Ce){Ce===!0&&(Ct*=Bt,dt*=Bt,Ht*=Bt),St.set(Ct,dt,Ht,Bt),bt.equals(St)===!1&&(n.clearColor(Ct,dt,Ht,Bt),bt.copy(St))},reset:function(){N=!1,st=null,bt.set(-1,0,0,0)}}}function i(){let N=!1,St=!1,st=null,bt=null,Ct=null;return{setReversed:function(dt){if(St!==dt){let Ht=t.get("EXT_clip_control");dt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),St=dt;let Bt=Ct;Ct=null,this.setClear(Bt)}},getReversed:function(){return St},setTest:function(dt){dt?rt(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(dt){st!==dt&&!N&&(n.depthMask(dt),st=dt)},setFunc:function(dt){if(St&&(dt=Td[dt]),bt!==dt){switch(dt){case Va:n.depthFunc(n.NEVER);break;case Wa:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case qa:n.depthFunc(n.GEQUAL);break;case Ya:n.depthFunc(n.GREATER);break;case Za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=dt}},setLocked:function(dt){N=dt},setClear:function(dt){Ct!==dt&&(Ct=dt,St&&(dt=1-dt),n.clearDepth(dt))},reset:function(){N=!1,st=null,bt=null,Ct=null,St=!1}}}function s(){let N=!1,St=null,st=null,bt=null,Ct=null,dt=null,Ht=null,Bt=null,Ce=null;return{setTest:function(xe){N||(xe?rt(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(xe){St!==xe&&!N&&(n.stencilMask(xe),St=xe)},setFunc:function(xe,Fn,Xn){(st!==xe||bt!==Fn||Ct!==Xn)&&(n.stencilFunc(xe,Fn,Xn),st=xe,bt=Fn,Ct=Xn)},setOp:function(xe,Fn,Xn){(dt!==xe||Ht!==Fn||Bt!==Xn)&&(n.stencilOp(xe,Fn,Xn),dt=xe,Ht=Fn,Bt=Xn)},setLocked:function(xe){N=xe},setClear:function(xe){Ce!==xe&&(n.clearStencil(xe),Ce=xe)},reset:function(){N=!1,St=null,st=null,bt=null,Ct=null,dt=null,Ht=null,Bt=null,Ce=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,v=null,E=null,_=null,S=null,w=null,A=null,y=new se(0,0,0),T=0,R=!1,F=null,B=null,z=null,L=null,k=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,ht=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=ht>=1):j.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=ht>=2);let it=null,at={},Ft=n.getParameter(n.SCISSOR_BOX),Rt=n.getParameter(n.VIEWPORT),de=new Fe().fromArray(Ft),ie=new Fe().fromArray(Rt);function ce(N,St,st,bt){let Ct=new Uint8Array(4),dt=n.createTexture();n.bindTexture(N,dt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<st;Ht++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(St+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return dt}let tt={};tt[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),tt[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),tt[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(Fs),ut(!1),ft(Dc),rt(n.CULL_FACE),q(Qn);function rt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function X(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Z(N,St){return u[N]!==St?(n.bindFramebuffer(N,St),u[N]=St,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=St),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=St),!0):!1}function nt(N,St){let st=g,bt=!1;if(N){st=f.get(St),st===void 0&&(st=[],f.set(St,st));let Ct=N.textures;if(st.length!==Ct.length||st[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Ht=Ct.length;dt<Ht;dt++)st[dt]=n.COLOR_ATTACHMENT0+dt;st.length=Ct.length,bt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,bt=!0);bt&&n.drawBuffers(st)}function mt(N){return M!==N?(n.useProgram(N),M=N,!0):!1}let Dt={[os]:n.FUNC_ADD,[qu]:n.FUNC_SUBTRACT,[Yu]:n.FUNC_REVERSE_SUBTRACT};Dt[Zu]=n.MIN,Dt[Ku]=n.MAX;let $={[Ju]:n.ZERO,[ju]:n.ONE,[Qu]:n.SRC_COLOR,[Oc]:n.SRC_ALPHA,[rd]:n.SRC_ALPHA_SATURATE,[id]:n.DST_COLOR,[ed]:n.DST_ALPHA,[td]:n.ONE_MINUS_SRC_COLOR,[kc]:n.ONE_MINUS_SRC_ALPHA,[sd]:n.ONE_MINUS_DST_COLOR,[nd]:n.ONE_MINUS_DST_ALPHA,[ad]:n.CONSTANT_COLOR,[od]:n.ONE_MINUS_CONSTANT_COLOR,[ld]:n.CONSTANT_ALPHA,[cd]:n.ONE_MINUS_CONSTANT_ALPHA};function q(N,St,st,bt,Ct,dt,Ht,Bt,Ce,xe){if(N===Qn){m===!0&&(X(n.BLEND),m=!1);return}if(m===!1&&(rt(n.BLEND),m=!0),N!==Xu){if(N!==p||xe!==R){if((v!==os||S!==os)&&(n.blendEquation(n.FUNC_ADD),v=os,S=os),xe)switch(N){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nc:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uc:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",N);break}E=null,_=null,w=null,A=null,y.set(0,0,0),T=0,p=N,R=xe}return}Ct=Ct||St,dt=dt||st,Ht=Ht||bt,(St!==v||Ct!==S)&&(n.blendEquationSeparate(Dt[St],Dt[Ct]),v=St,S=Ct),(st!==E||bt!==_||dt!==w||Ht!==A)&&(n.blendFuncSeparate($[st],$[bt],$[dt],$[Ht]),E=st,_=bt,w=dt,A=Ht),(Bt.equals(y)===!1||Ce!==T)&&(n.blendColor(Bt.r,Bt.g,Bt.b,Ce),y.copy(Bt),T=Ce),p=N,R=!1}function ot(N,St){N.side===jn?X(n.CULL_FACE):rt(n.CULL_FACE);let st=N.side===un;St&&(st=!st),ut(st),N.blending===Ks&&N.transparent===!1?q(Qn):q(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let bt=N.stencilWrite;o.setTest(bt),bt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(N){F!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),F=N)}function ft(N){N!==Wu?(rt(n.CULL_FACE),N!==B&&(N===Dc?n.cullFace(n.BACK):N===$u?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),B=N}function Gt(N){N!==z&&(J&&n.lineWidth(N),z=N)}function Vt(N,St,st){N?(rt(n.POLYGON_OFFSET_FILL),(L!==St||k!==st)&&(L=St,k=st,a.getReversed()&&(St=-St),n.polygonOffset(St,st))):X(n.POLYGON_OFFSET_FILL)}function Yt(N){N?rt(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function Jt(N){N===void 0&&(N=n.TEXTURE0+K-1),it!==N&&(n.activeTexture(N),it=N)}function I(N,St,st){st===void 0&&(it===null?st=n.TEXTURE0+K-1:st=it);let bt=at[st];bt===void 0&&(bt={type:void 0,texture:void 0},at[st]=bt),(bt.type!==N||bt.texture!==St)&&(it!==st&&(n.activeTexture(st),it=st),n.bindTexture(N,St||tt[N]),bt.type=N,bt.texture=St)}function ye(){let N=at[it];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function x(){try{n.texSubImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function O(){try{n.texSubImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function yt(){try{n.texStorage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function xt(){try{n.texStorage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function et(){try{n.texImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function lt(){try{n.texImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function vt(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function kt(N,St){d[N]!==St&&(n.pixelStorei(N,St),d[N]=St)}function Et(N){de.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function Mt(N){ie.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function zt(N,St){let st=c.get(St);st===void 0&&(st=new WeakMap,c.set(St,st));let bt=st.get(N);bt===void 0&&(bt=n.getUniformBlockIndex(St,N.name),st.set(N,bt))}function Xt(N,St){let bt=c.get(St).get(N);l.get(St)!==bt&&(n.uniformBlockBinding(St,bt,N.__bindingPointIndex),l.set(St,bt))}function jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,at={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,v=null,E=null,_=null,S=null,w=null,A=null,y=new se(0,0,0),T=0,R=!1,F=null,B=null,z=null,L=null,k=null,de.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:X,bindFramebuffer:Z,drawBuffers:nt,useProgram:mt,setBlending:q,setMaterial:ot,setFlipSided:ut,setCullFace:ft,setLineWidth:Gt,setPolygonOffset:Vt,setScissorTest:Yt,activeTexture:Jt,bindTexture:I,unbindTexture:ye,compressedTexImage2D:oe,compressedTexImage3D:C,texImage2D:et,texImage3D:lt,pixelStorei:kt,getParameter:vt,updateUBOMapping:zt,uniformBlockBinding:Xt,texStorage2D:yt,texStorage3D:xt,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:Q,scissor:Et,viewport:Mt,reset:jt}}function bx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,x){return g?new OffscreenCanvas(C,x):Mr("canvas")}function m(C,x,O){let W=1,Q=oe(C);if((Q.width>O||Q.height>O)&&(W=O/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let yt=Math.floor(W*Q.width),xt=Math.floor(W*Q.height);u===void 0&&(u=M(yt,xt));let et=x?M(yt,xt):u;return et.width=yt,et.height=xt,et.getContext("2d").drawImage(C,0,0,yt,xt),Wt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+yt+"x"+xt+")."),et}else return"data"in C&&Wt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,x,O,W,Q,yt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xt;W&&(xt=t.get("EXT_texture_norm16"),xt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=x;if(x===n.RED&&(O===n.FLOAT&&(et=n.R32F),O===n.HALF_FLOAT&&(et=n.R16F),O===n.UNSIGNED_BYTE&&(et=n.R8),O===n.UNSIGNED_SHORT&&xt&&(et=xt.R16_EXT),O===n.SHORT&&xt&&(et=xt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(et=n.R8UI),O===n.UNSIGNED_SHORT&&(et=n.R16UI),O===n.UNSIGNED_INT&&(et=n.R32UI),O===n.BYTE&&(et=n.R8I),O===n.SHORT&&(et=n.R16I),O===n.INT&&(et=n.R32I)),x===n.RG&&(O===n.FLOAT&&(et=n.RG32F),O===n.HALF_FLOAT&&(et=n.RG16F),O===n.UNSIGNED_BYTE&&(et=n.RG8),O===n.UNSIGNED_SHORT&&xt&&(et=xt.RG16_EXT),O===n.SHORT&&xt&&(et=xt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(et=n.RG8UI),O===n.UNSIGNED_SHORT&&(et=n.RG16UI),O===n.UNSIGNED_INT&&(et=n.RG32UI),O===n.BYTE&&(et=n.RG8I),O===n.SHORT&&(et=n.RG16I),O===n.INT&&(et=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(et=n.RGB8UI),O===n.UNSIGNED_SHORT&&(et=n.RGB16UI),O===n.UNSIGNED_INT&&(et=n.RGB32UI),O===n.BYTE&&(et=n.RGB8I),O===n.SHORT&&(et=n.RGB16I),O===n.INT&&(et=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),O===n.UNSIGNED_INT&&(et=n.RGBA32UI),O===n.BYTE&&(et=n.RGBA8I),O===n.SHORT&&(et=n.RGBA16I),O===n.INT&&(et=n.RGBA32I)),x===n.RGB&&(O===n.UNSIGNED_SHORT&&xt&&(et=xt.RGB16_EXT),O===n.SHORT&&xt&&(et=xt.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),x===n.RGBA){let lt=yt?vr:he.getTransfer(Q);O===n.FLOAT&&(et=n.RGBA32F),O===n.HALF_FLOAT&&(et=n.RGBA16F),O===n.UNSIGNED_BYTE&&(et=lt===Me?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&xt&&(et=xt.RGBA16_EXT),O===n.SHORT&&xt&&(et=xt.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(C,x){let O;return C?x===null||x===zn||x===js?O=n.DEPTH24_STENCIL8:x===Hn?O=n.DEPTH32F_STENCIL8:x===Js&&(O=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===js?O=n.DEPTH_COMPONENT24:x===Hn?O=n.DEPTH_COMPONENT32F:x===Js&&(O=n.DEPTH_COMPONENT16),O}function w(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==ke&&C.minFilter!==Qe?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){let x=C.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(C){let x=C.target;x.removeEventListener("dispose",y),F(x)}function T(C){let x=i.get(C);if(x.__webglInit===void 0)return;let O=C.source,W=f.get(O);if(W){let Q=W[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(C),Object.keys(W).length===0&&f.delete(O)}i.remove(C)}function R(C){let x=i.get(C);n.deleteTexture(x.__webglTexture);let O=C.source,W=f.get(O);delete W[x.__cacheKey],a.memory.textures--}function F(C){let x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Q=0;Q<x.__webglFramebuffer[W].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[W][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=C.textures;for(let W=0,Q=O.length;W<Q;W++){let yt=i.get(O[W]);yt.__webglTexture&&(n.deleteTexture(yt.__webglTexture),a.memory.textures--),i.remove(O[W])}i.remove(C)}let B=0;function z(){B=0}function L(){return B}function k(C){B=C}function K(){let C=B;return C>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,C}function J(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function ht(C,x){let O=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let W=C.image;if(W===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,C,x);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function j(C,x){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){X(O,C,x);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function it(C,x){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){X(O,C,x);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function at(C,x){let O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Z(O,C,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}let Ft={[Ka]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},Rt={[ke]:n.NEAREST,[dd]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[Fo]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},de={[gd]:n.NEVER,[Md]:n.ALWAYS,[_d]:n.LESS,[_l]:n.LEQUAL,[yd]:n.EQUAL,[yl]:n.GEQUAL,[xd]:n.GREATER,[vd]:n.NOTEQUAL};function ie(C,x){if(x.type===Hn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Qe||x.magFilter===Fo||x.magFilter===Jr||x.magFilter===ki||x.minFilter===Qe||x.minFilter===Fo||x.minFilter===Jr||x.minFilter===ki)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Ft[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Ft[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Ft[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Rt[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Rt[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,de[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ke||x.minFilter!==Jr&&x.minFilter!==ki||x.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ce(C,x){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));let W=x.source,Q=f.get(W);Q===void 0&&(Q={},f.set(W,Q));let yt=J(x);if(yt!==C.__cacheKey){Q[yt]===void 0&&(Q[yt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[yt].usedTimes++;let xt=Q[C.__cacheKey];xt!==void 0&&(Q[C.__cacheKey].usedTimes--,xt.usedTimes===0&&R(x)),C.__cacheKey=yt,C.__webglTexture=Q[yt].texture}return O}function tt(C,x,O){return Math.floor(Math.floor(C/O)/x)}function rt(C,x,O,W){let yt=C.updateRanges;if(yt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,O,W,x.data);else{yt.sort((kt,Et)=>kt.start-Et.start);let xt=0;for(let kt=1;kt<yt.length;kt++){let Et=yt[xt],Mt=yt[kt],zt=Et.start+Et.count,Xt=tt(Mt.start,x.width,4),jt=tt(Et.start,x.width,4);Mt.start<=zt+1&&Xt===jt&&tt(Mt.start+Mt.count-1,x.width,4)===Xt?Et.count=Math.max(Et.count,Mt.start+Mt.count-Et.start):(++xt,yt[xt]=Mt)}yt.length=xt+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),lt=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let kt=0,Et=yt.length;kt<Et;kt++){let Mt=yt[kt],zt=Math.floor(Mt.start/4),Xt=Math.ceil(Mt.count/4),jt=zt%x.width,N=Math.floor(zt/x.width),St=Xt,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,jt,N,St,st,O,W,x.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function X(C,x,O){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);let Q=ce(C,x),yt=x.source;e.bindTexture(W,C.__webglTexture,n.TEXTURE0+O);let xt=i.get(yt);if(yt.version!==xt.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let st=he.getPrimaries(he.workingColorSpace),bt=x.colorSpace===mi?null:he.getPrimaries(x.colorSpace),Ct=x.colorSpace===mi||st===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let lt=m(x.image,!1,s.maxTextureSize);lt=ye(x,lt);let vt=r.convert(x.format,x.colorSpace),kt=r.convert(x.type),Et=_(x.internalFormat,vt,kt,x.normalized,x.colorSpace,x.isVideoTexture);ie(W,x);let Mt,zt=x.mipmaps,Xt=x.isVideoTexture!==!0,jt=xt.__version===void 0||Q===!0,N=yt.dataReady,St=w(x,lt);if(x.isDepthTexture)Et=S(x.format===zi,x.type),jt&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,Et,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Et,lt.width,lt.height,0,vt,kt,null));else if(x.isDataTexture)if(zt.length>0){Xt&&jt&&e.texStorage2D(n.TEXTURE_2D,St,Et,zt[0].width,zt[0].height);for(let st=0,bt=zt.length;st<bt;st++)Mt=zt[st],Xt?N&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Mt.width,Mt.height,vt,kt,Mt.data):e.texImage2D(n.TEXTURE_2D,st,Et,Mt.width,Mt.height,0,vt,kt,Mt.data);x.generateMipmaps=!1}else Xt?(jt&&e.texStorage2D(n.TEXTURE_2D,St,Et,lt.width,lt.height),N&&rt(x,lt,vt,kt)):e.texImage2D(n.TEXTURE_2D,0,Et,lt.width,lt.height,0,vt,kt,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xt&&jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Et,zt[0].width,zt[0].height,lt.depth);for(let st=0,bt=zt.length;st<bt;st++)if(Mt=zt[st],x.format!==Rn)if(vt!==null)if(Xt){if(N)if(x.layerUpdates.size>0){let Ct=ch(Mt.width,Mt.height,x.format,x.type);for(let dt of x.layerUpdates){let Ht=Mt.data.subarray(dt*Ct/Mt.data.BYTES_PER_ELEMENT,(dt+1)*Ct/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,dt,Mt.width,Mt.height,1,vt,Ht)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Mt.width,Mt.height,lt.depth,vt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Et,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Mt.width,Mt.height,lt.depth,vt,kt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Et,Mt.width,Mt.height,lt.depth,0,vt,kt,Mt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Xt&&jt&&e.texStorage2D(n.TEXTURE_2D,St,Et,zt[0].width,zt[0].height);for(let st=0,bt=zt.length;st<bt;st++)Mt=zt[st],x.format!==Rn?vt!==null?Xt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Et,Mt.width,Mt.height,0,Mt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Mt.width,Mt.height,vt,kt,Mt.data):e.texImage2D(n.TEXTURE_2D,st,Et,Mt.width,Mt.height,0,vt,kt,Mt.data)}else if(x.isDataArrayTexture)if(Xt){if(jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Et,lt.width,lt.height,lt.depth),N)if(x.layerUpdates.size>0){let st=ch(lt.width,lt.height,x.format,x.type);for(let bt of x.layerUpdates){let Ct=lt.data.subarray(bt*st/lt.data.BYTES_PER_ELEMENT,(bt+1)*st/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,bt,lt.width,lt.height,1,vt,kt,Ct)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,vt,kt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,lt.width,lt.height,lt.depth,0,vt,kt,lt.data);else if(x.isData3DTexture)Xt?(jt&&e.texStorage3D(n.TEXTURE_3D,St,Et,lt.width,lt.height,lt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,vt,kt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Et,lt.width,lt.height,lt.depth,0,vt,kt,lt.data);else if(x.isFramebufferTexture){if(jt)if(Xt)e.texStorage2D(n.TEXTURE_2D,St,Et,lt.width,lt.height);else{let st=lt.width,bt=lt.height;for(let Ct=0;Ct<St;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,Et,st,bt,0,vt,kt,null),st>>=1,bt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),lt.parentNode!==st){st.appendChild(lt),d.add(x),st.onpaint=bt=>{let Ct=bt.changedElements;for(let dt of d)Ct.includes(dt.image)&&(dt.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,lt);else{let Ct=n.RGBA,dt=n.RGBA,Ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ct,dt,Ht,lt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Xt&&jt){let st=oe(zt[0]);e.texStorage2D(n.TEXTURE_2D,St,Et,st.width,st.height)}for(let st=0,bt=zt.length;st<bt;st++)Mt=zt[st],Xt?N&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,vt,kt,Mt):e.texImage2D(n.TEXTURE_2D,st,Et,vt,kt,Mt);x.generateMipmaps=!1}else if(Xt){if(jt){let st=oe(lt);e.texStorage2D(n.TEXTURE_2D,St,Et,st.width,st.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,kt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Et,vt,kt,lt);p(x)&&v(W),xt.__version=yt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Z(C,x,O){if(x.image.length!==6)return;let W=ce(C,x),Q=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+O);let yt=i.get(Q);if(Q.version!==yt.__version||W===!0){e.activeTexture(n.TEXTURE0+O);let xt=he.getPrimaries(he.workingColorSpace),et=x.colorSpace===mi?null:he.getPrimaries(x.colorSpace),lt=x.colorSpace===mi||xt===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let vt=x.isCompressedTexture||x.image[0].isCompressedTexture,kt=x.image[0]&&x.image[0].isDataTexture,Et=[];for(let dt=0;dt<6;dt++)!vt&&!kt?Et[dt]=m(x.image[dt],!0,s.maxCubemapSize):Et[dt]=kt?x.image[dt].image:x.image[dt],Et[dt]=ye(x,Et[dt]);let Mt=Et[0],zt=r.convert(x.format,x.colorSpace),Xt=r.convert(x.type),jt=_(x.internalFormat,zt,Xt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,St=yt.__version===void 0||W===!0,st=Q.dataReady,bt=w(x,Mt);ie(n.TEXTURE_CUBE_MAP,x);let Ct;if(vt){N&&St&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,jt,Mt.width,Mt.height);for(let dt=0;dt<6;dt++){Ct=Et[dt].mipmaps;for(let Ht=0;Ht<Ct.length;Ht++){let Bt=Ct[Ht];x.format!==Rn?zt!==null?N?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,0,0,Bt.width,Bt.height,zt,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,jt,Bt.width,Bt.height,0,Bt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,0,0,Bt.width,Bt.height,zt,Xt,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,jt,Bt.width,Bt.height,0,zt,Xt,Bt.data)}}}else{if(Ct=x.mipmaps,N&&St){Ct.length>0&&bt++;let dt=oe(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,jt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(kt){N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Et[dt].width,Et[dt].height,zt,Xt,Et[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,jt,Et[dt].width,Et[dt].height,0,zt,Xt,Et[dt].data);for(let Ht=0;Ht<Ct.length;Ht++){let Ce=Ct[Ht].image[dt].image;N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,0,0,Ce.width,Ce.height,zt,Xt,Ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,jt,Ce.width,Ce.height,0,zt,Xt,Ce.data)}}else{N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,zt,Xt,Et[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,jt,zt,Xt,Et[dt]);for(let Ht=0;Ht<Ct.length;Ht++){let Bt=Ct[Ht];N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,0,0,zt,Xt,Bt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,jt,zt,Xt,Bt.image[dt])}}}p(x)&&v(n.TEXTURE_CUBE_MAP),yt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function nt(C,x,O,W,Q,yt){let xt=r.convert(O.format,O.colorSpace),et=r.convert(O.type),lt=_(O.internalFormat,xt,et,O.normalized,O.colorSpace),vt=i.get(x),kt=i.get(O);if(kt.__renderTarget=x,!vt.__hasExternalTextures){let Et=Math.max(1,x.width>>yt),Mt=Math.max(1,x.height>>yt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,yt,lt,Et,Mt,x.depth,0,xt,et,null):e.texImage2D(Q,yt,lt,Et,Mt,0,xt,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Jt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Q,kt.__webglTexture,0,Yt(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Q,kt.__webglTexture,yt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(C,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){let W=x.depthTexture,Q=W&&W.isDepthTexture?W.type:null,yt=S(x.stencilBuffer,Q),xt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Jt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(x),yt,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(x),yt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,yt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,C)}else{let W=x.textures;for(let Q=0;Q<W.length;Q++){let yt=W[Q],xt=r.convert(yt.format,yt.colorSpace),et=r.convert(yt.type),lt=_(yt.internalFormat,xt,et,yt.normalized,yt.colorSpace);Jt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt(x),lt,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt(x),lt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,lt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(C,x,O){let W=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(n.TEXTURE_CUBE_MAP,x.depthTexture);let vt=r.convert(x.depthTexture.format),kt=r.convert(x.depthTexture.type),Et;x.depthTexture.format===Kn?Et=n.DEPTH_COMPONENT24:x.depthTexture.format===zi&&(Et=n.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Et,x.width,x.height,0,vt,kt,null)}}else ht(x.depthTexture,0);let yt=Q.__webglTexture,xt=Yt(x),et=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,lt=x.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Kn)Jt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,et,yt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,lt,et,yt,0);else if(x.depthTexture.format===zi)Jt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,et,yt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,lt,et,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(C){let x=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=W}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)Dt(x.__webglFramebuffer[W],C,W);else{let W=C.texture.mipmaps;W&&W.length>0?Dt(x.__webglFramebuffer[0],C,0):Dt(x.__webglFramebuffer,C,0)}else if(O){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),mt(x.__webglDepthbuffer[W],C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,yt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,yt)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),mt(x.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,yt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,yt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function q(C,x,O){let W=i.get(C);x!==void 0&&nt(W.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&$(C)}function ot(C){let x=C.texture,O=i.get(C),W=i.get(x);C.addEventListener("dispose",y);let Q=C.textures,yt=C.isWebGLCubeRenderTarget===!0,xt=Q.length>1;if(xt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,a.memory.textures++),yt){O.__webglFramebuffer=[];for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[et]=[];for(let lt=0;lt<x.mipmaps.length;lt++)O.__webglFramebuffer[et][lt]=n.createFramebuffer()}else O.__webglFramebuffer[et]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let et=0;et<x.mipmaps.length;et++)O.__webglFramebuffer[et]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(xt)for(let et=0,lt=Q.length;et<lt;et++){let vt=i.get(Q[et]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Jt(C)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let et=0;et<Q.length;et++){let lt=Q[et];O.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[et]);let vt=r.convert(lt.format,lt.colorSpace),kt=r.convert(lt.type),Et=_(lt.internalFormat,vt,kt,lt.normalized,lt.colorSpace,C.isXRRenderTarget===!0),Mt=Yt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,Et,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,O.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(yt){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ie(n.TEXTURE_CUBE_MAP,x);for(let et=0;et<6;et++)if(x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)nt(O.__webglFramebuffer[et][lt],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,lt);else nt(O.__webglFramebuffer[et],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(x)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let et=0,lt=Q.length;et<lt;et++){let vt=Q[et],kt=i.get(vt),Et=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Et=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,kt.__webglTexture),ie(Et,vt),nt(O.__webglFramebuffer,C,vt,n.COLOR_ATTACHMENT0+et,Et,0),p(vt)&&v(Et)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,W.__webglTexture),ie(et,x),x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)nt(O.__webglFramebuffer[lt],C,x,n.COLOR_ATTACHMENT0,et,lt);else nt(O.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,et,0);p(x)&&v(et),e.unbindTexture()}C.depthBuffer&&$(C)}function ut(C){let x=C.textures;for(let O=0,W=x.length;O<W;O++){let Q=x[O];if(p(Q)){let yt=E(C),xt=i.get(Q).__webglTexture;e.bindTexture(yt,xt),v(yt),e.unbindTexture()}}}let ft=[],Gt=[];function Vt(C){if(C.samples>0){if(Jt(C)===!1){let x=C.textures,O=C.width,W=C.height,Q=n.COLOR_BUFFER_BIT,yt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(C),et=x.length>1;if(et)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let lt=C.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);let kt=i.get(x[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,kt,0)}n.blitFramebuffer(0,0,O,W,0,0,O,W,Q,n.NEAREST),l===!0&&(ft.length=0,Gt.length=0,ft.push(n.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ft.push(yt),Gt.push(yt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Gt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);let kt=i.get(x[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,kt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Yt(C){return Math.min(s.maxSamples,C.samples)}function Jt(C){let x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(C){let x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function ye(C,x){let O=C.colorSpace,W=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==xr&&O!==mi&&(he.getTransfer(O)===Me?(W!==Rn||Q!==pn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",O)),x}function oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=ht,this.setTexture2DArray=j,this.setTexture3D=it,this.setTextureCube=at,this.rebindTextures=q,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ex(n,t){function e(i,s=mi){let r,a=he.getTransfer(s);if(i===pn)return n.UNSIGNED_BYTE;if(i===No)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zc)return n.BYTE;if(i===Kc)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===Do)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===Gn)return n.HALF_FLOAT;if(i===Qc)return n.ALPHA;if(i===th)return n.RGB;if(i===Rn)return n.RGBA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===eh)return n.RED;if(i===Bo)return n.RED_INTEGER;if(i===Hi)return n.RG;if(i===Oo)return n.RG_INTEGER;if(i===ko)return n.RGBA_INTEGER;if(i===jr||i===Qr||i===ta||i===ea)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Ho||i===Go||i===Vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wo||i===$o||i===Xo||i===qo||i===Yo||i===na||i===Zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wo||i===$o)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qo)return r.COMPRESSED_R11_EAC;if(i===Yo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===na)return r.COMPRESSED_RG11_EAC;if(i===Zo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ko||i===Jo||i===jo||i===Qo||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ko)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===ul||i===dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===hl)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fl||i===pl||i===ia||i===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tx=`
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

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Rr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new bn({vertexShader:wx,fragmentShader:Tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends On{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new Ch,p={},v=e.getContextAttributes(),E=null,_=null,S=[],w=[],A=new pt,y=null,T=null,R=new an;R.viewport=new Fe;let F=new an;F.viewport=new Fe;let B=[R,F],z=new Co,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let rt=S[tt];return rt===void 0&&(rt=new ks,S[tt]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(tt){let rt=S[tt];return rt===void 0&&(rt=new ks,S[tt]=rt),rt.getGripSpace()},this.getHand=function(tt){let rt=S[tt];return rt===void 0&&(rt=new ks,S[tt]=rt),rt.getHandSpace()};function K(tt){let rt=w.indexOf(tt.inputSource);if(rt===-1)return;let X=S[rt];X!==void 0&&(X.update(tt.inputSource,tt.frame,c||a),X.dispatchEvent({type:tt.type,data:tt.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",ht);for(let tt=0;tt<S.length;tt++){let rt=w[tt];rt!==null&&(w[tt]=null,S[tt].disconnect(rt))}L=null,k=null,m.reset();for(let tt in p)delete p[tt];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,_=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),T!==null){let tt=T.camera;tt.fov=T.fov,tt.zoom=T.zoom,tt.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",ht),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,Z=null,nt=null;v.depth&&(nt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=v.stencil?zi:Kn,Z=v.stencil?js:zn);let mt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(mt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new fn(u.textureWidth,u.textureHeight,{format:Rn,type:pn,depthTexture:new Ii(u.textureWidth,u.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let X={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,X),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new fn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ht(tt){for(let rt=0;rt<tt.removed.length;rt++){let X=tt.removed[rt],Z=w.indexOf(X);Z>=0&&(w[Z]=null,S[Z].disconnect(X))}for(let rt=0;rt<tt.added.length;rt++){let X=tt.added[rt],Z=w.indexOf(X);if(Z===-1){for(let mt=0;mt<S.length;mt++)if(mt>=w.length){w.push(X),Z=mt;break}else if(w[mt]===null){w[mt]=X,Z=mt;break}if(Z===-1)break}let nt=S[Z];nt&&nt.connect(X)}}let j=new P,it=new P;function at(tt,rt,X){j.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(X.matrixWorld);let Z=j.distanceTo(it),nt=rt.projectionMatrix.elements,mt=X.projectionMatrix.elements,Dt=nt[14]/(nt[10]-1),$=nt[14]/(nt[10]+1),q=(nt[9]+1)/nt[5],ot=(nt[9]-1)/nt[5],ut=(nt[8]-1)/nt[0],ft=(mt[8]+1)/mt[0],Gt=Dt*ut,Vt=Dt*ft,Yt=Z/(-ut+ft),Jt=Yt*-ut;if(rt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Jt),tt.translateZ(Yt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),nt[10]===-1)tt.projectionMatrix.copy(rt.projectionMatrix),tt.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let I=Dt+Yt,ye=$+Yt,oe=Gt-Jt,C=Vt+(Z-Jt),x=q*$/ye*I,O=ot*$/ye*I;tt.projectionMatrix.makePerspective(oe,C,x,O,I,ye),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Ft(tt,rt){rt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(rt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let rt=tt.near,X=tt.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(X=m.depthFar)),z.near=F.near=R.near=rt,z.far=F.far=R.far=X,(L!==z.near||k!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,k=z.far),z.layers.mask=tt.layers.mask|6,R.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;let Z=tt.parent,nt=z.cameras;Ft(z,Z);for(let mt=0;mt<nt.length;mt++)Ft(nt[mt],Z);nt.length===2?at(z,R,F):z.projectionMatrix.copy(R.projectionMatrix),T===null&&tt.isPerspectiveCamera&&(T={camera:tt,fov:tt.fov,zoom:tt.zoom}),Rt(tt,z,Z)};function Rt(tt,rt,X){X===null?tt.matrix.copy(rt.matrixWorld):(tt.matrix.copy(X.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(rt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(rt.projectionMatrix),tt.projectionMatrixInverse.copy(rt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Us*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(tt){return p[tt]};let de=null;function ie(tt,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){let X=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Z=!1;X.length!==z.cameras.length&&(z.cameras.length=0,Z=!0);for(let $=0;$<X.length;$++){let q=X[$],ot=null;if(f!==null)ot=f.getViewport(q);else{let ft=d.getViewSubImage(u,q);ot=ft.viewport,$===0&&(t.setRenderTargetTextures(_,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(_))}let ut=B[$];ut===void 0&&(ut=new an,ut.layers.enable($),ut.viewport=new Fe,B[$]=ut),ut.matrix.fromArray(q.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(q.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ot.x,ot.y,ot.width,ot.height),$===0&&(z.matrix.copy(ut.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Z===!0&&z.cameras.push(ut)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let $=d.getDepthInformation(X[0]);$&&$.isValid&&$.texture&&m.init($,s.renderState)}if(nt&&nt.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let $=0;$<X.length;$++){let q=X[$].camera;if(q){let ot=p[q];ot||(ot=new Rr,p[q]=ot);let ut=d.getCameraImage(q);ot.sourceTexture=ut}}}}for(let X=0;X<S.length;X++){let Z=w[X],nt=S[X];Z!==null&&nt!==void 0&&nt.update(Z,rt,c||a)}de&&de(tt,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}let ce=new nf;ce.setAnimationLoop(ie),this.setAnimationLoop=function(tt){de=tt},this.dispose=function(){}}},Ax=new Pe,cf=new Zt;cf.set(-1,0,0,0,1,0,0,0,1);function Cx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ah(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),E=v.envMap,_=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rx(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let w=S.program;i.uniformBlockBinding(_,w)}function c(_,S){let w=s[_.id];w===void 0&&(m(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",v));let A=S.program;i.updateUBOMapping(_,A);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let S=d();_.__bindingPointIndex=S;let w=n.createBuffer(),A=_.__size,y=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=s[_.id],w=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let y=0,T=w.length;y<T;y++){let R=w[y];if(Array.isArray(R))for(let F=0,B=R.length;F<B;F++)f(R[F],y,F,A);else f(R,y,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,S,w,A){if(M(_,S,w,A)===!0){let y=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let F=0;F<T.length;F++){let B=T[F],z=p(B);g(B,_.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,_.__data)}}function g(_,S,w){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,w)}function M(_,S,w,A){let y=_.value,T=S+"_"+w;if(A[T]===void 0)return typeof y=="number"||typeof y=="boolean"?A[T]=y:ArrayBuffer.isView(y)?A[T]=y.slice():A[T]=y.clone(),!0;{let R=A[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(_){let S=_.uniforms,w=0,A=16;for(let T=0,R=S.length;T<R;T++){let F=Array.isArray(S[T])?S[T]:[S[T]];for(let B=0,z=F.length;B<z;B++){let L=F[B],k=Array.isArray(L.value)?L.value:[L.value];for(let K=0,J=k.length;K<J;K++){let ht=k[K],j=p(ht),it=w%A,at=it%j.boundary,Ft=it+at;w+=at,Ft!==0&&A-Ft<j.storage&&(w+=A-Ft),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=j.storage}}}let y=w%A;return y>0&&(w+=A-y),_.__size=w,_.__cache={},this}function p(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",_),S}function v(_){let S=_.target;S.removeEventListener("dispose",v);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Ix(){return ti===null&&(ti=new no(Px,16,16,Hi,Gn),ti.name="DFG_LUT",ti.minFilter=Qe,ti.magFilter=Qe,ti.wrapS=Zn,ti.wrapT=Zn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var bl=class{constructor(t={}){let{canvas:e=bd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let M=f,m=new Set([ko,Oo,Bo]),p=new Set([pn,zn,Js,js,No,Uo]),v=new Uint32Array(4),E=new Int32Array(4),_=new P,S=null,w=null,A=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,F=!1,B=null,z=null,L=null,k=null;this._outputColorSpace=je;let K=0,J=0,ht=null,j=-1,it=null,at=new Fe,Ft=new Fe,Rt=null,de=new se(0),ie=0,ce=e.width,tt=e.height,rt=1,X=null,Z=null,nt=new Fe(0,0,ce,tt),mt=new Fe(0,0,ce,tt),Dt=!1,$=new zs,q=!1,ot=!1,ut=new Pe,ft=new P,Gt=new Fe,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function Jt(){return ht===null?rt:1}let I=i;function ye(b,D){return e.getContext(b,D)}let oe,C,x,O,W,Q,yt,xt,et,lt,vt,kt,Et,Mt,zt,Xt,jt,N,St,st,bt,Ct,dt;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Fn,!1),I===null){let D="webgl2";if(I=ye(D,b),I===null)throw ye(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(b){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),qt("WebGLRenderer: "+b.message),b}function Ht(){oe=new O_(I),oe.init(),bt=new Ex(I,oe),C=new C_(I,oe,t,bt),x=new Sx(I,oe),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),z=I.createFramebuffer(),L=I.createFramebuffer(),k=I.createFramebuffer(),O=new H_(I),W=new lx,Q=new bx(I,oe,x,W,C,bt,O),yt=new B_(R),xt=new Vm(I),Ct=new T_(I,xt),et=new k_(I,xt,O,Ct),lt=new V_(I,et,xt,Ct,O),N=new G_(I,C,Q),zt=new R_(W),vt=new ox(R,yt,oe,C,Ct,zt),kt=new Cx(R,W),Et=new hx,Mt=new gx(oe),jt=new w_(R,yt,x,lt,g,l),Xt=new Mx(R,lt,C),dt=new Rx(I,O,C,x),St=new A_(I,oe,O),st=new z_(I,oe,O),O.programs=vt.programs,R.capabilities=C,R.extensions=oe,R.properties=W,R.renderLists=Et,R.shadowMap=Xt,R.state=x,R.info=O}M!==pn&&(T=new $_(M,e.width,e.height,o,s,r));let Bt=new Rh(R,I);this.xr=Bt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(b){b!==void 0&&(rt=b,this.setSize(ce,tt,!1))},this.getSize=function(b){return b.set(ce,tt)},this.setSize=function(b,D,Y=!0){if(Bt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=b,tt=D,e.width=Math.floor(b*rt),e.height=Math.floor(D*rt),Y===!0&&(e.style.width=b+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(ce*rt,tt*rt).floor()},this.setDrawingBufferSize=function(b,D,Y){ce=b,tt=D,rt=Y,e.width=Math.floor(b*Y),e.height=Math.floor(D*Y),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(M===pn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(at)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,D,Y,H){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,D,Y,H),x.viewport(at.copy(nt).multiplyScalar(rt).round())},this.getScissor=function(b){return b.copy(mt)},this.setScissor=function(b,D,Y,H){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,D,Y,H),x.scissor(Ft.copy(mt).multiplyScalar(rt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){x.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,Y=!0){let H=0;if(b){let G=!1;if(ht!==null){let At=ht.texture.format;G=m.has(At)}if(G){let At=ht.texture.type,It=p.has(At),Tt=jt.getClearColor(),Nt=jt.getClearAlpha(),Ot=Tt.r,Qt=Tt.g,le=Tt.b;It?(v[0]=Ot,v[1]=Qt,v[2]=le,v[3]=Nt,I.clearBufferuiv(I.COLOR,0,v)):(E[0]=Ot,E[1]=Qt,E[2]=le,E[3]=Nt,I.clearBufferiv(I.COLOR,0,E))}else H|=I.COLOR_BUFFER_BIT}D&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),jt.dispose(),Et.dispose(),Mt.dispose(),W.dispose(),yt.dispose(),lt.dispose(),Ct.dispose(),dt.dispose(),vt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",iu),Bt.removeEventListener("sessionend",su),Zi.stop()};function Ce(b){b.preventDefault(),ih("WebGLRenderer: Context Lost."),F=!0}function xe(){ih("WebGLRenderer: Context Restored."),F=!1;let b=O.autoReset,D=Xt.enabled,Y=Xt.autoUpdate,H=Xt.needsUpdate,G=Xt.type;Ht(),O.autoReset=b,Xt.enabled=D,Xt.autoUpdate=Y,Xt.needsUpdate=H,Xt.type=G}function Fn(b){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xn(b){let D=b.target;D.removeEventListener("dispose",Xn),fp(D)}function fp(b){pp(b),W.remove(b)}function pp(b){let D=W.get(b).programs;D!==void 0&&(D.forEach(function(Y){vt.releaseProgram(Y)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,Y,H,G,At){D===null&&(D=Vt);let It=G.isMesh&&G.matrixWorld.determinantAffine()<0,Tt=_p(b,D,Y,H,G);x.setMaterial(H,It);let Nt=Y.index,Ot=1;if(H.wireframe===!0){if(Nt=et.getWireframeAttribute(Y),Nt===void 0)return;Ot=2}let Qt=Y.drawRange,le=Y.attributes.position,Ut=Qt.start*Ot,ve=(Qt.start+Qt.count)*Ot;At!==null&&(Ut=Math.max(Ut,At.start*Ot),ve=Math.min(ve,(At.start+At.count)*Ot)),Nt!==null?(Ut=Math.max(Ut,0),ve=Math.min(ve,Nt.count)):le!=null&&(Ut=Math.max(Ut,0),ve=Math.min(ve,le.count));let Be=ve-Ut;if(Be<0||Be===1/0)return;Ct.setup(G,H,Tt,Y,Nt);let Ie,Ae=St;if(Nt!==null&&(Ie=xt.get(Nt),Ae=st,Ae.setIndex(Ie)),G.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*Jt()),Ae.setMode(I.LINES)):Ae.setMode(I.TRIANGLES);else if(G.isLine){let nn=H.linewidth;nn===void 0&&(nn=1),x.setLineWidth(nn*Jt()),G.isLineSegments?Ae.setMode(I.LINES):G.isLineLoop?Ae.setMode(I.LINE_LOOP):Ae.setMode(I.LINE_STRIP)}else G.isPoints?Ae.setMode(I.POINTS):G.isSprite&&Ae.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let nn=G._multiDrawStarts,Pt=G._multiDrawCounts,ln=G._multiDrawCount,fe=Nt?xt.get(Nt).bytesPerElement:1,wn=W.get(H).currentProgram.getUniforms();for(let qn=0;qn<ln;qn++)wn.setValue(I,"_gl_DrawID",qn),Ae.render(nn[qn]/fe,Pt[qn])}else if(G.isInstancedMesh)Ae.renderInstances(Ut,Be,G.count);else if(Y.isInstancedBufferGeometry){let nn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pt=Math.min(Y.instanceCount,nn);Ae.renderInstances(Ut,Be,Pt)}else Ae.render(Ut,Be)};function nu(b,D,Y,H){B!==null&&b.isNodeMaterial&&B.setObject(H,b),q===!0&&zt.setState(b,Y,!1),b.transparent===!0&&b.side===jn&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,_a(b,D,H),b.side=Bi,b.needsUpdate=!0,_a(b,D,H),b.side=jn):_a(b,D,H)}this.compile=function(b,D,Y=null){Y===null&&(Y=b),B!==null&&B.renderStart(b,D,Y),w=Mt.get(Y),w.init(D),y.push(w),Y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),b!==Y&&b.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,q=zt.init(this.clippingPlanes,ot),q===!0&&zt.setGlobalState(this.clippingPlanes,D),B!==null&&Xt.render(w.state.shadowsArray,Y,D);let H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let At=G.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){let Tt=At[It];nu(Tt,Y,D,G),H.add(Tt)}else nu(At,Y,D,G),H.add(At)}),w=y.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(b,D,Y=null){let H=this.compile(b,D,Y);return new Promise(G=>{function At(){if(H.forEach(function(It){let Nt=W.get(It).currentProgram;(Nt===void 0||Nt.isReady())&&H.delete(It)}),H.size===0){G(b);return}setTimeout(At,10)}oe.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Zl=null;function mp(b){Zl&&Zl(b)}function iu(){Zi.stop()}function su(){Zi.start()}let Zi=new nf;Zi.setAnimationLoop(mp),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(b){Zl=b,Bt.setAnimationLoop(b),b===null?Zi.stop():Zi.start()},Bt.addEventListener("sessionstart",iu),Bt.addEventListener("sessionend",su),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(b,D);let Y=Bt.enabled===!0&&Bt.isPresenting===!0,H=T!==null&&(ht===null||Y)&&T.begin(R,ht);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(D),D=Bt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,D,ht),w=Mt.get(b,y.length),w.init(D),w.state.textureUnits=Q.getTextureUnits(),y.push(w),ut.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(ut,Bn,D.reversedDepth),ot=this.localClippingEnabled,q=zt.init(this.clippingPlanes,ot),S=Et.get(b,A.length),S.init(),A.push(S),Bt.enabled===!0&&Bt.isPresenting===!0){let It=R.xr.getDepthSensingMesh();It!==null&&Kl(It,D,-1/0,R.sortObjects)}Kl(b,D,0,R.sortObjects),S.finish(),B!==null&&B.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(X,Z),Yt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Yt&&jt.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),q===!0&&zt.beginShadows();let G=w.state.shadowsArray;if(Xt.render(G,b,D),q===!0&&zt.endShadows(),(H&&T.hasRenderPass())===!1){let It=S.opaque,Tt=S.transmissive;if(w.setupLights(),D.isArrayCamera){let Nt=D.cameras;if(Tt.length>0)for(let Ot=0,Qt=Nt.length;Ot<Qt;Ot++){let le=Nt[Ot];au(It,Tt,b,le)}Yt&&jt.render(b);for(let Ot=0,Qt=Nt.length;Ot<Qt;Ot++){let le=Nt[Ot];ru(S,b,le,le.viewport)}}else Tt.length>0&&au(It,Tt,b,D),Yt&&jt.render(b),ru(S,b,D)}ht!==null&&J===0&&(Q.updateMultisampleRenderTarget(ht),Q.updateRenderTargetMipmap(ht)),H&&T.end(R),b.isScene===!0&&b.onAfterRender(R,b,D),Ct.resetDefaultState(),j=-1,it=null,y.pop(),y.length>0?(w=y[y.length-1],Q.setTextureUnits(w.state.textureUnits),q===!0&&zt.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,B!==null&&B.renderEnd()};function Kl(b,D,Y,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum($)){H&&Gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);let It=lt.update(b),Tt=b.material;Tt.visible&&S.push(b,It,Tt,Y,Gt.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum($))){let It=lt.update(b),Tt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Gt.copy(b.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Gt.copy(It.boundingSphere.center)),Gt.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(Tt)){let Nt=It.groups;for(let Ot=0,Qt=Nt.length;Ot<Qt;Ot++){let le=Nt[Ot],Ut=Tt[le.materialIndex];Ut&&Ut.visible&&S.push(b,It,Ut,Y,Gt.z,le,D)}}else Tt.visible&&S.push(b,It,Tt,Y,Gt.z,null,D)}}let At=b.children;for(let It=0,Tt=At.length;It<Tt;It++)Kl(At[It],D,Y,H)}function ru(b,D,Y,H){let{opaque:G,transmissive:At,transparent:It}=b;w.setupLightsView(Y),q===!0&&zt.setGlobalState(R.clippingPlanes,Y),H&&x.viewport(at.copy(H)),G.length>0&&ga(G,D,Y),At.length>0&&ga(At,D,Y),It.length>0&&ga(It,D,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function au(b,D,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Ut=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new fn(1,1,{generateMipmaps:!0,type:Ut?Gn:pn,minFilter:ki,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let At=w.state.transmissionRenderTarget[H.id],It=H.viewport||at;At.setSize(It.z*R.transmissionResolutionScale,It.w*R.transmissionResolutionScale);let Tt=R.getRenderTarget(),Nt=R.getActiveCubeFace(),Ot=R.getActiveMipmapLevel();R.setRenderTarget(At),R.getClearColor(de),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),Yt&&jt.render(Y);let Qt=R.toneMapping;R.toneMapping=kn;let le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),q===!0&&zt.setGlobalState(R.clippingPlanes,H),ga(b,Y,H),Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ve=0,Be=D.length;ve<Be;ve++){let Ie=D[ve],{object:Ae,geometry:nn,material:Pt,group:ln}=Ie;if(Pt.side===jn&&Ae.layers.test(H.layers)){let fe=Pt.side;Pt.side=un,Pt.needsUpdate=!0,ou(Ae,Y,H,nn,Pt,ln),Pt.side=fe,Pt.needsUpdate=!0,Ut=!0}}Ut===!0&&(Q.updateMultisampleRenderTarget(At),Q.updateRenderTargetMipmap(At))}R.setRenderTarget(Tt,Nt,Ot),R.setClearColor(de,ie),le!==void 0&&(H.viewport=le),R.toneMapping=Qt}function ga(b,D,Y){let H=D.isScene===!0?D.overrideMaterial:null;for(let G=0,At=b.length;G<At;G++){let It=b[G],{object:Tt,geometry:Nt,group:Ot}=It,Qt=It.material;Qt.allowOverride===!0&&H!==null&&(Qt=H),Tt.layers.test(Y.layers)&&ou(Tt,D,Y,Nt,Qt,Ot)}}function ou(b,D,Y,H,G,At){B!==null&&G.isNodeMaterial&&B.setObject(b,G),b.onBeforeRender(R,D,Y,H,G,At),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(R,D,Y,H,b,At),G.transparent===!0&&G.side===jn&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,R.renderBufferDirect(Y,D,H,G,b,At),G.side=Bi,G.needsUpdate=!0,R.renderBufferDirect(Y,D,H,G,b,At),G.side=jn):R.renderBufferDirect(Y,D,H,G,b,At),b.onAfterRender(R,D,Y,H,G,At)}function _a(b,D,Y){D.isScene!==!0&&(D=Vt);let H=W.get(b),G=w.state.lights,At=w.state.shadowsArray,It=G.state.version,Tt=vt.getParameters(b,G.state,At,D,Y,w.state.lightProbeGridArray),Nt=vt.getProgramCacheKey(Tt),Ot=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let Qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=yt.get(b.envMap||H.environment,Qt),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Ot===void 0&&(b.addEventListener("dispose",Xn),Ot=new Map,H.programs=Ot);let le=Ot.get(Nt);if(le!==void 0){if(H.currentProgram===le&&H.lightsStateVersion===It)return cu(b,Tt),le}else Tt.uniforms=vt.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,Y,Tt),b.onBeforeCompile(Tt,R),le=vt.acquireProgram(Tt,Nt),Ot.set(Nt,le),H.uniforms=Tt.uniforms;let Ut=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=zt.uniform),cu(b,Tt),H.needsLights=xp(b),H.lightsStateVersion=It,H.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.sunLights.value=G.state.sun,Ut.sunLightShadows.value=G.state.sunShadow,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.sunShadowMatrix.value=G.state.sunShadowMatrix,Ut.sunShadowCascade.value=G.state.sunShadowCascade,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=le,H.uniformsList=null,le}function lu(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=er.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function cu(b,D){let Y=W.get(b);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function gp(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(D.matrixWorld);for(let Y=0,H=b.length;Y<H;Y++){let G=b[Y];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function _p(b,D,Y,H,G){D.isScene!==!0&&(D=Vt),Q.resetTextureUnits();let At=D.fog,It=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,Tt=ht===null?R.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:he.workingColorSpace,Nt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ot=yt.get(H.envMap||It,Nt),Qt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,le=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ut=!!Y.morphAttributes.position,ve=!!Y.morphAttributes.normal,Be=!!Y.morphAttributes.color,Ie=kn;H.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ie=R.toneMapping);let Ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nn=Ae!==void 0?Ae.length:0,Pt=W.get(H),ln=w.state.lights;if(q===!0&&(ot===!0||b!==it)){let Re=b===it&&H.id===j;zt.setState(H,b,Re)}let fe=!1;H.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==ln.state.version||Pt.outputColorSpace!==Tt||G.isBatchedMesh&&Pt.batching===!1||!G.isBatchedMesh&&Pt.batching===!0||G.isBatchedMesh&&Pt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Pt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Pt.instancing===!1||!G.isInstancedMesh&&Pt.instancing===!0||G.isSkinnedMesh&&Pt.skinning===!1||!G.isSkinnedMesh&&Pt.skinning===!0||G.isInstancedMesh&&Pt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pt.instancingMorph===!1&&G.morphTexture!==null||Pt.envMap!==Ot||H.fog===!0&&Pt.fog!==At||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==zt.numPlanes||Pt.numIntersection!==zt.numIntersection)||Pt.vertexAlphas!==Qt||Pt.vertexTangents!==le||Pt.morphTargets!==Ut||Pt.morphNormals!==ve||Pt.morphColors!==Be||Pt.toneMapping!==Ie||Pt.morphTargetsCount!==nn||!!Pt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Pt.__version=H.version);let wn=Pt.currentProgram;fe===!0&&(wn=_a(H,D,G),B&&H.isNodeMaterial&&B.onUpdateProgram(H,wn,Pt));let qn=!1,xi=!1,gs=!1,Ee=wn.getUniforms(),Ue=Pt.uniforms;if(x.useProgram(wn.program)&&(qn=!0,xi=!0,gs=!0),H.id!==j&&(j=H.id,xi=!0),Pt.needsLights){let Re=gp(w.state.lightProbeGridArray,G);Pt.lightProbeGrid!==Re&&(Pt.lightProbeGrid=Re,xi=!0)}if(qn||it!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ee.setValue(I,"projectionMatrix",b.projectionMatrix),Ee.setValue(I,"viewMatrix",b.matrixWorldInverse);let Mi=Ee.map.cameraPosition;Mi!==void 0&&Mi.setValue(I,ft.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),it!==b&&(it=b,xi=!0,gs=!0)}if(Pt.needsLights&&(ln.state.sunShadowMap.length>0&&Ee.setValue(I,"sunShadowMap",ln.state.sunShadowMap,Q),ln.state.directionalShadowMap.length>0&&Ee.setValue(I,"directionalShadowMap",ln.state.directionalShadowMap,Q),ln.state.spotShadowMap.length>0&&Ee.setValue(I,"spotShadowMap",ln.state.spotShadowMap,Q),ln.state.pointShadowMap.length>0&&Ee.setValue(I,"pointShadowMap",ln.state.pointShadowMap,Q)),G.isSkinnedMesh){Ee.setOptional(I,G,"bindMatrix"),Ee.setOptional(I,G,"bindMatrixInverse");let Re=G.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Ee.setValue(I,"boneTexture",Re.boneTexture,Q))}G.isBatchedMesh&&(Ee.setOptional(I,G,"batchingTexture"),Ee.setValue(I,"batchingTexture",G._matricesTexture,Q),Ee.setOptional(I,G,"batchingIdTexture"),Ee.setValue(I,"batchingIdTexture",G._indirectTexture,Q),Ee.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",G._colorsTexture,Q));let vi=Y.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&N.update(G,Y,wn),(xi||Pt.receiveShadow!==G.receiveShadow)&&(Pt.receiveShadow=G.receiveShadow,Ee.setValue(I,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Ue.envMapIntensity.value=D.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=Ix()),xi){if(Ee.setValue(I,"toneMappingExposure",R.toneMappingExposure),Pt.needsLights&&yp(Ue,gs),At&&H.fog===!0&&kt.refreshFogUniforms(Ue,At),kt.refreshMaterialUniforms(Ue,H,rt,tt,w.state.transmissionRenderTarget[b.id]),Pt.needsLights&&Pt.lightProbeGrid){let Re=Pt.lightProbeGrid;Ue.probesSH.value=Re.texture,Ue.probesMin.value.copy(Re.boundingBox.min),Ue.probesMax.value.copy(Re.boundingBox.max),Ue.probesResolution.value.copy(Re.resolution)}er.upload(I,lu(Pt),Ue,Q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(er.upload(I,lu(Pt),Ue,Q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ee.setValue(I,"center",G.center),Ee.setValue(I,"modelViewMatrix",G.modelViewMatrix),Ee.setValue(I,"normalMatrix",G.normalMatrix),Ee.setValue(I,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let Re=H.uniformsGroups;for(let Mi=0,_s=Re.length;Mi<_s;Mi++){let uu=Re[Mi];dt.update(uu,wn),dt.bind(uu,wn)}}return wn}function yp(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function xp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(b,D,Y){let H=W.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=D,W.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let Y=W.get(b);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,Y=0){ht=b,K=D,J=Y;let H=null,G=!1,At=!1;if(b){let Tt=W.get(b);if(Tt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,Tt.__webglFramebuffer),at.copy(b.viewport),Ft.copy(b.scissor),Rt=b.scissorTest,x.viewport(at),x.scissor(Ft),x.setScissorTest(Rt),j=-1;return}else if(Tt.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(Tt.__hasExternalTextures)Q.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Qt=b.depthTexture;if(Tt.__boundDepthTexture!==Qt){if(Qt!==null&&W.has(Qt)&&(b.width!==Qt.image.width||b.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}let Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let Ot=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[D])?H=Ot[D][Y]:H=Ot[D],G=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?H=W.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?H=Ot[Y]:H=Ot,at.copy(b.viewport),Ft.copy(b.scissor),Rt=b.scissorTest}else at.copy(nt).multiplyScalar(rt).floor(),Ft.copy(mt).multiplyScalar(rt).floor(),Rt=Dt;if(Y!==0&&(H=z),x.bindFramebuffer(I.FRAMEBUFFER,H)&&x.drawBuffers(b,H),x.viewport(at),x.scissor(Ft),x.setScissorTest(Rt),G){let Tt=W.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Tt.__webglTexture,Y)}else if(At){let Tt=D;for(let Nt=0;Nt<b.textures.length;Nt++){let Ot=W.get(b.textures[Nt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Nt,Ot.__webglTexture,Y,Tt)}}else if(b!==null&&Y!==0){let Tt=W.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,Y)}j=-1};function hu(b){let D=W.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=C.textureFormatReadable(b.format),D.__typeReadable=C.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,Y,H,G,At,It,Tt=0){if(!(b&&b.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){x.bindFramebuffer(I.FRAMEBUFFER,Nt);try{let Ot=b.textures[Tt],Qt=Ot.format,le=Ot.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Tt);let Ut=hu(Ot);if(Ut.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&Y>=0&&Y<=b.height-G&&I.readPixels(D,Y,H,G,bt.convert(Qt),bt.convert(le),At)}finally{let Ot=ht!==null?W.get(ht).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,D,Y,H,G,At,It,Tt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt)if(D>=0&&D<=b.width-H&&Y>=0&&Y<=b.height-G){x.bindFramebuffer(I.FRAMEBUFFER,Nt);let Ot=b.textures[Tt],Qt=Ot.format,le=Ot.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Tt);let Ut=hu(Ot);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.bufferData(I.PIXEL_PACK_BUFFER,At.byteLength,I.STREAM_READ),I.readPixels(D,Y,H,G,bt.convert(Qt),bt.convert(le),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Be=ht!==null?W.get(ht).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Be);let Ie=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await wd(I,Ie,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,At),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ve),I.deleteSync(Ie),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,Y=0){let H=Math.pow(2,-Y),G=Math.floor(b.image.width*H),At=Math.floor(b.image.height*H),It=D!==null?D.x:0,Tt=D!==null?D.y:0;Q.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,It,Tt,G,At),x.unbindTexture()},this.copyTextureToTexture=function(b,D,Y=null,H=null,G=0,At=0){let It,Tt,Nt,Ot,Qt,le,Ut,ve,Be,Ie=b.isCompressedTexture?b.mipmaps[At]:b.image;if(Y!==null)It=Y.max.x-Y.min.x,Tt=Y.max.y-Y.min.y,Nt=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,Qt=Y.min.y,le=Y.isBox3?Y.min.z:0;else{let Ue=Math.pow(2,-G);It=Math.floor(Ie.width*Ue),Tt=Math.floor(Ie.height*Ue),b.isDataArrayTexture?Nt=Ie.depth:b.isData3DTexture?Nt=Math.floor(Ie.depth*Ue):Nt=1,Ot=0,Qt=0,le=0}H!==null?(Ut=H.x,ve=H.y,Be=H.z):(Ut=0,ve=0,Be=0);let Ae=bt.convert(D.format),nn=bt.convert(D.type),Pt;D.isData3DTexture?(Q.setTexture3D(D,0),Pt=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Q.setTexture2DArray(D,0),Pt=I.TEXTURE_2D_ARRAY):(Q.setTexture2D(D,0),Pt=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let ln=x.getParameter(I.UNPACK_ROW_LENGTH),fe=x.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=x.getParameter(I.UNPACK_SKIP_PIXELS),qn=x.getParameter(I.UNPACK_SKIP_ROWS),xi=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,Ie.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ie.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ot),x.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(I.UNPACK_SKIP_IMAGES,le);let gs=b.isDataArrayTexture||b.isData3DTexture,Ee=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let Ue=W.get(b),vi=W.get(D),Re=W.get(Ue.__renderTarget),Mi=W.get(vi.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,Re.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let _s=0;_s<Nt;_s++)gs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(b).__webglTexture,G,le+_s),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(D).__webglTexture,At,Be+_s)),I.blitFramebuffer(Ot,Qt,It,Tt,Ut,ve,It,Tt,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||W.has(b)){let Ue=W.get(b),vi=W.get(D);x.bindFramebuffer(I.READ_FRAMEBUFFER,L),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let Re=0;Re<Nt;Re++)gs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.__webglTexture,G,le+Re):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ue.__webglTexture,G),Ee?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vi.__webglTexture,At,Be+Re):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vi.__webglTexture,At),G!==0?I.blitFramebuffer(Ot,Qt,It,Tt,Ut,ve,It,Tt,I.COLOR_BUFFER_BIT,I.NEAREST):Ee?I.copyTexSubImage3D(Pt,At,Ut,ve,Be+Re,Ot,Qt,It,Tt):I.copyTexSubImage2D(Pt,At,Ut,ve,Ot,Qt,It,Tt);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ee?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Pt,At,Ut,ve,Be,It,Tt,Nt,Ae,nn,Ie.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Pt,At,Ut,ve,Be,It,Tt,Nt,Ae,Ie.data):I.texSubImage3D(Pt,At,Ut,ve,Be,It,Tt,Nt,Ae,nn,Ie):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,At,Ut,ve,It,Tt,Ae,nn,Ie.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,At,Ut,ve,Ie.width,Ie.height,Ae,Ie.data):I.texSubImage2D(I.TEXTURE_2D,At,Ut,ve,It,Tt,Ae,nn,Ie);x.pixelStorei(I.UNPACK_ROW_LENGTH,ln),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe),x.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),x.pixelStorei(I.UNPACK_SKIP_ROWS,qn),x.pixelStorei(I.UNPACK_SKIP_IMAGES,xi),At===0&&D.generateMipmaps&&I.generateMipmap(Pt),x.unbindTexture()},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){K=0,J=0,ht=null,x.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var hf={type:"change"},Ih={type:"start"},df={type:"end"},Tl=new Ri,uf=new xn,Fx=Math.cos(70*sa.DEG2RAD),$e=new P,mn=2*Math.PI,be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ph=1e-6,Al=class extends Yr{constructor(t,e=null){super(t,e),this.state=be.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new vn,this._lastTargetPosition=new P,this._quat=new vn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jn,this._sphericalDelta=new Jn,this._scale=1,this._panOffset=new P,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new P,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nx.bind(this),this._onPointerDown=Dx.bind(this),this._onPointerUp=Ux.bind(this),this._onContextMenu=Vx.bind(this),this._onMouseWheel=kx.bind(this),this._onKeyDown=zx.bind(this),this._onTouchStart=Hx.bind(this),this._onTouchMove=Gx.bind(this),this._onMouseDown=Bx.bind(this),this._onMouseMove=Ox.bind(this),this._interceptControlDown=Wx.bind(this),this._interceptControlUp=$x.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=be.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hf),this.update(),this.state=be.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=$e.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Tl.origin.copy(this.object.position),Tl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tl.direction))<Fx?this.object.lookAt(this.target):(uf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tl.intersectPlane(uf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ph||this._lastTargetPosition.distanceToSquared(this.target)>Ph?(this.dispatchEvent(hf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mn/60*this.autoRotateSpeed*t:mn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$e.copy(s).sub(this.target);let r=$e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Dx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Nx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ux(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(df),this.state=be.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Bx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=be.DOLLY;break;case Ni.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=be.ROTATE}break;case Ni.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=be.PAN}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Ih)}function Ox(n){switch(this.state){case be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function kx(n){this.enabled===!1||this.enableZoom===!1||this.state!==be.NONE||(n.preventDefault(),this.dispatchEvent(Ih),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(df))}function zx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Hx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ui.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=be.TOUCH_ROTATE;break;case Ui.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=be.TOUCH_PAN;break;default:this.state=be.NONE}break;case 2:switch(this.touches.TWO){case Ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=be.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=be.TOUCH_DOLLY_ROTATE;break;default:this.state=be.NONE}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Ih)}function Gx(n){switch(this._trackPointer(n),this.state){case be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=be.NONE}}function Vx(n){this.enabled!==!1&&n.preventDefault()}function Wx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $x(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ff(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,a=0,o=Object.keys(n.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let v=0,E=o.length;v<E;v++){let _=o[v],S=n.attributes[_];l[_]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let w=n.morphAttributes[_];w&&(c[_]||(c[_]=[]),w.forEach((A,y)=>{let T=new A.array.constructor(A.count*A.itemSize);c[_][y]=new A.constructor(T,A.itemSize,A.normalized)}))}let f=t*.5,g=Math.log10(1/t),M=Math.pow(10,g),m=f*M;for(let v=0;v<r;v++){let E=i?i.getX(v):v,_="";for(let S=0,w=o.length;S<w;S++){let A=o[S],y=n.getAttribute(A),T=y.itemSize;for(let R=0;R<T;R++)_+=`${Math.trunc(y[d[R]](E)*M+m)},`}if(_ in e)h.push(e[_]);else{for(let S=0,w=o.length;S<w;S++){let A=o[S],y=n.getAttribute(A),T=n.morphAttributes[A],R=y.itemSize,F=l[A],B=c[A];for(let z=0;z<R;z++){let L=d[z],k=u[z];if(F[k](a,y[L](E)),T)for(let K=0,J=T.length;K<J;K++)B[K][k](a,T[K][L](E))}}e[_]=a,h.push(a),a++}}let p=n.clone();for(let v in n.attributes){let E=l[v];if(p.setAttribute(v,new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)),v in c)for(let _=0;_<c[v].length;_++){let S=c[v][_];p.morphAttributes[v][_]=new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}var V={sand:"#FFD89C",sandPad:"#FFE9C4",grass:"#7CCB5E",grass2:"#5FB552",sea:"#1D9CAE",shallow:"#62D9D2",trunk:"#9A6A44",leaf:"#4FB063",leaf2:"#7DD164",leaf3:"#3E9B57",rock:"#B9B0C9",cream:"#FFF8EC",coral:"#FF6F59",sun:"#FFC93C",plum:"#3B2C5A",blue:"#3FA7D6",purple:"#9B6DD6",pink:"#FF5C8A",red:"#E8504A",redDark:"#A8323A",wood:"#C98A55",woodDark:"#8A5A3B",orange:"#FF9A2E",gold:"#FFC93C",white:"#FFFFFF"},Lh=new Map;function Xx(n,t={}){let e=n+JSON.stringify(t);return Lh.has(e)||Lh.set(e,new pi({color:n,flatShading:!0,roughness:.82,metalness:0,...t})),Lh.get(e)}var ct=(n,t,e)=>new He(n,Xx(t,e));function qx(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Gi=qx(20261027),en=(n,t)=>n+Gi()*(t-n);function pf(n,t,e=!1){n.deleteAttribute("normal"),n.deleteAttribute("uv");let i=ff(n),s=i.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r),o=s.getY(r),l=s.getZ(r);if(Math.hypot(a,l)<.001)continue;let h=1+en(-t,t);s.setX(r,a*h),s.setZ(r,l*h),e||s.setY(r,o+en(-t,t)*.6)}return i.computeVertexNormals(),i}function Yx(n){let t=ct(pf(new re(19.6,21.6,1.5,44,1),.06),V.sand);n.add(t);let e=ct(pf(new re(17.2,18.1,1,44,1),.05,!0),V.grass);e.position.y=1.1,n.add(e),[].forEach(([s,r,a])=>{let o=ct(new Se(a,1),V.grass2);o.scale.set(1.6,.45,1.6),o.position.set(s,1.5,r),n.add(o)});let i=new He(new zr(21,28,64),new Pi({color:V.shallow,transparent:!0,opacity:.5,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.16,i.userData.noShadow=!0,n.add(i)}function Zx(n){let t=new rs(240,240,72,72);t.rotateX(-Math.PI/2);let e=new He(t,new pi({color:V.sea,flatShading:!0,roughness:.35,metalness:.05}));e.receiveShadow=!0,e.userData.noShadow=!0,n.add(e);let i=t.attributes.position.array.slice();return s=>{let r=t.attributes.position.array;for(let a=0;a<r.length;a+=3){let o=i[a],l=i[a+2];r[a+1]=Math.sin(o*.22+s*.9)*.14+Math.cos(l*.27+s*1.15)*.12}t.attributes.position.needsUpdate=!0}}function Kx(n=4){let t=new ee,e=6,i=0;for(let a=0;a<e;a++){let o=ct(new re(.2-a*.015,.26-a*.015,n/e+.05,6),a%2?V.trunk:V.woodDark);i+=.09*a,o.position.set(i,(a+.5)*(n/e),0),o.rotation.z=-.06*a,t.add(o)}let s=new P(i+.1,n,0);for(let a=0;a<6;a++){let o=ct(new Cn(.42,2.3,4),a%2?V.leaf:V.leaf2);o.scale.set(1,1,.28),o.geometry.translate(0,1.15,0),o.position.copy(s),o.rotation.set(0,a/6*Math.PI*2,0),o.rotateZ(Math.PI/2+.55),t.add(o)}let r=ct(new Se(.2,0),V.woodDark);return r.position.copy(s).add(new P(.15,-.25,.15)),t.add(r),t}function Jx(n=1,t=V.leaf){let e=new ee,i=ct(new re(.16,.24,1,6),V.trunk);i.position.y=.5;let s=ct(new Se(.85,0),t);return s.position.y=1.55,s.scale.set(1,1.15,1),e.add(i,s),e.scale.setScalar(n),e}function jx(n){let t=ct(new Pr(n,0),V.rock);return t.scale.y=.6,t.rotation.set(Gi(),Gi()*6,Gi()),t}function Qx(){let n=new ee,t=new pi({color:"#ffffff",flatShading:!0,roughness:1,emissive:"#ffffff",emissiveIntensity:.25}),e=3+(Gi()*3|0);for(let i=0;i<e;i++){let s=new He(new Se(en(1,1.8),0),t);s.position.set(i*1.5-e*.7,en(-.3,.5),en(-.6,.6)),n.add(s)}return n.userData.noShadow=!0,n}function tv(){let n=new ee,t=ct(new re(.9,.55,.6,4,1),V.coral);t.rotation.y=Math.PI/4,t.scale.set(1.9,1,.8),t.position.y=.25;let e=ct(new re(.06,.06,2.4,5),V.woodDark);e.position.y=1.5;let i=ct(new Cn(.9,1.9,3),V.cream);i.scale.z=.1,i.position.set(.45,1.6,0);let s=ct(new Kt(.4,.22,.03),V.sun);return s.position.set(.22,2.6,0),n.add(t,e,i,s),n}function ev(){let n=new ee,t=ct(new re(.6,1,4.4,7),V.trunk);t.position.y=2.2,n.add(t),[[-1,.4,.4,.9],[.9,.2,-.5,-.8]].forEach(([c,h,d,u])=>{let f=ct(new re(.15,.35,1.4,5),V.trunk);f.position.set(c,h,d),f.rotation.z=u,n.add(f)});let e=ct(new re(2.1,2.1,.25,8),V.wood);e.position.y=3.9;let i=ct(new Kt(1.8,1.4,1.6),V.sun);i.position.set(.1,4.75,.1);let s=ct(new Cn(1.6,1.2,4),V.coral);s.rotation.y=Math.PI/4,s.position.set(.1,6.05,.1);let r=ct(new Kt(.55,.9,.05),V.plum);r.position.set(.1,4.5,.93);let a=ct(new Gs(.24,10),V.cream);a.position.set(.95,4.95,.3),a.rotation.y=Math.PI/2,n.add(e,i,s,r,a);for(let c=0;c<12;c++){let h=c/12*Math.PI*2;if(Math.abs(Math.sin(h))>.95&&Math.cos(h)<0)continue;let d=ct(new Kt(.1,.45,.1),V.woodDark);d.position.set(Math.cos(h)*2,4.25,Math.sin(h)*2),n.add(d)}for(let c=0;c<6;c++){let h=ct(new Kt(.8,.08,.1),V.woodDark);h.position.set(.1,.6+c*.6,1.05),n.add(h)}[-.3,.5].forEach(c=>{let h=ct(new Kt(.08,3.8,.08),V.woodDark);h.position.set(c,1.95,1.05),n.add(h)}),[[0,7.4,0,2.2,V.leaf],[-1.7,6.7,-.6,1.6,V.leaf2],[1.7,6.9,-.8,1.7,V.leaf3],[.4,7.2,-1.8,1.5,V.leaf2]].forEach(([c,h,d,u,f])=>{let g=ct(new Se(u,0),f);g.position.set(c,h,d),n.add(g)});let o=ct(new re(.04,.04,1.4,5),V.cream);o.position.set(.1,9.1,0);let l=ct(new Cn(.35,.8,3),V.coral);return l.rotation.z=-Math.PI/2,l.scale.z=.2,l.position.set(.5,9.55,0),n.add(o,l),n.userData.flag=l,n}var Dh={hayvanlar(){let n=new ee,t=ct(new Kt(2.4,1.7,2),V.red);t.position.y=.85;let e=ct(new re(1.55,1.55,2.25,3),V.redDark);e.rotation.x=-Math.PI/2,e.position.y=1.7+.77;let i=ct(new Kt(.9,1.1,.06),V.cream);i.position.set(0,.55,1.02);let s=ct(new Kt(1.2,.1,.04),V.redDark);s.rotation.z=.88,s.position.set(0,.55,1.06);let r=ct(new Kt(.5,.45,.06),V.cream);r.position.set(0,1.95,.6+.5),n.add(t,e,i,s,r);let a=new ee,o=ct(new Se(.48,0),V.cream);o.scale.set(1.2,.95,1),o.position.y=.62;let l=ct(new Kt(.3,.32,.3),V.plum);l.position.set(.55,.78,0),a.add(o,l),[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]].forEach(([h,d])=>{let u=ct(new Kt(.1,.35,.1),V.plum);u.position.set(h,.18,d),a.add(u)}),a.position.set(1.9,0,1),a.rotation.y=-.6,n.add(a),n.userData.sheep=a;for(let h=0;h<4;h++){let d=ct(new Kt(.12,.6,.12),V.cream);d.position.set(-1.9+h*.01,.3,-.8+h*.6),n.add(d)}let c=ct(new Kt(.06,.1,1.9),V.cream);return c.position.set(-1.9,.42,.1),n.add(c),n},balonlar(){let n=new ee,t=ct(new Kt(1.2,.6,.8),V.blue);t.position.y=.45,n.add(t),[-.4,.4].forEach(s=>{let r=ct(new re(.22,.22,.1,10),V.plum);r.rotation.x=Math.PI/2,r.position.set(s,.18,.42),n.add(r)});let e=new P(0,.8,0),i=[];return[[V.coral,-.75,2.6,.1],[V.sun,.05,3.15,-.15],[V.purple,.8,2.55,.15],[V.pink,.35,2.2,.55]].forEach(([s,r,a,o],l)=>{let c=ct(new Sn(.5,12,10),s,{roughness:.4});c.scale.set(1,1.18,1),c.position.set(r,a,o);let h=new ze().setFromPoints([e,new P(r,a-.6,o)]),d=new Ar(h,new Hs({color:V.plum}));n.add(c,d),i.push({b:c,line:d,base:new P(r,a,o),phase:l*1.3})}),n.userData.balloons=i,n.userData.anchor=e,n},sayilar(){let n=new ee,t=ct(new re(.25,.38,1.7,6),V.trunk);t.position.y=.85;let e=ct(new Se(1.35,1),V.leaf);e.position.y=2.45,n.add(t,e),[[.5,.2,.85],[-.6,.4,.7],[.9,-.1,.1],[-.2,-.3,.95],[.1,.7,.7],[-.9,-.1,.3],[.6,.6,-.4]].forEach(r=>{let a=new P(...r).normalize().multiplyScalar(1.3),o=ct(new Se(.2,1),V.orange,{roughness:.5});o.position.set(a.x,2.45+a.y,a.z),n.add(o)});let s=ct(new re(.55,.4,.45,10),V.wood);return s.position.set(1.3,.23,.8),n.add(s),[[1.15,.85],[1.45,.75],[1.3,.95]].forEach(([r,a],o)=>{let l=ct(new Se(.2,1),V.orange,{roughness:.5});l.position.set(r,.55+(o===2?.15:0),a),n.add(l)}),n},sekiller(){let n=new ee,t=ct(new Kt(.9,.9,.9),V.blue);t.position.set(-.7,.45,0),t.rotation.y=.4;let e=ct(new Cn(.55,1.2,4),V.sun);e.position.set(.75,.6,-.3);let i=ct(new Se(.48,1),V.coral,{roughness:.5});i.position.set(.3,.48,.75);let s=ct(new as(.38,.15,6,14),V.leaf2);s.position.set(-.7,1.32,0),s.rotation.y=.4;let r=ct(new qs(.35,0),V.purple);return r.position.set(.75,1.6,-.3),n.add(t,e,i,s,r),n.userData.spin=[s,r],n},hafiza(){let n=new ee,t=ct(new Kt(1.7,.85,1.1),V.woodDark);t.position.y=.43,n.add(t),[-.55,.55].forEach(s=>{let r=ct(new Kt(.14,.88,1.14),V.gold,{roughness:.35,metalness:.3});r.position.set(s,.43,0),n.add(r)});let e=new ee;e.position.set(0,.86,-.55);let i=ct(new Kt(1.7,.3,1.1),V.woodDark);return i.position.set(0,.15,.55),e.add(i),e.rotation.x=-1.05,n.add(e),[[-.4,V.gold],[0,V.pink],[.4,V.blue],[-.15,V.gold],[.2,V.gold]].forEach(([s,r],a)=>{let o=ct(a<3?new qs(.17,0):new re(.15,.15,.06,10),r,{roughness:.25,metalness:.4,emissive:r,emissiveIntensity:.25});o.position.set(s,.92+a%2*.06,a<3?.1:-.15),n.add(o)}),[[1.35,V.purple,-.25],[1.75,V.cream,.2]].forEach(([s,r,a])=>{let o=ct(new Kt(.6,.85,.06),r);o.position.set(s,.42,.45),o.rotation.set(-.2,a,a*.5),n.add(o)}),n.userData.lid=e,n},muzik(){let n=new ee,t=ct(new re(.75,.75,.85,14),V.red);t.position.y=.43;let e=ct(new re(.78,.78,.06,14),V.cream);e.position.y=.88;let i=ct(new re(.79,.79,.08,14),V.sun);i.position.y=.06,n.add(t,e,i),[.4,-.4].forEach((o,l)=>{let c=ct(new re(.04,.04,1,5),V.wood);c.position.set(l?-.15:.15,1.15,0),c.rotation.z=o,n.add(c)});let s=new ee;[V.coral,V.orange,V.sun,V.leaf2,V.blue,V.purple].forEach((o,l)=>{let c=ct(new Kt(.22,.1,.9-l*.08),o);c.position.set(l*.26,.42,0),s.add(c)});let r=ct(new Kt(1.6,.35,.12),V.woodDark);r.position.set(.65,.2,0),s.add(r),s.position.set(-2.1,0,.6),s.rotation.y=.3,n.add(s);let a=[];return[[V.pink,-.6,2.2],[V.blue,.7,2.6]].forEach(([o,l,c],h)=>{let d=new ee,u=ct(new Sn(.22,10,8),o);u.scale.set(1.25,.9,.8);let f=ct(new Kt(.06,.75,.06),V.plum);f.position.set(.22,.36,0),d.add(u,f),d.position.set(l,c,.2),n.add(d),a.push({n:d,y:c,phase:h*1.7})}),n.userData.notes=a,n}};function mf({canvas:n,badgeLayer:t,zones:e,onSelect:i,onTreehouse:s}){let r=new bl({canvas:n,antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio||1,2)),r.shadowMap.enabled=!0,r.shadowMap.type=Po;let a=new Er,o=document.createElement("canvas");o.width=4,o.height=256;let l=o.getContext("2d"),c=l.createLinearGradient(0,0,0,256);c.addColorStop(0,"#5EC3E6"),c.addColorStop(.55,"#A9E4EE"),c.addColorStop(1,"#FFE6BE"),l.fillStyle=c,l.fillRect(0,0,4,256);let h=new is(o);h.colorSpace=je,a.background=h,a.fog=new br("#CDEFF0",90,210);let d=new an(40,1,.1,400);a.add(new Vr("#D6F4FF","#FFD9A8",1.35));let u=new $r("#FFF1D6",2.1);u.position.set(14,22,10),u.castShadow=!0,u.shadow.mapSize.set(1536,1536),Object.assign(u.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:90}),u.shadow.bias=-.0015,a.add(u);let f=new He(new Gs(6,28),new Pi({color:"#FFE38A",fog:!1}));f.position.set(70,48,-120),a.add(f),Yx(a);let g=Zx(a),M=ev();M.position.y=1.55,a.add(M),[[5.4,34],[11.9,60]].forEach(([X,Z])=>{for(let nt=0;nt<Z;nt++){let mt=nt/Z*Math.PI*2,Dt=ct(new re(.32,.36,.1,6),V.cream);Dt.position.set(Math.sin(mt)*X,1.63,Math.cos(mt)*X),Dt.rotation.y=Gi()*3,a.add(Dt)}});let m=e.map((X,Z)=>{let nt=Z/e.length*Math.PI*2,mt=Z%2?14.4:9.4,Dt=new ee,$=ct(new re(2,2.15,.14,24),V.sandPad);$.position.y=.04,Dt.add($);let q=Dh[X.id]();return q.scale.setScalar(.9),Dt.add(q),Dt.position.set(Math.sin(nt)*mt,1.55,Math.cos(nt)*mt),Dt.rotation.y=nt,Dt.userData.zone=X.id,a.add(Dt),{...X,group:Dt,lm:q,angle:nt,anchor:new P(Math.sin(nt)*mt,1.55+(Z%2?3.9:2.7),Math.cos(nt)*mt)}});for(let X=0;X<11;X++){let Z=X/11*Math.PI*2+.3,nt=Kx(en(3.4,4.6)),mt=en(18.4,19.4);nt.position.set(Math.sin(Z)*mt,.65,Math.cos(Z)*mt),nt.rotation.y=-Z+Math.PI/2,a.add(nt)}for(let X=0;X<12;X++){let Z=X/12*Math.PI*2+Math.PI/12+en(-.06,.06),nt=Jx(en(.7,1.1),[V.leaf,V.leaf2,V.leaf3][X%3]),mt=X%2?en(11.9,12.5):en(3.4,4);nt.position.set(Math.sin(Z)*mt,1.55,Math.cos(Z)*mt),a.add(nt)}for(let X=0;X<18;X++){let Z=Gi()*Math.PI*2,nt=en(19.6,22),mt=jx(en(.3,.75));mt.position.set(Math.sin(Z)*nt,.5,Math.cos(Z)*nt),a.add(mt)}let p=[V.pink,V.sun,V.cream,V.purple];for(let X=0;X<70;X++){let Z=Gi()*Math.PI*2,nt=en(2.8,17);if(m.some($=>Math.hypot(Math.sin(Z)*nt-$.group.position.x,Math.cos(Z)*nt-$.group.position.z)<2.8)||Math.abs(nt-5)<.6)continue;let Dt=ct(new Se(.13,0),p[X%4]);Dt.position.set(Math.sin(Z)*nt,1.62,Math.cos(Z)*nt),a.add(Dt)}let v=[];for(let X=0;X<6;X++){let Z=Qx(),nt=X/6*Math.PI*2,mt=en(30,48);Z.position.set(Math.sin(nt)*mt,en(9,14),Math.cos(nt)*mt),Z.userData.a=nt,Z.userData.r=mt,Z.userData.s=en(.012,.03),a.add(Z),v.push(Z)}let E=tv();a.add(E),a.traverse(X=>{if(X.isMesh){let Z=X,nt=!1;for(;Z;)Z.userData.noShadow&&(nt=!0),Z=Z.parent;nt||(X.castShadow=!0,X.receiveShadow=!0)}});let _=new Al(d,n);_.enableDamping=!0,_.dampingFactor=.08,_.enablePan=!1,_.rotateSpeed=.55,_.zoomSpeed=.6,_.autoRotate=!0,_.autoRotateSpeed=.45,_.target.set(0,2.6,0);let S={dist:26,polar:1.02};function w(){let X=n.clientWidth||innerWidth,Z=n.clientHeight||innerHeight;r.setSize(X,Z,!1);let nt=X/Z,mt=nt<.85;d.fov=mt?50:40,d.aspect=nt,d.updateProjectionMatrix();let Dt=Math.tan(sa.degToRad(d.fov/2)),$=(mt?35:39)/(2*Dt*nt),q=(mt?25.5:31)/(2*Dt);S={dist:Math.max($,q),polar:mt?.6:.95},_.minDistance=S.dist*.62,_.maxDistance=S.dist*1.2,_.minPolarAngle=.42,_.maxPolarAngle=1.22}let A=new Jn;function y(X,Z,nt,mt=_.target){A.set(X,Z,nt),d.position.setFromSpherical(A).add(mt),d.lookAt(mt)}let T=null;function R({dist:X,polar:Z,az:nt,target:mt,ms:Dt=900,done:$}){let q=_.target.clone(),ot=d.position.clone().sub(q),ut=new Jn().setFromVector3(ot),ft=nt-ut.theta;for(;ft>Math.PI;)ft-=Math.PI*2;for(;ft<-Math.PI;)ft+=Math.PI*2;T={t0:performance.now(),ms:Dt,s0:ut,dist:X,polar:Z,dAz:ft,fromT:q,toT:mt||q,done:$}}function F(X){if(!T)return!1;let Z=Math.min(1,(X-T.t0)/T.ms),nt=Z<.5?4*Z*Z*Z:1-Math.pow(-2*Z+2,3)/2,mt=T.fromT.clone().lerp(T.toT,nt);if(_.target.copy(mt),y(T.s0.radius+(T.dist-T.s0.radius)*nt,T.s0.phi+(T.polar-T.s0.phi)*nt,T.s0.theta+T.dAz*nt,mt),Z>=1){let Dt=T.done;T=null,Dt&&Dt()}return!0}let B=m.map(X=>{let Z=document.createElement("button");return Z.className="zone-badge",Z.setAttribute("aria-label",X.title.tr),Z.innerHTML=`<span class="zb-ico">${X.icon}</span><span class="zb-name">${X.titleText()}</span>`,Z.addEventListener("click",()=>at(X.id)),t.append(Z),{z:X,b:Z}});function z(){B.forEach(({z:X,b:Z})=>{Z.querySelector(".zb-name").textContent=X.titleText(),Z.setAttribute("aria-label",X.titleText())})}let L=new P;function k(){let X=n.clientWidth,Z=n.clientHeight,nt=new pt(d.position.x,d.position.z).normalize(),mt=null,Dt=-2;B.forEach(({z:$,b:q})=>{L.copy($.anchor).project(d);let ot=(L.x*.5+.5)*X,ut=(-L.y*.5+.5)*Z,ft=new pt($.anchor.x,$.anchor.z).normalize().dot(nt);q.style.transform=`translate(${ot.toFixed(1)}px, ${ut.toFixed(1)}px) translate(-50%, -100%) scale(${(.72+.28*(ft+1)/2).toFixed(2)})`,q.classList.toggle("behind",ft<-.25),q.style.zIndex=String(Math.round((ft+1)*100)),q.style.visibility=L.z>1?"hidden":"visible",ft>Dt&&L.z<=1&&(Dt=ft,mt=q)}),B.forEach(({b:$})=>$.classList.toggle("far",$!==mt))}let K=new Xr,J=new pt,ht=null;n.addEventListener("pointerdown",X=>{ht={x:X.clientX,y:X.clientY,t:performance.now()}}),n.addEventListener("pointerup",X=>{if(!ht)return;let Z=Math.hypot(X.clientX-ht.x,X.clientY-ht.y),nt=performance.now()-ht.t<450;if(ht=null,Z>10||!nt||it)return;let mt=n.getBoundingClientRect();J.set((X.clientX-mt.left)/mt.width*2-1,-((X.clientY-mt.top)/mt.height)*2+1),K.setFromCamera(J,d);let Dt=K.intersectObjects([M,...m.map(q=>q.group)],!0);if(!Dt.length)return;let $=Dt[0].object;for(;$&&!$.userData.zone&&$!==M;)$=$.parent;$===M?s&&s():$&&at($.userData.zone)});let j=null;_.addEventListener("start",()=>{_.autoRotate=!1,clearTimeout(j)}),_.addEventListener("end",()=>{clearTimeout(j),j=setTimeout(()=>_.autoRotate=!0,7e3)});let it=!1;function at(X){if(it)return;let Z=m.find(mt=>mt.id===X);if(!Z)return;it=!0,_.enabled=!1,_.autoRotate=!1;let nt=Z.group.position.clone().add(new P(0,1.3,0));i(X,"start"),R({dist:9,polar:1.05,az:Z.angle,target:nt,ms:850,done:()=>i(X,"enter")})}let Ft=!1,Rt=0,de=0,ie=new qr;function ce(X){if(!Ft)return;Rt=requestAnimationFrame(ce);let Z=ie.getElapsedTime(),nt=Math.min(.05,(X-de)/1e3||.016);de=X,g(Z),F(X)||_.update(nt),v.forEach($=>{$.userData.a+=$.userData.s*nt,$.position.x=Math.sin($.userData.a)*$.userData.r,$.position.z=Math.cos($.userData.a)*$.userData.r});let Dt=Z*.06;E.position.set(Math.sin(Dt)*29,Math.sin(Z*1.4)*.12,Math.cos(Dt)*21),E.rotation.y=Dt+Math.PI,E.rotation.z=Math.sin(Z*1.2)*.06,M.userData.flag.rotation.x=Math.sin(Z*3)*.25,f.lookAt(d.position),m.forEach($=>{let q=$.lm.userData;if(q.balloons&&q.balloons.forEach(({b:ot,line:ut,base:ft,phase:Gt})=>{ot.position.set(ft.x+Math.sin(Z*.8+Gt)*.12,ft.y+Math.sin(Z*1.3+Gt)*.15,ft.z),ut.geometry.setFromPoints([q.anchor,new P(ot.position.x,ot.position.y-.6,ot.position.z)])}),q.notes&&q.notes.forEach(({n:ot,y:ut,phase:ft})=>{ot.position.y=ut+Math.sin(Z*2+ft)*.2,ot.rotation.z=Math.sin(Z*1.5+ft)*.25}),q.spin&&q.spin.forEach((ot,ut)=>ot.rotation.y=Z*(ut?1.4:.9)),q.lid&&(q.lid.rotation.x=-1.05+Math.sin(Z*1.6)*.12),q.sheep&&(q.sheep.position.y=Math.abs(Math.sin(Z*2.2))*.12),q.moles&&q.moles.forEach((ot,ut)=>{ot.position.y=-.35+Math.max(0,Math.sin(Z*1.8+ut*2.1))*.55}),q.bear&&(q.bear.rotation.z=Math.sin(Z*1.6)*.07),q.brush&&(q.brush.rotation.z=.5+Math.sin(Z*3)*.25),q.beads&&q.beads.forEach((ot,ut)=>{ot.position.x=ot.userData.x+Math.sin(Z*1.2+ut*.7)*.08}),q.heart){let ot=1+Math.sin(Z*3)*.12;q.heart.scale.setScalar(ot),q.heart.position.y=2.5+Math.sin(Z*1.4)*.12}q.car&&(q.car.position.x=Math.sin(Z*.55)*1.5,q.car.rotation.y=Math.cos(Z*.55)>0?.2:Math.PI+.2),q.vane&&(q.vane.rotation.y=Z*.9),q.cloudPuff&&(q.cloudPuff.position.x=1.4+Math.sin(Z*.7)*.18),q.drops&&q.drops.forEach(ot=>{let ut=(Z*1.3+ot.userData.ph)%1;ot.position.y=ot.userData.y0-ut*1.7,ot.visible=ut>.05})}),r.render(a,d),k()}function tt(){w()}addEventListener("resize",tt),w(),y(S.dist*1.9,.55,-1.4);let rt=!0;return{start(){Ft||(Ft=!0,w(),de=performance.now(),Rt=requestAnimationFrame(ce),rt&&(rt=!1,_.enabled=!1,R({dist:S.dist,polar:S.polar,az:.35,ms:2600,done:()=>{_.enabled=!0}})))},stop(){Ft=!1,cancelAnimationFrame(Rt)},debug(){let X=new P(0,1.5,0).project(d);return{c:[X.x,X.y],cam:d.position.toArray().map(Z=>+Z.toFixed(1)),t:_.target.toArray(),fov:d.fov,aspect:d.aspect}},back(){it=!1,_.enabled=!1;let X=d.position.clone().sub(_.target),Z=new Jn().setFromVector3(X).theta;R({dist:S.dist,polar:S.polar,az:Z,target:new P(0,2.6,0),ms:900,done:()=>{_.enabled=!0,j=setTimeout(()=>_.autoRotate=!0,5e3)}})},refreshBadgeNames:z,select:at}}function nv(n,t){let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,128),i.strokeStyle=V.plum,i.lineWidth=10,i.strokeRect(5,5,118,118),i.font="700 84px Fredoka, system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=8,i.strokeText(n,64,70),i.fillStyle="#fff",i.fillText(n,64,70);let s=new is(e);return s.colorSpace=je,s}function Cl(n,t,e=1){let i=new pi({map:nv(n,t),roughness:.75});return new He(new Kt(e,e,e),i)}function Fh(n,t=1){let e=new $s;e.moveTo(-1,-1),e.lineTo(1,-1),e.lineTo(1,-.32),e.absarc(1,0,.32,-Math.PI/2,Math.PI/2,!1),e.lineTo(1,1),e.lineTo(.32,1),e.absarc(0,1,.32,0,Math.PI,!1),e.lineTo(-1,1),e.lineTo(-1,-1);let i=new kr(e,{depth:.3,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1,curveSegments:8});i.center();let s=ct(i,n);return s.scale.setScalar(t),s}function iv(){let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");for(let i=0;i<8;i++)for(let s=0;s<8;s++)t.fillStyle=(s+i)%2?"#FFFFFF":"#FF6F59",t.fillRect(s*8,i*8,8,8);let e=new is(n);return e.colorSpace=je,e.magFilter=ke,e}Object.assign(Dh,{boyama(){let n=new ee;[[-.55,.25],[.55,.25],[0,-.5]].forEach(([r,a],o)=>{let l=ct(new Kt(.1,2.6,.1),V.woodDark);l.position.set(r*.8,1.2,a*.8),l.rotation.set(a>0?-.18:.3,0,-r*.22),n.add(l)});let t=ct(new Kt(1.8,1.4,.08),V.cream);t.position.set(0,1.75,.3),t.rotation.x=-.18,n.add(t),[[V.red,-.45,1.95,.32],[V.sun,.2,2.05,.28],[V.blue,.45,1.55,.25],[V.leaf2,-.2,1.5,.3],[V.purple,.05,1.75,.22]].forEach(([r,a,o,l])=>{let c=ct(new Se(l,0),r);c.scale.z=.15,c.position.set(a,o,.37),c.rotation.x=-.18,n.add(c)}),[[V.red,1.3,.6],[V.sun,1.55,.05],[V.blue,1.1,-.35]].forEach(([r,a,o])=>{let l=ct(new re(.25,.22,.34,10),V.cream);l.position.set(a,.17,o);let c=ct(new re(.22,.22,.05,10),r);c.position.set(a,.33,o),n.add(l,c)});let e=new ee,i=ct(new re(.05,.05,1.1,6),V.wood),s=ct(new Cn(.09,.26,6),V.coral);return s.position.y=.66,e.add(i,s),e.position.set(1.3,.9,.6),n.add(e),n.userData.brush=e,n},harfler(){let n=new ee,t=Cl("A",V.coral,1.1);t.position.set(-.6,.55,0),t.rotation.y=.25;let e=Cl("B",V.blue,1.1);e.position.set(.6,.55,.1),e.rotation.y=-.2;let i=Cl("C",V.leaf,1);i.position.set(0,1.6,.05),i.rotation.y=.1;let s=Cl("\xC7",V.sun,.8);return s.position.set(1.35,.4,.9),s.rotation.y=-.6,n.add(t,e,i,s),n},yapboz(){let n=new ee,t=Fh(V.coral,.85);t.position.set(-.2,1.05,0),t.rotation.set(-.15,.2,.08);let e=Fh(V.sun,.55);e.rotation.x=-Math.PI/2,e.position.set(1.1,.12,.7);let i=Fh(V.blue,.55);return i.rotation.set(-Math.PI/2,0,1.2),i.position.set(-1.3,.12,.8),n.add(t,e,i),n},oruntu(){let n=new ee;[-1.1,1.1].forEach(r=>{let a=ct(new Kt(.16,2.2,.16),V.woodDark);a.position.set(r,1.1,0),n.add(a)});let t=ct(new Kt(2.5,.16,.2),V.woodDark);t.position.y=2.2;let e=ct(new Kt(2.7,.18,.7),V.wood);e.position.y=.09,n.add(t,e);let i=[],s=[[V.coral,V.sun],[V.blue,V.blue,V.pink],[V.leaf2,V.purple,V.sun]];return[.65,1.2,1.75].forEach((r,a)=>{let o=ct(new re(.03,.03,2.2,5),V.cream);o.rotation.z=Math.PI/2,o.position.y=r,n.add(o);for(let l=0;l<6;l++){let c=ct(new Sn(.17,10,8),s[a][l%s[a].length],{roughness:.4});c.scale.x=.8;let h=-.85+l*.3;c.position.set(h,r,0),c.userData.x=h,n.add(c),i.push(c)}}),n.userData.beads=i,n},besle(){let n=new ee,t=new He(new Kt(2.8,.05,2.2),new pi({map:iv(),roughness:.9}));t.position.y=.03,t.rotation.y=.25,n.add(t);let e=new ee,i=ct(new Se(.62,1),"#A86B45");i.scale.set(1,1.1,.9),i.position.y=.62;let s=ct(new Se(.4,1),"#E7C29A");s.scale.set(1,1.1,.5),s.position.set(0,.58,.38);let r=ct(new Se(.45,1),"#A86B45");r.position.y=1.45;let a=ct(new Se(.2,1),"#E7C29A");a.scale.z=.7,a.position.set(0,1.38,.38);let o=ct(new Se(.07,0),V.plum);o.position.set(0,1.44,.53),e.add(i,s,r,a,o),[-.32,.32].forEach(u=>{let f=ct(new Se(.15,0),"#A86B45");f.position.set(u,1.8,0);let g=ct(new Se(.05,0),V.plum);g.position.set(u*.45,1.55,.4);let M=ct(new Se(.17,0),"#A86B45");M.position.set(u*1.5,.15,.4),e.add(f,g,M)}),e.position.set(-.4,.05,-.2),n.add(e),n.userData.bear=e;let l=ct(new re(.45,.35,.4,10),V.wood);l.position.set(.9,.25,.4);let c=ct(new Se(.18,1),V.red,{roughness:.5});c.position.set(.85,.55,.4);let h=ct(new Se(.16,1),"#B5D334",{roughness:.5});h.position.set(1.05,.52,.25);let d=ct(new as(.22,.06,6,10,Math.PI*.8),V.sun);return d.position.set(.3,.12,.9),d.rotation.x=-Math.PI/2,n.add(l,c,h,d),n},saklambac(){let n=new ee,t=[];return[[-1,-.3],[.9,-.5],[0,.8]].forEach(([e,i],s)=>{let r=ct(new re(.5,.75,.32,10),V.woodDark);r.position.set(e,.16,i);let a=ct(new re(.4,.4,.02,10),V.plum);a.position.set(e,.33,i),n.add(r,a);let o=new ee,l=ct(new Se(.36,1),"#A86B45");l.scale.y=1.15;let c=ct(new Se(.08,0),V.pink);c.position.set(0,.05,.34),o.add(l,c),[-.13,.13].forEach(d=>{let u=ct(new Se(.05,0),V.plum);u.position.set(d,.17,.3),o.add(u)});let h=new ee;h.add(o),h.position.set(e,.33,i),n.add(h),t.push(o)}),n.userData.moles=t,n}});Object.assign(Dh,{duygular(){let n=new ee;[[V.sun,-1.1,.25],[V.blue,0,-.1],[V.pink,1.1,.3]].forEach(([i,s,r],a)=>{let o=ct(new re(.1,.14,1.1+a*.25,6),V.woodDark);o.position.set(s,(1.1+a*.25)/2,r);let l=ct(new Sn(.52,14,12),i,{roughness:.6});l.position.set(s,1.1+a*.25+.4,r),n.add(o,l),[-.19,.19].forEach(h=>{let d=ct(new Sn(.08,8,6),V.plum);d.position.set(s+h,1.1+a*.25+.5,r+.45),n.add(d)});let c=ct(a===1?new Kt(.26,.07,.07):new as(.17,.05,6,10,Math.PI),V.plum);a!==1&&(c.rotation.z=a===0?Math.PI:0),c.position.set(s,1.1+a*.25+.22,r+.45),n.add(c)});let e=ct(new Sn(.3,12,10),V.pink,{roughness:.4,emissive:V.pink,emissiveIntensity:.2});return e.position.set(0,2.5,0),n.add(e),n.userData.heart=e,n},araclar(){let n=new ee,t=ct(new Kt(4.4,.08,1.5),"#8A8FA3");t.position.y=.06,t.rotation.y=.2,n.add(t);for(let o=-1;o<=1;o++){let l=ct(new Kt(.5,.04,.12),V.cream);l.position.set(o*1.3,.12,0),l.rotation.y=.2,n.add(l)}let e=new ee,i=ct(new Kt(1.5,.45,.8),V.red);i.position.y=.42;let s=ct(new Kt(.8,.4,.7),"#8FD6F5");s.position.set(-.05,.82,0),e.add(i,s),[[-.5,.42],[.5,.42],[-.5,-.42],[.5,-.42]].forEach(([o,l])=>{let c=ct(new re(.22,.22,.14,10),V.plum);c.rotation.x=Math.PI/2,c.position.set(o,.22,l),e.add(c)}),e.position.y=.1,n.add(e),n.userData.car=e;let r=ct(new re(.07,.07,1.8,6),V.woodDark);r.position.set(1.8,.9,1.1);let a=ct(new Kt(.3,.72,.26),V.plum);return a.position.set(1.8,2,1.1),n.add(r,a),[[V.red,2.22],[V.sun,2],[V.leaf2,1.78]].forEach(([o,l])=>{let c=ct(new Sn(.09,8,6),o,{emissive:o,emissiveIntensity:.5});c.position.set(1.8,l,1.25),n.add(c)}),n},hava(){let n=new ee,t=ct(new re(.09,.13,2.6,7),V.cream);t.position.y=1.3,n.add(t);let e=new ee,i=ct(new Cn(.17,.5,4),V.coral);i.rotation.z=-Math.PI/2,i.position.x=.55;let s=ct(new Kt(.4,.3,.03),V.sun);s.position.x=-.5;let r=ct(new Kt(1.1,.06,.06),V.woodDark);e.add(i,s,r),e.position.y=2.75,n.add(e),n.userData.vane=e;let a=ct(new Sn(.42,14,12),V.sun,{emissive:V.sun,emissiveIntensity:.4});a.position.set(-1.3,2.3,.3),n.add(a);let o=new ee;[[0,0,.42],[.42,.1,.34],[-.4,.05,.3]].forEach(([h,d,u])=>{let f=ct(new Sn(u,10,8),V.white,{roughness:1});f.position.set(h,d,0),o.add(f)}),o.position.set(1.4,2.5,-.2),n.add(o),n.userData.cloudPuff=o;let l=[];for(let h=0;h<5;h++){let d=ct(new Cn(.07,.22,5),V.blue,{roughness:.3});d.position.set(1.4+(h-2)*.22,2,-.2+h%2*.12),d.userData.y0=2,d.userData.ph=h*.6,n.add(d),l.push(d)}n.userData.drops=l;let c=ct(new re(.6,.6,.04,14),V.shallow,{roughness:.2,metalness:.2});return c.position.set(1.4,.06,.9),c.scale.x=1.4,n.add(c),n}});var gt="#3B2C5A",_t=`stroke="${gt}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,we=`stroke="${gt}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`,Te=(n,t="0 0 120 120",e="")=>`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg" class="art"${e?` role="img" aria-label="${e}"`:' aria-hidden="true"'}>${n}</svg>`,gf=(n,t,e=6.5)=>`<ellipse cx="${n}" cy="${t}" rx="${e}" ry="${(e*1.15).toFixed(1)}" fill="${gt}"/><circle cx="${n+2}" cy="${t-e*.42}" r="${(e*.38).toFixed(1)}" fill="#fff"/>`,Vn=(n,t=44,e=76,i=6.5)=>`<g class="blink">${gf(t,n,i)}${gf(e,n,i)}</g>`,Vi=(n,t=34,e=86,i="#FF8FA3")=>`<ellipse cx="${t}" cy="${n}" rx="7" ry="4.5" fill="${i}" opacity=".6"/><ellipse cx="${e}" cy="${n}" rx="7" ry="4.5" fill="${i}" opacity=".6"/>`,Nh=n=>`<path d="M60 ${n} v4 M60 ${n+4} q-5 5 -10 1 M60 ${n+4} q5 5 10 1" fill="none" ${_t}/>`;function Rl(n,t,e,i,s,r=-Math.PI/2){let a=[];for(let o=0;o<e*2;o++){let l=o%2?s:i,c=r+o*Math.PI/e;a.push(`${(n+l*Math.cos(c)).toFixed(1)},${(t+l*Math.sin(c)).toFixed(1)}`)}return a.join(" ")}var sv={kedi:()=>`
    <path class="ear-l" d="M24 52 L27 12 L55 34 Z" fill="#FF9F45" ${_t}/><path class="ear-r" d="M96 52 L93 12 L65 34 Z" fill="#FF9F45" ${_t}/>
    <path d="M31 40 L32 23 L45 33Z" fill="#FFC1CC"/><path d="M89 40 L88 23 L75 33Z" fill="#FFC1CC"/>
    <ellipse cx="60" cy="68" rx="42" ry="36" fill="#FF9F45" ${_t}/>
    <path d="M60 35 v9 M49 37 l2 8 M71 37 l-2 8" stroke="#E07B1F" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="60" cy="83" rx="17" ry="11" fill="#FFE3C2"/>
    ${Vn(64)}${Vi(80,32,88)}
    <path d="M55 76 h10 l-5 6 z" fill="#FF6F91" ${we}/>
    <path d="M60 82 q-5 6 -10 2 M60 82 q5 6 10 2" fill="none" ${we}/>
    <path d="M30 80 L12 76 M30 86 L12 90 M90 80 L108 76 M90 86 L108 90" ${we}/>`,kopek:()=>`
    <ellipse cx="60" cy="64" rx="38" ry="38" fill="#F2C48D" ${_t}/>
    <ellipse cx="77" cy="57" rx="12" ry="11" fill="#D99A5B"/>
    <ellipse class="ear-l" cx="22" cy="64" rx="13" ry="27" fill="#8A5A3B" ${_t} transform="rotate(18 22 64)"/>
    <ellipse class="ear-r" cx="98" cy="64" rx="13" ry="27" fill="#8A5A3B" ${_t} transform="rotate(-18 98 64)"/>
    <ellipse cx="60" cy="83" rx="21" ry="15" fill="#FFF1DE"/>
    ${Vn(58,45,76)}
    <path d="M54 88 q6 12 12 0 z" fill="#FF6F91" ${we}/>
    <path d="M60 80 v6 M60 86 q-6 5 -11 1 M60 86 q6 5 11 1" fill="none" ${we}/>
    <ellipse cx="60" cy="76" rx="9" ry="6.5" fill="${gt}"/><ellipse cx="57" cy="74" rx="3" ry="1.8" fill="#fff" opacity=".7"/>`,inek:()=>`
    <path d="M36 34 q-9 -12 -3 -22 q5 11 13 15z" fill="#FFF1DE" ${_t}/><path d="M84 34 q9 -12 3 -22 q-5 11 -13 15z" fill="#FFF1DE" ${_t}/>
    <ellipse class="ear-l" cx="18" cy="52" rx="15" ry="8" fill="#fff" ${_t} transform="rotate(-15 18 52)"/>
    <ellipse class="ear-r" cx="102" cy="52" rx="15" ry="8" fill="#fff" ${_t} transform="rotate(15 102 52)"/>
    <ellipse cx="60" cy="60" rx="37" ry="37" fill="#fff" ${_t}/>
    <path d="M30 50 q6 -18 22 -14 q6 12 -6 18 q-12 5 -16 -4z" fill="${gt}" opacity=".85"/>
    <ellipse cx="84" cy="66" rx="8" ry="6" fill="${gt}" opacity=".85"/>
    ${Vn(58,46,75)}
    <ellipse cx="60" cy="88" rx="27" ry="17" fill="#FFB3C1" ${_t}/>
    <ellipse cx="50" cy="88" rx="3.5" ry="5" fill="${gt}"/><ellipse cx="70" cy="88" rx="3.5" ry="5" fill="${gt}"/>`,koyun:()=>{let n=[];for(let i=0;i<11;i++){let s=i/11*Math.PI*2;n.push([60+Math.cos(s)*36,58+Math.sin(s)*33])}let t=[[48,44],[60,40],[72,44]],e=(i,s,r)=>i.map(([a,o])=>`<circle cx="${a.toFixed(1)}" cy="${o.toFixed(1)}" r="${s}" fill="#FFF8EC" ${r}/>`).join("");return`
      ${e(n,15,_t)}<circle cx="60" cy="58" r="36" fill="#FFF8EC"/>${e(n,15,"")}
      <ellipse cx="24" cy="70" rx="13" ry="7" fill="#6B5566" ${_t} transform="rotate(25 24 70)"/>
      <ellipse cx="96" cy="70" rx="13" ry="7" fill="#6B5566" ${_t} transform="rotate(-25 96 70)"/>
      <ellipse cx="60" cy="72" rx="24" ry="28" fill="#F6D7C3" ${_t}/>
      ${e(t,10,_t)}${e(t,10,"")}
      ${Vn(70,51,69,5.5)}${Vi(83,44,76)}
      <path d="M55 86 q5 5 10 0" fill="none" ${_t}/>`},aslan:()=>`
    <polygon class="mane" points="${Rl(60,62,14,54,42)}" fill="#E8781E" ${_t}/>
    <circle cx="36" cy="38" r="10" fill="#FFC85C" ${_t}/><circle cx="84" cy="38" r="10" fill="#FFC85C" ${_t}/>
    <circle cx="36" cy="38" r="5" fill="#F7A73C"/><circle cx="84" cy="38" r="5" fill="#F7A73C"/>
    <circle cx="60" cy="64" r="32" fill="#FFC85C" ${_t}/>
    <ellipse cx="52" cy="81" rx="10" ry="8" fill="#FFF1DE"/><ellipse cx="68" cy="81" rx="10" ry="8" fill="#FFF1DE"/>
    ${Vn(60,48,72,6)}
    <path d="M53 72 h14 l-7 7z" fill="#8A4B2A" ${we}/>
    ${Nh(79)}`,fil:()=>`
    <ellipse class="ear-l" cx="24" cy="60" rx="22" ry="29" fill="#A9BED3" ${_t}/><ellipse class="ear-r" cx="96" cy="60" rx="22" ry="29" fill="#A9BED3" ${_t}/>
    <ellipse cx="26" cy="62" rx="13" ry="19" fill="#F5B7C6"/><ellipse cx="94" cy="62" rx="13" ry="19" fill="#F5B7C6"/>
    <ellipse cx="60" cy="56" rx="31" ry="33" fill="#A9BED3" ${_t}/>
    <path d="M60 70 q0 26 16 28" fill="none" stroke="${gt}" stroke-width="22" stroke-linecap="round"/>
    <path d="M60 70 q0 26 16 28" fill="none" stroke="#A9BED3" stroke-width="15" stroke-linecap="round"/>
    <path d="M55 84 h10 M57 91 h10" stroke="#7F97AE" stroke-width="2.5" stroke-linecap="round"/>
    ${Vn(54,47,73)}${Vi(68,38,82)}`,kurbaga:()=>`
    <circle class="ear-l" cx="36" cy="38" r="17" fill="#7ACB5A" ${_t}/><circle class="ear-r" cx="84" cy="38" r="17" fill="#7ACB5A" ${_t}/>
    <ellipse cx="60" cy="70" rx="47" ry="32" fill="#7ACB5A" ${_t}/>
    <circle cx="36" cy="38" r="17" fill="#7ACB5A"/><circle cx="84" cy="38" r="17" fill="#7ACB5A"/>
    <ellipse cx="60" cy="72" rx="44" ry="28" fill="#7ACB5A"/>
    <circle cx="36" cy="36" r="11" fill="#fff" ${we}/><circle cx="84" cy="36" r="11" fill="#fff" ${we}/>
    ${Vn(37,37,83,5.5)}
    <circle cx="54" cy="60" r="2" fill="${gt}"/><circle cx="66" cy="60" r="2" fill="${gt}"/>
    <path d="M28 70 q32 26 64 0" fill="none" ${_t}/>
    ${Vi(74,24,96)}`,ayi:()=>`
    <circle class="ear-l" cx="28" cy="32" r="14" fill="#A86B45" ${_t}/><circle class="ear-r" cx="92" cy="32" r="14" fill="#A86B45" ${_t}/>
    <circle cx="28" cy="32" r="7" fill="#E7B48A"/><circle cx="92" cy="32" r="7" fill="#E7B48A"/>
    <ellipse cx="60" cy="64" rx="41" ry="37" fill="#A86B45" ${_t}/>
    <ellipse cx="60" cy="81" rx="19" ry="14" fill="#E7C29A"/>
    ${Vn(60)}${Vi(76,30,90)}
    <ellipse cx="60" cy="74" rx="8.5" ry="5.5" fill="${gt}"/>
    ${Nh(79)}`,tavsan:()=>`
    <ellipse class="ear-l" cx="43" cy="28" rx="11" ry="27" fill="#F4F1F6" ${_t} transform="rotate(-8 43 28)"/>
    <ellipse class="ear-r" cx="77" cy="28" rx="11" ry="27" fill="#F4F1F6" ${_t} transform="rotate(8 77 28)"/>
    <ellipse cx="43" cy="30" rx="5" ry="18" fill="#FFC1CC" transform="rotate(-8 43 30)"/>
    <ellipse cx="77" cy="30" rx="5" ry="18" fill="#FFC1CC" transform="rotate(8 77 30)"/>
    <ellipse cx="60" cy="74" rx="37" ry="32" fill="#F4F1F6" ${_t}/>
    ${Vn(70,47,73,6)}${Vi(84,36,84)}
    <rect x="55.5" y="88" width="9" height="8" rx="2" fill="#fff" ${we}/>
    <ellipse cx="60" cy="81" rx="5.5" ry="3.8" fill="#FF6F91"/>
    <path d="M60 84 v3 M60 87 q-4 3 -8 0 M60 87 q4 3 8 0" fill="none" ${we}/>`,ordek:()=>`
    <path d="M56 26 q-8 -14 4 -16 q-3 8 7 13" fill="#FFD43B" ${_t}/>
    <circle cx="60" cy="62" r="38" fill="#FFD43B" ${_t}/>
    ${Vn(56,46,74)}${Vi(72,32,88)}
    <path class="beak" d="M34 78 q26 -14 52 0 q-26 20 -52 0 z" fill="#FF9A3C" ${_t}/>
    <path d="M38 79 q22 5 44 0" fill="none" ${we}/>`,maymun:()=>`
    <circle class="ear-l" cx="20" cy="62" r="14" fill="#9A5F3A" ${_t}/><circle class="ear-r" cx="100" cy="62" r="14" fill="#9A5F3A" ${_t}/>
    <circle cx="20" cy="62" r="8" fill="#F2C9A0"/><circle cx="100" cy="62" r="8" fill="#F2C9A0"/>
    <circle cx="60" cy="60" r="38" fill="#9A5F3A" ${_t}/>
    <circle cx="47" cy="58" r="15" fill="#F2C9A0"/><circle cx="73" cy="58" r="15" fill="#F2C9A0"/>
    <ellipse cx="60" cy="79" rx="26" ry="17" fill="#F2C9A0"/>
    <path d="M50 24 q10 -12 16 2" fill="none" ${_t}/>
    ${Vn(58,47,73,6)}
    <circle cx="56" cy="73" r="2" fill="${gt}"/><circle cx="64" cy="73" r="2" fill="${gt}"/>
    <path d="M47 82 q13 11 26 0" fill="none" ${_t}/>`,panda:()=>`
    <circle class="ear-l" cx="28" cy="32" r="13" fill="${gt}"/><circle class="ear-r" cx="92" cy="32" r="13" fill="${gt}"/>
    <ellipse cx="60" cy="64" rx="41" ry="37" fill="#fff" ${_t}/>
    <ellipse cx="44" cy="62" rx="11" ry="14" fill="${gt}" transform="rotate(30 44 62)"/>
    <ellipse cx="76" cy="62" rx="11" ry="14" fill="${gt}" transform="rotate(-30 76 62)"/>
    <g class="blink"><circle cx="45" cy="60" r="5" fill="#fff"/><circle cx="75" cy="60" r="5" fill="#fff"/>
    <circle cx="46" cy="61" r="2.8" fill="${gt}"/><circle cx="74" cy="61" r="2.8" fill="${gt}"/></g>
    ${Vi(80,32,88)}
    <ellipse cx="60" cy="76" rx="6.5" ry="4.5" fill="${gt}"/>
    ${Nh(80)}`},Ge=[{id:"kedi",name:{tr:"Kedi",en:"Cat"},acc:{tr:"Kediyi",en:"the cat"},sound:{tr:"Miyav!",en:"Meow!"},color:"#FFE0C2"},{id:"kopek",name:{tr:"K\xF6pek",en:"Dog"},acc:{tr:"K\xF6pe\u011Fi",en:"the dog"},sound:{tr:"Hav hav!",en:"Woof woof!"},color:"#FCE6CD"},{id:"inek",name:{tr:"\u0130nek",en:"Cow"},acc:{tr:"\u0130ne\u011Fi",en:"the cow"},sound:{tr:"M\xF6\xF6!",en:"Moo!"},color:"#E8F5DB"},{id:"koyun",name:{tr:"Koyun",en:"Sheep"},acc:{tr:"Koyunu",en:"the sheep"},sound:{tr:"Mee!",en:"Baa!"},color:"#E6F1FA"},{id:"aslan",name:{tr:"Aslan",en:"Lion"},acc:{tr:"Aslan\u0131",en:"the lion"},sound:{tr:"Roarrr!",en:"Roar!"},color:"#FFE9B8"},{id:"fil",name:{tr:"Fil",en:"Elephant"},acc:{tr:"Fili",en:"the elephant"},sound:{tr:"P\u0131r\u0131\u0131\u0131\u0131!",en:"Toot!"},color:"#E3ECF6"},{id:"kurbaga",name:{tr:"Kurba\u011Fa",en:"Frog"},acc:{tr:"Kurba\u011Fay\u0131",en:"the frog"},sound:{tr:"Vrak vrak!",en:"Ribbit!"},color:"#DFF5D3"},{id:"ayi",name:{tr:"Ay\u0131",en:"Bear"},acc:{tr:"Ay\u0131y\u0131",en:"the bear"},sound:{tr:"H\u0131mmm!",en:"Grrr!"},color:"#F3E1D2"},{id:"tavsan",name:{tr:"Tav\u015Fan",en:"Rabbit"},acc:{tr:"Tav\u015Fan\u0131",en:"the rabbit"},sound:{tr:"Hop hop!",en:"Hop hop!"},color:"#FBE4EC"},{id:"ordek",name:{tr:"\xD6rdek",en:"Duck"},acc:{tr:"\xD6rde\u011Fi",en:"the duck"},sound:{tr:"Vak vak!",en:"Quack quack!"},color:"#DDF2F7"},{id:"maymun",name:{tr:"Maymun",en:"Monkey"},acc:{tr:"Maymunu",en:"the monkey"},sound:{tr:"Uu uu aa aa!",en:"Ooh ooh aah aah!"},color:"#F5E5D3"},{id:"panda",name:{tr:"Panda",en:"Panda"},acc:{tr:"Panday\u0131",en:"the panda"},sound:{tr:"H\u0131mm, bambu!",en:"Mmm, bamboo!"},color:"#E9F3E4"}];function Xe(n,t=""){return Te(`<g class="creature">${sv[n]()}</g>`,"0 0 120 120",t)}var rv={elma:`<path d="M40 22 C56 12 72 24 70 44 C68 64 52 74 40 68 C28 74 12 64 10 44 C8 24 24 12 40 22Z" fill="#FF5A4E" ${_t}/>
    <path d="M40 22 q0 -10 4 -14" fill="none" ${_t}/><path d="M44 14 q12 -8 18 2 q-10 6 -18 -2z" fill="#5BBA6F" ${we}/>
    <ellipse cx="25" cy="36" rx="4.5" ry="8" fill="#fff" opacity=".5" transform="rotate(20 25 36)"/>`,portakal:`<circle cx="40" cy="45" r="26" fill="#FFA23A" ${_t}/>
    <path d="M40 19 q10 -11 19 -3 q-9 9 -19 3z" fill="#5BBA6F" ${we}/>
    <circle cx="50" cy="38" r="1.6" fill="#E07B1F"/><circle cx="32" cy="54" r="1.6" fill="#E07B1F"/><circle cx="48" cy="58" r="1.6" fill="#E07B1F"/>
    <ellipse cx="28" cy="37" rx="4" ry="7" fill="#fff" opacity=".45" transform="rotate(25 28 37)"/>`,cilek:`<path d="M40 72 C20 60 11 40 17 29 C25 18 55 18 63 29 C69 40 60 60 40 72Z" fill="#FF4F6D" ${_t}/>
    <g fill="#FFE08A"><ellipse cx="30" cy="36" rx="1.8" ry="2.6"/><ellipse cx="44" cy="34" rx="1.8" ry="2.6"/><ellipse cx="54" cy="40" rx="1.8" ry="2.6"/>
    <ellipse cx="36" cy="48" rx="1.8" ry="2.6"/><ellipse cx="48" cy="52" rx="1.8" ry="2.6"/><ellipse cx="40" cy="62" rx="1.8" ry="2.6"/><ellipse cx="26" cy="46" rx="1.8" ry="2.6"/></g>
    <path d="M24 25 l8 -10 l8 7 l8 -7 l8 10 q-16 6 -32 0z" fill="#5BBA6F" ${we}/>`,armut:`<path d="M40 14 C49 14 48 27 53 34 C67 44 65 71 40 71 C15 71 13 44 27 34 C32 27 31 14 40 14Z" fill="#B5D334" ${_t}/>
    <path d="M40 15 q1 -8 5 -11" fill="none" ${_t}/>
    <ellipse cx="28" cy="50" rx="4" ry="8" fill="#fff" opacity=".45" transform="rotate(15 28 50)"/>`,kiraz:`<path d="M27 46 q6 -24 20 -36 M53 48 q-2 -22 -6 -38" fill="none" stroke="#5E8C3A" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M47 10 q12 -6 18 4 q-10 6 -18 -4z" fill="#5BBA6F" ${we}/>
    <circle cx="27" cy="57" r="13" fill="#E8334A" ${_t}/><circle cx="53" cy="59" r="13" fill="#E8334A" ${_t}/>
    <circle cx="23" cy="53" r="3" fill="#fff" opacity=".5"/><circle cx="49" cy="55" r="3" fill="#fff" opacity=".5"/>`,muz:`<path d="M12 26 q4 40 46 38 q12 -1 16 -9 q-32 6 -48 -30 q-8 -6 -14 1z" fill="#FFD43B" ${_t}/>
    <path d="M12 26 l-3 -6" ${_t} stroke="#7A5530"/><path d="M26 30 q10 22 34 26" fill="none" stroke="#E8B923" stroke-width="2.5" stroke-linecap="round"/>`},Wn=[{id:"elma",name:{tr:"elma",en:"apples"}},{id:"portakal",name:{tr:"portakal",en:"oranges"}},{id:"cilek",name:{tr:"\xE7ilek",en:"strawberries"}},{id:"armut",name:{tr:"armut",en:"pears"}},{id:"kiraz",name:{tr:"kiraz",en:"cherries"}},{id:"muz",name:{tr:"muz",en:"bananas"}}],gi=n=>Te(rv[n],"0 0 80 80"),la=[{id:"daire",name:{tr:"Daire",en:"Circle"},color:"#FF6F59"},{id:"kare",name:{tr:"Kare",en:"Square"},color:"#3FA7D6"},{id:"ucgen",name:{tr:"\xDC\xE7gen",en:"Triangle"},color:"#FFC93C"},{id:"yildiz",name:{tr:"Y\u0131ld\u0131z",en:"Star"},color:"#9B6DD6"},{id:"kalp",name:{tr:"Kalp",en:"Heart"},color:"#FF5C8A"},{id:"dikdortgen",name:{tr:"Dikd\xF6rtgen",en:"Rectangle"},color:"#5BBA6F"}],av={daire:'<circle cx="50" cy="50" r="38"/>',kare:'<rect x="14" y="14" width="72" height="72" rx="8"/>',ucgen:'<path d="M50 10 L90 84 H10 Z"/>',yildiz:`<polygon points="${Rl(50,53,5,42,19)}"/>`,kalp:'<path d="M50 86 C20 66 8 48 12 32 C16 16 40 12 50 30 C60 12 84 16 88 32 C92 48 80 66 50 86Z"/>',dikdortgen:'<rect x="8" y="26" width="84" height="48" rx="8"/>'};function ir(n,t,e="solid"){let i=e==="hole"?`fill="rgba(59,44,90,.10)" stroke="${gt}" stroke-width="4" stroke-dasharray="9 8" stroke-linejoin="round"`:`fill="${t}" stroke="${gt}" stroke-width="4" stroke-linejoin="round"`,s=e==="solid"?'<ellipse cx="34" cy="34" rx="8" ry="5" fill="#fff" opacity=".35" transform="rotate(-30 34 34)"/>':"";return Te(`<g ${i}>${av[n]}</g>${s}`,"0 0 100 100")}function Uh(n){return Te(`
    <path d="M50 118 q-6 14 4 26 q8 10 -2 22" fill="none" stroke="${gt}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M50 8 C76 8 92 30 90 56 C88 86 66 108 50 110 C34 108 12 86 10 56 C8 30 24 8 50 8Z" fill="${n}" ${_t}/>
    <path d="M44 109 h12 l-3 9 h-6z" fill="${n}" ${we}/>
    <ellipse cx="32" cy="38" rx="8" ry="15" fill="#fff" opacity=".45" transform="rotate(22 32 38)"/>`,"0 0 100 170")}function Pl(){return Te(`
    <ellipse class="foot" cx="58" cy="156" rx="15" ry="8" fill="#E85D44" ${_t}/>
    <ellipse class="foot" cx="102" cy="156" rx="15" ry="8" fill="#E85D44" ${_t}/>
    <ellipse class="arm arm-l" cx="22" cy="106" rx="9" ry="13" fill="#FF7A5C" ${_t} transform="rotate(35 22 106)"/>
    <ellipse class="arm arm-r" cx="138" cy="106" rx="9" ry="13" fill="#FF7A5C" ${_t} transform="rotate(-35 138 106)"/>
    <path d="M80 38 C118 38 140 64 140 100 C140 136 112 156 80 156 C48 156 20 136 20 100 C20 64 42 38 80 38Z" fill="#FF7A5C" ${_t}/>
    <ellipse cx="80" cy="122" rx="34" ry="24" fill="#FFC2A8"/>
    <g class="sprout">
      <path d="M80 40 q-2 -14 4 -22" fill="none" stroke="${gt}" stroke-width="4" stroke-linecap="round"/>
      <path d="M84 19 q18 -14 30 0 q-14 12 -30 0z" fill="#5BBA6F" ${_t}/>
      <path d="M82 23 q-16 -12 -27 2 q12 10 27 -2z" fill="#7ACB5A" ${_t}/>
    </g>
    <g class="blink">
      <ellipse cx="60" cy="86" rx="14" ry="16" fill="#fff" ${_t}/><ellipse cx="100" cy="86" rx="14" ry="16" fill="#fff" ${_t}/>
      <ellipse class="pupil" cx="61" cy="89" rx="7.5" ry="9" fill="${gt}"/><ellipse class="pupil" cx="101" cy="89" rx="7.5" ry="9" fill="${gt}"/>
      <circle cx="64.5" cy="84.5" r="2.8" fill="#fff"/><circle cx="104.5" cy="84.5" r="2.8" fill="#fff"/>
    </g>
    <g class="brows"><path d="M48 62 q12 -7 24 -2" fill="none" stroke="${gt}" stroke-width="4" stroke-linecap="round"/><path d="M112 60 q-12 -7 -24 -2" fill="none" stroke="${gt}" stroke-width="4" stroke-linecap="round"/></g>
    <ellipse cx="44" cy="110" rx="9" ry="5.5" fill="#FF4F6D" opacity=".35"/><ellipse cx="116" cy="110" rx="9" ry="5.5" fill="#FF4F6D" opacity=".35"/>
    <path class="mouth-smile" d="M68 108 q12 13 24 0" fill="none" stroke="${gt}" stroke-width="4" stroke-linecap="round"/>
    <ellipse class="mouth-open" cx="80" cy="112" rx="9" ry="7.5" fill="#8E2C48" ${we}/>`,"0 0 160 170","Pofi")}var qe={home:Te(`<path d="M14 46 L50 16 L86 46" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 44 V82 H76 V44" fill="none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"/>
    <rect x="42" y="58" width="16" height="24" rx="3" fill="currentColor"/>`,"0 0 100 100"),speaker:Te(`<path d="M16 38 H32 L52 20 V80 L32 62 H16 Z" fill="currentColor" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/>
    <path d="M64 36 q10 14 0 28 M74 26 q18 24 0 48" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>`,"0 0 100 100"),star:Te(`<polygon points="${Rl(50,54,5,44,21)}" fill="#FFC93C" stroke="${gt}" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="38" cy="40" rx="6" ry="4" fill="#fff" opacity=".6" transform="rotate(-30 38 40)"/>`,"0 0 100 100"),album:Te(`<rect x="16" y="14" width="68" height="74" rx="10" fill="#5BBA6F" stroke="${gt}" stroke-width="5"/>
    <rect x="16" y="14" width="14" height="74" rx="6" fill="#3E9B57" stroke="${gt}" stroke-width="5"/>
    <circle cx="58" cy="44" r="13" fill="#FFC93C" stroke="${gt}" stroke-width="4"/><path d="M42 72 h32" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`,"0 0 100 100"),gear:Te(`<g fill="currentColor"><circle cx="50" cy="50" r="26"/>${[0,45,90,135,180,225,270,315].map(n=>`<rect x="43" y="10" width="14" height="20" rx="4" transform="rotate(${n} 50 50)"/>`).join("")}</g>
    <circle cx="50" cy="50" r="11" fill="#fff"/>`,"0 0 100 100"),play:Te('<path d="M34 20 L82 50 L34 80 Z" fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round"/>',"0 0 100 100"),close:Te('<path d="M24 24 L76 76 M76 24 L24 76" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>',"0 0 100 100"),lock:Te('<rect x="22" y="44" width="56" height="44" rx="8" fill="currentColor"/><path d="M34 46 V32 a16 16 0 0 1 32 0 V46" fill="none" stroke="currentColor" stroke-width="9"/>',"0 0 100 100")},Il={hayvanlar:Xe("kedi"),balonlar:Te(`<path d="M50 74 q-4 10 2 18" fill="none" stroke="${gt}" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 10 C70 10 80 26 78 42 C76 62 60 72 50 74 C40 72 24 62 22 42 C20 26 30 10 50 10Z" fill="#FF6F59" ${_t}/>
    <ellipse cx="38" cy="30" rx="5" ry="10" fill="#fff" opacity=".5" transform="rotate(22 38 30)"/>`,"0 0 100 100"),sayilar:Te(`<circle cx="50" cy="52" r="40" fill="#FFC93C" ${_t}/><text x="50" y="66" text-anchor="middle" font-family="Fredoka, system-ui" font-weight="700" font-size="40" fill="${gt}">123</text>`,"0 0 100 100"),sekiller:Te(`<path d="M30 14 L54 54 H6 Z" fill="#FFC93C" ${_t}/><circle cx="70" cy="34" r="20" fill="#3FA7D6" ${_t}/>
    <rect x="34" y="56" width="34" height="34" rx="5" fill="#FF6F59" ${_t}/>`,"0 0 100 100"),hafiza:Te(`<rect x="10" y="22" width="44" height="60" rx="8" fill="#9B6DD6" ${_t} transform="rotate(-10 32 52)"/>
    <rect x="44" y="18" width="44" height="60" rx="8" fill="#fff" ${_t} transform="rotate(8 66 48)"/>
    <polygon points="${Rl(66,50,5,14,6)}" fill="#FFC93C" ${we} transform="rotate(8 66 48)"/>`,"0 0 100 100"),muzik:Te(`<path d="M38 74 V22 L80 12 V64" fill="none" stroke="${gt}" stroke-width="7" stroke-linejoin="round"/>
    <ellipse cx="28" cy="76" rx="14" ry="11" fill="#FF5C8A" ${_t}/><ellipse cx="70" cy="66" rx="14" ry="11" fill="#3FA7D6" ${_t}/>`,"0 0 100 100")},ov={elma:"apple",portakal:"orange",cilek:"strawberry",armut:"pear",kiraz:"cherry",muz:"banana"};Wn.forEach(n=>{n.en1=ov[n.id]});qe.check=Te('<path d="M18 52 L40 74 L84 28" fill="none" stroke="currentColor" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>',"0 0 100 100");Object.assign(Il,{boyama:Te(`<path d="M50 10 C80 10 94 32 92 52 C90 70 74 72 66 64 C59 57 51 62 54 73 C57 85 44 92 31 87 C13 80 6 62 10 43 C14 24 30 10 50 10Z" fill="#FFE3B3" ${_t}/>
    <circle cx="33" cy="34" r="8" fill="#FF4B4B" ${we}/><circle cx="53" cy="26" r="8" fill="#FFD43B" ${we}/>
    <circle cx="72" cy="37" r="8" fill="#3FA7D6" ${we}/><circle cx="26" cy="57" r="8" fill="#5BBA6F" ${we}/>`,"0 0 100 100"),harfler:Te(`<rect x="8" y="40" width="44" height="44" rx="8" fill="#FF6F59" ${_t}/><rect x="50" y="20" width="44" height="44" rx="8" fill="#3FA7D6" ${_t} transform="rotate(10 72 42)"/>
    <text x="30" y="75" text-anchor="middle" font-family="Fredoka, system-ui" font-weight="700" font-size="32" fill="#fff" stroke="${gt}" stroke-width="2">A</text>
    <text x="72" y="55" text-anchor="middle" font-family="Fredoka, system-ui" font-weight="700" font-size="32" fill="#fff" stroke="${gt}" stroke-width="2" transform="rotate(10 72 42)">B</text>`,"0 0 100 100"),yapboz:Te(`<path d="M16 34 H38 a11 11 0 1 1 22 0 H82 V52 a11 11 0 1 1 0 22 V90 H16 Z" fill="#FFC93C" ${_t}/>
    <circle cx="40" cy="64" r="8" fill="#fff" opacity=".5"/>`,"0 0 100 100"),oruntu:Te(`<path d="M6 54 H94" stroke="${gt}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="20" cy="54" r="12" fill="#FF6F59" ${_t}/><rect x="37" y="42" width="24" height="24" rx="5" fill="#3FA7D6" ${_t}/>
    <circle cx="78" cy="54" r="12" fill="#FF6F59" ${_t}/>
    <text x="50" y="30" text-anchor="middle" font-family="Fredoka, system-ui" font-weight="700" font-size="22" fill="${gt}">?</text>`,"0 0 100 100"),besle:Te(`<circle cx="37" cy="40" r="15" fill="#FF5A4E" ${_t}/><path d="M37 26 q2 -8 6 -10" fill="none" ${we}/>
    <circle cx="63" cy="40" r="14" fill="#FFA23A" ${_t}/>
    <path d="M12 50 H88 C86 76 70 88 50 88 C30 88 14 76 12 50Z" fill="#3FA7D6" ${_t}/>
    <path d="M22 62 q28 10 56 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/>`,"0 0 100 100"),saklambac:Te(`<circle cx="30" cy="24" r="8" fill="#A86B45" ${we}/><circle cx="70" cy="24" r="8" fill="#A86B45" ${we}/>
    <circle cx="50" cy="50" r="28" fill="#A86B45" ${_t}/>
    <circle cx="40" cy="44" r="4.5" fill="${gt}"/><circle cx="60" cy="44" r="4.5" fill="${gt}"/>
    <ellipse cx="50" cy="56" rx="6" ry="4.5" fill="#FF6F91"/>
    <path d="M6 72 Q50 50 94 72 V94 H6Z" fill="#8A5A3B" ${_t}/>`,"0 0 100 100")});Object.assign(Il,{duygular:Te(`<circle cx="50" cy="50" r="38" fill="#FFD98E" ${_t}/>
    <path d="M30 40 q7 -7 14 0 M56 40 q7 -7 14 0" fill="none" ${_t}/>
    <ellipse cx="37" cy="46" rx="5" ry="6" fill="${gt}"/><ellipse cx="63" cy="46" rx="5" ry="6" fill="${gt}"/>
    <path d="M32 62 q18 18 36 0 q-18 7 -36 0z" fill="#B3345A" ${we}/>`,"0 0 100 100"),araclar:Te(`<path d="M22 54 L32 38 H64 L78 54 Z" fill="#8FD6F5" ${we}/>
    <path d="M10 72 q0 -18 14 -20 h52 q14 2 14 20 v6 q0 5 -6 5 H16 q-6 0 -6 -5z" fill="#FF5A4E" ${_t}/>
    <circle cx="28" cy="82" r="10" fill="${gt}"/><circle cx="72" cy="82" r="10" fill="${gt}"/>
    <circle cx="28" cy="82" r="4" fill="#E8E4F0"/><circle cx="72" cy="82" r="4" fill="#E8E4F0"/>`,"0 0 100 100"),hava:Te(`<g>${[0,45,90,135,180,225,270,315].map(n=>`<rect x="46" y="4" width="8" height="14" rx="4" fill="#FFC93C" ${we} transform="rotate(${n} 50 44)"/>`).join("")}</g>
    <circle cx="50" cy="44" r="24" fill="#FFD43B" ${_t}/>
    <path d="M30 88 a14 14 0 0 1 4 -27 a18 18 0 0 1 34 -2 a13 13 0 0 1 2 29z" fill="#F2F4FA" ${_t}/>`,"0 0 100 100")});var _f="macera.v1",yf=()=>({stars:0,stickers:[],plays:{},settings:{lang:"tr",sound:!0,music:!0,voice:!0,haptics:!0,rate:.95}});function lv(){let n=yf();try{let t=JSON.parse(localStorage.getItem(_f)||"{}");return{...n,...t,settings:{...n.settings,...t.settings||{}}}}catch{return n}}var me=lv();function ds(){try{localStorage.setItem(_f,JSON.stringify(me))}catch{}}function Ll(n){me.stars+=n,ds()}function xf(n){me.plays[n]=(me.plays[n]||0)+1,ds()}function vf(){let n=me.settings;Object.assign(me,yf(),{settings:n}),ds()}var Ye=null,fs=null;function Mf(){try{if(!Ye){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Ye=new n,fs=Ye.createGain(),fs.gain.value=.55;let t=Ye.createDynamicsCompressor();fs.connect(t).connect(Ye.destination)}Ye.state==="suspended"&&Ye.resume()}catch{}}var Dl=()=>Ye,Bh=()=>fs,gn=()=>Ye&&fs&&me.settings.sound;function dn(n,{type:t="sine",at:e=0,dur:i=.2,vol:s=.4,attack:r=.005,slideTo:a=null}={}){let o=Ye.currentTime+e,l=Ye.createOscillator(),c=Ye.createGain();l.type=t,l.frequency.setValueAtTime(n,o),a&&l.frequency.exponentialRampToValueAtTime(a,o+i),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s,o+r),c.gain.exponentialRampToValueAtTime(1e-4,o+i),l.connect(c).connect(fs),l.start(o),l.stop(o+i+.05)}var Fl=null;function ca({at:n=0,dur:t=.15,vol:e=.3,freq:i=1200,q:s=1,sweepTo:r=null,type:a="bandpass"}={}){if(!Fl){Fl=Ye.createBuffer(1,Ye.sampleRate*.6,Ye.sampleRate);let d=Fl.getChannelData(0);for(let u=0;u<d.length;u++)d[u]=Math.random()*2-1}let o=Ye.currentTime+n,l=Ye.createBufferSource();l.buffer=Fl;let c=Ye.createBiquadFilter();c.type=a,c.frequency.setValueAtTime(i,o),r&&c.frequency.exponentialRampToValueAtTime(r,o+t),c.Q.value=s;let h=Ye.createGain();h.gain.setValueAtTime(e,o),h.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c).connect(h).connect(fs),l.start(o),l.stop(o+t+.05)}var sr=[523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5],$t={tap(){gn()&&dn(720,{dur:.07,vol:.18,type:"triangle"})},pop(){gn()&&(ca({dur:.12,vol:.5,freq:1800,q:.8,sweepTo:400}),dn(900,{dur:.1,vol:.2,slideTo:300}))},correct(){gn()&&[783.99,987.77,1318.5].forEach((n,t)=>dn(n,{type:"triangle",at:t*.08,dur:.28,vol:.28}))},wrong(){gn()&&dn(330,{type:"sine",dur:.32,vol:.3,slideTo:196})},star(){gn()&&[1568,2093,2637].forEach((n,t)=>dn(n,{at:t*.05,dur:.35,vol:.12}))},flip(){gn()&&ca({dur:.1,vol:.18,freq:2600,q:.6,sweepTo:5e3,type:"highpass"})},whoosh(){gn()&&ca({dur:.45,vol:.22,freq:300,q:.9,sweepTo:2400})},snap(){gn()&&(dn(520,{dur:.06,vol:.3,type:"square"}),dn(1040,{at:.04,dur:.12,vol:.18,type:"triangle"}))},fanfare(){if(!gn())return;[523.25,659.25,783.99,1046.5].forEach((t,e)=>dn(t,{type:"triangle",at:e*.12,dur:.35,vol:.28})),[523.25,659.25,783.99,1046.5].forEach(t=>dn(t,{type:"triangle",at:.5,dur:1.1,vol:.14}))},paint(){gn()&&(ca({dur:.2,vol:.4,freq:700,q:.7,sweepTo:180,type:"lowpass"}),dn(420,{dur:.14,vol:.12,slideTo:760}))},chomp(){gn()&&[0,.13,.26].forEach(n=>ca({at:n,dur:.08,vol:.4,freq:900,q:1.2,sweepTo:300}))},boing(){gn()&&dn(260,{type:"triangle",dur:.3,vol:.3,slideTo:720})},rise(){gn()&&dn(330,{type:"sine",dur:.12,vol:.08,slideTo:520})},note(n){gn()&&(dn(n,{type:"sine",dur:.9,vol:.45,attack:.003}),dn(n*4,{type:"sine",dur:.12,vol:.12,attack:.002}),dn(n*2,{type:"triangle",dur:.35,vol:.08}))}};var Pn=null,Sf=0,Wi=0,Ul=0,ps=null,Bl=null,cv=104,hv=60/cv/4,Oh=n=>{let t={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11},e=/^([A-G]#?)(\d)$/.exec(n);return 440*Math.pow(2,(t[e[1]]+(+e[2]-4)*12-9)/12)},bf={island:{gain:.3,chords:[["C3","E4","G4"],["A2","C4","E4"],["F2","A3","C4"],["G2","B3","D4"]],melody:["E5",null,"G5",null,"A5",null,"G5",null,"E5",null,"D5",null,"C5",null,null,null,"D5",null,"E5",null,"G5",null,"E5",null,"D5",null,"C5",null,"A4",null,null,null],pluck:!0},play:{gain:.17,chords:[["C3","G3","E4"],["F2","C4","A3"],["A2","E4","C4"],["G2","D4","B3"]],melody:["C5",null,null,"E5",null,null,"G5",null,null,null,"E5",null,null,null,null,null,"A4",null,null,"C5",null,null,"E5",null,null,null,"D5",null,null,null,null,null],pluck:!1}};function uv(){let n=Dl(),t=Bh();if(!n||!t)return null;if(!Pn){Pn=n.createGain(),Pn.gain.value=0;let e=n.createBiquadFilter();e.type="lowpass",e.frequency.value=5200,Pn.connect(e).connect(t)}return n}function Nl(n,t,e,i,s,r="triangle",a=0){let o=n.createOscillator(),l=n.createGain();o.type=r,o.frequency.setValueAtTime(t,e),a&&o.detune.setValueAtTime(a,e),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(s,e+.012),l.gain.exponentialRampToValueAtTime(1e-4,e+i),o.connect(l).connect(Pn),o.start(e),o.stop(e+i+.04)}function Ef(n,t){for(;Wi<n.currentTime+.35;){let e=Ul%32,i=t.chords[(Ul>>4)%t.chords.length];e%8===0&&Nl(n,Oh(i[0]),Wi,.5,.2,"sine"),e%4===2&&i.slice(1).forEach((r,a)=>Nl(n,Oh(r),Wi,.28,t.pluck?.08:.05,"triangle",a*4));let s=t.melody[e];s&&Nl(n,Oh(s),Wi,.42,.1,"sine"),t.pluck&&e%8===4&&Nl(n,1800,Wi,.05,.02,"triangle"),Wi+=hv,Ul++}Sf=setTimeout(()=>Ef(n,t),90)}function ha(n){if(n===ps)return;let t=uv();if(!t){ps=n;return}if(ps=n,clearTimeout(Sf),!n||!me.settings.music){Pn.gain.cancelScheduledValues(t.currentTime),Pn.gain.setTargetAtTime(0,t.currentTime,.25);return}let e=bf[n];Wi=Math.max(t.currentTime+.1,Wi),Ul=0,Pn.gain.cancelScheduledValues(t.currentTime),Pn.gain.setTargetAtTime(e.gain,t.currentTime,.5),Ef(t,e)}function wf(){let n=ps;ps=null,ha(n)}function Tf(n){let t=Dl();if(!t||!Pn||!ps||!me.settings.music)return;let e=bf[ps].gain;Pn.gain.cancelScheduledValues(t.currentTime),Pn.gain.setTargetAtTime(n?e*.35:e,t.currentTime,.2)}function dv(n,t){let e=n.currentTime+.05,i=2+(Math.random()*3|0);for(let s=0;s<i;s++){let r=n.createOscillator(),a=n.createGain(),o=2200+Math.random()*1400;r.type="sine",r.frequency.setValueAtTime(o,e+s*.09),r.frequency.exponentialRampToValueAtTime(o*(1.3+Math.random()*.5),e+s*.09+.05),a.gain.setValueAtTime(1e-4,e+s*.09),a.gain.exponentialRampToValueAtTime(.04,e+s*.09+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+s*.09+.07),r.connect(a).connect(t),r.start(e+s*.09),r.stop(e+s*.09+.12)}}function kh(){zh();let n=()=>{let t=Dl(),e=Bh();t&&e&&me.settings.sound&&dv(t,e),Bl=setTimeout(n,5e3+Math.random()*9e3)};Bl=setTimeout(n,3e3)}function zh(){clearTimeout(Bl),Bl=null}function ni(n){if(me.settings.haptics)try{navigator.vibrate&&navigator.vibrate(n)}catch{}}var ii={tap:10,good:[0,18,40,24],bad:[0,50],pop:12,big:[0,25,50,25,50,45]};var si=typeof window<"u"?window.speechSynthesis:null,Cf=[],Hh=new Set;function Af(){si&&(Cf=si.getVoices()||[])}si&&(Af(),si.addEventListener?.("voiceschanged",Af));var fv=/premium|enhanced|siri|natural|neural|google/i,pv=/compact|eloquence|novelty|bells|bad news|boing|bubbles|cellos|jester|organ|trinoids|whisper|zarvox|albert|fred|junior|ralph|superstar|bahh/i;function mv(n){let t=n==="tr"?["tr-tr","tr"]:["en-us","en-gb","en-au","en"];for(let e of t){let i=Cf.filter(s=>s.lang.replace("_","-").toLowerCase().startsWith(e)&&!pv.test(s.name));if(i.length)return i.find(s=>fv.test(s.name))||i.find(s=>s.localService)||i[0]}return null}function gv(n,t){let e=me.settings.lang;return e==="tr"?[{lang:"tr",text:n.tr}]:e==="en"?[{lang:"en",text:n.en}]:[{lang:"tr",text:n.tr},{lang:"en",text:t?t.en:n.en}]}function Ke(n){return me.settings.lang==="en"?n.en:n.tr}function Vh(n){return me.settings.lang==="both"?n.en:""}var Ol=0;function _v(n){ua();let t=++Ol;return!si||!me.settings.voice||!n.length?Promise.resolve():(Gh(!0),new Promise(e=>{let i=0,s=()=>{t===Ol&&Gh(!1),e()},r=()=>{if(t!==Ol)return e();if(i>=n.length)return s();let{lang:a,text:o}=n[i++],l=new SpeechSynthesisUtterance(o);l.lang=a==="tr"?"tr-TR":"en-US";let c=mv(a);c&&(l.voice=c),l.rate=me.settings.rate*(a==="en"?.95:1),l.pitch=1.1;let h=setTimeout(r,1200+o.length*110);l.onend=l.onerror=()=>{clearTimeout(h),setTimeout(r,120)},si.speak(l)};r()}))}function In(n,t){return _v(gv(n,t))}function ua(){Ol++,Gh(!1);try{si&&si.cancel()}catch{}}function Rf(){if(si)try{let n=new SpeechSynthesisUtterance(" ");n.volume=0,si.speak(n)}catch{}}function Pf(n){return Hh.add(n),()=>Hh.delete(n)}function Gh(n){Tf(n),Hh.forEach(t=>t(n))}function U(n,t={},...e){let i=document.createElement(n);for(let[s,r]of Object.entries(t))if(!(r==null||r===!1))if(s==="class")i.className=r;else if(s==="html")i.innerHTML=r;else if(s.startsWith("on"))i.addEventListener(s.slice(2),r);else if(s==="style"&&typeof r=="object")for(let[a,o]of Object.entries(r))a.startsWith("--")?i.style.setProperty(a,o):i.style[a]=o;else i.setAttribute(s,r===!0?"":r);for(let s of e.flat())s!=null&&i.append(s);return i}var _e=n=>new Promise(t=>setTimeout(t,n)),ae=n=>{n=[...n];for(let t=n.length-1;t>0;t--){let e=Math.random()*(t+1)|0;[n[t],n[e]]=[n[e],n[t]]}return n},Ne=(n,t)=>ae(n).slice(0,t),da=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function fa(n=""){return U("div",{class:`mascot ${n}`,html:Pl()})}Pf(n=>document.querySelectorAll(".mascot").forEach(t=>t.classList.toggle("talking",n)));function Xi(n,t){n&&(n.classList.remove("happy","oops"),n.offsetWidth,n.classList.add(t),clearTimeout(n._moodT),n._moodT=setTimeout(()=>n.classList.remove(t),1e3))}function Ff(){let n=document.getElementById("fx");return n||(n=U("div",{id:"fx","aria-hidden":"true"}),document.body.append(n)),n}var If=["#FF6F59","#FFC93C","#5BBA6F","#3FA7D6","#9B6DD6","#FF5C8A"];function ri(n,t,e=22){da()&&(e=6);let i=Ff();for(let s=0;s<e;s++){let r=Math.random()*Math.PI*2,a=60+Math.random()*120,o=U("i",{class:"confetto"});o.style.left=n+"px",o.style.top=t+"px",o.style.background=If[s%If.length],o.style.setProperty("--dx",`${Math.cos(r)*a}px`),o.style.setProperty("--dy",`${Math.sin(r)*a-40}px`),o.style.setProperty("--r",`${Math.random()*720-360|0}deg`),s%3===0&&(o.style.borderRadius="50%"),i.append(o),setTimeout(()=>o.remove(),1100)}}function Je(n){let t=n.getBoundingClientRect();return[t.left+t.width/2,t.top+t.height/2]}var _i=null;function Wh(){return _i||(_i=U("div",{class:"stars-hud","aria-live":"polite"},U("span",{class:"ico",html:qe.star}),U("b",{},String(me.stars)))),_i}function kl(){_i&&(_i.querySelector("b").textContent=String(me.stars))}function zl(n){let[t,e]=Array.isArray(n)?n:Je(n),i=_i?.querySelector(".ico"),s=U("div",{class:"flying-star",html:qe.star});s.style.left=t+"px",s.style.top=e+"px",Ff().append(s);let[r,a]=i?Je(i):[innerWidth-40,30];requestAnimationFrame(()=>{s.style.transform=`translate(${r-t}px, ${a-e}px) scale(.5) rotate(200deg)`,s.style.opacity="0.9"}),setTimeout(()=>{s.remove(),$t.star(),kl(),_i?.classList.remove("bump"),_i?.offsetWidth,_i?.classList.add("bump")},700)}var Lf=[{tr:"Harikas\u0131n!",en:"You are amazing!"},{tr:"S\xFCper i\u015F!",en:"Super job!"},{tr:"Bravo, ba\u015Fard\u0131n!",en:"Well done!"},{tr:"Muhte\u015Fem!",en:"Awesome!"}];function yv(){let n=Ge.filter(e=>!me.stickers.includes(e.id));if(!n.length)return null;let t=n[Math.random()*n.length|0];return me.stickers.push(t.id),ds(),t}function Df(){return new Promise(n=>{let t=yv(),e=Lf[Math.random()*Lf.length|0],i=fa("big cheer"),s=U("button",{class:"btn btn-big btn-sun","aria-label":"Tekrar oyna",html:qe.play}),r=U("button",{class:"btn btn-big btn-sea","aria-label":"Adaya d\xF6n",html:qe.home}),a=U("div",{class:"cele-stars"},[0,1,2].map(u=>U("span",{style:{animationDelay:`${.35+u*.18}s`},html:qe.star}))),o=U("div",{class:"cele-card",role:"dialog","aria-modal":"true"},i,U("h2",{},Ke(e)),a,t&&U("div",{class:"cele-sticker"},U("div",{class:"sticker",style:{background:t.color},html:Xe(t.id)}),U("p",{},Ke({tr:"Yeni \xE7\u0131kartma!",en:"New sticker!"}))),U("div",{class:"cele-actions"},r,s)),l=U("div",{class:"overlay cele"},o);document.body.append(l),$t.fanfare();let[c,h]=[innerWidth/2,innerHeight*.32];ri(c,h,40),setTimeout(()=>ri(c-120,h+40,24),300),setTimeout(()=>ri(c+120,h+40,24),500),In(t?{tr:`${e.tr} Sana yeni bir ${t.name.tr} \xE7\u0131kartmas\u0131!`,en:`${e.en} Here is a new ${t.name.en} sticker!`}:e,t?t.name:void 0);let d=u=>{$t.tap(),l.classList.add("out"),setTimeout(()=>l.remove(),250),n(u)};s.onclick=()=>d("again"),r.onclick=()=>d("home"),setTimeout(()=>s.focus({preventScroll:!0}),50)})}function Nf(n,t,e){let i=null,s=a=>{a.preventDefault(),n.classList.add("holding"),n.style.setProperty("--hold",`${t}ms`),i=setTimeout(()=>{n.classList.remove("holding"),e()},t)},r=()=>{clearTimeout(i),n.classList.remove("holding")};n.addEventListener("pointerdown",s),["pointerup","pointerleave","pointercancel"].forEach(a=>n.addEventListener(a,r)),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&e()})}var $i=null;function rr(n,{targets:t,onDrop:e,tap:i}){let s=0,r=0,a=!1,o=null,l=()=>{n.style.transition="transform .35s cubic-bezier(.3,1.5,.5,1)",n.style.transform="",n.classList.remove("lifted")},c=d=>{$i=null;let u=e(n,d);return u||l(),u};n.addEventListener("pointerdown",d=>{if(!n.dataset.done){d.preventDefault(),o=d.pointerId;try{n.setPointerCapture(o)}catch{}s=d.clientX,r=d.clientY,a=!1,n.style.transition="none",n.classList.add("lifted"),$i&&$i!==n&&($i.classList.remove("lifted"),$i.style.transform="",$i=null)}}),n.addEventListener("pointermove",d=>{if(d.pointerId!==o)return;let u=d.clientX-s,f=d.clientY-r;Math.hypot(u,f)>8&&(a=!0),a&&(n.style.transform=`translate(${u}px, ${f}px) scale(1.08)`)});let h=d=>{if(d.pointerId!==o)return;if(o=null,!a){if(i){l(),i(n);return}$t.tap(),$i=n,n.style.transform="scale(1.08)";return}n.style.visibility="hidden";let u=document.elementFromPoint(d.clientX,d.clientY);n.style.visibility="";let f=t(),g=f.find(M=>u&&M.contains(u));if(!g){let[M,m]=Je(n),p=1/0;f.forEach(v=>{let[E,_]=Je(v),S=Math.hypot(E-M,_-m);S<p&&S<Math.max(v.clientWidth,70)*.75&&(p=S,g=v)})}g?c(g):l()};n.addEventListener("pointerup",h),n.addEventListener("pointercancel",h),i||t().forEach(d=>d.addEventListener("click",()=>{$i===n&&c(d)}))}function qi(n,t,{ms:e=280,scale:i=.9}={}){let[s,r]=Je(t),[a,o]=Je(n),l;try{l=new DOMMatrix(getComputedStyle(n).transform)}catch{l={m41:0,m42:0}}return n.style.transition=`transform ${e}ms cubic-bezier(.3,1.2,.5,1)`,n.style.transform=`translate(${l.m41+s-a}px, ${l.m42+r-o}px) scale(${i})`,_e(e)}var Uf=`stroke="${gt}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`,Ln=`stroke="${gt}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`,yi=(n,t)=>`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg" class="art" aria-hidden="true">${n}</svg>`,Bf={bird:yi(`<path d="M6 26 q14 -18 28 -2 q14 -16 28 2" fill="none" ${Uf}/>`,"0 0 68 40"),butterfly:yi(`<path d="M31 26 q-20 -22 -27 -6 q-5 14 9 18 q12 3 18 -6z" fill="#FF7EB6" ${Ln}/>
    <path d="M31 30 q-17 10 -11 20 q6 8 15 -2 q5 -7 4 -16z" fill="#FF9EC7" ${Ln}/>
    <path d="M37 26 q20 -22 27 -6 q5 14 -9 18 q-12 3 -18 -6z" fill="#FFB4D1" ${Ln}/>
    <path d="M37 30 q17 10 11 20 q-6 8 -15 -2 q-5 -7 -4 -16z" fill="#FFC9DE" ${Ln}/>
    <ellipse cx="34" cy="32" rx="4" ry="15" fill="${gt}"/>
    <path d="M32 18 l-7 -11 M36 18 l7 -11" fill="none" ${Ln}/>
    <circle cx="25" cy="6" r="3" fill="${gt}"/><circle cx="43" cy="6" r="3" fill="${gt}"/>`,"0 0 68 56"),cloud:yi(`<path d="M18 44 a16 16 0 0 1 4 -31 a20 20 0 0 1 38 -2 a15 15 0 0 1 2 33z" fill="#fff" ${Uf}/>`,"0 0 80 50"),fish:yi(`<path d="M44 20 L62 8 q-6 12 0 24z" fill="#FFB347" ${Ln}/>
    <ellipse cx="26" cy="20" rx="24" ry="15" fill="#FFC93C" ${Ln}/>
    <circle cx="14" cy="15" r="3.4" fill="${gt}"/>`,"0 0 68 40"),bee:yi(`<ellipse cx="18" cy="8" rx="12" ry="7" fill="#DFF6FF" opacity=".9" ${Ln} transform="rotate(-22 18 8)"/>
    <ellipse cx="34" cy="8" rx="12" ry="7" fill="#DFF6FF" opacity=".9" ${Ln} transform="rotate(22 34 8)"/>
    <ellipse cx="26" cy="28" rx="18" ry="13" fill="#FFD43B" ${Ln}/>
    <path d="M22 16 v24 M31 17 v22" stroke="${gt}" stroke-width="4.5"/>
    <circle cx="41" cy="24" r="2.8" fill="${gt}"/>
    <path d="M44 32 q6 2 8 6" fill="none" ${Ln}/>`,"0 0 60 48"),leaf:yi(`<path d="M24 4 q22 14 0 40 q-22 -26 0 -40z" fill="#7ACB5A" ${Ln}/><path d="M24 8 v32" stroke="${gt}" stroke-width="2.5"/>`,"0 0 48 48"),star:yi('<circle cx="12" cy="12" r="6" fill="#FFF3B0"/><path d="M12 0 v24 M0 12 h24" stroke="#FFF3B0" stroke-width="3" stroke-linecap="round" opacity=".8"/>',"0 0 24 24"),note:yi(`<path d="M20 44 V10 L46 5 V38" fill="none" stroke="#FFD9F2" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="13" cy="45" rx="10" ry="8" fill="#FFD9F2"/><ellipse cx="39" cy="40" rx="10" ry="8" fill="#FFD9F2"/>`,"0 0 56 56"),bubble:yi('<circle cx="16" cy="16" r="13" fill="#ffffff55" stroke="#ffffffaa" stroke-width="2.5"/><circle cx="11" cy="11" r="3.5" fill="#ffffffcc"/>',"0 0 32 32")},xv={meadow:[["bird",2,[48,70],[16,24],[10,26]],["butterfly",3,[44,62],[9,15],[42,76]],["cloud",2,[74,104],[30,44],[12,22]]],sky:[["cloud",3,[84,124],[26,40],[14,58]],["bird",2,[46,66],[14,22],[16,40]]],orchard:[["bee",3,[40,56],[8,14],[32,70]],["leaf",3,[34,48],[12,20],[16,80]]],blocks:[["star",5,[16,28],[14,24],[14,85]]],treasure:[["star",6,[16,30],[10,20],[14,88]],["bubble",3,[28,44],[16,26],[34,85]]],stage:[["note",4,[44,66],[11,19],[18,70]],["star",6,[14,24],[9,17],[14,80]]],studio:[["butterfly",2,[44,60],[12,18],[18,70]],["star",4,[14,24],[12,20],[16,80]]],abc:[["bird",2,[46,66],[15,23],[12,30]],["butterfly",2,[44,60],[10,16],[46,78]]],puzzle:[["star",5,[16,28],[12,22],[14,85]],["bubble",2,[30,44],[18,26],[34,80]]],beads:[["bubble",4,[28,50],[14,24],[22,85]],["butterfly",2,[42,58],[11,17],[16,60]]],picnic:[["bee",2,[40,56],[9,15],[26,58]],["bird",2,[46,66],[16,24],[12,24]],["cloud",2,[74,104],[30,44],[12,20]]],garden:[["butterfly",3,[44,62],[10,16],[16,52]],["bee",2,[38,54],[8,13],[22,48]]],feelings:[["star",5,[16,28],[12,22],[14,80]],["butterfly",2,[44,60],[11,17],[16,60]]],road:[["cloud",2,[74,104],[28,42],[10,20]],["bird",2,[46,66],[16,24],[14,26]]],weather:[["cloud",2,[74,110],[26,40],[12,24]],["bird",2,[44,64],[15,23],[16,30]]],water:[["fish",3,[50,76],[13,21],[36,85]],["bubble",4,[24,40],[10,18],[32,90]]]},pa=(n,t)=>n+Math.random()*(t-n);function Of(n){let t=U("div",{class:"scene","aria-hidden":"true"}),e=xv[n];return!e||da()||e.forEach(([i,s,r,a,o])=>{for(let l=0;l<s;l++){let c=U("i",{class:`prop prop-${i}`,html:Bf[i]}),h=pa(...a);c.style.width=`${pa(...r)|0}px`,c.style.top=`${pa(...o).toFixed(1)}%`,c.style.animationDuration=`${h.toFixed(1)}s`,c.style.animationDelay=`${(-Math.random()*h).toFixed(1)}s`,c.style.setProperty("--bob",`${pa(6,20).toFixed(0)}px`),c.style.setProperty("--bobdur",`${pa(1.6,3.4).toFixed(1)}s`),Math.random()<.5&&c.classList.add("rtl"),t.append(c)}}),t}function Hl(){let n=U("div",{class:"curtain","aria-hidden":"true"},U("span",{class:"cur-blob"}),U("span",{class:"cur-blob"}),U("span",{class:"cur-blob"}));return{el:n,async close(){document.body.append(n),await new Promise(t=>requestAnimationFrame(()=>requestAnimationFrame(t))),n.classList.add("on"),await new Promise(t=>setTimeout(t,da()?60:460))},async open(){n.classList.remove("on"),n.classList.add("out"),await new Promise(t=>setTimeout(t,da()?60:520)),n.remove()}}}typeof window<"u"&&(window.__props=Bf);var kf={id:"hayvanlar",title:{tr:"Hayvanlar",en:"Animals"},theme:"meadow",start(n){let e=ae(Ge),i=0;function s(){if(!n.alive())return;if(i>=8)return n.finish();n.progress(i,8);let r=i<2?2:i<6?3:4,a=e[i%e.length],o=ae([a,...Ne(Ge.filter(h=>h.id!==a.id),r-1)]),l=!1,c=o.map(h=>{let d=U("span",{class:"cap"}),u=U("button",{class:"choice pop-in",style:{"--tint":h.color},"aria-label":Ke(h.name),html:Xe(h.id)},d);return u.addEventListener("click",async()=>{l||(h===a?(l=!0,d.innerHTML=`${Ke(h.name)}${Vh(h.name)?`<small>${Vh(h.name)}</small>`:""}`,u.classList.add("win"),c.forEach(f=>f!==u&&f.classList.add("fade")),n.good(u),await Promise.all([n.say({tr:`${h.name.tr}! ${h.sound.tr}`,en:`${h.name.en}! ${h.sound.en}`}),_e(1300)]),i++,n.later(s,350)):(n.bad(u),n.say({tr:`Bu ${h.name.tr}. ${a.acc.tr} bul!`,en:`This is a ${h.name.en}. Find ${a.acc.en}!`},a.name)))}),u});c.forEach((h,d)=>h.style.animationDelay=`${d*70}ms`),n.board.replaceChildren(U("div",{class:`choices n${r}`},c)),n.prompt({tr:`${a.acc.tr} bul!`,en:`Find ${a.acc.en}!`},a.name)}s()}};var zf=[{id:"kirmizi",hex:"#FF4B4B",name:{tr:"k\u0131rm\u0131z\u0131",en:"red"}},{id:"mavi",hex:"#3FA7D6",name:{tr:"mavi",en:"blue"}},{id:"sari",hex:"#FFD43B",name:{tr:"sar\u0131",en:"yellow"}},{id:"yesil",hex:"#5BBA6F",name:{tr:"ye\u015Fil",en:"green"}},{id:"turuncu",hex:"#FF9A2E",name:{tr:"turuncu",en:"orange"}},{id:"mor",hex:"#9B6DD6",name:{tr:"mor",en:"purple"}},{id:"pembe",hex:"#FF7EB6",name:{tr:"pembe",en:"pink"}}],Hf={id:"balonlar",title:{tr:"Renkli Balonlar",en:"Balloon Pop"},theme:"sky",start(n){let e=ae(zf).slice(0,3),i=0,s=0,r=0,a=U("div",{class:"balloon-field"}),o=U("div",{class:"goal-balloon","aria-hidden":"true"}),l=U("div",{class:"goal-meter"});n.board.replaceChildren(a,U("div",{class:"goal"},o,l));let c=[],h=[],d=0,u=performance.now(),f=0;function g(){let _=e[i];h=ae([_,...ae(zf.filter(S=>S!==_)).slice(0,3)]),o.innerHTML=Uh(_.hex),l.replaceChildren(...Array.from({length:6},(S,w)=>U("i",{class:w<s?"on":"",style:{"--c":_.hex}}))),n.prompt({tr:`${M(_.name.tr)} balonlar\u0131 patlat!`,en:`Pop the ${_.name.en} balloons!`},_.name)}let M=_=>_.charAt(0).toLocaleUpperCase("tr")+_.slice(1);function m(){let _=a.clientWidth,S=e[i],w=Math.random()<.45?S:h[Math.random()*h.length|0],A=Math.max(70,Math.min(110,_/4.2)),y=U("button",{class:"balloon","aria-label":w.name.tr,html:Uh(w.hex)});y.style.width=A+"px";let T={el:y,color:w,x:Math.random()*(_-A),y:a.clientHeight+20,v:55+Math.random()*40+i*12,ph:Math.random()*6,size:A,dead:!1};y.addEventListener("pointerdown",R=>{R.preventDefault(),p(T)}),a.append(y),c.push(T)}function p(_){if(_.dead)return;let S=e[i];if(_.color===S){_.dead=!0;let[w,A]=Je(_.el);$t.pop(),ri(w,A-20,14),_.el.classList.add("popped"),setTimeout(()=>_.el.remove(),220),s++,r++,n.progress(r,6*e.length),l.children[s-1]?.classList.add("on"),s>=6&&(n.good(o),i++,s=0,i>=e.length?(E(),c.forEach(y=>y.el.classList.add("fly-away")),n.later(()=>n.finish(),900)):n.later(g,900))}else _.el.classList.remove("wobble"),_.el.offsetWidth,_.el.classList.add("wobble"),$t.wrong(),n.mood("oops")}function v(_){if(!n.alive())return;f=requestAnimationFrame(v);let S=Math.min(.05,(_-u)/1e3);u=_,d+=S;let w=Math.max(.55,1.05-i*.15);d>w&&c.length<9&&(d=0,m()),c=c.filter(A=>{if(A.dead)return!1;A.y-=A.v*S,A.ph+=S*1.6;let y=Math.sin(A.ph)*14;return A.el.style.transform=`translate(${(A.x+y).toFixed(1)}px, ${A.y.toFixed(1)}px) rotate(${(Math.sin(A.ph)*5).toFixed(1)}deg)`,A.y<-A.size*1.8?(A.el.remove(),!1):!0})}function E(){cancelAnimationFrame(f)}return g(),n.progress(0,6*e.length),f=requestAnimationFrame(_=>{u=_,v(_)}),E}};var ma={tr:["s\u0131f\u0131r","bir","iki","\xFC\xE7","d\xF6rt","be\u015F","alt\u0131","yedi","sekiz","dokuz","on"],en:["zero","one","two","three","four","five","six","seven","eight","nine","ten"]},Gf=[[1,3],[2,4],[2,5],[3,5],[3,6],[4,7]],Vf=(n,t)=>n+(Math.random()*(t-n+1)|0),Wf={id:"sayilar",title:{tr:"Say\u0131lar",en:"Numbers"},theme:"orchard",start(n){let t=Gf.length,e=ae(Wn),i=0;function s(){if(!n.alive())return;if(i>=t)return n.finish();n.progress(i,t);let r=Vf(...Gf[i]),a=e[i%e.length],o=0,l=!1,c=Array.from({length:r},(u,f)=>{let g=U("b",{class:"count-tag"}),M=U("button",{class:"fruit pop-in",style:{animationDelay:`${f*80}ms`},"aria-label":a.name.tr,html:gi(a.id)},g);return M.addEventListener("click",()=>{M.classList.contains("counted")||l||(o++,M.classList.add("counted"),g.textContent=String(o),$t.tap(),n.say({tr:ma.tr[o],en:ma.en[o]}),o===r&&d.classList.add("ready"))}),M}),h=new Set([r]);for(;h.size<3;){let u=Math.max(1,Math.min(9,r+Vf(-2,2)));h.add(u)}let d=U("div",{class:"answers"},ae([...h]).map(u=>{let f=U("button",{class:"num-btn","aria-label":ma.tr[u]},String(u));return f.addEventListener("click",async()=>{l||(u===r?(l=!0,f.classList.add("win"),c.forEach((g,M)=>{g.classList.contains("counted")||(g.classList.add("counted"),g.lastChild.textContent=String(M+1))}),n.good(f),await Promise.all([n.say({tr:`Evet! ${ma.tr[r]} ${a.name.tr}!`,en:`Yes! ${ma.en[r]} ${r===1?a.name.en.replace(/(ies|s)$/,g=>g==="ies"?"y":""):a.name.en}!`}),_e(1400)]),i++,n.later(s,300)):(n.bad(f),n.say({tr:"Hadi birlikte sayal\u0131m. Meyvelere dokun!",en:"Let's count together. Tap the fruit!"})))}),f}));n.board.replaceChildren(U("div",{class:"count-stage"},U("div",{class:`basket n${r}`},c)),d),n.prompt({tr:`Ka\xE7 tane ${a.name.tr} var? Dokunarak say!`,en:`How many ${a.name.en}? Tap to count!`})}s()}};var vv={daire:"Daireyi",kare:"Kareyi",ucgen:"\xDC\xE7geni",yildiz:"Y\u0131ld\u0131z\u0131",kalp:"Kalbi",dikdortgen:"Dikd\xF6rtgeni"},$f={id:"sekiller",title:{tr:"\u015Eekiller",en:"Shapes"},theme:"blocks",start(n){let i=0,s=0;function r(){if(!n.alive())return;if(i>=4)return n.finish();let a=Ne(la,3),o=ae(a),l=new Map,c=U("div",{class:"holes"},a.map(m=>{let p=U("div",{class:"hole pop-in","data-id":m.id,html:ir(m.id,m.color,"hole")});return l.set(m.id,p),p})),h=U("div",{class:"tray"});n.board.replaceChildren(c,h);let d=null;l.forEach((m,p)=>m.addEventListener("click",()=>{d&&f(d,m)}));function u(){if(!n.alive())return;let m=o.shift();if(!m){i++,n.good(c),n.later(r,1300);return}let p=U("button",{class:"piece pop-in","aria-label":m.name.tr,html:ir(m.id,m.color)});p._shape=m,h.replaceChildren(p),M(p),n.prompt({tr:`${vv[m.id]} yerine koy!`,en:`Put the ${m.name.en.toLowerCase()} in its place!`},m.name)}function f(m,p){let v=m._shape;if(p.dataset.id===v.id){let[E,_]=Je(p),[S,w]=Je(m);m.style.transition="transform .25s cubic-bezier(.3,1.4,.5,1)",m.style.transform=`translate(${E-S+(m._dx||0)}px, ${_-w+(m._dy||0)}px)`,$t.snap(),setTimeout(()=>{p.innerHTML=ir(v.id,v.color),p.classList.add("filled"),m.remove(),s++,n.progress(s,12),n.cheer(p),n.say({tr:`${v.name.tr}!`,en:`${v.name.en}!`}),d=null,n.later(u,700)},260)}else{n.bad(m);let E=la.find(_=>_.id===p.dataset.id);n.say({tr:`O bir ${E.name.tr.toLocaleLowerCase("tr")}. Bu bir ${v.name.tr.toLocaleLowerCase("tr")}!`,en:`That is a ${E.name.en.toLowerCase()}. This is a ${v.name.en.toLowerCase()}!`}),g(m)}}function g(m){m._dx=m._dy=0,m.style.transition="transform .35s cubic-bezier(.3,1.5,.5,1)",m.style.transform="",m.classList.remove("lifted")}function M(m){let p=0,v=0,E=!1,_=null;m.addEventListener("pointerdown",w=>{_=w.pointerId,m.setPointerCapture(_),p=w.clientX,v=w.clientY,E=!1,m.style.transition="none",m.classList.add("lifted"),$t.tap()}),m.addEventListener("pointermove",w=>{if(w.pointerId!==_)return;let A=w.clientX-p,y=w.clientY-v;Math.hypot(A,y)>6&&(E=!0),m._dx=A,m._dy=y,m.style.transform=`translate(${A}px, ${y}px) scale(1.08)`});let S=w=>{if(w.pointerId!==_)return;if(_=null,!E){d=m,m.classList.add("lifted"),m.style.transform="scale(1.08)";return}m.style.visibility="hidden";let A=document.elementFromPoint(w.clientX,w.clientY)?.closest(".hole");m.style.visibility="";let y=A;if(!y){let[T,R]=Je(m),F=1/0;l.forEach(B=>{let[z,L]=Je(B),k=Math.hypot(z-T,L-R);k<F&&k<B.clientWidth*.8&&(F=k,y=B)})}y&&!y.classList.contains("filled")?f(m,y):g(m)};m.addEventListener("pointerup",S),m.addEventListener("pointercancel",S)}n.progress(s,12),_e(250).then(u)}r()}};var $h=[3,4,6],Xf={id:"hafiza",title:{tr:"Haf\u0131za Kartlar\u0131",en:"Memory Cards"},theme:"treasure",start(n){let t=0;function e(){if(!n.alive())return;if(t>=$h.length)return n.finish();n.progress(t,$h.length);let i=$h[t],s=Ne(Ge,i),r=ae([...s,...s]),a=[],o=0,l=!1,c=r.map((h,d)=>{let u=U("button",{class:"mcard pop-in",style:{animationDelay:`${d*45}ms`},"aria-label":"Kart"},U("span",{class:"mc-inner"},U("span",{class:"mc-back",html:qe.star}),U("span",{class:"mc-front",style:{background:h.color},html:Xe(h.id)})));return u._a=h,u.addEventListener("click",async()=>{if(l||u.classList.contains("up")||(u.classList.add("up"),u.setAttribute("aria-label",h.name.tr),$t.flip(),n.say(h.name),a.push(u),a.length<2))return;l=!0;let[f,g]=a;f._a===g._a?(await _e(350),f.classList.add("match"),g.classList.add("match"),n.good(g),o++,a=[],l=!1,o===i&&(t++,await _e(1200),e())):(await _e(1e3),f.classList.remove("up"),g.classList.remove("up"),$t.flip(),a=[],l=!1)}),u});n.board.replaceChildren(U("div",{class:`mgrid p${i}`},c)),n.prompt(t===0?{tr:"Kartlar\u0131 \xE7evir, ayn\u0131 iki hayvan\u0131 bul!",en:"Flip the cards and find two that match!"}:{tr:"S\xFCper! \u015Eimdi daha \xE7ok kart var!",en:"Super! Now there are more cards!"})}e()}};var qf=[{c:"#FF4B4B",n:"Do"},{c:"#FF9A2E",n:"Re"},{c:"#FFD43B",n:"Mi"},{c:"#5BBA6F",n:"Fa"},{c:"#2EC4B6",n:"Sol"},{c:"#3FA7D6",n:"La"},{c:"#9B6DD6",n:"Si"},{c:"#FF7EB6",n:"Do"}],ms=[{name:{tr:"Parla Parla K\xFC\xE7\xFCk Y\u0131ld\u0131z",en:"Twinkle Twinkle Little Star"},notes:[0,0,4,4,5,5,4,3,3,2,2,1,1,0]},{name:{tr:"Ne\u015Fe \u015Eark\u0131s\u0131",en:"Ode to Joy"},notes:[2,2,3,4,4,3,2,1,0,0,1,2,2,1,1]}],Yf={id:"muzik",title:{tr:"M\xFCzik",en:"Music"},theme:"stage",start(n){let t=0,e=0,i=!1,s=qf.map((f,g)=>{let M=U("button",{class:"xbar",style:{"--c":f.c,"--h":`${100-g*6}%`},"aria-label":f.n},U("span",{},f.n));return M.addEventListener("pointerdown",m=>{m.preventDefault(),h(g,!0)}),M}),r=U("div",{class:"note-fx","aria-hidden":"true"}),a=U("button",{class:"btn btn-pill","aria-label":"Dinle"},"\u25B6 ",U("span",{},""));n.board.replaceChildren(U("div",{class:"xylo-wrap"},r,U("div",{class:"xylo"},s)),U("div",{class:"xylo-tools"},a));function o(){a.lastChild.textContent=n.label({tr:"Dinle",en:"Listen"})}o();function l(f){let g=s[f];g.classList.remove("hit"),g.offsetWidth,g.classList.add("hit"),$t.note(sr[f]);let M=U("i",{style:{left:`${(f+.5)*(100/8)}%`,color:qf[f].c}},f%2?"\u266A":"\u266B");r.append(M),setTimeout(()=>M.remove(),1200)}function c(){s.forEach(g=>g.classList.remove("next"));let f=ms[t];f&&e<f.notes.length&&s[f.notes[e]].classList.add("next")}function h(f,g){if(i&&g||(l(f),!g))return;let M=ms[t];if(M){if(M.notes[e]===f&&(e++,n.progress(ms.slice(0,t).reduce((m,p)=>m+p.notes.length,0)+e,ms.reduce((m,p)=>m+p.notes.length,0)),e>=M.notes.length)){if(s.forEach(m=>m.classList.remove("next")),t++,e=0,n.good(s[f]),t>=ms.length){n.later(()=>n.finish(),1200);return}n.later(()=>u(),1500);return}c()}}async function d(){if(!i){i=!0,s.forEach(f=>f.classList.remove("next"));for(let f of ms[t].notes){if(!n.alive())return;l(f),await _e(420)}i=!1,c()}}a.addEventListener("click",d);async function u(){if(!n.alive())return;let f=ms[t];await n.prompt({tr:`${f.name.tr} \u015Fark\u0131s\u0131n\u0131 \xE7alal\u0131m! Parlayan tu\u015Fa dokun.`,en:`Let's play ${f.name.en}! Tap the glowing bar.`}),c()}n.progress(0,1),u()}};var ge=`class="rg" stroke="${gt}" stroke-width="3.5" stroke-linejoin="round"`,Gl=`fill="none" stroke="${gt}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" pointer-events="none"`,Vl=n=>`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="art">${n}</svg>`;function Mv(){let n="";for(let t=0;t<6;t++)n+=`<ellipse ${ge} cx="100" cy="44" rx="15" ry="22" transform="rotate(${t*60} 100 70)"/>`;return n}var Zf=[{id:"balik",name:{tr:"Bal\u0131k",en:"Fish"},svg:Vl(`
      <path ${ge} d="M150 100 L192 64 Q184 100 192 136 Z"/>
      <path ${ge} d="M62 66 Q92 22 128 68 Z"/>
      <path ${ge} d="M84 132 Q100 166 118 134 Z"/>
      <ellipse ${ge} cx="96" cy="100" rx="62" ry="40"/>
      <path ${ge} d="M86 62 Q74 100 86 138 L100 139 Q88 100 100 61 Z"/>
      <path ${ge} d="M114 63 Q104 100 114 137 L126 135 Q116 100 126 66 Z"/>
      <circle ${ge} cx="30" cy="52" r="9"/><circle ${ge} cx="46" cy="28" r="6"/><circle ${ge} cx="22" cy="24" r="5"/>
      <circle cx="56" cy="90" r="11" fill="#fff" stroke="${gt}" stroke-width="3.5" pointer-events="none"/>
      <circle cx="58" cy="91" r="5" fill="${gt}" pointer-events="none"/>
      <path ${Gl} d="M38 108 q8 6 14 0"/>`)},{id:"ev",name:{tr:"Ev",en:"House"},svg:Vl(`
      <rect ${ge} x="2" y="166" width="196" height="32" rx="6"/>
      <circle ${ge} cx="166" cy="32" r="18"/>
      <path ${ge} d="M20 40 Q20 26 34 28 Q40 14 56 20 Q72 18 70 32 Q78 42 64 44 H30 Q16 44 20 40Z"/>
      <path ${ge} d="M128 44 h18 v40 h-18z"/>
      <rect ${ge} x="42" y="90" width="116" height="78"/>
      <path ${ge} d="M30 94 L100 36 L170 94 Z"/>
      <rect ${ge} x="87" y="118" width="28" height="50" rx="4"/>
      <rect ${ge} x="54" y="106" width="24" height="24" rx="3"/>
      <rect ${ge} x="124" y="106" width="24" height="24" rx="3"/>
      <path ${Gl} d="M66 106 v24 M54 118 h24 M136 106 v24 M124 118 h24"/>
      <circle cx="109" cy="144" r="3" fill="${gt}" pointer-events="none"/>`)},{id:"cicek",name:{tr:"\xC7i\xE7ek",en:"Flower"},svg:Vl(`
      <rect ${ge} x="95" y="88" width="10" height="58"/>
      <path ${ge} d="M100 128 Q76 106 58 118 Q78 140 100 128Z"/>
      <path ${ge} d="M100 114 Q124 92 142 104 Q122 128 100 114Z"/>
      ${Mv()}
      <circle ${ge} cx="100" cy="70" r="17"/>
      <path ${ge} d="M70 154 H130 L122 194 H78 Z"/>
      <rect ${ge} x="62" y="142" width="76" height="16" rx="5"/>
      <circle cx="94" cy="67" r="2.6" fill="${gt}" pointer-events="none"/><circle cx="106" cy="67" r="2.6" fill="${gt}" pointer-events="none"/>
      <path ${Gl} d="M94 75 q6 5 12 0"/>`)},{id:"araba",name:{tr:"Araba",en:"Car"},svg:Vl(`
      <rect ${ge} x="2" y="168" width="196" height="30" rx="6"/>
      <path ${ge} d="M54 108 L74 74 H130 L154 108 Z"/>
      <path ${ge} d="M18 128 Q18 108 40 106 H160 Q182 108 182 128 V148 Q182 156 172 156 H28 Q18 156 18 148 Z"/>
      <path ${ge} d="M70 104 L82 82 H100 V104 Z"/>
      <path ${ge} d="M108 104 V82 H126 L140 104 Z"/>
      <circle ${ge} cx="56" cy="158" r="17"/><circle ${ge} cx="146" cy="158" r="17"/>
      <circle ${ge} cx="171" cy="124" r="6"/>
      <circle cx="56" cy="158" r="6" fill="#fff" stroke="${gt}" stroke-width="3" pointer-events="none"/>
      <circle cx="146" cy="158" r="6" fill="#fff" stroke="${gt}" stroke-width="3" pointer-events="none"/>
      <path ${Gl} d="M104 110 V150 M112 122 h10"/>`)}],Wl=[{hex:"#FF4B4B",name:{tr:"k\u0131rm\u0131z\u0131",en:"red"}},{hex:"#FF9A2E",name:{tr:"turuncu",en:"orange"}},{hex:"#FFD43B",name:{tr:"sar\u0131",en:"yellow"}},{hex:"#5BBA6F",name:{tr:"ye\u015Fil",en:"green"}},{hex:"#2EC4B6",name:{tr:"turkuaz",en:"teal"}},{hex:"#3FA7D6",name:{tr:"mavi",en:"blue"}},{hex:"#9B6DD6",name:{tr:"mor",en:"purple"}},{hex:"#FF7EB6",name:{tr:"pembe",en:"pink"}},{hex:"#A86B45",name:{tr:"kahverengi",en:"brown"}},{hex:"#8A8FA3",name:{tr:"gri",en:"gray"}}];var Kf={id:"boyama",title:{tr:"Boyama",en:"Coloring"},theme:"studio",start(n){let t=ae(Zf).slice(0,3),e=0,i=Wl[Math.random()*Wl.length|0],s=Wl.map(a=>{let o=U("button",{class:"swatch",style:{"--c":a.hex},"aria-label":a.name.tr});return o.addEventListener("click",()=>{i=a,s.forEach(l=>l.classList.toggle("on",l===o)),$t.tap(),n.say(a.name)}),a===i&&o.classList.add("on"),o});function r(){if(!n.alive())return;if(e>=t.length)return n.finish();n.progress(e,t.length);let a=t[e],o=U("div",{class:"cpage pop-in",html:a.svg}),l=[...o.querySelectorAll(".rg")],c=U("button",{class:"btn btn-big btn-leaf cdone","aria-label":"Bitti",html:qe.check});c.hidden=!0;let h=!1;l.forEach(d=>{d.setAttribute("fill","#ffffff"),d.addEventListener("pointerdown",u=>{u.preventDefault(),d.setAttribute("fill",i.hex),d.dataset.c="1",d.classList.remove("splash"),d.getBoundingClientRect(),d.classList.add("splash"),$t.paint(),l.filter(g=>g.dataset.c).length>=Math.ceil(l.length*.7)&&c.hidden&&(c.hidden=!1,h||(h=!0,n.say({tr:"\xC7ok g\xFCzel! Bitince kocaman tik tu\u015Funa dokun.",en:"Beautiful! Tap the big check when you are done."})))})}),c.addEventListener("click",async()=>{c.dataset.used||(c.dataset.used="1",o.classList.add("framed"),n.good(o),await Promise.all([n.say({tr:`Harika bir ${a.name.tr.toLocaleLowerCase("tr")} oldu!`,en:`What a great ${a.name.en.toLowerCase()}!`}),_e(1500)]),e++,r())}),n.board.replaceChildren(U("div",{class:"color-wrap"},o,U("div",{class:"palette"},s,c))),n.prompt({tr:`${a.name.tr} boyayal\u0131m! Bir renk se\xE7, sonra resme dokun.`,en:`Let's color the ${a.name.en.toLowerCase()}! Pick a color, then tap the picture.`})}r()}};var Sv="ABC\xC7DEFGHI\u0130JKLMNO\xD6PRS\u015ETU\xDCVYZ".split(""),bv="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),Ev={A:"a",B:"be",C:"ce",\u00C7:"\xE7e",D:"de",E:"e",F:"fe",G:"ge",\u011E:"yumu\u015Fak ge",H:"he",I:"\u0131",\u0130:"i",J:"je",K:"ke",L:"le",M:"me",N:"ne",O:"o",\u00D6:"\xF6",P:"pe",R:"re",S:"se",\u015E:"\u015Fe",T:"te",U:"u",\u00DC:"\xFC",V:"ve",Y:"ye",Z:"ze"},wv=n=>n.charAt(0).toLocaleUpperCase("tr")+n.slice(1),Tv=n=>n.charAt(0).toUpperCase()+n.slice(1),Av=[...Ge.map(n=>({art:()=>Xe(n.id),word:{tr:n.name.tr,en:n.name.en},tint:n.color})),...Wn.map(n=>({art:()=>`<div class="fruit-art">${gi(n.id)}</div>`,word:{tr:wv(n.name.tr),en:Tv(n.en1)},tint:"#FFF3D6"}))],Jf={id:"harfler",title:{tr:"Harfler",en:"Letters"},theme:"abc",start(n){let e=me.settings.lang==="en"?"en":"tr",i=e==="en"?bv:Sv,s=h=>e==="en"?h.charAt(0).toUpperCase():h.charAt(0).toLocaleUpperCase("tr"),r=h=>e==="en"?h.toLowerCase():h.toLocaleLowerCase("tr"),a=h=>e==="en"?h:Ev[h]||h,o=ae(Av),l=0;function c(){if(!n.alive())return;if(l>=8)return n.finish();n.progress(l,8);let h=o[l%o.length],d=h.word[e],u=s(d),f=ae([u,...Ne(i.filter(v=>v!==u),2)]),g=!1,M=U("span",{class:"lt-blank"},"?"),m=U("div",{class:"lt-card pop-in",style:{background:h.tint}},U("div",{class:"lt-art",html:h.art()}),U("div",{class:"lt-word"},M,U("span",{},d.slice(1)))),p=f.map((v,E)=>{let _=U("button",{class:"lt-tile pop-in",style:{animationDelay:`${150+E*80}ms`},"aria-label":v,"data-ok":v===u?"1":null},U("b",{},v),U("small",{},r(v)));return _.addEventListener("click",async()=>{g||(v===u?(g=!0,M.textContent=u,M.classList.add("filled"),_.classList.add("win"),n.good(_),await Promise.all([n.say({tr:`${a(u)}! ${d}!`,en:`${a(u)}! ${d}!`},{en:h.word.en}),_e(1500)]),l++,n.later(c,250)):(n.bad(_),n.say({tr:`Bu harf ${a(v)}. Bir daha dene!`,en:`That is ${v}. Try again!`})))}),_});n.board.replaceChildren(U("div",{class:"lt-wrap"},m,U("div",{class:"lt-tiles"},p))),n.prompt({tr:`${d}! ${d} hangi harfle ba\u015Flar?`,en:`${d}! What letter does ${d} start with?`},{en:h.word.en})}c()}};var $l=[[2,2],[3,2],[3,3]],jf={id:"yapboz",title:{tr:"Yapboz",en:"Puzzle"},theme:"puzzle",start(n){let t=Ne(Ge,$l.length),e=0;function i(){if(!n.alive())return;if(e>=$l.length)return n.finish();n.progress(e,$l.length);let[s,r]=$l[e],a=t[e],o=Xe(a.id).replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,""),l=120/s,c=120/r,h=(v,E)=>`<svg viewBox="${v*l} ${E*c} ${l} ${c}" class="art pz-art" overflow="hidden" aria-hidden="true">${o}</svg>`,d=[],u=U("div",{class:"pz-board pop-in",style:{"--cols":s,"--rows":r,background:a.color}},U("div",{class:"pz-ghost",html:Xe(a.id)}));for(let v=0;v<r;v++)for(let E=0;E<s;E++){let _=U("div",{class:"pz-slot","data-i":String(v*s+E)});d.push(_),u.append(_)}let f=0,g=s*r,M=[];for(let v=0;v<r;v++)for(let E=0;E<s;E++){let _=U("button",{class:"pz-piece","data-i":String(v*s+E),style:{background:a.color},"aria-label":`Par\xE7a ${v*s+E+1}`,html:h(E,v)});M.push(_)}let m=U("div",{class:"pz-tray",style:{"--cols":s,"--rows":r}},ae(M));M.forEach((v,E)=>{v.style.setProperty("--tilt",`${(E%2?1:-1)*(3+E%3*2)}deg`),v.classList.add("pop-in"),v.style.animationDelay=`${200+E*60}ms`}),M.forEach(v=>rr(v,{targets:()=>d.filter(E=>!E.dataset.full),onDrop(E,_){return _.dataset.i!==E.dataset.i?(n.bad(E),!1):(E.dataset.done="1",_.dataset.full="1",qi(E,_,{scale:1}).then(()=>{_.innerHTML=E.innerHTML,_.classList.add("full"),E.remove(),$t.snap(),f++,f===g&&p()}),!0)}}));async function p(){u.classList.add("done"),n.good(u),await Promise.all([n.say({tr:`${a.name.tr}! ${a.sound.tr}`,en:`${a.name.en}! ${a.sound.en}`}),_e(1600)]),e++,i()}n.board.replaceChildren(U("div",{class:"pz-wrap"},u,m)),n.prompt(e===0?{tr:"Yapbozu tamamla! Par\xE7alar\u0131 yerine s\xFCr\xFCkle.",en:"Finish the puzzle! Drag the pieces into place."}:{tr:"\u015Eimdi daha \xE7ok par\xE7a var!",en:"Now there are more pieces!"})}i()}};var Xh=()=>Wn.map(n=>({key:n.id,svg:gi(n.id),name:{tr:n.name.tr,en:n.en1}})),qh=()=>la.map(n=>({key:n.id,svg:ir(n.id,n.color),name:{tr:n.name.tr.toLocaleLowerCase("tr"),en:n.name.en.toLowerCase()}})),Yh=[{unit:"AB",pool:Xh},{unit:"AB",pool:qh},{unit:"AAB",pool:Xh},{unit:"ABB",pool:qh},{unit:"ABC",pool:Xh},{unit:"ABC",pool:qh}],Qf={id:"oruntu",title:{tr:"\xD6r\xFCnt\xFC",en:"Patterns"},theme:"beads",start(n){let t=0;async function e(){if(!n.alive())return;if(t>=Yh.length)return n.finish();n.progress(t,Yh.length);let{unit:i,pool:s}=Yh[t],r=s(),a=[...new Set(i)],o=Ne(r,a.length),l=Object.fromEntries(a.map((S,w)=>[S,o[w]])),c=i.length===2?5:i.length*2-1+1,h=Array.from({length:c+1},(S,w)=>l[i[w%i.length]]),d=h[h.length-1],f=h.slice(0,-1).map(S=>U("div",{class:"pt-item",html:S.svg})),g=U("div",{class:"pt-item pt-hole"},"?"),M=U("div",{class:"pt-row"},f,g),m=Ne(r.filter(S=>S!==d&&!o.includes(S)),1),p=o.filter(S=>S!==d),v=ae([d,...ae([...p,...m]).slice(0,2)]),E=!0,_=v.map(S=>{let w=U("button",{class:"pt-opt","aria-label":S.name.tr,"data-ok":S===d?"1":null,html:S.svg});return w.addEventListener("click",async()=>{if(!E)if(S===d){E=!0,await qi(w,g,{scale:1}),g.innerHTML=S.svg,g.classList.add("filled"),w.style.visibility="hidden",n.good(g);for(let A=0;A<M.children.length;A++){let y=M.children[A];y.classList.remove("bounce"),y.offsetWidth,y.classList.add("bounce"),$t.note(sr[A%sr.length]),await _e(170)}await Promise.all([n.say({tr:`Evet! S\u0131rada ${S.name.tr} vard\u0131!`,en:`Yes! Next comes the ${S.name.en}!`}),_e(700)]),t++,e()}else n.bad(w),n.say({tr:"Diziye bir daha bak. Ne tekrar ediyor?",en:"Look again. What repeats?"})}),w});n.board.replaceChildren(U("div",{class:"pt-wrap"},M,U("div",{class:"pt-opts"},_)));for(let S=0;S<f.length;S++){if(!n.alive())return;f[S].classList.add("show"),$t.note(sr[a.indexOf(i[S%i.length])*2]),await _e(230)}g.classList.add("show"),E=!1,n.prompt({tr:"S\u0131rada ne var?",en:"What comes next?"})}e()}};var Xl={tr:["s\u0131f\u0131r","bir","iki","\xFC\xE7","d\xF6rt","be\u015F","alt\u0131"],en:["zero","one","two","three","four","five","six"]},tp={ayi:"Ay\u0131ya",maymun:"Maymuna",tavsan:"Tav\u015Fana",panda:"Pandaya",fil:"File",kopek:"K\xF6pe\u011Fe",kedi:"Kediye",aslan:"Aslana"},Zh=[{n:2,mixed:!1},{n:3,mixed:!1},{n:3,mixed:!0},{n:4,mixed:!0},{n:5,mixed:!0}],Cv=(n,t)=>t===1?n.en1:n.name.en,ep={id:"besle",title:{tr:"Hayvan\u0131 Besle",en:"Feed the Animal"},theme:"picnic",start(n){let t=ae(Ge.filter(s=>tp[s.id])),e=0;function i(){if(!n.alive())return;if(e>=Zh.length)return n.finish();n.progress(e,Zh.length);let{n:s,mixed:r}=Zh[e],a=t[e%t.length],o=Wn[Math.random()*Wn.length|0],l=Ne(Wn.filter(v=>v!==o),2),c=r?ae([...Array(s+1).fill(o),l[0],l[1],l[0]]):ae(Array(s+2).fill(o)),h=0,d=!1,u=U("div",{class:"fd-dots"},Array.from({length:s},()=>U("i"))),f=U("div",{class:"fd-bubble"},U("div",{class:"fd-want",html:gi(o.id)}),U("b",{},`\xD7 ${s}`),u),g=U("div",{class:"fd-animal pop-in",style:{background:a.color},html:Xe(a.id)}),M=U("div",{class:"fd-scene"},f,g),m=c.map((v,E)=>{let _=U("button",{class:"fd-fruit pop-in",style:{animationDelay:`${200+E*60}ms`},"aria-label":v.name.tr,"data-ok":v===o?"1":null,html:gi(v.id)});return _._f=v,_});function p(v){if(d||v.dataset.done)return!1;if(v._f!==o)return n.bad(v),g.classList.remove("no"),g.offsetWidth,g.classList.add("no"),n.say({tr:`Hay\u0131r, ben ${o.name.tr} istiyorum!`,en:`No, I want ${o.name.en}!`}),!1;v.dataset.done="1",h++;let E=h;return E===s&&(d=!0),qi(v,g,{scale:.25}).then(async()=>{if(v.style.opacity="0",v.style.pointerEvents="none",$t.chomp(),g.classList.remove("chew"),g.offsetWidth,g.classList.add("chew"),u.children[E-1]?.classList.add("on"),E<s){n.say({tr:Xl.tr[E],en:Xl.en[E]});return}n.good(g),await Promise.all([n.say({tr:`${Xl.tr[s]}! Mmm, \xE7ok doydum, te\u015Fekk\xFCrler!`,en:`${Xl.en[s]}! Yum, I'm full, thank you!`}),_e(1500)]),e++,i()}),!0}m.forEach(v=>rr(v,{targets:()=>[g],onDrop:E=>p(E),tap:E=>p(E)})),n.board.replaceChildren(U("div",{class:"fd-wrap"},M,U("div",{class:"fd-tray"},m))),n.prompt({tr:`${tp[a.id]} ${s} ${o.name.tr} ver!`,en:`Give ${a.acc.en} ${s} ${Cv(o,s)}!`})}i()}};var ql=6,np={id:"saklambac",title:{tr:"Saklamba\xE7",en:"Peekaboo"},theme:"garden",start(n){let t=Ne(Ge,2),e=0,i=0,s=0,r=0,a=Array.from({length:9},()=>{let g=U("button",{class:"mole-pop","aria-label":""}),m={cell:U("div",{class:"mole"},U("div",{class:"mole-pit"}),U("div",{class:"mole-win"},g),U("div",{class:"mole-lip"})),pop:g,animal:null,up:!1,timer:0};return g.addEventListener("pointerdown",p=>{p.preventDefault(),d(m)}),m}),o=U("div",{class:"mole-goal-art"}),l=U("div",{class:"goal-meter"});n.board.replaceChildren(U("div",{class:"goal mole-goal"},o,l),U("div",{class:"mole-grid"},a.map(g=>g.cell)));function c(){let g=t[e];o.innerHTML=Xe(g.id),l.replaceChildren(...Array.from({length:ql},(M,m)=>U("i",{class:m<i?"on":"",style:{"--c":"#FFC93C"}}))),n.prompt({tr:`${g.acc.tr} yakala!`,en:`Catch ${g.acc.en}!`},g.name)}function h(g){g.up=!1,g.cell.classList.remove("up","hit"),g.pop.removeAttribute("data-ok"),clearTimeout(g.timer)}function d(g){if(!g.up)return;let M=t[e];if(g.animal===M){g.cell.classList.add("hit"),$t.boing();let[m,p]=Je(g.pop);if(ri(m,p,12),Ll(1),zl([m,p]),g.up=!1,g.pop.removeAttribute("data-ok"),setTimeout(()=>h(g),260),i++,s++,n.progress(s,ql*t.length),l.children[i-1]?.classList.add("on"),n.mood("happy"),i>=ql){if(e++,i=0,a.forEach(h),e>=t.length){n.later(()=>n.finish(),700);return}u=!0,n.later(()=>{c(),u=!1},900)}}else $t.wrong(),g.pop.classList.remove("shake"),g.pop.offsetWidth,g.pop.classList.add("shake"),n.mood("oops"),Date.now()-r>2500&&(r=Date.now(),n.say({tr:`O ${g.animal.name.tr.toLocaleLowerCase("tr")}! ${M.acc.tr} yakala!`,en:`That's a ${g.animal.name.en.toLowerCase()}! Catch ${M.acc.en}!`}))}let u=!1;function f(){if(n.alive()){if(!u){let g=a.filter(M=>!M.up&&!M.cell.classList.contains("up"));if(g.length&&a.filter(M=>M.up).length<3){let M=g[Math.random()*g.length|0],m=t[e],p=Ge.filter(E=>E!==m);M.animal=Math.random()<.5?m:p[Math.random()*p.length|0],M.pop.innerHTML=Xe(M.animal.id),M.pop.setAttribute("aria-label",M.animal.name.tr),M.animal===m&&M.pop.setAttribute("data-ok","1"),M.up=!0,M.cell.classList.add("up"),$t.rise();let v=Math.max(1500,2300-s*60);M.timer=setTimeout(()=>{M.up&&h(M)},v)}}n.later(f,Math.max(650,1e3-s*25))}}return c(),n.progress(0,ql*t.length),n.later(f,1200),()=>a.forEach(g=>clearTimeout(g.timer))}};var Lt=`stroke="${gt}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,ue=`stroke="${gt}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`,Yl=(n,t="0 0 120 120",e="")=>`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg" class="art"${e?` role="img" aria-label="${e}"`:' aria-hidden="true"'}>${n}</svg>`,ar=(n,t="#FFD98E")=>`
  <circle cx="60" cy="60" r="46" fill="${t}" ${Lt}/>
  ${n}`,Rv={mutlu:ar(`
    <path d="M36 50 q8 -8 16 0 M68 50 q8 -8 16 0" fill="none" ${Lt}/>
    <ellipse cx="44" cy="56" rx="6" ry="7" fill="${gt}"/><ellipse cx="76" cy="56" rx="6" ry="7" fill="${gt}"/>
    <circle cx="46" cy="54" r="2.2" fill="#fff"/><circle cx="78" cy="54" r="2.2" fill="#fff"/>
    <path d="M40 74 q20 20 40 0 q-20 8 -40 0z" fill="#B3345A" ${Lt}/>
    <ellipse cx="32" cy="70" rx="8" ry="5" fill="#FF8FA3" opacity=".6"/><ellipse cx="88" cy="70" rx="8" ry="5" fill="#FF8FA3" opacity=".6"/>`),uzgun:ar(`
    <path d="M32 54 q10 -10 20 -4 M88 54 q-10 -10 -20 -4" fill="none" ${Lt}/>
    <ellipse cx="44" cy="64" rx="6.5" ry="7.5" fill="${gt}"/><ellipse cx="76" cy="64" rx="6.5" ry="7.5" fill="${gt}"/>
    <circle cx="46" cy="62" r="2.4" fill="#fff"/><circle cx="78" cy="62" r="2.4" fill="#fff"/>
    <path d="M44 90 q16 -14 32 0" fill="none" ${Lt}/>
    <path class="tear" d="M40 74 q-6 11 0 15 q6 -4 0 -15z" fill="#6EC6E8" ${ue}/>
    <path class="tear" d="M80 78 q-5 9 0 12 q5 -3 0 -12z" fill="#6EC6E8" ${ue}/>`,"#A9C8E8"),kizgin:ar(`
    <path d="M32 44 l20 10 M88 44 l-20 10" fill="none" ${Lt}/>
    <ellipse cx="44" cy="63" rx="6" ry="6.5" fill="${gt}"/><ellipse cx="76" cy="63" rx="6" ry="6.5" fill="${gt}"/>
    <path d="M44 86 q16 -10 32 0" fill="none" ${Lt}/>
    <path d="M26 30 q4 -10 10 -12 M60 24 q0 -10 2 -14 M94 30 q-4 -10 -10 -12" fill="none" ${Lt}/>`,"#FF9C8A"),saskin:ar(`
    <circle cx="44" cy="56" r="11" fill="#fff" ${ue}/><circle cx="76" cy="56" r="11" fill="#fff" ${ue}/>
    <circle cx="44" cy="56" r="5.5" fill="${gt}"/><circle cx="76" cy="56" r="5.5" fill="${gt}"/>
    <path d="M30 40 q10 -8 20 -4 M90 40 q-10 -8 -20 -4" fill="none" ${Lt}/>
    <ellipse cx="60" cy="84" rx="11" ry="14" fill="#B3345A" ${Lt}/>`,"#FFE6A3"),korkmus:ar(`
    <circle cx="44" cy="58" r="10" fill="#fff" ${ue}/><circle cx="76" cy="58" r="10" fill="#fff" ${ue}/>
    <circle cx="45" cy="60" r="4.5" fill="${gt}"/><circle cx="77" cy="60" r="4.5" fill="${gt}"/>
    <path d="M30 40 q12 -6 22 -2 M90 40 q-12 -6 -22 -2" fill="none" ${Lt}/>
    <path d="M40 86 q6 -9 12 0 q6 9 12 0 q6 -9 12 0" fill="none" ${Lt}/>
    <path d="M18 50 q-9 7 -7 16 M102 50 q9 7 7 16" fill="none" ${ue}/>
    <path d="M26 36 q10 -10 20 -6 M94 36 q-10 -10 -20 -6" fill="none" ${Lt}/>`,"#D8CDEF"),uykulu:ar(`
    <path d="M34 58 q10 8 20 0 M66 58 q10 8 20 0" fill="none" ${Lt}/>
    <ellipse cx="60" cy="84" rx="9" ry="11" fill="#B3345A" ${Lt}/>
    <ellipse cx="30" cy="72" rx="8" ry="5" fill="#FF8FA3" opacity=".5"/><ellipse cx="90" cy="72" rx="8" ry="5" fill="#FF8FA3" opacity=".5"/>
    <text x="95" y="34" font-family="Fredoka, system-ui" font-weight="700" font-size="26" fill="${gt}">z</text>
    <text x="80" y="18" font-family="Fredoka, system-ui" font-weight="700" font-size="18" fill="${gt}">z</text>`,"#CDE7D0")},Kh=[{id:"mutlu",name:{tr:"Mutlu",en:"Happy"},line:{tr:"Mutlu olunca g\xFCl\xFCmseriz!",en:"When we are happy we smile!"}},{id:"uzgun",name:{tr:"\xDCzg\xFCn",en:"Sad"},line:{tr:"\xDCzg\xFCn olunca a\u011Flayabiliriz. Sar\u0131lmak iyi gelir.",en:"When we are sad we may cry. A hug helps."}},{id:"kizgin",name:{tr:"K\u0131zg\u0131n",en:"Angry"},line:{tr:"K\u0131z\u0131nca derin nefes al\u0131r\u0131z.",en:"When we are angry we take a deep breath."}},{id:"saskin",name:{tr:"\u015Ea\u015Fk\u0131n",en:"Surprised"},line:{tr:"\u015Ea\u015F\u0131r\u0131nca g\xF6zlerimiz kocaman olur!",en:"When we are surprised our eyes get big!"}},{id:"korkmus",name:{tr:"Korkmu\u015F",en:"Scared"},line:{tr:"Korkunca birine s\xF6yleriz, yan\u0131m\u0131zda olsun.",en:"When we are scared we tell someone to stay close."}},{id:"uykulu",name:{tr:"Uykulu",en:"Sleepy"},line:{tr:"Uykumuz gelince esneriz.",en:"When we are sleepy we yawn."}}],ip=(n,t="")=>Yl(`<g class="creature">${Rv[n]}</g>`,"0 0 120 120",t),$n=(n,t,e)=>`<circle cx="${n}" cy="${t}" r="${e}" fill="${gt}"/><circle cx="${n}" cy="${t}" r="${e*.45}" fill="#E8E4F0" ${ue}/>`,Pv={araba:`<path d="M24 64 L38 42 H78 L96 64 Z" fill="#8FD6F5" ${Lt}/>
    <path d="M12 86 q0 -22 16 -24 h64 q16 2 16 24 v8 q0 6 -8 6 H20 q-8 0 -8 -6z" fill="#FF5A4E" ${Lt}/>
    <path d="M42 62 V46 h14 v16z" fill="#DFF4FF" ${ue}/><path d="M64 62 V46 h12 l12 16z" fill="#DFF4FF" ${ue}/>
    ${$n(34,98,13)}${$n(88,98,13)}
    <circle cx="104" cy="74" r="6" fill="#FFE38A" ${ue}/>`,otobus:`<rect x="8" y="26" width="104" height="62" rx="12" fill="#FFC93C" ${Lt}/>
    <rect x="18" y="38" width="24" height="20" rx="4" fill="#DFF4FF" ${ue}/>
    <rect x="48" y="38" width="24" height="20" rx="4" fill="#DFF4FF" ${ue}/>
    <rect x="78" y="38" width="24" height="20" rx="4" fill="#DFF4FF" ${ue}/>
    <rect x="8" y="66" width="104" height="10" fill="#FF5A4E" ${ue}/>
    ${$n(34,94,13)}${$n(88,94,13)}`,itfaiye:`<path d="M6 60 h54 v34 H6z" fill="#E8332A" ${Lt}/>
    <path d="M60 44 h30 l24 22 v28 H60z" fill="#E8332A" ${Lt}/>
    <path d="M70 52 h18 l14 14 H70z" fill="#DFF4FF" ${ue}/>
    <path d="M10 56 L62 30" stroke="#C7C2D6" stroke-width="9" stroke-linecap="round"/>
    <path d="M10 56 L62 30" stroke="${gt}" stroke-width="3" fill="none"/>
    ${$n(30,98,13)}${$n(92,98,13)}
    <circle cx="34" cy="26" r="7" fill="#FFC93C" ${ue}/>`,ucak:`<path d="M52 54 L22 14 h16 l40 38z" fill="#3FA7D6" ${Lt}/>
    <path d="M52 70 L22 110 h16 l40 -38z" fill="#2E8FBC" ${Lt}/>
    <path d="M100 48 L114 22 h10 l-4 30z" fill="#3FA7D6" ${Lt}/>
    <path d="M6 62 q22 -16 50 -16 h26 q18 0 32 16 q-14 16 -32 16 H56 q-28 0 -50 -16z" fill="#F2F4FA" ${Lt}/>
    <circle cx="38" cy="60" r="5" fill="#8FD6F5" ${ue}/><circle cx="56" cy="60" r="5" fill="#8FD6F5" ${ue}/><circle cx="74" cy="60" r="5" fill="#8FD6F5" ${ue}/>
    <path d="M100 56 q10 4 14 6 q-4 4 -14 6z" fill="#DDE3EC" ${ue}/>`,gemi:`<path d="M8 76 h104 l-16 26 q-4 6 -12 6 H36 q-8 0 -12 -6z" fill="#E8332A" ${Lt}/>
    <rect x="34" y="44" width="52" height="32" rx="6" fill="#F2F4FA" ${Lt}/>
    <circle cx="48" cy="60" r="6" fill="#8FD6F5" ${ue}/><circle cx="72" cy="60" r="6" fill="#8FD6F5" ${ue}/>
    <rect x="72" y="18" width="14" height="28" rx="4" fill="#FFC93C" ${Lt}/>
    <path d="M30 76 h60" stroke="#fff" stroke-width="4" opacity=".6"/>
    <path d="M6 106 q14 -8 28 0 q14 8 28 0 q14 -8 28 0 q14 8 28 0" fill="none" stroke="#3FA7D6" stroke-width="4" stroke-linecap="round"/>`,tren:`<path d="M10 40 h44 v48 H10z" fill="#5BBA6F" ${Lt}/>
    <path d="M54 56 h40 q14 0 14 16 v16 H54z" fill="#5BBA6F" ${Lt}/>
    <rect x="18" y="50" width="26" height="20" rx="4" fill="#DFF4FF" ${ue}/>
    <rect x="66" y="64" width="22" height="16" rx="4" fill="#DFF4FF" ${ue}/>
    <rect x="18" y="20" width="16" height="20" rx="4" fill="#4A9E5C" ${Lt}/>
    <circle cx="26" cy="12" r="9" fill="#F2F4FA" opacity=".9" ${ue}/>
    ${$n(30,94,11)}${$n(66,94,10)}${$n(94,94,10)}
    <path d="M6 104 h108" stroke="${gt}" stroke-width="5" stroke-linecap="round"/>`,bisiklet:`${$n(28,80,24)}${$n(92,80,24)}
    <path d="M28 80 L52 40 h22 L92 80 M52 40 L62 80 M74 40 h12" fill="none" stroke="#9B6DD6" stroke-width="6" stroke-linecap="round"/>
    <path d="M44 36 h18" stroke="${gt}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="62" cy="80" r="6" fill="#FFC93C" ${ue}/>`,helikopter:`<ellipse cx="54" cy="66" rx="34" ry="24" fill="#FFC93C" ${Lt}/>
    <path d="M84 66 h30 v8 h-30z" fill="#FFC93C" ${Lt}/>
    <path d="M106 48 h10 v26 h-10z" fill="#FF9A2E" ${Lt}/>
    <circle cx="42" cy="62" r="12" fill="#DFF4FF" ${ue}/>
    <path d="M12 30 h84" stroke="${gt}" stroke-width="6" stroke-linecap="round"/>
    <path d="M54 30 v12" stroke="${gt}" stroke-width="5"/>
    <path d="M30 96 h50 M36 90 v10 M74 90 v10" fill="none" ${Lt}/>`},Jh=[{id:"araba",name:{tr:"Araba",en:"Car"},acc:{tr:"Arabay\u0131",en:"the car"},sound:{tr:"Bip bip!",en:"Beep beep!"}},{id:"otobus",name:{tr:"Otob\xFCs",en:"Bus"},acc:{tr:"Otob\xFCs\xFC",en:"the bus"},sound:{tr:"D\xFCt d\xFCt!",en:"Honk honk!"}},{id:"itfaiye",name:{tr:"\u0130tfaiye",en:"Fire truck"},acc:{tr:"\u0130tfaiyeyi",en:"the fire truck"},sound:{tr:"\u0130i-oo ii-oo!",en:"Wee-ooo!"}},{id:"ucak",name:{tr:"U\xE7ak",en:"Airplane"},acc:{tr:"U\xE7a\u011F\u0131",en:"the airplane"},sound:{tr:"Vuuuuj!",en:"Whoosh!"}},{id:"gemi",name:{tr:"Gemi",en:"Ship"},acc:{tr:"Gemiyi",en:"the ship"},sound:{tr:"D\xFC\xFC\xFCt!",en:"Toot!"}},{id:"tren",name:{tr:"Tren",en:"Train"},acc:{tr:"Treni",en:"the train"},sound:{tr:"\xC7uf \xE7uf!",en:"Choo choo!"}},{id:"bisiklet",name:{tr:"Bisiklet",en:"Bicycle"},acc:{tr:"Bisikleti",en:"the bicycle"},sound:{tr:"Zil zil!",en:"Ring ring!"}},{id:"helikopter",name:{tr:"Helikopter",en:"Helicopter"},acc:{tr:"Helikopteri",en:"the helicopter"},sound:{tr:"Tak tak tak!",en:"Whirr whirr!"}}],sp=(n,t="")=>Yl(`<g class="vehicle">${Pv[n]}</g>`,"0 0 120 120",t),Iv=()=>{let n="";for(let t=0;t<10;t++)n+=`<rect x="56" y="6" width="8" height="16" rx="4" fill="#FFC93C" ${ue} transform="rotate(${t*36} 60 60)"/>`;return n},Lv={gunesli:`<g class="spin-slow">${Iv()}</g><circle cx="60" cy="60" r="30" fill="#FFD43B" ${Lt}/>
    <circle cx="50" cy="56" r="3.5" fill="${gt}"/><circle cx="70" cy="56" r="3.5" fill="${gt}"/>
    <path d="M50 70 q10 10 20 0" fill="none" ${Lt}/>
    <ellipse cx="42" cy="66" rx="6" ry="4" fill="#FF8FA3" opacity=".6"/><ellipse cx="78" cy="66" rx="6" ry="4" fill="#FF8FA3" opacity=".6"/>`,yagmurlu:`<path d="M30 68 a18 18 0 0 1 5 -35 a23 23 0 0 1 44 -3 a17 17 0 0 1 3 38z" fill="#C9D6E5" ${Lt}/>
    <g class="drops"><path d="M38 82 q-5 8 0 11 q5 -3 0 -11z" fill="#3FA7D6" ${ue}/>
    <path d="M60 88 q-5 8 0 11 q5 -3 0 -11z" fill="#3FA7D6" ${ue}/>
    <path d="M82 82 q-5 8 0 11 q5 -3 0 -11z" fill="#3FA7D6" ${ue}/></g>`,karli:`<path d="M30 62 a18 18 0 0 1 5 -35 a23 23 0 0 1 44 -3 a17 17 0 0 1 3 38z" fill="#E8EEF5" ${Lt}/>
    <g class="drops" fill="none" ${ue} stroke="#3FA7D6">
    <path d="M36 80 v14 M30 83 l12 8 M42 83 l-12 8"/>
    <path d="M60 88 v16 M53 92 l14 8 M67 92 l-14 8"/>
    <path d="M84 80 v14 M78 83 l12 8 M90 83 l-12 8"/></g>`,bulutlu:`<path d="M18 80 a18 18 0 0 1 4 -34 a22 22 0 0 1 42 -2 a16 16 0 0 1 2 36z" fill="#F2F4FA" ${Lt}/>
    <path d="M62 84 a14 14 0 0 1 4 -27 a18 18 0 0 1 33 -1 a13 13 0 0 1 1 28z" fill="#D7DEEA" ${Lt}/>`,ruzgarli:`<path d="M8 44 h56 a12 12 0 1 0 -11 -16" fill="none" ${Lt} stroke-width="7"/>
    <path d="M14 66 h74 a13 13 0 1 1 -12 18" fill="none" ${Lt} stroke-width="7"/>
    <path d="M8 88 h44 a10 10 0 1 0 -9 13" fill="none" ${Lt} stroke-width="7"/>`,firtinali:`<path d="M26 64 a18 18 0 0 1 5 -35 a23 23 0 0 1 44 -3 a17 17 0 0 1 3 38z" fill="#9AA6B8" ${Lt}/>
    <path d="M58 68 L40 98 h16 l-8 20 26 -32 H58 l10 -18z" fill="#FFD43B" ${Lt}/>`},rp=[{id:"gunesli",name:{tr:"G\xFCne\u015Fli",en:"Sunny"},wear:{tr:"\u015Fapka ve g\xF6zl\xFCk",en:"a hat and sunglasses"}},{id:"yagmurlu",name:{tr:"Ya\u011Fmurlu",en:"Rainy"},wear:{tr:"\u015Femsiye ve \xE7izme",en:"an umbrella and boots"}},{id:"karli",name:{tr:"Karl\u0131",en:"Snowy"},wear:{tr:"atk\u0131 ve bere",en:"a scarf and a beanie"}},{id:"bulutlu",name:{tr:"Bulutlu",en:"Cloudy"},wear:{tr:"h\u0131rka",en:"a cardigan"}},{id:"ruzgarli",name:{tr:"R\xFCzg\xE2rl\u0131",en:"Windy"},wear:{tr:"mont",en:"a jacket"}},{id:"firtinali",name:{tr:"F\u0131rt\u0131nal\u0131",en:"Stormy"},wear:{tr:"ya\u011Fmurluk",en:"a raincoat"}}],ap=(n,t="")=>Yl(Lv[n],"0 0 120 120",t),Fv={sapka:`<path d="M16 72 q44 -16 88 0 q-10 10 -44 10 q-34 0 -44 -10z" fill="#FF6F59" ${Lt}/>
    <path d="M38 70 q4 -40 22 -42 q20 2 22 42 q-22 8 -44 0z" fill="#FF8A75" ${Lt}/>`,gozluk:`<circle cx="36" cy="60" r="22" fill="#3B2C5A" opacity=".75" ${Lt}/><circle cx="84" cy="60" r="22" fill="#3B2C5A" opacity=".75" ${Lt}/>
    <path d="M58 58 q6 -6 12 0" fill="none" ${Lt}/><path d="M14 54 L2 48 M106 54 L118 48" ${Lt}/>`,semsiye:`<path d="M10 60 q50 -52 100 0 q-26 -10 -50 0 q-24 -10 -50 0z" fill="#E8504A" ${Lt}/>
    <path d="M60 58 v40 q0 12 -14 12 q-10 0 -12 -8" fill="none" ${Lt} stroke-width="6"/>`,cizme:`<path d="M14 22 h22 v38 q0 10 10 13 l10 4 q6 2 6 9 v8 H14z" fill="#FFC93C" ${Lt}/>
    <path d="M62 22 h22 v38 q0 10 10 13 l10 4 q6 2 6 9 v8 H62z" fill="#FFC93C" ${Lt}/>
    <path d="M14 82 h48 M62 82 h48" stroke="${gt}" stroke-width="4"/>
    <path d="M14 30 h22 M62 30 h22" stroke="#E8A91F" stroke-width="5"/>`,atki:`<path d="M18 30 q42 26 84 0 v24 q-42 26 -84 0z" fill="#9B6DD6" ${Lt}/>
    <path d="M26 54 q10 28 6 44 h26 q4 -20 -4 -38z" fill="#8559C4" ${Lt}/>
    <path d="M70 52 q12 24 8 46 h24 q2 -24 -8 -40z" fill="#AE83E0" ${Lt}/>
    <path d="M30 100 v10 M40 100 v10 M50 100 v10 M80 100 v10 M90 100 v10 M100 100 v10" stroke="${gt}" stroke-width="4" stroke-linecap="round"/>
    <path d="M26 42 q34 20 68 0" fill="none" stroke="#C7A6EC" stroke-width="4"/>`,bere:`<path d="M18 80 q42 -14 84 0 v10 q-42 10 -84 0z" fill="#3FA7D6" ${Lt}/>
    <path d="M26 80 q6 -46 34 -46 q28 0 34 46z" fill="#5BBDE8" ${Lt}/>
    <circle cx="60" cy="24" r="12" fill="#FFF8EC" ${Lt}/>`,hirka:`<path d="M36 22 h48 l16 14 v62 H20V36z" fill="#5BBA6F" ${Lt}/>
    <path d="M60 22 L48 44 L60 98 L72 44z" fill="#4A9E5C" ${ue}/>
    <circle cx="60" cy="56" r="3" fill="#FFF8EC"/><circle cx="60" cy="72" r="3" fill="#FFF8EC"/>`,mont:`<path d="M34 24 h52 q16 4 20 18 l6 28 -20 6 -4 -12 v34 H32V64l-4 12 -20 -6 6 -28 q4 -14 20 -18z" fill="#FF9A2E" ${Lt}/>
    <path d="M60 24 v74" stroke="${gt}" stroke-width="4"/>
    <path d="M46 24 q14 14 28 0" fill="none" ${Lt}/>
    <path d="M36 70 h18 M66 70 h18" stroke="#D97B14" stroke-width="5" stroke-linecap="round"/>
    <circle cx="60" cy="40" r="3.5" fill="#FFF8EC" ${ue}/>`,yagmurluk:`<path d="M60 10 q-18 0 -24 14 q-20 6 -22 22 l-4 22 16 4 V98 h68 V72 l16 -4 -4 -22 q-2 -16 -22 -22 q-6 -14 -24 -14z" fill="#FFD43B" ${Lt}/>
    <path d="M60 24 q-12 -2 -16 -10 q12 -6 32 0 q-4 8 -16 10z" fill="#FFE68A" ${ue}/>
    <path d="M60 30 v68" stroke="${gt}" stroke-width="4"/>
    <path d="M30 68 h12 M78 68 h12" stroke="#E8B923" stroke-width="5" stroke-linecap="round"/>`},Yi={sapka:{tr:"\u015Fapka",en:"hat"},gozluk:{tr:"g\xFCne\u015F g\xF6zl\xFC\u011F\xFC",en:"sunglasses"},semsiye:{tr:"\u015Femsiye",en:"umbrella"},cizme:{tr:"\xE7izme",en:"boots"},atki:{tr:"atk\u0131",en:"scarf"},bere:{tr:"bere",en:"beanie"},hirka:{tr:"h\u0131rka",en:"cardigan"},mont:{tr:"mont",en:"jacket"},yagmurluk:{tr:"ya\u011Fmurluk",en:"raincoat"}},jh=(n,t="")=>Yl(Fv[n],"0 0 120 120",t),op={gunesli:["sapka","gozluk"],yagmurlu:["semsiye","cizme"],karli:["atki","bere"],bulutlu:["hirka"],ruzgarli:["mont"],firtinali:["yagmurluk","cizme"]};var lp={id:"duygular",title:{tr:"Duygular",en:"Feelings"},theme:"feelings",start(n){let e=ae(Kh),i=0;function s(){if(!n.alive())return;if(i>=7)return n.finish();n.progress(i,7);let r=i<2?2:i<5?3:4,a=e[i%e.length],o=ae([a,...Ne(Kh.filter(h=>h.id!==a.id),r-1)]),l=!1,c=o.map((h,d)=>{let u=U("span",{class:"cap"}),f=U("button",{class:"choice pop-in",style:{"--tint":"#FFF3DC",animationDelay:`${d*70}ms`},"aria-label":Ke(h.name),html:ip(h.id)},u);return f.addEventListener("click",async()=>{l||(h===a?(l=!0,u.textContent=Ke(h.name),f.classList.add("win"),c.forEach(g=>g!==f&&g.classList.add("fade")),n.good(f),n.mood("wow"),await Promise.all([n.say({tr:`${h.name.tr}! ${h.line.tr}`,en:`${h.name.en}! ${h.line.en}`},h.name),_e(1700)]),i++,n.later(s,300)):(n.bad(f),n.say({tr:`Bu ${h.name.tr.toLocaleLowerCase("tr")} bir y\xFCz. ${a.name.tr} olan\u0131 bul!`,en:`This face is ${h.name.en.toLowerCase()}. Find the ${a.name.en.toLowerCase()} one!`},a.name)))}),f});n.board.replaceChildren(U("div",{class:`choices n${r}`},c)),n.prompt({tr:`${a.name.tr} olan hangisi?`,en:`Which one is ${a.name.en.toLowerCase()}?`},a.name)}s()}};var cp={id:"araclar",title:{tr:"Ara\xE7lar",en:"Vehicles"},theme:"road",start(n){let e=ae(Jh),i=0;function s(){if(!n.alive())return;if(i>=8)return n.finish();n.progress(i,8);let r=i<2?2:i<6?3:4,a=e[i%e.length],o=ae([a,...Ne(Jh.filter(h=>h.id!==a.id),r-1)]),l=!1,c=o.map((h,d)=>{let u=U("span",{class:"cap"}),f=U("button",{class:"choice vehicle-card pop-in",style:{"--tint":"#EAF4FF",animationDelay:`${d*70}ms`},"aria-label":Ke(h.name),html:sp(h.id)},u);return f.addEventListener("click",async()=>{l||(h===a?(l=!0,u.textContent=Ke(h.name),f.classList.add("win","drive"),c.forEach(g=>g!==f&&g.classList.add("fade")),$t.whoosh(),n.good(f),await Promise.all([n.say({tr:`${h.name.tr}! ${h.sound.tr}`,en:`${h.name.en}! ${h.sound.en}`},h.name),_e(1500)]),i++,n.later(s,300)):(n.bad(f),n.say({tr:`Bu ${h.name.tr.toLocaleLowerCase("tr")}. ${a.acc.tr} bul!`,en:`This is a ${h.name.en.toLowerCase()}. Find ${a.acc.en}!`},a.name)))}),f});n.board.replaceChildren(U("div",{class:`choices n${r}`},c)),n.prompt({tr:`${a.acc.tr} bul! ${a.sound.tr}`,en:`Find ${a.acc.en}! ${a.sound.en}`},a.name)}s()}};var hp={gunesli:{tr:"Bug\xFCn hava g\xFCne\u015Fli!",en:"It's sunny today!"},yagmurlu:{tr:"Bug\xFCn ya\u011Fmur ya\u011F\u0131yor!",en:"It's raining today!"},karli:{tr:"Bug\xFCn kar ya\u011F\u0131yor!",en:"It's snowing today!"},bulutlu:{tr:"Bug\xFCn hava bulutlu.",en:"It's cloudy today."},ruzgarli:{tr:"Bug\xFCn hava r\xFCzg\xE2rl\u0131!",en:"It's windy today!"},firtinali:{tr:"Bug\xFCn f\u0131rt\u0131na var!",en:"It's stormy today!"}},up={id:"hava",title:{tr:"Hava Durumu",en:"Weather"},theme:"weather",start(n){let t=ae(rp),e=5,i=0;function s(){if(!n.alive())return;if(i>=e)return n.finish();n.progress(i,e);let r=t[i%t.length],a=op[r.id],o=Object.keys(Yi).filter(p=>!a.includes(p)),l=ae([...a,...Ne(o,Math.max(2,4-a.length))]),c=0,h=U("div",{class:`wx-sky wx-${r.id}`},U("div",{class:"wx-icon",html:ap(r.id)})),d=U("div",{class:"wx-pofi",html:Pl()}),u=U("div",{class:"wx-worn"}),f=U("div",{class:"wx-stage"},h,U("div",{class:"wx-char"},d,u)),g=U("div",{class:"wx-tray"}),M=l.map((p,v)=>{let E=U("button",{class:"wx-item pop-in",style:{animationDelay:`${250+v*70}ms`},"aria-label":Yi[p].tr,"data-ok":a.includes(p)?"1":null,html:jh(p)});return E._id=p,E});g.append(...M);function m(p){if(p.dataset.done)return!1;let v=p._id;if(!a.includes(v))return n.bad(p),d.classList.remove("no"),d.offsetWidth,d.classList.add("no"),n.say({tr:`${Yi[v].tr.charAt(0).toLocaleUpperCase("tr")+Yi[v].tr.slice(1)} bu havaya uymaz.`,en:`A ${Yi[v].en} is not right for this weather.`}),!1;p.dataset.done="1",c++;let E=c;return qi(p,d,{scale:.4}).then(async()=>{p.style.opacity="0",p.style.pointerEvents="none",$t.snap();let _=U("div",{class:"wx-chip pop-in",html:jh(v)});if(u.append(_),E<a.length){n.cheer(_),n.say({tr:`${Yi[v].tr}! Bir tane daha laz\u0131m.`,en:`${Yi[v].en}! One more is needed.`});return}d.classList.add("ready"),n.good(d),n.mood("happy"),await Promise.all([n.say({tr:`Harika! ${r.name.tr} havada ${r.wear.tr} tam olur.`,en:`Great! On a ${r.name.en.toLowerCase()} day ${r.wear.en} is just right.`}),_e(1700)]),i++,s()}),!0}M.forEach(p=>rr(p,{targets:()=>[d],onDrop:v=>m(v),tap:v=>m(v)})),n.board.replaceChildren(U("div",{class:"wx-wrap"},f,g)),n.prompt({tr:`${hp[r.id].tr} Pofi ne giysin?`,en:`${hp[r.id].en} What should Pofi wear?`},r.name)}s()}};var Qh=[kf,Kf,Hf,Jf,Wf,jf,$f,ep,Xf,Qf,Yf,np,lp,cp,up],tu=document.getElementById("app");function Dv(){let n=U("button",{class:"btn btn-start","aria-label":"Ba\u015Fla"},U("span",{class:"ico",html:qe.play}),U("span",{},"Ba\u015Fla")),t=U("section",{class:"splash"},U("div",{class:"splash-sun","aria-hidden":"true"}),U("div",{class:"splash-sea","aria-hidden":"true"}),U("div",{class:"splash-inner"},fa("splash-mascot"),U("h1",{},U("span",{class:"l1"},"Mete'nin"),U("span",{class:"l2"},"Macera Adas\u0131")),n));tu.append(t),n.addEventListener("click",()=>{Mf(),Rf(),$t.whoosh(),ni(ii.tap),ha("island"),kh(),t.classList.add("out"),setTimeout(()=>t.remove(),600),or.show(!0)},{once:!0})}var or=(()=>{let n=U("canvas",{class:"world","aria-label":"Macera Adas\u0131"}),t=U("div",{class:"badges"}),e=fa("hub-mascot"),i=U("button",{class:"pofi-btn","aria-label":"Pofi"},e),s=U("button",{class:"btn btn-round btn-leaf album-btn","aria-label":"\xC7\u0131kartma alb\xFCm\xFC",html:qe.album}),r=U("button",{class:"parent-btn","aria-label":"Ebeveyn ayarlar\u0131 (bas\u0131l\u0131 tut)",html:qe.gear}),a=U("section",{class:"hub",hidden:!0},n,t,U("div",{class:"hub-top"},r),U("div",{class:"hub-bottom"},i,s));tu.append(a);let o=Qh.map(f=>({id:f.id,title:f.title,icon:Il[f.id],titleText:()=>Ke(f.title)})),l=null,c=[{tr:"Merhaba! Ben Pofi. Adada bir yere dokun, oyuna ba\u015Flayal\u0131m!",en:"Hi! I'm Pofi. Tap a place on the island to play!"},{tr:"Aday\u0131 parma\u011F\u0131nla \xE7evirebilirsin!",en:"You can spin the island with your finger!"},{tr:"Buras\u0131 benim a\u011Fa\xE7 evim. Ne g\xFCzel, de\u011Fil mi?",en:"This is my tree house. Nice, right?"},{tr:"Hadi, bir macera se\xE7!",en:"Come on, pick an adventure!"}],h=0;function d(){Xi(e,"happy"),$t.tap(),In(c[h++%c.length])}function u(){l||(l=mf({canvas:n,badgeLayer:t,zones:o,async onSelect(f,g){if(g==="start"){$t.whoosh(),ni(ii.tap),ua(),a.classList.add("leaving");return}let M=Hl();await M.close(),eu(Qh.find(m=>m.id===f),M)},onTreehouse:d}))}return i.addEventListener("click",d),s.addEventListener("click",()=>{$t.tap(),Nv()}),Nf(r,1500,Uv),{show(f=!1){u(),ha("island"),kh(),a.hidden=!1,a.classList.remove("leaving"),a.append(Wh()),kl(),l.refreshBadgeNames(),l.start(),f&&setTimeout(()=>{Xi(e,"happy"),In(c[0]),h=1},900)},hide(){l&&l.stop(),a.hidden=!0},back(){l&&l.back()},relabel(){l&&l.refreshBadgeNames()},debug(){return l&&l.debug()}}})(),dp=null;function eu(n,t=null){let e=new Set,i=!0,s=null,r=U("button",{class:"btn btn-round btn-sea","aria-label":"Adaya d\xF6n",html:qe.home}),a=U("button",{class:"btn btn-round btn-sun","aria-label":"Tekrar dinle",html:qe.speaker}),o=U("div",{class:"progress",role:"progressbar","aria-valuemin":"0"},U("i",{class:"bar"})),l=U("div",{class:"board"}),c=fa("game-mascot"),h=U("h2",{class:"game-title"},Ke(n.title)),d=U("section",{class:`game-screen theme-${n.theme}`},U("header",{class:"game-head"},r,U("div",{class:"head-mid"},h,o),a),l,c);d.prepend(Of(n.theme)),tu.append(d),d.append(Wh()),or.hide(),zh(),ha("play"),requestAnimationFrame(()=>d.classList.add("in")),t&&t.open();let u={board:l,alive:()=>i,label:Ke,later(p,v){let E=setTimeout(()=>{e.delete(E),i&&p()},v);return e.add(E),E},say:(p,v)=>i?In(p,v):Promise.resolve(),prompt(p,v){return s=[p,v],u.say(p,v)},progress(p,v){o.firstChild.style.width=`${Math.min(100,p/v*100)}%`,o.setAttribute("aria-valuenow",String(p)),o.setAttribute("aria-valuemax",String(v))},mood:p=>Xi(c,p),good(p){$t.correct(),ni(ii.good);let[v,E]=Je(p);ri(v,E),p.classList?.remove("bounce"),p.offsetWidth,p.classList?.add("bounce"),Ll(1),zl([v,E]),Xi(c,"happy")},cheer(p){$t.correct(),ni(ii.good);let[v,E]=Je(p);ri(v,E,12),Xi(c,"happy")},bad(p){$t.wrong(),ni(ii.bad),p.classList.remove("shake"),p.offsetWidth,p.classList.add("shake"),Xi(c,"oops")},async finish(){if(!i)return;if(i=!1,g(),xf(n.id),ni(ii.big),await Df()==="again"){let v=Hl();await v.close(),M(!0),eu(n,v)}else M()}},f=null;function g(){e.forEach(clearTimeout),e.clear();try{f&&f()}catch{}f=null}function M(p=!1){if(i=!1,g(),ua(),p){d.remove();return}or.show(),or.back(),d.classList.remove("in"),d.classList.add("out"),setTimeout(()=>d.remove(),400),dp=null}async function m(){$t.tap(),ni(ii.tap);let p=Hl();await p.close(),M(),p.open()}r.addEventListener("click",m),a.addEventListener("click",()=>{$t.tap(),s&&In(...s)}),c.addEventListener("click",()=>{s&&In(...s),Xi(c,"happy"),ni(ii.tap)}),dp={close:M},f=n.start(u)||null}function Nv(){let n=U("button",{class:"btn btn-round btn-sea","aria-label":"Kapat",html:qe.close}),t=me.stickers.length,e=U("div",{class:"album-grid"},Ge.map(s=>{let r=me.stickers.includes(s.id),a=U("button",{class:`sticker ${r?"":"locked"}`,style:{background:r?s.color:""},"aria-label":r?Ke(s.name):"Kilitli \xE7\u0131kartma",html:Xe(s.id)});return a.addEventListener("click",()=>{r?($t.correct(),a.classList.remove("bounce"),a.offsetWidth,a.classList.add("bounce"),In({tr:`${s.name.tr}! ${s.sound.tr}`,en:`${s.name.en}! ${s.sound.en}`})):($t.tap(),In({tr:"Bu \xE7\u0131kartmay\u0131 kazanmak i\xE7in oyun oyna!",en:"Play a game to win this sticker!"}))}),a})),i=U("div",{class:"overlay album"},U("div",{class:"album-card",role:"dialog","aria-modal":"true"},U("header",{},U("h2",{},Ke({tr:"\xC7\u0131kartma Alb\xFCm\xFCm",en:"My Sticker Book"})),U("span",{class:"album-count"},`${t} / ${Ge.length}`),n),e));document.body.append(i),In(t?{tr:`${t} \xE7\u0131kartman var! Harika!`,en:`You have ${t} stickers! Great!`}:{tr:"Oyun oynayarak \xE7\u0131kartma topla!",en:"Play games to collect stickers!"}),n.addEventListener("click",()=>{$t.tap(),ua(),i.classList.add("out"),setTimeout(()=>i.remove(),250)})}function Uv(){$t.tap();let n=me.settings,t=(r,a,o,l)=>U("div",{class:"seg",role:"radiogroup","aria-label":r},o.map(([c,h])=>{let d=U("button",{class:c===a?"on":"",role:"radio","aria-checked":String(c===a)},h);return d.addEventListener("click",()=>{d.parentElement.querySelectorAll("button").forEach(u=>{u.classList.remove("on"),u.setAttribute("aria-checked","false")}),d.classList.add("on"),d.setAttribute("aria-checked","true"),l(c),ds(),$t.tap()}),d})),e=U("button",{class:"btn btn-round btn-sea","aria-label":"Kapat",html:qe.close}),i=U("button",{class:"btn btn-pill btn-danger"},"\u0130lerlemeyi s\u0131f\u0131rla");i.addEventListener("click",()=>{if(i.dataset.sure){vf(),kl(),i.textContent="S\u0131f\u0131rland\u0131",i.disabled=!0;return}i.dataset.sure="1",i.textContent="Emin misin? Tekrar dokun"});let s=U("div",{class:"overlay parent"},U("div",{class:"parent-card",role:"dialog","aria-modal":"true","aria-label":"Ebeveyn ayarlar\u0131"},U("header",{},U("h2",{},"Ebeveyn ayarlar\u0131"),e),U("label",{},"Oyun dili"),t("Oyun dili",n.lang,[["tr","T\xFCrk\xE7e"],["en","English"],["both","T\xFCrk\xE7e + English"]],r=>{n.lang=r,or.relabel()}),U("p",{class:"hint"},"\u201CT\xFCrk\xE7e + English\u201D se\xE7ilince y\xF6nergeler T\xFCrk\xE7e, ard\u0131ndan kelimeler \u0130ngilizce s\xF6ylenir."),U("label",{},"Seslendirme"),t("Seslendirme",n.voice,[[!0,"A\xE7\u0131k"],[!1,"Kapal\u0131"]],r=>{n.voice=r}),U("label",{},"Ses efektleri"),t("Ses efektleri",n.sound,[[!0,"A\xE7\u0131k"],[!1,"Kapal\u0131"]],r=>{n.sound=r}),U("label",{},"Arka plan m\xFCzi\u011Fi"),t("Arka plan m\xFCzi\u011Fi",n.music,[[!0,"A\xE7\u0131k"],[!1,"Kapal\u0131"]],r=>{n.music=r,wf()}),U("label",{},"Titre\u015Fim"),t("Titre\u015Fim",n.haptics,[[!0,"A\xE7\u0131k"],[!1,"Kapal\u0131"]],r=>{n.haptics=r,ni(ii.good)}),U("label",{},"Konu\u015Fma h\u0131z\u0131"),t("Konu\u015Fma h\u0131z\u0131",n.rate,[[.8,"Yava\u015F"],[.95,"Normal"],[1.1,"H\u0131zl\u0131"]],r=>{n.rate=r,In({tr:"Merhaba Mete!",en:"Hello Mete!"})}),U("div",{class:"parent-stats"},U("span",{},`Y\u0131ld\u0131z: ${me.stars}`),U("span",{},`\xC7\u0131kartma: ${me.stickers.length}/${Ge.length}`)),i,U("p",{class:"hint"},"Sesler cihaz\u0131n kendi konu\u015Fma sesini kullan\u0131r. iPhone\u2019da daha do\u011Fal ses i\xE7in: Ayarlar \u203A Eri\u015Filebilirlik \u203A Seslendirilen \u0130\xE7erik \u203A Sesler \u203A T\xFCrk\xE7e\u2019den \u201CGeli\u015Fmi\u015F\u201D bir ses indirin.")));document.body.append(s),e.addEventListener("click",()=>{$t.tap(),s.classList.add("out"),setTimeout(()=>s.remove(),250)})}Dv();"serviceWorker"in navigator&&location.protocol==="https:"&&addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));window.__macera={openGame:n=>eu(Qh.find(t=>t.id===n)),hub:or,store:me};
