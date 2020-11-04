//index.js
Page({
  data:{

  },
  // 去个人信息页
  toPersonalPage() {
    wx.redirectTo({
      url:"../personal/personal"
    });
  },
  // 去技能页
  toSkillPage() {
    wx.redirectTo({
      url:"../skill/skill"
    });
  },
  // 去项目页
  toProjectPage() {
    wx.redirectTo({
      url:"../project/project"
    });
  },
});