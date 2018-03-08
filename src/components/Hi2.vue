<template>
  <div>
      <h1>
          {{message}}
      </h1>
      <h1>
          {{$route.params.username}}
      </h1>
  </div>
</template>


<script>
export default {
  name:'hi2',
  data () {
      return {
          message: 'hi2'
      }
  }
}
</script>
