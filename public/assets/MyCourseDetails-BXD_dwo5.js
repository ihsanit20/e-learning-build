import{d as n,i as a,e,t as i,r as _,I as L,j,p as b,o as U,q as I,J as K,K as D,u as Y,l as W,b as X,h as Z,L as ee,F as E,f as V,y as C,z as te,G as se,n as M,s as S,B as P,g as R,R as le}from"./index-9pqvHRLx.js";import{_ as T}from"./TimeCountdown-CmT30hGb.js";import{u as oe}from"./course-exam-D69EDfa3.js";const ae={class:"table table-auto text-sm"},ne={class:"text-center px-3 py-1.5"},ie={class:"text-center px-3 py-1.5"},re={class:"text-center px-3 py-1.5"},de={class:"text-center px-3 py-1.5"},ce={class:"text-red-500"},ue={class:"text-center px-3 py-1.5"},me={class:"border-t font-bold"},xe={class:"text-center px-3 py-1.5"},pe={__name:"McqResult",props:{selectedExam:Object},setup(l){return(d,s)=>{var o,p,w,x,m,f,v,y,h,$,k,g;return a(),n("table",ae,[e("tr",null,[s[0]||(s[0]=e("td",{class:"text-right px-3 py-1.5"},"Total Question",-1)),e("td",ne,i((o=l.selectedExam)==null?void 0:o.exam_questions_count),1)]),e("tr",null,[s[1]||(s[1]=e("td",{class:"text-right px-3 py-1.5"},"Answered Question",-1)),e("td",ie,i((w=(p=l.selectedExam)==null?void 0:p.user_exam)==null?void 0:w.user_mcq_answers_count),1)]),e("tr",null,[s[2]||(s[2]=e("td",{class:"text-right px-3 py-1.5"},"Unanswered Question",-1)),e("td",re,i(((x=l.selectedExam)==null?void 0:x.exam_questions_count)-((f=(m=l.selectedExam)==null?void 0:m.user_exam)==null?void 0:f.user_mcq_answers_count)),1)]),e("tr",null,[s[3]||(s[3]=e("td",{class:"text-right px-3 py-1.5"},"Correct Mark",-1)),e("td",de,i((y=(v=l.selectedExam)==null?void 0:v.user_exam)==null?void 0:y.mcq_correct_mark),1)]),e("tr",ce,[s[4]||(s[4]=e("td",{class:"text-right px-3 py-1.5"},"Negative Mark",-1)),e("td",ue,i(($=(h=l.selectedExam)==null?void 0:h.user_exam)==null?void 0:$.mcq_negative_mark),1)]),e("tr",me,[s[5]||(s[5]=e("td",{class:"text-right px-3 py-1.5"},"Obtained Mark",-1)),e("td",xe,i((g=(k=l.selectedExam)==null?void 0:k.user_exam)==null?void 0:g.obtained_mark),1)])])}}},fe={class:"modal"},ve={class:"modal-content !px-3 !py-4 !max-w-sm"},_e={class:"w-full h-full flex flex-col justify-between items-center space-y-3 overflow-hidden"},ye={class:"w-full flex justify-between items-center"},he={class:"title-lg text-center"},ge={class:"size-full grow shrink border-t py-4 overflow-y-auto scrollbar flex flex-col gap-4 justify-center items-center"},be={class:"w-full flex justify-between items-center"},ke={__name:"ExamResultModal",props:{selectedExam:Object},setup(l){const d=_(!1);return(s,o)=>(a(),n("div",fe,[e("div",ve,[e("div",_e,[e("div",ye,[e("h3",he,"Result of "+i(l.selectedExam.title),1),L(s.$slots,"default")]),e("div",ge,[l.selectedExam?(a(),j(pe,{key:0,selectedExam:l.selectedExam},null,8,["selectedExam"])):b("",!0),o[1]||(o[1]=e("hr",{class:"w-full"},null,-1)),e("div",be,[d.value?L(s.$slots,"answerSheet",{key:0}):(a(),j(T,{key:1,modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=p=>d.value=p),targetTime:l.selectedExam.result_publish_time,label:"Results are not yet published",class:"mx-auto items-center"},null,8,["modelValue","targetTime"]))])])])])]))}},we={key:0,class:"grow-0 shrink-0 border px-2 pt-1.5 pb-0.5 rounded-lg bg-blue-300/30 text-blue-600"},$e={__name:"MeritPosition",props:{courseId:String,examId:[String,Number]},setup(l){const d=l,s=_(null),o=oe();U(async()=>{d.courseId&&d.examId&&(s.value=await o.fetchExam(d.courseId,d.examId))});const p=x=>{const m=["th","st","nd","rd"],f=x%100;return x+(m[(f-20)%10]||m[f]||m[0])},w=x=>{var m,f;if((f=(m=s.value)==null?void 0:m.user_exam)!=null&&f.is_practice){const v=Math.floor(x/10)*10+1,y=v+9;return`${p(v)} - ${p(y)}`}return p(x)};return(x,m)=>{var f,v,y,h;return(f=s.value)!=null&&f.user_exam?(a(),n("div",we,[I(i((v=s.value.user_exam)!=null&&v.is_practice?"Position: ":"Merit Position: ")+" ",1),e("b",null,i(w((h=(y=s.value)==null?void 0:y.user_exam)==null?void 0:h.position)),1)])):b("",!0)}}},Ee={class:"flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md"},Ce={class:"w-full"},Me={class:"title-sm"},Se={key:0,class:"fas fa-check-circle text-green-700"},je={class:"flex justify-between gap-2 text-sm text-gray-400"},Ie={class:"flex items-center gap-2"},Ve={__name:"ModuleItemExam",props:{exam:Object},setup(l){const d=_(!1);return(s,o)=>(a(),n("div",Ee,[o[3]||(o[3]=e("div",{class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},[e("i",{class:"fas fa-file-alt"}),e("div",{class:"text-xs"},"Exam")],-1)),e("div",Ce,[e("h4",Me,[l.exam.is_completed?(a(),n("i",Se)):b("",!0),I(" "+i(l.exam.title),1)]),e("div",je,[e("div",Ie,[o[2]||(o[2]=e("i",{class:"far fa-clock"},null,-1)),e("p",null,[o[1]||(o[1]=e("span",null,"Duration:",-1)),I(" "+i(l.exam.duration),1)])])])]),d.value||l.exam.is_completed?L(s.$slots,"default",{key:0}):(a(),j(T,{key:1,modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=p=>d.value=p),targetTime:l.exam.opening_time},null,8,["modelValue","targetTime"]))]))}},Pe={class:"flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md"},Le={class:"w-full"},qe={class:"title-sm"},Oe={class:"flex justify-between gap-2 text-sm text-gray-400"},Re={class:"flex items-center gap-2"},Te={__name:"ModuleItemMaterial",props:{material:Object},setup(l){const d=_(!1);return(s,o)=>(a(),n("div",Pe,[o[1]||(o[1]=e("div",{class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},[e("i",{class:"fas fa-download"}),e("div",{class:"text-xs"},"Material")],-1)),e("div",Le,[e("h4",qe,i(l.material.title),1),e("div",Oe,[e("div",Re,[e("p",null,i(l.material.description),1)])])]),d.value?L(s.$slots,"default",{key:0}):(a(),j(T,{key:1,modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=p=>d.value=p),targetTime:l.material.opening_time},null,8,["modelValue","targetTime"]))]))}},ze=K("courseProgress",{state:()=>({userId:null}),actions:{async completeLecture(l,d,s){try{return(await D.post(`/lectures/${d}/complete`,{course_id:l,is_completed:s})).data}catch(o){throw console.error("Error completing lecture:",o),o}},async getLectureCompletionStatus(l,d){try{return(await D.get(`/users/${l}/lectures/${d}/completion`)).data.is_completed}catch(s){throw console.error("Error fetching lecture completion status:",s),s}},setUserId(l){this.userId=l}}}),Ne={class:"my-container py-4"},Ae={key:0,class:"error"},De={key:1,class:"grid md:grid-cols-3 gap-4"},Ue={class:"md:col-span-2 space-y-4"},Be={class:"title-xl"},Qe={class:"relative pt-1"},Fe={class:"flex mb-2 items-center justify-between"},Je={class:"text-right"},Ge={class:"text-xs font-semibold inline-block text-sky-600"},He={class:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-200"},Ke={class:"space-y-4"},Ye=["onClick"],We={class:"text-center border-2 rounded-md p-1.5"},Xe={class:"flex-1"},Ze={class:"line-clamp-1"},et={key:0},tt={class:""},st={class:"flex items-center gap-4 bg-gray-100 hover:bg-sky-100 p-2 rounded-md"},lt={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},ot={class:"text-xs"},at={key:0},nt={key:1},it={class:"flex-1"},rt={key:0,class:"fas fa-check-circle text-green-700"},dt={class:"text-gray-500 text-xs line-clamp-1"},ct=["onClick"],ut={class:"flex items-center text-sm pt-2"},mt=["id","checked","onChange","disabled"],xt=["for"],pt=["href"],ft=["onClick"],vt={key:2},_t={key:3,class:"fixed inset-0 flex items-center justify-center z-50"},yt={class:"card-bg items-center justify-center p-6 md:p-8 overflow-hidden transform transition-all sm:max-w-lg sm:w-full text-center mx-2"},ht={class:""},gt={class:"text-red-500"},bt={class:"flex gap-4"},kt={class:"modal-content !px-3 !py-4 !max-w-xl"},wt={class:"w-full h-full flex flex-col justify-between items-center space-y-3 overflow-hidden"},$t={class:"size-full grow shrink border-y py-4 overflow-y-auto scrollbar"},Et={class:"w-full list-[square] space-y-3 list-outside pl-5"},Ct={class:"flex items-center gap-1 md:gap-2"},Mt={class:"w-full flex justify-between gap-2"},Vt={__name:"MyCourseDetails",setup(l){const d=X(),s=Z(),o=Y(),p=ze(),w=W(),x=d.params.id,m=_(null),f=_(null),v=_([]),y=_(!1),h=_(!1),$=_(!1),k=_(null),g=_(null),q=_(!1),O=async()=>{await o.fetchPurchasedCourse(x),m.value=o.course};U(async()=>{try{await O()}catch(c){f.value=c.message||"An error occurred",c.response&&c.response.status===403&&s.push("/")}});const B=c=>{const t=v.value.indexOf(c);t===-1?v.value.push(c):v.value.splice(t,1)},Q=c=>{c.type==="video"?(w.endedCallback=async()=>{const t=await p.completeLecture(x,c.id,!0);c.is_completed=t.is_completed,await O()},w.showPlayer(c.link)):window.open(c.link,"_blank")},F=c=>(g.value=c,c.is_completed?$.value=!0:h.value=!0),J=async()=>{if(k.value)try{await p.completeLecture(x,k.value.id,!0),k.value.is_completed=!0,y.value=!1,await O()}catch(c){console.error("Error confirming lecture completion:",c)}},G=c=>{k.value=c,y.value=!0},H=async()=>{s.push({path:`/my/course/${x}/exam/${g.value.id}`})};return(c,t)=>{var z,N;return a(),n(E,null,[e("div",Ne,[f.value?(a(),n("div",Ae,i(f.value),1)):m.value?(a(),n("div",De,[e("div",Ue,[e("div",null,[e("h1",Be,i(m.value.title),1),t[6]||(t[6]=e("hr",{class:"my-2"},null,-1))]),e("div",null,[e("div",Qe,[e("div",Fe,[t[7]||(t[7]=e("div",null,[e("span",null,"Course Progress")],-1)),e("div",Je,[e("span",Ge,i(m.value.progress)+"% ",1)])]),e("div",He,[e("div",{style:ee({width:m.value.progress+"%"}),class:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-600"},null,4)])])]),t[9]||(t[9]=e("h2",{class:"title-lg"},"Modules",-1)),e("ul",Ke,[(a(!0),n(E,null,V(m.value.modules,u=>(a(),n("li",{class:"card-bg p-4",key:u.id},[e("div",{onClick:r=>B(u.id),class:"flex flex-1 items-center gap-4 cursor-pointer"},[e("div",We,[e("div",{class:M(["text-xl font-bold text-orange-500",{"!text-gray-400":u.is_active==0}])},i(u.order),3),t[8]||(t[8]=e("div",{class:"text-xs md:text-sm"},"Module",-1))]),e("div",Xe,[e("h4",{class:M(["title-md",{"text-gray-400":u.is_active==0}])},i(u.title),3),e("p",Ze,i(u.description),1)]),e("button",null,[e("i",{class:M(v.value.includes(u.id)?"fas fa-angle-up":"fas fa-angle-down")},null,2)])],8,Ye),v.value.includes(u.id)?(a(),n("div",et,[e("ul",tt,[(a(!0),n(E,null,V(u.lectures,r=>(a(),n("li",{class:"pt-6",key:r.id},[e("div",st,[e("div",lt,[e("i",{class:M(r.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),e("div",ot,[r.type==="virtual_platform"?(a(),n("p",at,"Video")):(a(),n("p",nt,"Lecture"))])]),e("div",it,[e("h4",null,[r.is_completed?(a(),n("i",rt)):b("",!0),I(" "+i(r.title),1)]),e("p",dt,i(r.description),1)]),e("button",{onClick:C(A=>Q(r),["prevent"]),type:"button",class:"btn-2"},i(r.type==="video"?"Play Video":"Join Live"),9,ct)]),e("div",ut,[e("input",{type:"checkbox",id:`completed-${r.id}`,class:"form-checkbox h-3 w-3 text-sky-600 transition duration-150 ease-in-out",checked:r.is_completed,onChange:A=>G(r),disabled:r.is_completed},null,40,mt),e("label",{for:`completed-${r.id}`,class:"ml-2"}," Have you completed this lecture? ",8,xt)])]))),128)),(a(!0),n(E,null,V(u.materials,r=>(a(),n("li",{class:"pt-6",key:r.id},[P(Te,{material:r},{default:S(()=>[r.download_link?(a(),n("a",{key:0,href:r.download_link,class:"btn-2",download:""}," Download ",8,pt)):b("",!0)]),_:2},1032,["material"])]))),128)),(a(!0),n(E,null,V(u.exams,r=>(a(),n("li",{class:"pt-6",key:r.id},[P(Ve,{exam:r},{default:S(()=>[e("button",{onClick:C(A=>F(r),["prevent"]),type:"button",class:"btn-2"},i(r.is_completed?"result":"Open"),9,ft)]),_:2},1032,["exam"])]))),128))])])):b("",!0)]))),128))])])])):(a(),n("div",vt,"Loading...")),y.value?(a(),n("div",_t,[t[11]||(t[11]=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75"},null,-1)),e("div",yt,[t[10]||(t[10]=e("h3",{class:"title-lg",id:"modal-title"},"Confirm Lecture Completion",-1)),e("div",ht,[e("p",gt,' Are you sure you have completed the lecture "'+i((z=k.value)==null?void 0:z.title)+'"? ',1)]),e("div",bt,[e("button",{onClick:J,type:"button",class:"btn-2"},"Yes"),e("button",{onClick:t[0]||(t[0]=u=>y.value=!1),type:"button",class:"btn-3"},"No")])])])):b("",!0)]),h.value?(a(),n("div",{key:0,class:"modal",onClick:t[3]||(t[3]=C(u=>h.value=!1,["self"]))},[e("div",kt,[e("div",wt,[t[15]||(t[15]=e("div",{class:"sticky top-0 grow-0 shrink-0 w-full bg-white z-10"},[e("h3",{class:"title-lg text-center",id:"modal-title"},"সাবধান!! গুরুত্বপূর্ণ তথ্য সমূহ")],-1)),e("div",$t,[e("ul",Et,[e("li",null," Exam এর সময়সীমা থাকবে "+i((N=g.value)==null?void 0:N.duration)+" মিনিট। এই সময়ের মধ্যে আপনাকে Exam সাবমিট করতে হবে। ",1),t[12]||(t[12]=e("li",null," Exam ওপেন করা (“Start Exam” বাটনে ক্লিক) মাত্র আপনার টাইমার চালু হয়ে যাবে। আপনি Exam থেকে বেরিয়ে গেলেও টাইমার চলতে থাকবে এবং টাইম শেষে সাবমিট করতে হবে। ",-1)),t[13]||(t[13]=e("li",null," Exam দেয়ার সময়ে যদি কোনো কারনে কানেকশন লস হয়ে যায় এবং আপনার টাইম শেষ হয়ে যায় আর সাবমিট করতে না পারেন, তাহলে আর Exam দেয়ার সুযোগ পাবেন না। ",-1))])]),e("form",{onSubmit:C(H,["prevent"]),class:"grow-0 shrink-0 w-full flex justify-end gap-1 md:gap-4"},[e("button",{onClick:t[1]||(t[1]=u=>h.value=!1),type:"button",class:"mr-auto btn-contrast px-1 md:px-4 text-xs md:text-base"}," Cancel "),e("label",Ct,[te(e("input",{"onUpdate:modelValue":t[2]||(t[2]=u=>q.value=u),type:"checkbox",required:""},null,512),[[se,q.value]]),t[14]||(t[14]=e("span",{class:"pt-1 text-xs md:text-base"},"আমি পরীক্ষা শুরু করতে চাই",-1))]),e("button",{type:"submit",class:M(["btn-2 disabled:opacity-50 px-1 md:px-4 text-xs md:text-base",{"opacity-50":!q.value}])}," Start Exam ",2)],32)])])])):b("",!0),$.value?(a(),j(ke,{key:1,selectedExam:g.value,class:"modal",onClick:t[5]||(t[5]=C(u=>$.value=!1,["self"]))},{answerSheet:S(()=>[e("div",Mt,[P($e,{courseId:R(x),examId:g.value.id},null,8,["courseId","examId"]),P(R(le),{to:{name:"My Exam AnswerSheet",params:{courseId:R(x),examId:g.value.id}},class:"btn-2 px-2 text-center ml-auto"},{default:S(()=>t[16]||(t[16]=[I(" Answer Sheet ")])),_:1},8,["to"])])]),default:S(()=>[e("button",{onClick:t[4]||(t[4]=u=>$.value=!1),type:"button",class:"btn-contrast"},"Close")]),_:1},8,["selectedExam"])):b("",!0)],64)}}};export{Vt as default};
