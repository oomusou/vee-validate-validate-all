<template>
  <div>
    <div>
      <input v-model="customEmail1"
             v-validate="'required|custom-email'"
             name="customEmailAddress1"
             type="text">
    </div>
    <div>
      <input v-model="customEmail2"
             v-validate="'required|custom-email'"
             name="customEmailAddress2"
             type="text">
    </div>
    <div>
      {{ errors.first('customEmailAddress1') }}
    </div>
    <div>
      {{ errors.first('customEmailAddress2') }}
    </div>
    <div>
      <button @click="onSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
import validator from '../validators/email';

/** VeeValidate */
validator();

/** ---------------------------------------------------------------------------
 | data
 *----------------------------------------------------------------------------*/
const data = function() {
  return {
    customEmail1: '',
    customEmail2: '',
  };
};

/** 產生 showError()，目的在僅執行一次，所以使用 closure 包住 count */
const showError = function() {
  if (showError.once) return;

  alert(this.errors.items[0].msg);
  const name = this.errors.items[0].field;
  this.$root.$el.querySelector(`[name=${name}]`).focus();

  showError.once = true;
};

/** 執行所有 component 的 validate() */
const validateAll = (component, showFunc) => {
  const validator = component.$validator;
  validator && validator.validate().then(result => result || showFunc());
  component.$children.forEach(component => validateAll(component, showFunc));
};

/** ---------------------------------------------------------------------------
 | methods
 *----------------------------------------------------------------------------*/
/** Submit Handler */
const onSubmit = function() {
  validateAll(this.$root, showError.bind(this));
};

const methods = {
  onSubmit,
};

export default {
  name: 'demo',
  data,
  methods,
};
</script>
