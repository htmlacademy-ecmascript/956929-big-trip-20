(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);i&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",c="month",l="quarter",d="year",u="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,c),r=n-s<0,o=e.clone().add(i+(r?-1:1),c);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=m;var g=function(t){return t instanceof D},b=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},T=_;T.l=b,T.i=g,T.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(T.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return T},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return T.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,l=!!T.u(e)||e,p=T.p(t),h=function(t,e){var i=T.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return l?i:i.endOf(o)},f=function(t,e){return T.w(n.toDate()[t].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case d:return l?h(1,0):h(31,11);case c:return l?h(1,v):h(0,v+1);case a:var $=this.$locale().weekStart||0,g=(m<$?m+7:m)-$;return h(l?_-g:_+(6-g),v);case o:case u:return f(y+"Hours",0);case r:return f(y+"Minutes",1);case s:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,l=T.p(t),p="set"+(this.$u?"UTC":""),h=(a={},a[o]=p+"Date",a[u]=p+"Date",a[c]=p+"Month",a[d]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[l],f=l===o?this.$D+(e-this.$W):e;if(l===c||l===d){var m=this.clone().set(u,1);m.$d[h](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[T.p(t)]()},v.add=function(n,l){var u,p=this;n=Number(n);var h=T.p(l),f=function(t){var e=M(p);return T.w(e.date(e.date()+Math.round(t*n)),p)};if(h===c)return this.set(c,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===o)return f(1);if(h===a)return f(7);var m=(u={},u[s]=t,u[r]=e,u[i]=1e3,u)[h]||1,v=this.$d.getTime()+n*m;return T.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=T.z(this),r=this.$H,o=this.$m,a=this.$M,c=n.weekdays,l=n.months,d=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},u=function(t){return T.s(r%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:T.s(a+1,2,"0"),MMM:d(n.monthsShort,a,l,3),MMMM:d(l,a),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,c,2),ddd:d(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:T.s(r,2,"0"),h:u(1),hh:u(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:T.s(o,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,u,p){var h,f=T.p(u),m=M(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=T.m(this,m);return y=(h={},h[d]=y/12,h[c]=y,h[l]=y/3,h[a]=(_-v)/6048e5,h[o]=(_-v)/864e5,h[r]=_/e,h[s]=_/t,h[i]=_/1e3,h)[f]||_,p?y:T.a(y)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return T.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),C=D.prototype;return M.prototype=C,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",c],["$y",d],["$D",u]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2592e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:c,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},u=function(t){return t instanceof y},p=function(t,e,n){return new y(t,n,e.$l)},h=function(t){return e.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?f(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*d[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(l);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*d[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/c),t%=c,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),c=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,l=s.format||r.format||a.format?"T":"",d=(c?"-":"")+"P"+t.format+e.format+i.format+l+s.format+r.format+a.format;return"P"===d||"-P"===d?"P0D":d},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/d[h(t)]},v.get=function(t){var e=this.$ms,n=h(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/d[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*d[h(e)]:u(t)?t.$ms:p(t,this).$ms,p(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return p(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return p(t,{$l:n},e)},s.isDuration=u;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return u(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return u(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},212:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}}}()},412:function(t){t.exports=function(){"use strict";return function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var c=t[a],l=i.base?c[0]+i.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=s(h,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var c=i(t,s),l=0;l<r.length;l++){var d=n(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";const t={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function e(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.BEFOREEND;if(!(e instanceof g))throw new Error("Can render only components");if(null===n)throw new Error("Container element doesn't exist");n.insertAdjacentElement(i,e.element)}function i(t,e){if(!(t instanceof g&&e instanceof g))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function s(t){if(null!==t){if(!(t instanceof g))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var r=n(379),o=n.n(r),a=n(795),c=n.n(a),l=n(569),d=n.n(l),u=n(565),p=n.n(u),h=n(216),f=n.n(h),m=n(589),v=n.n(m),_=n(10),y={};y.styleTagTransform=v(),y.setAttributes=p(),y.insert=d().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=f(),o()(_.Z,y),_.Z&&_.Z.locals&&_.Z.locals;const $="shake";class g{#t=null;constructor(){if(new.target===g)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add($),setTimeout((()=>{this.element.classList.remove($),t?.()}),600)}}var b=n(484),M=n.n(b),T=n(646),D=n.n(T),C=n(212),E=n.n(C),S=n(412),w=n.n(S);M().extend(D()),M().extend(E()),M().extend(w());const A=36e5;function k(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=Math.ceil(Math.min(t,e)),i=Math.floor(Math.max(t,e));return Math.floor(n+Math.random()*(i-n+1))}function H(t,e){return t?M()(t).format(e):""}function I(t){return t?t[0].toUpperCase()+t.slice(1):t}const F={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",DRIVE:"drive",FLIGHT:"flight",CHECK_IN:"check-in",SIGHTSEEING:"sightseeing",RESTAURANT:"restaurant"},O=(F.TRAIN,1),L=95,Y={HOUR_MINUTES:"H:mm",MONTH_DAY:"MMM D",YEAR_MONTH_DAY:"YY-MM-DD",YEAR_MONTH_DAY_TIME:"YYYY-MM-DDTHH:mm",DAY_MONTH_YEAR_TIME_SLASHED:"DD/MM/YY HH:mm"},x="DEFAULT",U="EDITING",N={DAY:"day",EVENT:"event",TIME:"time",PRICE:"price",OFFERS:"offers"};class B extends g{#e=null;constructor(t){let{onSortTypeChange:e}=t;super(),this.#e=e,this.element.addEventListener("change",this.#n)}get template(){return`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      ${Object.values(N).map(((t,e)=>function(t,e){return`\n    <div class="trip-sort__item  trip-sort__item--${t}">\n      <input id="sort-${t}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${t}" data-sort-type="${t}"${e?"checked":""}>\n      <label class="trip-sort__btn" for="sort-${t}">${t}</label>\n    </div>\n  `}(t,0===e))).join("")}\n    </form>\n  `}#n=t=>{t.preventDefault(),this.#e(t.target.dataset.sortType)}}class R extends g{get template(){return'<ul class="trip-events__list"></ul>'}}class P extends g{get template(){return'\n    <p class="trip-events__msg">Click New Event to create your first point</p>\n  '}}class j extends g{#i=null;#s=null;#r=null;#o=null;#a=null;constructor(t){let{trip:e,offers:n,destinations:i,onEditClick:s,onFavoriteClick:r}=t;super(),this.#i=e,this.#s=n,this.#r=i,this.#o=s,this.#a=r,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#l)}get template(){return function(t,e,n){const{type:i,destination:s,dateFrom:r,dateTo:o,basePrice:a,isFavorite:c}=t,l=n.filter((t=>t.id===s))[0].name,d=e[Object.keys(e).filter((t=>t===i))[0]],u=c?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn";return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${H(r,Y.YEAR_MONTH_DAY)}">${H(r,Y.MONTH_DAY)}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${i} ${l}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${H(r,Y.YEAR_MONTH_DAY_TIME)}">${H(r,Y.HOUR_MINUTES)}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${H(o,Y.YEAR_MONTH_DAY_TIME)}">${H(o,Y.HOUR_MINUTES)}</time>\n          </p>\n          <p class="event__duration">${function(t,e){const n=M()(e).diff(M()(t));let i=0;switch(!0){case n>=864e5:i=M().duration(n).format("D[D] H[H] m[M]");break;case n>=A:i=M().duration(n).format("H[H] m[M]");break;case n<A:i=M().duration(n).format("m[M]")}return i}(r,o)}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${a}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        ${p=d,`<ul class="event__selected-offers">\n  ${p.map((t=>{let{title:e,price:n}=t;return`<li class="event__offer">\n      <span class="event__offer-title">${e}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${n}</span>\n    </li>`})).join("")}\n  </ul>`}\n        <button class="${u}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `;var p}(this.#i,this.#s,this.#r)}#c=t=>{t.preventDefault(),this.#o()};#l=t=>{t.preventDefault(),this.#a()}}function Z(t,e,n,i){const{type:s,destination:r,dateFrom:o,dateTo:a,basePrice:c}=t,l=i.filter((t=>t.id===r))[0].name;return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n            <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n              ${d=F,`\n    ${Object.values(d).map((t=>`<div class="event__type-item">\n        <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n        <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${I(t)}</label>\n      </div>`)).join("")}\n  `}\n            </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${I(s)}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${l}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${function(t){return`${t.map((t=>`<option value="${t}"></option>`)).join("")}`}(n)}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${H(o,Y.DAY_MONTH_YEAR_TIME_SLASHED)}">\n            —\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${H(a,Y.DAY_MONTH_YEAR_TIME_SLASHED)}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              €\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${c}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        ${function(t,e,n){const{destination:i}=e,s=n.filter((t=>t.id===i))[0].description;return`\n    <section class="event__details">\n     \n\n      <section class="event__section  event__section--destination">\n        ${function(t,e){return`\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n      <div class="event__available-offers">\n        \n      ${function(t,e){return`\n    ${t[Object.keys(t).filter((t=>t===e.type))].map((t=>{let{title:e,price:n,id:i}=t;return`\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${i}-1" type="checkbox" name="event-offer-${i}" checked="">\n        <label class="event__offer-label" for="event-offer-${i}-1">\n          <span class="event__offer-title">${e}</span>\n          +€&nbsp;\n          <span class="event__offer-price">${n}</span>\n        </label>\n      </div>`})).join("")}\n    `}(t,e)}\n      \n      </div>\n    </section>\n  `}(t,e)}\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${s}</p>\n        ${function(t,e){const{destination:n}=t;return`\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n      ${e.filter((t=>t.id===n))[0].pictures.map((t=>{let{src:e,description:n}=t;return`<img class="event__photo" src="${e}"\n      alt="${n}"></img>`})).join("")}</div>\n      </div>\n    </div>\n  `}(e,n)}\n        \n      </section>\n    </section>\n  `}(e,t,i)}\n      </form>\n     </li>\n  `;var d}class q extends g{#i=null;#s=null;#d=null;#r=null;#u=null;#p=null;constructor(t){let{trip:e,offers:n,destinationsList:i,destinations:s,onFormSubmit:r,onRollUpButtonClick:o}=t;super(),this.#i=e,this.#s=n,this.#d=i,this.#r=s,this.#p=o,this.#u=r,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#h),this.element.querySelector(".event__reset-btn").addEventListener("click",this.#h),this.element.querySelector(".event.event--edit").addEventListener("submit",this.#f)}get template(){return Z(this.#i,this.#s,this.#d,this.#r)}#h=t=>{t.preventDefault(),this.#p()};#f=t=>{t.preventDefault()}}class W{#m=null;#v=null;#_=null;#i=null;#y;#$;#d;#g=x;#b=null;#M=null;constructor(t){let{tripContainer:e,offers:n,destinations:i,destinationsList:s,onDataChange:r,onModeChange:o}=t;this.#m=e,this.#y=n,this.#$=i,this.#d=s,this.#v=r,this.#_=o}init(t){this.#i=t;const n=this.#b,r=this.#M;this.#b=new j({trip:this.#i,offers:this.#y,destinations:this.#$,destinationsList:this.#d,onEditClick:this.#o,onFavoriteClick:this.#a}),this.#M=new q({trip:this.#i,offers:this.#y,destinations:this.#$,destinationsList:this.#d,onFormSubmit:this.#u,onRollUpButtonClick:this.#p}),null!==r&&null!==n?(this.#g===U&&i(this.#M,r),this.#g===x&&i(this.#b,n),s(n),s(r)):e(this.#b,this.#m)}destroy(){s(this.#b),s(this.#M)}resetView(){this.#g!==x&&this.#T()}#T(){i(this.#b,this.#M),document.removeEventListener("keydown",this.#D),this.#g=x}#C(){i(this.#M,this.#b),document.addEventListener("keydown",this.#D),this.#_(),this.#g=U}#D=t=>{"Escape"===t.key&&(t.preventDefault(),this.#T())};#o=()=>{this.#C()};#u=t=>{this.#v(t),this.#T()};#p=()=>{this.#T()};#a=()=>{this.#v({...this.#i,isFavorite:!this.#i.isFavorite})}}function V(t,e){return function(t,e){return M()(t.dateFrom).diff(M()(e.dateFrom))}(t,e)}function G(t,e){return function(t,e){const n=M()(t.dateTo).diff(M()(t.dateFrom));return M()(e.dateTo).diff(M()(e.dateFrom))-n}(t,e)}function X(t,e){return t.basePrice-e.basePrice}function z(t,e){switch(e){case N.TIME:t.sort(G);break;case N.PRICE:t.sort(X);break;default:t.sort(V)}}let K=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");const J=[{type:F.TAXI,destination:k(0,5),dateFrom:new Date(Date.parse("2023-07-03T13:12:44.845Z")),dateTo:new Date(Date.parse("2023-07-03T14:34:38.375Z")),basePrice:k(O,L),offers:[101,102],isFavorite:!0},{type:F.BUS,destination:k(0,5),dateFrom:new Date(Date.parse("2023-07-03T13:12:44.845Z")),dateTo:new Date(Date.parse("2023-07-04T16:34:38.375Z")),basePrice:k(O,L),offers:[104],isFavorite:!1},{type:F.TRAIN,destination:k(0,5),dateFrom:new Date(Date.parse("2023-07-16T12:23:22.845Z")),dateTo:new Date(Date.parse("2023-07-27T14:45:45.375Z")),basePrice:k(O,L),offers:[],isFavorite:!1},{type:F.SHIP,destination:k(0,5),dateFrom:new Date(Date.parse("2023-12-13T05:03:02.845Z")),dateTo:new Date(Date.parse("2023-12-13T10:10:11.375Z")),basePrice:k(O,L),offers:[107,108],isFavorite:!0}];function Q(){return{id:K(),...(t=J,t[Math.floor(Math.random()*t.length)])};var t}const tt={[F.TAXI]:[{id:101,title:`${F.TAXI} comfort`,price:k(O,L)},{id:102,title:`${F.TAXI} econom`,price:k(O,L)}],[F.BUS]:[{id:103,title:`${F.BUS} yellow`,price:k(O,L)},{id:104,title:`${F.BUS} red`,price:k(O,L)}],[F.TRAIN]:[{id:105,title:`${F.TRAIN} fast`,price:k(O,L)},{id:106,title:`${F.TRAIN} middle`,price:k(O,L)}],[F.SHIP]:[{id:107,title:`${F.SHIP} big`,price:k(O,L)},{id:108,title:`${F.SHIP} little`,price:k(O,L)}],[F.FLIGHT]:[{id:109,title:`${F.FLIGHT} aeroflot`,price:k(O,L)},{id:110,title:`${F.FLIGHT} pobeda`,price:k(O,L)}]},et=[{id:0,name:"Moscow",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Moscow description city"},{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Moscow description city"}]},{id:1,name:"Kazan",description:"Cras aliquet varius magna, non porta ligula feugiat eget.",pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Kazan description city"},{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Kazan description city"}]},{id:2,name:"Sochi",description:"Таким образом консультация с широким активом позволяет оценить значение модели развития.",pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Sochi description city"},{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Sochi description city"}]},{id:3,name:"New York",description:"Бла-бла-бла",pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"New York description city"},{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"New York description city"}]},{id:4,name:"Las Vegas",description:"Ура Лас Вегас",pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Las Vegas description city"},{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Las Vegas description city"}]},{id:5,name:"Edinburgh",description:"Какой то текст",pictures:[{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Edinburgh description city"},{src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,description:"Edinburgh description city"}]}],nt={everything:t=>[...t],future:t=>t.filter((t=>{return e=t.dateFrom,M()().isBefore(e,"D");var e})),present:t=>t.filter((t=>function(t,e){const n=M()().isSameOrAfter(M()(t),"D"),i=M()().isSameOrBefore(M()(e),"D");return n&&i}(t.dateFrom,t.dateTo))),past:t=>t.filter((t=>{return e=t.dateTo,M()().isAfter(e,"D");var e}))},it=document.querySelector(".trip-main"),st=document.querySelector(".trip-controls__filters"),rt=document.querySelector(".trip-events"),ot=new class{#E=Array.from({length:5},Q);#y=function(){return tt}();#$=function(){return et}();#S=this.#$.map((t=>{let{name:e}=t;return e}));get trips(){return this.#E}get offers(){return this.#y}get destinations(){return this.#$}get destinationsList(){return this.#$.map((t=>{let{name:e}=t;return e}))}},at=new class{#w=null;#A=null;#k;#y;#$;#d;#H=new Map;#I=new R;#F=null;#O=new P;#L=N.DAY;constructor(t){let{tripPointEditContainer:e,tripsModel:n}=t;this.#w=e,this.#A=n}init(){this.#k=[...this.#A.trips],this.#y={...this.#A.offers},this.#$=[...this.#A.destinations],this.#d=[...this.#A.destinationsList],z(this.#k,this.#L),0===this.#k.length?this.#Y():(this.#x(),this.#U(),this.#N(this.#k,this.#y,this.#$,this.#d))}#Y(){e(this.#O,this.#w)}#x(){this.#F=new B({onSortTypeChange:this.#e}),e(this.#F,this.#w)}#e=t=>{this.#L!==t&&(this.#B(t),this.#R(),this.#N(this.#k,this.#y,this.#$,this.#d))};#B(t){z(this.#k,t),this.#L=t}#R(){this.#H.forEach((t=>t.destroy())),this.#H.clear()}#U(){e(this.#I,this.#w)}#N(t,e,n,i){for(let s=0;s<t.length;s++)this.#P(t[s],e,n,i)}#P(t,e,n,i){const s=new W({tripContainer:this.#I.element,offers:e,destinations:n,destinationsList:i,onDataChange:this.#j,onModeChange:this.#_});s.init(t),this.#H.set(t.id,s)}#j=t=>{var e,n;this.#k=(e=this.#k,n=t,e.map((t=>t.id===n.id?n:t))),this.#H.get(t.id).init(t)};#_=()=>{this.#H.forEach((t=>t.resetView()))}}({tripPointEditContainer:rt,tripsModel:ot}),ct=(lt=ot.trips,Object.entries(nt).map((t=>{let[e,n]=t;return{type:e,count:n(lt).length}})));var lt;e(new class extends g{get template(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>\n  '}},it,t.AFTERBEGIN),e(new class extends g{#Z=null;constructor(t){super(),this.#Z=t}get template(){return function(t){const e=t.map(((t,e)=>function(t,e){const{type:n,count:i}=t;return`\n  <div class="trip-filters__filter">\n    <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}" ${e?"checked":""} ${0===i?"disabled":""}>\n    <label class="trip-filters__filter-label" for="filter-${n}">${I(n)}</label>\n  </div>`}(t,0===e))).join("");return`\n    <form class="trip-filters" action="#" method="get">\n      ${e}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  `}(this.#Z)}}(ct),st),at.init()})()})();
//# sourceMappingURL=bundle.1f41be73c2536ac067ac.js.map