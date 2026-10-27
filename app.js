var Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pu=0,uc=1,mu=2;var Ur=1,po=2,Us=3,Ci=0,ln=1,$n=2,qn=0,Bs=1,dc=2,fc=3,pc=4,gu=5;var Zi=100,_u=101,xu=102,yu=103,vu=104,Mu=200,Su=201,bu=202,Eu=203,mc=204,gc=205,wu=206,Tu=207,Au=208,Cu=209,Ru=210,Pu=211,Iu=212,Lu=213,Du=214,Aa=0,Ca=1,Ra=2,ys=3,Pa=4,Ia=5,La=6,Da=7,_c=0,Fu=1,Nu=2,Dn=0,xc=1,yc=2,vc=3,Mc=4,Sc=5,bc=6,Ec=7;var wc=300,Ri=301,Ji=302,mo=303,go=304,Br=306,Fa=1e3,Hn=1001,Na=1002,Ue=1003,Uu=1004;var Or=1005;var Ze=1006,_o=1007;var Pi=1008;var un=1009,Tc=1010,Ac=1011,Os=1012,xo=1013,Fn=1014,Nn=1015,Un=1016,yo=1017,vo=1018,ks=1020,Cc=35902,Rc=35899,Pc=1021,Ic=1022,En=1023,Vn=1026,Ii=1027,Lc=1028,Mo=1029,Li=1030,So=1031;var bo=1033,kr=33776,zr=33777,Gr=33778,Hr=33779,Eo=35840,wo=35841,To=35842,Ao=35843,Co=36196,Ro=37492,Po=37496,Io=37488,Lo=37489,Vr=37490,Do=37491,Fo=37808,No=37809,Uo=37810,Bo=37811,Oo=37812,ko=37813,zo=37814,Go=37815,Ho=37816,Vo=37817,Wo=37818,Xo=37819,$o=37820,qo=37821,Yo=36492,Zo=36494,Jo=36495,Ko=36283,jo=36284,Wr=36285,Qo=36286;var rr=2300,Ua=2301,wa=2302,Ql=2303,tc=2400,ec=2401,nc=2402;var Bu=3200;var tl=0,Ou=1,oi="",Ye="srgb",ar="srgb-linear",or="linear",ge="srgb";var Ta=7680;var ku=519,zu=512,Gu=513,Hu=514,el=515,Vu=516,Wu=517,nl=518,Xu=519,$u=35044;var Dc="300 es",In=2e3,vs=2001;function Rf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qu(){let n=lr("canvas");return n.style.display="block",n}var Uh={},Ms=null;function Fc(...n){let t="THREE."+n.shift();Ms?Ms("log",t,...n):console.log(t,...n)}function Yu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ht(...n){n=Yu(n);let t="THREE."+n.shift();if(Ms)Ms("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Xt(...n){n=Yu(n);let t="THREE."+n.shift();if(Ms)Ms("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Vi(...n){let t=n.join(" ");t in Uh||(Uh[t]=!0,Ht(...n))}function Zu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Ju={[Aa]:Ca,[Ra]:La,[Pa]:Da,[ys]:Ia,[Ca]:Aa,[La]:Ra,[Da]:Pa,[Ia]:ys},Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=1234567,er=Math.PI/180,Ss=180/Math.PI;function Ki(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function Nc(n,t){return(n%t+t)%t}function If(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Lf(n,t,e){return n!==t?(e-n)/(t-n):0}function nr(n,t,e){return(1-e)*n+e*t}function Df(n,t,e,i){return nr(n,t,1-Math.exp(-e*i))}function Ff(n,t=1){return t-Math.abs(Nc(n,t*2)-t)}function Nf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Uf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Bf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Of(n,t){return n+Math.random()*(t-n)}function kf(n){return n*(.5-Math.random())}function zf(n){n!==void 0&&(Bh=n);let t=Bh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gf(n){return n*er}function Hf(n){return n*Ss}function Vf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Wf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $f(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xr={DEG2RAD:er,RAD2DEG:Ss,generateUUID:Ki,clamp:jt,euclideanModulo:Nc,mapLinear:If,inverseLerp:Lf,lerp:nr,damp:Df,pingpong:Ff,smoothstep:Nf,smootherstep:Uf,randInt:Bf,randFloat:Of,randFloatSpread:kf,seededRandom:zf,degToRad:Gf,radToDeg:Hf,isPowerOfTwo:Vf,ceilPowerOfTwo:Wf,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:$f,normalize:an,denormalize:_s},Gc=class Gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;var dt=Gc,_n=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*y;p<0&&(u=-u,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),E=Math.sin(M);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+y*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hc=class Hc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cl.copy(this).projectOnVector(t),this.sub(Cl)}reflect(t){return this.sub(Cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hc.prototype.isVector3=!0;var P=Hc,Cl=new P,Oh=new _n,Vc=class Vc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],p=s[3],m=s[6],M=s[1],E=s[4],_=s[7],S=s[2],w=s[5],A=s[8];return r[0]=a*y+o*M+l*S,r[3]=a*p+o*E+l*w,r[6]=a*m+o*_+l*A,r[1]=c*y+h*M+d*S,r[4]=c*p+h*E+d*w,r[7]=c*m+h*_+d*A,r[2]=u*y+f*M+g*S,r[5]=u*p+f*E+g*w,r[8]=u*m+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rl.makeScale(t,e)),this}rotate(t){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rl.makeRotation(-t)),this}translate(t,e){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Vc.prototype.isMatrix3=!0;var Yt=Vc,Rl=new Yt,kh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){let n={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ge&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ar]:{primaries:t,whitePoint:i,transfer:or,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:kh,fromXYZ:zh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),n}var ae=qf();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ss,Ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ss===void 0&&(ss=lr("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ss}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ii(e[i]/255)*255):e[i]=ii(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yf=0,bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pl(s[a].image)):r.push(Pl(s[a]))}else r=Pl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ba.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Zf=0,Il=new P,on=class n extends Ln{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Hn,s=Hn,r=Ze,a=Pi,o=En,l=un,c=n.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Ki(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fa:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fa:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=wc;on.DEFAULT_ANISOTROPY=1;var Wc=class Wc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,_=(f+1)/2,S=(m+1)/2,w=(h+u)/4,A=(d+y)/4,x=(g+p)/4;return E>_&&E>S?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=A/i):_>S?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=w/s,r=x/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=A/r,s=x/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wc.prototype.isVector4=!0;var Ie=Wc,Oa=class extends Ln{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new on(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Oa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},cr=class extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var fo=class fo{constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,p)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jf,t,Kf)}lookAt(t,e,i){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),fi.crossVectors(i,pn),fi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),fi.crossVectors(i,pn)),fi.normalize(),na.crossVectors(pn,fi),s[0]=fi.x,s[4]=na.x,s[8]=pn.x,s[1]=fi.y,s[5]=na.y,s[9]=pn.y,s[2]=fi.z,s[6]=na.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],p=i[10],m=i[14],M=i[3],E=i[7],_=i[11],S=i[15],w=s[0],A=s[4],x=s[8],T=s[12],R=s[1],D=s[5],U=s[9],k=s[13],L=s[2],O=s[6],q=s[10],Y=s[14],ct=s[3],Z=s[7],it=s[11],at=s[15];return r[0]=a*w+o*R+l*L+c*ct,r[4]=a*A+o*D+l*O+c*Z,r[8]=a*x+o*U+l*q+c*it,r[12]=a*T+o*k+l*Y+c*at,r[1]=h*w+d*R+u*L+f*ct,r[5]=h*A+d*D+u*O+f*Z,r[9]=h*x+d*U+u*q+f*it,r[13]=h*T+d*k+u*Y+f*at,r[2]=g*w+y*R+p*L+m*ct,r[6]=g*A+y*D+p*O+m*Z,r[10]=g*x+y*U+p*q+m*it,r[14]=g*T+y*k+p*Y+m*at,r[3]=M*w+E*R+_*L+S*ct,r[7]=M*A+E*D+_*O+S*Z,r[11]=M*x+E*U+_*q+S*it,r[15]=M*T+E*k+_*Y+S*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15],M=l*f-c*u,E=o*f-c*d,_=o*u-l*d,S=a*f-c*h,w=a*u-l*h,A=a*d-o*h;return e*(y*M-p*E+m*_)-i*(g*M-p*S+m*w)+s*(g*E-y*S+m*A)-r*(g*_-y*w+p*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],M=e*o-i*a,E=e*l-s*a,_=e*c-r*a,S=i*l-s*o,w=i*c-r*o,A=s*c-r*l,x=h*y-d*g,T=h*p-u*g,R=h*m-f*g,D=d*p-u*y,U=d*m-f*y,k=u*m-f*p,L=M*k-E*U+_*D+S*R-w*T+A*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(o*k-l*U+c*D)*O,t[1]=(s*U-i*k-r*D)*O,t[2]=(y*A-p*w+m*S)*O,t[3]=(u*w-d*A-f*S)*O,t[4]=(l*R-a*k-c*T)*O,t[5]=(e*k-s*R+r*T)*O,t[6]=(p*_-g*A-m*E)*O,t[7]=(h*A-u*_+f*E)*O,t[8]=(a*U-o*R+c*x)*O,t[9]=(i*R-e*U-r*x)*O,t[10]=(g*w-y*_+m*M)*O,t[11]=(d*_-h*w-f*M)*O,t[12]=(o*T-a*D-l*x)*O,t[13]=(e*D-i*T+s*x)*O,t[14]=(y*E-g*S-p*M)*O,t[15]=(h*S-d*E+u*M)*O,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,p=a*d,m=o*d,M=l*c,E=l*h,_=l*d,S=i.x,w=i.y,A=i.z;return s[0]=(1-(y+m))*S,s[1]=(f+_)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(u+m))*w,s[6]=(p+M)*w,s[7]=0,s[8]=(g+E)*A,s[9]=(p-M)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),l=rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);let c=1/a,h=1/o,d=1/l;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=In,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===In)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===vs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=In,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===In)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===vs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};fo.prototype.isMatrix4=!0;var we=fo,rs=new P,Cn=new we,Jf=new P(0,0,0),Kf=new P(1,1,1),fi=new P,na=new P,pn=new P,Gh=new we,Hh=new _n,si=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jf=0,Vh=new P,as=new _n,jn=new we,ia=new P,Zs=new P,Qf=new P,tp=new _n,Wh=new P(1,0,0),Xh=new P(0,1,0),$h=new P(0,0,1),qh={type:"added"},ep={type:"removed"},os={type:"childadded",child:null},Ll={type:"childremoved",child:null},Je=class n extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new si,i=new _n,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new Yt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ia.copy(t):ia.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Zs,ia,this.up):jn.lookAt(ia,Zs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(jn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qh),os.child=t,this.dispatchEvent(os),os.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ep),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qh),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,Qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new P(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var le=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},np={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(np)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Dl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ee=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Nc(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Dl(a,r,t+1/3),this.g=Dl(a,r,t),this.b=Dl(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let i=Ku[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return ae.workingToColorSpace(en.copy(this),t),Math.round(jt(en.r*255,0,255))*65536+Math.round(jt(en.g*255,0,255))*256+Math.round(jt(en.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(en.copy(this),e);let i=en.r,s=en.g,r=en.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ye){ae.workingToColorSpace(en.copy(this),t);let e=en.r,i=en.g,s=en.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(sa);let i=nr(pi.h,sa.h,e),s=nr(pi.s,sa.s,e),r=nr(pi.l,sa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new ee;ee.NAMES=Ku;var hr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new P,Qn=new P,Fl=new P,ti=new P,ls=new P,cs=new P,Yh=new P,Nl=new P,Ul=new P,Bl=new P,Ol=new Ie,kl=new Ie,zl=new Ie,xi=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Rn.subVectors(s,e),Qn.subVectors(i,e),Fl.subVectors(t,e);let a=Rn.dot(Rn),o=Rn.dot(Qn),l=Rn.dot(Fl),c=Qn.dot(Qn),h=Qn.dot(Fl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ol.setScalar(0),kl.setScalar(0),zl.setScalar(0),Ol.fromBufferAttribute(t,e),kl.fromBufferAttribute(t,i),zl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ol,r.x),a.addScaledVector(kl,r.y),a.addScaledVector(zl,r.z),a}static isFrontFacing(t,e,i,s){return Rn.subVectors(i,e),Qn.subVectors(t,e),Rn.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ls.subVectors(s,i),cs.subVectors(r,i),Nl.subVectors(t,i);let l=ls.dot(Nl),c=cs.dot(Nl);if(l<=0&&c<=0)return e.copy(i);Ul.subVectors(t,s);let h=ls.dot(Ul),d=cs.dot(Ul);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ls,a);Bl.subVectors(t,r);let f=ls.dot(Bl),g=cs.dot(Bl);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(cs,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Yh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Yh,o);let m=1/(p+y+u);return a=y*m,o=u*m,e.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yi=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ra.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(t.matrixWorld),this.union(ra)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),aa.subVectors(this.max,Js),hs.subVectors(t.a,Js),us.subVectors(t.b,Js),ds.subVectors(t.c,Js),mi.subVectors(us,hs),gi.subVectors(ds,us),Oi.subVectors(hs,ds);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Oi.z,Oi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Oi.z,0,-Oi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Oi.y,Oi.x,0];return!Gl(e,hs,us,ds,aa)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,hs,us,ds,aa))?!1:(oa.crossVectors(mi,gi),e=[oa.x,oa.y,oa.z],Gl(e,hs,us,ds,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,ra=new yi,hs=new P,us=new P,ds=new P,mi=new P,gi=new P,Oi=new P,Js=new P,aa=new P,oa=new P,ki=new P;function Gl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ki.fromArray(n,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ne=new P,la=new dt,ip=0,bn=class extends Ln{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ip++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=$u,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_s(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=an(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var fr=class extends bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var he=class extends bn{constructor(t,e,i){super(new Float32Array(t),e,i)}},sp=new yi,Ks=new P,Hl=new P,Wi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):sp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ks,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Hl)),this.expandByPoint(Ks.copy(t.center).sub(Hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rp=0,Sn=new we,Vl=new Je,fs=new P,mn=new yi,js=new yi,Xe=new P,Be=class n extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rf(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return Vl.lookAt(t),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(mn.min,js.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,js.max),mn.expandByPoint(Xe)):(mn.expandByPoint(js.min),mn.expandByPoint(js.max))}mn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),Xe.add(fs)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new P,l[x]=new P;let c=new P,h=new P,d=new P,u=new dt,f=new dt,g=new dt,y=new P,p=new P;function m(x,T,R){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[x].add(y),o[T].add(y),o[R].add(y),l[x].add(p),l[T].add(p),l[R].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,T=M.length;x<T;++x){let R=M[x],D=R.start,U=R.count;for(let k=D,L=D+U;k<L;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let E=new P,_=new P,S=new P,w=new P;function A(x){S.fromBufferAttribute(s,x),w.copy(S);let T=o[x];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(w,T);let D=_.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,D)}for(let x=0,T=M.length;x<T;++x){let R=M[x],D=R.start,U=R.count;for(let k=D,L=D+U;k<L;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new bn(u,h,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wl=new P,ap=new P,op=new Yt,gn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Wl.subVectors(i,e).cross(ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||op.getNormalMatrix(t),s=this.coplanarPoint(Wl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},lp=0,ri=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Bs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new gn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new dt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ni=new P,Xl=new P,ca=new P,ha=new P,vi=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xl.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ca),o=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xl).addScaledVector(ca,u),f}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);let i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=i.x-a.x,M=i.y-a.y,E=i.z-a.z,_=Math.abs(l),S=Math.abs(c),w=Math.abs(h),A,x,T,R,D,U,k,L,O,q,Y,ct;if(_>=S&&_>=w?(T=l,U=d,O=g,ct=m,l>=0?(A=c,x=h,R=u,D=f,k=y,L=p,q=M,Y=E):(A=h,x=c,R=f,D=u,k=p,L=y,q=E,Y=M)):S>=w?(T=c,U=u,O=y,ct=M,c>=0?(A=h,x=l,R=f,D=d,k=p,L=g,q=E,Y=m):(A=l,x=h,R=d,D=f,k=g,L=p,q=m,Y=E)):(T=h,U=f,O=p,ct=E,h>=0?(A=l,x=c,R=d,D=u,k=g,L=y,q=m,Y=M):(A=c,x=l,R=u,D=d,k=y,L=g,q=M,Y=m)),T===0)return null;let Z=A/T,it=x/T,at=1/T,It=R-Z*U,Ct=D-it*U,oe=k-Z*O,te=L-it*O,re=q-Z*ct,tt=Y-it*ct,rt=re*te-tt*oe,W=It*tt-Ct*re,J=oe*Ct-te*It;if(s){if(rt<0||W<0||J<0)return null}else if((rt<0||W<0||J<0)&&(rt>0||W>0||J>0))return null;let nt=rt+W+J;if(nt===0)return null;let mt=at*(rt*U+W*O+J*ct);return(nt>0?mt<0:mt>0)?null:this.at(mt/nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mi=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zh=new we,zi=new vi,ua=new Wi,Jh=new P,da=new P,fa=new P,pa=new P,$l=new P,ma=new P,Kh=new P,ga=new P,Oe=class extends Je{constructor(t=new Be,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&($l.fromBufferAttribute(d,t),a?ma.addScaledVector($l,h):ma.addScaledVector($l.sub(e),h))}e.add(ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(ua.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ua,Jh)===null||zi.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&(Zh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Zh),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,S=E;_<S;_+=3){let w=o.getX(_),A=o.getX(_+1),x=o.getX(_+2);s=_a(this,m,t,i,c,h,d,w,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let M=o.getX(p),E=o.getX(p+1),_=o.getX(p+2);s=_a(this,a,t,i,c,h,d,M,E,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,S=E;_<S;_+=3){let w=_,A=_+1,x=_+2;s=_a(this,m,t,i,c,h,d,w,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let M=p,E=p+1,_=p+2;s=_a(this,a,t,i,c,h,d,M,E,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function cp(n,t,e,i,s,r,a,o){let l;if(t.side===ln?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ci,o),l===null)return null;ga.copy(o),ga.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:n}}function _a(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,da),n.getVertexPosition(l,fa),n.getVertexPosition(c,pa);let h=cp(n,t,e,i,da,fa,pa,Kh);if(h){let d=new P;xi.getBarycoord(Kh,da,fa,pa,d),s&&(h.uv=xi.getInterpolatedAttribute(s,o,l,c,d,new dt)),r&&(h.uv1=xi.getInterpolatedAttribute(r,o,l,c,d,new dt)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};xi.getNormal(da,fa,pa,u.normal),h.face=u,h.barycoord=d}return h}var za=class extends on{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ue,h=Ue,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=new Wi,hp=new dt(.5,.5),xa=new P,Ts=class{constructor(t=new gn,e=new gn,i=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=In,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],M=r[12],E=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,m-g,S-M).normalize(),s[1].setComponents(c+a,f+h,m+g,S+M).normalize(),s[2].setComponents(c+o,f+d,m+y,S+E).normalize(),s[3].setComponents(c-o,f-d,m-y,S-E).normalize(),i)s[4].setComponents(l,u,p,_).normalize(),s[5].setComponents(c-l,f-u,m-p,S-_).normalize();else if(s[4].setComponents(c-l,f-u,m-p,S-_).normalize(),e===In)s[5].setComponents(c+l,f+u,m+p,S+_).normalize();else if(e===vs)s[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=hp.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(xa.x=s.normal.x>0?t.max.x:t.min.x,xa.y=s.normal.y>0?t.max.y:t.min.y,xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ga=new P,Ha=new P,jh=new we,Qs=new vi,ya=new Wi,ql=new P,Qh=new P,pr=class extends Je{constructor(t=new Be,e=new As){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ga.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ga.distanceTo(Ha);t.setAttribute("lineDistance",new he(i,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;jh.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(jh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){let m=h.getX(y),M=h.getX(y+1),E=va(this,t,Qs,l,m,M,y);E&&e.push(E)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(f),m=va(this,t,Qs,l,y,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,p=g-1;y<p;y+=c){let m=va(this,t,Qs,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=va(this,t,Qs,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function va(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),Ha.fromBufferAttribute(o,r),e.distanceSqToSegment(Ga,Ha,ql,Qh)>i)return;ql.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ql);if(!(c<t.near||c>t.far))return{distance:c,point:Qh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var mr=class extends on{constructor(t=[],e=Ri,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xi=class extends on{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends on{constructor(t,e,i=Fn,s,r,a,o=Ue,l=Ue,c,h=Vn,d=1){if(h!==Vn&&h!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Va=class extends Si{constructor(t,e=Fn,i=Ri,s,r,a=Ue,o=Ue,l,c=Vn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gr=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},se=class n extends Be{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function g(y,p,m,M,E,_,S,w,A,x,T){let R=_/A,D=S/x,U=_/2,k=S/2,L=w/2,O=A+1,q=x+1,Y=0,ct=0,Z=new P;for(let it=0;it<q;it++){let at=it*D-k;for(let It=0;It<O;It++){let Ct=It*R-U;Z[y]=Ct*M,Z[p]=at*E,Z[m]=L,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[p]=0,Z[m]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(It/A),d.push(1-it/x),Y+=1}}for(let it=0;it<x;it++)for(let at=0;at<A;at++){let It=u+at+O*it,Ct=u+at+O*(it+1),oe=u+(at+1)+O*(it+1),te=u+(at+1)+O*it;l.push(It,Ct,te),l.push(Ct,oe,te),ct+=6}o.addGroup(f,ct,T),f+=ct,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Cs=class n extends Be{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new dt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ue=class n extends Be{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],p=i/2,m=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(f,2));function M(){let _=new P,S=new P,w=0,A=(e-t)/i;for(let x=0;x<=r;x++){let T=[],R=x/r,D=R*(e-t)+t;for(let U=0;U<=s;U++){let k=U/s,L=k*l+o,O=Math.sin(L),q=Math.cos(L);S.x=D*O,S.y=-R*i+p,S.z=D*q,d.push(S.x,S.y,S.z),_.set(O,A,q).normalize(),u.push(_.x,_.y,_.z),f.push(k,1-R),T.push(g++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let R=y[T][x],D=y[T+1][x],U=y[T+1][x+1],k=y[T][x+1];(t>0||T!==0)&&(h.push(R,D,k),w+=3),(e>0||T!==r-1)&&(h.push(D,U,k),w+=3)}c.addGroup(m,w,0),m+=w}function E(_){let S=g,w=new dt,A=new P,x=0,T=_===!0?t:e,R=_===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),g++;let D=g;for(let U=0;U<=s;U++){let L=U/s*l+o,O=Math.cos(L),q=Math.sin(L);A.x=T*q,A.y=p*R,A.z=T*O,d.push(A.x,A.y,A.z),u.push(0,R,0),w.x=O*.5+.5,w.y=q*.5*R+.5,f.push(w.x,w.y),g++}for(let U=0;U<s;U++){let k=S+U,L=D+U;_===!0?h.push(L,L+1,k):h.push(L+1,L,k),x+=3}c.addGroup(m,x,_===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wn=class n extends ue{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Rs=class n extends Be{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let E=new P,_=new P,S=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],E),f(e[w+1],_),f(e[w+2],S),l(E,_,S,M)}function l(M,E,_,S){let w=S+1,A=[];for(let x=0;x<=w;x++){A[x]=[];let T=M.clone().lerp(_,x/w),R=E.clone().lerp(_,x/w),D=w-x;for(let U=0;U<=D;U++)U===0&&x===w?A[x][U]=T:A[x][U]=T.clone().lerp(R,U/D)}for(let x=0;x<w;x++)for(let T=0;T<2*(w-x)-1;T++){let R=Math.floor(T/2);T%2===0?(u(A[x][R+1]),u(A[x+1][R]),u(A[x][R])):(u(A[x][R+1]),u(A[x+1][R+1]),u(A[x+1][R]))}}function c(M){let E=new P;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(M),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){let M=new P;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let _=p(M)/2/Math.PI+.5,S=m(M)/Math.PI+.5;a.push(_,1-S)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let E=a[M+0],_=a[M+2],S=a[M+4],w=Math.max(E,_,S),A=Math.min(E,_,S);w>.9&&A<.1&&(E<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,E){let _=M*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function g(){let M=new P,E=new P,_=new P,S=new P,w=new dt,A=new dt,x=new dt;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),w.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),S.copy(M).add(E).add(_).divideScalar(3);let D=p(S);y(w,R+0,M,D),y(A,R+2,E,D),y(x,R+4,_,D)}}function y(M,E,_,S){S<0&&M.x===1&&(a[E]=M.x-1),_.x===0&&_.z===0&&(a[E]=S/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},_r=class n extends Rs{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new dt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new we;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ps=class extends xn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new dt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wa=class extends Ps{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Uc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var tu=new P,eu=new P,Yl=new Uc,Zl=new Uc,Jl=new Uc,Xa=class extends xn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(eu.subVectors(s[0],s[1]).add(s[0]),c=eu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(tu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=tu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Yl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,p),Zl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,p),Jl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Zl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Jl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Yl.calc(l),Zl.calc(l),Jl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function up(n,t){let e=1-n;return e*e*t}function dp(n,t){return 2*(1-n)*n*t}function fp(n,t){return n*n*t}function ir(n,t,e,i){return up(n,t)+dp(n,e)+fp(n,i)}function pp(n,t){let e=1-n;return e*e*e*t}function mp(n,t){let e=1-n;return 3*e*e*n*t}function gp(n,t){return 3*(1-n)*n*n*t}function _p(n,t){return n*n*n*t}function sr(n,t,e,i,s){return pp(n,t)+mp(n,e)+gp(n,i)+_p(n,s)}var xr=class extends xn{constructor(t=new dt,e=new dt,i=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new dt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$a=class extends xn{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y),sr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yr=class extends xn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends xn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vr=class extends xn{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends xn{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y),ir(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mr=class extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(nu(o,l.x,c.x,h.x,d.x),nu(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},ic=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:Xa,CubicBezierCurve:xr,CubicBezierCurve3:$a,EllipseCurve:Ps,LineCurve:yr,LineCurve3:qa,QuadraticBezierCurve:vr,QuadraticBezierCurve3:Ya,SplineCurve:Mr}),Za=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ic[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new ic[s.type]().fromJSON(s))}return this}},Sr=class extends Za{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new yr(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new vr(this.currentPoint.clone(),new dt(t,e),new dt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new xr(this.currentPoint.clone(),new dt(t,e),new dt(i,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Mr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Ps(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Is=class extends Sr{constructor(t){super(t),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Sr().fromJSON(s))}return this}};function xp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=ju(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=bp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return br(r,a,e,o,l,c,0),a}function ju(n,t,e,i,s){let r;if(s===Fp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=iu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=iu(a/i|0,n[a],n[a+1],r);return r&&Ls(r,r.next)&&(wr(r),r=r.next),r}function $i(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ls(e,e.next)||Le(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function br(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Cp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?vp(n,i,s,r):yp(n)){t.push(l.i,n.i,c.i),wr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Mp($i(n),t),br(n,t,e,i,s,r,2)):a===2&&Sp(n,t,e,i,s,r):br($i(n),t,e,i,s,r,1);break}}}function yp(n){let t=n.prev,e=n,i=n.next;if(Le(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&tr(s,o,r,l,a,c,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Le(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),p=Math.max(h,d,u),m=sc(f,g,t,e,i),M=sc(y,p,t,e,i),E=n.prevZ,_=n.nextZ;for(;E&&E.z>=m&&_&&_.z<=M;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&tr(o,h,l,d,c,u,E.x,E.y)&&Le(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&tr(o,h,l,d,c,u,_.x,_.y)&&Le(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&tr(o,h,l,d,c,u,E.x,E.y)&&Le(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&tr(o,h,l,d,c,u,_.x,_.y)&&Le(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Mp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Ls(i,s)&&td(i,e,e.next,s)&&Er(i,s)&&Er(s,i)&&(t.push(i.i,e.i,s.i),wr(e),wr(e.next),e=n=s),e=e.next}while(e!==n);return $i(e)}function Sp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ip(a,o)){let l=ed(a,o);a=$i(a,a.next),l=$i(l,l.next),br(a,t,e,i,s,r,0),br(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function bp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=ju(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Pp(c))}s.sort(Ep);for(let r=0;r<s.length;r++)e=wp(s[r],e);return e}function Ep(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function wp(n,t){let e=Tp(n,t);if(!e)return t;let i=ed(e,n);return $i(i,i.next),$i(e,e.next)}function Tp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Ls(n,e))return e;do{if(Ls(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Qu(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Er(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Ap(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Ap(n,t){return Le(n.prev,n,t.prev)<0&&Le(t.next,n,n.next)<0}function Cp(n,t,e,i){let s=n;do s.z===0&&(s.z=sc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Rp(s)}function Rp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function sc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Pp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Qu(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function tr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Qu(n,t,e,i,s,r,a,o)}function Ip(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Lp(n,t)&&(Er(n,t)&&Er(t,n)&&Dp(n,t)&&(Le(n.prev,n,t.prev)||Le(n,t.prev,t))||Ls(n,t)&&Le(n.prev,n,n.next)>0&&Le(t.prev,t,t.next)>0)}function Le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ls(n,t){return n.x===t.x&&n.y===t.y}function td(n,t,e,i){let s=Sa(Le(n,t,e)),r=Sa(Le(n,t,i)),a=Sa(Le(e,i,n)),o=Sa(Le(e,i,t));return!!(s!==r&&a!==o||s===0&&Ma(n,e,t)||r===0&&Ma(n,i,t)||a===0&&Ma(e,n,i)||o===0&&Ma(e,t,i))}function Ma(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Sa(n){return n>0?1:n<0?-1:0}function Lp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Er(n,t){return Le(n.prev,n,n.next)<0?Le(n,t,n.next)>=0&&Le(n,n.prev,t)>=0:Le(n,t,n.prev)<0||Le(n,n.next,t)<0}function Dp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ed(n,t){let e=rc(n.i,n.x,n.y),i=rc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function iu(n,t,e,i){let s=rc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var ac=class{static triangulate(t,e,i=2){return xp(t,e,i)}},Hi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];su(t),ru(i,t);let a=t.length;e.forEach(su);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,ru(i,e[l]);let o=ac.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function su(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ru(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Tr=class n extends Be{constructor(t=new Is([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Np,E,_=!1,S,w,A,x;if(m){E=m.getSpacedPoints(h),_=!0,u=!1;let X=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,X),w=new P,A=new P,x=new P}u||(p=0,f=0,g=0,y=0);let T=o.extractPoints(c),R=T.shape,D=T.holes;if(!Hi.isClockWise(R)){R=R.reverse();for(let X=0,j=D.length;X<j;X++){let lt=D[X];Hi.isClockWise(lt)&&(D[X]=lt.reverse())}}function k(X){let lt=10000000000000001e-36,ht=X[0];for(let pt=1;pt<=X.length;pt++){let zt=pt%X.length,Gt=X[zt],$t=Gt.x-ht.x,Zt=Gt.y-ht.y,I=$t*$t+Zt*Zt,fe=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(ht.x),Math.abs(ht.y)),ne=lt*fe*fe;if(I<=ne){X.splice(zt,1),pt--;continue}ht=Gt}}k(R),D.forEach(k);let L=D.length,O=R;for(let X=0;X<L;X++){let j=D[X];R=R.concat(j)}function q(X,j,lt){return j||Xt("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(j,lt)}let Y=R.length;function ct(X,j,lt){let ht,pt,zt,Gt=X.x-j.x,$t=X.y-j.y,Zt=lt.x-X.x,I=lt.y-X.y,fe=Gt*Gt+$t*$t,ne=Gt*I-$t*Zt;if(Math.abs(ne)>Number.EPSILON){let C=Math.sqrt(fe),v=Math.sqrt(Zt*Zt+I*I),B=j.x-$t/C,V=j.y+Gt/C,Q=lt.x-I/v,gt=lt.y+Zt/v,xt=((Q-B)*I-(gt-V)*Zt)/(Gt*I-$t*Zt);ht=B+Gt*xt-X.x,pt=V+$t*xt-X.y;let et=ht*ht+pt*pt;if(et<=2)return new dt(ht,pt);zt=Math.sqrt(et/2)}else{let C=!1;Gt>Number.EPSILON?Zt>Number.EPSILON&&(C=!0):Gt<-Number.EPSILON?Zt<-Number.EPSILON&&(C=!0):Math.sign($t)===Math.sign(I)&&(C=!0),C?(ht=-$t,pt=Gt,zt=Math.sqrt(fe)):(ht=Gt,pt=$t,zt=Math.sqrt(fe/2))}return new dt(ht/zt,pt/zt)}let Z=[];for(let X=0,j=O.length,lt=j-1,ht=X+1;X<j;X++,lt++,ht++)lt===j&&(lt=0),ht===j&&(ht=0),Z[X]=ct(O[X],O[lt],O[ht]);let it=[],at,It=Z.concat();for(let X=0,j=L;X<j;X++){let lt=D[X];at=[];for(let ht=0,pt=lt.length,zt=pt-1,Gt=ht+1;ht<pt;ht++,zt++,Gt++)zt===pt&&(zt=0),Gt===pt&&(Gt=0),at[ht]=ct(lt[ht],lt[zt],lt[Gt]);it.push(at),It=It.concat(at)}let Ct;if(p===0)Ct=Hi.triangulateShape(O,D);else{let X=[],j=[];for(let lt=0;lt<p;lt++){let ht=lt/p,pt=f*Math.cos(ht*Math.PI/2),zt=g*Math.sin(ht*Math.PI/2)+y;for(let Gt=0,$t=O.length;Gt<$t;Gt++){let Zt=q(O[Gt],Z[Gt],zt);W(Zt.x,Zt.y,-pt),ht===0&&X.push(Zt)}for(let Gt=0,$t=L;Gt<$t;Gt++){let Zt=D[Gt];at=it[Gt];let I=[];for(let fe=0,ne=Zt.length;fe<ne;fe++){let C=q(Zt[fe],at[fe],zt);W(C.x,C.y,-pt),ht===0&&I.push(C)}ht===0&&j.push(I)}}Ct=Hi.triangulateShape(X,j)}let oe=Ct.length,te=g+y;for(let X=0;X<Y;X++){let j=u?q(R[X],It[X],te):R[X];_?(A.copy(S.normals[0]).multiplyScalar(j.x),w.copy(S.binormals[0]).multiplyScalar(j.y),x.copy(E[0]).add(A).add(w),W(x.x,x.y,x.z)):W(j.x,j.y,0)}for(let X=1;X<=h;X++)for(let j=0;j<Y;j++){let lt=u?q(R[j],It[j],te):R[j];_?(A.copy(S.normals[X]).multiplyScalar(lt.x),w.copy(S.binormals[X]).multiplyScalar(lt.y),x.copy(E[X]).add(A).add(w),W(x.x,x.y,x.z)):W(lt.x,lt.y,d/h*X)}for(let X=p-1;X>=0;X--){let j=X/p,lt=f*Math.cos(j*Math.PI/2),ht=g*Math.sin(j*Math.PI/2)+y;for(let pt=0,zt=O.length;pt<zt;pt++){let Gt=q(O[pt],Z[pt],ht);W(Gt.x,Gt.y,d+lt)}for(let pt=0,zt=D.length;pt<zt;pt++){let Gt=D[pt];at=it[pt];for(let $t=0,Zt=Gt.length;$t<Zt;$t++){let I=q(Gt[$t],at[$t],ht);_?W(I.x,I.y+E[h-1].y,E[h-1].x+lt):W(I.x,I.y,d+lt)}}}re(),tt();function re(){let X=s.length/3;if(u){let j=0,lt=Y*j;for(let ht=0;ht<oe;ht++){let pt=Ct[ht];J(pt[2]+lt,pt[1]+lt,pt[0]+lt)}j=h+p*2,lt=Y*j;for(let ht=0;ht<oe;ht++){let pt=Ct[ht];J(pt[0]+lt,pt[1]+lt,pt[2]+lt)}}else{for(let j=0;j<oe;j++){let lt=Ct[j];J(lt[2],lt[1],lt[0])}for(let j=0;j<oe;j++){let lt=Ct[j];J(lt[0]+Y*h,lt[1]+Y*h,lt[2]+Y*h)}}i.addGroup(X,s.length/3-X,0)}function tt(){let X=s.length/3,j=0;rt(O,j),j+=O.length;for(let lt=0,ht=D.length;lt<ht;lt++){let pt=D[lt];rt(pt,j),j+=pt.length}i.addGroup(X,s.length/3-X,1)}function rt(X,j){let lt=X.length;for(;--lt>=0;){let ht=lt,pt=lt-1;pt<0&&(pt=X.length-1);for(let zt=0,Gt=h+p*2;zt<Gt;zt++){let $t=Y*zt,Zt=Y*(zt+1),I=j+ht+$t,fe=j+pt+$t,ne=j+pt+Zt,C=j+ht+Zt;nt(I,fe,ne,C)}}}function W(X,j,lt){l.push(X),l.push(j),l.push(lt)}function J(X,j,lt){mt(X),mt(j),mt(lt);let ht=s.length/3,pt=M.generateTopUV(i,s,ht-3,ht-2,ht-1);Ft(pt[0]),Ft(pt[1]),Ft(pt[2])}function nt(X,j,lt,ht){mt(X),mt(j),mt(ht),mt(j),mt(lt),mt(ht);let pt=s.length/3,zt=M.generateSideWallUV(i,s,pt-6,pt-3,pt-2,pt-1);Ft(zt[0]),Ft(zt[1]),Ft(zt[3]),Ft(zt[1]),Ft(zt[2]),Ft(zt[3])}function mt(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function Ft(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Up(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ic[s.type]().fromJSON(s)),new n(i,t.options)}},Np={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,a),new dt(o,l),new dt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new dt(a,1-l),new dt(c,1-d),new dt(u,1-g),new dt(y,1-m)]:[new dt(o,1-l),new dt(h,1-d),new dt(f,1-g),new dt(p,1-m)]}};function Up(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _e=class n extends Rs{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Ds=class n extends Rs{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},qi=class n extends Be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let M=m*u-a;for(let E=0;E<c;E++){let _=E*d-r;g.push(_,-M,0),y.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let E=M+c*m,_=M+c*(m+1),S=M+1+c*(m+1),w=M+1+c*m;f.push(E,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ar=class n extends Be{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new P,g=new dt;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let m=r+p/i*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let p=y*(i+1);for(let m=0;m<i;m++){let M=m+p,E=M,_=M+i+1,S=M+i+2,w=M+1;o.push(E,_,w),o.push(_,S,w)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Yi=class n extends Be{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let M=[],E=m/i,_=a+E*o,S=t*Math.cos(_),w=Math.sqrt(t*t-S*S),A=0;m===0&&a===0?A=.5/e:m===i&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let T=x/e,R=s+T*r;d.x=-w*Math.cos(R),d.y=S,d.z=w*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(T+A,1-E),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){let E=h[m][M+1],_=h[m][M],S=h[m+1][M],w=h[m+1][M+1];(m!==0||a>0)&&f.push(E,_,w),(m!==i-1||l<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fs=class n extends Be{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,g=new P;for(let y=0;y<=i;y++){let p=a+y/i*o;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,M=(s+1)*(y-1)+p-1,E=(s+1)*(y-1)+p,_=(s+1)*y+p;l.push(m,M,_),l.push(M,E,_)}this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ji(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(au(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(au(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function sn(n){let t={};for(let e=0;e<n.length;e++){let i=ji(n[e]);for(let s in i)t[s]=i[s]}return t}function au(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var nd={clone:ji,merge:sn},Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ee().setHex(s.value);break;case"v2":this.uniforms[i].value=new dt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new we().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ja=class extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ai=class extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ka=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ps(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Kl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var bi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends bi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ec:r=t,o=2*e-i;break;case nc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ec:a=t,l=2*i-e;break;case nc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-u*p+2*u*y-u*g,M=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-f)*p+(1.5+f)*y+.5*g,_=f*p-f*y;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+M*a[c+S]+E*a[l+S]+_*a[d+S];return r}},to=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},eo=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},no=class extends bi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=f*u+g*2,M=d[m],E=d[m+1],_=t*u+g*2,S=h[_],w=h[_+1],A=Gp(i,e,M,S,s);r[g]=id(A,y,E,w,p)}return r}};function id(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function zp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Gp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=id(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=zp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ps(e,this.TimeBufferType),this.values=ps(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ps(t.times,Array),values:ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Kl(t.settings)&&(i.settings={inTangents:ps(t.settings.inTangents,Array),outTangents:ps(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new no(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case wa:e=this.InterpolantFactoryMethodSmooth;break;case Ql:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return wa;case this.InterpolantFactoryMethodBezier:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Kl(this.settings)&&(ou(this.settings.inTangents,t),ou(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Pf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Kl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ou(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Ua;var Ei=class extends vn{constructor(t,e,i){super(t,e,i)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=rr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}};io.prototype.ValueTypeName="color";var so=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}};so.prototype.ValueTypeName="number";var ro=class extends bi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},Cr=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}};Cr.prototype.ValueTypeName="quaternion";Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends vn{constructor(t,e,i){super(t,e,i)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=rr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends vn{constructor(t,e,i,s){super(t,e,i,s)}};ao.prototype.ValueTypeName="vector";var oo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sd=new oo,lo=class{constructor(t){this.manager=t!==void 0?t:sd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Pr=class extends Rr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},jl=new we,lu=new P,cu=new P,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(lu),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(jl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ba=new P,Ea=new _n,Gn=new P,Ir=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ba,Ea,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ba,Ea,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_i=new P,hu=new dt,uu=new dt,nn=class extends Ir{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(er*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ns=class extends Ir{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},oc=class extends co{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lr=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new oc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ms=-90,gs=1,ho=class extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new nn(ms,gs,t,e);r.layers=this.layers,this.add(r);let a=new nn(ms,gs,t,e);a.layers=this.layers,this.add(a);let o=new nn(ms,gs,t,e);o.layers=this.layers,this.add(o);let l=new nn(ms,gs,t,e);l.layers=this.layers,this.add(l);let c=new nn(ms,gs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},uo=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Oc="\\[\\]\\.:\\/",Hp=new RegExp("["+Oc+"]","g"),kc="[^"+Oc+"]",Vp="[^"+Oc.replace("\\.","")+"]",Wp=/((?:WC+[\/:])*)/.source.replace("WC",kc),Xp=/(WCOD+)?/.source.replace("WCOD",Vp),$p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),qp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),Yp=new RegExp("^"+Wp+Xp+$p+qp+"$"),Zp=["material","materials","bones","map"],lc=class{constructor(t,e,i){let s=i||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){let e=Yp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Zp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=lc;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var By=new Float32Array(1);var du=new we,Dr=class{constructor(t,e,i=0,s=1/0){this.ray=new vi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(t,e=!0,i=[]){return cc(t,this,i,e),i.sort(fu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)cc(t[s],this,i,e);return i.sort(fu),i}};function fu(n,t){return n.distance-t.distance}function cc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)cc(r[a],t,e,!0)}}var Fr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ht("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Xn=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Xc=class Xc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Xc.prototype.isMatrix2=!0;var hc=Xc;var Nr=class extends Ln{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function zc(n,t,e,i){let s=Jp(i);switch(e){case Pc:return n*t;case Lc:return n*t/s.components*s.byteLength;case Mo:return n*t/s.components*s.byteLength;case Li:return n*t*2/s.components*s.byteLength;case So:return n*t*2/s.components*s.byteLength;case Ic:return n*t*3/s.components*s.byteLength;case En:return n*t*4/s.components*s.byteLength;case bo:return n*t*4/s.components*s.byteLength;case kr:case zr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Hr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wo:case Ao:return Math.max(n,16)*Math.max(t,8)/4;case Eo:case To:return Math.max(n,8)*Math.max(t,8)/2;case Co:case Ro:case Io:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Po:case Vr:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ko:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case zo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yo:case Zo:case Jo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ko:case jo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wr:case Qo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jp(n){switch(n){case un:case Tc:return{byteLength:1,components:1};case Os:case Ac:case Un:return{byteLength:2,components:1};case yo:case vo:return{byteLength:2,components:4};case Fn:case xo:case Nn:return{byteLength:4,components:1};case Cc:case Rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Td(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function jp(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
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
#endif`,em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
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
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Em=`vec3 transformedNormal = objectNormal;
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
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xm=`#ifdef USE_ENVMAP
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
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
#endif`,Km=`uniform sampler2D dfgLUT;
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
}`,jm=`
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
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,O0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,G0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rg=`#include <common>
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
}`,ag=`#if DEPTH_PACKING == 3200
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
}`,og=`#define DISTANCE
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
}`,lg=`#define DISTANCE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#define LAMBERT
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
}`,gg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,xg=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,Mg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,bg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,wg=`#define TOON
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
}`,Tg=`#define TOON
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
}`,Ag=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,Ig=`uniform float rotation;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Qp,alphahash_pars_fragment:tm,alphamap_fragment:em,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:am,batching_pars_vertex:om,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:hm,bsdfs:um,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:xm,color_pars_fragment:ym,color_pars_vertex:vm,color_vertex:Mm,common:Sm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Em,displacementmap_pars_vertex:wm,displacementmap_vertex:Tm,emissivemap_fragment:Am,emissivemap_pars_fragment:Cm,colorspace_fragment:Rm,colorspace_pars_fragment:Pm,envmap_fragment:Im,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Dm,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Xm,envmap_vertex:Nm,fog_vertex:Um,fog_pars_vertex:Bm,fog_fragment:Om,fog_pars_fragment:km,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Wm,lights_toon_fragment:$m,lights_toon_pars_fragment:qm,lights_phong_fragment:Ym,lights_phong_pars_fragment:Zm,lights_physical_fragment:Jm,lights_physical_pars_fragment:Km,lights_fragment_begin:jm,lights_fragment_maps:Qm,lights_fragment_end:t0,lightprobes_pars_fragment:e0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:r0,map_fragment:a0,map_pars_fragment:o0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:u0,morphinstance_vertex:d0,morphcolor_vertex:f0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:_0,normal_fragment_maps:x0,normal_pars_fragment:y0,normal_pars_vertex:v0,normal_vertex:M0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:E0,clearcoat_pars_fragment:w0,iridescence_pars_fragment:T0,opaque_fragment:A0,packing:C0,premultiplied_alpha_fragment:R0,project_vertex:P0,dithering_fragment:I0,dithering_pars_fragment:L0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:F0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:U0,shadowmap_vertex:B0,shadowmask_pars_fragment:O0,skinbase_vertex:k0,skinning_pars_vertex:z0,skinning_vertex:G0,skinnormal_vertex:H0,specularmap_fragment:V0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:$0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:Z0,uv_pars_vertex:J0,uv_vertex:K0,worldpos_vertex:j0,background_vert:Q0,background_frag:tg,backgroundCube_vert:eg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:sg,depth_vert:rg,depth_frag:ag,distance_vert:og,distance_frag:lg,equirect_vert:cg,equirect_frag:hg,linedashed_vert:ug,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:_g,meshmatcap_frag:xg,meshnormal_vert:yg,meshnormal_frag:vg,meshphong_vert:Mg,meshphong_frag:Sg,meshphysical_vert:bg,meshphysical_frag:Eg,meshtoon_vert:wg,meshtoon_frag:Tg,points_vert:Ag,points_frag:Cg,shadow_vert:Rg,shadow_frag:Pg,sprite_vert:Ig,sprite_frag:Lg},Et={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Zn={basic:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:sn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:sn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:sn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new ee(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:sn([Et.points,Et.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:sn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:sn([Et.common,Et.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:sn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:sn([Et.sprite,Et.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:sn([Et.common,Et.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:sn([Et.lights,Et.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Zn.physical={uniforms:sn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var il={r:0,b:0,g:0},Dg=new we,Ad=new Yt;Ad.set(-1,0,0,0,1,0,0,0,1);function Fg(n,t,e,i,s,r){let a=new ee(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let _=M.backgroundBlurriness>0;E=t.get(E,_)}return E}function g(M){let E=!1,_=f(M);_===null?p(a,o):_&&_.isColor&&(p(_,1),E=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,E){let _=f(E);_&&(_.isCubeTexture||_.mapping===Br)?(c===void 0&&(c=new Oe(new se(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ji(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ad),c.material.toneMapped=ae.getTransfer(_.colorSpace)!==ge,(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Oe(new qi(2,2),new yn({name:"BackgroundMaterial",uniforms:ji(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ae.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,E){M.getRGB(il,Bc(n)),e.buffers.color.setClear(il.r,il.g,il.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:y,dispose:m}}function Ng(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(D,U,k,L,O){let q=!1,Y=d(D,L,k,U);r!==Y&&(r=Y,c(r.object)),q=f(D,L,k,O),q&&g(D,L,k,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(D,U,k,L),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function d(D,U,k,L){let O=L.wireframe===!0,q=i[U.id];q===void 0&&(q={},i[U.id]=q);let Y=D.isInstancedMesh===!0?D.id:0,ct=q[Y];ct===void 0&&(ct={},q[Y]=ct);let Z=ct[k.id];Z===void 0&&(Z={},ct[k.id]=Z);let it=Z[O];return it===void 0&&(it=u(l()),Z[O]=it),it}function u(D){let U=[],k=[],L=[];for(let O=0;O<e;O++)U[O]=0,k[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,U,k,L){let O=r.attributes,q=U.attributes,Y=0,ct=k.getAttributes();for(let Z in ct)if(ct[Z].location>=0){let at=O[Z],It=q[Z];if(It===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(It=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(It=D.instanceColor)),at===void 0||at.attribute!==It||It&&at.data!==It.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function g(D,U,k,L){let O={},q=U.attributes,Y=0,ct=k.getAttributes();for(let Z in ct)if(ct[Z].location>=0){let at=q[Z];at===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(at=D.instanceColor));let It={};It.attribute=at,at&&at.data&&(It.data=at.data),O[Z]=It,Y++}r.attributes=O,r.attributesNum=Y,r.index=L}function y(){let D=r.newAttributes;for(let U=0,k=D.length;U<k;U++)D[U]=0}function p(D){m(D,0)}function m(D,U){let k=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;k[D]=1,L[D]===0&&(n.enableVertexAttribArray(D),L[D]=1),O[D]!==U&&(n.vertexAttribDivisor(D,U),O[D]=U)}function M(){let D=r.newAttributes,U=r.enabledAttributes;for(let k=0,L=U.length;k<L;k++)U[k]!==D[k]&&(n.disableVertexAttribArray(k),U[k]=0)}function E(D,U,k,L,O,q,Y){Y===!0?n.vertexAttribIPointer(D,U,k,O,q):n.vertexAttribPointer(D,U,k,L,O,q)}function _(D,U,k,L){y();let O=L.attributes,q=k.getAttributes(),Y=U.defaultAttributeValues;for(let ct in q){let Z=q[ct];if(Z.location>=0){let it=O[ct];if(it===void 0&&(ct==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),ct==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),it!==void 0){let at=it.normalized,It=it.itemSize,Ct=t.get(it);if(Ct===void 0)continue;let oe=Ct.buffer,te=Ct.type,re=Ct.bytesPerElement,tt=te===n.INT||te===n.UNSIGNED_INT||it.gpuType===xo;if(it.isInterleavedBufferAttribute){let rt=it.data,W=rt.stride,J=it.offset;if(rt.isInstancedInterleavedBuffer){for(let nt=0;nt<Z.locationSize;nt++)m(Z.location+nt,rt.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let nt=0;nt<Z.locationSize;nt++)p(Z.location+nt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let nt=0;nt<Z.locationSize;nt++)E(Z.location+nt,It/Z.locationSize,te,at,W*re,(J+It/Z.locationSize*nt)*re,tt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<Z.locationSize;rt++)m(Z.location+rt,it.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<Z.locationSize;rt++)p(Z.location+rt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let rt=0;rt<Z.locationSize;rt++)E(Z.location+rt,It/Z.locationSize,te,at,It*re,It/Z.locationSize*rt*re,tt)}}else if(Y!==void 0){let at=Y[ct];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(Z.location,at);break;case 3:n.vertexAttrib3fv(Z.location,at);break;case 4:n.vertexAttrib4fv(Z.location,at);break;default:n.vertexAttrib1fv(Z.location,at)}}}}M()}function S(){T();for(let D in i){let U=i[D];for(let k in U){let L=U[k];for(let O in L){let q=L[O];for(let Y in q)h(q[Y].object),delete q[Y];delete L[O]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let U=i[D.id];for(let k in U){let L=U[k];for(let O in L){let q=L[O];for(let Y in q)h(q[Y].object),delete q[Y];delete L[O]}}delete i[D.id]}function A(D){for(let U in i){let k=i[U];for(let L in k){let O=k[L];if(O[D.id]===void 0)continue;let q=O[D.id];for(let Y in q)h(q[Y].object),delete q[Y];delete O[D.id]}}}function x(D){for(let U in i){let k=i[U],L=D.isInstancedMesh===!0?D.id:0,O=k[L];if(O!==void 0){for(let q in O){let Y=O[q];for(let ct in Y)h(Y[ct].object),delete Y[ct];delete O[q]}delete k[L],Object.keys(k).length===0&&delete i[U]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function Ug(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==En&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==un&&A!==Nn&&!x&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:_,maxSamples:S,samples:w}}function Og(n){let t=this,e=null,i=0,s=!1,r=!1,a=new gn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:i,E=M*4,_=m.clippingState||null;l.value=_,_=h(g,u,E,f);for(let S=0;S!==E;++S)_[S]=e[S];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,_=f;E!==y;++E,_+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Gs=4,kg=6,zg=20,Gg=256,$r=new Ns,rd=new ee,$c=null,qc=0,Yc=0,Zc=!1,Hg=new P,Qi=new P,rl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Hg}=r;$c=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($c,qc,Yc),this._renderer.xr.enabled=Zc,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$c=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Un,format:En,colorSpace:ar,depthBuffer:!1},s=ad(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vg(r)),this._blurMaterial=Xg(r,t,e),this._ggxMaterial=Wg(r,t,e)}return s}_compileMaterial(t){let e=new Oe(new Be,t);this._renderer.compile(e,$r)}_sceneToCubeUV(t,e,i,s,r){let l=new nn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(rd),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new se,new Mi({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,m=!0):(p.color.copy(rd),m=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let S=this._cubeSize;zs(s,_*S,E>2?S:0,S,S),d.setRenderTarget(s),m&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ri||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;zs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$r)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],p=3*y*(i>g-Gs?i-g+Gs:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,zs(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(o,$r),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,zs(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(o,$r)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Gs?s-this._lodMax+Gs:0),u=4*(this._cubeSize-h);zs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,$r)}};function Vg(n){let t=[],e=[],i=n,s=n-Gs+1+kg;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,E=m>2?0:-1,_=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(_,f*u*m);for(let S=0;S<u;S++){let w=h[S*2]*2-1,A=h[S*2+1]*2-1;m===0?Qi.set(1,A,w):m===1?Qi.set(-w,1,-A):m===2?Qi.set(-w,A,1):m===3?Qi.set(-1,A,-w):m===4?Qi.set(-w,-1,A):Qi.set(w,A,-1),Qi.toArray(y,(m*u+S)*f)}}let p=new Be;p.setAttribute("position",new bn(g,f)),p.setAttribute("outputDirection",new bn(y,f)),e.push(new Oe(p,null)),i>Gs&&i--}return{lodMeshes:e,sizeLods:t}}function ad(n,t,e){let i=new hn(n,t,e);return i.texture.mapping=Br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Wg(n,t,e){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Xg(n,t,e){return new yn({name:"SphericalGaussianBlur",defines:{SAMPLES:zg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function od(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ld(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var al=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new se(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:qn});r.uniforms.tEquirect.value=e;let a=new Oe(s,r),o=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Ze),new ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function $g(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===mo||f===go)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new al(g.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===mo||f===go,y=f===Ri||f===Ji;if(g||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new rl(n)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new rl(n)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===mo?u.mapping=Ri:f===go&&(u.mapping=Ji),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function qg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Vi("WebGLRenderer: "+i+" extension not supported."),s}}}function Yg(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let E=0,_=M.length;E<_;E+=3){let S=M[E+0],w=M[E+1],A=M[E+2];u.push(S,w,w,A,A,S)}}else{let M=g.array;y=g.version;for(let E=0,_=M.length/3-1;E<_;E+=3){let S=E+0,w=E+1,A=E+2;u.push(S,w,w,A,A,S)}}let p=new(g.count>=65535?fr:dr)(u,1);p.version=y;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Zg(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let p=0;p<f;p++)y+=u[p];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Jg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Kg(n,t,e){let i=new WeakMap,s=new Ie;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let _=o.attributes.position.count*E,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*S*4*d),A=new cr(w,_,S,d);A.type=Nn,A.needsUpdate=!0;let x=E*4;for(let R=0;R<d;R++){let D=p[R],U=m[R],k=M[R],L=_*S*4*R;for(let O=0;O<D.count;O++){let q=O*x;f===!0&&(s.fromBufferAttribute(D,O),w[L+q+0]=s.x,w[L+q+1]=s.y,w[L+q+2]=s.z,w[L+q+3]=0),g===!0&&(s.fromBufferAttribute(U,O),w[L+q+4]=s.x,w[L+q+5]=s.y,w[L+q+6]=s.z,w[L+q+7]=0),y===!0&&(s.fromBufferAttribute(k,O),w[L+q+8]=s.x,w[L+q+9]=s.y,w[L+q+10]=s.z,w[L+q+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new dt(_,S)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function jg(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Qg={[xc]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[Mc]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[Ec]:"NEUTRAL_TONE_MAPPING",[Sc]:"CUSTOM_TONE_MAPPING"};function t_(n,t,e,i,s,r){let a=new hn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Be;c.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new he([0,2,0,0,2,0],2));let h=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(c,h),u=new Ns(-1,1,1,-1,0,1),f=null,g=null,y=!1,p,m=null,M=[],E=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let w=0;w<M.length;w++){let A=M[w];A.setSize&&A.setSize(_,S)}},this.setEffects=function(_){M=_,E=M.length>0&&M[0].isRenderPass===!0;let S=a.width,w=a.height;M.length>0&&o===null&&(o=new hn(S,w,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new hn(S,w,{type:Un,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let x=M[A];x.setSize&&x.setSize(S,w)}},this.begin=function(_,S){if(y||_.toneMapping===Dn&&M.length===0)return!1;if(m=S,S!==null){let w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return E===!1&&_.setRenderTarget(a),p=_.toneMapping,_.toneMapping=Dn,!0},this.hasRenderPass=function(){return E},this.end=function(_,S){_.toneMapping=p,y=!0;let w=a,A=o;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(_,A,w,S),T.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},ae.getTransfer(f)===ge&&(h.defines.SRGB_TRANSFER="");let x=Qg[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(m),_.render(d,u),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cd=new on,jc=new Si(1,1),Rd=new cr,Pd=new ka,Id=new mr,cd=[],hd=[],ud=new Float32Array(16),dd=new Float32Array(9),fd=new Float32Array(4);function Vs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function cl(n,t){let e=hd[t];e===void 0&&(e=new Int32Array(t),hd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function e_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function i_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function s_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function r_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,i))return;fd.set(i),n.uniformMatrix2fv(this.addr,!1,fd),Ge(e,i)}}function a_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,i))return;dd.set(i),n.uniformMatrix3fv(this.addr,!1,dd),Ge(e,i)}}function o_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ze(e,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),Ge(e,i)}}function l_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function h_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function d_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function f_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function p_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function m_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function g_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jc.compareFunction=e.isReversedDepthBuffer()?nl:el,r=jc):r=Cd,e.setTexture2D(t||r,s)}function __(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pd,s)}function x_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Id,s)}function y_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Rd,s)}function v_(n){switch(n){case 5126:return e_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return a_;case 35676:return o_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return y_}}function M_(n,t){n.uniform1fv(this.addr,t)}function S_(n,t){let e=Vs(t,this.size,2);n.uniform2fv(this.addr,e)}function b_(n,t){let e=Vs(t,this.size,3);n.uniform3fv(this.addr,e)}function E_(n,t){let e=Vs(t,this.size,4);n.uniform4fv(this.addr,e)}function w_(n,t){let e=Vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function T_(n,t){let e=Vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function A_(n,t){let e=Vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function C_(n,t){n.uniform1iv(this.addr,t)}function R_(n,t){n.uniform2iv(this.addr,t)}function P_(n,t){n.uniform3iv(this.addr,t)}function I_(n,t){n.uniform4iv(this.addr,t)}function L_(n,t){n.uniform1uiv(this.addr,t)}function D_(n,t){n.uniform2uiv(this.addr,t)}function F_(n,t){n.uniform3uiv(this.addr,t)}function N_(n,t){n.uniform4uiv(this.addr,t)}function U_(n,t,e){let i=this.cache,s=t.length,r=cl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=jc:a=Cd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function B_(n,t,e){let i=this.cache,s=t.length,r=cl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Pd,r[a])}function O_(n,t,e){let i=this.cache,s=t.length,r=cl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Id,r[a])}function k_(n,t,e){let i=this.cache,s=t.length,r=cl(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Rd,r[a])}function z_(n){switch(n){case 5126:return M_;case 35664:return S_;case 35665:return b_;case 35666:return E_;case 35674:return w_;case 35675:return T_;case 35676:return A_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return L_;case 36294:return D_;case 36295:return F_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return k_}}var Qc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=v_(e.type)}},th=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=z_(e.type)}},eh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function pd(n,t){n.seq.push(t),n.map[t.id]=t}function G_(n,t,e){let i=n.name,s=i.length;for(Jc.lastIndex=0;;){let r=Jc.exec(i),a=Jc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pd(e,c===void 0?new Qc(o,n,t):new th(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new eh(o),pd(e,d)),e=d}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);G_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function md(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var H_=37297,V_=0;function W_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var gd=new Yt;function X_(n){ae._getMatrix(gd,ae.workingColorSpace,n);let t=`mat3( ${gd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case or:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function _d(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+W_(n.getShaderSource(t),o)}else return r}function $_(n,t){let e=X_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var q_={[xc]:"Linear",[yc]:"Reinhard",[vc]:"Cineon",[Mc]:"ACESFilmic",[bc]:"AgX",[Ec]:"Neutral",[Sc]:"Custom"};function Y_(n,t){let e=q_[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sl=new P;function Z_(){ae.getLuminanceCoefficients(sl);let n=sl.x.toFixed(4),t=sl.y.toFixed(4),e=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function K_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function j_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Yr(n){return n!==""}function xd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(n){return n.replace(Q_,ex)}var tx=new Map;function ex(n,t){let e=Qt[t];if(e===void 0){let i=tx.get(t);if(i!==void 0)e=Qt[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return nh(e)}var nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(nx,ix)}function ix(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var sx={[Ur]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function rx(n){return sx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ax={[Ri]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE_UV"};function ox(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ax[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var lx={[Ji]:"ENVMAP_MODE_REFRACTION"};function cx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hx={[_c]:"ENVMAP_BLENDING_MULTIPLY",[Fu]:"ENVMAP_BLENDING_MIX",[Nu]:"ENVMAP_BLENDING_ADD"};function ux(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":hx[n.combine]||"ENVMAP_BLENDING_NONE"}function dx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function fx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=rx(e),c=ox(e),h=cx(e),d=ux(e),u=dx(e),f=J_(e),g=K_(r),y=s.createProgram(),p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(p=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,$_("linearToOutputTexel",e.outputColorSpace),Z_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),a=nh(a),a=xd(a,e),a=yd(a,e),o=nh(o),o=xd(o,e),o=yd(o,e),a=vd(a),o=vd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=M+p+a,_=M+m+o,S=md(s,s.VERTEX_SHADER,E),w=md(s,s.FRAGMENT_SHADER,_);s.attachShader(y,S),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(D){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(w)||"",O=U.trim(),q=k.trim(),Y=L.trim(),ct=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ct=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,S,w);else{let it=_d(s,S,"vertex"),at=_d(s,w,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+it+`
`+at)}else O!==""?Ht("WebGLProgram: Program Info Log:",O):(q===""||Y==="")&&(Z=!1);Z&&(D.diagnostics={runnable:ct,programLog:O,vertexShader:{log:q,prefix:p},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(S),s.deleteShader(w),x=new Hs(s,y),T=j_(s,y)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,H_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=w,this}var px=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new sh(t),e.set(t,i)),i}},sh=class{constructor(t){this.id=px++,this.code=t,this.usedTimes=0}};function mx(n){return n===Li||n===Vr||n===Wr}function gx(n,t,e,i,s,r){let a=new Es,o=new ih,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,T,R,D,U,k){let L=D.fog,O=U.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ct=t.get(x.envMap||q,Y),Z=ct&&ct.mapping===Br?ct.image.height:null,it=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let at=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,It=at!==void 0?at.length:0,Ct=0;O.morphAttributes.position!==void 0&&(Ct=1),O.morphAttributes.normal!==void 0&&(Ct=2),O.morphAttributes.color!==void 0&&(Ct=3);let oe,te,re,tt;if(it){let be=Zn[it];oe=be.vertexShader,te=be.fragmentShader}else{oe=x.vertexShader,te=x.fragmentShader;let be=o.getVertexShaderStage(x),pe=o.getFragmentShaderStage(x);o.update(x,be,pe),re=be.id,tt=pe.id}let rt=n.getRenderTarget(),W=n.state.buffers.depth.getReversed(),J=U.isInstancedMesh===!0,nt=U.isBatchedMesh===!0,mt=!!x.map,Ft=!!x.matcap,X=!!ct,j=!!x.aoMap,lt=!!x.lightMap,ht=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,zt=!!x.displacementMap,Gt=!!x.emissiveMap,$t=!!x.metalnessMap,Zt=!!x.roughnessMap,I=x.anisotropy>0,fe=x.clearcoat>0,ne=x.dispersion>0,C=x.retroreflectivity>0,v=x.iridescence>0,B=x.sheen>0,V=x.transmission>0,Q=I&&!!x.anisotropyMap,gt=fe&&!!x.clearcoatMap,xt=fe&&!!x.clearcoatNormalMap,et=fe&&!!x.clearcoatRoughnessMap,ot=v&&!!x.iridescenceMap,yt=v&&!!x.iridescenceThicknessMap,Bt=B&&!!x.sheenColorMap,bt=B&&!!x.sheenRoughnessMap,vt=!!x.specularMap,Ot=!!x.specularColorMap,Vt=!!x.specularIntensityMap,Jt=V&&!!x.transmissionMap,N=V&&!!x.thicknessMap,Mt=!!x.gradientMap,st=!!x.alphaMap,St=x.alphaTest>0,At=!!x.alphaHash,ut=!!x.extensions,kt=Dn;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(kt=n.toneMapping);let Nt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:te,defines:x.defines,customVertexShaderID:re,customFragmentShaderID:tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:nt,batchingColor:nt&&U._colorsTexture!==null,instancing:J,instancingColor:J&&U.instanceColor!==null,instancingMorph:J&&U.morphTexture!==null,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:mt,matcap:Ft,envMap:X,envMapMode:X&&ct.mapping,envMapCubeUVHeight:Z,aoMap:j,lightMap:lt,bumpMap:ht,normalMap:pt,displacementMap:zt,emissiveMap:Gt,normalMapObjectSpace:pt&&x.normalMapType===Ou,normalMapTangentSpace:pt&&x.normalMapType===tl,packedNormalMap:pt&&x.normalMapType===tl&&mx(x.normalMap.format),metalnessMap:$t,roughnessMap:Zt,anisotropy:I,anisotropyMap:Q,clearcoat:fe,clearcoatMap:gt,clearcoatNormalMap:xt,clearcoatRoughnessMap:et,dispersion:ne,retroreflection:C,iridescence:v,iridescenceMap:ot,iridescenceThicknessMap:yt,sheen:B,sheenColorMap:Bt,sheenRoughnessMap:bt,specularMap:vt,specularColorMap:Ot,specularIntensityMap:Vt,transmission:V,transmissionMap:Jt,thicknessMap:N,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===Bs&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:St,alphaHash:At,combine:x.combine,mapUv:mt&&g(x.map.channel),aoMapUv:j&&g(x.aoMap.channel),lightMapUv:lt&&g(x.lightMap.channel),bumpMapUv:ht&&g(x.bumpMap.channel),normalMapUv:pt&&g(x.normalMap.channel),displacementMapUv:zt&&g(x.displacementMap.channel),emissiveMapUv:Gt&&g(x.emissiveMap.channel),metalnessMapUv:$t&&g(x.metalnessMap.channel),roughnessMapUv:Zt&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:gt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(x.sheenRoughnessMap.channel),specularMapUv:vt&&g(x.specularMap.channel),specularColorMapUv:Ot&&g(x.specularColorMap.channel),specularIntensityMapUv:Vt&&g(x.specularIntensityMap.channel),transmissionMapUv:Jt&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:st&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(pt||I),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(mt||st),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:W,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Ct,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:kt,decodeVideoTexture:mt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===ge,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===ge,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===$n,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ut&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&x.extensions.multiDraw===!0||nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(T,x),M(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let T=f[x.type],R;if(T){let D=Zn[T];R=nd.clone(D.uniforms)}else R=x.uniforms;return R}function _(x,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new fx(n,T,x,s),c.push(R),h.set(T,R)),R}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:E,acquireProgram:_,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function _x(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function bd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,p,m){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},n[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function l(u,f,g,y,p,m,M){M.reversedDepth===!0&&(p=-p);let E=o(u,f,g,y,p,m);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,f,g,y,p,m){let M=o(u,f,g,y,p,m);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||xx),i.length>1&&i.sort(f||Sd),s.length>1&&s.sort(f||Sd)}function d(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function yx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new bd,n.set(i,[a])):s>=r.length?(a=new bd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function vx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new ee};break;case"SpotLight":e={position:new P,direction:new P,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function Mx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Sx=0;function bx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ex(n){let t=new vx,e=Mx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new we,a=new we;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,M=0,E=0,_=0,S=0,w=0,A=0,x=0,T=0,R=0;c.sort(bx);for(let U=0,k=c.length;U<k;U++){let L=c[U],O=L.color,q=L.intensity,Y=L.distance,ct=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Li?ct=L.shadow.map.texture:ct=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*q,d+=O.g*q,u+=O.b*q;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],q);R++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,at=e.get(L);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[g]=at,i.sunShadowMap[g]=ct;let It=it.getViewportCount();for(let Ct=0;Ct<It;Ct++)i.sunShadowMatrix[y+Ct]=it.getMatrix(Ct),i.sunShadowCascade[y+Ct]=it._cascadeData[Ct];y+=It,g++}i.sun[f]=Z,f++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,at=e.get(L);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,i.directionalShadow[p]=at,i.directionalShadowMap[p]=ct,i.directionalShadowMatrix[p]=L.shadow.matrix,S++}i.directional[p]=Z,p++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(O).multiplyScalar(q),Z.distance=Y,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[M]=Z;let it=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,it.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[M]=it.matrix,L.castShadow){let at=e.get(L);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,i.spotShadow[M]=at,i.spotShadowMap[M]=ct,A++}M++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(O).multiplyScalar(q),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=Z,E++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let it=L.shadow,at=e.get(L);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,at.shadowCameraNear=it.camera.near,at.shadowCameraFar=it.camera.far,i.pointShadow[m]=at,i.pointShadowMap[m]=ct,i.pointShadowMatrix[m]=L.shadow.matrix,w++}i.point[m]=Z,m++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(q),Z.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[_]=Z,_++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==A||D.numSpotMaps!==x||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=p,i.spot.length=M,i.rectArea.length=E,i.point.length=m,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=A,D.numSpotMaps=x,D.numLightProbes=R,i.version=Sx++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let _=c[M];if(_.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),d++}else if(_.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(_.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Ed(n){let t=new Ex(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function wx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ed(n),t.set(s,[o])):r>=a.length?(o=new Ed(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`,Cx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Rx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],wd=new we,qr=new P,Kc=new P;function Px(n,t,e){let i=new Ts,s=new dt,r=new dt,a=new Ie,o=new Ka,l=new ja,c={},h=e.maxTextureSize,d={[Ci]:ln,[ln]:Ci,[$n]:$n},u=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Tx,fragmentShader:Ax}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Oe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let m=this.type;this.render=function(w,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===po&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(qn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=m!==this.type;k&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=w.length;L<O;L++){let q=w[L],Y=q.shadow;if(Y===void 0){Ht("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ct=Y.getFrameExtents();s.multiply(ct),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,Y.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Z,Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Us){if(q.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new hn(s.x,s.y,{format:Li,type:Un,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Si(s.x,s.y,Nn),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=Vn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ue,Y.map.depthTexture.magFilter=Ue}else q.isPointLight?(Y.map=new al(s.x),Y.map.depthTexture=new Va(s.x,Fn)):(Y.map=new hn(s.x,s.y),Y.map.depthTexture=new Si(s.x,s.y,Fn)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=Vn,this.type===Ur?(Y.map.depthTexture.compareFunction=Z?nl:el,Y.map.depthTexture.minFilter=Ze,Y.map.depthTexture.magFilter=Ze):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ue,Y.map.depthTexture.magFilter=Ue);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let it=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,x);for(let at=0;at<it;at++){let It=Y.getCamera(at);if(q.isPointLight){let Ct=Y.camera,oe=Y.matrix,te=q.distance||Ct.far;te!==Ct.far&&(Ct.far=te,Ct.updateProjectionMatrix()),qr.setFromMatrixPosition(q.matrixWorld),Ct.position.copy(qr),Kc.copy(Ct.position),Kc.add(Cx[at]),Ct.up.copy(Rx[at]),Ct.lookAt(Kc),Ct.updateMatrixWorld(),oe.makeTranslation(-qr.x,-qr.y,-qr.z),wd.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(wd,Ct.coordinateSystem,Ct.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,at),n.clear();else{at===0&&(n.setRenderTarget(Y.map),n.clear());let Ct=Y.getViewport(at);a.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),U.viewport(a)}i=Y.getFrustum(at),_(A,x,It,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Us&&M(Y,x),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(T,R,D)};function M(w,A){let x=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new hn(s.x,s.y,{format:Li,type:Un}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,x,u,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,x,f,y,null)}function E(w,A,x,T){let R=null,D=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=x.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=R.uuid,k=A.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let O=L[k];O===void 0&&(O=R.clone(),L[k]=O,A.addEventListener("dispose",S)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Us?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=n.properties.get(R);U.light=x}return R}function _(w,A,x,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Us)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let k=t.update(w),L=w.material;if(Array.isArray(L)){let O=k.groups;for(let q=0,Y=O.length;q<Y;q++){let ct=O[q],Z=L[ct.materialIndex];if(Z&&Z.visible){let it=E(w,Z,T,R);w.onBeforeShadow(n,w,A,x,k,it,ct),n.renderBufferDirect(x,null,k,it,w,ct),w.onAfterShadow(n,w,A,x,k,it,ct)}}}else if(L.visible){let O=E(w,L,T,R);w.onBeforeShadow(n,w,A,x,k,O,null),n.renderBufferDirect(x,null,k,O,w,null),w.onAfterShadow(n,w,A,x,k,O,null)}}let U=w.children;for(let k=0,L=U.length;k<L;k++)_(U[k],A,x,T,R)}function S(w){w.target.removeEventListener("dispose",S);for(let x in c){let T=c[x],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Ix(n,t){function e(){let N=!1,Mt=new Ie,st=null,St=new Ie(0,0,0,0);return{setMask:function(At){st!==At&&!N&&(n.colorMask(At,At,At,At),st=At)},setLocked:function(At){N=At},setClear:function(At,ut,kt,Nt,be){be===!0&&(At*=Nt,ut*=Nt,kt*=Nt),Mt.set(At,ut,kt,Nt),St.equals(Mt)===!1&&(n.clearColor(At,ut,kt,Nt),St.copy(Mt))},reset:function(){N=!1,st=null,St.set(-1,0,0,0)}}}function i(){let N=!1,Mt=!1,st=null,St=null,At=null;return{setReversed:function(ut){if(Mt!==ut){let kt=t.get("EXT_clip_control");ut?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ut;let Nt=At;At=null,this.setClear(Nt)}},getReversed:function(){return Mt},setTest:function(ut){ut?rt(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(ut){st!==ut&&!N&&(n.depthMask(ut),st=ut)},setFunc:function(ut){if(Mt&&(ut=Ju[ut]),St!==ut){switch(ut){case Aa:n.depthFunc(n.NEVER);break;case Ca:n.depthFunc(n.ALWAYS);break;case Ra:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case Pa:n.depthFunc(n.EQUAL);break;case Ia:n.depthFunc(n.GEQUAL);break;case La:n.depthFunc(n.GREATER);break;case Da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=ut}},setLocked:function(ut){N=ut},setClear:function(ut){At!==ut&&(At=ut,Mt&&(ut=1-ut),n.clearDepth(ut))},reset:function(){N=!1,st=null,St=null,At=null,Mt=!1}}}function s(){let N=!1,Mt=null,st=null,St=null,At=null,ut=null,kt=null,Nt=null,be=null;return{setTest:function(pe){N||(pe?rt(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(pe){Mt!==pe&&!N&&(n.stencilMask(pe),Mt=pe)},setFunc:function(pe,An,kn){(st!==pe||St!==An||At!==kn)&&(n.stencilFunc(pe,An,kn),st=pe,St=An,At=kn)},setOp:function(pe,An,kn){(ut!==pe||kt!==An||Nt!==kn)&&(n.stencilOp(pe,An,kn),ut=pe,kt=An,Nt=kn)},setLocked:function(pe){N=pe},setClear:function(pe){be!==pe&&(n.clearStencil(pe),be=pe)},reset:function(){N=!1,Mt=null,st=null,St=null,At=null,ut=null,kt=null,Nt=null,be=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,p=!1,m=null,M=null,E=null,_=null,S=null,w=null,A=null,x=new ee(0,0,0),T=0,R=!1,D=null,U=null,k=null,L=null,O=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ct=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=ct>=1):Z.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=ct>=2);let it=null,at={},It=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),oe=new Ie().fromArray(It),te=new Ie().fromArray(Ct);function re(N,Mt,st,St){let At=new Uint8Array(4),ut=n.createTexture();n.bindTexture(N,ut),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<st;kt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(Mt+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return ut}let tt={};tt[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),tt[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),tt[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(n.DEPTH_TEST),a.setFunc(ys),ht(!1),pt(uc),rt(n.CULL_FACE),j(qn);function rt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function W(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function J(N,Mt){return u[N]!==Mt?(n.bindFramebuffer(N,Mt),u[N]=Mt,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Mt),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function nt(N,Mt){let st=g,St=!1;if(N){st=f.get(Mt),st===void 0&&(st=[],f.set(Mt,st));let At=N.textures;if(st.length!==At.length||st[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,kt=At.length;ut<kt;ut++)st[ut]=n.COLOR_ATTACHMENT0+ut;st.length=At.length,St=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,St=!0);St&&n.drawBuffers(st)}function mt(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let Ft={[Zi]:n.FUNC_ADD,[_u]:n.FUNC_SUBTRACT,[xu]:n.FUNC_REVERSE_SUBTRACT};Ft[yu]=n.MIN,Ft[vu]=n.MAX;let X={[Mu]:n.ZERO,[Su]:n.ONE,[bu]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[Ru]:n.SRC_ALPHA_SATURATE,[Au]:n.DST_COLOR,[wu]:n.DST_ALPHA,[Eu]:n.ONE_MINUS_SRC_COLOR,[gc]:n.ONE_MINUS_SRC_ALPHA,[Cu]:n.ONE_MINUS_DST_COLOR,[Tu]:n.ONE_MINUS_DST_ALPHA,[Pu]:n.CONSTANT_COLOR,[Iu]:n.ONE_MINUS_CONSTANT_COLOR,[Lu]:n.CONSTANT_ALPHA,[Du]:n.ONE_MINUS_CONSTANT_ALPHA};function j(N,Mt,st,St,At,ut,kt,Nt,be,pe){if(N===qn){p===!0&&(W(n.BLEND),p=!1);return}if(p===!1&&(rt(n.BLEND),p=!0),N!==gu){if(N!==m||pe!==R){if((M!==Zi||S!==Zi)&&(n.blendEquation(n.FUNC_ADD),M=Zi,S=Zi),pe)switch(N){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.ONE,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xt("WebGLState: Invalid blending: ",N);break}else switch(N){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fc:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",N);break}E=null,_=null,w=null,A=null,x.set(0,0,0),T=0,m=N,R=pe}return}At=At||Mt,ut=ut||st,kt=kt||St,(Mt!==M||At!==S)&&(n.blendEquationSeparate(Ft[Mt],Ft[At]),M=Mt,S=At),(st!==E||St!==_||ut!==w||kt!==A)&&(n.blendFuncSeparate(X[st],X[St],X[ut],X[kt]),E=st,_=St,w=ut,A=kt),(Nt.equals(x)===!1||be!==T)&&(n.blendColor(Nt.r,Nt.g,Nt.b,be),x.copy(Nt),T=be),m=N,R=!1}function lt(N,Mt){N.side===$n?W(n.CULL_FACE):rt(n.CULL_FACE);let st=N.side===ln;Mt&&(st=!st),ht(st),N.blending===Bs&&N.transparent===!1?j(qn):j(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let St=N.stencilWrite;o.setTest(St),St&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Gt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function pt(N){N!==pu?(rt(n.CULL_FACE),N!==U&&(N===uc?n.cullFace(n.BACK):N===mu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),U=N}function zt(N){N!==k&&(Y&&n.lineWidth(N),k=N)}function Gt(N,Mt,st){N?(rt(n.POLYGON_OFFSET_FILL),(L!==Mt||O!==st)&&(L=Mt,O=st,a.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,st))):W(n.POLYGON_OFFSET_FILL)}function $t(N){N?rt(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function Zt(N){N===void 0&&(N=n.TEXTURE0+q-1),it!==N&&(n.activeTexture(N),it=N)}function I(N,Mt,st){st===void 0&&(it===null?st=n.TEXTURE0+q-1:st=it);let St=at[st];St===void 0&&(St={type:void 0,texture:void 0},at[st]=St),(St.type!==N||St.texture!==Mt)&&(it!==st&&(n.activeTexture(st),it=st),n.bindTexture(N,Mt||tt[N]),St.type=N,St.texture=Mt)}function fe(){let N=at[it];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ne(){try{n.compressedTexImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function v(){try{n.texSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function B(){try{n.texSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function gt(){try{n.texStorage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function xt(){try{n.texStorage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function et(){try{n.texImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ot(){try{n.texImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function yt(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function Bt(N,Mt){d[N]!==Mt&&(n.pixelStorei(N,Mt),d[N]=Mt)}function bt(N){oe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function vt(N){te.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function Ot(N,Mt){let st=c.get(Mt);st===void 0&&(st=new WeakMap,c.set(Mt,st));let St=st.get(N);St===void 0&&(St=n.getUniformBlockIndex(Mt,N.name),st.set(N,St))}function Vt(N,Mt){let St=c.get(Mt).get(N);l.get(Mt)!==St&&(n.uniformBlockBinding(Mt,St,N.__bindingPointIndex),l.set(Mt,St))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,at={},u={},f=new WeakMap,g=[],y=null,p=!1,m=null,M=null,E=null,_=null,S=null,w=null,A=null,x=new ee(0,0,0),T=0,R=!1,D=null,U=null,k=null,L=null,O=null,oe.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:W,bindFramebuffer:J,drawBuffers:nt,useProgram:mt,setBlending:j,setMaterial:lt,setFlipSided:ht,setCullFace:pt,setLineWidth:zt,setPolygonOffset:Gt,setScissorTest:$t,activeTexture:Zt,bindTexture:I,unbindTexture:fe,compressedTexImage2D:ne,compressedTexImage3D:C,texImage2D:et,texImage3D:ot,pixelStorei:Bt,getParameter:yt,updateUBOMapping:Ot,uniformBlockBinding:Vt,texStorage2D:gt,texStorage3D:xt,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:Q,scissor:bt,viewport:vt,reset:Jt}}function Lx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,v){return g?new OffscreenCanvas(C,v):lr("canvas")}function p(C,v,B){let V=1,Q=ne(C);if((Q.width>B||Q.height>B)&&(V=B/Math.max(Q.width,Q.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let gt=Math.floor(V*Q.width),xt=Math.floor(V*Q.height);u===void 0&&(u=y(gt,xt));let et=v?y(gt,xt):u;return et.width=gt,et.height=xt,et.getContext("2d").drawImage(C,0,0,gt,xt),Ht("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+gt+"x"+xt+")."),et}else return"data"in C&&Ht("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,v,B,V,Q,gt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xt;V&&(xt=t.get("EXT_texture_norm16"),xt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=v;if(v===n.RED&&(B===n.FLOAT&&(et=n.R32F),B===n.HALF_FLOAT&&(et=n.R16F),B===n.UNSIGNED_BYTE&&(et=n.R8),B===n.UNSIGNED_SHORT&&xt&&(et=xt.R16_EXT),B===n.SHORT&&xt&&(et=xt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(et=n.R8UI),B===n.UNSIGNED_SHORT&&(et=n.R16UI),B===n.UNSIGNED_INT&&(et=n.R32UI),B===n.BYTE&&(et=n.R8I),B===n.SHORT&&(et=n.R16I),B===n.INT&&(et=n.R32I)),v===n.RG&&(B===n.FLOAT&&(et=n.RG32F),B===n.HALF_FLOAT&&(et=n.RG16F),B===n.UNSIGNED_BYTE&&(et=n.RG8),B===n.UNSIGNED_SHORT&&xt&&(et=xt.RG16_EXT),B===n.SHORT&&xt&&(et=xt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(et=n.RG8UI),B===n.UNSIGNED_SHORT&&(et=n.RG16UI),B===n.UNSIGNED_INT&&(et=n.RG32UI),B===n.BYTE&&(et=n.RG8I),B===n.SHORT&&(et=n.RG16I),B===n.INT&&(et=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(et=n.RGB8UI),B===n.UNSIGNED_SHORT&&(et=n.RGB16UI),B===n.UNSIGNED_INT&&(et=n.RGB32UI),B===n.BYTE&&(et=n.RGB8I),B===n.SHORT&&(et=n.RGB16I),B===n.INT&&(et=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),B===n.UNSIGNED_INT&&(et=n.RGBA32UI),B===n.BYTE&&(et=n.RGBA8I),B===n.SHORT&&(et=n.RGBA16I),B===n.INT&&(et=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_SHORT&&xt&&(et=xt.RGB16_EXT),B===n.SHORT&&xt&&(et=xt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),v===n.RGBA){let ot=gt?or:ae.getTransfer(Q);B===n.FLOAT&&(et=n.RGBA32F),B===n.HALF_FLOAT&&(et=n.RGBA16F),B===n.UNSIGNED_BYTE&&(et=ot===ge?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&xt&&(et=xt.RGBA16_EXT),B===n.SHORT&&xt&&(et=xt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(C,v){let B;return C?v===null||v===Fn||v===ks?B=n.DEPTH24_STENCIL8:v===Nn?B=n.DEPTH32F_STENCIL8:v===Os&&(B=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fn||v===ks?B=n.DEPTH_COMPONENT24:v===Nn?B=n.DEPTH_COMPONENT32F:v===Os&&(B=n.DEPTH_COMPONENT16),B}function w(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ue&&C.minFilter!==Ze?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),D(v)}function T(C){let v=i.get(C);if(v.__webglInit===void 0)return;let B=C.source,V=f.get(B);if(V){let Q=V[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(C),Object.keys(V).length===0&&f.delete(B)}i.remove(C)}function R(C){let v=i.get(C);n.deleteTexture(v.__webglTexture);let B=C.source,V=f.get(B);delete V[v.__cacheKey],a.memory.textures--}function D(C){let v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Q=0;Q<v.__webglFramebuffer[V].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[V][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=C.textures;for(let V=0,Q=B.length;V<Q;V++){let gt=i.get(B[V]);gt.__webglTexture&&(n.deleteTexture(gt.__webglTexture),a.memory.textures--),i.remove(B[V])}i.remove(C)}let U=0;function k(){U=0}function L(){return U}function O(C){U=C}function q(){let C=U;return C>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function Y(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function ct(C,v){let B=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let V=C.image;if(V===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{W(B,C,v);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function Z(C,v){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){W(B,C,v);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function it(C,v){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){W(B,C,v);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function at(C,v){let B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){J(B,C,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let It={[Fa]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[Na]:n.MIRRORED_REPEAT},Ct={[Ue]:n.NEAREST,[Uu]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},oe={[zu]:n.NEVER,[Xu]:n.ALWAYS,[Gu]:n.LESS,[el]:n.LEQUAL,[Hu]:n.EQUAL,[nl]:n.GEQUAL,[Vu]:n.GREATER,[Wu]:n.NOTEQUAL};function te(C,v){if(v.type===Nn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ze||v.magFilter===_o||v.magFilter===Or||v.magFilter===Pi||v.minFilter===Ze||v.minFilter===_o||v.minFilter===Or||v.minFilter===Pi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,It[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,It[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,It[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ct[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ct[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ue||v.minFilter!==Or&&v.minFilter!==Pi||v.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function re(C,v){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let V=v.source,Q=f.get(V);Q===void 0&&(Q={},f.set(V,Q));let gt=Y(v);if(gt!==C.__cacheKey){Q[gt]===void 0&&(Q[gt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[gt].usedTimes++;let xt=Q[C.__cacheKey];xt!==void 0&&(Q[C.__cacheKey].usedTimes--,xt.usedTimes===0&&R(v)),C.__cacheKey=gt,C.__webglTexture=Q[gt].texture}return B}function tt(C,v,B){return Math.floor(Math.floor(C/B)/v)}function rt(C,v,B,V){let gt=C.updateRanges;if(gt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,V,v.data);else{gt.sort((Bt,bt)=>Bt.start-bt.start);let xt=0;for(let Bt=1;Bt<gt.length;Bt++){let bt=gt[xt],vt=gt[Bt],Ot=bt.start+bt.count,Vt=tt(vt.start,v.width,4),Jt=tt(bt.start,v.width,4);vt.start<=Ot+1&&Vt===Jt&&tt(vt.start+vt.count-1,v.width,4)===Vt?bt.count=Math.max(bt.count,vt.start+vt.count-bt.start):(++xt,gt[xt]=vt)}gt.length=xt+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),ot=e.getParameter(n.UNPACK_SKIP_PIXELS),yt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Bt=0,bt=gt.length;Bt<bt;Bt++){let vt=gt[Bt],Ot=Math.floor(vt.start/4),Vt=Math.ceil(vt.count/4),Jt=Ot%v.width,N=Math.floor(Ot/v.width),Mt=Vt,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,Jt,N,Mt,st,B,V,v.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function W(C,v,B){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);let Q=re(C,v),gt=v.source;e.bindTexture(V,C.__webglTexture,n.TEXTURE0+B);let xt=i.get(gt);if(gt.version!==xt.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let st=ae.getPrimaries(ae.workingColorSpace),St=v.colorSpace===oi?null:ae.getPrimaries(v.colorSpace),At=v.colorSpace===oi||st===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let ot=p(v.image,!1,s.maxTextureSize);ot=fe(v,ot);let yt=r.convert(v.format,v.colorSpace),Bt=r.convert(v.type),bt=_(v.internalFormat,yt,Bt,v.normalized,v.colorSpace,v.isVideoTexture);te(V,v);let vt,Ot=v.mipmaps,Vt=v.isVideoTexture!==!0,Jt=xt.__version===void 0||Q===!0,N=gt.dataReady,Mt=w(v,ot);if(v.isDepthTexture)bt=S(v.format===Ii,v.type),Jt&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,bt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,bt,ot.width,ot.height,0,yt,Bt,null));else if(v.isDataTexture)if(Ot.length>0){Vt&&Jt&&e.texStorage2D(n.TEXTURE_2D,Mt,bt,Ot[0].width,Ot[0].height);for(let st=0,St=Ot.length;st<St;st++)vt=Ot[st],Vt?N&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,vt.width,vt.height,yt,Bt,vt.data):e.texImage2D(n.TEXTURE_2D,st,bt,vt.width,vt.height,0,yt,Bt,vt.data);v.generateMipmaps=!1}else Vt?(Jt&&e.texStorage2D(n.TEXTURE_2D,Mt,bt,ot.width,ot.height),N&&rt(v,ot,yt,Bt)):e.texImage2D(n.TEXTURE_2D,0,bt,ot.width,ot.height,0,yt,Bt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,bt,Ot[0].width,Ot[0].height,ot.depth);for(let st=0,St=Ot.length;st<St;st++)if(vt=Ot[st],v.format!==En)if(yt!==null)if(Vt){if(N)if(v.layerUpdates.size>0){let At=zc(vt.width,vt.height,v.format,v.type);for(let ut of v.layerUpdates){let kt=vt.data.subarray(ut*At/vt.data.BYTES_PER_ELEMENT,(ut+1)*At/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,ut,vt.width,vt.height,1,yt,kt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,vt.width,vt.height,ot.depth,yt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,bt,vt.width,vt.height,ot.depth,0,vt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,vt.width,vt.height,ot.depth,yt,Bt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,bt,vt.width,vt.height,ot.depth,0,yt,Bt,vt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Vt&&Jt&&e.texStorage2D(n.TEXTURE_2D,Mt,bt,Ot[0].width,Ot[0].height);for(let st=0,St=Ot.length;st<St;st++)vt=Ot[st],v.format!==En?yt!==null?Vt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,bt,vt.width,vt.height,0,vt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?N&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,vt.width,vt.height,yt,Bt,vt.data):e.texImage2D(n.TEXTURE_2D,st,bt,vt.width,vt.height,0,yt,Bt,vt.data)}else if(v.isDataArrayTexture)if(Vt){if(Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,bt,ot.width,ot.height,ot.depth),N)if(v.layerUpdates.size>0){let st=zc(ot.width,ot.height,v.format,v.type);for(let St of v.layerUpdates){let At=ot.data.subarray(St*st/ot.data.BYTES_PER_ELEMENT,(St+1)*st/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,St,ot.width,ot.height,1,yt,Bt,At)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,Bt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,ot.width,ot.height,ot.depth,0,yt,Bt,ot.data);else if(v.isData3DTexture)Vt?(Jt&&e.texStorage3D(n.TEXTURE_3D,Mt,bt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,Bt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,bt,ot.width,ot.height,ot.depth,0,yt,Bt,ot.data);else if(v.isFramebufferTexture){if(Jt)if(Vt)e.texStorage2D(n.TEXTURE_2D,Mt,bt,ot.width,ot.height);else{let st=ot.width,St=ot.height;for(let At=0;At<Mt;At++)e.texImage2D(n.TEXTURE_2D,At,bt,st,St,0,yt,Bt,null),st>>=1,St>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),ot.parentNode!==st){st.appendChild(ot),d.add(v),st.onpaint=St=>{let At=St.changedElements;for(let ut of d)At.includes(ut.image)&&(ut.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ot);else{let At=n.RGBA,ut=n.RGBA,kt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,ut,kt,ot)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Vt&&Jt){let st=ne(Ot[0]);e.texStorage2D(n.TEXTURE_2D,Mt,bt,st.width,st.height)}for(let st=0,St=Ot.length;st<St;st++)vt=Ot[st],Vt?N&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,yt,Bt,vt):e.texImage2D(n.TEXTURE_2D,st,bt,yt,Bt,vt);v.generateMipmaps=!1}else if(Vt){if(Jt){let st=ne(ot);e.texStorage2D(n.TEXTURE_2D,Mt,bt,st.width,st.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Bt,ot)}else e.texImage2D(n.TEXTURE_2D,0,bt,yt,Bt,ot);m(v)&&M(V),xt.__version=gt.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function J(C,v,B){if(v.image.length!==6)return;let V=re(C,v),Q=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);let gt=i.get(Q);if(Q.version!==gt.__version||V===!0){e.activeTexture(n.TEXTURE0+B);let xt=ae.getPrimaries(ae.workingColorSpace),et=v.colorSpace===oi?null:ae.getPrimaries(v.colorSpace),ot=v.colorSpace===oi||xt===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let yt=v.isCompressedTexture||v.image[0].isCompressedTexture,Bt=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let ut=0;ut<6;ut++)!yt&&!Bt?bt[ut]=p(v.image[ut],!0,s.maxCubemapSize):bt[ut]=Bt?v.image[ut].image:v.image[ut],bt[ut]=fe(v,bt[ut]);let vt=bt[0],Ot=r.convert(v.format,v.colorSpace),Vt=r.convert(v.type),Jt=_(v.internalFormat,Ot,Vt,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,Mt=gt.__version===void 0||V===!0,st=Q.dataReady,St=w(v,vt);te(n.TEXTURE_CUBE_MAP,v);let At;if(yt){N&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Jt,vt.width,vt.height);for(let ut=0;ut<6;ut++){At=bt[ut].mipmaps;for(let kt=0;kt<At.length;kt++){let Nt=At[kt];v.format!==En?Ot!==null?N?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,0,0,Nt.width,Nt.height,Ot,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,Jt,Nt.width,Nt.height,0,Nt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,0,0,Nt.width,Nt.height,Ot,Vt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt,Jt,Nt.width,Nt.height,0,Ot,Vt,Nt.data)}}}else{if(At=v.mipmaps,N&&Mt){At.length>0&&St++;let ut=ne(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Jt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Bt){N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,bt[ut].width,bt[ut].height,Ot,Vt,bt[ut].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Jt,bt[ut].width,bt[ut].height,0,Ot,Vt,bt[ut].data);for(let kt=0;kt<At.length;kt++){let be=At[kt].image[ut].image;N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,0,0,be.width,be.height,Ot,Vt,be.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,Jt,be.width,be.height,0,Ot,Vt,be.data)}}else{N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ot,Vt,bt[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Jt,Ot,Vt,bt[ut]);for(let kt=0;kt<At.length;kt++){let Nt=At[kt];N?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,0,0,Ot,Vt,Nt.image[ut]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,kt+1,Jt,Ot,Vt,Nt.image[ut])}}}m(v)&&M(n.TEXTURE_CUBE_MAP),gt.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function nt(C,v,B,V,Q,gt){let xt=r.convert(B.format,B.colorSpace),et=r.convert(B.type),ot=_(B.internalFormat,xt,et,B.normalized,B.colorSpace),yt=i.get(v),Bt=i.get(B);if(Bt.__renderTarget=v,!yt.__hasExternalTextures){let bt=Math.max(1,v.width>>gt),vt=Math.max(1,v.height>>gt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,gt,ot,bt,vt,v.depth,0,xt,et,null):e.texImage2D(Q,gt,ot,bt,vt,0,xt,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Zt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Q,Bt.__webglTexture,0,$t(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Q,Bt.__webglTexture,gt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(C,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){let V=v.depthTexture,Q=V&&V.isDepthTexture?V.type:null,gt=S(v.stencilBuffer,Q),xt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Zt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(v),gt,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(v),gt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,gt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,C)}else{let V=v.textures;for(let Q=0;Q<V.length;Q++){let gt=V[Q],xt=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),ot=_(gt.internalFormat,xt,et,gt.normalized,gt.colorSpace);Zt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(v),ot,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(v),ot,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ot,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(C,v,B){let V=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),te(n.TEXTURE_CUBE_MAP,v.depthTexture);let yt=r.convert(v.depthTexture.format),Bt=r.convert(v.depthTexture.type),bt;v.depthTexture.format===Vn?bt=n.DEPTH_COMPONENT24:v.depthTexture.format===Ii&&(bt=n.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,bt,v.width,v.height,0,yt,Bt,null)}}else ct(v.depthTexture,0);let gt=Q.__webglTexture,xt=$t(v),et=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ot=v.depthTexture.format===Ii?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Vn)Zt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,et,gt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,ot,et,gt,0);else if(v.depthTexture.format===Ii)Zt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,et,gt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,ot,et,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function X(C){let v=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",Q)};V.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=V}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)Ft(v.__webglFramebuffer[V],C,V);else{let V=C.texture.mipmaps;V&&V.length>0?Ft(v.__webglFramebuffer[0],C,0):Ft(v.__webglFramebuffer,C,0)}else if(B){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=n.createRenderbuffer(),mt(v.__webglDepthbuffer[V],C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=v.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,gt)}}else{let V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),mt(v.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,gt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,gt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function j(C,v,B){let V=i.get(C);v!==void 0&&nt(V.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&X(C)}function lt(C){let v=C.texture,B=i.get(C),V=i.get(v);C.addEventListener("dispose",x);let Q=C.textures,gt=C.isWebGLCubeRenderTarget===!0,xt=Q.length>1;if(xt||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,a.memory.textures++),gt){B.__webglFramebuffer=[];for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[et]=[];for(let ot=0;ot<v.mipmaps.length;ot++)B.__webglFramebuffer[et][ot]=n.createFramebuffer()}else B.__webglFramebuffer[et]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let et=0;et<v.mipmaps.length;et++)B.__webglFramebuffer[et]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(xt)for(let et=0,ot=Q.length;et<ot;et++){let yt=i.get(Q[et]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Zt(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let et=0;et<Q.length;et++){let ot=Q[et];B.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[et]);let yt=r.convert(ot.format,ot.colorSpace),Bt=r.convert(ot.type),bt=_(ot.internalFormat,yt,Bt,ot.normalized,ot.colorSpace,C.isXRRenderTarget===!0),vt=$t(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,bt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,B.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(gt){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),te(n.TEXTURE_CUBE_MAP,v);for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0)for(let ot=0;ot<v.mipmaps.length;ot++)nt(B.__webglFramebuffer[et][ot],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,ot);else nt(B.__webglFramebuffer[et],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(v)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let et=0,ot=Q.length;et<ot;et++){let yt=Q[et],Bt=i.get(yt),bt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,Bt.__webglTexture),te(bt,yt),nt(B.__webglFramebuffer,C,yt,n.COLOR_ATTACHMENT0+et,bt,0),m(yt)&&M(bt)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,V.__webglTexture),te(et,v),v.mipmaps&&v.mipmaps.length>0)for(let ot=0;ot<v.mipmaps.length;ot++)nt(B.__webglFramebuffer[ot],C,v,n.COLOR_ATTACHMENT0,et,ot);else nt(B.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,et,0);m(v)&&M(et),e.unbindTexture()}C.depthBuffer&&X(C)}function ht(C){let v=C.textures;for(let B=0,V=v.length;B<V;B++){let Q=v[B];if(m(Q)){let gt=E(C),xt=i.get(Q).__webglTexture;e.bindTexture(gt,xt),M(gt),e.unbindTexture()}}}let pt=[],zt=[];function Gt(C){if(C.samples>0){if(Zt(C)===!1){let v=C.textures,B=C.width,V=C.height,Q=n.COLOR_BUFFER_BIT,gt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(C),et=v.length>1;if(et)for(let yt=0;yt<v.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let ot=C.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<v.length;yt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Bt=i.get(v[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,B,V,0,0,B,V,Q,n.NEAREST),l===!0&&(pt.length=0,zt.length=0,pt.push(n.COLOR_ATTACHMENT0+yt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(pt.push(gt),zt.push(gt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let yt=0;yt<v.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);let Bt=i.get(v[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function $t(C){return Math.min(s.maxSamples,C.samples)}function Zt(C){let v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function fe(C,v){let B=C.colorSpace,V=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==ar&&B!==oi&&(ae.getTransfer(B)===ge?(V!==En||Q!==un)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",B)),v}function ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=ct,this.setTexture2DArray=Z,this.setTexture3D=it,this.setTextureCube=at,this.rebindTextures=j,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Dx(n,t){function e(i,s=oi){let r,a=ae.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===yo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tc)return n.BYTE;if(i===Ac)return n.SHORT;if(i===Os)return n.UNSIGNED_SHORT;if(i===xo)return n.INT;if(i===Fn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===Pc)return n.ALPHA;if(i===Ic)return n.RGB;if(i===En)return n.RGBA;if(i===Vn)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===Lc)return n.RED;if(i===Mo)return n.RED_INTEGER;if(i===Li)return n.RG;if(i===So)return n.RG_INTEGER;if(i===bo)return n.RGBA_INTEGER;if(i===kr||i===zr||i===Gr||i===Hr)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eo||i===wo||i===To||i===Ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Co||i===Ro||i===Po||i===Io||i===Lo||i===Vr||i===Do)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Co||i===Ro)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Po)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Io)return r.COMPRESSED_R11_EAC;if(i===Lo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Vr)return r.COMPRESSED_RG11_EAC;if(i===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fo||i===No||i===Uo||i===Bo||i===Oo||i===ko||i===zo||i===Go||i===Ho||i===Vo||i===Wo||i===Xo||i===$o||i===qo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===No)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ko)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Go)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ho)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$o)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===Zo||i===Jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yo)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ko||i===jo||i===Wr||i===Qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new yn({vertexShader:Fx,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new qi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends Ln{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new rh,m={},M=e.getContextAttributes(),E=null,_=null,S=[],w=[],A=new dt,x=null,T=null,R=new nn;R.viewport=new Ie;let D=new nn;D.viewport=new Ie;let U=[R,D],k=new uo,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let rt=S[tt];return rt===void 0&&(rt=new ws,S[tt]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(tt){let rt=S[tt];return rt===void 0&&(rt=new ws,S[tt]=rt),rt.getGripSpace()},this.getHand=function(tt){let rt=S[tt];return rt===void 0&&(rt=new ws,S[tt]=rt),rt.getHandSpace()};function q(tt){let rt=w.indexOf(tt.inputSource);if(rt===-1)return;let W=S[rt];W!==void 0&&(W.update(tt.inputSource,tt.frame,c||a),W.dispatchEvent({type:tt.type,data:tt.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ct);for(let tt=0;tt<S.length;tt++){let rt=w[tt];rt!==null&&(w[tt]=null,S[tt].disconnect(rt))}L=null,O=null,p.reset();for(let tt in m)delete m[tt];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,_=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),T!==null){let tt=T.camera;tt.fov=T.fov,tt.zoom=T.zoom,tt.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ct),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,J=null,nt=null;M.depth&&(nt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=M.stencil?Ii:Vn,J=M.stencil?ks:Fn);let mt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(mt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new hn(u.textureWidth,u.textureHeight,{format:En,type:un,depthTexture:new Si(u.textureWidth,u.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let W={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new hn(f.framebufferWidth,f.framebufferHeight,{format:En,type:un,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ct(tt){for(let rt=0;rt<tt.removed.length;rt++){let W=tt.removed[rt],J=w.indexOf(W);J>=0&&(w[J]=null,S[J].disconnect(W))}for(let rt=0;rt<tt.added.length;rt++){let W=tt.added[rt],J=w.indexOf(W);if(J===-1){for(let mt=0;mt<S.length;mt++)if(mt>=w.length){w.push(W),J=mt;break}else if(w[mt]===null){w[mt]=W,J=mt;break}if(J===-1)break}let nt=S[J];nt&&nt.connect(W)}}let Z=new P,it=new P;function at(tt,rt,W){Z.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(W.matrixWorld);let J=Z.distanceTo(it),nt=rt.projectionMatrix.elements,mt=W.projectionMatrix.elements,Ft=nt[14]/(nt[10]-1),X=nt[14]/(nt[10]+1),j=(nt[9]+1)/nt[5],lt=(nt[9]-1)/nt[5],ht=(nt[8]-1)/nt[0],pt=(mt[8]+1)/mt[0],zt=Ft*ht,Gt=Ft*pt,$t=J/(-ht+pt),Zt=$t*-ht;if(rt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Zt),tt.translateZ($t),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),nt[10]===-1)tt.projectionMatrix.copy(rt.projectionMatrix),tt.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let I=Ft+$t,fe=X+$t,ne=zt-Zt,C=Gt+(J-Zt),v=j*X/fe*I,B=lt*X/fe*I;tt.projectionMatrix.makePerspective(ne,C,v,B,I,fe),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function It(tt,rt){rt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(rt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let rt=tt.near,W=tt.far;p.texture!==null&&(p.depthNear>0&&(rt=p.depthNear),p.depthFar>0&&(W=p.depthFar)),k.near=D.near=R.near=rt,k.far=D.far=R.far=W,(L!==k.near||O!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,O=k.far),k.layers.mask=tt.layers.mask|6,R.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let J=tt.parent,nt=k.cameras;It(k,J);for(let mt=0;mt<nt.length;mt++)It(nt[mt],J);nt.length===2?at(k,R,D):k.projectionMatrix.copy(R.projectionMatrix),T===null&&tt.isPerspectiveCamera&&(T={camera:tt,fov:tt.fov,zoom:tt.zoom}),Ct(tt,k,J)};function Ct(tt,rt,W){W===null?tt.matrix.copy(rt.matrixWorld):(tt.matrix.copy(W.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(rt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(rt.projectionMatrix),tt.projectionMatrixInverse.copy(rt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ss*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(tt){return m[tt]};let oe=null;function te(tt,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){let W=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let J=!1;W.length!==k.cameras.length&&(k.cameras.length=0,J=!0);for(let X=0;X<W.length;X++){let j=W[X],lt=null;if(f!==null)lt=f.getViewport(j);else{let pt=d.getViewSubImage(u,j);lt=pt.viewport,X===0&&(t.setRenderTargetTextures(_,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(_))}let ht=U[X];ht===void 0&&(ht=new nn,ht.layers.enable(X),ht.viewport=new Ie,U[X]=ht),ht.matrix.fromArray(j.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(j.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(lt.x,lt.y,lt.width,lt.height),X===0&&(k.matrix.copy(ht.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),J===!0&&k.cameras.push(ht)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let X=d.getDepthInformation(W[0]);X&&X.isValid&&X.texture&&p.init(X,s.renderState)}if(nt&&nt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let X=0;X<W.length;X++){let j=W[X].camera;if(j){let lt=m[j];lt||(lt=new gr,m[j]=lt);let ht=d.getCameraImage(j);lt.sourceTexture=ht}}}}for(let W=0;W<S.length;W++){let J=w[W],nt=S[W];J!==null&&nt!==void 0&&nt.update(J,rt,c||a)}oe&&oe(tt,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}let re=new Td;re.setAnimationLoop(te),this.setAnimationLoop=function(tt){oe=tt},this.dispose=function(){}}},Ux=new we,Ld=new Yt;Ld.set(-1,0,0,0,1,0,0,0,1);function Bx(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Bc(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,E,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),E=M.envMap,_=M.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ld),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ox(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let w=S.program;i.uniformBlockBinding(_,w)}function c(_,S){let w=s[_.id];w===void 0&&(p(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",M));let A=S.program;i.updateUBOMapping(_,A);let x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){let S=d();_.__bindingPointIndex=S;let w=n.createBuffer(),A=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=s[_.id],w=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let x=0,T=w.length;x<T;x++){let R=w[x];if(Array.isArray(R))for(let D=0,U=R.length;D<U;D++)f(R[D],x,D,A);else f(R,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,S,w,A){if(y(_,S,w,A)===!0){let x=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){let U=T[D],k=m(U);g(U,_.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,S,w){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,w)}function y(_,S,w,A){let x=_.value,T=S+"_"+w;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(_){let S=_.uniforms,w=0,A=16;for(let T=0,R=S.length;T<R;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let U=0,k=D.length;U<k;U++){let L=D[U],O=Array.isArray(L.value)?L.value:[L.value];for(let q=0,Y=O.length;q<Y;q++){let ct=O[q],Z=m(ct),it=w%A,at=it%Z.boundary,It=it+at;w+=at,It!==0&&A-It<Z.storage&&(w+=A-It),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=Z.storage}}}let x=w%A;return x>0&&(w+=A-x),_.__size=w,_.__cache={},this}function m(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",_),S}function M(_){let S=_.target;S.removeEventListener("dispose",M);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function zx(){return Yn===null&&(Yn=new za(kx,16,16,Li,Un),Yn.name="DFG_LUT",Yn.minFilter=Ze,Yn.magFilter=Ze,Yn.wrapS=Hn,Yn.wrapT=Hn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var ol=class{constructor(t={}){let{canvas:e=qu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=un}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,p=new Set([bo,So,Mo]),m=new Set([un,Fn,Os,ks,yo,vo]),M=new Uint32Array(4),E=new Int32Array(4),_=new P,S=null,w=null,A=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,U=null,k=null,L=null,O=null;this._outputColorSpace=Ye;let q=0,Y=0,ct=null,Z=-1,it=null,at=new Ie,It=new Ie,Ct=null,oe=new ee(0),te=0,re=e.width,tt=e.height,rt=1,W=null,J=null,nt=new Ie(0,0,re,tt),mt=new Ie(0,0,re,tt),Ft=!1,X=new Ts,j=!1,lt=!1,ht=new we,pt=new P,zt=new Ie,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function Zt(){return ct===null?rt:1}let I=i;function fe(b,F){return e.getContext(b,F)}let ne,C,v,B,V,Q,gt,xt,et,ot,yt,Bt,bt,vt,Ot,Vt,Jt,N,Mt,st,St,At,ut;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",An,!1),I===null){let F="webgl2";if(I=fe(F,b),I===null)throw fe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(b){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",An,!1),Xt("WebGLRenderer: "+b.message),b}function kt(){ne=new qg(I),ne.init(),St=new Dx(I,ne),C=new Bg(I,ne,t,St),v=new Ix(I,ne),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),k=I.createFramebuffer(),L=I.createFramebuffer(),O=I.createFramebuffer(),B=new Jg(I),V=new _x,Q=new Lx(I,ne,v,V,C,St,B),gt=new $g(R),xt=new jp(I),At=new Ng(I,xt),et=new Yg(I,xt,B,At),ot=new jg(I,et,xt,At,B),N=new Kg(I,C,Q),Ot=new Og(V),yt=new gx(R,gt,ne,C,At,Ot),Bt=new Bx(R,V),bt=new yx,vt=new wx(ne),Jt=new Fg(R,gt,v,ot,g,l),Vt=new Px(R,ot,C),ut=new Ox(I,B,C,v),Mt=new Ug(I,ne,B),st=new Zg(I,ne,B),B.programs=yt.programs,R.capabilities=C,R.extensions=ne,R.properties=V,R.renderLists=bt,R.shadowMap=Vt,R.state=v,R.info=B}y!==un&&(T=new t_(y,e.width,e.height,o,s,r));let Nt=new ah(R,I);this.xr=Nt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(b){b!==void 0&&(rt=b,this.setSize(re,tt,!1))},this.getSize=function(b){return b.set(re,tt)},this.setSize=function(b,F,$=!0){if(Nt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}re=b,tt=F,e.width=Math.floor(b*rt),e.height=Math.floor(F*rt),$===!0&&(e.style.width=b+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(re*rt,tt*rt).floor()},this.setDrawingBufferSize=function(b,F,$){re=b,tt=F,rt=$,e.width=Math.floor(b*$),e.height=Math.floor(F*$),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(y===un){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(at)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,F,$,G){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,F,$,G),v.viewport(at.copy(nt).multiplyScalar(rt).round())},this.getScissor=function(b){return b.copy(mt)},this.setScissor=function(b,F,$,G){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,F,$,G),v.scissor(It.copy(mt).multiplyScalar(rt).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(b){v.setScissorTest(Ft=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,$=!0){let G=0;if(b){let H=!1;if(ct!==null){let Tt=ct.texture.format;H=p.has(Tt)}if(H){let Tt=ct.texture.type,Pt=m.has(Tt),wt=Jt.getClearColor(),Lt=Jt.getClearAlpha(),Ut=wt.r,Kt=wt.g,ie=wt.b;Pt?(M[0]=Ut,M[1]=Kt,M[2]=ie,M[3]=Lt,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Ut,E[1]=Kt,E[2]=ie,E[3]=Lt,I.clearBufferiv(I.COLOR,0,E))}else G|=I.COLOR_BUFFER_BIT}F&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",An,!1),Jt.dispose(),bt.dispose(),vt.dispose(),V.dispose(),gt.dispose(),ot.dispose(),At.dispose(),ut.dispose(),yt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Ah),Nt.removeEventListener("sessionend",Ch),Bi.stop()};function be(b){b.preventDefault(),Fc("WebGLRenderer: Context Lost."),D=!0}function pe(){Fc("WebGLRenderer: Context Restored."),D=!1;let b=B.autoReset,F=Vt.enabled,$=Vt.autoUpdate,G=Vt.needsUpdate,H=Vt.type;kt(),B.autoReset=b,Vt.enabled=F,Vt.autoUpdate=$,Vt.needsUpdate=G,Vt.type=H}function An(b){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function kn(b){let F=b.target;F.removeEventListener("dispose",kn),Sf(F)}function Sf(b){bf(b),V.remove(b)}function bf(b){let F=V.get(b).programs;F!==void 0&&(F.forEach(function($){yt.releaseProgram($)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,$,G,H,Tt){F===null&&(F=Gt);let Pt=H.isMesh&&H.matrixWorld.determinantAffine()<0,wt=Tf(b,F,$,G,H);v.setMaterial(G,Pt);let Lt=$.index,Ut=1;if(G.wireframe===!0){if(Lt=et.getWireframeAttribute($),Lt===void 0)return;Ut=2}let Kt=$.drawRange,ie=$.attributes.position,Dt=Kt.start*Ut,me=(Kt.start+Kt.count)*Ut;Tt!==null&&(Dt=Math.max(Dt,Tt.start*Ut),me=Math.min(me,(Tt.start+Tt.count)*Ut)),Lt!==null?(Dt=Math.max(Dt,0),me=Math.min(me,Lt.count)):ie!=null&&(Dt=Math.max(Dt,0),me=Math.min(me,ie.count));let Fe=me-Dt;if(Fe<0||Fe===1/0)return;At.setup(H,G,wt,$,Lt);let Te,Se=Mt;if(Lt!==null&&(Te=xt.get(Lt),Se=st,Se.setIndex(Te)),H.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Zt()),Se.setMode(I.LINES)):Se.setMode(I.TRIANGLES);else if(H.isLine){let Qe=G.linewidth;Qe===void 0&&(Qe=1),v.setLineWidth(Qe*Zt()),H.isLineSegments?Se.setMode(I.LINES):H.isLineLoop?Se.setMode(I.LINE_LOOP):Se.setMode(I.LINE_STRIP)}else H.isPoints?Se.setMode(I.POINTS):H.isSprite&&Se.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Qe=H._multiDrawStarts,Rt=H._multiDrawCounts,rn=H._multiDrawCount,ce=Lt?xt.get(Lt).bytesPerElement:1,Mn=V.get(G).currentProgram.getUniforms();for(let zn=0;zn<rn;zn++)Mn.setValue(I,"_gl_DrawID",zn),Se.render(Qe[zn]/ce,Rt[zn])}else if(H.isInstancedMesh)Se.renderInstances(Dt,Fe,H.count);else if($.isInstancedBufferGeometry){let Qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Rt=Math.min($.instanceCount,Qe);Se.renderInstances(Dt,Fe,Rt)}else Se.render(Dt,Fe)};function Th(b,F,$,G){U!==null&&b.isNodeMaterial&&U.setObject(G,b),j===!0&&Ot.setState(b,$,!1),b.transparent===!0&&b.side===$n&&b.forceSinglePass===!1?(b.side=ln,b.needsUpdate=!0,ea(b,F,G),b.side=Ci,b.needsUpdate=!0,ea(b,F,G),b.side=$n):ea(b,F,G)}this.compile=function(b,F,$=null){$===null&&($=b),U!==null&&U.renderStart(b,F,$),w=vt.get($),w.init(F),x.push(w),$.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),b!==$&&b.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),lt=this.localClippingEnabled,j=Ot.init(this.clippingPlanes,lt),j===!0&&Ot.setGlobalState(this.clippingPlanes,F),U!==null&&Vt.render(w.state.shadowsArray,$,F);let G=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Tt=H.material;if(Tt)if(Array.isArray(Tt))for(let Pt=0;Pt<Tt.length;Pt++){let wt=Tt[Pt];Th(wt,$,F,H),G.add(wt)}else Th(Tt,$,F,H),G.add(Tt)}),w=x.pop(),U!==null&&U.renderEnd(),G},this.compileAsync=function(b,F,$=null){let G=this.compile(b,F,$);return new Promise(H=>{function Tt(){if(G.forEach(function(Pt){let Lt=V.get(Pt).currentProgram;(Lt===void 0||Lt.isReady())&&G.delete(Pt)}),G.size===0){H(b);return}setTimeout(Tt,10)}ne.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Tl=null;function Ef(b){Tl&&Tl(b)}function Ah(){Bi.stop()}function Ch(){Bi.start()}let Bi=new Td;Bi.setAnimationLoop(Ef),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(b){Tl=b,Nt.setAnimationLoop(b),b===null?Bi.stop():Bi.start()},Nt.addEventListener("sessionstart",Ah),Nt.addEventListener("sessionend",Ch),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(b,F);let $=Nt.enabled===!0&&Nt.isPresenting===!0,G=T!==null&&(ct===null||$)&&T.begin(R,ct);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(F),F=Nt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,F,ct),w=vt.get(b,x.length),w.init(F),w.state.textureUnits=Q.getTextureUnits(),x.push(w),ht.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(ht,In,F.reversedDepth),lt=this.localClippingEnabled,j=Ot.init(this.clippingPlanes,lt),S=bt.get(b,A.length),S.init(),A.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){let Pt=R.xr.getDepthSensingMesh();Pt!==null&&Al(Pt,F,-1/0,R.sortObjects)}Al(b,F,0,R.sortObjects),S.finish(),U!==null&&U.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(W,J),$t=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,$t&&Jt.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),j===!0&&Ot.beginShadows();let H=w.state.shadowsArray;if(Vt.render(H,b,F),j===!0&&Ot.endShadows(),(G&&T.hasRenderPass())===!1){let Pt=S.opaque,wt=S.transmissive;if(w.setupLights(),F.isArrayCamera){let Lt=F.cameras;if(wt.length>0)for(let Ut=0,Kt=Lt.length;Ut<Kt;Ut++){let ie=Lt[Ut];Ph(Pt,wt,b,ie)}$t&&Jt.render(b);for(let Ut=0,Kt=Lt.length;Ut<Kt;Ut++){let ie=Lt[Ut];Rh(S,b,ie,ie.viewport)}}else wt.length>0&&Ph(Pt,wt,b,F),$t&&Jt.render(b),Rh(S,b,F)}ct!==null&&Y===0&&(Q.updateMultisampleRenderTarget(ct),Q.updateRenderTargetMipmap(ct)),G&&T.end(R),b.isScene===!0&&b.onAfterRender(R,b,F),At.resetDefaultState(),Z=-1,it=null,x.pop(),x.length>0?(w=x[x.length-1],Q.setTextureUnits(w.state.textureUnits),j===!0&&Ot.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,U!==null&&U.renderEnd()};function Al(b,F,$,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(X)){G&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);let Pt=ot.update(b),wt=b.material;wt.visible&&S.push(b,Pt,wt,$,zt.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(X))){let Pt=ot.update(b),wt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),zt.copy(Pt.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(wt)){let Lt=Pt.groups;for(let Ut=0,Kt=Lt.length;Ut<Kt;Ut++){let ie=Lt[Ut],Dt=wt[ie.materialIndex];Dt&&Dt.visible&&S.push(b,Pt,Dt,$,zt.z,ie,F)}}else wt.visible&&S.push(b,Pt,wt,$,zt.z,null,F)}}let Tt=b.children;for(let Pt=0,wt=Tt.length;Pt<wt;Pt++)Al(Tt[Pt],F,$,G)}function Rh(b,F,$,G){let{opaque:H,transmissive:Tt,transparent:Pt}=b;w.setupLightsView($),j===!0&&Ot.setGlobalState(R.clippingPlanes,$),G&&v.viewport(at.copy(G)),H.length>0&&ta(H,F,$),Tt.length>0&&ta(Tt,F,$),Pt.length>0&&ta(Pt,F,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ph(b,F,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Dt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new hn(1,1,{generateMipmaps:!0,type:Dt?Un:un,minFilter:Pi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let Tt=w.state.transmissionRenderTarget[G.id],Pt=G.viewport||at;Tt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);let wt=R.getRenderTarget(),Lt=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(Tt),R.getClearColor(oe),te=R.getClearAlpha(),te<1&&R.setClearColor(16777215,.5),R.clear(),$t&&Jt.render($);let Kt=R.toneMapping;R.toneMapping=Dn;let ie=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),j===!0&&Ot.setGlobalState(R.clippingPlanes,G),ta(b,$,G),Q.updateMultisampleRenderTarget(Tt),Q.updateRenderTargetMipmap(Tt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let me=0,Fe=F.length;me<Fe;me++){let Te=F[me],{object:Se,geometry:Qe,material:Rt,group:rn}=Te;if(Rt.side===$n&&Se.layers.test(G.layers)){let ce=Rt.side;Rt.side=ln,Rt.needsUpdate=!0,Ih(Se,$,G,Qe,Rt,rn),Rt.side=ce,Rt.needsUpdate=!0,Dt=!0}}Dt===!0&&(Q.updateMultisampleRenderTarget(Tt),Q.updateRenderTargetMipmap(Tt))}R.setRenderTarget(wt,Lt,Ut),R.setClearColor(oe,te),ie!==void 0&&(G.viewport=ie),R.toneMapping=Kt}function ta(b,F,$){let G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Tt=b.length;H<Tt;H++){let Pt=b[H],{object:wt,geometry:Lt,group:Ut}=Pt,Kt=Pt.material;Kt.allowOverride===!0&&G!==null&&(Kt=G),wt.layers.test($.layers)&&Ih(wt,F,$,Lt,Kt,Ut)}}function Ih(b,F,$,G,H,Tt){U!==null&&H.isNodeMaterial&&U.setObject(b,H),b.onBeforeRender(R,F,$,G,H,Tt),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(R,F,$,G,b,Tt),H.transparent===!0&&H.side===$n&&H.forceSinglePass===!1?(H.side=ln,H.needsUpdate=!0,R.renderBufferDirect($,F,G,H,b,Tt),H.side=Ci,H.needsUpdate=!0,R.renderBufferDirect($,F,G,H,b,Tt),H.side=$n):R.renderBufferDirect($,F,G,H,b,Tt),b.onAfterRender(R,F,$,G,H,Tt)}function ea(b,F,$){F.isScene!==!0&&(F=Gt);let G=V.get(b),H=w.state.lights,Tt=w.state.shadowsArray,Pt=H.state.version,wt=yt.getParameters(b,H.state,Tt,F,$,w.state.lightProbeGridArray),Lt=yt.getProgramCacheKey(wt),Ut=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let Kt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=gt.get(b.envMap||G.environment,Kt),G.envMapRotation=G.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",kn),Ut=new Map,G.programs=Ut);let ie=Ut.get(Lt);if(ie!==void 0){if(G.currentProgram===ie&&G.lightsStateVersion===Pt)return Dh(b,wt),ie}else wt.uniforms=yt.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,$,wt),b.onBeforeCompile(wt,R),ie=yt.acquireProgram(wt,Lt),Ut.set(Lt,ie),G.uniforms=wt.uniforms;let Dt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=Ot.uniform),Dh(b,wt),G.needsLights=Cf(b),G.lightsStateVersion=Pt,G.needsLights&&(Dt.ambientLightColor.value=H.state.ambient,Dt.lightProbe.value=H.state.probe,Dt.sunLights.value=H.state.sun,Dt.sunLightShadows.value=H.state.sunShadow,Dt.directionalLights.value=H.state.directional,Dt.directionalLightShadows.value=H.state.directionalShadow,Dt.spotLights.value=H.state.spot,Dt.spotLightShadows.value=H.state.spotShadow,Dt.rectAreaLights.value=H.state.rectArea,Dt.ltc_1.value=H.state.rectAreaLTC1,Dt.ltc_2.value=H.state.rectAreaLTC2,Dt.pointLights.value=H.state.point,Dt.pointLightShadows.value=H.state.pointShadow,Dt.hemisphereLights.value=H.state.hemi,Dt.sunShadowMatrix.value=H.state.sunShadowMatrix,Dt.sunShadowCascade.value=H.state.sunShadowCascade,Dt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Dt.spotLightMatrix.value=H.state.spotLightMatrix,Dt.spotLightMap.value=H.state.spotLightMap,Dt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=ie,G.uniformsList=null,ie}function Lh(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Hs.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Dh(b,F){let $=V.get(b);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function wf(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let $=0,G=b.length;$<G;$++){let H=b[$];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function Tf(b,F,$,G,H){F.isScene!==!0&&(F=Gt),Q.resetTextureUnits();let Tt=F.fog,Pt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,wt=ct===null?R.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ae.workingColorSpace,Lt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ut=gt.get(G.envMap||Pt,Lt),Kt=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ie=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!$.morphAttributes.position,me=!!$.morphAttributes.normal,Fe=!!$.morphAttributes.color,Te=Dn;G.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Te=R.toneMapping);let Se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qe=Se!==void 0?Se.length:0,Rt=V.get(G),rn=w.state.lights;if(j===!0&&(lt===!0||b!==it)){let Ee=b===it&&G.id===Z;Ot.setState(G,b,Ee)}let ce=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==rn.state.version||Rt.outputColorSpace!==wt||H.isBatchedMesh&&Rt.batching===!1||!H.isBatchedMesh&&Rt.batching===!0||H.isBatchedMesh&&Rt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Rt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Rt.instancing===!1||!H.isInstancedMesh&&Rt.instancing===!0||H.isSkinnedMesh&&Rt.skinning===!1||!H.isSkinnedMesh&&Rt.skinning===!0||H.isInstancedMesh&&Rt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Rt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Rt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Rt.instancingMorph===!1&&H.morphTexture!==null||Rt.envMap!==Ut||G.fog===!0&&Rt.fog!==Tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ot.numPlanes||Rt.numIntersection!==Ot.numIntersection)||Rt.vertexAlphas!==Kt||Rt.vertexTangents!==ie||Rt.morphTargets!==Dt||Rt.morphNormals!==me||Rt.morphColors!==Fe||Rt.toneMapping!==Te||Rt.morphTargetsCount!==Qe||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Rt.__version=G.version);let Mn=Rt.currentProgram;ce===!0&&(Mn=ea(G,F,H),U&&G.isNodeMaterial&&U.onUpdateProgram(G,Mn,Rt));let zn=!1,hi=!1,ns=!1,ve=Mn.getUniforms(),De=Rt.uniforms;if(v.useProgram(Mn.program)&&(zn=!0,hi=!0,ns=!0),G.id!==Z&&(Z=G.id,hi=!0),Rt.needsLights){let Ee=wf(w.state.lightProbeGridArray,H);Rt.lightProbeGrid!==Ee&&(Rt.lightProbeGrid=Ee,hi=!0)}if(zn||it!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ve.setValue(I,"projectionMatrix",b.projectionMatrix),ve.setValue(I,"viewMatrix",b.matrixWorldInverse);let di=ve.map.cameraPosition;di!==void 0&&di.setValue(I,pt.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&ve.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),it!==b&&(it=b,hi=!0,ns=!0)}if(Rt.needsLights&&(rn.state.sunShadowMap.length>0&&ve.setValue(I,"sunShadowMap",rn.state.sunShadowMap,Q),rn.state.directionalShadowMap.length>0&&ve.setValue(I,"directionalShadowMap",rn.state.directionalShadowMap,Q),rn.state.spotShadowMap.length>0&&ve.setValue(I,"spotShadowMap",rn.state.spotShadowMap,Q),rn.state.pointShadowMap.length>0&&ve.setValue(I,"pointShadowMap",rn.state.pointShadowMap,Q)),H.isSkinnedMesh){ve.setOptional(I,H,"bindMatrix"),ve.setOptional(I,H,"bindMatrixInverse");let Ee=H.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ve.setValue(I,"boneTexture",Ee.boneTexture,Q))}H.isBatchedMesh&&(ve.setOptional(I,H,"batchingTexture"),ve.setValue(I,"batchingTexture",H._matricesTexture,Q),ve.setOptional(I,H,"batchingIdTexture"),ve.setValue(I,"batchingIdTexture",H._indirectTexture,Q),ve.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ve.setValue(I,"batchingColorTexture",H._colorsTexture,Q));let ui=$.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&N.update(H,$,Mn),(hi||Rt.receiveShadow!==H.receiveShadow)&&(Rt.receiveShadow=H.receiveShadow,ve.setValue(I,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(De.envMapIntensity.value=F.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=zx()),hi){if(ve.setValue(I,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&Af(De,ns),Tt&&G.fog===!0&&Bt.refreshFogUniforms(De,Tt),Bt.refreshMaterialUniforms(De,G,rt,tt,w.state.transmissionRenderTarget[b.id]),Rt.needsLights&&Rt.lightProbeGrid){let Ee=Rt.lightProbeGrid;De.probesSH.value=Ee.texture,De.probesMin.value.copy(Ee.boundingBox.min),De.probesMax.value.copy(Ee.boundingBox.max),De.probesResolution.value.copy(Ee.resolution)}Hs.upload(I,Lh(Rt),De,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Hs.upload(I,Lh(Rt),De,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(I,"center",H.center),ve.setValue(I,"modelViewMatrix",H.modelViewMatrix),ve.setValue(I,"normalMatrix",H.normalMatrix),ve.setValue(I,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let Ee=G.uniformsGroups;for(let di=0,is=Ee.length;di<is;di++){let Nh=Ee[di];ut.update(Nh,Mn),ut.bind(Nh,Mn)}}return Mn}function Af(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Cf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(b,F,$){let G=V.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=F,V.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let $=V.get(b);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,$=0){ct=b,q=F,Y=$;let G=null,H=!1,Tt=!1;if(b){let wt=V.get(b);if(wt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,wt.__webglFramebuffer),at.copy(b.viewport),It.copy(b.scissor),Ct=b.scissorTest,v.viewport(at),v.scissor(It),v.setScissorTest(Ct),Z=-1;return}else if(wt.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(wt.__hasExternalTextures)Q.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Kt=b.depthTexture;if(wt.__boundDepthTexture!==Kt){if(Kt!==null&&V.has(Kt)&&(b.width!==Kt.image.width||b.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}let Lt=b.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Tt=!0);let Ut=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?G=Ut[F][$]:G=Ut[F],H=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?G=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?G=Ut[$]:G=Ut,at.copy(b.viewport),It.copy(b.scissor),Ct=b.scissorTest}else at.copy(nt).multiplyScalar(rt).floor(),It.copy(mt).multiplyScalar(rt).floor(),Ct=Ft;if($!==0&&(G=k),v.bindFramebuffer(I.FRAMEBUFFER,G)&&v.drawBuffers(b,G),v.viewport(at),v.scissor(It),v.setScissorTest(Ct),H){let wt=V.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,$)}else if(Tt){let wt=F;for(let Lt=0;Lt<b.textures.length;Lt++){let Ut=V.get(b.textures[Lt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Lt,Ut.__webglTexture,$,wt)}}else if(b!==null&&$!==0){let wt=V.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,$)}Z=-1};function Fh(b){let F=V.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=C.textureFormatReadable(b.format),F.__typeReadable=C.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,$,G,H,Tt,Pt,wt=0){if(!(b&&b.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt){v.bindFramebuffer(I.FRAMEBUFFER,Lt);try{let Ut=b.textures[wt],Kt=Ut.format,ie=Ut.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+wt);let Dt=Fh(Ut);if(Dt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&$>=0&&$<=b.height-H&&I.readPixels(F,$,G,H,St.convert(Kt),St.convert(ie),Tt)}finally{let Ut=ct!==null?V.get(ct).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,F,$,G,H,Tt,Pt,wt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt)if(F>=0&&F<=b.width-G&&$>=0&&$<=b.height-H){v.bindFramebuffer(I.FRAMEBUFFER,Lt);let Ut=b.textures[wt],Kt=Ut.format,ie=Ut.type;b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+wt);let Dt=Fh(Ut);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,me),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(F,$,G,H,St.convert(Kt),St.convert(ie),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Fe=ct!==null?V.get(ct).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Fe);let Te=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Zu(I,Te,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(me),I.deleteSync(Te),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,$=0){let G=Math.pow(2,-$),H=Math.floor(b.image.width*G),Tt=Math.floor(b.image.height*G),Pt=F!==null?F.x:0,wt=F!==null?F.y:0;Q.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Pt,wt,H,Tt),v.unbindTexture()},this.copyTextureToTexture=function(b,F,$=null,G=null,H=0,Tt=0){let Pt,wt,Lt,Ut,Kt,ie,Dt,me,Fe,Te=b.isCompressedTexture?b.mipmaps[Tt]:b.image;if($!==null)Pt=$.max.x-$.min.x,wt=$.max.y-$.min.y,Lt=$.isBox3?$.max.z-$.min.z:1,Ut=$.min.x,Kt=$.min.y,ie=$.isBox3?$.min.z:0;else{let De=Math.pow(2,-H);Pt=Math.floor(Te.width*De),wt=Math.floor(Te.height*De),b.isDataArrayTexture?Lt=Te.depth:b.isData3DTexture?Lt=Math.floor(Te.depth*De):Lt=1,Ut=0,Kt=0,ie=0}G!==null?(Dt=G.x,me=G.y,Fe=G.z):(Dt=0,me=0,Fe=0);let Se=St.convert(F.format),Qe=St.convert(F.type),Rt;F.isData3DTexture?(Q.setTexture3D(F,0),Rt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),Rt=I.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),Rt=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let rn=v.getParameter(I.UNPACK_ROW_LENGTH),ce=v.getParameter(I.UNPACK_IMAGE_HEIGHT),Mn=v.getParameter(I.UNPACK_SKIP_PIXELS),zn=v.getParameter(I.UNPACK_SKIP_ROWS),hi=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),v.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),v.pixelStorei(I.UNPACK_SKIP_IMAGES,ie);let ns=b.isDataArrayTexture||b.isData3DTexture,ve=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let De=V.get(b),ui=V.get(F),Ee=V.get(De.__renderTarget),di=V.get(ui.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,Ee.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let is=0;is<Lt;is++)ns&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(b).__webglTexture,H,ie+is),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,V.get(F).__webglTexture,Tt,Fe+is)),I.blitFramebuffer(Ut,Kt,Pt,wt,Dt,me,Pt,wt,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||V.has(b)){let De=V.get(b),ui=V.get(F);v.bindFramebuffer(I.READ_FRAMEBUFFER,L),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let Ee=0;Ee<Lt;Ee++)ns?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.__webglTexture,H,ie+Ee):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,De.__webglTexture,H),ve?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ui.__webglTexture,Tt,Fe+Ee):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ui.__webglTexture,Tt),H!==0?I.blitFramebuffer(Ut,Kt,Pt,wt,Dt,me,Pt,wt,I.COLOR_BUFFER_BIT,I.NEAREST):ve?I.copyTexSubImage3D(Rt,Tt,Dt,me,Fe+Ee,Ut,Kt,Pt,wt):I.copyTexSubImage2D(Rt,Tt,Dt,me,Ut,Kt,Pt,wt);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ve?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Rt,Tt,Dt,me,Fe,Pt,wt,Lt,Se,Qe,Te.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Rt,Tt,Dt,me,Fe,Pt,wt,Lt,Se,Te.data):I.texSubImage3D(Rt,Tt,Dt,me,Fe,Pt,wt,Lt,Se,Qe,Te):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,Dt,me,Pt,wt,Se,Qe,Te.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,Dt,me,Te.width,Te.height,Se,Te.data):I.texSubImage2D(I.TEXTURE_2D,Tt,Dt,me,Pt,wt,Se,Qe,Te);v.pixelStorei(I.UNPACK_ROW_LENGTH,rn),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce),v.pixelStorei(I.UNPACK_SKIP_PIXELS,Mn),v.pixelStorei(I.UNPACK_SKIP_ROWS,zn),v.pixelStorei(I.UNPACK_SKIP_IMAGES,hi),Tt===0&&F.generateMipmaps&&I.generateMipmap(Rt),v.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){q=0,Y=0,ct=null,v.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Dd={type:"change"},lh={type:"start"},Nd={type:"end"},hl=new vi,Fd=new gn,Hx=Math.cos(70*Xr.DEG2RAD),He=new P,dn=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6,ul=class extends Nr{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ai.ROTATE,TWO:Ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new _n,this._lastTargetPosition=new P,this._quat=new _n().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xn,this._sphericalDelta=new Xn,this._scale=1,this._panOffset=new P,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new P,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wx.bind(this),this._onPointerDown=Vx.bind(this),this._onPointerUp=Xx.bind(this),this._onContextMenu=jx.bind(this),this._onMouseWheel=Yx.bind(this),this._onKeyDown=Zx.bind(this),this._onTouchStart=Jx.bind(this),this._onTouchMove=Kx.bind(this),this._onMouseDown=$x.bind(this),this._onMouseMove=qx.bind(this),this._interceptControlDown=Qx.bind(this),this._interceptControlUp=ty.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dd),this.update(),this.state=xe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=He.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(hl.origin.copy(this.object.position),hl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hl.direction))<Hx?this.object.lookAt(this.target):(Fd.setFromNormalAndCoplanarPoint(this.object.up,this.target),hl.intersectPlane(Fd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(Dd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?dn/60*this.autoRotateSpeed*t:dn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;He.copy(s).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Vx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Wx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Xx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nd),this.state=xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $x(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xe.DOLLY;break;case Ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xe.ROTATE}break;case Ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(lh)}function qx(n){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Yx(n){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(n.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Nd))}function Zx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Jx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xe.TOUCH_ROTATE;break;case Ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case Ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xe.TOUCH_DOLLY_PAN;break;case Ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(lh)}function Kx(n){switch(this._trackPointer(n),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xe.NONE}}function jx(n){this.enabled!==!1&&n.preventDefault()}function Qx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ty(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ud(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,a=0,o=Object.keys(n.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let M=0,E=o.length;M<E;M++){let _=o[M],S=n.attributes[_];l[_]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let w=n.morphAttributes[_];w&&(c[_]||(c[_]=[]),w.forEach((A,x)=>{let T=new A.array.constructor(A.count*A.itemSize);c[_][x]=new A.constructor(T,A.itemSize,A.normalized)}))}let f=t*.5,g=Math.log10(1/t),y=Math.pow(10,g),p=f*y;for(let M=0;M<r;M++){let E=i?i.getX(M):M,_="";for(let S=0,w=o.length;S<w;S++){let A=o[S],x=n.getAttribute(A),T=x.itemSize;for(let R=0;R<T;R++)_+=`${Math.trunc(x[d[R]](E)*y+p)},`}if(_ in e)h.push(e[_]);else{for(let S=0,w=o.length;S<w;S++){let A=o[S],x=n.getAttribute(A),T=n.morphAttributes[A],R=x.itemSize,D=l[A],U=c[A];for(let k=0;k<R;k++){let L=d[k],O=u[k];if(D[O](a,x[L](E)),T)for(let q=0,Y=T.length;q<Y;q++)U[q][O](a,T[q][L](E))}}e[_]=a,h.push(a),a++}}let m=n.clone();for(let M in n.attributes){let E=l[M];if(m.setAttribute(M,new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)),M in c)for(let _=0;_<c[M].length;_++){let S=c[M][_];m.morphAttributes[M][_]=new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)}}return m.setIndex(h),m}var K={sand:"#FFD89C",sandPad:"#FFE9C4",grass:"#7CCB5E",grass2:"#5FB552",sea:"#1D9CAE",shallow:"#62D9D2",trunk:"#9A6A44",leaf:"#4FB063",leaf2:"#7DD164",leaf3:"#3E9B57",rock:"#B9B0C9",cream:"#FFF8EC",coral:"#FF6F59",sun:"#FFC93C",plum:"#3B2C5A",blue:"#3FA7D6",purple:"#9B6DD6",pink:"#FF5C8A",red:"#E8504A",redDark:"#A8323A",wood:"#C98A55",woodDark:"#8A5A3B",orange:"#FF9A2E",gold:"#FFC93C",white:"#FFFFFF"},ch=new Map;function ey(n,t={}){let e=n+JSON.stringify(t);return ch.has(e)||ch.set(e,new ai({color:n,flatShading:!0,roughness:.82,metalness:0,...t})),ch.get(e)}var ft=(n,t,e)=>new Oe(n,ey(t,e));function ny(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Di=ny(20261027),Ke=(n,t)=>n+Di()*(t-n);function Bd(n,t,e=!1){n.deleteAttribute("normal"),n.deleteAttribute("uv");let i=Ud(n),s=i.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r),o=s.getY(r),l=s.getZ(r);if(Math.hypot(a,l)<.001)continue;let h=1+Ke(-t,t);s.setX(r,a*h),s.setZ(r,l*h),e||s.setY(r,o+Ke(-t,t)*.6)}return i.computeVertexNormals(),i}function iy(n){let t=ft(Bd(new ue(16.4,18.2,1.4,40,1),.06),K.sand);n.add(t);let e=ft(Bd(new ue(14.2,15,.9,40,1),.05,!0),K.grass);e.position.y=1.1,n.add(e),[].forEach(([s,r,a])=>{let o=ft(new _e(a,1),K.grass2);o.scale.set(1.6,.45,1.6),o.position.set(s,1.5,r),n.add(o)});let i=new Oe(new Ar(17.6,24,64),new Mi({color:K.shallow,transparent:!0,opacity:.5,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.16,i.userData.noShadow=!0,n.add(i)}function sy(n){let t=new qi(240,240,72,72);t.rotateX(-Math.PI/2);let e=new Oe(t,new ai({color:K.sea,flatShading:!0,roughness:.35,metalness:.05}));e.receiveShadow=!0,e.userData.noShadow=!0,n.add(e);let i=t.attributes.position.array.slice();return s=>{let r=t.attributes.position.array;for(let a=0;a<r.length;a+=3){let o=i[a],l=i[a+2];r[a+1]=Math.sin(o*.22+s*.9)*.14+Math.cos(l*.27+s*1.15)*.12}t.attributes.position.needsUpdate=!0}}function ry(n=4){let t=new le,e=6,i=0;for(let a=0;a<e;a++){let o=ft(new ue(.2-a*.015,.26-a*.015,n/e+.05,6),a%2?K.trunk:K.woodDark);i+=.09*a,o.position.set(i,(a+.5)*(n/e),0),o.rotation.z=-.06*a,t.add(o)}let s=new P(i+.1,n,0);for(let a=0;a<6;a++){let o=ft(new Wn(.42,2.3,4),a%2?K.leaf:K.leaf2);o.scale.set(1,1,.28),o.geometry.translate(0,1.15,0),o.position.copy(s),o.rotation.set(0,a/6*Math.PI*2,0),o.rotateZ(Math.PI/2+.55),t.add(o)}let r=ft(new _e(.2,0),K.woodDark);return r.position.copy(s).add(new P(.15,-.25,.15)),t.add(r),t}function ay(n=1,t=K.leaf){let e=new le,i=ft(new ue(.16,.24,1,6),K.trunk);i.position.y=.5;let s=ft(new _e(.85,0),t);return s.position.y=1.55,s.scale.set(1,1.15,1),e.add(i,s),e.scale.setScalar(n),e}function oy(n){let t=ft(new _r(n,0),K.rock);return t.scale.y=.6,t.rotation.set(Di(),Di()*6,Di()),t}function ly(){let n=new le,t=new ai({color:"#ffffff",flatShading:!0,roughness:1,emissive:"#ffffff",emissiveIntensity:.25}),e=3+(Di()*3|0);for(let i=0;i<e;i++){let s=new Oe(new _e(Ke(1,1.8),0),t);s.position.set(i*1.5-e*.7,Ke(-.3,.5),Ke(-.6,.6)),n.add(s)}return n.userData.noShadow=!0,n}function cy(){let n=new le,t=ft(new ue(.9,.55,.6,4,1),K.coral);t.rotation.y=Math.PI/4,t.scale.set(1.9,1,.8),t.position.y=.25;let e=ft(new ue(.06,.06,2.4,5),K.woodDark);e.position.y=1.5;let i=ft(new Wn(.9,1.9,3),K.cream);i.scale.z=.1,i.position.set(.45,1.6,0);let s=ft(new se(.4,.22,.03),K.sun);return s.position.set(.22,2.6,0),n.add(t,e,i,s),n}function hy(){let n=new le,t=ft(new ue(.6,1,4.4,7),K.trunk);t.position.y=2.2,n.add(t),[[-1,.4,.4,.9],[.9,.2,-.5,-.8]].forEach(([c,h,d,u])=>{let f=ft(new ue(.15,.35,1.4,5),K.trunk);f.position.set(c,h,d),f.rotation.z=u,n.add(f)});let e=ft(new ue(2.1,2.1,.25,8),K.wood);e.position.y=3.9;let i=ft(new se(1.8,1.4,1.6),K.sun);i.position.set(.1,4.75,.1);let s=ft(new Wn(1.6,1.2,4),K.coral);s.rotation.y=Math.PI/4,s.position.set(.1,6.05,.1);let r=ft(new se(.55,.9,.05),K.plum);r.position.set(.1,4.5,.93);let a=ft(new Cs(.24,10),K.cream);a.position.set(.95,4.95,.3),a.rotation.y=Math.PI/2,n.add(e,i,s,r,a);for(let c=0;c<12;c++){let h=c/12*Math.PI*2;if(Math.abs(Math.sin(h))>.95&&Math.cos(h)<0)continue;let d=ft(new se(.1,.45,.1),K.woodDark);d.position.set(Math.cos(h)*2,4.25,Math.sin(h)*2),n.add(d)}for(let c=0;c<6;c++){let h=ft(new se(.8,.08,.1),K.woodDark);h.position.set(.1,.6+c*.6,1.05),n.add(h)}[-.3,.5].forEach(c=>{let h=ft(new se(.08,3.8,.08),K.woodDark);h.position.set(c,1.95,1.05),n.add(h)}),[[0,7.4,0,2.2,K.leaf],[-1.7,6.7,-.6,1.6,K.leaf2],[1.7,6.9,-.8,1.7,K.leaf3],[.4,7.2,-1.8,1.5,K.leaf2]].forEach(([c,h,d,u,f])=>{let g=ft(new _e(u,0),f);g.position.set(c,h,d),n.add(g)});let o=ft(new ue(.04,.04,1.4,5),K.cream);o.position.set(.1,9.1,0);let l=ft(new Wn(.35,.8,3),K.coral);return l.rotation.z=-Math.PI/2,l.scale.z=.2,l.position.set(.5,9.55,0),n.add(o,l),n.userData.flag=l,n}var Od={hayvanlar(){let n=new le,t=ft(new se(2.4,1.7,2),K.red);t.position.y=.85;let e=ft(new ue(1.55,1.55,2.25,3),K.redDark);e.rotation.x=-Math.PI/2,e.position.y=1.7+.77;let i=ft(new se(.9,1.1,.06),K.cream);i.position.set(0,.55,1.02);let s=ft(new se(1.2,.1,.04),K.redDark);s.rotation.z=.88,s.position.set(0,.55,1.06);let r=ft(new se(.5,.45,.06),K.cream);r.position.set(0,1.95,.6+.5),n.add(t,e,i,s,r);let a=new le,o=ft(new _e(.48,0),K.cream);o.scale.set(1.2,.95,1),o.position.y=.62;let l=ft(new se(.3,.32,.3),K.plum);l.position.set(.55,.78,0),a.add(o,l),[[-.25,-.2],[.25,-.2],[-.25,.2],[.25,.2]].forEach(([h,d])=>{let u=ft(new se(.1,.35,.1),K.plum);u.position.set(h,.18,d),a.add(u)}),a.position.set(1.9,0,1),a.rotation.y=-.6,n.add(a),n.userData.sheep=a;for(let h=0;h<4;h++){let d=ft(new se(.12,.6,.12),K.cream);d.position.set(-1.9+h*.01,.3,-.8+h*.6),n.add(d)}let c=ft(new se(.06,.1,1.9),K.cream);return c.position.set(-1.9,.42,.1),n.add(c),n},balonlar(){let n=new le,t=ft(new se(1.2,.6,.8),K.blue);t.position.y=.45,n.add(t),[-.4,.4].forEach(s=>{let r=ft(new ue(.22,.22,.1,10),K.plum);r.rotation.x=Math.PI/2,r.position.set(s,.18,.42),n.add(r)});let e=new P(0,.8,0),i=[];return[[K.coral,-.75,2.6,.1],[K.sun,.05,3.15,-.15],[K.purple,.8,2.55,.15],[K.pink,.35,2.2,.55]].forEach(([s,r,a,o],l)=>{let c=ft(new Yi(.5,12,10),s,{roughness:.4});c.scale.set(1,1.18,1),c.position.set(r,a,o);let h=new Be().setFromPoints([e,new P(r,a-.6,o)]),d=new pr(h,new As({color:K.plum}));n.add(c,d),i.push({b:c,line:d,base:new P(r,a,o),phase:l*1.3})}),n.userData.balloons=i,n.userData.anchor=e,n},sayilar(){let n=new le,t=ft(new ue(.25,.38,1.7,6),K.trunk);t.position.y=.85;let e=ft(new _e(1.35,1),K.leaf);e.position.y=2.45,n.add(t,e),[[.5,.2,.85],[-.6,.4,.7],[.9,-.1,.1],[-.2,-.3,.95],[.1,.7,.7],[-.9,-.1,.3],[.6,.6,-.4]].forEach(r=>{let a=new P(...r).normalize().multiplyScalar(1.3),o=ft(new _e(.2,1),K.orange,{roughness:.5});o.position.set(a.x,2.45+a.y,a.z),n.add(o)});let s=ft(new ue(.55,.4,.45,10),K.wood);return s.position.set(1.3,.23,.8),n.add(s),[[1.15,.85],[1.45,.75],[1.3,.95]].forEach(([r,a],o)=>{let l=ft(new _e(.2,1),K.orange,{roughness:.5});l.position.set(r,.55+(o===2?.15:0),a),n.add(l)}),n},sekiller(){let n=new le,t=ft(new se(.9,.9,.9),K.blue);t.position.set(-.7,.45,0),t.rotation.y=.4;let e=ft(new Wn(.55,1.2,4),K.sun);e.position.set(.75,.6,-.3);let i=ft(new _e(.48,1),K.coral,{roughness:.5});i.position.set(.3,.48,.75);let s=ft(new Fs(.38,.15,6,14),K.leaf2);s.position.set(-.7,1.32,0),s.rotation.y=.4;let r=ft(new Ds(.35,0),K.purple);return r.position.set(.75,1.6,-.3),n.add(t,e,i,s,r),n.userData.spin=[s,r],n},hafiza(){let n=new le,t=ft(new se(1.7,.85,1.1),K.woodDark);t.position.y=.43,n.add(t),[-.55,.55].forEach(s=>{let r=ft(new se(.14,.88,1.14),K.gold,{roughness:.35,metalness:.3});r.position.set(s,.43,0),n.add(r)});let e=new le;e.position.set(0,.86,-.55);let i=ft(new se(1.7,.3,1.1),K.woodDark);return i.position.set(0,.15,.55),e.add(i),e.rotation.x=-1.05,n.add(e),[[-.4,K.gold],[0,K.pink],[.4,K.blue],[-.15,K.gold],[.2,K.gold]].forEach(([s,r],a)=>{let o=ft(a<3?new Ds(.17,0):new ue(.15,.15,.06,10),r,{roughness:.25,metalness:.4,emissive:r,emissiveIntensity:.25});o.position.set(s,.92+a%2*.06,a<3?.1:-.15),n.add(o)}),[[1.35,K.purple,-.25],[1.75,K.cream,.2]].forEach(([s,r,a])=>{let o=ft(new se(.6,.85,.06),r);o.position.set(s,.42,.45),o.rotation.set(-.2,a,a*.5),n.add(o)}),n.userData.lid=e,n},muzik(){let n=new le,t=ft(new ue(.75,.75,.85,14),K.red);t.position.y=.43;let e=ft(new ue(.78,.78,.06,14),K.cream);e.position.y=.88;let i=ft(new ue(.79,.79,.08,14),K.sun);i.position.y=.06,n.add(t,e,i),[.4,-.4].forEach((o,l)=>{let c=ft(new ue(.04,.04,1,5),K.wood);c.position.set(l?-.15:.15,1.15,0),c.rotation.z=o,n.add(c)});let s=new le;[K.coral,K.orange,K.sun,K.leaf2,K.blue,K.purple].forEach((o,l)=>{let c=ft(new se(.22,.1,.9-l*.08),o);c.position.set(l*.26,.42,0),s.add(c)});let r=ft(new se(1.6,.35,.12),K.woodDark);r.position.set(.65,.2,0),s.add(r),s.position.set(-2.1,0,.6),s.rotation.y=.3,n.add(s);let a=[];return[[K.pink,-.6,2.2],[K.blue,.7,2.6]].forEach(([o,l,c],h)=>{let d=new le,u=ft(new Yi(.22,10,8),o);u.scale.set(1.25,.9,.8);let f=ft(new se(.06,.75,.06),K.plum);f.position.set(.22,.36,0),d.add(u,f),d.position.set(l,c,.2),n.add(d),a.push({n:d,y:c,phase:h*1.7})}),n.userData.notes=a,n}};function kd({canvas:n,badgeLayer:t,zones:e,onSelect:i,onTreehouse:s}){let r=new ol({canvas:n,antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio||1,2)),r.shadowMap.enabled=!0,r.shadowMap.type=po;let a=new ur,o=document.createElement("canvas");o.width=4,o.height=256;let l=o.getContext("2d"),c=l.createLinearGradient(0,0,0,256);c.addColorStop(0,"#5EC3E6"),c.addColorStop(.55,"#A9E4EE"),c.addColorStop(1,"#FFE6BE"),l.fillStyle=c,l.fillRect(0,0,4,256);let h=new Xi(o);h.colorSpace=Ye,a.background=h,a.fog=new hr("#CDEFF0",75,180);let d=new nn(40,1,.1,400);a.add(new Pr("#D6F4FF","#FFD9A8",1.35));let u=new Lr("#FFF1D6",2.1);u.position.set(14,22,10),u.castShadow=!0,u.shadow.mapSize.set(1536,1536),Object.assign(u.shadow.camera,{left:-21,right:21,top:21,bottom:-21,near:1,far:80}),u.shadow.bias=-.0015,a.add(u);let f=new Oe(new Cs(6,28),new Mi({color:"#FFE38A",fog:!1}));f.position.set(70,48,-120),a.add(f),iy(a);let g=sy(a),y=hy();y.position.y=1.55,a.add(y);for(let W=0;W<30;W++){let J=W/30*Math.PI*2,nt=ft(new ue(.32,.36,.1,6),K.cream);nt.position.set(Math.sin(J)*5,1.58,Math.cos(J)*5),nt.rotation.y=Di()*3,a.add(nt)}let p=e.map((W,J)=>{let nt=J/e.length*Math.PI*2,mt=J%2?11.8:8.2,Ft=new le,X=ft(new ue(2.1,2.25,.14,24),K.sandPad);X.position.y=.04,Ft.add(X);let j=Od[W.id]();return j.scale.setScalar(.92),Ft.add(j),Ft.position.set(Math.sin(nt)*mt,1.55,Math.cos(nt)*mt),Ft.rotation.y=nt,Ft.userData.zone=W.id,a.add(Ft),{...W,group:Ft,lm:j,angle:nt,anchor:new P(Math.sin(nt)*mt,1.55+3.1,Math.cos(nt)*mt)}});for(let W=0;W<11;W++){let J=W/11*Math.PI*2+.3,nt=ry(Ke(3.4,4.6)),mt=Ke(15.3,16.2);nt.position.set(Math.sin(J)*mt,.65,Math.cos(J)*mt),nt.rotation.y=-J+Math.PI/2,a.add(nt)}for(let W=0;W<12;W++){let J=W/12*Math.PI*2+Math.PI/12+Ke(-.06,.06),nt=ay(Ke(.7,1.1),[K.leaf,K.leaf2,K.leaf3][W%3]),mt=W%2?Ke(9.8,10.4):Ke(3.2,3.7);nt.position.set(Math.sin(J)*mt,1.55,Math.cos(J)*mt),a.add(nt)}for(let W=0;W<18;W++){let J=Di()*Math.PI*2,nt=Ke(16.4,18.6),mt=oy(Ke(.3,.75));mt.position.set(Math.sin(J)*nt,.5,Math.cos(J)*nt),a.add(mt)}let m=[K.pink,K.sun,K.cream,K.purple];for(let W=0;W<70;W++){let J=Di()*Math.PI*2,nt=Ke(2.6,14);if(p.some(X=>Math.hypot(Math.sin(J)*nt-X.group.position.x,Math.cos(J)*nt-X.group.position.z)<2.6)||Math.abs(nt-5)<.6)continue;let Ft=ft(new _e(.13,0),m[W%4]);Ft.position.set(Math.sin(J)*nt,1.62,Math.cos(J)*nt),a.add(Ft)}let M=[];for(let W=0;W<6;W++){let J=ly(),nt=W/6*Math.PI*2,mt=Ke(30,48);J.position.set(Math.sin(nt)*mt,Ke(9,14),Math.cos(nt)*mt),J.userData.a=nt,J.userData.r=mt,J.userData.s=Ke(.012,.03),a.add(J),M.push(J)}let E=cy();a.add(E),a.traverse(W=>{if(W.isMesh){let J=W,nt=!1;for(;J;)J.userData.noShadow&&(nt=!0),J=J.parent;nt||(W.castShadow=!0,W.receiveShadow=!0)}});let _=new ul(d,n);_.enableDamping=!0,_.dampingFactor=.08,_.enablePan=!1,_.rotateSpeed=.55,_.zoomSpeed=.6,_.autoRotate=!0,_.autoRotateSpeed=.45,_.target.set(0,2.6,0);let S={dist:26,polar:1.02};function w(){let W=n.clientWidth||innerWidth,J=n.clientHeight||innerHeight;r.setSize(W,J,!1);let nt=W/J,mt=nt<.85;d.fov=mt?50:40,d.aspect=nt,d.updateProjectionMatrix();let Ft=Math.tan(Xr.degToRad(d.fov/2)),X=(mt?31.5:36)/(2*Ft*nt),j=(mt?24:33)/(2*Ft);S={dist:Math.max(X,j),polar:mt?.6:.95},_.minDistance=S.dist*.62,_.maxDistance=S.dist*1.2,_.minPolarAngle=.42,_.maxPolarAngle=1.22}let A=new Xn;function x(W,J,nt,mt=_.target){A.set(W,J,nt),d.position.setFromSpherical(A).add(mt),d.lookAt(mt)}let T=null;function R({dist:W,polar:J,az:nt,target:mt,ms:Ft=900,done:X}){let j=_.target.clone(),lt=d.position.clone().sub(j),ht=new Xn().setFromVector3(lt),pt=nt-ht.theta;for(;pt>Math.PI;)pt-=Math.PI*2;for(;pt<-Math.PI;)pt+=Math.PI*2;T={t0:performance.now(),ms:Ft,s0:ht,dist:W,polar:J,dAz:pt,fromT:j,toT:mt||j,done:X}}function D(W){if(!T)return!1;let J=Math.min(1,(W-T.t0)/T.ms),nt=J<.5?4*J*J*J:1-Math.pow(-2*J+2,3)/2,mt=T.fromT.clone().lerp(T.toT,nt);if(_.target.copy(mt),x(T.s0.radius+(T.dist-T.s0.radius)*nt,T.s0.phi+(T.polar-T.s0.phi)*nt,T.s0.theta+T.dAz*nt,mt),J>=1){let Ft=T.done;T=null,Ft&&Ft()}return!0}let U=p.map(W=>{let J=document.createElement("button");return J.className="zone-badge",J.setAttribute("aria-label",W.title.tr),J.innerHTML=`<span class="zb-ico">${W.icon}</span><span class="zb-name">${W.titleText()}</span>`,J.addEventListener("click",()=>at(W.id)),t.append(J),{z:W,b:J}});function k(){U.forEach(({z:W,b:J})=>{J.querySelector(".zb-name").textContent=W.titleText(),J.setAttribute("aria-label",W.titleText())})}let L=new P;function O(){let W=n.clientWidth,J=n.clientHeight,nt=new dt(d.position.x,d.position.z).normalize();U.forEach(({z:mt,b:Ft})=>{L.copy(mt.anchor).project(d);let X=(L.x*.5+.5)*W,j=(-L.y*.5+.5)*J,lt=new dt(mt.anchor.x,mt.anchor.z).normalize().dot(nt),ht=lt<-.25;Ft.style.transform=`translate(${X.toFixed(1)}px, ${j.toFixed(1)}px) translate(-50%, -100%) scale(${(.7+.3*(lt+1)/2).toFixed(2)})`,Ft.classList.toggle("behind",ht),Ft.classList.toggle("far",lt<.25),Ft.style.zIndex=String(Math.round((lt+1)*100)),Ft.style.visibility=L.z>1?"hidden":"visible"})}let q=new Dr,Y=new dt,ct=null;n.addEventListener("pointerdown",W=>{ct={x:W.clientX,y:W.clientY,t:performance.now()}}),n.addEventListener("pointerup",W=>{if(!ct)return;let J=Math.hypot(W.clientX-ct.x,W.clientY-ct.y),nt=performance.now()-ct.t<450;if(ct=null,J>10||!nt||it)return;let mt=n.getBoundingClientRect();Y.set((W.clientX-mt.left)/mt.width*2-1,-((W.clientY-mt.top)/mt.height)*2+1),q.setFromCamera(Y,d);let Ft=q.intersectObjects([y,...p.map(j=>j.group)],!0);if(!Ft.length)return;let X=Ft[0].object;for(;X&&!X.userData.zone&&X!==y;)X=X.parent;X===y?s&&s():X&&at(X.userData.zone)});let Z=null;_.addEventListener("start",()=>{_.autoRotate=!1,clearTimeout(Z)}),_.addEventListener("end",()=>{clearTimeout(Z),Z=setTimeout(()=>_.autoRotate=!0,7e3)});let it=!1;function at(W){if(it)return;let J=p.find(mt=>mt.id===W);if(!J)return;it=!0,_.enabled=!1,_.autoRotate=!1;let nt=J.group.position.clone().add(new P(0,1.3,0));i(W,"start"),R({dist:9,polar:1.05,az:J.angle,target:nt,ms:850,done:()=>i(W,"enter")})}let It=!1,Ct=0,oe=0,te=new Fr;function re(W){if(!It)return;Ct=requestAnimationFrame(re);let J=te.getElapsedTime(),nt=Math.min(.05,(W-oe)/1e3||.016);oe=W,g(J),D(W)||_.update(nt),M.forEach(X=>{X.userData.a+=X.userData.s*nt,X.position.x=Math.sin(X.userData.a)*X.userData.r,X.position.z=Math.cos(X.userData.a)*X.userData.r});let Ft=J*.06;E.position.set(Math.sin(Ft)*25,Math.sin(J*1.4)*.12,Math.cos(Ft)*21),E.rotation.y=Ft+Math.PI,E.rotation.z=Math.sin(J*1.2)*.06,y.userData.flag.rotation.x=Math.sin(J*3)*.25,f.lookAt(d.position),p.forEach(X=>{let j=X.lm.userData;j.balloons&&j.balloons.forEach(({b:lt,line:ht,base:pt,phase:zt})=>{lt.position.set(pt.x+Math.sin(J*.8+zt)*.12,pt.y+Math.sin(J*1.3+zt)*.15,pt.z),ht.geometry.setFromPoints([j.anchor,new P(lt.position.x,lt.position.y-.6,lt.position.z)])}),j.notes&&j.notes.forEach(({n:lt,y:ht,phase:pt})=>{lt.position.y=ht+Math.sin(J*2+pt)*.2,lt.rotation.z=Math.sin(J*1.5+pt)*.25}),j.spin&&j.spin.forEach((lt,ht)=>lt.rotation.y=J*(ht?1.4:.9)),j.lid&&(j.lid.rotation.x=-1.05+Math.sin(J*1.6)*.12),j.sheep&&(j.sheep.position.y=Math.abs(Math.sin(J*2.2))*.12),j.moles&&j.moles.forEach((lt,ht)=>{lt.position.y=-.35+Math.max(0,Math.sin(J*1.8+ht*2.1))*.55}),j.bear&&(j.bear.rotation.z=Math.sin(J*1.6)*.07),j.brush&&(j.brush.rotation.z=.5+Math.sin(J*3)*.25),j.beads&&j.beads.forEach((lt,ht)=>{lt.position.x=lt.userData.x+Math.sin(J*1.2+ht*.7)*.08})}),r.render(a,d),O()}function tt(){w()}addEventListener("resize",tt),w(),x(S.dist*1.9,.55,-1.4);let rt=!0;return{start(){It||(It=!0,w(),oe=performance.now(),Ct=requestAnimationFrame(re),rt&&(rt=!1,_.enabled=!1,R({dist:S.dist,polar:S.polar,az:.35,ms:2600,done:()=>{_.enabled=!0}})))},stop(){It=!1,cancelAnimationFrame(Ct)},debug(){let W=new P(0,1.5,0).project(d);return{c:[W.x,W.y],cam:d.position.toArray().map(J=>+J.toFixed(1)),t:_.target.toArray(),fov:d.fov,aspect:d.aspect}},back(){it=!1,_.enabled=!1;let W=d.position.clone().sub(_.target),J=new Xn().setFromVector3(W).theta;R({dist:S.dist,polar:S.polar,az:J,target:new P(0,2.6,0),ms:900,done:()=>{_.enabled=!0,Z=setTimeout(()=>_.autoRotate=!0,5e3)}})},refreshBadgeNames:k,select:at}}function uy(n,t){let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,128,128),i.strokeStyle=K.plum,i.lineWidth=10,i.strokeRect(5,5,118,118),i.font="700 84px Fredoka, system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.lineWidth=8,i.strokeText(n,64,70),i.fillStyle="#fff",i.fillText(n,64,70);let s=new Xi(e);return s.colorSpace=Ye,s}function dl(n,t,e=1){let i=new ai({map:uy(n,t),roughness:.75});return new Oe(new se(e,e,e),i)}function hh(n,t=1){let e=new Is;e.moveTo(-1,-1),e.lineTo(1,-1),e.lineTo(1,-.32),e.absarc(1,0,.32,-Math.PI/2,Math.PI/2,!1),e.lineTo(1,1),e.lineTo(.32,1),e.absarc(0,1,.32,0,Math.PI,!1),e.lineTo(-1,1),e.lineTo(-1,-1);let i=new Tr(e,{depth:.3,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1,curveSegments:8});i.center();let s=ft(i,n);return s.scale.setScalar(t),s}function dy(){let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");for(let i=0;i<8;i++)for(let s=0;s<8;s++)t.fillStyle=(s+i)%2?"#FFFFFF":"#FF6F59",t.fillRect(s*8,i*8,8,8);let e=new Xi(n);return e.colorSpace=Ye,e.magFilter=Ue,e}Object.assign(Od,{boyama(){let n=new le;[[-.55,.25],[.55,.25],[0,-.5]].forEach(([r,a],o)=>{let l=ft(new se(.1,2.6,.1),K.woodDark);l.position.set(r*.8,1.2,a*.8),l.rotation.set(a>0?-.18:.3,0,-r*.22),n.add(l)});let t=ft(new se(1.8,1.4,.08),K.cream);t.position.set(0,1.75,.3),t.rotation.x=-.18,n.add(t),[[K.red,-.45,1.95,.32],[K.sun,.2,2.05,.28],[K.blue,.45,1.55,.25],[K.leaf2,-.2,1.5,.3],[K.purple,.05,1.75,.22]].forEach(([r,a,o,l])=>{let c=ft(new _e(l,0),r);c.scale.z=.15,c.position.set(a,o,.37),c.rotation.x=-.18,n.add(c)}),[[K.red,1.3,.6],[K.sun,1.55,.05],[K.blue,1.1,-.35]].forEach(([r,a,o])=>{let l=ft(new ue(.25,.22,.34,10),K.cream);l.position.set(a,.17,o);let c=ft(new ue(.22,.22,.05,10),r);c.position.set(a,.33,o),n.add(l,c)});let e=new le,i=ft(new ue(.05,.05,1.1,6),K.wood),s=ft(new Wn(.09,.26,6),K.coral);return s.position.y=.66,e.add(i,s),e.position.set(1.3,.9,.6),n.add(e),n.userData.brush=e,n},harfler(){let n=new le,t=dl("A",K.coral,1.1);t.position.set(-.6,.55,0),t.rotation.y=.25;let e=dl("B",K.blue,1.1);e.position.set(.6,.55,.1),e.rotation.y=-.2;let i=dl("C",K.leaf,1);i.position.set(0,1.6,.05),i.rotation.y=.1;let s=dl("\xC7",K.sun,.8);return s.position.set(1.35,.4,.9),s.rotation.y=-.6,n.add(t,e,i,s),n},yapboz(){let n=new le,t=hh(K.coral,.85);t.position.set(-.2,1.05,0),t.rotation.set(-.15,.2,.08);let e=hh(K.sun,.55);e.rotation.x=-Math.PI/2,e.position.set(1.1,.12,.7);let i=hh(K.blue,.55);return i.rotation.set(-Math.PI/2,0,1.2),i.position.set(-1.3,.12,.8),n.add(t,e,i),n},oruntu(){let n=new le;[-1.1,1.1].forEach(r=>{let a=ft(new se(.16,2.2,.16),K.woodDark);a.position.set(r,1.1,0),n.add(a)});let t=ft(new se(2.5,.16,.2),K.woodDark);t.position.y=2.2;let e=ft(new se(2.7,.18,.7),K.wood);e.position.y=.09,n.add(t,e);let i=[],s=[[K.coral,K.sun],[K.blue,K.blue,K.pink],[K.leaf2,K.purple,K.sun]];return[.65,1.2,1.75].forEach((r,a)=>{let o=ft(new ue(.03,.03,2.2,5),K.cream);o.rotation.z=Math.PI/2,o.position.y=r,n.add(o);for(let l=0;l<6;l++){let c=ft(new Yi(.17,10,8),s[a][l%s[a].length],{roughness:.4});c.scale.x=.8;let h=-.85+l*.3;c.position.set(h,r,0),c.userData.x=h,n.add(c),i.push(c)}}),n.userData.beads=i,n},besle(){let n=new le,t=new Oe(new se(2.8,.05,2.2),new ai({map:dy(),roughness:.9}));t.position.y=.03,t.rotation.y=.25,n.add(t);let e=new le,i=ft(new _e(.62,1),"#A86B45");i.scale.set(1,1.1,.9),i.position.y=.62;let s=ft(new _e(.4,1),"#E7C29A");s.scale.set(1,1.1,.5),s.position.set(0,.58,.38);let r=ft(new _e(.45,1),"#A86B45");r.position.y=1.45;let a=ft(new _e(.2,1),"#E7C29A");a.scale.z=.7,a.position.set(0,1.38,.38);let o=ft(new _e(.07,0),K.plum);o.position.set(0,1.44,.53),e.add(i,s,r,a,o),[-.32,.32].forEach(u=>{let f=ft(new _e(.15,0),"#A86B45");f.position.set(u,1.8,0);let g=ft(new _e(.05,0),K.plum);g.position.set(u*.45,1.55,.4);let y=ft(new _e(.17,0),"#A86B45");y.position.set(u*1.5,.15,.4),e.add(f,g,y)}),e.position.set(-.4,.05,-.2),n.add(e),n.userData.bear=e;let l=ft(new ue(.45,.35,.4,10),K.wood);l.position.set(.9,.25,.4);let c=ft(new _e(.18,1),K.red,{roughness:.5});c.position.set(.85,.55,.4);let h=ft(new _e(.16,1),"#B5D334",{roughness:.5});h.position.set(1.05,.52,.25);let d=ft(new Fs(.22,.06,6,10,Math.PI*.8),K.sun);return d.position.set(.3,.12,.9),d.rotation.x=-Math.PI/2,n.add(l,c,h,d),n},saklambac(){let n=new le,t=[];return[[-1,-.3],[.9,-.5],[0,.8]].forEach(([e,i],s)=>{let r=ft(new ue(.5,.75,.32,10),K.woodDark);r.position.set(e,.16,i);let a=ft(new ue(.4,.4,.02,10),K.plum);a.position.set(e,.33,i),n.add(r,a);let o=new le,l=ft(new _e(.36,1),"#A86B45");l.scale.y=1.15;let c=ft(new _e(.08,0),K.pink);c.position.set(0,.05,.34),o.add(l,c),[-.13,.13].forEach(d=>{let u=ft(new _e(.05,0),K.plum);u.position.set(d,.17,.3),o.add(u)});let h=new le;h.add(o),h.position.set(e,.33,i),n.add(h),t.push(o)}),n.userData.moles=t,n}});var Wt="#3B2C5A",_t=`stroke="${Wt}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,Ce=`stroke="${Wt}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`,Re=(n,t="0 0 120 120",e="")=>`<svg viewBox="${t}" xmlns="http://www.w3.org/2000/svg" class="art"${e?` role="img" aria-label="${e}"`:' aria-hidden="true"'}>${n}</svg>`,zd=(n,t,e=6.5)=>`<ellipse cx="${n}" cy="${t}" rx="${e}" ry="${(e*1.15).toFixed(1)}" fill="${Wt}"/><circle cx="${n+2}" cy="${t-e*.42}" r="${(e*.38).toFixed(1)}" fill="#fff"/>`,Bn=(n,t=44,e=76,i=6.5)=>`<g class="blink">${zd(t,n,i)}${zd(e,n,i)}</g>`,Fi=(n,t=34,e=86,i="#FF8FA3")=>`<ellipse cx="${t}" cy="${n}" rx="7" ry="4.5" fill="${i}" opacity=".6"/><ellipse cx="${e}" cy="${n}" rx="7" ry="4.5" fill="${i}" opacity=".6"/>`,uh=n=>`<path d="M60 ${n} v4 M60 ${n+4} q-5 5 -10 1 M60 ${n+4} q5 5 10 1" fill="none" ${_t}/>`;function fl(n,t,e,i,s,r=-Math.PI/2){let a=[];for(let o=0;o<e*2;o++){let l=o%2?s:i,c=r+o*Math.PI/e;a.push(`${(n+l*Math.cos(c)).toFixed(1)},${(t+l*Math.sin(c)).toFixed(1)}`)}return a.join(" ")}var fy={kedi:()=>`
    <path d="M24 52 L27 12 L55 34 Z" fill="#FF9F45" ${_t}/><path d="M96 52 L93 12 L65 34 Z" fill="#FF9F45" ${_t}/>
    <path d="M31 40 L32 23 L45 33Z" fill="#FFC1CC"/><path d="M89 40 L88 23 L75 33Z" fill="#FFC1CC"/>
    <ellipse cx="60" cy="68" rx="42" ry="36" fill="#FF9F45" ${_t}/>
    <path d="M60 35 v9 M49 37 l2 8 M71 37 l-2 8" stroke="#E07B1F" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="60" cy="83" rx="17" ry="11" fill="#FFE3C2"/>
    ${Bn(64)}${Fi(80,32,88)}
    <path d="M55 76 h10 l-5 6 z" fill="#FF6F91" ${Ce}/>
    <path d="M60 82 q-5 6 -10 2 M60 82 q5 6 10 2" fill="none" ${Ce}/>
    <path d="M30 80 L12 76 M30 86 L12 90 M90 80 L108 76 M90 86 L108 90" ${Ce}/>`,kopek:()=>`
    <ellipse cx="60" cy="64" rx="38" ry="38" fill="#F2C48D" ${_t}/>
    <ellipse cx="77" cy="57" rx="12" ry="11" fill="#D99A5B"/>
    <ellipse cx="22" cy="64" rx="13" ry="27" fill="#8A5A3B" ${_t} transform="rotate(18 22 64)"/>
    <ellipse cx="98" cy="64" rx="13" ry="27" fill="#8A5A3B" ${_t} transform="rotate(-18 98 64)"/>
    <ellipse cx="60" cy="83" rx="21" ry="15" fill="#FFF1DE"/>
    ${Bn(58,45,76)}
    <path d="M54 88 q6 12 12 0 z" fill="#FF6F91" ${Ce}/>
    <path d="M60 80 v6 M60 86 q-6 5 -11 1 M60 86 q6 5 11 1" fill="none" ${Ce}/>
    <ellipse cx="60" cy="76" rx="9" ry="6.5" fill="${Wt}"/><ellipse cx="57" cy="74" rx="3" ry="1.8" fill="#fff" opacity=".7"/>`,inek:()=>`
    <path d="M36 34 q-9 -12 -3 -22 q5 11 13 15z" fill="#FFF1DE" ${_t}/><path d="M84 34 q9 -12 3 -22 q-5 11 -13 15z" fill="#FFF1DE" ${_t}/>
    <ellipse cx="18" cy="52" rx="15" ry="8" fill="#fff" ${_t} transform="rotate(-15 18 52)"/>
    <ellipse cx="102" cy="52" rx="15" ry="8" fill="#fff" ${_t} transform="rotate(15 102 52)"/>
    <ellipse cx="60" cy="60" rx="37" ry="37" fill="#fff" ${_t}/>
    <path d="M30 50 q6 -18 22 -14 q6 12 -6 18 q-12 5 -16 -4z" fill="${Wt}" opacity=".85"/>
    <ellipse cx="84" cy="66" rx="8" ry="6" fill="${Wt}" opacity=".85"/>
    ${Bn(58,46,75)}
    <ellipse cx="60" cy="88" rx="27" ry="17" fill="#FFB3C1" ${_t}/>
    <ellipse cx="50" cy="88" rx="3.5" ry="5" fill="${Wt}"/><ellipse cx="70" cy="88" rx="3.5" ry="5" fill="${Wt}"/>`,koyun:()=>{let n=[];for(let i=0;i<11;i++){let s=i/11*Math.PI*2;n.push([60+Math.cos(s)*36,58+Math.sin(s)*33])}let t=[[48,44],[60,40],[72,44]],e=(i,s,r)=>i.map(([a,o])=>`<circle cx="${a.toFixed(1)}" cy="${o.toFixed(1)}" r="${s}" fill="#FFF8EC" ${r}/>`).join("");return`
      ${e(n,15,_t)}<circle cx="60" cy="58" r="36" fill="#FFF8EC"/>${e(n,15,"")}
      <ellipse cx="24" cy="70" rx="13" ry="7" fill="#6B5566" ${_t} transform="rotate(25 24 70)"/>
      <ellipse cx="96" cy="70" rx="13" ry="7" fill="#6B5566" ${_t} transform="rotate(-25 96 70)"/>
      <ellipse cx="60" cy="72" rx="24" ry="28" fill="#F6D7C3" ${_t}/>
      ${e(t,10,_t)}${e(t,10,"")}
      ${Bn(70,51,69,5.5)}${Fi(83,44,76)}
      <path d="M55 86 q5 5 10 0" fill="none" ${_t}/>`},aslan:()=>`
    <polygon points="${fl(60,62,14,54,42)}" fill="#E8781E" ${_t}/>
    <circle cx="36" cy="38" r="10" fill="#FFC85C" ${_t}/><circle cx="84" cy="38" r="10" fill="#FFC85C" ${_t}/>
    <circle cx="36" cy="38" r="5" fill="#F7A73C"/><circle cx="84" cy="38" r="5" fill="#F7A73C"/>
    <circle cx="60" cy="64" r="32" fill="#FFC85C" ${_t}/>
    <ellipse cx="52" cy="81" rx="10" ry="8" fill="#FFF1DE"/><ellipse cx="68" cy="81" rx="10" ry="8" fill="#FFF1DE"/>
    ${Bn(60,48,72,6)}
    <path d="M53 72 h14 l-7 7z" fill="#8A4B2A" ${Ce}/>
    ${uh(79)}`,fil:()=>`
    <ellipse cx="24" cy="60" rx="22" ry="29" fill="#A9BED3" ${_t}/><ellipse cx="96" cy="60" rx="22" ry="29" fill="#A9BED3" ${_t}/>
    <ellipse cx="26" cy="62" rx="13" ry="19" fill="#F5B7C6"/><ellipse cx="94" cy="62" rx="13" ry="19" fill="#F5B7C6"/>
    <ellipse cx="60" cy="56" rx="31" ry="33" fill="#A9BED3" ${_t}/>
    <path d="M60 70 q0 26 16 28" fill="none" stroke="${Wt}" stroke-width="22" stroke-linecap="round"/>
    <path d="M60 70 q0 26 16 28" fill="none" stroke="#A9BED3" stroke-width="15" stroke-linecap="round"/>
    <path d="M55 84 h10 M57 91 h10" stroke="#7F97AE" stroke-width="2.5" stroke-linecap="round"/>
    ${Bn(54,47,73)}${Fi(68,38,82)}`,kurbaga:()=>`
    <circle cx="36" cy="38" r="17" fill="#7ACB5A" ${_t}/><circle cx="84" cy="38" r="17" fill="#7ACB5A" ${_t}/>
    <ellipse cx="60" cy="70" rx="47" ry="32" fill="#7ACB5A" ${_t}/>
    <circle cx="36" cy="38" r="17" fill="#7ACB5A"/><circle cx="84" cy="38" r="17" fill="#7ACB5A"/>
    <ellipse cx="60" cy="72" rx="44" ry="28" fill="#7ACB5A"/>
    <circle cx="36" cy="36" r="11" fill="#fff" ${Ce}/><circle cx="84" cy="36" r="11" fill="#fff" ${Ce}/>
    ${Bn(37,37,83,5.5)}
    <circle cx="54" cy="60" r="2" fill="${Wt}"/><circle cx="66" cy="60" r="2" fill="${Wt}"/>
    <path d="M28 70 q32 26 64 0" fill="none" ${_t}/>
    ${Fi(74,24,96)}`,ayi:()=>`
    <circle cx="28" cy="32" r="14" fill="#A86B45" ${_t}/><circle cx="92" cy="32" r="14" fill="#A86B45" ${_t}/>
    <circle cx="28" cy="32" r="7" fill="#E7B48A"/><circle cx="92" cy="32" r="7" fill="#E7B48A"/>
    <ellipse cx="60" cy="64" rx="41" ry="37" fill="#A86B45" ${_t}/>
    <ellipse cx="60" cy="81" rx="19" ry="14" fill="#E7C29A"/>
    ${Bn(60)}${Fi(76,30,90)}
    <ellipse cx="60" cy="74" rx="8.5" ry="5.5" fill="${Wt}"/>
    ${uh(79)}`,tavsan:()=>`
    <ellipse cx="43" cy="28" rx="11" ry="27" fill="#F4F1F6" ${_t} transform="rotate(-8 43 28)"/>
    <ellipse cx="77" cy="28" rx="11" ry="27" fill="#F4F1F6" ${_t} transform="rotate(8 77 28)"/>
    <ellipse cx="43" cy="30" rx="5" ry="18" fill="#FFC1CC" transform="rotate(-8 43 30)"/>
    <ellipse cx="77" cy="30" rx="5" ry="18" fill="#FFC1CC" transform="rotate(8 77 30)"/>
    <ellipse cx="60" cy="74" rx="37" ry="32" fill="#F4F1F6" ${_t}/>
    ${Bn(70,47,73,6)}${Fi(84,36,84)}
    <rect x="55.5" y="88" width="9" height="8" rx="2" fill="#fff" ${Ce}/>
    <ellipse cx="60" cy="81" rx="5.5" ry="3.8" fill="#FF6F91"/>
    <path d="M60 84 v3 M60 87 q-4 3 -8 0 M60 87 q4 3 8 0" fill="none" ${Ce}/>`,ordek:()=>`
    <path d="M56 26 q-8 -14 4 -16 q-3 8 7 13" fill="#FFD43B" ${_t}/>
    <circle cx="60" cy="62" r="38" fill="#FFD43B" ${_t}/>
    ${Bn(56,46,74)}${Fi(72,32,88)}
    <path d="M34 78 q26 -14 52 0 q-26 20 -52 0 z" fill="#FF9A3C" ${_t}/>
    <path d="M38 79 q22 5 44 0" fill="none" ${Ce}/>`,maymun:()=>`
    <circle cx="20" cy="62" r="14" fill="#9A5F3A" ${_t}/><circle cx="100" cy="62" r="14" fill="#9A5F3A" ${_t}/>
    <circle cx="20" cy="62" r="8" fill="#F2C9A0"/><circle cx="100" cy="62" r="8" fill="#F2C9A0"/>
    <circle cx="60" cy="60" r="38" fill="#9A5F3A" ${_t}/>
    <circle cx="47" cy="58" r="15" fill="#F2C9A0"/><circle cx="73" cy="58" r="15" fill="#F2C9A0"/>
    <ellipse cx="60" cy="79" rx="26" ry="17" fill="#F2C9A0"/>
    <path d="M50 24 q10 -12 16 2" fill="none" ${_t}/>
    ${Bn(58,47,73,6)}
    <circle cx="56" cy="73" r="2" fill="${Wt}"/><circle cx="64" cy="73" r="2" fill="${Wt}"/>
    <path d="M47 82 q13 11 26 0" fill="none" ${_t}/>`,panda:()=>`
    <circle cx="28" cy="32" r="13" fill="${Wt}"/><circle cx="92" cy="32" r="13" fill="${Wt}"/>
    <ellipse cx="60" cy="64" rx="41" ry="37" fill="#fff" ${_t}/>
    <ellipse cx="44" cy="62" rx="11" ry="14" fill="${Wt}" transform="rotate(30 44 62)"/>
    <ellipse cx="76" cy="62" rx="11" ry="14" fill="${Wt}" transform="rotate(-30 76 62)"/>
    <g class="blink"><circle cx="45" cy="60" r="5" fill="#fff"/><circle cx="75" cy="60" r="5" fill="#fff"/>
    <circle cx="46" cy="61" r="2.8" fill="${Wt}"/><circle cx="74" cy="61" r="2.8" fill="${Wt}"/></g>
    ${Fi(80,32,88)}
    <ellipse cx="60" cy="76" rx="6.5" ry="4.5" fill="${Wt}"/>
    ${uh(80)}`},ke=[{id:"kedi",name:{tr:"Kedi",en:"Cat"},acc:{tr:"Kediyi",en:"the cat"},sound:{tr:"Miyav!",en:"Meow!"},color:"#FFE0C2"},{id:"kopek",name:{tr:"K\xF6pek",en:"Dog"},acc:{tr:"K\xF6pe\u011Fi",en:"the dog"},sound:{tr:"Hav hav!",en:"Woof woof!"},color:"#FCE6CD"},{id:"inek",name:{tr:"\u0130nek",en:"Cow"},acc:{tr:"\u0130ne\u011Fi",en:"the cow"},sound:{tr:"M\xF6\xF6!",en:"Moo!"},color:"#E8F5DB"},{id:"koyun",name:{tr:"Koyun",en:"Sheep"},acc:{tr:"Koyunu",en:"the sheep"},sound:{tr:"Mee!",en:"Baa!"},color:"#E6F1FA"},{id:"aslan",name:{tr:"Aslan",en:"Lion"},acc:{tr:"Aslan\u0131",en:"the lion"},sound:{tr:"Roarrr!",en:"Roar!"},color:"#FFE9B8"},{id:"fil",name:{tr:"Fil",en:"Elephant"},acc:{tr:"Fili",en:"the elephant"},sound:{tr:"P\u0131r\u0131\u0131\u0131\u0131!",en:"Toot!"},color:"#E3ECF6"},{id:"kurbaga",name:{tr:"Kurba\u011Fa",en:"Frog"},acc:{tr:"Kurba\u011Fay\u0131",en:"the frog"},sound:{tr:"Vrak vrak!",en:"Ribbit!"},color:"#DFF5D3"},{id:"ayi",name:{tr:"Ay\u0131",en:"Bear"},acc:{tr:"Ay\u0131y\u0131",en:"the bear"},sound:{tr:"H\u0131mmm!",en:"Grrr!"},color:"#F3E1D2"},{id:"tavsan",name:{tr:"Tav\u015Fan",en:"Rabbit"},acc:{tr:"Tav\u015Fan\u0131",en:"the rabbit"},sound:{tr:"Hop hop!",en:"Hop hop!"},color:"#FBE4EC"},{id:"ordek",name:{tr:"\xD6rdek",en:"Duck"},acc:{tr:"\xD6rde\u011Fi",en:"the duck"},sound:{tr:"Vak vak!",en:"Quack quack!"},color:"#DDF2F7"},{id:"maymun",name:{tr:"Maymun",en:"Monkey"},acc:{tr:"Maymunu",en:"the monkey"},sound:{tr:"Uu uu aa aa!",en:"Ooh ooh aah aah!"},color:"#F5E5D3"},{id:"panda",name:{tr:"Panda",en:"Panda"},acc:{tr:"Panday\u0131",en:"the panda"},sound:{tr:"H\u0131mm, bambu!",en:"Mmm, bamboo!"},color:"#E9F3E4"}];function Ve(n,t=""){return Re(fy[n](),"0 0 120 120",t)}var py={elma:`<path d="M40 22 C56 12 72 24 70 44 C68 64 52 74 40 68 C28 74 12 64 10 44 C8 24 24 12 40 22Z" fill="#FF5A4E" ${_t}/>
    <path d="M40 22 q0 -10 4 -14" fill="none" ${_t}/><path d="M44 14 q12 -8 18 2 q-10 6 -18 -2z" fill="#5BBA6F" ${Ce}/>
    <ellipse cx="25" cy="36" rx="4.5" ry="8" fill="#fff" opacity=".5" transform="rotate(20 25 36)"/>`,portakal:`<circle cx="40" cy="45" r="26" fill="#FFA23A" ${_t}/>
    <path d="M40 19 q10 -11 19 -3 q-9 9 -19 3z" fill="#5BBA6F" ${Ce}/>
    <circle cx="50" cy="38" r="1.6" fill="#E07B1F"/><circle cx="32" cy="54" r="1.6" fill="#E07B1F"/><circle cx="48" cy="58" r="1.6" fill="#E07B1F"/>
    <ellipse cx="28" cy="37" rx="4" ry="7" fill="#fff" opacity=".45" transform="rotate(25 28 37)"/>`,cilek:`<path d="M40 72 C20 60 11 40 17 29 C25 18 55 18 63 29 C69 40 60 60 40 72Z" fill="#FF4F6D" ${_t}/>
    <g fill="#FFE08A"><ellipse cx="30" cy="36" rx="1.8" ry="2.6"/><ellipse cx="44" cy="34" rx="1.8" ry="2.6"/><ellipse cx="54" cy="40" rx="1.8" ry="2.6"/>
    <ellipse cx="36" cy="48" rx="1.8" ry="2.6"/><ellipse cx="48" cy="52" rx="1.8" ry="2.6"/><ellipse cx="40" cy="62" rx="1.8" ry="2.6"/><ellipse cx="26" cy="46" rx="1.8" ry="2.6"/></g>
    <path d="M24 25 l8 -10 l8 7 l8 -7 l8 10 q-16 6 -32 0z" fill="#5BBA6F" ${Ce}/>`,armut:`<path d="M40 14 C49 14 48 27 53 34 C67 44 65 71 40 71 C15 71 13 44 27 34 C32 27 31 14 40 14Z" fill="#B5D334" ${_t}/>
    <path d="M40 15 q1 -8 5 -11" fill="none" ${_t}/>
    <ellipse cx="28" cy="50" rx="4" ry="8" fill="#fff" opacity=".45" transform="rotate(15 28 50)"/>`,kiraz:`<path d="M27 46 q6 -24 20 -36 M53 48 q-2 -22 -6 -38" fill="none" stroke="#5E8C3A" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M47 10 q12 -6 18 4 q-10 6 -18 -4z" fill="#5BBA6F" ${Ce}/>
    <circle cx="27" cy="57" r="13" fill="#E8334A" ${_t}/><circle cx="53" cy="59" r="13" fill="#E8334A" ${_t}/>
    <circle cx="23" cy="53" r="3" fill="#fff" opacity=".5"/><circle cx="49" cy="55" r="3" fill="#fff" opacity=".5"/>`,muz:`<path d="M12 26 q4 40 46 38 q12 -1 16 -9 q-32 6 -48 -30 q-8 -6 -14 1z" fill="#FFD43B" ${_t}/>
    <path d="M12 26 l-3 -6" ${_t} stroke="#7A5530"/><path d="M26 30 q10 22 34 26" fill="none" stroke="#E8B923" stroke-width="2.5" stroke-linecap="round"/>`},On=[{id:"elma",name:{tr:"elma",en:"apples"}},{id:"portakal",name:{tr:"portakal",en:"oranges"}},{id:"cilek",name:{tr:"\xE7ilek",en:"strawberries"}},{id:"armut",name:{tr:"armut",en:"pears"}},{id:"kiraz",name:{tr:"kiraz",en:"cherries"}},{id:"muz",name:{tr:"muz",en:"bananas"}}],li=n=>Re(py[n],"0 0 80 80"),Zr=[{id:"daire",name:{tr:"Daire",en:"Circle"},color:"#FF6F59"},{id:"kare",name:{tr:"Kare",en:"Square"},color:"#3FA7D6"},{id:"ucgen",name:{tr:"\xDC\xE7gen",en:"Triangle"},color:"#FFC93C"},{id:"yildiz",name:{tr:"Y\u0131ld\u0131z",en:"Star"},color:"#9B6DD6"},{id:"kalp",name:{tr:"Kalp",en:"Heart"},color:"#FF5C8A"},{id:"dikdortgen",name:{tr:"Dikd\xF6rtgen",en:"Rectangle"},color:"#5BBA6F"}],my={daire:'<circle cx="50" cy="50" r="38"/>',kare:'<rect x="14" y="14" width="72" height="72" rx="8"/>',ucgen:'<path d="M50 10 L90 84 H10 Z"/>',yildiz:`<polygon points="${fl(50,53,5,42,19)}"/>`,kalp:'<path d="M50 86 C20 66 8 48 12 32 C16 16 40 12 50 30 C60 12 84 16 88 32 C92 48 80 66 50 86Z"/>',dikdortgen:'<rect x="8" y="26" width="84" height="48" rx="8"/>'};function Ws(n,t,e="solid"){let i=e==="hole"?`fill="rgba(59,44,90,.10)" stroke="${Wt}" stroke-width="4" stroke-dasharray="9 8" stroke-linejoin="round"`:`fill="${t}" stroke="${Wt}" stroke-width="4" stroke-linejoin="round"`,s=e==="solid"?'<ellipse cx="34" cy="34" rx="8" ry="5" fill="#fff" opacity=".35" transform="rotate(-30 34 34)"/>':"";return Re(`<g ${i}>${my[n]}</g>${s}`,"0 0 100 100")}function dh(n){return Re(`
    <path d="M50 118 q-6 14 4 26 q8 10 -2 22" fill="none" stroke="${Wt}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M50 8 C76 8 92 30 90 56 C88 86 66 108 50 110 C34 108 12 86 10 56 C8 30 24 8 50 8Z" fill="${n}" ${_t}/>
    <path d="M44 109 h12 l-3 9 h-6z" fill="${n}" ${Ce}/>
    <ellipse cx="32" cy="38" rx="8" ry="15" fill="#fff" opacity=".45" transform="rotate(22 32 38)"/>`,"0 0 100 170")}function Gd(){return Re(`
    <ellipse class="foot" cx="58" cy="156" rx="15" ry="8" fill="#E85D44" ${_t}/>
    <ellipse class="foot" cx="102" cy="156" rx="15" ry="8" fill="#E85D44" ${_t}/>
    <ellipse class="arm arm-l" cx="22" cy="106" rx="9" ry="13" fill="#FF7A5C" ${_t} transform="rotate(35 22 106)"/>
    <ellipse class="arm arm-r" cx="138" cy="106" rx="9" ry="13" fill="#FF7A5C" ${_t} transform="rotate(-35 138 106)"/>
    <path d="M80 38 C118 38 140 64 140 100 C140 136 112 156 80 156 C48 156 20 136 20 100 C20 64 42 38 80 38Z" fill="#FF7A5C" ${_t}/>
    <ellipse cx="80" cy="122" rx="34" ry="24" fill="#FFC2A8"/>
    <g class="sprout">
      <path d="M80 40 q-2 -14 4 -22" fill="none" stroke="${Wt}" stroke-width="4" stroke-linecap="round"/>
      <path d="M84 19 q18 -14 30 0 q-14 12 -30 0z" fill="#5BBA6F" ${_t}/>
      <path d="M82 23 q-16 -12 -27 2 q12 10 27 -2z" fill="#7ACB5A" ${_t}/>
    </g>
    <g class="blink">
      <ellipse cx="60" cy="86" rx="14" ry="16" fill="#fff" ${_t}/><ellipse cx="100" cy="86" rx="14" ry="16" fill="#fff" ${_t}/>
      <ellipse class="pupil" cx="61" cy="89" rx="7.5" ry="9" fill="${Wt}"/><ellipse class="pupil" cx="101" cy="89" rx="7.5" ry="9" fill="${Wt}"/>
      <circle cx="64.5" cy="84.5" r="2.8" fill="#fff"/><circle cx="104.5" cy="84.5" r="2.8" fill="#fff"/>
    </g>
    <ellipse cx="44" cy="110" rx="9" ry="5.5" fill="#FF4F6D" opacity=".35"/><ellipse cx="116" cy="110" rx="9" ry="5.5" fill="#FF4F6D" opacity=".35"/>
    <path class="mouth-smile" d="M68 108 q12 13 24 0" fill="none" stroke="${Wt}" stroke-width="4" stroke-linecap="round"/>
    <ellipse class="mouth-open" cx="80" cy="112" rx="9" ry="7.5" fill="#8E2C48" ${Ce}/>`,"0 0 160 170","Pofi")}var We={home:Re(`<path d="M14 46 L50 16 L86 46" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 44 V82 H76 V44" fill="none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"/>
    <rect x="42" y="58" width="16" height="24" rx="3" fill="currentColor"/>`,"0 0 100 100"),speaker:Re(`<path d="M16 38 H32 L52 20 V80 L32 62 H16 Z" fill="currentColor" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/>
    <path d="M64 36 q10 14 0 28 M74 26 q18 24 0 48" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>`,"0 0 100 100"),star:Re(`<polygon points="${fl(50,54,5,44,21)}" fill="#FFC93C" stroke="${Wt}" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="38" cy="40" rx="6" ry="4" fill="#fff" opacity=".6" transform="rotate(-30 38 40)"/>`,"0 0 100 100"),album:Re(`<rect x="16" y="14" width="68" height="74" rx="10" fill="#5BBA6F" stroke="${Wt}" stroke-width="5"/>
    <rect x="16" y="14" width="14" height="74" rx="6" fill="#3E9B57" stroke="${Wt}" stroke-width="5"/>
    <circle cx="58" cy="44" r="13" fill="#FFC93C" stroke="${Wt}" stroke-width="4"/><path d="M42 72 h32" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`,"0 0 100 100"),gear:Re(`<g fill="currentColor"><circle cx="50" cy="50" r="26"/>${[0,45,90,135,180,225,270,315].map(n=>`<rect x="43" y="10" width="14" height="20" rx="4" transform="rotate(${n} 50 50)"/>`).join("")}</g>
    <circle cx="50" cy="50" r="11" fill="#fff"/>`,"0 0 100 100"),play:Re('<path d="M34 20 L82 50 L34 80 Z" fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round"/>',"0 0 100 100"),close:Re('<path d="M24 24 L76 76 M76 24 L24 76" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>',"0 0 100 100"),lock:Re('<rect x="22" y="44" width="56" height="44" rx="8" fill="currentColor"/><path d="M34 46 V32 a16 16 0 0 1 32 0 V46" fill="none" stroke="currentColor" stroke-width="9"/>',"0 0 100 100")},fh={hayvanlar:Ve("kedi"),balonlar:Re(`<path d="M50 74 q-4 10 2 18" fill="none" stroke="${Wt}" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 10 C70 10 80 26 78 42 C76 62 60 72 50 74 C40 72 24 62 22 42 C20 26 30 10 50 10Z" fill="#FF6F59" ${_t}/>
    <ellipse cx="38" cy="30" rx="5" ry="10" fill="#fff" opacity=".5" transform="rotate(22 38 30)"/>`,"0 0 100 100"),sayilar:Re(`<circle cx="50" cy="52" r="40" fill="#FFC93C" ${_t}/><text x="50" y="66" text-anchor="middle" font-family="Fredoka, system-ui" font-weight="700" font-size="40" fill="${Wt}">123</text>`,"0 0 100 100"),sekiller:Re(`<path d="M30 14 L54 54 H6 Z" fill="#FFC93C" ${_t}/><circle cx="70" cy="34" r="20" fill="#3FA7D6" ${_t}/>
    <rect x="34" y="56" width="34" height="34" rx="5" fill="#FF6F59" ${_t}/>`,"0 0 100 100"),hafiza:Re(`<rect x="10" y="22" width="44" height="60" rx="8" fill="#9B6DD6" ${_t} transform="rotate(-10 32 52)"/>
    <rect x="44" y="18" width="44" height="60" rx="8" fill="#fff" ${_t} transform="rotate(8 66 48)"/>
    <polygon points="${fl(66,50,5,14,6)}" fill="#FFC93C" ${Ce} transform="rotate(8 66 48)"/>`,"0 0 100 100"),muzik:Re(`<path d="M38 74 V22 L80 12 V64" fill="none" stroke="${Wt}" stroke-width="7" stroke-linejoin="round"/>
    <ellipse cx="28" cy="76" rx="14" ry="11" fill="#FF5C8A" ${_t}/><ellipse cx="70" cy="66" rx="14" ry="11" fill="#3FA7D6" ${_t}/>`,"0 0 100 100")},gy={elma:"apple",portakal:"orange",cilek:"strawberry",armut:"pear",kiraz:"cherry",muz:"banana"};On.forEach(n=>{n.en1=gy[n.id]});We.check=Re('<path d="M18 52 L40 74 L84 28" fill="none" stroke="currentColor" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>',"0 0 100 100");Object.assign(fh,{boyama:Re(`<path d="M50 10 C80 10 94 32 92 52 C90 70 74 72 66 64 C59 57 51 62 54 73 C57 85 44 92 31 87 C13 80 6 62 10 43 C14 24 30 10 50 10Z" fill="#FFE3B3" ${_t}/>
    <circle cx="33" cy="34" r="8" fill="#FF4B4B" ${Ce}/><circle cx="53" cy="26" r="8" fill="#FFD43B" ${Ce}/>
    <circle cx="72" cy="37" r="8" fill="#3FA7D6" ${Ce}/><circle cx="26" cy="57" r="8" fill="#5BBA6F" ${Ce}/>`,"0 0 100 100"),harfler:Re(`<rect x="8" y="40" width="44" height="44" rx="8" fill="#FF6F59" ${_t}/><rect x="50" y="20" width="44" height="44" rx="8" fill="#3FA7D6" ${_t} transform="rotate(10 72 42)"/>
    <text x="30" y="75" text-anchor="middle" font-family="Fredoka, system-ui" font-weight="700" font-size="32" fill="#fff" stroke="${Wt}" stroke-width="2">A</text>
    <text x="72" y="55" text-anchor="middle" font-family="Fredoka, system-ui" font-weight="700" font-size="32" fill="#fff" stroke="${Wt}" stroke-width="2" transform="rotate(10 72 42)">B</text>`,"0 0 100 100"),yapboz:Re(`<path d="M16 34 H38 a11 11 0 1 1 22 0 H82 V52 a11 11 0 1 1 0 22 V90 H16 Z" fill="#FFC93C" ${_t}/>
    <circle cx="40" cy="64" r="8" fill="#fff" opacity=".5"/>`,"0 0 100 100"),oruntu:Re(`<path d="M6 54 H94" stroke="${Wt}" stroke-width="4" stroke-linecap="round"/>
    <circle cx="20" cy="54" r="12" fill="#FF6F59" ${_t}/><rect x="37" y="42" width="24" height="24" rx="5" fill="#3FA7D6" ${_t}/>
    <circle cx="78" cy="54" r="12" fill="#FF6F59" ${_t}/>
    <text x="50" y="30" text-anchor="middle" font-family="Fredoka, system-ui" font-weight="700" font-size="22" fill="${Wt}">?</text>`,"0 0 100 100"),besle:Re(`<circle cx="37" cy="40" r="15" fill="#FF5A4E" ${_t}/><path d="M37 26 q2 -8 6 -10" fill="none" ${Ce}/>
    <circle cx="63" cy="40" r="14" fill="#FFA23A" ${_t}/>
    <path d="M12 50 H88 C86 76 70 88 50 88 C30 88 14 76 12 50Z" fill="#3FA7D6" ${_t}/>
    <path d="M22 62 q28 10 56 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/>`,"0 0 100 100"),saklambac:Re(`<circle cx="30" cy="24" r="8" fill="#A86B45" ${Ce}/><circle cx="70" cy="24" r="8" fill="#A86B45" ${Ce}/>
    <circle cx="50" cy="50" r="28" fill="#A86B45" ${_t}/>
    <circle cx="40" cy="44" r="4.5" fill="${Wt}"/><circle cx="60" cy="44" r="4.5" fill="${Wt}"/>
    <ellipse cx="50" cy="56" rx="6" ry="4.5" fill="#FF6F91"/>
    <path d="M6 72 Q50 50 94 72 V94 H6Z" fill="#8A5A3B" ${_t}/>`,"0 0 100 100")});var Hd="macera.v1",Vd=()=>({stars:0,stickers:[],plays:{},settings:{lang:"tr",sound:!0,voice:!0,rate:.95}});function _y(){let n=Vd();try{let t=JSON.parse(localStorage.getItem(Hd)||"{}");return{...n,...t,settings:{...n.settings,...t.settings||{}}}}catch{return n}}var Me=_y();function ts(){try{localStorage.setItem(Hd,JSON.stringify(Me))}catch{}}function pl(n){Me.stars+=n,ts()}function Wd(n){Me.plays[n]=(Me.plays[n]||0)+1,ts()}function Xd(){let n=Me.settings;Object.assign(Me,Vd(),{settings:n}),ts()}var Jn=typeof window<"u"?window.speechSynthesis:null,qd=[],ph=new Set;function $d(){Jn&&(qd=Jn.getVoices()||[])}Jn&&($d(),Jn.addEventListener?.("voiceschanged",$d));var xy=/premium|enhanced|siri|natural|neural|google/i,yy=/compact|eloquence|novelty|bells|bad news|boing|bubbles|cellos|jester|organ|trinoids|whisper|zarvox|albert|fred|junior|ralph|superstar|bahh/i;function vy(n){let t=n==="tr"?["tr-tr","tr"]:["en-us","en-gb","en-au","en"];for(let e of t){let i=qd.filter(s=>s.lang.replace("_","-").toLowerCase().startsWith(e)&&!yy.test(s.name));if(i.length)return i.find(s=>xy.test(s.name))||i.find(s=>s.localService)||i[0]}return null}function My(n,t){let e=Me.settings.lang;return e==="tr"?[{lang:"tr",text:n.tr}]:e==="en"?[{lang:"en",text:n.en}]:[{lang:"tr",text:n.tr},{lang:"en",text:t?t.en:n.en}]}function wn(n){return Me.settings.lang==="en"?n.en:n.tr}function gh(n){return Me.settings.lang==="both"?n.en:""}var ml=0;function Sy(n){Jr();let t=++ml;return!Jn||!Me.settings.voice||!n.length?Promise.resolve():(mh(!0),new Promise(e=>{let i=0,s=()=>{t===ml&&mh(!1),e()},r=()=>{if(t!==ml)return e();if(i>=n.length)return s();let{lang:a,text:o}=n[i++],l=new SpeechSynthesisUtterance(o);l.lang=a==="tr"?"tr-TR":"en-US";let c=vy(a);c&&(l.voice=c),l.rate=Me.settings.rate*(a==="en"?.95:1),l.pitch=1.1;let h=setTimeout(r,1200+o.length*110);l.onend=l.onerror=()=>{clearTimeout(h),setTimeout(r,120)},Jn.speak(l)};r()}))}function Tn(n,t){return Sy(My(n,t))}function Jr(){ml++,mh(!1);try{Jn&&Jn.cancel()}catch{}}function Yd(){if(Jn)try{let n=new SpeechSynthesisUtterance(" ");n.volume=0,Jn.speak(n)}catch{}}function Zd(n){return ph.add(n),()=>ph.delete(n)}function mh(n){ph.forEach(t=>t(n))}var $e=null,Xs=null;function Jd(){try{if(!$e){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;$e=new n,Xs=$e.createGain(),Xs.gain.value=.55;let t=$e.createDynamicsCompressor();Xs.connect(t).connect($e.destination)}$e.state==="suspended"&&$e.resume()}catch{}}var fn=()=>$e&&Xs&&Me.settings.sound;function cn(n,{type:t="sine",at:e=0,dur:i=.2,vol:s=.4,attack:r=.005,slideTo:a=null}={}){let o=$e.currentTime+e,l=$e.createOscillator(),c=$e.createGain();l.type=t,l.frequency.setValueAtTime(n,o),a&&l.frequency.exponentialRampToValueAtTime(a,o+i),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(s,o+r),c.gain.exponentialRampToValueAtTime(1e-4,o+i),l.connect(c).connect(Xs),l.start(o),l.stop(o+i+.05)}var gl=null;function Kr({at:n=0,dur:t=.15,vol:e=.3,freq:i=1200,q:s=1,sweepTo:r=null,type:a="bandpass"}={}){if(!gl){gl=$e.createBuffer(1,$e.sampleRate*.6,$e.sampleRate);let d=gl.getChannelData(0);for(let u=0;u<d.length;u++)d[u]=Math.random()*2-1}let o=$e.currentTime+n,l=$e.createBufferSource();l.buffer=gl;let c=$e.createBiquadFilter();c.type=a,c.frequency.setValueAtTime(i,o),r&&c.frequency.exponentialRampToValueAtTime(r,o+t),c.Q.value=s;let h=$e.createGain();h.gain.setValueAtTime(e,o),h.gain.exponentialRampToValueAtTime(1e-4,o+t),l.connect(c).connect(h).connect(Xs),l.start(o),l.stop(o+t+.05)}var $s=[523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5],qt={tap(){fn()&&cn(720,{dur:.07,vol:.18,type:"triangle"})},pop(){fn()&&(Kr({dur:.12,vol:.5,freq:1800,q:.8,sweepTo:400}),cn(900,{dur:.1,vol:.2,slideTo:300}))},correct(){fn()&&[783.99,987.77,1318.5].forEach((n,t)=>cn(n,{type:"triangle",at:t*.08,dur:.28,vol:.28}))},wrong(){fn()&&cn(330,{type:"sine",dur:.32,vol:.3,slideTo:196})},star(){fn()&&[1568,2093,2637].forEach((n,t)=>cn(n,{at:t*.05,dur:.35,vol:.12}))},flip(){fn()&&Kr({dur:.1,vol:.18,freq:2600,q:.6,sweepTo:5e3,type:"highpass"})},whoosh(){fn()&&Kr({dur:.45,vol:.22,freq:300,q:.9,sweepTo:2400})},snap(){fn()&&(cn(520,{dur:.06,vol:.3,type:"square"}),cn(1040,{at:.04,dur:.12,vol:.18,type:"triangle"}))},fanfare(){if(!fn())return;[523.25,659.25,783.99,1046.5].forEach((t,e)=>cn(t,{type:"triangle",at:e*.12,dur:.35,vol:.28})),[523.25,659.25,783.99,1046.5].forEach(t=>cn(t,{type:"triangle",at:.5,dur:1.1,vol:.14}))},paint(){fn()&&(Kr({dur:.2,vol:.4,freq:700,q:.7,sweepTo:180,type:"lowpass"}),cn(420,{dur:.14,vol:.12,slideTo:760}))},chomp(){fn()&&[0,.13,.26].forEach(n=>Kr({at:n,dur:.08,vol:.4,freq:900,q:1.2,sweepTo:300}))},boing(){fn()&&cn(260,{type:"triangle",dur:.3,vol:.3,slideTo:720})},rise(){fn()&&cn(330,{type:"sine",dur:.12,vol:.08,slideTo:520})},note(n){fn()&&(cn(n,{type:"sine",dur:.9,vol:.45,attack:.003}),cn(n*4,{type:"sine",dur:.12,vol:.12,attack:.002}),cn(n*2,{type:"triangle",dur:.35,vol:.08}))}};function z(n,t={},...e){let i=document.createElement(n);for(let[s,r]of Object.entries(t))if(!(r==null||r===!1))if(s==="class")i.className=r;else if(s==="html")i.innerHTML=r;else if(s.startsWith("on"))i.addEventListener(s.slice(2),r);else if(s==="style"&&typeof r=="object")for(let[a,o]of Object.entries(r))a.startsWith("--")?i.style.setProperty(a,o):i.style[a]=o;else i.setAttribute(s,r===!0?"":r);for(let s of e.flat())s!=null&&i.append(s);return i}var Pe=n=>new Promise(t=>setTimeout(t,n)),ye=n=>{n=[...n];for(let t=n.length-1;t>0;t--){let e=Math.random()*(t+1)|0;[n[t],n[e]]=[n[e],n[t]]}return n},je=(n,t)=>ye(n).slice(0,t),by=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function jr(n=""){return z("div",{class:`mascot ${n}`,html:Gd()})}Zd(n=>document.querySelectorAll(".mascot").forEach(t=>t.classList.toggle("talking",n)));function Ui(n,t){n&&(n.classList.remove("happy","oops"),n.offsetWidth,n.classList.add(t),clearTimeout(n._moodT),n._moodT=setTimeout(()=>n.classList.remove(t),1e3))}function Qd(){let n=document.getElementById("fx");return n||(n=z("div",{id:"fx","aria-hidden":"true"}),document.body.append(n)),n}var Kd=["#FF6F59","#FFC93C","#5BBA6F","#3FA7D6","#9B6DD6","#FF5C8A"];function Kn(n,t,e=22){by()&&(e=6);let i=Qd();for(let s=0;s<e;s++){let r=Math.random()*Math.PI*2,a=60+Math.random()*120,o=z("i",{class:"confetto"});o.style.left=n+"px",o.style.top=t+"px",o.style.background=Kd[s%Kd.length],o.style.setProperty("--dx",`${Math.cos(r)*a}px`),o.style.setProperty("--dy",`${Math.sin(r)*a-40}px`),o.style.setProperty("--r",`${Math.random()*720-360|0}deg`),s%3===0&&(o.style.borderRadius="50%"),i.append(o),setTimeout(()=>o.remove(),1100)}}function qe(n){let t=n.getBoundingClientRect();return[t.left+t.width/2,t.top+t.height/2]}var ci=null;function _h(){return ci||(ci=z("div",{class:"stars-hud","aria-live":"polite"},z("span",{class:"ico",html:We.star}),z("b",{},String(Me.stars)))),ci}function _l(){ci&&(ci.querySelector("b").textContent=String(Me.stars))}function xl(n){let[t,e]=Array.isArray(n)?n:qe(n),i=ci?.querySelector(".ico"),s=z("div",{class:"flying-star",html:We.star});s.style.left=t+"px",s.style.top=e+"px",Qd().append(s);let[r,a]=i?qe(i):[innerWidth-40,30];requestAnimationFrame(()=>{s.style.transform=`translate(${r-t}px, ${a-e}px) scale(.5) rotate(200deg)`,s.style.opacity="0.9"}),setTimeout(()=>{s.remove(),qt.star(),_l(),ci?.classList.remove("bump"),ci?.offsetWidth,ci?.classList.add("bump")},700)}var jd=[{tr:"Harikas\u0131n!",en:"You are amazing!"},{tr:"S\xFCper i\u015F!",en:"Super job!"},{tr:"Bravo, ba\u015Fard\u0131n!",en:"Well done!"},{tr:"Muhte\u015Fem!",en:"Awesome!"}];function Ey(){let n=ke.filter(e=>!Me.stickers.includes(e.id));if(!n.length)return null;let t=n[Math.random()*n.length|0];return Me.stickers.push(t.id),ts(),t}function tf(){return new Promise(n=>{let t=Ey(),e=jd[Math.random()*jd.length|0],i=jr("big cheer"),s=z("button",{class:"btn btn-big btn-sun","aria-label":"Tekrar oyna",html:We.play}),r=z("button",{class:"btn btn-big btn-sea","aria-label":"Adaya d\xF6n",html:We.home}),a=z("div",{class:"cele-stars"},[0,1,2].map(u=>z("span",{style:{animationDelay:`${.35+u*.18}s`},html:We.star}))),o=z("div",{class:"cele-card",role:"dialog","aria-modal":"true"},i,z("h2",{},wn(e)),a,t&&z("div",{class:"cele-sticker"},z("div",{class:"sticker",style:{background:t.color},html:Ve(t.id)}),z("p",{},wn({tr:"Yeni \xE7\u0131kartma!",en:"New sticker!"}))),z("div",{class:"cele-actions"},r,s)),l=z("div",{class:"overlay cele"},o);document.body.append(l),qt.fanfare();let[c,h]=[innerWidth/2,innerHeight*.32];Kn(c,h,40),setTimeout(()=>Kn(c-120,h+40,24),300),setTimeout(()=>Kn(c+120,h+40,24),500),Tn(t?{tr:`${e.tr} Sana yeni bir ${t.name.tr} \xE7\u0131kartmas\u0131!`,en:`${e.en} Here is a new ${t.name.en} sticker!`}:e,t?t.name:void 0);let d=u=>{qt.tap(),l.classList.add("out"),setTimeout(()=>l.remove(),250),n(u)};s.onclick=()=>d("again"),r.onclick=()=>d("home"),setTimeout(()=>s.focus({preventScroll:!0}),50)})}function ef(n,t,e){let i=null,s=a=>{a.preventDefault(),n.classList.add("holding"),n.style.setProperty("--hold",`${t}ms`),i=setTimeout(()=>{n.classList.remove("holding"),e()},t)},r=()=>{clearTimeout(i),n.classList.remove("holding")};n.addEventListener("pointerdown",s),["pointerup","pointerleave","pointercancel"].forEach(a=>n.addEventListener(a,r)),n.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&e()})}var Ni=null;function yl(n,{targets:t,onDrop:e,tap:i}){let s=0,r=0,a=!1,o=null,l=()=>{n.style.transition="transform .35s cubic-bezier(.3,1.5,.5,1)",n.style.transform="",n.classList.remove("lifted")},c=d=>{Ni=null;let u=e(n,d);return u||l(),u};n.addEventListener("pointerdown",d=>{if(!n.dataset.done){d.preventDefault(),o=d.pointerId;try{n.setPointerCapture(o)}catch{}s=d.clientX,r=d.clientY,a=!1,n.style.transition="none",n.classList.add("lifted"),Ni&&Ni!==n&&(Ni.classList.remove("lifted"),Ni.style.transform="",Ni=null)}}),n.addEventListener("pointermove",d=>{if(d.pointerId!==o)return;let u=d.clientX-s,f=d.clientY-r;Math.hypot(u,f)>8&&(a=!0),a&&(n.style.transform=`translate(${u}px, ${f}px) scale(1.08)`)});let h=d=>{if(d.pointerId!==o)return;if(o=null,!a){if(i){l(),i(n);return}qt.tap(),Ni=n,n.style.transform="scale(1.08)";return}n.style.visibility="hidden";let u=document.elementFromPoint(d.clientX,d.clientY);n.style.visibility="";let f=t(),g=f.find(y=>u&&y.contains(u));if(!g){let[y,p]=qe(n),m=1/0;f.forEach(M=>{let[E,_]=qe(M),S=Math.hypot(E-y,_-p);S<m&&S<Math.max(M.clientWidth,70)*.75&&(m=S,g=M)})}g?c(g):l()};n.addEventListener("pointerup",h),n.addEventListener("pointercancel",h),i||t().forEach(d=>d.addEventListener("click",()=>{Ni===n&&c(d)}))}function qs(n,t,{ms:e=280,scale:i=.9}={}){let[s,r]=qe(t),[a,o]=qe(n),l;try{l=new DOMMatrix(getComputedStyle(n).transform)}catch{l={m41:0,m42:0}}return n.style.transition=`transform ${e}ms cubic-bezier(.3,1.2,.5,1)`,n.style.transform=`translate(${l.m41+s-a}px, ${l.m42+r-o}px) scale(${i})`,Pe(e)}var nf={id:"hayvanlar",title:{tr:"Hayvanlar",en:"Animals"},theme:"meadow",start(n){let e=ye(ke),i=0;function s(){if(!n.alive())return;if(i>=8)return n.finish();n.progress(i,8);let r=i<2?2:i<6?3:4,a=e[i%e.length],o=ye([a,...je(ke.filter(h=>h.id!==a.id),r-1)]),l=!1,c=o.map(h=>{let d=z("span",{class:"cap"}),u=z("button",{class:"choice pop-in",style:{"--tint":h.color},"aria-label":wn(h.name),html:Ve(h.id)},d);return u.addEventListener("click",async()=>{l||(h===a?(l=!0,d.innerHTML=`${wn(h.name)}${gh(h.name)?`<small>${gh(h.name)}</small>`:""}`,u.classList.add("win"),c.forEach(f=>f!==u&&f.classList.add("fade")),n.good(u),await Promise.all([n.say({tr:`${h.name.tr}! ${h.sound.tr}`,en:`${h.name.en}! ${h.sound.en}`}),Pe(1300)]),i++,n.later(s,350)):(n.bad(u),n.say({tr:`Bu ${h.name.tr}. ${a.acc.tr} bul!`,en:`This is a ${h.name.en}. Find ${a.acc.en}!`},a.name)))}),u});c.forEach((h,d)=>h.style.animationDelay=`${d*70}ms`),n.board.replaceChildren(z("div",{class:`choices n${r}`},c)),n.prompt({tr:`${a.acc.tr} bul!`,en:`Find ${a.acc.en}!`},a.name)}s()}};var sf=[{id:"kirmizi",hex:"#FF4B4B",name:{tr:"k\u0131rm\u0131z\u0131",en:"red"}},{id:"mavi",hex:"#3FA7D6",name:{tr:"mavi",en:"blue"}},{id:"sari",hex:"#FFD43B",name:{tr:"sar\u0131",en:"yellow"}},{id:"yesil",hex:"#5BBA6F",name:{tr:"ye\u015Fil",en:"green"}},{id:"turuncu",hex:"#FF9A2E",name:{tr:"turuncu",en:"orange"}},{id:"mor",hex:"#9B6DD6",name:{tr:"mor",en:"purple"}},{id:"pembe",hex:"#FF7EB6",name:{tr:"pembe",en:"pink"}}],rf={id:"balonlar",title:{tr:"Renkli Balonlar",en:"Balloon Pop"},theme:"sky",start(n){let e=ye(sf).slice(0,3),i=0,s=0,r=0,a=z("div",{class:"balloon-field"}),o=z("div",{class:"goal-balloon","aria-hidden":"true"}),l=z("div",{class:"goal-meter"});n.board.replaceChildren(a,z("div",{class:"goal"},o,l));let c=[],h=[],d=0,u=performance.now(),f=0;function g(){let _=e[i];h=ye([_,...ye(sf.filter(S=>S!==_)).slice(0,3)]),o.innerHTML=dh(_.hex),l.replaceChildren(...Array.from({length:6},(S,w)=>z("i",{class:w<s?"on":"",style:{"--c":_.hex}}))),n.prompt({tr:`${y(_.name.tr)} balonlar\u0131 patlat!`,en:`Pop the ${_.name.en} balloons!`},_.name)}let y=_=>_.charAt(0).toLocaleUpperCase("tr")+_.slice(1);function p(){let _=a.clientWidth,S=e[i],w=Math.random()<.45?S:h[Math.random()*h.length|0],A=Math.max(70,Math.min(110,_/4.2)),x=z("button",{class:"balloon","aria-label":w.name.tr,html:dh(w.hex)});x.style.width=A+"px";let T={el:x,color:w,x:Math.random()*(_-A),y:a.clientHeight+20,v:55+Math.random()*40+i*12,ph:Math.random()*6,size:A,dead:!1};x.addEventListener("pointerdown",R=>{R.preventDefault(),m(T)}),a.append(x),c.push(T)}function m(_){if(_.dead)return;let S=e[i];if(_.color===S){_.dead=!0;let[w,A]=qe(_.el);qt.pop(),Kn(w,A-20,14),_.el.classList.add("popped"),setTimeout(()=>_.el.remove(),220),s++,r++,n.progress(r,6*e.length),l.children[s-1]?.classList.add("on"),s>=6&&(n.good(o),i++,s=0,i>=e.length?(E(),c.forEach(x=>x.el.classList.add("fly-away")),n.later(()=>n.finish(),900)):n.later(g,900))}else _.el.classList.remove("wobble"),_.el.offsetWidth,_.el.classList.add("wobble"),qt.wrong(),n.mood("oops")}function M(_){if(!n.alive())return;f=requestAnimationFrame(M);let S=Math.min(.05,(_-u)/1e3);u=_,d+=S;let w=Math.max(.55,1.05-i*.15);d>w&&c.length<9&&(d=0,p()),c=c.filter(A=>{if(A.dead)return!1;A.y-=A.v*S,A.ph+=S*1.6;let x=Math.sin(A.ph)*14;return A.el.style.transform=`translate(${(A.x+x).toFixed(1)}px, ${A.y.toFixed(1)}px) rotate(${(Math.sin(A.ph)*5).toFixed(1)}deg)`,A.y<-A.size*1.8?(A.el.remove(),!1):!0})}function E(){cancelAnimationFrame(f)}return g(),n.progress(0,6*e.length),f=requestAnimationFrame(_=>{u=_,M(_)}),E}};var Qr={tr:["s\u0131f\u0131r","bir","iki","\xFC\xE7","d\xF6rt","be\u015F","alt\u0131","yedi","sekiz","dokuz","on"],en:["zero","one","two","three","four","five","six","seven","eight","nine","ten"]},af=[[1,3],[2,4],[2,5],[3,5],[3,6],[4,7]],of=(n,t)=>n+(Math.random()*(t-n+1)|0),lf={id:"sayilar",title:{tr:"Say\u0131lar",en:"Numbers"},theme:"orchard",start(n){let t=af.length,e=ye(On),i=0;function s(){if(!n.alive())return;if(i>=t)return n.finish();n.progress(i,t);let r=of(...af[i]),a=e[i%e.length],o=0,l=!1,c=Array.from({length:r},(u,f)=>{let g=z("b",{class:"count-tag"}),y=z("button",{class:"fruit pop-in",style:{animationDelay:`${f*80}ms`},"aria-label":a.name.tr,html:li(a.id)},g);return y.addEventListener("click",()=>{y.classList.contains("counted")||l||(o++,y.classList.add("counted"),g.textContent=String(o),qt.tap(),n.say({tr:Qr.tr[o],en:Qr.en[o]}),o===r&&d.classList.add("ready"))}),y}),h=new Set([r]);for(;h.size<3;){let u=Math.max(1,Math.min(9,r+of(-2,2)));h.add(u)}let d=z("div",{class:"answers"},ye([...h]).map(u=>{let f=z("button",{class:"num-btn","aria-label":Qr.tr[u]},String(u));return f.addEventListener("click",async()=>{l||(u===r?(l=!0,f.classList.add("win"),c.forEach((g,y)=>{g.classList.contains("counted")||(g.classList.add("counted"),g.lastChild.textContent=String(y+1))}),n.good(f),await Promise.all([n.say({tr:`Evet! ${Qr.tr[r]} ${a.name.tr}!`,en:`Yes! ${Qr.en[r]} ${r===1?a.name.en.replace(/(ies|s)$/,g=>g==="ies"?"y":""):a.name.en}!`}),Pe(1400)]),i++,n.later(s,300)):(n.bad(f),n.say({tr:"Hadi birlikte sayal\u0131m. Meyvelere dokun!",en:"Let's count together. Tap the fruit!"})))}),f}));n.board.replaceChildren(z("div",{class:"count-stage"},z("div",{class:`basket n${r}`},c)),d),n.prompt({tr:`Ka\xE7 tane ${a.name.tr} var? Dokunarak say!`,en:`How many ${a.name.en}? Tap to count!`})}s()}};var wy={daire:"Daireyi",kare:"Kareyi",ucgen:"\xDC\xE7geni",yildiz:"Y\u0131ld\u0131z\u0131",kalp:"Kalbi",dikdortgen:"Dikd\xF6rtgeni"},cf={id:"sekiller",title:{tr:"\u015Eekiller",en:"Shapes"},theme:"blocks",start(n){let i=0,s=0;function r(){if(!n.alive())return;if(i>=4)return n.finish();let a=je(Zr,3),o=ye(a),l=new Map,c=z("div",{class:"holes"},a.map(p=>{let m=z("div",{class:"hole pop-in","data-id":p.id,html:Ws(p.id,p.color,"hole")});return l.set(p.id,m),m})),h=z("div",{class:"tray"});n.board.replaceChildren(c,h);let d=null;l.forEach((p,m)=>p.addEventListener("click",()=>{d&&f(d,p)}));function u(){if(!n.alive())return;let p=o.shift();if(!p){i++,n.good(c),n.later(r,1300);return}let m=z("button",{class:"piece pop-in","aria-label":p.name.tr,html:Ws(p.id,p.color)});m._shape=p,h.replaceChildren(m),y(m),n.prompt({tr:`${wy[p.id]} yerine koy!`,en:`Put the ${p.name.en.toLowerCase()} in its place!`},p.name)}function f(p,m){let M=p._shape;if(m.dataset.id===M.id){let[E,_]=qe(m),[S,w]=qe(p);p.style.transition="transform .25s cubic-bezier(.3,1.4,.5,1)",p.style.transform=`translate(${E-S+(p._dx||0)}px, ${_-w+(p._dy||0)}px)`,qt.snap(),setTimeout(()=>{m.innerHTML=Ws(M.id,M.color),m.classList.add("filled"),p.remove(),s++,n.progress(s,12),n.cheer(m),n.say({tr:`${M.name.tr}!`,en:`${M.name.en}!`}),d=null,n.later(u,700)},260)}else{n.bad(p);let E=Zr.find(_=>_.id===m.dataset.id);n.say({tr:`O bir ${E.name.tr.toLocaleLowerCase("tr")}. Bu bir ${M.name.tr.toLocaleLowerCase("tr")}!`,en:`That is a ${E.name.en.toLowerCase()}. This is a ${M.name.en.toLowerCase()}!`}),g(p)}}function g(p){p._dx=p._dy=0,p.style.transition="transform .35s cubic-bezier(.3,1.5,.5,1)",p.style.transform="",p.classList.remove("lifted")}function y(p){let m=0,M=0,E=!1,_=null;p.addEventListener("pointerdown",w=>{_=w.pointerId,p.setPointerCapture(_),m=w.clientX,M=w.clientY,E=!1,p.style.transition="none",p.classList.add("lifted"),qt.tap()}),p.addEventListener("pointermove",w=>{if(w.pointerId!==_)return;let A=w.clientX-m,x=w.clientY-M;Math.hypot(A,x)>6&&(E=!0),p._dx=A,p._dy=x,p.style.transform=`translate(${A}px, ${x}px) scale(1.08)`});let S=w=>{if(w.pointerId!==_)return;if(_=null,!E){d=p,p.classList.add("lifted"),p.style.transform="scale(1.08)";return}p.style.visibility="hidden";let A=document.elementFromPoint(w.clientX,w.clientY)?.closest(".hole");p.style.visibility="";let x=A;if(!x){let[T,R]=qe(p),D=1/0;l.forEach(U=>{let[k,L]=qe(U),O=Math.hypot(k-T,L-R);O<D&&O<U.clientWidth*.8&&(D=O,x=U)})}x&&!x.classList.contains("filled")?f(p,x):g(p)};p.addEventListener("pointerup",S),p.addEventListener("pointercancel",S)}n.progress(s,12),Pe(250).then(u)}r()}};var xh=[3,4,6],hf={id:"hafiza",title:{tr:"Haf\u0131za Kartlar\u0131",en:"Memory Cards"},theme:"treasure",start(n){let t=0;function e(){if(!n.alive())return;if(t>=xh.length)return n.finish();n.progress(t,xh.length);let i=xh[t],s=je(ke,i),r=ye([...s,...s]),a=[],o=0,l=!1,c=r.map((h,d)=>{let u=z("button",{class:"mcard pop-in",style:{animationDelay:`${d*45}ms`},"aria-label":"Kart"},z("span",{class:"mc-inner"},z("span",{class:"mc-back",html:We.star}),z("span",{class:"mc-front",style:{background:h.color},html:Ve(h.id)})));return u._a=h,u.addEventListener("click",async()=>{if(l||u.classList.contains("up")||(u.classList.add("up"),u.setAttribute("aria-label",h.name.tr),qt.flip(),n.say(h.name),a.push(u),a.length<2))return;l=!0;let[f,g]=a;f._a===g._a?(await Pe(350),f.classList.add("match"),g.classList.add("match"),n.good(g),o++,a=[],l=!1,o===i&&(t++,await Pe(1200),e())):(await Pe(1e3),f.classList.remove("up"),g.classList.remove("up"),qt.flip(),a=[],l=!1)}),u});n.board.replaceChildren(z("div",{class:`mgrid p${i}`},c)),n.prompt(t===0?{tr:"Kartlar\u0131 \xE7evir, ayn\u0131 iki hayvan\u0131 bul!",en:"Flip the cards and find two that match!"}:{tr:"S\xFCper! \u015Eimdi daha \xE7ok kart var!",en:"Super! Now there are more cards!"})}e()}};var uf=[{c:"#FF4B4B",n:"Do"},{c:"#FF9A2E",n:"Re"},{c:"#FFD43B",n:"Mi"},{c:"#5BBA6F",n:"Fa"},{c:"#2EC4B6",n:"Sol"},{c:"#3FA7D6",n:"La"},{c:"#9B6DD6",n:"Si"},{c:"#FF7EB6",n:"Do"}],es=[{name:{tr:"Parla Parla K\xFC\xE7\xFCk Y\u0131ld\u0131z",en:"Twinkle Twinkle Little Star"},notes:[0,0,4,4,5,5,4,3,3,2,2,1,1,0]},{name:{tr:"Ne\u015Fe \u015Eark\u0131s\u0131",en:"Ode to Joy"},notes:[2,2,3,4,4,3,2,1,0,0,1,2,2,1,1]}],df={id:"muzik",title:{tr:"M\xFCzik",en:"Music"},theme:"stage",start(n){let t=0,e=0,i=!1,s=uf.map((f,g)=>{let y=z("button",{class:"xbar",style:{"--c":f.c,"--h":`${100-g*6}%`},"aria-label":f.n},z("span",{},f.n));return y.addEventListener("pointerdown",p=>{p.preventDefault(),h(g,!0)}),y}),r=z("div",{class:"note-fx","aria-hidden":"true"}),a=z("button",{class:"btn btn-pill","aria-label":"Dinle"},"\u25B6 ",z("span",{},""));n.board.replaceChildren(z("div",{class:"xylo-wrap"},r,z("div",{class:"xylo"},s)),z("div",{class:"xylo-tools"},a));function o(){a.lastChild.textContent=n.label({tr:"Dinle",en:"Listen"})}o();function l(f){let g=s[f];g.classList.remove("hit"),g.offsetWidth,g.classList.add("hit"),qt.note($s[f]);let y=z("i",{style:{left:`${(f+.5)*(100/8)}%`,color:uf[f].c}},f%2?"\u266A":"\u266B");r.append(y),setTimeout(()=>y.remove(),1200)}function c(){s.forEach(g=>g.classList.remove("next"));let f=es[t];f&&e<f.notes.length&&s[f.notes[e]].classList.add("next")}function h(f,g){if(i&&g||(l(f),!g))return;let y=es[t];if(y){if(y.notes[e]===f&&(e++,n.progress(es.slice(0,t).reduce((p,m)=>p+m.notes.length,0)+e,es.reduce((p,m)=>p+m.notes.length,0)),e>=y.notes.length)){if(s.forEach(p=>p.classList.remove("next")),t++,e=0,n.good(s[f]),t>=es.length){n.later(()=>n.finish(),1200);return}n.later(()=>u(),1500);return}c()}}async function d(){if(!i){i=!0,s.forEach(f=>f.classList.remove("next"));for(let f of es[t].notes){if(!n.alive())return;l(f),await Pe(420)}i=!1,c()}}a.addEventListener("click",d);async function u(){if(!n.alive())return;let f=es[t];await n.prompt({tr:`${f.name.tr} \u015Fark\u0131s\u0131n\u0131 \xE7alal\u0131m! Parlayan tu\u015Fa dokun.`,en:`Let's play ${f.name.en}! Tap the glowing bar.`}),c()}n.progress(0,1),u()}};var de=`class="rg" stroke="${Wt}" stroke-width="3.5" stroke-linejoin="round"`,vl=`fill="none" stroke="${Wt}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" pointer-events="none"`,Ml=n=>`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="art">${n}</svg>`;function Ty(){let n="";for(let t=0;t<6;t++)n+=`<ellipse ${de} cx="100" cy="44" rx="15" ry="22" transform="rotate(${t*60} 100 70)"/>`;return n}var ff=[{id:"balik",name:{tr:"Bal\u0131k",en:"Fish"},svg:Ml(`
      <path ${de} d="M150 100 L192 64 Q184 100 192 136 Z"/>
      <path ${de} d="M62 66 Q92 22 128 68 Z"/>
      <path ${de} d="M84 132 Q100 166 118 134 Z"/>
      <ellipse ${de} cx="96" cy="100" rx="62" ry="40"/>
      <path ${de} d="M86 62 Q74 100 86 138 L100 139 Q88 100 100 61 Z"/>
      <path ${de} d="M114 63 Q104 100 114 137 L126 135 Q116 100 126 66 Z"/>
      <circle ${de} cx="30" cy="52" r="9"/><circle ${de} cx="46" cy="28" r="6"/><circle ${de} cx="22" cy="24" r="5"/>
      <circle cx="56" cy="90" r="11" fill="#fff" stroke="${Wt}" stroke-width="3.5" pointer-events="none"/>
      <circle cx="58" cy="91" r="5" fill="${Wt}" pointer-events="none"/>
      <path ${vl} d="M38 108 q8 6 14 0"/>`)},{id:"ev",name:{tr:"Ev",en:"House"},svg:Ml(`
      <rect ${de} x="2" y="166" width="196" height="32" rx="6"/>
      <circle ${de} cx="166" cy="32" r="18"/>
      <path ${de} d="M20 40 Q20 26 34 28 Q40 14 56 20 Q72 18 70 32 Q78 42 64 44 H30 Q16 44 20 40Z"/>
      <path ${de} d="M128 44 h18 v40 h-18z"/>
      <rect ${de} x="42" y="90" width="116" height="78"/>
      <path ${de} d="M30 94 L100 36 L170 94 Z"/>
      <rect ${de} x="87" y="118" width="28" height="50" rx="4"/>
      <rect ${de} x="54" y="106" width="24" height="24" rx="3"/>
      <rect ${de} x="124" y="106" width="24" height="24" rx="3"/>
      <path ${vl} d="M66 106 v24 M54 118 h24 M136 106 v24 M124 118 h24"/>
      <circle cx="109" cy="144" r="3" fill="${Wt}" pointer-events="none"/>`)},{id:"cicek",name:{tr:"\xC7i\xE7ek",en:"Flower"},svg:Ml(`
      <rect ${de} x="95" y="88" width="10" height="58"/>
      <path ${de} d="M100 128 Q76 106 58 118 Q78 140 100 128Z"/>
      <path ${de} d="M100 114 Q124 92 142 104 Q122 128 100 114Z"/>
      ${Ty()}
      <circle ${de} cx="100" cy="70" r="17"/>
      <path ${de} d="M70 154 H130 L122 194 H78 Z"/>
      <rect ${de} x="62" y="142" width="76" height="16" rx="5"/>
      <circle cx="94" cy="67" r="2.6" fill="${Wt}" pointer-events="none"/><circle cx="106" cy="67" r="2.6" fill="${Wt}" pointer-events="none"/>
      <path ${vl} d="M94 75 q6 5 12 0"/>`)},{id:"araba",name:{tr:"Araba",en:"Car"},svg:Ml(`
      <rect ${de} x="2" y="168" width="196" height="30" rx="6"/>
      <path ${de} d="M54 108 L74 74 H130 L154 108 Z"/>
      <path ${de} d="M18 128 Q18 108 40 106 H160 Q182 108 182 128 V148 Q182 156 172 156 H28 Q18 156 18 148 Z"/>
      <path ${de} d="M70 104 L82 82 H100 V104 Z"/>
      <path ${de} d="M108 104 V82 H126 L140 104 Z"/>
      <circle ${de} cx="56" cy="158" r="17"/><circle ${de} cx="146" cy="158" r="17"/>
      <circle ${de} cx="171" cy="124" r="6"/>
      <circle cx="56" cy="158" r="6" fill="#fff" stroke="${Wt}" stroke-width="3" pointer-events="none"/>
      <circle cx="146" cy="158" r="6" fill="#fff" stroke="${Wt}" stroke-width="3" pointer-events="none"/>
      <path ${vl} d="M104 110 V150 M112 122 h10"/>`)}],Sl=[{hex:"#FF4B4B",name:{tr:"k\u0131rm\u0131z\u0131",en:"red"}},{hex:"#FF9A2E",name:{tr:"turuncu",en:"orange"}},{hex:"#FFD43B",name:{tr:"sar\u0131",en:"yellow"}},{hex:"#5BBA6F",name:{tr:"ye\u015Fil",en:"green"}},{hex:"#2EC4B6",name:{tr:"turkuaz",en:"teal"}},{hex:"#3FA7D6",name:{tr:"mavi",en:"blue"}},{hex:"#9B6DD6",name:{tr:"mor",en:"purple"}},{hex:"#FF7EB6",name:{tr:"pembe",en:"pink"}},{hex:"#A86B45",name:{tr:"kahverengi",en:"brown"}},{hex:"#8A8FA3",name:{tr:"gri",en:"gray"}}];var pf={id:"boyama",title:{tr:"Boyama",en:"Coloring"},theme:"studio",start(n){let t=ye(ff).slice(0,3),e=0,i=Sl[Math.random()*Sl.length|0],s=Sl.map(a=>{let o=z("button",{class:"swatch",style:{"--c":a.hex},"aria-label":a.name.tr});return o.addEventListener("click",()=>{i=a,s.forEach(l=>l.classList.toggle("on",l===o)),qt.tap(),n.say(a.name)}),a===i&&o.classList.add("on"),o});function r(){if(!n.alive())return;if(e>=t.length)return n.finish();n.progress(e,t.length);let a=t[e],o=z("div",{class:"cpage pop-in",html:a.svg}),l=[...o.querySelectorAll(".rg")],c=z("button",{class:"btn btn-big btn-leaf cdone","aria-label":"Bitti",html:We.check});c.hidden=!0;let h=!1;l.forEach(d=>{d.setAttribute("fill","#ffffff"),d.addEventListener("pointerdown",u=>{u.preventDefault(),d.setAttribute("fill",i.hex),d.dataset.c="1",d.classList.remove("splash"),d.getBoundingClientRect(),d.classList.add("splash"),qt.paint(),l.filter(g=>g.dataset.c).length>=Math.ceil(l.length*.7)&&c.hidden&&(c.hidden=!1,h||(h=!0,n.say({tr:"\xC7ok g\xFCzel! Bitince kocaman tik tu\u015Funa dokun.",en:"Beautiful! Tap the big check when you are done."})))})}),c.addEventListener("click",async()=>{c.dataset.used||(c.dataset.used="1",o.classList.add("framed"),n.good(o),await Promise.all([n.say({tr:`Harika bir ${a.name.tr.toLocaleLowerCase("tr")} oldu!`,en:`What a great ${a.name.en.toLowerCase()}!`}),Pe(1500)]),e++,r())}),n.board.replaceChildren(z("div",{class:"color-wrap"},o,z("div",{class:"palette"},s,c))),n.prompt({tr:`${a.name.tr} boyayal\u0131m! Bir renk se\xE7, sonra resme dokun.`,en:`Let's color the ${a.name.en.toLowerCase()}! Pick a color, then tap the picture.`})}r()}};var Ay="ABC\xC7DEFGHI\u0130JKLMNO\xD6PRS\u015ETU\xDCVYZ".split(""),Cy="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),Ry={A:"a",B:"be",C:"ce",\u00C7:"\xE7e",D:"de",E:"e",F:"fe",G:"ge",\u011E:"yumu\u015Fak ge",H:"he",I:"\u0131",\u0130:"i",J:"je",K:"ke",L:"le",M:"me",N:"ne",O:"o",\u00D6:"\xF6",P:"pe",R:"re",S:"se",\u015E:"\u015Fe",T:"te",U:"u",\u00DC:"\xFC",V:"ve",Y:"ye",Z:"ze"},Py=n=>n.charAt(0).toLocaleUpperCase("tr")+n.slice(1),Iy=n=>n.charAt(0).toUpperCase()+n.slice(1),Ly=[...ke.map(n=>({art:()=>Ve(n.id),word:{tr:n.name.tr,en:n.name.en},tint:n.color})),...On.map(n=>({art:()=>`<div class="fruit-art">${li(n.id)}</div>`,word:{tr:Py(n.name.tr),en:Iy(n.en1)},tint:"#FFF3D6"}))],mf={id:"harfler",title:{tr:"Harfler",en:"Letters"},theme:"abc",start(n){let e=Me.settings.lang==="en"?"en":"tr",i=e==="en"?Cy:Ay,s=h=>e==="en"?h.charAt(0).toUpperCase():h.charAt(0).toLocaleUpperCase("tr"),r=h=>e==="en"?h.toLowerCase():h.toLocaleLowerCase("tr"),a=h=>e==="en"?h:Ry[h]||h,o=ye(Ly),l=0;function c(){if(!n.alive())return;if(l>=8)return n.finish();n.progress(l,8);let h=o[l%o.length],d=h.word[e],u=s(d),f=ye([u,...je(i.filter(M=>M!==u),2)]),g=!1,y=z("span",{class:"lt-blank"},"?"),p=z("div",{class:"lt-card pop-in",style:{background:h.tint}},z("div",{class:"lt-art",html:h.art()}),z("div",{class:"lt-word"},y,z("span",{},d.slice(1)))),m=f.map((M,E)=>{let _=z("button",{class:"lt-tile pop-in",style:{animationDelay:`${150+E*80}ms`},"aria-label":M,"data-ok":M===u?"1":null},z("b",{},M),z("small",{},r(M)));return _.addEventListener("click",async()=>{g||(M===u?(g=!0,y.textContent=u,y.classList.add("filled"),_.classList.add("win"),n.good(_),await Promise.all([n.say({tr:`${a(u)}! ${d}!`,en:`${a(u)}! ${d}!`},{en:h.word.en}),Pe(1500)]),l++,n.later(c,250)):(n.bad(_),n.say({tr:`Bu harf ${a(M)}. Bir daha dene!`,en:`That is ${M}. Try again!`})))}),_});n.board.replaceChildren(z("div",{class:"lt-wrap"},p,z("div",{class:"lt-tiles"},m))),n.prompt({tr:`${d}! ${d} hangi harfle ba\u015Flar?`,en:`${d}! What letter does ${d} start with?`},{en:h.word.en})}c()}};var bl=[[2,2],[3,2],[3,3]],gf={id:"yapboz",title:{tr:"Yapboz",en:"Puzzle"},theme:"puzzle",start(n){let t=je(ke,bl.length),e=0;function i(){if(!n.alive())return;if(e>=bl.length)return n.finish();n.progress(e,bl.length);let[s,r]=bl[e],a=t[e],o=Ve(a.id).replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,""),l=120/s,c=120/r,h=(M,E)=>`<svg viewBox="${M*l} ${E*c} ${l} ${c}" class="art pz-art" overflow="hidden" aria-hidden="true">${o}</svg>`,d=[],u=z("div",{class:"pz-board pop-in",style:{"--cols":s,"--rows":r,background:a.color}},z("div",{class:"pz-ghost",html:Ve(a.id)}));for(let M=0;M<r;M++)for(let E=0;E<s;E++){let _=z("div",{class:"pz-slot","data-i":String(M*s+E)});d.push(_),u.append(_)}let f=0,g=s*r,y=[];for(let M=0;M<r;M++)for(let E=0;E<s;E++){let _=z("button",{class:"pz-piece","data-i":String(M*s+E),style:{background:a.color},"aria-label":`Par\xE7a ${M*s+E+1}`,html:h(E,M)});y.push(_)}let p=z("div",{class:"pz-tray",style:{"--cols":s,"--rows":r}},ye(y));y.forEach((M,E)=>{M.style.setProperty("--tilt",`${(E%2?1:-1)*(3+E%3*2)}deg`),M.classList.add("pop-in"),M.style.animationDelay=`${200+E*60}ms`}),y.forEach(M=>yl(M,{targets:()=>d.filter(E=>!E.dataset.full),onDrop(E,_){return _.dataset.i!==E.dataset.i?(n.bad(E),!1):(E.dataset.done="1",_.dataset.full="1",qs(E,_,{scale:1}).then(()=>{_.innerHTML=E.innerHTML,_.classList.add("full"),E.remove(),qt.snap(),f++,f===g&&m()}),!0)}}));async function m(){u.classList.add("done"),n.good(u),await Promise.all([n.say({tr:`${a.name.tr}! ${a.sound.tr}`,en:`${a.name.en}! ${a.sound.en}`}),Pe(1600)]),e++,i()}n.board.replaceChildren(z("div",{class:"pz-wrap"},u,p)),n.prompt(e===0?{tr:"Yapbozu tamamla! Par\xE7alar\u0131 yerine s\xFCr\xFCkle.",en:"Finish the puzzle! Drag the pieces into place."}:{tr:"\u015Eimdi daha \xE7ok par\xE7a var!",en:"Now there are more pieces!"})}i()}};var yh=()=>On.map(n=>({key:n.id,svg:li(n.id),name:{tr:n.name.tr,en:n.en1}})),vh=()=>Zr.map(n=>({key:n.id,svg:Ws(n.id,n.color),name:{tr:n.name.tr.toLocaleLowerCase("tr"),en:n.name.en.toLowerCase()}})),Mh=[{unit:"AB",pool:yh},{unit:"AB",pool:vh},{unit:"AAB",pool:yh},{unit:"ABB",pool:vh},{unit:"ABC",pool:yh},{unit:"ABC",pool:vh}],_f={id:"oruntu",title:{tr:"\xD6r\xFCnt\xFC",en:"Patterns"},theme:"beads",start(n){let t=0;async function e(){if(!n.alive())return;if(t>=Mh.length)return n.finish();n.progress(t,Mh.length);let{unit:i,pool:s}=Mh[t],r=s(),a=[...new Set(i)],o=je(r,a.length),l=Object.fromEntries(a.map((S,w)=>[S,o[w]])),c=i.length===2?5:i.length*2-1+1,h=Array.from({length:c+1},(S,w)=>l[i[w%i.length]]),d=h[h.length-1],f=h.slice(0,-1).map(S=>z("div",{class:"pt-item",html:S.svg})),g=z("div",{class:"pt-item pt-hole"},"?"),y=z("div",{class:"pt-row"},f,g),p=je(r.filter(S=>S!==d&&!o.includes(S)),1),m=o.filter(S=>S!==d),M=ye([d,...ye([...m,...p]).slice(0,2)]),E=!0,_=M.map(S=>{let w=z("button",{class:"pt-opt","aria-label":S.name.tr,"data-ok":S===d?"1":null,html:S.svg});return w.addEventListener("click",async()=>{if(!E)if(S===d){E=!0,await qs(w,g,{scale:1}),g.innerHTML=S.svg,g.classList.add("filled"),w.style.visibility="hidden",n.good(g);for(let A=0;A<y.children.length;A++){let x=y.children[A];x.classList.remove("bounce"),x.offsetWidth,x.classList.add("bounce"),qt.note($s[A%$s.length]),await Pe(170)}await Promise.all([n.say({tr:`Evet! S\u0131rada ${S.name.tr} vard\u0131!`,en:`Yes! Next comes the ${S.name.en}!`}),Pe(700)]),t++,e()}else n.bad(w),n.say({tr:"Diziye bir daha bak. Ne tekrar ediyor?",en:"Look again. What repeats?"})}),w});n.board.replaceChildren(z("div",{class:"pt-wrap"},y,z("div",{class:"pt-opts"},_)));for(let S=0;S<f.length;S++){if(!n.alive())return;f[S].classList.add("show"),qt.note($s[a.indexOf(i[S%i.length])*2]),await Pe(230)}g.classList.add("show"),E=!1,n.prompt({tr:"S\u0131rada ne var?",en:"What comes next?"})}e()}};var El={tr:["s\u0131f\u0131r","bir","iki","\xFC\xE7","d\xF6rt","be\u015F","alt\u0131"],en:["zero","one","two","three","four","five","six"]},xf={ayi:"Ay\u0131ya",maymun:"Maymuna",tavsan:"Tav\u015Fana",panda:"Pandaya",fil:"File",kopek:"K\xF6pe\u011Fe",kedi:"Kediye",aslan:"Aslana"},Sh=[{n:2,mixed:!1},{n:3,mixed:!1},{n:3,mixed:!0},{n:4,mixed:!0},{n:5,mixed:!0}],Dy=(n,t)=>t===1?n.en1:n.name.en,yf={id:"besle",title:{tr:"Hayvan\u0131 Besle",en:"Feed the Animal"},theme:"picnic",start(n){let t=ye(ke.filter(s=>xf[s.id])),e=0;function i(){if(!n.alive())return;if(e>=Sh.length)return n.finish();n.progress(e,Sh.length);let{n:s,mixed:r}=Sh[e],a=t[e%t.length],o=On[Math.random()*On.length|0],l=je(On.filter(M=>M!==o),2),c=r?ye([...Array(s+1).fill(o),l[0],l[1],l[0]]):ye(Array(s+2).fill(o)),h=0,d=!1,u=z("div",{class:"fd-dots"},Array.from({length:s},()=>z("i"))),f=z("div",{class:"fd-bubble"},z("div",{class:"fd-want",html:li(o.id)}),z("b",{},`\xD7 ${s}`),u),g=z("div",{class:"fd-animal pop-in",style:{background:a.color},html:Ve(a.id)}),y=z("div",{class:"fd-scene"},f,g),p=c.map((M,E)=>{let _=z("button",{class:"fd-fruit pop-in",style:{animationDelay:`${200+E*60}ms`},"aria-label":M.name.tr,"data-ok":M===o?"1":null,html:li(M.id)});return _._f=M,_});function m(M){if(d||M.dataset.done)return!1;if(M._f!==o)return n.bad(M),g.classList.remove("no"),g.offsetWidth,g.classList.add("no"),n.say({tr:`Hay\u0131r, ben ${o.name.tr} istiyorum!`,en:`No, I want ${o.name.en}!`}),!1;M.dataset.done="1",h++;let E=h;return E===s&&(d=!0),qs(M,g,{scale:.25}).then(async()=>{if(M.style.opacity="0",M.style.pointerEvents="none",qt.chomp(),g.classList.remove("chew"),g.offsetWidth,g.classList.add("chew"),u.children[E-1]?.classList.add("on"),E<s){n.say({tr:El.tr[E],en:El.en[E]});return}n.good(g),await Promise.all([n.say({tr:`${El.tr[s]}! Mmm, \xE7ok doydum, te\u015Fekk\xFCrler!`,en:`${El.en[s]}! Yum, I'm full, thank you!`}),Pe(1500)]),e++,i()}),!0}p.forEach(M=>yl(M,{targets:()=>[g],onDrop:E=>m(E),tap:E=>m(E)})),n.board.replaceChildren(z("div",{class:"fd-wrap"},y,z("div",{class:"fd-tray"},p))),n.prompt({tr:`${xf[a.id]} ${s} ${o.name.tr} ver!`,en:`Give ${a.acc.en} ${s} ${Dy(o,s)}!`})}i()}};var wl=6,vf={id:"saklambac",title:{tr:"Saklamba\xE7",en:"Peekaboo"},theme:"garden",start(n){let t=je(ke,2),e=0,i=0,s=0,r=0,a=Array.from({length:9},()=>{let g=z("button",{class:"mole-pop","aria-label":""}),p={cell:z("div",{class:"mole"},z("div",{class:"mole-pit"}),z("div",{class:"mole-win"},g),z("div",{class:"mole-lip"})),pop:g,animal:null,up:!1,timer:0};return g.addEventListener("pointerdown",m=>{m.preventDefault(),d(p)}),p}),o=z("div",{class:"mole-goal-art"}),l=z("div",{class:"goal-meter"});n.board.replaceChildren(z("div",{class:"goal mole-goal"},o,l),z("div",{class:"mole-grid"},a.map(g=>g.cell)));function c(){let g=t[e];o.innerHTML=Ve(g.id),l.replaceChildren(...Array.from({length:wl},(y,p)=>z("i",{class:p<i?"on":"",style:{"--c":"#FFC93C"}}))),n.prompt({tr:`${g.acc.tr} yakala!`,en:`Catch ${g.acc.en}!`},g.name)}function h(g){g.up=!1,g.cell.classList.remove("up","hit"),g.pop.removeAttribute("data-ok"),clearTimeout(g.timer)}function d(g){if(!g.up)return;let y=t[e];if(g.animal===y){g.cell.classList.add("hit"),qt.boing();let[p,m]=qe(g.pop);if(Kn(p,m,12),pl(1),xl([p,m]),g.up=!1,g.pop.removeAttribute("data-ok"),setTimeout(()=>h(g),260),i++,s++,n.progress(s,wl*t.length),l.children[i-1]?.classList.add("on"),n.mood("happy"),i>=wl){if(e++,i=0,a.forEach(h),e>=t.length){n.later(()=>n.finish(),700);return}u=!0,n.later(()=>{c(),u=!1},900)}}else qt.wrong(),g.pop.classList.remove("shake"),g.pop.offsetWidth,g.pop.classList.add("shake"),n.mood("oops"),Date.now()-r>2500&&(r=Date.now(),n.say({tr:`O ${g.animal.name.tr.toLocaleLowerCase("tr")}! ${y.acc.tr} yakala!`,en:`That's a ${g.animal.name.en.toLowerCase()}! Catch ${y.acc.en}!`}))}let u=!1;function f(){if(n.alive()){if(!u){let g=a.filter(y=>!y.up&&!y.cell.classList.contains("up"));if(g.length&&a.filter(y=>y.up).length<3){let y=g[Math.random()*g.length|0],p=t[e],m=ke.filter(E=>E!==p);y.animal=Math.random()<.5?p:m[Math.random()*m.length|0],y.pop.innerHTML=Ve(y.animal.id),y.pop.setAttribute("aria-label",y.animal.name.tr),y.animal===p&&y.pop.setAttribute("data-ok","1"),y.up=!0,y.cell.classList.add("up"),qt.rise();let M=Math.max(1500,2300-s*60);y.timer=setTimeout(()=>{y.up&&h(y)},M)}}n.later(f,Math.max(650,1e3-s*25))}}return c(),n.progress(0,wl*t.length),n.later(f,1200),()=>a.forEach(g=>clearTimeout(g.timer))}};var bh=[nf,pf,rf,mf,lf,gf,cf,yf,hf,_f,df,vf],Eh=document.getElementById("app");function Fy(){let n=z("button",{class:"btn btn-start","aria-label":"Ba\u015Fla"},z("span",{class:"ico",html:We.play}),z("span",{},"Ba\u015Fla")),t=z("section",{class:"splash"},z("div",{class:"splash-sun","aria-hidden":"true"}),z("div",{class:"splash-sea","aria-hidden":"true"}),z("div",{class:"splash-inner"},jr("splash-mascot"),z("h1",{},z("span",{class:"l1"},"Mete'nin"),z("span",{class:"l2"},"Macera Adas\u0131")),n));Eh.append(t),n.addEventListener("click",()=>{Jd(),Yd(),qt.whoosh(),t.classList.add("out"),setTimeout(()=>t.remove(),600),Ys.show(!0)},{once:!0})}var Ys=(()=>{let n=z("canvas",{class:"world","aria-label":"Macera Adas\u0131"}),t=z("div",{class:"badges"}),e=jr("hub-mascot"),i=z("button",{class:"pofi-btn","aria-label":"Pofi"},e),s=z("button",{class:"btn btn-round btn-leaf album-btn","aria-label":"\xC7\u0131kartma alb\xFCm\xFC",html:We.album}),r=z("button",{class:"parent-btn","aria-label":"Ebeveyn ayarlar\u0131 (bas\u0131l\u0131 tut)",html:We.gear}),a=z("section",{class:"hub",hidden:!0},n,t,z("div",{class:"hub-top"},r),z("div",{class:"hub-bottom"},i,s));Eh.append(a);let o=bh.map(f=>({id:f.id,title:f.title,icon:fh[f.id],titleText:()=>wn(f.title)})),l=null,c=[{tr:"Merhaba! Ben Pofi. Adada bir yere dokun, oyuna ba\u015Flayal\u0131m!",en:"Hi! I'm Pofi. Tap a place on the island to play!"},{tr:"Aday\u0131 parma\u011F\u0131nla \xE7evirebilirsin!",en:"You can spin the island with your finger!"},{tr:"Buras\u0131 benim a\u011Fa\xE7 evim. Ne g\xFCzel, de\u011Fil mi?",en:"This is my tree house. Nice, right?"},{tr:"Hadi, bir macera se\xE7!",en:"Come on, pick an adventure!"}],h=0;function d(){Ui(e,"happy"),qt.tap(),Tn(c[h++%c.length])}function u(){l||(l=kd({canvas:n,badgeLayer:t,zones:o,onSelect(f,g){g==="start"?(qt.whoosh(),Jr(),a.classList.add("leaving")):wh(bh.find(y=>y.id===f))},onTreehouse:d}))}return i.addEventListener("click",d),s.addEventListener("click",()=>{qt.tap(),Ny()}),ef(r,1500,Uy),{show(f=!1){u(),a.hidden=!1,a.classList.remove("leaving"),a.append(_h()),_l(),l.refreshBadgeNames(),l.start(),f&&setTimeout(()=>{Ui(e,"happy"),Tn(c[0]),h=1},900)},hide(){l&&l.stop(),a.hidden=!0},back(){l&&l.back()},relabel(){l&&l.refreshBadgeNames()},debug(){return l&&l.debug()}}})(),Mf=null;function wh(n){let t=new Set,e=!0,i=null,s=z("button",{class:"btn btn-round btn-sea","aria-label":"Adaya d\xF6n",html:We.home}),r=z("button",{class:"btn btn-round btn-sun","aria-label":"Tekrar dinle",html:We.speaker}),a=z("div",{class:"progress",role:"progressbar","aria-valuemin":"0"},z("i",{class:"bar"})),o=z("div",{class:"board"}),l=jr("game-mascot"),c=z("h2",{class:"game-title"},wn(n.title)),h=z("section",{class:`game-screen theme-${n.theme}`},z("header",{class:"game-head"},s,z("div",{class:"head-mid"},c,a),r),o,l);Eh.append(h),h.append(_h()),requestAnimationFrame(()=>h.classList.add("in")),setTimeout(()=>Ys.hide(),350);let d={board:o,alive:()=>e,label:wn,later(y,p){let m=setTimeout(()=>{t.delete(m),e&&y()},p);return t.add(m),m},say:(y,p)=>e?Tn(y,p):Promise.resolve(),prompt(y,p){return i=[y,p],d.say(y,p)},progress(y,p){a.firstChild.style.width=`${Math.min(100,y/p*100)}%`,a.setAttribute("aria-valuenow",String(y)),a.setAttribute("aria-valuemax",String(p))},mood:y=>Ui(l,y),good(y){qt.correct();let[p,m]=qe(y);Kn(p,m),y.classList?.remove("bounce"),y.offsetWidth,y.classList?.add("bounce"),pl(1),xl([p,m]),Ui(l,"happy")},cheer(y){qt.correct();let[p,m]=qe(y);Kn(p,m,12),Ui(l,"happy")},bad(y){qt.wrong(),y.classList.remove("shake"),y.offsetWidth,y.classList.add("shake"),Ui(l,"oops")},async finish(){if(!e)return;e=!1,f(),Wd(n.id),await tf()==="again"?(g(!0),wh(n)):g()}},u=null;function f(){t.forEach(clearTimeout),t.clear();try{u&&u()}catch{}u=null}function g(y=!1){if(e=!1,f(),Jr(),y){h.remove();return}Ys.show(),Ys.back(),h.classList.remove("in"),h.classList.add("out"),setTimeout(()=>h.remove(),400),Mf=null}s.addEventListener("click",()=>{qt.tap(),g()}),r.addEventListener("click",()=>{qt.tap(),i&&Tn(...i)}),l.addEventListener("click",()=>{i&&Tn(...i),Ui(l,"happy")}),Mf={close:g},u=n.start(d)||null}function Ny(){let n=z("button",{class:"btn btn-round btn-sea","aria-label":"Kapat",html:We.close}),t=Me.stickers.length,e=z("div",{class:"album-grid"},ke.map(s=>{let r=Me.stickers.includes(s.id),a=z("button",{class:`sticker ${r?"":"locked"}`,style:{background:r?s.color:""},"aria-label":r?wn(s.name):"Kilitli \xE7\u0131kartma",html:Ve(s.id)});return a.addEventListener("click",()=>{r?(qt.correct(),a.classList.remove("bounce"),a.offsetWidth,a.classList.add("bounce"),Tn({tr:`${s.name.tr}! ${s.sound.tr}`,en:`${s.name.en}! ${s.sound.en}`})):(qt.tap(),Tn({tr:"Bu \xE7\u0131kartmay\u0131 kazanmak i\xE7in oyun oyna!",en:"Play a game to win this sticker!"}))}),a})),i=z("div",{class:"overlay album"},z("div",{class:"album-card",role:"dialog","aria-modal":"true"},z("header",{},z("h2",{},wn({tr:"\xC7\u0131kartma Alb\xFCm\xFCm",en:"My Sticker Book"})),z("span",{class:"album-count"},`${t} / ${ke.length}`),n),e));document.body.append(i),Tn(t?{tr:`${t} \xE7\u0131kartman var! Harika!`,en:`You have ${t} stickers! Great!`}:{tr:"Oyun oynayarak \xE7\u0131kartma topla!",en:"Play games to collect stickers!"}),n.addEventListener("click",()=>{qt.tap(),Jr(),i.classList.add("out"),setTimeout(()=>i.remove(),250)})}function Uy(){qt.tap();let n=Me.settings,t=(r,a,o,l)=>z("div",{class:"seg",role:"radiogroup","aria-label":r},o.map(([c,h])=>{let d=z("button",{class:c===a?"on":"",role:"radio","aria-checked":String(c===a)},h);return d.addEventListener("click",()=>{d.parentElement.querySelectorAll("button").forEach(u=>{u.classList.remove("on"),u.setAttribute("aria-checked","false")}),d.classList.add("on"),d.setAttribute("aria-checked","true"),l(c),ts(),qt.tap()}),d})),e=z("button",{class:"btn btn-round btn-sea","aria-label":"Kapat",html:We.close}),i=z("button",{class:"btn btn-pill btn-danger"},"\u0130lerlemeyi s\u0131f\u0131rla");i.addEventListener("click",()=>{if(i.dataset.sure){Xd(),_l(),i.textContent="S\u0131f\u0131rland\u0131",i.disabled=!0;return}i.dataset.sure="1",i.textContent="Emin misin? Tekrar dokun"});let s=z("div",{class:"overlay parent"},z("div",{class:"parent-card",role:"dialog","aria-modal":"true","aria-label":"Ebeveyn ayarlar\u0131"},z("header",{},z("h2",{},"Ebeveyn ayarlar\u0131"),e),z("label",{},"Oyun dili"),t("Oyun dili",n.lang,[["tr","T\xFCrk\xE7e"],["en","English"],["both","T\xFCrk\xE7e + English"]],r=>{n.lang=r,Ys.relabel()}),z("p",{class:"hint"},"\u201CT\xFCrk\xE7e + English\u201D se\xE7ilince y\xF6nergeler T\xFCrk\xE7e, ard\u0131ndan kelimeler \u0130ngilizce s\xF6ylenir."),z("label",{},"Seslendirme"),t("Seslendirme",n.voice,[[!0,"A\xE7\u0131k"],[!1,"Kapal\u0131"]],r=>{n.voice=r}),z("label",{},"Ses efektleri"),t("Ses efektleri",n.sound,[[!0,"A\xE7\u0131k"],[!1,"Kapal\u0131"]],r=>{n.sound=r}),z("label",{},"Konu\u015Fma h\u0131z\u0131"),t("Konu\u015Fma h\u0131z\u0131",n.rate,[[.8,"Yava\u015F"],[.95,"Normal"],[1.1,"H\u0131zl\u0131"]],r=>{n.rate=r,Tn({tr:"Merhaba Mete!",en:"Hello Mete!"})}),z("div",{class:"parent-stats"},z("span",{},`Y\u0131ld\u0131z: ${Me.stars}`),z("span",{},`\xC7\u0131kartma: ${Me.stickers.length}/${ke.length}`)),i,z("p",{class:"hint"},"Sesler cihaz\u0131n kendi konu\u015Fma sesini kullan\u0131r. iPhone\u2019da daha do\u011Fal ses i\xE7in: Ayarlar \u203A Eri\u015Filebilirlik \u203A Seslendirilen \u0130\xE7erik \u203A Sesler \u203A T\xFCrk\xE7e\u2019den \u201CGeli\u015Fmi\u015F\u201D bir ses indirin.")));document.body.append(s),e.addEventListener("click",()=>{qt.tap(),s.classList.add("out"),setTimeout(()=>s.remove(),250)})}Fy();"serviceWorker"in navigator&&location.protocol==="https:"&&addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));window.__macera={openGame:n=>wh(bh.find(t=>t.id===n)),hub:Ys,store:Me};
