<template>
  <div class="container">

	  <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
<div class="border-ticket1" style="border: 2px solid #eee;margin-top: 38px;padding: 0px; border-radius:10px;">
<div class="container bootstrap snippet" style="margin-left: -10px;">
    <div class="col-md-8 col-sm-12 col-xs-12">
    	<div class="row">
		    <div class="col-md-12">
		        <div class="widget-box">
		            <div class="widget-body">
		                <div class="widget-main no-padding">
		                    <div class="tickets-container" style="margin-top: 0px;width: 1095px;margin-left: -16px;">
								<h3>
									<b style="margin-left: 915px;position: absolute;margin-top: -20px;">List Ticket</b>
								</h3>
								<h6>
									<b style="margin-left: 914px;position: absolute;margin-top: 20px;font-size: 10px;color: #57c0d8;">List Ticket / List Ticket</b>
								</h6>
		                        <ul class="tickets-list"> 
		                            <li class="ticket-item" style="width: 258px;height: 99px;direction: rtl;margin-left: 797px;margin-top: 78px;border-radius: 8px;">
		                                <div class="row">
		                                    <div class="ticket-time  col-md-4 col-sm-6 col-xs-12">
		                                        <span class="time" style="font-size: 27px;position: absolute;margin-right: 10px;margin-top: 5px;">{{tickets.length}}</span>
		                                        <span class="time" style="position: absolute;width: 90px;font-size: 21px;margin-right: 10px;margin-top: 43px;">jam ticket</span>
												<img src="../assets/img/TICKET HA.png" style="width: 85px;margin-right: 161px;margin-top: -6px;">
		                                    </div>
		                                </div>
		                            </li>
									<li class="ticket-item" style="width: 258px;height: 99px;direction: rtl;margin-left: 525px;margin-top: 66px;margin-top: -106px;border-radius: 8px;margin-bottom: 25px;">
		                                <div class="row">
		                                    <div class="ticket-time  col-md-4 col-sm-6 col-xs-12">
		                                        <span class="time" style="font-size: 27px;position: absolute;margin-right: 10px;margin-top: 5px;">0</span>
		                                        <span class="time" style="position: absolute;width: 90px;font-size: 21px;margin-right: 10px;margin-top: 43px;">dr entzr</span>
												<img src="../assets/img/narenji.png" style="width: 85px;margin-right: 161px;margin-top: -6px;">
		                                    </div>
		                                </div>
		                            </li>
									<li class="ticket-item" style="width: 258px;height: 99px;direction: rtl;margin-left: 255px;margin-top: -122px;border-radius: 8px;margin-bottom: 25px;">
		                                <div class="row">
		                                    <div class="ticket-time  col-md-4 col-sm-6 col-xs-12">
		                                        <span class="time" style="font-size: 27px;position: absolute;margin-right: 10px;margin-top: 5px;">0</span>
		                                        <span class="time" style="position: absolute;width: 90px;font-size: 21px;margin-right: 10px;margin-top: 43px;">dr entzr</span>
												<img src="../assets/img/sabz.png" style="width: 85px;margin-right: 161px;margin-top: -6px;">
		                                    </div>
		                                </div>
		                            </li>
									<li class="ticket-item" style="width: 258px;height: 99px;direction: rtl;margin-left: -15px;margin-top: -122px;border-radius: 8px;margin-bottom: 25px;">
		                                <div class="row">
		                                    <div class="ticket-time  col-md-4 col-sm-6 col-xs-12">
		                                        <span class="time" style="font-size: 27px;position: absolute;margin-right: 10px;margin-top: 5px;">0</span>
		                                        <span class="time" style="position: absolute;width: 90px;font-size: 21px;margin-right: 10px;margin-top: 43px;">brtart</span>
												<img src="../assets/img/abi.png" style="width: 85px;margin-right: 161px;margin-top: -6px;">
		                                    </div>
		                                </div>
		                            </li>
		                            <li class="ticket-item" style="width: 1055px;margin-left: -13px;border-radius: 10px;margin-top: -14px;width: 1070px;background-color: whit;height: 49px;x;">
		                                <div class="row">
											<b>
												<span style="position: absolute;margin-left: 1041px;margin-top: 10px;">#</span>
												<span style="position: absolute;margin-left: 900px;margin-top: 10px;width: 100px; color:#64abde;">Create Adell</span>
												<span style="position: absolute;margin-left: 800px;margin-top: 10px;width: 100px;">Title</span>
												<span style="position: absolute;margin-left: 600px;margin-top: 10px;width: 100px;">Description</span>
												<span style="position: absolute;margin-left: 350px;margin-top: 10px;width: 100px;">Date</span>
												<span style="position: absolute;margin-left: 190px;margin-top: 10px;width: 100px;color:#64abde;">Massol</span>
												<span style="position: absolute;margin-left: 70px;margin-top: 10px;width: 100px;">Status</span>
										   </b>
		                                </div>
		                            </li>
									<li class="ticket-item" v-for="item in tickets" :key="item._id" style="width: 1055px;margin-left: -13px;border-radius: 10px;margin-top: 7px;width: 1070px;background-color: whit;height: 49px;x;">
		                                <div class="row">
											<b>
												<span style="position: absolute;margin-left: 1041px;margin-top: 10px;">{{item.code}}</span>
												<span style="position: absolute;margin-left: 900px;margin-top: 10px;width: 100px; color:#64abde;" v-if="item.user_id">{{item.user_id.name}}</span>
												<span style="position: absolute;margin-left: 800px;margin-top: 10px;width: 100px;">Title</span>
												<span style="position: absolute;margin-left: 510px;margin-top: 10px;width: 250px;">{{item.question}}</span>
												<span style="position: absolute;margin-left: 350px;margin-top: 10px;width: 100px;">{{item.date}}</span>
												<span style="position: absolute;margin-left: 190px;margin-top: 10px;width: 100px;color:#64abde;">Operator</span>
												<span style="position: absolute;margin-left: 18px;margin-top: 10px;width: 200px;"><button style="margin-top: -8px;" class="btn btn-success">Create new ticket</button></span>
										   </b>
		                                </div>
		                            </li>
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
  </div>
</template>
<script>
import axios from "axios";
export default {
	data() {
		return {
		
		tickets:[],
		
		};
	},
	created(){
		let apiURL = 'http://localhost:5000/bibtel/api/get_all_tickets';
		axios.get(apiURL).then(result => {
				// this.Students = res;
				this.tickets=result.data.ticket;
				console.log(result.data.ticket)
				// console.log(data)
		}).catch(error => {
				console.log(error)
			});
	},
};
</script>
<style>
.tickets-container .tickets-list .ticket-item .ticket-state i {
    font-size: 13px;
    color: #fff;
    line-height: 20px;
}
.tickets-container .tickets-list .ticket-item .ticket-state {
    position: absolute;
    top: 13px;
    right: -12px;
    height: 24px;
    width: 24px;
    -webkit-border-radius: 50%;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 50%;
    -moz-background-clip: padding;
    border-radius: 50%;
    background-clip: padding-box;
    background-color: #e5e5e5;
    text-align: center;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.2);
    -moz-box-shadow: 0 0 3px rgba(0,0,0,.2);
    box-shadow: 0 0 3px rgba(0,0,0,.2);
    border: 2px solid #fff;
}
.bg-palegreen {
    background-color: #a0d468!important;
}
.tickets-container .tickets-list .ticket-item .ticket-type .type {
    color: #999;
    font-size: 11px;
    text-transform: uppercase;
}
.tickets-container .tickets-list .ticket-item .ticket-type {
    line-height: 30px;
    height: 50px;
    padding: 10px;
}
.tickets-container .tickets-list .ticket-item .ticket-time i {
    color: #ccc;
    width:50px;
}

.tickets-container .tickets-list .ticket-item .divider {
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 1px;
    background-color: #eee;
    display: inline-block;
}
.tickets-container .tickets-list .ticket-item .ticket-time {
    line-height: 30px;
    height: 50px;
    padding: 10px;
}
.tickets-container .tickets-list .ticket-item .ticket-user .user-company {
    margin-left: 2px;
    color: #999;
}
.tickets-container .tickets-list .ticket-item .ticket-user .user-at {
    margin-left: 2px;
    color: #ccc;
    font-size: 13px;
}
.tickets-container .tickets-list .ticket-item .ticket-user .user-name {
    margin-left: 5px;
    font-size: 13px;
}
.tickets-container .tickets-list .ticket-item .ticket-user .user-avatar {
    width: 30px;
    height: 30px;
    -webkit-border-radius: 3px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 3px;
    -moz-background-clip: padding;
    border-radius: 3px;
    background-clip: padding-box;
}
.tickets-container .tickets-list .ticket-item .ticket-user {
    height: 50px;
    padding: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.tickets-container .tickets-list .ticket-item {
    position: relative;
    background-color: #fff;
    /* -webkit-box-shadow: 0 0 3px rgba(0,0,0,.2); */
    /* -moz-box-shadow: 0 0 3px rgba(0,0,0,.2); */
    /* box-shadow: 0 0 3px rgba(0,0,0,.2); */
    -webkit-border-radius: 3px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 3px;
    -moz-background-clip: padding;
    border-radius: 3px;
    background-clip: padding-box;
    margin-bottom: 8px;
    padding: 0 15px;
    vertical-align: top;
}
.tickets-container .tickets-list {
    list-style: none;
    padding: 0;
    margin-bottom: 0;
}
.tickets-container {
    position: relative;
    padding: 25px 25px;
    background-color: #f5f5f5;
}
.widget-main.no-padding {
    padding: 0;
}
.widget-main {
    padding: 12px;
}
.no-padding {
    padding: 0!important;
}
.widget-body {
    background-color: #fbfbfb;
    /* -webkit-box-shadow: 1px 0 10px 1px rgba(0,0,0,.3);
    -moz-box-shadow: 1px 0 10px 1px rgba(0,0,0,.3);
    box-shadow: 1px 0 10px 1px rgba(0,0,0,.3); */
}

.widget-header>.widget-caption {
    line-height: 33px;
    padding: 0;
    margin: 0;
    float: left;
    text-align: left;
    font-weight: 400!important;
    font-size: 13px;
}

.widget-header .widget-icon {
    display: block;
    width: 30px;
    height: 32px;
    position: relative;
    float: left;
    font-size: 111%;
    line-height: 32px;
    text-align: center;
    margin-left: -10px;
}
.themesecondary {
    color: #5bc0de !important;
}
.widget-header.bordered-bottom {
    border-bottom: 3px solid #fff;
}
.widget-header {
    position: relative;
    min-height: 35px;
    background: #fff;
    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.3);
    -moz-box-shadow: 0 0 4px rgba(0,0,0,.3);
    box-shadow: 0 0 4px rgba(0,0,0,.3);
    color: #555;
    padding-left: 12px;
    text-align: right;
}
.bordered-themesecondary {
    border-color: #5bc0de !important;
}
.widget-box {
    padding: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    margin: 3px 0 30px 0;
}                    
</style>
