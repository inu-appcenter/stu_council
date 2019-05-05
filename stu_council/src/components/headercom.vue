<template>
    <div id="headercom">
      <div class="home_logo">
        <router-link to="/">home</router-link>
      </div>
      <div class="menubar">
        <li><router-link to="/introduce">총학생회</router-link>
          <ul>
            <li><router-link to="/introduce">총학생회소개</router-link></li>
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
}
</script>


