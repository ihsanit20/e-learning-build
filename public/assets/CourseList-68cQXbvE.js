import{u as k,c as L,r as h,d as a,e as n,f as e,t as c,z as m,q as C,C as D,s as j,x as O,o as F,y as I,A as x,B as w,F as M,g as $,j as N}from"./index-BGHaPwEk.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B=t=>(j("data-v-c0ad9860"),t=t(),O(),t),z={key:0,class:"modal"},A={class:"relative card-bg p-4 md:p-8 max-w-3xl h-2/3"},E={class:"overflow-y-scroll scrollbar space-y-2 p-2 bg-gray-100 rounded-md"},H=["src"],R=B(()=>e("p",{class:"text-sm"}," **File size should be less than 2MB and aspect ratio 9:16 (720px x 1280px)** ",-1)),U={class:"flex w-full text-center gap-4"},q={class:"text-center text-green-600"},K={class:"text-center text-red-600"},P={class:"title-md"},X={class:"md:flex justify-between"},Y=B(()=>e("b",null,"Course Description:",-1)),G=["innerHTML"],J={key:0},Q={class:"font-bold text-sky-600"},W={class:""},Z={class:"title-sm"},ee={__name:"CourseViewModal",props:{course:Object,isOpen:Boolean},emits:["close"],setup(t,{emit:y}){const i=t,d=k(),_=y,o=L(()=>d.courses.find(l=>l.id===i.course.id)),v=()=>{_("close")},p=h(null),b=h(""),f=h(""),g=l=>{const s=l.target.files[0];s&&s.size>2*1024*1024?(f.value="File should be less than 2MB",p.value=null,document.getElementById("file-input").value=""):(p.value=s,f.value="")},u=async()=>{if(!p.value)return;const l=new FormData;l.append("thumbnail",p.value);try{await d.uploadThumbnail(i.course.id,l),b.value="Thumbnail uploaded successfully!",p.value=null,document.getElementById("file-input").value=""}catch{f.value="An error occurred while uploading the thumbnail"}},r=l=>D(new Date(l),"dd-MMM-yyyy");return(l,s)=>t.isOpen?(a(),n("div",z,[e("div",A,[e("div",{class:"flex top-2 right-2 z-50 absolute"},[e("button",{class:"bg-red-500 px-2 rounded-full text-white",onClick:v},"X")]),e("div",E,[e("img",{class:"aspect-video object-cover rounded-lg",src:o.value.thumbnail,alt:"Thumbnail"},null,8,H),R,e("div",U,[e("input",{id:"file-input",type:"file",onChange:g,class:"input-1"},null,32),e("button",{class:"btn-1",onClick:u},"Upload")]),e("p",q,c(b.value),1),e("p",K,c(f.value),1),e("h2",P,c(o.value.title),1),e("div",X,[e("p",null,[m(" Course Category: "),e("b",null,c(o.value.course_category),1)]),e("p",null,[m(" Course Type: "),e("b",null,c(o.value.course_type),1)])]),e("div",null,[Y,e("div",{innerHTML:o.value.description,class:""},null,8,G)]),o.value.course_type==="Live Course"?(a(),n("p",J,[m(" Start Date: "),e("span",Q,c(r(o.value.start_date)),1)])):C("",!0),e("p",W,[m(" Price: ৳ "),e("span",Z,c(o.value.price),1)])]),e("div",null,[e("button",{class:"btn-contrast",onClick:v},"Close")])])])):C("",!0)}},se=S(ee,[["__scopeId","data-v-c0ad9860"]]),T=t=>(j("data-v-47d6054d"),t=t(),O(),t),te={key:0,class:"modal"},oe=T(()=>e("h2",{class:"title-md text-red-600 text-center"},"Confirm Delete",-1)),le=T(()=>e("p",{class:"text-center"},"Are you sure you want to delete this course?",-1)),ae={__name:"CourseDeleteModal",props:{isOpen:Boolean,course:Object},emits:["close","confirmDelete"],setup(t,{emit:y}){const i=t,d=y,_=k(),o=async()=>{i.course&&(await _.deleteCourse(i.course.id),d("confirmDelete"),d("close"))},v=()=>{d("close")};return(p,b)=>t.isOpen?(a(),n("div",te,[e("div",{class:"modal-content card-bg p-4 md:p-8"},[oe,le,e("div",{class:"flex space-x-4 justify-center"},[e("button",{class:"btn-contrast",onClick:o},"Yes"),e("button",{class:"btn-2",onClick:v},"No")])])])):C("",!0)}},ne=S(ae,[["__scopeId","data-v-47d6054d"]]),ce={class:"my-container space-y-2 relative"},de={class:"flex justify-between items-center"},ie=e("h1",{class:"title-lg text-center"},"Courses",-1),ue={key:0,class:"space-y-2"},re=N('<div class="md:col-span-1 rounded md:px-2"><div class="aspect-video bg-gray-200"></div></div><div class="md:col-span-3 md:px-2"><div class="h-6 bg-gray-200 rounded-full mb-2"></div><div class="h-4 bg-gray-200 rounded-full"></div></div><div class="md:col-span-1 flex items-center justify-center px-2"><div class="h-6 bg-gray-200 rounded-full w-20"></div></div><div class="md:col-span-3 flex justify-between items-center gap-2 md:px-2"><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div></div>',4),_e=[re],pe={key:1},ve={key:0,class:"text-center"},he=e("p",null,"No courses available.",-1),me=[he],fe={key:1,class:"space-y-2"},ye={class:"md:col-span-1 px-2"},be=["src"],xe={class:"font-bold text-sky-600 bg-sky-100 px-6 text-center rounded-full"},ge={class:"md:col-span-4 md:px-2 space-y-2"},we={class:"title-md"},Ce={class:"flex justify-between"},ke={class:"font-bold text-sky-600"},Me={key:0},$e={class:"font-bold text-sky-600"},De={key:1,class:"bg-pink-50 px-3 rounded-full"},je={class:"font-bold text-pink-600"},Oe={class:"flex justify-between items-center gap-2 md:px-2"},Se=["onClick"],Be=e("i",{class:"fas fa-eye"},null,-1),Te=e("p",{class:"hidden md:flex"},"View",-1),Ve=[Be,Te],Le=e("i",{class:"far fa-edit"},null,-1),Fe=e("p",{class:"hidden md:flex"},"Edit",-1),Ie=["onClick"],Ne=e("i",{class:"fas fa-trash-alt"},null,-1),ze=[Ne],Ae=e("i",{class:"fas fa-plus"},null,-1),Ee=e("p",null,"Module",-1),Ue={__name:"CourseList",setup(t){const y=u=>{const r=new Date(u);return D(r,"dd-MMM-yyyy")},i=k(),d=h([]),_=h(null),o=h(!1),v=h(!1),p=h(!0);F(async()=>{await i.fetchCourses(),d.value=i.courses.sort((u,r)=>r.id-u.id),p.value=!1});const b=u=>{_.value=u,o.value=!0},f=u=>{_.value=u,v.value=!0},g=async()=>{await i.deleteCourse(_.value.id),d.value=i.courses};return(u,r)=>{const l=I("RouterLink");return a(),n("div",ce,[e("div",de,[ie,x(l,{class:"btn-2",to:"/new"},{default:w(()=>[m("Add New")]),_:1})]),p.value?(a(),n("div",ue,[(a(),n(M,null,$(3,s=>e("div",{key:s,class:"card-bg md:py-2 p-4 md:p-2 grid md:grid-cols-8 md:divide-x-2 animate-pulse"},_e)),64))])):(a(),n("div",pe,[d.value.length===0?(a(),n("div",ve,me)):(a(),n("ul",fe,[(a(!0),n(M,null,$(d.value,s=>(a(),n("li",{class:"card-bg md:py-2 p-4 md:p-2 grid md:grid-cols-5 md:divide-x-2",key:s.id},[e("div",ye,[e("img",{class:"aspect-video object-cover rounded md:",src:s.thumbnail,alt:"Thumbnail"},null,8,be),e("p",xe,c(s.course_category),1)]),e("div",ge,[e("h2",we,c(s.title),1),e("div",Ce,[e("p",null,[m(" Fee: "),e("span",ke,c(s.price)+" TK",1)]),s.course_type==="Live Course"?(a(),n("p",Me,[m(" Start Date: "),e("span",$e,c(y(s.start_date)),1)])):(a(),n("p",De,[e("span",je,c(s.course_type),1)]))]),e("div",Oe,[e("button",{class:"btn-1 pb-2",onClick:V=>b(s)},Ve,8,Se),x(l,{to:"/courses/"+s.id+"/edit",class:"btn-1 pb-2"},{default:w(()=>[Le,Fe]),_:2},1032,["to"]),e("button",{class:"btn-contrast pb-2",onClick:V=>f(s)},ze,8,Ie),x(l,{class:"btn-1",to:"/courses/"+s.id+"/modules"},{default:w(()=>[Ae,Ee]),_:2},1032,["to"])])])]))),128))]))])),x(se,{class:"absolute top-0 shadow-2xl w-full z-40",course:_.value,isOpen:o.value,onClose:r[0]||(r[0]=s=>o.value=!1)},null,8,["course","isOpen"]),x(ne,{class:"absolute top-0 shadow-2xl w-full z-40",course:_.value,isOpen:v.value,onClose:r[1]||(r[1]=s=>v.value=!1),onConfirmDelete:g},null,8,["course","isOpen"])])}}};export{Ue as default};
