<template>
  <div
    style="
      font-family: Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-size: 15px;
      color: #2f3044;
      min-height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
      background-color: #edf2f7;
    "
  >
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="
        border-collapse: collapse;
        margin: 0 auto;
        padding: 0;
        max-width: 600px;
      "
    >
      <tbody>
        <tr>
          <td
            align="center"
            valign="center"
            style="text-align: center; padding: 40px"
          >
            <a href="https://keenthemes.com" rel="noopener" target="_blank">
              <img
                src="media/logos/logo-default.svg"
                style="height: 50px"
                alt="logo"
              />
            </a>
          </td>
        </tr>

        <tr>
          <td align="left" valign="center">
            <div
              style="
                text-align: left;
                margin: 0 20px;
                padding: 40px;
                background-color: #ffffff;
                border-radius: 6px;
              "
            >
              <router-view></router-view>

              <div style="padding-bottom: 10px">
                Kind regards,<br />
                The Keenthemes Team.
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td
            align="center"
            valign="center"
            style="
              font-size: 13px;
              text-align: center;
              padding: 20px;
              color: #6d6e7c;
            "
          >
            <p>
              Floor 10, 101 Avenue of the Light Square, New York, NY, 10050.
            </p>
            <p>
              Copyright &copy;
              <a href="https://keenthemes.com" rel="noopener" target="_blank"
                >Keenthemes</a
              >.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'authentication-general',
  components: {},
});
</script>
