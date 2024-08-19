import{D as R,E as y,r as p,d as l,e as h,f as t,m as I,p as A,v as D,t as m,q as v,H as g,I as x,w as k,b as F,o as O,s as T,h as S,F as U,g as H,i as $,y as Q,z as G,x as J}from"./index-CcZtx1wx.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w=R("chapter",{state:()=>({chapters:[],error:null,loading:!1}),actions:{async index(s){var o,a;this.loading=!0,this.error=null;try{const e=await y.get(`/chapters?subject_id=${s}`);this.chapters=(e==null?void 0:e.data)??[]}catch(e){this.error=((a=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:a.message)??"An error occurred while fetching chapters"}finally{this.loading=!1}},async show(s){var o,a;this.error=null;try{const e=await y.get(`/chapters/${s}`);return(e==null?void 0:e.data)??null}catch(e){throw this.error=((a=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:a.message)??"An error occurred while fetching the chapter",e}},async store(s){var o,a;this.error=null;try{const e=await y.post("/chapters",s);this.chapters.push(e==null?void 0:e.data)}catch(e){throw this.error=((a=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:a.message)??"An error occurred while creating the chapter",e}},async update(s,o){var a,e;this.error=null;try{const n=await y.put(`/chapters/${s}`,o),c=this.chapters.findIndex(r=>r.id===s);c!==-1&&(this.chapters[c]=(n==null?void 0:n.data)??this.chapters[c])}catch(n){throw this.error=((e=(a=n==null?void 0:n.response)==null?void 0:a.data)==null?void 0:e.message)??"An error occurred while updating the chapter",n}},async delete(s){var o,a;this.error=null;try{await y.delete(`/chapters/${s}`),this.chapters=this.chapters.filter(e=>e.id!==s)}catch(e){throw this.error=((a=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:a.message)??"An error occurred while deleting the chapter",e}}}}),E=s=>(g("data-v-3198cb5e"),s=s(),x(),s),K={class:"modal"},P={class:"modal-content space-y-2"},W=E(()=>t("h2",null,"Add Chapter",-1)),X={key:0,class:"text-red-500"},Y={key:1,class:"text-red-500"},Z={class:"flex gap-4"},ee=E(()=>t("button",{type:"submit",class:"btn-2"},"Add",-1)),te={__name:"AddChapterModal",props:{subjectId:{type:Number,required:!0}},emits:["close"],setup(s,{emit:o}){const a=o,e=s,n=w(),c=p(""),r=p({}),i=async()=>{r.value={};try{await n.store({name:c.value,subject_id:e.subjectId}),c.value="",a("close")}catch(u){u.response&&u.response.data&&u.response.data.errors&&(r.value=u.response.data.errors)}};return(u,d)=>(l(),h("div",K,[t("div",P,[W,t("form",{onSubmit:I(i,["prevent"]),class:"space-y-2"},[A(t("input",{class:"input-1","onUpdate:modelValue":d[0]||(d[0]=_=>c.value=_),placeholder:"Chapter name",required:""},null,512),[[D,c.value]]),r.value.name?(l(),h("div",X,m(r.value.name[0]),1)):v("",!0),r.value.subject_id?(l(),h("div",Y,m(r.value.subject_id[0]),1)):v("",!0),t("div",Z,[ee,t("button",{type:"button",onClick:d[1]||(d[1]=_=>a("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},se=j(te,[["__scopeId","data-v-3198cb5e"]]),q=s=>(g("data-v-a74a6de1"),s=s(),x(),s),ae={class:"modal"},oe={class:"modal-content space-y-2"},ce=q(()=>t("h2",null,"Edit Chapter",-1)),re={key:0,class:"text-red-500"},ne={key:1,class:"text-red-500"},le={class:"flex gap-4"},de=q(()=>t("button",{type:"submit",class:"btn-2"},"Save",-1)),ie={__name:"EditChapterModal",props:{chapter:{type:Object,required:!0}},emits:["close"],setup(s,{emit:o}){var u;const a=o,e=s,n=w(),c=p(((u=e.chapter)==null?void 0:u.name)||""),r=p({});k(()=>e.chapter,d=>{d&&(c.value=d.name)},{immediate:!0});const i=async()=>{r.value={};try{await n.update(e.chapter.id,{name:c.value,subject_id:e.chapter.subject_id}),a("close")}catch(d){d.response&&d.response.data&&d.response.data.errors&&(r.value=d.response.data.errors)}};return(d,_)=>(l(),h("div",ae,[t("div",oe,[ce,t("form",{onSubmit:I(i,["prevent"]),class:"space-y-2"},[A(t("input",{class:"input-1","onUpdate:modelValue":_[0]||(_[0]=b=>c.value=b),placeholder:"Chapter name",required:""},null,512),[[D,c.value]]),r.value.name?(l(),h("div",re,m(r.value.name[0]),1)):v("",!0),r.value.subject_id?(l(),h("div",ne,m(r.value.subject_id[0]),1)):v("",!0),t("div",le,[de,t("button",{type:"button",onClick:_[1]||(_[1]=b=>a("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},ue=j(ie,[["__scopeId","data-v-a74a6de1"]]),he=s=>(g("data-v-bfd49cca"),s=s(),x(),s),pe={key:0,class:"modal"},_e={class:"modal-content space-y-2"},ve=he(()=>t("h2",null,"Delete Chapter",-1)),me={key:0,class:"text-red-500"},fe={class:"flex gap-4"},ye={__name:"DeleteChapterModal",props:{chapter:{type:Object,required:!0,default:()=>({name:"",id:null})}},emits:["close"],setup(s,{emit:o}){const a=o,e=s,n=w(),c=p({});k(()=>e.chapter,i=>{},{immediate:!0});const r=async()=>{c.value={};try{await n.delete(e.chapter.id),a("close")}catch(i){i.response&&i.response.data&&i.response.data.errors&&(c.value=i.response.data.errors)}};return(i,u)=>e.chapter&&e.chapter.name?(l(),h("div",pe,[t("div",_e,[ve,t("p",null,"Are you sure you want to delete the chapter: "+m(e.chapter.name)+"?",1),c.value.subject_id?(l(),h("div",me,m(c.value.subject_id[0]),1)):v("",!0),t("div",fe,[t("button",{onClick:r,class:"btn-2"},"Delete"),t("button",{type:"button",onClick:u[0]||(u[0]=d=>a("close")),class:"btn-contrast"},"Cancel")])])])):v("",!0)}},be=j(ye,[["__scopeId","data-v-bfd49cca"]]),Ce={class:"my-container space-y-2"},we=t("h1",{class:"title-lg"},"Chapters",-1),$e={key:0,class:"flex justify-center items-center"},ge=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),xe=[ge],ke={key:1},je={key:0,class:"grid md:grid-cols-3 gap-4"},Me={class:"flex flex-col items-center"},Se=t("i",{class:"fad fa-folder text-4xl"},null,-1),Ie={class:"title-md"},Ae={class:"absolute top-4 right-4 flex gap-2"},De=["onClick"],Ee=t("i",{class:"fad fa-edit"},null,-1),qe=[Ee],Ne=["onClick"],Ve=t("i",{class:"fad fa-trash"},null,-1),Le=[Ve],ze={key:1,class:"text-red-500"},Oe={__name:"ChapterList",setup(s){const o=F(),a=p(o.params.id),e=w(),n=p(!1),c=p(!1),r=p(!1),i=p(null),u=p(!0),d=()=>n.value=!0,_=()=>n.value=!1,b=f=>{i.value=f,c.value=!0},N=()=>c.value=!1,V=f=>{i.value=f,r.value=!0},L=()=>r.value=!1,M=async()=>{try{u.value=!0,await e.index(a.value)}finally{u.value=!1}};return O(M),k(()=>o.params.id,async f=>{a.value=f,await M()}),(f,Be)=>{const z=T("RouterLink");return l(),h("div",Ce,[t("div",{class:"flex justify-between"},[we,t("button",{class:"btn-2",onClick:d},"Add Chapter")]),u.value?(l(),h("div",$e,xe)):(l(),h("div",ke,[S(e).chapters.length?(l(),h("div",je,[(l(!0),h(U,null,H(S(e).chapters,C=>(l(),h("div",{key:C.id,class:"relative card-bg items-center p-4"},[t("div",Me,[Se,t("p",Ie,m(C.name),1)]),t("div",Ae,[t("button",{onClick:B=>b(C)},qe,8,De),t("button",{onClick:B=>V(C),class:"text-red-500"},Le,8,Ne)]),Q(z,{to:"",class:"btn-link"},{default:G(()=>[J(" See Questions ")]),_:1})]))),128))])):(l(),h("p",ze,"No chapters found"))])),n.value?(l(),$(se,{key:2,class:"z-40",subjectId:a.value,onClose:_},null,8,["subjectId"])):v("",!0),c.value?(l(),$(ue,{key:3,class:"z-40",chapter:i.value,onClose:N},null,8,["chapter"])):v("",!0),r.value?(l(),$(be,{key:4,class:"z-40",chapter:i.value,onClose:L},null,8,["chapter"])):v("",!0)])}}};export{Oe as default};