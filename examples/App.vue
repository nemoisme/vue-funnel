<template>
   <div class="vue-funnel-test" style="margin:50px auto;">
      <vue-funnel style="margin:50px 100px;" :colors="colors" :isLeft="true">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <div slot="info0">信息显示1</div>
        <div slot="info1">信息显示2</div>
        <div slot="info2">信息显示3</div>
      </vue-funnel>
    </div>
</template>
<script>
export default {
  name: "vue-funnel-demo1",
  data() {
    return {
      colors: ['#576DE7', '#8B74F2', '#A37EEF']
    };
  },
};
</script>



    