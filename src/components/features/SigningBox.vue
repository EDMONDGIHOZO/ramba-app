<template>
  <div>
    <h3 class="font-bold">{{ title }}</h3>
    <div class="flex justify-start gap-4 py-2">
      <c-checkbox :value="selectedStatus" @update="(value) => handleUpdate(value)" label="Present"/>
      <c-checkbox :value="selectedStatus" @update="(value) => handleUpdate(value)" label="Absent"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CCheckbox from "@/components/features/CheckBox.vue";

export default defineComponent({
  name: 'signingBox',
  components: {CCheckbox},
  emits: ['update'],
  props: {
    title: {
      type: String
    },
  },
  data() {
    return {
      isChecked: false,
      isNotChecked: false,
      selectedStatus: ''
    }
  },
  methods: {
    handleUpdate(value: any) {
      this.selectedStatus = value
      this.$emit('update', value)
    },
  }
})
</script>

<style scoped>

</style>