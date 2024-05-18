<template>
  <ion-content class="ion-padding">
    <h2>Iniciar Sesión</h2>
    <img src="" alt="">
    <ion-input placeholder="Email" fill="outline"></ion-input>
    <ion-input fill="outline" type="password" placeholder="Clave" value="" class="custom">
      <ion-input-password-toggle slot="end"></ion-input-password-toggle>
    </ion-input>
    <ion-button expand="full" size="default" class="redondo">Iniciar Sesión</ion-button>
    <p>¿Olvidaste tu clave?</p>
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonInput, IonInputPasswordToggle, IonButton } from '@ionic/vue';

</script>

<style scoped>

</style>