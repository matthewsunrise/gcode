<template>
  <div class="card flex flex-col w-1/5 ml-1">
    <header
      class="card-header flex border border-grey-darkest rounded p-1 justify-center items-center"
    >
      <span class="card-header-title">{{ skill.name | capitalize | readableName }}</span>
    </header>
    <div class="card-body flex flex-col p-2">
      <ul class="list-reset text-left">
        <li
          v-for="(comment, index) in skill.comments"
          :key="index"
          class="mb-2"
        >{{ comment.body }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    readableName: value => value.replace('_', ' ')
  },
  props: {
    skill: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
