<script setup>
  const { data: categories } = await useFetch('http://localhost:3001/category')

</script>
<template>
  <div>
    <pre>{{ categories }}</pre>>
  </div>
</template>
