<template>
  <ion-content>
    <ion-header class="aulas">
      <ion-toolbar color="dark">
        <ion-title><strong> MIS AULAS</strong> </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-header class="menu">
      <ion-toolbar color="dark">
        <ion-icon slot="end" name="scanCircle"></ion-icon>
      </ion-toolbar>
    </ion-header>
    <ion-button color="black" expand="full" v-for="(aula, index) in aulas" :key="index">
      <ion-label>{{ aula.nombre }}</ion-label>
      <ion-icon slot="end" :icon="aula.icono"></ion-icon>
    </ion-button>
  </ion-content>
</template>
<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import ExploreContainer from "@/components/ExploreContainer.vue";
import { IonFab, IonFabButton, IonIcon } from "@ionic/vue";
import { logoIonic, arrowForwardCircle, scanCircle} from "ionicons/icons";
import { defineComponent } from "vue";

const aulas = [
  {
    nombre: 'Programacion',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Sistemas',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Inglés A1',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
]

</script>
<style>

.menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}

ion-button {
  color: rgb(243, 240, 240);
  margin: 15px;
  border-radius: 20px;
  padding: 5px;
  background-color: black;
}

ion-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ion-label {
  flex: 1;
}
</style>
