<script setup lang="ts">
import { onMounted } from 'vue';
const store = useChats()

const { $socket } = useNuxtApp()
console.log($socket)
const users = [{
    name: "John",
    link: "/chats/john",
    lastMessage: {
        "content": "Hello, world!",
        "timestamp": "2021-10-10T12:00:00.000Z"
    },
    messages: [{
        message: "Hello, world!",
        type: "sent"
    }]
},
{
    name: "Jane",
    link: "/chats/jane",
    lastMessage: {
        "content": "Hello, world!",
        "timestamp": "2021-10-10T12:00:00.000Z"
    }
},
{
    name: "Joe",
    link: "/chats/joe",
    lastMessage: {
        "content": "Hello, world!",
        "timestamp": "2021-10-10T12:00:00.000Z"
    }
},
{
    name: "Jill",
    link: "/chats/jill",
    lastMessage: {
        "content": "Hello, world!",
        "timestamp": "2021-10-10T12:00:00.000Z"
    }
},
{
    name: "Jack",
    link: "/chats/jack",
    lastMessage: {
        "content": "Hello, world!",
        "timestamp": "2021-10-10T12:00:00.000Z"
    }
},
{
    name: "Jenny",
    link: "/chats/jenny",
    lastMessage: {
        "content": "Hello, world!",
        "timestamp": "2021-10-10T12:00:00.000Z"
    }
},
{
    name: "Jesse",
    link: "/chats/jesse",
    lastMessage: {
        "content": "Hello, world!",
        "timestamp": "2021-10-10T12:00:00.000Z"
    }
},
{
    name: "Jasmine",
    link: "/chats/jasmine",
    lastMessage: {
        "content": "Hello, world!",
        "timestamp": "2021-10-10T12:00:00.000Z"
    }
},
{
    name: "Jared",
    link: "/chats/jared",
    lastMessage: {
        "content": "Hello, world!",
        "timestamp": "2021-10-10T12:00:00.000Z"
    }
}].slice(0, 3)

const route = useRoute();
const matchesChats = computed(()=> route.fullPath === "/chats")

</script>
<template>
    <div>
        <NuxtLayout name="chat">
            <template #sidebar>
                <div class="flex flex-col gap-12">
                    <h2 class="text-2xl font-bold text-neutral-100">Chats</h2>
                    <div>
                        <UserBubble v-for="({ name, lastMessage, link }) in users" :name="name" :lastMessage="lastMessage"
                            :link="link" />
                    </div>
                </div>
            </template>
            <template #main>
                <div v-if="matchesChats" class="w-full h-full flex items-center justify-center">
                    <h2 class="text-2xl font-bold text-neutral-100">Select a chat</h2>
                </div>
                <NuxtPage :key="route.fullPath" :recipient="$route.params.user" />
            </template>
        </NuxtLayout>
    </div>
</template>