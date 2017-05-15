<template>
	 <header class="head">
			<div class="top_container">
				<!--顶部-->
				<div class="header">
					<!--顶部导航-->
					<div class="top_nav">
						<ul class="clearfix">
							<li class="home">
								<a href="javascript:;" class="img_bg_1">主站</a>
							</li>
							<li>
								<a href="javascript:;">画友</a>
							</li>
							<li>
								<a href="javascript:;">游戏中心</a>
							</li>
							<li>
								<a href="javascript:;">直播</a>
							</li>
							<li>
								<a href="javascript:;">周边</a>
							</li>
							<li>
								<a href="javascript:;">移动端</a>
							</li>
						</ul>
					</div>
					<!--登录-->
					<div class="login">
						<ul class="menu clearfix">
							<li class="menu_login">
								<a href="javascript:;">登录</a>
								<i></i>
								<a href="javascript:;">注册</a>
							</li>
							<li>
								<a href="javascript:;">历史</a>
							</li>
							<li class="post">
								<a href="javascript:;" class="post-link">投稿</a>
								<ul class="post_list">
									<li>
										<a href="javascript:;">
											<i class="img_bg_1 post_1"></i>
											<em>视频投稿</em>
										</a>
									</li>
									<li>
										<a href="javascript:;">
											<i class="img_bg_1 post_2"></i>
											<em>投稿管理</em>
										</a>
									</li>
									<li>
										<a href="javascript:;">
											<i class="img_bg_1 post_3"></i>
											<em>创作中心</em>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--logo和搜索-->
			<div class="top_center">
				<h1 class="logo">
					<a href="javascript:;">
						<img src="../assets/img/logo.png"/>
					</a>
				</h1>
				<div class="banner-title">
					哔哩哔哩 (゜-゜)つロ 干杯
				</div>
				<div class="search">
					<form>
						<input type="text" class="search-keyword"/>
						<button class="search-submit img_bg_1"></button>
					</form>
					<a href="javascript:;" class="link-ranking">
						<span class="img_bg_1">排行榜</span>
					</a>
				</div>
			</div>
			<div class="menu-wrapper">
				<nav-view :dates="dates"></nav-view>
				<div class="nav_right">
					<a href="javascript:;"><img src="../assets/img/nav_right.gif"/></a>
				</div>
			</div>
		</header>
</template>

<script>

let dates = {
	date:{
		'动画':['MAD·AMV','MAD·3D','短片·手书·配音','综合'],
		'番剧':['连载动画','完结动画','资讯','官方延伸','新番时间表','番剧索引'],
		'国创':['国产动画','国产原创相关','布袋戏','资讯','新番时间表','国产动画索引'],
		'音乐':['原创音乐','翻唱','VOCALOID·UTAU','演奏','三次元音乐','OP/ED/OST','音乐选集'],
		'舞蹈':['宅舞','次元舞蹈',',舞蹈教程'],
		'游戏':['单机联机','网游·电竞','Mugen','GMV'],
		'科技':['纪录片','趣味科普人文','野生技术协会','演讲·公开课','星海','数码','机械'],
		'生活':['搞笑','日常','美食圈','动物圈','手工','绘画','运动'],
		'鬼畜':['鬼畜调教','音MAD','人力VOCALOID','教程演示'],
		'时尚':['美妆','服饰','健身','资讯'],
		'广告':[],
		'娱乐':['综艺','明星','Korea相关'],
		'影视':['电影','电视剧']
	},
	live:{
		'直播':['推荐主播','生活娱乐','绘画专区','唱见舞见','御宅文化','单机联机','网络游戏','电子竞技','手游直播','放映厅']
	}
}
import Navs from '@/components/head/navs'


	export default{
		data(){
			return {
				dates:dates
			}
		},
		name:'head',
		components:{
			'nav-view':Navs
		},
		mounted(){
		}
		
	}
</script>

<style>
</style>