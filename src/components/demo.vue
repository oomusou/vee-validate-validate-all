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
const onSubmit = function() {
  const hasError = this.errors.items.length;
  const showFirstErrorMessage = () => alert(this.errors.items[0].msg);
  const name = this.errors.items[0].field;
  const setFocusOnErrorComponent = () => this.$root.$el.querySelector(`[name=${name}]`).focus();

  if (hasError) {
    showFirstErrorMessage();
    setFocusOnErrorComponent();
    return;
  }

  alert('no error');
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
