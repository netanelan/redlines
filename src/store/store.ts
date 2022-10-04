import { defineStore } from "pinia";
import truck from "@/assets/truck-min.svg";

export default defineStore("store", {
  state: () => ({
    style: {
      primaryColor: "#FF9E01",
      bgColor: "#EBE3E3",
      truck: truck,
      truckStyle: {},
    },
  }),
});
