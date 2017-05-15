<template>
  <div class="container-row clearfix" id="b_promote">
        <div class="container-row-l">
            <div class="container-row-head">
                <span class="b-head-i img_bg_1"></span>
                <h2>推广</h2>
                <div class="pmt-link">
                    <a href="javascript:;">约不约(´⌣`ʃƪ)</a>
                </div>
            </div>
            <div class="container-row-body">
                <ul class="container-row-list clearfix">
                    <li v-for="val,i in date" key="val.id">
                        <a href="javascript:;" class="preview">
                            <img :src="val.pic" width="160" height="100"/>
                            <span class="shade"></span>
                            <time>23:24</time>
                        </a>
                        <a href="javascript:;" class="info">
                            <span class="preview-title">{{val.name}}</span>
                        </a>
                    </li>
                   
                </ul>
            </div>
        </div>
        <div class="container-row-r">
            <div class="index-online">
                <a href="javascript:;" class="web-online">在线人数:<em>928492</em></a>
                <i class="line"></i>
                <a href="javascript:;" class="new-video">最新投稿:<em>14612</em></a>
            </div>
            <div class="container-row-body">
                <a href="javascript:;" class="pmt-item">
                    <img :src="banner.pic" width="260" height="150"/>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
let promote = 'http://easy-mock.com/mock/59145a149aba4141cf21f19a/index/index/promote'
let banner = 'http://easy-mock.com/mock/59145a149aba4141cf21f19a/index/index/recommend-banner'
export default {
  name:'Promote',
  data(){
    return {
        date:{},
        banner:{}
    }
  },
  mounted(){
      this.$http(promote).then(d=>{
          this.date = d.data.data
      })
       this.$http(banner).then(d=>{
          this.banner = d.data.data[0]
          console.log(this.banner)
      })
  }
}
</script>

