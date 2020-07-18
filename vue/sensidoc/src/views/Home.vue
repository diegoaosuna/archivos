<template>
  <div class="content" >
    <img class="img-home" src="../assets/images/general/logo.svg">
     <h1 >Smart health for everyone</h1>
        <div>
                <button class="button-blue-purple" @click="DataUser">
                    Prueba de Respiratoria
                </button>
        </div>
  </div>
  
</template>

<script>
export default {

name: 'Home',

methods: {
          DataUser(){
            this.$router.push('/datauser')
        },
}

}
</script>








<style scoped >
h1{
  color: white;
}
.content {
  background: url("../assets/images/general/home_bg.png");
    justify-content: center;
}
  .img-home {
width: 100vw;
  }
  .label{
        width: 95vw;
    height: 4vh;
  }


</style>
