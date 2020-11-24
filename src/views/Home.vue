<template>
  <div>

    <h2>JOBS</h2>

    <pre>{{jobs}}</pre>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      jobs: null
    };
  },
  mounted () {
    // test fetch
    const url = `${process.env.VUE_APP_API_BASE}/jobs`;
    
    fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(data => this.jobs = data);
  }
}
</script>
