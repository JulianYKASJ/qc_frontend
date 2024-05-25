<template>
  <ion-content class="ion-padding  content-center">
    <h2 class="iniciar">Iniciar Sesión</h2>
    <ion-img src="https://docs-demo.ionic.io/assets/madison.jpg"></ion-img>
    <div class="contenedor">
      <ion-input placeholder="email" class="center-text"></ion-input>
      <ion-input type="password" placeholder="Clave" value="" class="center-text">
        <ion-input-password-toggle slot="end"></ion-input-password-toggle>
      </ion-input>
    </div>
    <ion-button color="black" size="default" class="boton"><strong>Iniciar Sesión</strong></ion-button>
    <div class="iniciarSesion"><strong>¿Olvidaste tu clave? Recuperar
          clave</strong></div>
  </ion-content>
</template>

<script setup lang="ts">
import { IonInput, IonInputPasswordToggle, IonButton, IonImg } from '@ionic/vue';
</script>
<style scoped>
h2 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: xx-large;
  text-align: center;
  font-size: 24px;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  border-bottom: 2px solid #070707;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

ion-input {
  border-radius: 20px;
  width: 370px;
  height: 50px;
  margin: 0 auto;
  background-color: #91828259;
  color: #000000;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom: 15px
}

.iniciarSesion {
  text-align: center;
  margin-top: 1rem;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.boton {
  border-radius: 20px;
  width: 370px;
  display: block;
  padding: 4px;
  background-color: rgb(0, 0, 0);
  margin: 1rem auto;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-text {
  --padding-start: 0px;
  --padding-end: 0px;
  text-align: center;
}

.contenedor {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.recuperar {
  border-radius: 20px;
  background-color: rgb(0, 0, 0);
  margin: 1rem auto;
  position: absolute;
  top: 200%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
