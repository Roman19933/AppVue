// import { required,  } from "vee-validate/dist/rules";
// import { extend } from "vee-validate";
// extend('required', {
//     ...required,
//     message: 'This field is required'
//   });
// import { extend } from 'vee-validate';
// import * as rules from 'vee-validate/dist/rules';

// Object.keys(rules).forEach(rule => {
//   extend(rule, rules[rule]);
// });

// // with typescript
// for (let [rule, validation] of Object.entries(rules)) {
//   extend(rule, {
//     ...validation
//   });
// }
import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});