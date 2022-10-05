<template>
  <div class="wrapper">
    <div class="movers-wrapper">
      <img
        alt=""
        class="check-mark-icon"
        src="@/assets/check-mark-filled.svg"
      />
      <span class="text">Quote is Ready</span>
      <img alt="" class="icon" src="@/assets/more-than-sign.svg" />
      <span class="text" style="color: #c2c1c1">View Quote</span>
    </div>
    <h2 class="title">Number Confirmation</h2>
    <h4 class="valid-h4">
      Movers require us to validate your number<br />prior to processing your
      quote.
    </h4>
    <div class="email-form">
      <form class="form">
        <h3 v-if="!hasError" class="subtitle">Edit Or Confirm Number</h3>
        <div v-else class="text-wrapp">
          <h2 class="emails-title">Please enter valid number</h2>
          <img alt="" class="mark-icon" src="@/assets/close.png" />
        </div>
        <input
          v-model="value"
          v-mask="['(###) ###-####']"
          class="input"
          maxlength="17"
          placeholder="Enter Phone Number"
          type="tel"
          @input.prevent="onChange"
        />
        <button class="btn" type="submit" @click.prevent="onSubmit('sms')">
          VALIDATE BY TEXT
        </button>
        <button class="btn" type="submit" @click.prevent="onSubmit('call')">
          VALIDATE BY PHONE
        </button>
      </form>
      <div class="disclaimer">
        <img alt="" class="lock-icon" src="@/assets/lock.svg" />
        <p class="disclaimer-text">Your information is safe with us.</p>
        <img alt="" class="disclaimer-icon" src="@/assets/disclaimer.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useStepperStore } from "@/store/stepper.store";
import { mapActions } from "pinia/dist/pinia";
import { cleanNumber } from "@/Function/helper";
import router from "@/router";
import { useFetch } from "@/hooks/useFetch";
import { unref } from "vue";

export default {
  name: "EditOrValidatePhone",
  data: () => ({
    value: "",
    hasError: false,
  }),
  computed: {
    ...mapState(useStepperStore, ["lead", "countryCode"]),
  },
  mounted() {
    this.value = this.lead.phone;
  },
  methods: {
    ...mapActions(useStepperStore, [
      "setLead",
      "setPhoneValidationError",
      "setVerificationType",
    ]),
    onChange() {
      this.hasError = false;
    },
    onSubmit(type) {
      if (cleanNumber(this.value + "").toString().length !== 10) {
        this.hasError = true;
        return;
      }

      this.setVerificationType(type);

      this.value = this.value.toString().trim();

      useFetch(
        "/api/requestPhoneVerification",
        {
          phone_number: cleanNumber(this.value + ""),
          type: type,
          country_code: this.countryCode,
        },
        {
          method: "POST",
        }
      ).then(({ data, errorMessage, hasError }) => {
        if (hasError) {
          console.log(data);
          console.log(errorMessage);
          this.setPhoneValidationError(unref(errorMessage));
        }
      });

      this.setLead({ phone: this.value });
      router.push("/enter-two-digit-number");
    },
  },
};
</script>

<style scoped>
.valid-h4 {
  color: #414c5e;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
}

.wrapper {
  padding: 20px 0;
}

.movers-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  width: 300px;
  height: 40px;
  border: 1px solid #c2c1c1;
  border-radius: 3px;
}

.email-form {
  background-color: #414c5e;
  min-height: 100%;
}

.text {
  color: grey;
  font-weight: bold;
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
  padding: 10px 5px 20px 5px;
  height: 270px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.title {
  color: #000;
  margin-bottom: 29px;
}

.subtitle {
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 11px;
}

.input {
  background-color: white;
  width: 250px;
  border-radius: 3px;
  font-size: 18px;
  height: 70px;
  margin-bottom: 11px;
  text-align: center;
  border: none;
  padding: 10px 5px;
}

.btn {
  color: white;
  width: 250px;
  font-size: 18px;
  font-weight: bold;
  height: 70px;
  border-radius: 3px;
  border: none;
  background-color: #ff9e01;
  padding: 10px 5px;
  cursor: pointer;
  margin-bottom: 11px;
}

.disclaimer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(226, 159, 51, 0.577);
  padding: 0 20px 20px;
}

.lock-icon {
  width: 15px;
  height: 15px;
}

.disclaimer-icon {
  width: 80px;
  height: 40px;
}

.disclaimer-text {
  margin-left: 10px;
  margin-right: 15px;
  font-size: 0.8rem;
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
