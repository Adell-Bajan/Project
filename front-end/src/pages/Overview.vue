<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row" v-for="(item, index) in items" :key="index">
		  <div class="card" style="width: 350px;padding: 22px;height: 400px;cursor: pointer;margin-left: 40px;" v-on:click="$router.push(item.link)" elevation="5">
  			<img :src="item.image" style="width:300px;" />
  			<div class="container">
    			<h3><b style="margin-left: 86px;">{{ item.text }}</b></h3> 
  			</div>
		</div>
      </div>
      </div>
  </div>
</template>
<script>

  export default {
   data() {
    return {
      items: [
        {
          image: require("../assets/img/1.png"),
          link: "/admin/ticket",
          text: "Support"
		},
		{
          image: require("../assets/img/asli.png"),
          link: "/admin/department",
          text: "Department"
		},
      ]
    };
  }
   
  }
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
