<template>
  <div>
	  <span id="modalsm" style="text-align:center" ref="modal" size="sm" hide-footer>
      <div style="color:#28a745; font-size:20px">
      <b v-if="errorMessage" style="position: absolute;margin-top: -31px;width: 300px;margin-right: -673px;border-radius: 10px;height: 84px;background-color: #c14343;padding-top: 31px;color: white;font-size: 16px;">شماره موبایل و و رمز عبور معتبر نیست</b>
      </div>
      </span>
	  <!-- <div  class="alert alert-danger" role="alert"></div> -->
    <div class="container h-100" style="margin-top: 90px;">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
          <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
              <img
                src="../assets/img/b.png"
                alt="Logo" style="height: 101px;margin-left: 8px;margin-top: 17px;"
              />
            </div>
          </div>
		  <div style="margin-top: -60px;font-size: 22px;position: absolute;margin-right: 65px;color: #412959;">
			  <b style="font-size: 30px;margin-top: -42px;position: absolute;width: 300px;margin-right: 19px;">
				به بیب تل خوش آمدید
			  </b>
		  </div>
          	<form action="" style="margin-top: 156px;margin-right: 55px;" @submit.prevent="signin()">
			  <div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span style="background-color: #51075a;border-radius: 0px 5px 5px 0px;height: 43px;width: 50px;padding: 10px;text-align: center;">
							<svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 172 172" style="margin-top: -26px;width: 30px;margin-right: -3px;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M55.9,19.35c-5.9125,0 -10.75,4.8375 -10.75,10.75v111.8c0,5.9125 4.8375,10.75 10.75,10.75h60.2c5.9125,0 10.75,-4.8375 10.75,-10.75v-111.8c0,-5.9125 -4.8375,-10.75 -10.75,-10.75zM55.9,23.65h60.2c3.58613,0 6.45,2.86387 6.45,6.45v111.8c0,3.58613 -2.86387,6.45 -6.45,6.45h-60.2c-3.58613,0 -6.45,-2.86387 -6.45,-6.45v-111.8c0,-3.58613 2.86387,-6.45 6.45,-6.45zM58.05,30.1c-1.18418,0 -2.15,0.96582 -2.15,2.15v60.2c0,1.18418 0.96582,2.15 2.15,2.15h55.9c1.18418,0 2.15,-0.96582 2.15,-2.15v-60.2c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM60.2,34.4h51.6v55.9h-51.6zM68.8,38.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,47.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,55.9c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,64.5c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,73.1c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM86,98.9c-3.56094,0 -6.45,2.88906 -6.45,6.45c0,3.56094 2.88906,6.45 6.45,6.45c3.56094,0 6.45,-2.88906 6.45,-6.45c0,-3.56094 -2.88906,-6.45 -6.45,-6.45zM64.5,118.25c-4.72832,0 -8.6,3.87168 -8.6,8.6v8.6c0,4.72832 3.87168,8.6 8.6,8.6h43c4.72832,0 8.6,-3.87168 8.6,-8.6v-8.6c0,-4.72832 -3.87168,-8.6 -8.6,-8.6zM64.5,122.55h8.6v6.45h-12.9v-2.15c0,-2.40195 1.89805,-4.3 4.3,-4.3zM77.4,122.55h17.2v6.45h-17.2zM98.9,122.55h8.6c2.40195,0 4.3,1.89805 4.3,4.3v2.15h-12.9zM60.2,133.3h12.9v6.45h-8.6c-2.40195,0 -4.3,-1.89805 -4.3,-4.3zM77.4,133.3h17.2v6.45h-17.2zM98.9,133.3h12.9v2.15c0,2.40195 -1.89805,4.3 -4.3,4.3h-8.6z"></path></g></g></svg>
						</span>
  					</div>
					  <b>
  						<input  v-model="user.mobile" type="text" class="form-control" placeholder=" شماره موبایل خود را وارد نمایید" aria-label="Username" aria-describedby="basic-addon1" style="font-size: 13px;text-align: right;background-color: #f5f5f5;border-color: #eee;height: 44px;width: 270px;border-radius: 10px 0px 0px 10px;">
					  </b>
				</div>
				<div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span style="background-color: #51075a;border-radius: 0px 5px 5px 0px;height: 43px;width: 50px;padding: 10px;text-align: center;">
							<img src="../assets/img/pass.png" alt="Logo" style="margin-top: -5px;width: 30px;margin-right: -3px;"/>
						</span>
  					</div>
					  <b>
  						<input  v-model="user.password" type="text" class="form-control" placeholder=" رمز عبور خود را وارد نمایید" aria-label="Username" aria-describedby="basic-addon1" style="font-size: 13px;text-align: right;background-color: #f5f5f5;border-color: #eee;height: 44px;width: 270px;border-radius: 10px 0px 0px 10px;">
					  </b>
				</div>
				<button class="btn btn-primary btn-lg active" style="width: 262px;height: 45px;margin-top: 20px;margin-right: 22px;padding: 4px;background-color: #500759;border-color: #500759;"><b>ورود</b></button>
				<!-- <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" style="width: 262px;height: 45px;margin-top: 20px;margin-right: 22px;padding: 4px;background-color: #500759;border-color: #500759;"><b>ورود</b></a> -->
		  	</form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Joi from "joi";
import axios from 'axios';
export default {
	data: () => ({
    	errorMessage: "",
    	// loggingIn: false,
    	user: {
     	 mobile: "",
      	password: ""
    }
  	}),
  	filters: {
    	filtermessage: value => {
      	if (value.includes("Unexpected token"))
        	return "شماره موبایل و پسورد معتبر نیست";
     	 else return value;
    	}
	  },
	 methods: {
    signin() {
      this.errorMessage = "";
      if (this.validUser()) {
        // this.loggingIn = true;
        const body = {
          mobile: this.user.mobile,
          password: this.user.password
        };
        fetch(`http://localhost:5000/bibtel/api/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return response.json().then(error => {
              throw new Error(error.message);
            });
          })
          .then(result => {
            localStorage.token = result.token;
            // this.loggingIn = false;
            this.$router.push("/admin/overview");
          })
          .catch(error => {
            this.loggingIn = false;
            this.errorMessage = error.message;
          });
      }
    },
    validUser() {
      const result = Joi.validate(this.user);
      //  console.log(result);
      if (result.error === null) {
        return true;
      }
      if (result.error.message.includes("mobile")) {
        this.errorMessage = "شماره موبایل معتبر نیست.";
        return false;
      }
      this.errorMessage = "پسورد معتبر نیست";
      return false;
    }
  }
};
</script>
<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #60a3bc !important;
}
.user_card {
  height: 500px;
  width: 450px;
  margin-top: auto;
  border: 1px solid #51075a;
  margin-bottom: auto;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #51075a;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: #c0392b !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #c0392b !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #c0392b !important;
}
</style>