import{e as n,f as i,g as t,I as o,F as r,h as c,q as d,t as u}from"./index-Bs9WCFvG.js";const m={class:"relative card-bg p-3"},g={class:"w-full justify-between items-center flex gap-2 md:gap-3"},p={class:"pt-1.5 pb-1"},x={class:"bg-gray-200 text-black px-2 pt-1.5 pb-1 rounded-md text-xs"},h=["innerHTML"],f={key:0,class:"grid gap-1 text-sm"},k={class:"flex gap-2 items-center"},v={class:"shrink-0 grow-0 w-4"},y={key:0,class:"fa fa-check-circle text-green-700"},q=["innerHTML"],w=["innerHTML"],L={__name:"QuestionCard",props:{question:Object,showExplanation:{type:Boolean,default:!0}},setup(e){return(l,s)=>(n(),i("div",m,[t("div",g,[o(l.$slots,"title",{},()=>[o(l.$slots,"id",{},()=>[t("div",p,"ID: "+u(e.question.id),1)]),o(l.$slots,"type",{},()=>[t("div",x,u(e.question.type),1)]),o(l.$slots,"mark")]),s[0]||(s[0]=t("div",{class:"grow-0 shrink-0 ml-auto"},null,-1)),o(l.$slots,"action")]),s[3]||(s[3]=t("hr",null,null,-1)),t("div",{class:"whitespace-pre-wrap leading-loose text-base text-black text-left",innerHTML:e.question.question_text},null,8,h),e.question.type==="MCQ"?(n(),i("div",f,[(n(!0),i(r,null,c(e.question.mcq_options,a=>(n(),i(r,{key:a.id},[s[1]||(s[1]=t("hr",{class:"mb-1"},null,-1)),t("div",k,[t("div",v,[a.is_correct?(n(),i("i",y)):d("",!0)]),t("div",{innerHTML:a.option_text},null,8,q)])],64))),128))])):d("",!0),e.showExplanation&&e.question.explanation?(n(),i(r,{key:1},[s[2]||(s[2]=t("hr",null,null,-1)),t("div",{class:"whitespace-pre-wrap leading-loose text-sm italic text-gray-500 text-left",innerHTML:e.question.explanation},null,8,w)],64)):d("",!0)]))}};export{L as _};
