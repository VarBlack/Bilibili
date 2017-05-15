<template>
<ul class="menu_list">
    <!--首页-->
    <li class="menu_home">
        <a href="javascript:;" class="img_bg_1 i-link" >
            <em>首页</em>
        </a>
    </li>
    <!--动画-->
    <li v-for="val,i in dates.date" key="i">
        <a href="javascript:;" class="img_bg_1 i-link">
            <span class="menu_list_num">
                <em>999</em>
            </span>
            <em>{{i}}</em>
        </a>
        <ul v-if="val.length" class="nav_list">
            <li v-for="v,index in val" key="index">
                <a href="javascript:;" class="img_bg_2">
                    {{v}}
                    <em class="img_bg_2"></em>
                </a>
            </li>
        </ul>
    </li>

    <!--广场-->
    <li class="square list">
        <a href="javascript:;" class="img_bg_1 i-link">广场</a>
        <div class="square_list">
            <ul class="nav_list">
                <li>
                    <a href="javascript:;">
                        <i class="img_bg_1 activity"></i>
                        <span>活动中心</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img_bg_1 game_icon"></i>
                        <span>游戏中心</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img_bg_1 new_icon"></i>
                        <span>新闻中心</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img_bg_1 h_icon"></i>
                        <span>画友</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="img_bg_1 mango_icon" ></i>
                        <span>芒果TV</span>
                    </a>
                </li>
            </ul>
            <div class="square-pmt-field">
                <div class="square-pmt-item">
                    <a href="javascript:;"><img src="../../assets/img/square_1.jpg"/></a>
                </div>
                <div class="square-pmt-item">
                    <a href="javascript:;"><img src="../../assets/img/square_2.jpg"/></a>
                </div>
            </div>
        </div>
    </li>
    <!--直播-->
    <li class="live list"  v-for="val,i in dates.live">
        <a href="javascript:;" class="img_bg_1 i-link"> {{i}}</a>
        <ul class="nav_list">
            <li v-for="v,index in val" key="index">
                <a href="javascript:;" class="img_bg_2">
                    {{v}}
                    <em class="img_bg_2"></em>
                </a>
            </li>
           
        </ul>
    </li>
    <!--小黑屋-->
    <li class="blackroom list">
        <a href="javascript:;" class="img_bg_1 i-link">小黑屋</a>
    </li>
</ul>
</template>
 <script>
 export default {
   props:["dates"]
 }
 </script>
 