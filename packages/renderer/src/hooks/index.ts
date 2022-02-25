export interface ImgInfo {
    id: number
    name: string
    url: string
}

export async function getImg(callback: (e: ImgInfo[]) => void) {
    let arr: ImgInfo[] = [{
        id: 0,
        name: "墙",
        url: (await import("../assets/img/q.png")).default
    }, {
        id: 1,
        name: "路",
        url: (await import("../assets/img/bg.png")).default
    }, {
        id: 19,
        name: "鬼墙",
        url: (await import("../assets/img/q.png")).default
    }, {
        id: 21,
        name: "银门",
        url: (await import("../assets/img/m1.png")).default
    }, {
        id: 22,
        name: "金门",
        url: (await import("../assets/img/m2.png")).default
    }, {
        id: 31,
        name: "主角",
        url: (await import("../assets/img/niu.png")).default
    }, {
        id: 32,
        name: "月色",
        url: (await import("../assets/img/jiangnan.png")).default
    }, {
        id: 41,
        name: "怪物1",
        url: (await import("../assets/img/1.png")).default
    }, {
        id: 42,
        name: "怪物2",
        url: (await import("../assets/img/2.png")).default
    }, {
        id: 43,
        name: "怪物3",
        url: (await import("../assets/img/3.png")).default
    }, {
        id: 44,
        name: "怪物4",
        url: (await import("../assets/img/4.png")).default
    }, {
        id: 45,
        name: "怪物5",
        url: (await import("../assets/img/5.png")).default
    }, {
        id: 46,
        name: "怪物6",
        url: (await import("../assets/img/6.png")).default
    }, {
        id: 47,
        name: "怪物7",
        url: (await import("../assets/img/7.png")).default
    }, {
        id: 48,
        name: "怪物8",
        url: (await import("../assets/img/8.png")).default
    }, {
        id: 49,
        name: "怪物9",
        url: (await import("../assets/img/9.png")).default
    }, {
        id: 51,
        name: "上楼",
        url: (await import("../assets/img/lt1.png")).default
    }, {
        id: 52,
        name: "下楼",
        url: (await import("../assets/img/lt2.png")).default
    }, {
        id: 61,
        name: "神器",
        url: (await import("../assets/img/j.png")).default
    }, {
        id: 62,
        name: "盾牌",
        url: (await import("../assets/img/dun.png")).default
    }, {
        id: 63,
        name: "宝剑",
        url: (await import("../assets/img/bz.png")).default
    }, {
        id: 64,
        name: "精灵",
        url: (await import("../assets/img/jl.png")).default
    }, {
        id: 65,
        name: "大药水",
        url: (await import("../assets/img/ys1.png")).default
    }, {
        id: 66,
        name: "小药水",
        url: (await import("../assets/img/ys2.png")).default
    }, {
        id: 67,
        name: "金钥匙",
        url: (await import("../assets/img/yshi1.png")).default
    }, {
        id: 68,
        name: "银钥匙",
        url: (await import("../assets/img/yshi2.png")).default
    }]
    callback(arr)
}