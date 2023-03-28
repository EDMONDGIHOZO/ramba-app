<template>
  <div>
    <button
        class="primary_button"
        @click="openAddingModel"
    >
      View Record
    </button>
    <ModalWrapper
        title="View record"
        :sub-title="moment().format('ddd. MMM DD YYYY')"
        v-show="addRecordOpen"
        @on-close="closeModal"
    >
      <signing-box @update="(value) => updateAttendance(value)" title="Attendance"/>
      <signing-box @update="(value) => updateGroupTherapy(value)" title="Group therapy"/>
      <div class="flex justify-end">
        <button
            class="primary_button"
            @click="openAddingModel"
        >
          Save updates
        </button>
      </div>
    </ModalWrapper>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ModalWrapper from "@/components/features/ModalWrapper.vue";
import moment from "moment";
import SigningBox from "@/components/features/SigningBox.vue";

export default defineComponent({
  name: 'viewRecord',
  components: {SigningBox, ModalWrapper},
  data() {
    return {
      addRecordOpen: false,
      attendance: 'present',
      group_therapy: 'present'
    }
  },
  computed: {
    moment() {
      return moment
    }
  },
  methods: {
    openAddingModel() {
      this.addRecordOpen = true
    },
    closeModal() {
      this.addRecordOpen = false
    },
    updateAttendance(value: string) {
      this.attendance = value
    },
    updateGroupTherapy(value: string) {
      this.group_therapy = value
    }
  }
})
</script>

<style scoped>

</style>