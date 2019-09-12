<template>
  <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item" name="buyer">
        <a class="nav-link active" href="/admin">Buyer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/seller">Seller</a>
      </li>
      
    </ul>
  </div>
  <div class="card-body">
    
  <h1>Buyer Management</h1>
  <div  id="reset-store-panel" class="card-body text-center"><a href="/adduser"><v-btn large color="success" class="btn btn-warning">Add Buyer</v-btn></a></div>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
  <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
    <template v-slot:item="props">
      <tr>
        <td class="text-xs-right"><v-checkbox v-model="props.item.fat"></v-checkbox></td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right" style="text-align: left">{{ props.item.calories }}</td>
        <td class="text-xs-right" style="text-align: left">{{ props.item.fat }}</td>
        <td class="text-xs-right" style="text-align: left">{{ props.item.carbs }}</td>
        <td class="text-xs-right" style="text-align: left">{{ props.item.protein }}</td>
        <!-- <v-btn text large color="error">Error</v-btn> -->
        <td><v-btn color="error" @click="deleteRow(props.item)">delete</v-btn></td>
        
      </tr>
        <!-- {{item}} -->
    </template>
  </v-data-table>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'user id', value: 'calories' },
          { text: 'Password', value: 'fat' },
          { text: 'username', value: 'carbs' },
          { text: 'Wallet', value: 'protein' },
          { text: 'Action'},
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },methods: {
      deleteRow(rowData){
      alert("You clicked delete on"+ JSON.stringify(rowData.name))
      },
      del (index) {
      // this.arr.splice(index, 1)
      this.$delete(index.filter((value) =>{
        return value
      }))
    }
  }
  }
</script>

<style scoped>
#reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
    z-index: 9999;
    width: 170px;
    height: 70px;
}
</style>