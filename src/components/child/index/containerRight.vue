<template>
   <div class="container-row-r">
        <div class="container-row-head">
            <h3>排行</h3>
            <ul class="slt-tab">
                <li :class="{on:active==0}" @click='fn(0)'>全部</li>
                <li :class="{on:active==1}"@click='fn(1)'>原创</li>
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
            <div class="r-list-wrapper clearfix" :style="{marginLeft: left}">
                <ul class="rlist">
                    <li>
                        <i class="num n1">1</i>
                        <a href="javascript:;" class="clearfix">
                            <img :src="list[0].pic" width="80" height="50"/>
                            <p>
                                <span class="title">{{list[0].title}}</span>
                                <span class="info">综合评分：{{list[0].play}}</span>
                            </p>
                        </a>
                    </li>
                    <li v-for="val,i in list" v-if="i>0">
                        <i class="num" :class="[isActive ?'n'+(i+1):'' ]">{{i+1}}</i>
                        <a href="javascript:;">{{val.title}}</a>
                    </li>
                   
                </ul>
                <ul class="rlist">
                    <li>
                        <i class="num n1">1</i>
                        <a href="javascript:;" class="clearfix">
                            <img :src="list[0].pic" width="80" height="50"/>
                            <p>
                                <span class="title">{{list[0].title}}</span>
                                <span class="info">综合评分：{{list[0].play}}</span>
                            </p>
                        </a>
                    </li>
                    <li v-for="val,i in list" v-if="i>0">
                        <i class="num" :class="[isActive ?'n'+(i+1):'' ]">{{i+1}}</i>
                        <a href="javascript:;">{{val.title}}</a>
                    </li>
                </ul>
            </div>
            <a href="javascript:;" class="more-link">查看更多</a>
        </div>
    </div>
</template>
<script>

export default {
    props:['ranking'],
    data(){
        return {
            left:0,
            active:0,
            isActive:true,
            list:this.ranking.hot.list
        }
    },
    mounted(){
    },
    methods:{
        fn(n,){
             this.left = -n*100+'%'
            this.active = n
        }
    }
}
</script>
