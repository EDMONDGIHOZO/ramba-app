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
      <div v-if="attendance === 'Present'">
        <signature-canvas/>
      </div>
      <signing-box @update="(value) => updateGroupTherapy(value)" title="Group therapy"/>
      <div v-if="group_therapy === 'Present'">
        <signature-canvas/>
      </div>
      <location-pick @update="(value) => updateLocation(value)"/>
      <div class="w-full flex justify-between items-center">
        <h3 class="font-bold">Notes</h3>
        <span class="text-gray-300 text-sm">100 words max</span>
      </div>
      <textarea v-model="notes"
                name="note"
                class="border rounded p-4"
                @input="onInput"
      />
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
import SignatureCanvas from "@/components/features/SignatureCanvas.vue";
import LocationPick from "@/components/features/LocationPick.vue";

export default defineComponent({
  name: 'viewRecord',
  components: {LocationPick, SignatureCanvas, SigningBox, ModalWrapper},
  data() {
    return {
      addRecordOpen: false,
      attendance: '',
      group_therapy: '',
      notes: '',
      location: ''
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
    updateLocation(value: string) {
      this.location = value
    },
    updateGroupTherapy(value: string) {
      this.group_therapy = value
    },
    onInput(event: any) {
      const input = event.target as HTMLInputElement;
      const words = input.value.trim().split(/\s+/);
      if (words.length > 100) {
        input.value = words.slice(0, 100).join(' ');
        this.notes = input.value;
        event.preventDefault();
        alert('100 Words has exceeded!')
      } else {
        this.notes = input.value;
      }
    }
  }
})
</script>

<style scoped>

</style>