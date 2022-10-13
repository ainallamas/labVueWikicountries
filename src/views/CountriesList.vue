<template>
<section class="section">

<div class="countries-list" v-for="country in countries" :key="country.name">
    <ul>
    <router-link :to="{name: 'details', params: {alpha3code:country.alpha3Code}}">
        <!-- Establecemos params para llevarnos una info con nostros que vamos a necesitar para sacar la información del país -->
        <!-- alpha3code: -> implica que és igual a -> meterse en la array de countries -> entrar en country y después en alpha3Code -->
        <li>{{country.name.common}}</li>
        <li><img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"></li>
    </router-link>
    </ul>
</div>

</section>
</template>


<script setup>

import { ref } from 'vue'

import countries from '../assets/countries.json'






</script>


<style scoped>

.countries-list {
    margin: 20px; 
}

</style>