<template>
  <div :style="showMovers()"  class="moversNumber"></div>
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
        v-if="percentage >= 30"
        alt=""
        class="check-mark-icon"
        src="@/assets/check-mark-filled.svg"
        id="check-mark-icon"
      />
    </div>
    <div v-if="percentage < 16" class="title">Calculating...</div>
    <div v-else-if="percentage >=16 && percentage < 30" class="title">
      Searching For Movers...
    </div>
    <div v-else-if="percentage >= 30" class="title">
      We Found <span class="accent">{{ moversCount }}</span> Movers in Your
      Area!
    </div>
    <div class="progress-bar">
      <div :style="barStyles" class="bar"></div>
    </div>
    <div class="percentage">{{ percentage <=100 ? percentage :100 }}%</div>
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
    mainPosition:0,
  }),
  computed: {
    ...mapState(useStepperStore, ["lead", "moveDate"]),
    barStyles() {
      if(this.percentage>=30){
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
    this.mainPosition=document.getElementsByClassName("main")[0].clientHeight+document.getElementsByClassName("header")[0].clientHeight;
    document.getElementsByClassName("moversNumber")[0].style.cssText=`top:${this.mainPosition}px;`;
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
        if(this.percentage<100)this.percentage++;
        if(this.percentage==31){
          this.iconBScale();
        }
        if (this.percentage == 45) {
          this.iconBScale();
          this.moversCount = 2;
        }
        if (this.percentage == 75) {
          this.iconBScale();
          this.moversCount = 3;
        }

        if (this.percentage == 100) {
          this.iconBScale();
          this.moversCount=4;
          this.timeOut = setTimeout(redirect, 2000);
          this.percentage++;
        }
      };
      this.interval = setInterval(handle, 80);
    },
    showMovers(){
    if(this.percentage>=30){ 
      this.mainPosition=document.getElementsByClassName("main")[0].clientHeight+document.getElementsByClassName("header")[0].clientHeight;
      return `top:${this.mainPosition+40+(25*this.moversCount)}px;height:${175-(25*this.moversCount)}px`;
    }
  },
  iconBScale(){
    document.getElementById("check-mark-icon").classList.add("check-mark-icon-found");
    setTimeout(()=>{document.getElementById("check-mark-icon").classList.remove("check-mark-icon-found");},320);
  },
  },
};
</script>

<style scoped>

  @keyframes checkscale{
    0%{width: 40px;height: 40px;}
    50%{width: 48px;height: 48px;}
    100%{width: 40px;height: 40px;}
  }

  .check-mark-icon-found{
    animation-name: checkscale;
    animation-duration: 320ms;
  }

.moversNumber{
  position: absolute;
  max-width: 500px;
  width:100vw;
  margin: 0px auto;
  z-index: 2;
  background-color:white;
  left:0;
  right: 0;
  height: 175px;
}
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
  background-color: rgb(122,160,105);
  border-radius: 10px;
  height: 100%;
  width: 0;
  transition: width 0.06s ease;
}

.accent {
  color: #05ad05;
}

.percentage {
  color: #808080;
  font-size: 1.25rem;
}
</style>
