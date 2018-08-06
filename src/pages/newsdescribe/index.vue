<style scoped lang="scss">
  .inner-bg{
    width:100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #f5f5f6;
  }
  .bg-list{
    box-sizing: border-box;
    overflow: hidden;
    padding:15rpx;
    margin:15rpx;
    flex: 1;
    background-image:linear-gradient(rgba(255,255,255,.9) 50%, rgba(255,255,255,.2));
    overflow-y: scroll;
  }
  .list-box {
    text-align:justify ;
    line-height: 50rpx;
  }
  .artTitle{
    text-align: center;
    font-size:35rpx;
    padding:20rpx 10rpx;
    background: #fff;
    border-bottom:4rpx solid #c90915;
  }
</style>
<template>
	<div class="inner-bg">
    <h1 class="artTitle">{{ newsTitle }}</h1>
    <div class="bg-list">
      <no-data v-if="nodata"></no-data>
      <div v-else class="list-box">
          <rich-text :nodes="newsData"></rich-text>
      </div>
    </div>
  </div>
</template>
<script>
  import fixBg from '@/components/fixbg'
  import noData from '@/components/noData'
  export default {
    components:{
      fixBg,
      noData
    },
    data(){
      return{
        nodata:false,
        newsTitle:"新年快乐",
        newsData:null
      }
    },
    mounted(){
      this.setNewsData()
    },
    methods:{
      setNewsData(){
        let temp=`<div>
                <p>各位自在同门：</p>

                <p>　　<span class="red">《逆水寒》开启全面内测</span>已逾三周，众位侠士可曾于毁诺城踏雪寻梅，又或者在仙居原静候星沉月落？会呼吸的江湖等你发现的又岂止这些——谪仙岛倚剑长歌，桃花坞携手佳人，连云寨群雄聚义……此处既有豪气如虹，亦富柔情缱绻。盛世武林，待君一品。</p>

                <p>　　这段时间，我们收到了许多同门的宝贵意见，为了提升大家的江湖体验，我们进行了如下更新。</p>

                <p>　　为了保证服务器的运行稳定和服务质量，《逆水寒》于<span class="red">2018年7月19日早上6:00</span>停机进行维护工作，预计维护到<span class="red">上午10:00</span>。如在维护期间无法完成维护内容，开机时间将顺延。请少侠留意游戏时间，以免造成损失。</p>

              </div>`
        const regex = new RegExp('<img', 'gi');
        temp = temp.replace(regex, `<img style="max-width: 98%;"`);
        if(temp.length>0){
          this.nodata=false
        }else{
          this.nodata=true
        }

        this.newsData=temp
      }
    }
    
  }
</script>
