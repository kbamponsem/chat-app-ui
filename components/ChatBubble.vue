<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
})

const background = computed(() => {
    if (props.type === "sent") {
        return "bg-neutral-950"
    } else {
        return "bg-sky-950"
    }
})

const position = computed(() => {
    if (props.type === "sent") {
        return "justify-end text-right"
    } else {
        return "justify-start"
    }
})

</script>
<template>
    <div :class="`flex ${position}`">
        <div :class="`p-3 w-4/5 rounded-br-xl rounded-tl-xl rounded-tr-xl rounded-bl-xl ${background}`">{{ message }}
        </div>
    </div>
</template>