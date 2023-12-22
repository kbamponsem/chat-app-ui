<script setup lang="ts">
import { ref, useAttrs } from 'vue';


const props = useAttrs()
console.log(props)
const data = ref('')

const { $socket } = useNuxtApp()

const activateButton = computed(() => {
    return data.value.length > 0
})

const sendToServer = () => {
    $socket.send(JSON.stringify({
        sender: props.username,
        recipient: props.recipient,
        channel: props.recipient,
        content: data.value
    }))
    data.value = ''
}
</script>
<template>
    <div class="flex flex-col h-full">
        <div class="h-full w-full gap-4 flex flex-col justify-end pb-8 overflow-y-auto">
            <slot />
        </div>
        <form @submit.prevent @submit="sendToServer" class="w-full h-14 rounded-lg flex bg-neutral-950 pr-5 items-center">
            <input type="text" placeholder="Type a message...🤗" :class="`
            w-full h-full text-black-100 pl-5 rounded-lg bg-transparent  outline-none
             text-lg font-medium
            tracking-wide
            `" v-model="data" />
            <button :disabled="!activateButton" type="submit"
                class="rounded-md text-lg font-medium bg-blue-500 h-fit px-6 py-1" :class="`
            ${!activateButton ? 'bg-gray-800' : 'bg-blue-600'}
            `">Send</button>
        </form>
    </div>
</template>