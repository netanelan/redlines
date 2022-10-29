<template>
  <div class="request-submitted">
    <div class="text-wrapp">
      <div class="text thin-font">{{ lead.move_size.name }} - {{ moveDate }}</div>
    </div>
    <div class="location-wrapp">
      <div class="text-wrapp">
        <img alt="" class="location-icon" src="@/assets/location.svg" />
        <span class="text thin-font">{{ lead.from_city }}, {{ lead.from_state }}</span>
      </div>
      <img alt="" class="arrow-icon" src="@/assets/arrow-right-to.svg" />
      <div class="text-wrapp thin-font">
        <img class="location-icon" src="@/assets/location.svg" />
        <span class="text thin-font">{{ lead.to_city }}, {{ lead.to_state }}</span>
      </div>
    </div>
    <h2 class="title">Your'e All Set !</h2>
    <p class="text-ordinary thin-font">
      Your request has been submitted.<br />Matched movers will contact you
      shortly.
    </p>
    <div class="confirm-block thin-font">
      <span class="confirm-text">Confirmation #:</span>
      <span class="confirm-number"> 564F 5789</span>
    </div>
    <p class="text-small">
      Movers must gather some final details about<br />
      the items you are moving, in order to provide an exact quote.
    </p>
    <div class="text-big thin-font">Be sure to answer when call is recevied.</div>
    <div class="card">
      <p class="card-title">If you prefer not to wait, call now:</p>
      <a class="card-button" href="tel:8555350895">
        <img alt="" class="icon" src="@/assets/call.svg" />
        <span class="number">855-535-0895</span>
      </a>
      <div v-if="afterHour" class="card-hours thin-font">
        Hours: <span>&#9679; Now Open</span>
      </div>
      <div v-else class="card-hours-closed thin-font">
        Hours: <span>&#9679; Now Closed</span>
      </div>
      <p v-if="afterHour" class="text-ordinary thin-font">
        Open 7 days a week. Closes today at 8:30 PM
      </p>
      <p v-else class="text-ordinary thin-font">
        Open 7 days a week. Closed yesterday at 8:30 PM
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia/dist/pinia";
import { useStepperStore } from "@/store/stepper.store";
import router from "@/router";

export default {
  name: "RequestSubmitted",
  computed: {
    ...mapState(useStepperStore, ["lead", "moveDate", "afterHour"]),
  },
  mounted() {
    console.log(this.lead);
  },
  unmounted() {
    if (router.currentRoute.value.fullPath === "/enter-two-digit-number") {
      router.push("/request-submitted");
    }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.request-submitted {
  padding: 20px 20px 10px;
}

.location-wrapp {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  margin-bottom: 20px;
  height: 40px;
}

.text-wrapp {
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-icon {
  width: 18px;
  margin-right: 5px;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
  align-self: center;
}

.text {
  color: #b4b4b4;
  font-size: 13px;
}



.title {
  color: #414c5e;
  margin-bottom: 10px;
  font-weight: bold;
}

.text-ordinary {
  font-style: italic;
  font-size: 13px;
  color: #808080;
  margin-bottom: 15px;
}

.confirm-block {
  display:inline-block;
  padding: 5px 30px;
  border-radius: 15px;
  background-color: rgb(235,235,235);
  margin: 0 auto;
  margin-bottom: 15px;
}

.confirm-text {
  color: #000;
  font-style: italic;
}

.confirm-number {
  color: #05ad05;
  font-weight: bold;
}

.text-small {
  font-size: 0.7rem;
  color: #808080;
  font-weight: bold;
  margin-bottom: 15px;
}

.text-big {
  font-size: 1rem;
  color: #808080;
  margin-bottom: 15px;
}

.card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 1px 1px 10px -5px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.card-title {
  color: #414c5e;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.icon {
  width: 30px;
  height: 30px;
}

.card-button {
  background-color: #ff9e01;
  display: flex;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 15px;
  padding: 10px;
  max-width: 250px;
  width: 100%;
  align-items: center;
}

.number {
  align-self: center;
  margin: 0 auto;
  font-weight: bold;
  font-size: 1.2rem;
}

.card-hours {
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-hours span {
  color: #05ad05;
}

.card-hours-closed {
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-hours-closed span {
  color: #ad0527;
}
</style>
