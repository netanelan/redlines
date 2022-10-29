<template>
  <div class="wrapper">
    <h2 class="title">Moving Cost Calculator</h2>
    <img alt="" class="icon" src="@/assets/calculator.svg" width="50" height="32" />
    <div class="subtitle">Enter Your Zip Below</div>
    <img
      alt=""
      class="arrow-icon"
      src="@/assets/arrow-down.svg"
      height="20"
      width="20"
    />
    <div class="zip-form">
      <form class="form">
        <h2 v-if="!isZipValid && !hasError" class="zip-title">
          Enter Your ZIP (From)
        </h2>
        <div v-if="isZipValid && !hasError" class="text-wrapp">
          <h2 class="zip-title">
            From: {{ lead.from_city }}, {{ lead.from_state }}
          </h2>
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
              maxlength="5"
              placeholder="Type ZIP/City"
              type="text"
              @keydown.enter="onSubmit"
              @input.prevent="onChange"
            />
            <button class="btn" type="submit" @click.prevent="onSubmit">
              View Rates
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
            <img alt="" class="disclaimer-icon" src="@/assets/disclaimer.jpg" width="60" height="30"/>
            <img alt="" class="disclaimer-lock-icon" src="@/assets/lock-disclaimer.jpg" width="25" height="30"/>
          </div>
      </div>
      </form>
    </div>
    <div class="text thin-font">Long Distance Moving Nationwide</div>
    <ul class="list thin-font">
      <li>Licensed</li>
      <li>&#9679; Insured</li>
      <li>&#9679; Trusted</li>
    </ul>
  </div>
</template>

<script lang="js">
import {useStepperStore} from "@/store/stepper.store";
import {mapState, mapActions} from "pinia";
import {useFetch} from "@/hooks/useFetch";
import {cleanNumber} from "@/Function/helper";
import {unref} from "vue";
import router from "@/router";
import truck from "@/assets/truck-min.svg";

export default {
    name: "ZipFrom",
    data: () => ({
        truck,
        value: "",
        zipList: [],
        isZipValid: false,
        hasError: false
    }),
    computed: {
        ...mapState(useStepperStore, ["lead"])
    },
    async mounted() {
        this.value = this.lead.from_zip;
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
                    this.setLead({from_zip: zip?.zipcode, from_state: zip?.state, from_city: zip?.city});
                    this.hasError = false;
                    this.isZipValid = true;
                }
            });

            router.push("/size-selector");
            // router.push("/phone-number-edit-validate");
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
            this.setLead({from_zip: zip.zipcode, from_state: zip.state, from_city: zip.city});
            this.zipList = [];
            this.hasError = false;
            this.isZipValid = true;
        },
        truckBgImage(image){
          return `background-image: url(${image})`;
        }
    }
}
</script>

<style scoped>
.wrapper {
  padding-top: 20px;
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

.subtitle {
  text-transform: uppercase;
  color: rgba(154, 146, 146, 0.5);
  font-weight: bold;
  margin-bottom: 5px;
}

.grid {
  position: absolute;
  display: grid;
  width: 100%;
  background-color: #ebe3e3;
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

.text-wrapp {
  display: flex;
}

.icon {
  margin-bottom: 10px;
  opacity: 0.6;
}

.arrow-icon {
  margin-bottom: 8px;
}

.mark-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  align-self: center;
}

.title {
  color: black;
  font-weight: 850;
  margin-bottom: 15px;
}

.text {
  position: relative;
  color: #808080;
  margin-bottom: 2px;
  font-style: italic;
  margin-top: 5px;
}
.list{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
}

.list li {
  position: relative;
  color: #808080;
  display: inline;
  font-style: italic;
  font-size: 0.8rem;
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

.zip-title {
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 1.5rem;
}



.input {
  background-color: white;
  max-width: 250px;
  height: 65px;
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
  align-items: flex-end;
  justify-content: flex-end;
}


</style>
