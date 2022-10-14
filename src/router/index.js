// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

// Si hay una ruta children implica que haya dos routerviews! Una para cada una de las rutas. 
// Según lo que tengas en las rutas, esto dictaminará cuantos <routerview> tienes: 
// Normalmente tendremos en el App.vue -> un <routerview> que es la parte principal de la web. 
//Mientras que el componente que tiene children también tendrá que tener un <routerview>
const routes = [
  {
    path: '/',
    name: 'countries',
    component: () => import('../views/CountriesList.vue'),
    // Cuando pongo los dos punto en el path (:code) estoy indicando el elemento es dinámico. El nombre del params será el que hay detrás de los dos puntos de path. 
    children: [
      {
        path: 'countries/:code',
        name: 'details',
        component: () => import('../views/CountryDetails.vue'),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;