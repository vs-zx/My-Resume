// pages/personal/personal.js
Page({

  data: {

  },
  goBack() {
    wx.redirectTo({
      url: "../index/index"
    });
  },
  onShow: function () {
    // if(wx.canIUse('hideHomeButton')){
    //   wx.hideHomeButton();
    // }
  },

  
  
})