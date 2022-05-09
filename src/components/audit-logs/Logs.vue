<template>
  <!--begin::Card-->
  <div :class="classes" class="card pt-4">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Logs</h2>
      </div>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Button-->
        <button type="button" class="btn btn-sm btn-light-primary">
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/files/fil021.svg" />
          </span>
          Download Report
        </button>
        <!--end::Button-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body py-0">
      <!--begin::Table wrapper-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table align-middle table-row-dashed fw-bold text-gray-600 fs-6 gy-5"
          id="kt_table_customers_logs"
        >
          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, i) in items" :key="i">
              <!--begin::Table row-->
              <tr>
                <!--begin::Badge--->
                <td class="min-w-70px">
                  <div :class="`badge-light-${item.color}`" class="badge">
                    {{ item.code }}
                  </div>
                </td>
                <!--end::Badge--->

                <!--begin::Status--->
                <td>
                  {{ item.message }}
                </td>
                <!--end::Status--->

                <!--begin::Timestamp--->
                <td class="pe-0 text-end min-w-200px">
                  {{ item.date }}
                </td>
                <!--end::Timestamp--->
              </tr>
              <!--end::Table row-->
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table wrapper-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
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
        code: '200 OK',
        color: 'success',
        message: 'POST /v1/invoices/in_8202_6827/payment',
        date: '24 Jun 2021, 10:10 pm',
      },
      {
        code: '200 OK',
        color: 'success',
        message: 'POST /v1/invoice/in_2549_6225/invalid',
        date: '25 Jul 2021, 5:30 pm',
      },
      {
        code: '200 OK',
        color: 'success',
        message: 'POST /v1/invoices/in_3165_2082/payment',
        date: '25 Jul 2021, 8:43 pm',
      },
      {
        code: '200 OK',
        color: 'success',
        message: 'POST /v1/invoices/in_9368_3570/payment',
        date: '10 Nov 2021, 9:23 pm',
      },
      {
        code: '200 OK',
        color: 'success',
        message: 'POST /v1/invoices/in_1205_4334/payment',
        date: '25 Jul 2021, 11:05 am',
      },
      {
        code: '200 OK',
        color: 'success',
        message: 'POST /v1/customer/c_60dd29482d618/not_found',
        date: '10 Mar 2021, 6:43 am',
      },
      {
        code: '404 WRN',
        color: 'warning',
        message: 'POST /v1/invoice/in_4234_9409/invalid',
        date: '22 Sep 2021, 11:30 am',
      },
      {
        code: '404 WRN',
        color: 'warning',
        message: 'POST /v1/invoices/in_5824_4248/payment',
        date: '19 Aug 2021, 11:30 am',
      },
      {
        code: '404 WRN',
        color: 'warning',
        message: '	POST /v1/invoices/in_8202_6827/payment',
        date: '25 Jul 2021, 11:30 am',
      },
      {
        code: '500 ERR',
        color: 'danger',
        message: 'POST /v1/customer/c_60dd29482d621/not_found',
        date: '25 Oct 2021, 5:30 pm',
      },
    ];

    return {
      items,
    };
  },
});
</script>
