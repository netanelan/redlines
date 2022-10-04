<template>
  <div class="calculating-progress-bar thin-font">
    <div class="info-block">
      <div class="text-wrapp">
        <img alt="" class="icon-home" src="@/assets/home-icon.svg" />
        <div class="text ">
          Size: <span>{{ lead.move_size.name }}</span>
        </div>
      </div>
      <div class="text-wrapp">
        <img alt="" class="icon-calendar" src="@/assets/calendar.svg" />
        <div class="text">
          Date: <span>{{ moveDate }}</span>
        </div>
      </div>
    </div>

    <div class="location-wrapp">
      <div class="text-wrapp">
        <img alt="" class="location-icon" src="@/assets/location.svg" />
        <span class="location-text"
          >{{ lead.from_city }}, {{ lead.from_state }}</span
        >
      </div>
      <img alt="" class="arrow-icon" src="@/assets/arrow-right-to.svg" />
      <div class="text-wrapp">
        <img alt="" class="location-icon" src="@/assets/location.svg" />
        <span class="location-text"
          >{{ lead.to_city }}, {{ lead.to_state }}</span
        >
      </div>
    </div>
    <div class="check-mark">
      <img
        v-if="percentage >= 50"
        alt=""
        class="check-mark-icon"
        src="@/assets/check-mark-filled.svg"
      />
    </div>
    <div v-if="percentage < 25" class="title">Calculating...</div>
    <div v-else-if="percentage >= 25 && percentage < 50" class="title">
      Searching For Movers...
    </div>
    <div v-else-if="percentage >= 50" class="title">
      We Found <span class="accent">{{ moversCount }}</span> Movers in Your
      Area!
    </div>
    <div class="progress-bar">
      <div :style="barStyles" class="bar"></div>
    </div>
    <div class="percentage">{{ percentage }}%</div>
  </div>
</template>

<script>
import { mapState } from "pinia/dist/pinia";
import { useStepperStore } from "@/store/stepper.store";
import router from "@/router";

export default {
  name: "CalculatingProgressBar",
  data: () => ({
    percentage: 0,
    moversCount: 0,
    interval: null,
    timeOut: null,
  }),
  computed: {
    ...mapState(useStepperStore, ["lead", "moveDate"]),
    barStyles() {
      if(this.percentage>=50){
        return {
          width: this.percentage + "%",
          backgroundColor:"#05ad05"
        }
      }
      return {
        width: this.percentage + "%",
      };
    },
  },
  mounted() {
    this.initSearching();
  },
  beforeUnmount() {
    if (this.interval) clearInterval(this.interval);
    if (this.timeOut) clearTimeout(this.timeOut);
  },
  methods: {
    initSearching() {
      this.moversCount = 1;
      const redirect = () => {
        router.push("/email-form");
      };
      const handle = () => {
        this.percentage += 25;

        if (this.percentage > 50) {
          this.moversCount = 2;
        }

        if (this.percentage > 75) {
          this.moversCount = 4;
        }

        if (this.percentage >= 100) {
          this.percentage = 100;
          this.timeOut = setTimeout(redirect, 2000);
        }
      };
      this.interval = setInterval(handle, 1000);
    },
  },
};
</script>

<style scoped>
.calculating-progress-bar {
  padding: 30px 20px 20px 20px;
}

.location-wrapp {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  margin-bottom: 20px;
  height: 40px;
}

.title {
  color: #000;
  font-style: italic;
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.info-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:7px;
  margin-bottom: 5px;
}

.text-wrapp {
  display: flex;
  align-items: center;
  justify-content: center;
}

.check-mark {
  margin-bottom: 20px;
  height: 46px;
}

.check-mark-icon {
  width: 40px;
  height: 40px;
}

.icon-home {
  width: 15px;
  margin-right: 5px;
}
.icon-calendar{
  width: 12px;
  margin-right: 5px;
  margin-left: 2px;
}

.location-icon {
  width: 18px;
  margin-right: 2px;
}



.arrow-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
  align-self: center;
}

.text {
  width: 140px;
  color: #808080;
  text-align: left;
  font-size: 13px;
}

.text span {
  color: #b4b4b4;
}

.text-wrapp {
  display: flex;
}

.location-text {
  color: #b4b4b4;
  font-size: 13px;
}

.progress-bar {
  width: 100%;
  height: 20px;
  border-radius: 10px;
  border: none;
  background-color: #808080;
  margin-bottom: 10px;
}

.bar {
  /* background-color: #05ad05; */
  background-color: rgb(122,160,105);
  border-radius: 10px;
  height: 100%;
  width: 0;
  transition: width 1s ease;
}

.accent {
  color: #05ad05;
}

.percentage {
  color: #808080;
  font-size: 1.25rem;
}
</style>
