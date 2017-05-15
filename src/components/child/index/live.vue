<template>
  <div class="container-row clearfix" id="live">
    <div class="container-row-l">
        <div class="container-row-head">
            <span class="b-head-i img_bg_1"></span>
            <h2>正在直播</h2>
            <div class="pmt-link">
                <i class="pmt-icon img_bg_1"></i>
                <a href="javascript:;">{{text}}</a>
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
            <ul class="container-row-list clearfix">
                <li  v-for="val,i in date.recommend" key="i">
                    <a href="javascript:;" class="preview">
                        <img :src="val.pic" width="160" height="100"/>
                        <span class="shade">
                            <img :src="val.face" class="up-avatar"/>
                            <span class="lv-onair-txt">
                                <i></i>
                                Live
                            </span>
                        </span>
                        <span class="live-type">{{val.areaName}}</span>
                    </a>
                    <a href="javascript:;" class="info">
                        <span class="preview-title">{{val.remark}}</span>
                        <div class="c-r-l-info">
                            <span class="lv-host">
                                <i class="img_bg_1"></i>
                                <em>{{val.uname}}</em>
                            </span>
                            <span class="lv-online">
                                <i class="img_bg_1"></i>
                                <em>{{val.online}}</em>
                            </span>
                        </div>
                    </a>
                </li>
               
            </ul>
        </div>
    </div>
    <div class="container-row-r">
        <div class="container-row-head">
            <ul class="slt-tab">
                <li class="on">直播排行</li>
                <li>关注的主播</li>
                <li>为您推荐</li>
            </ul>
        </div>
        <div class="container-row-body" id="live-wrap">
            <div class="r-list-wrapper clearfix">
                <!--直播排行-->
                <div class="r-list-live">
                    <ul class="live-ranking">
                        <li v-for="val ,i in date.ranking" key="i">
                            <i class="num" :class="[isActive ?'n'+(i+1):'' ]">{{i+1}}</i>
                            <a href="javascript:;">
                                <img :src="val.face" width="40" height="40" class="live-ranking-ico"/>
                                <p class="live-ranking-info">
                                    <span>
                                        <em class="live-name">{{val.uname}}</em>
                                        <em class="live-online">{{val.online}}</em>
                                    </span>
                                    <span class="live-loom-name">
                                        {{val.title}}
                                    </span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
                <!--关注的主播-->
                <div class="r-list-live">
                    <div class="no-data" v-if="!date.list">没有数据</div>
                    <ul class="live-ranking" v-if="date.list">
                        <li v-for="val ,i in date.list" key="i" style="padding-left:0">
                            <a href="javascript:;">
                                <img :src="val.face" width="40" height="40" class="live-ranking-ico"/>
                                <p class="live-ranking-info">
                                    <span>
                                        <em class="live-name">{{val.uname}}</em>
                                        <em class="live-online">{{val.online}}</em>
                                    </span>
                                    <span class="live-loom-name">
                                        {{val.title}}
                                    </span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
                <!--为你推荐-->
                <div class="r-list-live">
                    <div class="mini-preview-wrapper">
                        <ul class="mini-preview">
                            <li v-for="val,i in date.preview" key="i">
                                <a href="javascript:;">
                                    <img :src="val.pic" width="260" height="248"/>
                                </a>
                            </li>
                        </ul>
                        <div class="mini-preview-bottom">
                            <ul class="info">
                                <li class="info-item" v-for="val,i in date.preview" key="i" :class="{on:i==0}">
                                    <a href="javascript:;">{{val.title}}</a>
                                </li>
                            </ul>
                            <ul class="preview_slider">
                                <li v-for="val,i in date.preview" key="i" :class="{on:i==0}"></li>
                            </ul>
                        </div>
                    </div>
                    <ul class="live-pmt-list clearfix">
                        <li v-for="val,i in date.recommendAnchor" >
                            <a href="javascript:;">
                                <img :src="val.face" width="56" height="56"/>
                                <p>{{val.title}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
let live = 'http://easy-mock.com/mock/59145a149aba4141cf21f19a/index/index/live'
export default {
  name:'live',
  data(){
      return {
          date:{},
          isActive:true,
          text :''
      }
  },
  mounted(){
      this.$http.get(live).then(d=>{
          this.date = d.data.data
          this.text = this.date.text_link.text
      })

      let btns = $('#live .slt-tab li')
      console.log(btns)
      btns.on('click',function(){
          btns.removeClass('on')
          $(this).addClass('on')
          let n = $(this).index()
          $('#live-wrap').animate({'margin-left':(-n*260)},300)
      })
  }
}
</script>

