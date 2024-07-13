import{q as S,k as D,l as L,u as F,d as p,e as N,o as t,g as o,t as a,a as e,b as m,F as x,h as y,n as d,s as k,m as j}from"./index-DInHfI64.js";import{f as B}from"./format-cwXK75ha.js";const E={class:"my-container py-4"},R={key:0,class:"error"},V={key:1,class:"grid md:grid-cols-3 gap-4"},I={class:"md:order-last md:col-span-1"},T={class:"card-bg p-4"},$=["src"],q={class:"flex justify-between"},z={class:"font-bold text-sky-600"},A={class:"font-bold text-sky-600"},K={class:"md:col-span-2 space-y-4"},O={class:"title-xl"},G=e("hr",{class:"my-2"},null,-1),H={class:""},J=e("h2",{class:"title-lg"},"Modules",-1),P={class:"space-y-4"},Q=["onClick"],U={class:"text-center border-2 rounded-md p-1.5"},W=e("div",{class:"text-xs md:text-sm"},"Module",-1),X={class:"flex-1"},Y={class:""},Z={class:"flex items-center gap-2 text-gray-500"},ee=e("i",{class:"fas fa-video text-xs"},null,-1),se={key:0,class:"absolute top-3 -left-8 -rotate-45 bg-orange-100 px-10 text-sm text-orange-500 font-medium"},te={key:0},oe={class:"space-y-2"},ae=["onClick"],ne={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},le={class:"text-xs"},ie={key:0},ce={key:1},re={class:"title-sm"},de={class:"flex items-center gap-2 text-sm text-gray-400"},_e=e("i",{class:"far fa-calendar-check"},null,-1),ue={key:2},ge={__name:"CourseDetails",setup(pe){const b=S(),_=D(),h=L(),v=F(),f=b.params.id,r=p([]),l=p(null),u=p(null);N(async()=>{try{await v.fetchCourse(f),l.value=v.course}catch(n){u.value=n}});const g=n=>{const i=new Date(n);return B(i,"dd-MMM-yyyy")},C=n=>{const i=r.value.indexOf(n);i===-1?r.value.push(n):r.value.splice(i,1)},M=(n,i)=>{i||(!h.token&&!localStorage.getItem("auth_token")?_.push({name:"login"}):window.open(n.link,"_blank"))},w=()=>{!h.token&&!localStorage.getItem("auth_token")?_.push({name:"join"}):_.push({name:"Checkout",params:{id:f}})};return(n,i)=>(t(),o("div",E,[u.value?(t(),o("div",R,a(u.value),1)):l.value?(t(),o("div",V,[e("div",I,[e("div",T,[e("img",{src:l.value.thumbnail,alt:""},null,8,$),e("div",q,[e("p",null,[m(" Fee: "),e("span",z,a(l.value.price)+" TK",1)]),e("p",null,[m(" Start Date: "),e("span",A,a(g(l.value.start_date)),1)])]),e("button",{class:"btn-2",onClick:w},"Enroll Now")])]),e("div",K,[e("div",null,[e("h1",O,a(l.value.title),1),G]),e("div",H,[e("p",null,a(l.value.description),1)]),J,e("ul",P,[(t(!0),o(x,null,y(l.value.modules,s=>(t(),o("li",{class:"card-bg p-4 relative",key:s.id},[e("div",{onClick:c=>C(s.id),class:"flex flex-1 items-center gap-4 cursor-pointer"},[e("div",U,[e("div",{class:d(["text-xl font-bold text-orange-500",{"!text-gray-400":s.is_active==0}])},a(s.order),3),W]),e("div",X,[e("h4",{class:d(["title-md",{"text-gray-400":s.is_active==0}])},a(s.title),3),e("div",Y,[e("div",Z,[ee,e("p",null,a(s.lectures.length)+" Lectures",1)])])]),e("button",null,[e("i",{class:d(r.value.includes(s.id)?"fas fa-angle-up":"fas fa-angle-down")},null,2)]),s.is_paid==0?(t(),o("div",se," Free ")):k("",!0)],8,Q),r.value.includes(s.id)?(t(),o("div",te,[e("ul",oe,[(t(!0),o(x,null,y(s.lectures,c=>(t(),o("li",{key:c.id},[e("a",{onClick:j(he=>M(c,s.is_paid),["prevent"]),class:d(["flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md cursor-pointer",{"pointer-events-none opacity-70":s.is_paid==1}])},[e("div",ne,[e("i",{class:d(c.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),e("div",le,[c.type==="virtual_platform"?(t(),o("p",ie,"Live")):(t(),o("p",ce,"Rec"))])]),e("div",null,[e("h4",re,a(c.title),1),e("div",de,[_e,e("p",null,a(g(c.opening_time)),1)])])],10,ae)]))),128))])])):k("",!0)]))),128))])])])):(t(),o("div",ue,"Loading..."))]))}};export{ge as default};