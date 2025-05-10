import{d as D,r as b,x as p,y as u,z as e,P as E,I as B,a2 as U,A as y,D as q,W as H,C as i,B as a,U as S,a9 as j,F as O,G as A}from"./vue-BP9P6hCg.js";import{h as F}from"./index-89nqye9T.js";import{h as z}from"./vendor-PJuFQbji.js";const I=D("result",()=>{const f=b({}),t=b([]),r=b(null),_=b(!1);async function o(d,g=1){var c,h,x,s;_.value=!0;try{const l=await F.get(`/exams/${d}/results?page=${g}`);f.value=((c=l==null?void 0:l.data)==null?void 0:c.exam)??{},t.value=((h=l==null?void 0:l.data)==null?void 0:h.user_exams)??[]}catch(l){r.value=((s=(x=l==null?void 0:l.response)==null?void 0:x.data)==null?void 0:s.message)??"An error occurred while fetching chapters"}_.value=!1}return{exam:f,results:t,loading:_,error:r,index:o}}),G={__name:"ResultImageDownload",props:["page"],setup(f){const t=f,r=I(),_=d=>d?d.slice(0,3)+"*****"+d.slice(-3):"",o=async()=>{var h,x;const d=r.results.data||r.results,g=((h=r==null?void 0:r.exam)==null?void 0:h.title)||"result",c=document.createElement("div");c.classList.add("max-w-max","pb-2"),c.innerHTML=`
    <div class="flex justify-center items-center pt-3">
        <img class="w-40" src="/src/assets/img/e-logo.png" />
    </div>
  `,c.innerHTML+=`
    <h1 class="text-center pb-3">
        Result of <b>${(x=r==null?void 0:r.exam)==null?void 0:x.title}</b> (page: ${t.page})
    </h1>
  `,c.innerHTML+=`
    <table class="max-w-max divide-gray-400 text-sm">
      <thead class="bg-gray-200">
        <tr class="*:px-3 *:pb-3 text-left *:text-xs *:font-bold *:uppercase *:tracking-wider">
          <th scope="col" class="text-center">SL</th>
          <th scope="col" class="text-left">Student Name</th>
          <th scope="col" class="text-left">Student Phone</th>
          <th scope="col" class="text-center">Obtained Mark</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        ${d.map((s,l)=>{var m,v;return`
          <tr class="*:px-3 *:py-1.5 *:whitespace-nowrap">
            <td class="text-center">
              ${(r.results.from?r.results.from:1)+l}
            </td>
            <td class="text-left">
              ${(m=s==null?void 0:s.user)==null?void 0:m.name}
            </td>
            <td class="text-left">
              ${_((v=s==null?void 0:s.user)==null?void 0:v.phone)}
            </td>
            <td class="text-center">
              ${s==null?void 0:s.obtained_mark}
            </td>
          </tr>
        `}).join("")}
      </tbody>
    </table>
  `,document.body.appendChild(c);try{const l=(await z(c,{useCORS:!0})).toDataURL("image/png"),m=document.createElement("a");m.href=l,m.download=`${g}.png`,m.click()}catch(s){console.error("Error capturing the element:",s)}finally{document.body.removeChild(c)}};return(d,g)=>(u(),p("div",null,[e("button",{onClick:o,type:"button",class:"mx-auto px-3 pt-1.5 pb-1 rounded-lg border"}," Download Results as Image ")]))}},W={class:"my-container mx-auto py-4 print:py-0"},J={class:"flex items-center py-4 print:py-0"},K={class:"flex-1 text-2xl"},Q={key:0,class:"flex justify-between mb-4"},X=["disabled"],Y={class:"flex justify-center items-center gap-1.5"},Z={key:0},ee=["disabled"],te={key:1,class:"flex justify-center items-center py-20"},se={key:2,class:"overflow-x-auto card-bg"},ae={id:"capture",class:"min-w-full divide-y divide-gray-400 text-sm"},ne={class:"bg-white divide-y divide-gray-200"},oe={class:"text-center"},le={class:"text-left"},re={class:"text-left hidden print:table-cell"},ce={class:"text-left print:hidden"},de={class:"text-center"},ie={class:"text-center print:hidden"},pe={class:"text-center print:hidden"},ue={key:3,class:"flex justify-between mt-4"},xe=["disabled"],me={class:"flex justify-center items-center gap-1.5"},_e={key:0},ge=["disabled"],he={key:4,class:"text-red-500 mt-4"},ve={__name:"ExamResultListView",setup(f){const t=I(),r=E(),{examId:_}=r.params;b("");const o=b(r.query.page||1);let d=null;B(()=>{t.index(_,o.value)});const g=()=>{o.value=parseInt(o.value)+1},c=()=>{o.value>1&&(o.value=parseInt(o.value)-1)};U(o,()=>{d&&clearTimeout(d),d=setTimeout(()=>{t.index(_,o.value)},500)});const h=x=>x?x.slice(0,3)+"*****"+x.slice(-3):"";return(x,s)=>{var l,m,v,w,k,C,M,N,P,$;return u(),p("div",W,[e("div",J,[e("h1",K,[s[3]||(s[3]=H(" Result of ")),e("b",null,i((m=(l=a(t))==null?void 0:l.exam)==null?void 0:m.title),1)]),q(G,{page:o.value},null,8,["page"]),y("",!0)]),a(t).results.prev_page_url||a(t).results.next_page_url?(u(),p("div",Q,[e("button",{onClick:c,disabled:!a(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,X),e("div",Y,[S(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>o.value=n),class:"text-center w-10 input-1 px-0"},null,512),[[j,o.value]]),(w=(v=a(t))==null?void 0:v.results)!=null&&w.total&&((C=(k=a(t))==null?void 0:k.results)!=null&&C.per_page)?(u(),p("span",Z," of "+i(Math.ceil(a(t).results.total/a(t).results.per_page)),1)):y("",!0),s[4]||(s[4]=e("span",null,"Page",-1))]),e("button",{onClick:g,disabled:!a(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,ee)])):y("",!0),a(t).loading?(u(),p("div",te,s[5]||(s[5]=[e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(u(),p("div",se,[e("table",ae,[s[6]||(s[6]=e("thead",{class:"bg-gray-200"},[e("tr",{class:"*:px-3 *:py-3 text-left *:text-xs *:font-bold *:uppercase *:tracking-wider"},[e("th",{scope:"col",class:"text-center"},"SL"),e("th",{scope:"col",class:"text-left"},"Student Name"),e("th",{scope:"col",class:"text-left"},"Student Phone"),e("th",{scope:"col",class:"text-center"},"Obtained Mark"),e("th",{scope:"col",class:"text-center print:hidden"},"Correct Mark"),e("th",{scope:"col",class:"text-center print:hidden"},"Negative Mark")])],-1)),e("tbody",ne,[(u(!0),p(O,null,A(a(t).results.data||a(t).results,(n,V)=>{var L,R,T;return u(),p("tr",{key:n.id,class:"*:px-3 *:py-2 *:whitespace-nowrap"},[e("td",oe,i((a(t).results.from?a(t).results.from:1)+V),1),e("td",le,i((L=n==null?void 0:n.user)==null?void 0:L.name),1),e("td",re,i(h((R=n==null?void 0:n.user)==null?void 0:R.phone)),1),e("td",ce,i((T=n==null?void 0:n.user)==null?void 0:T.phone),1),e("td",de,i(n==null?void 0:n.obtained_mark),1),e("td",ie,i(n==null?void 0:n.mcq_correct_mark),1),e("td",pe,i(n==null?void 0:n.mcq_negative_mark),1)])}),128))])])])),a(t).results.prev_page_url||a(t).results.next_page_url?(u(),p("div",ue,[e("button",{onClick:c,disabled:!a(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,xe),e("div",me,[S(e("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>o.value=n),class:"text-center w-10 input-1 px-0"},null,512),[[j,o.value]]),(N=(M=a(t))==null?void 0:M.results)!=null&&N.total&&(($=(P=a(t))==null?void 0:P.results)!=null&&$.per_page)?(u(),p("span",_e," of "+i(Math.ceil(a(t).results.total/a(t).results.per_page)),1)):y("",!0),s[7]||(s[7]=e("span",null,"Page",-1))]),e("button",{onClick:g,disabled:!a(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,ge)])):y("",!0),a(t).error?(u(),p("p",he,i(a(t).error),1)):y("",!0)])}}};export{ve as default};
