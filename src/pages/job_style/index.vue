<style lang="scss" scoped>
.container{
	overflow:hidden;
  display:flex;
	background: #fff;
}
	.lsh{
		width: 231rpx;
		height: 91rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.nav-bar{
		width: 700rpx;
		line-height:1;
		margin: 80rpx auto auto;
		display: flex;
		justify-content: center;
		align-items: center;
		background:rgba(240,240,240,1);
		.nav-item{
			font-size:28rpx;
			padding:25rpx 0;
			flex:1;
			text-align:	center;
			&.active{
				background:rgba(121,141,171,1);
				color:#fff;
			}
		}
	}
	.bg_list{
		position:relative;
    margin-top:100rpx;
		width:750rpx;
		height:957rpx;
    .bg_swiper{
      width:750rpx;
      height:100%;
    }
		.list{
			width:750rpx;
			height:957rpx;
			>img{
				position:absolute;
				left:0;
				top:0;
				width:100%;
				height:100%;
				z-index:-1;
			}
			.discribe{
				writing-mode: vertical-lr;
				word-wrap: break-word;
				letter-spacing:2rpx;
				font-size:42rpx;
				padding: 0 10rpx;
				width:100%;
				position:relative;
				padding-left:50rpx;
				box-sizing:border-box;
				color:rgba(86,93,120,1);
				.name{
					position:absolute;
					right:50rpx;
					top:0;
					font-size:92rpx;
					font-weight:300;
					letter-spacing:24rpx;
				}
				.items{
					height:100%;
					transform:translateX(260rpx);
					.weapon,.position,.praise{
						font-size:30rpx;
						display:inline-block;
						border:1rpx solid #ccc;
						padding:15rpx;
						background:rgba(86,93,120,.5);
						margin-right:15rpx;
						color:rgba(255,255,255,.8);
						font-weight:300;
					}
				}

			}
      .job-type{
        position: absolute;
        bottom:50rpx;
        width:100%;
        height:300rpx;
        >img{
          width:100%;
          height: 100%;
        }
      }
		}
	}
</style>
<template>
	<div class="container">
		<img mode="aspectFit" class="lsh" src="/static/imgs/nishuihan.png" alt="">
		<div class="nav-bar">
			<div v-for="(item,index) in jobNav" :key="index"  class="nav-item" :class="{active:actived==index}"
			@click="getJob(item)">{{item.name}}</div>
		</div>
		<div class="bg_list">
      <swiper :circular="true"  :current="actived" class="bg_swiper" :autoplay="auto" :interval="3000" @animationfinish="changeSwiper">
        <block v-for="(item,index) in jobType" :key="index">
          <swiper-item>
            <div class="list">
              <img  mode="aspectFit" :src="item.img" alt="">
              <div class="discribe" style="display: none">
                <div class="name">{{item.name}}</div>
                <div class="items">
                  <div>
                    <div class="weapon">{{item.weapon}}</div>
                  </div>
                  <div>
                    <div class="position">{{item.position}}</div>
                  </div>
                  <div>
                    <div class="praise">{{item.praise}}</div>
                  </div>
                </div>
              </div>
              <div class="job-type">
                <!--<img mode="scaleToFill" :src="item.typeSrc" alt="">-->
              </div>
            </div>
          </swiper-item>
        </block>
      </swiper>
		</div>
	</div>
</template>
<script>
	import fixbg from '@/components/fixbg'
	export default{
		components:{
			fixbg
		},
		data(){
			return{
				actived:0,

				jobNav:[
					{
						name:"血河",
						code:0
					},
					{
						name:"素问",
						code:1
					},{
						name:"九灵",
						code:2
					},{
						name:"碎梦",
						code:3
					},{
						name:"神相",
						code:4
					},{
						name:"铁衣",
						code:5
					}
				],
				jobType:[
					{
						img:"http://212.64.19.161/static/images/nishuihan/xh.png",
						name:"血河",
						weapon:"武器●枪",
						position:"定位●输出●半坦",
						praise:"●●●百万军中取上将首级，如探囊取物",
            typeSrc:"https://n.res.netease.com/pc/fab/20180611102737/img/inner_j_pic_6_27f05f8.png"
					},
					{
						img:"http://212.64.19.161/static/images/nishuihan/sw.png",
						name:"素问",
						weapon:"武器●丝带",
						position:"定位●治疗●辅助",
						praise:"●●●逃之夭夭，灼灼其华",
            typeSrc:""
					},{
						img:"http://212.64.19.161/static/images/nishuihan/jl.png",
						name:"九灵",
						weapon:"武器●蛊灵",
						position:"定位●输出●召唤",
						praise:"●●●一顾倾人城，再顾倾人国",
            typeSrc:""
					},{
						img:"http://212.64.19.161/static/images/nishuihan/sm.png",
						name:"碎梦",
						weapon:"武器●长刀",
						position:"定位●输出●刺客",
						praise:"●●●大漠孤烟直，长河落日圆",
            typeSrc:""
					},{
						img:"http://212.64.19.161/static/images/nishuihan/sx.png",
						name:"神相",
						weapon:"武器●琴剑",
						position:"定位●输出●远程",
						praise:"●●●谈笑间，樯橹灰飞烟灭",
            typeSrc:""
					},{
						img:"http://212.64.19.161/static/images/nishuihan/ty.png",
						name:"铁衣",
						weapon:"武器●全套",
						position:"定位●输出●坦克",
						praise:"●●●稳如泰山，如如不动",
            typeSrc:""
					}
				],

			}
		},
		methods:{
			getJob(item){
				this.actived=item.code
				this.jobTypeChecked=this.jobType[item.code]
			},
      changeSwiper(e){
			  let active= e.target.current
        this.actived=active
      }
		}
	};
</script>
