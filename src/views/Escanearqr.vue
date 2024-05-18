<template>
    <ion-content class="ion-padding">
      <h1><strong>PULSA EL BOTON PARA ESCANEAR EL QR</strong></h1>
      <ion-header>
  <ion-toolbar class="nav">
    <ion-title>
      ICONO
    </ion-title>
  </ion-toolbar>
</ion-header>

    </ion-content>
  
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>


<style>
h1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: xx-large;
    text-align: center;
}

.nav{
position: fixed;
bottom: 0;
width: 100%;
text-align: center;
}
</style>