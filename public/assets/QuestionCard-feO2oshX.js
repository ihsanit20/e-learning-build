import{e as s,f as n,g as e,O as o,F as a,h as d,p as r,t as c}from"./index-4Z-6rGXL.js";const u={class:"relative card-bg p-3"},h={class:"w-full justify-between flex gap-4"},_={class:"bg-gray-200 text-black px-2 pt-[5px] rounded-md text-xs"},x=e("div",{class:"grow-0 shrink-0 ml-auto"},null,-1),g=e("hr",null,null,-1),m=["innerHTML"],p={key:0,class:"grid gap-1 text-sm"},f=e("hr",{class:"mb-1"},null,-1),k={class:"flex gap-2 items-center"},v={class:"shrink-0 grow-0 w-4"},y={key:0,class:"fa fa-check-circle text-green-700"},w=["innerHTML"],q=e("hr",null,null,-1),b=["innerHTML"],H={__name:"QuestionCard",props:{question:Object,showExplanation:{type:Boolean,default:!0}},setup(t){return(i,L)=>(s(),n("div",u,[e("div",h,[o(i.$slots,"title",{},()=>[o(i.$slots,"type",{},()=>[e("div",_,c(t.question.type),1)]),o(i.$slots,"mark"),o(i.$slots,"id",{},()=>[e("div",null,"ID: "+c(t.question.id),1)])]),x,o(i.$slots,"action")]),g,e("div",{class:"whitespace-pre-wrap leading-loose text-base text-black text-left",innerHTML:t.question.question_text},null,8,m),t.question.type==="MCQ"?(s(),n("div",p,[(s(!0),n(a,null,d(t.question.mcq_options,l=>(s(),n(a,{key:l.id},[f,e("div",k,[e("div",v,[l.is_correct?(s(),n("i",y)):r("",!0)]),e("div",{innerHTML:l.option_text},null,8,w)])],64))),128))])):r("",!0),t.showExplanation&&t.question.explanation?(s(),n(a,{key:1},[q,e("div",{class:"whitespace-pre-wrap leading-loose text-sm italic text-gray-500 text-left",innerHTML:t.question.explanation},null,8,b)],64)):r("",!0)]))}};export{H as _};