import{u as i}from"./purchase-BuAUgaYT.js";import{b as p,c as m,e as y,f as d,g as f}from"./main-nmRUI8-2.js";const _={class:"my-container py-4"},P={__name:"BkashCallback",setup(h){const s=p(),c=m(),t=i(),e=s.params.courseId,u=s.query.paymentID,n=s.query.coupon_code,l=s.query.user_id,r=s.query.status;return r==="success"?t.executePayment(e,{paymentID:u,coupon_code:n,user_id:l}).then(o=>{console.log(o),o.status?c.replace(`/checkout/${e}?message=Course enrolled successfully`):(t.error="Payment failed! Try Again",c.replace(`/checkout/${e}`))}):r==="cancel"?(t.error="Payment canceled! Try Again",c.replace(`/checkout/${e}`)):r==="failure"?(t.error="Payment failed! Try Again",c.replace(`/checkout/${e}`)):c.replace(`/checkout/${e}`),(o,a)=>(y(),d("div",_,a[0]||(a[0]=[f("h1",{class:"title-xl text-center"},"Payment Processing...",-1)])))}};export{P as default};
