<template>
<div class="content" >
 <Header/>
  <div class="content-user">
    <div class="title-blue" >
      ¿Cómo te llamas?
      <p class="p-general" >Primero lo primero, necesitamos tu nombre</p>
    </div>
    <form class="form-user" >
      <p class="label-text" >Nombre</p>
      <div>

        <input class="label"
          formControlName="firstName" type="text">
      </div>
      <p class="label-text" >Apellido</p>

      <div>
        <input class="label"
          formControlName="lastName" type="text">
      </div>
      <div class="footer-user">
        <button class="button-blue-purple" @click="RespiratoryTest">
         <img class="img-user" src="../assets/images/general/arrow-left.svg" alt="" >
        </button>
      </div>
    </form>
  </div>
</div>

</template>

<script>

import Header from '../components/header.vue'

export default {
  name: 'DataUser',
  components: {
    Header
  },
  methods: {
              RespiratoryTest(){
            this.$router.push('/respiratorytest')
        },
  }
}
</script>








<style scoped>
.content{
  display: flex;
}
 .form-user{
   display: flex;
   flex-direction: column;
   width: 95vw;
 }
 .footer-user{
   display: flex;
     align-self: flex-end;
     margin-bottom: 5vh;
 } .button-blue-purple{
   width: 15vw;
   height: 5vh;
   margin-top: 10vw;
 }
 .img-user{
   width: 3vw;
 }
</style>
