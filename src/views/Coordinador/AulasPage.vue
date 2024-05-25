<template>

    <ion-header class="aulas">
      <ion-toolbar color="dark">
        <ion-title><strong>AULAS</strong> </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <div class="scroll-container">
        <ion-list>
          <ion-item v-for="(aula, index) in aulas" :key="index">
            <ion-label>{{ aula.nombre }}</ion-label>
          </ion-item>
        </ion-list>
  
        <!-- <ion-button color="dark" shape="round" expand="full" >
          <ion-label>{{ aula.nombre }}</ion-label>
          <ion-icon slot="end" :icon="aula.icono"></ion-icon>
        </ion-button> -->

      </div>



    </ion-content>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="aulas" href="/aulas">
          <ion-icon aria-hidden="true" :icon="library" />
          <ion-label>Aulas</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="usuarios" href="/usuarios">
          <ion-icon aria-hidden="true" :icon="personAdd" />
          <ion-label>Usuarios</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="eventos" href="/eventos">
          <ion-icon aria-hidden="true" :icon="calendar" />
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="configuracion" href="/configuracion">
          <ion-icon aria-hidden="true" :icon="settings" />
          <ion-label>Configuración</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>


</template>
<script setup lang="ts">
import {
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonList,
  IonItem,
  IonPage,
  IonRouterOutlet,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/vue";

import { arrowForwardCircle, scanCircle, library, personAdd, calendar, settings } from "ionicons/icons";

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
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  },
  {
    nombre: 'Emprendimiento',
    icono: arrowForwardCircle
  }

]

</script>
<style>

.scroll-container {
  height: 100%; /* O usa una altura fija si es necesario */
  overflow-y: auto;
}
ion-label {
  flex: 1;
}
</style>
