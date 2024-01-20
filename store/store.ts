import { BaseFormStep1, BaseFormStep2, BaseFormStep3, BaseFormStep4 } from "#components"

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
  inputs: {},
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
})
