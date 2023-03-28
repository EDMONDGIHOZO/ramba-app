<template>
  <div class="flex items-center justify-start gap-2">
    <input
        @change="updateCheckbox"
        type="checkbox"
        :id="`${label}-checkbox`"
        v-model="checked"
        :checked="label === value"
    >
    <label :for="`${label}-checkbox`">{{ label }}</label>
  </div>
</template>
<script lang="ts">

export default {
  name: 'c-checkbox',
  emits: ['update'],
  data() {
    return {
      checked: false
    }
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    updateCheckbox(this: any) {
      this.checked = true /// this will help to avoid having nothing selected..
      this.$emit('update', this.label);
    },
  },
};
</script>