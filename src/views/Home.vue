<template>
  <div>

    <h2>Cats</h2>

    <pre>{{cats}}</pre>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      cats: null
    };
  },
  mounted () {
    const url = `${process.env.VUE_APP_API_BASE}/cats`;
    
    fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(data => this.cats = data);
  }
}
</script>
