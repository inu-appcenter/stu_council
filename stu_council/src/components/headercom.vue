<template>
    <div id="headercom">
      <div class="home_logo">
        <router-link to="/">home</router-link>
        <router-link to="/login">login</router-link>
        <!-- <router-link to="/logout" v-else>logout</router-link> -->

      </div>
      <div class="menubar">
        <li><router-link to="/introduce">총학생회</router-link>
          <ul>
            <li><router-link to="/introduce">총학생회 소개</router-link></li>
            <li><router-link to="/location">총학생회 지도</router-link></li>            
          </ul>
        </li>
        <li><router-link to="/petition">소통창구</router-link>
          <ul>
            <li><router-link to="/petition">학생청원</router-link></li>
            <li><router-link to="/board">게시판</router-link></li>            
          </ul>
        </li>
        <li><router-link to="/conference">자료실</router-link>
          <ul>
            <li><router-link to="/conference">회의보고</router-link></li> 
            <li><router-link to="/financial">재정보고</router-link></li>
            <li><router-link to="/formdoc">서식자료실</router-link></li>                                   
          </ul>
        </li>
        <li><router-link to="/rental">학생복지</router-link>
          <ul>
            <li><router-link to="/rental">물품대여</router-link></li>                               
          </ul>
        </li>
      </div>
    </div>
</template>

<script>
export default {
    name: 'headercom',

    data () {
    return {

    }
  },

  methods: {
    
  },

  computed: {
  }
}
</script>


