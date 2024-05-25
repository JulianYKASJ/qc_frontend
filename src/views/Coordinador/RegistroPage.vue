<template>
  <ion-content class="ion-padding contenido-centrado">
    <h2 class="cuenta"><strong>Crea tu cuenta</strong></h2>

    <ion-input placeholder="Nombres" class="text"></ion-input>
    <ion-input placeholder="Apellidos" class="text"></ion-input>
    <ion-input placeholder="Documento" class="text"></ion-input>
    <ion-input placeholder="Telefono" class="text"></ion-input>
    <ion-input placeholder="Fecha de nacimiento" class="text"></ion-input>
    <ion-input placeholder="email" class="text"></ion-input>
    <ion-input type="password" placeholder="Clave" class="text" value="">
      <ion-input-password-toggle slot="end"></ion-input-password-toggle>
    </ion-input>
    <ion-input
      type="password"
      placeholder="Confirmar clave"
      class="text"
      value=""
    >
      <ion-input-password-toggle slot="end"></ion-input-password-toggle>
    </ion-input>
    <ion-button color="black" size="default" class="boton"
      ><strong>Crear cuenta</strong></ion-button
    >
    <div class="iniciarSesion">
      <strong
        >¿Ya tienes cuenta?<ion-router-link routerLink="/inicioPage.vue "
          >Iniciar sesión</ion-router-link
        ></strong
      >
    </div>
  </ion-content>
</template>
<script setup lang="ts">
import { IonInput, IonInputPasswordToggle, IonButton } from "@ionic/vue";
</script>
<style scoped>
.cuenta {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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

.boton {
  border-radius: 20px;
  display: flex;
  padding: 4px;
  background-color: black;
}

.iniciarSesion {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
}

ion-input {
  border-radius: 20px;
  background-color: #91828259;
  color: #020202;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  margin-bottom: 15px;
}

.text {
  --padding-start: 0px;
  --padding-end: 0px;
  text-align: center;
}
</style>
