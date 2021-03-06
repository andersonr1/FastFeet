import { setLocale } from 'yup';

export default setLocale({
  mixed: {
    required: 'Esse campo é obrigatório !',
  },
  string: {
    min: ({ min }) => `Esse campo precisa ter no minimo ${min} caracteres !`,
    max: ({ max }) => `Maximo ${max} caracteres !`,
    email: 'Envie um email valido !',
  },
});
