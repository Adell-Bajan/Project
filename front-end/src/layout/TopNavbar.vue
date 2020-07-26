<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#9b59b6"><path d="M0,26.46154v13.23077h172v-13.23077zM0,79.38462v13.23077h172v-13.23077zM0,132.30769v13.23077h172v-13.23077z"></path></g></g></svg></a>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">
              Operator
            </a>
			  <img src="data:image/jpeg;base64,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" style="width:40px">
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
