<template>
  <vue-daum-map
    class="map"
    :appKey="appKey"
    :center.sync="center"
    :level.sync="level"
    :mapTypeId="mapTypeId"
    :libraries="libraries"
    @load="onLoad"
  ></vue-daum-map>
</template>

<script>
import VueDaumMap from "vue-daum-map";

export default {
  name: "daum_map",

  components: {
    VueDaumMap
  },

  data: () => ({
    appKey: process.env.KAKAO_KEY,
    center: { lat: 37.374482, lng: 126.630852 },
    // 인천대학교 중심 좌표 -> 37.3750548,126.6307111
    // 복지회관 중심 좌표 -> 37.374449, 126.631773
    level: 3, // 지도의 레벨(확대, 축소 정도),
    mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
    libraries: [], // 추가로 불러올 라이브러리
    map: null, // 지도 객체. 지도가 로드되면 할당됨.
    mLat: 37.374482,
    mLng: 126.630852
  }),

  methods: {
    onLoad(map) {
      var self = this;
      self.map = map;
      var location = new daum.maps.LatLng(self.mLat, self.mLng);
      var marker = new daum.maps.Marker({
        position: location
      });
      //이미지 변경 코드
      // var marker_src = '../assets/red_marker_img.png'
      // var marker_size = new daum.maps.Size(22, 26)
      // var marker_option = {offset: new daum.maps.Point(20, 23)}
      // var red_marker = new daum.maps.MarkerImage(marker_src, marker_size, marker_option)
      // marker.setImage(red_marker)
      marker.setMap(self.map);
    }
  }
};
</script>

