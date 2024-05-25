<template>
  <ion-content>
    <div class="scroll-container">
      <ion-list>
        <ion-item v-for="(item, index) in items" :key="index">
          <ion-label>{{ item }}</ion-label>
        </ion-item>
      </ion-list>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonItem, IonLabel, IonList, IonContent } from '@ionic/vue';

// Define your list of items
const items = ref([
  'Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 
  'Super Mario World', 'Super Mario World', 'Super Mario World', 
  'Super Mario World', 'Super Mario World', 'Super Mario World', 
  'Super Mario World', 'Super Mario World', 'Super Mario World', 
  'Super Mario World', 'Super Mario World', 'Super Mario World', 
  'Super Mario World', 'Super Mario World', 'Super Mario World', 
  'Super Mario World'
]);
</script>

<style scoped>
.scroll-container {
  height: 100%; /* O usa una altura fija si es necesario */
  overflow-y: auto;
}
</style>
