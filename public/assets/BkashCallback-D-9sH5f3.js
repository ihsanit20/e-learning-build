import{u}from"./purchase-CEZ8V-8D.js";import{b as l,c as i,e as p,f as m,g as y}from"./index-NELb0t0C.js";const _={class:"my-container py-4"},d=y("h1",{class:"title-xl text-center"},"Payment Processing...",-1),h=[d],x={__name:"BkashCallback",setup(f){const t=l(),e=i(),s=u(),c=t.params.courseId,r=t.query.paymentID,n=t.query.coupon_code,o=t.query.status;return o==="success"?s.executePayment(c,{paymentID:r,coupon_code:n}).then(a=>{console.log(a),a.status?e.replace("/my/course"):(s.error="Payment failed! Try Again",e.replace(`/checkout/${c}`))}):o==="cancel"?(s.error="Payment canceled! Try Again",e.replace(`/checkout/${c}`)):o==="failure"?(s.error="Payment failed! Try Again",e.replace(`/checkout/${c}`)):e.replace(`/checkout/${c}`),(a,k)=>(p(),m("div",_,h))}};export{x as default};
