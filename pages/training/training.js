const {analyze}=require("../../utils/mockAI")
const {saveSession}=require("../../utils/storage")
Page({
 data:{elapsed:0,score:91,progress:13,tip:"保持膝盖与脚尖同向",feedbackClass:"normal",points:{head:{x:50,y:13}}},
 onLoad(){
   this.timer=setInterval(()=>{const elapsed=this.data.elapsed+1;if(elapsed>=60){this.finish();return}
     const a=analyze(elapsed,"深蹲")
     this.setData({elapsed,score:a.score,progress:Math.round(elapsed/60*100),tip:a.tip,feedbackClass:a.errors.length?"warning":"normal",points:a.skeleton})
   },1000)
 },
 onUnload(){clearInterval(this.timer)},
 finish(){
   clearInterval(this.timer)
   const report={id:Date.now(),date:new Date().toLocaleString(),course:"基础深蹲矫正",duration:this.data.elapsed,score:this.data.score,errors:["膝盖内扣","动作幅度不足"],advice:"建议加强膝髋协同与下肢稳定训练。"}
   saveSession(report)
   wx.redirectTo({url:"/pages/report/report?score="+report.score+"&duration="+report.duration})
 }
})