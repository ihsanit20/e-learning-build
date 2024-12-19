import{r as d,d as k,w as U,o as j,a6 as h,e as p,f as m,g as t,x as o,n as i,p as v,a1 as R,q as E,t as V}from"./index-C_Bbi4Qr.js";const M={class:"w-full mx-auto"},O={class:"text-xs md:text-base flex items-center gap-x-1 md:gap-x-2 flex-wrap rounded-t-md bg-gray-100 border border-gray-300 px-2 py-1"},H=t("i",{class:"fas fa-bold"},null,-1),I=[H],B=t("i",{class:"fas fa-italic"},null,-1),A=[B],N=t("i",{class:"fas fa-underline"},null,-1),P=[N],W=t("i",{class:"fas fa-list-ul"},null,-1),F=[W],G=t("i",{class:"fas fa-list-ol"},null,-1),J=[G],K={class:"relative alignment-dropdown"},Q=t("i",{class:"fas fa-chevron-down ml-1"},null,-1),X={key:0,class:"absolute flex bg-white border border-gray-300 rounded mt-1 z-10"},Y=t("i",{class:"fas fa-align-left"},null,-1),Z=[Y],ee=t("i",{class:"fas fa-align-center"},null,-1),te=[ee],ne=t("i",{class:"fas fa-align-right"},null,-1),se=[ne],oe={class:"relative color-dropdown"},le=t("i",{class:"fas fa-palette"},null,-1),re=[le],ie=t("i",{class:"fas fa-chevron-down ml-1"},null,-1),ae={key:0,class:"absolute bg-white border border-gray-300 rounded mt-1 z-10 p-2 flex gap-1"},de={class:"relative font-size-dropdown"},ue=t("i",{class:"fas fa-chevron-down ml-1"},null,-1),ce={key:0,class:"absolute bg-white border border-gray-300 rounded mt-1 z-10 grid grid-cols-2 text-sm"},pe={__name:"TextEditor",props:{modelValue:String},emits:["update:modelValue"],setup(L,{emit:w}){const b=L,S=w,a=d(null),s=d({bold:!1,italic:!1,underline:!1,insertUnorderedList:!1,insertOrderedList:!1,justifyLeft:!1,justifyCenter:!1,justifyRight:!1,foreColor:"",fontSize:"16px"}),u=d(!1),c=d(!1),f=d(!1),z={1:"10px",2:"13px",3:"16px",4:"18px",5:"24px",6:"32px",7:"48px"},$=k(()=>s.value.justifyLeft?"fa-align-left":s.value.justifyCenter?"fa-align-center":s.value.justifyRight?"fa-align-right":"fa-align-left"),_=k(()=>s.value.foreColor||"black");U(()=>b.modelValue,r=>{a.value&&a.value.innerHTML!==r&&(a.value.innerHTML=r)});const l=(r,e=null)=>{document.execCommand(r,!1,e),g()},D=()=>{S("update:modelValue",a.value.innerHTML)},g=()=>{s.value={bold:document.queryCommandState("bold"),italic:document.queryCommandState("italic"),underline:document.queryCommandState("underline"),insertUnorderedList:document.queryCommandState("insertUnorderedList"),insertOrderedList:document.queryCommandState("insertOrderedList"),justifyLeft:document.queryCommandState("justifyLeft"),justifyCenter:document.queryCommandState("justifyCenter"),justifyRight:document.queryCommandState("justifyRight"),foreColor:document.queryCommandValue("foreColor"),fontSize:z[document.queryCommandValue("fontSize")]||"16px"}},x=()=>{g()},q=async r=>{const e=document.createElement("img");e.src=URL.createObjectURL(r),await new Promise(T=>{e.onload=T});const n=document.createElement("canvas");return n.width=e.width,n.height=e.height,n.getContext("2d").drawImage(e,0,0),n.toDataURL("image/webp")};j(()=>{document.addEventListener("selectionchange",x),a.value.addEventListener("paste",async r=>{r.preventDefault();const e=r.clipboardData;if(e.files.length){const n=e.files[0];if(n.type.startsWith("image/")){const C=await q(n);document.execCommand("insertHTML",!1,`<img src="${C}" alt="Pasted Image" />`)}}else{const n=e.getData("text/plain");document.execCommand("insertText",!1,n)}}),a.value.innerHTML=b.modelValue}),h(()=>{document.removeEventListener("selectionchange",x)});const y=r=>{!r.target.closest(".alignment-dropdown")&&!r.target.closest(".color-dropdown")&&!r.target.closest(".font-size-dropdown")&&(u.value=!1,c.value=!1,f.value=!1)};return j(()=>{document.addEventListener("click",y)}),h(()=>{document.removeEventListener("click",y)}),(r,e)=>(p(),m("div",M,[t("div",O,[t("button",{type:"button",onClick:e[0]||(e[0]=o(n=>l("bold"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":s.value.bold,"hover:bg-gray-200":!s.value.bold},"p-2 rounded flex items-center justify-center transition"])},I,2),t("button",{type:"button",onClick:e[1]||(e[1]=o(n=>l("italic"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":s.value.italic,"hover:bg-gray-200":!s.value.italic},"p-2 rounded flex items-center justify-center transition"])},A,2),t("button",{type:"button",onClick:e[2]||(e[2]=o(n=>l("underline"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":s.value.underline,"hover:bg-gray-200":!s.value.underline},"p-2 rounded flex items-center justify-center transition"])},P,2),t("button",{type:"button",onClick:e[3]||(e[3]=o(n=>l("insertUnorderedList"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":s.value.insertUnorderedList,"hover:bg-gray-200":!s.value.insertUnorderedList},"p-2 rounded flex items-center justify-center transition"])},F,2),t("button",{type:"button",onClick:e[4]||(e[4]=o(n=>l("insertOrderedList"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":s.value.insertOrderedList,"hover:bg-gray-200":!s.value.insertOrderedList},"p-2 rounded flex items-center justify-center transition"])},J,2),t("div",K,[t("button",{onClick:e[5]||(e[5]=o(n=>u.value=!u.value,["stop","prevent"])),class:"p-2 rounded flex gap-2 items-center justify-center transition hover:bg-gray-200"},[t("i",{class:i(`fas ${$.value}`)},null,2),Q]),u.value?(p(),m("div",X,[t("button",{onClick:e[6]||(e[6]=o(n=>l("justifyLeft"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":s.value.justifyLeft,"hover:bg-gray-200":!s.value.justifyLeft},"p-2 flex items-center justify-center"])},Z,2),t("button",{onClick:e[7]||(e[7]=o(n=>l("justifyCenter"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":s.value.justifyCenter,"hover:bg-gray-200":!s.value.justifyCenter},"p-2 flex items-center justify-center"])},te,2),t("button",{onClick:e[8]||(e[8]=o(n=>l("justifyRight"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":s.value.justifyRight,"hover:bg-gray-200":!s.value.justifyRight},"p-2 flex items-center justify-center"])},se,2)])):v("",!0)]),t("div",oe,[t("button",{onClick:e[9]||(e[9]=o(n=>c.value=!c.value,["stop","prevent"])),class:"p-2 rounded flex gap-2 items-center justify-center transition hover:bg-gray-200"},[t("span",{style:R({color:_.value})},re,4),ie]),c.value?(p(),m("div",ae,[t("button",{onClick:e[10]||(e[10]=o(n=>l("foreColor","black"),["stop","prevent"])),class:"size-4",style:{background:"black"}}),t("button",{onClick:e[11]||(e[11]=o(n=>l("foreColor","red"),["stop","prevent"])),class:"size-4",style:{background:"red"}}),t("button",{onClick:e[12]||(e[12]=o(n=>l("foreColor","green"),["stop","prevent"])),class:"size-4",style:{background:"green"}}),t("button",{onClick:e[13]||(e[13]=o(n=>l("foreColor","blue"),["stop","prevent"])),class:"size-4",style:{background:"blue"}})])):v("",!0)]),t("div",de,[t("button",{onClick:e[14]||(e[14]=o(n=>f.value=!f.value,["stop","prevent"])),class:"p-2 rounded flex gap-2 items-center justify-center transition hover:bg-gray-200"},[E(V(s.value.fontSize)+" ",1),ue]),f.value?(p(),m("div",ce,[t("button",{onClick:e[15]||(e[15]=o(n=>l("fontSize","1"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"10px"),t("button",{onClick:e[16]||(e[16]=o(n=>l("fontSize","2"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"13px"),t("button",{onClick:e[17]||(e[17]=o(n=>l("fontSize","3"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"16px"),t("button",{onClick:e[18]||(e[18]=o(n=>l("fontSize","4"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"18px"),t("button",{onClick:e[19]||(e[19]=o(n=>l("fontSize","5"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"24px"),t("button",{onClick:e[20]||(e[20]=o(n=>l("fontSize","6"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"32px"),t("button",{onClick:e[21]||(e[21]=o(n=>l("fontSize","7"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"48px")])):v("",!0)])]),t("div",{ref_key:"editor",ref:a,contenteditable:"true",onInput:D,class:"border border-gray-300 p-4 rounded-b-md min-h-[120px]",placeholder:"Description"},null,544)]))}};export{pe as _};
