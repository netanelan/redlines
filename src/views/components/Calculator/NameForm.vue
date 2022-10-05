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
    <div class="name-form">
      <form class="form">
        <h3 v-if="!hasError" class="subtitle">What Is Your Name?</h3>
        <div v-else class="text-wrapp">
          <h2 class="name-title">Valid Input Required</h2>
          <img alt="" class="mark-icon" src="@/assets/close.png" />
        </div>
        <div class="form-wrapper">
          <input
            v-model="firstNameValue"
            class="input"
            placeholder="First Name"
            @change="onChange"
            @keydown.enter="onSubmit"
          />
          <input
            v-model="lastNameValue"
            class="input"
            placeholder="Last Name"
            @change="onChange"
            @keydown.enter="onSubmit"
          />
        </div>
        <button class="btn" type="submit" @click.prevent="onSubmit">
          Submit
        </button>
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
  name: "FormName",
  data: () => ({
    firstNameValue: "",
    lastNameValue: "",
    hasError: false,
  }),
  mounted() {
    this.firstNameValue = this.lead.first_name;
    this.lastNameValue = this.lead.last_name;
  },
  computed: {
    ...mapState(useStepperStore, ["lead"]),
  },
  methods: {
    ...mapActions(useStepperStore, ["setLead"]),
    onChange() {
      this.hasError = false;
    },
    onSubmit() {
      if (!this.firstNameValue.length || !this.lastNameValue.length) {
        this.hasError = true;
        return;
      }

      this.firstNameValue = this.firstNameValue.toString().trim();
      this.lastNameValue = this.lastNameValue.toString().trim();

      this.setLead({
        first_name: this.firstNameValue,
        last_name: this.lastNameValue,
      });
      this.hasError = false;
      router.push("/phone-number-form");
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

.form-wrapper {
  display: flex;
  justify-content: space-between;
  width: 350px;
}

.name-form {
  background-color: #414c5e;
  min-height: 100%;
}

.form {
  padding: 20px 5px 5px 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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

.title {
  color: #000;
  margin-bottom: 30px;
  font-weight: 300;
}

.subtitle {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.input {
  background-color: white;
  border-radius: 3px;
  font-size: 18px;
  height: 68px;
  width: 167px;
  margin-bottom: 20px;
  text-align: center;
  border: none;
  padding: 10px 5px;
  font-size: 18px;
}




.btn {
  color: white;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 800;
  height: 65px;
  width: 160px;
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
  margin-left: 5px;
  margin-right: 15px;
  font-size: 10px;
}

.text-wrapp {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
}

.name-title {
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
