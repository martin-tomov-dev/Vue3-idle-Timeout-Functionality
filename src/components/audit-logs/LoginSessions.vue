<template>
  <!--begin::Login sessions-->
  <div :class="classes" class="card">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Heading-->
      <div class="card-title">
        <h3>Login Sessions</h3>
      </div>
      <!--end::Heading-->

      <!--begin::Toolbar-->
      <div class="card-toolbar">
        <div class="my-1 me-4">
          <!--begin::Select-->
          <select
            class="form-select form-select-sm form-select-solid w-125px"
            data-control="select2"
            data-placeholder="Select Hours"
            data-hide-search="true"
          >
            <option value="1" selected>1 Hours</option>
            <option value="2">6 Hours</option>
            <option value="3">12 Hours</option>
            <option value="4">24 Hours</option>
          </select>
          <!--end::Select-->
        </div>

        <a href="#" class="btn btn-sm btn-primary my-1"> View All </a>
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-0">
      <!--begin::Table wrapper-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9"
        >
          <!--begin::Thead-->
          <thead class="border-gray-200 fs-5 fw-bold bg-lighten">
            <tr>
              <th class="min-w-250px">Location</th>
              <th class="min-w-100px">Status</th>
              <th class="min-w-150px">Device</th>
              <th class="min-w-150px">IP Address</th>
              <th class="min-w-150px">Time</th>
            </tr>
          </thead>
          <!--end::Thead-->

          <!--begin::Tbody-->
          <tbody class="fw-6 fw-bold text-gray-600">
            <template v-for="(item, i) in items" :key="i">
              <tr>
                <td>
                  <a href="#" class="text-hover-primary text-gray-600">{{
                    item.location
                  }}</a>
                </td>

                <td>
                  <span
                    :class="`badge badge-light-${item.status}`"
                    class="fs-7 fw-bolder"
                    >{{ item.code }}</span
                  >
                </td>

                <td>{{ item.device }}</td>

                <td>{{ item.address }}</td>

                <td>{{ item.time }}</td>
              </tr>
            </template>
          </tbody>
          <!--end::Tbody-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table wrapper-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Login sessions-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'login-sessions',
  props: {
    classes: String,
  },
  components: {},
  setup() {
    const items = [
      {
        location: 'USA(5)',
        status: 'success',
        code: 'OK',
        address: '236.125.56.78',
        time: '2 mins ago',
        device: 'Chrome - Windows',
      },

      {
        location: 'United Kingdom(10)',
        status: 'success',
        code: 'OK',
        address: '236.125.56.78',
        time: '10 mins ago',
        device: 'Safari - Mac OS',
      },

      {
        location: 'Norway(-)',
        status: 'danger',
        code: 'ERR',
        address: '236.125.56.10',
        time: '20 mins ago',
        device: 'Firefox - Windows',
      },

      {
        location: 'Japan(112)',
        status: 'success',
        code: 'OK',
        address: '236.125.56.54',
        time: '30 mins ago',
        device: 'iOS - iPhone Pro',
      },

      {
        location: 'Italy(5)',
        status: 'warning',
        code: 'WRN',
        address: '236.100.56.50',
        time: '40 mins ago',
        device: 'Samsung Noted 5- Android',
      },
    ];

    return {
      items,
    };
  },
});
</script>
