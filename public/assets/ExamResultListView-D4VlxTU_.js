import{Y as R,r as g,Z as T,b as q,o as B,w as E,e as l,f as n,g as e,z as m,A as b,i as a,t as c,p as x,F as I,h as U}from"./index-DpPtPH_x.js";const A=R("result",()=>{const v=g([]),t=g(null),i=g(!1);async function h(y,o=1){var d,p,_;i.value=!0;try{const r=await T.get(`/exams/${y}/results?page=${o}`);v.value=((d=r==null?void 0:r.data)==null?void 0:d.user_exams)??[]}catch(r){t.value=((_=(p=r==null?void 0:r.response)==null?void 0:p.data)==null?void 0:_.message)??"An error occurred while fetching chapters"}i.value=!1}return{results:v,loading:i,error:t,index:h}}),D={class:"my-container mx-auto py-4"},F={class:"flex items-center py-4"},$=e("h1",{class:"flex-1 text-2xl font-bold"},"Exm Result List",-1),z={key:0,class:"flex justify-between mb-4"},O=["disabled"],Y={class:"flex justify-center items-center gap-1.5"},Z={key:0},G=e("span",null,"Page",-1),H=["disabled"],J={key:1,class:"flex justify-center items-center py-20"},K=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),Q=[K],W={key:2,class:"overflow-x-auto card-bg"},X={class:"min-w-full divide-y divide-gray-400 text-sm"},ee=e("thead",{class:"bg-gray-200"},[e("tr",{class:"*:px-3 *:py-3 text-left *:text-xs *:font-bold *:uppercase *:tracking-wider"},[e("th",{scope:"col",class:"text-center"},"SL"),e("th",{scope:"col",class:"text-left"},"Student Name"),e("th",{scope:"col",class:"text-left"},"Student Phone"),e("th",{scope:"col",class:"text-center"},"Obtained Mark"),e("th",{scope:"col",class:"text-center"},"Correct Mark"),e("th",{scope:"col",class:"text-center"},"Negative Mark")])],-1),te={class:"bg-white divide-y divide-gray-200"},se={class:"text-center"},ae={class:"text-left"},oe={class:"text-left"},le={class:"text-center"},ne={class:"text-center"},ce={class:"text-center"},re={key:3,class:"flex justify-between mt-4"},ie=["disabled"],de={class:"flex justify-center items-center gap-1.5"},ue={key:0},pe=e("span",null,"Page",-1),_e=["disabled"],xe={key:4,class:"text-red-500 mt-4"},he={__name:"ExamResultListView",setup(v){const t=A(),i=q(),{examId:h}=i.params,y=g(""),o=g(i.query.page||1);let d=null;B(()=>{t.index(h,o.value)});const p=()=>{o.value=parseInt(o.value)+1},_=()=>{o.value>1&&(o.value=parseInt(o.value)-1)};return E(o,()=>{d&&clearTimeout(d),d=setTimeout(()=>{t.index(h,o.value)},500)}),(r,u)=>{var f,k,w,S,C,M,P,N;return l(),n("div",D,[e("div",F,[$,m(e("input",{"onUpdate:modelValue":u[0]||(u[0]=s=>y.value=s),type:"text",placeholder:"Search...",class:"input-1 w-80"},null,512),[[b,y.value]])]),a(t).results.prev_page_url||a(t).results.next_page_url?(l(),n("div",z,[e("button",{onClick:_,disabled:!a(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,O),e("div",Y,[m(e("input",{"onUpdate:modelValue":u[1]||(u[1]=s=>o.value=s),class:"text-center w-10 input-1 px-0"},null,512),[[b,o.value]]),(k=(f=a(t))==null?void 0:f.results)!=null&&k.total&&((S=(w=a(t))==null?void 0:w.results)!=null&&S.per_page)?(l(),n("span",Z," of "+c(Math.ceil(a(t).results.total/a(t).results.per_page)),1)):x("",!0),G]),e("button",{onClick:p,disabled:!a(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,H)])):x("",!0),a(t).loading?(l(),n("div",J,Q)):(l(),n("div",W,[e("table",X,[ee,e("tbody",te,[(l(!0),n(I,null,U(a(t).results.data,(s,L)=>{var V,j;return l(),n("tr",{key:s.id,class:"*:px-3 *:py-2 *:whitespace-nowrap"},[e("td",se,c(a(t).results.from+L),1),e("td",ae,c((V=s==null?void 0:s.user)==null?void 0:V.name),1),e("td",oe,c((j=s==null?void 0:s.user)==null?void 0:j.phone),1),e("td",le,c(s==null?void 0:s.obtained_mark),1),e("td",ne,c(s==null?void 0:s.mcq_correct_mark),1),e("td",ce,c(s==null?void 0:s.mcq_negative_mark),1)])}),128))])])])),a(t).results.prev_page_url||a(t).results.next_page_url?(l(),n("div",re,[e("button",{onClick:_,disabled:!a(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,ie),e("div",de,[m(e("input",{"onUpdate:modelValue":u[2]||(u[2]=s=>o.value=s),class:"text-center w-10 input-1 px-0"},null,512),[[b,o.value]]),(M=(C=a(t))==null?void 0:C.results)!=null&&M.total&&((N=(P=a(t))==null?void 0:P.results)!=null&&N.per_page)?(l(),n("span",ue," of "+c(Math.ceil(a(t).results.total/a(t).results.per_page)),1)):x("",!0),pe]),e("button",{onClick:p,disabled:!a(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,_e)])):x("",!0),a(t).error?(l(),n("p",xe,c(a(t).error),1)):x("",!0)])}}};export{he as default};