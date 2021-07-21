<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: null,
      id: 123
    }
  },
  created() {
    // eslint-disable-next-line no-undef
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
