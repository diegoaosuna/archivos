<template>
    <div class="conten-header" >
      <img class="img-header" src="@/assets/images/general/arrow.svg" @click="goToBack">
    </div>
</template>

<script>
export default {
    name: "Header",
    methods:{
          goToBack(){
    this.$router.go(-1)
  }
    }
}
</script>

<style scoped>

.conten-header{ 
    display: flex;  
    flex-direction: row;
    width: 90vw;
    margin-top: 4vh;
}
.img-header{
    width: 6vw;
    display: flex;
}
h1{
    color: #6C33E4;
    text-align: center;
}

</style>