<template>
  <div class="flex flex-wrap justify-between">
    <SkillListItem
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
    />
  </div>
</template>

<script>
import skills from '~/data/skills'
import SkillListItem from '~/components/skills/SkillListItem'

export default {
  components: {
    SkillListItem
  },
  data() {
    return {
      skills: skills
    }
  }
}
</script>
