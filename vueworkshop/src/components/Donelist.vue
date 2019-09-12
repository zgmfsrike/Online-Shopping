<template>
<div>
  <h1>Done list</h1>
  <v-data-table
    :headers="headers"
    :items="done"
    :items-per-page="10"
    class="elevation-1">
  <template v-slot:item="props">
    <tr>
    <td>{{ props.item.id }}</td>
    <td class="text-xs-right">{{ props.item.title }}</td>
    <td class="text-xs-right"><v-checkbox v-model="props.item.completed"></v-checkbox></td>
    </tr>
  </template>
  </v-data-table>
</div>
</template>

<script>
import {sync} from 'vuex-pathify'
export default {
  mounted () {
    this.getData()
  },
  computed: {
    datas: sync('items'),
    done () {
      return this.datas.filter(data => data.completed)
    }
  },
  methods: {
    getData () {
      this.axios.get('https://jsonplaceholder.typicode.com/todos/').then((response) => {
        this.datas = response.data
        this.datas.splice(6, 194)
        console.log(this.datas)
      })
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Number',
          align: 'center',
          value: 'id'
        },
        { text: 'Lists', value: 'title' },
        { text: 'Check', value: 'completed' }
      ]
    }
  }
}
</script>
