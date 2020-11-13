import * as Yup from "yup";

export default Yup.object().shape({
  first_name: Yup.string()
    .min(3,"First name must be 3 characters long!")
    .required("First name is required!"),
  last_name: Yup.string()
    .min(3,"Last name must be 3 characters long!")
    .required("Last name is required!"),
  size: Yup.string()
    .min(2, "Select a Size!")
    .required("Size is Required!"),
  pepperoni: Yup.bool(),
  spinach: Yup.bool(),
  sausage: Yup.bool(),
  mushroom: Yup.bool(),
})