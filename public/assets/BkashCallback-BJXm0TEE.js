import{u as l}from"./purchase-DAzzshWz.js";import{b as i,c as p,e as m,f as y,g as f}from"./index-CGxlq7hy.js";const d={class:"my-container py-4"},P={__name:"BkashCallback",setup(_){const c=i(),e=p(),s=l(),t=c.params.courseId,n=c.query.paymentID,u=c.query.coupon_code,r=c.query.status;return r==="success"?s.executePayment(t,{paymentID:n,coupon_code:u}).then(o=>{console.log(o),o.status?e.replace("/my/course"):(s.error="Payment failed! Try Again",e.replace(`/checkout/${t}`))}):r==="cancel"?(s.error="Payment canceled! Try Again",e.replace(`/checkout/${t}`)):r==="failure"?(s.error="Payment failed! Try Again",e.replace(`/checkout/${t}`)):e.replace(`/checkout/${t}`),(o,a)=>(m(),y("div",d,a[0]||(a[0]=[f("h1",{class:"title-xl text-center"},"Payment Processing...",-1)])))}};export{P as default};
