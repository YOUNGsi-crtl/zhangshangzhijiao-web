App({
  globalData: {
    brand: "掌上智教",
    theme: "#1A237E",
    mockMode: true
  },
  onLaunch() {
    const history = wx.getStorageSync("trainingHistory")
    if (!history) wx.setStorageSync("trainingHistory", [])
  }
})