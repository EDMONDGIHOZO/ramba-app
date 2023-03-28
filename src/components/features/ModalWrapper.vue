<template>
  <div class="modal_backdrop">
    <div class="modal_wrapper">
      <div class="modal_header">
        <p class="modal_title">{{ title }}
          <span class="text-green-500 ml-3 font-medium">
           - {{ subTitle }}
          </span>
        </p>
        <XMarkIcon
            class="close_icon"
            @click="handleClose"
        />
      </div>
      <div class="modal_body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {XMarkIcon} from '@heroicons/vue/24/solid'

export default defineComponent({
  name: 'ModalWrapper',

  components: {XMarkIcon},
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    children: {
      type: Array as () => unknown[],
      default: () => []
    }
  },
  emits: ['onClose'],
  methods: {
    handleClose() {
      this.$emit('onClose')
    }
  }
})
</script>

<style scoped>

</style>