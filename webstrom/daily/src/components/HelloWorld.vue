<template>
  <div>

  </div>
</template>
<script>
  import axios from 'axios'
  import jsonp from 'jsonp'
  export default {
    data(){
      return{
        cartList:'',
        checked:''
      }
    },
    methods:{
      getNews () {
        if (pay.kind && pay.flag) {
          console.log(pay);
          jsonp('http://m.toutiao.com/list/?tag=' + pay.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
            function(err, res) {
              console.log(res)
            });
        })
      }
    },
  }
</script>
<style>

</style>
