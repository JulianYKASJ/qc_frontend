<template>
    <ion-content class="ion-padding">
        <h2 class="cuenta"><strong>Crea tu cuenta</strong></h2>
        <ion-input placeholder="Nombres"></ion-input>
        <ion-input placeholder="Apellidos"></ion-input>
        <ion-input placeholder="Documento"></ion-input>
        <ion-input placeholder="Telefono"></ion-input>
        <ion-input placeholder="Fecha de nacimiento"></ion-input>
        <ion-input placeholder="email"></ion-input>
        <ion-input type="password" placeholder="Clave" value="">
            <ion-input-password-toggle slot="end"></ion-input-password-toggle>
        </ion-input>
        <ion-input type="password" placeholder="Confirmar clave" value="">
            <ion-input-password-toggle slot="end"></ion-input-password-toggle>
        </ion-input>
        <ion-button color="black" size="default" class="boton"><strong>Crear cuenta</strong></ion-button>
    </ion-content>


</template>
<script setup lang="ts">
import { IonInput, IonInputPasswordToggle, IonButton } from '@ionic/vue';
</script>
<style scoped>
.cuenta {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: xx-large;
    text-align: center;
}

.boton {
    border-radius: 20px;
    display: flex;
    padding: 4px;
    background-color: black;

}

ion-input {
    border-radius: 20px;
    background-color: #9c9b9b;
    color: #020202;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: left;
    margin-bottom: 15px;
    padding: 2em;
}
</style>
