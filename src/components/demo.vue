<template>
  <div>
    <div>
      <input v-model="customEmail"
             v-validate="'required|custom-email'"
             name="customEmailAddress"
             type="text">
    </div>
    <div>
      <span>{{ errors.first('customEmailAddress') }}</span>
    </div>
    <div>
      <button @click="onSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
import validator from '../validators/email';

validator();

/** data */
const data = function() {
  return {
    email: '',
    customEmail: '',
  };
};

/** methods */
/** 產生 showError()，目的在僅執行一次，所以使用 closure 包住 count */
const createShowError = function() {
  let count = 0;

  return () => {
    count++;
    if (count <= 1) {
      alert(this.errors.items[0].msg);
      const name = this.errors.items[0].field;
      this.$root.$el.querySelector(`[name=${name}]`).focus();
    }
  };
};

/** 執行所有 component 的 validate() */
const validateAll = (component, showFunc) => {
  if (Object.prototype.hasOwnProperty.call(component, '$validator'))
    component.$validator.validate().then(result => result || showFunc());

  component.$children.forEach(component => validateAll(component, showFunc));
};

/** Submit Handler */
const onSubmit = function() {
  const showError = createShowError.call(this);
  validateAll(this.$root, showError);
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
