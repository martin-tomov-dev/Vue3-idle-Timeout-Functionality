<template>
  <!--begin::Exolore drawer toggle-->
  <button
    id="kt_explore_toggle"
    class="explore-toggle btn btn-sm explore-btn-toggle shadow-sm position-fixed fw-bolder zindex-2 top-50 px-8 mt-10 end-0 transform-90 fs-5 rounded-top-0"
    title="Purchase"
    data-bs-toggle="tooltip"
    data-bs-placement="left"
    data-bs-dismiss="click"
    data-bs-trigger="hover"
  >
    <span id="kt_explore_toggle_label"> Purchase </span>
  </button>
  <!--end::Exolore drawer toggle-->

  <!--begin::Exolore drawer-->
  <div
    id="kt_explore"
    class="explore bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="explore"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '440px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_explore_toggle"
    data-kt-drawer-close="#kt_explore_close"
  >
    <!--begin::Card-->
    <div class="card shadow-none w-100">
      <!--begin::Header-->
      <div class="card-header" id="kt_explore_header">
        <h5 class="card-title fw-bold text-gray-600">
          Purchase {{ fullName }}
        </h5>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon explore-btn-dismiss me-n5"
            id="kt_explore_close"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body" id="kt_explore_body">
        <!--begin::Content-->
        <div
          id="kt_explore_scroll"
          class="scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_explore_body"
          data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::License-->
          <div
            class="rounded border border-dashed border-gray-300 py-6 px-8 mb-5"
          >
            <!--begin::Heading-->
            <div class="d-flex flex-stack mb-5">
              <!--begin::Price-->
              <h3 class="fs-3 fw-bolder mb-0">All-in License</h3>
              <!--end::Price-->
            </div>
            <!--end::Heading-->

            <!--begin::Description-->
            <div class="fs-5 fw-bold mb-7">
              <span class="text-gray-500"
                >Unlimited End Products and SaaS sites with paying users.</span
              >
              <a class="explore-link" href="https://keenthemes.com/licensing"
                >License Terms</a
              >
            </div>
            <!--end::Description-->

            <!--begin::Purchase-->
            <div class="mb-7">
              <a
                href="https://keenthemes.com/products/rider-vue-pro"
                class="btn btn-lg explore-btn-primary w-100"
              >
                Buy Now
              </a>
            </div>
            <!--end::Purchase-->

            <!--begin::Payment info-->
            <div class="d-flex flex-column flex-center mb-3">
              <!--begin::Heading-->
              <div class="mb-3 text-gray-500 fw-bold fs-6">
                Secured Payment by
                <a
                  href="https://www.2checkout.com/"
                  target="_black"
                  class="fw-bolder text-dark explore-link-hover me-1"
                  >2Checkout</a
                >
                with:
              </div>
              <!--end::Heading-->

              <!--begin::Payment methods-->
              <div class="mb-2">
                <img
                  src="media/svg/payment-methods/paypal.svg"
                  alt=""
                  class="h-30px me-3 rounded-1"
                />

                <img
                  src="media/svg/payment-methods/visa.svg"
                  alt=""
                  class="h-30px me-3 rounded-1"
                />

                <img
                  src="media/svg/payment-methods/mastercard.svg"
                  alt=""
                  class="h-30px me-3 rounded-1"
                />

                <img
                  src="media/svg/payment-methods/americanexpress.svg"
                  alt=""
                  class="h-30px rounded-1"
                />
              </div>
              <!--end::Payment methods-->

              <!--begin::Notice-->
              <div class="text-gray-400 fs-7">100% money back guarantee!</div>
              <!--end::Notice-->
            </div>
            <!--end::Payment info-->
          </div>
          <!--end::Licenses-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Exolore drawer-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fullName } from '@/core/helpers/documentation';

export default defineComponent({
  name: 'kt-purchese',
  setup() {
    return {
      fullName,
    };
  },
});
</script>
