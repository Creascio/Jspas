<template>
  <q-page class="">
    <h1>Bonjour</h1>
    <div v-if="oui">
      <q-input v-model="inputValue" label="Standard" />
    </div>
    <div v-else>
      Non
    </div>

    <div v-for="(jour, index) in semaine" :key="index">
      {{index + 1}} - {{jour}}
    </div>
     
     <q-toggle v-model="oui" label="Oui"/>
     <pre>{{inputValue}} {{oui}}</pre>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const inputValue = ref('')
    const oui = ref(false)
    const semaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']

    return {inputValue, oui, semaine}
  }
})
</script>
