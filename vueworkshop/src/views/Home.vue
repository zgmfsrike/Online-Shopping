<template>
  <div>
   <Donelist/>
   <Todolist/>
  </div>
</template>

<script>
import Todolist from '@/components/Todolist'
import Donelist from '@/components/Donelist'
export default {
  components: {
    Todolist, Donelist
  }
}
</script>
