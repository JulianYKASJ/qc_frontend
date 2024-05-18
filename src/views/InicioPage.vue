<template>
  <ion-content class="ion-padding  content-center">
    <h1 class="iniciar">Iniciar Sesión</h1>
    <div class="contenedor">
      <ion-input placeholder="email" class="center-text"></ion-input>
      <ion-input type="password" placeholder="Clave" value="" class="center-text">
        <ion-input-password-toggle slot="end"></ion-input-password-toggle>
      </ion-input>
    </div>
    <ion-button color="black" size="default" class="boton"><strong>Iniciar Sesión</strong></ion-button>
    <div class="iniciarSesion"><strong>¿Olvidaste tu contraseña? Recuperar contraseña</strong></div>
  </ion-content>
</template>

<script setup lang="ts">
import { IonInput, IonInputPasswordToggle, IonButton, } from '@ionic/vue';

</script>
<style scoped>
.iniciar {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: xx-large;
  text-align: center;
}

ion-input {
  border-radius: 20px;
  width: 400px;
  height: 50px;
  margin: 0 auto;
  background-color: #9c9b9b;
  color: #020202;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  margin-bottom: 15px
}

.iniciarSesion {
  text-align: center;
  margin-top: 1rem;
}

.boton {
  border-radius: 20px;
  display: block;
  padding: 4px;
  background-color: rgb(0, 0, 0);
  margin: 1rem auto;
}

.center-text {
  --padding-start: 0px;
  --padding-end: 0px;
  text-align: center;
}


</style>


/*
.contenedor {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

