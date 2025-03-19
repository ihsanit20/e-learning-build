import{k as $,u as E,l as N,b as R,r as v,o as B,d as i,t as n,m as T,e as s,p as u,j as V,q as p,s as P,F as y,f as _,v as q,x as z,h as H,i as t,n as r,y as w}from"./index-9pqvHRLx.js";const A={class:"my-container py-4"},I={key:0,class:"error"},K={key:1},O={key:2,class:"grid md:grid-cols-3 gap-4"},G={class:"md:order-last md:col-span-1"},J={class:"sticky top-[86px]"},Q={class:"card-bg p-4 relative"},U={key:0,class:"absolute top-3 -left-8 -rotate-45 bg-green-600 px-10 py-0.5 text-sm text-white font-medium"},W={class:"rounded overflow-hidden"},X=["src"],Y={class:"flex justify-between"},Z={class:"font-bold text-sky-600"},ss={key:0},es={class:"font-bold text-sky-600"},ts={key:1,class:"bg-pink-50 px-3 rounded-full"},ls={class:"font-bold text-pink-600"},is={class:"md:col-span-2"},os={class:"md:title-lg font-bold"},as={class:"-mb-28 pt-2"},ns={class:"space-y-4 px-px"},ds=["onClick"],rs={class:"text-center border-2 rounded-md p-1.5"},cs={class:"flex-1"},us={class:"flex gap-4"},vs={key:0,class:"flex items-center gap-2 text-gray-500"},ps={key:1,class:"flex items-center gap-2 text-gray-500"},fs={key:0,class:"absolute top-3 -left-8 -rotate-45 bg-orange-100 px-10 text-sm text-orange-500 font-medium"},gs={key:0},ys={class:"space-y-2"},_s=["onClick"],ms={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},xs={class:"text-xs"},hs={key:0},bs={key:1},ks={class:"title-sm"},Cs={class:"flex items-center gap-2 text-sm text-gray-400"},ws=["onClick"],Ms={class:"w-full"},Ls={class:"title-sm"},Ss={class:"flex justify-between gap-2 text-sm text-gray-400"},Ds={class:"flex items-center gap-2"},js={class:"flex items-center gap-2"},Fs={class:"py-2 md:min-h-[540px]"},$s=["innerHTML"],Es={key:3},Bs={__name:"CourseDetails",setup(Ns){const M=$(),m=E(),L=N(),S=R(),x=H(),h=S.params.id,c=v([]),o=v(null),f=v(null),b=v(!0);B(async()=>{try{await m.fetchCourse(h),o.value=m.course}catch(a){f.value=a}finally{b.value=!1}});const g=a=>{const e=new Date(a);return q(e,"dd-MMM-yyyy")},D=a=>{const e=c.value.indexOf(a);e===-1?c.value.push(a):c.value.splice(e,1)},k=(a,e)=>{e||(!M.token&&!localStorage.getItem("auth_token")?x.push({name:"login"}):a.type==="video"?L.showPlayer(a.link):window.open(a.link,"_blank"))},C=(a="me")=>{x.push({name:"Checkout",params:{id:h},query:{for:a}})};return(a,e)=>{const j=z("RouterLink");return t(),i("div",A,[f.value?(t(),i("div",I,n(f.value),1)):b.value?(t(),i("div",K,e[2]||(e[2]=[T('<div class="grid md:grid-cols-3 gap-4"><div class="md:order-last md:col-span-1"><div class="card-bg p-4 animate-pulse"><div class="rounded overflow-hidden h-52 bg-gray-200"></div><div class="flex justify-between mt-4"><div class="h-6 w-20 bg-gray-200 rounded-full"></div><div class="h-6 w-20 bg-gray-200 rounded-full"></div></div><div class="h-10 mt-4 bg-gray-200 rounded-full"></div></div></div><div class="md:col-span-2 space-y-4"><div class="h-10 bg-gray-200 rounded-full"></div><div class="h-6 bg-gray-200 rounded-full"></div><div class="h-6 bg-gray-200 rounded-full"></div><div class="h-6 bg-gray-200 rounded-full"></div><div class="space-y-2"><div class="h-8 bg-gray-200 rounded-full"></div><div class="h-8 bg-gray-200 rounded-full"></div><div class="h-8 bg-gray-200 rounded-full"></div></div></div></div>',1)]))):o.value?(t(),i("div",O,[s("div",G,[s("div",J,[s("div",Q,[o.value.price<=0?(t(),i("div",U," Free ")):u("",!0),s("div",W,[s("img",{class:"w-full aspect-video object-cover",src:o.value.thumbnail,alt:""},null,8,X)]),s("div",Y,[s("p",null,[e[3]||(e[3]=p(" Fee: ")),s("span",Z,n(o.value.price>0?`${o.value.price} TK`:"Free"),1)]),o.value.course_type==="Live Course"?(t(),i("p",ss,[e[4]||(e[4]=p(" Start Date: ")),s("span",es,n(g(o.value.start_date)),1)])):(t(),i("p",ts,[s("span",ls,n(o.value.course_type),1)]))]),o.value.is_purchased?(t(),V(j,{key:1,to:{name:"My Course Details",params:{id:o.value.id}},class:"btn-2"},{default:P(()=>e[5]||(e[5]=[p(" Start Learning ")])),_:1},8,["to"])):(t(),i("button",{key:2,class:"btn-2",onClick:e[0]||(e[0]=l=>C("me"))},"Enroll Now")),s("button",{class:"btn-link mt-2 mx-auto",onClick:e[1]||(e[1]=l=>C("someone"))}," Purchase for someone else ")])])]),s("div",is,[s("div",null,[s("h1",os,n(o.value.title),1)]),e[16]||(e[16]=s("div",{class:"sticky w-full top-14 md:top-16 py-4 md:px-3 flex items-center gap-2 bg-gray-100 border-y z-40 -mb-28 mt-2"},[s("a",{href:"#modules",class:"btn-1"},"Modules"),s("a",{href:"#course-details",class:"btn-1"},"Course Details")],-1)),e[17]||(e[17]=s("div",{id:"modules",class:"py-16"},null,-1)),s("div",as,[e[14]||(e[14]=s("h2",{class:"title-lg py-1"},"Modules",-1)),s("ul",ns,[(t(!0),i(y,null,_(o.value.modules,l=>(t(),i("li",{key:l.id,class:"card-bg p-4 relative"},[s("div",{onClick:d=>D(l.id),class:"flex flex-1 items-center gap-4 cursor-pointer"},[s("div",rs,[s("div",{class:r(["text-xl font-bold text-orange-500",{"!text-gray-400":l.is_active==0}])},n(l.order),3),e[6]||(e[6]=s("div",{class:"text-xs md:text-sm"},"Module",-1))]),s("div",cs,[s("h4",{class:r(["title-md",{"text-gray-400":l.is_active==0}])},n(l.title),3),s("div",us,[l.lectures.length>0?(t(),i("div",vs,[e[7]||(e[7]=s("i",{class:"fas fa-video text-xs"},null,-1)),s("p",null,n(l.lectures.length)+" Lectures",1)])):u("",!0),l.exams.length>0?(t(),i("div",ps,[e[8]||(e[8]=s("i",{class:"fas fa-file-alt text-xs"},null,-1)),s("p",null,n(l.exams.length)+" Exams",1)])):u("",!0)])]),s("button",null,[s("i",{class:r(c.value.includes(l.id)?"fas fa-angle-up":"fas fa-angle-down")},null,2)]),l.is_paid==0?(t(),i("div",fs," Free ")):u("",!0)],8,ds),c.value.includes(l.id)?(t(),i("div",gs,[s("ul",ys,[(t(!0),i(y,null,_(l.lectures,d=>(t(),i("li",{key:d.id},[s("a",{onClick:w(F=>k(d,l.is_paid),["prevent"]),class:r(["flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md cursor-pointer",{"pointer-events-none opacity-70":l.is_paid==1}])},[s("div",ms,[s("i",{class:r(d.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),s("div",xs,[d.type==="virtual_platform"?(t(),i("p",hs,"Live")):(t(),i("p",bs,"Rec"))])]),s("div",null,[s("h4",ks,n(d.title),1),s("div",Cs,[e[9]||(e[9]=s("i",{class:"far fa-calendar-check"},null,-1)),s("p",null,n(g(d.opening_time)),1)])])],10,_s)]))),128)),(t(!0),i(y,null,_(l.exams,d=>(t(),i("li",{key:d.id},[s("a",{class:r(["flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md cursor-pointer",{"pointer-events-none opacity-70":l.is_paid==1}]),onClick:w(F=>k(a.lecture,l.is_paid),["prevent"])},[e[13]||(e[13]=s("div",{class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},[s("i",{class:"fas fa-file-alt"}),s("div",{class:"text-xs"},"Exam")],-1)),s("div",Ms,[s("h4",Ls,n(d.title),1),s("div",Ss,[s("div",Ds,[e[10]||(e[10]=s("i",{class:"far fa-calendar-check"},null,-1)),s("p",null,n(g(d.opening_time)),1)]),s("div",js,[e[12]||(e[12]=s("i",{class:"far fa-clock"},null,-1)),s("p",null,[e[11]||(e[11]=s("span",null,"Duration:",-1)),p(" "+n(d.duration),1)])])])])],10,ws)]))),128))])])):u("",!0)]))),128))])]),e[18]||(e[18]=s("div",{id:"course-details",class:"py-16"},null,-1)),s("div",Fs,[e[15]||(e[15]=s("h2",{class:"title-lg py-1"},"Course Details",-1)),s("div",{innerHTML:o.value.description,class:"bg-white p-4 rounded-lg border *:mb-2.5 text-justify text-sm md:text-base"},null,8,$s)])])])):(t(),i("div",Es,"Loading..."))])}}};export{Bs as default};
