<template>
  <div>
    <h3 class="text-gray-500 font-medium">Location</h3>
    <div class="flex justify-start gap-4 py-2">
      <c-checkbox :value="selectedLocation" @update="(value) => updateLocation(value)" label="Onsite"/>
      <c-checkbox :value="selectedLocation" @update="(value) => updateLocation(value)" label="Virtual"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CCheckbox from "@/components/features/CheckBox.vue";

export default defineComponent({
  name: 'locationPick',
  components: {CCheckbox},
  emits: ['update'],
  data() {
    return {
      selectedLocation: ''
    }
  },
  methods: {
    updateLocation(value: string) {
      this.selectedLocation = value
      this.$emit('update', value)
    }
  }
})
</script>

<style scoped>

</style>