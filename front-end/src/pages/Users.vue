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
          <h3 class="mb-0">لیست کاربران</h3>
          <p>
            <ol class="breadcrumb pr-0">
              <li class="breadcrumb-item"><a href="#"><small>کاربران</small></a></li>
              <li class="breadcrumb-item active"><a href="#"><small>کاربران</small></a></li>
            </ol>
          </p>
        </div>
        <div class="col-md-10">
          <div class="panel panel-primary">
            <div class="panel-heading">لیست تمام اکانت های فعال</div>
            <div class="panel-body">
              <div>
              </div> 
              <div>
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between align-items-center" style="background-color: lightblue;border-color: rgb(66, 139, 202);">
					<span class="col-md-3" ><b>نام</b></span>
					<span class="col-md-3" ><b>ایمیل</b></span>
					<span class="col-md-3" ><b>شماره موبایل</b></span>
					<span class="col-md-3" ><b>زمان ثبت نام</b></span>
                  </li>
				   <li class="list-group-item d-flex justify-content-between align-items-center" style="cursor:pointer;margin-top: 5px;border-color: rgb(0, 150, 46);background-color: lightgreen;" v-for="item in users" :key="item._id">
					<span class="col-md-3"><b>{{item.name}}</b></span>
					<span class="col-md-3" style="width: 100px;margin-right: -91px;"><b style="position: absolute;margin-top: -8px;">{{item.email}}</b></span>
					<span class="col-md-3" style="text-align: center;margin-right: 40px;" ><b style="text-align: center;position: absolute;margin-right: -85px;margin-top: -8px;">{{item.mobile}}</b></span>
					<span class="col-md-3" ><b style="position: absolute;margin-top: -8px;" v-if="item.fulltime.length">{{item.fulltime[0].date}}</b></span>
                  </li>                 
                </ul>
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
		
		users:[],
		
		};
	},
	created(){
		let apiURL = 'http://localhost:5000/bibtel/api/result';
		axios.get(apiURL).then(users => {
			console.log(users)
				// this.Students = res;
				this.users=users.data;
				console.log(users.data)
		}).catch(error => {
				console.log(error)
			});
	},
};
</script>
<style>

</style>