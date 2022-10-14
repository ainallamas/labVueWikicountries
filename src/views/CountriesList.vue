<template>
  <div class="flex-comp">
    <div>
      <!-- Cuando utilizamos el key, identificamos los cambios que se van a ahacer en casa iteración. Es decir, en el ejemplo del carrito de la compra, cuando elimino un elemento si tiene el key, solo nos eliminará el elemento que seleccionamos. Si no pusieramos el key, nos lo borrará todo y nos pintará lo demás. El key tiene que ser único -> necesitamos un identificador único para cada uno de los elementos. si hay key y borro un elemento, entonces solo me borrará ese. -->
      <div class="countries-list section" v-for="country in countries">
        <ul class="llista-roll">
          <!-- Dins del parametre hem de posar code -> per entrar -->
          <!-- La propietat dinámica l'has d'agafara de code: agafem la propietat de la variable country -> cada cop que apretem al link ens refrescarà la ruta amb el alpha3Code d'aquell país. -->
          <router-link
            :to="{ name: 'details', params: { code: country.alpha3Code } }"
          >
            <!-- Establecemos params para llevarnos una info con nostros que vamos a necesitar para sacar la información del país -->
            <!-- alpha3code: -> implica que és igual a -> meterse en la array de countries -> entrar en country y después en alpha3Code -->
            <li>{{ country.name.common }}</li>
            <li>
              <img
                :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
              />
            </li>
          </router-link>

          <!-- Si veus que té un fill, mostra'l -->
        </ul>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>
import countries from "../assets/countries.json";
</script>

<style scoped>
.countries-list {
  margin: 20px;
}

.llista-roll {
  overflow: auto;
}

.flex-comp {
  display: flex;
}

.section {
  width: 200px;
}
</style>
