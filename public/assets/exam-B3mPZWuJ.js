import{Y as i,Z as s}from"./index-NELb0t0C.js";const x=i("exam",{state:()=>({exams:{},exam:{},isVisibleAddQuestionModal:!1}),actions:{async fetchExams(e){try{const r=await s.get(`/modules/${e}/exams`);this.exams={...this.exams,[e]:r.data}}catch(r){console.error("Error fetching exams:",r)}},async addExam(e,r){try{const a=await s.post(`/modules/${e}/exams`,r);this.exams[e]||(this.exams[e]=[]),this.exams[e]=[...this.exams[e],a.data]}catch(a){console.error("Error adding exam:",a)}},async deleteExam(e,r){try{await s.delete(`/modules/${e}/exams/${r}`),this.exams[e]&&(this.exams[e]=this.exams[e].filter(a=>a.id!==r))}catch(a){console.error("Error deleting exam:",a)}},async updateExam(e,r,a){try{const t=await s.put(`/exams/${r}`,a);if(this.exams[e]){const o=this.exams[e].findIndex(n=>n.id===r);o!==-1&&(this.exams[e][o]=t.data)}}catch(t){console.error("Error updating exam:",t)}},async fetchSingleExam(e){try{const r=await s.get(`/exams/${e}`);return this.exam=r.data,this.exam}catch(r){console.error("Error adding exam:",r)}},async addExamQuestion(e,r,a={}){try{return(await s.post(`/exams/${e}/select-questions/${r}`,a)).data}catch(t){console.error("Error adding exam:",t)}},async removeExamQuestion(e,r){try{return(await s.delete(`/exams/${e}/remove-questions/${r}`)).data}catch(a){console.error("Error adding exam:",a)}},async changeExamQuestionMark(e,r={}){try{return(await s.put(`/exams/${e}/change-question-mark`,r)).data}catch(a){console.error("Error adding exam:",a)}}}});export{x as u};
