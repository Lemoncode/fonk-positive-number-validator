# fonk-positive-number-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-positive-number-validator/master?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-positive-number-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-positive-number-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-positive-number-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-positive-number-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-positive-number-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

- Validate if a field of a form is a positive number

How to add it to an existing form validation schema:

We have the following form model:

```
const myFormValues = {
  product : 'shoes',
  price: 20,
}
```

We can add a positiveNumber validation to the myFormValues

```javascript
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

const validationSchema = {
  price: [positiveNumber.validator],
};
```

We can specify if the validator allows zero (true by default):

```javascript
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

const validationSchema = {
  price: [
    {
      validator: positiveNumber.validator,
      customArgs: { allowZero: true },
    },
  ],
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

positiveNumber.setErrorMessage('El campo debe de ser un número positivo');
```

- Locally just override the error message for this validationSchema:

```javascript
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

const validationSchema = {
  price: [
    {
      validator: positiveNumber.validator,
      message: 'Error message only updated for the validation schema',
    },
  ],
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
