export const SURVEY_QUESTIONS = [
  { id: "q_lifestyle_sleep", type: "slider", required: true },
  { id: "q_value_marriage", type: "select", required: true },
  { id: "q_hobbies", type: "multiselect", required: true },
  { id: "q_communication", type: "slider", required: true },
  { id: "q_finance", type: "select", required: true }
] as const;
