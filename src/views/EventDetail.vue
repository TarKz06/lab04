<template>
    <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.time}} on {{ event.date }} @ {{ event.location}}</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            event : null
        }
    },
    created(){
        
    }
}
</script>