<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress" style="height: 20px;">
        <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px; margin-top: 0px;" :style="{width: (quoteCount / maxQuotes) * 100 + '%'}"> {{quoteCount}} / {{ maxQuotes }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['quoteCount','maxQuotes']
  }
</script>

<style scoped>

</style>
