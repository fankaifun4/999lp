<style lang='scss' scoped>
    .no-data{
        background:#fff;
        color: #aaa;
        letter-spacing: 5rpx;
        font-size: 30rpx;
        padding:15rpx 0;
        width:100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<template>
    <div class="no-data">
        暂无数据
    </div>
</template>
<script>
    export default{
        name:'noData',
        props:{}
    }
</script>
