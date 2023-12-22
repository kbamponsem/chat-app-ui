<template>
    <div class="flex flex-row bg-neutral-950 w-lvw h-lvh text-neutral-100">
        <div class="w-1/3 pt-8 pl-4 pr-4 overflow-y-auto">
            <slot name="sidebar"></slot>
        </div>
        <div class="bg-neutral-900 w-full p-3">
            <slot name="main"></slot>
        </div>
    </div>
</template>