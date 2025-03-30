import{aa as dt,ab as ft,r as Q,o as K,d as C,i as k,e,z as O,A as j,B as M,y as W,p as V,I as pt,t as L,s as q,g as G,F as J,f as mt,x as vt,n as yt,j as gt,q as X,v as bt}from"./index-B4Mp3J9K.js";import{_ as Z}from"./TextEditor-BzbOVJYK.js";import{u as tt}from"./quiz-B9QJRq4D.js";var et={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(S,T){(function(f,g){S.exports=g()})(dt,function(){return function(){var w={686:function(r,s,t){t.d(s,{default:function(){return ct}});var n=t(279),l=t.n(n),p=t(370),x=t.n(p),h=t(817),E=t.n(h);function v(c){try{return document.execCommand(c)}catch{return!1}}var b=function(i){var o=E()(i);return v("cut"),o},y=b;function _(c){var i=document.documentElement.getAttribute("dir")==="rtl",o=document.createElement("textarea");o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[i?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return o.style.top="".concat(u,"px"),o.setAttribute("readonly",""),o.value=c,o}var m=function(i,o){var u=_(i);o.container.appendChild(u);var a=E()(u);return v("copy"),u.remove(),a},P=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof i=="string"?u=m(i,o):i instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(i==null?void 0:i.type)?u=m(i.value,o):(u=E()(i),v("copy")),u},R=P;function D(c){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(o){return typeof o}:D=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},D(c)}var z=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.action,u=o===void 0?"copy":o,a=i.container,d=i.target,A=i.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&D(d)==="object"&&d.nodeType===1){if(u==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(A)return R(A,{container:a});if(d)return u==="cut"?y(d):R(d,{container:a})},B=z;function N(c){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?N=function(o){return typeof o}:N=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},N(c)}function nt(c,i){if(!(c instanceof i))throw new TypeError("Cannot call a class as a function")}function Y(c,i){for(var o=0;o<i.length;o++){var u=i[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(c,u.key,u)}}function ot(c,i,o){return i&&Y(c.prototype,i),o&&Y(c,o),c}function it(c,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(i&&i.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),i&&I(c,i)}function I(c,i){return I=Object.setPrototypeOf||function(u,a){return u.__proto__=a,u},I(c,i)}function rt(c){var i=st();return function(){var u=$(c),a;if(i){var d=$(this).constructor;a=Reflect.construct(u,arguments,d)}else a=u.apply(this,arguments);return lt(this,a)}}function lt(c,i){return i&&(N(i)==="object"||typeof i=="function")?i:ut(c)}function ut(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function st(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function $(c){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},$(c)}function H(c,i){var o="data-clipboard-".concat(c);if(i.hasAttribute(o))return i.getAttribute(o)}var at=function(c){it(o,c);var i=rt(o);function o(u,a){var d;return nt(this,o),d=i.call(this),d.resolveOptions(a),d.listenClick(u),d}return ot(o,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof a.action=="function"?a.action:this.defaultAction,this.target=typeof a.target=="function"?a.target:this.defaultTarget,this.text=typeof a.text=="function"?a.text:this.defaultText,this.container=N(a.container)==="object"?a.container:document.body}},{key:"listenClick",value:function(a){var d=this;this.listener=x()(a,"click",function(A){return d.onClick(A)})}},{key:"onClick",value:function(a){var d=a.delegateTarget||a.currentTarget,A=this.action(d)||"copy",U=B({action:A,container:this.container,target:this.target(d),text:this.text(d)});this.emit(U?"success":"error",{action:A,text:U,trigger:d,clearSelection:function(){d&&d.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(a){return H("action",a)}},{key:"defaultTarget",value:function(a){var d=H("target",a);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(a){return H("text",a)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return R(a,d)}},{key:"cut",value:function(a){return y(a)}},{key:"isSupported",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof a=="string"?[a]:a,A=!!document.queryCommandSupported;return d.forEach(function(U){A=A&&!!document.queryCommandSupported(U)}),A}}]),o}(l()),ct=at},828:function(r){var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function n(l,p){for(;l&&l.nodeType!==s;){if(typeof l.matches=="function"&&l.matches(p))return l;l=l.parentNode}}r.exports=n},438:function(r,s,t){var n=t(828);function l(h,E,v,b,y){var _=x.apply(this,arguments);return h.addEventListener(v,_,y),{destroy:function(){h.removeEventListener(v,_,y)}}}function p(h,E,v,b,y){return typeof h.addEventListener=="function"?l.apply(null,arguments):typeof v=="function"?l.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(_){return l(_,E,v,b,y)}))}function x(h,E,v,b){return function(y){y.delegateTarget=n(y.target,E),y.delegateTarget&&b.call(h,y)}}r.exports=p},879:function(r,s){s.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},s.nodeList=function(t){var n=Object.prototype.toString.call(t);return t!==void 0&&(n==="[object NodeList]"||n==="[object HTMLCollection]")&&"length"in t&&(t.length===0||s.node(t[0]))},s.string=function(t){return typeof t=="string"||t instanceof String},s.fn=function(t){var n=Object.prototype.toString.call(t);return n==="[object Function]"}},370:function(r,s,t){var n=t(879),l=t(438);function p(v,b,y){if(!v&&!b&&!y)throw new Error("Missing required arguments");if(!n.string(b))throw new TypeError("Second argument must be a String");if(!n.fn(y))throw new TypeError("Third argument must be a Function");if(n.node(v))return x(v,b,y);if(n.nodeList(v))return h(v,b,y);if(n.string(v))return E(v,b,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function x(v,b,y){return v.addEventListener(b,y),{destroy:function(){v.removeEventListener(b,y)}}}function h(v,b,y){return Array.prototype.forEach.call(v,function(_){_.addEventListener(b,y)}),{destroy:function(){Array.prototype.forEach.call(v,function(_){_.removeEventListener(b,y)})}}}function E(v,b,y){return l(document.body,v,b,y)}r.exports=p},817:function(r){function s(t){var n;if(t.nodeName==="SELECT")t.focus(),n=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var l=t.hasAttribute("readonly");l||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),l||t.removeAttribute("readonly"),n=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var p=window.getSelection(),x=document.createRange();x.selectNodeContents(t),p.removeAllRanges(),p.addRange(x),n=p.toString()}return n}r.exports=s},279:function(r){function s(){}s.prototype={on:function(t,n,l){var p=this.e||(this.e={});return(p[t]||(p[t]=[])).push({fn:n,ctx:l}),this},once:function(t,n,l){var p=this;function x(){p.off(t,x),n.apply(l,arguments)}return x._=n,this.on(t,x,l)},emit:function(t){var n=[].slice.call(arguments,1),l=((this.e||(this.e={}))[t]||[]).slice(),p=0,x=l.length;for(p;p<x;p++)l[p].fn.apply(l[p].ctx,n);return this},off:function(t,n){var l=this.e||(this.e={}),p=l[t],x=[];if(p&&n)for(var h=0,E=p.length;h<E;h++)p[h].fn!==n&&p[h].fn._!==n&&x.push(p[h]);return x.length?l[t]=x:delete l[t],this}},r.exports=s,r.exports.TinyEmitter=s}},f={};function g(r){if(f[r])return f[r].exports;var s=f[r]={exports:{}};return w[r](s,s.exports,g),s.exports}return function(){g.n=function(r){var s=r&&r.__esModule?function(){return r.default}:function(){return r};return g.d(s,{a:s}),s}}(),function(){g.d=function(r,s){for(var t in s)g.o(s,t)&&!g.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:s[t]})}}(),function(){g.o=function(r,s){return Object.prototype.hasOwnProperty.call(r,s)}}(),g(686)}().default})})(et);var ht=et.exports;const _t=ft(ht),xt=["data-clipboard-text"],wt={__name:"ClipboardCopy",props:{text:{type:String,default:""}},setup(S){const T=Q(null),w=Q(null);return K(()=>{T.value=new _t(w.value),T.value.on("success",function(f){function g(){Array.from(f.trigger.children).forEach(r=>r.classList.toggle("hidden"))}g(),setTimeout(()=>{g()},1e3),f.clearSelection()})}),(f,g)=>(k(),C("button",{title:"Copy Link",ref_key:"copyButtonRef",ref:w,"data-clipboard-text":S.text,class:"shrink-0 grow-0 flex items-center p-1.5 rounded-full border bg-white text-gray-700 focus:outline-none"},g[0]||(g[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})],-1),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 hidden",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})],-1)]),8,xt))}},zt={__name:"AddQuiz",props:{quizType:{type:String,required:!0}},emits:["submit"],setup(S,{emit:T}){const w=S,f=Q({title:"",description:"",duration:"",opening_time:"",result_publish_time:""}),g=T,r=()=>{const s={title:f.value.title,description:f.value.description,type:w.quizType,duration:f.value.duration,opening_time:f.value.opening_time,result_publish_time:f.value.result_publish_time};g("submit",s),f.value={title:"",description:"",duration:"",opening_time:"",result_publish_time:""}};return(s,t)=>(k(),C("div",null,[e("form",{onSubmit:W(r,["prevent"]),class:"space-y-4"},[e("div",null,[t[5]||(t[5]=e("label",null,"Quiz Title:",-1)),O(e("input",{class:"input-1",type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>f.value.title=n),placeholder:"Title",required:""},null,512),[[j,f.value.title]])]),e("div",null,[t[6]||(t[6]=e("label",null,"Description:",-1)),M(Z,{modelValue:f.value.description,"onUpdate:modelValue":t[1]||(t[1]=n=>f.value.description=n),placeholder:"Description"},null,8,["modelValue"])]),e("div",null,[t[7]||(t[7]=e("label",null,"Duration (minutes):",-1)),O(e("input",{class:"input-1",type:"number","onUpdate:modelValue":t[2]||(t[2]=n=>f.value.duration=n),placeholder:"Duration"},null,512),[[j,f.value.duration]])]),e("div",null,[t[8]||(t[8]=e("label",null,"Opening Time:",-1)),O(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":t[3]||(t[3]=n=>f.value.opening_time=n),placeholder:"Opening Date & Time"},null,512),[[j,f.value.opening_time]])]),e("div",null,[t[9]||(t[9]=e("label",null,"Result Publish Time:",-1)),O(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":t[4]||(t[4]=n=>f.value.result_publish_time=n),placeholder:"Opening Date & Time"},null,512),[[j,f.value.result_publish_time]])]),t[10]||(t[10]=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-2"},"Add Quiz")],-1))],32)]))}},Tt={class:"flex flex-col items-start gap-x-2"},Et={key:0,class:"w-full md:w-60 text-left"},F={__name:"FormLabel",props:["label"],setup(S){return(T,w)=>(k(),C("label",Tt,[S.label?(k(),C("span",Et,L(S.label),1)):V("",!0),pt(T.$slots,"default")]))}},kt={__name:"EditQuizForm",props:{quiz:Object},emits:["close"],setup(S,{emit:T}){const w=S,f=T,g=tt(),r=Q({title:w.quiz.title||"",description:w.quiz.description||"",duration:w.quiz.duration||"",opening_time:w.quiz.opening_time||"",result_publish_time:w.quiz.result_publish_time||""}),s=async()=>{const t={title:r.value.title,description:r.value.description,duration:r.value.duration,opening_time:r.value.opening_time,result_publish_time:r.value.result_publish_time};try{await g.updateQuiz(w.quiz.id,t),f("close")}catch(n){console.error("Error updating quiz:",n)}};return(t,n)=>(k(),C("div",null,[e("form",{onSubmit:W(s,["prevent"]),class:"space-y-4"},[M(F,{label:"Quiz Title"},{default:q(()=>[O(e("input",{class:"input-1",type:"text","onUpdate:modelValue":n[0]||(n[0]=l=>r.value.title=l),placeholder:"Quiz Title",required:""},null,512),[[j,r.value.title]])]),_:1}),e("div",null,[n[5]||(n[5]=e("label",null,"Description:",-1)),M(Z,{modelValue:r.value.description,"onUpdate:modelValue":n[1]||(n[1]=l=>r.value.description=l),placeholder:"Description"},null,8,["modelValue"])]),M(F,{label:"Duration (minutes)"},{default:q(()=>[O(e("input",{class:"input-1",type:"number","onUpdate:modelValue":n[2]||(n[2]=l=>r.value.duration=l),placeholder:"Duration (minutes)"},null,512),[[j,r.value.duration]])]),_:1}),M(F,{label:"Opening Time"},{default:q(()=>[O(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":n[3]||(n[3]=l=>r.value.opening_time=l),placeholder:"Opening Date & Time"},null,512),[[j,r.value.opening_time]])]),_:1}),M(F,{label:"Result Publish"},{default:q(()=>[O(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":n[4]||(n[4]=l=>r.value.result_publish_time=l),placeholder:"Result Publish Time"},null,512),[[j,r.value.result_publish_time]])]),_:1}),n[6]||(n[6]=e("hr",{class:"my-3"},null,-1)),n[7]||(n[7]=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1))],32)]))}},Ct={class:"my-container space-y-4"},St={class:"flex gap-4 items-center justify-center mt-2"},At={key:0},Qt={class:"space-y-2 divide-y"},Mt={class:"grow shrink flex items-center gap-4"},Ot={class:"bg-white flex flex-col items-center justify-center border rounded-md p-2 gap-1"},jt={class:"title-sm"},Dt={class:"flex items-center gap-2 text-sm text-gray-400"},Lt={class:"pt-1"},Rt={class:"grow-0 flex flex-wrap justify-end max-w-[110px] md:max-w-fit gap-2"},Vt=["onClick"],qt=["onClick"],Nt={key:1,class:"flex justify-center"},Pt={key:0,class:"fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50"},$t={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-auto"},Ut={class:"mt-4"},Ft={key:1,class:"fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50"},Bt={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-auto"},It={class:"flex justify-end"},Ht={class:"mr-auto font-bold"},Yt={class:"mt-4"},Gt={key:2,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Jt={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Xt={class:"mt-4 text-center"},ee={__name:"QuizListView",setup(S){const T=tt(),w=Q(!1),f=Q(!1),g=Q(!1),r=Q(null),s=Q(null),t=Q(""),n=_=>{const m=new Date(_);return bt(m,"hh:mm a, dd-MMM-yyyy")},l=_=>{t.value=_,w.value=!0},p=()=>{t.value="",w.value=!1},x=async _=>{try{await T.addQuiz(_),p()}catch(m){console.error("Error adding quiz:",m)}},h=_=>{r.value=_,f.value=!0},E=()=>{f.value=!1},v=_=>{s.value=_,g.value=!0},b=()=>{g.value=!1},y=async()=>{s.value&&(await T.deleteQuiz(s.value.id),b())};return K(()=>{T.fetchQuizzes()}),(_,m)=>{var R,D;const P=vt("RouterLink");return k(),C(J,null,[e("div",Ct,[m[8]||(m[8]=e("h1",{class:"title-lg text-center"},"Open Quiz / Quiz List",-1)),e("div",St,[e("button",{class:"btn-2",onClick:m[0]||(m[0]=z=>l("MCQ"))},"Add MCQ Quiz"),V("",!0)]),m[9]||(m[9]=e("hr",{class:"my-4"},null,-1)),((R=G(T).quizzes)==null?void 0:R.length)>0?(k(),C("div",At,[e("div",Qt,[(k(!0),C(J,null,mt(G(T).quizzes,z=>(k(),C("div",{key:z.id,class:yt(["w-full flex gap-4 items-center justify-between py-2",!z.duration||!z.opening_time||!z.questions_count||z.questions_count===0?"text-red-700":"text-green-700"])},[e("div",Mt,[e("div",Ot,[m[2]||(m[2]=e("div",{class:"text-sm"},"Quiz",-1)),M(wt,{text:`https://ciademy.com/quiz/${z.id}`},null,8,["text"]),m[3]||(m[3]=e("div",{class:"text-[10px]"},"Copy Link",-1))]),e("div",null,[e("h4",jt,L(z.title),1),e("div",Dt,[m[4]||(m[4]=e("i",{class:"far fa-calendar-check"},null,-1)),e("p",Lt,L(z.opening_time?n(z.opening_time):"--"),1)])])]),e("div",Rt,[z.user_regular_quizzes_count>0?(k(),gt(P,{key:0,to:{name:"QuizResultList",params:{quizId:z.id}},class:"btn-3 px-3.5"},{default:q(()=>[X(" Results ("+L(z.user_regular_quizzes_count)+") ",1)]),_:2},1032,["to"])):V("",!0),M(P,{to:{name:"QuizQuestionList",params:{quizId:z.id}},class:"btn-3 px-3.5"},{default:q(()=>[X(" Questions ("+L(z.questions_count)+") ",1)]),_:2},1032,["to"]),e("button",{class:"btn-1 pb-2",onClick:B=>h(z)},m[5]||(m[5]=[e("i",{class:"far fa-edit"},null,-1),e("span",{class:"hidden md:flex"},"Edit",-1)]),8,Vt),e("button",{class:"btn-contrast pb-2",onClick:B=>v(z)},m[6]||(m[6]=[e("i",{class:"fas fa-trash-alt"},null,-1),e("span",{class:"hidden md:flex"},"Delete",-1)]),8,qt)])],2))),128))])])):(k(),C("div",Nt,m[7]||(m[7]=[e("p",{class:"py-4"},"No quiz available.",-1)])))]),w.value?(k(),C("div",Pt,[e("div",$t,[e("div",{class:"flex justify-end"},[m[10]||(m[10]=e("div",{class:"mr-auto font-bold"},"Add Quiz Info",-1)),e("button",{onClick:p,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),m[11]||(m[11]=e("hr",{class:"my-3"},null,-1)),e("div",Ut,[M(zt,{quizType:t.value,onSubmit:x},null,8,["quizType"])])])])):V("",!0),f.value?(k(),C("div",Ft,[e("div",Bt,[e("div",It,[e("div",Ht,"Edit Form : "+L(r.value.title),1),e("button",{onClick:E,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),m[12]||(m[12]=e("hr",{class:"my-3"},null,-1)),e("div",Yt,[M(kt,{quiz:r.value,onClose:E},null,8,["quiz"])])])])):V("",!0),g.value?(k(),C("div",Gt,[e("div",Jt,[e("div",{class:"flex justify-end"},[e("button",{onClick:b,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Xt,[e("p",null,"Do you want to delete '"+L((D=s.value)==null?void 0:D.title)+"' quiz?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:y},"Yes"),e("button",{class:"btn-contrast",onClick:b},"No")])])])])):V("",!0)],64)}}};export{ee as default};
