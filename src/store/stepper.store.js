import { defineStore } from "pinia";
import { formatDate } from "@/Function/helper";

export const useStepperStore = defineStore("stepper", {
  state: () => ({
    country: "us",
    countryCode: "+1",
    isStaging: false,
    phoneValidationError: "",
    verificationType: "sms",
    isMounted: false,
    afterHour: false,
    currentStep: "zip-from",
    zipFrom: "",
    size: null,
    date: null,
    zipTo: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    provideQuotesInMorning: false,
    lead: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      from_zip: "",
      from_state: "",
      from_city: "",
      to_zip: "",
      to_state: "",
      to_city: "",
      move_size: {
        name: "",
        value: "",
      },
      move_date: new Date(),
    },
  }),
  actions: {
    setLead(lead) {
      this.lead = { ...this.lead, ...lead };
    },
    setMounted() {
      this.isMount = true;
    },
    setAfterHour(hour) {
      this.afterHour = hour;
    },
    setPhoneValidationError(error) {
      this.phoneValidationError = error;
    },
    setCountry(country) {
      this.country = country;
    },
    setCountryCode(code) {
      this.countryCode = code;
    },
    setStaging(stag) {
      this.isStaging = stag;
    },
    setVerificationType(type) {
      this.verificationType = type;
    },
  },
  getters: {
    moveDate: (state) => {
      return formatDate(new Date(state.lead.move_date), "USAFormatStringShort");
    },
  },
});
