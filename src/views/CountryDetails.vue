<template>

<div class="column is-8">
<section class="section">

<figure class="image is-128x128">
    <img :src="`https://flagpedia.net/data/flags/icon/72x54/${countryInfo.alpha2Code.toLowerCase()}.png`" alt="">
</figure>

<div class="title">{{countryInfo.name.common}}</div>

<table class="table is-fullwidth">
    <tbody>
        <tr>
            <td>Capital</td>
            <td>{{countryInfo.capital}}</td>
        </tr>
        <tr>
            <td>Area</td>
            <td>{{countryInfo.area}}</td>
        </tr>
        <tr>
            <td>Borders</td>
            <td>{{countryInfo.borders}}</td>
        </tr>

    </tbody>
</table>


<!-- router view -> queremos insertar un componente que se lo vamos a definir en el .js -->
<!-- router link -> se utiliza como una etiqueta <a> y te lleva a otra página. -->

</section>

</div>

</template>

<script setup>

import { ref, watch } from 'vue';
// Aquí ponemos useRoute -> para poder importar.
// Esto significa que este elemento cuando se le llame estará recibiendo un parámetro. 
// Es una etiqueta del vue-router -> ¡SIEMPRE ES ASÍ!
import { useRoute } from 'vue-router';

import countries from '../assets/countries.json';


const route = useRoute(); 
// Aquest és un ref perquè el valor d'aquí anirà canviant. 
// Li podem posar '' dins dels parèntesis per dir que és un string. 
const codeCountry = ref(''); 

// Creem una constant que agafarà un objecte, per això en aquest cas no posem ''. 
const countryInfo = ref(Object);

// El watch és una funció i li hem de dir quina és la variable que ha de mirar i el nou valor. El watch mira una variable i quan canvia aquesta variable, llavors executa i l'actualitza. 

// Aquí farem una función que ens retorni el país: Li donarem un paràmetre entre () que serà alpha3Code
const findCountry = (codi) => {
    const getCountry = countries.filter(country => country.alpha3Code == codi);
    console.log(getCountry[0]);
    return getCountry[0];
}

watch (() => route.params.code, newValue => {
    // console.log ('Country changed', newValue);
    codeCountry.value = route.params.code; 
    countryInfo.value = findCountry(route.params.code);
});

// En comptes d'aquest find() -> també podria utilizar filter(). Són dos mètodes diferents que fan el mateix:

// const filtered = ref (countries.find((country) => country.alpha3Code === codeCountry.value));

// const filtered = ref (countries.find((country) => country.alpha3Code === codeCountry.value));

// console.log (filtered);


</script>

<style scoped>
</style>