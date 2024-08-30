import{k as E,u as N,l as R,b as B,c as T,r as _,o as V,m as $,e,f as t,t as o,g as s,p as u,q as v,j as z,s as H,F as f,h as g,v as P,n as d,x as w,y as q}from"./index-CuUZXj6-.js";const A={class:"my-container py-4"},I={key:0,class:"error"},K={key:1},O=q('<div class="grid md:grid-cols-3 gap-4"><div class="md:order-last md:col-span-1"><div class="card-bg p-4 animate-pulse"><div class="rounded overflow-hidden h-52 bg-gray-200"></div><div class="flex justify-between mt-4"><div class="h-6 w-20 bg-gray-200 rounded-full"></div><div class="h-6 w-20 bg-gray-200 rounded-full"></div></div><div class="h-10 mt-4 bg-gray-200 rounded-full"></div></div></div><div class="md:col-span-2 space-y-4"><div class="h-10 bg-gray-200 rounded-full"></div><div class="h-6 bg-gray-200 rounded-full"></div><div class="h-6 bg-gray-200 rounded-full"></div><div class="h-6 bg-gray-200 rounded-full"></div><div class="space-y-2"><div class="h-8 bg-gray-200 rounded-full"></div><div class="h-8 bg-gray-200 rounded-full"></div><div class="h-8 bg-gray-200 rounded-full"></div></div></div></div>',1),G=[O],J={key:2,class:"grid md:grid-cols-3 gap-4"},Q={class:"md:order-last md:col-span-1"},U={class:"sticky top-[86px]"},W={class:"card-bg p-4 relative"},X={key:0,class:"absolute top-3 -left-8 -rotate-45 bg-green-600 px-10 py-0.5 text-sm text-white font-medium"},Y={class:"rounded overflow-hidden"},Z=["src"],ss={class:"flex justify-between"},es={class:"font-bold text-sky-600"},ts={key:0},as={class:"font-bold text-sky-600"},ls={key:1,class:"bg-pink-50 px-3 rounded-full"},os={class:"font-bold text-pink-600"},is={class:"md:col-span-2"},ns={class:"md:title-lg font-bold"},cs=s("div",{class:"sticky w-full top-14 md:top-16 py-4 md:px-3 flex items-center gap-2 bg-gray-100 border-y z-40 -mb-28 mt-2"},[s("a",{href:"#modules",class:"btn-1"},"Modules"),s("a",{href:"#course-details",class:"btn-1"},"Course Details")],-1),ds=s("div",{id:"modules",class:"py-16"},null,-1),rs={class:"-mb-28 pt-2"},us=s("h2",{class:"title-lg py-1"},"Modules",-1),_s={class:"space-y-4 px-px"},vs=["onClick"],ps={class:"text-center border-2 rounded-md p-1.5"},hs=s("div",{class:"text-xs md:text-sm"},"Module",-1),fs={class:"flex-1"},gs={class:"flex gap-4"},ys={key:0,class:"flex items-center gap-2 text-gray-500"},xs=s("i",{class:"fas fa-video text-xs"},null,-1),ms={key:1,class:"flex items-center gap-2 text-gray-500"},bs=s("i",{class:"fas fa-file-alt text-xs"},null,-1),ks={key:0,class:"absolute top-3 -left-8 -rotate-45 bg-orange-100 px-10 text-sm text-orange-500 font-medium"},ws={key:0},Cs={class:"space-y-2"},Ms=["onClick"],Ls={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},Ss={class:"text-xs"},Ds={key:0},js={key:1},Fs={class:"title-sm"},Es={class:"flex items-center gap-2 text-sm text-gray-400"},Ns=s("i",{class:"far fa-calendar-check"},null,-1),Rs=["onClick"],Bs=s("div",{class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},[s("i",{class:"fas fa-file-alt"}),s("div",{class:"text-xs"},"Exam")],-1),Ts={class:"w-full"},Vs={class:"title-sm"},$s={class:"flex justify-between gap-2 text-sm text-gray-400"},zs={class:"flex items-center gap-2"},Hs=s("i",{class:"far fa-calendar-check"},null,-1),Ps={class:"flex items-center gap-2"},qs=s("i",{class:"far fa-clock"},null,-1),As=s("span",null,"Duration:",-1),Is=s("div",{id:"course-details",class:"py-16"},null,-1),Ks={class:"py-2 md:min-h-[540px]"},Os=s("h2",{class:"title-lg py-1"},"Course Details",-1),Gs=["innerHTML"],Js={key:3},Ws={__name:"CourseDetails",setup(Qs){const C=E(),y=N(),M=R(),L=B(),x=T(),m=L.params.id,r=_([]),l=_(null),p=_(null),b=_(!0);V(async()=>{try{await y.fetchCourse(m),l.value=y.course}catch(i){p.value=i}finally{b.value=!1}});const h=i=>{const c=new Date(i);return P(c,"dd-MMM-yyyy")},S=i=>{const c=r.value.indexOf(i);c===-1?r.value.push(i):r.value.splice(c,1)},k=(i,c)=>{c||(!C.token&&!localStorage.getItem("auth_token")?x.push({name:"login"}):i.type==="video"?M.showPlayer(i.link):window.open(i.link,"_blank"))},D=()=>{x.push({name:"Checkout",params:{id:m}})};return(i,c)=>{const j=$("RouterLink");return e(),t("div",A,[p.value?(e(),t("div",I,o(p.value),1)):b.value?(e(),t("div",K,G)):l.value?(e(),t("div",J,[s("div",Q,[s("div",U,[s("div",W,[l.value.price<=0?(e(),t("div",X," Free ")):u("",!0),s("div",Y,[s("img",{class:"w-full aspect-video object-cover",src:l.value.thumbnail,alt:""},null,8,Z)]),s("div",ss,[s("p",null,[v(" Fee: "),s("span",es,o(l.value.price>0?`${l.value.price} TK`:"Free"),1)]),l.value.course_type==="Live Course"?(e(),t("p",ts,[v(" Start Date: "),s("span",as,o(h(l.value.start_date)),1)])):(e(),t("p",ls,[s("span",os,o(l.value.course_type),1)]))]),l.value.is_purchased?(e(),z(j,{key:1,to:{name:"My Course Details",params:{id:l.value.id}},class:"btn-2"},{default:H(()=>[v(" Start Learning ")]),_:1},8,["to"])):(e(),t("button",{key:2,class:"btn-2",onClick:D},"Enroll Now"))])])]),s("div",is,[s("div",null,[s("h1",ns,o(l.value.title),1)]),cs,ds,s("div",rs,[us,s("ul",_s,[(e(!0),t(f,null,g(l.value.modules,a=>(e(),t("li",{key:a.id,class:"card-bg p-4 relative"},[s("div",{onClick:n=>S(a.id),class:"flex flex-1 items-center gap-4 cursor-pointer"},[s("div",ps,[s("div",{class:d(["text-xl font-bold text-orange-500",{"!text-gray-400":a.is_active==0}])},o(a.order),3),hs]),s("div",fs,[s("h4",{class:d(["title-md",{"text-gray-400":a.is_active==0}])},o(a.title),3),s("div",gs,[a.lectures.length>0?(e(),t("div",ys,[xs,s("p",null,o(a.lectures.length)+" Lectures",1)])):u("",!0),a.exams.length>0?(e(),t("div",ms,[bs,s("p",null,o(a.exams.length)+" Exams",1)])):u("",!0)])]),s("button",null,[s("i",{class:d(r.value.includes(a.id)?"fas fa-angle-up":"fas fa-angle-down")},null,2)]),a.is_paid==0?(e(),t("div",ks," Free ")):u("",!0)],8,vs),r.value.includes(a.id)?(e(),t("div",ws,[s("ul",Cs,[(e(!0),t(f,null,g(a.lectures,n=>(e(),t("li",{key:n.id},[s("a",{onClick:w(F=>k(n,a.is_paid),["prevent"]),class:d(["flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md cursor-pointer",{"pointer-events-none opacity-70":a.is_paid==1}])},[s("div",Ls,[s("i",{class:d(n.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),s("div",Ss,[n.type==="virtual_platform"?(e(),t("p",Ds,"Live")):(e(),t("p",js,"Rec"))])]),s("div",null,[s("h4",Fs,o(n.title),1),s("div",Es,[Ns,s("p",null,o(h(n.opening_time)),1)])])],10,Ms)]))),128)),(e(!0),t(f,null,g(a.exams,n=>(e(),t("li",{key:n.id},[s("a",{class:d(["flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md cursor-pointer",{"pointer-events-none opacity-70":a.is_paid==1}]),onClick:w(F=>k(i.lecture,a.is_paid),["prevent"])},[Bs,s("div",Ts,[s("h4",Vs,o(n.title),1),s("div",$s,[s("div",zs,[Hs,s("p",null,o(h(n.opening_time)),1)]),s("div",Ps,[qs,s("p",null,[As,v(" "+o(n.duration),1)])])])])],10,Rs)]))),128))])])):u("",!0)]))),128))])]),Is,s("div",Ks,[Os,s("div",{innerHTML:l.value.description,class:"bg-white p-4 rounded-lg border *:mb-2.5 text-justify text-sm md:text-base"},null,8,Gs)])])])):(e(),t("div",Js,"Loading..."))])}}};export{Ws as default};
