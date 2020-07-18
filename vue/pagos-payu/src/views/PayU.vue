<template>
    <div class="contenido">
 <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
  <input name="merchantId"      value="508029"   >
  <input name="accountId"       value="512321" >
  <input name="description"     value="Venta en linea"  >
  <input name="referenceCode"   value="PAGOSENSITEST" >
  <input name="amount"          value="20000"   >
  <input name="tax"             value="0"  >
  <input name="taxReturnBase"   value="16806" >
  <input name="currency"        value="COP" >
  <input name="signature"       value="38c909b1a035aaa1deaa66a00759106e" >
  <input name="test"            value="1" >
  <input name="buyerEmail"      value="diegoaosuna@gmail.com" >
  <input name="responseUrl"     value="" >
  <input name="confirmationUrl" value="https://52.116.216.62/api/medical-appointments/createMedicalAppointmentPayU" >
  <input name="Submit"        type="submit"  value="Enviar" >
</form>
        <form>
            <input type="text" v-model="datapayu" @keyup="PostPayU" > 
        </form>
    </div>
</template>




<script>
import axios from 'axios'

export default {
    data(){
        return{
            todos:null,
            datapayu: [],
        }
    },
    mounted(){
        this.getTodos();
    },
    methods:{
        getTodos(){
            axios
            .get('https://jsonplaceholder.typicode.com/todos')
                .then(Response => {
                    this.todos = Response.data
                })
        },
        PostPayU(){
            axios
            .post('https://jsonplaceholder.typicode.com/users',{
                infopay: this.datapayu
            })
            .then((Response)=>{
                console.log(Response);
            });
        }
    }
    
    
}
</script>




<style scoped>
.contenido{
    display: flex;
}

</style>