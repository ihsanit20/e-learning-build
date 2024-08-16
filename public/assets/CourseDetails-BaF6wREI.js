import{b as F,k as E,l as N,u as R,r as _,o as B,s as T,d as s,e as t,t as i,f as e,q as u,x as v,i as V,z as $,F as f,g,A as z,n as d,m as C,j as A}from"./index-DpEJbF1j.js";const H={class:"my-container py-4"},q={key:0,class:"error"},I={key:1},K=A('<div class="grid md:grid-cols-3 gap-4"><div class="md:order-last md:col-span-1"><div class="card-bg p-4 animate-pulse"><div class="rounded overflow-hidden h-52 bg-gray-200"></div><div class="flex justify-between mt-4"><div class="h-6 w-20 bg-gray-200 rounded-full"></div><div class="h-6 w-20 bg-gray-200 rounded-full"></div></div><div class="h-10 mt-4 bg-gray-200 rounded-full"></div></div></div><div class="md:col-span-2 space-y-4"><div class="h-10 bg-gray-200 rounded-full"></div><div class="h-6 bg-gray-200 rounded-full"></div><div class="h-6 bg-gray-200 rounded-full"></div><div class="h-6 bg-gray-200 rounded-full"></div><div class="space-y-2"><div class="h-8 bg-gray-200 rounded-full"></div><div class="h-8 bg-gray-200 rounded-full"></div><div class="h-8 bg-gray-200 rounded-full"></div></div></div></div>',1),O=[K],G={key:2,class:"grid md:grid-cols-3 gap-4"},J={class:"md:order-last md:col-span-1"},P={class:"card-bg p-4 relative"},Q={key:0,class:"absolute top-3 -left-8 -rotate-45 bg-green-600 px-10 py-0.5 text-sm text-white font-medium"},U={class:"rounded overflow-hidden"},W=["src"],X={class:"flex justify-between"},Y={class:"font-bold text-sky-600"},Z={key:0},ee={class:"font-bold text-sky-600"},se={key:1,class:"bg-pink-50 px-3 rounded-full"},te={class:"font-bold text-pink-600"},ae={class:"md:col-span-2 space-y-4"},le={class:"title-xl"},ie=e("hr",{class:"my-2"},null,-1),oe=["innerHTML"],ne=e("h2",{class:"title-lg"},"Modules",-1),ce={class:"space-y-4"},de=["onClick"],re={class:"text-center border-2 rounded-md p-1.5"},ue=e("div",{class:"text-xs md:text-sm"},"Module",-1),_e={class:"flex-1"},ve={class:"flex gap-4"},pe={key:0,class:"flex items-center gap-2 text-gray-500"},he=e("i",{class:"fas fa-video text-xs"},null,-1),fe={key:1,class:"flex items-center gap-2 text-gray-500"},ge=e("i",{class:"fas fa-file-alt text-xs"},null,-1),ye={key:0,class:"absolute top-3 -left-8 -rotate-45 bg-orange-100 px-10 text-sm text-orange-500 font-medium"},xe={key:0},me={class:"space-y-2"},ke=["onClick"],be={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},Ce={class:"text-xs"},we={key:0},Le={key:1},Me={class:"title-sm"},Se={class:"flex items-center gap-2 text-sm text-gray-400"},je=e("i",{class:"far fa-calendar-check"},null,-1),De=["onClick"],Fe=e("div",{class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},[e("i",{class:"fas fa-file-alt"}),e("div",{class:"text-xs"},"Exam")],-1),Ee={class:"w-full"},Ne={class:"title-sm"},Re={class:"flex justify-between gap-2 text-sm text-gray-400"},Be={class:"flex items-center gap-2"},Te=e("i",{class:"far fa-calendar-check"},null,-1),Ve={class:"flex items-center gap-2"},$e=e("i",{class:"far fa-clock"},null,-1),ze=e("span",null,"Duration:",-1),Ae={key:3},Ie={__name:"CourseDetails",setup(He){const w=F(),y=E(),L=N(),x=R(),m=w.params.id,r=_([]),l=_(null),p=_(null),k=_(!0);B(async()=>{try{await x.fetchCourse(m),l.value=x.course}catch(n){p.value=n}finally{k.value=!1}});const h=n=>{const c=new Date(n);return z(c,"dd-MMM-yyyy")},M=n=>{const c=r.value.indexOf(n);c===-1?r.value.push(n):r.value.splice(c,1)},b=(n,c)=>{c||(!L.token&&!localStorage.getItem("auth_token")?y.push({name:"login"}):window.open(n.link,"_blank"))},S=()=>{y.push({name:"Checkout",params:{id:m}})};return(n,c)=>{const j=T("RouterLink");return s(),t("div",H,[p.value?(s(),t("div",q,i(p.value),1)):k.value?(s(),t("div",I,O)):l.value?(s(),t("div",G,[e("div",J,[e("div",P,[l.value.price<=0?(s(),t("div",Q," Free ")):u("",!0),e("div",U,[e("img",{class:"w-full aspect-video object-cover",src:l.value.thumbnail,alt:""},null,8,W)]),e("div",X,[e("p",null,[v(" Fee: "),e("span",Y,i(l.value.price>0?`${l.value.price} TK`:"Free"),1)]),l.value.course_type==="Live Course"?(s(),t("p",Z,[v(" Start Date: "),e("span",ee,i(h(l.value.start_date)),1)])):(s(),t("p",se,[e("span",te,i(l.value.course_type),1)]))]),l.value.is_purchased?(s(),V(j,{key:1,to:{name:"My Course Details",params:{id:l.value.id}},class:"btn-2"},{default:$(()=>[v(" Start Learning ")]),_:1},8,["to"])):(s(),t("button",{key:2,class:"btn-2",onClick:S},"Enroll Now"))])]),e("div",ae,[e("div",null,[e("h1",le,i(l.value.title),1),ie]),e("div",{innerHTML:l.value.description,class:""},null,8,oe),ne,e("ul",ce,[(s(!0),t(f,null,g(l.value.modules,a=>(s(),t("li",{key:a.id,class:"card-bg p-4 relative"},[e("div",{onClick:o=>M(a.id),class:"flex flex-1 items-center gap-4 cursor-pointer"},[e("div",re,[e("div",{class:d(["text-xl font-bold text-orange-500",{"!text-gray-400":a.is_active==0}])},i(a.order),3),ue]),e("div",_e,[e("h4",{class:d(["title-md",{"text-gray-400":a.is_active==0}])},i(a.title),3),e("div",ve,[a.lectures.length>0?(s(),t("div",pe,[he,e("p",null,i(a.lectures.length)+" Lectures",1)])):u("",!0),a.exams.length>0?(s(),t("div",fe,[ge,e("p",null,i(a.exams.length)+" Exams",1)])):u("",!0)])]),e("button",null,[e("i",{class:d(r.value.includes(a.id)?"fas fa-angle-up":"fas fa-angle-down")},null,2)]),a.is_paid==0?(s(),t("div",ye," Free ")):u("",!0)],8,de),r.value.includes(a.id)?(s(),t("div",xe,[e("ul",me,[(s(!0),t(f,null,g(a.lectures,o=>(s(),t("li",{key:o.id},[e("a",{onClick:C(D=>b(o,a.is_paid),["prevent"]),class:d(["flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md cursor-pointer",{"pointer-events-none opacity-70":a.is_paid==1}])},[e("div",be,[e("i",{class:d(o.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),e("div",Ce,[o.type==="virtual_platform"?(s(),t("p",we,"Live")):(s(),t("p",Le,"Rec"))])]),e("div",null,[e("h4",Me,i(o.title),1),e("div",Se,[je,e("p",null,i(h(o.opening_time)),1)])])],10,ke)]))),128)),(s(!0),t(f,null,g(a.exams,o=>(s(),t("li",{key:o.id},[e("a",{class:d(["flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md cursor-pointer",{"pointer-events-none opacity-70":a.is_paid==1}]),onClick:C(D=>b(n.lecture,a.is_paid),["prevent"])},[Fe,e("div",Ee,[e("h4",Ne,i(o.title),1),e("div",Re,[e("div",Be,[Te,e("p",null,i(h(o.opening_time)),1)]),e("div",Ve,[$e,e("p",null,[ze,v(" "+i(o.duration),1)])])])])],10,De)]))),128))])])):u("",!0)]))),128))])])])):(s(),t("div",Ae,"Loading..."))])}}};export{Ie as default};
