import{b as L,c as R,u as A,a as N,r as l,o as j,m as z,e as u,f as r,g as e,t as b,z as i,a5 as I,F as P,h as q,i as H,H as M,q as x,A as w,p as $,E as k,s as G,x as J,v as K}from"./index-BedAWJhs.js";import{_ as O}from"./TextEditor-DhzaN5rc.js";const Q={class:"my-container space-y-2"},W=e("h2",{class:"title-md text-center"},"Edit Course",-1),X={class:"grid md:grid-cols-5 gap-2 items-center border p-2"},Y=["src"],Z={key:1,class:"col-span-1 flex items-center justify-center"},ee=e("div",{class:"loader"},null,-1),te=[ee],se={class:"md:col-span-4 space-y-2"},oe={class:"flex w-full text-center gap-4"},le=["disabled"],ae=e("p",{class:"text-sm text-center text-red-600"}," **File size max: 1.9 MB. Aspect ratio: 9:16 (720px x 1280px)** ",-1),ne={class:"text-center text-green-600"},ue={class:"text-center text-red-600"},re={class:"space-y-2 bg-gray-100 p-2 rounded-md"},ie=e("p",null,"Course Category",-1),de=e("option",{disabled:"",value:""},"Select a Category",-1),ce=["value"],pe=e("p",null,"Course Type",-1),ve={class:"flex items-center gap-2"},_e=e("p",null,"Course Title",-1),me=e("p",null,"Course Price",-1),he={key:0},ye=e("p",null,"Start Date",-1),fe=e("p",null,"Course Description",-1),ge={class:"border md:p-4 p-2 rounded-md bg-white"},Ce={class:"flex justify-center gap-4"},be=e("button",{class:"btn-2",type:"submit"},"Save",-1),Se={__name:"CourseEditForm",setup(xe){const D=L(),E=R(),c=A(),V=N(),p=l(""),v=l(""),_=l(""),S=l(""),m=l(""),h=l(""),a=l(""),d=l(null),C=l(""),n=l(""),y=l(!1),f=D.params.id,F=async()=>{try{await c.fetchCourse(f);const o=c.course;o&&(p.value=o.title,v.value=o.description,_.value=o.price,S.value=o.thumbnail,m.value=o.start_date?K(new Date(o.start_date),"yyyy-MM-dd"):"",h.value=o.category_id,a.value=o.course_type)}catch(o){console.error("Error loading course:",o),n.value="Failed to load course data"}},U=async()=>{var t,g;const o={id:f,title:p.value,description:v.value,price:_.value,start_date:a.value==="Live Course"?m.value:null,category_id:h.value,course_type:a.value};try{await c.updateCourse(f,o),C.value="Course updated successfully!",E.push("/course-list")}catch(s){console.error("Error updating course:",s),n.value=((g=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:g.message)??"An error occurred while updating the course"}},T=o=>{const t=o.target.files[0];t&&t.size>2*1024*1024?(n.value="File should be less than 2MB",d.value=null,document.getElementById("file-input").value=""):(d.value=t,n.value="")},B=async()=>{if(!d.value)return;y.value=!0;const o=new FormData;o.append("thumbnail",d.value);try{await c.uploadThumbnail(f,o),C.value="ছবি আপলোড সফল হয়েছে",d.value=null,document.getElementById("file-input").value="",location.reload()}catch(t){console.error("Error uploading thumbnail:",t),n.value="An error occurred while uploading the thumbnail"}finally{y.value=!1}};return j(async()=>{await V.fetchCategories(),await F()}),(o,t)=>{const g=z("RouterLink");return u(),r("div",Q,[W,e("div",X,[y.value?(u(),r("div",Z,te)):(u(),r("img",{key:0,class:"col-span-1 aspect-video object-cover rounded-md",src:S.value,alt:"Thumbnail"},null,8,Y)),e("div",se,[e("div",oe,[e("input",{id:"file-input",type:"file",onChange:T,class:"input-1"},null,32),e("button",{class:"btn-2",onClick:B,type:"button",disabled:y.value}," Upload ",8,le)]),ae,e("p",ne,b(C.value),1),e("p",ue,b(n.value),1)])]),e("form",{onSubmit:J(U,["prevent"])},[e("div",re,[e("div",null,[ie,i(e("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>h.value=s),class:"input-1"},[de,(u(!0),r(P,null,q(H(V).categories,s=>(u(),r("option",{key:s.id,value:s.id},b(s.name),9,ce))),128))],512),[[I,h.value]])]),e("div",null,[pe,e("div",ve,[e("label",null,[i(e("input",{type:"radio",value:"Live Course","onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s)},null,512),[[M,a.value]]),x(" Live Course ")]),e("label",null,[i(e("input",{type:"radio",value:"Recorded Course","onUpdate:modelValue":t[2]||(t[2]=s=>a.value=s)},null,512),[[M,a.value]]),x(" Recorded Course ")])])]),e("div",null,[_e,i(e("input",{class:"input-1","onUpdate:modelValue":t[3]||(t[3]=s=>p.value=s),placeholder:"Title"},null,512),[[w,p.value]])]),e("div",null,[me,i(e("input",{class:"input-1","onUpdate:modelValue":t[4]||(t[4]=s=>_.value=s),placeholder:"Price"},null,512),[[w,_.value]])]),a.value==="Live Course"?(u(),r("div",he,[ye,i(e("input",{class:"input-1",type:"date","onUpdate:modelValue":t[5]||(t[5]=s=>m.value=s),placeholder:"Start Date"},null,512),[[w,m.value]])])):$("",!0),e("div",null,[fe,e("div",ge,[k(O,{modelValue:v.value,"onUpdate:modelValue":t[6]||(t[6]=s=>v.value=s),placeholder:"Description"},null,8,["modelValue"])])])]),e("div",Ce,[be,k(g,{class:"btn-contrast",to:"/course-list"},{default:G(()=>[x("Cancel")]),_:1})])],32)])}}};export{Se as default};
