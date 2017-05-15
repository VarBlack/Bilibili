<template>
  <div class="content_top clearfix">
        <div class="topic-preview-wrapper">
            <ul class="topic-preview">
                <li v-for="val,i in topPic">
                    <a href="javascript:;">
                        <img :src="val.pic" width="440" height="220"/>
                    </a>
                </li>
                
            </ul>
            <a href="javascript:;" class="more-topic">更多</a>
            <div class="topic_bottom">
                <div class="title">
                    <span v-for="val,i in topPic" key="i" :class='{on:i==0}'>{{val.name}}</span>
                </div>
                <ul class="topic_slider">
                    <li v-for="val,i in topPic" key="i" class="img_bg_1" :class='{on:i==0}'></li>
                </ul>
            </div>
        </div>
        <div class="top-list-wrapper">
            <ul class="top-list clearfix">
                <li v-for="val,i in recommend">
                    <a href="javascript:;">
                        <img :src="val.pic" width="160" height="100"/>
                        <span class="info">
                            <em class="info">{{val.title}}</em>
                            <em class="up">up主：{{val.author}}</em>
                            <em class="play">播放：{{val.play}}</em>
                        </span>
                    </a>
                </li>
                
            </ul>
        </div>
    </div>
    <!--<swipe class="my-swipe">
    </swipe>-->
</template>

<script>
let topPic = 'http://easy-mock.com/mock/59145a149aba4141cf21f19a/index/index/topic'
let recommend = 'http://easy-mock.com/mock/59145a149aba4141cf21f19a/index/index/topPecommend'
import {carousel} from '@/assets/js/carousel'

export default {
  name:'contentTop',
  data(){
    return {
        topPic:{},
        recommend:{}
    }
  },
  mounted(){
      this.$http.get(topPic).then(d=>{
          this.topPic = d.data.data
          setTimeout(()=>{
            let list = $('.topic-preview')
            let lis = $('.topic-preview li')
            let btns = $('.topic_slider li')
            let texts = $('.topic-preview-wrapper span')
            carousel(list,lis,btns,texts)
          },500)
      })

      this.$http.get(recommend).then(d=>{
          this.recommend = d.data.recommend.list
      })
  }
}
</script>
