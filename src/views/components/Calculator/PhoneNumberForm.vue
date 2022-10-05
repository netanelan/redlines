<template>
  <div class="wrapper">
    <div class="movers-wrapper">
      <img
        alt=""
        class="check-mark-icon"
        src="@/assets/check-mark-filled-dark.svg"
      />
      <span class="text textMovers thin-font">Movers Found</span>
      <img alt="" class="icon" src="@/assets/more-than-sign-light.svg" />
      <span class="text">View Quote</span>
    </div>

    <div class="phone-number-form">
      <form class="form">
        <h2 v-if="!hasError" class="title">
          What Is The Best Number<br />To Reach You?
        </h2>
        <div v-if="hasError" class="text-wrapp">
          <h2 class="zip-title">Please enter valid number</h2>
          <img alt="" class="mark-icon" src="@/assets/cancel.svg" />
        </div>
        <input
          v-model="value"
          v-mask="['(###) ###-####']"
          class="input"
          maxlength="17"
          placeholder="Enter Phone Number"
          type="tel"
          @keydown.enter="onSubmit"
          @input.prevent="onChange"
        />
        <button class="btn" type="submit" @click.prevent="onSubmit">
          Get My Quotes Now
        </button>
      </form>
      <div class="disclaimer">
        <img alt="" class="lock-icon" src="@/assets/lock.svg" />
        <p class="disclaimer-text">Your information is safe with us.</p>
        <img alt="" class="disclaimer-icon" src="@/assets/disclaimer.jpg" />
      </div>
      <div class="privacy-policy thin-font">
        By clicking on the "GET MY QUOTES" button, I agree to the Terms of Use,
        Privacy Policy and Disclaimer.
        <br />My "click" provides espress written consent to be contacted
        directly by companies to quote my move or offer other products or
        services via emails, text messages, or calls/prerecorded messages via
        automatic dialing systems even if I am on a DNC list. Consent is not a
        condition of purchasing any product or service.
      </div>
    </div>
  </div>
</template>

<script>
import { useStepperStore } from "@/store/stepper.store";
import { mapState } from "pinia";
import { cleanNumber } from "@/Function/helper";
import { mapActions } from "pinia/dist/pinia";
import router from "@/router";
import { reactive, ref } from "vue";

export default {
  name: "PhoneNumberForm",
  data: () => ({
    value: "",
    hasError: false,
    countryCode: "+1",
    showCountry: false,
  }),
  computed: {
    ...mapState(useStepperStore, ["lead", "country", "isStaging"]),
  },
  mounted() {
    this.value = this.lead.phone;
  },
  methods: {
    ...mapActions(useStepperStore, ["setLead", "setCountry", "setCountryCode"]),
    selectCountry(c) {
      if (c === "us") {
        this.setCountryCode("+1");
      } else if (c === "israel") {
        this.setCountryCode("+972");
      } else if (c === "india") {
        this.setCountryCode("+91");
      }
      this.setCountry(c);
      this.showCountry = false;
    },
    onSubmit() {
      if (cleanNumber(this.value + "").toString().length !== 10) {
        this.hasError = true;
        return;
      }

      console.log(cleanNumber(this.value + "").toString().length);

      this.value = this.value.toString().trim();

      this.setLead({ phone: this.value });
      // router.push("/phone-number-edit-validate");
      router.push("/request-submitted");
    },
    onChange() {
      this.hasError = false;
    },
  },
};
</script>

<style scoped>
.country {
  position: absolute;
  text-decoration: none;
  list-style: none;
  top: 6rem;
  left: 0.8rem;
}

.country-show {
  display: block;
  list-style: none;
}

.country-hide {
  display: none;
  list-style: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
}

.wrapper {
  background-color: #414c5e;
  min-height: 400px;
  margin: 20px 10px;
  padding: 20px;
  border: none;
  border-radius: 20px;
}

.movers-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.text {
  color: rgb(174,178,184);
  font-weight: bold;
  font-size: 0.9rem;
}

.textMovers{
  font-weight: 100;
  color:rgb(110,118,130);
}

.icon {
  width: 15px;
  margin-right: 5px;
  margin-left: 5px;
}

.check-mark-icon {
  width: 13px;
  margin-right: 3px;
  margin-bottom: 3px;
}

.form {
  position: relative;
  padding: 10px 5px 10px 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.title {
  color: white;
  margin-bottom: 15px;
  font-size: 1.2rem;
  line-height: 30px;
}

.input {
  background-color: white;
  width: 300px;
  font-size: 18px;
  height: 65px;
  text-align: center;
  border-radius: 3px;
  margin-bottom: 20px;
  border: none;
  padding: 10px 5px;
}



.btn {
  color: white;
  width: 250px;
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
  font-size: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

.privacy-policy {
  font-size: 0.6rem;
  text-align: start;
  color: rgb(113, 120, 137);
}

.text-wrapp {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mark-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  align-self: center;
}

.zip-title {
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 1rem;
}
</style>
