<template>
  <div>
    <link
      href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />

    <div class="container">
      <div class="row hb-wrapper">
        <div class="col-md-12">
          <h3 class="mb-0">دپارتمان ها</h3>
          <p>
            <ol class="breadcrumb pr-0">
              <li class="breadcrumb-item"><a href="#"><small>دپارتمان</small></a></li>
              <li class="breadcrumb-item active"><a href="#"><small>دپارتمان</small></a></li>
            </ol>
          </p>
        </div>
        <div class="col-md-12">
          <div class="panel panel-primary">
            <div class="panel-heading">افزودن دپارتمان جدید</div>
            <div class="panel-body">
              <div>
                <form class="form-inline" @submit.prevent="handleSubmitForm">                  
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="text" v-model="department.name"                                    
                                    required class="form-control hb-add-department" placeholder="لطفا دپارتمان مورد نظر خود را وارد نمایید ...">
                  </div>
                  <button type="submit" class="btn btn-success mb-2">ثبت دپارتمان</button>
                </form>
                <hr>
              </div> 
              <div>
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in departments"
                          :key="item._id">
                    {{item.name}}
                    <span class="badge badge-danger badge-pill pointer delete-item" @click.prevent="deletedepartment(item._id)">x</span>
                  </li>                
                </ul>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div style="margin-top: 38px;padding: 0px; border-radius:10px;">
        <div class="bootstrap snippet" style="margin-left: -10px;">
          <div class="col-md-12 col-sm-12 col-xs-12">
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
                            >دپارتمان ها</b
                          >
                        </h3>
                        <h6>
                          <b
                            style="margin-left: 939px;position: absolute;margin-top: 20px;font-size: 11px;color: rgb(87, 192, 216);"
                            >دپارتمان / دپارتمان</b
                          >
                        </h6>
                        <ul class="tickets-list">
                          <div
                            class="panel panel-info"
                            style="width: 570px;margin-left: 470px;border-color: rgb(255, 255, 255);margin-top: 85px;border-radius: 13px;"
                          >
                            <div
                              class="panel-heading"
                              style="background-color: #297ce7;border-color: #297ce7;border-radius: 11px 11px 0px 0px;height: 55px;text-align: right;"
                            >
                              <div class="panel-title" style="color: white;">
                                افزودن دپارتمان جدید
                              </div>
                            </div>

                            <div
                              style="padding-top:30px;height: 95px;"
                              class="panel-body"
                            >
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
                                <b>
                                  <input
                                    class="form-control"
                                    type="text"
                                    v-model="department.name"
                                    placeholder="... لطفا دپارتمان مورد نظر خود را وارد نمایید"
                                    required
                                    style="margin-left: 186px;font-size: 13px;text-align: center;width: 337px;border-radius: 11px;height: 43px;margin-bottom: 10px;box-shadow: none;margin-top: -6px;border-color: #eee;background-color: #eee;"
                                  />
                                  <div
                                    style="margin-top:10px"
                                    class="form-group"
                                  >
                                    <div class="col-sm-12 controls">
                                      <button
                                        class="btn btn-info"
                                        style="font-size: 18px;color: rgb(255, 255, 255);margin-left: 20px;background-color: rgb(63, 225, 108);border-color: rgb(30, 185, 73);width: 139px;height: 40px;margin-top: -86px;border: 2px solid #50c98c;border-radius: 13px;"
                                      >
                                        ثبت دپارتمان
                                      </button>
                                    </div>
                                  </div>
                                </b>
                              </form>
                            </div>
                          </div>
                        </ul>
                        <div
                          style="width: 566px;border: 0px solid black;height: 40px;background-color: white;margin-left: 472px;border-radius: 9px;margin-top: -8px;"
                        >
                          <div>
                            <b
                              style="position: absolute;margin-left: 465px;margin-top: 9px;"
                              >Name Depar</b
                            >
                          </div>
                          <div>
                            <b
                              style="position: absolute;margin-left: 265px;margin-top: 9px;"
                              >Edit Depar</b
                            >
                          </div>
                          <div>
                            <b
                              style="position: absolute;margin-left: 46px;margin-top: 9px;"
                              >Remove Depar</b
                            >
                          </div>
                        </div>
                        <div
                          v-for="item in departments"
                          :key="item._id"
                          style="width: 566px;border: 0px solid black;height: 40px;background-color: white;margin-left: 472px;border-radius: 9px;margin-top: 5px;"
                        >
                          <div>
                            <b
                              style="position: absolute;margin-left: 465px;margin-top: 9px;color: lightblue;"
                              >{{ item.name }}</b
                            >
                          </div>
                          <!-- <div><b style="position: absolute;margin-left: 265px;margin-top: 9px;">Edit Depar</b></div> -->
                          <button
                            class="btn btn-defualt"
                            style="position: absolute;margin-left: 265px;margin-top: 4px;"
                          >
                            <b>Edit Depar</b>
                          </button>
                          <button
                            @click.prevent="deletedepartment(item._id)"
                            class="btn btn-danger"
                            style="background-color: #ef2121;margin-left: 46px;position: absolute;margin-top: 2px;width: 75px;height: 35px;margin-top: 5px;"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      baseUrl:"http://localhost:5000/bibtel/api",
      department: {
        name: ""
      },
      departments: []
    };
  },
  mounted(){
    this.getDeparments();
  },
  created() {   
  },
  methods: {
    getDeparments(){
      let apiURL = `${this.baseUrl}/get_all_department`;
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
    handleSubmitForm() {
      let apiURL = `${this.baseUrl}/create_department`;
      console.log("hello");
      axios
        .post(apiURL, this.department)
        .then(() => {
          this.$router.push("/admin/department");
          this.department = {
            name: ""
          };

          // load deparments
          this.getDeparments();
        })
        .catch(error => {
          console.log(error);
        });
    },
    deletedepartment(id) {
      alert(id);
      let apiURL = `${this.baseUrl}/delete_department/${id}`;
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
