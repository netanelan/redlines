<template>
  <div class="movers-offline-warning">
    <img class="icon" src="@/assets/moon.svg" />
    <h3 class="title">
      Due to the time...<br />some movers are currently offline
    </h3>
    <p class="text text-grey thin-font">
      In order to receive an exact quote,<br />Movers must gather some final<br />details
      of your move.
    </p>
    <div class="text text-white thin-font">
      Would you like additional movers to<br />
      Provide quotes in the morning?
    </div>
    <button class="btn btn-yes" type="submit" @click="onApprove">Yes</button>
    <button class="btn btn-no" type="submit" @click="onReject">No</button>
  </div>
</template>

<script>
import { useStepperStore } from "@/store/stepper.store";
import router from "@/router";

export default {
  name: "MoversOfflineWarning",
  methods: {
    onApprove() {
      useStepperStore().$patch({ provideQuotesInMorning: true });
      router.push("/request-submitted");
    },
    onReject() {
      useStepperStore().$patch({ provideQuotesInMorning: false });
      router.push("/request-submitted");
    },
  },
};
</script>

<style scoped>
.movers-offline-warning {
  background-color: #414c5e;
  padding: 30px 5px 20px 5px;
  min-height: 300px;
  margin: 30px 10px;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.title {
  margin-bottom: 15px;
  line-height: 30px;
}

.icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.text {
  margin-bottom: 15px;
  font-weight: 100;
}
.text-white{
  font-size: 18px;
  line-height: 25px;
}

.text-grey {
  color: #ababab;
  font-style: italic;
  font-size: 15px;
  letter-spacing: 0.5px;
}

.btn {
  color: white;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  padding: 10px 5px;
  cursor: pointer;
  font-size: 22px;
}
.btn-yes{
  background-color: #ff9e01;
  border: none;
  margin-top: 10px;
}
.btn-no {
  border: 1px solid grey;
  background-color: transparent;
  margin-top: 15px;
}
</style>
