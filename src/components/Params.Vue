<template>
  <div>
      <h1>{{message}}</h1>
      <hr/>
      <h2>{{ $route.params.username }}</h2>
      <h2>{{ $route.params.number }}</h2>
  </div>
</template>

<script>
export default {
  name:'right',
  data () {
    return {
      message: 'right'
    }
  }
}
</script>
