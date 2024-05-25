<template>
  <ion-content>
    <ion-header class="aulas">
        <ion-toolbar>
          <ion-title>
            MIS AULAS
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-header class="menu">
        <ion-toolbar>
          <ion-title>
            MENU INFERIOR
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
.aulas{
  text-align: center;
}

</style>
