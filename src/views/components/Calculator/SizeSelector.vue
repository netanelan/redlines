<template>
    <div class="move-size-selector">
      <h3 class="title">Select Your Move Size</h3>
      <div class="btn-wrapper">
        <button
          :key="size.name"
          v-for="size in sizes"
          :class="size.name === lead.move_size.name ? 'selected' : ''"
          class="btn"
          @click.prevent="onSizeSelect(size)"
        >
          {{ size.name }}
        </button>
      </div>
    </div>
</template>

<script>
import { useStepperStore } from "@/store/stepper.store";
import { mapActions, mapState } from "pinia/dist/pinia";
import router from "@/router";

export default {
  name: "MoveSizeSelector",
  data: () => ({
    sizes: [
      {
        name: "Studio",
        value: "studio",
      },
      {
        name: "1 Bedroom",
        value: "1 bedroom",
      },
      {
        name: "2 Bedroom",
        value: "2 bedroom",
      },
      {
        name: "3 Bedroom",
        value: "3 bedroom",
      },
      {
        name: "4+ Bedroom",
        value: "4 bedroom",
      },
      {
        name: "Office/Commercial",
        value: "Office/Commercial",
      },
    ],
  }),
  computed: {
    ...mapState(useStepperStore, ["lead"]),
  },
  methods: {
    ...mapActions(useStepperStore, ["setLead"]),
    onSizeSelect(size) {
      this.setLead({ ...this.lead, move_size: size });
      router.push("/date-selector");
    },
  },
};
</script>

<style scoped>
.selected {
  background-color: white !important;
  color: #3a4454 !important;
}

.main {
  background: #3a4454 !important;
}

/* .spinner {
  position: fixed; Sit on top of the page content
  display: block; Hidden by default
  width: 100vw; Full width (cover the whole page)
  height: 100vh; Full height (cover the whole page)
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 3rem;
  background-color: rgba(4, 3, 3, 0.8); Black background with opacity
  cursor: progress; Add a pointer on hover
} */

/* .move-size-selector {
  position: relative;
  justify-self: center;
  display: grid;
  justify-content: center;
  flex-direction: column;
  background-color: #3b4b60;
  border-radius: 1rem;
  padding-bottom: 5rem;
  margin: 1rem;
  padding-top: 3rem;
  min-width: 20rem;
  grid-area: 1 / 1;
  z-index: 4;
} */

.move-size-selector{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b60;
  margin:16px ;
  padding-bottom: 100px;
  padding-top: 40px;
  border-radius: 20px;


}

.title {
  margin-bottom: 15px;
}

.btn {
  color: white;
  max-width: 256px;
  width: 100%;
  height: 48px;
  border-radius: 3px;
  border: none;
  background-color: #ff9e01;
  padding: 10px 10px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 19px;
}

.btn-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding:0px 10px;
}
</style>
