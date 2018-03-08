<template>
  <div class="hi">
      <h1>{{message}}</h1>
      <router-view/>
  </div>
    
</template>

<script>
export default {
  name:'hi',
  data () {
      return {
          message: 'hi'
      }
  }
}
</script>

