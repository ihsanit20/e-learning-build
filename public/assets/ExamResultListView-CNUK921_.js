import{b as B,r as S,o as I,w as L,e as l,f as i,g as e,s as D,t as r,i as s,C as E,q as d,z as j,A as T,F,h as U}from"./index-DFkC2udi.js";import{u as z,_ as A}from"./ResultImageDownload-BDBFPcm0.js";const O={class:"my-container mx-auto py-4 print:py-0"},$={class:"flex items-center py-4 print:py-0"},G={class:"flex-1 text-2xl"},H={key:0,class:"flex justify-between mb-4"},J=["disabled"],K={class:"flex justify-center items-center gap-1.5"},Q={key:0},W=["disabled"],X={key:1,class:"flex justify-center items-center py-20"},Y={key:2,class:"overflow-x-auto card-bg"},Z={id:"capture",class:"min-w-full divide-y divide-gray-400 text-sm"},ee={class:"bg-white divide-y divide-gray-200"},te={class:"text-center"},se={class:"text-left"},ae={class:"text-left hidden print:table-cell"},oe={class:"text-left print:hidden"},ne={class:"text-center"},re={class:"text-center print:hidden"},le={class:"text-center print:hidden"},ie={key:3,class:"flex justify-between mt-4"},de=["disabled"],ce={class:"flex justify-center items-center gap-1.5"},pe={key:0},ue=["disabled"],_e={key:4,class:"text-red-500 mt-4"},me={__name:"ExamResultListView",setup(xe){const t=z(),u=B(),{examId:_}=u.params;S("");const n=S(u.query.page||1);let p=null;I(()=>{t.index(_,n.value)});const x=()=>{n.value=parseInt(n.value)+1},g=()=>{n.value>1&&(n.value=parseInt(n.value)-1)};L(n,()=>{p&&clearTimeout(p),p=setTimeout(()=>{t.index(_,n.value)},500)});const q=c=>c?c.slice(0,3)+"*****"+c.slice(-3):"";return(c,o)=>{var y,m,b,f,v,h,k,w,N,P;return l(),i("div",O,[e("div",$,[e("h1",G,[o[3]||(o[3]=D(" Result of ")),e("b",null,r((m=(y=s(t))==null?void 0:y.exam)==null?void 0:m.title),1)]),E(A,{page:n.value},null,8,["page"]),d("",!0)]),s(t).results.prev_page_url||s(t).results.next_page_url?(l(),i("div",H,[e("button",{onClick:g,disabled:!s(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,J),e("div",K,[j(e("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),class:"text-center w-10 input-1 px-0"},null,512),[[T,n.value]]),(f=(b=s(t))==null?void 0:b.results)!=null&&f.total&&((h=(v=s(t))==null?void 0:v.results)!=null&&h.per_page)?(l(),i("span",Q," of "+r(Math.ceil(s(t).results.total/s(t).results.per_page)),1)):d("",!0),o[4]||(o[4]=e("span",null,"Page",-1))]),e("button",{onClick:x,disabled:!s(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,W)])):d("",!0),s(t).loading?(l(),i("div",X,o[5]||(o[5]=[e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(l(),i("div",Y,[e("table",Z,[o[6]||(o[6]=e("thead",{class:"bg-gray-200"},[e("tr",{class:"*:px-3 *:py-3 text-left *:text-xs *:font-bold *:uppercase *:tracking-wider"},[e("th",{scope:"col",class:"text-center"},"SL"),e("th",{scope:"col",class:"text-left"},"Student Name"),e("th",{scope:"col",class:"text-left"},"Student Phone"),e("th",{scope:"col",class:"text-center"},"Obtained Mark"),e("th",{scope:"col",class:"text-center print:hidden"},"Correct Mark"),e("th",{scope:"col",class:"text-center print:hidden"},"Negative Mark")])],-1)),e("tbody",ee,[(l(!0),i(F,null,U(s(t).results.data||s(t).results,(a,R)=>{var C,M,V;return l(),i("tr",{key:a.id,class:"*:px-3 *:py-2 *:whitespace-nowrap"},[e("td",te,r((s(t).results.from?s(t).results.from:1)+R),1),e("td",se,r((C=a==null?void 0:a.user)==null?void 0:C.name),1),e("td",ae,r(q((M=a==null?void 0:a.user)==null?void 0:M.phone)),1),e("td",oe,r((V=a==null?void 0:a.user)==null?void 0:V.phone),1),e("td",ne,r(a==null?void 0:a.obtained_mark),1),e("td",re,r(a==null?void 0:a.mcq_correct_mark),1),e("td",le,r(a==null?void 0:a.mcq_negative_mark),1)])}),128))])])])),s(t).results.prev_page_url||s(t).results.next_page_url?(l(),i("div",ie,[e("button",{onClick:g,disabled:!s(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,de),e("div",ce,[j(e("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>n.value=a),class:"text-center w-10 input-1 px-0"},null,512),[[T,n.value]]),(w=(k=s(t))==null?void 0:k.results)!=null&&w.total&&((P=(N=s(t))==null?void 0:N.results)!=null&&P.per_page)?(l(),i("span",pe," of "+r(Math.ceil(s(t).results.total/s(t).results.per_page)),1)):d("",!0),o[7]||(o[7]=e("span",null,"Page",-1))]),e("button",{onClick:x,disabled:!s(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,ue)])):d("",!0),s(t).error?(l(),i("p",_e,r(s(t).error),1)):d("",!0)])}}};export{me as default};
