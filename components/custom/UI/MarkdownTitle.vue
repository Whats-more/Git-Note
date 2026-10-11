<template>
    <h1
    :contenteditable="isEditing"
    @click="startEdit"
    @blur="stopEdit"
    @keydown.enter.exact.prevent="stopEdit"
    @keydown.esc.exact.prevent="stopEdit"
    :class="cn(props.class, 'max-w-full text-3xl text-gray-900\
        border-none outline-none\
        decoration-2\
        hover:underline\
        focus:underline')">
        <slot />
    </h1>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
const props = defineProps<{
  class?: HTMLAttributes['class']
}>();

const isEditing = ref(false);
const startEdit = () => {
    isEditing.value = true;
};
const stopEdit = () => {
    isEditing.value = false;
};
</script>