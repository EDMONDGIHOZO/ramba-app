<template>
  <main>
    <PatientsRecords />
  </main>
</template>

<script>
import {defineComponent} from "vue";
import PatientsRecords from "@/components/patients-records/AllRecords.vue";

export default defineComponent({
  components: {PatientsRecords}
})
</script>
