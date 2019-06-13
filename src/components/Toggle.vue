<template>
  <div>
    <label>
      <input type="checkbox" @change="action(data)">
      <span>{{data.title}}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    data: Object,
    action: Function
  }
}
</script>
