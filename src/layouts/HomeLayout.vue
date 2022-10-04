<template>
  <div class="layer">
    <div v-if="IsSize_Date()" class='bgblur'></div>
    <div :style="bgColor()" class="home-layout">
      <header class="header">
        <img alt="logo" class="logo" src="@/assets/logo.jpg" />
        <a class="phone-link" href="tell:8778041606">
          <img alt="" class="phone-icon" src="@/assets/call.svg" />
          (877) 814 1606&nbsp;
        </a>
      </header>
      <main :style="IsSize_Date() && 'z-index:4;'" class="main">
        <slot></slot>
      </main>
      <div :style="truckBgImage()" :class="showTruck ? 'truck' : 'quata'">
        <div v-if="showTruck" :class="onFirstPage() ? 'blurFpage' : 'blurRestPages' " class="bg_img_blur"></div>
      </div>
      <footer class="footer thin-font">
        <a :style="IsSize_Date() && 'color:rgb(81,81,81);border-right: 1px solid rgb(81,81,81);'" class="link border" href="#">Join Our Network</a>
        <a :style="IsSize_Date() && 'color:rgb(81,81,81);border-right: 1px solid rgb(81,81,81);'" class="link border" href="#">Privacy Policy</a>
        <a :style="IsSize_Date() && 'color:rgb(81,81,81);border-right: 1px solid rgb(81,81,81);'" class="link border" href="#">Terms of Use</a>
        <a :style="IsSize_Date() && 'color:rgb(81,81,81);'" class="link" href="#">Don't Sell my Information</a>
      </footer>
      
      
    </div>
  </div>
</template>

<script>
import truck from "@/assets/truck-no-blur.svg";
import quata from "@/assets/quata.png";
import router from "@/router";
import { ref } from "vue";
import { mapState } from "pinia";
import { useStepperStore } from "@/store/stepper.store";
export default {
  name: "HomeLayout",
  data() {
    const showTruck = ref(false);
    return {
      showTruck,
      quata,
      truck,
      maxHeight: `${window.innerHeight}px`,
      maxWidth: `${window.innerWidth}px`,
    };
  },
  computed: {
    ...mapState(useStepperStore, ["showTruck"]),
  },
  methods: {
    bgColor() {
      if (router.currentRoute.value.fullPath === "/" || router.currentRoute.value.fullPath=="/size-selector" || router.currentRoute.value.fullPath=="/date-selector") {
        return `background-color: rgb(234,228,228)`;
      }
      if(router.currentRoute.value.fullPath =="/request-submitted"){
        return 'background-color: rgb(244,244,244)'
      }
      return `background-color: white`;
    },
    truckBgImage() {
      if (
        router.currentRoute.value.fullPath === "/size-selector" ||
        router.currentRoute.value.fullPath === "/date-selector" ||
        router.currentRoute.value.fullPath === "/phone-number-edit-validate" ||
        router.currentRoute.value.fullPath === "/enter-two-digit-number" ||
        router.currentRoute.value.fullPath =="/request-submitted"
      ) {
        return "display:none";
      }
      if (
        router.currentRoute.value.fullPath === "/email-form" ||
        router.currentRoute.value.fullPath === "/name-form" ||
        router.currentRoute.value.fullPath === "/phone-number-form" ||
        router.currentRoute.value.fullPath === "/movers-offline-warning"
      ) {
        this.showTruck = false;
        return `background-image: url(${quata})`;
      }
      this.showTruck = true;
      return `background-image: url(${truck})`;
    },
    IsSize_Date(){
      return router.currentRoute.value.fullPath=="/size-selector" || router.currentRoute.value.fullPath=="/date-selector"
    },
    onFirstPage(){
      return router.currentRoute.value.fullPath=="/";
    },
  },
};
</script>

<style scoped>
.footer-grid {
  display: grid;
}
.not-footer {
  min-height: calc(100% - 280px);
  background: #fcc;
}


.bgblur{
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0,0,0,0.88);
  z-index: 2;
}

.quata {
  width: 100vw;
  max-width: 500px;
  height: 175px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  margin: 0px auto 50px;
}
.truck {
  position: absolute;
  height: calc(100vh - 467px);
  width: 100vw;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.bg_img_blur{
  width: 100%;
  height: 100%;
}
.blurFpage{
  background-color:rgb(234,228,228,0.8);
}
.blurRestPages{
  background-color: rgb(255,255,255,0.8);
}
.home-layout {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: calc(100vw);
  min-height: calc(100vh - 1px);
  margin: 0 auto;
}

.bgColor {
  background-color: #f8efef;
}

.layer {
  display: grid;
  position: relative;
}

.main {
  z-index: 2;
  margin: 0px 0px 40px 0px;
  padding: 0;
}

.home-layout.size-selector .footer,
.home-layout.size-selector .header,
.home-layout.date-selector .footer,
.home-layout.date-selector .header {
  display: none;
}

a {
  text-decoration: none;
  color: #000;
}

.header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 2px;
  box-shadow: 0 1px 5px rgba(57, 63, 72, 0.3);
}

.footer {
  position: fixed;
  bottom: 0;
  z-index: 2;
  left: 8px;
  right: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
}

.logo {
  width: 120px;
  height: 50px;
}

.phone-icon {
  width: 25px;
  height: 25px;
  background-color: rgb(10, 91, 167);
  padding: 5px;
  border-radius: 50%;
  margin-right: 5px;
}

.phone-link {
  color: rgb(10, 91, 167);
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: underline;
  display: flex;
  align-items: center;
}

.border {
  border-right: 1px solid #000;
}



.link {
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
