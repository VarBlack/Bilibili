<template>
<div>
  <div class="container-row clearfix" :id="Id">
    <div class="container-row-l">
        <div class="container-row-head">
            <span class="b-head-i img_bg_1"></span>
            <h2>{{date.name}}</h2>
            <ul class="slt-tab">
                <li :class="{on:active==0}" @click='fn(0)'>有新动态</li>
                <li :class="{on:active==1}" @click='fn(1)'>最新投稿</li>
            </ul>
            <div class="pmt-link">
                <i class="pmt-icon img_bg_1"></i>
                <a href="javascript:;">{{date.title}}</a>
            </div>
            <div class="link-more">
                <div class="read-push">
                        <span class="icon-refresh img_bg_1"></span>
                        <span class="read-push-info"><em>500</em>条新动态</span>
                </div>
                <a href="javascript:;" class="more">更多</a>
            </div>
        </div>
        <div class="container-row-body">
            <Left :list='date.list'/>
        </div>
    </div>
   <Right :ranking='lists'/>
</div>
<Banner v-if="on"/>
</div>
</template>
<script>
import Left from '@/components/child/index/containerLeft'
import Right from '@/components/child/index/containerRight'
import Banner from '@/components/child/index/banner'
export default {
  components:{
    Left,
    Right,
    Banner
  },
  props:['date','Id','list'],
  data(){
      return {
           active:0,
           lists:this.list,
           on:false,
           an:false
      }
  },
  methods:{
      fn(n){
          this.active = n
      }
  },
  mounted(){
      setTimeout(()=>{
          this.an = true
      },2000)
  }
}
</script>

