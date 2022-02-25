<template>
  <!-- <img
    v-for="item in imgList"
    draggable="false"
    style="height:40px;user-select: none;-webkit-user-drag: none;"
    :src="item.url"
  />-->
  <div class="box">
    <div class="box-hang" v-for="item0 in mapList" v-if="flag">
      <img
        v-for="item in item0"
        :src="getUrl(item)"
        style="height:40px; width: 40px;margin: 0;user-select: none;-webkit-user-drag: none;"
      />
    </div>
  </div>
  <div class="panel">
    <p>属性面板</p>
    <p>金钥匙：{{ zhujue.yshi1 }}</p>
    <p>银钥匙：{{ zhujue.yshi2 }}</p>
    <p>生命力：{{ zhujue.hp }}</p>
    <p>攻击力：{{ zhujue.gj }}</p>
    <p>防御力：{{ zhujue.fy }}</p>
  </div>
</template>

<script setup lang="ts">
import { customRef, nextTick, onMounted, reactive, ref } from 'vue'
import { getImg, ImgInfo } from '../hooks';

defineProps<{ msg: string }>()

const flag = ref<boolean>(false)

const allditu = ref<any>([
  [
    [51, 1, 41, 42, 42, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [65, 1, 1, 21, 1, 0, 63, 67, 1, 0, 1],
    [1, 42, 1, 0, 1, 0, 65, 68, 1, 0, 1],
    [0, 22, 0, 0, 1, 0, 0, 0, 21, 0, 1],
    [66, 1, 1, 0, 1, 21, 62, 66, 65, 0, 1],
    [1, 45, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 22, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 22, 0, 0, 0, 22, 0],
    [65, 1, 67, 0, 63, 1, 64, 0, 1, 48, 1],
    [65, 68, 61, 0, 1, 31, 1, 0, 43, 65, 43],
  ],
  [
    [1, 67, 1, 0, 67, 61, 62, 0, 1, 1, 1],
    [66, 1, 68, 0, 66, 1, 66, 0, 67, 1, 65],
    [1, 1, 1, 0, 1, 45, 1, 0, 1, 41, 1],
    [0, 22, 0, 0, 0, 21, 0, 0, 0, 22, 0],
    [1, 42, 1, 21, 43, 1, 1, 44, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [45, 1, 46, 1, 1, 1, 1, 1, 1, 1, 1],
    [22, 0, 0, 21, 0, 0, 0, 22, 0, 0, 21],
    [1, 0, 1, 41, 1, 0, 1, 47, 1, 0, 1],
    [1, 0, 49, 1, 63, 0, 64, 1, 65, 0, 31],
    [51, 0, 61, 43, 62, 0, 1, 48, 1, 0, 52],
  ],
  [
    [52, 1, 21, 1, 1, 1, 1, 1, 1, 1, 1],
    [31, 1, 0, 0, 1, 48, 1, 48, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 63, 63, 0, 1, 1, 1, 0, 1, 67],
    [1, 0, 61, 1, 22, 1, 1, 1, 21, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 0, 64, 1, 0, 1, 1, 1, 0, 1, 66],
    [1, 0, 1, 1, 21, 1, 1, 1, 22, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 0, 61, 62, 0, 1, 1, 1, 0, 1, 64],
    [51, 0, 61, 1, 22, 1, 1, 1, 22, 43, 1],
  ], [
    [31, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]
])
const floor = ref<number>(0)

const mapList = ref<number[][]>([])
mapList.value = allditu.value[floor.value]

const imgList = ref<any>()

const zhujue = reactive({
  yshi1: 5,
  yshi2: 5,
  hp: 100,
  gj: 10,
  fy: 10
})


getImg((arr: ImgInfo[]) => {
  imgList.value = arr
  flag.value = true
})

function getUrl(item: number): string {
  let index = imgList.value.findIndex((e: ImgInfo) => e.id === item)
  if (index !== -1) {
    return imgList.value[index].url
  } else {
    return ""
  }
}

const peoplex = ref<number>(10)
const peopley = ref<number>(5)

function xuanran() {
  for (var i = 0; i < mapList.value.length; i++) {
    for (var j = 0; j < mapList.value[i].length; j++) {
      if (mapList.value[i][j] === 31) {
        peoplex.value = i;
        peopley.value = j;
      }
    }
  }
}

function move(x: number, y: number, x1: number, y1: number) {
  if (mapList.value[x1][y1] === 1) {
    mapList.value[x1][y1] = 31;
    mapList.value[x][y] = 1;
  } else if (mapList.value[x1][y1] === 21) {
    mapList.value[x1][y1] = 31;
    mapList.value[x][y] = 1;
    zhujue.yshi1--
  } else if (mapList.value[x1][y1] === 22) {
    mapList.value[x1][y1] = 31;
    mapList.value[x][y] = 1;
    zhujue.yshi2--
  } else if (mapList.value[x1][y1] > 40 && mapList.value[x1][y1] < 50) {
    var shanghai = mapList.value[x1][y1] % 40;
    zhujue.hp = zhujue.hp - shanghai * 10;
    mapList.value[x1][y1] = 31;
    mapList.value[x][y] = 1;
  } else if (mapList.value[x1][y1] > 50 && mapList.value[x1][y1] < 60) {
    if (mapList.value[x1][y1] === 51) {
      floor.value++
      mapList.value = allditu.value[floor.value]
    } else if (mapList.value[x1][y1] === 52) {
      floor.value--
      mapList.value = allditu.value[floor.value]
    }
  } else if (mapList.value[x1][y1] > 60 && mapList.value[x1][y1] < 70) {
    if (mapList.value[x1][y1] === 61) {
      zhujue.gj += 50
      zhujue.fy += 50
    } else if (mapList.value[x1][y1] === 62) {
      zhujue.fy += 10
    } else if (mapList.value[x1][y1] === 63) {
      zhujue.gj += 10
    } else if (mapList.value[x1][y1] === 64) {
      zhujue.gj += 20
      zhujue.fy += 20
      zhujue.hp += 200
    } else if (mapList.value[x1][y1] === 65) {
      zhujue.hp += 100
    } else if (mapList.value[x1][y1] === 66) {
      zhujue.hp += 50
    } else if (mapList.value[x1][y1] === 67) {
      zhujue.yshi1++
    } else if (mapList.value[x1][y1] === 68) {
      zhujue.yshi2++
    }
    mapList.value[x1][y1] = 31;
    mapList.value[x][y] = 1;
  } else if (mapList.value[x1][y1] === 19) {
    mapList.value[x1][y1] = 19;
    mapList.value[x][y] = 19;
    alert("你无了，见到本公主还不跪下！！！我：这是魔王变得吧！都鬼打墙了！啊我死了！")
  }
  xuanran()
}

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    if (peoplex.value > 0) {
      move(peoplex.value, peopley.value, peoplex.value - 1, peopley.value)
    }
  } else if (e.key === "ArrowDown") {
    if (peoplex.value < 10) {
      move(peoplex.value, peopley.value, peoplex.value + 1, peopley.value)
    }
  } else if (e.key === "ArrowLeft") {
    if (peoplex.value >= 0 && peoplex.value <= 10) {
      move(peoplex.value, peopley.value, peoplex.value, peopley.value - 1)
    }
  } else if (e.key === "ArrowRight") {
    move(peoplex.value, peopley.value, peoplex.value, peopley.value + 1)
  }
})

</script>

<style lang="less" scoped>
.box {
  margin: 50px auto;
  position: relative;
  height: 440px;
  width: 440px;
  background: url("../assets/img/bg.png");
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .box-hang {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
.panel {
  padding: 5px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  row-gap: 8px;
  flex-direction: column;
  background-color: yellow;
  height: 200px;
  width: 120px;
  top: 100px;
  left: 20px;
}
</style>