import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import { config } from './config/config';
import { required, email } from './config/dictionary';
import { emailAddress, customEmailAddress } from './config/attribute';
import customEmailRule from './rules/custom-email';

const dictionary = {
  zh_TW: {
    messages: {
      required,
      email,
    },
    attributes: {
      emailAddress,
      customEmailAddress,
    },
  },
};

export default () => {
  Vue.use(VeeValidate, config);
  Validator.localize('zh_TW', zhTW);
  Validator.localize(dictionary);
  Validator.extend('custom-email', customEmailRule);
};
