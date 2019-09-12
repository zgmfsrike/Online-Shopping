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
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    
    <div v-if="Admin"><Admin /></div>
    <div v-else><Seller /></div>
  </div>
</div>
</template>

<script>
import Admin from '@/components/Admin'
import Seller from '@/components/Seller'
export default {
  components: {
    Admin,Seller
  }
}
</script>