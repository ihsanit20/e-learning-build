import{u as D,d as B,r as v,e as l,f as a,g as e,t as n,q as m,p as M,v as $,a3 as V,a4 as F,o as L,m as N,B as g,s as k,F as j,h as O,y as I}from"./index-NELb0t0C.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S=i=>(V("data-v-d1fbb8fe"),i=i(),F(),i),E={key:0,class:"modal"},A={class:"relative card-bg p-4 md:p-8 max-w-3xl h-2/3"},H={class:"overflow-y-scroll scrollbar space-y-2 p-2 bg-gray-100 rounded-md"},R=["src"],U=S(()=>e("p",{class:"text-sm"}," **File size should be less than 2MB and aspect ratio 9:16 (720px x 1280px)** ",-1)),q={class:"flex w-full text-center gap-4"},K={class:"text-center text-green-600"},P={class:"text-center text-red-600"},X={class:"title-md"},Y={class:"md:flex justify-between"},G=S(()=>e("b",null,"Course Description:",-1)),J=["innerHTML"],Q={key:0},W={class:"font-bold text-sky-600"},Z={class:""},ee={class:"title-sm"},se={__name:"CourseViewModal",props:{course:Object,isOpen:Boolean},emits:["close"],setup(i,{emit:y}){const h=i,d=D(),_=y,o=B(()=>d.courses.find(t=>t.id===h.course.id)),p=()=>{_("close")},u=v(null),f=v(""),b=v(""),w=t=>{const r=t.target.files[0];r&&r.size>2*1024*1024?(b.value="File should be less than 2MB",u.value=null,document.getElementById("file-input").value=""):(u.value=r,b.value="")},C=async()=>{if(!u.value)return;const t=new FormData;t.append("thumbnail",u.value);try{await d.uploadThumbnail(h.course.id,t),f.value="Thumbnail uploaded successfully!",u.value=null,document.getElementById("file-input").value=""}catch{b.value="An error occurred while uploading the thumbnail"}},c=t=>$(new Date(t),"dd-MMM-yyyy");return(t,r)=>{var s,x;return i.isOpen?(l(),a("div",E,[e("div",A,[e("div",{class:"flex top-2 right-2 z-50 absolute"},[e("button",{class:"bg-red-500 px-2 rounded-full text-white",onClick:p},"X")]),e("div",H,[e("img",{class:"aspect-video object-cover rounded-lg",src:o.value.thumbnail,alt:"Thumbnail"},null,8,R),U,e("div",q,[e("input",{id:"file-input",type:"file",onChange:w,class:"input-1"},null,32),e("button",{class:"btn-1",onClick:C},"Upload")]),e("p",K,n(f.value),1),e("p",P,n(b.value),1),e("h2",X,n(o.value.title),1),e("div",Y,[e("p",null,[m(" Course Category: "),e("b",null,n((x=(s=o.value)==null?void 0:s.category)==null?void 0:x.name),1)]),e("p",null,[m(" Course Type: "),e("b",null,n(o.value.course_type),1)])]),e("div",null,[G,e("div",{innerHTML:o.value.description,class:""},null,8,J)]),o.value.course_type==="Live Course"?(l(),a("p",Q,[m(" Start Date: "),e("span",W,n(c(o.value.start_date)),1)])):M("",!0),e("p",Z,[m(" Price: ৳ "),e("span",ee,n(o.value.price),1)])]),e("div",null,[e("button",{class:"btn-contrast",onClick:p},"Close")])])])):M("",!0)}}},te=z(se,[["__scopeId","data-v-d1fbb8fe"]]),oe={key:0,class:"modal"},le=e("h2",{class:"title-md text-red-600 text-center"},"Confirm Delete",-1),ae=e("p",{class:"text-center"},"Are you sure you want to delete this course?",-1),ne={__name:"CourseDeleteModal",props:{isOpen:Boolean,course:Object},emits:["close","confirmDelete"],setup(i,{emit:y}){const h=i,d=y,_=D(),o=async()=>{h.course&&(await _.deleteCourse(h.course.id),d("confirmDelete"),d("close"))},p=()=>{d("close")};return(u,f)=>i.isOpen?(l(),a("div",oe,[e("div",{class:"modal-content card-bg p-4 md:p-8"},[le,ae,e("div",{class:"flex space-x-4 justify-center"},[e("button",{class:"btn-contrast",onClick:o},"Yes"),e("button",{class:"btn-2",onClick:p},"No")])])])):M("",!0)}},ce={class:"my-container space-y-2 relative"},de={class:"flex justify-between items-center"},ie=e("h1",{class:"title-lg text-center"},"Courses",-1),ue={key:0,class:"space-y-2"},re=I('<div class="md:col-span-1 rounded md:px-2"><div class="aspect-video bg-gray-200"></div></div><div class="md:col-span-3 md:px-2"><div class="h-6 bg-gray-200 rounded-full mb-2"></div><div class="h-4 bg-gray-200 rounded-full"></div></div><div class="md:col-span-1 flex items-center justify-center px-2"><div class="h-6 bg-gray-200 rounded-full w-20"></div></div><div class="md:col-span-3 flex justify-between items-center gap-2 md:px-2"><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div><div class="h-10 bg-gray-200 rounded-full w-20"></div></div>',4),_e=[re],pe={key:1},ve={key:0,class:"text-center"},me=e("p",null,"No courses available.",-1),he=[me],fe={key:1,class:"space-y-2"},be={class:"md:col-span-1 px-2"},ye=["src"],xe={class:"font-bold text-sky-600 bg-sky-100 px-6 text-center rounded-b-md"},ge={class:"md:col-span-4 md:px-4 space-y-2 flex flex-col justify-between"},we={class:"title-md"},Ce={class:"text-sm md:text-base"},ke=e("b",null,"Created at: ",-1),Me={class:"flex justify-between"},$e={class:"font-bold text-sky-600"},De={key:0},je={class:"font-bold text-sky-600"},Oe={key:1,class:"bg-pink-50 px-3 rounded-full"},Se={class:"font-bold text-pink-600"},Te={class:"flex justify-between items-center gap-2"},Be=["onClick"],Ve=e("i",{class:"fas fa-eye"},null,-1),Fe=e("p",{class:"hidden md:flex"},"View",-1),Le=[Ve,Fe],Ne=e("i",{class:"far fa-edit"},null,-1),Ie=e("p",{class:"hidden md:flex"},"Edit",-1),ze=["onClick"],Ee=e("i",{class:"fas fa-trash-alt"},null,-1),Ae=[Ee],He=e("i",{class:"fas fa-plus"},null,-1),Re=e("p",null,"Module",-1),Ke={__name:"CourseList",setup(i){const y=c=>{const t=new Date(c);return $(t,"dd-MMM-yyyy")},h=c=>{const t=new Date(c);return $(t,"dd-MMM-yyyy, hh:mm a")},d=D(),_=v([]),o=v(null),p=v(!1),u=v(!1),f=v(!0);L(async()=>{await d.fetchCourses(),_.value=d.courses.sort((c,t)=>t.id-c.id),f.value=!1});const b=c=>{o.value=c,p.value=!0},w=c=>{o.value=c,u.value=!0},C=async()=>{await d.deleteCourse(o.value.id),_.value=d.courses};return(c,t)=>{const r=N("RouterLink");return l(),a("div",ce,[e("div",de,[ie,g(r,{class:"btn-2",to:"/new"},{default:k(()=>[m("Add New")]),_:1})]),f.value?(l(),a("div",ue,[(l(),a(j,null,O(3,s=>e("div",{key:s,class:"card-bg md:py-2 p-4 md:p-2 grid md:grid-cols-8 md:divide-x-2 animate-pulse"},_e)),64))])):(l(),a("div",pe,[_.value.length===0?(l(),a("div",ve,he)):(l(),a("ul",fe,[(l(!0),a(j,null,O(_.value,s=>{var x;return l(),a("li",{class:"card-bg md:py-4 p-4 md:p-2 grid md:grid-cols-5 md:divide-x-2",key:s.id},[e("div",be,[e("img",{class:"aspect-video object-cover rounded-t-md",src:s.thumbnail,alt:"Thumbnail"},null,8,ye),e("p",xe,n((x=s==null?void 0:s.category)==null?void 0:x.name),1)]),e("div",ge,[e("h2",we,n(s.title),1),e("p",Ce,[ke,m(n(h(s.created_at)),1)]),e("div",Me,[e("p",null,[m(" Fee: "),e("span",$e,n(s.price>0?`${s.price} TK`:"Free"),1)]),s.course_type==="Live Course"?(l(),a("p",De,[m(" Start Date: "),e("span",je,n(y(s.start_date)),1)])):(l(),a("p",Oe,[e("span",Se,n(s.course_type),1)]))]),e("div",Te,[e("button",{class:"btn-1 pb-2",onClick:T=>b(s)},Le,8,Be),g(r,{to:"/course-list/"+s.id+"/edit",class:"btn-1 pb-2"},{default:k(()=>[Ne,Ie]),_:2},1032,["to"]),e("button",{class:"btn-contrast pb-2",onClick:T=>w(s)},Ae,8,ze),g(r,{class:"btn-1",to:"/course-list/"+s.id+"/modules"},{default:k(()=>[He,Re]),_:2},1032,["to"])])])])}),128))]))])),g(te,{class:"absolute top-0 shadow-2xl w-full z-40",course:o.value,isOpen:p.value,onClose:t[0]||(t[0]=s=>p.value=!1)},null,8,["course","isOpen"]),g(ne,{class:"absolute top-0 shadow-2xl w-full z-40",course:o.value,isOpen:u.value,onClose:t[1]||(t[1]=s=>u.value=!1),onConfirmDelete:C},null,8,["course","isOpen"])])}}};export{Ke as default};
