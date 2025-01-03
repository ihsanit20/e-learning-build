import{$ as W,a0 as V,c as Oe,b as me,r as n,o as pe,e as y,f as g,g as e,y as q,z as k,A as M,a3 as ve,F as U,h as O,t as E,i as F,n as T,q as j,w as P,Z as Ae,C as L,v as S,E as I,m as ze,s as z,j as fe,x as Fe,u as Ne}from"./index-DIWD3pil.js";import{_ as xe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as ye}from"./exam-T4Rvnk27.js";const B=W("module",{state:()=>({modules:[]}),actions:{async fetchModules(t){try{const o=await V.get(`/courses/${t}/modules`);this.modules=o.data}catch(o){console.error("Failed to fetch modules:",o)}},async addModule(t,o){try{const l=await V.post("/modules",{course_id:t,...o});this.modules.push(l.data)}catch(l){console.error("Failed to add module:",l)}},async updateModule(t,o){try{const l=await V.put(`/modules/${t}`,o),s=this.modules.findIndex(w=>w.id===t);s!==-1&&(this.modules[s]=l.data)}catch(l){console.error("Failed to update module:",l)}},async deleteModule(t){try{await V.delete(`/modules/${t}`),this.modules=this.modules.filter(o=>o.id!==t)}catch(o){console.error("Failed to delete module:",o)}}}}),Re={key:0,class:"flex items-center justify-center"},Ie={class:"card-bg p-4 md:p-8 w-full max-w-6xl"},Pe={class:"grid md:grid-cols-5 gap-4"},Be=["value"],Qe={class:"flex items-center gap-2"},Ye={class:"flex items-center gap-2"},Ge={__name:"ModuleAddModal",props:{isOpen:Boolean},emits:["add-module","close"],setup(t,{emit:o}){const l=o,s=B(),w=Oe(),m=me(),p=n(""),i=n(""),f=n(""),d=n(""),u=n(!1),a=n(!1),r=n(""),_=n("");pe(()=>{s.fetchModules(m.params.id)});const C=async()=>{const b=m.params.id,x={title:p.value,description:i.value,order:f.value,duration:d.value,is_active:u.value,is_paid:a.value,prerequisite_module_id:r.value};try{await s.addModule(b,x),_.value="Module is added",p.value="",i.value="",f.value="",d.value="",u.value=!1,a.value=!1,r.value="",setTimeout(()=>{w.push(`/course-list/${b}/modules`)},2e3)}catch($){console.error("Failed to add module:",$)}},c=()=>{l("close")};return(b,x)=>t.isOpen?(y(),g("div",Re,[e("div",Ie,[x[16]||(x[16]=e("h2",{class:"title-md text-center"},"Add Module",-1)),e("form",{onSubmit:q(C,["prevent"]),class:"space-y-2"},[e("div",null,[x[7]||(x[7]=e("p",null,"Title:",-1)),k(e("input",{class:"input-1","onUpdate:modelValue":x[0]||(x[0]=$=>p.value=$),required:"",placeholder:"Title"},null,512),[[M,p.value]])]),e("div",null,[x[8]||(x[8]=e("p",null,"Description:",-1)),k(e("textarea",{"onUpdate:modelValue":x[1]||(x[1]=$=>i.value=$),class:"input-1"},null,512),[[M,i.value]])]),e("div",Pe,[e("div",null,[x[9]||(x[9]=e("p",null,"Module Order:",-1)),k(e("input",{class:"input-1","onUpdate:modelValue":x[2]||(x[2]=$=>f.value=$),type:"number"},null,512),[[M,f.value]])]),e("div",null,[x[10]||(x[10]=e("p",null,"Duration (minutes):",-1)),k(e("input",{class:"input-1","onUpdate:modelValue":x[3]||(x[3]=$=>d.value=$),type:"number"},null,512),[[M,d.value,void 0,{number:!0}]])]),e("div",null,[x[12]||(x[12]=e("label",{for:"prerequisite_module_id"},"Prerequisite Module:",-1)),k(e("select",{id:"prerequisite_module_id","onUpdate:modelValue":x[4]||(x[4]=$=>r.value=$),class:"input-1"},[x[11]||(x[11]=e("option",{value:""},"Select a prerequisite module",-1)),(y(!0),g(U,null,O(F(s).modules,$=>(y(),g("option",{key:$.id,value:$.id},E($.title),9,Be))),128))],512),[[ve,r.value]])]),e("div",Qe,[e("div",{onClick:x[5]||(x[5]=$=>u.value=!u.value),class:T(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":u.value}])},[e("div",{class:T(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":u.value}])},null,2)],2),x[13]||(x[13]=e("label",{for:"is_active",class:""},"Active",-1))]),e("div",Ye,[e("div",{onClick:x[6]||(x[6]=$=>a.value=!a.value),class:T(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":a.value}])},[e("div",{class:T(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":a.value}])},null,2)],2),x[14]||(x[14]=e("label",{for:"is_paid",class:""},"Paid",-1))])]),e("div",{class:"flex justify-end gap-4"},[x[15]||(x[15]=e("button",{type:"submit",class:"btn-2"},"Add",-1)),e("button",{type:"button",onClick:c,class:"btn-contrast"},"Close")])],32)])])):j("",!0)}},Ze={key:0,class:"modal"},He={class:"card-bg p-4 md:p-8 w-full max-w-5xl mx-2"},Je=["value"],Ke={class:"flex items-center gap-2"},We={class:"flex items-center gap-2"},Xe={__name:"ModuleEditModal",props:{module:Object,isOpen:Boolean},emits:["update","close"],setup(t,{emit:o}){const l=t,s=o,w=B(),m=n(""),p=n(""),i=n(0),f=n(0),d=n(!1),u=n(!1),a=n(0);P(()=>l.module,C=>{C&&(m.value=C.title||"",p.value=C.description||"",i.value=C.order||0,f.value=C.duration||0,d.value=C.is_active||!1,u.value=C.is_paid||!1,a.value=C.prerequisite_module_id||null)},{immediate:!0});const r=async()=>{const C={id:l.module.id,title:m.value,description:p.value,order:i.value,duration:f.value,is_active:d.value,is_paid:u.value,prerequisite_module_id:a.value};try{await w.updateModule(l.module.id,C),s("update",C),s("close")}catch(c){console.error("Error updating module:",c)}},_=()=>{s("close")};return(C,c)=>t.isOpen?(y(),g("div",Ze,[e("div",He,[c[15]||(c[15]=e("h2",{class:"title-md text-center"},"Edit Module",-1)),e("div",null,[c[7]||(c[7]=e("p",null,"Title:",-1)),k(e("input",{class:"input-1","onUpdate:modelValue":c[0]||(c[0]=b=>m.value=b),required:"",placeholder:"Title"},null,512),[[M,m.value]])]),e("div",null,[c[8]||(c[8]=e("p",null,"Description:",-1)),k(e("textarea",{"onUpdate:modelValue":c[1]||(c[1]=b=>p.value=b),class:"input-1"},null,512),[[M,p.value]])]),e("div",null,[c[9]||(c[9]=e("p",null,"Order:",-1)),k(e("input",{class:"input-1","onUpdate:modelValue":c[2]||(c[2]=b=>i.value=b),type:"number"},null,512),[[M,i.value]])]),e("div",null,[c[10]||(c[10]=e("label",{for:"duration",class:"block text-sm font-medium text-gray-700"},"Duration (minutes):",-1)),k(e("input",{type:"number",id:"duration","onUpdate:modelValue":c[3]||(c[3]=b=>f.value=b),class:"input-1"},null,512),[[M,f.value,void 0,{number:!0}]])]),e("div",null,[c[12]||(c[12]=e("label",{for:"prerequisite_module_id"},"Prerequisite Module:",-1)),k(e("select",{id:"prerequisite_module_id","onUpdate:modelValue":c[4]||(c[4]=b=>a.value=b),class:"input-1"},[c[11]||(c[11]=e("option",{value:""},"Select a prerequisite module",-1)),(y(!0),g(U,null,O(F(w).modules,b=>(y(),g("option",{key:b.id,value:b.id},E(b.title),9,Je))),128))],512),[[ve,a.value]])]),e("div",Ke,[e("div",{onClick:c[5]||(c[5]=b=>d.value=!d.value),class:T(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":d.value}])},[e("div",{class:T(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":d.value}])},null,2)],2),c[13]||(c[13]=e("label",{class:"ml-2 block text-sm text-gray-900"},"Active",-1))]),e("div",We,[e("div",{onClick:c[6]||(c[6]=b=>u.value=!u.value),class:T(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":u.value}])},[e("div",{class:T(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":u.value}])},null,2)],2),c[14]||(c[14]=e("label",{class:"ml-2 block text-sm text-gray-900"},"Paid",-1))]),e("div",{class:"flex justify-center gap-4"},[e("button",{onClick:r,class:"btn-2"},"Save"),e("button",{onClick:_,class:"btn-contrast"},"Close")])])])):j("",!0)}},et=xe(Xe,[["__scopeId","data-v-702f4702"]]),tt={key:0,class:"fixed inset-0 flex items-center justify-center z-50"},lt={class:"modal-container bg-white w-full md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"},st={class:"p-6"},ot={class:"mb-4"},at={key:0,class:"text-gray-700"},it={__name:"ModuleDeleteModal",props:{isOpen:Boolean,module:Object},emits:["close","confirmDelete"],setup(t,{emit:o}){const l=t,s=o,w=B(),m=async()=>{l.module&&(await w.deleteModule(l.module.id),s("confirmDelete"),s("close"))},p=()=>{s("close")};return(i,f)=>l.isOpen?(y(),g("div",tt,[f[1]||(f[1]=e("div",{class:"modal-overlay absolute inset-0 bg-gray-500 opacity-75"},null,-1)),e("div",lt,[e("div",st,[e("div",ot,[f[0]||(f[0]=e("h2",{class:"text-2xl font-bold mb-4"},"Delete Module",-1)),l.module?(y(),g("p",at,' Are you sure you want to delete "'+E(l.module.title)+'"? ',1)):j("",!0)]),e("div",{class:"flex justify-end"},[e("div",{class:"flex space-x-4 justify-center"},[e("button",{class:"btn-contrast",onClick:m},"Yes"),e("button",{class:"btn-2",onClick:p},"No")])])])])])):j("",!0)}},nt=xe(it,[["__scopeId","data-v-668780de"]]),X=W("material",{state:()=>({materials:{}}),actions:{async fetchMaterials(t){try{const o=await V.get(`/modules/${t}/materials`);this.materials={...this.materials,[t]:o.data}}catch(o){console.error("Error fetching materials:",o)}},async addMaterial(t,o){try{const l=await V.post(`/modules/${t}/materials`,o);this.materials[t]||(this.materials[t]=[]),this.materials[t]=[...this.materials[t],l.data]}catch(l){console.error("Error adding material:",l)}},async deleteMaterial(t,o){try{await V.delete(`/modules/${t}/materials/${o}`),this.materials[t]&&(this.materials[t]=this.materials[t].filter(l=>l.id!==o))}catch(l){console.error("Error deleting material:",l)}},async updateMaterial(t,o,l){try{const s=await V.put(`/modules/${t}/materials/${o}`,l);if(this.materials[t]){const w=this.materials[t].findIndex(m=>m.id===o);w!==-1&&(this.materials[t][w]=s.data)}}catch(s){console.error("Error updating material:",s)}}}}),ee=W("lecture",{state:()=>({lectures:{}}),actions:{async fetchLectures(t){try{const o=await V.get(`/modules/${t}/lectures`);this.lectures={...this.lectures,[t]:o.data}}catch(o){console.error("Error fetching lectures:",o)}},async addLecture(t,o){try{const l=await V.post(`/modules/${t}/lectures`,o);this.lectures[t]||(this.lectures[t]=[]),this.lectures[t]=[...this.lectures[t],l.data]}catch(l){console.error("Error adding lecture:",l)}},async deleteLecture(t,o){try{await V.delete(`/modules/${t}/lectures/${o}`),this.lectures[t]&&(this.lectures[t]=this.lectures[t].filter(l=>l.id!==o))}catch(l){console.error("Error deleting lecture:",l)}},async updateLecture(t,o,l){try{const s=await V.put(`/modules/${t}/lectures/${o}`,l);if(this.lectures[t]){const w=this.lectures[t].findIndex(m=>m.id===o);w!==-1&&(this.lectures[t][w]=s.data)}}catch(s){console.error("Error updating lecture:",s)}}}}),ut={__name:"AddExam",props:{moduleId:{required:!0},examType:{type:String,required:!0}},emits:["submit"],setup(t,{emit:o}){const l=t,s=n({title:"",duration:"",opening_time:"",result_publish_time:"",link:""}),w=o,m=()=>{const p={module_id:l.moduleId,title:s.value.title,type:l.examType,duration:s.value.duration,opening_time:s.value.opening_time,result_publish_time:s.value.result_publish_time,link:s.value.link};w("submit",p),s.value={title:"",duration:"",opening_time:"",link:""}};return(p,i)=>(y(),g("div",null,[e("form",{onSubmit:q(m,["prevent"]),class:"space-y-4"},[e("div",null,[i[4]||(i[4]=e("label",null,"Exam Title:",-1)),k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":i[0]||(i[0]=f=>s.value.title=f),placeholder:"Title",required:""},null,512),[[M,s.value.title]])]),e("div",null,[i[5]||(i[5]=e("label",null,"Duration (minutes):",-1)),k(e("input",{class:"input-1",type:"number","onUpdate:modelValue":i[1]||(i[1]=f=>s.value.duration=f),placeholder:"Duration",required:""},null,512),[[M,s.value.duration]])]),e("div",null,[i[6]||(i[6]=e("label",null,"Opening Time:",-1)),k(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":i[2]||(i[2]=f=>s.value.opening_time=f),placeholder:"Opening Date & Time",required:""},null,512),[[M,s.value.opening_time]])]),e("div",null,[i[7]||(i[7]=e("label",null,"Result Publish Time:",-1)),k(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":i[3]||(i[3]=f=>s.value.result_publish_time=f),placeholder:"Opening Date & Time",required:""},null,512),[[M,s.value.result_publish_time]])]),i[8]||(i[8]=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-2"},"Add Exam")],-1))],32)]))}},dt={class:"flex flex-col md:flex-row items-center gap-x-2"},rt={key:0,class:"w-full md:w-60 text-left md:text-right"},R={__name:"FormLabel",props:["label"],setup(t){return(o,l)=>(y(),g("label",dt,[t.label?(y(),g("span",rt,E(t.label),1)):j("",!0),Ae(o.$slots,"default")]))}},ct={__name:"EditExamForm",props:{exam:Object},emits:["close"],setup(t,{emit:o}){const l=t,s=o,w=ye(),m=n(l.exam.title),p=n(l.exam.duration),i=n(l.exam.opening_time),f=n(l.exam.result_publish_time),d=n(l.exam.link),u=async()=>{const a={...l.exam,title:m.value,duration:p.value,opening_time:i.value,result_publish_time:f.value,link:d.value};try{await w.updateExam(l.exam.module_id,l.exam.id,a),s("close")}catch(r){console.error("Error updating exam:",r)}};return P(()=>l.exam,a=>{m.value=a.title,p.value=a.duration,i.value=a.opening_time,d.value=a.link},{immediate:!0}),(a,r)=>(y(),g("div",null,[e("form",{onSubmit:q(u,["prevent"]),class:"space-y-4"},[L(R,{label:"Exam Title"},{default:S(()=>[k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":r[0]||(r[0]=_=>m.value=_),placeholder:"Exam Title",required:""},null,512),[[M,m.value]])]),_:1}),L(R,{label:"Duration (minutes)"},{default:S(()=>[k(e("input",{class:"input-1",type:"number","onUpdate:modelValue":r[1]||(r[1]=_=>p.value=_),placeholder:"Duration (minutes)",required:""},null,512),[[M,p.value]])]),_:1}),L(R,{label:"Opening Time"},{default:S(()=>[k(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":r[2]||(r[2]=_=>i.value=_),placeholder:"Opening Date & Time",required:""},null,512),[[M,i.value]])]),_:1}),L(R,{label:"Result Publish"},{default:S(()=>[k(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":r[3]||(r[3]=_=>f.value=_),placeholder:"Result Publish Time",required:""},null,512),[[M,f.value]])]),_:1}),r[4]||(r[4]=e("hr",{class:"my-3"},null,-1)),r[5]||(r[5]=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1))],32)]))}},mt={class:"flex flex-col md:flex-row md:justify-center"},pt={__name:"AddLecture",props:{moduleId:Number,courseId:Number},setup(t){const o=t,l=ee(),s=n(""),w=n(""),m=n(""),p=n(""),i=n("video"),f=async()=>{const d={course_id:o.courseId,module_id:o.moduleId,title:s.value,link:w.value,description:m.value,type:i.value,opening_time:p.value};try{await l.addLecture(o.moduleId,d),s.value="",w.value="",m.value="",i.value="video",p.value=""}catch(u){console.error("Error adding lecture:",u)}};return(d,u)=>(y(),g("div",null,[e("form",{onSubmit:q(f,["prevent"]),class:"space-y-4"},[k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":u[0]||(u[0]=a=>s.value=a),placeholder:"Title",required:""},null,512),[[M,s.value]]),e("div",mt,[e("div",null,[k(e("input",{type:"radio",id:"video",value:"video","onUpdate:modelValue":u[1]||(u[1]=a=>i.value=a),class:"mr-2"},null,512),[[I,i.value]]),u[6]||(u[6]=e("label",{for:"video",class:"mr-4"},"Recorded Video",-1))]),e("div",null,[k(e("input",{type:"radio",id:"virtual_platform",value:"virtual_platform","onUpdate:modelValue":u[2]||(u[2]=a=>i.value=a),class:"mr-2"},null,512),[[I,i.value]]),u[7]||(u[7]=e("label",{for:"virtual_platform"},"Live Class Link",-1))])]),k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":u[3]||(u[3]=a=>w.value=a),placeholder:"Link",required:""},null,512),[[M,w.value]]),k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":u[4]||(u[4]=a=>m.value=a),placeholder:"Description"},null,512),[[M,m.value]]),k(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":u[5]||(u[5]=a=>p.value=a),placeholder:"Opening Date & Time",required:""},null,512),[[M,p.value]]),u[8]||(u[8]=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Add Lecture")],-1))],32)]))}},vt={class:"flex flex-col md:flex-row md:justify-center"},ft={__name:"EditLectureForm",props:{lecture:Object},emits:["close"],setup(t,{emit:o}){const l=t,s=o,w=ee(),m=n(l.lecture.title),p=n(l.lecture.link),i=n(l.lecture.description),f=n(l.lecture.opening_time),d=n(l.lecture.type),u=async()=>{const a={...l.lecture,title:m.value,link:p.value,description:i.value,type:d.value,opening_time:f.value};try{await w.updateLecture(l.lecture.module_id,l.lecture.id,a),s("close")}catch(r){console.error("Error updating lecture:",r)}};return P(()=>l.lecture,a=>{m.value=a.title,p.value=a.link,i.value=a.description,d.value=a.type,f.value=a.opening_time},{immediate:!0}),(a,r)=>(y(),g("div",null,[e("form",{onSubmit:q(u,["prevent"]),class:"space-y-4"},[k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":r[0]||(r[0]=_=>m.value=_),placeholder:"Title",required:""},null,512),[[M,m.value]]),e("div",vt,[e("div",null,[k(e("input",{type:"radio",id:"video",value:"video","onUpdate:modelValue":r[1]||(r[1]=_=>d.value=_),class:"mr-2"},null,512),[[I,d.value]]),r[6]||(r[6]=e("label",{for:"video",class:"mr-4"},"Recorded Video",-1))]),e("div",null,[k(e("input",{type:"radio",id:"virtual_platform",value:"virtual_platform","onUpdate:modelValue":r[2]||(r[2]=_=>d.value=_),class:"mr-2"},null,512),[[I,d.value]]),r[7]||(r[7]=e("label",{for:"virtual_platform"},"Live Class Link",-1))])]),k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":r[3]||(r[3]=_=>p.value=_),placeholder:"Link",required:""},null,512),[[M,p.value]]),k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":r[4]||(r[4]=_=>i.value=_),placeholder:"Description"},null,512),[[M,i.value]]),k(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":r[5]||(r[5]=_=>f.value=_),placeholder:"Opening Date & Time",required:""},null,512),[[M,f.value]]),r[8]||(r[8]=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1))],32)]))}},xt={class:"mt-4"},yt={class:"mt-4"},bt={class:"mt-4"},gt={class:"mt-4"},wt={__name:"AddMaterial",props:{moduleId:Number,courseId:Number},setup(t){const o=t,l=X(),s=n(""),w=n(""),m=n(""),p=n(""),i=async()=>{const f={course_id:o.courseId,module_id:o.moduleId,title:s.value,link:w.value,description:m.value,opening_time:p.value};try{await l.addMaterial(o.moduleId,f),s.value="",w.value="",m.value="",p.value=""}catch(d){console.error("Error adding material:",d)}};return(f,d)=>(y(),g("div",null,[e("form",{onSubmit:q(i,["prevent"]),class:""},[e("div",xt,[d[4]||(d[4]=e("label",{class:"text-sm"},"Material Title",-1)),k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":d[0]||(d[0]=u=>s.value=u),placeholder:"Title",required:""},null,512),[[M,s.value]])]),e("div",yt,[d[5]||(d[5]=e("label",{class:"text-sm"},"Google Drive Link (Anyone with the link)",-1)),k(e("input",{class:"input-1",type:"url","onUpdate:modelValue":d[1]||(d[1]=u=>w.value=u),placeholder:"Link",required:""},null,512),[[M,w.value]])]),e("div",bt,[d[6]||(d[6]=e("label",{class:"text-sm"},"Description (Optional)",-1)),k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":d[2]||(d[2]=u=>m.value=u),placeholder:"Description"},null,512),[[M,m.value]])]),e("div",gt,[d[7]||(d[7]=e("label",{class:"text-sm"},"Opening Date & Time",-1)),k(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":d[3]||(d[3]=u=>p.value=u),placeholder:"Opening Date & Time",required:""},null,512),[[M,p.value]])]),d[8]||(d[8]=e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{type:"submit",class:"btn-2"},"Add Material")],-1))],32)]))}},kt={class:"mt-4"},Mt={class:"mt-4"},_t={class:"mt-4"},ht={class:"mt-4"},$t={__name:"EditMaterialForm",props:{material:Object},emits:["close"],setup(t,{emit:o}){const l=t,s=o,w=X(),m=n(l.material.title),p=n(l.material.link),i=n(l.material.description),f=n(l.material.opening_time),d=async()=>{const u={...l.material,title:m.value,link:p.value,description:i.value,opening_time:f.value};try{await w.updateMaterial(l.material.module_id,l.material.id,u),s("close")}catch(a){console.error("Error updating material:",a)}};return P(()=>l.material,u=>{m.value=u.title,p.value=u.link,i.value=u.description,f.value=u.opening_time},{immediate:!0}),(u,a)=>(y(),g("div",null,[e("form",{onSubmit:q(d,["prevent"])},[e("div",kt,[a[4]||(a[4]=e("label",{class:"text-sm"},"Material Title",-1)),k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":a[0]||(a[0]=r=>m.value=r),placeholder:"Title",required:""},null,512),[[M,m.value]])]),e("div",Mt,[a[5]||(a[5]=e("label",{class:"text-sm"},"Google Drive Link (Anyone with the link)",-1)),k(e("input",{class:"input-1",type:"url","onUpdate:modelValue":a[1]||(a[1]=r=>p.value=r),placeholder:"Link",required:""},null,512),[[M,p.value]])]),e("div",_t,[a[6]||(a[6]=e("label",{class:"text-sm"},"Description (Optional)",-1)),k(e("input",{class:"input-1",type:"text","onUpdate:modelValue":a[2]||(a[2]=r=>i.value=r),placeholder:"Description"},null,512),[[M,i.value]])]),e("div",ht,[a[7]||(a[7]=e("label",{class:"text-sm"},"Opening Date & Time",-1)),k(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":a[3]||(a[3]=r=>f.value=r),placeholder:"Opening Date & Time",required:""},null,512),[[M,f.value]])]),a[8]||(a[8]=e("div",{class:"flex justify-center gap-4 mt-6"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1))],32)]))}},Et={class:"flex md:flex-row flex-col items-center gap-4"},Ct={class:"flex flex-1 items-center gap-4"},Dt={class:"text-center border-2 rounded-md p-1.5"},jt={class:"flex-1"},Lt={class:"line-clamp-1"},Tt={class:"flex items-center gap-2"},Vt={key:0},qt={class:"flex flex-col justify-center space-y-2 divide-y-2"},St={class:"flex items-center gap-4"},Ut={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},Ot={class:"text-xs"},At={key:0},zt={key:1},Ft={class:"title-sm"},Nt={class:"text-sm"},Rt={class:"flex items-center gap-2 text-sm text-gray-400"},It={class:"flex gap-2"},Pt=["onClick"],Bt=["onClick"],Qt={class:"flex items-center gap-4"},Yt={class:"title-sm"},Gt={class:"text-sm"},Zt={class:"flex items-center gap-2 text-sm text-gray-400"},Ht={class:"flex gap-2"},Jt=["onClick"],Kt=["onClick"],Wt={class:"grow shrink flex items-center gap-4"},Xt={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},el={key:0,class:"fal fa-ballot-check text-2xl"},tl={key:1,class:"fal fa-question text-3xl"},ll={class:"title-sm"},sl={class:"flex items-center gap-2 text-sm text-gray-400"},ol={class:"grow-0 flex flex-wrap justify-end max-w-[110px] md:max-w-fit gap-2"},al=["onClick"],il=["onClick"],nl={class:"flex gap-4 items-center justify-center mt-2"},ul={key:1,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},dl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},rl={class:"mt-4"},cl={key:2,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},ml={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},pl={class:"mt-4"},vl={key:3,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},fl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},xl={class:"mt-4 text-center"},yl={key:4,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},bl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},gl={class:"mt-4"},wl={key:5,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},kl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Ml={class:"mt-4"},_l={key:6,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},hl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},$l={class:"mt-4 text-center"},El={key:7,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Cl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Dl={class:"mt-4"},jl={key:8,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Ll={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Tl={class:"flex justify-end"},Vl={class:"mr-auto font-bold"},ql={class:"mt-4"},Sl={key:9,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Ul={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Ol={class:"mt-4 text-center"},Al={__name:"ModuleItem",props:{module:Object},emits:["edit","delete"],setup(t,{emit:o}){const l=t,s=ee(),w=X(),m=ye(),p=n(!1),i=n(!1),f=n(!1),d=n(!1),u=n(null),a=n(null),r=n(!1),_=n(!1),C=n(!1),c=n(null),b=n(null),x=n(!1),$=n(!1),Q=n(!1),Y=n(null),N=n(null),G=n(""),te=o,be=()=>{te("edit",l.module)},ge=()=>{te("delete",l.module)},we=async()=>{p.value=!p.value,p.value&&(await s.fetchLectures(l.module.id),await w.fetchMaterials(l.module.id),await m.fetchExams(l.module.id))},ke=()=>{i.value=!0},le=()=>{i.value=!1},Me=D=>{u.value=D,f.value=!0},se=()=>{f.value=!1},_e=D=>{a.value=D,d.value=!0},Z=()=>{d.value=!1},he=async()=>{a.value&&(await s.deleteLecture(l.module.id,a.value.id),Z())},$e=async()=>{le()},Ee=()=>{r.value=!0},oe=()=>{r.value=!1},Ce=D=>{c.value=D,_.value=!0},ae=()=>{_.value=!1},De=D=>{b.value=D,C.value=!0},H=()=>{C.value=!1},je=async()=>{b.value&&(await w.deleteMaterial(l.module.id,b.value.id),H())},Le=async()=>{oe()},J=D=>{const v=new Date(D);return Fe(v,"hh:mm a, dd-MMM-yyyy")},Te=D=>{G.value=D,x.value=!0},ie=()=>{G.value="",x.value=!1},Ve=async D=>{try{await m.addExam(l.module.id,D),ie()}catch(v){console.error("Error adding exam:",v)}},qe=D=>{Y.value=D,$.value=!0},ne=()=>{$.value=!1},Se=D=>{N.value=D,Q.value=!0},K=()=>{Q.value=!1},Ue=async()=>{N.value&&(await m.deleteExam(l.module.id,N.value.id),K())};return(D,v)=>{var de,re,ce;const ue=ze("RouterLink");return y(),g("li",{class:T(["card-bg p-4",{"bg-gray-100 border-2 border-gray-200 text-gray-400":t.module.is_active==0}])},[e("div",Et,[e("div",Ct,[e("div",Dt,[e("div",{class:T(["text-xl font-bold text-orange-500",{"!text-gray-400":t.module.is_active==0}])},E(t.module.order),3),v[2]||(v[2]=e("div",{class:"text-xs md:text-sm"},"Module",-1))]),e("div",jt,[e("h4",{class:T(["title-md",{"text-gray-400":t.module.is_active==0}])},E(t.module.title),3),e("p",Lt,E(t.module.description),1)])]),e("div",Tt,[e("button",{class:"btn-2",onClick:we},[e("i",{class:T(p.value?"fas fa-angle-up":"fas fa-angle-down")},null,2),v[3]||(v[3]=e("p",null,"Content",-1))]),e("button",{class:"btn-2 pb-2",onClick:be},v[4]||(v[4]=[e("i",{class:"far fa-edit"},null,-1),z("Edit")])),e("button",{class:"btn-contrast pb-2",onClick:ge},v[5]||(v[5]=[e("i",{class:"fas fa-trash-alt"},null,-1),z("Delete ")]))])]),p.value?(y(),g("div",Vt,[v[18]||(v[18]=e("hr",{class:"mb-2"},null,-1)),e("div",qt,[(y(!0),g(U,null,O(F(s).lectures[t.module.id],h=>(y(),g("div",{key:h.id,class:"flex gap-4 items-center w-full justify-between py-2"},[e("div",St,[e("div",Ut,[e("i",{class:T(h.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),e("div",Ot,[h.type==="virtual_platform"?(y(),g("p",At,"Live")):(y(),g("p",zt,"Rec"))])]),e("div",null,[e("h4",Ft,E(h.title),1),e("p",Nt,E(h.description),1),e("div",Rt,[v[6]||(v[6]=e("i",{class:"far fa-calendar-check"},null,-1)),e("p",null,E(J(h.opening_time)),1)])])]),e("div",It,[e("button",{class:"btn-1 pb-2",onClick:A=>Me(h)},v[7]||(v[7]=[e("i",{class:"far fa-edit"},null,-1),e("span",{class:"hidden md:flex"},"Edit",-1)]),8,Pt),e("button",{class:"btn-contrast pb-2",onClick:A=>_e(h)},v[8]||(v[8]=[e("i",{class:"fas fa-trash-alt"},null,-1),e("span",{class:"hidden md:flex"},"Delete",-1)]),8,Bt)])]))),128)),(y(!0),g(U,null,O(F(w).materials[t.module.id],h=>(y(),g("div",{key:h.id,class:"flex gap-4 items-center w-full justify-between py-2"},[e("div",Qt,[v[10]||(v[10]=e("div",{class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},[e("i",{class:"fas fa-download"}),e("div",{class:"text-xs"},"Material")],-1)),e("div",null,[e("h4",Yt,E(h.title),1),e("p",Gt,E(h.description),1),e("div",Zt,[v[9]||(v[9]=e("i",{class:"far fa-calendar-check"},null,-1)),e("p",null,E(J(h.opening_time)),1)])])]),e("div",Ht,[e("button",{class:"btn-1 pb-2",onClick:A=>Ce(h)},v[11]||(v[11]=[e("i",{class:"far fa-edit"},null,-1),e("span",{class:"hidden md:flex"},"Edit",-1)]),8,Jt),e("button",{class:"btn-contrast pb-2",onClick:A=>De(h)},v[12]||(v[12]=[e("i",{class:"fas fa-trash-alt"},null,-1),e("span",{class:"hidden md:flex"},"Delete",-1)]),8,Kt)])]))),128)),(y(!0),g(U,null,O(F(m).exams[t.module.id],h=>(y(),g("div",{key:h.id,class:"w-full flex gap-4 items-center justify-between py-2"},[e("div",Wt,[e("div",Xt,[h.type==="MCQ"?(y(),g("i",el)):(y(),g("i",tl)),v[13]||(v[13]=e("div",{class:"text-xs"},"Exam",-1))]),e("div",null,[e("h4",ll,E(h.title),1),e("div",sl,[v[14]||(v[14]=e("i",{class:"far fa-calendar-check"},null,-1)),e("p",null,E(J(h.opening_time)),1)])])]),e("div",ol,[h.user_exams_count?(y(),fe(ue,{key:0,to:{name:"ExamResultList",params:{courseId:t.module.course_id,moduleId:t.module.id,examId:h.id}},class:"btn-3 px-3.5"},{default:S(()=>[z(" Results ("+E(h.user_exams_count)+") ",1)]),_:2},1032,["to"])):j("",!0),L(ue,{to:{name:"ExamQuestionList",params:{courseId:t.module.course_id,moduleId:t.module.id,examId:h.id}},class:"btn-3 px-3.5"},{default:S(()=>v[15]||(v[15]=[z(" Questions ")])),_:2},1032,["to"]),e("button",{class:"btn-1 pb-2",onClick:A=>qe(h)},v[16]||(v[16]=[e("i",{class:"far fa-edit"},null,-1),e("span",{class:"hidden md:flex"},"Edit",-1)]),8,al),e("button",{class:"btn-contrast pb-2",onClick:A=>Se(h)},v[17]||(v[17]=[e("i",{class:"fas fa-trash-alt"},null,-1),e("span",{class:"hidden md:flex"},"Delete",-1)]),8,il)])]))),128))]),v[19]||(v[19]=e("hr",{class:"my-3"},null,-1)),e("div",nl,[e("button",{class:"btn-1",onClick:ke},"Add Lecture"),e("button",{class:"btn-1",onClick:Ee},"Add Material"),e("button",{class:"btn-1",onClick:v[0]||(v[0]=h=>Te("MCQ"))},"Add MCQ Exam"),j("",!0)])])):j("",!0),i.value?(y(),g("div",ul,[e("div",dl,[e("div",{class:"flex justify-end"},[e("button",{onClick:le,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",rl,[L(pt,{moduleId:t.module.id,courseId:t.module.course_id,onSubmit:$e},null,8,["moduleId","courseId"])])])])):j("",!0),f.value?(y(),g("div",cl,[e("div",ml,[e("div",{class:"flex justify-end"},[e("button",{onClick:se,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",pl,[L(ft,{lecture:u.value,onClose:se},null,8,["lecture"])])])])):j("",!0),d.value?(y(),g("div",vl,[e("div",fl,[e("div",{class:"flex justify-end"},[e("button",{onClick:Z,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",xl,[e("p",null,"Do you want to delete '"+E((de=a.value)==null?void 0:de.title)+"' lecture?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:he},"Yes"),e("button",{class:"btn-contrast",onClick:Z},"No")])])])])):j("",!0),r.value?(y(),g("div",yl,[e("div",bl,[e("div",{class:"flex justify-between"},[v[20]||(v[20]=e("h2",{class:"title-md"},"Material Create Form",-1)),e("button",{onClick:oe,class:"text-red-500 hover:text-red-700 text-3xl"}," × ")]),e("div",gl,[L(wt,{moduleId:t.module.id,courseId:t.module.course_id,onSubmit:Le},null,8,["moduleId","courseId"])])])])):j("",!0),_.value?(y(),g("div",wl,[e("div",kl,[e("div",{class:"flex justify-between"},[v[21]||(v[21]=e("h2",{class:"title-md"},"Material Edit Form",-1)),e("button",{onClick:ae,class:"text-red-500 hover:text-red-700 text-3xl"}," × ")]),e("div",Ml,[L($t,{material:c.value,onClose:ae},null,8,["material"])])])])):j("",!0),C.value?(y(),g("div",_l,[e("div",hl,[e("div",{class:"flex justify-end"},[e("button",{onClick:H,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",$l,[e("p",null,"Do you want to delete '"+E((re=b.value)==null?void 0:re.title)+"' material?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:je},"Yes"),e("button",{class:"btn-contrast",onClick:H},"No")])])])])):j("",!0),x.value?(y(),g("div",El,[e("div",Cl,[e("div",{class:"flex justify-end"},[v[22]||(v[22]=e("div",{class:"mr-auto font-bold"},"Add Exam Info",-1)),e("button",{onClick:ie,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),v[23]||(v[23]=e("hr",{class:"my-3"},null,-1)),e("div",Dl,[L(ut,{moduleId:t.module.id,examType:G.value,onSubmit:Ve},null,8,["moduleId","examType"])])])])):j("",!0),$.value?(y(),g("div",jl,[e("div",Ll,[e("div",Tl,[e("div",Vl,"Edit Form : "+E(Y.value.title),1),e("button",{onClick:ne,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),v[24]||(v[24]=e("hr",{class:"my-3"},null,-1)),e("div",ql,[L(ct,{exam:Y.value,onClose:ne},null,8,["exam"])])])])):j("",!0),Q.value?(y(),g("div",Sl,[e("div",Ul,[e("div",{class:"flex justify-end"},[e("button",{onClick:K,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Ol,[e("p",null,"Do you want to delete '"+E((ce=N.value)==null?void 0:ce.title)+"' exam?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:Ue},"Yes"),e("button",{class:"btn-contrast",onClick:K},"No")])])])])):j("",!0)],2)}}},zl={class:"my-container space-y-2"},Fl={class:"title-lg text-center"},Nl={key:0},Rl={class:"space-y-2"},Il={key:1,class:"flex justify-center"},Pl={class:"flex justify-center py-2"},Gl={__name:"ModuleListView",setup(t){const o=me(),l=Ne(),s=B(),w=n(null),m=n([]),p=n(null),i=n(!1),f=n(!1),d=n(!1);pe(async()=>{try{await l.fetchCourse(o.params.id),w.value=l.course,await s.fetchModules(o.params.id),m.value=s.modules}catch(c){console.error("Error fetching data:",c)}});const u=c=>{p.value=c,i.value=!0},a=c=>{p.value=c,f.value=!0},r=async c=>{try{await s.addModule(o.params.id,c),await s.fetchModules(o.params.id),m.value=s.modules,d.value=!1}catch(b){console.error("Error adding module:",b)}},_=async c=>{try{await s.updateModule(c.id,c),await s.fetchModules(o.params.id),m.value=s.modules,i.value=!1}catch(b){console.error("Error updating module:",b)}},C=async()=>{if(p.value)try{await s.deleteModule(p.value.id),await s.fetchModules(o.params.id),m.value=s.modules,f.value=!1}catch(c){console.error("Error deleting module:",c)}};return(c,b)=>(y(),g("div",zl,[e("h1",Fl,E(w.value?w.value.title:"Loading...")+" Modules",1),m.value.length>0?(y(),g("div",Nl,[e("ul",Rl,[(y(!0),g(U,null,O(m.value,x=>(y(),fe(Al,{key:x.id,module:x,onEdit:u,onDelete:a},null,8,["module"]))),128))])])):(y(),g("div",Il,b[4]||(b[4]=[e("p",{class:""},"No modules available for this course.",-1)]))),e("div",Pl,[e("button",{class:"btn-2",onClick:b[0]||(b[0]=x=>d.value=!0)},b[5]||(b[5]=[e("i",{class:"fas fa-plus"},null,-1),z("Add Module ")]))]),L(Ge,{isOpen:d.value,onAddModule:r,onClose:b[1]||(b[1]=x=>d.value=!1)},null,8,["isOpen"]),L(et,{class:"z-40",module:p.value,isOpen:i.value,onClose:b[2]||(b[2]=x=>i.value=!1),onUpdate:_},null,8,["module","isOpen"]),L(nt,{class:"z-40",module:p.value,isOpen:f.value,onClose:b[3]||(b[3]=x=>f.value=!1),onConfirmDelete:C},null,8,["module","isOpen"])]))}};export{Gl as default};
