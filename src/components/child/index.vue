<template>
  <div>
    <ContentTop />
    <Promote />
    <Banner />
    <Live />
    <Loading v-if="!list" v-for="val,i in loadingList" :key='i' :date='val' />
    <Container v-if="list" v-for="val,i in date" :date='val' :Id='i' :key="i" :list='list[i]'/>
    
  </div>
</template>

<script>
import ContentTop from '@/components/child/index/content_top'
import Promote from '@/components/child/index/promote'
import Live from '@/components/child/index/live'
import Container from '@/components/child/index/container'
import Banner from '@/components/child/index/banner'
import Loading from '@/components/child/index/loading'
let indexDate ='http://easy-mock.com/mock/59145a149aba4141cf21f19a/index/index/date'
let list = 'http://easy-mock.com/mock/59145a149aba4141cf21f19a/index/index/list'
let loadingList = [
    {'Id': 'bangumi' , 'name':'番剧'},
    {'Id': 'guochuang' , 'name':'国创'},
    {'Id': 'douga' , 'name':'动画'},
    {'Id': 'music' , 'name':'音乐'},
    {'Id': 'game' , 'name':'游戏'},
    {'Id': 'ent' , 'name':'生活'},
    {'Id': 'teleplay' , 'name':'电视剧'},
    {'Id': 'movie' , 'name':'电影'},
    {'Id': 'technology' , 'name':'科技'},
    {'Id': 'kichiku' , 'name':'鬼畜'},
    {'Id': 'dance' , 'name':'舞蹈'},
    {'Id': 'fashion' , 'name':'时尚'},
    {'Id': 'life' , 'name':'生活'},
    {'Id': 'ad' , 'name':'广告'}
  ]
export default {
  name:'index',
  data(){
    return {
      date:{},
      list:false,
      on:false,
      loadingList:loadingList
    }
  },
  components:{
      ContentTop,
      Promote,
      Live,
      Container,
      Banner,
      Loading
  },
  mounted(){
    this.$http.get(indexDate).then(d=>{
        this.date = d.data
        this.on=true
    },error=>{
      console.log(error)
    })
    this.$http.get(list).then(d=>{
     
      this.list = d.data
      console.log(123)
       console.log(this.list)
      console.log('成功')
    },(err)=>{
      console.log(err,'失败')
    })
  }
}
</script>

