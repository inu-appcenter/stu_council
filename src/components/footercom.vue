<template lang="pug">
  div#footercom

    div.container

      div.footercom__logo
        img.footercom__logo-img(
          src="/src/assets/footer_logo.png"
        )

      div.footercom__text
        div.footercom__title
          p.footercom__title-text {{ title }}

        div.footercom__info
          div.footercom__info-line(
            v-for="(value, key) in footer_info"
            :key="key"
          )
            span.footercom__info-text(
              v-for="key in value"
            ) {{ key }}

        div.footercom__terms
          a.footercom__terms-link(
            v-for="(value, key) in footer_terms"
            :key="key"
            target="_blank"
            :title="value[0] + '(새 창)'"
            :href="value[1]"
          ) {{ value[0] }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'footercom',

  data: _ => ({
    title: '인천대학교 총학생회',
  }),

  computed: {
    ...mapState([
      'footer_info',
      'footer_terms',
    ])
  },

}
</script>
