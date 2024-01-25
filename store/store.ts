import { BaseFormStep1, BaseFormStep2, BaseFormStep3, BaseFormStep4 } from "#components"

import iconArcade from "@/assets/images/icon-arcade.svg"
import iconAdvanced from "@/assets/images/icon-advanced.svg"
import iconPro from "@/assets/images/icon-pro.svg"

export interface StepSubscription {
  name: string
  icon: string
  isSelected: boolean
  priceMonthly: number
  priceYearly: number
}

interface StepSwitch {
  isYearly: boolean
}
export interface StepAddOn {
  name: string
  description: string
  priceMonthly: number
  priceYearly: number
  isChecked: boolean
}

interface Step1 {
  inputs: {
    fullName: string
    emailAddress: string
    phoneNumber: string
  }
}

interface Step2 {
  subscriptions: {
    [key: string]: StepSubscription // Add index signature
  }
}

interface Step3 {
  addOns: {
    [key: string]: StepAddOn // Add index signature
  }
}
interface Step4 {
  summary: {
    selectedSubscription: StepSubscription | null
    selectedAddOns: {
      [key: string]: StepAddOn | null
    }
  }
}

interface BaseFormStepData {
  lastStepNumber: Ref<number>
  currentStep: Ref<number>
  switch: StepSwitch
  functions: {
    nextStep: () => void
    previousStep: () => void
  }

  step1: Step1
  step2: Step2
  step3: Step3
  step4: Step4
}

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

export const baseFormStepData = reactive<BaseFormStepData>({
  lastStepNumber: ref(Object.keys(baseFormStepComponents).length),
  currentStep: ref(1),
  switch: {
    isYearly: false,
  },
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
    subscriptions: {
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
  },
  step3: {
    addOns: {
      onlineService: {
        name: "Online service",
        description: "Access to multiplayer games.",
        priceMonthly: 1,
        priceYearly: 12,
        isChecked: false,
      },
      largerStorage: {
        name: "Larger storage",
        description: "Extra 1TB of cloud save.",
        priceMonthly: 2,
        priceYearly: 24,
        isChecked: false,
      },
      CustomizableProfile: {
        name: "Customizable Profile",
        description: "Custom theme on your profile.",
        priceMonthly: 2,
        priceYearly: 24,
        isChecked: false,
      },
    },
  },
  step4: {
    summary: {
      selectedSubscription: null,
      selectedAddOns: {},
    },
  },
})
