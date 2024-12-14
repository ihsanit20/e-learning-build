import{b as B,r as S,o as I,w as L,e as i,f as r,g as e,q as z,t as n,i as s,E as D,p as l,z as j,A as T,F as E,h as F}from"./index-BMsmsKno.js";import{u as U,_ as A}from"./ResultImageDownload-CNTSnXf7.js";const O={class:"my-container mx-auto py-4 print:py-0"},Q={class:"flex items-center py-4 print:py-0"},$={class:"flex-1 text-2xl"},G={key:0,class:"flex justify-between mb-4"},H=["disabled"],J={class:"flex justify-center items-center gap-1.5"},K={key:0},W=e("span",null,"Page",-1),X=["disabled"],Y={key:1,class:"flex justify-center items-center py-20"},Z=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),ee=[Z],te={key:2,class:"overflow-x-auto card-bg"},se={id:"capture",class:"min-w-full divide-y divide-gray-400 text-sm"},ae=e("thead",{class:"bg-gray-200"},[e("tr",{class:"*:px-3 *:py-3 text-left *:text-xs *:font-bold *:uppercase *:tracking-wider"},[e("th",{scope:"col",class:"text-center"},"SL"),e("th",{scope:"col",class:"text-left"},"Student Name"),e("th",{scope:"col",class:"text-left"},"Student Phone"),e("th",{scope:"col",class:"text-center"},"Obtained Mark"),e("th",{scope:"col",class:"text-center print:hidden"},"Correct Mark"),e("th",{scope:"col",class:"text-center print:hidden"},"Negative Mark")])],-1),oe={class:"bg-white divide-y divide-gray-200"},ne={class:"text-center"},ie={class:"text-left"},re={class:"text-left hidden print:table-cell"},le={class:"text-left print:hidden"},ce={class:"text-center"},de={class:"text-center print:hidden"},pe={class:"text-center print:hidden"},_e={key:3,class:"flex justify-between mt-4"},ue=["disabled"],xe={class:"flex justify-center items-center gap-1.5"},he={key:0},ge=e("span",null,"Page",-1),ye=["disabled"],me={key:4,class:"text-red-500 mt-4"},ke={__name:"QuizResultListView",setup(be){const t=U(),_=B(),{examId:u}=_.params;S("");const o=S(_.query.page||1);let p=null;I(()=>{t.index(u,o.value)});const x=()=>{o.value=parseInt(o.value)+1},h=()=>{o.value>1&&(o.value=parseInt(o.value)-1)};L(o,()=>{p&&clearTimeout(p),p=setTimeout(()=>{t.index(u,o.value)},500)});const q=c=>c?c.slice(0,3)+"*****"+c.slice(-3):"";return(c,d)=>{var g,y,m,b,f,v,k,w,N,P;return i(),r("div",O,[e("div",Q,[e("h1",$,[z(" Result of "),e("b",null,n((y=(g=s(t))==null?void 0:g.exam)==null?void 0:y.title),1)]),D(A,{page:o.value},null,8,["page"]),l("",!0)]),s(t).results.prev_page_url||s(t).results.next_page_url?(i(),r("div",G,[e("button",{onClick:h,disabled:!s(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,H),e("div",J,[j(e("input",{"onUpdate:modelValue":d[1]||(d[1]=a=>o.value=a),class:"text-center w-10 input-1 px-0"},null,512),[[T,o.value]]),(b=(m=s(t))==null?void 0:m.results)!=null&&b.total&&((v=(f=s(t))==null?void 0:f.results)!=null&&v.per_page)?(i(),r("span",K," of "+n(Math.ceil(s(t).results.total/s(t).results.per_page)),1)):l("",!0),W]),e("button",{onClick:x,disabled:!s(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,X)])):l("",!0),s(t).loading?(i(),r("div",Y,ee)):(i(),r("div",te,[e("table",se,[ae,e("tbody",oe,[(i(!0),r(E,null,F(s(t).results.data||s(t).results,(a,R)=>{var M,V,C;return i(),r("tr",{key:a.id,class:"*:px-3 *:py-2 *:whitespace-nowrap"},[e("td",ne,n((s(t).results.from?s(t).results.from:1)+R),1),e("td",ie,n((M=a==null?void 0:a.user)==null?void 0:M.name),1),e("td",re,n(q((V=a==null?void 0:a.user)==null?void 0:V.phone)),1),e("td",le,n((C=a==null?void 0:a.user)==null?void 0:C.phone),1),e("td",ce,n(a==null?void 0:a.obtained_mark),1),e("td",de,n(a==null?void 0:a.mcq_correct_mark),1),e("td",pe,n(a==null?void 0:a.mcq_negative_mark),1)])}),128))])])])),s(t).results.prev_page_url||s(t).results.next_page_url?(i(),r("div",_e,[e("button",{onClick:h,disabled:!s(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,ue),e("div",xe,[j(e("input",{"onUpdate:modelValue":d[2]||(d[2]=a=>o.value=a),class:"text-center w-10 input-1 px-0"},null,512),[[T,o.value]]),(w=(k=s(t))==null?void 0:k.results)!=null&&w.total&&((P=(N=s(t))==null?void 0:N.results)!=null&&P.per_page)?(i(),r("span",he," of "+n(Math.ceil(s(t).results.total/s(t).results.per_page)),1)):l("",!0),ge]),e("button",{onClick:x,disabled:!s(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,ye)])):l("",!0),s(t).error?(i(),r("p",me,n(s(t).error),1)):l("",!0)])}}};export{ke as default};
