function getScore(tick) {
  const wave = Math.sin(tick / 4) * 4
  return Math.max(78, Math.min(98, Math.round(90 + wave)))
}
function getSkeleton(score) {
  const ok = score >= 86
  return {
    head: {x: 50, y: 13},
    shoulderL:{x:39,y:27}, shoulderR:{x:61,y:27},
    elbowL:{x:31,y:40}, elbowR:{x:69,y:40},
    wristL:{x:27,y:53}, wristR:{x:73,y:53},
    hipL:{x:44,y:52}, hipR:{x:56,y:52},
    kneeL:{x:42,y:72}, kneeR:{x:58,y:72},
    ankleL:{x:40,y:91}, ankleR:{x:60,y:91},
    status: ok ? "normal" : "warning"
  }
}
function analyze(tick, exercise) {
  const score = getScore(tick)
  const errors = score < 86 ? ["肩线略有倾斜", "动作幅度不足"] : []
  return {
    score,
    skeleton: getSkeleton(score),
    errors,
    tip: errors.length ? errors[0] : (exercise === "深蹲" ? "保持膝盖与脚尖同向" : "动作稳定，保持当前节奏")
  }
}
module.exports = { analyze }