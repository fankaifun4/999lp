<style lang="scss" scoped>
  .nav-wrap{
    position: relative;
    padding-top:20rpx;
    .swiper-item{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav-list {
      font-size:26rpx;
      height:160rpx;
      .nav-item{
        width:150rpx;
        height:150rpx;
        color:#2c2c2c;
        font-weight: 700;
        padding:5rpx;
        overflow: hidden;
        text-align: center;
        >img{
          border-radius: 50%;
          padding:10rpx;
          width:100rpx;
          height:100rpx;
          box-sizing:border-box;
          background: rgba(200, 200, 200, 0.2);
        }
      }
    }
  }
  .content-body{
    border:15rpx solid rgba(135,51,33,.9);
    background-position: center;
    background-size: cover;
    width:450rpx;
    position: absolute;
    top:400rpx;
    bottom:120rpx;
    box-sizing: border-box;
    right:20rpx;
    overflow: hidden;
    .body-title{
      background:  rgba(135,51,33,.9);
      text-align: center;
      height:60rpx;
      line-height: 60rpx;
      font-size:16px;
      color:#fff;
    }
    .body-list{
      position: absolute;
      top:60rpx;
      width:100%;
      background-image:linear-gradient(rgba(255,255,255,.8) 50%, rgba(255,255,255,.2));
      bottom:0;
      overflow-x: hidden;
      overflow-y: scroll;
      .list-item{
        padding:15rpx 10rpx;
        border-bottom:1rpx dashed #999;
        .list-item-title{
          font-size:26rpx;
        }
        .list-item-time{
          font-size:24rpx;
          text-align: right;
        }
      }
    }
  }
</style>
<template>
<div>
	<div class="nav-wrap" >
	    <swiper class="nav-list" :display-multiple-items='items||5'>
	      <block v-for="(item,index) in navlist" :key="index">
	        <swiper-item  @click="goPath(item)" class="swiper-item">
	           <div class="nav-item" >
	             <img mode="aspectFit"  :src="item.img" alt="" >
	             <div>{{item.name}}</div>
	          </div>
	        </swiper-item>
	      </block>
	    </swiper>
	</div>
</div>
</template>
<script>
	export default {
		props:['navlist','newsList','items'],
		data(){
			return{}
		},
		methods:{
			goPath(item){
				this.$emit('goPath',item)
			}
		}
	}
</script>
