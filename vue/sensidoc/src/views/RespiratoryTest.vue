<template>
    <div>
         <div class="header-comp">
            <div class="header-logo">
                 <img class="header-img" src="../assets/images/general/sensi20_header.svg">
            </div>
            <div class="header-title">¿Estás contagiado de <b>COVID-19?</b></div>
        </div>
    </div>
</template>

<style scoped>
.header-comp {
  width: 90vw;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vw;
}
.header-logo{
    display: flex;
    flex-direction: row;
    margin: auto;

}
.header-img{
    width: 25vw;
}

  .header-title {
    font-family: "Ubuntu";
    font-size: 2.3em;
    color: #319cff;
  }
</style>