<template>
<ul class="container-row-list clearfix">
    <li v-for="val , i in list" :title='val.title'>
        <a href="javascript:;" class="preview">
            <img :src="val.pic" width="160" height="100"/>
            <span class="shade"></span>
            <time >{{val.duration}}</time>
        </a>
        <a href="javascript:;" class="info">
            <span class="preview-title">{{val.title}}</span>
            <div class="c-r-l-info">
                <span class="video-play">
                    <i class="img_bg_1"></i>
                    <em>{{playNum(val.play)}}</em>
                </span>
                <span class="danmaku">
                    <i class="img_bg_1"></i>
                    <em>{{playNum(val.coins)}}</em>
                </span>
            </div>
        </a>
    </li>
</ul>
</template>
 <script>
 export default {
   props:['list'],
   methods:{
       playNum(n){
           if(n>10000){
               n= ~~(n/1000)
               n = n/10 +'万'
           }
           return n
       }
   }

 }
 </script>
 