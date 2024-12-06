import{e as s,f as n,g as e,Z as o,F as a,h as d,p as c,t as r}from"./index-CXrK0xpE.js";const u={class:"relative card-bg p-3"},h={class:"w-full justify-between items-center flex gap-2 md:gap-3"},_={class:"pt-1.5 pb-1"},m={class:"bg-gray-200 text-black px-2 pt-1.5 pb-1 rounded-md text-xs"},p=e("div",{class:"grow-0 shrink-0 ml-auto"},null,-1),g=e("hr",null,null,-1),x=["innerHTML"],f={key:0,class:"grid gap-1 text-sm"},k=e("hr",{class:"mb-1"},null,-1),v={class:"flex gap-2 items-center"},y={class:"shrink-0 grow-0 w-4"},w={key:0,class:"fa fa-check-circle text-green-700"},b=["innerHTML"],q=e("hr",null,null,-1),L=["innerHTML"],T={__name:"QuestionCard",props:{question:Object,showExplanation:{type:Boolean,default:!0}},setup(t){return(i,M)=>(s(),n("div",u,[e("div",h,[o(i.$slots,"title",{},()=>[o(i.$slots,"id",{},()=>[e("div",_,"ID: "+r(t.question.id),1)]),o(i.$slots,"type",{},()=>[e("div",m,r(t.question.type),1)]),o(i.$slots,"mark")]),p,o(i.$slots,"action")]),g,e("div",{class:"whitespace-pre-wrap leading-loose text-base text-black text-left",innerHTML:t.question.question_text},null,8,x),t.question.type==="MCQ"?(s(),n("div",f,[(s(!0),n(a,null,d(t.question.mcq_options,l=>(s(),n(a,{key:l.id},[k,e("div",v,[e("div",y,[l.is_correct?(s(),n("i",w)):c("",!0)]),e("div",{innerHTML:l.option_text},null,8,b)])],64))),128))])):c("",!0),t.showExplanation&&t.question.explanation?(s(),n(a,{key:1},[q,e("div",{class:"whitespace-pre-wrap leading-loose text-sm italic text-gray-500 text-left",innerHTML:t.question.explanation},null,8,L)],64)):c("",!0)]))}};export{T as _};
