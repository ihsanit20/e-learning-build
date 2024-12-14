import{r,e as l,f as o,g as e,z as h,A as f,x as E,t as x,p as Q,Z as O,w as R,E as z,s as w,o as F,m as N,i as $,F as B,h as P,j as I,q as V,v as Y}from"./index-BMsmsKno.js";import{u as S}from"./quiz-f3T7sSIP.js";const Z=e("label",null,"Quiz Title:",-1),G=e("label",null,"Duration (minutes):",-1),H=e("label",null,"Opening Time:",-1),J=e("label",null,"Result Publish Time:",-1),K=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-2"},"Add Quiz")],-1),W={__name:"AddQuiz",props:{quizType:{type:String,required:!0}},emits:["submit"],setup(b,{emit:c}){const i=b,t=r({title:"",duration:"",opening_time:"",result_publish_time:""}),y=c,p=()=>{const a={title:t.value.title,type:i.quizType,duration:t.value.duration,opening_time:t.value.opening_time,result_publish_time:t.value.result_publish_time};y("submit",a),t.value={title:"",duration:"",opening_time:"",result_publish_time:""}};return(a,s)=>(l(),o("div",null,[e("form",{onSubmit:E(p,["prevent"]),class:"space-y-4"},[e("div",null,[Z,h(e("input",{class:"input-1",type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>t.value.title=n),placeholder:"Title",required:""},null,512),[[f,t.value.title]])]),e("div",null,[G,h(e("input",{class:"input-1",type:"number","onUpdate:modelValue":s[1]||(s[1]=n=>t.value.duration=n),placeholder:"Duration",required:""},null,512),[[f,t.value.duration]])]),e("div",null,[H,h(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":s[2]||(s[2]=n=>t.value.opening_time=n),placeholder:"Opening Date & Time",required:""},null,512),[[f,t.value.opening_time]])]),e("div",null,[J,h(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":s[3]||(s[3]=n=>t.value.result_publish_time=n),placeholder:"Opening Date & Time",required:""},null,512),[[f,t.value.result_publish_time]])]),K],32)]))}},X={class:"flex flex-col md:flex-row items-center gap-x-2"},ee={key:0,class:"w-full md:w-60 text-left md:text-right"},q={__name:"FormLabel",props:["label"],setup(b){return(c,i)=>(l(),o("label",X,[b.label?(l(),o("span",ee,x(b.label),1)):Q("",!0),O(c.$slots,"default")]))}},te=e("hr",{class:"my-3"},null,-1),se=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1),le={__name:"EditQuizForm",props:{quiz:Object},emits:["close"],setup(b,{emit:c}){const i=b,t=c,y=S(),p=r(i.quiz.title),a=r(i.quiz.duration),s=r(i.quiz.opening_time),n=r(i.quiz.result_publish_time),k=async()=>{const m={...i.quiz,title:p.value,duration:a.value,opening_time:s.value,result_publish_time:n.value};try{await y.updateQuiz(i.quiz.id,m),t("close")}catch(u){console.error("Error updating quiz:",u)}};return R(()=>i.quiz,m=>{p.value=m.title,a.value=m.duration,s.value=m.opening_time},{immediate:!0}),(m,u)=>(l(),o("div",null,[e("form",{onSubmit:E(k,["prevent"]),class:"space-y-4"},[z(q,{label:"Quiz Title"},{default:w(()=>[h(e("input",{class:"input-1",type:"text","onUpdate:modelValue":u[0]||(u[0]=v=>p.value=v),placeholder:"Quiz Title",required:""},null,512),[[f,p.value]])]),_:1}),z(q,{label:"Duration (minutes)"},{default:w(()=>[h(e("input",{class:"input-1",type:"number","onUpdate:modelValue":u[1]||(u[1]=v=>a.value=v),placeholder:"Duration (minutes)",required:""},null,512),[[f,a.value]])]),_:1}),z(q,{label:"Opening Time"},{default:w(()=>[h(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":u[2]||(u[2]=v=>s.value=v),placeholder:"Opening Date & Time",required:""},null,512),[[f,s.value]])]),_:1}),z(q,{label:"Result Publish"},{default:w(()=>[h(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":u[3]||(u[3]=v=>n.value=v),placeholder:"Result Publish Time",required:""},null,512),[[f,n.value]])]),_:1}),te,se],32)]))}},ie={class:"my-container space-y-4"},oe=e("h1",{class:"title-lg text-center"},"Open Quiz / Quiz List",-1),ne={class:"flex gap-4 items-center justify-center mt-2"},ae=e("hr",{class:"my-4"},null,-1),ue={key:0},de={class:"space-y-2 divide-y"},ce={class:"grow shrink flex items-center gap-4"},re={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},pe={key:0,class:"fal fa-ballot-check text-2xl"},_e={key:1,class:"fal fa-question text-3xl"},me=e("div",{class:"text-xs"},"Quiz",-1),ve={class:"title-sm"},he={class:"flex items-center gap-2 text-sm text-gray-400"},fe=e("i",{class:"far fa-calendar-check"},null,-1),be={class:"grow-0 flex flex-wrap justify-end max-w-[110px] md:max-w-fit gap-2"},ye=["onClick"],xe=e("i",{class:"far fa-edit"},null,-1),ze=e("span",{class:"hidden md:flex"},"Edit",-1),ge=[xe,ze],Qe=["onClick"],we=e("i",{class:"fas fa-trash-alt"},null,-1),qe=e("span",{class:"hidden md:flex"},"Delete",-1),ke=[we,qe],Te={key:1,class:"flex justify-center"},Ce=e("p",{class:"py-4"},"No quiz available.",-1),De=[Ce],Me={key:2,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},je={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},$e=e("div",{class:"mr-auto font-bold"},"Add Quiz Info",-1),Ve=e("hr",{class:"my-3"},null,-1),Ee={class:"mt-4"},Se={key:3,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Ae={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Le={class:"flex justify-end"},Ue={class:"mr-auto font-bold"},Oe=e("hr",{class:"my-3"},null,-1),Re={class:"mt-4"},Fe={key:4,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Ne={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Be={class:"mt-4 text-center"},Ye={__name:"QuizListView",setup(b){const c=S(),i=r(!1),t=r(!1),y=r(!1),p=r(null),a=r(null),s=r(""),n=_=>{const g=new Date(_);return Y(g,"hh:mm a, dd-MMM-yyyy")},k=_=>{s.value=_,i.value=!0},m=()=>{s.value="",i.value=!1},u=async _=>{try{await c.addQuiz(_),m()}catch(g){console.error("Error adding quiz:",g)}},v=_=>{p.value=_,t.value=!0},C=()=>{t.value=!1},A=_=>{a.value=_,y.value=!0},T=()=>{y.value=!1},L=async()=>{a.value&&(await c.deleteQuiz(a.value.id),T())};return F(()=>{c.fetchQuizzes()}),(_,g)=>{var M,j;const D=N("RouterLink");return l(),o("div",ie,[oe,e("div",ne,[e("button",{class:"btn-2",onClick:g[0]||(g[0]=d=>k("MCQ"))},"Add MCQ Quiz"),Q("",!0)]),ae,((M=$(c).quizzes)==null?void 0:M.length)>0?(l(),o("div",ue,[e("div",de,[(l(!0),o(B,null,P($(c).quizzes,d=>(l(),o("div",{key:d.id,class:"w-full flex gap-4 items-center justify-between py-2"},[e("div",ce,[e("div",re,[d.type==="MCQ"?(l(),o("i",pe)):(l(),o("i",_e)),me]),e("div",null,[e("h4",ve,x(d.title),1),e("div",he,[fe,e("p",null,x(n(d.opening_time)),1)])])]),e("div",be,[d.user_quizzes_count?(l(),I(D,{key:0,to:{name:"QuizResultList",params:{quizId:d.id}},class:"btn-3 px-3.5"},{default:w(()=>[V(" Results ("+x(d.user_quizzes_count)+") ",1)]),_:2},1032,["to"])):Q("",!0),z(D,{to:{name:"QuizQuestionList",params:{quizId:d.id}},class:"btn-3 px-3.5"},{default:w(()=>[V(" Questions ("+x(d.questions_count)+") ",1)]),_:2},1032,["to"]),e("button",{class:"btn-1 pb-2",onClick:U=>v(d)},ge,8,ye),e("button",{class:"btn-contrast pb-2",onClick:U=>A(d)},ke,8,Qe)])]))),128))])])):(l(),o("div",Te,De)),i.value?(l(),o("div",Me,[e("div",je,[e("div",{class:"flex justify-end"},[$e,e("button",{onClick:m,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),Ve,e("div",Ee,[z(W,{quizType:s.value,onSubmit:u},null,8,["quizType"])])])])):Q("",!0),t.value?(l(),o("div",Se,[e("div",Ae,[e("div",Le,[e("div",Ue,"Edit Form : "+x(p.value.title),1),e("button",{onClick:C,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),Oe,e("div",Re,[z(le,{quiz:p.value,onClose:C},null,8,["quiz"])])])])):Q("",!0),y.value?(l(),o("div",Fe,[e("div",Ne,[e("div",{class:"flex justify-end"},[e("button",{onClick:T,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Be,[e("p",null,"Do you want to delete '"+x((j=a.value)==null?void 0:j.title)+"' quiz?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:L},"Yes"),e("button",{class:"btn-contrast",onClick:T},"No")])])])])):Q("",!0)])}}};export{Ye as default};