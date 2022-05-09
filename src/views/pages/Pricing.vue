<template>
  <div class="card">
    <!--begin::Card body-->
    <div class="card-body px-10 px-lg-20 pt-17 pb-10">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table align-middle table-striped gy-7">
          <!--begin::Table head-->
          <thead class="align-middle">
            <tr id="kt_pricing_plan">
              <th>
                <!--begin::Nav group-->
                <div
                  class="nav bg-light rounded-pill px-3 py-2 ms-9 mb-15"
                  data-kt-buttons="true"
                  style="width: 206px"
                >
                  <!--begin::Nav link-->
                  <a
                    :class="{ active: show === 'monthly' }"
                    class="nav-link btn btn-active btn-active-dark fw-bolder btn-color-gray-600 py-3 px-5 m-1"
                    @click="show = 'monthly'"
                  >
                    Monthly
                  </a>
                  <!--end::Nav link-->

                  <!--begin::Nav link-->
                  <a
                    :class="{ active: show === 'annually' }"
                    class="nav-link btn btn-active btn-active-dark fw-bolder btn-color-gray-600 py-3 px-5 m-1"
                    @click="show = 'annually'"
                  >
                    Annually
                  </a>
                  <!--end::Nav link-->
                </div>
                <!--end::Nav group-->
              </th>

              <th class="text-center min-w-200px">
                <div class="min-w-200px mb-15">
                  <div class="text-primary fs-3 fw-bolder mb-7">Free</div>

                  <div
                    class="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm"
                  >
                    <span class="align-self-start fs-2 mt-3">$</span>
                    0
                  </div>

                  <div class="text-muted fw-bolder mb-7">Monthly</div>

                  <a href="#" class="btn btn-light-primary fw-bolder mx-auto"
                    >Start</a
                  >
                </div>
              </th>

              <th class="text-center min-w-200px">
                <div class="min-w-200px bg-primary card-rounded py-12 mb-15">
                  <div class="text-white fs-3 fw-bolder mb-7">Pro</div>

                  <div
                    class="fs-5x text-white d-flex justify-content-center align-items-start"
                  >
                    <span class="fs-2 mt-3">$</span>

                    <span class="lh-sm fw-bold">{{
                      show === 'monthly' ? 99 : 399
                    }}</span>
                  </div>

                  <div class="text-white fw-bolder mb-7">Monthly</div>

                  <a
                    href="#"
                    class="btn bg-white bg-opacity-20 bg-hover-white text-hover-primary text-white fw-bolder mx-auto"
                    >Start</a
                  >
                </div>
              </th>

              <th class="text-center min-w-200px">
                <div class="min-w-200px mb-15">
                  <div class="text-primary fs-3 fw-bolder mb-7">Lifetime</div>

                  <div
                    class="fs-5x d-flex justify-content-center align-items-start"
                  >
                    <span class="fs-2 mt-3">$</span>

                    <span class="lh-sm fw-bold">{{
                      show === 'monthly' ? 199 : 999
                    }}</span>
                  </div>

                  <div class="text-muted fw-bolder mb-7">Monthly</div>

                  <a href="#" class="btn btn-light-primary fw-bolder mx-auto"
                    >Select</a
                  >
                </div>
              </th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <tr>
              <th class="card-rounded-start">
                <div class="fw-bolder d-flex align-items-center ps-9 fs-3">
                  Sublicense Visuals
                </div>
              </th>

              <td>
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td>
                <div class="px-7 flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td class="card-rounded-end">
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th class="card-rounded-start">
                <div class="fw-bolder d-flex align-items-center ps-9 fs-3">
                  Free Updates
                </div>
              </th>

              <td>
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td>
                <div class="px-7 flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td class="card-rounded-end">
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th class="card-rounded-start">
                <div class="fw-bolder d-flex align-items-center ps-9 fs-3">
                  Theme Support
                </div>
              </th>

              <td>
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td>
                <div class="px-7 flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td class="card-rounded-end">
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th class="card-rounded-start">
                <div class="fw-bolder d-flex align-items-center ps-9 fs-3">
                  Unlimited Websites
                </div>
              </th>

              <td>
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td>
                <div class="px-7 flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td class="card-rounded-end">
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th class="card-rounded-start">
                <div class="fw-bolder d-flex align-items-center ps-9 fs-3">
                  DDOS Protection
                </div>
              </th>

              <td>
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td>
                <div class="px-7 flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td class="card-rounded-end">
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th class="card-rounded-start">
                <div class="fw-bolder d-flex align-items-center ps-9 fs-3">
                  Domain Reseller
                </div>
              </th>

              <td>
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td>
                <div class="px-7 flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>

              <td class="card-rounded-end">
                <div class="flex-root d-flex justify-content-center">
                  <span class="h-40px w-40px d-flex flex-center d-block">
                    <span class="svg-icon svg-icon-2x svg-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </span>

                  <span class="h-40px w-40px d-flex flex-center d-none">
                    <span class="svg-icon svg-icon-2x svg-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumb';

export default defineComponent({
  name: 'kt-',
  components: {},
  setup() {
    const show = ref<string>('monthly');

    onMounted(() => {
      setCurrentPageBreadcrumbs('Pricing', ['Pages', 'Pricing']);
    });

    return {
      show,
    };
  },
});
</script>
