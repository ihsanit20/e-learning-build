import{u as w,c as B,r as _,d as n,e as d,f as e,t as h,z as y,q as $,s as M,x as D,o as V,y as F,A as g,B as x,F as C,g as k,j as I}from"./index-teJBcn3p.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N=t=>(M("data-v-c2e9b256"),t=t(),D(),t),T={key:0,class:"modal"},L={class:"relative card-bg p-4 md:p-8 max-w-3xl h-2/3"},z={class:"overflow-y-scroll scrollbar space-y-2 p-2 bg-gray-100 rounded-md"},A=["src"],E=N(()=>e("p",{class:"text-sm"}," **File size should be less than 2MB and aspect ratio 9:16 (720px x 1280px)** ",-1)),H={class:"flex w-full text-center gap-4"},P={class:"text-center text-green-600"},R={class:"text-center text-red-600"},U={class:"title-md"},q=["innerHTML"],X={class:"font-bold"},Y={class:""},G={class:"title-sm"},J={__name:"CourseViewModal",props:{course:Object,isOpen:Boolean},emits:["close"],setup(t,{emit:i}){const c=t,o=w(),v=i,l=B(()=>o.courses.find(a=>a.id===c.course.id)),m=()=>{v("close")},u=_(null),b=_(""),f=_(""),r=a=>{const s=a.target.files[0];s&&s.size>2*1024*1024?(f.value="File should be less than 2MB",u.value=null,document.getElementById("file-input").value=""):(u.value=s,f.value="")},p=async()=>{if(!u.value)return;const a=new FormData;a.append("thumbnail",u.value);try{await o.uploadThumbnail(c.course.id,a),b.value="Thumbnail uploaded successfully!",u.value=null,document.getElementById("file-input").value=""}catch{f.value="An error occurred while uploading the thumbnail"}};return(a,s)=>t.isOpen?(n(),d("div",T,[e("div",L,[e("div",{class:"flex top-2 right-2 z-50 absolute"},[e("button",{class:"bg-red-500 px-2 rounded-full text-white",onClick:m},"X")]),e("div",z,[e("img",{class:"aspect-video object-cover rounded-lg",src:l.value.thumbnail,alt:"Thumbnail"},null,8,A),E,e("div",H,[e("input",{id:"file-input",type:"file",onChange:r,class:"input-1"},null,32),e("button",{class:"btn-1",onClick:p},"Upload")]),e("p",P,h(b.value),1),e("p",R,h(f.value),1),e("h2",U,h(l.value.title),1),e("div",{innerHTML:l.value.description,class:""},null,8,q),e("p",X,[y(" Starting From: "),e("span",null,h(l.value.start_date),1)]),e("p",Y,[y(" Price: ৳ "),e("span",G,h(l.value.price),1)])]),e("div",null,[e("button",{class:"btn-contrast",onClick:m},"Close")])])])):$("",!0)}},K=O(J,[["__scopeId","data-v-c2e9b256"]]),S=t=>(M("data-v-47d6054d"),t=t(),D(),t),Q={key:0,class:"modal"},W=S(()=>e("h2",{class:"title-md text-red-600 text-center"},"Confirm Delete",-1)),Z=S(()=>e("p",{class:"text-center"},"Are you sure you want to delete this course?",-1)),ee={__name:"CourseDeleteModal",props:{isOpen:Boolean,course:Object},emits:["close","confirmDelete"],setup(t,{emit:i}){const c=t,o=i,v=w(),l=async()=>{c.course&&(await v.deleteCourse(c.course.id),o("confirmDelete"),o("close"))},m=()=>{o("close")};return(u,b)=>t.isOpen?(n(),d("div",Q,[e("div",{class:"modal-content card-bg p-4 md:p-8"},[W,Z,e("div",{class:"flex space-x-4 justify-center"},[e("button",{class:"btn-contrast",onClick:l},"Yes"),e("button",{class:"btn-2",onClick:m},"No")])])])):$("",!0)}},se=O(ee,[["__scopeId","data-v-47d6054d"]]),te={class:"my-container space-y-2 relative"},oe={class:"flex justify-between items-center"},le=e("h1",{class:"title-lg text-center"},"Courses",-1),ae={key:0,class:"space-y-2"},ce=I('<div class="md:col-span-1 rounded md:px-2"><div class="aspect-video bg-gray-200"></div></div><div class="md:col-span-3 md:px-2"><div class="h-6 bg-gray-200 rounded-full mb-2"></div><div class="h-4 bg-gray-200 rounded-full"></div></div><div class="md:col-span-1 flex items-center justify-center px-2"><div class="h-6 bg-gray-200 rounded-full w-20"></div></div><div class="md:col-span-3 flex justify-between items-center gap-2 md:px-2"><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div></div>',4),ne=[ce],de={key:1},ie={key:0,class:"text-center"},ue=e("p",null,"No courses available.",-1),re=[ue],pe={key:1,class:"space-y-2"},_e={class:"md:col-span-1 rounded md:px-2"},ve=["src"],me={class:"md:col-span-4 md:px-2 space-y-2"},he={class:"title-md"},fe={class:"title-sm"},be={class:"flex justify-between items-center gap-2 md:px-2"},ge=["onClick"],xe=e("i",{class:"fas fa-eye"},null,-1),ye=e("p",{class:"hidden md:flex"},"View",-1),we=[xe,ye],Ce=e("i",{class:"far fa-edit"},null,-1),ke=e("p",{class:"hidden md:flex"},"Edit",-1),$e=["onClick"],Me=e("i",{class:"fas fa-trash-alt"},null,-1),De=[Me],Oe=e("i",{class:"fas fa-plus"},null,-1),Se=e("p",null,"Module",-1),Ve={__name:"CourseList",setup(t){const i=w(),c=_([]),o=_(null),v=_(!1),l=_(!1),m=_(!0);V(async()=>{await i.fetchCourses(),c.value=i.courses.sort((r,p)=>p.id-r.id),m.value=!1});const u=r=>{o.value=r,v.value=!0},b=r=>{o.value=r,l.value=!0},f=async()=>{await i.deleteCourse(o.value.id),c.value=i.courses};return(r,p)=>{const a=F("RouterLink");return n(),d("div",te,[e("div",oe,[le,g(a,{class:"btn-2",to:"/new"},{default:x(()=>[y("Add New")]),_:1})]),m.value?(n(),d("div",ae,[(n(),d(C,null,k(3,s=>e("div",{key:s,class:"card-bg md:py-2 p-4 md:p-2 grid md:grid-cols-8 md:divide-x-2 animate-pulse"},ne)),64))])):(n(),d("div",de,[c.value.length===0?(n(),d("div",ie,re)):(n(),d("ul",pe,[(n(!0),d(C,null,k(c.value,s=>(n(),d("li",{class:"card-bg md:py-2 p-4 md:p-2 grid md:grid-cols-5 md:divide-x-2",key:s.id},[e("div",_e,[e("img",{class:"aspect-video object-cover",src:s.thumbnail,alt:"Thumbnail"},null,8,ve)]),e("div",me,[e("h2",he,h(s.title),1),e("p",fe,"Price: ৳"+h(s.price),1),e("div",be,[e("button",{class:"btn-1 pb-2",onClick:j=>u(s)},we,8,ge),g(a,{to:"/courses/"+s.id+"/edit",class:"btn-1 pb-2"},{default:x(()=>[Ce,ke]),_:2},1032,["to"]),e("button",{class:"btn-contrast pb-2",onClick:j=>b(s)},De,8,$e),g(a,{class:"btn-1",to:"/courses/"+s.id+"/modules"},{default:x(()=>[Oe,Se]),_:2},1032,["to"])])])]))),128))]))])),g(K,{class:"absolute top-0 shadow-2xl w-full z-40",course:o.value,isOpen:v.value,onClose:p[0]||(p[0]=s=>v.value=!1)},null,8,["course","isOpen"]),g(se,{class:"absolute top-0 shadow-2xl w-full z-40",course:o.value,isOpen:l.value,onClose:p[1]||(p[1]=s=>l.value=!1),onConfirmDelete:f},null,8,["course","isOpen"])])}}};export{Ve as default};