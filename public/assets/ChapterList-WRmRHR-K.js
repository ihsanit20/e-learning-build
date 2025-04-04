import{d as z,r as v,x as p,y as d,z as t,M as D,U as L,A as f,a9 as q,C as _,a2 as w,P as O,I as R,O as j,D as M,L as I,Y as U,B as A,F as W,G as F,W as S}from"./vue-BP9P6hCg.js";import{h as g}from"./index-C-7Rzlh_.js";import"./vendor-PJuFQbji.js";const x=z("chapter",{state:()=>({chapters:[],error:null,loading:!1}),actions:{async index(l){var a,s;this.loading=!0,this.error=null;try{const e=await g.get(`/chapters?subject_id=${l}`);this.chapters=(e==null?void 0:e.data)??[]}catch(e){this.error=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)??"An error occurred while fetching chapters"}finally{this.loading=!1}},async show(l){var a,s;this.error=null;try{const e=await g.get(`/chapters/${l}`);return(e==null?void 0:e.data)??null}catch(e){throw this.error=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)??"An error occurred while fetching the chapter",e}},async store(l){var a,s;this.error=null;try{const e=await g.post("/chapters",l);this.chapters.push(e==null?void 0:e.data)}catch(e){throw this.error=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)??"An error occurred while creating the chapter",e}},async update(l,a){var s,e;this.error=null;try{const c=await g.put(`/chapters/${l}`,a),r=this.chapters.findIndex(n=>n.id===l);r!==-1&&(this.chapters[r]=(c==null?void 0:c.data)??this.chapters[r])}catch(c){throw this.error=((e=(s=c==null?void 0:c.response)==null?void 0:s.data)==null?void 0:e.message)??"An error occurred while updating the chapter",c}},async delete(l){var a,s;this.error=null;try{await g.delete(`/chapters/${l}`),this.chapters=this.chapters.filter(e=>e.id!==l)}catch(e){throw this.error=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)??"An error occurred while deleting the chapter",e}}}}),T={class:"modal"},G={class:"modal-content space-y-2"},P={key:0,class:"text-red-500"},Y={key:1,class:"text-red-500"},H={class:"flex gap-4"},J={__name:"AddChapterModal",props:{subjectId:{required:!0}},emits:["close"],setup(l,{emit:a}){const s=a,e=l,c=x(),r=v(""),n=v({}),h=async()=>{n.value={};try{await c.store({name:r.value,subject_id:e.subjectId}),r.value="",s("close")}catch(i){i.response&&i.response.data&&i.response.data.errors&&(n.value=i.response.data.errors)}};return(i,o)=>(d(),p("div",T,[t("div",G,[o[3]||(o[3]=t("h2",null,"Add Chapter",-1)),t("form",{onSubmit:D(h,["prevent"]),class:"space-y-2"},[L(t("input",{class:"input-1","onUpdate:modelValue":o[0]||(o[0]=m=>r.value=m),placeholder:"Chapter name",required:""},null,512),[[q,r.value]]),n.value.name?(d(),p("div",P,_(n.value.name[0]),1)):f("",!0),n.value.subject_id?(d(),p("div",Y,_(n.value.subject_id[0]),1)):f("",!0),t("div",H,[o[2]||(o[2]=t("button",{type:"submit",class:"btn-2"},"Add",-1)),t("button",{type:"button",onClick:o[1]||(o[1]=m=>s("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},K={key:0,class:"modal"},X={class:"modal-content space-y-2"},Z={key:0,class:"text-red-500"},ee={class:"flex gap-4"},te={__name:"DeleteChapterModal",props:{chapter:{type:Object,required:!0,default:()=>({name:"",id:null})}},emits:["close"],setup(l,{emit:a}){const s=a,e=l,c=x(),r=v({});w(()=>e.chapter,h=>{},{immediate:!0});const n=async()=>{r.value={};try{await c.delete(e.chapter.id),s("close")}catch(h){h.response&&h.response.data&&h.response.data.errors&&(r.value=h.response.data.errors)}};return(h,i)=>e.chapter&&e.chapter.name?(d(),p("div",K,[t("div",X,[i[1]||(i[1]=t("h2",null,"Delete Chapter",-1)),t("p",null,"Are you sure you want to delete the chapter: "+_(e.chapter.name)+"?",1),r.value.subject_id?(d(),p("div",Z,_(r.value.subject_id[0]),1)):f("",!0),t("div",ee,[t("button",{onClick:n,class:"btn-2"},"Delete"),t("button",{type:"button",onClick:i[0]||(i[0]=o=>s("close")),class:"btn-contrast"},"Cancel")])])])):f("",!0)}},se={class:"modal"},ae={class:"modal-content space-y-2"},re={key:0,class:"text-red-500"},oe={key:1,class:"text-red-500"},ne={class:"flex gap-4"},le={__name:"EditChapterModal",props:{chapter:{type:Object,required:!0}},emits:["close"],setup(l,{emit:a}){var i;const s=a,e=l,c=x(),r=v(((i=e.chapter)==null?void 0:i.name)||""),n=v({});w(()=>e.chapter,o=>{o&&(r.value=o.name)},{immediate:!0});const h=async()=>{n.value={};try{await c.update(e.chapter.id,{name:r.value,subject_id:e.chapter.subject_id}),s("close")}catch(o){o.response&&o.response.data&&o.response.data.errors&&(n.value=o.response.data.errors)}};return(o,m)=>(d(),p("div",se,[t("div",ae,[m[3]||(m[3]=t("h2",null,"Edit Chapter",-1)),t("form",{onSubmit:D(h,["prevent"]),class:"space-y-2"},[L(t("input",{class:"input-1","onUpdate:modelValue":m[0]||(m[0]=C=>r.value=C),placeholder:"Chapter name",required:""},null,512),[[q,r.value]]),n.value.name?(d(),p("div",re,_(n.value.name[0]),1)):f("",!0),n.value.subject_id?(d(),p("div",oe,_(n.value.subject_id[0]),1)):f("",!0),t("div",ne,[m[2]||(m[2]=t("button",{type:"submit",class:"btn-2"},"Save",-1)),t("button",{type:"button",onClick:m[1]||(m[1]=C=>s("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},ce={class:"my-container space-y-2"},ie={class:"flex justify-between"},de={class:"flex items-center gap-4"},ue={key:0,class:"flex justify-center items-center"},pe={key:1},he={key:0,class:"grid md:grid-cols-3 gap-4"},me={class:"flex flex-col items-center"},ve={class:"title-md"},fe={class:"absolute top-4 right-4 flex gap-2"},ye=["onClick"],_e=["onClick"],be={class:"flex justify-center items-center w-full flex-wrap gap-x-8 gap-y-2"},ge={key:1,class:"text-red-500"},ke={__name:"ChapterList",setup(l){const a=O(),s=v(a.params.categoryId),e=v(a.params.id),c=x(),r=v(!1),n=v(!1),h=v(!1),i=v(null),o=v(!0),m=()=>r.value=!0,C=()=>r.value=!1,E=y=>{i.value=y,n.value=!0},V=()=>n.value=!1,B=y=>{i.value=y,h.value=!0},N=()=>h.value=!1,k=async()=>{try{o.value=!0,await c.index(e.value)}finally{o.value=!1}};return R(k),w(()=>a.params.id,async y=>{e.value=y,await k()}),w(()=>a.params.categoryId,async y=>{s.value=y,await k()}),(y,u)=>{const $=U("RouterLink");return d(),p("div",ce,[t("div",ie,[t("div",de,[M($,{class:"btn-3",to:{name:"SubjectList",params:{id:s.value}}},{default:I(()=>u[0]||(u[0]=[t("i",{class:"fas fa-arrow-left"},null,-1)])),_:1},8,["to"]),u[1]||(u[1]=t("h4",{class:"title-lg"},"Chapter List",-1))]),t("button",{class:"btn-2",onClick:m},"Add Chapter")]),o.value?(d(),p("div",ue,u[2]||(u[2]=[t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(d(),p("div",pe,[A(c).chapters.length?(d(),p("div",he,[(d(!0),p(W,null,F(A(c).chapters,b=>(d(),p("div",{key:b.id,class:"relative card-bg items-center p-4"},[t("div",me,[u[3]||(u[3]=t("i",{class:"fad fa-folder text-4xl"},null,-1)),t("p",ve,_(b.name),1)]),t("div",fe,[t("button",{onClick:Q=>E(b)},u[4]||(u[4]=[t("i",{class:"fad fa-edit"},null,-1)]),8,ye),t("button",{onClick:Q=>B(b),class:"text-red-500"},u[5]||(u[5]=[t("i",{class:"fad fa-trash"},null,-1)]),8,_e)]),t("div",be,[M($,{to:{name:"McqQuestionList",params:{categoryId:s.value,subjectId:e.value,chapterId:b.id}},class:"btn-link"},{default:I(()=>u[6]||(u[6]=[S(" MCQ Questions ")])),_:2},1032,["to"]),M($,{to:{name:"WrittenQuestionList",params:{categoryId:s.value,subjectId:e.value,chapterId:b.id}},class:"btn-link"},{default:I(()=>u[7]||(u[7]=[S(" Written Questions ")])),_:2},1032,["to"])])]))),128))])):(d(),p("p",ge,"No chapters found"))])),r.value?(d(),j(J,{key:2,class:"z-40",subjectId:e.value,onClose:C},null,8,["subjectId"])):f("",!0),n.value?(d(),j(le,{key:3,class:"z-40",chapter:i.value,onClose:V},null,8,["chapter"])):f("",!0),h.value?(d(),j(te,{key:4,class:"z-40",chapter:i.value,onClose:N},null,8,["chapter"])):f("",!0)])}}};export{ke as default};
