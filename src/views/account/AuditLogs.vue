<template>
  <!--begin::Row-->
  <div class="row g-lg-9">
    <!--begin::Col-->
    <div class="col-lg-6">
      <KTRecentAlerts classes="card-lg-stretch mb-5 mb-lg-10"></KTRecentAlerts>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-lg-6">
      <KTSecurityGuidelines
        classes="card-lg-stretch mb-5 mb-lg-10"
      ></KTSecurityGuidelines>
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <KTLoginSessions classes="mb-5 mb-lg-10"></KTLoginSessions>

  <KTLogs></KTLogs>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import KTRecentAlerts from '@/components/audit-logs/RecentAlerts.vue';
import KTSecurityGuidelines from '@/components/audit-logs/SecurityGuidelines.vue';
import KTLoginSessions from '@/components/audit-logs/LoginSessions.vue';
import KTLogs from '@/components/audit-logs/Logs.vue';
import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumb';

export default defineComponent({
  name: 'kt-audit-logs',
  components: {
    KTRecentAlerts,
    KTSecurityGuidelines,
    KTLoginSessions,
    KTLogs,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs('Audit Logs', ['Account', 'Audit Logs']);
    });
  },
});
</script>
