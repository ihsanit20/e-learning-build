var ee=Object.defineProperty;var te=(s,n,e)=>n in s?ee(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e;var o=(s,n,e)=>te(s,typeof n!="symbol"?n+"":n,e);import{P as M,Q as x,S as V,T as re,U as se,V as ne,W as ae,X as N,Y as z,Z as oe,$ as ie,a0 as Z,a1 as ce,a2 as F,a3 as ue,a4 as A,a5 as le,r as q,d as de,o as we,a6 as fe,w as he,e as v,f as E,t as $,q as pe}from"./index-DgW0pWoJ.js";function K(s,n){const e=M(s);return isNaN(n)?x(s,NaN):(n&&e.setDate(e.getDate()+n),e)}function ye(){return Object.assign({},V())}function xe(s){let e=M(s).getDay();return e===0&&(e=7),e}function be(s,n){const e=n instanceof Date?x(n,0):new n(0);return e.setFullYear(s.getFullYear(),s.getMonth(),s.getDate()),e.setHours(s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()),e}const me=10;class U{constructor(){o(this,"subPriority",0)}validate(n,e){return!0}}class Te extends U{constructor(n,e,r,t,a){super(),this.value=n,this.validateValue=e,this.setValue=r,this.priority=t,a&&(this.subPriority=a)}validate(n,e){return this.validateValue(n,this.value,e)}set(n,e,r){return this.setValue(n,e,this.value,r)}}class ge extends U{constructor(){super(...arguments);o(this,"priority",me);o(this,"subPriority",-1)}set(e,r){return r.timestampIsSet?e:x(e,be(e,Date))}}class u{run(n,e,r,t){const a=this.parse(n,e,r,t);return a?{setter:new Te(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(n,e,r){return!0}}class ke extends u{constructor(){super(...arguments);o(this,"priority",140);o(this,"incompatibleTokens",["R","u","t","T"])}parse(e,r,t){switch(r){case"G":case"GG":case"GGG":return t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"});case"GGGGG":return t.era(e,{width:"narrow"});case"GGGG":default:return t.era(e,{width:"wide"})||t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"})}}set(e,r,t){return r.era=t,e.setFullYear(t,0,1),e.setHours(0,0,0,0),e}}const f={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},T={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function h(s,n){return s&&{value:n(s.value),rest:s.rest}}function l(s,n){const e=n.match(s);return e?{value:parseInt(e[0],10),rest:n.slice(e[0].length)}:null}function g(s,n){const e=n.match(s);if(!e)return null;if(e[0]==="Z")return{value:0,rest:n.slice(1)};const r=e[1]==="+"?1:-1,t=e[2]?parseInt(e[2],10):0,a=e[3]?parseInt(e[3],10):0,i=e[5]?parseInt(e[5],10):0;return{value:r*(t*re+a*se+i*ne),rest:n.slice(e[0].length)}}function j(s){return l(f.anyDigitsSigned,s)}function w(s,n){switch(s){case 1:return l(f.singleDigit,n);case 2:return l(f.twoDigits,n);case 3:return l(f.threeDigits,n);case 4:return l(f.fourDigits,n);default:return l(new RegExp("^\\d{1,"+s+"}"),n)}}function H(s,n){switch(s){case 1:return l(f.singleDigitSigned,n);case 2:return l(f.twoDigitsSigned,n);case 3:return l(f.threeDigitsSigned,n);case 4:return l(f.fourDigitsSigned,n);default:return l(new RegExp("^-?\\d{1,"+s+"}"),n)}}function L(s){switch(s){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function J(s,n){const e=n>0,r=e?n:1-n;let t;if(r<=50)t=s||100;else{const a=r+50,i=Math.trunc(a/100)*100,p=s>=a%100;t=s+i-(p?100:0)}return e?t:1-t}function S(s){return s%400===0||s%4===0&&s%100!==0}class De extends u{constructor(){super(...arguments);o(this,"priority",130);o(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,r,t){const a=i=>({year:i,isTwoDigitYear:r==="yy"});switch(r){case"y":return h(w(4,e),a);case"yo":return h(t.ordinalNumber(e,{unit:"year"}),a);default:return h(w(r.length,e),a)}}validate(e,r){return r.isTwoDigitYear||r.year>0}set(e,r,t){const a=e.getFullYear();if(t.isTwoDigitYear){const p=J(t.year,a);return e.setFullYear(p,0,1),e.setHours(0,0,0,0),e}const i=!("era"in r)||r.era===1?t.year:1-t.year;return e.setFullYear(i,0,1),e.setHours(0,0,0,0),e}}class Pe extends u{constructor(){super(...arguments);o(this,"priority",130);o(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,r,t){const a=i=>({year:i,isTwoDigitYear:r==="YY"});switch(r){case"Y":return h(w(4,e),a);case"Yo":return h(t.ordinalNumber(e,{unit:"year"}),a);default:return h(w(r.length,e),a)}}validate(e,r){return r.isTwoDigitYear||r.year>0}set(e,r,t,a){const i=ae(e,a);if(t.isTwoDigitYear){const y=J(t.year,i);return e.setFullYear(y,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),N(e,a)}const p=!("era"in r)||r.era===1?t.year:1-t.year;return e.setFullYear(p,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),N(e,a)}}class _e extends u{constructor(){super(...arguments);o(this,"priority",130);o(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,r){return H(r==="R"?4:r.length,e)}set(e,r,t){const a=x(e,0);return a.setFullYear(t,0,4),a.setHours(0,0,0,0),z(a)}}class Me extends u{constructor(){super(...arguments);o(this,"priority",130);o(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,r){return H(r==="u"?4:r.length,e)}set(e,r,t){return e.setFullYear(t,0,1),e.setHours(0,0,0,0),e}}class Ye extends u{constructor(){super(...arguments);o(this,"priority",120);o(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"Q":case"QQ":return w(r.length,e);case"Qo":return t.ordinalNumber(e,{unit:"quarter"});case"QQQ":return t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(e,{width:"wide",context:"formatting"})||t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=1&&r<=4}set(e,r,t){return e.setMonth((t-1)*3,1),e.setHours(0,0,0,0),e}}class Oe extends u{constructor(){super(...arguments);o(this,"priority",120);o(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"q":case"qq":return w(r.length,e);case"qo":return t.ordinalNumber(e,{unit:"quarter"});case"qqq":return t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return t.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(e,{width:"wide",context:"standalone"})||t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=1&&r<=4}set(e,r,t){return e.setMonth((t-1)*3,1),e.setHours(0,0,0,0),e}}class ve extends u{constructor(){super(...arguments);o(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);o(this,"priority",110)}parse(e,r,t){const a=i=>i-1;switch(r){case"M":return h(l(f.month,e),a);case"MM":return h(w(2,e),a);case"Mo":return h(t.ordinalNumber(e,{unit:"month"}),a);case"MMM":return t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return t.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(e,{width:"wide",context:"formatting"})||t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=11}set(e,r,t){return e.setMonth(t,1),e.setHours(0,0,0,0),e}}class Ee extends u{constructor(){super(...arguments);o(this,"priority",110);o(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,r,t){const a=i=>i-1;switch(r){case"L":return h(l(f.month,e),a);case"LL":return h(w(2,e),a);case"Lo":return h(t.ordinalNumber(e,{unit:"month"}),a);case"LLL":return t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return t.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(e,{width:"wide",context:"standalone"})||t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=0&&r<=11}set(e,r,t){return e.setMonth(t,1),e.setHours(0,0,0,0),e}}function He(s,n,e){const r=M(s),t=oe(r,e)-n;return r.setDate(r.getDate()-t*7),r}class Ie extends u{constructor(){super(...arguments);o(this,"priority",100);o(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,r,t){switch(r){case"w":return l(f.week,e);case"wo":return t.ordinalNumber(e,{unit:"week"});default:return w(r.length,e)}}validate(e,r){return r>=1&&r<=53}set(e,r,t,a){return N(He(e,t,a),a)}}function qe(s,n){const e=M(s),r=ie(e)-n;return e.setDate(e.getDate()-r*7),e}class Ne extends u{constructor(){super(...arguments);o(this,"priority",100);o(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,r,t){switch(r){case"I":return l(f.week,e);case"Io":return t.ordinalNumber(e,{unit:"week"});default:return w(r.length,e)}}validate(e,r){return r>=1&&r<=53}set(e,r,t){return z(qe(e,t))}}const Le=[31,28,31,30,31,30,31,31,30,31,30,31],Qe=[31,29,31,30,31,30,31,31,30,31,30,31];class Re extends u{constructor(){super(...arguments);o(this,"priority",90);o(this,"subPriority",1);o(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"d":return l(f.date,e);case"do":return t.ordinalNumber(e,{unit:"date"});default:return w(r.length,e)}}validate(e,r){const t=e.getFullYear(),a=S(t),i=e.getMonth();return a?r>=1&&r<=Qe[i]:r>=1&&r<=Le[i]}set(e,r,t){return e.setDate(t),e.setHours(0,0,0,0),e}}class We extends u{constructor(){super(...arguments);o(this,"priority",90);o(this,"subpriority",1);o(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,r,t){switch(r){case"D":case"DD":return l(f.dayOfYear,e);case"Do":return t.ordinalNumber(e,{unit:"date"});default:return w(r.length,e)}}validate(e,r){const t=e.getFullYear();return S(t)?r>=1&&r<=366:r>=1&&r<=365}set(e,r,t){return e.setMonth(0,t),e.setHours(0,0,0,0),e}}function Q(s,n,e){var D,P,b,_;const r=V(),t=(e==null?void 0:e.weekStartsOn)??((P=(D=e==null?void 0:e.locale)==null?void 0:D.options)==null?void 0:P.weekStartsOn)??r.weekStartsOn??((_=(b=r.locale)==null?void 0:b.options)==null?void 0:_.weekStartsOn)??0,a=M(s),i=a.getDay(),y=(n%7+7)%7,k=7-t,Y=n<0||n>6?n-(i+k)%7:(y+k)%7-(i+k)%7;return K(a,Y)}class Ce extends u{constructor(){super(...arguments);o(this,"priority",90);o(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"E":case"EE":case"EEE":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return t.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=6}set(e,r,t,a){return e=Q(e,t,a),e.setHours(0,0,0,0),e}}class Be extends u{constructor(){super(...arguments);o(this,"priority",90);o(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,r,t,a){const i=p=>{const y=Math.floor((p-1)/7)*7;return(p+a.weekStartsOn+6)%7+y};switch(r){case"e":case"ee":return h(w(r.length,e),i);case"eo":return h(t.ordinalNumber(e,{unit:"day"}),i);case"eee":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeeee":return t.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=6}set(e,r,t,a){return e=Q(e,t,a),e.setHours(0,0,0,0),e}}class Ge extends u{constructor(){super(...arguments);o(this,"priority",90);o(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,r,t,a){const i=p=>{const y=Math.floor((p-1)/7)*7;return(p+a.weekStartsOn+6)%7+y};switch(r){case"c":case"cc":return h(w(r.length,e),i);case"co":return h(t.ordinalNumber(e,{unit:"day"}),i);case"ccc":return t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"ccccc":return t.day(e,{width:"narrow",context:"standalone"});case"cccccc":return t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return t.day(e,{width:"wide",context:"standalone"})||t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=0&&r<=6}set(e,r,t,a){return e=Q(e,t,a),e.setHours(0,0,0,0),e}}function Xe(s,n){const e=M(s),r=xe(e),t=n-r;return K(e,t)}class Fe extends u{constructor(){super(...arguments);o(this,"priority",90);o(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,r,t){const a=i=>i===0?7:i;switch(r){case"i":case"ii":return w(r.length,e);case"io":return t.ordinalNumber(e,{unit:"day"});case"iii":return h(t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),a);case"iiiii":return h(t.day(e,{width:"narrow",context:"formatting"}),a);case"iiiiii":return h(t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),a);case"iiii":default:return h(t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),a)}}validate(e,r){return r>=1&&r<=7}set(e,r,t){return e=Xe(e,t),e.setHours(0,0,0,0),e}}class Ae extends u{constructor(){super(...arguments);o(this,"priority",80);o(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,r,t){switch(r){case"a":case"aa":case"aaa":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,t){return e.setHours(L(t),0,0,0),e}}class $e extends u{constructor(){super(...arguments);o(this,"priority",80);o(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,r,t){switch(r){case"b":case"bb":case"bbb":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,t){return e.setHours(L(t),0,0,0),e}}class Ve extends u{constructor(){super(...arguments);o(this,"priority",80);o(this,"incompatibleTokens",["a","b","t","T"])}parse(e,r,t){switch(r){case"B":case"BB":case"BBB":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,t){return e.setHours(L(t),0,0,0),e}}class ze extends u{constructor(){super(...arguments);o(this,"priority",70);o(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,r,t){switch(r){case"h":return l(f.hour12h,e);case"ho":return t.ordinalNumber(e,{unit:"hour"});default:return w(r.length,e)}}validate(e,r){return r>=1&&r<=12}set(e,r,t){const a=e.getHours()>=12;return a&&t<12?e.setHours(t+12,0,0,0):!a&&t===12?e.setHours(0,0,0,0):e.setHours(t,0,0,0),e}}class Ze extends u{constructor(){super(...arguments);o(this,"priority",70);o(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,r,t){switch(r){case"H":return l(f.hour23h,e);case"Ho":return t.ordinalNumber(e,{unit:"hour"});default:return w(r.length,e)}}validate(e,r){return r>=0&&r<=23}set(e,r,t){return e.setHours(t,0,0,0),e}}class Ke extends u{constructor(){super(...arguments);o(this,"priority",70);o(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,r,t){switch(r){case"K":return l(f.hour11h,e);case"Ko":return t.ordinalNumber(e,{unit:"hour"});default:return w(r.length,e)}}validate(e,r){return r>=0&&r<=11}set(e,r,t){return e.getHours()>=12&&t<12?e.setHours(t+12,0,0,0):e.setHours(t,0,0,0),e}}class Ue extends u{constructor(){super(...arguments);o(this,"priority",70);o(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,r,t){switch(r){case"k":return l(f.hour24h,e);case"ko":return t.ordinalNumber(e,{unit:"hour"});default:return w(r.length,e)}}validate(e,r){return r>=1&&r<=24}set(e,r,t){const a=t<=24?t%24:t;return e.setHours(a,0,0,0),e}}class je extends u{constructor(){super(...arguments);o(this,"priority",60);o(this,"incompatibleTokens",["t","T"])}parse(e,r,t){switch(r){case"m":return l(f.minute,e);case"mo":return t.ordinalNumber(e,{unit:"minute"});default:return w(r.length,e)}}validate(e,r){return r>=0&&r<=59}set(e,r,t){return e.setMinutes(t,0,0),e}}class Je extends u{constructor(){super(...arguments);o(this,"priority",50);o(this,"incompatibleTokens",["t","T"])}parse(e,r,t){switch(r){case"s":return l(f.second,e);case"so":return t.ordinalNumber(e,{unit:"second"});default:return w(r.length,e)}}validate(e,r){return r>=0&&r<=59}set(e,r,t){return e.setSeconds(t,0),e}}class Se extends u{constructor(){super(...arguments);o(this,"priority",30);o(this,"incompatibleTokens",["t","T"])}parse(e,r){const t=a=>Math.trunc(a*Math.pow(10,-r.length+3));return h(w(r.length,e),t)}set(e,r,t){return e.setMilliseconds(t),e}}class et extends u{constructor(){super(...arguments);o(this,"priority",10);o(this,"incompatibleTokens",["t","T","x"])}parse(e,r){switch(r){case"X":return g(T.basicOptionalMinutes,e);case"XX":return g(T.basic,e);case"XXXX":return g(T.basicOptionalSeconds,e);case"XXXXX":return g(T.extendedOptionalSeconds,e);case"XXX":default:return g(T.extended,e)}}set(e,r,t){return r.timestampIsSet?e:x(e,e.getTime()-Z(e)-t)}}class tt extends u{constructor(){super(...arguments);o(this,"priority",10);o(this,"incompatibleTokens",["t","T","X"])}parse(e,r){switch(r){case"x":return g(T.basicOptionalMinutes,e);case"xx":return g(T.basic,e);case"xxxx":return g(T.basicOptionalSeconds,e);case"xxxxx":return g(T.extendedOptionalSeconds,e);case"xxx":default:return g(T.extended,e)}}set(e,r,t){return r.timestampIsSet?e:x(e,e.getTime()-Z(e)-t)}}class rt extends u{constructor(){super(...arguments);o(this,"priority",40);o(this,"incompatibleTokens","*")}parse(e){return j(e)}set(e,r,t){return[x(e,t*1e3),{timestampIsSet:!0}]}}class st extends u{constructor(){super(...arguments);o(this,"priority",20);o(this,"incompatibleTokens","*")}parse(e){return j(e)}set(e,r,t){return[x(e,t),{timestampIsSet:!0}]}}const nt={G:new ke,y:new De,Y:new Pe,R:new _e,u:new Me,Q:new Ye,q:new Oe,M:new ve,L:new Ee,w:new Ie,I:new Ne,d:new Re,D:new We,E:new Ce,e:new Be,c:new Ge,i:new Fe,a:new Ae,b:new $e,B:new Ve,h:new ze,H:new Ze,K:new Ke,k:new Ue,m:new je,s:new Je,S:new Se,X:new et,x:new tt,t:new rt,T:new st},at=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ot=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,ct=/''/g,ut=/\S/,lt=/[a-zA-Z]/;function dt(s,n,e,r){var O,R,W,C;const t=ye(),a=t.locale??ce,i=t.firstWeekContainsDate??((R=(O=t.locale)==null?void 0:O.options)==null?void 0:R.firstWeekContainsDate)??1,p=t.weekStartsOn??((C=(W=t.locale)==null?void 0:W.options)==null?void 0:C.weekStartsOn)??0,y={firstWeekContainsDate:i,weekStartsOn:p,locale:a},k=[new ge],Y=n.match(ot).map(c=>{const d=c[0];if(d in F){const m=F[d];return m(c,a.formatLong)}return c}).join("").match(at),D=[];for(let c of Y){ue(c)&&A(c,n,s),le(c)&&A(c,n,s);const d=c[0],m=nt[d];if(m){const{incompatibleTokens:B}=m;if(Array.isArray(B)){const G=D.find(X=>B.includes(X.token)||X.token===d);if(G)throw new RangeError(`The format string mustn't contain \`${G.fullToken}\` and \`${c}\` at the same time`)}else if(m.incompatibleTokens==="*"&&D.length>0)throw new RangeError(`The format string mustn't contain \`${c}\` and any other token at the same time`);D.push({token:d,fullToken:c});const I=m.run(s,c,a.match,y);if(!I)return x(e,NaN);k.push(I.setter),s=I.rest}else{if(d.match(lt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+d+"`");if(c==="''"?c="'":d==="'"&&(c=wt(c)),s.indexOf(c)===0)s=s.slice(c.length);else return x(e,NaN)}}if(s.length>0&&ut.test(s))return x(e,NaN);const P=k.map(c=>c.priority).sort((c,d)=>d-c).filter((c,d,m)=>m.indexOf(c)===d).map(c=>k.filter(d=>d.priority===c).sort((d,m)=>m.subPriority-d.subPriority)).map(c=>c[0]);let b=M(e);if(isNaN(b.getTime()))return x(e,NaN);const _={};for(const c of P){if(!c.validate(b,y))return x(e,NaN);const d=c.set(b,_,y);Array.isArray(d)?(b=d[0],Object.assign(_,d[1])):b=d}return x(e,b)}function wt(s){return s.match(it)[1].replace(ct,"'")}const ft={class:"flex flex-col"},ht={key:0,class:"min-w-max border px-2 pt-1 pb-0.5 rounded-lg text-center"},pt={key:1,class:"h-6 w-20 rounded-full bg-gray-200 animate-pulse"},yt={key:2,class:"text-sm text-right"},mt={__name:"TimeCountdown",props:{targetTime:{type:String,required:!1},modelValue:{type:Boolean,default:!1},label:{type:String,default:""}},emits:["update:modelValue"],setup(s,{emit:n}){const e=s,r=n,t=q(dt(e.targetTime,"yyyy-MM-dd HH:mm:ss",new Date)),a=q(new Date),i=de(()=>t.value-a.value),p=q("");let y;const k=()=>{const P=Math.floor(i.value/1e3%60),b=Math.floor(i.value/(1e3*60)%60),_=Math.floor(i.value/(1e3*60*60)%24),O=Math.floor(i.value/(1e3*60*60*24));p.value=O?`${O}d ${_}h ${b}m ${P}s`:`${_}h ${b}m ${P}s`},Y=()=>{a.value=new Date,k(),D()};we(()=>{Y(),y=setInterval(Y,1e3)}),fe(()=>{clearInterval(y)});const D=()=>{i.value<=0?(p.value="Time’s up!",r("update:modelValue",!0),clearInterval(y)):i.value>0&&r("update:modelValue",!1)};return he(i,D),(P,b)=>(v(),E("div",ft,[p.value?(v(),E("div",ht,$(p.value),1)):(v(),E("p",pt)),s.label?(v(),E("div",yt,$(s.label),1)):pe("",!0)]))}};export{mt as _};
