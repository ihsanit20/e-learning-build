import{d as n,i,e as t,p as r,I as o,t as u,F as d,f as c}from"./index-9pqvHRLx.js";const m={class:"relative card-bg p-3"},p={class:"w-full justify-between items-center flex gap-2 md:gap-3"},x={class:"pt-1.5 pb-1"},g={class:"bg-gray-200 text-black px-2 pt-1.5 pb-1 rounded-md text-xs"},h=["innerHTML"],f={key:0,class:"grid gap-1 text-sm"},k={class:"flex gap-2 items-center"},v={class:"shrink-0 grow-0 w-4"},y={key:0,class:"fa fa-check-circle text-green-700"},w=["innerHTML"],b=["innerHTML"],L={__name:"QuestionCard",props:{question:Object,showExplanation:{type:Boolean,default:!0}},setup(e){return(l,s)=>(i(),n("div",m,[t("div",p,[o(l.$slots,"title",{},()=>[o(l.$slots,"id",{},()=>[t("div",x,"ID: "+u(e.question.id),1)]),o(l.$slots,"type",{},()=>[t("div",g,u(e.question.type),1)]),o(l.$slots,"mark")]),s[0]||(s[0]=t("div",{class:"grow-0 shrink-0 ml-auto"},null,-1)),o(l.$slots,"action")]),s[3]||(s[3]=t("hr",null,null,-1)),t("div",{class:"whitespace-pre-wrap leading-loose text-base text-black text-left",innerHTML:e.question.question_text},null,8,h),e.question.type==="MCQ"?(i(),n("div",f,[(i(!0),n(d,null,c(e.question.mcq_options,a=>(i(),n(d,{key:a.id},[s[1]||(s[1]=t("hr",{class:"mb-1"},null,-1)),t("div",k,[t("div",v,[a.is_correct?(i(),n("i",y)):r("",!0)]),t("div",{innerHTML:a.option_text},null,8,w)])],64))),128))])):r("",!0),e.showExplanation&&e.question.explanation?(i(),n(d,{key:1},[s[2]||(s[2]=t("hr",null,null,-1)),t("div",{class:"whitespace-pre-wrap leading-loose text-sm italic text-gray-500 text-left",innerHTML:e.question.explanation},null,8,b)],64)):r("",!0)]))}};export{L as _};
