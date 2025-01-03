import{r as f,e as u,f as o,g as e,z as b,A as y,C as v,y as j,t as z,q as g,Z as R,v as Q,o as F,m as N,i as V,F as B,h as I,j as P,s as M,x as Y}from"./index-DIWD3pil.js";import{_ as E}from"./TextEditor-BaElCI8M.js";import{u as S}from"./quiz-BNTLkrP3.js";const Z={__name:"AddQuiz",props:{quizType:{type:String,required:!0}},emits:["submit"],setup(_,{emit:r}){const a=_,i=f({title:"",description:"",duration:"",opening_time:"",result_publish_time:""}),x=r,n=()=>{const c={title:i.value.title,description:i.value.description,type:a.quizType,duration:i.value.duration,opening_time:i.value.opening_time,result_publish_time:i.value.result_publish_time};x("submit",c),i.value={title:"",description:"",duration:"",opening_time:"",result_publish_time:""}};return(c,l)=>(u(),o("div",null,[e("form",{onSubmit:j(n,["prevent"]),class:"space-y-4"},[e("div",null,[l[5]||(l[5]=e("label",null,"Quiz Title:",-1)),b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":l[0]||(l[0]=t=>i.value.title=t),placeholder:"Title",required:""},null,512),[[y,i.value.title]])]),e("div",null,[l[6]||(l[6]=e("label",null,"Description:",-1)),v(E,{modelValue:i.value.description,"onUpdate:modelValue":l[1]||(l[1]=t=>i.value.description=t),placeholder:"Description"},null,8,["modelValue"])]),e("div",null,[l[7]||(l[7]=e("label",null,"Duration (minutes):",-1)),b(e("input",{class:"input-1",type:"number","onUpdate:modelValue":l[2]||(l[2]=t=>i.value.duration=t),placeholder:"Duration",required:""},null,512),[[y,i.value.duration]])]),e("div",null,[l[8]||(l[8]=e("label",null,"Opening Time:",-1)),b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":l[3]||(l[3]=t=>i.value.opening_time=t),placeholder:"Opening Date & Time",required:""},null,512),[[y,i.value.opening_time]])]),e("div",null,[l[9]||(l[9]=e("label",null,"Result Publish Time:",-1)),b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":l[4]||(l[4]=t=>i.value.result_publish_time=t),placeholder:"Opening Date & Time",required:""},null,512),[[y,i.value.result_publish_time]])]),l[10]||(l[10]=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-2"},"Add Quiz")],-1))],32)]))}},G={class:"flex flex-col items-start gap-x-2"},H={key:0,class:"w-full md:w-60 text-left"},w={__name:"FormLabel",props:["label"],setup(_){return(r,a)=>(u(),o("label",G,[_.label?(u(),o("span",H,z(_.label),1)):g("",!0),R(r.$slots,"default")]))}},J={__name:"EditQuizForm",props:{quiz:Object},emits:["close"],setup(_,{emit:r}){const a=_,i=r,x=S(),n=f({title:a.quiz.title||"",description:a.quiz.description||"",duration:a.quiz.duration||"",opening_time:a.quiz.opening_time||"",result_publish_time:a.quiz.result_publish_time||""}),c=async()=>{const l={title:n.value.title,description:n.value.description,duration:n.value.duration,opening_time:n.value.opening_time,result_publish_time:n.value.result_publish_time};try{await x.updateQuiz(a.quiz.id,l),i("close")}catch(t){console.error("Error updating quiz:",t)}};return(l,t)=>(u(),o("div",null,[e("form",{onSubmit:j(c,["prevent"]),class:"space-y-4"},[v(w,{label:"Quiz Title"},{default:Q(()=>[b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":t[0]||(t[0]=p=>n.value.title=p),placeholder:"Quiz Title",required:""},null,512),[[y,n.value.title]])]),_:1}),e("div",null,[t[5]||(t[5]=e("label",null,"Description:",-1)),v(E,{modelValue:n.value.description,"onUpdate:modelValue":t[1]||(t[1]=p=>n.value.description=p),placeholder:"Description"},null,8,["modelValue"])]),v(w,{label:"Duration (minutes)"},{default:Q(()=>[b(e("input",{class:"input-1",type:"number","onUpdate:modelValue":t[2]||(t[2]=p=>n.value.duration=p),placeholder:"Duration (minutes)",required:""},null,512),[[y,n.value.duration]])]),_:1}),v(w,{label:"Opening Time"},{default:Q(()=>[b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":t[3]||(t[3]=p=>n.value.opening_time=p),placeholder:"Opening Date & Time",required:""},null,512),[[y,n.value.opening_time]])]),_:1}),v(w,{label:"Result Publish"},{default:Q(()=>[b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":t[4]||(t[4]=p=>n.value.result_publish_time=p),placeholder:"Result Publish Time",required:""},null,512),[[y,n.value.result_publish_time]])]),_:1}),t[6]||(t[6]=e("hr",{class:"my-3"},null,-1)),t[7]||(t[7]=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1))],32)]))}},K={class:"my-container space-y-4"},W={class:"flex gap-4 items-center justify-center mt-2"},X={key:0},ee={class:"space-y-2 divide-y"},te={class:"grow shrink flex items-center gap-4"},le={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},se={key:0,class:"fal fa-ballot-check text-2xl"},ie={key:1,class:"fal fa-question text-3xl"},ne={class:"title-sm"},ue={class:"flex items-center gap-2 text-sm text-gray-400"},oe={class:"grow-0 flex flex-wrap justify-end max-w-[110px] md:max-w-fit gap-2"},ae=["onClick"],de=["onClick"],re={key:1,class:"flex justify-center"},pe={key:2,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},me={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},ce={class:"mt-4"},ve={key:3,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},fe={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},be={class:"flex justify-end"},ye={class:"mr-auto font-bold"},_e={class:"mt-4"},xe={key:4,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},ze={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},ge={class:"mt-4 text-center"},ke={__name:"QuizListView",setup(_){const r=S(),a=f(!1),i=f(!1),x=f(!1),n=f(null),c=f(null),l=f(""),t=m=>{const s=new Date(m);return Y(s,"hh:mm a, dd-MMM-yyyy")},p=m=>{l.value=m,a.value=!0},k=()=>{l.value="",a.value=!1},U=async m=>{try{await r.addQuiz(m),k()}catch(s){console.error("Error adding quiz:",s)}},$=m=>{n.value=m,i.value=!0},q=()=>{i.value=!1},A=m=>{c.value=m,x.value=!0},h=()=>{x.value=!1},L=async()=>{c.value&&(await r.deleteQuiz(c.value.id),h())};return F(()=>{r.fetchQuizzes()}),(m,s)=>{var T,C;const D=N("RouterLink");return u(),o("div",K,[s[10]||(s[10]=e("h1",{class:"title-lg text-center"},"Open Quiz / Quiz List",-1)),e("div",W,[e("button",{class:"btn-2",onClick:s[0]||(s[0]=d=>p("MCQ"))},"Add MCQ Quiz"),g("",!0)]),s[11]||(s[11]=e("hr",{class:"my-4"},null,-1)),((T=V(r).quizzes)==null?void 0:T.length)>0?(u(),o("div",X,[e("div",ee,[(u(!0),o(B,null,I(V(r).quizzes,d=>(u(),o("div",{key:d.id,class:"w-full flex gap-4 items-center justify-between py-2"},[e("div",te,[e("div",le,[d.type==="MCQ"?(u(),o("i",se)):(u(),o("i",ie)),s[2]||(s[2]=e("div",{class:"text-xs"},"Quiz",-1))]),e("div",null,[e("h4",ne,z(d.title),1),e("div",ue,[s[3]||(s[3]=e("i",{class:"far fa-calendar-check"},null,-1)),e("p",null,z(t(d.opening_time)),1)])])]),e("div",oe,[d.user_quizzes_count?(u(),P(D,{key:0,to:{name:"QuizResultList",params:{quizId:d.id}},class:"btn-3 px-3.5"},{default:Q(()=>[M(" Results ("+z(d.user_quizzes_count)+") ",1)]),_:2},1032,["to"])):g("",!0),v(D,{to:{name:"QuizQuestionList",params:{quizId:d.id}},class:"btn-3 px-3.5"},{default:Q(()=>[M(" Questions ("+z(d.questions_count)+") ",1)]),_:2},1032,["to"]),e("button",{class:"btn-1 pb-2",onClick:O=>$(d)},s[4]||(s[4]=[e("i",{class:"far fa-edit"},null,-1),e("span",{class:"hidden md:flex"},"Edit",-1)]),8,ae),e("button",{class:"btn-contrast pb-2",onClick:O=>A(d)},s[5]||(s[5]=[e("i",{class:"fas fa-trash-alt"},null,-1),e("span",{class:"hidden md:flex"},"Delete",-1)]),8,de)])]))),128))])])):(u(),o("div",re,s[6]||(s[6]=[e("p",{class:"py-4"},"No quiz available.",-1)]))),a.value?(u(),o("div",pe,[e("div",me,[e("div",{class:"flex justify-end"},[s[7]||(s[7]=e("div",{class:"mr-auto font-bold"},"Add Quiz Info",-1)),e("button",{onClick:k,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),s[8]||(s[8]=e("hr",{class:"my-3"},null,-1)),e("div",ce,[v(Z,{quizType:l.value,onSubmit:U},null,8,["quizType"])])])])):g("",!0),i.value?(u(),o("div",ve,[e("div",fe,[e("div",be,[e("div",ye,"Edit Form : "+z(n.value.title),1),e("button",{onClick:q,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),s[9]||(s[9]=e("hr",{class:"my-3"},null,-1)),e("div",_e,[v(J,{quiz:n.value,onClose:q},null,8,["quiz"])])])])):g("",!0),x.value?(u(),o("div",xe,[e("div",ze,[e("div",{class:"flex justify-end"},[e("button",{onClick:h,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",ge,[e("p",null,"Do you want to delete '"+z((C=c.value)==null?void 0:C.title)+"' quiz?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:L},"Yes"),e("button",{class:"btn-contrast",onClick:h},"No")])])])])):g("",!0)])}}};export{ke as default};