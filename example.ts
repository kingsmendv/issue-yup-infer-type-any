import * as yup from 'yup';
const NestedSchema = yup.object().shape({
  nested: yup.string()
});
export const TestSchema = yup.object().shape({
  working: yup.string(),
  broken: NestedSchema
});
export type Test = yup.InferType<typeof TestSchema>;
