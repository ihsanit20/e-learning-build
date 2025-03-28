import{r as _,b as U,M as z,o as C,h as H,c as k,d as a,g as b,e,F as h,t as x,q as R,L as B,f as M,z as y,G as $,n as j,y as A,i as o,A as D}from"./index-DrPNioED.js";import{u as F}from"./course-exam-BOQqIng0.js";const N={class:"my-container"},P={key:0,class:"card-bg p-4 md:p-8"},Q={class:"shrink-0 grow-0 card-bg p-4 sticky top-0"},G={class:"flex justify-between items-center gap-2"},W={class:"line-clamp-1"},J={class:"grow-0 shrink-0 border px-3 pt-2 pb-1 rounded-lg"},K={class:"relative w-full h-2 bg-gray-300 rounded mt-1"},O={class:"shrink grow mt-6 space-y-4 overflow-hidden overflow-y-auto scrollbar"},X={class:"mb-2"},Y={class:"font-semibold"},Z=["innerHTML"],q={key:0,class:"space-y-2"},ee=["name","id","value","onUpdate:modelValue"],se=["for","innerHTML"],te={key:1},ae=["onUpdate:modelValue"],oe={class:"flex items-center gap-1 md:gap-2"},ie={__name:"MyExamParticipation",setup(re){const S=U(),g=H(),p=F(),v=_(!1),{courseId:l,examId:f}=S.params,{exam:i,loading:T}=z(p),n=_(0),d=_(0);let u=null;C(async()=>{if((await p.fetchExam(l,f)).has_user_exam)return g.replace({path:`/my/course/${l}/exam/${f}/answer-sheet`});i.value.duration&&(d.value=i.value.duration*60,n.value=d.value,L())});function L(){u=setInterval(()=>{n.value>0?n.value-=1:(clearInterval(u),w())},1e3)}const V=k(()=>{const c=Math.floor(n.value/60),s=Math.floor(c/60),t=c%60,m=n.value%60;return`${s?`${s}:`:""}${String(t).padStart(2,"0")}:${String(m).padStart(2,"0")}`}),E=k(()=>(d.value-n.value)/d.value*100),w=async()=>(await p.submitExam(l,f),u&&clearInterval(u),g.replace({path:`/my/course/${l}`}));return(c,s)=>(o(),a("div",N,[b(T)?(o(),a("div",P,s[1]||(s[1]=[e("p",null,"Loading...",-1)]))):(o(),a(h,{key:1},[e("div",Q,[e("div",G,[e("h3",W,x(b(i).title),1),e("p",J,[s[2]||(s[2]=e("span",{class:"hidden md:inline"},"Remaining:",-1)),s[3]||(s[3]=R()),e("b",null,x(V.value),1)])]),e("div",K,[e("div",{class:"absolute left-0 top-0 h-full bg-blue-500 rounded",style:B({width:`${E.value}%`})},null,4)])]),e("div",O,[(o(!0),a(h,null,M(b(i).questions,(t,m)=>(o(),a("div",{key:t.id,class:"card-bg p-4"},[e("div",X,[e("h4",Y,"Question "+x(m+1)+":",1),e("div",{innerHTML:t.question_text},null,8,Z)]),t.type==="MCQ"?(o(),a("div",q,[(o(!0),a(h,null,M(t.mcq_options,r=>(o(),a("div",{key:r.id,class:"flex items-center cursor-pointer border px-3 py-4 rounded-lg"},[y(e("input",{type:"checkbox",name:"question-"+m,id:`question:${t.id}-option:${r.id}`,value:r.id,class:"mr-2 size-4 cursor-pointer","onUpdate:modelValue":I=>t.user_answers=I},null,8,ee),[[$,t.user_answers]]),e("label",{class:"cursor-pointer",for:`question:${t.id}-option:${r.id}`,innerHTML:r.option_text},null,8,se)]))),128))])):(o(),a("div",te,[y(e("textarea",{class:"w-full p-2 border rounded-md",rows:"4",placeholder:"Write your answer here...","onUpdate:modelValue":r=>t.user_answers[0]=r},null,8,ae),[[D,t.user_answers[0]]])]))]))),128))]),s[5]||(s[5]=e("hr",{class:"my-5"},null,-1)),e("form",{onSubmit:A(w,["prevent"]),class:"grow-0 shrink-0 w-full flex justify-end gap-1 md:gap-4"},[e("label",oe,[y(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>v.value=t),type:"checkbox",required:""},null,512),[[$,v.value]]),s[4]||(s[4]=e("span",{class:"pt-1 text-xs md:text-base"},"I want to submit",-1))]),e("button",{type:"submit",class:j(["btn-2 disabled:opacity-50 px-1 md:px-4 text-xs md:text-base",{"opacity-50":!v.value}])}," Submit Answer ",2)],32),s[6]||(s[6]=e("br",null,null,-1))],64))]))}};export{ie as default};
