<script setup lang="ts">
import { useChats } from "~/stores/chats";

const store = useChats()
const props = useAttrs()

const userId = (props.recipient as string).toLowerCase()
await store.fetchUserChats(userId)

const messages = computed(() => store.userChats(userId))

// Watch for new messages
const { $socket } = useNuxtApp()
onMounted(() => {
    $socket.onopen = () => {
        console.log("Connected to socket server")
    }

    $socket.onerror = (error) => {
        console.error("Socket error: ", error)
    }

    $socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        console.log("User Id: ", userId)
        if (data.channel === userId) {
            store.addMessage(userId, data.content)
        }
    }
})

const username = computed(() => store.username)

</script>

<template>
    <NuxtLayout name="userchat" :recipient="props.recipient" :username="username">
        messages: {{ messages }}
    </NuxtLayout>
</template>