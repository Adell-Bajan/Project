<template>
  <div>
    <link
      href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    <div class="container">
      <div
        style="margin-top: 38px;padding: 0px; border-radius:10px;"
      >
        <div class="container bootstrap snippet" style="margin-left: -10px;">
          <div class="col-md-8 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-md-12">
                <div class="widget-box">
                  <div class="widget-body">
                    <div class="widget-main no-padding">
                      <div
                        class="tickets-container"
                        style="margin-top: 0px;width: 1095px;margin-left: -16px;"
                      >
                        <h3>
                          <b
                            style="margin-left: 915px;position: absolute;margin-top: -20px;"
                          >List Ticket</b>
                        </h3>
                        <h6>
                          <b
                            style="margin-left: 914px;position: absolute;margin-top: 20px;font-size: 10px;color: #57c0d8;"
                          >List Ticket / List Ticket</b>
                        </h6>
                        <ul class="tickets-list">
                          <div class="panel panel-info" style="border-color: #a45fe8;margin-top: 85px;">
                            <div
                              class="panel-heading"
                              style="background-color: #412959;border-color: #412959;"
                            >
                              <div class="panel-title" style="color: white;">Department</div>
                            </div>

                            <div style="padding-top:30px" class="panel-body">
                              <div
                                style="display:none"
                                id="login-alert"
                                class="alert alert-danger col-sm-12"
                              ></div>

                              <form
                                id="loginform"
                                class="form-horizontal"
                                @submit.prevent="handleSubmitForm"
                              >
                                <div style="margin-bottom: 25px" class="input-group">
                                  <span class="input-group-addon">
                                    <i class="glyphicon glyphicon-user"></i>
                                  </span>
                                  <input
                                    type="text"
                                    class="form-control"
                                    v-model="department.name"
                                    required
                                    placeholder="Please Enter Department"
                                  />
                                </div>

                                <div style="margin-top:10px" class="form-group">
                                  <div class="col-sm-12 controls">
                                    <button
                                      class="btn btn-info"
                                      style="color:#fff;background-color:rgb(65, 41, 89);border-color:rgb(65, 41, 89);"
                                    >Add Department</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="loginbox"
        style="margin-top:50px;"
        class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
      >
        <div class="list-group">
          <button
            type="button"
            style="background-color: #412959;border-color: #412959;"
            class="list-group-item list-group-item-action active"
          >List Department</button>
          <b>
            <span
              style="text-align: right;"
              type="button"
              class="list-group-item list-group-item-action"
              v-for="item in departments"
              :key="item._id"
            >
              <span style="width: 1000px;height: 100px;">
                {{item.name}}
                <button
                  @click.prevent="deletedepartment(item._id)"
                  class="btn btn-danger"
                  style="color: white;margin-left: -420px;position: absolute;margin-top: -6px;"
                >Remove</button>
              </span>
            </span>
          </b>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      department: {
        name: ""
      },
      departments: []
    };
  },
  created() {
    let apiURL = "http://localhost:5000/bibtel/api/get_all_department";
    axios
      .get(apiURL)
      .then(result => {
        // this.Students = res;
        this.departments = result.data.department;
        console.log(result.data.department);
        // console.log(data)
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:5000/bibtel/api/create_department";
      console.log("hello");
      axios
        .post(apiURL, this.department)
        .then(() => {
          this.$router.push("/admin/department");
          this.department = {
            name: ""
          };
        })
        .catch(error => {
          console.log(error);
        });
    },
    deletedepartment(id) {
      let apiURL = `http://localhost:5000/bibtel/api/delete_department/${id}`;
      let indexOfArrayItem = this.departments.findIndex(i => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.departments.splice(indexOfArrayItem, 1);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>
<style lang="stylus" scoped></style>