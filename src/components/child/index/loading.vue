<template>
  <div class="container-row clearfix" :id="date.Id" style='height:398px'>
    <div class="container-row-l">
        <div class="container-row-head">
            <span class="b-head-i img_bg_1"></span>
            <h2>{{date.name}}</h2>
            <ul class="slt-tab">
                <li>有新动态</li>
                <li>最新投稿</li>
            </ul>
            <div class="pmt-link">
                <i class="pmt-icon img_bg_1"></i>
                <a href="javascript:;"></a>
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
            加载中
        </div>
    </div>
    <div class="container-row-r">
        <div class="container-row-head">
            <h3>排行</h3>
            <ul class="slt-tab">
                <li>全部</li>
                <li>原创</li>
            </ul>
            <div class="slt-day">
                <span class="text">三日</span>
                <i class="arrow img_bg_1"></i>
                <ul class="slt-day-list">
                    <li class="hid">三日</li>
                    <li>一周</li>
                </ul>
            </div>
        </div>
        <div class="container-row-body">
            <div class="r-list-wrapper clearfix"  style='height:313px'>
                加载中
            </div>
            <a href="javascript:;" class="more-link">查看更多</a>
        </div>
    </div>
</div>
</template>
<script>
export default {
  props:['date'],
  mounted(){
  }
}
</script>
