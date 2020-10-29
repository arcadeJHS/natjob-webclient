<template>
  <div>

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
    fetch('http://natjobapi.matteopiazza.wtf/cats', {method: 'GET'})
      .then(response => response.json())
      .then(data => this.cats = data);
  }
}
</script>
