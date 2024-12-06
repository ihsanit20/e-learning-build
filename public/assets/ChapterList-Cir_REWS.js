import{$ as z,a0 as b,r as p,e as i,f as u,g as t,x as S,z as D,A as L,t as f,p as m,w,b as B,o as R,m as F,E as k,s as j,i as I,F as O,h as T,j as M,q as A}from"./index-CXrK0xpE.js";const x=z("chapter",{state:()=>({chapters:[],error:null,loading:!1}),actions:{async index(n){var a,s;this.loading=!0,this.error=null;try{const e=await b.get(`/chapters?subject_id=${n}`);this.chapters=(e==null?void 0:e.data)??[]}catch(e){this.error=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)??"An error occurred while fetching chapters"}finally{this.loading=!1}},async show(n){var a,s;this.error=null;try{const e=await b.get(`/chapters/${n}`);return(e==null?void 0:e.data)??null}catch(e){throw this.error=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)??"An error occurred while fetching the chapter",e}},async store(n){var a,s;this.error=null;try{const e=await b.post("/chapters",n);this.chapters.push(e==null?void 0:e.data)}catch(e){throw this.error=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)??"An error occurred while creating the chapter",e}},async update(n,a){var s,e;this.error=null;try{const c=await b.put(`/chapters/${n}`,a),o=this.chapters.findIndex(r=>r.id===n);o!==-1&&(this.chapters[o]=(c==null?void 0:c.data)??this.chapters[o])}catch(c){throw this.error=((e=(s=c==null?void 0:c.response)==null?void 0:s.data)==null?void 0:e.message)??"An error occurred while updating the chapter",c}},async delete(n){var a,s;this.error=null;try{await b.delete(`/chapters/${n}`),this.chapters=this.chapters.filter(e=>e.id!==n)}catch(e){throw this.error=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)??"An error occurred while deleting the chapter",e}}}}),U={class:"modal"},W={class:"modal-content space-y-2"},G=t("h2",null,"Add Chapter",-1),H={key:0,class:"text-red-500"},J={key:1,class:"text-red-500"},K={class:"flex gap-4"},P=t("button",{type:"submit",class:"btn-2"},"Add",-1),X={__name:"AddChapterModal",props:{subjectId:{required:!0}},emits:["close"],setup(n,{emit:a}){const s=a,e=n,c=x(),o=p(""),r=p({}),h=async()=>{r.value={};try{await c.store({name:o.value,subject_id:e.subjectId}),o.value="",s("close")}catch(d){d.response&&d.response.data&&d.response.data.errors&&(r.value=d.response.data.errors)}};return(d,l)=>(i(),u("div",U,[t("div",W,[G,t("form",{onSubmit:S(h,["prevent"]),class:"space-y-2"},[D(t("input",{class:"input-1","onUpdate:modelValue":l[0]||(l[0]=_=>o.value=_),placeholder:"Chapter name",required:""},null,512),[[L,o.value]]),r.value.name?(i(),u("div",H,f(r.value.name[0]),1)):m("",!0),r.value.subject_id?(i(),u("div",J,f(r.value.subject_id[0]),1)):m("",!0),t("div",K,[P,t("button",{type:"button",onClick:l[1]||(l[1]=_=>s("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},Y={key:0,class:"modal"},Z={class:"modal-content space-y-2"},ee=t("h2",null,"Delete Chapter",-1),te={key:0,class:"text-red-500"},se={class:"flex gap-4"},ae={__name:"DeleteChapterModal",props:{chapter:{type:Object,required:!0,default:()=>({name:"",id:null})}},emits:["close"],setup(n,{emit:a}){const s=a,e=n,c=x(),o=p({});w(()=>e.chapter,h=>{},{immediate:!0});const r=async()=>{o.value={};try{await c.delete(e.chapter.id),s("close")}catch(h){h.response&&h.response.data&&h.response.data.errors&&(o.value=h.response.data.errors)}};return(h,d)=>e.chapter&&e.chapter.name?(i(),u("div",Y,[t("div",Z,[ee,t("p",null,"Are you sure you want to delete the chapter: "+f(e.chapter.name)+"?",1),o.value.subject_id?(i(),u("div",te,f(o.value.subject_id[0]),1)):m("",!0),t("div",se,[t("button",{onClick:r,class:"btn-2"},"Delete"),t("button",{type:"button",onClick:d[0]||(d[0]=l=>s("close")),class:"btn-contrast"},"Cancel")])])])):m("",!0)}},oe={class:"modal"},re={class:"modal-content space-y-2"},ne=t("h2",null,"Edit Chapter",-1),ce={key:0,class:"text-red-500"},le={key:1,class:"text-red-500"},ie={class:"flex gap-4"},de=t("button",{type:"submit",class:"btn-2"},"Save",-1),ue={__name:"EditChapterModal",props:{chapter:{type:Object,required:!0}},emits:["close"],setup(n,{emit:a}){var d;const s=a,e=n,c=x(),o=p(((d=e.chapter)==null?void 0:d.name)||""),r=p({});w(()=>e.chapter,l=>{l&&(o.value=l.name)},{immediate:!0});const h=async()=>{r.value={};try{await c.update(e.chapter.id,{name:o.value,subject_id:e.chapter.subject_id}),s("close")}catch(l){l.response&&l.response.data&&l.response.data.errors&&(r.value=l.response.data.errors)}};return(l,_)=>(i(),u("div",oe,[t("div",re,[ne,t("form",{onSubmit:S(h,["prevent"]),class:"space-y-2"},[D(t("input",{class:"input-1","onUpdate:modelValue":_[0]||(_[0]=g=>o.value=g),placeholder:"Chapter name",required:""},null,512),[[L,o.value]]),r.value.name?(i(),u("div",ce,f(r.value.name[0]),1)):m("",!0),r.value.subject_id?(i(),u("div",le,f(r.value.subject_id[0]),1)):m("",!0),t("div",ie,[de,t("button",{type:"button",onClick:_[1]||(_[1]=g=>s("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},he={class:"my-container space-y-2"},pe={class:"flex justify-between"},_e={class:"flex items-center gap-4"},me=t("i",{class:"fas fa-arrow-left"},null,-1),ve=t("h4",{class:"title-lg"},"Chapter List",-1),fe={key:0,class:"flex justify-center items-center"},ye=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),be=[ye],ge={key:1},we={key:0,class:"grid md:grid-cols-3 gap-4"},xe={class:"flex flex-col items-center"},Ce=t("i",{class:"fad fa-folder text-4xl"},null,-1),$e={class:"title-md"},ke={class:"absolute top-4 right-4 flex gap-2"},je=["onClick"],Me=t("i",{class:"fad fa-edit"},null,-1),Ie=[Me],Ae=["onClick"],Se=t("i",{class:"fad fa-trash"},null,-1),De=[Se],Le={class:"flex justify-center items-center w-full flex-wrap gap-x-8 gap-y-2"},qe={key:1,class:"text-red-500"},Ne={__name:"ChapterList",setup(n){const a=B(),s=p(a.params.categoryId),e=p(a.params.id),c=x(),o=p(!1),r=p(!1),h=p(!1),d=p(null),l=p(!0),_=()=>o.value=!0,g=()=>o.value=!1,q=v=>{d.value=v,r.value=!0},E=()=>r.value=!1,V=v=>{d.value=v,h.value=!0},N=()=>h.value=!1,C=async()=>{try{l.value=!0,await c.index(e.value)}finally{l.value=!1}};return R(C),w(()=>a.params.id,async v=>{e.value=v,await C()}),w(()=>a.params.categoryId,async v=>{s.value=v,await C()}),(v,Ee)=>{const $=F("RouterLink");return i(),u("div",he,[t("div",pe,[t("div",_e,[k($,{class:"btn-3",to:{name:"SubjectList",params:{id:s.value}}},{default:j(()=>[me]),_:1},8,["to"]),ve]),t("button",{class:"btn-2",onClick:_},"Add Chapter")]),l.value?(i(),u("div",fe,be)):(i(),u("div",ge,[I(c).chapters.length?(i(),u("div",we,[(i(!0),u(O,null,T(I(c).chapters,y=>(i(),u("div",{key:y.id,class:"relative card-bg items-center p-4"},[t("div",xe,[Ce,t("p",$e,f(y.name),1)]),t("div",ke,[t("button",{onClick:Q=>q(y)},Ie,8,je),t("button",{onClick:Q=>V(y),class:"text-red-500"},De,8,Ae)]),t("div",Le,[k($,{to:{name:"McqQuestionList",params:{categoryId:s.value,subjectId:e.value,chapterId:y.id}},class:"btn-link"},{default:j(()=>[A(" MCQ Questions ")]),_:2},1032,["to"]),k($,{to:{name:"WrittenQuestionList",params:{categoryId:s.value,subjectId:e.value,chapterId:y.id}},class:"btn-link"},{default:j(()=>[A(" Written Questions ")]),_:2},1032,["to"])])]))),128))])):(i(),u("p",qe,"No chapters found"))])),o.value?(i(),M(X,{key:2,class:"z-40",subjectId:e.value,onClose:g},null,8,["subjectId"])):m("",!0),r.value?(i(),M(ue,{key:3,class:"z-40",chapter:d.value,onClose:E},null,8,["chapter"])):m("",!0),h.value?(i(),M(ae,{key:4,class:"z-40",chapter:d.value,onClose:N},null,8,["chapter"])):m("",!0)])}}};export{Ne as default};
