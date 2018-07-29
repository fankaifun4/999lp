<style scoped lang="scss">
  .banner-wrap{
    width:100%;
    height:400rpx;
    box-sizing: border-box;
    overflow: hidden;
    .banner{
      width:100%;
      height:100%;
      overflow: hidden;
      .img{
        width:100%;
        height:100%;
      }
    }

  }
</style>
<template>
  <div class="banner-wrap">
    <swiper class="banner"
            :indicator-dots="indicatorDots"
            :display-multiple-items="perView"
            :circular="circular"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration"
            @animationfinish="change">
      <block v-for="(item,index) in imgData" :key="key">
        <swiper-item >
          <img :mode="imgModel" class="img" :src="item.src"  />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>
<script>
  export default {
    props:{
      indicatorDots:{
        type:Boolean,
        default:false
      },
      autoplay:{
        type:Boolean,
        default:true
      },
      circular:{
        type:Boolean,
        default:true
      },
      vertical:{
        type:Boolean,
        default:false
      },
      interval:{
        type:Number,
        default: 5000
      },
      duration:{
        type:Number,
        default:1000
      },
      perView:{
        type:Number,
        default:1
      },
      imgModel:{
        type:String,
        default:'imgModel'
      },
      imgData:{
        type:Array,
        default:[]
      }
    },
    data(){
      return{

      }
    },
    methods:{
      change(e){
        let current = e.target.current
        this.$emit('change',current)
      }
    }
  }
</script>
