import{u as l}from"./purchase-RuTbrHl0.js";import{b as i,c as p,e as m,f as y,g as f}from"./index-CWc9enRv.js";const d={class:"my-container py-4"},g={__name:"BkashCallback",setup(h){const c=i(),s=p(),t=l(),e=c.params.courseId,n=c.query.paymentID,u=c.query.coupon_code,o=c.query.status;return o==="success"?t.executePayment(e,{paymentID:n,coupon_code:u}).then(r=>{console.log(r),r.status?s.replace(`/checkout/${e}?message=Course enrolled successfully`):(t.error="Payment failed! Try Again",s.replace(`/checkout/${e}`))}):o==="cancel"?(t.error="Payment canceled! Try Again",s.replace(`/checkout/${e}`)):o==="failure"?(t.error="Payment failed! Try Again",s.replace(`/checkout/${e}`)):s.replace(`/checkout/${e}`),(r,a)=>(m(),y("div",d,a[0]||(a[0]=[f("h1",{class:"title-xl text-center"},"Payment Processing...",-1)])))}};export{g as default};