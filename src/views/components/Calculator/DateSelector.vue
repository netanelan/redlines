<template>
    <div class="move-date-selector">
      <h3>Approximate Move Date</h3>
      <p class="thin-font">When you suppose to move?</p>
      <form class="form">
        <flatPick
          style="border-radius: 0 !important"
          v-model="date"
          @onChange="handleDateClick"
          :config="config"
        />
      </form>
    </div>
</template>

<script>
import flatPick from "vue-flatpickr-component";
import { useStepperStore } from "@/store/stepper.store";
import { mapActions, mapState } from "pinia/dist/pinia";
import router from "@/router";
import nextArrow from "@/assets/right.png";
import prevArrow from "@/assets/left.png";

export default {
  name: "MoveDateSelector",
  components: {
    flatPick,
  },
  data() {
    const date = new Date();
    return {
      date,
      config: {
        inline: true,
        minDate: "today",
        allowInput: false,
        monthSelectorType: "static",
        nextArrow: `<img height="20" src="${nextArrow}">`,
        prevArrow: `<img height="20" src="${prevArrow}">`,
      },
    };
  },
  beforeMount() {
    this.date = this.lead.move_date;
  },
  computed: {
    ...mapState(useStepperStore, ["lead"]),
  },
  methods: {
    ...mapActions(useStepperStore, ["setLead"]),
    handleDateClick(date) {
      this.setLead({ move_date: date[0] });
      router.push("/zip-to");
    },
  },
};
</script>

<style scoped>


.move-date-selector{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b60;
  margin:16px ;
  padding-bottom: 70px;
  padding-top: 40px;
  border-radius: 20px;
}


h3 {
  margin-bottom: 50px;
  font-size: 22px;
}

p {
  color: #9f9f9f;
  margin-bottom: 5px;
  font-size: 14px;
}

.form {
  padding: 10px 10px 20px;
  margin: 0 auto;
}
.flatpickr-input {
  display: none;
}
</style>
