<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BaseMapita :center="[-99.1332,19.4326]" :zoom="10" >
      <CapaXyz :opacidad="1" url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"/>
    </BaseMapita>
    <hr>
    <BaseMapita :center="[-99.1332,19.4326]" :zoom="10" >
      <CapaXyz 
      v-if="renderizado"
      :opacidad="1" url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
      :visible="prendido"
      />
    </BaseMapita>
    <label for="">
      Prendido
      <input type="checkbox" v-model="prendido">
    </label>
    <label for="">
      renderizado
      <input type="checkbox" v-model="renderizado">
    </label>
    

    <BaseMapitaGema title="Soy de gema" :center="[-99.1332,19.4326]" :zoom="10" ></BaseMapitaGema>
  </div>
</template>

<script>
import BaseMapita from "./components/map/BaseMapita.vue"
import BaseMapitaGema from './components/map/BaseMapitaGema.vue'
import CapaXyz from "./components/layer/CapaXyz.vue"

export default {
  name: 'App',
  components: {
    BaseMapita,
    BaseMapitaGema,
    CapaXyz
  },
  data(){
    return {
      prendido:true,
      renderizado:true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
