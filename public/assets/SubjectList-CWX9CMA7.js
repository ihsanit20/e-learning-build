import{J as N,K as g,r as m,d as b,i as c,e as t,y as D,z as I,p as y,A as L,t as f,w,b as z,o as R,j as k,B as C,s as M,x as F,g as A,F as O,f as T,q as U}from"./index-JvEbh5Ug.js";const x=N("subject",{state:()=>({subjects:[],error:null,loading:!1}),actions:{async index(i){var l,s;this.loading=!0,this.error=null;try{const e=await g.get(`/subjects?category_id=${i}`);return this.subjects=(e==null?void 0:e.data)??[],this.subjects}catch(e){this.error=((s=(l=e==null?void 0:e.response)==null?void 0:l.data)==null?void 0:s.message)??"An error occurred while fetching subjects"}finally{this.loading=!1}},async store(i){var l,s;this.error=null;try{const e=await g.post("/subjects",i);this.subjects.push(e==null?void 0:e.data)}catch(e){throw this.error=((s=(l=e==null?void 0:e.response)==null?void 0:l.data)==null?void 0:s.message)??"An error occurred while creating the subject",e}},async update(i,l){var s,e;this.error=null;try{const r=await g.put(`/subjects/${i}`,l),a=this.subjects.findIndex(o=>o.id===i);a!==-1&&(this.subjects[a]=(r==null?void 0:r.data)??this.subjects[a])}catch(r){throw this.error=((e=(s=r==null?void 0:r.response)==null?void 0:s.data)==null?void 0:e.message)??"An error occurred while updating the subject",r}},async delete(i){var l,s;this.error=null;try{await g.delete(`/subjects/${i}`),this.subjects=this.subjects.filter(e=>e.id!==i)}catch(e){throw this.error=((s=(l=e==null?void 0:e.response)==null?void 0:l.data)==null?void 0:s.message)??"An error occurred while deleting the subject",e}}}}),J={class:"modal"},K={class:"modal-content space-y-2"},Q={key:0,class:"text-red-500"},G={key:1,class:"text-red-500"},H={class:"flex gap-4"},P={__name:"AddSubjectModal",props:{categoryId:{required:!0}},emits:["close"],setup(i,{emit:l}){const s=l,e=i,r=x(),a=m(""),o=m({}),d=async()=>{o.value={};try{await r.store({name:a.value,category_id:e.categoryId}),a.value="",s("close")}catch(u){u.response&&u.response.data&&u.response.data.errors&&(o.value=u.response.data.errors)}};return(u,n)=>(c(),b("div",J,[t("div",K,[n[3]||(n[3]=t("h2",null,"Add Subject",-1)),t("form",{onSubmit:D(d,["prevent"]),class:"space-y-2"},[I(t("input",{class:"input-1","onUpdate:modelValue":n[0]||(n[0]=v=>a.value=v),placeholder:"Subject name",required:""},null,512),[[L,a.value]]),o.value.name?(c(),b("div",Q,f(o.value.name[0]),1)):y("",!0),o.value.category_id?(c(),b("div",G,f(o.value.category_id[0]),1)):y("",!0),t("div",H,[n[2]||(n[2]=t("button",{type:"submit",class:"btn-2"},"Add",-1)),t("button",{type:"button",onClick:n[1]||(n[1]=v=>s("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},W={class:"modal"},X={class:"modal-content space-y-2"},Y={key:0,class:"text-red-500"},Z={key:1,class:"text-red-500"},ee={class:"flex gap-4"},te={__name:"EditSubjectModal",props:{subject:{type:Object,required:!0}},emits:["close"],setup(i,{emit:l}){var u;const s=l,e=i,r=x(),a=m(((u=e.subject)==null?void 0:u.name)||""),o=m({});w(()=>e.subject,n=>{n&&(a.value=n.name)},{immediate:!0});const d=async()=>{o.value={};try{await r.update(e.subject.id,{name:a.value,category_id:e.subject.category_id}),s("close")}catch(n){n.response&&n.response.data&&n.response.data.errors&&(o.value=n.response.data.errors)}};return(n,v)=>(c(),b("div",W,[t("div",X,[v[3]||(v[3]=t("h2",null,"Edit Subject",-1)),t("form",{onSubmit:D(d,["prevent"]),class:"space-y-2"},[I(t("input",{class:"input-1","onUpdate:modelValue":v[0]||(v[0]=j=>a.value=j),placeholder:"Subject name",required:""},null,512),[[L,a.value]]),o.value.name?(c(),b("div",Y,f(o.value.name[0]),1)):y("",!0),o.value.category_id?(c(),b("div",Z,f(o.value.category_id[0]),1)):y("",!0),t("div",ee,[v[2]||(v[2]=t("button",{type:"submit",class:"btn-2"},"Save",-1)),t("button",{type:"button",onClick:v[1]||(v[1]=j=>s("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},se={key:0,class:"modal"},ae={class:"modal-content space-y-2"},oe={key:0,class:"text-red-500"},ne={class:"flex gap-4"},le={__name:"DeleteSubjectModal",props:{subject:{type:Object,required:!0,default:()=>({name:"",id:null})}},emits:["close"],setup(i,{emit:l}){const s=l,e=i,r=x(),a=m({});w(()=>e.subject,d=>{},{immediate:!0});const o=async()=>{a.value={};try{await r.delete(e.subject.id),s("close")}catch(d){d.response&&d.response.data&&d.response.data.errors&&(a.value=d.response.data.errors)}};return(d,u)=>e.subject&&e.subject.name?(c(),b("div",se,[t("div",ae,[u[1]||(u[1]=t("h2",null,"Delete Subject",-1)),t("p",null,"Are you sure you want to delete the subject: "+f(e.subject.name)+"?",1),a.value.category_id?(c(),b("div",oe,f(a.value.category_id[0]),1)):y("",!0),t("div",ne,[t("button",{onClick:o,class:"btn-2"},"Delete"),t("button",{type:"button",onClick:u[0]||(u[0]=n=>s("close")),class:"btn-contrast"},"Cancel")])])])):y("",!0)}},re={class:"my-container space-y-2"},ce={class:"flex justify-between"},ue={class:"flex items-center gap-4"},ie={key:0,class:"flex justify-center items-center"},de={key:1},be={key:0,class:"grid md:grid-cols-3 gap-4"},pe={class:"flex flex-col items-center"},ve={class:"title-md"},me={class:"absolute top-4 right-4 flex gap-2"},ye=["onClick"],fe=["onClick"],_e={key:1,class:"text-red-500"},je={__name:"SubjectList",setup(i){const l=z(),s=m(l.params.id),e=x(),r=m(!1),a=m(!1),o=m(!1),d=m(null),u=m(!0),n=()=>r.value=!0,v=()=>r.value=!1,j=_=>{d.value=_,a.value=!0},q=()=>a.value=!1,B=_=>{d.value=_,o.value=!0},E=()=>o.value=!1,S=async()=>{try{u.value=!0,await e.index(s.value)}finally{u.value=!1}};return R(S),w(()=>l.params.id,async _=>{s.value=_,await S()}),(_,p)=>{const $=F("RouterLink");return c(),b("div",re,[t("div",ce,[t("div",ue,[C($,{class:"btn-3",to:{name:"QuestionBank"}},{default:M(()=>p[0]||(p[0]=[t("i",{class:"fas fa-arrow-left"},null,-1)])),_:1}),p[1]||(p[1]=t("h4",{class:"title-lg"},"Subject List",-1))]),t("button",{class:"btn-2",onClick:n},"Add Subject")]),u.value?(c(),b("div",ie,p[2]||(p[2]=[t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(c(),b("div",de,[A(e).subjects.length?(c(),b("div",be,[(c(!0),b(O,null,T(A(e).subjects,h=>(c(),b("div",{key:h.id,class:"relative card-bg items-center p-4"},[t("div",pe,[p[3]||(p[3]=t("i",{class:"fad fa-folder text-4xl"},null,-1)),t("p",ve,f(h.name),1)]),t("div",me,[t("button",{onClick:V=>j(h)},p[4]||(p[4]=[t("i",{class:"fad fa-edit"},null,-1)]),8,ye),t("button",{onClick:V=>B(h),class:"text-red-500"},p[5]||(p[5]=[t("i",{class:"fad fa-trash"},null,-1)]),8,fe)]),C($,{to:{name:"ChapterList",params:{categoryId:s.value,id:h.id}},class:"btn-link"},{default:M(()=>p[6]||(p[6]=[U(" See Chapters ")])),_:2},1032,["to"])]))),128))])):(c(),b("p",_e,"No subjects found"))])),r.value?(c(),k(P,{key:2,class:"z-40",categoryId:s.value,onClose:v},null,8,["categoryId"])):y("",!0),a.value?(c(),k(te,{key:3,class:"z-40",subject:d.value,onClose:q},null,8,["subject"])):y("",!0),o.value?(c(),k(le,{key:4,class:"z-40",subject:d.value,onClose:E},null,8,["subject"])):y("",!0)])}}};export{je as default};
