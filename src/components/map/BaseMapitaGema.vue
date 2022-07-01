<template>
    <div>
        <h4>{{title}}</h4>
        <div class="mapa" ref="mapa_div"></div>
    </div>
    
</template>

<script>
import BaseMapitaMixin from './BaseMapitaMixin'

export default {
    props:["title"],
    mixins: [BaseMapitaMixin]
}
</script>

<style scoped>
.mapa{
    width: 100%;
    height: 300px;
    border: 1px solid red;
}
</style>