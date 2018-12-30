<template>
  <nav class="main-navigation justify-center py-2 bg-black">
    <ul class="flex menu justify-center items-center w-3/4">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="menu-item hover:bg-orange-lightest p-1 ml-2"
      >
        <nuxt-link
          :to="link.url"
          class="text-indigo-lightest hover:text-orange-darkest no-underline"
        >{{ link.name | capitalize }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'home',
          url: '/'
        },
        {
          name: 'about',
          url: '/about'
        },
        {
          name: 'skills',
          url: '/skills'
        },
        {
          name: 'contact',
          url: '/contact'
        }
      ]
    }
  }
}
</script>


<style lang="scss">
.main-navigation {
  display: flex;

  & .menu {
    list-style: none;
  }
}
</style>
