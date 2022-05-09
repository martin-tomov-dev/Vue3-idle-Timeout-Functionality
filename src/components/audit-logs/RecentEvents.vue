<template>
  <!--begin::Security recent alerts-->
  <div :class="classes" class="card">
    <!--begin::Body-->
    <div class="card-body pt-5">
      <!--begin::Carousel-->
      <div
        id="kt_security_recent_events"
        class="carousel carousel-custom carousel-stretch slide"
        data-bs-ride="carousel"
        data-bs-pause="3000"
        data-bs-interval="8000"
      >
        <!--begin::Heading-->
        <div class="d-flex flex-stack align-items-center flex-wrap">
          <h4 class="text-gray-400 fw-bold mb-0 pe-2">Recent Events</h4>

          <!--begin::Carousel Indicators-->
          <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
            <li
              data-bs-target="#kt_security_recent_events"
              data-bs-slide-to="0"
              class="ms-1 active"
            ></li>
            <li
              data-bs-target="#kt_security_recent_events"
              data-bs-slide-to="1"
              class="ms-1"
            ></li>
            <li
              data-bs-target="#kt_security_recent_events"
              data-bs-slide-to="2"
              class="ms-1"
            ></li>
          </ol>
          <!--end::Carousel Indicators-->
        </div>
        <!--end::Heading-->

        <!--begin::Carousel inner-->
        <div class="carousel-inner min-h-lg-175px pt-6">
          <!--begin::Item-->
          <div class="carousel-item active">
            <!--begin::Wrapper-->
            <div class="carousel-wrapper">
              <!--begin::Description-->
              <div class="d-flex flex-column flex-grow-1">
                <a href="#" class="fs-5 fw-bolder text-dark text-hover-primary">
                  Latest Payouts
                </a>

                <p class="text-gray-600 fs-6 fw-bold pt-3 mb-0">
                  Detailed breakdown of the total payouts line from the above
                  Balance Summary report.
                </p>
              </div>
              <!--end::Description-->

              <!--begin::Summary-->
              <div class="d-flex flex-stack pt-8">
                <span class="badge badge-light-primary fs-7 fw-bolder me-2"
                  >Aug 10, 2021</span
                >

                <a href="#" class="btn btn-sm btn-light">Learn More</a>
              </div>
              <!--end::Summary-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="carousel-item">
            <!--begin::Wrapper-->
            <div class="carousel-wrapper">
              <!--begin::Description-->
              <div class="d-flex flex-column flex-grow-1">
                <a href="#" class="fw-bolder text-dark text-hover-primary">
                  Balance Summary
                </a>

                <p class="text-gray-600 fs-6 fw-bold pt-3 mb-0">
                  Shows starting and ending balance in your account. Starting
                  balance is the sum of your available balance.
                </p>
              </div>
              <!--end::Description-->

              <!--begin::Summary-->
              <div class="d-flex flex-stack pt-8">
                <span class="badge badge-light-primary fs-7 fw-bolder me-2"
                  >Nov 20, 2021</span
                >

                <a
                  href="#"
                  class="btn btn-light btn-sm btn-color-muted fs-7 fw-bolder px-5"
                  >Join</a
                >
              </div>
              <!--end::Summary-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="carousel-item">
            <!--begin::Wrapper-->
            <div class="carousel-wrapper">
              <!--begin::Description-->
              <div class="d-flex flex-column flex-grow-1">
                <a href="#" class="fw-bolder text-dark text-hover-primary">
                  Top Picks For You
                </a>

                <p class="text-gray-600 fs-6 fw-bold pt-3 mb-0">
                  Today we are excited to share an amazing certification
                  opportunity which is designed to teach you everything.
                </p>
              </div>
              <!--end::Description-->

              <!--begin::Summary-->
              <div class="d-flex flex-stack pt-8">
                <span class="badge badge-light-primary fs-7 fw-bolder me-2"
                  >Sep 10, 2021</span
                >

                <a
                  href="#"
                  class="btn btn-light btn-sm btn-color-muted fs-7 fw-bolder px-5"
                  >Collaborate</a
                >
              </div>
              <!--end::Summary-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Carousel inner-->
      </div>
      <!--end::Carousel-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Security recent alerts-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'recent-alerts',
  props: {
    classes: String,
  },
  components: {},
});
</script>
