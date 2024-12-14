var be=Object.defineProperty;var _e=(r,n,e)=>n in r?be(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e;var i=(r,n,e)=>_e(r,typeof n!="symbol"?n+"":n,e);import{E as R,G as C,H as ue,I as ve,J as ge,K as ke,L as Te,M as ee,N as de,O as Me,P as Ee,Q as fe,R as Pe,S as ie,T as De,U as le,V as $e,e as m,f as p,g as o,t as w,r as O,d as Ie,o as se,W as Oe,w as Ce,q as N,X as te,j as Z,s as j,Y as Ye,Z as ce,b as qe,c as Le,u as He,l as Ne,$ as Re,F as X,h as K,y as B,z as Qe,a0 as Ve,n as W,v as z,C as J,i as S,a1 as Be}from"./index-qZuTYeIO.js";import{u as We}from"./course-exam-DLHlhXgQ.js";function xe(r,n){const e=R(r);return isNaN(n)?C(r,NaN):(n&&e.setDate(e.getDate()+n),e)}function je(){return Object.assign({},ue())}function Ae(r){let e=R(r).getDay();return e===0&&(e=7),e}function Fe(r,n){const e=n instanceof Date?C(n,0):new n(0);return e.setFullYear(r.getFullYear(),r.getMonth(),r.getDate()),e.setHours(r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()),e}const Ge=10;class me{constructor(){i(this,"subPriority",0)}validate(n,e){return!0}}class Xe extends me{constructor(n,e,s,t,a){super(),this.value=n,this.validateValue=e,this.setValue=s,this.priority=t,a&&(this.subPriority=a)}validate(n,e){return this.validateValue(n,this.value,e)}set(n,e,s){return this.setValue(n,e,this.value,s)}}class ze extends me{constructor(){super(...arguments);i(this,"priority",Ge);i(this,"subPriority",-1)}set(e,s){return s.timestampIsSet?e:C(e,Fe(e,Date))}}class x{run(n,e,s,t){const a=this.parse(n,e,s,t);return a?{setter:new Xe(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(n,e,s){return!0}}class Ze extends x{constructor(){super(...arguments);i(this,"priority",140);i(this,"incompatibleTokens",["R","u","t","T"])}parse(e,s,t){switch(s){case"G":case"GG":case"GGG":return t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"});case"GGGGG":return t.era(e,{width:"narrow"});case"GGGG":default:return t.era(e,{width:"wide"})||t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"})}}set(e,s,t){return s.era=t,e.setFullYear(t,0,1),e.setHours(0,0,0,0),e}}const k={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},q={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function T(r,n){return r&&{value:n(r.value),rest:r.rest}}function _(r,n){const e=n.match(r);return e?{value:parseInt(e[0],10),rest:n.slice(e[0].length)}:null}function L(r,n){const e=n.match(r);if(!e)return null;if(e[0]==="Z")return{value:0,rest:n.slice(1)};const s=e[1]==="+"?1:-1,t=e[2]?parseInt(e[2],10):0,a=e[3]?parseInt(e[3],10):0,l=e[5]?parseInt(e[5],10):0;return{value:s*(t*ve+a*ge+l*ke),rest:n.slice(e[0].length)}}function pe(r){return _(k.anyDigitsSigned,r)}function g(r,n){switch(r){case 1:return _(k.singleDigit,n);case 2:return _(k.twoDigits,n);case 3:return _(k.threeDigits,n);case 4:return _(k.fourDigits,n);default:return _(new RegExp("^\\d{1,"+r+"}"),n)}}function U(r,n){switch(r){case 1:return _(k.singleDigitSigned,n);case 2:return _(k.twoDigitsSigned,n);case 3:return _(k.threeDigitsSigned,n);case 4:return _(k.fourDigitsSigned,n);default:return _(new RegExp("^-?\\d{1,"+r+"}"),n)}}function re(r){switch(r){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function we(r,n){const e=n>0,s=e?n:1-n;let t;if(s<=50)t=r||100;else{const a=s+50,l=Math.trunc(a/100)*100,u=r>=a%100;t=r+l-(u?100:0)}return e?t:1-t}function he(r){return r%400===0||r%4===0&&r%100!==0}class Ue extends x{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,s,t){const a=l=>({year:l,isTwoDigitYear:s==="yy"});switch(s){case"y":return T(g(4,e),a);case"yo":return T(t.ordinalNumber(e,{unit:"year"}),a);default:return T(g(s.length,e),a)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,t){const a=e.getFullYear();if(t.isTwoDigitYear){const u=we(t.year,a);return e.setFullYear(u,0,1),e.setHours(0,0,0,0),e}const l=!("era"in s)||s.era===1?t.year:1-t.year;return e.setFullYear(l,0,1),e.setHours(0,0,0,0),e}}class Ke extends x{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,s,t){const a=l=>({year:l,isTwoDigitYear:s==="YY"});switch(s){case"Y":return T(g(4,e),a);case"Yo":return T(t.ordinalNumber(e,{unit:"year"}),a);default:return T(g(s.length,e),a)}}validate(e,s){return s.isTwoDigitYear||s.year>0}set(e,s,t,a){const l=Te(e,a);if(t.isTwoDigitYear){const f=we(t.year,l);return e.setFullYear(f,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),ee(e,a)}const u=!("era"in s)||s.era===1?t.year:1-t.year;return e.setFullYear(u,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),ee(e,a)}}class Je extends x{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,s){return U(s==="R"?4:s.length,e)}set(e,s,t){const a=C(e,0);return a.setFullYear(t,0,4),a.setHours(0,0,0,0),de(a)}}class Se extends x{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,s){return U(s==="u"?4:s.length,e)}set(e,s,t){return e.setFullYear(t,0,1),e.setHours(0,0,0,0),e}}class et extends x{constructor(){super(...arguments);i(this,"priority",120);i(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,t){switch(s){case"Q":case"QQ":return g(s.length,e);case"Qo":return t.ordinalNumber(e,{unit:"quarter"});case"QQQ":return t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(e,{width:"wide",context:"formatting"})||t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=1&&s<=4}set(e,s,t){return e.setMonth((t-1)*3,1),e.setHours(0,0,0,0),e}}class tt extends x{constructor(){super(...arguments);i(this,"priority",120);i(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,s,t){switch(s){case"q":case"qq":return g(s.length,e);case"qo":return t.ordinalNumber(e,{unit:"quarter"});case"qqq":return t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return t.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(e,{width:"wide",context:"standalone"})||t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=1&&s<=4}set(e,s,t){return e.setMonth((t-1)*3,1),e.setHours(0,0,0,0),e}}class st extends x{constructor(){super(...arguments);i(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);i(this,"priority",110)}parse(e,s,t){const a=l=>l-1;switch(s){case"M":return T(_(k.month,e),a);case"MM":return T(g(2,e),a);case"Mo":return T(t.ordinalNumber(e,{unit:"month"}),a);case"MMM":return t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return t.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(e,{width:"wide",context:"formatting"})||t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=11}set(e,s,t){return e.setMonth(t,1),e.setHours(0,0,0,0),e}}class rt extends x{constructor(){super(...arguments);i(this,"priority",110);i(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,s,t){const a=l=>l-1;switch(s){case"L":return T(_(k.month,e),a);case"LL":return T(g(2,e),a);case"Lo":return T(t.ordinalNumber(e,{unit:"month"}),a);case"LLL":return t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return t.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(e,{width:"wide",context:"standalone"})||t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=11}set(e,s,t){return e.setMonth(t,1),e.setHours(0,0,0,0),e}}function nt(r,n,e){const s=R(r),t=Me(s,e)-n;return s.setDate(s.getDate()-t*7),s}class ot extends x{constructor(){super(...arguments);i(this,"priority",100);i(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,s,t){switch(s){case"w":return _(k.week,e);case"wo":return t.ordinalNumber(e,{unit:"week"});default:return g(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,t,a){return ee(nt(e,t,a),a)}}function at(r,n){const e=R(r),s=Ee(e)-n;return e.setDate(e.getDate()-s*7),e}class it extends x{constructor(){super(...arguments);i(this,"priority",100);i(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,s,t){switch(s){case"I":return _(k.week,e);case"Io":return t.ordinalNumber(e,{unit:"week"});default:return g(s.length,e)}}validate(e,s){return s>=1&&s<=53}set(e,s,t){return de(at(e,t))}}const lt=[31,28,31,30,31,30,31,31,30,31,30,31],ct=[31,29,31,30,31,30,31,31,30,31,30,31];class ut extends x{constructor(){super(...arguments);i(this,"priority",90);i(this,"subPriority",1);i(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,s,t){switch(s){case"d":return _(k.date,e);case"do":return t.ordinalNumber(e,{unit:"date"});default:return g(s.length,e)}}validate(e,s){const t=e.getFullYear(),a=he(t),l=e.getMonth();return a?s>=1&&s<=ct[l]:s>=1&&s<=lt[l]}set(e,s,t){return e.setDate(t),e.setHours(0,0,0,0),e}}class dt extends x{constructor(){super(...arguments);i(this,"priority",90);i(this,"subpriority",1);i(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,s,t){switch(s){case"D":case"DD":return _(k.dayOfYear,e);case"Do":return t.ordinalNumber(e,{unit:"date"});default:return g(s.length,e)}}validate(e,s){const t=e.getFullYear();return he(t)?s>=1&&s<=366:s>=1&&s<=365}set(e,s,t){return e.setMonth(0,t),e.setHours(0,0,0,0),e}}function ne(r,n,e){var M,I,v,D;const s=ue(),t=(e==null?void 0:e.weekStartsOn)??((I=(M=e==null?void 0:e.locale)==null?void 0:M.options)==null?void 0:I.weekStartsOn)??s.weekStartsOn??((D=(v=s.locale)==null?void 0:v.options)==null?void 0:D.weekStartsOn)??0,a=R(r),l=a.getDay(),f=(n%7+7)%7,h=7-t,E=n<0||n>6?n-(l+h)%7:(f+h)%7-(l+h)%7;return xe(a,E)}class ft extends x{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,s,t){switch(s){case"E":case"EE":case"EEE":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return t.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,t,a){return e=ne(e,t,a),e.setHours(0,0,0,0),e}}class xt extends x{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,s,t,a){const l=u=>{const f=Math.floor((u-1)/7)*7;return(u+a.weekStartsOn+6)%7+f};switch(s){case"e":case"ee":return T(g(s.length,e),l);case"eo":return T(t.ordinalNumber(e,{unit:"day"}),l);case"eee":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeeee":return t.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}validate(e,s){return s>=0&&s<=6}set(e,s,t,a){return e=ne(e,t,a),e.setHours(0,0,0,0),e}}class mt extends x{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,s,t,a){const l=u=>{const f=Math.floor((u-1)/7)*7;return(u+a.weekStartsOn+6)%7+f};switch(s){case"c":case"cc":return T(g(s.length,e),l);case"co":return T(t.ordinalNumber(e,{unit:"day"}),l);case"ccc":return t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"ccccc":return t.day(e,{width:"narrow",context:"standalone"});case"cccccc":return t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return t.day(e,{width:"wide",context:"standalone"})||t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"})}}validate(e,s){return s>=0&&s<=6}set(e,s,t,a){return e=ne(e,t,a),e.setHours(0,0,0,0),e}}function pt(r,n){const e=R(r),s=Ae(e),t=n-s;return xe(e,t)}class wt extends x{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,s,t){const a=l=>l===0?7:l;switch(s){case"i":case"ii":return g(s.length,e);case"io":return t.ordinalNumber(e,{unit:"day"});case"iii":return T(t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),a);case"iiiii":return T(t.day(e,{width:"narrow",context:"formatting"}),a);case"iiiiii":return T(t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),a);case"iiii":default:return T(t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),a)}}validate(e,s){return s>=1&&s<=7}set(e,s,t){return e=pt(e,t),e.setHours(0,0,0,0),e}}class ht extends x{constructor(){super(...arguments);i(this,"priority",80);i(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,s,t){switch(s){case"a":case"aa":case"aaa":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,t){return e.setHours(re(t),0,0,0),e}}class yt extends x{constructor(){super(...arguments);i(this,"priority",80);i(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,s,t){switch(s){case"b":case"bb":case"bbb":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,t){return e.setHours(re(t),0,0,0),e}}class bt extends x{constructor(){super(...arguments);i(this,"priority",80);i(this,"incompatibleTokens",["a","b","t","T"])}parse(e,s,t){switch(s){case"B":case"BB":case"BBB":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,s,t){return e.setHours(re(t),0,0,0),e}}class _t extends x{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,s,t){switch(s){case"h":return _(k.hour12h,e);case"ho":return t.ordinalNumber(e,{unit:"hour"});default:return g(s.length,e)}}validate(e,s){return s>=1&&s<=12}set(e,s,t){const a=e.getHours()>=12;return a&&t<12?e.setHours(t+12,0,0,0):!a&&t===12?e.setHours(0,0,0,0):e.setHours(t,0,0,0),e}}class vt extends x{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,s,t){switch(s){case"H":return _(k.hour23h,e);case"Ho":return t.ordinalNumber(e,{unit:"hour"});default:return g(s.length,e)}}validate(e,s){return s>=0&&s<=23}set(e,s,t){return e.setHours(t,0,0,0),e}}class gt extends x{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,s,t){switch(s){case"K":return _(k.hour11h,e);case"Ko":return t.ordinalNumber(e,{unit:"hour"});default:return g(s.length,e)}}validate(e,s){return s>=0&&s<=11}set(e,s,t){return e.getHours()>=12&&t<12?e.setHours(t+12,0,0,0):e.setHours(t,0,0,0),e}}class kt extends x{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,s,t){switch(s){case"k":return _(k.hour24h,e);case"ko":return t.ordinalNumber(e,{unit:"hour"});default:return g(s.length,e)}}validate(e,s){return s>=1&&s<=24}set(e,s,t){const a=t<=24?t%24:t;return e.setHours(a,0,0,0),e}}class Tt extends x{constructor(){super(...arguments);i(this,"priority",60);i(this,"incompatibleTokens",["t","T"])}parse(e,s,t){switch(s){case"m":return _(k.minute,e);case"mo":return t.ordinalNumber(e,{unit:"minute"});default:return g(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,t){return e.setMinutes(t,0,0),e}}class Mt extends x{constructor(){super(...arguments);i(this,"priority",50);i(this,"incompatibleTokens",["t","T"])}parse(e,s,t){switch(s){case"s":return _(k.second,e);case"so":return t.ordinalNumber(e,{unit:"second"});default:return g(s.length,e)}}validate(e,s){return s>=0&&s<=59}set(e,s,t){return e.setSeconds(t,0),e}}class Et extends x{constructor(){super(...arguments);i(this,"priority",30);i(this,"incompatibleTokens",["t","T"])}parse(e,s){const t=a=>Math.trunc(a*Math.pow(10,-s.length+3));return T(g(s.length,e),t)}set(e,s,t){return e.setMilliseconds(t),e}}class Pt extends x{constructor(){super(...arguments);i(this,"priority",10);i(this,"incompatibleTokens",["t","T","x"])}parse(e,s){switch(s){case"X":return L(q.basicOptionalMinutes,e);case"XX":return L(q.basic,e);case"XXXX":return L(q.basicOptionalSeconds,e);case"XXXXX":return L(q.extendedOptionalSeconds,e);case"XXX":default:return L(q.extended,e)}}set(e,s,t){return s.timestampIsSet?e:C(e,e.getTime()-fe(e)-t)}}class Dt extends x{constructor(){super(...arguments);i(this,"priority",10);i(this,"incompatibleTokens",["t","T","X"])}parse(e,s){switch(s){case"x":return L(q.basicOptionalMinutes,e);case"xx":return L(q.basic,e);case"xxxx":return L(q.basicOptionalSeconds,e);case"xxxxx":return L(q.extendedOptionalSeconds,e);case"xxx":default:return L(q.extended,e)}}set(e,s,t){return s.timestampIsSet?e:C(e,e.getTime()-fe(e)-t)}}class $t extends x{constructor(){super(...arguments);i(this,"priority",40);i(this,"incompatibleTokens","*")}parse(e){return pe(e)}set(e,s,t){return[C(e,t*1e3),{timestampIsSet:!0}]}}class It extends x{constructor(){super(...arguments);i(this,"priority",20);i(this,"incompatibleTokens","*")}parse(e){return pe(e)}set(e,s,t){return[C(e,t),{timestampIsSet:!0}]}}const Ot={G:new Ze,y:new Ue,Y:new Ke,R:new Je,u:new Se,Q:new et,q:new tt,M:new st,L:new rt,w:new ot,I:new it,d:new ut,D:new dt,E:new ft,e:new xt,c:new mt,i:new wt,a:new ht,b:new yt,B:new bt,h:new _t,H:new vt,K:new gt,k:new kt,m:new Tt,s:new Mt,S:new Et,X:new Pt,x:new Dt,t:new $t,T:new It},Ct=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,qt=/^'([^]*?)'?$/,Lt=/''/g,Ht=/\S/,Nt=/[a-zA-Z]/;function Rt(r,n,e,s){var H,Q,A,F;const t=je(),a=t.locale??Pe,l=t.firstWeekContainsDate??((Q=(H=t.locale)==null?void 0:H.options)==null?void 0:Q.firstWeekContainsDate)??1,u=t.weekStartsOn??((F=(A=t.locale)==null?void 0:A.options)==null?void 0:F.weekStartsOn)??0,f={firstWeekContainsDate:l,weekStartsOn:u,locale:a},h=[new ze],E=n.match(Yt).map(d=>{const y=d[0];if(y in ie){const Y=ie[y];return Y(d,a.formatLong)}return d}).join("").match(Ct),M=[];for(let d of E){De(d)&&le(d,n,r),$e(d)&&le(d,n,r);const y=d[0],Y=Ot[y];if(Y){const{incompatibleTokens:G}=Y;if(Array.isArray(G)){const c=M.find(V=>G.includes(V.token)||V.token===y);if(c)throw new RangeError(`The format string mustn't contain \`${c.fullToken}\` and \`${d}\` at the same time`)}else if(Y.incompatibleTokens==="*"&&M.length>0)throw new RangeError(`The format string mustn't contain \`${d}\` and any other token at the same time`);M.push({token:y,fullToken:d});const b=Y.run(r,d,a.match,f);if(!b)return C(e,NaN);h.push(b.setter),r=b.rest}else{if(y.match(Nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");if(d==="''"?d="'":y==="'"&&(d=Qt(d)),r.indexOf(d)===0)r=r.slice(d.length);else return C(e,NaN)}}if(r.length>0&&Ht.test(r))return C(e,NaN);const I=h.map(d=>d.priority).sort((d,y)=>y-d).filter((d,y,Y)=>Y.indexOf(d)===y).map(d=>h.filter(y=>y.priority===d).sort((y,Y)=>Y.subPriority-y.subPriority)).map(d=>d[0]);let v=R(e);if(isNaN(v.getTime()))return C(e,NaN);const D={};for(const d of I){if(!d.validate(v,f))return C(e,NaN);const y=d.set(v,D,f);Array.isArray(y)?(v=y[0],Object.assign(D,y[1])):v=y}return C(e,v)}function Qt(r){return r.match(qt)[1].replace(Lt,"'")}const Vt={class:"table table-auto text-sm"},Bt={class:"text-center px-3 py-1.5"},Wt={class:"text-center px-3 py-1.5"},jt={class:"text-center px-3 py-1.5"},At={class:"text-center px-3 py-1.5"},Ft={class:"text-red-500"},Gt={class:"text-center px-3 py-1.5"},Xt={class:"border-t font-bold"},zt={class:"text-center px-3 py-1.5"},Zt={__name:"McqResult",props:{selectedExam:Object},setup(r){return(n,e)=>{var s,t,a,l,u,f,h,E,M,I,v,D;return m(),p("table",Vt,[o("tr",null,[e[0]||(e[0]=o("td",{class:"text-right px-3 py-1.5"},"Total Question",-1)),o("td",Bt,w((s=r.selectedExam)==null?void 0:s.exam_questions_count),1)]),o("tr",null,[e[1]||(e[1]=o("td",{class:"text-right px-3 py-1.5"},"Answered Question",-1)),o("td",Wt,w((a=(t=r.selectedExam)==null?void 0:t.user_exam)==null?void 0:a.user_mcq_answers_count),1)]),o("tr",null,[e[2]||(e[2]=o("td",{class:"text-right px-3 py-1.5"},"Unanswered Question",-1)),o("td",jt,w(((l=r.selectedExam)==null?void 0:l.exam_questions_count)-((f=(u=r.selectedExam)==null?void 0:u.user_exam)==null?void 0:f.user_mcq_answers_count)),1)]),o("tr",null,[e[3]||(e[3]=o("td",{class:"text-right px-3 py-1.5"},"Correct Mark",-1)),o("td",At,w((E=(h=r.selectedExam)==null?void 0:h.user_exam)==null?void 0:E.mcq_correct_mark),1)]),o("tr",Ft,[e[4]||(e[4]=o("td",{class:"text-right px-3 py-1.5"},"Negative Mark",-1)),o("td",Gt,w((I=(M=r.selectedExam)==null?void 0:M.user_exam)==null?void 0:I.mcq_negative_mark),1)]),o("tr",Xt,[e[5]||(e[5]=o("td",{class:"text-right px-3 py-1.5"},"Obtained Mark",-1)),o("td",zt,w((D=(v=r.selectedExam)==null?void 0:v.user_exam)==null?void 0:D.obtained_mark),1)])])}}},Ut={class:"flex flex-col"},Kt={key:0,class:"min-w-max border px-2 pt-1 pb-0.5 rounded-lg text-center"},Jt={key:1,class:"h-6 w-20 rounded-full bg-gray-200 animate-pulse"},St={key:2,class:"text-sm text-right"},ye={__name:"TimeCountdown",props:{targetTime:{type:String,required:!1},modelValue:{type:Boolean,default:!1},label:{type:String,default:""}},emits:["update:modelValue"],setup(r,{emit:n}){const e=r,s=n,t=O(Rt(e.targetTime,"yyyy-MM-dd HH:mm:ss",new Date)),a=O(new Date),l=Ie(()=>t.value-a.value),u=O("");let f;const h=()=>{const I=Math.floor(l.value/1e3%60),v=Math.floor(l.value/(1e3*60)%60),D=Math.floor(l.value/(1e3*60*60)%24),H=Math.floor(l.value/(1e3*60*60*24));u.value=H?`${H}d ${D}h ${v}m ${I}s`:`${D}h ${v}m ${I}s`},E=()=>{a.value=new Date,h(),M()};se(()=>{E(),f=setInterval(E,1e3)}),Oe(()=>{clearInterval(f)});const M=()=>{l.value<=0?(u.value="Time’s up!",s("update:modelValue",!0),clearInterval(f)):l.value>0&&s("update:modelValue",!1)};return Ce(l,M),(I,v)=>(m(),p("div",Ut,[u.value?(m(),p("div",Kt,w(u.value),1)):(m(),p("p",Jt)),r.label?(m(),p("div",St,w(r.label),1)):N("",!0)]))}},es={class:"modal"},ts={class:"modal-content !px-3 !py-4 !max-w-sm"},ss={class:"w-full h-full flex flex-col justify-between items-center space-y-3 overflow-hidden"},rs={class:"w-full flex justify-between items-center"},ns={class:"title-lg text-center"},os={class:"size-full grow shrink border-t py-4 overflow-y-auto scrollbar flex flex-col gap-4 justify-center items-center"},as={class:"w-full flex justify-between items-center"},is={__name:"ExamResultModal",props:{selectedExam:Object},setup(r){const n=O(!1);return(e,s)=>(m(),p("div",es,[o("div",ts,[o("div",ss,[o("div",rs,[o("h3",ns,"Result of "+w(r.selectedExam.title),1),te(e.$slots,"default")]),o("div",os,[r.selectedExam?(m(),Z(Zt,{key:0,selectedExam:r.selectedExam},null,8,["selectedExam"])):N("",!0),s[1]||(s[1]=o("hr",{class:"w-full"},null,-1)),o("div",as,[n.value?te(e.$slots,"answerSheet",{key:0}):(m(),Z(ye,{key:1,modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=t=>n.value=t),targetTime:r.selectedExam.result_publish_time,label:"Results are not yet published",class:"mx-auto items-center"},null,8,["modelValue","targetTime"]))])])])])]))}},ls={key:0,class:"grow-0 shrink-0 border px-2 pt-1.5 pb-0.5 rounded-lg bg-blue-300/30 text-blue-600"},cs={__name:"MeritPosition",props:{courseId:String,examId:[String,Number]},setup(r){const n=r,e=O(null),s=We();se(async()=>{n.courseId&&n.examId&&(e.value=await s.fetchExam(n.courseId,n.examId))});const t=l=>{const u=["th","st","nd","rd"],f=l%100;return l+(u[(f-20)%10]||u[f]||u[0])},a=l=>{var u,f;if((f=(u=e.value)==null?void 0:u.user_exam)!=null&&f.is_practice){const h=Math.floor(l/10)*10+1,E=h+9;return`${t(h)} - ${t(E)}`}return t(l)};return(l,u)=>{var f,h,E,M;return(f=e.value)!=null&&f.user_exam?(m(),p("div",ls,[j(w((h=e.value.user_exam)!=null&&h.is_practice?"Position: ":"Merit Position: ")+" ",1),o("b",null,w(a((M=(E=e.value)==null?void 0:E.user_exam)==null?void 0:M.position)),1)])):N("",!0)}}},us={class:"flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md"},ds={class:"w-full"},fs={class:"title-sm"},xs={key:0,class:"fas fa-check-circle text-green-700"},ms={class:"flex justify-between gap-2 text-sm text-gray-400"},ps={class:"flex items-center gap-2"},ws={__name:"ModuleItemExam",props:{exam:Object},setup(r){const n=O(!1);return(e,s)=>(m(),p("div",us,[s[3]||(s[3]=o("div",{class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},[o("i",{class:"fas fa-file-alt"}),o("div",{class:"text-xs"},"Exam")],-1)),o("div",ds,[o("h4",fs,[r.exam.is_completed?(m(),p("i",xs)):N("",!0),j(" "+w(r.exam.title),1)]),o("div",ms,[o("div",ps,[s[2]||(s[2]=o("i",{class:"far fa-clock"},null,-1)),o("p",null,[s[1]||(s[1]=o("span",null,"Duration:",-1)),j(" "+w(r.exam.duration),1)])])])]),n.value||r.exam.is_completed?te(e.$slots,"default",{key:0}):(m(),Z(ye,{key:1,modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=t=>n.value=t),targetTime:r.exam.opening_time},null,8,["modelValue","targetTime"]))]))}},hs=Ye("courseProgress",{state:()=>({userId:null}),actions:{async completeLecture(r,n,e){try{return(await ce.post(`/lectures/${n}/complete`,{course_id:r,is_completed:e})).data}catch(s){throw console.error("Error completing lecture:",s),s}},async getLectureCompletionStatus(r,n){try{return(await ce.get(`/users/${r}/lectures/${n}/completion`)).data.is_completed}catch(e){throw console.error("Error fetching lecture completion status:",e),e}},setUserId(r){this.userId=r}}}),ys={class:"my-container py-4"},bs={key:0,class:"error"},_s={key:1,class:"grid md:grid-cols-3 gap-4"},vs={class:"md:col-span-2 space-y-4"},gs={class:"title-xl"},ks={class:"relative pt-1"},Ts={class:"flex mb-2 items-center justify-between"},Ms={class:"text-right"},Es={class:"text-xs font-semibold inline-block text-sky-600"},Ps={class:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-200"},Ds={class:"space-y-4"},$s=["onClick"],Is={class:"text-center border-2 rounded-md p-1.5"},Os={class:"flex-1"},Cs={class:"line-clamp-1"},Ys={key:0},qs={class:""},Ls={class:"flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md"},Hs={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},Ns={class:"text-xs"},Rs={key:0},Qs={key:1},Vs={class:"flex-1"},Bs={key:0,class:"fas fa-check-circle text-green-700"},Ws={class:"text-gray-500 text-xs line-clamp-1"},js=["onClick"],As={class:"flex items-center text-sm pt-2"},Fs=["id","checked","onChange","disabled"],Gs=["for"],Xs=["onClick"],zs={key:2},Zs={key:3,class:"fixed inset-0 flex items-center justify-center z-50"},Us={class:"card-bg items-center justify-center p-6 md:p-8 overflow-hidden transform transition-all sm:max-w-lg sm:w-full text-center mx-2"},Ks={class:""},Js={class:"text-red-500"},Ss={class:"flex gap-4"},er={class:"modal-content !px-3 !py-4 !max-w-xl"},tr={class:"w-full h-full flex flex-col justify-between items-center space-y-3 overflow-hidden"},sr={class:"size-full grow shrink border-y py-4 overflow-y-auto scrollbar"},rr={class:"w-full list-[square] space-y-3 list-outside pl-5"},nr={class:"flex items-center gap-1 md:gap-2"},or={class:"w-full flex justify-between gap-2"},cr={__name:"MyCourseDetails",setup(r){const n=qe(),e=Le(),s=He(),t=hs(),a=Ne(),l=n.params.id,u=O(null),f=O(null),h=O([]),E=O(!1),M=O(!1),I=O(!1),v=O(null),D=O(null),H=O(!1),Q=async()=>{await s.fetchPurchasedCourse(l),u.value=s.course};se(async()=>{try{await Q()}catch(b){f.value=b.message||"An error occurred",b.response&&b.response.status===403&&e.push("/")}});const A=b=>{const c=h.value.indexOf(b);c===-1?h.value.push(b):h.value.splice(c,1)},F=b=>{b.type==="video"?(a.endedCallback=async()=>{const c=await t.completeLecture(l,b.id,!0);b.is_completed=c.is_completed,await Q()},a.showPlayer(b.link)):window.open(b.link,"_blank")},d=b=>(D.value=b,b.is_completed?I.value=!0:M.value=!0),y=async()=>{if(v.value)try{await t.completeLecture(l,v.value.id,!0),v.value.is_completed=!0,E.value=!1,await Q()}catch(b){console.error("Error confirming lecture completion:",b)}},Y=b=>{v.value=b,E.value=!0},G=async()=>{e.push({path:`/my/course/${l}/exam/${D.value.id}`})};return(b,c)=>{var V,oe;return m(),p(X,null,[o("div",ys,[f.value?(m(),p("div",bs,w(f.value),1)):u.value?(m(),p("div",_s,[o("div",vs,[o("div",null,[o("h1",gs,w(u.value.title),1),c[6]||(c[6]=o("hr",{class:"my-2"},null,-1))]),o("div",null,[o("div",ks,[o("div",Ts,[c[7]||(c[7]=o("div",null,[o("span",null,"Course Progress")],-1)),o("div",Ms,[o("span",Es,w(u.value.progress)+"% ",1)])]),o("div",Ps,[o("div",{style:Re({width:u.value.progress+"%"}),class:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-600"},null,4)])])]),c[9]||(c[9]=o("h2",{class:"title-lg"},"Modules",-1)),o("ul",Ds,[(m(!0),p(X,null,K(u.value.modules,$=>(m(),p("li",{class:"card-bg p-4",key:$.id},[o("div",{onClick:P=>A($.id),class:"flex flex-1 items-center gap-4 cursor-pointer"},[o("div",Is,[o("div",{class:W(["text-xl font-bold text-orange-500",{"!text-gray-400":$.is_active==0}])},w($.order),3),c[8]||(c[8]=o("div",{class:"text-xs md:text-sm"},"Module",-1))]),o("div",Os,[o("h4",{class:W(["title-md",{"text-gray-400":$.is_active==0}])},w($.title),3),o("p",Cs,w($.description),1)]),o("button",null,[o("i",{class:W(h.value.includes($.id)?"fas fa-angle-up":"fas fa-angle-down")},null,2)])],8,$s),h.value.includes($.id)?(m(),p("div",Ys,[o("ul",qs,[(m(!0),p(X,null,K($.lectures,P=>(m(),p("li",{class:"pt-6",key:P.id},[o("div",Ls,[o("div",Hs,[o("i",{class:W(P.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),o("div",Ns,[P.type==="virtual_platform"?(m(),p("p",Rs,"Video")):(m(),p("p",Qs,"Lecture"))])]),o("div",Vs,[o("h4",null,[P.is_completed?(m(),p("i",Bs)):N("",!0),j(" "+w(P.title),1)]),o("p",Ws,w(P.description),1)]),o("button",{onClick:B(ae=>F(P),["prevent"]),type:"button",class:"btn-2"},w(P.type==="video"?"Play Video":"Join Live"),9,js)]),o("div",As,[o("input",{type:"checkbox",id:`completed-${P.id}`,class:"form-checkbox h-3 w-3 text-sky-600 transition duration-150 ease-in-out",checked:P.is_completed,onChange:ae=>Y(P),disabled:P.is_completed},null,40,Fs),o("label",{for:`completed-${P.id}`,class:"ml-2"}," Have you completed this lecture? ",8,Gs)])]))),128)),(m(!0),p(X,null,K($.exams,P=>(m(),p("li",{class:"pt-6",key:P.id},[J(ws,{exam:P},{default:z(()=>[o("button",{onClick:B(ae=>d(P),["prevent"]),type:"button",class:"btn-2"},w(P.is_completed?"result":"Open"),9,Xs)]),_:2},1032,["exam"])]))),128))])])):N("",!0)]))),128))])])])):(m(),p("div",zs,"Loading...")),E.value?(m(),p("div",Zs,[c[11]||(c[11]=o("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75"},null,-1)),o("div",Us,[c[10]||(c[10]=o("h3",{class:"title-lg",id:"modal-title"},"Confirm Lecture Completion",-1)),o("div",Ks,[o("p",Js,' Are you sure you have completed the lecture "'+w((V=v.value)==null?void 0:V.title)+'"? ',1)]),o("div",Ss,[o("button",{onClick:y,type:"button",class:"btn-2"},"Yes"),o("button",{onClick:c[0]||(c[0]=$=>E.value=!1),type:"button",class:"btn-3"},"No")])])])):N("",!0)]),M.value?(m(),p("div",{key:0,class:"modal",onClick:c[3]||(c[3]=B($=>M.value=!1,["self"]))},[o("div",er,[o("div",tr,[c[15]||(c[15]=o("div",{class:"sticky top-0 grow-0 shrink-0 w-full bg-white z-10"},[o("h3",{class:"title-lg text-center",id:"modal-title"},"সাবধান!! গুরুত্বপূর্ণ তথ্য সমূহ")],-1)),o("div",sr,[o("ul",rr,[o("li",null," Exam এর সময়সীমা থাকবে "+w((oe=D.value)==null?void 0:oe.duration)+" মিনিট। এই সময়ের মধ্যে আপনাকে Exam সাবমিট করতে হবে। ",1),c[12]||(c[12]=o("li",null," Exam ওপেন করা (“Start Exam” বাটনে ক্লিক) মাত্র আপনার টাইমার চালু হয়ে যাবে। আপনি Exam থেকে বেরিয়ে গেলেও টাইমার চলতে থাকবে এবং টাইম শেষে সাবমিট করতে হবে। ",-1)),c[13]||(c[13]=o("li",null," Exam দেয়ার সময়ে যদি কোনো কারনে কানেকশন লস হয়ে যায় এবং আপনার টাইম শেষ হয়ে যায় আর সাবমিট করতে না পারেন, তাহলে আর Exam দেয়ার সুযোগ পাবেন না। ",-1))])]),o("form",{onSubmit:B(G,["prevent"]),class:"grow-0 shrink-0 w-full flex justify-end gap-1 md:gap-4"},[o("button",{onClick:c[1]||(c[1]=$=>M.value=!1),type:"button",class:"mr-auto btn-contrast px-1 md:px-4 text-xs md:text-base"}," Cancel "),o("label",nr,[Qe(o("input",{"onUpdate:modelValue":c[2]||(c[2]=$=>H.value=$),type:"checkbox",required:""},null,512),[[Ve,H.value]]),c[14]||(c[14]=o("span",{class:"pt-1 text-xs md:text-base"},"আমি পরীক্ষা শুরু করতে চাই",-1))]),o("button",{type:"submit",class:W(["btn-2 disabled:opacity-50 px-1 md:px-4 text-xs md:text-base",{"opacity-50":!H.value}])}," Start Exam ",2)],32)])])])):N("",!0),I.value?(m(),Z(is,{key:1,selectedExam:D.value,class:"modal",onClick:c[5]||(c[5]=B($=>I.value=!1,["self"]))},{answerSheet:z(()=>[o("div",or,[J(cs,{courseId:S(l),examId:D.value.id},null,8,["courseId","examId"]),J(S(Be),{to:{name:"My Exam AnswerSheet",params:{courseId:S(l),examId:D.value.id}},class:"btn-2 px-2 text-center ml-auto"},{default:z(()=>c[16]||(c[16]=[j(" Answer Sheet ")])),_:1},8,["to"])])]),default:z(()=>[o("button",{onClick:c[4]||(c[4]=$=>I.value=!1),type:"button",class:"btn-contrast"},"Close")]),_:1},8,["selectedExam"])):N("",!0)],64)}}};export{cr as default};