<template>
  <div><h1>add product</h1>
   <v-form>
      <v-container>
        <v-row>
      
         <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="seller"
            id="seller"
            value="2"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
          id="category"
            label="category"
            value="1"
          ></v-text-field>
        </v-col></v-row><v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
          id="names"
            label="names"
            value="sadasdasdasds"
          ></v-text-field>
        </v-col>
      <v-col cols="12" sm="6" md="3">
          <v-text-field
          id="detail"
            label="detail"
            value="de"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
          id="price"
            label="price"
            value="12"
          ></v-text-field>
        </v-col></v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="quantity"
            id="quantity"
            value="1"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="image"
            id="image"
            value="im"
          ></v-text-field>
        </v-col>
        <!-- <v-file-input type='file' @change="updateProfile(event)"></v-file-input> -->
        <input type="file" id="file" ref="myFiles" class="custom-file-input" 
  @change="updateProfile" >
      <v-btn @click ="submit()" color="success">Add</v-btn>
      
      </v-container>
   </v-form>
    
  </div>
  
  
</template>

<script>
export default {
  mounted(){
    this.submit()
    this.photo = ""
  },
  methods: {
    updateProfile(e){
      let file = e.target.files[0]
      // console.log(e);
      let reader = new FileReader()
      reader.onloadend = function() {
        let b64 =reader.result
        
        localStorage.setItem('base64', b64)
        // console.log('RESULT', b64)
        
    }
    console.log(this.photo);
    
    reader.readAsDataURL(file)

    },
    submit () {
      
      
    
      this.axios.post('http://localhost:3000/api/v1/products', {
        
         seller: seller.value,
         category:category.value,
         name: names.value,
         detail: detail.value,
         price: price.value,
         quantity: quantity.value,
         image: localStorage.getItem('base64')

        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }}
</script>




