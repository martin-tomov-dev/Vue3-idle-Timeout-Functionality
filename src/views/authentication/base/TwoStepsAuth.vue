<template>
  <!--begin::Form-->
  <Form
    class="form w-100 mb-10"
    @submit="onSubmit2fa"
    :validation-schema="code"
  >
    <!--begin::Icon-->
    <div class="text-center mb-10">
      <img
        alt="Logo"
        class="mh-125px"
        src="media/svg/misc/smartphone-dark.svg"
      />
    </div>
    <!--end::Icon-->

    <!--begin::Heading-->
    <div class="text-center mb-10">
      <!--begin::Title-->
      <h1 class="text-dark mb-3">Two Step Verification</h1>
      <!--end::Title-->

      <!--begin::Sub-title-->
      <div class="text-muted fw-bold fs-5 mb-5">
        Enter the verification code sent to
      </div>
      <!--end::Sub-title-->

      <!--begin::Mobile no-->
      <div class="fw-bolder text-dark fs-3">******7859</div>
      <!--end::Mobile no-->
    </div>
    <!--end::Heading-->

    <!--begin::Section-->
    <div class="mb-10 px-md-10">
      <!--begin::Label-->
      <div class="fw-bolder text-start text-dark fs-6 mb-1">
        Type your 6 digit security code
      </div>
      <!--end::Label-->

      <!--begin::Input group-->
      <div class="d-flex flex-wrap justify-content-between">
        <Field
          class="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover me-2 my-2"
          type="text"
          name="1"
          maxlength="1"
          autocomplete="off"
        />
        <Field
          class="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover me-2 my-2"
          type="text"
          name="2"
          maxlength="1"
          autocomplete="off"
        />
        <Field
          class="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover me-2 my-2"
          type="text"
          name="3"
          maxlength="1"
          autocomplete="off"
        />
        <Field
          class="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover me-2 my-2"
          type="text"
          name="4"
          maxlength="1"
          autocomplete="off"
        />
        <Field
          class="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover me-2 my-2"
          type="text"
          name="5"
          maxlength="1"
          autocomplete="off"
        />
        <Field
          class="form-control form-control-solid h-60px w-60px fs-2qx text-center border-primary border-hover me-2 my-2"
          type="text"
          name="6"
          maxlength="1"
          autocomplete="off"
        />
      </div>
      <div class="fv-plugins-message-container">
        <div class="fv-help-block">
          <ErrorMessage name="1" />
        </div>
      </div>
      <!--end::Input group-->
    </div>
    <!--end::Section-->

    <!--begin::Submit-->
    <div class="d-flex flex-center">
      <button
        type="submit"
        id="ms_singin_two_steps_submit"
        ref="submitButton"
        class="btn btn-lg btn-primary fw-bolder"
      >
        <span class="indicator-label"> Submit </span>
        <span class="indicator-progress">
          Sending code...
          <span
            class="spinner-border spinner-border-sm align-middle ms-2"
          ></span>
        </span>
      </button>
    </div>
    <!--end::Submit-->
  </Form>
  <!--end::Form-->

  <!--begin::Notice-->
  <div class="text-center fw-bold fs-5">
    <span class="text-muted me-1">Didn't get the code?</span>

    <a href="#" class="link-primary fw-bolder fs-5 me-1">Resend</a>

    <span class="text-muted me-1">or</span>

    <a href="#" class="link-primary fw-bolder fs-5">Call Us</a>
  </div>
  <!--end::Notice-->
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
  name: 'ms-2fa',
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
    const code = Yup.object().shape({
      1: Yup.number()
        .min(0)
        .max(9)
        .required('Please enter your six digit code'),
      2: Yup.number().min(0).max(9).required(),
      3: Yup.number().min(0).max(9).required(),
      4: Yup.number().min(0).max(9).required(),
      5: Yup.number().min(0).max(9).required(),
      6: Yup.number().min(0).max(9).required(),
    });

    //Form submit function
    const onSubmit2fa = (values) => {
      // //Disable button so it only can be pressed one time per login attempt
      // /* eslint-disable  @typescript-eslint/no-non-null-assertion */
      // submitButton.value!.disabled = true;
      //Combine all values into one string
      const mfaCode = Object.values(values).join('');
      console.log(mfaCode);

      // Activate button spinner
      if (submitButton.value) {
        submitButton.value.setAttribute('data-ms-indicator', 'on');
      }

      // Send 2fa confirmation
      store
        .dispatch(Actions.CONFIRM_SIGNIN, mfaCode)
        .then(() => {
          router.push({
            name: 'dashboard',
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
      onSubmit2fa,
      code,
      submitButton,
    };
  },
});
</script>
