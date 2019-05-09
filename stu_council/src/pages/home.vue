<template>
    <div id="home">
        <p>위치는 불라불라 입니다.</p>
        <DaumMap></DaumMap>
        <p>home</p>
        <router-view></router-view>
    </div>
</template>

<script>
import DaumMap from '../components/daum_map'
export default {
    name: 'home',
    components: {
        DaumMap
    },
    methods: {
    },
    
}
</script>
