<template>
  <div>
    <div class="top">经销商列表</div>
    <template v-for="item in contents">
      <div class="content" :key="item.id">
        <div class="distance_part" :key="item.id">
          <img src="../assets/distance.png" alt="地址" class="distance_icon">
          <div class="distance" :key="item.id">{{item.distance}}KM</div>
        </div>
        <div class="title" :data-id='item.wxDepartmentId'>{{item.name}}</div>
        <div class="information">地址:{{item.address}}}</div>
        <div class="information">电话:{{item.telephone}}</div>
        <template>
          <div>
            <Swiper ref="swiper" v-if="list.length>0" :autoPlay='false' :showIndicator='false' >
              <Slide v-for="(item,index) in list" :key=index>
                <img :src="item.img" />
              </Slide>
            </Swiper>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import util from '../util/request'
import { Swiper, Slide } from 'vue-swiper-component'

export default {
  components: {
    Swiper,
    Slide
  },
  data: function () {
    return {
      contents: '',
      list: [
        { img: 'https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360' },
        { img: 'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360' },
        { img: 'https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360' }
      ]
    }
  },
  created () {
    let self = this
    let option = {
      url: 'shop/recommend?userLongtitude=113.352503&userLatitude=23.123144',
      method: 'GET',
      success: function (res) {
        let resFather = res
        console.log(resFather)
        self.contents = resFather
        for (let i = 0; i <= res.length; i++) {
          let id = res[i].wxDepartmentId
          let option = {
            url: 'saleman/getByShopId?=' + id,
            method: 'GET',
            success: function (res) {
              resFather[i].people = res
            }
          }
          util.request(option)
        }
      }
    }
    util.request(option)
  },
  methods: {

  }
}
</script>

<style>
* {
  background-color: rgb(236, 232, 232);
  padding: 0;
  margin: 0;
}
.top {
  width: 100%;
  height: 3rem;
  background-color: #fff;
  margin-bottom: 8px;
  font-weight: bolder;
  font-size: 1rem;
  line-height: 3rem;
  text-align: center;
}
.content {
  width: 100%;
  height: auto;
  background-color: #fff;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}
.title {
  width: 20rem;
  height: 2rem;
  background-color: #fff;
  text-align: left;
  font-size: 1.5rem;
  line-height: 1rem;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
}
.information {
  width: 20rem;
  height: 2rem;
  background-color: #fff;
  text-align: left;
  font-size: 1rem;
  line-height: 1rem;
  color: #888;
  margin-left: 20px;
}
.distance {
  color: #000;
  font-size: 1.2rem;
  font-weight: bolder;
  background-color: #fff;
}
.distance_icon {
  width: 2rem;
  height: 2rem;
  background-color: #fff;
}
.distance_part {
  width: 3rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-top: 2rem;
  position: absolute;
  left: 85%;
}
</style>
