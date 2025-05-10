import{x as c,y as i,z as e,P as V,r as R,I as q,a2 as D,A as _,D as E,W as B,C as l,B as a,U as j,a9 as z,F as U,G as H}from"./vue-BP9P6hCg.js";import{u as I}from"./quiz-ByZ1886p.js";import{h as O}from"./vendor-PJuFQbji.js";import"./index-89nqye9T.js";const Q={__name:"QuizResultImageDownload",props:["page"],setup(f){const t=f,r=I(),y=d=>d?d.slice(0,3)+"*****"+d.slice(-3):"",n=async()=>{var h,x;const d=r.results.data||r.results,g=((h=r==null?void 0:r.quiz)==null?void 0:h.title)||"result",p=document.createElement("div");p.classList.add("max-w-max","pb-2"),p.innerHTML=`
    <div class="flex justify-center items-center pt-3">
        <img class="w-40" src="/src/assets/img/e-logo.png" />
    </div>
  `,p.innerHTML+=`
    <h1 class="text-center pb-3">
        Result of <b>${(x=r==null?void 0:r.quiz)==null?void 0:x.title}</b> (page: ${t.page})
    </h1>
  `,p.innerHTML+=`
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
        ${d.map((s,m)=>{var u,b;return`
          <tr class="*:px-3 *:py-1.5 *:whitespace-nowrap">
            <td class="text-center">
              ${(r.results.from?r.results.from:1)+m}
            </td>
            <td class="text-left">
              ${(u=s==null?void 0:s.user)==null?void 0:u.name}
            </td>
            <td class="text-left">
              ${y((b=s==null?void 0:s.user)==null?void 0:b.phone)}
            </td>
            <td class="text-center">
              ${s==null?void 0:s.obtained_mark}
            </td>
          </tr>
        `}).join("")}
      </tbody>
    </table>
  `,document.body.appendChild(p);try{const m=(await O(p,{useCORS:!0})).toDataURL("image/png"),u=document.createElement("a");u.href=m,u.download=`${g}.png`,u.click()}catch(s){console.error("Error capturing the element:",s)}finally{document.body.removeChild(p)}};return(d,g)=>(i(),c("div",null,[e("button",{onClick:n,type:"button",class:"mx-auto px-3 pt-1.5 pb-1 rounded-lg border"}," Download Results as Image ")]))}},F={class:"my-container mx-auto py-4 print:py-0"},A={class:"flex items-center py-4 print:py-0"},G={class:"flex-1 text-2xl"},W={key:0,class:"flex justify-between mb-4"},J=["disabled"],K={class:"flex justify-center items-center gap-1.5"},X={key:0},Y=["disabled"],Z={key:1,class:"flex justify-center items-center py-20"},ee={key:2,class:"overflow-x-auto card-bg"},te={id:"capture",class:"min-w-full divide-y divide-gray-400 text-sm"},se={class:"bg-white divide-y divide-gray-200"},ae={class:"text-center"},oe={class:"text-left"},ne={class:"text-left hidden print:table-cell"},re={class:"text-left print:hidden"},le={class:"text-center"},ce={class:"text-center print:hidden"},ie={class:"text-center print:hidden"},de={key:3,class:"flex justify-between mt-4"},pe=["disabled"],ue={class:"flex justify-center items-center gap-1.5"},xe={key:0},me=["disabled"],_e={key:4,class:"text-red-500 mt-4"},fe={__name:"QuizResultListView",setup(f){const t=I(),r=V(),{quizId:y}=r.params;R("");const n=R(r.query.page||1);let d=null;q(()=>{t.result(y,n.value)});const g=()=>{n.value=parseInt(n.value)+1},p=()=>{n.value>1&&(n.value=parseInt(n.value)-1)};D(n,()=>{d&&clearTimeout(d),d=setTimeout(()=>{t.result(y,n.value)},500)});const h=x=>x?x.slice(0,3)+"*****"+x.slice(-3):"";return(x,s)=>{var m,u,b,v,k,w,C,M,N,P;return i(),c("div",F,[e("div",A,[e("h1",G,[s[3]||(s[3]=B(" Result of ")),e("b",null,l((u=(m=a(t))==null?void 0:m.quiz)==null?void 0:u.title),1)]),E(Q,{page:n.value},null,8,["page"]),_("",!0)]),a(t).results.prev_page_url||a(t).results.next_page_url?(i(),c("div",W,[e("button",{onClick:p,disabled:!a(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,J),e("div",K,[j(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>n.value=o),class:"text-center w-10 input-1 px-0"},null,512),[[z,n.value]]),(v=(b=a(t))==null?void 0:b.results)!=null&&v.total&&((w=(k=a(t))==null?void 0:k.results)!=null&&w.per_page)?(i(),c("span",X," of "+l(Math.ceil(a(t).results.total/a(t).results.per_page)),1)):_("",!0),s[4]||(s[4]=e("span",null,"Page",-1))]),e("button",{onClick:g,disabled:!a(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,Y)])):_("",!0),a(t).loading?(i(),c("div",Z,s[5]||(s[5]=[e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(i(),c("div",ee,[e("table",te,[s[6]||(s[6]=e("thead",{class:"bg-gray-200"},[e("tr",{class:"*:px-3 *:py-3 text-left *:text-xs *:font-bold *:uppercase *:tracking-wider"},[e("th",{scope:"col",class:"text-center"},"SL"),e("th",{scope:"col",class:"text-left"},"Student Name"),e("th",{scope:"col",class:"text-left"},"Student Phone"),e("th",{scope:"col",class:"text-center"},"Obtained Mark"),e("th",{scope:"col",class:"text-center print:hidden"},"Correct Mark"),e("th",{scope:"col",class:"text-center print:hidden"},"Negative Mark")])],-1)),e("tbody",se,[(i(!0),c(U,null,H(a(t).results.data||a(t).results,(o,S)=>{var L,T,$;return i(),c("tr",{key:o.id,class:"*:px-3 *:py-2 *:whitespace-nowrap"},[e("td",ae,l((a(t).results.from?a(t).results.from:1)+S),1),e("td",oe,l((L=o==null?void 0:o.user)==null?void 0:L.name),1),e("td",ne,l(h((T=o==null?void 0:o.user)==null?void 0:T.phone)),1),e("td",re,l(($=o==null?void 0:o.user)==null?void 0:$.phone),1),e("td",le,l(o==null?void 0:o.obtained_mark),1),e("td",ce,l(o==null?void 0:o.mcq_correct_mark),1),e("td",ie,l(o==null?void 0:o.mcq_negative_mark),1)])}),128))])])])),a(t).results.prev_page_url||a(t).results.next_page_url?(i(),c("div",de,[e("button",{onClick:p,disabled:!a(t).results.prev_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,pe),e("div",ue,[j(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>n.value=o),class:"text-center w-10 input-1 px-0"},null,512),[[z,n.value]]),(M=(C=a(t))==null?void 0:C.results)!=null&&M.total&&((P=(N=a(t))==null?void 0:N.results)!=null&&P.per_page)?(i(),c("span",xe," of "+l(Math.ceil(a(t).results.total/a(t).results.per_page)),1)):_("",!0),s[7]||(s[7]=e("span",null,"Page",-1))]),e("button",{onClick:g,disabled:!a(t).results.next_page_url,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,me)])):_("",!0),a(t).error?(i(),c("p",_e,l(a(t).error),1)):_("",!0)])}}};export{fe as default};
