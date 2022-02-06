import * as yup from "yup";

export const schema = yup.object().shape({
  nombre: yup.string().required("Campo nombre es obligatorio"),
  apellido: yup.string().required("Campo apellido es obligatorio"),
});
