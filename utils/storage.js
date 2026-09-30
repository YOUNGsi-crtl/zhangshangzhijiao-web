function saveSession(report) {
  const list = wx.getStorageSync("trainingHistory") || []
  list.unshift(report)
  wx.setStorageSync("trainingHistory", list.slice(0,30))
}
function getHistory() { return wx.getStorageSync("trainingHistory") || [] }
module.exports = {saveSession, getHistory}