<template>
  <div>
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
          	<form action="" style="margin-top: 156px;margin-right: 55px;">
			  <div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span style="background-color: #51075a;border-radius: 0px 5px 5px 0px;height: 43px;width: 50px;padding: 10px;text-align: center;">
							<img
                				src="../assets/img/user.png"
                				alt="Logo" style="margin-top: -9px;width: 40px;margin-right: -5px;"
              				/>
						</span>
  					</div>
					  <b>
  						<input type="text" class="form-control" placeholder=" شماره موبایل خود را وارد نمایید" aria-label="Username" aria-describedby="basic-addon1" style="font-size: 13px;text-align: right;background-color: #f5f5f5;border-color: #eee;height: 44px;width: 270px;border-radius: 10px 0px 0px 10px;">
					  </b>
				</div>
				<div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span style="background-color: #51075a;border-radius: 0px 5px 5px 0px;height: 43px;width: 50px;padding: 10px;text-align: center;">
							<img src="../assets/img/pass.png" alt="Logo" style="margin-top: -5px;width: 30px;margin-right: -3px;"/>
						</span>
  					</div>
					  <b>
  						<input type="text" class="form-control" placeholder=" رمز عبور خود را وارد نمایید" aria-label="Username" aria-describedby="basic-addon1" style="font-size: 13px;text-align: right;background-color: #f5f5f5;border-color: #eee;height: 44px;width: 270px;border-radius: 10px 0px 0px 10px;">
					  </b>
				</div>
				<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" style="width: 262px;height: 45px;margin-top: 20px;margin-right: 22px;padding: 4px;background-color: #500759;border-color: #500759;"><b>ورود</b></a>
		  	</form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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