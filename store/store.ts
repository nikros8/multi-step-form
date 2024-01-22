import { BaseFormStep1, BaseFormStep2, BaseFormStep3, BaseFormStep4 } from "#components"

import iconArcade from "@/assets/images/icon-arcade.svg"
import iconAdvanced from "@/assets/images/icon-advanced.svg"
import iconPro from "@/assets/images/icon-pro.svg"

export const baseFormStepComponents: {
  [key: number]:
    | typeof BaseFormStep1
    | typeof BaseFormStep2
    | typeof BaseFormStep3
    | typeof BaseFormStep4
} = {
  1: BaseFormStep1,
  2: BaseFormStep2,
  3: BaseFormStep3,
  4: BaseFormStep4,
}

export const baseFormStepData = reactive({
  lastStepNumber: ref(Object.keys(baseFormStepComponents).length),
  currentStep: ref(1),
  functions: {
    nextStep() {
      baseFormStepData.currentStep < baseFormStepData.lastStepNumber
        ? baseFormStepData.currentStep++
        : null
    },
    previousStep() {
      baseFormStepData.currentStep > 1 ? baseFormStepData.currentStep-- : null
    },
  },
  step1: {
    inputs: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
    },
  },
  step2: {
    selector: {
      arcade: {
        name: "Arcade",
        icon: iconArcade,
        isSelected: false,
        priceMonthly: 9,
        priceYearly: 108,
      },
      advanced: {
        name: "Advanced",
        icon: iconAdvanced,
        isSelected: false,
        priceMonthly: 12,
        priceYearly: 144,
      },
      pro: {
        name: "Pro",
        icon: iconPro,
        isSelected: false,
        priceMonthly: 15,
        priceYearly: 180,
      },
    },
    switch: {
      isYearly: false,
    },
  },
  step3: {},
  step4: {},
})
