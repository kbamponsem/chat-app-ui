<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    lastMessage: {
        type: Object as PropType<Message>,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    }
})
const route = useRoute()
const activeMarker = () => route.path === props.link
const active = ref(activeMarker())

watch(() => route.path, () => {
    active.value = activeMarker()
})
</script>
<template>
    <NuxtLink :to="link">

        <div class="
    flex flex-row items-center justify-between w-full h-18 py-2 border-b border-neutral-900 cursor-pointer
    hover:bg-neutral-900 px-3 rounded-lg
    " :class="{
        'bg-neutral-900': active,
        'bg-transparent': !active
    }
        ">
            <div class="flex flex-row items-center">
                <div class="w-12 h-12 rounded-full bg-neutral-800">
                    <img v-if="avatar" :src="avatar" class="w-full h-full rounded-full" />
                    <div v-else class="flex items-center justify-center font-bold text-xl w-full h-full">{{ name.at(0)
                    }}
                    </div>
                </div>
                <div class="flex flex-col ml-3">
                    <div class="text-lg font-medium text-neutral-100">{{ name }}</div>
                    <div class="text-sm font-medium text-neutral-600">{{ lastMessage.content }}</div>
                </div>
            </div>
            <div class="flex flex-row items-center">
                <div class="w-2 h-2 rounded-full bg-blue-300"></div>
                <div class="text-sm text-neutral-500 ml-2 font-bold">1</div>
            </div>
        </div>
    </NuxtLink>
</template>