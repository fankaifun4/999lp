<template>
  <div class="wrap-loading">
    <div class="shaft-load">
      <div class="load-container load3">
        <div class="loader"></div>
      </div>
       正在加载....
    </div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
.shaft-load{
  color:#788;
  height: 60px;
  width:100%;
  margin-bottom:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.load-container {
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  margin-right:15px;
}

.load3 .loader {
  margin: 0 auto;
  width: 40px;
  height: 40px;
  position: relative;
  animation: load3 1.4s infinite linear;
}
.load3 .loader:before {
  width: 100%;
  height:100%;
  background: transparent;
  border:10px solid transparent;
  border-bottom:10px solid #778;
  border-top:10px solid #778;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  content: '';
  box-sizing: border-box;
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
