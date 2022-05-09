<template>
  <!--begin::Form-->
  <Form
    class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
    @submit="onSubmitSignin"
    :validation-schema="signin"
  >
    <!--begin::Heading-->
    <div class="text-center mb-8">
      <!--begin::Title-->
      <h1 class="text-dark mb-3">Sign In</h1>
      <!--end::Title-->
    </div>
    <!--begin::Heading-->

    <!--begin::Input group-->
    <div class="fv-row mb-8">
      <!--begin::Label-->
      <label class="form-label fs-6 fw-bolder text-dark">Email</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        class="form-control form-control-lg form-control-solid"
        type="text"
        name="email"
        autocomplete="on"
      />
      <!--end::Input-->
      <div class="fv-plugins-message-container">
        <div class="fv-help-block">
          <ErrorMessage name="email" />
        </div>
      </div>
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Wrapper-->
      <div class="d-flex flex-stack mb-2">
        <!--begin::Label-->
        <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
        <!--end::Label-->

        <!--begin::Link-->
        <a href="#" class="link-primary fs-6 fw-bolder"> Forgot Password ? </a>
        <!--end::Link-->
      </div>
      <!--end::Wrapper-->

      <!--begin::Input-->
      <Field
        class="form-control form-control-lg form-control-solid"
        type="text"
        name="password"
        autocomplete="off"
      />
      <!--end::Input-->
      <div class="fv-plugins-message-container">
        <div class="fv-help-block">
          <ErrorMessage name="password" />
        </div>
      </div>
    </div>
    <!--end::Input group-->

    <!--begin::Actions-->
    <div class="text-center">
      <!--begin::Submit button-->
      <button
        type="submit"
        id="ms_sign_in_submit"
        ref="submitButton"
        class="btn btn-lg btn-primary w-100 mb-5"
      >
        <span class="indicator-label"> Sign In </span>
        <span class="indicator-progress">
          Please wait...
          <span
            class="spinner-border spinner-border-sm align-middle ms-2"
          ></span>
        </span>
      </button>
      <!--end::Submit button-->
    </div>
    <!--end::Actions-->
  </Form>
  <!--end::Form-->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ErrorMessage, Field, Form } from 'vee-validate';

import { Actions } from '@/store/enums/StoreEnums';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2/dist/sweetalert2.min.js';
import * as Yup from 'yup';

export default defineComponent({
  name: 'ms-signin',
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object//
    const signin = Yup.object().shape({
      email: Yup.string().email().required().label('Email'),
      password: Yup.string().min(4).required().label('Password'),
    });

    //Form submit function
    const onSubmitSignin = (values) => {
      console.log('button pressed');
      console.log(values);
      console.log('submitButton');
      console.log(submitButton);
      console.log('submitButton value');
      console.log(submitButton.value);

      //Disable button so it only can be pressed one time per login attempt
      /* eslint-disable  @typescript-eslint/no-non-null-assertion */
      submitButton.value!.disabled = true;

      // Clear existing errors
      store.dispatch(Actions.SIGNOUT);

      // Activate button spinner
      if (submitButton.value) {
        submitButton.value.setAttribute('data-ms-indicator', 'on');
      }

      // Send login request
      store
        .dispatch(Actions.SIGNIN, values)
        .then(() => {
          // Go to 2fa page after successfully singin
          router.push({
            name: 'authentication-base-two-steps-auth',
          });
        })
        .catch(() => {
          Swal.fire({
            text: store.getters.getErrors,
            icon: 'error',
            buttonsStyling: false,
            confirmButtonText: 'Try again!',
            customClass: {
              confirmButton: 'btn fw-bold btn-light-danger',
            },
          });
          //Enable button
          /* eslint-disable  @typescript-eslint/no-non-null-assertion */
          submitButton.value!.disabled = false;
        });

      //Deactivate button spinner
      submitButton.value?.removeAttribute('data-ms-indicator');
    };

    return {
      onSubmitSignin,
      signin,
      submitButton,
    };
  },
});
</script>
