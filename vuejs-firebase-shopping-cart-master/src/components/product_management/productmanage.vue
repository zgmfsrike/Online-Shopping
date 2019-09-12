<template>
<div>
  <h>Product Management</h>
  <v-data-table
    :headers="headers"
    :items="Product"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'No.',
            align: 'left',
            sortable: false,
            value: 'productnumber',
          },
          { text: 'Picture', value: 'img' },
          { text: 'Product Name', value: 'name' },
          { text: 'Amount', value: 'amount' },
          { text: 'Price', value: 'price' },
          { text: 'Date', value: 'date' },
          { text: 'Status', value: 'status' }
        ]
          }
      }
  }
    
</script>