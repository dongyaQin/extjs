MyDesktop.ZiyuanWindow = Ext.extend(Ext.window.Window, {
	id : 'ziyuan-win',
	init : function() {
		this.launcher = {
			text : '我的资源',
			iconCls : 'icon-ziyuan',
			handler : this.getWindow,
			scope : this
		};
	},
	getWindow : function(){alert("get window!!!!!!!!!!!");}});
	
	

  /* Anti-spam. Want to say hello? Contact (base64) Ym90Z3VhcmQtY29udGFjdEBnb29nbGUuY29tCg== */
  (function(){
  eval('var f=void 0,g,h=this,m=function(a,b){var c=a.split("."),d=h;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==f?d[e]=b:d=d[e]?d[e]:d[e]={}},p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},q=Date.now||function(){return+new Date};new function(){q()};var r=function(a){a=a.replace(/\\r\\n/g,"\\n");for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var w=function(a){try{if(this.c=[],s(this,this.b,0),s(this,this.j,0),s(this,this.n,0),s(this,this.i,[]),s(this,this.f,[]),s(this,this.D,{}),s(this,this.C,"object"==typeof window?window:h),s(this,this.F,this),s(this,this.p,0),s(this,this.A,0),s(this,this.B,0),s(this,this.h,[t(),t(),t(),t()]),s(this,this.m,[]),s(this,this.k,{}),a&&"!"==a[0])this.e=a;else{var b;if(window.atob){var c=window.atob(a);a=[];for(var d=0,e=0;e<c.length;e++){for(var j=c.charCodeAt(e);255<j;)a[d++]=j&255,j>>=8;a[d++]=j}b=a}else b=null;this.d=b;!this.d||!this.d.length?u(this,this.T):this.o()}}catch(k){v(this,k)}};g=w.prototype;g.N=[function(){},function(a){var b=y(a),c=y(a),d=a.a(b),b=z(a,b),e=z(a,c);e==a.g||e==a.l?d=""+d:0<b&&(1==b?d&=255:2==b?d&=65535:4==b&&(d&=4294967295));s(a,c,d)},function(a){var b=y(a),c=z(a,b);if(0<c){for(var d=0,e=0;e<c;e++)d=d<<8|y(a);s(a,b,d)}else if(c!=a.r){d=y(a)<<8|y(a);if(c==a.g)if(c="",a.c[a.s]!=f)for(var j=a.a(a.s),e=0;e<d;e++)var k=j[y(a)<<8|y(a)],c=c+k;else{c=Array(d);for(e=0;e<d;e++)c[e]=y(a);e=c;d=[];for(j=c=0;c<e.length;)if(k=e[c++],128>k)d[j++]=String.fromCharCode(k);else if(191<k&&224>k){var n=e[c++];d[j++]=String.fromCharCode((k&31)<<6|n&63)}else{var n=e[c++],l=e[c++];d[j++]=String.fromCharCode((k&15)<<12|(n&63)<<6|l&63)}c=d.join("")}else{c=Array(d);for(e=0;e<d;e++)c[e]=y(a)}s(a,b,c)}},function(a){y(a)},function(a){var b=y(a),c=y(a),d=y(a),b=a.a(b),c=a.a(c);s(a,d,b[c])},function(a){var b=y(a),c=y(a),b=a.a(b);s(a,c,p(b))},function(a){var b=y(a),c=y(a),d=z(a,b),e=z(a,c);d==a.g&&e==a.g?(a.c[c]==f&&s(a,c,""),s(a,c,a.a(c)+a.a(b))):e==a.l&&(0>d?(b=a.a(b),d==a.g&&(b=r(""+b)),(c==a.f||c==a.h||c==a.m)&&A(a,c,B(b.length,2)),A(a,c,b)):0<d&&(b=a.a(b),A(a,c,B(b,d))))},function(a){var b=y(a),c=y(a);s(a,c,function(a){return eval(a)}(a.a(b)))},function(a){var b=y(a),c=y(a);s(a,c,a.a(c)-a.a(b))},function(a){var b=C(a),c=b.K.apply(b.self,b.z);s(a,b.L,c)},function(a){var b=y(a),c=y(a);s(a,c,a.a(c)%a.a(b))},function(a){var b=a.a(y(a)),c=a.a(y(a)),d=a.a(y(a)),e=a.a(y(a));b.addEventListener(c,D(a,d,e),false)},function(a){var b=a.a(y(a)),c=a.a(y(a));a=a.a(y(a));b[c]=a},function(){},function(a){var b=y(a),c=y(a);s(a,c,a.a(c)+a.a(b))},function(a){var b=y(a),c=y(a);0!=a.a(b)&&s(a,a.b,a.a(c))},function(a){var b=y(a),c=y(a),d=y(a);a.a(b)==a.a(c)&&s(a,d,a.a(d)+1)},function(a){var b=y(a),c=y(a),d=y(a);a.a(b)>a.a(c)&&s(a,d,a.a(d)+1)},function(a){var b=y(a),c=y(a),d=y(a);s(a,d,a.a(b)<<c)},function(a){var b=y(a),c=y(a),d=y(a);s(a,d,a.a(b)|a.a(c))},function(a){var b=a.a(y(a));a.G.push(a.c.slice());a.c[a.b]=f;s(a,a.b,b)},function(a){var b=a.G.pop();if(b){for(var c=y(a);0<c;c--){var d=y(a);b[d]=a.c[d]}a.c=b}else s(a,a.b,a.d.length)},function(a){var b=y(a),c=y(a),d=y(a);s(a,d,(a.a(b)in a.a(c))+0)},function(a){var b=y(a),c=a.a(y(a)),d=a.a(y(a));s(a,b,D(a,c,d))},function(a){var b=y(a),c=y(a);s(a,c,a.a(c)*a.a(b))},function(a){var b=y(a),c=y(a),d=y(a);s(a,d,a.a(b)>>c)},function(a){var b=y(a),c=y(a),d=y(a);s(a,d,a.a(b)||a.a(c))},function(a){var b=C(a),c=b.z,d=b.self,e=b.K,j="";switch(c.length){case 0:j=new d[e];break;case 1:j=new d[e](c[0]);break;case 2:j=new d[e](c[0],c[1]);break;case 3:j=new d[e](c[0],c[1],c[2]);break;case 4:j=new d[e](c[0],c[1],c[2],c[3]);break;default:u(a,a.u);return}s(a,b.L,j)},function(a){var b=y(a),c=y(a),d=y(a),e=y(a),b=a.a(b),c=a.a(c),d=a.a(d);a=a.a(e);for(var e=b.length,j=0;j<e;j+=d)c(b.slice(j,j+d),a)}];g.b=0;g.n=1;g.i=2;g.j=3;g.f=4;g.s=5;g.J=6;g.D=7;g.H=8;g.C=9;g.F=10;g.p=11;g.A=12;g.B=13;g.h=14;g.m=15;g.k=16;g.Y=17;g.O=15;g.W=12;g.P=10;g.Q=42;g.aa=0;g.Z=1;g.$=2;g.ba=3;g.da=5;g.ca=6;g.g=-1;g.l=-2;g.r=-3;g.T=17;g.M=21;g.u=22;g.fa=30;g.U=31;g.X=32;g.q={};g.v="caller";g.R=0;var v=function(a,b){a.e=("E:"+b.message+":"+b.stack).substring(0,2048)},t=function(){return 255*Math.random()|0},E=function(a,b,c){for(var d=0;84941944608!=d;)a+=(b<<4^b>>>5)+b^d+c[d&3],d+=2654435769,b+=(a<<4^a>>>5)+a^d+c[d>>>11&3];return[a>>>24,a>>16&255,a>>8&255,a&255,b>>>24,b>>16&255,b>>8&255,b&255]},F=function(a,b){return a[b]<<24|a[b+1]<<16|a[b+2]<<8|a[b+3]},B=function(a,b){for(var c=[],d=b-1;0<=d;d--)c[b-1-d]=a>>8*d&255;return c},A=function(a,b,c,d){var e=a.a(b);b=b==a.h?function(b){var c=e.length,d=c&7;if(4==d){var j=[0,0,0,a.a(a.B)];e.ea=E(F(e,c-8),F(e,c-4),j)}e.push(e.ea[d]^b)}:function(a){e.push(a)};d&&b(d&255);d=c.length;for(var j=0;j<d;j++)b(c[j])},s=function(a,b,c){if(b==a.b||b==a.j)if(a.c[b])a.c[b].S(c);else{var d=c;c=function(){return e()};var e=function(){return d};c.S=function(a){d=a};a.c[b]=c}else{var j=a.a,k=function(){for(var a=n[l.v],b=a===j,a=a&&a[l.v],c=0;a&&a!=x&&a!=H&&a!=I&&20>c;)c++,a=a[l.v];return k[!b+!a+(c>>2)]},n=function(){return k()},l=w.prototype,x=l.o,H=l.I,I=w;k[l.R]=c;a.c[b]=n}b==a.n&&(a.t=f,s(a,a.b,a.a(a.b)+4))};w.prototype.a=function(a){var b=this.c[a];if(b===f)throw u(this,this.fa,0,a),this.q;return b()};var u=function(a,b,c,d){var e=a.a(a.j);b=[b,e>>8&255,e&255];d!=f&&b.push(d);s(a,a.i,b);a.d&&s(a,a.b,a.d.length);c&&(d="",c.message&&(d=c.message.toString()),c.stack!=f&&(d+=": "+c.stack),d=d.substring(0,2048),d=r(d),A(a,a.h,B(d.length,2).concat(d),a.W))},y=function(a){var b=a.a(a.b);if(b>=a.d.length)throw u(a,a.U,0,b),a.q;a.t==f&&(a.t=F(a.d,b-4),a.w=f);if(a.w!=b>>3){a.w=b>>3;var c=[0,0,0,a.a(a.n)];a.V=E(a.t,a.w,c)}s(a,a.b,b+1);return a.d[b]^a.V[b%8]},z=function(a,b){if(b<=a.Y)return b==a.i||b==a.f||b==a.h||b==a.m?a.l:b==a.J||b==a.D||b==a.C||b==a.F||b==a.k?a.r:b==a.s?a.g:4;var c=b%a.ca;return c==a.aa?1:c==a.Z?2:c==a.$?4:c==a.da?a.g:c==a.ba?a.l:a.r};w.prototype.ja=function(a,b){b.push(a[0]<<24|a[1]<<16|a[2]<<8|a[3]);b.push(a[4]<<24|a[5]<<16|a[6]<<8|a[7]);b.push(a[8]<<24|a[9]<<16|a[10]<<8|a[11])};w.prototype.ia=function(a,b,c){var d=a[(b+2)%3];a[b]=a[b]-a[(b+1)%3]-d^(1==b?d<<c:d>>>c)};w.prototype.ha=function(a,b){if(3==a.length){for(var c=0;3>c;c++)b[c]+=a[c];for(var d=[13,8,13,12,16,5,3,10,15],c=0;9>c;c++)b[3](b,c%3,d[c])}};var C=function(a){var b={};b.K=a.a(y(a));b.L=y(a);var c=y(a)-1;b.self=a.a(y(a));for(b.z=[];0<c;)c--,b.z.push(a.a(y(a)));return b},D=function(a,b,c){return function(){s(a,a.J,arguments);s(a,a.k,c);return G(a,b)}},G=function(a,b){var c=a.a(a.b);a.d&&c<a.d.length&&(s(a,a.j,c),u(a,a.X));s(a,a.b,b);return a.o()};w.prototype.o=function(){this.G=[];try{var a=this.d.length;0<this.a(this.i).length&&s(this,this.b,a);for(var b=null,c=0;(c=this.a(this.b))<a;)try{s(this,this.j,c);var d=y(this);(b=this.N[d])?b(this):u(this,this.M,0,d)}catch(e){if(e!=this.q){var j=this.a(this.p);j?(s(this,j,e),s(this,this.p,0)):u(this,this.u,e)}}}catch(k){try{u(this,this.u,k)}catch(n){v(this,n)}}return this.a(this.k)};w.prototype.I=function(){if(this.e)return this.e;try{this.c[this.H]&&G(this,this.a(this.H));var a=this.a(this.i);0<a.length&&A(this,this.f,B(a.length,2).concat(a),this.O);var b=this.a(this.A),b=b-(this.a(this.f).length+4),c=this.a(this.h);4<c.length&&(b-=c.length+3);if(0<b){for(var d=Array(b),e=0;e<b;e++)d[e]=t();A(this,this.f,B(b,2).concat(d),this.P)}4<c.length&&A(this,this.f,B(c.length,2).concat(c),this.Q);var j=[3].concat(this.a(this.f)),k;var n;window.btoa?(n=window.btoa(String.fromCharCode.apply(null,j)),k=n=n.replace(/\\+/g,"-").replace(/\\//g,"_").replace(/=/g,"")):k=null;if(this.e=k)this.e="!"+this.e;else{this.e="";for(e=0;e<j.length;e++){var l=j[e].toString(16);1==l.length&&(l="0"+l);this.e+=l}}}catch(x){v(this,x)}return this.e};w.prototype.ga=function(a){a(this.I())};try{window.addEventListener("unload",function(){},false)}catch(J){}m("botguard.bg",w);m("botguard.bg.prototype.invoke",w.prototype.ga);')})()
  
  
  var f=void 0,g,h=this,
  m=function(a,b){
  var c=a.split("."),d=h;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);
  for(var e;c.length&&(e=c.shift());)!c.length&&b!==f?d[e]=b:d=d[e]?d[e]:d[e]={}
  }
  
  ,p=function(a){
  var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b
  }
  ,q=Date.now||function(){return+new Date};
  new function(){q()};
  var r=function(a){a=a.replace(/\\r\\n/g,"\\n");for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
  ;var w=function(a){try{if(this.c=[],s(this,this.b,0),s(this,this.j,0),s(this,this.n,0),s(this,this.i,[]),s(this,this.f,[]),s(this,this.D,{}),s(this,this.C,"object"==typeof window?window:h),s(this,this.F,this),s(this,this.p,0),s(this,this.A,0),s(this,this.B,0),s(this,this.h,[t(),t(),t(),t()]),s(this,this.m,[]),s(this,this.k,{}),a&&"!"==a[0])this.e=a;else{var b;if(window.atob){var c=window.atob(a);a=[];for(var d=0,e=0;e<c.length;e++){for(var j=c.charCodeAt(e);255<j;)a[d++]=j&255,j>>=8;a[d++]=j}b=a}else b=null;this.d=b;!this.d||!this.d.length?u(this,this.T):this.o()}}catch(k){v(this,k)}
  };g=w.prototype;
  g.N=[
  function(){},
  function(a){var b=y(a),c=y(a),d=a.a(b),b=z(a,b),e=z(a,c);e==a.g||e==a.l?d=""+d:0<b&&(1==b?d&=255:2==b?d&=65535:4==b&&(d&=4294967295));s(a,c,d)},
  function(a){var b=y(a),c=z(a,b);if(0<c){for(var d=0,e=0;e<c;e++)d=d<<8|y(a);s(a,b,d)}else if(c!=a.r){d=y(a)<<8|y(a);if(c==a.g)if(c="",a.c[a.s]!=f)for(var j=a.a(a.s),e=0;e<d;e++)var k=j[y(a)<<8|y(a)],c=c+k;else{c=Array(d);for(e=0;e<d;e++)c[e]=y(a);e=c;d=[];for(j=c=0;c<e.length;)if(k=e[c++],128>k)d[j++]=String.fromCharCode(k);else if(191<k&&224>k){var n=e[c++];d[j++]=String.fromCharCode((k&31)<<6|n&63)}else{var n=e[c++],l=e[c++];d[j++]=String.fromCharCode((k&15)<<12|(n&63)<<6|l&63)}c=d.join("")}else{c=Array(d);for(e=0;e<d;e++)c[e]=y(a)}s(a,b,c)}}
  ,function(a){y(a)},
  function(a){var b=y(a),c=y(a),d=y(a),b=a.a(b),c=a.a(c);s(a,d,b[c])},
  function(a){var b=y(a),c=y(a),b=a.a(b);s(a,c,p(b))},
  function(a){var b=y(a),c=y(a),d=z(a,b),e=z(a,c);d==a.g&&e==a.g?(a.c[c]==f&&s(a,c,""),s(a,c,a.a(c)+a.a(b))):e==a.l&&(0>d?(b=a.a(b),d==a.g&&(b=r(""+b)),(c==a.f||c==a.h||c==a.m)&&A(a,c,B(b.length,2)),A(a,c,b)):0<d&&(b=a.a(b),A(a,c,B(b,d))))},
  function(a){var b=y(a),c=y(a);s(a,c,function(a){return eval(a)}(a.a(b)))},
  function(a){var b=y(a),c=y(a);s(a,c,a.a(c)-a.a(b))},
  function(a){var b=C(a),c=b.K.apply(b.self,b.z);s(a,b.L,c)},
  function(a){var b=y(a),c=y(a);s(a,c,a.a(c)%a.a(b))},
  function(a){var b=a.a(y(a)),c=a.a(y(a)),d=a.a(y(a)),e=a.a(y(a));b.addEventListener(c,D(a,d,e),false)},
  function(a){var b=a.a(y(a)),c=a.a(y(a));a=a.a(y(a));b[c]=a},function(){},
  function(a){var b=y(a),c=y(a);s(a,c,a.a(c)+a.a(b))},
  function(a){var b=y(a),c=y(a);0!=a.a(b)&&s(a,a.b,a.a(c))},
  function(a){var b=y(a),c=y(a),d=y(a);a.a(b)==a.a(c)&&s(a,d,a.a(d)+1)},
  function(a){var b=y(a),c=y(a),d=y(a);a.a(b)>a.a(c)&&s(a,d,a.a(d)+1)},
  function(a){var b=y(a),c=y(a),d=y(a);s(a,d,a.a(b)<<c)},
  function(a){var b=y(a),c=y(a),d=y(a);s(a,d,a.a(b)|a.a(c))},
  function(a){var b=a.a(y(a));a.G.push(a.c.slice());a.c[a.b]=f;s(a,a.b,b)},
  function(a){var b=a.G.pop();if(b){for(var c=y(a);0<c;c--){var d=y(a);b[d]=a.c[d]}a.c=b}else s(a,a.b,a.d.length)},
  function(a){var b=y(a),c=y(a),d=y(a);s(a,d,(a.a(b)in a.a(c))+0)},
  function(a){var b=y(a),c=a.a(y(a)),d=a.a(y(a));s(a,b,D(a,c,d))},
  function(a){var b=y(a),c=y(a);s(a,c,a.a(c)*a.a(b))},
  function(a){var b=y(a),c=y(a),d=y(a);s(a,d,a.a(b)>>c)},
  function(a){var b=y(a),c=y(a),d=y(a);s(a,d,a.a(b)||a.a(c))},
  function(a){var b=C(a),c=b.z,d=b.self,e=b.K,j="";switch(c.length){case 0:j=new d[e];break;case 1:j=new d[e](c[0]);break;case 2:j=new d[e](c[0],c[1]);break;case 3:j=new d[e](c[0],c[1],c[2]);break;case 4:j=new d[e](c[0],c[1],c[2],c[3]);break;default:u(a,a.u);return}s(a,b.L,j)},
  function(a){var b=y(a),c=y(a),d=y(a),e=y(a),b=a.a(b),c=a.a(c),d=a.a(d);a=a.a(e);for(var e=b.length,j=0;j<e;j+=d)c(b.slice(j,j+d),a)}];
  g.b=0;g.n=1;g.i=2;g.j=3;g.f=4;g.s=5;g.J=6;g.D=7;g.H=8;g.C=9;g.F=10;g.p=11;g.A=12;g.B=13;g.h=14;g.m=15;g.k=16;g.Y=17;g.O=15;g.W=12;g.P=10;g.Q=42;g.aa=0;g.Z=1;g.$=2;g.ba=3;g.da=5;g.ca=6;g.g=-1;g.l=-2;g.r=-3;g.T=17;g.M=21;g.u=22;g.fa=30;g.U=31;g.X=32;g.q={};g.v="caller";g.R=0;
  var v=function(a,b){a.e=("E:"+b.message+":"+b.stack).substring(0,2048)},
  t=function(){return 255*Math.random()|0},
  E=function(a,b,c){for(var d=0;84941944608!=d;)a+=(b<<4^b>>>5)+b^d+c[d&3],d+=2654435769,b+=(a<<4^a>>>5)+a^d+c[d>>>11&3];return[a>>>24,a>>16&255,a>>8&255,a&255,b>>>24,b>>16&255,b>>8&255,b&255]},
  F=function(a,b){return a[b]<<24|a[b+1]<<16|a[b+2]<<8|a[b+3]},
  B=function(a,b){for(var c=[],d=b-1;0<=d;d--)c[b-1-d]=a>>8*d&255;return c},
  A=function(a,b,c,d){var e=a.a(b);b=b==a.h?function(b){var c=e.length,d=c&7;if(4==d){var j=[0,0,0,a.a(a.B)];e.ea=E(F(e,c-8),F(e,c-4),j)}e.push(e.ea[d]^b)}:function(a){e.push(a)};d&&b(d&255);d=c.length;for(var j=0;j<d;j++)b(c[j])},
  s=function(a,b,c){if(b==a.b||b==a.j)if(a.c[b])a.c[b].S(c);else{var d=c;c=function(){return e()};var e=function(){return d};c.S=function(a){d=a};a.c[b]=c}else{var j=a.a,k=function(){for(var a=n[l.v],b=a===j,a=a&&a[l.v],c=0;a&&a!=x&&a!=H&&a!=I&&20>c;)c++,a=a[l.v];return k[!b+!a+(c>>2)]},n=function(){return k()},l=w.prototype,x=l.o,H=l.I,I=w;k[l.R]=c;a.c[b]=n}b==a.n&&(a.t=f,s(a,a.b,a.a(a.b)+4))};
  w.prototype.a=function(a){var b=this.c[a];if(b===f)throw u(this,this.fa,0,a),this.q;return b()};
  var u=function(a,b,c,d){var e=a.a(a.j);b=[b,e>>8&255,e&255];d!=f&&b.push(d);s(a,a.i,b);a.d&&s(a,a.b,a.d.length);c&&(d="",c.message&&(d=c.message.toString()),c.stack!=f&&(d+=": "+c.stack),d=d.substring(0,2048),d=r(d),A(a,a.h,B(d.length,2).concat(d),a.W))},
  y=function(a){var b=a.a(a.b);if(b>=a.d.length)throw u(a,a.U,0,b),a.q;a.t==f&&(a.t=F(a.d,b-4),a.w=f);if(a.w!=b>>3){a.w=b>>3;var c=[0,0,0,a.a(a.n)];a.V=E(a.t,a.w,c)}s(a,a.b,b+1);return a.d[b]^a.V[b%8]},
  z=function(a,b){if(b<=a.Y)return b==a.i||b==a.f||b==a.h||b==a.m?a.l:b==a.J||b==a.D||b==a.C||b==a.F||b==a.k?a.r:b==a.s?a.g:4;var c=b%a.ca;return c==a.aa?1:c==a.Z?2:c==a.$?4:c==a.da?a.g:c==a.ba?a.l:a.r};
  w.prototype.ja=function(a,b){b.push(a[0]<<24|a[1]<<16|a[2]<<8|a[3]);b.push(a[4]<<24|a[5]<<16|a[6]<<8|a[7]);b.push(a[8]<<24|a[9]<<16|a[10]<<8|a[11])};
  w.prototype.ia=function(a,b,c){var d=a[(b+2)%3];a[b]=a[b]-a[(b+1)%3]-d^(1==b?d<<c:d>>>c)};
  w.prototype.ha=function(a,b){if(3==a.length){for(var c=0;3>c;c++)b[c]+=a[c];for(var d=[13,8,13,12,16,5,3,10,15],c=0;9>c;c++)b[3](b,c%3,d[c])}};
  var C=function(a){var b={};b.K=a.a(y(a));b.L=y(a);var c=y(a)-1;b.self=a.a(y(a));for(b.z=[];0<c;)c--,b.z.push(a.a(y(a)));return b},
  D=function(a,b,c){return function(){s(a,a.J,arguments);s(a,a.k,c);return G(a,b)}},
  G=function(a,b){var c=a.a(a.b);a.d&&c<a.d.length&&(s(a,a.j,c),u(a,a.X));s(a,a.b,b);return a.o()};
  w.prototype.o=function(){this.G=[];try{var a=this.d.length;0<this.a(this.i).length&&s(this,this.b,a);for(var b=null,c=0;(c=this.a(this.b))<a;)try{s(this,this.j,c);var d=y(this);(b=this.N[d])?b(this):u(this,this.M,0,d)}catch(e){if(e!=this.q){var j=this.a(this.p);j?(s(this,j,e),s(this,this.p,0)):u(this,this.u,e)}}}catch(k){try{u(this,this.u,k)}catch(n){v(this,n)}}return this.a(this.k)};
  w.prototype.I=function(){if(this.e)return this.e;try{this.c[this.H]&&G(this,this.a(this.H));var a=this.a(this.i);0<a.length&&A(this,this.f,B(a.length,2).concat(a),this.O);var b=this.a(this.A),b=b-(this.a(this.f).length+4),c=this.a(this.h);4<c.length&&(b-=c.length+3);if(0<b){for(var d=Array(b),e=0;e<b;e++)d[e]=t();A(this,this.f,B(b,2).concat(d),this.P)}4<c.length&&A(this,this.f,B(c.length,2).concat(c),this.Q);var j=[3].concat(this.a(this.f)),k;var n;window.btoa?(n=window.btoa(String.fromCharCode.apply(null,j)),k=n=n.replace(/\\+/g,"-").replace(/\\//g,"_").replace(/=/g,"")):k=null;if(this.e=k)this.e="!"+this.e;else{this.e="";for(e=0;e<j.length;e++){var l=j[e].toString(16);1==l.length&&(l="0"+l);this.e+=l}}}catch(x){v(this,x)}return this.e};w.prototype.ga=function(a){a(this.I())};try{window.addEventListener("unload",function(){},false)}catch(J){}m("botguard.bg",w);m("botguard.bg.prototype.invoke",w.prototype.ga);
  
