import { createWebHistory, createRouter } from "vue-router";
import ZipFrom from "@/views/components/Calculator/ZipFrom.vue";
import ZipTo from "@/views/components/Calculator/ZipTo.vue";
import SizeSelector from "@/views/components/Calculator/SizeSelector.vue";
import DateSelector from "@/views/components/Calculator/DateSelector.vue";
import CalculatingProgressBar from "@/views/components/Calculator/CalculatingProgressBar.vue";
import EmailForm from "@/views/components/Calculator/EmailForm.vue";
import NameForm from "@/views/components/Calculator/NameForm.vue";
import PhoneNumberForm from "@/views/components/Calculator/PhoneNumberForm.vue";
import PhoneNumberEditValidate from "@/views/components/Calculator/EditOrValidatePhone.vue";
import EnterTwoDigitNumber from "@/views/components/Calculator/EnterTwoDigitNumber.vue";
import MoversOfflineWarning from "@/views/components/Calculator/MoversOfflineWarning.vue";
import RequestSubmitted from "@/views/components/Calculator/RequestSubmitted.vue";

const routes = [
  {
    path: "/",
    name: "ZipFrom",
    component:  ZipFrom,
  },
  {
    path: "/size-selector",
    name: "SizeSelector",
    component: SizeSelector,
  },
  {
    path: "/date-selector",
    name: "DateSelector",
    component: DateSelector,
  },
  {
    path: "/zip-to",
    name: "ZipTo",
    component: ZipTo,
  },
  {
    path: "/calculating-progress-bar",
    name: "CalculatingProgressBar",
    component: CalculatingProgressBar,
  },
  {
    path: "/email-form",
    name: "EmailForm",
    component: EmailForm,
  },
  {
    path: "/name-form",
    name: "NameForm",
    component: NameForm,
  },
  {
    path: "/phone-number-form",
    name: "PhoneNumberForm",
    component: PhoneNumberForm,
  },
  {
    path: "/phone-number-edit-validate",
    name: "PhoneNumberEditValidate",
    component: PhoneNumberEditValidate,
  },
  {
    path: "/enter-two-digit-number",
    name: "EnterTwoDigitNumber",
    component: EnterTwoDigitNumber,
  },
  {
    path: "/movers-offline-warning",
    name: "MoversOfflineWarning",
    component: MoversOfflineWarning,
  },
  {
    path: "/request-submitted",
    name: "RequestSubmitted",
    component: RequestSubmitted,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  const toDepth = to.path.length;
  const fromDepth = from.path.length;
  to.meta.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
});

export default router;
