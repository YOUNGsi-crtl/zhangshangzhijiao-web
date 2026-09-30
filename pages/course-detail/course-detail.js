Page({
 data:{course:{name:"肩颈体态改善",short:"肩颈",desc:"改善圆肩与头前伸，建立肩胛稳定",duration:12,moves:6},moves:["肩胛后缩","站姿侧平举","墙天使","颈部回正","俯身Y字","呼吸放松"]},
 onLoad(o){if(o.id==="squat")this.setData({course:{name:"基础深蹲矫正",short:"深蹲",desc:"强化下肢基础，训练膝髋协同",duration:15,moves:5},moves:["站姿深蹲","箱式深蹲","半蹲保持","髋主导训练","放松"]})},
 begin(){wx.navigateTo({url:"/pages/calibration/calibration"})}
})