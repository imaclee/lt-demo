//index.js

import ltadx from '../../utils/ltadx/ltadx';

Page({
  data: {
    bannerAds: [],
    topAds: []
  },
  onLoad: function () {
    // 获取换量广告
    ltadx.getAdsByPosition('banner').then(ads => {
      if (ads) {
        this.setData({
          bannerAds: ads
        })
      }
      ltadx.getAdsByPosition('top').then(ads => {
        if (ads) {
          this.setData({
            topAds: ads
          })
        }
      });
    });

  },
  exchangeCoupleClicked: function (event) {
    // 记录点击事件
    console.log('report ad click event, adId=', event.currentTarget.dataset.adId);
    ltadx.sendAdClickEvent(event.currentTarget.dataset.adId);
  }
})