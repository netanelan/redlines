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
/* .spinner {
  position: fixed; Sit on top of the page content
  display: block; Hidden by default
  width: 100vw; Full width (cover the whole page)
  height: 100vh; Full height (cover the whole page)
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 3rem;
  background-color: rgba(4, 3, 3, 0.8); Black background with opacity
  cursor: progress; Add a pointer on hover
} */
.fc::v-deep .fc-toolbar-title {
  font-size: 1rem;
}

.fc::v-deep .fc-daygrid-day-events {
  display: none;
}

/* .move-date-selector {
  position: relative;
  justify-self: center;
  display: grid;
  justify-content: center;
  flex-direction: column;
  background-color: #3b4b60;
  border-radius: 1rem;
  padding-bottom: 5rem;
  margin: 1rem;
  padding-top: 3rem;
  min-width: 20rem;
  grid-area: 1 / 1;
  z-index: 4;
} */

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

.flatpickr-calendar.inline {
  display: block;
  /* position: relative; */
  /* top: 2px; */
}

.calendar button {
  margin: 10px;
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
  display: flex;
  justify-content: center;
  padding: 10px 5px 20px 5px;
  margin: 0 auto;
  width: 100%;
}
.flatpickr-input {
  display: none;
}
</style>
