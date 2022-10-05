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
    <span v-if="isLoading" class="loader"></span>
    <h3
      v-if="phoneValidationError && phoneValidationError.length !== ''"
      class="subtitle"
      style="color: darkred; font-size: 0.9rem"
    >
      {{ phoneValidationError }}
    </h3>
    <h4 v-else class="valid-h4">Your text was sent to:</h4>
    <h2 class="title">{{ lead.phone }}</h2>
    <div class="email-form">
      <form class="form">
        <h3 v-if="!hasError" class="subtitle">Enter 4-digit Number</h3>
        <div v-else class="text-wrapp">
          <h2 class="emails-title">Please enter four digit number</h2>
          <img alt="" class="mark-icon" src="@/assets/close.png" />
        </div>
        <input
          v-model="value"
          v-mask="['####']"
          class="input"
          maxlength="4"
          placeholder="XXXX"
          @keydown.enter.prevent="onSubmit"
          @input.prevent="onChange"
        />
        <button class="btn" type="submit" @click.prevent="onSubmit">
          SUBMIT
        </button>
        <a v-if="resend" class="resend-code" @click.prevent="onResend"
          >RESEND CODE</a
        >
        <a v-if="!resend" class="resend-code disabled">{{ resendCount }}</a>
        <ul class="note-list">
          <li class="number-info">
            After validating your number, your quote will<br />be ready and we
            will match you with movers.
          </li>
          <li class="number-email">
            You will receive an email for your reference.
          </li>
        </ul>
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
import { ref } from "vue";

export default {
  name: "EnterTwoDigitNumber",
  data: () => ({
    value: "",
    hasError: false,
    isLoading: false,
    resend: true,
    interval: null,
    resendCount: 0,
    disabled: 0,
  }),
  computed: {
    ...mapState(useStepperStore, [
      "lead",
      "afterHour",
      "phoneValidationError",
      "countryCode",
      "verificationType",
    ]),
  },
  mounted() {
    this.value = "";
  },
  methods: {
    ...mapActions(useStepperStore, ["setLead", "setPhoneValidationError"]),
    onChange() {
      this.hasError = false;
      this.setPhoneValidationError("");
    },
    onResend() {
      useFetch(
        "/api/requestPhoneVerification",
        {
          phone_number: cleanNumber(this.lead.phone + ""),
          type: this.verificationType,
          country_code: this.countryCode,
        },
        {
          method: "POST",
        }
      ).then(({ data, errorMessage, hasError }) => {
        if (hasError) {
          this.setPhoneValidationError(errorMessage);
        }
      });
      const timer = () => {
        this.resend = false;
        this.resendCount = this.resendCount + 1;
        if (this.resendCount === 59) {
          clearInterval(this.interval);
          this.resend = true;
        }
      };
      this.interval = setInterval(timer, 1000);
    },
    onSubmit() {
      this.hasError = false;
      this.isLoading = true;
      if (cleanNumber(this.value + "").toString().length > 6) {
        this.hasError = true;
        return;
      }
      this.value = this.value.toString();

      useFetch(
        "/api/verifyTwilioNumber",
        {
          phone_number: cleanNumber(this.lead.phone + ""),
          code: this.value,
          country_code: this.countryCode,
        },
        {
          method: "POST",
        }
      ).then(({ data, hasError, errorMessage }) => {
        if (data === "approved" && this.afterHour) {
          this.hasError = false;
          this.isLoading = false;
          router.push("/request-submitted");
        } else if (data === "approved" && !this.afterHour) {
          this.hasError = false;
          this.isLoading = false;
          router.push("/movers-offline-warning");
        } else if (hasError) {
          this.setPhoneValidationError(errorMessage);
          this.isLoading = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.disabled {
  pointer-events: none;
  color: white !important;
  text-decoration: none !important;
}

.note-list {
  margin: 20px 0 0;
  padding: 0 60px;
}

.note-list li.number-info {
  background: url("@/assets/number-info.svg") left top/16px no-repeat;
}

.note-list li.number-email {
  background: url("@/assets/number-email.svg") left top/16px no-repeat;
}

.note-list li {
  list-style: none;
  font-weight: 300;
  font-size: 10px;
  color: #cec2c6;
  padding: 0 0 10px 27px;
  line-height: 16px;
}

.resend-code {
  text-decoration-line: underline;
  font-weight: bold;
  color: #ff9e01;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.valid-h4 {
  color: #414c5e;
  font-size: 1rem;
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
  height: 327px;
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

.loader {
  width: 48px;
  height: 48px;
  border: 3px dotted #fff;
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}

.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px dotted #ff3d00;
  border-style: solid solid dotted;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  animation: rotationBack 1s linear infinite;
  transform-origin: center center;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
