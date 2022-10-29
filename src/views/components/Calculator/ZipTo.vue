<template>
  <div class="wrapper">
    <div class="info-block">
      <div class="text-wrapp">
        <img class="icon-home" src="@/assets/home-icon.svg" />
        <div class="text thin-font">
          Size: <span>{{ lead.move_size.name }}</span>
        </div>
      </div>
      <div class="text-wrapp">
        <img class="icon-calendar" src="@/assets/calendar.svg" />
        <div class="text thin-font">
          Date: <span>{{ moveDate }}</span>
        </div>
      </div>
    </div>
    <div class="location-wrapp">
      <div class="text-wrapp">
        <img class="location-icon" src="@/assets/location.svg" alt="" />
        <span class="text-from thin-font">From :</span>
        <span class="thin-font location-text">{{ lead.from_city }}, {{ lead.from_state }}</span>
      </div>
    </div>
    <div class="zip-form">
      <form class="form">
        <h2 v-if="!isZipValid && !hasError" class="zip-title">
          Where Are You Moving To ?
        </h2>
        <div v-if="isZipValid && !hasError" class="text-wrapp">
          <h2 class="zip-title">To: {{ lead.to_city }}, {{ lead.to_state }}</h2>
          <img alt="" class="mark-icon" src="@/assets/check-mark.svg" />
        </div>
        <div v-if="!isZipValid && hasError" class="text-wrapp">
          <h2 class="zip-title">Valid Zip Required</h2>
          <img alt="" class="mark-icon" src="@/assets/cancel.svg" />
        </div>
        <div class="form_last_rows_position">
          <div class="form-wrapper">
            <input
              v-model="value"
              class="input"
              placeholder="Type ZIP/City"
              type="text"
              @keydown.enter="onSubmit"
              @input.prevent="onChange"
            />
            <button class="btn" type="submit" @click.prevent="onSubmit">
              Calculate
            </button>
            <div v-if="zipList.length > 0" class="grid">
              <ul class="auto-suggestion-ul">
                <li
                  v-for="zip in zipList"
                  :key="zip.zipcode"
                  class="auto-suggestion-li"
                  @click.prevent="selectZip(zip)"
                >
                  <a>{{ zip?.city }}, {{ zip?.state }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="disclaimer">
            <img alt="" class="disclaimer-icon" src="@/assets/disclaimer.jpg" />
            <img
              alt=""
              class="disclaimer-lock-icon"
              src="@/assets/lock-disclaimer.jpg"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="js">
import {useStepperStore} from "@/store/stepper.store";
import {mapState, mapActions} from "pinia";
import {useFetch} from "@/hooks/useFetch";
import {cleanNumber} from "@/Function/helper";
import {unref} from "vue";
import router from "@/router";

export default {
  name: "ZipTo",
  data: () => ({
    value: "",
    zipList: [],
    isZipValid: false,
    hasError: false
  }),
  computed: {
    ...mapState(useStepperStore, ["lead", "moveDate"])
  },
  async mounted() {
    this.value = this.lead.to_zip;
  },
  methods: {
    ...mapActions(useStepperStore, ["setLead"]),
    onSubmit() {
      this.value = this.value.toString().trim();

      if (!this.value.length) {
        this.hasError = true;
        this.isZipValid = false;
        return;
      } else if (this.value.length !== 5) {
        this.hasError = true;
        this.isZipValid = false;
        return;
      } else if (cleanNumber(this.value).toString().length !== 5) {
        this.hasError = true;
        this.isZipValid = false;
        return;
      }

      useFetch('/api/zipCode', {
        zipcode: this.value.toString()
      }, {
        method: 'POST'
      }).then(({data}) => {
        if (!unref(data)) {
          this.hasError = true;
          this.isZipValid = false;
        } else {
          const zip = unref(data);
          this.setLead({to_zip: zip?.zipcode, to_state: zip?.state, to_city: zip?.city});
          this.hasError = false;
          this.isZipValid = true;
        }
      });

      console.log(this.lead);

      router.push("/calculating-progress-bar");
    },
    onChange(e) {
      if (e.target.value.toString().length === 0) {
        this.zipList = [];
      }
      if (e.target.value.toString().length >= 3) {
        useFetch('/api/getZipList', {
          zipcode: e.target.value.toString()
        }, {
          method: 'POST'
        }).then(({data}) => {
          if (unref(data)) {
            this.zipList = data
          }
        });
      }
    },
    selectZip(zip) {
      if (zip.zipcode.toString().length === 4) {
        this.value = '0' + zip.zipcode;
      } else if (zip.zipcode.toString().length === 3) {
        this.value = '00' + zip.zipcode;
      } else {
        this.value = zip.zipcode;
      }
      this.setLead({to_zip: zip.zipcode, to_state: zip.state, to_city: zip.city});
      this.zipList = [];
      this.hasError = false;
      this.isZipValid = true;
    },
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  padding-top: 20px;
}
.text-from{
  color: #808080;
  font-size: 13px;
  margin-right: 3px;
}
.form-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:15px;
  margin-bottom: 15px;
}
.form-wrapper >*{
  width: 100%;
}

.grid {
  position: absolute;
  display: grid;
  width: 100%;
  background-color: #ffffff;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-top: 0.4rem;
  border-radius: 0.2rem;
  z-index: 999;
  top:100%;
}

.auto-suggestion-ul {
  grid-column: span 1;
  background-color: #ffffff;
  list-style: none;
  max-height: 13rem;
  position: relative;
  border-radius: 0.2rem;
  margin-top: 0.1rem;
  overflow: scroll;
}

.auto-suggestion-li {
  font-size: 1rem;
  color: #414c5e;
  text-decoration: none;
  text-align: center;
  position: relative;
  font-weight: 700;
  padding: 0.6rem;
}

.auto-suggestion-li:nth-child(odd) {
  background-color: #e9e8e8;
}

.auto-suggestion-li a {
  margin-left: 0.8rem;
  margin-top: 1rem;
}

.location-wrapp {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  margin-bottom: 30px;
  height: 40px;
}

.location-text{
  font-size:13px;
}

.info-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:7px;
  margin-bottom: 20px;
}

.text-wrapp {
  display: flex;
  align-items: center;
  justify-content: center;
}

.zip-form {
  min-height: 100%;
}

.form {
  background-color: #414c5e;
  padding: 10px 10px 20px;
  min-height: 217px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap:10px;
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

.mark-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  align-self: center;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: 5px;
  align-self: center;
}

.zip-title {
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.text {
  width: 140px;
  color: #808080;
  text-align: left;
  font-size: 13px;
}



span {
  color: #b4b4b4;
}

.input {
  background-color: white;
  max-width: 250px;
  height: 63px;
  border-radius: 3px;
  text-align: center;
  font-size: 22px;
  border: none;
  padding: 10px 5px;
}

.btn {
  color: white;
  max-width: 250px;
  height: 65px;
  font-size: 19px;
  border-radius: 3px;
  border: none;
  background-color: #ff9e01;
  padding: 10px 5px;
  cursor: pointer;
}

.disclaimer {
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
}

.disclaimer-lock-icon {
  width: 25px;
  height: 30px;
}

.disclaimer-icon {
  width: 60px;
  height: 30px;
}
</style>
