<template>
  <div id="location" class="container">
    <div class="body_container">
      <custom-navigation></custom-navigation>
      <div id="notice_contents">
        <div id="content_name">{{content_name}}</div>
        <div id="content_body">
          <p>인천광역시 연수구 아카데미로 119 17호관 206호</p>
          <DaumMap></DaumMap>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#location {
  padding: 90px 128px;
}

.body_container {
  display: flex;
  width: 100%;
}

#notice_contents {
  margin-left: 7%;
  width: 100%;
}

#content_name {
  width: 250px;
  height: 34px;
  font-family: NotoSansCJKkr;
  font-size: 23px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.48;
  letter-spacing: normal;
  color: #003e8f;
}

#content_body {
  margin-top: 7px;
  width: 100%;
  background-color: #ffffff;
  border-top: 3px solid #000000;
  border-bottom: 3px solid #000000;
}
</style>

<script>
import DaumMap from "@/components/daum_map";
import customNavigation from "@/pages/1st_menu/custom_navigation";

export default {
  name: "location",

  components: {
    DaumMap,
    customNavigation
  },

  data: () => ({
    content_name: "총학생회 위치"
  })
};
</script>

