<template>
  <ion-content class="ion-padding">
    <h1><strong>PULSA EL BOTON PARA ESCANEAR EL QR</strong></h1>
    <div class="nav">
      <ion-header>
        <ion-toolbar>
          <ion-title>
            LOGO
          </ion-title>
        </ion-toolbar>
      </ion-header>
    </div>

  </ion-content>

</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>


<style>
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: xx-large;
  text-align: center;
}

</style>