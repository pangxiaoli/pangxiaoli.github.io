function bot_ui_ini() {
    var botui = new BotUI("hello-mirage");
    botui.message.add({
        delay: 800,
        content: "Hi, Welcome to my cabin 🍭"
    }).then(function () {
        botui.message.add({
            delay: 1000,
            content: "这里是 Mirage"
        }).then(function () {
            botui.message.add({
                delay: 1000,
                content: "天蝎座小胖子一枚～"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "然后呢？ 😃",
                        value: "sure"
                    }, {
                        text: "有多胖？ 🙄",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
            botui.message.add({
                delay: 600,
                content: "😘"
            }).then(function () {
                secondpart()
            })
        },
        end = function () {
            botui.message.add({
                delay: 600,
                content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 1000,
                content: "就读于重庆交通大学"
            }).then(function () {
                botui.message.add({
                    delay: 1000,
                    content: "是在计算机专业学物联网工程的程序媛"
                }).then(function () {
                    botui.message.add({
                        delay: 1000,
                        content: "将敲代码看成一种快乐"
                    }).then(function () {
                        botui.message.add({
                            delay: 1000,
                            content: "主修 Java 和 Python,略知 linux,偶尔也搞 HTML/CSS/JavaScript/Spring"
                        }).then(function () {
                            botui.message.add({
                                delay: 1000,
                                content: "专业方向，物联网及智能家居(Internet of things)及机器视觉(machine version)"
                            }).then(function () {
                                botui.message.add({
                                    delay: 1000,
                                    content: "喜欢看韩剧和玩手游"
                                }).then(function () {
                                    botui.action.button({
                                        delay: 1000,
                                        action: [{
                                            text: "为什么叫cungudafa呢？🤔",
                                            value: "why-mashiro"
                                        }]
                                    }).then(function (a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1e3,
                content: "cungudafa是村姑大发的拼音，大发在韩语发音中时很厉害的意思。"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "为什么叫村姑呢？",
                        value: "why-cat"
                    }]
                }).then(function (a) {
                    fourthpart()
                })
            })
        },
        fourthpart = function () {
            botui.message.add({
                delay: 1e3,
                content: "我的游戏名叫村姑,后来也有人叫我村姑学姐 "
            }).then(function () {
                botui.message.add({
                    delay: 1100,
                    content: "希望自己打游戏很厉害吧，哈哈哈"
                }).then(function () {
                    botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "域名有什么含义吗？",
                            value: "why-domain"
                        }]
                    }).then(function (a) {
                        fifthpart()
                    })
                })
            })
        },
        fifthpart = function () {
            botui.message.add({
                delay: 1e3,
                content: "emmmm,csdn,github,都是cungudafa哦"
            }).then(function () {
                botui.message.add({
                    delay: 1600,
                    content: "那么，相遇就是缘分，赏个赞吧 ^_^"
                })
            })
        }
}