<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 col-sm-10 offset-sm-1">
     <form id="register-form" role="form">
        <h3 class="text-center" style="margin-bottom: 25px;">Add Buyer</h3>
        <div class ="form-group">
          <div class="row" style="margin-left: 0px;">
              <div class="col-md-6" style="padding-left: 0;">
                <input type= "text" name="firstname" id="firstname" class="form-control" placeholder="Firstname">
              </div>
              <div class="col-md-6" style="padding-left: 0;">
                <input type= "text" name="lastname" id="lastname" class="form-control" placeholder="Lastname">
              </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row" style="margin-left: 0px;">
              <div class="col-md-6" style="padding-left: 0;">
                <input type= "text" name="username" id="username" class="form-control" placeholder="Username">
              </div>
              <div class="col-md-6" style="padding-left: 0;">
                <input type="password" name="password" id="password" class="form-control" placeholder="Password" v-model="password">
              </div>
          </div>
        </div>
        <div class="form-group">
          <input type="email" name="email" id="email" class="form-control" placeholder="Email" value=""
          v-model="email">
        </div>
        <div class="form-group">
          <div style="padding-left: 0;">
                <input type= "text" name="address" id="address" class="form-control" placeholder="Address">
          </div>
        </div>
        <div class ="form-group">
          <div class="row" style="margin-left: 0px;">
              <div class="col-md-6" style="padding-left: 0;">
                <input type= "tel" name="tel" id="tel" class="form-control" placeholder="Phone number" >
              </div>
              <div class="col-md-6" style="padding-left: 0;">
                       <input placeholder="Date of Birth" class="form-control" type="text" onfocus="(this.type='date')"  id="date">
              </div>
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <v-btn color="success"><router-link to="/admin"><a>Save</a></router-link></v-btn>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        email: '',
        password: '',
        isLoading: false
      }
    },
    methods: {
       ...mapActions(['clearMessage', 'addMessage', 'registerByEmail']),
      registerByEmailLocal() {
        this.isLoading = true
        let data = {
          email: this.email,
          password: this.password
        }
        this.registerByEmail(data).then(() => {
          this.clearMessage();
          this.$router.push({name: 'mainpage'});
        })
        .catch((error) => {
          // console.log('register error', error);
          let message_obj = {
              message: error.message,
              messageClass: "danger",
              autoClose: true
            }
           this.addMessage(message_obj);
        }).then(() => {
          this.isLoading = false
        })
      }
    }
  }
</script>
<style scoped>
a {
  color: #fff !important;
  text-decoration: none !important;
}
</style>