import{G as N,H as S,b as V,k as D,l as F,u as H,r as m,o as R,c as k,d as o,e as l,t as i,f as e,I as U,F as M,g as $,q as I,n as y,m as q}from"./index-C9dQhS5a.js";const G=N("courseProgress",{state:()=>({userId:null}),actions:{async completeLecture(u,_,a){try{return(await S.post(`/lectures/${_}/complete`,{course_id:u,is_completed:a})).data}catch(p){throw console.error("Error completing lecture:",p),p}},async getLectureCompletionStatus(u,_){try{return(await S.get(`/users/${u}/lectures/${_}/completion`)).data.is_completed}catch(a){throw console.error("Error fetching lecture completion status:",a),a}},setUserId(u){this.userId=u}}}),O={class:"my-container py-4"},Y={key:0,class:"error"},J={key:1,class:"grid md:grid-cols-3 gap-4"},K={class:"md:col-span-2 space-y-4"},Q={class:"title-xl"},T=e("hr",{class:"my-2"},null,-1),W={class:"relative pt-1"},X={class:"flex mb-2 items-center justify-between"},Z=e("div",null,[e("span",null,"Course Progress")],-1),ee={class:"text-right"},te={class:"text-xs font-semibold inline-block text-sky-600"},se={class:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-200"},oe=e("h2",{class:"title-lg"},"Modules",-1),le={class:"space-y-4"},ce=["onClick"],re={class:"text-center border-2 rounded-md p-1.5"},ne=e("div",{class:"text-xs md:text-sm"},"Module",-1),ie={class:"flex-1"},ae={class:"line-clamp-1"},de={key:0},ue={class:""},_e=["onClick"],pe={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},he={class:"text-xs"},ve={key:0},me={key:1},fe={class:"flex-1"},xe={class:"text-gray-500 text-xs line-clamp-1"},ye={class:"flex items-center text-sm pt-2"},ge=["id","checked","onChange","disabled"],ke=["for"],be={key:2},we={key:3,class:"fixed inset-0 flex items-center justify-center z-50"},Ce=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75"},null,-1),Le={class:"card-bg items-center justify-center p-6 md:p-8 overflow-hidden transform transition-all sm:max-w-lg sm:w-full text-center mx-2"},Se=e("h3",{class:"title-lg",id:"modal-title"}," Confirm Lecture Completion ",-1),Me={class:""},$e={class:"text-red-500"},Ie={class:"flex gap-4"},Pe={__name:"MyCourseDetails",setup(u){const _=V(),a=D(),p=F(),b=H(),f=G(),w=_.params.id,n=m(null),g=m(null),h=m([]),x=m(!1),v=m(null);R(async()=>{try{await b.fetchPurchasedCourse(w),n.value=b.course;const t=p.user.id;f.userId||f.setUserId(t);for(const c of n.value.modules)for(const d of c.lectures)d.is_completed=await f.getLectureCompletionStatus(t,d.id)}catch(t){g.value=t.message||"An error occurred",t.response&&t.response.status===403&&a.push("/")}});const j=t=>{const c=h.value.indexOf(t);c===-1?h.value.push(t):h.value.splice(c,1)},P=t=>{window.open(t.link,"_blank")},E=async()=>{if(v.value)try{await f.completeLecture(w,v.value.id,!0),v.value.is_completed=!0,x.value=!1}catch(t){console.error("Error confirming lecture completion:",t)}},z=t=>{v.value=t,x.value=!0},C=k(()=>n.value?n.value.modules.reduce((t,c)=>t+c.lectures.length,0):0),A=k(()=>n.value?n.value.modules.reduce((t,c)=>t+c.lectures.filter(d=>d.is_completed).length,0):0),L=k(()=>C.value?A.value/C.value*100:0);return(t,c)=>{var d;return o(),l("div",O,[g.value?(o(),l("div",Y,i(g.value),1)):n.value?(o(),l("div",J,[e("div",K,[e("div",null,[e("h1",Q,i(n.value.title),1),T]),e("div",null,[e("div",W,[e("div",X,[Z,e("div",ee,[e("span",te,i(Math.round(L.value))+"% ",1)])]),e("div",se,[e("div",{style:U({width:L.value+"%"}),class:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-600"},null,4)])])]),oe,e("ul",le,[(o(!0),l(M,null,$(n.value.modules,r=>(o(),l("li",{class:"card-bg p-4",key:r.id},[e("div",{onClick:s=>j(r.id),class:"flex flex-1 items-center gap-4 cursor-pointer"},[e("div",re,[e("div",{class:y(["text-xl font-bold text-orange-500",{"!text-gray-400":r.is_active==0}])},i(r.order),3),ne]),e("div",ie,[e("h4",{class:y(["title-md",{"text-gray-400":r.is_active==0}])},i(r.title),3),e("p",ae,i(r.description),1)]),e("button",null,[e("i",{class:y(h.value.includes(r.id)?"fas fa-angle-up":"fas fa-angle-down")},null,2)])],8,ce),h.value.includes(r.id)?(o(),l("div",de,[e("ul",ue,[(o(!0),l(M,null,$(r.lectures,s=>(o(),l("li",{class:"pt-2",key:s.id},[e("a",{onClick:q(B=>P(s),["prevent"]),class:"flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md cursor-pointer"},[e("div",pe,[e("i",{class:y(s.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),e("div",he,[s.type==="virtual_platform"?(o(),l("p",ve,"Video")):(o(),l("p",me,"Lecture"))])]),e("div",fe,[e("h4",null,i(s.title),1),e("p",xe,i(s.description),1)])],8,_e),e("div",ye,[e("input",{type:"checkbox",id:`completed-${s.id}`,class:"form-checkbox h-3 w-3 text-sky-600 transition duration-150 ease-in-out",checked:s.is_completed,onChange:B=>z(s),disabled:s.is_completed},null,40,ge),e("label",{for:`completed-${s.id}`,class:"ml-2"},"Have you completed this lecture?",8,ke)])]))),128))])])):I("",!0)]))),128))])])])):(o(),l("div",be,"Loading...")),x.value?(o(),l("div",we,[Ce,e("div",Le,[Se,e("div",Me,[e("p",$e,' Are you sure you have completed the lecture "'+i((d=v.value)==null?void 0:d.title)+'"? ',1)]),e("div",Ie,[e("button",{onClick:E,type:"button",class:"btn-2"},"Yes"),e("button",{onClick:c[0]||(c[0]=r=>x.value=!1),type:"button",class:"btn-3"},"No")])])])):I("",!0)])}}};export{Pe as default};
