<template>
  <div>
    <v-text-field
      name="email"
      label="email"
      id="email"
    ></v-text-field>
    <v-text-field
      name="password"
      label="password"
      id="password  "
    ></v-text-field>
    <v-btn @click ="submit()" color="success">text</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    submit () {
      this.$router.push('/Dashboard')
    }
  }
}
</script>
