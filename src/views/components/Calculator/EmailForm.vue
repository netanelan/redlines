<template>
  <div class="wrapper">
    <div class="movers-wrapper">
      <img
        alt=""
        class="check-mark-icon"
        src="@/assets/check-mark-filled.svg"
      />
      <span class="text">Movers Found</span>
      <img alt="" class="icon" src="@/assets/more-than-sign.svg" />
      <span class="text" style="color: #c2c1c1">View Quote</span>
    </div>
    <h2 class="title thin-font">Your Quote Is Ready !</h2>
    <div class="email-form">
      <form class="form" novalidate="" @submit.prevent="onSubmit">
        <h3 v-if="!hasError" class="subtitle">Enter Your Email</h3>
        <div v-else class="text-wrapp">
          <h2 class="emails-title">Valid Email Required</h2>
          <img alt="" class="mark-icon" src="@/assets/close.png" />
        </div>
        <input
          v-model="value"
          autocomplete="on"
          class="input"
          placeholder="Enter Valid Email"
          type="email"
          @input.prevent="onChange"
        />
        <button class="btn" type="submit">Send</button>
      </form>
      <div class="disclaimer">
        <img alt="" class="lock-icon" src="@/assets/lock.svg" />
        <p class="disclaimer-text thin-font">Your information is safe with us.</p>
        <img alt="" class="disclaimer-icon" src="@/assets/disclaimer.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useStepperStore } from "@/store/stepper.store";
import { mapActions } from "pinia/dist/pinia";
import router from "@/router";

export default {
  name: "EmailForm",
  data: () => ({
    value: "",
    isValidEmail: false,
    hasError: false,
  }),
  computed: {
    ...mapState(useStepperStore, ["lead"]),
  },
  mounted() {
    this.value = this.lead.email;
  },
  methods: {
    ...mapActions(useStepperStore, ["setLead"]),
    onChange() {
      this.hasError = false;
    },
    onSubmit(e) {
      e.preventDefault();
      this.value = this.value.trim();

      //Added email validation by regex
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value)) {
        this.isValidEmail = false;
        this.hasError = true;
        return;
      }

      if (!this.value.length) {
        this.isValidEmail = false;
        this.hasError = true;
        return;
      }

      this.setLead({ email: this.value });
      this.zipList = [];
      this.hasError = false;
      this.isValidEmail = true;
      router.push("/name-form");
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 20px 0;
}

.movers-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  width: 270px;
  height: 40px;
  border: 1px solid rgb(194,193,193,0.2);
  border-radius: 3px;
}

.email-form {
  background-color: #414c5e;
}

.text {
  color: grey;
  font-size: 14px;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
}

.check-mark-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.form {
  padding: 25px 5px 5px 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.title {
  color: #000;
  margin-bottom: 30px;
  font-weight: 300;
}

.subtitle {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.input {
  background-color: white;
  width: 301px;
  border-radius: 3px;
  font-size: 18px;
  height: 63px;
  margin-bottom: 20px;
  text-align: center;
  border: none;
  padding: 10px 5px;
}



.btn {
  color: white;
  width: 160px;
  font-size: 18px;
  font-weight: bold;
  height: 65px;
  border-radius: 3px;
  border: none;
  background-color: #ff9e01;
  padding: 10px 5px;
  cursor: pointer;
}

.disclaimer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(226, 159, 51, 0.3);
  padding-bottom: 5px;
}

.lock-icon {
  width: 12px;
}

.disclaimer-icon {
  width: 60px;
  height: 32px;
}

.disclaimer-text {
  margin-left: 10px;
  margin-right: 15px;
  font-size: 10px;
}

.text-wrapp {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
}

.emails-title {
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 1rem;
}

.mark-icon {
  width: 15px;
  height: 15px;
  margin-left: 10px;
  align-self: center;
}
</style>
