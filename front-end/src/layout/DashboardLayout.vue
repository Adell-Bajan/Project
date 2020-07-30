<template>
  <div class="wrapper">    
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click="toggleSidebar"> </dashboard-content>
      <content-footer></content-footer>
    </div>
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <img
          src="../assets/img/home icon.png"
          style="width: 30px;height: 30px;margin-left: 12px;margin-bottom: 8px;"
        />
        <p style="margin-top: 4px">خانه</p>
      </sidebar-link>
      <sidebar-link to="/admin/ticket">
        <img
          src="../assets/img/support icon.png"
          style="width: 30px;height: 30px;margin-left: 12px;margin-bottom: 8px;"
        />
        <p>پشتیبانی</p>
      </sidebar-link>
      <sidebar-link to="/admin/favorites">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 172 172"
          style="fill: rgb(0, 0, 0);margin-left: -10px;width: 38px;height: 32px;"
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style="mix-blend-mode: normal"
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#ffffff">
              <path
                d="M51.6,10.32c-5.68976,0 -10.32,4.63024 -10.32,10.32v9.66828c-1.24184,3.19576 -6.88,18.1682 -6.88,26.45172c0,7.57633 2.51458,13.27069 6.88,16.34672v78.25328c0,5.68976 4.63024,10.32 10.32,10.32h59.45422l-1.45125,5.54297c-0.344,1.376 0.34535,3.09465 1.37735,3.78266c0.688,0.344 1.37465,0.68531 2.06265,0.68531c0.69144,0 1.38482,-0.34131 2.06938,-0.68531l19.26265,-12.38266l19.26265,12.72531c1.032,1.032 2.75066,0.688 3.78266,0c1.376,-1.032 1.72134,-2.40666 1.37734,-3.78265l-5.84531,-22.36l17.88531,-14.44531c1.032,-1.032 1.37869,-2.41338 1.03469,-3.78938c-0.344,-1.376 -1.72135,-2.40531 -3.09735,-2.40531l-23.05203,-1.37735l-8.25062,-21.66797c-0.344,-1.032 -1.72135,-2.06938 -3.09735,-2.06938c-1.376,0 -2.752,1.032 -3.44,1.72l-0.215,0.56438v-28.6286c4.36542,-3.07603 6.88,-8.77039 6.88,-16.34672c0,-8.32824 -5.70303,-23.42323 -6.90015,-26.50547c0,-0.03784 0.02015,-0.06966 0.02015,-0.1075v-9.50703c0,-5.68976 -4.63024,-10.32 -10.32,-10.32zM47.085,34.4h11.395v30.59047c-2.28413,2.39659 -5.33548,3.80953 -8.6,3.80953c-7.10704,0 -8.6,-6.54632 -8.6,-12.04c0,-5.63816 3.65156,-16.58424 5.805,-22.36zM65.36,34.4h17.2v30.44265c-2.20371,2.35713 -5.14372,3.95735 -8.6,3.95735c-3.42329,0 -6.40174,-1.49178 -8.6,-3.80953zM89.44,34.4h17.2v30.44265c-2.20371,2.35713 -5.14372,3.95735 -8.6,3.95735c-3.45628,0 -6.39629,-1.60022 -8.6,-3.95735zM113.52,34.4h11.40172c2.15,5.77576 5.79828,16.72184 5.79828,22.36c0,5.49368 -1.49296,12.04 -8.6,12.04c-3.26858,0 -6.3207,-1.41163 -8.6,-3.80953zM86,70.7014c3.29746,2.87056 7.31414,4.9786 12.04,4.9786c4.59416,0 8.77956,-1.69639 12.04,-4.42765c3.37139,2.83531 7.59165,4.42765 12.04,4.42765c0.58747,0 1.16043,-0.0331 1.72,-0.08735v44.20266l-1.16235,3.05031l-23.04531,1.37734c-1.376,0 -2.75335,1.02931 -3.09735,2.40531c-0.344,1.376 0.00135,3.09465 1.37735,3.78265l4.54859,3.74906h-54.30094v-58.56735c0.55957,0.05425 1.13253,0.08735 1.72,0.08735c4.44816,0 8.66713,-1.59097 12.04,-4.42765c3.26044,2.73126 7.44584,4.42765 12.04,4.42765c4.72586,0 8.74254,-2.10804 12.04,-4.9786zM134.375,112.52563l5.50265,15.48c0.688,1.032 1.72135,2.06265 3.09735,2.06265l16.51469,1.03469l-12.73203,10.32c-1.032,0.688 -1.37197,2.064 -1.02797,3.44l4.12531,15.82266l-13.76,-8.94266c-0.344,-0.344 -1.032,-0.69203 -1.72,-0.69203c-0.69144,0 -1.37465,0.34938 -2.06265,0.34938l-13.76,8.94265l4.12531,-15.82265c0.344,-1.032 0.00403,-2.752 -1.02797,-3.44l-12.73203,-10.32l16.51469,-0.69203c1.376,-0.344 2.40934,-1.02931 3.09734,-2.40531zM75.68,144.48h20.64c1.89888,0 3.44,1.54112 3.44,3.44c0,1.89888 -1.54112,3.44 -3.44,3.44h-20.64c-1.90232,0 -3.44,-1.53768 -3.44,-3.44c0,-1.90232 1.53768,-3.44 3.44,-3.44z"
              ></path>
            </g>
          </g>
        </svg>
        <p style="margin-right: 9px;">علاقه مندی ها</p>
      </sidebar-link>
      <sidebar-link to="/admin/department">
        <img
          src="../assets/img/icon.png"
          style="width: 30px;height: 30px;margin-left: 12px;margin-bottom: 8px;"
        />
        <p style="margin-right: 10px;margin-top: -8px;">دپارتمان</p>
      </sidebar-link>
	  <sidebar-link to="/admin/users">
	  <svg style="width: 25px;height: 30px;margin-left: 12px;margin-bottom: 8px;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M115.97596,6.61538c-11.88702,0 -22.27524,6.1244 -26.875,17.77885c9.66467,7.95913 16.33173,20.28546 16.33173,37.00481c0,17.83053 -8.42428,34.13642 -17.15865,44.65385c13.92849,5.27163 35.73858,15.84074 41.96635,32.04327c21.9393,-1.21454 41.55288,-5.63341 41.55288,-18.19231v-4.13462c0,-11.4994 -20.07872,-22.76622 -37.83173,-28.73558c-0.80108,-0.25841 -5.89183,-1.49879 -2.6875,-11.37019c8.34676,-8.70853 14.05769,-22.79206 14.05769,-36.59135c0,-21.24158 -13.20493,-32.45673 -29.35577,-32.45673zM59.33173,27.08173c-17.21033,0 -32.04327,11.75781 -32.04327,34.31731c0,14.75541 7.00301,29.82092 15.91827,39.07212c3.46274,9.25121 -2.84254,15.84074 -4.13462,16.33173c-17.98558,6.58954 -39.07212,18.5024 -39.07212,30.38942v4.54808c0,16.20253 30.90625,19.84615 59.53846,19.84615c28.6839,0 59.33173,-3.64363 59.33173,-19.84615v-4.54808c0,-12.24879 -21.21574,-24.03245 -40.10577,-30.38942c-0.8786,-0.28426 -6.30529,-6.04687 -2.89423,-16.53846h-0.20673c8.86358,-9.27704 16.53846,-24.16166 16.53846,-38.86538c0,-22.55949 -15.6857,-34.31731 -32.87019,-34.31731z"></path></g></g></svg>
        <p style="margin-right: 10px;margin-top: -8px;">کاربران</p>
      </sidebar-link>
    </side-bar>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
