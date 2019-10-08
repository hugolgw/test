var app = getApp()
Page({
    data: {
        currentTab: 0,
        tabs: [{
                text: '推荐',
                data: [{
                        style: 'banner',
                        title: '国庆70周年阅兵精彩回顾',
                        type: '央视新闻',
                        bannerUrl: 'http://f.hiphotos.baidu.com/video/pic/item/9f510fb30f2442a7324726a5de43ad4bd1130261.jpg',
                        good: 1433,
                        share: 52
                    },
                    {
                        style: 'banner',
                        title: '小伙含泪翻唱《你的样子》，感动全场，导师都为他疯狂爆灯！',
                        type: '百度新闻',
                        bannerUrl: 'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=8dd8204747b39c39e5401fb08ca580c3&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F7b146869b72f6c82d6403b738f581c9b.jpeg',
                        good: 33,
                        share: 522
                    },
                    {
                        style: 'small',
                        title: '沈志泽不远万里寻找心上人，看到心上人的出场瞬间，美炸了！',
                        content: '“仰首一望碧空净，唯见天兵画彩虹。”一架架飞机不断变换着梦幻般的阵型，凌空起舞、旋转升腾……一系列的高难度动作充满力量、激情和动感，领队机梯队将飞行员精湛技术和飞机优越性能发挥得淋漓尽致。',
                        type: '百度新闻',
                        bannerUrl: 'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=9b484cffc3eabd46948e124937a30dba&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F47de86dcd19564f6d6418ed5388bd5191074.png',
                        good: 33,
                        share: 522
                    }
                ]
            },
            {
                text: '财经',
                data: [{
                        title: '国庆70周年阅兵精彩回顾',
                        type: '央视新闻',
                        bannerUrl: 'http://f.hiphotos.baidu.com/video/pic/item/9f510fb30f2442a7324726a5de43ad4bd1130261.jpg',
                        good: 1433,
                        share: 52
                    },
                    {
                        title: '小伙含泪翻唱《你的样子》，感动全场，导师都为他疯狂爆灯！',
                        type: '百度新闻',
                        bannerUrl: 'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=8dd8204747b39c39e5401fb08ca580c3&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F7b146869b72f6c82d6403b738f581c9b.jpeg',
                        good: 33,
                        share: 522
                    },
                    {
                        title: '沈志泽不远万里寻找心上人，看到心上人的出场瞬间，美炸了！',
                        type: '百度新闻',
                        bannerUrl: 'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=80&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=9b484cffc3eabd46948e124937a30dba&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F47de86dcd19564f6d6418ed5388bd5191074.png',
                        good: 33,
                        share: 522
                    }
                ]
            },
            {
                text: '汽车'
            },
            {
                text: '健康'
            },
            {
                text: '教育'
            }
        ],
    },
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    //滑动切换
    swiperTab: function(e) {
        console.log(e)
        var that = this;
        that.setData({
            currentTab: e.detail.current
        });
    },
    //点击切换
    clickTab: function(e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    }
})