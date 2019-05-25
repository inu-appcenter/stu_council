<template>
  <div id="location" class="container">
    <p>인천광역시 연수구 아카데미로 119 17호관 206호</p>
    <DaumMap></DaumMap>
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

