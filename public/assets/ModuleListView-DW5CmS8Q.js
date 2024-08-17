import{D as Y,E as j,k as ye,b as ee,r as i,o as te,d as x,e as h,f as e,m as q,p as y,v as b,J as se,F as L,g as O,t as E,h as A,n as C,q as V,w as H,H as le,I as oe,C as z,x as P,y as U,A as ge,u as be,i as we}from"./index-BrS3nTk0.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N=Y("module",{state:()=>({modules:[]}),actions:{async fetchModules(t){try{const o=await j.get(`/courses/${t}/modules`);this.modules=o.data}catch(o){console.error("Failed to fetch modules:",o)}},async addModule(t,o){try{const s=await j.post("/modules",{course_id:t,...o});this.modules.push(s.data)}catch(s){console.error("Failed to add module:",s)}},async updateModule(t,o){try{const s=await j.put(`/modules/${t}`,o),l=this.modules.findIndex(v=>v.id===t);l!==-1&&(this.modules[l]=s.data)}catch(s){console.error("Failed to update module:",s)}},async deleteModule(t){try{await j.delete(`/modules/${t}`),this.modules=this.modules.filter(o=>o.id!==t)}catch(o){console.error("Failed to delete module:",o)}}}}),$e={key:0,class:"flex items-center justify-center"},ke={class:"card-bg p-4 md:p-8 w-full max-w-6xl"},Me=e("h2",{class:"title-md text-center"},"Add Module",-1),Ee=e("p",null,"Title:",-1),Ce=e("p",null,"Description:",-1),De={class:"grid md:grid-cols-5 gap-4"},je=e("p",null,"Module Order:",-1),Ve=e("p",null,"Duration (minutes):",-1),Se=e("label",{for:"prerequisite_module_id"},"Prerequisite Module:",-1),Ue=e("option",{value:""},"Select a prerequisite module",-1),Le=["value"],Oe={class:"flex items-center gap-2"},qe=e("label",{for:"is_active",class:""},"Active",-1),Te={class:"flex items-center gap-2"},Ae=e("label",{for:"is_paid",class:""},"Paid",-1),ze=e("button",{type:"submit",class:"btn-2"},"Add",-1),Ne={__name:"ModuleAddModal",props:{isOpen:Boolean},emits:["add-module","close"],setup(t,{emit:o}){const s=o,l=N(),v=ye(),u=ee(),r=i(""),n=i(""),c=i(""),_=i(""),d=i(!1),a=i(!1),f=i(""),w=i("");te(()=>{l.fetchModules(u.params.id)});const $=async()=>{const p=u.params.id,g={title:r.value,description:n.value,order:c.value,duration:_.value,is_active:d.value,is_paid:a.value,prerequisite_module_id:f.value};try{await l.addModule(p,g),w.value="Module is added",r.value="",n.value="",c.value="",_.value="",d.value=!1,a.value=!1,f.value="",setTimeout(()=>{v.push(`/course-list/${p}/modules`)},2e3)}catch(k){console.error("Failed to add module:",k)}},m=()=>{s("close")};return(p,g)=>t.isOpen?(x(),h("div",$e,[e("div",ke,[Me,e("form",{onSubmit:q($,["prevent"]),class:"space-y-2"},[e("div",null,[Ee,y(e("input",{class:"input-1","onUpdate:modelValue":g[0]||(g[0]=k=>r.value=k),required:"",placeholder:"Title"},null,512),[[b,r.value]])]),e("div",null,[Ce,y(e("textarea",{"onUpdate:modelValue":g[1]||(g[1]=k=>n.value=k),class:"input-1"},null,512),[[b,n.value]])]),e("div",De,[e("div",null,[je,y(e("input",{class:"input-1","onUpdate:modelValue":g[2]||(g[2]=k=>c.value=k),type:"number"},null,512),[[b,c.value]])]),e("div",null,[Ve,y(e("input",{class:"input-1","onUpdate:modelValue":g[3]||(g[3]=k=>_.value=k),type:"number"},null,512),[[b,_.value,void 0,{number:!0}]])]),e("div",null,[Se,y(e("select",{id:"prerequisite_module_id","onUpdate:modelValue":g[4]||(g[4]=k=>f.value=k),class:"input-1"},[Ue,(x(!0),h(L,null,O(A(l).modules,k=>(x(),h("option",{key:k.id,value:k.id},E(k.title),9,Le))),128))],512),[[se,f.value]])]),e("div",Oe,[e("div",{onClick:g[5]||(g[5]=k=>d.value=!d.value),class:C(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":d.value}])},[e("div",{class:C(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":d.value}])},null,2)],2),qe]),e("div",Te,[e("div",{onClick:g[6]||(g[6]=k=>a.value=!a.value),class:C(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":a.value}])},[e("div",{class:C(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":a.value}])},null,2)],2),Ae])]),e("div",{class:"flex justify-end gap-4"},[ze,e("button",{type:"button",onClick:m,class:"btn-contrast"},"Close")])],32)])])):V("",!0)}},S=t=>(le("data-v-702f4702"),t=t(),oe(),t),Fe={key:0,class:"modal"},Be={class:"card-bg p-4 md:p-8 w-full max-w-5xl mx-2"},Re=S(()=>e("h2",{class:"title-md text-center"},"Edit Module",-1)),Pe=S(()=>e("p",null,"Title:",-1)),Ye=S(()=>e("p",null,"Description:",-1)),He=S(()=>e("p",null,"Order:",-1)),Je=S(()=>e("label",{for:"duration",class:"block text-sm font-medium text-gray-700"},"Duration (minutes):",-1)),Ge=S(()=>e("label",{for:"prerequisite_module_id"},"Prerequisite Module:",-1)),Ke=S(()=>e("option",{value:""},"Select a prerequisite module",-1)),Qe=["value"],We={class:"flex items-center gap-2"},Xe=S(()=>e("label",{class:"ml-2 block text-sm text-gray-900"},"Active",-1)),Ze={class:"flex items-center gap-2"},Ie=S(()=>e("label",{class:"ml-2 block text-sm text-gray-900"},"Paid",-1)),et={__name:"ModuleEditModal",props:{module:Object,isOpen:Boolean},emits:["update","close"],setup(t,{emit:o}){const s=t,l=o,v=N(),u=i(""),r=i(""),n=i(0),c=i(0),_=i(!1),d=i(!1),a=i(0);H(()=>s.module,$=>{$&&(u.value=$.title||"",r.value=$.description||"",n.value=$.order||0,c.value=$.duration||0,_.value=$.is_active||!1,d.value=$.is_paid||!1,a.value=$.prerequisite_module_id||null)},{immediate:!0});const f=async()=>{const $={id:s.module.id,title:u.value,description:r.value,order:n.value,duration:c.value,is_active:_.value,is_paid:d.value,prerequisite_module_id:a.value};try{await v.updateModule(s.module.id,$),l("update",$),l("close")}catch(m){console.error("Error updating module:",m)}},w=()=>{l("close")};return($,m)=>t.isOpen?(x(),h("div",Fe,[e("div",Be,[Re,e("div",null,[Pe,y(e("input",{class:"input-1","onUpdate:modelValue":m[0]||(m[0]=p=>u.value=p),required:"",placeholder:"Title"},null,512),[[b,u.value]])]),e("div",null,[Ye,y(e("textarea",{"onUpdate:modelValue":m[1]||(m[1]=p=>r.value=p),class:"input-1"},null,512),[[b,r.value]])]),e("div",null,[He,y(e("input",{class:"input-1","onUpdate:modelValue":m[2]||(m[2]=p=>n.value=p),type:"number"},null,512),[[b,n.value]])]),e("div",null,[Je,y(e("input",{type:"number",id:"duration","onUpdate:modelValue":m[3]||(m[3]=p=>c.value=p),class:"input-1"},null,512),[[b,c.value,void 0,{number:!0}]])]),e("div",null,[Ge,y(e("select",{id:"prerequisite_module_id","onUpdate:modelValue":m[4]||(m[4]=p=>a.value=p),class:"input-1"},[Ke,(x(!0),h(L,null,O(A(v).modules,p=>(x(),h("option",{key:p.id,value:p.id},E(p.title),9,Qe))),128))],512),[[se,a.value]])]),e("div",We,[e("div",{onClick:m[5]||(m[5]=p=>_.value=!_.value),class:C(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":_.value}])},[e("div",{class:C(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":_.value}])},null,2)],2),Xe]),e("div",Ze,[e("div",{onClick:m[6]||(m[6]=p=>d.value=!d.value),class:C(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":d.value}])},[e("div",{class:C(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":d.value}])},null,2)],2),Ie]),e("div",{class:"flex justify-center gap-4"},[e("button",{onClick:f,class:"btn-2"},"Save"),e("button",{onClick:w,class:"btn-contrast"},"Close")])])])):V("",!0)}},tt=ae(et,[["__scopeId","data-v-702f4702"]]),ie=t=>(le("data-v-668780de"),t=t(),oe(),t),st={key:0,class:"fixed inset-0 flex items-center justify-center z-50"},lt=ie(()=>e("div",{class:"modal-overlay absolute inset-0 bg-gray-500 opacity-75"},null,-1)),ot={class:"modal-container bg-white w-full md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"},at={class:"p-6"},it={class:"mb-4"},nt=ie(()=>e("h2",{class:"text-2xl font-bold mb-4"},"Delete Module",-1)),dt={key:0,class:"text-gray-700"},ut={__name:"ModuleDeleteModal",props:{isOpen:Boolean,module:Object},emits:["close","confirmDelete"],setup(t,{emit:o}){const s=t,l=o,v=N(),u=async()=>{s.module&&(await v.deleteModule(s.module.id),l("confirmDelete"),l("close"))},r=()=>{l("close")};return(n,c)=>s.isOpen?(x(),h("div",st,[lt,e("div",ot,[e("div",at,[e("div",it,[nt,s.module?(x(),h("p",dt,' Are you sure you want to delete "'+E(s.module.title)+'"? ',1)):V("",!0)]),e("div",{class:"flex justify-end"},[e("div",{class:"flex space-x-4 justify-center"},[e("button",{class:"btn-contrast",onClick:u},"Yes"),e("button",{class:"btn-2",onClick:r},"No")])])])])])):V("",!0)}},rt=ae(ut,[["__scopeId","data-v-668780de"]]),J=Y("lecture",{state:()=>({lectures:{}}),actions:{async fetchLectures(t){try{const o=await j.get(`/modules/${t}/lectures`);this.lectures={...this.lectures,[t]:o.data}}catch(o){console.error("Error fetching lectures:",o)}},async addLecture(t,o){try{const s=await j.post(`/modules/${t}/lectures`,o);this.lectures[t]||(this.lectures[t]=[]),this.lectures[t]=[...this.lectures[t],s.data]}catch(s){console.error("Error adding lecture:",s)}},async deleteLecture(t,o){try{await j.delete(`/modules/${t}/lectures/${o}`),this.lectures[t]&&(this.lectures[t]=this.lectures[t].filter(s=>s.id!==o))}catch(s){console.error("Error deleting lecture:",s)}},async updateLecture(t,o,s){try{const l=await j.put(`/modules/${t}/lectures/${o}`,s);if(this.lectures[t]){const v=this.lectures[t].findIndex(u=>u.id===o);v!==-1&&(this.lectures[t][v]=l.data)}}catch(l){console.error("Error updating lecture:",l)}}}}),ne=Y("exam",{state:()=>({exams:{}}),actions:{async fetchExams(t){try{const o=await j.get(`/modules/${t}/exams`);this.exams={...this.exams,[t]:o.data}}catch(o){console.error("Error fetching exams:",o)}},async addExam(t,o){try{const s=await j.post(`/modules/${t}/exams`,o);this.exams[t]||(this.exams[t]=[]),this.exams[t]=[...this.exams[t],s.data]}catch(s){console.error("Error adding exam:",s)}},async deleteExam(t,o){try{await j.delete(`/modules/${t}/exams/${o}`),this.exams[t]&&(this.exams[t]=this.exams[t].filter(s=>s.id!==o))}catch(s){console.error("Error deleting exam:",s)}},async updateExam(t,o,s){try{const l=await j.put(`/exams/${o}`,s);if(this.exams[t]){const v=this.exams[t].findIndex(u=>u.id===o);v!==-1&&(this.exams[t][v]=l.data)}}catch(l){console.error("Error updating exam:",l)}}}}),ct={class:"flex flex-col md:flex-row md:justify-center"},mt=e("label",{for:"video",class:"mr-4"},"Recorded Video",-1),pt=e("label",{for:"virtual_platform"},"Live Class Link",-1),vt=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Add Lecture")],-1),ft={__name:"AddLecture",props:{moduleId:Number,courseId:Number},setup(t){const o=t,s=J(),l=i(""),v=i(""),u=i(""),r=i(""),n=i("video"),c=async()=>{const _={course_id:o.courseId,module_id:o.moduleId,title:l.value,link:v.value,description:u.value,type:n.value,opening_time:r.value};try{await s.addLecture(o.moduleId,_),l.value="",v.value="",u.value="",n.value="video",r.value=""}catch(d){console.error("Error adding lecture:",d)}};return(_,d)=>(x(),h("div",null,[e("form",{onSubmit:q(c,["prevent"]),class:"space-y-4"},[y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":d[0]||(d[0]=a=>l.value=a),placeholder:"Title",required:""},null,512),[[b,l.value]]),e("div",ct,[e("div",null,[y(e("input",{type:"radio",id:"video",value:"video","onUpdate:modelValue":d[1]||(d[1]=a=>n.value=a),class:"mr-2"},null,512),[[z,n.value]]),mt]),e("div",null,[y(e("input",{type:"radio",id:"virtual_platform",value:"virtual_platform","onUpdate:modelValue":d[2]||(d[2]=a=>n.value=a),class:"mr-2"},null,512),[[z,n.value]]),pt])]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":d[3]||(d[3]=a=>v.value=a),placeholder:"Link",required:""},null,512),[[b,v.value]]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":d[4]||(d[4]=a=>u.value=a),placeholder:"Description"},null,512),[[b,u.value]]),y(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":d[5]||(d[5]=a=>r.value=a),placeholder:"Opening Date & Time",required:""},null,512),[[b,r.value]]),vt],32)]))}},_t={class:"flex flex-col md:flex-row md:justify-center"},xt=e("label",{for:"video",class:"mr-4"},"Recorded Video",-1),ht=e("label",{for:"virtual_platform"},"Live Class Link",-1),yt=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1),gt={__name:"EditLectureForm",props:{lecture:Object},emits:["close"],setup(t,{emit:o}){const s=t,l=o,v=J(),u=i(s.lecture.title),r=i(s.lecture.link),n=i(s.lecture.description),c=i(s.lecture.opening_time),_=i(s.lecture.type),d=async()=>{const a={...s.lecture,title:u.value,link:r.value,description:n.value,type:_.value,opening_time:c.value};try{await v.updateLecture(s.lecture.module_id,s.lecture.id,a),l("close")}catch(f){console.error("Error updating lecture:",f)}};return H(()=>s.lecture,a=>{u.value=a.title,r.value=a.link,n.value=a.description,_.value=a.type,c.value=a.opening_time},{immediate:!0}),(a,f)=>(x(),h("div",null,[e("form",{onSubmit:q(d,["prevent"]),class:"space-y-4"},[y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":f[0]||(f[0]=w=>u.value=w),placeholder:"Title",required:""},null,512),[[b,u.value]]),e("div",_t,[e("div",null,[y(e("input",{type:"radio",id:"video",value:"video","onUpdate:modelValue":f[1]||(f[1]=w=>_.value=w),class:"mr-2"},null,512),[[z,_.value]]),xt]),e("div",null,[y(e("input",{type:"radio",id:"virtual_platform",value:"virtual_platform","onUpdate:modelValue":f[2]||(f[2]=w=>_.value=w),class:"mr-2"},null,512),[[z,_.value]]),ht])]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":f[3]||(f[3]=w=>r.value=w),placeholder:"Link",required:""},null,512),[[b,r.value]]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":f[4]||(f[4]=w=>n.value=w),placeholder:"Description"},null,512),[[b,n.value]]),y(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":f[5]||(f[5]=w=>c.value=w),placeholder:"Opening Date & Time",required:""},null,512),[[b,c.value]]),yt],32)]))}},bt=e("h2",{class:"title-md"},"Add Exam Info",-1),wt=e("label",null,"Exam Title:",-1),$t=e("label",null,"Duration (minutes):",-1),kt=e("label",null,"Opening Time:",-1),Mt=e("label",null,"Exam Link:",-1),Et=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-2"},"Add Exam")],-1),Ct={__name:"AddExam",props:{moduleId:Number},emits:["submit"],setup(t,{emit:o}){const s=t,l=i({title:"",duration:"",opening_time:"",link:""}),v=o,u=()=>{const r={module_id:s.moduleId,title:l.value.title,duration:l.value.duration,opening_time:l.value.opening_time,link:l.value.link};v("submit",r),l.value={title:"",duration:"",opening_time:"",link:""}};return(r,n)=>(x(),h("div",null,[bt,e("form",{onSubmit:q(u,["prevent"]),class:"space-y-4"},[e("div",null,[wt,y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":n[0]||(n[0]=c=>l.value.title=c),placeholder:"Title",required:""},null,512),[[b,l.value.title]])]),e("div",null,[$t,y(e("input",{class:"input-1",type:"number","onUpdate:modelValue":n[1]||(n[1]=c=>l.value.duration=c),placeholder:"Duration",required:""},null,512),[[b,l.value.duration]])]),e("div",null,[kt,y(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":n[2]||(n[2]=c=>l.value.opening_time=c),placeholder:"Opening Date & Time",required:""},null,512),[[b,l.value.opening_time]])]),e("div",null,[Mt,y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":n[3]||(n[3]=c=>l.value.link=c),placeholder:"Link"},null,512),[[b,l.value.link]])]),Et],32)]))}},Dt=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1),jt={__name:"EditExamForm",props:{exam:Object},emits:["close"],setup(t,{emit:o}){const s=t,l=o,v=ne(),u=i(s.exam.title),r=i(s.exam.duration),n=i(s.exam.opening_time),c=i(s.exam.link),_=async()=>{const d={...s.exam,title:u.value,duration:r.value,opening_time:n.value,link:c.value};try{await v.updateExam(s.exam.module_id,s.exam.id,d),l("close")}catch(a){console.error("Error updating exam:",a)}};return H(()=>s.exam,d=>{u.value=d.title,r.value=d.duration,n.value=d.opening_time,c.value=d.link},{immediate:!0}),(d,a)=>(x(),h("div",null,[e("form",{onSubmit:q(_,["prevent"]),class:"space-y-4"},[y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":a[0]||(a[0]=f=>u.value=f),placeholder:"Title",required:""},null,512),[[b,u.value]]),y(e("input",{class:"input-1",type:"number","onUpdate:modelValue":a[1]||(a[1]=f=>r.value=f),placeholder:"Duration"},null,512),[[b,r.value]]),y(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":a[2]||(a[2]=f=>n.value=f),placeholder:"Opening Date & Time"},null,512),[[b,n.value]]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":a[3]||(a[3]=f=>c.value=f),placeholder:"Link"},null,512),[[b,c.value]]),Dt],32)]))}},Vt={class:"flex md:flex-row flex-col items-center gap-4"},St={class:"flex flex-1 items-center gap-4"},Ut={class:"text-center border-2 rounded-md p-1.5"},Lt=e("div",{class:"text-xs md:text-sm"},"Module",-1),Ot={class:"flex-1"},qt={class:"line-clamp-1"},Tt={class:"flex items-center gap-2"},At=e("p",null,"Content",-1),zt=e("i",{class:"far fa-edit"},null,-1),Nt=e("i",{class:"fas fa-trash-alt"},null,-1),Ft={key:0},Bt=e("hr",{class:"mb-2"},null,-1),Rt={class:"flex flex-col justify-center space-y-2 divide-y-2"},Pt={class:"flex items-center gap-4"},Yt={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},Ht={class:"text-xs"},Jt={key:0},Gt={key:1},Kt={class:"title-sm"},Qt={class:"flex items-center gap-2 text-sm text-gray-400"},Wt=e("i",{class:"far fa-calendar-check"},null,-1),Xt={class:"flex gap-2"},Zt=["onClick"],It=e("i",{class:"far fa-edit"},null,-1),es=e("span",{class:"hidden md:flex"},"Edit",-1),ts=[It,es],ss=["onClick"],ls=e("i",{class:"fas fa-trash-alt"},null,-1),os=e("span",{class:"hidden md:flex"},"Delete",-1),as=[ls,os],is={class:"flex items-center gap-4"},ns=e("div",{class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},[e("i",{class:"fas fa-file-alt"}),e("div",{class:"text-xs"},"Exam")],-1),ds={class:"title-sm"},us={class:"flex items-center gap-2 text-sm text-gray-400"},rs=e("i",{class:"far fa-calendar-check"},null,-1),cs={class:"flex gap-2"},ms=["onClick"],ps=e("i",{class:"far fa-edit"},null,-1),vs=e("span",{class:"hidden md:flex"},"Edit",-1),fs=[ps,vs],_s=["onClick"],xs=e("i",{class:"fas fa-trash-alt"},null,-1),hs=e("span",{class:"hidden md:flex"},"Delete",-1),ys=[xs,hs],gs={key:1,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},bs={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},ws={class:"mt-4"},$s={key:2,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},ks={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Ms={class:"mt-4"},Es={key:3,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Cs={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Ds={class:"mt-4 text-center"},js={key:4,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Vs={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Ss={class:"mt-4"},Us={key:5,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Ls={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Os={class:"mt-4"},qs={key:6,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Ts={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},As={class:"mt-4 text-center"},zs={__name:"ModuleItem",props:{module:Object},emits:["edit","delete"],setup(t,{emit:o}){const s=t,l=J(),v=ne(),u=i(!1),r=i(!1),n=i(!1),c=i(!1),_=i(!1),d=i(!1),a=i(!1),f=i(null),w=i(null),$=i(null),m=i(null),p=o,g=()=>{p("edit",s.module)},k=()=>{p("delete",s.module)},de=async()=>{u.value=!u.value,u.value&&(await l.fetchLectures(s.module.id),await v.fetchExams(s.module.id))},ue=()=>{r.value=!0},G=()=>{r.value=!1},re=D=>{f.value=D,n.value=!0},K=()=>{n.value=!1},ce=D=>{w.value=D,c.value=!0},F=()=>{c.value=!1},me=async()=>{w.value&&(await l.deleteLecture(s.module.id,w.value.id),F())},pe=async()=>{G()},Q=D=>{const T=new Date(D);return ge(T,"hh:mm a, dd-MMM-yyyy")},ve=()=>{_.value=!0},W=()=>{_.value=!1},fe=async D=>{try{await v.addExam(s.module.id,D),W()}catch(T){console.error("Error adding exam:",T)}},_e=D=>{$.value=D,d.value=!0},X=()=>{d.value=!1},xe=D=>{m.value=D,a.value=!0},B=()=>{a.value=!1},he=async()=>{m.value&&(await v.deleteExam(s.module.id,m.value.id),B())};return(D,T)=>{var Z,I;return x(),h("li",{class:C(["card-bg p-4",{"bg-gray-100 border-2 border-gray-200 text-gray-400":t.module.is_active==0}])},[e("div",Vt,[e("div",St,[e("div",Ut,[e("div",{class:C(["text-xl font-bold text-orange-500",{"!text-gray-400":t.module.is_active==0}])},E(t.module.order),3),Lt]),e("div",Ot,[e("h4",{class:C(["title-md",{"text-gray-400":t.module.is_active==0}])},E(t.module.title),3),e("p",qt,E(t.module.description),1)])]),e("div",Tt,[e("button",{class:"btn-2",onClick:de},[e("i",{class:C(u.value?"fas fa-angle-up":"fas fa-angle-down")},null,2),At]),e("button",{class:"btn-2 pb-2",onClick:g},[zt,P("Edit")]),e("button",{class:"btn-contrast pb-2",onClick:k},[Nt,P("Delete ")])])]),u.value?(x(),h("div",Ft,[Bt,e("div",Rt,[(x(!0),h(L,null,O(A(l).lectures[t.module.id],M=>(x(),h("div",{key:M.id,class:"flex gap-4 items-center w-full justify-between py-2"},[e("div",Pt,[e("div",Yt,[e("i",{class:C(M.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),e("div",Ht,[M.type==="virtual_platform"?(x(),h("p",Jt,"Live")):(x(),h("p",Gt,"Rec"))])]),e("div",null,[e("h4",Kt,E(M.title),1),e("div",Qt,[Wt,e("p",null,E(Q(M.opening_time)),1)])])]),e("div",Xt,[e("button",{class:"btn-1 pb-2",onClick:R=>re(M)},ts,8,Zt),e("button",{class:"btn-contrast pb-2",onClick:R=>ce(M)},as,8,ss)])]))),128)),(x(!0),h(L,null,O(A(v).exams[t.module.id],M=>(x(),h("div",{key:M.id,class:"flex gap-4 items-center w-full justify-between py-2"},[e("div",is,[ns,e("div",null,[e("h4",ds,E(M.title),1),e("div",us,[rs,e("p",null,E(Q(M.opening_time)),1)])])]),e("div",cs,[e("button",{class:"btn-1 pb-2",onClick:R=>_e(M)},fs,8,ms),e("button",{class:"btn-contrast pb-2",onClick:R=>xe(M)},ys,8,_s)])]))),128))]),e("div",{class:"flex gap-4 items-center justify-center mt-2"},[e("button",{class:"btn-1",onClick:ue},"Add Lecture"),e("button",{class:"btn-1",onClick:ve},"Add Exam")])])):V("",!0),r.value?(x(),h("div",gs,[e("div",bs,[e("div",{class:"flex justify-end"},[e("button",{onClick:G,class:"text-gray-500 hover:text-gray-700"},"×")]),e("div",ws,[U(ft,{moduleId:t.module.id,courseId:t.module.course_id,onSubmit:pe},null,8,["moduleId","courseId"])])])])):V("",!0),n.value?(x(),h("div",$s,[e("div",ks,[e("div",{class:"flex justify-end"},[e("button",{onClick:K,class:"text-gray-500 hover:text-gray-700"},"×")]),e("div",Ms,[U(gt,{lecture:f.value,onClose:K},null,8,["lecture"])])])])):V("",!0),c.value?(x(),h("div",Es,[e("div",Cs,[e("div",{class:"flex justify-end"},[e("button",{onClick:F,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Ds,[e("p",null,"Do you want to delete '"+E((Z=w.value)==null?void 0:Z.title)+"' lecture?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:me},"Yes"),e("button",{class:"btn-contrast",onClick:F},"No")])])])])):V("",!0),_.value?(x(),h("div",js,[e("div",Vs,[e("div",{class:"flex justify-end"},[e("button",{onClick:W,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Ss,[U(Ct,{moduleId:t.module.id,onSubmit:fe},null,8,["moduleId"])])])])):V("",!0),d.value?(x(),h("div",Us,[e("div",Ls,[e("div",{class:"flex justify-end"},[e("button",{onClick:X,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Os,[U(jt,{exam:$.value,onClose:X},null,8,["exam"])])])])):V("",!0),a.value?(x(),h("div",qs,[e("div",Ts,[e("div",{class:"flex justify-end"},[e("button",{onClick:B,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",As,[e("p",null,"Do you want to delete '"+E((I=m.value)==null?void 0:I.title)+"' exam?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:he},"Yes"),e("button",{class:"btn-contrast",onClick:B},"No")])])])])):V("",!0)],2)}}},Ns={class:"my-container space-y-2"},Fs={class:"title-lg text-center"},Bs={key:0},Rs={class:"space-y-2"},Ps={key:1,class:"flex justify-center"},Ys=e("p",{class:""},"No modules available for this course.",-1),Hs=[Ys],Js={class:"flex justify-center py-2"},Gs=e("i",{class:"fas fa-plus"},null,-1),Ws={__name:"ModuleListView",setup(t){const o=ee(),s=be(),l=N(),v=i(null),u=i([]),r=i(null),n=i(!1),c=i(!1),_=i(!1);te(async()=>{try{await s.fetchCourse(o.params.id),v.value=s.course,await l.fetchModules(o.params.id),u.value=l.modules}catch(m){console.error("Error fetching data:",m)}});const d=m=>{r.value=m,n.value=!0},a=m=>{r.value=m,c.value=!0},f=async m=>{try{await l.addModule(o.params.id,m),await l.fetchModules(o.params.id),u.value=l.modules,_.value=!1}catch(p){console.error("Error adding module:",p)}},w=async m=>{try{await l.updateModule(m.id,m),await l.fetchModules(o.params.id),u.value=l.modules,n.value=!1}catch(p){console.error("Error updating module:",p)}},$=async()=>{if(r.value)try{await l.deleteModule(r.value.id),await l.fetchModules(o.params.id),u.value=l.modules,c.value=!1}catch(m){console.error("Error deleting module:",m)}};return(m,p)=>(x(),h("div",Ns,[e("h1",Fs,E(v.value?v.value.title:"Loading...")+" Modules",1),u.value.length>0?(x(),h("div",Bs,[e("ul",Rs,[(x(!0),h(L,null,O(u.value,g=>(x(),we(zs,{key:g.id,module:g,onEdit:d,onDelete:a},null,8,["module"]))),128))])])):(x(),h("div",Ps,Hs)),e("div",Js,[e("button",{class:"btn-2",onClick:p[0]||(p[0]=g=>_.value=!0)},[Gs,P("Add Module ")])]),U(Ne,{isOpen:_.value,onAddModule:f,onClose:p[1]||(p[1]=g=>_.value=!1)},null,8,["isOpen"]),U(tt,{class:"z-40",module:r.value,isOpen:n.value,onClose:p[2]||(p[2]=g=>n.value=!1),onUpdate:w},null,8,["module","isOpen"]),U(rt,{class:"z-40",module:r.value,isOpen:c.value,onClose:p[3]||(p[3]=g=>c.value=!1),onConfirmDelete:$},null,8,["module","isOpen"])]))}};export{Ws as default};
