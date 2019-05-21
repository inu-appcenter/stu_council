<template>
  <div id="location">
    <p>location</p>
    <DaumMap></DaumMap>
    <p>위치는 불라불라 입니다.</p>
  </div>
</template>

<script>
import DaumMap from '@/components/daum_map'

export default {
  name: 'location',

  components: {
    DaumMap,
  },

}
</script>

