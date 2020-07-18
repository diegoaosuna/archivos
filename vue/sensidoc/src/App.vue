<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html 
  body {
    margin: 0;
  
  }
    h1{
          font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
  font-size: 4em;
}
.content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
}
.title-blue{
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 3.5em;
    line-height: 10vw;
color: #106EFB;
    width: 94vw;
}
.p-general{
    font-family: Helvetica;
    font-style: normal;
    font-weight: 300;
    font-size: 0.6em;
    line-height: 6vw;
    color: #706F6F;
    width: 63vw;
}
.label-text{
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 2.4em;
  line-height: 2vw;
  color: #106EFB;
}
.label{
  background: #B3E5FC;
  border: 1px solid #319CFF;
  box-sizing: border-box;
  border-radius: 4px;
  width: 95vw;
  height: 6vh;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 2.4em;
  margin: auto;
}
  .button-blue-purple {
  font-size: 1.8em;
  height: 6.6vh;
  color: #ffffff;
  border-radius: 28.5px;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(0.25turn, #3da1ff 0.52%, #6c33e4 100%);
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1);
}
</style>
