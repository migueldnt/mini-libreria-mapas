<template>
    <div>
        <div class="mapa" ref="mapa_div"></div>
        <slot></slot>
    </div>
</template>

<script>
import BaseMapitaMixin from './BaseMapitaMixin'

export default {
    data() {
        return {}
    },
    mixins: [BaseMapitaMixin]
}
</script>

<style scoped>
.mapa {
    width: 400px;
    height: 300px;
}
</style>