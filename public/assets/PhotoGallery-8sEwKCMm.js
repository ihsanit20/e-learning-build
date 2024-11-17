import{a5 as g,r as u,o as m,e as s,f as l,g as e,t as h,q as r,i as n,F as b,h as k}from"./index-CGxlq7hy.js";const x={class:"my-container p-4"},P={class:"mb-4"},w={class:"flex w-full text-center gap-4"},C={key:0,class:"text-green-500 mt-2"},F={key:1,class:"text-red-500 mt-2"},D={key:0,class:"text-center"},B={key:1,class:"text-center text-red-500"},G={class:"grid md:grid-cols-3 gap-4"},M={class:""},N=["src"],S={class:"border-gray-200"},E=["onClick"],I={key:2},j={__name:"PhotoGallery",setup(L){const o=g(),c=u(null),d=u(""),i=u(""),v=u(null),_=a=>{c.value=a.target.files[0]},y=async()=>{if(!c.value)return;const a=new FormData;a.append("photo",c.value);try{await o.uploadPhoto(a),d.value="Photo upload successful",i.value="",v.value.value=""}catch{d.value="",i.value="Failed to upload photo"}finally{c.value=null}},f=async a=>{if(confirm("Are you sure you want to delete this photo?"))try{await o.deletePhoto(a)}catch(t){console.error("Error deleting photo:",t)}};return m(async()=>{await o.fetchPhotos()}),(a,t)=>(s(),l("div",x,[t[3]||(t[3]=e("h1",{class:"text-2xl font-bold mb-4"},"Photo Gallery",-1)),e("div",P,[e("div",w,[e("input",{ref_key:"fileInput",ref:v,type:"file",onChange:_,class:"input-1"},null,544),e("button",{class:"btn-2",onClick:y},"Upload")]),d.value?(s(),l("p",C,h(d.value),1)):r("",!0),i.value?(s(),l("p",F,h(i.value),1)):r("",!0)]),n(o).loading?(s(),l("div",D,t[0]||(t[0]=[e("p",null,"Loading photos...",-1)]))):r("",!0),n(o).error?(s(),l("div",B,[e("p",null,h(n(o).error),1)])):r("",!0),e("div",G,[(s(!0),l(b,null,k(n(o).photos,p=>(s(),l("div",{key:p.id,class:"card-bg p-4"},[e("div",M,[e("img",{src:p.photo,alt:"Photo",class:"aspect-video object-cover rounded-md"},null,8,N)]),t[1]||(t[1]=e("hr",null,null,-1)),e("div",S,[e("button",{onClick:U=>f(p.id),class:"btn-contrast"},"Delete",8,E)])]))),128))]),n(o).photos.length===0?(s(),l("div",I,t[2]||(t[2]=[e("div",{class:"py-2 px-4 border-b border-gray-200"},"No photos found",-1)]))):r("",!0)]))}};export{j as default};
