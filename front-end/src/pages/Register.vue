<template>
  <div>
	  <span id="modalsm" style="text-align:center" ref="modal" size="sm" hide-footer>
      <div style="color:#28a745; font-size:20px">
      <b style="position: absolute;margin-top: -31px;width: 300px;margin-right: -673px;border-radius: 10px;height: 84px;background-color: #2ca744;padding-top: 31px;color: white;font-size: 16px;" v-if="(this.form.status === 200)">ثبت نام با موفقعیت انجام شد </b>
      </div>
      </span>
	  <span id="modalsm" style="text-align:center" ref="modal" size="sm" hide-footer>
      <div style="color:#28a745; font-size:20px">
      <b style="position: absolute;margin-top: -31px;width: 300px;margin-right: -673px;border-radius: 10px;height: 84px;background-color: #de3737;padding-top: 31px;color: white;font-size: 16px;" v-if="erorra">لطفا تمام فیلد ها را به دقت پر کنید</b>
      </div>
      </span>
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
		  <div style="margin-top: -100px;font-size: 22px;position: absolute;margin-right: 65px;color: #412959;">
			  <b style="font-size: 30px;margin-top: -42px;position: absolute;width: 300px;margin-right: 19px;">
				به بیب تل خوش آمدید
			  </b>
		  </div>
          	<form  @submit="onSubmit" action="" style="margin-top: 250px;margin-right: 55px;">
				<div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span style="background-color: #51075a;border-radius: 0px 5px 5px 0px;height: 43px;width: 50px;padding: 10px;text-align: center;">
							<img
                				src="../assets/img/user.png"
                				alt="Logo" style="margin-top: -9px;width: 40px;margin-right: -5px;"
              				/>
							<!-- <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 172 172" style="margin-top: -5px;width: 30px;margin-right: -3px;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M55.9,19.35c-5.9125,0 -10.75,4.8375 -10.75,10.75v111.8c0,5.9125 4.8375,10.75 10.75,10.75h60.2c5.9125,0 10.75,-4.8375 10.75,-10.75v-111.8c0,-5.9125 -4.8375,-10.75 -10.75,-10.75zM55.9,23.65h60.2c3.58613,0 6.45,2.86387 6.45,6.45v111.8c0,3.58613 -2.86387,6.45 -6.45,6.45h-60.2c-3.58613,0 -6.45,-2.86387 -6.45,-6.45v-111.8c0,-3.58613 2.86387,-6.45 6.45,-6.45zM58.05,30.1c-1.18418,0 -2.15,0.96582 -2.15,2.15v60.2c0,1.18418 0.96582,2.15 2.15,2.15h55.9c1.18418,0 2.15,-0.96582 2.15,-2.15v-60.2c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM60.2,34.4h51.6v55.9h-51.6zM68.8,38.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,47.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,55.9c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,64.5c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,73.1c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM86,98.9c-3.56094,0 -6.45,2.88906 -6.45,6.45c0,3.56094 2.88906,6.45 6.45,6.45c3.56094,0 6.45,-2.88906 6.45,-6.45c0,-3.56094 -2.88906,-6.45 -6.45,-6.45zM64.5,118.25c-4.72832,0 -8.6,3.87168 -8.6,8.6v8.6c0,4.72832 3.87168,8.6 8.6,8.6h43c4.72832,0 8.6,-3.87168 8.6,-8.6v-8.6c0,-4.72832 -3.87168,-8.6 -8.6,-8.6zM64.5,122.55h8.6v6.45h-12.9v-2.15c0,-2.40195 1.89805,-4.3 4.3,-4.3zM77.4,122.55h17.2v6.45h-17.2zM98.9,122.55h8.6c2.40195,0 4.3,1.89805 4.3,4.3v2.15h-12.9zM60.2,133.3h12.9v6.45h-8.6c-2.40195,0 -4.3,-1.89805 -4.3,-4.3zM77.4,133.3h17.2v6.45h-17.2zM98.9,133.3h12.9v2.15c0,2.40195 -1.89805,4.3 -4.3,4.3h-8.6z"></path></g></g></svg> -->
						</span>
  					</div>
					  <b>
  						<input type="text" v-model="form.name" class="form-control" placeholder=" نام خود را وارد نمایید" aria-label="Username" aria-describedby="basic-addon1" style="font-size: 13px;text-align: right;background-color: #f5f5f5;border-color: #eee;height: 44px;width: 270px;border-radius: 10px 0px 0px 10px;">
					  </b>
				</div>
			  <div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span style="background-color: #51075a;border-radius: 0px 5px 5px 0px;height: 43px;width: 50px;padding: 10px;text-align: center;">
							<svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 172 172" style="margin-top: -26px;width: 30px;margin-right: -3px;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M55.9,19.35c-5.9125,0 -10.75,4.8375 -10.75,10.75v111.8c0,5.9125 4.8375,10.75 10.75,10.75h60.2c5.9125,0 10.75,-4.8375 10.75,-10.75v-111.8c0,-5.9125 -4.8375,-10.75 -10.75,-10.75zM55.9,23.65h60.2c3.58613,0 6.45,2.86387 6.45,6.45v111.8c0,3.58613 -2.86387,6.45 -6.45,6.45h-60.2c-3.58613,0 -6.45,-2.86387 -6.45,-6.45v-111.8c0,-3.58613 2.86387,-6.45 6.45,-6.45zM58.05,30.1c-1.18418,0 -2.15,0.96582 -2.15,2.15v60.2c0,1.18418 0.96582,2.15 2.15,2.15h55.9c1.18418,0 2.15,-0.96582 2.15,-2.15v-60.2c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM60.2,34.4h51.6v55.9h-51.6zM68.8,38.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,47.3c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,55.9c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,64.5c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,73.1c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM68.8,81.7c-1.18418,0 -2.15,0.96582 -2.15,2.15c0,1.18418 0.96582,2.15 2.15,2.15c1.18418,0 2.15,-0.96582 2.15,-2.15c0,-1.18418 -0.96582,-2.15 -2.15,-2.15zM86,98.9c-3.56094,0 -6.45,2.88906 -6.45,6.45c0,3.56094 2.88906,6.45 6.45,6.45c3.56094,0 6.45,-2.88906 6.45,-6.45c0,-3.56094 -2.88906,-6.45 -6.45,-6.45zM64.5,118.25c-4.72832,0 -8.6,3.87168 -8.6,8.6v8.6c0,4.72832 3.87168,8.6 8.6,8.6h43c4.72832,0 8.6,-3.87168 8.6,-8.6v-8.6c0,-4.72832 -3.87168,-8.6 -8.6,-8.6zM64.5,122.55h8.6v6.45h-12.9v-2.15c0,-2.40195 1.89805,-4.3 4.3,-4.3zM77.4,122.55h17.2v6.45h-17.2zM98.9,122.55h8.6c2.40195,0 4.3,1.89805 4.3,4.3v2.15h-12.9zM60.2,133.3h12.9v6.45h-8.6c-2.40195,0 -4.3,-1.89805 -4.3,-4.3zM77.4,133.3h17.2v6.45h-17.2zM98.9,133.3h12.9v2.15c0,2.40195 -1.89805,4.3 -4.3,4.3h-8.6z"></path></g></g></svg>
						</span>
  					</div>
					  <b>
  						<input type="text" v-model="form.mobile" class="form-control" placeholder=" شماره موبایل خود را وارد نمایید" aria-label="Username" aria-describedby="basic-addon1" style="font-size: 13px;text-align: right;background-color: #f5f5f5;border-color: #eee;height: 44px;width: 270px;border-radius: 10px 0px 0px 10px;">
					  </b>
				</div>
				 <div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span style="background-color: #51075a;border-radius: 0px 5px 5px 0px;height: 43px;width: 50px;padding: 10px;text-align: center;">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 172 172" style="margin-top: -22px;width: 30px;margin-right: -3px;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M63.57617,10.75c-3.59033,0 -6.96021,1.39624 -9.50073,3.93677l-17.88867,17.88867c-2.54053,2.54053 -3.93677,5.9104 -3.93677,9.50073v18.21411l-22.96973,13.78393c-2.40405,1.43823 -3.90527,4.09424 -3.90527,6.90772v72.20557c0,4.44067 3.62183,8.0625 8.0625,8.0625h145.125c4.44067,0 8.0625,-3.62183 8.0625,-8.0625v-72.20557c0,-2.81348 -1.50122,-5.46948 -3.90527,-6.90772l-22.96973,-13.78393v-41.47778c0,-4.44067 -3.62183,-8.0625 -8.0625,-8.0625zM64.5,16.125h67.1875c1.48022,0 2.6875,1.20728 2.6875,2.6875v64.5c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-16.75488l20.19824,12.12524c0.80835,0.48291 1.30176,1.36474 1.30176,2.29907v3.27539l-71.95361,32.2605c-2.08911,0.93433 -4.50366,0.93433 -6.59277,0l-71.95361,-32.2605v-3.27539c0,-0.93433 0.49341,-1.82666 1.30176,-2.29907l20.19824,-12.12524v16.75488c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-40.3125h18.8125c4.44067,0 8.0625,-3.62183 8.0625,-8.0625zM59.125,17.46875v17.46875c0,1.48022 -1.20728,2.6875 -2.6875,2.6875h-17.46875c0.29395,-0.44092 0.62988,-0.86084 1.01831,-1.24927l17.88867,-17.88867c0.38843,-0.38843 0.80835,-0.72436 1.24927,-1.01831zM83.3125,43c-10.37207,0 -18.8125,8.44043 -18.8125,18.8125v16.125c0,10.37207 8.44043,18.8125 18.8125,18.8125h16.125c1.49072,0 2.6875,-1.20728 2.6875,-2.6875c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875h-16.125c-7.41162,0 -13.4375,-6.02588 -13.4375,-13.4375v-16.125c0,-7.41162 6.02588,-13.4375 13.4375,-13.4375h5.375c7.41162,0 13.4375,6.02588 13.4375,13.4375v16.125c0,1.48022 -1.20728,2.6875 -2.6875,2.6875c-1.48022,0 -2.6875,-1.20728 -2.6875,-2.6875v-13.4375c0,-5.9314 -4.8186,-10.75 -10.75,-10.75c-5.9314,0 -10.75,4.8186 -10.75,10.75v10.75c0,5.9314 4.8186,10.75 10.75,10.75c2.82397,0 5.375,-1.11279 7.29614,-2.89746c1.48022,1.75317 3.66382,2.89746 6.14136,2.89746c4.44067,0 8.0625,-3.62183 8.0625,-8.0625v-16.125c0,-10.37207 -8.44043,-18.8125 -18.8125,-18.8125zM86,59.125c2.96045,0 5.375,2.41455 5.375,5.375v10.75c0,2.96045 -2.41455,5.375 -5.375,5.375c-2.96045,0 -5.375,-2.41455 -5.375,-5.375v-10.75c0,-2.96045 2.41455,-5.375 5.375,-5.375zM10.75,90.15723l69.74902,31.26318c1.75317,0.77685 3.63233,1.16528 5.50098,1.16528c1.86865,0 3.7478,-0.38843 5.50098,-1.16528l69.74902,-31.26318v63.03027c0,1.48022 -1.20728,2.6875 -2.6875,2.6875h-145.125c-1.48022,0 -2.6875,-1.20728 -2.6875,-2.6875zM18.8125,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM32.25,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM45.6875,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM59.125,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM72.5625,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM86,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM99.4375,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM112.875,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM126.3125,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM139.75,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875zM153.1875,134.375c-1.49072,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.19678,2.6875 2.6875,2.6875c1.49072,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.19678,-2.6875 -2.6875,-2.6875z"></path></g></g></svg>
						</span>
  					</div>
					  <b>
  						<input type="text" v-model="form.email" class="form-control" placeholder=" ایمیل موبایل خود را وارد نمایید" aria-label="Username" aria-describedby="basic-addon1" style="font-size: 13px;text-align: right;background-color: #f5f5f5;border-color: #eee;height: 44px;width: 270px;border-radius: 10px 0px 0px 10px;">
					  </b>
				</div>
				<div class="input-group mb-3">
  					<div class="input-group-prepend">
    					<span style="background-color: #51075a;border-radius: 0px 5px 5px 0px;height: 43px;width: 50px;padding: 10px;text-align: center;">
							<img src="../assets/img/pass.png" alt="Logo" style="margin-top: -5px;width: 30px;margin-right: -3px;"/>
						</span>
  					</div>
					  <b>
  						<input type="password" v-model="form.password" class="form-control" placeholder=" رمز عبور خود را وارد نمایید" aria-label="Username" aria-describedby="basic-addon1" style="font-size: 13px;text-align: right;background-color: #f5f5f5;border-color: #eee;height: 44px;width: 270px;border-radius: 10px 0px 0px 10px;">
					  </b>
				</div>
				<button class="btn btn-primary btn-lg active" style="width: 262px;height: 45px;margin-top: 20px;margin-right: 22px;padding: 4px;background-color: #500759;border-color: #500759;"><b>ثبت نام</b></button>
		  	</form>
			   <div class="form-group" id="exampleGroup4" style="margin-top: 15px;">
        <checkbox v-model="form.checked" id="exampleInput4" style="padding: 20px;margin-right: 68px;font-size: 15px;">
			<b style="margin-right: 10px;position: absolute;">قبلا ثبت نام کرده اید؟</b> 
        </checkbox>
        <button class="btn btn-default" @click="onClick" style="margin-right: 109px;font-size: 15px;color: #036484;margin-top: -9px;border-color: white;"><b>ورود</b></button>
      </div>      
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
		baseUrl:"http://localhost:5000/bibtel/api",
      	form: {
        	name: '',
        	mobile: '',
        	password: '',
			email:'',
      	},
    //  erorra:[],
    }
  },
  methods: { 
    onSubmit (evt) {
	  evt.preventDefault()
	  console.log("click")
    axios.post(`${this.baseUrl}/register`, this.form)
    .then(response => {
	  console.log(response)
      this.form = response.data;
      if(this.form.status === 200){
	  this.$refs.modal.show()
	  }
    })
    .catch(error => {
	 if (error.response && error.response.status === 400) {
			//   console.log(error.response.data.errors.name);
			   this.erorra  = error.response.data.errors.name;
			  console.log(this.erorra )
          }
    })
    },
    onClick(e){
      e.preventDefault();
      this.$router.push('/admin/login')
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
  height: 600px;
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