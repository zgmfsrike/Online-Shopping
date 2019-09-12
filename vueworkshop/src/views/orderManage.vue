<template>
  <div><h1>add product</h1>
   <v-form>
      <v-container>
        <v-row>
      
         <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="seller"
            id="seller"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
          id="category"
            label="category"
          ></v-text-field>
        </v-col></v-row><v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
          id="name"
            label="name"
          ></v-text-field>
        </v-col>
      <v-col cols="12" sm="6" md="3">
          <v-text-field
          id="detail"
            label="detail"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
          id="price"
            label="price"
          ></v-text-field>
        </v-col></v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="quantity"
            id="quantity"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="image"
            id="image"
          ></v-text-field>
        </v-col>
      <v-btn @click ="submit()" color="success">Add</v-btn>
      </v-container>
   </v-form>
    
  </div>
  
  
</template>

<script>
export default {
  mounted(){
    this.submit()
  },
  methods: {
    submit () {
      this.axios.post('http://localhost:3000/api/v1/products', {
         seller: seller,
         category:category,
         name: name,
         detail: detail,
         price: price,
         quantity: quantity,
         image: image

        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>




